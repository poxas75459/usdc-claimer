/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "46LzqyUxqok9iS8zyYXck7VwyW6J3EdJYB27tPc8uNDKCKTMh4Kveno8NQqqDq3zo8TFYBxgmfVLw6hcoBgP1ARA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QYmbbH3giNoXjse9MMsQFiygWaEuGMJ1i2XB3tWYynCRB4bsZH9GHHnkDpsrEKB58umWuxjaPhz2vevDei43gp",
  "key1": "63GBwK12EdnFxViSUB5BWc8jnFujW8LWP4TDc9nZrKDFbicBDZLa39MoGjRBbR7UrswnQ36zgxRK12m1jEw5RNq1",
  "key2": "1bZxkU39AnYP7BG23pjs6AFcXvM4FrSAuwCy9vTEsZ7RW9SzKnnwvy2TjGZrLCeKQn6HqCRMmzsM1c2HqktCcpE",
  "key3": "5cKYJzc4vDn3rc7WNbs6J9DxJrr7o2vqkGDCsPvAgejoPJrDmCGUobNhnwMKy2mttLtpHEL8fo3iDA561pE7B7wB",
  "key4": "4MGKhquziVUsi889TteX4gVkV6JXQgMGzGomReLZn4TAraabHvpj5dFkCqXRSFpYQC9Kgrm1hop7nkjDMkGvcrnW",
  "key5": "55dvRS66mTJB9Kq6sAV6cLvp4e3pJM9fDK5T4C3xp99pCL3gXGi8kzhpo9DfnXHKGAxj6zXue3HYKKaiZryvQn6C",
  "key6": "3Aerd3ezbv88Wr3W9HabBiKKgLwBPcC9EmbRTHaXZvEpNrpYq3xwpDeJqWSpv5tK6ynYy1JtZxDpw5VnUDJS9qFD",
  "key7": "4ShxpJ17SiaiEbaa1Wn7ouP2PSjUMe9LCyg8uD2dn3DSF3wRYMD75eYWc2u17cWa3CUsMzgkCYiyZuYaF5qJbY2b",
  "key8": "3J5Q6Xr13vMoaFyXJMVsDVhRfPuvAC6v7SCJh8yX8X6UqdA8nENDYmZEoGa58LJPMFRiQQjZpueTJNvedr6Yi6KL",
  "key9": "2w34UeahWCspWnNZqsDxAtqi6KSecteZwKhbqhGBx83Ty1AGSmdcyEErzzjN29JJeJpjuEJK6wM5Tnoonw8RUVGK",
  "key10": "3ngo79xF4rL7wPNbasRNH3FDu8YyoPiyrYquPRmfgR3Db13TCmtt3gv6UWR9Y5mdbVq79f277FKUtLyJtZ4sQPYa",
  "key11": "Lto2jjo8CaGHchM3vPJVA8hgoKqYXqDG3CKCWeDN46nkv31arf3MWXuL8qVFt58oUitVcna5npNDTfbKaDEAMsV",
  "key12": "47hVt9WTCymrb3pPK44X9yHDMsb6EjPejzF3ThyJR3vtVXEk3MsVnpvHLc5JqBnvaBteQQMNU2axQhiSt84j8Vq6",
  "key13": "5CmZb2SrKnU7mz96RgceyTi4QMRB2Go7TLdDF7Sv5n2uarcgvaQN3UxhfbqcCprGtgPXv9KJs5swUBdfeKaXFy5L",
  "key14": "3LhuKoWnmWU4x6DLVytWGW5oGrJx9Wn6eUKpec3Az22KebbGLU8fNh8azpYvZXBNypUcKrEJ2LHk37SJesUEQGSa",
  "key15": "2Yyg31haQAbQPAoKT6fgBuDi7N8qbkLB62zr7JqfXGehk6pnZRobnCyjNnkegjVRDxvGp3w7mHRBbmpRCsqvcTXh",
  "key16": "31rS87i9T1QbhXiFyrnr3SvqAg62b2vpvngYHxtj1CDmkDqcK31UwHmzAUPyDWbg2qtFoAP8kqmU9keD23qe2E7y",
  "key17": "4VRgsQSsWb21mwZCipskBimzwQpZ9osm1R9JMfCXsfZZBj8X9jyY1LzmXdjbP7T6Z6M81RrM2YQC75bGRPuucjp1",
  "key18": "3ZUy2rq7MDTvdZouBqFUXjmo6AaypzJKAdedYak2PN4pQKdhyAKrfD2w5DpseY1Zs3yb17eP1eDRcpazAynNjfi",
  "key19": "2eMz3Ft7YVJX41QcxC7XWKQZ3n4WLyhUxWPtFi3uEf5XxivRJXaGDZaSu28Lqm93vKuqsnR4BKZaj37FsMcXb4X5",
  "key20": "4G46KKeV9iJ4anqZVzN2rFPUFpYVvQ6wHRudogtxCqjGoDmpU5V5Ht7Hzn6ZEAU6fZFQSrfD4FV7HyjkBB6CSY4h",
  "key21": "fnGFahy9LLhyrYCwJ8AuDFRgqgNyhqpGtx4Wrub6LcaX8du9Tiy9PjvCBYgRQF1vPixNxBZ31ZPXauaYGiABPzM",
  "key22": "5YtT1orPkKKz7x4kAooTzwA3yxriTk56q1nE5pBwfvR5EnQTK8z5aoidFUNnn4oF77B3byyhEpRELEYVZhqRMpX3",
  "key23": "5ejBTu5gy19a2hMvb2VZzRLSGT77w4w745j7Y3GDC5R3jZth7146XVeNS7DGPpRk96Too6BuF4ADrxJzMrEmYZxb",
  "key24": "2PsTofptaBRgiEXAqFmBMA4V6TJ7KcAg6saMFs2TRdgo5EaSUAzzV89CAWyeHoZ6FYZkQSa6qp5wn2wunvednTnu",
  "key25": "3D85zDqGbv3h4tzsQqvVh4iNamaz7krBmsjXQamSJx9Jsge9sVDwPA5oPnutkHNCynJEaRXtyhxYmDxLPT6NHZnT",
  "key26": "dmTxKc5XNnd7RnToBcDsq2jru1RtxCv5omSCjtoeYp2P4ZFDFey7SbyLNwCz9GbUCBYBjQMvjhBCsS1RMWZGXUF",
  "key27": "4qVkJdgMe8fZpmsBjBJ1RZvd7cuofvecrLm1WEjubsunW3ZZVrWyeMpfipQbacJ8UCexyJZmf8cfoHV8DsaK2ad8",
  "key28": "26zAyAnH366iUHEyuQgUjApEQxSUnQy37AG1cTuWpz9jM5dxvmzstSCiD2Sn3GsmVumEwaD794gCsTJN56bocPdq",
  "key29": "CUTunDiHMghyYcqecX53vcLXYRxqKszJQA5oFQBpXUZkKtaUiz7QatPxvxATJuwpVDE5CuVBFCLTWkGzLXTRGSn",
  "key30": "terLR6vEB4yJ5pV6P5GFPuDjXRrPABpZ5B4raVbsyNhWTWbFtfNveZn25oqMGr1aH5vgC1Y39dhW6f93yY2MRcx",
  "key31": "2x1eGdop69UmCvnobwEdabwohpjXkeM2GeTdS8DzsyHMcfbUXtouLzQgqDyGXvQBMCaCkbJhCyF9oJ37bW8kspJc",
  "key32": "4mYTYGCiwQviuV9sWHyq98Je7KNDFpHNGhMVefXqEYxXLv5jTiecYSQ7zpueRgMc6WsPm4WkXWbnAJXLYwx4M1Th",
  "key33": "GNUVQqSrxGVGDDgGKX4B6PCjopAxgR1PmWukZyyrnHdhmToh6zUJdqUoKJkLwGjhwDvngajvGe3i4iBMH6mcvjR",
  "key34": "2WeioZKoKR5w1vf3icjVHCFBL6W997gkqjJ8afF1xW8hGHno7XTbJpsVkdJFvf2K2yvb9P6UMEUTT8V2WnB8W2rp",
  "key35": "5S3D9QheauqnCc6iKCuxVPDS1MG1CVWr2a9LYwKd6xVVFjNqDi7cJntUnzr9XrgtT3FuG9EtmbyC5N1Wwvbp9qEb",
  "key36": "2DdSwzY9fJhUuok5bapVxm4rbiZ1xknCqQmaDK6vLZb2ZhdeCrSgryVJbBXRBw4s1VpgJNbZgZX8eb8wXtE1VYdk",
  "key37": "25vaYcVfuEAsYJrK7qjcn8RS2TQK6Ep7T7jC48n1ktDSjvQsRrdTL8htSgMmgWBGMwCapyg1EVfRUy6A16XTW1KZ",
  "key38": "koVrws3qEUBa5JiZ5cD4nJ6mx1cB3FTyGEnryACEJYT9gH4FvkzfhsBtLud9gMm6nqZhiHkb1ca1e4o4GhtKa5Y",
  "key39": "5dk9kvyT96SeVvwdCgSEHP5Lrxr6ryNoDNmjNv4XjVSPTpPFxFk9cFm95Papni2n9VrCbtacw4TTHibdiTusSXNZ",
  "key40": "5DRK2UaJiedfyyZVQv8MiGU1KRs78GLxQsfdACF59UmMrPaJiL9HmVEBK7hTJ7oAenzQnXqViFngpEpsGrmnMisG",
  "key41": "66X5vLHDjC3TvFN8nrkkKcc97mdyUUCNNoYAauAtit7wB9ARGjdUaL26BBDBVLsJgsuhH9J8vJ6TkgDTdVhJejee",
  "key42": "3yHbu5xp6fzYxqvzXwqTnr71N5VvgK6FZSSfAqFkUbwLDmsGsPknLXbXUAMMU3BAmJVB1ieekfxTbWYyRyiMuqMk",
  "key43": "2gX2Hb98eYJck3Y23hnUwEja5bC7JM1VojBAkAiJKQmSNPMSmbFcfEkxeQQ141LMZt5cFAY3qybVKeXztFPrAhqj",
  "key44": "5zrjpMVXtATuehbkCcrpP52NPbwHFyD5PeSUWhABjXCQCqGEKwPd13vyq3R6isaT6p67Ls4DENQdegGxYW2kNrye",
  "key45": "2ewMyJvMJUEzNWrkrDbrWhwixWkbtR2ML3grfD8MBaxuJ3wKW9y14XZVyuXJCxySXAkexGGeYP8WvW3C9Sj2gAvM",
  "key46": "55ZqFcPScSekVEUSfqZZqPZYVj459gmPx5L7t6gK8pyyAMNCxH24BkEsCJ8r5nVjQvCBTD8qYQ9snuwp4VMdJY4b",
  "key47": "4qmXKtMP98Q3DsbNVBDfs3b2U1U3qszwFqVoTmjf2TFCL16DQpFUpXb8YyJ16DUV2oC4sEXKAgB9D6rHQAcm8ftH",
  "key48": "3ExsktFs5T4pNM4CD9QsfjzxKwrR9CeYtg4quY6CGjuXi3msuf97VWv6bwZCBFKbigyamUeBNWwryefGAB1bZ5e3",
  "key49": "2szDoJeTBDu8Q8HVLm8RGDL9MSNpjTY7GjvQB2aAQGuyWXf2qbQEm7JqiWpxKfR9b4dVh36niMs4Di1XbH8WmtCh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

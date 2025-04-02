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
    "46cD5nrfAAbR1kxwyXj4Kt1D8h9KddxsMmn4CGGo8rgKBA9VC2yavNkbrZvJ5kdGiPXaHJZMKQdEhHpYerrPYBpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WYLDqLuKuF552sUU9NwzR9MeViYCR3jr6tnf4gwYpQ1TNEwhpivXN39gbyxYYejbJnA76BerpMG2Y8KkNDLQuum",
  "key1": "3GSJjtnzEufnSshSFtMPfVnzcn2Ngx8kTUoJU4bvUpLL5CkvXwemEprU2CwBFEDB75gobNCYFztV9vFaSVCWREoB",
  "key2": "51vndoArPhT67AuDteXEtW7EEqpiqP4e24LAmmWsF9BQFK28tTW5VG1BapZiRthHvx6acECvjqbfuwSsox9mUk5s",
  "key3": "5z1JUZpuZg464wveKDTNJPXPaDEsUxLecUL5qrejg1po2hGxLfxk6bCaVDW6PmHnYymg6qn5dfBAYuUriwsPBsEV",
  "key4": "4ouNvfxw3fzTNPE3ofCaKsxSwmWG7ZsmSZuTQTeB3jYLu4hvYb5uXAUFb5PE8xHR57ZonPaCUd33TJfuDoxU3ycB",
  "key5": "4atW9qDJrFmPcR9iZNmh49bxyvL1xhdNoD9vPqpyAC4uKob2SdjVNKMuWN9XvmtxmNf7M7MsS3eLMN3mmgVzETK4",
  "key6": "4VREixzaedKsa9sDatsnRAV5Q8SHzV1naKnZYKJDo3snogkLvbZhZzjuvcPsKXQytBrGCLGDdToNYYgHmh7Jf8zF",
  "key7": "2hXmPYXBq7cmPAZcBfx88tssm7Enic89Lgf4Mtom2qKxBFxBmMJzsWCZogtpEGV5ZSNNSHxaPZ68uE8hHFR2jPak",
  "key8": "3EpugaKuiKiJ9zry3nPnHPGPmzdEEmhbMCXBAVncgfxVLkfex532CnvebLSnG2XYXXh5rebTLRk4FFdEgzEgYgmq",
  "key9": "5FswSsrW5Z2FHGoMhBrCWQkzyCmybR7TSkwfqsrJwq7QgNrXatAPN4ddqVgEgPUV6GXPSdrBNRcKCVXHxVxG72ZQ",
  "key10": "x6Rt5A1PUoqFVNtzsrjtEgqw1sZg3wr1vv4gkmSpEsEMCGvRT9v88dhtCBMa63aNGmJus8aPq8Ep62Nm6iVmmQi",
  "key11": "H21ocXCGrSjRXTiQ9nJcurSwikeSaXP9ha48Kna1ScFz5WoNSEJKFpFiX79wBRkHwGqAx8CadSf7cVdomREA4j6",
  "key12": "5LF5gUXFPgFfeKRN3zPLMsbVbwSQvSMLU4F5LC4fJRcztptD651ySPBxvgJFeZyn85rTGv1o6VbFxCTCHEBUUpQj",
  "key13": "5s5hwsbNCPmM93C9heE11QYsLfPKWRM2w1Btfc8MhKRwiF6kB9uVsS2MuoE2JEwFrS5cCFvkybWzuxNV3SZx1vnW",
  "key14": "WMt9dEcert7fCFBLf7XiBSSwiGmdDNWa6UkCrvstKaCSrpfZ1Z1NVdsqpwiKGM5GUwH2k2YAWQD1Mu58niqkjUa",
  "key15": "MiYVMezihGzAtGZkrzFpJ87WgRcna61ThfstAhJrdQRMy1R5WDGQT4V338QsYGBumpyvPbsTE8ACqBv3nxtXaTi",
  "key16": "4TfngRVcQMiHRhBjGMXgxJ98Fo4KZKkndyYtA6Uyu8uRG9kaVZt3sfDuqx4GtUGSzgVxsPkZ7JsTQtfk3yq73z8J",
  "key17": "3EtcTwbcvZPXvGvz8SMaakjhwSakJEVpXAgGNvotBCe25Ld3GkZwauT57g9aM8ypmH2MzFLBCAYUANvTj8iQ4cBB",
  "key18": "4cK3T8erFwPDunvoTApLQwKKYm9ie4wSvJjyqM9gW8HHNFgpS29ALHd5Q6SRQddGcxWEhE6bEGx1ZRyUrugt9XvX",
  "key19": "4od9M8fG9Y7So1eRL4hukhPtPhEp6mUJQgiS7vGDEYhyVtatzqr6jbnbAo3vABAesD4tQzoBPMe45xSx7ynk36MG",
  "key20": "FrFryB4EkgPs5VujanSZrQpve9YmWrUNkzqPRRdNmoppBu5yUzMMaikaA2cvbHb92rCwPkSpwUafndqz4zdDeds",
  "key21": "2Yx9ByKZorxWGjUEkoZLG1Mz2WLc48qooB6MWF2n3XoUWHCSVzhFHLGxuY97HWGNijGv9Vk4QwbAEuHtYymEQkkb",
  "key22": "3w4TUJ1bcWqvjUYsix6jN91rJk6TAfGM8tNcTbExAj8YeaQwSexEGm9ZsxbHyZdyUaGFw1DLPouEcWPZ5ocjNVVH",
  "key23": "5fZqWuyP5xWfgkAKup5HFnVf4KeV2vy2ZZAzBBcQUtWiRnYiCt9kSowi5etM7muVr8qJAywf2E5FzRc2VjbBFtc1",
  "key24": "3D5scJb6kTeiPkRrrwGgL9XQFKpivbS36trAoNCZWKKKAmYGBRir3aGDpk3MRrfex4d3RcndUFMkUVsVxwU76oMP",
  "key25": "2sc2RAf7D3qW3sES6btRF77hK8r92gxmcQjpAfgn3EHPpE4yCp3WPk1Kw8Atxxhv2ZDVcikGq2rjgagUR2RmfVck",
  "key26": "4qdhQxmVRCCf7Fxxk5MpnBGLXi9SsQByBTay4jZrDJ8g7cLqBi17RfNtC4TcWHKCUSfhxf1R2v8tWqPvMot2wUCK",
  "key27": "hH7SfkRVPsdpp77n5zAPPRTgV6DvtPsHEcJhQ4XA5kBLqR6vZLukaPPCTkErvyU7YA3U5tBbXTKp2WN1e3ZtQWs",
  "key28": "2pXfmjAz3sJjmcyfk78zgvWKWny7XytQthQuQbCv7Py69j9qH2A3kQ1VjgZv8JUsyNDYaH1GVJgXo3aNhQ3ZfLdV",
  "key29": "mcxzg91Gc4VjNcdAHWggoHAYBiyWSZyQoDgY7sWpm8HKQo8kFkTj64LarFq7xUkD6fWKGdW4SRgJe41Jr7WKE2b",
  "key30": "4qfQD3QzYTt5ZPeFdGacosj2Yx53EzabtfoLenHV5W3QfdxCpJYhRudNYk7EanyZpm7bnzhiV6umJRReXd42duRR",
  "key31": "48Dx4xfgNnSGLH7cUpjvsZQXJiEGHiVnHdXFbxyz1rjNkHwZoBrRXkVKWzBHrbj5hF3Z5YPjq9oWje7mrE7g8Xzd",
  "key32": "21Q9RuPP9wXFDQeJMrDPP2ewycNK4QLYoLsjZz2gGLm3GaTvWdiZ7rsJjHEMN2vE8zbBUf98Ry4K3bFSHAqFMhee",
  "key33": "5F3HViEuPcvB5Q3Bmn6iPdm1rVhyWCqn9q4cbAPZEwYjYN6pKSSss5MZHUGX61spDQeQSq4siKXrfDAbBVZWneHL",
  "key34": "Ljo5r7ug8Qndf9LqeMjgdvqGitm6RjABJHS4CHoV4TpirXnB7baJV9PdodyFBK1UpYGRmjcU7aZEVpdr9ARyrCd",
  "key35": "2m7kiHwg1xs4BRUn2icxP6Hi7E7BJZRMGrqo1RCBzU32pqAYViKANYjRABR2WTxwed8irjLpcEHGuD8zrN7dGscr",
  "key36": "4Q6ABkCcHRtpzkhtjYQ9B6Y3KDazv6XxPu8tHWdLgYowsSzr9UoAyiLfzKfVjzJd8mNBqC9nn4vKuJSjdufC5rtD",
  "key37": "2E48Fq23GM13LxjcGf5kXBiJsYQb4TBrBFN1J2LZ5dQk1PEe1tayJV7zTkvpvU4YpgSst6zgcpjsue6L93ZSLDi1",
  "key38": "5tGP1gQHwLifxUtZb4FSj57966N5upUqgmJQuzUv9kx17xvVEb9bR2PLVn7N6yggCe4ptt2otD7NkNGpMMs4GCeF",
  "key39": "4xUR4KyKFUpGewDFigWfFa3GhEmrgTkuJuJPXF7fYh6hvk7yYs4q2Pu9aAsv4Yq8Bfm3isr1zfwnZu5ovhMMzcq8",
  "key40": "44EFMGiZyqCPouHSxSydY1ugmKkSYnw15hA5KJivBTxm6EAvZ41fHBJKgdEaLPQya96euEtZugpGyWHRuDtnYrK3",
  "key41": "xB6hji9UGSyy8xtWHti2hKDXes3nAas4B5seSk94XUZUSquQLRvhpFfTgtZsiYgqi1YmqE3oMZA3cRQeCb8kvxk",
  "key42": "2UJCPXpJc2pZdnrpH2hpr45NfwSMxjyw5XAHyDqvuyyxJdD8n2Da1sAPCayb5Hybh3n7EvtqJgwsDJQACCofUQQB",
  "key43": "45wMZA8bWC9ip1Ud9vp1aHYdmzvy34c3q6NjqVbpjtsozzuFSjnbnyWNDhVdEfzgJKLzpaAJyV2Qc7nAbAeUgdYq",
  "key44": "2hEGZGGN89tNUwp37Zsy4qQ4v9SiAcwqC2CpRPuPJ8Ajp6hFE6fuCkbSbAwhxXRxoZWYwA4MnHPvfFkQpv8NphZP",
  "key45": "4yWnBm7RFq7JXuzd8HB7RGK2ENo24NpjMhVBqrWt1a8BC6s3KkRz4uhAWVyGs3XJvD9ZR4QFtmZf9U11ALApdrhq",
  "key46": "5LcE9QtFa2bn7vrqV3hiNT8dQFAWyYVK3ViMJHy6H9y4wnLCVSaqByzfULq3v1Hqbj4XGkckxqgpWhWXgPcrUkgK",
  "key47": "2SEkpTKPdTLqjJVcL3rPjutArWhG2xaMCNv9F127S6xpm87auo469eRy1hr4DSZcmdyFDazaXze2MBLd1zEp169J",
  "key48": "42BZB1RC16WhpQAzMaWkCGgm9mSdSFSX7T4ATCkKZ5JjkZW1Gid5HyKo49u9Yi6eN7xb15CaDca4m7M44fWABgqU",
  "key49": "3dhyfT2pB9SaA7mB73zBbKHfxyTYQRtuHyUi9fXXS3rpaKjTr8AeKzaegEJYGTbX21mUKWRzSHi5rYoTixnxxkS6"
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

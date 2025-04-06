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
    "2JZ5rUxPDi1smsZTcmHDQmCyU2kWpXKjAohL6PJhjFMgpWByWXHuXpNPxSWFkYSL4cCfovfChNvkWCEQsxCqsPND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49k7JhiK8QjUbdfDcQrpBemwjGAJMdYnBzqbXqyj9UwJ1wEkMXeF5PsXvGRotE8xHhTybKz7bFsVcTtna7kx7nsD",
  "key1": "679dV8ujfZj3RhJPgP2RC3jB3vkdAPNnuz2mRthg2nUiKHVMwencc7BquHYaZqkDuDkGfuTLyVYufsnG6N1nWN2T",
  "key2": "2bkXFHBeuyB8vb11GaYbzY5ifJV5HihAk5cka2RHayFiZRtg94Jbu97wKXN2CaM3d5U2pKaJdUa7f2b9yq6YUYEE",
  "key3": "3KUA6kpVxXnUTChBYwkRFSDq2iJo1i8SLcB3V84LihQdCRtDEUkjSesrCnXXFCLn4wRbmpgTDvLDAuW6EeFXr2r3",
  "key4": "2xVRrxUjpS3MNJELcN9CzjM4bnHxP4nWNi3vB3vQ9LPNbQXBa9CgW6tsqVexPVvAASvRw95fJbEjF2g4xVGi1j8y",
  "key5": "4DJzim822Th9BkThCERC99vV6GqEqULhZKwVf6cxiHnK2v986EJyWB6u79to4S1uBBMhN75hA9Uv9GZaTEnqLucN",
  "key6": "64wNyP9d1FFynn24an8rrSqLvke8c3Xzuf3uiQYRN7x4HiTcCufSvZ2oAde2aQxZBJLGH1ztLresKn8Jf6ArXh7C",
  "key7": "2a9aQojffjPmnBFCn4uHSCRw2WMid7yu418iJa78mdxu7oinSmr3o2pjRV5CDP5ae9ZhRBAuDUfcxaE4SMTJfmev",
  "key8": "4QSaj7yXhUfXTxRGANf9QiZERoMGKnhrTDVohUspdrUoJbC8ixbUutWVfaRPK4mYrkYaMV9QQ82ZSZTEufzWKBcW",
  "key9": "2D3fzpVgwN4grwifdNCv56RamjTcP1bW9jYRbjAD1uiCPyetKwK76Jhz2Tz7K61tnWUrcM2ShEKvcRzb7ybHHSke",
  "key10": "5e5SGxtA1L9u6BL8Xm6ngKXT61RMZPNGm6R7weDpy71uDyQXCS4HgujFpp3CuHWnU8n6b8teU2KK6fz1dW8maoBd",
  "key11": "4HB1eeXsBWwuogUVRtgUNGJcDAefM8awtSYPJN5C6WTZ4VQ9yd28pqbK2fVcAh8MxytnTS35jVi3YMJmLvGxBNb7",
  "key12": "5HvXy28RQRP1zgoNkAYPmZ8XtcK5rrUwNA6M7x93mDtJmd37PvazaGPYFz6NHHtKGN7pyijfrhoVU16ByRm9ZaSP",
  "key13": "bBp9A6D4j5bXgh8cnK2NqwbCRsT2eYoAvRsmZ52Z23e7yLC3t88TE3B3APdbwc2Yr25i1hVsxhYAgqcw2s1SiTE",
  "key14": "4RY1eFZ58icYi8Dw4caFwoih4XV98PSZ1gTuYYAPdrXkvjsSNSh6y8tbQiSibwXY5SRSWftQZZZxqucWKzYbYKPN",
  "key15": "dL2YFLDGUmhTW9LrDWqp7br6wJAZ1wgU16cde4VwkMTxR5nhUXXnHfriMzwfqqBY22wuxca7Vye2jm6watfQYsz",
  "key16": "3AU9sCYpZttNSaw9hF4GYv7hjTRyMkArSJcKsBTy9Z3XSDt3zgKTzLEVyGRcp1PNVhc4q3NjwKT89w4uHPv47hXQ",
  "key17": "4XXWtpLJKanmBGztvQvJt7cKuzVcYy4Af8SgkeWJ1PVL8rvSCWZjR3JqihhBKhN3pDcB1rAxQsBLp3TKmXXsstY1",
  "key18": "2Hym4f7wTfLGb4GH3KQGMiX3YS8ycEa2kjYwPmxLPieahFSieAWQkEjhGPxmdtSBkpDastExeGzvUEgwoyCMBvqE",
  "key19": "4U4fEPUh4L1ZHrXb3SmE4pENK9mxM683TiYYjjnk4hVAHwyR9jQ52qjeDKnjAnqMMMhCNqsaV2B41o7fqZpkQV2U",
  "key20": "55aWTVwCdxa2LZLECBEC7st1gqyQzNDxyEkjM75UQikh5ALnU2nGC4QAZCAPkWWMMd6ddXF2pn2S3H6koN4e6hXq",
  "key21": "4JRT7XaUYJCWxPf1gvHB2C3rt1CWzsGEEo4eswC79MEZu2JVXxM9BbDC3b9wi2bvPNuEXZ9FBekYiVgtgGFyZpkV",
  "key22": "3XMagZAPApJ3DtvAvz5pYzRZCux8WmPwndAza7JQ418Hcr2cw7uQgMYKnvgo7Lvq6kJ9zMUZ8QjSeZgPiC5efino",
  "key23": "4EXuKUtuZwniL1pFimV2kWUSkbUrq8jq6NgNa326Gf2vwBJHmBoT4Z9ESXUDyLHKGHfqG63GkxEPYCMHbEXnmbzy",
  "key24": "5cauFv1cZBWscojzR9j6bwLDse7dWD2nHLHvw8jHKZfFFwkA4rjp9pWs5CnXumvfAJKV373MrQRFgfhgRGs3rKLX",
  "key25": "Qkd4KQj6dM7uW3HdYHLpwfYMKmCRJV5SXNDFWDipyjoRU2FGeuCCjUQgkAheQB9SzhBgvyKigvt9r3HYDGBhKiC",
  "key26": "3cMPT4iJnAZVcfwCmWinXc93wjwrjJmxNrEDUzsHQSXSxucTKV84wfvcBKVWrrdcuQN8grXT4Jb27FnzpZYtD71o",
  "key27": "pg2q9kvJ8JCT8Qz426j4eaENcyxyFGRNxQjWTCGuwU7jLxzxizCryDkbMmhHZdKwmWqKsfo1dVQW7Ahq45ThzZd",
  "key28": "3dqDeqK6Xd1uLHRidT6kqB74XF6ZBZYJuSzScTBK8Mc9piCJkNG1ZBxgWUVHLPs81xwZBrGPm4bEHzMS6Wxpi3eN",
  "key29": "2uoWi5SjM9LfJX3rH1pfJc4YgGMpfbet7PJaK2yLQvrZ5ykaWmAzGPBLWi9fJB17PMj37gvhJB76rT99WKeQnaMR",
  "key30": "2aXH9nMPTpu78D96bZS4zHjqxFmymsMh3CzKJDZbXfrcmxRTgw9FwLjScQ86awXsePdCxErvJyqPqDhJm5cSMP7N",
  "key31": "gDQHKjManyLCmSuH81RtZB91TucAe1Hn7YcCZ6xmvt6rfXT3ZfpbKq3URCSVrCiUPhogUFUgiStwNdemtN9CVvb",
  "key32": "4WwWdCSeQATA3hpAewzxq9VJ4JD1LUTxPxZ9tRUHSTFTg3kXG3wTzGwh7mVjdEUmJxkdpGyNdzk3EdT5dt6ad8vi",
  "key33": "2wJujLcmVupsGghLF1bUEkAAscDSfPPBwEDKgt5ShfchwkMwQYxVzJ7TELHHFYyFf9BYWNpxe2FTpHx42z78epuR",
  "key34": "5B5YwTzZivQ2XVyyeBGG2G2QH8tZosrdgQaCxtMmJEWkJ96mo4aCUCn2okKYL7C6JHApWeL6yqTmxrhEw54andWJ",
  "key35": "45fVtCt6vLQmFSryuY92ByKvErZ5hxAA4DttcSgRcUoYfcYXryfSZRDdPoSeayS2Eqr4XqY6V1LpTgpBPsYERQFr",
  "key36": "4FUFmCQUZYFzucZXRGtefBy5kwojoMXJdm8QC5buVqJru5TdEkxQ7atTHEErGNC85f5ko7p8iMhMwEoQ8oZukvKo",
  "key37": "28oEFTmSZVXn4i9QJkxsRzt84FxLfUidS3RXiFN17FLmLyDSaSunH6sP2WjL9KHWVwVmXALaCBmP1iu2aMqJNKep"
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

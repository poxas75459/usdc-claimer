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
    "4CUG6LtKhp9qCaXe3DWsAUFSVuif5VnZPRrNWifn8hEVV4tsshnNw3PEwjJQg2AssSJBde3tZRMRWqMxndBvNT6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mucdf46vxcgV5gZfTAF41AZBCjyyC1su6YYSsmMhnDXuAnF8HBViUHfP3bgaroYh4AYeJbxGdLcCDnaUbZKCfrK",
  "key1": "5HDYMprHQKoUqey7ESe2i1vgEbD7SsU3kicFCABGXBZzdLRHuqWhUQCYdo6HCUsERtB8KBVcr4hro8rqr4mecZNt",
  "key2": "4xvGagFx4xoff5vh2pcu2rSYjzJuTFmQ64dkeCEqNNEG41n7F4McGPy1EFXoDPq1tirLxAN4u4LMdxfMRktfSWkd",
  "key3": "35CpGkwFu1oDK9fXfNWNVNBKZnmMn9twNCKK7USAJamacPoWp6m6Ls1aQ8EVkQUcHQz7WzEkq3wvQ99MbkSzr2wt",
  "key4": "DE9mvAi69BvUhUT159AwXQ7geXLzjySD15WQiUDsR1H6vYVMGhRFiBA2iwFR2hiCNe4LkoNzb6ENr9NnybehTSY",
  "key5": "4uPfsDr9FWTxqJCkKy6oigc3m36A7vwPqcTQuHajFiRSdLLX263epLKi6y2UMHKkgDt6G8zds7D7YoQpabv72ZNA",
  "key6": "2vqKF3PjGFktKnqdGxuqHiw7K8jNw2m3DQza8nAkBtqYjirZVxFmpJprBwgRN5xx3DBJFSi7xRJAtwnhArTqPCQ5",
  "key7": "5XWhL3Wt71nB6YCxabiRSkZoh3KXf1s5BPE7sTzhbXLM4fQmoKikjdbszVazuGWF3Tu4pFS9quZY9sSfbSDVPKt8",
  "key8": "2236914tHUKqifiTGdCyWAie67x1hkQfwCWmx8bzj4ZakyfPCaJv4wU7EpWp9BC7GGKXDv7Lr8E2DZUt6LCPvD3f",
  "key9": "4gGAinRVbjki6nJ16uWEzyb1MjL6KGyKo3yfwruEw9rjZscHq2mRdDsTBi7R5HybbGYUuMiTR6dsG2CAsnNqBSA9",
  "key10": "jwp7bgoGHhuexk1cLA8FFMYdWvrnBp56xLhjDM8dwJY5zpfAi3K3vvmQgKe9KJXmQMWGrbYz888BXg62Gb3oNnM",
  "key11": "4raXcNEBrhHcp6HrbPmcE3igqYocXi5Ezeks4Vog3odRTmDedpyEf3DKQShVrT9SSi86RfWy96QYwD4dNwDFPd3F",
  "key12": "3fe2DSypBtQQ5yPes7GpQpUGq4Wt4a6zhD3fP8PnA3X1cAHn6zCJ7EavMHaGVgk4cg8yqHfhPipRR5sGQ8i4HtZ3",
  "key13": "sPNJQBVYEPYR5MwQpizAav9CZApZWHsyhsV8FWmEMz6rNi3QtcA7cL3FT9FexFCiSucybzks5DTYTvAuMPk2kVm",
  "key14": "5TsjQNk2HHBxyJj9MXQ3p2DQNtfFtRnZ33AZTuw7RQ45dAqBZ1hHGdQEbBEoq1siVupZZnsPbWVTkPPSe26F8PDm",
  "key15": "4AFXQ1VULCg34dVHoZhZc5EFnHPFrhKPcF4q5vPUKHtWiHJ6wKXmxE3JNimHt3mS9ofph278GnXWMHtbV7jZLmgq",
  "key16": "2mYDmHeCq66HmQoEwg1N5JH9T5asXG1CATJ9SFDs8Nr6wPYsL7jS4rQ9ViRuTKVDmfLNHz9yGMJYyGM1R4ZUdfsp",
  "key17": "5zU6WfCZEVWppAHvEHF1roqLy2AvaRQ6xJEw9UqdopHAPwh8j2XnQX6YddMCtMqMTH4NE7x4zDo96UXNusYRtC8x",
  "key18": "BhswLUMpdXYoeEsLdRgxqo9UZYe3zXmeThn3vPWZa1RkChHkUSvDfeb2aUUe2qtgfLoYQe5QY4sSYwaXfoWhvoC",
  "key19": "28gqo3skBkuDJY6TSHaEhKVZtEiGkCwd3QheUa5nM5WjB9EzkRLmQ76kNSrocdFMeNj43FLu3jcmegS7g6NN7Ld9",
  "key20": "4eNd1XC6vSBzoC7PxU8wZsmpCFMMQ41yo5rhwk5b6vCaduMw1AaZs9P7Xk3QYMG8zY9U2GGNnFuDwagdshG89n82",
  "key21": "5XaVjYGPcU5njdTKs5jzdUg5qmNMgmvFD6BDBkRTzrEJt783qdLgRjvs8zMe22TdSYPCa8S6o8nLT8VPzHtg4SP9",
  "key22": "1223z29dztF8iXGGB39Wah5wtHd3Dkv5eCTm1sQJSjMXoR77fXgHSfJeiv37CVorF2amAywaqE5ZposGW9XehGks",
  "key23": "L7ov4a7Lyp25GKA5DuEJ1UctYRuXWSrU2bpfWritV1La4Y4x9Br4ZfURpw5PRG5MqX5n2htkGCaHLjXXFh6DrUt",
  "key24": "nM8rXwLyaZKEoGLtxXHJrVMD1djpWYSXrvj2kLmrtw4rxtGz7RG8FeSjaXhSGKfRoXv1jCmVR1fUUPczKvSEQsy",
  "key25": "3VonfsAvpMZSh7Z7SVJvzT4G28zT78TUDX3C6HwnQwVMNPGX2mpgv4A1bCbBur4gScd4qJ6Go1bFyX399XGtjCdf",
  "key26": "2XJ1bGtARJHZ8doMmDoFh4r8QFJHbSV7NCTWhfNZGVUN55y1W6LB27uPzymDabte89VSP3dBKHbcoT2Fd4XCe8K9",
  "key27": "3xCEZPWvDKtbAGWm8tGshruvzG1pKXeFAS7EugvhEUbLeHLwyrt6g9sawBbnzcKNMHPS3oMgPMrXtBPqCQYc8Rat",
  "key28": "4Ebf7zRBhJ71YFCwCnYqU9Xrf7oxn6hceSbVgaMnS3KXFePryiCPmHmhbYMmZnr8CqzeGTJ7upMMTjhsmFr6qvW7",
  "key29": "617d7CUY9xEnnpsRNYx8X3sjHaUAfcMaQqaYYaEXn3fNkKzrHK8W3EVvGJot96dJKCVRjMHdqcbJyFKTEqfSgQu",
  "key30": "4hvEfSrzQdHuas7VohtBsXHz2UMWSBExucctKMwGXPQonUGgjwsuLfBUNHhGEr5ctB7LcRALfyfgGvBvbaVGLHLT",
  "key31": "3Re3w6VtiMXWrNNApvq2nxhzwH9KsW57UCNE2DArKHEshMdypRuGwnjVdjApJJJCymH8HTBpwMt8cBUtMWiGhiQZ",
  "key32": "4jzNKiRB3JyyTALguyjBpVXvd97MkqhKVVssrTzU9yc1m6rehzYHbZE3wgyk1sGAWrknEtsMiWscZVqJxkeffXgy",
  "key33": "2EyyugLae6B8SsHbnUoLMCEnwKoZtvUZX92zJjTUk6cVQVL3552HmxAhqn1LmieeACZWcFFkWw72LsSZdjAh4cJk",
  "key34": "NVAtaPgJyfwqhos9jY27uzgwR4Nm9i81g9pa5Ncbh2zz7tVM19CcQHFrzzCfqEFxkEzivURDKcnvh3bR95DfX5f",
  "key35": "Aonu99vSjyfwY9ohpnqMKActrvo9e8pXyxJ1s14b5h3gwXSawx3BXJ33koK4KTtvran7Ezrg1F1kRzDmZi7tbo5",
  "key36": "5a6YGE5WfFodRrKmLdQbySN1ZTi6Exp41YpRM4K3YrpXrW6BAno68SYPk7HXmbohekyqBQsnGrQqpSLHJib5jt6m",
  "key37": "4ZhzZVuPuttSEZ3TPhM8PX9TH9nSqrDcGMjF4C64UioBu9YJCddonSSiX9e1oUmwva3hsgfi9Q55xDDXEJinXc2b",
  "key38": "8fTbkHHYj3WeXBsyhesZLUabutdVUBU1XFLbzviqTgiv8FBWQCPQLp6Qa2nP3ku9fRRt68FNFXZiebY2ZiyJ1Zr",
  "key39": "5XwYbNGkvv6cQMiwfsLE4ebzjpPiqcVgeyQs3PViQAf2WavjZbfHdnvBR2tY6g4VKo5MXNCZS7Q8z29daNLvfxp5",
  "key40": "5PHof7J2oFYikH8V1e5ztc8izUj3SFcfwMKwyNVd4tJTFzugc4HQoZTxEHMhSnxDqq4our3aUdwK8MUmP72euWSE",
  "key41": "35PBTKWmvbPd2pkd5V3nYkNMSEZnr5MxV6TeTZuZCzqr1RhhFdt6gSU9riPVsQBy6PRXAKSxSq8qBDorTn54Bygp",
  "key42": "5PvcqqaGP4Qg1bMP8Mu2WWPyPiXvf7jhgh5nVTKTDkEbWGgYTLk1qfB8D6EvP6pSXLonNarkJA7Cjo2jjVTeSPPM",
  "key43": "3tSeoYN9zDwq5wiye3yQus8Ymu3X3PNHoz779mmPKq9BzLGacb5qNBtRuGceZPi6xdMBTUrry52nWPiH53djWfwN",
  "key44": "2RqPshKxqVfHBy8YYezyFhsXdwVZKY361pfyRMsxb8wtVSPA4j9jjRdkAf34QKLv75hDP6JJ6B4bitpSdUfqhABo"
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

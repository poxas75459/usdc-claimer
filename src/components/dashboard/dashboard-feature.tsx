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
    "4xcvqPnh24GHfoJcyrvYRMVZMrFTZT7AmjvXu8htmad66MEk4LMY8sGwJLSs6ZhAPX5RhBEobKjaXDQwiN5Mu658"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wsjjGFuXVSEwvcZZwQ1Tthe5vQhmd6n7Lg55FDq7JzcbeANHmQatSLgYAxvyL6qvGquq4885E8Kqr6gzxJRXsuZ",
  "key1": "3Lvy2S3dGvV1zU875dRKP3g872fpHftDBLKwGcHnR6EZ3D6i9C7EHJAyCLSdrm6p4aaGfnPNZ3moM4ne6ZAis5xU",
  "key2": "bQXot327VPpbrXcbrB5ok4fyxfuPzc4mAtXN2X9vnBY61FoRxpg8fwXYczZwi4fBrwT92k7iJPq2iFPWGJ2kJV4",
  "key3": "TJJAEmXgCYe49ii4DpSBRZChGCGJDiAsxfvoCtDzzRVkYvo36GzhKtAbuALTJvxSSnEk9VE7qGwsotkqPMXnMPR",
  "key4": "42bfLnxGahaPV3hSYBbRAeAWKV3tYtDimungWdNib9EHmanbsmMFzNd3w6GfPShVZkK8esRXQzaxLy1GQPVd7BWP",
  "key5": "4gD3frqkmqKQHn9gqCvzEhvbYewUjAB1Q1DYa466z4bhKTXBJicck49LRpNpMPmcBZ4KWwRUKARNpQT4X3ZKEMUD",
  "key6": "5JFdMgvbRVZ5Y4Zb6QZfMv4nvYHsadpFyJKmZuRve3f5DhGHakj6kicNJ8NFChe6jL1rUuMBs34eSJ19qdWLdMLD",
  "key7": "62sdAQm5qNMo4W8ny7mPC1Ax8v4nWboP6QiKVSMDZnUL15XpJzEpkNQ2SqAJsZ1MmUq54nGSKZAsyJX2kckpVCNq",
  "key8": "33xLKKvsaxjQLX5U56dD3ZTmXz1zqP96f8AA6bdg3URp3btjittEjf1Vxn2gKMeTzPtZcdJwWk5JbKAxFRNdAvPT",
  "key9": "3s7Rn4uV8PZjLw3udhak6UKKquekcpuC8T4BiHykPbpoaq7oaANRRPQoGrctbWbZQ8mZ6VWburV1PXmbrAQM6rLf",
  "key10": "25vSKrtKRLYzKX9aNRh5X5QiEXSdBPfTdUBMxtnc5woEajKxWN2bUtUC94zQMyWrRoCL5Ef1vZtJij4pdi1P9Swt",
  "key11": "2s73LkyHd7DNcAVxXWaia3oE1ovEMto94dAgcVDQxrUhG6DKdKWQ9zRHkHzga8BHd8tgV9TKGz39XUKH84sDWTcK",
  "key12": "3FA9nVE6UFyksDd7KQxVJVygGXc192nWia94GTVaXNgEwePTSYjvoEaepHcHMYJHqZ67NGRDmYo2yB6Qnj3CbArc",
  "key13": "5d1w9NVex1gk2yaEJwWjmYX3mHFqAQCDn8qkL6LTks3CME8z2Ztqq9NV21s2fRcUMsgd78XKzMoVEv3VvKfLxPBH",
  "key14": "3VN2DR7K3qn6AE122ZQukvZL68S9KkHvjqFpFxCwGL4BDvVx5Kfs33gtbJZR1U246NCF219JCLboVLsrRwLB7Jtj",
  "key15": "enVLQLnfKMsKaoYSDbv5ZoefKoFzCEgvtH7uDaxkuQD6CpmNixNpPCDHuygVTtN6DAV9fJdVAB7T5f2XCT7tw6v",
  "key16": "2y6y3adFeKJL8DJqJgon356sLKL3zncNNuR9af95D4D9dnYwbxubiJpKdMTCN78qWYHL33fMKiveXLBkfHH4tPtk",
  "key17": "5HNYxVtUJL36KwYwvcWRvdzBRtG4pdia8Z9AY4ed1VDrBfdkTHYNhFCWFCna6swKabNY3fvZjE6QRoBhKr8jCJp7",
  "key18": "2fge7puwspawByf1wzN4RrJDGQiZ8qG76q1bUzHCBPueJpX7jY6319F4Zv5XMVpyiDccYWs7cBECmwjnHKqHcQXh",
  "key19": "jzbeHGYnqFf1uRGxSjP8S9oi5pNPBWFAv485HZMA4Rsr3U313deVA5ePokLah6NtQ96jX626THemd46ZvkycYZ2",
  "key20": "5nqhuwLpo3V3eAD7GPNHM9jtQiYEGwAuHadA3vVhxafupJs62t5bgd4PZQNfXmXPYtxoPzZ65if9v26TaJZaHKxp",
  "key21": "2AsbcDV6a5sNueQkyRXMxhQnrrHDHReDaT5Tokq93WBXtF8G2dgY4UpxpNMSm2VQeiJt9eUw7Zae4b2GmHChJLLV",
  "key22": "5hb7rzyiEoAhjTRrqGJ5AsC1EgEogpxEZ3WRoPq4SeAUWqAFPLbF6mqUw9SrM4MS35wZnpCo5LRqqFq67HRJge7S",
  "key23": "434ag9Lqb9g7MwfM2KJsrZA1mhLrMDNeaobq4Pjr9e9XkREEWSzrYSgRgu4LgE8rfeZpKva8CNYfGLkRDLXBegMY",
  "key24": "5DhAR8zNBtCXqM5hR3MHwDj3Rq8cFz5RCGxJLC6AFYqGURhL4JwunEuSNC4JGCv5P5xBZAkFjbuUt2RToQT5pgm7",
  "key25": "5wPNQN3QU4pgmZAeq4Zd4GYQwYzyrio1KNy1Ksmpn84h7hdeo3J664XnBkXqm6FicRePUaDHKf9eoDYDW9h8LWP7",
  "key26": "4VgzBCgfMJk6tST7pFbF6RYpioD9XMr2EsCi9ZbgmAN8Mpb443LQqAw7pXNrPAyiejqHw9E9W6RBG6xG7kKbPnj8",
  "key27": "ysyyfGJMmWX22CAvvmAf4ddCMFjwTw2ivW1wEMp7xn36BmCV67dvP7iFrRke5BbbQnHdT7W3VFnZAiawb3SyajP",
  "key28": "3GmoJeJFFdyEfc9b2xVX1tY2nVYCN6DMFXuznZLAvtfYt5zFzAkUs3Sg63FaXRCxsZQLXD8oikcqeVpizuWCwaXt",
  "key29": "2MDHNxwZu1vNSLFL43x396Rr3URgQCQV2pvKPxX7m7zLXa9fbNs86nhtraZsHq39Lza22BScfC38RafPgb9wHKHr",
  "key30": "58LXNKw79SuqJgNXw69b3iwsKFWUrrXnDyPyVsnFNnsTtuJ4417Dbw836eyZxcAz9BpPP1PhnXHpKAsKRDa9A1bJ",
  "key31": "5VFa3GtVAuiyzzSwLhqsEYzmKVQQYA5FdDpFCqQSzruiT3MGoZ3kRbAFoojSDohsa1YEVxJQTBCAwua2XFbctwZc",
  "key32": "4XcqqyZ9YQNoxug27PPQonBhRhayskSTFiYXFUfdiWx5o1JkNXcnzwFpkqDyF6sDpc8fBtaSAE55QzsEVLGo7bW",
  "key33": "KFWJexak74XNY82KRfrxNTUad2dVZgkXD6cF9xvtSN1QLajuwtRJdVEFtNyJHb7GKuFZ1RMWpEdBMhLwbpEFvoY",
  "key34": "2JLGe7cvkkqovM7BBTgJ3fBiHaY98ycg8EmfSrd4e1gC7f88tNZ8sBXQxbTB8djTqSW9b3Nny9s1F86zZaZYYRcG",
  "key35": "x8bmho2jdfaKa9pYP7MPVCoWPhfVY6ywQiDTXZ9njGpWFRgp7SafW76BcV8UnYgHLNYzMHLvXZdhFqq4fkwgoh4",
  "key36": "2S3BC6wcq9bkq5gDnV2ME4jvzXMKXi7qJJt2VpBUBDyZ7vcDCcjwFFah4uoWuqD8JubEFNqCeXzi6JFMNuwn4Tuz",
  "key37": "3ueFVnrwLw9N66aAHgtmdnST9WXGnehtrTLxC7otZ14hkZuaQFU5kHRUGUEB4X5ocEQtxmWALEmDHM4H8GdDufgr",
  "key38": "2PpLUfPT1bYBjmZ4DcSDPkGpJTURBvkZWbeS4vxW65r4kcCtmadPvpA1tjEEYzVy6V3jSLz8ZkibXSYCYckN4Ljd",
  "key39": "TtcfeDFUHrMaXW2GzJwiStH5EpjZJkKcCCHmfaa8sVFkNxBZDqVQ4RuRfhm8aFzfMUe3n4ZvSRT44Yrfxyo7cLq",
  "key40": "65GPxoz5RZS7f93idSVZXG6FT2v1ALxiS3wVTD34fq9xzK7g9NADbZVAWWaYcmAFRexSN9neyo4TVD7J1K9tBcCD",
  "key41": "2qv9SboKvbXpnHDsd2SNBgDGiHU1GiWfwmKSEVbdxnP9hgLt8sK6JhwXZxiJcZGPFkizJpMVWoiZaAMdYx5Vc6AD",
  "key42": "2Wx4qeAWq3K37WTddfcf7ZcJMmb8Do4tmUMMupZRcCuEpSeVujShworkdRdFn2gBA2toMVVhN9yMDFKTYd6SDNon",
  "key43": "5rv6kCb6PZrxmXtyWnt534r6EPnkazFs3XLWX5CdqkXLfyU4WybWTootHzzNwpYeH9AY2nK4YhZcEqbMii3RrqPk",
  "key44": "4a2xYnNHQ9HiUre9V6AfUXCzSTSACxcEJhLY2v4pA14pu4ARWTj8f2Ujezk921QopdsYXDhyry26tJu51oV6m7F5",
  "key45": "5MQhMNQNpQYNji7tFHeMkC7qVTUnFUxbypje5fu341BaHwW9yPxmi3hwH9amNskxa7kP5KipQywc6QvUo6j9jPHC",
  "key46": "62Z77EdURrL5goguitQrYGTyM1Kipq3GRpr4vtgzePQy9ZW2PHE7CFgWLph4BLsbfMejafmVpajgVsarBVHzFWeM",
  "key47": "3pctUmiLsN6C7ghiJMRam5wQ9fSnpvkZ7F6xCfrR7eoPDxxsL4PhjfGzPPJaqHe4QQLoNW2m78ybvxBj7AV2yhzA"
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

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
    "3ZnkN1ZDiWSg5BhqKFJsPvv8yYQ6aap7Tc9wxbAEDDSvKS7st4UWpyJ48PQLHUwkAXQ1ajCwV4U5m4QiRYGKCFFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGXnUC9LVpahNcuiW3i34xvWpThD21AAigV4WuPemogkWotBXvNR3r6EvXKh322qJ7SoBb174F2NcyFipre1xy7",
  "key1": "23zob19GCYNX1taivE8KSppniBUp24a3GJPMwqa5KrTcW7W3R39udUkbgN5T311VfZhZWCCgG9CrtrQSKWRD3xcY",
  "key2": "4H58hdq58R7ZiDFBWJ6YWjvKNHV3i8QPC29g2ChYTk2Kpqsd71mcys72jBVyjGZYyCzt2jrJnVfPb7qduJHZX99w",
  "key3": "geqT3v7XwsBLwpKJonsQapfD5XieqoLjt6gDAjLmWEHizW8sAYrNwUhPfrA53Eyk8oCwa1wDQpnxMuEjnuocD7W",
  "key4": "41naJAEXpWAP238M4Kzdh8oubBAxbPRYLR4tNhjNfTs65ecf78nwYxfi91VHewzgAmBEKNSpHQT2FK9CFZSWe7UQ",
  "key5": "5F5NbQHLdLHWwukEF9Vb1gMPLp4sje6xZpjY9urERJw6JxNKDFDdE6pzzjrDg9r4ih9Yv1qw8unFcX5rHLSsKwZd",
  "key6": "Q7dSYPw3N9Q1WNZgFWU2qSoG6fvtjhWn3hmV2osg1kY7fpSJB9xRQ5dt7Khw8pzEZj18zRPArvd4zrgE3PQcpYM",
  "key7": "BU1adqAcAgSYVuFz4ZoFvEnq85tg7a6huLXq27MtgKoze8pKPngKjDusW8QNA8kMcM4xzFVZr1SCaojhk3hvZL1",
  "key8": "5VhXRxPqT17hL6SbbBemwJ7h9yrPjTFuYxVUp83MSFgiwyi5hdmNwdqotEzy13umXmiQvwzLRaSkB4eLp3a1kxe2",
  "key9": "2vtKq6BMckHvm5hc2LPaneaDDsWCAmwi2mQGHzqyfBUNcRstMisFNzPDYB5MooLxh8xbp6BGbMDKW718eg4KdQNx",
  "key10": "Pmn6ztnnemjdHuSKNnwDAyt511FuQCHkCV3HYV2C8dMM84oadS5VVo8oU3QNKaHMtWvQZv9EitSS8g7mwCND6N3",
  "key11": "3CB45G2fSoygkimVB8YKEvUUA4opqys2zfJ8Tcar3bM6aXiTAXQnuvVSHJ11BMw7Ny48Yt8GN8UQ5YrCviRruz85",
  "key12": "4WJVzqBZ8ZLkpw7vZ3YXixo936noN8wCmF1P7W8AqogQhkyAQ5L8ksZvpoY3C1Cbk4pPdFACef1Jj8EFvQJoCthG",
  "key13": "8euo4Y6tLkmYGs4YpwjBZRg3ts5zDRupxiGd6hnh9eHVZqchwv8HhYKHswzZrdGo77fEEQk6K8eTT9Fi8cboQgi",
  "key14": "458fbB1wpQ1rVPC6vijP7bj4Hkzq5G9Z8E2ZhdgX88BYgMkqtzfvj2efQsFHmQxkWnhdF7B1wLhiXoqTTCkG962W",
  "key15": "FHNdgJrwmsbJKwDkibh1rJHmfyDwZuAXk7NBjp9bYNqwTT3h3fYUh5GgFGgjfbpDbg7rswVjmtx4s6YGqQx82gh",
  "key16": "2xYKCb9sSmb4s7BCZ5TEdPietb3rQiSqXn87FJFcHQ9LvvVMgG5Vi7MiEorySBR9cwUv37weDv6XtwetazLcLw4U",
  "key17": "34sEKAL95zhzUAAQqi6FmtkabnbKw3J7c8yNga45oJ35251nfewYvmPNV31FbGSqB6gnVM5RuXma7E3aF6AF78x7",
  "key18": "yAGW1HSAYc9bS85bXSm3yrGezrB6qjdzJopJ6wB8pEj2sfHRtnzjXRbW4mQVvtHoAin4ua5DCUJonLnp6EAFUVw",
  "key19": "2APUKUXpLeLrm2iq5FP6pTBg9SxX3tQSLTimbHLHzG8fJMqaE2WjSoGMpXZgp4gFvm5x5K1ezo6kzggKARZbtpQq",
  "key20": "3cAaGr7SZoGvK5ChhcN2fQ7RBof4yaoQ7w3E1xbfmYuLGKQWAThkbWzbyuibaG5RcScfmskpnSCTu4fzg4x8jsAT",
  "key21": "45rWs1fW8TnXLVJBywgGKrrgjs74XUJfpe2xkasYNN2ZNBNUyfopTFufRJUdNXcrnjbM5GGt1BcyzRYL5zffqPPn",
  "key22": "32FaZpHvVbuyF3V6G1pZqD5gRD7rPd8W26pwiAkd6BvqasTQRq7hrpUGpNGjtkyWdYfpzGFoGaSaiHBDRAqkDhhv",
  "key23": "43pKjvuwDv3EP1nMLpQg58JJimFNvgCg7xByhmaCZhqeR4nPCYuRiWCABaSS7Dnqg79rAaeRyrea2BuvCvbCUqjK",
  "key24": "38U23qzQR3Tw7zmg7Bpn52Hetq6qJB97Wz3eBZ73A1AVcegJ43veEvKCzadBNyjWrMzSeNWLZ2xj8T4p7HSwDByY",
  "key25": "4RZze8UQ56odvxvh7wm23VrC6scV5mtTiB5pyrNA7CwP38W5h6f3V7RVpT71XDYYz9ghhA44PXhpJzx6DXqVpfmY",
  "key26": "4xGuqYMJF59kEcXDvF5cd5Eq8qa97YZgGEaiyER764fu8r1AoxJDTL5VQ3bhgZwWFTMKmKsmq1uqtU79K343sg6D"
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

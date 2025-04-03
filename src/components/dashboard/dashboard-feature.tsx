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
    "3peUuxauZfzfci64d5iWp8sTC5wxTvsEdvBEvF34Nn854DrnQhZeBt88WJu7r9RXNUuW6z62WvPadePd4PLQe6k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9RqucpkbSg5DGKC1rdYpwyRR15uWvuHkmpRTsvp5qhfqrKZcBDGuH5dnTKJtwANmFhx1Ggb88Xhh2Pu2e4bQwG",
  "key1": "4TCFGS8VH6DNMBvGmLVHzvZKhoqCzFPRFXNJyNfp3fpmfrdVEZvkoDhAeT1ahY6HH6xCafG3DcZYEhd2Rxx6aCj1",
  "key2": "Pbrte1NaDj4bucBAAtAaYz6pbcA8Tzts4QhapmoxQBpR33vCdrN8u4soPhkLxrGufWBgiXwNR7Fb3CzxFX67hmF",
  "key3": "2Vx1kDuzWKw1rnTpqy2H6edsUchVFpJomUozSpuNu2RqbXVtss6xWjc69hyDTpC21gJAiYo1e2XMCaWhbBYzkAMX",
  "key4": "4CKNcQR8sD2HavbStfbBJgdLmwMUytnDD8r86FigX6Jn4JeM4FtQFytmA6SUyeWwEhcPfwusqjw8Xx7R2BY898h8",
  "key5": "s1mDVCeni56k7dVXr4v73wyQ2ups2rfX9gSBiC3HLy4gLyg3cLnX35Vnr86AuLtjhRx3Dk4beX4bYXixRD8wpiu",
  "key6": "k8sVsT3xuNQC9b1rA1zQGM19pk5KtDKS9znaVriJZW9kmCYk2isygtqgcGGSeDAji2bc5NB7QK2FjrSXQxkrDmh",
  "key7": "4AZ2Vz5ePz35CCBzownCDKWbtJxNTfrFwHtP17kAHJqvDox6BtS8AngwhecPTvjjTLLVGjewYLdPrB8ZG75RGyNK",
  "key8": "5H1ieW35UtJWSXgn3eXLEvNHvJE945JvQ56YYCfxVRsRNniAVnpGw3696R3oRpBKEhi1nJ3yZZqwZvF5KEBWmiCk",
  "key9": "2uaRHkVyrYAmpXLWoFUAvd6JxT6b36eUWzubbBcke9o21gH475LFQhsFJmNcoDYYmn7TnqjvionWdLc5uK76Jc5U",
  "key10": "rWvE8MkzseUs2ku9rJDk2VhfU7M2dTWezdaE1JrRikTb5Znto49JJqnAYGrE7CbUq5dxD4Wbr7UgCbWAsFMgRpX",
  "key11": "2sjbvUHrAvHWgk6fmDywa9kTCHs6PS6Lee7ERsGWFXZpwVtGTKvzTSWfJiHq9nJFq195NNjwXtjxRMDZWhQSmRyK",
  "key12": "62ykRD1r1fd6RRjs2wZhsCK9TAji57rgcpuAb3CzZKjPLugMARC2tayr1Q3DkABhhQa4giDzVYSHuhqYzoADTKpJ",
  "key13": "3dYqXFuq8cdbnYAb4YojR721J3ySWDxgc3krrQr4jKDr2xenPph7vTVz1cKDVyYBhaTBEyttVRXRfGNtvktM5iKk",
  "key14": "4eGyvUmY9rKs7mGbp6mX8z1z3eEAiAXjgAHgwyUEd8piGFx6KwMhqKJpnQ9hZDB6Do6T7XbuNRUj6zMgaQdeHENu",
  "key15": "2CBeHk9oGQ38i1VEVr18YAnELecLhD79JbUp6YXamyggsAQioh489B8juKKsXJLVXezSvNSv6K9Y3WBoWERXApku",
  "key16": "2CnKJqXZqnZAV6fDWs58ASvVZKMxxXqtAYetsRvRsAuCZZxgq6UK6LRnTBtZneSqYKfpfzAdgoNYagJpvyKRf6dZ",
  "key17": "32hJJYeJFoAi4gkbzHqXxZhCMtoWoNFUQ4wtRTfifgjauTf5HqK7vb22bzMEZEvmmk5PtkYxEioPzgtCc4DxYi1",
  "key18": "2vK4di9EAZx1tgMvueWeXP5PWSuWXP7ny5idhtsYVf9WLS11Foo234mg95MZnDMyg95YKxy1v39SPSGQ4H8fzM7k",
  "key19": "5s1eqFpsYTN9WtxgnuaB1QvcXwC1SQ2fRNVQTj2iX1fp3HPx7N9bZYUQeajod9VWH4zavo8HCUMp9gJ6FL9bUzPW",
  "key20": "VLyYQZq6sWjF8mynvniJNWYXaf1vcQvMt1TLMyXToqBY8CxWaXpy11HJbCRkpgvZt3kT54bSFDn1zkTgjD6q6wE",
  "key21": "2VZmLVy4Pdr6h3edX7YevJ5SmDKWABnggKGvjgchbKXoPNLsPjLrb1oGE6huCJsEpZyXTuYDrBgBNy8u8w7ZusmS",
  "key22": "5MXMsRZD4KgxQb2MQoRHwZFVJ1FNQidpbLWsaRsv9tezWpHRdKRNnewaZjiPE54qg1jhoG1Luqz3rXnFdXXvxkUk",
  "key23": "38PptYXpxEjbjtN8LVB3zdvSpKLYb2yhdtLffmQVVuGvepL4oTv51EqWDTSMJVoArEDAoSh2raDuHh9fQwnqDwGP",
  "key24": "49N41BVcFoFfxhYBJUHRPGkhfSoQwwhe2k2buYTJbdJ5UZTBf6EgbRgZCqaime8gRGoMV2JmGaBpsJ6ybS9Jhbyb",
  "key25": "3x29n1ua4xQFbFmZFWhFhy6w48n184a75tyybgLfexwi2KFcEy5BaBrQ8pRGUcQSZSi6VUqRj4Xs7BZpoMn8fkbf",
  "key26": "5YgWTPsg4Z5vQpj68hXQ6h22mi5vFp1b2wPDBgv8pePnZLbuy3ciPik3yamcX4Ue6NNkK6cs34BqQ2rd6RnQknkC",
  "key27": "2171B7MoAKu45q9JoCnNqpERqwNFrYWLK6MfD7eVJqaZ948Sg7E8hy5xQcDzUdS17YxuSozwfiCma2Sov6AnS1pd",
  "key28": "5WWKe8DUyoyzsJp4grjt3x47cGspJWkYVv4MgYt9Zf1gYQFmbYodVn8JUEXExLwxZV7N1D6YaucmzkGDB6GaX6nD",
  "key29": "2gMPsRr8DBxRREQSuqBrt26ueQoarAuj45fftcHpZpjR8J3RJXqCDFcJWiWneGrKQSEb2p2EFePsJQP8rcM6U8Mq",
  "key30": "4hJtAMBsekyFXe6SUYwwwthvMZLSPyJyFkF2tjkRTuQSo5WX8TDK5tLDuZ1K7LXi75N3cBU94fbEZY1iCMLmVUut",
  "key31": "2NdXWsrAbxjn3eNfPJxQ7EKKmKV5SFwrfkTudTApyKVN244xGef2AKdGYTLa5iJwoiUL6aNEPKMsanzxrvaH11Hp",
  "key32": "66Q1ofx1W1PchTN3TtKxWKnKAhXLvjRGP1wjDR2YHXVe1nzTaBn7wawpnN87DEoseXEKWRdoKmxH4xjmriCw169A",
  "key33": "5aBW2q9wNjoQ7yRk8ynKrBuH5yeJz9fFZ13sA7N4ce838W2Xuf5K9xLxK8aHCsWL9M8mBXE3Ma9aseJYHNaF7DP5",
  "key34": "2FsgNRDNeV77WmyqTYChuWzUppaAS3h5x3Hcz8wdi85szfeNsGNB2DrupjH3mUTqsov543oezBPpw6nHLaEiAiXj",
  "key35": "4ziH7LarTjZXowY2X6vuTBEcXHkjMFtjGF95Ymxy5uV9RiXrvP6zmANS7DYPtdn7iR9xDzbNsBNwA5e43niX32ii",
  "key36": "SrrkdzSKQYfdm42Y4pkSYYBmkMhZpqenW9gK1ACpdcLZ1L7g9Akrkww75deR4DqARiPrsqsmGhduGc8jDnSrVhx",
  "key37": "5ar2hhT9odwMCWJTYSVYBgdaTdHFBNsiWUcr1tQTuPbDDLH9qoSaxFbzNZucGuEyQ1yqSNndQMukjkNnrSuSRKPa",
  "key38": "Vg4EvusZnmLfECoCH2qPKXcBx584DHAV63zRtAtz4GN1qMhtPiz4MKdMfJ36zVRNJvm5RWZtEQy6oZgeVUu69FM",
  "key39": "GLkkY1E6RrCPE7ZoKV6is9vvyqyZorhfLuzYFcvuGsygHt1T4V7rX5SuSdhvFCNWRTcc79fLCQynfrcgQamgSGW",
  "key40": "2codkCtGNKBr2L3R8xfYdq79nevJ8t4ADvtsf967S4NaNpphPtWbqzR5XfVSfcwjwfao1owFxaqVEb2ENYuEvEDC",
  "key41": "4YGe7DpeVckUzc1YZSmYEoe228cMZkNjCDdfEgEMXQZsh6s6ExBypqp8KVfGm8JMcFvEY6ayp19Y4CE1wawt9X6h",
  "key42": "5wPvMjoxpzWEfQGMR8Y3FSSrVhJ7MFj1Dvtx66BeCBCisMXf1Jp887MYABqCmnWNRSSttS6nvW3fs415FeHByHUm",
  "key43": "5B41GUs7zdZ1T4ghMW1bmhpwzydu71ktyvKae3mPSF6jEnb5c1WxfyFBic5G1prkmJB3ozQh8bbCXySKsNvph3Xm",
  "key44": "5jy93agbGtqNW9qGsZjErBJxGoUyNzDHwckaBJrZpbvkpn8Kv52SvTt3yHq2qfy6f7PTXwLG6mg5rQqkWvMFE7SX",
  "key45": "67kqShBT5d1KPZzUnz8MhgZAoUiCV5QgYHv6QYgnR2N6mSC2xgbMAkfTdpSZW3D1C1JjADtoA71udSviHqUN9AWp"
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

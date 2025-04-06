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
    "4KJ4HLVXPzQx2b1mRxEi2oKHrYea7U53MDXCLNG1qwV9TR31hAcp93CxopALZPCT98QTvAr5oFXapeFNUAZeZNMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiTqBisZ5F6e7ZWBsPpeaWENzHu4pgDdSLpTYMrN2tiu6AdhgL4rUTNwvJVZiaPnJCnnvbiEJnpv2w9qGH3kdSJ",
  "key1": "27u1mwYqGGKWZtsCYkjgPZ8x84Cv36iG3q3ojtoe3DhHbRrUxMumNNrVSux9MfR7qrnL2AqQgh81Z7LTg7o394DV",
  "key2": "3Fins3zerq3Ewz7gFZWKxpqWdPkmRvzPVPhCPoPx9vz7YiizPnpjWY8mkC8uLDSJDgsCQULy2su4ShPonJHZueyU",
  "key3": "5M8exVDhnfXHEjrRnsH9imZR8265rEZNM1e4dmyxa2YJc1gBcr1WdJKGUCAL3NmdnF1hPoVUik9FrtiJNwTs1f33",
  "key4": "4HEpuvDKo1t1roHXP21Ds5SW8WWiR3r3xuajQrjJn4QdkFiTUuNPbC433LNLgoNZEQ8nZgMXd8U8TZD8R3xXDZ49",
  "key5": "2YEkcxD5J8EnCgFVKQPaj9hu3yjLPzEAEZxoridvgcv1hJctoWRPji8W5KedWoSxs6RZWvhbWXG7Lk5SoJ3NbG9n",
  "key6": "66QXN7rDkmJxSZ5LYLLm9DyVNfwkUHJ675TGoSQcfa3ZMJ9XnYPb3vitgZEFksJWD76vgnkNiMfR3XuQTBVTRtU5",
  "key7": "3F9iYXoNDNMVxqNWbXBoXLdV6VXAewvwkUL6sU1rEZLQQgUEqiCNn4yWE359nFTVbqdMTEysCEphBCpcAwt1HtxM",
  "key8": "5KFN3eN4x7pSjv1HFkTnYEtWbeQGUQF4x84A3NSZGB5ixCgMjiKjrvmsfE3C4pE7RAzth8PbUzwEeTTxx1fFtXDH",
  "key9": "3VpBgn72rvLTwpC8HFLhuFJZ5rrfuLQybDPSzsPijfCKmd9gicTTHQbc1hTbXbhPyVwtgT67LF6uX6yPnz23vhw6",
  "key10": "5w3QMXTyCqdV2GARjuiBn2nUmCB1yYCqAMaVNbHVCXCRv7XToubm8Heg3R8nrRUinzqyeRv22G8TsxLg74o2Dj8y",
  "key11": "3TRQYbL8JExeWCwsw4uz1sDn1nCzniXeaRQCcSwhFt3trLaavpYbBcCSHPpaMRQH1h7a6pmAcdZK2h7cfasdup4x",
  "key12": "nAKFQnnYYbmbZ16e3qjaxL6SLsKfczmBAaCDZdFyiqVRDkiif42wQFMHxT7hxehcEcJPBJgf1KkSQzfWu2yEJvp",
  "key13": "3ao6z9RDCmu4ARCQMsjATgwuA6beYywrimUapdHpibVYkKvMaLsDngehUzVs8yVNtmW8rk2URB6xrR8JMtGMsspC",
  "key14": "2BDGaPkZNL3EP89GxEsDqUAbQHMnQhPXDkP7r7LMfEvT9sTi3BdFYWet3HVCc2s2mCwD1ne5SGPsFkfYUbtoqrkw",
  "key15": "59tzpWcaB9PYNYtcBEuQ3oqUpuYQfd78CjazJA7YUZUTf3wxvcRDUZTKx5pFY531bjUYWPZyJ5e7Etx4VrrbwsYT",
  "key16": "63Sk7cuBZyp9Qohb1WBSP76DCzUvp3Ap1t2EchVq22Rzm5ZX15TGAV8xUwUxJscykHpCxk6sU6VkU4Mmcsb4C92L",
  "key17": "4H9NSM68JzfxeCakKHuVthrjQnbi2ushjvJ37iYQWb1qjJXRw3EEg84tQ5hDDe2oLBnX4mMUWrQPtmbZRgDPn8ux",
  "key18": "3LG4RWrc9TK1oVRQiNbBWJm52V9ZHyMqKvjVGBzVZk6pGSohkw6YQx5hPNE1J1JkWZjZhkYBMp4uKQf7C7riv8FF",
  "key19": "2CYosyFioBL3mY7KK9eEE2mVieRQjoNLX23Z3xrG8bTPgEaFCE1bRX8DYnAhrVZA1YMzMmpUEFpcB7YdVE7eQTvK",
  "key20": "3YufoMjVGCv4r2szpjJAuGVhqwSh7idTU3xxuiSUXgw2C6LrapZkq2n3M5TMMeHyZ8UvT7uP4NitkEQdHsswmWUe",
  "key21": "4AtaJ22yyaYbUddTp85owJg1Nz8hBqrWdyoAngFr9Mx7wzQCGQhB7GKWqxvZEHGDVeWKyL38qCZt7cEA47B1REhi",
  "key22": "g5Ykbg8kXa4ep5ET2S2fqRH85X737kRtzS25gY1eWDAhRBNjvPptJ1GkxVQ1iybFjVGhTEFLWGzdntkveCq4EBv",
  "key23": "5Nm5662iybqrUrmwZFSJdp2mEPEfL6JMakhT3VNREFsUJh4eMMr8T5A19Wc7JBTyDbXrP9d93e55mKnGD9LqmYz9",
  "key24": "2xtLQDQNQMkeKurveCwe3Ka5oeTrUDe44p6Fk24ugt8qu25TsisQzt1QoFduGqHnt4fQNKhNLgfxwRfxFJnXJQfN",
  "key25": "3LeJcxomca3aWzF9bPCqoUVETZU8GNiksMShNHWj29LdKj827cWdL3bsf87oaCo7s1vDWC67pQ4NfHQ16DnU7qt",
  "key26": "sfaFDCYXdQ5QuYkQkuFo92e3BUrJ7tyJu9V2Y8mqULFKB8kEUyBgH8NM9P3oWV5dNjjheFA9zjL7MNSAuhJaimn",
  "key27": "4V1QK47B6SFESPQ74hGr1ogA41cLXwfsyi9V5eSVcjSfh1x7z4z8PLHJvuks5h4jqkq9RJv5YwQ7kPszMnQYkUJ5",
  "key28": "2hYxFo5FnZEN7R9LHrTAeqjDj8SyLGD5AtsAZRpvLyzs7prFmmEuZruCkJw116ZBd4dRSMcYcsYWXfVbbF1GMN99",
  "key29": "4xGSQaSUAPSPqAig1ZMpd88KqEMybQbcGoiiVg2sXxTnJfjVnCH7eH9RMiujrB9sU3oM77zfULL7zkjLM7eEkCHS",
  "key30": "3yEjooXQqQPHvvw8WV29xmtzUp2yEtZQ8ren6xG5XEJVCqph36jSfNdbUhiEaXjsYVUN7encz2SpujgGDGQAXiTc",
  "key31": "3zbdupB2R8UDasbjftpYUXmaeAkxdrF8ATBbQb15AbeAjJkrh9pSpEZLPAgRK5gBqTwDmZbXvrHvfnsW98deHK82",
  "key32": "5r3gqi18cnus9Fev7eDgKdfN8zNTgw4T8TXkHwuFHr3r2PQMFne24TmLqXVjnmBoXGukNuhbaJN8b5R5sXevLqno",
  "key33": "355d1nrUdq6HzrFHWtUPqPLQhgY5V5a93A4AwEHEtuMB8xMbj9xnpcXnwc37PTRrreyYogPk1y8RYQrJQrjkwrud",
  "key34": "42BgDtEHKtCfCnKi58HsA5BCVMXAkbXRy4LcppmPZJwsWA94gzjmAVvyGtWLCQs9hBJ6UWkVxBUUgegwsVqK9GWF",
  "key35": "CPBk4BaBPTpESs2gnrXRNhFJfuzMfkrZ14Lyq5jZXJbGriKaBj7pFaBU6zDowgWBj416W7VKxfQosmELxFQxe6u",
  "key36": "3bnjfo4GQ7iAFWTYzMdtnjrpne4tZrTRpnXYe9fJ9m5P49XSnthZVaWaVc2GU3Z2wW2FN8NPCtruxpujGPqDVNVi",
  "key37": "3zFrZ4hrypv827MHqZ4bMHxVgZ5L5DgqXnzNqGLEdiVLsrtJKKNPQvJZCFQNYscNHcFbecZEBxjbj81wuTtXacMz",
  "key38": "hTWswsRhWajZzpVKBA7n4pxTmH34Ed1csuHubGvC7YHGb8GHjZyv6F4nhLKRhX63g3mfj7HLU4jqQkmmbpzfz7o",
  "key39": "67VQJykBiAPzm3KHJvAiqVtfzqZpo2kJSXypy8pKkA4fM4k9phSrjskBGTshi3zqeU4jPq2zPb98GzDB3m6GsMgQ"
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

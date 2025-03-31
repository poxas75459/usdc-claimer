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
    "3voEUf3rzK3zDDJadyx5TtH1VsEyFDLmrh5QD2ELeLUFHKQasNMLLVVPQzovknYJo3nhVijjcmGNt28axgjSH5H3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tccfsduXia1UUJavTe83117ViSs4t86M55PgcyTbV5Y3WsYhJbndfoZuMQLDPjBh8HEohANGVqHbc5kfM9q2SHd",
  "key1": "LzZ9CcK9rbAr5ywrSrTFPBfLG9F7jjNQeB6acfEu73a1f4KGhETQ1sEjBbu3w7Jq3fxqDj4rWsVhv59u7q7uPkh",
  "key2": "46kta7Txxu3fwZrB6YQTEKqMKtmgHwrJMvScPc6xBNJf5QpbbJ6USxix5ffEtZCcwNTpPqqsFLjkdhd5KNkgKuFn",
  "key3": "5GRz8SiBvkj6UaJSR3bkM5wDpwu51qccyiEi9yVTsKjveDd2RLQVxC7Ug1No7vUVN1JyH7itAxF8cRWBCXLqsjqS",
  "key4": "55arwt6PJChpZdmgX8aFyJXqbs3C9pe5KY9EN6BjuueYmxtd1RhgjxiHqbMERbtUEbVmUWbXzk7ghwgWG7htKgFy",
  "key5": "PV33BuyZfNniEhopxBzzPNHrTLygvqSKVvtKW6cprKVszxgsTCGspYs41eGE3cPYiP862L3qiUyRbGG6nujdQju",
  "key6": "3J43Vz3H8Fm7roDXi1AtfEiFydLa1CmnBYUnxF7abS8S32zpDeAnRNCGqp2cAxGkBxddQu46qQrfVMXTnJVeuPi9",
  "key7": "2gt44KC9hF4ybDgfDL7RpXv95CjZqdStXJufnZire9XK4WVK9TxC2S522VTw665y17zaPu7gSuQWU5CxTBvGS9dA",
  "key8": "41X9s8gD5PjPjTfgvNgaaLMm7kBxN3Z4hrKCTreMF9kuonSX3Tedeajqdsnex8Jq1jpveP6HMj5gk9zPTBzTj5ma",
  "key9": "3DfnvQbZcvBcdnRmmxKo2U7YbmAmfGkZcWd7ySuogNNwXr4xvYNJfT3xrcXCxnTfXa6kNmwq2x7YZsx3YcmaXecg",
  "key10": "2egG7557dGBzE7sApY3GaL3CjGngibMvbpXWKFTrHEjm39eFYrCoWxY5xvghNoQDA7v2oq28Ws3FdW6TCtDTkzuh",
  "key11": "4s6aPVQL9Rmj84zP8Ww6mn6XtuD6KMM3hKv7ExAR4kA6dvchbeEDsQYv17NcSoiL5gCQat7qgB46GiQ3cMVUupHe",
  "key12": "dXuP4TUiJ2onu4yHL1RZgtFTGbhy7GhcwXGrvCE5Ph1wwynikGKJWWoX8UUjDehWG3z4vm8vWKaYSPBtkRZocyw",
  "key13": "2acJaViK8hHkbNqTVbz9woVV3sT9uFMT2foj4k599RwRRLiaXBkTLSibPo4ZZKRb2bTV95PcnGTaTarU1CTpZ44u",
  "key14": "41knBaAjypuuijndZeVnvMCwmweWCQAVkAsy14Z5xQDnbJH4GToPzhXN3q8ZWszNwbbAT5X2shiyeqfkYW7jSeUb",
  "key15": "24qG6UQvBQnPKfkH8D4N2kGRZuvoYYytn3ez9qNgDHuWBpEKopo9c8srm5ti9ec84QVHygokbtj1KdMMy5NAcj4h",
  "key16": "4K8NP7bA61Fr5WmEVxZJ3begPgDKUwM4WUxMposTqVWysKZyW5MUZSme1vMzxH47ZoNemiNFZiH9swHbP8aaZz1s",
  "key17": "5Ti2DAMsTyXZhuiyeYrcnY4nAFBk2WpUsixGXf637S7rnkpoNatKZrFbVk9EiZQLsRZ6L2iKBGURAmqcY8i8poCb",
  "key18": "312nkNRR3ksni3MhZcEF5Y9oSt4Bz47QQuJAVDMVXn7b3RbYLmid8Xopt8dAdW6kqqrRUqFemVGYQXZLq9654BmA",
  "key19": "5RVmL5gyp8jSaXK72LyicmsMP2f7cn4iNZG3WjaMwvrWnPUYn5B4owWc9WDWkUKaa7TRgLtTMnPmZebMXXkqZnMJ",
  "key20": "4GC6Ncu6vVeoHG7uH2uQe8XSTYU4iPc6eeExcZv8hkbVdjrP6WDoXxECko93bBPAELbXrrJmNgoN3mHP6brDaqaJ",
  "key21": "5VAfNARQDT5bwEMLpFGFY1KYkus3YRutGYih7pABBC2kWE5B8P5LwgTqxXAyfTXgsm9Krne84rvfjBHYRybaXfng",
  "key22": "4ye5q3eamm7ZkQbzdfu7jUGTvEyZBqvQwjRFA95HjWvD2kNEKZcuFoYrvbR2xostci96FD3Yu7N4ou6sPQPuWPA1",
  "key23": "22GfCA5vHCNRdAXNjzQNw1BFGbEehrh17HzBeEnY6TnR9bJED2bhzDQ6tuChwmvXe1SPTCMwKU6JHwQBrA7gnz82",
  "key24": "2XiY9rQxtMRXdaHkEmnJGvHCrux8DzfXmGWDaoXpKt7eZCRcfvjCQbX1z3oXiZNHgcowKYPBUMes9fD6ehFhVAwi",
  "key25": "G8puuC81pTBv8XywyzCaeS1xcKDWHxxMyqiSqBHeanHpKa1VkhtrNbf92oD8DSAfRFVEzcPHeyS94nWP8bbSBa8"
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

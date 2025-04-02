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
    "2Kt2SJKh34eSS7kUPGnQ6Avpc9bc4Hvphk5tdDTw7mdsNUZJYKxVkdP9tq5FrrM1ewA9p9CUvQ1gLdQgrPdE1Z54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38E8GLHZDFGU8R5TgqovmygHEtkAhdXZNit35cB3u4ew3QL2uSkc7UFdTbPcKKny52q5B5C76RThwH6E5jnxGFfS",
  "key1": "62C5P8GuVkE3UaWw2y78uqAp9VoMXw2HQH9GvimfB6m9mM9ZxVXhXZaLvhiBqUcByPJxb5xXWiW5QP7VCLDx5Dad",
  "key2": "3GBUxKxaL3Bc6BwofWPRwiXz5piADReQTYky7ju9fAjbExhwwjN6TCqnBw7n7cgh6yiD99RX5TZkjBtvAg9RnHHm",
  "key3": "55ZYybq5UsaV9MR1gbcL723vqjU8Q8ssaEodTZifpFe62emQwFSPBWDnmUQVpGDTYo418X1tZQfViJv8Uc4biP7R",
  "key4": "5pK8M8w2kYVv5pqb5jEwZeKGZCck86uaS8sHepTp9BxCeD1CghXGZSTQfoQuRbQ3X4UX5yPnpSqUdMbDH5xRNMK5",
  "key5": "1NW6QBuJ5wMcUgqVSbXDAx8ffTzBg56TbYJacWm4EM8CCfYBenvxZdvQddq68RyJVQAzWt9uyeaoC2vhZXCtVjz",
  "key6": "4kwXwibL13GHQUwGq56GD6mukqLyxzDtqihe25NqdMHqHXcJfhZQSybXg7Ap2k2YjRdq565eKGKoWmKD9KGGrDQb",
  "key7": "RTR3XYgXnUNAcY54Zf3quLmCFgKxypMMA5n9fAA2nRSswK7EjRzTjLBYwvYdEVNHQ77nxb2JYoNNf3QmPY4hZ3h",
  "key8": "Ep4som2aXsQYBQEawtwfqEAdDHmZXaaxE4Rhti6TtomiQ41r64FDpefmDD69VvseDwX1Z2Wt8k51QaN6jzr2aW4",
  "key9": "yn9r5Fn5QT9F4ejJwuk7y1mDnrLhazpaqXysgqTBmxmPUNuZZVw4KGS7PLMfrmqSP2RawbP4M94gAi8vax7dGWM",
  "key10": "5nJPWKdnpgyzoX3WAE4JTwwJaDAFJr11tZRbhWnE6H24n4NhX7fwAg2GWM1Kw1fqxnKi7muLoCtKj4HQKJ9VTD9v",
  "key11": "5DpLzixq95q4ikevnHoyPgPjYZrqLb2X5JCoE3FrYTKCxNNT46wUnLt7ZJTyNm441wK6gK3sdMMqTr8NHm1EjUoR",
  "key12": "3t2UnSKbKGQ94cWVvvrytAfzuw2xRaVV4he2Ddba7xjXmrwgVyeniAgD4dKcFxLnozxHa6KtvReVtFVfTPRkho8F",
  "key13": "5hc9vmoHEZNvrUmGNuo9c8K51ZWb8BN5MrGsCHYYKdxSVHhVjrEtC3npSPyck4dfVY59WgcCJUxgWKNuJbYdKNfn",
  "key14": "XGRFfmKpbvzqSh1Qmo5fAqVicB3oWczremfDcTKqmpqj5EckFQyLbDjuZ5PUt7oyFqZ6mZStsM7qR1XGsTrjf7v",
  "key15": "2SPvgZaceqkrQfs59x1JiCi31QkJAXdLrPEoeozjgah2aHmqFsWvr7DyAgeXsyAB815HDceTSdbb3bAnmHNsXFnR",
  "key16": "4EGL61xuAWS93WX5mmHymRZzaJGphMjTFCNGDagqx945sdNghhaCgJWDkpZVTd7hGFUVP6zVrxgn2TkHWMjJ8rug",
  "key17": "3dEz4VkCNz5riSXuibnWoLqB5X1hmTkRCMcQFdUE4ngTPS3xrqTjRCPiUgFVWjaEyfrCusGfjFhiQkFpmCF824ha",
  "key18": "LWusP6vnRgqTHAG4NNSnKsC7dSCWpKD8stnwWjbPuaZQeWSygaLSTUu3Y5Me21dTo2YwerVquUMFnmTuFKcBqmL",
  "key19": "5HG9KfJNfHUmmHf9D8HpyRi79uC2icD5thdaQvgTmB7AUcQY2pDP6fLVWHoNV8ADf5tUsg6NwagWf8ccPpKg4Jsp",
  "key20": "5iyhzU9xxguR5BT8b6wqkpdEigpsZCL6o8uAZsTsZ6kfKFY6391UurusxHnfmHZHrBkGQgqa1t8pSUu1BnUwevNt",
  "key21": "4cg8sKEYfyAKPU9rcTZWhbXeaSZ1yVAvHrbETWwDxFwvxanMrsW5hk3WxVA6rsxHDttVKuhQGAR8UzAQSGFkpN8o",
  "key22": "4hpNzfuFFGRWGo4Qux2qgYmNhDVR4HJGvDgFbU6yJcDhcr5PcgTE7X5T6wSdN1ytLiaDDHcmARYSBaw6KCwsLbZu",
  "key23": "4vP79BgWubtMmjphye3ZyGsjmGExzSQWKnER1ikQjhqzvfa1BLG3HWSZxdvbURQT1TufqHRaXaGwG8muRoaoCTz",
  "key24": "462euLkGaCqsZhMfmoimD67Y2DVgDDaLYLRfWPKVFCBxW8mD3JGGBr5iPU6hY6DiPuY9LzZF3S9KuBMGZSEYa2Wy",
  "key25": "3f18EHbbbvyezDFudSoSvjPV5fsHRVUvM9jWf1jLcmxEXGGre2N2JjsC2keSU6cxQCnekDxtPRf6WLysZKFtFPbx",
  "key26": "6aZD9feFRp1ef8vSYK5zkjKiuWctrArmdrCPRofyqiB1omAhZo7pAswXrg5NT2MC6V8WkLgEG1uURzspaP8n6HH",
  "key27": "6YPdzxsKNQuDVCz17zVRyCMcMzSS4CuHmVmGNZpmCTZ2hg2Mg7Rwq2gP5sXRKnc5LDR6p6n3JbDrQNxBJCe951Q"
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

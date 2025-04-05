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
    "hQa2b1Caj5cpUSv8jQKMyFKBcbKfPWN2jcQpmpk42wozdxSYEkgHBQyhgEx3KuinEMj9i2HDwQrZPknC3oQ357s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHXbGpYtdLcQVUm9Vayn78SG3V3aCU9KxDMUjHPf3tTHsuPQ6ZcbDcFKiyxq2wTPHRKFCKpPyDDRF6ihAcrGhvV",
  "key1": "4ydkx3ug1Jgb4DLDE5v8vmLfskPuQYEzzVCd2oTi7LMs15k7vG4FfeBTJLbo7HVpG2W95ZskRhXuBwgM7jJN9Tkt",
  "key2": "5ZmhZj4qGRZ755SJ1mhaofSveHSTcBvL2S8NQV5ErbfTR7NHePJygB2qGMveRu7W8NRg6XTAn5BWb8UaoVgVkeXB",
  "key3": "4h1QWfbLdBQJwunxFd2dtdir6WbyDXirV7Vp8VyyoLBxdF7ZiErMj2yRBAdGc3437mqaz5kvj7piJSP7g5GUW9qy",
  "key4": "3xCknoJJMQqUnKjcxvzdJHwvb28RXJDPdgFjaHQMwBpvhnDYxz3i6S3J6Tq3VJ4GHtGNyjCVkHkxaQ4r8gTJ2m4q",
  "key5": "4E1LGV5ij711MTx47Beg43pML5Eu1G7pgMstoFVouRc7KqMpSUSQPDPVedqqJHdi16XKBvQoorNGuUDGvzrhceWN",
  "key6": "5Hg68HZAM5M5y8RsK5xswaR5qkUjxBHiBKVGAprYUGn5JsNB43uVqBCeNzhhdknVyy1aETyGpc6WW8adxHB2gtxF",
  "key7": "4jAV2gcnLj2em5LsKKawAruu77rNzVhRNKckhbqMCYnJm1vsSaEVpNT9jp1B5UHpUYooo85c7zemfhS44avgbGac",
  "key8": "3gRs3gAaCzGnBEhSpkTHEhyomjsWPyjtg8aiC3UTBN4rPoBfX2vr3cdR6Koecerg93BkdjkBjjgTMt1BVisCK4E8",
  "key9": "3jCRUMpA3bZgLpLita99U5vSbAT1APe6swfuQ72D16n1Kt4t3Xbd9KCnqftCMSFCon82VKKcRZLk6jdmVVp8N1iS",
  "key10": "62s9wYGCAHykeG8HFGHB4pgzPyat5EUroWconje7k9JrExwvtR2aVohVoqjtKw7G562UczJhaPa85qRuvtmvwsLL",
  "key11": "DFjcPSaQohVSsfCFHY2BTLmZeqz211GgoLde7aX99VVYApm6urx81orq9ojhUDTnotbFDBQTqaG5wUTM6Ne8mrZ",
  "key12": "caceb99bfyHmLmLPcyZN4NjRfmhmHL1KVRdL2vwJgfuBZokK3jjQC8d9QwgcrGwx8PCid8ri2T5X1u27CA6Nvwj",
  "key13": "wsw4VZLCPz3Uwr23Z5fqVcyDEp57HjHkTR2MLtbrBhpJybHLnH3AaJVR5nCVCfX3ugwETtzjU6YgJK7xV8cwPDs",
  "key14": "2fQYjNP6MbJ1QvvcBFWJwHJUSfPggksFN5ziWaz8xo8JgJpwRx9wZBZcb5hc8DsWHdofbZ1izXXjDFZLRsMp9aGM",
  "key15": "5hYWs4m3HW9oimfKiEdrjoSQ7Q1v4n59E6QhhVxFp5YrYfqgptFN3whwuhSoUh7hdrLwH2hYjrVvez4xS6nNrRyr",
  "key16": "59N7rzR93WeZLjbKhbDxBvvs1c3JvXi6nFSxb5tAt7LsS9aQED8EvnzStyiHt12BMjDGgFQ9DF9gKaiVKCgFhafj",
  "key17": "zZBXaUwE58nZe4hnaGPMSoee3UJdkgu2tGhRzr58ch7UgHWb9v2zGJ5Wtaic5rjPreK3KDrLCfSNKED1Su2b2sj",
  "key18": "3WQSGajnQdpY7tD2Z6XATWUNPeTD4VvURjRELd2mqCydjDbok8zBRJQd33dENFVL8eb3HgsKV8HGfqrUqD6mT3jD",
  "key19": "3UbiaxJC8LseC6qku1jEdhT3gLuEqy3YC9x6d7SznSK8BdzcWs7zru6L4RKibhL2TrqBLmg214zB4qsN8tQpHbJw",
  "key20": "4f78H3cq1cbdYJmyALMeDDW3Qef5x9ezrfjk1cWKXLiQmERdhSf9VpNDdmvrr5Liagg1sv8KeBnFAwEfCtspoUX1",
  "key21": "3NX7fSwdJBX4DdEYeLRqhhyABLWQV2Vwt3QHY4X9sDypJJiTJZ3pPXzEj9MhZhDpN1dFs7fqoKGJxzNrQay6nqJA",
  "key22": "4pjMVeBnPWV9C3aRFynnfG4QvPQytSyY2igKcHxsZSHkXpHc6Qkqq4cKjznSfc4yvdHfTUioLAiH5aXPrBEhvXtf",
  "key23": "4eKLxUqcg39ey2z9Z52mG3FgWy2EV9H9Z8LaX7VfbCZxqwzT7HeBSiDsY27MR7q6QcXZwhbRujszrRYsDStn3VKd",
  "key24": "34qvXfZHz4hTEcwcx4spkZiwN1vEZqrjxqAYFwNhRfT8MHWDbTo4Dq9EqHbPjXJnNoSQcyJxautWwNPdH7fkgofJ",
  "key25": "2UCkTomjMMLrmcB2Noy8MPUXsVNcuPzapRkLJAhYy8YVxxRQePmBLKCoBNiyy3zXHzwL7DfdSkEpydrfW4y9j8jb",
  "key26": "3ovyUjPf8hRLTa3QqCzZEd3ETh65LbCVDi466UdpdaajjuRoqxJ9gJ8RjW3AwaiAoS5KSTmy97tunNMRGfb7oY65",
  "key27": "3orLTLUWKbdNsFJTrmxz7zDxffrToz96j6dr5CBbbTBRpfgkZ3ofyqhEpAKmKcemgFiBunRvgEHguPY3MbguNBF2",
  "key28": "2zFdeRYmnfrczXQqisF6cDbTZJwNfdNimQh6zPJcLHHcRXZVDV96hfKirSK98VDcDoJw172oNAQLRAGKdvvLwZn7",
  "key29": "5k39QkSRYbXi1d1F9dsPtZS2ra2Nkw6FkSKisTMubPsMXa7ywVfaYwZBrEYg1WVzb2LVX5aEmx1cKPPafEEdZqRs",
  "key30": "2idEoj1DLw8QsiHpL2WbcrRfrufGLhntX2sTAbCYHtkg3tupcnzM3QxyEgCp8h97fv24FkHW1CJBxeZbCfJQ1PD1"
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

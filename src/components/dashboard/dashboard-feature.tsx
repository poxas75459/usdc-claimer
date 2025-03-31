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
    "Gn9p3eZkPgQQNLwRixqrcQqtFEAYSFVwfLxxGkDa4jmLXZBsf86uYTXGhAtD3hLwa2B1WjXgnScvkWPDXLUvWyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pNVWzhc6KS7USSCVQXJmnRi7egt7V8esqUg7yjukT2DBpWD7gGeESc5JixrkuP7pZ4F7vYoW9NYJ9AzTfN6JsGM",
  "key1": "249pt1tuJZU3NF4AzsNJwjpExFet5nWSxiPKDgwBRUQsUDNUfMJjiQTs9iR9HW5iDDrUk62taVjRGofDA48A3mL5",
  "key2": "3B8d4QVLS9rfp5Yre7xWSiuSEVoVDcDcry8NKeFUaYbyW6dHE1mpim4qVCW7jJMJj4jpyo5jhpoXnXbyhsAeuSdS",
  "key3": "5U24QqZyv2UeJjsQnYKotL8qFHXk1etXzNJGxeSk9FsUBjbgymAWoRuph1qYA2MqkA2kdWHtWdwTeoaL9cVuYdsS",
  "key4": "5GbQHZzd8rrZPynHJnYyie4D657iaoZnBK4mjd5YgPMRnLZ5NAT3Y2g5KkoXdV4vMXyVexa2YY2w756fMBx3UKej",
  "key5": "67JKnPbtS9sBFZnXFEyL4b75YXKVmraG7DNNTjf457CVzgr1bd6hZnPShrMhhMUxuDUDmQ8fQshNH96SN1aGHyjJ",
  "key6": "uDGbhEdcQmkoVLrBLUbUUgc8tSnpFNwMFe6WijQFpuRZUTtanED46LKtUMG67UPDcjh8cSxcjxjNZf2om49ibYt",
  "key7": "4dTjWxBa3Vp1dzat36WBTbqgqCLhMF2VRyAQBV6ZWucE6uHdhV7rAiwXT62wozxZm7ypBHXEbWC65ufLn5ijrqz",
  "key8": "38F9eR138qFzgdD2WbEyRiN5Pz12MzbCzXW5qPXLzFXDsuJCqFiwoCn7JJNaGbmCa1pyzf4vqowVQvkiK72SunHd",
  "key9": "57Stsgg8Wp52YDskuLkkP5SkChvfZt4d64ujurFvDfqKbVxfBgaUx1FHC31iNKtARZ1AVf53ovKz93DvLSwPo8Nf",
  "key10": "4eye26StEd4AiDwMsmTDgqcZJcJ8EE57eTyCKkNUWGuLk1prbM1zrksHF415ksvutT8ezt9b3xKABwu3KBXYQqwr",
  "key11": "3Yc4be51UXNnRyrPQyVvrGiCyVZdnT1g8VYx8JbnENrTjNgbimAwQewjLDMjrJZ8ZHEgoq5vN4Wb4YnmUcQmzuTY",
  "key12": "3FQLQQuWMJHhqDqZcJYVtEBXpYqcR53i7UMw8MrWKWUGZaV68G7Rz3gey28PBKo2FpiGW7JA7TN4LBWzf2ytV4mD",
  "key13": "5iaRm1mBi1ZFwHqGTZtF31UvavKAZzA3nrVyU5RMGoZQ64cuAEL3wfZ8NrwmDQ1CcU5XG5wSqSwW8zZmRiJsi9Sy",
  "key14": "43iPAqqx6H6rQCGmZfCZEzw9syvco3oMBE654r9n2KAQ98Xkdx9M7s1shWXDHn1AxL6FumzZash8qcvNXYacsz5b",
  "key15": "2jgcnZA8oQuRe9pQhz9UMYCyEvY9uBnHh5wGAqMsn28mo2hJDyndKtqm85LbkBCwTawNtbLHSgR6e5gz9MEMVSCh",
  "key16": "2Dbi1DT8UQWmk7oNSZzVkBAxQ7umec8BscBzDTabvHYsH4b9khWMT2pNfC6t3JfULJSAqevcmfizYtFvDTGRTTFN",
  "key17": "3497eKYFAX9hFss8jyNRYZoizALWdkGsxzmJ74qDH3D577WFeFkK9oy56LuGZwxc5Vnfo1DFcdydTLm8PZaFPPsU",
  "key18": "3GAx17LdoJJ6eskzsxDCbvieHT5jVS5DnoxpmX6aQiCsVbAVWrrdcmMHXkPvEwP93gG2gNRqPKCb2WQoX9976wPJ",
  "key19": "HEBmFjVSdC84yp1XzgXsJFJYF4wVXeAerbTQChkh3FNC4QUc1wFTXcjT7ryFjkZ3JGVgcKWhCe4KhR1qGBHGWTP",
  "key20": "37SN3fDzymvUKimT15nFf2JNR6YFRHMZnULebmYdhQpX1dw6FiEajSsWQexCY8omSrCuVYNg5qzWUcuhoZ8wBAAQ",
  "key21": "29fhyqcBmphMTHPqpPLmpt6S4MQ1Qm4oDxC8tu8JY2FxFwg3MGDxfhsZf5bzyakKKB9b85F2hg5PLpnHxdYqMS5z",
  "key22": "2ArMjXnC7N4HxbF1ZwouYYcb5Vu3KvWRBXB2YA1VsESwo7PgCLQu34ZLNy5CpCbfP6T4EWmQvNZu6LmKasPWy8Gu",
  "key23": "3tdWGM3aZqpQEbhWxBRY6Mq1hYwUpBK6YPK5aaFR8Add7FXSrnMfzUaJJNZgqBMDa5GDuobKUY4k4rL5QUs1t2bk",
  "key24": "4oyPMfdLsQe3oXTYsFphwuB342Hs2jaKohRL69p4pQezFo2wpMcYiSNiSrTqwJdMzqAZiNKoAGpP9kRauASQNVUE",
  "key25": "3NKPHVR5WVRJ295FHVTqahWVJmWM9MMwDgN4kecrXG6ff6VJyuvePgoiNosAcg7ruA7oVavL5pdYyTgVbWv8PbHr",
  "key26": "32Hu7W7Bmiv3uLEK9PjsP75r2HtrdrXqRm7LxVnNHNXiFfXLeYKAcU3LbmcSbBoeNMKRhxm4x42yrdsbvZarVdRY",
  "key27": "yeQnCWd14ECEc31n7oAXLQMdVCj4ZgrKdaRUTAryLfbdQKsYGAD9PivWAnB2riGCPr4vjhTwmKEpa6jNNBNWeEC",
  "key28": "4aXKVFbVPc18dLRPReuf8cMF6Qvv7vPRe2RrWThFNzCjXFza2nS8WoAGjJe3EzYXwMdQyV2WMj9CBRXDjXV878pi",
  "key29": "3iXj7L3FdEeUVhESJaGs6Cc1oC7Fn9YqVH9Uu4Uwd8XgaH4s5ftKndq4FLxxEyye5Av5TBG4UA9BHjUPzo9hNbkb",
  "key30": "3ELumkz5KKTbPNxbC3xgcVp8SDqqniNkdkKymMBe4rZPUNQpFvk6pNnWkqc7jn7WQvJny3AhEogd74JrFCzU9ySR",
  "key31": "23boYDPnAjRtvZA6d8ndQBoeMnHxCNuLiL78i9xQX53wxqo2xXBVpNyUEQYSst9AL5PeMbjk277jyCiHyiDPsQCN",
  "key32": "2ikrZMc2n1o9bwcTxtn7vipwzwKyQgpKtKSYTziZDs1WpvBNjfZoUb53bsFpVFsLKTqzZhZ21Cp5NpHYF4XJ84N4",
  "key33": "5eKUG6rNpb9hnH96iSQnQdVLEGH1zx5f1aTHE69L2CMA5fR3uKpPAYxZhy73U4psF3W33d6iyMKB6BRpL747w77F",
  "key34": "5HaHiXx58F2uVWMD4N8U34dtJ3NSHkBikiLSNQmGyZSZ7Pc8qdxqb7k1mXjuLuPn4F3Nvsn1zVfHEm2dR78oRcZ7",
  "key35": "2FgsKbjHonAZs3naDKfvbs4FB4ycAz5z4NTz8da5MRASEATdwYg5vwSvqCxaYpMUG74jieZDGZvVUnyn1QyYwspf",
  "key36": "3xdZf2aDPD7PXRbSXDL2p4FzQwWdVtmheV1FXCGJC73rjCmWu7TtSLkeoESEcpo4eBCzrWvyB6RDBuLWtCLyv4Ao",
  "key37": "oh5YWMTGmyMBfZgG5K6mUDMQPKRLDVW2XAbHXGJfACWtLQrh4ytibLYX7TQ6rTyehujsENNsgCkgB23zshoe4PL",
  "key38": "ZhKgYGMaBiujYAtrPQfgSGAW8j6Do9WwVmsCwgfMTvCHMhQyvTu74mEgTvz3p2FUxmEGzkCL1vUhi2v9QfdWNvA",
  "key39": "CeJmXRXjKRjtVW58cnqFN7rj4xbL4d9yAWzGSLjbQvSjLStfNYMHqTDUXgNSwciLKZXJ7i1bN57AukoVg6ch3Ue",
  "key40": "3GknqDPYhw2DvRXYSA9Pv9suK1oYFkZ9T8cxizUUs8yQNvkJ4rqzgzLCevvxK7sigCET2gQcW5jzVhrDT5ffKQNn",
  "key41": "2hxyUsvitjYL8aWf9bkeRCBJsd24tucPNdQg9WaXZYE7q8A9PkLK7XnGVrZDuFZDW5sXLZRvgabUfQEj86RXzYfH"
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

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
    "2g2tXcfuR14Hw2N2YgTCfUJ26B5SMqJPKLMBaBcM7VCYL14QyAueDuz9eB89HtfAAxMPVD6hHtMde171wGtABkER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4em4mBXq8xFrLRrRG64f3FbCtFpF7nTqrnYAixiQi9GRW4hvKjc4cPtQa2kK1wrkmfYkUUcK7wfchUYLkBpH616S",
  "key1": "476EzGG8G4G2THQeYP49YDsuhsvABn3h2CxM3Xv5KNLF5eLxGCkYZQV4ocDStCjq8AAvHdtYybgXPBGHTMAWnmsF",
  "key2": "2ip2VFC1NyN1VYSvp2bCE8PLTNmCdNJLXKNGeG8UQU58WkrXLuvzeDnEdAWZZNoAvn6CeGwtVpMEcgRoDaTw2GcY",
  "key3": "29BMf5Z3d6vKd55fwbKq1PZmee9AHiAbdkFv6g6n4yYXsRECNVRHnG2i7FZZZVhkfny9wdNHTpHcrNfDxXFLepEe",
  "key4": "4DzWUFNMMYFi7JSGNLipCPkQNwjaUZEmvQLb3uiHBZD1wMAF7rRW3c489pDi8Tnn3zKbkm9W2xhN8eL2vEqrNPZ4",
  "key5": "58nDHK38dwdegoZpwYAZx7FMStHu8GYmAtxpkgYaSAMXKu8dKcx57mvZGdkz2tJ1YTqBD2euubqUNj5Gdz3mp5YV",
  "key6": "2E9N17uygnDZaUtcXw3NdcpBRvz2V9qQXoCy4Gru69xTo5Q3E6L8Qe6GoznSnkCL6ZfvBzydvatKDCNT8yTnawhT",
  "key7": "5Zp8iyvwHZ14jvc5ZxA2p2Bt3LXgBmrZtvPG6CkqjQ1UEd1booPjAPh57cpxpU5djooRGUr5TenTPoVkL7HuH3S2",
  "key8": "5EkFYBqu6R4DLLWYt2mfFWiXtrN9GQbJQcXnvXGo8WqmFWr3VZRhQWd7Zmm1js7S2PEpYQNRgy8sLEX7kGeefU48",
  "key9": "2YLR8qfUpRsnTq7WuE3gZosQh81q8rLEL39aqzUp7PHnyVkUfu14UpMiYcnXmdjUjFEMsHAHsp5eaGBqLgoxbdMT",
  "key10": "3J7i2NKJuBzDWhVooSHoGSH976PpCAKarspgPZcVqr4UzZ45PFrz1gwbicLYZbxqA6xf9AMvF1tQnHqCYjDZLzi8",
  "key11": "5YBhBEjpx3BHRfPv2PPxWo3i5uWtzNKXxcQbWzeGtNCyN1NHMcfHebE5UnvQm2gCfFMmhqi8aUEm4iyq7PxMy6FD",
  "key12": "2wkZ642wkPyNec2hxFp7JzyhNKpWJqP54RqkeXvNYeCjSgiorasfZ84YD5mUj2vbyACFCv1SB5SPwNVP7PtHWvFr",
  "key13": "4CUM8GkzGYDTP8uYp3wMRC8Ci5vSnbnQRWAWUwuidrj9rhhGzjDERjzcaY2bSxyxmt5Zd52Km1RKirDLbNev7Hht",
  "key14": "4jQ8vVZEpyEyJACxWYdj9HxZMuDopti2UjFBn6rN5jhyTgDY5448KM4uzUbRGw1qQhmMsVQtM89MXbBHno32dMVG",
  "key15": "26qmiwzFAYyNG5LRWbCGHeMWryQwxnQZSoGCEyy2DGmK3DJFmHFDMs3neaEdREgzDGg2PXtwT6NTNcqWxUhAAY7j",
  "key16": "5P3dLbZPAZRwcbY3dZWqce4AFoM2AmCT9js98oNKnjHudeKKPCbtfVQ1nYNNu6yktHbGVZrrQ6LXZ3ABkSJsWCoH",
  "key17": "2ev1muR4oXpy9Z9Qq2e3Nr5QirgwY2HW8kHLTxwsWseHqjqyZj6dunj4c7qP7MyhmVhHifP4npRjNKjGjF1kYWfi",
  "key18": "2ZfBxACZzDfvjnWvZXBjNh4ksaJp4h6MKeXfQybRzMb9scgGbeFaY8hwMDscevM9w4wiLLSafawBcrBPk2cmwMYn",
  "key19": "5phoT4KzjnmJx5V6GEMTGVzmMuSaesB9xgX9ykMTZAi5FaFW3RwkeUQesfyDpyhgxogeL1pftrzhaPbr22QBBE48",
  "key20": "3se9bAmKNHpXFWfdF4t34GCo7k1w4W4kRSJzJMe2yUKQMuM5Vui8KNALzuzCUokJyPJoPBnEmx4WxQbf3mCHzAcP",
  "key21": "4iZ8G4KDuXpBf4y8pWhCpFtoJG8fu4fyUSrMT6JjZD88zP4WL999dZEYh8koDYcEcvZYPRtJruUN1UNUpM4xxULJ",
  "key22": "4N2qh11EsxpnSq6oNXgZEKVKzocPBaag14TKTeKAyvg8TUmS2XbMhqS5xFYDG4T6DAC6h9ueZCFfnn3MY25ouAa3",
  "key23": "2HD61EnGck3TauGcJ5i5PGuwBJD9h9FzBQqE8Xrz4ADhotcJror813pXAVY8HHsSivPFnD85a3STCTgpvdfA9C5j",
  "key24": "2QQWgkv47uBLXkVd76VyMWsVmj4xKzyTrTsMPt7vTKEzhd6YMZwr1pmr7263xnHp4zZiPQh5jj8udAYb1K4hCehB",
  "key25": "3ataAGZPq6NrFdbtMtHY3Kxy8XeuGkz4L7vC4iSW9ychWNgwL35CujX3r2rij8L8PNXUYCpX2ToEHp2U5scxrd7C",
  "key26": "FcoT5KHDbiBvCyrxMtoRqr9nHMqVGbD4LaGnXrHEJwCXQ9DeCgjxmVuTpwEZNNSbzbigPqJUnziWjQ3nAJoJx3o",
  "key27": "DJb84HeeMHqByRxHoBmvEjys31Uyrc59dN8mXobdugk78o5Nj8bjwRXYprq52roq74WLqNZn6NqgcNW2nnkLvap",
  "key28": "4Gm6Juv7eDEiH6bVAu1qL65DHi4bpu4BUK52Mfq2d7hKG1X7DraYzQxcVYpJ7ij5rDZmibWdxagUGFBoHVw2iQt6",
  "key29": "5jRLgd6iXuM9P8oyyn4T3z7gXeTzMjNexeKuvbk9zSX4pnWMKLHRFKVW4VvUB3tB4dEJ8wZP6z4LBkE73kWPayzf",
  "key30": "2kNQMSoiXMjJE5w6GQyhMjmdrSagiWx2pDEp9mLGgji8G6eZ4WW6mqQ3CwudYHG6dVsuVZnj1C9o71ZH4TzasuCf",
  "key31": "3Qok2uVA68ScT3SdbPZL4y7yVubXoUoAdtCHrNA76kDhmUVpRd6B9iFSYmrBgavDj5eL4kfPWPJjWTvGNpu9Y48",
  "key32": "5pTc8RddNHJAXLvD6WJd3UEte2ntysuMouoMq7A7nqGgDQZbhgoGiuHGMAqhXk2o8Tjq1sanehMLFnyf7Hi1ty4f",
  "key33": "4NJ7PqoJZs5me18B8NXTscs8ep27yjpvv931pt4dhPZqPndwC9BN5uABy5btdqyxfrUnm75T1jTXLikWktzVK5ch",
  "key34": "4Lb61P8URzPRSP7mSL9wst1MgSd2me1JNTWuqFUgUiXGvUErHE6gsW8iE9EntAzt8ih1NBcyWm8zKhKhVC1eydNr",
  "key35": "GJ2f8AaPPN2gJ583JmhqaoDHPkV3VDoszYoKLQonYzjoRQnLPFjqydUA4NNRzq2gfXMHE3jw3HTz6QPSTSSth1p",
  "key36": "3W5FJp7riMTbJAPM3qpowm5RbM2wyfvT8ascWaVQejaNn2rnEVaECsYnzYuFs7CLr5Qhk78MgmyD1NWd8eCLSRks",
  "key37": "4qx5gkJFso2QAJXBBQh7VGv6GztrkB8SY5UxTSuuJBy3kvgzyN8Czxnq1mNMwGVGLA3JCLwyML1hL2vmX4zCXZmg",
  "key38": "5ekDqEKxF7JQTZ2kv7LmMGtKDiZdxEiVHZ9w3qkfAQ6irgYLuHEXHJo44Putvh3uvoM9M2eexDwYbrViuHLXsATf",
  "key39": "D7C4dbj7QeqBWkwLmLt1CimizofTgmDzuxTNkoa9ZwQtdcTmkGUMecjp1MS4pZXjKKbU1yN8QkcvBqrZDGYZ4MA",
  "key40": "4pb46hNzmw5jkbxKC8ZFwSoyxByCqFvbeTaspyrmgLN9gqeqiCq28aS1nQ7ZRbCSMPBoyJKAgS6C7h8Tz7yhh2vC",
  "key41": "4aFaHhXCwcnydbdTrJUnvvRXxkxVGhPAVsrMfQYQ7xCFewKGtbHzAg4ZTb4JN7p9Lo85w3PEzZa6KevnXSH8G8gW",
  "key42": "5Sb2CopEkaeUN5TF7StF8UxR4fYiFBKpaozBUPjxQCbZUSzm4psQvsynx7b5Z1VT2N9s8D1rM2unCs63UPmwAHih",
  "key43": "5NuEm7Cj3cZGEeswNpdBeyQBF3eaSog3FyZ8aW9Hj7zyNMYMJoxR1NjGgK8qaMcMgiF37BK3XyfdBTYnoyo5GS75",
  "key44": "2wUXqmdvtogkEXwgSoZR2TLiaeQnU8FVkiKiZcvGAnLccMBkyEQdWbsTJhdSNNXT38xE75dRi9X6mXCL8VMbxg4s",
  "key45": "2X6uXdyGjzRz2FW2CdKNqVMEkWNesED4cjQPm2DxXAUeemgUnxfds3MdHiKpCS8TjBXZ2PoLQ5eabBsEjs1FE4Zv",
  "key46": "3simivzjRzvJ9WVcgLAJLHu6LihoNTkJCNhZc9UFMRaPPmmm6DtGMxQPZSpjokNHwz3J7tm4nWZipif9j9sSYdRC",
  "key47": "4W6XQmnA1cdKjgyLrTiZXbQV6MqcYpYCBitXTveSkFzNJoJKKJzJuyzyoF2HmAvPPFLskZAmiBz9zX6LEDHmQUb"
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

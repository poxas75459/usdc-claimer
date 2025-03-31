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
    "5uKa4thYTv56Ws6Wu7amVjNFzNVvo9fA61zEC138K2RtgNzEh3tsbxazcq5edcpJZ2ZPYsZLPyYscnbvUF2L1Vuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c89EptHj2N1ff4xt3cc8u7ZSSrDmC14PhgiTDPVRnDpvstmZ4Andv4h5FcuK2jk8rQesaQ8jTxKihtM4S4t1wiq",
  "key1": "XESZsdTKzQRRiWWnGCMHngoGnXNXoMfLQQqW54B7WtPh7sMWZMgz6nxV2WHZW3s676aXwSuxSrCSXsJM1FB36wH",
  "key2": "5cqzVHEM93AjTerEsrx6sisxgaxYg4AmnBhG1W3WBhonBhHGogGjU3E3xzdHAeKe49dXSafwLm6U2YNgzh2hwPyt",
  "key3": "ibvagRHreGFYWGAsKvRwd9UanAvC1LKf6fB2WG4rkzZGvCeEdaW6qM9wFodRnTGBqzGdseNaC7rf8XLCf3NN2VN",
  "key4": "59QWwZuwTckfnWnQ8CpdgXU3QWu8gMfg8PZmKxh4UiCu8Gx58VAYQd7JLsH6KEw1BAVj2JG7AvXPYJtvV5cCoKLL",
  "key5": "4mnPDdiez98CZ4GTnHZAqsRkyQmybeVobfb8Md2jv9bRC2XosVd2N4y7XnFs5kdfMcQsZeMumiM9vP7mtFxcZ1Q3",
  "key6": "2vAYevuQrPSkbJZPax6FA9QB9KqMstvnCRX5XfDdxMMFxUg4p3xvzMx5uKop6LyGKBR795f772xVpVD3KXNvmsbd",
  "key7": "66ytXizEb87kH8HzUgjx97vjVap6aJBpao385tZk3fEgFzSFXQ5VW6m2mpyTxKuEB5PgaDQ5w9whe7PYxqEb8izG",
  "key8": "us96Man57HHTt1LQjGUsB7QVoPzwk1dYKKbsW7JzCakWP1mxKLCTKHF2b7bShFsakpMmTwXqqQ539UpknPseVcJ",
  "key9": "3m71h3krdj7A4zAbR2y5vHUcEkrfVown14ZV1EGW9B7oJ2cHkz4m9WGEUMJAG1WuBVCHKLiGF6quvsuVtjysGZXW",
  "key10": "5ULRHAH8aZYZWTZaqHaWMffmAX26vbYidFe3CzBeqR2giJT7SWACVUEGvnoZiWxaTDMDRHz6VzwoBrUHLD4Pctyp",
  "key11": "2WMNysiWkEZjsrdivLEZTYgNWRfZUnk4nfvXgL7eGKeZHFRPaqZtCzcyHNwzPNYNF8iypWWM2YDP1WuqNeqkuVdc",
  "key12": "2uddcWoBzvYAUY4we51nNYwtkHy4836dSDwngFEgY9W4ha19BE6UPUskPrk5aGz7NF7Xi4KpDYDKDKMcw9Ji1WVi",
  "key13": "5TzWE3YdqphsPchjwX7MZJeVUHECw5dbgfxmJ3rKKRjfUxvziHHeea1w9VAF55iQHnt3eNbbrj1JEocP4kX5f6S5",
  "key14": "drfHwtV3Bbq7cUqTxZUUCR3XrRyJcBouNwEpanXKtLqggq8uiyJZThQdS4vytnRixJYEMFj1P7p5wzFp8c1SaH5",
  "key15": "5vEg3yTWYLoPAXptbWzQGiHHuPyJQxy5EhnxGi5vZsX1uwdxnqMxnk8tvt1rM5b7fYkVtooRWDDJRfLk9GxeGteQ",
  "key16": "4ajsvHEbcuDGBLnT6NPF9BnR4dHgfJvCrQsAJnbUEAEX6vshuspowFkAg7dphgo9fdWX7Lxzv6rJcwXjLqu8DM9G",
  "key17": "5YtpcKeNcCA4PE9Usv3Nk6nBdu8GmVrpS8zoW9vLN8mFc8TVqmbH7ko4Y6nhRupGd9KLaSsv9T9B58uEXCHwZJiz",
  "key18": "5FoA7AJ544eR2M7zbkX6rLCTDF3RmhGS2gNhV6eWut6RqiTX7WGg9JS3ibs5c3kUetALh9iaAjK1rbkZJocjAWsg",
  "key19": "SN7BQpH5hcNCqcfrqHeLHAnQ8PuRB4QorjTYRqbiCpeYSpC5bpqoJuprXdY1vmvspZjj4NHMKAooFnCWQXc2nU4",
  "key20": "4zjmx5v5Kxx8UwcZVTA45m7QzuhLKhNLZXoYSSSzK2tYRoNQFVPx4ZSwMFTef2NahedZWMLicznTxeo8mcu23mGr",
  "key21": "34vjVTkj665RMdzimbqQVWQn6dkhSDi2RcWs83aqBDcf63khYjPw3Mh73TWZbNTTecMLPteAGMLqGNNhw48CDaBR",
  "key22": "4AaAFy6L6AuxUZRxx5wPEhxEkqJCsSskjaYcYDifRPbvUKZp54vfRk7cRd52PApNihBioBQr3F66nrvEkXhe8gYU",
  "key23": "3yF6UVUcorcKUEHrVVqCcBSGqXKzDUKFCcKfQNPew3n1jLhbD2cdpY9aNwnD8MefwKb9Jto8eAMWvxkn2neGzaBM",
  "key24": "4pkUzrxGYod1bNPAbAThvXYUANxqasr1MPCUMpsARj2Uivj9L28j7xdYLWeerDrxGb3GZDiqy2g8EMsqqxSe8ERn",
  "key25": "3ZekcQ73asqKSZNbjiTPgw8VSQVHw1VLcVCWCCjrnn7tZReTUttJ5RMKmxKreq6hDFizLU1J7gFQvtfxTWRUeNJY",
  "key26": "5p4ZWH7XcySWJa1RGwGyYo3tCrMcQLg45PbH7PJkjpySAvqKDJJgZ6KMER7qXuKk5hsK7KLvKvgfmi3yD48CRade",
  "key27": "38atDdziXhvkqNDnzLZwQuQAzUxhc5DatbRXuVekNJF5scFLvZFAFdoN9knFtjPKxBifrzwrrMSjdyZMf4nsx8Tm",
  "key28": "2Zq5EyKf9bo6iHxQ2uTtiXudQaYbE2SQ4k8heK3wwDPrAib5p9gNv6jDbcXhNXbQqGyyWqx7ZJGS9RwYjX2XHRUk",
  "key29": "EHQnHzqcZhom8rtFVLySZtAT3aedcJX7J39ki4UxeUniyMHnBjSMu4q3kqmZKCy3BvKi2txCJxiEbzmyL8uxKXk",
  "key30": "3JmfAgNLPqPhpjGDRrknr34XMTNBAgkDZwGcrKvrSeVPPEwTyiFv8zpvkmHx62RTCu5a9HmsdGtcwdfFBNLTDPtv",
  "key31": "4LZt3q2WUaKqt9d6CiMRzp8umPvq5YNpzhXcYpxT9wpz9gqWJhnGV2SQd174SDJRGVGpgWrRJMd77YG8g5dnjUYJ",
  "key32": "39gjyVGonTEwZgo2qvJkNsohvvqfZbMKQVeQGAbzgmqyw5mPJAEX6HmcwqW9jxiqeygW8Z8aNKBCVPWmZAd4qxY2",
  "key33": "44UBVFj2PqWjS5GotY7P71tQPQyAD9gASRYpqHB8XiX85vnPwWUxKxoGhKZo6iSBtZMwKRMWLKasVXAPgcB56FrV",
  "key34": "4oJwqXsAp1JsTDSrQbQygJkp6z8RVBGADE4HGqoZ81mBF6YpxUzi3rzHnQAC4Jj5k4Vz2PsK86vBPNvhpSUM6X7q",
  "key35": "5KjZrwT9A4ae4HHRNpvjVzsgYDHD6B45kvpjLGz9zXDZygaKTQH2kwfvvFRyCuGQsCnHJNbbjE6kPF3x5LkDp854",
  "key36": "435MNLj8jgd5fAYEiKuGATt8X7mDzx86ZPuEn8sNjtff8w4HpUmxXKRWZQVcHV6Ch1ASXV8Pg7RNT5A7J3AFQm4a",
  "key37": "4He4dZQXK1wL7hfGEh4nYYD9oCog5JiumFtkiFBkUfD9p6WLTi8yYtSawELMHimDMC5aQ1nuV3WyzxTxDAXbCxr4",
  "key38": "4DPLnApYw7n1gbGLcdHXavZGGJsbYGeisZqGUPqoHiHuiApifwJ4mx61FFxsEQE8CBvDZJvJ96yaHvamFrnyvJBS",
  "key39": "59C1qrYWDVb2DP8hdGpYoVTZyXVV6saj7NRA35fbZ8YNEvXoDHGfTfrLTZ4bNu4vgh15zaSvd8NpESqNTH6jZHLm",
  "key40": "4oESwVtJQcf51K1PATSRRHHYcbJqs2Gsio9WYD7ykaWyCcQqBNSsuGzmUycPzf6hHWj87uFzNqhnZKLeJEhiNpRB",
  "key41": "3CybNE2VSVsjjqmHAuyNNNfgipDtRYVTZ1Ygf4heaS2eS3xceWFdmRMoMkJSPqadzuqfcCb924wBxFrD4FNgKJXu",
  "key42": "4QjsPA1mefMASyPfZQTeZvUf3qB2B6oF7vaAHEeqNnvSXFe1yDEK4FwWwZWLW7YbLaCs4W4B9mqZaPApJGBArMJu",
  "key43": "4Se4EessrPiG8Ay8bJ8psquJhoGSLNULQWmcg5MHvNtMgRWgqUwHE6TBHGkxyY7bsFPJ7GDn1sZiq5NGcctV1UZk",
  "key44": "2PwEHMNghKVeEYJ6TRoanJY81jQ5MqbYTNfZsJXmo5pjbJEnvXtoW7Un36uXFqf8JPboZTkmifqPzGwKUadNaTkw",
  "key45": "5vtTmMhieFrqyDpnVnZrFCoAZ8dTP3A5opvYkaHd8yeEhpPFAVaVQMw628z2Vbz132SHUqXVJ14DmBH5WKpxaQey",
  "key46": "2Q9Zh4RqowpedrPpYh47hkSn4ASf36cUB2qh8fGfN16WvxRwAPqA31nXL4gL68xH7c4kMVkrMuAc9J5nBu5RDfYK",
  "key47": "4CadERr7gjKbmX7Uq1RVg2rkRecEvLGKoFPEVKTuTopyYZCfjVVtGbQMH9qnjUYFs6QBzY8KqkwghmxRLJbqguEW",
  "key48": "5csPEhCm55AzBoiH3MNJMum6pxoo6mpUaZZHxMbJ3wRWRV8g3JoHL8rUksAXqoTUsNcFb2nYVzuv3PYBT4RHZNwj",
  "key49": "22teSm66rwTYjJEsoTFoNzEyLF7N1kr7gc3EQXyhJKzPvgeA1T8ZWvgJygV6oaWzDF7opPMogaiZMwGPJ3opCRBb"
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

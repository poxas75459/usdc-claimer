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
    "2oRCFxE8Z7crxJqsuQYCj3iUMMHBrdJq3D7bhRuF6nA2vQKWu8bZQEuzjDwQquN6ia4vLJVvr4s3ci7drHtxyE63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5XkEa5HM7q33LJRDr9XYTFAtjfeBj6AGweko9qcJnW5CJs4h3RLDdpn23wbEa14jC1JW2Zh1EFiLh5FmcEMES6",
  "key1": "2dkhzaBY4sdTf2iTiz2rsbfLwVLmotNqsdFvAri6P4FZFJ8xnbZRfHK9jZpPKzfFTy2kzW9JiAnmbET21qWhfE8T",
  "key2": "4tJPVNqfUeBEJMnJCZ1G4UHeHBJTNiNgjcs97JuFACLhTZFhkFf6yBk88grUEkXYN4H9puy2AxHCkbkMXSvWV23X",
  "key3": "KeJsqnz6s6kyW9QDR7KtiKtdeMy9h8CxgLyfNDZznD2GYDNKqm7k3zhEd5jfR5hptkXS4f9n5Ucncb88CXbGv3e",
  "key4": "3yNB4fwEZTPhsFwmjGqNt7ppj3dsGr4fTS1kEto3tabsq1S32FqWUcVnwQGCrZd86UCfwBAYa2pLyLoAgxoexVfW",
  "key5": "3135wpiCrqmVJziPPQHP77ZHqjPrsPUT5NhrUfVNmW2RCVYdMCqtGHGoTkSFdvahMorofLrVAx78p27iipSbL5fD",
  "key6": "3GJoEz2AXCkNAVB9xjMW7YtGSqEKQyo79Z1fyiyvhCGo2KvWL78jeDmjyDey6cwbQqwdS6LaGZb9Pp2C8tJMwXKw",
  "key7": "3eM14sPCmcEwDPJErCbeVJPDefVmu1yQGAE2deHKoUwdH3YV9af3MmfkTebUUMFijZzMzb7cNDSJHoyZScC68Dru",
  "key8": "5vMNnvGxnGe9FV51FnbKXvbV3kmSusAsuRY6mWtqoBGezJViweeFvywTod767Ra7z63u8Q6cUdLPKqk62eqqfDEC",
  "key9": "4yDYVvk2tBeFvCZJitHeKNQNwCqghwiASgUhXHKc4xDEnV616E1dp1wKePXTX8eSyh9javK5hU3DhETh35p6jYVs",
  "key10": "5SwERtoKosf8yrqsYEjTNbmZ4D7tezfQvLRWW82HUbjXJcdfu8WiBUicvRo5MWLk59Pvw2QdWo125xXLYhegmxQw",
  "key11": "3BJbMjgwgyvfy623KSBqghwFLyrobKfHcyBzcqkQk9Ycww1SW75dbpYWN4qt31zDUeMEw5SY6KeKRjqz6fyceJe9",
  "key12": "3evpPFNjofbbxaGDDmPowwGgwBBWvU9a5J1GcFBKGMzE1qLbXUwazoFvH7uMwsbYzUQAjg4gPtP4qmhbK7rgnFqR",
  "key13": "5VUDCxb8AgLA94xH1zUVPrYYSu8zeJ9W7fiNdytBS5eabMSQ2skTchk2mNrVMeWiRcQXddpRxNBf3d98kmTxokQ4",
  "key14": "49cHmwXtybYF1yZuSzCWQH5Z7kvZoc2UeZ9Gi4pcYXs2EYXE1EKavyXWs3pFVNZrLjhENFRcq1bSiW2nTdDchxGf",
  "key15": "3V9w5bENQRiiDsFamR2EFUk5GBn9vtcPFCGGHhVx7w1vnE4vVKXcS5kNr4i9eez7ueJeeT2nEDHNgAYxPSahM7pF",
  "key16": "rY7H5PDoNuwk51hU8DsGkFAJkx2wxrZoVUWLYVAYsZ9AUHDqppyz4ojLZEQbCwdG3Q97pW7G1aE2H9GXVaGygfa",
  "key17": "qU3MCtqS52PeERpMHCzCtmnp6CHrvwJdBeyKGNu8TsozfLGQ4tG5NZmZZzU4FnQf5onzqg6P9UjsTt6yWCjfizQ",
  "key18": "QRisXvC8MHgL9gqSjJgAp9p2ThVEFC4FBFqqhHJAnSA2EK5trVLcXKbK3guhtwiSzcneHqUMd52NzSZNvpt778L",
  "key19": "5K2bSPacTrada8ebzVGJ6Cq9u72EVkzpT6ydXtV8vpo5V5UYPBmc5wMtZpreEKGszaYAgNNxpiGzVwoNbu9JWryZ",
  "key20": "2VrYeXzrxLpWCVmubHZJCaUzg6X24EY7vkiv4ji9LaMU82SAMY5VDQMSqW711uLYmU5Q7YPjpbb7NhjqNsA1dqch",
  "key21": "3K3Wj2sG2RYNkshdm2kTCV3gje5BsyQGEc5wmVHXxUpi3dG5MYdVF4sAR1HewmBqsDdqNt5P5nKywPs7z4eFdHsm",
  "key22": "4yFwbj29QDY3TH5QbEYx6UQCpwK8CHoSDUgzmryGWKv9hU8b9sVQad9zUfSkSVTRfT6B2qdjx6ta1ccyXR1qzhQF",
  "key23": "3XBoEdxAvzKZV9FanPSojFYdhpHC81WQUazq4E6QrMe9WRfyH9UZqaaNQVQEiqgJDpYC6dEFBiTT6GpD5SXboYDd",
  "key24": "3j4bPpfFRM8LpweAFNSTh8b8UBTCiwX6hkeBbYkYsjVVsEorRKDcCBYYssgLGMF7PFJw6JsU3F8sNrhfpXtdBFe",
  "key25": "4kMNciSUmeist6jF4io7xcLuTE9yAwabCiQ72oX77S4LmEP4Ze4CCnr25VB7oTbJR9kk5hayxnXux6qojMbjmtqY",
  "key26": "4inSvJjPyJgmhWGjcthCEdg42BJy9FpWnizUVmBBngR7V1LLLZUFqPZj74FBnXTNFqSiuCR1QYkUnaEfVBb68hEZ",
  "key27": "3QPFmKj3AzFtNCD4hAUjkdeeExGh5Nt4iRoaFpQbfQDbiwz5H7q9Y6wtgcL6nn3SvFKnqyrt5k3CdYJMHCX1XeKb",
  "key28": "CTesN5fFQvnN5p3KrKDcJWkQdihHSbrr2ek3oz8Kz9n6Sf5SqLueFS6ZgFfXaffNNAFC9KNKn7K7S58mVqyCcKn",
  "key29": "4oMhFfvJpew83CYME3NzBPaZzgUXBMxVoTTfZjjnojL8EeaL8XhfJjXe4wyKobUe5yqGETmWYng5CeZrcWY7TvuN",
  "key30": "3j3VoTY6d1P22yE4MDdKCrTDxsLTQaUYyNjdW6SG9VEamWVRq3gy7SUTrF6iuEBGqKNeZ434PQiAZsojFys7tW1W",
  "key31": "5Ajva2Yki5J43oqNv6CR5DAQGe4XV5CUgGaJ5Da5kBwYJvhsBCoQRZfiJ9Y2WxrZWsbZ16ybpNqn42sA1hKx3uqD",
  "key32": "2JG17Y29huDnq3rAfbr3WtKxMBZ9ChfBm53TbjR9VknFAtEAcxQTMJX1DtKw96zEArUrZ65s2iQiLV5TXgLxfP2Y",
  "key33": "4DForTKBWHUkginr2jtVDVkNpaL6TRG8jU5Qk6y46sn1MC1i4ZFai4YZUsvBDrYRJzwkyGF7cQVfdnykoAA7WhQb",
  "key34": "4CKtf6dvbpWrKP7bUh6An9WYiqDL1sJ7vAYgfkH9pL2uqE9zhiHhw9jfgeq1H7faZrYAqMK1ruNZsf4LBQW4yK6Y",
  "key35": "3BwcrD6bQEgXTrNJ5wMUvreL7hVPeRJr7LpybFKzTP99pLpLwZfmHYth1jzhPNE8zK3xei45HYj9TuFwH2ApuoLm",
  "key36": "59H9KkjZxFpqZPBczSSGb7Fqdz4kaG7FP7HGRYySUu5vJgicR1BJ1L5jxiCD6wmvsHMU6byJFgRgf6qckfTfrzPo",
  "key37": "3cyFj1bNXUYpPd2inmW5qX2TBHjws6KSkBY1BPoYLnZ1GCmdZF5Wh3NLsK4j2gNCgaSj1rukEmD5fioSY2JpoK4j",
  "key38": "54GRSYT4unkGRYbGpTd85gQUo7sNPZFHo5PwTC9SfPjvv7Mw71uF2y2pkWXNmHVgwraYkNSmtFrLxXyrMXPYe7LV",
  "key39": "FhNWkheNVeJ64yVBY3mboup8SYazSm44p1QaSE9si8fSKXKXttmfJ8XKuj61UjbSzWxHG86Q7f5VELT3XGfPRQb"
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

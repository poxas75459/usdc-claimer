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
    "391okjcffta13zRdKTPT2TQofpbdDegoXqg6Dmj1cdCjgKPZsyapqMAHtN8Rjf7S7y4jQCJgSJhjGwfw81FSnSfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKs8Euh5n2E4ioKHEi2XFE9WwyEBGtVSAYK2WpmvsnXUz47tFy9pcZazG6EiVtGh7YmVmS6ACbvJ9h2T7BP3pKf",
  "key1": "36X7zFLsYs6xjqgPQFhH97jHsXcpgXuSNiHCKFiZsaTKJJuj2u8yZxgQrM9kvoLv5U4ZyoohWUGZWYdEyFqTSEBj",
  "key2": "5vbUDwPRqwvfMriCUguWj1J9D5aUDRyFLLVyQ7bPndxBL9QDn52ff3yiBQYSojB73abrYnEmaupwAmZZUczhud1f",
  "key3": "613vUAdinrMsn8FQZuzSiszbyJ95jzMhwCLSFUwPowsyvD942CPB9rACSqNLS8bLarQw8qLMKjK2L3SLNXEiXvZw",
  "key4": "3YF6Z2QxGXPrkY3zxEKLmuibkaAz8BKFihFitKZe62P7qMxRm6KaXuWN7xQjbaZyw4LaTKaz2Hqv3Es55jHZq3aN",
  "key5": "2NKJdzsMetntMWsqA5tKboyXGbRnB8VZa3VwcgtEnvugrWHpCuMkQneK6ffSvkqSEkB1gHuFNoMQETi5wF5hiKFs",
  "key6": "3KX5xWbTpb19KRLH9ZuS6yneEiSHZyTpFWcpdbBJCLobFU1EyDeYsY7DBej2sTREzYRdLardPGFD5gPeNmmebbG4",
  "key7": "45MjAJY1sD6Ua9VGBzS8axTG1TcsNa4fsSoTAddfBv8qyyC7T42v7suKxi5vwL6LdYhxWeG41XbbiGor7NrkePjR",
  "key8": "3tjfYPWYb2HJW7WZHrFeVj2FTN4gVjAZGBEN1NQQMgqGDfZdJ41spdgDC4PkWavVKksxB3ZhJKr7f6C3V4cPcTWg",
  "key9": "BRMtr2BY1acvyjgePvT2PUR3Aph6wRSfV1pkauTCJ2ts1QcqciKa2M9rUVRKKk2EHx1cHx2fAXvhuN853CBcCWF",
  "key10": "4w52gQ1PfWWLfe8HBuXVAYowfDeAGNEDBmXGV4sDwAZnAkprjNh6SWutT99sHRzjH2ve1B11ZPMfky7PWtPTvcJA",
  "key11": "qH7DCBLMvHNTntKvm7V3fTfsBHhMomWxBvMt5S7bsCRUtQVgjvE4yaeFPN8fmVL4UKPV87LeK9v1dY32n6D4ABz",
  "key12": "LEekoe76Lk9FwVuWGDNixYG3EwivmTrAyYXZNMgBBCXghENN5WC2U15pDXjGHsadodFKPQomHgdWQoCvanjSrX9",
  "key13": "2JVTSWuqsfNpKCK5KTdsogfeMUb6shNbbPzNzVcYaoKfYbFbjnbnPEWXGe2yYsym89PjB5nLEzCgjaF1enm9u8At",
  "key14": "2oCmj4SSJn4sVxGEvsN9RynkTWFi1cxcyNNnyiTQNbNJGzW2yK4ha6o5npxyKiz3j7q7qGRYDCUppSc5LvKwpViw",
  "key15": "4oA51ZC56waLgbUfwWRdWqYKdCcQz5mfTx1AAE1jmfu9TqtPDkkSJNMZYXvcQxJmffPdZqmyXFceMax5g2DxbPRZ",
  "key16": "48y9evZGzSSk1Khdr6onnSdyaZbwSMkrsPyC3X17jqokU7vcjecgNhtmz2AKE2DLvsWXeinywBkZygHuWC13oR9w",
  "key17": "4SMeYLFoBdALsyNnneNMhVQ8ARDKeTkzGA68Y6XzsiH5usMXzTeyxKH7zDa7ZSAxxge4jecwS3FEwH1vm6smaj4P",
  "key18": "2VAwz4qBdZ1RvuAWEVehGtx6hMvhKtxGDR7TAu6uisexGmW5Epn96db95cpN5rKuSDDGWjGZCmoftmwhHdoH6rdf",
  "key19": "5b7xZEfWuZF9sy7bjCMWr4apFSBApA44gJ6vzRkanSBNm2eiGyvudmYzmHN8R1DRVaNrEf3qca1132mSYs3VhTZU",
  "key20": "3pGvHNZPnHRNULPoPAx68yc8gF3WVHu46ZS8NyznbX5ymhKmt8GVeMtX2HuYyTUyiqCxofjvzgPtQPHrLoyLcuhL",
  "key21": "2RtEpHC4jk3YSiN5psuyQYo4kfXN2DNV1yXRXtUDRYWcq78fef9SyDMuQ36KZQVakpsGsrDpNt7YAVaNcaRYHgsk",
  "key22": "4HP8aL2Q3DjxdCXXazYr9RRvHH7oVGMtAZLnAmEcJVxxu21kXjmKDYx1MfSm6uXC7hsXHJgonc5ZBEsu9dd5aQh6",
  "key23": "2qs2g48X68Ryf9dSMfsiahfpvnGA81784FCA6XxLyKr9LJkewWqBjx2anmnPxzvp1nhbphTqqa4bJRgYD1maMGYi",
  "key24": "4Y14RRTEreNLnEf2mW6kgk8mNvb18ky7Cc1to92PHHfowRWSSjiD4zgttCZPRJWtfBfTUvPSgwfyLSHDDbdS4g19",
  "key25": "5vLvDKjKCN2hxxUSTfUaaYECWSf1Y1AFSAhmN5K1EnkS9bJtg9uyNjj87rvQ3txqK3gnEeH9A4wRWzCyC6kxYZuc",
  "key26": "24spGeYE9EauH3HSX7xSpSJe763TgRmQjPAs2CmHAEM69TweawgiK9uyd9kmdULCc5rqDPxetqT3SK6GJ9pyFNVt",
  "key27": "2xiRmw4TffajSs9dL5NmaqkHogaV4GYXMj2FppeTdo9xeeLpzYFNzru4aC2FLGojG5tHYjCV6fkfiQsEs4cMz9bN"
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

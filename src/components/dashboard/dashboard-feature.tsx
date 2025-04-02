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
    "5Szc2F4VfzWt5XFLmaJ3JpF5ZrwYuVkJ7qfDjvfgVTJibkycrkTUkwg2CzMeQbVBa5NTCpvTmEcWUubCHX2mUeGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHE7wQcFkEdRCjcEazt4KifRe4kQVTz8y2KS59D77iFwogge2E8xrNBVTS1cia3JiRzHJuufyNEt4bac8megd46",
  "key1": "2euq5qc8o2FXiCvDJuRs4w27JYKwxL2xah4GNUbEetDaZdDAqvTWzQdppEfUHC6q6CoSGciZfbTe1FZ9S64ZWTir",
  "key2": "3v9AZS4MjUyztxZmYJcHtdcgMq5wa71QfoJGYbFxY6SbTyzeHv7UJiFDfpP4C11NdHfRsZpx9k5XgfF5S927HjiU",
  "key3": "2WLYrg7gN4dWFK5AGDzyCT3dxCDHdorXqToS6DkpNmxTqCvwMeHxkQEefLD7LiJTkqm9Dv9p9s7p55T1jMa9b6Yh",
  "key4": "3L2jbjzXL8h3YNYZ6HssqAiF7HNrHWVUDpk71d8PiET2fneWNHn9MbRUGK4okDaspqncxdx3vYFHzaqAp6g7C54E",
  "key5": "2XTX5mQQ76gxcfNYSz7ditxbyZQkzmeivW1Nq3Gso2drCHSKCzg9KWdTL4HykBpbsfct9HgP6xcu2vBHT5mSrjBo",
  "key6": "3uRXDDWK3YvkvrFoYcErx9Wqkoce91iGYfaxmMbzvMzz2qqoUffZv1wySCMyfCDCGD8wJ6TYDzu7ZgkuuHpaymrm",
  "key7": "4jwQsBJvWTtLiDTWxu72E4EbbUoB3678fYyrf9r69KNo5V2o4Vxp4qgtXYXDnwFeRScraWzaT5nwj6gmYUD1MdGD",
  "key8": "3MZoeBRSYqqacd2zq24X4XsyAupU6Mf1mmxr9a3AW1kL4UWMp7PtYEfKY1mZv71FYhnMfDSkSWHUD3nMxw2wtkS7",
  "key9": "5CSViwq7c3PYVBFbjA95KNp7npz23Eiv17AagTA3X1Mu3vxAUWTtMRLmN1zYxMAN4uii9iRoGnkSFhcGohZ6PpD7",
  "key10": "33Zj9etHuL8WhSjiiXoHj1AmtekaNNYeYiRNGNxtroutnuZeNPzEgsmKAudj7ZP9UkNfPML9Effrf29GmbDjnt7w",
  "key11": "3tFzrQZMx3e8Q9GRhnBiu4xJq8L7dCnPaqL38yAYyMEoxPZYH2fJ7ecv2b4WA7MtPQr16nsFRRMigW2oANBoTGB4",
  "key12": "4mLAQK8dpdJV7vhqv6r5cBR5yhAgJWV4Lai6o6yPNrApnQoWLQrif1HvLxyZFw8GssPNiWHJV7Va9M8koVKwaL8",
  "key13": "3T2d5av77Bhq7viBLBc6RNSRTqAJG9gsgkAhiKXssC3VvJkjDiA6SBkaj3HLf5wcghQaQEzkFxVUuxJkWHDaHVwB",
  "key14": "5ava4fqpix4GjR48wbjz7Kk6y2j481e5P9GCRYMdzUku6DzmRUaZAuyhh5JEyPyRYyTnvL9eaC6MLhJWpPjAPYPc",
  "key15": "osgt4Zn6Yc8QtRHuheemd79urKRMUAKJ2voWV1mS9JTaX32VUURDAxc5k32YMK4SZPnygR3vYKdj2fas3bNzxgZ",
  "key16": "5drHM8ZpDppRTFusEArgd9Y9W7VTUXi2B25AeurdRLy8BAKveGyCLjtrp2YMjkFeQw2TCvr4rfuXT1xB1wHBFDHu",
  "key17": "3kWmwbHNEboirdiBUserM27GXUqBMTqu9ZJG7ZKqubcZjRAZiwvwkXrPzC4irK4uG1mbiRxHHiuxpTr3vUxa2RAi",
  "key18": "2WM3TRgqBAkRhfZ5UVpm289YjRsS7AUAmA5VYrDuFGsaynbpmxHSHUwjZcxmg5WfRTCKkfBp3582jcVnrSZdgm5Z",
  "key19": "3hiX53eyz4AkzboixHSjXd3wVoyzfNg22W15rYqHS3X7MeqH7ZGSUmjo7exVWfg7U7ANYX5ACfRAgofTrSJ13Xom",
  "key20": "3Xdq4i6QaPZoBQhUCwtzJ3Yaa12K21ns6ifsdixJ2iZDjj5ZNJyngy7eM9QzaHkbRfTMM4REQChcnFLJQwb6ywL6",
  "key21": "yNhVHfTGwzyehRcjWP58xWNvQkoKoMmW4b2p9yyk1T2QsyrhHn2SMJo4FpJYj8wXTqT4mfGan6UwASjP5ecjuXz",
  "key22": "3G4jWNkVn3jLisNpUhXqqgvaM5FCPkwou43NojcaqJKCGDLek59TYgZYmUjH8HjExd8kz5UNaJdKiJJvziS16pV8",
  "key23": "4QqgbJnKBNJBCoMNj89oZukrMzr5buJgfTdt4diBLziJEpX2nnN5NUW2GLQE8eAPpzUk4qvwVCKcZg2y9UPQmSU1",
  "key24": "5r9zLtV2o41BTQcS8g95cYcBRcCzJoL4PQDANTvkXM3resXxRdEWbv9w9SsjvbGBk5TPjHdTQrF9MCjzWM2qt8TN",
  "key25": "4VSRE2DWoCiYJpN7PNkE4qNtNKi81r3rQEZ79ZNvXxwyGp9vT955KYz19nPVspZYUjsURPbWuNt1Kh37h4Xf5rKc",
  "key26": "33pCzMLYJwKYqA2f2gmUHwWef9FQoTW4SirPfHNomNGkJfLsev1woSKFyRHK6D3maY498RawefeudpQ78bFbo3iQ",
  "key27": "2n79nn6mSwzWfTthZkpCg23E5Eki5f3LBEiymSNhdNRjdCuEsMYpwFEmoYZ8zHTcVkR1tATq6cNEe1ft6YhnUrro",
  "key28": "3vQGWb3JeLFQmmTB5dcNrc7ku2dPBBfe3CX2c4J9nd8U9S1aDaFv2iFr88z1pU9A4949qDHu8MFcn6naSJk947YU",
  "key29": "5xmbaoN1ZmERnojFSKA2VLenRresoViWN3KnRu191kXb5UgABppfdHhMc5f5dodVnnVPLB21CaYwbPwhnzX5dnks",
  "key30": "4fKxt6V4EMjHkJ18uaovEHDmAXFv8KTbMkkeeHq5BYjAbQ7FK4DpWKJVgUjfckxKVvJ7hoEt318y9GZCYq1hD186",
  "key31": "56GXz4Ab4sQkURUFJYanorEJnYddeQP88CQbBTgaW6iNtXFpkPTDKZoUcHwEEHb8UWsf7qhSZRjDQoZ5dEX7ALhy",
  "key32": "2kBPZr83pyGhym78Ak6X8QUUaVgLDBn29JoJMBoE8pjNckB1rKPpC4XtnXNj9g91iTsUcnJtLapNqfozFxrx1P3N",
  "key33": "3MiBmG1kY48CeiDA5jKFTZLaA1JEV3koq6BLm66UsfxbzWHbDq7LMUahDEJr8S4eP7enc2qGXK1pKhvqgMuAjMnk",
  "key34": "49t9tYfnkUoYxnk911FefCpMxmbwtjFT7fjGz5n6vhmtjwD82JzkADsSYAvEDrtgGQDRTdqPtxMMArRemorPDCgc",
  "key35": "5qbxVCBZXdTJ2MRDLio9WTQkk8AGv6a9Xcn1BZCKGtz4Y4teDb7Nyjb3JzaDuns6UvqiK9772sfCX4fhD76xa1Ze",
  "key36": "fGahhVvrgbmAbyVqCDwVnqoqQaiWiW2F995hgYeR3rHytCbtjWEgU4ZXnd4eA5LVY24EDzwUNFUsRdzVMpi2kRi",
  "key37": "7bjQAzGwxmYLkSg9KbaoV2ukReGYLKdXdck88h1u4YPsjeME7eLPEeq7a95U3pJ77fWHRamya7oyKjfwqkpquXh"
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

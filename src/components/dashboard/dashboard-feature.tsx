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
    "5C3sQPTZ5zCyrWQySPwk8jjRPHfa65ufSzapmzmykTRKDXHLUyWZH3Q1W56fpNTgY656nz5zrebhyqQ9v5GwDiBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Li1TjNc3JfyYTPeiFPA1q1W6eSbhmKxnaP5a7JxkRJ36fecAT7uin7PMkzRPe6GnC56pCU2GAzTFiBfCtmjjPJX",
  "key1": "5rEsqNPbMtMUEyDHZih2hh1JRsfUGknZqBvfDr7i3hGDaj9DAg2aCwZpVj87YTrSGoywh4g5NfG7RQ3uZwmonoYo",
  "key2": "3ggxWgX5hp1R6K2ciMA8BJXSPwrGqUQkBains3JC9dNX5bp9bifDoEkBj3oQuoeDp5jNayzhTTYTnW6cWJjiju7d",
  "key3": "kPdSmqHhK2qprYY3xLPT5ZU94SeQ2qHew1JrMuuzM5aQrs8gy9S2vy4z2khcpqyzhxiTCsmXDXiD2y3qNY3sjqk",
  "key4": "bkPDY4S6LUVGRUZJvfLqhTuuiqsiQNQJqF42Qt2d4df46TccBNwQ2BB4N3pjN7StAdG5CmT6N5Dm46wWtpgdi2w",
  "key5": "4ATnKoC5jgWKB6yguRMUq4vGqMgVNd6BihNVUMcjRUeNXxYj3ckDeJuEGa6frWjg7ghUMDcJCidLfMqJdahmZN2D",
  "key6": "4mBBP2pPjMNMqoYndKeJMB4Eg9ZAhsZJtAHFnfmzqhbbwQyvE29RAyCNc1GBp4V8xgFPEqmEpBpj9qLznarpCdjp",
  "key7": "23r8u9RByJrxRtx9pHYMQaMWFYyGb4rVVebECor9kbY9CkpGBBD4Tkh9Va9W2mRiiZZ4jK9sPJnQZCbE8NTCCzpd",
  "key8": "5Q1b9SpT61qparRzhCd14GaymtJ52X8JfATWytMn7s6J2gt3yU3XLw8GiFzafBjQEt8RwA3q7nbY4dKB5zwCVJe",
  "key9": "5Buna3CmwsurLNcVeLK5egHs3SfRHagWfgpQskgxCxwzcAnRRNbQpzpeReVrbBi6YvLtBNMC43LcoKiQhFwaaT93",
  "key10": "R5TE9kuTohKvyz2rVk61XMgZsLEcsJKj5mAcghXjf5ZmPhuwfkQ5d1yxRRJGQnMq9KiFKx4qgchQbuw34QGMLyr",
  "key11": "es34Cp19iWSKYHVeoaFPncbu94eSShVc2jiB72K37BGb9tYxhzwL3u8a8GkEYx2LZzwxqXF7oQD5NHfdAJoVNBE",
  "key12": "5S7bMxjGBRT7cVRpF2HL7nzbXCGmc5nm19hpqmuept26cS8LynjsFGS3H9eHc5VrB14BqC7dvp3FdwkaW7rzsUJA",
  "key13": "4wTbYRy2Yv37QWGmZxVRJQ6fR1CxLGSv9TMxgweNDu2XudbwUoC8jTK1WAasdJMubfqwUk34kVJiMAM3dnqzWhPz",
  "key14": "bqSe8XHRmb7zQtrZk7z1uL7e97oQJVgGTcJf1ebB821jkUo3QC9GmjMieNeUGLzsQmrEChpjjw6KqFw9tsWtEye",
  "key15": "3mAF88SUygWu2KXjnFmTuHL5xbnDVz5tWd8D71tNe6LouusFVWCV4ixtLHuW1gP2PsbnXTCmYQZn3Zi6N2hkya7E",
  "key16": "jKKk4EHi7Gxc1tK9K4XMQQUBVUTKADPVSo2Y65nYGySeqMDjBv3BHBcKDJDN9PSXzwhfpMf3ZDFjBbtVvntgib2",
  "key17": "5KRyVJjRrVBTDbuAMunhLX8LqGkmQataS94HRgwCGykhgHMfCmqCcCS13bzKXbZ49653LVobLwALFtYKmDCCkjJA",
  "key18": "2aWKMsMPWLNCbaZmdkfNGRQkgyogwwhWngvbYzKNn9zohm4MrtxP9EYkPYyhLYvA6t6siJYFDopuTTuvz6TGqmhU",
  "key19": "3EkC5N6aKpX2pT8bPt31BPUPXds5N4QAh6Uziq7dkWNeL6xTNJLa1XqWpE2X2FaBFzh8Tc6tSJGJTrg3f3yY6yeY",
  "key20": "2e1NX9nTdqYGs8DoXHDzyqQ2gQu49f8g9AJ45FGSUjX9HEMFEnqtUrxmeN8WQshchzxQA8L34vbEzr5SeV5zUVA4",
  "key21": "5SoTSXnz7Wid3zdybJPEWkDBE9WNNVHN2HvWxMshTMWPSWMg51SP9vCYttX3KZaszNf7h77FjRD1PYh27T8uBmYT",
  "key22": "37D9mUQ6wP5nQTWxYXnveWBaBAyNeFsRMjZQFpMpHdEv4xdsAK5JphuJnr8RwuscD89nWMBikomVTPfzkAA3D7Uh",
  "key23": "5drnyv4UP9naWH6Rs2CUGDre6hMYAhkaj377e9UhuhqsDtZM5GiNb51WL4zX5x8Borw7o9kcKzCDAxSi5VRyzPGe",
  "key24": "2ojPZzuwcZqhS8YHJxzgD4w8SS5RJoH8ntviLPr77XHogb76Qp9QXcru4XdG9WEpvPs2VTaG5gztW4RK9FjA8Fnj",
  "key25": "2TEqbZ1XsAak3gQfAS3q7S8sDTho8z37KbPdX9hM5GXRt45VWGgAtKGZrWvvddXcvVzZDb8dam2hp5DKmYPpwowM",
  "key26": "4HWh6PPQZSVL2bZ1WjMUojZoVya2kQ1tnCRUEP2wWr9gLdCuDthpDrvcY7JjoCPCVyTyWxvfnTtgtRzub7vkhMtJ"
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

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
    "4bfZZLJyqFDpEFrbJESTmxWRsEmbNoGiq2o4sBLsqxacduydFQpajSkv67GrDKtvZAcRG7uEeZhVgTx8XWjE4Pg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7diDRDqLpy2cks6sWx4u5gcc1rt3C846EHdXXb8w1vZ4GT72rNZTxYWmeoNFSuzqcv2FVAGym7ExCJC1eh18Ka",
  "key1": "47meDkkRahHugEeJoEA1yFZ45MvQvVvu7jfak8oLAPRj6N9scAgXBNAwbpihvAjr9vMfAeSBxVjHFLTf7jqKLUNK",
  "key2": "2FMzB66pHgd3FRgQPnNpDtLpB1BrNcuykyi99fpnRHeopS59K8w7cAV3jT714LMgscNWN8uCjNpapBHdWYCpUcbX",
  "key3": "4btEd95AdCSqevJxdcKuL353C6Q1xRzznwd6NH3m4evgc3uHZj6uRxWMyEkPDjEUr69u5ymx8YB2Jxr7j6L7p8vT",
  "key4": "5A2a9BccF1Mzw6bZ5EcbtKC711dDpLfeNHEh1mzuPzNb7jGu1KbYVn6yY1DpZdrbN5dhfrBU11JqQvuxbKzUdT3j",
  "key5": "65YGedgHTygzrJnrFEUKSU13QuZv79cwWnj7VnrPyVLtrse9JACkWDK1ds5Gy5VfLjCWFQvDj9R2wyoShQF7DaAM",
  "key6": "oTDcufrqj5Ehyk1Fky16SLgy2n2UTXGEHefkT7qUK1254yZdkYnSp2wDQ2jsfa5N1REeGZXk1teFnJSDPC8zUph",
  "key7": "5hpaSMUi7jbjxH1TxYjxWX6XVDaVmUSc8eFJhc2PC4A6iSjEQ9SRC29pt5x9FTipV3p4UWpW7Ve26Dk8k7dfurGM",
  "key8": "65xdciGAxkFXSrG1fXWD8Temj59YPz8s7AmxQ3czQWzXAJJRtp739aLhBRU8C4gxXUZUZrWqgeDjrQFHV9kkLdtk",
  "key9": "5dggKvzj2nAttDbNQsNYgUmcKQWmaYSCwMmZ61E4g464R9qE4BQED5Pyt9Cs1eN1uFBtvwrkCQL6NJUyFfUAWMJo",
  "key10": "5TkBdMNnprkQxkF3YfxWFZ7tBXA9ppbgeU4hkq33cdAiam4gM2g7iB622Kgp7k8ogrwZVxUfYZer28TMqfMcBitT",
  "key11": "rn3xTzdXG8sxLNZjE3x92ArmZLRU1G6hdmhTCRVrVjanMa328NVhvPSQUufqKzVrqAUKT9P2feGSVs4Z4pbWkAG",
  "key12": "4WgpKrNcCJakJcGHXgGhv4rndbZ45SAJ7XW65c12npZ26Q5fTWnSUJUm8xsYp1Vqh7hVnR4ktRJT1axuQ6iV4EDH",
  "key13": "2mRdwJyt7KYTsgUZ5JHyeRLxbftLv2XBUFvrfcJRiFG1yLswGZer3c8auTxcjkzNtZBzWayiA4EEVWxch3Xm4adx",
  "key14": "2EYYDE1mL1doU91fR8NoBM34KCEZ8VnHYayNiccHuNtoopmzDMwnqQh8fHJeudra6kGa6hQjmwJqW9s3YmKCCqVt",
  "key15": "5KFkVscNG4kcQSPzQn97DkCzJ3Q79UG1bPqAkaRBXCisPo7Ux4Ghao2uuFDuwXPx4RnSw3dsVaatkRUXd4y8VwSt",
  "key16": "4Fbc9iWkodCHiJ4xJbt9K8irL4Khnp8nsaQRfGL8GkxXfQE1nNeu9DzPXjCMaTaixjkVABqCYbSvJaEs6MeDZk7s",
  "key17": "2wzBFUmdaBG3vAVZ51JFcT4NFppZHuhEDPXJAp4ZeBidJcoidYtwF5WskcZ4947uKVadaZsJFVu9xKZEpPT2qNLs",
  "key18": "5LwvKG8c3CekXzT2vyMDqJM3LLebgbG48vcAB2UXjBFPcu4yi1AH13CZhc2jAZjxvF3zRXUars3U93n41Zt633vx",
  "key19": "4TKLJF3BHq7aKe2xtrrMk8T8rJnH9ifw8HgJSwPBrpyviKntBLw9agj7Ma9xwkhhqXuZfEJrYdrG2Lu7ydhXrQws",
  "key20": "3hVvkmj1Fmx8UWmkmezrT7exUQs5a4sA66xvsuSgJSp4gxtD8EU2saUAAgBck6K4dTNxQ2nm9x7WTq388R1tFgkE",
  "key21": "4qKDJcKPwz4rqkGsyB7NPhQb16xpkxZSgFeQFxgEwgvWkLh7h5LaWznda7FR33uLYbyUDRoHGbQqfDS6fdd3gAWz",
  "key22": "4gzz29dUySWEfCZDXsYM5xgJQiTXTU5LScGtqMoVys833qcwLbCQc8QKcu8Ho4uAvHQx3h9kX85GYhogy29K4MXZ",
  "key23": "3hZfunL1N9i8BMxaRMc8b3kyAbw8XeBavQNu1foYPVUEXhAsxj1exMDNa1eZDuCeieEWzgvxBg4arPW2tRFBPGPY",
  "key24": "5FHup6semmVu7VEvSXsR4CmshKgZPGu8XSfprMzSMi2jAPDz8e29jYRxLyUUnu6KYnGiPqK6fKsH2tbdQMt1M4ox",
  "key25": "5YmmX7sUpxb2n85ZwkCFWJK52nxGfwUnkkQmrCVe8pncsm5AZFJWik1t84PuJgxGJaazGMsCeHMCEwD2VqNvfgL8",
  "key26": "Boxz9MnMeJ5Lirjm5vxinrzEG2w9hiWxPDELsM6sY87xFvYHwNdJ6yNgLzGkfabGSWrag2rsrBxcrZVWhpgo7zb",
  "key27": "2SzmTuHwgreJto5ZdJY7LTP2ZE4AtRp8pnMXNivzWhFgmExCeQpfRHPZbvLvnr9Vp7fpWJnfLyAfC5VCifSCm8zH"
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

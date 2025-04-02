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
    "4wvh4zF3At1mGU36vm5LvvcqteWQ1xRA9FG2xEh6SE1Pkhh45vnJAw8wuz878Hgz2aw6Z5C1PdqGrww5EGNzveRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRZVM9vP3dPkZGsuEyiPhQ4Lkeb1zFJnBBWSJzGJaXP7oosXkNbN7cRWLtJJM8oSJbvs8TNNrRuJ9dieDatrZxT",
  "key1": "5Zz8hR53azVcqEjYCDB6viFsbBV9ZJfRZvBVCxynWFriBTXBWnYJVT3SfWBwvKaEqwgk5i9yotjGyZ8vL9e1iUNf",
  "key2": "PsLLUpVbsrB4yY31QPhymSFd9poKHEDjvqvC4te326uBpmx6UMqkmHUJnrEfBUDzRScRTZCvSDsTMq4H1bRqfj6",
  "key3": "3kjprnvTgNz1ofrr8NN1YUfAkUw7pHysAzD5W9MkUnhHngK1eS1DqA2tonA4esLPP4jXsCivkAgH7mtsTniwKFBz",
  "key4": "48kbi6uj8MauMigoHLywSx95QB7QnVAkrAdk9AaQqRvFViWbboJzsxLywjyqVELXFjey6jrU6qjg5fuufnX6w46Z",
  "key5": "5dpbZGdU4XSEYHu9EneYpCR3LZYZ6XHKcTBsYk5mJiHUf72T3j4rEsE2V5oQyyqxwtAztD3oSmByaa7BFR6eYjHt",
  "key6": "iTZTFvwCDAdJTX4mBRcaLsH9xC1jeCzqMvYVR8KNTf2kADJZWYU7gQF4cLxnbndMgRAeo67arXGbVdVMJuyn3g4",
  "key7": "4tHftneLJuVWWPt7QD9DnVmSMwyrLssQnGuDtJmcJ8Lbw4i2mZRx63jSaqGtHb2K5jjoPeydAzsexj2PkpQzUBAD",
  "key8": "WzF4bdmnyEacQ7vK66wUrqMeP5RisE21pxDJwsGHtsrwbYxaCW6YzBn99AEMyh3oX4nvx3MmBi6HqjKWy5DRfD9",
  "key9": "2M42LG1n3Uj2scGAVbzJjf5Lie9MBxLyzA4snm7ftddAH4VMrWpVCfKqjcykAJMVh2m2bD9AicWe3W7CkWnrHcCW",
  "key10": "bkepHTVAS6oKu5ys5qB5Cv2i8zNBXDYsCbWiXknbMHm6wHg5wZP59cdAS5TS8bimKg3Wv9kEByG7T8oo2xygJfM",
  "key11": "S18nZLsiYn9RjQrehUq8DhYnMN8kfTivS7dG4axFochzJ8iyaNgE5Uqa4sUXVinxVLsV556gYWhzWLS6SzDqw3Y",
  "key12": "2Sn48YfdEL1duDd7TPPebkdyYAuKF2zDuHLwxiQn74sACvRohJ5Rwxyoag3RoVERGS9BDWAuHmPd2FWaEkwKePt5",
  "key13": "5AJgf6o3j4ug55m7fGmXVxcPD1z9eVJLEm7Lu7j2DhLkyim4VZh2aKokL5voWTpWJ4gcS9XVuMBVWymiqUeid6jB",
  "key14": "3jqbbdNDyEnQEXXTczqu5nawR8qYXyLjpDPgnVy5epDpMeU2x1sRzVjpTKCRUTwaFMJgghBcfjt7khQrAJimVsZd",
  "key15": "4qnd5wDTKG5brfzkrXRRzNckFzZRNEKNMJbdXJ2NcJNYWA4MGQFd1D5uPXDqb4PuK8gYAGd89qTn414Br3Cfx42q",
  "key16": "26YRh6nRF8wzhaNe8TVEsLMboz7C11qNu3LAqjjqYgPHpmFpJ7NPWYx6hD1ncU8aZPt9sxzKXGuaTCDc6qBG1dXp",
  "key17": "4A6JpkXhJtCwiYNpG5sdLzvLVcEiFoKTTj6JhL8hz7JLHMiHAkbjz2AAcFPeuH59r2MGP13kcPyCgEcai3TJuKgY",
  "key18": "27ijxfeJ5vE1oZ6odZ78N5tYcp8DbGRXERBRRfGzAuyU5UPZh7pqKhcKL1Gk7oBpVU23MGszEfetxP2zSqSfVq6S",
  "key19": "5D9XdFKJEN9cQqDahgEBiR7gjXYTbuEDsdaXQcPrFR5qVP1AwthWs3DRogVNbxhxk4CHpS1rqxSt3v1P7CdSmy8p",
  "key20": "Yah3fG6wGwRx2QqHRgm1YdfHcjYGZ2xoL68iB4Ust9THSeQLkpMFFEzwGj9Cf5pi1DC81E33uxawRifCn1XPCg5",
  "key21": "4o143kYGyqdzQYKr19oropWnAfrx5v7WnZyKNtW6oxJJgT5FuiP4K7fZepcXH1vc9tFGrfHT6oyoY7N63LhQfS49",
  "key22": "28VgCc9EkaWzbc3SdnP39mcUXDNMDCa9goXNNhGhhhvRiyETMn3fFG7gCdmkuj2YfD9PLSG3LdMUYo2p2CZY5cM6",
  "key23": "2RiMM1CMtnk69NS7imECaZbPGUhmW1EsDFsgry7w7HnkufJDHBKGZMRftzmijDgM4HkviUap3sQfrAgN18Rq5P3e",
  "key24": "391ePkCe9Ywhx42PeuLY5RSCFTnHn5jp84jo7GQ5NE4upfFSqTNRiZ2buPi9h88wB5M9PbezAQvfCNWkMPLpbLtH",
  "key25": "57H3bQjpoicGE3yPRa4KQxwaVHhU7sDErPvpUYZ9zH3B3545oCUQrh3BApaAa21QH77CKu5Csg8uLyNKLmZpEvQt",
  "key26": "AwMejjVWC1wxL1muhEywrRdrKJdp916A2S5d8atJkaKTtFAZKtUN5mNWU8bsx7sjPj21TjoaZAdXH8E8zjwNk5A",
  "key27": "5ci7sStbXpeE51EmzWfxmrnUf1dRaGHJwfymy8jb9Bwi6Fg9N4hdvFcW3RZHSRc81Ms6GPzFZVC9MpXgnT4UZ1TP",
  "key28": "5qnBUPW4TrumH7AaWzd5W8RgD6MvTXQRxBpydxpZXkjPMVMwtXjzHoUrVVkmv1C4TiN9bnbHjYnina8RXap4gFUs"
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

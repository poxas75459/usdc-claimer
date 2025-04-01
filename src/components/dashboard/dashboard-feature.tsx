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
    "2nsdS77mz4wt4JwwqNsnmyqbVyyDJhxESKzQf7TDeP5HQF1VTPWmtH3wweWEAiu4BPQNsVuDpJsHNb1oL7s8WeXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yfjf8gUF5ZUgEdJGkEMdTRp51Z1dMrswCiJJp7NQzHjZsJ1pA4m73JvTy6bZaXcz3RQ9wccshPKYDcrLkvoewgC",
  "key1": "49xBWRqNeB2Kdw7NbiEPpTGDdNfYypBNWY1zJgT8rUA7SarUSWyqT31KFBr7DDMnvyThfu6FSbxPhuej44vECqqp",
  "key2": "2KaPNrUK7t4hHCPeeJaB518M5QqooFMnDnga8gEgAtFjauC8A82d6FJn2K8iTteL8jHYuGtvZBmgr85KvY19s1Aq",
  "key3": "6WwjLtmXNM9GLek2x3dQchhEVD5juKsb4Jv6BUTu6vi4zPgcCiwtXwJY8zV25W15ugHhYN1Cru3vJoANYxKGDzi",
  "key4": "ua826ko85WFSV8hwtvEtTZcK6AbMWaMmTZEeM9K3wj9wcEPiqRRoRMi82oSSK3Gmm8qtgaUirEZujrgPuRcttLG",
  "key5": "eyxBiVzuGpVJiKR3pesUm1JsxxbkCdkQ57Z8oVGqAvpL2tGXuAznipjrB4n4mZYcmVzW3urm7oeMHtQkG2bHv8H",
  "key6": "3PVfThsopUWpRA4ytP7H1sW5YzijaqJtRVzPX3DpspmJKeyN3KMMnto9PEC6teRxKyXnkzt7ArLDTdLCVngc1eqs",
  "key7": "2HUaBmWx8mFwJjkH5ri5izn5Gg8G47cf9MVvq3qPXHfNFTcrsMsZKW6FrusWSv63J5VknkkSJtKGMtspmagi5Fwz",
  "key8": "4MZWBNwDmQcCpyfpUqww8VkMfPAoauHsDiSdDFw8JYs3S5tZJr17eyEbvP9nT65dcZcdg888t1xwJnxt4LJ4uVoj",
  "key9": "2yTdK95xaHe83u7ccTgmf262K8TfYfrpQAqzMuhhjjfbZ1Qbz93kcbE76de1bmL1cwzvBXA9cTNeuqphQVjVVAbE",
  "key10": "3Nios9qsox31y5zxSKRFRQnY44qjefBZexjWGGfL4RsjaqzEHNH7ZrP9xiicNeweKyVgZQZDATVp1S2oNUqys3UW",
  "key11": "2YJbP2V5R4FGasH5KaNiuxkbiueFkk5W6YBebp5yv83JNzt7aNEefhayfhmebWrKwa3vSYEu8fvrjRKznjBi6y7V",
  "key12": "2utWnjE3yWy6uxSzp4pQT5zPTaxUirD4SyyStHH29RntMJgpuYnwpMtMKyq38MEZJ3kJq5DPiUGkP4Yfq8UVYeMg",
  "key13": "2m6st7hcV8Znz3jXZACypMHrcn632H6KtxDhMAVarkFhhxjsge77VMY7CPb2C4jfSDws21xFujboR4J7Erg9pDJK",
  "key14": "A19DJRDrnuhFow2zQhpDPz8JrKiRnqqUs5rtLSvDvzszoshhr1fUCepdfhkf3AUVPGy9vNW4XqLbVRx1pZsEVP7",
  "key15": "fsgCjboTjbSXt7frmMPhYhCyq9iS5kWrVfwFwqeBMw8rUC6M2w3piXTCMiQHVFMuDSyZXEG21NnMVBMXwu7PKyi",
  "key16": "2jDnt7siVesVx2DaNKCjH34nTJNjYBEe8mz1YiuNehoeP9548akZXNUJxrZV38k98cgMPPVZbTLErZ3umbGFSEWQ",
  "key17": "318R326B5G3LHfMfYB6JLEvMyMAUpgWwWxeS7SjpoGJe98nbQuQCcD8gNBeN2QJfHSLL7dqg6HtKMc7toNKffYtj",
  "key18": "21gi8HRkTZRJNdjQEoX7hgBmpB4PLVep7GThNJhq7KXKcbJPejyyy4iQECto8tN7ExTqxE4R3BWmAqZSuJcjKuSt",
  "key19": "5ENf7NtJQH2EeB4My3m2bLRbAsDkaHkLcPnYT2uuaCaL5JT6PJWM3GkyAzK7iAwEdjVxRdMHUWh5ceyMNn79jU9V",
  "key20": "63DawE59hohDxhgmVCwe1rCkVjC68PR6ktNsntbzZcrtLU26Q7XRnq2zv9vz9u7LrXXWRZu94KSrE2AD51QH6Vgo",
  "key21": "4JgJPqL9PrFDcn53Db34nRonc1xnWyckPzE2KYcvHB2TPgfqc4airy1VGyGBsCzqzMKLX67C3L19GxntzBGdEZi7",
  "key22": "4QGzb1sjzAy2pmBS1YCktaRohjPMzbAWztqsszsRtJVyrLftdEbiGTZAo1FNkyWoq4pbBXoQhMg4Tr1yMkFYneg",
  "key23": "5LVaYkpP5r3jFbFB4pB5chPeiTjH1KZYLBBixLXMFPYyyeK8sJdhiCNXGpGwozSwERLVhELVgj3iUTk71KmMHdSM",
  "key24": "5fV4zhXkhVbLf7WhEuAcuD5VdaxfNQXkJCda2AeBcM3dCcdCNiyrfcByPMPgcr5Lov51tvtB7x795dXS1izBYaTh",
  "key25": "4SS5smpD3eJE6kfjfWMMAuPe3Wan23sPjmdg15XqRjLvQrewE69au4u2trBVVquMe3ctZumtL5hiK1oP7oNz1db6",
  "key26": "2DsqBB6HMuHGnV3jv8FCshYQyKGRQm9FJqejCUg2NK9ED8CRo1GG3fPi39Qomg9R9eiFeSNGfXfmgBHLHKHmzGCs",
  "key27": "DEfAvJGVe9zfwLD8AS5b55KQPEFtqvGs9Xayphp74NttUp83j1tgtpEEFjW7WQuq93g4B89aPAEy7QmBVXbrQQK",
  "key28": "3XNjF7CSmweTxd4Du45PNYoYQEni31SCvwUbVXdyqr8ELP281aijANvyXnGMALFpiefNbFrMJaq8FLpUdRhdNUFZ",
  "key29": "3aLBNYHNzP25JF2KKxcUSbn7f3rCk2VB8XYakZFbwwdNwPxoNu1pVUqfAD5Xd9ZfkdJACjb4rMw3rxM5YzF6ERi3",
  "key30": "96DGoSf2LhRLV1bAtzQ2t6VCzFqHz9A4iRgKNBY9aEqJ4sQNb2baUcDYotgMqVaTrWgqFXFvQKmHQiQEzAQfUgB"
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

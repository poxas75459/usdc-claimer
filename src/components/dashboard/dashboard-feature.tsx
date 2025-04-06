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
    "ye7aSFZ7D9Qeb8Mgja3uWikgB5ARMPkbEVtUXjbjFwz7EwtZiJ97ZpewKtJhacNKLvRYQBimVrXVFNCsnCng1CL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kWkoFHq3YBEvd9NDxSBSU7LxeyqubpfvAMETqDmTmvYNzh3xxsPNB79TRHfzAe41kKXXHAfzQQmSgEDbbsFmSa",
  "key1": "vALC7JJcY37kw15XtgZPJ9xL9oWYFFzFzUaxpdXHTofzaQutxRGpdBiAkjvYjVw36QzZDbDDXTwYsypWKc2mQwA",
  "key2": "GhyVFYGyLBE8adgJfXtKjgRGtn4MS6sDGo2RKdKGDoKcn3wXCsfToceVMPVrVdwxVo9vPyFDa1VUdU2CthmWdJN",
  "key3": "5ELdkQuUpHK6ZmkTMM4EBNDfdhXL2z9thdNyj7Ypuqeyx8LUUtaPNuT5Ve1DHSZYtXbBRqFaokKPuPB8qiR5ZKAh",
  "key4": "3tvVmbBG2yuux5GrDwvuzDovC1AbqQKqHNfZk9hcdbyRUq3p2JR7tW8dF2MP6JcqbrtxeqiffJayA81QzDNY19uA",
  "key5": "5T3eG5rZjC4zv3GXJB5NG551vbc1fmq7P9ibAV9oPrMTACYKgWccmt9j7rFtu12FvtDNcowK585ZidcPZJ5Md7RP",
  "key6": "5gsgXuQa1thd6wee3RdeUa88AbH636Vx4cBDQmBuuQgFe3D1f2uDfpidbirWxvrEG5Cfp3CktNGcN9zJ7MdyMf1c",
  "key7": "fbkQRjh1NAZ1eQV139JrorC6wCLzr8H5Gbw15qGrN3ZAcFC2dhxkgAyvkSi33NyLrCr6pZyutQmy5fVk3mkRPLK",
  "key8": "5hnHf33KwaNsxh3UHa8Et9JWq2jKJaYJ3K7GJ7fALxBV9JZrBRNRhhxZcpmWr99hozEFUqpK26a7HCybyYcEa6ER",
  "key9": "66zxAEMbYs31LYLuH9RjT6N8a4p4n9EWXfmBC3HZHLgsu3uwipAUh1Xmpo7KbdFmEUecWRFWxzu1nwRjEUkqHBVy",
  "key10": "3T1et26BkciMdRxocoZCTQmVcaejFjS6UWJACVDzmMjHkMZ75xjBsaoA2Hf3mwk8hryDdZGrGcaDiw8nQnb12aUp",
  "key11": "66zfdYS4JpRzJBeMePUp5aMPfaDYiFGxWwFpGyC6RZXmh8tQTMfcraysa49vmHjQmPB5sUbTQVUdkHQom1ARUGyB",
  "key12": "5sWvBzsqBJaapzGBhFvxeyfuZjeSJ1s9APZ6Uuf9hAz3R1kZ9i3gWKeqEKM4DaWNhgxGjUwaLPVGHXXzAWPDkUAm",
  "key13": "3HkUnuKPuydcvdvhtsEscZa2A5gidnixf6xYTcbZa9AjDiKao3SGkr4LsvEPPvBKcmzFWhujVEpcqLzas6H5G4qg",
  "key14": "2tzh5TJY2ioNYaAaKqK4rgyQ2KQBv14GWfcTyXuPWW6PUfsTK4VSyaDNE74UNkeXHzAyapwEWhgsJi5FTQBjhfKQ",
  "key15": "3DXPRduFfk6XuSrdWMBjzu3fs6CxP8DEEeRnvt3G4wv8djuoCJAdvFDXTHNwwfKn9gVzqE2DPmK4CCkQL4KhaWgP",
  "key16": "3bCpHwnUoj41MyjVBxKpsKZ7hLMiHU3jUXGL2g5neXaRbVXMdMFaqTEthkN7ie5p87dKizRDM9GhQaGnK5epzk7H",
  "key17": "QmRkkQ4UN2MjjdVCXRUY3oQNHFC5Mqhaa7xXEMMxeNyHCXfbmTVtjtH5v21PvburAKVCvahuZh59d6u5aFxxFZq",
  "key18": "4cHKunGZrLw39AaSjmczQe1sxDDyLoF8ycoNKk167VT1bwaD5eYocfDEPsmuXzoWBGpqFKeKWVKoZaFgjnHYCtCU",
  "key19": "5wZ1d5eBTysD9RRZ23qk6LVuJWnNEARKWgGzsgATQgnqS2fedmWvh7bKdkn5dhbzNnXUqQWYWFb3D9vdByimzHkT",
  "key20": "3L1LoLtG2UWuY5XKz4nJbMkf4Xtsuhyutxae6eGSmjjm6W7GFAtzYavK1pDXBwnC2oQ7A2rP9sRFsoz5GaFVcpZ9",
  "key21": "4bjANF7fBWVHngBNgo2o1nEnh1SLVUjwReRehJaGpi5KxELFqf8qbiANaSvND2z5kD2tnmwwde3FVCFcsJy3VaDt",
  "key22": "4iiwmQNNj9c7LD89KHEErkUX7NjSPxPn2hvbukhGHCDE6PZQz1yScTgropgmZC4JxuBpzQnoomLaLaUQE2fw4CTf",
  "key23": "4L945ESMnBNWQmxTZdgt5PV1sqFUmvo6Ypht3YEWZLVsG5Vt7d1yNCMaopoKNKq5VasYJK32sJxTh13BKUzH7hYr",
  "key24": "2xPFFbX55464MXbV4ju8tNuDYWnsFERFyswAXMfbR6kyEhNAfP4uzamUN5xkPJpG67NZYFxQMrg4nvSMimdhSRRg",
  "key25": "4o7voGt1QmQuGpXPUcPreTjhnJ2SVgHWTi2LC47VMdw6FsuN7tPv2huHvp7qETiEXpKWbKywyubqn5RyicmWgWWT",
  "key26": "3XyJfM2EhwbX4TF51q24owJvzsN16XDXX1dntN1MgyDKa8hSyMTgP3Y2TH7bA16qT6NsjCSCZ7TCppBP8mK8WCqr",
  "key27": "5R4X9jYws2Bhvt61rGSYjrcUViiaB4TNTCuk8iYTfTXPYNb327ocQrifDbg7pJgBHXz6ZZ6a9dbUwdS6nGvYf7nE",
  "key28": "2A9Lc6htdKq2HoCXpzf3gMJmH3q6Nuy3YNz18E29g4RzcbtRqRMaXVDsxNRPXdN1cPuyoHvnYP7S9GpNCtJUx2Jn",
  "key29": "55eW68NTrUHZfJYjNzxiBwEgBgyxbakCBy3dLPQUHKHymPLDYb7cC9pdRLmdgnY8QTTbHAxjAFSQ2tmZKCyAey1G",
  "key30": "2R5FqbS2Ha48pRShueYA1y3u9SobYAW2N93ho733F7bQGDA1hRmJX99mPGuK23xjorWK72EfEmXbpqBFfhAq5jz",
  "key31": "464iV1u9uJFxyf1JE2b1ZBoWVzbPVvMj9Q2ZSt7y5i1CX9V7hSf96MzCakY7JFwX5SbFD4YDs2UcvTobUXL7H2QF",
  "key32": "5RSq6DwyiLTFirtAYQec32jxQ8CQds5ua5mnogxkvFAeU6UszPYAwtMd6b4tvczCMsbEk2pCPmwzLNskYs6qNK7f",
  "key33": "44MoQjsYHH58PkeNGJWAjETdeECv4HXPjytyY4naf3wCWNS1j6WDSRLcj2gdPHmM4xjRiJhBmpiUnHm2QTnWT9MM",
  "key34": "8kQVQZ5wADfw7GS2hhwvMnF8isx7DsBjMdQdUgJ4qd9ExdByBPDo7WsynDYFGRi9XsqUjmCyTDMkP8ShWFsuDHr"
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

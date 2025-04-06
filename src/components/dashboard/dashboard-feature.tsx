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
    "5SCBGv8TNVtbgXwejDweBYeXHr2oB3BcYdHZA31urZTjuxY3e89uEySReEhNyBE1auUvKUZFCMDnSkA2NTeBFDn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fxkekStRsYjyGBef9qUu7QkGwNcmFLRbHc6WyPAn4aBeaKerDZWGNbmsMtjsVeCbVzBQzQSouAHmHL8V1215df1",
  "key1": "3UQf3dEsx6wsik6Li4Nx4Ex2pzEyWFr8vyMnkPLfFdJ9748oJTfBCoD1NUq9HTBWJomDjb8gQgXztGe6xBNno35y",
  "key2": "5yX5XjHgWdnRKSNXieBoW6MMFT4TLzRDZWPdqcUzVipZmD87UFgBsDM9tPf61VDQkESDaAdYpsWJDLjdknxedjaS",
  "key3": "5fXHuTHXQsNTFwm8fgsPFkCiMcVASzJY7XC4BB871bpfkF8QhWQoApycYYCBdSRjydre3onBbVsqW3Nuy2kj1YNx",
  "key4": "4q5guXPScQFPUGHtG6qurnwm4Y12FvAsdh9TNoxwuAY63T2UmnNFRFECLFzRp8R5YpswCqAY9xf477pP5pDCLxsB",
  "key5": "3iqEzCB5tLtjkVVJRq9mykRzFcyxcHUQQrURZR5CZGcUnX7VCa2Qx1SCwJkZ6jdU8pXb9RQ8Gyabui5qi5vu6ZQ2",
  "key6": "3JcnvCj5nGfKwykfQFzXfWM84jcjLjeYTHpjprVoknKvaZG3y3L1rKpyze2g1WDfwLSmkMqzR5gXxgiZWAXv6kqA",
  "key7": "29zDs6J2L8PPjkWKP9toSyScJHV9C5BphvU2Cha5w9bnNuGyZVy4pW2cvVPBdZNLcvdgMPrE4gUjY5aym1cE3Ft3",
  "key8": "Ts6ud4CAyD8DMagtqjJHFLKHhqFxyH1kd1gUMeJdFzcPbXhTR4YZ8AbDFjjLCnsL3NNSVPhJ5NEURqMh5T4rqD5",
  "key9": "5X84t8fpRX3NxU5mCNHFU8kZVooSjGvK2hNU5JKMFSx1cSgcA53XjFEv2c2TMxcZzyEdBYy1XEDsY8mainzjWcKG",
  "key10": "55rMSsvAbnTkZayZTpHr8XBLJ2814rjLBvVaeJzaNnS4RBMnKzYUVEbVufXWAxmnhfB6S23pFNFYuNLFXnBUVXFR",
  "key11": "5dkFZnrcbK5FgiLnTW4np2pNh7saBSb882rQmVNGru2BdpcPrAZXJfVjSty2BszFsWgSsydaCGcw2ucxPyawaRHD",
  "key12": "2X7x1mNKT75BDJzGJ7K6Z8R1gdo6NCwwY8YvdeXCLwdcbncA4MGM6KbHcnHqrEADmMjdL1qPTNRejYMfMvuE5MVZ",
  "key13": "2G39e8fqEMYrPDFz942nkb7ZCKZAXdeUstmEX7U7VYom6sget9fyUt4rVFJZq4NXgcqRnq1DLYvFTXHbBAYsgGun",
  "key14": "58htux1w67EU7xhLuMpWvVwa4Bb5CCvpoawtkiNhtoUHkASwLg3p8SZVx7AYRJhjFLoL56SYCsgMqEnHkmJZW3wM",
  "key15": "3nVWSQBZZXEkNuZtDPP9HFRhyzaBPEcHwFZMP8G9BZgCyR1MzSs8JA1PFruRjNRXhQ1yE4Cqsods2meboTr8ZKLQ",
  "key16": "ndZMT88hiKx5sMY8DzVGwzVr79Tn6utVVCt5adVK47kERejn1R8F2vaYRqvT6bir6XBhQdwfEjLeY4CTw7EgEkc",
  "key17": "2FyP54tv3ZhK8WUqPnSScsgWG52dt1xwv6FSbTnymsddimacEwr6ZGez2Z7oBeGN4x8fRyJisZRrJCFFTf7duA1Q",
  "key18": "4QosMAtedRJ1vsoWBrGbqMMaXDAmtKqALq8UZs8zkWEvi4fDLdtVggGtkmvjCBi9vg7HhWuJmieADJXhPst1mt6p",
  "key19": "3rQjqLR921xGcFk4diU8mmRTZEZUB54eAStw3vVt2LHJ3Zs1CEJZmtiXCAotiP1ZE8uLk969xz43QSbm7psRRBXP",
  "key20": "3vc8H47pvnS6CaEMpFnSi62xrjNUVRTjoUjhmvPoReQtMAkkRBTMStsRn5C9Ji7FES1ALmsu3PyEASyjeTb1sfj7",
  "key21": "BrxB4De33ASSzU1gyNnn51wKCTiQa4MhWB2x2YfrFzd4pqBkd3WSvcc5uSbZiZKw6tJrnSunosJZ6xJahTPxfD5",
  "key22": "2ptTPRxU33cQhjnqfRbBqxJdNp9dmBiyij9Vw2qDrV6Fgv6tWLCzrc5Kqk5zsfeNB7VdiEBBn9t27zpDRmB3k6Dr",
  "key23": "J9aYy5sWUhaWsuMYZWc7wq4F3T29dNtFP6kj6xBmYZ7Vy8xg6pMzU5WCuuYa9EuMAPn48cxHu95efsZN6wHEvuM",
  "key24": "2JEKyJonEqi62XRsN33uuwXuCinNJz574fbPQqeyEa5RxwGrakp3p3bKrpSfqi4tpiG6e7ZRuuTHcXRJcWLVQP1i",
  "key25": "JNsggHK6rmywK1J9rQh9RT3GghMWaWNUBZaNTvbinRgMryRw2k2TAXfcAr3tUgHSrrTSRpWnzH9hu8kQG7SKPDS",
  "key26": "5gXd3uvLw2BvVo7SmHbHmC6wBSw45mfJZrnbyu8QpGCpbBnsnp4ZK9rnM5r8K3nef34veQ7AsStGJj7WhHTPUnMQ",
  "key27": "5KD7fsxA12PLrRsbLimai3XZqi7kjRBVZY9PNrufJ8z7jiFjtQtEbMN7AWQyPnRk2dgRr24DniNWeziUARVhaYZn",
  "key28": "5EuzpQgeNGB8KNAi8XwurfYJpz7cetSVjL6Ckki3fmcJ9anf1jE8RpJaDcr64eKHBpAPKCJeFTnv7DYeBjXSCBLD",
  "key29": "3iogjCoMy7MHB8JVgj9YkVe9Q37GRz7j6JctMrV9XXmEiPfHE8XTEMQAGVtoTqgpA2rhFJivKpBZPJfgVjzRMgJX",
  "key30": "2YNpqcoyf4kb7YNWxSQ6gcaTeh4M2q34EPh13QnUnzmNP4ojydM7b85xtyGXKH8WYSzLKGb1o4GAGJ6txtLVBEkB",
  "key31": "67TKije4e1aQqmHKWyEH7bMskZci9FXdud2dCSRwuJFnknZwxyrURxr3rBztqR65E8gn9QmfgwUrqtKdt2TMRkLh",
  "key32": "2Yah5kq7q8WCw9gVhoHrSyVueTMURkZjPHUzDzSdH2u3ZK2yJZV57ViF61WDVFfbRyAiPDdx9EQ5ik7PKQbxnrsi"
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

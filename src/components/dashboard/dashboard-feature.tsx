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
    "466AJY7R6aksLGvf7XBy1XrVSHStZ23EB676LovzgEvembAh2poWfBYfR5vS8C5xCBwAvHF9QzduXUnKetiVEEWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7etxER2PcYD6YNSPkMCtw4PwQZPt4q7s9ZPc6giHjsQUHbApCq1KspJcVtYpKpQ4h6BFnYPrprXKsDD5ZKdccb",
  "key1": "226sWqXbLFRLPgK34ZhVeP1mM6eSV2XXvtsDgvgnGBmtcK1BvnaLGquN6YLPCSRarAfaszuSAAs6eQqztQmcg1H3",
  "key2": "3BZjwNU82tMHRBN3C8sfFCuT54t1HdVCvZVgXfZRSjbE71QiuoU2dwvsf4Kim7kuR58qCSDgfnGrA7Hwf3tDHeYo",
  "key3": "4LLETrinXcB2Veaqtxa7dR82mxTgGPg3QgtXzvGprYQ2Fau1umtyAxenRWs8XLfBpdfWcAVHvSnVRgmfS64c3hBi",
  "key4": "3WyFoPn6vdCdbiYSzKdT4YGAq4xLBF3asLARPkFvBm8rezy4hjXdrqJmKfJ3YakvHG4Gqkp6yPyAJTDaBWXxkD2h",
  "key5": "42FSgSAG85Dx9xr56DSNQ8cGptS5pJgVeyaH4rB5Yog2JsbzxAmXZDwLsfHKn3fvXjPWAURZXxoJKerRmMcYFYuu",
  "key6": "2gTntRraHXVmaeWXVghjKq5wgrRYNrmNsXFRfyEYu69a9uN8Z8tpvq1FdnrfJp6n3YE9wgB3cUjRr9hydxKaTsVh",
  "key7": "4tTbdK48S2pWAzQ4Bx5frJB6S1Ska6akkRMSPqjsvvJ34gUdUBSGK7M9UfdmaHaekDbdh3JPSwRb6fKnM6tQ2q41",
  "key8": "s5H8WdwdMAacdrXtZRw7QBuJguE15cBwv9q5LnWGNn2gyshRiLPpM1cCHLSxWwGGx4j8Tm1QnXH2hFMrffYFXtF",
  "key9": "2roCeEDVxcqLiw2GwPAYGEuvZ1g3QFJDLLkHXFY18k3cvpCVZzAKgn2aRsjQkMdP8g2vcAPtWz89uD2jrhuK55o5",
  "key10": "5PBV2GC3DQoJpvFgo2FwwDxbAS3otBMPUEoRbRZR9741syzoSwMiPhqyyfW8h7xZhDb1EEdiFF52XFuZJRpUok7R",
  "key11": "5CZVstyEwzVZwAHAXkDW5fEH1FCX3dhTECsPeX1J82jdQ2rpHxd5QSfyxj4csWQmkht8A8csydmhTC83qripGUCF",
  "key12": "2amZ1qPWUsQxhFNUfLwG8nEGp4uYP7BMrcBYPsvMAf5wPPW4Ky1K65bPYK1zRCQzQrp5Q3eKdnRBFNDMEwisj2dM",
  "key13": "4nYmiCs3V4LBNMXkz46Jaa4F8PgjSHrhB3EFatpfMq3DimVbN2tacG6aL9M8jHunhFfweLSfoPYDdsizrw34LD42",
  "key14": "2jMyYHMM5DKSnuPXJdBBjeoScwkHRAxmemXgMxkTcCy5z97xVSHekXaUPns16GjqMq2HkbVW65yuhtV3gQZPG22q",
  "key15": "58GnMPngH5DkUqnWMifFEvMUEwv5hGANCf3Wb9hYqtqSCNoPN64C31WWf5tjNiVMZZBbdWDxjCkU3a95ucq9ynSs",
  "key16": "2JnoLHV819v5jVKMky66Fcx55grHFv358bJrqsuPQBLNjemjLATMhLbSop4SNpMP9iXPRZed14DuQ5VtyWFTQ74u",
  "key17": "2Jv8ZMdx2pkMEVfeU3XKDz78rh5Z3ngsTphUW5uV1wXCQhhMh74t5LK37ABgMZubxF2gYpFBHEmPRV1WDLKbBGNz",
  "key18": "2TpFba7AuGWdRfCPeK9p5Vt7K6dZu1nWygNXvHMopsHbqpFEberEqJKYBiacxB9nZbtMaPdSgoQ4yg9uGgRUeuoe",
  "key19": "4DXsUXigcMVDvGaDa682SJNAneSGuMkUMbyyNNts2qvYFh9BFAAKfbuswwTYFLKG4ER4BKPjE7ZZk7NbZGk9F13Z",
  "key20": "5VjBRqB37wjgCR83qdKpNN29rfQas7raKbw85v5FcrTkEzZZkLwQaiKbL5zuEJGv14YWTwmBjgGxA5pF6VSk95Zu",
  "key21": "4jsrc8D37dgeoAsH7mGUADiiW5fofpFSVKVsZ8T6okFC6QafFAFTjyGNkHTSk51JwHo1fFpp9RbcFgZw487yqpAe",
  "key22": "3E5awfjRJR74hauk1VwkqnhyC2pgXBjGbs9GSMDCm6ZLqaqputFE3aUpKvRnddy5HHjXPa1xniKp34F7NFsYstVC",
  "key23": "3R5mR3Wvt3Frvthkqrw3oH57CCj5iAzeRprrdAnbPcbJX48QWKeuNY4R5Jo6MqL26bDWPJSGjXWGavVNXqUHn5YV",
  "key24": "4v72UBFi3N4E9cJWN1figjPSSY4ZKVeVjvGJVtNmGvbV8sfefC9zT2Vhd48VxgJFF9dencFjYEbtwmpxGhMNsYVW",
  "key25": "GjkuV37QZ2vuhMndA19yNpBoLV8CAyVtXAD6r3E8ELaGarXCsmjCh1dSUxciVX8eZ3yCFcEWsoLZCviwEbYjtSt",
  "key26": "mQsjctiS8ZcgnwtpPD2shjj7sNAWSzPz6xF2xayTEY9BDPG2uTunTwALQaR9e6x2iCG3pAzpY7TfvsXHPTqqAch",
  "key27": "4BcFpw6ZMeVnZWgAvngu3HxdcFWxnwTXt2t7FKKr7268SRa4UGA8VNiv4fcjmBu4VgEeRLPRFzrmQt6JCDHqTdav",
  "key28": "4wcKorbagYQ3uLRYeNGJ2NQMKdWCDUGkScXzCo7P2kj2bp5RLukj3hBHph5ZfBkmHmUBffxamML3Pd2i84XxdZos",
  "key29": "2uagMheKEa8fyVeX8ZCGAVyVarfoKT94gfMo4CSrXrN3DWiTFSzDcF8BBTwfeMAjEjUCaU3gD29bWVonEbdwUWqF",
  "key30": "3DqeAS4NiQUfmEoMfnYxNNFyyJch11GTv19TPsxtaRoD338r7oUwG8PpDRMPxgCCw9XCP5j9LZ1vZfNQRagjvpkW",
  "key31": "3hAaJe22BFAYscsvBxKV1o8NBCGDLg9wcr5aAtH8sSsgRTdagD7HLcsUEq8vtM1vY3BnU9NfAX6uim5oNMgFaLZE",
  "key32": "2cftPgeThMo5uc7FyWewngBjqe6n5U5qHbp5GvRQeKUvi9TwoWiaq2WfgBVoEBBAHhKuXmgQAimh8ZhEeLfUDfnX",
  "key33": "5quckCgnroMuTokyxypC3xuCKomTrJzFwJww1NBdpmsXLrGjtiKgJfCakpzPmZJwKTbRfZ7XDbnjyKgwn1FDAKg2"
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

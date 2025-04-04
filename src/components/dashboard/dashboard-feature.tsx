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
    "2pofXEjCX8gEGucNynyqsVE9c94KM8SK81aVwc6fUuh57Zbv6CS2rBUfKF8sR2MdxRbJHbkmLiJYxBgHpDK6udzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AV8Roz3eD8rdhn66BJSMBwm6umUGTHZJ1929VoS1QbPJcfbFcyRFFFgVaiokKsWHckAKkoLZciS5zfP8UbsBTK2",
  "key1": "QwuwzstqkDkdxM64bSGExG2pQtBLAzfaF2PxG9JwuXNtUDHhiufcT8yGAAULGA6HmrRYujw9ZVqXUQytL5E1A7S",
  "key2": "5RXHJEhELo3mQ6kP883rCLVMB7cXGRabdhzoqyuaSGGdh68EL4nUKxEimjaVazBfbXxMapiGW4LG7PTAcmg41v9p",
  "key3": "54hAdqjeycpjC9mqrrqgiqEV5DSpTjwnoWVsxZRpQMfQXQ7Vo7XSZuHcofCcYzxxXR5e3PppsxTbSuvGBY5gxsh7",
  "key4": "63HoBDFnQrg3Hg8JdRDuKsvaVWX6tBc7J9N5mtj9kYLDB9KfLYYNswQC6guWam2g5N7RWoKE1WbGrR7m1rYH2jAN",
  "key5": "4ryZGNC1Q8zzBQoM4r5PiCE6gbeQmgKi2NaeEhFC7jVJFTQGKdKXo9J3a1gziVtXfddWX9ZZhANqpcA7oPawQXtB",
  "key6": "2iWPi6gdSUCCNKLnvyDRBAnhrP4oZk7uyEKaeyW8jkjaCFbhSZCKQ3APkdAgyX6qWxxpG8UQJxsvqnE3jFe8nysa",
  "key7": "DirF9EVvhpoqN1iV2VXJNaV16Xwy2bHnEpZTN1dodkK5tfbrw2cJAjNKteW8UhBfzy8ZhovXp87fWMuUTBKEz7A",
  "key8": "4zrKgnzkfeZRJUH2v12UBPVydUevQDdYTsPtXfebeYBHv6rcvWijLYRrWMk8P2HWJpyS8gV51cecT6WqcJztfwm1",
  "key9": "59sSgx253bKYYVg5Qrco5dhrC69jLk58usNp4dmZxUgkPMrExrsUUZe3jqoHbLA3uZP3UBkCgjBMkNteqWHR1ayx",
  "key10": "4FY4Pp2oLoHjUmQg1WB9MXhZqEGWs7zEe44NLLDbSY3ir8CX7kHxKts9mbr2KVatzqkJidqPU32U55Pf7yeow9Eh",
  "key11": "2E3rAxLGTMeu6BxuoPzrZRWCEg6CzcUcaXAkP6cr1ZjmWyMUbDoRVos56tC2rq94xXtY8Pgx4Wf9gT31osk8A9r5",
  "key12": "3x1K88mKG8P7kPxpZ6hweSiFSahZUc6b64nwcVkvaTLCavZMTDAm3RGebBMux83LkcxnSsVdDcj8Xf3fhCSiCo2p",
  "key13": "65szM5s3jw21WthTSYSivnFKCehUBzhT5bM1fifBzP2bxU6G433G9Rd1F8UKKzTKVChwvkp7gpfH3DkASFaBNNzF",
  "key14": "3nSukotBFRzzuEZ913DGbsdNn9nN9x8cXXS6JJPFaTTnjnHBv9h1oY5rRbJ4i7hdnbCN6RvU1x7CsmH7mJcovNfK",
  "key15": "2y9PEFPwK64y1J4GobvqFZKdR4GcfCxmvcr6yTy48gejt1ypG588EAVToBbStj5KG51zr3LKnfDE57xYngnFWDsj",
  "key16": "zQnFLshgM8VSEJvNVi9tveMkWSvvUq39xWmqABQ9sijxGQbKRzn888vaKWk3FeKgz4bE7RdK32JP6KaxdJBrnH3",
  "key17": "jQk582XS92YWBc2vQwSrSCgDPNjKQEtcp4afpkb8nFMEPZaBRi9UnUcuRKvD3HJvsyUx9X2vLxeQsPahdVuN6q7",
  "key18": "89WwcrBY1Gf8QKwd2xrzS3HSVcnQ244VfKseeyq9q2S6ehjVA7LvFAVmgRh51NF9wKLTKYs1LUDThDF6ZpFjte9",
  "key19": "4aYvmzLEiJfwXv25hNuhZExeYjkRmW3GWq7hZZ8t2odktL687ByrdjS7bdsS4EZgKP5TeEdU2dRXbwoc9qS52aWn",
  "key20": "xoGQhicJFhVq34P8qrpeH8HqiBf2ToihEkMHFC3JF5ZgnXKpHfsDjfsB7u3izCoFFibgX1ZsDmKceNodzswMHEj",
  "key21": "2ECtGkRtuFH8z15ThfE8VZUxpf91TbnAmoZrpRsSy1hTju8drRqcurKb8basqc6m5npUQ93virzWuHFbbJF2ovFy",
  "key22": "4cuP1nPXNRvkermepwokGEY6anWRJ7cewHzYY4idqxJDjpCnwP3RtZSL9jmn9bNinSzD5LvEBVvdWMyVuwVdL3j9",
  "key23": "5S7dsiMqAWg1X5qDt8aD5Y4KdYmbueizDV68XfHoHjmZE7d1X92kjJkM494kH3aM2KsEKEufWkGCskJ6oeht3qB4",
  "key24": "3nR9uzx2QUB85rGrJSM2NWiCgKbfJ4efqfUPj5PpxcgcNKjNav1hiX8HLJLnF9U4G5FeKK45s9bEGEhdP7QZPe5H",
  "key25": "5YxocGpSKLfK7H9ARcw6eh2pot9XVLHSDEQ1iNgSon4Aa7aABqqfFw3rEd6tDTyuPMJuZcH4GxDqTYZxQDhdRXCJ",
  "key26": "5vBUNaUXyjL8z6rU4R93NCcrrU4x8hU4LodX2U1iA47TL3PjxqVvnaTnCgJhCAcRgYBxwghshQqNiA8ijwtGT9Hn",
  "key27": "58EJWvSDJnYEtmT4fcrpntVpw7bHeoTTqVn5eWpgjeGzSjUHsB7aAhsMsnZSnSyN15VviAtxYCxvsbwpob3fyJto",
  "key28": "3eCcJNJGi5zyuaTnDUwvRzJywHULzUourZWD6fT5V4EW1mXzkNQYyg92FePzTzMV5hz5RAnrrb7roHgXAHha5b1E",
  "key29": "SEDki2JBzmNUD5hx3CNZj68Jt6KLtUEeT9wUQTwQVLavbpEbE81M4tRJhj8Q7qEtkhU7YLF9wkdcWxWYX6Y1iFd",
  "key30": "2wErM3ySgKq7odTJa1UT3Xajmceo3EjLFo13D4xkXuoC6z9ahBmCuvHFEP46WXodDcwHUtbRMtPjqNG17Afkwtsn",
  "key31": "rdeWKK97RHpB8dWDymW81VWPRxkw4qf2mWJVoUkJmkUv8y6dF29DKXdvBVUE5n4NvZ2JuNFvLxWrmeVixt11KDV",
  "key32": "5aWeiBpEnQbLKUyjzfz74PKdLm4sPjXxXvZ2cBKd79P96oSvRB2iQ84PQ5Yab8pnSakSWBPMAjJuULCC6Yh1rwzW",
  "key33": "3ttsYBgSnjUUa3gCeN4LhDGt4qNEJDqD6bdgL6ePRUb3mwGV5JPooJKRjpdALCRoFH2nqfnQHm1RXvn5UnzfEN5F"
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

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
    "3C1r9PBwqLjMGFhbXfF1PU4Hn37KtxSk1mAvaBdawRvkoY8u5RncdRwNJDejxYbPCnTQKRFGr6tmYDkndGfm5aBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y14df8ANqDjZkuxYzuxo6mk3aHXibZgLmosa9sdRLvpMKUVaU1WFc2YYKMuQrgedw6PWodvH1ypqgUC1ksNjedF",
  "key1": "WLkFDadEJzQ9YoJB1wd4NeikyrMgYuVNVYfBEqGqwDBzu7gPuTnuG1Q8B98RFvGJf4bFs2HqnUhHNe38HC3mBGp",
  "key2": "2rw16s126RJssyEJvzBkb5cEcaevBNQmwKtrgJHbQujjJ47MG3gE7yNmSxJ448uhvF4Gy2iSzniwQqriqi2KJLxG",
  "key3": "354419WYPdv2kxNWSJRj5whvQhQ3hqzkJjkXNw2FCdmzNosZpoKtqjHKpA69eJR2Nd652HjRzjcWM6NgctGL1WSh",
  "key4": "d5SEqwninprwcF1hsidfCxcHFupWFxB4xNYjLvKtuxka11zs4avCBQWzRCYBRj8KcBuc5nWWjf6DMP3duQNeykz",
  "key5": "4K8iXoWPjBrjGSVE7j3gJTyLPZQFD1VarsQ4b1WrjzjHHPm2Puaeg8wer52D3zMEh7Ndq1PBCEUbeRjQUUDmNxBJ",
  "key6": "21Ja644StiJFNXosQsBEP4gzSu7iasrR8w4gQohGpPeHLka2wcAXRY9jagyQsvUbAXXbzs4XgbMYwk53u6Gz1ZMM",
  "key7": "27udrJFjbtocZS9hTq5jpjATJBw5oe8g3d3QJa8SGZvL4YYe4JkHA1naNxmT8Zii5vAeR31fERvVxbAgHHRUo5j1",
  "key8": "Z36uk4kd9C7iUaf8bWoFw3Yss9Majap8oTa2CDKBM4Jfzky7wrwqfKY6FQcKmcBegnYqkjVkaTF1fMgCjdgz97j",
  "key9": "2c3QHyDn6cxT8CtjYE2scRseqjT7bPw5Ks6v1JT9atqFtNhNfc23Mwo72u4nEy6FrV8btBRKDqL4humezHD7V4mw",
  "key10": "LQ8vSx8mkgR4AuRtAT8sAuPGzo7B4djU3fEb1PMBHV85a2SeUnkBSD1JLweepbGf3JHuFVNviS9R2XRcinh2YCS",
  "key11": "qZFQGREYQR8m8zH4mRA4kMir58rWHSy3uNVvFN6tt4ZwQp86rvbbm3zDUPD5WR4dL1zC6CvFvioyQPzozVnkZjY",
  "key12": "3QCNkbfR1qAbWTPx7cmFoc1Q3aiNqFuhVMaNsKzJLSvAAZugA2MZKZig6mJPVvwkwUXzJMAm5dQUu23JSnm914bJ",
  "key13": "2sWSC9CEhHWXM6TvKo5Lnp6BQr4FoxH1tNudyDeVTbJBPbejSTdtDYVNGpwdcnzA9VDsktBunRpnTJxiXV8ZqkDh",
  "key14": "7N3M84A5pgmRA3MxhBc4cRZ4oQZ9Xg29eCxxy6V6wa1ZUoGpRZ1u2mGiUuGwEVyYDxDhKbnFYZLJw6UjWnMjdy2",
  "key15": "4xkGgyfvwCmrsjXMzxTXNAVV9uuG62P65tFmuiS3zwNwP9nxoVGtQ3feRcePMenaH6iV8dMKKH5JUqsTA8RtH67d",
  "key16": "4sUMC1m4DuSN83iENKAeS5aCwkc3buyztZ4MmDKhGr8nvEXsYHBpBrtXPriejfSBLH7oYr2GMR9jftZRLCDMNsMq",
  "key17": "3h5GoS8yqEMvGoFFGCdFexugXhU3H284FLrMtmiwBQuCNKhk1hHfjkKcGGZpPJtvbWXFqGrnWeGRHFw7pqpQXVp3",
  "key18": "3o7Vch9ZkrzPqh77buuqeMrErAbKdBcYsjxBNYxBxrxUCeD2BJvb9bHHjVqQJBeTyxD5TfSL9hjza33jm7qoQFZv",
  "key19": "4vP1PCwQZyPsmpivdfD2TUAjq9RWpBqgBF4a9r1CUK3ByYZHVBwfM7jCMNxBYkaBgoWBR1mREfyzPh9cDsGfUcMB",
  "key20": "6U8ALF7n9GQYMj4a78hXQX2HevDNfGJSvDRkUW1kYMCD2UeSaD2UoeXr4SEgcZyL6hAvrax2DQidBgwxTh5aab6",
  "key21": "4pYGt8x3FjFCXxmzpgwHRofqmL6ukX1ymDpgzLf8u3q2SGnSKbS9CaRBp3juHMVP9YGruWEqEQmJogBdjE2RdTYV",
  "key22": "2XxWLEc6pwAzafzAXsXBECCtEyLs5xrcrcrhoqfGa1h7qstZWSLbuGmNa2Dmc6cAZqYkrGc2qezJmayR3Gw8QZh4",
  "key23": "5SoRvDQrNjbzJoXZWmF5SHB2hzdoephEARfZVjPLujD9WBaynWfJwVpitFNBZ9p5dtHPFj8C9DUZsFqUtLKRkyct",
  "key24": "5xsHJsPMNzNDNrD8UrCmW44kFuZH7nZukqWFb8nhs2yEwyc488baN4WKRpXQ1Et2AeDZv1L9i3rfmkrq2FZje49o",
  "key25": "5oBvGUNUFEkbp6FqqJtCWXUbZpfMiZvKfSTjxontpWBTGBV3LaFhqADHcVSBenUUKENUG4tbe3SfZpp4VdufC7YN",
  "key26": "4w3nsYAB9gS6TNvNktCmzFw9mb4K39YgRuesYyZouuAHURQWd3qzZoPZhGzc9TNoR5EV8FcoZoNgMrMWgbCCwh3K",
  "key27": "3j8QVKk5SXdtv4riEcPpECaDGtwN1gEuyhtmFmuAkZzDBtvWXvaHMjy3EGieKHjbEqXcQ81KQBy1y1BZ1CuR2sHN",
  "key28": "3aM3vXjWVR5vjVmioBuJgNTLuw8v9TKWZfFcrwxGaJTAQrhwGbfiLZHyLVpHaNKDscBU3wfYxVR8yCdyfSZN9HSj",
  "key29": "2xainF9Xi1RE96D74WnohCa17pxPpaGeTwzFEbMs28s6Wuy7SuBYt2MBSEvndJrg46csiuiSnPPzyjRy3xVMUhPB",
  "key30": "3mVZbGB7ghi8mT12VMtciZvzmtVkwq3Yq1e6XZngQC3bUCZgWqViPCNxWr87cFE2FkvVxFBYvSgwfi2Xw9nbZnXA",
  "key31": "25dmuGZuVPCqiHaaLUdhmBs2HbXc6dy7dDDGibzuCBsMSiE9BxfQHVRQZBRHij9YP45Dxtf689wKfop7DWV5XXyF",
  "key32": "47LFciRJ1cHWvF5ogyq6ZdRvTUbjzy8wjKx3rJCGPs6XaDBN74UFSWZw9zYnF2u4ULY5JWukRUnNMaTx8fKeCdfo",
  "key33": "2popoDyFLRAgnPJoTxiKqqgdU881o6eonJ1zDZKU6Zk4LjCbPRAQtMUJ6GCSc1a8ShaBwDz1iuJVqMdBco1TUrhN",
  "key34": "5UrCemxS2Zxu98HLkrAKu1iJ1r9Zm6m8ugTAsgzujpZF8NFZ6GF2WvaQxjY9kjfRKUqsG5y4HW194UKpLf7KprG4",
  "key35": "2LPAVtdpxezMhHJxC4wpxMvCB3YUziVcgXLYFYLuTe8iVmDoTk74YvM86bjXsSGRv2QGcHsYrmrV6xabMNUugido",
  "key36": "2zRrF7g686oAkq1G25U1H5y157LTjLoU1dXgrzec912xuyC6qk2CyBmH4JUcW9NUPBB7TcAMGBZzm8BEREpBpMJZ",
  "key37": "xjU6RxqSh5Q8AAVw8LpVY3uhanWvyp46Sj8MxWFq2FJora7ia3o4TFx6871UbM6B4UNgnYjDnFRWuzGJVjCnT1A",
  "key38": "5xGpmmH88b6KgHgQyVFFrHK7d9Qqdj3D59xbfjXNDjdpXauMT1RBJMZqgB9u7hqEjzbaPo1graFL8t51RoWWVVb4",
  "key39": "51Wsv38WvWYH8XugQfxtV6YLfZRBeV2WnGdN931xT3PrQHYgwdhpmjnqMysKhTMGoH9UMssTfo82R7bbA79HenVL",
  "key40": "3rykxH2YTrDdqoZKTdADDYhnjyMCsHkPsezaNSqBkHVFDvXpiqGghE3LPjUyHRBbcsJgjtKcGqS5fdyU7HPKXZNp",
  "key41": "5aETXHwiJpB7s4XRfD992fr9weDrDefnbTRC6wgbN5K4aBP4iZWTHEMvidMAQj4UUBL558gHPHH3Bk33LeyznFmJ",
  "key42": "3EAG9sP8NhQaWz5unkKBcMKNnYgVPztVG16AuXedDdozTD3mwFoCHkPHhGAmF8o5yLTJNf6heM9XFuraHPvZnSFz",
  "key43": "3u8rrSdFhcmRN6KP6Ln8PheBd8LQYkgt66oNAGgeU4bF23GbSYxHTxSC98ad8F8wdVACPXd2GtdV8Z8GdG9FdkR",
  "key44": "5WTnQLVD8QFSZof8mDCotPKgiG3oTBqCXLCpupHhq6T487yU9PXAJH7CgRiX6ydRiGMYPhe2Xde6otWhQwPZTFdG",
  "key45": "3mPD6PnDf6gC3NBgMKsvDuguZtnGevhFhGhj32EhrwxvnYm2Td2m5cz9yiTeLtYaMhugkLu2vU1NBxsXbKsxfiC8",
  "key46": "4J1qbDVDQQQf3W8R7YPzLfg2GAdXNK3MJyCpii7rm5JMtx6ULCojxAFYHNknUdWShhQo2TaBKYkTHes2urCt38Jc"
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

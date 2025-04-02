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
    "2MedRhS5NFzexHj5L79hnGJnxBZadcnJGC3MWDKrqpDxPW3S8vFnaTPGfaPLSxbWALLakaBk5SrJ3M6rTphYgVss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjB5qkjkbDoKA57zvByRZC1MTjTT2Lm5dLdWo9GkbCtk1miXRLUjXZBbifaCVVP9A5HdumsbeRDPc4tcaKixzoW",
  "key1": "4c6REGqYaZHeqctggGLKS2qLpErPjU1UYZ5D24DiCJhgydAZJiprDb4KwccXpAu6GttgvdKDajscCyNzzQU3xwTK",
  "key2": "3PWBMz13cVMFMaXK7hqoUUMmg1ikbfizUu5S4NAxi5mdmrP768u8CLZcT6kHXggGNrKtbXwotjQBQhCW2FJx8c6N",
  "key3": "2DKi97ezy9uBCRrQvo7Z8NTQZjsc9iJuKfH89BwF8u6CMZj547Yacty1TDF7PT9AaUrSE9RuXSaKfLPv4mQ73sna",
  "key4": "21BR9uPt9aWJ8FNVsvm3eGHd5KjXUvaP11kQYXw95H9W9mHkvrTAVpyZHphB7FHQc2kYJ5RBnxFSnQ2dLNqu4Fct",
  "key5": "49y2255TqmgwWVTpuzAQHwSN4nz2RF7dvrojQWTyEPhVB3bNB5mQ3bfgiZh8jnXTmtEarCF7iJjXJYmDXi7UPp6P",
  "key6": "NYYFQfqbTi87wp5Ff1DicZTF96aR4sj8vde3v92qeGzG7JMMwcaw7qMbXk6Cff6PHs9XiRteDNnXvpEvYg3Gjfa",
  "key7": "35Xh6nxhTChcciAVZPkxfhh2uUneaahgEmDTehDP819BSXjndCw4DwaNv68iVAkQsokvWyZELtFxS95o46pgYgPp",
  "key8": "2W68vQFLFN7pB4hZ9tXwbAKGmLAcW5Sh3LwwWtzD6MfwcWwvvkbU5kgCL8Ph2FNTBpRTgtVcL2iPJYXHEky53i59",
  "key9": "5H7R6mdA35RvC2MP5umpG2Mkb8Mtx6beYDKkgNuDSGamBF4MFLHc3PfjpDJzfUjzhTkVa9XKxYdEL85SBNNsXPWP",
  "key10": "3eHSPe3jB6t5HVATTPV2Kp1SNcSZjiRsgtmUswSwyFRbNaoi8G7TBxxBjCYtGKW3TJRqjQECiz3QpzXDMUSdf3Gm",
  "key11": "4Pb5wek5t71t7HgBkovTPcqLVHHBuwzdnCX8qpfWrPpGvu7McHqPDtjSbqpMjk1t2DwkdAsn9uPP9mGr9k2PrgZZ",
  "key12": "62Jm8k2CWJcU5SXJngtRJCPkk98D3ypNLKsaVsGtvhdTUrzLCEsbyotiUEmx2es2Xh7jW5CqUjdWiCK7Qod4dbtf",
  "key13": "5i2dkCdrQBZevw9B9Tbq8BMcCy8mrgEbhrFHjeseaFCH38KVzkeMiZGPXn7w8B7GVFYxJ8C8uufcNwMBKvVamPVV",
  "key14": "35on4nci3VUKnp1hR42HkpfFEZBaL9qREjyaFGCXvfNS3ZxFmPk2XYKrYirt2FtgQdoAjeoNmJyaqxHeSEYhzGV2",
  "key15": "22A78xopuap42S7rKnpXCFbSiB3eDx7428cPaDkjgPM9whpFbZxq1e67DsZGSBvDT5Rxdh2oXtCznFd2prBnRRG7",
  "key16": "2UgY3w6PmhUeSyjN5WpRw6nqFHkowgg6VrG3TZG4nqXC4omYNdkk1eMugb5vFzMj8Y7yro5cCc9PTF62a2sepWwA",
  "key17": "2HfwcMQfp3mPRpvP3AcN1csdyg5BfXTVmt4Z1wgHnGdKjrGiMVvYadmgyd6Dki22g8SxeP1SXqURBYYTSxL1LJv7",
  "key18": "SUiK2AgDsJpx1qNhyu5gCTLuhnQff2BjE74BpXKV84p4tbvKesWoFCeK57y3PKkHX9WQPMPKpWzZ1AJr9g8GfxH",
  "key19": "5cR2QkJEUb77b42i2f4pmWJbMU1v4iN2tbXCkAebfTW92Cx3JHCrggDVtwJKvogGb5VC4WcTFjg3cxLAewa1Cq3u",
  "key20": "3uKL8obRdr9vF4tAsxqi8jAofKTDhcmMU2aZHoBYUnY1JMH1kgE2CKKDFGKQ3FuTxikAG3gTyXgHfBNATsoudUCn",
  "key21": "2i9edsziL3PSbHB3E4xwWTAgWSHisfsuco8h54bcXHUqdhSLDZ4CbE5iMjkayq6GMDkjvE5CjCDgjH4QTRGP3Fu9",
  "key22": "67o7CiWmyfcX4Bhe3HVXwGUCPAyeMh5e8bSVVNUS1zdWuRANebwwBb88zMVUaBgTp6XEF3MdacgDXKJgXM1vXLbU",
  "key23": "eJChwJic9SJc8KqUA5z4n8ENDifn6eg8ugiDzE77ViNNo5H1KEABrqLoTz4M2XrnGedHZ6Z2MbywPjeRYQCKaeC",
  "key24": "3NLYxijpoSc1HtPcSEc3kfh3Px8unEkSpMwzACCaQsEirbsxt32dNKFeTauwEDALHUDsXixosaWta9kPmswo89tZ",
  "key25": "5SMVofGxXamWZcFGLwHZ7UP5dVqt83kJ2nrHeTokZ2AXBmgrcXcAj6tBZCJvAaatiFBK8w9fbhiNtA7sYZRKTGgb",
  "key26": "5BYAKG1sDLyek9FDWpKjavnekXw1WkpJnK1nVWPuN7mVcDAvKPiBJNqR1sgMBf72sMfbx7a5rUTod8v1USYKHJqy",
  "key27": "2cDT1LH5VgEf5mANwA67sHndByvL39pmsdHztD44JXM4cRKGkNRAJqAdshZ9vw9GVimSdPUXUHHf2FF5TQU7de6M",
  "key28": "2NPLccp36CGm7qYuNMT8CGTadxmuBNYh32pvxtbmrdskKVFvCrapn8mwTLCD7BBLr8rM5vsDrgahvNdZmFqqxBpu",
  "key29": "cXvhUEZsCc99zoGgN4sN6SX2bdEq28rPHxShXNxG2SZ3br7wviqwdhx8ATL8g3kiNmbgHuzj3ogVG8a7rMQGgBz",
  "key30": "2H9gSeBqBBrENDgrTYUbUKiSyvRMM521pG8k5eUXtd1qQFwCS5vKopRVVSVMrGMcnBR8oYSkWcrJvvH7oxTRrhkY",
  "key31": "5H1X73wgexakvVDVj2Zrxg44GvMNYSwZpAFKd26WqcKAo7TK2LX2H2c7jCyNEKECCK8mUgvjHmwEu6P8KjV69xbP",
  "key32": "411ZCLyQqiAVeKtfh4xg7wCuK9i6g4KZDbxwM5tiQkiTVFDucqaBVrN7azEdR2Xu6xBE5WWSC1NbFQL3XzvkptXs",
  "key33": "2cFbXMNz8Dt2zv4hV2dszERsuMzKz6EUR1iosdwJD1M8REPqvJiSwPEru6bjrSudGz8wBWJiFL3iHcWqcLoBP9Ef",
  "key34": "3cvL9uHRqWM19yWWiZEKYgg6GTv2fnLJbZj4FACVeNv2R9BqmAtTWrdTK64C2QqCZ7KyDujzrymh6bRZBB1VhEhs",
  "key35": "4txpXCNQrNzbvHUStML9qq9pzAa7BPct2RTTSEm5HhUg5eg1Wa4D9WE5tXNQXT7MJybsjQMyAyEyb8odhjPsA3qE",
  "key36": "2QY1aBQu2oN4yqhmwNp4m5eCQUrYDCv9G1KxLGks6ZUE2dtxiLbVxsyjuqUVe1DTJQGbD8jFfzfupZTEXTkPAA7Q",
  "key37": "52X7puhuVxfH9m9KeuHerXuTDHSpxgtT4ddQE2xDxAocXHu92yRfd3Snv56FrCiPwP7oz1LkH8qgh3jYMAqWvWTK",
  "key38": "2DWa2d7V37PLEdgHrT6JRU2Wav65GXAzUeZCWFfoXBcESzaFT6f3LFGbK2G3LiU7kfaDmRpRfJWN3YVEZvBXrddH",
  "key39": "FqZV88XaA11wt14nqppbL4PSnhXD68Gy2hZAJxA6e6t5GHfWvSHsz26RcJKGrfTTnX28H9CYVGMN8H1tRPGJr3c",
  "key40": "mW8WVJCrVnSwPTB3nWZmmoaV14BpkKo8xBF4QmuLCNnZW3TZE3z1eaEip9hfxPYwhGa1YSFJRQCFKXMqQWt2Uqe",
  "key41": "2c8rAKZ2HGJpve7mqo7aPzAG4rb2Qbqz7kxzdB2kuVYNzpdNqAn8q5XqFfcNgfCDj1XyyoNdafU4yJfdM5ZuobzQ",
  "key42": "3zDpxvhMf2CTnsJzyo74AuHGoN18ERMyX3pyi9QmTydHUsaan8Esdk8RQ42sLnvtfT864SQB6EEjhPpbPRhtEayL",
  "key43": "5raQqjcmA7xLJNKWLAV9nPXL4zv9yWKVtxFug4nVGKXYbBpQMG6GhUDbaNTbAHQcBiEWCvdMm7pNu4FgGV6yFGU",
  "key44": "3xrM3jJtc7U3uyFA26XU4vZeJzGDA7C7oqQAtFSuiqFBR8MtWvdLfNyANTMeNxsLLbevHHz8voQF56PfHsz7ZyeM",
  "key45": "4ZXSUodSpfzKGasTjRkxzYTAb5UURtu7DHXsDevsaktMGfCmFZCkAdgS2uKSDQpWgfsymhtTCApc3HGFPE4UN8Vq"
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

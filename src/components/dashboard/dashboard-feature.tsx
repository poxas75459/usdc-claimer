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
    "3mCBdLdvjfT6o14HHCc5LeTuUzLTf7vgS4aonPeTJ9jeNYMHAfKChU9qVR4ymB7gVKLtzMRY16EPMd9yXYq6eSb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJJwcQvSDNLdaMMpXsd76nVUHvARE4wMjBCL49NS4DA4GaX7MYazLJ3XmaERi79NCBDkADuHtDbdsEJPLC3v2CP",
  "key1": "4JZ8KEFboMY5HohtYfSufHqdoMpEVyrn3jFtJMfHbVvJfaNz5Z1mEfVESH16uoKEN3NYFMbpcm1NbLRSpVxTjMr6",
  "key2": "4cjhKgXqTNZeBXJDDMEo6RLhD1fPEu5EuqGq9642CyMksyXMZcLRDmkfWS6rbYAMEEyTQTj6NLcCFhMFkiBrscpo",
  "key3": "2cndE6ZMqh5HbzEmcCvK3AsTodvsXBmVaLc5fkRNYSLisCTQB9iPJhxDBJCxwo1z9KzweDvPotDfYVbfqVWRdrSh",
  "key4": "3g5gPEvZTUovJJbAK2TADztDBis2AUe1CaotjAQ18zXKajLiVywerqhHoTEMPbS3BymzRtGuA4qVsvnnsstFzjqH",
  "key5": "5S4TiDXUCb9hhSYQ2dHVGN7RBM2j2j7FW743cFGDczZy5rai4vgsfJgM2WQBM3cwr7UcLLwDyccyAh5Bc95dWniX",
  "key6": "2198xuD9j4Zvn6UHPy1f8QNpW9bD4QCSU2y6pfTXckK99SyZPyZxCS1zm2TBmxuigkwozGDrbnVQqG3P3GjPEw9K",
  "key7": "59LgiTAoH9e2yNX4BucneP1nLtB4uBRrkUkadgSbwNYWvuubewWjy8GgiePfqZxQGwScbUBq8mX1jwZJamoFuv4Q",
  "key8": "4hQsZsjbKLgsB37X59U6Xiqev3b6zvkU7dUXfPrBUn8wjHuMBbRmFvE1SakmPGYvW2SgLRdiwbEGeybUnhW8TKkb",
  "key9": "4ideVooi7c32tw5xPGg1zssVad6QkK2K1GPLNkmnTLPzCtoMFxMp6bbMr671VCmhg7dT7PsXByvBsorXCneTfihy",
  "key10": "5edY71oCbuMMerg9rs2VvCCtAfJqa9KscMzCRRXCTctyHj2hPt3A2VtHoSqdA2RRkeRXeTw98YS3ghphjhGetgpK",
  "key11": "2i19hhnjfTN85fsqU19o3VqjN1zpVkqRniHjiQx1FdLNcrbNVkLsBj52XFRpeTwenEwY6ejLNcDtXBPQK7UZeeGW",
  "key12": "XYsLdL45Xz2DxT3nxw3qrQFff8TGQZJq9xMAiNgTs8fshYFK81CVKA4uHkSvgevN9ktgHYbRVKY498Dv3dWqT39",
  "key13": "24Pw9dj4tLwmbMUnCd3c6a8bz99pRhECjjfKq74WMr2t83DZuJbNcQ6o1UzjaBP3kcB2QiYDHqmii8Q6c7VjYy5Q",
  "key14": "4KeWLcdJ214eigiT2NG3uSrQ2SCs1AdM9wUnkygm95qm8K84mgnWCFBFXjES3k4aGSuX3KbAFfr3a5NweyX6mULT",
  "key15": "3hwcZtXe5kYGpP54zLqp6rHmrX2uRpmHZR7BzxTk5iQp9VLnMQtnUqRNgLBtiTF5vjdqecmVBA3npztmmJ3HN7rZ",
  "key16": "3W3ctN1tgxyi5jfX7a8A9WFFBpLQpQS29kR5rLSEqFrQieDKdgnTcd7BbwmjdovatRFmPBzfjm6UZWhthTQkR324",
  "key17": "47Tpq1j1vRLLUeixUpL7kyYX9BAB3NNaPM2hDkFyKsFVHW2YEz73f7wRQznLbnxx4QjHEVFuA3NdzXRhzkcKcngu",
  "key18": "5JxeuqU1SQoKhj2hyEa9N9JHh2T277PcMCeuwWTiAd4ytgcp2udjY93ciZYXPd5GxFcei27sMtbPSso5b94H8vqX",
  "key19": "E8XTJJRq7XHVoSWYwaiq6DrSELaUX9Lyg1ugZ6AZxjtRN17gxnLRerV4gT3GTJBrNmwFgewi1GeHYbQ96dfsu5X",
  "key20": "3ApWEgYBpHYAQ21XerjC9GnjFCyRLynJxPtFdRzXFYgsYUbJSkmbtSzYaYCFggYoYYgEbR7GC7Gh31HodMKJVDtq",
  "key21": "2XiAR93W2NPm4yB3DpGm9zmTR7rVDCHdUkmYeZa8eVQri9WEdpaEwDZMJH2Gkd8W6G2BzfSNnJYpX3bowPxsg1vM",
  "key22": "4GGDWJ8nLV3vrtjDp6EG8F3EqdPPpGZ7TPjCGQQUtQFqSx7pTS3kP9P2b1nvLei3b38ZxCeS2mfYpmh4hDZNYnfu",
  "key23": "5FMMFP2M33Yq6UTM7jkyHYrf2wRc8xEtzeueGFUg8WsPxA4fdrDrxUW4gKYBMNiwZ1Z54DkGR1ck7ezgWQ95Yf52",
  "key24": "3rABXvKVatfRi1xztgvrzWvgJ4Bwxhfp1934SAQbcaXDeNL3gZqFYr1k8mQQtsJVszfXHGWWiCG8262FdfXo2XX6",
  "key25": "59JDdzWTxfhN8owWJZr9V6rx9W2ssvPbiLJfpwuZ3p6B2zJxpu6JkaAY4PBA1Mmii23Fs7ufbA3m1F9qT6Gw9VSR",
  "key26": "2CXAyw6jyzAkccwhWK8sMs4zwqpzghZT53FcvY3ZDNR8NkUb39Ez85bNEtkARgj15QQfYnx4RYHnF4naLNEhRenG",
  "key27": "2niRrhhiLQByJsvLgV3kQwqtAEJbADWhkztTZyhE1FHvM9feg4Agpxa5RabKvU3WhP7C1usMfisrapAgP9skCmXi",
  "key28": "57PJMcBRMcXA5hEmaet91isGYQhUn5kd1EEyoaMN44kn5EZyhvpSeq3FpeAuH4W6Lw4TdhdQU79SLrNLPur1Ce9Y",
  "key29": "2Nc2xDmWPxnSNzYQBL88hzLQorXh26UBSVa8vJCWHL2ibRFw4KFzyv3C7K4zWhYF6RzAYteUKkJRxnawTBPXzSy",
  "key30": "4DE2436yX4ccd9R3H4KrSm9YNNRuGRNy5CdeWjtLLVjbdq8b6ciqgLKv1rC6kLhestiT1FxcgACdzq9KFQHpgyrC",
  "key31": "22zTSYpa2DZmRUpqHf4UzFc7YZrTDQVtDyaakMYPqaLb582bH5SraMbr6AjsimfagCbGgWouEbr5VzWCG4Ka9YEH",
  "key32": "2gGRP58uxnBotVnKLMtZBoQCfrg4KUECvU18voGNysSPFqHBPDnrBayiTUPWVnDdpKSjVgAkQJkmYakVqqZy1dQ3",
  "key33": "5e1D24ABUWnZyKDhPu3uzVB5t1gFMG7Zsn3WL9zPp5LsAJmbMxay3L6V9VnJdJTumyxShKLAd1j9DftGvrwuyFM3",
  "key34": "3puKtC7ReEb7GWWFz4huMXgLoN43gFitFxN6LrhQFyDHEmu5fuEkcciU7zhEeZi4BqU9rKWUmmMdWi73cDvqYLst",
  "key35": "4vUiEct1oESPNiStAMYAxUZc45go8drqTwZQ78AbyoYN91aW4pQFiuYTRag9zx9NHRRBFLKiNMAgoUs2pHK9eqYQ",
  "key36": "eGXQDMuqsFd6fyJwyJNQh6udyVfW4GGwGPyaEKvDurVeATDuDncS6x3Q3sJb76zGf78wGfov5fiykM14N21mTur",
  "key37": "2BYcbjuvtbVHq8htnbmHTYZoF99RzB1a6YUQzw8hfn2EFkYYXHaiyzrp4DVmS7dkafyJdX7R6MD3aJfup1VSGwuQ",
  "key38": "3DG6SDHZ6zAkD5tJnSzBtGhY3AfZsnwnX8dEwxUshW1zu5EuPGMPYcF2A6WGn5oHvV7BbuZTtuL8oZgxitFXApj8",
  "key39": "2etK6EaNX1iw9Y6p9rvj1V3hYx1P5B46ij8iLL9iikzW3EjaDVj5VARBZ1RrERLpnZrCcy28ph6c77DrvzLsoZa8",
  "key40": "rYUizpUrqcaB61vaBwJEPMEoyif7YqHewYXXpNzAE5ATK9zqTHtZhJTD7kL1YJGgpbmPtYZAfvryyocd2MsbJie",
  "key41": "21UxiiPKBczCV6RbQ986QnMKPuNprVMGZRUshL5vUtcsGsp9WNFYvYL6aBWetxvfy3HoQR2PebskTPHnvDAdrHbQ",
  "key42": "2BgQ4qpKJ1aM5QpLVbAZHMRFMFSyE4bz68csdMHjEDmT8Hk5UVJCBJJH1AULCtB5dof9gspz8FykKTmmSeqePRJj",
  "key43": "4qs7ukgqFg81JPNM6zAbd46WFN4rm1XJhdSqg3VNUbuAJUhWj4YZj9nnxwY7SAFXD2rRjcMjkmj5xhGhYe9SoMDV",
  "key44": "4RpzSU9EeZYAJDLWmucBCpLsjH5Mn4mo5DgKKkRvko2DuVAABXbQWSowyguGVvAG1eUSEa2mweH1LCK4P7JEZUYA",
  "key45": "3WSBbRs6BPvqCBysHi1jJGUhQET1CQUZSUVtpCY5zwfJQuAMGb4T3r2MhQTjk2PxywrS8ReG3wKaTbpF6cfVaz4T"
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

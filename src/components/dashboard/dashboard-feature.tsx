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
    "2zQsWWW8tg3gcRES7Xdfk3W7Y6YCijWpTqz88YLrQUtK1PXTXTVUqruR8tWrDnr1c3jhJ2M7BFB8yJScE2bYJUx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xSNmvfE5v3e1Wcapfs118p97qpooX5D92yqxDgH2RNLmMgjuN4BZweWu2GHgTeGynUikoA3UvfPWPQYNgUGD49X",
  "key1": "4wmzNQCXbkgmKuoDbthankP7qq9u1zQPF2d3ssg91SUBfF88V5nD1YmUrbon7bhT4LLvnGhNMPoNAoCLu2FSayCo",
  "key2": "NhTpytRH7V7L2WfKcmj9d59Cy3LsG7waaytdyhPj77pxqGyX2ZuthGFkNkRo8TgmzAfs8C4KgWTzktzGaup3X3h",
  "key3": "dVbc9Xgx5jyfNZbQQTYFqdm6dqf1aRQhZtmGgMmDLJW3ka9y82f6GyNfF9wupFm2zhLJCEPHQuou3Qzj2A2fUbu",
  "key4": "33vyBCCMsDuJcs6J1Ty4jEutGg1orVrnqcoq11EWTtUknbCYmezr4NrAm95NTLuDgBMfBfxNqvfNADZa6B9r4swi",
  "key5": "vnTVjE2w7K8MjmaEnphxE38Dz5jDM96V1F77tqupaVnz2toBgfndoNHbZkEbhUg2JW26W7kJQdQLQ4zjasnUFfQ",
  "key6": "4Pu9ssRjhRRzM953LFvLNQUVSJYMeBwBzg6g6KNHDpGWMB1CHAqkCqJGejq72XsdpHKrahhYBhDCVRSQKAxhx61Z",
  "key7": "4kkcn9Ant2gmZbTajHXt4VJQNPUHN8LVPUc8yPmb3Z3LuxcvugJ2hnJrAJWvVjk3597xCtrHdsMFEwf7ZTvkbhvs",
  "key8": "4tpdJA6cFpyYEBkkCHUnFqtQiSqSjp8oMZ14cZ3K3g6gK5DdRLyp6TnGY38PmG6MtBdqc3Di3RcAymEo9QLDoDvf",
  "key9": "2G8iHz46tS8PqZ8AjLdXatdCtg7ifYyhSNPoiSE58jkbZez1nCvcrYvx6H1D22ABAZTzZbxYF8CsNCAqkf3ihyo8",
  "key10": "5pjvdsXFDm6u24TGdmFzorMq5c9ez7VBm5heU8JptVUCxY3ggFci231jYnAb2mcN87APVri5cWbEuBjnhn3tKgWn",
  "key11": "32tPvB96cadSLn1jTs7XbvuhLoJhiZE7NDGBpP8kd437Sf553Jf8KehRysy7mox1ENrGwKDTt2b1ojh1NFMxobUF",
  "key12": "2v3FirKjBEUenbaw86qvMLCNG28LBVNjTo3ijcvDMBH4446n6JXuodp6YtGikJhD7HZiDEhTD1Q4JScDPzx9ScYD",
  "key13": "sNLU9RHXx2LEE2kt7MviJBM873NYmErixCcmXavPNYxYkZ9ZSCJYFX1Zpq6kF2h3UoQ3DG5fpsAFQtc8EzjqQ1N",
  "key14": "3RnXbd42Pj4Z86sYJxv4ibLvqRQbwXHNcAPm3vZTuCGN1hJS4vSDZwx2iPrN9YXg9UYZauhZpVQNWEgdgxqKinfS",
  "key15": "3jVWzDrDEhbSSJarfb4CzazoXFsG7NdmhhWKTRqQyMf18AHQkUsuAaedsnW6vJwxi8tgUn92ji62sysbGUVM1V2g",
  "key16": "c68jevVkFKLWjAi2PLCg5oJCeAcZshR1da71oGWihDaJC3wm2NYHrsdidYeMnLXjAqJQFdfwGXuBfHPRwKt4pfg",
  "key17": "48h5EqeF7tzrvNTcj3A2RJoR2SzXTo8ovwwztNSZ6diYNqNDcwUjsGmJXVMc5Lc1Bs3Hpe9YbV4DjwfMBK6HkJ9N",
  "key18": "3Czcrq13hGWdgQj4roJDPgfVy7FfPYs9a5RTGydF1AzVfEp2jdhcsK7HTfTDRembTcKY1Ne1m33xp7CVpjpyS7wj",
  "key19": "4JLprdN2ba6qQ1p4t1MRoXnnbbeW8Mg83zp2b3Bp1soR6WP4WkEUtxybCshvjmkxT4Uh9EjwUBa4H2Zxx9WqhdaR",
  "key20": "2RQtCphWiKBQHM7QAZzjF4E7JT1ZjXST496tSud8j8uC2iJrFiXL9bb56jXzx95NKPnZH3nXnFWmSCgvTZ2AQ4kN",
  "key21": "43yiha1Z4DdNkMqYCy4faHRdZ6eSJXNd3K5g6aEkvzhvWZCAapc3Ja9jsC84k5BrRiCV6EkyfegFPdppwHUwkPvh",
  "key22": "2VSxL22LZeQa8nDsavn8qECFtmtwVXYtBrcw1BcvLxThpsdrysuMtdcH4VbxrcCSHodZgSsjwPkqz1XZBq9TPoyE",
  "key23": "4rCbxWxQAzcThfSq47r7c21METFTzHoQbUhnSkLhzy8uXroMgGNiDduyppJNGuzhasCKYogAQE7uqKRwgd1WyNW9",
  "key24": "2s7jvuKYnHxaPoKVkJSxMZjeqS2hmMGpLfHGtixkgttcM2y7LhKeThrNu5LPWNMHGVSNphTsvsrsZqyZBGhxXFTP",
  "key25": "4smE7734aCPsosfyL6ZExk2EGKuCxCiqhuAKBQAcECFwRVpzBGm4PwBgLFi1BctsaeAAGLqndu8ABTgXY1BdL4fP",
  "key26": "5aeeE6aXZcEEm5ZFe9c46N6FCB1mptCA7EQEK4ZiBb1ZTZkncZvnjJeNFvmVw6DzaNM3993dSGn9tac7XXkce6Va",
  "key27": "3gzvsosnSDV5hZqRNh28kaDiZzsfyESpuWnNodc8XVF8AjU46v3AvboGRW3aLidUZk1F1WkjUkgBgr51wuWBrwm5",
  "key28": "35SiRXSVs59LHfMP3aWxTHkifi8Mx4mZWrSMEDvWvoV4LwBaxZjmLeRGmFeyyfznTpWyGNcWJvAKUJkGUe8xoMo6",
  "key29": "63rvHvj4xYPyHVaYeSVrbYJRmhTMaUVF754Tk6ZvEHTY3AKsQ1hNprQo6vSL3u7545aU9sV8ELcCPWvJnJpHeiQX",
  "key30": "5bopGxGcYX9UvwHDcazHW4eht7CWQTvFVoRqAe8623gZko2fbzZkecRA2PQ1iwrNuiHJBc6jvj5eTJUUJTsPsCuw",
  "key31": "4DkbQQx3DguB2JAsdkDpog99Z1kubQ9x87uPtcYsaEQYmjGgEW8JxDsScbF2CTv7foBWjLbdy79Rzq3479tmsv2Z",
  "key32": "3qTeX1zHFEue8YLi3H7hTaq6frMFAUVyxCHA2jxb7cSfWzwk8CdbKFDS3MRK5p6w7sSPxCSVD7114E5KDznY6cV6",
  "key33": "2tHAzpdvsKrhQDNeNoLaSbJLiuZbBcSZtv27WopcgvQ7wBKLswR7P3KsMEt7HRVubmEZsS1e9UDSZNXxEPyqahP6",
  "key34": "FPk4MT3HAfDAmooyTagjxs7esz9XxapyGN4SBskdpK2AfNA7A7SdjJUoCbwSV6qZ5VvTEEhX43P47TSQt81dnpQ",
  "key35": "4D8m1cNNxMTcFsS5BtuEW7NX7G8VEdLQnJcmT8RSvVgAkLTYHdQd1UgRy6iDemnQZyFQXv6qaegBCN37ciBPVEC",
  "key36": "2Siy9sk62L8wAyKtn4j8MnBSjzXWwdAr6TfKoZMhdKgX2aDZBgFC8BxWMLvGmqotBVt4pjkgr9FkFP2UWVtS2bEF",
  "key37": "5uAMfGa8V1qdjnhPmAx9s2HWt83Q5nnRLdL9g4BxZnzQXVGWf5BpMSvvYbJsogVV3Gc7hUFABPx1DaFfU152KvAW",
  "key38": "3oztKSXAihsvGGKg9sMobo7HrhZPPVaxEki1WVaDt9E5FiGrmGUiXUPQixZ8rxmiJxacTQET3pq12YPLczyNr3x5",
  "key39": "kWA5k77VNUtj7TnycZQYB4apiznyPwzo85cnSsmAdkDkjv7Ky4hWwKiA7JUuRm8hrTLAaSZ79tx2ZpApTvyGyF5"
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

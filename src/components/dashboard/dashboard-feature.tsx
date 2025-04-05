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
    "3uQTUq7ivS2B15UMYL6rF5a7pqSesEydfX27fhLBWbNfuMjzXsXasAJpqqaRaThX9uv6s474py9K9g8wbreioHJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21qAe6Z5K1nnpZK61dFKdiLFoHU2n7BxBWaxhzAsjkcGnrfaFU1GRkCDtV6ayWn1phtx5Ni6JHTzqCxZY9MBjYKE",
  "key1": "4unJF2diTUynCMWtn6osUH8gbK6zGXHhugbnXntBGmm6QYY1GnPNeyZ3iE8i94SpfFddUabhJjkXHe8XbRmewXyY",
  "key2": "24b16sBiFwnZco9YzPqNCzWB3H6FtiX17hKKLigtWDs134iDBMRpgir8GumJcjf4yjdf1csdeg6nkb96dqZgAncb",
  "key3": "5D6ofVYBD3Uo6KNtdXdAiexC8K77oRL1hCCroAS7ojab969aLikYXi2GhUkHMJzd5XFXyStA8gj9cau1wQ85oo1g",
  "key4": "2UgzzBK1sCEZLkD5k1k9oDHjZiaEZr933H8vqy371XLGu8TFU3pJeb9V1Sbuzym7njvh9TsKTWH2P6Lxo8dMdGzB",
  "key5": "QiXRjRieDo2ptfpmGqDkC7RAMSG1He9jwVTRiV4fSeGq6YEwhEGUVwLg7hqvhXfmfYZ4vG2UBvM3cZNgTUY8Q1h",
  "key6": "wBVKXRn82y4Lon4KwC1pixaqfVZ56BW6ZYfV8iCJyz7Bwr1eKZphKT5twLKTyfdUfuKvC9t4dsnyeJv2WcTDvdB",
  "key7": "2J9KBKx1EtEaFkn68uHP3zHLRgwJqsEh5tqKm3fKkeHUjN737VM5jydhruFwucm7HgAJEC5xxBYe97bLJjbVU66t",
  "key8": "4PoLUo9Ymiep5S6sysMjH1fioc478Pp9FuS5tomvoXzVtW8YaBe6YUGLzxT1puMpYX441W8wU4bUDbm4HPvi4V15",
  "key9": "5nzeK4udFuaz74GeTp4WvAnCX3vmadGyFRwCKqDgx2bHfEXbDzQbQ4HCaYJ48RwQofF1e35gfrEY12XWfvgcu3Wy",
  "key10": "BfCkdCWjx4YCcvKDiNNYSw4sxbp2y4Rq86CLoVGRPCYxpo1nSwSnN2yxHnZJwB5HUohhxpwRQmCVD8oPSLANr3g",
  "key11": "2hXJayaMsPte3Dhj48LoPUHhpwhWqpiPxdkwGaWAgNr4tQTMeRJmpZX7ySF1kwY2VJuCJuNgkt4M5EoK8ZuHAPnF",
  "key12": "3BEe2jUtwurL3gi4znQYkjkc5yLwFf9X7jZR5GdLQMw6N4BMCpBjt56Ne1b3sbmGoxvsPWckFP86dfxsVhcnDB2w",
  "key13": "587SD67AXeSqP51mHBaom5ty4crGB4WhtuuJLjAfDWh99QYp5WcsoKWV6W5kcFmQAoTv5qcGQEipDffMzq6RJaoT",
  "key14": "7YHdmxy6X8z3gxeZQjBS2vg7dWKEYK1Z1Buet8P4KegRbGDSfNZ8QW51WgydWF8KUHroegNASVd2pzd2qt3vhye",
  "key15": "YrNp4A9K1K8nHCC3xikLm7xswb31DuYo5yQxpUdr3s3JW4aRfP6CVxBe1VH8SKFpfyYppdKfSVLjMce63zzrWok",
  "key16": "4Bqer4qsrZ6s7gPy6gJxnbMeHKFQHcjb7QYtE5aoZFxzDA7H5Mtr4wnvpRBakmzTDLLq4NKoGcZfC2nNrRnKzQMa",
  "key17": "3PtjexsxwE1cZjXAdsEqwaQUaMe23oSBEzhTuJHQraMRZQo64TtCmyDA8cvVtFV3QvAdCuCp68GPVRN85sTXYfoD",
  "key18": "3bpLSdSXPNT4226q5P7sqZaF1SjJgH7LfUedrHQ5X7iKfrx5NhBsCQNw9qcfyvtxrBRibQyVXU3bzNdmxzBpxczL",
  "key19": "XXkbqM3v5dhvnQxhPpdgp811LXcUH5ifoDTmcqRWVV3KKY9caabPShw2diTji3ULbNBNLX9S27Z3Rq1zz9yKwMv",
  "key20": "yb7nehh2v7djuy4mGQmvSgLawxHzXMWPx6n2oSbJ6t2eB8im9B9bLrhKKAuuAxJPmMYn8AZ8HTU8pXnmwjcsknK",
  "key21": "56F1ZCXC1roLZaSzJptYvg1n9rGtz9Wm74seXwM2UiwBVcM4gnzrEvDv2t1bxJCP5T1Gtkf48wAqw7qz3NZvwxss",
  "key22": "3twD1cFRrGdqJPq5QMBnUjG6ge3a2H3jiecWyCbgyzkrJAY48ehBCxwbMdPhv589BZDCeJqdEtJV4GoFjzJ5WEhq",
  "key23": "43s8avHfARPD9iTztqCTam29Ztpub8wJypp4z1GqRQYHjEc4cHPYnUqXeYdTrRU7eoXRkd181rUuqN554vJz9cuG",
  "key24": "XLuB6STEHKYeVcyXMEJCDgHQ65nG9ureBTLr2UtVBEnnhvr8rgSpTNewaYqit25C91bYp9wHrvGdKP67fNgqYrp",
  "key25": "5fx5X4Cm6RYUMTdsaNFcngiNrLiMPyCNGvfkvUj2mSXSYumxKqvA2o2r5A1vv66wq6yRHy5snjijoCdvr7NJpR2E",
  "key26": "4sG9Q12muGPZPRvjkEfeVgNJF8fZ9qgRRzR9hU3GTvVPai9Sh7ET3gHb9FCJWU88XPyFnGgu5dSBDt3fVqL1JieC",
  "key27": "3hrBYJYStg4aZB9X5KBRJ9qf2REAyGMYpFNLTff9rBBzF2zDa9JqNnhjfMLunM68r9pDNJFnKWJWJfEeUezJ9GVz",
  "key28": "49qjgxe3rxrnoxsmckkY42Qshe7SNgkbmy5B3RrmCGrNxzy3QuCeB7rXR6YpohTb1HDNbtYfoCiVnUeKjHMw1FtL",
  "key29": "33qf7kENeuSrcSsyW8zLWyFSACvDZFubVR1beqXvCCVeUoPoDmBc2CQaDkNwzz9mPAfD9ouAUViz7fk1VqLENUuD",
  "key30": "3zQmcjEUKRS2Lz4KkzhS9Dkh38vpGVh3ng1tu3nhZaoUCSeBXqUhb7ae6BQgHj9aJT1c5Q17JtKXoYuGXfDjbqxH",
  "key31": "5dmCMDnEtuKwADz3CT3DyegHkMo2Tr24RH2dfbyYmNtuXoQsyEt4J3xYbdqRM4tZzLP12RfZ4oegm3CURoSKeF1v",
  "key32": "7WQZ4e4gsXexEHmqTu2DZXnA1sGrkP7Wv9tzQGmSVDLu6xqTSrJdxkJBbPTCqipF3gwBw82SpvDdmV1QPfSVmfW",
  "key33": "H83S5hPX2bruTo3dmJT4nG5K835jQbfu12at8KTqq2jfxeoY1nwTxYRty98rdmu7EYUY2uvbmP371q61WZ5yZny",
  "key34": "NjgL6acR8yUGk9y6ekiTcjsCLHx3f5kYZtEcqBVG4pu9ZHG4e7m9Uhqr7ReebUUSur2MfLZUU4RV8F4DZRx29Zd",
  "key35": "SM7ebwhijAZV7zskFVkekDC1xwp6xua5w8jub3fMwuSkF1ghekxviJosx1gAEcagAe5kSmvd3V8HZ1UKtmH9SZY",
  "key36": "5h6kzqAZM1g3wqH2YuyBw5zwJoQhC6F4DUYrvCZ9ZRhrphLdCxETDvf8HBAP7cEzaPqQJ7B2foL5yWfxaYUqy4Ck",
  "key37": "2fcnaHPfRgVZYHcBEkFGi3C89W6DGTqQ8M951t7tXns3VumMLKUF9FNL8PSYKBFpKdqCL4Sb41iVaCq29Jtc8arJ",
  "key38": "3MjaozJ3zB9GmYjJ9zg1WhUFe2yWhBHxUbLJ5wEVQ3uRRbM6HTuGR6E72psvq8ZyXRvo1rq3PJKrL3e47qzL8dWF",
  "key39": "2VCFyjosNUTeStMNnMFGxCcgxZxm3DpjAdfNJ9YJ9y6qabpRoLV4qNMEuaPeqFZjheGQwAyqgxnBvEwuCxa2toiE",
  "key40": "37AMNe9e6imx6B5KniMrQoDACLKFpWrNiio65oQQmZsxUS25ayanA9kuvF3ZbmJkV8AJWYzxxL5YEYFyMMNkrbLs",
  "key41": "2hBXNvHV5RJkawNRohf6bcNbTiQAhdh4qgQTn9TNJo7RfVpoQTomShgZjzBLaf4zC4fCwTAZgZJQKE1yxytYNxff"
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

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
    "51712DagUcAgdcMWUoxdQcv7czapHas1v9yv1yQNhtFmH16diDgsfhjo7WLXvFzpgxQNfag7SkFudnYU5YYQwvk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZVntVFxEKYkqPY3Cp53rigLZmusGSYhWwT9pQL1DFmR6AGMskFz7W3MPTVv1Mc3WQRcLYeFdWCK2qkknCpn65W",
  "key1": "221aD9t2aqK1w3apANcGNcQFvHfD4FjomfZpv3Tx1r2oGZNcHspGS69u2XUn7ihvJPd5Qc4MQUaqksR98GVLSSqa",
  "key2": "i5otNiV1iCEqefBkuXWmSEH2xAuj8SLfiuks7TQf9UhhVA93u9U5fQTTu3nnB2Nbbh54FZC5itDz1a4jd1gvE93",
  "key3": "3nmL89yWShuPyv2wm8upLnfqs5yP3sRnwQWZAU9WwiZnqxx9cKdiH3eCD2W8VQXtFjLro5SrgdVxSWMeqVxXf8yf",
  "key4": "RQQMem1PPaLPSEBPmZDXLAFSXHz4y4UG3RsMbBiwXbZQBGZJTccb5oiBoEmHdSx14E3srEs3JGdEEvwiXsF8ACj",
  "key5": "4TVNSt5dVYmwv96RtcZfXh1LhFLu7voWm6RH1PS34iGnwi2GqAkBkWxikTwHYpQurtsbV8v4Nu1RpZdx2p8PgD48",
  "key6": "2airFwe2aCUACmfHB2JvKnmsvERBpEm5MW8Bz84S15DHqC8Na51rnpmbmFBLE8z7j2Mpaeu1CSFo8za4tAWd1KTV",
  "key7": "2v9nwWsibkZt5ywvdfAEzEcukh8EyA8hA66AprNUmJn7zD5n3cCiTPoZiWmUUWLvE37wAzgzKDpv26ZsK5Vw4btQ",
  "key8": "5b8YPU7JAtjEoVmzqevVpQwqLPdVQ3917qPq4THp7TCgY21uPgtjdjZvWfB6GvZUhjRf1Hi6vucwJwp4fBA85rvP",
  "key9": "3eEi6PnLcg2n6kS6XUb59VM8Jtmv3QWqDY1kn4kT9wyZY8Durd6rMDdfRRQUFXHkZaz3HZN6bTyYLT325jXRBDLc",
  "key10": "46FE4ggaqoG1954BMwLs2WmPxXtNaQLKnnkcAaJ3NcwCg7xEi4z7LDvfbLvTRGxuRhKc8WW9GHrNCjrWDZRBDseM",
  "key11": "4j1eiPYq8RmetVTvYSDLZhQPuX8yBzsvGyb825L1dpSh9dHLpDDhWzwnW77zjG1QRSn9Wih57BusU7NMaXGdSTDS",
  "key12": "5Y4PvNmUF18e4eg5vmuxuaC2k31tHDxkGR2aXxvh8zU7R4ng1QTKtyuDoTiAT7jqzYYSrJXpzFtmCekJzBVY6Kou",
  "key13": "5rkgyMmXdYNzUTkTf3H66U3PTJjJWdzZjpLYdZwRhsSDQDqmmTEsDXbNJq6tw9qvccKMrXmipsJ3HJ6yh3wmwEkQ",
  "key14": "zr2ChdqpJW4g73J47uG36oRQD2fUnmEcPgKPvo21JQCV8mDtTDwiv546ySFcuATwooukQsxob7wC8F1WMpP7TGS",
  "key15": "3E3mWm4rgBdQFtSZysNFVvx6ipgr7o171y9aKTHZXzJ5usyVQU27qZeBFjsq3GBFUbDyzSi1qL7YtxbmfQT1PvWR",
  "key16": "5QU2TFsPsqoC5QYiGgkvo1B7G9K141caha2CWGAURjXBP5Qvy5dxRw194kR6943uwwcthJUzVDGawYqj7sNP5Xu3",
  "key17": "4z6demB8Lg2wo1Vyb6YLpfL4uwvbgY4bKLMu5Q2geCCp7uEQpYWuGD1ryDRjoEBMFmnjTNSsV3EHR3HDtKeqR8qB",
  "key18": "4j1puissTULunN6gm9N2awN1jX39gUn4hxFsV4B2T3Avt5S6RSwxPF99p3oz2irC5SXqwivnjXyEA3jJatw9PWJx",
  "key19": "22MmeJ5yd34nNVKSKeUjPntP17mA263cbUK9ZarNaLuU5GNFoVemk5ryyBNXcaMpBPud64rDTx71Adb1TcUu5UDF",
  "key20": "WPBGVx1zKVc6xuX8YZkzSpCZUMZAFMDGsDrGJabEpnBQGM1F8stguuzMWL2J6sN3goxxPk7woePh6J4nJLimY2N",
  "key21": "3YeK6N7MC1rNmSWNrc3o3MWSERFkoWyNBZosGw1gPMWkrd2SLP8mPTNj1eyHxJzt3KbRLsYTiYy87araGFdaQfnv",
  "key22": "5qdensXDEcbLG9QPzjUivKisTUdKvLB53Zei7p5RUvKVfezAhpA51KnshHEa98U1cFhByxdihbqw2JF9vVSDPo4V",
  "key23": "4wr7dmqCGt4ofH2A9shiSj2TS6X1QAEVUtFWeBNKhLnKyzYyt2465bxPjgPBdbHVNge27iChdbiRWmznjNR1JGCY",
  "key24": "3CVuLePsuyDtFhRtjXWpaMvmWxvB9iMepNBPEL8BkJVrgqWyedPNyRurvbSgyyZRgnAviZxVEGPM7kDDXhAaNMUQ"
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

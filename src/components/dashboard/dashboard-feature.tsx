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
    "4HzXgm6KwbenkrRU4DsJVpvC4KAzXBNTkvaAJsy6rUwCmXvECUrpqcBp9tiZ33rjzKnK6AGqbSw8fT9JQeXwdZeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vEWHkcS4kLN92XA92yaSvz7GUp4Qyzjfpm1sGqgHRptNwNdVWjb4be7fd6by4ygQfVKxKNtcxJkTKibRhA3fUG4",
  "key1": "66rRv8RAvAdgrTaS4PCqSrKyFuubZxEVVqWSsLYUkpsCmU3xFQGRJjSU9qEQeu2pbifEtmUTr5S34MKmWRnRMhWg",
  "key2": "31iaDwTvpmzkyympWDneXN7ktq1581AYsSw9zpwQVwmB12kSLjkN7jAsF9pp7MLvtU6QziuPkhsBqrTiyg22Pz2w",
  "key3": "4Pgx3ZumGnnaFNavb9PULowZVawwcP9EqwLfDpvV1eZX2n7iKF2F2NhUgrR6vNC3NajK1BYx1rjc95fjH7on5GZG",
  "key4": "2Cw93DYYZffu3cxmcMe3Meb6zyWUttZD3BpcVhcR4wpyj9SktctrGFbi8i2XcyMbZeppcHbkwrHLhPLqpnzgaK6h",
  "key5": "2Ys9wc1WdKFLpP5Vbt613he2tX8nCqytZojy71AksEo2n2NHFwVDGJv3Fn1jv1yTVhVDrwLwwan889B7wLmDRsko",
  "key6": "4SSGV1JDxVGyRyxnrHymXcmWDhn5NEL41sW1RM6jfMcEprDmvK4A47ejzAtWP1Q9rRN2GUNsqPWR3gpLKieAFppz",
  "key7": "5DDVYEVHAuBEkVdDggLw5tQSJfXN4BWDPwazsN1bp8ojoTNMo7zoF6vaaSMLnvzKTbCnbNdQZhsxXuAsQ92PPNGX",
  "key8": "4Qf2cc2nSJy4iK761njQrdUJTXN4yzwTCAwao2wQRRjr91u6HDfqCs3tgNVoPgyLR5gdnAAEUvcdBGMS4HoAqUBp",
  "key9": "3nzUeVDhd7aEgY9JSweu9zpZ6C7t1x1KPffWbgrRH5WJtRG3SPPW6jqFEFatkGaawj4XQCAT6cKir59YbWNe9LPw",
  "key10": "5WbXGgojvrBfUhn4VcMj5WkWSgJJEw5SoZF8HKjT791BUoELvq13ktw5Edcofu6W1ShN4QTV6vqm92VXQzADXq99",
  "key11": "37KV4yR9nQXFuXDm5XXD6G8hotbmpTKyEzwEMgYWBRYBL1DeRVMduM7CPYZawc5F9nPeP6ugNdRWVM5QyTgy96K4",
  "key12": "35LhKWcA8ANuxyh9hD9wYjXEddp12Qv5YYsF1j7dVwGyCjcyhMYtvgdgv4aXF5Ai4udqUwrKzJM2bP2PuzCMPRKf",
  "key13": "KM3zCqwCQ9WFv15w16Li2TjaitgZtFq4crkHXg1P3w22dRBDnZSVUPrFe4bruFf77XqUpG4sdMPLsaBaZoBESez",
  "key14": "2XNJ3TsZCndv9z2ow9B8EZXJpsMoFW9hs4TEriAd49RfWR3XU95f3v9TxPyDkwBWQDx2KKK8Gy6rbS39hNCqGAHH",
  "key15": "56xVrJh4trKvADmVbCkXTwYFsJxXaMcsh1oZ2fe6NCCJBfMLCtydZo3V3xvZ3UQfX6uuSjNS9jRtg5AMEcdYceLz",
  "key16": "2SWCz2sha6XL5G1FtUAgsYUSGu1BmroDacAFK4WgpWDjdf2uhsn356QWyhjpccNvKas7M6mFvjrymo6cc9kBzhvh",
  "key17": "3aTSesJs3awxQLqiVJf9y2SwzRvuvJpcmaPDNLTYVpxfuR8D2g31Yj5tW9a1uFcRQJK8ATEXosFgDH4geG2XGG4c",
  "key18": "2FwmUh7ZbB51MRbxni9xGjrrj8KfujtagEnhyW2xqeFWTxjugLEvtJX9PwaeqpMvNXWCRVDhhGhHz5GGLdzeuUbP",
  "key19": "3gF52TNYqZ373paW8zfYhE6o4FV1VhUFGpfm5nCNGS2Mcv8Fc8MN8evUoWzP2osCXyCpVSkAbh79ihkD6AyF4Bdr",
  "key20": "342z8557uTracdc7AaQ5cYBhwaCUA9k49aWeS75NPe3eYLuy6GN8XGeyo4ofX3D1n2KAgZGepz1Cvr7Tf2u6gnmH",
  "key21": "3gB379Kdc72X6532sWCgNAtF62QcTNkvBtRTXReWYik8MgPpS6cVf1Qe3kQ28jM5CDNqc6AMNyAohUSEjEMYiWJG",
  "key22": "2DrtHMUn5NGQP5wsDwwNKEMEmGbiJhWsRA5dYbBfsrziLuiNmv9dvoncjCZyR5cGZ9GWpx8AxrRzq3FvjsUQNVMS",
  "key23": "hTpfZYxtwqgovoLUSmLRXq618nqHAHXM8rH9eaBU961QozZoEsKseyPNqF92KFS6NaEnLTN4jVKUaRoABpNNM6X",
  "key24": "3HGHYQWFgQwATMVxmkP8vdW21xGSMvFy81PfWnEbzx3PYk4zhes2XzBD59XzyuSyXstmT1USwrLysudRzBTxSdUK",
  "key25": "5kU7xTDW7T3uPLdR5DbDUiUfGFpMaWPpfunVpfP53cWwHckgJe5zFFpSZjaHYV3XmvENy63TfZGYQaMgknCdj4vQ",
  "key26": "36DFbB2tcdgcxSAM6CQKDpndnVaJzMFLCHkgEostFRUhEbguAbMmBoNNrZ7TPYfWxjDoJ5VEcGQtjQNksCdZ4mbK"
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

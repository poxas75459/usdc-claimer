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
    "4xFdcBZreyimXEnjNMQQQq812H1ATXHgKJVQdpNvnYVofc5GpXyeBFQU5KR5uXMWJUEq3W1qDfMM5xH5fCD6AuZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74bx9SDWGpnfw5HZDoAArab3MMK3PqsFy2vMeNpCBegWgnYYZSjoBvk6AXmAVr5TDPaK64DG1qFSiARtKN58q76",
  "key1": "1LqbeRS1dgu8QE955qV5JfF5EAETTFwXJy5RB2ktoXKXirgjE5FMze1bTSSmsLEkVL4ia8xA2DgFFPZuBc37Vap",
  "key2": "5d88oJDh8m8WXmtK4XBpoB3Xua4v9ujaseCVpMqR5atVQtNmaWUjM1V4o1NjEyKLu12yRQCmnkqwZoh7Yk2asTk2",
  "key3": "5xwaMcShyDkcTLJaoSkCa2qv8k7hp4XDF9XUXnXyhwVx43Gc7TCGvGm9jKyBtKv5FyXm3HADVdc5axMs4Fvc7SbS",
  "key4": "3KMszJmHboMWxMbWwN69wgHVEdm3vS2rUcnfyAfsYk1AEBgR7y3nkVVTkSzZbDs37WMLPFAx9nCxBecgTH1D6x8g",
  "key5": "5Bmyo7dAKQup9mJMv3a4xtzbDDPQPCecuH9bD32Lj2apD2UgGF75EJH54tRGK6YhXDzbsw21qDhvtMm1ESpwVCoj",
  "key6": "NzMFAJFVVWhVrJatbrsDhuNDJ9EnitE8WjT34i9amKbm4QFgYrKc5buVtdG2Pgx3jDkXtJqDRbscCb4GdjmhkiW",
  "key7": "4K661m1U2Hsj9wC4Yu6DXY9gbUt8MxnQTKrEjiSrgBNNm8XJfPDEzRtfgoDo2Qxuw5MQquAgJfrGccdgzy5bS6YH",
  "key8": "muowyMcM5du9q98VodG9HjehNPhk9xfNc5Z9ZrCX6gibGy812338YJym1NkUcoNBnxe6xbvivtV2AhgDL15B6mT",
  "key9": "4oqBRwTHvE21kuMfK6jwu1XGzbrvdCFNite2TfGisJizcsWvm96p4CDiismFTLknREtFxc1qDJ9ufKFPu9p9YTyD",
  "key10": "44Ra2RJumjHmfUatCgpLLzACYwTiR2FyTHGU38ypPb8X1YVs6kmYyHx5rjgUox7RxdTBPQjDU2rH9FJHyXSi3dYt",
  "key11": "5cq8rqeJhH5i9KKcw2LYZ3i6rNbxTrLNBWQ9SgvUVxPeyh6v6fHderEGiZj1hgSXNnsmZ9a8DG7RKdoLu5EVQCmf",
  "key12": "tfisLyESrcheLr8ypnYJSyCasSVPqvFcZHkcoHspEeV8ojzVL2ok1mScaoox2U9HLbM5ScRTDw832Vz68vPfuCL",
  "key13": "2sZPNbr17QuiFDejPKf9BriYoTHtuSUNXFSJLkYu5Gb8895pxuMUyDgX6b5rqh7ZfZT4uKPvEKYSwPLdmA3DvWqm",
  "key14": "3JBGasvwbMS1ijm1xUNaMQ7pQCjnAP4BrFYX6zwPiJ7QWLKt1SA4GaNgNAC8uBZTzN3Yg8JUcHZ1Df2X4GpYmKJs",
  "key15": "2CDU3ow8vN88pSnXp1nnw86ip2ayWSR5ZCgcnfdt7V8DEsWMKLs9JAjVKesAVXcHFR1nGoLwDdsfm7PaGdX5wUKS",
  "key16": "3r9s8CtVReAb4dYo3aKRd1wZNc48kcUWU9EkS5xkcuwBTEmA3NRd4jmreD7ByHfRKepQBb86avBSLRhE4GefXjPV",
  "key17": "2sbPgYau92s2GfLbmkkp794QiVAfe2EmixCod5vLCqy64b9NC6tqU7UN3MVe1Wh8ugpXHJKPKqCndMdKxGpPrJMo",
  "key18": "4KyGUMYgFswbrKJoEkWB2tqrCG3MEZ1gBeyLwV27vXeYaUk5PRivfna4cHAkhJhvTmM1PGqKdrVdZkMtxc1XeAFM",
  "key19": "2haXHSWCNtEigHs8QT9Ejauv5UFPGVQTo97gcUKLXBKDqiECwTvDaKmBPMeWb9S1Q1mYuHXEzZNLuizoskef9MVu",
  "key20": "3pi39uSzDkGYKa3aRPnhnC9mGAsKd4A9ggaGNgokzJTAjjUcKawitjtwHCEjzAkG4Qd5NDLRWFSSjYrx9ZAPf6AN",
  "key21": "4Qnk2iXkMY32VjE6cWZxLFksWZUdfmTEdox951jKaCiEzgJrPixbEaGfJAyj7459TaqoMmj9HJRvdiXSvT9W3TED",
  "key22": "4tV4de8sPUNsezvgwQiJtquxeoTsptCMgMJJN3tuGNF5w4K1UKXnzHY3ByWPqVZB7SmkCkydedTpWdPwACKDXUuE",
  "key23": "2UEGqkkuQYpPjjnXMRq4LccLVq1E5byKQKS2jJ3pHSZnHyJUnp5VRYWfMNHZzo7Euu7uJcZJedF7MBghAYWBk8Tx",
  "key24": "W7FuiSeCUWFzEhqGXhnxaDzzJPhaJJCVV2W61P233AiuYx7cWC1UBZUZox4QGpWNUYFzsVYi7Um2FBS7o3dzCWE",
  "key25": "4UU2ibPhMm6cGoURhebKRJ8QBRkwX4pVetPfKnPJNxxszjnF1yTXitW7vkk7oguheYFTnRR5Edr1etaTnazxvrqP"
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

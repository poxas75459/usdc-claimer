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
    "5tKPWKcB3jNYDrWVEgpMak3ueeLCHzvuVq8Y4GYuUZuDPCob27CuzqXmvVZ9qLsgPMQhw8s6Z3zXuxAiCcvVhQgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVoQBhdwhae31YaoXR8PrvZMqF9ujKSou5DJsz7N31fbAFg6GjGv2YMLBUjHX8oZuBBK3ggEQd8Futz3suQmKi1",
  "key1": "5pavbqVZFkBmU9sgGwzP11RTJC6LaZwHo7GHDfUjwhNVZQFnfXSzvZUhpaM2gCxVThYojaTaPbMACP8CAzK19SJm",
  "key2": "KNQ2dG7YGJbHvyDGQNhKoUNM8Skx3ag3KTPGsYqB3HPPrpB7Fd2sNx7UMSrtTEsWrNJEPuEfihMabWXR4im7M7b",
  "key3": "gqTjR7emuEpAfHZbE4quTGKcJ9bvT4o4Q4Qb2LCrKAACWgFMYFPhrqec3VwZfkmsRScs6msvy1ffsKkD2gNL3pv",
  "key4": "2q6cxCyBweLDYDzuzW2S6sczYWBrNDSVAyvxa7rhkk5xCHFCYgMmevvQBxNpXeXohh28Dpqmn26LvPFCur2XBRdB",
  "key5": "FQwrWH3fa7njETmuPEueBJdLzrvxXWbxePV8hBjTVwWDgZPA45zTEFXGw9qHxXcGhJN2VECHGMCqXNJqkkSttxs",
  "key6": "mLRKrVCdWMnujFr16ZX2myrpQpHxFnxd6Xx82AxysQ3xuANsyef5cffgrkNEWPtgA3qZSbm9cg3hQZsVjwpxeCG",
  "key7": "imvP7iVYCaJewt7jVNcooRtJX8XbmZwvKehVbPVKAjmHyX1ceAdG4CgyyQWkbo8veSgUGbkgrTY4cqpCVXvLtHN",
  "key8": "22QipqVHpkxRTxUEb8HdjDET2Whhhpt131QM21KatmHWMYdQi2fjgoQ7DgHk5aEm4sLp41yWBxp3nwudPRDahKWe",
  "key9": "5qszQsJiJ638ES5Vd3nRjKdxMQyq4FKF2XXygzVSUaGG5vR5rJd1KmBJK82Dav7iyrbY31P2rCPEo97YC8w6BAfs",
  "key10": "3TkhV74tw97agYmZtgRD6rZW8iUUcXKgr4iY6ZDwj2kBFNNdjfNLeHs4PntrrTXRLhjNohv8XVart6Yu5oKCFjCm",
  "key11": "4MhhqMNU2DVz7GofzdfxRUPKNTrShLVrEg8wahVbm4UZd2tHVuKttKBFGMM7SdNQaPomyqA7emCoywxxGqM61uf6",
  "key12": "5vRp6GxU2oKb3TdWun6JhusZwS5YJKBeUD9HfE59WZTtC3GczyapnHq8386eyjwc6euX6JWNe9LTHdfXmDXbsiu2",
  "key13": "2i5G5hXNymQXmAij1EL4aramgCcgCheVN2jPh55iWkNVXgYnnErtbNs6mLYoFiqWs1SGgmKQBPddmYaQcnq9SDv6",
  "key14": "aEKUhBkpSEQNcJwqCGN85qDBFvEdygAvC97W66P8LuW4YJot5uM3Wt3dndiCAUWesPqEWuEjnGbFjvGV49dGrCz",
  "key15": "5QHJAzJEXKFoCooKTtnvR314RDf7zRPzvocWy6KNMuLGzYuPRMQeeEKMdfFUd2VVoozh3tYX3qhPfyrm83nwnjXT",
  "key16": "iMmnwxMKuDLQKumUcvE4qCamZ32fVTuhKDif68mYxWC84QpgkCztSuLZoXTDBnxrdDTqNkvgaHQDhLzkFb6iwdF",
  "key17": "2weFuPGkpqFLzagHxViz5v4yHVkc9mDE1BCXBZ9TnVTgiiTwgexMMkxXkHRK73CGHBhnjYJ1CFx2cGY2RKqkHzgV",
  "key18": "38Pduztim1eak7qcv8sJYBofPHx1Svw8Lkre1E59VwVoKYT6nWVk7hCLSchTB8Wkeqk3v1U3RaE9kvDPt9bHeTNn",
  "key19": "2t8Hs5YHfv6mBZTDGeSiLtLELaEyc5DjGUcsFK258apLeHJv9cV3rT6skacC2Au5FWXVGa8Q6tQn2pUn54q9wZop",
  "key20": "3p453quvi66YeX5Dv82Kv9cLxsCaqu35sRE2DZq2V82FrhhVRCtaEH7czhyitLz17CyA5ET7amMLkUDFy5jwBnr",
  "key21": "TMZ5dM2vQ5MAsosAmta4JSjaCg6APMnMecoAQ8fsFRw9oPYtGDsrvUqZvge892xokyKTnw33gbB1qGy7xzzfpEm",
  "key22": "5zHGRyv8czRLVmapFZ3zxk9F8kmBG1tFsyMKUqimUDF7u4PDkUFqa5tSbZQeJyFDfMiCgUaPniEyJspva7mdrCRH",
  "key23": "3bxxyrtQiaMmiRDFPbJf8CtXjwfsmG3Kothgr32tdtbzDaReMYXPipSd9YVZr3hCoULJBUfjiDTs33CwMTuJEerR",
  "key24": "2BAyQ6kPXxMPgvav3SNHW372sL1ZvgP8skDMsuSeFdyRUaDLSADEhYfYR8VNriwvuYZtw9BL6K2UEVucc2Eu2G49",
  "key25": "N38QxwK2KHz8xK46wTuC67PqnXqT4BGu5wm4euqVP63mneLiuZaGSp8po3N5BtSRi55XkvqARxawEyeGYg6qURn"
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

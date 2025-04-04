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
    "5hdnLVYuVmLwLrtBXWN4NQUzaXKEqLkQoqfUPCcR8MiFT1XR8fuEUw2aCUyfbzVJaLCf8mjhStNfRrL7Brsp3rqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9JetEL425Hc4gMv55yNJUxeM8UP5bgxeNHhYdR6uNLisqfGoCM1dC2oKuoWRDYWJsEu1dpC1TfsmLWDrKDBcnv",
  "key1": "QvMgyFU1okr6KQQMM8HCht22Z7G3phHzzWxH8nB5d13pHU2tTEBrEUi5VH5LLkGgyShHM8qLWCUc3RdAqyRrqXt",
  "key2": "5B2ygMCVzJ3p2XW29PvYnKwdXMMVpD89F3UBU9fHA6e9TuAsS4H9TdKMCNCqvMftoJZoZnVekbvxJ21UomfzfYCB",
  "key3": "5RWBgS4gK7dnZnmg1d3WwXvFNUvgyQsSqVta3DVZMYZkGMBxfwHghtnDB9eKYpwmFLcxSJupEJZr6dymbj5i2FVw",
  "key4": "3tyrJYnRhv6JnYKZWTQ49cn9HAVqYV88i4wHu6wghT6EnxKaLiqxRDRMHt5Yw7VLzcX7CgziCVRQAYwJrfNCHtnq",
  "key5": "433b8PWk1GyQTBaAYf7Tj3Bf5fnNoVDF9cb5ZHGheGVRE92DodTkU2nK5aEn7tLAHZGHmyn2o4cpzv2NNbtP5TAU",
  "key6": "3rKv9TAPAUwfyy9hPhnFenqcRTzCsZDJWSyheyzbpGqJyjh5zCLwMKiYdN7CgQXDsR59nujFbXfUP3diRFDysazh",
  "key7": "3Lkf2XvxMh8CXL9wJzEFV2pEHBpCoUBDzMu632uR8X5y8wPqeBo3d1Ffwztw7kwouzVmQcwAfgtwwDopDah8GNrZ",
  "key8": "g6C7hGP3dzHBipVbd3YdsmvBnnVfYLc8EqNBtpgUd1DRSFKUq1RpB7SdQCPxPGE2J3bx3LBSpGWGCLsSaFLawZZ",
  "key9": "4nA2fhaaZXeAbZvgAv82rtL47Knb2JQCfekaYiWcrF7djHqN14L6tvY88xoYo3Y9QnG2u2rgspi48ooKyiCpW9zM",
  "key10": "K3WrHECJNbmc9MUxH4xM77HF6YJFZrHCqMVVFgEEpSCc8Y6wn7F29YMhoqste9HD72mQjKF3rGFKgwrwGxMBwzN",
  "key11": "4vQQ7DQeiHW8iT2yceWNyNcsnFkX8JvSMVQH2PdB9L8gYmXednrg6Yv7nqvmj7NxcNvSgfmMQfvugAhF8W5Pkepy",
  "key12": "4HNKhJKheU8NtqMA68NwcqbpWhVjYX9VL1THyzM9EYwEJYYHYsp7byhxD2viHUJYwbKFkTiMtvXS5uf4aQfrSKDp",
  "key13": "2yhjMVxx75JMw9yLdJCEmnQyNtjE7idSrxeaRmvyCnps3SP6ivQPZMrJ7Q2yhh7uYhFoFXKj3uUpdUgt5HtgFTWZ",
  "key14": "2oyr1Nzq7HgLnbjwYT6ZMKpsZ8WNMQzNGfJAoRxsfJctworwsHmQg54RjCscXJarGxJXV16PuLre3KNXzhHe9XvK",
  "key15": "2RFkmhYHfRi43mDZfJnSUNRsMbvz7Ry2GXqccPSM6dpWt4KMspwBEVeywGtesAPZnpqUhTqrY6YZkWfTTYqQVJqV",
  "key16": "5zWf7uCQAdfN3nrtmbGXYV39iUuEY8RRzPUbM6YZbjBKCTNT2xwhhoiWsUjy6C7pAeinvf3rMVKrtrwCYQM34ULK",
  "key17": "4pAk47cxvemquiTUnU1FuDQFjCXiGriCYCemXqEaHTrDMGV4DGCzeYMAXnGLfVCmRsiFP5WzGs3azHF9F6Dj7XwF",
  "key18": "3Ys4g844ZWURZ4XsK4BhhJ3vAtTP4gYrgrkA6xgJH5ReKjUAEuETHgx6cDDdepyNicMYoQrHmnkNpgZJrNkUEHNN",
  "key19": "55RdyLbx8C7ahT4mePoyTFkMyBzUpie3CatdnS4qacEjMaTHFh2e5c9j9ajeqHWRcy9aHox3Qriin1d2sNiaJKGd",
  "key20": "5s9rN5296z95NDSkrGQmGVqgTTFhgpbBN9g7iVvf28VeoRRL211uKvTyBu1ACf45LCrRVxCXJX9AVmXpXTJ8uFQT",
  "key21": "3P7yQFqyGeddcokZwN59z6ZpcFdYeQyKcWvVKPWkD1xd59vnXt2FqXB45U3YnLxozVfGoDNE2DrCG4owDz5Di7fE",
  "key22": "5jhTHtfmHGktSwg2sWFnf7f7yDcy6wFSbH1xCfHPkU7izL1nac8E9Tj1if9QcmpyAi5JNwHJWrP8qUGe2R6mUMkQ",
  "key23": "21VGHk6Vjaz4vNoP5PrNQUMD7h6JCXmTYCYuMq4CCRLFyvy5TkGAP4LUgn3xkdbdhvvENfcd1SPzx6Fv66uKgZ2F",
  "key24": "GjFcjZfg54VmtgjPfudeLXH4qq2tLyq9P7XkkxjvyoXti3UFDoMjAZbAktqxtpDU21rT8J6jJbqSXMrFLM3Dy1Y",
  "key25": "AodEgJhLJJUjJFAp9S33KHXWZCe4L4HQ4wxefaw88Cy83itcwzcrMUaxRHu88JpetJMUA58x5VBDZ7HAwy42dQd",
  "key26": "2XfKtbuKK5rmM6h2RQ6k1ggxh45dECs5DFQkyfrfsq39ApSkKiS5GXUrxoyNX5ajKq62ZCBmBEUjKYdX4mtNZEFA",
  "key27": "37RzPc3iqAaB3YmozavJdWvJtrd4hG8ETSuFbWajq7VB8tAHi2Kx9e9gJbAR9uwgQTmi6kFeuM2mAeuwGjk8Apaf",
  "key28": "361oa45fEZZrmQbAhzbJ8AhBWyroniMLMyNCELf4k3DFA6GDB7WqR1yVZQPpg3JtJeMCcPXfExk1hn6syoSzjY1q",
  "key29": "5G9Ga5FPuzyNDWp782QpoghkcWt83RXZuPeeaXRUBaWFzoY2iL3izqfTgqkuGdCkfsA8WYZRANYf8CLYBSeZtzMR",
  "key30": "XgUQ2GM6KsBUwHaWG4EA6pfzgfEyqNi1KzsZkik1KSbnhgk8NyjU5g9U4fwCxsVZmvcidKfWqfy7W157XYYTJLv",
  "key31": "2JPZuU85WKuXMSwgGaLm5fBepjQRdfwGq8SrhAEXGUtqsAhtfjgYSut2ohnyFnpxtqBbRaRZBJQBcKwR6pscksS8",
  "key32": "65oNuzcKcwds1tj5AiC7kvnAUTcpWyUjNyWj41LirbAJFpmHk7yXsud9PxVNpWri5SofArhJG6MKKaoXSAXc1c31",
  "key33": "59Csw67ejg8eE1wJJyzNYsq5HXy9sMEm6wcRfTioyJzvz28GeMswuipcTrN16dQVwdouUf8qLMMQwMZk7ksPdwf9",
  "key34": "23zxNJSv9XWEAEtq1LbTW7cHj9AiXbfmPvpDJAbD8iJ3LQc3pZHXgahQzbX6gDNNgVFNpPh7xWurPnez31uZBrte",
  "key35": "4KTTARkyfAQ9TQhtTA3vpEg7D1dEDpdYyWwtMGnJo4ApL3SATPNbKBegXD36BVi4oAcwPyZNuD7GX22Arwt51Bog",
  "key36": "5Wh3H42AX8DNrHHmgZiKNNBTKGDJSTo5gL3xTMEQYHwCbZygJYtmfwiyjiGv16vkMPNGNp1vMuyvDMjhX14TaWKd"
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

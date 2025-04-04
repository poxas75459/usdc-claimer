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
    "4Pd4Eui8x5LoWLoh4yKfVcK5F6KQ33kMnFP9VrUpSKdiz1p71JQqTScP3rHWX7dD8h4WewxYYyqdUF6NuEf9hmYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDcbniZBsaZxFjtdfe9Huy3feQouLjJ2jAE5L3bSfXGj5JUsmRjoHw8k52wFUC2Cm7SeRMhgeyWR7FyGPCwtF3R",
  "key1": "5s75kwZpP8dmqK2cjN2QyTvgm9v7CZAW1ohFdvhNYV72MzAU85hrKVPEtW6QwbTiBZrDDadyy7NVs6z2mv84iJVv",
  "key2": "5da6b5J6FkDMkoWT4ukUby4DJsNkHedWbkSJg1yeYQ4fFnBmMHm46UbxAXwRgN9EBLwikboK3XLPhVFDU5juV2w9",
  "key3": "41j735LAuwfhy5huaHQLFUvY4NCje3YTeQUcpaQP1hQzXtWfQkkbK6w4VF6MCg7w1AtrHZJgGs9GdNYuygj1uBe2",
  "key4": "MSxs9byKr8RWaRwmCFxUBpMXENSGXMhHqGLwwP4x98xhurhmwmWLaJKcB945nSMQWeKrpb1NpZ9sv5VPKU7SFFn",
  "key5": "2KU9kgx1Wi18YnSQqM4At1aLz53q5YwEerVfTwBK1Yu9Vf5vYfwrwMKApuWd9YBG7CDcCBGJ8NgswVVa6L2e2PR7",
  "key6": "2E4SEjFAszr7pPccMFuNKyoEgP3zscctkLvcfRPQPgyoR9afRkaaYZLpN8TykUVoTM8vCFNbDk8Zb1BwLGpDKvHQ",
  "key7": "3BS221JkgCCzNDVVvXnr99xDiU6kvVwLaDLjzdrjZmM1bbETyNWkWzXZPXDkE2cSW6vbHbefu2wbNG5uNbTz8yfH",
  "key8": "T1vinWTsjBw4wySWioeqFUJynvniTYYK5KauVWaJzpsnJYx3hAxCG3yZ1ne5qjnVzA8MZoxTexfqqv6vtdX8yBD",
  "key9": "3w9ReYiFp9Aph3mSeyf4SrhqHucmTQgyuWGoxsdkGBBBBfQ9bBSNYyQuXu5xEDzUDdCt678eqmu9eLdDMxDeK17L",
  "key10": "4icvKRcWfF82KQJZ6A8en4Za3SNNspM7TYzqtqYTmpMKcQAEENafEwzwvVWAKNkY1QddtkHMsYBX13MpeCEdH4Es",
  "key11": "44Umv4ooh213KxiJf4MPcAHX93dzrvcY8dXnttnrktrAiRwv4DRfre9mK32m6k4Ac3S3d4F6U3UUgmHJBN335qks",
  "key12": "3F38Ct72riFtQJVxvy3KBtQiCX7uYADoT2L4xoXg45PrqLGaujSs17xzG9WYzF9JjPG4Xbys1wq4iMjbLunRiS8t",
  "key13": "3qrTN4HZEL9YswvL7FLggMJWsBdXaZdku3DdUL5oU9CEhm8hQro3ctz3k8Q2m6nQNjfQQUPhCAZ9Atva6V3bsDkj",
  "key14": "3qCVekHNf9s8ksvbmPxj99HhMzVR6HufjQ3y5yx5BwLqQH23z9Rcwwtj3rwVWjZQ1iJDZJTxhPbgRsKTdXR3c2mH",
  "key15": "3eJhvig8HJCGhpDMMSVmcHeVX8T9n1cKJ4YAcUVySDs7NgaN8iAE2BUr4yeBSNbvXjZPoAuzjexeErMhxahXbzyk",
  "key16": "5d1FNDcZ9ERG5TMQUvziX1jummBsgNkPhfs8qiWiWY9qPcWDMCFv3VRbBi9KCKLer1Wwg7hBoVxaqwk3AX1DMusP",
  "key17": "27p9BpKeoL38EaMzS9rakf4Dtmu7yqhbfGTZNwBoqBR62Vtg2JLXFymPhfykoq8fjqkqHQrqvZSxDe4fDBGEd3ey",
  "key18": "5wgGub64AZHqpjAsmNFzz3ggPAnFNwe7CET4m6EVM5DwSpYnpr42Xr9bMTieRDBMwHbkHkjMLBkkcVD4rJr9k1FK",
  "key19": "F7iDA8pe2eiemB9h6nihk6y2gmNqktYqrDpGQNkmf5paaoy3Nf5F9kvsmzqG1Zd2km9jSNik9agttR7W8hAqhBs",
  "key20": "EGnMXTSn4QS5MMYCojQ5t2aTWTVjbyHbsaYG7kU7g16LN2cQGxYfFxHucHAK7zkFj2o3DQjfM5fc3hwvRSS847e",
  "key21": "3S667CvasbqfugAP9VbPzVGX8vRSRzbE873c86zKLs6AxWZ9egaJnWRkm2iceFNME7zNfQ5NxyXPL9UmdqmjirWr",
  "key22": "5ewayUSL9EgPZn1tZK9Zyfg6m7ad5qs5ahubKerSufJK1h7uUui55T6dsMh1TCFBcSe3U2zeHT9Tu8WoCzRmAq8B",
  "key23": "4ZWMUT1EotFfzvYhGyvCu6y9hyz8dK1DkDmPVQQ55tWpddnK5S9bCYYdtvqQK4ZJB898B7E7ixFNmchPRL6JUsAp",
  "key24": "3jXMfMqumT4e2Ld4cY8Ff4xG6thFCbKYQvgw2nQp1mDf368N2mJAfN2ohK6FBkbWvs6zjvEsWAaY89fF4BDEB6Bj",
  "key25": "622XjuX5mQBR78VRMHzkDR8VTF8xV95hFogZjGZGLu3dhGLpcjos7GBG7z8r7CyPzKJqqkihZfEJUZhXyJ547Ejg",
  "key26": "3TGTs8BCPQ3cyuwAws4DcGhyN9S3kVZBguhg9VkBT5rPjRGYhYyiiZBCEtigkEZiYgxMfxwVSEuwghDWeWTPJAkN",
  "key27": "5mmVkAW3b6aH1KWLAqocGREigMVeE7murWY5xGPsf7NSzodsbDYg3xzb3LdM5AU9YJBT9ZrYuVEKQ8FQbc2Fmnd2",
  "key28": "BTABQeTb43WPB32ee38cew9F6rNXg8kpxGhdkXfteym95FNytCLvq2649YxaeVuwCnt4VS9uTgdbz7cna9ZZrCx",
  "key29": "3D3wCGig32BNJDWa2KrRJ9wDELDftjQGtShfsEZg9AnvdRgpCH6oEQVLDTKm6qBY5iin4vsuiW336jiwPNiACZF4",
  "key30": "4YFtnCXNgBixqfS5fMyxKPbiKyfLPycnM9mVGrtaTrDpmzvjpDVfotGt93wm2HGLbKs7YFmjFKWuf3UxXcgSnPqz",
  "key31": "4WTsV2uGGiVqp2hMni7aW3HjCvCZL3kv3UYSC335N2VuB9S4AASnmMRt5AGZgJMGuTVJwpdAzJt7ULDCJJ97ffCG"
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

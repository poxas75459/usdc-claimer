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
    "KfTJrhtPBwCFrDZT4KS8CSPBQYNbepK51diYozHivQbyhnbKVVTD47VUA4MxcjKPDfi3WiitKBWuaFW1LJAR3QM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msiDLQDAx579qHPFywJZSduxq8hB1pLqDmAKS7Uf6EMig9o1ZpJAYN9MC85cbtwyYXo2QXzaXLwx69VAv2DWeoq",
  "key1": "2o5K8VR1QWTVb5iJre6DkVx7Hcb8fnnRPaEndawrpauqqkxqLMSy9To1QhZBovCT3h4MnBmi4XC97PMihMARsaW2",
  "key2": "3RxSmNgiPtkkG1LFeKnEua7kTxmWepR5u5syH9r5uj8zT7nwtG2JmGNmLbnNgD8EhjnXM5KzRrFqXr1hHEkNRx1e",
  "key3": "2wRFpFSBxEBapMip997epxSU6vpLtiYfNPGm9pdHFiaZykCBh7tvBU6rcwkgXaS3YivADmQEzAFRTb7fBg9zkGGA",
  "key4": "5753q71sMT6RkmJofYKC6YDdUZnzgpGVbFnouumx8A5myAKDnq4R9foV4XAb2NeCY2j83njZn5DdLKNno4LrjEYB",
  "key5": "4tCbMhzRxP3MNguaV5rAekX89YUtAqcDQDY2doWtBuRied3HmeXQFuRmwX3Q2oi4wD1nSpfhxhQvVoqm9Nrvwokw",
  "key6": "2nfHbuv5c446asAGsH5LRGhN1CDXtrZfH93Xw7ht3rGGyLcb71KYu1FrmGtyzzTHAUNFHfjyjVFDttYABxyBDLeq",
  "key7": "bVx7cTKqt52fLmSyEzZpbgTTwp53ikWsF611KmvLVhg6zXtbjot35ngQ3c25hZyoQc72sfz2KDWLd8XXRLqk1Sy",
  "key8": "3wrHH6HXaMtLBPr9FUECpFdUPnVNTUe7Mv8wGdXQUP1LuD373da3XqpkvEmsLjn1ak3X8WrSPn68LXrG59hbUyqG",
  "key9": "3AeiL27mDdDgo3Vwyh2NFoEWgiYaBe2v4ZDDo2WhUANZ6vT1UuPcPqena3Bkdr6hczMNkLZnvaftMrfxhhmgotPc",
  "key10": "2tHmzmCUrgP89XC7VtpNwdfSYYf1PSS57fqMXPWNhSyYTaqXuBURv9SMcXRyahLKJZUxy8LYGYFMiKX3LQCeYc7z",
  "key11": "51ETTsbkWSMG7Sdai9DDNLpz8oh5sGKmnVoVJPJ4Hf2k9Ypj53PW5YRCFBxzYzhBk3HDzeRGdnoBSWX1YWYZAY5c",
  "key12": "4AdHrK1Sex7emeDb1wQ5MDFfE7uJUPTm3FN4VYFZMCkcjmv1vpWnqiSdLZt6qtonGYyfAbtPmmXfEfSvNLUFRYdz",
  "key13": "5H2tRtGcQFRquYjP3jgYeNqMyNRDkw9Dgf53FkqNbyFvF3C5BqgqQA1mLVgY4GXkHjvuN7ijwR1TrgA9sj1p9hv5",
  "key14": "23fNvYrZ1Q5Fmz42c3ecermXcUCjveDsrFHVN5WgxvfRqq2XoUYU2Qhkd4wnyBHGtw6JiRS4h9TLLHzRwYWJcMW9",
  "key15": "4EPKyDvXgNgCyYHuRfNw9SkZiEhPaZE7gYwbHU1FmvhguRgy3CNeh3XxFqt1xGxgCcicvXSgTWTBMeAkBjLFy3V8",
  "key16": "zJ2EsZ9JcjPPjm1QezkpkDdcD2yZUn6DQEqy17dRaoBtt7okGr6NkuSYwyuUiZSvVpheVnyXuJwY7euoWHuGNDN",
  "key17": "4wyv816s6inC22zfPtBCDciQRf8tkZrxYM9wLZQB2qSSZzZPx9FEf9Em87Te2Bvjpod2s1vw1YgbrR4JSFYhbYRd",
  "key18": "4VMBCHRY1Qo3cA81TvNRTT3r3QHXSyb2EZ8jnu5KCgLtRyiouVtt29B8RqDbZa1u5iahD6AXxswU3Gs6WiPVknW7",
  "key19": "56WqkY8JmMCUyKSXR9FbHuykLdHJ52vLKqQLRXEQQLXeK7rfm4kNh6HtCsE7Pa95xNmoFd2wUS2vwrcvEgQWJLrh",
  "key20": "63JwL3Y5QNdBenEy163vjcCyR4FcvcCMEEgYeSDqaGRAHW9gBkHELwVb9A9cCpujGxocaYuYGCyv4baGvtbWKoZt",
  "key21": "PCtvkuZKN5xxXG2xc2sfZPuLCoUVdoLMiAFaY6fcPaHaWLPFhuLYH91zpeYKyVXfoVq2yFJ8YTtDgN8EjmBDxvN",
  "key22": "4hhHWFTvKJKcjkZQC8aL3jEGDx5G6QQ9z9ckamqtu3UQNRFGzSv9732AuErNWL8tw2aK3b1eo1vwKcDGJdUEGR8T",
  "key23": "2QByPpTAFQ8VGy58vUoPeaGeia57iJd2uy8pdgaKescbbmbjafcQsQbK9Ff7xc3oBiU6zZ3122G2yLzj3TX89WJQ",
  "key24": "4ab8T8aBHmsjhDAiZU64EhbFmvHBgXAeDUM1rcvDMzX2cRrNbUvfm8aHdMptyW7Msmqr7VmtYzLvKTFipDy1ReVH",
  "key25": "64tC48kTqeHH8gbX6tVD13u2sh59pUNAA6S8e81NPCKK9X6Q1sgz6ACWaXfBrEnJqKAMZBAMsy6V3QTvtB4CL7Vb",
  "key26": "5AtB8KEjUgCANdfEdC9R4DaBWjZLoNNPHxcJN29GvF6S1G8oGrmCV5rCCNirP346bV1u6Jrmkh5cdd3zjtgtvUvf"
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

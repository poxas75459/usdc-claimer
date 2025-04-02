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
    "3SMrDi2Tg3dek4z3RAuMh8CyjfpvraHhbZRLNMq28Snchui1sbCdomjtwu3S2bBg8bWQ3CEjSBoZmbFi7o7thXGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WFUtv7dzovnhEb4FwTgE1ESsNeNWUK2u83uS1ibUynQ5DdbC1HW8omek8z9zN6q9VS6S13heCCLFCMpob5JJS9m",
  "key1": "2Q7giySPAsqno5fe8mg9y7PRprjq1yroYnaPXRqDVKSkNnfRKSWB9ciYjAs8NHLp12dgKq37N96VXAJgX12wHtna",
  "key2": "4XvKZjRdGvNmD1QvQVziVCRKJgYmjjHvUdcBdGPw5jNKmWgtuXExBhVndGTi81CWjAj3ysT1ACny4seTpgtsmCtV",
  "key3": "5wABs84TDLmArvLsKcwfAS3A2t5s55HKcBRzNNKvpUQ9cXHvqG6mEPPjRVDDV4Livnetshub21Hf4YWXTYaohy3N",
  "key4": "2QRAuEYPUFdY7q8ikx1sqo62vdjDzTWBDseYR2TXexoUdciz8HkVDEcXLaawHeHM1zuun5R1YchEDgnZBnAxT99h",
  "key5": "3fMUcyfjH9MRrZj93mNTNLJHxK6Ec3x3XYRVDqkNG1zf2CpuFLqBMkKCb7M54ZUHsxjixowsPRitqNLdYnLmuGvT",
  "key6": "3GCsFkobWGY6rZR6zfy9KWSm7o9EayCYW2gzVvekWXdx95h2dZ8WeKuT6coN7poRJ7ipvkGUdsE1R31GVuobe1pb",
  "key7": "3pbug2zSNEqhqG39i4em7B9FbSRma3h4VPGTSpazNtfZz9XdrAxjkwdALNy7xxnm1aGqRbmiMKQg41kwHD3HCj6m",
  "key8": "21QbaQ85X2u6Hhsd274WeHJoz8tmAqzzooCFNGUcE5EwT1jfrmhkG3aHBdox3RRppx5q7RvAeBeV6RfQ29hVjxnK",
  "key9": "3DNRNAYAeq5rsDKb8v5ek1ELaUjh5MvTm2aqNNtztJp465EpokQt2FFhEJwkPTqfXwJjgS5RS9uNKnDityAp6ju3",
  "key10": "2RVDAWF9875pUFRXUZfnp6thqJeNEtKd2tmYNawngugLvKR2f594vBHFgSFfozwA5egDPGjK58fC1oYNNBurKkv1",
  "key11": "4UbmPnye4XfjVFCDhVp8CeFSLeMJg3ifSZPkBWBHWietoBSyE1juGgS6X7RYEK2o3Gd9d7q8T2Mksz1LSmVCJEkd",
  "key12": "4rJSKTZxxuKWovztn1FVGUQw77p1tXMPuirSgEmFztwiB8ZRMsZCWayfM57V13iE8GeRQfnh1ZNmKYbhP4J21LY4",
  "key13": "2JdHKxYizQWdvf6arCmkffYq3qqawqHwh9Kv2NeqsBZfzhu7ph3Ttx2t8bJ4YT1B6CqzYZqN7zyAZ2kghZY7x46p",
  "key14": "33Hs7ZLSV4RFd5MNFLRyzkPt3mJ2YbH5suDjuZnXbDWViUiHNXBw6eouoYrh1VTV5ebjUqac2FaMn5W2cLT92Ht1",
  "key15": "2PqkHrEezw8SEFxd4fwG3yiruRWckioZk8qsdavJCe3ntTyVQoQV3jnLg1y33uqbCX3rbNRN5dd5MeHXDvixbAvb",
  "key16": "2k8MXRK74A5UdZJjMEpJxCCGuiWnmekMnMDe75g9FXhDLTNZz1o5QMeK7YQC38Cf6np3BewUHoV99Dq2ARyRfGLX",
  "key17": "MUJGLbNfSUDUzoTuKo2sQQGFy2gD9XYR3jWkvkWsYAjpZ283Rs5tDi8rMZtzAQGLMmiyEwiWPwja4qXGutVDHbv",
  "key18": "2KqV16QYGgFos64UWgNQ9kpNTnfPHzCP2V7Q3HVc45eBars7mpv1ChzemwwAaPeYNXLw6AdQLABQV9qhRQaRuvsA",
  "key19": "5Dcm71UaGMqfMwAPNKpSc5zbzzennDJd7Kf9nzFK5y9QErHiUqEQqQkT367phhtGWauEXp6WDnVzob7swBBHrm3w",
  "key20": "4dcXHn9nPNVx1heFSPmEMYNKJeGTk1y5QUSTW7LMCksnXwTaXahTkqXHKa8hzAdiSmGrHt4cRG97Je4vF7rpcTDu",
  "key21": "83Hb7PAB3KenC8LP94G7p3SiSQKdY9mhux1rNCfsbkpRARGqNPkDtRyNasmbjWx346NKGPH4t1gAm6wi94Ntqw5",
  "key22": "66epDoM7FWfA9BNANivAFrU4SLcRJa4ZCkZy9i1FnvCPxzPd8hUZN5ZV68cwbQnVF8a94Gsh1Ws1Z6iErXH7Fh64",
  "key23": "4dR2yAC1qS8dntd9nqQYnE34GRwJfdBydys8KBCKyQdiB7Ya7X666BfaDsuoVVCCGCGcjKcQFoZrYJbEdfzsWJ2z",
  "key24": "qsQpkC1b9371CygS7gFrD9yV9FpRG4XT1cWmLcviUd7VGSLS2g5LEoxav8hBdAqAvK6Bp2NaoDoz2eAQHFYhs5n",
  "key25": "56d8DohEwxjMmfA2FeM72yG3ePGmJGaCHbzQQb88pXpzBRYne7a7bkxWPygUBtchrD5ZH6jVcCiuZ1VsZ8G7ahhS",
  "key26": "3QSpqzbBehmj15fqqkLZtzRC3YJtUZrSSGrmwXFXY4BqjC1CxbzYJkqeN5PT4j4QTMvNBMPhTKaKEm6C7NhAvPjm",
  "key27": "3ELSw86zjemzTFF7k8qibXyftDp2Qq6a3GVXQMi3ZfAEhqgjFsW6CSXmynegFEi1UwbvTBq6o28UPZc39Zai8JVQ",
  "key28": "2wE97JZBpQaGMB41Sv1VGjScXk93sjWy5SmjkhqNnCXs6M97QoCye1pJzHELxTVKYxcdRCnSNAodeiAVoEyXK1ZG",
  "key29": "48EfLFN3SiPzQPJdkiZ5mbGjbBRuSCZiEj6vbex8D1W6G1pn1tapeJF1xsE32gnLMTKtmjhJMSVW4fY3usVg4Nud"
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

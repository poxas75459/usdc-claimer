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
    "4FE2ZZB7NLCJ3Na1fek6vXEVbcEGj5Vx3sKC2ShcSnMXPNEwz3YSTS9gGzaJpcoaoN5tcZcDdKBKuc9Kpb8bce3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PQ5VgjEFL8J13VYCAqUjAze3uX3uBJv2PCpgdakCkLVAEgrMnUnbN3F64B1UnToH8GBZnaSUBtCYVMF3X9Uandr",
  "key1": "28vp2ZVPTdqJVKVFWNNgwkMsupKkjYon2Mfjoi6zd4HCSsQchw9srFBDvfrqHuaUkFrPhMU4mUtqo5FLALvtJrrd",
  "key2": "2SQkuVAykMxbrzVGQu9eZRicsvcXU1jj35pPqRq7j5jLjCpACNeBfaH5WfaxPqXRvp6EmUBUqhb9v9qpeaN1pVVg",
  "key3": "4UFUCiqvbjpJ4hzoqFnRBrArMwK8t2Zxrtn7SBx9sjCsnmXRoGoFoifiaSuDHfYVFS4DngH5bXGp3Jr6H5scLJRC",
  "key4": "3SWkwTLg2H65sQnvwY2ohhcgkBiDbRxpRLJWQzGUQWZ8YwUe9wW4rfkBjNqRpaddcxCDxwLeWB4SzaDViKU4rkhB",
  "key5": "2esMBsnRcLCBaYFwMGoZmzxQGUCiitKtSs3k6uuYUtgBjhfzUJqyjwiKrLkfmRMssNxSJe7aRunHhGLJNEmUN9Un",
  "key6": "2XV63sRXmwssQTNFBBa2j5rpr6ywFYhHVqmp7gihSSJ2eVs15QMwXfbWAoDit9UV4ZUkdTUfN5jRkX7ZHGFk6m5n",
  "key7": "2367fTUNXDvKczk7uUK75vn6uwVFNpukPiZ7YEcDRVG8pyciwQLjjxURzRkbVZpk3VrC2F2Mg2BvJvREbs13nve7",
  "key8": "5JrNHgh5KRDapaqxTCbLRHpTYtXENj7Q3J7WZHHTvQNAjbFego7trGkfJWm6yp1V8tuZEyNg47nA3mUYoMqd1w9b",
  "key9": "474wD4mZtxa19ArhkTWTnxMubYUYiTs7yHnTSKQTygMD9W9ApjqfuK66E3eqeC4MWpX8CWZa87V3pBoYKR58R4it",
  "key10": "DT7FWx8JFpZ1qCVY92rkHubNb8c7ifix914f3zjyb64GMSRrzGpE5auvUwr4vtjzJ61tpaMjk34U2dkKX6Bghkc",
  "key11": "2F9fC3nS11ZNBy5P3ZkbcFZSApxRDLKvC2eQipdu8tLomDEUbQKLWoYrAyEP2Rhi2AFTGNEBaK2ZyG65KBA8bTQX",
  "key12": "5wJDJkn82wpuAm2ywfD1YHrcTx2qHiszcKTB7t9LwbYxM2ZpG8vAov2DhGCepqhZoTaVqxYnGbgEnRQZBbmd2SgU",
  "key13": "42rJmsBWvBvPHQ6RKwJbJSaibsiVvwMoGSszg6wMutaHwbo3b3WmskDiUB9eKj3AF2HuNGv1i6WyeUqejr1PoYgX",
  "key14": "jo2t5Nk1Up3cirYwGXLkYanivPVDRYQk7ACLFMFUwdZbz2gZLDdmfEn7JmJbB7WGRcrfkS6C9snkx4pAK8r2b8g",
  "key15": "2XpJCP4hs4Wk66qebtdFeQySd7FPWd937w4q4k1yTxKPCzKvjmw7Z5xJco5gUeh8QazeFDcJ6y5kSRyFZoT8V6da",
  "key16": "5d7BjTyEgV7NtcoWLiY6zAc5KLp6TUmBvbp4cQpu1bhg7SRiwSNrhp8TMLVj1yodCnLzyqkUncPLvN7kV4TxMkvt",
  "key17": "3BUzWKAFKa6U1DYS84tQA9T3BEsawvTfVpsjU63JuvrioTvJYiE1g1BGSH6GAZ65RAjWPWTerp5pve4KEuKqsaYj",
  "key18": "GzHkY26drrHZ5AJ4ZxrxNwLscxYqgCsJAvbwAqhyQzFJRtKcoRRfh4H3Tf7h4MoPbzMANEDDsgbCtqzaTngJDaU",
  "key19": "3RxKVuCrKgUpgYwq3arBzgnYcEV3khuPoRP1d7wvSkYpzj9XSjYQ8UtCXFL7X885e16qMqk81mfVcfar1SBt1v5r",
  "key20": "2rL5hAyR7WdSNGBdGyMgfcEj5KnoAoR9UuwKF9GthdJUbRpcdzgPYSZgZEfMUNBnMt6UZTbB6Cphta2AawZtvK43",
  "key21": "4rF87p8RRfRRujAetNCYnWt2oXBRZ1yEv9m8ApohkuoejhWqcuGpsjFxAVjyB7qzybbwWRS96RjYWYhnjfXMFWQ",
  "key22": "3qjW3CNFTVRnrHGK8QhZfuhBz8QbExQUeg6k554xpA5zyDPscf7ikXVP1fhMmdYfki8Jxw2Lb8uB8xB2YXR3i3ig",
  "key23": "U312TfDqQU1seJFEbiNg3UGBjak5xZL4tA78724V6YGFgjPvEN1VgoNcuSpsHYN1WmDUeYTSkZkBB7zjQmwuKLz",
  "key24": "2J8ybQUqkHJMMSyBQPFfgFvE2sQ5ZuN7Qeeakx312ehcu5FdVLYSM9yvfsHXPmpEzJLFLiszjmCCGFcLc87TaJpK"
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

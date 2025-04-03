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
    "41UtyLRgaZgmC59U7Jo5djgsJDiNjJR6ASkstrfsHuVLXQTQxosn3phTEcw7oaqDGpqCfiiS6ZHoGVsW7ivvz1cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318TGSMgrYip73B8VsgFCBWMPfqa4oPsJUmu7DbyeSmH4EPYkd19qNF4bXJCkyRtKcgVe376PyNb8852aTUuuEgW",
  "key1": "aWPp9V1B4tSSZtmVahL2413rGutKg2DHxW3W2F2YHfcTCWB9jv8RKkocDFyTXLt3Fw938wbcC4RvG4oiSGfbGcR",
  "key2": "5rCJQRvZvmwndE9GjfUzRarn7dWg8vux3PA13AKBZaafodwirreZm6U6N4ZP3jEwMojmjFUBwyfwSSYA1ZaXpgmV",
  "key3": "tZqhY1nMPtp5b64QJFR5KXzwJdsNF1KzcKFqSntrPMKDuHGkVWJSKT4SfMV8gPfF6KVeme9eKDzsccidiMHVYQA",
  "key4": "3EPt9mg2wXSWQK47J5WyVNo6mnaeaNMoH1Q98WUbvXYmr44PbTXwWtPL7MuMbm1SARc8AcqjQcYwuG1Z8JYkf5xf",
  "key5": "ujePULR27tSBYrstxVn4BiVv6uzgQ1n8hFhCCTEcidcDoKzgJM3qugJWNgje2HozRdoPYEAbzxvbMqn24UUJ9dj",
  "key6": "3tDnS31gmkXBNk4n5tFLRvBXBesnWso9WDUAZdoqZrkcfTJ9BiuBsBXg2J9AJ8mSaLM9CAPyZ8vVJCzh66TZtCL6",
  "key7": "Fk4k8zcBMfQ72AQKZZM2xCDJpHfUYM2BBhDo8SftePiWW6mUUXHzvz7vSNkXAKU3pTuXB6QgHB1bxDZKs1nwJHm",
  "key8": "5WBbQKuFYTBqzaukfNmkkC8gPhvDJBKymT9FdtrHfARLwwmSMdeWD2cApsoa7e73f7qtQoWoLZNeyWCbujnWcdgn",
  "key9": "4MdXHQUfyYT1yj3SS4Eb5TDVyCgUV1BouTBuaG3PjNLk2mejapxgBMCAsFzScA6j2uAWxeaM5xYkCexrnjDGzaSS",
  "key10": "5FJhTjzPyheSHRUM4vjUykhtu5XTx9s1SpmTjbbRS7zaCD4guoVkEKYyvpyToGLmWVAeAG1woyBHdnk6rR1LMGMd",
  "key11": "5ub9SSAqRoLnG9Ra4ZpCW7j8YtPJbAqsKSnm74GtY1kvMar8wNFjpjgJB8dYqhb56Beepd9Vak3Ec9dob9uU3y21",
  "key12": "2mWLE3rTeb4hEa6jotSSWGu4Yxkgt9cv8icBEC8AioUywaiDyJbjk9LgU7sLjJwZz5bzf3VpahHLCTvymsbyzt3Z",
  "key13": "5GrH8XReG6ndrpAoMbZuvaxtxpbLBSUE7LfydVajo1ZoUV49rfW9had2mGxXdVG8w5WFnVtj8kwBmkP8ZyM7SzKF",
  "key14": "4x9ExJGLtxfqcjwqxNaf7ryN5Nju1vVTrXG4tdsbCSP6CMaq3cCQAjcrbvXEUKGSEigzoCeDkm3wKT3CSE2ebhGK",
  "key15": "oQ7Yz3ydumgj7aWzHExNKGAispSMBCAdM435BJdkwuF9DX8nwuQpbAKXAtxLwa1JCnSKG2QQeb9veYh6geTou1m",
  "key16": "3pqYzmRTFTmjdn2dEsZ99jtnqjgVzcSBtp7jo3rHamhdodr6aPJeWf9B4pZ8QDbXpnpkgAXUqZv77uDYANAoU97X",
  "key17": "5VZFy1EoPcHhmkWT3oKKtctXTEWnNQoMKbzjQufo44zRLFmMraHPCi5SZhvm47Kk5xG8A3h7WNaF2sxnZyqmfYq5",
  "key18": "4Qm9MJdsd8dvZ6shjJThNfEy588NBd3zCEDkDgDXEGPp3VuiVueR2g2FphFGcppWwXbVRiGwEe7GmaBbEPYrQopm",
  "key19": "GQ8xL5r4tkKrTaPvU3HZ2QwuKxqkBY1eDPbzofJkoY7mgNBjjXXGnZ9oXQDMXyAG44e7ryY6Mqg8eEmjKT7fiXQ",
  "key20": "2YUPZLve6yt5FTnN6etsYUWanbEXRURbsF838KeSGB6wERzc26RS8KoUoV1bav2SzHes5PyiuXcnWjFj8FYhudBe",
  "key21": "5diejwM6WbMY6YVJQn8VzBMTVPeqiaMdua4ZnnMWWKpNfDNNhGhygEBTN5zjy8BkX6gWLoxjprHp3KSYfPurbFUc",
  "key22": "4FmrW9EmwQ6wfrkT2YqfhhYbhay97vA2Emoyhp4ApagHBfuXdSm2ZnExRHpkzcrdJePsWo2PABwed8c9ikX5YmRx",
  "key23": "4v1sJvsEWpnfSm2oBGkd13JCxDhEzs74TqhBEZz7R6icLeVy8FyYq5Cb2m2CaRx33sK1X1EAZ81ffT3qAr6vnDd7",
  "key24": "5KiKFD1BgmCXRU4BM4mezFJsBsLa2PxhazLvaar5L8hhgPRnQpR33QsiGPEKySX48QTpGvKApAY2pFcKKPfJAjnY",
  "key25": "3jELGYgWySMNJBAJUTavrGisF5avMMuEr1wxVEpbqcURybjVVLvFrr9YZNXdGmHksREq6tCYkVGN63BNzwWnSE6p",
  "key26": "4gCSayTcANwGTtKrwJL4rmasdjLbLCR7VEmXppZZJ8qNqK3bFrscszRWFKJdbcwMQF4Gt63YDdkfD5uZryzM66sN",
  "key27": "4VGgAxCzx7LB4vNFu1okctDZQN1GfcvSE4wbctzCE3ufHX7uXQJnuof2PBebmvm9DLfZw61EAy5euPCZdYjop7de",
  "key28": "2382wVHtXx7UcNttSGbEkEr4ujPDuWLLc3C8aeHN8HRdA1EBLjerf1P47r8RdV8RGbpKtD9KxGaCYgLZVVK7FVoF",
  "key29": "3FTPwiUM93SQnymCRkkp9ARFd3uAxVm84QamdAtKrM1Nb7dVeAjamSFNALeEndLcF9muPNZYZJu1z351ghC5r9rF",
  "key30": "39iraJ5rMHiUa1qdvL9v7sMZPrjcu9nPPAevhHPmocjq72mmBZPWPar1yF9dnnmrc4JsVqDVGNRmDSgLEmHPZpXh",
  "key31": "89bFskCzsQLXefzSqfaoaqEMbfUhEKdFWbpoJXdWKLLxtz8hek542Fhe1RSkwSuXn7oiXLkBHmGcnEPf6mTvre9",
  "key32": "3Q8cGq6dhvfhMYvLQep5Ze4AggJdBkXxiPYbXBK1f1afefpdw8sWtnPT9P5nB81BjChh5Zt2qUczRnGvMKibGVKg",
  "key33": "2KeKEr8MJm1iywszLwv8Atcpwo27PYTZPLYN9uZbKEz6vSsKFfBcobMVHninP34TzVqTsGCarMqbnDjmsZBiQqMB",
  "key34": "2D8YQM46WhjZFCVeiTWYKzWSG6LsERQooDt7agn6otc57AY4fRLauJdZz3LBzsRwMYq8Ktqg8WBWEf4ZZNSco2kr",
  "key35": "3bpFi4n3qvrtSLmqqTKhtD8URcnHhHKWVCafLDc8CNGa9or82efB8cbTEVF2uXTbrtujRZcPBdXRNGgj7CXmQxUJ",
  "key36": "23SMze1y85Y3wpyRHrFLLgWWmMyq3Upib1LDqayiHgYZV8CCT1sj8VMRB8PATbVGWLq4cWCFRVjmRMNzChzK8j5J",
  "key37": "2yGUfyiik6AjPaxYD7vr5FGvwmnfffp8fFW9jQwebo79AkWFkukHUur1RkGmhnL3o2HtpJPwoNfZxqDiVRKhHGyg",
  "key38": "BP6feaaRr5woeKgA3zxg1fvMeZiccYCKzyyukroRo6bVQ7czfjy75PzLHi8GtcjUKd7L4D8hRLkyEsRP7ekyKwN",
  "key39": "3taMZvtjXMQuduHd92AqRA3qzLS5QZ4NACXX5bxJpUec2PdmmLVRmJupMJgpgQmH5vx1gwwszAd9kyL8qm6kSwgA",
  "key40": "4R6J8xZmvbg5f26L7c1VdcDAzRoNZyQ8BNW2HUcxMy5KtDRDfxb9Mxx9Bqj29bFNJJpcTZUbQWSLb7ZX5ZEFzsDA",
  "key41": "5SJUeyviyZcK5jezD2X5eU7GbTWSJ1dvkvgBTaNrQDF6f9T9c46tNewLwJCCno7TNTkZkMk6qUPsXsPvYjLE4fX1",
  "key42": "3EKaN8dPAX4S4UDgsUCVqumxuYhJoH9Gq2WbtanecJrx5S1ogTPtwsopZED3iri69L4qY86ZEk5Ws8SkHejmHD6A"
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

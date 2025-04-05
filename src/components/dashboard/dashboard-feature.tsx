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
    "3s41XoyV5tMoxd5bvKzhGZtModNQ3TvhSiw9dTuiFCZFvopWnfpvjnk8AieVFStdMobBu66dzmHAFK5aBhn8uwN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NU43CgtksNfgiWVNeHvooGN3YBt7ZgT6TUkoJArJYMLcLB5jmP7x6KRAw5xTMc92sHafD2tGhAvmDRSMg5qiHMX",
  "key1": "4EdCqShtP5aNR6YXiSxf1ovbZ2Ad72MtGYZNEEEW7NJouzFHp3NDTDmVQmKWg2ZxzovnaTiQX7c6p3EJEJPv4mS3",
  "key2": "3VcgSn5M9P37h7LwyPEUtAjrUKpjMEciWmE5i7MLrthR2QcrSHG1hSkhiunAMEuuGELeAF69WRN3SmLK7JXaYREb",
  "key3": "ifWf7HFSqn9MYdC2z724tAFE7mAmc3fYWk9WmtVKa51Lqx6RtvcDUvuo6yxx22D4em5r6472R1dsXUX3rayWe1Y",
  "key4": "5yLRqgxZ3CsEHmychSdQBLoaScHd5T6vhnWfrh5SBJF43jqFRWsmL34dLMHne4ezb383N1DQR5opLtZhBRCi6kiW",
  "key5": "MpAfjpnvfB8BjrkbYzfuDx9hfgV7mKMbi7MiLZ2XVX2iWUCufdkw8gvZ4T7dsuZqCmHtpS5GMESWqdQYYXihZ21",
  "key6": "4TsfUrED8Yridztd5NLH28FrUFSjvHcJPBXFePEhSdGDhcdzHNKtm21gQYHtaP6cu9eSaurCi6BrfaXEumGBVJpt",
  "key7": "2Sbv4ocbxgMLpG5zxFefChXwhMLVYda8jQ14HyHCGtWoiyVn1CTGdaeXT8fMUNCA6EJw52FQXaabVp6JLAdryggv",
  "key8": "VnRhmTBnuJsBE2m4NGL9GyyJWztdAh7GJpeZh3sbfPMjWrGW9grQ3FyctQ5KCPNpNhY1kqgxt8p3F83rg7izzSM",
  "key9": "5HLYXJiQyv8tCdepGqbvDCubzev3gB6jaWQkfq933q4FqULhetXn2TWQ7VDvHgQSJT1uYyVWKTCSBqhsfvqRLAsM",
  "key10": "3EE3zJUGPxfUR7bpnDJd33S7Ft3eN9ZUrsNBk8ApeVqGM1S3JcLYskudVfCyQEUDevQwspiUVmNdaBWKH4azfWbD",
  "key11": "2Bimvw1xWNvhbqcTwUAZojZyrG3koTnuzjcVZDwxDs4fziuYd3FfrJ7Y3LFqFBQBtkK9LoVPkK5RjXF8TAzwvE74",
  "key12": "4TSzSRkEWXd5L2kBwAy8KcM9mQeDXeaeDWhPFtBqS1cpFrzomUZ7aBsr8J3K2DqXn6gAngfxvYSZaUU2RWWb5y1x",
  "key13": "77R2LUBwFcLktDpebvsrxNvMZb8icnmEQkXsechoREhM94eBcDvf7tVQsyH9QRZnyXmHQ1hZzVMshVCZoRJuZ3f",
  "key14": "59bEf24dzv8caCnRDCDVMzTeUQscruGkFsL8eBrjcD4FeKfsiSfxvqLyWYv7jFRkH2hyyhBCatM3yKRhTh5eAsvC",
  "key15": "4vyMa153Bfq1hKBtEtmvVUQKwGn13ct7pXsWqbqUaQo2GqUzcwyH1GyPKgNmFyLuZQuHzoG9XumxeoszYQPhESQm",
  "key16": "3uYUa9Bgzs6fNBADmaUeoRRWgpuCZBEtMBaQJSkXTrCY6XtRbSNcPqN7ACrYMxB5ESRWd85BNBwMqCGiKjCZY8e9",
  "key17": "3hRpTV6mNjSQwLtH9fhKZcFewjKFpUAGmfKauzoZHtBmPzfjaQARoEf33JRTwY1tsb9wzaSprfRasyeTc1ueAxhw",
  "key18": "4cekDew5wK4pwnHnNpbd12hZUSFLTtdgo5xGMuhQP3xRiajhJgS8Yx2v7HSY4JrQkEo2jjJ4b5guHDxAmxfx5jrY",
  "key19": "3rJUq7WFJ3KEFPdYFsAWiA38a6fVvXoXrLrWJWkNyHdSg5cjMU7GcBusecySnzAZgswsBCT9A5U9oG6zw5FDsquy",
  "key20": "uWyRYuxJfgcactRfwitKeCPRFQ5TTCmnsaE7DzeYyHf8gZCKXugTje9XkYXPqtS5fXDcnn5Sscc1azxastqVtLJ",
  "key21": "3qFkXbkBQL8gWuzy69po9koEpAA8kCJe1F8T5n1nCcc1jayL2mNhjCWnQSB2SqEXW9s6cnGHuNUnbmnabf5goLtH",
  "key22": "2ngEfciiT4fzKdT7eEEWURvm1bC3rAnQBE1zWchqoiM9v7Qeux36wQgsbSXtqzDEVKvvJ353fMefMYm6vUXEhQNu",
  "key23": "5L7WGJPVAVRdXDtS1hn3rNfondFXQ5wkvnwYXczorNdHPWCnnmCPLqFV2fu1oBVjs5haJdFAGuuwfXxBVoZoJTxu",
  "key24": "4wKorahXfbnFLJMikW588sWZ7k1pbBq6QTHWt9euqa1KYx9U3ox8U4MdYfJmYKYhpRWHAYeKZ2RAaSBrYNYyCUBJ",
  "key25": "2AknW4kqJSXNhnDixhQvTqPauqAvEw1n4ZAHLBCeDTMoTbdEb1ygPL4rQgWEWTJ5y5aXBbijc4SErR1FN6tcfufB",
  "key26": "56uZ46yMEG4DAHMJV2MVa9oKro425ArcUPcTq54S7bQdSKLsCumvBxSEHgP8QGgj71o4KxZkGCH1pvQJUNdcnhio",
  "key27": "5mzWFQCTuAXxRTtw8n8iBghiBiJVRGTrCjxgBCNdCTRHnFZxDVfFFNA8wRVZjHnRbQiKcno2HRDqn6hidWzjqdHG",
  "key28": "2B3VpyaBoF8ywfeyVUPoVmXYSXAyTwXC5QYB9i2dEJUFSoZXY2DsUHZ89XaxxXdmge7KijsFPkbUo4zi3YwKEbrN",
  "key29": "2gge417zzemtenP9mqpnf5k7uFUEqKhzrAfY6CzAXbGffsujqRb1UPu7wX9JjNyZ5CKyjTaVQRp4VVYMZh8q22rC",
  "key30": "2P22uZEbpiPe4ozHmRELuFEw5kSjJqD5YwgLzXQrWJdoramCJSe143JX3PDxqUu9QFvezFbbZ3GT91pqQ2an4gGn",
  "key31": "2fZLL9NMg5vSqTPoGqZkFQMmfAJANdKZ2ivZDFcc5w6PqUs8uDt1HFcw2ThR7Es3x4rqWKK9chDUmWeWGvVdbGA1",
  "key32": "3J69ArB1mQXbQhzJf3Whzus6EB2SJq2N4tsEB1s6xm3rc5YAaNK1RjNLm111goJBYY37nhfdKzxuSuJaBfdvHcMP",
  "key33": "fkDktVvFViyGx17G8Bpu84YA8QWThudUE2Q2Ef2tHAm3Ph21zBYc1JXyxZsN5grZc7pvUuwDJgKBAUKCyXkUyik",
  "key34": "3Vb96erASjJB6e9GfbgBwmkhkiajb9Piw68kgnHa4kWSQK8buqbYidCYaZJv4WPzmoxJ2BM1CdY2nBnRE8Tjvt4J",
  "key35": "DKvmZC38XpVrnx28JkKBFqRVNwevMaksTezgjm3RdTeheqdcrr3uwGUfkTpQnHtZRmxT8HWBL6nw1ZkLZf9utSS",
  "key36": "3gyDMTiAdfyQuNTEdU2mg8qaRKAx2827AstYwncLgD6hFZr5LCMWhKEpqug1Xyz3rrZp1Dh7ZMrRirGBxip2hwo2",
  "key37": "4HsSHPtkkjebwYcdPDPz1rNJvigBrB9eDEEbsrrS3GHcRsk1VRDaCpkgLSq9QdT7yfCNUNRzAJpRCkfztxi56sKK",
  "key38": "26YEXv75KFjopd3gpSZXWpdqDtWkWaihdYjee4UzLiirEtgQhg57f3nokVcUWt97RJaBJVp66A44MT5Ngry43tbq",
  "key39": "23viNyWEwdosCKVnj4w1mVvUqpisTewNAMrr9EUjhZvk5F9R8bhVepfUy865w9Vn3icbD5yTNauJeqmJ62MhF4Ft",
  "key40": "4VT89xmhXnx9dgzHgHLK6WaMJ6dVEyyZAqdDSdKGYbLjonJYLVyJ7ANAGHYx6QP8bqxbjUoC7wzwDrPPLaaibur2",
  "key41": "hDrFemnsMdXKDEEJ3vsmz5TJyb4wWswa2j5eDY4edmun8A7KKKC2B84y9LKieTDBrzC6ga85hoQSHpoDpXxDwoG",
  "key42": "3DLYVT5dExB2tpcPGo7FuMipwYvKzmdQSRNZtYULRbo4xBWubwR1V9rMKa1KFV5znEMLSaHdqaL6kPEHSChpvdhp"
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

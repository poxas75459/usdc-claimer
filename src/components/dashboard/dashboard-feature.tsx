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
    "4PbZbtCqSViCeE7eHj1qRFoSDNBRpVNZwA7po1jD2J9XtkY1EMNWeTer4KqdbzUzU1aNJzQiFE2KC8qGh2LuG7e9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FPhmCW9eFtRwHjEsUzHVx6fAxytnfiqYx5hgnepU1mJWTQvGz3Ad75Vt6oZPWnmnK64MBu1soPNCERbiBk28k8c",
  "key1": "3cZfnF48z5PGfbXFP7fvm3wr5F7M8kQB8XYQ98S3iHejLkffskooC2Mu8vsi1czCDtt1jzcG61t7XaUZMPFkhF6t",
  "key2": "5czGDV61KbH21zcWziYDo4j9xGeXcRtf8LypUyjoWXEZ19dUM6JRVvBJUbMJq1iZC32f6V2JqwNdJdcTH4okmvdo",
  "key3": "2ysyiqnZKwZCRK5nwwYc2mbEL2EpUTJEvY4XtK99GHz4MFgaxm6XWTzZMrGpqdcmKiHvPmZDmDpPoJ5rCuSCEkGJ",
  "key4": "2CRabzTSBn6jCJUkV2tWLYGvs1ZgScMDJ7ntwnTndm1QePuGUZAZfeLBAqZorpQx37TadpQ2nfmAGndM2qgGzkGR",
  "key5": "AGXwN8xt5W8fayfBfA6djGA8d5PnWY8gqx59bXiViyy8Cfuduu59ZvrGjPEQ5XGJzCsiLsQrRY1CUNRiJSeLHWD",
  "key6": "2cNurwFnPzTAVQ1fXQRnNyMHSmywicMJKPzyGZWEwxuyUoXWvTkQG7J6n5yivYE3bJqqSpsiXdurJ8uZZbgvShtV",
  "key7": "33LYDKfsQ8K7UuRQ97pNdVztodpdwQA7Jh436EenGxB5m8GtMNNLCE8BtJ6vSMuNvGD5U2bM6HrEaCdhKw3LBVFc",
  "key8": "4kBqyra5hFrGiH6FgznBZAdSNAw8HDP9kmmknggkvwdvY5qVdzEW7VuZndgF49xpMUWTajhFP1QiSMBFSZvTmLuN",
  "key9": "64YT5fAVhLzBjwdtt6H1c9msiDqDg3otDcHgVmftK8hSv7LdG63cHXVPJGLMfRRSMo9c7dLpExUNGr25Z1hRG8K6",
  "key10": "fd34eidArB7vNemMw6ZCG4qk8U2mNQaigU4b8CYR39jTi5NQvEAvLhcR5Y3F92XFyAmV5tzyMyY1R1fZYLdjw2C",
  "key11": "3G6N9zCGzUk1CDPKA5Z78QpP7KeceFxEBoDTqGyyW9qWjuV2hEtgKDc8mpn9R2aXsXV7aWMnMDQmeAgRcgXq7x6X",
  "key12": "2QsoYXLZ9Uha6ohmrXnyaMHkRhToc9BNRhk89qB9bnZwRQn7zuWaSk9pX5KvwSHJBUUb71k6pQcXwQLCQLograH7",
  "key13": "2Ec8aqRJmm5McapfmFzyioNg1V7JXDa1Pkb3WfP4LQd6mkRXu26aL53z8bnUgLZLr7pGYGj9FEFnxCi8JT1cYQF3",
  "key14": "2hc3CnsPQi16uo3hL4rZ4f8nf1BGrbebwuMrbVNvM4YTme32krX5NW2m55YgSNuJh7YfP8EPoKjv1BHiJ3cahWHG",
  "key15": "2XbNhnWo53QcnQsCQXyH63ReFyBpvTb67MikgoqNLkFHk18eTNBJxSZx5zTDfh9taewd1qjGpK9NGdAkSTsvTMM1",
  "key16": "2oiw6H6hVzgM3yFR3HZTxZ5fo9NB6nDDY1uNz1B1LeLURdeAvp2WjVwLUHizR4Foj7RkMeXzo36oSbkvQwgTSzfW",
  "key17": "4saQBR7414FtbkywqE1uh6GP7uq8GHGoUmcy3Lgy326RwofgXrQbEdBUxASyTPGVTdq8YKpPFx433YGfNaR3MG4T",
  "key18": "E8zUUAWfRRkyitqR86gk5NZ1X8S2aBiRDaCqwXQDXD7qtUDNiMZfmokXVS1ynYcGCBnyWtujay3tdP7Ec1NKe3e",
  "key19": "U1jfojRdPKHbKxk5yFJH6smyDM8LdqXLP7sUSt65ESJLifew9JkRzfUoqN4PpcqC7tBdxcaah57yjBep3BmVuH7",
  "key20": "2hDYp9ReWABPKbHwAicHZdw2o3ZqXCcjCePtdTrm41qq9UBAw9LsnuqxQA6wvrXj1QYSDVXMAGUBJKPjjFtX17NU",
  "key21": "Rz7acUs2DE1HUuY2wFPEhz5sFxCSHHKMrXwfuCsNt4pozzxeZAh2e6uYixAkJg7wa4cobhoUkifnZbQsJXGY7JK",
  "key22": "5ZAXLHc229DyNzjUpXGyM3G7jte3FqE4kTECCZoT2n1ziu1mVEz1U9Jd11Y6XCTp7xaSYTxWbFfpwzBFrDYQfqRj",
  "key23": "4B6T2D6HJSfMSQHdZUpgc5dH2goZZh4MVP4oFtmeb9mU1FUET7JQPXwReXfQumE46JPxUb1cd3tNb13gScuQVHmH",
  "key24": "4ovhC5CyNveN7JkwAZPNSHAm9uKYNf7qi8W8MPQKHGUkH5Cpm1dQ2SRDaei1vapkabhLYqSnQKPbF2mU2QrZBFWC",
  "key25": "3RJurBVL71FWASF3FAwT7snUPtvVUDQACJbsHAWYXcWsej5YvKB9EdrCb3qdkmdwmN4XUhZfCsRRePXeduJANttR",
  "key26": "5FgJecaTPtMcmzzR1Pqpgjd7TCjB5JvFumVg3Rjc7bf9Ey2YbfG4L1pxSVDwjQ7kWgrBXWohvH3gf6DZ3fo4kKzw",
  "key27": "5maRWyAjbUs4X2XYdY1WBUwzYSBVpxnTq3QDPzwYBnaDTyQTCH9Zx53xHnkd7UWLa3jU29DDNCqyJMcnzPBXs3SG",
  "key28": "4rKSHT1hwAvfi4noN4RoeTBoS52uVEjcheBKkhJRFpNbvxjGkfk75XZFp4HTr1w52hybotWCrfX8mn976wr4kfh2",
  "key29": "2NaG1oG46jzV8FYSg4gNbyVtcARkyT88vMi2frX18DRjRLABtxEsNUMHztDbxxkWJxkFLiBd2CaKKmVerHdXY2UP"
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

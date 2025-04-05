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
    "3tr2T9uRdwtpe3NgYoW9S3M1xi1gv8PG5SLaPEKJy6YN8jeFjuBsrc3A3mv9FThVWG4n9FVkhzKXo2pRrn43dsg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJ7tAFd38xN4WuAcy97XYnx94sBbZkGm5ZgBrgnyyuDxFzEKDe2yL2XVcCqaNabG1hmdpHDaBkVEkaZMvSYgfPH",
  "key1": "25qVUTDRZwRDQQWUk6PqKUzL1eLQ4RRsk3FqTtyz4uyPRq5hFfMLT2ryKsiKbhzaPg7CXZGrTeZ4BqcYt6U3daKd",
  "key2": "g87fZmMugmejRyw4RrpmLrkHajsXTphMuTLYzY5FtFSknMaw7jfBWEquDbFopzo2C7UosWCnFo5r84bGshobfi2",
  "key3": "2GwaSgtN6Nq7MTjAiKX2SgCKw9m6nLy6eqd6KWBHYNkZvDmv8NXYDtYojLiBoUmYpt62R9MzEfL9FTsooqA8A4P6",
  "key4": "4qMzPsTmqaXyGcDpFaLQGVzLoGzP1oXGoaZxo1LEtrwQrVGmxafAjEqNXYQfSJbxnNFfHZz2emskti7XymUJxbiG",
  "key5": "m3UXiMNSGDKNNHhi3LBKvikhw7HS7Prwr6sZdaqeuPoXEDDzYyie1kXzyPug8oeW27YDcBbkUFHmkaTiYvLmKfa",
  "key6": "2fecpZD9KQr48XcaerNmnUN5FLW4TPgyWHHERawbSsusyNQ6B4nYk8G4fNStBGghfFmAa7bd35qtz4FT29yzXavA",
  "key7": "4CRLyD4Csti5zpMnpDD3zvMCEes3quKPfps45xGSAPeuwKemmieyHqZuWCzH8Mi3PGMgoj1AQoawaH18koVxRBM2",
  "key8": "5kqcN3Lic6Fgu5yMgTiqxrAAVnQy2CEkBPcNVp69nEAuVjX2bUXYb394MXY1zdCVtkHfDP9qgwfSgjBJwExug5jq",
  "key9": "BpAXAvj7KumqU2J5dFfTjsZo1qBqGL2EijKm2D7K1PQFjaDSSNxM7GgkSNsvRnuZZPgNyEeqwMTya3meHyvWyRp",
  "key10": "o6FSqtYSKPhnCoqekoLtvpa1UyWKHwKgBU8P6NGHUzKQiKQKngNExokQEZhjaaiJ7pNXAx7CzNy6b1rRLtzk4j8",
  "key11": "DXKjKFz8ZDXPpVduDETJe3vjpXgQ8Bw25hnYApTWJGAzvu6ZnPHqBGvi5jwFHTtoX8ebwc1E5kM6ASDrCCaAXiV",
  "key12": "Jma55TDDK6Tqb43GBQQUacAof8WdeGQfgS4TL3pnNQxS1cHB39WpmGkEoS6PGgx6mNDTbtLzycwdS2uKX4Rd4i2",
  "key13": "5GjHG7qALx7QiUB2ouqJeuWofqLwSBNfPoJadxNSrm51RE5oUH4RbLwFGaGjX8Jsh9sEUYpQuxTXuA9zx3G5i4tT",
  "key14": "pMfFuCjfN5fPGAjfSwqLs3bMmAPrp9vxVeMEmLeaXUfWso3HGp59a2qRoeFZSTUzrSVCW7XtijrStTZGYZvLsdN",
  "key15": "2hAbAKXY2iVc1L8vqjzcJHW6ZxgEnioC7y4UZneoV48NS2uCZKzbQsuGHRf12ge7oR2GFWPEPLYZ6fFu1nSAFWpj",
  "key16": "5q2ViP7WPG8oswJDHKnBqb15yXhvsPeYyWZ8cjuffpDR4QCFMALozhRbTLg3vDzaiCU4n77EGDrmkudFjAWnZHuJ",
  "key17": "4RzXdmvWNfXKLAPtQSXbEM76tK8oFMBoaagxHHSPvCfbUkxcDp5rocUvPEhgBj2ebjET3UsuzreLLwGFdkFtZ4RL",
  "key18": "rZAvPKDTs6oHgB5M9zU7RUcTC2UKAzQ8vjUSMwJHVidr73kRREwYTbaxoRhgtAAoiitD7rJeMztJ2w9cbizdNVV",
  "key19": "3bwj4qccXa96sqfn2jv4VsJyaw4Rim3DFcN9eS2ojsicnAqnUCYsoQA6EiPZniHmHTdNmCvVdkfwiffkXQ4zLdi",
  "key20": "65qLnxQYBFFS2qZ4GTTiz3gFe9KZDw3MvPq3s5QPuy66GCb14YV12RYfAHrtM7tJyrfpMstCxRcjJUJPpAfBZSGP",
  "key21": "3PkgpyVYJiop4mGP2HBmB5Lt3SaP7zpb4NM2FmoakmNRCmKswmuAMP2fzz3qQAE8iAUBKrBNK6F4gasFUr44quZf",
  "key22": "4pKAR6L14HKSWusJBa8J7Ua4BZFGhdKCRuuDM6KTwy3jU5MAYkyU8buq7xYLreJYqJEDdBb6uGR2aFKQUPiUSv8n",
  "key23": "5cW2S63ovdWtLTQk9ihA7kb8t6rzoYd15kBJzJ8W1sBM9SopHt6iCoZYcULrkyhZa2isbNsqfXAh5ipczkiiHLpA",
  "key24": "2UMr4n3HoDjRzFGz8eCYUBr2WWfbSWbvib4FETkercG8FCqPHBZ44UDrYsbxtPUtYMwnCwUyaRjrdj8CZ9z8XQ4f",
  "key25": "3KdrVTWyqrxNxNJqxrLdUQa8dw9ym4QKQbEBK45xEp3hNnoFoLEBrJWh5ZHA8zZKytUyu3WCK9fmuoq3Qq47RZ8X",
  "key26": "4nt7PTmq8Zto8XGXRvB3stZJ8RtTqBihUGkfErnnnVP2aRvBSY8hAxbBdVdDdiaAzZHvJNdFaSYZjReh7HdF1DGp",
  "key27": "5scqdVHPFRxr6SRakpPvSU3Xt1uVoxt5h2mTR8g96n4EojxG5Z6er1FvMpKQyxbJKfK3hCUHpRFHJ31UtjdAufcv",
  "key28": "mCxNWVbfuHzi5VvEt7WDmSHTHFqzw5kTHbJZx5MeCPihkSUHSVM8Fp32SaVPntChc9k7bRy41BVAejcsxk6ff3v",
  "key29": "LTRpH38DWYrKv7BZFkbiqi3bNDMoJHa1NZ2pYeYzdEomoqxJoCtUQhcZiYuPXpszSsM4f1LPFemp5LzmdD263Uk",
  "key30": "3CgYzfK19qyfLdmcYZF7yJtTGmQaDNh2ycFRzYmG3VeupktaBxakb2t7fyHf476VHWsXtX2FQgRHkpQYh56fw42L",
  "key31": "3xX7GYD7k5DdwjiXx8NeMbTB4jcD5YCPPWtutuAXUwmDPnFsqhGB4LeuJaYCxh7D9EdErctWioa3nE6HDLosfL8a",
  "key32": "7o8C8KyVgUh6g9hSFFAhxnt1YfmShmjfK8VTpatv38DcRhhN86cpidKeW9rp2D6oyiX4ttRsE9a6sYKH7XNvVRP",
  "key33": "3T1wnEoiqPRSTzQCpmy9iy3JEcBirV2y3UWGVQS9B3HEVgZBK5nkVnEYN7reeRpo4qjgKoBj9CTKLS4fNeGaemSN",
  "key34": "3JLPFqTuF5Mm3efT3ZgnERdesv2C4yMy9gZEJ6SfRLWhAbH6kztuoXhAL5Fe4LS2TcokPY8Yq4wZAMcrZBJo8MAJ",
  "key35": "5AEDqzbwWpPSwnZS8cFUqca4o7BNnBSi7f2jHb56ymARVkWu9dy9d5CJJLLTziKJBWeFhiJPaceuV66MYvMXJeuV",
  "key36": "5pUd9RmCmYpLDQDm8fXDed5rP3h1StpC1TEevH167A6bV7mg4f9nZMpcBiQ7W1rGLYwR3gWZMYzZPDDzoxaizCu4",
  "key37": "JHhb7SNZv1iTefxJpVGaScm8kBVsmDhxweq2b8STfe9o1D1oTNBqCFxcPXPpHsMHwRjzUvStTRjU2HKYTHGVSQf",
  "key38": "3fyHSaeNknERAGoXvJGMXAopEJDPvRMKACaQtvUBv29iMHHZ1g1fR1KxNPWGAyAsVbDaJe8AHTcBgghCXPNAhUKM",
  "key39": "zmMcctn1pxJX5c8WiDcKvtLwCr3FVRPznaG67FmDjnzhuusdbhLqepufjqcnTe2GnCqoFf94FSm6yybhwwPYTaf",
  "key40": "2jMFpPAfHC6fmzQEHLURy8SQziSQq4jXR1it1Vyd2b9t1pc87X6T4jQGUdcG2XbofFiokmDaNnMPxDcXuQQH1Nsb",
  "key41": "3qSnjwTc63cxGZ4zNfKz7QdCTPVWCFp6dNWJmz2ie4AA5oePNELNWTW1s2cc1Hr6HsuE47SS4kyxXANJBv4h8ELi",
  "key42": "2wScrbN8fcJwL8ZQN634b8PeNqcxQ5upP45NuWh9Nr8yuUAhJAxyQNWC1AiQia8H9SndhTCKH9UPL8Rw1vpcM1Qm"
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

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
    "2TZYTYftyAvYmSEuFuvECZ6RunJszwQkWEMjr6NCXTmsQoXCJUuHLtuBfGALooKCXT2yrpbRiZs2jM1EDSkq1mF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67pfpcgURV9rWqaKn5oH36SUpQ4bf8NydbwU931zKPtic8qghGPHLv7beojUPb1qVR4augCRxXQYYbGPJ3ZmQocD",
  "key1": "mm1UBVydN1mZj17iAVYyCygcAoB8DJi8nL4CAGkNZpzLz4fUSjtKAGnFZZZtCdAQ91qqyTo9MY8kmyZgWL5Huu4",
  "key2": "2MRBkD6Wu9W7QmJS8jxNXoApxJHy8oJ7pRPmhZUJdsBdy4ZyX6aK8PQ3Y6tSsYejGKvWnshLhsi9fXFhQcyrGzX",
  "key3": "3M4x2rKsFSDYrPdfURGb3ahyascmfwoHNevUkorzP95Qb423AdSZok67UuKUr7swUE53sKrWZn9syqzmLh5x4i7L",
  "key4": "3wqBnJiNAFaPPU6MV4tgD9ykcG2na8dRAE7rE9LGVb7Unag85FNpU7fx1eavPFkR1ywowGARU6Jzf9acDBJXFVFx",
  "key5": "4WyyzBDuC18XczFs3Wucuqzy9Ec4DXqevMrrj6CVkfy5XLxWtDtdx5kgiTYjL7Yo3mGhu1iXGCuMMNSJgJGMrX6X",
  "key6": "3xCa1Xmbg3sXZ7HbBAciePwY1qxML7CBB2c1CJjMAk7r8utC9dMMMfb1WZw53rCp7WeFFEUDhhkWhz2gLqtHrjc2",
  "key7": "5VHBkNMiTzrk9ZJY7ZsMHwsfWMSvXZpsoevpvn7GEwbUSdLjpQdkQTfeaWVMReSK1pLZARRJpdUu1F8NSdaPFdXn",
  "key8": "kAAXFXcFvWiijCcLjvPf4zY41A3NXah8ba42D3xiM16LkwPveRjMcHpxaXKqzbzAfHi35zGpZT4ueCxn4jVPEBT",
  "key9": "2uHzep4mU4r7Y357KVVp8pzvLq3ie5uhpCe1V4Weo3FuBiJjBdbYZajb2xMSmyfhayemevA3jekvG4ymhR7eAFrt",
  "key10": "3S1HUkmktWoEFARFtMFPWVq83ytK1yaMyTfwSKttDeLpWNapCsTZCUAPPFhYX5KvoNvfSkujGYNE1SNdzEGLTvRt",
  "key11": "3EWzfbSscVX1pDBvUeGznH1eEQ5cRe8KXxqWgU3vYL2UgBgjqULjQKNG3NeH1x992KNM3GCyGzsEpDWmPF1m3ByZ",
  "key12": "3xYtBpMsQVSyP15x6AXQXoLW5wxMyuHxe6QjNVCdYXf3j9h8TGQKcPTXZ7YXy1J7dDXP9t1aayjut1QeqKQwGGnr",
  "key13": "3dMgRMfiY7WGM8kfup9LBpBx3XhWksb1eCtvpG7YtJrmBPx7ezSs9qhiV43nTKVgsqQWQSiSvqMd5HcmYDoLiBYs",
  "key14": "4E16wDxANtjtrPC5w3iqMcBLLXyGiyZSfNXj1f66hHnabnsX3CrAKMvwbAauSp4VoN5tq8D5EJRUY2SbvQgKeida",
  "key15": "46wWStkb16duGwJuTZ1ym4F1KFU13T9d5Roc6KtxRimyhis3qDy6oYyfpQ1gy6BGsmJWmwLVvocXNKDYm1y4ugBK",
  "key16": "NcHcMqg6suaEPAmKhZ1jrJQG2sTQjywbPPx5j68kxT6vovw7GjAs6Mn2jSpZdqJuSRkTHJSacQuZCLYuhJCmnvc",
  "key17": "122bVk7uaUdf5ocy3jp6wqiCCQLhtFgm8t86Vx9WBvhhPrHSRJ9vUsJi1u6qcD7nfDvmEE3ZnAXaXPnY5FRpRAVY",
  "key18": "669Fr2ey9bXpwR8Yv9KgceoazuBPzAgc5cP6rWrxHFqqtvCXgbd7kba6zGK4uXtx1tdxDk9DuokU6CuXzGYtkhm8",
  "key19": "5TwMMQERmaUAMC76kZTCwNLLPLJVcUaUpHyRbsoZBkP4eG7vkH5CHy9cQN29DWP21KiSrkf4xMWqvNKdKzkbY7WF",
  "key20": "R7CJQc94SqKs1YhXWVMcT4iEoRauRusK1v8agM18EnvR4QGgXiRTzsVvfi7fATQtN6v45GrzF6igp7RTRYg6BNv",
  "key21": "5J11oEmzRZmpX2deeDGa9ugH1CFFGx1sFL8vniC5UNFkY2uJrrGKTghotftxJq2BTBB8MdPoZ1ysWXcPb4QGt7kK",
  "key22": "35CL9aTudtx7BUGvYkEGEZbEhRKP23RBie6UQgfMbGhqKoKMm1Evt4yFUJx8Hs7ZhN5wwwojUXcHSvL4uxRcxF1R",
  "key23": "5AktSA5APamKeZUoXK7pP5RizVXNnGwmeTtLQzbkTbMZ1sAQrgSJHhbM8mBT4M6YwMghVF9JiiGLs61ZvJGkENgX",
  "key24": "4y5VqRGxg88Kf2pkK2CQQmGiTfGFChzLXfULNm2ecWd45LYFW762REKhAxJUztfE3UwZtUHpFEuHBUT5GjzPMesp",
  "key25": "3qVrJignpAdNrSQvQzZzqSqLrxw8QQVqhBodnxoN3RUSjBt7qkYGXnFuYGaB6YCtyu5ih9pLLtAnt8Pmozyoadfv",
  "key26": "Ev6snPCfVbVf54Gk3WES5PnPjnvqJvHvaSFSAPmADpiJ5VijBodjiXPT36gVe5mBzUCHPqoGU8FFizs7UYJxTs7",
  "key27": "2ayUX847LFoURsZvtxAdKJux96n4DBhNvWUseF3Me7PSL96gux9TqcojWwr89fVEm3BaA7TDrPftKQ4txYXgBZ57",
  "key28": "4LEGxeXCkzhouVssou8cfBVA3Z2eDg2fKPzw6rvE2D5ueBk3VksWbqpF2jFWqDXMg1mEj653unevYMgEXZrTYGnk",
  "key29": "YahaQzpJr4Sz9ioxoutwgsRE6NMyUvtcHGscPGEKNXj6kisgc5F5GhUGpLKHggpMeH4ztdqWAFcMCPa1nvVTJ2Z",
  "key30": "2sZgSGZ45mfwrcwELZQgz8tWm7oszb7fqgPa4nehNajpSqx4BCbLyTACSeA8w8kUxb1soCASs7DQYXszYmhDxRWx",
  "key31": "2QEwzEKEuaBiPW331QCyYmTRkKfVZmegTC5dt1cobvLAJEQuz25fWEbszKt3MvtiiwtUnZ3Cz959xyZG3LUXpjMk",
  "key32": "5BMvTLoBwtSx21ohtbEG7NRu77uVEhKY9g4FcQscJ4KSiZ1sMRThoAVJEsQTV56iBbVDXLKerBC7maSxkNFfz8sy",
  "key33": "2jMzccmccrtQJ78uBVTRLsMHvUnXASk2btSaqedzQ5LRKizdamy8SJfrHBbcPGPj11n9vLXtZXoR24EGePADyiUV",
  "key34": "4Zr2yCTs2LKXzMpDuo5zvUyDvSRzuv4xPafPLFB6Yar5mbvgh7z2LYZyyd3BWJZiHWpRqvWneGG2x7JwEQ7xgXKd",
  "key35": "2SX4KLi6PYKPCPP4MBoZHrdpZQ5vp1JBXK74Z5ed8iU6JY7QA5YmNrB9iX1PMWgHoWDbhPYJtc7ifhwPAqhRENBU",
  "key36": "TmaRGTq6d5jXgxoJFx4NdUZxaUe2DQq9zviUJt7LPafZZB7LTetNbvercAgfQchUNm5ptah9zEeb35SY3gp1pJ4",
  "key37": "5BAhLsShhvPDUZJiLPrKmGNY5x69eKmmpufEMNRYhm9XRQ2zabHBUt833FNexsybKAcdz3WWYLp2rGMA3B5MjpUk",
  "key38": "3s8o6DRkTr39Tu7LQcXmpiBdV4njYXNSu6rsnr4zTWECgNDtUFU7LsFKjTaLJDhLqvmUGc5Rrzv78aAdc3pskXTg",
  "key39": "8rL45BDTY9vexKyrK5yh5C4L5JKrPLhkdvpvAhL7z2o7BKFMxh4V4NGVuttQpS3xhy2zn8cB6TgS4q48d2y5coD",
  "key40": "3WrS4JK5jRSk3Hx8nM68hdiyfUrsfv5TAbEtKHPBambBYEPNJdNiAgBtDsj6pLBid6GAhgLCB5ySuCdkT62vmh9u",
  "key41": "agNXsmx1yn3tYaoHWAsPezaRowGRLxe38tVdRSfrmwATqBcAA9jEgSBDu3cakmiccuXybq67Ji9LiHGXHqefvxX",
  "key42": "64XSbKfNgHWgmQWcgx7kkQM7xM4BzUkDRoSSepMXoPbQzvqtW76g6kWZjjfm2aX5QikJxLT3nwYshEAbRKJPSmKj",
  "key43": "3dk2NArxbB7qX79rZj5UDHBrFDou5eC74xLyadhnKh7zcQnHC8WaABRUcJPMYXmeXtPPAPDhuwus7cQUjjqFHYFZ",
  "key44": "2k3AqE5hesauCNxUFuNLPK4TUdcfPQPVsxB8QdsQyNBsG1MiyzkcLq9oozDD8BWBqmmx1nrKoCKc1UZU2xkMPt66",
  "key45": "4V9TU4cUrSVLkaEqREGna8KfUTjhVkVJV7YCW4RY7HRf1MtBJLw1kNgzH98prh5CGtiT9FzUzxU2ccsiTXhS8FLD"
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

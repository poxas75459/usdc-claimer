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
    "5fnYyAZHpU887NDDpNPJvCnhu7URbPohon5mLzfw1xUfNYBX9bRLWzYMoVjmVkG4KTQ38wBn2mp4ihhRNct1cFDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCi9dFQ5FGAqybRa4zXeva5czHsradu9hpRTYaEsoPwsrqLGr58jYrbjRr9fkDLYCnZagfdXWhDhF9XCSrFM63A",
  "key1": "5tcwZEXjnX1uc52yFwZ9FTBtS4viEWe13iMpZoDV1mHXwS3v1orT4WxaY5dXbwzE58vpvEA7gtLH3fbtJiZGgWmn",
  "key2": "356J6DJhDsEdmCTsmkDZwhuDcyC3JQ1zje4QLAKM7XqqTRt94NcsPCcH7DVJtdcjr3AJr32ToLNt8m8RJ2mwmafa",
  "key3": "5qpzNdEBp17tK6Nvkx9nNY4qy6cxfgAYtbycxfXcTkaUV96CYQ5Zrkvr8W7kzKkzfUKgjG81UFhSjzhwPDvfXtGA",
  "key4": "5dpPBQ326kHAfJsNFf3pgcLc3D2BpC2tkVdujwuWm2GGZ1GQonrnMqCbi4otUaYeZUL9NJBC1pKx8PY3PuAvWF38",
  "key5": "5VCRWu4NxXXqxk6TNtxmL5SQpta5ahNATcvGuM8TjhdwazDoxLLM9n4Bky9yFwMt5oE2nMWZtrbnnnrjBiAqX7mY",
  "key6": "5DjEzho5qgJgHNPZdm9A6fs2gR93Q2PscHmQSXaLpkDM5Rg5swc24kE4NbCf884JnnfxGTTTipEgfkGcWtQhUQQH",
  "key7": "5geSMRfmczJ8ioNJoKNccvE8TBte3HYtME7ZVXsW9efSYvSqLswVMQZDTup4cFWYJBL1DEviXDbYJhmUd5MZnZn1",
  "key8": "3zD7taSPiDnu4iYeQ1nwXPwBsJDnLHC3Kxx2yQvsoZqDfMxE8VnzS4mXsKkY7GURNsbGLRb8MPAy89FKUbwmh3ik",
  "key9": "592hTZBS2Be4v5zRnj9wucUo7k4GNcCxJ2mvEC2fB71KtT32C1VBVnoDU7Pa61ggn5QnETCpZGBMvMfXPD4uUctd",
  "key10": "4xgNNb734ejzvp5rNVpw8QS9RDDBiEW4jQGyk5njC8f2EAqv3PFAmbJCXj7ZViL9CQfW8opq4z1pMRvpo3nL44gw",
  "key11": "3GbMsZ9DvX1oUgvJ7LZwRErvPHbo5hpeu9ibEeQt3qFbEnqzSkA4b18d4mahJBsTXAYSmxg3gP83nhSNTRH73MYK",
  "key12": "37vXEh39ugvRSeZcsh7BuAgnexXbzCgpZMiMchhB45nto2quggVgmfSrL73urTi8EJMizbCNfXeNfBCWsFzRo6UT",
  "key13": "2m8rTpedk48Phm7Z1wQd92H1nMAMTQkJZx6WevhMjSqah5CvpnD8GsezGnEFvt3JN31KBkqtHH2ZWwkTM1V5G74L",
  "key14": "3JqtinbHxbT2186dk2NKuY5eQvDhX1a3M8fnWfgrzjdjgwksHq6z5yFntM6ZJLtUXTk7hvDCvQoFKTYvmHPwqECJ",
  "key15": "36Yrwwcm3LwHjXNgE85GKHbWUMvA2AbpYMiTqngQFPV8qy9JPVQ3mQhPKsGPbjAWLs4TwuNHxKWczyhRm6m7JaYn",
  "key16": "6PeHVvSfoBTg3onQBuraB1NuDtnJNZnHQTu5EpmytutgMtzzKVkeAg6VzTC9CL1qk1TUTSg5ZqHxbmj3HV3wr5U",
  "key17": "5t2A7qHwrTBJd4xyDMGonhM5SVw9GnFqGpo4h7zS5QztB71yfNeeRBhwHFxthnn1CU517LjkkkiG1nRGsp2x9Dds",
  "key18": "2BYd5XapxWSCgHtZgtAi822Q9eTGz7gctCyCq5vSiAGuWLdLCdKTLL9DvboUMBuA73h7uuPGNoCPhLrNUA3ZzCe",
  "key19": "78RnhHPp4nBdwm7Re4FwQJfB5jUUS1NnK9WCoSscL4c72u4Z3VXFcvbqAkLSgKgRzr9swPVy7xx9kv6eSoQMy9a",
  "key20": "pQKJRaddpMxPm3U5AUgxzoRWtbrLcBAE7bpRynEzR6AojV1L9QxNAmsu1eV4s1Go1vR9kiSGa7BurubWAi7suBR",
  "key21": "3gPP5u7bHmfrUiUUA35DXehDBhCtLgrPWP3BF3RREVbhDnGXcst7QqV9Z2sgfc1F1fQjJjKixbW4d7yFZhLCPMNx",
  "key22": "3gFMJeqFvu8EihZLTHMQExQBYHiGdrVf4Yyfd3c8TLjkPhryFYCRwMCTQkXvsVwgZdDKoDRS93WzSETL4oYyLiZv",
  "key23": "2BQsdqDn9v2W6J9k9vyGL16wGB3cK3nGNroCidw7frnehUrzJv8LfpYuGndou5JURWY3RVYPGCEuWXh5UpKMWKGn",
  "key24": "5RBBs3XGf9ydwP3a6d1pTBPz8fqVbo6wFqc3FTMJyC5AgfpdyLiSMc7iF5FKpmTUaTe5kGm8UMUmt61fjj61DreN",
  "key25": "5LRkkkKjeBxJT63oeUtVuFeVQ49gPjxnACsRgNJPcQ2mqohm1snhKwsBbubQHT91UKJRsjVuAEet4xxEcDs68qL9",
  "key26": "37K5F7puxkeLnFYtH1rJ95rHfANBGMbo71dJt61ABzntFrNtMS3jT3b1bzcJ2HSQwzGtNMgqeEzCi7CUSYUsvVeZ",
  "key27": "44uwqUDn95hHzGh7PvJ9eWViWeLbNh7yxNQPR9AbeUxyjFbxCVaKEt8zF9zg9xkLWDiNjVn6zcMq61AB7cuDsRrM",
  "key28": "4JmXuTRLGuG1L8pjXt92ou8VVadkhuV8CeV4H2TTgZWNeTZ27udkqnsgSgMMau79ShsMFaCivLa2HbweoyTMLwK6",
  "key29": "quHpo265JdkToENyGkMTanrVqgqDinjhyQ35Ls5jktCoU43EaRZ4nBcEyQYmawoba9xMVU2cvELUwF9SG9UZ3Dp",
  "key30": "3shLQgcX4hJ8JLA2FLkP6jf6MiMYrPSKenPa17mGmSgeuProUr8cikQu2jcmnEkpw86qK61zHM35rhjL3kp3uRPW",
  "key31": "2MUMPkRq2kNdHkSqXWSvYKcMbX24pma48arFJCu8ufaXPi62tTcg7EtrUsbKvrk26hvysqx3fQorFHTTugMzBYZb",
  "key32": "5X58eC5zedzcVt8bPBFPzmdip4AZFV752kuZfARqCVBCUyg1auLAJdMziPy5EP3H168rax9SBp4b6WiVnANRXCLb",
  "key33": "5oUWUJCSVLYUVv5eJJ3fHNaDmU2wCqA7WRaMpcixoKxzdQ34gj4Q7vE2p5aHJWRNHbkPSuNvgyYc1iEBvh3aXbcc",
  "key34": "LubwecLPAWX5F87Q4H8wJp4XTvnQBpsWMDJ6qtE6K9LXRDBH5226YLjgmMAWsHdrn7RDG7s97deXtYx74NVEt5P",
  "key35": "o7keV8N2Mfpr272iN26rYQvQTcxhpScZmuL7zQ5PNboD1M1YjAEQ8whWPDHqoFCUZqZCR138DuEWeREP2uyBHKg",
  "key36": "3v5fbcXwkXDTSWsLojZkJEEpFUz329bHsczFRawUB39n9WjZJShzoGMbbhWi2QAVH1CktC23KUqYS9Sx3PQdRjJx",
  "key37": "27BbmZnrW8UigESQWeCkWqutKuZPo36UVVnzZGWf9kEKjKRw1BaDQhFygCc8fYvgtSDJQm4mizzKekbXLTFW5oGd",
  "key38": "ceDws5odubJiDks5BP9gomySZw24ig4dYS7AvuqoPHsADpdkBgJmnyP2ThR4TnGsCEzEqUyQJ2VGozzxfrXfHgp",
  "key39": "HdsT1qPdKVs1GZBLF42CnqdC7AZVr8icUbjpCGCinSWGBgViDSCVN7mRVECUTt3eoVoLNTE5z6RzLREgdMtWUTZ",
  "key40": "pFDkhqF1edkx3HCcVu6XfNdNLpfMBPYZyRsHgqaz9fqhYvbtCEHtrMQ5TyYTU7LKR5y8X2LPiL9qBKSBdujjQFL",
  "key41": "5nKevTgKWZaZfZs58HWSoAP9QM2ggmp5U7CtjCfim1JZ442hZiSfcgEU32EUk3ZTB4o9U8xLSYoRW6Wq8WcCjVSL",
  "key42": "2mPoVCJF7mMWDQsiCTP4L3t1mwzNwQK9fjuUa2TfRun7tG3Sz3CwYqdQiUkJzwkoXN75EouDzyE1KgjHxqa8sqDD"
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

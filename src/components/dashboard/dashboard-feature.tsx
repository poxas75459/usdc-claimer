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
    "2kpMXDafPPzaKqpukGo52YRj4yso2fPnyJbJB2jyMDiKah9ugew6CSjpFzJzAMfqfVuYztc1kcKLQG7qNN43aUg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdnQL7g9SbYkYytEG2SXGuGwRP5YNkCJQ61wgasq1JNbo1crsR83qDDodHGZPQPBicw8nrbUQ9vjnxvgDL8f6gg",
  "key1": "w1pUPAUvN4u3oL8wzWqbox2vPEmoPNLa1hxaNc7g6cRGo6bTYExgc93Q4DYkPu1sNk4uMWE3tUaGuNfDWLxruRr",
  "key2": "5PGerhNipDRtrKsDdffSosnL1x24ChQjMsGKWvnaaAS7CT75JEvP9jgFjX9SokBPQXxrpXWH1nbAT4bFojCDcpbe",
  "key3": "3mCvnZBXE7yckHMWJBWabettX9x6hjzZQbVRBvSb24pmKuW6q3yCygRFwsqq3SEkmaZhq4GAC5wLHxT23xdfeV4X",
  "key4": "4Z1YF6Dt6ZLJpAgTNaq1sQcFJ2gvunpuvZWXQFHzkiFg3TiYu4S2QaAEGbN6LJ7XRhRzRgjHPCEx3nS4mrkTVcz7",
  "key5": "5gR8mYtmsQjrEVidjUzHYfjq4YNRQGBMaEsHbQBXRyVsyJEF8vpVXmT6pPpDMwGddUxsMKuCggtiegZxY4JMAkyw",
  "key6": "4pNArJ1e8FqmTpGLMWcH53ZDFyJpGuBQD2irT7HEEujDgTEPLTj4vGJHoTBrCSte1QqASPgKTWyeSb5mdhxfumkE",
  "key7": "5eThhfF5H5LFvztYsWTx3xERYMdfxtbJ7ezpD4gQzQ1YhWnbHcL5JeDdFn7DiMDRXgwTSeECMCLtoxs5czXU6AWQ",
  "key8": "5UyQ5i5S5K6BK4SUmf3qTgXK3kRFWEH6kArD8X8QAWYrXArW4hAmvzw5KMksA8ke28PaUtFYmCKqWByXARzqttGm",
  "key9": "2zXeWwe2jSgdt7dchakDgrWgVcTaKfbtJ58YryD9MejMpYcbmVP2em9r3AYFPdpxcaB72kU5vxCY3qo5VJno4AiS",
  "key10": "5Rdw2vNESNiLGtud3DkAkWMXac18NUbMtTW6dKMuwtDKuSzEAEwoz3Wjky1otetP2pzH8SNHq9sDpUsuLSyUtMMN",
  "key11": "4dKDQyY4Se6yZRaMQqs18ctLKY8sBefc9RBfb4A3Zqq8VH5rZiFzLgzzQqEYyb5NMuUdfUcBT3mYtfqXQhzqvJDB",
  "key12": "63o8jBMGQHgQmpWPFh4yq2V8ephp1xPR69gucXUWTMS2KkhwMajRTyqkZAWnKzxkfBqajMN6XXtuBwEgMbN6cEdV",
  "key13": "3VVSmy3nRobNVGpxG3rzCLkMPkPx1Sh8pyUrjjYEZ2Pz1LWa1QDgi4EfceWXsPJBGEfu1bP8JosbMvpyVXFdPbKc",
  "key14": "3hPErDihLYdLFAHaxAFaxbgob5k3G2mz8ypwhaCZMUiDpks2RTHfA53z8v8Hh4oBwhztpumn1kA8s8Vg62ypGnDH",
  "key15": "2dvYiUsVZcntpGpeuqBRL46xmbDAU59aAtW2Rppu4rXLNPt14GhCEEmLKKixvS2kYoh7HokxbyPNLCb6Q6g1qmaS",
  "key16": "2bzXatNnbbddSufPk29VLAwrjxS6drXgZHy8qziFJpcCRL4pGWL2YVLVnyXqJjf1yDkkrxemq4GFYUw316iK52pM",
  "key17": "2ZydsvHt6JeV9GS4d9xncbEQ8JwinmURvjXVipW5i2xMgeXkceLyKZBnixPb3Tiny6YiSerX9onhNoEbFCfi6Yb5",
  "key18": "SFrfuzF5WybUPgT8obGYVg16aRAb7HCPjeKCyCCoq9JyawNDCWd7S9eMzsqkU64EW8BU29NUgGLRHdSiP1YVf8Z",
  "key19": "2ESxL9ePiCxRn2Qhoehm8eg8oqPewkUX7bupLMGP1Sodk2ARsfwaXwQY5DyHR8shq9dbmZFVgQkaBmpxP25js1NL",
  "key20": "4dBhG8jYuPAooo6bPKf4AwGqRhdqEA3YRGvSkAa6oNPFk4xgHFCnLWyWpvbbyaiwpcZTQoufgh5syENWLsoV2AAS",
  "key21": "2o4H6cTr3FRGuksdfpjRpiHdnLRECYzbxhmGeGK8RG49osvrXBAhLmQkvPMWinSgERpees5WNoMzsQZjmRAEWi3Y",
  "key22": "4h2AzwvM7GzAqFh7cQjECXqgcNk46oxtnfLaYQZpj6Rqd18GGfGftp44kEghQURUDcDXZhZAZnfAVFFLbCewoJjz",
  "key23": "3BXC1t9RmAgi9ukYD33rpSV13WeTGjN3bJST7LoSPaqF4HPMaUoM62CzD7wP5eRdXJkNGc4nT2UA2pJp18u1BDnr",
  "key24": "5MVNSRGZM1S5pMXqCosxp4FjHLe2X6twiQv7MjpzmJCEfEgWdLz6TnLKVJyNJtQxfK9d2zQDSMA1XudvGnKDchds",
  "key25": "69P9mq1KQDKSEM4wg4KrGAEdy55ivcWVv7rofuaoVZJL6CDYFe57iyu2ypMCLhSvuUAptmdMy4xLNDvEX2HJKV2",
  "key26": "2LqmxJ36FhtGexiaagAdzgVftXPN6pSjWNNo35v2faD1w45a8H1TZJSrQ5Y8KV1DHkiwQdPHfBYgpiyfMcG2cUXQ",
  "key27": "5WzFooDAdXDpjqYJs2BvhBYAXNBDRXeVnFtcDyqvHti4NikosnTENWJjmmeoQkUcDG5bSJDJzo6uho1Y6WXKWDQE",
  "key28": "sgjHQicwv3yeUro6Rjb11MR6eoEy9JeeH8oXAQCvRvLRE1HhfEAwnaPao5LeBLn6NkUSRxb1Xzasxz7N5FhxT69",
  "key29": "8K6hjR7WGtVJTNo1zCVMxuwSjzxmdvK6eyevcMVj9tyszfaBJUqCUfyHNubfbWX6xJDuMA9gr46aUqQiXMAVGWB",
  "key30": "84SDwPwndy2hp81ckQS4hFqFJZQrKHVg9ZJPHhvsXvzs6e8ctGuyckm9UvtTyWXgwRjGYxwwdfgszFAixpmbBWT",
  "key31": "4Exz8cX7h6azke9GeUSorc8KeZw8Ynxa6MGBHmSLjXYPTynyrV7KrHRU62oeBJyn6WK528BG9hUibFjW1FBXz7FL",
  "key32": "3KtGPj2bNpgZyNxRpYSycPEH47f36PjwfsTmJaaW3HcquBRPQGDA3coRVQ8CJPJPRNKZdPUBahYpBmcbn4QpgHHV",
  "key33": "59Pheg69iccLF53pnXRt5UoXodAHpc2Nx6PsmG8oEWyjyDcpZh6np4B2745QZpBgRVsQm3bNHRsuZnuyKjrdiyBc",
  "key34": "4pZRgcM69j7nWvJYpVXTfPCByM7KnHsD23TcHssjkWYq9aLDeuj6nSfJJjeGbRWyRBnmY4h4dfPtGKAGzARuRRdy",
  "key35": "5L8y6jB4Lyb3PMxKhyX5sR3fbZYVoV6koRZTRs8XaozEJQx6uM1Gy8G7EpHqfEnxSvNV9uHKStyfgvcESGor1ruf",
  "key36": "5rikoLqPwDyymXQh9oBrgYp4Kw1WSeA8UkwAWuSNoGAomsyVCePoVLKG5BVUseA91GzHVmKCbDF65XxFyavyrA7g"
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

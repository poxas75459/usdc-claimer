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
    "nTKjpbLuHimxQYdEBXJsqzbDDECoWu7WV7ZntUWr2U4rAJ4GFYZREFFJmFiHtWQ7XyQ5vxPepnVdrdDPSEzA7MP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S26CgUN41b1x7KVjQJAwfsDryhS6bn5BAmMdpotUmkGY7JgNEzwTZyMYcZjkKr9u5JS5gG13cSnpo5G5x2ewUXE",
  "key1": "4s5UUtXE71FFWXMbCjdePhA7hsMePCvK2wcz6J34wwHidMAvm9xYCd42hZ1W2kucpVdDthPajqpd48GDBRiyxouc",
  "key2": "4aLdwPsLCEnBA2FcA8tytsmcCuqhWFymxjL8Wwb2GuK4tnhBu2HNW1aggMgbFjTQ7z8AaA9iMwrUHBMqrcT3DeTW",
  "key3": "56CtXm3CLNz7VrkdJL3pcKJzcPZwvcthTXAzQ4bNfWvDyk1EhaaUXbpVqCXZB9pR1Lye36FzpSHw44gkL56WY1R6",
  "key4": "3wCzXkdTSiAHDghRbns2LnT3mz5325FW3h4SesQcm7tPV9EsSueHLKLSeEQopm43FPBe7cT8JB8HSbXch2xBvhuC",
  "key5": "4znPBVcZ2au8gyGreHdo2KXfY5hiDG7GamdQeEq2V7LoH8nxkYqZmchJkWJ4RAhuCTcYNQRtj1XXdG1ymubGgRbq",
  "key6": "2s4MoGouQLSMqxpHHMa5CDQX4xuPhT6sHr6Cw3sw3DUXpmsTZrUNnR2isXQZhZLwiD9j14Y2decDm26TbDb3JKFy",
  "key7": "4AEaYmg6zU5YiwqLjEJbbVKLpPQtfamEGPobb9DBmM6CnE4kmQBz6Q5Hjnzvrv1rHZEdXJzD1N28YnUgScLpU1QB",
  "key8": "2qkh3UX73FK5rktYDYASxxhTrtVsD3Kc2kn14WJRYNjbWSe3uqL3dQzxXxd6iPY9CKLVTiRw9VBMuTvqzc1KMjzg",
  "key9": "2ehn5GxYfB4UcUsGunkd67B9U8arFLTuCBWJeALzz4arvkuygPV1Xdg4e31HbYfUTGjwvjJH8wrZN1dV3RUoTMxx",
  "key10": "24VK8pzhhyPhNtH3mgmW3AtbuBWoVa95pVEKECjaFB6eS5xX5WEXMtPc3pnQuHNrsyppYQrf5mTH9NoYCGTywC6R",
  "key11": "HRBYNbdL34Cg9yPudc45LKAVnQhCdAg12drr2nYaJFcTYvMvQvsR81DCU99TwRLn2hsYxrsHpgHSX9SMdf8Mtmo",
  "key12": "Cb81nqRiRkXUJCyAfCadmweLZe35Wsz99UTWg2mnq5xMSP6VDPxvhRKT8miw8nvBqQFuhFdbT2GBENMngzwpMjV",
  "key13": "2BekYXMk2y3WNknex9t5drmG1dUqLMr21K9chPQTNLbAm9rbLChnFffka9VaLCjZYhyE3U3YHLasvB1LJjGgFCD4",
  "key14": "3vbP1R1YB4FQAGW3iHwbM6a8Gfb6bdf8JZmjBru9K3kyskta1yjsyV7Sk6fLkdfg7j6v3DbVyniqftPLoh6CNd44",
  "key15": "2JHxzrvAJ1ug6BrfAcoaRybevcoNm2NUvEnuuVhyqfWDG9sFXTybP6fbhE5AAm3zDK19C4cKtn63HeQpYH9wbrGz",
  "key16": "5UZwV6Psjh6gfATBRQHxuPx4bB3QRzky3cyoXYpqSX9AzzgWWvnzspN9LEqS1niszM7bbbKQvhb7e4AWJk27mJW5",
  "key17": "5XpCNptCcWgpL6HVdWbm7beKwj93xfjR9ZHgWkBfzXMBtSTNc7zu6k4YB4xEnhbRvaUkmmPcgCbJV75bNkeZgoNW",
  "key18": "3DkVPRdiv6eSvbnqE3EkcBVXPqQQon4nVB9szqQKcFEKzRP3aWkFVQZCzBPqJCqupYaJWr7T6Ezxv9JTW638fGWB",
  "key19": "M19hB62eJ75dWSCw9GwQXJja79YcuLRSN1vVLB574RyEaEBd9CtBTThDtELQ4tfcNjerC7YNvJgd7f8bMAnVhmG",
  "key20": "4caAJ6W6XjT7n7iqKF7MKTt5kaD8GV2JxycSSv7Q9n1Uz9kkxibe2suSV1tp3j8gxtL1g9xTacRP5SmTvgpG7ySz",
  "key21": "3SkrQYGzKsqWWdZXbRaKyYu4QYHVVKRBv1snR64dvAd9Zuugzh6WxGfgyuoFXdiJjkaBzssB6L8JycWDt9hLTgP5",
  "key22": "63bwsbFkoCAfC67ZSZoHHnj5yAfgZZzvZyF6Q36uSu2utvvwQTNCQ4qw2XkXXFNRMExSngnAN3Daee534tVQHRXR",
  "key23": "3A6puUrZtWVPDouei3CffW11KEk3yd4y6D1MAeqHZCvGe9gQLnij5etgwHUmmvWXpQbmFTCEybbXXmbve4rVzXzP",
  "key24": "2fwxs8TtHxCymTc6NZG9hMMv6v3y6z2zchV8cqdP1JMKJgJ5YmMKvY1Bn1QA8s2SbfKz1rk3sCmue6faVnmftgW3",
  "key25": "37QcqU4a7mag1UCzAYdBkuzyffhRZA8QrCPzPZrdnLGFq8gdm7e8uMvH8jQHWEVGUroEPUVDYP4J8Yyjn8fXqDbg",
  "key26": "2BabgrBP33JsLpo6Bg9kYKGhC1EwmoaBdT8qKgynQvLEwqbxocYDW3C92QwgLdrMxgxxHF32j4bRQYeF9gNUYUrn",
  "key27": "33mqvvvxLtP5AvdkjmeDHBUnnY4wJnL1WVyJ8h8Y1y2GFAHoPkZqzpWhAERkvz7zBqmPi6CPbcRzvye3RRWDGJJK",
  "key28": "4xtv24CpMTtcDfgCirXKZLofZnTRtw9eEgdpPLrEQFre138xuXZLktMeVJF7S9UyYHS7E34oFuMA5jWTCUduXz6W",
  "key29": "2bF5hrQcf3PVKE7SrJiZn4Ad3ae1n7vfSv3Yq43YjTWYszqzR7mwwDfEY7RFqrPAxT7XEyfNMPXgQjTFvusAcFpF",
  "key30": "TX6UGfARegro8U4LLKARnPTiNTADUKNmnZnfR2erJGUgZ15CSk3x6LkY3KN7HifC3KQzB8ipx6gaGqciab29Krv",
  "key31": "3gmmPEh2DPxrSDuLVSEDkgkLQ9C4xTSiBYKLGMCy23E3vNERa1jjTJK4GTZWp7AfwDVtK9GJ9uePs1jGvmuCmKKQ"
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

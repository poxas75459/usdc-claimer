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
    "8YN1R4FsZ9MKf5Eh15QCjF1d6YcUAW9UB9Px5iy56U4sA661psBUuZxhstp3ahsuLvkkuap4rcowj4CaFDBLGJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "chvRgtwAjXn5DWSXTA3ufNr6GxFjMjspFwiBagQPNGB7eFZnbe8EVcv8a5NLTkjvmV8Lgyqfmx6dn4uNeRHTKe6",
  "key1": "5hjtfxMjEJ75VyfNVDmy7En5jajLjmsq9cNnxLjyxpHSzfByatP77pqCaaaXiqM89fS5g2rF153mfzTjsWgD4mLn",
  "key2": "3af22WbN3n1LXR26ABSkQBYJP5GFvaqBWF5XrZegJeePE76uVdrjYD22rFkHao6oBo1fQbutqst8TiZsJPGgwUZ3",
  "key3": "49PJ7yeDZfpVmR5wo9vqH6mZK7TkAmRfKL3ZzcVCFEuTRGtYPeFf1CbzhUkPRWU8HU5kheSYBifboZdmF4cXVZ1J",
  "key4": "2spvV8RvN2p2WHhCtcgcfFYthfYWW4BkfHZ26Fsw9Q1todZmAboMpCucg3tMDjDNBCYjAvbjWu5n2e3vjTemL1FS",
  "key5": "4VZVPesEiFKG1yapFnk4KCtfry59b9aZcGKGGccbxYhxhiYpWNbu2TzYSZdtjQoQWM5TNDoUZvJL7q2ZJjDtVB6L",
  "key6": "3k6aqEQJZVus5T2UCGom9fSqEuZtEcMzWaEikydxKJVRZ9tnYidKTzUdhdEKxRUQYFmQjxsovmS12Ts45p7aYFW3",
  "key7": "4E9cqqGuGbNvK416F5t6qyRX3hUoH87vDyu8AbsBrdfVSeP2o5NMFj2rnxxYvWkEZPpuBUM5dJHEWjjuwRHMj1zY",
  "key8": "KPLwC2FeisBSUBBGGasdF3wMdmCZmo4Q5xqjLJu6ejaTEoLg1uaSaBDQ4F5XAYfWQARHt18Ub8uHRgfsbXV4PFt",
  "key9": "2MvsNekqrABe3xbVXwqbrsQMtqGPsmXMsmVvrBymsouHpKSCKq9FYQkwkynGVWXwpB67TV4ehVezFtxoRRG8WyAx",
  "key10": "3Js8XQigwSbWYPJunCBGxLp8mfsS33pA2AgVTmr4Avg3NbCgtLMs6VRjFeGEzNuEUNQjuicNBXX7wrvUxsBBrFxv",
  "key11": "2fxK3QgCkvqoJyZWc1qjYiJb2EvuXEgDAQ2QvjzNDiuaAV8j84y1XHbwNEDK3UBJ19M2Xj4STo54YKEBjZTHoDmX",
  "key12": "MKDYEhbHB8brK79vRPYcBiSHWbUMbRepimz2atyXrWeGBDnXycfWXPc3u9kKJF99W4UkL5hywaFJeiBgRHCn8Wt",
  "key13": "2qnzDqpzBm67tMsf4dX4oxQ5PwKJutWoskwEpCQjRhDwFG8ab16KZzbpVcDEGbSLmbw99FMZtUMjj7Gk4TRAjJ8g",
  "key14": "hJ3p4dc8fjKaqjC5sAg6oftZTLqCc2cphNGydfHj4KAkVmoZrR4FZ6DgYPXjL282UH9nJfUCEnrrCUBSzmdgT7G",
  "key15": "5MFNCVFY61BZsgVHJLPyKutEpZyPdsjwqMFzAGK4jF1SbhXjnBTitFVr53L1pYd1asDSKA26uZcngt9DHsQkdWRx",
  "key16": "jiPHw8GY9hrqPmg9GVq1LES8QfAGMakUQ2dWddkqsNJ2zFSfGnL4szkhqujHxeEjEjYCy2Pi6mzpUD6LKUd6vup",
  "key17": "4oXFaV9c5rCWcCP1G9u9Xxkqu7T1AaWH4X6We2AdeoQwmizUTGbuKK6khFM8FLUmLqu7wyHQtuVgr8om1zXVLZH8",
  "key18": "57epuXiGxPFExFbt8muAQPBfjiRQ63wivWiPLYWqMpFCTb6XwWApHNobwYhjv84pdZKEzHFA9ouKDULaunVLYWFJ",
  "key19": "hUKA2BVBXuB79ABc8idXGA16koKr8jdScRZMQR3staWshVXjj7e5k1AuuAfzxtAktT23jaivrm4mdyVj5zYahbj",
  "key20": "66H8SvcKGCT1w23WcV9BBi3oLfqDVnyEYBrHEe4bz2yqanwf2ELZgZV853EMZePn9oxYUSAR5k2edwPjVeb4nb37",
  "key21": "2EqjnojjQdmJJDu3KVBDF3eFeNHZVB9KiQ2faH6AXvgxJJBjYeNsooMXsVr6DTK3iaq1VDiHJ1qqpFJrK9Y94E6w",
  "key22": "3GDfZyBvpdLvcGF3qnNLMgpsVyMCn79BdSmqBeQyr3Fhn3TPfuwBak9BbtpDB81vj9URRKYfTSLfP5akBRSnfL2Z",
  "key23": "ZchWMfP3i1L8txNdsgAXVQERcn6Y9zwho8L4V3arrQZnkPPje4ZDLfbzGFjBSH9VKTQre4XeL3WxYg1KMnVJZnU",
  "key24": "3TXLMP4tv21Kjm5zbhwUzJnipE74ra1tu59hurLf5CDs6s9YWRXGxaKqmu33SN5abLxCTQcsN62K8GgL49gCF2Qk",
  "key25": "25Tr2gQsqaZxouT8AMNNtqVt2WQjPCz1HvCY6iWhMJXdZuS6k9gugpei5ZX1EvEwQzzbcHdb3HKkFLvC7xXFGP2m",
  "key26": "Ndf4TE8ZzhZzu1guptC4mCrvyXLXxDW1Z6p1FCE5vAan9fjR4pHgCQ7fDZrU577comutuyDcnH5Te3FfeEWaqA9",
  "key27": "VRNgjPMvu7eeCzgDnDYKDEsjL4KLPLC4u5s2VVYDErB1krP1EQEPD2CweZpzvWdGTAasCMot8z8eHU7zinKxPPc"
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

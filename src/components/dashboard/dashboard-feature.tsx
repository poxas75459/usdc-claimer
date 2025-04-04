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
    "3km7tU2YYyy6PjA94b2ZcFm3bkC2Ba6FdzhvXTVzJRvcPuRuJGNyZeUkxUav512YYPDxz4zCcsyHLA5G1A7iKEGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoytuXvaTaeUdtHAHQShMFrkXa6eEMunuRZ65jLa6qUQcfgbJPXczin2sE5TPqYKEQYAP1bJBiQGbPWNMCxjVuu",
  "key1": "2wYnH6UgNeY57qYcQc88pghWqRVCbt6VVaozsuggbviK7vD24M94UXBxzZAifNHQna3ddaznjaG2frXfijPj619b",
  "key2": "3sYCtBgG88gEWK56P3NQkVkgEJR46sgbz4MQKeKHxAmYDyHDA4yAwJX7hmUUXPTzhhAjMGUstrmDMCeHrUQpQxTq",
  "key3": "tbKtgyTHHtbuhkSiiHsz8LzpkfiS3X63YejPsg7znbvU7HqDtgwhwAhMQqBgiVXexEx46RYVvzpKqst85ZfnoUy",
  "key4": "4o1HFSeQYxH9f6ogS5oUcJo2jbdbkYRViHjYAjkPzFWTm4qTHS5e6uPZ7FBRUw44wDFPUQLprQ3pEYfvMHxaGzQV",
  "key5": "3nTyjupVk4u6jAe6GZ4WyjbrMhoeteyH5aX4M25ERZqAUtRKcndiA5xVJWXLwoom52Jyzf6LYxBWHX3yX57WZwmd",
  "key6": "3pq66SbbNxMLZB2LE15GxNtnUzGU9PPvJPVE7R6A7spexJvEuHY9we6d8v3apLNLYHqWFF91PkHG4vGmbUeqS9mM",
  "key7": "4xf2ajeQBAML1JGAKAoUNedSwjnn4tadnXqoA2jVsi16t33NSjAKjBjN4vPzFgkRF4eSWwxTbxWL5C7vHkjFeySt",
  "key8": "2iPEdC7zpbjetfywfQCPeBEH1TmNHoeARPdz8koHDqtGcttyyro4Qn3oTDarztizEzyXyoaxf49WKchRUwLe7nP6",
  "key9": "3bfmw1gkkosSg3RgaHmSjLh3mCfhQMjBXtXkUjrEbni9E8U4FxXy7Kj2552gFSfUo8sb8agSKNUtZZhnoR6UMnjY",
  "key10": "PXGwDtKgbQtpYo6dmvRSBE2PkCm5yrtUadrjD7furu4G9xVB17bSSVBBV3UWBeQ2fLszB3yuLQzzPvA2j8R2cKp",
  "key11": "1MH94DchPwjBkWh8NTvHRZAzrTzJwRe4ney972nwGybZf5gR1b8L8a6QQRc9x5XMmPD4VaqGsEk2YHee3itWqNF",
  "key12": "4gLogp57ukLvPoYbJkojjP5SFr9TqefY3mRabUgs5kFc2AChZi2miZ7xjF5o5NdSVA6wr2LuTetbpwhcVtfrfyPz",
  "key13": "32YsDNx43NyBD3gWwqqQNzXDrSLj1b5pwz587N1w7mEttfjR7tMvmNMMMR5zHxhqSc3XUqPcqQxs8kbhDH7oETLw",
  "key14": "3xbu9Y3L2RLvXiuoYUgFdihQuvi6vuBzq9ecJT7XMF9DYiL93bko7SrdjoNUHHxbanTvV6JCNR5Dn8HX4mUw8AEZ",
  "key15": "v8FwsF95soUV7jrT5amdhtzwvyu3G7B5r9CayDw2dRNkqqiWqf4mVfKEDuptEsd9dde3GonAdiegNA1eiweQgXz",
  "key16": "59fXHPrhDWE74ymmLmeouPgSzDCpJQKP2LeMLdLnQfT1JDskY7VZCiSzxfSNakSQu8ViAAZYYNkTsTJNrg3RsttY",
  "key17": "4w3wYUXX9GRzRq6ubPKA434Kr7ocqvEsAWUKFcitzuAMtvdRQCyp2Ea18C7oLtfkWuervQokVEHMAru8hQYNHTwp",
  "key18": "3tuPmjm51NQaDB33rb1raQQofGZKGUhUgquejgsGir4wuMH3HzYiUz829n26SyLemRpY2K3nasmNMrqBmZ6xZqCj",
  "key19": "42Dtu1WMd1J75fDUhw7WJGxLwgSAaL9E9EMmmGX7gMoAizE2uR9qxuG1NRQLzkMjibtF1PkVdFbPLyE9h2fE3ZgL",
  "key20": "5jheV1e2DubiQKgYqqSHmNrNEWSs2mBrhUQMe37KahmPzFMTNAEMfRwc6f8tSf8unLZ163MMycfeiY86JETxoTcM",
  "key21": "2MppDubhvJ1po2RjKDXHgwViQgaY3eh9CKzYMmavz7KWM3syVsKc5xdwFAuW5sWoX8GndBgoeyq39QxbuZDp6gV4",
  "key22": "tQqH4eKXkjotYbwy6DWv3W25LrVE1y2eePEBrutjXJdtXLVbm5VbB73qMdKB6jf4E5rp4fwHEJCUYngbC1fTdes",
  "key23": "4JhGpANRDb9qUujtmoSYhJaCprT8hZRVHSrEHVkumxXTaEqCGMDja2jeVFSMUE2ncfL7raWZhi1tgcsM7fv9Qk6W",
  "key24": "4gzJD63pHgoZhVncvEUbknAzZPuEWi77TV63jTEgTUJo1wyPntSQ1SLV8ZgJRFynoRoQX88S44nhaoihbpMcRrnK",
  "key25": "4k4uCbZ9pcDwMZui7GBjSA7MtPvoEHRmVHewassZKEZXmaPc6TzrecXC4R2BaKyAQokWYvRG1SrTSQpVK1J91JND",
  "key26": "HEwiNGpUw8Q77ezBbjtXczsruSAwwGoSA4VGYme2LJ3EBHUsPJ6yzNjEG9XNx52uZVLCu3HHKVJoaCuoLQrwpe8",
  "key27": "4edQ7zx9GL1nHixrkaksMNRm5XfomSTF8fd4jvMJD1KFo8Jogr822r2FJ7xYVKMV6sPRz7VWYPZMwwbQpYHMwe8D",
  "key28": "kmLBuTvMxGvteuxk81kyu6nX7XrXtRgYuFj9FAKwx4YbwCW9vF4RYNtChwiNYcsUGhUSpW5yJTD5ZvusLqccyEa",
  "key29": "3ANwe3qnThgSz8jQrA9tDYGmVUJpnffuMfRZNEK46gvPj2Kwc6hxMDGEJBLSX5SEUhMSg3PVyKcr459sSZa8gGbt",
  "key30": "N9Pno3oTsnP2CjwnmTZj1Tc8wqkszb2PKuXCdEH3JJuHGJADyRTs98pAgcy8e3fWYpK7QD7T7HL5Ac4LDUvPDsm",
  "key31": "3nnUn4szFXo9z16GPa6phLoMzhCDfbY5g9akTN84KCxYRfDqPQVyqFCm83iEbZonaHUZnoqSXYVv8dJSAU7XSRh1",
  "key32": "5WniQndYfZo4VQPCx8Dk8aPTgRmUZL7WDRJNna4Y91tp38okGCr5zZpBMSP3y5uKRayVcNZrzX8nPMhRdQMPZNEu",
  "key33": "2ScXYKTpqt3J14d8izdwb92dHZ1R2rAfn4RoUahFiPBjnQHExEdDcDXpnd7ZsLSnGWoeVYYqxLUiacWqTwjMbZDZ"
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

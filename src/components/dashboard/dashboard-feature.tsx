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
    "xye2cwVoETbYGgwy8yEzNcw3XWbjNUMuk5BohfV2kRM1CBTHjKiDAm5xyByXMva7PYLn9kwDcx2SGfQzwNajham"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsoeWryKnT2Q2DnKx6remDdSRXqk9zDRALVELaHu6CYbJ72oejh9P8k2sXHn1GAtkDa1crt8HTCFU9PWUwKbYmv",
  "key1": "nwxzm2vLD3mnxnQUTY9FLuDHZUb4es9eFC1EyXhix14fKNF1mjgpzVnciXr8M48zYsJ9qPnxW6GmcLDGPwKLumQ",
  "key2": "2EC1wtBrCBk1bm32vdy72qNAecteYHCrVGPbkHYy386Z1JgEYs6wF43cwWqHXcWLawfzyTMTVtRuYQYzBT6r8ij1",
  "key3": "2nq9BvhTpeDSsWqnbsTntid6uyL98CygoA3M3iSBEbdUXeYATr2U1kJGYDVACJXiZ4jLwoqRrurEPxEhnedLpXt6",
  "key4": "33H4FZe1FDHAXDs4XgBQ2vfY1APdXphryu1DNr7aAf5pNX6rk5tWEKXfhjEDtmNwnu9WnpNTNPDCF5Z6vSq4S9BD",
  "key5": "3f5Cn98e86PcX9BCCJs2wdbsRjv1Dby7Ln1W2PB5rMGZFu8UvJ7LybyqBEKJE7piqBx6GHiSuT57Xe5JCK6n3xew",
  "key6": "2sPX7TzdYLKqsZvo4WeGDEVpYYffd9WMiT4VciZbTNRpiatUAYoQ2RvnVzCbmh7g99UuQyaTGwEa8DrEbmj7ijnM",
  "key7": "24NhyCEfKicMrcFCdmPvAdfS3JMGCHqyVtGXEg28vRoKL4Vgri5BTHys6kLxbqA7m5u25jZSC1WTL53MG4JFbLBE",
  "key8": "5DciraXcMcHh8d66CnuDJXr46J24wbpZkMyzQGPNY5x5BkrhG8JMzXvY5oJDL8tpmvgrYYc6521KhA7rneby7CLE",
  "key9": "45JVurUcd7Dwi1YknFUBzJDx4Jip6Nu7Gc2DZu8DFTobso2a4zpbcbwHsxafgSvpo7hESVW1NJd7ma9U2rUYGbXY",
  "key10": "ekz4YFiyuFgoXacGbaUrbrmzEPeAScdcTtDCwN3FEGunSJZ866xhi8EGifrALjsBxfMkNEV8oZFVf3TKNePrgdM",
  "key11": "3X11fgJHPMhAvFP6NJRFCNJBK4GMebhJgZuJVCqDM8Ed8JoSUb2Utv46nEEHjZwmXS9G6YF9Xaf46orVaS7i43Y4",
  "key12": "obZQgsvZdyE7kDkBkxvX6FUZ8Q3DqK5Ak1a88KiuN4jcZKpP8Winp8fKpiu2NgVvK3zx75gkmkQ14wHkuvNtQxt",
  "key13": "2eARh8ztQo8p7fwcihPtXe72N8wQrjtC7yye2niPWXmT6BzZGBnvxgiVSs7huk7EJUtKgQe2X4HGxYoDyDibWCmp",
  "key14": "5JrtVYsPydMLzFPJRGJaT3dAs7xC7kbBdaQF8DGAaY9uR94cjfz8BaieiqXeLZw1biQj6gkkUjdxDnNZyzoCPBeS",
  "key15": "5oEs5UmKjT6PJKK5MKv3J1BTDunZQC9MVpS86RHMyQZE9HhtsPd2iSoKvhiirzpwu4RHDKHBuj5RuQCy9EjgKK8P",
  "key16": "5wL7ACz8fP9hdfuqpL3rKgkU6wKW7pTmFoDPckfHNJFhp7idtWg8uWWC73eCmHRjrk8QdvP83dRZLDXbPjpmLUfC",
  "key17": "3ebTtEFRR7s7qyMYLAFbpJwGx7ixwHV1dLX4wK2awJFx239MRW1orUqjdDopELQEQWJkB8DMoWWZQvtg1v718Gnv",
  "key18": "3xQAMkZrbK4kL9WqijJXZkKG7phSVmxuyfSN6deufaw26ZGenMtDbMWa3rSgLzEY14XE3dgvG2R2nPY425zQfDXy",
  "key19": "5PHu79U5AiatcprihLoVAjnE3MWD7kDb2Nh92TvaFAE4ha3NJEjjXbYJousuW1RyJQjDz26nQnTzWnTAAAe5iZTZ",
  "key20": "4sqpWLim9EnihQsJpPUmZWByM5Mv3L3tdNs1Rcym7gQFFibmjD6PCq7cJDALAstuJLuhZ1UzdxYQ6nwZ1KbQYMtS",
  "key21": "5FBfToqVJTP7g789e2VxCn4ZRrgv5QohVMZ9xyayQdoYLmh7UJLiaMG89MvhUib2d42B4eUoRwDWJAEkkUw47YyU",
  "key22": "3qhjLt9rELCkvNksCXdbBjSjeBedo58CBwxynYQZtbqwUerKPvpyG3CYUNWhqt8ntFx4gWhJBqN9QRVRWyHF4L1F",
  "key23": "4AoNWinVrvfYoccqcdph7ty1UkUUqVfYjPombjHd4TXRZshignpja1RrS8paLp467uEXtiJ2yjYkGDzHpcNEeBdR",
  "key24": "3PnyiwdApo2A53T8he7RafTZMymsxj8knXMv7WPZMuPUMJyXstQBB6vAx5MwXnPFp2sDDWmJjZ9sXqVAATthBhSy",
  "key25": "2h3KpUcYxLcTT8aUhTvwTtQAnwdPEcuqNNnx1N6oUT1GXrJa4WgjrgkrKVEPd9Mmgnpsr2dYEG2KxLTbPyMbSXoy",
  "key26": "2AABr5uC1PRe3oif2WaRbLPEeGG6iL85W3WiKvyXW5WkYNwvtHBMn8G1oLXAA2xXX31fH777SvbkqSpaoq1WB4wY",
  "key27": "ssUuWcEdWqREGfzAFJz5bUNF9mSt1wSVsuJLQKZDx6Weh5Pw6qjJKVjEfCSQZyAXsmkofrRjphW9GNnvDakuPBH",
  "key28": "5sy8baB7ZDrpP6h1Fsw9q152SGJA1PiWd75tFoLFuQq5f28HZ5ff6BLEjp1Xa4U5KEx8uhbGUum71XxCdMWz3TYv",
  "key29": "4DGvdFig7XTxNVcmMZj6yUhkugDvQqp9Ufaxf7hxR9gC5Lqu3bVBFSTxLGkqyMfu854zFVTBEYf4KhbBhhgWAvxh",
  "key30": "59sJsNribQ3EPfTVNmcDMb6r6qYCZZxDKYGDZXR9Nvs7eLGc3NMUqLARcnmLfuwkRj53pf5VnH4i7B7P5RbgkfkP",
  "key31": "4vw7YHcHyNTL3beLEvLWYuizjN3pGfdmFua6UoNrMYndDHbotNKL1YCAcWvKNRJMhuvFFZQyhkCVg6b5MCdvPhGG",
  "key32": "E2tNRbHKGRsVFSFkPBtaVESBVWzRBfkrc9khwrj9UowRss2CK9yejvY6LuQQVdzc1vz3E2XZKAYnjm2R7EJcPyA",
  "key33": "3T6HQA3tUoEMQtVeFuxrRNRRuZpnWXL9eT7honsZ86uYg7xpJZ3fcHCKAMrYA8n9PhaUweYqdygTbEYTRmkDvTkb",
  "key34": "Am7GaGbrZ1bUVQFeZA4whdrybUJMY9JKrNczLfLvvwAvRm53GdHomzgJs9Vub2q16ZxBxEocNHBxGV5MSMVkAhH",
  "key35": "5yKuhKRJToU1VoftUZUPKip5XA32kZ6J6Pov8AiV9rmQ9sq3xEAVVLfhHnDF2DrLk6aXHvrF18ddgwCFBTDHcMDm",
  "key36": "4U473b8m1sao2eavQeVwLLeAvxTFnYbbXYPxGkN9V1rxwk25c86cZpBAkpV3G8SFxfqjxnRxcAtRLEhrjzCjCT6P",
  "key37": "UUovkDy5NDCrxMnEN6oamCtTtjMb9gUFKMd65WattzmtmnREhkmWdcoyowqCB1mFYE46ecSc6ox9RHXsBjYqNfg",
  "key38": "4JjANDzRum4mF4y7hRQimGtAUDWc8RA9jyjDRgwZgRKv9Y1jchU43f82cEUksC4DbbJVYeqorHS9ahwoEbAQwtfr",
  "key39": "4eGNnkg3sWufqbwQ8MDjZrK225ujxYPGtDRmsU4q84X7PDWWGCDJjhoFs6ia8JcySRysBh163MoRGTJtUcYBxCsZ",
  "key40": "3y9hDcNCYL2Sopiq5VgzknrAfHvWirYD5HnWUqppi42Th7WeJNGZpWgi3fr6x8foQoYq61XQn1f6AwEh5U9pyDY6",
  "key41": "5zWWqPGh1pFpvYTWnoxFhEwdba6228sMRox2sCCeuj6672K9sBbJ8BshQaet44LRi6CF8ef7GgeW3abAPqMjatK",
  "key42": "4EMrANhDhKxTwmosHCEbwW5k7ym82HjZsH29soniwErSPu6BPsT75miWN8j1LYV8B6DeFeHt3nbUBYEK9j9FgEt2",
  "key43": "4YH691wyjZxactfo4M7hvG13UbGdYFKbnxBKwEyaaFuYhssuFfXE6qvaUgESQSNY7aHAXdfP3amb6cXT37SoPCaQ",
  "key44": "5GrLFR4a9DivDAyeqnKue5aXrNazya46wZ6nBNKMPLoguZBdfHB7GyfPRviWvkv84MNRD5G23m4iihwE6LrHbaRN",
  "key45": "cnEc5zWri2jEo2pmJn7Jb72Gyeh1jdpBjLC9xn44P6uLsXzXeySNAqsHca66hTix6GGxNRiS6UNkLCmsxHS8MDA",
  "key46": "3vDDu3CYMM12kqL8teAPwh1rNkh2soGeGZSrtjot5arVPooiA9rtAXVW5KHsSPNCocj84XkwwAppYxGEzdVBUcLm",
  "key47": "rQCN8vonzWBJtsBvqwoRCahvA8kejh5NHusfGPaYzaZt2MCFRK6ThFBoqnL5WGRysx5K8adA3PfLv2DdtKvLzaK",
  "key48": "4nBeDVgCY9ZgkhmKX1PkEUcna62Vxwr1BzEC5fYF9T1GmdeCNd4fHMXVncB7DUkZbBSTgvhS5FKwt9RWdkDFTxJC"
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

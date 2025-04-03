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
    "2ms5xDzzB99BPBp95mooNAqtvSDSyKze7YiRtKfLth72u8WJSjNseA8ukvYQ7Afz2M4Aw3aT2ctJxe3zaAjwBtkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mH9hQt4wvnNhGM1JfY9yj1Jo1mvKzppbJWc9vUurcYrNCVGKZsXUChtHDvpKykSYDXLFjP9iQw7nJHbGGJxjcEo",
  "key1": "3noWzDhRKHnYcKeF3w2SpseWWmUtG9RUbbvQkJc2xVX7eGetVxD2vDQm9cGy61Lg82ENFydreVitDyUqiPYJ2oFW",
  "key2": "3RbAtDhPKr7jMrqyPjPioWtCMpoh8SJQroZPD17YmWF5fbYAbAaEN1eCT37NYoYaU4w3Mn6448oKj33LvdX6KEpy",
  "key3": "2z5237Y2Cb9BU3kFPJhKCADNgr2z2pxce9GoZvKX1AL9TvYfEUpn833NCNnVfZK82DsohQ8SEHFTzPACwh4bQ7Y7",
  "key4": "FxKJQnm7PoLV4VtKHaK6YgVJCxGAJTuQcZzELHcMXtLboXGPP3us5TPYhzRKUhkKrYpS9FyoNjFnrkFogohq4mR",
  "key5": "5pRBSo2cwm7CYRBtHhRaUMPoWKBABvsnRekdFpJxa6PeFqBRSmuhFe5JPxDBjPg4whxYDXb6AsesjxiAv4d7ViAP",
  "key6": "ScGSDobYhAmorWH1pT2krKTHjHMq1v6bvKb4iw4FFti3vKDGwV4vxt9PcUi5uH1jdm2Jy8HbjawAU1SShjmxj1X",
  "key7": "D3nrUtHtW66EinMhCEfocDYCCBiwa4H6YUtpjDuRALQaE5LXuMAsgsmiBvwEdjLrnPaozw1EEhjAcjM4rWa8A2f",
  "key8": "4Gxx1n2g4S3cohtBcuQAiqTJnQHotDJkRiqMkvLWebDHz1cAjjQYKwYHBMsZTvUtUTYy5ug2AKEBQBakLBumJ68R",
  "key9": "67i68LSsU9XPx5EaiDNAUMwxiF53LFdRsMGmhUuUBLr5UoJjQMwuGLLLwat8b7zyJHjb2sZHzZscxEEYN7w51smi",
  "key10": "5Du45K7CFWtPab41qSMVwYioKi9rmR6eX9gQaZxPPLGiY9A4jioe8YJBmfAW6qtBQyhJjHnNLj4yByBBuEWNcUJg",
  "key11": "37oWJevZcT5XgfMYVeSvWzibrZjQTiUdDCsngzpsinY1WMMrUSsuLwRWSnTikUvrFa252HenV8N1gGpjg3KdMYr7",
  "key12": "3wGqkzCag8VSpXZ8knSX6gXM8GvoaE7dXbWdVefB1YRrC5Wi9wKyJYuuXf3fV3b2paKM4pTgdgzNrVodPuukuoMw",
  "key13": "4VxyjLN7f3Gwr2gjGhryEac3YtQVW8zjWutjNL8ySXWbioYY9bn1TLBatQnoFgGWZiTPUG3Wdvc9g99F9nBYi2sz",
  "key14": "326uirqJSNgK2qikGXCk9pRnmfa4c7XUQDCxGVSato5j692bSxwfqi4EnfFLnnceoqePBbTccYDpyMwjKNn6juzt",
  "key15": "3Qeh2XJrAuy7H4hoGWqxavBGHTozB4Jv1f2NndUFXrUk1uTSmCwpXJ7WSt8yWUbBmQCTmNr6LkLJLF1dFLHPU9Tm",
  "key16": "5rqBSMr9oDQRsVZqdr22xX9P2yQfHmatnAjFuMsFocPyrAx3cjFDetrag4VyuXH9aTq4U2Fz87Dxcc3pVePLfn5a",
  "key17": "3wwFBToz2FZGmqrUmbXxdGmbgYxg7pKS6FP3LKe5VkpxAhVDqBPWf1mdbyMu8KrqW55QJPfo4ZmPLmmGgBxZWCyo",
  "key18": "5NmSr6epZDPkMFkrd1XtTb9RMBjs6vcJQHGk2QAzywwGa6pFeCKpU97V2iy422axnEsffRVMzKQYu33jZNWDQNuX",
  "key19": "3Je4STW5FjaYuHWZ3piEDhRkKMcnWvdBqbE5tuJMAVPq5iVCCuxiW5gKqNLirguQVL1qUdJuenzWCfwyCfi39zcs",
  "key20": "63iDtAnNYKT4NYAw445E8CBCKpGgjxhxkmSYRbdzvCE6JLXXFHE3mjfKP5krKLhpzmQvDPe7ifmngwSxHvQyikmU",
  "key21": "3LdSYHKa9oVa2pKqdZp7T1nePKm5kUsQyQZ9K2zrBHp9xwjwKSFm8XeaePQjYKGJkEpFc5SppLzS1w8VvVprtrhQ",
  "key22": "22DvNg3USSoh4kgDGHjsEF2b2ZTmKCwpD7mKisKxW2HDSeR5APsn76YWp1zaDVrFJLC57td9gF9rVzRhquyHe6Wb",
  "key23": "4bBq1J4RhD4VHC4KdDBsb7gU9sGdAb7adEAnm58CN5kFmjtPz7HJXxFiVHpSeajmqtjrxBNrUPJGot5RpGRSFB7s",
  "key24": "51i3WFTiez41QCGArzdbAR29T4WYqVMD3T1ydhJ43eXfEM1oEci75Wn1oW8qEkpSufrzBkm7ZqAicjr9sUe9rabs",
  "key25": "2T5gLqPuieJQxxmf7ytdCALaHrVANfjZSm2B5V1HMwqHprR64dJ1kQktiukB2VmoLxibB3oy78DfxJy7eYgWc7oz",
  "key26": "uoKFSDaWVcLpmYALMk96ydVDS7PcMLWWDRN3EjhXwAngmMAhkeXmjHZtJt3ZqQwWKefEu6QAQKfoPAw9DZNoooo",
  "key27": "4eLsMygyYeFNwTSZ4B73qF6ZraoPCCkkoCdyu5H3zqYRXzkKDtCcmS4gnC1pUuQZSWtxbqMVah8RVGndzKjiqB4r",
  "key28": "2NNVhg5b4Z4Aj12XByRJMfXYESUGwD6pevysoWv7yX9TDvHTp8bBezhFdTcciQE5pE93K6hLMjtoDMPf9ZQHTdg5",
  "key29": "5m7hjje34p43c9gTznuZjXYoPXE8HogJLsjM1Y4EbZyc5nxhRPCghBTgoSWxJyYbkBM71bQfkL5j5uwgFMRzrUwC",
  "key30": "3wQjH7GkDQTQhCuUHtBzCTxNiwGiemmbYRg1139bEyPZd71bJjK11V6Hppq7EwvphKfJgMbYWKxuHhGwFJjAWRaM",
  "key31": "5dVuZd9n43RH6CXpwuZ7mUNPaAdq8j87sWeCq3zHEgHWackEGZzCPz2ADUQys1Co9cSB8ykaLVyEDae4uKhuevrc",
  "key32": "AvyQuK2yAA9X7whjn6ciy4SCjQBPxh217NGokqGqamD4rzWUnWUuU3f1tuQ1igb4u8CsbakpXnNHzgZKCAG68rE",
  "key33": "wEpqKTFGALYobMnsFhosf5CScPRBRs33T44QPym5x8xwnSRQAnpiUeqYHNBgRDATHaKdWu1BppxfVNfinVhDQ4C"
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

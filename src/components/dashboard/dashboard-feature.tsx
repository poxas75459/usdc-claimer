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
    "219RsFs7dRKq4e1mcx7vxzYrhJSaqxWJbG5g3kPB5fmKfJUHLxHPKikXpgFH5dJK1fHRxaPrVPKe8jhx14NrN3CT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HpcXuNoW7g9o5tLKXhue7N6gmm3PiojhhNiYKqguqEPGhrhypSa1XJPMrAzud1gPGwU7du4Ej3zZg8JNfyqHtUx",
  "key1": "2s4kHrLttW8xjEqio1jMyePPNN8B6Y7GAxkyrAWB1GKULiYY3NwqDWRzFXV2LiNcizSKoS6cExa228tRKmf6iQcT",
  "key2": "36UfsaUBsTTuFXweXgAUEFzArZEasYVFHkU91FXTGzGMUoqJzq6KEV6StnrRq9q3GwaSYEET6ozNN4req6nD7vBf",
  "key3": "273j2FQnv9siexzfiG9zCVrUVz4M8JVGDimxd62xW1qSzvL2ePPJBHAZ4oxZ3trn7HD77chMU6QG3Zx9JqvEPUNG",
  "key4": "2rgSNjYM5mg3DpWX473KotCuUDYjCDWGz5R872BvBhGT7ZQh3xJDyRwYT58JMnMMtRdWpxs4onspUFrUtNF4gbJX",
  "key5": "3BQ3cuysqP7gfeme4BGDkBFfipBpfGtZ84EHLuxo4RTg4sKJM8Bbk7EoLa4axQrbi9kLrQBHKp9nynwrRGwV9uoN",
  "key6": "bLD8SpnukJ9gqi3UdneRWkDkUhEk4w1Uj1tw4zCJQByCSZwAEvnERkdT1NKhPFXFHqffqBwUwmQXxspK29VUkZX",
  "key7": "3QoPWQmdo92ba6jtEjWD4fgLaLc6idZapizx57rYkY27au9pJmoGuCYehq2RwfcuspgGGrTohaY4sWAqrZkXikkE",
  "key8": "2mrPnQvCXZ7VGsq98Mdai5nuUjK7tVbqRz64yMk4Rne41exnc4LDmwRxifWeguBrxaqJjvNKBhVpcdY68YDH2jZ4",
  "key9": "dm3gDmVgmath58PzEs4sMP5b69Ai8pTtDRuth8CC5Q4wnnxqFVxQqAewu4ngYiqnSS7fZq3u4rqTh6Co3WLVow9",
  "key10": "3HkXtZMRUQZGHebtj18mM4diG2ZXMU41xiqyoVoHRbXLhWWQDGqSr4MBUhP6oUti3DmZTfRVsXvv7LB87Nuootjy",
  "key11": "48dCurQXFitQ4tsxhNPZ9XE6pBLHXERHngHgeARgGzWop21d2zuTQHHY9xgaqph1UwUz8JawWbQYxNDAvFjsZAuU",
  "key12": "45RHJze7UMtCCTwpdbj5TYhM4oJz6zYCUmYzJFw2HiQStgTAN1xHho6xtxTbGVsfdsh6LvjPiRtE5qwfUoxM3EUN",
  "key13": "4ZktjGp2sUTT1JGC9Y8oQ3Yme8gct3AAVdTaruxqU17wwkLWXGXKfmQ8sUBmrFuvMtcp2vekmAQfk1kdtaFxeGmz",
  "key14": "4UpnzQHqoXiutmFNiVLxre5xHhRws1MY3RmmekjqXpKuEa4EUQaugfSUeqfgwx8Erwnkw8wCEwZUz7bq2cMj9mzF",
  "key15": "56ew9r6WdjHHpYZ4gShxrQCbccPZaLWfcprbL1qYDhAqZsomzVY8AYfEmBwvHoTwDWzUgQPrJJb2a1k9hfhTBPUP",
  "key16": "ggNDexmGQKkVo5953D4N8SU1Wiz5zQBExxrdFRKsv7A5ZWnzhZWw7zBNahdYv5XgdJYq5gDoozUAxb8J4hHeAUB",
  "key17": "62P2FXvV4TodG6BXCtH9wvWprg7fTqvK8jwDnaPaihYy49EsBLu5dqMExaHQoBJ9UwMhMjLTZMXXrBs3ZKdFhDAv",
  "key18": "2nUnDLpryKbbs4TXdjEP8RYViGYuHJ6yThpD9npTL2rn7zeJypWyVkJ7VLtriwoupwMNGzy5tgRw6H4SniFtQQ2D",
  "key19": "5cPHeq2gQoUSSWkdAYEFkuVR3aJn6SQYyLmwbPnomAjt6dMM28miY9cvkh9WsXBLM9Ph3NvVD9MnWrqwZUdexv5X",
  "key20": "5wsbFtwYBHXMXN7UFL77HLeYfdSSK4NhU7g96HXQGHoF4pTdVxKCeFThMzJAR6mVQLFvVaHQAWcVGkLXppBBP5C4",
  "key21": "2DZJk5s72F6Z8ejG3RpU9dwAmWgsdCSSH8FoaGFAZnkFVyFZcXKRi1Dgo3tN2aemxALo9JrK7kPs6fHg1y3x9HHZ",
  "key22": "2q3cfGDf94BU9gWHiH5ZuXrUx8MESSUkwGB4SEqFMpqdTyG7g7BhWVevHdxSfiEH956nzjJf3y2fkAoMoNdWuaNS",
  "key23": "5BCPawpUcSfDd1yVKKHZ9tTMtZpVdtk1x7kGsdYG9jysZjwR9MyUrxRy32zNEJq6YntVBJa6rZZE6o5qNBYxqpmp",
  "key24": "585ZEDXYRcszhyEXsGCNpiTqrzVDDND9myaagaN2SK92QjggvdiC7NYovfgvWdiojVg67yGF7uf4dbYd6QV3dKbT",
  "key25": "HSs47ANg8hLj4kbCvCzpD9bYb1Gh28N6qnkB6Ecjds2AoM55GExYqNJUrFAW17C5oQHhy7shQYhL9NjjXU8672y",
  "key26": "3i3uzCN9bma9rYxhhiBv9AFbsAcbtKouHccPHPvhqzqt6XT2tWAeDCUXKcoikHiMg9uXM2G3ns4gvCyPKxbvNmSc"
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

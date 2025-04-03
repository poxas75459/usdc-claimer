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
    "2CVoojzrvoZ9x5XZVLAAqQWxWMf5Mc65BssA9CK3AdxcTHY7o8nSD5BAnqGA6duLvCD3sPkcbwhVv3AzRGcBkUjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQd7EH6QvqGQESEWZPDJwadY1aHMsMBRtwvEmAyH4LAv3FCFmqjTRf3ucXRSxobzZTPJeXZkgkCvFUBspFgmAYd",
  "key1": "h6g2utVCq2onwEoUNgeBQV5RTn5Q31vcLBdeyoa41Hmayb5YaNzHf1cN1bhKM1h1X5BSiVsZndxHzKg8mAKuWxQ",
  "key2": "4rLfQQJz2bfi8jdUFR5zhNc52bhNuRRv6PjLdL9LLiFQN4eCvPWwwZGMa4pTASKqSJE2NWv8GEp4eu4yTqZom4jz",
  "key3": "5kJ8syWmPU3J8id11PVtgWfKF1ZJ7LEUYd6C5mbBARfX7NcsXSZ7p7WpGkZ9pqvPYb3zmrY8ZUEizRDN2v7k7L1T",
  "key4": "2DmLZPpyGegYyQA2CeVX298o67Sq8iJJEeueQSTMq7dyRLPcYXEqJnvApXZcbqHiNaxSpoBEGBNHVMc1gEGtmtSv",
  "key5": "DaYDdTaQj3DcFfQig8y4ucWn3yQB3K5dZcCtHvANAqKd7rEK4gqg6kSccQpzxcn9bQ3WcaAEixctJNzfHdWXzSf",
  "key6": "35Fz4TEVxq5fkmeyXgPxfTdcJ1agzQTxivsi78unCbq8YMTogtWZCCqqhB3DeD26rFWBP5hFrXy8JFeMWFSdGFWf",
  "key7": "4MbfWyRDKQoT3npNypzAAaKp2iWFGVP6YkbRsfRNmecPgnxQSW97MojoiEuTYN4S5ZMLuGeQP5RERqm5MgQy4jga",
  "key8": "7di7CysoVU4gMwH7EsqCuRhwrrsb46SBZLzAv7Pz41C9ZKNFhrnaY86VjcwbWx7Ap2uF4NxB47fD3h55EjV1jt9",
  "key9": "4DoGr9m1nXqM2hSvyxfhoE69kX7grCivgwD2Gi4K4BCVpxw9z9BtiUAjKTcmiEmty38MuQYCPcKJiJ7BW6idtq5J",
  "key10": "5mQCw2vHbPuGb5RH759WYcRQU5PYjfwEHw1o9ci3Aqt4fgooCLUoU3ditUL6yh4PUMSLDiGKzjUEfFQxhAEJJDAR",
  "key11": "2tMP5DQnBUyHkTfSCzPHEAjQ6PUAkCJ9eb66fvjGWJrSR1r762nBBeNaK3GgYXRcaHnUsoUh6zpRxaKajuPTAMs1",
  "key12": "5gLTYXAKRvM2NGW8sgQaZpUf4ebNnamACKTPzHwEnxTi3HCHNwhqbFwxh545QMLQTPxaYFmLpAtv7h1pu29cYP8r",
  "key13": "2bDunteC8MCeTyjN2ThSgrmkRDik2jjN1fi3jmCKfwYvvFsoCRyxiAcm1z6Sb2esRJgybbmwNw6Ycu6cJY5zT34x",
  "key14": "3ySU8uC9NUZrkoCeudWVShXLt46J5XqfP9tBKDt5x6LDzerNKb2BA5eESBKYA1EhyVku8hD5snsCALWXZ4MuZh3v",
  "key15": "5ybJEZUGSiDXXS7mNRGkEk2meQs6jFmxwh2EsbKn81gStds1hT3c8viKhWhhv9ipT2ZxGbeBnLyhKQ3eMcsJF4m7",
  "key16": "62BSqJ8VKPCo55UZyfxPdDk5c6NkddBX3SNgoLUSjxxVdi2hyDnVnAtfcmzsuCPbetZisKPnnEtS8c3TfMmJy4nZ",
  "key17": "5mUiEBMHxY8GucJEfTm1stp4GrwiWgL4XiLyBSABVvFE43h64NgE8zzxPgGQvPfC16UBaZp2A3VuEfkYVcVLqfX8",
  "key18": "4yBnQKrhvmgQkhx4wH6KgE2asJFdZgNmatZBMBnYt8r1T5Ro3kEB5H7H3gZAA6s4Lb5GFXKuwRs3mvLRUWupQbVt",
  "key19": "BGfx6qG1sRjZqj2vtvY4XJWFTWE2ZuvfYQVeUK7zqAJA8sy1cRDtmzYkADTUGeaZ7ZXoGYvuEjC4KQbnHa39Wny",
  "key20": "5ZFTbczWNfDfaxYoEcdvdEYKSW8ASpXzr1XEoGZJJ5rtVezGrGPkPSm7UhsghZbA9FNu6zyXFvmQxUSEsAftrirH",
  "key21": "4c5wsTFQfAJguHRYThjvqfqGnLzEjQ1xbtWs8TM4k8N5NR4TYYrsSHC52f7EikSJ3p1uH5Wmjf626x1Vwy1cMucr",
  "key22": "3s1mEoMhYEKDAQrHtxg9f5cab8NZCauUWsv8kspkFgXTLnsYwcRrh46ew3wcKAEDhV9mcvCoqZdn6woGu5s797UM",
  "key23": "26xYKg7VJ9xztna5pYgjkSaFqEUcLEoZNYB9mcRHxxe883wYBKxJ6j8WEJoEb28VwokbK4EDZBAppRzsC32BnWqD",
  "key24": "2MvNgdpswZLC8x4Ra2YzLKBYN71FL3yBKpi8UCpEqynZPRGd1d1hJnDZm8jLmXkWsCaB5dnRHBrrxgXxGACdHLKh",
  "key25": "3s47pXBncdnTYgwePAYERHHjPLYhyiQ36jwecnGnGEsQBoZoinc7vV1bFMmHWBi42496JdCsFyK4yuAWLfkW2doL",
  "key26": "4nhfUP8uhRCiqLCz6y1mXRbKuaPenKvZHQ4Jg9QUgcqXAZ6VB6npDHNffeKmgD5YaF5SfKjvuxPWMBEgq5b6gWKN",
  "key27": "2ZahXQXCQkyL1RVN47uJ9mooRYeThvJ1zoWpTcTfKdWF8GHNLipCz2H3vfh7ahsAj8ijVc38bGdvWaGAEYyPFGKK"
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

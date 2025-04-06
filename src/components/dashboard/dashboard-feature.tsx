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
    "1AwP6PRFjjztvEu266cqzY5JYgf9gDL3vGopZfTqHYA2wYUAyqHRfK2yHFVMqFDAYcKCzeQxkzx11pqnpHBGz3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uqxkgqPDqjhJAXUSk17M3sMdTwp5vHDXG1zULWno3cBn14jQKfvid8QjKXVqZBB283gYjUrKegTu8Y6dBHrX1Jr",
  "key1": "2L9eCc2RNDcZKbfexLnArCmLtW6X1EqGsC1UxCRm3J8nyKUoZRYos7XwDKZFa7m9FVNGmAouFCQuNeJwA3Ua6C2U",
  "key2": "5rxKKHfHPoLzfzhvcsDfCKdqT555Axy1BDYxjnY1pcGzWPsfBWUY4efpKSdWxZYuU2Hzy162sxGv1r5eJoVowLNj",
  "key3": "5X9vZsbtoGL1zGhRZTcAxm4GxPTsoC1pioJe3J4bYGJ2R85nqwKSqqheKtX31ezZSbea3kVNCGHDncCU9cnZNNb6",
  "key4": "5xC12Nmj27ZPDRpjZC2MkoTSSqCt7P3vi9AdRoCsWsu7pcpmrMFAovREhWcGGQ7R9TuxgzNFmf4mxtmF7y2kScb8",
  "key5": "Mpsn9fizV5fPScuayxudxRdDdTmEQVVi5tMpjmhTPdT9AadL7iNgpbezKf2exyEaFoDnjBfCYoo6PAnx45ex2dP",
  "key6": "45koUo39N8CRoujPE2qnH9KDM2hZ8sWoJX9MdEggiyDeW5nHdxnVyCeTVXpKm9RD8PZbVSsp5VbCW9NDf2in2wrB",
  "key7": "2zvXqEmvLR6WjkVH4sZqCt63qV2jMsbxPpbh4tKHbL6Wks1nnerzDkGFWV49WGscHPauh5qssczuxnnj1BZMQ63W",
  "key8": "2dYia32pB5yMxhX2wyBnkb2Gd4GVnP5FYRet6KeAoDkvpQF1szVSkmSuoMSAuNkLZEwAy54GMn3Gx5WREVeSNBRF",
  "key9": "66iMXjH7oNDtx5rcgc2uRJXhy4C7BdZjFqB8eFyVyu1sRQWGT9nZUZ3ePvZhS64XyNY7Dzz23noYSEhoCvn1DBTy",
  "key10": "wVnovrqTjDdRZiDCmuNndYUe7bPbMgQ2M5dSg74LqEVXMWvBAuLh3yy52RTgdpur1UKKXNmh8BKbcqjXqb3uHC1",
  "key11": "5b1DyCXz25yfmMnxrqbbEdTNUoi8NexMT4e6QHKe4dNDEtUaQvU9mEDjuKXr7yBPvTNEvU2gkHBnqz72ftJikVFh",
  "key12": "598CRkfPD2DF4CaJodHJMfH3sAx5yK2HqJavpSN255PZ1AdUtjfeHWQHjVUaGpjtQnmURBRGc84zLehT1328tXbW",
  "key13": "2wZBvqoZYy83ucG947u5mdjL56mmhr4KQHNpJw9279RWG3C1dikdBWYApdyJFAwmR5KsacyeLqmRbucVE6ebbzmX",
  "key14": "51GZHnq99TzWQhiRQnoWTbK7c1WHQJxQb9kfYhKy4zN2PuzStpAL2T1auPQam5EvXW7XoCWKN3aRyjAVK7B1p3Sf",
  "key15": "2W13k4h1Bek9doUH4kfsTBZBr8Mv9viNC3SUHmBbizLh5q2fAzwbbMwY2y75sXwieqNkAxd1pdT4e6u3TZLo5bua",
  "key16": "5LWeoe3EV8g58yWePhApRQ1G2AeojRn93xRqXSYHJydmTap7N11FT86wZCTqSXZzKuMJqEEMD6pnktyAqfwsAWWK",
  "key17": "2JytJbTDE6jMm1JrvmyHR4cTzPK5mLXyKnodw6b9PvPPQobAJsognpfcAYipfJYgnaHkZi8W5eWUmTWC5NhueLrS",
  "key18": "2aetQDu3JrinNa2gZs1PcHs8hish7Nyp5QmmjK2UX12VgyxsnSncNNyFKS4hfYAwbLdtfhjM64Y7VZkv68DbeBsc",
  "key19": "Fnm9mj2jT3AkErCGaRBAmaYLKrgp2X8xw5CXYE1tDvZcxvA8nw9auFwES51pWYxdskEzmatiF37C3sRsNNqswqy",
  "key20": "3jQ5rD5n4fRLhpnaynXmU39PKgLqeLB9SaKtFzrMC2cDdTiWbrQntacMbWvCCZSKdm3sePTr6rkaD6RDmfgPoCkj",
  "key21": "4ZHmNPq5s12NWMKQoCkvU1nKmHj6bztvEQZBJnYycuqrMYYFENuA2DtxdB9D8Bdzv9kYeLzwRRGasqDZ4tfGPUnR",
  "key22": "5FYxBGsVb4zQZrJL4ayfamckduMkJtmQXkaMWJawbNKXsQkJDjRZU7xAUYUjH2CTnUcucFLPqWbECjwyHysyckKc",
  "key23": "29gKjyuGsGiFvFYHyZmMrZCUugKp51qJb6cfRmni84pNjMueqEJjCf3Mhv4rPTHb2fUGgwxpq7vc3QnUmryMnpc6",
  "key24": "45TcgRDJedpEsiwAxH7EnxBMJP6DqEDefCVyrzr2NzngNji3u5vvfVUwVhEDeCAVAJw2URaXQSTGSrWXTL7qcnRE",
  "key25": "2FhRHKzQymQyqJad9rhBTK6aEBgYQgQbKSkLPV6xMLdChFNfoGVXedt6MKTnKUPPDpP1rYBkvBWxCUzGFhN3LMd3",
  "key26": "34FWRepKMMmTuR2gTiRbYDsoYiuyzDLBkKDoqumNPnCJiGGr5tpY6oquTzkB23nhWBrkHncS8UuojojmLghqMk9P",
  "key27": "3Ncn39EAWGShVWrkmvB82oxwr36jeYgePthqKC6fyJWf6Xy2rVoBPAzMDdDepu48LwN58Vr9SHxnBHNBC5Vqv5MK",
  "key28": "2PFwb3Rq1qWRmTLJDWWEebA6AETkFSKABCoWoUUgbToWowpXuaZdXJuUivLbY5zwU4CbmAtp7shovqAs1vpWCzRB"
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

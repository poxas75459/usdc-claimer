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
    "35E7VdmEqVDcFvRaD9eu7wZpNaUcVhKiWV4rHR9xZp4Gn8bWEBqnCBzrvJDsTtjSvCpAqPXGPcMvsmuKPsR68bgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592zzupXhW24o35LgLm6W1h971PryP4fxtAC1Pfmc9d4g6q7PdTho22af4FsgYd43j8ymBXYGSsvd82t6TAx8bQr",
  "key1": "3huwRoXWS5Vc97i7Q1ubTuLLzwZujCdfg87PeVqgv32nd8mwgHr55YJ62kSTVrX8qUGZwTZKfNipt2xWqmnrYWZv",
  "key2": "2E4Jamjp9GCBGjFXYfeuGayZaXej13YmDgUE3zb5aBykMYLFFMhzQTJ2pbfVVHb29wDgrkJe11fwj758QSCHFUAx",
  "key3": "UUH6hDdH3qSmnjVR5oFCMKWveLzmMPYULRWXAeJyHyps1HoNqMXbRa8e5LSdiJdzZSTm5yJYzYyn83rfUfutdNd",
  "key4": "2874f53rdHsG6XZm9pQ6ZaHKieWgbxjp9YrAJdHBKtHJwFbbSSuZRJYj8NuxNFGKEdq93YPeij68swu1bHz4UHAL",
  "key5": "4ewnUMfmRQ9CNPDjAP4cr5j8jbnnhcpN1wXAowMrhMzdXMG82R8NWi5whSk8LbgJn8Edsr7EyHCNHJUJFiAwn2KH",
  "key6": "HF1UGFoKCH7EsJpTHvN28ZMbbZKrjyL6etVEGV3vdB9dcm7H7FthhXhw6GCgt671b9mqgZiYWgxaojygWAVD82U",
  "key7": "5utGkcYFtSZ8CatUtAykrYUvRWC28YsSVAgL4ZdXi5ipEVdx1C4yUL27zmLo3x6F9FzbebuZ6X4D63mv2CbuSnuZ",
  "key8": "VPesx6SdnuhcVmUfVS1mt2Wnp5WvJ5W63nr3QDHA9ZBrcNALTZu9m8wggCE5nGV1vW3UzGPBm6tWA5Ree179KQm",
  "key9": "4UUv7nXYKUPKWCwFngbbLo5gqeHoU7k1JYqgW1kFypKLhjG4XT2U48eBUMQCFqXBmXfmf3MTBP849E513kb55quu",
  "key10": "4skqVS9dg3aYBj1fzA8h4ZcbJ5pwcPS7hhVaHc3EmZPYh2zZzJLPYbDpJ61fwx1d986hAwPTfwkhHkuE4pqeT8iz",
  "key11": "h1vEVwQU4F3RijmWUYNqWVsV7w8rRDJg1MqfzGewMRdEUA6VCRqupubozv3gm3Ppep4LU9eKdqh8dvC7h8TksNQ",
  "key12": "eoYkDb41XDDZhCetZVD1qAHHpq6pmh6wpYGH8tQBwt5PJFdxwDi7ca1bCSPDc3VFcyVixds2acQcAdqmtBX6WzN",
  "key13": "2drfxGj3h54XWXvkWimMZ5x3MQc1tcco9yQ2P5DA8TtzcaTD5kUf4piBhhpcYpcj4vieNKJqkvu79HB4NzQgyQh3",
  "key14": "3VRSQyWuZKPZEYQZXVHnvS9DBNVMQ661ViHTxFr3Z7fLeQ7rXuoaqKEeS6kNV3R8yHDtRrk1NbsHJDbouMsLXbc1",
  "key15": "64DpnFkTZTaf9RojUBn6Jh6aFrTEBsDvVMK13TXJx93nGbRtP7ZvF9qf1jjRX8ZsvRs3TFhTGdKbaoDKuwaBL6H6",
  "key16": "2gC6bSgzzvU1XuEZm2qdpWLtLGadgwpnTYCBSt8gDVzsuoovbGJiZW8WN4npTEgCujay81YLea691b34Tq54yNsz",
  "key17": "4ZLoEEg6H61S55gEYnJ8ZanvLh9EkosBsiw6XuWzLBzZnqHwVYSmNFk4kuzpwUXjfZ8TP9KEMpcc2rXuUjgne2cU",
  "key18": "3K2YaqnXNzg9AhfcH3SeC4SMiznfkDrZuriGCLXYuSScVeCq8RZ1UekXg42S6ywyPyLnCwaNa3dSSWCD6uPjzJRd",
  "key19": "3cc5RWXTD7Tx7edZ1rayjKWoKcM6ZcnYvALEzcoC1m4nuQxdHGDkhPCubkvb9MFrAufCVBR6zvwhtXKmgkLis145",
  "key20": "3zAHjGnGQNHQLseURFMGR4b1oMSWhMRxNhztWQo6San7XXSCxcJ29EdmFQYck8ivUH3aqdNRqKb2NVw9T3uNXM8v",
  "key21": "5MeZWnfZMzZfvzcCgBiCHv38XAGi773geco5BAdXWuaDfCwPbpWbXY4UCJQfZ38Gz79jerj3ieDqmtqdttUKFEAk",
  "key22": "4fn4ckAbUe2hfxFhZLwgBv53rSQ7ijH7a6XBhPopJQeMPxeU9ATxcYGGcCEXjVFJ4aZjijQVsMmaRGVPtET1frz3",
  "key23": "5Bf2F578iv2UWiLvK7PDvAN71NV8kgRJ2ekjx49U8oDYgeSJqNv9e1afR7awbrXQ4FC9FfoakaXJRSq8boTFRsvk",
  "key24": "qVfQCcQyVbg7iNvnj8QobvJuvmQetrLqdMnSyGycPmhpbyxiiVHbUCnkcm4BFYXRqHqyJUr8VWZdcn3SvG92mZR",
  "key25": "3EYab4ashXbDwSithPraSJRx9SvxvFf8WkPPKP99i1za6R2nejEzumSN7QfynBsxndxgkeiHWEGhChu89gyFQ5Qn",
  "key26": "3PcwMGoNFEpgTPsnAAWvLXBCKsqXxRLhuSCUTA2JsQCnnopLhQkXcawxGfV4CP7Mds8wh3bNWyVoFSUYT1yyePsD",
  "key27": "3avP8tYJHch4cEfwjg3AFGHbrebMVM7Wz92qVSRTPMqg5jV3JwYFZEH91qiW2KXodJA93q7imT5r6SxFeSQTf5fY",
  "key28": "dmkNiyLaUTxvvb8dqFTioHxtdNMjnfimz35sBcTDjv4yUcxg42n1dSZQzL6A82zcsUToF3mvdrUnZhb8EQWHZRp",
  "key29": "5c48LyVAZksDt1wLkd4f8X9efSG6QbdfjUYrfdYWitUSpkdRj72RGTrZC7CScK7W7pfnYjtqbVjn1NDFkCGzxHCW",
  "key30": "5XuksD7xoMZjvqVm3tqSUA6ywgg3qNFnWntKR2ye9euoPQvEHpPhHmppLaaaP2WGUqpfcEcqkRXXA8N4aKgEaGG8",
  "key31": "mChV5aoVkEqWuG6UtUNL2vtHXHSZCZWXRZzvECtSvBgbiuNLybv693g6GmBKV6heHbjoQNumossSfM21rDmDchc",
  "key32": "5MUgkYXJt3KrPxhSkxLDiVkJCTuxRqdjNmaUcG3WAU4EDM5pk53WKLtEKUnzDnRxo9QbhhyWTvCCWttnXiBjbE6J",
  "key33": "47k5XGqUicdS2QtEz8apNcjyU8PPzY5ftuLkL6QdyixDhwetdGW6ZvvEpyN5QKQ7ZpqcE1Yx83eaBi27EK4kjGZL",
  "key34": "5qG6LVbEGLJDMJy3vWdPggqtyyniYXjHoKd77jvwWRSntki4gcbcRN5xxx69YGry7sL8kkVtJUfo45P5uYsQNTgV",
  "key35": "4PWbQWVdKqGMoayA6F4huUdGpaL2XdBDxESYAD4CFLD3K8UXb2M2vWWMWEpEBpaFZVwVbQUPQo2mL9W6Biqnjggv",
  "key36": "4zXKZT2mGGFxXQK6uvqaD5n92G9LA8THHobL4Q9CEmwEmRKLEB8isfXhpmKSfrtBmBqkXDHUPo6VtY4uCUc4urS5",
  "key37": "4o7Cq6BHQtFjh9V6UtK29bvrBP3eV6Sz3XfeZx9prV1EB545xkiZQTnts2ZXUC3pMcLmMwrWytT2hyPvmse2g3ep",
  "key38": "4KxBZG4mFTJxg32fdzA68PX7PKaQTqnyh9WKTaPYUJM6kLmnCU98MHf4HC7fubYEtUGcZPep7Znoj2kt2KZkaTGR"
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

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
    "3FcH1ndAbNFyaK521fReKFwWp7V91cYAiAp6BEpqFXsQ8zi1F51v8EJianMLLKrT17ZTBi3kuAkJ2w1kCs6yEq83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mkFxVexipbaRNHDCn35ERUBiNcDinSGT4WP3e7HLN7iLXrYBCJ8F8nai1DS3ZGekMufwDfKv38pNyqJrEu8brj1",
  "key1": "4H4AyLhXfYoJ4ujgaqY45mrsJ5a7ZYh1w6qeKgBATzrCvwgYYFkRPvS5RAvvZZtFx1TtSTfiNL5VTSettQKakGsj",
  "key2": "3PX1ResPRrK3MtJL142c4Lqf3Hs7bDcHU54iBGexoCESf858NtGZZxdZFnnEAodvKUagexVg5igdcxHGArq3CTBW",
  "key3": "A5AVPNKEjvmrg3BWeGuyrz8EG1GsC8KSYoYbhgnmS1XsiTmXbPLrunLqjr12hGNZ4mvkNz96BcAg63gaf9hoSkr",
  "key4": "23yeAUdHMMVxeWrAUERJfGZNriFjeQnJ6ivzgK7Zcswt7wgYqmEJyNF847jQZmQdtpCa7wHEPwnVfLoKkLpKPds4",
  "key5": "5nYdUb7suWdJ9jfY5vQGpKDLw8F7WFj2r2AV9ToREwbn16uh2Jdwz5yA4N3XYZaFjdrpKZfLmGUjJhmXmmkKMG12",
  "key6": "RjXVTEb9NVgFoMN3PBwXBRvWFcNLzVGU4N5d8ToQrDFZ5s43ZYo3NBVmDfiQYPP55E9ivU3Tco6s7XTwxKgdDgQ",
  "key7": "54XdmGueWq4TbG1VGLKwacENN7efwwxrMK6kc44hmruM3nRb8sZWVXa6Riyrq8pHp1sJ6MfRBDB8L3b2u3KbdEam",
  "key8": "4xjmbt4NSSs9pLs3PzfdhCwxJ3NwuaCD2wfCsDo649mcehcFp7Lh9M6Bb8sRKkkcNjtTkEtaBfq1PAfwMiQXvPJ8",
  "key9": "4wDAPWHHrREiyYtJa79cM7Ysea17W91jVt3WvpRHEPDwkHivE4KrFZ3zJPE496QTMsYFmcxbUpep2NB7nW4ECFVP",
  "key10": "3bk63riCGmWEfUQoshqXLpEkpFzdr7M5cF97q5pi2p5wJy9SRuQLpueQ2Cgj6fCxX3SqJ3ki35NpbuSSbcbQjpdF",
  "key11": "3c9wHZwGoUJdFj33SDWC5wKTbMgrVfqp7TG55YgTKw2Jdc5ooBmXaZuDBMLQbtwT4YYUdwo6rUk9J7wNrJM7c6Ro",
  "key12": "5PdozUm8cbzoSgTqDC9kSXAbEGwdLcFgC463WCW6pWReBy3xXoLKabUvA2jRMUutLZYNENwbcV9d7kJxtnc3Xgbu",
  "key13": "XDqJF1NMcywbw1Mx94VsRUB66udDZRHsgUkaAr5nvDg2XMGW16BBFSwCeJA13fPkFtvXuUMQmXeGfnsz7Lpcz3w",
  "key14": "3w6ie4uf2yoxsQ1fpzEJXomthw5YvUbgNJLxh8Ht4TDsZ51uqjpysi6S6TMUdqEPpmEuZzFiE1CyLoZrC7j4JCfS",
  "key15": "367qrnQj78gzvUChmK56apKfttMaCneTsAzF9eEMynAgHZFQvBsVygWw1Z8KKbxSy3soq3khR7dAEttvda9hDoLj",
  "key16": "5Lzb14XdC4UaBwaT595dAwBXAxoYFH2GEjnc4iD9kRtTDchSGrF7cCwdnsuxY1xXGHbkkcvVXZmwd7SAEsgJEWFd",
  "key17": "4MuV49ajwk4JAb6akjuuzcvNoUmb4jCFdNEMj55oXVn6cX1v28s6dyNapuiiJS9dRTyi1nXT9CqzYP3zEk14MFiB",
  "key18": "4SGL1THnmivLJeUgpo5ZYt5ANY4diiNVPatm6pxcoEGD6jybF3Q6hNhkw6FanJZmT6qs4diuzxheyRbAgTZ4oz2X",
  "key19": "2a5ZpQbaQo7qm8dHLzW4SDheA9wCgK8kVDuJ1dT7qm2GqKcBw3FUqrNc5wrb8QhX2M6ZTS1Ghz2PkJAq7HbQaPZf",
  "key20": "5EbfbuBLfJUy3EbqmhUgzLcEkThEXBHV7ghCzRA2tUL9CfgCrAaVFhhwNi8EaeaRCPDGvwVvcMc1BzJBgf5jp8ws",
  "key21": "3jrTzj1FDdBGGbnwWjVf1QTjnRoB8yeGHzwrZ1B68XCLG6yi4FGbYsKqkpyy4RBXotrXLF7Xth7t5YcirPupNndj",
  "key22": "zEaSnJNK5ZTAysZbtyLM3x8e47JBKwzBY66aFiVjtdymZuKNFwf4etJMHFGVsc4UvSyRmtSgXivGcaMJ7HXhuS7",
  "key23": "UL4E925p8scERdm1dydqcxyDUgcxCuS54nNwXPXr1VVbEjU5MT4GaEXGgLTAton98XJFCLqRCXy2aCsbbBvpsHz",
  "key24": "4WLvmbzGze5WhAVD3JFQ5EPQLkm5EY6o8PfvzG96ggYWxdwFsc2PWsNbKfbqbD6Wgm6VTGPXHY6x7vd71La8ggVW",
  "key25": "5EM9iw4LMDgqBqPSrXPwMBpuV4w2G4kPQLCjs7XeqBk2YLQH64BTgPuFa3Krwt2mboX2J86WnEYGFcSPfGMkXgqW",
  "key26": "2SiwAo5r6HJmeWPw4V2CFEPYrG6BmcRMATzmNHNr32xKmVQR7epFR9u4uk1y4Q1jhU23BZPYfBHcLAw3DecUXXze",
  "key27": "39Ye4TBd8qz25AKJoiNT2KUrPvH8ekCfKHKmdRmB2aNrH9utgci35nobHP9nsprx3FCv7tsLxsd4FxZQwCpy8KGF",
  "key28": "q9zK71trYGpF2aS1hzts1K4s5GDUk31nNzejqceqwBQQ2ugkFbeAGYSen8gtMs8RYRSzyyBt3GPgephrsXZmW98",
  "key29": "o1K6fXeiTKXK32Wz1vnZgkZWCNyFZhX6EsgTZgQkNU6n8j2AdW8pfc1jHtse5QQBhaXmGb1e9r9QJ1hn8PAS2NF"
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

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
    "3yJJJgA4LoQ1jCWjHvjTks3nubaDBCWy6UB9MxaBXYNeWVeM49DrwnLNpGu5fMStd95mAmgm1wFehL143qUSxBfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jY5B9W8HWuh47zReVqUXsBNQurKEmkWPyWfyERMVxdHEGKVB87XBTpeNMoiuvW9Z38daQu1gzwU98fUtVZhUAJb",
  "key1": "MxgsbVDyXt5VFxsj2HSrco7Bw6JD4gAqdbi19EWRS6dtTQf5MpDJiD3WbscihPkb6irp3XMTmTbxP2Ws8zCN5pZ",
  "key2": "4fKan3oXkvqLPkyTRTAPz5EnBj5LR3SzMhCQt6bVoxMcpQ7E3ojEoU1r4qeQRAWgRQvpmVwEYh6mX4FrLVajxhK6",
  "key3": "5guZfgBwXYtafXQGEoE44pJeJ8DhofFgjWZa7R7sRcVahNHDSomkrvPvv5vHS3gz9MfA7eW7Nijfq5QPiRV97tx4",
  "key4": "63GMupDaBGZoGKU7miipd3uL6WHxHXxu685xvZackP9uZeNKML5oMpMhgzbF6htWtgWgmESGFP2YhEGPNQHeeup3",
  "key5": "wEMPopGsPuZELJVnQ2mfVPNBK8DSB835yoR199GVYVLqiUXCxmp2qhAYmkNRwoAWp3GZA7FA1ZhGyo4itKcwwjd",
  "key6": "4A2M8M6EydSzGwJsT6XpSwgWuWGxHZz157ugsmTtZM4m9wRZ6JgYkUt1huFYcQTvErzHCY3YbtyuFrnZpvYeuJYV",
  "key7": "3g9wox8gQv3Yb9AsQRQCyjLEsBXr5yGdRkUgb92eMnQeVKkLzz3YR4qnHXjGErdNdEUbZfdaShc5MD3KBwrMFKMS",
  "key8": "664LKo8Fwct5f3ybG8QmSerzeNfTWXnMcRdHgKRAoGjivvKpyq5UZdxzbEYBG5yrQRTmp8dzmhG9kecDb9HGJk7f",
  "key9": "5Yxcr6kpqWAJfURcqR5HePGQ6zMKr3brA9typugGDNSAHHyaeqtwiYG7wMxii3NtQny4TaGALraNGpb5SkVEDZp6",
  "key10": "4wEbu7ikzemdcwKm9SFEd732LGeGqSrMh1cBoCcwWJx9vf2NGkbhggJ4zCPvqBQcxBBYy19riyqQDGzMnsUaKbKa",
  "key11": "3PnA5dFaZiwpkTN3k1VxFwvLVgsjAQzoR1SUxstBytk2yNUdDhK1xW4EJ2s1GrdrnRFRYw3DC5eGnjc9QytcVEsD",
  "key12": "3UBmmCSz4yGapyciGvwNEoqtPN33G71mmvrHBxuiddPNNCiGMGfKAAx9Sr3FpsAChAL1C1JArJ5k84LBSfWEzbzi",
  "key13": "2DAYxNjkvAdb9eZVU2XBjVQ6bWQSVbYw8VH19MRqQ6UuLueiVY8ndzScW7j2txTTnpFZRTNbne5BDyxzRn11Nb7u",
  "key14": "3iZpTLicwu9FJmSBxdAbMwMAY43PQjxYzosEVmqnUQGYV3VR9osqCy26dWZuKRK9m8qyGen3QVYp6csHKVV3sJjT",
  "key15": "2jdsK9aVgR9oJMUrVBHY2oQZECTpxKziRA2ni2wjfPEifSZ2vZrTdnjm9GcfTKv5hjcwgSSZAsVcKTX3TvNFQmCG",
  "key16": "812UiThDMtBLFwmFogoqridvtQHcRwByUwHiuVXvk89w7WBo9uKUdZDH532kQWftYkHuFXcqBarVApLHR13aHa3",
  "key17": "4hcjkTd3NQL1DFzjvG3ZKCcaVM58xpxhXqDUwYfUehwbJKUsGkm9xQJaZA3vrjVZE3FrJC8t737J2pvsL2N5K5Zq",
  "key18": "3mHdy9y4m7yRCZb1gpYHxWjX81w6SuUtCiQaUysSR8EMPUsPvsehh5Szg7CheRRVV4XiGLP2dhUXxe22uQJbvdvj",
  "key19": "ZDU3PUua4FLW4D7HSLRBZgJMXfPC9LrKB7EvwscuBE9EeVC8iyAo5vEaDRqyhGuth4vT2K2xA1Xp9fetUZQ71u5",
  "key20": "n26ZzYFMjHTy4cVkA7H7yK4J4azFuQDDUdsB9q7a9H79x3QLkgoPCisUcpzWpLihC1fyB8EpRNn3rj3G2g9iBQS",
  "key21": "3NHzmMXVxU1rNBvndAKyAt8UCDB3B7ZtomQKTMPzs5uikTzyHqktAGuS1S5C17ksJ3d7mEpEiEvBvAm4yyfktiny",
  "key22": "4GuiYVqgFLDpyYTuC2dmPtEpMMofnL6r3V59NT61ogE9NRuL8nQRNYHAVGdAQhna6R4ZejsyzJ8wU1TkB6EcGzwK",
  "key23": "q2eQvdKKb7xfiNJRaie8kjZnFgPU3etrh6QsBjaRERmpWH6zWpqJnCRdXEFrLzhGYETZULEGXq62xQ19etCYBNa",
  "key24": "451BeDy16GhbNvAuRUPWahVRW6Vrgbv7qdCkLfgX86NeR1SDzR4SbMRPXPFfEGPeF2Y1AgfAzHNrNukzaF1u19b3",
  "key25": "5S6Z3Nrzz1f7DAb1A7tf5sogSW1YbWFGemSLW8eLnTFwThDYyzT3tcd2bEgPufosd9pzQcBTU7bbLg1ebXiioE1f",
  "key26": "4GFoarVQ5R1AttWweHBBwBuFwL1FREPf4wQY5buT5R2e6w76HnPh8Fbphcun5zJitmVqnTi4ZbEqrVeVMa7tSH3q",
  "key27": "3ud3yA5Nrcecw6vsvSpFWRprFWetmgJHgbtrb8bhvyEyBN67n69Pp4nW8Ywr6pX9jm5sMQ1kNuJksFuJN7QPfKPb",
  "key28": "5jtDcBXMyzWGDsayZDN22MqK5StVbEHkKd73E5UEjAUs4wuLCB4opnYiJMKhBpjtPCiqrBZFehZfTTDFb2BQUoBr",
  "key29": "SSWRLY3EqxKM856baXF4PWFs5wrSwXGEDaLfJvB83TBxJxYv7Rd5nywN93dCvmvc7t7HJaGKYAcuGvbKNGEEuYt",
  "key30": "2595xtbW6asiL6wWRR3hJ4cSZi4aJpuZh7tG22LCmXNDKPzArbWsx8kDrZyMWjjDgjYbeCM5kATvxXhN5VGYELR8",
  "key31": "5KMiJqA1n7HdNnLRgp8iSDCtUeHp39rdu7G91EjiiTE9QHS8TwDEj4jgMrGCj7eo1oBXx1T9XLwWtV7tqAuVzsnd",
  "key32": "2u2EY17YhPDkz7F8E2YZwJdVEqdvPHFJ2y2kdXSHKwW78NKMhvAEP66tPhcVBeggTa3gMYHTR2jCWEJS7h2dp9MW",
  "key33": "4T5fTeFmMxXbZENtabHnEiyx5vPfzwDGJ9j113A6uMgv7owqLyCxvZTCUXGBuQ33McUV87CGrmcDtGEhhTQmMV4p",
  "key34": "5RkcsqCL5XC6ggfSBmx4e94uMJgDqZA2aAqTddHrEcTNB2ocj8rucLDuCccpZvYXBbwisS4AkfjXg1mzKhyktZ98",
  "key35": "3rkmeBFnvuA8aLTWGeWq5MseEHSwBctoVL3ybRdkbMKzjS4HKB89io6kFgBQXHQGhueJLNTfg5Mx5gkLq7SbD3ms",
  "key36": "4UGq1uyWf2KpiPR53JTSPxoxHSbPJHsfEHDahUaBxts6RPis7jr3wa9p72VMEEd22x64qsStSHAys9fgXxBr9g2x",
  "key37": "5GAENwvWamB1bkt7RpjMkEvpVs7PD1edsFuKf6N2yvMi11eGvUn9pPA56dRrV7kc3h2zT5vyrFoU7e14GGedqF2A"
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

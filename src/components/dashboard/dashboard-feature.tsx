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
    "4fhBokoVMVdeqNQ1bVDGK2zBGXZiq1xNCVh4WPnLyaBEhRv6UuyVix6P9BqvaTPpU4iC5RnZ1z1cbdE3qyF2uHAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zgGnpf3L1wDVHYvdazHFWdxWrxvBdoNn9CJBwzyDhfsuJDJT3j6pKv5pTj2gZWYcZH8sUw28qqw4xno2jhg4FHw",
  "key1": "HrwQcQ27iyFMMEoks9VwKbtFYCLkdoeriwpy1HLiq8VnU17AcxXyvbXQj4B66nzGL6Xa77J7G1BbmTcGVj1TJQW",
  "key2": "miyakDeShrdn9xeWv5MVaKT3G4vh7dYU6XJkkC1B2iCJbLUxUfL29TKqWcg6sghxy4yRXhdQ5khwbHMofuRVtFG",
  "key3": "DQmEKEw5ZtRkrTKfQwgZjyVRQBjWKEaT4AFrjV3CivDLVqyF8f3FnSymXdYvdtf2ZfaeLQxN78d4z6FcN28xXP5",
  "key4": "4kZ1m44aYKRLmxqYNyNBrrncHN2cTWKCXcd46EcseGq5Hr3MiKchurZAVaBUUCL67tuAoMHtVPF3Q6UYv5aQeJph",
  "key5": "2UVABubHVGcX2Joyf4C6xDxnxF2xbpUFRnF2zYN7jQAAZQpWSL3J9Tpux4QXHGQqR6kF86fvjuDc14rN2AEM5YVR",
  "key6": "2ErNQv7f5ftw12ScZgkzwDKu8zM7CNFFYFYyrcUu9ng6asTBaRM3FYniN7M1gNSyHfQRc36PURC197wxesDFpNvC",
  "key7": "4E9QnhbukwLisWBS7mEJNg8NBvZT5h7FxXTNeB1utRAgMVGiPm3j27aYwL8XHEKpPovMMytgGyZynSUQFSLFLV64",
  "key8": "5aRoUJ8oMoqJhoRgbWvRQtrhPffcbPC127L4Mhe3DVBrsBmuT8CR3PMLLT1GrwvFFBfbQRedRyE6uSmREek6N58J",
  "key9": "2edH7XKSeJYDaq9mgXhrWgJRHGKG2j6UGHrFobTpproG2yeJmUoHo6eSiHCsPghEBLDMerx2J3kQ2LDabXt4YFFV",
  "key10": "5t1quV9U1sX5cKz5t4RZkwF8cyG2aHHH9VpuUjzyzBrBHCTPuTmRTRjcxJLMaddLrmLW6sxFYBq6eVzwR2ZGJxe4",
  "key11": "3S5F4SMopwab5p6x7hLo5rAKPHenitVz7TF8KyvVc31XudXVoCLmZ8YDSnyKrtNYMpF8se4KTPYXfZNSuY26Dfo",
  "key12": "5k11S3tmcgECyuVvQtuY3N9n37jbRHQ9LeVZj4GwRok1ZUN7Zs3Shs9ESUopcSdUG5t65MMvM85AoVHPAMabscyt",
  "key13": "5X7bn6E448H4cyVG9eHHqcfZYz8ttakGtqP91mpy8nDSsX3xFc4fpdnTSoMa77zGZzbym4DN5pJ6KETui1XJUPTq",
  "key14": "Fr74htowytEkxLP6iuXJW1r7UN14mt3K1GdwJMHLM9F9qdHpeApmmVSpS4iEUzNMRh6zLJgmiiq8BYdYuBETUcB",
  "key15": "Pd7oSNcnbYCGGiNPktd9BA6kjSNmSHZrJFKKZGqMGejQNoaK8sBxgpRM1devRNv3bNnbu64428vgyvUMPQrZknr",
  "key16": "4icj2R8zpLUxJRmesWJfSnHHstz614keLZcs8jyAeU7my9Qaq6ZS279HKAbNGvkwJpQNZPw5kXPLCs9rHC3ELhrR",
  "key17": "FMG6GDjUJBS8qySsDyhC76utRzpWEuUGKb52Xt5SYMpzvLRETGH5XXUUZGNJr4UTg4pjAZo3ai9FXX9Vqa96m2U",
  "key18": "4UaXNPL1wRUVhR6Q2CTK3eaZ4TD2djXMVyfxHbd2i2hhiPePwqeiZS3r547FVPgqLkxs6VZp7hheB9zZUF8wB73n",
  "key19": "3zR6nZTuM7mWM9SRAbigc3mRNVPG4p7w5fqLYgdxgn6nmpWh2hBNzfmVbuyxah8FQYckpDXtqCF1eJkZLmv1BAKE",
  "key20": "2K99ACLGQcUUvieAZoHh4QuajGbCNTR6poH2svCWMfpSxY4bVHv9Q4qJ48mx7eWT2N6p5W4B42QayFWXkMhPmFB5",
  "key21": "5UEtbLfYBHfBjvAVe155tkvqxUZXXDLjvjHnm9DcWUehSQyyTwM7qfv6EtxutJop2cSoSzv84FKKYSFc8qLhN6j6",
  "key22": "ZLePBHVtJoe5YbmxMBTNjYhpRiUSCNqLZ37FwZ9uyP1Qfu8596ahMe3gBfcic1x1h4jLCihaiVzRY815LRtPsk7",
  "key23": "5hKEvDA4dzqG9BN9wxiXYzNxtB6BaHQh8NJ53pdRi6gvQkMec2ZxK33SqkKVAXg79BrrQbPev6stKosHW39CFHPz",
  "key24": "Dt9W66YRAHDvGpbMCCzDBiko2W1hiKxPdhLgjwZKWi2Rb6f6T9VJh1QLTDcRHDW6EndtACgyneEjuSxpoZd9wo4",
  "key25": "5m45SVQMr1tbT5tLj9DDNBhyHq4GS3U8xsAqCkprMWwd4ouU7Zj1561ZeLomEx6McShNS8RUMtMTdVWvLUFv525D",
  "key26": "5FZ7tzUprk3cpEhf9QXjbAgy2j9VALSZctNzZGTLhT7EfhMf7ncNL81gMLnuHvpAp9MtU7Cunw4bFxhirigLCzj8",
  "key27": "4aF9iu1sSdBE1niPBa6baewqqQLxQHp5aLr5WHLpwjzZc6r8zRWqBu7j8ogzeT7Q88ZsHaDGkpAvV9Ym6grguSao",
  "key28": "5AWzmU85KZyjtSjXsEd3g4XRfZp7R4m86En9iUqGkfTQfd9wZJuqYPA5BQADbewaKph4sgqny6A1uvPdjVXEZ3f5",
  "key29": "2ze9sdsP4DvCs2F1tusw3upoZgbWa3NwGbiVyFai1uB3Gfrpydg22y9zYjonsXVXvbeXcdAWBFVZbzMrHFS4NuMe",
  "key30": "2RBnf1U3GxwRKzeyNpQ7wgUc11MpTLxvh8SCmnCXoFkgXbEqTuu7FUgVXRnucaLo3Q8neLhow8cmDhYsP1J3Ubgu",
  "key31": "3wXy2n2mnasRZeb1C7GizLFHZX6cPDC6Ne2XD4Csh3TherySU3CQtZuXVBBniQ7kXEEAPaYWss1iiz6mikeJjZp6",
  "key32": "5FhAtwDtbSy9KMYpXHgxEEaau48Smo9sjSwbNCir6SekT2g5rYasbCjv9VCHjfmx1waABdhavtohLfG9bQ2rthhw",
  "key33": "BkqmVpcbiQASsGeyNikuPnvzQPs4YUCCnoMBPvYEECTqNjo3ay8V3JiXphG2kpxhQodmk2UuqbV8e8sh9zn6eed",
  "key34": "5yrvKMPZZvUuUSDTL7v59Nic3V4WNsfwtcwv6msGYzFzcGC9NP7Xa8n8inLCyD9rstcBQKCRuhDxvJnbNPnhufQW",
  "key35": "Pj4vxb7mS7cLKPX36sc6QNPree39CnBCgb5qR8NMXFPzffFBPuZurb2JFza6vmykTJ64v3ucakKRyvFu7E3Vbb6",
  "key36": "4YWgYtig7HWNhc6uutJP8fs41btfDe8pqJF6WXzyc5SMh4fi2Fg9F2gtdyM4Z3EBqhwE3xjmxJMt2fy9ipQZgYG7"
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

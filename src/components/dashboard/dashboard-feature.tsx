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
    "4f1MLQWEKmoxuLmBSsMdWFdFzYngus9vVBnY2it94MScVtEQBpzfbEi6RA6XWez92Lcw92LMqzq5zmWfb1cNW6Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4QM5rD9VHmubjScW1hojsrZYYa8cbZJAgcA3F8gPjQ5vBjDrM3TB8AeXnaNR9ZGDRgWvMkc4W34WraiLoZw3Ld",
  "key1": "WYpJ5Y1g4ozS6tbigL2g8mU3hQDN8UmBGMjYekWJLYoiM1FLNjpnSZgNvG6ft8QJgC5simapfDFiCPJGJb8omYN",
  "key2": "5GUjZXDABHSBETnam172arQd3vtiqFTENM1CSe3h3BVGgEEeXaehuT6fuTYCKKD95Tsta7hXgmPoAEeuCMUBfQCg",
  "key3": "3phHgnyGtukvcKSbtVpQedHzKDLP9rMYbTio15aE7UqEMHBnnPkmfMEQpV8qq5jDynp2utMjApYm7M9nbJbLT1R9",
  "key4": "5s4wRDrUZkXVE3qJn3YamGFpTntYHo9WWBHpcvSArsCLrafAZTGESsbQLhNwTBPdJRan73uLrRegqSiu6hQtsXKi",
  "key5": "4vRghu37htGnTAEg3FQo2NLJyqwU3bzyF2RVFHEZCU5M3VbCzycvfRk73YS6nvx5gwejRMkvruMVPcLSVzvbuXrh",
  "key6": "32CcYrEjy7FT42a93ub4z83TohKALvgSJgCH3EgY9vh8ozXhUNSUfmYLZFqmm1ciQYMjTaWhvWKYpMy79cvtWAJ2",
  "key7": "4HT3qUr34TGFT3ww3BVtn6Xjk2nZLd6BWcECXTbHdxJum2DWEn9AQG6NFhN4JCBZF1atTPMcMar9zm6nDHPPAPR4",
  "key8": "1u9F6eKZyeH894cxoPcuCArgbjc4wUDK6WBqd9FC74W9kuvuxenob6vjoUwX1gyo4N47CkosCoMDwt5czUayT1H",
  "key9": "46dsUV5sM3K8tpbkiaF6U8hgzqawHrBZzjbXZ6bsJwLzV3cDjZ4rs5qApuRW4VMtFjk3zEdrAwEHztEDfP7bAkzJ",
  "key10": "5jjA2BpoKDybr7t5QQ5LQXKJ4yUNbB8ujpPCiFH6vKys4WJmQsqBUaf9WBx3r2H5mMWPBJE4gWimfkZHWwJWReVB",
  "key11": "2TcdPo48QGFTtVv8jzbebN5Y2wxDHmRY33DL4UB8B2MCUSYEPWyBrYmiWd71gu62gCP57i1vYggBPzL3HaygsqZV",
  "key12": "5yQWEJ6gvZ1RZedACpf7DH7BP5a99Mt4rYq82SvEYa8nELag3BLXL4YiuwvSp1uhQBmm1XyNjVViNso9t12TNCQn",
  "key13": "XpzCGTiwwbWnYg9g1fesNLecdK6Vjs7EjMasqucDiysjhWDSNykqjwX3dqgC4npZLvxgwWyMgdouSREX485UemF",
  "key14": "3y7tYyem38ZXxjVr784wVhpAniPGpmRF75uzrFYZknDejwjbw9LVqkcAwpm6jSJtqz73UXSqztmBzVEStN2CB51f",
  "key15": "eanjGm1VTX24DWpJsNBzQ5EP2izSrxb82eNtnDbY3Tk2rVCZzjQhWYHgf1GCPkzcGdUVeohYRY5hf9hSRtUqFxY",
  "key16": "3E6Jq6fJFxRfamtRqgi8sDW1BdT9AuhPNEkdfkToyYKQsNUBTuaZgm4Nze6hP9V6Z5s4Pn7TveYJLn33na7dejya",
  "key17": "fdnUqaYwuECoiZTjYMqr7hnEeei3PqMdtvC124ckNrbuAVBH6ZG7YEKB6qPL1EPcC9jsSLQ6Ck7vi9xBKhM2yxk",
  "key18": "2fYQfCpP36YoZnA9rGsvR9hSQMyXiUduYQaF7cnsHRFLn2oHa4f3breHGrQKNCf5nFpnJWUytbxXcCn5WAETdV6g",
  "key19": "5DT1BqswDqFp9eBDYmrvgsDYArVCDory4VXBsHCWoaSRSMKezbyqwupfo7S1rusghNa6gq6ZzQGFqSHX5h7Lkb6B",
  "key20": "kAU81rXratnkRv9rvwWZLHrw97DdzE69uxB2bm83ka1yZEQDmm39Vy9m8BJaUA9o6mPtFyHmEL9sjiLyohyfhWr",
  "key21": "yUEzgTfXntUk8dp9HvNooJJcfg41aRd3kPpanuTLwJkxaT6G9UhA1QgdXFGTdrpMcNjUtMjEMBud45sTTkeyTJ4",
  "key22": "4rL38PSwPgxk2QLxYL23hPT8EmN6h2ujSZwq5WGFqLRYxdBFhC6x31kpGa1gZGhadbpEYVmimxeamw7PucZbu3WP",
  "key23": "vmzT9AR7qkoBRj8Sq5S58gzTkUtNKkT46GQhZxBg7dVU1WbCUjc5vQYo4eGdF2ku5UsdbK2SnKpqE6okW9esizH",
  "key24": "rn8veqKe3dVH3zjm2e9sckVf4Bf1fKTonNduK88o4P54oJdLZ3DhMCrzG2xrcWcmur5y4wjYpR2Ngcd9oMGX2r7",
  "key25": "2pZzKzNbquJXcAJUBXQibrShyvjdAEZTgGntBayt2pUWieJZdYAZxWVZwUtFTq178r4wdD6GA7azeMA9MkyP4PLm",
  "key26": "2m95T8FbkTzryM4u4vJGv4yKSu5b8vPMmPnB7qiiv7oMdjJxBqme7TeVcLt3a8gsiZjcAao4S1uhdqHJjQaPwzEH",
  "key27": "4mP7714taywHanudj7x6wiyis1Bh2kY5Wes5hzat5WRF6s4VzLvuotpapbf8uySuZYQnrFZe198hFzMGZFMxETdJ",
  "key28": "38uCkKCY4HBf6n7rmBojD148wanMyxgvVwV7i2SF7vNWahDwJSFJFZREXe4WqoJztdpGR7r3mV6sWR43pbeXxdDe",
  "key29": "NFvsgGBq3PNA7CC6Lm9TUds9GUFhkyewU5fjcAfdecw8E1PJGReYUpfbHBhojBjrphBy19uUZuDsgpgPaofM6p6",
  "key30": "4fBi7dq3s1ZTgHY8Q2kSqxMBQCDMvnZazW82nxwxvkcNBzjYvYV9Ys7rWFK9huSEVqu6YUatT4SHGAVNrwNRNiH6",
  "key31": "448nfqostbAza5GtwTEP4cHFj1ACpbKfS2kXzp6GLrw5kFkzh3tJ81GFA6XdH7TTdzatmSMQftsKWGoWs3wLkPPn",
  "key32": "djDMwfKwhjPnAiF3n1tMFMUTtWeuVHtCLoRUBgSFtTqZdAvP4rrrjVPDWCd7KXicMJ8qsxuQuY4V3124nggeK1t",
  "key33": "5nQHxGW3DXSGdQ7yXH8RXPUADdPTSrunb5cErayAh1vTb896WPWokny6FtZz7ypSA6N8mV8QTNZgCk6ZfUsptQ1v",
  "key34": "3SBu9x2o2DJRswqmdrCqnMnAcLCNdHG94rKqomSPRtu6GgeXmS3RP8iTSsgHnaLxa1mbHDZP8MxXP8xHmW2tjYff",
  "key35": "5n7yeVv4aDjFZ7Dqn1CQ9eBbeLNGW8jWZzcPNvJtZfR2NE54WF7go8vfefzRVxfmBVd5u9GfuPvcFqZsWjrj7nqc",
  "key36": "4cJBr4HwTzdcp8syJmSbDxyACjNB4R4SjEkuCKLesqRS1m6XAe3oJB6e39h7d3fm8KZCuf6BPv4CXSybfik9hm2X",
  "key37": "64BFRRBo8TtKHFuDfs3bMwqK6hHvxkyEhXcuYDzEXsMrYaBrphGzES5EpUDWJciGH8wbzkwLQ7q63W1DwsGqNr3X"
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

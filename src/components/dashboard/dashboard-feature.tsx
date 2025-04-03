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
    "5DNthCi4oQ1toxPdfBBURfQ6qyescLjDtuzET3fvVfdXyrpBfEgSuXnJYcocUjdxEjVX18ZK37kcVHBLSFg2Kj1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYJKR4ui9HDaDxbmpoFKnFptjhexcLQtpfBcBJThgUhyQP7ayEJCngewhd5ncjtpFji5kDQ7e9eMbRA5JP15j3",
  "key1": "4TUoydz9dpFxRbEF689CfM4uLaC7jkYQVLhRpLzj7f4dnVtN7GkMyn8SKqjHxHjbjbfjk5k9fSXvo3pbnwGAFACv",
  "key2": "4TM59A4em3tVuLutLPU6SNjSNaPuzw9X4HPYRFgnAGzxoBAq5M9U6cUuXkzATSS4YhF9NBz7K9g7CqTjy4AkubBU",
  "key3": "4LZPxNaZighnH56eg7hgJopbMeXXPDzgcRYiZ66q2ChRyMZjXpPV8AsT3RSjp85opdmrg1Swc3v1WfH1FW6fMgh9",
  "key4": "5JruPpAmTAC6gCTEr2r8hfCHbLiDgUK7Na6xeDbMFXRJsvmwzzuFA3uH5XAQnxETd2Gy7bZVT6vd4mY4Aqxzftgn",
  "key5": "JnLGwwQeRTJ7Ljj9gHvp6gGka2qqtLp9nnT11iG94JKSpUAvcBWM6oPyjpkDFs5xiFb7DY8HfTkAs8Q8LzYtmqH",
  "key6": "3WHkAixx6oY9bM142TGtzGSap27AAShfVtF2fPmeS6BjSyxkvKd8Hmh7MqVgGrDEx7m1DQEViTzWFdqyBfFsWvPS",
  "key7": "5mBcSmVh7aKHHC6BvaiyjcHJxUaCyir5Qe3pRuNSpvMUBpiGHmZr4oScQ8tXFCAfTQY6TekijwAVbdPV7JEUGm6M",
  "key8": "4qxnb57EypEB7rvrJFJNJmfx4tqq45xZYJhz8veeM3WQveZvKVXTxJWjeFyq25uWJHZK5Ao8NxvqvW5tq1aix9Fe",
  "key9": "5LRHQgshFxnX5n1ENgSGgfpnYXBUrXXTCRByckRGZBx9UNXGEuC6iZ75tcdVyRFyNRfMAsRYeVPKyJ3jVzoiHER7",
  "key10": "5xauCNB8t6UMEsYrzMDAcXq8dAuygKLNotvS7Ky2B2n5MTRkUqwFbcRcCeKasj5YhLA945Zh6Hm9ydwfr44TLzbK",
  "key11": "KBcxSJoyXeHQtbRMvjzNF8b5oMvkUiiMkcYCa4H9GS61qg9Yf2Z1WngsPddrw6ViPPZosszpKRxjAy6tDqTyHGS",
  "key12": "4t5ffZTwPXTQ58HLQG3k1KWcgAqpR89Lci68naVFSdr3s84JVTu5FWqUDQehjdStApCiXPuGDuaEkXrH1DssZ1KD",
  "key13": "5RsFLZVKfpbLXp32RZ1JE78sv89YwvroN221LSLiBznFNDYDSiHvNLxmkxyWCBnXunHaTrWSLYbJK1R76pa8DvoW",
  "key14": "2RfSXwxUUK6JmX2yTMvhp2Udne6NiTKDU5DBaYcaA9oiBNFFKPHa6rN5ZZ7ip8tz1oEqVarZ4kS4r2BpQYSirFp9",
  "key15": "2m7qzg9H7aE6N5BmT1ND3FvVktL2iN33yJCLvAGe8TFtvsrGYoi9e2q6VUpC7eLnMphmiY9EaChUdAmcRGTRzy89",
  "key16": "3HubtSgt13VyUmUx8d62BukaPw7QBj8HrLrxUtarivPaZxKJ8rmL3UgQ8kLkCWeaw3E8AYB6zmv26KHueRFHDMvu",
  "key17": "44xr1JDo3YrPbcL4oyDontkyZKcidRiHJ1GV49FLgwvGdrE9uVuk97mDcPqhY8zxm1GHtoLWE2Pp1brYeDtMX7V2",
  "key18": "4G8Ue9jrEb1Sx2uZUeB3jbMRx8B9qbM2wwQo8oy1jpV4biRoMWCw7KQow15VzWzv7waiDttDjNUaynQP9uuNWhAv",
  "key19": "3fqSXZrqGjk9gj314kqFQ4Fi9GgkqYjiwxqHBt7MtHvFn1C19eN7URRxzSGVx6jA6hbHf2DtvNW62PKzs9DGoaQp",
  "key20": "3KxjDNrjvnvZDoTQBY8APtj2tWh4eqaWrBg212k3zUMU2hmBcy9CZQuBh8zLYWmYvXKBogxwYoqYpE1jBkajYAP",
  "key21": "LjFYh5Sq6bVN1v8Vs3NVM5jt9p3B5VPZQtPoq7UuAfCFL6nahbS55RcS2pzRiPLXVZY48d3cYZvzzvV4UWjHSup",
  "key22": "54iYyMRfVrHarWtELVmzaDXnsbxQ73Q6ZDir8na47kmuKBT5RzFYVUE785YGpGbfYACDBHpDVSq5G9i9hZ2G6vcB",
  "key23": "22dZaF2W7ugo3f188MuP16DiTtNcZ87fp5WyDUHJGsHwvupREbPPRPZYSmFNx6DbZEe1znrLEppLyYMBbwhNiVEC",
  "key24": "UfaJHTEN5nKPMR3ycFHVFNTAtF9gfSmhQA5m5rC9VYSTEtko8v81JxfdmCWL5MkdcnSLVnNie7vVyNdJzt8eG2y",
  "key25": "5kS43ApYSuFVJ6yVT89ND292snUcfy2tFxRmoy8srDBhKwtrX4TiiKnkxkdLmnph2qe1RTM7YTfuio65HN3taRzv",
  "key26": "2YdFkq1KNwGpGFGSTQrfU2L11VDssUxiwpZ2aLRJuNXLbXkdZgSNjv6SbksRZUnamqeHezVne45Vs9UXjPqpaKLx",
  "key27": "2KgnycDrZWbCv9TQK1EfnaHsidrKuz7DyBXQW3HS8uNFbDn9amXmiJrVK2tfsj2byKWeq1Hm3xZ9sxgbW4jVfZU",
  "key28": "51APc1HnDLPAqMgEumK8Hy2nSEhbVWXFg5QtyJyBqPGxge2Gs7sM8iZ6t82ZHn8i7M8FjKxipUH6TGiYLLP4MnJ4",
  "key29": "4BuE7gtbeE5zH7uRnLUEwvZmeGgQWytHX3qi9PpWrbwU9nK4dEEevfQsPwhC29qYdoEt72xQYc5niYJHaszHcA5K",
  "key30": "qraXbFrgcm4YrNPvpiQcNQMaxse4VLchL4YhpJYNWdj3rVYbjY68NJrQ1r6hNR831i2mxDJeKBzAphwkP4Rojmt",
  "key31": "2SCVhxAgKNYdxFrRY77SdrA3tzs4mRHZaLMsS17qbPLHszf5yFsva1NzerV7UDtFWDa9j6iFTz3FX1CFiay6386p",
  "key32": "44vsXXXzU9oX63XPWfi8PkoXnvGQqkWjPT5jFz8aKLkXFjgvPpu5wtQukiBL1Daw5cpiahJ4B5ozctT9krq2rmTf",
  "key33": "3Umd8zoCfnYnrP22sYzDDg4geiGKtWFFXWJtXwU72u3xFWcif2FNe9QszQtBzcHE64vkpAfPpoJywwWNwpRhzks6",
  "key34": "U1e64jbjcAVWpwkVoLE81AR4ntdmdwBS886AAHPjnFxZbFawqQL4vDMpTkUEzsvTsZq9n6HzHamEF3E5smpUyfg",
  "key35": "3qKUKhikJ6or8PLc1rp2rWC28z56uqzYc6Z1mXBgWQdsSou8erh1w9b3KLD3ZfCBL8DPfWUfcUGLsMWjF4TN2Gx8",
  "key36": "4oVGe3uc7QhXMvYndJNWonzvoQ42wG1pNq43WTer1wy2nvE1MtfJZXs4Djmk1BDzDWRHNMPoxvjpVhdGq71n8ChR",
  "key37": "62JAS5m37yNcPJjifUxwtpbHjJDv5xbxmXnsKLWtPnDrDRFuMcWjc8HfX9XJBMFh32SvBT3A354nkDNMX7xcZ6bP",
  "key38": "4gxNFMe3o2jqc4GUVaoxYWBUrCU8A2bh7uLKUhYwewvg1cC71WyiPYL7D2nvbkHtidYeUhHTHQg1VpDJaTYMkQpG",
  "key39": "5N4Cum5S1ECcxdgCB7LDihwtangxkEa7Y8CH3WVBAwXnz1NwsoiLHrSGkgVd3qeXafcM58XCevNC7GF3ao4JnVrg",
  "key40": "4tzfRZ4MmHKmx8Leb7DTjm7uouHUNWWyZfgq54eeNY9uMYuifXArihGKiE9hmGyGhYrQVUoDZVo9aPmf5eEF4MuV",
  "key41": "55P8Bq8NaEc1isbHVQ4Kbzb1nbbDbDzAvLfr6AvGjncCYZ8fAgQJEBavGc89j9jNB4sfHEiJ8Wrut9eayy5FPbBq",
  "key42": "2MBBKNkNBzanBYjc78CYQwvM7oZUVRQw7izwsS4aAz5K7V49wfyBUWBFLf8jN3YDsVp3eoKKMxoYxPYsSRD9nGBQ",
  "key43": "niuizFe9x6y7LMvBhtLgBVSm8cgPe2JEGoeUzBj6HdM1kMieuK2oNXHizwB4ZKsATp81xMRVWioStB6jGvUVrbV",
  "key44": "Q5vtRxjFcaYSTUhif9HTrY4A9p77uwEwwYSycgHQrihYj9RfaJu7nrMRz9CjMn2Qy29ZoYz2gmEm9ZV9jQVqex9"
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

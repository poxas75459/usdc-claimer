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
    "2WmA5eWYp52rEiXAQH66VjGD6xMctyi3hEsMVXfs9aMw47WnqYUrdJwiP9qQfx52k1oNaWQbQG79kGDeygcGE2WP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41mVsFWtofFuVH6af92tiuTfBFScAgregKL2YHQdCpDn96dxS5J2kwbMYiHA7zeTSDXEHr6HHp4VFJovBMBMXsX8",
  "key1": "2nR1XzyrbjpuVCGKALG92npkE8VnjMZXzwUzktqFqGa7HUcuo4YLpbmvX2o2yawno9ynLdqEbnUEVYYBVpPU6FrH",
  "key2": "4SLXeRZD7DuyABDFSv2Vhqc8x5twPcmC33GTkBncEAS2RdxSZdhLKkJrxrH6AagMgVPc4qcXKfF3GDnR3EyZhSeR",
  "key3": "5jkQLCvdKwBbncfkvDQiWSNeVKHxcfTwLUz9f4dHnmuZ3LwbzveKpTPpHRoPSfpdJNDUCzcXMkrB57oaDtt8vsKr",
  "key4": "5qwBbzh7f8MjbPZscz1dEfdgLyNBucQaiVpGzafRQwAgMLYfvR7zi5WWLxJNtQmELE8qGBEzDFaVYAVzVUvn9dYE",
  "key5": "5BKsWYS9pHUH6vS3dQyYyMywvaponTibKoMZ9kqRqvTqfXpwTYeuxpjoniutWj3FM4ri48787ipmT9UTfPLVyPCS",
  "key6": "5MUJaYr1UXw3SJQqS6Vhf66LA4T5HGVPQuc6YzcS7GNHcSdw8tBJqodT6MKUctdTKVUihoyymGNi2xhXFqNFFd2H",
  "key7": "XeVoKUHCSqr7gBXwbzvoyC1DhHuvQy3o3z47WwdUfWztJFpq9qy6sUc2jCJgV1VnEXButPuou1wpi9peCCkdqyZ",
  "key8": "2rKXZEvHVTXb9ko8Vwu54fSCmTEMvwas8DEYJxtcveSPTGjJDA8A4MC5d3WEB8RnebrkBpj7h1esPD4waQZMMXLi",
  "key9": "5iUoSt6XF3WYsKV3s9MZvk8UzrtDGwDaaVcGa5ohbLRCSRPWa51NewjxZk8MD53oZaztEP4ycKrmhHWdiqhUnxU8",
  "key10": "3q7JLt6bXAquXRVoGTUhGNgkUd1e7hBbjReXpLaAzsoWmYGMPUsXBx8EDPoq1cDKZXnqLuXBNwR66BmDMRNJpeEb",
  "key11": "3BL2uzgVjMpWfQs9SddHueL6eEnsnPcdgWFfzZhKrcBYsxTbWFKJXqib4LT1MV1c5DmzhNyQaaFtKJKESfXSmQhy",
  "key12": "48SE5NDZvjXTh7cDh83bvS2imSdW7eogaz5dcemv7xDz1qiGB7afMn2MVkiTM2Rnvi6iuXsgxoqZjt9FW6dns2yu",
  "key13": "2jrA1iRzzSznT3hSv4jTwbzM4ePzinHWjZ2Sgp3yrXdtaN5XHvDvDg66B6sRPixLinKb7XN3CQ5i84VCrWVXmNsY",
  "key14": "NrwvqkS5fTmJamhRbGMaZ5jZMbPzRxAcQ8vbsUob2qieWYPn8kdu7NGMSjqSKyc7gHPm8R5NiRHLMD9QHwnHxmJ",
  "key15": "3nKLou6oevmjZsyWxvustQgQiwYTfghVCG8PDu9curY9JS5dQSY3pVoYqp64UYcg31wLxQcQ4ZKbfgPfkzLqqqiW",
  "key16": "5Qgm8q23TdwqPUP9hrgHyGHTocUq439iNfEwooaPQuffipbrb2Fqobg5ReKzCzt9AcmVVPk67K3qu2zMLZovRg8j",
  "key17": "5No1PsvE83rJF6CsZ6CCqQdE4v3fgK1PS8V8qCtniVKt4YeKUJd6x4NSjNY7wFgANmAgjcrsvtP8p9asknLg66xz",
  "key18": "47cLpyuNPCsfmWnf2uXszq8ipvsmaQoFvRo7s4dk6g95D8RnsF755gHusbZtk97HAzH85bpAJwnWT2TuaurEfvgo",
  "key19": "UoJaSaZ9Trvoj8ugtg6AwZpcpZnPoPXBtPasmZG2k53G3EAxDKMvaiffYNQENJauSKW6BT9p1Ghmz95BnRkGz1v",
  "key20": "2DfP6QiKxYKaB8C3YvPtsKrdrMLpqyfsjMKhQFVE3N6NzYqLhsvuUzXdT6zNqh5nbYV4sigBv4tA2NuGM7Ja7Z6S",
  "key21": "1KkG7J31FwoFMsEFpEr6bYoexHqSHd1zW5EouprQTFnJKnqdkJbKW37uPjiSdUDertgGbHjaxYVnzSyyB4awZan",
  "key22": "4K9Nn4m32hJjximzVz8QfP7XXwAXmbgygkVr8RihLFtMqRWqj8pxsGhbFyKmEByNUzoyfi95JXN7uzQxhTx7hmn7",
  "key23": "36AqSNzbUEg6Yz44UzvDQYozERwxM4tU5LyUdAVU9JYzZqEt7Bemt3jPcWJRytLT27K38L7FgJGw4eVyPe6sMYr1",
  "key24": "44vtRZRNdw8DRQCokAK24o7XDTPuJNpUPwnvk7ZVtAe6VwdiaSzeqYfMb7a5aos5jRTwJSDmY2kLUSQzJey7PvS8",
  "key25": "5XME8ZKx5HYWhwHfsqoFkcf9NFb6zk4dLEq1SVN5VXexPuTp3eCcDYN3h48JUyoaFr7ZSaQBVDPch6o5fPpzvKoH",
  "key26": "D3ZLwh6L2vTYEoK8aDM99vCvYQMPZr6cYez8B1oBFqXgJTZwXLpjiQNqApn5dynFo5epuzudH1mpmSw6t5nPBy7",
  "key27": "3NBJR1dkhdnDSLBjzk2XdJ8QNW27G1kpYT8eLKizTZpZgbEeKNbXVCXVHiWzU9h1Drz2nqXsHcswf8Hv7zw7oJa1",
  "key28": "5aHbtFJVTfxpsvhaVLWghksD3aNg7xJTqRjGouTsTgKksQ4zZXbMGKgLxaKAjcyrzr6vDVZRzxWhWat7Xz8jznY4",
  "key29": "5jPwUvYGW4tDxZTYGQ8FzpQepofcF3Hpjb2YpdAjxt9bKmHcSDqvLZcmYLDkXmSDfbBLvk2cDB8RhC9xpTiafmhU",
  "key30": "4vN7mkY6YX5qTTYYSvpqmZDaqHT5PfuGTv5d4FvvsPKTM6fuf1vCCr8zLtEq3kbwh7pyX1LUuJnpcDdhu76U7e7E",
  "key31": "5hA7vJknLPscaTz8TS2yWvjjBLcagHvyKEQpWxbg2Y98vyNi735y5YeTFDwYBRdP9uMW1qdbYTnpLTqW5VRWqBci",
  "key32": "PyZJDQ7rNZ8VcoPwJwccPjjJKZshoL3H2ccsXiV9MQE2NKhQL4cj8njTyyi9satDAZojXvDBNGjnoaUCWnPDUKC",
  "key33": "37X7FVo3ARrTaPLWrawpKH6m4CTegT64pFkLY7U72pUMU1FEPmLDXp5VHKFRRscP4zHL4ifVaaDrw82NSsZMXFAk",
  "key34": "5kJLHSCdsK4FKRQ3aDuSw6TnSTYKbA5kfQKLLtP6EdFmFBPwkDeQk4MCJFdSJkCC4SVrcmPUkUtKLG4krXpCJnDv",
  "key35": "5KmVrqpRUFXrmyKn5e4BXjv4Yo2vEUET5ouE21zQWH1EHkAjXHYaifj72yeNmgtHCbs7TBHRbFKDZpNMwLgxwWVK",
  "key36": "2w4VrUrp1dM9FgbB2CaEAacMyP9pt2gQsF99ucjjzjYPVydVFKzRG3t5saR3kaYx6aYYtrfvmNbA5XUuvT3f1esE"
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

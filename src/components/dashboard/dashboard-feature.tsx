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
    "41eqp18CHMwVxFE1Y9i3bGA6jhJ4YXFdSL7tZsYrAaq6ATHzPdArXeogDshGrk331EWJsvPUpfcmzxuKbaLtHy1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56V2sB9ueMdGvhAee5K92LVCD9j7rgGohsLjzggH4w29cTUDUByfYj8ed65Vj19Y5vXgTkPzomUcBgi9nY7W79wD",
  "key1": "2EH3jyWZf95w8F3AXnZEev3dWyMBXS1pKZHdFsoCJdbU6aoMr32W8S1vHxW7HMm9cANp1tSacHexUmxpxZ9LXU7h",
  "key2": "uVhd3bg5qJAHH4bMj6ngETuWzPoWnoDXwKnYvR1KbbQVJpdHcU7M9A2YQWrFXGp3a9dzeo9MZMXboqtFrg1THqd",
  "key3": "46GRX1cRdtDBrs8hmfLBe5DztaSsR2xFUbHGZTGX3qPYkJ93FQExVa1Yb9LGwS8eNesaKUwpqjpV2qxPajDYK2wz",
  "key4": "5BsggNEttBsTnxA9DypYYdWi8D9JThjBuVgG239egjUAgm2XJ6EaBEuJjaAeQTWr8vtpq3TDr75YUfBm4jWa9Mci",
  "key5": "3GmuqtyAiEVKD9oKtzZ1YsWipLorprRGfLAuGK1UFX9njRzXsHZrXdGYQgU6vswkpBfWLSx4tzsm8fJDCWTBVP7C",
  "key6": "3MwhEJmsBdt9UGwXj1GppQTJVqQ2Ybcmv6CuF4urUJjdUZcNm9YAqTwJLZ6DJQgy97CvgERGxpqHm1nJFb6Cjvj2",
  "key7": "3VSc6Bgbd1kuqT2idkyMsneD5xJLFtS7xypR1qjduPhcsgvnWDCsb9PQCFBbtVAsRykK3n1krAw2SZMpe9MnGavv",
  "key8": "4QKgZRHx23g6u3PiLBMkPUCVnqQQbL2kzH7eYYe7cMCte3Fu3X45yDMtaVvH3NzL9LCrTJMYpg2W8aK3t98jLdmR",
  "key9": "55VF6j9GqZ1FaPrZCoMsrPH7pfMKggDHS58PApiFr1sd9tkngq1u3AM1gxHdJpCMVnSZBERTqqZXtWRxLddmys4p",
  "key10": "2NEbiuPoWd5sQTJc3EBJ29M8aT9p4JCiKoDc5HsnXNkp8vQDW64d48byBKhhzqB73ye4d2FHAcxMn4W3B4ixc61H",
  "key11": "2MegoKhTyYwu2NpyyBKK7KS93CSW63XyQGi6117RCwG297ykQcuEQe4GkF7AMdo1PGaT6qYqUZ54Nu6CFdxdtGT9",
  "key12": "4W7ZqmJW97nfksaZkMqUFrnWtghQaPYCLGFUeJ388Coz4rKtoNzWAhGDHpM29aXKXydPezjYrRrM21zfD86wC98H",
  "key13": "546uGKGYNYfvigPMVxomrJrYLnPkqFq1nG4xFfCsoqTbaLTmJHknUm2ZkAsyEAMcY1RiiKBtR9Ge2TP6XsHArEQo",
  "key14": "2DcJravN1iB9LS2htSnS8HfGNcMR6KjvEosPPkvcE31a66rgMDwo9SnvBzVHbUr8yFJxBniVsHaDmBThKFN3V2jh",
  "key15": "9vp1YTQTBwtzq2G7GUNZVeNgFhb5nGC8jWqVHTkDjVYWJmyX76typnPqQXBAiUZBWxXxc1WvESPYvn945Jee5g6",
  "key16": "3RTwY9iikjq87YLFGHbyPoYfA4yL14qA6axzxfQhcRurGJkzxwrnS8c73upLzRdVEf5ie4YShVN4n92ZKcpx4KrB",
  "key17": "5wPQ6DCSNmVPNkwT6VNPFAzzzBGPXsU8zuCKJNpXP22tdBPTCeedDR2zhfCmJiQmqUbmVKDbPEHsfxt7kdU7Ttc",
  "key18": "3Gnsvc4GFWv534k5Lqq43bhmA8ZHzaVSzrtPdnA2CRCyGBtBC9RyKbCDweYwesNHUeLQoUrf2R3RhYYNfgn67NcU",
  "key19": "4NcfR3rDbRdc7R3b8kWy67eyj74xsKp6aeYMcnDw7vTbew2U4F2zWrxCdZRHas3tNkbVzMTz3d7nTo3M8K811vgG",
  "key20": "48zLNwHz2oTYhF9Wic17EECnrzZAnCfbmkc9QwPAD7C9AiRVgKdPRgFY8vAe6hCoXr6EDom3tri68p9i6B63fLHZ",
  "key21": "5Y8uP3pPUqL73tBAHZzthDnmg5yue9mJiaFBrkYf7bZcTqTiLWvNRc3bYPi8NpMRg8hb8hGrNYnLk8N2e5PT9bWk",
  "key22": "22p7VsZQbLqGeZ1zyMS2HAX7XgWWvzv8of8cC8KsJbAJyjSUrhZeYGCvpH2TnTENrakVHxaHQ7Y48KfMc2bEEteg",
  "key23": "cVBjYUSxYJGCdRZnzJQCuLNYk14YJQSUQZZnSSQsnn3LDDAgEt8oSLHJxWuAoGgompFLn4Npafsh2rpju3VCrmk",
  "key24": "3ZS1Jz5ohR4Bjzk3iKdKHNqbhypBJacmLMtroXaTMMUiGCnaoAn23VsuCZZwWjGkiwbo57HN9zeMr2fmxzZqX2CL",
  "key25": "4NJkHqWQRBKyadnFvvjjQZe3cBwX4LmDjPU1DmyEeeyPoYaJoARgXa1PNKA2nVF2zaKhrZedjYGxET2N3gccpjJY",
  "key26": "5A3ZcraKUCfQuj5svsoFmCgWCuGgguzDphJjF1gGshnzrX29tu5NtFfHBJkjpg1ChQBG2tH7ebQoUQrphduFrviM",
  "key27": "2FPHj94UfXvHUdfF5ZcsKFuyuZ1SaRP2GGt6biQDAPBHBpzGbpZoB75mdPnLAE4AKxGfbtw5byGRnUt3neatyc2q",
  "key28": "3NGdHHWAXk31fUFnYgEjUibUWgPfPDK2LTSiA7p5wh7WR9ThNGTGDn5vFwXwR79DwP58oXj5nPTFR6boVTkLwTt9",
  "key29": "2VnhW7trvFfGqhtS9ytHyV4sRFCJG27gnESpjPTBhkRGxXZVNv24zw9dfWEb587nDKH7e5CpvHQJ9FXBJh2Ucgjb",
  "key30": "5sDNo8v8R11ccU9jKy88tLpms2p3ckXsZpkQS5PuEfPh2uMfPWAFpsvGe31Xrqa52c98shBjQayTdGpVwKUsjonK",
  "key31": "Kcv1bQNuutiv7z2Cbko3NvyWCGFqtnBDDjnxDPvkTf8KhrPut7StqJyrowPB19ux93FUsrwCYvcboz7vXpFzDGh",
  "key32": "5QPUy2Yk3aVxhxHzXwpsCtcZLensnLUiV7A6gRJSDRdUHu62PEU3bndppjWM5fwX4JYkcSUyzfoC19SoEAHMmc6B",
  "key33": "2wRZYTvG26uvNYnZrjfrgshAmBVjb8vqN15iQyn45LmKi5B2g9YoH74u9ZfmxeafSVsfraGvMvw23Ri4GJwSEAQq",
  "key34": "3bWfGUBT6LgQnU3hk6Mvo6djueSf6fQCjimrnxJVnpA5xsqBC7YTtYYq2a9cAyoRU6zBZEET6M3D4DYv7d3h2RBF",
  "key35": "28DbeKnakyoWqEyKxvZGM2FQtaUv87s571cBbqCdqWrssmcqwUmtP5bAHkU7fv5ZhJFZwwKU3gJvSqSXuzy1HT6v",
  "key36": "2CGFVP8cg7zvbnmJJtXp7wgpjhci7GGt1SzPEnaBf4KkCKYeHyXM8egtwSqaBxpyhhaQQBZ8R5jihQGtXP8rT5c8",
  "key37": "5LTvBN1yDN74M122VVi9HSjXs5mEiiZYDHnK89TAu4dwJQNFXpfsR43geXsd72n5LPJa1HDu1iwkxZX2hC7N44BK",
  "key38": "4PUPCwtkE85EkMfZTk29JDQBTe6sBHWKRBpuDAtsRuu3JEhvhzbeBxim3BDy1LxWQgac2WhyNAnJJT5DxYtoAsdV",
  "key39": "4J1GV5VA9zpBMLSnwwTp1Yczxj51qgGzbU1y6r3ct21CQe4BkukP7eW2Quue5ZTCiSL8ZJ5mjkH3zPubtStNDR6z"
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

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
    "4HiL4ANZaqPCap4jkU7Ub5Qjed8PQake9GWEWnHpqVXBX7ZXoga5ta4YH9r1LxreienuRaYGwNYaYqzPiJvY8DFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzxhpFQ7raVa8K69v9hNKGPsC8fyrkoW5XmZnqBhyV7XQ8y2ozbYetSHTRKB9gk9mcTQjwHqQGGuH7EZZyqeFDo",
  "key1": "y8mS5og5AGztRLGQeXkrqb73b8hLbm6Fj7gY316DmWMMdn71XrYXYHSECojfNHcqGGdLeBDVajZBJtaH58qm6A4",
  "key2": "3xY79uu3AXUjiTZceU1nXGU36zBqECMs7G945U3nfRHUtDhLgsqnhjcY4SofUbt8qvLrBxDqzZ9D6NbRemnj78Eh",
  "key3": "5UXVT1RsVyrvcQFU7xvLECETL1XTnJYptkttFSBRt79FTPwG1buqMmt7Ae49JBBYgUU7dnMoR1bmFXPxDELcGBqh",
  "key4": "3i85Um1xKsULLQA8RjvpLqA6zB6fZnLgmhm5GHDQTTRHSMefnqCk9Co4vSwTKr2cfM11BYU53eKARunpV9Didgve",
  "key5": "621if3NKXYsefc2dn2TjcxMabJqbLHd6vdwvMA4rqTzfYCpoCq433LXga5K7sr7HbhSY2cRWAo14EmuU1KVVYrvh",
  "key6": "Zr5dg8WnMejuG5VjreWsyF6eJ5mVwsv1FLx2QTTMtY71mAjHvui2hghpMUBpCNmXxzGL5SbzMjoQRJpBEM4Kkem",
  "key7": "5t7CTdKzjW3pfm5MMaF1F31PmCnZrsge8VtWS9h5iFgVPC5pDhQFNty4MM2pMSWaVMNTYJw82tdnAAbTHVTc7rzk",
  "key8": "4MJvjrQ9hd1pmtWVrHVuZ3whf5PQLWRQ7Fu4FvSK6CWNDxvqu7A95Hvcgs7mZy9qKy8gF1UHTih9Y8SR5g4Kxsie",
  "key9": "6S2Z7nEEUYAwfDvHHKCPy2DHbK4UAYoYASJYbBq5EjQyd7v73tAnVCEGw5sf1U52oQeGyEMnesc8cTPbParDpBx",
  "key10": "267RCUQFRxfdAhyCY8vwwbS2JsYXbco6kLYgXxbvAvccJs4fMsUxTS2i9zsgQ2KuFhRisrbKQfbJGBDLK71UAtXh",
  "key11": "nTukqK6nfVVfukuUW74bAskrvnKUJgi9odH4S2R7qWqXAbjR7CW9E4zqEVakEoE1V569a2RwAUZNs4UFH4XdiMs",
  "key12": "5Fn6F1LZpzJ7avKtg2Ssm158LsYpwqiG9JXbvcjETMEmCA7MxByxFcNaKDQ4VSH8SAjRLhGZuznwrMg9fkiPx2XP",
  "key13": "3XVB28AnBy7dPXkxQ4wv91Yn4dCewde88at571A8TLA8ALwkEeTpmkjDFGEuPKfxdmQt8vznrnbZnFwsnqvVJfX5",
  "key14": "4fYEynnGayfdJfTaEFFzmwvEXGLvpenaegp8KYV3vT5Gy2vWN2N7K9hDh1wxBydq3ZXfK327oe1dpgvrDzsHh2vV",
  "key15": "QoHueXvCKGmXgmiuUig9Re6UJuiJNdxn8rHuh49qzNcaiz8ZytnFsSoGKRWnYFJCwqnLmUrTjKSyRPJb9y3ktPN",
  "key16": "3RurjnVkUTa6sLy7N8PzgKMCZEdAjXra5DFWXMyKWXX3dZKntD24HbkawBzAbVZFLqa7HqPv2g2pAfvY2DNVpR16",
  "key17": "5Tchf9WosVqepSB8DnBPnkCgHqTTNPTJzXT6DkF8QiwjTYNiXewQzSRnh9F9HcRq7cBFshLkeQuhgLzBxrnFZvFc",
  "key18": "66zKE9QTtUx8vCeAtAFJZPzWyEaH3PjE75JMsxLqnChqkpuR6sG9CZmMHCLBGgZpy8SB7LGPVC6SEa7QdWCfDv6N",
  "key19": "3PxcRDJcdhtBSCuY5XQfZnGcC2sDFjkCqbAHVNF1ujZackC5uy2TWfTKkyeYTxNGyZxk6LXaZdaHRmEVjFM1GT1M",
  "key20": "66LoKeWcT3rxxYNwFgEk7m1hmYnTrCpgeZg3r3QKfaaxk3Luj2iktAzPr7qFTDbb21d3w5m9MfVtvGgkmwvDY3iF",
  "key21": "4FKdkucDhQYkzVZBQ7th6YDAr1DeTPZ3QSSvVdhtJL2cxxKzUk66NBWvckxqxZs1XCHm73NSQsB22q3e6LFHkJFA",
  "key22": "3sroMEfgXngW9R5hNYEqDuwJnSmw7JL61BZKyo8zH1ArgGYvMJJikvpXgD34iFAxHWJ9NKyh1rhakTM2u8CQ3pjZ",
  "key23": "3By594wMzgwKy8UxV8asCYAhWexQpLLneyBtxTKgzPt6J4D4DMvUSjs2r9p9hUjm17Ws3ywzR5bj7wHJ8RY4ukTp",
  "key24": "4NWt7zpweQgCmTUrPfy93U2Pc1g4K2nLauEiWfUKTLWvdorqpUSRPVryB4AVkbG1WVvpBrr43Vs4XzBuLj9HWry9",
  "key25": "YxJ8Tp1KQ4UdsffLyaGuqDDZoeWGmLBnBtKH4ViAryi6XzHASsPzHqYxnkiKXqWTyjLjdqqKRMzQxnMeLAr5ULf",
  "key26": "38SFKvuAKG7NDtf4sZsu2bqzrEtQedveAVwAzbCEuHdSwgMVaS4YySp7QhfgLB9eez4kDaM7xcoSyL9p7Bh81QF",
  "key27": "4J4R7FSa416eBPLCcMP4Hj6TFwfuuhmrjTCpZArnkdYCuX5sYzUswdJiB4hz5bs57gdmNxdWfqQW8t6c2wMszHoR",
  "key28": "5CDUFyCUDxAjUaUFDwERpySjFfHLY1YcNHG1VJ2xyfQJHeAz65V492YbVL4goXznZAEoTxkgVXnJJVyX9SugpWXG",
  "key29": "5C7ApmBE6CYF7hv9f4UtvHwu3BsGxnQD2HRqNoxptQUZZm7RPExPaqXsyp3fwnyqNNbNpFNyxP2UbbkvXwf48BoV",
  "key30": "3DdgPs3tPq61oesfNuqajdaGjUmMG58H2wrgNrKtJM8s8YZLZVii5HyyKXCyV6ZEVAUrrF5BGj46gWYYC1WZveVT",
  "key31": "4xbJaZPoSCmxxBNyALfPys9TuMbq6NtKN8ZmNV5HxRNvFHftVUpn93Ar1CL8cAhLk3VA5tZggiXz6VwWW74TmTrc",
  "key32": "4z37HhAXLmrVKbfqZu43wis3hmBDDpyxLUjZWkDjj28t3os9wwoKN4nr3GbK9mdHuj7mKD3FyMExPgsAAJB7GDKb",
  "key33": "2wvvcNFCcg2CcH4HDmDMhBvDmsrkkfiMASKmUZT4oJp4mN1dQqaxXvtkRpYAxpR46f99AbcjnW7pY4xbVqBypKaT",
  "key34": "2HZjAp8HFNfvFu6FPBsmhMqqnU1RY7bZeRScNeCRiM3TJqt3A2WgekVqNaoUm18YvE9cCRFMP4YhCUUawruWhHC5",
  "key35": "2uiTAT97SfBrwn38VAbGWtignobGkywchN4goujHHv21dQFvEgWS2tgDB98WdebscsdUM4EAwCweBUy2DSpPa1Lg",
  "key36": "61VNBiUurpmW69Xd7w1hfBBz5FJG6HnPsnTsN9zhKyduRJisDgfWoS9h8xc991ACPYkFbKfkvqvj2zZYLoiTtvub",
  "key37": "2tBasbkdFgRMhtTNF8re2LuFKyNvH3GaLJRHTtL2rFuPWp7sk4osysYgvM6drUMGi8cSA1sa2E4b6U2MFJU9fpQD",
  "key38": "5YsGZJWAbV4QsUftMZwUaRUVAj51sUvs7KyBndjDx1221pJonDBYWtoSDevyYzUZNDJNFU4Hbdz7e8LhKWs7dCj3",
  "key39": "24wRPUppqGLWzXXbKZPkm16u9Ly7s3YD5vx7R6x7quJ824h3ByaGqJCpeV1ugjQGbh3bPYbiS1CpnsLhUm44DgM6",
  "key40": "4NHd47zb9iXTQVL9kaYYNeHcm5mP8y2iNv3uARXV65rGwJfbvWTqMGfNstmiTF48jb3oJs7SSLQ54Z1gVoMVhtrh",
  "key41": "UiqUmipThEZ7of7B8mnFZXr6Qz7CF114agedFJvqKW2VJX5UmHrvpvUmznDMCjuq8yMGT1DA95DKny3AmtZfXDz",
  "key42": "4ksfibUhdAL8736bQkNU2QSiDUGYeAkubZMDFAPLsZ8vnWGpnjWf8xK8YVntkR2Nyt3QzfueXXpJKLDC3PdLXpB4",
  "key43": "65X6CvzWw2nVp2vMZGk2JrZwB9p8ynkFyiHnToQJDdrjU9zrQdVQNpwoX5pTrYwyAx5Hs2FkFK8JbKfyjVWVUr4R",
  "key44": "4etUFdCGCVgrCRPDvaQG34xZX4yXfTS2C2zJmSsimNxPik4azdyU3f1EqCuw9cay3fY86rzNrSzNfx5MdPUhvWJQ",
  "key45": "5rxBrHGDu4socNGkNPCZYZfLRyPKjBqhrGYK88WHQybRCYG2i1nhkKUTCr6TAREg2Are4s4a4scJzM5LhaTM6eDP",
  "key46": "43A1ckjBuqYnJ4rMFBcshcUSoAFPUjiZYUfeUES7KrvAuPK5D9yBLg5GVeA1WuytE8D3n88p62pjko32m2hbEwie"
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

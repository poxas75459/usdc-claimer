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
    "qpdbY8jZ9Mv7QND2pYiXnaXGxZ983sQ81LsG8uufsyTwdSyPS6KxbW2C78tQTNdsF6cRN9PrnzKJVi8aVJKw4yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5xN3Zesc2BEVTMMZSN7fMU4P6ScDPD8Uv1i7hdHi7HKpjq9e6hSkWAn5fYAqgG2FefEjJEZNUVEyDZqNiPPqig",
  "key1": "oJ2tzY3iSb6qog9gJEaDXARLwPmSW2jurXG3sjDo8FdKkMkHoStuKyHS87T7B3YkJo3Yh9vqZa1N2XKsrzGXgq5",
  "key2": "5JNw2KPZ5WXGHkKSuok7fFQCwqMhBtEWUnjvpoT8WwQiEaiFuQZubMCXq7DkWYnrMcoHkafL9ZK3UTG4eAaQFVf",
  "key3": "bAJ32PYpDasUogweV86HRYwo8Gdzty11oUGzG7rUkvKRjbNVDEyjS8zkoy9QgyyhxFNbx2cfaNsMep1cX89CfGo",
  "key4": "3JHupVNh4qsG3w3WGcLyF9udxLY7EC6fDqY2fBQhnapuQ9zFPnVDQcBaEbT6XsKWXRdKnaMJDWKTHgKZ1QyX7YUT",
  "key5": "PwkRTU1cfqJHAAnH92GahjeigR6SUU8eG1RM9DhBrH4ripUUCAEcEKD3GiAut3fiq2HqFuornjXX1Vbip4FTU29",
  "key6": "2x15iEM82rF79tLKxFFWgXGVVfTXdvupRNWNp1rKGCobLbt9HxF2gSwmGFv1tnzbxqd7q9w5A6zcwyBj462iy46R",
  "key7": "3RvpjWWGVo8LcDiLBEhTUSZYwdgJqCtFL3nFdJGyHbwNqYtU1WoBLwnAZPfvnJ9FwSBixZ1WJNLjGnDX8biS1PWe",
  "key8": "65aQDiwJq1YUEsve6wj2zuNozdK33f3JBzqMV7rU3kQ4esF6xfwLzhzrvijiJvHMf3SaH9aVhpsC9HCwywQEtSDF",
  "key9": "4sj3xJBTnzRCdm1RpVVLKg2uuSusLLada6wDW6Y7yiHvBq64negpuoqKSZaVWeNF2fj83wXJN5iFzNThJ1dMKJ8d",
  "key10": "3P4H1nuTVPBYDaGahQyZ3a46FBZkU6Q6xqNsqd8N8KdqYAtgZStUSXNYgSgAQ48rfYCcpM42GDsyPdwDF4BuwDu7",
  "key11": "23ydNvshwWZ7KchZyuRjSCpbMvrKK5hQWrvWG43NDs2NvMmowz7gFm23KQNH1cuBV9FZF2LfhGECnrwzfhtkPyRT",
  "key12": "DFHeZDMmbqGy4Cvk4wVSt1CmWsbBcdor1XqxmawuCTBhzaeaAjVZbFbvRuvKYNmMDWoFLy7CW195FQ3h7VrxKto",
  "key13": "4oogNGhdwUpG77AMXxnNWz8fTcdnt11fnUDzzN1cBBMSKXgrLfjsg27ijJKz57kHCXQfxAM2KFFFa8sihupcMSfg",
  "key14": "64c281GofKvV9iFsHtcxqK8BTKkej9vuxyoMFZnpnv1LkaToofnyffSn6RVumSpEgz2BPXLBgSgvmPSSJ5FkYnEV",
  "key15": "EW1G1eG2y13GUXg6mdACwf4hDcopnGsByRSSdGJYSEnix6Y3VERfLMjPYkdxAxqJYHaABKGqARcfgaFBnhg5SKP",
  "key16": "5W8MSB2hbxjQ5q6SLn9XrtgzoKToPutC7mcxkQ46jEL6wYdwsrzjZAvpyzWozykjjxF7b3XMypLjFCCXc2GMSSrH",
  "key17": "rFhpavhpVJrpbp4Hejki2xBe2Xu8yrf376xASGrNjZcyP9ateFsQN6ZnPNtveGX5eeaTHAsrRd6A1bmfvU2NZpU",
  "key18": "2bV9iD5Wp6USMMFQiN6yVqzQKzc79weRQpLDCHj3tJ9zYaHBQarpWAuXmGvYc6VGPBbz4ZMKksmEJ4r1K1fAchCM",
  "key19": "4CbCStES9PQyAZUwM4XF1No4LMGQEk2Aigpgj66Vdj65YCQBhZ2LAJ6cXwJzZFenifnEEnhmPqaaft5pTTezTMpz",
  "key20": "T3vfyhBUg8yYDSTk4hs2Xw1vGwTiKust8zUyCrWQbz8zeHBvhQtFqdfCn4aHL8KXqRYD1fD1K3ru39HP2vMHcZ8",
  "key21": "3u63zFAPGRMzAddqftMQZQiQdLh9QPpy9TNGCMziiM2fGz7EmhhDV15a7Xwp5vv7Z4uEUkJ8NKNjWC6vXoCHh7gi",
  "key22": "3J9mT5r3BBESak1Rjev6VEpo48Q3Y9bLMWYPFKPY6SwkAgseGHxbyUwTJjmhgFEtQwbtCGEPdkugwnrKz3xsGpLW",
  "key23": "Hz27YRGbbK1ykC5uVww5xgoSX5aEPRJxRjZXr4hANxUP28sVcwu5jUSKcHLigAR5sHCWQ5f3pmahVpzX7n3rDC7",
  "key24": "53FuPKnpr2VK1ELTuiq6ADhjzSbLCoYMDguykzEqMb4US9giQPmPiSvPPj3EM2BYM8w5PAktv4vkaD9auKjtkuvm",
  "key25": "2iqnGJhRXLFUrgzDj3iaoEazM4vQLAQaKuHywd9dx9vnrsDiRxEh4mpm9MmSuA8tsN7YmdrbMiqZYK64QvssWwvy",
  "key26": "4zRae6ko9aN61daEtdim1m8VPmkYWmByG3nB3eWnzdreYMffWAsV3Z9kkz7k7PFoRXQLioMVL4M3BhU3TbDkfJo2",
  "key27": "5c9Kt1AmvXLRifCxebbsXLYRWtV4yd4jwhZtSBebBx1QpWiq4jEKyj91M1bCrXbDDJVaLTFc2j3txt2J3BbUwJ9r",
  "key28": "7PGNBTnZP4DP76ge5LfmKwRgLxkCF7KtAKiiiKRm2vZejcHNgoweTdxY7DDNvESWsUU3hZxevcWXmbkqrPauZE6",
  "key29": "4QrdF3MZ3uQzf64TFcoYJVKS4oWeW6VBRQrJFePJq8ATvVjLQVj1cu34Lp71wAQAQo4CAp3RKZv9LkviNNVS5eKt",
  "key30": "4EtbxLdS781EAFwEH4jK3qnLCWu2zRU8HG7gqyG1CXBPJPoeuDVdygtckU88kfxERPVxDgmt9ZZQR1h1WZ8HvwX2",
  "key31": "Yv6vSyXde48VAw98wn5GGFgjxjcvvyU4gh1uQHp5i1BZUQTc8FjcMebyKoP9ZTLvhCjfUE2KyLWhCGFsLvrMUYh",
  "key32": "5gmGAas8DnYjxKXRKfAZJtJE1J8ESWvucCogdH8GK2AhoSFGGzKokMxEFav6Kv6o9TgD3K4JJ2zvCqGSoUttnZZD",
  "key33": "2LXEPiv87kBLyGew3ZWJWv9sHsmfrTfNKPrq7BweHzxhPTSMjcQ7v4WF7mbYLSRB2DbdHXD1nJFxWBtU57hPG8EZ"
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

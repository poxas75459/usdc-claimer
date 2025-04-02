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
    "3pC1GU9KxepXeKJbSLpms2NoewRQKBLPeYzXBPnsbHcZ7RiABQPFa5wLqQmcccAkCKvxZsK64xvMGV52HZbEUpgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wk8NkhvqtJQhm2VShoyiHBu61taxtEdZHEZXhhTGSdJr785dEa419dZBksehiuTB5YMYXATWpq38dPyfCFquzaj",
  "key1": "3onuJZW5dJf2GvzMBZ1ExYPoHevMEceHqaYfC4FsaG96e5AW2XgxoLHEtNL7EYHRNmv6DG5S4sgTn3YkZzvVE1FS",
  "key2": "2cDudck6rqkoYKEHcaxxoHcCvadzkASrVG95FE1e4pKc5khcaB4MH2gVYkbebUdro3aSftEtLXsdMWtkEypjqukV",
  "key3": "2RLoYWpnMtUXHoK2Z8YGrYoytRL3EaTTY9m4J2T6XZXGLQatKPtxKuBHFoRhbS4RJTBn9Nv1rxRPd65jyeabjDnp",
  "key4": "55EVHbUGWsk5CB95jTRQek7sfPs7u2QhCEBW7AK1baQzW4Y6CxX9VATHZ58EkdQFiNtheYeHJU8ksfsKR14zYwp",
  "key5": "3tRzfLNRVgJFVs3CD8CGZVLcjgjcEKqSpBGMHy2WdE58JzZc6psinCPCedtGiypWMTCDc9LJBTXLXGYWDM5EsyBE",
  "key6": "2hcWNqKFSNC5KD8DNmkNEHLvnbeCjvXFnDZb52ni1AMtPemZ4SvqC6RGeWsBQxNYTqneUz8LMjd2kDHCZPRXtfiV",
  "key7": "2Dt3wrNwpT9rAoHbHAX6sEAZzYkiZmKXeMVvX8pwSpu7tFcDCrNFqhdjCuid2GtNgmsjbaAEmHw5RAGGFSV3Qr9Y",
  "key8": "4iMch7WDrWjHwqKxHbepSSum2qeCZihapkAFdA8BMMhh7gTg1QgqBEwCULQg4sLQXZ71J5K88d5Bk5ajgn4CXEss",
  "key9": "yXJL3pnYfcSQDXYQnF5Euj3tyKvJMjBidgqQjE2x59qz7joPYfbCbJ7NuqaNskb349884V2148o3Ug98mdmiNQq",
  "key10": "2Co6anxhQnpamoyGNKPwBuVf7pTpTQyxpvywnb9UGgyVnaDrY7QvEyE9QVycnag6H4d5kzKigBrASW6HSWhqo5hJ",
  "key11": "R5ZCvDh9ptmZLhEjWQGF8Asu9SxrdkpLey2UwqpvmN4V3pzjPjMivrFuwSkCiZwzV4zJLLfcUB8sHv4VpPZiEQ8",
  "key12": "3U7r8L3JiU9RURsqYbF2fdoQ7JEh6b7vfLNwrt5RdvBGBtte2SHL6XiR8bVaVZqwwCXJAHDUNon7aJqhEMm71w2N",
  "key13": "2T9hcqvXD9ZXzzZQK4TZQEVghsdLY1rnfdFXPUTy1UWo6Yu92b3qYTCTvr9n9vscpoTmSxYaqzXuDwcnYWNdDQ8Z",
  "key14": "4rZuB5FNfjKjUgfmfHJ1HBCjYmDVoYBTNRM37HMmmQsdTgizcDCKhQ43eHGFcF2aed6iYNf3gn6yGdNxZa65WV2k",
  "key15": "2ELRpGo932fGVGnTYqcZcBQAoEgX6rxRNHp68eQPrQEVpqqiWjuzWXmAhgE4Jqi1RjT3JhbQstUbeigzLJDtror6",
  "key16": "QrQW3eNShEvjNcbqeJkTqS2i7DkhB2ZJDNvWq6TQLKJjbCV6MGmfcFrnLNQgicnZjBsokPLWqfqACuT89SGEeDE",
  "key17": "2PokdrhzNDdc6FifqCZoxmrU1WPdsR48PQSpoTr9YUX59qsFJKFfjqz3MWDm9qtnQDwhGukWX2N7nGzsXhJ3XHVQ",
  "key18": "4o7wbKkfGRcyhU2UTPiBH2GANh1LXdBQwsShTkSN5Um38463zoTkZdTbVSaCFb9jYJjNnkqzyFqPfcUEaDmdVisq",
  "key19": "XUVfUqDW3g2WqTohkKmaXWJEkjomLdjkk3HBisKw7JTsQETePtbao2RFjT7eFiVyduHGwJCQGftKBRLgX1aA3dY",
  "key20": "2cFK711rK8eSzhvHiuZdksdgYPisVYambrfoAPx4ra96Bnx3d52gE2Zs36PudNNo8798kH6ydhLtXxZte7v3kBxs",
  "key21": "4TAgsSnwmyymt9zCrXshPB2GLSMkmRkQbBsxgusuFAaTmBXQNnfNMk4zEZT2jc1wyvFa2uSfsUcDgxWBfHLgNCt4",
  "key22": "2MXV5hJJ6jyKFAVtwciVhw8SJFLAKURbrK1qYj9sFzo6mbWuDtNYb3L99NscWazk7j4xJMPU47ggrSifAXbA8Sot",
  "key23": "oVgKNeX6aQ2TgjDDtvAbZfwwpKgsUujuBhn61Qf76Ffhvrx6TrR5FRcRE45oNPDzVuAwruAWmftC32xHQj1m7su",
  "key24": "5yogyrDCZuJFdKAqrbLvy3AQ9yiUitgPTaG4gYaGEVayj27CYqyZDCQiWJPREgwqrreShhCZD9BtbMDpdHS5voNF",
  "key25": "53SzVLo5irez6AeowN8RCE4XNNW5b7B9wXybAHMtBayqag4eXKa454t777MmkZx6sG8HsoxnLyxcNqh4MBEmrcNR",
  "key26": "3Wxfg8HnMSiwfVQKfdDWXwJSxcfCh5dECdHnS1ctMgaZNgECoaJUK1oDttx6E2d8Pieaipor68nPtZkygJeCiL1G",
  "key27": "45UKmrtFPXttZrdgZNB9vw5uXDqZW41Qbf1Asfzk36RVo9MCAt7WZ57b4JWdHdDqe4kNh979TFpJDEEraz2xhVWz",
  "key28": "DEyYS5DVHQEB9szws5erTgv65UMZqK6Rk3rzEw7Kbwrw4Cgg8Ery45n7NnYKoe1rddcA21dG1prZGX2ryAwt2Nn",
  "key29": "4jabjmHvmik8GkNsXLWs4jZLAYv2z9NE9yg9GL7eVz9rAVfbEdFcPhZAYku4x8woL7eExZE5RB5onyP3U5q1h6cY",
  "key30": "QMa7PxLtyj2PVyypwDVCd61QUxeF36135DPEQsVUQU4LxaPVaL16NZwhCfR85hRBqh7cXRUst9vj7ow4hMDmtLY",
  "key31": "4zSB6Ehvn4NQAHiTPFfikQP4etXMFpQHSepusT3zcpyWxYu3SKdx7czSUWGyvCKCWbeKQembAdDGHheoPxAXqy68",
  "key32": "4GyUEGaTdySJ6zDh1RwY9HjXrfw2yWMxbf2DFhbxuPwdq3JiJxpjHzwzEWszGHJrT9Ac48cPJhJMmVM8KrrBXm3m",
  "key33": "5utGaThzNEjnbo6X1Rgb6HRB8kAyHF3Krbtr9jPWTW8oUmW7xq4xDwZww6Wr2JGWHjuiKnaz1CNpfhSCYKCCRy7P",
  "key34": "4hYCxrEWxLiDqJ3kzjaXMaRFZYcspTVWqT9EG1qc2paNtdH32whVcXH5xdBuDQuzASiSnQCNrsre78suFdM3jmPg",
  "key35": "2BF6swXx493SBVYH6G4iwQGpvoiJ7YCgumsg8aubq4wg4ngkCQDYAPM2y2cejx1HQF8JCJqvbM1HsDWNVY1QbaRN",
  "key36": "5ZrNpQg6YuGk5Qb4f7CjQWkzzvgKj78j4ALwyCigCizmRhorzoxpNXcxYPtuZYfsG5hZpfk4emHa6MacttWexyfA",
  "key37": "nhvD81Up4cNX22uqEBLXhHRs6arG2Q34PMkVxsAfwKvqUzB4AE2HNrPbrSof57XREtEhfwMKNfMSA9V3Wcmo5ay",
  "key38": "kLwaqaSx2Hpun26sM4N3TFfatHD4iE11jfNtrsSUxGcpAiME9p22fxh7MCxyRa9SY85JUb71E9HHwSEqbnnx5Zm",
  "key39": "2DL9pd4S4e5pBDzp8apsH6L3w6vSj2UxU21iXf1ULhf4sZZcZ8yQJjPvFLSGVLPGtn9juSjDjmeGhaqEBJcpxApi",
  "key40": "3Pvu1EGDAPiYq47eG7rj3vMCmdCcmzMD2vmwENos1xZXFf2ndLKJgdd5RhSM7B4bvhiQGHwANznfN6WvvYe9Sowd",
  "key41": "55meBHBfCeWzSjvX9T9fL5E74FYBMVFMhY2b362AFB367bv8QLLsVe8LbPpPqeYtT3wjATB33YBf2FuN6zFuTXHF"
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

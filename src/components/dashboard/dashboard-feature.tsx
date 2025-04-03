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
    "Nqu1Wjfc3yyraXxsKHLkniJboeJApC2CnsLjWAqjGMrvuTjHG9on3QGM7ANsgshUakCQGuxx6oiaHcQwEE6oo7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "295Nqch4wnzJUNkhZrkBPwAG7tZejtXa6cfjuYEWHnUxWJAoScmifvabwLW3iY1GrYwNZnJXG4zJ2A6k7jWUKFHb",
  "key1": "3e6EuJRPSUp98466Kgu5Qo9zU8BTFDPMRLSjnLYRi1c7xc97e8QYiNHbc8LiunLLz92wTDq5Pr199WPFMAuebvx9",
  "key2": "38BkhWosmQeiERkAzShoQKrqiJvXZ7kQT6NYK6F8uz7FyNznCXnJyRa9KXytGA1WRgupWy98Mgz4P7usy6e9FPHL",
  "key3": "5e3hsroXx5ntBE6kAGpWwPf6JnDkZuSmh8JYSXJVRzdPNVreLwAW5fM9q1jrrP8GdKP58R6wnR5wQn8LqY5HuNqZ",
  "key4": "2G5TiZXdaQmccVA1xZHCnPvPNFjK68bKmU6NDCYVEM9tjRWU3CccMJ8ibZNVVsNKQd79nQVcnNBVWhmTBnKiLWfB",
  "key5": "4g8KAchKTXAS1LqJphdgYS9Q8Wqwyiwrfm6nYkLuJiuy2H9wrvBNQyKyAm6GkgQS3ktFBrGXkAKRWU1fzEwvSAAn",
  "key6": "4qY56N2k1rN3MjjrCzd4Dzhk2KUy64mf1bVkSpkUJtu8MedvWD3xMAaMSY6FuUeAp3VJ2kcTpnCSe2g7SMWzTYZg",
  "key7": "iKUPjcCBkYbu439gFSD1fgJ8FHvx8xqNsY7M2snsM5KUPHkabAGMbjzRSRE86KF4j54pbsj3KG159UCWS3hhpky",
  "key8": "2sFDNW7HAAg2pvRhdwM9ZCKwPMQgNX29ZProoruufBMpdZVPXo1inC8tjY2CXA9k9ZYyxCRbwKJEmA6S7arkxpaY",
  "key9": "2aRrnMsvKbrr2R6UButgMDh45vqPAmaShTa74ZZiJ5Lgz9Ex6fwUz1zNU4Vf83pHDjgDrtu4vPGaurYAnCMNqmDi",
  "key10": "4MPMJpmqT4yS9oDZVPeaBxJ2MfQ81SgAcSM8czGoAGAzEswyaESjDosKHqiqv3fCgcL5mKkzm4JghaGQBmxe4Rwg",
  "key11": "59akpnTgnN2N9rTxrQi9jb25H6EKkUatHNb877aLZff3egr1vfNUpoqV4AdCEqLCp5pWq4q5yGf6eF4SpNWe7TUq",
  "key12": "4WRNvBu5xXtfeLGYjHTCoUF4wfvQHEJaEX4jdTCQjtzyt6wVkYt6P688TMBqEZuSw6YEzLTexyBYaTcfPHszAbzj",
  "key13": "3AfHQDv2BxhafU9wHDcUZgfuoMBsihnhHhmUKrUajkCi36KZeb7wCDSJCxBz1Ymf4QvWBA35ne3HKuaFbz9fRpCf",
  "key14": "5m4wznoeQLFEDomsrhBL6CHGKqXWnHRHrEbTnntzCtWUe4Doa6idQytABcg2bxvuCqwXTQf7N3VDgjaF3WFdJi61",
  "key15": "4xxMpxDBW8JtqSxWLtRssTg48LR3HvtbtimNuC6udmHYLhB1BCNwUKX243gCkKhPjQVwjE7wVqVRtrDBfJbYBN9L",
  "key16": "5NzxVkeWNEknutchd6q5jjHpjmPYReXeYNUyAbCYqaGrhK1Q8LuajBpRWEq4ucCHdNv3xWscpiLaS9F6tCuGMPMB",
  "key17": "41paSkrT5tULwGvSqqutJ9TyTn8NgmYLFYDQv3iHSTEAJp25yvHn5znHwbyt4wigJjvhNtatUVKoai6HkeXrBWwC",
  "key18": "akCUYtaT6uTxjLe96oXhqsyLyb4FbiTSBHkvpc8NsB2azCaMvQ8f9MfFt1GeNtcvUiEVhxNH3ZR3KZuZm8KNsL1",
  "key19": "4THqi9SkmnJwAha8kZuM9iaXRxjw9aAt49dVXijmV7WKgMsMSURUHdvpB5KE1GRqW8LAUMqKztbQw89DhvXUrngK",
  "key20": "2KRavtp9RZyDZFLewizjkpH7RcGGD7MbsCYJ8DWjYCWE2ihiT9aMmw7im6VvZKdZFuaoVQQ6ELRu4Gjyxzqe7To9",
  "key21": "2XRwwDRP99z3b2cvoaR992bchcw5MWb58XJuTmWdvUxGmeopGNX7rJ9Kiwex9hLYLzGDfwMoKMf4Jj1e4KZvWZJA",
  "key22": "21c36xEHi4pY3X8wNA7i9cW6AsDTkpUkZLNTosCoo58e3sceVMcA1BRR3jnmChHCgDoeVGapMhmgnXNEMVVVZ7Es",
  "key23": "2c91HmxPVDySpkjzNJvSuVAsmDRmNBr3aQCpc1HAm2wSHHRueChuC9z1i9aijt77aeB6AK3XuK8LJKVkX4ZswDC8",
  "key24": "5wXjKxAy8StYT2pF5dG8rcVZkXa7YcMJS7j8PFKrAKXuUFH2XEbyXRxZrwPpLYBkuY3iDFUn6XE17ps7mP3nTwiJ",
  "key25": "3KfMTL4q4mfbe9dZmMs4G82bDxvovPryGa2DScjej9LCBxcihdaHNhF9DoVupfUQGKNtvq9oXr8u7453MwyJx1CR",
  "key26": "4YfWELmXUZrBWEGAMRDgcd4rwHadTTRvsgef7tDGxsW7xNjZQk2yx7qRfHeA4CD5WiDrRH9TRmXfQDLvXdoaqXBh",
  "key27": "4a9X2cQZf5E7yBfhPuj5QqtUc8jGcotLMtN4X4dhV2dko9wLc59wFeiqPY3ny2gZttQwGtHw6GkLL21bGhcFTyYL",
  "key28": "sYtvtgT3JtWFnQkNky2mBzE2ENh1jC5hNAomHrZ4LDk4s7cytLyhA8VYuqMnE24L1uA9CzzRvrmhTh76usdMsC5",
  "key29": "5kQSDK4ueXDvaVkuf671zZTjWPjTfJX4396wrgf7mfhfgvAmQ2AC4JwdcG3cgZPgL9vuSbCvhEoi9CvBtmJdNMRa",
  "key30": "2mJLdmTi9XybkV4NnyahC8zoEhYYJUhPWx5LsKSEPjMZB2s5NYVLNYDhasWeQ57Y7t3rtw1PrYviiJimFrVirMEb",
  "key31": "5bHCMUfukEiqtDdkPxdo8Wi1m4RDEafJGgJhm4WoZ7HS8NDu8p9eERZZmB2S5ziUFmGALrEKopBMReyoypRd5YqD",
  "key32": "3bi31TKY6PHdr8ui1fL9ZYPbyfviBQGJkuv6DMEvREu5NV4tNLQ7XTvKgaCAyMVU2urZcVbDYPwwSZXS3L6Hw26o",
  "key33": "4NRdQmHD6yAtTCfFPDYHzXTMhkWBQEnyAvxQ3oqJaXpLYVU9VsAceQSXp4eUBDcTCBnrAT3UBAtcq2GyrEFCHeGL",
  "key34": "5JduwCbx1kFknb5s4GGDnqNPfGG8pEckFvomFrGoosHfTLYkrhZ4PrAAAV2pf9TaJgmXWFfbNsnmL1Dic4FbbpKB",
  "key35": "4wzDLdRtNrYtzfPDwJy8RtWWRzP6tzZX9t69JqYB2Giq6i1CPXTgKxpJgYCrJWC4bU4ctcX937xyaaCDqiZHPLKS",
  "key36": "4u7zRVy6ftZJG3jf9gshj3MyPDx97qLQZ81Fen9AnX1BFgpM3qFXaRTAPUFNgiQdjLJdzAGX6s6qxgmda7PxuBTb",
  "key37": "hQSH4yU2S3mkGEhKgKSKRvn8SjniyWZHppfW3kN61m87Wam6VK1sT2fLXMC22iC1Ym231dZ9Nj9URPqogp4SZr7",
  "key38": "3xkEc4214cuimP8Lt3ReMNk4yg5GpqwABznbJwxnx2GHcuJYtcLM8VUucJNSe66UnSn5NywjWqjKosGrNsJ1s6dh",
  "key39": "TjdrgecP5h1ZQh8Qh3nh6e9VBuZ5KPpUU2bLA3md2GZVr16fGHL5BmfLW4SruTbVxV4e47fuA2ubZgDiFJmQa64",
  "key40": "5cyQWGMCDGtwuUouM6VcH61mqCfMBfSg9G5F8MzVGhE2sNQnQGwQvSUrHKuHMLEwSmuPXHw3E4oGYLQp3rnbGRZf",
  "key41": "6vsLrZc3gsmSRQmy8SEN7JY2NH2BYPaZMRoko3fADoCvrun7LU6mnyeK7UikdPkhmZoadA8pCafoAFM6cwv53KF",
  "key42": "5WNrWhBX274NLkDP7Uzghz7AuNTxg5zzWoAwjtTvbfLKFiAHHqB7ByVm7Ftx8cswSKQj2MVXrAwQvPELJsfYGojM",
  "key43": "5hvBRStmFogMQXWx6SGFdgcr1fabgBwn94gnAhY13kXZqrK3qfVJEBYRHErbTg59Ga9wdrZTHT17vM7hFeXfYpRM",
  "key44": "4fUnKZQ3HWd4VUcfRvcFpsDigCs1TpUSsxezcWXLeGeCPH7WnAFpjMdphSLUppAZPsTAxuKwG38aJAFtucYMhCbs",
  "key45": "33CNzKnQP2oUEtfLnXFDppoKo3UUDzy6t72ihr8KmgdxrFxeXZLPJMsUHWjkh5q8JJDtNYysWgpLinZ4MmDkqK1F",
  "key46": "59q87jYrBqQAwrX5B9kLCs2Vh4K2FUES84mLzeSQzJL4NMjPv2MnLVtSmShSPBSCmPJiALCgE8EkPEhXyN7QzQi7"
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

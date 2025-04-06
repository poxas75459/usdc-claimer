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
    "2ouYxY16WSZ7vtK5RQKVAT2zgB2XYXYpug7MZpdQg81ZUEZmRx9T95r7iNTh4UikkcTUXRhXxNAaH8VaWeHuicrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2VzgixUV8uRjWXYhbMSCe7WcpcYHqTjzX7qWLVVuJovgAkkNac5CQa3iEaZcWEMt4HpJEHT3BxQMuJqB4cRRR4",
  "key1": "3kV5gnqVZ8HH1NbxEnaZxSJ3Ct82nsoSA1EgnFKjcfJijMHDn4zDEGkgDKvaatDRGYGZGUWociKf66qRQ9ceqt7Q",
  "key2": "3yhbzoUSKUiHGy8sEPR3dAQqDFroVQQwBifLNdysziBQbk1EMv3CwpPbPfEbKUA627rS4hTex2cAaxdzBYBeSfD9",
  "key3": "51PzRkrUtxC23qe7kcb6J5yY8dF5ZG5yLFRGevh1Lcb5TJ2UFyVBbYmCj8BgJxAPWTHxu2ES2KcsdSZLbP1WNc1Z",
  "key4": "4236e7t2DK3y8Uv8HwASr79XyUzzAsWcAZeMkP81LJ62LTfAC5UC5yyUGGSGR1iZ2V3td9hY2CeZeMQyRTFhpE24",
  "key5": "2ERBtA7p8Hr6N6CWiiRA3eidsewfmC2LUBRLL8VEWpqJhWJESEJrX4kCiSQagufoSkc1NiiiLAiop3CrTgjezkCZ",
  "key6": "26Tn4yjp1zfxywjv8VV4RoQgpVVkSmCBnVQWPbetSwRzYEooQP7Yv72VhzV4Nhe8RKQU3Z2LkkzcAAsdTzG5zxUw",
  "key7": "3TfE913HgSqSHWBjoTKntw95uAZTCFAEirnZQ2tQo8H9aN8nMx1bHK1qb3LwdvrxXjqHjNPBreHSW2dMaxaM3B3m",
  "key8": "3sLB6greNn3f4TQdzmDb3QQ1AiHTEC5FBQK496HisxQKip9eaDAQNoRVrjiGecq9mbRdTisZibko7MhLMeFNEXNF",
  "key9": "3cLXH5378FmKu4Q5dSgZxsJvm2YayknVkfaBoxyPune12D46Uxs7hAgSHvjTTYwCutBy9vnNSrUU1sikpzSVBVWF",
  "key10": "Kn2QQV95ow5LsJuk46J3DLNWqWkRMWCin7ywXKFazdsk5ZUgeHBPXXUCRjimu2RpXNHw1M3ZH5rgJ3yeh4NkNWk",
  "key11": "rD4nGj9rVDJb8iPHMCd6aXVf4EQdtBcYyCFvghUfosuujoZ9Lbs6eivU6X5EJgLxPgvEt2itYSQ7dCkUFAvuEPT",
  "key12": "4ByjqFEyp8VeXo1PcqgMYyRqvMbnGe69eEQemw1RRPMCAGTZmXgbutjG9HcFN5BP77U9j6HbgdUukwkHr6xYAyDT",
  "key13": "33jEmtA6d7bxmMofryJEDnna2C8y1s6HjZcsiEKEFRUDZDzmtCbt8rgmtUB6PekRj7urd5qHg65CgtEnMDJuzzZA",
  "key14": "3ujcUmCxiHFmcWhu2X45KKdoNGGVv6kwmWZRxACdX8YWMbQvrUEKxzR4vk8UZD7sn22YayiT5o9rumEzsj1ni2Si",
  "key15": "3SeTGXShrcorN4anJ1rdJxxXTV9RFam5HKqMuHq89PCi7csfmwRy7zQSNcfSmyG5Bt5k8F1grqiBQT1q2ZeX9LGL",
  "key16": "3VbuafKGw1xzTMwW6DcX3PPtYRusCUCwMxNXR57DWEUbQnJDqSVGysLMZ3NTFZbLrWUXWym1e1BArG1xdB7SpYvq",
  "key17": "3sh2GmkiVwhrCTvCAsRwrqAh1sQZhoFN1nZSs8ZqRXA9CVegmtXmRu4rdLStA1KiLRENZv8pMDn3KWMCH2tDohPE",
  "key18": "2wfiobA2fR52p3bUK9Hf4XV44hd9bZak3Wm5qy3FEMPSpd81SvpwjM2W6CaWZJMWcnVurM18e4WmATqsGx4JqMvw",
  "key19": "5CV7YeqcGkUVCnJUGDLmZiHbbdbfHEwmBZkBKts6WwsXL2SmJcteLNV1Rt114BsXT3ArnvmL6yZwRMfaFAna99rE",
  "key20": "3WFGmAAWU9yvB8hp8hqhMdm6aCmJUnjgjd5jyKaV5U1RY8GrWN37XLMUPMiazM7GEedA7BybyCsAvLLQdzDRJJwN",
  "key21": "5AEGF6w8g3znT5MRaGrUrTSd4k6moyCNcxeCyJHVmH1WUL3d7QUGN5Kz59L15vy2rkz4V9LCf3URquNhGjjB5q3M",
  "key22": "21UZeQHzmFzdEnNLoct44qdQM9rWNxLJwW6XiyfR3eUb8WPLfqYDrdh9TGzSeujaGnSxeSKt62GMedj8Mzhf6EAc",
  "key23": "2NpyPQzAwFJt9XedvnhPyg7MqFYfo4f9YpLRpsQqJeMa8k8UGWzK2kULQVxoYcwafN5CTbEaJRKMy44khbsynbsX",
  "key24": "yBkPt7qK53YywRSNyi3219zAA4eBueStqFewL1gxzuRqyvUVTxMGcYRYo4LTg3YZPqbJ6H3hXHPbQpNvaJo8QaW",
  "key25": "4ZT2cyYHgGfCcT6EFNjjLaJNUbKFiPGP4Amew4dqFeaSKCn88dmh8K1fLJBrgvaQcJwG3VNc5VVNukcCBjqGaP1t",
  "key26": "3BdwGUxJqsKPMmrESyVeBtGKfNskT1c7Mee59gG7P4j1u4UjbM4YctvAe4EdzE5wfVZncbDDTR5uC9ATgMwessBz",
  "key27": "4aCdTgtRpnUaCN54Q7sBVg9fke45mv3CCkhSLRaK2ERFJ6i67rScdZWn75KsC6zF4PYEfHFWbcagqZV5jyaKhoGv",
  "key28": "4UtX8j5LPYtC9yJPMGCX4LAV3SEPseMdXTv5R8SBpEpxEYQpt1GRGTVaiTP57aDq2s2wCfi6mPA47xKRYtUKgLnG",
  "key29": "2gpnzkwsGGLYSdxEJbQSdEtssatLQXNX9VkK2v7wTYB3gevVkAK3Vho3YcwAa7fJBaz4KPooqEHxDoeu9u6pVnUG",
  "key30": "5QTVJsQgrqo78F5bnb2bZy5HNBPEZz5BgsGN4xKgwvGog2M58mSWy1yPoSQgudxLJQna8trrxXhYDBwKqvPM4Ei9",
  "key31": "5XRhoVhtacNsbrYYLF6pZG3Vey2tiznyYiuMkTN83Z1zfDGcefGiqTcrEtkfWksTpxmLjPrYDxSQPRR8Dg6HaR1K",
  "key32": "4LAYHdjziJo99owion1qZzVzUG3nzMxoVpHVgj2rUuk6Fn3JwaPq81eH5NAmNsXyAJ1x19VSi5chW5CxGHUWm1eB",
  "key33": "rwRkMS4cAzrAwtkN4hbE3TvaqsVKXjEcYKUkyiaaJpJFd9DqkNmbnmq6pGaYZRtmfUa3vwFCZKMd961RU2zsoxk",
  "key34": "42B2NTvhb8EU9Hri6WrTZBk9PdbRRXp2dSaeaZtCcWo6TVP7BKAT115qaENz7F2HVNysanb1P1k9TNzeEHJdJwhb",
  "key35": "4jD65CiyxLFKNrzBYXtDNQbtT5SjhihWoReFexKTLrneXeihfA9CZ329uzsRNktoPgnZh1b9xoURiU9A3xSq7Y1t",
  "key36": "57jjsZvbGgrHYpHBFiD7xEbirXfQGCJK2o8YSfUy7LmWBsP6gyGFYWB8ufATEfiMSRZTyGPm3XUk1GcvwEUjQmeq",
  "key37": "Di1Tkoa7p1sJBfjz5zSM1EmzxQZTACNhPAVwywePx1VYMoNP53gXbi9gyikvAnfqADB9CzFMaXczrMHePKQHKqd"
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

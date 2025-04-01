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
    "XdmcM7urcXjwjwUBYRrcAXwi4ASKc8HK7UsAZ5ih1kMqyfrU8u7aJLadnbQxjzngBeqb7srbBurjFbcV6KubX6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H9GwA7A58RrZePX5vdz6AzJde8dLedqZ2FXvHG9GMawPUfUMsBeMrXFhbpYyeYNnFeYq54jBjNJ9DDL258eqZBj",
  "key1": "3pBPLwjaCJkvEb57vgHPYzFMUT5xy8Rv3E9MTDWGcVHdZpMN9HTm29Kk4HQyov8EFBibh2iGZjKR5rADCJGwywjK",
  "key2": "49pPdjyRKaQNMnFjQcQjXJsb5JYNbjYeSAJ3rcaw34q2QNnvPvdcn2bFyYE4xXCwWwxJ5twju1hLDfx6nWAjKupx",
  "key3": "5cs2QfcokBTKRHhswZBbYu62PLPHWepN6sVqgaiG7wQhtUppVPpuBGgeaPpqsKarJ1YXvdQupzSn4WESAwgj4AMm",
  "key4": "3CaAPMoEaUXf1Nbu7FEYKxWVosq4vFLwL81tWe4z4WyZs9zpSmXKB35wwXWLVrmRMmzeinCbqGmK1jussThw6NcM",
  "key5": "NEyvDkbgHzfF2qZEbuWyr9fotw8Pz3rjMdWaTFv8W4cQKcub3jX6raCi2nHCMNnYwZYnYVbwC4MQzAesDDDbBEk",
  "key6": "5EwwDXLRwRCQ8jP4FuMcJWvSQxsxB7TRG62Hs68zSDbLKtbcrQ5bAQymXLmW9ZeaDJnqNtZABmTKdxjmAiYHcV8T",
  "key7": "2QXVuk8MvL9ZFsfrq4DndEB8Rhm6p81ozFyqjkzp4pZ3xL5wQPwPFJq7QfJVDmgo4bVX3V1FDVRT8jhk86Yv9D6Q",
  "key8": "125ivTPS7PJtYVeRaUTDdihtMcYnCjpPbvjKRexXqqaL8M9cbjcu8RafsFSouBbft57eu3m9F2XMCmcG77SBNeJQ",
  "key9": "33csXvY4RWzFmDCezxNq8EKsfvvyy9ocRKt7jkcJ7Qem1eL2X9T2Famky7p3HkCBJ2tgX8A43Cvy7rhXEG1yv1eR",
  "key10": "2tMNm153gAwLtTmVNqtJ5LBbuPXstJbguDUxqTUwqAEUqKCnLMRYjwgmEXoAj9aKiNydAx8zveHnXfNWo9JR5bbw",
  "key11": "49typJ655jwxy6k8hXm4b9WpbEsmpbFCwL36DimzFPjtVNNEtb2DJCE7tNiDDF2rnXRN3xvK2FXqfm5Hachj8mXX",
  "key12": "3ytCH1Av61rJYAnhow1zJD98pFTnioYbdqTebwg6aRpGVsPJWZ4JHEDJbmNJRpiiG2oEWSGngYmrasudbvaDene2",
  "key13": "63BvRKSvUcHzxFqCTxfYbKuMXYDGELXV5KxmoNmK4i63eixANzuuWNJtzeTB65jRa1dNEK5iMg8Na2Vp2fv32gvx",
  "key14": "5Ps5XSynFubBy6r8paVM9kuB3b5VBAh8Bu9P2RoCng6fX87bXZ1U51NbasyaKMyqnvgPAQeUCnDmN4wnRoFTwz8N",
  "key15": "EL1by4emzWqGxncUU6p92UMZU8BB8mSgbw7X8dECZWkJWYy1HhBDzKqe6uDAciKSu8cuMVuBxPprpi4yNqq9Ea5",
  "key16": "5KwBHpjcdo7kKAWoGoJzPvmavvULcuookF9JPPtEjL1ekAmGRvww2vtsf7ySGPiR1rv5VZVM41spFmBUdVNnHyNt",
  "key17": "3oCt8BJQDNpy71CSy83T1JSR4QhFQdJVTPL9vAAL29Z25Zxw3WKd2QhRByxZf5oPZQTjBJZ6SBsELTcdjQuuwyya",
  "key18": "2MrmRj3giUKqh678AvdfNGe3eaunhoK6f93kA1itshMraqnsBbYDS8SKEbWn6twCtihxf1pa3TxCToCpJBNEfJ64",
  "key19": "ndCaUYP7UMDsEQWFFPSji74qqJzaCnePEYhvMr8i95EndBNrtht3uarriV3jaPfoBZMsWX2eRZafUNmk2iAv5E8",
  "key20": "63RSWb36LbB3QEVtAr55TncyYoQ6qM2Bnph2b1u59kY3nZFEQxbVbHGvCBRw1bn19ZbM8Zf9xrFo8nWQBFKbx3fz",
  "key21": "HykEAQteDK8jrwVhnH849YMccxZWYhf7TAJAeL4xtyFDSb7vF7kToWFKbUuWFhWFqd61XwLtMFxxEjg5yBpYENW",
  "key22": "5Vs2a9YX8ZxCdwNqpctr67DHJNdv26E1nEUCobSnhjB9qqqDveJSKtfApSWDt6rq58k86fzVSmEDNC5p4WBba38t",
  "key23": "SdNHSN3rK79RQ4iYCdev4Hqkcw6k5jNK1fePYzoa9U5U8DgG8yVA7KMXhy6iEaL6MBv9SxwySMfgunuAWStkH46",
  "key24": "aKsidaoab3pspdRayJZGmD1838wt1bxLqcjCviP4HVZddgxRnfoGX41ENzM67U6C3wfTEry4ZryW6eEqpPgVx5K",
  "key25": "4h9XG9kofzh8ui4Uz6dRGX6U8GstUjHyQvNFWergarHkAFPjBrPsRde55rWhfM7TZouc1z3MYgubVHQYNkoG7mn7",
  "key26": "4vZC7Dj21cFuMdmyBxd388rjYBk7Azt6T69qsFssun4RWNVwryuDUfJU1KTse1iK3VQrHRp4REcSv9nTKffYXNdi",
  "key27": "5paGpd4CxZ5EFXnjNfimMfJZmUMuNMBR3TDJYtDbDs2Gsfyn2T9PKde4PaMeMmAVhCuK3NQtwhpEiqYrQPA1jr3S",
  "key28": "4TayvkbCXfQYu4DMLgsRA52rTBBHSKhgAMkacmZ2tNxzcnrCZHTDHhDj2VSKNb2St3VRh1XseKhNHhHEnrhXSBAr",
  "key29": "NLvV27PrT7GF4gqNunVrrNNmXF3VFdmNsKRTjCsdpvPvHfcnhBTBp5NC6nfzbax8LgwR5PDYcfSGxvQpiz1LNFq",
  "key30": "5T9XxGDUka1NeRrwb2EKkrmmmtAHZ3ajQBTSM89dePNjPNbvdeV6znuSARUxq6GEKBPwFR8mQ3FcCo7816MwxgQa",
  "key31": "Cggifh6eWKjqG72rNp2B5LBeGgs7EwG72uZuVzqQb49gSTJF9pRTtvAhnwQwCVxhP372kGjZhPLNgATThjkJTJH",
  "key32": "2bAb6CAu5c5r6zoeKRbfN8RHnog4nt3JcVW1MACCrmSgnurVQheS2TH1hUVAQb9Lb8pnNL84e1PxmXUrMV39awL8",
  "key33": "4T7nihWvuoPNXinGfUApUZSqx3bGPDEVaqrSaAFZ728427GtYecKrQwpdQUVCfFryVFyPSETz2Xpfw4wz4VeDMpE",
  "key34": "gEJBABQw3hUhrgUGou9FjuWyGrU3EmNrwgwLpZDxKioGsGHucp6h6BZ73NN1YxzuK6KwGMqeav9SuYoUfaTdZ6c",
  "key35": "5Q4QgCGqP8zM5Yo6sCoa1AiQt1YQ1yyio7RQFhv3PQoiM1JSguNmqriSBKa4pBCE4UZUQHEdYqcwrDpvfvoGbazH",
  "key36": "fJSf6d2sUM1cjXijqZ8wBwG1JxSm3NutBBcuJ15u6Eb3xW6i6PAEeHJqD9XZvzDM6HQQhJtReXEDuvgJMJwW2rz",
  "key37": "5DpGnPWjtVWLYwsPF5cvq4pP53zBZ2F2h2SKh9QWbCXraZ1tmJPJ4DKLCuo8j14kW1XXVyfAvFXeKCLNTnFQYfjc",
  "key38": "42hpkudpECz4CXtJZhL4iTMJko1u97NTEr49XirDFAm18uvEMBwTWw5Xhwig8dv3JNjJx8jzPxRZACeEcA5p9kuV",
  "key39": "3k3LADeQJAXcVywej1pUpRukoXPWKhrC1ZkZ2DiwWx7umUP6hdAu3H2z7i6kSjfUL7nJdgXHtHS2RSahADKBa1W3",
  "key40": "2MA98EBprY48qBgfRc3RB4YSJHRkC4MwQAEQGo3BcbGEN2RJyfKdUP9b46FS5U9eSn2YFbn31uYczE9vnHpLwJ6C",
  "key41": "2zSXDscHfU8AX2j6X9xf83VLGk5CFxVr3YqQybhB6VgtfZz7yyhueDrDTMiUGwXksiN9int8wSCFCozeQUKmj8tV",
  "key42": "5T1XqWQ9z9tpB62bkMSGWdAam8yVUzBXxfhkoDMedgiv9PP6smgFV9okvWRSJb1nSdtxdXwzdCsQEoLkGSYd88B9",
  "key43": "5AxryMqA18UDLnTVFk5NGH2WyQtTb2B2f2sbqrRfpjQPQyNFBEnsdxhg6oBJ1mU8NDd2eP6uWek4ixBsDsdLHAQN",
  "key44": "5YLuis5CZgW3DgNAcBzG2ZiePoxf25qGVNaFs8DBnbqyzXXS9Tdy1KCejmMJr2BZ1wQyNtntABvwcsKVt2K3xyB8",
  "key45": "Tc4ut63BpE8QRh3Xbf91vvR1w33SECde3xMR3FaCy1mm5iMtM8t69USA74Vboaot7uVFtsgjgXGZArXkkbXYqzU",
  "key46": "2S3gFi2x193VSwnNMRHZ8hBRrWiQkhytEBffHgRMA8hLaTeBX9Hj34kT6vgy8f5bFXMgB69g8HfcjAuiDikMBWP3",
  "key47": "5ftrkZjvRXqRPggDDbErzss4cGGYX34ffanSv1mTHdd65H2MGrKqKYkLxPAWW8aUrPY3c7H3WbX9cN68eioRno4v"
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

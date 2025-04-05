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
    "5ZGmymESs9pyh6TuFBdtKHP9sFYtJQKTa8WWHCPcwqoGrRyM7XhJvB7Axws2yP3bLj8rKyxAAW4VX9N6Wdyx7Lcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GuH131e3RPGKFawtmrBD17XLu4vTEsPk6NAkdL295N7yP8qgWWjuWt5P3N5BEURmrpwGiZvv5kc9BeZgMLifa1J",
  "key1": "Fr43rjKx3biTBTZs5X8q9unyjgeipX35RHHkRrun8QP8GNCpmpR9mtHQM3nWci6sRYBwK4bmJ8csw8cz3R3YTM9",
  "key2": "3MPktuDqFYVVagzVK8Vo92zNvFW9tWEJgL8fD5cnpw3E2WgamJPiPfyNYzWhu3S8ffi6rJQRDnxSpG11BGCjdK3G",
  "key3": "5impyUfckHXRewm9wi7Z9dPsyJySmbYEei9D8EB3QVw6fhZRG7jEDX8q4qPrz8qk5ZuSsQVhMz1Ae3bKsDFAsdtZ",
  "key4": "JGwEb8pvJsfvEHhiPmnoGR9PDCztbiLXUZnNa5fkwPbvFRKmfxi3EEmJShW4Q5k8Ly3ptb7hgowH5HV4tUnS37b",
  "key5": "63cWhwiPXRGBPma6b7Bfp3oL84JTFSA5iMuTLcrNEcEx8WZFXMzs9hkNMJbzxWQoVdpX4X36kqPXXuZ128im3Xj3",
  "key6": "2ckbF6VaojfJ88eheaAuyUcMME4vb8dqR3eQnBtnV9fFpJmdhQsgcKex71YDL3sTenQHWovQD2XkDDEVYwoCRSRX",
  "key7": "3GLwKSrQmQeEiSQGrT39kzKBueStHoSDc99tkvsEykmrL69NyvVwhnfRayHYb3MsdA2cqqedRmiitY31h2ZX2ymc",
  "key8": "3o1JJ35qi2WkUtAp7MLpTWGxNDACL2pxJMpYKjjCAYHYzpj57xNGi8Ex3AquP7UVFyiLVx4RXipyutE1bcSdViCw",
  "key9": "2uwREmHWEbkuc44WFKKY1BteDTaR9L1iMuD116yHRUnZNDu1xZWsxUNiiMDR46JYJhCQy72PFZerA54vJK344fkg",
  "key10": "2dbsZJWL2ZBiqbN2LuaX77kZZmCXja3dakzkWSjYQwBrq4b6QDd7VBYA2fFda6HkrpN6bdZCU3z2yzSVoPrTpn41",
  "key11": "3FRruWzBfXRGv34Vr4oFJTTrUQ2RwujWTztNHuxeA4w5iKdwPT3Cb6CnAtPeyRTbqfgRyRTfj9tikGPxGW9duzh9",
  "key12": "KxJpELKAAc2fFMiM5Q9Dcxu78uxN5v9QeTVTq1jpk7D5SU3nGqQUHkjW6sBJaxz1691gVVqj3E7uEoArdWwtvSi",
  "key13": "5N8W9K573SSvgEeA6CUbHSsu3BFPUfXqkoGwAVvDBP7N9B9pqbhGZBVdSVxgWvn2k2HSeZUkQ63qiwWhapuHpTba",
  "key14": "5t1N6D7Gs8Q66rMeR2h38dkoR84sKKhuvZDeN82ZSCVkwWpemA4hVcDC3SXNoHbwXXE5KnDg9i5gi9jnJ6f5NMuN",
  "key15": "2pPfgkvmd1XXFcTFn4nx3nZaqPiTXtLGyH3TjXGtZVczjBXYrbVbRTUVsngJWXCe5HGa2G63LuwUxJMC5UycJFhr",
  "key16": "2BQki89xz5YSn76CtDvnigLzucei4WiWTLJ54v2jfwwMbn5xQcoopWGaLH4P5QCZvqWEu5MQuvLH8zFoZDobMiHC",
  "key17": "5REv8rL92rfS39nkD6gBuDXKDjuBWtxRxwd7ykRF4B28PU67B9ri6ekZQDRL3rvLUeorAKaEy1REgzWE9BV614nT",
  "key18": "2DnJ9iRVcyHbjnDD1r7Z1YuMewyREbHw33ipXhn5bgg2KimtHYfVgW2wZjayVrUvqe6Q8EpTWyzHZtMrTS5FvXX8",
  "key19": "3ye4CWtcZmZz9f2tkRY8AQHVMM8TogSkqxwePKrVhaG9j9zCf1XTirfPEkkHGEbdFoMC3xLTy8comTehJY6BDjbm",
  "key20": "33oUdUKhZLVFYzVfQuVhq4drVbfgQYwBbetDtjTRxgq5hp9fhk1VAV2C5E8VsFu1g2bYvVRGUmwLTzLFLfzrFGRh",
  "key21": "2q9awqt23mJKbr1t12gMqNTYzBLnP4pkW8rpruRDm5w9yuqcWx22vVyJZRNAHwoZGuMXSJ7D5n4tMFzFr8ubE5pw",
  "key22": "tRTKYBzQuMAmezK8E1PXag8fGmrtfi9Zvqp3gu7am7KbUZuv8M3DTDcqcpS4FbyGujTqkHgdB8DHWyeNwRVDQqd",
  "key23": "meNyzGKAojyPqr54BomtPgH9vDvnx3zBoTg8mw7RLN9AF3wMvEsz5q8aTnffe4vU6sDGL777HB29ekvabgHsdsD",
  "key24": "5pwj24KVnDynHs9wqfjZPiLP958NG3bSqwBPWJK4k2vjbV8svqY1NqT2UVhxt1VfCMbzWie4t4AQF8TzgaqvKgSe",
  "key25": "3BBSkYgeHgkqc4XoozTKXQsdYeHhk9BuRc5kT3uceJguR1MjHWsRYiVSbbCnTJ5Cx37P7y5vLi6DduZPcLy6rQMT",
  "key26": "35528dUWFcWURuRQtvCQNYoFW8EN2dN3aNr4sWqKmtDZBjGnESbNdwnaZCm6CyrgZc3LtK5DgVUw6cMVzuKSGnPD",
  "key27": "5ji1YLhakrA7ixtSuGyU3Qd45XMUTiRmQsz7pTR6n1LZwgXJWMKh9zf2edvqYmAC2uDKv9SMCXpRZnDL7Ark1J63",
  "key28": "2gGWuciUVMwfYSiaaKJABazSkwviajCF2NcUrH377GF8UN3E8bWcBgExjh6gqjMiyXh5DgZf1mPKMpupX1txAajM",
  "key29": "cqqqj5kFTUSQJzpM7sA1M9XdPbQCegjEw16VMFPpGRWkCRC46z8j9YLwUieuYrG7VYebbX2XnLEZ56xVsX3V84L",
  "key30": "4Wwzkyc6is3hNeCJ8Vbsq57ckoFerKSf8nVGHE1UkteNV85bJJ2C9yfMnNujXGihZstyzDvszFH8s4RzArBbNMKd",
  "key31": "3Bxksmo5HqQr9iGjuiknioCYfCgAvmbiZsAtKxVsXvf1hZRyRN9qvEVFoXZR7UHYwijpVmjzYztsAosvQzdK7oH3",
  "key32": "44Q5aLgbL6Acb2GaR6zskHxvyth2HM5dTTxK4WbFL5JV4eJ32btL29xVDMEXHxUCYDYA4CgZfUT5Z171nLfdVZA7",
  "key33": "5ZvQf2Sp1XjwEGJYTBaGvoEUTK573T6SXnczBXUhRPheEU1WmWrR7JTNVcxu4Xy4j82TbQmCSzaQtA3Xd1HaJ7qM",
  "key34": "436JVXenrwbVpAshm8XvBLci1LNWexSD3HY2ecxRsqd2RFpDGxxUfhn9JCdkzXhXcZYDWJVKKMHJaawmnuT7xAcy",
  "key35": "4XCfFUQTZhHbzUKxtdoB2gMhXwMjbAysqvAYazuGygnUycm13zrrUTqjx2DvHyWsafUwXoWw95ZZc4djCSzWo75v",
  "key36": "3aq4weAY13kfPJZRXVbEKSHvvxtLm2nV6Fgg39miJBgzn1mcc8GC2RP6Rkrt82AJiofQJ1JmowCntWBPmvF2Q44o",
  "key37": "21rZP6BKej77j2RH8Hqui1HGFa37PpxUozfVwsqQvDmTqix1Npzne8pukJeVzMZsUvZdthq68nwSuHa6uyCJYgJu",
  "key38": "5Uw4hCMYBep4aDAPKDDc5vfRufM8kTrekaCfnC6vnLF5vdSzzvyXtBjHpGEp4Atjr2CQ6dvYLZsfeSPVkVrb6fHZ",
  "key39": "28n1WJYQnheNUHUtfX16479oZhh9ZfV3S19H976VYtBSucdBenvDxtLKjPzBqWCNUt58NNWQ6tS2jur63ZdR8XCd",
  "key40": "2XjBsex48aMoKRe8nnUm2uTc3ZkmtXQoP6ShfVRbgMk2fpfJUYEGqYM7qhaLPbAjeFADNwn6apDB9DxqruospX2d",
  "key41": "4gmDQrDwBcKFE3pKYmwa8Hg3Y8fiHFbxNSheg64HzHurwEwmTzGs4QZhDetET8rjf9h42jiP15XCXRnLGiv9c3FS",
  "key42": "3Wfz9CF13xbcMnZXzr8SP1WtsoyviT2gb6RMAXRASaVxtE3CqeFZupjTtt9RPruj1ukNVwnmgzp9VkqSDUucmiJK",
  "key43": "2BzshepMF8bn6MgEDgWjwoYgubVnqiida9vDs8ztEu7R6grPyi12MoN1MR86NQnVeKHFCxDRKeq2hcB5PBsxJp54"
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

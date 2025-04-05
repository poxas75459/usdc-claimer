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
    "2fk6QVRnRATtf7iYmg5Uu4boHxf3guti6CP6zRocRf96sMgYz1LyptpSS5938v9b3ajyY5mQfb2gv8fk234uVbXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DW8j3AZZK4whYFQgJCuuNYGRvkK5qHRs4EbqpG5BGAiTdE7LN1pRAJg7DDif7fhFwi3S5N8mAUA7iaQb44UgiGb",
  "key1": "WAUm1W88gaayJ8vFW4NZEW14bKXfeRXGeHNeAxmN3M3ZXNCxuNGboCFAvvHZ8FJx4XjzQjCyWhCRdCcEvcjGAyW",
  "key2": "4WQDmvzyXLhRFN8iSuNiQSyWM9vgdTttAfxPWBookQyCQacAV61txphAChuBjAZXcrNug7bDiPot8vhMUV1UbWCj",
  "key3": "6Rahbir6xpqsqp6e4onhLdK4e2Qq1ZWvSF8i5T3F5yRFrNgKSG7Z1voV5FzesFH2CZ56ckLG4w3jXaLUmM7XQqV",
  "key4": "27u8eAAexWSxhjQvPaFGfCvusj9yAQHcGZdmttGpFTHAv5NX1x9wugja2ZihfxAvhEGaMEHrnHKe1x1HiVF44cTN",
  "key5": "3pAtTQBw73MNN2Vz9s6SYfNNCEjmiJettZBZvUGVhT2CcJVSmTwyTaB87qUVPJXjD5ob7ByWvtXqcACXdstgEfWd",
  "key6": "2AzLWZfgYL7NuRg4SCHFRQ5svTSLotaJmEkeqw6SYsdYTx33PAY7gqtsyDPHkowD5dWSEwjGvzScy4vrmLH3mKbg",
  "key7": "5Ag5FLYpHqSWypGy2ayzgngrKN5mcrhNyGrL9UmVyP5PVq3txVBFTLLmyTCbk6dQDEbnzssmvraNBg1Qv2GGRJuZ",
  "key8": "57dLzfodvrZKhbAr7Gi5LkoYhtGGXUq4XmBS18gN53VjjJLroiJYBF1zGP92MNZRNbN55yKPLEnhF53dqCXQsUxs",
  "key9": "EwBQsdH6BpGaTnxAkjQMThggEo75CHjJM8AecXSzFTF6NLeVUSzhTaheVtHEq1tVqT8Mr6u86Qu8vUZVLV8DWEv",
  "key10": "58tG3JkSh3nKkR2ZaZeGGykKKMXaUzFoH5iiVkQTvK7n3iRCeNkf7Uw48PYcTe2Cv8m7nPRGJvptDijGYsNaQUm4",
  "key11": "4ZGdVKWfA1eHMkooWTUWq6dG5NdfAHDrSDwPoxQgvKpdF5THaBgvz6AdJvMGBuSKncXRYCSofUnDaSod3kujw4BX",
  "key12": "2sy8zMxz2zuYFMN4LaWhwUBsfQnAniAiHq8gEJkP6mLYRdtyDPx9k4uSSRcfGwnurcnwdmvykojHPkhU5kMunqwY",
  "key13": "2LhWFxK2aFyPsJrV2Wv7UodVnoy8VYdRFfzj4UZ1V72kNi3znV22bfmHu7EJvSdaTokN3dzYWPtUEi6jtgcgwfUU",
  "key14": "z2AH7iUfgv5XuiF6jxKAQ4ofKjS6B8AdHAR3sd5dxewGgv8XyMAih1AVZi85oM5umJPop62ugUQeprwaYe4ws7h",
  "key15": "KFpYu5w66TGB1BSgNvK7w7jF36u2yAmEpabR5f6xcrnXbjrzTiPrv5JGqCiLQ35xZJyqjWfwXEJx5vXAYS3cwKD",
  "key16": "fddDgKUZjpJuw9UjS4tmyobZuWBp7jUcVB1bZud5UhmRAgwJ8dsyvAUNbjVRpdC6zKiaSAAXtUKaWZXFuQ6CoRk",
  "key17": "4BgLdavb3Q9rdBFtPGWDAz2AGHsV4KxmEqLY32JFvcYPhuzJymLEmaChjVozaB1U8w7gqSHNLjyPm5mnek2FPTbo",
  "key18": "4vw2RXvq2HmSo5uZv7FMvZvAQVLwJ5mAaXu7NEEMqTemQL6LbEikCFCCQkGrhqwMQ4dDEdLx4M1VKUF2Cbku2AV1",
  "key19": "4fVMkG6ad5mARBqwEtTGUQ8UAkaXeSJaywW1SDU3gYzMk4uVtUqx1oLE7jVfkLGA57Gbuk9TRKjahfsZr5TfP3Cu",
  "key20": "5csCmY5cWM7TztBJP4M5p9DZVx6cPxjEaG1JiACNPFg11Rxmtx4HGGPvfDG8zr1PhPBQYV9skm9sTEKw8fqD5VTp",
  "key21": "2v3kgj9eEc4ZPZizaZrFSiYotr2nihF6ZqkZH8gUQwK6ZHVoD1mgnEjte3trtw8GHwod13mVav7YWeKdRKqSs8fe",
  "key22": "4fzvUny5gSCB1Gsn9Li8KumcuQGPoLYW24nT8tTc2cWhGPV6KQ7xtGfWGfkDvLZs4cWq6uTGp5iZo6jb6CWnCT6B",
  "key23": "8frQq3EQvXHheudK9UjR6vedn65ACcUZ3bNK26HnXrh389gVNRAyofqxGiYf54pZUxysVshgBcaxFEnU7kqPKaV",
  "key24": "uAmz55RedahXMzWVWNcYw21SFLDiGiBDr2jH7RyKraUi8S37ezNWQtA19uGEWtC1eHymMbMt3fQ3HCo7DtumoQs",
  "key25": "4i9unpwg96gmnzbeYAm5Ak4CgmvitotAsKErvUAG2he7XqKeub3qpWvHFthxhhx2FtSBbLnWibMPJYyc1HTy4hfs",
  "key26": "5wvDmeUD81u1G78Kqk168isVs2CoW1mb7W9FAwe5NZamg1v2F4ZJtkp4u9AjCsSy8rGJEi6x5dqsP9o29ndy765e",
  "key27": "5CB7xqRJk3D7LN12hDq4ZMegkNm3BkoDWmkRxokWLcL5wM2VcpeY45trkpxu1bcLFLu6zsn1bgXAYjSJWemW7bUB",
  "key28": "53RCDa7WqiAAnsfML6DHkoTSLLoeqZsFJqiQnkna3qpMZf3mzuvybyzNiwDdQ48nqk52iuNyNXqFERDqG6DPsgtn",
  "key29": "5iSaXEd63jZMhhpxfjQCse95ui7weLvmz8y7BdAoia4htrWX4TaM4nAcWxdpWWNLNEpmKDABDEyjeHjsfQq6Gxeb",
  "key30": "4nYoQn93mfAzjSEcRoj6guQKE35XN6JLbxVH47qSVeVc19VqapPqQaxcX6w175YWMtca2LGGKw33GdY9LduFPwFV",
  "key31": "5WR2tQ9DjhpbB2ApWosXi42ZUbyubyqj41d1xY2d1hZT2Qe6s7rSRba6ixqDNXAHe31EKStJNn9uFqxZkHGmCLuJ",
  "key32": "3unVM17K4mcmZuQ6eb4FeeouRaA1iX5WYwEMRhiepW5zUyTyngQEoAEWhSaGHhpc2XxQyRxEAwwryaU8pWZssyNy",
  "key33": "3S7MAibLFZdsLNtiMJzjnpqUhQGKPcqUFnsyB4BTRcPqQSrYWf2udqULVGUyjjRjbb5ijC93bKGmFsLRwFiY8ugp",
  "key34": "46gTfUzxSfBqYSfvYtDRNe2eMr4XYLAviruaUYuSuaXaiXLL48uZEW2S84PPRj4tnZYcEfAtUGuqjk4pZVwgpUPD",
  "key35": "3CTMAtMrzrCTRJhGiLqyVqwmdzNjbsr3k6wMS1zV5VVuPSykX2foGyX5JPriSqQ2uh57KDGevz2eW673Xuys4ZjW"
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

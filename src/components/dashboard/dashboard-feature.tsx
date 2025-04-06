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
    "4bFcBGR4RkPkisUNEkLfrVpnd64iSJ1DzHFFqxeoWf65pP6FaMC5KtG6BBpZKNCXdzbmCdGW3Y5RGJMfXtEdBF8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJYGvXWJiJhbaS5ResbxzmSQ6FXgHdcd8Vd1FuSzaBd4tsSvKtvK9WFb1fvZYyBFCiVvWGbqUbNChe4iP7bzZU7",
  "key1": "4YvZ1bNosR6WZUnN6HE75tGdRKr3xRXCaevd6VHAVzQFjzRnVHH1AwfmJ45e3fBtb7XGQHiPcWcwa8rbX2xytx5",
  "key2": "4szSLeg9TXQzCSCgJeq7CAzZA6v1U2qyqJb5otdjf8yYT88cPztZZP1oNLjquPyEANRQfPaE94QZxnkW2g9NCoyt",
  "key3": "5Xy93Vgmk96rP1SK1oCdtYCyBtd23S5YV9vZwa4AfttCuzUcY9iHvMoaVsW8FXd1FffUuYkPZh2DETg8HYBHi2v2",
  "key4": "3o3R2BvTboYm1ALR9ANHW2CeKXoCJSWN4m5cPFKFSCZ793HpSAavQRAYzhDauFWLKxyVmAuW44cPTyHdfWL6znCa",
  "key5": "4Hx7dJR8yfVKmResG3kvog7aQeVUQSJngF1P4iyUAq5dejJ3GpE97Fk6C3WP7gk9ba1ifJ8THeRSj1k51hpCFSUF",
  "key6": "wm6QQBbQrbXRtengyZ8n4QJpF53VMio8UteUso2VLgy5Qg4niQrThuEwXqxz4hdi89D1kzZjCUXCFs5hiazkARF",
  "key7": "2RjHSWmW1FHU5ra9GWsnMELvYuQH8ZHN1pUha1ZD9MXCPvYWGAnZwHAQYNNY1GqyvBzC41ECt45HRAymZDbjRJaA",
  "key8": "ry172CTMaPWA5ti5EqDiaChFUu2ARpWaBxd4uzF6LssJ7zxkq5nV87ZHWVL7L6WeT8oXmm3sn3PkBAoMRfJ6xoi",
  "key9": "2AmMTzwjTLACsnh1ryRkcqwC8MjJiQXmPG1pungUdf3NpUqXsszmxcX7tiqzBaDWVCtGBtAeWMwYj6FvbKA691EV",
  "key10": "26GAbQC7GYgpjwJorxvziWGCncbi1c19VR6MNgjzdz3SV7FSjLRfuXYpuPG4TBp5q1MWSYwW8EuckqHN19bx4ZZW",
  "key11": "4vUFh3aYimumrHQnuB6uosFiFf5Ccbo3McEgPYebin3WYbDrwRuQWiH22Usejz1RKFBcfkJW77Xw6w6HrkwcaMTp",
  "key12": "4uWVnE6dAsUDyFnYb4a12DWKr3YRgobewyswiy2bYskJMQXfM3N5xUTvmdiCYyD5rMeMAFiuGWCGfRzTYxrto8PF",
  "key13": "kXdcwufHeewq8q3qb1AmXkgFLarmi7zfN29VUpsbc1HmvN9wRVG94E3HSz7EGuWcguMHmuM9f9zYF4RxZY3fax6",
  "key14": "2A8gw3rterTVrX7eUT1QXGJ8ZFAUiYs8Zf6YYQZV9BHicLkmTSYRPiiYJHaW11GposCHqieVe5yFsLYoKu9NJvqb",
  "key15": "CLQwAYR6ufAdEanCiyaqFC6wDkCPG9zyAZBPiAS95aznUvW9G5ywjq2vMKDSAYHbUUkYuKwBSEeK7xWFCy4srqG",
  "key16": "SHVyEAQx3NUmL2a6ChFCBWM3fzjEmXaGQihTqNjSjBn2SpW1Ty18Jfqb6ybYb81F4BKEbCvq9b5N2jzMbb4WQfW",
  "key17": "2VWy9miyuKos4uZkDZtob9BNLThAS8DPaEgqN8b9iTizfsPrPQv3DZx5fbXHki4XxzLnXqprPKrcCiiL6bXNtV3b",
  "key18": "4sWCwYMjVayzJg4UN6kXAsQZZU1TpNwD6xCjKxPhyTjF2gUVo9LBKb6ZmrHzQRoAaRSGHFFjZMxP515uGNfSDrZe",
  "key19": "61p9asLJVFPkMRiz2znknrf4BZek7wfpc1Y9tWhNs4iU3SMBqFrN1YyE63xoqBDAy6FwDzmNtsPKmsxMES4NcHJn",
  "key20": "4iVjnhGZe4Pttck5qA2eFcYfWa7aqpoqY2D4MF8y6AJ9sS9p8jH2TmNAAstDZqCNwXhRY2t7RSzNe6g3rrCdgGAy",
  "key21": "2Z6acev5pPWpQRiex8k4W9YRnW2zqovnmWJ2BWjbCXjYfrQZEvAwdecso57PL7iXShq4RKNX7pJN6PQX37gmP7D4",
  "key22": "3yJVMDhggtt6vSHt6QC88wKsLw9soQZFAYosKmX7jgUhGUq5Bju9unrdEpeBaTaLqkVJvB2ffXmfBxPJpmCqCuLi",
  "key23": "2xgFXcLbjcWgMKcbgp7TyxwQQvtCSsCxoRp8CqDLWL2X5UnoFZpWQ419DUi36S7NQztqfNKbRQH4tPMLzDqY1LbE",
  "key24": "2NRY8kvBbGznLuvMMdGf9oQ1LQLK4wBvaLdUW3ASGPJ6drgpNTVNuthnpxNrbMDqYqPVEKZCE7hPXXZFcSQvwtYe",
  "key25": "2VqYro2go4moLoYTbjNJAdtqU6f7bXF4FgftVPxEzMr2z2qYasDryFgVfXVTPMuKG7wEdAv87t8L6nc68b1Wu6WY",
  "key26": "2u1rYu9sMM51sWWsbf514NT6S3pzaCHKEu3tn3HuraBgJUww1snq6F8R7iNHS2LwXFM97KZXsH3QmBCMZKR6UnXa",
  "key27": "2gonSz6k5uLRhaKwXy8WSkzh7DyyzgJA91LHiqduXHkuywFRGpK3ZVxqjrDMvMp5QPRXTMiSDjPzMgTCNigKRMGx",
  "key28": "CYN6t2wcJpBVLinfpwjvKPJ9aCsAi3CcMmeQdnxEybDhR19qjDemKCARFq3tqaeX3QdYWHXDpiYvfCoqeSozomx",
  "key29": "2eZwaHbu7Roh54ACDSEtxZhd9HFGZXnDM5Lwy5Sy1VVtSb7J2ajSGBv4yjjjiU3718FAQfaMYs41ZhcVJXEWKREj",
  "key30": "Noyimof5FCfp72D384Q53snXmGDKgZKnT8ahxrMT6kQsC2bttVxQauG4Dk8gfXoyayy6EUVQxCN3SwPAzhgSptY",
  "key31": "5mAhR4xWhZuGx7dy3NDQjQSNAxjQEqXrXyZo8V8nvwoaFMDBtYtCvLo3B34DrHL9ibwvxP1b7MjaP1HYefifYVhm",
  "key32": "9CZzJYAPBsf1j3BRKhB8zHgY9UmSqC9Fc77EsKBGCn5rpxU1kv4giVFk5ZRE18nqSiPB35wERJESDsvvysmFdEs",
  "key33": "478JqCArJ3JwHGZTiJW94RzpbXRg822bk9cSYFQxgh3RhSPANPyJZz5ZiG1kZBjLLxGAhDYLb7UxvqEwXYC4SNQt",
  "key34": "2sL3heFYV9TkChWREJ5F2mrnFr5htTo8wb8Fcg1K7XbRQgmLaTAHycNJgoygJC4NZsZnyN2acMDyucHG2NpKEWDG",
  "key35": "24TzJdHjmB9Rxvf5u2WigEKEg8L4Ud3ipu9MhmkNr9F96YB8hP1UsBTrw3tP8dLtz7S8dCKfHGSr6WwNNV9vxRMh",
  "key36": "32QTdF4V2a6uU48Vm81LVrZvWAEXn2Zv5JWNFdY1MHPVwPiSqRiYBJ1h4sJpThdUMRUQf3B1ag9dq2FPQBM9au48",
  "key37": "jJrb154YcnXCghD8FZt3anhzrCPifLLyet6HchY7XovVZ67H1fR6p1UcW49ANsibxuHNyrW8Zo32URFScfqHRRt",
  "key38": "5pMDPRC6F3o87jXsVCurQj17ZJ3Cg6tiyFjUHyQ1XYNYqix3znCaGAynQjNtbby6wX9TcyjuwNZb7ogsSBDYFaBn",
  "key39": "2vzbzM4gJLocHjhqGRECJTDj4v1fSxfDsWoVjvt3uHcmNBPppdNdesB4LMVVEe5vgiaeAR221g6pzu2Cfi8p9teW",
  "key40": "5Yykpm7d8mvAj3HjqDknketv6fwJyVtGaGSqD6Djfusc81PSB13KiYx3TNzBM5Fw2zx1rsKDxDfMirYoeiGJ3i1Q",
  "key41": "4jrpzKwPcs39qMWfRtc8gZQfjuHhSFcZbucbvSzS4GAMSgK9tzSCF26CgoVjjRTm12fPm8qZi1KhCijjBDDPqvEG",
  "key42": "5KKuUTM1zaYdsf46W9h5meAm3XVb55VaobZy31v6Xanc3qRb6TmetfVDiGG4Wmb8Q4eVjXBoJGAeV2uJNefJGLag",
  "key43": "8ZbRjHJUz6Ex1oXdrrjMWVVsiLHh2o1iZDEqceSyeavY4Hw1ckp2z3QB29kiiVG5D8meSgdrdjvr85BzxSfgc1h",
  "key44": "Ttu9zXcNfr76NqTvS2d3VE2pkVibYvzNE2J5FzHFDATo6U5fPETodq1Jw3KhBhdWCtqLAnTYygCu5j4kvTkjMJo"
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

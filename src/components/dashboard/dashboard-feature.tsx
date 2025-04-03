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
    "3ntHvbeKkXY1Gj2av1uy2uTCDu5Z2Aym2icM7yS9hwxmaenP1mKcTsCj1NMhsmLu4JcAqW56BBmXemEZrSTDtwFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQ8PJ7xGC3foxF6abiG9FPpswZbCRnT7zpnHGhajeGHLwxd9Zs8hQJkZEuZvqGga66UZRMXfSTENwEaVeDjTKrE",
  "key1": "sqQTBN1EzfzMNBmjHPzgoPKqGLCp54aonMW4MomzFDHLcSFcGH4ynWgS8QFzH44kRGBHXLuMWj9yGwzYSjxgrEz",
  "key2": "357MMVsHxKV7q3C6KmfFjRN3GPEsntzBYerBe7zcxtrCuEskCfCwGqkPi99bBCMWtnkkkc93jWMEg765WXe6KUnr",
  "key3": "uGVwwasyCiHBMjyyfKj5aEorp76pd6mQC5SVhnppMnGPAeUcTn7KPUhNsorBBYtj1r2co33NpyeUsCXutvGZkfq",
  "key4": "3gWnSyJYncVVTdPDQjFbcHFALeqJ8BsA6j3qhS6YdZC4jVLftEB12raZQbK7fuEgMoE3mkwYRVHvg95Hs7jkwUsi",
  "key5": "2SuooAUqtxPR5jcbScrqdgvBbK4gm48VijBqGYhhJNBdGNUaEYheuvj1JmNMaZR7EsASiWEAj8kkpDsRoYEFdhx9",
  "key6": "3VLLEt3JP8nz6CYTFjzvnRe6TaXYpSdxLkGCHRJpFyAmcfKigtGrDNMuodwmvr6uPSspdZhVEoktBz2C4ZJt16F7",
  "key7": "D1kjTZVWr9q8HR2eiChFEWEEicWBc6TWqYu1XDgKusaT1Bo2NTb48xsQdYpaL8LMwNTaWmuyAuomBSm3RjyD8UY",
  "key8": "2HRjdUuDLmBUgi8wX9tW5EWf4ZN4ZHWQ5m6StYcQPa9sEmiYbTppks37QgMZci6njHDiBDcnxcDpuTur4ZghBmp1",
  "key9": "57a6JUvDofdo4Sj1mUkqQiqDiGv4ZurdepZYHRE7SLx3vjJfAumxb3Vpe24yF6tXYMGeUkFdLKpC7bPuGM4VxGb9",
  "key10": "CDLfrFqo7Y1teS29jn6NgN4hLJenaGfg7q7qUKLueYhuaVNm84wLTQ6mAbq9ygyqpm5ZW44gm7VYbYopoKAq7pN",
  "key11": "eEAPD4r9AhHQWutXuQpB92B1mPRvdAa5sxZDz84Sttxphfwtd6Lbx3EpJp2KdDQqWUZTqoS8q2YP1WMiGuuwJov",
  "key12": "3W26TFE3Y2jquq7YygB1hER2Bj9X5eAHQ5cvwKSiaRpdHkPN7L5gN2MACdLvuZLUvABnZQHrbAKRfsJeRyFFcFXM",
  "key13": "3sEmGXyKWtZpHPTVJRDxqYmrtmXizvewKURhsXHm1k3ZADdKiRTEJaWGeFQvWvTXUA62HXukPk8o1ErdLjYtayZn",
  "key14": "3EpyRwsRvqz1jns2oFRykyZdm2nc2LticrXswXaYQBUin6tehYnrCa2GubHUKyDpxW3so5pM5dR4yQWDN4WR9boK",
  "key15": "3YmYCD5J4macX3RLjKcWrrS5eJY239464ggPJ38sog4xREY7qacekrJTqEvX7d4sKxyzLNsjGhK9QTrnL3z9XgcW",
  "key16": "3sy6GVt3QhmTkwV27yHTjePz8eptioHFLbHExWd6f5Pp66jMw1L5kmqNBxWENs3ybgUjcdkoJjjRkDt5i6uvjQ37",
  "key17": "4DQDSa9n2VxFHTtUdem7vdUdDECzhDCttS9E9SZ1k9SjzcqPu5qSLcQigYGA2zsn2dFqf2xLtjDnceWZ5gdsKrHE",
  "key18": "sssE7cMvJ9hw2A9gPQiiiDLLq4PPG5Luwq8ArgtqgJgrYWfxm8UwRoWoGmYApXHSNYJbYwhbzkobQt9UM5yMQDP",
  "key19": "8GnATs1ttrWhdHg5W6rvJFTp1nnqEvLyB5EMqGskqqzzD6NP9m5MDf4jvHK3MdZVLYXZFqXrXFwQaMRSuQWACQP",
  "key20": "3NXasCZL22Au5FCs1f9chTGJWfLyVy8XvkcrKMNGdB3rgvwjRP8q9CmtR8R8Pgs8Ze7QT2ZmUKrufGU3omiwjS8M",
  "key21": "4x4TCpFfDPrkiZWRBcXGefjjgmg7j13mSEDLp6eMNU9EnB5YPom5wxKKN9JMU97dTdD8DHyisjCcCGV1Uj3XqmJj",
  "key22": "3NnJCyiymusS5gLS4NyaLeVrbDgShd7mYhkRbRuA7huWXg3sBKaQj6XhNR2e3CSC4RkWEyxrvZTDt6SU6m5Atcbu",
  "key23": "4vZMU6T1h8948A6qz76R34mQ6NzcS1WqfNSMTxVi6xzHamELqPDJXLM1oV795LupHuCYjKGd9QSADQMjh1srjeeD",
  "key24": "3cTTvz6cpiAtfcWKkXRUUYkw73UjxvtnDoq6Ku681TCLX2Bf1mq8mzHY2vfnsiDuXNE1zgF7b626XS37P8EGjxYm",
  "key25": "3rPKieNsL7bEZcESeirmQsqsNeVhuEH9ta3U63c5fgnxgqRUMtMdcvELUqeeCpEmQKEywoArTDKSmG4iKrVrtYn2",
  "key26": "LBvNhYuSS27sRYRewk2B9HPFTPQo4YwPNg83CZYa8h4XjQMqiEKxLumo38yNQQhUVhVScxjj97Gbf9vq4CBqAv4",
  "key27": "GYTcwiuPBgxr5zR6S6AoQdi1wohSuiuE1dYUkhXd8HpncHoCqi6XncSU945jsaCEAsGi87coAntFFRPNZziaRGx",
  "key28": "3cFdCEQEUEgBKAfXZAMYY6Q56MsGTQjGFfRLsyxBLeyRxxXLUAXDCDVrHDMaX1Y7KiXeG3CpHmwZn4pGFqvs7zoD",
  "key29": "3ordk47pJrB6fTPYwUdPk2Sn2kBe1UcakQ4pNAszHjkHs7aoGVhubprP1jBBWoCuZ3zo3zu1HvgreAcbdJQi21iG",
  "key30": "zx1Yvz5LnncLnUWB89Gqri4e85jgW9ibJqY79Z9BwneBZ5rXYdcWip3mAb3Hqw78qeDJS1JZa91Ss8Qj5F2DdcW",
  "key31": "5X2ApVmX4BPsYdk4Nxd6iE8SScCcL142TgGQKUhZrLjxq5pUT814S7AHCTfdP5sM7mATFiwAjsMyLYmp2DNimJq7",
  "key32": "4n1ZiUVuSBosYKNqeEVc7QRHxnzsWpe7Y9n2QLeZg9VP8wXpJNunDaC9NtyYGAocRaHeZUYqsJs9Ybzda3fJMnk",
  "key33": "etQnMbBaEL239BZbgb5Grsdz5AGeyM4g5LKbZvGQcMQUuPbTR8TKA6EASZL1yLyLiiGENJwAD2nj4Z4ZEhQaTc7",
  "key34": "5WYNEKzGqH8kXkvkXHiBQDMskoeAupJeVwgkpaVn2Uv1X4c6gHDxRXEHhb1PuERWE5sx18ZBrPopRBsTJptoF5TP",
  "key35": "5bn9iEuURM53DieH1njuEx6LEUenWximENmdT8wDhS5fuAfrVbYtN4MdPJCfHqrEoDjAgMygdGasEncsz4GH8hbF",
  "key36": "54Sdg9dxADPNyN4xgVfnejBRyb3LnyrN9sBhk2nk1adMYh6gvczHM4EzjRQn2s2rBqfJZRHB4YdPuNCNY4cWK3E",
  "key37": "4c2CBqLGYdbSJHQWcbEbSofZ1ZmWn9nRtHGLETJj85TkEscz6HbvkJoEYpj21eLC9NBBN4paFnC78FmHRrFkSDiu",
  "key38": "5dEG95q3TDiPSSQk1Z9RJwD4qhW7QbYXYFoZhgAHos1am4UDCZis2VGmwqemvL7bWeX3xgF1rXwPdKZSFFFV67wg",
  "key39": "s1KncgLT8fdbJqr9CasmVzgTW7f6TVrGeYHLowBy3mzzRtR3eBPY2P6HqKVCHyP9Dmo32zUt288cM5NdpBA9ZAQ",
  "key40": "2fXeauYDpnn1pjDo9uuKAYZNBexLRhgBSar6zsDimF1FWzieLZA8Rm9peMN7oQmcraDUmiD7Gr18n7boLYttRKKR",
  "key41": "4eWF5DwDMeSihUtHhvzUY3GFcHRaM22bsu8DjakEHiJwYodQ4xkYmYV95SG7F4WaYnJLSVpEpzS2ocehtxKJd4T8",
  "key42": "225FjnaLePLFprULiQxnTRQJuNG1tXQ42SiTbFC6o4mA2JBcAaqcU5a6i27WpT9ND6x9hTjmXScTKgTwYU2JPNoi",
  "key43": "27SRJQPiY9GRJTJ2ffK4akLHgz8sxuaQmE7d9fX553LEcsyFyzzjb9QkuZ5JAxs4YD1zvgGpS3YeHvT6xntuQCmX",
  "key44": "3W1j9StC14dSaKdrUYevvzHWe6qjdqZE5gtoShzpY8j7JPwr7h58ctvQ8DiWRCaQ5HPtPtsAN9jBAUvTcZDWfySB"
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

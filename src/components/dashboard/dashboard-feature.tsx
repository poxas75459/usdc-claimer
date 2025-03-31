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
    "FLfLjkd8Gr3xLWu8WWEKPeLMsiPMYPqGsXzP65RHJB51w1ogGGyBjTeWBrFkfdjiys5WzXPhpYJ67i6iWiDKv5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QcxjD8KZNPEuFswp8tP27KMUp2zJ2eHgVv4564aMkWua5NMV5wymWUc6URoYatVdfbcXAYpYnfxEoPytU6o1kJ",
  "key1": "CNz4q9NUMHwAmABNaMdfQfC9XEGvtxc2H8gdVrrHpaojGezfbgPa64MzAoGMwETYPSAx3tnFJXE3dbZFJpVct2h",
  "key2": "498tLR15yG9ie9RyTa5Su7zXFoTYusHe5PvNTetm7cb5fXFuDCEZmWuDGpPBjm3Uearw2v5AUSDxM3nntR8TMDa5",
  "key3": "4HoZw84RMWA6CWLhN6tsKn4zzihPswpWoHnEHanNuSnPpCZDpZb6jGbA1Y9FzNrn9GtVNtuyRRrkyWKQ6hh7cG3R",
  "key4": "4dYbARLdLrefwBQakPDEmCrfQor63EgFK5YsSh6k5wCGAgCL2DnDxAEtYzFwA3trwyfEMszYnA6TqpRjwVRVHRL4",
  "key5": "4uG4AfjpN9QhPdrQWgGhbgjp8k2ma66mafEEf4R7PpVA4r3SPGViFcei91YuwjJ61B65VhFUDXdYLLkrKtC8FcBX",
  "key6": "zRtkbgC1yDW8G9nXciRf2oFkfooLMM1PqLU5s6u4HyFYHkKg3LfzSnHdNKMvKj7ewHTj2QQEFiMybE9XQc2euTh",
  "key7": "3yWgxjq7XE52GdED7WrBPsERnS31o1yYCGfTgfAX4wjJiwkHksxEHWPTrMS6v695MMqt8Fw4S8wir3oHSCpJ8Fce",
  "key8": "59vU5fFVbqXSpw2qM242P3TMtrn2GYThBN7TPeq3iqqmZKgtLLU58KkMUc75i3eKyLULF5WpU4aHRMsjdZsqk1x3",
  "key9": "DsmDeEh1T7hgzqkCPxCkc7ceQt5xXuoQMumg37PVggtvv4SKB4TMYFyCEHpKJRfHSvrfNohNqzDTcBFguuTCcia",
  "key10": "4J473L7D9cVxYJicJgPDnXu8JfydaDK9c1q3XJjbLFrTbAQ1Fh13fxmJm8YifVNePYHat93pMNtAxnJEHMEprXGu",
  "key11": "22fCqhqb2PQMwLUNtosxkPpviRPNy6YntWUVs17ikWddLk33AErEQRAdUR6PxddH77gEtToKvYAyt5bC4sWrjjxK",
  "key12": "5wmD7SrCACx8U66zNTsmqU4rYzovKwoYiFrTmJHWs8fqMYPWvgZ4kw8zLXLFhDuQDTrAq7mbCb1vDNuGavfUfJHH",
  "key13": "2Bq4PzB2KeXdohUMmikbsx1F7uwMENEaK4ep66oXSRD5naE53GF92txX2EwfiuMi5ympnxBM1PZnhce6zBudoYRd",
  "key14": "33Vpf5nAv1NnxfSdn2CULdfvkASyrXsdNjKDGgqLUv7rttLbpJtZkLRDWNpUf4Zg1dYmnUd76zqnxf6MfMkkhH5c",
  "key15": "2gzcfafvFv8B4rGbEapvA8aCCFaBPXDRSS1iiuTqHoviSxtezcNJypAonuDJs7sfgwNcWJgbcWFLuYARC71Vq6DA",
  "key16": "iT55q5kUfXS1tju2vSsVu7QZXz7wogSAv9uyGPGL78ksrgdoSan3WdNBkPnp2PD5F9RJ591xJNjVv1z5CNkLCRS",
  "key17": "35BaHBVbLxxFTJ5p23EVdiHT1JMCWERNum5mVtUHAjDzXpLuYyTruYiKxPDZ4JjCekUvdz3eVJfEM8MhznUkFYpr",
  "key18": "3a28qLHKV7efPJok6aURo4m72aLTxLTLPSNKaqXYyH1yREwB3xMSti62rdApDjbabTkgG9DnwRsbse7gp5F1uRmM",
  "key19": "61fQBQurtfgUbwDw5nrvsrSz6zQ7kfPRzzuNHuCYnGKL7z4jgzkTiuyBxMLauZccRK2XRUryj4jCF4zZqGkgQC3J",
  "key20": "4fvJBkMsGDjuAqGShgcZiZjYJoDtpXjCZ5PEAU369TXr7sCAd3GarZRk5MM15EzjY4mRPdK6Aza7CueAefyh1AxC",
  "key21": "5y25cWbdSk9MDEpTtqXX4r17PyVRs2eDfT9RxxKcFJPArjW3MLkp15xsKHPpHK2ZFHHvy2gt3A7rkrgiSS4oaKWT",
  "key22": "67axpQNsWaEhh5h2v9PtoNMQtWc4xYUrK9KWfLVF1cuNdBsggUBvzVdrUCvEhU4WBCeRypVwriV9v6rps66GYLBi",
  "key23": "5HSMvDQRrxoK6e6rrzXC5xFrma6f6xkTc17WyaeWcL6dJRfYAu1V3TefUtByFaZ68vfPkKexQmCjoyn9D1SbWt7F",
  "key24": "5Qb6GW7y6YBgSsLbBNFKwBMCJMKT8D1HiFABigJSrRq6Kg8WiCUeqfRRMXrK1Hb2DE7nTAXpk6Rskc1JJtoiQ49s",
  "key25": "4KothASbGTg7fCDcSh9qCbw2DpvvMopXtPmUAmB4CzTS1yuJ3KX4d39wdQiZmU9wQbKSwmDxLCUDXeS8jRXujKfV",
  "key26": "45UiFDRZpaHstnxCVS7LwZuTWovFctDEGT9S8UoXtyVh43NBBYy8DBSBBRBhS8CsEAjbgDE8WAus3AukuqnjjJPd",
  "key27": "4R2y6CahN68SH59KXhUTVFUvmTBdmoosn9tWimrY1P3SmH35LCKGQuVqK3eGcHx6WpjVdR6UD3UzgQLh7Zaou6zP",
  "key28": "F1ar9bq2S4SCauvu52jgbD8r5BCJq6TdjxVPk7NyaUukESv7dwzrkGvAc3WNkyDUwmyYwwjaLbuqrGsyqnxjtjy",
  "key29": "54QDAUtuez4GhhtFsYcGvypHYprr5u7DR8joFyVtsB4zRdDqLZzdmcyoWxkMgXXgapDYQrjKRa4FcjSQb5PbKA9z"
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

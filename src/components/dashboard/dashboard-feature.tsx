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
    "keFiSEYzbqbbzCKrDq6LsGs3oRnPBTuTVcyLnbsM12vtybHcGemWTytrzX6hncPgx7M6i8Wvx93fVshMoyoxcpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M2uQLVtnBQdAYayAExJAFmHBDVEpHAbkTHGH2ARF11t3SLQMDmucQFzVRA2dQB9DJWGrdAUWjfFtyTSUNkB7gJh",
  "key1": "2c67mdJoGqxFGyPSpah5MHddrSisci2qiKnWDGswD5gH6GJHT9ZiuqJSh9fzvfhChJ5YpU7M4SRrC8mtox61gP42",
  "key2": "3P38KLxd6LqSZ55Tidb3ahRY5Txp7qbo2gh98MEqWLQPSm15j2sWWEmMZsgEW88LPis4eyTjNqFmKgHDvf5zt3vC",
  "key3": "3H5atvvaJitgrLtLRgvuuyax4JJykwby5fHRiUUn4svCUDn97fTkSJEa4MP4hWpLuxHwTYMMWiRyZD4U594hxkbB",
  "key4": "2DtmXUrtcR4QBBB4K7EkobEcEmwAtUrW7PGQfdGx5FC2JBRbNkaQmGUXsSosgsZryQApg1bLKdVvRj42ptvhXsjb",
  "key5": "21gV5uRehEmux8HxNGKQVbw9FypPwpEhxXUGRH6Vst2z21oeqwsULuqSSCbTR44GJZdaJB6gqSi2pibj5WJxdEPL",
  "key6": "3vai5QVNjAkD1KN31xjxLMHT49duSrDnKpk33ny1zkr7TFiX8P2qsfUCfTNXXZqRd7SF2jFvznh7VGHaCsCr6LUj",
  "key7": "pYZMuUYYhA18EVxvmpAV7PjJnGJgzaWWecg9LhagDi5jH5Si9LQndh6N9QFpdqz3Ph7onExaXB4AE4VnKG6xas4",
  "key8": "5vS4CYocY6s2i8rEwp59hEqXs2WJXGsB1hCPF7Vc6M5X1MuakBQrKa31qZaueDU1ZBrFE81tG3B9tLkvGVauzTdc",
  "key9": "3Gu3gxnBJiUgPL7TMYQ6tKnRXZVFkDBEafDHs3g6C9bsAgeL1UoHFdueGVccCUfaFWCCjRfwZGbCkgsGJeYJPtC1",
  "key10": "3zsfPu7F1mqf9awJ5dAZbTXREHKMGs8ZJXo18zGwqwNRuSNMarLBe2V1B688X5VTsrsZG9cYcqCMrnfoUwyW2Qko",
  "key11": "3iAcjXfeEYaVqDmCsdH4XVpL8x1qAg5FWDrMF5RFSKgvYq3iJ3x3yARZMHmX32yHbJdEZKnosHZ56ZaGfFrKhgsP",
  "key12": "4J24iQx5JvLJj215XHazV8cdHV3WAfPoC3WjQH3qR9Njq5hoB39pijxngiWogFQT9QSwS9mP2yKKGGQEjHTPk2T8",
  "key13": "4VMxc4iH4RkTe4T6z1bx5hgnbcA5WjMVLFaDJ9MiuTTirsrh9FzCuHTFbDWfn5FMUsLKzJPKtweTstk3RK1aEc2U",
  "key14": "zftfSJCbFF4caU6thZa1ZV3Pao1QKwjHFnLFFGXzRkPNWDJhihEHHtW9kLKYzGFu3UYrFaHBryfx7TgKZrnBqKq",
  "key15": "5kWMmkTVASHCMFLoTWBMNDxRF9r3axQzvstVAcVpQP3uu1AW6GWDnMASdrfddTRXyk4CGXrKHfh5bmzzJnHZFryp",
  "key16": "5FcffKLhTaavz5xhvsttjw39CpoF6yk2v3E4ropk6W8JZnXdTHVHNFm3m93A5YJMBTtaUz31JCNRJXoVsTERigUK",
  "key17": "5ttLAehSrGnFdWXXqZm7dyzR8YSh8uHYNMQCKH98wjbLphHLcMpiWYM3KgW9z5vcVjTPqXCferuGDMAct1qL1oJv",
  "key18": "4wdS6NBqiR4koW9CU7k5bF4KZj94xkGQ6BopMpna12xZ8EicGqCmkAv8JaTuNg23xP48d77cGDCaeyZXb6MFHr85",
  "key19": "2SZe4wyohD69uKWm8avszZUDjV1srogJp37z8f17qoYeEuwMLhAy1d2XAf2p3khLvan8b9LC2YKyHWhSybBerZBF",
  "key20": "3SpkyM1awwPyhadHyG4RLESD85fXSbVYWUNZ96QzzGBiiigkydEfvvSG5FqaRJY4ecMXNcGvhW9FKA8cmqp7qtug",
  "key21": "57S2itLLiGjKqNTjFoFXgksckaXXceQTXnNGv3jTvVASgBAGPjHrXBE92spGSrG4GB2yt6Bbymrpde4jfvbBSiwe",
  "key22": "5ef1J3BdfGsD43JfUdCZXoiorvb4ETxpETTL35cZreXLPM4yrRpMSD5KzHqByxjpKAgH381yLFsfNTNTVJ87dds4",
  "key23": "UQnHDephG7D3CqWQTncu1gxFfVRCZqP2KRUvtThMHU7GV8fWB7RotF5ADPa1XtWvxtLNLggCG81Dh9RBvGrvEnH",
  "key24": "3rdrWj7VBPdAUpWW9CKaAXc2f3CUd5AuWmPqDKZ6Wsz26jpWXzmAfdKnKvoTj6FpaZosciLNtw7U7CniP3QFic9X",
  "key25": "3RgQgWt3wZNAitxSyCHKYLxq8LFB2sjsEooSc5F84P9KVEY9zdgE8gYos95Huy7UfWHbFiEpgbC2L91Zdckmaue9",
  "key26": "2UGgmvVCnQiFdhkngAZb5Avfe8u5TwZQ51Gnt63bLxEYVFcADMeVSEpzRyPy5H5CRk5RG2vV1wKgNQGCLQghyH6Y",
  "key27": "4t8gr3bMqWByviu2jLfWBRWg6ydEJNriXRDpGySzjza4uLwjvJ1fz5udwPPPXLpwKTK9BUoNV6cw3yCvfnAVdmfp",
  "key28": "gjN1TKt6zn4Cey8msix3E53vpSyLDzBH5xAn8jYeo6xTYGpRJbqiW4jA9S7q8MZb6fPgRkcjhCJyRZDxGFuyEwk",
  "key29": "3QtvdFTEz8YUhMACoMRidz714TWgrXJFy6mCiveACzuazMWk9QCS73DYYzrBjMAuMgbZ1X7xgBdWuimg4qEeCygF",
  "key30": "21rHmMABfjKrF9xqTGK6L67Rj8G2HoEh5CrWWEwFAhykqcDfjQrnaznG9tAJYdgFXu4FbksdpRWfVF2AT8gRzTxe"
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

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
    "GYHccSNucGxM1qcDcLnQX3fP1Qx5sZyBAKT7MGCrUUsSCEuHGVeyayQaHNqwuqZMxPTyRBKfDGbFAzpEV2V3qoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67YTTBUcTfeUsEBpAFxGsPW7aNbXfPoqBun6KGTCuMxo6YZVSizNDdSw2PsQQscSbCGXRtni7wBxURwFfTZPhSR2",
  "key1": "2rehYrRkocuGt9USviThAGVcD4bVZgsvVMm9i1GW3rar82VN4Pc3ciHzyK7YsXF563ZqzPi9MMSqGt6Pa8rBQUUf",
  "key2": "t7Z3Yhgh8rcASL5wxmZ8Uewwx2qKjTLfUaMGfsGzotC3Fuwja5k1kV7VjLpLupasNavdm6akB4ZeXETcKe6ufvh",
  "key3": "3V5BjaNqfUpwi23jsmjQcM7uDjn9aSHQvECg8DpKoiTPrU1LB8CAwHX8pZ1BTQiNdzGYfGEBCm9SGfwNZbEyC6pk",
  "key4": "3jQu4zUDtZYHhqooz7Ud5qW7oXW9NBVfUH4Kh3XUZTw9z8CRK4H2CXJyK9mRqLpjr6rwTXUgjXbeM3jSU7HAkZkW",
  "key5": "4DMvCkQ5dcQbN3gHe9mGndXPBqKrM6oTaPFnVMk53556XZEAwRgoXMhNjJhPAe5RnrCdZymDN8xktPK9U8Wi2uo6",
  "key6": "2nWuwjvLqCPZdg2yCcPS2thgfhaKaxN9hVKDygLsSFyz9NNRwBJq16VSJncWrCXiDomZFUbqmFwTFTrX7rRnx5ve",
  "key7": "2K7DRTBchpAEkqA62CePpueVB1bBE9n8dyChGnziwtKeWNRME6x2q5fEpH7Gx6vCxBJsVTznPd4bPazo6S9vQgcV",
  "key8": "4WD2zEHbK5WSrrU7LVejEQk7SMm4m18fFgcKT8MVb1NJfQTpqmGXPRC61ReGYcWXL1LXMU9VLqg54yuVaVmRtqAQ",
  "key9": "54cWFE2eyLoYGr8UsSpZ1RfBxu2QRLf1ZutAdXbucKLtgNzCM9vCfgS7kpziSATj75h5xks26mPyPqrQiURAeUsU",
  "key10": "Ypi19afPVYzmRSduBkXkcFp1tTp7utzYo4bLF2grH8L2f5iKELRJN5ghDK1h9b33y1ubtgniQFkiV64bncQRt5A",
  "key11": "28P5WvSm2LLtxf32SU4f6ubynbjXUUHUWyi6VE39pSGdsnDcMCLcowNWvdqbpqi6QHKpEgsANt7BJU9nHiVsVCwG",
  "key12": "57buMieRq543sbSX8vrRuiCi7t4p4TBF2bxrFTSjq4fHtW4ySZ3vVBgJbEgi7AidXzhRYzYWCripX2u7bDccqwGr",
  "key13": "3Cf8fKboAhZS3Xthjp4WTNfcDmAkWbdUQac3hGpWzjtrr4fmJnRorXPTccNU8bGcewt7G3URJzYby7STdKEekzRa",
  "key14": "576FEuytK69ggGw8Xdp2UGVre5h9aXW66h2svLP1jFVwCguiVq5wDJgkBRNLQDeEfbLHoseH5nXFVEWiwCRCMRso",
  "key15": "DnQu4wxgueEbYYTLS3Wf2gh4sKaLSioypioC2eu7KibbcnVMCYj1hAHfReDXmqzDFzR4QnyZU5Wh2dUhdVSajqd",
  "key16": "2atjExo1t1Z31CAX2UvJBCaen7ms6wtZUamp7n9TG4gtTToxmYgye5ZoxDmc9dXt4Bw4ioPXNouJVo4TfKg4kzJ7",
  "key17": "5vxBrZpNodByP5cXtH1sdCDUU57ZZcx2JEMW6VKsNXtJPJ5ZHi2uY2QnNrvDNNRb4Bge8YZ3EPDB6aT7RD54QDW7",
  "key18": "4SQx4uRoNuDjNyFzL6sUDao6jgPY31VouJPGYk2cMLSUzKSLcP6cJSnSLkbFWxUgaH9tyCJXxtbp1EbULiqbCB5H",
  "key19": "5LTjenFp2vsh2DsCN8v5pkz6bqcsZvxuSxkrVrYW9boFPKpAz1T8J3rhwCByQniq37i3kw8SWkFskg7NG3VdDdtm",
  "key20": "3yfVEiYcmQ9qygDKmKv58J7Jmixzz3288rpNriRsvsdMSqqzaiJPFXrcFXcDhee5dujXgqrbpa2VeqwuZ8Q4Hgxu",
  "key21": "52F2krgDdx2V3mRh5yxrvrnQLxQgxpsVDPAxVxUDShxvbyxaR227M4P1qDmbYSv2oCscaBTQEnEnihWKqCFWfgDt",
  "key22": "3ZvRawgTrFNJZSMQKUjPYb8LcGvCAq837EW7yWEp5CbDiiUWvSrPZ6dsbHS2FnDhFkjh2mZgs2h91h44dJptAAr2",
  "key23": "3yALV7aaro7kTbdQ4pBY1945GBThuRHmSFwhq3ZnvHU4mH57qftqT3pdTSyQaEdaCUGxxo5QfasriRdFQS9Vz5KX",
  "key24": "3qGoErGzfvabiNYDSNPWGm5STZk1zeAYKFqnBd3w8LSL4GCWxApuPrdvoueDtjumptNA2S7hzYvyQqm3BxZA6CRQ",
  "key25": "4Z6yrvyp5MbPhJJKb4GBWLZ4wuoUs8fWX3wFaEatMJBE6qfNe4hdGCCP2E81JXizbccd5zDu2QcCUQursC33oj4X",
  "key26": "SqHnQiwGwZ9vMWspYTfwu25zQ1ZTRUG9wrpqA3HRU1PTWtAsr1kJ5vBEeegkM88PyDWSsYk7ncMGG5v7igF9vga",
  "key27": "3HFjBU5x6sdHJ97oRZNBQEtjVYgvbKUhraFMuYRr4qHwG4QsZeeXYB9qEkSBZnnQu5rfiCnQLaN7P9AEiHwwtbwh",
  "key28": "4YwckSfsFDvziSo18CPhruUDieWgotBhTV1xohBpau5xhHF457x66Tc4jc4ohyNFvRJPHwCkPFYVKuYwgPtgpPUB",
  "key29": "3NfydtRW49MmrSJcitnmwX45rYGnVGC1UY4qm9Aj18SB8reoTzL2kb4sCEGydc5f7ahWyfjDTqwbbJ8tjTXG6rmU",
  "key30": "4zJx6vHJEaa4FaqDMe5FpDeedEqtXSZvmsFQ2SoqzrvpwtSN41ENUQSPAic7j4yB4NTKpermhNE15p8eRia58DMw",
  "key31": "5YPLevEad3DXxoz9SrDoKNsh3hQ66DYE5yN2rXpDeC6CTu5XosTRWhVG3hashT39YJ3DVvnGT8BgFA4WAdvgVTsx",
  "key32": "52PFDMzYaXSatwoyrfhAxPvBYzxkYt9wSNuumX8iGrTqdg5GMTsXc8mHKNL32tdebT7pTvDXyZTTbBHuQMHpADgA",
  "key33": "589GWDH58c2WxFX8pPgDTSvh5VJxe51GZuXTs243sb5kcYfkHQaCAd1VAXedUcTuZksFnVqwyU99emkzAsNFrRoW",
  "key34": "5St4c4fjyDiVDDY8zKcMn5s3Ms5vhyttzkhfEdt4NTbqD25sMwSnwm8tWdKnUSbZ1Ey5L5P32zeTjLSQDHzVwvtM",
  "key35": "3VKyuPcZAqt99ADJmMThaYu3kFE7L8YC14c73REhj23N9gWfx5B63DnPBUoW1FA3iFBDBQztgKWZpzCwYSoJmJaD"
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

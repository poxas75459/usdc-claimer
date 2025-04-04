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
    "wwmDwTu1nki2zfQux2Kzu4yD5rwhaQC698X7HCbECiXzwUVhHoXxMNxERZBesuZBR63BXgS5j5rooGgEwh1J1QM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5U218eKUdUp4VyBhNPyevSYKnQeHxjmGgkbiueF732XXQHVcMjgvxj68grWw8g5RKa4iypWutiryo1RXscXA66",
  "key1": "2VybQjHrTCz6ZKF7V9QHvUzWqc1GbwLxsqbk5pcZcvQqaVP32WoSGFa4JVGKYo82Lv8z7U5pUtVRU98rDnqaeAJa",
  "key2": "58vZ2DtbtFyqnQYsX5W26mTUFA7vjkHqbzMQpHqct5s8Syou9ccDdNeH34rJD8176CnrPaFhe12L2jZEvqNfzr5K",
  "key3": "543Zmp3ptkj9JdGkxybHxby2LDqgPBPHxkHLsq1bT7GGA3LycdvEbXH1K666C1yAhB4eHVzb9oBu1GzyNmU1VJbV",
  "key4": "3PtH1kW2dfb8sRm611aJncYkf8nHSAagQjNTL3u8eKZbZQbU1DjwLzDMEK9e6exKKnNggiyPAzuRRteNKuTKwZih",
  "key5": "YzQw34m9Yffe5S2Nho4zyQQKk62FDoYjNwT1Wzt2vRM9bUSPq1M2cwePcJitR4oFZVTijAj4r3xJ5aqg5y9jJBW",
  "key6": "pJuLMUCA9cG5wUPCdwDXHXhSN8JGH3FNsnbN2b7N9GdtApnvFoQALuVPmSTzCUV3hDVc4ikNRJfzsXgqucrmk9A",
  "key7": "5dD9k9ZFGw7n8QrKPrH6TtcEitNCC8m2ziaFXY2ihcm2U8fmXPuuMK6EnaK84B32XKfyDhKJ9z8GGpbnUCjrqkjd",
  "key8": "dL42xXUNbrmp24SX1Px63uzeFMNcGf2LCiKpHgUHbefP4m8j51d74RWbpFLAMYLXVhg5d5tgqZ9PKV2Hs8Vvn2b",
  "key9": "3pP5SFakZob1Gwk2G8Tm6bUGNttb33GxW5PvtikTeAdBKSZTBJDrXzX3wowFxvtu4dijGkrifNkqyhyX2hgvkPnf",
  "key10": "5hLRJ5PJVC4rgTgCtx3PCQzbfQkfvj24EpomZ3ij1Lt1MCcdXDk9yrFww3DPmP8fqymPUvw8G3KDXCPv74nMNN5m",
  "key11": "RVC5vnxDYcNJo8zzAq7DYMde3mnJsNBgJZT5ydRS2u9YwviAeRig8EihWttMxibbbc27S933qaKeRAer4SJ2u7T",
  "key12": "4a8DMUGvrv2QBEQPgtdvpqR6Fk6gtH4MfTYgPq4uAfjM68vBND6dax4iUcbKgbh2Fvvx9CCQRySXvueeqsARr6Mo",
  "key13": "3k1THT49HFLEDFTHwXW9UQCjS8mN2FFKQWas4J95u7jU8yQTu6BcaHhweJSDpSjpKZzjULgKwzEZhxvYtgyLUGjE",
  "key14": "mwX1vZfrdqoSqWtSbzABiforP6XYu2YDwkeU7Cjm4fXSvX5vyaGeHzzt2RmMMPDAfbyJ8NwL4roHpPiSV9Hd3Yv",
  "key15": "6WBj1vHzw3u5jcjcsKYd3P2VJRPaqCj1vFpYkafvxUCw7MSsjRhjjWcSo1CqDKgVmRp6DvZ7WfXXDtDYXPyjDrf",
  "key16": "ZXKQVuAF13rTHYt2LL8o3XPjBEzNBG5acboufuedSptWxDdmPTnggaKTNqFNRHtstK3WQQa4Ju7mNCdbPwSrg9C",
  "key17": "3BTU766HJVGsFYA7UM9JoVExCFG5ZyaTibBoctiwUQwkKvW6YxrTDjEXT6p8hunqvH2QVHdTnMzJxrQfFrfwxz7H",
  "key18": "3McGSKPBKLoV81J1J59ND7JCnm3iqqs5axUZJyrjQn9kmdMk6JPqYF4p8yBGTGGkEqPUcWe8Zr5Yf5yPzbgnWMXD",
  "key19": "2h8WWikJ6duTCB3E7zqXheYWAKTfr2eSTdgNRKhV2pkXgPp4ACPDNkNLuSfwpEg9Njy16EFdRjNASxN4DE33TEft",
  "key20": "2GaGUAnx18LZGdQj6d8t6G1MF14a7v3V8V4c4hp2UzoqmkZFTeeBmCf7TqvB759iNUzNYpAeZBVMw6f3JCgNejiR",
  "key21": "r8HodFihCXr8TZ62q3RJPd8MB99zeo13ER4GtfVLWxHDPtajpVB3wHeycuHaV7YR43WKKDudK22wJyioY9aFRfV",
  "key22": "2DdP4o4Qx8XmUgsPZKB1KA7F6iB45mfd5cEgQ2NNWggrMmNToLUKTFQBMEX5B2A155FEGfGnsoaajd4QEccy5hGR",
  "key23": "5cu5SVT4BHu3Qp9E8n21NFxex2WaqqtaNapneRYVHFmmDebCPpyQcYbhxYMESZkNryKb8sXaKxLqXWZLVAg7mC41",
  "key24": "5ZaPKKr6eA6NZfL2hsD7tsvAXESzAr5Wy1GuVnnrjN4zdxv8b9e7USwmasn8GTQShVhoh3YVBUrXg88cvqx5gn7q",
  "key25": "2SYGEkYGxw3KExuYFPqAgmyjVSCiLMxeXMmsuQeGyvCEHNYa8gG36CBfht9Te5JwBcKjPeTHRTzcErGreY2cs2YZ",
  "key26": "5xp447cHTSAtfMWCZgZCLoBArqzCgTiA6z9sQHKgDgFY4gKZEFLGkJqLagP17pWmFDPNrxQnS291WD1i9w1YTzvK",
  "key27": "5THZVcVT95bZmdL7r9WhgU2QZJMiqG1UzNtwW5k2WWFreBK4WiunR6hBG388x1pBvRoNZujVSJ4o1GqDaBY4ZrXo",
  "key28": "5BBD6j95ZjJAZpMK2rNHWKq1Nq4R9Xy7u2nNepSV3196hvCo1KaLwDf77enu3HTdVd8GELZ7VqcvfjKvCnR9TuJG"
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

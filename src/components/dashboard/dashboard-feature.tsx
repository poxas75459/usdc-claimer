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
    "21oRABB7RVPS1kemt9FePw4jBzMeLdBZtJSytJFurNJBsFxKcdvuWJqc7RpCfNxQ8nqTyLtmFKMobsCAo4FYDN4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64YsR2vyCCaoM1P4vqquf5JCGkBVXpKHdPwaLYRVvUU4NV3SMqhFZRVvdKxX4yWAWqmf2EMMjaWt3jqh2FdRTXyw",
  "key1": "3PrNm5pmGhFhVVkUpSn2s8pY5TN3gor3uPYTiKqJhFPVDMJnM1w2RzM9VdtFpRabD33XrKMSFscrP1xF6882XGsQ",
  "key2": "B8HMrkUNGAA5xKf1PSwpCSyAoF2LfB19isPqJekTgM8VeL59nuMpL4JceDN6zrehRtTwEgfyZQPaGWwrhKupQjw",
  "key3": "4JSxs9q7eMW696UjvX6Hi6AFp6gM6pXm5y88LoF3MTX2Pq3X73Ez9ov18K2bozCdorWu9RTUoRWB67fMbkKaudsU",
  "key4": "5EoTDB6EQJV6FZn9r8KynhmyzSkd18Gy4qhucQxZxR3rgsBtB5CwTshgPtsfgP47u2Eo3ybytcuuc9DBi8FPPhvT",
  "key5": "1fhWfHrnBbYG7kTjcZtQbbRuCWrKLEm43XH6BBUWMBsgDGoBfwDh4Gi4rEatznPTJ1txk2KZzCEKi66sdaTGpkB",
  "key6": "43rYsz9tyzTmQudnMPd62fFtYkmwZJuKpkj8B93T42dRe3dpwzWAkXvgP1RHGe9JEHqPgfvpVN3oJU1U59hntarB",
  "key7": "5ZJLd1RgfsFMZ2Lt9dX2YXhZUZw2fgNxmT184vczrARE5hS7W4BDm2RNWBe4iKwnCdkxi5ph4wLL8FtVLDSgGSsg",
  "key8": "2fCvSaeewZ6iM5thDgkePwSzH5YkqthSicghaoLbR7pYu3UFHaD24NCphrqVuz7dsNcBrdmdna9ukymg725Hu5hd",
  "key9": "6Rn4ZGSMyVWxwr2UDx2aXXEGvZGkS25qgCUVwNmxSxF2EwXJJxdansSwbjLAmFdcGjBAGxHRQ4kYpickP3Na87M",
  "key10": "5siRaBUGtNUHN2uv3sPdB9K9bmqySntT7BRbrfr9aMwHqwySX1h6rfRBR184nq8C8rZ8rJK59wJgtDCSctNhkjyC",
  "key11": "9FSGcP9EUwaEkV7Gjrkn24NkdRJeEHx7GDYRuyPLfGFysywkf45tXirvgfY75oPNew4Ubnb1mPB4fzN6KQQnK2U",
  "key12": "3v1HQTKsazTBY1w27DiwEHccHzvA4B4qYeK1jgfJNi6sGAxaXc2NhKHqT6UgPCEjaJMD4qcTcZYZ4pcMZhx6gZ2D",
  "key13": "tMyf2Kg6thVBr7wE8BY5dSrTrHQibebKawsAgqjsq5AZXQjqnFLKJoeP6U11NhX1gLCY5QGtmqVY85n6yysps4Y",
  "key14": "3YwR23ijuLtVb2t9KEiUqwD18DKZF9PrG8g2GZ2kXKQqHMbXFHwQGbxA4JD5SCnLpj9de8BS8R655hYkEvaX9Bnx",
  "key15": "3dKGEzUu11541piC1t3gCktCL8GC2WVnoyjDqAeK4w44xvAVumRma847uuhEZsSyC52EGHSFLuRAccbDXqKNrkDt",
  "key16": "2ah8cbcH4FAdYKLvwyFa3Ywfvymy5qx8bkuPvHFfmCXt6fYckJZVUV7YHy9Sc1eoHbiWnpNggjCGvrk6MrqJNFXQ",
  "key17": "tjcBUBb8DBc6L3eMZWtNMSVjApAzqoKFMmgB1HmgXZPEmQSZaVSuEHp4V9AB6M8tuyDu7Pmu2GjkhX273YWnWdQ",
  "key18": "5F6nedChk5KYZb2QiWL9bDgL4qDegPLhPzb33L2T99bVsZzTdWHDyDpJyBBFBtv89eS9yq3AiSpd3sbwoT32VNqC",
  "key19": "2zS5QybLbgjhxci9X7Upse4sYAvZ9py6KcfyMQwSAjCz5kFtmANgF3mG93wG9XUjMRrdyuEuWqSdDkuFiD9BaoB2",
  "key20": "2Ht11C8WjY9WCZafSEFMJyccChZdDSB8Dx4KcG4YLJ9BkxYmFJwppmJsBXDuP9GpGMoKB5yVia1kJqptKUWNM4ND",
  "key21": "62K7TLjiVG7sdBiKTSQoKTd3QPUTpUEc7yjuQ7gmggghuVBf9quQ6m9WtUCM7eVBSSxyYycUnpHSn1qKm1XBjPjU",
  "key22": "4owDbUuAxTTS4VwSVZney6nxDvQ7Zrhzi86wXTxcgeQKBJV1Hz6f4rQZJepWjQvYKfxXdbw1atU55fUABtuF8J2Q",
  "key23": "qhWrGe9imnpMJis7k1SrZzpwWCHKcUnrEp6WPgthUa5RPEPPcpDQvo2zuJmUvxoRusDjExQs2shSom87E8zLqPX",
  "key24": "3CDbLZgUKeccMrh7mXZWBEyNwmRoNKMjTVBno3dDQ8BTkzCzXA88gPCV4MBiuZzFaGyaCATXJyRZzWNQzwsSTRvX",
  "key25": "3tkFCnf8nsKNTNNHmHdgY1tbSQaHcNtshiNGxKMvW5zPXkTvPhSBfm62kycH2QLbxFUHjuqWHKFyfv8wuir6G9zZ",
  "key26": "3Udf8xUoZgrpJQ1sJHUH9K1Vk1SKSynQEx8VAPRbY1keNroNXrjPyrCTzbVgxacsaDD1ShEtUchWrZUWb9aGSaQW",
  "key27": "3k6kZFcyKHzwVF8VL6RK1ZB1598kSTxUQuKif1ycLVq4bLgUx5xLrgSkaP3ijMnGgjGUZG4aKYnDgGRRrG1neSMU",
  "key28": "2GJt2EYmF6R4H73fncVAj5JUmA5hTfCEg75JFcTpMe6dEGNHkz23vZr71A3FN9id8Ha2UgpKgXv1JgrqMFmo1czz",
  "key29": "3Hm4rKq6R11Uy4NQw241Q6codAZzSdtN26uMRCKj9TKUknfHEWUbg4YnZC6X4vCeJ3xT4PyXSjuuoo8KfrmjWTbJ",
  "key30": "24JnyWvFfGfwxGmYAthXYdLcba4VMj8ew7ZgeJzvGZp5rTTWZnVQEkGthz9cFPjRg2uk8vCLUWWaXuZ7RFoNYND7",
  "key31": "sKbo2UkC3aBS6DooYaxd6apcrGhpe7rhy5bQQ6MdDsKRs2J4JUoaDskVBb5zShrnYAvwU9K3arkQYdZ5p3FKPyf",
  "key32": "65Q1MjCGYc9qSJyfahdVsQYovuWZMU7WLFMSCpdYJ3ExGL6s6mLKbt1Po1JC49V6s1hmit6KXEyra2mcLFmchyPk",
  "key33": "4UEBuHACt2mrn8FSCVgtFeVJDyHdNe13nF1pGsDmHwP7itX5ayCNSitXAgB515GeVdgrGjxGy2jshSv8DXt5A7mz"
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

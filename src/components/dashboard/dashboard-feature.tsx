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
    "2s2tpCU1Xc3ZEC3gGB6txgdGJ3FEpGDKm5wmF7HoYXuiV1a8wJY986BtGjhBSrsSN4wg1RRqYRprpEDmuYvw3dtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADZRorzV2DCyZBsg7TC82nmbVTJwU8pwf64B9xL3AePvmAJ5cf3cDCQFnGcqy44CYZMbtWwe1cnQSKBsxvRGPG5",
  "key1": "5fCH1bwhcGazXyJXnUEMNzKsjrL9gH51vbHbXqqN6sRP6HNi4AifNywnPXNQwF6r2ZoVuEYn7fZCTCHuLYLRsbsK",
  "key2": "5iVcy2QJeposu6zv97txCW6p6acyFNe3pxStKzn6oDJ79Shpbwhs8uP9cEqCcE6sXQLL8YVtWLS5RGq6uhKZmWeH",
  "key3": "4PUkfRNrUB7oTLAe5EcE36B562HsRGBD4rCo7tdqpdzrN6yxLRJQhKh88ZC8SJzNwnD4MQXVQT9LLLpZm9b1umK",
  "key4": "54mjhDoPfmPHWcjHHuQwNG56Umg7rPqhj6WxWEp1g3bM2jSYWWtZ959fHuLdztLXGiWiixT5vBRKceNzJpdkk7A7",
  "key5": "2wvW52PjqnH3kCPq44VXyVdaw8TMDHwDY6X5n3XNazSRjJcbMKZ4RXZMc6aDBPdaksSAiUdpdSHF2tukMKJeoHx1",
  "key6": "4441Fsus7qRzntkvosNUF2USXKaFajEZgpxBocrz3MYRsfG8oUPHHoja85UGFZo1DHicNGYhmPyarzttPTrS2G8x",
  "key7": "eMQg4U7xiVMxZW1xJ7RpjtZcaEUNyjPNK6QKjZ9DNCLYmytqH6EZyhctPGpwhiVKqiDpD1eT3ytzdVjpC5qrkHj",
  "key8": "5dhvM2t7VxqreuphBEa2rCc1wQPnKSmVSmuGWY92YHmV8NNAemNzv6BYNBVSMtVU2uYDkw2RUHCbL7McUE6MLcmw",
  "key9": "2Uq9tZnLjjtZAxamwmsP41SuwD9yJDcaSQUeLjJ9yjkg7EociFJCpGbPh48fwtAoshzULsNDxJ6aGdiyRVohFDQM",
  "key10": "4xARNB4A1ejGvpkr1P6eaC6ShevxLE4siAa571wdZzLeLFT7jQXtfEAqbFjpAp3CNMwHaiqBRViT8FjmcMacdwLr",
  "key11": "3vnpPqQNP8YZDNoUaMmYpuk6AbcwLMAKfAKTbnGY11CuSmpuozxXuEFrjpPs3J4Pz6nJiC8hsD7rLBZp2VgZd59K",
  "key12": "458LFactF6neE3H8NAppWmiiU2ztX4sWWt2Hsa9bD77UtgmMTKRZYK5a1NKcJrM7ff1NbCnSqVfEFbLvL42W2jd1",
  "key13": "2HYVWwmiN9Y2qvq8uZ9H44R8mHJCT8pjombGKdbM4LuySnjUHZ8vLxfYoFpNpKRPymaqZmAgeHkKFKPgfYhpcbxy",
  "key14": "3qptGyKbT2rmXJ1TxwKV7WsCw3qgGCuSW4YyxmpEas53ZQAJ6hP6wXuyYpSyFxfCGyXKg6r3aEW5jD9sNt3zJwsq",
  "key15": "3eTM6Ywj6ufDFAqEuf5QoG8dWwVQ6rkAzpyeDfnSZ3tsEetqxt8AyDHBCiAQywPDg7BxP3c2zZWH1WG2yxkjYwUy",
  "key16": "46e5DBsmcAXUiwZMdXfxRb6Lx7xWARVG1EyfhZWXbCjRYhvFFxj9Trbo2WS2aqQb8u5gCaoq7YCCgk9oKhpDTgUS",
  "key17": "5jxYdPwAdNQ76VQYcfD9x7q3ist3t4TRJg6HjkYhPb3fiFgDNvfCh2J5XU4zPZ2PPwJL7QeAio23jmgEMgg1FNKP",
  "key18": "4kqpLES5okncdZVc3bZaRTVZ1Qm2hBGeCzn6vRPgP1QKxE8NpnktXLhAAa2rN1c67TKnWMAxz2MP7FqpiFwaLEpD",
  "key19": "5pgV8ZN3E93fAdykf6broQZtDFFBDp9jBfsnBqtMM3NGkUdAcQ5NBpx7mgi8ohiQznPyFiDhYRjUBH83XA45aEFU",
  "key20": "4vA3CG33jQt3DQPRAWV3CWfDZs29YmWdKwUW9jQvP3iN47ke3RYQu64HVjwV5ntuizRc5RDWh5qqnyp64WFuHvaf",
  "key21": "5hBrxxULvg3JGAZtujytYLsb5a4fgYcXio3WNrUvPgLNCUANrCg2hgdwaicsJ2vnCTYovrCPf4tRJvbaT4o6G6tH",
  "key22": "5cmHRrXvRYPv8QzrBv5gQutz7PnUJpEFrYKX56C5S64X2TfeZhvNAnFmgFeGGxHDzRwitDBFx6VRrx6RvNwKrA6m",
  "key23": "3ctUazgQL4teBngDDbyNgzqDTX1Vb6BhEiusXpzNGHSddmABAxVfTh2vLfCr5erif4Jgf3LXeyiZYkRUCPE1RMA8",
  "key24": "A3VE4aJ6aBEELnpPtu9c5CBjLyN4xhSBLMrieF4bJNEkK13iB2Y7HeDFYPAv49SwCQZSwKDgKsTTKYLoqPus3vw",
  "key25": "5egc1YCS6NvZwWrnMrHz8mCseyPfqYtA2u4KvC5JYM55siRCfD8y2dWuhKeBLVBE8UubN8JXv6r26Cq12czhrDrR",
  "key26": "3yWPHFM5iZLa5uApqu6abJyYM1EzTAY3rRHUVsUZbH3XanVCYwt6cWvSyQp8kcTsCejYyjeuami4cMRrAr28D3i",
  "key27": "4CoKBHhgLjrMhq1jactVhkRptUps1LBGejUEYMW3mG2kuW5f1G8Trn6vTdyaBaFoGfcWEuYF7yjHhb1P1KbfUFaH",
  "key28": "5LHDEW1jjjfcoLDh4i1KBKywgVg8J3umDbBBYNHPGS6AS71ff2mZUwbB8PvaBN78zXnjL9DcuXJzayN3wV1SFfE7",
  "key29": "AEiDMZiPBv9soKvrHdYtWPDL5dfHMjhagQnpfSs7vUoU4ftRyfJb4WbMH6n3BSQoUvWB5qfWfxxpHbUbDuFUdca",
  "key30": "5UwLvyGBG8ounuv5dW7K86qmp9ebjPa7Hz8enAwuC9eNQXhWS3a8DaPuSd8XwGRSWsjNrzjcanifHj6MvWM44kTW",
  "key31": "4v9uGWff3h4a42ERKSXP568mbhj5tcNtqFLGXufYhoTjNm2m22HKZwsUjjc5nt4q6SvGMYPCtd9XMsxMrV5HUrTw",
  "key32": "4ccbAKM2F7LDHpBxq1GgkwJ2WN4JwhYpooZpNLEjmM7CDRVv7fv8SAFWejGFuz1hTjLXfZUgb9cWd9AUPvJkvBht",
  "key33": "qYyqZCQPb4U3kwQxNcQaTAscJgbkFh17CS5kfwZz2DKddmt88EchtBLugRL51jEKkuahGBAP9LVqaTY25uFByxh",
  "key34": "3kNuSqKEKranUSm8mFHDWrXukACSHoFETCw6VhnmY8nhXxVifA8dzB7eJPWc19d5YmrEqJSoFUbcJZeEbV86wDzs",
  "key35": "D3VnETnQJGEbcFwfTthVhPUsRsdD5qjT6Y44DtVD7thDzMZPZWxmtT7dmfkuKowKwriyyutcCQdcv94yBgcrEYN"
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

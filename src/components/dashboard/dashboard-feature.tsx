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
    "4CD75rrq42ABpxRsmGwEm1cdJVEptzRZbHNKsw9guKj1jAHSrXEm4eb8ziUHR787ZPeY3DjNPpbAnXPavKE6XZvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZunBLxhds6V49brunWRbetuTn3jxZ7UgFjmCSmj9PPsy1UvfbDX4QTo3t2mTLBraXfeMoXkfcrEWtZcxu9DVwcr",
  "key1": "8mMStC3bbp9JYo6CyWgiZRq2wkLQxKfBZjW28nYEZL5b2XmP9eU4NfrEc3K9f8g4E2XPdQAj8cKjxkEkekWzZvn",
  "key2": "apR4qmEmXVwvqwK5uvxfvG2PdnFDzwqqZ3ZJJmrp15CjpRXwSySV83EXGJiM6MJiwTdALKoTXafVCah6tAPEQi3",
  "key3": "4DYvcHgTpwZLn2AtWcnWnQw3ohpNHJBTfJcv1py77dN3hQMDHW2nde2LrscsdLxKekSGdbUWBzaZkvipxe46tEhp",
  "key4": "4bXoc4vSQFHWyx7DJg6iJUgq4oYFXj2SF2Qy76rJzZU4Q7p26BQ4snv2M1HjN79VViKcn2NQ6JuiUr1FKmfG2z63",
  "key5": "4hWagaHr3bXntAiosFcetmST82eQXaRddwEsErVW2xvLyEGPzdZrsAjwXdyh5NCVBFruiTqUXg7x3EW1QsR7GAAe",
  "key6": "3GuqnXgxk269vs2c3qw6wJ58RmtKPJATbJqxWFGBbYqff8krhCRY9BsirYJhKDsrsNNAWzuWJxPqmicqXMxfPHQC",
  "key7": "63fee2ENaw5TQHuGiBM9VZ58cUtBZGntCntyHSdMLXyU45y2MAZf5pYfPQzAEBxdUrJgJTm2KpyrX4kDMrLGu7X5",
  "key8": "3we71YuBaGgo1Kd8TRa2cXCv6nuWkcmj3vEcsDipXXHWQYYbwpFovimTmqj8NcsZpvDwWWXgSfCKe5meexBwT6A8",
  "key9": "DSJ9wHYeag9wgmRVgJZRrJdw5SGowKS5CWR5ra7ZVwAXV33EzwUWe63ixeciELwzaJLEdh4VBXautx6Lj2ARdfA",
  "key10": "gjgBS1J2Q5JYUuU7hQbrziC15L8yQotADh1rSRjpcqN6byK8aDqJ6X1a7iVf3zmoh8Mcx8YgxyZKrotxenSu7gP",
  "key11": "27gGUCkqyZbodfF2Vh526mxfmFDCAdr7qgv9eXxUYMYZFq4igVC81bDJgc4sSeh7pn5B5wKRbP7WqijtX3tMxhdB",
  "key12": "5DLQxSyt9EkXc6fhwZ3xzMRpyGuYDraSBRzakXFQNPzaFgaBpVmA4yipj9LvZoehvafr9P5sojP9qc3m2rUErNoV",
  "key13": "5wHn214NqKQxbTX9VNw7JEqmB8RMoP8TcFP3fC1fVZXxwvttAcq97CEbp3kcEa6H26q137soYsKcbh9vLmSwzrCx",
  "key14": "3qvMAa1t54ihTFEb9o2sG5YHuBzRFa4F5P55rTdR8hdnMmF3QqjCyQKz92AKN7ZPLU3ax2XwhYaTKU5cuqiJzgdj",
  "key15": "4J9T1NsGUZBwNBga7DGCVouKw1THddiK7iBAeySoSBryygZ7cvfAzn8JxTcNeySwrPW1zTJcvHVhj174aBCkLcbN",
  "key16": "2ydqFRibSGaojZKVRh9L449SRaRhX51qNnxycmbbm6cXAVcMaTR2PuUD4iQ55NiAWfNo5pWnzsR1drDs7KsU9UmD",
  "key17": "xT7nKXCwmLHZfBKuWj5xCKssx1uTL3yT4rptcpHmAXTqNGk5jZUoNZs4fXg8ryQgvXJnH3P6XuykQe14dC7YMTw",
  "key18": "2kJ8Y6RRYwDP2A5XpDeDFf6qdUQUNSMNF1pqoEQ5TdeDyQbj7XVe9oPoCmjtQNB19sj9jxSNKL7jtDsnKYR43pAp",
  "key19": "36Fae2ZpCvNjhDnvWgtEsmQmJxiQhfLKAkaCGAUYDhJwMRoWBzExghepKaPBU7VguEy5Z6LekLMExc8fVpdM2c71",
  "key20": "2GWPUy6GNBhaM7amzfZYiFP7ATyzN1ogY76N6VFkrckEXQKCtSvYg4VZqemqAkJnxqsRMUDN9PdwAsJzQM4JL3xX",
  "key21": "46CkedJrWzQoZg5yzRuZCcVtWVmt75z1xzjatmk35HWS9D9tRykfjqEgzuTXFSDkXZRYeY8RMvLFwRrK7c6dd8M7",
  "key22": "57qzR5ngwCoCkUBWnsS3H2fgyykMcgiBKHK42y6KvtS3PAyPdDgBN5BCL1j3LJ1BXp4zfm9S1TXUnUgfnkK8Dfw5",
  "key23": "3CP6hmB3yos95rord34cspKNUEvDSoarcrHrguhveMuyrwbTisACb66ee8dzixaTYGeFNSPLyZ1uoxNu4jTrDhc4",
  "key24": "3RHL7LsBR56T64tU3q2fCua3xbU4q5bykoKSvM4voWt21TC4h2vWbXNaNb1VtV4zT9BPjNMreCPiUZhFtHX7tKuV",
  "key25": "4B2rU5CgXR2HCpkB35yhUd9xhwYyU5CwGJxCZes6PwbKWXmuBB6F3cb6KBbEqndeF6K5RszAdaiusjBV9d2YGG1r"
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

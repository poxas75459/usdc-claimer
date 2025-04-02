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
    "2vZZWoy5jsMU2EwWkKgdvkX5pRP1i11XRp13KV8kobAuV8PPAip47ZWZcqT8FjBvr1KygQfaNbesAKHtg3VLzLJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KuJDwcdog5pqU66zSUgDkRgAMGwVsv2jTAsXgThcAkmftTq77Dgy8ho22ppK8hzKeoQs36NAGQK2JfctyHXsrt7",
  "key1": "9KWonRyciXUFTgtMtroWnEeM7ftPmv6AFWdiG8oRTAxfxvwCsHDJdeTU7SXC6nezGWjzzYR6anAs9g7X8B3iFVe",
  "key2": "5aSvMh93yYp9ZhEPKGNytXzRD9fWLRnVpWQpS9ejg3fD3qci9pJowX3b16Q1cvKfgRerxYpL5SwLAwsw7yncPiE",
  "key3": "3abbydWUZHPvHa92HYPQHrGT4cEg8LkKWg96A8em7foRVQmBneSHYYEM6NzW7BqjsWDcos81vXu23JuAgPQeErWP",
  "key4": "124zBpbfryFf7uxBn3Akr3hSmvaX1ECnLWnocgLYyjTuiJo9jsBJGVCD7foWTAkQymy2gEXTAAEXrzn7CCTAnMmC",
  "key5": "2sCR5DPeVe18UiovwSC9sKR8GtuQ5TCoGwLwwrSFuNMkfbc4cfTt2gjjFTUjP9Un8yrkQ2VxwpHD19YnfRrcvN8Q",
  "key6": "4krGMVfDnJFdP1x42rdZFKzvEifXQgeXGFvkbLkwPhFdMj6xZBR8ENyNVZkhjmM1Qkp1FJtAEnQP5PtVnHkwKeZt",
  "key7": "d1DzXohYattyqouPajH3couAk3gc8djJuMRqjDy6Z7WZUF6b5jgeKEN62gp97Kr73wYiEu7pW7dp2JBd7EH9jwa",
  "key8": "2XGFeD26vsz9CDHhPi6CWuuCcVFfjgZ7LxUh576mqzkVEm7yfF5cxgabvYUHVD5jgxV6xJwiNVS387p5XccCX2gr",
  "key9": "d8Hm7DP7t5BCVLBxq5tnuVFfnDLC7kHzAG9gUJ15i2GArScJoi6PTUvvS7ycwb5uuRkvrojABMDja2obte4ak9G",
  "key10": "4Fj1JyXSXZrdTCBisNSe2i6THoMPU8aXSjmYgn16idNk4RDwLX97ts4UNZCZYBnnyBVJfiy4wWFqWgL86Qxc7hfd",
  "key11": "FAVN4RLnRHbgdxn1uKduq2UMAqhvfzSrYZ6rst1u7wXhS6YTor2vaPp15eTx9tzaZqNEtYjFZPiRSkDzN91Xv3k",
  "key12": "4CVh91j95makoLpwhqbAELNdJhPyNrc1gEYnS8sWNbatfrJKcVa7qmjHQrMC2eeujmVmwtU9SHJ6nEjaYkF6E2Ta",
  "key13": "5VRf6kUMTuJjSTXoGeDxmWA3xrYzjrGkHpXG6XPUqL2ttwJnd3jesUMJPMsN3hEBc1r1ozzoZjDJdFzjUSSCECd8",
  "key14": "2rz4nv9WeZn1AkYWdff1AR4QWxsLEDmMmXJb1wDZryvti9KhFi7WBkS5DQ4JS588HJWvmLe9oMz8eEjfhrV5HR9T",
  "key15": "4YrkaPxXgt2uTyzeP56iLZxMch23uMgqZ46nxcp5tAE2edsNEL9nUvVShoQps6Y939rfZM6BpMFQmZBM4t9XGaaD",
  "key16": "3zppnWSFEZscZ5GBEBPUYFq5mrhN9RqWKiemib72dRkEKzqpt1PQd7DZMM62rJed2V1CvHGKv38UAt4XpZZvfZhB",
  "key17": "5cFUxhevJ5mNxxvmEa364X5Qh9dzzEcNGXMCbvKcCq4PnpC8wZ1ZXnWnubvt4yNvVGZMtqvCNAr6SJ3rHeB1iYfe",
  "key18": "xjZb8iHx8a9Fc2h6R3LNQuEcDABA8u3WpRfAtLWnhpGcayUE9HYCQa9C4asHeESfCUATfDvLCPcXu7yhi82Q4oN",
  "key19": "2EFni7X69jc62CxTeSqh2VdQwu2r9bfxccTLcfEunokCETRtBexYrTBksnbpYv9m3H6fDH99ejbg51YQTrbcJhmA",
  "key20": "45nvAgog9hA1wWTNZiT144PEsnkksMSv8MJe2LEoerWMKLZCABax2YfpM8sqMAJ6Xu9Ttx6X6J3BAtLTGhx42BNx",
  "key21": "5x6HDDrFtcrqhSTGBFzDi3rkQqXqVAhdxMjkprnfqFKCn4y4EVTKMjQtvftWxTrEdhYnP5b5qGNfbG54vkaaHBWq",
  "key22": "4FQtad1yPrwHs4t9a9Mymq31KEQvNGJF2EkDKe8FRU3ZLUcRxaEy6pJjtzzb3e8383iWmWeprZnpit1BQoDC7FsC",
  "key23": "3WKJgtkpq9KAgBkrMnQrJUGWkCjfSAZaoJQtmKXoiqjrfDFc5sJt76642yMjhLVDZPvP2LH4HLscRx94zfXMbby1",
  "key24": "2Mdq2eJjgwiVdXtw8H8rPVShNxTSXZM1nFNNyx4p48eL8SHAekBh3MxznHdPshK9hKRaARz9ddCc3SCWfef4s8yq",
  "key25": "R7MXxJ4LLVHtoVZDdbrjvJrvv7iCPngGqUChmvnyXAMEV6uY1BMeopKFhP8VxHKetnacVgTWqZGcyZEUGEhNHVs",
  "key26": "tRaowhyLDbqoLmTAK923A3TSsXfyAEYrg17y2Yud7CK7ZtCMpkTqPyu2ps3hHHMhmUJKt31KCbsDWboEt7Xjo2U"
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

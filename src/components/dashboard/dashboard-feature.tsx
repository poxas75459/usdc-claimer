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
    "2sqw6atyaCTheZTcR97wG3Drd77CyUrQWFn6mv3vbxTFMpWj8KV1cXvyYe71AP3KcEvvDpY5NjV9FWpgWrqgLr8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RK97PSJW3x93V3msR2LNxzeeJdLFwX3GapBtY9Uxi1U9ZXPcjwgQ3WWVgcAEBtGXbSZLqqoGZimMbeKucDmbfp",
  "key1": "QG9iQtStT1mL2W5wYGoHWQ4GgGrtKXiT9yDHHp4SPzf5scTW1pz6dnSbXd4vD5AEvvNYiNAqnE5P9GrWD2ZzM9c",
  "key2": "4GrGHVEHR7G6Ew2Q4JGzv8qosnMukcTNvrP9p8ZFnQs1Ecdw9qhZv5MkAPtbEe1JvhAig4osoMx8YTa1H7AppnB7",
  "key3": "3ayripzKPtoTxkwucZDVVWQWT15CSJABzGUzavbdV2tP2rgfoaeSpDcCPUiNaQVd65MtvNs9wkZkkMyecTSzvMy6",
  "key4": "4Z4sSwo6EhDd9ED2DukJM49vHjHYTPDAbkMimnqvd5S8EJvvBjX4T5iK6TxtJab6u4AhKbJdVX7uic5Z1Hx3o4ho",
  "key5": "3AnynSJwex37vC7P8VPfw6dMsZMXYis9oR6MfccofyJ7UobTfZqaZFUfPtoZtPyiJNERa8QNR9jD2BMM85PuH3Aq",
  "key6": "5bmpnW2Qk1oEK36KbgLtAmsWJyNcyRKWrfMFY93qfx1EBzhootuYecL3XLzQPbsDFbfZUFkj4WmxLorgYhLLywrQ",
  "key7": "3jjYwZE3zGYvKmxny4zAN3opBVwnwfwuyapP5KJwoCFofsUYx4efuJprp9rgZ3xX3R17muzWeTan6cKZn8QTY6Zk",
  "key8": "5paWnfwFFvFZBqVZq4jYw1rpTGeiLFMixaAcTC4vH96LD9za2XkHpqQq3CiTsVKWZDGNJLJNdpKvmPMjER6HVD7P",
  "key9": "4kG6QK4dQSpxhi7NDASr7ntPicsGgst5iEGmZAyGJSiteqgYoGmBF7ZbyNtecEHp5Q8D8K7VmBbpEonhxuYEGCkk",
  "key10": "3AK24T3fmFJoMadAfMtWoJucPuHkuZwCWK1cXYRkktiiqBHY5AnoewA7X7tWBmssaSekWeLaf2F7QbWvR34Z1Kgs",
  "key11": "ZGFk8QE9ot6CaEYFeoTzZ19TLmMf85evDGurTJxKYe2Bsz4AyzSm82Z4SHLxb3dFS7SYcvPdaif6rKEFahKW67L",
  "key12": "4pHjLhBRJmLnAaCGqVBFNkNjN9HZTqAKGsqEJJaFCRGEtrzYbY7bhUvDc7xYH6zKnWtakGNrQgLkHaN3gq4QHHgu",
  "key13": "54noNLHAJQChW6kqsPiKZpJD9grazZBZM3tt86VPzBQc47w4hstLN2Lc9qB3vyhCdxHjA5FPZ2N4HBucWqRS6CoG",
  "key14": "r8Dyekqqs9SmM8cpcE1ugYb3prprs5nTZ3VPBGXaDM46RHPkBRSEGcWiPc7i2fhggvWQUhCJ3E6tZfrtRwzyvQs",
  "key15": "2F7mtCAPaiBZ4Z7gyvoCeBzxdZTzfsZ8nsQsehP2aJWXfVFdCoD5BdLxfTozEWqHuPTAGGjjUy7CAMXcTVXG2UnS",
  "key16": "44WVbcsM2kjWLzeZ37dpQ6Xrio3MMMcpm5pHS9M7kD8RuDe6iCujHcvrX7jjPKqMVMgCwpYQTuDwXQspmj5V5oGJ",
  "key17": "64XjndTJsnq3DCYGdyoRrRLXFS5pUEUqbWm3xyy2g9Wxej9xx5AynKNTbQmRNXU6GfrnahdQKVfcvvi4GhijucLW",
  "key18": "37f7rxBADanxkZ1JzPuqGSXAKAty3gAYkSmwNWrdxLBVrFG62pRzNcomRwgEYa18i6VWo4YM4daT8BKdN5FUaoyP",
  "key19": "4MPC6Rv23iqrP3cTAjJUUJi6g8EmcmcT1Y3Sp4eiRy3vfe1ko26heMvG9K4me1RAWX1iwpMcep61pd6Bvvw7eYTQ",
  "key20": "5ZQoJK9aShC6cfgugsPPcHex3ouJtvoQ9R5oftqdTzCyeaWiuqQdUyTngG5QG8H4GcXJfuAzgcDECeKcWJFxy6P5",
  "key21": "4DT6gkUxX42Qe5JK4bs2cE89gQY7NmS3WjbkkjFaxsPBwfueb9oWZyUtYb2iFKpaUCVnb6qjB3JnEZiHTGJdVTWH",
  "key22": "4KXZwcjRwmyRfbjzf5tcEhqvNMe1dJjCAF4PkRsPfGYEU4HnJnr77izqTUr3KZUGRKXff2DdSYQ93wTT2asKMxDX",
  "key23": "2weootsEu2ubSsbaGuDDoGEqr2tdMVLwSaRkeR8nFEyLDts9Rxrp4qhXn7anFWyoQ4MsSGvzWnQGF5paitXVrPrp",
  "key24": "4KMwdtGBMJrKPsqyS2rA8mRs4sWvuxvVoZSGRRbARFU2PRqQ7vziECsWeGUwxakFDmYnHyMy7MYbRkDm7kerT9jJ",
  "key25": "xrzLkJkz4TCPdwDaDo6ndyQWH4yTtRKTAeJeBaEpswF3x25Ww8e3cC6H6gN7tuv6Z5MUpXPj2vtgFx6xLPPm7dq"
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

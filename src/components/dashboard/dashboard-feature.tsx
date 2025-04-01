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
    "57gTdQ8yDz3oLX7oRguwzvUDW8ZkSPWW26koAotUwHWzzh48XFEmcd3XG7NvYdMGwCYzypirhgMGDnhfQ2Zc2Ynn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YLcv8svyYpGRiVk2UoemZ33s47psCSJxuUp9Ewv6B1wH7g7LtbfiVXLnQ7NCKZmsRxxyUAFwQPx3f3LPCwC1F8v",
  "key1": "XbPhjEXrH6v1QgpPWrx7nkKZA5HuxDY33SbShsYjWDHQqNKTPokzeJZgfDuMErwePAZbeXzCewWt8WeFLeCdozB",
  "key2": "3mwb3St7t1wiLNM2CqoPiut2nWsLJ1tkiMGWHKyaYGpstkuRZozQXwco5J5SL7wSq5qKsXg2hq6gJ7QPgit1K1a9",
  "key3": "2kShqBTJ2fjZS7KC9jsnmt7rbhRhE4UUsBu6HMcKqpTvYBgWYvwMM2d3CQs1CkAVF81xhWzMD1ez55HuKV3UC23T",
  "key4": "49w9GFbA865typSyHne69Pu6J6wR3AQ5weYZr4msgGDmUGSuYQQA8fWB76H8dmtHArKMTAko6ekCbnoYPmf1TCWS",
  "key5": "27QrrSHr6LmwMftL6SzSn33EYGgXbfRnYZdehvDwC7E3YxAncnECsSXd1HBDkV1eTR1EXmdtN3cBreirMLQo8dNJ",
  "key6": "3uoxroh695YJZL2DSJa6htp4o1REtyonWyJomBFm4mxoFyaYgX1YNXiifGzXNT7v1kKjG2wMcvbxoxQKQaeFNdWQ",
  "key7": "3K5cBxMopti1AeHpLQV5KHdj7S6cKhBEiDAzWxc7SkPdQ6UNKYpP7jXRod2cuPght4tCnuZFsvDYusMSd9TjTgBn",
  "key8": "66YA1VrGEgcxbdvyTqEyNQ9UpCbhsuWEN6rasjMF6tqe5Cuywpe4unU5tE3pP1yC9PF87H2XHabNJBchZ4wS1dM8",
  "key9": "3JAhx8bKYowUoHN5r5ZHhBCFupdVwEsBQZLiYwPeB5cd5M7qmPg3fjeLmFrR5ipymJoC8iVgKg8RbnKSvB4zsBSM",
  "key10": "3LayK2hPAJydELwaPvUPdqpTtopLpF7L4A5g14fmjnSoAJQMaj2f8eXPvK8scnXzB1obcDdhZp1bHGQtmzXjcs1Q",
  "key11": "wCjYNxyNZdideVppGNvh3SXv9UuvuhFKDGGqPgTQvEmHnLWyPHb81nTT45oEZiS7oEfEouymTD5kNANV4Sj3VHH",
  "key12": "4AJ2ZKftoRjM25dbQyUoxKaqzULAbSxeALSsuhAu1LwKgFWQ9izNzQkyv88XTxdZPVYGgH2avib9959peickd4bf",
  "key13": "56zJYMpqZw6MY7krJdoTJA5TRdhgqxjD1ksHwSSpYALMonqmhUf3wDjzS7aT3yFYFkm9A8XPb5KM8h3a8BKr5YpS",
  "key14": "3W3e4Qr6p8e3dff8nfQQW5R4FCX5PKUbUNTtw34ZF7TKuSQFbqWJ6ePXhXLP3CbJHHUqqMQWx6kkbr9rXnYEv8wP",
  "key15": "259gGszpjG7LrkLGBP1BhWedkLmtgYYbaVY8VUgVcjrM5xTAPVnm4CiJeMD2rNGwX4ZWQCXwivKf1n6Rz8rZiRkJ",
  "key16": "3ZQk2PmQ3wP6wn9BX6Kcskuw4zPxnzd9Neyb8MPU2E4Ba5GH8ujY2xdH6pTERRBjEDSTvekVL8EopNDpZxvTsesF",
  "key17": "3bDv8VpYvTVm62brp2Q2moV2Sn1JdnmeEcUwzLMyYgEyhJqzvmtCj2hHVdmWZFn7ijHaGCB5qhAkBq4mC9c33DHB",
  "key18": "XZqSXhDQV9s2QcSwyGqvSNKUXhLNeevyDm24iA8fyxGNpy7HXKUFGz3Ta2zgrR5RL1gSrzFpswosg1NGbwdDfNk",
  "key19": "4xWJ2eJ5CuqJfurpcVPSg1UJGnYuYxLoLRxeVjptKoUUvTQqeRAUsMiUPFtoEDRGW1VB6GUJwpLhJ1QWJndgTGAn",
  "key20": "2SCrCam3Uo8CSxnM2ECPWQEPhwjSeLRirKZBbq1r4duuNkfF5VHD4pYBPB9sJEgNeobU7xfFX5q6uFutH45n1rZ3",
  "key21": "4Rp78mAS97TyehgTWmJQ5LD4eeHLkX9MUmiDsKbSjsUReHvL5uAGoJbJcPy5ht18kNxPm15r8JkkFK6qLargnm3V",
  "key22": "2NXwtNbQCcRyY25APtE4MEn6fs3DeWgunFjsczQLXocq5q1cFhymbQdTPdH6gsYWmD51RPazW7k7NC4pWSaKbmD1",
  "key23": "5FGjEXFNCtvFrSLshbxpwgh1253WVzQPMAM2RLHw7qxbNNiPquSLNv1DixHwHzA3kuJSJjhDeoLHXXxRWMNnyU9S",
  "key24": "53LoUfVGin7vtgzwQxSreo4r4BvjbRR9hiZEZT7MdgQCXbX7ob3yvnzSwRrgEct7S6FQ66294UCHwBEf5VJt1bs1",
  "key25": "67akbaDQkcN3GJDdfKe2dijwoE7PsNXcRxRAFEV9nr9zHXFj1sW8suYjoTeqA3JbCJRfnE7s7KjivHWR5s24oDwm",
  "key26": "2XUenqbZJbBsCbNxT36Ld7snX36ANygcQneQn6N7bWioQZtEmVZcrjDzqKhxYwCFabXnDPhC7VvACNnV7BoZepde",
  "key27": "3vsf39bnANR33KYWgcWKaJAPtzXntuHX72bisemkrt1GmK7tzXuqi8e8SaZQnZTHQRXMuPJyJzEpHzqwMyppGNmw",
  "key28": "48aTDr49Fdbuq5v1NLFiQf8tRdFH4xzYPTSRJPaqZX3UgN69SEKMB3uj3H55sUAjLKEMX8tBdjaug6guEsReYZft",
  "key29": "31ERkfcKtJ1xZJnS2TZKrg2DLoq5xf9m5KTrfHLg6WeZQ7iGfdMZhSrE5iK7yZ2GUT6XaoUnc5GMn3dwuno9XCNC",
  "key30": "3nbxYgqDPPNifBKWAJ3PTqND7sJpUHVxrqzPESd42BCp6jekVNKcQrrCfcLdMyhfeCWf7yoBLZSd8aTCqqj5k2f6"
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

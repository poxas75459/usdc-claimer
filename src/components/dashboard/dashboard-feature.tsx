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
    "4ug1W6hQ3zTi4vpJeTby599kysGDckz6Qc3KHmekZX2JdDCPbDYNXMvhgPhESfKn5iDjXSVHSU54cmJMSvW55JSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SMbuJQBhE3BRCimJhpwvg3VihbGJ6ftje4zmiBkwcPYt8FXn2jsWLT15TuTjHEq5db6krArnm815gynGgD92DCc",
  "key1": "2rQ4ourk8YnzMkDXsayipFoE1XYwzYeULEbJJstU3PySAKA95jD2oKZS33YVwSssjVAc7iqNvEKKkgwSL7jibH23",
  "key2": "58YgZmaeA95Jz9FakdhvWxdZ2tqmiMcsks72ikNrEqiFvHfdnGnRnSmegHRS5HmCJ9ZJWdHYueWvWY3WYiFaRTqz",
  "key3": "2Aq19fLPM5ouHc2Cp4QUo3s6zj7TqukCuSMM3auzU2ZqXeSpPkMVhY518HA8p2xwyVqdPLkCLmqi6fGFKbnErw9a",
  "key4": "2DSE4FaXC8YnwUNtJt3LuSjRGVKu3NEz9iWybE2oP6QdMYaQNMnDSv9GGnkkWvejBshCYDftxpHgjfXXM3C8YWrS",
  "key5": "2Q9zcm4WMe8qgMBs1MNk74XEPNgD19S5kx69qmshHARhTrwF1NBvQpQFwf2fmzAE7ai8M9sw2Y8NL3PRRjeYZRAX",
  "key6": "8JwqwJ1Vw26DDs9faLF6CkVeE25GZtoFkSq3xXPvcqyRZaahWCLgowqNbfGTXCZs6rNcJQ9BMNn5PkyTB2tW9z1",
  "key7": "3qsf7yBGHDMSMpFrHP4Ct9ayafRunFsJtpwMogtonM2eBGfL7EuVdc1i7VPteK9yc7za11Ndg1MEHeC4TiCc3zGf",
  "key8": "2Xn9GrGwX7abnUAFZxLoxMH4peUaSrw9Bormg5VTb3E3gmimjxUvhAacRJ7Mu6eSqTtnKph535L53dWFvwAUbQGL",
  "key9": "5StNt9DFGZFm4gG4HhCj9mLpXFHCGCQ9SfwhWE4HgCD5oWPfnXhgJs5Rs18FU6i7f5w8brLbXWKFA97uzemtJRJr",
  "key10": "3Evo3qyjG5AmYgdJFgZ9ufbo2Z8FiFPpxCUnoeKHanyony29XBPCCw52DZysmzwneTvQesQGPPKcwvxeERQjDsEU",
  "key11": "L3pr1yrV7d2G7Fjr26gRGjte2feuMgxzRt15pbLBDYigUX1hXhG5KDRaNPHgS5GdjCjtyPLndFmCU8ujbinNH9n",
  "key12": "2tQKpoxm7NFJAcaSsVQHy3zQAGck7AcmKjwXdecRQhJVJUNmAx3dKodg9dju19PvZgXgDPRJQbK3pKvSMRLU6haS",
  "key13": "jFBLRW8P7jWTyvzoJbGb3W5WF5jsxg7QVeh6onCx4aU9kfQqE5ndMEjQ69WJReqjNgibrz3STD2MA1xSBp9Xws6",
  "key14": "2VphTnWwWtthREBzHACeN26vbSnBmAyrgbGcZwVKpFoMFZYtyJmhEE42JhM8zFjytP4xJkv6AZ5uuyufQYSVbz2j",
  "key15": "24FUsQFGK4UW8k9psAwPC3f14vfGXWaoVnNLNF9qep3BJhQ1rHHXkhVjZ3UnvnHxgGCWgscoK57LX1q2oDCtSE1U",
  "key16": "3vkzMgrkRQNXD3KW2Q4ysp4wmHQ2NvwFH836HCJZqgpXJUEGK86gdeb33HqQHREh6u3GH2xuF296GhMDuMrhWqn8",
  "key17": "3PEJT2qtmmB3c7jdxE4o1bUhPqst4JUdMnfpm15kSc31vAt1RhNcEG8MVsqXWdrc3so9DNcb6CMD6Ydi6Nwoqd3G",
  "key18": "5AeKBnPArAhmGgRy4H1vQeQ8AgbBJAC91cjTsnPUTcC7N5Y9myeUkVRi2hdbyKebTtEQsQjMiyJP2jmLQSwLje5u",
  "key19": "2QhV7NcAxumV9b3vpYUXiRqdhMNg49f2ubTo1Pd4LiPSdnm5cEm3t6SiJjFdS6nE1aCyywCPbYyGyuzkUVGWFVKJ",
  "key20": "5yjsmEV5djtW2mu3Fn1CWY2tU6tBbtRQQ7njaAE9ky8Yu9JTgstBviqaBtjn47t3ZXkyWS2TSqiBcH5o4xca69vn",
  "key21": "5rkowi1AoHYdDTeZ5eYwg7D9tt4XtvD1E1MKbfng7LrrsmW2qhVhho5BcUSGXfDkxV88UscvF32UbN5BN5PMj7B3",
  "key22": "Sh1KLxjRamDuDdQUkiEi1RihiW9qDfX77W19JkmuncTCybiRMCwk96PCh5BQBytoCFU36jn8qZxERu5C6HJXmaz",
  "key23": "3gaMYwnKAcsCJavn5j7xrgP1x5b7p6J8RUSAxS1CwZhStmGwYW1dcMcxAMAq2K7X8kDcKTwnZE12eEj6iTKpdKs4",
  "key24": "4Vvyq2doQx2SH7ZqFdf32eR7x7B567gx3mak8LzJgg5YdiBfq9RqVkGxgXvyTTZ8SbvhDRdqgF7r2GUF5PYLSJrc",
  "key25": "61conhGcrczTMDFnzxZ9nnq4dxXAJEPapHjsGWHXVmPyXRbHBoH5ypaoA8M4WC9cMSScBQJa1aFJhW71MoMvL82G",
  "key26": "4zUQuNQXAfueYZXQqFZWs8ujTciTcmK1ggdqMYkLcSChyco4QFcsQJFbQ5dsPEtAVvzHaWo2Tw7MZMjgm74SVK5U"
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

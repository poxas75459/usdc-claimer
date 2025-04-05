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
    "5ob9mYwF55hMB8PfWW8toqdJCe4ixsyHdfSqqjdwLxAWoL2U1p8rSWtN6kiSDUn5HdDyxjrc9Ky5r882di6zUUZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dMyRjBVN1wfSLYgo8kGWidctZFeWHWDZJvxaoFBHU4AWTcztuDcQBLVVeQ4Fo11ov48RDRhECwCjUQivhdohxNk",
  "key1": "W4tPWEv4mUQVsELbmzA2am9pYXnJfGBSEWD9V53Ri22DCE2GXn9yMztRAKWPU5jSUR9rZe5gZemCMXNtV8trxTV",
  "key2": "3kJTqewJFJ9fQxkJvjhcjDVpeNiyaUPWeG8dGATE8Di9EC1GjXWBj4rch7StjzNuFLGdJvoB4UJQa1sD5ec5FKQg",
  "key3": "5B2BuQNLT4qheuxWPyDZmjFQXwGN68314boec3dm6LdFkPiUJ5KS9JduZ7guYhbjh26LF823YbPtTBcPAgjbejvr",
  "key4": "ra1wYt6PHpr1LM3JC3i6YK9EnpVsUWTAfsTvs12Pwpntyih5FQuGNBAdAjWAHQGCaF45ijhKrT1xADfvuyoPfNS",
  "key5": "xX2jkswszUzcLqydAZUbh3n8AZg14iuzMjgt6gnB4za2Dh3LERfUkiFcLLrkkyk9tUUvGZKH9DLdt6nGHJRdLEA",
  "key6": "3WP4ChanXE9AwDgVtxVc5sh8F8SBNy84xottTzoCihQMMtEp9YzbxWLkKrh3VvzzzxaqBUbcVwvrtJYzwWSEhXpG",
  "key7": "3dxea3fN4ZrE8WAZgpqUewUkxarfQ6qa58Y1mZs6ZxvBATZJc8TjFTbCkeMV6LFPvi4rLkvyWevuGrNhqYyY5bXB",
  "key8": "3NAvzU49STXKnkStYzTrb7KRy6RFTnGrnHDE2fafArKWHZAeedDCPZ8x1xgUkz6pk6ve8FafE3Wke2yaJzrLvvv3",
  "key9": "5g9DvugpYWB5hSTQg82ZFXUkr7o1ZSxz5vGpyCis6ZUiAXo4ZqvSBpq9iFAuH24K9zUDAMj9fNHREDHgwLkgJK6A",
  "key10": "3MnuXxsiy7WhrBfnijcwW2Y2MWTGwe1BTvrTrQYuktsSuwyPh538SCagDkfdYfabok3jKxxwMq8xZkS6hJky8RLX",
  "key11": "2XYcQD7hMNSFXiGoYWHgwis3BvNqsJQZjXtwqNwojZSxxLHFp8H6ZDSXC79Gaq66Uaxg7KqktjVbyaZuF9cozJMq",
  "key12": "2iR29tCU9Qp6cv3FsdrYksN8Mm7CATcQaXWhbjmS6VL1a8zXHL4ThKeVYcY6eA1rqdYbYTBxybfjRGCDt8KzZWv5",
  "key13": "2fNALCgHDLZRSkG83AzFZrF7QPo32ndju2ErLgNDTRBDmp8BsWsmaF7XgefPEjPqZ44PTG2ZcWoT82qLsCsAyzZJ",
  "key14": "5Tjhatfc39sL6fiwJMnP389ZSmwrX96LkFTsMD2gbr686GEBtdxCdGcXwxyCf9vHvHGUBZpnJC1nv86bKpqzPhoX",
  "key15": "YiZawYevHhGuyBzbaoGwdtFN6vcL5CrRM1oz5j4niGBdv1PNJhKf1TvEfy4ng1PWfvfQk3NZomxFjMAPNHRMcL5",
  "key16": "35FFJh9QJVa5LvHvvANe7tL5bKZQVKnTcq6TRM9wt2AP6agB5fj8AoMExhbanWHJM3HSoRZmk5WYRoik5bAT34CW",
  "key17": "4omBnmohrZFLdVAFMXV18X74VE7BT531UuYnq89RH4j7mZ4fQkQeGB1pijJLUUbapsKDQ7WcwLZUiBMmGQaxGWEw",
  "key18": "4gSkHAUTt6pVMHTs1uHf8CGRFoSjUeHtsiV8MKj249XVkwGcAaAo3u67FD86QqUouHht2Ha8UDzNHfgjt95YAjKX",
  "key19": "3eo5ZDYGSiMHEUshVs1PD2MYgGDjVM9tg9U75PHYsmWtgqq7LqoX6whhxf6rNC5bUfNNpeHzwgxzRCez8S23LkZV",
  "key20": "5RbBRCvC17J5EbqA7UH43iAJjTp2AUucwkYjipmqqC69DSLFKaTL8VJS1G3xth447nyLbUVgdV87PQuvGducLYSV",
  "key21": "61cFEmE4VD8H23F1xU7jJjNzg5njZRbKJQURxXizxSRtY7jEYcPPAsdzE7VpL5AcmGFcsxQAk4Pgh9ZU9cJRwSjR",
  "key22": "5odSpMZ2iiEB5MhGywjiDSsePnoCPmvEqDhQen9zE2eeSP753o6iz1gj7X43As2orJqNKPKSd9ASbyAy9wZfV8Tu",
  "key23": "4T2vsGLaYJpQewCcgJvQZapp8EmoyCm6hSgAsYfNnf7Rcso4YiUsuPyoFbVsH1c9yV5ioDLDGiDMVqoeCSDWjZ2N",
  "key24": "33Tv5ztPqHQ9gGMRfiBBcm3MDzWP2EdLa1iMpP1MvLPo3uGQUuKpGhn9UeMN7YdqSA9C3kiBzzzAWmN7bSEirvCK",
  "key25": "2QUNxpefZgVdCEWLjVets26vzkUYg4scpQP7SnPJsLTy4b5jqmQCbmKrdugNNwa1jAjLcAdiAdoR7UsuTdDqxTxu",
  "key26": "3BhUyPt7vGAjqQWzE4i7rsvwXywrfZpfq5j23qRPN1qWu9EBcwzPif21VQAk62RN37gxTpm2kSAmMLgeBN7b59Py",
  "key27": "2cawZqMS3hPmPtjaTNgj854Cnk6kkQ52Ra2JSjkwgamg7hBBT2KP4VHENVTEEWnhbU7E9ZG7MzPDgx2X5nwa6puA",
  "key28": "wzpoWam2cWbsbj9kgoXwgLyCSumghF4YU84PtycarcFPRGryDVhKYYp6t71VvXMHvwFEsjumWu5UypwQD2JD9QA",
  "key29": "3788NxfjwWAh9DU59zPpJy2V3ZwjB2nqjF6onBNTb1w7TYe4gSGnvVEwLdPqSa3ackfyrcgCmgFGMQ8FnfgV1Zy6",
  "key30": "3AprShfVabEMsB6MYwV4Yic9zX2bsMYXFMMT17p2Sye3PMw2YDpL3muXBr8r4PgFMjBroygM1VZAim5kat9qKAmg",
  "key31": "2Xc7kEaWRn1PvZuGFMiZHRyJGf7NwVHB4W5BNyqU2iLR2FXL2rrutLpZpisc2Kb59JrociJkp6nAqtbjXxrmHKjE",
  "key32": "5A5cmRFwQhRRkNkU7HLshRBSygex2E56C9BBkMwR79pUFck6Vx7VWowoEqV6oa4bFX7a1Be7XduJndGTD2xXkLN"
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

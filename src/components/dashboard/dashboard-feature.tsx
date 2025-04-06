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
    "5dUpUzW1EMUE3iAiqpU6ngfCAD4VzZqUEuimXVuB126pktiNT3R5WoStDALqNdka1JPYgDWD6MoEgboU5zDEDhoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQx4i4LYBha6pVbY9SyiuR4Gp7sxpGKa7CbzkktyFo124TvijS9VYWq8MRbKu5MvqWMMagKuQQbL4RsfWHgfrB6",
  "key1": "5TKmcWBVvhpHr31nSbLenKF6GE93CQLVeh8aMjwzqaDZBPNVLSqs5itV87JJGyif2FyACnV5QMFHHuUG5c3h725L",
  "key2": "5Vfa8F9pZrEtq5g55tjh5oMYhkFN67d1MQpavpC5KTmkQ2Qi1HvrU3tPJLskoFtdsR3iX9DABXqVEpAvtoBgEovz",
  "key3": "2hYxUgn8ANyM19g8C3tjfAVWZNL1zzLyp8HyuF4LZ8KNKDSSbV6AMRsDD8kMgciDMXhgqfxVWFLj3dmrStnrFiWc",
  "key4": "2Voztfi1FYCa3swGFyB8ZzWfjeTDtHnfGtP15eQnBgt1nk18Mo7hY2Z9iAAFADwsNLmuqn44oVFfFCMvGQoAzHEg",
  "key5": "49vdNdzzaH4eGntMMvMKnU7adxHnpUYvbaVB5SnmJFpg7pNSAAMmmX9XZmMFq99Q5qkSkBbAG7zYxjA5fiZ41YT2",
  "key6": "2f41ynSsjpYdGD6jQtRhxFkiebRA1ADLPADgT69viy7hLTRjj4kowKhzmTHMseSmARTfhchi7gwZxkK7cECebk64",
  "key7": "4QK6joGWa1zzYjwRUz4BKZUoGqpVuAB1ZpUz5v5K3f4yMmaggmZQ6NxygDkjvMiLJU96xur1PHjnCyCTnNDA8SYW",
  "key8": "2tEPEiY247JPGwK6e6GyDgxvqxawzmCgeENNE2K8tva3TzFSCN9moMmrAZfvUyPhRgY8iQWvgEM6iVbCkdXizEtW",
  "key9": "4TBy7uFDvwqdW9aMe52h26c5xzZ3sp1nSV2dhCt8m96rHzkZeYGKTdLsTwd31L1ceC3oS8coWevFZheKprywYjjr",
  "key10": "4gfi4EEtLPQB5gGvyot53Pofeg5buYUxPw9Q2K7aZj5P6cRWTLWhFbjRuA54AGmxY1M4j87o8eJMADxKh99RitEq",
  "key11": "4T6zcvQQgAuXCtByBGMLC695BdSzpfbAtb6F4c9ruVnPEUmSEouVUJkV4q4W9vvWn93h8w7jStcu7BdMorFvsr2w",
  "key12": "2Av82tvbQiiMgYtn8m6Zg6rXhGj9JJHw3VPxj29ZSLUV5gRXdPuaJ4Lb4tbR5826XKJRUqqcNThxbuyXNqXv32H6",
  "key13": "3tsTacCBtFKitLQeyQFz9ZhT3fgjkcjb4fqM4DpLayxCZAYissTmYkt7rFSAhjWrbRtTpcd6FeSZBXK5AEnwcTg2",
  "key14": "4MsHVNixBebCC9jiv7tFJ4f8uJQcFaGG4xGRHMA8wYJ8umVJSLhQXCztMzJjCPUMcVVrmtoUr6h714G4G4Zy67pQ",
  "key15": "4VjT4Uxnh7qHs4UuMejfHBSP5TwgptQvJzFZos9sTffNXdZgLGMA31VaKhnkBqVj1pibyAKKdiHbyWxDu2Dw1Agi",
  "key16": "3C2Kfsr2ncsrX7nYzriWBLSSMFzSm3aki6VDeFiziqxhaZyn9EHqjDzZWd7QdRZk4c9osrhKVvixWxP3jLWRmWBm",
  "key17": "DbZUDeQp3dGUYLbp1A6fBUpAjLbPtyXxwTrRx5wj9fj6Syx1QyJ8iDogq4ysDpFBAGjHD3HN6TAcuwgdhSFHFBC",
  "key18": "3uVt2MrGtSaawtF59tSmiEgBUuZM17iQLZ5HBMVa6sPo7eyfkVj2ABUfzipnyxuDBnsXoPCmVjxjw8oHRvSyWCfa",
  "key19": "3FwmadbgD7DYCVTt4PZXP8SdLYYvF7TGcrFSxkAiiMMvyVnAGztFBXUQbDMTwZqFC4j6LmNnPTSTA1dMWmC3bJde",
  "key20": "673oCUUFSPMhhFQmNYxVNFktkHyvkdQw5QM4S4FCeBvPwNc4xMVdGk16pvW92USsVVuufjceVsCC3k4TCfL3gEZ",
  "key21": "5wNX94ALEuHc2o7tG7eSjGhxbBQBzqocQGn9r6UqYQkS8C3dj7SxuBFdUhuYE7ds9Hg7Q1rnWBed2w8jDxXZZA7e",
  "key22": "4gQMH4eYspWTijjqh3ykA2VV62dQuRauQJFaraC8H6ndAqyp8JcK2Bvh5KEPNN7CXTwg8XxiWp1SbhLBZe7wLa4y",
  "key23": "TZM938G5ZEQHKmUF3gbyPP1CcUXsEKMXYJkV3BezUrPVAmZFteVx3VDTY2ejskVjnLSPa4bZKJ5DWeQh3q2UkXK",
  "key24": "64qnnbNejgEKBGMXw6NCWq4W68Z8gRxLEvZM63SC2NWYkJurMSNzo3mcWaRDFQsoiBndz5JKyqWZF17Rs6ZC8u1e",
  "key25": "xJrkocZUitJQP2aBnZjgKmDniW14Wkitmpg3kRo8baaAG4MaLZ17a7JYw4GQFJ1A9SPhTsXmeS86YaxAYraobju",
  "key26": "2b3TsTcVSSmoJshwWfrLpH9oEFKuDX9XkMjWcitjEXrjP1pBQySxJVfakV9SHzR9iNYRsCSWY3sX4qjnxMDvucF9"
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

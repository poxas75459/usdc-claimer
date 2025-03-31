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
    "2HGjM7BAcJ7KC8ApxAuWvVT7pFF1d77BsenYdNb2zWnbaLasEzWLFEk3zkxfkMzDGopxGtxMKMLsk1fTiY7Cbp9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jAEuk8tQGwRT62XRwV5mHfb1BfP6VKzCCfw9ok4bG95KrL9KGL3rhoJpXq1F2ZTqL1THxvEUAUS7T8P9ZsTfQCd",
  "key1": "3Hf3eY69uaJteWxqA1oJSVfidE9yD1Hj7wvi3FVQvb4kBwnRSQer5BsRuvGdzQAUeMASXsxkcM53n6bXSkE9XB11",
  "key2": "5pQZiq8kChspPQss6LbxmeYy7EqLSH5oDi7kX4iabvq8TSygL4bj5rdEnuPV1m49HH5XvxPyiSB3KxzVy6QeEnbV",
  "key3": "4YJgGhxSRhMz3bVCv3ZNVCgqH8FbBwiEDHU1jdJRgFABHGQ5KdVyjYbuvGavnNGLcFzucXf94u4ZAWxoGhrVPqJo",
  "key4": "4QJzciTkr1sZWN73aWPZegifqQQ9u1NtzcSSvX9DXpcFAuCdD6cDDKpSCXwEYuGoHSmrbA9iqwtC6LbUJmkYkXQ6",
  "key5": "2iWhoq5o53uUVhCq8nuaz9dAi7mS8SvMh1wsrkcXeqwxHYB3B2dzp4pyAJb8PMoho18xCrzUE6mPq6JqPVb1WHEc",
  "key6": "eACRvXeXxcGBLEZScXQG2aLDHkQCwXkn7nqEqBK6wPBVHMJd3VhVZqQDGCKoRn81Ue4dty9YY94y8zn3gUGS8no",
  "key7": "2KCvossJkdb2XHC5ZRydxUy1Lg6Q9T7B3B44sjfhjSz9SX4vzDR7EA4u1sZnvsMpi2WnmomWm1SaNpXhfuyYqQcj",
  "key8": "5Bqzm87YQeajJmqYosaXTtUSrVArzweikbH1Ritr8Y48fx8zqp8YXyZagiEJTr9GkM6hv2P6rcbE8QeroVxD4cFS",
  "key9": "3qbtodFWTQWQgMiukFmobwf3nAJbtFVM3ikoPLvzBCioVPVV6GBWxoLRYp3s82zhUNNpDMznjRqEqaonkqDtAc2w",
  "key10": "51ELPiuiY85KrNWfgWeQDQYH5MaFjrWcjBWBUo6Go8Apf71x7GWMaSmM9DLyYKngNFN9PjyaZ1U4gvSNUWwziBHa",
  "key11": "5stvLUkQYKX7CNGkbNbkgHbaFRHY9qrwYTC3VvGCC8hQ1Nspwms2pm5uzJnb2mDmDVcymGwJtTx6QpfQZpTn28rH",
  "key12": "2VqZZsSh9gyBgd3utTMwWQmAsnYLFSq1G1qRPCUusz4X9SpWZDdN7CKdtszCEvABFZ8NLE5FzgykrRQbpEPXXrkB",
  "key13": "RCxzZ52NkPSRDdsqQNP9mETJnPb6DCVbE1YJTA7hAgf1d7QPQAxW2kqQUAjknWxFviMM3LJQeGTAxgwSKrxsEFo",
  "key14": "3fc213MoLgKwzFmhDGZPUT82GmtWkpCSsFBxTrcNDc5iYrcKg6ftYj3BpKnU6kRtqeeWS2VrJr6TbqUQvJzWvXBj",
  "key15": "8wqPDT94fXsGP2gCcm6qrc92cjPd7krKkfdQHjoSBnWLCwbUwCytpkrb78Xt8wypf1hEjvWoBVkSmj7ZwW5mtFR",
  "key16": "3MEApoJq1f2nV4LPB69RiW2nfevdkorxBJMsA5pBzTJgBe9E6gewozBC7XBKswL6okqAFwmDAUW33MMQwjkyjumj",
  "key17": "5kVCoJK3FjnDxtUpRdNoJwTXHdtBR5Z5M2ivk3VZ5fpca4Ag9HwJaUVDzseNohJJXKifqfemrJ15nyLPB33tagHG",
  "key18": "4hpvPnLTr5SiU9RqsavAzjJ5rxuSaWXExFabdKuC3e3J9YgvTHriAhHcCVYEKsZNEGsEDBLSB4tehhqSZdHgqLBL",
  "key19": "QG1xTXv6CZwRuCNjL6zsRYM35nb2rByCxBoCo8rFjTyaF1LcMAFEdHwNoQmrYwhxqn9DQ4DE2AELj6m46f8JZh1",
  "key20": "5cgUnJcRievtu63LF6xiFM7SPaaDUMGuyn3TANcXCiJkSG9ykdu4JCikUHwhQ3LpLCMApsoCvrQZtbBVhke1D3CB",
  "key21": "2Dif6VgPNvxnma3oQyRvC4dPV3xBpnnRk4MbbWvNtHSXrCcNsomFBwAGDDYoMWEs4BBFaqFZiKoxAmSmwReFsp2N",
  "key22": "4AAfzmGFnb1wbpgyjS3XzZDZBrtwfAx2YRR23TGnHe4W9nQGbMmbtg6pbYqEZJvFxmyysJ1V6PrVdW44m4WjSud9",
  "key23": "3iagQtUWv6fGrWk4oFGPALFn3oERVNJPYiaz7dS46hWotbZpjh4eUoaKbPHZYWLVtM7ccZa8eG8Eb4xN6m3BWv58",
  "key24": "5McdSSUW78krbJhjGsSza1GUDvnuTnJsoihTf8U4rYRpnVGJXCtZgdsoadwTGHBve4KN8JGGh6DhD92YuS8bPfCh",
  "key25": "Miutq6cXJfpbsMC2B563cGZD7BAgiaa7bUWjwFG3TmZ3wF6NJaRAQyvsyMvdn4zuic8ABExLQH31kr1JTvt2xoa"
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

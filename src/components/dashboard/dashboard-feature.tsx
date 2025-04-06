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
    "Nwh7YC1gtNy5mXVzU8NbQh4qErmKSGmau8F5phN6WbjKLRQXZfNJoLBttbCjKatz3wHeAQayocUGADyKjXx2Chk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gmrqn8rSq6JYbdSoHkCcEzLicxJyMB4c4pYNMrfyqXtQUzUzU1eGWdSyTmbVKKWxLnkRzAX6y5sj5Mn5DpsrnhA",
  "key1": "43wdaQbRByAkn11bwWNsAvRA5xxNiKUEcPpxx4xHCxtaSenuAPLUEpvMJiSn7aRFVXLX3wimd3angoA85aCLugkf",
  "key2": "3x4KNbztZNzoLxr24uPnXmEy5cYsNqxDhhCs3ofBujEKagcGFaxtf5gxGnQ5UsKc58t77KhjVM3avmWJ8wj8ENDo",
  "key3": "2fPMmjAYmoTHHvLJt8rVftLfmzPhETfzcSjSBS65DWN5k1dkexquscmMmu8MqV6Yu3NsSp7kADcvGra46CfugDSA",
  "key4": "vLHRCorgdGdUs6NdmMcHrW9oesPD9xT4xTT93C96XqH7bkATBTABos3RW72ZA5fyrj542oye7SsKQpkT7RyxC3A",
  "key5": "2JFFwFDRpcXpqCgE4Nn3GK2GhXxNA4TFh8vkzXXDCUKexxGuYGojEyx9c7hfu2d9xASs9WziNWQEZRJjmdXox2kP",
  "key6": "3hupLm7hbGmXnESvJF3p4PkvPAEKn85AXXKqWwJDGT7YR96jkGvHdq43oXmJxt9bRXvah6RGSiBbiYhCMLF1G6D1",
  "key7": "54psziAfuDn6PEFeWKwk5oLrEgBtejvou2w5o3S7yQaf5Swz9KT5c79P1BrTqNj7X8pvwrMHxCUxXXMF6Nmp4Pi2",
  "key8": "4ttr4QfuNKugYhcWxzbfFaqHRB4usdjcBxpp8TKYT6N8KTfsP5rRw5Vquco5JQAQqzLJdjy5VBYSx7nMs2wU1QoF",
  "key9": "2MstcTT7sXFeTiRoanK8ub9mnwWPgHbPBF6HQaVtMkh4B22UfsZHyf8SoLexZQibburDhATfszWjjQeAzKN2Thm3",
  "key10": "527aCU9PR2oUwW7khQvbyDyjti526txXAgPTvPYUChhJCSzquD7F2ry9X3kA6xkCRW7mPpQWGRq5N1Mb7XBivbBm",
  "key11": "2VRSTCruJZX5oP9X6TbMiDvipiw5b3H9Eo5DnQ6MamMJdSR7vGPNbopxijPdFwsKswz1X2eHJ1mDFpfngKbzptam",
  "key12": "ihcg7MsKVTKGbRYYdp8CyaYqyNdi9PACt3ceFK2JNHKZh1KuMTxbvBkAgY6Mt2pGFLYnxSGqPR9Aj5Yd9gZsG9j",
  "key13": "c8kMZW4a4PPHhz3ZTDLRwFjAyCDeP93XxY2A6rEwTcjKbYLgU8LoLf2GewcpS4E1PeF4oFbsEpj9DrjFHX5ELJv",
  "key14": "67FTABGtNAMYrxeuMtsxsyMWqL6SoiEPgovyrEXLj6mdfjy6DMpKNFm37nWN18g8wZQ1nfcUPNH3niVzWopP1Y1Z",
  "key15": "5VYQmSFb9kNyBayws858fCX9L9pCiM5SaoCuz4YTomDiGLxsur7YaXKSz597Hz58UYx4SDsEw1djMvfZsma4WyQG",
  "key16": "2d9dixG1TrdD2epx5jkTp8yCeY4MYngqdEeCPCSZbo2DNXZT4PHxjs4nWGQtk5UC5zbLjRmLRjyEPGpCskcQ22NS",
  "key17": "2NVWk3GXHCAa1NoY7QRtsfXjqLwxm3cr6qzHBX1Ki9yMXR9rNhLdZbVAaqes52cuXhGWS5aKnDjCXZ5sFqDziXUK",
  "key18": "5LQvkjM2Kj3CrsTAsFVVuyf3h24XuZexJz9rxi4TkrSeZADpDbNWT9kHLhd9Bj49hNMk6uVij8eZiY1gMWKp6DyL",
  "key19": "2LU7nVsxzmCtVmezEqovUxNz3CUA4xH1cQG3Uwgt3UxDjVoSpTzhmzVFMZ3X66YqBSi9MJ8Xk5e5bjpUGZk9u3zL",
  "key20": "2DPqvGszzcT6w6Y6TKDoVz7vMXyVYra4M337Gt1SpVGnNGpV7tEpAZtHDMM8CGS8E2aFkguixp8fLvM29vLULsU2",
  "key21": "5KH4NYqAWuttJ2cc2qDJQY856RXSQ25gG5RREThW5rnGuqLyLG6TzfXa6UiUCGtYebicdmk9wiA72DvDi3KZkQQ5",
  "key22": "2ygkyUUmEESqNttnt1YnGrYnNVGSm5hWkXPW6FT3bws2NDFdnxUYDhuXE2g141F46TQs1ULQfFFP1DMq5BtZR54p",
  "key23": "3Mf5Mbwy84Tvu1NyU5Dkk9mUQewWzX9hKKWf1KKsf9AxDVzPeztwZPSsApmcJKtzSdCCik2BAJNnENNaFooHJFiB",
  "key24": "4kQoyQ5ajcsnft1a5hATZa4wWmgSDWoYB3bTztKqZvr4koRpLSE3AtJWQmTG4c3dsWg9qMKbv6bXM9kpHwoCD1Gw",
  "key25": "4dm18veR89SmUZinbDd8BuJX2BnwKdy5JPPndAnyaKVdbGJsB6e9CWZUL1ho25zBnsmhL218ctXmBcsNncWAzUg5",
  "key26": "2hD3fbbvFBN2Pn85AtfiJBn7hovPsg9pdGvtaJte8486uPkb68kunMnVXrfnZrLFiQtooWFGKS5EpD7uAabjGLg5"
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

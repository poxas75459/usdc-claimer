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
    "2K7tuLw6LfaWgABJHtKcgdG9ajv7614dGPe7xTy5tVuLshkComUFZcYohEBG9wJXmi1D73Wuagp1toRZ679fZmpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c6pGsJmFZCNQDFnwuxeg1b8wozQKUd76FPjcfZXkcPQtvEBCxrefPD2k2HHNTV9efrG7N7Wju3G3r65JXAAruEZ",
  "key1": "4MvoR9V43gmcbykpjVvL7wL7UbESCZ6fNUVbPVDxBaJgFv3FM69N7V1sMj9fUuzdbapiGq2HiN6BF5xfAfQpfXJM",
  "key2": "2C76uQaGyeU4a14pzHHbL6n6BkUMcThdL4n28YrRaqnaX8AZYNxCKFDXMq6T7XwAiTCV6Ppef3bf7Y5aTgrxJJAF",
  "key3": "3gpZEoXjLhmb25ujbTPQDawp9chkn2mr7E5Qv4CWxJHnPRF91FVDfDPdJ3KHo1FNBNTTx4Gho9JpaPiJpMB6aeFD",
  "key4": "3oa9af4DNAaLuaCtEP1gVAdknwWUdEHzEA92hbjbu3f53UmE6fFMeEF8jk1zCM8csLQPh79FfLcWa7wmBdi84wRY",
  "key5": "2JJytQfqNegNhes2K8Ze6rRjZXNEeN1zk1PNDYG2fuZH1oVzRSW63ddTpS5WjVhR4KKFCuERXc1QcWn8SLiGjcBb",
  "key6": "2YuXQaKwBtN7qFh66g5txp3oBHjB9BPZ4i1GRKcoWfvanE2WXP4eWMpH4Mpst37gfd4NKxdEHq758LrcSxmNCFRq",
  "key7": "58HQJ9J5TtA3MLzptQ4RNRs9bWmrJTsfaiSHkzGFxjk3bzebRDbEfK97pEE8rB2mqQ235Mj4tDh7SQx2fMqQjCZd",
  "key8": "432ZZMHfU4bUha5UPgwBQwdy8q8fopV33Q7Sy1PAdyZtP5a8gCmwkxUR3ZxbDnUegF2PDBpD8sAFmKH75QBdaLUY",
  "key9": "2S4SYd8dr8wKbWNemeorajPTocydy37TCVicwxEAtEc9hh7xonJQFo7UCyW2vWeb3PrTpQDEqtgvs2sWVmN54yJQ",
  "key10": "3YSzejWoh2vii36bqBJjqCpopEhAYkYCGg2t4Y5wy4CfPHxT8CCaWTF99Fbp3qYhDHmJK9B7AZLH9M6vPfsnkfd5",
  "key11": "593PFazE1GaCb69UesA3PKciKcNaNKm1jSXLayP1ivXUaRd8a1Q1vjBpADaU4UbMsYDr4MJB1JWvhKpFTp4aWcbM",
  "key12": "YeaxtRvM2YNBgAqCdaUQgq9bmCAJfuDMLsREQWH8kY89MzTPZMovksAWYBLAYdZJR5sEgfqwwKdsbNZX8YJiSiD",
  "key13": "5Way5x2zemRZhwPBVzBf61jU5EMTw1KSnGC9NDTxRhDh2iU3JgMqjLwmd9ecGsE167upaKVo3U486HyXYWynKiex",
  "key14": "5M21gKA5sovwdmTVWMddAioBYcTT8AqdruoooMs8PTBkxKX36tpsHJbfGkSjs4obMyrNr5rbyapGwVmqiA2aAmCT",
  "key15": "CgX2JeVM4FdsNtHSQ5xrwNdNYMGoHGcSz7dVtGYrPkBJfiMEjvEF8XuM8nejnpTq889r7ziZq8uKBmYp2dGhSmM",
  "key16": "3okLrjsFzZ7kzupobWZbmPABVhrPS69kC7NMg5RZgSgRK3jCpT8za14xUVnWwpxFRrtoVMnxycxfaajxrcchtVGK",
  "key17": "3kUmzAedimfwenYwgGuxtt3AtLJEe6MydsPxTVGw6pqXUaiCrnYmNoYZ7FNgDNBkB2FtRozeUxLEfCU2FYTzKndf",
  "key18": "4HEfj7nRSJjsxiRuDpGC7hkvzstttYj9cyKhTYF6zyu7cMfcQ2jKPUFABCgWc5A3KMknhZjFaP6bC6SUgL7SPCMf",
  "key19": "Vi1phDiAmscWvnJzA6LrKuV7wTscKJi19AHj51ueWq4WEzckycB25YanKRCUMU4Y9Qdjbh669iaWLomHPedVihd",
  "key20": "hN741CoG4Mq9Ajg8rKhF1VWrfLz7RzgwxWwpkT1G4mU51eUHda5KPTKoiNzPCiM1rxftXT1zZqezxxjqUdQj6rQ",
  "key21": "5Zg8b3ZfCDuUQ7ZRXpG3uY7pCX7ZRFxNDawdLsVBammKC5zaMrdWxcZJdr6caS6qT3evDnXARZArapjBQdrc5xiY",
  "key22": "37npW77wnjpMJfVeNuRBer6faJGdXts2RCoMtmZUGoqnd47yfeTEe6Pp7VjJDd935dCXp8AGNZPKcBRNY5mjwSti",
  "key23": "2LvLDxw7Dn6HpDuqarAGNySWe1NNxvrN4dXjGWJEYexd9A2jv8nDVAxc2zoHqVLgDK3HizTQuGAqSTdVD3s9ShnT",
  "key24": "2dpuXJHen4nGQpg79QwYKMYmTnYWQdXVPu1eMw9iiy3B7o98fVowUoZwH1sQsgocxW3GS1FkcYmPeC9RYDasskwr",
  "key25": "4bFVoLa2kW7oheAZRBfvwgaEMyXH1S6i8QwBFs7qDVQJezVHzRPVKRaRDzB2rBWJT9W6xVhJmwQd9uzKfxYoZkw9"
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

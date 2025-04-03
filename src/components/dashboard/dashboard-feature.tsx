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
    "4vK79EoyZVnfyEZ1cxbHxseriNm5MDT17W89aG9XAEjo9ZAVGfQg1r6AAemm4K7qX7GL682No63VV7HrN8j2ZZTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y8D6WjK3xb7f35P8dC4XDucXcKUeEbJjCH9vCnfF6piMshNMpPcZ2tTt5vACHdaPPbcXDSYjNtsf4RMudVs59d4",
  "key1": "41tfSkDSZ2Kqmgk2hnWEarqGPn9YGuv8juzFC91xsraLsm3xhkhquCK9q7tj937xGyxvHoFP3WfyH6EARUx6AYHK",
  "key2": "28MB8a66evNPoqFsXSG56aeVWmBjK63Ux11qRvfRErmv9HRKoF4cyzmLBFsrKxEomKbzUusNC6rbFm1B35SsERRA",
  "key3": "5EERHNfuwvVcf8ST61nc4E6t5w8nu6z9TVXWN8exUNWxZ49pXCPk3nKAnXVH4qUYQ5QDVEd71sQnfzg6vjckhBeo",
  "key4": "4BaMDn1am47UrfJ5cQvY8eYxQeHH3ffnMgGUn1wSr3ZCJ1eH3GjBhRtxeRvDCYhKHxH5HawoMwox2SPscqbvav6G",
  "key5": "gBJpuqMpDhS9TH9bAAXJp6AmLKKAEkAE2oC5dvksKx4RGh1zVLchxRMq89GtGMSUwVXKF5KTHBSRNb88zFqPWPf",
  "key6": "4aNRze7dfD5UDWzVNrnS4NrfSieExKc8nKCvR6MoeoNeZqbxsUiLR3My7xgGza3wGYjTNdbzzBrTuK1Qu4fpkqaV",
  "key7": "4w9G4La5NgJ983Z6j3A74ES5MwtxfC1syns4tSAg9x13Q5MR9AhG7YdwaMSUSpj7uCqoatRjC7M9je9zCknE9VVj",
  "key8": "4EBfVXx38iP2LJVjS1h2ENrmXZWhKAhYcaP5vvua5b929JYo8wUjtf6jvpfF4nC1hugfz2NTtjzJuqEBEsdEMA9k",
  "key9": "2LiCPUXZbqDzNt8aPhbRpsrD9gBcXH7jWsfLNxy6MWiyxapWPdxgYyhkemacDgkg1gYB6rtQi4KeptbRPjawbi9Z",
  "key10": "3RJktyh5j2ByMWQKEhjzheNppuxBVRffX9koMUvx9KBSnowR5VoRLuUphra7uPNw7PzoC6da6Rpr58XbJCWRKaJw",
  "key11": "5dKRFqmzT2hXx5z2DfadZGsv6AwqucQHHHwPfeqVwFDGG1JCyoDSRV5PBPB87L78ZmkAuzaacGe5rM18LNqBGEct",
  "key12": "3XqEHibSgvWzfUjpFGsgqophu2Fihy84PbNnqssyysCaXNidiGPBWSiW7NQBs2iTEfPfNm5ZK4KMLedqCdWjZzRE",
  "key13": "3HhJUkVFjrjikeTJEhRGhKTiCsC4PHByPZoUgqChaSB6zwg2RN1cA6Sm3tXLsxcwJNQZ3n1QZPQMcpdELaSYS9So",
  "key14": "3dKjpEg4Ku4V6CXRtEbzKxDaPAggbAvTLLExLFGENsC2qZH8yowY4mE5CNPuC97HkLjsQ2eEAUykmyjcDDBZU5Rj",
  "key15": "3sYjH8uZaiV4DGFyyzeHJVK4b2creaSsoAPeHMGh9SPmzue15BtbhsBYdXcFRtAH7zm2UprCPy6RWk1TYqbQFyXz",
  "key16": "56irw3fEsmoVd7EGpWSuCABy2Yo2FJQH8ESzxzhLDb8aor4xHV8UMkuAbwN3uiH27U1oeRuznSFpUQXNFitxtL2E",
  "key17": "5vvA3YuQ8tfp4aXHEwgz77q41MeTz3Tyagzo3HNuQrJngkXgiEFM3FcdqCsbetiFK1NFWxRkZM8KamUH7NZ1RYZq",
  "key18": "ZQZUoeCG3gbMeEFsmar8nLcKUVZNr8soBthKDWo8JznQv84mY4xMYDLsti9Xp8WPZXH7XWyaw45sXLGHJ56rfrF",
  "key19": "34qFLomNCoqmr1iLtAXGAXpK3X698A6w4uxMfxx5ctMp5EtuEWgcDfV2pQqHiwDnJ1ncyghaZmbgnS4BDSonNaMn",
  "key20": "2yiTpHwvdt5tVp7UQp9rd2nVuuzKn1CbbVhJNb1xuAGiHMEU5grqovrrPJM5HC9BwsshF356unB7Z6bT5pCJzB4p",
  "key21": "3gBAEGpezFw66NnbnPc9G11aVpURw5ZjoVVDqjSunxRZoXMsUm9BSkee1hdfDbkqdFPPT5doT5pHMLS3zbiiZDP6",
  "key22": "3ZqdjUCBehckuG3po5fooNVjmU5FDa3e3r6BJpo7BumWg5MmyRmh9vNUer7Pnmi5Kw1Tq19rLksZaeBy8B1utzp3",
  "key23": "3NdRcDXKeFHzttrnhgrS1UQ46dGSPZYUvmu6HnZRh6mjrGtdy55mvcrs397rYt1mzQQGNjupbfRh1PuqhBBNWw7G",
  "key24": "4VTXScY3AguBxz2oMNs7dR5w1PrbzFRVrvVp3M4vQvdasfy5kCtwdW6yb59uSjQDhpeYL6k55zd3RXST3wD7PtMt"
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

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
    "35dykD1WLFokzCb5iRdg9gCmCZaXU7CuL9gdVyQtmWkDATVKdmS7AATfmog776CMvwwqKWY79od5UudG2TkN4DEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VoSesgdnDThCiFn6vHzWVEakq8qKXE5cifffFdVPCHCcJiQYyMMWt4yMqCtZQFqyxHFLVeUqXq3YK2sZcTWFBaP",
  "key1": "wa4peGQAcSsXmb9S5c3FwRRYPfL8UCZita5krzszdDasTdwZXtkQUwXyoWnV7zhpvXbDz6SZiHbDGzcNd2pN7oG",
  "key2": "29J5hWVxpCWhwg1qM3FP8ETrB5UCarDPHMXaBJArRi83tptHarKp4yzHp9cnQN9Jx1tuSsTcdzhJSeBmK1ync2x2",
  "key3": "4j1BRwuGz9bpzXhk8ANRqVQ87L4P2dtSZAryNcjsJ7bLoK2Jspj4cciRAPYF2XaXhzXBWzBb6ACph4WYi1w8TmRX",
  "key4": "3tDFrR4GQyyUKgwzD2e35t4uLjcJ5F8QW3ZAdKysjzHc6j9rcv8msLoS2AVx3kZUzoF5oRsHcBHRi1xdxSBJX29g",
  "key5": "5QfqN3X6zqzCRiNBZYnwbG4GgFv1FHqasLG2HFeaEAee756UBFgxoyw7YCaBqit99oGhdybohy2rsALzE7iGREg3",
  "key6": "7ombiLbxPJTDiC5g4ta5xD4HGHw8GPq5XQeriLGqdV3gzfphXsCra5zJy473mtBJU4BRb5WoA351RfdiAtWQhg6",
  "key7": "5pDWataf7w7ZYgVrPpcPLMstULaiXzCj83rxp15oFVCJJQQttW7A2YRpDwUqTyHrUQFz4PaW3mvWc9LCj6bdWiJM",
  "key8": "4wjuMSR3LdxNd6uewZDswcdcjXMMC9VMt8rjCgmXj9BGm3upDw4u6mndZXBqQfzJ1hSP75sFN9A6171exSss8Lfp",
  "key9": "2KymFRtkhUJdkD6nmizpZ6quygUCcgsqJoqYsNYRYCC68sP1Zzmyk1zNQgDoqbthUTrYrZJtn2VBKUXWot5dCR9W",
  "key10": "3TUV5YNcFg1YTR88HspmPVwebrYmorW8LXn6SctQrCUUEJepjmY2A1vxWChsqGFLbigiPh6XzKkswrHfSS7yPSLH",
  "key11": "4b1yXQ9a5C4PdkXGNFAQtP2LW1rHhp2azZAne2YDRYS2KRYakm93xohrB6bgAjFcZ8KJpa3Sp8jbqeqf1vXyq25s",
  "key12": "2dSfHDG4FdZTFzgDBvhHZXMwCnwrwjuDYJH3DnXZWcbjTFjcVU8LWJopoua4gByAXNCBAbmSK9GxpGKqbGTv83H9",
  "key13": "2y7xwvpzaQqTE67vwCGqRuzzqoY65THREAj7fZnNhuJXmPRcMcrJjHT8SUpX45wqLGK4AizZa5XbDaB7uvFihdDK",
  "key14": "R8yTtE4YtGYC1Z5Zacc86QzGygzkgUd79eX11dCtqrhm1dJNRjMbk2cBiYSUPFWkYSKkF8W4mVukcDHuCLWZwM4",
  "key15": "4abPM9p7WBa5DXQ6fcL1Bx6qQmyNQqKr8FcfrTty4GhABHyWYsfXETBZFy55rCGCuYEYCZ9vZtxv7QxKmwENeqyg",
  "key16": "4sbKBccw3DcXEWguFrwZCT66Nezoiq8FrM8AXvwsG2j6M71osnKDHsRi61f8iiRmkMtVuomZuSU3ZcuTvTEaDpFU",
  "key17": "431L9Tpz7R7mB3cv3y3AKde7chPhYyAaAeRyrGXi2wbe76H1Cgkay6NkGuHDsX7fVmt41VeAvrmn6zHZiX5Nb67t",
  "key18": "2Bj7xtgw6PBpdWvaDwEfE9uu9Nein8a5czDv5bXUHZjKTZBFr639sf4re17D5Gvpiu2Z8GDXeEG4KuUeod8Gfupq",
  "key19": "3bu8EJZUkHeMXMTuVx3wczxFLoRBcUyirakzEYPRmkcrsLmoLFRtHYTqJycxCTHP64EJTT3mSAMk3oyR467HRjgH",
  "key20": "5oLo4dfwYvXpGmgBwDqjVbAjPZYWJwfwvEHQQh3LvDsCuwEvxwm465j926H4sQD3pn46K5VgN1e3kaZgob4g2P97",
  "key21": "2n7EBE3JFPbTAExBbNhDo3vM937ce1CkAoGoRFU6UZChRJ5xvMy4JbSd17Q79kevW3cA7TvTVaaooNN1iVrGZ8Lc",
  "key22": "2aJkRkUu2anWiUKi9f4Q7zQhwxdPKFnccjFfa4WZ9LJxKeMNEgDecVDoQyKUhGkz5u33hdv9NyyWoXQ4nnkJFyKz",
  "key23": "5LtGrnfoa13S8owkbBDpU4xttxDLPYb7U1dmGzUDeBzfMLCan5G4QqUc2fofEm2K9rQNxQQx5e25MS2tH3Ggox35",
  "key24": "5fC4HZHHHsXFDhc8MWaYmALQ9qMeknKHVJ95BFWEucGAR2sWvT8YV3MMgpE2EWFhbnbZgAngBkL889Y7ZWg7RzJv",
  "key25": "41JE7btYxnq3QJaspbCc82Q3Sbe2tcdxza1zXGD7F2mCZzATKnWL12ZFQBo8ttAQFhrYbPfv6DcyFiLYum8HNtmJ",
  "key26": "4uXD4BzATLXVY71YFuRQws79S6BEagUpSasWyroCQ7gqFKWEBLAf3R6gUcyDnDa3T5Kt1mhpBX9Emy112DuCuEDd"
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

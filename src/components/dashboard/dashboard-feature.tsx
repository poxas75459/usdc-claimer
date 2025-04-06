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
    "47q8aWDkNLXfezghNeYjAieMa8Zte2ej4j2oYzrRC2ANQAoZTGPkouAS1ByCytj1pVJsH9NixhLGfdwxtPpsUo9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z69b3deKgCK5c2eVU3y46vdv8teeZWtcVpRCQStKxUr8qhLMygi6H7bWJwAzMKy4nSEUJifrZvegQSmXrZnF7G2",
  "key1": "3rjt2oi56rnuRApG6YKUU4neG8t24xQ2EGf7nBzkzkfaNuHvADa9u3tF1dZzx1dca4KM742PNz2DBjXkG1qo3TqJ",
  "key2": "2uXu9R1dc5GVQ8tvPekGJQ2U1SCHVszJ4MXcuN9PR6Yiuh6W33QV2ruKmd2iEfsGdRMrkXSD5NyrYaCJzdoxgiAn",
  "key3": "5sxhaBA7iHAq7PhCCypxEM7SYCLWmGMavwceYEnxcyDjLQmnSWsdfDYQ5QYdbPUZN8YXnwQPG3JC51VJBBWXcg9h",
  "key4": "4P8zHxmFD1d4JcBzKEzAsoHGVuwbE1ewYKCJSrdCbaYuy6VBPZp4MBEaTWDqSNEH7Esy7ubcvcQVyG2PRbZFRPX1",
  "key5": "3iZN8iHNaMVVb567NJhbupKXvVv97agZRwvdoFibbtgqDJqrSnmfpFw9iqxa9UMt9hia82dfRiQUQ51JC4SDwHxp",
  "key6": "3KTuzUy7MXMgiq5wfAZMEuchHB19bCUtHJVtmPyns3b5Q46YsTSfMjGrrsh8vvsiHG4quuBKzshcEbZezn4Re9fd",
  "key7": "LXmGmpzudnYdy34eRiQmtcG3Vov1XWWTX4edVuta4oLTLZCac8ufBTowvEpaHKC1QE3r3YjxkoAXNKMMXV3x7TL",
  "key8": "jhJAXPxbD4AEUuj8BpeGX6FR1UxjN4NFf2CoiZPzwdJx2FCzFZkaNqdfAPi6bwdeWvE7hNPcGpCyuk8PS5FNBzc",
  "key9": "58U3o7yKRiHw1XKa56HN3T89A3bviMc3igWJYhPKYiUhJQu6GHAe3NssL36KQN1XyLeU25vmJg8XTipSS7oeCgBg",
  "key10": "SbLgaUQ4gE6utq2WZ9dsjKhUGuhR43vNPNmoiZ2x37zu1NtUcUqRJokJtKf4btNL3dHvV6iLbwvxsoyRk9pJTPs",
  "key11": "3tswtJUrZF7GgWE1Ve2JBr1tP9Zstqb31f8yvCnuUADyBZdryBUedtkM3V1Ynv1mLtZBAZcDeuxpDQodsC6eNqgh",
  "key12": "5nssmsUFqGXv1xu8AmQVP66T8RUcm27FbvfxvvUkMEDZyYPbEQRprLAvb3NZuk9AXifpmT4V6eHPgh873A6ojotZ",
  "key13": "xZWHh2cdmq1t3K2KWcwY5VEutQhC6mJXFX5EVvhMRvzcLnsg1V1P2BPzCA4TZrKc9drUqdBn8m2gfrHv7zYxQ6P",
  "key14": "5oVFW21aN1hEKbTL2FPSEuX1wrFyJFUm5YQV9qgYdx35j9fpGjreJYaBzFvcZh7SkeP3UaaS3Lwz9zcmFuhTbGTJ",
  "key15": "UpbBprvWuaNo8aceBVxm3LksgPbCfUFmPczLAUqDqGbPBF9TunNxGfT1WiP6RfkT9jNSjiREauj46RWaETBntR1",
  "key16": "3KVCmeAeAd3YuZXku6sJ2wQS61rP1jHtMMMWWaHrLCxAB18NcAbQDCGRB67FeRPAjFXDRfAMyDr4o5nz1VXGdYMF",
  "key17": "5ZrUFS2T5HnZJr4z28HTNnQ1p3QJ5ebigMJwAvFmo2P9ocnZQkzQCk1kdKuLCHfYAYXD9dX2hxLLxRGS3HvVvkvz",
  "key18": "ghYH9z8DgerQnH487bpqK5dcrzCEgFhZciD2wqrqT9ah1W2wuucXwysroUvrNSKXM7TPYgqmNuSSqn2WSTVNDuT",
  "key19": "A7MNW7s4Ex3guJYnaQbo3Tb81vduyUGH9JWzp8cmtT7vhhBSr7hW3rdg2a3LTyY1cbghBLgqfoadduBFY1WiT5L",
  "key20": "3ai2ZxuZxparq11Ty5Zu6iPSMJFwS7AM7B9br6rsPB5A8H1u1YjLyFmixmXGBbRAjinP5LHVbGpJqqjJLYtuQruV",
  "key21": "5zLZrbnEBLjFqN9ewrn26b67yKXrJHoX9BLcfNzFQtsaSVDSw54JrosNwLuvN1hYwUyJKsuogGfcifBeeWiALbLf",
  "key22": "9fVw9K1mzVJ1ZFJaRzRCbiM8HrPu4parSm39HdQr5vjzVZch7FWGmsDEQscioYY8fcY79epp1B2V4SgYicveGwU",
  "key23": "38fuRKXvXWsBzi9AHRnsWgC63Gp4G22SSByCBW1PysEdrZbhqzrSgaYeUko9b6RDhzVZfdBzytSNfpNevf9aAdNc",
  "key24": "2rnge6dCKggiXiBXxM4W8RCiQE4DHdwdQp1yj2u9A3mv4fAKroCYFDBJa81ZejYHgAQkYygiBGXRTdWLhpj9M66P"
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

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
    "3epSVB7BHU5gA33ntosVAJWB7oAgN5ThnmwZv6mpZzpsg6rEEMCkM61pkjwMTEbYxyKBdSFFBuACX4G7jQCQrgoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GULXrxpBfEC7zSL3JCRo3PzqnAbtcm7RWZjNPS4MDD7Yp3RTVC76M7an7rdcNXTPtEYj4SUP53P8UTdPQCSs3Hk",
  "key1": "3JM5erRi3cwXV5Wh3f3NYLueMRFukjkJwxVCZm87age7nETTdixAdmc4iEqHxSVYs3MaYFCCLLVxPhmi7sM4Aw2Y",
  "key2": "Cckbf1BYKVNWHCKK2Hk7YYo5zUDZyGD93EFFvhHFgVqV5k8BWUCHQ7eALeXMGCr34PfcQow4bVBbGn542EqFLH9",
  "key3": "2PxxP6Zid1g4WLuRBj2tbjvjWtbQymAUrJ9dnfYPH67KmRvvo6gemfknPu9aMrnXB9WhARawUuj8b3qf2ssY2n7T",
  "key4": "4Uvshcgcbh9yCCAxekUB6iTEWnyWAh1TX7RGuK2PvKcaMuVM37GQEzjKrd7L4bAD5MqDB2jKUcFXMmaffSbMUZFc",
  "key5": "5KCkX2hyo7TcADHY9xb5KSQtTmy1mf27E91JB7jsmxhgGcwgwhqpm7JvXbwV4Hyr7gyX9F21jUgXg5TfGeHcFCZ5",
  "key6": "43pEd8k5WbXE3jGCLDZNPDmYTXvqSx1DnxC18fpYPb227vdBNyLb7487Q5PPqNu5n8FKMx7DQttSKdLwdaYcE2xE",
  "key7": "4iF2gUhSHJYBv9Thjv9NYf4UwabnarTgeRPtxk2pr3u2yKA6eGxCWGTa4yadDeeTYGuwMBjkeLEdeEDuCddh92Y7",
  "key8": "4GFidzngDhm5AY5FRb12ucBqHe51k7SMSaCnVpZrPZgChZnDJgGPXVLze45LKgqCqoQVGc1aD6pUdmX7yMVeB7PM",
  "key9": "2478VvfFtdwMcpfvxU4X3iEGxThR8kgHaXRW1Fj3d45EZpe2qQx7BVZcP3tDsgsMQKN3PDgue1R3xiCHkjdtfzo7",
  "key10": "3ZX5MizzPNqyHkYKoocy2P35X3xxepFZL3aRvSnguJ3wpt6c7KTSjirV7GGtXTgJ6SzFXPc4uvsXmGDodnU8uHc2",
  "key11": "3k5FiCt38DAGZ9Qrrx6q3Etd2qLDz1QUCXPDy13ddUBpjgf6hDMtRHGDZpa3eg8pb3cUpZcbrfzK5tW9sunjaREg",
  "key12": "52XQoDAhVGL5UZBJHzJ6H92Yw69Y8R7mkin53LCVgZrxajS82vojJWGwbYEKLB7U53b8J28XV6SihoM5MKmB31sz",
  "key13": "43zbousiSf3PRkCcVTRo7QcQTzTV7UNDeCvX3bT2ASd6f4rEZ3x2DAsaBVYUWyNKVE22J5c9m7MYMPXdVwbvCDcw",
  "key14": "4q76ydPXmUyzZ5LnLnaqFhaSyEJwh4r1nmrd7sCf28UmqrUFZJ8Zwr9Zed43UHuTkgNMcfaTqLRzQZfvFB9B8HXo",
  "key15": "55XyvsXLz1B2PnZyR3UU7kunnuvNVSAUDdwCSMet9U8hgsGVLyixN5VD2fyVyS7YxVXcQUgaKeAJiRdTE7Km5zim",
  "key16": "2ogWkkyv6iEYe2Kzdgsr7Cj8Fz72p8nsPe2JVaTbj5uH1JYM3JVdYqjzgmQTuUxz6Q6tmDMu7BxqigpnDwLNeYUu",
  "key17": "3VcjBjvHZ5GZdpB1FGL4kJTYv9kX1hXvZabmon876vZwNnWF3Zf7xW3o5egjaW3MAT1ZtJFxbdgdqk8BCUpU7teS",
  "key18": "3h1VhzqSTSVXWmuwXG7AUin5f1kRVVYgBcFjeNdprbyVCoCjGdDWmDinmSHQTSM6G46YxRksvNKMbJGABo1zNVRK",
  "key19": "4vFj1e26aP7jUaminCNVmWi2GWQYq3ihw8ayRKrfNCoqhF8KX9tD17UPUpHKPgRstkBLeH6in5jNETV8iTTPPNaf",
  "key20": "5Y26tYrgc4wZ3UP4S4EzgimkFFnytB6wsswCF2qv55sqqSQCt6gLZpsWFBheNjkrycHw4R4E3jXdG9DcDZXtwKk",
  "key21": "4S8qkch5LxZw1NFKqgQRR1xnsd922FJJE59iBDVmoDVfwJehwcs57jaEPPz3c5Xo7WKphpfztXUDAskmQmk369QP",
  "key22": "5pk29Z6trMdpH9VCjWiFURrcLn8m5v3vwVdD8DejTDBhAPFwDhnhdLNhN82D6Qh7vfAr3nCRUKJ3kZ348r7ehsv1",
  "key23": "44Tcyt19CXQd1eiVDvPoWg85GXLNFJvfNGcgwJWhzJ63LdRbWKqJSKF7tfqRACUCD8EXPt7yvCYTcTCjg1ZCS2c9",
  "key24": "2SaJ9sAVXSNxqEwxqgXCmaNE9HsJYLmKjqMXNMXaEHRSbqo1hZgMSnkATxmuHTxiG4CHpwgvo6ucuf5XBFg9c8v"
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

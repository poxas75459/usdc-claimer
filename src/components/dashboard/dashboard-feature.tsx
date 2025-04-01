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
    "3TprGqYJnf3zKAJdnGgWABSi4xMEdzyXNZ3ABbPDQ8Fsj649hiX6xxgvWcivY62JTMBFaz6NzAF3ouzM9ED7Gr3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E6vEbFVrv3tVgurgfwbQh4kdWAEoQ534ftikEjpZE4Hs8uSvX1QRiEx1VBuaisAQ7xGn21DfpFfZF826PuQmmyP",
  "key1": "3TNhknU1TSfg9xcmRQP4L169dWoaqz9ZzxmE7LTcpZNtMg3v3E1UNVhn8VoRc8h4zFgxQJtcvseqN73Pun2vKjD5",
  "key2": "3T6GobFWPXxF4zWEWsTXAPccUkpp6xSwHaVJACEqnz87tCy3wbRdnyhALmpVoLHSwZHuwb7StsD9BEBWvxau1sJM",
  "key3": "63JPacj39UyabkEMWS3XfBLT1eKJvGT5R86nD88ngUYfCNLR7dB5ZovwcKZXPSTx69pQb2sAqEpKgxCQWcnrjuJZ",
  "key4": "5xvMZugS9PXvedHWGFM8qJxpwvBvjqrU8k448zJr4Twbo3V4YzSjChixuy2VAv5QeTuQJdzDPzeEXzxoiAnPndcC",
  "key5": "Ljv4Zs5389C17HY9o8aJRzBKvqLoABzuFEUsv4YDu1B2gfioaesZbirGbuqt5wtERiVcjVfsqraUkDot4kpxTyW",
  "key6": "2LTPt7jsFx3w1i177Sb2wArmmc6onbYSG2NALRk5pZiwQJ5sVHHJbB9ZVhtcDECMfXgLCiWCuriCzL9jASPDvHof",
  "key7": "2XMPCSopJDuhcUUpf6yvPoJvqReErxxghgZBY5yNN4qHGGLBK8nQHvRTFhnGtvZDZrdF2jS8ozkHgCLZQcevEH56",
  "key8": "2mDkFDD3nVP31DfHkkQPFwjEtGkPQofSBLUxCo9Dm8DQkojDCTpVHKsaS5ngpqUNNt7Psq1oUCH9kqA35FeMdoFV",
  "key9": "NcLP2xDWhNojjjYvkVT3gzuVusnBrnPcG7Pz9nF28HhMWB6UK9X5ow14V9HZWE5jH3AtirWwu8r6iPq12RtFWyZ",
  "key10": "RMGuENME4Xuc8ehgz6sm3a9rkXytVdC26Xjat4mf2CWi2SMdJ7mRUb6MBuV7ay8WiXxt3ipusj1w2L5u4fgx3n1",
  "key11": "4o7pf2svATTbhzZLjMhzd66f76maaPVQ5eViZnDMc22Z7ZVwnUFhdpKCYkmXRtY88uwgeNovfzx2Z4jo9AM2nh7D",
  "key12": "5qPZy28JYXG3eKR3HLzPyUsaP8b9orug1ouocvzLUELHtykYoCZQs6y4L4D9zbY4MhB8UtnNyFR1dJmyifKEpxT5",
  "key13": "3htbXpSmphBecnophRKfH2a8XZovAVGo1HAbw7uAsgTy4eEQCTvA8YXAXrFJZKjRgQxeksUPzUAPcmZJViBbdBEa",
  "key14": "5i4D8w2yc9oRWPQ5vADsRq7jBnXeKY6XbWhrUP6ZA7BefUjS1a4GsA7m3ts5oxLpPY4iWga9DciZBk8YkfttPhgk",
  "key15": "4NwG7KqcHcJhHXKN3jxP6ogpb9BMD9SW65CCkfD8Z4iZGci3FgHX3dAnKQDuTgY7W59udZgJ73m1egxy4WHZstan",
  "key16": "2Av2BDwgdfjCykWQB4wkJjyedZmFpQwUNpr1WtXjW8Q6dcTbsP2H72p8WVsC4dBPeeG9ya7thooBE4BhmAk5eURN",
  "key17": "2eudhCspxbCQFyi4MTYzzMMukdfkbkVAKnDW4V9bqPb2EAAhFBCUnjqgsUYxWLMJMZ37b6gS3cqiSRa7Hd8JMChs",
  "key18": "4DX4PXuCuJCLyeQuJeJMvTDEyQtXijDVA6p4EF59Qmf6ak8DvMevZcuicqtkxvNcEXHZuNA1NK3CieHyGkBFjcLk",
  "key19": "5Y8UCnr28xDRa84PipEtFmLpdZmhEnPMANUewgtPuPRC4zMmo93rgwvmxq98CpWJt3kSAAJeM8uP5ycr3e5VPtGE",
  "key20": "41HUjQzpPpz1c9L8KXf7sWLnLjKiCo3UFBR1okka7AGi6sZPwMLCMhbqZcmjcFbmjAhoy5AAkwShhrpBURJEfeCJ",
  "key21": "4HgzbngmRac2eJ4geeMZMJdcg88PWjg4tZ3Wqd8GqAswZQpWPGhSZ5nRT3KgtY5dpvjW1MNbKCNYaAFAAk2attxc",
  "key22": "5EBXLQiLQByFoe1zMLNzzgqQxWjSZUk2eyuFUH6jqcaZFXAHD8mBHj3rWH46hgsGnMMcCoegnzpv8p1d9aumcuiR",
  "key23": "4iXu7xKNg2pGzkQoCeWBEtVdb48yrqpZFaoyH6gtLXUzXLsRiz7suQ37RYbpbUffAN1eqvSi4LJMoxrHDTUc8bDz",
  "key24": "4yrqp4VYcUeTMbKiBnFZDHVdJ2pMe6PSp2GBLHXwpBmGmiR5sTunjLsmRTJgAzBj9m8n9NiZ6pusDb4Kc5EzPkHm",
  "key25": "5M5hytJ2KXPCBoikPn3HZykBZ36VQbvv1QXEMu5XJhxuzRmHK9m6UsvQ3ywMPrFdnNKkHCuZLwtQecJHc3ZkSS67",
  "key26": "41qDBUysVb9WMZE2EMGL62WzZxBpPhEeHt85Zxpo4A1bcr4uENDfYEaAnR5VJsgZKQ1qPEsNqKyFAnPd6oHKRdxX"
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

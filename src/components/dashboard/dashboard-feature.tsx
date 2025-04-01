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
    "59rXDEoDJVLSvkTQQvLnBsug7q1BZfmRqJEkGAdDEnaV3DdKj6NwPijvFbBsorVttQzAK4QFMfMjCJqBBf77JTWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FA5KbqVv5Wy281CLzkPmY3FaesRY9GsTDRYVSBH6axtokon758ZFekMVQ1ohpHmrbdubDWhAoao8Ya7UrCkHYgT",
  "key1": "4xRzK4eBAEeuE91GePzN8WedkbLmbtsPcCLEoFNrDdFfNQAbbcHuVc9iNy5hXTLJYuUJCyPP9BWHSrVPgFc1e8Cu",
  "key2": "qRCz5GQ8Z5QCx45nUf3VnKGfPzHGyg972ZR1ZG27F1UkV7puCAGMFwomWeMzZAPa9KuK1virTrd9LPKXERNyNNA",
  "key3": "2njuLwQCb5XGYQvtQHjN4XMeeh89LNk2Ep2H5VNuCDGHcHJ8rcCUduHtyZy25F6UVvAUeaHEntUXXTaTLpeuJwrH",
  "key4": "rxLjtY4jjELeoDJ3NYd614x8vPWrLzFZe8RCy4w3YCEFCaXiRP54Tkgz6pSob2hyRsZCkHcMs8k8CxvzYEd94fY",
  "key5": "5jHBdvrZyjt28ZReNMBJ3XUJRSPCRP2UPdF1C7WMrUeN5zKpxMwfs5jRedWgq3GM8jyrEJuYgq9Z17UhKDxKzN68",
  "key6": "3mpLqdGa9vcPoE75iaBXgiRwNUBHB4jEeBpiQ1B7By965UsptYxEZWTChAxzCnEqWMKoB2SgmeCXR1uaZgJAzckF",
  "key7": "3EYLVw1MyXPc7rYsZ5JmAFBTwYBA3cwhdrxZ1fSGwkcCYZexjNQrNBJfvTEJeTQieXGYjMuNqR9c5Jk3X3o89oT",
  "key8": "4WAx31ssG3ZpXLnN1woj4GDLPCEvzypS1CoKJVPei7snyXCR1N6MbvAUPrs1DhZ9aXzwiAoRp7rN6hGjGYhuM7zf",
  "key9": "bdMd3EAHSVeWaZ6TqcSLLGcMzAxzsytDLHRGqozczgg42Tcn7wH9zsDkEkwcH9tzRUJ5Q7YCowHu4yvw9vAFcTA",
  "key10": "Fwm5eU28QDcFHJRgiW47s6dXVDSNPz29o2MrnbgSjSMFoPUkY6VhamoqrHmJBZnXJJtKvDDuFvVxrRKMddXeuKw",
  "key11": "31crFHeWiDq2JjjmV7dFa5pys75BSouNf8DFYbyHfqnm3nyYFyoeWHeMmtFw4BqbPdoqmFQysK82PxkPM3Vx7Ekq",
  "key12": "59WWPEKn8ggFUhs8cGNkt8eQbNs88UFV4jCs68skgRYjuvXb5qi8VjSpSCjxWjBfJTFV6yVij6UqHGCtHFsZDvLK",
  "key13": "2TCj3rcYECeGn6NjqnMe171rrQj4muQQGSRB1zRcbavnBWfN55YLLrpi3t3LdYZ3KpTMnke3rRtJLCta83yDo13V",
  "key14": "647BiwoKDWcaodfMzfPVN22i7r8231ryQt6r2ttPxWq83TJv8ZsuzdLZz4GJZtA6e79APbWbQyF7yucT7jas4kij",
  "key15": "1212yhPE6Vu2CwQNU5kauBCMBzGNbakS63u6Ef38DdTHY9EnT8DCqjBpJEebmeSqLvm8yuRfXFv4E32ACUBrm3iH",
  "key16": "29xuL9xQH5wijzJJyi4UZMRH6UodqHYuGJrzHBJeyweRkN9FzRJxSC6urzhmUPnQKbNQAku9q7ZTZYKgKXffSutT",
  "key17": "5XnxSNSZYArc5X8eL9mqBMhZGZK5gKEsc9aTneZTDPRfToFFpUfqvfWW9F8e9aRjZP2NamGdS7UJkiUHRhBEYiEs",
  "key18": "41Xt1LdtRavLSDJeGgBmgXtca7ohA7WhT9r3AQ9zWt1VhYYf8rAZ44MpJNdPmGtknv1vhMqYzx8tj3f21kprJxML",
  "key19": "481rFWV2cZs1weoG6Pjey2vzaFnMaAKnhdjGFbG37Etudbs5Q8n2R55fjRDiSc6Q8ZYFLNe37MsgPorQouTRbzTj",
  "key20": "4g3Q4g4ezdRv4M6TkPnSdnWG27uUv7AWU1MmQRkZb84M86yjaWV2sPY2GQ5ToZNbxmoarwJirjJsRL9sYST9EtjZ",
  "key21": "35Lf8rBW44ofMx4ubZmiFYXPXZGpH9u5dobF1rQWMUAwPhD2YZbFZ97Lh2DYFkQfxRKTjLoE1GHUtkuHes9jCSsz",
  "key22": "4t6Vy9dpotMLXECGnNBFaCfQQjHP2obkh4xhSh1VAjLm5icJn5tPXpEVkBjTMaSJxWywphXM2e1whcTCUFs8yauQ",
  "key23": "3Fozuti9xND12QCabXUzThiSS6oyAbFKzA58ZeAjP6SNiMwAvhDwgr2CAcQWhHCR5ig96RYUMx9pwjFUDgGeqGD7",
  "key24": "58KsnGa3DmNWwzNHJX4mGUFjH6JPKcE6aNM43Zm646sb3hb2BQMiGWtmssC64AxepRV1NRTY6obCWsvEMz9DZbHp",
  "key25": "5Me8Z743UDyuCEdYYYwYP95EnERAoUquCjVzksRqds7im6zNBaNMDnQaeMFnpaW7Wjhc67W1ExDxKgDKEJyrnM4S",
  "key26": "5Q1QgfqyEFLjVeph3feNugmxzGLLGUhGpvdVD3DhQLetKY2KFVqEX9BViqR3SusyyaHahZvRuYC5opC2EyaJZtCj"
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

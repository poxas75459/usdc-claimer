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
    "5EaCP74PJTzovjs6Matupazj6aJW351kNpzPGXJ1nPpZvsEDCjmYxZXsSntuBcwuPycDYoqMVSka6MtqTh6SkWQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGL2GMKf1syqMwewEqM7tdRGMbhh4B1KH7PN2yN9TVjS5kehenZBcGu6YRPhPqHLD7LTFmoJW3xBCxSQy8x37BV",
  "key1": "4bwK4mECCjzZdW1HjtiGMYmynNKnHJfqUKSk5Be2TeMciMgtg5Q8BAof5bZR512xxLE8Pg8VSxgbTqkn5ue2ZvPh",
  "key2": "35skDgL9u7tKTWjjQ16gtiHErP3hcpK3vXnWNivwHUR5tQf5x5Qv8U1qvqTbJCTW8nG7XZWLXWUtuQPQK2b9Y6Ly",
  "key3": "4KjaGYtXyP2eTvAgYErmMf7GqCTMNRWRhuz1hca2Sd2NuAVR3kr7hJjjXK2XMVHTHweNw6eUcNU7h8sSaPBqeNWq",
  "key4": "2tcMNq4fJiVWwTKBgLrwKY9puduxTVycrkLSgGy61CGoYc1vj7JumE5sMu2U23ov9T6q8CSPFZ3dRuu1Df4zYCi7",
  "key5": "CFd79LzHdU7kxMN1TFw2GjoQ6UYpkJzQN5rd4gUmMpDrn9U9Fvebp2WD9xguKqJ7PyovbXasmDeMhTTqRTTaQY6",
  "key6": "5Nek3afPFn1tq5fv6HHmnpaaUER7Z652mM1qfV2cNngvo4f3rTsyUbqjRfGrvGL2E5mr6dE5obJYMyDuSCNSmCLf",
  "key7": "2juEZGrAARDSNhAP72FNNoR7MHqCyCdah9TQ5aJCg6seddaGkW1gYNuSg2xFmiMmAvUUTc39zGHAH3oiMwj4APak",
  "key8": "48W2z8ryPJYimmxdeiYYJJHDNQjsCHDYsHT39fRts5NXGWC448eArVngwyBc2oLAqBmTzKcy7MLGnTCzrwRMdHVK",
  "key9": "5btHzuZa3SpHb2L2ge2qVwUramWNX1fZ3RJwLuM14AeRabN7peDkfyJzGYTa7kKy1jWKJURfMGELcWNnYv6BG8Rm",
  "key10": "4eJYqZuesn4LpTekvJ4vSukHJNCKSgyA9a6R5MNp5ZR54TmuCcxULKxwWs1zsztSFCBRH334U5L4WzzEXkZ8C3J8",
  "key11": "576n6ZhNM8iw5FzyvsNLJB12nF7Hgyq8dj4wi8iwcraDWUxk8GVRAyDz9Ph5hvc4YV7U7uYWwg13zA3MzGYDr2Pp",
  "key12": "47Vn7iQN4z1hJiYEhx53cWmzLpX8MBk47yG79VtxhRvSCzGe6TYWi8PseECk2bYCBhf2dbkyWuVEYMxFRPgbXrDB",
  "key13": "24pAyZmJQAg1v7KPboLgPhQayq7qbjjA66Y1uuPYw6jGa4m1W6CaJyJwwpd11yV8C3qKtdzvnk3nEm3wgpTnrm7G",
  "key14": "RSA7Q13LZwBBbSk9zMdyv9WYBMXw1XERkUdweVDqdQknA84Wzsg2HmyjK219w9Yva9WrvZq6wCuXvwTJBDTZjgT",
  "key15": "5DnBqr7QSxjUGXbd2SdU7GQkpYSzJoxuoec83ehu528EJh37bqT8478xcP5bVLwAPFFsbYVFTizg7NLR7wiWxvVj",
  "key16": "3FqyVRHztQSah88VmSPivKPfDX7DwX7CaGKZGyMKM88moUtevdygrNpPSZ43pi7ezsBApmTpGfUD9cfQGPLthbA8",
  "key17": "3KWpa8fABA5UvMMXm6vc8fgchiEecQgnNzUz4Sm1Q89KZ1vMrGjfKzw3xu4L6erNVUWo3Ly9dFvpE9kM98toc2Dc",
  "key18": "21Hu9kA8dttgCSfVsx2GGB23ysxqBJNJFCwtMdP9SCdwjX7NjGB24T5xFr8eMcw1qS5K1J9D6Lc2dG2Wkfe4xk92",
  "key19": "346PY55gU99j4veLaqr5PouKcz6xu8KpQSSRtMBGbtkQ1zuhAcpkGCGK6hDQBZ8APdiURNRpjjnhP8AZH6K4Fhqj",
  "key20": "2x3hQJJru6EWYebnX2DKexKRCdrDhfQ1apqcUY7mDYBb9Mi5nazWPdo5aPiCmM6ZqFioYXsE7bnd1EPX21M4XEDq",
  "key21": "TQoycriU5iQBLigsBJvmX3dmABisaNZc6FAFEPoyajAviDUdBHBu1H212UCF37yjwDQ5AptTD6cLjX3UyHJAGPi",
  "key22": "SEdrULwkaPTz28h2tJK5Dwzs8Hw1Ys5c31nzRxeAZiSGPqMv3naBkDTvwSgSHVr5EKqYuhgG8L77oYmny8jHQrz",
  "key23": "D9hCjTqT2JWicA4ayB2Kzx4imZgdfCuDwdzuZ7tZyteyadYmCGKPgibAEgvNUZ28vfTC9FgSVmu7SFuL8rzXPJZ",
  "key24": "5QA9FdoUD2kkWaHhoKaR7tLHNzj8iE5jQD7D3PuiaUunjvh7Wuyzegi2G3a4Ee4nNaB7qSsCjMVRgaM329e99YbP",
  "key25": "4SLcao6KfVAux3pKPKaQpTMipc72DNpskC13keErrByYg7LkAQPuspeTkDJamBLx8CuLS5PSzG6bapBvS7PWrwf3"
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

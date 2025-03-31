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
    "4L5YDr3CnNL5QDtVhQA2uJJfMG9EJLscXwzNEnYpuR9ujbc2r2Zx6LjTRW6gHFNQWMKzabhi1QqHDuHQeRpXAT9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MdCmR3P5hpVrcN1Gsf8ercP28oN7PwM4LBX22SUZGNfD9iQiB2d4TtUnEAgBoTN12QegUMAZAEqSisoNQ6smrey",
  "key1": "3cq3Hrv7qtJqkJHv8kyP4XomkNWEbQMrr7bgQfXg4bjhg6mP9gBNfFAZXc6TU7GT6cBdH2uiHxhSfoYgdRzFsSSr",
  "key2": "2AGXc1Ege5y9cTXuxxntQfD6QgTkj2AJtcWnp45JHsTY4ydzYcRyWg9tmN742aXTsVMewki2rZ4pCqCBu4ct3Ssp",
  "key3": "346RBFuadKJWEUdxrJDoYyyd1gk9p589WNkCD8dnmDW8NiEZLtki23VdYMKvfH1SkAXUQY7yeA91KN9iJN8riCMF",
  "key4": "2xTcNF1QakwKDScPYw2GWJ2uBcM38wrYRe722pxVddKK2BQo8mQSQvnFiLxdN9JvpW6mC7v7W7Tuw7fH7vHnZr7b",
  "key5": "5JHdKnv3WR2mFqsPE8NJ5y1hrhgTjpKA7qXjfs6m8XmgKjALLcr5PEgtWtb2k3nXM7qpdJ6xjF5Y1DVW9B17MVgq",
  "key6": "59qj3JRY6vfHaMVaRorgp3Fp6Cz6fq9WGHNwwmMNKkzPYjCs1wNhuNvkBSYAwf3cR95D2npCrP3rQboeiZawF8tM",
  "key7": "4YZLFiLapuzSmvrqYn1zSgZqDZoUNAHq9eRJVochAb6nYrh7Udr4yd8qE3KEKG1sd46p9oeeg46JuKi37meH176A",
  "key8": "5YgGUmRCQqaftcnq8sKrz1mDBiC4TsiwMHJKrja9rnNV4VGBcL3yND3sNbhHoGCeKujtPsr41RgE2fAcnmeSAaR",
  "key9": "4HnH36py2QgaMT44RDZgUSEU4cvqHdgJkFNYSADt9Wkhy7TXmy2S6Mt1uDaEUMghoAivKnnJrpDkt47CaxjsNYRy",
  "key10": "bV4fsCesjMvE8FqwK65jYZoStMuTMewy6jUPXuksMcVoNjsbrib8mjtHEnHRxXLHAqfE9Hp45XpKPRVWxgAkpMQ",
  "key11": "CYFfEVJWgYSZEmag2Ev3Wkifg6T8nzfnSS3ryuMAWRTA7cukn4cRotgcP9ESSHthEk3QddMZkAiSgLQnRkidqyV",
  "key12": "3gkG8rTREaNchsfcNCReRWS3biJqNtEamCbbjtsYRJDhSudk1Aeegv2TDhsuBcgGtavjpyB7ZmYRmtRWjGhX74Aj",
  "key13": "4rjFvjAPzi7GVjxA81wXU5yjgotRwfsnwWD6QnnaS8y4JDUhLTD2LvonjDqXAXGFyVhaFLiCLnxKdmbLj47JGjgV",
  "key14": "5GBtUS5Cc8QH5knFV9QVNEB1TusN8b8m3cMwDfrq1hyh9qXj7RJd4SFAi1adkXgzhDm4zLHAkwkDnZbjnP8TfFEd",
  "key15": "2pq97aapGWaaC82QeqYzPenWM3mYrkNW4nakjYYcKX7168R17fxRD4nXwQKucjPbBoZAPjBSX93fS3nGKcuKFDHd",
  "key16": "3LdHEWBkzF4A6nevpAJgFZzH4ZqGy4r3hUrPKRqyzNqPj1eYp3FFweWm7DTQPfz5xaD26s7cPcLWqKBj5gfciX6K",
  "key17": "5QKQvx4nKkm9anjF7Gw1SXsQRpjW4vhs9YxLsJW7r6V7r9pdBLAxpYHqdnLLdNmjjFXX2SGwfu9Rdibo8dn2M3Qi",
  "key18": "2BFHYNa6HYCDGtJ43JGcEBWCDubZqHHjR6KaZQS5xzoCEqcMfeuDSowb5N3XhuJRPqarcosB67YREjiTR3rhZ2eF",
  "key19": "WReJwSvQ5J8EK83LPd5a7FLf8Js5HXYrYWaZoPBNxbdKzqd4dLq3JSqFbHGuu6Nj4JFNv1eRuCeKbj6zrQ8BLdi",
  "key20": "4idTQu9DTXqLCnmeuvHKv6x84QnWrEdrehJWZVrvnUeprcqF1xnLdrfcXKxoV8GyfcsKTxbriTyiRHtVo9xGVqeD",
  "key21": "5LrB9jxHHJAYW6jkjxY7RUVLcL4kVDDDPNpuD545RmAvew1o7BzLNk1hzTZCp3nMdzfZxapD8TUvWeA7Q6TG4hbp",
  "key22": "5UQuS62kqZ1J3rYoWxwZacnhaKr4iNGanZtErmAGgTt7NDvT7f9nuSYXY41MRRmVPefidSXA7hxE4aQvkp6b7CN4",
  "key23": "5HZ4iCGb5r1Vh6Dte9VLMcJE34GBfPg8L88MMkKhTSUKFWo1SAHcUxRvCupK3RQBrHW9xkSe5yrdnWgJPrWLVKbD",
  "key24": "prSTF2RBf3JLjtsYDy1nmpN8cBjqGu1bCqiUgqEDXF8A3mAxDR4ctydpHcwhfQQNmKQA6pbN37vY3Ko7E6Jq6p3",
  "key25": "5zAnDPNjKGYB1Jcs93PRwj9QsQCZnweLCWEuwg7YKZAc3cmBYN6YMwoU6i7PkUqHF8LnxA2yfcYAXxc23ZDwRn21",
  "key26": "4NU6hvDr8SbdUYrwTZxaSUviUNxBH23Gm4wMv6isoQra7yQVej6rEF3Ca7YWW3aVU2TgnobMuSmzHL9JACeSzvd2"
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

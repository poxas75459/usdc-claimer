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
    "3wL6Q4F3qySJwFJ4XbLv1VJodbbGpjYhWvuA3ST9bGferrunH5jBWgWExgfsnJFgU1KS8v7gQFBfmvEZfmsHXkVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWVfCJJQnN794KqGdm5BHcE6EepBAxbCSMK5yW2BMSLwuTGiyTfraV68N7Vsy6UoZSF6QJQqdaYmcjASK8JYttr",
  "key1": "4aZrL65eL3HG1f1dSEeRcgG8JpDziVFW2ZVcEdWW1thQKbzUPAfKwi6F821CjdkEeHiQ86NZAvtLZcp1QAvDUqZn",
  "key2": "4D2WeVRoMdP98moBo2roGLakTmTUMMmQYxsf21V6Fapu86ZbCXMuyj9tp5Woi347pDSXqoWb9GtXArWGLdEuK4GY",
  "key3": "56spLBPqydfFN6yqJcf9FsHyeWfapSLvFtZRZZQmYdahGKLizLmvGiP4pebJ1e1t7BaQNs3D5dmShaL46g1i2dyv",
  "key4": "33PixBcwBmrvaja8EftrVetDFwcQ695L4i2HLQgYSzUFyP3TjHPEzvFMd8eG1aYKqRoMJNcYf5M3GVpXQZouxzph",
  "key5": "Z3xpgNo5N37D4wUPLM4vDeXRuvUbP45Y3iDTz6KvZqpKm7utGUd29sRr5hG3TH2JhmfFinNudAPxG6iwQrgAGvg",
  "key6": "2neqxnfgKJkruNvwaWEuozUkM7oLKYpYaCRqZEk99i9KTr3JpLWVhSAoR3AyF6BaawgpeS2pACq1w4BjJFAYkCuW",
  "key7": "5du1tiFSxKVYxHUKq1FG47Gtu8H41Crc35KurLQbK2uhCfp63sYY41p9fVuEkSqZhxUAoFZnPyQtVn6mXsSynBo2",
  "key8": "4Fr9RAkc1tEN8VJz181cHSBpgLaSJXokXDA9XmAe28vahRQnN2PJL71UD6qkQwweJCQaNrNjpwUcNg4tgTcvurd4",
  "key9": "2PFu1kwW2GmNVWRkdgBA3F2XLS4C8q783DNpeX6RC6GQ7RuuYHCx4cBfDVKS264qEQLgNCMtzmY8ZcfigMoUm8Vv",
  "key10": "3SDYYPXgzwh5ZH8ZFJ232eM6KGJ9xg7dPZNYJgwBpT6DXnKfvpV2CaQd8GFCsMPv4PYin6rB6YSjf1Jy63g25SCu",
  "key11": "4FEQmF4uuFpSH37bVNa1dAq55q8ihVXXVhcJ6d2x1QYyTY9zYByKApmc9sXWNGc4KDGUN8So9JY6HGTWchbJtm5v",
  "key12": "qyQ2qcHNdwK1UdBG2zbTQWKEBR8wbV5ECqjERmCGGcoMjffkWWZdwpjCUSPxTUbK1gj2xtuzmBjLiAUJ8ZiNjxR",
  "key13": "5VUWrhmTha4XjTUwU6GDNWtYNWb6tYH5Bc29ZF3bWCwE7zfx5vWcoKzi12THp2PRShSNfjMtr2TjWWGYyyXtWWGa",
  "key14": "XT388yH6sS3DgAjHHKvuuQqZ2GN3xhBzXVxRZCSfFqvADEpppZzzU5vZxJcdAtCcvGSmEzNBVSVFJuk8eJCaDit",
  "key15": "389PgTM8gDCxhP6dmDWQQ6cJdKaE9W7EmHQiNGJLvqTe889ZTRR3SQ5tKpcJ6Qjhqhd8brDaZnKCLn4Uubriwa1a",
  "key16": "3bXJjNRp3QU5jyZtpVeh9pB4wF58UTURZtQY3B9sgBLaggqEHzv5WfWFWDbbBcb2yQNLJVndi77pjT2Bq5XE9STE",
  "key17": "pmCuaVdACD6wR15M29KhF61DYz8bBrvLTLRJPGLQmiSmXbLuhrqasziQbmMMcUnE2sswFuhDf71MvgL7udXs8Dm",
  "key18": "9qb8tfbaRdjYm8KCz6wMiADeX3ahYs9pZ8R8vGNuYmsYXHUQMvgftRtpBEF4mwyNhRzhKCwDcrj9tr4u16oV6di",
  "key19": "5CitzEXazo2Fw6NDgxZ6ohUsRedzq65XqNYPGKSwkcVkTWPjzUdYroxHcUmSgWLhmd7Mmwpunij71vNn5ydRDs7J",
  "key20": "3SsL5dwDNQZEfCdqKtZqjSqr8Q39YUNghEoeUYAZe4JVbLbiSa9LJmzqATrEyVgYYmTfzovbN819W6LzAAuNnqXm",
  "key21": "5tLYbTkygwWBbi2Vv9K7QVDLUsGMpnRaxBdLGmvW6WCMxVa19L738D62nbV6jnToqZFQNGEkuYRR5SKfu9oWwzL7",
  "key22": "4Lo8BNYs737RCdhntfA3rjUj2dQw6BK76KfQUkzRbidxRLQTtKtxLiavch8UQkm1ipZ3woFbs3B1y5hcsYH6uGHk",
  "key23": "2RtFxkaNtb6dC8LuJqZ98NNBc8PHY36jqu4tyWYESj7hKbRnJFYgpuqThdRNLfhNCmteL8iyHT9tszrvzu3UKyCm",
  "key24": "2AGrUdJLc5GgHbvRbNgMXt7a5idHzshx4wurmX2SvPypt2EXV6qZH8XNVwqtuvrjszXbCMTRXBtZn6YTpCKT83RE",
  "key25": "49cnDLYDT7W3PMhNkKBMwcQKbakNSGsdeAc4vrxp8vY3hR7EqAB6usc2886bPFVJmLLF7aGistukAYZEPGP2xGpp",
  "key26": "4MWGvTZt6wxgK8yVXSfmUVbDW7ZFNYVbEq1rZzNJQhWrCvsznGG79i7RP1vminb2S9feQhM9cuUv3TJzdDeiGHbc",
  "key27": "38zwKDuSaNLkTASUzkMtiA87vuDqi6Ct62vb8UiQ4Tq97Er6ARmuBDoeQ3QDCK6hF8xxEqGbnmRmkCNZtPzTDwb4",
  "key28": "4bD6Y6qfrU1JNkmtyWbhaVdM7SxYDTCgpaRefyasJhmXYtCBQtXdG3DZdu91aiLkpELj79WksY3aAVgNxsk2xzVK",
  "key29": "2GuJW7edjeuoiwrQeTpbAdYXMwCuspnjDE2JQaFoPQWE8JvtW7Vn4D1XTTf3nugW5qLp27g7Huj2RCrDS2AUsdHL",
  "key30": "oaYXrhgCwg78tykNyBVP87op2yjH3a29YWxNWnkyuPvzbv6UdDWYuj3xcAtJgjJQP66QTYgBkKoM5PBTYG9oxW1",
  "key31": "m5fFdParhxqNRcQk6of3ZPPef1vQSJP9n3y3LYUY8Phyev16yvxXN1oo6RcSBPoGizNgGAAwQKcWdL4Rjsm4eyB",
  "key32": "125MAsbeR24AmKNuDJuEnWXBUdbotmSPwwAEa7ditHPeEoFYsrWhbyohZP5YCZR1JDsLxGnNoYQxoHqCir6EnUa8",
  "key33": "HzvrcvrVJXsHnKWM8vfn8JkMhKUZtmWuK6xqPK7a65KZ7FBsCRcmaKYX6DF1rTbT2MH9pLHyvWFwTMHxqsg3pZV",
  "key34": "3fw7vJERz4evp2SqRQTCz2tvZH4MGKFo6X8BPaqrwEWQCBYL4MbPMBnaRQHFBpSshDzpb16B5cQ8noTJny6RiTog",
  "key35": "2mS5xEDwnpqbvVYo3ixcGiZtjzomLqq4YRJMyRL6KHSHczb4xaH5fLaxzb927LwzYNkVxWFn4h68QfxUgFaq7Jut",
  "key36": "2MuqAGRtnUpBj4QJJbEAQkFfhqcHnzUrmmLp2tzQNm8JeM7CRf87BxMY69mRzHkSyVqwLDCL8mrNqpd4nYf3tBFN",
  "key37": "4ugZVXPiJMaZnkvSoyyKU1NZqwTHjqNMx484eGqyaxQactFiMaQqYFMKTked4aL2RbY43YW72xQ1rVXmUEyAyJkc",
  "key38": "5vxbNZctXXmkVvwFHm3GJoubJxPhdeduqvht4oAor2H7NsmLk96HMTseSJsSv8tzjFYtuAzpYFcyVVbsZAcwxQrL",
  "key39": "3YVVWqhZeDWVSDgni71RabxrsxtMVM5aeLggSzzrhtsWRbgHFp1EQodgcD1DyqYQYaArkr2uFmMW5Kf5Vu6MNAjo"
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

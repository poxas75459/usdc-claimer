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
    "2iwqsqxUUPnaYM2VpEuxwnfn4pAmaTd9ECd5DH6rKeHrqhTbPqLqkJRJD18yp9dzG7nqumhtuv1JrWLpoE6M2osh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zSqjTdaBG99ZaK4836beHwxeD19TyiUrnLNKy4drdLjKqnepTo38vf2poWEx1GFNB2bxThUmvjfZspqkbxNkBGX",
  "key1": "BJfUjfvPB4DC15HJLqSjnDA7wvCfgmq61LFr9WNRMYdzrZ3Ln18YzchcaipAJXEZpPcnwkzZLGiT3Rk6bBdKjbS",
  "key2": "5VqG9UAN79u6wQaKNHghdHZRSU3A64SVvJBdSgViQznvaxMwKiqxtBJuQiwke4gASJKMps3b998xnN2YD1nYewB6",
  "key3": "3Jt6UJmrXqZ9pW46iUGiCjG4smTdkX76n2RGA4dvJwpXgHr5vqFjoYBwgSFcd5Yk9fvHPiDhwK3AK3DfjSfsQJkC",
  "key4": "2nVN3jaBZdLUmT7SwCNkVZbYVjPE1jwx1FzzzJGT5ZSzCDVnWjnRFktamPH4DfnuxstAboPRiyozHcN6h4VyDmWL",
  "key5": "33s1vg8QFrXNx2B1tQrcznjsRoXBV4MgVGP65iKUgaQLKhcNamnkFLxAs3JibTanoTbcjevdd1YhjXNsRDqg2sJp",
  "key6": "3XfnzEL3e6Kvkkwdh4rdWZsqHoPRpXdT9TupHfpP7U3htinYPJrV1sU2i5tYXChy1gPQ2XZZpa9cVZghzFiReNF6",
  "key7": "44cM639FPMZ7A1s1fzNLVxpaGyG1FkoHZGLhN8zDXeprvrWM5k2wBSRsC21Rco9g6LcE721a7qm2bnGGXHuGKpCo",
  "key8": "3y2yyi888Y27f6SCxQLHsFmL5dQs1rBBbKZJw6uBfmnYMLznJSs2BA7gQMZNYJNDmVV26uFiUvZ6GrrTWnxEjdsV",
  "key9": "5xECoxWv7msxiwt5y9G1Jfng714uoWrpZ192qocRYQwtb5nESJh3Y1SFnzK733BquKL9ZEPcTmrKA7UdUjyerJeF",
  "key10": "7SbKxhqoVc6MSpnVMZv9pSeNP8RAVcWrYTc22qK4XA37RNsiKiNVJHmv4gijquhT5xAFPwnVJLN4TVviKiy6SD5",
  "key11": "62S68ZY3uNxEusNYXdNXfr6jwMkk4CTCTJd2JSVt6rGq7r2GKcwGvACSydTbk7mHsSVHgyCULDoe4AnmcDhhvLRG",
  "key12": "21JCLp56VU5LUWEneEu5LT5CwcdZA7p87akjTPi4TAfcgEXCEkwVWq9BJE1Mp8TJEv2NBmm72k2TLsJBwp2E9QCA",
  "key13": "2rZhic1yRJLhShvNAsnLVMcFSBiCaAPBWpjV1bLMrYmZEoXutPT1WisBN9vxXN1NzhHXf4qgm53vedjSixVxKT8R",
  "key14": "5dm1LndZKhBSsPzvXZj5s1RmHrCb52qkkja3hfa6sQBVYfsZ2KfrpuZtyHENJzr5CavizrtHqYg9qDGbJPqEV3Ei",
  "key15": "2dirJM6mvwGw9LHRj2vkxk47qCL69pkFEqN1gQvrKKxfXP6i7e8QbuR9SJALNmK5VJAZDc8yggR7ovurrGUzvQpo",
  "key16": "rNPZ4W5ZrPALZGh6tFr2XwXTwyBPw3S2W5GVnGMrNjzG95S6Jt1pdPtfTZHJNG8dmVmMhdE9bXUdvUYKcvypjSC",
  "key17": "3cpjafkMCjJgpBFydqRr3WXMmZaUgkq7vCKKHrsCxo1CuoFwJfsP619CHKDreEDvAXFQSZ8Yn8F1hz8Fmjz44fXP",
  "key18": "3pb4B9oKL7mNkL781RgGvXB3zaF5uP34QFZaP3546kBNAvbPrYEYhp7oGaaahv3VzwJVjynKp1TWAqcYF6p5Bjs7",
  "key19": "4QYZBm1WBNagsL2Ly3jbVJp8zcgd6nK4Ed92KcyV1boBcvSFQRmtTdzCwHSPP1qnUWRyNQEcrzjfp4DyBwWSn3gw",
  "key20": "2a6tbSuHZpkFSYYgCJDDLBkZpCzBCfq2UotYrEhPYwdMkgfsJiU5E6GWpTTyzYVJ4TwmfoS3bKaH2Ce6JWL7wLby",
  "key21": "4YdC7j8EVwK4TiTCUQx5ykDGx9zq3b13gAKB5CTxt4NADp8F1ekxXz1gySYevrSe2zwX1wdcd6TV75hsvJykcAyP",
  "key22": "YqU6szJhXTLSxzqMQ8M3p45kbZGYBPJHTRMtRdQyNVUCxmouoge7PVPGGjiscQfB5YDjYyeTtEF7tzB34sfjhq8",
  "key23": "2pERs2QPkyEVE2p8qs5AW83mwirojGzHG4JhAVtw3ERu6coAAx4HXuyyb7gRo6cpd1DbqDdoKQ1mW8oajEgENhbm",
  "key24": "kiAqh8Sa3vVZSTFeVfHrjUMfjZ62ayMMqBo4etWTSYNcVk6AQ89fW6zhYwSzzob5CQpTWQxyDQb7hpYgb6xaNSA",
  "key25": "3jM4EgyyTrXck4VS5MoAT7EXBvpiYXsRY2UF6k9fEEB96AZgXRwi3NuUcHF9kc36gQe9UtWTpetCFWM8QdcWvv77"
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

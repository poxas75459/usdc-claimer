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
    "R1TWgudV1jTZAsnaabU5xddDQsiPGRdaxiYLCCyFhp4KgdedS1EgYpk2nXps2vsqrVF5MVNcA2iimGZdcZUs25v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kDe4UrC6A35XoWw6av1StJRZuSgNx2ntbY4683ofsGjzCVm8KBSbYr45hfSJgX7WjvT4XwKiMwM6raHr6odmiKN",
  "key1": "2DX1esNVD9PZovntqR5FLeTiutyaXqeyPw3q1EoeWXuqc5ZUTAcYatnvXBoazNbxZsKPtQFc3xZK3XxzY2DJ3UC4",
  "key2": "3enLSdqUdG8MqKm396NatbjDrA9y2H56W4nAL1paH2gDsLiJfnjitsKqJpRHwH7YAHPDsr8n8UaP9vUHHETs7U1b",
  "key3": "2YGipS9iZV6bRYKyyHU7dYw7NkfxQPS8BNdRYbnCt5hDzCZgrPsHZeAYriSBPxk9WVKTAqc7CcCRXCc2SwPfRsJK",
  "key4": "H8j5W7HNYoYrGhkLCgG3rCVKp14bjRqzVzpxTufYwjmyFmeiWDWGopunZ6sTSNvDDHU5N3HnT7xSdp1LnpkfHYp",
  "key5": "3tmQ8pfZ8Pjzv3Dp3GpXY93YCvAyRRbxRyttmxWpphXMNed9AiQPVv1ePpao83QPY8Vg1DGnsdeRzfeKHRaAU8ef",
  "key6": "24gLcnDYphkFez7JSmJQENemUN5Pmwp3XKwVX8k6pKSuW4At9aCS54SzH2v3JfNTfmTH9swh6zWwibAevykzzD1m",
  "key7": "4cAo9kdRhjP2woYPSZqbfA2XiWcf7QVWsikpToY1YZimehoBwygVyLebR7QqQX5LvwnMrZm9XPAUibCEabUAhFmY",
  "key8": "5bzQ4fMpmxEb4TVjK9ttQGJFck7GTbKZrHmXsFjB5MsXUZpLMAqcebSAMQVqUaWnKUar21RsTPdBbhxnDhgx8GFo",
  "key9": "2TiqCviT6AX4Pu4V9WdBmB9fxFegGx6HfjMemD8rh7zqDQBen7xLC8XdL4JfG1rFxhcyGMx5L8CnQwCUruqwf2eE",
  "key10": "3Z4FWtWhGdvosAQQJoAoq6DQc7A4eejZ7eBWp95jm8c2LMvuvkBXxXAPK2g2snu8SsQsj2X2cCwVc5xFqMV7K6NB",
  "key11": "3Yk9rtAExAbersxNshgjmRfJwVMhM9At8EtymUEXZRQoXhXwHK4sph1SLhzrYP7gq4grQpGzEVKptH1Z9iQCsMhm",
  "key12": "3mwqFSrkBQvnvCKjiVxtqz1pRazyvNgGMmC5wipHj9D1z59edP4LMAirX1emhakHBELydWzyfWp67tjEnvM6ty1d",
  "key13": "5FtMpxHfwcG9Yx9XvjUakuMr3XQPRSAz8HM1ZwwnWi6sGotbtiRRDBDncN3tpo7sW6x8yb2ckgZMx7H7EHoBFkGB",
  "key14": "qMegwG1RSBmBUs8sD5mzFYdapL8ZFnCARkWuVttGs78Mnirh2pqYob2RL32hJiMisEgWzQdW8PyZnN1rgphex7F",
  "key15": "2hrbE1JzXaBt12ui7bxkRwtiXYW4T68GoL8Pt73PbBWv27FaaSHN9XZ3Tx67hzaBGczjB1WgxZWgBjH1314mNNyH",
  "key16": "2TXQWYuS5hjfeGNUVGdSESKfLF8C17eFZxFAEnYkomMazmPkQFDEG7Nzm2ZPkoLrEvLaQ4pQkjrPnAD3uBB4rzTk",
  "key17": "fZLsnrZsiEAv27a3qoDTbNemB6NZL51wpMksRsK34jd769D2R3tTJMDnD7JUA9zfUHqGQKK7VFMvG151BLXGs1G",
  "key18": "2CnUCeizfkTHwdXMEt877QD4Kg5RJzUiy2wbUm684UKZ6wgDe98FZz8EyaGPnPf6dRkHJGK1z7Xjb1VtsxKycUAm",
  "key19": "3fNENjzzqrL1TQt6f5svn9npsRGYrUTA23o3reRdjUdkvzrqTpvs9epmh3pLP8XL86LaBNoH2hv1i3C9Uo8zQuBQ",
  "key20": "5FYo4HJFnjrYnTdjXEApB5Lke75qGfi6m9RSqskuUFLNPbGkumho3PFDwfgxtDo3Ta7wNXS9ChQQpXLe4TpkRMXd",
  "key21": "H5NYnd26EFGuiUEahxyHcQ5rsQfpCczKcjAToW7RqS9eokZR73HeAUR7xMxTLmdbMg3AiDLmtvBZntxgP5xEq9B",
  "key22": "35qa78PPYZYcXeBEJjjbeweg8wScatx4may6V8nSxszs8tZXDu8HULvDTEYpkqLW1FzmHKdgMP6EcsSMeCEwaGAo",
  "key23": "3GrFM366Dq7o97uFxshs6f3UPbGYX6uYm59tS5nbHtT77wLxSYfzDQLXbtWMwCrkKm5T1VNfvEgpcF4VnxajedZm",
  "key24": "5iaxUtKjJ8QQmjXEGZwkEdyavdrSFTVtrzxm1DsYj2Z7hrryxJhVJihEi25X5xZ65vkopTAYryEKUwHEry5mokmm",
  "key25": "AKJoDfYvna4UBrbyLdofXCvX5BfdNDyrnypYKkiTbYrBUKzusEkWhbng9yBgqo9teo2m8HFX9p2ZMupzbvGmtdC",
  "key26": "5UCZAQEtH2q75HLi7mRKdv31YBQhpNmuAJT8G5cAiA8GVNk6vKQqTwg5nHHg3ZkTHxRSQ9BEevp3sXJypzJ4DfWp",
  "key27": "3vMqybMt6FQ8rUKt5HVsXsF3Ti3RvoZEAG5zMdAfRN77qU8YqKTBmxLPVaLigTTPAyGqFcRAu6JGQMfoPRth63ug",
  "key28": "5urVz3MAtQvxZ73JkCwyGg6pGRRD5VUt3YXyxZXErvrqAQJPVGmFkjXLZDEYxmyMVnUQRLeAsfnevwWDmDrtM4AT",
  "key29": "64sSRPrQJSiyyTxSVWCj5qy1d5jyqebgMgvKCDm7ipiRp6Y945XDax8e3X44EBBdPaWH4MaizxWzKb4HesFKJGwc",
  "key30": "aXh7Ux1iU4NWJ1r7sbUmBxFVzuWtHGjA1D79cpsuxf8giWWRBP5BxaLM8LrKwjBUp5WAPcCXg38psYXQZQFc8Ns",
  "key31": "2i3xmJi81wnzR6PW6GyW7gMiGn8MuUHwxewuG78dTxjVRJn9vkFJ9vTkmH6UN3XATQDVhdM4tAq2WqmBA7xQBWHp",
  "key32": "3MUmYW4wxBsCL5JPauk69bgszutrzFMV687FmrW42XKtctENb2JXBEWpAUoNycphcMPT2cu8EYrqEJ6RQaBnrkUC",
  "key33": "9asKWr3FRb62bYNYgoqgQGsnuCS44rW3GLwt6GdkZvN661nXBXbQdzH7SAu3uqEPqDXdsFEFnNR7VzxXfjL4QgN",
  "key34": "3AWUuSegrk8Sg6C5Dod1Mw4MwpJMH6Rm6H9nDbrjqWyh3wRgxyxDj12t4dcsGoZduXD9eAg91SeiKi7BevodUEgW",
  "key35": "5LqYPBLHYk3riVr6qL49qLbj6z5Z211bNTj7RbXNu5Yx8k3WnV4TKCoDqSqFetPfwt8MwcGWhLqnydLhwt4fQSnb",
  "key36": "5cz21Go3a2v2Pz8oVdV2p4bjsLQ3A4Cjy8fqSQmMr4wxG8r1MU3WTPmAuzZUKmXxXZDqQ9RyhpMdUvBSYiqywqZZ",
  "key37": "3BG1YPbneCpsfCgPSgTBGRpLdVYX9kDLwFVf9qiEK3cHLRfqtLWsvcbvSEqV4CKiT2gEy5y7u6VTe7EcN2FNGAqN",
  "key38": "4Skn2uMCQxwcuc4SFeNWd4m2WHcjbj4d9pwgvVCbChbcVaiTjLUZuPkcw3ajvKPRDb5Xv1zaPigzDFygqVe3Fk5M",
  "key39": "7sLGu5VnwK6PXvZEoxAfraU5oRV6tvK8mLNiGK9Rgooc8UfQLfzN7THHwDEGnZvh4RHdC18nLtwGns6EEaMFHVb",
  "key40": "5BnhMqgXXjLYRpC1hDDVHoZcKNULFDjhLzXwR7Z1o77m9tCZikWR9XsbqTHjuFDBMQUvwPDPZYecxJwiusEYrBx5"
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

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
    "3JR9SoTu4EFwDDoJUmGzhQZ4KyxcfpyRkTr1NQcy5fqJXCBCwkrMevq6AUWUmtocNdJm22gUUjma8FWJbP8tfkte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4smrY9gRdjWvxTEz65kNtcGi7dTYqYf2uBTkY7wVia8T2TSsQkhRgjcA4u6vWsZd36PMX4Yzqe2usFPhKDySyjAg",
  "key1": "3nQsfVeFYbgU7kiFuyZ8WRUBSMQcePcb6Vnq8DEKukgHb1qvN3AcRvY8ou7BQGQF56BZvThMUaLkKdkWmuJHtwG6",
  "key2": "3LonCSukrR3yZ71XVeDm3ye6QAoC9pT6KtYo1atrQHaJHy8uCSZsGx6aELejWctEVAmALHoM3bC7yEPe9ovmKBgv",
  "key3": "4pcSLyXUhTasvhkTwYv2HEcztqgqD92iWAdCKGL6wP1zNTxXAAHY9GFkP5mHaQ3oKUHrv7dnjpKcfkHXqjYsCahb",
  "key4": "4RR7yD3h631R8XCTC2StFu5Cqsip1z3ToznWKh3aGyYYAqFivEfLkkmb6SukqRA3Ff3fshEpEBRhSgUZvMs5fTbW",
  "key5": "3z2Bckt8n7NNwhVYac6iaaChJmEUF1r3b1s51mKdLsHoBtqTpb1swj5hbjZyLqRNFFey39XT7kkWwX3Bjtibxb1c",
  "key6": "4epwugwwYMDFx4XL5TCdPaf8KGWbonhkiYYbKXacP49Z7pncjsyLpXr4GoyfPiDahu51s3ooBHVxCV6fWKathbcR",
  "key7": "369biuFDHokS4Di432MVbHPpKDyPA3kkRpMFpvPQ7iGgjxa4jXHWR2fcP9swNLVayHszLM7UMEvM48hCgzFzqQqm",
  "key8": "5rUoWCXGVCMETATYFePguBX4DbHaj8FGEU2ssPVVzfF3SXu4dKddbKzeTVzxoNxRxAf1KXoxGe3UejbFQoo26aAQ",
  "key9": "1i3aVvuLRFhnUo6oXR2BVSmymo2AgwmbT8Gx6PjzGihEgHGp2fRNMqKJRbjB8UmDm9sUi15TejMhAMnrbAMdNx",
  "key10": "4CG3ALa7pyVkdmb4MkE93xSikF3aSopcpZMwiciQ2h4PvKXTYvh2GJFo6Ut491NSHsv6ekh5DrvRtuuXGUmpejUM",
  "key11": "2Mw8TceAUjiQ97vuT3QHu2aaeuZW9za9Yf8bybzRkceUUcDvpAjzeDV6VWiApPHEGDY2An57vn1nf4tHuR3LaJnT",
  "key12": "3DBR5uxBRzUzoxptAd6ocuESdykD1QRT44d62zAj4MciypPRmEQQifzaEkTvNvZaDaD4nfD8qsA7DbdVA1FwmmJU",
  "key13": "4oMoQs77mwYNV5AyNYyRJsvfqF2BnvqPv99gt4vVMMLPQyxgP4MRDh23PjzVnDKg52ijZoicdczwUwtuzeUrWV8X",
  "key14": "4iLmbHaD5wMKYvQoQb3x2h6Xy66wSdEQyPaeFnXQCWVYSg8Drv44xo6t8Ld5SnAZfmyMXWyavbRGk8MfSigsJxXQ",
  "key15": "4SJ4CFC15qa2dZwPjJrAwNZjHpXsgA2gpPChnRwzWfCD5x9KzBYjN1D1krnVeZ2mCmQytkJdkuhdpwyqutaquePw",
  "key16": "33hQXLC7SjoxyASAp9YESWFCNDm3MdxaSuGXrPjb68oUW33Wr71d155Y4CvAM8pXmvGkpUxhmbkNdjZvF67wDWZk",
  "key17": "Uqr1gmk6PmuLz4FjpCQUdx2E1AwV93ATmzGn1KG7f35fjrtadbuHeuMU7wWob5kkAtFemUJnGykBDfmMEjcNiqu",
  "key18": "2KXaB89cKzqcvK7F1ikWKGrchJnG5PEQnodc158WoDgBgmJpWVFGbLNJVmjuijZgseYz53EJa485LoDamqHcCy1c",
  "key19": "5hJCxGJhXQA4dKh9XXWg32ryP4RQzyUM794UZksD4Xkgw7eJ9smL5EUHERxy2jKxMyBPvdCNE1acBBQA5eAE9gft",
  "key20": "5EvfcZaRfi9bKgGvCZjkc41MdBbLpLzjuYhmi4S19AcKYhVHYMDN7TPer7LGkTrya64Mbu1yQRHjZrhZhXru4nyP",
  "key21": "4RS6Yj2AWjEGirddCwBv9HD2SSbm4rpm6EYzYp8QiTaQ94fKZPbFdwdt7Ru84xjJxYSLoM5f3SvyjWJqZ6U648Q6",
  "key22": "66AWhTwZQ3PBkdYtwgJEeVLCzZtWouG8BjdX5vFQBo2S7SkdZWxJBX17wmitZrEGNTYcHRTEwZSoGapEavKY4ViB",
  "key23": "5zRpLhjsBjTjwFWca2f4hAuQGJmnZJbZvo1o4aoteMSh3aEA26wQkWzd1ubrewQeHmFoiZnALzGjMQoSgydhqosN",
  "key24": "4qdi2oSAe7qwqUBo5fBSDviScpmhapBtsuBs9qNoGwe27ExNrT6RhWhaMWhHxtbCbLWjrbJFSA34skED7q3agNWT",
  "key25": "sxVPpWbdkdr9Sbz3hbxmcetxBLVHPESCYVZcAQ5WKjgHipL1spuPnVK56zT7L41JdQGmHkyRxxxTKNyEdAETziN",
  "key26": "3cmUHBSFZrpbrYazyw93wEMhZpvGMet8KT5PhNFQfg6oTuncRagYwiqyz7AHGqCvP5YeWD8oJuX7cBF9qTaxk9Lb",
  "key27": "jUuuQrvPar8qrVenYKGyuojpfrHcRi9fFkPRjvLnYTvuaQhMZYrtQTnM7jXev6LBNuDpE9jTUJYNvLj4gzskJfP",
  "key28": "24dyQhY4AF7AcVfyVbidETNGZShRUatjbQgPYcXtCzqxRzAMfjnXxYQBFSn5BXWEtUWjhcMeMGLPHMQZqbEJ3PNt",
  "key29": "S32HSw9UUnoZ7qZM31o7HwqEvirFo7z1m9vqJX5dmVbcS5dVgpGpxb92FJN9dELTLdgR7Smbi8y5BGqhj3dty6W",
  "key30": "KWoXLWMeoCStikBL9urQrQBYmz75eDXWVaZ6BD8UMCBdTU2LNfEFqocVcpaiQx9yX8J62PZpaPCEjYBzHa23jsc",
  "key31": "3WcHamrd8PPUJkmv3kjfLx63CPzrcXj7HZei1mJ27NViUWd64kK8zzDqzfCh95SqQQsCf9TgXrZL34E8tvF1N1kt",
  "key32": "w1r3dahHxwPsx6vT41x8M7iCz6nrfiYRKtuLTcG8TUf6H2nnHKQp6o9sC1oT9rDXq6cuphkktMNTKKd8HTjXZmo",
  "key33": "WhaA5HGmaXzQ9PJu1izW214DP5HNPfoi5ujXFYUGYGD48TJNdZqLzVvaopT76FJv81W86tnCiUURaUvTiLWtXUm",
  "key34": "hqP1eXQ7EP13WK8ZocBKE3CwefnfvgQ3ixLBBrBRa7EvDoWKXJnMfNUrfrfnthHJFegBNFaefxAwQ7cKmjHUXRV",
  "key35": "4VtZQAfvQxxugdWU5Jpq2KjpqPBH17NwDzoTTpYNoN1b3HHWdz3YT55rQukZ5o1FkwadZAESZzHxbCUhXkoABnmt",
  "key36": "4sCMVw9zsLaKbJ7A9Ez4jb9eQwsUZXPBMUQVZBLJkV8dz9emqvDjGtof2joQsS977EdJCxayVRy5czLn9TK6JcRr",
  "key37": "55CQYswf3S5jZoSzJTHfnbEy89bKVgaMpnt9dEkqCfjTqBks2XJxvubBSchfp8RJkDvrzy27D2RxxerAPpiRHEZy",
  "key38": "2wGnrWaqb5EZ36PE6bZ2Udx4V44Hpk2zGzYZWftByzgtwjxBwoq7c9LEWEBca4gnha3iuP4nRc1arDVGnZcBYzDS",
  "key39": "3zNUW2WZALfR1Ut3Nwbm6sGSjgtU1YtUNN4wMFbxeUjbBrTfXYEHcNSBpqnWxnX3vDSGYtKHHkbJgrziSAZr6riy",
  "key40": "26hDwtbtQHzeYtG8zL1cqabrYMSgLUKNjni6eSELKKpccQxuP8ZcbDRkgy2X9KYHUc92vkrCnQoaxUa9b4bAEYaL",
  "key41": "3HuaQQWXomY8c8mmPs3HSYoARdpohtED8Lv6cev3b5ZnqGhZev5xQqyK1bSEKwcUcoLL32sKhdiRmgE8NP5jBxzW",
  "key42": "3291wt54UefVct1MkFZEr2MW3B5LhLYg5wUvjgstN25xp8kkx9qC9rGsrD12QU4aFGUj5ReKyKCV5futGHirFhPC"
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

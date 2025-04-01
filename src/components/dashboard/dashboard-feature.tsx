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
    "4djpHpB4Ts3iBF6stKPhttWwZsP8ueY4YJDDGjG4zk3APHYVv71U7vij1WrLNuPSgHLqYiKRGqa7qZDrrmgUvU8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4txAzE2nzvjvsEDsM7RVDhNsMhJj7J4JNyKtZdfE1wYLpP67kCRuAFoXYSd36r4iDDtTnvSUdtMqBhbDHBUcyfi4",
  "key1": "4kwuB97UN7RuQF6MtAY7VuwY9R1RHdDVsGDmvR2DmEexTTdwga4mKnEHsioStu3uhu7e7CD32BVxmxJjRPsMxozC",
  "key2": "27wjUQyoL5AwZ8hdXFbqjyZYxtaetbEAUtgJmUKzZKzeeX7RCoqNWrpJZSD9ssC3eJoXWt2SQZYdP1WyFdWDQUrS",
  "key3": "63FuqT6mATtmiLLMHVDp3BMRaiXQAQfF2WuHXan9oxeEF9K1LnJDwDrmPBHthqye7jqQ4rVoDzPRNfGatfGjsdw6",
  "key4": "4GZMWaSgRPn6ujQtXhdy5KCUvZZc5wxwGA8t9SnzuXye5kC5nP9kDPKTh3gBv1jK9R9Aqq6n88B3FCY1cqGFEHPP",
  "key5": "5Cp9PsYCvhYesjpy9N6aKpKKdjT8V8G8ykLVgi4kmCBfVM8kccL23w6kwvTg2u2WLhXn88D95pqgtTB24GgZeQnG",
  "key6": "4PpLQTi97nTm8myyfwrJD7TfTyjzB9m4oCpFewvKxnbnLgqjMiXmx3kJ683bYvKxx2YGxgLS2QQVFHcb4y3jTywF",
  "key7": "4dZoSYhRCR8wYhbbLCbMg33EeAePVrL8t7KFBE44vrW6BpvjA48YVdVbDK8pYHfh7CpBGAYAf8ny9UzS7yXf6F2x",
  "key8": "5TFuhY8DsF1YZQEmpZVXPRshaUmq2qAGuh626HHxxeQ5iPMBaFrWMmMYGcM17eesWhVH8V9Jdv4mrvRVdCg5h3KT",
  "key9": "67U1Cz7LoSaPQ8V5EGBd6Mbmr2pYaHJmFgxuKfM1Fr2m7wox4VS593XagH2JbuzHeeAD2URxQkerrYWJDzvgvFiq",
  "key10": "2w8WiV6StaAB4gYeC7AWNtyLYtkFYtAt9QUxtUp5rcuMisN9u4rwTb8bPc4DBkottFB8vkkvreF8AYXqF6PBhymc",
  "key11": "BWfEzpA7fh1jAKk7gXTJNtc4anak82Vesh5BRkBd9M7XPtgMh9V8J1FiT2FyqYhDoT9q9jCNFSQAzChu2BLnL6i",
  "key12": "TTnRDscUkRf6pZB8xdXEE6hPCWUmJdwWUwYHrSkYzKwS5N1HDGiWVjYQV1NYB18vra2wNAfzriMggCWmHRmFUZo",
  "key13": "5Jz1zfMhGnrSfHq2fvvJEazp2TbunpbhC4eMZactXBcizQj2tQj38Cefj6aTM1EigqPi6Uu8sJkii9AHyUDfgbh1",
  "key14": "61zCgR2yTNzKmNKkR2rKhMCZFL2537AbLMjZU8VyHvRnuisG42Bf4V5qn1W9L1Aqjk5dBcvBqxUQBQT7RqwwH7B8",
  "key15": "58HoMbP6RMrtxF3cfFawr54Dpze6xQNV76C4cUFbUe9Cfeq2M15aVk9gqSgp2v1yrQo1U4WB9gAJiQWcGtg591y",
  "key16": "3tb46Thk6AYTfeaufwYavLwYAVaeUV2FqSnLPAUBqQvkyFrTZj8qzqKxcFejqA21fvD4pSD22pbf2ea6KgMbWcvU",
  "key17": "45VX6iBiUAxzQ58JWijigtSyxU15ForqpEHRwXXwCiLY7dy9ywErKPTJ8kvf2nnBE3DTv2NUNyK5uvmq9NLsCYTR",
  "key18": "u8okoHzwXZ8hmPHriKsCdzYsYjoLqUHy5iRS4QyRkZaZhHgSzoEjbEmHhmzckn5B5QzpoFsTk8yRA4MTvsG3GA3",
  "key19": "2864Mwo7X4XhxTV82QGnbHjxbEryRAg45oDAjawxx1B8jJjeXS3b5hBH2Qiqb45ECdCRNd9rgB3FnosriiNEYe8o",
  "key20": "3kbetxVaoWm1v3K74gosFXspoiUGtxVucbP1E9V8wCTss5FhLJF9GJfUTTAaHfnnG19mJk15UPFpsmZc9T3EU7ys",
  "key21": "5JYpG4defmhug4G98LCSJ3LzeRwhfk9ip1hXzDkmsh4DtzGRcWQMqeeQUE11dfaCgynsHqbVmfzEHKrRPuUbfDrq",
  "key22": "4aFHKJh99hCeqhDUgZjR5K9Hs8KCFZJmBCMtDRqnQVLCv7nUjKA2sedHGwRz9CGAJN1QqBtGnZ1rLaf1z1upUX3Z",
  "key23": "3GGph2MgiMDARHEw2TJb3yRvtBSg4XQyYXpbHXXKp7uEhuUCKJqoxpGBjNh6aTEpAHjtpkQW4Gea4okeCJ553zMd",
  "key24": "36xC4oSXXpKq7KSkLYKJxW79AyM4KFVWqmF3NnsXXXJFfaJdgahvQGJRDj44N332g82LnJ3AgUcjMfYs216pYYVL",
  "key25": "tC1NpkVnJC9tUvv6PTMfV5JBDPRpLchpw7a92N9VPJ7nBHP4aXDsodmSTE1wvXkewNCpEvuRfA7RmwekeCNzp9i",
  "key26": "pmEg3WG96nVs6UUHa7Th2oSD7ofsdi2TuBDW7u4DUhGSXDKYw67nw3uLeSsg9weWzz6ZqFiYJzhLyk44biSaEtT",
  "key27": "33kgTkcKFjK7HuEEbdJrejDcGEFXJNzvCdmyPW9CAzEWk2AM279V7SHXE3dxQKCWfq7dXTVBqv7G5CZ5k3qcCqRL",
  "key28": "5yBH117R5qqXbhoJZtwSyPYVsXBG3FqAPvhV57cwnJauccTDq9txXhC9nz5syvNtfNL4wseexvwKLgwB45zDeqy",
  "key29": "3S3MAZ8bUKpa3X4wYWxdy3uMdZjeFYYGznmqb8yRBN4YTa66HtG8kMmDGedm5Qn6KfDpmHCTxP2TqK5hfeqDku8U",
  "key30": "2LT4FNWBM8Pz2dVF6H5DJz82BVjmSsmEVfbdYc8F42dniPs4yFXzpbRUZ8DEsub6hUR32wj7uLMpneCjVad777og",
  "key31": "2u2BU4m1Quc9kb6nczhMWuAoTHvQpjKyKt4KZLzYtNoGd1V18iDJ2pTx1NU7nN1ckCk75JAtEXdwUf6e8eU3CXd5",
  "key32": "2hPV6SHaP8ke36u7pVWUegX459L6xXQhHevyg9DE5pXESqRi4pSbhe3ZshWZkRBUDxyGWhwozGzu3APpJdLqNLbv",
  "key33": "4AwTvsrMvpnN68Pfgpa8wNue1hXb28jm7xbWsiRiuyXrmyyYaUHqd7YxQm5SjcQmdAsQBzMXAr5XmMfKyFVyu3rC",
  "key34": "JnFns6ad9km9gC18WuwTooJUSkrxucEWZdhSpc3yrrwL1d41moba5QoJDqSAgUeRqVo8LJrX87MM6QtxMRsiYf5",
  "key35": "4fDW9D4T4PCvhWMJsM7VFiZyByxVoip4aBGpcYDoytm7yc9cDen9K8FK7xpVqpgVzcAH4fZ23YkQ6EnEYb1ADgq8",
  "key36": "3LnRQkGKLb3joFY8ZLbKX9hp1U3j2mUmt1f6LMJ5tUAvrHnURmy83dADTZDMBrxH3jSYT49uYcWKin5KUi1931oc",
  "key37": "9ZZw8SKoTgYe7UM2kwucVyLMHkQa4NuWafyLEqJRCgggTf7UNBs8SG8GmKujR22fzhe19YTjsPed3UEYqSxMKUQ",
  "key38": "3fNbWvX2CQwnsNhZNKrEYZNhpjGFgopWPd1yfdXrbNqq46hewNhA8Vw3fKdBCXP99xHTqsD75omm4E44HaMaeqHG",
  "key39": "p5zSXN2qyAfmFBbaBPvVYhGhT5xYdcVCtU2FN55fc9DAnrVdpe3twdmZ9wtDtLNQkZMQrHLhxPUDCioKehbg9rY",
  "key40": "21JeKvnHsua6q5zQZnxVoHBVSKGE1Tvhoxzs7poNYUaw6cR8R4yvgqPh3LeNsiZKVpX4Hxb41WyaK2ja6pDgAd5C",
  "key41": "4LwNN2aLCKnTbt5fnJyryk8Pb9a7ZnWfzT11He5gEMLLB53BpsRw27iPzNHBpqpcihBjiYxE5NKLa57ws1phQorQ",
  "key42": "4a9FzeDHFd2J75pfnYxijuzNdxPekCqBM12B35uzYT8vgx7q3xrxpMx1JSScUj7BocTiZGv9qWKz7qp5Rfpci5Tz",
  "key43": "2d6ZcXx4QcLzQHsCxuT5oCbgvrGKRj9ivoEw4SyeoWz3mVnxYJ8XKQd8WU1ViyrXkvZ2BVypu8A1yDM7kHvpJfsv",
  "key44": "67KkAtvBM5VRzamHV3g1MywbFCfujnssrhY91nS2MMK2SnYbQbuA3txeJbBAkvjrUe3Xx7LC66g2xWchiuhQNvPy",
  "key45": "23RAFTEBGK3tBEGMacHQSAtAQrmsz5MDqRfXSkgQLfwsfMN7fYHMH2JQFPvV1fPF3qjTweiymxNK5JrHYELpSniS",
  "key46": "3n9KjxoNLK9HomZXJu5g3XTB7C8LjyvmfdF3xF6NKR1pSYLz4fD2JGkGQTiREg2f4s2JcnS6wc1RSDtQQQgtQ4Lc",
  "key47": "2H1RNZqjTKQSDeXsR3Lz772gQKf8nvPf74ynYVpeJsNSiXMcQJBettR2gDNRq62ERsjWzMniGB1m8HJf5WkfRu1J",
  "key48": "5dm9Cxf5Zym2v8RE8zLtDThFNBMCkGaD9j5fQLj8wXonXHHGiD7fn9mbyfamXdhZquxC2fXSGzLuwU8uGzWpfAH2"
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

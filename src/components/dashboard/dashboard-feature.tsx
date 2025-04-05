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
    "5hCqZJuYXJzDzpWq5Gfn2ZgF9EUZ8u4N7dgRVJ5w2pf1wZR1QsmniMx3zkrmEiAjHj17e6siK4erK2CWJW5dHL6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrRMJ9GGfJYrAxgQUoHE4GVV5AN68ojwUMKRoswMwhfEao6TeTUya3uzVvBjmSvRazYTupAsqL5byPkPBU6EuF2",
  "key1": "2QLPaHDSF3FrvXkMkHsGtHuTFVk5yxK4aTbXe6V79PDpJGP7jodrUDL6PvR9ZeeWjgXowSybWRVBQmiqUD2swYTJ",
  "key2": "2GngKJtgEXesR1KJFS8k2eoPAMW8BXRnHvzDkMhXHzajRu2hSPqScZscZQq7TU4PJdRPfsKccxA6V552SRgY7YDj",
  "key3": "2xVLeN7PMrjfuDFM3JU3oiCtdt3Jx87YYjuDh2GzdaU7J4xec9FaNr5S6RVjiu6w5BdFbkt2difvZrcWcDzs5hVe",
  "key4": "45wrFZ1YZ3yoTAMpJH1YCoQZ4fDoTFv9AvCzAqobawcwPZwHRiKWmi58uxdHfUcC6idywXJiftt3mTnVTPaB8XZY",
  "key5": "2QN1kLqgoFNYEdVEmwqaLe8LztM7ENzff9xpuwyJiWumuBbEiX4nJa3WMTB2wksmhCRWxsyubxdD1CbpRMp2W2XL",
  "key6": "5nPYkAT2yM9gRAqksPY6BceQbp9uSDMYELq82yz6GnqbTMTo8mKpRbmvqYFFzHpc5LyNvSf1GeYsutkT7hkGPany",
  "key7": "3rAhjaLnY9wubK4nHTe5SdCVa81ch33gvXGHdyanni2MoNY6vqJiqCRjkYXjzc6Zvi5SUu35ebcc4qCr3iSPxfot",
  "key8": "5YqnD7f7FVdx12ECxNiTp9LHb4LLUABYteer3q2sWEwEfaw1ofGw2t7aPPKmcnfWCQXK6oWQTeM6EfvCn7ih7P5P",
  "key9": "4mgwLcaZiGVYoFWvaxcUxQg8T3tsgreQ7y2k7X5Y3BqGEHdB83Hsn8GgXbkgAgfHemPBHC2ou4uXeUkGZCd3ZoTh",
  "key10": "AwUudqG4vtiWRFDo6ZQ1ysqvBEnxLKg1ovYaU2PSM2gviSuv17h1vK8BEaNqgFxy3VQibXakVHLEzSNpXFZr3wY",
  "key11": "4ZfqSyssXo36MXd3yjaDBXYgvWpSLHXe5tXs2RYVRJfTQkVd8Yhwffajc9nvHsES5nBkCXw2EtwxMJarJ9Dhom9s",
  "key12": "gtiUaaAQUsBw7krRWWd3MGnL9C4AoAC83Wa5zs2Va148PKaAjUrsD7376r2LDibn6bGkHKkKqAf3iLW12F8ci8p",
  "key13": "61GRt6pkivZEsf8uWFTRtaHvibZ2R44x4QQ78cdyDryhCbUW9pWmjoZdENFqCHBrJ1pL7pVTjQDaoFHXnopG3TKR",
  "key14": "3JFh1LUoQ2UGX81yufp9qy3ApDyrjbRumcqoULE6pLYC6BthuRSLxS5KomBEjTFJN7qkzqhT2BMU8JAWUpad661e",
  "key15": "3FZxkLxeP5Kf6Ujg7XqW348ta6DcXHucDzjsBAvsjCNy9PCy4RL68vFPFWLdzq4SqU1The5kZLJm6FojLMfdxyZt",
  "key16": "m1r6WAM3iq9WhszQ1cMZK4WmMpSQTGWdDfd2XJwrcYdrTm2SLsLuE2qAJ2syi8v3GKSVLEbsUd6trUGi9QTE3RM",
  "key17": "3BjqhMYz7PH3G4uMtkPHNchtsFghqwkagvp4GgNoKXNTYoFu1NHUj7KmyE2PTUTXs93br79aE5GEZ4eN6ifRVTtL",
  "key18": "4nTHa7Ruu4tZft8a7DnUKUYx4cHUNH6AhRJarE2D1pMCLDCrjVRn2jQqQzYPptDZGnbmADKhzoYT4jJQhQeqNQbS",
  "key19": "4Q9zguCQTmjFHZc3hHTFgyNBnYFLw99RVa6iS5tPBxsvopzMtstv1xAXthNzVVWbsFY5DL5sGNXfudYaXiWRfHUZ",
  "key20": "53fUAB1hYm37kWhwn2TE6cNZh1qNkn4FLcKAzQ71oQaSxvXbiegh3WBuSwhaHa6pxvrP4jb62SFN2N4PUtCfPSRJ",
  "key21": "3ygYszsAjKqkTHPq4y8iWaeVidVPmak3cb4su3M3WJ1cb1oSvbcQgbHV3EeYcMd4bNBPp8seaREitf5gVeHpM8GS",
  "key22": "whvLVn3i6ydTnYWXNY3xwVVdWWYufBuAReRmMec5gsq2k5AmjpRq4DYeasvWs9RmBUWXvyxJYp7efD4ryE25rZp",
  "key23": "2YFe8B25A3QmgjgaNSNAZU1tv31LW4aiQAMHCwsVn7sKWnvcH9bW62WMtQr7dTjo68bM21T3fzs19wXD66fwjBr8",
  "key24": "4GGa2cRsrYLrNRPUq55p5jXEtuBvUNMbxtfwD6zkdbRVDCa8Ppjkygf9KRUfQAUfscBQLyJNqQ5SHrSwQqwXtHDb",
  "key25": "5dEaPro8pPxwUTfrNroSn6bhBHsQwtTpLSkG6Wv9Ppnkk2pMM82fg5CJpUJgt9mg2LUhJCG3sb1Wy7FfvvrxvDRy",
  "key26": "xyn8kuKnzfWGsbESLxE3y32Vg3be3LswHM3moEgjPNVgazNqCo3RvFN4Yzb2WR3FL4FbRmy3CcRFcrrSYv68Gi8",
  "key27": "56pefHrrmV3Unk5ij4PDpbiVyjMp1LCQFNmKhjnfchUDWVHjsePjuE3tUjQsSpJLdj7PSvbUSQiVbt6vZ8YJxXtu",
  "key28": "5HnRNYEa4v9JGsQ3ARB7mLw5XVWxEKtGPnAamwVwE1GNnkDiPb4hpuN5KF4TddEBQooAXLHPitRWpUSHZPs1zv3T",
  "key29": "37UcKACzYdhiG2BFmrAeHN6pe1XTQXFHGbzUsshFWjfuYwkF4XfWB8X65BWGQ95qSU1YjNF62G1a1hB1qHtmVk9F",
  "key30": "1Rwn5ctHTpfvC33sUouLA4JnuUHB9YmFT9z18Mzat6jwCXsL6t1R8UX64MdChhjNUzkq6VqCPCmLsbmnh9Y57rN",
  "key31": "2hDThb3rGC71tRvqtmG7zgdq2HdqWVo9kpPNEQXadpqpZGSz1kAkwV6x8QYL8qf8mizjpc3d8FP2HZjWecvG7bzU",
  "key32": "QqVtPhTqpbr3eCxhPUpUoJJkpZJYcThyT9ArGKNDn4vnKMBHTBERR8N3GwqjsQMXPMAWGugcCBredSt46eMJ9A1",
  "key33": "3jTGWctLBtnvg6ZwTEt26rH94BepoSCre8hdzs7E6Mp9QpXTSxm99f8MzpqUoNotvQPxhip4MTjSm6ecMpT6q43w",
  "key34": "3s4ZHQvb95comuvJ12V6NGG6Ue4Tts9Xqo2ch7tJzoFdd6ifnHVTMpsjgBT2SacAZMoj9SVBeBA3stvbtZfE92s1",
  "key35": "613QcFRF6GWJunXUDq3sytQeCeTFuxMssXsZPxaf7wVaMDKFuaUHkjmC2NQAdzTUgtPTZcnMVBw3pK56W1XygB7M",
  "key36": "3eoVptuTSd7hxzMjt8VF9auZYLCL9kKA8idU2ozTYB2LTzPwajB4BtfUj7x46AFVnyWTwNHwHfkbvQgxLmu3hZE8",
  "key37": "5jvx8AkjrkkwdDbswMs5k7Sm7moUBwYuaKxwMhHkR2D9q8yHSLeSPuKEjEVvhJZqHJjsKwU2SkKr2LJeqSuP1zXm"
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

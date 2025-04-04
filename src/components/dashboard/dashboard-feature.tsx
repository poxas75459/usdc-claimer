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
    "3r8VHaUBAAJo6vZh4k8dXdoVkc7UtF3RCvr2Wa5P4fToccpLToqGtAugwJFjWLNqA2azwcqYTSP5yRC8ThWK8Fam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rFhq9MzzPA6YPTRbuyiZDG1hz7NGg9D9tcDZqkDfHGsvnMLPHRUPBqHEnNVN4VygLDgzeHwBk3hv6UJcE1dLJVQ",
  "key1": "3BKYahMQqRbCbTF7Tj9fD5DjZrD73xXimpJ3dQLQp319FwohqMY8foqPJndXmA2B6jh68GmekBhchFJa9vyTsXLm",
  "key2": "2d1jK7UJdjYTS3nvdfLwjqhjbBshcFVm4JmBocaoEUsneN1aqEsNVgDNLZ4PQLjzJJ88f66nnza473eS3gUS6JVa",
  "key3": "2QxMLB9Vx2wiA24cNqBFZDh4G1nUxhGh1PAUa4kLtTwfoGv7RPJbHShdLpQ2HzyRdQeo1jMmfx96Z9qGuCx2CR8r",
  "key4": "5FytKZXbdBqmoNuS5Gty22kuRFqjRkVg5M6B8jQq6BFjCGfDPZpSG2eQ9N8rQyGYY7tch6fCT9aewtJkwXkR8C6T",
  "key5": "3fzN36rMppQVwfbvwcKCBTnVW7pVE2DgTmCXdk27pgiTvJweuWyBbymeuH791Ds4535VUaAbqeVcb5TAKXK3UbBN",
  "key6": "3Qrfe5PWCXmoJ6pCdu6d7CXZHBg1QyEEEyf8wH8owg1PtEa97gRSs3zvjY9t4dgYaZwjtL3WWWeCRsSKKpUjtmnx",
  "key7": "4mxhH6QRvpeeD1xotu5f8RoDPMvpJESK2J5BxoZnMWVNtrCnzfJKuwCWLaK4qTn6CpXhWoPKPok2Wc3c5PsLFMkE",
  "key8": "4gTXaiLuPWrUGmJewn8PwReJXJeQdPRJKhfzYtBw35nEbCybFDtPwyV1KAgBSC9LSWTGaJJ1WPZJ6VkUyPy49Wnq",
  "key9": "41pR8sD1U6d8jdWrrFgJbXX4rAvUN3dYS9qwh5dnCmCeaCGHe9WqtM6T1rip5j1A5Sk98149h2YXA13rJUeZkh45",
  "key10": "4rw1cCRDYZuQxjxTtxc3Qpn6ewk85GXtdv1JVkEizcTHoQRdGjoU7WZToQJP1jii5znnuagdvzSusjsK4uKDGunX",
  "key11": "34Zfnt5XQmS91KnpyeqxL1eKZd3F4LwWuoykJZG4XGHwdft1aega4TaP3Npsk2XjPFfRic33MEse6asd7uDQRCQ7",
  "key12": "4rXLcU2Mn8XzmeuBDqwssvrVJwMcbLMBNhkGRQ71bSqzbpH8yz36MaxRHrLyDiX9sb53qhJ97tFxtWQeiZr3ALdD",
  "key13": "5oEr6AvnNMUSwBmDN8RBfLmNUSnVyQjv6d2NG4LD1egoZJnFxFpLrRQ5s9ZuvBiLDdZr4GQHnhrSJpr8DWr3f4Md",
  "key14": "MTd7pGX8uZ9WWfbT2YnzXcbda738N88CSunoGCZ6V79YCm1nGbLM36TQGiAqvkmcGVHLEWWHd9bbGfyzwQZUBu5",
  "key15": "53bpnnfrTQCk8XXtfwPrg6QpEMJUmYzFFSS1rwb6HV25TA3hHUayNv5xsrGpJN7HPwfpJoH4nPwqB8bCp1JWzPeb",
  "key16": "5DCjKDoJcV2kooxUEBoGYDopHJciP5LDhee5QVyaumrVsNpZNSWKgY5No8kFZoA9EYrLgKD18p4bjLfrwcMMP7zC",
  "key17": "65PHU54bp65zyKvTUST7GjbaQN7Gir7awsSUqZe1B88UahuCSixxkD3DNy2dHM4cygU9mMRXsiFDhgtVQNj3JcYm",
  "key18": "3LGQN6tcceYPYZphZp7LunTKyxEy55WGQ8P7BemGaa1XtPqAemYteDXvsc72JArmTAFRYa251a2EqfNox9wQDSSn",
  "key19": "4nmGTLvQDTN7UVKYYtibmFviBT2y4Ck8UurAbfY61TQv3BXfZgT8B5rPGnNyctYPECgWvgEKoHwuMhqgSRvfUXEP",
  "key20": "3brYDNWbK8mZ1JHvHfCdzaUktLw91ENPSxLezGR4b6HaindWkZCLfRWBj4BDrWpThaykbHc4sVHwxgJhRBxWLVuc",
  "key21": "RgPSqSEw4YsKL3tzztipNifyjNSvPQrVLDuweA3xSAZwcWUJwWxy95Xc5NxddstCf87QbPEbucAe8BbiTj822t3",
  "key22": "dHVDWpQDbBm2gPm51RxvFe5DL7mB13Ys56jAUFeb9WfdEKPmu7DcZ79vHCyafMTpWwRffcKjxzhfb6k9FtDfVKg",
  "key23": "5geiunGfghjWN4XZUvovcb54Sw8BKzpSpn16ZgEckhjbCNmz6wx16QQk3c8YLJRCaDH5fZzbLF1eVL1MuH4rmgn2",
  "key24": "4y5BXVAT1PY3jR6HfNKjoHNGm4oUczYT7RrFbfRAg74Q8bkmrg1UjCaYpuiSCTB5FkknGC4TuPzDCDYgF8gadrT4",
  "key25": "4bgG1oGE2CpWfJdt4A6SnmFhJ93JKaiaj3vVrvMe7byizdBVv2E1KiUpMURmNBMKhmJy116Y1BwrzjcKmn4cUUUv",
  "key26": "65WbLYBEVJaM2TfyNJLLdKZe6veYtDkvZqFzzuz8V5dSq3z5RgmWK5KJNVmmc2AXyqb8mNkxUq561X35Mhn7MXLa",
  "key27": "3tatBBKcRuv6NXxKW3mAxDiTiR5qsS3pXFeTnfbETAgNCZBajRhnUpRJZ8hNJTVmT1rHPVyaKgdZBd7dsSAPfCAm",
  "key28": "3iXZyNu2w9y3PZi3qvmXShFm4tByCEB3ZRNqiTPFPeTeCLKVqA9axKmsvWxfanhzzsvpkAK6XknwL7c9qgKZKX2g",
  "key29": "FwrxzcR8y2t3b1aaquVX58gY53V9XjiRj2ejfBmrKC8DSr7BkRkX8hUUwUT6c7FiHjp7QRyEXd2xdGLjaFJKBh4",
  "key30": "2go4SYTs8dNbVZwCv5Mx4Pm4xWHYX4cPp5WVX3pv7cs4TTfLyUazFhNde3zJQyKa5Zn1Vd3R9GBPxVKi1CQFThAH",
  "key31": "36J76bt2bYReaVb1Hxjp7R7sdinBoaibg11iASY4jsiWt2DmpC1TgYA23NDo2KfgnoTcoHbMe3J8k5yLVdRddVkn",
  "key32": "MwYS6cry8z9Hu5o17gSEH69fMNSvK7JAh6aMYaV2RWc6DjhJ2KwCxWZDhn5yuYWNyi1rErH6Q94LEheqvw64pz3",
  "key33": "4sEAHqhtYBLEpPKrQQWETMuPuPhNQSgzkZThRJvoatjuqajSrzAPnMviAz1Vy8Q48tS7yK1Hcvd7qus2AnLvow6u",
  "key34": "4ys993rsdhKWztYWCug1ayXozjhMPy2d8Tae4DQRzgm1vmg7gQe2rEKi57kgnCkp4Wi8NQpBAfxRAJre7x4DrG7c",
  "key35": "KH3Ep5HGDMJFQ21p1GdL9KkWnEQFzwgNayj5TzsnpNg4nBzFFocYw86h3XR6FavtnNexVuXB7PyXe7wVZJAfeuL",
  "key36": "21rELNiZX2xCcRyTVhNzXMk9JDdWPYNgVxciGGVXeo1aqivJs4GSq5BQF4MjeYX1n5zaUva1KjyCewNg7UASCuc5",
  "key37": "5e7GvQHqYqmzGjzQdZJnoNhV4kfuu1uRzJgMrqyyEEvx4jWEzh1s8s2PFtSSHxfnicYbzXa9989Cg8GPQxyjbyu4",
  "key38": "122XCn5sfC13tnfLGW4xy4Jdj2w3igTAzB8Wtigqanz9fX7MmaVUpMPdJL1JMNdBS1om5hxTfDKiVuGCMbZMut16",
  "key39": "4Mj7uP2S6xG4pYePaJER3jk49kzLbL625ReSRxczFgRGZXvSYApL7AKpxeyGrjxTrS4yVZf1cSDCzV8gfpJwrg4n",
  "key40": "5BQdYRKiTAkz1fvy4jgN8u2hNGtyVqRhpGo2QPZm7j7yiHBurCaxH3pypLNnA9F2FuqWSzqtu6wiKFbE4USDDNKa",
  "key41": "2e6oJ9Qtacu1WLuytNodBFAGxmXJfAvhGiXoWjrB4UHYPC5DzC2dvBvtp2bg7XafktdjeRGX9NH39Noi84MftR4Z",
  "key42": "4WXG2VWDWdXdA4UwXmDwLc4RQ8xX43CMsVxQrwPyYMhjp65iGtpaxqCVFaLTxGcKurSf7fjw5XkA4F4s948JTX2V",
  "key43": "3y8ai7MAbKuHpgEiUNau6rBZwEeHXf3zQVTpwFtEyrMFqKot8ugvyoXgqA7Snh3kZdeg9Ls5riZaSkugDQ9nJjJW"
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

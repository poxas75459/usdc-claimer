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
    "5XjmbeyUhhhesvygYe3qJG31vZjWn85LAwqqC6FJAc7wJmUdx8dXLpGiy2b3ah1WyCGjfgVnPzPsq68NtcNNumav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24oCmU8UofXRvgzjP6spnUfqU5MbR5KtZcbc5fBV9CHQpp2mCwrrCjuApEF9PkFHBTpx23i2KT2zcBakjdhzta2r",
  "key1": "2LXurnduBxgFw1zwMUeB4VUkEksNaMR9iEgM4BQQQG9tkzzFJUHUc6FPRx8qCdc5GARhzEguLVk8TwXAuvcj6wqh",
  "key2": "4zNNg8ozN9qa62aTeEJ8k5M4rUmda9bE3BYJeg7PFrMA6kx78FhdiuJsmmXhe3Fhd4KMtcB8mYxqqJ1qKg3WDoMX",
  "key3": "58D1UCUEEV8vXDXJxvG5WxDJLZ6iCkR5jTUZW8PN8btAYB3CugrtJ5fXdqT68reCTtVqFSj5BQAL615sGqSHqPBA",
  "key4": "4dyuL8mY6jQKAh9fHz8CCwdyKpmgDeGgk8UhRqHDLcaKcsGLE83oUStfWY6Mp6zsQ8pnAUNrKPVxK4nPvrw5F2oW",
  "key5": "3zEXhFacosrT2mht5G9N6PMnoHCyHkk3AxBiVGJTxFuFgeqhLFATZ3DpSXCQQTb4NrCG15ne3ATSmj3pXBkTXPYo",
  "key6": "2sb4E8uQrWeqtqTPpAHy72xXhsbLPD8cQBfgkwE9XvzV7pyYkUJYJqr7sLbZbB3FaphjDyL4dG8EkaEZWQCbvE8t",
  "key7": "5VsBFbnaLxF9L15zFvHniH4x3vc5vZhRAjFD8Ft4ftB6Uo1XJszB2WP9wYjAJMJjNpABJcUxKL5BmzYWzYuBuE9E",
  "key8": "4TkiKCfHgWtocaKFqhRHNDuCHfm31YzDGsgzn4qo691qknWvPwhWQCTVWdoqYCp65XTUbDRCTD99RPGvzZHd76HU",
  "key9": "bBT5nVB644J7LGHCfmfawDW67FeaAQrtt87hyahqmi7XdJzBuJ3iZyouq5gwWtZ72xfCXiLkDahXCKspHKpUrWe",
  "key10": "5LxVGT4JYrf7rpdUSRYU4D5xLcTqnmTxgRcqD117MfaTxA33qzgSfmW3YisvXGkqGUJUjHnuoFkvNG6JyAVVnArR",
  "key11": "Nfq5fbBywG8zp5QubWZdsTAFV76bE3nJ94G6Zqjz7LgcewBsiPAvPVo62VDvW1pn5SFSkpgfaTKkp4nqvt5D4d9",
  "key12": "46ybKgoNnmWvCRHWkepfE9xYFLsNFRL2jxpWe3PKvJh1Yn43wsFfGnSQTsHd1ZyKef6nAafaaJpwG8ZW5B2AupjE",
  "key13": "3xZqAy7R7NxkX61BwvGZSvdXJffAwpSJdvyPvRPwEfqson1cAXtCoz78yBpwMqepsgXPxM1wWLTAfYUHLsWZSURX",
  "key14": "iBAb8w69K11czTkKWuYo12BQk4nyEdxRbCNWAEFFsFGmDtSGhE4LiNsQL9CM8sggCdudPHQV5aFDdActMgh4wwW",
  "key15": "ckNU8QoCcc2bEfuGvWWezTYPKoprqNdpZ22MwFxHVCbyvaajs7vg1D4HXrYhtbRibofg3jW8DsiATQh49oC34rk",
  "key16": "58pMrn1B1EhsE26KvJ2E9eLBMwkFj1jbhEdER8yYgXGx2ThA8qsRDD7GcQmVyUx2sujwTiDvhRXRjbLFZNUf2C12",
  "key17": "4ZizJ2WfNLU2g9mZLpvZAEGJCyBJ6bxQUHhBopGHbvxJGYpF4J22ktg6eKNLDuzMzZcpVuSHDLjrFJDvvj7QLAof",
  "key18": "3bQf1AHhonwsyurBDD9AnXqQza1kXiC9hMrkLVnbmwKmGx7UykQrhmMVH2RfAnem7LyFppKWfAcRtC2xPUP3aKpb",
  "key19": "5DZbkdo473mNZYWpiGKkZQ7TtuXRJZNxVvfujQy1Sy3qvKDFBiLU7gW6Ry56QamgqQLd3TDxKZTS1C25LQpitbUq",
  "key20": "4jbGX881yZTMLHdu4BnNFi4zCKeFA8152z1WvEXmpCWruu26jtSMxPUe6DTdrgd7ZKirNTkiK6Wi7HGP2aqde9Ug",
  "key21": "5kMDxyJuMVL4QG2x2TR8qdsbTR71radjzdURVbZkc8qk4QFC74fLb8xjAT4gS7p7ghoHoYqGWLc38gVLntzM9tAf",
  "key22": "4ssbGHzhoX95RousKToMo8Hw4cKgwTQuHcpY419k8bnyApNWaCvgmJEex1v3M1eGwyTV9kztnNhcCxGySrq29nbA",
  "key23": "dXfCWPo3s6QqnSNewJE7GsPsi1QN1w7HSzmTpriKyLpmsvC3ToUDmAkZXd4z5s7QpX1itWoc6DBiau1E7vTKZ4F",
  "key24": "5Si7zUnvDbuGqjHHUQA9gqnT8iR68K73acJWoszKp757W2Sr2vhpT5j4QzHQrryxecG9kWuvufeCCxMq5e46uz7B",
  "key25": "3JX27VXxL1iBTn6bs8XVc2ydxFbx4qRR3jLuSLCBuTq2V1x7nTR7kicbVyEvgs5vGicfgmo8j6J9wdg4W71aqjoG",
  "key26": "JndgyDMAyN9KU4rtedetsKLkVQ5wV92AGQsaMEcuKYe5AucpACVe7KpykbEtnpUW6K4qR15cauRXHFPQu25s92L",
  "key27": "4tdEYQ3jG2rAAoyKmqHpBUZqcQa6qohC9GGfUasYTy6qroghX1eM9zd9Hi1T7XoY4WcJ6buvHs9vtbEv1Ky5i15d",
  "key28": "5TK76Un98R5iDzPLHn1PKSMNGdoTiy4AYFBL14wsWygNcDu6Mx7x5pKVpujbwEoWk85mM6xfG4KKkJDU4nuiVRac",
  "key29": "2MDjBWNG1aykzfBzP3tANFZ8A4g2jxa2m7P3HUfRGxXDr7hd4QMrnDnXoYLXyDaazKyqrTHLPqvW1jNTAgqyMk57",
  "key30": "3z2j3tV42XVFbCMFzvXatwzXEar9wix2nuARfzUC3myQytVs2oJUH9gCQ3NVuvHkhCRC3NMP2ENTBnQ2i3dEgpw7",
  "key31": "2gKSqJPaXCbub36PXC15ehcubQXZe71KCezVJsPtPiv3tHoD6wgKgrLQnLixY9udnzfCqEP8kdAhavrSGKyGXGvK",
  "key32": "4Frt86FhBPS8b8Ct96YM3xwKCLtqYwcezbJsFQ6jnSMtQbzUJBf24Fe1kMQ7YeW99Nc8DHKtCZh4TR73MAJEAois",
  "key33": "4H5TSdfbVroFZyYPAy7naDDddha8gZwKLu8WL71Yfr64YjXC56dSYFTwrAmSVzFQ8CizjNFNyZLzG6F1uWMAHyW7",
  "key34": "45kVH4vqkgUCiqikCPzoGpnWkijbGFhCb9ZV8NxKkeRQex3zrEiBscW5gBJrBkkaH4fuiaZ7NpuC76grhLG3Zp9g",
  "key35": "4onVToFibfSf5LPW2kFcw1Pq2wKvX1sp5CmUyMvxfJZGyRnFAXixseMjHRwSjBgZWRo8i6bKPiaxweDhGqdrefx7",
  "key36": "68bbMjChy8b4TpiSi6LFL4ozyJ9SVSm7xHaSyCroDikCZDK4JUMPm7U3tknBP4wxdEV7YYi1an1KjJYWSYAW1zp",
  "key37": "53AXS4qJnKSJ3ELuWrFi4qgMaHD7GQgRd9eNCiJzRj8RPdfqday2NEt8FucsSYytWApjwi5VDQsxa8GxPoR7FuYt",
  "key38": "67kavYu1UD3dvtn7hKGi5d8stNADLtuD4oR4S7YSjz5U2LdNsFDfF2onq9hmHnShngyEaH32oCgciKRwRZkEQDwn",
  "key39": "3oPkjtdD7aJxCakFU6fYmkzxvS5WAvFFneyYC7rXejpYX8Cr1tyJFc9ykjifTFPTaQjcqFdCMg3KdW1AKfTDJq64"
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

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
    "f4ipYgjMoB23RYnYREPmqAKwbE5rrreocUCZmGQDxRHSWSAbbuxedXNuj8mKfnWqx1LhsQANUSjBrjaxAbuiRic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cMaBVu1d8AYn6pp4wJ9NdK2XSV2sg5ohNBUuQ7Tfhbor4FFRQaRFGiJAS22fUbWYagwR4ReYx2Hk9sFJMhkj1b1",
  "key1": "X6YKnLg78AVsEmGQcUu7mebJrDRqtwCnaRoVJqikrKhqjiXZbvqxTbf3s69tdqewton1xQYGALqLM2xRQgdsG83",
  "key2": "eSaxcCJo89Nwtko58aYHRxDkXrkU4rsZ2vS8DLKDT48zesq3yGFFdJxmMj4r3oSmrc7emrac8VHu4n7HMyQCK6g",
  "key3": "3o3YojTdsoGH5RKVfu121Mp7uC63hjFa3wtTfcyfdgUxsiWD3nfwTTh7C3jwbecMjcJpatTqhtftJiA1WKE67XNv",
  "key4": "5xt41YAo8S9BbQ3vrTrierMqL1Xa5mMQJsSQjNQZ46BJfMEsKpGTbFHFA4jnwQfZrgfN6osQdddQ8Ekc8zCFxTXH",
  "key5": "2VtuEXHSpfa16XSmRTB35tYLAynDm29C2yfYtbNx1a8Jecu31pxmB4xuhQgMvuzD397sThN6QVobu3Kh9DLKkRSj",
  "key6": "64HNzKeFSWFG3KA8Dk2RpbzpHQ6tTKdq4adS1D5rDojrkS65mBbLh5zDaNw2haLwUGXhv4fgLpFbS1USLjQPPTpr",
  "key7": "eFJCXtGW4VZV6EyX8vJvzkV6DhqhxRoWuStbcH4uZZPWzWuuGLgcmGgoK4uuDgcdjZZ6usBmHBj1BBsir8KZ7kg",
  "key8": "2eU94vUyzcc7DovsVpmpHYA92bJBy7uZqpk4hakFwkygbs4aMMev5LMsD9qEb1HTkqKBiV3HAkagMbGNnXHzm3QP",
  "key9": "4d1dbT2wyfmgyTmZ4iPb1SxDfCs2xbZGpwQWRXnthCb4YFYYg7LdGGSD6fASRf41uqdVAksx7vBL5kBKR2ZxuuN9",
  "key10": "cLR4ciSSXS1jUwHpmC5DcxcPdjWfa4eCW1dpxSPhSuHVqFXkhqQGzoXYCnmwX4qJ2qkw4QartTyDR81LkNpy4Qo",
  "key11": "3YBe9cxrXTPEMhGgznbKTaGUgvq9RbRRwSf4aLAqoWNbxYhqe1GwYnjMC9EifYHbJ5b198YqdCnF4NeesbhTzCNj",
  "key12": "4xUEvn5LSpSoNuPfJsVaF97ZGMsyqvYHXG7ySMALV7rTqahftrSy1FabEqgwmpr4g1QRTc8Wpquh99sVYeQAvXnX",
  "key13": "5Q4HbSuupqgbMLAoiZw64qr7RG2iS63hXTwPBvhHfRrjSQ7q36qtxRUCQD5qkQNMQimd9zBb6tLpdRFV4RTyFaWN",
  "key14": "5tQcEGgGvPd3RzFBM146RTqBPVGWRQHCav1ns6812ohJmn2etE62a7RpDsA3jdfZ8cc51C4P7NLeFA9TV7n7Kx4P",
  "key15": "66oDv6wmjAboFaoASesf1yhmSb4mwXShWmookyp6RAhkHMPfrBcPBAgiP2cTGBUefZukHeANodk9F4Q2NSzi6XEm",
  "key16": "3rvhrPdQQksLDB2V7BnnXxoJDEJ8pV3bUJzX7e7KVGTCvg1XiArArmcsEY5igd1gQzveroXjQBEXGKyMogw38wwe",
  "key17": "2oTJe1Lpe2NdhMctF5icsARcQ8wYoRwNTD4218EzDboHjMWvavzTRGBnWtR5mUoRpZyXEgfTDg6Xhf6RZLxTUii3",
  "key18": "VNtot1NmAJue6uHBL9hgNgyvmtDCr23RiUBVrxDxnnEsTSuLB6iFxLt6btcLsJZFGjTYeyt3ufNBMDP3oJca7hq",
  "key19": "3sARChJJWU5zTUrfdi3dtuhhDQEogmnJRgLLJJvgmgfHJdjDZGKxVA25KP6EM7GSeskow14D4ppnQQVhfWszpKJd",
  "key20": "5LiDvjkV5JCAxRdvJ2DbscAoPKexrp2HpcuYDmGjvXRC3EFxBbj9PA2YhkXqkSEwaba1rgc5noVmmcT9KgZ31KP2",
  "key21": "jXsp7DwedN1vPbk7R7sCWDwmU4vDbR9sCMPjHJXbhLFzPRxyGzLQKm1gFR5Ut6SrMBYrWzjmJddFfRi1SX6yrHN",
  "key22": "2oXWpxV1PzHedeMaifEmW9gcmmNrggY2f6Kzy5oEFrkHYCNCZyxqAkDTaYScszCL4eJwuU1X7TyGizA5JB8JWbxB",
  "key23": "3j3P8zafDxcMHwTpXUvNLkQKN3PsMBDxbTvE9Pzq4pz57nX1FA6tHt1iDU2bawzF9dWiN75ganS2CWUqWrYT93UF",
  "key24": "2VijNTX78He4c65D56YSufSkzE175ZuA3uqUYJA8SqdfmStfeWh8m7Lf7ULk1oDMPBYvFZuHgfaBS4PQihj1unUd",
  "key25": "YeBD5ozMUcG3nHKxLsrPaf81UMX2ECcBSsHNgh7hZS3gBBumSnkUdQmbFcrnP7Y2CfEBKY28kbiuaxCkWvey7P1",
  "key26": "417MFqrYMGPQjQ2fNgSeHyXTT5mq2BAT7a832qv9koy5U69GfZgyRS79cpWfGfKMy4njASf2anUsQUXNTJqGpxpK",
  "key27": "4sjwhG8NFa5jZP7HwS8RWZW6EmZ38JhjDbk7e6m4yeR2LgxpAC5m5wqf5UT8gQ5a1tGTgr8AQ6afz6GJYzBUJ9SW",
  "key28": "4pPJeTQ1dyZGdPg1ciB2iNwxrvZXgeSnpkcv6e1GTu41Ef1s1b4WL2iUfyEvZsgRVEMev2jVZ5wPRbgkU53ndRKi",
  "key29": "EBtA4fM3CQB6FJNHL61xed8qo5aViiNswCVqfB5USvZbXHK8aDiQb4KuwsKaLbHtfNbXWtrKEboucJXDGViYY5c",
  "key30": "3dqYYJpW9cS4oyMdXAUiAuGS2NXNVNzPfmNBxyFdKJmvrsmuhBNep4k8zRPWMv6tcRRs8qSqKNMYbFyw4soEGzJY",
  "key31": "2f1jZcSyYovEWFLKfnXRdXHQmjocqifFKF5YWFFiRnA3c8uWd5e4KuQE7AXYB1sK2VP6X8e7VNBuugP6x5nNJEE4",
  "key32": "2WEHLLNn2aGULqgj8K2mws1qpLXcQDFLXiBq6jys7QruhW1Az5Q4EHQrpHxi9x1ioxqeNeruUYcJwP1U9vsYkZfb",
  "key33": "MXEB6k8twMd3cyHQeZ65GL917P2ZgvkTQpKsRdCVcVGKPiXUB1hX5inSoAbvt6xMxk6wTjLK4W5224cAz8f2RgA",
  "key34": "247oH2gkxGNyDfPv6PMjpthN5w4HEvseGZKZft82UtiBsHFrxJgpUATMkd2tRqk8nbMjkfBamMWMGnjCokAHjHSb",
  "key35": "MhNNE29PgxVy5svA2q7U7uetqy7ScTor81ziXPYMkFCwbfgLYFuaabEqyKFkPUjvNZYypLQ7gpqBZ6qdMrsnsv8",
  "key36": "5egDi9Xwyr1b3SND9WhhYtyQvBaHK36zNgyNc6FjtcLzw8qNCt6d9E38RSDUq2iMSWov83H5HL3YDMNBNzeMgwNV",
  "key37": "3h2d65x4zgSuqV1FZKQJiStme3HL6iQfTq7rF7UedihQwCPbh1vHm6myguXuzGsyCCJ7zV3XFfhkRwAbitE2GtxU",
  "key38": "3ufmedkFMkHkJGHFFkP6JvrVivNVaiUTnScBBqWacSZatTMbv4bzstYomredsisxohTtnP6CMDcM5ywBEv3jZz3b",
  "key39": "5T3i4AnYvwD3gDqbYdRHXqyLp9YCekpvCBw1dt1PWo4Qz1igmwvsrQjU7Qb1b5p2usYsoaZHnycuKvtSRUapUCE6",
  "key40": "3q76hu11kg5kp3cwCEEvRaj7Dk7tts5gW3LoBcKGpYueoptZuYvUhrohvidBrRSEYufg8VmEu15rtcSTA71euGZ3",
  "key41": "2AFjrTAojKzyTotLGrMZMpZh5MvuKEZJnnvornEtT5NX1qWYoBJLLfqBNnoPqTfTWuF6qJJLh4PjV5bWxNgRVHWm",
  "key42": "6ZYKui1cU1KFq4xpM5YgDydTKCVoxeoRxPrrr1a4qSWm6veRWRhPRgDcsjpuH9GRpJo5c4jaqZoj7wvoV8LXQwR"
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

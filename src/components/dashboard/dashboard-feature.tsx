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
    "A3RhiugBsiANKd5vspCfMkRBSEKH4gyJzR65jxJmZbbsyiap4MChUW2AgZXM6y757Pwv2HS48rm6BKWrV3yTry7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJynSmgCWVzA5GbtUKT5CxSh8q4WKWcYV5MR8u4dqyjByo2umSamD5bP2azdF2vTAH7zhFu6aYn1kxHH7cBSpB5",
  "key1": "5psa3os7uuJe7mjn5ifSBLTG5AVTwYGRfyB8sVuy2d9ZgeGtsbsXeokS25CUPj5Va4UVZpvoeZ66Aw4fDPmmpcca",
  "key2": "4aZKzUqfgKYvMqFGLzA8CKroaFfwXLEhThVU33PibpacvVwWYbHHovDDfw8ZXq4JLR8iq2Eo3sfbNf8tCXeeC6d",
  "key3": "RTnS332xVnUBDPdewzoA4eevJUG5wtKYgJz3XEx4cosPpUpiq44sFP5DVM8aztJZwaStuN6RogQRweoyG2gxR24",
  "key4": "2tLwJKLJDhrs8PcfoqkiFHNHnbnK8GfmKkxTzfUa4EEyKnJ919kYv9EKgAL8Dz1rRjBN7BvQjaUEc1HmRsKGCy26",
  "key5": "5xFpPG7zHJUmGfEBCR8EYnE7Y5gK67aLtWKQcTWtBBKCUMAidC9ZkqvYowNz6bsxWnAyfS5H7iK4MTiLhzGGoEBD",
  "key6": "2cbKFRvfouFoGkWxDaBafG3juq8nw9UkfUiMa4BDwsW87516aGnycMHSRBFDgpf6sjG9q6sfL4EmXhKJBgKMPeLB",
  "key7": "63eNcpGGjQ1G8yViuMWCjB4VR3X7h5m415Rie5YsYo5Psnk4RhbovWFtb77Tqey2Yo4sQJBYiS4WYHyvq89E22QC",
  "key8": "4jeRg8cMwn6inBw9LSmk75LgdxEpoPnB3gGLZN5PEFFtq4aMXM7RXUVWdXveeNDH62caDmsWJ3PfHnfP8Q8Kmehr",
  "key9": "4jtZEh2Etf5LhjNwp8iWnB4ys2NhsmfkroLY8PJfi9TFWCzJJDgL8SYxEpopCY637KkkRLeStD1wBRpVbamuk7ja",
  "key10": "55MGCGxVjMe7wdyeSWw977rGPgJDgUJxCmqXuDHsPdxBBGvmAjzBZ9Yxd5wjXVKfBePYc6FGF7br7TyvBz8hff4W",
  "key11": "4ATqx9Rvrz3FKUUsUAvSGfuwkWFqLJpHCUcnnm4rwtpx2yWczjUjGFAbKF9LjkfJzLdhfvyNyJx3Jjx4oeGN9FTe",
  "key12": "BVSLZwed7ZbetRdZUgR2Y3hp2mNLcQs6vNMiSVGPGqsHY9hsz9HN4iQUfswrr3diCdeVFbVPAk6tSGmSnrgdy7E",
  "key13": "2YCDFcXWXXjUMan6HxCtdwarAzmUBn47cA8rvBoKLoD5RscAVYFohWEM8kg1o716G8ehgnMkMhVqK1iUsAm4VVPo",
  "key14": "55FjaaAPY59oVWMuvtvw8eBcShCB6UcZ2m3usGbVYvAy8t2JXuhH6r7qgJNkySSenKfJ7evJ3ErayBkMLJbVQqrm",
  "key15": "26X4MxqSDWpq4PhU5LAvnQEpL5gJhVf6QYcTzEXaH2uNaHWRuP35v8dEmmecM8oAomk3aMWSvCsM3RpHdc3iVe93",
  "key16": "4WHU7oM3qPVhFu2BqtUyXfFC6T6QXN2oAHBn4FhxzDpf9nDoeXTntVBkK3bpduBugUVBUCubiBwkVGADTFV4zvjf",
  "key17": "2KKep2UfojaBC8iXb7WGTQiUoEA17CLo2unBgMJzaLGUUE4ss1MADXCWYPo1Tc1eht5aBWE4HLCkgn24dfY86TAP",
  "key18": "3V1zZPGcj3REdXsaFtSMjtGNTnH6mbgxvgb5LUy957zn2HWagFe5evbAxG9QYoEFuxS2yXiGncfP2E5tNaiWn4wJ",
  "key19": "tMKJTDxiNbfnAS6iUyjGJ4VM9bCi3cQSKd8594PkrpA7KgyQhagrFDEpKvUinfT5Uq2ddEErcmtm5PxW5owHMn8",
  "key20": "5wqMnxmQgosJn8di1jSshjewoQJY3qcKGAXmEzniBCcccXdc4FU3BJk5H5AP5MWXLfJvXAsmk5E3DMA8qzsAPaaW",
  "key21": "57xyvLnxwfLAwosgZ8eEaV3ZPPM97y4Zqg1AADQntAdQNuGBii8BVUNRPpEfuzXCGCwcD6Bh5oqj4DntpWTXZisg",
  "key22": "3fX5vpL3cCbgox8RW2AtZzucb8tiBMWBs8nv9diBz17ssN4s6ZkX7CodRi1T9Wd6KmYehVd24yr1isVvKcFD3iKC",
  "key23": "2GnxxANcUT5jUJE4pkz9rU1UeGBnxQSGwHDV8UqLum26maMQDUR3BzsTAfv1k2M1RDWSUAhJg1LHrjpYikEikwte",
  "key24": "5USnZfN9GC3cnQSBqEFDVo16MDDcb8iuxbjtJfLWegav75u6KuyrT2L7HmTKfhdXRafPoBF4RH4YhbMFNgd58J74",
  "key25": "fecrhoZBja7jx8dnewEf73PMjKYyh3BRDdYNnMCnzv2HmG45HNZE29z1xF7Vv6cF9SHHA37VVosvPtHasTEGuZC",
  "key26": "ujjSNoEPR4uEh4twrm9ZVGWs7g8TaWawJW8BhU6psUS8hCq2fE1Dr8GY6ioZNhzXczeXBZDvMqWKQQUp3G6ofx4",
  "key27": "5CADhxt4GhwKRFxDrdnxCgCrZh8A7KDP5S46rw82zqgNzG7QunvkY4dkLURiun7Q3YvZREEApqDxnFjfhykBfijC",
  "key28": "2EVdPSVim3ZYSGahBboFffvNowMUuazpywqKU2fuMdAau29iN9TWyKDsevFMoJupuk8aEUjoXCSKq6oodYx7FA8Q",
  "key29": "3wW8FLRdtkLhWD9iUxRDEK8qQSyHmDCtJr9AFv6Uwjs3kmbmPJ99PK9t2ykQqJkzWDeymkMH64JGPG9VFWdh6Jmu",
  "key30": "4oN9DaZvBTWMZkz1HVcemsmHiqyfo5rd38vu4EwPeNdiidQjt9BBhF9uuTeYzzkJU5Rjmti7S44E98wqRYFrFUPu",
  "key31": "4T6Cv4PPaHNxQYDJaghsoPba1CbfTbF3jrAwnDj875TYfxC6iuAL4ADUKBA8BnsSE9HJrWP1axetBhMVxJtX5Kbs",
  "key32": "2Vc5SYqXPY4KxurvbqAwiXenBAzB4M1mmX6gHzpXasjwdrgPBj2daatofgjYeNf2qg3YK5Z3KG3SRqn7CojBoPaP",
  "key33": "2dBVbsALgZGpj6w5qTWKJUv7q7sq45MzLD6Gi4mC1Weaco8PhHGtd9B66A3mSrD8by448xNLW3i6e6Zzy9Vb3iBb",
  "key34": "3pZ9KBcSfTFLT2wYsKtg3ew7d15aMb2runWe8YJQn5WGwRmijAr94QdzLw5MfiUX7H8m9FCCzcMBw9b11h3QUdaT",
  "key35": "61SLNFUwzuVdS5ciSYqfEVPA1hiDWvXtkMMUobgr5WTHFfCMBU8FCtQmGMitF2PQ9DfedK4P2iSgWe1AxfeWrZ6B",
  "key36": "3Vq74Q3RjF3c5wu7gAGu6jxwHgiYFffb5Yo1FePRzhpLzwfLo8nKKprRR4oXs8qMgfobiyXKyJiMfzCxLjjVW1nv",
  "key37": "545Q7LriXfbeNYY6hvMo7kmMbUmGfBm6nh3i7oM1ihT4LHgZ4i8oUfGcBCRvie8AXAZeaJ7GHgfkCga3xaNcpoGr",
  "key38": "5i4ePBiHgUJW9MU1zGNbBWhku5kS5hosSnGhfukX2F4ut48SR7grZKqKbacTGfRDNWgPDRgM59mEFR3cZrG3HUdq",
  "key39": "4TKsXeazoMYY26jEfQ3CDkfYNB2VztzjfMHPCw3bP62Ph1XpZVDTpoBfjNEcT92DCCKDsMjnbnqaYy8BzQmT9dv5",
  "key40": "2Tt1T8NScsPscuvtgtvSDFcTurxP2f1QR34JwthnTSdiMUW3uxxmxbKLj7r6rBioiFwWfNjSuoLH5Dr53rG9XC5x",
  "key41": "4eyrnMafqHRhKuNeTZjVNZ5ncpTAW5sxACitFhGhsKfd5p8BePRZgvU568znDaiyeH2ZH3TsWSEhLKWu3CcQamvK",
  "key42": "4GAUWubwne8PpiMB3ZxxkQ9SBUAq1xPg3RSpUpHHSb5GBmgYS1kqXPW2FbYxXxD3AtBf2KCxD1xwzXkoxLYmyYcG",
  "key43": "4wNGM3WK5cBr4FtzGnC6FWV47HW8QazrZb3mFXLSJcXvkYJgDdf1SNpS37f8NrPpZwoq3e85BJXD2BKHLP34TYY4",
  "key44": "2eq94GRYYcjbRb9MMCq6TEKUfyUbFWBy42YgKyfwgvrtkBVWzRA1hdSmzyaUtJwQswNHYYaoEgWNPmuUDYYAuRDo"
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

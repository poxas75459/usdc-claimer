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
    "32gcWygz5Agf1ujaXeYoNDizSLWG2jccyifv4xZo2nLbE5MYDETc937Ucjc4wZPattQQzncREJ5vAw7RsL1ZHSsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rraU1ZhgrSZQvTXWMdYpdFfNdT3kqVbkSoFaJ2ZdmvWP8aPA32C6ShF2rf9XpYLgwWdqRfYah8xrSNiLxFqt2DZ",
  "key1": "3WUNib1WfQuuJRidRSBvuFhqoe2VMgWbUmtKPHUAg5797s8WQ4VPvc8DYs7T9eLDVvWxHog32tTYa6w5ma9UqEc8",
  "key2": "5ZjGo67Ud4SnzYsrVFWzyHNjC3Z9o224m5uUfZZDhcYd9PN1FSCwgwa6VCWg7ry4uEmbvJXJKseEpCwBKxnmmaYU",
  "key3": "32hC7nadST1ZpRkFKjGMDBS2n6uuVKKkSjpYps13BEoWuUsAUE9B6pM6U2dd26Gz7EcVcwJmFNPw3WLMQNq5XKbb",
  "key4": "2sZr2bis929A1hnhXhAWXuMw1iC7MtX1s7LVpV6oziwiZMxZQdCi6PZbH7XKPSZhJZqePSNfDW8Tpo8WAA8y3Nig",
  "key5": "54kT4qaU21XEeEovzQX69T8avWX9xrnq1qQk1Dk3Texd5g9JSBcH7L6VJ2jBkBVoWfsjaB2kGfgVGXuQTdMXErWS",
  "key6": "2g1LLtC992v27PRwcNDsHudMvdWteQhCFW3VH5M62ZqUEDXYFzNqpRvPE4a37nu9jKQzVABc7Esrm9xCugTqER9j",
  "key7": "nDxabHFsvQdeoYqJ1uAqxUiE1yp1aayz2p8xuMxE6G79oD2SboHvaCaoq4XTNdViX3JnXW2JK7BMDrDSUTF6ySc",
  "key8": "4HJoSJoaR6a4UURiUf7SGs5NTjvPW7JG2m118VhRsjABx5UNKfB8Tag55DZJX5ofHWkHU9QuFUBnFjKDacPRYoma",
  "key9": "mshTb8sdBKx7J7TWUc7KmVkcMtkdCG11z2MfMbwTXkUG5pGCYE1D3LANUpWjzCGD9jqn9dUeXt55vX1AiaZJ19C",
  "key10": "3YaKdZNNq7pfamSzA4izwdYLYMiaM1S2Rz3DuFbvzNHorHoikVqqEAaysbEumBcroV4PYq5Sn9Bq9NqvFpxiuZ2K",
  "key11": "kUbrsvR2Rq4uBjDRjW4b2rKjSf78Ld1gXvTCVPjTzcnNaCR4ho4553xE56gq3MKsbU397zkd13jtKseTL9dgu7M",
  "key12": "2ydNki7M28Us4UQuZFmGGD6prCxMzD2XWQDchw26dLvwYnyHcmEDqSfWZtYYArBSwpNJRcqSjz6gCyFBTnnbw2Mq",
  "key13": "39nUXFMgKpwpu86US64f2JV7z2RpVVfYDSCckPMWJZxdQGmmazih6efJmn2auY5HsB8wbhk1pHYohKefyrs4yzk7",
  "key14": "4FGVAuYHvZaiCGBjvKiBoeWtuHju9vD4qXpc5Beib2xQWGpko7DVf5hMoBDJ6k2ZYcU78tBpoStQMr22naBTixKs",
  "key15": "RvBL9m2PDMoB77tgTMQnNDPiY2HstnFVjz16DMDaFcwj91xqGcxYqi86xXnh4631rRdqmQ4BeRBsicG3yCoKYw1",
  "key16": "4k8utf6AuRuzLgP1GKqk7gAvK6uvED2Nyk9NDhukpf6o8xGFHpzR6LJEU98BsthkdHaLQXpdEYpYUDaNVnogWvYf",
  "key17": "3UfavASL6EseJmiwUaVgJfzauuz9qDh52snCgDuwFTuS8UYe2R4ondyNBHRWinatcKCME4B1y8d5HE4zqMw7cHHF",
  "key18": "2M9LcFXtcpfVsku6KRpcd86eMkC81Jndn9Yuv3rie9bvrSLV99u3EMsxzR3s6eRR2ojsXhbyUfa7kikgWv3hVdqP",
  "key19": "471jD6JD3Lnj461fmanAZXd4JXhiyEPHUNWqjgpVt8TXPG74biXPnrRyD735vfuBeXrNU1bkTX9mAPWon9WKkFEd",
  "key20": "5Wr8cQCPZwJrgA95yusHTBykRxhFsJ4PE4ip9K69pzp77vF12cziJrgxrCZJqfqJ2JUg3f89bxJ7ptGWBzKau67U",
  "key21": "4Fv6KYHyf8GDE8Edb8pyrh2MRiHqEjdbT1zGF2za9tQatAENKt8cGShwgHfcF6mYJthWa88AbJm4UWuEENAcguqW",
  "key22": "52QVoG2aiVqaw2qQ1fvxtuDK14e1rib7eza6fURjse7JCbKWv1r3vKyF6MxexTYPn2wqm1fBsjTRRyBAV5dfbAbG",
  "key23": "QhT29MjaWjdKF7oJ2QR8tAMq58dExkJ5GafycSYNntuKZawG3BYX8kFhEbDAUYqWMnKxQmgK5Zn2hqUBYY89XmK",
  "key24": "2fWpB4vp2ozYeAHVX6m3TuEop61Y5LtTetdFvDqYrAdfWYFJoFUMEvejDDxMoZhoS6bHwaTedtQq62ZQCtw5v8L3",
  "key25": "4Hz2mdFH8atbDUPE4jDkHwgrQ3XAjQLxFWX5FUrCxecB6HoHXgHixiGxeLMMqo2JsHqUGskGg8aXaEJ4oSnKkAdP",
  "key26": "4NbG6znLG2Vr26uN151H5NzL37bzNMVjEDPeyx7NjyafmRLwR1SW6ATb7a2vnxpcu63wETgeMQnWzyac4iAkZ9w5",
  "key27": "2WpdYFT9zJd1MkKiPK8vsG8M5oQ6PKnwJmkG2oMnxtGeBXeSmunXYWwU94adZAFv6tFjzZcPAgG4LFcA7r5veG27",
  "key28": "5ti1GH4hR3LmjBZgq6NPbxBYd6ZcoSamyLCjz4dDP9aRF5Bm9TMcMi2FhX5xVo8rpDWg5qhHQAtADgGK5krvJnU4",
  "key29": "2XnRqWveMWFLfdqQ7J4BqSkyN54sVtfep8a22nDu5BZuk4rG2JeAuKMaJXsw9FZSXVCSgzNBhC8k7BSog4pJFEdH",
  "key30": "2ztjQjCjroU8JqZ2g5NKWTHAkGG2yXKkxGgm4eEYfuTDBzhY1CTCnT2hg6JWVyvuHuz3UxDrjXSEGwc2TmUpBUZN",
  "key31": "5hxUNqMynzTnnRULynS9d5PBpQWGMQY3hJHTGAZvdi32PvsyAuAta245kHtMGimjDgKumsvTaeUZb4Rh3kJDKDgc",
  "key32": "5arwqF2JZdez5scA7gVjUuPEKNgeLx22Rg6Vpf9VcNtr1ozbDVneeFyT5eGZ3SUA4xFNhT6dBMEvbBnWKBXJJsYe",
  "key33": "124H6Ma6Td5wW9UnzJK4cQAadCtCrqtapx3caYaAgGv6qZA39ahWvG9XryUR54rjWYEZC31U4hzxqbDLqpBZpeVz",
  "key34": "49NJT3KsTpWKGfgkMcf2SgcsRch6TrqsLtqDaN4s7P8ag4Hvzk6sfJmsZ99urcSMWRKvnnfAye2zNHBrvY1f3Yhi",
  "key35": "2j4RHX4hKGpGLGwwLeuQABCFFUxrabpAhp5RU8ucAMDqa6aCjztiimxVnzuwc4LbqFofSMfLNvkC4BsAtzxjSVUz",
  "key36": "31PcjVwG8ouumr739kLUYosq62h8f6GXe3MAbp1wQknotv1httSX5wGhDYxBVRcWJD2hCLwoe9Ws4ETGjDppMghZ",
  "key37": "3D6kbspqmYWjmbn95EHni26hTKSRLw92pFrEUrmayGsdHLcZWohtUm4p8MQuezrmhMx9CJq3haBd3LdW5bkkTjzj",
  "key38": "5vMEkMqpN4r4Kiak711UZvn3i8wbgoTapY7mD33WCeisAnYA8URTo4xzwNnv2orWDd6Wr2ZXuCha29mG1iiHrW8W",
  "key39": "3PN3Zs4fva1fQNRy1WGZZMz8tjmjVkgFUhThBCibpA7M8i88pyqKGf8VcxHXLZueRmcn4ZGVMnbuErV4NsuSuaHL",
  "key40": "2Wfq6VFKVjfmRg1XMNYpxnnSfH99hX7R7AFDD61Yx2ZUKa97R1ppJRVdq6QfNSSpXPqwrLGUyUqFoP4puthFAtVb",
  "key41": "38HFuvEeMfkaYUrV21ZmtF9p67jRnoAarLcgDuE3QwH4SfHQZwoAwh895ciFe5A8qZiop8d2cgKpXBjwz7LdSGR4",
  "key42": "XAzLdUm1ZFffE9P4tzvYdjJ5cNTFpyNE1bhk5sMRF8La6XjfBRJv9ATms5h89EkVUpKYZv8PLSyg5bFCi1FAFLt",
  "key43": "5y3ZRPRUJMZvhEWU8Yzvvmm9aspHeHjKHNz3Ku3cJYzadG9xNUmQseoG6yaq3VdZk47RQGStLkuH3Ji3rQmk4Xfn",
  "key44": "CGrSkfBH6ar1MNw1q7dN8WiBtUBWQQeQbYnXPzsuXaHMLDzwc6Qyj8vGdaMjsmeP9hsTTNiW4gr1WHqU8cmZHNE",
  "key45": "28Q3T6ftgabKge1nZfnPeEBahtA528vjSLhHg1duu8z2bMiUFss7X2vV27frHuP5rT5EEVRaPm7joKtGosdhfr5k",
  "key46": "55QrGrdvtwqneK2vqcj61od2nQUFnCwZvaUhYJSWo9Z23ELUVVjfnmR5pQVSxJodLcyXrMGGj7oDVcnHZoNFAme9",
  "key47": "33QYk5eVhMN6QSvhs6sZnBVptVjCbrk7x6nREoKsfGKyJUjpYjQW87Qy7ZRtR89bHTb3tG48zZt1hQEMA2pQTc3n",
  "key48": "2wJtArmDYPJEWJ2DjdSfSDn18ZwHyFXz92pLFBx38AaPfCDfQJchJbTMopCwdRwk1ntGHMMVy3evrrjwJh8gk214"
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

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
    "VJdvmk5xQQ2Y4ePHikCWAPQ9c1jsSGNDssq8N2FggqCVd38fhxQquu2D5SvxgytnMNQWZ4tcuAChxgr42pvCNcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QSvY5N3KrfCkwx61Vf2Pk8t5mwGTBz3tbWf5Ren86b1781HuZE5i2QpdGoTvFYknSWsPCgysj9cZZjxYPa3htFc",
  "key1": "315VfnijLJ1rbxBW4Z9MeJ3bog5fYopK4yiDm8q2KvFU7JTGvUrQ5jt5sGA4J288B4q2jeCbnLrNM3waUcSv9Z2b",
  "key2": "5q4zefX9U3im79MTpJzzr5WPeXh6VsiQmF5LC4jsozu8ZkxAAwVggco3PYAaTSM35A8a5engbtkoTAsHeA2RjC1",
  "key3": "5eMpERRrgndwyXcMWsRLDrJLepLnjn6QGUABaownaHXzxieyhzWPSQ6d9od4MngL1SWG2eXgAkT8DmrKZAqKJMBd",
  "key4": "41BYEwsQuxMbHDkwfVwf8LLfKxciLkezaJZfG842Z61BMV2NwZdm4vczjjUuYgMBALBS7nCpthEXtqSb7DgNxAPN",
  "key5": "566TNkraT26UhnF3vJAeBd2shHx3QYtGMsey8S321ZsCUsfdm7575r4AXiuqag6Q19VUFJZRmGqaqdSPD1zoc3jH",
  "key6": "47P96mQKHDbM2Ua41gud77TGHWirqRewL8HnBU9fNtZB55C1ScbytSbrGTN63GEFpY5s1hojHnCF7xLjC39riLBe",
  "key7": "HjJbPjYADyKCjDMuNqJUxMuzKyayvL2q2VgprJWdJqEjW7rKDiFRpnH4sbTmYmWwZk3X6arUP4yGfyQpF84sQDQ",
  "key8": "3NHmCwEWWTybhAe4PWkH6v21uW1oaUA6RvU81bDpD6RYo7zMAVyTLL5C6SMx4gAGosTXK7sDythDAkUcHnbTY8DK",
  "key9": "uqYDR1mpc2JE3YrjUuQnSZMrASEJHL3ysDPyeHJJ6oZkkCNisBQcsMGKWqQDCoBEu9RWwWEd66amuYgvQMBoG8B",
  "key10": "3GC1PnbrmuMoq9B2egLGwoP35nQfL37P6eLJ95XcqF2fWfePwiRDotVp3knnXprmCMj8kPQvUfSdtGEoeAUy7rc6",
  "key11": "4V4yrYz4YWjLmZoQTR4nhMh7AaNwhkhT4buwBFG1HRuhzRXfG3H7mjZjNKmJEeftfe4qLEYhs2TZv9UXsVwihGfn",
  "key12": "47tBYMY9dqNhkqwgdKrzU2aqF6X7y3SwtGf6wo8hEf5PWU4Xna6uswcYreHvuAAjdCCAkLMrN55po2HXuNSnNyXR",
  "key13": "3dU3ZWVz2sYmgPkwwdkmUkhEnUgY2LAfxcNCosMjptcica6k3BJYzsnj8uZB8dMfQa32sGW9qiKL3DFXvQoJYaM2",
  "key14": "5DQhXitUkBuSTirAkCyHSWGxv4ErnuSuEnxZ6o2LjG1dMjkKVRyf1CgBUgWZdfVi9yuzAyucQZwnpdn8HBsBbMK4",
  "key15": "4vnYSSbUj4Jq2SVy4bj95R4Q1mzN6yjGr5ruDzmNub95pHWCy4FN4eSTDNcsEAuvMi9H9oB67JtjC2nZ2bHZd4ur",
  "key16": "54p86wTWWKx6VxmaLWPg7bpBxF9G8TKVJtT735ELwrZRRkYmJL7RsidSLuqPtGoT44FjQTgEYZ5vL4QMdbs9bH5e",
  "key17": "3Wa4XRKQxPuD6H7g7droDp9pgWssUWjHBniPQAJvuf5tWue6KaJgxYk5QipRDx7x48QrL7m6npVNtqaxVCDB9EBd",
  "key18": "3UgaX5rxyG6VccbmvXxs8XJY5eY2Lk88o8LQYpodea4ShBDLEXxdU3A2BmztaHAh6DkL7WqWzjrRBGJiLfCfCr4n",
  "key19": "571THGAmWZneacdkMRWdG5tniihzPbNMM2w5QaFoYJNNytTE8G9hM9BSq73hH9oPxXpcJFuiBeb2pcGdimvzU9LG",
  "key20": "4PWeSGh2EiVeiXibt3KovwGirKTRA7BjUitNNVinKUJV4XBmVccYEegokCqmsApw8DE28aZ1Mk94LsHoJNFBjD7U",
  "key21": "kZsLL1uo4EdD7J3QhpXeEVxJbf24TAw52jb9LWepoXA1gteM8o693Pv4JoFQ28UVmv4vVVPUxN1MxbFvXeQMucd",
  "key22": "2kYD2Yp19SguqGNaVXwtRyqA3MEqcAk2Q6cRfv4CFaR1ueuxSRdxShSh7qhHoDzQzVCqmtNthSyZR2JDyRpRHHKF",
  "key23": "AYjUJAiBdCqL2GqE8dGAdDTVmzsMFkYjManvHeRoGVG5aYfwaXEH3ovmLfqKJKSZvAPKy2z6Zdvt32yoPNSZkfA",
  "key24": "2yVWdugGekt6gxaqeKoigmBpqio1mUBYeALcDTGL67y8DYd84Bpa9gxgLSKAAypEVaiojM8eVBgADmTETTVE2RC4",
  "key25": "2yyvkAQdrHokv25Yv5CjJxFkB5s6z3Sfsmxmcr23gTMf6RWZcHGpFvzD6rusDGFrmeTtkm5achevX1msmdmn1Za8",
  "key26": "26Fgp1k73pWpkiheXodthcXjFbMgBVZ4GaFPr5qKtZxgf3bLmh4mjwSM4MMvzdhdUWP6fJipDLnAgE8aznwXsYay",
  "key27": "5afvrHGQsfBc4MRS3s8YgJZ1JvWPHx7JvDcTtz59Mt29BNwmHku6b9YDkmYMKvwuCyhipnY7PVFzFiK7hrrtecGq",
  "key28": "4DDfWjuYYVPx6u3bjbSjTUhTvW1EV7FeD6i42BwpYKkCKyEVuAc37WYcQfTtu4TMAFMUa1M3XKThUPh7bCidLxyP",
  "key29": "3NY6qnYQAG6WXp9sXa5EW36USFD8cXAABKfTwZBNVPiyqCM4V7XykP7kx2u3LbZcqqpjhZMPAqf9MozmK3ZhCJSE",
  "key30": "2VA3TwR13iA9PYsHpvkTHFuWryWrAdZU1f7Gauw6rwBjhYhpH1t96D7mnvEbQVPXDSPbQZRcnz4gfAgakn3Z4cpo",
  "key31": "253Ku8eFeUHzQH1vpeorWCRYhKyEQdvDM63Ad3NmaZn7NMtZdtE7E7hzK6Kxwo6VyifLjqUoU4cCB9wXCk6iqBiT",
  "key32": "65xN4bEntYsCpn4Z3Csq2oX3BWLF43adVbguDa3f6kNDiCSxLcXFZ73HL6SNFbwvkkSnbG2zFYDPnqb8SW8CKuVk",
  "key33": "5tX74U2LX8jsvUz8KvT1SQn7mVN7zaNmtofNF48da5zecPsy6MH7G57WR11gvuNLRTcHgtzkTxBYg3TLX8fXWMKZ",
  "key34": "2EpK63Y3N97tqpKdGSJTHpLU8i2UbAvfB5mnNg8Tmz2sQZw5ZgpjqapjWxNpnBpoBHHRborXqgXXVbPqDL3daa55",
  "key35": "2LxJ3uY7sUn3ZnQLgTvFMkX1HhoMoW9NytDgoXn23kDWdsMVTD7tv9cWjBzEX1y4nqDFSnT5CwQiYLWCn78Rstaf",
  "key36": "t4yfoDtc9KzjFP3kh9FQGtANKJzpGXbJCNt3rZZVZxmprX5RtMe5PqRdB2JHfPgAFQUe58YYCNDuZ6LX3jLakCS",
  "key37": "4mHh7fPS7Y6mc78XiHNe81TZNFF2eYMSVEFxQ2tcWV6pvwEfzXF2seQGSFsv1ADvEkqThxKiKti1zHm1Edh5MYqF",
  "key38": "2FxBz3TStVED2Zfw8BpzipVpDMu3CfZzR43fCrWU5KsoM5NZQDZtx1EcxzNNNex8wrqYztvfSVSYHjJmK4ioCRwE",
  "key39": "21R9D7L8ZwAq8Bggkyro46XhFDT8xzoCKvghM3FFBzSsUMoqqykfkdU4qPni5Cw7HAKfQ7hogwgL7JSYLeerC2eE",
  "key40": "4dDDNPSSCxH2gTZ3xJsKmVu32uwgL3MPtc76nYW5Z5LWVDz3WJigp8zKTzTgVFXpZwZFwXjQTzoqFiACD8tZS6Pn",
  "key41": "43pA9WvZmgpZamWbMT5ZHgBPCZBPsdJ4CJdfqLoXnwcbU5BqTjXkYtzWAF4m5mP79n6dchyziazcfbdTFdFtEjSm",
  "key42": "5qh4yefVzAt9ixdFYVzgwfUhzn2PpCWKzpz8kchA935UddjAxv4GnakA3i9FVs7KErQShcsrdPWG8xazRoQccG2X",
  "key43": "5egDSAVKjvc9J2MLdGcrDYinisBmK2vLYoyCp6f4sV3SmX4fNrat5tbsq4uXXt46a9CBCAKk88AwL48DSbK4mYMy",
  "key44": "3Gqz1hPjwuWye1FWtwMs1VBzZpsWeEQoxmF2VZc2H5q1GVBSjAmD5ULvxSjMB8FtG7RHLschKZYan4oajKdjnfCm",
  "key45": "3L1eJNqEkN3cGSRQWz5SZyvkc5ntLQHNi4otGvCPKb828XQbKifM4u9aZwAveEA5JjbdYyUctgKbg2QwTPDmcsxJ"
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

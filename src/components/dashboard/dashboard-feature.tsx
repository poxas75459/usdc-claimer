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
    "2xras4mRRjkCizRxpH1pHjLYRJwozorDX1qbqwTExxF1bC8gNgwXYQMQxhY7qZhLuQ7NGVdDu3mQn9CgLfbqVyWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3StvnA1srpZhmANXBboVqSAwjuCYgAuewL6mLdgZPs7SUF1EEoyr44BFJRvA8MhhmrqxQENToSfZr9kW1zQNw96x",
  "key1": "7BozTTbUjLYL9pBXndZoTeEbCSBzRk4vUJ5eWpvVxu7U9pKAoHMSPr939ZBjrGp7KDcXpRSFh8eA8YRLeBamVT1",
  "key2": "2d4fkZgZuEuBDpPSD4yKVuWVV4QNWSc37tjearfRyPNPWHYqydPkZhztuJVfsgJdMciT25uEEKWChuUcXMQUXSbz",
  "key3": "3ZggmJUZtD6dsr4Rqpwb4beVWsz6BsrxdsY8EZ6bt28bbX8G3L93C7vFQ2nyzLLh9ffnXcy8eSvLmDLnWVJ18qW4",
  "key4": "3Njpk2zD2X2NBu13MPxNRkTQx3noAvouSNJssKfQ5MEor6ZAp66KJAwTLUQv4iz5HhREcHPRtK5A7qJBtMgFMdJ1",
  "key5": "2AdTsCEef6uX3k1piFNn2bouwzGybsX17ovuJSae6VwsQYJ7W9NAbRhUfYpJjne8LzFxCm7HvjrBkSsaXMVQVX1C",
  "key6": "2AK34xKiaLutWvQ1xDde5QoKWXCZant9W19rJzKRLCmFcQRL36pudzdvQFHZPAFAUYbXpsZHdzemrZVNxhPaT6US",
  "key7": "67ZnuzBweN9yP1PFCwnsXPMAp1Ua9oDYqC9jz7QvkbFjFSSwjfbUtkkN3nJcoqrwFZeY4nPxqv7KxpPrUVLgUdzh",
  "key8": "32mR2WcfxyXbThP6BLkwGmqTuC1KCs5JJ8V11nmwdPgNThaQHKxJMcZ4ZEDYoPHFbgsyKoky4k321oVtj1BxJVK",
  "key9": "r2HEGxrE2rBHwH4L8FaDV4LEaBhBH2yF8BuUq65wcetRZtBWmJE1KCen7T1CW6uT1p23TNG9myTVazWr84wBkQf",
  "key10": "4QCLH1qbeSDr6DCWBgv9qfpzLL5BbZAmDepuhc6ixEaqooHoJ4s32Mohuw7isqmDPaxcDd1VAe66oUj9CSSzqz7m",
  "key11": "4WPWaCtFu43huCoJpZrcUFuk3WcP95ujTbZPsyYidhRR1ZYfzHw2VUrq1PXDKKS8c7Nq7KtpFWSkVUdSeYyUo9Nf",
  "key12": "3zxwYBjRbyTQxVPqwshTM3KniSTVXvzDVbW6Su83FzisbTxsfXvALYbGijJuzpxufZiYVn9aMsp3jCYuFzWSJcHt",
  "key13": "2prrCupAXGJpdSeTiQM1H5WWFNrQbLVTkXaGNC1z86U22BzqzQ4uY1RhAd6UGLZc6i6AWmZ4asoGhBUtWTkogpTt",
  "key14": "5erT6ipSGRpWUCNWZJm8TMMpzwbGBQHsnB8nzkFrJu5yZjyPhgozagUT8xxY8q3NSTxNF8kZdrfpQ16Zb6xvMdzg",
  "key15": "55899SZqKtqL8B8oziQZioJyUSNaNwwN5EoUQTh4RHfNRJDcUpWi6tk1DtSkYVN9Ub9bqkSeFwmU2Eb1axhfYpyW",
  "key16": "2SUL5Z1HFzWdZGmYv47am7Tb3AsjUMteLd11fAdALEsXzPgYP6pg3eiVGYoG2HfcsPVwrmBWkNR7oLJfhpHJHSKE",
  "key17": "4gGRPJGkjkxjDo5NKZci9xiuKkjkETxzKLV72bhBboUWf7iWiLeC7GNMN8THeDwFQQZg5aveyg1echm5MPJgwLHo",
  "key18": "Js2sBCETtrbdCc1zNhD2mgD1Lg4FLbxh7sYneeaWv8erPb93umSHtYDkVRxhdG4hpECDyBTzU3H6SEeZBoKgVqD",
  "key19": "4tsoKM5xUF5zeWUBwkg2Dq5SoUrFasLyTeM7iuA2oUxefj45Xn8Sp6esKTFrbjQipDkCkp3s32akGjV4J3jKXCcF",
  "key20": "Vkhdkj4Zmhm7zNxDrQU8jwMtKXomp6UrFk8ukjB6Uep5N4WHg1tkagi3tHtkQiBKTw24Wm7sWv1yuca2pPKoWhd",
  "key21": "2vnhoYoq5kPEbLvt1Sy4B4RdqN6nwtoB9DHZUwtqenSmeFsHTYHTnKNdFgttKtufwQGdydf6DbfJxVQvNb7FcZJp",
  "key22": "2rhyScYuekrUot8GUepjbC9MvrtbfoYHJBVvBjuSxmhq873geDP2eP9rtg1Twx34nhN4ikYC5nwpYbTGfmJik9YC",
  "key23": "4eE1ighFT5BL3nzGq2c8WZ6Am38sC8jzaSniEU5WjXHhrAykoesDzt67rLsRHqkJToewJf2UgPA3Hb7aQgJFjJHm",
  "key24": "2BXZKRAdLXKNNwdqLzz9cPDnDqyQym5kHS7kyhdwKjDEjKiKUYqYgJ8P6SEmMyZZbG92TB2pCJmQpmTkHdHcuw8m",
  "key25": "2jSnimm2BoWc4RYJNGzd2nZw5rub4Gw5V55A8Hnfh4cRwnKgbiM88LrToTJjQcncF84P2US2uYXPLDmpnFg9kNRs",
  "key26": "5CEXyphqLC2iiYBrJXDMLYr4EXdzswboDaGnH44XH4y2WNErZf81UPxJLarYvC6GFg6dZYkawr46ka5z4HrvAap",
  "key27": "53xfLvhEkDMcgJD3Q5EAiNwwNxiSJyVtPQuWp1LPHmbVoLfoS3s5eD1wYk266BoBY2XnLV5z2uCoKpPqNTuZvNJf",
  "key28": "55tMkihEzmJZxB3yywoWokTmAbyuA4TeiDfUfQrnXf3dLyPNV5ke9GzziEbUs1dpvdHqbvptUT5hE2ijgifvvird",
  "key29": "3U5HVUmMJRFD58Ux1e5udd9Nv2MoZFwaRKjUtnDWDyqQH5aSgbjSapgpzo9D3F6iLKPDJ1c4RKk1CXygHzYbfEK7",
  "key30": "63Ax6zkgmxTnAtSGL99EBsFFvtTeGFJXb1Wgnas7SjCUgfheEXxV8afWST22NWEZQg9r8sH6osY584ydLJRvTw1h",
  "key31": "4EY7mCnVuLRnng2ziJZhMXz6YZ4AH2ZH5jQBzaGzDq2UwP2foNZQG5tRYvB2YyRc53WxXGctBTiTpNGQJh5PRbEC",
  "key32": "27J6hMwScHw1QNyvgbxZFjmqVuoZpofcGQDQiLHc3wEm859q1FLGKfLGjqqmjL1RLeawGAmc2stBX825pqVGx4kv",
  "key33": "5giuEsCM8E3x9jUSMEdANYo6UcKCpyfqAHZbZMAHp1JoBBUzG7ddEEeNAGPYkaPKnvWG7mKuYmd5HKwCkNVd57Gm",
  "key34": "2FLNZdHKoVAyR6Fx3CwcVTQAH6phjoyxafs5891vWVkrf2pCQ8rhjNBjk7fAufgeRGVU3reDighM6MuppTmbxYY3",
  "key35": "3UjQNGxVttwqKHnT2XgQT3wzbJPaCwFkxyQFctNTzWerGPGRjhRhZaeECNshpirwPN64dtrkByzmYjLxNLxcFK4W",
  "key36": "3NhChn8KqV6eb8xXP86DAnXfKvUgFcu6Ja5nv2TveVdCru8V8WvRqfG28irHg2HyEiARKBNMjCAB5jESUjCpE3Rs",
  "key37": "5bMW6Fkx4jGnAp7Bf674Nm1AFPiEhdk3rgUq94KwCC3rvEs4FDYivaqedq8mLe7YqVr6so6WFNfCLG7m6YMy12qG",
  "key38": "4oghhsWr3545q7ANwRU9i6gek4NkPadQ9p4xrWy3btmESMhuTH4YMNdUKnZAmN9KazReCPJXY8gJV3gatybDZ58X",
  "key39": "gwXxzidy1TzGchF86mQrPhMM2ik73cyf7otgReYHSHMTz8eYjpcceGTjaj28uTTvNGdfnghqeh1rQShiV7ZeYmo",
  "key40": "2UZgV9ryjHqpe9QrdnXFtsTf1KxNZc4bvHv9bwzVaGaqEy9oe89oTrxeKapmvJUX4j3KRcQHFfAJKrt9sxVnuRVk",
  "key41": "49YPAFiZbJv5MEy7nKkMUv23Njbspb9txCkAAA9etimLC4T1E1kFaRLywspdnhhwvtemo2b6FgxM3dgemJJRSAqK",
  "key42": "2V87W55SPkuCBJUpYy4R1dCRDK5EqqiYnqq6k1pQ5GxmZxAEFGEfwLaXUwbtcW9nF4txA14q4Tmyu69WnyDTByGw",
  "key43": "5cbFGn8VsbN7mBWsMCM3jYNJQvdFn8k9KaP5u3tw1Tq57mdo7effc2Y2dmvrsdQsFdEJYZMXJvrB7c6iDPoaxNkS"
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

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
    "4snqL8cCwwonK7o8oqYLijtsXAaKpvgZMagF9pajvJeYHN8SJaDNMMmTQ956yJpvjCwsoCYT7MqGjp8Nhq45bqMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bm5RNkfbXkrbT2CF1ctpbZiCeTMFHpjf4aBGJrjm8td28NPXxt3itmfk3nout31GnGhELLKj6DRcRjzHweBf6kN",
  "key1": "2773oRumMH4FZ458b2UGwmPcxs1kU3hYfiwpZJqJmWtLxMN4RXSR4mDCYoNg3j6kfrZkCxaXPD8bk6GN6jTkUSRX",
  "key2": "44tf9tvg7DBKBeaUUiRnFrfcFVhsTQauAhGMyrBLEb9HLqpwB9omnSPiwTKGUZaaLziDmEZeRXBuua5QuJESV8gQ",
  "key3": "2hj2mK74sJdH7yLkMFZhBL7LWfcu6pAgDqdbsWKkWEnahyVBoeHRxrzYnra94ieNHfxVAQQvsX6MD3wKyu4ntRjk",
  "key4": "3aKUNnhFy8c4aRYQs1jVkVS69bMzpS3suw8yd8qqfQ4CQT2CoEVbrgLTEZxLKraQ9i2gqa9qdhtnqwnJUkHP3LCj",
  "key5": "5QvVfV2zerVxE8R3S8fAEy73sUD7vPjSaAKBeEfe3UJCq3YQgG7gK7CeVwD4T2GMdGv7efMC7tZxcZ8qtzmbSgxU",
  "key6": "YanzovE99WPCNYtdFVerKVCmJ4JiE2XGJ4jKCKcBHsA2kDmvL3WFUVr6SHto69q8FrSpSdFXF9ZJz6MW5LU3TTy",
  "key7": "4Syy5CBcVoxRWs2Cow8ghVfbHkQFJwD6m3XQLpieGb5yvP13SD8ju48ttWHDU5nxjb2RiUtEKQs1P8QYrsxp81z1",
  "key8": "4yFpY2b4GZzxasiK3vhTQ2hx2sSY9AtohgkvTE4DoGpN6UqhTGgQiiFVBg7j83ANd36JwPs2FRyYdLo4Ss7V74LZ",
  "key9": "2GFgobKqovQy1meNp1rggPLqCARw1KQCpkne8fJL6Lf7Zjq5sXn916HE6s7NXERjSzdQopgfRfhT44bH2Hq7QZzt",
  "key10": "63UfkSZLmdpnWcCWDmhNNs239iDcKtsZMKQ7RXuK1DMRoUu5E8WnwgokPxtMH5TX8hHPhL9D4B1HjVyrfKApARgQ",
  "key11": "4RjNSEEb8Aq7ztj4Zx2PPdKLmDtU3ALartA2Upncrj6NRgNJuHxJ8adq3Yzu9kKwLd1xDEETdXchLS22GnqLtKSD",
  "key12": "4ayXihnfMxaq7YN84jquTLN3WfWfuZEWu5CLUqsPSj7Chug5ARVGjtR9dfZTmJYNaSmTNqpVH7z1vKgvchYytGfK",
  "key13": "3DjwVATQ9r4hoS352sZn7rPFGiz3ddhpWWWi21XrRUmU3BePMpichQwhMWQSPC2t4bjohk5tsjwzdakhBzUUVTMM",
  "key14": "54bGS3zELCrKfbQwi8PfzyZCrkzGuho8t46TTJFsGXUweo1GjPo8NTattrt6y3FXK3STLr65pPc1EWxx9p6iaBhj",
  "key15": "3uq6w4USQqgDmiYcy1gGo9EHyWBpLzJCYoF96tFHYLoF4beZWAwWAmRuJ9d2jabYTEpCFzDpfs9EwUz5FtHqopQL",
  "key16": "q8UoKxZvPJ8sy4N8ffZptyq34B2jynmmFTQaBcgLvTHRMytrmBaXqivup8u8bW3CgVLD3i8N6nwr3NDGMhJKgWT",
  "key17": "weCdHrpjMtPccruQRz2odbdC2H4Qeq6v13LdUS7XmHUQDGvwPAy5eqsBZSVCptuHTcviVZ4ZPPd7aLyFEPciTav",
  "key18": "4TDgHRm4nu7GeAmpYjXgxJi6M14BywftGHuzvsNA18qrmsUiYjbkgq9r7qGRPyeWqW9p2SVNLorBXDgHgU7TA14E",
  "key19": "2kYQYxEhYhAXp3fE7tLtu8VreLozcnzFsRFwhTi9RioPoEGhNpdfumF7KNkzA66Qex9zv7SzTyzRkrT6vUA7ipJh",
  "key20": "4Hq1HQBVp3GmR6bBgk9bftXo77hA4n4BbCb7HEamfDUQ83TE3iqxPLgqkeNuWuk8z8ubSgjXojzUtpGuSaAyinxz",
  "key21": "2fJN7V8hHHvgzhL1RPAxKTqFdZ7TBR4wbZEhmJ8FqUDtTbURPK7EasYcW1tdotBwNaSkabP1Y5vMdnEiJ6UpATPH",
  "key22": "5YN8y1nnVhXhAFRYkTgWGX2XWpYdrhTcukkvAJRSNNsQSySxQ4FiFGFDGpnB4ExFXwfcauBsrzVpDvRf4u6YoYiS",
  "key23": "8R7CBMnC4CQ8asFBN1eexvVawauJgu6kvwvfUR5UTZ51pczTXrLeAvDRRaKKe8MVA3agTgi5HmK7zq9ZtshK3EC",
  "key24": "3nTE23oRhEqmFu9oRPMRgqWXw87YK3UaCQiDLKSApxkd7SxxLkWEV1Suv1mGimh1QNuyRcPaPzdxFVGyaw2N2GV2",
  "key25": "3du65K6o8ahTHpFMv4SdGn3yLUDqp8dZsMCpHMc4EsvKu29WS5UrNKgzuUnaLxZX1PpfaTShnMWSQaevi9bPQPPs",
  "key26": "4wVgh6Vr4P4QdSufYqSxpyccEU9KxTxaP2gUuv3HBzDaU8DV1rvTT6aYB7VNmZgJ3B4QngdjJmMtAx7ZrfzAzMRs",
  "key27": "5bzGZbU5aCHqinNyzMrsb5axHYQX7Z255CvZAL67Eqi2cJcT9sbrZcUPrcWYgtaEJDzLqQs4qEYqX9wh36AwXXzP",
  "key28": "JzkGSW9t15WvEJdPGUKb6iNWfmNCxQogsKr8yNL8afDZvg6fSzUCYuZ2v1MC2KngpqT4q8EugtL2xiZWSv2HaEY",
  "key29": "3E2DCRcDqbX71dqkqF8uPf82Hs5d42Q9QK49GFqNE3KVP7SSd5LEFZLSyqDLg94E66Wy1hvQiQDMQkwmxZVba8U1",
  "key30": "5WzjiZ29PHcUHcmzyijCBBzHyNSfpTQnoSapQW4umwfMvBZXG98NXrS2PkUYqEGMtXW3hfSyfWpzuptQbrh8hCEi",
  "key31": "4Nv6hBAUK3qUtYywXxLWwnmPexFwUvJ295JYahvDyBi6oTnTrq9SLeHE2PhMaRoN6azDErUFzewpuspakNBzBmv6",
  "key32": "2MpEdK9rsydYk81kgV21mWRHHiXqUibJY6AqqXy9L7HJW89EdLZ4ripZB6dpLq1wxxEpodqfG8rewnx64oHXuXEY",
  "key33": "4aigcRjC75jSN87p4YFmT2ajJWzvA1tNdyw2CYtJCEfJ1jATuztFn6t6LENjHAN8FdpsiCT1jNZthtdNCdGu5HTA",
  "key34": "4diQJVhz7amCVKa9chtanEYjgQBPdqesHRwzoKx85pqE6Voc5ejBbhbRh66TQk8QNHcMKQBrW5cTotumRHQK8LVD",
  "key35": "UdPx36RFnd13yENWNZZu7mWFrPbFK6YREaZrRHn48VmnwMi79uYzQppn9d71BNfUtNtT4U95JZdiEuu8T16oWie",
  "key36": "2Dt1ySu7ds4vhBzQQgJ4q5b1HXWQ9zUbo75dNEugSom2yvR9j5aLm8QdKvWVXBM9Wy3Due9x1mYZ6oP6Rt8mn8eV",
  "key37": "4tRqyeWq9MKNUJGPwmC3A8rZwPrBwDwQBb9anXaN2yq6cdooRib7qDDQUYoXr2cGBq1PsJy7FD95X9kgDyXBcaN6",
  "key38": "4kh7b6ro3sCjRoV3vT6oQFfbbLLcPehhgyWNLmHbxS1CzxzpzFvjpVxaJjVyBCF8EJJHMYHYvouzzBUFWw6YGcPU",
  "key39": "66AW1BDwiK9tBpgkyURKwjoBjMgZQR8o47qBHE5fwtNvbjatCyTqNY9qF8iuBGYh9spYTEaXCAXUTXNZQ7rcLrdG",
  "key40": "2PdEebpUz8mHqqxYiVE9AVAKC5nc5oMvFNwjh1Q9skLvSSobv6bhCZMQ5sAbEEiYnw7aykmXcqCSRk9izs2a8je3",
  "key41": "4KzV2cLwZdBxZdFZCpWuU1xqk7iy8qVdGxniyySiuXUfQ1P3cZJABPVpNtGCvcF9dr5E9CDPuzeDWjGS51btZm26",
  "key42": "2bCwqxZGK6g84hqurSCBig935jhG41DHtU8rqbPe4EgwrcN3jPdkY2FiZc2nnx9QtJQ75BPUbmK2pbn5mgHYpzsQ",
  "key43": "3qsjLxw2z1SozFZQFhE9cJJdkHvPxnPDUAZ74cvGqsNkwZjhX5j9ZyKoy3WMq3qYA7wtTVFTKsYLe2n1JqpMdFmm",
  "key44": "Nksfu2QA5f4u6ZvK4KSqupj5vtEYrArdEj6RgH7MEws15iXhWVX3q7KnbgiUyLrXFAJtcmcvbhSkynsJPtMufKa"
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

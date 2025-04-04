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
    "4LEmKSjVPhHKAhnXNmvPFStwpKDzUK51FHEd5FEUpEUYtTCgAxitNEAEiz3niE2AsKXPLo4psGdshsPHG22C8UAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMbGiukBsruN71ZbHcvCqukqoFDAno3oUbXWGebrjjo5WH9Smy8dDpd4YnTRmkHeh8FcRCGApTMk6d4mz8U67ds",
  "key1": "4ZN5uHwoABJNbrKHD7b2mpd2Pf7STq37KLtbBDiHNzWWVRjQvDuU2SKDRgNP7sJjjocdXxF5SHWcX2sZYRrbpRsR",
  "key2": "4W9GHwBq9jkisLHuDBF9Qz22bVCFYtfc4mFPua4n67LnQCtZEgcP7nGrReAA192JXTYzjqT79oAaNryNHBb8G478",
  "key3": "4mqtMozhSMrte5ts3v48zSr5DoNczZYqdRuMobMNHKdX9N2PfBLoC72BPdCGutuGgDn52qukbsbr6RMCgPecP4fh",
  "key4": "3DY57qhkmEiBh3s5Vd7ATVy7BbrG5zED7Qb3TZSnSVGBYJKW3LaTvfifro8ipPjpRRdGHb2vW6YnNa3D9KA8Ly1A",
  "key5": "93aquDNZ7TJNax4p326j8XzTjbjK8XU16CMMcp3ieebfHuZAed3HPZVaXfotaB5Z7otVrzjPhiqkRRZwLDqs3yS",
  "key6": "4WFZSzzk67MXN5My1JKVH3sdyQwmrwg3gaXMkJEkiAjL817tKxCD1Ye7jHbXcuQcSvSYdsRQseRvE8ChENdQSmfY",
  "key7": "CfTPzcd4fPdoeG9uhs7AiF53rsjW99RRudatDTMtNzR52RaqBUhdE6ZWNe8TcvjMNL6pEueHfcZDaJi9NNzFzPm",
  "key8": "63dQ7BGMZ144tjwUCXPh5sVacBxGCjKmnP7LH9Kq6ufdUkk73Ze1VXJdkZAqpWS21xSfzVEBPiwfJNj5S9iuWZVT",
  "key9": "4GknDZ9qMXhx8QbJdY6JLB8Skmnf8zrC9XwJyShFo7iGwR7qHKABJ2PuphHcRppYrMTDH1DPg5SuNQSEhNkQmU5A",
  "key10": "5GV7ti1sst6XtV6XV9N6aQwXoq7x2YDXtdVPBVy32atfGxt3qcJdLnSntqmWXoMzjMj3thpGuKUHtjbzgVRqPaof",
  "key11": "3w8jAMzW4R8mCfWJoEkjc7ALyk9S58vnGQNkh3XEiw1PZwY6fqNMQRFKvzKhCeTWBNPkmSdsxi5N31rRSrYNiveF",
  "key12": "5kXpc6pA24C9T26k7urWgXpjvV5b1uKPtRNQTg3H8XJKxJqA66n6kqGadd49LtAm1BC7btAYSEJPUkdiaf4fQ2E4",
  "key13": "3YqC8iPoTtdYAAuxYXx16kN4x4ught42xWKWSDTxmdnPNECnmxnpLuw4tMGTqp2ReVFHob4kD269v51M3Mp5ihHR",
  "key14": "Su8GiBASk3WgsU4oi8hooSUucCsPgLWB2h1FTwEXkyKmGTudtqHjeYon6aoWjK2E4RcYpAnEz5JYhoKgvvWK5wL",
  "key15": "2tLzucPczc7jT9eTxaEeBpHC1yHuka2VwjozeAxKMKRbpxfh4qYtu1rKQvSBLf21tiVNAARe7HL1W3n43NhsaGGe",
  "key16": "5pH6H94XMSCK8ZUZFaoVcp5hZn9MHa3aSFTQTJ2KazPpoWyYMenAwGUHoD2PPR6ajHYDHfhCccu8VDh3KHQDjwbM",
  "key17": "FwoXpN2H5jDfuemSMTAtLq7WqpYkXVrX1Mo4DhKXeCNQv2MsC35J5fd7Hi3yAgEXRhoqjyVSZCj3GmMTvvcvfPV",
  "key18": "2VYMbzTaaySjdR4GeGzWcjuzWMYkhCUgF51YXyoNQdCsQ52jNqh5yKcLjuUxAHVwdjv9suEruPWwKsZd6c7LWXnn",
  "key19": "2SByEMwjSronS1V8PCbnYsmKG9gmnVYs9FUDLKQtudtQyEFBGtwX5qFuDiWP1URkYcKe1Jkirub2aoFMjgy6L8CK",
  "key20": "2qKz7Jo9mvzhrz4Jv8KM921vtYWs1DLxsfU2LGby3BPnGXWtcCfRCW6CqP6oDJRLC7pEaSqL55Ykn93ACDkdLGx1",
  "key21": "4WYp4SbfKZmMCHMGyaNL1kK5qGcftmo9CsHzjjy1TuVq3swfrDZ7G28z198JwDuSErgdoL9kX44ftD1NzJEwMd8n",
  "key22": "3MEcPaeYXSsNGVxnLvQrtMjY68Y956JWiDJhKibWzLbgmeXJx3eNytvJXw91nQQn61GVBPUGHRx1WYi8Zzf4hEZm",
  "key23": "5isnnyKYUUdq9BvLcWr5gGHWxQdwWC6w78K8JoT9dDw5XijEUoNvR2DQt4D8Wmd9Ryqc1WAaUq4WK8kyTHJMwTDq",
  "key24": "5mT7cC5Boiwg8yG94SdsNa7dHUQFotcr9XWMmWyVGgU3zpgXS2L9ghhjwG8WhCvxMDPtDwDZcvBW5FVxJPhbLXVB",
  "key25": "4gYzHkMHsJjTqoDR8bbYAyfEx98jUGNeyVRJ7UWyNs5LfMEAR8CByXsR9Focjm8unzPhcgfsfvExPLrZTMrCqamP",
  "key26": "3gA5UgUuEnbdjr11jhjJWrKSgdTauCCPL7cmfiV4374qh5NKiG4WLFjGHBt5beJmyJYnuWVyStUXjD44wh1fjWWF",
  "key27": "2dYnz24AyukgLzNBBhmxvuo3oj2cyPdAtKu9RzDV6XkcjvRqo1Ng3FGimDQpjvoqmtwaCb2R7zzBxdEcc3R8JnQF",
  "key28": "Ra4KCecCXnRiiwPtWDNwFiv3519UAj4V1kk2B5HphHp8n1bYPgta5UvbzEmNC3AeixwyzouiGpgnGuYGVtwnSnG",
  "key29": "3SEFkE723t2DbRhBz434kF18BJKWSRD9j8SQEW81HpMhsqrWJ4LysvNQEthiY9jiSbNcNhbmKNvhMstrFPhmdCWZ",
  "key30": "4afhESQHHt8irFKMtmC4q7sNW1mwPA1Q85tbrCvx55PhUJYd1x5kdZ37hy8i37LuQRvtHayPjifrdMhK6Vi3uYxB",
  "key31": "3bdusv3WJcSbPet9gHYSxncL6YBRccE3PQhnfKMdhMH3xKSGC4bSLpLAfryTN3z49DvvaRXyX4hiy2XZ6FzUyVCz",
  "key32": "3fm3De9s69eA41ByxeTixVszotiAxS9kuBxSpEMtTLWgQ9Ct7KBo78gwS4sVKtaS4LS1yrM2xkkHbdroJJhCpmbp",
  "key33": "4bHPbpxb6QbJpG2oiPjHQch5iYaUHeJfnBs9aJMgZFUKyAr1ZSk8e7bXeqMTFnzhB5adwwskded2DFDUQ8kaLLz5",
  "key34": "5WnfUkWrxZrZVgWJ7PSiFCZpqZSx2S6zGza4u71u2iSqg5RAg8hvcDo2zBNgSfAdqcw744Rv4Dh42CMuu9Wwbstf",
  "key35": "4rGZWwqmjUvN1M4NGiMEGGwp23VToekcUzB2zrr6t5QS7qPDRFwuEkr2gGFoDb4zaVMC6yYijh7jerWvcKb74RLZ",
  "key36": "5HWkcnzozj95LPmyvVsgxB9mrdDCeCkUxsqx2zRj8Fke9if1KkE6z9jnjd6BWbeWyXvo6smjTQ73aBDqrhgWF1St",
  "key37": "4oJ7PqstiyuzsGoeQzGogS7GbkDocPAyzkC9r48LW4mF8JJ3EcLJe9mf9HswrqfY7kBfLC4SUsYaZkZGbB7Q198W"
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

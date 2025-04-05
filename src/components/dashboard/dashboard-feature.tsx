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
    "2S8o9vSSzETNnX4Vvcz5iA5jtZWyCu8uwnehePPrwCtVATbWki5MGZVscGKJhqqPDcuxTb1zuckEMfX3GHhxSByV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fc3MR6cBN2MbwSBMCixNdDmW9QSBZeg42zyxoTHat8uqKiPt79JeqWpWSjiTF1Z41xj2Ludgbn87LTdjYdUDdVy",
  "key1": "3eXoi83eGXSaBDRECqyHbbxczerKmvZm1qu1qectQdMMA74S6GsGHkJJ3ZNGbse8WAEVBw8VTcx7JeQigbpFpF8W",
  "key2": "29pWetFRh3Mi8oC86STLap96wiyvsyjWp8m3V2N8TqPTXTJDS4PUiQFzmAohHKAVSTzQDwa3J71XsWRiia1PxLop",
  "key3": "3xkAu43AkBjXg5EKc5Thwn89LqUFcvFUqdjhbtRmHUNCcZHDkWvKs64icgi5Bi2Lk2t8SUesDaQYPi2TknbiAFCe",
  "key4": "4yp2yEYBeJMns3kShKJJeMefn3Qr2kAWrgLcNdGDBSadVMnn2BALnjnbqKMffLiWi8tWA8u9CFSqZeC75QVgzPQJ",
  "key5": "32zi2cTbmQHBjQGkvfCRzH94H5jpM1TGHT5mbaUJWgaEWXTLa3cBjBQirgQJfV9XcA3DeJAC6JVBRcgnMoHz5xDj",
  "key6": "5cuYenDMBNkFsUh4ozsSAbGh8YSR5MzkZ9CtreM5BJpo38YGv2chB6C7BVj9C6TVYriGwfgUUH7diaBo67448jht",
  "key7": "5Uu8nyc9U4JZungB9P8Jxv5z5d1TodLygBRRAddtritgHkNYErQftzdvrXrfNxzBeiCaQWp9J8rMRbehn9vvKSCb",
  "key8": "3SFnodANim56DrHCH9io1BqkqawGKfuMq3XwMnwzew37WRLTNSNJ533LUiYfV7bfKBzDke1kLkPoiAcHYybzaZEP",
  "key9": "4RNXLdcQDB3ZpxkLTLcEtRn7REDBp82Ua5i6bNNLcXwfqUATygQf2A7knxuJH27idmJAekCPTTFzqNCAWQXqSR2w",
  "key10": "4Y2WLXhXV6ueV53PF81xtNznZgoN1KTyb5zkeE4Rcu64oaUrA2wrHvfhMFaHHxoCKHLDS3mHu3fKoUNJnC5uhVqb",
  "key11": "xrNzwJm7aYd9QBWyz4AeDPQmGb1qLUKbjd5xR46AEb5rrVEffGBRfZcUA3KuqkL5dhZ6nMUsZaAQMZHgStuu3Uv",
  "key12": "pdAs1WZSNHqRE1m5zNhy9mV6Gn5kqAR1NUgCaqpaSWMwEa6Tp2fV1FwMCt2mVQqDiFcEsieutNCGgU4YhQ1htZS",
  "key13": "2N2tFHgvUJGUyWqo77eTfaKsS7Mh4p8MiUTmbQSfVKejLxZ3PSxmuN2mcwcPxRcrkAp5e4PDHXX9Ne7W6YdxCjT6",
  "key14": "4tG8pZtZVWwMr9i18te8bXFKvmYr5dr3ENX56YsphqkDhzN2VzSy5dXQzvMsnyDCqGESDmd9ZK7MGRmARoVbnFoK",
  "key15": "3Vfh4pq8ejeaMvTMcKGzV8Sr9pbGUWxDeXK5S9gPQSgRWrVcXd1XiqpchWc54eyBMFW1TeaRk6zvxjNL4oCoQCSs",
  "key16": "2sJTfKtjZE24pbWTNQhGsSaC1exu75ySUQ3n8wDwYeke1ioqqyXKwAkaxhxG7inBWrgTbAJDGfJwVPuC4qWUHgu6",
  "key17": "5dTnr2odgrpNVLPHe4trXqRuoW3qcVyPTL7z9YxyWqp7LfhkURTFh8HDpv3ZZfQS5ARDx2uF9HScqGizjNcooVFy",
  "key18": "3urJZpWSCCXtkiSySxhVWEZKmyhYig6WD1XnCRmzrAAqd4BDhFYqA6PRvwssPzaG8TakYs3XQ9MuQso1ed1XLiVH",
  "key19": "35cab7hk6EWhVqFcotMz1SVQUCt3cmAG2NNs8Z5Rmc38fUmqkidPXkQZ8HitceazM8azNXayNgomHjhuyDByaNiH",
  "key20": "32VyPX6Arij4uTQqk5bfasjhqVFGGXWxrYQbcTLnPNCmNH34DwQ2HGUnhoCvqeLbkXkxFtjvfaqbDgYmiMTCda2L",
  "key21": "5cweP2sZnUgjiBNTdVcfynemXpUgu5YwiBGhX7TL4WJYeUchfQEs7LRP7s7Aa28eg7DKHHXG6Js5mPoewDhNknMu",
  "key22": "3JSRUSF16FMpdaHL74MYdaRiNjgNYyfWCijjoXonm8UmdPZZAUjoGiNEgPc4wVkDukq1oeo1vACuV2SvqZZfc15S",
  "key23": "3s5AWWdrXJ7wJNDo45eBuMX7m58v5GNhjuX9WAXLY7Pn23r2iaSUsoy4HJtGhBRnJVdtufZ4zGWM5r9GbUCDvFwc",
  "key24": "rVGgAvtSLfcKAeWTJaaXTuVXuy3ffCn9N4HGSaYFpMzAVQ8N4LdHm9zPk74me1nf2ZwBXA4i8FpzstxQBkt15X8",
  "key25": "4wrvoLbhCYuGbeh1aPQkR6AM25puNaMPhizhKPUuWdFv89uWUD4dAqJTkQHpoYXYghKpm8bXzKVD9m32UaAWpLqW",
  "key26": "4Mr3R8ccqyvFvRdrMgv6ZYHAuarjXTEPtvhKHY5T2zGfBZS9EeSpMFzTi4fimr4d34ZJ6ZgMNrbw6UjSpjCXwzmq",
  "key27": "4p25UBaSfP8uwviJ16MFdh2fR8pEjn44mLNoQMs1ECjegZVpvMmWo1JaWEvhwoNQs24DJEqoR2HECFHDb749svHr",
  "key28": "2bnwGP8WdFBkNR3JR9BxGf6c9VWStucjiNFHt4mMHk5BpfaXRwNWzbpwkGg1NSdci3Qq2XJrq6htmEy8vDzxuekK",
  "key29": "3ptotmxxw95AUfMXENz3aDCwTBKYgjVXE1snRy5zog9c6KgmbqQYAjVMU2mH5RVP4eUSscYWYh3jhf26Zs8Y9HpM",
  "key30": "MGWMpByea8sCfyppDzB5Ygw2PrZqYD4543MDuR16TKWrU18AQJFeZhSBjZHiGaKedYWPktxjcDAHsbDA8s8h61F",
  "key31": "prDvjtxPyCr4tg3XNK9aWQdaB6aQeNZWxFSLYXmouZ4i7qGcqAzgXSrVodAPgpSYGpuScDVzU63mApyuejbzrUv",
  "key32": "5CaviJhUja7CxT5VEUwtHfsodW36kbN6x2LU2LsXgHbeXHqMfjwvdqXcJp67YxwgLcnpw8ETh8WpjRLQ6isCgHdH",
  "key33": "3xLVvQsmBjJpe7GehFBaApLqa1UurJ6z9VKzh4DJS7R681sU3ucf6McTiTmprCQtvjzHrhPtWaBZefKG7TmpWqys",
  "key34": "2wvV79U6aVFguPTivnUbbbfDsTSodpDDoH5ZkrR2eD2w5dvLZkBJBCjXqj2bznaBqWt7nFfJ3RmGkEjs7Maz4SJE",
  "key35": "2MgKH8qQ8gKcX77m9gP6vTXGoGZXCWr2vc1ppco78i1NUsnjZgbULVfp6FiXmaxGpuNwdHTADitG67jtHUJj71Jv"
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

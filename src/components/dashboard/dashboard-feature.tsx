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
    "9WtQCMUEaHZiRNGNhJfxmaSZ4Nfc41VCQe2GEJNsXxA4v5Ls5kz1GBEJeCXnhUwudtjhc7Zud3Z8aPHvFCBaAFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tb1RCjCWb7RZe2PHwMbL51CHb32YyNaC8E3f2rGJ9GmwZfAkMEe5PXpqrupcHQtbGe4B17bC8SjDeW6gMhcUmJT",
  "key1": "4qbfSF3m3EVc4wZEH4mnFWayuoRvRqQhCYsbsn8UcZv6usebApTZDWP4e6nax5kbVsxGFjLSkSDDZdhgzH6Zq4Sq",
  "key2": "2fvPv2N2T9CcEahm6QTtpVQdCtse9kDbVeafBBp27XD9Y5a8bN7fPCTVu2aeEx7CM3mNSxFXbSNHYCTY54UkcXGW",
  "key3": "32yPDZMFRTQvJUQ91pLNSL5xJDpWwDGpjJ6v4uRxbSMmhcmyrNWW4tAban44QomXCxAKDkpzvhWCp2S16GeuGP3B",
  "key4": "5fkqeuxJ7KtqZRuFEhCYTu5wK3CyRqGQbiPZiRXh8dCSjAZiXw9iGjTMeCbJevUH3g7wJwSBPNEcoLhrsNigJpE7",
  "key5": "2L8dSjDrJk5h8tAnckSDEyp954QvTQUxrRCNkfvKmBPAaiyBXyPk9yYsvueJFpq9BPYrtj7A4FkHKEPZWysT4Tqu",
  "key6": "5yTueKaKGLgpAoqV4QYqv4CKN1s4FHtFR12p6jZ5wkpmsFZSnoxvbdhJtw5z8uU2uLSCSibReGEPfki4Ympcg8th",
  "key7": "4SMXrsxFT3hdqmDL4vWcnfwRcjEYRXDKJzj5BxfgJnHb7ubNshLLfL9RvSNWWkfg63gaQuMQPZEWAUiT5CvCcZif",
  "key8": "44TvwFJKVNzVRGidpy4ceFwLBEAVK1BjLjU8UcDbDavNdUCoTySEnmCmzCe4G1Rs4reZuq1p1ViE47dY23CKgEJv",
  "key9": "5WZwUfofaTM8ddBoTwdf3PK3RSpgmFKUkcdtUHGc9Z2QvPKvN75ozg2od2cCFrZCSjYuCDmudgcNAnXEs9LcgGuZ",
  "key10": "nUkdEcMHjBbGWarPHnPDKc6MCXsgktSTVay1a6uMx3FdYN7vD66w5F52JgTmDaku37HWjJuQSvbrXTXRBCDKVJc",
  "key11": "5QxZ2qQ95qRNauDsyecHeFTL319FqYPVyZky2NzvuYHMz9M6fzWMUDDFh2vbMhXoeXxyQ2o1UMmMw2xByXq7AGe4",
  "key12": "41CqQThDMWViNdLJgfSihANZ1UowCcBouGsLyEPZomKmgrV1nu6ZNafdWYL51vRkAgHS79ZuYntWUqFaBx4mtgcF",
  "key13": "34SAYGbMC7RVpcDbnA6U7zZSGZsPSqB295CvdRvQzz2y72Ld8GUhcPdKJNBJVmaq8ABTqm2BAR9UP31Banuhug4d",
  "key14": "yaeCfdT7i3up8PgZLPJyNMYwMTRTkbqKnwoRZty3iFyTfLeVz5vjNGK7RtN4iof2mZTE2hqyrf1ZGkVSpd6L7a1",
  "key15": "5XSeZwALdComSocPvZJatiLHHoP1SjtD65qHnY3kgXFujYKgizpmvzUugrXwnhEa7bUGPV2bcQWrLL8PJCZReUtn",
  "key16": "4YS5m9UvhMWvghsRnYD5FeL7YJPdwTZHMjmycGHQT6tGWEQCBiXh6TcqkUXoSS6VB3x9qaY8mvQzQtr2VUJfa11F",
  "key17": "24yrFsRxNCpfqrY7pRbLfcG3YWCau9BVhBUcyf8gQRZGRjxRyzsGB1CegDAp1a2zRELiBBjgxFwVTTuZaPYfKhpq",
  "key18": "5LioUyeaTfdJJaiMnTRkWVCwJ9WCk3qA1RtzgnaRRKALQd9XZFgqiUirUZPMh23XWddLy2m7iERttZymt46QmkHY",
  "key19": "5eLMFu1x7SzFs1TFkNuuDPCszhxUqJ6XCqRUnGhGgzQy9QpLq7momzeSjVeF43u2RFaWnLoP7hfmAzAxhZiQBMwo",
  "key20": "zFSF6o14QiUJbCCLij1XbgRFarVavkJCguGF3tp66V9kaSaq2Vk3Cq1oc76vLVLTVjAMnvKEv1MW5ey8jnLJf9u",
  "key21": "4GSXicQ87agMHAv9wCM9cyD9aZFgGPCi4VJMScyoTDESPghnwX2WQLycB6ohFCiocRDJmRd97N2FTqPhSTFAVCWJ",
  "key22": "2AACypGjZpEhnuU1zSgA6XH2fcJHcNHaqd9tEP2HcmEo3kRHFbY98cyjmHApMKPiLUvj5zSmrFTximKoZJyGe5AZ",
  "key23": "3AktAEMaPj83jAa93Q6dFPLjwzoYL48rYrBgvfEs4rHZX84KfJxFonTEaNtTCTuvdLBHBNy9mai9gySD34AdDTas",
  "key24": "21mbCqFnJXKfwKBiHrGWzGV9fWH9LCJRdaYeudCbwS8yot3hwPwypmuMx1zS7P1QZ5imQeTjwruYzd1RzxxkUTkv",
  "key25": "2vuofUfAqL3ktQP1RCNphhW7Ua8shUPwy1LkQuViii96a6gfYvX4gsDodVewpk4Eag9AJGWqNV3w116gd4nKbBea",
  "key26": "4RXJkDRF92FjFaQUwynJjxJmW8UJhB9K2gXCwUSQA9Lb7g8NpTupUJTKkzjZaHhdLtcNTFt2XxrASVzCHx4RAKyL",
  "key27": "2QTYGR2RkUSiARkAWAsBbMacp5we9mZDofSVhbK26vimc4pJFqRiksXx8EYem4FcBkXEP5Des72rfejnUByzaZNS",
  "key28": "3Xr5H21Lmr5fmUL4mQuwuXr6yebLPPnm3c8JXPoxCq7UX5hdJh1188VNm3fpotigg64D1iTCJmxzEbpVYtrdvT8j",
  "key29": "4foH7hn6a9wExJNRzy49sebzgUKUgrTQN2t5iuR4ASXz2QXrLYeAg1TVvNVZNp6NSJfvWBWpsAht3STh2nLsgXWy",
  "key30": "3qXFQJa8yiafubydNdnF3A62TTgWEngM5qiXRqxzwCt1vqHS5or5HFdUmREGgJ5gLqFrnu35DaDhttzeftrzwwsn",
  "key31": "GV8YP4dFukcb3NX7xb3z4VUU5jGYBi5eACFs3fRQM37UqzffyCUvQvSTW12haFd3SsV7rUXs1tNEcufkzAWHveJ",
  "key32": "zuwabx9Jc3BYBLpibGCePRg1p6rtBcdw9bxdosgHkvxvsaBRFTimpcE4ZD1cX5Mk6PP77gCiReRxvWUa9sEMQxz",
  "key33": "5HdagY4tDR5WzNJiRpP5A3LA6vEa7iwU4sFhcdjJ8hDfh3HaGJNLiUf35XLJX9ACEwzibsVgwRu56xbVeH78sR9h",
  "key34": "41D114Fg2EwgGRWgjJ8EcsRsWmbFMyNvM8g32a6HiSxqFd7oCqyCFrvnpa8rzmZvTeKfwpAF5Z84Hn9CDLqRtBJQ",
  "key35": "53vPeKUBgCk7x7aHUQVxVztwRtqQSLMMvfuVTBJzo8rHHjxqDvt3fXeYA1FdAnv6H78RB1NDYY6AjBuSehmjHZjM",
  "key36": "23hqqyUHMEWZVD7t3JZiWgzDt2bunSrEFTLyoChzhjnCcsRvZW7vZfpGzLcRdXSK8QWZv9aBtf4ygQfa8CMnJ9pm",
  "key37": "Ta1WTgNJP5JjEe47hPo1XrSAHhfncetbXfsUQFo3GMzbSco7A4EjWi8dfwMYb7Fj4r1PmY7Gn9uQBawpNGXg7V4",
  "key38": "GYKDtME4QyX2MP3CrCj3ogRaPAHLCqrar9GaDLWrvaihjN9uRPPmEm6SE2dwHoqrQVf1Qv8ubcXkdqTiC6YHfHf",
  "key39": "2WzKRjgnxSqcUC9EaqBof2vwq1E5uncm7e4jQhrniMLgWEvwKqGYt7eSNMvPm5qbQw8M923tk3qmGcnpDCubyXqT",
  "key40": "5QZqMQBmpRtvpLaqLNAhKwQzARSaAZv1pfwcQigVMGVseyBcTZE5TwM6aHC3nLiNmcwGe68jdxpBqjsWLuhQ6sbR",
  "key41": "2qN16AyijHJHnZQXXbsAKKqWsFEhhWUU9XqzbgbCkGPWcSXafkE5Tdhou7BSeYgGQm5L4byxXsKvQ2LNhTHhuXbt",
  "key42": "ms5ebx9KafUtA5Bh4Y6kUBQJBD71LntM915ax67TqpzLeWigsLrXyLZ7gUiwfi8apvygxhgSG1ZWyTUKEi4iy5z",
  "key43": "2xKoVUgx8qDx19QgcrTwq6TcKb65Qozxs8a9pBRWYYv5DahuYVzSTdgSCVztWPhCZhc6FBznBazCZdjC36511RQD",
  "key44": "2QmWUDvULyrrF6KT2XpLV5gmbnbDkFWxrK6ojqh1iBAFHYMLYryHHF4X7nGrSD3U5brQVvhqkZUTJ5NYV4yi26sR",
  "key45": "5YWeN72KEiE1AuhrRavvgiiCnxYKLApYFF2tQuhSuoK51f6vFXNXJJTGwHMqgrjaB1ZAQzztsRRSkczoN6m2hudb",
  "key46": "59yijdgpvjEHwqCkJjryNoSZDMYcxSq2c3UmWcbgMLtgobyfLmnMw2oMFCnBsAV7rDSsanontV3GpewudrtA58sw",
  "key47": "CGe9Wsp9MwXQnVGQejoun5VcABkMFQcmdeqk622tvE6hjeBMfinL8opcUCSsUZ9wiynjqhcvWYUjEzy2r4y1Yk8",
  "key48": "2YBNJKs4kxjBFHYK1d8gVn3ggHw5VuXNPtMwpZJXKa9dHija5kMM9Lbot5a5vhjsRGLkwE8syjv9uo98npgwPCwb",
  "key49": "4uVkCLmtERGEfaVCGSNpG4qVrRgzfC8FGZGWnJN3UJGYCinxTCwM1ivxN7eKtvA96D9cbtnP716dJgU4eqSJDeRR"
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

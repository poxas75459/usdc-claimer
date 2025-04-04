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
    "3S5qLhtnbmaFwWyGgBz1eDG1bzHHzJdKTPZcu8jdu1n9YL8HZ17RD5cvMeQnq8kxEAHrVZ1fnApEti9bx5EAvxe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25PvfqTSYpbpxbv19ypuVbn1SkWC2VvnxoXEfBGxVCpSFhSuqQPeP7xrrUkJ88xianYrDMxsbHJmEHqgADDgVbv2",
  "key1": "4wai39Qbfe9Z3oG33Ndmdj1BHV4u8ps2eW6PJKhWP1GahrjkWQQqB7oJALctLNCYhjYrnmmWiabhdnnaZiyPwR1S",
  "key2": "46xBh2FUHmP2tAZ4wjjRHt8Xqunc1ArKMjEwtsJHn4MFdXtTYwo4rLaBQatzjb7TzgE3jchy7F44YeM9WJBKUr8f",
  "key3": "625QkivF6XqoYjvJRnXxrvq3HpkHJoEeNmACFUG9r82jUro1HPnjv44CYyETvYa5yp2v6Fwcmcdr9x54okDA7ssm",
  "key4": "5v9QfTuKPJsi7zgE3tjoUqkVAfxU1cjSQLtmwGnPoYKoxmbjNiZcF8TpoUjfxeoiiwwrVKm3P6hBebiMdsEfbbiA",
  "key5": "cxGpx5RiuLE39FLHmqfzpm9nUVAmrb4PVErKnj7bcdGN9SrnEDCBDvw9dttwngzzn7fkSTnKp5ZWgPzj56Pvd2z",
  "key6": "5GrBhiSihgqvaK2UdBvLz5JH8FhjxhMEUTzFE9NNcqfiYm3kERGqWDZE9SUAAqhvNdBnfdANxfstnzxmtK7aP72i",
  "key7": "52Uuj3MBYMjpsu7gyt1Ph77QaSZTyeibsMEkDVuh31BBY67XYoTcTtAa7ZqQHwmQmYZP4sp3RGyU9gBTCwCGkKxd",
  "key8": "3BmsUwmrQZg8STMzmd7xjkagTbUxkqqrs7KNStmdfArwXGuNhUvLFXtWzEKVudEoC3X6WGcGH3mdc7NQ3aNnxQtU",
  "key9": "DcNdASoaaoEjCvSVw96mhfsoZC4p79SJ2kcMW6MU1UkeeuYPANz1QjsG3p54jur4trbtstdRgZdC4PbzDoxwpDk",
  "key10": "vcW2QHFWtyUQJm6EXvhNreZ6Uu6Br35U2ACEvbV8x28vupSEeCecGYdy2zhGM1pDiNE8FLGp2ZNYTMDbuLvqEyE",
  "key11": "GutRY6pcwgMd43LLoprfC8ZbL19FNQY1BMHN9wgzfQyYLyAci5nE7WNTguFVpSrK452UgVRnerZtLYKutBw5YFg",
  "key12": "5C1xvjYW2wZw9g9xvdukuX5SnJGCShy7LuBCXEE1eNmcsADnQgMhHTc8g4UNvsrdqHCV3gLDDGvinTMSqPj14Abh",
  "key13": "2JwZXcCfSEETEzpxiiQYmPqCWiRsxQhtgodffvh1SkcvCTyV25PPa16NF3dKvRPo52h2iiRpSMTY8RFEXJRHhky2",
  "key14": "56sVWi7UzLGZCnX7eHuJxGn6cc3fQRbY7uuJPs7Q21ZWAp2YG2iFTm4tY5jSXwb29J2TN47KQaDiDbQKCKmNJxMP",
  "key15": "4ByngmdmdCEbiFKaKTViKFx2Krk1HX8s3UC2dNynuBnoREJp5qoNYdLxdkEJYRZZ62zMpEG1XmYUtnyjMZ5MYzMA",
  "key16": "5GxY8FMMGVxhkHqhPTxFzBi248j5ipGDdt9AsD5UuhoVbYygbDKb6b1z5ngPSdeL8MxGsoZuq23GroWdAjXcVAfi",
  "key17": "5GV34mkCQYjtu8bAs8VkPXXF9RWK9GY34jAkPs8Lxg7CtGzUP821rxXdMAEhYLHvaQRZ6sEChnMvtrZsx5bg6b4p",
  "key18": "34zqDwGW4AnR3TF8oa3TC6LZTFxgikUx1UdBBrbiWRpVBcYGLaZhyMt5qUHjYCUUshfkzv7XSEdkBu7UEh8ZQ4X5",
  "key19": "2Bz4NTyadnQPfP37iAs9eM19vMeWfrpD1iZPgefmRKqfMZYPQCnFJU16cNcEaRNFUej38LJ154NYsynxbfgRnGNU",
  "key20": "3dfUjHZwbVtutoJPeuFinJ6qDpu2zbFGugu3JgXNZ91sMVG1Hcz7Nva5vEgx9ggNcYfVCNohsApQ9aFn11n6sifw",
  "key21": "4SxkE4rkFRTESp5p6MW4quTHrxcAV8oKX3zh7rp1iRhVvnYqKuEMfLS7pgZV4UxREZRWF6cAnm9rJxPwRencyKF4",
  "key22": "iazdLEWQ2pxePxsbCuh26E9fC59Gaq4CPT3n1P71RTiKPUnmo8nbWLcTVqMHMzAmZtaYsyZNtzYjXj9oruJstxo",
  "key23": "5DW8BqA6LDKaGnwDXUbYiPpHaBch3B9HjTRFvpjLJkpDp1YH55WqL8ZDBC9cy4NvKaTyx4CXNfmGj1dfPEALCsGY",
  "key24": "2bD7xPbSeYZQxN5vrJqQgi7ide9Fo2Y355GvAcY5kYPhJXRPoRKNDYtprxbp4DX9dkadyqmxcavXHbeyXvodvtmH",
  "key25": "z4mkWc2nnaEkgsJrqCFAA79HmhCtsvopUo1TBPT2HJpFforJrxsRjKXsaf6V7G6agu9gZ2R7XzrLU7GWSmXXXhb",
  "key26": "ZRTDjpDiMR41uRkkLb4wEXVkitSxNcekb2fk4uSn5W62AAjo7tJdP9RvNEh1UDtyhftmimCoySu53ihRmMB7EEW",
  "key27": "4WTPKDWUbgrMPKPHMcg9GpQ6BPGkYBj9ddbQ9WQDuN9bHwwK4BoP8mj3PKZDhhbMuTZ3QQTL7afMJT1Bk8z6LXxW",
  "key28": "NdbEi9AT3hB7niKn7EpvfKmbkAbs5Krgvt7nXozNgvus6YcgDayXBJfCvgZDuLyJb5nEP2z4Zf92HGVKg7RegCX",
  "key29": "B9ocQPnb3KvCc7vazASK1tBxvW6D7DW63hyYHcXhYkpyyNshMHpN1iRJDb5hBgueq6eX6FND6nkgjWDgTM1ZhUU",
  "key30": "35hqHyNAFaZQUuUVCuTEZ2d1SFuHPKDjgx3oRwDz7wsHqxVGuQB27MFj6oBibXkRbP1b28mtPhMsW8FSpP2jy1u6",
  "key31": "26UXan3XYxhatfNTqPLRFKofQ6nRc7TEFEA27LcWKJJTGt4ZpbSmrvudygawDSb8qf1LrcQtUkf3Zut9Wn35jjEW",
  "key32": "4jq4RugTYDSPwDDmBjoKMYoGqYoUjc9wxLgDuqhZJ3Gf1bgGaXza2iafzqZkSkzh6tCf5twJMmHkYPcGvSpubooE",
  "key33": "HpchkKgGmSUAdECJdgXbSmJy8nMaTch9S63wdru1fFukNbStA9gAJibWKQz7VUbEkjeX1RnnJ9ofBnr725xrsVA",
  "key34": "5hQjzsoCnbFMSPEe3fyY6UKT8DctHLU8HUqipT6QTzz5FDc91ZTk65Sht4MFmvRSp9Ut2dZNsqmr2HSn9Pq8Mqij",
  "key35": "3U81Cpbi8dBXHE3Z9mHtaF1amQZ5oWiwuUYxe8R2VtuTUUFMuf6ibDwKRRdv6QsM29PmW62bEALzWU4JiKaFaBBz",
  "key36": "27RSx3Cd99piiL6nQEi8xZyy5FQyJwYerwLrgBd7KtpLmjddmGQRF4ZBFfV2Cj8x5QCEZ5qkBPiLsUv4gaGzf2eq",
  "key37": "23tnJcZSYHtCcPMankrMqn3zcsPhJ7VrDGb2PSFiCV1pw9NiqhiSkrPy6kRgEp2o6r4t6KJ95pig2yfPwGYvvLky",
  "key38": "pp6Md4U8ebJmVaNicy1fYLhxKZiEbWZteQ5NfTEp1yruBmgN5K6F7NYWuR9TzQuReGeUyNgFDatUU4QVFYncQBd",
  "key39": "5LQY7sF8cbF3xATTchNkWaDUYhTavcg6pG1NepTHPWybuFQusE2UwqWQL28FZ4eftUHa4BUD3UcZJnskas3LmoWe",
  "key40": "3zbbyrhgyXHG3EwEE2fYwnHok5qjgjttakadypEpz1kx6zpW7f39oDD8TWJzYGKGQ2o3JdVbAFwbPgSoey8q43nt",
  "key41": "AXcvwDfcNJQBBFNDqq7EAZ95Z33UMMMJF8CU6GLjqNd7nfAAb6HxdB42tjDcj94MLzM5JjFcGnuCJzaxjtZsguF",
  "key42": "23XcS3ixtjgK4UJgM4EyH2tKfsggPM79e9BW9RyEcmoZG8kWCz4Dq7sibC7waB6goDwWuxSJSD9oKpuW1UqhroBW",
  "key43": "4s4wtwGf7YU7ebv8jidrCUpeQ4P126nagswEnYPS6GVETZ79CvQLFSxdPDMt2Xeqebepop744CdiWLsx24tmFapb",
  "key44": "3nFQX3ttFwUBasH6EJxH7SDR9XfEAKENfGJDXY3buXSSkpWwogXPX5HNprkFNzJdxBVW7RXM1WefXL161REgmvYd",
  "key45": "2oekWMx91F8Wg2sebP5o1XzVKXgzDyqBJeyg11zKyAHJQTqnQEefQN952qk65A9FJMttDfd1ka7dQEehA8Jh43dq",
  "key46": "3KQ1RMvRFQVHkvcXt39C9WVQXW8nPwGGxvrKmZQmohS4BLMF13jG6UVNLcgSMDqq6JTEbwWdKmZBfhdYnzhtFRa6",
  "key47": "5PnEak7w8zLmvJT5NC491T9bLZXzZptpAXLfjf4G8B9sQFwpdz1x5csc6sThWt5fMUkbhywWbi9HBbd28ZywYMbo",
  "key48": "42dPJAFcJtVqNJhQxiuXS8u61gtDNtU7uBwvQYN9hXsdVYBsQhpN1YrNcNkKsvFftkB9oSFGKZF8kgRKm7U25pCk",
  "key49": "3zCUNEMJU5dQAfSPYfQojdASZKtutzfo8K2SUAw6EgdkFaG7DZUvnEM8FYLKFDxkZhLGJpg4KxkzJRH3qgmsJ3r3"
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

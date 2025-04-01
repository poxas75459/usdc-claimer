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
    "3QREKVBbE3ofFqwXasyLLPtuPk2W2LCLKVAHZZofBcy2LuQqhexqyaYrecHZytaSp9DN7rqNHxukJshEurweHB4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQ2je1ndr7YnHELYAFTrZLFM1dV1DichgEcqARN988YewsRkq84TBUzTtqirHA9GddBzhx61zeuN9R6JXQB7nMm",
  "key1": "3gF9k8gNHj9hFxygHEZA5jW5CoYGsS6jHQGrRdB5q4MiVrmzYEuvf6dn4A3VFMsabpsxDwXozFSB3JgruMpC9iBf",
  "key2": "5YSkaDYpGDhuqSDMBnbWUqvWvgPEV1aTELkmKdFoGGBDvaQJx2HVcarsrysUeh86LfrjmCsgdoeM2cehuAjwoaz9",
  "key3": "3k4Csz5fBNXP3NYLoeekcuujcic4a1EHQXoZsmtRzSF6FUwk7LbrbLtrpBYvPRq5objiwEDZXPn4nFcR8t4BWKpf",
  "key4": "5D7PmnAx3HbDH763hrjAFE3i78XEzVr4yA344PMW2KS7UoLM1HZa7xp8XQjbaeLruQ3zBhZMFupZRzAQUSmkGo9o",
  "key5": "YMsaVp74HpFSGc9af54RqEktQdasQ44s584YkUw1R3sXuTEVhAEnWAwTMKVf2SrTE6iDkCyzExwLjUCbYSD7TME",
  "key6": "5vsDhpS2ePXkw8LaGWn3Q1SRmod9ouWQVftLeDSX7bzeGsFTn6y9c36fyD2hCvD3pzgnLJcDdskgK4GoNAoiio94",
  "key7": "3KoJphSsrHSuPsS5JcuzR1QnD3aLiUzXUhKwZv75chBaxqkxZBM9mpDCG9zxQbCCDnQoejr12KaSZUP4p3wPWATM",
  "key8": "3yxeumyY7eQLvLF1SnyP2j1gAW3oxiZfsLWDoDxzTQcMCfK8yCLUxwJgMrtBMWh23sovGMTNeSqnmw3JdiN7MQbD",
  "key9": "21xAmeF52sGVqCGaN2rtSXbvcFdezJ1AsevBko7DFmBmAMqL9mSzrDwJvGdtYt47ohWBaCxGSfYfZUArjXxKygwJ",
  "key10": "5JbKpi7a8UDaJqDb1JCXhssePLBU5AhYgNhe3Dc4TamgseTTxgkeo1KMKTHx9yY7MQZcrv7iXoJ8cD4gqesX4H2G",
  "key11": "3i64KYG1nPQQcreGu6r6fv6iWhCPP3ciQ1u2Cq4uWjxVgD5iJCVDEJtSnAFA52aYbsfv37DmMmRRhHGj4pFRpjGD",
  "key12": "5Fs5XZZzXGkR4FCnDio7CvEDrcKxnspfNXaNchYjahuJBf6sUVMws8qtAPev6SXxZN9R7YXyFsfr4P5rP2c2KYZr",
  "key13": "5rgeAxzBZ8u78Yv9A1ggR86t2PfqzDAdzSNTPkyWmQatv7igEp1vQLV7PygZLD3apJJsFu7WYgXuQaL3umvsUVnL",
  "key14": "21Dc7a7Hbutramw81SkBJpFnmdxT282HU6oCT4qjoD6x3pFvWJYx2mkfAkjigbBG8Awep8b63mDGcxhC4T1RZ6jS",
  "key15": "4yv8H1GFk9nMg7cAuhbxCs96P7K66MdEUAgCTgjhi9oMknrzZmTMQuxX9nFYJRguHJw2r9gTHT5VjquC9M64LZB9",
  "key16": "2iJPQDGhA2rPRFe58DtYvKLAzesRcAw3fBjQDTkvoFNPcfy5ptDgEnofQ845HkiGAJ4WUpwim2imRxvSHd9rQdRK",
  "key17": "51TShWn7FcXwxepbwT1kMKSqVGJQKLJuG3nRocRWxJv92sFnY9MMzYZ65crkn3cvLQxjPcLPr8C9GxDyrLjLwgDE",
  "key18": "4iLG3vhigyP8sNXQboK8xPjf9EFVzWnc8www7pv4X3CgCt2HecRAf1J3kr8sC5YMJz4gGAptoLcZ5EtN2GB7bRTM",
  "key19": "2SMrnMnJZiHAUF1YnoMux2sgr7ZECri4wGoSbnVoJsdwipdydcvvv3Kh6gd4Q9UZYLUgD4aJrVgP2vooMih89eqp",
  "key20": "5HZGxu3rXCCkmxbxMHLy2Yfeu9Zxr98MqxJ4QCxDoSPWh8uZgvX4WLBkeEa3CwuKzQjgoUMpBXujGcvFzS7Rb8Vh",
  "key21": "4rR68CJYD2qYryJo99qVrFYdjWwMWZ2JxQV5G75Acrs1twXvp3UqAsmBU1Q1rAJE3JHtfurxMAzGbo6BmDtxsfYZ",
  "key22": "3rvUv5ZpvcFLtpqGrRTcXXaFDeDquKYsAwMxLJoF1H3bgsxfDYGNM5TJF6hkaANePX7kpF6CPukP4ykwDqLgcUQ",
  "key23": "4tmrcoh2ejgMTgV7p1dDHKjKUhDFc9KGq12xMdRVmUH2W9U745iSpeLRJSLfGcXFwwXkcD5dtx8f6vjqUYzGVXfz",
  "key24": "D2ZZPBzqTjwxEknTu2CjcV1XABfKAXuwKxfZFcugfPAuHVeqy7mKxuKJq8ucLD44JVgDu2G24xhSyftuXKdG3uu",
  "key25": "4FBhzJd7uPrHmAaufnJsVCeYKfez6yw5W5w3VSftPVUEyMmTQWE11EFqVhBE5QaT5PXXEb8sUgpJCC4ZgsoFSUZ7",
  "key26": "8pkLFMjE48T5uuj5kScAkpxdKB4VeV5p3Zt6NmU3TCv9XeEDBJvL2zzedmPQN3ur6C41yuQ8BXL4z29rTbRaXuW",
  "key27": "4wPhg7HKYvFMqGHbBQuw6TeC587iFrV1dpTv5hXVPwJirLfNUVSJjp9q3rQvfMjaos1mSd3jeof6qXNhBKzJD6b2",
  "key28": "5AE17GqeKE8Kuo13rGDxpq9fBYpUBN2i88P636Mdst6hwW8FVPkurVBTG3m3zSbR7nQodLvTgw4Fjm4REvGi3qPN",
  "key29": "5ZYLrdw1X3v4akJJmVBUAfw2BFkYjUNXjZ7dQkHHunEYcMDnzmsS53L4qy35NVgwNH2hXvsxp7NmUonifNmDf59T",
  "key30": "N8tZprKompdXQuSaBwehkfRQssP1EMDqfWVCD9LTrmHYoAAyPcqrQKM1fXGuTL7gtdDsZWUx7jF7y4nXLa5N4Gj",
  "key31": "5MtaqkJf6jUXBCYDkRkHNhkAWaHsqGpYf91guXRTGiMxuGnCD45ht5cwxhotdcPsg1Q7Rif7WzRi7rYz2o3Ns828",
  "key32": "5ry641Se1EbQC7iBm5XG2Agap4JDniQSML3n7GZ1wDPKD3bjDBgu8ikfvXWbLZUqZkM2tbin1ZGsEGGVgSFtZuCq",
  "key33": "3KqK3iGcksWUZStmi6beRMovv9sB4N56AQVuYogFrnzFNq3mvFFwfCtsZi79L4HdikJpZ6P8o9pAq8Xf1qpSr6rY",
  "key34": "5ijggSm25XjKo8c5vDGLUGsa3n9P6EE9EmYyz6P5fhes8MkrqwxJ38Jc7XYnnDUvPyc9cYeqhJjFVzZizcUwQdo6",
  "key35": "5RUkfmNtdYjv6r8sTrJRVoM4Vq54NHkzdWbNvb9JckAirW3peQj2ZNZkLQDv29M16xCpquyKC4NZGdRfXqEQCMjq",
  "key36": "2WnvYGjpi77BHaCmJT8U9njyfdj7MHaidDh9QQF3cWYzRb8vZkuFazU9Xuow2qety3kysvLD8yg5jHeX7hxFmasm",
  "key37": "63ovQdYL2VJAFL8p9dZ8Ab8iUCen2Lv8c3LXwVUoGPtsK5XiNxhq31hunwHJ1XW1FqmbK3Ma97Q23bLabhQz6PdL",
  "key38": "4gnkmC4jkxazgoQoHN4BGz463qWAPWkTZ5svr6efM7aT6oYgSoZoKoBJ5jEZJGsxEkjpkTtEAqdC2aHkAeHowMef",
  "key39": "3DEMXWmGvNtU4tsuicZ5zPqs4hXS2HC9WgQGPWGFxFS5S5LiUgdgvCFTPa8qx9ERe6qM3sTJ8gWpE3bBrjkYdqkZ",
  "key40": "4tJgJ2A2bTsmFjEmtFfXwdnXFFNuHvLnAupBHVFEVq6vnDPNmHrRJtFyGLCpYo36xY1vhytyYNkXu1PFzsaVrhK9",
  "key41": "3gq9aNmetvecSCrcXvrPESFZEVu13twzDq4USh62g3px9zAJ5yqbLrAYxHez3Qev9Nub2wMwvyXpYzfCYp5j47nD",
  "key42": "3kiB4dgmuAzbDFrKPoqWKpzmm5hofPDpHe3SMVj87LB5HnRR1MUJJYVykBGKwpU9pRuqbLhbMpErM8LYMKAeUUeG",
  "key43": "7Vp2vQp4cbG8KyczHuSDmwoqjzgpBRCgTEn92z9AxnAVmkeGyp58N73CEydVVHs8fyATqnnWBMNSECPbdM6CGZM",
  "key44": "2n3oNox6KWoy6VYoTiEjdXJ9qSzoS82mTpX4xJTqvHJQGPJ1VGiZMkUdfkZBRky6Y2dTqSXXds4QmqTd4o4DaC4z",
  "key45": "3LwazPSZVLgTGxfnTrBgch5xeYFYE2oFcjsTumo1Zk3rYDXonaUtSEZXqF1sqpwCLr1MMyNY8d8KFNcwUEeXJi2P",
  "key46": "5dTLgsKjVa5ktrVdJEj8wrQmEkQ8FuHbcuvgiTDQghnMudUg7pVzD7iUqNNByD6YgpvDVyQfASyyZ2Cq6jmRJHs6",
  "key47": "2h2UW49kKbQBm7sF8HkcsRumTedLc6k8Ri86Qh96bHVQ8HDQU2h1oC5QcJPWWXjAYm9BTjuf47Rnuv5yg5aDsgn2",
  "key48": "3t6shFjMoWX5kPnkWYqKtoRHZNbR9uYeQVdUTgHfLY6BDKyT3Lto3dqQsmkxMA9Ud8ZUM2cDMGjjxM3J2smHmX2m"
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

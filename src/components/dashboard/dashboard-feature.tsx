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
    "5QibBZ4f4KbchoL77bJqetxsaTHQNSHEpjx7K1b2rHZnZ786St6piQjRF7gvRLVJtTz4CwdSDtPw9k9v2doSA9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59yaqTkiDdipMRKSRxyVVrubeVR9qiTxzaxzLZ7szQgtsMHrgw4bqoo6om4G97gKRSoTDYfZKnWHxeYR34wxAdQZ",
  "key1": "2u3GRGEJa2BYEWBqPMG2c9WgoU8Vp6kTdNbJKqHcEkUheTvaPPFbC5xGEfXpbfSeBeQAqUrKWWu9pioqohZJRv4z",
  "key2": "35Sx4LhcV5ads8XAhz8EppPFcmdrczaMNtiAd1dqEYfDfiruByfM5kivP3phDxiybfQ9FwFzdFYFcCvxKKcdVowh",
  "key3": "bThv4aCw3ANjrXgrYpNLNzaUMLXMFiApG9szAAAtyfMxN6NTX8d21dPwk8WmuujSGVems1CsDE1sAnfakTExaYg",
  "key4": "3gUuweAnCzGP5XzMqwY5FStgixmvsEzMebgp3sxSLo6r2Pp5CP9MRmTBtPCUKuSDSPxvH8achwdKN4bjWnZDouyo",
  "key5": "4hVyGbqMAzv7VMm2sJNaRhoPzCzAXWEPKe5eTKzq8Mb4wvdGWeJaKPdEX6kzKsPeEL1tBGfKA131Z2XjFivCQoiJ",
  "key6": "5ckqZBdj4TgB28ji2LtuSS37CwDYRyYGGStoDvSx8MYZDAzJxqkrKXsrtTdmiJefQaDjtGnDwFXv1e5p5dNmecHu",
  "key7": "2EUdnjtavdkzdtKsvE3KHUGqdBCK1UqbVWtT2mDFg1JXDSrcHBTdGBQ6ENkm2JP9kAXZoUieWaf3GVwDYSbCkgHh",
  "key8": "5ks4ekiufBnRtriNsRi9RbuhXV8BfUrdnQ7eynRHL1zqz4nivMP1Zfxpzqyd6SG7FLJXPMVV7xPqQ7WsQmM6P3Lf",
  "key9": "2JfPGAWcMf1sQSxASAPCiMtU1KpmdRBEKeLs5JM1wa5GEbnQTXq7KNd8RPcbBPgVeGtn9jQR6rhWkYdTG2yLMzLv",
  "key10": "4FFKN6jh8rNaR8tjSbdkLHkZxPC4oD7ekCYYmWxoAABZgPwzyamB9NwSccYzvKjumXmLcuwiv73v4AMXTqL9oDVM",
  "key11": "Azw8BzKqPPjZpCDUDM5r86PgfgTh3CLwqci19mhUiTqMFsvjr3gX3Ys36TFv9LXm9jc3KfZuSePmvrR2Kj4j8bj",
  "key12": "4G9H7TXYRh7nLKYpZdJmCXKeHH5uWcKnhxABP6DYzNsWWP55PAsh8eBbMpB7o4uPAzMVepfifctkyudPffHM1UG7",
  "key13": "orEDWGKiH6uPzFVPcQ9u4BQu7GBNiRStMAnCBvrmtk5DfRz8qbhFnw9z9zyjt2C15PUxKQFsn7oUXLqzghS1sHA",
  "key14": "2MvXbEJqJbUGTJQmcsBo9Js5WVfAHS8jpcL6SJKSJwrwwTa2Y8PRRBeD7r5o7WK3Jun1k9DBovoafesxNzSEwMUR",
  "key15": "7XNsH76SqMv1XPdn2o3rJ4SmdCwizcd1bTUXShpSviYb75TnE1YdSrkxQV2ccVgJ1j5DcbkqjpyJq9rmBBpBg9M",
  "key16": "2NfqhFyFdvF6SHq7Pm6rShJJFh4pUF1mbEYxQz6MAjM1LGMNXGgJTjEcqdim5RLdY9mvE1Pbah4N3bw1G7u7u5r7",
  "key17": "2cM9SyVE1eauJA1icCXEvGoWd3p92WxdsTDRT1LwWbHnkGiCj4J96joLN5cXiB9tPhrM7rgFosGHvKsjFKNNPVg4",
  "key18": "4n9DZZniZ1NfRQV3CjdT5dc3cCCfAwXXiKRSzQiuJ7vghANxycwuYbJb22uHvMvzfShKixRQ2nEfNUqqEJwGG1C4",
  "key19": "4oftuDqpfNPyPvdXwKWsUBmdu773GuELE7Nrn74M3NDpEedqnyvPqkEUEkBv6QfZJ7PwAYAqYMvaoA8DzJdW46ed",
  "key20": "5xy89XC2oGfrd2Se1rDL8RZCVGf1GCTkDzxAtaEky8o3Cf8fqn6Liizg3FhrX3mwo2bMgqSG92Wq5RMUmpiupm71",
  "key21": "2boDiwvKKa8Mz5pJhH84u77tuHF5kn84SPhbnDZS7rdYny9m8oKG6ZqjGp38hGdtAA81Lj1eQPk9NBfMVcsxdjgY",
  "key22": "5WH7TUipuwGDiysanHw4XY5tcnqDmdQaVkhQLG8tHVT9x41mRYN2gyR1D6UGHkxDaBASatmPMwHFJqXuVfargScM",
  "key23": "Xf86sVsbJXGQxfx6GfmdRMfZN5YS57FzCq5ktiU4GdwapiymKiMMi9k4AtC5vqgapjkmRBqcbR6XBExp7c9BJYN",
  "key24": "i6cPVhWcrgSJi5CG6aPQ7wpvmHSko3ayYRpurW3d3QFNvRL5mub4y7AmCDgKCH1kkDx3yTB5cmnYcbu4v6H1GQU",
  "key25": "3zbZmqkRFC9tMqcf6Ro6c6eYx2LFim6Fb6V2xXNWgFwBfRhgehWuUFCovCAWg33VsuDCspbB5b6EA7kDGaqy7SSe",
  "key26": "3cX83ExW6Ko8Uh7Y2dpoNXbRU2k9fv7LjvmE3c1rniBRYWtkqv8CZjnPvW5iKD5ZFD4muE6Vx4PFjtaK32v5eBeX",
  "key27": "61T5YHkycJdGNvTdpNduuKekDzMFSzCxfrj3TpvT2ZL549HbRrd7wVXdE729aufmVftd6NA9eMmLzJvVwxjqkoTd",
  "key28": "4YDGpyEMpvKqDjiYF2HrgGhcKst6KChXj6GDbLJQUDEzXdgGCWoWiMwAXP5YujPWYAT69MDxo1wdwHeVZBRLw3TE",
  "key29": "2GxYu3VPu8LHfXtW39AA1oAxSKiDCb7JFe5Zm7u2xhAZwCKPqcZaZagw5pvnnt5LK9EBpFW5utkj3SgiLPikvDDS",
  "key30": "5saAa54o42DQuhN7HQuYk8uXzCFsHhTyxkjiPSBieUX9tqf82ump2xQu3ok8ktuDkf1XJcUXpERkCoRf7NWn7LPm",
  "key31": "3i2o6pYvhoBWkoRD2o1o6RM5ePk4Bnbj4L17tEt47yAhy7AGc3YiGuwYbiw7y5Giur8nxRnzWmGQiK8wJvaCocHa",
  "key32": "4TpDLWx2n4neWiUudwJxDwxPthny2veVXfzftP8uLsbQLCTmpkMGdavYngqsQHvqK4xwxxJNfEf2g2FVYsVcZvrm",
  "key33": "375iuczoaC3EqJdocDaD4AvpBu2LsGRc4mYNP2Syb3MbH4R6r323vRuG19p46ttsXWaxMGsuecwfPAPqXRS2e7ro",
  "key34": "336C1gXdh4Kog3rNJuCPPLTgzUF1unyTDTD1MsRpJKQyaCLFp36PUiwWFdUBkfKKYP5XZ3VXVBSteAsjUHPE2ytv",
  "key35": "3KGxfRoGkn6Dz329Ahuq8xfod5aEYdDBQxhMUYPmzeJuKRRdA22gbxEcXb9HDm46m3pmrQMZJKxoapga5xNWZ7X",
  "key36": "gBckEmVWCRvmomRGdLVAaNwWpzd7c8QN4p7fYRNPhvmrSJLTGMpbeVneRZdHKvvA4VVRDa9sZAUJ2wHy2zYWfdR",
  "key37": "u7Jrc9nUM4YPoxdcH1kMa93T7rUNm4LxFwf5zNurm86SJXjE27mXCvJ9GqajPxATZpNFD6wXpDhZQf1VmpTRrgB",
  "key38": "53At2bkawzctDeeKcAcRAawuynyfF8uxHQnyAZcXfAd6XhrGMcwS2hcvnufCJXofKFWCPRzWiWU6c9rFb4wHHQJ6",
  "key39": "a4urV2zC7si8smwjryhJLVKN4jQ8S385gsvupQN9PvDTcAULWoSahLtrh7bcfVKn2QzSfotdsJBg9sxsAkx1qxW",
  "key40": "RaHz1jZiHcz9TWeHXPjodmfYvSut1EBKhazYRM3W3iQxien7wkd7sxuqEpdMZ9YCnf66j8iri5TbiuSzQ1UeNiA",
  "key41": "4MvFDTPdZyWpmb8y4asByQ7YRKVZJ48o2GDVHchnMBoWFJHGsy9eFZajkjfM6xGES34EgsVBkMu6EF2BoU36sb6d",
  "key42": "7VbJWKjAA8fERkjCA2Aha7NcjUDeJGP9xxY9VxDZJqTZpFNNPR29kvaqpuCScaDwFQt98ezncnXyeKTF1gkV1Rz",
  "key43": "3q95H5cDVPepYnUBFEsAMUZHFUUYMXU5vgeGXBVGkLuCDGK7UTSxoFFMHqM5w3pvJ7YD3r8X8oj7U6DTBEB9sBhp"
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

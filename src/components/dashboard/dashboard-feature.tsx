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
    "2d6YmhGxkizfTAsF55z2GcnMc2MLnJUgmwxddNmKDoJdH34bdpcEFH82YSJQ4Uj2uobEQPaSYgc9KZ2a9daBwu4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aShiVVGR4HFStKoL8QqdrXJLrKk6DbTz8PwfoDGyp5FMibJtQUDG2GdhKF17LCFetw572tXhsLhvBHBsUKrJLuu",
  "key1": "27XsuMpHmh4FmwK7Wg2XvgSzVy2gVpub9Dj6U3XdGZhTjSSYacWbBE6HyESXBfeViEzzmfX1ffnrSpWwvQvhfMP7",
  "key2": "5niYUYeuc9fZ6XmAsfK4DhL5EmkrsgHzZa7qcBDF1Tu79KPMqHBUy3WKBoV8veiUGRoD4vz69CZ3BAkNGSXoDUjE",
  "key3": "45sTY2wGhFxfGU8YQxYHb5wiskVBfeGpLkutWSeX62TgeLVzYAZGCChKWK1TtVjTk9Db5aJrCiJ5f6t4r1Q7CU1J",
  "key4": "3keCtr3NpQPo2vPz8r9n721zz473nD1myatXKJbyANJLitgPEWxX5CBvMex1FyVP5s8MpMYfpdZn9141ZDjso7BA",
  "key5": "3EoMnxs84YGjnixTokRbyHhYtR5cT4jVnsTkQspdH4674hvgumx5rh8CB6qmS7QGBk2PXvoS34R9Gn1kv8zNER7G",
  "key6": "wsBNJA87sTSVGFwn4sXEDwJ7Bf9cTxqfzVfog3UxzNXDaQSG8ZgbfmfjvqY45Byq5gb1VzampLGp3yKVmJSJGVU",
  "key7": "4DZmwGfg5cVbBgJQ7rnSiAQ8YF2kzPB2bqj63JecRtAhL2dcNXgzxUoFHzE7PHVKupdJp5Y83drGCjAmCF33VPFH",
  "key8": "3xxG6TQiy6pqCRmiQK3iz1mRhEfsg1Ukj4MvxAePkydguf5y3zf7bD1AXgjJdh7CfEe7WGdPkAPwcvSGqUWHfXgr",
  "key9": "5sJBWuTsAhyCyEJbTcd7cav4XKUXosZHepS3CZV8wwxtXCdigqdAzBWVryRjnChcbWmVq827Tm8meTHuLjGzFBEm",
  "key10": "5aycYDH7VsxkMUjrmHfkY5g1GbHmT4jyXhdCCjnfigBWc2ht8hUnvuzVqDhshFpyGkNC1KGrg7yt4ik4VrRNqdTg",
  "key11": "2zr4gyMUVKtyB6kye77Erg6dvmXCJFq57AmMsPvc6iDWDzsX7DzRaiyDTespierZVoEeHyxp5M9hAiYrkF4SSNd",
  "key12": "3MNLi214bm33BXSiLLVAdN5hJ8eJDTdTeJW7m3girvTRcCh1j2hEcNAH4Gp26M56sGjPEngmp3VMjDncAD2joABk",
  "key13": "MEgLAjK6YaTdaqmHxKuK8qURmthTL1jYapXS6976LELLzn6ExoamvbFp1SFgtbn9eJbsY3wh96Kdo5XEXjDshRW",
  "key14": "5NSogRj4vwYH3JTEYagtXe4NoEHUd7XWp3tWyZmYRHSZ9j9t9SmsPLSHApnpiKjhYHtdrVjDhdwTKEDTFhi74jWM",
  "key15": "2R7CsMVvTbhEHbAgDSFWJv1LSWa7W3HEsHiX6Es7eKrqzh6P7JvGDFtcxT72czVzZdJ7ErFy8ZDudKq9X6arjkyJ",
  "key16": "4v4yw2gCagrDeeoHwDmAWcwsh6xXd7znYVbsVmgcr6aKsRy2q5usrrwXAb9rudn71BzDDPorri97pGxNPMrwENKz",
  "key17": "3aYgRwAmZZi5PswKfMumdLTYpELZXyiZmMva97h7Xoi34zMv3k17YXXECo4EeF3sjs7F3WGqpzLu8Wyq29tM8fjS",
  "key18": "NAWGXLACHicWd6ggDr1q5m5RZDPNhpKieZmjNR1WKp8zdkrpmGJqBdWUcUL1RMsFqcTTjmWFAFkbT4M2TSXarok",
  "key19": "4ykVgE8WfKMv3iPV8AenYiQ55eAFr5kSSi8Q1jcKTeWjS4gc4HRsnEVT1GJ1rYC5MqABXtp8SzatsuoaGrbrA6sQ",
  "key20": "3rkQYEBg1tCBqG5RaHtkahA8yNdgCRLkCBL4pG71Ns34XoiptvvAfUREek5D6HSMha19mjnRYMR4PhuHx46BJ59H",
  "key21": "46hnaL2e3WQqveWSeN9gYSJsr6XpKy8piQZSmo5WxHWtAhne7d6GHR8seqhS9eg2x9XawcBZGDrFcf53nucSBKXx",
  "key22": "4ge3mD2Pjhgo8aZHCNsPu1HNWS4vEMN7d7EkHyTMY9BWt8fUbPCwumyq1pwZUgYasJMmszghaKxiUKatrBYmkyoG",
  "key23": "57UyFRHZzsbB7yv1XKfD2zJgzmxkSgU4op753tWBAhPNARWQULswVJBRYU4NFPbuL7izfhGoFxeB3f8n1nyfaaxN",
  "key24": "4E65tWX8vedprCTfKTQzXoLhXbAxuqiaChgcEGvdNGYLoybSCT3Bj6hfESvHa9eJqQbNKWxbwWizvTKBfviChCam",
  "key25": "2ecJPFJJnxd3VvWyzMXqd7ZxusdHGgjzpKoBY1GALr466s2v8zfjAGXwnVtmAWGu4CbmRbE7N3HK1mBUXZiQurZu",
  "key26": "tEpYupZQdx7Kz1dVgywWbdpP79SSayu7SBJu5KzqarQbokzVPu8JQFKbPN3CUsoTAoBYH25EsTXPRVdeo1R4kSn",
  "key27": "4Vt7VnyUCBgsPwFjidAYvXFY1uuM6yZcREsPCMcbv9t4goRa4Pza9odjoqgymtp8xupPT7asnfo7zjFWJA2AKm4z",
  "key28": "43APsaTR4cbM1ssQhyfSYFceFci3CxCfMR4iVJs8GnrMBXLZ5tSxehJXTysDPLhqNMefmoWHv78Keh4n2RnduKgh",
  "key29": "3W2tNbYaHq1dY3CK5so19uAizTEwMkbT6EHi2ZqSqURw8Wru8V45zJ6bFtR2cWGRwdzaMAXJnGi8GVE9SnaL6yos",
  "key30": "2PHDB7HJs2xnsfggfYDujN2jRQZbQc7NVwYsb7HEE7s95JqMyjvDwoLukZLi3pFNwfzTC3wRK5pdXNXegwcU3ihW",
  "key31": "2JdnNWt8ELTyxJrHentjRS4Ggs9EJ6UhTZAcLAZfetRHds4zPvhbhYWCfqKWpFHDhTE7vG9S2MYESFTPH4VDvVVw",
  "key32": "5y1fvtHTYbJhsmpaFK8tGpwBhsL7k328xabtGqiXtBnGCU63fyqfov7m69QzRgjZy66owAYk4qBY5proXwdfnaHt",
  "key33": "5HxpswDoJprXEUqQHUBWgUbEFSahb2JnpdLynyANWqRfWBMY4sxigVwRvb7BY8Kk78wrcxyGbnt9yxZMBmZpjKSL",
  "key34": "3uZe53Vg4e5WFM4Pxe7tBidBKSwQ9hpesSgppthh7nyi3QsoqSpNKyeCPdDyNifH43NwRcQUxZefLE7jQPKd2gEg",
  "key35": "5HF2DhfVqJvoqqLENVXACctoJXCzKUW6r4XQbdyhJirMoErer25yDGsQi3jk4NaCYsjYx2pWdZ63SeaVNL2dpvdF",
  "key36": "2s8esZWkTTcDL8eBdFbBErQKdDsAaa4DiLiiAZJ5P29i7ebKstZXFAfMZZ9vWWrH63qb6e7hQFmBGh93emCFwm89",
  "key37": "2Q4Mruk2UztByczbqsfc2aa1PXjhtQyearTMPUpwrJqgDYpR5mat6BnAjuAWjxsDpAik2drHsFpRpDkD4v9euZLi",
  "key38": "jaQmJtZBts9iWofXc8BjHjs3qvoCdoUGJVmy3zWfHt1Y1wdRAsFmUQt8MnKQCry7nbhgcis4pwwV7pqVBMQVfKg",
  "key39": "4uEJyVKLeKUH5vWUWHdZ3Qyd1UyLqj1QsQA8nZEvUEu4hXTA82AB5UbWafrvhGkgNTaExKKd2hxd826THPYZCdpp",
  "key40": "2A3PyM7xTSi5vHUbYn2StyjjHYN1QeoT6vjHJR25zQQEcwnA4Jjj5rgnFYMmJGR6rSBe3acS7V1rx635s6H538mu",
  "key41": "2b1bfbhdNYgH5D3tcQXdApaMQqjyPggDd9Ys2HU25sfzQuZ4Cutqa77C4p8BQRBAjjBvmRrEZvnVCWAqndmxjCPu",
  "key42": "38kahxwVMt37JWB2y2syqVmiu5hqago5hLwyBs1p8wLUdXzVDfgFCH287DDNst92RevZACeArfCHBiLxt3d4BJxR",
  "key43": "4aiuLeApPNDqSqLTXiQYDhagBYqwUrTYpoecv5MXY7r7xcwU8uV5g7r2bzDVTZaTm7Br6Dyp2mL6bmrMD18bGA67",
  "key44": "4FsijzEz6QhfNEGwWXKpEp53iiMMrJvCaqZ2Cb6tvrWntENP68VviiVksNheJViNpEyzUnQ6aQup7D9wc5r9wQCg",
  "key45": "dDo4GXqJukH8CTgoVLoubifN17U7RWy8MyfqKKZYvf71EnTacWS6FcuxLiTyWcJtpP56dnncftzbyhCBxq3ce4U",
  "key46": "5jtGggGEXeLV3LscFin5JfeBm6dBQAk3BciVv3XZHVqEFY2iXzTwDCyXDKexjjiQ95caseFhjsToQ9df4Ts5TSu",
  "key47": "5n1yV2V5edpWjRPy3na5KzRX95L8VWQC3YcCH7ZopJg6YhhhhQYvnF3padGaKkx5cJNzFVKfNUnBybYnc1n38wfV",
  "key48": "5ZeAgGggoKnJcMtZceaanz5YDebC6SjjEbEsCPL5buDjSnyjCwC3P2ya4BKWen7ktrSk2x6m5nxJTToUrGMGjSj8"
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

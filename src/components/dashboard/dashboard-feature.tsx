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
    "4d2ZopzEpMEiqGdYeZJstoyG4HyoZP3GCUt1VSDoPG2UeSBUgVRAvCQrYpFU3XuYJQWKBup4Mj4hLByoH5QNvyp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tGiMu6p13adpFH33s1HeSufaM92vnb3tAzswUk9FnMSFwd5wEVHLeFvhpZbvqcevgbN7yzgE8yyc8ofvDdyRA9B",
  "key1": "4QVoVgY59WExaNZM15tLYfegqCbFfrMDjXSfKEGjaNTi5opkGxbsumKWWytfczjdB3rxwV8JhaLxyo7gJLk6st5H",
  "key2": "VZedrKXDHfrXo556j8s6Pf2ZsGrMcsNGtC9PsHZY5yiPhJBeqAkhvgRhXvZcFVY1MdeD6vNCsqfjMv5VbRMtRzu",
  "key3": "3Wn1noZw9VfnEJ9ZSEULnQddmv3RoEh2H2J6d7oUHzEaD5HHeyWdLaHUwGfmundTqK5HE1bLiK4UKLjQq5Nya2Kn",
  "key4": "2HJyFhXDJ23YQDMEHQVeg8r7MaFtPQCmRFDCQ5fcsKxJbEfrsN9FBdSwCLeMcj85yqws69ucU4zhcFrBmWTE1qmo",
  "key5": "3NSPE9T5WEFhfYVTjfVHd7K2SNcbz5eDHwbwUVoGfxkBPetmF9NxRa7RCsy4N8aTyugPurSN9R6u45zQRQbCJWVT",
  "key6": "3s389V5FJYXxhsEXWcS8115C7hAywv9cearcmYEvGMmsNExMeJG1XTYmZ5aDKWiEgT4UKhxmnC9bzpuoF3hTjivu",
  "key7": "Y9ytnybhJKRzqBJEbEh1omJzA8USNbGAyFvHMaSpLHUJrxfpo12d1NxX7WjQk1upUwgj9EUtYL3ByLVUxaiRXYP",
  "key8": "4vEmjh89K64hwQZqCoN7WewmvA9zRMcm5oRsqqAUCDeywvZWpEKznjet8vAqyTWfAAJHmn9CFdv3RZmYrNrmsNUG",
  "key9": "3syok25DCrhunp16KHVP4PMSZHj2yDbRGakhnaeb3R3gfwXngXTTkC7aaVahogypPzPKU1EqGzh2GPMrXroEjyrj",
  "key10": "3UDehy5griyNAG85BURiUgrFT1rygPndrR2deAuHoTKo83aAkfDuf5ysXzvd3ZXKfWw8TgPoSthDv1aEgkfU8q4S",
  "key11": "2jy7m86u5u2A6qhZzxW9TpmbRN1cmRWWfiuHZWihWEoYSpPvEd38AvJLgbQ5msZZMaaNrcXxLh4viZGHvHMuqN4h",
  "key12": "5pWXuGaVtXS8WU6su4z69yWwaBXChg4HnCs2mzBoPG1aaYnKmLEFXCEYgxSNZrCvQQezUFU61Uv7MXNU2KyX8CCz",
  "key13": "4mYKGivX3PBVrKwZnTTamd7jBtskLDT5pBb78Gv2HDBmakHnoDFHX2i2J7kpQci6cr1Z5sdFiCTcpvA9UcW8kQzL",
  "key14": "2kGxd83pViKhH7Z8c6HGBa97SvRGmKtrMSaAM26DHf9RgSMeZadFPK46j3go47bZb4qGdFS3CHJiQJDhTMSSeLsE",
  "key15": "kbmPMZFVFz6jrPGo21jaFMLq4znCWJMbZoEJgsgFPhbBZafzxXg6SknDLW7i5KsS1c4cz6UDa4EAVDZvttR7EWS",
  "key16": "jetaR87Z4fWkKx1mKHJjts33dtKFbKi9rTDD7ZN8wrN1uCb97ApVJaq7vraDoSRd5tvQFe322TspM2c7Zg1Mgqi",
  "key17": "nXBoWbj3xhwNg9FtjA6TQHVoY32hSdQoAdZd3qVWL34jSAT7rDNBqi32wtekcNX1tYd5YqfrvQAn548ysinQfnC",
  "key18": "4HiGZRQx3sVBaBv1663mrVuG9GMwbt9MhTgwvLTyQyVxHs2u3YRDZ6z3HFz1H1dVsKJxKDNMiWMaQM5huY5SLonM",
  "key19": "3fZKawhyFWHu6X8ZdiNf26isHUKYBjLZH7Q6vfGogfA76vtd5LLhAN42WvUyegHQBE9mwfU76jyB1D92YBxk7n8L",
  "key20": "AVnApmCAqNDpXNPoNeeeUuFSW6FY6997c6aPY5K8Z2LuziKi5j31ZTfWczrAoapb1Cpk6P7bpAeqPqQRbC7nP9i",
  "key21": "4rFPchCCXcZo1yxELfYfZ85LFgPNqvsCgFzDAyQHTDzbWUTqy2QZ4A9HgWPzWPuRYiszfTormT7PoGSrPaU8erUH",
  "key22": "5czkHi3gB3w1kM8MoQAMyhQdTs5GR4U6nyYszrYe6tPR73muUuKqNeGtiQtcmU7XEJTyUC5Z1cbVX1qikeqVKJa8",
  "key23": "2kybsFjY6fyoXA6UsZaQqrcpiaEoz48TkWRNxQcUZZtM7nBjmF2yGhHDoqp5g2gcEMCVsQYDhg3RdmVFvybX2eHB",
  "key24": "KBdNFqxnR64jvkAjU7Ak5mPoxgzVC2B6FSrMq9dT5fZRE2C2fhiviLRVUpbJLTWzFpJ5Ax6FG86oVVn9EKbkisP",
  "key25": "Ry7GgRXo2vycL58snaJBSdZ6jX6jJibeVGQ2TUqQADBGdxohhWJi7GHnsVa8n9Cq3fXHp6g1dXRCYKWRNx89GAZ",
  "key26": "4Dw6KK1tCYih37rHnfqYUXHgSWbzma93ezwz1ZatHW39S7giGHwqs1CqGRzX4Tm8yq86px3HS3MncWTbAsJAWZbR",
  "key27": "2ZbGga7NPyiXkQPHtEqHPdefpn9xQnxUud2ivPkj6juMXyT4ddfcZtEbfA3PeyiyVztFRvC6AmuafKyqEPfad6wD",
  "key28": "9WYfsLStYLRooqm7Fb6xKUikSSemXD7uBVnGqNfr9ELtKkwFZ4HZXAKYvt17c1g6mrt3FPmQRpCJrtBGb8DZT3b",
  "key29": "4MCbC9AECdgscgw2TuLLD6BgNw6B1ttKZ5GGPq8Yag92CPDHwAo5JNTKGKHtU8dXF74m2LtuyUd9roW8fSePQKEg",
  "key30": "4Wk1Ejf1cpJujXmKCkGt3LqDSe7uiyKqq6AtkLmAt5uU9fHG59BriPVgrDaEampQ31FkeFW1Xyzv5Ec6d69Y2NhZ",
  "key31": "5n2bBhKGGuNwU6ovKvDr2x5xGvK7kZWxnXCuGznZ9dkmjr7KgiQcxmZthoNdfWpoGaf6g1wRzeA8o3tSq9LUdkac",
  "key32": "28d4FekjnhSZMiJS2R6aYMyXpkNpYxvhfRe9Z84gtS5vnBPC3wJYM331JJjdvBQehyMoVwGTuze4SG8BEj8r1BRe",
  "key33": "5JP6g6rRMEVvbsE2RkHTmswJ922VCpqFsSPBbAVV8ohTMbx5Gw8McMbjSUc7qFhWhVr8cncWJgBZTc3Cmw16xBmr",
  "key34": "2LhUiQri32swPwM7fcrhZKMqD9mm7pcKEdBikFLNkHhgjMYJSSU7wmHJuJcYjxRMC3wLr6mJ8Cdd9u4UPzA8YdCu",
  "key35": "oRwhFBAH3iUphaNBuRcu44cL4waPxong8RaQiMC36rqThnQpczfM7H6rWfhCtJskSECcfRuXa7pC11eUA76FKb5",
  "key36": "5WDdsVaXPxMAzVpMN1FnRrd6oDY35JSzFongtx6zqUp4VrtnNRhE4wZfaq7vo9nBAK6AbiiqWRBNgQTHFAryMsq6",
  "key37": "3WfoCy7J5EwsWeSVmrKK5gr6wmk6fWRE3QrG8ZR2dzJz3thSjwLJKcbzftcf3ZzztuC2SADKcqaTZdcQmxoMTF5Q",
  "key38": "2nBKwpJ4dSVWtYu5Ybfk2ZvrpNiJC2VjmvgyApQNTPTaMja1JWVHWnCxRhy9nLmEFrGQNbYGDaX61d731gDTWaop",
  "key39": "2pvKtCpUZUUoxvFmjH63FEDdP9mCfFAaLNPxeTFxDecG6rpF4CG7nF4HPCYaGu5KSm7W2FMKWCEmrCSc4tZoVBdd",
  "key40": "Fao9dWufDWZy19TCL4k4whrJsTwTrDYDWeAFosa6wGbbuqxucdWgDWJeWTYAotEiARPPKiSkBuMzKAjDr4J1yhB",
  "key41": "2tnKaS5H4SqL77zZQNpHUrZFZQ727cEeKRdN6RxsKVmnRQPjiRiuabv3LM2J7EeU8AUQGTSpxxHe7yrSJmEyNpyG",
  "key42": "ALFuV2QmcGR9mLQypnzPkMJL6Airiaif4YgU169X5ioMNqyXguvyAXFfSv5FpPzZAJDD9beqNoJC5C71fWikLXX",
  "key43": "5YFM8WGi2aswYS5J5QPb4VCHKjsMtC1FUHgUFYs7HUGwTHHvrQxT1ArrgHZgcyrEftQkJEsc1Fgkx1E78cg2A1mb",
  "key44": "2JwmowFRbeVcdMEnWWwmEDq6dQsZQ65kPzMTbisG57ggvJTN3AuH6D6M4CaJp9uosYpsdM6htwBeLRX1XjhPruH",
  "key45": "t9amReGvfDGJoYkLm9oky14xfn5JVy8fJB2pD42pF1FXcfhDK3NfsrQ6QvUUZS44WzNQAZSy4ZixdW3uVL5u49r",
  "key46": "4bMcc7vRUj73bL4ZM8RfQBr1wsQBAp59hH6v2Nr3m7TVDJLqDsicQXTnhCrPFpJQUVMGSwzaKdVSehiFwMW4R1j2"
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

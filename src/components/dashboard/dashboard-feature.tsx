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
    "4H85RDd1exybrFAYeSCEdNKKKXk2CKYYPL8bZtDBGS8NMMVTZ6PUA2JqNo1u3VyxJi7BpwJUWQKgHKCEbuhPEaLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JSj9YnwuZ61SguXmpm9Mju1hmfmANXpY3T8WtkPkRi7BfzgeBFQ7s3gE16ASBWF8vuAH2qSsdykc5N6DCT1L5b",
  "key1": "4YuLJEAG4MmZkSDoiJXCiEVuWXdueP2oWCeEBNZc1DCVuGg151ye23YxuuU11UPPZ2Z1GYm8xHrnJwVDogCMe1iQ",
  "key2": "5jdgwa55PgZcwqd2z4CYGv1pYhpNcigdSsCXGDaMXDKQJFhQtrV21cLXVefLF2LBHkG5vxwBocHhPw8vPrKTAcfD",
  "key3": "49LpZ4nA8zuAfjUsQ373koH8zjYav3oGgcuRfpi2FY1DJcJV9h65XnwsX9X78bo1ycBpjXBihKTR8ubNJXJfbRN7",
  "key4": "4BBKVDFFobJQmZ3AVjeBwug6PKgD5HxUyWRBBFa32rcdSymF87tT3TgvSPJRdrk4WMPMYWYH73Pz9n5ek4jzWuww",
  "key5": "4WE4yNC27LjsC58xJEXoFPUMYKgx61LhxquGNRZduQgT7d6Hpc9p5o9b4HnQYekeu4NaXgvtpejFQh6gyyoFSaJb",
  "key6": "3goAP5jfn4RckDPzsyPDdnayPm6cQ2FXpnwH834wjBUbaFqniB96C4hB8ogtRKyc4k7SiULFoBa2242kUS9PhSZj",
  "key7": "24fzBiPmLGup2wkbDVVhP8mFuZLiv9hn3Z1Y8UGQ8swjExVxG2RCdvKgZe3uDUKdYFGWGGZMHA8a1XeAva5Lw8z4",
  "key8": "dRxTkUe2ewmC2bu9B2gK2F8q7Q9cQp6BSrALFaoJRrQF7rXJtE8ATshyc5NEpS67Yds11XVEqhv3ug63KSzukHo",
  "key9": "2YoY11V2yZkeXg8Mwnpii2kMY9RH4oAJfd3jq4uunjMRmPoF1DEyeqsEEUMMAK1v7HcE6zGinPLz3iqPvHKx5avU",
  "key10": "5EvPd7bsznxcZNCT1yTUVHgmqLH26h59yLwmAAfwYTH9PfRwbfpi2xt6Hz6VpKYRqGeDQdQsPs1XrxNek7Tx7fhB",
  "key11": "59K82FdiNtLjCutsx6MQXAKp3sdMiEXswQadxELv4vLNgjk85gEgXvZnLy9UJdS3pMkzC3smrJ7uS4VJLG7212NW",
  "key12": "3ZoGmswizmNJxZa39gpDaoJtPFwx6nTPTyGWJwa7969FqF9eCWty2GigGzao61acJH2ayh1XM32MtagiGbejngNQ",
  "key13": "61hDZPbTrwNhh86zLyKbp1YQpa9mG2ZPdJ394p8mj9pbKeKHqJQV3HebRRqJHsRF4eeN2FWqKuXjtKeJi24xk3LV",
  "key14": "2x4oGW3bewK54RTiZSBUYKtmak7uLbg6JMSokuKZn1iZD4wDB27paDFLXeguKHCVKGkweUHKwnPB9q5Q5phtXKP4",
  "key15": "4sYZFUm9F1vR5WSEFvWNm59UoGTXBnafjQ6iCjzZ2iaysu5JWZgHsdCkZ4L4Frqpv7dAMaHzEqn2xEa49TVSZMzL",
  "key16": "2vaR7KcQdCBHewoXwSTwRuUWCtdnqBiLpF2t7e3Y7FRZnfWuJavrkuAH5kRFHZVmy1PXtuqVx7BTxgZiHME1VpWH",
  "key17": "2osiduPHNAZfGzzUXpidrz5jcAoB4HmtsqeSpHRm9vupeijoQ9dbSrNhxZUd14kJS8KkSRsgvnRXAAQZ6EVXAmHm",
  "key18": "2bygWWMrRXSLgAEn6bG9WvmcAxR6udpR4RetQezM6VgENM9Bbn7N5FLJJDw4emPheawJus8opvjq9941eJigJ3Ei",
  "key19": "2zdbS9oYNC7GFiDzjBvwxJp4WgQYTJz2Lqfj1MAATxnX8KsYx75p5pj6jHwpwHpGbBPPUMnbNigpP9FCP1VqDhdY",
  "key20": "5mD1kiEqmBUD2U8NNJFbLuF868ZkVg9WET7h8xU234PwEoWZdYg8SsR7cyoJibjWAbKqwfYdeYooGMTAmEYhAxuv",
  "key21": "2bprLyQJndfzSZA3225ajWYFQNrXetRY2kXnomkTyFFoc4gkeHMgGe4Qqajt81yJfhvoFj46jwXdf4N9WfuVhY5k",
  "key22": "4ScHUyybhfaCak5JvSUQGVNuytLSbUE1ThcwemVMk4uTq1bdfz1Dys1jgy2kEqD9bPVNGJ4XfaM4hLwAZSBiD6sC",
  "key23": "5BpvXetk138Hya9petnEnynpW7NxyXYr9HUPzffyW4JVXHLef1iE8PLN1NACWraZsbMTtPNa5pSFnXNxbJnMHni3",
  "key24": "yvDmGEj7RMuaHPSBjxA7zZL6YCPP2U7qzdfxaNusFr4ktHfZsy7a5kq8MYGfvnWpo47nHcMM9ncY4DoZGJCXrw6",
  "key25": "4R7NbvgyeWp1u4zM8vnnCTrcofafC26b2w7zo7VQeRZJcDnNzqM83BfMNx9ATedNcYLa879XX5a5mTij7S2kNuHq",
  "key26": "K7HX7bmkamRDEYzdWupvwfsYjvE8JcML7ncGZACHgJGTzgWh47YsJFN1SXGJwhbKpGdvzwJMgXcjcT2KNcKu9RG",
  "key27": "4CWfno9HJQNQdC3EuKd3Qu3jK1Bia2E3tg1WaLbUg3GCR7w8DmC3NyAYQ4y3NtPFnFsWjpCpWj7qPc9y2E1o7A6k",
  "key28": "3c9xpYYc3WrM3jU71LVNzaxk5DdvNHTKUhZQJHM7EbuNWEePXaTLjUn21PxdwUgaTZvPro1iv4N1ewzEdCV1LA14"
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

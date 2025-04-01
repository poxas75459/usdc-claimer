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
    "iscn1akRYSnVmz2JXinA6xuVRDyTqAr8UJAJrxsKtwfXixzyXTry4nAzv1UhV4aZyEzr2VEoATCYgVo98y84niJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Axfw7782muPhy9MhPDvLLxHMYNvi4w5QzBpzmNMADmoM2YGEEvNtBZkffFHTz47gUvUE8pgkL4GaNBy2VM1hvig",
  "key1": "2j2deeGENisT3hp6qLsuTWgrHLKnGA5QJRWjmLiA68AdbpVFya6894vah8VVRbeXeWkt9bCEkVLZjnGBkgzVzWL3",
  "key2": "2wBtgA8HUD3QBigf4iksxdnAYswWV4wEE4YWq2MNR9qMDCCBbLih682RWFPzY5k6toGWmhPm8ZJwkKWPGV9uPS69",
  "key3": "2AGRq2Wv97MJQauzxCCxyymQLdFRX7N5SHh5zcw63iP1kGNoUfeXMNFa8yABE9oTMf6cDBPiwQGwmdnb3Yj4c8fs",
  "key4": "R4cU8yUrGqUCAG1siorVMCysYwLCV3yo57X4NT2C5cb3CeseT2SjFK6zFBDxJxAeH3Dd7vF2Dec2HaKMkRTmS3s",
  "key5": "4foy7cdkPFvBxChH8AXedxNaAZVN7Gaveihms2dA4ywYWvVeWBoSgfwA31cfHzhUixZjxPFma6ncgqur1hw1kBbG",
  "key6": "4cyxXA1h8UiiQDoMAngziX43vAGrBpDiUPT4f2T1q6HvYpjQAvFzYHTvfrmvgqLan9mmX5ERoBCBapr313eJ1Bgp",
  "key7": "3JnP7PkZGAeHKj7nixnh3pFETZ483EEMCPzWD9fVz1zzVsMSkJjyvfXTVSugdUazBsVCr4NJGQjJ93XjTbxZe784",
  "key8": "4c1F8MpZUGybrw2BXmtJf2dCSZc8LKNddRF18eq1n9ESjzJksU7psTgc5ZuwuSyuwr9qLnMw7SzmDyP8FHsMEcjY",
  "key9": "3MqgHgRejwgJTX9A9imr48Pt2tbcTfs1PeHcorMtQmYiKmSnbYxnDeRaTFArc24mkHjCinnoEz8sd6J9Atd2asDr",
  "key10": "4hQoedNNz2gvZk22uiLgDeu82gnzv3PqMuANujWYEHerhAcPkjhF41pjTdTEVaJ4YgLPfDeiatfaFudQqT4SgxPe",
  "key11": "3cRBpDvXzcSFNiDyXiiUFMzCg7phBdvHK723DkgiQwfs8H5Jg5wVuon1uXkCffKxjx5DtfiFPs1UjTrYdyktExQV",
  "key12": "csXdPTxiyDg3MuhobLgFpUqooS7oZB8hBRuEjafeGPM3MPcnrAFyRB4rs4rDEu8Y8qhjwQw1eMNg9nzXwqebgvK",
  "key13": "3SXjAMfsUYfQtDTAmcWSTDB5aXTN1PUJjz2qDDecmiJYF9pPqb9cuKED4Zr39eHe3NX1hcgM7RPj7qFyeCoCCswD",
  "key14": "4mAgm8Ui6u5ceq7V1YgAXsJzW9T1C4XmpA7CbkPSYBH69WtCjT6vNw6V9GbwVfheCY1rSGVwgxwhUW9KZcga7VBC",
  "key15": "3byCxGsah9rhi3dQt5S32D1frciiTAMK3aTWV8AeTsrLcpj2QJxrAZFHYr7Ca4RB2C7mcUpKhBz7KUnznLufGwk8",
  "key16": "4euChVHQ8oHqiqPHu2v6H4X7BPrm6UdST6A5LjHNJAYPv1fhDYmjgbvmtdXUnD6y86NNW9xUdQexBAcQxoQMqt2",
  "key17": "2Lp4yjfZnoV8SgqVqjQNDNxs17RsbDUU7hGsU2o2FmNseB5BZHr1mwp2yTWLEqZTFWrPEHv4nL8pUoE72T7dhA3t",
  "key18": "3CSD48XL1EWZhdyWL3MfdFeK5MrJvLnxjboK8EFiiuUeoXdeyfwwNmJVoJH46KaLMi2Y3CxLKsghoCkWZJQNL8ax",
  "key19": "dyaJZ7H7A6kBmZWNf8WBegVx5SK52Pm21N48bLLcvhMwAx1gDLidhAkfkM68adRsAsHi58pUVREjQNpFpeBaD2J",
  "key20": "35k5V6dAT9zaJLV3CLFtSiWS7UueXFD7yWsMd18orKgbruj2HY2smKvVCJcLxp5rwvGaqrPjUTcfdJThXhmvjaWw",
  "key21": "453t7JY3pz4LzDfaAGFLYtrbJDUPp3XZBa9s6qDvY9V3xHsjNh2Q79iMj687yXZUnvvhRZ1wSx2ESKrBXY49kmZG",
  "key22": "5RCcJm6UoFHzVCkNPHm1wPrxaybWeuiQWy12puQxPSDdHbAyhzWGnJsUTJKHXF2mdoMDAmmsG9HTRW4eTxuxPfs9",
  "key23": "36MQkWsnmR1z3ECuaojPmXUk46RfUe3itC2UVUwDS3krKxNZMRY7G7trFWYdCNDw5vKoQwQUAMC61LzCcpa9UjaE",
  "key24": "4c35YwaZSTKcUeNCBFy4ma2q77CboK4TxDfACHGrfuemywiwrbcb4ZcCkjCDzX3nXWEoJLypCh6UKkGuhcN3ALao",
  "key25": "ithFKxyHzMk7gvRgMGzFvb7kBuve7sViJqR2QBaAPRFptykn3nBahfi2QVsNH49ewiuAYD9xb6GChwtGUBLoSLD",
  "key26": "4Lds4b7kaTMwKbBtLjyQFFa8bKbotmS86jHKFrZXJEyRShhbuzJpj69PuERTnQtkLeNcuTyf59mugm2QaUMqP6Dp",
  "key27": "gpUnwm6HkNwwzeWjfVZzhLMy5cpPhFReXvNh8FLV2BG7iMZdZKyVFKU21jYCa4nR4WNGiEyYteU5tB4b7hvb7xr",
  "key28": "Nriq6wGSqccJPdNkt7542r5Wd97aDhuXrBTHXYXCU9qmuNU9AupN9MrJnBeehM6ZuzB92LmGTaq8zt2X9rf9gs7",
  "key29": "3Cd4kY1ajFVHqH8Yery51Vk7RnV5ucKxDJoBturNsUeTN14anC4BzvjqYkda9bRGJfHbx9UbewYvuAFaWyto1ReR",
  "key30": "41rZpGcWYaeXVhy1piTWb3GE2Dp1nicrd8boAQmqUXi7G3yWzZ1ypLcCVsa7HGtjmLfGTvczsJFmC2BcQh38Dyhm",
  "key31": "cNVJtNMFwjzXFcr6BeJXuK1WqAex3MPRewWo5T8AkgWXKmpoY1TovRTKc5YHGjt87oa7wpdwa48HbapwJqiq6G4",
  "key32": "FFBky4Fw6tEpM87rG1b32n9k2AZiASEH8FHSVn9pE5DhjLfLXegXoddy7rPWRc69iEqhDB6v8WQqvMLjtMB1Hdn",
  "key33": "3RVUXv14AkXZBgjYczVg2tuP1f7om1ZThm7Pydbp2SfjwAKbGG5FDjJo3s9yKGrR8pQBf8KCA2ka3VQ15nKdoXCt",
  "key34": "4dr7x3EbV5mP7QCMuHCNF32V7cqdfAhNJ2JJrp45CKzvBwiu4u4umNtpcokCP1MxQiftdigTjPFJA7q73AQZmpsT",
  "key35": "4HZCvMjPUjbi86FnwLrHqczdL1MnM8VWUskhVnQo2agitu5YqU81ZVHRZY2F78jrEDZJdMnkeYxbbGiCtSP4mQ5Y",
  "key36": "3UuaoRDtwRzc5cEDVisqabaqwamQwgpPwuKvD1erfGBSr5sK4ZAiiKh5iFri79qh9t6JAX8xn3dVDnUQAGY1eKML",
  "key37": "3P4zrof99UZwBJJHofCFoUGskFZVGqNuwogCCS5SXBQdmhCXj1LCTc6ScFTvYQqhDyqJqD7wMX4p3nQ787BfvGH9",
  "key38": "2HGuipCgPnLti1TKhAjNQ6T3NABvWosJ4Qd1Y1FpbDnKXNPpwiKWzHNufrwqJbVfuPjiKPpAd9rn77aUmX81e29T",
  "key39": "28J2kx9fmoo1e3H6ekncMXdapZjAthLTQ79jpHr1P1e8FaJTo25k941Yd9cN9CVxC1otS32ppesHqmhkQxntnxkJ",
  "key40": "WbAEqteHFfwTARhQHRztygzgfEfeuxyFX21qdt6xB8bjyd9CpztKBk7DwnJPQzyzcDjShbX4apkZBfCaqN1Jvxd",
  "key41": "HJ2wLGsrtZECtBjEcvTCKEyfHYnFWyLRwXnpf4waN1yPSysVWPhwgGobtbnJ6QsgYQYeHaGPom8pPKDp9w7PZ5m",
  "key42": "5uuo6VeL9HPgXmUGbepUqVNWXSPMmztrr7nvX7uyoDddMwkR6Xyu5QBKixCHesUPxMvvwTGT2c1dd4mX8e1ZwyvM",
  "key43": "4uQsihDEb4dh2Uc6iFDUnEnxmkcb5ePi4o6W2VXvwcpoAS57npCLLsrSmqS2bJ9Hktu55zRpZn4kxupq2ReBqSmD",
  "key44": "5YKqThoCcHwvznmrwa8wKruFVrusAe5c6WxNa9LYRcuXdt8QxZ6v92wxbHU1Z73gcxJEML92o2CJ1jdCZnXpVZ5Q",
  "key45": "49jaA6cPpwd1uWkfFfuQWrVTxAaZfYtVw1xQcYW7kt8LBV6m1Lqbqqr3ZwpN8eRcHK47DiWyNgisg2YRCMFKB7Jj",
  "key46": "qDnAnyZpC8znkKoD5JJieHEhS17MftpJJmeUwG4zwnprYmUHWAMdw7qkgpx33Yq2WZegm2JUewi8g4kCKZoL9cr"
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

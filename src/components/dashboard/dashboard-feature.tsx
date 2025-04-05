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
    "37ZPuG9GqDFCDumA5JvwN5B54dUFJcfeqZpdEfkCpF7A9fwZ9p9SxCPSdQzht1gfxVQC8BHHv6myyP4BDoGhCrFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Ngi3NgFBQxEPYe522onZ2GGAdjEudQj4QnVZuJHtL1gQZ8hHoYVUxv8aUa9MG8xUvuvJMqBkxQ85nhhWULs3Lb",
  "key1": "4RWrsKmtt8VtFfNtzmVL4Vf6GVa1aiZKwFuVfpavfUBijgUZrieLpVhJgBsLXDcEGRcomHy7VSZpihQpGUgQSnmz",
  "key2": "gjTT3XhjB6CrTebyVYBmVy6BoAvr394yxzUPEj49iTbx2nBxJbkLA9LFdGwUVNuRJgvBbSLZ4KeLbjQa572SMMT",
  "key3": "2M92RjGAniKZX8ELPdAsfA6d7QXP4XQbnnbJYTeXB7KRfozYPNLABXeh92FQQB3FNNzuGzTkeJDE92iPyCCHVdoa",
  "key4": "2mzNShKgX6XmJBKxxc697F4MciDK53q7CQ7rFtMeS65b9WaJ4A6kmtjStDrCX7vSWBjPuDWBkb4TtumWKAVQmvSR",
  "key5": "4FrXeufbDQ9R5Vd6Ptz6rBVcZKRxNzNHeHRQ26CQAt1fS9ywJrD6dDHf12V35PzWZKwC64affc7bWAUfPncAsMcp",
  "key6": "3BsbHqLsnPdUv8d9fBsPWtiGoj5eeuiGCo1vke9QnHCV9hHsnoDAb1myco9xVvg7s7uA129iinJmH7DNewPstdbH",
  "key7": "4wGRPq2Yx8QWHH5g3mK68RuLP6WwpQGZpk2TgD6WVYvgxxoeMBAZ744QfDRNqsuc8YnG2y9R77weeUULZEAaH3Ro",
  "key8": "3rLLpvGGYabDgJuDpnXxcbvo2ZUXmBv61bVAzbSeRqecHY2u1rbutpA1YMYrkxF1iv2b7qU4a6F3W2VkeT5Pi3g8",
  "key9": "QgqrgDyxppnBXpmYPXv2yTG4nME2siaVeyQGuFbT74tWZcQCCQ7VhnPAy5Y8eoR4WFrt1y8v6dhCZdD9QzTLHwC",
  "key10": "5U3Snobpx17LJqBhVChqm5Jd743NtEzUUYjX3rZ7qrTA8L7aiQA8kDQQZNJZUuNTQkNdHjLeGUCQsvNLdJQqBQyk",
  "key11": "5bxGeaqMgVQc1UbxnYmgvQZCANeuKbDZa6CDYrAovhwFvJCev3EuvCvdGvT1yd4za6dz3MFcVpAgG7mWNwBdy2vi",
  "key12": "4eCL2zo7uZfVo754u2vuc9Gx5n2HmscXrETnbmQXkC4ygQMTsb5VCa8TZ32qLqAZYwHj8Y5SRdo8oThrxtxBkWJY",
  "key13": "kGWUVzjCGs5tZSsohL3Gjjmcjk7yLTxVEWeTQv7Ne75iNhxDvy23whwHqUXJVZJcYuU6XJ1NqyKJMv7rcsf4gBK",
  "key14": "4sZGJgDDEXMWA2uvLZPbzvQPyC3V8RCshyLVPAP36EdamJQoxrSKvjCUB6r4fKtSg2MtiXoPW5LsUbEL29rMxBhe",
  "key15": "4aXXNVxDt7Xo6TmC8B8H3qFUXCDq1EmwjKC34bQChZEdDauyTJg8K5uYkfUaY8unyhrns2V1AXv5D1nXkk2bDUwr",
  "key16": "31tjcL4YrZ9C4tE9pP8HJAsDnbjTgiwS8WCbLTyBDtVCnuZjdcjRkmf9fBcvtprfFENjqHGwCnwy2YKVHyirtWTq",
  "key17": "2svF3jTgJzuMEHFMoXGz6NJhFCJ9YScQrgygS65sW1uTw3YCy9xcHxFHeawq8VPke1teA797TV5TDkDq4H5a7dUd",
  "key18": "4EZwV7cdECKXq629ffRLFBWqHr5cekZqxKL4uis3vSYXCM2GD5nwDj3vyKE12Zx2DRE898bTUbDyEstpmsE1pn38",
  "key19": "5krbxUMqE8jT3STBLcYPhnDG8GaVUdZj1rcxwPotmJsRrh48hMTTRuPXoNd6VxCn9c8hAsxMGYyUdwv8QmqbJznp",
  "key20": "2aDEfGQCH359ntVg1Ah3FwtBhSqumTQcPcwx9fbYos5krpVCYB9EPP7VAUdoFQr7EDWMvP25fQbwDiNHx4ZW1HF3",
  "key21": "i2tKwyPJAJthXT4kHzm8XC46S1W62bA6Wtnz2Q5MBkEGuTo4YW2npT2nCumHavayaDfmcK7rgVRRP6p9GFudsLE",
  "key22": "3Cu7Uwc9WLpUB67868X3Uf3RSaKGnDuPqHatmjN2YMFmjSGcxJ4H4fCcpjNYN73RtkKbHSUzxBykRm2diT3DSabm",
  "key23": "4Chg2efv2QxgufEZhSqyq33QHiYARteFPXVWjmuxCaPcwHuNL4akdgSk2YQjk1Y8sJ4QYky47qZegGFPTxrdfsm3",
  "key24": "23yV93wEBmnGjHPR1edHYoK3qXjRHKkD8rJzyQUvtsaPdsbi6UTUfqpk6TqXkgmTpkXXrLspaQyd5vhepNAnXi3D",
  "key25": "5o6sB4U2kbYtfwHoYstBUoMfDj8VWYo8C2KLhzo3MmoBbJX1eqLLhPGEy56pv2KuW3CttQXDgAsxT7ykyAU1vpZK",
  "key26": "3sNG7LE3haktDEHmZH4PHrZFiBKHmzmZJ626uFhL5Sa7L5h82YGmsstQGWNJNgH5JQGngmyVn8FXrWvEgPp7Me67",
  "key27": "4NAPwDYvi6qwVeEfCgzjCjYxoDYUUD5kjcdburoMk5AtRJEhXGXXBujSSp5gdMG7S8pHxZbNZE2ZJLro6fVcRQ1f",
  "key28": "55eBM7N8X34T2HkMmEUwqjSGDtagEb5rebsNdjVhLkWzvJX7g7Uk4y7SLp6g6LtJyrihTAvjdip27KZLBs4h313f",
  "key29": "2fPrdj4u5yzsABEVNLn25KShFa1QgkXSAN2Gz9ixhs7mJS85jhDFgYrdtjEXQhP4cgFAhsnuPQvzaWwvxZq4g3W2",
  "key30": "43D8d5wNCdC9gs7jDH247hxRnXUzrc9syZZoQ38oJPoho5UWzd66hqSqXogMFvbTjsYDU6ZjatzsY7aXgmDfRnCL",
  "key31": "2xjVMD76DthHdCyPWhxHygLvW7x8phPNq3wtJoMgHBvp8x3CfW5xjN3DwxfBpiw8q16ig8MzKqtwMyuzKzScNkhU",
  "key32": "5WWiFD1nr6EgcpsSdBD4bKyWLEVKhMZ3VAXNFgYhgbbuhakZYenrUt8D7C8JTxwWsrpdCBbqMMGP2ScE2SmX31RD",
  "key33": "59R6rrYbyWZ3BvqRytYR1962tFSfqHNd2CXoctr7Af13jcsLotUqZGtk7s7EdxReoDoSVEQ6RXnTMXHg8wQuJKPA",
  "key34": "37dh8WLTr8ajTcxHS8qdYEbXvFCiSx8y9ivav4NtQHndnwVyaSHEmcNR9e6tWJxYSAB5VNHANwpodA9MVTupvhEq",
  "key35": "3eawhdtWBTQgWxP1P3dUfQ1uz3CArfKPM4ZHVoNJTbrqJH7bLKx6TpWqu9NdLCoraBZVL5bmUUVwPEefaJLXFf2N",
  "key36": "3k8MfNwuNxVSddSfBZor4QxxyeVRBp5Eh9Yjjm7unV99CvQ4y4JKDHh7JLSNyarutsHSpAF7uQU3Sn6BDTtkuBGN",
  "key37": "2R56S47WcXZQfqRJtzb2btZjmy4PrqKEq29PbdfFirefF9ox7fN8bkrjoSiTzxK9R6hwYUBqkbAvMTS7mfJUUWwC",
  "key38": "46j44rjfBXkrf7c3iuUxLPzjtgT3Kr3QanXaVGzEan3ySJJM6mMNJRuQxJRoRKWVRzNGhq6fS139ZdjfvFzHohGg",
  "key39": "2bxCi8Tirp5PHkWU1jgVLXHXN4uexUwhXV2UwgqQxXG4fAVFzbio3GBDDRCiqo2KeGTocnya3duSAHuFNuxa6Z3E",
  "key40": "3XbskoG1Kf8wi5HahJgZjq9Vw6UYqJn3Uwpp3sTEaHeGfVzYGQ6JN4vCsA5EhmxUqQbynyCa3RUa5nxf2LoQAcHy",
  "key41": "4nDmfrEMSkaM4zafFvnugSnedesqpSGdwNQBH1WnQN8Jcq6jEQtppkjNQPe7aFCt345vquJbE91b8vneyN53Jnwd",
  "key42": "2PkbFPmAVFDCvkhp9ELFQvn2zP7uyzSmxrqv2mb7agRQ1PF72HvEB359mhPu522wFakxvZwS6rTaQjdhPUhrbg26",
  "key43": "5XAHbnBvsaueaCx7TJTi23SPm4fBA5CMExwYWXk5WqnFDDgqrGCJxdwPFaaToXKvS9abYy2hUs2JziQXdYK82H6n",
  "key44": "5kN2jCY1EDgKRqhs4Pakff4J9q96Cnb5fTwaUKEnujQQ1Y2NtMDYw1pvYRHNWQW14mtekd1GE68antWsHV7mUCzd",
  "key45": "LYEgLPCDSc2nLXpeD2aEtwNsD28fdADBt2zrZx4SNw9eCCPmUJQQixFnP4EWwhPZgwXuYTxUMXpzzxrEdvjnCQf",
  "key46": "3NSqc4ZSgBrULvhE1QqAwrwkSe41vjccw5XydeaGjox1YQkmVvWzPffoTB7vtv6kgYv4FGedWAChz7B2xK5tjMT2",
  "key47": "32WbEwXvz5xmxrY6uXcwgvtFiDomuQPis6iqqCjMDkFrePMCBtPF6iCGK8Akt89ETQ5tB3njpjqnk2MnBJT6f7gZ",
  "key48": "2tFjwrDjKwvUkwk9UmhGnotxn6fGXtfsy7qxpogpSTKMNqHKaXjR5v9kkRBrRuT7SkfKvXS5wUisqS6YndaKKQT3"
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

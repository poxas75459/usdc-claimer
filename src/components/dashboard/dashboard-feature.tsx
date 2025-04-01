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
    "6o2dzbJT5sfwyDmr6D4ieo9gXmQQbhbH9CUDcgyWn4bC1T96YR2Qn6JDb1cPiLWgqJvsk9sczm7igftcrUiA53n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4muUUvE1iaZSmKKfcNgJjkYa9NJWKh1Erqmo3t9NYDhDnNpu7tZtHasihJbkKKFbMCDtFQ8FyyLkYpHiftY8ahqw",
  "key1": "4yxgivgGHQinYsW9EJCH2TCerV2oyDJTeb2uWnPEr85P8p73vyNaAnBcbbAzChwQtU6moexYY4i8rrKXbqHm5udi",
  "key2": "isBxd9VySA74hbcQu3wfEhASyWHwXSXKaXo1LPqM2yem2DyceadFhezbB7xrsSuHqdpg1GBppW2sATvU31iRHgT",
  "key3": "5e3mXfDuubyGuQ2xhTL531YYZaehCXj442ZATub3TADyipFue9skU2VHLnH46CETGwvHyjTUcHW3ZALpWsKZ3Pt6",
  "key4": "5VPGhZgf6zMrvRgwVTtpZ7pcFY9JDDBjRfahkCYUqwfVTEEp2cSH2tHXNe4ks7tvZegzP1X5LAXhDPrHu49pwnjL",
  "key5": "4JF52b9k5ndcPgQkrKFcYfh5QbxCZFQDwvVCqDPKb1CUfaHpZYAJEsh35DbKPreW7bcy7Ei5aN4YSMyfKz4CekYi",
  "key6": "5AaDmso3a3cp3VjoFo1fhrv8Ho6r22HDmF7EwU1ER9UmmtAJyvFEAQ9Ey1b4G3N9GNLXdJXEiFCvmchdjTuzxZh",
  "key7": "uHWrZQBmrA4tiVQyAgHQDA1KYuxhDXuxfjkXbRvyS3b9HHBbaF6J7r5ZfAXPJahLrbRjw7ijr7qbdnFQzHamPXk",
  "key8": "384eHcJpgjfzWwEQqm9QX3prrTF5DwzC75rwr7NVWWnj237sJ9fzc4J6HaAhzaubmbRnLSM6isWPYQpWqia7X3y6",
  "key9": "NUENcNgCFT2kK7LHBXTTYFo6cgsULYWiWKvpnqboYJH7Vg7Kta7JcU8jf6PcwPTgN4ZiN17gQ8bqxF8w9prAWFQ",
  "key10": "5GqojsceT7ADsgV8rVd6aNFjcaew4JrUf72KZtatwnMgbNmYukrthZhGvRPK4iKsfFTq1tKMBQ3maidDdSbuvdAf",
  "key11": "2ms1S4Zf3RPLrdJ8YiETN8Rscf5heDHq3DYG8HsPffaE1xfQ3UFbMedX3TEnMyDpxNw7mb97LMXFAgqk3DodhUwz",
  "key12": "3nJygvNEod2NUA2wXCUoRBfveYPMq3hxyi6Sp8vVxhnTmBN9hgy9p5wTXxb6KfgAyuBBBXFS5rpeMehdEzmmfqTT",
  "key13": "4E7bkCUZxDkkXtvudr6YXZSW642BuP85RdUgYAoDnHdx7yvsz9rgeZ5AjBNqKg9cCSTFqHBc1GxvwX6kVvJSqUtw",
  "key14": "bqPG6m29zPLWRSYgb5WNfVCZ95MWTdGcykRXBPkRq7TD6wLj5ZPpmH8Pd4t2VaWdTRsY2yRtEowhj11Nn8dn7D7",
  "key15": "5itp97FMBU4eRD5aqE5naZAWARZj3NSW7DEMV7Dkb7s1q2JUvV2UWAevppWSh5DKqcGmBAcMPFuLCSRQ7Ey4h5Py",
  "key16": "CWkuFjPjmoZ3imqUPe7k5wHsbPv7kctFTRyv52vc7YDP9FoQq82grjUammG6wgtK8sC5MBX45RmEgm8Dc9m5gvj",
  "key17": "2ii3M7MF9aMxYZv1i7fKE4LbTF22DgCSz1Ca1pstY3Gn3sRv2DTvzFSZXQwNmHgg2r3k8cna8t4Mu2i1B36qB6Qu",
  "key18": "WrxgoUoGCHtBxrpPWsiFrvz5dh2AXXBwSKcd4oZ4FJMYgvBxGBzdeydLNtT476KbpDsJD2W8Xp8YJqUDrC6bUt6",
  "key19": "2dU6kSe8g1CRXMvgvi8TQpNq76EpQm7RhCDgJcqTGWeNV7kxaAsmum6TnsKBksdnWKGrntj2GChK9NEZ4j6B6yAx",
  "key20": "46Jhi1rGg8Ywh9CrUarK8jMQWuvwum6Hsztiheuu6RVvCdfuA3iVH9mSBQfpSHP6qphDUbb3t9ee4X3CHAjEv96q",
  "key21": "2rDzw9fY6Y5hpauLcNMBPG5RH9VPr5n4fNUajtSHUNMXvtcFLeDE46BCqfygznLnUaYpY8cCqtUvMe79JyzzUjRF",
  "key22": "peNptukjsX1dA9gF93qbnHEpD7ff3X3jpwW2uWdwCbBPo1uwNzgWrBzWnHHiuzyvJMHauS4UNdDyj6b5kECQHBG",
  "key23": "4Ck87MHaEs4xnUieF9DGEKaAms67j6KM23q39WYTa77o99awcCVpbv9ZXctrANCQbfCRUn1aoRZCjkfT5Fec21UR",
  "key24": "4iFFoiq6iQeZBw4zHUPgJtCePhdQ8wP2wnTokh1nySjEinap1hw3iitTpUVq3Je86kxgVi6PvGrJFCWWSKYeAGYR",
  "key25": "4UkUC2AU4BKvpYdVHVEM9DdEPUPRXrqdyGaSgmj3dLBqeXfuRGe5j1WGqBsjhkufNHpbANhm3u72hcBxGomZ6naw",
  "key26": "2d9cWeoub8z8asRy8id8FbiMm4wAc1Qdx9Hd4EMmNpAEAf3MBwipPXCehfaq9zAgFAbF7kS7QYHESauoi1YVukrh",
  "key27": "4mB2aksBApgGC46AFmieiAJB3hJFkAqiMzRV9JzZE2H3A4mbgdBEndovXYqVRLLwSJNoB1x2P2LnXijcgxFzEsDx",
  "key28": "pjWmVRda9cb1aEMVtPkuRtMyMJm5XdTuFcWaZ63zt7rmGXpDzsD8A8BPiKCufYHf8yLRwMDp9UPPvjYtW49uwZQ",
  "key29": "5WfchUGE64Q9nPk39fVHt9YtkJ6fjE8ckVBUsm6jo5t5vYxRSGcm6WhPsRTbJ9KKeZZT3tYEHd9F2zrXsgwQbcjW",
  "key30": "uMqYcxoLTU9DkRUvvhpgJavBqpG8ZvYtaCEzN9jQvPs465cKTUyX1WVHkYxwtfRJvBUY2NfHtJVtzAu6ZSf5s8J",
  "key31": "ky9Y1v55TRpFP2wXppQ253G4VWf57oXWNBoDmN6nQTy43zwjB2JxqjcmC3JupZmka2kt1errEMT3cW7h3L1inxC",
  "key32": "5UqoQBv3NpHwbNy6odwqvwPrcgCFwU1n7LW4qXqMA29N31767pdwVsGfkwMjNAaADSSYxEiCYiNdu5emJ2yo2XJT",
  "key33": "2G9hYJvuA2rhfTjjwmGBpwDuEi8RZ3FkoYvHL5T2TYRzKbKwNosP8y6bkJE2Xd6zwfWhTLvsD2Znr4L8Hc8J7Gex",
  "key34": "4qdwCv9C4FXbGc1URrz4AVvFon7K4TYhoMwHf6zFF5sNEEqGvwXvgBTwCUcczN9MTgpFUoutvXHcN8rML9FVyDbw",
  "key35": "3GAcnsb77FfLp2twpRqJtGRSJkW7nZorJMLiFDwohBPvKKFHx1sznjAFLpiy4W27ByUJ9haXnpm9ogTDpQ4zQsB2",
  "key36": "3vLf2Mo4paozVGJgoeKbGuNwWKBBVoYk2B8FB35NNPxFC8wLdEW9g8yizKPyVnKa5tvH34uYEJwcR2HeMZpWJG8y",
  "key37": "3JU5uQgqULcWVvjGaZLBrAgYH5CkecxyEHtWKjyU5xKg51tCMgZz5LM2LXsvRWL9U25Lxi2RjyGLQcwqsMvQZdXh",
  "key38": "3tftqz9djziSdLXXFxMtEcVQYn6jXzihxWZCdjUo2NXnN3Pbk8Px7efNgzNw1xs5peAy1KwyxCxZxXwyuFEJJJBT",
  "key39": "5Y2gTjX9aT3GPFXUhT6HRSE2gUH8UXXA7x1WN3DPGpX3EXj79pPiHzwzVxSbkSzEik3q2xDv6miFVXGDequbBTZc",
  "key40": "2LkGTDSD5y2KwhiR8UCjCjJoXFUdQf3CEQ8fTNbPJrYZnwvAguQZiUjW2ok8XfTyfHv51r64GxiLHUu54qreL5uS",
  "key41": "2MRRFDUkEvrsmpcrNAQf8NLH3GqsK2WJ6NMrGvZ2HG7zjAjRnRmWQTSZHd4y9syuGjSAVaYf254TQqJiYxRo54TM",
  "key42": "5tadBWZGm99RBGqHFzTgwA1Muj2ofuNum9ZKbyXiec2ivvBfwdhS5uzir5CaDeuGzBFHppJrRifqSXuB4S6tphvP"
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

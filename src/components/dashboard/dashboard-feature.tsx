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
    "4RuCBVvqqBXi4nGY4jNjEDDZqr9swXWohNy7Xyfh5ToojddXWp4xpsBus57sKyvQWbXv9j747XzbGa9mEu3VF9ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWhjHyBXuMDzN9pzB5W8RuDE679KX6R5qCXAhczcyVjK27pjPwdTmgRX4NZC4HVSUE4doK3N9b5P85sRtmcDrpE",
  "key1": "26adTELWmt4PbdwAT2FXmZB8KwBUy3VizST7DgUvG26zKV9Nuzh3wk93WfFMrcoYfzdyCyMfRbuWvQqPnBT8gVUx",
  "key2": "2rEWa56r91HmfQVUepMAxSER1y1oE13KK5eetBHgLnbijbW6RmXroSxXz7aj8SVy3J6fQUtxpQTRXgQF6cb5sMVe",
  "key3": "5pRUXYboFg2j8FzpVTznKMoqF2ACuk8ZK2xWHcXAJuLR3tHYr96BaZTFShPDZEqNzkZuhg5DbPhFvypbqaH15rs2",
  "key4": "mJE6SauyXXnvsDqtA2EhnzA7Bzxsp7YKNFx4p2YqkT1nJ1obwfdqwDz1mHxU5E24W8JkiiUfaVvHht9X9hfAQRE",
  "key5": "54KdDG7bhyAzF1q3acbrgkJxBrn13GdVHNZFsnxtHQeU3dAGt7gx8m95NbDKt2rhuPspn1GwrA1UGyLV2cmwgPZE",
  "key6": "WQX6nJ9ixFkMLkB3oMX46SW4pbKHQXtWiNZkSnr5hwLZaqoeqiWmrUuMpYV1o4WWq4sT15c2SyYRgM9otHg2P2h",
  "key7": "24nUHK1PZ5VSYriRyv8VL56G2iDxcc76FVwRW1i68UKtDYaAvQmKYTa6XfLjEzanSbtmFVR6aN7w5eiiGkcX2Gdy",
  "key8": "fhJPdCqBm5ZeLT6njJW7aknhtdKztp9zXkz6CBwErYgaCQqcMjvpyc1Fuin1ztnToxXGnqFoHye3RZRk3sKUJ5G",
  "key9": "AUYHSNPV7eVWTscgRBj6dESJxqRK4SEfqRa5trVsrfFc6fEh3JFBRPNSjQrEar2yPZY6vk5ZJ4EVYsfxKxny4N4",
  "key10": "2QQSC7vSxqFJQaDFkGrA9rynkCkY5EiZs629tLL2zG4ChvTGbxvTvVcfRvZ3ScaF2xRjx51PkENLZDYW83cJmYXE",
  "key11": "28gw7kTuprMPjWGqrKrZAwSQTm71Pc86dUavY7izJeEBNXpmH7jWicd6psM21AyTq2DLzGjcLhs4SePQK7NjNRki",
  "key12": "8g1zvvQqAMFY1NoqbHWpDT2zCMQ9UXxrmjGePqgWdQSR4vD7WxzBS8XHnnkY3uWLNtv2opafr4ENgPHsH87gqKv",
  "key13": "5tMF7AqeBgRXpzdGDsajvS7n2XMZiS2Qr8rXxMHYJRsgzjsbcxTeftcQfbsxj7nryMJmTZu1oJsqMjkNMoAj7Uen",
  "key14": "2JeXohgUruN8Rhm6UVac2TSePdkKr2ug3yMRNQEYXbvvdynxEpaXSrhBHE6QEzGtuVWBZzWdLz1Qp1Srmymud84V",
  "key15": "3hEaGq9BjURRAg65jAzGaLvYxRGUuwpJmhGmaZ2EWtxYUog9gwWAHsnCW1rBJR6rAa8uho1nnz1EnbJ9qG1ycnVY",
  "key16": "4uL4AttgkwG7b8fSbHwBPvCZX5iGPPJnFQPmqBrSECJZGikaW3bBie8qxyeatLoXqGEkAENJZ37RZgb1wQmptWLZ",
  "key17": "5p3KvHJvFtJNbjzBwpXBtfimbWP4KtRr3iMBhfgVN7RNkw2icgeG4pKKPME3SQJdcCc77inA4MUh1WYoAqF6e9rU",
  "key18": "4mgNBon65aGqXQZYXKJtkhPP2K7yTR4BfJaEhPbYy628YRQEi8HiSevztE2vdAwWBVTeM3q1HG3Jkz3RTvkARHTP",
  "key19": "5gFroZoSYrYad8cDGxxFk3H1xe4SVhD799BGywrvyQo5zB8Dw1Q9S4sTZkhWefvHKv1RqHC6jyjuhuLdH5EwdvpG",
  "key20": "2P5J2cCF8fqoxY1auviJ5G9AFrPLTvYreFT8HUg2PvkPYMjdoWDtdvcJEK33dNGWQNXRWtAeNDAffrrdHaKxYWoR",
  "key21": "4vzoEWS7qCgyTNzmFR7QN3cWWbADmnAMh5ywoXygza87uaWRUUxbncJc1qaf9vzWZXWEsWmUqX1XfCmfCycKa4sw",
  "key22": "2YwmsTuMqsWvHNV9SeY5UxZzCqp6m94NW17HBw468g2gFLLHBdsugwZ6pkTRBhbQe25pVau4XpHfRLNxu814Phfz",
  "key23": "64rtHaUGSu3fDRi6yjZojQV9JeJT4t1Cdek487NfjyQsKHdmvTbE3bJhq17YaLAdXP4bqg1cgX7qmxwB6pbsbeEb",
  "key24": "2HUcs4nXCF8m4fvaq8HmARrJhfEsbHECESthwoPeGvykH32TkZn7pVmViFNKaUdTiDuEGq8kmztRdHWWy6q8LFWN",
  "key25": "uDyMpbhZVJNMcKoEzPux3fQihjZD97nkHYTzJRMTqQx3a7HDotbxe31CPE2nHb5XJk9rjPf82UP4X4bxqx5NzUP",
  "key26": "XMXxjhntJgjoWyxifRtpY5Zakye6LocDLcvATdLCyF9JmfmEqQGMwm484rLmtWCgWJyZtAXmrjoqMt9RLKqLtfh",
  "key27": "5B5PGfDqZs4UKe6gq7N3PQcgo9DHxtG9LHUrSfqBWfwB8Ei3FumRbojnrkxTBxDk9MREKnFSwkLvd9A7cyo4Sw8i",
  "key28": "eyMjwTtQKTgSm8ZKLieLbKNstWCdjwvSLRPsAmT4jToBpJywEMghZGHhet2W21ozpJowSH73tCCHLjFfrGNTh5Y",
  "key29": "589f7Dvs7wJ1wAY13y3boLnrxovBr3XgmHErByKCKYMEmjpNKY2hGiKkWw3f6BDutF3wy2bqQUJ4zE3M7uHauJ9h",
  "key30": "4nBHaSdvLgfNX5vnJaJGMcNUjPWsFdny2sWZRdAEweWe598ZvEMtqHV3XEfmbfHUXnyrTwFXKWcDbUVsP178TavH",
  "key31": "2wAy7SZrFv2KLWYMUKL7abSi5YhGi26wDqzQuuVMJPHtyjSbA7BpfwMJyYWYwYx2BS6uxPGpyJtDX8oaf7Ehz2W8",
  "key32": "4FsHUVeZJZ61qxQU6hyNEFZgeZJwy71rngjwQHu2Yca95unaBChFs2u8VKzeAiLapSrZi2vcMaMFDKc4B6RE21r6",
  "key33": "4upvinXMnrW142A8VYFqUJHXA95tnjYKPtFiFCNxbya3zGFxsuZEXXrpbGjbHYXe66wkWfP5AvDPUThxGQT4vJ7b",
  "key34": "5vS8MBD4GDB3QgyYqmUtJSzwfFJsTa8WuVqqxNB58kqmb2UgVj8tue59599hkXGEBvQT72Cwsd6dzRe2zZwaLqqF",
  "key35": "tAHXadikqhNQR8sny2yDpu3pSfzpjLskVK8BnaD2cYfgXaA6J3Fnvn8HZTqS2d1tQtu4s35dTcPZBuNEYbxQ1y9",
  "key36": "4TYBJGXfDNpdjuC9p8EtwSwqLjr1pLuUZcXa2QX4v1TZJ8abbpaBvsCWvj5NkeqW6eZWKwGGq3sab94LgVri1eEJ",
  "key37": "4pvUqA6pHqUkXYUcVtsoHNsztvvd7sWWgCyTv3NBqyxCzuSW8vXPd3ePcYQkYgAs7tRiLDQSMgMh8gwnGcf4jE3B",
  "key38": "2dKnhgRgny55X1KSzsH3xjDWLH4bDR1Q56G2XsJ8Pu4MZQcvcMF4884PpTTiQe99ZzsCVdnKAnrNaWggCqkPreLj",
  "key39": "4dZsgaZVaGLfGgLonrV7wo9y4Y3RuoEjgiwBbSm1BULfUjA69MfUVtDCdAVv75KiG2nisZQeU9xHiKKsmV983ms8",
  "key40": "L3jNqUQtpeW5wXm2sgfq5Q4veA7kUFVbGDKPTqPMeSi4dzekznEHpJWFam5SJ81RSi1f6vhAGJ5fZiHVRAFXsjy",
  "key41": "28dGBVs267nzQNUMHjb9xJckGgKK7LVNbufL3qzLUB3k6Emc9kQLqA7vGJW4iMbc49LiynHvF1u7ePo4LpEGoSrD",
  "key42": "oQdiamKybeFV1KEXLo4aTyWa27RMwREWBgAPyZ6fhAfVzuTBEkSvpK4MfhqQKaLzBFTdZaKXxJ7qgmiTbqoCKrg",
  "key43": "3mFtPRgbKEjLbsiPQGg2pjunstVEzM4sb9qbtkhuviQT4tdHLSKkakFCT9wXoFtuCqDyGeM6V4wfUWS9nQQR22o2",
  "key44": "44yPs9opukV82AC4bFj75uYHtcPah5kyL8W6qNeXdVekMroy66RNmR7vbJTW291sLgcXH5UXocNCThZZJjqspVDJ"
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

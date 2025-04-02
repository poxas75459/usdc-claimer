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
    "2deuLLJup6DiGKLfaqDZ8zyQxwF5ZaSUUpCp1aNNdQfkATetra2uGnAjHN8deFbWchWP3xo2yVhAVbiNkEfDC3AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tAhBKXBFp6MCoTtGfyVLF3kp9gMHdiEytZaTy6cPmrNTPVxT77QNpJCmV5uHLXPAzDe7TtYSqRQynDCqAXR78yN",
  "key1": "x5aut1RxHCg8ZX6CGorDHtB6dvgC7ydRSm3bNcXkbSCj4ySrD3SLpZR3xktMJXvCVem4VTj9QEWpdvK3W2qfQFf",
  "key2": "4fY4jks5WfZkyvDoov8JwSqmW1woSy6Pr4RGHRt543dY51ZvuCCxH4eJw2ZUpccGBYCoNAqa2qApAtdoUh8CMtUc",
  "key3": "5kkvkVtcvQ3WHP2EW2UAEYTT6YegTcLhTa89pezWDDoE88qd5cF7rtdMpEbuQPZZHhTUTnxRyjUZxJNgQn5scf66",
  "key4": "pe2FNLX7CvMYRLCC1d4jX4ZKPUApZUntHukXnQgsnt6SpMhMu5Vu9C3Cj3orPtfkwtSnpCXBWX9kouyaCTdzcPe",
  "key5": "4qCA1mDDyYGo9Tt7ntuETXWCsx9bVgnTk7gQXBzSaBHrsVpFw49qqLCoz4dqtfJmYszSQR3FuSfPGaSME4GHhkym",
  "key6": "Jd1fyemnYzHcXmBnGsncCfyjQwcWWLk2qx8iNfoj5RjKBtWUxRH9wcRZ6Ts9CfnBMVY37kYnzcBCyCRre2mhjsT",
  "key7": "4cBrwsWGD7cnpJ2dbCK3b1PV5SYxVbvazEhnnaEe5JSNnDJchE57dv8bK9BR837bVpX6fCbAy1S8uegwoA4PKKBa",
  "key8": "94NkcQmxSjoSJ97E3oburK6Zx1bayrncCbLvirJvZuS2ikj53jsTX6EwkkBUq2hGDrtniWVjMpUrL75EwikMtDx",
  "key9": "4EcDwkPhYEMFVhkfp2zPJsGqwKfvckVLHx3WyWRGLcZhHuHB7giDmsTVTFYBNq2GemEWs7LiffW3BJUJeJ7UK8Vq",
  "key10": "TNZWAvGPw1WkLYbY9wRaFisscgLymVyPkwuVQmU881mrskXYw6XM9xFAvmAHP7q1eC6mHP8fodhvS3VzUjAWrVr",
  "key11": "39RrcF4CWuvboZCcixFCtAJeVkBNFPBnd8HRGmgmFcQB4GRRFFeP4sjpE6ndyMg7Byw5i2ANKnrQcivMFGhjBg4a",
  "key12": "3Qbg8Jc7Qg8zHcwwgGRfx28nz8ef11eQdEXWqayu3HPTKCMrDsisL6j9dEDJttk21zmvfQap6QFrjLauRPkR78ge",
  "key13": "5YxgiZRU5fNXFAkYtE5Dgj1H3VVqb99xSBnNKUPeVxWNMzui6j9UYE2FZphQd8UZpEDDruxAThkCkMV44MnagWWq",
  "key14": "3PPaEN3CShcNne3faSaC9kFRrwLfNVAk7yt41nA4A7s7R55hzt4WXEoYqmEACRvBt7CCs6oa3o4kZDkLdG8yejHb",
  "key15": "JeBpfsgb6aqcuR2HWWvByTxwzQH7andhZ4pPHEGMtJnkSKAz6agG2EtvwPWNQfDnW9wGY8Qi9K65Z9eGvLt1nzy",
  "key16": "229nbZwT5fjvY7jUE7Po7S3RRXf36pupN1L9Wk2ht44D5NQy6SySnCKkpp2FYiJM1awhL8wCeDoxQYdPih3NwZZU",
  "key17": "2KSF75D4Px4R9u9AHDH92gFLPeAydHvJ9FQ76vCFzPSE59pkHoWZgczuerBzm9wqmeMQ2aRXe9wxghWQZbQ2UPGP",
  "key18": "5FgnZtbVPvbCyhXXfdJKUaS2fSueba7qtV9n933YTEsWtMtLqYvWBAR1bcA2doeWLGyNHYvmg1Dzap1zbtonqNoU",
  "key19": "ZdMhuXkHjt24pkEMNRMSVr5RcSHjS8zgzswF3hxfiMNBjHkh6CydchhQhnEKmKozpV6wsbH6PxCHSN2ncWmMQPv",
  "key20": "ehtdrXn7p95qayNESyW9EEEXU5Uu5ETsbUvCSo9ALopUtL38ivMjsJQvpsgHqDW2Rpizat9QVb5NV8TSbZEL8Zs",
  "key21": "eM2nW344eQc5KKrsiks9qKosHCNmBAh7zo2TbpFk1UiEvxMWzd7qWeuFhnzqEefEncVfeoXwR3ywKugqKxQb9uM",
  "key22": "24nngmP51ZUcPzu8nCAMTpNCXqUdLpgfhu916qE6pA3wj3gFMJL1Jh9a9bWTk5uLn1SDqMQr9vF87p8xuH97Vc6j",
  "key23": "3HdBsnuSCd4uFnjZ5qq6QthbTgYiSbpV9emj6EofyV3dhGd9JV7uLT5tnr8YmfBBvrD54KP5EejQxZDgzv6wjvTd",
  "key24": "2E2RKgppnB21Fj6EpxXnPPJZMp3SdBCNDpys2i9Mj4LLMvPK3dQPKu2ZnecheLfgSkgJ2Yf9MPpy8cmsWHyUE9UL",
  "key25": "5S1sssnCb1jwn5PBS5BpCEkU8SjW3sVJrCCtBCcXzeYDHyjGciAm86XCfEMSZgUCrR3y45pRAmDztF4ZA27aNWhj",
  "key26": "4W7dtPQNvatRb8oSFfawDUPz1GWA61FXpDKdTE81csjujws9hqKuGGYU7u4mgt3NW6qSwkSEY9cEMvsQ4cwquRM3",
  "key27": "5EnTa7SySZn6Cvz78NBKftvh1WzXR4rcXcYFD28sGEj9keJA6ZtUX8BTrjUibh1xuVAVqQTcZGtRuFrsz6spx4x3",
  "key28": "3XRjLhZYYCb1ngrL7Tixi4wRmZKCkKLuybVECpdePhKpmb6pCeQNrhpMaJk4xKnocvhqwPwE4v15GxN9so5QGFPz",
  "key29": "5146zFWG1nTaVRmYDwzT3KNSccjdT7vT79skroizVpeK5ZEYqn34NgJKTgFMBmBd5F51nUj9zNg9NHh1G2Dz6aZ5",
  "key30": "57DdS7W9De7FuYHxmuHcKwmXb2B49c78QYun5zjUMPebSSyL4AQCM6QY4HBPnjBRiyDeCrennipScRmEUWZxDcjw",
  "key31": "5R4DbLU4T4Y79AHiZvZGkMzLzpKtLYGN3Mt8wn6uH4uUhPyzE7Em7jRFu9aYAJafDmdVCvR5c7nDKofEWAJMhveX",
  "key32": "53H6GbYVQxBzRcpwLaGsBNBqhLbqxZxr6SUGrkCBUKhUKoEccPA1nVGVaH85Ez2aAqr1vg36q4z4P7DHzRSB5f8V",
  "key33": "4HT7QH2jZjBXXkrMoxZuCeAGkRwvCp19XFF9QDUhaDWMg1SZy4WybVvVwUSVUC8Mu9mQWAVqTHC4nYtR59E7unxL",
  "key34": "65z1T5YJ1DuxTs8ZQUSQ6eunEFPPu6ucPkK7YCGCR3BANs5sd5hd5WychpwCCQdCfpJ7FJVERSMfCnMLorwkN5q",
  "key35": "3udHXWupt3snSHpdm2h8UT6CDgbWW8kEjL5QvB3AJYeEDb1XHEay7VprWgXcWAdtsy56XXFwQ98QAyWc4THiX3UK",
  "key36": "5xCD3KQ6zhoyAZdfdmtwxZRPvHvN6caCz2P26UQA6wggznj3JJKSE7UGH6cdbcmafyEcRSYDDJb2Ngwm1fHumneE",
  "key37": "3awYCPkPCcW6235jd7r6jJuehJmP1wws9S9XC7CQEgFJ6PntYJkBUbo4nRRJydJ61S5PHZu5nPiH59XgemKQAN1B",
  "key38": "3yxUvD4GmWQeqwo12vDefMeJnySa7anWGqdJA78g9wQkRmuEXfkry7TmpU4XAQRcWvAdivba6cYwDhbTCEe5ckF6",
  "key39": "CWSfs6cJv5512nV9HwBRGH1r2ZeT7dMLHhHTqK4kNTKSZTYbvRmFKLuNpUM6Y88uK4rsyAvqxBZ6DzMv459raUe",
  "key40": "5STGMSnU8TyB3URGGUvWFAPXE1RXctWYKdxRuTbfB1hD5UssPo4smqUyVximEtKkX2oRRLbqY7dLtqyxKnWzLBxj",
  "key41": "5hW1ZSFQwyG6gg9KNQPcRAPtQT1ExExNTHk8h4zrBVNWHufLkC2nKQPf1XRqdr591td8rMJP62rRpBuZfp5b8an7",
  "key42": "62FpbsnSoHxTJ2oHska3ByvghNgjs1BnMKUfMbgPnqUYMV8NDBitbwWzcfGjZvmP3iSjYjpMPynyQkm9N7eZCybL"
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

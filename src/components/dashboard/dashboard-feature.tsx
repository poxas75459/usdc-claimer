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
    "uanNwtK3XEkFRwm7XHNyL3dk4qRuAda1gbCrYyoTpDcMiwt88EmAnS28nnSbnsWaSULRpoGLHJMaRUFyUXWGZce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kE5aUctTTmdgBoWVo6qxMoScrNxcoKprY3RB4Koot8A1HLDnXzR4hd6ZXmPkXVW7qqWqJvzn56JMeWLwVopUrno",
  "key1": "2gotP3gxdUXchHkntivFnCvdQZCL23dRYnuZKB3VdfkJDkhc5iTaU3FeGpKvuKAUfRnrAVTYoEFLvYnS84BVXfE6",
  "key2": "4YA94hATnysmEr6V2ScGyMLXGqTsMvpttUoZB7SReuoGGQuNeF72wiX6Fhp4Rbb3sR5NZGjvBApzboAesCnadv9N",
  "key3": "4rweKXPvzta19SHVLQeYBU6P22Wj5sGjF3Lt9EMsizAntFhFdr8w6jEkVpYbVv9VxDdCGsFNf4CkbpXKbWvzKHnv",
  "key4": "3if1mZr8ZdzU9QQ7esQBRR1irTH3JVQiZmkiz5T6oP6BcZT9dhn1CSfnjsbX1xRpfMhJPYYJSfC5VEnVdrkEPxTy",
  "key5": "3muZGBXurFekKaAYY4zPMrAT5Y1gS7x9zaZnK29YeNHUSNzt9LojtD599nPPkTADcxzZJAb3vNm7w3QX852HEZMa",
  "key6": "4iwsXAwmWwtrLCGuTpzfvFwq2KxFvPh7XF8tx4uFdD9xgfCyJKSN4uESmdb1CfGvJ5HjPu9kWXc5uVgKuoop9zxD",
  "key7": "585U6N9k2c1nJd3kzHzvcbH5AJJYDt8gxTSopaLTph7eXFgMicjVdrweVNQQn8kcquPy2fWrEoSjMKmV4th7yq1H",
  "key8": "J54fm3Yq2tUrALPEiwaJP59v9C9xfUNstLQeiBq2wUGwPdE8EPQt6RGeLRmw71cy3Cd2ZY6WyhbnPNx93cp6W6L",
  "key9": "tevJ2xnCq1qK9okRQuujTMPQR8aAH2WeRhK5rrXd38rnjXF2oe9CdsLqoeKrGGp79WuGLnZQGzpmPJGHJ1ZR61S",
  "key10": "2YVY5eMLSEsQjm3QWqBm4kf6eTNhsT1xfp8DhxNdFUS9udNR6KoADyML5u2tJRcQYPFSg4DgLj3t2mqoiPZjobEi",
  "key11": "5BeYUQntXEK69dnzmxFMyAKXEJkxxS2weQwL6i9HgE8ATuuzALeyA8KLWetw65iVgscDsDkKZtNHBtx7WYYuB3Wm",
  "key12": "61BKZEyAD8AVhA2ZykrMnrsyBVqBKPsfo8gw9km8sN4YixLgb8XqNKB1A4R2JtbEW9FRuHrUpB5D28ULF1ig216W",
  "key13": "5rnQFCLBXmyS7Epw8M9U9Xsmb59yZpzM7P5orXYxD6EyGRNXRzc8RJRTaWxxAVwFCzCsN9aJ5cun1d2zp1iRoszN",
  "key14": "7t1BUFK8txNSJyuBbxy68KcBm8G9SWJnpnjfV52CyYWKRC1uHzED6HUeQkGzYYpPQkHUQYmMaaqdY6FyDY1veMd",
  "key15": "9zTQ2cQ7osTrDb1Dd9M11rTHc9jzAJvooN96iLRtcx6HhHSoLHAi6cU9Jq8ugxLXPmeZxXHq7UAR2xjfGCtf4cb",
  "key16": "4yxPVboZZThFxAGBokQnHoZfzwgCMwRRB77pS7QAoYQnBrCM4xdJTF1ffnorqrWziRz4PqsFiXPMtW7SXZJ5xHSh",
  "key17": "3LqNYQL2zrk2fwwW5ixc44NkPH7GSpWiXir3UUGmhQ4Ru6g4bX5tTbMhYFJ19DXLVKnmfL63jRrUEKfFCw143LTA",
  "key18": "ZKBY9ceqWQstfXXQB7Zc6riBh99nwmgJRu5ryVhjcToLmxsJ8ubj5PBrwEcidJS2B9eMSLAwtUGRxcajC2XcRqz",
  "key19": "2Su2Ct7yhUtf75Fd3mk8Ui2ATRCrr5AvBmjgFyU686zQCpxPTiqfH3pcdKGZPfsqdr7igtiZqTZ8kuvGv95mhsTX",
  "key20": "wWGBiWHLAZFXWYSCLQWcsASSkZmu4QYaWjFHgvRtKKqGU6JLES8oChjBKy4Yd8JNDyFWcjckwEsR6aFF6CnwNDF",
  "key21": "4L6GN4wLScoJAZFDh5ko61rD8165HLi9ywcdoFTDdRjSMVh4CDHroMTwvXWf75jivKhiQu8Yx4tB1DKxUXkJctTQ",
  "key22": "49uasbcCUqqTzto99GLiu1miQvDypPb5qnWvH2Ktpc9xSrBouVM5khTm1KqWK3BUg3hW5XjpgDMK34VNtzeQAzz7",
  "key23": "247GokxfeHEA1wQFZTrCYBiGmUm2N7pvTMkF9yJRwCV75cgiWMgect9raejAJy2iew3HmHetc1QF2moNiDo9p3R9",
  "key24": "xHUVzNsRiLFPoTJRmWqZfXYxCJYHe8tL3xUYR5RjkNka1tMU5bEjyha8NyLnazqct4JG6uDJVHwnfKt8o6JX9DQ",
  "key25": "4jBkTCm4ih9wBtL4EZEBqVknTNh3hNUm6GUxQ4qtb4XkePe9cFJQyXDtm2AZSrmJBhBaCinumtVbHiK7WeZKbToR",
  "key26": "216HrHkC4Ym9sSyQAABykyS9P5kZVosBaDJXN2t75J2ogvBzQmvmwEuA5qumcjw4F8yT28B4xL9zGD79CbjGjS5b",
  "key27": "5NhxLpb37qT1va2zfm9GSNAMmrjhccZWzmXajdgWtVFBntuZVNMPoaXHgnQvtZsquaGCyfVCo3MLtv3Zkwk2A6Lv",
  "key28": "64KuJsQ3KvFRmdg7LcyfTBwCNEJX7jX51SQbBkbZqyQ5a31KcwEY1agLx2UPHcpmhDC4HFXxbPSSfpDi3ShxiSQc",
  "key29": "S8RPPFsdbeCf2KFDmURpC2fWGWMtXvq2xpKahuE98DmvoUaCp6q4axzEca82QmP7DBRiUnL415PMy2T6QHadLDw",
  "key30": "kSbY1k3gQ3EzoE9VEZ5DcSLt7iLZkHme8QxfKoHoZS2d6mFBtneAZMLakBSsavWbmT8Ja5kc1YnpA6HZTTHueaj",
  "key31": "mLnDWuAmj4sv5G6hPeKQNYNDgzTVywR9KY7DiUU8bYQkBV3ntrWyBtCmGvjxiZZsJgnFYY4zH9kByghboiLBZMC",
  "key32": "4kRdeGSN7NwqaG7Cje3Wct2m5mPdTqBXDcpZYiMX7y65oTA74dWSTGjjXTgMcejFkTFXPbjGfrACuKscGEoYXPcU",
  "key33": "6meB6ZBiv8s8Cn4AqBMooKMTcLLqbd5rnq6aUSeXuE4LaSLfiC3gf6WPL3RpwE6ojSh71fdZ2KUmJY8uRpmDurn",
  "key34": "5eYmpt3uVowcawb4dZ8jwBSeBg4cQkiwLvGC6YaMsSfMiysrMmhQu1pH9nzrHx88tGyLu81W6e2WjFWjtohxP32U",
  "key35": "sXfUccqHXTDcMxMaLiRjQDfX6TiBPiGizffrJEnDgRPj9wxK4bniULQQhqomAcpDy64y2HwMEmEEx1BFH2ya8ps",
  "key36": "BgGC3TcuSufbtyTzKgahEPZabBm1FBVFuykmMYuDer7ANFLAjmmbEELB3EeSfWtQ3gXjz1bhhtVjpLXW5ueLmPz",
  "key37": "2HpynASpR9Heg1Ee7NbLkHykQcC3UAgqUqzGWeAz68L54hBKg4tJE2AWKcfbjfzEfXxyVJRfyTw2VuaYpoCaem2V",
  "key38": "SXZzhAabkDtvM4otpGE6Jj92EdWfxgqSTqDDQKX4oXqt97sjNVofDJUYKG2xpjZTG2WBLdXo9mqXqyhaEotPgki",
  "key39": "5DAMmSpt8qEWTRRaBuGUr4AH4b5DucUkHsP9FaLVK3TURxWA9p37xxwBKeGZsaWEBsmZeMsgRb4WJf7dayQt77dz",
  "key40": "2XfXuUYgPVHd9ricY1Uvwa5EvBb1hi2oBt5q6mW1THUpDY6mrE4jEnFmJtXWTPpZFgVGU4TnqvLCCuhJUYK67shr",
  "key41": "2KBZ78q7WmMRH7AXxCdEkibH6AZBTdAjKTNbbvR4xdWqNWu9oaej9jCmHwzjq6EzH3JQvkVe9DzgwHYCN5e6QiT8",
  "key42": "5ncTkHAQtWXWFwF5JDeDrtZN6gnRT9RCjtb4DzZndXuP9Q4FDa7AtwY8EXxsYuoC4ssPazpiNvwU2ZszAu6VipYj",
  "key43": "3N1F4wbUpKgmPVpdXsNhMLeW6Zp68cUQQraH8LLoKnEDWGJ7M2sQDFKYsCnkKgE5gV4Jm92AaroeZaJtSn8kToby",
  "key44": "3qZH38XXtTBRYbkRMx4W9xeUM5CGnyk34DvPiPTtmhaQHva8m4wTGazt6RwZV9zTy4Laq5Pznw1QgF2VioVoj7sc",
  "key45": "333DM7sQNKqRcc9Aw9Vfy6jD74tNK53fDv3UFMJkmeVdtSjsSkn1qZ5QdV2ngQiSznNHBTfhePKnjVKtWiFBn8RD",
  "key46": "ZZxpL7RA8cLDLJUsPvRwqecf6GuWcpCoRSJKB5vr49Q33te4SLwFJHo9o5mxsfkFjiFLd59RfUQz9ZjLycb77KX",
  "key47": "2DdhLU5r5mqNG3nKuUwrd7B56kMcjpFSrXZQV9rJ68JqJt3Jyd4eKPuLpWazLytbej9YiFpcThoy5TG8fW5e2Y6V",
  "key48": "2inKqRa7ztkDYFxT3paL7arvUMpP8ZdZpKiA6fG3d7g12oF921c1ejZPNy1ewUEWM2fBLpNiSbT6F4v74E2zbDNY"
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

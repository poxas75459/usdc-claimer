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
    "4dhxYumbjVaccoxBuiqxzzrfQifMgvjWDHkbxm7tHsqz5Tv4gGrNEwNYyox9CQ2bPfBLydWCnvT4x2KbG6vQ5oMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37EVAkE2c5iwjTQwuGxdkrGqmeETGpJdcVMRUmH3BwfArtLRGQ3QzBvkKdUQHXkPLwsMoL3tBM2uC4Fe3qmtATfK",
  "key1": "4vjb8KVFQkQq17UGHVY4TikB1QUJj7ejn36aniMMxnNNZoZ7SQHtQm2Er5WyCCAbsttSkgzU43jd8FizZu1zwcWR",
  "key2": "4BVmEGYy2bX41MJ8AdfZZGGV7JCUysHiKeKoXuNcVKyMrMSBkfgAnVjcCtaze9tYEjPEtnfHDXAmLWxSnNrEs6fd",
  "key3": "4Cuo8ZqoBixafnqCf82AKPh4YJZLxvWSLPyC1vn6FvEExuqYKwjKP5s8iyW9wkdSLz1rBFFm6Ua9ZYnrnbgiTRWj",
  "key4": "2ZCSKnsUWDbqRP1Hf6d6bwZwtvvhk5Qrzhns4BAc6Tnc16i8MhhbzNforCBAtoR4Tp3LUFGR7DV1NDyrXV3parEg",
  "key5": "4WxQ1zfViNApLbsVTed7fPoakmKQM8mbuQZWqPWaCvmfQXWxr57crnRwMttyvKKAvF8fAf7k47Qm4BQhxsfBFVqF",
  "key6": "3g7PeMXN2sKXuyMrFniE8N9TmvxBAeMfrs3HNvEcqHdXSGsYKNYd83LjkGGj43ZuEMRfQPkBCQGzzA4YVaGHmGdN",
  "key7": "26kw4C9aGfzeXg5nTRvGMAjRCF6o8LmMzHhpn9H2RciCXSZdV1rhrnUNuffQ1XYFNcmrotsLpx8MQjuXcFyJE84E",
  "key8": "2fH5ADmRLQN2PqdYJx7DLFGYEVwbkBi9K9rLJnszQsgvuDQTsRaLYVVdXZ4Cw4GLQDhytsfVKVfAJMGLrEgDSrvW",
  "key9": "59KLjYLgwZMxELyCW5SVpxQrcuc4oVzjU3QskwmxoJ3pjEa4Ww7jwSzcE8tqLHwWK5kE5J2UudMVdTsgVTk6jhQ3",
  "key10": "4hVZVmW8Vx7auSBsCKCoCM3th4qJZLoHNT42jsQfY5viVaeaMuSwmg8dzCoZ7Xm39CksPqg322xbt8q3md17JGEU",
  "key11": "5w2P4WuzUcxwqtGdJdGTLgxrGxxka5p8tfSvvJH2AWc7JxPx68EzgtbkUnHYAg9NPPxgXshrR3k12ZP4LfJL9bHy",
  "key12": "5UkNikpwJzyMr5ZQKCoLGwzbSuSSqeYjSMc8i62YMns8tCFkuWzB4uWkBbZP29WVttY88H9pFHcLidtaxae3ufJS",
  "key13": "2g3jcfRiGz8tLkbJqcB4LWnw5egrywiGzEZERTkjAJ9TgwPjk682d8ynXrvEnAt1JoNcJSEGQh9c3K3mw3qmBPCH",
  "key14": "2aKeYWbQEay4wgicJH3qLKD2d61vpxuKqjDUpfikM2cagcWp1LwBDxndLwA6d6Vafdwhz9xo7rQgYJS7N9byQ6om",
  "key15": "64bv3N7waav9oLPikGAdXLVvQhQMMBZ2CpkqmMSwtUeLAhNvrvQpK7NJ1CeEAEsAafxe4AyzEyrMebwJfWMoju99",
  "key16": "7Zkyc7SyGUkazinP4u2ea831rz9e9QHMkABRGfGTSbXG9owVrh9J5aqxXGQDw5RtzwbDrSe5yvcqySMX9njLEH9",
  "key17": "2ZKieEduYgMgjTDTfAkTrbqwxgDShEmXjQQQ5Ko5HGRCDzoVk97G4kaTX3TJQW1RDbe4NPcpxAx4qeWnQUrRs2QK",
  "key18": "4CP7mSfpRmkP1bN792PGTyeKMcp5u7GuBDczTTuPShEh3KgHBrGwNX2CnTUmgthoWuaXNGXyfnguLbKSySEKbT3J",
  "key19": "665JE7fxBGEKuEn2bKuEnebMQM62wxFiJZpoeEWQHHL1UgVaUYh6CrozmpmjqFDMkE716WVQLxpFZenPgqUYARgB",
  "key20": "4EeGHktY7URnE2xoxqutKBU1my9dFk6FzYiY3iWp5apV43CnwJmhvzBSoEsZZETRGjU25TmHoQq5a5TtCQvJ8NcB",
  "key21": "i3LNWd1At9MQnDKhX3EVgsET8FXaooRNxov924GRKjzGgaB8PYuozznXAzFUrAsnt4YZD9NnSoFrQpHL44wds97",
  "key22": "YLXaJV7VSn6S4TbLKuQ4JgaLY2EDbd8qbeKym1tmAX7zKzy19H7dvK5ZBoYgpTxaGRG1dGbq58Kcii3aQgoZ9mv",
  "key23": "44KVXTvuyDpW2xBwAGKYJibESBpD18ffe4woyvqNs66egb7TaKKvwYiZQg14aX1gDPxS7WkWvg5XRhFKy7TyzF11",
  "key24": "4vy99X3pvE26NgFRbqsm1VF8gXBs2YWFoAVi7EXL2Xj4qck2j2ozNkvuNGjuhzPfmgz9uhR2hvN8SD8cNjkyQz7c",
  "key25": "67YAttqrEu7GYN8NowmWyqyBZC9HyAU8WVt8iCEzsC2q5YSk41MNBeSoyskYT7rCHo7D3s83Vg6XSkhfmC5HSV5R",
  "key26": "2Gv61Q5QE4ZQyhZZd3kaQsQFcZtjigiCyfQmu8acH8r3XpUcRNe86FS5eGKFeR8aqHqBZoGq9ZgGguT68QAAkR2d",
  "key27": "2x7HwseHZqL5EwHNj8vaYnZ3Xscs29wLWZeiJHmTS2m2mAnDupxd8LWFjKf4PY9p5cBur8caF15LyyvZGQqwG62u",
  "key28": "5VCGvvTowgVaYirpviqMR2X71zmUEbjhHxbEWbgFbfSV1nPQQRPK48xKDujTT64M9g3oi9bnVFjD8uGZuV5FDRjC",
  "key29": "3ddD2FNwTdrVEjXrEmqDaQ2hfNo2vQUhVxPnSn3q52VGGPfkw727uL6ZNNZCqqjBxH6pPquepyEnvgx7MoqLNHWX",
  "key30": "4chswkAZXRpqBNPTrpFzz6Yy2udGyzkdyWKPxAmXQRZNKCfg7x1VCFk3YqzmffMGP1DVzWxgj9SvCmgpMhTyG46Z",
  "key31": "3Vpha4aTYesK3fP36y8eXzTerBNzBdhA62nfknVMAk8fgH3ss75SESpxfiUK1qtMNYTDpKXVFLdrnpKsDRfJpNiC",
  "key32": "2xVdFJFdK3DYgb2Jc5G1Apww5TFtkZPMfDgFFGCG6nDtg8TfW9eiKFPH5iEW15ucfiexkFZbAqQuxk9ieJYSvRpz",
  "key33": "2ZgrGjj1ud7H9xoZmesg5HXbzFP7Zb1TFCx66cL2VcXygmbr4nzNKHFMhjrFLdHwyZVMHRnug2Nt4roPzfdgxjQ9",
  "key34": "5NieHTBimuPgjDjjYi6bCbUjb3Q1uBSzdcoqPgxWyM9KNvLVPciYKNxEiMvJicbuhA5DvwUmscupoc1Wj9XUhunR",
  "key35": "5dcmMBKdtmU1i2vuWX8n5HioCtK1QaqETYwMW84ekEJefRddSnKpnYwsunric6k3NMEbiaQsnrKrPN1mTepkk5s5",
  "key36": "2ByZTD8mL4ZJ9yFfsHE8YSZRuoWqisV7So1gPKmSqFuR2pTnMi49bxJJcBSZv7tCHn6wS2rBSkXAov8wkP7aUaUZ",
  "key37": "4LCnm8Rm7wzpJqvs5MHwEGsS2KTn48BM5EfDZHcJWa9VEJ7GkcJ6wg2wK82bJFt33vWvj5qtCsyUhZsLvs648dJ8",
  "key38": "29VfAXvvcUVi3BLbfaNANTreqQQrfZJuKSPeBi4BZCE3ifq7bug7zmTfqb9Jv3ksctxPFiRDReJ6TRJavcJwvKHB",
  "key39": "4fCK89hjw8B7kzesPv8oXfetm31qtidX9uNC227XuXkkopD9HoeKCLbNPiEBFTea3uPDUggmemzAWP13JMryijxF",
  "key40": "223QWDFrAHZhTrrwrGSHUbE7pAYfwQoCJvB5i7ZEQAKjLhpmtYBGkeJjd1r4mmhdeSdbzdHtAT7RVsiGgbRh7aoi",
  "key41": "4ktLn5Q1Ufi3XuamWs7BZhsd7CvXLmmBWnbAoaedGZzVjdgr6pnXLvRNydUqAgFp56myRReWczmPYGS6NabLPzHP",
  "key42": "3Ls4EZkeWyR4wL4dW2q8nvKBKvTnsacWkp6RMfof3CMsQKYHGbBViw7GwjuusPcjoFaMxj1PbubgbDtKVc82eAiw",
  "key43": "5gbzF9dFnvXe84B7bY3Q9jucyCTGzVMF4t8FZY3n9aKpVKztunkgjip8tLtMPt6GtEGmhJAanDLvKZQCAsshZyN4",
  "key44": "2wrV7fgqg4b53pgZf18u1AEUMZ3z7G3HSLUguakjEMyiqybMdj6WU5vsTTPQcJjooJpiYNYF4xA9g29bTNtWoZqA",
  "key45": "5JEQepb9vg2n1eNm5D3XMkTPkosYGXMkUkF8FuCx6ViapPwfD9d6EvrY7K5fSYSMfrGey3111B42wCRTmK1SScxu",
  "key46": "4bSqKBG8dcJCMvjVqAZsEhJELX1XNYCcUsX5XzTodX3CV6maBzfVRcbU7hvPkAH591RQotwHxb63CSx9jkFKi6Wg",
  "key47": "32K7Y21KnRQQYEsCSiXzumnazUQW8up3yxYdTsmJZiJPwM626bFiv2nXLfsBFvqfDTXRrzbkzBg6CsLZF18rcdVB"
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

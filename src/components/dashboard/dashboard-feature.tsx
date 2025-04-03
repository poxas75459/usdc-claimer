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
    "3fUvn8RDFi3VmmTYBZfa3HGEZBFsUMVvVEisQyGhD5kT1KRDK5QT94tgDWHfmnRNaRDhHecerkBpnMPUjYVbJvxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "251KgMbBiqE5bAwsJWWyQCcerdM7vS6bi4jJ5mGmcsRh9zAg8DdTaFawC3YsKT47i2vEivu6RdxKGYTFZp9KteT1",
  "key1": "3vwoiv8Fiv7APg8Cwat6mLQKJg192XUNm1XpqSeLDw8yqzDDxsFtfa6Y9854QNwN3RqNPLY6oQTFWNtjHsy1j8To",
  "key2": "2enbUQTBzsxu4Z2Ffnj66yyqTvKYq21g56HdgkWkhA5zBqiqM5SNsMJ1QPAYvgnRcWYnZmrUXRozK3mJ6c8nsv5n",
  "key3": "574QCpTfysv8vewYeejydDhUCvXUFccY8VPq1ibAqMpHYcSW4BTL72GFE8sDoR9vAniQWas4Dptv1PYexpVs8ayJ",
  "key4": "3ptpdCigN7zvYfbChPa6vKrxJJrKypeeCzot1oCisPf8g2M4uHHFwAA8y93u8JQfA6822m7XtkzuARX2pCH6BJSb",
  "key5": "5gVM5gF8uG79GR4j8Hv7yc3p6ZETU4JuMyT6A7bxyMGf2zaRTxreA9dqitfCdVrkN7r5DPg4a9DNTJ8iJGgquffa",
  "key6": "4Ta5Yeb9snoiTaQdgeMtnsU9on1dxGdVKXUJG5rGPgnv2jPNEvM4CXcJHE3ybjhriQTkrETobw8sNWGd3KzhgdvW",
  "key7": "2a4uv7LAiLDkbZxbnBqBCwchrWEoWw9cd2HPrJPE2ri8MzuFhm4c6KMYPQsbDPBo7gW8mkk8TmWCPr5ULjL1eVCG",
  "key8": "yb7isXJg3nvfrzZjKGAeWGNANaYEfonKqsVddGACYAWXdAs4PjufeZviazyLNvqJLr45HA26oY1CD23ZRT8oNta",
  "key9": "261AA7rwmeTA4UxR5X42QvDhW6GAgKb7gFsrqNk5FQ8vttArpttaZVKE8kcVGsoEpJevZVHWqQmX2i7w5JQ8Y2Dv",
  "key10": "2YZcpWEFTAM2CB81MbcnDdc71D5DZbBhA1kWgV2xW1M91XJQV5uHPp9ysM3LSpjwGNhRr1YCMFuyuPwFKRSay8er",
  "key11": "5eQWVysYchQN46gaNt5nSkn2FtgjmSDF4LHZ1zmpLe97hT6MGREBo2pTsEoYCq5zRm6V9ZLJu8m9ChQ2UF95FmyF",
  "key12": "5GL6381dm3hHdfXJ6oCjzAx6PTp44hxziKRZNCdTPtpKEWzHSnMAqKPPuG3wuNjtDvuFvCBtFanEfeyXBureMP3V",
  "key13": "5pa76Vzj8iGr8YxuJhK8bUEVtu4RMk58ou8MhcBFBfR5jpEX9DL8mBdZ2uRYRAsCNMmKekrh84JiyPbXo3uGotGK",
  "key14": "2ciJo2hDXEwM4TVdG4huaEBofGcmgsNc5Nn9mTk6GHff5Dgku1PtGwFVFAQqmAXXxTKHennYGpSYL6hq4J7WrgEs",
  "key15": "cAJCRPS8brgkVUhZaFFvihBZXBDc2ZJyu7QTQTbGybqpJXQRBVrsFPxo2nVEDZsNCzCXxXeHhoBzB7854GjaD39",
  "key16": "3oqkS2kasqRMHr1Ybny2Xqq3RKxpbdcC6vdz89euhnQ7c4uSD8p89NkcMU3Fy4Bt9xQuxCtA7JqyRptJax7L31en",
  "key17": "PMwU6BUN445D5S5fsvXmmJFLmhJ9DEN3JczZU7PJoL8TiQY1osGvLhVwnhNvRuhcWKcAa8JeeFn3sQYZhgMhziw",
  "key18": "2jF8YPGTwuiQyyqC5FymZBFHDFEvQjHMoTfJbBcjrvL1eVLxrvZc9eqSVSPSXETZT9c6vMcmCUiSaFbkMpviysJv",
  "key19": "oyHPSkaiSQ1JKEdz5dM5AVJSrZa8LYhSW2Bpf589tmpVa7soE38WqHyeNA68BYNvVwsCVnxyH34CmJbsqhAFv4f",
  "key20": "5izM9fs8yYaUtFqZmpCEip8XjyhzvcfnxiS7gGYHhXE8Ly2JdHq7qVPF9Z4ECdqTYphqtYHtx4tPL5xe4jA78e2b",
  "key21": "NuJL13zb6iBRhpkTPcSvpqeyNYtnxBWVCXaUUhvAMXA8AawYSB25h6jbFspPespdeFrhVHKGrK7EZJdcFE4t3KN",
  "key22": "jPotapV55awFmRRaDZd6RbGgzicxewHSXGVTm7PpzxisyBgjLXbXv1pZgr423ozUNQSEfB7mh74EyXFTdS5NLxk",
  "key23": "4zf5F1974kYjYggeRfjTpBqXK8RgyrVybkPTGKySETR1fX13ALeX22Sj3RN2rVFRWLuECCbLqswhGSgmDz33YFMk",
  "key24": "3UgpWZbnUfpsPh4eSDAHZKt9cme4uiqse3u24WaEEZCbVXyVT9Q6oNj9z7o7G2x5rbSyMMWGPTKxwsS8dXukuEiQ",
  "key25": "3EB9jasPrKV7FnfPWxwcYuySkXxx35q7Hvxs6ze19amGENWTND9ci7MYKR9HMQa5WqK2iEu9KSX15JDQhHcYVRKU",
  "key26": "2oqt3uhMgdbgvkSXVFRzctbxeAgreeswsL2yTPaopPfLRD7pHPUxBTRzcKFJxnQ532ruM45RautXEbpWWrFQ3zWk",
  "key27": "3D3TFKnoGwXnmHQFC3pfHcRcvCDK987DBQkdTU5hrTCTPaFe8RvXCrDy2JYLSt2CgVAxF54fqZPyarzVPDD5vnCz",
  "key28": "26QPnwN9nKq34vx9xYt9otkRdyUfQpeVQZuEe8ok4L2AVVb6dZxAmcmLQ3W66kWYiimCBXMPDoB4yeWBP8efnyPy",
  "key29": "29EpXPFsSqzEEDgnTPRZczw66BbxcDJqwwqoYZbJ9VHh6YaRxqrkmLY35fUKAHcXcJJbehCYKPy7UqK3HstMhRiM",
  "key30": "3EdR86SkEUC2JuBb5HJyLAPtfmBufQV7JkpteFnGpkPqb6ESYEo8dbNEpZ7zbeh2KvsiomhYzPkK5NxDrMZvkuKU",
  "key31": "3MVuP9VyMgLT2Dof1uZ4NkSuByvjyGLRi54WtycUjMd2EajtDFetK1P9bvEqGop3oaDNXL24iLDadWmQn7Uy4U1w",
  "key32": "tEoUsRrfWc68TUr4JcRyjpCXSE8hjm4CTsV46vTwK2jjYYDBTmKcqKuEVctTw6g2mZChf6DV1PvLwJbxX9bTiQf",
  "key33": "3PKpmSYBQzBNUUNcs2Wucqf7h9jkvpFFDJoDxDJeEr4CXwhYD4BKFDMZpHj5DmzfcvhNzC1ZMVS181oDAFqivrHZ",
  "key34": "9niUPfjTyw2duGgfRgTwKfybXPe7Emw5wRx2WqVu6A12oRDjDkc4Mnm3Tr11YkJdx98K633fLhBBHBAmKYU5iHu",
  "key35": "kSwSPbiVNptF8YK5CsaGivtv7rB7bHqvExFgsPxhpMny9Gu779QoJcWuPXZQFSYfpdjBzxBiwZegkMRWcbZ93xn",
  "key36": "3zC2kbAmuirAfeEpbBXkCyigddyaStVMRbMw8KnyQwbE6KhC1aSB9xbYycxZbHbLC9MndJwXKMXYpNELPYNLxeHE",
  "key37": "4GjbSkzw8jibURe2WqSg44krKm4hJYPNc8ExiZLceMDJHChHqnjMQK3B7XccRTWXUM3pBG1ofKJ16M2j6oZ9Qfmt",
  "key38": "5KqjtipPD49y6tUmeM6jf29sW6aE8wjZdgevHSBZ9Y2tpfAEQdtSdjNAmUFrqRccxYT1SDJJT8gvotJSVT2nAtp2",
  "key39": "4pDvJShSyBqJcPQ9L4ZUzdJfq5JMcHsFKRcKgfUHTA6rKZb6fFXZodkvas2jLuxuRZH1RJQqnD2SKSuur9xVQVPj",
  "key40": "xeAAttiDwmB2aPX8uvvCt9aQw4NTj8GS6D6mT5sbtmwqDxcMt8ZjbLu3a2wUz9bh5VfbJdwnzPCUMtXR7EHbyU3",
  "key41": "2RNJ8pXj33DXkkRBgA6yVp4shQRbgweFV7bKsc5yyxR4hKjELxkUCZi3BThpHL8bscszBX3eJ4LiL9YYLdtxtPgd",
  "key42": "5JDHw5rYjxZFUCmQy4ZmjMA6ATiK7ko77rX4tib6jbLwjuReoFaUQRiZUEaZP97DWXThwu1VvUPf1pVqJATupayT",
  "key43": "4sa3cyzcYCrd22HzGvL5cHm4r1GW1TyQwTeCKPctHysBKMU8gaZPA8ocKoMP3JKWKhYq4qzdoiiZ6faRDitC8yVM",
  "key44": "5ghbPLUECSz2GKKrCcDBroGqkGypoPExxYFXSW4DeGJ9mNXLfuci3paS7x3zo5hY5o8NdMJ8DNXssAZKcuxXWvAq",
  "key45": "5pVtynNxs6HartMSCoeqGVqMXb8ETm761QwGxqejMiNE3D7yyThtvNwzQ9VM4gph62BrzZGShPCNYwCiq33WrfH8",
  "key46": "2YnWBM6Yg8FoGJyfeTbvpFgMwP3Pwb3gLojeD8Ea6ZYNNzZCWLHWZwcQS3GqE4kRvUu7DV7NTPvfAiEQcdJU53Bj"
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

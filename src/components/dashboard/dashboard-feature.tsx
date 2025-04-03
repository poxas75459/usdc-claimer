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
    "3K9q2mBvxtQ4Xk38cyDv8L7pbzabTXggLsrsCXa59bdLMKXrQsdXyxAhkiJSsA76omque8bqkCpXizBJJ8f7VatJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LUrFeqhZxoixe3LoQmfLmPxG9h99tqETUPYNkXdBZme2n6WuC3zZjDG8UVnYBSG8z1h4YYoPPn13TYs4dEpF1pw",
  "key1": "4V7BGTmkjEMvnrkccbW2MwYqU8MshCCwjvSWKiw6Xw8wAZTZCidgtiyeD6HF2KegqQ6L9z8pR6z3B27BRTXMNHLv",
  "key2": "2eRBzqaeuEkG1HDMiYoMisW3TyJ4PTJUe4R818CNmsKcTbCv8Hg6qokLrbB8ihvgKpxxdhjwjgptdv3y2wyfLPwD",
  "key3": "524JfJZhmoSwQHhExJuiEDExqYPEqNYMqemFF66gKN5bP6MQf8L31fEBmQWv4mXU3qdddqnbGLamXG2qcbTBSDuN",
  "key4": "5E8ioaAedjqmzb6fBd4NSCmaW7tn6jdmoGUPumGLLKgiofmf2871LD5JcseAeca95Vvhr3QnBcYKHC9ffsVmzyyR",
  "key5": "4fU5vzucoUYBQvA5BdZ1vqXQtB9EqFAizLUyYWLkdg1HmgELZr6oB84ZoCDrLbXK6nzWFZCx3sEqjciUfyJ5idHk",
  "key6": "5gybDhJcSKX8fAW6QxuZCdbVrXw5cEEEtYGsYZVfC9f2REFKcSULw5xGNpRPfWSKqXuxG7rxPa8pJWLRckVVfWTs",
  "key7": "5hHs1pebNMgLG9Q1hm7q6ucYZzZcRuBNLZTiEKRQ2GjTegEfenDTeH79T58JzPnD2FwmFAa4KCoYLV7eaE31Gouu",
  "key8": "34DAVXF5tRyajvex2qsF3XKjMqJDjWbUwNcZ1rSyHWnEKWzNkHcH5jfcqJoTyM8stA8akhHLxtXP2PxjYXTYEqxm",
  "key9": "2QtVWu14izBXX47cV8craWDMC1ePxqj3eHmJvXwLSucWdxKU1xrnTdmNPhcKE8vuzh3LkaS3aaXuXxxGnvntHgz3",
  "key10": "4Sf4kjhH2h72GvscRcBEdrxr9jw61kPZbwdgWia2gW1awczvgd9c8N9J6ygnJytJAqS4Y7Lp2TQ4HE1z4aW6Nb3Z",
  "key11": "2AyN6jTnMz5YTk2biNFqukPSUpuJXwcDcG2Hzev3EnfxTcHZw2EDWBfSUsjGBqtfRkuSMHZZNWE2vA2K8XfW3ueH",
  "key12": "3JAKurivwbiMSeoiS4kqjc6NWhh8NPRP7E2mRV6ywSkXjNTWqWaYmm3xRznDWSfUz9FFVmvMHYJtpSQAnkAer8Gm",
  "key13": "5Ysaqy6cVm6sVRucHf4DS7vd4s59xoJBpDiukoUgMxKiajF1ESCAorpHa7zuGUnFuBLDq54pXZP8wkht4y1cBSdj",
  "key14": "4wFWqN3BBbWpRCGEYyw8Yny56NUh7f3KpbwkfBt453BvsqMRoPpUxTyRXasMXQhyRYFCyszc1uSDxRTP6VCQNMqL",
  "key15": "4ZV85YrdKJTRHqFDhcno8msAjBZvGbBJY56vj41dJ9uF1Kptv7orTmCKey4pGEqNRMcwFzebVPpmhxnRPnz9EUsW",
  "key16": "4Jxc7CaWhfiLJNd4mY1n8hdzPSZWuYt3Jjf6aQS8K4fbPX8VSuEPjYqkF2BCsDiVpCTVhY53uhqHCEyWJfiGi63Y",
  "key17": "587wb9hpSgqE4WJNRT4pa8Gj99PAfeGnDVLjuhdRWJhea4vp5YLV3H88YW886MQvQPD5YB5ztxbM12jZ7DFTYnrF",
  "key18": "2c6gSJZnjuuB5cQe8qXuct5HjyRcKScUWdeH1XWJkxCX6wysqPeKQnpDKmtZL9PCaF6nZbbdnXv8MypW6S5h7fJA",
  "key19": "2tBzfxP5Xw8invB3UT56C4rH3XLt8ZYPfDwaGKydVVPhYjMjZfi3P5LihQszfexNVj6KU9kyge4kjvyfeUj1x7qi",
  "key20": "5GUZSEKHfAYg6vUN6DHR16Bd26S4AFuSGgvjYpp9zxpQ2CjN8GdMWJ1A2gstXgWpWr5ew56HidfZGCSVD1y8bnCQ",
  "key21": "55iLV5NcBKZKcBwAdBe3ijiEeWjN9ffHy45viYmN58WKvmFpKeGXjxDN18VJGV2sRYuD6mGmURxVfBUTDRyPwyLN",
  "key22": "2jiPxPY4acCpGUPZV9RCgXFyWcniwBN8MzWDV87TVrFHLRfs3U8htGc3vbkHZBJ6xnTHKmANFsRR611sZBECXBHF",
  "key23": "RK5nBP8X25XZ4WZWoZdwLPcdgCvpvmMSUdwB4mh6QUvQim89Y1ggZSX1U5yzqRj9yG7rRdmymK6ZZEawFLARkyc",
  "key24": "5S1GCj5rrSm3xstYmBjZkvqY3abNdFq1Jw78MeSLeQsiNvbde1hvS7RBrBcYoVMJmeyoKAch9EX8hiHZhXUPKKwy",
  "key25": "2xNTpjxTFWj7nshLshEAsrspxrmyC2dob86S8nSnoLxdBACr1XYiMJFsd8jFdenq75eSJn6vewHKpPtQC524kBQt",
  "key26": "2X2mBCqTHcdSt1sCS5ka5AU6hpWuMWp8BjXE6fX4HLqYJY4AQXMvcvK4ZEXeBooSEsSJk28mSMio6QGWd2KrccMF",
  "key27": "4hwR644NreSit7KCWjr2s3ny9NcTBnHAxsezMkeUbNUyVUqo8Egprcwwq82MdwsatT5nJBD2ixG84ocf15dSbR3c",
  "key28": "R2rtE7YE7VGTfXN3M87msjw339dJXeaZvQgmrsjsgnkTHwKF9seo4fXGvj92mKBHyvyf1kpTw2tqp2mzyFW5oXU",
  "key29": "4nAu5grZaEt6QU9AmDEcfBYyRZryh8zNfz3DdM1yMMekFso7Sc5eSEHuMMmTfZzATW2fe4Sc5Wskr1o95FEZ82JW",
  "key30": "36R6zFctnTkpjV5W6m7kdVseGGGeY9ce6bkayTD3RcPe8urtcWLSyRJbieTNEpJKjvKvDLqZVfFeWwyMqmaoSDUX",
  "key31": "4evD61gSLmdH7fDRWt1YibnLrPvsj5s6JGj1sDYU2qP6FiM8sG3zo2YKKVB7s2dVrqUqBT3F95ncWDdinjzyqSmW",
  "key32": "MUFYKwHDxjwA47tz6zwz3hYciSRV5b4o1vtQ1PMMSpEgSoD4zHjHid7zUhHMKp7v5nvLJgikPSaDkRX419GMPEb",
  "key33": "4qPyXbjCPKpBXdXfeHPKnDpcDy4vuhQzeWTRkoZaas56uFyQN5B1H1ixsq62bfp3XbmxaoTVVZDMiRdChxgN4hB4",
  "key34": "2c7gX1JTUyHzZvSmRmVnMbxiKhRtnHY5caK3ai6jwnHPkQqK8TenGqLvmarn8ms1EiGvzmtEw44d8izq9sTNqP75",
  "key35": "4yfLHiJFEUbCTJev8EWX65dzj47uKatBT6huwzvMFMS2cTkLmyHqGZiAxxERubths488hzSmkmHwqDTFZ4rqZd51",
  "key36": "21Kq6B2wxgV4c3kHoWVjK9R8HD8EE2GVr67CdYY8ZJcYjwVmEExrXhUGzyM5fYfpkgbs6CpWMvXJdqhHrxJHhNTA",
  "key37": "35h1GPv15ssDCJmD26zvjusYsRb4pXcM2RhaprBQe5k9A8Mmbd4yFVX7E5EjAw7vQ8gVxVyRMmy1mWzUu8B47nyk",
  "key38": "65jom99gxoTv4mwzhqgPEZNFRMYHQvqNaBnTovGB47vwUkagbKk1XpcHezHrnEqH8Xd48VWWdZcagFX2UQNw3kES",
  "key39": "3LzFwhr3MBZe4FMxJDAmRdt8Msyf9aKf7dHaDvFDNmivuTUwbvFtsassaBtt4mYxAZqEpPNDV6EFRpvxzdxnVxVw",
  "key40": "4UJBgQQ1PrqHcYM1hKGRGeFPvnbyPH2DUUVN6Ups6rdtoYBUcNJCs4U2Kwv5RKnMPPR6VNmZRDjfkJHQDNPAJ4hw",
  "key41": "c6cw9252uNXyvVLWjRt29hQ6DuqGFZZMGdX2dkEwXpnaZR8AJx6wzC1wA6nVD5bpFiEWsPnZR8a8o3MXcVY4Kvb",
  "key42": "5wtEBoeY5yRywEEAKYurg2g96NSwwNaQyjmcXdB1Ej9aV27DXFNJbum2t8tdYR5opZpZjKPFQra2YMdfWjNUDruQ",
  "key43": "5XJzx9keTRje3z5MUWYgHpkhkAiAGksR3wfc574LzDh5rCB7qoRPA1546nrCyS13DqXQAJeVbaY7VC4CAKHGajir"
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

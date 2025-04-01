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
    "swEPoihsjvE3EFGeicRr5VMLsRjqE8LFro39eX25JcEwQkkqZWZEpn6Y53WdouGrfD2FmNTPVT6kMn9ee5mHKdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25DTTCfy1iZpd2kZ4gZyUdF6B9i1ev8yDtuYfqqQARVmfEepqskcp4J6BzFYLQXvhaSsCpQQVHC7zrGB9uYnh5fT",
  "key1": "4o96BVHoy4ze2CvPY3EZ4ZJGdA9rEw52sKf2MrBezL15yoN7kFVqzP6XrLHnXhY5TxSCLPHWBVSodAVnVt2at546",
  "key2": "5VXLAW97UT2x6EqXVacY3LL6ey2UWDRjvg7gaeCbSGGwZRLYZHCzLhYPsAjA9mVJMamqhp9tTA1xBb5A22fAoAb",
  "key3": "5qqj5aQV7xxJgGRgS5BxVq9r9uzc22gYM8pDypzL4HdVj57bJRxJ4oPQMVrPxNqBxWCUfBnBFVfpiUeCX9n4eg9a",
  "key4": "3oydEV5BCujJYvxRnnzC2u3e4XTNaJDxSvWP3tzbNfvQKPPjHaW1MXsCu4Cskh26fFUoj2REqiv9zLGmqpD2puiD",
  "key5": "3b2ApcxsFkrSqxV2frzqrDvQawpYG3P3cjHM7wgXoBzrg1YZ2YpX9gHdzZZt2kL62DXzGbDJJPUufxvFuSdm4oVm",
  "key6": "4XKNnbk5i7zN3KszH3a5qTzFcWeAm1EtqiLdhNWm3kCYvooZEwTiaU1EJvpPj6cTKKQpifDLB7KuaeKdRs3ppNz4",
  "key7": "4kHQRMcjsjT5S6Dkt3WS3GKWT5iKDxKkwWJEXCUPibmZtS3D5wmiWLVcSbkzdtVabf1ykgBuP3CfxwMdMScPxZWH",
  "key8": "kUpYq4M1cLo1uqdJrSbYjsBPQKssUxJ9barMsQUXMFaRQwVbgr9kmQQAWGTZLdqH2QsavNgTnByEkpUQdGfhY91",
  "key9": "3sBBuUKjV1ZSK7EMYhyrJkPPtKNn2rutKNWRRkPc2WcXRS3NYRPC1kWDTih7U7KDAScvYQFt5XRb5NFuzeDYQrqz",
  "key10": "3j7hjjf8SGxzgTKnmmtR4D8FJ456aGwy5pWi81eyNUawWsZZ2ziasijNNzgUdaeKC9t4L4arKKLZCPpaTY1q9DFe",
  "key11": "44e5DZyLRs2stCnv9Tz5Sd4DgBWZpFmJChDwf4VRcaiT94yGSN6FBc4HKqnvK3Hus8so6AxYLK3aumvM7CbKgWBM",
  "key12": "2kT7oA7BFCsBt7eNb3bmrBkP84ssThZqKmRZsh8ZnJ6TXygXZRV3JXMAoNRCHSu8fvcLzGDQC5zWy1efo2UzpN4q",
  "key13": "iNUu12p5PQzPD2XLoqh7RHs7gZeDxMDhYVMebtUvGan4egmghthQ3JcoEqhcArMbrH3Ft5UPbvvc64nRuoG5oo9",
  "key14": "5j7jZqB4Da5KuBcpTFoXajPiP66QdngW4HGeWHcEJKdya4XJfhyVrz2U9x4XBExHuE82vztZQi4Ar6V8xzZNwqVW",
  "key15": "4XBSy7Ya7XXQC9fSncdj9pufffZW4zcwgvf3Gpacuv6SbXBha5jseYqFyZsYfrL6tV5r21My3PubigHkNca1Gkpj",
  "key16": "2FmzWjSZMiA1HHqsedKcXoCb7vxy8mxLiKuGhqXhZnBgDuLFYF6PuuCwrTSfiXghycnqbx451tA4tGZcc1wncmgk",
  "key17": "RPCxJgxqrafLCrbUBpSRmqY9RzZjuEpP3MofGQiFRjkwSqH1tKaMG5ARrcYMUWhto1m2d5wo3q3yjv8U4Hza1ak",
  "key18": "3WDtcCpFTcWCTsSNJy7zhp1pYfc2qP5NkXiseMxcgQvjqYmvwvnwUYsPff9tK1u8Hnax1vTZjYN9mQxvbZrdWzmG",
  "key19": "5agh1upk3dP4JyggWza5kymUsS3f6ka3iWjSttxuaMr6d7VxxVJGbfcDPrphMZbWLuCT2uArKieEsi5SqpTtRXmA",
  "key20": "5o5Ez3Zw7CayiyViQ4DpmF7EwtkgCHeEeJ7z3hhkJCmLxSjNUdCuxQGni3UKAPh1NqdWkWjPbdwoD9tRJvad9pnf",
  "key21": "3SRhU6qBMfgxUkep3nnhQcMH5fgrfmMzFLadKE88YKYv6ZsU57WvLS8Bt7BAD5akNQ7DFeVpNFhQ1qt6tHRNMopu",
  "key22": "41UcjbtS3i7MZTsCeqGHKqr8Ht5iyf2bt7X3aX9PYYsbKY4sxBchTh4M5gvXDc8e2zz7RixKVC4LGnErJnkJvhf2",
  "key23": "537x7KtaAZvpCwtKJ8AjkcY6V3K4nER1cbHr6Ss1sLQzoACbmHQcKhKxVeyf23r7nHBaZed36ZGyUuMc47BNaJ5w",
  "key24": "39LdknDLP69WsQ5xumaVi2qG3ambDKgqrSh2PLiyizVh5ekZxEDfK5KjijweXYUcWaw63NAtB1LYe6eXFRZymzeW",
  "key25": "3xMHxHQxR7d9i6ayUW9NM4NqkWRKAJXQ2vRfSx1q2caBoGMrWPu3mMj4xuhSFPWYCLMpdTvefYJEwDGtaopcerq",
  "key26": "5mtEzKjNjQ2yxCdNdySdMSjgo7y5QWFSDKFizw9DfMUtzKnuXtcZvbv4T8ZDKQUCm9S5jnLYh2tXXab4PAG6CBCz",
  "key27": "5DrFxduv2PoCagYQcRqVENb9YMTCdTX3JxgRvQCSpeJESb8RNjAU4EGzmscv5PzRkhdF9ffF5hLaz9Bo4icGVdPp",
  "key28": "3rHZNZJnXLLVBhzwEDqT2x6yHqGND8Kp5jyFZPCTyaCp5kPiStSvKFrwpmvFBatjfQJ77gBUhxhE9CeBsh5a4u1S",
  "key29": "3s244etTPAmse4YeYnsF8ViWnnJvy7fKdoSAGnkof3moPpaWx2UcMwJ56pyBNn11fEwyML2jVxE6CeBF7zPpCcbn",
  "key30": "5uW14ey5x3dD7RpDhEWsFka1UjDc3rpgL5fn4XKWS6bbMj9BLY5cZfWy2SJ1Ducts7QqnvnG6zNAhGFrzgQ8z8nQ",
  "key31": "231uYmCjSmxqUqKBnh9maY8uvQJWJVZKKp9QZRhH2rVZTHmJCdLrVGusNdvy2WsVYcvZ8fEuHTNQL6WoyK4sZexg",
  "key32": "4CneLuCeTiBiyD4R5UK2SBr8yJFbQEqrDDefJnhREqYiLbdJZqPBpHizRgasyHUaWRj4ro2FJSF9wPcmhg9pZA1k",
  "key33": "2rNV6P45jTiAAovbFLGeaEjHQdG2LTS2ADnfGstgHsvPG9Ag8bp1K1z4rXaMKt21J7KtzzEKk1EEFf5uHwgP4nD2",
  "key34": "9HSfopAy8Ra5RH1sS7rM3GJzX2VYDG1nZWhGzxMZthfGpNDzQ8eyTFUE3Se3Nmi2ZaRC8qfkURYztdmwPuHCMUc",
  "key35": "131hHp5xxtWmNFgTMr65j6Mq7zKddBasDCRcP2eqfe4ZKxiHTqyCwiKGikBhKpkN6kXkJ7bxnwCfL84Tzp3nBfT",
  "key36": "5LxgpmNefus2pCDMri6va7rtZ5NPFw74ueaxs8nzfJJNcG1ncVxCnKH4AmAfT7swKcY7zbio1iNiQgJ5FvvhLUJF",
  "key37": "39s6RB3Nnvjp7UNXxeYnNkQX5D33XqUWZSismcgrNZYWmGNF3NLofL7URE42cdqq9q1LipBHhxGC7GgZexxM8sLw",
  "key38": "3qqv6cnLVcKpaFjqE8ocrLkogtGXCcRMxnAWXRfk7kKoB87RtAw7z7znY9MD7dSzp43Csa5q5KiiTvhedqYpMLG6",
  "key39": "3N93RyRaxAa53XZHB9HrRaXvPFuzgj7Lbr1fUCUnrUrx1NBKwDLfBCGjmqqCyUaN9w4GwkX4VeSQUevMQdMoyegT",
  "key40": "3UffcywhNjZ5VSZushgRbhXr21R6KynsvL3XWK72iDXCnvpnH2JdX1uBtocMFizrwtzDGsmwkqB1pJHCuYK7GBZ1",
  "key41": "4ZKTWK8y2D1LDjaKn9PD2qssxonrhSL6ySjzW2WkDTJyaVsb2zcdUKtcXDxFEQjVp7NpzsPZ2B5iyHQUa8gySV9R",
  "key42": "4E9TSjcqLFqWH7Q92x7hbd8wn2unjcmXW3EMvD4NzYu65Q7qEEKk5rJXH44oEf5odN3du8U5xGdvb6HK63Ycv6Na"
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

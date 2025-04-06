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
    "3QDFVFkQyeSfk6VhHfCfYB2MDTnopMzJvbZ91cbjZ6a6sVJPjV1rAZiAdZxSJo979rW1aEn1REKquYNp6NEE15TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7f9S9nXW5KZBMyunoyVM2JKkAQwg488Nw42SmLK4JQYTXWAuL6S5w1KgSgLvbRRSs4gkdcjPPwvB43cycnaHqmo",
  "key1": "3gCWJA6MG4Mzc3HYUxY2VVf8Hz2BeMZ1iggZyrGcFEm2wtQ3JzvhB5QybqDo9rv35aPVDvViZ7M9XVyEoJnCqLNK",
  "key2": "2FXpMnDKXPVX8TPN7XrhKx88n3gioTBUcVya6dMspswneC1hf3bMa5Aze7WCUyAyJCAC4JKbi9uRArAUVd4cBo7q",
  "key3": "4oNH4ncmSfuuaH7mDRvm8XLjAWPmyk7E5ZCgQVnsd4nipZ6JUN84MrthFbHAq7XCgvnF72pu8GPa8SCAUFqR2bWM",
  "key4": "2YgCf3cDbmEaQhY3h8NX6eWw3rUbcZaJHHUbXVDtVZiSJCLag57kHFvx6UGXLdqLn9MvetWqSZfVSb2uNCVeeeQv",
  "key5": "67pMqF4qo8S5y5YfGcqZNjYvNGL3WDh6jgGdoUHDzg7eTyTTmEXgvRXoq7HeHpyVxvgtrkSvHeXGqSQY4pcYKRqM",
  "key6": "NFvoBz4qxJjyJSs1wKB1rQoc7SL4tS7ovd1gKdqcdGQnEFRjWT5vjvt92NoTeHZHEcr65D1w6MTR6N1inYj6x7z",
  "key7": "TrdtrJLKCqFA9B1ntFB679UZ9n53zuC2zkcFaThTf978sKGrGMf9PJzTuC5veWUUDX1Buf7NB6A4urc2cSHjBMA",
  "key8": "4sVmbpbv4Jz2KsCyfMUs2xRUhFSbLJMjJEHdrh1pSK8CHBtXWdi7A9insMxk9hgYExSxb9obzrZKC7uQ1rSpiCzF",
  "key9": "4bDwf87N5MQj7fZRGjVpLgDe6YWhWEmJ7HMm8Joyv9RkUaq5XzQMhFW6Jbdi56xcvY9yVidtbFFg3J8UfxS8MTE",
  "key10": "28wtUj6VuFGLDximFBJnPy7k763cUAx9EsfaxGmeNhqhMEykRjiMEMH8gpwfcJvYqScDoCwMYRmPMkTRamzhRDBU",
  "key11": "2oU5injP2psasxnmuTzwUVhebSi71zf7hVyqfZkyLG4b2V39dahjJMdBEVhoS7E643MyKDiefJhtkofHzNy38pEP",
  "key12": "4FkUcBuQ7M3uxyJ2Mdy4vGw31eeWe1pF1PbkekjFPezacySX5odUx7htTsknFXYDsUvHcuuUx8sS459gi32keV4K",
  "key13": "5Kk2nxn7mDFZaoEb5pdJaWjPo992RZrTzJ3BVsB68tBZTbMrhVNRey3iR8rJjKH6P79r68VQzy2kKrpiuwCUFpnj",
  "key14": "5KxMfUc7KwD6qoDmdco48ucnWzwVDmrskKzZ98Pm3SfcT5mUFcV4K2PgeSHPiSBPvJJwiuB3ugnGAFSY5DE8t1NH",
  "key15": "61pDtAH2Ax5fKLR8nzbXGYFgn1Jm7CFuPP8AstWbWfyDSWRSgJYuA9zSG9z7GbiVirskmsijU5ZyyFvgWhPTQyc3",
  "key16": "54X5hHyNQhTxkoHtH8PSFK1c1K7uhrAw2uy97RSUHt3Vh88aF875jiFBLbnZGJdTW2fkhrWPbALvZKj7evivveL9",
  "key17": "3nHgtnCfuMZWk7b1rkGczszmXf1974Z5K13Kknf8bxKFfZR3qZUKR2c1U6aN4s47N9c7bqb8bRqYS2wcWt2mK4aj",
  "key18": "3AmPheXXuA8tYUWkV9F9ch6kbGX2bePVi6uqqtCY9aXyezfi4ygV1aYSjWMAxzpJbuYZSFxjw5AYucufreQHtLN3",
  "key19": "2HWFvnCZvJdnETXqQ427mPSJHFRaQyXUgXaPKo2v1RuD4TMum1yjQa3VeJZ71fhNc5ZeTjcoRfLxt72xWhpjP41z",
  "key20": "2kGSD6CT1JtmfDbsaTMtr8seaoZTxUNMiXxr7nFD9sPCwbUHnygtamVLwNXEN4Gptty7L3cfTPhPtjxs3WcJDmRm",
  "key21": "4m2NjoUie2p4mFoZPibnFnj1C2KTaavcQDwiQ66rCkB2vPejt6NzENGBnDGngq1krEodfE4itpZHPEEHt7SLTwA8",
  "key22": "3fUTQN8dKT5YQrZLuPC2i7EfrZL2jVE9o6hfuouF6FQ9t5wFa56tbPSjmqTckjEZVaqZqAg55cVmuyaRRyBN18es",
  "key23": "5B77c15GubNekBguZEi5NSsPXu6DhYLPbP7o69x3hpgPf4srY9Yc1ZfikLjJyrwh1Xu9mRmUTfqYJfKupPUwczej",
  "key24": "9eyg7xH1avGd835hhqeiCDVNACkCtwU3RKfkSKZEP2pR7LJ4wd1VfxqRMx5nBUwxdurxnQhKxqTAEfUMtqP2VC7",
  "key25": "2fHJH5gbHoyfzAYcfQvsqaFbC9zDz7php8V7vXzLfeS4vgsUA5wo4Kppb25YpPewKQTWTErzJJuppsmn947vJAsr",
  "key26": "g4m7R3XD2vys22yKSeMAZ9QBZVrJVu6SuX8ytmh7wBjqk9qBeQYsrLgNxLWUyjhsk5FtxtsxPMFCeYdWeLAti6M",
  "key27": "5WAHC7rn5biKxvmiX2RufKdXgxNphPmtY1cwfLkFm551XUKxiGAZq2PxkYaac53pd8BdwUQGoPYnASFknUfdAtx8",
  "key28": "5kye9yQfiKXA5hRDz5hLZ1xvfdt8NZ6Tuw1C1HQUXyrkMJuiNDnekuvDXGbPDMaaU5GkP78cCRgux9c2t5p1NWP8",
  "key29": "CoALwJnA7acxkfKv6siGSDcHSnvJaWaAq4CvX3acwhnzHwtoUbGCqggqM65DXP1v1LagmDWF8nt7WDr8TS33z5w",
  "key30": "2wpaw3KuDtg3faAYnhapWSsPQtuccaQ9BazBaV9XzJgcshC2tidkqLQmAzfj2CccH8RfBXzXeYrZcCH2MLqcADSr",
  "key31": "5dCrfjbbRXkLqcDhvNnrXkunsybiP281J4BaH8ujHp3yNcjyRexNKG73yFn2i5zkBt77kNhqjS5bYsnj2FYQd3m4",
  "key32": "3BVtYbRzWxjbj7pDTZg6hrvaoSPWTqGuV2qP63HaJwZ9vhWuEexfBSign5TE8frABkmQGX1bzFXBvGjebNMxkd2Y",
  "key33": "5pfMd6mfxMPoL1YrGBLTgAw21AHz3wbcCbqc41SsUDQgbuhJQqP7MwbdU66wpZetcPJyFQrETSM78ttWDLYafXpB",
  "key34": "3FP52EvpMbceD1nVo95GgLesfE56fVdhSV7DybMqM6d1zTT7wY8U5impwQJCgbCpojZdM2BjAnb8rn4CNUuCxgT8",
  "key35": "5nuUhvQfHj36UoLHpqumyDTBn96u7RSz3dQYCkDFwwLswUdzW9Fudg2pvTd7dxrgmvsEXE8RvYMgURbeiJVhHvUD",
  "key36": "4rxSku2qeGqYAhNDftcnWaKRLA8HwRbC29BPQXoVzRS3axGFzgHgaFcPrHLWoViUGbupEEZhHqk55jBAHThnwsZh",
  "key37": "PTxM75pjqHV2gx14NJFhDGsFCsNP4MdyepzesEWdbiosukarGqfuhGvdE8dF2uJfMqrcsKx9qNfTSyNFfnSg8Nh",
  "key38": "5fexmv3Xh9xBsYw21GkKoWQEsZNMPQvVd23a26v8nAA8mam3am4XFWNE2sBdZNKowgmKkxE8HP151bdw9zJcGcp9",
  "key39": "2fV1kbJgpiTxYKSC4QESheE8qMaFeXawnB26HRnQ4M2x1oCEMUC6DYaLrkf2pmfnmYnyiPAvvrqNaViqF5pvnSfT",
  "key40": "8sSqfDaGR5nYnM6neZpERbxau13Ly9AuKT1GHctQdj51N7ipaCbYmgnmQrvNWcKyH1FbAu1a5tPBnzcWcxeXokm",
  "key41": "32zaHPNj65qAsqwEEonoPpkX8CJixPA1wRaynhde9nSERgJHUcMgSP58oXXEUjFQk2syzKqj5fQnE2wjqWSNxV1z",
  "key42": "5jEgrfFU4DaZTzSPV8XrkT6pza6K1PFXT3QT7J5vRVxw17jmaWXfKNJsWJYgH1Rp7kWfCqgASDp86JC4s2zG7GRq",
  "key43": "4UxvwuTsxZzvq9pqSBcLZfLuRLXzn9fWDzo7hRiYvML8xeYxoXveQ7o18PatG7z6gwnPFKX8JBucL9kCNSxQ7xfR",
  "key44": "3cd8EWT7PpPNXw4XevqMJwwkzXDQZWFBcWpn4djBuKmjcEBJVjJWwiMenm6zCYNVwkPVV2n9SycdHj5JyF4dN2MF",
  "key45": "5KPzMU6ES5vZThgUstvxH5k5AoEYrptMDoUqRf9UF3FETL9aB3ezoVryTNJra9jptLyEYyHhHk3nnGpoz94ENBHm",
  "key46": "3zn1L645ytQfSLgSs3QTqWoyK1RvfcdcMi3TXvMJdqvk8faSP2LffRrgC3Txs3muQq9yq8JVr66y2hQt53Wsq5T3"
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

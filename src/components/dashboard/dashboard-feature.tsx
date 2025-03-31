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
    "4STeHKn8kVc6fNwcTnkfPLsF5Cfk7aK5WizzBvhBfHGPhiadAYH3r6F9nDRwtXaRsJyJtFKspS7BRMoncY2m2H2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmbxHeNEVPr9sw15Je8hKQ39sKoqRoB1gGcDwUwkayZF3ZaQirYNLMSWXW9G9jE73kHs4GsCh58Bs7CT1jsvxvK",
  "key1": "4LTfpzUXNtkn24TB52hdDk8BXX8jUGKME7pwwZVRkqXT8EdPNGVqmofrVDa44cLoGSnkhXDS9RZvRkLhhPuwfuau",
  "key2": "Km4rAtJJrd45zjJueG8qu2n7xZ3gBmuCpCxAqPMmbQ3NtrpZ7NiKiaRrhGfZwZcxc8GQ2F3XBGHuRVVzTYFqGbJ",
  "key3": "3KhwJtxATzXjY8bhWjQbM7GNtDYGenJ6xUJKPQF1TggebbCEsnpF6DVMbRASksG3nR6PDXCnRdFWPVUSqKg9hhEg",
  "key4": "32yKKFDg2MShb4jdxSrJ1ge1GxoVVF6T7oNddHK1VuPKG4Mi9a8ECQX6kw9pX8aG6MJmCSw46JicA8uZDrLAgYrH",
  "key5": "kiYx43473NSGEQYw2H3CZmNFxhRq9pgizBe5VMriTCevLKhi6AkYPZsenD8uybprgKQqCzwmBc1msPKPwp6PPqq",
  "key6": "5J71hgAtJUj4GzQLLcdSRWaVenWr536J2xe4kdGmo2Bn9oEce4hbSSeYxb8jh4HaBRYyyYGr32acGTnUY5Zuwx7P",
  "key7": "48xY8C7D79ft3ptAXQ6sFfynHk2Zr3fbW5EVBL8mV9pzb6g1HXh1EEfYW9tZzMg82UktbM2SUaF9E7Gk5yj1d91N",
  "key8": "iZHzQtPE29xfZ4bgZ5YTk3AnVM3b2RhSDviTYWGQj42KgH9hqh54gvHBEv7h8gctm816hSPnUzs99AZKSdiDSMo",
  "key9": "2AJNGkAcLWvRi31KQRAZZpwZ8zJYb8DpABJV4sxCC9kKq6shV222VtU1qWJ11T2qHyxZgKWwLuXUSXu6Y2vGajCU",
  "key10": "4PZtZ1qRtJqWRBz7VLQSaxtJ1EUxFEbTnL963WTTXCP3QGVvC9gArUaBJD8gbYmfVNXtv3HLtC3WFh95hTadku9s",
  "key11": "6rwdkGTxppoXsmhrry8cFTuaNGniDTTVKR7VLMQXiueZ52tRTA6rsjsENsAu1ZAcAXHxwd4Ekm5JFxF1m5hYSe1",
  "key12": "3xnSUjRZb3YxPPnrGZikKQxvJjg3wQYeH6aLay3n4kgsc3zniNWA5xYxUiFiNTsFf6sj1Q4zn6KDkCbTskoS4p3C",
  "key13": "4YvNEZ7ZALxRT2AVmHaDdCetVaugMx6hDoNee6gYzqK3UhjVYJ7ynS3gzszQbHqiMLB9ibVdzjpaA1Ja9GvocvTo",
  "key14": "25LVbV3gqdTYqatj96rcy6FgrhcFfVTNgxM4cZAdL2RM8yrqt62ir3MF1dDTbMpCSMwPcpmTnc3baJ93y1ncJfip",
  "key15": "3Dp7mVhrhH7AaFetk1LR66uLGapWPiYVMEuPsn82B4NqhgRnNN24jeDR6wVwWCmh3YMpJqjDUqKAsBzyufQ3DeZK",
  "key16": "XMpc1a7zZRK4fJZhvkfciV12mpjUQCCu2imSkrTC7WRnKf3eUtMNiNvZJtzXUo1ptA5wYfnCGeL3tBDkdyQoXut",
  "key17": "CuRGLdrzV2R3nn9VKXHyM4Ph1V6m7XL9ZaXsRyDExjNSZ1MDSeGKGBei6NTz4NMvj5ej8KiqPSntvAEHhw2cdgF",
  "key18": "Y5XejMoQotTQ2dHYJHPGpdJM2bbaUwU7ZjNqMDcwyoirm7sUW37hNfpzQnr4bqpEGDkQ9NKABgz2nDiRLvxUjeP",
  "key19": "5vxDvaq8nqNL328DQGovahZj8SRYZBLt3DBzqeVuu8CPUS4FJDqdZWzgff9WBWKBg7dzEFkQ2aXctpgQ9t7JWLJ8",
  "key20": "3M931gJeEAsV2BhkScAUpAPdCoGWKuBk6pUJG2pG3cdQMzomudm6brZsx8qBHGV89vKZ5RreEvajKH5kzSADkCia",
  "key21": "443xWGaEf9UcMDNCpnHo3gm3HiFvPtLBqs6extVe4o4MirxED2czWrVdQViuTcxwEnF9N3HZojWxEhqzDJA1ounb",
  "key22": "64cWb499wGJRqthtXjPZB9UpyUH3LUdV7w8V47NTmE6SExKREkdpxj99fYh2cwg9vY2jEcBmvuu47EK5QR7XUj9J",
  "key23": "9Wfg8rLjWQmow4rsLPeqobBU37TCkVSanM6Z5B1kaMT8of6PNu6o5DL4GYzDZngV4FiEujUKYGKx4AjUCvtBhhD",
  "key24": "2RmEpY6GBEceS9EMDbJaUeYsJmVNJAZQUiyEAdYvvSM52VqmVbNi99GM9ow6rhzJqnuyPCqoZsryQFVUD4Gzfo76",
  "key25": "2n9BntZPv8rSG7ozZgg9MEiLrv2SfEp6MpW96AemU6pUyogBJvaKFUrZS1hGHrL78DonscF3Gp4PkMBnKBLxsbEd",
  "key26": "hyhEwbUCmzt4KWfqW3LGfvabfSY2wybH2onpibohDfjkeBvocypC3RsYxYRMwZyCJ9AMurkzoC7AHRg6SzsWnem",
  "key27": "4emb1LyDxGpTRWqwwPFgdZ71FYpFRU3d5hcKKNp934Xd32YuMRLmnxJgcu79cx7EsMt7megxKPGdDSTdE1aQE2Ew",
  "key28": "5JBQfdMZXLjMPxX6AosEKuUayPibMtvQpFfM3sfS6yVu5dFMsTcRT8S8pDWmsnu3CSPjiLx6oawKk3U1dx5kMNEo",
  "key29": "3N1kZtsAE7HenrNHqUL2YZ5j91yyv7L4rLevnpMG485X22gLkKcV9LB3JCuVkrAag5ybGvrQHkuJ2VrJod77kYNi",
  "key30": "2yFMXJLZpydHrpcztjeVxWeKPtEunQhnJ2cXCzbjiR3WznDxYKF6nk5X82autRdGLELsyNMkbhaG13KT9H12Shtq",
  "key31": "5a2W3B2X3GLLxQwmfJ3SL6BB4RehGPFAd9g8GnzzWTZkxkHizdrUhZb4z6QgoEuADdKsGVJkdLTyLqbstboJmuD",
  "key32": "2k4N3HF7qyxk4oUy4RNhTZbZNiK7sB782h27YyaS1gKgvsKfTwZu25V4dLTgAxhGdfDiFbqDKzCmSA4r3iJE6PZ9",
  "key33": "2HaDLBDy5NkTXMKqsKyB6a7pPATaiGUvuRs4U8Q9PC7EHoawyaAj8JGTwKab2QT1YGb5LNC8tmst2NQNJXNJjRgq",
  "key34": "37wP9P32sv5sRhVtqDT3DD7M6u45tTnPza6hg58ku1TSuKBrtcX6nqvXn1PtZ1PtBVmzoJNiMzDJF4Z6bAE5NCwd",
  "key35": "2m4ehGTbPdc3uRfCUQbdYjEJvLSS4qP4cT1XXLTicd5QKKfaeUzhB8N3ygNM5Kp9eva73ftECZC6gnHThjWqpePw",
  "key36": "2FtXu1MbMnub6R2xvx3Pwn8jrmvTBPcecb3TCXmfyMdVbKJo3N2brgo9wNEV2oYxDsV4knKXrDCyxo6qB5vfdXYT",
  "key37": "38tE1zZGjNsSrYpqbXViBvyssBdZr7cYbRWGbSssZhFa5Up3kE9EpXZrSobQUrXQY1axmEunuheVm9BmjEaFos13",
  "key38": "6Voz6RsHHgUoQnFJ2j4Gw1YxpebCUw5BtAQJs9tnXPwbYEWWUQTxP8GfMixoxMLjtExobAxCvWw8ynq4MGoGbGn",
  "key39": "4iXzWU17H5T1v3n68q56sSaEmpfBsjQkfPRHdq7BREVmysZgwwhBocVbzPjE2M3QWfeYqUW48Po8Wjg1QAArdfsF",
  "key40": "4rsANgBNmu5yLwog8g2mWzgqgUuibLSfPjc9yKUSgiu8WTUr5iqQDPRtmpUM8rXX4x7hxtgSdQ2w3DpMK27Ljtzc",
  "key41": "4RpnMEt45Xgs1VXY6hTFMYZpYoxjKJKuazEnvAx3jjNUvSWdWsdHijM7DJWdt2gbQrnDwfxVfcrWyRYzmcR3T1oT",
  "key42": "rKedDbjHkBFUiL1corTs76dv98ZXT4jrjaG4dK9T4ojktcWgNAakFM8mjxMyQdPq1i7GRpie8aPa8AYoEGfvrtA",
  "key43": "3KWyi4c8etRLxx5FHCC5RVGFVtUnqS4D1mPV5mTQW35SSi71p2bq1pmCYN97DES41kg9CKvbxtWYrqEbBVKq1WiG",
  "key44": "5A9QHApEisBVbpr4hMsSEu8ryev59EDvCjbt4RPn6rmy7XpyDSZoj6PtAyUshFJn44gVnRgKtq4poNDfeW9WVCtz",
  "key45": "3oKGTNwdMZqW1iPaVG39UpX2NaWquSd2fqFZKoM4EFWmHwrYEL7QPsvB8g4ME5DfHnayL4Q1U9Mvdo4AMMKMHQQh",
  "key46": "36cXjLcREQFkZHcxyczJ7ASxaG6nNcjs2cGEPWFN5Qxvs1T54aaQ8MVNdbRS4MLDgNtfBASjaujzKZhuk9F4HBFu",
  "key47": "3Pw9r6h8o7qKqFzAskYXbGGQGrfTM7coiqwSRM1R4qfoeHxaqApsUGWKvfhs8hhMJXahwQyj85qacChEt96tTaxB",
  "key48": "44mGSKuqKZuac4BjGpoTSZ8zEQpz6bgDiChCwwCTMyS63f9MFy4rWsXPfEPJZQPYDKVbA4KzdKSYxBKpgMPfjcCt"
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

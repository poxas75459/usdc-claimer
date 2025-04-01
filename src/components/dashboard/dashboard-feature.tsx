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
    "49LduWYWdPnvreP3XuebDfAXUteAzhof3cS7qBATJk5zvMtDLJZkhoAtdZsRs3tbttFXYwfgWKbRiiRCRwgAmbev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ESKa8Uc4eYkrsGEqzJHGFBtnSqqyQws7Pwwd4qqb6Xp5RwEDDdRGEwL9Vqu5erMJFQEHqznPTHh33H4tN27PeAP",
  "key1": "9RE8nvxL9gQQDTqyEWU6zPXWSjzw5721VbmHv7tnUgMuDjfsMdTDPAFbd6iTgYnpSvat4kKKushup3y3sBSPsSr",
  "key2": "3KTgEqUjqAbwSZZNj5WR6QtGMtDJrdfizXWnRT5WpT3pNEcxWBGioqZfwL1YHscx631FJqeH4FqzopCBmZw7jiW4",
  "key3": "5fRDKaTQnD9J4kDJfC8jwqFEdcWziAwfoRbQYYVAVX7WLoNJus4WB9Pv3uZHECCFgEAHufan8hYoRD33zgFQvxXH",
  "key4": "5K2aF9JsvFzQVrnJTq7njXbLWDR4bjGJDd9Kv8k8swJtsVZN5G2DpwohEGhsZg64KobqKxE4ArMFtyaocojAu7A6",
  "key5": "5gfH9cFeXekFfY2fkpkxBUBL6RYadqGA7UxY7Nr6B4BqKtZKAcNjx9Yaa1tRgaNPzD8dMwLtzZZQ3KNavZxAu16p",
  "key6": "61qbyZ18zxAivzr9rDCgRU4ikScHCCTWoZ8QhqKA3qegR75vsYJUMHYsBmdTLEys3skPsezWRM3x4t4oBjoC5xrZ",
  "key7": "5928y78DsmWHjG7Wc5T6ArjCLZ9AzSiWYV3AMgM5z3Pm22kDcRPWggAJsGsotMoqgeoTkp4AHL7KVSGmptiSg8E9",
  "key8": "55FRVQnq5okeZnHEG262CmkpeU8Af14F6m2VdMXfdPdvEvZVs2BizefbZyCMpCHobkz78gpa3ikcNccemxEANaC1",
  "key9": "AQRvyJeAte4njUscEbjowzbYvc4UR66eUpX5pfkfwwh9BNjAzewqLUo2TBjAd6Tx4Nkz7ynmbk84o4naDJegy4u",
  "key10": "4bB9jhdYiq7hAqWneTgSgP3UipPgQvyvsZbWrVniKxv9KfVmWkXDxg3VJNSBBhfVJkDTB46rtYpCxsaHq2DCkZut",
  "key11": "P7aV5CnKraYTTeJs4szt9ydxm4qNhaKaVbW5zNm1F6cB9HwEugnaYdfgopQGT434LadaGrkw87AaDXzoTE6odwo",
  "key12": "3JfKty5KzuoRTggk6c7kLVwB7r7h3S2aWz9kc4a4kMvBMfiu3HcvtZAURvn9L261u6Yo7Kk7Gga84oX3u3LLNoKo",
  "key13": "Z94XFe48oJgBNxUrBCV5bNPjFWTKBdeAdK67v7NgBFxkG2qgwkUdKhnQdoSer7sjb8MByst7auicpHzBtnpV2Qs",
  "key14": "2EKFz7dWcyUvmmAYU82zLWVfApTCaNXCS7rxhCegkjxU3vFVXKNiXxXsoPRy9YoVV6Gs5FZsDXcaY3nAibVjteuJ",
  "key15": "3SQXduQUpwKpCm3UZTkbEEidG2HU9ojxtg9Ks6QHoTaKJzvF1DCR3X6J4iW3rPWq4Yoccm93iFs87crEimPkBWvF",
  "key16": "4XBkeKaghY8RwE4cH9eGfMSFkvpityvk3e8bmSSYkSZv1khvPKSZJKdaz4rvHc1j2qEoGn3ASZSt3oP7URzZ9mkT",
  "key17": "5ea2GoxhXxHgPQg5DDmXWKpUArLA1zByYan7kh4BmKNdbRbAfrHVaoab4vs3rx8FUvezEpCZU7ZJR2eEs4tfZyph",
  "key18": "26u6AjKqhecJJQwNtUQAd3G4XwUsxdfqUCsiqseHepmHkFkmKNJ4aYsfx7W5LJbD1ojTNdLAVpSq6zWauqaPMAe4",
  "key19": "298KKjHkXF8cgyjLM8KazaP6t4q1hwFom8dUFB1mu2BPhXErYQoq9WhmJbxpcSDNM9qiukgTErDwGnLjqgNvDBYi",
  "key20": "2QWPoJUebNHt2kQw8pPvsZY7t8Spzq6kVNByhsW3F32jKZ3MHPvX16137ikw5FGdLxxq3BYbau4W3PGazFDfAUUa",
  "key21": "YAT17gRjUV5c1uNsoLqYUZw1FNN1ugmA2SrGRtme8dU4CSCzoDBsAZJUqk19HMTsEjsTHLu3UPoHcpTWJERbUdz",
  "key22": "63LNAo1XE7f9W7qqvunkKaxMfL3u49DMUbnFx1uhnHji5JP8AF4bQUPMMzcZrbzAFu8LASiLWEPALgVLoDYrmck6",
  "key23": "5SzZdojdYYSECYmRepQC13hoYaxJ6wSY9c913vq3HEreHhP8W7Pd6BJvmRDTsLQK7UUbNX8RLnzZtCcmSMzpD6EV",
  "key24": "XUuEzkhqSnZLtrZqCZ48aWU7TXb7s73J4eBPs6jemuzTMEvs6WF6baXGz2DDAM3Yh6PwphdiRp41T8CLvrs3bb3",
  "key25": "3p6WPN6KUMkLoDDCg6SiwMn7TMPnRDbRWR7paRBQfs7KEbEN1VofKa67G1DFutfQShu2ozLFBXp6YhzZaN6rsrig",
  "key26": "5ZK9PmwAL8x86DvRt5qXfSYyjhUNYoeJMP63dK5fCPiZA5yZndbkiDzUZHuAmrts4hqr7VNpoMzDSFSB9CTqGhxR",
  "key27": "b1VXTRrZyTcs9cH9jPExQsc1sCG2ygq1MfvFg8LvmXeggzHXuEbhdwMdroXDhEV7kW3J4eM1N8fPjFS1tZgtqDk",
  "key28": "4VkBibchsfpKKfTUsNa7sknmQspyB9zuGcUCchZz8be7tYWSToqFpmVp5TP6ewNCwu99RKmAwm5fmLV5XSxHiDW3",
  "key29": "4ntnDvcMVeNNNKescxgoTxp3sUZAaJNL1NExcka9GjtJCDrRHgT4apzDbksMpjJuC9CdjZa4ek6p65d4HRvDaFG7",
  "key30": "2RLtHx7jzzoRCpDi3wbPE75NyYsShkTe6pUrVBGShHJC2M6RMPUJeff3p3hyq3eR1JggWpEYuSbjywJqjXqPzs7A",
  "key31": "L4rWpykGXoyPAR49NdUNNuKrTfADTjLukbjjfwPWpQdLknEgcFa5CSUen78HFHTqMyXdxS6J3DAymKnFqefSwjJ",
  "key32": "3TUESUQiNVJR77yUWWaAU6oRsUUxw1T3oJboFLMYZn3uxKRhyDBd2J5n2ii4t32bSGwJgKMmYFskYUREK2CNjGFA",
  "key33": "3bf9ffcFRyFi45MsmQhLp9LX34BEEdweSMREZ9ERKaGuM4hr35McCJGw6KYto5V9VyD76KvsGat9hdLG2fRTDGxV",
  "key34": "5BQCsJMenPNZ3Hy5K4TrWwg8RY4df3XKtK33B8vJMB3g81tcdUsFBzLDxXBgKMQC775NMbG2fJnCE5Cv3YEdQPqf",
  "key35": "2r3pYaJrRJWYhVtraC2ssxnufgd2mDUaBAbKDs3TfgtrT1HQsH58RyaLTB9BsDNhTarWG8nBmYSJLbX3ErrQQ9Xs",
  "key36": "2o45BfbrEKFsLxFbBh8C4y6BeZZLhQj7oQf6us7yiRHLk6tVzni1m7fk5ZuHwsmFVXpunx38uW2VPimD7pF6qdnX",
  "key37": "5y2AohsBR79K1vgEgb4C1KBMWqHerLUCA6Wcg3YsEohSP2vnL7733KDJVRxZPAzenZE7Wxd7Efqw5kLdTbj8SRYG",
  "key38": "jDMTRVsLegexNgf33TKqVREdjhWzvmxqqeLFQXPNfz4nnyRv4aKPFeW2hTUeLJfMYZgixrbzHMCdyRgrUKEfMMM",
  "key39": "5q1xzCLT6Wf6uQrb2Ey7AP5Vs1zJ4i1GTkTcvzt87aS3zdPWvG5WUj4BicmWtV8CMEu2XfxUCRtDj1yeyBCXJ8cG",
  "key40": "53wDGYyuiYHkHXAKwFhR1WepYk8F8yA9wR9SV3z9ASDtpywKUnsPjQaeJXFLcxsygaa8wqTX4rSfuqxxMUWupwf8",
  "key41": "5TWdFTo7XVzZ7Z9CNtdg9XuYAzdc9UXHrNXuunEN7hFXQ5zQWwqKLGJCv5NLAhHHVHSck4nkfoVi9kvmcZ8SGryM"
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

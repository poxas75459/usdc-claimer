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
    "2ajcFeeFdYyAwcYdgaU2JV7S1AT9LtwGCZhy97RR3CBPDBCpeuhkoNWpbT6pfEwDFVKpJi1sPEmdj2CMiZG5yXMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXaGWKzcfqfRieWaSqnCHGcb2d94tYsWFae6tLdFvuGiGTFGH7uSKyraLSyCRgofchwto2WpUTAnsDE8t2oN2gG",
  "key1": "5D9zs1sccHUxJCM1Zk8ANRKzGKZ8TZ7cQeqttSoiTihcUWe5GqAJhkNUmPQwopumikuh4C7FcFNa3uGn1s2G5pzH",
  "key2": "25Q8tnf2soQPAtC7zdwtmRFVnUqZ5c5mn1GxrdaSXUvzF8ujMPPcrHDU2irvKZL62hfNDDigHiUjuz2cvMA4pFmK",
  "key3": "3NgG2GbXVTG5UV141PMwakDF4kL2isgrpqo7qsSEA5yEx1qM8Ke6HCLUmbyrZJceegjfADNRFPxPhZ49PTs2dQ4L",
  "key4": "3TJvqF51fSA3aayzxpZR6uZFp5GD5nTeKNaFaQpVZJDySWfouBxLFmrwH9AgvhGV9DUnQ9w4AcdkPWxRQyoE1XHb",
  "key5": "4aKQoY2Eu5NYAF5ZttXzgrfGkrFBPeGX3UFnt5CtNbeUtyLVz9YZkfHuBavgaer4SWXz4yqjwSZ4P6tzjrS9cwW6",
  "key6": "ZTVjbBgU3JajU3A4z76WsEpnntmhwb1qN3u3iM3LpsEew3S8Qx8iwzbYqKDcBxLcCMEbRpfdheYwbHAozzu1gAb",
  "key7": "5tc8Z9yRauaGgCRMfCCdHjjsDUZzcfcNZeCrYiESQtJMAXQsagf5EE3f7JKy7Mo5vTJKCkNu2rGyAtiQHgSpFZeX",
  "key8": "5ecFaHSWYhkC671abaHJkA15CSX4LqJjx41mVRoMdjeTf8Fu7XaQkiSbWm5ohG5LVzVkh9At5stFQVCz34k9GZhy",
  "key9": "4keZZCxUYq8RwYw3HqLwapvc6o98LW97wFKN3ejuuhRmJBa2vzvGogLTnqys5LABRmwx83ntb4GDm2oMyECvAwX7",
  "key10": "5Xpo7SBZz29RHQezeffau3MrqFP1F4vYE5H66HPHaTEAZLSQ1CouinRGZTo5pLKFTVQK476gFqeEKuhAuKB3N1C2",
  "key11": "2x1QSDRa3cTwJ4U89cRjNetTaMBYuMo3Z5nHJjvTDvhD6UixssagwZnsC7bHx9HTyHjmFUGDC3c8frnLpWVKEg6K",
  "key12": "39goeRmh6nUkB7iP27pXiWpMtTfKP2KZFPRq1UeYteiX6kvWyaoehyPwE3oXueygv4RVJRYUexDfyPbjEnkQfJ2Q",
  "key13": "59xa86k5pRtiiBc4XWKjt11r8F6Km9yXubz54ZuLxdZk8M2hsuefniS6PbkQSoZGrk54TySwM4RKkxk65vgCnfEN",
  "key14": "34HMZH81drsTfAA3F34vbUgJqMRiZTfburB9yqXLG3i3FY5EL8obYrrNYdJknnmrjtMqehCqWhR1EogBmudmWJZG",
  "key15": "3BeYPm3rKPY6FwZcPYKavkf5L4dqgocC3UMD26LJzgyeGrEBhP2EXUGdjP5eojVeNQmNkLhVi7bEaiFNt2YjrSNr",
  "key16": "5wTBCNUoVRiriocs6aSNb2W181vS7UDomTTsfeq7F8YrsojuidMJnyA9NCXxGrpnmiUGFkqBKsPLf7wNSPoBMpf7",
  "key17": "F6tCJvT2kK2AjKx4UMUQAKCL2Yn4bJWJDeevj4XkUEZQm7uJQBZo7KzaAh8nPpM4coT38guKPtikuFmuGdgoxfA",
  "key18": "4YpD3EeNvZrVECG3N4BexwsmSqqCwV9booyAezt8ngcps87WyhxfUxqoxXiYdftfA13eiPocVNo34hdJHmRKKpAk",
  "key19": "3fnpPFMkgeh8kgej7MibAppxixAePY9wgRMYZkqoa1CC6SMar49htPSCXUE5LExdtrcywSJaj5KSgg1RBjoohfdV",
  "key20": "2mVnk7FXGqmv28JAuSS4jevArxFCqr4TqrFbdZuuHpEEFuVcqiA1yE1yaQfsUxdVP8EBs2ucLyCXbcy6bVcu87m7",
  "key21": "j3TFqHfvvmY1cFJayWoZPFzVnsuHjx6xJeCsMibjdfTQj73EdHq1C3QxNoBvAKuEYAG2D4KEJRoAwjvQVpdbDvt",
  "key22": "2YW2bLcayuDGiz19SLFvtC3zRCZ2rRvtnTMPqYjKHCfKBd5j52fxMe7q1U2RamUYHcsb1jwqVkFBsGxivDWKD5ff",
  "key23": "2Rg9y4pvKj4WtANrXhVWGnsQ3LxYJpMBAm3WpkQQRSECJAmdkFmrGeh4oXtBrf1WEExuMGgp8WXWTkUCx55XHPV5",
  "key24": "RfQ6adeGj3BfzdakNuAAYrL6LucY1NtH6JeMwGwB3dQoAuCrwqLe6auq16RmWTmo5wvVnUoKYESQiYFGjDWVVeC",
  "key25": "2WNbFZbu2n87VNJ7neZbNZxjKxxAZxRaum3Cv72zZR9GHPFL4ueuHtrfq98ZWxC6aKEH6YjKNLNWRVTEVGwUu11Y",
  "key26": "3m6Qvg1rZYKaUU6hS6XexKJqceZDXtMVHuni1sWTmmUTnkcjBboxCMBa9LE8uKQBDm58i8GBtS8m3TkxrFna2weV",
  "key27": "4MhkCpC6WUkKMqkEA5cKUyqqUmXzQJSkNiR1EaYpGVfsGVDdQgQAp9HrhRGMEQNqofsfqqD59kBuHxaLp4Pp7iTJ",
  "key28": "2Ego5LdWDEkoTPmgBZrERnpe3zedVQ9rVDGNnDCcAzn21f5Mk2RcWpc12uRCKSSU3LRknsQLBSLK6ubEBg5u1yat"
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

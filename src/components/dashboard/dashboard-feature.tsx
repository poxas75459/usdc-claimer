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
    "4K1eb83p5sK73aMGET5G2Nsz3dWMdygmXE41Tbj57mWLzhmwuywEM1vzDXgWvQdtty3BaP8jCmkhjPGaEDhgRAYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CR9SVCpoSNwVLWnRkYcrySmDao7CygPw4pSzq8Xz28R27g5RXwFAj9KtUK8D3toyEh5ncQC7DEJB2jJiB5S6i5",
  "key1": "5GnNwhZ8C8Y93ywQYR8GRADNaBEMwoikXmAT3TZw3Tee816T57AGsqb8u54wSo9qh1aqHrijm39ZhekvqCYKM3pw",
  "key2": "3yVvRbH6KMhzShDYaJ9h3s8BRnyqST4WfHXb2pufMSo5uFqSdSQssaBXEPaUFAcHV38mNyJ1gV7TZx7RsT8nk8o6",
  "key3": "5nk94icJDeyjA55auk6y9NNnj3uw4VqjUsAx8ddX4Ss3oFjd2MEY5EKQDydMoAv5iYproDXjGttcBcoLMFtratYc",
  "key4": "5yXTsXvqmkKqwK9JQ7GfPTjFT5ufgogJGG7xZMonF6hjZZQwxsLTkwToxecVu6VykYTsDeiGKJzLXx9Xe7UPJuDh",
  "key5": "2DFMhB3ZNw1FpUchnk7mamujniHjz5b4gyLpkAhfgW7yFv5DrptpnoDYjEs5sLRdsx8TwvwLPB2YyPb5EsgNSMXW",
  "key6": "3g8Nfk77B2H2tUXEQwk4g4fKP9wHjSd94uGdjn8eZNsPZpGu9cDbSPmGPyQpJFgXJUTAggfhPciqfaCabkNXhT2y",
  "key7": "YV9zJQxpH3rBpnfqTofJtS1KjXKc2LgSeyrRFYg9exyb9hd6zL9GAsosAky15anpTrpNhHeiW47YnyKenFqmtMn",
  "key8": "3eETLeC8Yc6nC2GxssYMTmo6F1qzkj7CpdhcPtMP3MF8317QvDjAQzf7CZvH3V2p6n26A8gax4wyt7pyYTJdjQ1U",
  "key9": "43X6cjbzu9h6g2zjZ5Nmr1Np9gw3ojYEiKxApgyetaSzrF2bpsqgiQ63jd3eiqHAx6E2fKAxQYyc5yGSXpGQnmJK",
  "key10": "4QaEi1sg1yy8Z2ceTQ3jAAR6YgNB5wxZou62ANkpDu6a4DPuf9EWaVGHVrtYCWVMtpHd5943NCvJGMBUHmJ13kH",
  "key11": "3SMGNATZmu1XRm1DcJquJk6xAqmbvhHCNKNsKkboUZ2X56c2CT3NizacfnwsDwm2npSwet6KPuuZxsVrHK7HLX4n",
  "key12": "6QevnXJurvaGJF8siDihGWKTss5pGPnaN7HqMEyVurfHctzUE6tbrJYxVgBuph7gd2HWzsWywhUwBhWt33Db3TG",
  "key13": "xCBSCZXDPgTcdQ6SDGCV9LniTEsQ8qsokgGpcfAHWeYKHPSYJVNcAa2CCwRNSqDaCa7ebZXo2p2hb7RDyMc54e6",
  "key14": "371ZT97G1qj5eLU2d9sKKfrXQtcUsqb1hLvWrNFPGuer2QFFwkiMYxmUn82BMysxsENuVnEj9HfVSiZLBvKGekbn",
  "key15": "3PsMS8Z6EjA5G1hdCV4Cz8iYshyxE17f1qYEDgvb3Ei4sfPc5cJqXQLkcCvEwGmYvaWHydi1KsRaqLxxCQu2qXfX",
  "key16": "3JeuGaptbuZfLmGFBhswiZ8P1TKEEVo8EQnfLoLC4NydmFhtL3XtMRWfsqHgx1VzGzzbMiHSA5rdRZLt6AQppsrB",
  "key17": "y8sDCBp3WUzVGW13wFMhHzPX8G6qisTBEAD5HY88xUpUKs7PAaBgFjY2Q4Kf6FtARUVeZEu8REHa9thZqZxvxK8",
  "key18": "54sKwwv9FAZ75YcCfopQb4KMvZiknS6SJUhfkxPEcEHutiZNT7jeBbWnQ5FA8qov5jM3XA1DkpWwE6HfJMWK1Xps",
  "key19": "41QTNQpGrn2KtLxz7PvQZS9KkFbRcqYgbY11TMZg6edFz4f3j2W93XAY4sFdaWbirfTSsTKYEMZiMKExrmA1HM69",
  "key20": "3ypVWaqQb3K64sU2xhhtgipfmJcG2CULmaQpGEsceoiCnhRTN9C1ZcoT65QZG79pyRcZ3VWmUePZwFAtGq3sCNoC",
  "key21": "qYfLw1cG59aSFkE1z8NBNbFPi6MEcEkLWUVDGsSkFactxsSTw1w2zBWQCQPpikkeBy9A6we9eCsoivHUkWcoQS6",
  "key22": "2EnVWfwSaz6VHW78qKexieQcQzcQBAUL8zBjf1j7iYbHm5yPCyM57CBThd59GoguSv3afURBsGx4LBr5SPsmYbso",
  "key23": "SKdqkfqBZxvMPw4ymtJaD3ePKd2JqSRCzwBHyFFz79wRfhjwNKBfiQc6Yqkwm9SvgnBqBE6KDEj7pzHni7PfomK",
  "key24": "4e6NX9z66Vr9GJ9JGFfGDsJxCVAknDYGshXKLqaqkjSA182qRRYzVdqd2uTqDNDzCVRvsoYiZJyA227QM99YxsqS",
  "key25": "DdyhqV9QuTPkD3M5K9CrVX4fwjwnen6wbe7E1rnm44156A4fBNEt9GyGuaaruaw8bjtV5rmMWdFyGJrTVzPrSYR",
  "key26": "5MHdFcYAkz1fUBuv4JkVH3zhsC9KDFDQRCRwvuGdrC8EVDnyiP2VCBkh9hnPw3j595fq2K15UJEp4Z2Cy7NcA3WE",
  "key27": "2rcZW9zpdgMgp9BdCXEsWMTwvAMuVC9qAoTe6UgfKsUGnMfdkhqvvAe7uAB7qK6GYoWfApjCccUPAGequbA3EFVC",
  "key28": "utzbADLQ9Hq46qKuTfiJuEUzDS8859trw4xRtcpBYcVTSrQuoreFPoH5Raz9FNCyzzPEZp7pmAWJU6S1hm4iF1j",
  "key29": "SXJoCCi5dK5nKkPwSVyherdUuuRfhLXx3VS5n1iu16hUnvc24p93itmePmMVpCoz8G1PrDFq611sJWwKPVX6Ueg",
  "key30": "4T73DiE1rP4V87iTUU5aPnG9ZJCSA9x3MR3wb2cbXjaenPhx2BoYo3skoxpYtBavwXShcyddiwPnoEpVopjYmJHF",
  "key31": "65V6qvy5FALZD715eoJL5FabA9e2MMDEGts7r7mjAaaTuZCBDjnpyWrcRZE8sQ4B5SN8Da2bqtGMTKNNKzDWvspr",
  "key32": "36kWm9dB2yCVusDx46Fb2ztSgfteNNEt1LwBswDoXDrSY3LgtwGw143ob99aomRbtbG8mrVzYyBF9JyvXLnRAamn",
  "key33": "2Bcntq2HYtUyQv1UnprhhBDKQkwL3aVCKA7FnpVHT2CLJwA1vU9yoJE2YYrPfjbF7cKnMG81bvbjN4H6ee7TV13L",
  "key34": "3XTL5phLpSmYHK5VT2ozd5jQZYnxUcWyjPjY9gRsuSXpfYhFL6HfD2UALcMHqWYpBY9jkYP56hWwPRWqXx9UqD8E"
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

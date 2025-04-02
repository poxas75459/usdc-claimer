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
    "48KNV2RWUetCtwmcH976QPmayjBomRioANaQBtpFRSiPr1byi2hiSJM5wxfgxqy9KYhcCj6JWEYVsZ4JUxt9wVFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jW71EBzAQqx9zDbytVvE2XruQuu7iGFrxVJcxf35MTEGsEVcTcGKLEhCg6nkJMspRzjivdHERQE94BDqJ8mA86g",
  "key1": "ahjsaFZyWffypBULyaJ2ZobGn3XBAgDXGK8W6nsGe61Tv1XZsx1w5Ajxcud7p3mQmBocTzuyJRaZpC3EzQ5EAvH",
  "key2": "4YDJX4ZSTbT64yujZTNfhbUyTUPnQiQJGXhcbKVCkv59FCQLcJZj2bF2joXMoVhCB6wGfp9S94E5hXxYy9Ga6VnH",
  "key3": "6xUJCB7xfkmHEBXCT4gfdVw1SFF7oa2gcFqnFdPGwk19SST1rNu1dk3z8XnmX3RWBWqTtqgnWASmNGuMCMAb7oB",
  "key4": "3TEYtA2k4YTtesmjVo4QuvSkhniNNKd98BXYTczYdXrxTwNpw37ixqs52BQYBRjPvqzYPAhuXQ1qf2DSSGgQ2t1U",
  "key5": "4xV5A6HgrwYMnzPDSBgWgxsrS1oAXnhj55tK93pCrykZBASpi8uLwUfyt4yak9DRGq4b6rJtjvKeY2RDq4GufHXW",
  "key6": "2W9n68iiCSdR3vRGHg7C9Naeo3eX3dEA2UvMj7ZGRhkGiaMJXzKarkCFtEvWdNxwFo3ZP1asxCHYqPQTCJs7mXJs",
  "key7": "3wCS2VwUNpCFJNXHZqRrMgwMN2BpfkDEgMim2thbdgXpsX7eAdXEU5xMpyFi8DYaYeyeptJrDXRiYiRFdc1Xfs5E",
  "key8": "3nsEAsyWA22f7NXzNuM2fMq6o5YpEjQrgDtp1iEFiaaT3vSaganUuxadtP2izB9ERrKtts6M8DYGPY23XnoKGLxZ",
  "key9": "ceno7tRtkjN6QzZn3hWpLnZ7gVeJ1CXYn4Gv5qwJLfm2ZkNBjzAcYt8JbdHKsyiHG8gH8miahQ4yj6rp53BiwJX",
  "key10": "38rAmEWVe6YviZGN44DsbCVJT5FkzeKwy7D6gAGxaVqu9G2Hv3c41899tgHTZXXmsnVpnxAZMMY63czo3jQgd8Fa",
  "key11": "uGvnpXvQXFToRtqZjDgbUdzgGjZoF456MtWwW1ZUBhgir2tejQSdzzDFozxL22MF5Frhja5shai1E2bKPgdAvPR",
  "key12": "5VXQTtZdKxCzqiN89ZB4Knpg3G5PvWJR4LvfKQoSngMsk2KGcVfFkDT6JKHUjztVzRWtHms3ZbXvfvWYxqUzWCQe",
  "key13": "4zK3iPYehkoFKPrgfY41X7Afj3QQ2BaL4wL2R4TehjauRDKX23Fqq66QAnt9WQGL75KuvHTF6pTD1ghWZHLwhecb",
  "key14": "FLKKYHp7mzBFqdvmyK6yS2fDSbxfuLDvvmqGqWScy9g3UTKnHNvDvm3oewtX5LEDMxi1XZF25pi8nVikpzU4d1i",
  "key15": "3jv6BfW7Fq9iJ3yKzxYZir6gaWx5bAwUj7Jt8TgCor8rVTxGd7obJgq8P8u4H4UBWc9PxapKttJyw5nLA1Ug9rnT",
  "key16": "Dyf5sDqeZoPP5yPA3zzoNNqRfViVTMtr3pYCeaSzTAY1EbBgiPbc3G6NjyH9EjNvxZJ4sq4sbG5QKf18seQWgJm",
  "key17": "sAT18SYyLiXLCkJgKov1pMHqf6ri7BiHZHwR4b4pC1Sn8S2AwSxFaJuueRxY7Qrdz7V5EjXXA792AnkCqnZDPVX",
  "key18": "4gMAEkzxyKw7sTmRvpFvfCCDPTbphe9b6Zfzv2hhkmVWZtVN7bwts5QxwMucMjM2i3bvTVXU6MqjSxsx9brDr5Gv",
  "key19": "58KWUDf737zwNSsJWEGqtSdnKi5oJmqoe2FB69XQECCMzA3E5pviT5ANwHQvCkk5KgreJCfyCCfwAoK1F7H66PYk",
  "key20": "63Rf77ErE67Ps7CbcWJNn7GVijMiBGgc3htLCVjcAS5mmUPkMLaXEwLexyKvD9SawmLNxA441rpVUpxWJk83HgaL",
  "key21": "pX2xPJuykczNSftuLcJthtwp3Rf9Wk7CrfVAiBrzVkNAKoGfmqkzydyVgVQXYq4JhHH6Wak9D37HuE4oF3fo7XR",
  "key22": "2ekJvhT5EqH7bEP6kmEuuwnB4m3n3HgGUatYg7srkikmnffcM3nrWCvejX7KfckYUp1vVhTMznnDyRmtyFpyykKd",
  "key23": "2DbfKAAufDJZUuEeM7LkLjdVD8JZ4QSsp5oWjDB94i4NSG1HNZBBFbDqYGDeirKrwLU4AB7LaSMg4fGnDX8QTKQ5",
  "key24": "2BAtsvoKZripP5GuNfrG4T5tQbsqcpwkUjar2muRYkkMD5skhKzCcqWkDUYcgeSCHoWtm57dYp3twH7Kn3KWkQPC",
  "key25": "2oeZ7PuiVAj6XJM2Yj7LYoho9nRQa6xbx9jEuuitdV1Hiw2o3koiPEbz7StGydfHeDPtABZ6ezXdENSMKPGwM54s",
  "key26": "5mVTvyCswLeAy8GtaCWxcFreHPMQ4AsneRWWH1sHu9hbGKwDA87Z1HXoSFvj3pQeQbhS3dX9amuAKbq7YFRLWTRE",
  "key27": "5MPxCNNnvg2P1nrDYTpRVGig3vcoSmVkjKJYq7zDQZ3b1YRrnyFxcF4UsQgdTDSExALePwDJ1kr4kaLpAbUpTCff",
  "key28": "5Hd6JJBGF1pKjsXcxWJB3PESNSFf2Bxw9mDhb6ULyT4yhFxujPNqEq6dL2zKFkwRqPRZ17xgmDbfqkKwyMRUjc7p",
  "key29": "5Z8R6d5ox9ErdueNmTrQc7X4f2YpELv5AqhwGyDC8TwdoqBEZ8sYPfXRWdNMLUxGG1Er6tSP8oAT6h8KZHDXE9om",
  "key30": "PfToGgpJnPWRGYunfyNL2u6oMPoZvxqTEf7CYnT3X4bDERBgoaZU5xuTexpvJK2ZZHrw2eZaraAaZnePYwQWCe1",
  "key31": "2VxmzBLqsoP5vUgxzgfhKManPFYDgERPET3vCGtPjo4sSYavRdBE41HsGQZpVpMvQW7VsndLtCqsS1FZTeRBZddE",
  "key32": "3VqofjKuAuTqDLRAMmSow4vWNzrEcxnU167BACHAPBctCKgrt6kWgzWuhTdrkAUgRqVAcS1yvUW1CtHCXsNU6xDf",
  "key33": "PZahqYiqJyRBm6gHiJAY91PKw4RShnVuabu5tYWDhJXKEUWBvwqAPVKwdDawN17fmiDMEj9BiDz2ymsfr5bRm7q",
  "key34": "5DwGBdndUxTxzRFdZF1P9mceaieyZR7o2wC1VKN4RnkanTbkbYTGLywdADk5h6oGyc9CAQM8vA4SP2EoP79EXDYP",
  "key35": "3StjJ1AaqbejcAx4DKWFnHeZASU537JS28i9YhwE6dj5Edxvci5AyUbBPaaUc3dxeKjuwh1xYN1PKMuGSAcRC9cv",
  "key36": "2jWyYzCdHDhbodXBtDLFSJDxTEDFeNMuaJdWbb6o68ugnQYwy79o3csasEYAAavCmauvHLHmyJV4bqciNVzYGDq9"
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

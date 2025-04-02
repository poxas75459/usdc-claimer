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
    "3NbJCmUJvVuXJtHRv5f4w8PC8Ltu1gcMC5RpptCRZ2RP3fSFvK75hCxJCJALZ9h1aV6YP9CmMJ7xN24CVVy3w1BF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8ivMVPJuniNwaBptkgQrx4V62T7EUJ6LNnZQaRUF7zi4Kra33KHnJs6GVm9fq3DmHpFgaBU57Dwpw1MvUsPCvN",
  "key1": "29r7H36oLX2EGZ62qqyGJUcPd5ocM8BeoZw9krhDxT8TgFXVM5xH8baTTg8GgqGu6ihVAJ8if12C5TSjLv4G7t59",
  "key2": "4D6GpPGVqxuRk4TsLnVwqqPRZbcaH5LDJmBVVBnQo5fbn7t8dAZpeJ72W9JsgjwDwfDFkKPcm31EcDHQo8hHGvyk",
  "key3": "2TedqsyE6aMMghJgcSScQn4Fgvk8xziwZ9eGBw5yCNrpf27kihbqNFjPGNsxkqwadGJ1hrnCwYPaRVxQsbEUbeF8",
  "key4": "4fxbzBBrWsSiZKJgii1A3mxzPfd2spLorGpHrqAhL95t9K3dZhnFdLKwYjtjHuNgBFjQQK682q3vjWzqVt7CyevR",
  "key5": "4TT5iFuXVioRZtN3zKFa2tv6pyB9F6A1qgKXzu6PE7dhkz3cgjwdB7crD6bzbn21KF1jHXyZH9DFjzi7YdHWUGSG",
  "key6": "67q3pgnSmWfDwARb9RhDwz9diRGMPh8hHKngRowe9mjVWZQbp9dnYPesvCjALMGbhYJMLXdRZH9u4ZyeVB56bsDQ",
  "key7": "4qUKpTe3mBg4YE3tuNqeiPSrG5jRbDGRX2boXFYS5FcX59X9P12ihBMG2TDsiCM2KgMan6Mu3asL2fv3s9RWs3CA",
  "key8": "3JRNVaccyY6hJXVTBp6njzkXSf7PAWppy89GnPgycUxr62pZAbnZUanrkiu3nazEP3UpwT4VBTBuE325a2HhK9Ja",
  "key9": "2je8cSvuDthJrH8yx51m9wToDwrMJDwTbLm2VMoULFH9abmaBBxicDN14ZM1xrbNJJQ2a2GUfpiUM7HVkmDW8dUg",
  "key10": "41FCMh1eDn9E6twaJy62Dsfe17zg5NEN6hBhSygxq51TXX7TwqVP1CS9mT7RUue8kv5Rc8ihbHAYhm1McLJQ41N3",
  "key11": "3ZHLeGuqsfCP1ykQ7sGwMxMSdfc31xJU7TNeDjA48EhkWjrKNDvpMkk4XFM2J8P9zhmw6SRNE2YriT8aW6krCE17",
  "key12": "8Px523jfqQdV3i8TJJZuC2b66GyxzSwEfa7UfcsTyzfCpggcFQ6wVEpwHLdxuMr9Ce2pQKiMYm53b1ZFdxtKCiv",
  "key13": "tjvu1dUkehUwMgxZyS7ifjZ8oYQnrEp4RVESeEfjKQ4BPY6Sx8vYCZdh8DPctGbi6ZzcX6Weu2AoH16SxfMEJk5",
  "key14": "2URXRikvwKXTdjowVrcgQgzHUYjysHL7R3KNJ718VCexXb9FSuPC1GhH24DFqa6rgbGCZTa9LbHsumBRoCVJCoB8",
  "key15": "396arcJzxB4jLpyM3tZM8J8oVcutBtn4isUmQgfX4f7oDrGxn93qYqTxnnpsTUwo9Mo54RkjdvdjroBtRbWQdSk1",
  "key16": "5UMCMxSPK9aBst2YBpnGTFvL55hvRnk5YbuZPC9wywqGCQjGv3PJht5HubLMqhiAG35VoBRdA4YP3TUQ9bGBNaoZ",
  "key17": "5tkUvhJNynCBuMYSXw2x3GDs7Db32noKTkDPdMZgqXFwLmmSi4WUqyocDXZDLoqHfxS27ZqcthWDgwnbkhic5kYH",
  "key18": "2QMqAdEX1M3ZcEMPdvDt3KHZoa2sfakRndCW8UTsnVW6fijEB23DVAhDxEPqvUYTVXKKttU1hcXrtD1cVAU8cfL1",
  "key19": "3T8UyDiURLcuexcfQWEvBX1T3LC7mnBg2nsRnevY74pk5SQA7TCUzDKpjyt5Matu8sw7voUZH9AaA67agx3fGnf8",
  "key20": "4SCK79zdRvLjg7ZtNcHFbMcEBhPmbvGFfejdLARqAt8y5MjK8rA9k15iJUbEhihc9Hif88QsioGNVQXjuPar1mpt",
  "key21": "3S2nnmqGXvypF5EihdcnHrkXZLR97jhSnnqcADmz7am6i5dKMc3bSm3ZUkCJM4d6CBNd1QawkrmG7PgbkCu1SbB5",
  "key22": "63MBBJb5FSuRjpqi7uokRxrwVj3fDkzLMxZjXn27pwLX9Rp9pSiRjtzCNnP4NXyLMxkF9XFmh7S1B4BKRcZR8zn8",
  "key23": "NtRJxPrEkvAucFaWY3Zsidmg63qQHBfoPJiai5jyejoorMubuYP9DZtidk1JUqccEAtGJUomiAmtz2EcDALxvhJ",
  "key24": "N9e1MRHfkQbUfsEbTCGCcDHE1ZQyd6Dmqrem8sWgyLRmE4HtW1NiNjPZWnz6t9nBoPzbTRpDMrrqYECA8Bt2a5z",
  "key25": "2zYr2HjzHjgG6ZuVcb9vd2Fs1KmVWVGMHfwHWYK1GEC2kueE9TYrqVCRwQ7t2M5NTGKY8RripZVoPzCekV9FUxHX",
  "key26": "5i235X1uTgeTUUD5QXQrGNmxoFyE9chgTUdEo8VbHNVHbfMVG5f6TuBxxccSLcmwucTyCRBQZ72SWCSp4hXW5CRi",
  "key27": "2vzeGTfnYtscarf8p2HkYc9VTSMpSMqb7UWXK7heqnXJQQniecKYDorTTc8M1YRX7SdNQmAZ3TJUAJdpPCxBAfhg",
  "key28": "41vfDA1WAPFnNBEQ7nDcyqRAXjGwMXg6sov1fPS7fPo6Vg621ZDuPKvbULvEAz1etBrBuidos48RmZun2fbem2Yo",
  "key29": "3DzGwGkCWYXugPFWgRab1SjyVXM1Ekf8FGCNmrGTFY5R4i1bfEAtPmJ5ZPAzh9hTaLCw1CbQbddk7a2o2aqVVfgA",
  "key30": "3PLTztLuZH78cs7mD4oqnRNvhDvruCgsVmF6YLxz21s18Najj2QwDoEqAmifCEjLAhWzvHUfbfrYo1jcDeGgFAWY",
  "key31": "3S6kaTTUFrvvS1dAfxpUpEvSxRVggxKrmovWLzsTFRmfb87J8CWKwyhciyEdvtHSdf6s3o4GVunqkt5EAgVVFKbF",
  "key32": "2wWUs9P9DAzYvzZ3xpxU8ZxYwuMxKpDW76Ft8DKzbQdwm2ek8ko4Q4grF9Xicvk75QmJzgEr1gsUtqrNJP8xX6Qh",
  "key33": "5ZiosR79votoTAXfdnXAcfvxQs7kfBLuL4qHYJxoLKfPhmQrwScRAT2f3bRgYu6Jg2b6Pw3TtYKcyB62bM43CkmX",
  "key34": "4Gn28M3fus9QMDVvWiHj7eH9MhE7B3Q4LzoqHPtGmYurhfQPTcfy6isybQ7im2TYGqLxnNma8CcJSYDoUVcFZMbF",
  "key35": "3r4tYk4cFb9r1vYNbJghfCRcyGxGb4ro3skruJNuZ8q2cS6iYqWBzch6h8kvgUbjpWwHJF2rK3h9s5soFjcGedpE",
  "key36": "grRZTLVfeJVFWhUxqgmL5uCTx5eKxJzwL2n7FLgeJHZ9QCs7cDdRLKPV1qF5jSi4q6AHCV63dLg6WM6bc16vhYh",
  "key37": "5Xud59MaiaPU2RmemjRiC54FvFo7uiiePsVoudy2RgREwF77zcFDkuX7SSwrjWvWNwGzAwrmBVv3LQ4A2nWAP8Jw",
  "key38": "uLeBnxUn6twAk7DWbBahNomSzqzrAdA8PECagp1kX5h5PPCeYB11uMj1ZtA3gatR2hceK1SnoVRyZ9cwTkRpJ5B",
  "key39": "3AJnZRtDXAskcGjLHP3sWErN44ot92qXhpLyVc6Nvn4aYhzrv1mpMPqhWkW4BsiVPLirFxtnvfRH2VqX68FmSMu",
  "key40": "65fBre4Xt3DS4ysAVKSXt8duMVycUKTJcuXf12MefNYwJy7TLLKD2Nqjt8gmoHxRnJ96Hr4guAGke3U4Dba9hdNb",
  "key41": "3Y6kfRjdFvtN1tPmFYNvcxh71Dgj2EVq85umgtw6ozHsEcyzu93kTWz7qb4xVX3MjCYBmNKYSivL5ts9bViCFqLM",
  "key42": "YgZZnhGmpXnNTTuDoe4QcfYoKDG11QJMuukTevKysRUyijWVxQKfhCWssad9LA4NrUqWSWZemTFHDC6BpNZAVpm",
  "key43": "ppMpXoUxg2vre3xY9HAtrCnE9Z7GUFwoJgXo777yHMvJi3mBSmuYEkj9nT4EubuiKPHgy3uneL96XpfRspVybMQ"
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

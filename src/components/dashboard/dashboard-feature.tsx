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
    "wcXUiMmuvWdJD7KN58GtDsUhZK58DxEiRFcRbumxf7tfUGUzD4qyMRBuKUEsQCh6pHrBPVGnVi8A7o2wkjtJRdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPnyvrbFUpDmSJUDQKn3zkbMMCyb3XJhrAdTH8mJSpSkJbypcRVD6WKtKgnKpqUys487pc2zDLpQt7bgazmVCZ4",
  "key1": "39sc7MnT9Dz2TZiCmPjnwtHVccuKN3TykstFSMx5WvjRQn2mRRykzBU1T17Zfk3EgYuCBq4a2xyAKyix5EA9m8RD",
  "key2": "4RrxfbemnNFXNLp14ind9Zwg1c4ckJqZ9oQ5eS8eiYAxREgPUrRKHDJ7PCe4r8mB4JHzfBvAjtRcg2zK9Px5mq7c",
  "key3": "436VopiVU2NCZTu14TCxCyaatW9HbdBoptwQvrfHagunHZYU7SP5t1KtNkk8qg167s6652ckQ6b9avEnAT5YEX21",
  "key4": "5A4cZp6ebaRma1krPAUDiSPubcx9BzGXWC3x15svYmeaJL4LaEosoXkwASJ1ptDTGBQQorC3YpeGDFQnWkA4quiq",
  "key5": "3fF2HwBCVdg5WxAWEjgwiyJuSxTrXmEhtsMLgpBuXSN4AKm28mb6iHhTYR7sQfcjijgWY2AnYn57wEvzdv7X4U3d",
  "key6": "4ykSv6yjDAeM3B24sp7ZDtNtJnbyzDvBs5egG6ABBYoUHhZnPcNphyoWko8rKN87jKL49AjavaWiMWnfVsBsGqzv",
  "key7": "2wJCSqJkacCMF4diNco572Ft8SacB6tKczmwd9qBgX74o9m8pRi1op6i2GBLkyBf15QwiR68TJnGMjA6q8wYt1cd",
  "key8": "65GKKpAp6aedcJEQwqNwSzXSrUZADEGMEodmTJrC7pPD771LXLGKofvXFpJY9cJjDJ1kJ32hRBeCudqvveGz5V7v",
  "key9": "2uVbAKPSyfrk26ysYrp3bH7spjy4U1QcJo1AtWPj16Cb5rZuq8rHFYU8aur5A3YTM3w7o4WxrCmiJxNd8ndqMurm",
  "key10": "3n8HNRumB7voaYZvnHe2oZYet1pCTnSghkiXNyf7d1B8HDrB11PBUR1zmgQ9BG2mtV9X9H9wogz7AAqt9zmF88dP",
  "key11": "57CggPNCHeSAuyueFoTNbFCYahFvAz7kg4uqJWrGPjTT518ddoUpTQfFeCr6GixBhEdvRqicfUyNvbgWmMQpxQFo",
  "key12": "2X8n8UppUEJ6ZoJUJ5JrG3o5ykDuQj4cRKNZ6Y4HC52vxqRhuNRiRLVs3L7m6QBmpTRffDPsU5xQvuYk9mFoDQ6p",
  "key13": "2x2fgsfxmW5uEnD6dXzQbWQXb3iEPWLcA3yT7uQYNQ1FMQsNrQTudpNsdmEecLn4k1ssDuwPRaMxPLBRfF7ZkQvo",
  "key14": "Bmz96szqcagf8ZFPyTfwD2pmRszRdDgoQE1sdsqGpURZdy8pkfDGPjc3ptizj7N3vEdwmgijWWrHdM2FTf7VLGw",
  "key15": "54qbgqX7VCHCLDnXiX9WQa9zJBpgkR7brygVStzxvbEm6TgyuTP4mcYNviPk8c8awJTTns8SAiCjBFoQ3cDF7A6k",
  "key16": "542YARozM9FNL3mrgGFGrBHs3cgLV4dbhrozkiwnyEaUAQjdjp6qvgDtWvJsZ5bjfXtbm4EArmzoyZu6aHVLQubY",
  "key17": "zJctuKUCUaCKhAaHUTGbdC2iHQgFX2vFzhBDQL7c4JFHrpvTvPSyS6KYhHmWTJKV3Mh49FCVFFLftu8EKV56PTx",
  "key18": "UwR35GABW2Y1ZRBU6y1QPaBML59kKGbSAkRH7yQsydE8ga5PXhacBMr3CEPfvxqShR86qhkF74NviEkEj9QVkdm",
  "key19": "3PySWop5X61e37JAkc1XSYQWjg9mohh8M9NRZsUFdDpLA1TdgXonVEc141McaaqFfP4ArDcxfoWwsGNmSwaTt415",
  "key20": "2MeswqmfRgVbM2hRK6gz3W9iqcz7joBgBVdZHEbEZ6XZx2uiu2uq6FxkyjjZZUMZVshNdZFHC32EoEwasdD1SGvQ",
  "key21": "58YCwaS4J5Bi1XprSoeCpPn3QEa4uXrD2YfgFwmHNBbLjesTk5rhxVG6GDsVswc5XK6S4EgqEj5mATbykP615Xc7",
  "key22": "2bZFMdL9vc4WQw53SdVS2u8C36YKQrNeGPTLEKQZmcvmDTowJEP4sZh5TsUanepwZPEPJ5Pd1YDoYv2Hnro6fiCJ",
  "key23": "5iAn4uWEwWhvuab8a99dJToaby9bbmiq2QCWz8BPPPPKu1Lu5VCPc8r9ZZDth7qtAexsidpwVMm6zg7YxfDZKECS",
  "key24": "2fe2nPSnuNbeNDjxiJymZ9xpmxuVt4joGauScF8v6ryMaZbdBbyL4rGmSEwV1ytvDDhmzFcP6QJeQyqd83Az7koP",
  "key25": "3B8tcDELPqE2GHXXRDZePEVrre3SqYGrrc9gcMcgtNWBf56hfdyHRMAq55v3W2gsq7gVgT9o65Lak1qpg3XYVV6g",
  "key26": "2jKtu29okN2AqUptYfmBxK7cbbdT18jyNA7wxJ6gavRE8FiE88e2E79t1p78iskwmr7aBBgJxTXKz3MxtbfVWh28",
  "key27": "4om7NejyzLi9kc8S71JHri6Z8iGya67YE1xFrS5GayD8yzNADjh7C5ZvbdnszKEyQj3bxe4BP1uD3asqgNdbXsFj",
  "key28": "5DTUBbv22NhKaJX6auzMWYnUL2jdTs7Pd3dzs1rgpSEnDAnTfpknjSoEZCcUXywnVCtGR2PrRtpM9WskZV7XzWGR",
  "key29": "264Xx1ymRJN14ZteyuBgt3UyrDRMmajkV2cpzm9CqH9RENAgf6ZMHWdDi5xCpAjbRE1Fe38acn3gedcoCRfqzL5D",
  "key30": "2WC857r65BfbZsqeQRDd2jNhwjzTAxK6cjAV2t1cckwuYWc4afMQgJyyPvEQAA9tAZjEtU8gzXkVRjb7SSq8UWdy",
  "key31": "9noNLkJ52sRgghWJ2bj9D4zFteSAF3Z236rX6gCDungVEZ1uAaDLYeeCHbR6HoqAmru4gWuBcMkRckHm7QSYZZT",
  "key32": "9xRo4PBEqm9Dva2YB2xseHpSSyVmUZ4DWRqaUXpCptbJE9ZGmbcmHgHYjt5FxUnT9YoSWNoGvYdycEMgwiLwN5e",
  "key33": "5UpYunaTAmMfGgGk9wZQpvoSTfPt6ntb1mmPD6yRasddyJBQ34PxocmuB5En2LRxJVmx1L81wUdvXxMfytawCtjA",
  "key34": "49ZTupQPmSRHKhrNnWaL82D7Jcq9NHWFzGE5juVL3ew5CBcFNsG4W4bdTut4XgqTkuGySiUhJ6i1XzxgC5zNkdW",
  "key35": "kZYJDRJDrbftNq34ZnejDR466jBkW2uQRGj6vVySDGTU1rg1RYBPmJ8mjYEcs6r4CNcX93vVvB1TNMPD2fYyagt",
  "key36": "4SrR4z2nRW517enswpRLZUxCB3DdzXoaeg9dvNdaTkfShV4TFpTRiyuLCoYoJjZC1BWcTkjUk6eacdf2h9PHd6Wb",
  "key37": "22m64RXPbC2ms6CLU4FU99wLZEQaqGyji5WKGwHaktEMRi2m6E5uViKG2jZHYJLm4Hhm3BksX278PNc8VJ7qvqzq"
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

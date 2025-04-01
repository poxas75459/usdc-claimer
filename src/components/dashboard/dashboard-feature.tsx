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
    "64QPkXzGh8rAf59SvDav8W2KZ1sgJexyeX6CJTGfjC5iiU3WNEqFHryKhSTFp1p6Su86L9YZR2XPPNRjqNJSQfE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGPtDA4fe5Ast5kcfjg2Y2rpyTxGjyKqNkyH5RATgDpKfDmvvZfw9yWUjLJTh9tvhArsQZAM1ApdD3Y6H3X8Lu4",
  "key1": "2Vyd1E7kdmEDf8iruN5njWPSv1JLMr894vRtjzrUB58yeo7FwhWFk4ad4um7vei6PPD6KLN8DQFdEA5ZAyEGEZNR",
  "key2": "5HNSeC2eJkFDrdhvKBZs1wXdkgXXhZ8S5UgNXPDTyzKemMSXw5Yp4putT3yAN3U5HWXVtPpDQjeDg3i2dsp9mS2H",
  "key3": "4G6du2wEE9RyJW5jqkTBW2kwmE6F1x73XfamdvqGb9zuPkFjCSN8QiNi86EmxvtCVzQ7bjujmKuonkXcTuVRQcT5",
  "key4": "33A6h4Trx6oNUHmAWhdKu9s79dyQcyVBSEew72NsqeHWdA4VmTJDVaiiSdpXXJeHZn8UTZfLyn7JnYxjuNe6JYHb",
  "key5": "23VZ2ksyGKVwjWrpLdd7CQS7MHPLDJQA4qtFJpxPBUqczmr8XsXbMJmEBDdDy1n6ooqhbdHiE9iYnhpsuiqaYrRu",
  "key6": "owMPUvb6di6a5At4f1Gg2k36yviyw6rQtMFfhYCxNqypJQQfSNCBHjnAzP5CoeygDcF2CB4xneRNHSgS7pK2A3X",
  "key7": "2VZMsHcCXvvEq5fVZ4uvtDC1QamcjX2vkqE7u3j13aXBjdyhhVJm7UkJT5g4b1HBo8kvjnJpjQgKQgmNQVwZpsMw",
  "key8": "4uxqNfWhmkEyzPKC8YaxLTQQ6izV91eMAtvE4zocW2GXiey6qAuGsLAAK8LYF2sRiSTLxi558YwhhgQR2B3CyMVZ",
  "key9": "2M3yiUKsWd8uYby32PaiH1mntBDURPoAZvF2BnzQ7EnxC6H9KRXMGxVtUcpvhTuVve87Wn47rQiaBJguNg3Js2wh",
  "key10": "Yjxpemr4n6EL8j8ehuQS4d1wa1Hk8g6PZBNe9sSShYC1eFX4QAtjWcWmpo5b2g18zFPrXoD4i8B2ReKFc7Hm28w",
  "key11": "MtGHnNjSckxXcia1nhQYXvAxnVYFLYfzTEGFXdegKBx3Ciz44EKxKoFfnK9KE2vBeRajggvXjud3nBUfCS5Eu8Q",
  "key12": "4sKGyzXYwVAfStHcBSvFwZt4Lx365Kwm3TKSNB8Cmg73fmDisMZ2BqfFBGpWHxRywbe7pKyeJhVJcaQFGrQXFLyV",
  "key13": "2c296DKqUATExmqXZkNxgczSgmAb2sWuuNZLrTrNvfJWKUAM78ysrKbiPGppqPy2jYE2iGQ38VkRKN1qTyTqWA91",
  "key14": "4NdmB47DkWpBWz6GrxBa6XVsyqLrWhyM834DbZAC6ApMBgfkzLWuLw7ywpmfSPfeQbSDmgxq3kRaRMERkQAks73R",
  "key15": "7LaZjTP4rSpjHpxYJspnThLYN7kLHTQpC8E1invztNT72N6kU8WQDP1trxsD5JkWwG9eXegWiUGj3f7kgPNDBU7",
  "key16": "5R3zCi4YAy5Cqb4WnYr8iTDtzmnjbsvEpyspRLDnHdKJPJcVCrvFNaxxCgsnMGNjiXzQ8Q7UDwwNACXexB2hjPJ2",
  "key17": "uANiKW2Gx33SU8En3GidgRjRGVVFWTE8SF7t18PM2CX6jogGJeUeh17taUuB2NZaX3m3XLM73MLdezMkuEFxCXM",
  "key18": "gGDuHscyGt8kvx1odUmFUyFtmtsmGo6UUoYcYG4j32KLmZfPEHwrVFPiXC1hj8pfNxVPTQ2MhEEYy4mS1296Yda",
  "key19": "SXT8oojFZnWmPk1eeSrBf4A78f15YwxDch4n1UQ52R2hmBa6Xz4pVYiWmk518hzXwfQK5sUeQvPqktszFWBs6K2",
  "key20": "2qmFWMs8i7XcfwbwqHJNhGREuwC9D1MMytFApjqpNBt1sY4ojuQB9KtJ677BpHVdrDqk6XUL2LoWmWHYTrhvJX83",
  "key21": "5zkHH28e2y9uMqB7wixap8UtRSt8h4vgN4DDJz5YJ5SD8CbNNZw9i1KN365c1Xf8xq6kw1YYWahErE1PxkxoPAVQ",
  "key22": "2T4ktkXBRGFQN6V4gUpYEEYtJ7JRTjbJQjx7RVpsE7rvjzpqcBCm4wpXXT8kS6Vr6GwwuebiaLzB4D5optyRJvdz",
  "key23": "63zXv4EU1A7CXiyoqdmT8UrPBxdXnpt4mce33Kjy3SGyE8pJKFP9MnsjizMvoXdqP73gPqkw8DYVVvrhtjPprVgx",
  "key24": "5Puqej6gGggSe6rbs2RMBBKp2wkbEZL3Fk9LfjwhqjQ9RzmVKFLeh4PHkdYtG4RJDfPRoeLwiKfozQ2b6TW8uCqX",
  "key25": "3fV6stxrBHRds6qcJLZzv5fEVpM6eVfshamFUzHh26y63Bh3aubBoNAyZqPaLpAxT2SonGUbH8oi8pRcazjLCja7",
  "key26": "2pqFSHBGtsFqpLh5U9fLqYxPVmvN7Si3phyLbsks37xwCTUjrXb5x5Cqo5RGLByguMarx3QgS1yvK6zrPhpcKeg1",
  "key27": "4VcbLmrjuZYZjQLLtJXLTVtxJKEuVzVoVGa3RomFJ5zsv6oKmUDXSGUELJ529SJEBMHXoKr47MFqjJe52G9L9XtQ",
  "key28": "8JHuSrdfxx2swnndUUQALw3si7vbYhSLm9ofexiXPp7xjCQRpijeqUKzgjdt1tLhkiZVV1d6QPioKBZv3kZGQdv",
  "key29": "4PLNqK9H79uvAfs5vqiaaaaoQjaurPtDcnuQdRCLaafnfHc7qcJPEiDWXU6h91TfuZwJbMv6Knp7JPAy2Stp8FqR",
  "key30": "5BcffsQ6Es8jbiZAKrvqPRXc6zg7KQDQ4r1JsP2vWqxwbK4v8EHHJKWMPP8fJYy4qnNopxWJtgWufnjKP2La748n",
  "key31": "57kxJ4hXCmTaNxyhzzGJKRZEg4wC2VtS8z6koKJDPeusj7gqbgyXrficBk7bru4qqtmkactf7NoBzFyGRTYn6x8e",
  "key32": "4FCPVifNKwx3tP8g9GNqGVsKxidtJqc9SZFJSoWu9SYwcFtTpg4WioWEXuPhKcrfYcqm5V7SERvhRYsCLrQqSuqP",
  "key33": "WoW1iS1NV93Ki9EsN6ic6sYXDtgxpwbsXdmtmFSBjhtjckpMLji6wdqDopP5NTc2mpdKrqEw9pHANoAz6euVpTr",
  "key34": "4hQFdykB6JG6dBquVbrhZvmSwLa1sfNtGFMsnqBYRq8gwCnkRiPpWzKkrtujw74FGkrfp51XK8tncdJDqpCLf2CK",
  "key35": "3d9FRSCLeeNTiPxbyJALiGdz3hSZBPdi5WCgGvwJwFU9yPx8QuNUzu8wKmBSV6rsFQaMotJkT3pD6tpHnj3zviy7",
  "key36": "5VS7G2vu3ec6epa6BEjdaDVJFJ8sm7pBtexXKo2VJRi9qjSPbsekv3zeb9F9AuqKZ9qHM7nvwCPNZQLWhqmueWWQ",
  "key37": "3RsvSVxB46zYe4QLgnyBXrkhSUNkb4zv82mE6eAyRQw1Jah7dMVf74bwX8m5PJbeqXRsxNr7nJpnsZi7aZYcyCmX",
  "key38": "5ExL31RpkVxoJgtyqAe4LyeYKQ1L4Qgv62TfB6VuBRxy4nV2pv8GPSE3ZoJH3tWhkR5RCnyqJprxDN3Tcp3Y6QLT",
  "key39": "61cjereW5zgbe1zdDSi3xhqXKD1rKmNys1vLssTtS1Zscwsx8Uh1h9AKFiZ5CMk6GEKGraQnWTNqNmn3ZFaqmHfs",
  "key40": "ZL3QvYdc4akGJWvGrZ5hm81S5AfeQ6CfLnXPkgFvnfxj7XRPw3W9st3Y1B9b6FxqF26HiDBcSW87LQeUN49EQGu",
  "key41": "2HZiLX3GsBQWAATEddzGPDBmPVrcU3icMwqHNqDDmY2c9MtN8vz5CVJLvb5jdzzbyyN1uWyjjJ7ydguTjkHbbNRK",
  "key42": "2dJzEHJyPcasUREozEQCp9B19bFLUxEJXotjcDN1weePaKmxZ3V21hx2YCacF8xydTApwgL8sosZHLx9MzdroWj5"
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

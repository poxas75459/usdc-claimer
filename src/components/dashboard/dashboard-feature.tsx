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
    "2UwFNrfAzxQTEUF7pUuGBgDHbvkbk4izsqTREpCfHroKY3bxRa1wwiLzsR9PiQsCvogCvQ3mb9GM3i5Z3pbeZKCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61KKVzrXf8TxYyezd89vBQwQ9eghqKBhLfYpfCNfCQ7VtuzJ5AcwXFTwwFxnyD6HQAYxPSj6rpVReVNZP6BAfpPq",
  "key1": "2tNLPJFEhZN6jzP6ctpz4Y2BhEEhP5ykEFo1gRyG3h5Jxq1XakNxShX2t2hSQTRrLii6P58ZCuABoQd7pXhTSKNS",
  "key2": "4x9GXK7tFkx1c3YGfy4tqkCXd8Vui9Z4c4ZTNX1fpr96UvJBBQQZzhcPjCXsPBHW8i6sE6DsE5sYwnpdPnByWzpC",
  "key3": "y9BuVHinQ2MACBtW51CkhcunBFUXhS8Xewr2WLFPGBXoKxXhh7GR6jCgeH1xbnZxhSBe7UHs4d8iV2jCSpqG2u2",
  "key4": "3LdSS8uxwnAnhaZrEXz7FtKwCe8eUaB84aWMWsue844HhB928DrKNiDdRgCdaDcAiwzHzzSvitFU1fsJswCmV2Gi",
  "key5": "3Yekt1nmd7oKALgbrsUWskE4JZmZJi7eABEXkdXMhsRP7Nzex8tiiM211vsYv4tEGZqZgoqc5JURAUJcrirvo5a9",
  "key6": "1wVFtRcDCZXwqeuUtvAqsM5BE5tnQw8SMFQRoy9zteRs2MhmqcAA7CoX1pw6V4ucBap1fQMWAEshkYXc5Ziriwi",
  "key7": "5Hhcr7PPaSKBeFeaHxgJbpBxKjZzhxYowAZ3gigRApCUShtpkfBBxwZg2sNaxvHRcoW2Jko1RWDXJhdaNcaGbqtj",
  "key8": "2Kdu4CADLdGyJWDT9AswdUiuaF5nBBw8nebCffc4hGRvF83fTCuz8Km4Rpg8E4tahk9j3yf4rYm8u9u7YWE9ChZq",
  "key9": "2GFvu6Qi4xSCckvktMrrh62KC1wkzhayaG43XBeJTy1hC6U2VVvzU4rqG31yA3V6aPEAUaWT4rz9QrRmWKoK49Dj",
  "key10": "5DdWNSL1CUodF2oozpzYtcw4DobGdChLgHQtgcafGXvoyR79uYLRLnQs2Kb5czFpmujcgbG33rUpKiCYga9VgCAC",
  "key11": "4byGsoYVxezqxwTRYo1A4xjzgUDFA93g3nkw8P4C4ZLC4tuxwSHqBJTMoCUN1PtW1Mdwj8Xy6WG2rnE3brZPqTv5",
  "key12": "4VPPztXVVzQdmcCsrriFAMrDZciqBdga24NCmNKdwPSnge3ZVUUhTRVg8RA8dqGMfw1Znm1J4LBdrtxSX7qXkVCP",
  "key13": "337CtEtvh8GTFwmqYCi3r5cVaYXTmv5Q7ZPJEE6iZAEnu8JSp6BzmBaN1FWRUutBonEVkX5GBU661R6eSzmU5zbo",
  "key14": "8pM9kZWj3i9KBY9DK9pQd43Tww1nzVnX3fSZbTxLWdJu2ngJ4V7WjoW9kR91v6186toYyS5TJbVGyVqgMNuKrNJ",
  "key15": "KMZzhEYWvu21wfAjThppVMz6DZEvZ7Qc3pwy6DfqEeMzLHafdyyisrjgVYzhUc7X8Z6mhjebueWkWAR9kXTwLF8",
  "key16": "36L5G4G4jJUK9HhYxJsbXBwc7tuxjzLX9FwbQqEKosSMyFih3Vf9TCpRvfD5QwhuSTkQp2Yco4X8CRBbrfUTACQx",
  "key17": "62TM3CUDtoz88YYkqUzpCdsWK4RDhQTg5w8LTMUKmykiiH5P75t2Vxgis5BjFdsxPubFoHyE6xVf7njw7ZRk2fWx",
  "key18": "5wW2TJTJvp4VWD8BNeun83JrrHmuERZZtV6CBZ1cBquDNyTCuVw2s3CU4pvXs64WRZA24WzYA4CYtoJQSJEFe7Tz",
  "key19": "3A3pTtNsMcZBR8uQLqDAFYKgA46P436xCqVnunEEtPNKMsYLFm7Ws7TWrTpcZU9ioaoz7GZ5mw94JneGhcbSPd4X",
  "key20": "5ji7KcuzTQ8vGtWSAJBFC7rDC3Xf7X3YNgpNsU8RiSsLGUQ6FTTG9HPoPPxheU4qXz2ihATyMZvJ5xJWrB1YzqoF",
  "key21": "2aTDicwX83drsMjfQy8K4qCVWjzw1SRz9F8PGPZgD2S76tKTEwjGjWB32t1NuSi69QKT16dNHV1dLEhsVQYjdM1R",
  "key22": "5mYcqqWmQmxt22ukFySWsVSehU9qCa2UjEYngiWbcQ3cYxNi94CLpK5cxhysGqsFBUP45GkkGNruph7u8jraneyV",
  "key23": "66dAVv5gcn2YyTFgnumyhXw26gN6a1krmdo92f2FmcMy9xbJ2uzUtyNv1dmSoH1TNDfSgWrRPT4q5XLsyzekRUqM",
  "key24": "42dt63SAAP9LoRrF7nz11DV13sszy5vGyw3N5WH258orwvVrMVLKgbz8puXbvaFrqNbewWNi2evCh1rrsUvnHWCB",
  "key25": "3zJ2MvNrbddk2tM83bnMg2NFXzJiHGGtcmMmrYzovG7exyknJttxhGFeedMGLRN4VbbeWMmv9MDUf9eXqtSVnCZW",
  "key26": "3C6jkMRE1zk2yB4HZQSzByoP6gvT2fdSqqbByVRPG3muBRn39tFwZJTEpopAK3Az2t6Pmxx94PDtqRd6GBEnc1Pw",
  "key27": "4Bcpup5BzbbYWPvuKvnHD1mddk1TbHr9C7J1VR4ob5PQTfZUTtTQtwBExhT13sZB1siaDZ4un5z1BjCrT9DQykjp",
  "key28": "3DZwtH2k8B3LhyoXvkCgtnZR8D6TSSKVg8vbuDhQr7CoPiw31B6f1CSLpuYSD3kzjDtTBo2JeyeLqEUorPqY1rsc",
  "key29": "2qtdck6DYTcTinb8Mmqc2yJNWVVdZBgzNfrssvJjDWvG3LcvvewZUNvHbd6DrBrkwWY3CHm5YfcTS1THsvK8iQP5",
  "key30": "5PKaCejcvmwvf4EYof38qfyjgxhGrgVaay55PJnRT2nEasV9nrk211cVQA8Rkz1rPiD7JY3LNBfPRmeiDi4ii8y3",
  "key31": "5GGyyKMEC88ZVH14SUSLCkGApyVWta4C8UkJWghRmher2GatTSBTs8CK8NgQv3rd7JKMn4WxkwUKqxwHgMVvbcQB",
  "key32": "umQhoGyo5rYyx15j4kWVHxQrCN1yvMz3QkZ9csqL8nTG6Wg51sCMkwomP1a3z6GBy3GzVaVENkCkHiTpgxXzsLs",
  "key33": "3zC8kFCkggTvqtbhzfo56EmpCgCsQUYhysCQED8fDAdTDNEQ5cZQPMtKh6Jqf3UpRiXKw2jGytxtsrXKSZVtCTBR",
  "key34": "C6jZZrAZZ6fXuzDeyDGeEGnjtxUk5q5CeyS9uvpZJsZbueov8TFdsyjpxkymFyFLyvRv2QSfEpNQ3ryYtb1f118",
  "key35": "3Tmtn24kH88oU5dAzvUmbz7p43aezjV8bDf4kPc6Qo2HsbFbzoHg6BjgzS1yo5MUqUXhNMmrzRrCW1szC3imEbHT",
  "key36": "iWDUhMFyZ8tLYgfU4tiewAAUY4Ff9RTX2PYB8djM15w2rYSwJBqZyDGCov5LGA6CMo1jFRMDkvW1YNYvB6DQacq",
  "key37": "2B4vzjSzQY8joiPvnoKMqdgtrHSrmbw3GqPpLo2KKbVwXxjM4mvViABpuZYgqjZ7ySr2BhDPtkHLiyNEXRwhagiV",
  "key38": "N9ZvSvhK8k8A15PmD6o6sCX6v57Ezt6oGXSM27AYM2ZLamLYPHQkgZmJ6X2MwPF68ygUxevj2JnFJjpTj1xd9Nh",
  "key39": "FxYYMSuQKsGcL9Y5i8zFhgFHzB2M7EayZBPzWuM7nrNBonTiF6PugWrGGBF7zV1q1kAJ65vX9qFoHZ2FLwnp6Dk",
  "key40": "4mByoq1DpqMGUf5gVjfop1v2tLJunALPjLJmbs84JnR3tpFXsfcSVq8bvSrAH4sB8e86WuKGoUcgD38HKm9RBFHp",
  "key41": "N74KR3Cz8pmtPHrXjFkT8uw2BHCxbuRxCiFmi1Ph4BS5TGoePKNQNeD6fAaB4CdmD7ESaCdhEk7P7ChMQTTHWn8",
  "key42": "3xZFPAK5anYfcKsDoThTU7mZSiCSMTyWhhqf9yFXwNSF8UDEqiJwEYzMJdxb16ndtim9rzMkN42T8uU6QV7Ww57d",
  "key43": "5EcQrTBkLBp31fGsjhYjRtrzfGeqqcqaW1NSZMGA9ay6HuPNKdCGpgP2iLEr8TNtnXXnZi58NHiKJiLDipQeMiWJ",
  "key44": "5YTBEsqMgA8hsFdRMXwAEqifwLoKoveG2NezdBfcvDfCpQMFfMvGEygyHKGwZfxnv8Tc5UqWuwb9Vsfr61hv5jGL",
  "key45": "WrPAaLV8xAxeb1yvf22MyCKX56YJp7K3wdJ5YzGE4nTke1AmFqgVF5zk3T5x4wtaqFgyYkaQ7w6KupbHvPmyLub",
  "key46": "43L5bkJWbuZqLGhXpoYBwZWyXJ4Mf7eAVBUSvp5tYNHAqZbKgLKDZ6WtKfMmftm2hiWsG8WFHvW8iye4q1wo8w57",
  "key47": "5XN2WBrTYqYZCRAs8nPKifsbWnGNbNKN9cqrRdf99Wwnj8QCDETZ6DJtxGPX2oQdZE6mbGAHLuM1t9Zvh2fbqmQe",
  "key48": "aZa1mnvjVnT4kwu4nYhcUgU9i8mPYygMrwkAGwCiVXSeSfgpGwLvmwB8az5r3u2PxkgkBVFfK23HwHXUECsbfSe"
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

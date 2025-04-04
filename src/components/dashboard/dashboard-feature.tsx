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
    "4qUvMNifYk2intppx8DQxq45hoPKgD4j5u6DaNmYh5Mn8JoTBc58jp3v2ASPRjG3VKtFxUrC7yKmhzTjAZnwy2ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "563rXnr9sRBPQ8neZ1S4viuxo1GbuzrteXvt9hqLgAn2wpp3gd4WAN5kY6JWLWdRmTxwqnr2U2TsngTeCyW6KMmw",
  "key1": "5qUwPF9Tmc61xaTax9YgvQzPvCAa4zXSVouDmu4PShDRtfbXoxxP6Zpozysb2882QTXG885Dx8E5oDebcCu1JyL7",
  "key2": "47JBRfMLSqYER4MHvb681qdFZajRv4gT6CmpB4b2JNuHF87iFhi89a3qs6NU1PurjLTSLg7zRNC92of9455LjZyn",
  "key3": "4ZPUKxyLsQYxKg22jj4iTeYoib9rStHyUZ7KQnGPeYFhbsEgbmWcUWjzs3VCc6BD8uqPM74mAm9zUVRKFChsBiyH",
  "key4": "5URbxy1FyYVGB4MFfLivKfdVfkeWUssrWqUUNgjLdx45Gc3KJ6E3S8y9eXdEAzyEDBCqqbytKrFWDFz4cor6LsGq",
  "key5": "5euQ9HG8uGRX13KtMjazJG7gLd3LnvxvaaTVDGpxhJiiDWq1ycXdn5WkKKtiEvgwv3LqUMHDcBcMGoh1eCxBN2nn",
  "key6": "36Jtd8em6qNrcA7kGDMg38c88oPHPVVY6bCS8cAJ8X6c81sKdmZYKPJzwqFEbhvrSLnB6Z4BtFkrwgJAei7pvwqs",
  "key7": "pyFJQfZCBhbvG23b6fuE4sEChRfBvnwH3aiR4BcnoQcX9oVwSC4g2enBksSPcETWf2H7VGMCy7fvu1MKyoro5Qx",
  "key8": "3B8pXCBeNoTrhSSLDMQcycFgSTz9gE8ATVKWosuGhZAwyiYrBjuYGKeFghiQef16Do9T7g2SRD1JDicoKzcLNzdX",
  "key9": "3Gf3r5sLVECB4Yytb9rcMQQfcRioH6HZ2j2ZYb2C1Ti5dTbxK5QrPRH2im1wYK7mSwLuzbK2QuvQyNRbwALcq7yi",
  "key10": "3vov8aDoZcv3E4aRd8apQ2PhLiJe3vTvktEMfi6XPdqavRTT4TnXm2qJr2wqeDWwRYYwBvWyvD4NEbaiZ9yHXaPP",
  "key11": "4WGB4q79vjY6rjWNHaK7jNhUQz9xx4dViMybcrSXD6C5hBH7fWysuBVmwCfc7DC4dZNnhv1Y9zm6ZscMReqc4619",
  "key12": "4Dp7HWgnrpUS4uaHTrXKscjsragxHXyhMLtvVxdUUdSgUNRwUYAK3DxqwdjNaFWd5uW4AkPUhQdjVWCVaEQ2Nm8c",
  "key13": "3Lmd35Dz1aDoFBi7m23tGUyYgatZWZYn6aFc3QmZoCsv6grD8GsgdhN3YsswMgsohoPvhhWso67XgYdUphxZK4Hr",
  "key14": "2xU9W4W8b3JeCigU4ooV5Eb6yD9WZVUaxV7R1h6Zwz2wainhw2YY9n1sbwahErz8TR4cmw95wYD85VwxWuusXa5w",
  "key15": "2o5WmaEp93AcrLcppCGyZVfvvRfPw1KaNzs2r51BgGqL5jjYuPkCTymekLjjHMDLVsfykLXVdXB2JMqAgv1EZ7Sb",
  "key16": "4vWvWxBS6ALnqyukw22Ep1vthhK2qyoZBcygJvUqVm3wtSnurzmKjnX4xw9Scsb67TZWJh2PYypGhhd595CGMLtX",
  "key17": "JoDZaASZV2RBi682hjxdcciygTTciZzBFek6HTfw7fawFvNT6vrhmTdjUWoFc9LdFZn8KnNWx8v7JSudDjRUVYU",
  "key18": "3DiLt7Au8dnCbvjqHLhKbE335twqPeHfnr2saGjDKWwZDnv1DMFhEnFG9shdmNWQahCnZYqVsR4sRxdFZ65UPS5D",
  "key19": "5Ys7C9S4QxEm27p4gD7wf2EEpUNkP1Kkhdfcx6kLA8ZRdiqW9Abic1hxKaVQeR3a7PWQfdxcduJ7asgtxoZ3BrgN",
  "key20": "zbJ2WiLsdSEvhd1ss5EKVdBwjDMsC5gujwzKqZWxGR4uasSrDwGYnTZCn7LsvNpUxBprKmAwmwDAM4y6uDc82mT",
  "key21": "5UjGibzsmLuHQkz4QkZkCsZcSV8qBc7z7DjqTj6MWu5oeyoXwfg4fExyy2BzoeMnDNhHnVVi9fKWv7gyWYBjQJ8C",
  "key22": "dP8QTdsBGZDmUYnDM4iWZy7QfwM6WzGw7JgoJfkNt79XW9MSeds36HybPpq5LjWBYhijdYhpLRcV47GMAvhSfgc",
  "key23": "4TfGodu4HRzKoFcnkpiCCHp3HMxyMFA8QikHZ7uSMSh8VmAKYZXBgZQfsBnySS6XEpyHPR27TDbchrgbWxJBRoHb",
  "key24": "5qsiSh2mEmShwzibwjSuquxBu1qR5e3srfwJFDWfx4bd6Q8Gu5CddBi8MnZd4MUcNheyD5Z86CRP298Afd9sg6w3",
  "key25": "5n9kdWeyhgZ1b5J1646q9onuMyefyhDnGbd6RRTmRKNVcNF3f8UAk96Jq5E8FJZ8qbWPRck7JBJFBdGoXJpVtFXk",
  "key26": "4inHeANxqEYAJmZShVj8mPY8ESBmtUu6onVbdqfaoXdvRS4HyosWUUfcZyhs4Trk7QXaSXAP2ExuXPdjgoumC76k",
  "key27": "nM6ri5ZvMDRq7icTHPAB3ATq887uiKVKzyv7rb16yhParAM4osavAoCcpQR5iVTfWCTZdsZexvrXBpur8CMXN9J",
  "key28": "sNmMnVWnPyDYkqdhpKNz25ocf36HfgvFTYXubb2DTTb8n9pFipqVnUEWBuzwYsMUsMGDk4wJPkLfT1gyViVBLA2",
  "key29": "3eMM5Ughi34Uff2Mqqmk6UHYDWXke11WP88DM7VCiRif8A6egPTz2nPWgr8nfxATxRXJvb4ADvdFLi9osS1aEby4",
  "key30": "4RXnMWWMwCfTepgsHUqsnA5KZ5mGW1rYLeRJsmu7qMJMxZzQ3is3ecxxCKwzi37NcqW5ZV5gJCBsTnTCfzbgqv5G",
  "key31": "4Qm1frVZzD9BzdHfbggefFnCWs7UswsrXqUVCFV8WEkjmhCoAh7w5fnZJ7n75Pt3hZ4nNMYX2nrMacR1ixQL9YfK",
  "key32": "5HAscp243L1Z4X2o5855Dfn27Gbr8zx8NfLm5y5C8QvwFuAeD6P3hrmkmAT2BvbZBfPeTj2Pzpq7qtKPKSFgXEUJ",
  "key33": "35qRG1FjsZPEBS7VVDdgPerzABjcmzxEhDwkLbwxwn8EsHYZ1C2ExKvQ32snHhT82kkgEUevJZtZpGSFabgXEGqt",
  "key34": "5w2th8vRkvQiKu488KYhKF923sMUpDXbm4gS2sZxVQWV5kC9tZGY6du3Eih44d99Xpb3k4vWjfdFTCdGPhQpPYLi",
  "key35": "5bhYUiF2jDuTFdjs8BTontPWYoBymimmcLKa2SDyH9Qz5YFFyBRPioRB23DYUGZFMTQP3RkH11Q9ScjEmTrJWFXV",
  "key36": "4oAQvRtUcNXLLsYbbixoBzqJB6Xy4483LMbvWHv3T1kGXkNqSw9F4zWmELjyLUNRgrrpNGGSkojChuANiUBd4ofE",
  "key37": "2bS1xXncHcrdbVcEkRudkhA99PQcT3ZSRhjd83DcUM9E5JHcPAeAx19SanBLcDC93L5LvqnmYV6oVJGfzQSArWS5",
  "key38": "4Pu1fVmLTsNs5bcZJGoEvpHxsgvMRXaLwpvfWsCGDm75vbBEJzHrC3xmHE6ekXxVexdA2WEY1xunsQe2jJaFu81z",
  "key39": "4SPK7bTmMqJesfEfGUzstxTfYetbrD1w43GQ3uoeZgkj4pz1iUrMJC63v22SB8Jozxa8qay3d4dJWTFHcdBnYphj",
  "key40": "3GnLrZuX1HMQjyLW1adANPXTiTgLkQDwRri7Y5hUUQYTDheiHdV16PbuSavRCH5ZBYctE4PKkX7XBNgRGiX8GhJL",
  "key41": "5hnEycYWuVavUKRTQYu2xaHQNv32u8mK1DXcDLuLGyGRNyBoafC5i7cYXBim2Av4Z4e7TsVXfe2wtf76Hi4oBNxt",
  "key42": "37Rte5gMnRAP3dHETgH6cJPdT9VZDtfRPcLv9qafVBRysaVnTiFa6TyEW865Tm7iSLDUg5YGHpPeNwkEUHD3Xu83",
  "key43": "5NnwGxhS4VCURor7PjqMn4QdM3hEf2e5a3nfgAgdULkxMSqmvDuMzvraJmPbR68tv2JTbdvn1pE11LXCiWP2xw62",
  "key44": "5fMbn7i198GngtW6DhfY3ckWqmLHDybzDZVB7Dh11emkhtxYtErDAGc7Bh18sk7mKMVM9pixFpY5bSaa1Z6AsVkc",
  "key45": "4vXuzPDRcD7HAf6wcJQAbojmg9eHykRuEqgkFH9Jiy22ivpEdcUH9k7W6o8YW454rQvv7mdmAiAcZ4SiFuJtmj5g",
  "key46": "3DQUEkcqdgeZD56Yzj624bDnTDHih6NYVeeXiG7zU3rqBFU9nEpWHqct8yTMq2nWxCJcWdnFDRsYW15mZZaeNVsR",
  "key47": "5nUSL3RR1Qe9AgQjBo4wxDo8TRm2bEh8ptmxd1KdHyGE8E5YCkYodyKv8NoqRYYZybBacgpSEgNw1ngmceBs5sHi"
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

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
    "5nL4ME8TUY9apNkuvFP8pLNAFnQ8dtnKPobb9BMF5JrBDWZdeW7jUQxMNN2KrtAUh4JDf2X55nWZ6PbtZabCvesH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2qMGU3KxbNaDW5KCQVBVezJ4EMoUmkyckfxXeNi9Y3s4radfdKVMdnHQEK61GmCyRVNGki23s7oz9UqXKrirmq",
  "key1": "5UcZzxqBH7fXsgLjKDSnBbaWF9gQwPNFGgPHQom2jhrM7ByP8d6yTeF9aBPduXHraFUVaUoobGPVM3sW3ioHdcjF",
  "key2": "45adVBcD9pLvyFSaPeBN1t9ky2t8Ft541hRLM1uAK1GPeWpFs3QxvbWqVfijHcXtWn23zBXLVboP4aJnpe5tSemv",
  "key3": "481BKjpy5cKB9D9gDQxPU8Mk4RqdWGBqgFcEVhsYhgfJMnFnNtq4mh73s8Y7sb2Dhun5jL35DX8JuqZpT6nBy31U",
  "key4": "BaZyWHQHyRMHHKM3ociM6ykRTUkGcCpX1JDCfdzqsVSdWq3vv2sWVAB3hudrKLJiWL4Z58fC3CiQC6eDcGvhW2k",
  "key5": "3XCEfPTtKkZM9Va2LFrAhikSn5X6JT2NzvHSddMSwVPLgvPcw5T3EuAffKciZo6DSk4AAamwT56siRv1jD6wCT6Y",
  "key6": "3adkwuwxZbicFb5RqPgs87dxxbhT8gAUuccK4vaMKVc7Ta8Va16NhGMxjVagn6sYMrpkVdNpnmoVDKP2rWSZh3JA",
  "key7": "5WNM4c6Z2HW8CbsUDNYCgob1GDwghG72jUrRw2rNr7h5jJ651VByRpreEKpmWm7BeF2PuWgkKvKNUmjUrAY1SFPQ",
  "key8": "577W7zeVQS6yWdwWrPY62BykrGA558SmCPwngHjPNxdLHbrpK7xfP8aFnJxrb6iLBhy9UmwjGppetkAL7EfREquE",
  "key9": "27YF6zedjQaYD6nA6Y4m63GQo85yMoQc86hY7vz92iVzi1U9vyg7pxs1ZyBrNdpCLJeBg2u9gA6W3Ddi9HTytCcd",
  "key10": "5Zxymc5wdRKmg6Vgog3YEpzdH7vw3QbgSDYEi2KFhdUwsc3ChDNjmKEwY5nZ8rxtgAKetq8phnc4wyKFRopjKAnz",
  "key11": "2HrZNGNfB1djFPuhBn1g54pgU2uaVUN2JH3QkRpg8NY6zb7CsnEzbqtBcgY92n4nnzH5Lh7EYjN143Wt6xQmchbq",
  "key12": "4nUENtdC8m5WTBT4ZhdEZJBWME3xBWUmzu6mab8DkRRgWohfGXU1vt7ettVHQknhp9dKqxYdqXvkq6m1P2fWUbC4",
  "key13": "4aVZvPRPcFrJWaJ43x2sMoJLKQ4vpUvwr1NZHfDLY4yRCggGzRf2M4BgAbNcUShQnCeUNC2XQfeWusq6mMcnBism",
  "key14": "3V9r7URp1rFH4pUU5mDLBnTWcDdmQxMmnPnpJo7oqkiiNYjfxim9toN3ioyPSmfcGbzZRhTKnp4LL2Aqvxqw5d64",
  "key15": "63yXgZvNBLwBMXuoizVSBjmr9o9ieeASs44q7wzE8s223xemU4Q19uviVwMCGpEUZmUbWU67M734yM9aRCgx5LWS",
  "key16": "4RtgfqsQzEDm5nM7UFsQLeUW7wnHsB6XkkJkHUueFqeaapBJkDBdtYrwarc1Wxfagz93pBxdYqb2FiEvbb3CxUv2",
  "key17": "23PrBWJYCvMoHhjdG4BxNumU2RezckgEcfRTdqhNcmnjC4QXmr5X5fnxCkNfVsthLTsqiwCAPkiAk8VQWEGcoDc1",
  "key18": "p7z7LkSzmJ5fHrYkQWm4PonQ4Eh3iPCkEAuDpnpyYx3a53E5DJFBRwhGz3t48V1muY5PP2J4HA4kqsJaoET1RGf",
  "key19": "3iGJW7vXThRUxpkp7mWbYzpCUudU2VnBmT26LrVqNVpbCmgiceJBKvnbV8WiPgKSYQ4NWwLov9EZQR8iPgUkVbYf",
  "key20": "5iYq8LEq9cuCnzRPSuCXU3pE2YPYxSphzsCE2z4g8JNPefL7ceAHFh87mGM1NjZpcpP3pUCnirD9wuDv7mdWx4rN",
  "key21": "4ghZ2hzcdrgLyvpZckinZrPZpuQyjDEh5xFK4DKSba9ANGTRhkybDdCCeMBnXf52v81Lnr6gY7C8gyan1gm5bm5Z",
  "key22": "5Dfbsc72SCcr2NdwWfsPaCtAjZ6UbAJgHZznQn9Gtgo5PmUvsjn3EVXTPQgGc9Qcyd6dE5bwQCbcgosKte8hdVuY",
  "key23": "HjNhWp2S1vCWWRNqqivjRhR1ygz6GUuQPrtz2x9xegk1e4VVEyGi6yLSjZhUcP7VKoG7VuYQzvYrrWt2XKtYQYw",
  "key24": "52QvpVxbAiTHHDMeuqSyBjBCyLtPxfUYHYQzRdX8bt99S49QFwKGVurmgTYEPpKKXWVgJtS8KNkavkNQyFWRe3u2",
  "key25": "2TamqaDh4oAU6uXUGCXfqzuNDr7RaenycK3geDa4JTm6CLsdEMFCN2MwXiGbA3UGwV2tDUfx5mw3htt1hBGTNeh",
  "key26": "2cMgeyLc9qs3RMoEjFTHiCvKeHmxvRDvs2P7x4qxPxEbmb9dMv5qzE5ptZQsPRu4uZi6871686jgX18kmMFSuqGR",
  "key27": "4y7gz4eLVURf6GcdCkAJpXMdwR4MQt6NXcc3vECffTNZL5ZUJwR5VFhpBVUXx5GSsJuz2rbXWv6rvvjoX4tDP4KX",
  "key28": "3jFi82CvbjLZTL69gdkxiX8TWJx1eCpnmxqiR67mMkJ6K8E2iMV9WscV1Uszr9vYR6wrNknyNJkKfzJhRH5kitLY",
  "key29": "4LR4MpK6jd5c3w8EcEPVBmDVyGdWvaX42GTJzqtf85AaXStNEobXDaq8rm4fAD48ezN6h1cV2L9SKvPeSfyhGgpV",
  "key30": "3QYygJod4XFZ1WhktczgLbE96NijAoPcS7pJLT7jNMP9JzL97vYT6tbv2rTUkj49vdbV32hTkDNELHpgimCR1ReN",
  "key31": "6hgRL79uiMsR8nwFfTtN49pUeCSKKDsbdny7fNFhHb6rN4FZr5wWdhFz1FCZ4zbE3xoD5dZopdRiwiTDaXQtmY5",
  "key32": "67Q15UjPz2Hm5jkb1fYoiYgcnBLGgKJjFrushVAhcTP8X5cBmoHJVj49iL4N8GXC3ZP1baMLovLyRajf1i2TRJ31",
  "key33": "5C8iJ8qgudQzpjNA27XgUsRAECSUDUpuJp94t2zqaVZs66hKNme6eSnMDeQfUa1geS86wVJ6ehrj4F1YzCrrmD4T",
  "key34": "4GzhKmmuAQjqTEUsNaJrjSPJYo5AZv9RTMukTG67tSNfdMxuwN5UCveTrqb6C6Wx24HC1uyPiem45wyBz1gWXup1",
  "key35": "65pYBjHV224KbWx6QtYgPk4Zeai1oU5sKwGULh9S2T7tixboaDyy215GxLBq6yHDEGt2gqeA4d5Q2xNNd2coa7DR",
  "key36": "MGSLJGtcaE1iYjULWD4nVtNA6Qk8uCFWaV3wJt4zakGo2BHxiEHUL1KiBxK3bRY9sWM6RDxEAhkTqxqviBT97Ws",
  "key37": "3xZWWARiXc2bVrPW9um2EarY223MmtovJ5WBNxqCFs8F5V5Am5S8vF4YfJKoa9Udvynt89AieWaVd1yLAAGQC1ei",
  "key38": "2ziGKhxPzgACnnpWVjyjPphMCkGGP3htxErRcWKsJDcuM4duHUYDz2rpq2nkqn2a3KadaYZX6UiZrNiMi3iDJdGr",
  "key39": "4JBrHZgQV8avtVehBKaqWHGZAkQYVurUoxGEmutXSrD5jpJdwrc2m27WMDnHCjrbcGAQpFQV8EgL5pKHo7Lw8gtf",
  "key40": "4hH1BiHCsZBgJMjAztTSnnE2mzrKxMToceUEKnjTvvbyhDJsm16Qr9akf6AMa9W2fdCgS3Pmvm2ZppkmCw7S42CR",
  "key41": "3XyQpwB2tT3uETK7SCGbkauNiKBuwTUT6xcn32DR9QvY3gPfCM2JmMHRGXBJBWdk6iruAc9JMco2oA6Yh7FC2BP8",
  "key42": "3388zAa836gm6XvXYseGyX72gkkDhJqrNADrQfnv99n8UTjYSStbV96KdYFGJhqf2WTmPJw2qqKV4mLMBhiLb9kZ",
  "key43": "Gsa2CUwiri4yNGpT2VMv9BwBTRAfXk9pEcZZaLZM48pVCdDYsbN2z3JpHmnv8qYasGCgz9MSPx7ExVWmosu8ZGb",
  "key44": "3sqo2yvMSctEosNC89SfhLdmSb4MZRd2mjVP8mZaxWEmJea4xcGofba6DFHUSoySAPRfgK9iNxkyJXREHVAz15kr",
  "key45": "4DhLYb3Z5iPU6nfKeLyyNznAWdRETkJvnao5qBpa6ehSWQvrAao998nf5r9edF6fsF9jH5cwgMpEXQfrCytbMeyr",
  "key46": "3HgeGQtfSpDQapxtsskTxbN5SuiFBN8PKkRmkd82XZtDDzJfvrsp4A6MSK27RziuxJ8Z8Zn9JvdY4kQKJeufKy4D",
  "key47": "HZ2RUEFnnKHay5UudVa99uFA7RPEHFv6cEwv5hUmrPUKcsFzSrQvMQdKAfUUrPHRqc9zykHYGK3Yf6DRQWUXP9C"
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

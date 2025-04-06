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
    "3sgSUghNUEnWM6m6hBbvVdYE6XFtMUfbopvjoWat8F4xH5kGzxqq8qafrdmpLZ1rQq7xrYZNL5UbkVZSHEGu9Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjR6e39FBMPyQELpmHxagzZzqaeZhM5idazVNtTXSEfgVuxEFvZcJBBsBHinWpZ6w3iW87QqV8CMn8tJK5LpK3S",
  "key1": "3bkJmjifs11Vsiur8K29RnS3BtWVrkkW6j1oTJY6SNxNURQvGsJyJJajGkHcHWhrueT1DEDe7MkCqjfQrYGmR63y",
  "key2": "2CVp4Gf3SgFx8raGAHmBcPCd2P4Croa8CVvTqaSmYQ6fW7ZKnmeBKvvvaYEZeEUfm4rY4vaVdGmiVcjsujFe8fxg",
  "key3": "4LRSP8YYrexQdMR4XpaMSqRSPwSW1mVBsH3wgaiiws4p8Lt8n3UKW7LpmUwpGJFNFdY4aeuyjgmd8RcXHnHp74YV",
  "key4": "u6inDjz1H8dRHmMhjEWPgXvhCZDG4LNWSWk7daJyqyiuoL68zL2KyLNPY5ZCnzYxbX3PH7CQ7EighEbudKkcdaW",
  "key5": "27kos6PoxS4arEhsgw9i9DcbFLuuMXES4d2M6n1SjKDwcrLpdPc48Lng1g65xhakwERx4fGPNtJERWMxDxqDtCm1",
  "key6": "3dWhcVPCrKPVcwkLetLLDh41CARPFVfK3zE5ZCfpEq5MsR3sRV1bL8d6Czu3zoga6a3bwDLjyPTDyH3Y8kSnbYR2",
  "key7": "3p44Ab1wPPajAPjPQja1EHUbVQ7PJVzdE3cLU1PDStGAUfE5b5UiyYFLwRAsSg4JGqXr4aMqgiPq5tR29EpanbzY",
  "key8": "3vsDz2knPeNe32sxzzh1Sq7P3ti4S7DywNZYpUe45oA4S28EFMfiTnjB5d4PBxc8QY22Za4ta9rmqriGxvcRjaQE",
  "key9": "G46Jtakrv5r7ZJmmbCmy3Fi57jyZQYyd5mpdTskp8owQY1xknnfvYU5eQ2chMDtKw5BMe8VE3batLGSg45ZqMTo",
  "key10": "vLxes95n2CDzFz8Lszyri8mu6zqWoppsCsRpehQ63SXvbY2ZGtkkQHoVXEycJeLZoSn9DQ6YtwQsi281Arfe6gB",
  "key11": "5ovzqdFe8mTQXCRNe4P19EcR7Rm11D2ztMndyXkVRR7JTG5hSdRNoSUgCRmnjDLELNZX6xYPLXV4dZ6BEvw4ND18",
  "key12": "JXtKrN9jc8ZWmyqUufi1suWE838Ecuzd1aSVBWGe6jQQdXMNvx8qPLZcAnd7EPNKU89Bz2kKTNos8GMJmGXsi44",
  "key13": "4DG6DmscqtUrsBZV2xRi5mHVnhK1p3B8gsZ99VCqoBqHGj8znbhgbcZvo2dn4MH8p4p83BKNkx69Aqn8k9QeS1co",
  "key14": "43QosKVMjoRBcAt9zDKWGB8FL57B5p9uH4Xq4KJoagQ8MZLUby2jPgYpGQhau9NQQPszeymmcqETYBrMVahdpNmx",
  "key15": "42kCKXudTwwdrbmXfxjDFRKm9a9bc3bnvLh6q9GE8d2VJuQPxGZpJkvoqz5oNbCxpU58Mq795QeSFQ9G8Uzjy5Lu",
  "key16": "5fa1t7WdCe27UrxF6un2DYSJjdWuw3fqpSiUmTRtSPUKFkd4edmwWSqTbhpnq8NBzLEGZppBdhnCQminWsE6FQpP",
  "key17": "5YgFgtnuSHozwpUR76KzucAv8Z4hY5eQxDf3aUMgYkjsq3RamHSZXCTny4RQgpUqLfmVZEHUCRxKjN4564kaokPr",
  "key18": "QAjAvXKu4uq1qbitYt8yavWAdyuPevt9K31Xis3dyvSXgjUv73yjQggBzdJdhUzAmeQYCeZduwK2JUGfxcxYT5c",
  "key19": "Gx3DHEzuT7GceDQxuxkfZkkHzHp2zLoPimHoYRuAwWPoDsX2EAJkhUBf4tvApLxennd3T4iUJVVUNc2KVnTvtEs",
  "key20": "ZvoUCSD1xAP1jTTxwfQiNgateWg24A14neUvGCnWGswu3JWMeHPG3VSVHyygXRRJmBtuhhPAg2o1vUEas6kGvau",
  "key21": "24mMxSyYRu3Yuk63ASTbxThEiKE9CnSGnE24zQmQR5mFRGiSeE7r5gc5ZQjDempmwXCVw7iNyiMMnYoQjShfzrf6",
  "key22": "3MdrzbELd3H5NcFYrytjBZqCPpUg4agRqdViQ84Be3DRLKvahPN1CTMi6Ke82oPPjNt6Mj7DeqgEBfpnkKSfrBmL",
  "key23": "2GtveYSCLE8s9dsSKn8se9jjoQLEqKF38YcAvF1Mn6vCeC568EpxqbkHptK2ZULQtWNPWvUzBQG28SWgkJgW1awD",
  "key24": "heEzR2d3LZkbippPZPJMngLaswjGTXhkFq63akGtZTPpShubiaeMZNN2dZAWQnZP3gsTwVTfbhKaKbPza61Axn8",
  "key25": "36unzFaqjzFwPJu4ZJAWsE2pbkGfDTve2tHs2AGdQySmiwh59wNVXbacicAgp2jpXoU48uhrCgPYHWsF3fATWTJR",
  "key26": "2pBKrtZ2Lt1JiLgcPMDhPQNA6LNKqAh7bWPiZd4ab79uq7VTiqggRxtnapofcTo6vZCHWGxpcwF3J9mU613YzoLR",
  "key27": "iHiP7LDi9wuwidiKV68VQMgYVsRDdJET7No6pmSUW7Q2gG61DLDp69mTjr34oenY2CUzdUgXtGbiX5H79kcaweh",
  "key28": "2PhdftEXc741saLoUiuT1i9k6hPDmMqf1XBbGmYnmXbbSWv5ssLx3u6eJVu52EVgP1Sfgko9PSnQ63ngy3W7FZDr",
  "key29": "52VBWqWBGUxTL1rksFe7vPqGX5y2fy4KfVBXBRfNC11VKyz3kAbLq2ivAqKHjrRS7Ke6epe89bCXxQb7TLqv3c3i",
  "key30": "5WjUdXoHbArhLqQ81c5CpJZGFyyNJRDeq2QbYBagg9uDryNQuk6QWpCkHZBazP5e7MuJNraLe3pxhbtPNcFFSCyH",
  "key31": "322jHbDBNJGx9i32HxhzeUCPUAgt9wmcE7hGRrqdit6dS4bUVXnysJvr8pjaYTDvVHCQbeg1hRW2Lku6GQxDaf4Y",
  "key32": "feUZyJXFayfCSiN4fmbqbtDoWHTXcXSGJWujy4xqyZZPfV49QDmqQiYwS84N7xbNb3WqepqSTtJ6337M446YYyV",
  "key33": "ySWBs3hTxPtCvSQ3awfWinqNns2LRMtHzFN57L5dmkPDYxKRenMWb5BzKefCTz6R2BoqbqwcXHYsRkb74zYvVaA",
  "key34": "27q5CAmkmrwx142Uhnguj4N3JmnNjFEpTTTsCVCaxsnXJvwZfveTWARAEC6cDWaWWSfcR2LyY9GnAKXhfnWT27QH",
  "key35": "RZiBKK77AZSm4v2DXNggdLJL87dpnoMm7RLG74FYCrh9828HuGqE3SqEhEpeS5xsGwVvwejHoVyk8qJxn9Po2Jb",
  "key36": "5gGhNfC1uvZKjPzwZbJGe9nPAKXizuy8Xk3sr9SbczV8hKj9rinMJfPGbjUbZ6KZfKq3RJS9pRQH2eri5XpRkZVZ",
  "key37": "55auSM9gdxzjfCKStLKNstdBnft6UzsrYpXkd8NhXA7by6wQZL5xX7bVyFE8crHGSFBijos1JgnhpZEfVDXP7t3A",
  "key38": "5BL9v2aXb2s2dtuKQpMTwtggppkNACKW1nG4RxwdKRhqvc8TtWDdkjVJquVWirZhLf4WvomFrqUMwRnyLjTYRpaU",
  "key39": "34jk3EXfpm5sNi7HePEedygBZtbVd9LjgLNsSGvMJuWyedyJXPr4LG7vzjxS34e37WMioCq5svCMj7p6Z1fDteJ9",
  "key40": "32Y6h3qfcnrrCQyrpSBizD1H7wN884SaptoLhXxE5ZB8Ri27tUDMe5Rw5jM2iAaeC5v61XiEV6YLZBPhhrMuoGkY",
  "key41": "31SC5CjbCp9fiXeuvyvSMGXLCbSoWTuiDSx52esDTVhXMp2DeBtcJDHLSckPhpnSPDzQDCo15GRPWPSRi8WA5fMn",
  "key42": "3XncbiyaW7p3GncC5yJVSih1xEJCNWCVvk3MxWWeDvC3bSmPZgt81cvDwLGLF8qCQEUxZZsLRDNBEfwxS85Lkiov",
  "key43": "3Q4fvmZd3LkqACvscf6NKdpjch2EYuTtmsWnE9wvPyyBHwnmQiY9Bw5iJz1qXFYkWtohtK23tyntqU8gvn2VURNV",
  "key44": "3AqQX55RmmKzp2RHQEoa2htGQGunYhyjYNFbMgaKsejqaRyW4fwGeZNktvXjBuxfdhwKTZ7njvs3rFdqipSJVAWD",
  "key45": "4dQDrbc9mG4M2KWbTk9h1YMQ7MNrVijnjDBY2YXc3FubuNwzmiJHwj89Tzx67Xt1kcbTE8MvZsotR93nqnHg87qH",
  "key46": "3AeExEz2qAQ7jHZP8Dps6TLLqzcEnV4kvcANK19oowwiPZDGmvBzbTrNZpsQsB3xrqnaLrXPP5pEvomZsR3AZeGF",
  "key47": "3tnkTYpvFm5F43JM32Jkje1QLwVgxxfVNcARj9oAYRQMFrAUG6dVXAz9KzdYJ4WoWhzvr7XdcFKvqqGsiSBcu1nF"
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

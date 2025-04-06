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
    "21g9NwFU4t6svXMhGWRSNwE4F4GiYARMt7kctdMuLq9CjjpcHrcbUo3RF3zTkG6i5RUmfCfNgr9hNmFb2tGJzVs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnhdKYPqForSwvHrsxkS5YfDcN4mbrQAQKee3aArsxiVzbzmuaB5YsiybCZsB6LpBgwL1P72LRpshA9faMvqvfo",
  "key1": "2TwXY2xUooEfmJ4ioqB5mFC5kFaESA78dbWJUv5ziFGfQS3BGaPYtyT85HWFxTp1U5Uai3oojpkKsfc9dLBiG9nL",
  "key2": "5Ci5erPPmximXk67K5t1zh8D1X2S28YvVMLSDA3L6faByZNeQTscSHMuT4AuUk451oymPhABrrzqtSbuLfrS315g",
  "key3": "3SccegVEkZm7wB1LFny2muuJZdhAmyo5Esyj8SAEabTyrqZN6vArabj3ubcXYdaSZc7aB263624Si6nrzsGoqB8K",
  "key4": "5PVq7DD8q6QwN5Myg5uP5ezHgohQ3BNMUidzbeHjpNefxxjWhD8ULNTdCjsPFqt3juyWT9ydeX3MPyqSbWimwonp",
  "key5": "49mAqsuPfpCHzAa1BCy9oMApdxQsEmZxUCKT5QWXecBwMvwREprpsmahDGokK4nPs9DGCWH6X2E63cJpBGL2uULp",
  "key6": "3hy1NXK3Kjtg9bsCetXCpsdQ4KAz8PDHpt7Lt2AHJkkua6wZ7Y5z4A4duM6bbvZGZwEJynMtqXUX7HynEGQBviXF",
  "key7": "3cBu7ukx53JAN7dkFPWvHNoxDK4L724gY6pQncGKBmS18Ui88KYwRLGmayJPgT19RazMDLSj7CdqsJmo5p9Qbt2K",
  "key8": "4hTFAn5xJeh948adnxd8Ek1EweVvperST1pCbHJpP3jcWeM9Ag3KMDSLs2XUFe47vXqiJFrm5S2zkwYr5NTRCeWW",
  "key9": "9TckMcn3LiUr6S7pD2FVpSBsybgszSKMrQ65onePjLAA5sUdrhyqYQreD7mR4oYEEsezmEY5BeUjpBJHoNrZzrA",
  "key10": "2Q9RYsyY1tVzuEJh1LvTDGk56wm3NmCXVWJvKy9haqSH4Z5fQ7CDTPBi5b9GppfCkXCyz3WPkVfKDW1wknNzs9qT",
  "key11": "4yG77qgx6ZQZM2g1fdPTKrSUdMvxAxJJEMPoeqonfXsmTLAB2JbCSBjgky35o8ewiUxXQBaAqphYiJJm4HzZBgbX",
  "key12": "3HkNTCKyVgvwdde6XgTDRPV3v8WQPoyBPs1zmzbsNqiPPsqXTNFuLLiBKp7aayfratNhpjzisjdNPv4iZZ6PiEfP",
  "key13": "HSU6M6HQYmYBzUq66gkuQ11BpFGm4Qx5Pkj8aAas1WoF1t4uEKAoztSxAPKMaCjckcuHWezBedp6dtnCif6p7uF",
  "key14": "2Qb372gNNbz2MFk5ywjE7kWWDZVdmJwLp6E2J4efgL3YR8knDMNm41JN7qFYrVf3eEv2mVhEtQHUDLjGUxhCaXGM",
  "key15": "4c6jaKDp3YoffwWkpj9PffSzYuMuaB7kgpt52tasb9zKmVkRhoyKxik7t7XBTxBoHWpQ7kVcj1W5eiZejPjDuMRf",
  "key16": "2mPKVx6RsDKtPJMC7eioeXg9QDNeqSXMi7A66XZop8HYrVyZKdcHJbK1ASNXKAjea1D2bGWYxtSJXy3ivCpzrC1M",
  "key17": "4SAGuyJyue8EmJ4Fb5vbmCq3up8dmgiJqBBZuB3vNBW8HvXfmmT2w1cxDcGLNBF647o8fXe1TLcvEiqWi7E39zJa",
  "key18": "212RfaDCb3GQhE6xsLST1pjJJ4f9MiGjDYuxPRBdDkRg3XLjPWD8duvPWE6NVku11sf3m3BpNo2LAMeckUph8RCq",
  "key19": "2UPMHazJ47c1zDKvDMtEMdNC1mgCPuk4d6cN9oKA7kcTFXzQ6782AwNHwSNedJA1cvps2iRQp5rSRu1ECMVc5ZVS",
  "key20": "2bCNgkdeo9r8tUKoEUEviWynxErKuZZvcTCW5TmoDEZXQWeBA1jafiMrWhVtu8FFz3orsbs7mU9Lp7F28TkvxrDw",
  "key21": "2jwKyorTK5p2nyhCFBEqzAuBuRD26sfn842xhHSoEZNizwpPd4WuuiFiViGQkdHushgw6gBCxNLc9vqwoLxQN77e",
  "key22": "5QKQJycZmXfBGwmdNtMK3AasSdQnTQhM31LmkcWitmSUQ1CoyQZX3MwwZyyvgHrPEaQuif7peMVja7XQKu3FNpc9",
  "key23": "36SRDvQF22oFySzuov7eTD5ARgrPmRMAPBLGbffH93YGrdARbTiEetE7czTaQi8LiAJPxgwxVyTtfY73AqYWa331",
  "key24": "227cAa2G5z1pPVHNfTH2hbknZSCxx6azQpGvFDtkuec8ZNavVUNqkuthc4NBEEyPoofLRDeNff6T6XBDESwWZp7a",
  "key25": "5M1twh6JBJP4q3Dqu9wtynimGcYTSArKFSeg8wVcav7Fy8XqwRGz4hf3MMNKq7RixwUXv3zRjHeykhLCg6y7PyQH",
  "key26": "4WPiao5AnLEskcULiGMqUWY2E4MhA7ZRqRYNBFsb6PcwfodHzr12Lg8feXmPGVhxycqT2TjtA1v6SA3ExoEP46UH",
  "key27": "4Fn5mkq1T3RvxpCqKxYpzSZtDoaMzHybTsnKx9QqPXMVZVUBdsuFALP62kKKbsy3bSCHdMuCwv2SaYv5xrYTFmzo",
  "key28": "tpsszLANGvSjcyABM1JXNyvzNMytm37w37xAXa9aRFhyyrNDuHoQBC4phsaY9frnVrBjGRC7wsokwpKbHrd9LGy",
  "key29": "2NYNxtWmpqf9nM19DU4xHzjVDCme4fWTRMuV6QV2FGJ8cuuoUauViK2CaSeTZ1Krsjv68rznY4mUbYBLRQpj4XHf",
  "key30": "2dsyx1vnt9NWo4yEe6ShWo2QXM6LHrsTkJUbQnU7SGqQ63qwZsaQXNvmKWQZpLemh3MDZHvLTPmu8Upbp5a6nEXx",
  "key31": "5s5ew4NKmZ2Cx7Bur3YTDXdX7hXifoCQHynjLbwhWN7Aeq26aZddLepgrepRSP915E2MJp3jX7tCaUXQsoGziCfL",
  "key32": "4soLn3nLB8d9DeaXNonYvM3kDR5wnD9VcpLJPB5fv78vazyqLYToz4ifpNJrvEEbj5h3mVLYS9zGfhckRKoU6ipA",
  "key33": "5HYRyMknFic5i1L5XQyrnB1ZsmfkdP8cfqToAZk6n9wgxDWSjQp3CPhfk6CxvjYVehiY1EaYhtHvjPxA1i2gJRUR",
  "key34": "4hPk1T5s5R5AYSEZR1JYixppsXp6MMizDcbEc6vwtQMKLRvC88ARi6vy1ijfBTXrMySPW38mtdmeUkuq4WnsoxPK",
  "key35": "4UgyjmgF9kewxuqb16n8FksYXPvZmV1UnzFX9AyGFfrxkM5Tth8qZWSqzSQLn78xqxWuHPDC38APy7cxQM4EGawk"
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

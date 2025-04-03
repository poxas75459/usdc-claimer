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
    "w5miBXB2tBwyZhdDC2wHxJ5VzCR9SZE2goouVAuiKztrARghZ6eitMGwX4ZXVRPYsgi7KJe2WDyRPCfJ1vdytSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39wrtfU9toQG9Cu7JZ7fvZVND3GuuiKiVZrbXbyYexHqNjouuSpPuUu1VpJg8iozCPUZi55sbN1XsgknFQQryJib",
  "key1": "3qBnJEpCdVa9FAbcSdi3wvtgQ7SXcEJEencof26ZcpSstbQHjfkXhxx4Fp9EwdEfR6SY3T53SxkoT1aH35EF6u3L",
  "key2": "3VTxZbMAzgZzDH5Sfiu9GzqD6gNXjmG9Z6b3e7iKFVN85wwSnvAZvtFECkEa7ZUn19sjVU86wAzmnYszs7PJeNqi",
  "key3": "nK1KzDBU3jdBeJnm9gZxCtk1WNfhuk2MkmBdu2jtF1YgQ8Xx5twAZWsmizGxJqRxz9q1a3JwJk5hTmiMoMrv4r3",
  "key4": "2aDZKPnAWkneGsn7r6ARSYtLq3ng2sivaQkMNA5xpyrGo5jVe2QxEWC1tUvzrwqzxYypgZSXhKeRbPZyRm2YUAka",
  "key5": "3wHbBuxY7EfP23i62gW5zfmYduP28SfUw5JKNoD9VrG26VgNF311PhSrcAEM5A1Um7xCeNhpsw89qTZZTn5YuBLJ",
  "key6": "2dpgsyeCsYnRB9BWihGwNNW3bXZjEhfBEyFUnK3pVDxMGovBXkH5KxEd2GUwN6L5iFy5LXpmVcxir2Y6PLDcpKjV",
  "key7": "4fhMA6cgZAFt6f7Bvkr5wrRUDutCFx43az61zgkxeeouTzyod26a1imzuiT6J3PK1WXHE28c7HY5a4pW2iwZmU9J",
  "key8": "5wPGek4cRTCsVy1eMwskcSmpBVpNqKoX7hLqBjFWfRmArZejutC17nfZh8s9MTwhzB54XLnmAhHXkjmzYZ2hncan",
  "key9": "5S46bRGJteeU6hV2EpaeywedkyghJ5HQsuP9Z8j3mZF97sus2NBQQCAEX3AHqufEntK3VuQz1G9uWqH9doP1mErM",
  "key10": "5hANZrn9J3paD88xjUwB8LownWJmvdyaKszrBMVSgELpaaBC4gcUvMVF18h3Ub2ku2ZRwxcbfuM7RAF56wbum7wk",
  "key11": "UTBZVBovuawE4yX8vJLVpmz9Rvmiufjwime9jAvSsB4TUbwMJEGyK1bv9nZD1b2ZmootuugH9xeuDFDvkPonLLF",
  "key12": "2ax5C1fD546LVRzbipfVPHmj5ueRVTQvyxSvm7DyHHbpCe49uk7ToTfS6RtiEaF3FeCV7uMgukwKGj2vbpMsUaZn",
  "key13": "2Ae5wy4iEHcooxTv6G3C8iGrjGhp2QWrSSsg7tNLUkyAWzpc1Cfx1WVdbJyWDKVPXh199tLwZTZ12PuStwF4pZxA",
  "key14": "2i62oWa8Q1hHGP9JuZYBEFHwhL4zJNRm3dhnZbisdDJ9YB1VqW1hkwuuD9cHAFWUd9669HCa4jtgWa8uksaj67RV",
  "key15": "qXn7URWMqDvVEHW5g9TozApwFTTCCe2HmfuhhNNvc1C8yV9Hv8b76XSrdF1zQipj4ueLtqWp3JHyVfMGma5BoHd",
  "key16": "SWQkBTNGbh2iZGhEPTRxiFDJvpvt8bAdtKT9qpcFYeJ6CUZRCPHnT7KCQr5YPtzqBgFoUBgPPojx3xyakvxUivU",
  "key17": "4kDyw4ngnnF9zw4PXVB7xrTRHgpLW4MRhtVkztmERMcAJWHdCimAMN31UaQjH4ULsy3AmKuHzoH5f8bJFB8RjLh6",
  "key18": "38626y2YmuJXBSRFPu3y7tneGCZCoxGAtVtqik5k2PhSTerTAL79nuPTLhujFWfXjBJwvvo68cs2iPJ2nYHhvAiz",
  "key19": "3zCcLgUtRC71H4rbyej9tzKeTxmWzhbTkxK1AgwvEvQyc52Ayq4ibxLZw8F2AkzEQoBZ3HhGFoGwZVeoPpjXPr8o",
  "key20": "5gxvcdZhKUuA1YR5ifeR1CRxLdgt7QFe4kJDjRpk25SzU2RsMY1EDmVzwSUwpgFtJMAQ4hovEdoACwBsEVqufwMu",
  "key21": "582EYZhLEMthPTfJSPk91FM3NAYWUxDgCgNDph1azKK9dqZpqqiwMn5ovySqa5Dt8HM2PKTjomxFVQvAjDLDz58D",
  "key22": "kkENHTYJVgaXUckSZXwd9ekdvMx7LwMTtT7KaMMz53zHs3FrvgtHCYxJXGmEyAaNpr2PGCN8xyF9sk7Qv8o65S5",
  "key23": "5Wd9Zo2Nh1Xyw1yNgiD18WUeKV1AmzNQj7TjxcmkGphiPujp9soenxfenTcbxB75wEMq93tPbxJMJgjohanMRqt",
  "key24": "4w7aLJMVqd6zmDyDdZBMNt95taiDV4pK5wSh5bH4a4cSvubXk412jML7NcVsHyeR8eCnJsPhESejiV8C78JC6W5E",
  "key25": "5xDCuzUtV9CYt54qjAcRjJVNE7vpkD5yhaT7aPHfjrdBg2qptGs4DxRL8ijq8AkWAhhV9JbyiUVUmHbz1YtGcdVF",
  "key26": "42kivN1KSgmpP112UDrorAGXT1oPBx7agoFihKQBBfo4J8irfJiNchY2qwgPA1Peds9SpjDbrk4grqpi7cbU2Bt9",
  "key27": "2UU8g6KW6y6PnARL2JSkqEAYycBBjivXe6B9k1NNVkUmvnBhEH65JsNzcUtnR9sfdYaNAYHfg727hmGLGjK8jY4W",
  "key28": "5RhJpXBxvXCFkTMEW6aPHX6rJ3S2WAMFm73frgL534WckjZpDr3QkyjFfy3E3TtrQ7Grt8KwyVEZknTSc3s4C7Wh",
  "key29": "2FNgZkipLRssdGdf5twh8ftFiTgiw5cTmPMUprMWBaBm91yXqN9rBt4yMrhBL8cPYh3CWWnnTe1LiE4hgYabyXkA",
  "key30": "4Copiw7XYcxHPjzy2xujgdSRxGq7eCM9aduN8SKWtT8oqzYTL5UJ4GDqECxTF6nWCn3P3F6fmegcMm5qecHxPUHk",
  "key31": "4W4jin3rYwKB5Df1tyHB3j1p3qz8kT1XmZdyks7GthyYcqDLnZAer7iPYhcUnxSfeC5XGiwan7WJ3mNhBdoC9kUC",
  "key32": "4pg23wGNDoFodLpd6zZcuWKcAnR8nzUSXBCaXBZGVyqzmvT4KRevcaPVHo1RRCe91eixYTJ4nRrkdaNckuasuz7x",
  "key33": "29jpCq689GdWS27tP3HTR8HgUp2A42jTrfGCzvLeDugBGSuwPpCt6vpyMDxF7DAFvLvTxe4wjQPmBf48QipaWcAV",
  "key34": "2hoQ1AZhyevgv2zqxahEf81UVfbU9jBZLJxra8sSWfjsXFeRkZqhBoFsEcGAt2juq5fz8KTWvTgBZp7meh3MZtvd",
  "key35": "3L1HaqmQsGL2erSRgiCspHvtcio5jYNJm4dnbiiLNbn2yJ8GWAauFXfvjbyNHdFHqMHrzbcrDnGCbdYtKTAudyYx",
  "key36": "21fa2RcKzXZraTbro9JaJ8udWk2CpYYbAQyi7RSp6dHrLX6grtcPFg64mquZm6YsBtsEPYMY3gwbRRcokBEDJV8R",
  "key37": "4QrteRGiATt9RdaXuEf7fvkE4PKwUcMCBZx273oaSkJpE3Cq1sz3NepqYerwCUyT1QDE1c9eZELR26cQZVH8fQUA",
  "key38": "4tx1qkaY9QCLEYYWzVmbZsaMDdCfKZW6urjqBRFrN3yPpX1tKmcwzs7ZdSPuN8yrPr9AE4Cztuuyy8vR1qgNVtF9",
  "key39": "4EysyVujPdQYLtGPzbxHTJf3ThU6VeXDwVFdbUzGyzc7mWyuEYPA5D7Zsb27FYzmJhyTHaecdPBnqxdH7Y1U6P9N",
  "key40": "mtCtzAgWPvBr3V6K8ZwjCc1zUJ3gJhFhxCSW22WtmM3djSXnvwns3rey2JbZuD3UDfq7CU3wnWFX2Jr5u7JAtPf",
  "key41": "2dz5XFSNqbazrwP5m1LEzu5iTxTvH5eWHgsLPYNNzjb97hTzCDEY5F5cKy7u3HUnwngQ9g9Myhs234vZ8RwFrhrN"
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

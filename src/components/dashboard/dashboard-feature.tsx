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
    "4NYWrs2UwdVtvLhmuHCLPcZbC3eSbyrpdJnvoe4pDj5egayVkBXPNbLKYfMkCniP7bBowSLQBpmVyWksJVCw9qe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ApCJ8m3b6MX9gsXuM28cAf9NCeQYEQ98ZBVS2Jut1F4zM1X1QnvH1THe2amQm6ZK4BCdde3nqeU3vvegC22yzqE",
  "key1": "4tTL1MD82mL4e4Fuyk37wu2aRKdHS5uguaKw4qXvaZPFR4iqpAUAva7WtFUeJbr79TiBheLKUth2okpWnRhDZ9WS",
  "key2": "4T8hgT4xeKbJLaPQRwWUmRGmitYSHW5zo7ZH8aUKriM769ndKeMyyhfk1bxqPqrkXFP34XdoaYwVbHU3sRQxjagy",
  "key3": "3TrdeXhNseeQPjF7XJ8fUphnCjkja1RNxq487TxjQAa1rhoqNSXeLjbg1kh5Uty2kp7eKMaiH7LbNt2XpMKSswN9",
  "key4": "S9t3cbaPWtEsGdh7kYdGjTnn4BxpGsLckwkANryEamkWW4ovdhgxURm8Y4M6SZBE71xGRypyQVDzH9Rdqx5H8q9",
  "key5": "3WS67SvBkijvKdE12Vn8HedV5YTpG444CDcbWtnnqaMty3RhLR5hzFBzHnUJgLTekpLH5UcfKL3tZfyoJDoyKdZo",
  "key6": "i6sV2bxiTnaSDusVzfr8UqkP62e9DzpMPtv9mv29VjnWX1e4eY7Ya1Apehpig1yo82ZWj4KRaBoF5G5iZGNwUGn",
  "key7": "3wZirrcMNMgaSNu4KG6GBQAncsiLWcQQcusF5FmZXv7AmSrR9Nq4JpS8bmA5EqfoDZp2wQio3SiR5ye5Yz6xLRnn",
  "key8": "66nnF4TugmgPBL74HjBApkpUsq9hbAkD7GYPQdBQdyNmYeiFasDoUjT5oy84ssqE2zonGBDB2gVPyNM5h5YX8bqS",
  "key9": "8QrKyWncrN5EBGZ9NLLaBDFxcjuMKaxKBCbbMiqmV4rihkUvdya1ATqYQAkWaZd1qcA6ajW3bQuJB3k7pPn6NTW",
  "key10": "3s7eG9MoD1ZTBcxbhDLLRwZGAXAHVpMw7HiynPhroxDFZUFJRrQajzkHiviuyrg5Wo1LK4YwkNcoookFFWZfzuGs",
  "key11": "3UxNjbydktPdrUM3qUxvYojmZTfUsYy1TZ8SFc4ZDJxJ9RN6M89srAWDaddvN1PPkBGPm233rZwDCKKzvrLECkyA",
  "key12": "43kBZ9pGuvcEQnq1hGN8mhUtfghri9sung7TvRDDYfmE1dmU5G8yoFmUKYewJ3DEWtU2S61JtPcgiaqH926mS8PB",
  "key13": "QrYZQUhu1ngWncX63UpkqEGTHFWNJJFRQSGHZxDUFRU2yWgZextEm5Toj7zXz4pf2CdwFfoqTiqeh16VMDoMejm",
  "key14": "3XWsmMvDf4xU37KfFgoHKBxu1hdeceaoqxQm1LiHfBfzoaGMiLkfcU3jFdwZwEfovNKv7GRJjy3BfJ2fxECUj93s",
  "key15": "2gr94jAtoF1Xh4SxSYk1FiUjuDXKV8rQ7T2Z7CmiE1hnEMNddSks8HcmpT1daonjhZQFBbYZ8UFVZuqm8p1r7pE4",
  "key16": "2wJ7MCpD8dBDdqWRHEmvg9LRjVskccfWtt8qWGuWuucNuu8zMzPnUtR2oNEZ6Eund27AwZn27p4sanfz2S19uCkU",
  "key17": "35BktSuJi2UcqisRM9xnjeKiGRHQn7FjsMbJwyN2HJng5GWfN7387cJFGP4rZ6QPSdn9bFgU8aRzvtm8gqTXy6vz",
  "key18": "3UQKZgyaL6xvdG24Wkmx1d3Cw59gy5rTwt2Fx6ohZam5N5jzmjcDJziw71rC2caJ3gaqESsXVXQdHc3xcgz7vt2F",
  "key19": "28hM3mnnxGtxrxtkWBEtyxenBqWpyrpjJVM9Rbeivmovm1hi8jvvqtgnHApKKQM6ZKi9HuDjChmZodMrfWP8fpg4",
  "key20": "XhrBvU4ukuGUedw45ndeKL62yMVhykmM8xUNXhT3DNH3eZ2j2be1prdTid34y9F8EHeTxhg28f36HxahYzrfc1n",
  "key21": "34a2PxqbNi9fURSjofKLSvbEe3nJuaofgUKmK6NkLc7AmD78iFs6bLXzwkCDZCtG8CKeuSF1A9MvhtB3QwHphM2Q",
  "key22": "2yPaVAycCTRHmsZPKQk7MhdKEF9McyAshyxWGkmwX2WuWbr2yX8BEYf3oi555UP4fQ2acbUVbVTxXxQ5k5nQ1s2D",
  "key23": "4XAkoCtZQJepa9nzCNRdb5bzobxJi9jvCnmeUfBcgh34qZFx6KPLVmieikV9cUbuULXmApb49HFpf4dTAzxgdg5G",
  "key24": "38yBBS7g4jW73nhBQat8gnVu1cw1aSwzLAWbvQjFCw1pjAGDX2fgq5Xikbaji5Bq61EmMZtc6NXKaBK7VzygY6cr",
  "key25": "3kArMKgfJDN5KifWsQF8SfH7RabJr4ppnVnRVRAZPWpZJtM5j7Ss42ma4W7pPFBsDgEj9QwB6mvSqRSsMoFTHgre",
  "key26": "5NU2UmMC976JcJjHhyjLXyjjfkPXFjy7PHVfvFM4bnkffXvq4tfvHLYiAowrdFT5TJwD1iKMuG2vk7YcYy6L8zCb",
  "key27": "38LMV3sq9KzfivvEQJ3KubkfuNkkMSdnX8Z96u2i7TRGBKp7CSVeAkVT8CcC7oABvMpuP17oXtEi93FSvBqzsDH",
  "key28": "VxyRuBV2VxFMvJCVkVg9kyPD1sDX8CwYEvGxuZGeryaC94vd9ysELMucJrMBTHAjiAwy2vvp5dZky2BeFsbbkj6",
  "key29": "5tVRFKx6P64gzSdaRGcL3RsNc1qd9ChwzjrVVDmS3b5FKphMzVh7UM2JtYuiqMVcA1iG4JKDwExPAKz4VgavzMG3",
  "key30": "3YAps7dy9fWSQdctsKS1hH7wRQxhUZ5WuabFRMmZEjKEeUHcZX4EWSMe6c3oeZ8xssHU33W3f7unzjg8LTHPiNFs",
  "key31": "2JbbhgSFo2SstvMHbvHzrSMJp1WB1EgWJoKmUCuveDmY3KhTqbuVduLVYP4TPCUCMpJQCgyis27eQ8UgrqsFVrqS",
  "key32": "2eesoC9zh1mxZEoPAwdYdYj9TMUMf7MDVfP4N2ucuw2WRd6jmwEk5EbVtRpH8eqFvP3koioPF8gCzad4GgcKsM6v",
  "key33": "4mhVCFcoP6yPzYy5158ByxNa96WzAdrfj4PNfjKmtB1cVf3Gu2zGV6jiKV9qFdvCvP4Gt46TYxgVGwtLVHBLN51v",
  "key34": "4UQzrhJVJGdHcYhhjTG4oS9rvACGJ5M5hk79uXWJYEfurMovXrnTw5mY81Fc8ZWamB4qGqeSgeUnaxVGBx3B2HKx",
  "key35": "2HoTKMWnDyygt8DitczhjAbW1zwuQLD8u8diP9YKBXMfjVNwoBGzZq8UT8BZdMfKmi7xNF38eT38xbdNgAAoKz1q",
  "key36": "4a5WPn6juaeypew9PAF2KjSDbPAc9uA7yhddmCrVbiF5Z1QDVvm6kKTXZ6yPP5JiHMHsiVRfSynqFmEjPKjHtXx3",
  "key37": "4H8fSGhmjEZPocUsxmujPsuZg19yqSQEiGv9mhPELcqDN28DwVs4YJiC8zDFzKy7riXzNByXEqy5rqrchx2U7Kin",
  "key38": "3LZ4MYR9roZ1gncrQg4ZDixWTqBsAiNZn64eMaS6T32NbpmSvLdiXep63CVKnR8sTxEW7AZPHNCrjPwrHc9dDX37",
  "key39": "3Syz3AnEwqr9kutfZ95Lc1P74Ri96NK4iw5fEHo4kbNAi3pNzrqPMfMZVzNwm8p1MRfXCMF9GD6GH3m227htQcTt",
  "key40": "a8RrhUewkoHfefc5Yj8QwKtCFoAA5by8Yoar2D8B47pdi7cU83bQvTifTdmsCqqXc4Ce1WjQZSCE1EYxEzAV684",
  "key41": "4rbuvrKUJNFQE1D39GLvyhPKrTmVEB71uCVjdcXEVMRrsLX2aFA6virEH7tovSee3dUkcae3uPXJSjxAW4GZpVw7",
  "key42": "25RyBSjJBhqQ1uQfgB23vwPSmDRqfKtzi5A1wkeQTEtV9cebhfAszNw827MmdnmYw69vM5nkmquCFwqZsXQTRUqX",
  "key43": "47zJz16A11kWMuxWLpSYPj9VwYgm2nmn93wr51uicuxGg5yRegsgZ6T9gKWrEnv95yhwXWPCJbjmyopdoKaAyueC",
  "key44": "4ddmRfN3roAbPYqcGLvc59cjP32RSGDvvMgiau43aTRuQNU7fhVnVdPEwYJzXAFYtHKN1djJRE6gs3ya6EnPB8C",
  "key45": "5dMiviZ8YB5gzfzxwuPA1fKoeoko8oGDeQYTQgFuWJJiHm1Q1Y9P44wdaDQcmxC1MUmigGtRDuzaMWR8EfUvhPdT",
  "key46": "F7zV6UzypATdszmZ1dSZZL78zxy8Zx9yN3ohQSotmtEck5pnsWRbfH7bCgBEqQeUXZF4Po3n7RWedxSBKYyX5k2",
  "key47": "XJp6SMEYvfjvqHQJ3vGJjS4a8sDmR1R8GSa3A1MFrPX5pavauejBytGvff1Co1JS1dFMWDds7Tu9Sgzwn97NbV1",
  "key48": "5HCUTzsDwJKNcvXb6oWubNferRBo2P44TYsckDNqUSyCTPo5ZNEiXcsPSa5HLMMK92WftMBAntWmwJ19xvGzHq8r",
  "key49": "66xGrk1GTwuGsmjHDTXDGo4UabFvxL8VCqHSoHPrhxcERoMiyr2is9DQNfbS5PwBnDRz5NEQUaTDfyicoPkUvfuo"
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

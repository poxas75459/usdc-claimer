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
    "6YjfsjhzbeRWAXGYjc65qBj9eA7TtGPrVjSP49qH2B3HZwH7r8yNNmWbreDsKx3ryjcjfjF23d84327wuKbmmBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zt2F1UvQ9fVFQc6PzF6HAu7jTy7JADpm669thL1BGQP8sypExXkcDwn6afP8FjQ1EisyKsnvvoGWPaBRp8JSJ4r",
  "key1": "2iNuMksup5fU5rTsZ5iL7PFeLqnoraJZqTWBUgoM6gyrQWtjki7pKR2ynJoNpqMXFvJGwrEFxhd8rxpXcPG8iRsr",
  "key2": "AsGaAd5YojqKPEV7LG4bYN2QFQKVdrpdAZ7s7NUFBcVCNP3HFrLM9bp2kqPBVmzq8SH1NSex3Gm3JH7rSrxCHPN",
  "key3": "3Pd3yqEChFgkYZhoSh8Hbv6uzoTr6xFtHLwYfDc8RtdeeLYUETdsEdbf9H7kAreBAh3THPTSJ48BzYZiN3YxZyn8",
  "key4": "65SfkPKwmLveyjuF88fLs4y5N6w8NcHttGWs63qaP81pXvv2Q32uBFquRNCuaaQaLprE9v1iueBfkCMk88occGYw",
  "key5": "4mDG4aF9ojxJeeDkqiZeoKHA2dKya775UvTd2V6t1yDA3MY1rFS8aRzp4rf1fBHT7DUUvvVBdWX9LPBUCWvMC7X6",
  "key6": "4JavWvtJg3VBpsekdF5xCvHTa3dwfJRyNLNsTmzMb1higNz2kHcHrRWVYByiUNmTSyNeiS7KK53J4Xu3KZ5mGrKU",
  "key7": "5skzYRajbcBPxnEApCdEzXSDi7MSU1cwkE81H1HrqHBJUZMQjSwC53AxyT7gZCuim3Xydeaz4KvnveXkScv3JTTM",
  "key8": "2osGnsA1TYVvUGGBmFhMb3gs5FH5e6YeJBqUx51QXPzL2WLKrHBFuM2y2ckwRYpcQckWKLtE4h1bP2mPC31kMssS",
  "key9": "2ZZg9293aNB55jMz11TLvVTGKcVegxExJNUpkAK1ZbvyzHFpfm7LacvW5EahKsVXEh5GE7iKNtRLWwW76K1TZwct",
  "key10": "39aWN6WkxMXCpJgGZdx4HLnXskbEgLjVR7MKBqxMYzdzHuxqGENhVJWb9bxs53QVtcQT8bG2PknzT8dJPA7PT23u",
  "key11": "63b7pXPibh1kF5KzNrGMGcnSwxwXJrBrpHZ7zKzRP8gNW75HsZGaJTwUjqnp5CdarsgFjfsbTGBHruJYeQWpvaQY",
  "key12": "66ucV3rBPFR9NK6LzcbCqdWrLBKrSYxu8q2yDo93uc6gE9gYf4uQTC2fvfyGNuNPkGqyKATZ7WWwffHsaPRmmTZZ",
  "key13": "54bs8H2qmHcCzb5gfJA3LKJLqRtabv8utA32UEFFk3msEYUCtwRvL4BGwrmgNhYrYueGySQumARnWdu8E7MKDJGF",
  "key14": "CkixjuoWcTTY5eFzUiJuS91atXnSwNWG8FuE1e5NG9Hs1wD6EymBhQqc7EyydbW65FetfcTwHqYynv3e7wF1Fwn",
  "key15": "WVPpFtWtUY6PqYxyorQL1z1z2XueG4doRyNDahdpxcx54BEkGEfm7BcBm6XYQ3D3W84dayfsYJE6qq6fgVdWQJT",
  "key16": "4y3qRUsQeRxXngq41WJ2BrEUMaEU3r9GLpQHAtovYbWepCRmtDM1B6vPccA8Let6xtAkssbVDC1Fo12myscsvjpZ",
  "key17": "2eoQnNduYR7qG83YtSXVFCiAstdZhvTFu19f5M1bopDWLpWswSDGCvYjS5rTVvJbNqEBxQzMbjCa3DqXUmA2DSuF",
  "key18": "TotM6QgtaYXZvAYJCKnFxmQpeaZM8ATK2YpY78vJ4gCdGxEPRme9BFfzmAeZ67SxywtTWZFAFb2LprBycAD5uJf",
  "key19": "2TYsg8gYpjrghYjfR39T85Pm1tAvDDKVtCZ1wrYqRycpxz3zXJm9pw26dxnDnGkFR7ooU9NebujQk3BN3T2v5Nra",
  "key20": "2osJc7FrQLKcAKLzVoBoBosEsPm64bNyW1Eniv6uzbKqavCYYsVdEiuKF9Wgjv167hrPRWoGXyeTeBVRt42k6WJC",
  "key21": "2q4wBMjanjQXj71xFrVupXGAKAmvh9GehUpPEPU5dvHk9PCnZToXKQ67hTHRH9TxG1QY54xn6BeNdq8SNgGyMDF7",
  "key22": "24vhQqck15b7Ar2HjXLAYvJdGPDT2RC81iAdxGgtrUWqacus2ByMumyaRotknef6RvWdm5CzXHji2L7LbyJ2thgi",
  "key23": "2Cj4Lan6y9BU8LZg5tCbYKZ7YjZbPsb5t3owyb9Tdc4vvBqn5dhrHJZRuVX8ips9hxVt8FCv2ztGLW5gR8ZJWxV",
  "key24": "2gWSWJHQ9YdHPLahzK31ZGq868q8N7Qr1xsBga2afj9zJhxDvBSwPZ3XtwhzW5evMypAUUgoQQ3UxYttJgy5ytgd",
  "key25": "5m6kuZvoqu15iUVAXofUzAUbs5ibhHPFvXSg2XwvfHjVnNTvLkUxj8RMeBiU75wDL3iCBfLqM4ngGQN3uazvDzV3",
  "key26": "2h9kRzHSjJ5mhde4oxiobps7oAniv2shSmQLtkXmvjKtVVWRXEFDZNaTLKv5Lm9pBfQKEgVsJ245F18FuRfWVUAj",
  "key27": "536SJfT89uC4ajAY6uhXpVSVJ2MApKP8tMLRpGuKTqkn1WMrED3g6U1WDiRZgTTHw9dG6qoCDwKmJ7ykSoGVensP",
  "key28": "2hvRsf3TpCViccfCKAdUBaLZEqVqRH3L1ka1VL2NH66eJLEcyxXuwZg6SY7Q8nN9jNCdHc6KqST97cgVUa67DWiW",
  "key29": "5VQSnNJGyT33nNVr2CWfMDvC9nd7XFGEPXyiB7Qpuxeg5d1v9u1Vht1nuRVgBRH7SoDmqSL4knpZcFH3SeKBGtCY",
  "key30": "5MT5K7btTLVr1VEFyPtopmjPnyhSFyKLsix6VbuvZVVJbKpuhYGQPPuF2wtKhfoKL3bBV723mEUQfkPXPJ6me141",
  "key31": "32bQbMpXKsWkrFc7Zzng4uGi2fwa7Tya7jhUmLRYQ2MirRv1kfGxBvMndnQhbi843eTfHaQm4auZsL5tyzopT1Pf",
  "key32": "A9vPwexR3GuPgchozeXDJCPjxf4vVgcZfrxCuHbCeuzzQJZBXGxLJSTAQMvAqkyF9qs4ebZCRGjT42vfvtGn8rz",
  "key33": "3bNRzs9zSV9MK88m2FsBk93UWUsagaeGyappGuui1V4qdFqwMzxuT5XZhZfkjqXKwKv4N8ZRN69V3sHhpcpioec8",
  "key34": "4Zt7qie8uiC4riskxUhWt7kqjx8xHTf6Wn6qHxzEz7acEydQu6tdSqp1FjeuMSG52pMspRUitMMm8wtq7JCbJ4p6",
  "key35": "qr7NE5fxKBKiZ8X3qJwu2QNu9RF6yUKD8dUqdzZyfVWxJ8B9kVpTxtvjZSJTLEf4kVLuA8WGSGcmFDR5PPHndaj",
  "key36": "3yGaaUJ36gcwR3jLAx9W6A88kbE98qKyTrZFf8ft2i19yyru8GPMpxDJLQioMtiNcQdK78tGQaLD8SxwNa2RzcV9",
  "key37": "28NE2umgdENjLL7R87aHt711XNLuFkvonkb2SEze7UBk3Z6pyBHYUydW9HtWTjkTb77nPwCANsjmhid6Yquxtzey",
  "key38": "GCULs9Qc8vF68JmSUTAkHfEWut1e7ZY9RRGgwmyveSNyYLUUc6wbzd42fr4NsX1R2q6bwTNkhEnQzDD3Q5pnQF3"
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

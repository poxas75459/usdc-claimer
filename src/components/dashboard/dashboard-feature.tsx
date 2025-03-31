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
    "3NbryCaqrX5kXNEavyHBiRrTyUgpUy24PYjRRwDxu4vugF6TUwPSsKUWvobMqShZhQX9YRW58CnAN6TiUGTvSKwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJZqzbwmkdSSU2jMyzW9Z6MMQMEkrAwQfd1jy4uUii7rZXuHUDAhALLrpM53QiwBHfm9CofMDV21uBmo29JgqMr",
  "key1": "3XHSTac9EH4hKg5GtBvuRSJ9eHvgwh5xoZ3FjtFWkpWtKicZYXxGCmEvPpDGBMeSm8Lv3LGmCv8PvAdnK85orXrb",
  "key2": "5epd58FHAPrgpCSs63QRexQkzbsPkn7PrKP899x64mU45iCGx7zfPRb83ZCXCxX9JhRRnAQeXcJ28sVCmpSxEJCb",
  "key3": "5Xrjecr9c6MYFAsY2MHjWrssz36F4r7UdoJH34ag7LDBKvwWgTk6U3UH861L1aNSJHsBPrbDh8N5AoaQfbCktpkg",
  "key4": "AKEKj2nH5RmRF2hkLLt95sEzhZuygRFoj3XDeNJUUGhd1AUQWhqrWZm24WKBGbxPWxMxRM84x135KUNdvzrsQWA",
  "key5": "58WUBTQpk7HHzsWsGszY6kjq47XbifHPcocjQ7k8FLpoaqP3pe1wNVp6uDVLSPjMggjpwGsvThqe1c8i2AznycPR",
  "key6": "5enhidgXMLv5A4AEfWVSUknJZQRVhySTqoaZs1c5hUFbsE3hwbn31eHdQviz2qsANt1yJEvncKBwd5uJyyguMax9",
  "key7": "3abmGqvvnRdFeevtEPwCqEpxXtXyGXVsrEMBxmvtSV4ndL4q4Z2LQUdqEK2xn2gd2mr3pxMGzTxHQp7hSUuMS1uK",
  "key8": "434JEPxogppG9yuHv4HUH8VZNigPcLV1eKW2h58T7BY94VTR53kCovbTdPRKQ2rqgWAT5ER2XEsXRv17ah2QJgoy",
  "key9": "PCCZ7bHX2QEgknSQNuH3n2uUFtDPxBhi4ErrcVF3XW5dh62V99jp9ffMGPubpyBPNAyvJeTRWfNPw4MrWrt8w9q",
  "key10": "5axMuNe99HfhCwULG13GtYvkSvrhgpoeeBBTiddw1rj365G546Y4HZnxW6JcYXoyFbkbB9yvCWWacg9qJpY1T9Hw",
  "key11": "3BGViWY16qJjQcFY2p3oGkTgwm62k9JBwWVPXWfwahprLM23uvNWEBrLXASkGZ8imnQnCZhYViRyUGBw8ikSmorU",
  "key12": "XEnX8Za4Cp5Gjawim85T1nBEYmadjTX9fWFUEFxZwctB7EoJWdYJnHDQoy7Dzr1TuRT1FkJNjwPXg3ZeYpAgf5f",
  "key13": "3BHDiZgpTiSchW4fZQBKLwZfN1y2CajrK7R3aCsisijdENQSSJeeqPz2JKasmtKCpoNfrZHaALoNujMCX9HGjgc9",
  "key14": "3awwGX7FRxWrQQZqoy4xLzc5wQWhKjPzAsyCyRvq9dB6fQfGpDsKGRhDjqqoihss18WYzLqNSS65tAVfW4PKJw9j",
  "key15": "2g1DhsAo5XSG94VfTMz47B5RGrKE6Aykuu2sqFm6E8Ktwnqig8PBSWnDUa75EqT79abkRmAp3CtxcohqNEtw5UFr",
  "key16": "U8XaAfqLR9497JkENTKTJvgVh5SKAfGXJJBwpk1VwA4VhRESfSc43Xtxd3mtR1ecYXJdZX6sZDoGu3gNR9dnbXd",
  "key17": "2fa5JzXYNmGfmDNg86w2TQG84QQdJA2dbxqbB82cNcwhfuWunQt9o3er4cnpCDPYqGNF5PF6wt5zwQBMe26Np9f1",
  "key18": "5P7iyxs2tm6sMEU7DxuGqEhCyknfTaY7sXeP9obfm5d6hCju1rMKvjatM8Aj9EiMXJpsqarFrqxxXJMPTU8k6You",
  "key19": "2aoR9nTn1KDWA9bgw4qYufnT6L71p6b8nDZ3giK3Fz1x4jbR5VT4j2WSB8DNh1RNnRN9F5XUamF7hM37hFLQMHro",
  "key20": "22ouXL69my2LL46usGAn94UR7hxtB3robANy1FMjBUjanQCHG7HZGyRXpyFjfVyqvXbjAf3SNYPqoWRjGSnV96qQ",
  "key21": "ZP7TVwax8JipfCjVuoF2WV2uMd9WX6gVztWosnW56L8P65nkx68h2Neu713HkypWsS6NL8cn4RFeJUS4RhG9jWF",
  "key22": "5xQQJnC7J5G1bYSeF6Nj5mkAWkFnLzy3K4QGkaCDww6E9iSUyxLAw1LLMJbWwFPmTL58T8AYj5TDK9frof39JvzD",
  "key23": "buXShWJbMfdrfqxjsbMb3sny4R912LzvT7NtPKpnvdvrTwnR3pzALd9pnaMu3P72ct8WE2y7zCPDoty2eVmWQFD",
  "key24": "3co3fsvhk3mTNmp5nKTGxvSMUFqvxSmgh4NxKgmWKUnmGifa7AcKQiDnxuXTcX5Eq3TZ6tcELjeaQA9hFz6HjFCA",
  "key25": "WpeEt4HKc7oDe5sSbUcsmpeUF1kGuCVy8JVCmK9WEuAukjJpX7f3dn21r59Rt2RB61V1hz5BJZUP8hWKByysknQ",
  "key26": "AtTCvM3shbvSPP8gqpk1sqMmAZCicn1X1WexuUCLo4WLPuKNogLKhfutPvmoQTzGQjTeShL4q8diqmXjmzSvY2c",
  "key27": "P6r8atsAuuFobe1URu9sWh6ZHqbWJS3vsPYrTfgNbLHkNLNosfd9mYpbYELQ4shbHYXwG4VqUQ82B94YxZHGw4m",
  "key28": "2psndhbA7jrFTKgPwyo9ChadianYMu8Ga5nNFZhd2TUVTNKUa5FdCQJU3shoWZNiL7uUQD8phswFU4FTTehvGHpE",
  "key29": "2joEsGzV2H6WYYzF5Ctisg9CnNMyQ13a6m8FoRNNBHnFLCkzAmnjSavnMJPx3gFtjDM85CUmCswEtswesyGbUgTv",
  "key30": "4tDNekCmmgfCh1DZZ87EeGh57Urp5Suw1VmKN9TPKaVDJdqEqaSXmpFHYVwk5X7wtTwC3ot4Jqe8hqV3QmhytGMp",
  "key31": "2QesPdk61q8N8Xbgpg6f7RY4piyA1zZ4txv8LmXrtN9ABasVyghxAiAh6D6bnP4vKsxfSx1MthcVwbRibj9msaZ4",
  "key32": "128B93TP2yt7TutrJsAGKs3rb9QMdscKcRkgx6eTu8baU8k4oLHujq5rPmtSFdTFseLPR4cpkZqqYofnALhen7pJ",
  "key33": "5b57rcvvTnYTMnyxNCMGVNtM32eKxqFihaAjFRutjxfVorc91edeLbFRwJMpe9ntKPRTBhoLUputL2gKdpdzN5c2",
  "key34": "4KZfDcp9tJGJ4J3e1tjG3xtbKKv37CFDafzsMVvZaDmkjtwjTQroxHUKFCX32cEdyc1t8vnasSxF7xjuVoCG7jhg",
  "key35": "2asTpwYeF4jztX3To99CedBQzqd4i95RjewwpYpncctgbpqmeM9BaagLDphoguaksBwP3TXE9eMbTXPJSwgmkuk9",
  "key36": "tqRbdchvdDtzgnWfPBniGZ2mS39AKYLQbT67MSaQCWh9a61L2g9PUvVLuXohe1UqWrYEHaBnwLmV2DXAKFKQg5B",
  "key37": "YyiGxoeBcFHvLU2RnVfzP6GftFG7554ickgPzUwrug4UFTRvqXDuHGSG1vLxoivGFvDfpr86gdHEobQatMTyfPr",
  "key38": "2CbVZo8ZjPzTAXEk1vNnd9vcnBWzKzsFPkBZhLL7fBaZNHiia76r5BJ6EzDVJbaJNictsjCErkohFkaL9Thvxkk7",
  "key39": "4J78oYWmY6ZHH3SxM8cy5S7A5Enzfr3fuFDEu4NFQwPtj5w5u6zAGMUAC2G8weAmZjuq4E89xkgAH5PA9y4mR3Ey",
  "key40": "2K6K2WFRStZhmwMa6PtVjbyhZMi57mkKRNQVeQdP4ZJ9x2jbGKjPoCdHiNWjDEfjLydHuvBUac4CLpZNjihfb1PS",
  "key41": "3XMWiCLup31XZ8qsnAVo8qzh6osr1sAvu2wcjEo4YNWWXzZi9BXzdsXAxFFRTB8BQrLZGNKYPHGM9PX5FwodEREq",
  "key42": "5HQgu8N7S3RtKw4FsX7yURLrWNhq96LuzT6J1Y11PX1VmiNKSvqPn3HM8GvK5BPQTTcZXAF75M9aS7ykEYqaqyvT",
  "key43": "2z4z1QN8rHG82sVr1tGM18Mg7sWBAFExjFkk9pnHyXhjrAJRhCKKACSTdTiwfjof2RYXLfGd78oJ68WCri43RNz9",
  "key44": "2VB2X4c9kqde5wXD6sywzvfecGbGnkvUYYFSCHUXaW5wEY1kTR8NrSaK5zfk5zAcggGyNksFVtDbP3g9TwLnwCww",
  "key45": "2e9hNmRyS25CwKYodRSZ457bfQbF9dwqVE95aymctX5R3szLooNP8shEphHsk1GjQjw93cwKLCeHmiaHmXXMTGU2",
  "key46": "5QL9uCyyJEGJxyZ4EoZQRgXmtDGnjaoSAfQrTVfmWCJfpRS1AvztxDeqCGwbj9VBkp9c93XzCnvfqaYqkDMie887",
  "key47": "38gQZ727dKbsXEuQTeNgFEfu3LxUGo9RJbPp8wV3g6iLuhzB7YQtsEnYren1SED9qgeCJXe99L99UVAxQnVSeKtG"
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

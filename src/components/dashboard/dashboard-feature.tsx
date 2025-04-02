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
    "2sh2irPNgt6LRvCVDgqQWZGFR787NccA4EYT7wduRPFoo33oafeNhM3C5ugXmvq4NzsbFs1DrMByqiA8ucwG1mAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vs3vh3TuDLc7REGN3QiqewpzWp8g7AQaeDLSb26WC1pW1mauPq1HtBX41KRrGd2d46s9C7KkkxVXuo11nDn23ck",
  "key1": "xSHKodfyZk3vAFtJYCetyAzbarfweAyjvbDMnEkQ16sLCdFBPuqSRoL3KtPGkNFySTWXqmsFq2ULhtTPimzXtvy",
  "key2": "4wBYp3wYRujS6BPhEEhVYdNNMcp5AevaKv5cdMyo6bXYQ8aeM8bb1Dw8NAg57B4eaq1jjSoCd7im76XkFbqLurpe",
  "key3": "62TPh3uSVrdTmkJgeYbt6MmczrdTAx1eEp6rSymiPtWcrVahohofVjtmcF2VbKdNjCKxBZ4SCqp3Uh48DQjzRkLw",
  "key4": "4XLDRJhDfHp3trtjstoTY3HKZtSh2qjConFWfATFmB2KBKi2jeHarTkgsPFtD5KmuEitBZrHZBYHbTHViAhM8jqT",
  "key5": "Jm37LGhWTqcuQ3xdohXJ4DxLCWxBn48EQMPQvVUcHJsWXhD8mKbaoQMDWTpkc7R1Mq6gVJw2xbCaPJ1Yu3toKQT",
  "key6": "5L3TZ54de4uA1ZfCrG22meCK3PSq5xNeMmKdcRGyNRCaqtAzuVfESASbxTUPdvvWe5cssjdjeGNUx5K3BNn46S79",
  "key7": "NBnvvXq6NSzw2FyD7hnrKVEZSEUT4hcLk9G6KzExamqiXYbq9FUwWMvikrEmXZcKeeiGW8m2DY9H2Eeu4Kz3wqj",
  "key8": "2e2ZwjxaADHGZZ3PAvNPCJXsj8ghDip2nWvp4saqonNQeAUdU6AWK81xapHawcadE4sdXoMZwjvcJCQdCVpZwcsG",
  "key9": "3NX9BmgwPXZvfgW2myGLHihEerztDwmCrzPGibqDGt4J7AdrzpvaGRMAjsF63XzX2VENhYGXcag5yDJ5KESy1e8t",
  "key10": "53z8g6VMmdq4CKgT7ZnNjG8YeCnkv41iuEbDQWu3ThKuFt6uTJom8hzZiwFthgUtes7qs3JU2dKq1sESWMxhaB1d",
  "key11": "yFYHYAbp2fcF6fsYe8tgMKxmMdV3W5w5Uja7gW77LX7mg61H69thJVdZdK7RgXpH7pQ8vhsSW9CKZUCj9bRVqNM",
  "key12": "43tpnjxxjXog5zJjJf6MaJHCWRHDpqC2xfp7RfUcWPhXx9v3WiogzpWBjVJ4gUnU8aAVYNTbSM5t6VCASLo9RywZ",
  "key13": "uFfns2GQG7dvgpiXhH49duBu3rpkRVKFjhVeePbbrB5kk2KhvpswRux2xcrg6gdJqzMfs4tuFGnPWiG6CQfpBB9",
  "key14": "4ooK31Jvn6ruSLB3auxuFZhoqAfiH1C2DR6L75JBcm1g8hegjASkS5LSUqfeHouHa3BcYXSjbm2r4t3FdshZqmQc",
  "key15": "1jsvwukXYjVUU39ChcmjnaHSKgNvXkQ7dMDjmweYpckG2sFoBNvJgpqqQgKePHe6kgsPEu1BqVYp2QM1W9aUxp5",
  "key16": "wrkxnUUHF52gVarQFZ8pocr9P3UsLR6Hws7Wqcq9apsRe57aEBUPtosLsWXLa3dRDsFYrkE22qeTMak8LQQC8UX",
  "key17": "36VdKJN6WVAYkgW5ZmaEJdxSgKzNCPFt9sM3vGBtW1KxZmcr9P7QyoV8q6eUoppWH1D3X1r7xuNjVjWJXmPig3D5",
  "key18": "3rraJCcQDn4mKCgvn6MEvcqQbXgJXRpc918Ny9Fw7hnfAzSoq7jcXAonsMkcQq5REFJE27rBsA8EnmQbNrSWWYvG",
  "key19": "26HH2ENR6HzdzmcT4MERRHWHLZucx2TAU4nh59fG8AqzToqWujeKwHXuSnVfeuPhvrDfgkscjYFVCPEdu7Re3Xuj",
  "key20": "AQzyuy1EM9BP5eVmnQNU4nBzm61TMe3zBJ3NNeb4PEoBs3YSmiwac1cTAPrkaVa1tjwrLrX3bDjUheBv1zqT4zz",
  "key21": "2mYFRRyRMmeZoXkXortEqz8s5Utnds4KiGXxiVmRfvLkEJ3Go17zc3rZNJFrs6EdNmqQywzf63UFy9sKMu6SJp5Z",
  "key22": "5amsDpKdcUAVHJuNxy7GAA76cCTiwPCg9fhbAWNu4BY9i9nye9fnRXphirin899TpuiPEaoGfBYMBWfceqnLksDL",
  "key23": "4tEVuip2obvEjJCXPb2UbKc7bV4xH9bU5C76LMhT6oXuvTCDhFY6GMRQkKvBDkQoFY5Y5veYZ7r9iWmMeE3yc1kE",
  "key24": "YgtNagF52YKmkLGV5ZVut1Rfyod4aotbJMoeWr5maT5iHJXkbpBKQrvmSjzwnJqaA2QRbbhJFUh2kQmoATQ9sMF",
  "key25": "24y3qNyYqQkpUw5LcK8315ZtcFRMspStFXcuRZBMQE8RitafSDNWifmgVynRZZvgF3BXvFBGDoLtTtfE12SAxcjW",
  "key26": "6nE3CcAWSunv7hjt275Nm4YvB2NRBjAV93gZazSfmGyZGDjekUNRxc4JmhQkoKBLqJFjvu8697Y8ngpni98yvrg",
  "key27": "24SYshgPMfvv3Sf6JFVHksePuJpfZCun77qVpVWGKBY1mBuTXL8iZfPWis6vbnDH5ejq5Amx6RrMSfCbV4m8mtPw",
  "key28": "5sFZXdp148oFJ7ic9HrUWkrr7DRUW3Bbu2VnU5rh7QRcydshjqg6QcnMhqTdUCH6imubvXHzFESiAUbBGePzhY9q",
  "key29": "3Us4M9tJi1F6Mduz9v84jwK5RChGvfCL722bzPUj5Z2aLgXMUshoj7YFagSQDHjUGK5JHSxSiL9VHvf4zn1AEYTB",
  "key30": "61Np8ArLezXW6PTEdgrbWapgSvtpLDjGsacMXPopL9nzAwTYFTvavpGGevAB9KZhqAQ5S6MrnKTSUHHqE5gfCk45",
  "key31": "2NDrfCj6z1KyzUp3gfB18LLY6NkxBAcN5Bnh4RqHFu6h4WsbQkA7HzY9e54yb6jmMyX1D4Y47asag5S5Yi14sU9",
  "key32": "2UrEuxrCCbTbfRGMfsgu4XUeC1Aj8qfBW2qyFCsXsUn58pEnXbLfVbSNzAgqMzovnCb4DeMuvJqG8s6Ndb8SnRsg",
  "key33": "5ACV3DT3CA9AUFdy5xgGf1sY1Tc3ULekYULpGG2Wvm1SQ6bP8ohuYypaYYiW8NdD2v4SBDqHcuwWhzSZuvrMSWbp",
  "key34": "wvPDUmEYKre7DXv5KSLnV8qzHAU4EWYBcq3Yget5V8tZSgo7QsxWdA6DbcnAku8pNm5ytwFkBb4bkKLhCE85aBc",
  "key35": "f6S8YEfhooWmbPSggkxvN1RwRjCApRPRnbNBPP1VNKi2AVv4kmmYxFJz7MF5NjBdAYsCo3HQ5AQ1j987VzWqXd3",
  "key36": "65xCTQtvi76SQtzarPuqWFvVGRp7W6LXvsiphTUN1cRVwesKV5aQ3jPbcdY1MpAznpA483tp2YkUTY5wziudCKDS",
  "key37": "4Xi8LZLHQCEx9J3Ep4zHziM6d4RSHfHzznwzsPavpCUnbtpGDoKAHMS1YSJk43ZHaAHdaWQmb2Td75KXLG9HM8fW",
  "key38": "465x29KwCqQi6DcXYwYLDTPPRkW4zTiaSqFjPtqHiFqgHHgEffWkx5cvV1VykYHuBaAUY9TcjEhUmawnxg2zPhDn",
  "key39": "2CUWZPBvLAh7wcYk9ZhP71SrLaX1WhMoj9eDmqQZUiUtV3TB3DVzVMR4CkGpRjR5YeDfQRK9bEm3MrnjvpTjp6uZ",
  "key40": "63o9xn9sakyXWPVcP3WdokoHcXtdZvEG2JNPcrpxWLKVgNQ9XbozihT23geNTuwFFHjnSrK4ZfhcE3Czvdk3pfWj",
  "key41": "2K6f7cyagPFWeL7iVLCKdZqqzyYHhkQtH1PQeYYEY5mhkC8JJj9FpwAZCNoGrfRohUEZgspa9pATje5C6FXEzN3F",
  "key42": "3k5NQVn3enPEJDsCe9LFvB6yV56FBZ87S3uu5aaaM1WfUpAYNoc86YHXtccjk3k7Uazdk5Fk6q77PvCqferUEk8L",
  "key43": "2kW4ZjNb4EjQXW6BC1Et5uimdJJu6U1FaSrUHdumL2T4rJ2DzTdp2q4EtM6mjbrUCYmntQELrGHnALKgtEF2ammC",
  "key44": "4KVaBwfdjUshFWpJPGBCwvynzfWJtwmCbaTuHq4JM2Ywg56XCRpGr7vATyj9Qa3BNtFPkLsTdkZnYggBqJ28igCx"
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

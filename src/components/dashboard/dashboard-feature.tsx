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
    "3ARfWepwGJbGz5vtzxVztw53w8A4ypdALGhKiE5mr2dgudptFWrbmTmjhrYDsMhoyJg1hYZcre45qYAjYm8e8QTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUm7nnhn2vrxLm7eSf9HPPi47ikzgePfwXnkGg74L2m4E5j8L6iXBctrh8bHEGgkWAbqgy9hN8GefpWwHagnPYp",
  "key1": "5HeL6LikfcWPrbzCnvoCpXvX9o33ixH2YJg76TVxUhPD4Bw7GqSbxb9SgdTGYs7xVXu3d5p56WFxvmLVGdnnd6Nq",
  "key2": "413t2mHEoahfJUgqhLhwSiEDxrQJGs9nnBBeNHy347QptyUftELiHMzrE2UBG8eAWuuvk7amCLpUswE8RiHUcyx6",
  "key3": "4gmyqMF4S2NLZpFNgQ13iKLQ5DUdy7JBpPhPAJzCpR3eGexmpo91rvRRD2h7jrAr8SL4rX6DWGVNfPkdnUncjm9L",
  "key4": "2rV4bJ8hTAHLnVpy48ekLuHnesCs4EdZpBbBFMNkohP6wfmwG8FngsrLE8ok7PRjh2V4NzcdeSRcA5Ybuk5wW1ws",
  "key5": "X6na76r8RPqCmDmiAcepqm4pPpMXw1h4PkszZFRoXJRZdH943D43DGGPsmm3N1fX5sg767A3hau6PgLdtyBZVp3",
  "key6": "3afxAHRLwdJntiJo9f2iGdo4ghhkFTLfH4Moxc3Y6RXZCwsj3BPi5FafDycysmsVBkxNyPyFXrWqkGCGVHFFaCHW",
  "key7": "4oTJmLgZT2ovN6G5ukojQJEUruytB65JPX51tSqP2s3UN1eLVf2QQ4dGuRz3N3b9LeYVWSRvWaJKAoE4TD9iTse7",
  "key8": "2smS9nV46XWdLjDeaPCGSgDw3qSN298kRc54PqwRmNu5TCgGbJHSaZTti12S5t7Nu2rt7z2Gesv6dLKHVD6db1Bp",
  "key9": "3xqmnJqH62N31aS7HL7rZBKTRScGLKjhQuTwnRPiCf9TXyZ39AU84RceiCwUkashLZc17XTtmB2eerYvuiqQyZiZ",
  "key10": "4p6Zp4PgvJu3wzZGKToPzk8HakBJxvMHfn4ZGMDQvYFgfT25V3w49D3yDoBfcfD1UGSB7PoXxVC1M9esWUnfWLc6",
  "key11": "5SpRvn5GRRC5sM9B8gknUJ2DfuH92Biifj63U8iuPub5QBKXm527A7kNBXmLQPZNH4ogf7wW3VJpUxVCdC18rQtB",
  "key12": "5gegzpCV24PeHWRkzNsUQcjw89PUHcsKEcD8BpY7p4KyoeTQg5ThJZQCpt3m1GjfKob9EwsZhTzLFYGNN3Lqwo4k",
  "key13": "3yc9kBVbxufp3zTBsCPbRmrdVmz9bg6snX8qHMv4CGmk9age8BGaf7KbkFofF6YNe2uqFzSkLMBHuVmszEmNMgGT",
  "key14": "2hR2LeiVrt6LtfJyH7d4qYeKC8X8EdPKGPfYFEfcsm7ydubY7ZHxJojtqTy4PCSVBUEK4JBAYaPvKsAmk49JQcxp",
  "key15": "4zeTv7QSh8PERPfDrCouCxZa9p1izmNDWyMWBqoaBtUVXEmx8bVzMrF2riNgT5ZRQgMbF4FCYq8ZwY2nuCVGvduG",
  "key16": "4PCHqfFgTucZiQ3i5tkaZaGsmm97jfqjBx9x5cDKB39pFBwjsCN1PmJhw3N1w16b3sqNKafqJUJvi3FedQ2zqjUD",
  "key17": "2zx8h43pzsLdjU3Sdu4pL5E4wvMPXHmkzsDVnaw28Tfb3zdXnUahPbsQnP8U5xAQ3JT7v2ejQkYEJSCtfnpCbpkS",
  "key18": "4pMuCqYmhAUmWWLCrRxojA2iLqzBhd7TP65amYCGJ4Pjtr7ZscK6oX5K871gYiBUjdbqcTqyakrr1sMNLhvhNbZu",
  "key19": "2vnf9yUCEgqtWySNisCRr1Yp9pMTjiQiHWFj29wtTEsY2ymia12F2SYdYZrSxFoGiuGQm8BYeBTvnpDEswfYa5Zk",
  "key20": "nRv7GbNidfuUGJ5aXPRiDJ7TPedYFPeJ96wuPGR1PDFinyfNY1PYXcoQrZztknrUQikbfxCrd2HUp6NFk3ZvmcU",
  "key21": "3cJJTEdZmpxiB15nNbWmWhtcJYKQXYKnhf9A4ZZJNnpznV6MDykjzn5FvSWdp2oppHsbtyvUrdVoFv8Rka1Ktvwh",
  "key22": "2sB95XEouCWgE7SgBfY6E27r1cSAYovTyUVFy5atD4xC5HdnpA3AoA7cvsNKtFrrwkUtGfzSgjVgBcH5zsNCS99G",
  "key23": "5bWwxhdydMKSeW1J1RuCqjuhvWvPYfBxSKhgVvtHJL7euxPGwz3GTBYcUV1zDF97w7Dt9VkZvhwP7Qrh8h66qqda",
  "key24": "4NneYL193hiN11hnXQUD79iZg7Y9JsKWt3aiBeSG3GKZpUPNAXwSVoqs24gMcQdyzw8aPr4BCiMoESEeTDgT9qFM",
  "key25": "3UX2L3pXZitdSBc8YLRzvXMir7q6TwT1AgtWsHPsmcAiHNWLuSXdsz4kC5U9y9DUUmezHqr4Gz8hcwgmeFRf8xsQ",
  "key26": "2XuUt88sa8wqvo2qXRUhxfH2ncEofWxcf9nsJapXgbALV2177VV8VymiN9kTwAJUXhSm6uasb3cBNmKquvKsaT8M",
  "key27": "5yf1vyfAHGfT1f13WWAk42pWxG2vJoPe5uXs2nrvDkeyWkANfpTeNUHKnJh4LcswX6K3QGJswfhB5ew5JRda1sFk",
  "key28": "5JXETzS2pthRj2MVK9HXvCtkFaBWChRnjMpcBghYzHa8cRGYxeBF7532dxoNCxJqVdQMQMZjfTvYpFZKHhGL4Z7i",
  "key29": "485jZRKgaC4a7qqaHW3zJAfKKpPMMRCxtYFTZkogMhpu5j3NroVBnd15RRnksAz2ZmSCDU42bzE4sXUoab4YSBEZ",
  "key30": "M8oBdSjsfVBPyPUc9BkUwELixBnW2aQZKcd1yv5JHwQw19NyMxTyyNwMShhxGL48tHib74YaETLML6qbAzKk3mB",
  "key31": "61nQSxcJmebjTxoZL9HgtMgtsocdQ7bGguspHcF23FDPbddAkeJdZN9e4hEcoCbrFW4zjm6wS87o8owZR2LwcNpG",
  "key32": "3f86o1zwT4moms6JBtsavcAjNCUbC1nLKAWiEkbL4c2LZ4Wxkee1Zojp6KqgLQJETe2Uc5rzeQJuRgBUGuiMLFxE",
  "key33": "5BF6biAN6jtHSDUjc2T1NsHbX1SzYHfCtk3piKQFPeNbNbr7rTj4RQTyiZbQB3JbPrw9y9WRAngwhRdWU1gkzdyL",
  "key34": "58gjavVqnVeQs3Ma6agAbWKYspPUD9CDK7HGwrcTJ6xXV9Mk9o5zbrjSbQ4zW4UdB6iy7fVmSu82gbdMWB8xD2ZR",
  "key35": "5P6dz4Kcw8HYx63sACZg9tFS1gwzT1vv4SnUgjyxTtFawjDVuaYb7TXXXGGrddkFmh3dfjpQhrvZRFDnQgSx9RZi",
  "key36": "38VhVEFEBiqNxtR7458zPo8AZfZRsWzq25mD6XqbhR2VbYLViprWx1dGSksxNQtfYE33Ng1McpgojEUhdN1xnWAQ",
  "key37": "4Qj8Lun4kQf4W5WXzP1mUbNMF4QQM2xgvsJjd77GgjwAWsn7VMg9LL3by22xK6uJsbgrNSv6U4SEkwjXf68qwMoa",
  "key38": "DtZwGsFfcjtu9iY8GyUNUtBbWJ5KzF3BewBxdc7EJo8QHDP9wh8ip1TVdyvVoxgcvFHc1bZ2ARX3fWsojpBjCNu",
  "key39": "4ycrk22PruuP7grxa7zjjMwW1xLBvR54j6DcmPEbU5nvid8tvm7n1RMt5LpyWrVUz5R3Uaf3GyVoD8UQBvXmxHLM",
  "key40": "SUq2JFmzQr2EsFXBBp7Hkmi41XkiwDNR25r7WYRuAMxzCwS278ZYPxyTkdkqwPyGNEdeoqjjjNzFZxYyM61Ysb8",
  "key41": "5LYqZXZvutdsEfnQUw9A8TQRe6CaaJhCVdcwF7jty8KPx73wZFAoZBktfxhG47pdga5AGwtuPDZM2nyEqnr6tit1",
  "key42": "5aRdr5TQ2Zu6NFo6zXUAeSUs16X2D9cBSyH2vS8F5PGGFkUEyeUJ4PDdEKERAk7vL8YhHtFXf1BT66Bcho4ouKeh"
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

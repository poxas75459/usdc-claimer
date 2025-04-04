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
    "297RK57WfawpVWJ5kqomqpArJTwPgLJsjVuk2fvTYXC1QTTAa6mCaT7vvzFRYkWsdsghfsQozGAsZh1U7puNsUHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u2sqwdMv2WdZ1YwiSzrg3rJTGmnf1nypmCPMQ2pQt4P4tZF7xTKJC8gSgS68SoTAh5rxu69JmD5hM7MjHrSyra",
  "key1": "SpaFncsRy5CTSvBvyuBQLcGXXDnpFCHZnRwuE5VHuchKG1sDvB1e7effLcHEhiVe9QMkSxy8fWR5MuN7paXLbKu",
  "key2": "318qBKUhL7EQfX67bHUAhxPqa4bwhbaBxgDRaQ6Y68gQnwhYw38Z4co6E5gbcdsdcjgSiHPjS1Wz1p4UfENkRPW1",
  "key3": "2uNE9HkiuspQSURqQFhWFcsNFsUBbFTMLX1pnrGR32N5BedtoBEe9g7DF6Q32nURo5oLjeB4A2oYTs1hJTCKkbtv",
  "key4": "3NgrFGCE1nsUPpQvnDkv8ojqv3giqYFmf7KbixeKU84Pwx6rq8xK8s3XqipCS5dFUUyowawiDRGFjfmbgYNLc4pk",
  "key5": "VxrWradGuTvQaCEvnCPg8mATTEJutqYakU6eJhimJsgd4Row8DNNPTfet9kFHiAMWqB1mrMX7xvSBroXWFFzw54",
  "key6": "3NLJfg3V6XAHTRp2bVGQd19f2hgT9KB4vuYoQoxJ5geFd6TDQaiPiWK9cFqqytbBrQLtUiYbeYu1jJ4omPaZNVWL",
  "key7": "JDcELfjxpQARMN1sUiCxNx559ztPt3Ug5LYspV5Z57ihQbGz9YV6mfdDtEGdQ58wHS2ZMTtHC4oG2M1Z2BUErSR",
  "key8": "fNondDGCzz1oD2g74vvipr4CpR7u8weXWPk4oGkpehWXx58YdyShe6dLuuU3XRYia6mN5g9xr3RWSar8mwDXWVS",
  "key9": "35aiptPEGgDuNatd4HRmJ129LjEmURe2gX9YbNXqZ1YWH4UyTuRqJ9iiZbsQK3NpR2tUMVkCYAHXHYHHcp6zmbcF",
  "key10": "4niaskwcBrTyZQLdv6haHfvYpZ9KxfioJ6KYvpR5mKwsiwgKM131EHHQTyaKaaTEPF1ps2dtUjkJKwfyP9p5ydhw",
  "key11": "yUt86DUCN3cBM6N45V2YRXay5XBCu7zQ7uvKE7G4cN62FvCGWJD7eDXNCiuizHQCHYYn8g7v6KW9u9Mqz4D1tmr",
  "key12": "qC5qwZ9sBGKM94cpqSB5ge1hyA5YKB2RbbyF2d2Bdcr7cNVnqXdt7TZRtXBb29ijq1geN4t2RhfcEYqFKqAy5R5",
  "key13": "TrdMLvVGhY5d2aJhrLqdAG9zTyX5DyVDx5MmtkHz9oFSkKHC9uqRADnU8DvCFSxR8DT5WMF3zU34dq84wfQjQwa",
  "key14": "4QKeX3M7LPhYJwGwDJA2XF2uLk4SiVHvmBkonPAvdRTfK9So7xECewFhHrx65LsbYMkR6ty48cBcQuKM6fCJ6ngK",
  "key15": "3TeCHE8fCTEjrGY49h7rxJkPUQhxhWs6HozvZ7RZc5sHPZCfvg1pFpsPuCnX4evaJyMTieowdwED5tZSChDhfx7R",
  "key16": "42e7Dws4hmwPqRErrZ3YUaKrQKq8QDbgimPTEf4Ur5PGu6APJ9sUwxbyU9aAeLEUogadfRUjgvKSxUEL5WrxWXj6",
  "key17": "2QD6DdPRBHrbzLyvYDdb8uo2kc9EaaWFnYcDQsCJsog2NPBfrALrP2NBj2DB71A2y49JR7RhfsG6MVR8vhfa2BHX",
  "key18": "pnaxJubM3Cyw37afbXy88TdMvsV3F8uCz2RiKUXEw1mx3DqnK3FxjM6asq8GQ2a2wJ9cb5bSN8EAovMBSV8h1xK",
  "key19": "2ViENx74tktNFxmyj6iX5ZPTDrBrQZ3jEDdfCaCkirk9tRSjgkoiSw9ZF6SRs9d5Rv4Cafcnb82b8qrKTNyD4g9o",
  "key20": "5JvnuVDmyGTUstSoLvwXBsZi4DppuYh55Wv3XtH7tD6Nth6ULA6J1nqKCNeDtG4BQ8Xt5qsX8dL4XW6S6RLuhZkn",
  "key21": "3Ep9CqGHEzsCSfUaQn6r2gm4q1vKFdJFRAfr1QQFxKPF2zoN1v71XwMd5hKaaKFqUwSxCfKKNixbhwT3vFgNtnLv",
  "key22": "2zFEhFxQ4EVngA2voy5A1KwJs3JcRiMPFVjsNTUerVs8qUrCUq2A3BxWSkBUBXXU572yJ565cWjnMz4JSb3vVKZA",
  "key23": "2LP1mMRQvhNv7QHQLVZpy2Bm1oc2ggqkUujpRujRES6eZQ7s7MB6o7o8pUADDo8fDucyhQQ7dq9dugQ5fAV7Bxc3",
  "key24": "3WGPFyPZatBaYba8qAGLBMRUta7Ej9C2TnNMPFmGBWQ2nSmHci4ZqrXdGC5mmHSRhf5Vi2rQsjr83Rn15weyMmeg",
  "key25": "2iRs5xhE1sxPSe5GDLJp1UzLdnyHKwnCqZxHYWQLETaAVQTyFYYcVKy8B5ZQWXLbtHtTb8AnjM5mtVeu81M7TCjH",
  "key26": "3DM9hVHgG9EoaEvhXH6cSsVKNy45aNCo1BaHuXDCR4obNSzY26u7fS6pRNRA1sXhyriBjcUjy1mUrip7Mxg6V32R",
  "key27": "3pan5QH3jLiEyFQ4fEF1xoCKfeMCVq5n4RgPkq9zg6C85eChLqTrnhGQWS9Ctdtsi6Qv77BeB4UknedW7rp5jCAf",
  "key28": "3iD9GyszyGKzcvfShMouWteWfDqTaFNTknkhnwmPPM2MP5P47bytSEprDk9bJ9BojdRHHjWyXW3LwYkjsVYDGv78",
  "key29": "3ZhHPTKscBD1x6pjjFWFwn2osxtA3ScR9ZSyyXugcszxBmMAA8XJydHmpfVpmAeCTnL7kMkUkuu21gWapdpGkBkj",
  "key30": "4f2n57rzVpnS1B6Q6gzAnGJxC8WhzHZZtUsVSWTPFEbd1fNSvebjRJ3PibMbAviefxZa9vWJxsJyKNv6EgVqHofZ",
  "key31": "akfaZe2t8Ly19R8pAwaTTgLBLgGwgva7v8EuLTAL3GUSFV6iSGqNKguYCQqQE1xb1fnr9TT3GVRUrii9UE4u27i",
  "key32": "3yqNRCboJmErLDeCg5xasbZ77RG5A6oeapoHPhaT7gdLtconsTr6RDXFAUrYZNkARbFAYqkJFChjQA1cRYfNhG6R",
  "key33": "5w2o6HcRERPHKRffe2kf5bBoxJ1jUYxTu1MsP3pYpVAvdpQfiXrw91w2LbJu42Z6NVLqf25o7eYB7ixTN2yjFXGD",
  "key34": "GG6ZL4DMpNZcEkEjiRPFpusPqAz1z1Th5hY1DrZz2mrvm3anzvxhXxnnBwxgyTHQGq1VcRxM2P4SPWtW8r6jemA",
  "key35": "x1VHbeDxFtn8D76GteufdoemrW1StcWNtLth9yybTzzM7QAayBCypt7wgtSjNDVcW3xND1dGWCCk2GZkGbqZJcW",
  "key36": "5UtYvJvP1CdgiWdi3nsWp9iZ1KxP91q4ycEXZhysCH277jDxgjuqp4ALxwQJiPrQmkaofSKus34UqiEiXB3y8nX1",
  "key37": "poazDZeLJy163LVWwjbeZtyt3GLDoFEwofpEnD9dExFLxN6C2An98rCS7v6TgHuziWbraMiDHT6WCpt5CaVHygj",
  "key38": "26J1y1zDg8YXSq9k4bnX4Y7wheJw95TLENs4gdEHnVYkJkUPCmeh9khEbF9DbebR6UX7yaKu7ufBAWo3ayqcvLbX",
  "key39": "A8GtptfvhZoMFB3FrSFmZg2jtP5KAkwxv5vGRDLNt5H8KNSxxDSwg9nNtV727gunMKtE8W9wbSsnt4ad8RiBnoD",
  "key40": "og1rpuz9MB8YbRJK57T5bFXy2Vzt64iKzhJJiKPNEXiRGuABsUHMbXPwiVNzGQybxp7WZ9dTmjz56dM7fpzpWqZ",
  "key41": "64XWGUP92vt3qeUw6kqySZNHVVSaymQNpv7ENanDENN7iAx2usugTpb2NCwpqaGzSD5V8dty7qYGvgERmSVAM2NS",
  "key42": "BUqtqvgYwKvmuKWDkwGo2jhz8JJBUbUEsRK1RuyYBRpHa9ysEcj39wNyzHoBwCzakgfKp286MXLk6BSk41GVSkN"
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

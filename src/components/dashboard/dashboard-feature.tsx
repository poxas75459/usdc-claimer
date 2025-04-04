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
    "gG3BQujE3vWjiczkHJeSMCi1YFUj8dFXoWRMDYbJoaFJjLPseDhsp2nwT3Y6Bi1Rgu7mqiWDi3xrwCFKxxG85bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uc533TGwopmzrpT6hkwXoyZvrtmjN9q6LNWBqd9omVuTMJrzgToxmc26NUKZiskzuVs5zR8st2QJ58ZbCz9A5jF",
  "key1": "2a6vfmHYssRnjQVKwf9FYGfS8JSEVSNcGhg2VQsL6GvTy5fNtfqfckWobEpZ7JrkjbfMpqPuZXUZD99NxMjaQqYf",
  "key2": "5VjX9U2uAEHZqMUD7MePxq9MCh5Yn7QxPabsaYwVkkLWBZ4UMSTmZaec5PTCxWgJLQjirEFBuA6JzUAGcjdaHSMr",
  "key3": "4ziJ4DsrkuHbFKRaHcYJtjs4vBa6MeoQHJ7sUrVd1tiVtzxyASWbLsfLbx3X337eGkWeEfzywuHm9t5919tGq7z1",
  "key4": "57SK6YeDp4ScQ7BcAiRpKiCQV4aW3CeRQPiURBw9c1hjZzE3UTJVbuuqd6aAjkVKwhXwp6oZ2vnw1J1hynrmgAVc",
  "key5": "4aTfjxWN5xgvgJZirUnoT3YTw2TrZko4LK554cZhi6BmxZxdpeU8u4rgnSfXmqDpJXBSh8iM35mAEDar741tk1Gq",
  "key6": "Vo1cZp7cMrUCawPniKwdBcM6RoRk13PmJvW7b36eLpasqQofbHka7ymVgQiZVKz4UwKVst3mCNwotX4RL19o7fg",
  "key7": "68NqW13B58UFjvSFrLu2uAxkUffUGwXqBum1Bo1AeK9G3nMt9WATzby73fjPziWkhyNUggxQqwe5MeFcJoBunMi",
  "key8": "2C99pkg7YbXmUnRa6b4CqyjBmVporh2u6MWYEuZ194hhg4R6LtGd7em2TXQKdhGdXBD6AMJqGPYqMWhdeytkRXnZ",
  "key9": "5ENwKopXGzBmy1BJ4nFthiBr8Qi672kTCSNH17L5dW7Tj2bnQSQUZ1hMVChfDcPsu2MpWDwodJ789yidjF4DeBn8",
  "key10": "2naJrUXnqzBMRW3Cnis3tpaZ6ZGgmneUnsmQKnJNepztxw3ApLDY4j8f99pqnM2CcxZeu5MenKciCaswjck2VC5t",
  "key11": "4fHmuuc9dBG8RvqeyZgwdi4tCAc2SsohQkrU1XT5P4cBNXGaLJUMZw13gw9yDeTNUsTG3PEyWKKvhK2ugR7PeUcF",
  "key12": "5y596DE95mnD1rLfBqAVDv722hDKMJhKMkWhPfAkEf5p3fx5dSso3p3wpWibbqpZkyzgp2aEZqqP3bvSSY1hHCAR",
  "key13": "2vjqMMKgzfjt2iW7AkDv12z2YVGmcGadn3RAKpwVue2EKHrpqxopcomknFNqYnCiBpVc2z1A9d7rNr7vmeNneMqG",
  "key14": "5EwAAoNhCLg6VXd3uLB5QAXKxXtvyFeN1Fpq1Kg4t4LecNh58sKn7g5MeWD6PaEe2euQiFkNjxxYt8tp13wqGZ3x",
  "key15": "5JgRVG5czgHkdBEvYzDmZywBJWxpvuxkNt8wVYTcHUmfLo6t5aRMK1G58SxqevyZ1rVAG7dTT7Qv9xy4coY4Y6zD",
  "key16": "5yV8DTTrMkxnFNwu1qfqPnMyoieKmLpMWjKHaMA24mrwB8vAduXrk7rpKpRVaVaDFwWV6qLrREnNH9LfGc5vC3MR",
  "key17": "5yPU9dgjLTQzUehfo191mFh1d1ZxVmxe2xeLnZU6AmRBUErL2FJaKgPpbruzp4kVy4HFuje9mnX9bPqV7FzFmAJk",
  "key18": "5oEz39ScPu5G7iAsh3SdaWAtv8gM65EjzpFDvfC5rA19XHW4hVKfTPQGbTDM1pg5muSMxwx3LF9qbPN9t6p5c4Nd",
  "key19": "S2wgmqzBdm84hvXTegY8nctsHKg14RAmQ4dzJeBBjUAkEZ9cZQUL8EvWqDBHbmojL2a6PoKPs7LXvUqtfSBbP8s",
  "key20": "48X1sdPYfLqVG83UE3A9W5Kqf1cG6xJTmyjhYd1zSER2gkBL633eb9jMcaAJYkJTSLGmBQLiiULkHrJbL1wm67K4",
  "key21": "3XqsmrH7Pzpa2k2TsigyaKpM35eFbsmujR4XMBJxstZeiFdpeVcftsN9a2D6F3QhjK82DTcXMg9f3EXQnDtpMo26",
  "key22": "52MUWaachmEChvNneWx752wQSo6vcgSCX2eWKbNbvBN1o944BgF86rQBDM9p7fHwPWkyXHGcWiNJZW95YGspTCyr",
  "key23": "4a7EE6LMF3gpwNdH5oXi2d6VEqtRoE5EtRnFFkyqnhuupuiDm7pHgztQbBscaXMvQ2rxvtn28DbXkthPQJZ3G3CM",
  "key24": "LN6ef7gXeYBW5EXbSu65bqVXcg6Hv87bi2mMJ1UEfYPBQYVhBdeSyx3ULYDBZh4eYqVxAZvC37RYJo3jZd9ppdA",
  "key25": "5XCBrFDjuZ9KiZSR6eDQJx8DuWwBNcKYRArSapT32SebX64H5HMrSBos45omD9k6yH7myRxFWTe84AvUPs6Q5CDn",
  "key26": "3ShQW8A9z69m2Xm29QjWH5u3bdbHErWsLkgy1PKSvc1aMxfdZhCr8nResGycUR5T6V4kFyi3USoSN3jsywXmcZDj",
  "key27": "4zAXadQnvB34YWH7EPTL7XZodrBen4dZ3r5VpXAwr3Efd9KUr6m2MxpxYvWkLDsNDgr8qtRrsAVzFDWbNsn43UVZ",
  "key28": "Z4ZiPqpLYxrgZLr3i9PxZSCp3xa7eNnwpn61dfJdiFK8gD5J9X3WPNAujXt2c1DEeLKY8tTvLGe3Z5AFdXGpmYX",
  "key29": "5oWj2WfNG3HhZTM5ZnYhn3LXuKe2u5iFqtSQMdHApp5h7CpY8R1LS2ej8DDffHxsfd9aajW3n1nXNCL55KcuGfkd",
  "key30": "48rqh9wtbx3dEaotJwdVBkDEsZ668EzPuUgQZB9XjnxUYDuFv9jfwCfsaboqNP6Cvgzjui9EWdLGLxT8RNfPkZ77",
  "key31": "8pAWMpukCUB2frmistBKhXU9pK2J5NB9cXF75q8gvtjuFWqUTpqzSxyX9WCqZrJR6qUvzoZJU4WBzqxDfabDL8P",
  "key32": "4As75ojmxa4iGAdwHeNrm7J9gqtbhGPvFsPXUDiB2RRs6gVjm4R3iL6cLuQiPbMKmoAWbsLfgiioKj1mzCUxbcZg",
  "key33": "Q23n22uuWMLpuc3LYUFN8JFfRgBdEG25JPRKiYzcPuE4theAYWDEm5VozTRxje1e47qECsAN49wAyVyXGJS8Qjk",
  "key34": "27ghDQt2MypbRjEW3Vjai8tJho7hvFMLeVG3AZwfKp278EyDDcmii2MEcbFmHFQ5X9nE3oDxvWyNpPa6daVbBfzS",
  "key35": "GMDX3AyMdCgdpNzPdhRFinycnz2g2wRhL4RgCPNjePzBp5yqChWhSybZwgEhHR1wE6YwEMr3RNHZNhvxbvq5W9C",
  "key36": "eE4eH6UDvAfbCsuXUKxxGspNzLx4MqJbjwPVFS5yZzDp5TWTkcXh5NEnJFnLttRUz6xp3bHooPCpk3EjLsXW1bW",
  "key37": "hxDvQgVXzKBh5hZ9gz8SbjXVfGgfsgNFXE38uKwCFNKCf7ixHq4qMQJX2Nom3p5hhfQiTYDSde3F1smUXmDBZSf",
  "key38": "2SkV9RT6VcGYQuVSeRSG1hWVabfj47iuGSaaQCWcuRatAijXtFfjh5SmhmhNmrtP8uGHo4E1vpaYU1T2CPeh4bmY"
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

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
    "4YGiXzjgqHosrUZJsiZk4qCzGDG9RPevWpnD4SoKNe1BqxyYnVU2qMFtvBiMHLE9d2mTP3vtxb9Y7nMbK7kwta41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTGea6mbBVD7PtqNcW9beNLQheuR5yyULCor9weBSNpKAawfxdnoAuSZgLqspxG4Exkc6hFcPeeT17uUX2KRGfV",
  "key1": "5aBqdPehdFBCXegrUg1byevYUXPWZcE2WDjTRCu8msxtsZTfDXCUe8DFWFSxWgqzA7yPFUH11VKyiWqzM4eHjif1",
  "key2": "2qxV8T4WPufwNCa1yhmRN637uVNreAsaQYyGrEk5GcymakmZfXjZY6Da5UNNF7aKfGX3KCZZAqphVrwyMgSdcpwC",
  "key3": "3QDNd2ZnGMLBX1dSeBKf3cEUDKkgDQHuZTxhLJVPG79at8y9zNcgondy5SUFVNxywyqyebigXCgHkUCZN7xcg3Ea",
  "key4": "37VW5F3efVcZewrotQaHgi1fRjpgyDU816qjef3KZi3ERRFRyBKRZxDZbDtaTZ95ZgEz2RbUvnV3DVD1xkWGFUpu",
  "key5": "2Gxaiiz4UBXZUFQYkWBSELZWYHvmsenwqmphF8L4D2imAFkBe2kdi53QfD6BEXFGiuHQdSHdUQKrXGbixTdRuEYw",
  "key6": "2LG7NZRpHKfvozSiuzt36pjLxxxaSrL1MEimkVjZJC5LWFVs4bX8nLebxR36e8TEYAXYMdrPxYQ64VhEXTgHVHKh",
  "key7": "3jzLDmpxcjmcx4cppPNY2mM2EZUMrNNQ5JWa16FhzGXWUak27adssgHR5Trtzu4hmc6ehU4qGXLz9UbCraV4YGz1",
  "key8": "3SKMQ7TvPpBwMm9X3dfQk5G2vca6Uu9LtB5muDvq5VihGNH8fszXfBW8NtoX62UE5A75s6KcDMQyQsR16C8Ha2sC",
  "key9": "5SVe19U5b8kg8QYA9PRgbaLScKFLeLw4jPC7zEVyqgb8bo2qAyqcLfjaMXzJqsouxu2M4Y79hqxzEquPocesGAgs",
  "key10": "QP5zjP6draY3EtiXpT5PqJLdWBjMLyNhVcfgqJ7cvaB8b7X6DJ4hcB3AeSsZwBv8v1HEQzeJivy36TkTWLJdw2C",
  "key11": "5XJ5ZLN2Skj5vWKHbcPHtMekz4Y8bckrNJcLwH9z182WHDpsuMAkryAGjT1MRRr5Ji3LQ8a3gizbQx1GRPxhWpLK",
  "key12": "4SK1jK4WTCF5bLR5t5VXKnQ33sa2eKzwGrnBhEsZMHwG4rdB2Hq6jHdvZ3XGisZ8zSzTGC7eActSxuNx2oXHuKUe",
  "key13": "TszA5osWJ2ypvpt6P6Q37TLYPE5NEH2tBiznKwPEW6VCC9fuYeQuSEkXBSexEukmSfhokkZPHYz7T5KcscFViXH",
  "key14": "4Sq7iGJvoHGTzRx9gkgtFZ9ky28ng4uGxF3QDrxVoYmWdwCad7LPNV6sAgyhYuFuBXFEGzMgtcNXcWCTSK8yzNph",
  "key15": "3wnDuap5JZ7woweATQM7oL7mwuCCinrxsFaurGmb41dAMCrTfnF4632JzBhdUvxS6KS9TuQWbLwjp3z9id7piUW1",
  "key16": "R6uhhf84mwcuZqnZMa13nCcbpL3m4rLqLoB1MiGbTqZdu1Th5iAE7Fq42z2kYEqYcTMPWfZeJHWBrDpmWkZPuiT",
  "key17": "2nue5qzNEtwgY915oMdSyuuxayLu4WGpGn4wU7TPhzgH1HkUVpDtkUivk44E9EMKUAUjFPyWdnQemsp9AdfijsAW",
  "key18": "3u1eTJGxajcx11jfumwMMN7WcGqwhsrvNtPHDfz5Mx248U418gTouBxv2gbSTPb2ZtrD3DKRcaCpUxTdAqUN5E6g",
  "key19": "5536F8YKhFKL4fJf2EGpgLha43qQ89rdReDwRxwbtfyG9xwLhmRsrrtDLyTT9o58P874aQEU2hqxJVFWHJs9iDxm",
  "key20": "4ZtcYPDu4k5SjB8EENwJi3TxhMPp4e4tqhRLkcnyMdYYgeop7eNfE8V7iHxBiy4G241QAbwzt1mPoEgHk7AiY9tc",
  "key21": "5Ttq2o97PCqGEfEnfp8x32jZoiTxMUBzQJBLJ96b1fY8g98hJVYsXW9Brc2sYZJpFRfHMKmusuF6pX3Ukr7ny5Qy",
  "key22": "4szVAMp6eSfrGNVuSTzmvQbeqc3h1J8AXFEbQyaJ2dS8cEgisCTForMAQhdiQ6dEwauBQ3wyxb16Z3447uDu5UAR",
  "key23": "55NCR1RTTXuWQ4usvD6amnuHFxR9CECghRcLih8amD4twzo8qz4mXCExwttFKz5tvVpJ2BZjAhM7FWyPJPncjY1m",
  "key24": "4wTudEQfL8t1ZZne2yvBH1BHXtEFcWAjCafJKTgbm3PnuEqWx67SCVY1VqgaSRkhFWYkFBiapV3gg5pdA9hzLCpi",
  "key25": "4jdhdYWmce2btrZBeh6fMeAbGKMBwPoXwHxJoBccvW3MVcSTtoQadpxzQFDoks8TsJn8VXDJixXYfSySBi994DaZ",
  "key26": "A6PYF1oEd95FEvkCVW61TbZTgXqcdEwJSBeS6oZiFZgUSGb2XTRLazfCdpVF3j7x9t74gau4pJZpVGAyyU27yZi",
  "key27": "4M8JNDxkZB88UkxN3d2WM7fLWB6jvEBS62EhDiVxdiy8YHabD4Jvdvh9MQo9uU2fBnC63coy9nXJQQt45G7zCrMz",
  "key28": "4CAY8XJVU9yZ2fPE2YQGS8seZF8b4YBRUowsU9mu3UqPb1rzdju5NR1zG5FQcpJA2ZLX1f3ifwNFXNdDHcyAz4i1",
  "key29": "64LKYTmjV1mfGD7rof9fvWmqz579z2YwDmwwqQxhy86hby4T3mBPsu7wNsrRn7xzcdMnJ6sMvhppBEE1oXR7sMAL",
  "key30": "5TPXaDg22VZ7FNJxX5mSRdWBxMoYQ8LLfEtE7AuuXWHF8S3tZ5QUFRKaDqkUXgDtdRCSWTLeEEyApFuzdgppuh7K",
  "key31": "FNM77WnuHbb6UYExGwbTyoJ1PvCxWcbxuqDXyEUYzLynkSbXuPyRob3zhapdf1rTxVd1teK1iebSokkzDKoniTa",
  "key32": "5MDFvg6J3n5nKGvhqScPfYmy6beU1tNARrcqRhVL6pS6eASwz2hdGiRTNvus4oG3jzv6g68mjg8rdBq6iF2PxTd3",
  "key33": "4sypQB9V56TTY1X1g1QfdTVcA5P5GUEM3VcqnR8iszWzpMdhM9i6sc1XCTUk4nVCuaX9YybbKPBU3x4PDAe7eU1W",
  "key34": "LPp8iZid5c6sSfECjbzRTzsaBySqnP2MUR26Fb4BskSRkEYsqFacAjipz3Pmsircwt6uYfKgHPPr4euPUVSw7Kc",
  "key35": "5PuQoxb34L96qYJ5uiKD9odFxkpScryankdTZCWKWrjAskKPjCa4vPw69xnA1jr2kvvYgAraYk23CBFaMGBiA83u",
  "key36": "3ZV5CWNa2wseYHDk13ocfEX64Ru9PHd3nJPZxYdqAyrt7qHESEPZVEh6QNpyexG1JwndNikqaQiRHTpXQTYMzp5p",
  "key37": "3WnJ5wapds4o1dY4enGdpzT6s7vmhLy2kUPrsgKkZ3SFKpqy6FtbT3ShJKCMa1jXTSJgMiwTgHb77DqbjcEDngfp",
  "key38": "5rRctckz1eiq83b9MipiAfgzCpSGBcG7J2nwZeWVayZCAnW68nsX9WPwxXHGeLHeogycuvj1S6XkUbAKNVk86MQ2",
  "key39": "4Bh4AcrCEbHMSNFuNk2Vnh4T8P1cbXBrYEYBLzxd7QDce1VEwyK3SsCwwhSvtqaC6Cef1cvroAhbXSxiar4Zi7zk",
  "key40": "C59VqtRk1f5CUdkXpprp2o3oF2iJyNg5DsJs4tLVmV4qGNqG7t2qDu2gPaFzHk2U7hNxby86H4mbLDbjdeoKzfF",
  "key41": "2xk4FWTLrJ3uwpN3wDPVKPuzTMj2cfCBPHMHRtpmiu8Vuwvfu3xPQThdzqGnfmDgVEHBghJRHP8MpivAwTnzeFT",
  "key42": "5GmwVi7Rxut8dPiz3uwucpSgy7dDSsPEfCvvfNTsJ7fHdX8SouQ9Xn6fq5157rpvPrzo89pEEJK7GPG9nKwiukSf",
  "key43": "4YAgSX6SavtJ7tRQYPQEFnJBx9hpAmQT7GsE5GKCRBFDB59YjRwxd1E8mVJ6erNdvSpbsJome5XqdNFq2dtRDMMP",
  "key44": "2RfJCjdRxcSsZCeXSiP9eEmu1E5thFNnw5CDJy6pVdySCZwiGjqsai7jscwAc2SrtFhX5ZqbZUTLRR9E4xcqxL4m",
  "key45": "3ZHqfmEeBZrWFdJCSHZRUugVL7XAedBw19BsGJs8zgCpbJ9Uz7YdHVffZSEvS3FReRj7JVqBMWRh6UmYJSxtfLL6",
  "key46": "4nB3qtUNeSRhi7WeaZiGHp4pZT3N47CNz9aqwjbcc6sn6ysjUnEZFDvZY3hAtV2ynpo45Jwp9Q35xCN4t6KUNv3c",
  "key47": "5CHWe6G3qK28jUPL81USxusVR7Xer4N2HpwBgMetTX9u1PJP7T8usxRnnwiACmoimww3GzoP3Rc8fcTMTgAenS52",
  "key48": "5c2s5cyqGHQEDURUTP4UrMqvwx91Nf5tMDR5cTPFPvz39Pciq1vRmTqAF1L7TJ6yxwLiPdSC4WPsKXNoNnopjYaG",
  "key49": "4DPTaqqviy478tCwQHMdTdk1fso8ncXLf5YKwhNJZA7MSuVQ4sPq8tCMvLr2KBYQ9iA9oYFYLZ95nPRtfxWExmpz"
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

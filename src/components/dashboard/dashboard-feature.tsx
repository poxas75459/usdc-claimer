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
    "2oApNBX1wUQjrMFtywX55ecPmzEEU2SxCfXf9E4LpGQ6N3a5y3Ac7QfsKQkC4gn2jgCCvMAWXF4HoYX4KwsqphT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hU3ZzcxspKDKKBVFWoD48cKSum3dZryUzzw9i88r9Lhg8Pks423xiDLbFwmfosuahx73jrvmzCzHKEa5cc5Mphz",
  "key1": "4usaLM464ZVUuRSJxQWcmfhKLNEg2GM8ZtQB3wRnJx3aernTpEK7kGDLENWHjYN5ntGrEUsndyAecYqDKXbMSuru",
  "key2": "3rY1BVgqYW2wAndYH7s2G9vN4AdFD2znshVSHdDMh68pkkTqVayAB8X8YKa9ZDCvaRf6qxJKhRWdspZuv1ztCPaV",
  "key3": "5XxKaF3uGvdAYk4X2VsNjcNecyzsohffuzQTybFmVVqor4DqHXA2KLCUvwDiu34XXEzB1wdgzy9AUPvcewuZ2jGv",
  "key4": "49fsr2SLMBJECnrYx4kAK7kXZ8VkbNHQd5DH1werLDTH7mKpWmYC5tChh3YxJsV5MBLXsQVWomsrYS9FUYojPT4d",
  "key5": "5AuxpXZCy1WmXj45Bhr779JJWcEqBkjdWZF1pcyMosEhhkMNT6RLcSNkj2o8Pi7R1f2SSe9xqaLQNhptMX3SdKTY",
  "key6": "3sCdhB71VWcrx3mVaDMuNXboHA8r2h17hWcgpdFtCKAvDpPBJNeAv5We7AePMfcd9SM4Ns8BEVjvfug4dJUuFehL",
  "key7": "JRCFE2pNZsbcnKe5hB3L3dnX1UdhvjioZ9i8cxYPgF9BC5442UUY2N3c2cEG5pWHJWAfQrCA2Nf8YJnu9227WvV",
  "key8": "34iwQf7jdCMxDhe8QzDVhsPB1bchnH4AeLtokWfCF9uefYzpXkewhgo3mq2u5apgGwdYyUDuG9Y4gAPhgS3JsJ87",
  "key9": "4qwYbTAZ8xGg9gwSq2pjkzHJQk6cCbqMVX62odRdsTYxJLJJKFE6ZaKME4JRbwkfoxSekBUrKgfzJ2MEsUHRFnoF",
  "key10": "3ibEgRKVCrDFKVhBTVsW2oBkiynHwXFztcpzh7ZMTzR91MXYZa7CXyFzFyH64kBJR8BQ2J7AEAaBE5SKC8e8cWWB",
  "key11": "2YkCLNQeei1rY529pov4bqxUPnxgYZCoeSjZHZsJyFDB46GhKutLiNUGUKq1qRU5NtesUJ14RZxaYVA63HWRQV3K",
  "key12": "26i7kvvsH8pC9mxjDidZ5iPwnXk4BNLiDzBT75w1JibkH4JFXyVNj9bzkHCtJeKC1W9fhJpnYvLtWKkNhXzHNZoa",
  "key13": "3Cuda8z4BPA12W7U8Vwi8R1YS1FrvUU4MpkofgwwgrezR2iNsxi4WtRR1vKD2sGk4WgVsQ6wrLJ7yxqYjNkG1Vog",
  "key14": "3KmgQtXXSECxgk3p2vNkCPDnHWHWciGMgSdRwpoHV8uhGAMPYsH7WyR8M9BZUxgzqcnNvJhsvpjTD16LHFLXWSYR",
  "key15": "4G8M39cJKPPypAfeKtcGpVcDGULNXjtQsTdYjPj3CdTHvnoNg1fC8uZ7k5RwiPiEAPReGHoc8udkVhUh3zeBVCg3",
  "key16": "3cyTYjJqvUPSbm2TBBe5ZgK7sWiHsKmsxbdNcdZbLf31QC5hAYKm3Gw2hbNo7NgmDasUMjabG479z6Ud6o7k7cY6",
  "key17": "waug6FZ6Pzrr7beSotsf2cdren3w5JT5tccoUh9rvNYhnvjid2jtFt73vNBCg7Zc8rKmTT51PmSJnRNxrTauVBR",
  "key18": "2tukVzX3J8wX2sHWyiBruhysScJs32Rq782TqBRLevGxyHNg4m1a56yRw5kcCpidP3kmjtKMfe2iSBZKCn8FzAUQ",
  "key19": "4tVQZamGytycqw6ff3i8kwu4qKyd4jUMRtsFmtGch8VM9acwRv6hWPe666f2D88VkDk1cf1cPTme2VTmUP9Zi2Ri",
  "key20": "29KbSJsChJH8xNuTAqPAbt9itGgZZ7tKqzwTSkwL9aLkF8ZdLqEJDzKAtcNY9jvPgx7opiAu3rBZnBhH4RtmtSL5",
  "key21": "P7giGNheS8kgBLgUsaBcVpwx8nmAZ1CcVL9h6kbwxfEn6hVzGAr3sRdZce6k5tb3e17PmtQ43mFWPzWRH9Qsub7",
  "key22": "bEBTqWZrzHcH6drX8vwFJcg5VbRs47n9wzCd5by7zfAqBjox2t291BrJCvWYKAJBkjBipbZim5ZKwP6cskrijnw",
  "key23": "pwzZNReyw9MMmNZ39W3ewX9eB6pZkBH1endEUcxZtVrRFMKKR4Ta5YgDbwyn6z1DeKcmLYhL1t8xtkt8ekUJUG8",
  "key24": "4SU3FMkozSs1UuEi4ZrmrinUtVigdaCoo1nSMaQYVznC9TpiB15GG8aAKhh817VnTy1g95Rh6YsUEGLUG69eLesY",
  "key25": "242usEtpvRgiYBQpw5etwaLysHyFbQT6j2Pdd7aWhuEbTpTx6VVy9hXoFuqto49B7BjJPcHBGABKSqoxtntjoK6N",
  "key26": "gusBZLkW9LAGjrZU3dGjRGTy7RPHWgEEtDHa58tedExWJyNLuZDTwTrbH8MBNrr1mc53qqrX4LA1AMUkjvUkrTz",
  "key27": "4eH8z4PhtfJgo3pa4vy44RDx9Uj2U1XWubdptT1xaFoniufMarNkEpFvR45hE7WdiXsXTG41pr6h1X3V6BACSLUm",
  "key28": "2m21DE3ujVyvqpWzP4MA4epLL8CR4fEXYx4QPScyLAvXpicaetHE32QqwUjMh6HxFfH56qvwTVygoYF5PEFTjZpN",
  "key29": "4FPT5ZJ2QueuCDuGPTZpirrMVMrKgEyTLed6HqBYJMKPVojbSHbJT5STjKmck58TNuTg8PNLqK2JAyGhprCWgfUL",
  "key30": "3y9iuVC9TpnHCFMegaGJK2cWeeXkddNbxXt1SDitwi5cUFD1uMM8115qz3ttfrmjttzZzbsf51x2pvvjK7mJ7M84",
  "key31": "tM7uhq1Q5MK6tkr5K4ZaQq1DdScRSX4xZajV8brR7n4jPE47qg3AN9Egnggiq2Vhv4sNXjz9kveWSJBA2Yfsujr",
  "key32": "2kdzMFGDErZy6pgZUekHmwJH9mm5ZBZdrtei5VDUgLpCLphKMHDVMjxQu4HaRQmtw561Nv9Lw3gwh59vz5gxNJUn",
  "key33": "FiWBQotbeEnrtPsKwcSjaPcTbZSCf9vrqDcKxKPhGwqXwgE9vHrYmhbVjukKqYKd1qFQ7rQZu3M3r5QdHUxzeP6",
  "key34": "3y6uQBEZ4kbvNBcXWqMML5yWsuTbBRi46LZrq3Ws5g68LGG8jvG44qCRNinNq6bD1TE5ErZbiv4eUmWvDgfgasfV",
  "key35": "4y1DT2xAVAMdQ5NtmgBRFhQnZNJ4xPP8SvA28K4TZfvDPWGzee2j5SgE7EyMinvCQWxqdrrWdeZ3Q9hHxvKMEvVv",
  "key36": "5bpy6zFwpfGW2oo9Br68zzpq6tck3MDAkg2gWW5daFMw6qYz9jRq4mx2yycx72bNNr145Zfu8mdbBBCU8f9djVar",
  "key37": "5X2LPGPoPV1ER9BKneE7Bi4A4WvCLW1UPLiAyVcV2WtW6Q469qbyuvGriGrU4JEEuRAcnQo3mSmeDin5s6WVa7CD",
  "key38": "65mRSH2yM6c4Ra87rUhcuESVGftyTzZyeSVJAiwSMnQgY1skioBcw4jsWPxh6Xe7gY414s8UNC1NXWcUhwrBymQt",
  "key39": "uN7zMP26spFwWfLc9oQJhEBbs1iKqcrTzSUS1a4zUcxbDF3AHd9dcR2Kjfwsp54QWPgu5MAXDSjpPKQEtYaSnFy",
  "key40": "64m4V51jL93RWhuxmALrf6sUqUF2SB5RNpRLTwDj6rZfihoXvy7LosBH2N9BMknsJ27H3hnSiR73Sj9uCzKRoUbQ",
  "key41": "pcS7tHikTfPWyN6G583vKcZjHQBwhzXTQjsH6KJnn6dsTaRapc3s47fALnLT553vxACpFpkyPVYtBHDJxfBzU8c",
  "key42": "5CEhp7ZGHbncmdEEQsuybF88MLBC8L1ZhXR5QVJuBpbtW2oe8bRNKLRpgm3UotiJ5UczR92umgK7HRigZjrFoUaJ",
  "key43": "29rd6bqgbkpLSv2sADXTW2AzgWNJrBYM3n1jViKUwgWUkWkB6HrR2SDAFfxXenLVgtz28ti4Y6QLsn66mj2zPMN5",
  "key44": "5KvbU2qM2ShCJqaxtHMkjVLXkc5hKvFnLtuWN7oZahohD39owygYkuCi1yNZwHMVrPx2t9Lyh5MwKevQMX2tdfwX"
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

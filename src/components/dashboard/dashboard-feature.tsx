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
    "5hkG2Rdj3iJQMUrMx8HErdcR744bCDSPYskbW4DpqDfN36RVKFGWCHauSLjP25UyHLZu2FqXHwZi21gA6mEa2YP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDJ6tucmFdgRhCRiFD6fiGCx4mdpb4aGT7mae71B95HMRVmbE2VWHEa6iW2JnXJgx68C63VsGw513itjGFuYZPc",
  "key1": "5HJWPD5cwedt6FbT3XknC6Pny9q5Qm1HpPiAG6t3HPac1qTNgfoTzoVkMhdKuQT5t8A1G3jWDvz1mLY7TN5CZr7r",
  "key2": "4vobyx1QDr4HiUwfqR2c8THAFuoppYMD7kkAxb4Wx3W68jQJ8x8TbkUvwDdEgyHYdnQfQf32qZEEg228EK3Jd7ex",
  "key3": "4Vq28qkkrNRQPPsu5U9LKpP2o1QEsrn1Jsz87ADQAtFJNxVcr6EnQNfir14s5wNDHu2fKGcdL4ymNjYpr8Lt1djb",
  "key4": "14FcM7T2exomfByaJPrqubsDBMNXbTCmWAD9PGcKVnELkYiB5WDnzqy1E9jfzH6hAEyyxKFBsKYeMidobarzjcs",
  "key5": "4zZgCKtbU8BYhjufEZgbs2aRshjNwSdHDGKxAcAUMLB7YkkrCEQXgFWR3r7ekhBkQz4nsk83xtJvFMpUjkBsoGtH",
  "key6": "581WXqnhGYB5vh8edbTmPgtu88ToeHMBdbzrRd3LJFsrA8hZrJNwk18i9tHULykrV56nFNo8zjzmjTZoBcgNxwrq",
  "key7": "33X35iqypg48gjfT9aLLHa64vhScnhVRTQLEg8FmbKFNoyYhobc33hVaM9TAkti25c7MDUbemBFtbxXqNdRsURf7",
  "key8": "29Ex4BFu3gvzj1N7uWCjkKKrRvJVCEaPqH2Km9WRap86nLC2KpbWhaV7gLCWMauvN7vfT7Yrc27P9wNr7qGp4sAU",
  "key9": "41j2Djfr9SZojuUf7RP8E3DNwKu6dCEt4H5dZwrejQXQcijHVpKiWkUaUoJLWTspFixVoFH2fAw8T2k5iqRTB8yv",
  "key10": "5ozCDzD1f7c4vTZ6SvtBvievXGwVfKPquYt89a7GJA9mpPRfXWcHwj1tRCcZJweUR4Yiz87KRLUMWNM3oWhQSEzx",
  "key11": "sBURRcfkXgjQLUGGaQcyVkU7vMK1siCwiWTYX9fBqrbEWLYiZCfw9fsmfrBnNfiabt61G8TRKqHteRWa4dnCEMe",
  "key12": "q54QVf7RgemTp2M4xbkWN5QSKEdcE2bEw8rPe1wxTAEs8Ax53NZ8dED8F6ygjjnDa4VHnz3aTybtHPCGThpNqXQ",
  "key13": "2EdC5wTDK78wZjHeGqkWfMp2GCMzu6yfvVt5g5ZLqq3ghYoWU9BQ7yJGbWkWQpKAw3DGWsjZdCqFcbLZXqUPrqSf",
  "key14": "4oSZ7TCHxYoF3A5xwotJ4CT8ybf12wuAEAbdYDbES3E1y3YALuhcbvrF7eVXT1iSxNcpvWBD1grAgxUQ2ABupHy8",
  "key15": "5e6TYKaUBP5wPjy82hkhHk3K7HtRHQbbxJiD5eSaLiHxfTXcCQj5Hes5MaPxLWGQp7bUXhKc3XBGUZc9JPnXss5T",
  "key16": "5VUXr1F2r9ixiLYqvsJShNDbQk5BHz6nVsdAxEQDUkZETxqKHqMoJirozkqzzBous4sDg7NnY4NwDm1XT9zPekrB",
  "key17": "4uCpoDiMkkewgojFpD5AV6TKcb9Q3feXdrxxWfuXAbAkdd5LtAv6boLiaE9ut7ggBckWnj6tn6UmhznhZFMEpYyg",
  "key18": "4w7hUfm2QTV5Pv8p5e2uvphcRWMCfp53WE2NAuT6cwQ7qAE2HEPVJwjR1isxSc7unGsYQfriCypHKEE1aifUAdDU",
  "key19": "3ixAtDcygrjT6K9iRuxHpGejdPmkbyfr27QNML3d4nyV4ETW17D4FeRUZWgBmmdfi3XngYVNFbkVzDUfyTTuVDh4",
  "key20": "4eLgdvka4FYGkCd8UjFACLtjsKVogJqV28EMfaHLznjhhxyuv15DpLZm6ajsNpJbJLsjqXtgj3Y1fs4uJ3KwGN4m",
  "key21": "5TiJG17oj9N6gFGTuPtV3yq9EUS3UL93Sx2N5hf4LHtqr83iAEDqYrg7kqtJoYpjeXkdgRKDhSuZvdr1DH8kjRph",
  "key22": "FX25ZgVZrBAatB83VoiRmtPqXeXNUCfn8V5GQh9nYYXgToC4wmtcuz2KYdjV1vxgCjwnKp4yHLAuZGR7BDLRNYV",
  "key23": "ZY92NAxbQiJbAtWHjpuknf8iPBRybmkSpbyambKZJbWrT3HXV6cYTFCK6B46bF8DcaXBn5snJztnb71GYqY1XCv",
  "key24": "2xhWGQ3heR1o14vF8PK86KCTZ2vRHbTyGAFxx5wALJDWM5R96m5oDbcdkhp9yeNe5xoAXWDNvY6MFaZW4teJjC9F",
  "key25": "3kvvkTB1PGYP4Yc2gU67bLFs5sJv6uuWCcxmhxRhvFiXQPavcbT5NEydcxj8n75kgMUAroQq6vf1CqyBu7pDXgoG",
  "key26": "5wRRPUDDBGJUBK6LcDCpRdabx9V2uvGwaRvB9EEwfjSHcNzVaEs4qBDfDovixAPGKeFZGYKi4cqPnKDbZUBke7HF",
  "key27": "rLfWa2nz9LzDBfbt9YazUUXUav7FzAazoqnERDpYD7JASj3siL4Ms3KLtaVJHHqKkQQZMWUSefAmzMeR4XWBZnK",
  "key28": "2oB1xz8cfFhfHsPwL562v3AGtS65wx4jKgrWXzjYi2PBouyNSfYU3TGWJnzm63LHfPMDcwggae5r6s5c4YNx8MTS",
  "key29": "3wdULGyB14ZsEUEJfZ9oSgXdbqZ2dqPbPA4vDy46iiuvgztpG5KRiaZrEMyzq4kdK2x4bVgwci2pnv6FQckkoeZX",
  "key30": "3dYZQCcsQpSajiv74G5qvFLeh7LnJmFBKxLtU4Y4ZmNfdJvPWnsw1hbSJ7iBw1aKD2Dy94D41EKhcNXcXJDaNFP4",
  "key31": "2y4LiPFHqRPct3f25By11wjpGm5XvzEYTeoqse513X1NcFswRVzL2VhzHkdW2fZ6DFFpYmR8cjd93FVqzAiYQK1n",
  "key32": "4ZK5YovSNPNnXDwyiKF94WpEZVGbP5WMXapf9QSJvW8CwLs6FaKSH6xeuf7ND325NW8MoARhDF7UhKJWiz3LoiQi",
  "key33": "3bTs6CEADrhqKCp3ake7C6984obPfNSuETZBVrMVM5SUvikeBVnqxF1KQCzxV21Pw8vqLwjLMgjVnQPLDZJTX9U4",
  "key34": "3ebxmDpYyFBtY258ZYTENdcxtHQWUeqd5YL1ZDS3PNZf6Mzx81yRDB1NCBrpNjHUoZWuc942QcPPYpJboGzuTkDf",
  "key35": "2VC3nuQJtBJs8AN8RGam4fm9LvhH74LwB2RPh4o6KZNADiCupmp5Ud5s413JZz9kPAtKzv14vPtaGzFnFW5QyCkP",
  "key36": "BWsdpC3q1MHoczFTQU9MyonNJ2NaLTG1VAZKo11QeRXf9VGSWLPA7W2MRbJcs3SUqh1v2fWzZ5BwLrH2UuR9Snz",
  "key37": "4vJHmZayxY8zDXYk3KY1F6NuN7vmJ3eP4YMXsDxYunsPH8aF6XNhwxiYgMZLbUupT3VnqGVkRjwm5SZqbkfssD4o",
  "key38": "5e5B2bttNFmzUQjtg6euvwC66ppaD1HsCmzjzTQG1uR6otruCdZ1tGw8fku48AirsHpuyCYfBWFCstTRD2zmSarM",
  "key39": "4rYfc6Kds25k468GnD1HMujFJcY1D1SmGwQcZ5496KbrAU51rvEjp7AEHaqFuVtgbx4AxY596vHSpD3W8fdZYemY",
  "key40": "on8Ad3QiKp39HgqQ9NZRxMt5Yg6yzadAiFFZJSGX4Ac3xfrYrt8S3mX89uZyiKK7PikjpNnAHueSqNAQ1V5iXxr",
  "key41": "3xoKysHSFApRjiJegFGZ4vgSKnAVhm2zgky9AVo9LY5SGNaMgWX1eZJBJrKypyvpPftkpcbuQvw5orgXSSiRQWiT",
  "key42": "4hNWApQM87WCBRMEEnHZ6FYigRaFu7wdgmWDMcFURbVQK7nhrkD6b9GAUVDodfC45fxBHhteiWhZV5ZksrC2PiLQ",
  "key43": "2yC3M8iEn8BTENUd76LxBpSJWnTwiYf4957aXJJ3sBxdxqG5BURrMJDedqXq7TjBfVMiYqC14AeymJMosMjR81eb",
  "key44": "3jirfGfs44MnAywxFgetyLtZNmpV9HBRrqP78sXRDzzAMiQ52BAvrKPsZYGqNL6j54aJhcAEZ5zA5ovvbFqQ5zSp"
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

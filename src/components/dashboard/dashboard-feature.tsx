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
    "56VFTmn7BC4UjVsrFWgNbMxGe8ojP1TE93SGKRffp8VBaTucSzxbAPb72DmpXy5RJXhPspneiWrTmSpBB2aX8JCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43E3yty6qkCjtKhMhAxbPpYDy88Md8wBGs9yKhxEEBih5dnhp6YsejwHZkvEpX67pxqzTMoyjSTnBfCcDzqREQQH",
  "key1": "4CfYVC1bPCi8dG6wxwjmFuNqzYtnKpZ8auqw6AD7iEE2Ljy5s6twtZS6mzLZ95Pco3Fv1BwEHq5PnLSyE2e9a87f",
  "key2": "meXTSsiNSPryXKUUYoKZwoup1STaTL6RxMn8nAhTKfC9tN1FX2UM76QwsmTLj2LhBTPquawKRg2P9yVajxSqjsW",
  "key3": "4iryH2uezd4rLxbwVSrG46hRnbgt8BwSrceSLKgYKLNFyrX5w7nav21C4xNSPqm1ScuUSAtQPoYwGPs2QL1rU7Ax",
  "key4": "41x5ZJFoc9hwjGE2MPSN6hT89KJbMnZ9imqjijFhuJiGgiJCQYNkB79ZYJqS4ySmi2aSUcky21emfXbM61P2cYcC",
  "key5": "3NvNHy8VsPJq3ZzqZctnU9Btx8iPA1UzGN3GAWdJsZ3rnQcaWAPdRMcDfSPomqAbNRzHtgR5ep5G1Zo6KwQTWquU",
  "key6": "2hn5QTMavTH1Ji9HnUtU3c5W5j2KeffaXWetRsLuJLkSLTWSyv414H8AiHaHD49wUiuA5BpeJRAqG9A3ogkM2vbF",
  "key7": "rDdDGadZzEyHBcJw4hKryK9cBu7dPrLqsoP4DrAEWK8woBoS3v9PyMAycf51CkuUAVBNq2YHidfNUpGWSo1qvJA",
  "key8": "2qQoUHYeQ6c577oY7hRCVG1R64c1KdCFAFS8QoQSCeaSVh7aZLwGLiWrH9oKhrpFhxwbQ1zNCXjDH5pmfEbyMi6z",
  "key9": "4WaKTNEs4KqQ87pq4Dd56SDuxXQB7LFea6b6Cm1yTAz1E5nBfU166tMo1ALcyibiuQXKzBpDtwYqPev9L3rTVsxf",
  "key10": "3RFpps6KtiJsDnkw13PvWSGxKfewEstVAmp1wpivwcvUYWUXihS7Z1SsSXKe1s4CYUa4xmkZphzF7vTdbp9NXa3y",
  "key11": "N4wNwxSZw8ZN6SVBsoyXJBs1pydcux1Gfs3ypUCacQ5DZhQm7HkcMyhMemJGbgxDLHaxccJgWnaBZX2LNqSXhwS",
  "key12": "4xdymmzakJRJS9RcB7Uyw7TTgxsUc6eKW2q6uUZstjfMc99b4WDvuQxTmZ777FQQcEDPLF8Ud8bDrtTFWFkTGmhw",
  "key13": "46tTSdfnVdjGhLHLyJX3CFmvS9SHXPrKYT2AfzAMG5Ruc5gfqWbZrMnvs89XEDKXsNgg7LMiFyQdeZhoKFaWtRJB",
  "key14": "5N1Naye9WDBD8FLVuW6jJpPYi8aCSXcidQuxf9CQAzpvhtj3aHriFvLT7NWDNa8DPdYki3sge6HGXPPbLWrPLWW",
  "key15": "57Xh7SGuuCpLFV71nMB2xLFaaTEm1q8XkJP7dnS6V5BhjavUPyvVaTHJ8cnxghJBUkjoN2VSDryEF1hHJkLuz6Nf",
  "key16": "5p4RvVLzFGrsPJHdSryjLsXt9Uaaw2hRjEhD9X21shFRk8mBM7ZN8i1fkMmZ8wtbzegmNCX33k8STMKruZaL5J2N",
  "key17": "3AWBrpp2tNgAFAd6BDGGYYH8eKePZ76AY9zgPzkgZMZRyDpTu4J8148QL6WkY55Fb3ejqz2csjUSURa1vwDuoif2",
  "key18": "2ax8opgcfEEoxxMcN2i1Wjim8Fm6qrLG9EiWJv61kZFEYmSsyfaZnvncFtUMobTgfpo3wDfqKoGkTsRY6AuK9obC",
  "key19": "PEssWYijf1QQTz98MUNe8unRetCTE7SrULuzBfK6oY7iqY6NPECi4NuGYNpsTjpXYezSoee65xspeDAw9K26LX3",
  "key20": "kmBW9KnACdiEpxn6CFyKbHXSgsXkfNXUBd7wWS7f3XNe2gPYoFgKKfzwso8EwqgeyNoQ2QFKcTn4r8VitqNupZA",
  "key21": "2A5vugY16EYGuY86ecCYe1Z1qLic5ZGWbcGWWSBvEucJKku9RJgst8Cd22LUnrPfAB9qjWA7Lgd1h3kcYf4q3yZG",
  "key22": "49fHB4mHVfZgCDaER5hZibMR2Z6Gm6VDCosaEgraM1Z1WNSxNz8u1TffZKBq4qFfjKe1G3di9UuMbEMa19WSZuAV",
  "key23": "5H6eert6DWyMSNXT4ZjULMcTdhRMEbXs5wY3aWxStrExVNzhYJeLWcbYpf3TEStSQZr4yXjGhFv96ZQ5uXVztAVW",
  "key24": "3dZN6NB1cV2q896QfCE6FXiJ3J4modTaJbACKkkorSSA5Hf3MSwJMJfSur8w6spqHi9Uimw12tAvcR6f7CrT7aKZ",
  "key25": "65mbhcvg2MrSxTagFSd3S88qmVPx8NTD6EGWQQsysqMuU7FhsJAJXXs95npRQLu9Ds7wbWmzD75cQbKNiChsa3og",
  "key26": "3qPn8FBcbHESGwDXSYLe8ducz5nWE8aaG6ssjiTx7bPHaaASGJqv66o6TCc5S9DBnf5AkVB8oqy3qa1AiJ8jZnoX",
  "key27": "39oovAPJdFX4Xw9TyMLfzryJnrG4oRDvtf39QPJ6SaqjGoQusYVUmYymVKByBLR7WcPdrUrBA5e7MWxxuw2XXXrB",
  "key28": "3T9txJMKwuHqnmApNsj9CkB2zMQz1x6LhCHeCpTk6bfZR6y9yRLe9ydy7ZE1m9SJKpyYqMis9reftWqZwcqSozMi",
  "key29": "3qMp6Fp3P8bsmmd1J5hg17r5hQzGhYxaYjEDDGx12A1iYXnkppMqDy5dbUCxhrZdHhaQzAq6H99AAPNzsyYvdFRm",
  "key30": "5Ux9dQH4Fg2khNnovLB5V828FiLt9a8MRSvEtLHLrEcWrXS3vFhRQSRYt2ZHJqjkUiS6QTgcMz99HDhCSJ8oAbUr",
  "key31": "3BNjsRNA5mkU2PZP6jZczAkxjBQGCnCseGCdF6AU8cEC8iKTJJ824SDXGaHoeYomKaiSssS3xEh96FVTHDdgoaVE",
  "key32": "3AN3QcreokyuXxtisFa7Xq9rTFYAq3Lu5pmvGxNSDtSSJZJ9BSs5opU5xmKsfx5vpj4yTGv3LCkmsH6B5xBmze1m",
  "key33": "2FCyMhSxHJG5dsk1Umi1Qabi5KqRJMpHiZpCobhPTMTbcG4a5UeDUjeimbrDgrvHuBCwd4zF9TAxb9x9PLecBEae",
  "key34": "23EF4MGVownqXtZAMJyJYG3QN2x1NXMTE6iB2xuRsyPUVRPadcPaTiA3t7pZuJyUdXKhXC4ffTjK5PGSbAULoiGk",
  "key35": "pTaH42Cd1xdfYSJuprrGzQXBmcPtC1VqAK5tJWY6Ki178LoR38J2Xz2WKBJDNQsu2HPRQmefToDimNvRkZjAs81",
  "key36": "3QAbqdqUab7ZTUuAp5wVhNncbCVBn9HS4Vu7BNZGLuQCXvgD8Q3DstNgY2B5as1E3YfnixYat2fHpDsB9gdAKifS",
  "key37": "4889KEJKwgh3kCWovKub1JHqKNfJwHKponWwTnZqWT9torZwapvYN5vYWfGRcncK73RHDgcZdG8oQnWAqb6gkqZ1",
  "key38": "5Bot6mmTAJWLd8pGsTLTcodFJeLVDUR3PggeA6gv2ze4ruQ2Z7cwDthXhr1xm4LpGV9mksZ3wEGNebtPWvNFNEpY",
  "key39": "2i1XXZ8Djp7L4GkWS3RFsG2HBotcn4ofG8WjPd1Ek9ipewm29gPurSjhJPmvRGjy81kQD6B3p6jivPcdqoeGJLPk",
  "key40": "2ztGoCKM6BGjweWJG5MXRfsAnypt1kyFqmDcpmqKcJkM2BoBvCDk8EUjpJXJZAqwN8MUv81HxR9DM8pDpNiXdbYC",
  "key41": "3AnyuMH2TfLQ6SEtFgKgdtH8hzYRNdqFdjWtKnaGhXHv7thXydK1sjK2rHqwiYe86BpvAu9T2YvciErN7zzYtT59",
  "key42": "3ZSB3wPjkZTBn1wrHxm8mGFCVdUB8HpGgpHJumiwApCfjchNeUJjJUzPX71fhxkzrGSoXfJoL5iWB9xuo8pKnq26",
  "key43": "4q3DVSdD4CHK25ANQeQjS7u6gfDyt3uZ9Qo4YH2mJQtdJrvWxy6u8GYViLTfjCLo23gkFxpP2jKSLnLenj8SwyCR"
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

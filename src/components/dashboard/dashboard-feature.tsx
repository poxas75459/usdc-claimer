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
    "2iRBQ1ZP9c3pkQpom5wXZcJNibKUMVomzDkzpLHDiM7gf4EPr7KdTRZyVVWzohgGXFvdz5ociRm3oATRXP7ozmZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573JRpkHfRkm947oK2i14kuwiC8HYmY7ty2WYykF1NZz1TdPakyb874BGq6MaMFD7mRFUWnShAkhwTJysE9e3PrD",
  "key1": "2kdLedh3yreHYGAohhvKTnqusYAUAXy1kZXDYGmSc5iPnGiZ6opjjQ1fnXafFPgh5SQ3VhMfp52Fdx6XCs87mdSH",
  "key2": "1QFRBuj5HwB9jsc6k36B1EgoLQGAFxn7Co1SXBoLTJzFAgFbZSXX9E9cgGVeUihCvdQKxANqrHppgu9bqGm3ySQ",
  "key3": "4ExUpCPL8EXZ2peXu9muMHsfAapv3WJagQmpLCH3Ckc4Juy41qmowTS8QuXWeVz6d7XcQbpsKvmjta1k4B2CkKHV",
  "key4": "4ioQRLbcPmfgnVCWE8WVeUJTDMiQWcoYdK358gN1ZmqgwXKK7rqCR7mB5dNEVZuJZZzXFruxpLs7Y8fdJ5ztEbFL",
  "key5": "3ydjmkaEVbqJhGheV3QZSFrdtbP4XKZTwH4yjCg8gUAWjammCiM6UZ7BEmxpMdKY9yBHSqrCjHrF6F3KqjuaNQD3",
  "key6": "jHiHzACqSkom2KSeXd96yBWt5DFTcW8ooS1ShEuv89zmSDSxK5F5q7rEmDGTHXZZ3NgtFp3h8rtMQtdyP9LnfMi",
  "key7": "3TGTjGbakWmWTLYzd82ensd4ZKasW9bL8jnkbZs11ZsUaPBhsCPR1K6Yn6HJGvpRUkgEDZWeDemFh4NBpxd6Poue",
  "key8": "4MF4q3Q6TTcj9s8BKEEHtvUAeZpgwVrzSds8dt4AHUGXt36NByhvRrKrUqnWjimVXys4DksNaPHc7BKpfi3Psete",
  "key9": "522vWfJoQz6k4ToTB7bU1hPnaBsS5LVtrFguwhdsTMiqg1T3pwBN2yvLah36sa3cJyiD1yQkmgRUSJVCcz9DgRWz",
  "key10": "2qz4fddgj7XvTgvLAPb7CTursvyiuyKyGY8VW2Gt3NhXfiXWryT6tGzuM2pRPCHqUmXy7YWkCWcs2VE8XJj9aAed",
  "key11": "4RrhXwfJMAHE3pPZK3t5Xpx1yqbnqcL1krHS9YfKFzUDTcsL456zaRkA9TgFoW7DxKb1axFwjKarAtXBi9rLJKD5",
  "key12": "3YSeT9WQSm9DYJYYBpgmizUGSfsTVkbfiFZiBdXk2Je3iDb9CUxybMfungZKn2kivsWLMAwUaNA8T1QrX576FDfu",
  "key13": "23QB2HEjbDSu34JNZL76MMgmHHqeJXRw3b23gVLUsd3xJN7uUp95MbcDz44Nbh63f2LVNREivK3cTFiq3SxoLT5j",
  "key14": "3DPwvgwkiTjkLEFhiZ4NTZwp3rrFJiEg3DYXCua7fQvKAVUvCyghPNgVmdJdbUiXSXsngeDCBE4FyRQVdt3VeBn2",
  "key15": "4b8HJKVdE7Fu8thJQ9pc99TCAdB6aYQi7gcSfgeF31N1Mobbx2xRBRGMsSA6QbuazTKsY5KshjVwnLc9KeDoyySe",
  "key16": "M74dvmWHn9nKP4ERuiDXNnb9c1JpaVWXetuyGjM8Zm1WCtLhNn6zfw8S9RhTLrACnpLTZzwJBgRhEhrZdH59DtL",
  "key17": "3V2RpkbyFfXZLdyYXG8LGkWegDKx2iEEE5THLzsdCDsTpRQvcZijMNPAVRNKCd9QSMQXRxi6Nigc11YrkceaAGes",
  "key18": "4HEKXtQqTqgnMwDvuXvuk7Mfg9LpihQ4K3Lxio5KHKDD6Sas8K9Vb5iCeY49DsRnzwM8CAEBePchEvboqfB9qxrQ",
  "key19": "2FD73py1ZnvrCMCuuj2icSoHsMxpKNGn2NmKQ9EF3TQgEEQtxxKhqQZqZR84k9wrCKbKiQ892KSi7GY8XsUxdzwf",
  "key20": "5w6mchypjRr7X7Z3fpRbYvCgH6ybS9VPCPChyiQ8AWRAMoxeAMtJRNqmfUNdktL359b7jwU4yxWhcswE58tgerCx",
  "key21": "39oqf2zkFjLPdXq4fVpWGTAZMaTaLHRkiV8gp1LQoSW6ubvzjaoDHypKes2KB6aNJgyGxFrsGKpNLsyRpeftNmgH",
  "key22": "5pnmEjPD5M9Fig5jqsF2LLCcH8PLgDyq2X4zsMjFXBCP4DoT1u5zYHakeF9fZazuksSCHqRgDPPwxxeXaURNwmA1",
  "key23": "45d6jDFgqGNfkuzii577yqy8zzGjxqfUeNMmEQFovj2rVbgBoesiSQ5v8eB9BrHzTCZBhyuwKB7Riq7XPxML3arg",
  "key24": "2NLSzp2ssBYs81KhRyAhe5k7qTGGW3jHvf3a3PvCMaYe2JAqe44n1ykhWHW2b7tz82URn8AuAhP71kLHDH4z452m",
  "key25": "3TPbe2d4vjgyjsjkUpbXHXMkWTRggQMmcGHtySsMtoSjth3CduFLjPLgyzQvfeTDxKLj14WpK8Vp2PGzUj7V82kN",
  "key26": "StTJWt6SK5wVU7Fy8FtXnNhisXeikanbJYesgyh6xizga7M5ASxvXaWd58d7EfdTgPjZ4MjtFnq1E74up3dwH7R",
  "key27": "3Ey8SyvDWYVS3MyTSAcN3psL4RnE65C9CTRb2v3VRT4Fsty5qYNj2toydzjB6REmgHgH8mwRQU3J961aQFd4sbnY",
  "key28": "4mbNbyTfEkFEm4WLWDxGF6eCvGUEcZ9FeCbFiiVXfNkwUrg6REwuP7jeWzq5eimz5ddZkbjyS3qdutjnhXf6bDVy",
  "key29": "4QZtkw3Y4QRLs2gDYnHfEGXUz9keaTxj2iLbsy3ZY8SarqU3p3qcvT5LNXUYhoXK2wuGmyyNfMCruGtgBBCcB8wD",
  "key30": "2xdDnersDdnAgdXT59VyYd2SzUdwt8Zm42AS2jDjcW29Bn9aTtUfR4CNpaKbFYbM4LEy94QsrhG4yzAta6k2cMBM",
  "key31": "4Vt93iBoXQ1rVELAxN9iZVpDX5dXYDgjK6qHfnJejJ7BiLQeo6AjiWCXjQJCDammr2ej7PR5G1CwYkHkY395TgGU",
  "key32": "67Wqjy1zawXuDEezjKKKDr4tP3RFedVkVk2nZLCBMchDGEE5fUgrYBFVsm9acSxBMPxov4VKTNq5jYPSxGR3o43y",
  "key33": "8MkHrJUGzXcr6yWZxi7T6Y2emMna1xGmzMdWEe4WTuUktDddVzEctfYNmJ8rBbw4CFUT8MZdU2DLSbM4CqAj7Li",
  "key34": "3y4Yc8WSjfunVpcKcQpYomwkk6faxrrPyAqYvQQp2Fj7T1Y8YpvJDwBxoscY5L9fmmRPxUhYLC5b5HZyN9JfMeuj",
  "key35": "3ijkxRPHmpNCS1DFHtRmftZNSaQgs3dnDFCBc3avvJGFHyhin6DD1psEoH5Skux9WRbhsoAcP7rJrNrndRFXx131",
  "key36": "3MTsoyWjiJVJakJ3VeSdU3suriE1PaSMXmNqJvR5Ev9EXdPt8EgdrsRLvMMQyGr9CLVigp8NViGXm6oD6ZwwszCx",
  "key37": "2R3reNGxNLT1K75LiMC8PtM9YHUSAnHT9ZuJhdCurFbiMnppPiZ2ibNL7yKJAQi9YuXExS3rnT7aeEhFrbgVnFTV",
  "key38": "y2U9fiLFGWH4ee5ESQ9Gn6RHZaXsPRAP9BC54NhQQngsrquUsQBnNeJZs851mLDTVV88C32LP72ZkSBxBvDh6GL",
  "key39": "M2CdCgheqYRYcMyVPyhhBgzbQ7ZqoV3iQ6YQnHNv1Lw7XcaABFmU5evjaBZ7M8y9UxKn7mEbWa2YFoXX1G13s8n",
  "key40": "54syJmh8RcP3VXTp1M3LXBYDwy8q77nGbWU2uqErKwF9cPMh1WmDiM2Eonc22UVB3nwdYRxG1KExg33cwdmgeGt2",
  "key41": "5m2fC2mfSv75cDVjfbdCjQjniimcPYWdWxXuRK1WTeZDqqtgpMjXux5PpjnzKHwXAxexiiXux6JNS2r2uWbEgnCF",
  "key42": "615ovPeYE4FFqwNF31u4VpzVg5nd3tPoTyxcXUTyVkzUZN3kaHft3TXoSTjpTm27JYD3LsprkY1CMbFdqTFF8RzY",
  "key43": "5iCAdQSTjybF757fcrY3we42Ew9uMbAEqcz8rhzuSR4jgAKekVQ4ca2fRMRKPwRbcGCQsCsXCteZb8LxAtkZGHRP",
  "key44": "215ayhYYgPr7LCNg1YSSxexS1BZZDEWoAy4abADYVLsS3CydGLipBszE9XWjHzdnSgHKYSor2FPaccv4XyfsRiJP",
  "key45": "2EH2s2Z4uHpAvazsKby5XKFrzPpyjhZbF68MxzBemjqxUEb4gj1zFgJdRSUBLURzAPGe7AZKL8ZHEc8pU8VhRcsR"
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

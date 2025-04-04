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
    "4jbKdPGESVDWpQ94bKG8fYepHPKPjHyeBZ1ZZ9FvgP4TDrYDK9xWjj1koCFo5aq5DPm6hfKsmwbAgCEJVcBz43mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUnBnRsxwG9y72zcALtxwEQatgKArsscFxJmZv4HL5FHoibNCx1bGA8ZFNSK6UzzmRtUuizJd8nf9nzAgXEZcDp",
  "key1": "3dtTvgzhC4WEP37dbZscicgWs6dmiWvKUPeaWkJADxdxf4T2rN7HU5SCJo5Fhmo2sHW6sYkvN25fTzNxFcT5yfeR",
  "key2": "5AmnzVeRrBbuPzh3C872N2JqZTfCySskCtzaGYoRp1JqP3s28t1eWDuchRjfdU8sqNcadtJkQnwNxR6hEVYMHN2D",
  "key3": "56nzaKfKcpfQrXgSVo3R27gLnNJosQLUXqUuFfShEGRuiqaMptn5UCAt9xya7BJz8XnJEBmNXgCAur9wgFWYiM1h",
  "key4": "Tzj9eFnAwDi8APXu1GTDG2cAvszTJ4QNMDxb4FpNXMz7L6BaftWpDJG9QQrRJbcPJLjysvS6TeWqVHv2fQSmhwe",
  "key5": "2HbxMreLnzMtPLn6Zhxa17JMG4WAjoahHLR8xasz54H3ysQB9Tq14BYzzV9kBmnVWz9QjeTcTm3pCNmDZf35sMBW",
  "key6": "DTacgcf4XjRsnXYbG4Fqwx4ZM4FXF2EcQqcBJqiNfZXDf2nBbExZLebedSbbjm19rbpTsTnhpMrsZN3YBswmYye",
  "key7": "5DtRZaZpFsoRLQCDHZFXC9QhyVzM5tkSHmTvo21RZw1ieoFpDmZCdmPNbR22kUhcdAwiH6CHrXAYxwZ7hCNXZhj4",
  "key8": "2DYPGnYJHR6UdMrwbmZkNiWXifnwvTYW4QpszT66vYkp8zpive8Bfpx16xWsxHUNMJM69NAkLxxCEyzB98usicdS",
  "key9": "5EHKcQpWXVunhP34W8JEqvMaJowbWVyrEAh4Dcr7GCgTetdtmeFiur5HQ3gtnxXsiN1o9Fgf2T9tCh8ghb5quNfF",
  "key10": "5yC3M1Pip7XiaWP1CtQ1GqDDS8WoRi1D1Swo37JhoXRUxgs89iveUBp1GsnHJkEKx1WNN91htA33rEiAfAKtiWdj",
  "key11": "4VqDjpWB98bxhoBQrw5DzEob6B86yvXrraRdsuWjwZcW5tcaEpA9jSkoYZBupF6g3A2y8zWtk8ynAsVqNSCMc7JK",
  "key12": "Ct1BwtCafhZBrp66NTohPtSv6AFr3FhsEjeTbymayJwwEVt1mVQYLYD9gxsv7NCmhJxpvuBVaPn5PW5HD1U8Ki1",
  "key13": "4KGSEcv2B9jsbat9asyswswEnnxn4nQwZU6ZWuDVAu7BmA8csd6yGVQhuv7E836CpEC9Y1Zo98yKmxHL75gBu9WD",
  "key14": "5BJfn4wECiaUY9kap4L3JWb8fRFXpxPzuBdB6k3NnA37okCwzSetCU4RcBgMEDwdUmYsbhadpTbcSRagpo52w1Rt",
  "key15": "2Y6UhiqqzQ7CMLKtnU1NxcjFAwD9qJmxv9esBVuK1taY3pqun3jEioNQXqA3J2nwzqujjcmEZ8YHnUA4WPrcFBrE",
  "key16": "5sF84HR7o2iEu7Ehr4ktdK7t5vtFVYafp7PAkbPfpFMb1ACd6XJUgKi6poVrpTqsCrSZ23WnigyKa4VQD4Vqz8DF",
  "key17": "2SH4XdB8mvwSvV6B4biYJTnZCGScb5sx42KEJtNfAcqgVCDB2sC6xF3mi568XJZGCM4CuKNVDLAME3mgz3n7MC8D",
  "key18": "4LqAvtZMh1pjMTupEiZsPK4HwFuKB7aKknKxTNZLFMpJveyuUNiAEZ5sQL8e2T651cbvP7yYHdh5opFhBSS6MSUR",
  "key19": "4WGyoPwjaAnxqWcgdQkNGYoR8LrVYQDkcs1hAQYCtggQKU1sVX9dzemT7bKc8ravUxszwokWxLTeNGMkJ6796EJW",
  "key20": "4jGcVtf4zH1UpxTyxP8VKr43M6Ci5237b71311jwJXeDQBS4DD4omSVdW3SnTsWCu1TEdvS9hbEKVjh2R2pkCguT",
  "key21": "5mLKJYit3m99ivg8a7DcWTRDgxdnThVMqwuoecBNJXzuAi2dGG8NV9dnScytLdEUC1veeGWVGF8Nwuz1cGbEdGdb",
  "key22": "MpCffPr24MfZo7ikZsvf8xQwQEYqZdLzPY5rVifJmpJBHSLKik5h1jFT5q1NCQe8QNzc8otNFAAjBU7HY46WpzP",
  "key23": "2XseFrdSL9KvGV334PAP3v35rmXpuSj71K65T8C7YweHFYKtij8SrPeYmdpG2SEV3Re6Zm34XfkSt76mURLPba8M",
  "key24": "PHCBb6MmHYtUvkh33d4djsKFShuUjiFeQcLLtYkBjdGzqZxT46kJ3WNb7gRpVk98vqijsJoQoBMkPu5rhnJfkyW",
  "key25": "3E9ovwPzPNoazXFw6AwF4PuzpjqoutDtzci7rdddmUwodMWNLmEpgCJRYjmGZkvSESdmtf2QXsLtkTN5FwwmFTF9",
  "key26": "3N4yQB7V8S9QjzPyNmt81um73E2kjhog9Lgr2tyM2xTqHfc4mpm4tGq8J79LLY4XgZRomthWycPVjJRDLkKJHfu",
  "key27": "2DRtAoZroAz16t5YFAiLMcXYrboom9vr8d6YqHkvHB4NgEputjgjbgWnBbCoAgJSTc58DJR8r2qsVZ41ESKvRpvY",
  "key28": "KTZCRZZmtd4o9CZEGzoaKPAh2AdCECq5qwjm4ZGnPN4NUZr1YFiCPnyN8zBPknDnWFowPBzjh3m6KeB6uPvHt5z",
  "key29": "4NBzdPqGW1Uf8M8QhwYyfnauurD4eaQQzSrB614Wvn79jtKexamxuzjBZs7BxrfFBD6eCCgetogmzcy21GKDMJkr",
  "key30": "5pTAMNrJrzMTNkszFgDNr28t8ccZyW6ZD5feZQ2TT6FSDoj2THNHEWoBhPLxBn2XNCyYDnHinjQNya1e52RB559c",
  "key31": "4nvcoERWgyMw2zbKvJUyp1TYFv3zpLwqdhAFMbF2ohvCpMSx77k1j5kiQKhitwUBFfujvpFMtoyCEADxf4NJNdWw",
  "key32": "2JRbVsGXTKgX7HCAYm7LB23qNChm7YaWKrHNjBh2tQPmciDewgsowDpzH2qEz7YYeNrTPrK5SSPiePUSaMn4JVGR",
  "key33": "45P8CRheuwr2Hjxw3ymwuDd3oijZPDEGYr92MWyNngw9g1gg91joojnezH9iJUafjY1X8QzWtR55HYS5ypD9zFDD",
  "key34": "4rLChf7RqFauQsZW4v1Xctv2YCP7kFi8c6sQwMWZHEx4ZK1NiPpgCkSoohMja94ovrD6PmybgQvVUsMsVB52e72g",
  "key35": "2cRVyRWMJJTBkSTTFTWUNXanT8vrxDCcqzvA6a2B6VEkPEb2tBPL9hoaEJB7PMoneXAoMs6y7h31dnjzfhLqkJFM",
  "key36": "3XiZcbpiY31pDup8W555RTYPnYVDqhxVutEt9xryJXyzS136PybvhjfDCh1bmEvf6SNMSuJEcupZteNPf1M4KP3V",
  "key37": "PBkCgCe9py3csgvR8DagHCQSXg87N1tLk9Gs7tYihE24QivJi1pRAYTi4TC7XXNhgNJ5wENHkyj5k5yqSGJJuXY",
  "key38": "4g6DD8iWPSzNLoaUECs1WToaesLK2cRrxLviB33zQCH9CoxGxRxzrSXRtG19TA4xdibssHvGr1gAdBduK6JSxVe7",
  "key39": "5MuN3rAAoPebwuSUEQgMzj9zbnit1rDjffy7QKTN8EeCYAJLUDKsXD9dn9WCUMKCt1PkHc2uF69wMp9LmAUoCg69",
  "key40": "3mkFQMo1eLbkpTYHjNiQsgdS6bvJj6MgBWdUnZE5zZRgSqrPa1asBWemsRzu7P4ycd8XeShJhBEqaHgoFdDNhHon",
  "key41": "3cjwZhyQc86C37aXEXk6LnDX3r1cv35PDJVs2FadUFHNd83Kyvq1xznWUzGuDnTPtDFVRDXUQWgXufe8n7kKFBjJ",
  "key42": "RvxzEuzNQGL6s3zMgzcLaPu4YhwchbcLHEFBqX2r7ibrjBHW1QJtsazpQiFmYSd7Y4M9Lr2ExsrVSVeHUQdofTe",
  "key43": "bWHGhV3W6d5h9AVgbv2e3KyrRgc2PmFAtzrwCMKTFoaEkY3zMgxhDAZgMUNUFH9TiJ4urZsQCLyTXEYF3rRqgcZ",
  "key44": "3drwB92C8tbXGgYWNQQY3Z7GQeEDLhDxpYjurfenmsWqrxDz1dA8KKG2zoRi87EhctEFmAp46pnC5GjzLZqhfPdq"
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

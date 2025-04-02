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
    "4qHAHWzCoM7AExzxvWUM624kbwJjMjK69J6HhCPVfN9vc4Voh195uGk5NUjjtLTYdKwtBiE4cfRu7LdzvS5KsHjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3Kvr6rJ6MRgq2gQyZcENjpdkgiVHZJbmif4J8kyCpwxAhMEoJA7eqsyeNVedUgtnT4ctGboPg5JXwKv47bgGGh",
  "key1": "45X8qKcvAYwqsSWRwj7L37574WeoNvbyhx92x6HEp61VUVR6K6SXrJzPQUn8mruNGMbXjyc2uzrCPSuewKrN7bsi",
  "key2": "fHY8dSmX9boxK4ph9JM8cdQUFbPPUzFwCSLwJHvuR7bm5sqfbQNYLmy3NzCLqR1b9dej5H8xxhhtYUoAsV7UpDC",
  "key3": "2UyaNdxSyoVMFAbCSCbaNU6gn9y5yV7TbbcE4nLbJZrx79MQzgtMcy8vq891HvhZHVD7xxg4qVSxp23mwsU6UMng",
  "key4": "35GZLTUXcEA1i5T47i4wtjPtQP1CdMMV3GkQ1hpqTErZrryH5omaGVA9KHoHRHJR7YvqUR1z3qo1xrSkQAo4eav2",
  "key5": "55cJCGghQ8DccrAYx2SvxKaafqbmijjGK6oteaYC3oJXydNeNdzMgpMjFMQPpqYGFr2X76y11ZhzvvVP1Nd7EoDE",
  "key6": "34dgyF42C1zB4jpJ8EzjQ5o6TPVfG1YYpSzkmMVDA18xgkfcpP4gsHs4guaXoW331zYDhTuKVuZASicKbuEYpSdE",
  "key7": "2W6Mu9ygYzesyQdwN1ZXb1Tbh2uQA7Ex6SWuBuZBocyYWRz493MDSnZyaxcSqAkqaw9mEVBxkqfWe5EJNXq15Sg6",
  "key8": "6235zYsLhdFsNQjoUrQXK4ayTWNjXfmYHUUuxiPGzUCeWQj8gTMoGczkCNAfkFJjXDTPJdfV38Qm6PkiHVHCxd7o",
  "key9": "4bdxTKdm9teK73e5c4zskWoC7eij2b2GRQVtB76KXfLBzMpAQNBfeuHms5xi3C7xrbXrBtd1yA3EY8y9mN9366Vd",
  "key10": "4uLbzdhHrWbjBK53getvmfsrTqbexpQc8Jh8bz71dmVRP5mNrBzncyggHsoVUPdyu13v9skK3HvxtaJpqgYFqfqR",
  "key11": "Hu6yt6h8cMRnYzwBUDHN3B9oePuhyMKF4UZPxEzpNaKEPjrmVJNrJBSKmGqLScXi3LqSrZZL4jZYH9e8tPTXKY2",
  "key12": "5pMttXCCyfEhps2yeshV9uk7Kn1Prqcrid56aKi4iprKmECisdiDmeEUN4shcS32rcEUru7mzFy9ixhzK7bHKKLh",
  "key13": "4xgGdxmbbpLjn2NT39wvcYRgYTGR9bZssLiD9UQhM6hrBmDyvm2N5g5VLBDdDmHK7sTJpAPvVhcicLHmCfUDKLMB",
  "key14": "2EAKLvVPRyJijzX2e6xY2YfZE9BnpymCeJ2ay2LU5i9uUh5Gr1rbwYrmWNMtH4jEBzBrkqogo2oDhwjsBoj4LpU2",
  "key15": "2KdErkzoyvf6E2aCamdNEoRMhZjothBnDPS3CuzJVTzRSzxyM8vRWVQ4xBfHwhrYVJFZ3Qy7SogG5BZkaeRDjP3p",
  "key16": "5bb1iLUe7TaFtZM1H6wvUsEDYrdFsyDSgjWqXvaCzwisJm5YvKoHEH7dhmixigJWDu89Lpv7t2WVcx1sqZ9Bzvhi",
  "key17": "1d9wnPQXTGmQW6c9Bycqjw7rSbHyifCPEphdSKBWEXwp1sZEKTJyJTUwTYpueZrkFFqB2cw78Ute5hX9t3rhnME",
  "key18": "4qa76HxF8isi9NXzRviSfWedgZSeV1FbnvwVNhMXAuE4LvSedd5pAGwUesG9DgtNrD1y8Xo4u2gH7jzjzETLCHSe",
  "key19": "2iiStFAyAq6bPAbD9egdfaaERb5EGADYnt7w33RgrHpCchz3FUweFtih2AHCCWQBtyvG9WEKcd6qKbUYuDhcDzkv",
  "key20": "431wQ2Rtsu7WJDCWX8ETonken2Gbe6kHb4cQtwswWxN9dweDJ19cHyhTHEhdsdxfDwgvXMduEepsn8fvxVVKv8UN",
  "key21": "y8LPoWfw5xgR9kJLAMdemCNAPdkWVvzNqZoYguptoeSeHMfttKvdB2L43GzgSfHuBcgr4Dx5LovyNdpDZaqyKkv",
  "key22": "4F9vomViMQKbczd3Tkz14qoe5ag8mBaZnH1mZGaCA4dsx7CSGCV9qEL2ruWUx9KKLAwnQjbwM6ohDH6ijzYnx8Pj",
  "key23": "4fFRkxBmXem6iQziJ8SGmnNUgnjU3bWhPjXPXxwtCqnMb4CCWVk3P3WQnvNdHfYReCt1h7ToRBUPgzBpy6PhcrVv",
  "key24": "5YNJwCqWGeFbKjeYsTVbtfuhfdd8qgHuKhoyWKoPVURqPxLHUVDoZsxjDFRUu1HyuCpyyDygQasYGfCM7MYm6Z6P",
  "key25": "5BmtKifzvjuJmiPtyvbj4b7K9WG4YftNQDL2ex78kj8b4nck3ZjhyMr779i9SgdpQJgvHmi7KE5FBRPLqd7xNvqg",
  "key26": "3RnRhqhSWYzkee7nNAi7GebG15TmSTJtdHPpU5wiPNQ5naD6PUXPwGCNmfitVsHdFTZNdHRxWMyaqfLuW5tsC3F3",
  "key27": "3Adq7cdHucH5JWxGgAYrNfYpFmTNE9ca1zdB9E1eP6jkMsHE9vZiExGCqPXncEGH9X7hKaeY5CyReNmkd7uKBvJj",
  "key28": "4J8VpqYjpm6StHZyy7T4agwZYMSnFqjKqui1tfryb6YK6bYk5yoVk42xoGbWLNC3ZqJMHRpwPRvJKpCH3NskmZ5i",
  "key29": "b8oboC8zjkPRgmYdFs64Gy8mcecyQH21ak1NWeJERMiixDnKn5ZHWpdPxQgaEHmjbLc2a9qLvq3d5NJDpKTsF2M",
  "key30": "4BuQDU5EhuJVwcGYTLumii1DSeLTPX9279gGnnDvMvZn3RehtATtpa44DCADKrxnyczxfqqgicaSSjYFPUqPNmHn",
  "key31": "4yzkxDKWz5ELa9trmNvDbRkYMvgKFx92ur821CNDtpB6mPMXEo9S7FrSE3p4qVbHuLz7WmCb9Yw6bKekctorMGZN",
  "key32": "K64pXhd7kXjNY9K4pBwCpQLkcEAagKpew5KhjtnQTPLnx6j6ChunBHLQ61F5t6QfoJyUbJtmcA6GJq5gJLx3m49",
  "key33": "4gnVz9ze6hsxYJQiK2WawvBXmXnGMkLQ64HsUGfzRHP4nTsTpfg5eEzkCUe6TbRhPrRTcin2YeyX3yTYTzMRChqr",
  "key34": "GG8JLte8YXXa9mmgdXqhRMYyL4WE9Doh2XksopuTRkx58f8DAXkjXzHPL4u7J7KSabdQjcKXD9Ucxo7YBGmpfGW",
  "key35": "4XQ7dNAQfEKMimRo6FDCdAay6bHMQSJVk9ASrrgWtf3y3dKUeue847k7CnEkHLETkfNB9NgfhXyTNi8imoWGeJoQ",
  "key36": "5hVcWh9UPUx6CjdcHBMmJz6mELNcCJTwhL1bFmssr9GJ9AJGFZvidNcKzBwPi4atCTDeQJHwa9KziBpsujHykkdp",
  "key37": "3Wd377qyfN3PfZwj2SrdigDzsQdXfSa26dHYCGLSDc44CvN7W3AR7rzXaVQMSNQVbZZK5zboaUt8RxiJgMT612u5"
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

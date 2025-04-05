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
    "5JHHRHv96mFB2VCyi5ahCxj7BCswCCks5GSc2XiEZKta1p39ZoY1Pd3ik7eEZYtqGg7PYh5ajL98WotuTDrz5YGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JfR6wNDxTyrEU9JBz1tmWCms9CY9y8RM8kXFm5Yd8JL8ocuzaux45wvSfsVAsgK7QNcJWuh4SxNyTEYB9ep2CqQ",
  "key1": "mRmpX4xAHpr9KEi2Y8Puw2XpRnZjkpGTzgRoJwWCnwaX2cT3DU5jZvH5GwZCq4YuG4DHepkCtEFbWVE6BSZPMcM",
  "key2": "4EE9BmSJmE3iwSf9JjVoH5qQqbSEizCkMuRjSocUusBWF9GRnda22zdoCNBsgPjo6onpiPuotLN3ShbMuHQUovsZ",
  "key3": "3EuGw2ERWbDTyTUHLrXMmKgDH5KUSwnxtCrqnBLnTqB9p6522bwzW8oicyed37WXSSAyaVsnXFZvui11zZ2tvZJ",
  "key4": "41TzccbpdNftw4uTi4qr7J6eBJVTmTJqXonVuFmpqyUsppWH1TTbu7RorFLgJpMk6Hym2QcshbSLvFTcnmUPbTR4",
  "key5": "3yBUnk6t4m5w66nqxVQ6sTQtWeV4oHterKA1XSd7ZWe8uHbeUNUu83jQxKqrg42y5n3ZVoDcrS6YhkPmuizRUiQR",
  "key6": "43Kvih7MtbswmJnTyWqBkgg7xQWJPuFytdD9qV1KmGGLSDKrHeQwguJ8HkeJxdmoLqEPZQBFWxVhagwEHVCD2Wgd",
  "key7": "2GGsSJmtJcWFSTZHfKWNgthSNeE5hX1aJHh8WufBdR7NMCWmuXjtzCGEiWpFLyRW3q79yxYELq6ZybV8FxVR5x5U",
  "key8": "vsMnhoVQfbcgetgLxAETDVKmRWKoDW5DmDZXzvFVMgd32mrJsrfZTAWfHGADC9CrSgemmQgnxA92VXvRMYkcjCh",
  "key9": "2rvC9kt13d5PicCh5ceNByx8aSCPtLdYAyTZ6zzsL79ZbWqRUQSiiaVCsdG91ELP9BrjDj5PdE8EhASDrsbsBawu",
  "key10": "3Gpxp3iGmc7MHcKgRh7Bf8HNxdcjp31hsnBjWkgwNram11MBDoD5KzoYFBq64GWXU5jHuFJnxEpixyjWKjxRM2jm",
  "key11": "2sSPYvo2Vvu5WVKVmWyiju7PZXz7ejWHEELYEcV4weG2bNr59MFQT6SnTAr4qujoZ9FJWcqdbKZbg44iPMhpgNhD",
  "key12": "4ptC9qMvhDvLcWnqBXyQBMS7JDrC2URM3zLBqosFdNayLsPkfDY1XvyvXKiw5LQPF8TKsXgoXDj56CKRZWFPHrup",
  "key13": "5t1ZKGve8AeRL1AEHoeVP27xrExZNQ77k75ChhdnADwZwDU5XUTSFBEXDGPAFGZVpcrgE4EUUEzfYx7k8hkm1T2N",
  "key14": "3XzkTaSMJ9dzKALyEVryihxRVf8NeEQ8ff4us61qEw9Y7ZF5jAyCQvBYUcofY2aAUV9vG8ZQKsnwMPTbhHWYkoaq",
  "key15": "2Bwi6zuReX4ZFifb4bZ6iRmEMBdF1UgZJ7xD6uy7G4KqMEqjKDbSqGvwsi7diJhLUiVo8czf5bK2rCfWKRAWF1oX",
  "key16": "5BjcoHpLg2NQqzuEHwW3a4heBjxsexpwVvVrqngkMxE3NVyGfmP7mQfXWvQDg59MGisj8BxxjZkHu1XU1yGSpZRd",
  "key17": "2dLq8XahzDbv94wQdWLcg3euxZfVgs1DZQCzgWp2LxxQ1K3zoctp7jz5118tzEMkhfGpS6htMp9nq4URBJRh7Fm9",
  "key18": "3yh2dXHW6wYMGEbZeAeB2DQqJRzcTaf9UmYw4pfH42ULimbJmEjMgja2so6RZdrSBkALRhyXujGtWBsZtDkxwdCW",
  "key19": "4cwBjtUdusdFggNiZX9NuKYHf8YvB3cRR3S2BjQW2p9GSGndcUccEUXUC4zHBYNQsFgHdfETRK623xCJECC5sn8B",
  "key20": "SGSjiMDNDwKhx9d6xcjpYSGuVXRSZxT2MRJFXX5GfFzPk3zfTJ8LLTF6ZoyQMDSyTFbsc22RDoN1xQ8PLWgtqGL",
  "key21": "2fEaZfdpniT7UXwcqYGJZhgaJr1BVUFKf8mYWSWw4dhMS1h9JMmj1FKFjPa21yRn9TdQCrfoQUW51exSkjnt37As",
  "key22": "3N9coEqoXRfnX3FDxYY8KmkhKiQ5RRfHpZvU2zwW9fBKSgM6JuvBULitVtfCfeHG5gFEAmJhCUGhnGCxw8Sc7tFx",
  "key23": "4vgRwLW4gh1oGhagC4pJirnedaMcqGGtX8DjJPfgs4JTJrY3n26ipe3tqc8qxTEWAMxP3ixCgN6MbcYywSWPgRzu",
  "key24": "5bZ5JjbJ9TXGRSSoxsJgEjpaQkCSoPP9ra2zXKxENGoDUfHeBE2kjbcmEbhL9N8mGs92BCT6pT7g8MxfH6CbRnje",
  "key25": "562hUgrsCthAnMYw8UJ7XMUxz3Z1LKHAcmpqEmF4dEaBErycq9n3qNnzqSXPP2Ffgj7yE81ZPmADozFZ6L9bgEmU",
  "key26": "zktVCJ258QwcAmCs2Ud8ffAaKnirgbrMamqeRoUjQdTrYnrnwFQMqkA8f8fCPge5tm5VPWKr5RsmLqsf4QipTzf",
  "key27": "Rh2KAtRqK6MWTvQGL4rKzRcmPdsnEhs6sDWjLkMrQecSNZwwtG7pBuUWwFoMwEMU5ZzQYNafaQUQZ3ajZEpTdqb",
  "key28": "3b3hhxGW72nsG7opoYwNY5gnZ6R5B5bQMzfF1fqjadEXPpJSLajnSpcH7Smp3zophUqhaRctJeWpV4NY81bkcMbJ",
  "key29": "2oBbxrCqfZHGxQMXfnXSV6ju3pdDfFdYEdj2SBg1PXea387XQyJLV5q46L7NNYS52mYyekRyjj96rtMek2mgAYtW",
  "key30": "3fRDB77XERjPtpnJDDSDymEMTLvSLZTHzmu8tiudmkh91PxMUsrEZnNj2WJqHLPqbMrwWG1aN5AYiRAyHgvRrPwi",
  "key31": "5LvCJs5nrVZhDB5q4saskTDeU97wDLQYLZtmMU6quax6noa8iSsMReEknqj1wxr6wbLk8CWZpKXSrdccEeC5fKUt",
  "key32": "4ZLdy87UqCAqwDuYCBHv2Ym32Wk3AVSxGGoz1LcqaVaof7ECGxsL5LcaLTAPYENY2HTXMA713mU76NN7efMA8vr",
  "key33": "5qPuvnFjzPtnQJVFJrCmqyT8XL6BV9QW1Z9CfiRD5As6zE5awVGZveJbu8j2Zygp4FfdRiGpXpCpA11va4UycVLQ",
  "key34": "4Hf7j2EYW3o3eEtcg6dBUWuNGiU7KZyuPANb1EUHj5RuZq9JXUE4VaRG7TMdExE7eBmtYHFRiEK2oUmDHWwby5DP",
  "key35": "36Z4SgWzcNjrFNh1dzfGmMVexqVqLmDhND5n9uW4TK8qZjceK4mTJZBNzuq3AWZ7BazD1394HRa3VstBVbbixsgy",
  "key36": "3TpTBdXN9mFepFjjWz2mJtucC3w9YCcKQ1QEeBmAbfbuykWBkRqawMcHdi982xFk6Rgj63m8dMDgJSVU1azwc42X",
  "key37": "23AmzT8j8CCCYNv3ZbSwDEoWbEr8p95xyjSBcrU58TJ92CWsLjRbCAS67YSZFNG45x9DZWcyLneFrDS3tCM7kEjP",
  "key38": "hovboXBxptfe3mMW7tqGL5ERJNJaAJC25kTr2zKEmk34JpgTSwKYQToj9ZeHUGA6G6z2C2aP2FmMUXyBkmEUz8a",
  "key39": "2TDQsAj2c9HCG9qh669gq48LmZmhh1RJsz4LcYEPAFUUBaFT26kbyCgmrqBxTknZXK8YDQvChjLznUGkij9VhZRS",
  "key40": "61qgaLvzNzoXivoyCi6ZDTQbwvTjnaX1DTEYKdiHYvmrmQ43Y7ymfo53bBupwGtVvGEtigjVVnNjE7Few4DmtXKZ",
  "key41": "4K6yLS6bo8rR827NVfm2qUA3Ku1RHRSYByUaAhq4duXr8SATgmpFYn12hU83CizMkEg5JYkyhb9TDdcsJfS8CNb3",
  "key42": "4yGdDhjBKpuW26yPZHJyTHEzJPsGHpggUafq3L3ZehPSPzCx1ep4QfP3ghkdEHtR2c26bKfUnBKwjPoTCyHDp8Uh",
  "key43": "22BR6iV7sYh4yGkNtAZCaWWjuRhqSX1DLcKXrGuNG1F2yn4Qy5NGoM2Qi3LN4QkytbrjPCEWggPqr3NQw8TWzkEY",
  "key44": "QzD3p1K8z8PiTfsgc3mwWDcqEpKfwo6b4B2XLk91jHFngs8sgTBJ1mcEMWWrFqmnpXJi1BGgoZtpj5ZV1MDrKkr",
  "key45": "2HtrgAjhaRK2otDG7JHaFbGwTMUuaqUXjLBFwewQQFq3WxCYX35xDZ1VehGR7QJJ6tBBv3c3PvEsiXzpQVrFn5mj",
  "key46": "2Z37REHteRMPeS9C2xCNhHuJPHrNkD5oFDA8dE1Eqzz5A18PjqX4EdLhJz7bwvbg92m5ist8iLojZqeUx1nn4gQ9"
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

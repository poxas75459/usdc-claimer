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
    "61mH1giCB7L3w6vmLWnLr9JZip1HwU7b7j1VvYwp68jK1nMi1qpmdqmRQvDPKoiPptqefPSgaoK2MNN7SQGfb6Rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55i38f5c4e7CTEgJCSCu1oCSjDTGycrqbK6AXfDe8jQ9kCGDQuRyXhUGRAfAcQxL5XyhrQVHcQmZ2htYCY43H82T",
  "key1": "3p74WUmhHWLv85v6oqv9tK5Q9E33EA9o492YbykDrrQX31YT7Qmbm5L5Z3eEshguge7bUWRZtvpdw1Y3th7kPkGZ",
  "key2": "4ppF1GawPKj3xwVNFvpCauVmPyyGpMHamAygvLTB2emEdJK6WKmcNbSthNc5mmHC7wmdEvWk1jTmG8WPJTe5D8YD",
  "key3": "3ab3qGmQXJskiYoHmoct5haYiQkUp574pwvDHnaVR36atksLWByBAoJhd84czmqLyR3NCqjuMmfDicgVJpY51trU",
  "key4": "3L4UJxB4VcAa7gHAL34G8d525EVYurpGZcV4SxHsk8EfqTMVVXuFoKfn9dKRKieW3QTcCCX1UxA7DmBfK1QfSoRc",
  "key5": "53jDC2LKgnnn9ArEuWf1jLUy9NLbQTSADKi2fyHtqf79CThWinYzmNiMy5he2owLPgG72yF2i2P37xefKbfPUWhi",
  "key6": "5WFrr6qwoE9VzWzTvJk6JWHqyyE8AYCRy1RsAxieN1VyUPCq8db8VKiQeggUesjy3EG3JdtXKJr5qWico8QS8Hx5",
  "key7": "3fdYRJxcjErSBEVSzAyqGBfLgfBgGYUFLgSznGpeXEXPbmv7HBZxkM7oGoaKw873xcfyNRfGKuVYtazveaEmDpa4",
  "key8": "2QoCNi3uXXa2r5QctG36oNxb2NVS1ARSyqdZLkzrQ3HxykGeQcqQNk9ZT88i5WuF48MUmxDAuX3Harib4ci5R5YX",
  "key9": "3gbY27qhTejUgwkpY5uGrnZ7DfMZPLDThLAgrDMcUjsyvrGqdUHGSb4WmJuauviAUyJkWKkd12Cevuh8k6uWkAN5",
  "key10": "vFFfifCE6iYFgRioXeJdi4emDBjSEai7pjCEVWk7dCXFsrfr95jyBdSiK2y5r6VQJCtYXwXRwzSLf3s11LKp2WP",
  "key11": "21p96uUhqjR3PnpohoSkaGbzsW3aAzMEMShKD93k1sGbYwR2cPjAPpmhW5PXnXpQRG7RJB4zHDyx4JG99jeXcQx8",
  "key12": "4SJsePj6YaVCGwzcCJ2FK8XtGeFSLgV9efCD4ZUyW1ajSHo2ddxHDJQXzwD2yPTzsK8BwuUuqM39TSzfBhc1FfYi",
  "key13": "PJ2985SzZtrjweavGf6RoG2bjgizeQ4hd6Cp9wuFqdvex9DMctavWxxP9E8tdLdjh6fk9sPdmFa1spxqDovCRkR",
  "key14": "56Jsre8gPCgMucdRkvVmCLaDyBmK1bmMpZkDcCF6sPocvA2Fo8Agf5o4W9KnWFA7RRUuY2tDYX7TqiX4yaSXS3AV",
  "key15": "4xriQXYeALW5eQkEpTeVDQvod1Ut8Nav8gdy8EQ1xJtTWKX9wWuQu5Y9XCvMdYATTTZEo62yNco6U7jWPBKtNXPD",
  "key16": "6t2mBcMeUCgo7ucYD4vSqQRh8h9mjELQ8P4kN6or2rknjxDvk2KQnwzNETYn4cSqDeFjRprkjtX2cuJ7JAavFoS",
  "key17": "xcXYtCrmRkLuuonQK56XadpN2ao9SgCQwcvkYtHpSB4XBQTUZnUmzJnBVCKrgekYZEgPhqTDoEkwUMQNFXsukQj",
  "key18": "rZNoBgvQ5kucR2NNTt1u5ARokdUfzPWNR9KeV6MrKHfXoU2SPatmiMCGNmH8kCrEt5XkcxFxSr5fbNsQYiqMSfa",
  "key19": "2xVTSe7Rb6eHPQAiEBZRBe1RdrZj1SBGF1fZpd3mfPXwbtYXWdXCWqukzVeoWBmm3R3ayjjbQ7hWXk1AxN85x5Hc",
  "key20": "5K771YGqmSpqqzsjpTY4gx4AeQKYD35r6TaPtvV3JTvKaHnYEbutU9vshsWtMhEJBqEyAV2QZqP18kRZArjuTnmY",
  "key21": "2foGGhbnraHc9cJQqZ8A3W1oCVtN8GY9YhwzgcYT7kzT2ASjT6X55XhQ2DDRNRUouvfsa81TsSbawsqSNQzkXxSe",
  "key22": "3UgzVJHUjExeWYmjynhvFkYK2xj5NsuSqxshr9JFAh8DDem6BzPecU2htJvM5ZWEEyafVJzMS1acZ5mvqcrTuRf8",
  "key23": "2496Yy3wLcVe2J1uP3eiqMuVoSBfUn4T3xrwBt2Ybp4saECsFGez7gVDQE9av3hQYEMzQ5JkUxeskGbxHRfTAHHq",
  "key24": "3hdA6dNEkEkWuJpSVSRarhfAbj5V4w9b78prhrm24t4SAFW4q6FEEsX2K7sSBSZDvxdidU73Nvp7kKMoUgNRAqfs",
  "key25": "3Ey3KJVucyjdLTQopRHaipn2LVPxepvD4yjwJMkLTqHciy3QCD3xnqojWqfGq3pF8dfY4KEoejc8nA5nErMnyRJE",
  "key26": "5ZVdnkLq6SFrr51XHYycqJKbo8wpkJhziHEoKeyUBQkPTkGkq4wfRuPfcFHZXBDWrBmoXdx4VWz4U7X7JPrgcS6N",
  "key27": "4D25m7bvcBjF2tsrb9em9pMZTzjSjzq96yBpL5bYqwD1stDncMpN72iD9FwCvafys8NS3dXpDV2pq46NjkazarS4",
  "key28": "4Bi7m5EkcthmUSpPvco3YoxCKeCbTjL6auDb42nHsk2Ysrdo7Q4gWcknXoU1mLWT1V8LMVwJwbAkB1sTVCwTworD",
  "key29": "5JfZewehi1LPeb5ygUk1Y15PGGCcZGM9Gww7mn3i797g59d8ztj4UNBNQ3iPpnHFHLjLYrE43EUBGY1P41Hbibau",
  "key30": "6f5dS39K6yYpSBjqKphq4tcGak6iWhJNhZUrve5eN1BZS4C1Dh4Vfzz49dTA3hnwYnpqy5kkCAMeEc5xMaB4F51",
  "key31": "41irATMeYdqfzFEzwQ6wjeehYqsfM7PNrcLUyyuCFQh4UJAyqXo1ik7BuK4m3o6AYFy8hyLt4jJuATMan5ujSS3E",
  "key32": "2EnWeSFMcExG7NHpsU5HcwA36MWdTLp7WLrLx7gZciV4HeppLazjqwbiJPCBgoMh4UyVPjRVJXxJ5J7FemVjMosJ",
  "key33": "HE8tpXCqMXX32oXtxAaNGcRJwsgi35jY1bTrYrme4S6YNDYPudqrphx1mZM676Wr4bmdS73hkkVk9hMStsT6PCE",
  "key34": "3Zs1AnAGr8pyCN8RshL4Fbcb399E7phBep89una1YUBRjT2m9gEQf4zsENChrie6ECvNMwErT5ypiKZagBZD3D7X",
  "key35": "4ahRriMB1vPc1YFuJExzjfb1NzPPodCsbJgVyyWwdzDMre8iBkbfwC8Pw4TrntFae3gT5NG4EPJR9KVHWHdGfSN5",
  "key36": "3a72yqQJKxKRrzEzwD7DkZmpFnNyqndrHFLufmc9EXQ5QGNpaZcpVtp2cBdZj4Rfh2MxYF3mxZhGM1wtV5i59Mof",
  "key37": "4HGa9DaavcrGbhV4EQBEhE8nEXZGLQCB1RsaKJf54N6WwcbaLKbBC5yzfrQFwdATFviNtyqiccwzvxEFBLpuLmFY",
  "key38": "55q4pKEZn8s7ByE8mWr3DT4tDVGgJyAx6oV9LfQvfcSCtj29acbBsFm9moJQYABs8vQdtyYYmitrwq3JLBCsu2mk",
  "key39": "4YosABB5wVJniex9c3CDs4K9GAGLa2TZpKmoP2xh7KW4C2rwqvAAtn9CCPnhuwhaT7AaT77ZJ4EJ1uxw4YJpvrBQ",
  "key40": "2GD32ux2qCZN1jC1SMcogDsvpucypubXHv154e8fthrPf1LgeAT58iXY7LHPZbSPyAbQqF8nC23RN8V4YfK7BuZn",
  "key41": "Aqhy45AoKnUHncbZsqZpRC3JZJf6bHiHWBURkqwi5BKi8ckNzkFh4Un3uT5Yu1bDfWVM77Ybnqtdy4s3VjTK6pu",
  "key42": "5vkrhdSryaGQ4Aiv1rg8K9hPCk3DMs2j5Tp4sb9bcgCHgbQH9UJSj2e8L16WXkzV4QvcuKH6tE2rVcVD8hQmkfhq",
  "key43": "5iseLzhgcTKyfjiHhPrmsb18AX5DE4AJFZK4rbjANn8HnCN31f9JQDguo4X7gtBdTiSV5PVJQpJtsWs1CaPqXGK7",
  "key44": "3cqixgbSnPoZixBZ2zuAW9y5SmaRiriqRJMiQZrvDGKdiyRtfpnAh4EETg3A7sW85MJ26FhajhhnBmPRCBRGdvUt",
  "key45": "25Uf7FJq16DP2B7s3N61RcpVhPwEsjgjuo5AeYUaBMDKwMFh4uKAZNfknXwm5LmGsNM4Qd2WUF2goHde1e8FqrcN",
  "key46": "62pK1AmbPVEiGfnFP5wChwmWgePua1KdJq8FqtLCyZX51UhBrNiGKHU6ZHuGzqZmULzzS6BR7VxEFrV6MJbVmYgs",
  "key47": "5XAE1p8BbfBiPu6pGTraBA6ugw8VNvkJtZvbsfEK5mCSxsMF2g2Eb46JAG77BS7MBfeFhyEjhWyyRnj5zSq9kkPF",
  "key48": "3ysFCVMZgkT8GbUBVknjJSiz8rJtF91JeMCBdQqzW6HFQkbTNmRtRyTNFtKiQHW2x32vKXAQUhGV7rJfod21dyEi",
  "key49": "5sZGzvSdTtmqCS3T6RF6XBrAaDmSP4x9gsqriQrjFk7U2y4mD3UZrByVji2GtpeozsrzKVBsxoEZxX3hPm7EcYuo"
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

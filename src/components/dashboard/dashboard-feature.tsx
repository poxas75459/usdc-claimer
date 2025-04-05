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
    "5B7YKPyGJnjCqkfCyuVo2yh7cdiRDdERtFuUtocQwaiMeJ7653AHtwUznA3YLLD18MxqFQaASEm8pC4PazxcBWrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3263tisHtjyb3bsB8CnWxcic2sJEF8xGD7x1Lim8R9dKW4Azdee4uRH5oru6r98xPzGTND8daxDBc91M9VyWo1kn",
  "key1": "4En8u9zdC424VEmpFPdfBB4EbE3XsL6CUhkjJ99ULh6rVi2TiL9L3stAwvdwRPaRBo1X9ECSpoJBaj3pk5MnTCaQ",
  "key2": "3iz86KRFKHG4a4q3iJpeBm9vW4JFoQLeqdXRQ6nAWogYDiriAu61yaxZAc49pFRqzVEK5KXcUUiRu8wbxqWXC3mw",
  "key3": "4Xi1iJMxH39TQD7pohBaTN2iGnEpa79dWDvhaSUpvDKiUsZFrVcFN2mSWMMYAmCRZedLyJch7AaNWLAJby88Qj85",
  "key4": "55C8mJRYUNDCjsX1o5sSvkJ22uEwsiUgBEaTrAxzuqKcRnripv2gZHbJbd9RTHJ4GCjs7upYxTdCwzFfJ2j64Cpk",
  "key5": "4h2G2ihvMhsicUdrLd9gYJqtzdGqvA58krGW7nM6828EmBaJY8FZB3iVqPVVskUYFNL3eikDhu5tqRPBqFvVCH6Z",
  "key6": "4yeovBMEbuYMaQCwrx4YZwP3tg6EM8zSZEfqGQQxK3A2EoLkZTb5Nv5rGJvKAybkNWa8nEYodn8ow9FYjD1p1eVY",
  "key7": "3fEbjiiFvvXbEUGs7Hfq7ggPWiA7JevVvma1YC3DgvQyiLi6djGQoDG5xcUxzVftQpmeYDniw8bUZhW5JH8FRfZQ",
  "key8": "2VTnasSnUATWGNv6BqJtMC9jZByXg784uYQeBjnhz7nysuDaBVgdNZXQFyU11yKRJ93os2AYTEaqNKh1etFY2gtq",
  "key9": "ACNrJEk2U6JaLv3izTdHLBnCMTP25is3bzXMhJhoHC6HGjicXHYobfPKs2P7Xs3kM7hkZJuycMYD7A6GMqVoKAx",
  "key10": "GGPkU1qQxYj9nbgpWw4fDVq66rezELcKUiQm5VyA6F1reQ5hwe2WNAxNd25EGA76UzEy5579UoyCotQsPbLYzJk",
  "key11": "62HXukY7pDV57iLHj7S5Wg5Jp7ANEt3A3iTgme5JN2VLNhGptsAs2TprFDWjZGRZDMo1ZpqLUHCNGMcr2f1K7PsG",
  "key12": "51M1aGDjMgVctSuWGhJcqGojGdgpYx9iTePkgZvqh9qUjFHLK9LJQcNDFTVqofi61S1c3o2zNdvBA8FGQrXquwq9",
  "key13": "3dG5e2WApF6MNcZKTD6aQterW79YnuAkdeZZ66Ts8zBe61d9tg6kmhJXWoi8kWQ8P7QM77bpsTwKKZCBBcNiiaaV",
  "key14": "3Ru8oDXBVY16CRs7oPMerBbfSaUAraRwFtc1NUeZR1yi9PKCKtWw4HCGsKudFeMP678pMiELdtLr927BqTRXj26N",
  "key15": "64vZ62MRnuUoWypxmaUEbJBPvE8tCtBgNf7bx2EVhEet2dPunHgWU91P2pf7bM18NKPM33bh8Z62kmemZ2H8oqtr",
  "key16": "5BSFvfnGJhS3z8TPAhpkm89nDGHimmt989i6jAV2iqxViYhAFi9BjFFCEhitkKGveoVxS2JW6uPazf22fUezVVge",
  "key17": "5Bw2sRVqb8gGg1NwEqoUCK1QCQMLfuTYzJoArWbpz2rwoj3JKm2gJ3e6DYX7m4u3u8fk14UukpcrudXe2viDNw6i",
  "key18": "4vLtpViKSfyykG8EPSUQdVQmwZRJSSW9f9dqhRUwzAHJtR7wx2NX5EmdkoEySpDSisyX8KMr2yf7tT8DrXUm8579",
  "key19": "2voVLkZL2xRFwJFgyrDvgDGbxe3qyUenFy4nccet46GRndwQDpmPY68utgjXfHsSWH5K1XKkwDADr9KSzWpARE2z",
  "key20": "3vMxcRZ1P9CKALyBSy9mz5sRLpi5ATPiwy4C8vwAUKvtFyvWm8RWEk4NgrDD7HzhnZ1y8L1BwNgYDfRoq3WH9fRR",
  "key21": "k4cME7dwQRFmqx25MhFVqGjvp86sNjJvMYQtpzLK8MjTKyxERt7hsKkpJkJYh9HaLdNb7ReKgbPcqXQaoQPUdQF",
  "key22": "2CvxYtxx5UW2KwVdkBdxz5vizbNfM1BB1nPefN76bUuRGAscWTp5iqkDQuTYiA1958bTU9JVtvKmxQuq1aTUoFN",
  "key23": "1UEqRy9H5juGnb7UPCFUagQRxo8CaAXc2FwG6apo6RcDzWnNFjEgicycWuEwARzXA2Qvnqig43xfWFkVogjiczw",
  "key24": "2HHw3qpeEB7M7hhfrakw3R4C417EjDQMmn5U4p4vM2jQPJcBgk9MzN47yrr51nCcVVh8cb4P9qWCT3DN66m4PUnX",
  "key25": "3VCxv74bmTJ7WMVL1pNqRosYxJQPNvDAgKhki7ewAJbnfCv69KJLmAszXbBoqp3DnySMEpccPxTouGCwNxFbK3th",
  "key26": "WGGVwUj7pyW2tgfdycj7UGvVMY2wTKRhf5ZGmdnsdLiRcGyqDioso6z8vNopcn6XiASiF48ZrLtN6tdnczxqz7A",
  "key27": "t3kEhRK7k1ed3v9vKVtcCbJ2ypahwhqAbEQUEzUwZitupH5RRaSdfeBt7kTHahLT15jnCp3s7m13EvCs4VCqWCb",
  "key28": "2NyYMcVQcYVUCiV4MZPvLphGpSHypAveNNNajYomyqwrEHcnagzVWB8CriVDPnNYMxzoRhcx6TjLqM72xXrfGfgo",
  "key29": "4rHUy77GNbKAb18yLSnPPZcEiBsUj3gauWARjsre866ejUBbjRJ91riGVNTtZr17ZEtnaPvs4BVQnznhmsBaL2uV",
  "key30": "3DBkjggUn7oMFkHkXxZW41KVgnWEuPMBGvAi93TQXPwgx69s9oPVTaJoGwFvCYWzDa358AJUJ9BQX3TZxeDoP282",
  "key31": "XWbHt5Yz72wcv5wu8VCiwHhnCR74QKm9HyHuUHq4D2NYFpzeCTNceYD7phji8rvf1hsHHQ5e5xRw2VUQLDTKFYy",
  "key32": "wwHgrAPXYeez1VsTm2FhizmmRxmUvdk5uQ28hneUaXX438H72eHyz9emW5tXHhfhCrm1zXi5bxV24YSNaswhUB9",
  "key33": "3J5wV8RrknURVq2EhhqmdkUvJPpBPEk5fT4HjW2DZNd7geeDQUhpHGGbRfyafUVzEd66Azgc9sVgwBnx9CoCkGZb",
  "key34": "5LFEm7veQS7617kHx8L8UdgGthKqpKUvnAJeUHnVx5ZPLjYV5YezbhXLxmqMSHjTrGHAx9iR11Ex57kT53xgjzKA",
  "key35": "3VMmHMLTbXash8Pb2fmQpHP18cyHxpfWqEqqT6dhbGnnugLMLL5rBXtW78GWgsrCeyiBukf952bfNF46W31jWPcN",
  "key36": "4twPpqJdUM3t4d31KfqKvrugNkYS6ePP7KHw9SduntyuvjKvqJdpRevgo2T3Gi1dNwmVQRuEyBvW1Auwkun7FdWR",
  "key37": "3bDqgPHj2D5x5FwZhPvJqGRozc8uGeHoUmc4jnKZg87bzUDAY2wTst1TTrq3V873VDZFQDJ4M68p34WYtXeYcXjz",
  "key38": "gi9pzAUBwZTNBdwubQbENqFuiu9TEH3J8eBbfHeZLnVAUig8WkSGLeAmFoRfJqdptJStnZvaazhJj1MK9xryceA",
  "key39": "2W2zaXQpm5JMyHAo1wG2gVCkonm8RE5S72YTT5rSywXrVQjDeiPFy35JRYvi4ifFSLbjK3oZzp7QR9pL6Er88TnH",
  "key40": "3H3vm1ERQex5bUBk4j2MVWkEHbdhVQWQYbaphT5bcunAonWdTmUJU1XrSVdKdTbsLzLqBbQr5zFEptZb7cJjwc3W",
  "key41": "5kFJrkWoR4bXGXUTwcwceJUA6eaJNy6nUHGSWh1JKASmHDkEpQMKwQZge7Jwosfqn7WZraW87m8rhtSdRaTpAjPV",
  "key42": "4og9mF2Kzm33ez49Ht22TZthCCg5BB9aApaRBazbek7FfPhvkqBRea7H1DcGAEtPKiMn7V17wxw6QU2qRTh5Rgwd",
  "key43": "4qPgKrkWnAY4xHu1QF6jtm2Sf41HCHm1B863XyhUn3QnanJGMZFF6dNW4mBCsVfrD2X34FCwq7Dh2YoBgfUApGkb",
  "key44": "4QXR9hWi4zeMzpB8CZHXEwhnRnG5DKrfofLFRRmmtDJDMsLoA3PxKzfGNbcnTBL8gk8SZ6rCRrkYmi9rPjgHrnca",
  "key45": "3BqfQBg4KMHoYTvQxn5983RpoaZWBnRRSPgi1TCfJZktd7WVyBudA5UjvCKZsaJU5ipjPScMcUcQtUvwR2A1Q5j6",
  "key46": "2LCetfzGzAyxEcmdBdAc2fmGoRKFggRpfSJi8MvmR4FKpWA6cfb3PH22zi1yVy9Xtr2kymU3YNYxG1aTr2Nr6Cwt",
  "key47": "2uFepu7kG9knK8uThZpaNZd9YwtpVZtmT1RAn47RsFxXtb3HyHuQW8Gw1goQyP8wBLjiWbTSJ2GCD1x7qu2MwdeK",
  "key48": "2rbhxfAS2ivvFvHQVEaUngNW4UJ3jhPeEy7aErG8RiisYoYNjGL4fbqzeARt3SbhenYyWHYQCVnXBMHSpCZ132o3"
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

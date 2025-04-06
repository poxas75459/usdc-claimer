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
    "3GECmMS72mkKi2D7gpdaXbwDq9nTQCxrGgfTjZgyfgdr5k5VNiyb6DZSE2GDYiNBYBTM8z1Q6gjHL6JhXYM8onrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5hrQogfyuAWxVY8yqgTc8u5jsCwjVMa3jNtApzhg8G4aRkvbTD7aDsciNuHKiHLH6L436epifCjxYXRvMGUrPV",
  "key1": "4mCACpaoCMGFC2ZUPFcoT58SuWZwh19MCBpSzk4wAAKrfF6zc3zpoHYM6nBxYTwbeJXGE3QhBEgx2xVb6vRSUxgi",
  "key2": "5eZqBu1Da3a9Dfqp4U7FfBoiYDvyYNiZ7jJc5yEihyHmrwasTp5xYdr9W9xvkp2Y6zCqgD6o4Z8RRrkPMJ5VJiBE",
  "key3": "2a2dcUKhvmPsiEnzhAJKdv4PrtNXeab29KTMdGRKdRQgF5yqhdZbniiVKtVg8RZADmS89pNtrvDhimKPzL1XYEm7",
  "key4": "3R42Kmxqh78LTY3nMNfQyXD3rf2cFdVaQENmsobB8w9C52ENofi83WnS7FepPHMGmRZiqJ9G5GzYroRbB7hiMsyp",
  "key5": "33bFJxrddHoKmfu5RQ2pGXh5jEanM2AirpJsXDPGUNKY9J8LPGCNEgjVCWYdKaBX5Ue4uzZopbz98iXpjk6kYz8z",
  "key6": "4WJ3USdibb9xfE9Fo4NtoMzWq5N9GsEY9GnHNA6GVPWPg6QWGkTA5HV1V3mng4ntmKtCgR2nzzXxHwkTqinZaTMy",
  "key7": "aNbsmfiLwMVGsRewDRPAg1cgqcFFdg1jHmgeo3tBernwipSGxUGupVdDvmu5MkkhnGv2xDY7gaKM2jhUTiwx8yh",
  "key8": "GLPpx23dPed8NYD7Xja5A8SaWTv7KKKraajasheZXAkFCFizNgeV4iV89FknLTbHbE6zRHntC2HDh5FFHGtMh8n",
  "key9": "4zh1ZUz4VeeREMhexg4Rc8TPntbBWyJv5MD5TNucrw9FZVD4cdpKg14gz66CiN4scMqDgtEifKQ6HyoCiCovC41B",
  "key10": "4xVsK5w6bTzuhD311qtudJHsMaPExpubhDp46nsTPkrGEvNbby3ab6eMTvkrknAfox2cJ6RcSTrvQC1CB8bbcPie",
  "key11": "2nPEPeoVBxtR72k3fX7jCB46kGfwP8unqrsFFmZp3PkkQhZdu5uw96Jt3M3FfhtcCiEFE3DJEuMxk1YDghshGzBj",
  "key12": "7bn9CfJiKuHQJYX9jpqVR5TeNgu17c8krpFqGZ7pvvoMiFq2YwS2mefYUgMjQ8ebTzMtv7ALwXSeRV6KdLfbzWn",
  "key13": "5VgHBY38ekGNd34iMaFd2aB6EfGK4rfQ4kTfmumS5T4JxYktxy5EJcQYxCCAz68cdZ4Yaq3X7DhfueM6znmzUW2E",
  "key14": "Sf5pzdBUzqfoAqxpEfMzGU6pAwwreKjYNzVRYwTzDy5nDYLmzD41hFLRGkipYSfs5NohMLBQknjLkoKFGHkxNq7",
  "key15": "4MoHHbE7nfVUc6xUmsZXPuLHx4hgad4TdiT3todvC4h9U356kPnf4eZ9AUrcitjCct14ZY9fGDN5CmfP3kd5vyvc",
  "key16": "3UR8CFCxGHKixaR24ZUz8ERaFmqLHsfNWDruf1BfSfXmMZVGzeYVSWMe4YGGcgCKxu4VVkLU6pGXhyhq1dNMNy7g",
  "key17": "3baQvBHtx2aQHzydYZj6315Acx1LrjxxrpykokHAkscxyftkq2S7ibbXBfYkxhMcMVKnaMkWnCwSCzq1FQm6WvY1",
  "key18": "2gEmMuYTiV3XMU2YJdmo4UEErQXA2yz5zQxwWpJwcX8cnEU2p9UDJ5Z4VCTibxC7sCPNxhrdcAVRTajddZpXT8Qi",
  "key19": "3i3w68jUN82PjK4hzWdZJs17iSDSZwV1b9stM5xYaQeArFrz3jC8Rv2KJgozLPKdSzhtAbRXKqPZKCvEdf3gimVt",
  "key20": "3vEmsHbwSwwiBsW16UdGm9YEFU5KhqWhkr1xjLifw4Y4amrooADehbkUd7N6iZmeRz4KWGNtZQ2Lr6eKscmnJKGS",
  "key21": "2uTbJ1gUGVhEVbjSy3FRvHkjF6M9jGVEmqnp9hccLPHduZ981wBGGKG4s7SyihwW4rQ1GBRyEVkj3B3PWkJqVnqU",
  "key22": "2D9EAH9KqdHCGNAYyG6soMr9rNcwzpmDhUgdcYovLB9mVJUjiqKdugXWs9TaSn9ERRGCrid5Fvc43EXvCfqpft2n",
  "key23": "5AjBJiRcAudeMdJApeEzb3KWdQQoCbvFSdUwhDoFFqv9ztkQCMviAf9RA3CXsU54GA4ErkHLhJaEUZQrRyXPnU8y",
  "key24": "n79eiubscaWoBJEse5EYEwG6xp35DcS8rYdbEv6zVNjhj1gwjzGf2tDPCpoVm89izfdhFjye64dDKyybJ8aVNvE",
  "key25": "4bwQ3KWpiojd5B9sgWtmP4w6HrhjgYH2kFsmiJqvMBHncz5CRPy8ym6T7dhQCQunutQdQs6hccKiyGwxXnieJoXi",
  "key26": "2UicWGdWQPVq2dsXENkVwKJHaD63TJW5chqbTxj17PzNmdSshmDoak9xi3Sm8KkdFixLanbj9oHMsYgrr53NWAC4",
  "key27": "2VbKdSt5KUmRCqSWwNAvPHQczTnETCQf1HfaUg66PkLqqLeJyiYzJeNYZugHH8RhZDoaacc7uNtRdE6afCPmsYvQ",
  "key28": "4mQRr9eU5ifvg6PziiZmpYCQHJjg3infa62kRLQRu6BBX6b8iEQTfeuWakk3wjQpK5HrxUE85ncGeqa5N3dmRgwJ",
  "key29": "CgXpZtVA9vTPsiHSnMU4bm7V9c8Tpqx7MnZDijk9YKmm4CmawUNk1dnQSFhheU78UjpVDhNnpsn7mw1boXTYiBu",
  "key30": "5uSXB4bFABEZwPLFytnqhriZQ4zQ4BWTDBT3e3dtGszgTAjBdQ7TkLSUyZQZZB5ccwrPR3UqdLKmtrsq4C6mGFzz",
  "key31": "V7fhkJnqkC8r9abrcJv7ffecr96gy4NiDubGzYv2tSNLC25BJH6q4RFPMdvWzu9R6u3J3rL2o64bKvbauUFbirr",
  "key32": "sLEq4MmDn1fdRyx77gPdXZDdKKhboVgehbKuDCUyQ8s2q8J6yQZQDMgLL3sKRdVfqgdQZB6NaWWdKDiDK2tgGV8",
  "key33": "4ApgaKTLerhK4NFCj47HKENeai5fhp4YtxccEBsPiGHfqKGA5uhZ8y5HZGRoYFczzLnPY7A9begLbXLfa6PxazTD",
  "key34": "LokC9Q6tgZMRfZSWdme4p4npyaGwoeTp7U7xvqRcy3nvXGs42Sc3w7Byh27jhfqY9DnkW5FdnQyHEZokTwhEdfc",
  "key35": "5zo4CYfU2mhvTdbGGKfd3kLi1uBoZBowyniQx6H58pUNc1DJFFaWFNveXxzRUCyFMBszNPur8r7w6XfeHh4N1h8P",
  "key36": "2hE2pZcmSZAzR8PRTywVAhAMJx8TtcMYaZsbHAyMdfDbj8BDFXXEHbtE5zna8rmvHvxcacs8tAKqivaCf6TymQyF",
  "key37": "4uhXF6tcvszgq9pxLZdRn5Mf2vCsF6dtYpBbsXoSCMPSEmFMy22TyvFiKxVnG1pbnwpSRWXSHj9UoJ2ENjSfdaL",
  "key38": "5iKLjkTHx5ELGNRodTUkZBRzddQLvcmJr9amZb2bWPCXhuJ21dFsDJ7FTWuUX8TfPQnua67gDfR5jm1vH8XeZiTj"
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

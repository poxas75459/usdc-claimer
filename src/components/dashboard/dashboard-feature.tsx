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
    "3mN5FHHfASJSa8h92R75rReDVtQQ48rUNPQeAaEkE1Z1tJFvHGtmR1YvUutVgPHPvpjvX18R3Kd5P155xuQKe9sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfFLdCSdzJJUmjgeXAbc8HU8uffFYWoVchT3AwjJvX6X3r7JQqTq7AB7APQWxr94CzbKhxR7tTxfsNddsB6vmKW",
  "key1": "3nS6kv3YE6doxjc74dV6woFEkYsAG9G7c9RWhLFJko5MDzFzA8DV8r6AH6iHkySizARVtdzKpau99JfeaoTXr4cf",
  "key2": "2swBaLKM4jdqEgeYgWJPMXeZhnh86v1QMWBJzub5XAsMdbdLE93PbfuhVZgt1TBiGcsn8jnEsaqyXLzsnSRe4Ye7",
  "key3": "52EbnYcFttxCHgcnAJMTZXZfRbNUVS2bzrfyAm6D7CehD3t7MvDMMN24d8K1DSxSVjKzbD9nB61mKuTwtipNpJyk",
  "key4": "5z22aqEuXH1NcRwS5z29KPnsWYxk3Bit1R8x9yPcJCDdgJ1VhqsBm44Ctzu6uTnfBjLBpWwroYRh7MgEtM6aNHYV",
  "key5": "4WZ1exaW6dyFrDoiLEX15jiAy4bJoAw4aveitHXdGPdoGPKTdaw1r5RHC4FmKgjTc8uAooBKDfUDR3XRQMkafmWA",
  "key6": "2N62qqMSfHhTgcicRPgt5yHZB6Bz4zp4yvcew7GpMrVjcHJ4P3nDRknztTekBXyHhPjvSaapTk1yBXLyGrZx2xj2",
  "key7": "hDtU55Y5FAtaRMTPDmX6PLKay55eJ2U1H6on2519Nf3caYr6cpQMvvwpfDZSU9tn6PitB51RqpuDTtZqpBJdZab",
  "key8": "3t7BUEuq7c9EBZsgQbKG36ENNSuKSDF1Xf4Pq1P4ArVffG7Xi1wALaQCaqN9nxAeSU4xdcgceeuAtKw2eyrSK7nA",
  "key9": "5TvBQU8C49am1YYTBuZo4RpM65LDYtABYehgpGceECDnsNij5Vy1P2AoAetkxsNnoHgj6TiRRechaSk7iCHF33Pt",
  "key10": "4yE6TyXPnYy8wtFPxqfkAkSpe6c8sbzk5jQHRveyKhPCwra4y8TYx8aEH3BruP2mvaXi1LNAjPmiDNYgN7cKBcGw",
  "key11": "3Fxf1ccPgbmZo8U32CpmpKRVGKGL2Qzr2GVEgDnU84uKdkNXQZnjhALfjbK3jREayXkxF8hw6mDJuzYPBWUd5um",
  "key12": "5jsRtzhG4NbvsCYXNZwbSJyHyQFBSnRFZKQYEzAq2WyrhjhN1JeYqqC4xu71MU2oj1DP7hK9Fjv7XESK3uNDYgv9",
  "key13": "eqQL5zfyYbC5DChM8U3qbAYTBz3GKcEgtnzahEnnSaq19cL9uhaUHh2WF9GCxog2hwv957FnNZrbnD1iZ8enHqT",
  "key14": "3Rm5Hv86duxjcNv4en8xCdyjHztgSUWFq243VUFQZtRnKa9oNeRqLGuBvwGFaySrDiAanUmUqyaHcSrLeMNFDDTG",
  "key15": "2VBBrANCfN1mMpSsEHbuvVoMMgeXRW2TeHVvNYrkd2xZeu3K2NpzPAB7eSE5Fkh3V7cfuy3AzDmQ9vuPJCZPPBcx",
  "key16": "5YRUdJyCWsCYpqK5vjQ3zCe7719nwe5uZjRepXbQNRJ2SXd2wYhCtu3j1xbyecTsbBpc9gb7tgoZ8BU8Jp7cDejR",
  "key17": "4pxkCD4g6BQFHvig3Fy3yJGMJLoSUjL5faQQ1M1fpsazLWxTcaTKsxKjCcTz8untJU7vXctdth6DyNJNjGo5JTUd",
  "key18": "5wdBYJybRt5TiGfr4b8jdh8UpUzk58c3QnMHvfmWJYVEJXojgorifuSVXjbyiaqyaRkUenC45UPYfJoTeXbvHfUe",
  "key19": "4prLQUjXkxTrJY5biPNLQ59xvxUkL7HgyMVnk95A4PdaNZLYnJBPopeCxAYCrwAXHWt95AmWk7NCTQEdgPXrEEBE",
  "key20": "47uU7VKdcZ4hF2mBY6Qc8ZhmttfiLdp3T2LxZNC37yN4vymzquh1HbQD7aU6EVodLMnvjE7227JVa2RLR3xMe9F3",
  "key21": "2vsfsFjoaaWAyoBAvStUwDNUZ5QaGNyXj4RgkpGpzgbG2Vp5gvw4jUVDSFqq7uvHDdBtcvhNGirJTGxyYmryAvnq",
  "key22": "4YKxtpfQocMeBPi98V9gLkkP58pyptd2ZjbVq2dSv2p7Q7rHoG8DBxZWxjiWJ2hcHZDW7Pt3S2EGPDjwejkda9ym",
  "key23": "4qQM2Nc2XM4zFp78hfwoTHZ2XDk4k8TmWigX7iFb3u5QTLPLLKEswQEFz9eSfNPNbXGxUiipTJYjeCZjDkuKy7ec",
  "key24": "65uvFiRMouEasnyVWAHmFHVYrrxi4Zg9aHHmRZcwmcQXfS2Bv6Uu1wieGxcwdgnoduyMRaqadQwxX8kBwhYqzdgx",
  "key25": "5zbVDZnN97LBcF4ECebui38BzrS75MTxP9EQUyfpdvJMkELBvjASyS8wK9jmYqk3U6hNsT6j24J96HX6MmoaGxo",
  "key26": "2fHYp8rMndtBzqDeZCjGoqH61C84kdhfKdnXcNg14F46tqKjCqZjjg5mJg9u13UgpFtoKpjdscns1VKAJ2LYHW6K",
  "key27": "wvjmqKF2hhhLQjCxvHcU7xYRrMuoBPkmq9MWmoKKDcGTpjQUGMTjdPK76VfjD6hzUzi5s5D8CTDZGMYshCM7qwa",
  "key28": "HjEmze8qPdSTC3b6avFzErXNFkGtFYXUCUN9vBd7yP4tr9nTziixho1GPYsXnwo912c8MSAENxYrNb9xGstaVGk",
  "key29": "53V7AEGdrho6mHnPEGDJdvHfZByvWkGtdCPjXEA1mRNpUXEyssZDFBCiiMY1FB6QDJw8U37H7PjH3tShBAzDsKUE",
  "key30": "Xwp5kJmqtVRaiu21gM185FsSYsdKvscYK6eYjDWTbrcBVQng7MJw9q833NvxSUDgMviEuNCwnkbXXv7tzYjdJg3",
  "key31": "5Q85gzHavvkF8oaYG6yv6TtfTNwHsCwm8eFw16FjTcVMfc68uVqzwf6HsEugfqsVfz43jD7ZRwwUsMkDkuxF7BsS",
  "key32": "5khta9aCdeXcYZgNqnPoXzH1gbWL98AUMgEcSRypktTvx6iiF11Kthvy6J4JpEkPjFSmqnQHnfDfjcFvE5um32NK",
  "key33": "2xqpaqk4hmU4nnCGWWgr4u2yV3cuyCpvCmQMBJMxKRn4BKeN9QawvagGG1zQ8M9VAKTUXR9exM3EHtNecSUSFNkG",
  "key34": "29VrNHUUaLEPACVkwpiTbcYKMS5bHwXkpbU9cSwjTsLX1aVurX5fXb55jEN1Ly7zeiqau53VkBdutPX7Kv8eHUbA",
  "key35": "5XbM8vpWK3sYosA3WZxkK6b2oHBLhgHKnCH9vfE1MmadMKUbztwB247AuDGqCvU4au1YdsSoQCzE6JvXtSfgpw71",
  "key36": "4KMaV7vAGU52Y2QDi9oSGawpAA1BXpzhnjNyy2bQwaSyfR9AQ3JZEfxhwqYA7xukvLku6bdsuitAgXo8Ty5FiGf",
  "key37": "uGcSnpPHGCsuDkFNPzW2kZittteBkkWwzg6C7vdigNNsMssCMdHPexGNanxC9csc7vYUbottorDh4TXoasduhyC",
  "key38": "28JKKPG5EYyvJiKADqzjKRTh5c1CszPLUzquKhA58rDxU9Bzgu1tJjsFEL9L6ALPPeHJELkBi1GB9gmxraVPb5ig",
  "key39": "61RGdMWWrss9uTdqj9ciku6uHw37KH62SPN8deiqfpR8bxkHMTkm6pDEeJRbHfpi7ruNw2WFjM5kUDQUDdG3YG9M",
  "key40": "XPsuKSzPwtAtZJFbEZjBEvfMwhM3N6JCPQSWfGdXV9KJayL4C861HDKBiSBp823m7HvhvXtmvs1kRYq8T9A856P",
  "key41": "2nEEJbBGTSfixkpdvaBP9snN1oC5krR1zraVg32Y99XNPFW6waTdiAJYEJDdcs1EGHAx1oRNd45pVizgxoEd4zAJ",
  "key42": "B5sGFmPmggwdcz3yq7NzWcCN292TXgUArX8gy9FYmZKYWdziByfK8CjunxgkdHCEV8SeFZo8UBdtcGRHbdTe6jb",
  "key43": "5eSn1KveZC51NpdmjtbkAfed9VDfx96SrQ4nBhjX714uy7kyz3rkqiHjTZni66K8kvxK12qpBmyBptXHfkumppe6",
  "key44": "Kq9d122Rbh9Xw1ojhF7Jwmtmw2s6EVb3i92A7Pxd2eextqhiSatKBQpCUf1zAdcejGv1fkGkmfZroGP5xfyo2wk",
  "key45": "kzwV6XdaxW8XmkwNYNRsQdYV95SWvt594ZapP4uus9eLZmnoPGTD8z8LRUc8thh2ug5BBnhGSqP9RUEvQHmmTP4",
  "key46": "2rAAToGzDZn1xUvA15zsWbgXchuyLw1c7coeNycK6YgYyqMhBhqpAPbJordzjzaxNSzEACdB3zfnhQ4FJjXcPGsd",
  "key47": "U5kLrcGqfL4sEkMQrDpWm3nXqnzFmS6xsp4LHVpBCN13FZCL7YLhpR57EqmjoiCE2UYqztkLVjXQRwoTDGLMPrt",
  "key48": "2atAa3pv1E3jEDQhhZzfPFqSiTLgTruLhug1i5PapKveBn85zSxBC87JsLQUkeV45H53UgyuNFgBv5D99hzUmo4h"
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

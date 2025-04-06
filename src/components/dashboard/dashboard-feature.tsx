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
    "4iXDResuHzLEtqwo2BQgsE6KMqV2fyr7qDmqVYPmxR8yt8i47eT9ysSn693hCB1NQNKYaZT92bCjm9rTxtH9hFWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hfs62uvtRc784HZQTD4K53HfjL79UVL4DsJK2WaJNPVdSoU6baLrczR7hyYQu6ppCGcvv77tB4vazpoX54VTFLy",
  "key1": "2s7EywCmjbmEv9KfnJK4ZLuDB4dB43Zf9Z3czmmVXd6ZrTqCRzUa41B9k8fKZz1pv5BFejQtdVBVs1pwPCQJzHiz",
  "key2": "3CG9CRNbBKTK6RE5r8rmvbYj1WH8cZWC7mDLWX3PLtzQkRunFBS5ycN8EzRWqaKEwJMhv6D2tQGNHVpKgzEEtNfW",
  "key3": "5YudQe2cBxLYvrGjvqtL9TkUshFCfPJN3ugsHMUrr9M2sq3VQtG6JUru8913yDycpnAsytNgxnK9S7vJnGvBQBZu",
  "key4": "61VEdc2sFkaFjjxvFhA14vrN7wmyQAWWEe5LLNbewHLLBxfm6BqF2TANi6AvkSrkbuNsWSXTCy3FfnycNFGcQ5MK",
  "key5": "3MaG3TfHr7HZizvrEpF4rTFyqgv6RjKtKFCHKbjJUBv8sabA1kM6ooNVyueFc9z16UdYkVpyynbtiXko3nHkNv2y",
  "key6": "4LfnFv5ez7hyCNpVFLsYGmYkz9KqHMEkXX5iSaFKDXVZfdpBcHuEu93fSc9FJS2gzaf1VGw2ki4s15kcgFFW6rNZ",
  "key7": "47Se6Q791z6q7RoG4vZG6NiNSAiHYY8GaYEkTbZ2euWUcf7zUtzMA9n4a9H9XY9AodwHUMMh9XScpF2LTx3Cas9W",
  "key8": "2hkW4Qs3ipSrkj2fAtdJAvcGwa6kKZCPTYeEAVR885pEgAjwD3Z1XHXw67E6TSMbeFPvbSDrjUHxEDdV2JjYvtAA",
  "key9": "5z3vuvPxfHtXrRgGCPjvQiuzCixR5gBbCukHaK5AtR9bUQKDGKAc4Wm7HNyZDBdzNS1tejPgu32vCvwZvvgtNqAE",
  "key10": "2PgZHXEnSaz7UgTHoJwYkxjVGQWNe86SUXfEroXrdqahpxohVQmwnXfVisiTU5fDKWrf9xNpf9wDmJvU4ppFQQ7A",
  "key11": "3Zet9orL1kojzHGWtSu3NDuVyqSi9BMuMt3TsEkhoG2zKkCP6GJtfASRmMW1HqK4rHK7d7K3P76CkT2wC8WthBN",
  "key12": "4kg7KzJKtDd9troFfF6GAcaBicCfGp4y21eYG48NuhYpK4hDSb34BXrFVW6N8q9BJjoBMhHDCEfu52xFiGLSCiXw",
  "key13": "B2rQZUWrPnS15Tt1GsEbSqTbmC415Cazy27hJTAXFe6h7xFXJ48yjgGu7WBCxqRN9QkxZLeh5XiBksR6RLixHdv",
  "key14": "AHXBYtK9CKeDYcHoQZZ99uFq6SwoKCkUcocY51cWSQ8CtdaUPfbD6SgJYVBcZhqWLe7LbQxeEo2G2CKosLzMMxu",
  "key15": "3iPqCmoUfny2fQ2toy97Y7Qsx9dUYwYrqMfDw4GayKwoX4fo7vra6TSoJiaab7d2Bj1ExjUnAZS5fkoeeRkJLnKP",
  "key16": "3fjWGUsBwXjrg6jdjE2q3npd8czBcJyNAfeWAhC5gkCuWiDxcM4taffKnkGLHFaQUGUignF6FcApEEYBBxSdRFHq",
  "key17": "c7VZZknqYhWbG5ni7uWDPwoHeXrf1Y8egdYscnc13CpMKKZpGVmppCushd1QRXcSoxwzyKNmw3hh2bSSmDWGz4w",
  "key18": "5B61Rdt4ErguzFUVmWfPvfbNWdgnc11hEdLLVXDvd85cg2eLDqnxiv2eKqhAqGWcmHT1AiSqekgy6FGXXRrrpij",
  "key19": "2Le3PJJazeJpHj6sTGxmc4rNKAhbhj5spy8NyQGEcyoVKqZfXW9K8o7HURpZ4ZbPNeuEpPeTegymEHsxgaeaUpoU",
  "key20": "2jwZ1UWQLbY6AiE28RkprQvhe88qFkikEPP8dw4KVS58f3XVhSdSJ5uYmoweR48YV4N9kTvYqFxtGigDguB5GdMM",
  "key21": "3SXBJWGKfnmDkCaXXQb72dmSduEmRgBkMgocpv61mgyNbxGAazAytcV2tNHNCEnpJvPQZj6SsQNfNgxhSQcpb2Pk",
  "key22": "5GZv7ucQDkYe2pGew4DK8Qqgix8M5P7ZBb5QHYnid5sUnAY4yjYFz4bbQQBgxHD1BWTuBNzPgsqNaUvHNyfYwDH8",
  "key23": "2CCXS7xb85ArBxC4HXH9tMy1NP8Q7MyPUWNXkLaUQ1ndzfXB5NYEqxJEU13xmMZmkc82UXu9LfEHBgWdoGct6JfD",
  "key24": "3JFyiebotC5QrGpYg7Rg3uRMfVueWPhmhyARe17HJYB9oYEkSV17b7r9votGPVeeSseBQrM99Az76hduVRZjddia",
  "key25": "5L1Lwwxm5sXjrJ1fBgcJvRgDbWjKSAMXmwkb1mw7Xi7Btqr97PuQeXUk4Aury8RLz9YNVrnujMDz6bV5sKnvmmdk",
  "key26": "YUErWK4JKvsy7m69NPsch1KyRhw8eCgwYPjyvaWaeby668vXdgXDoGCNGaPoNRH6fQxiqmuFSUPbMCLwsJWhBQj",
  "key27": "3uVSHdZoYDPdbADCfZoBWumLPuLeuAz5HsvLuppqGXAw1MD25NkbE9TUS6oQDF4tYHUckXTf8uCy5rb6VugSet1G",
  "key28": "5QGxFPxSeGB1NPjUYu6EPAvuXUfhqdvdAMhgreqP7FVxh2ikPiYq4kG2wUx6Hs2YgDtq1iyRWTPjanzyF593jNLW",
  "key29": "1AWj5gCrLGWFhaPw12SvorRViLqYoK3hMvgKm9AvgkbGRcEed3pSVSScAUovRb7uL5QPUyvm2JZnsiPkEbBiu35",
  "key30": "BtU496JCQofGJxQ5ESDrapm4gkUx7VbNU9cuSxgJCtxB1M2B8f1KU66j2iq6WsamWeSNf3o7BohchYP92vMvAuz",
  "key31": "3zEx2NPoPs3ZY1JzXmeY4Ux5AeGV3Y52AjWjM3uCqDJV42NVU3CbMjtMrq7cKHtaT5c4Eaq7aoVBRSPPQLTja4hN",
  "key32": "27RTsc4u7RQvhoHj3xLCWjbgkmWkH1Sx1PZKtVsrgkSmu9qCoX67RBEn6NP5jb2LEPD4aNYwEPHoAppP6NtY5cUG",
  "key33": "aYS5b9P3xHzxSFtuDUq3JFDdHpGqAA8zx5rNp5htENDMQfDbNprnkg9hTHgYn6BgFALjEycmiv1ywF4fGdByXgN",
  "key34": "4j8UjJbHNVdWvUS2gEismJ5J5JeQHY7xSVHuWbGprU7wWiPUywAkfpisbim7h2ddXjiD4ZHwYMEJmCPymCkJWdFW",
  "key35": "37YR1jxrRh5oz5T4UT4Q6sDVs7B1SksxWdbU7md9BuQSqR8hacuJh6R1y8wn2EQ3PcYoqtJaSkUwXy4RCgXGjJvs",
  "key36": "5yVs9JJeymEUS1oFdpX4Frh4DvychN68X59pEFppavFGD5C6UVUP8QZYyFVai2CA7XH56FqZqmkBNcLsP84wvy6U",
  "key37": "64o2pQMmpMmK6n7uRHCaW76uUUaSYDFdiUU4LrHmwoBTtERT4HRedPjUQwkBXLawRPuyqnM1hyBiSJ95bPqKY8vP"
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

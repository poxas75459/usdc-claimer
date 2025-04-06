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
    "1fGHsMLCJWtWRkXHnhUSnPs1GXEkmbyKMC8oPRaz6Yt4WMWfRvNVaLAdjrmGZgGMaSgwhsueMAtQmqv3uFh6jEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hB9fYkmNCpoMG23XWYbw5eUkhqqorEHtXMejFCkAPBSbvMgJZmFYEjiwMbk3SrwS72mginkSSTa8ZvVKDisWVDD",
  "key1": "pmkh8vy63QGDBkLjYszsK5yLrt7KzXzcHkicfpD9gqSaXVUVTchGScDDAuzHXBSJktDuSx5L6Uuec7F4zvb3fDy",
  "key2": "4tsGAhQyieDJeAjJSeXa6y8joXYncYGW4Rk4HMz8zD7ypC4uaGgZxxVE8Y3wwVYtqbm7RPtE3ZoyeXsQddYKHsng",
  "key3": "2dqVAwSmT8etKxgHoTViCfrMWy1v6FDpBxQ9rorZE1VrpVrbqFqSHiQedC8v1XGQamGmDoxdZCgHqvyxAquojoqW",
  "key4": "qy4oC99ZDbssbqA8rSaJSrMqE2KQk9kW1KNYzVsBodbgWyfvfAtufiaXEKD26F6R9vsQEHjYcQbEWBNu6nH8D7s",
  "key5": "4ySeVGUqhnpsN2CgKMbex9TGPpEY9SZMkLCLghoJQQgxCTxxnbcN4s5DtrzSMmVCyww6zHYzrSj5jHkk6LjvhixW",
  "key6": "5epVm8rhsMHWprxUcJYHRN2AkX3zEgdyw9aEGnLU1MeRDE75UHswqNxgKGQbLeP5AEAffHLwL5vC8vvZ1JSeB1oM",
  "key7": "2hGZNiC11dygJjLqvbzGJsUnGkrGPSYF6n75MMR7QeRfrQqLHV2JKcRwQgXmHTzvN7xi6GRAWv3mG4AUoeUxCcCY",
  "key8": "3sJKeeLJp9pfgfig1i2tK7YBUYbsh6WSadtbt5zgaCxfN9FBU3SuKD4psGr2VkfvvQo2CtsiNWb3SJE8tPasv1gc",
  "key9": "2xUXjxaUGxbNT7XSbJpsfSAdFEEJNy5wvB1ebr3XHQgqyydhZXUekMBvcsQ3DwMXYf4ibBhrDKYpEb1SC62CvXJx",
  "key10": "4nqjhYrGtCmXi7f9nJAe8qCHev64xTTdfNnjfZ8RRdmmJ6hPPTB1iHTBZpVczH6rqTwfcxNrJTHPc8ePU9XWNzpt",
  "key11": "63NP8tfR3HFJvQDpgqDNuxsqpY2pf5G7Yok5KVv1ZbcCy5CoGTwNHQtMQAcUHqg7CBsPS1iVDfhRBsqzci2pZpiC",
  "key12": "4EmYRdNTP4JAd8XBoq3EJog1uWsrLmE6oMZ6G38fqV3sftUxu3jqAEztS16AcUM6vVocGZnk5nSJrNfq3RfLm4gX",
  "key13": "3Ue4k1D6vq1otpCXCbwYg2NzdzQ6vLMryQZq1g7SgHLBz4dnNuP4HYMGWSBpWQDaHcxvxFqNKZ8u9sRyceVr2nyV",
  "key14": "2HgeUwoZ5sNjwjaE4krDsjf8BkXkhvcVAgongmqCN43x8iyGbSFyX1WfQgBiqWhV8M7R9sdporQ1hrsH13VynchX",
  "key15": "5nHEeNRJ8ysR8py2czzHgWcoXUsHVoM6EKkRAUNKdQ5x7gtXbYiZRepeMHrzL9UPyFZfK6Yn5PndzBxvSbuKDYsf",
  "key16": "2mzFhqpF9oCF7ommRS2KuavES6Frr77NDQDG7ygQzSEunbBaJtC46K6Nqkkjh9qrmnSQ9AAwa1bHHPUGCLAYDiPK",
  "key17": "4mQyBeK85cQni81641KNxuSFrWddJxFptWuPo7ETS43j5V1WB16q5y9yxb4bWcoLtHFBz3CYg78DDhZsGzhV6yhF",
  "key18": "KrkuFTWDU1gSEvWKkffcdtGBoDw4uZmsNQ1XUWHHgsiHPDEc16EEoDTiuRPHGYEAwtJHkgyZWbiWDEmcpeUVVgp",
  "key19": "3Qs2uPvZ2BTCcH2F4zkwsfGbgUiGqEQNTdUJSbdY89meWf89JvccMSBVxT2Ne8ZPGmfpPaePUSHfQJvJT3XAL1G1",
  "key20": "2JV1jD3yJpRyBco85r1Qd4xd5xRVc7YRaS1J8TL7zQwMRRp4f8FNP5Zyn2eB2FMjvp4K3F9NXxxspmhbj3qjDzuL",
  "key21": "4aP2RWpgTytqNzYgjGxGu5g6CLKN6bSTQ4ncyABPLkwHvf9E4dSEM5bLuNssXXoEpPmZMPKtt2SS2bHQ3aFrz6Wq",
  "key22": "61bckF76AHGT2DQFxiWxb4s7JtreUJTVrxZmcwRaXHF1PixWfR5EU88V9KXy7cCqEs71JYmmnMptN2ZEbF1RJWDH",
  "key23": "4RCgq72sRmDbLNCPXEfGvTwMsyCTHEhpxKivZpuj5DyaTKt4D2zLjXhjsU9mhoB8w9Yzv4vEWKCGEnnHNduyovwq",
  "key24": "4RuezJwUpQaG72DnY7geXkmC2U1GaBvmEeEM7SvNsQLm5djaiHVarY2WeRxUik84nwEveu9HzkiH9v63GwAjk3tL",
  "key25": "2KmAgFydoL7LKqaJGLLqwmRbrudMyvy5M4wrYzEnkLn8h4mffZ3iyLe9yx33JTDBTETUDVx8bcPDUFPAtuUQVUwN",
  "key26": "36zDCXTx9VgWUmXVsBVBKZcyrSPnvWNbbd7sf7tU5xmXpLuJ5st7hwCyVrN4XWp6e7v81KgGzzxrn5hPt44w3YDx",
  "key27": "3enA6mhRXG3G4dQbYUJp31Rk4AZ8JHYi2m8Rm2JXwWHUJ5ewAMiSgjn1fbNgQCAwkYViVATUwbSAUK4VxJXZNXAJ",
  "key28": "3BnEejmRAfMLscKVVDsfad7qeLErpbFd6PhqqLpmRMTr9YdQJChKyTVMT6TLHDE4thaNoXer4pRHXMkwe6DPqDow",
  "key29": "5s9UHSGi6XcogfP5Vxpavu91AEeSTZ9vtZ9Z1ehSPemKS1pipB2Mmp6JrDCHSXVzJAnhE8GveSUa2Yomy4K4Mmeh",
  "key30": "2taaaovgQd6BGVFAzEgdCoapKowE7WTWAu2XySr4DPwj2baXvbPtLXsjBFaWFHo5dJw6qMRC2C7WPNSK9TtEA5JE",
  "key31": "344huuPFnfjyYNPS9YWwHizXERzAyiTeZWY4HszPepr1HVQubnCsfci1nAFH6p3jGxME51aJHF4k3toQCEGkmYgV",
  "key32": "4KRKrgFn2uPvWXjkWfGLqvKNw8R6jzFQMU7rzMKswaWr5KcjZCzA2ExCEkN3v6wa6rLbC2hWfkVyHyK5Kfqn5r3e",
  "key33": "5mZWuS7DDMa1FjUcLyvbajW1TLgdFXXvBXptYQRKk7N5K4pxGTtAa1sLqJ4VdAzsjDJvoeNVnpQCSN6K994KhKZC",
  "key34": "3Atx4XFKdqVoNtgZZphZJpqAwPCnxNPSACMD5btJVfXUo5NEW3xpxdDCj6A7hfTkDLqTtgq6oGctRxGWdYeNpejE",
  "key35": "4yJ9PFjFvGgQRNT4Kpe3xJYeJniRzsiLUtg5xPU79dnUYKt6mazfDhow9R3HsfDX9mA1MLE2hoSHRosmmmzipiZb",
  "key36": "3JFM6hoHEXFPsjLA9kZrzfD7nZSAdt97ZsZ4Ka7Xgt4KsXs3pQL7XPSq76JSG8uC9Uzg1VmGPS48SzGDLpGESKxN",
  "key37": "NBeKPe4zaq7LH8yjYNWBD7zC3Z8MCCfV7AAxrvTCY3x1PhwV39opsLaAi1ojbPMS9HR5us2tCMpsXd8PM14Sxiy",
  "key38": "4UX5hcM8qpstpT1PaTDKwyFAYvuXAxsADSkDFQt7TCWRx7SPjj3tpRy7g73kksMkGyoAK3pQFzHiQXrbFhgY1F5e"
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

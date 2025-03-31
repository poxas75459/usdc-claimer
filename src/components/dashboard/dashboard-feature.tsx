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
    "2onw9x4bSRmRMJUeLavuUgenn2tbNa18gXHTfLdCFZxc88WPUdYKiuwWcoScME93kTeimoXgo9v7NDix16hBLieL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTkNdfzVpgtT9st2Ni6xpPrNsckyYbDhyzzSr765oDY5VCcyD4McNVXCkLZgZmE7KR1PEe1GY3UzoUZajkvGcPK",
  "key1": "Dst7QVKCVUDbsQpjV1z7taQRXnvC4AKLAhG9mS5WV1v4swnYy8Pus798TGSwncsmKXaFSNQGSPULcjMbLZ8R2RS",
  "key2": "GJ8aeHmoF56jsjkWvTnVQw6kk6mCBDxth6FA35fmerZjzidGTUt3Rh8CmH1ZHeVdeyZKKtVBQ2ggoySFfr4ho1c",
  "key3": "62Q7JT4BK4ZibVxFZe6u6eLU5CnpjbDGdXru5d6Wo9i72kK9wr4CkkwUUgZASLgtg52RS1rUamFuN1gghNEaxcaj",
  "key4": "59XvPmVXma83sfvbDbuFJpiCqNg3G2USvPuCescbLRhjwkH46RCt1kAkTc6YkRmsRbNNtmy1CcXwZiqg4hsxsguz",
  "key5": "3hx9xuZvpdu8eamMpT3KE2u6r633hUpJhkt82Cs2qgGMuZAP3TktV31SP1hP56UFCNc8amXPERRXKbpJjy3M7wxi",
  "key6": "5bWfPZUG6P9mZg842ynxBq4U8MUDPs1Bv8D6sAJRcG6qG8uyR6wANyEJ8F8DEcQC5dSAAm5T8q27HZSNiTaVAmtU",
  "key7": "2jvLoMmdewELVkeyi6EXR5SWoRj9LFDAYdPkyv6D3x1xZpigy5Qzy192cmmaNYUveEM9JX5sXTLqNTmn7dp7PLzD",
  "key8": "4Ff3hP7c3ikVBDrueg3wpdTqKokueRtKQrnnvDh5KWuoNnigCuKqzdUz1ockDcVedvL3PeF8zU6in2tUxX89Yy7Q",
  "key9": "3hetB1h5h6ZZ3pW1WVqV8cjMHJ2BVRu2VPbJLVqE2VigVjAZdGwNUj9XTJKj4NYx38bTG8R9EXy4nJwq5g4xSYhs",
  "key10": "4Fsaa771qbct1HFS1N4B4PUHAv35WnE93HqgMzvpT12XYepGzH5eyRRS7KvTSLvebSJpS9wZKArghDh6qvXf3kL9",
  "key11": "i6oM7sS7GLeuxbHhtDZ3PHkMt8hF8C8fgPG5DkAGQt9Qi52nakx4gA5tFkXz5c9z63gVYU9LpnkpANkQRcLfvUf",
  "key12": "5HPp9WYa1nH2U6zJKXNWxduZffoMopmWprk7R8ATk2ic71VFCZXgacctrzStSrbeXvXU81YkwVqzfUV6NBB33pgg",
  "key13": "4r9ruAXgnhq8U9xJEZwwuuoXcCrd7kuygwNNHwgsqTWYDbEUwPQSN5yzv7k38KhtgrdsH9vq1nVhsjz5d4xqrEFc",
  "key14": "2iHen8Fg6EU7y5VApD3AnPJD56ryAohXUH8N826SC5Aqedsgijf1B3nvkP6mfQMqfXqd8mhkBGToCvspgG1zpzqf",
  "key15": "3zhCp3QxbViqQ2EnqJ1oPqfTmd51jieXGtEv4VYh8cyHkkkfwKM4ygrjKfyf63DFHA3PqgtxtaTSFrfgV75pbdEk",
  "key16": "65FBVop1vnJK5q3WeEuLV3u7NWznmgagmxS3ibUJAQs5fBy1ZbBCZw6Z81Q9tQpjZ5nfLV5cyYYQNzsUuamrxm3g",
  "key17": "4SDo2QE4JKA434pA8ZHQ2MQGLQmWc3fUkuMSKwq3azhmfBucb6mqvKHvJA5n6NZnB5dM2FmZSfMhgZ4is3ftByWg",
  "key18": "3yc3vicKDJZQPz2owoHmEfv6tdEX6ncGf2gL4URMCE4vJ1Yp1whsKKC4QaMFPeamUg4rqAjaVxPmNZ6QK2ze8ZH6",
  "key19": "3GJQkJY86CQ5pLgUzFfHP3kKuU5PUgqFnmBTALzBW6PMsHwvLQpSJGQmdWMbzKL7TQNAJj4iRG39nqNHxmuTbCYM",
  "key20": "WxBiXXU9SGRYudPKkPyexLSJxEbzbx7sLruTb1f46UWmuEPyXiYAS2BcjG2rbutH5HDkv83sM4e8d35fmu5G5As",
  "key21": "2h7DeyEnSvNN2tB8PfzYzzh6iVvXk3uZf5qy2esxcJDEnWYskvmgYrf7Ecz6hDG1LPbAh24cggB5aN1whDaTRYJC",
  "key22": "9ZeRnzJ99Di2xWCqQ9d8PemoHrxaHaN1ESz5tCVoBfxvz7mXvsTUtcqXacKf5tSxmBe5dn2VXrviMsgwU9fhPAA",
  "key23": "5eDMczJBY6SpVgTSqPcsPFZ58Lhb9Yj7zfnUL4H2eC29umDkR61zu2BuTAWTQetr8ZWkGN6VM3KdZoQfCCPK7PXj",
  "key24": "M1Eut9V4JBn577frpZf5WTKCjbKn2simZ8M7gPbiX9Rsmk4yPdwSuSXDQ4U3pPZ4kVSZUpiqaVZkJ7SqZZ5TrPR",
  "key25": "3QrXo5QrvsSNWGfdswT6FcnZ3L4DZrokD6fU1KQZrVVh5zxw3DWfxDSU23zbDc1kLtBMhuEUXgx7yvPfULE5nT6V",
  "key26": "3Ddx2gJbNYd1JMXzwp23TdrdvYigQJtadPhUt1dCSZSf2iQx7aYTe2aaeFJWvPStvftCHE9pNaphuMsAAZbwzohm",
  "key27": "4aNKVYLhDGpPs7j3svS2NBrWUxyhbhG4kGhsBVpRKKEPNyEYycEZHG7ByhhewNuNwgMmRhwqfeX5YRKRaY2hgTCx",
  "key28": "3oW57cgK7ciX4v3JwynguLibsgekhazy11aXJC6dJxUC5g3qGL8ctYEPkJtDfmDegb2wdG6rgMowRtLryJyhaXJZ",
  "key29": "3kQq6fzSbqDMMVdmuvEQTbfQFDoDnyNzxvuFHKYCfkUPov2Xi8GzdEJyk77YEJximeJXH4vocQFvyQ7eKLRxJSd3",
  "key30": "3YvG6Mv5NKC2PXDdSKiVVZ3FWUDafhvjwZQ6NdsCowmtpsiS569eXJPsNyU5tyZDMPsiKvHcjgHerh9bG3K9zn8d",
  "key31": "1rs5sRfjmG2MhrFbVgYD7hFVwGtnHPoBQNgjQN4aZMa9PKje5HxhYAS2LwEQM9ZPwdWLZWkzJ9hMPp6pWpGJRhy",
  "key32": "3tLcuTtzjcK8QCB8nazc1u6V2EsgFK7gpEwBV9M1rNmzhnFXfmSw6XTde258L6jB3VukqJZ4snWeXUEZiK2P85q7",
  "key33": "mnvjCXKgyMN5KNKHzmsQhqt4R942szSvgLtsehGpBj1W71ez6HuP46qX7tc2TVz8V4Yn236c8Yji9W2T9zV4gnT",
  "key34": "5jk9k5eBrsDtC7iC7wPs9uBDE53aBzzeR3yDeEe67wPxAFJsXX9eqYGab5iGHB5qDTQXjoJXWwBZK8ZJwhuQ8pfU",
  "key35": "2zvqCwdXH8T2CSt5Fdvmn4uz7VLUBVHvTE44WfrW6nP97Kc2CukgQ1DnnN2TDtLqr8xHVuGRR1v2HRaX8wVFpHz2",
  "key36": "4EQmqZxxMjFp2XhCtYM8E5ywjdd5bzst2Vz7qx8e9JZqhUurA59XoTL2meeCQhcrAL89avQDn7DsXGAYtrk2nzKi",
  "key37": "5ibozVPMeziESbqMpwou4KKw8EcvhBEXTu3URJg4VHiCGqExP3A21gczDitUpt4cHakttLV43AB5YCXh94vaLwn3",
  "key38": "4yvbgp1k8nQTWuGT1Ru2EwNVquydWyKjNXXBe2StNVzrZ62Kq5vP1iCKPnfrgKaiZyrWkFU4DBhAV8PVNebfTtNW",
  "key39": "3EJnL4nnuSp2eNvb7ryYURFKBduvnmPaLw4LxcTqNctRbLv5pScv6e4UBTHzkQciTykLU4Z7Q88XfBoadiijnHkV",
  "key40": "2UmwyfJPRMCazehgHLLHrCdawdT2ptcrq9TAKViEK7ywKZZjPEa7SkQdx4RS7xVH8tFjPdEF2489uSAcMCK13UWW",
  "key41": "3b8UzFmNqbUcwsLyYhn9vaRrSVyFwJEw6Va6T9hDxmDPMt1h9uYyTUq6Kxx6wjHnMeMY1oasAXy3CEveeiDetPze",
  "key42": "6383y7fjABuWTZTQWSzktFjGsRxytygDX1rQZwgrWCvQP9Vi5fwJvrHuHtg7fGAuVFhG4REaYiDUSrrVZWuGgVoW"
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

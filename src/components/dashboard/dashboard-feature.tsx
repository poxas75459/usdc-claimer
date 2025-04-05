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
    "4VRfcHvPbYFfizYjdKMGGsA1Aw9mt2Jbic5rAGcdfegz8iDQcALSPZuCQ3Xumyf69r2HPwmKng22X9zxqnGoJyUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVRuqbE8ooNspqUYx85S2vER8sga4BgCvSrUHysvNie6mnGcm7NxYWyhHGTc7idgDpGBEzqMPC9nvoxFpMWWqA7",
  "key1": "3WoJSF1PB2YHN24PWyWx2YgjMAfhAssNYPtw5Ew5KizjrwGnZSgR6Gjf9nm17vJbXhUX9ti4Amso78pkX295PJuB",
  "key2": "2R4jUyQWrCEqagwXzZCMkR1wZvFEHqCrogN1CvacVCd3UpRnSm76eY1cGd1BRnznV78Ednonv8sieTd2HYVVWoSH",
  "key3": "5vMNXZu2griiVtDpVWk5awaGuRGLFFgwjfSxGmEPWSX3BwR8EFyQC1fG4zYQoCp1CVLKARqbWq289a1rjLS28Fc9",
  "key4": "686XzUnvybD3bKop9h33MzhgVwmYyGBgnnsFwsfVfYqW7F3WXDksZtRPnYQAVrSN2mesze9gfz8q4sC7bzSrZd9",
  "key5": "3n8vaD6JjzJjs8K3JADTp8sBZhjF3ZRTHnb2BzFWr15G8X1wjYThX9vbQSmaXnf9VdjPWF2riX8atZh7Sui1kMeo",
  "key6": "26c9GTQ3dYX5dBmqcsZXbTS6Sxq6nckvDK5hWYw5crHEGmsrt1pvqn8g7uyKZapJGG4MnXpaXD7ViFY16wzTzToL",
  "key7": "125Gct7Cc2TjHD7x4HCSsNe6MxmbaX8WTjt3CoWhbHjJbvFtqjAEKDbVZQs1EHgPkrpjMLaXWSK5Cn1sCnZgGKMF",
  "key8": "4Eq2WUwjmSoBc1hdYhWKvYTyk7X8MYRF3eDc1FZyd4rikhbxLnhLtJ3GKhq4YbncdMcUozbjmURKihTKVvNRPZcm",
  "key9": "47NM6GjEr4e5gN9M5yGhybfSk9Hrp2uu2anLsuhXqPZUGVmNe8BwDjCnkSuAgJ64qj7C1momJsZaYybsVRngxYrC",
  "key10": "35wiUeATQE3Tv2bwnD3xFqTQnmph4E3hmjfkLvKWuB5dCnsmCFBErvFsKHxQzWiCCWmVm5UgumK9srE2MqRfXeDP",
  "key11": "hJeGz2shn5H5xG32wwGUuE92AEwHUj5KS7kqMaqkiUrEc5XRePBjPKZ4N173rETJiHAGN9uJNZhHuKZjfLFVQey",
  "key12": "5mw8oSHe27agNhXB1pjRAeFYPRqdEgk9sAgF5Nq5bh5wUnnjozGL1pdZUF73hCxjmoXtZkoQQRmUCiwwr3uFmUGP",
  "key13": "3Rtxf5Gize8sD3sPFNkxqbANaeaGHjkPSdsE52v9AEe1saeRTmhmjWQxkpCifeNbL3UXvpK7nNWqAstcUdL1UWi4",
  "key14": "3GmvrPagt558WEDXMMws8cdUpuK1LZep5ePWdJm1sTeKL2FqPh2HcYyiTqv4xbSn8ya1W1E9DUotTo42zS5td1uo",
  "key15": "jPtns3eVdkXCuNRPRzWRqbmFVCbWYrYQCQcGaBeKg6dFjebGLUCY45dQ7vhnFGsUmhi5LqriztK48cbYs138sK6",
  "key16": "3PMzqToJXWTujzNprTtmJHpAod7QnLDJyz14pkKQXXgBW5hnrVpWYd4W1oARNHk2shrc6gimPEy86NPfkw79XnmP",
  "key17": "tSc2jR1TYqPHcecSqgr38k8S42Cxb4eLcKEKz67fWedh1CmqAFV1es7D2Q5Agr7ykWGErGojpD8xkqiTQgGtkYx",
  "key18": "JxG7rgL85oY6izcbbFekR39Y36JbUifR6wA3GCvyxH9WS4ihggXN7abg9EpuUHbTztMfNHsdAHdyUcQ3zUMSv5h",
  "key19": "5Td1YKGzqzjxAdWvYFZknd2Kr5rJyKYbp2hbyELYmcFJRizisyBhgQmeGBYGpQmXFyu53V3oL3gizYXLfnWdrBot",
  "key20": "5g38dVSUPPhJkAWngLyp2aApKKB1ySEmZx7GgETxdt48BmVuSPT6cqDZioMBVU8tPqSQyADgwKcC7xhA7eYYwUnv",
  "key21": "4Rhk7oYAdDp21Y3ksRjZdL6sqU3VgKB5NMA2PFVgBNKLhHvNBMkmt7dbY5Ris99175ZGGYC6d7WnCqb5E9S7ce89",
  "key22": "2SXrTHSMhxKHFCXKrgM3aa3Pjo12xjQVzFmEGipJcSPqvR2CWkPs3ZjsZ7JLVKH7pFWcgaSExLT2uT2QyndPuQcn",
  "key23": "4QiAYqShMcwEVyZHijwnTc98U5jzR43nGpufbbBm8eDuJjz7M9JqUB4b34XLKHqXRKcHkpaZffBeZb8rNQfZkV45",
  "key24": "2mGjVbfrngkAE9cjFZ2frVRW9amJFW2JnfXnjKfG1Gi5tmfA4VHFSqSWKhSuZHusGbVTt7sHqCC1BFoLEHaaL8qj",
  "key25": "2iQwiY97JByTxUpNuTmXNPX2sYDtCtYM8nEzx9Dcn8K6cj51VSbcT9cv9xks2AZwmMuiSaC1MJF2tjZu3GuQjN4y",
  "key26": "5ovggM586eANgqPopvVwPczEmq8W9CLnL3EYXkHNWZi5TVn6xgJqRx2Y7ddX3rz87xyqQKtiVWiKwHGdpapu7oPF",
  "key27": "62saSkPZVrr9sxDpSeSSBNqx6osAj2Sg9wmv9oYQB2wqUZgkv2P7Vwu1UDmpG6DVeJWCvneuRSy2o9iSCwoPFEmh",
  "key28": "2LMDURChNNtwL3ryYQBtuCYU9wnaRTGVifXPovJVRcFFW3DpdPLnCfLSqieuksbfN6dSj3TxxBuap48y6d4fUbzQ",
  "key29": "WPWLDKxttKSupo62HLZLBPvBWXaChH4HgZCXrrYpumvNftUKw66fhAnRGDy6YYXbMYsCgKGXnYBzVwG7XABAnQY",
  "key30": "DwkxtdrHPejDv9eVthuMLpeVENQQMc73LWTwicCoqHcKn9gp6KSp3MdpoDt2nAuHJL5NMgnbrPtrAR9uBX8BkMq",
  "key31": "3b3438EwDQNfYRUZYm38yMFHFPA9ybyCkVRDXTFuufzt3hUYMfCnKrE7NXa4KdMGP3a5udXbNEnSmRTTfvGFxuXd",
  "key32": "29Gh8FPBg5gkew9WjgMUKBQKrBevfGrHCyqpuH8oMVmY7CGXQENpeKi2UmRoTtNgyfAJi7hiBebgNZ5PTqkdU6Wi",
  "key33": "5yx118HbRKyB5QeHmThdLrpe3yidvY6zcbsRcN1wCbJE8zhuyyBwRRrrzfeN2yKJRmcRjTVp5W7ShTyXZWr2qpgz",
  "key34": "4gKkqFgdxC9UDerM9sr34DfzwbzF2JiQow4Tdia4rz3WiAvknNGk7mb3ncZ92pnK3Tw4ZuPCQkbFz4RH2vq8Bszc",
  "key35": "PphjG9rKt3YgnaKRRRQCJACFaPNo7tTzizBA9Xjeg2zNQEkNdWbcwVE9uDcLLXmPJwRDxwhRyCTCbnbwdEodh75",
  "key36": "2XRWCcmM22B3gkEkWeVuRZLopj4fops6pf7HAFY8vFhuCbpJb11p2hGeFRdXTq9KbmqQYAGQ4gy2RTdrbJXCPQM5",
  "key37": "5UAfhnhCeSnbo68wRZJHKWBmodAa9veW2c8tCTZSWgwUSj2vwwz4fgV3ijNAU9x6T38K9HGXRg36kp2Rva1ffzoP",
  "key38": "2cvtXoqTKpt5RsWgHnxmV5LEdq3PbEjREEEEGD85dXWzPWLi3wTMJUwmy8dzDe4EpTrAQVxR94unAKNHDfxKR9Ua",
  "key39": "42H6fiCkJ2tanTXnTjWopnR68EUNo63PwskDoU277GtYmueGkcskd3X7wmZdwxskAAb98Vvat6mzmM531BamEMjz",
  "key40": "2DGCx9BEUdAtzkjU5ePTw9pskAXJS4t5WFrYtavns7yXWLapW9FU4LTbCbFGZiKKQGnizDsDVwfrXfFq7TU5MCMi",
  "key41": "5cwzY8oM1hjdF4fChCPSV9CxGmDKRm9Jkf86m6MpCJVwTGAkdNeWR8aSuMgY3NSS7ymUWs5mH6UdhkC8LPFrfXSb",
  "key42": "iXe1MHnW1uktt8Axn6y6fkFZGVjGmJ3gR6sZC5xvrebMxeoUeCBZkT8cmHoddJEMPeHnrxJgRm8Z6QoNztErpfY",
  "key43": "5afYCF78F4nzdX2qn5AvL5mHrJKCKTc2NjswS3HkXoN3jHBFa3GxwE7znhQKEFUyLp4VzAQMMFqHRncZe1CsBPLm"
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

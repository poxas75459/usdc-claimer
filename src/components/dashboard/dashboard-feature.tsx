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
    "aVGkXmpoXb2wD1itxTNpf9UfU1qMugM9dqPDZHjnMR1LJSdbXSghqaW5rYn6nyWYqsdM3d8yQ95VsJx1PmU7ax8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44KucMFYeLx2XXp6LWz4hyjZKFxQGYiG5kRNkyZJdUgGnkD4HCn7X7zz5b8iuJK8a7JhsxRXcaJXqaKrt2dZzLkR",
  "key1": "5Sb3ss7zdYTa8siYBAhdBPwBW21mq3ZDdfuJwy1kE36RmMiV2s6o7bVtQz62wqRj5ZSdLwFqxBHr1HK8SV3P7NgV",
  "key2": "4qo7EZAAWmkymppMGft5XEGWv5w1Y1L9Dn3Yv9f89Ha2UbTT4oAm5jM8sxZF8NxbC8bRFYzjt3agJjpRWPpYK6vR",
  "key3": "4qGhTfKb18vH4M4jTxq7NJAPWSWei5Qec7Nn9AKoruCLyHa5VVor6S7LWHsVWT97wmM6HRYvsvX4YUyXs85SMAYe",
  "key4": "2ymfyNAUBDG3Lu7SeP7JKnAWaZmAV5hcAuQ6tt3NqTjqGoAkx8ZXukyeLCHenJxUswYbubSfhdSFnpibYtABUoCp",
  "key5": "4cc88hGefrxWn6AqjTsidwedyWRhKFxtHFvpnMsd2tKfGbgRQDMC49zKqepQrc83UEqBoxxFCD86JHH8MUTQ5inB",
  "key6": "2x5EdfzjCmFmYUeJE6Sbcb37J2afKLP3uWgdDUsM5SmBckyeBDZmXBQe8VLxrQEGN9zqoXiLhb2MagU14moHcxvE",
  "key7": "3QR4Tr6CKDE6SfW2UwTz2Y7G6kML8hRfLfur311rHbCBGM1wo9NFgnPMaLDh64y7PSMEKNc9EjKPT8nSME7zuxGP",
  "key8": "3UzYFh7X9vMNmgvpY9cgP6C7fT8qtMxu9M1bz7maata1V4MVziSoyTzrkAVVjnE8czNySYBN7SCWPpRdN5t78sL1",
  "key9": "5SEjCrU6eJAAdd5TpQtpUdigWt6uiccraCVA1hGfvDcJCQGajvXayz6RFuoP8Z48mLuptTnsjdqrMAm2vAYYiSDn",
  "key10": "5uAr2gBq4cjc1BbiiCKHKoigav2JDAaLGiL2YECnGnNmr8mczEg1JCk4PwgHJEzsLhfCaJt8ki2ucDMRysyqFAUB",
  "key11": "5JYx1MYsgtt52n83AYohqB26UniypfTgkvTCUMCLhzcimKJX9rdbaoTjgFDrC9ptE1Quc3n1oDAd4KYLTZpcvgE3",
  "key12": "3xRLsmgCiRTdVe6pxYkQm6D4UkXPK8hVHoDdQNTxxunhQ36Cy8phT8JuwSP5VkXxL1DZWux7ZT1Khgm12eVUfent",
  "key13": "3PRg1httC3zSmYkAo2itQabZHC9kTeb3xhN5a69Dqy7GFpkAMXaRRCqyPGoeocLKKDXSQ5rG8ADjaH4t66htMaKa",
  "key14": "aieGsC6SnrTv52VYjn8rHX6pNoBtiDuVb7BTkyJTw55ntcfaqiUENHo6Gom77MWS723fZ5o2DWXStvU1Lwa9XHq",
  "key15": "5wGGcgy2zocrScrJeg46DVidySgeGLCkSy1UpyJoKc4RQme24JZCERmFHd4jc5DEdtdSxZRKaxqAehV1R5qBhfSE",
  "key16": "2gV4Ae83jZ37M3j4woWp6upcF5yQ2bMV44BhAUr6qQsmWSXzgt1E4iP5CKCY1GrkEsuiaueU2uX8YRBgucdyirz6",
  "key17": "sKQ1LQMMND1XVxvCjarcpUYzrpc3DYakjmcSwfkXSxhv6LqHVqRR2VTvt4Hf3TV5Rs3LtrBP3wAo2khyn9LPwG8",
  "key18": "3vojMs76yY4HxbwqQCPK6rP4KWHPGr4sbDpxecjF7CayeJbr6YhwgLwyc6ikpUX4QFSrxof4b6ftG1W37ox89r4w",
  "key19": "5usPTfEndGAY77DGhoG4yEnfo7o3B3m6q8Du993vXJMK6hkgYJzNppTLkcSD8PinLswzPf9oNczQ9VDxXWzoFaj6",
  "key20": "4z1SxysoTDxcuTAgJY5wnZ5t8BSYrPbQyE19yTsvHoW5TBJRLihPu1CrcgAFkT5Ehs7kmzabB5Q6mRRJS4gjej7Y",
  "key21": "4U19hzMEZVY9Hix3y8mNKBTzuKwrGHBQ91cTvG96m2JFhqZDTrFJ8nQKP6L2dhww4PsdBcQh5eE3r24UNaUx7r8r",
  "key22": "2yBKQQiLpVxaMPv6YYxG8MjBCTzVFMpCVhhYarhweMc3ZSn7dXuNpvUrkZJ6YhWEVHivYrgAZGvnrPeJomSWtXDQ",
  "key23": "3H1qbDAC5CAkNj5VG2hm6yFURA6bbzxGbgLosPwuG3FwrD6iMFEScm1DxAwGtNMiJURgNyoYUNpGmyKrzUs8XFLs",
  "key24": "2CsH3kgPgYYeZBDkBwbTFkuEcQ47MgkmaztyH5VBdH25CnobScRFD5XKERBaEHEoMSYNEh1XHcBQnd4GoX9SEcae",
  "key25": "2XvRY77sSnLBrfDUhwJ2wSNRrhUhNYf63TJ5KfyhxM8wmAy2Nwt8W2xvoXjoZf1kTRTaLwQDsmpsGZnHaBGYUbKm",
  "key26": "z6g3N367BRngXi5Z9SVMWACCtLwXdbo8QpSahNzhAqLiPjBCPMpfXAgU3rkusx42947TuFTVGwvfvXmF3gf3tcK",
  "key27": "5GiucoTD5fWNkT85KesGK9KZURNuoeb12GZXxWzXTqJxFeZgtXczEDqwWrggp162zWWfmr5iZPcsBCRXgcHqGHwX",
  "key28": "4EUtLNVFLXyF7zw9WfbPH22jGBQrJm56ew1vg5eFE8AYUwkymZbx6MciR5GtDQao1bDGLqW7ZzFaKAS12tG38LxM",
  "key29": "2LRW9Jy9VVpurx8YgkCT5w9kJhAv6AZDHUjGYZM1yQNP1WAh6r9HnpJDrYqmRGJ1c7tKQ31TMunw4QjEx6BmJCuA",
  "key30": "HXpE5k9WiAr8achqkL22FngnrRp5fSshrqRc4sVtZnq21XiqLYTfbUr3gikWVQfNCudoeaecUxt2GB1LbXzwZnh",
  "key31": "djCuRREzg1QZyCxi9cdYqLfWhFG5dtAZ1TwWAS2E4PNbj2Aqwis9cVc7uFmtNvMdQUoyzjsiuktuqDCgbZmm6gX",
  "key32": "4v5G7r4crTPuZqnKnyDagnTB6zMrkwy8SdZNsoWV2f3kX7Gy7NoHJ9KfMnhaywxj98yhUaC1ZYNbzYs7zoqM9DfH",
  "key33": "31TGUDiiUnGuP4kyDm4sRxNvUpA2ox1xT78m4FhKRRqoFPcs1kdx8w6PUaH52Dkpfje6cvYRDJrNHPR6rLUDAEV2",
  "key34": "5KPp78kgBbYBg5HpgYeuUYNeTtTpoAhKJ6fBzzXts13A2J6vLbQzPeQYdJeVGrbqMv5c65dUscRZQ4QKTXMFgqu5",
  "key35": "3hJSrBSExRCFzKD6eEMp1tDVh5JWeZAeDFxoRbWAkHAseLgTMyQYqpMgK62oQTrHcDH5z28iPEey2oWYna3XEVuM",
  "key36": "4XxpQkRVc1qGm2dqwhwQ6APFoYw5S3SLhwKQRmpdqsD4JEBKPzQqjLHMsiX19whVB2ySNZC1FwwyytTVHN1hoSKs",
  "key37": "3GygXigeJjxpak558GKjXRheKvzG2utVyxzMKzrucBWyyQEGdeHDNVhVu7T2PzoHFNzNEcwafwE9LKHSVy5aEJGJ",
  "key38": "32ySTn6eRymTbGAjVB1N6Ym4x8DT7Djpjo8B14mStSV2GhRuNJBNMKseBsApYnkL8jiLaq7mJfa9RW9mspLcGjHw",
  "key39": "3aHPUhqAf7U7pAbp7jNnvEHNPtJFoQDCk9RSBdyMcK4tSSQK7ZiAWLpWnE8iUUBYtrcPeauDKo9Qw9dAFSq4Jkz",
  "key40": "veFMfgp4e3xh5fV8bHoocq9ngRNGJQHaxKRZVhKpS92aQYRgdqsfYRKz4zCkiB6iRW48e36MZMGn5TiZznZpkr6",
  "key41": "4CxVd4N7tgAV4PPGREJydmYRzzvRwY9NG3P18z7y89jw7kECRANBovWiR3mXpzo9jGGYDdStMMh9BmvD21qu1hFJ",
  "key42": "3JkkAvq1BDfQTyHK6ysZ5ahPSHfyYqGsoekhFhAw82NQ7Dq8Q3MK7ttNW83c8fiUiRgp3h6NFYG8wR7Gao4yzvH8",
  "key43": "KU9pNJ1gZb6k5LkU8Rk3vVmK7L8QdwrQuYp4aWt4NAcmsaCBjUxZABa3J9EMjzPYSWWapV2A2HAgDkpVNPV8tkk",
  "key44": "43zdsESFQTJia7WQgqg8YDEyQPHH5GKXP3nZURTnjFtXBWny2D76vZCpAzuA3LtqPqapw8aQSe5KMFm5b8g1oSJg",
  "key45": "4mjbE6k4CVwDMxdrwS5RLnSTmZEaSEwZ7outdLRKx65pJENuNfRfdJcmvSPc7rw7seRDLp91dvHsAb1Q1XXpv2Hd",
  "key46": "shiaAbMj8rTiJMqMV1wTVPFMucKTkAPVHAUcTKhWFtG5zPRuQTVKJk11PbBRUDdNoZzy9PJxZm3bFzwubN8WVt3",
  "key47": "2RV73W3hKtcrZjz7Ey11PQdeAUUZtSF7iSzX23yCwvhG4HVCVzVmfJEjLPMo7ycvRU8dCV4oPieDmqkAyWVx6eYR",
  "key48": "3DiNfCFPqPz9mBJP9BTDPdpX6euospACa6dntrfSF3dutFdhJ8JZtmsEQchZd1bsS2QpueJwKvkigjP8SZZn9hEi"
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

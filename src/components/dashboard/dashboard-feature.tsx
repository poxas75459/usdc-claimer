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
    "5ppBJYzvEcv8gs448zk294i1L4pLqXwrxeyoa1q6QvmCdkDwzSVEoM7kPNG9Rowubjw1QQRg5fMLbJ2HwqYMSJzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4msuLMj7MGHq7Zo1hELsS8VXRT9Z87REf6ife42NnTq6rQzdYCc54SMDWpP8cFcX56z5NspEPGTNVAwby3g2SUiV",
  "key1": "3AFgQjYZWSDnRL7Pp4Ut2YVhtNmYQS6tCsmcBY718Jy5TJGjnAMTHmVYADZL6oMnNoJs4fgPgy2kMxELKZhNoZHf",
  "key2": "2oHR9Ha6guXSVppwwJRy99MBaUyzd9uY2zoHZmCVYszcLufVPQLxZvbodXz9v756UzkYxtCSqmsSfz8KWAy4Lqm7",
  "key3": "5fnZeXwDV55XXfad3gDPicYwA54WZa2UpraYSbnMM4cJKw2C84NApTLc2Akbt7bL549veDtXDYivrWHKoeUhrih6",
  "key4": "4aH7GyVhyoT2hvxRsZVtUxhHgKBVHjxvt1tLXeG9aNx5xHeaQRDHPh8BSieNyWZPkyFfTxXfeNdXG8xGNrHbR6Ec",
  "key5": "4e9si2YHK9ZurtW2GKr2Fee8UDRikUzEXsUpD1Jo12fqmrZE5yHzUCgAAW5X3iMQupUx6UVdQfiYeZ8QWNjsBSzf",
  "key6": "3WTbTNZntsQSoshRx6VTaVWVwgdvk5ygEfJoyojdgrkKyx7ugHGkBsuDPHNZyc6YsLZd1t9MGWSHHi1QKzkHVjqG",
  "key7": "3bRvArthFk3DUgpsEFrczDbxkznoRDjR1FrMrdKn2T7oj2qnM7QckW5tP5tWQJcvPHwkxZ8AUENY5VuJAAxXtxsK",
  "key8": "4A5G9gH7WKh7N9hi6dxJXJhVCHTHAaoDGqWUmfUWb6ZUbhDNoutbytxe3274HGgiPMdSLW4Z8CrHLVh4UwqyuAEb",
  "key9": "2TPACzuQb2Cp6VVLTdZ9qstt9dfVbPWprrmP1cwvoGck7Npfi3DGWAJnqtRfz2U11F4SAcEwUE8Y1ZJwF6swrzyw",
  "key10": "3Ly7PGaSbAwqsNfLe8Geruo2HUecquYg9R4GKTYw84LPCRPTEvcVktEoJiNZo243rbvLYdZgQdkJvnkeHTuKDMhu",
  "key11": "LnuEYZFk1Er4YCqKR9RrYUZQvMNxrBp925m4KGB1wcnAQyP38D2GFrLd1J3KJy9EfBxuMGT5pH5dJ37mA3dePLZ",
  "key12": "4uwTUsJLFBD6i5KiFphx3r23bZNRoqhnYzndrHE6HMb6mopZ1nLeqsRxoG3tpuJMtRPqZiHgyM5jG5eiJGddAyEn",
  "key13": "4yH4EU4Hkt3KLHjw9uxEkuj8JeTGgukTGHb2thURE8BDyLNUmzrs8ESiUL8eLBi34eEiQTqHGJgqvdddaJiMtnaf",
  "key14": "eYndQdi6QXYQLY4qGypWGtuGfqdeZxGs2PvKuWFV3UFXYTLBwue9jxeDZBBRtvEvduNeZsoi6sUsUWjDd76xUhV",
  "key15": "39me2MfK1kSU2urhMqV6Y5JSGSFKuCqeqDtPPUDCD7rVf3WRGr2Q4rArc7be2zC57gVneCv8bpbAgTUKcYUmV6tz",
  "key16": "23Tpvh1XYKP8oQesBP5kasgSvcppt6GtnNwbtrVNtF1okVPNbPyavNtBSTFXwmPjTr6ndcSt2bLDeuynt3AD7uau",
  "key17": "3a3VRGSf8huM4T7Ti7Bjy3MTPshqsjeapBzPPka6a2jQb8mirkgHDj7r19i7SAJCsFbMDNhQZijggKZCwVAJgbxc",
  "key18": "4r3HjkXofc6WMNXJ6Zboo3pqrkVAZFYMHSTuiSvU9HJZojeQqzPzjkcR2865VBBPjUiKtnSSJ3J8Vm7tS7pu8Pmc",
  "key19": "29sYkz7AvMXLB3P2WXFESnN3vUcKZ3GFXpxBasr15GDAJK7c1YgnrW14mpcEzq1Qs845L1JDpQCTqAH3gPNCLCVE",
  "key20": "2YLiMYqLfqaxjBsLbYjXGfasSe6SakwzFkKHw5F7CBKYnz9h2KCuvpb4Ti8Co5VKE3Gy4VzfPekXNs5RcJsjhAgP",
  "key21": "4hc37T5aARAtdmPCR5zpSsdkEy67sgz3K6VkC1Wo3tj6zLjx3UuTC8xUmXakYyY6FUDs5Jcb2dQihVvqWyqWB2Zg",
  "key22": "4GyBySFMPFRJzQFyoCNLL9d359c3YuKGJ7eY9hG8jEGiJcRRLex4zin3zHvBFVK9Uv81UWiusoYNvdYQC2ZSx6Fm",
  "key23": "4x8RfnkQN4xJEj7vtJWN6FQPMHdLpZ19434o9ffNUsCCswWXCkirGhHCbyyAtXiwEAU9mxYsb4NmAoUUKbys8ZrV",
  "key24": "4Puym4SUT5g7PpR7EuyDhGzhznLxJoviRLMhzSyX9k5fxahwefKQNU94DXXPLzrD6TcWhga6u7BJ7xBstKvMpwer",
  "key25": "3LQzs8N48ZY4xa9FGo8ZxPJYFxpwZ13LSA7MqvTMgn4EjKjFWct5pLesi2WyohhsmrCRiZrQziVqpoP1GsEmMs8W",
  "key26": "41RWuLEAMUhSQkDWnMT8GWLV3SZ9YPPEagNtHUFzZKwZh7FSyD6T5Ni31inXb38yPwgb94HirVzbKp53NmY68uKa",
  "key27": "5wKeMLz9VZwYknfLun6pgauCSvxSuTyYKztpU9H8je1WCnfGhH8fVQxeeqYpYVxCHq2cKr3m9xrxGcwrvura41Po",
  "key28": "dY1Bn2CtgrVXXjjUmH7GUhCTH1HvUHKADYBnY79iowXYw5uoo7coRXomXuKV8Xq4R1iG16SxmaKmUZHA2UKCJEM",
  "key29": "3kzRxzUGWCGGKbK3HdpzHUehMobhKuZiqeD8d6LE6eM1QRVUmkwM1ai2nPLGg8ytLRQ4a31Laa87Pnu2UpZiFuR1",
  "key30": "XFT2qqPUyLXLHqv5m64w3wQy1bFRpzLrXJ2MuGmrj5gwdvw481hzo9dZThW5WZ5a353MSYDfm79L3SU9XY8hV7x",
  "key31": "65k2Xdus9k3uvVG8fPRbMmPMScCWrSBay3bEFJKsoTFpVRXgBw5RKr7DXXgRFwrtkLo1ZNdorULpCqC3PoWv8M3S",
  "key32": "2rFV2SidK9XjgdNpGKR8gBTmbs2is48XxJNLuKiFYKhfS1DQx2NvCpXnf8qx5HZXXEx2EFcG7pHSSYU88aVRrVnU",
  "key33": "51fRE3EYVhJTHNxisYtYa71nV2TAb8hYNymL967TVmpWeKmus1g1bZqwbr6CHmfz8nRDQBKFYy6D68LQJJrhKo3G",
  "key34": "kznJqmyTSBRGctNb5jvbudxJjZh5VBNtvucFMnw7PLR91xP638ccyUJgYUiqGPGhcLGagkXG7uBSNWu63Qz6d2a",
  "key35": "434URxUCTmAgb52dsH64sbsQxQJZ1gPeHCSsDBDfJqEJW4u9oruqsUw7v7F61GjEMprQsGzR4uiDeCAe1L36NcYr",
  "key36": "5QyFkxmx35jSQRDq6VMshvXyngWgSNVjWy15t1JdHB4B41paeTMtpMAWheWJnu1xYpLeFhwr8SbXqyEr6VfvEpX3"
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

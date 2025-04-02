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
    "3Cv4jCcLg4qABXPV5oVcXdugfWzr5wh17xn9j35sX9r7imWWFwWVGonWVpJWDAHEH3bXQ8xM8JWmgR7sFm2b19wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X2hb3Eq9Kvhj3BV1nXY7F3uAZyx4A4as2L334PJomBx6BUJ9KoRtijhk7UrDJ3XL3jvCHQN2w2jNyHXthb4hBWp",
  "key1": "3HyNDqRqjJze4CokfJ2c3nHfjZL8YufhfTz5ioZ1vr9T91aVeXqWabN9teJe3oQtS92x6Wgpdim2J3HiyM2BmkGY",
  "key2": "4dGTDAymjertF49NwbaxhuxeHQxy6KXdGBSL2QyEBu9jxeyWaJaZE15S3HbbFjkkeCYhxFtTpXjhEFSnDtQ8d5iu",
  "key3": "3pgi2UpE3TYTqxdXdnQjQayqjUUM47zUdb2F72WDAJBNpTA89Kg6s1nV7sKpkEjSLiw8Wh2GNpbtmf89ELb6vyAp",
  "key4": "29j9EMPk5EToiR1iyb6Pu4ii6Xu9qhDeFrSqxGSyvdNqGtZ9wETdBU9j2ue6j14V4BRcMho3gz536TogNK2sBpeP",
  "key5": "3t8sjsjYXPiSUAX6mukKnk9sSg3BJusYjp3Ax8oGTxCtbC3r2qZSgEiyxMzVLyCbxQQSfZ8voz7eUadq97houMzm",
  "key6": "rcAibBvwL1A6a3RGQ5PK1ffmSzU2TGAHYMEMTDbZ8ZbBuWE6aWWgZ4MAbg7228KomLqkwCvzYcmzuqDyGscuPLY",
  "key7": "3mcq9SdhvTLY5tEf7sWNa6eQ7iMgn5e1sapy6nKmdjoEJnN1hX15gNs7Cq2DgmCAP9Z7KfuuX8cZ9NkR88PjJoGJ",
  "key8": "xmdhAuhA7Xs8Zn2WfeRDU6oFRSABfAExxhZd5bnLyV3viYsBkhEayfUiMxpo2nmi8jPjxYkdUbbiz9bFRCPsQuh",
  "key9": "UhKXtbmBmSvFY5Fih6WkVvthaykxFiqs1GTTC8JwMUdn74RCr7CNJziELFT3TC6RFATs8kNcb911pgPeqq1us2S",
  "key10": "4gG5JLQP7VzC2tEb6f52u6oYnRJJRwuvVwSHnZXDeXmZp6gScmT7yeDkudJ6quiuRX3aL3GhfzuZ7vXhJBaAXb8Y",
  "key11": "4bk7Nt5619bvC3xXt2yxSu8WHrp8h3A9SQBV7tgzUp23JwkB49Z3DJY7EPib5MMgf3NLeUpexb2grSp7L8H7f1LR",
  "key12": "BKi7sxyndJ79GuCjj6LPgF9keifdDUckAYzV6mjem9eP6NwCKg33vDD2Zgt5GgYcstCXmhtr9ZBwXAiRKaCT8N2",
  "key13": "3gqvfGQUHqwoAZu8J2hfUxuw3R24TMKz49bvuo8AZqEQ7nyVLSivLxnycr3bZfX9yXBiWtvmcj2AgcdWpqTnSBLB",
  "key14": "3x2vjJpDCVA3D3uTTQ5zLhq4fqSehuueVqVyVoLCQWQT9zqhrcTL779wSxGx2AfjXrzJ6t7aMn3NWWEyaR77Gfo1",
  "key15": "XJ1EUhZwbtbzYR6hjDVQWMsVhb4TSVjrjSpop94Y1fP32hZgj8cjvH6Q2BqtMyKk3rtsjaU6eDJUFtP5VZPGzCY",
  "key16": "sMbsK6xg5rV7Y97HfSYHehGnosnTPMLRVKZttJ7bjh5uE7ahTn1UnHJf5iCNMPKWD867Zf6tjfCqahPVbM7Zr3S",
  "key17": "ueLPY3937iPF2Ek4WqU87kEKLHuzHXZGVRfY3zRTNNafPJdTC7TEX6KLV7QfUC9DvmsrBpH2hmeWPFqVB4xz4r5",
  "key18": "dEUTG4NCaPzMagsM7tw6BT34a5ZVd1H2d7rLt4uE7YTqrMKd3R4QHdicdVaVs4F964FytifvP6tzXYfd37GEwkL",
  "key19": "4wjCSzUwxz44s598nXpmTogDNpJVFxnMgSKkjWeLKUQj6aYstZMxG6io7AhXJYoJKSK9v8UHLMU55WSLn8fD7LDP",
  "key20": "2qxGeuMoDMBM52gyb8WBrMkXbNfrcb4DPKDpMW5VLm25qcHro6Yd5cn4bEnaguGtheK1x2sNjPy5JbvDTzU7ZqRH",
  "key21": "m4DDE3MF5odKsAyurLh5tDti5BstzwTAXoWG7kzPUiRJQP1JYXtyibEpoZrygrB7M3XHurEHL3paw5hSB2MPThm",
  "key22": "537mA2cwdvbTTgMg7Vz1DRXCmatjeRoKjxsKJnNNfUiJyrbAL7uZtr1YLQtxRypzwQRx1mKyMrxVMMPrMnuCeiEZ",
  "key23": "23hw5RihpNBkhpx5TUfSqD2VDR79uv13ny6Ew4WwLmzsQfwD3WnVuFMhxZTsDH1NqxKLk22vuSmtN3X3K2qqko2m",
  "key24": "3V5ChxEK7aLWQ386St6JMbFHaBLsnoBqaB1V2t4UUWLJpaTxc9jfpkBHZcdc7TQohW5CJDFo7Y7ToQYJmZvUPAw2",
  "key25": "2CZcWQqaRaJQEhpyHiZizRiqg45cfoKcgQN9b9qDnHVTPumcywfAXSatLH5HVsTUbekP36QtqSEMkdJyKfFD6cet",
  "key26": "4BSYzYGV5cyiDgQJcpmv87uz4SYfCSnuWqzS7C8LDCfZ9SRLKtk79DmVH2Vw9vvTrLvDDr4WoZijrv2vifjQg9Fg",
  "key27": "5CG1mjxR7qzzDJt3JqV5mRxt1SFVJAHcxk45cHejUsRANm5phkCfHDT4GgnFcaDsUXnHADLrzdiDm2mdAiTeXXFq",
  "key28": "5Zhtpu7hsWuHwQAvv2gFxPF6dMHncts6THSUEhEyLvTZHbNUtNooj64BeDyWK133uUzwAgZ4eeRrCUJp1KmGSpDh",
  "key29": "51xnytgogy8rq5BrSFN1WRamPL81cCW7qJusxHaTnfbNWEpt3KjfsPCeuE5eYDF7zPt8QJH6i3stfXvb3P4QBHCU",
  "key30": "5ibkcGsWTbKXz6sJy5EUDCu1hLBbCLyUtemMk4kG49mX6uoXMxwm2D7EuLb5zL3cKLuu97JJ4eUzUTsEA7GszvmG",
  "key31": "21k9M6id4J5Te9muDG746LyfsYJ47dfyVXqFNyNx3YAfZ9yarxxpw1q7iNuhASePna8yxp8MNubnCBT3BcvoW46Z",
  "key32": "61ekYngLK3i8Jd2FRVNXTzpCLc2xDa3k4UfGaWqGXBLb9PsUtUJZjuQ4qHeeRn9n8uJ7HX2rfF4N34pxZSxnL1Fq",
  "key33": "26VeZD45657XHPRr9xVHS8fXeZVMzMWM8gv9z9GzV3e6kyWkLWWegLcYKh54uEHo5nZyJ3eVdVNHQLNvggtq8reu",
  "key34": "xveMH4BtRm1ZMfmuoX24y8c7RhCKhbPtTEX3k4fU9dACYL32io9Ttx2KRMucVdwuvJfkkvhDPLy1QQnNumFuP2y",
  "key35": "5WX4dkeQgPWrmvoXuUak4r8gqHGB9DFrdLfn7b25rEss6KbjWumSSsMyJvGDwSHqXDCyLJTHpRfKSvghx9Qz8h7k"
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

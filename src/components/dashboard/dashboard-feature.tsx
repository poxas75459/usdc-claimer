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
    "2c9eHmm4dX8BA2oYUZBE33EmgQLXErRgaejgKDGE9dPEUu2v5Cv3EwZ27x1guirG5eVDjLF6QkNHqXjZ5qCi2MUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGnEnuofT79Z8jhrrWGNuaCBGSas7AXSmUPgd8k7g9s3eRpheMLpmq3UxhYFrmiMKkcNLh2dRUxWdzBoteHxgL6",
  "key1": "5dpHJFc8sUuR3JV2Kn14rhuFQRDaPVUeSuwuqYRXCTKruUqhnHJ2hNqfKDdHqNvqdSqNAqfavDZiK2YDEYF3Humt",
  "key2": "5mZ39E1zE8daPokEh9LrnDm2LQfCuM1xb7jwV9vDdbP2kt25t5kmAEj5adUq6ps8xoPE1hmGrE3zFah3avjzVH2j",
  "key3": "KEWK6X1TdiSLktvRPMK43mrZpxHHzAzpA3X52WeP1oRSprnkerizcckFg2r9swiYxZcpHt7QT7sRWHVEiFPndFk",
  "key4": "66HJDntCGsyfhj6DCLGs1KNw3gTbsdSdsgMxeRQa6cPxu29MNi6h7pRUdZFkzpyy5qtUc2aGZkYYYXcSRrDUvhKb",
  "key5": "38V5kHnM1Eyw6qHV5tCmyRsCNhZTpbWw61je6sww3RtP6ff2AM6tZ4ApmjQEa8jSACzW8eqrvDnwFFDyBABNBbw6",
  "key6": "2Xpoz1oyHkt8VpVN2ShMXd7Z7yG4kepyzKjP9AGjtFTcEP6dsSGPGpq4LifCvfbGMcjFpNxGiZK4G6FeabMfAMCF",
  "key7": "hESxwx11oyXoR7RFYynxucgmgz4jzjjdUNs4robSHxGGqPC54tpxRUCLe1TUrQgZTeDzeiMPybkgUU1hriS8ajC",
  "key8": "5441kBWJTpxRkPoy31Zm2npzi98jUrx5Fi3ALHdm7fK4xYTQyGcaQxQRYzwgGtcRzp9rAxGDgLTVGrpVVZqksSgC",
  "key9": "4pVuFSjudG6Sa6dCTDxwPQswLhy6qavGq9smWBaQqpC5XHxArLSqhbZrexBAwRq5siS2haw8WCJrRHBA1Cwrf5Hz",
  "key10": "5KFXKqpmJisawaR2FXQWGzJm487yw6qC6RNmnNRVNZHFEcJkYxRZLYbLDGSkpiZFY6mGS1XJEWjGBzoryri97Sto",
  "key11": "2gat6N5WcRMpseu6qxbWkm72jt8JSdhraf2ezHiypmepoSUCR8W4cQSMAGDVX5BfDwAuqLCNRoFZeJADiRa5zRHF",
  "key12": "2nHE6NUTqjHAqcNJYrze3Qh3hfmpUp28jrDZijwmMoHnkEzX2zqndBiKXM2dZturZVswUGfKRDEeiezdWz4As6iP",
  "key13": "5dTv29Mk2edv1b2ModcJNVP5D6DE1L999oTcRTaJyKXMs5HBq7LqSkGH46YSW3i6QBwJDVxSUGz4uabHxqvdQ98K",
  "key14": "Ast3b3P9NJ9FMVeDcAJGp9Njr2A26VfXSzJkoZEH8qNz556UiSEstNPKiptVARz8SJ44M2QBCRUCx1vmcsoNqxC",
  "key15": "4sjTx5cRXZNQwCjo4enZm6iGqz2BB6AprKquqjrSetFuT3mJHRg9qtsoegzHCaubbcfPj39yU9rvtTadM8veFnFq",
  "key16": "5E5iJmFrupHzXEqKxiHJVLrdRGiRQrQXpRzuFPuptXarJ2P4HLaA3CK9HFFydNGYmSNHEfNTK1TWzABALvzeG45Z",
  "key17": "5WXLwzuR9NhnPzThmwtQZsreZohB8FsWCJFP3GMWfaxZbUtSabeYGGMuNEhhp1gkysrjJu73RvDxBp6K78h74NqV",
  "key18": "64QvbEVjh2pV2dPN1g76QbusCyB4iBnyoYmU59cPhTVevcSYMWanjFNDNEy4w1oXKPQUwaEZ7jFKuAY16qjfLgjD",
  "key19": "2AKYuncDC2wr8tZg5rPWbPiUqjNr29Gs3eSUPL8TcfiumRNh5iSoKJpeVVDLwioS5EbL8B88HmLXLu7314HvLYS4",
  "key20": "64juHXUSHbNtDcrVEnCd4GS1WSVpMWvjVjaykZZtqpRctEnD3c3VkU85Qnndcy4FnKZaeLvtbwWkyXAoqdpxLgs2",
  "key21": "5cZz74vPrCAKYdXrJ2XV7sAtew16xdNbLQ3ZMzkERnmnVW5TYme7mRMAn8MxJrpobAXWTCVeNBNXDQq5wkau9SfS",
  "key22": "4uMVSQ9iVtkXXmHCKuLjDSSbz8xyvHir3jdUq4gyCzQtvEue9WtVRMkQz1AaNRo4kDw3ncXcnudbT7mdv7By6Kez",
  "key23": "3KDQUcFxmzaKfo4ngTWSTaFFnVM81Z5AdeDiLYhuopgE7cNJZWAUK2ujMFTvxcaeRVkp4ycYTwygGBeRKMeVb1MK",
  "key24": "D7QjTnsMPhKzcvzTxDiPoMW4vTXMa39QuUTxYHnbtjtCvzx67hSc3Pto2yB6VK4ENyD2tMQM5rMiMWjAadJup6i",
  "key25": "3bAD4RQc5eds3HTaunkbG39NbTiwLCwiqZEnAtVK5s8pMF8xoFDAfn8EeRPdDwEHe59HpxfkJnj88bWMdZXuaHpa",
  "key26": "5qjL4zsFCVa4wgFvHzJY4fgBPyscm7Kbw6fbEbhuzzk22FWnSQBC1bv9v7izAWMYVDLqCGpLh8SrfN5PCQsjYAqa",
  "key27": "3gRM67F2Dw8ipeHmkcM2kEHDJh5BGosrRUmgy7Fvcmcv1CUwJskFXc1eCadm3iZo472QjG9zzjdVrqJCTDkfaKkK",
  "key28": "385XMXJJmq6HCiNGFWdkGS8G4FNVDYQGfjcbyWqij254UHkYTBeDPSswiA6d8HeXpUBUemBWpkQW4e9YFhwuAiPv",
  "key29": "4jiSyyTbkcWyyHvWkxwiE7zua6EuW9juwiW2HqBUFatzoWU6AQgBjQBPVcLAQAHyffWEE3aqCT1txDDnnyNP9KnS",
  "key30": "2c6panXkrDA9szjquXc8zspnER1Q9YtjrAvcdogApRhtrGzDA1zztNDgePxX8B7Yx2J4xXT48BZXg6rvxGs2CVUY",
  "key31": "4Xh7Ug4H7bEX3BbXcEznhwgKtzkVwWktjdGNBUPra4sPW6kXeAvRDS1rWp5CmEKVugR3YidDVRWKSMvQBKpWoUtA",
  "key32": "2R1AjiEgjmuR9zeAjhWpcnwUbW1axW9vvcxbUuqQFVNnn7dYZXHfU7G5QX3NcHJn3icxknCw4QccEhUg2wveW4VY",
  "key33": "5FX7AoHpG7hyjPMmTpBu2XyQ1DpBtDfzTAVmom5U9uhUDjLNkezncmfU3d7yHLAm6eMdaHW1Y8zadEQMoSgHnWQ7",
  "key34": "2PCixsTabKgEaAFAJ7RT23acG88ttNZzRv7FBjzGMnbobVUssgAVthHNgrefw5xKWsm2Q8PrjLw9ks9tkdS6cuVH",
  "key35": "3tVCeKUajgs9DsbZg57k3W5ft5eynK8wdVNwVpNhjD9GhpDgpGMffxwSFCzTekKLS7j9kg3P198o6zUK9a7E67A6"
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

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
    "suqznMXiWeRSnfxjtLxHnKY4CPdgmE9p2LS4iWGRWmiexGHcajNAsB85Djw22KBpNo6Vq54UdwY5iFy6VtZSnUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DActKcjwQxiBwVuu7sgjGAYH4X693ozE75zyzXswnke1vLRYzrpX4p54cvdiRmGjMVU8FqquZmVVPKxUew1hiSr",
  "key1": "5Z4WpmaU9FmieVuYMvupydLYEcgqPr2c9ZoaH1GJRjwwYUuzAXHrDSTD41FJAdXLEkhrAbayQwqG9dxiJaRGwEmf",
  "key2": "5mHSBk8EBveTPWJUjZCbf6zRB9ka8SFWfNveaofH1fRq2HMD45Bqx4JMqRGV5JT9MiWyupJrVFjbxCrr9PwwrDCE",
  "key3": "2gXwZoZtf3CJYKD2Cxw8ipBaknmMpXdiByT3RZuRN5mV361NDjbKW4e3p3zF69daviTB125TjhAeXFiAK9mAvEGC",
  "key4": "4xtf8AF5CRFik4aUUKaM8et121jc7UZgfZsV4dXcaCnEkConZBL5voQQxAL3Cez9E6zzhRjAgQCvdUkzhQarTsLJ",
  "key5": "5pRWTQhSLmRxrxwFqsvZQ3vmj7ZEiwEEDuNdgmKR5kW2AVME8MtWzi9z7XSJur4Q2jY5NFW6eaZ5fHLiqT6T1ier",
  "key6": "4nvK78FgrQXnNFmyMfQSAttVpzsCQSLWms4YE9Uyr6roSVBwdRSXTqpcpeGkVFEHhKYXPPehRgFrWzshZpeVmpRS",
  "key7": "5FbHvwe1rJCky9CrvbbDw1RYtFzinFXZMWkbwghefW76e7zuyJVWU7BTiHF4F5FVRsXc63X9cXmaYDM3u2RmEDmA",
  "key8": "54rQ4HjfiCqEQjarbKFYcJh2nF3CyTSNbqsod6rTpbHPCMnGqqQvHv6EFAnbnaQFRahstYCzaobhEdkfAmFbjCRT",
  "key9": "4XJEZsyMYTidPPLzmqkh3RbTr5zJwcLm5D1gXBWiqYGkSe3NooGHpMM4s2ixrfJKv86AD4hAqry3MD3CdG1mMK24",
  "key10": "2ko8x7ut4gEygcop8FqNVW2tvKGqeEFmY1gQCqx34gyqU7fGdYBBKp7ZFgpFRiXZmjCZ5PYz16VF1FQ4YWdXqsD5",
  "key11": "3wgdhPea9MAkk4aDawKZYM28RLESxBshGuTrFCPGfqo4D9zm14CGm1SdNxVnqtYUe7ZwFP44mzomEK91W6M1KTRG",
  "key12": "36W8vm4esv5QUzp7WYoSifJzT8cP54yebqnxg5hyr8o1oMgvYJ2B3h4uomYmU6HDkJww1tauSido5d5xkkt52TbX",
  "key13": "2fAMNmFkDRaP92b2AUJFzN45tVVXrTTtxJuhUZDAJdy46NKVULoaJPQ4ECvCGfrc2Mz8UzguZ2njiN621GfNYdrd",
  "key14": "5yGumS5uPJYAZC4mQnVLqK5FVybaFXKWGKLQUyQcqB5rQkH4rHeetD8XJLNNVq7qKetR3Jo1thZAwx5CANuEKpgj",
  "key15": "5wULquk8W1XdS4mg8QCK6dyp3Qe4wbAGHyVbN3FbN3vrCst61k8C7EiRAAxCGxJ7SPGUH96epkRMjRqAAf9jEKho",
  "key16": "D3SG9Uz8RrUrvUXe5zYZ1rE9wwQx8xtox3qUkFqZuyVoUH2xqC4ghsszGdaXVgcjM3rFysr7Y2GoTTHH47Wg5Zc",
  "key17": "5RZsX1v3CQQeME83nXGB1C2kYvDrV3pqYTB7DBuTR7XUX1ymVLvayLV1njs9DSYdqotzsanoLg5BtiRpmCYXkMFd",
  "key18": "4kLvGTT3cL6iH5AHMsUmfYiDH5CTQaiaKq4Zuv9WfAuYGvXVDA8tHv4GCmcinVKz8Pasd3xn1sf6bqCyX8p2kESS",
  "key19": "5TDESQtE8AA6f4S4esxd5B22YUyPFQrQY5EyVHM2fMRV7Cst4YmarqRWuksYVXyp9GUGkdYUwrsqXHDYBToeCcqJ",
  "key20": "3XWBf4BC1eUTcobFgNQGcyQ2C4miB9w69UWsRQAyPeFibcRo4XasNDomeLnDwTfx5mb7e1HrA1dspcP6DPJNLB2W",
  "key21": "5u8L1jRDX9jNCD7pP4oLFYDuVX6MiuV5zvXM7ou88RjqMmw2SiYckDk7D1YCTNa2xP3JF64F2JnW52NDm667CZ8m",
  "key22": "67RFGiy7wqZpaipvn7SxhtXga9duCwgJBuCMQpUMbaHJyXwS3iVCYq2SaP8TKBXZRrULw5YDW3fr7eA9KAaTqfEG",
  "key23": "2QoSBT9gGBcua2i9ALMYnUGzABgA5ESe3mZDQ7zmt8wVHVyagNLkj3y8arERNaDB3UccqkMeFj4k759oagXu2r92",
  "key24": "2PXzMd4B7oiCwgR71e4yUC8PhXrzjRZg79Suzw7eZzkPygAeAPWK3QUs2YM867gjvoi3onvXQrA7iCg2g8cfLdsS",
  "key25": "4VF1K4jY1axsugf5AoCLVP15vRmySAVh9B5XBoxV4fjYPLE6KcmRDUYSVjg4jBKS2qu5HAD78qUFkVdMaFFvAkqZ",
  "key26": "34aSje3rKuHfZuWoqS8uaRFHLc4TeUVXu8HK8LwKiFmd635RQ84iMAyodBGhFvwPYnFd2dxRmzLWyiPVcVkYHyaY",
  "key27": "31PhgjNNtLfsjk9ad4isZ1YRU3znvYcFCSvSrCWpHyN6jLYsjwQS16QSwfwkF7fRaU9GgGRDuizwnx87qLvWJ3wU",
  "key28": "aWRo7VN5WuLDMbVWQuzSCn1uhdvpnPvVkpDmb9UnwV3kz823LZiuRxD44bWL29oSvUJm2uzhYtbwDZRKJTcqDvS",
  "key29": "5ETQprqd1tCH3WTeFfuTTjgBEwPQbzmAYFQ47Uc18W994g5hMvwzGZ1QqffbmDBC5fZ2wLam6D4zk78BsCD45dwZ",
  "key30": "41o8magBHxX1GD8ReEbeiqg2oy8oq5RMMsWacDbeYEooK4xqeQjnZsYrd3N5qgGsW6UQvgC9mjkPi8GPjSRyfZmo",
  "key31": "44Kf1foqKRkH7Z52yk9fcXtow1zhGXkVfcgPfbjazD1F9jstJxMMn2sEm7cgrDkrs8ocpKqVbE6xKZ45uLvMeCf4",
  "key32": "5CkSuzYmyTXT93SWgM38zSTmH9DJ8Jp2AVW6jBnk23o1ZoPZZ1JrGgF1uEPNF4w5EmEz6S9CuuV11V5DGhRjTSRi",
  "key33": "3q9tDkRqdMT67hKVvihnQYwjE9Gbsxp36tMjUrnqs6Y8tLdKXiotTZPuAoWs6VnfE1gCkT3vyQrCVBgDBm5RK4Ym",
  "key34": "2ZFEX2D3EbBZYc9u4EG95261TQsNL2cGt7VFto8HaFZt11XaYtfcHSao3kZ1sSMRnDnuX82M8osDkfUbxSyJLYqM",
  "key35": "5rWDU3azCianeSvG8QiR3WABNrvnoXHo4oTV8jvzewhw1PTSapNCuKi6N65Y21mBYw99DFoKrHJ6HSTLMuYrL1GU",
  "key36": "4h6XFxWwDsFLVDSUvK4o1zBrgJAMUHDBKKiyHFp9WbmoJDt3TjaMLsa3cWF3tZGxavXENgVcG6ebaeV4ruzEYues",
  "key37": "4b1AQ9xVMgQyjQfKpDw68tL3DCLRzkNmAnF9i4HNqJgtfkGjMGK3bzebfpmbfm3JogYuEZ7qrbWpnQRS8Mh7N3a3",
  "key38": "myhRUdJdiKf2D9WtsLkkzoX9oqmq2dBVpr1X8r6bVxFF4xrPAaBqiqVC8b8oLQFRaQhMioAgKhUToEdumkgAkzG",
  "key39": "A4E49TV5Nkz8dBYgvzc11UpeHDW7yLEg1wKkWF6HeU3nuwysKVAoFRsKVrxwzzPP3v8w66ysZNXgRwjabonapji"
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

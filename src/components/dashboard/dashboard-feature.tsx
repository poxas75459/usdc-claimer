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
    "4j3CqRW7e6T1kUmYJaGNnZR4Yev6MsjNFvcJvgL9bTcBvWBLMB5WXUry2Ly1TksJy32QSfgKRdguDiQS7p5BP2gT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52S9QrY6SowzcUJCHsVk2n7BSaTCJEFsECN3uoXLYWsMhnobCRqy7kgn9J1uFRPCkFyjdeXAZdtzNh2x4QT1GK85",
  "key1": "28omqrYFQzY8QjySz6UVL9V4UdTUAKxeqVrZAs1LvoA3XHmVR3YUTw1TdPKJh84sX6PbkQhA3eEbB77KaZcXf7Sp",
  "key2": "3ZrzemviBnL4HJLfc1CbuPJyZwq9UiPykBDn5BBRkhu6NdQK8hRuxJNHViNY57sqXvb1fLAJsnyMSEPKbuMG5zx6",
  "key3": "2J2yuAh6LVErbh53p5HRi3arcEZcfgmkSd42dkA8wrk58amGf68Kypwd8BQvViZ8wBzxdAP4actF42ZEXMprP3g3",
  "key4": "pgh7ACRuBx5v9yYKY6zWQCDC1MmhHCM4N1CJKXqQzwU9TWqDaZjc2tgMNEHBcXZFkZEcNB3Ky2ERCfsz3u7YZ95",
  "key5": "3H3vyvYdm9paFDD6CXAQf6AsHuBYU3ouSLaV9rL3nLpgLXVNVyBjsVAyYJ9XC5xWzfu4mbQbRZhekadLyt7yNABQ",
  "key6": "21y1DHHfujezwKqUBsVUhGBYAbLAoHjkHf63bskCmNEv8HGdJZyt2k4VTW5M1pyqRiKzqWtZCmhwtuCQ6FPPsRaP",
  "key7": "59D61UAYE2xtxhHiffK5ucUKgAqWYdxuhCmJBbZXybPWfaVnArXbBWjm7yjXvA58ZRXxxZ1H23aQxihDX6mXBQzo",
  "key8": "3iQB5A57s9bSo5UPtndd8KDc37QEHmfoa2EzxgBcX8YdDm13uGPyYFz8dio5esuKVDuZiXsEvuVsERW6XrUkYjz4",
  "key9": "5HxBvXTgWs1x6uz6gc4VL4PndbP26NpRFvY3qDqVwFQ7FQTM9FEDyoGfPX4w5kP72PNum6JiX5GpDLA3GBZhxEUd",
  "key10": "PvmJN6BLXTjqavVrRTbPdCJdqRj5CKmu6ADS7AAktACXSWdZSV8Gquos566Fxumb6dorj1RpFx2sP8Xq4dhZyEj",
  "key11": "3fTjRsekZi8VYMDLniXiiXhomEWxyXtk1Z4WX5cin8mAAwVbHUbFVvu7HTn7PGB8T2x4cvox48pciZtZrL43Y2ih",
  "key12": "f82p6hARjpKJWaMUemqUNxrRmujcD2vZYR4vytyzxHiY95ZWMATd3THhh4g7kUWoBd7Jj6hMRAVDmFePqWhA5E7",
  "key13": "5os53JcUBkfwwznBgFcmQHiDG61E2a9YGWqFXzEHzT6hpNMg7Bi5SgKNJnHTLviSAfdkz5fKiKJc3mYfEM8rFRm8",
  "key14": "2CoewZWZDdD5uLdQkLdjaEbBTi7uVxxYvBjMzWd69CnTCC2p837mJfYnj8qege7dZ17Md3Ty1hGaSs1nqvHDHduA",
  "key15": "2wKpwyyj66mE6Lt6YVfk76ucLh1EpF8Wvdohq3PeTBg4xorB5WifXhfe5KBXUt1Tb1ELWEqnYn2czuStSJAcKDMZ",
  "key16": "3KsfmB4D9iEyktM1a8UVwngYBDdburDGh6pCLvh7TEBRQ4vi545sJvmhLbKeURa8T7JiNqzt72hJTvTkksq87kH4",
  "key17": "37jQVhmZXW49dJGb58wv4gUnifmb9fezpAFG535fByS1kkkxdWnTapNN3fE8awqV2eo6Gchnk9oquZBJ1HhNT1gs",
  "key18": "wfFkBmbEdTHgTXrvDfNq8AFJHV99iWe8nZ81QcCgVy9s97ZGHfDTZNPoYKzncQAUHeHoVEaVDepCH3oJ8WDRpRa",
  "key19": "H7eakdtgnCKmA7pyuh4PpmEcH2eZpSi2GXVCbNMQPRWBnxJBZjunD88hgnwPgZw5YMy5nPpwbTsb6jFRKxBVZBb",
  "key20": "2ThZzvkS3YK42c73nuCDXNjUyZ3dvvUhQhapvUnaCYNvvHdJWKyvsj16n2CZwRUsqikq8rc5jDScij8HL33x6zJH",
  "key21": "3sxd2iqJYRTu6MFhWWcWA9xUhRFuHfgMWekjLG7WXvK2AGLwXLSSEPnyy6ETNtij45Xh8TCAB2uwkHrWzRm7NKHm",
  "key22": "5e2shQQjVAN3UK1vvJ3mdPDrrXmkc5zKgxSiQ833EyPBekTNFiNEHx4QCfNb1Z7KyXUXe8oDw8J28juTcpPMqLa8",
  "key23": "22y4cCzfpQFh7kaR6hyfhQ4GfGqQvoHuwHRHDCLnpCJbUgrA13W7rYEwptKRT56wjPrJ1xN4FaG3fpQnPmmsn4mx",
  "key24": "5fnJi5N7KTWmU1FewEtvB4L7hb7nUnWfbetkZUVfD7UjhDUTx4NoUueSAumb4LRf7e4tBVv2cnmot8qZAfDTcTFL",
  "key25": "24VjxTQAuQu548hmSnReF7XGZNyJdg4BrRX1MJ3zuS6c9c2JWnx4UJ6SE3geEiagWoksLmhiXsKEpk6FrSSzMLAZ",
  "key26": "5ztUNKJmtVTCfYpXRq53WgdeScr8vTHcCY1HbqcLD8rbS3Bj7tysXEsWAgTb2gXHS4Cb9PmLhig3w9Z5VdVivMBN",
  "key27": "3riRU97Lz8wUVxUNXKn7tEGcfctYLXyJyMq7C5NMXNtRrACGqqzWzrD11YeijtDm2PRz22P8sUmhVpNUVtySbt49",
  "key28": "5VaD6nthFv4SCQnqbwopWsPaQixehdDXNabuKcVLUkQh2xmVaNcYb8HGVe5YwhA69w2g1fxHdGV1AGVvPrDv9MK6",
  "key29": "4LyiE26bQ4hkc4UjQtnaFjzJ4D1vzqEaQaoCFuNi9pLSYsRkVhobQ9mtohRFe33eTXwUYS89iLwLVq1N1Vg8UYS5",
  "key30": "2MH8Bt4VkYSsq2ZDjcumhDwaQUGhskphAN8ttyPxjPjFov5t64bBgMEH3PsnGA6ksuuZo3uaKMiGjZDKx6AFgrjf",
  "key31": "2sZhUYCeF2xZDPAHUPbrVZgnYDvAhLDVinz26Zd1oEyygkEdm2bP7tGFwQsV2dHm3qmyD7fdPYKWrgjpW4q2KmmJ",
  "key32": "mogyQSGnTgLsLQoS1ByVpsnkuKajWxL5B8hXNf64GoGqFqT2DhzJY5iE7zUJ6zYzz3zhUwtheXJJb99P3MKjBda",
  "key33": "JMtNHtdR2K2mBiWtuqyuvht4Ky9y8MgCH3SJqwv8DMSYrgGrwJj6PiVWimr2H1d4vGwozmXTN4gA8sLbofJxJMc",
  "key34": "4hNt5tJoiWtj4MZmYN7wbHZ9ZtZjK3a1CbutgLFbUbFaW9MWz3L8UxP83z2fx37GXjgx3dk6thL8rRhgBotACjGN"
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

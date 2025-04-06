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
    "2WR41ZcqAar1n9B9SHGEi8EYYP9wKgvvPhPnKijiNeisJHM9979kivpcvwrMA6iVVfH9JYMp7RoxDsPDJptb3e9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ssBxwgASKadv2wdfjRxrc3ueXmLTLcC5cHbMc1dTiMssseAyBspTDdi6jcpo7d3fRwqWmhdLmda3sFNcVYpuyP",
  "key1": "3eLJ1QLUZp8sMbDLyWSaZ5gwGzaDYmrMiDWGpxgoAZBxc2ysW8FEbhXb5QeJYPheP9pX6sgifT6jX5Nzg9dXocVH",
  "key2": "4LZVBAUftghnJSp3A8afijwJ7U22NScSJsX2G7QkARYDcR8ddb22nPWPMvWS4m1e8dV4x9Gkht8PJgBgRPiVDJfB",
  "key3": "5KVLjoXdaTKB7UzTQdL885VSvwKyQg2SpnjVy1o5KwSXwi7JWgcTsoGEod51AG5rwkBRY6nG7c4X9aoMvtABs6an",
  "key4": "3nhshp2HPKyLxUuHTpTRpHz5mpTdtAuo9hH1kBLAxuEB9EcDkak3y8iycjrBZMUsZnYShKB31M9wkjXh2X6xeURK",
  "key5": "3nQ9XTgaLRzyjnM3eR7JQHNNW297PwQPwGxZv4R9y8D68se4MeDqFPeq3ZwrEV5uBzoPVxHPwW6MFY3S7hNzbGqx",
  "key6": "C54uzTocuap3V87pzcGyJNG2RRk1zLshTkVY6icoxXxMzUxAaEpf3CJKAP2oZesWtBubGfnMuqhi2UhSPysW9Gt",
  "key7": "3uqNomo1ZNBLagbUvXgeTt73sXUbQiepuPAPVJ38FqiJkS3HFHETyiMJ3YFZ2y1rYoHAmr5Sc6WjRS8hCsMT3a5c",
  "key8": "2fevrr6fEh6JmNCLuNeht3ZGCEczNQhQCw2mZ1UdT4oxZH46G725Wgdmpha8gLSM3Gr9ENeri7yDs8EpvZEyXQCz",
  "key9": "1Z43kh17jyNfCbntdFj4xzUJcns7EuCsdHcXbJMd8wS1UqdzbkmVvfMhQdjZtFdsdRwBRkNkcVvJWEiZ321Bmyv",
  "key10": "24D9Mv3DE1kN3Jhbh273XE5Di4eQSGN5RJsJpxNqALH5jAUWT2MrNipXcTpUmVtofeqCJSJomHEJptxv84Hvb2yr",
  "key11": "5WaSm6BoPPdxAJ9bhWD6cG7ztsLgbZFJo59V1begVzuDesg5X8XLCBXQptDdhB2T5SWQPUZUxYD5jLiBYarLk1cf",
  "key12": "3XHj7xbC7wbkkYSs2QWb19yMCvmMT3uPk6HHJL3xD2XSYCTnULLFVvHbAiwZZXgpJnLqptGe4fpsKiz34HUxUMDH",
  "key13": "3MoyzvNMqLLWTKV4JqworjzM9KbQTb65Yi59AMFkE5r2J3nUDepA2JW1d91wFKHguvLWB72jbZsNooMnB9bRuhN",
  "key14": "LMTsiGq5XhxWXd8mKTNzu9K4Cm5y4FVqUrooTwBxdu3vRF41FJZeguzp9JXb4tsvzMtby5Q3Vh2ydFAEBCBd3Tx",
  "key15": "WmUmKNeiKU61mod93NJcrd7mpgxXudrcXw5tPWrdA3qpB4hbVFAu1sUzNqazZfhukrVm2Lx1qkq9DRREgQKWJgU",
  "key16": "9kwvraNMhjQJ5jhAEFKFM2wTu9N9VavMvvwFMAruXcnMVeAiJgX8KipAP2BbWQii6AzRHd5jmryvb8X5YpvNtYg",
  "key17": "oG7V8uPinwvbU3gm2g2ti1WJf97pNKqgA4LRSk2fzGKj2e23ZXh9fuZkqwp4UruQZjCTso5iXMrXujTpePAgMzJ",
  "key18": "2F8ZiDN9yozSqCeEQuWKfbuf5jwKmRGW6im2HCvyCW9dpPBHA1fuRz5Y7ffAUS3K4HqFxsd8HGWaG7YJiz5dyyQG",
  "key19": "5J6RnQwqXuCRv265GRNXHvedGj4KfVp1DzKhwLmqZeXw93kbR4FHqHbXBUwnVCCCJmVVipjWj4FuJHNi3QkzYRU7",
  "key20": "24Kt2rEvjDwpEeXMiwdsrjf31gCYUoyv5NLQiVkGjovkYRndVwV4MW1LJPNZbVQkbFTcep1DxL2VEtZvq49ykhm4",
  "key21": "3gs5Mr3xdXitpFrq58PNceyiL4Rzc74w9HoD4DWVcdhudrZfmcMoL27PrcaFWhGHvsqXWx3yLFpNBVzTPdnNukZr",
  "key22": "5gy5mrJbCvSdL9E19WWrWAe8HnfKv5UsVSkPyiY5PxcErVkAUHi74UP3shfFRNVTWPPQBo9SfubPt6XCmPkb6Do6",
  "key23": "4NbyJ4kAA3hjxymqZbmfmEjrgVnTTbuf8XiNEEpE292ddQ4WYcL5JyrcLyEgb9QykDBJf7n2o53SZ8UsmxrzT68A",
  "key24": "5xab56hXdTY29gfVHdxouD2d7waFsP5tucV9xHdcPkVD4auwsfMfL26VyPk5v5dccMzXvbWjeCDphWMbiNffA3Bm",
  "key25": "3Q9Smei2LWjSRJqt4Fhc7EwLtUL1Q9uqsds6EkagKJsGcHsQWWGCsBoewi8KCt26YN5MhBJfChx1Ec5ssWBk1T3u",
  "key26": "3HHRVXhVtMctdhwygwtJwWfSCHHPcrZmRusLwWF1n4KionWYpcoQc2UnQtpWeG4UFBZCu6i7G5TjWWixdxCLHsgJ",
  "key27": "5CCVgpbZBDWtTNhm88gZCmvY4DUZzjmTSdHpzv9bP3mm1R7BU8DWWKxEUAnz3a7jMkFQrjwm7MVBAJChwxvGF6gW",
  "key28": "5NA2MsUSTVdTXJSJssNQ9TLVaiZEAYMbdHGanBXZBEmVdnRJWwSdzQF2v1GHe2sAxDZLDyFAQJxWcHoKZjqgwtPm",
  "key29": "2jxiuBJRcBBGP2XAE1jGWRjqcWWMtn6iy5vsupzg4jR4Zfg1vsc7GfEAyW1rmgReAmDs7Gz5HoSJDzpwDZhj4abc",
  "key30": "2rjAxK1CdqgNXKMETVLqVmeeVF6F35Ki4gfbUuTLFGoScEXgy1ZV6C2ah3Cn5YtL8wcGHf6xW475rxhuVKN6HpEK"
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

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
    "32hbB3fHBgqDwT1rWeRkqRP8C5E8wpRc4B4KGGzmkBNrio4svtUHAC4B7sa5RKLgWRWjbSBuGaJusigjieteZW9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjiFP16T2QqZakB7WwBk7r3vMPeK9Z8c42CU6AC2oHRzb2GxfnXFaDg4gBkqzTAXurxSv56UzFExqkachZHbdN5",
  "key1": "3fiVjbZ15ypPxbooc6bbq2ReDXF2YsHfErYH4ANWP5AvvE7YHgYncHNW8UW6sqYqkNyvAtATYuBRZNxK5kUcdYoB",
  "key2": "2HFmqesAYzkinEkVZn9Njjfbp3EjZ9U7b8FrB1sspzisFmtXshF8qBrcMGaa1LHmZ93umzWoQBzboHMwtbGhK2Lb",
  "key3": "3uq4niqzKQY3XXDCsM3hksaignZj9txzRrbuzRfU8YrsAsApn1ZgPibguomkhsut6SewTjamV8D2FBrtRpdXjR2Z",
  "key4": "kUDB1fvvuFd9suCScTvcneoH1JXSFBKVkUZojVCGvVpLo1qBZFNAEtsBHLTkDTf6ozMagqCn75oU25GAEFNA6An",
  "key5": "2uc2sJkGH2b6b6nqW1NvzpA38nUJKhvZhiyC9hRdixMjTCWgCEZ4hge5DM9DFHGzJNutuecW7KoYrRxEXqmxMhb8",
  "key6": "5an9vYB3nwRZBvA6eNLMjuNATEeuPs4LAydA2Re1M2Z2w6xqnxoGoSukzxtwN7boNkH559yULAZpRt4Wn1bEMMiM",
  "key7": "FAj4PShnZra1PfgpHWav3Uwd6GfTbyjLdpANV6Bk2VaA2cZjeVWgYrbpzXmm9gYKxvZADY8yh2M5WPUKog3uSAC",
  "key8": "JMCkydfEdg5NK3iukxgzZ9TSrdBfjERCcn26jSKiCmoebh53NiBMG1gVGySf48M7neCuByeaUYq5ccWonHiKzX5",
  "key9": "2PrTNGKZLShquRhFKkMUzmKkm1nXvdZ4YHjZqw9ok2BVDX9oc1rFMK5KGPnjZNAqzjnrcf4HQhfLybJUBWpq6NMD",
  "key10": "3gGgDFbNVWhyU4r8XnZqpKBBdsepxXR9CyT1zRxWQ2y9LcoGCDiLn68CMGLhV3pYCGJpi9zkiTBnbk8ZFzqZmBu1",
  "key11": "45kzAbAXB6Lyqi6C6dqR3S5NBuRJxrC75CtczVvSo9mwA3oFzaUL6DbByjGSC12bjqPnthMAZ9n5YsUCvFt5g9eC",
  "key12": "bk4gf9HzFSQM8WsRfKp6VrgK2gYSJhxVMoKetn88gDi1miLvmAMHcVGAFmJEEy2JsRWJEW58Sxs6B6seNt4gzsu",
  "key13": "3q8Buj2MV8a8D8hCntDBV7q3AVz44MS8fAJ9zKFtWj85uyXxfQnpikriHvFb1GqxnbdJEQXDwV2ZTkPKECCXtrLx",
  "key14": "3Bdvsb68qsP9E8wsV66rmWmeAjQ4zoWCtEWK3qzGCexCiXsxVtXn9DM71HWkz3JZSEYkxmHPsMY5u9dePz7gBWjn",
  "key15": "4YfJhgyDNGq3SiEeEoK7DvnM8XPsFuaSjZaqN9CFDzrXdSNTPVLJigFgq7osVWbTmjnnLGeTHdPMkJ5umE9q89kJ",
  "key16": "hHZprfNZT2vXEwTRzHU8wzi2PiiNKM6LHpomfSKMGtEmP5xRWKpWMGuf4bKZVRY3AwT83gM5TrqgzbEUkqWk4ZV",
  "key17": "4x6Nymbu3vGV1vkcx6Yi9t3ruRDAtgNU1RkDBqyupq19ZQaJSNeVPPYzEisqyL3qG86FvGMApAtsyTiMr4i763uJ",
  "key18": "XHhQwFo1zsN9My36BhjwhRvLhXut2EpTNW3DJENHyHxfdk9afjLn6BsqbakNd5i6VqKDMn1qfn5Z9a5Wso5zrov",
  "key19": "26FBJaRYAQ2h9LqDxoTRg56XUPHoHhWwSMaovNMEj4Ev5tp7kq8sX77ETMaUDYtYcEJqth5WxED8s1kQdjFmkJAN",
  "key20": "2M1SsJARdzxmQxgxS53jqT1GSaTEiVuwhHUazT5gFPNso4z8fCAZgrjkGw7URpoQTMGHk53gV5EqdCJKnQaovg5n",
  "key21": "4JYRyaQkKkiC6UGHKnrAYnCMZ6Spjo6gJaj66pBbSCRvGoAKQPm3r3Xwfnr2ezZ9THtfPiaeyJf6nT9aqxrj7kf9",
  "key22": "ciieeYC7iUhYXYbC7GhoKwZ2K5K5mkdcysAa4fKfTbzQa7AgNDXG27w4VwadBXhiJFeGhEsYJ75Fc8ZsTiZqrrs",
  "key23": "65wuz8bmoswWAyqAmVM5wSd6gY1d4SZTeEJBjn78heX8cjxdTxMNcynC8139hJK8cbUWZyMRXhd3LppCgCNfxH1N",
  "key24": "2tmwT6ujtrR1APnFnHGtibdiZdTc71CXY8tAKzvEEW6C7FaXwfj9YMKnMNHAg6cNyL8h3d4WFEt3BAnpG3FCctEv",
  "key25": "4fxhAEZtp7VJpbc1ockJedva7NirgGy3eMF2qgCp8DX2M9L85WZairn62BuQTzmmv9HWD8JSgY9YmEyCVPPpFpM7",
  "key26": "bN3LSjDqUGzz6pERkkkPg9sRLZpWuH1RcTiWJj5JSVRNkPX1wqdf33m4cNp8E9MKimvTkJYnFwaVB2JXY7Wvzjr",
  "key27": "9R3L6DLv3iin8RpSazW12tFXChgj2mMe3Tz86VYPPmyxbyxmjPnErmTP67prrdivXYkrTXTFJUi2u1qS8Yy9TX3",
  "key28": "62mPCY1dUb76HD3U9jEUmDDbXgXhcv6JoR8mSbiFa1BWq2qVTkWynMq7RbNYveoraFwG6k2RtkWjk5YzzL5NBcp1",
  "key29": "3C6ysaacgTaVP4AooJ62LN8KGkriteo4BMHhRdatVvLW3fV7o9JKZRGz1B4AdZngUK3ivzLQRCcwfxbBKPFKeHCH"
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

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
    "62j1WRKqmSrFLZ7e56ATKyFs9CrgvoTmUyuGhRaL755DWR7pCdj3abVxx2mqMwmqVXpRPLfro67TinMyqyWpvKh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNrLeNenQNGEFZxMqraqExyGpMQJWo3K9ddwST3tC3LPWD6bPuntUS7GodA5PFfGQaP9VsfsXDL6aiTKVd8LvdG",
  "key1": "4nFoimVG8efotZkZF9iJHjxHwvA9yefkTbVyfW89qHzjUaJkSm9Sb5Ex5Meafwm5gCwjfDG3eBon46DZewkS4nwm",
  "key2": "65uKKxceWK8y9k7odUw7zLFJbhyix7QQ5NdnCZFzmfnU6teJrDvtycaHkXDKq3v3Sj2NsvjhZRrJTjFtC2V2UFgm",
  "key3": "3FDwBKWsMx1o7ukmkMAmFFnQFrwabdavPimSWSvi2h6BK8JrHMxZUAmKt575xv6AiWGnMQw7UPmeqqG2drTcmKV8",
  "key4": "4Wh8vjDavyChuup6dkzcaQ911L11WWDsVpk1kC9QNtZ6RKCigDBbtf21zPMN2WRELgwnnzYTySJW7yGqkDwUnAaC",
  "key5": "4wfgwEKp26P6MuGGACGsPXErg7hLxmvaZM2df6bkPeb2ykza1SfBNT7Twys9NnJvqdxDptX4rxzHU66NX1o7QY65",
  "key6": "4w5FpZNs3rsFAK7DiQpJu5Dtemn2AjyGDP7fceWj5VgmANZRFiNxVyWmVK96mUfBHTd9VgTsF3TeGiBZ6j2YtuNu",
  "key7": "2y2UACSDEnu9uZHHDJFf6YSfxSu1AKJph9jA5aVDCTUGsUuk3xGYPJcvR5YFBjy5yGeKaDDdghehVBiKvEnauWuB",
  "key8": "2jG1MdndsaVSw7PnBR7419QmfyXKT9AjfBhibZgg7Lzf76zVMP3Ko3mrXCQ5bmX74pyKqqPyDSQT1VJveYaeM52e",
  "key9": "2Ki6cuqmoa9pgN5V98zWaiZpN7FWitwQvehF6Shg9EXKH9f3qst1vFKfSNMPMw8A6KSCQcoEVPceBkznJUrG4Bcp",
  "key10": "2WpDXC4H3tUTS9MuCDHcQhScHB89r1dndqutDE3EP9iuv6KhWcyKuGN6sArrwv6CA9zcfrd3kaoYeapN61fcF8HG",
  "key11": "4kq8dJt8jjnWMctJnVtCntFQEmwc3wR1U7h8yuhoUMMu6XLa84KoJ3r5AyaykLNfPVzBJTd8KaM4MbPE9THjz5rT",
  "key12": "2W81xhaDgSQWuX8Gx5kxhwZa6RQMrr7Mtjtfus3i6fpNCK25sj8CB4d2YrSiga2Uj8NrM2UoncLLVYqgqd8TPovn",
  "key13": "2RDTTeJrFB5b2QYbE7QpEaUPqSJ9Xyn2b2ao6vjMrmAXygaoA8Akn9TVrC8YM2aKwU6zp5NMozLS3A2KcEPEELFu",
  "key14": "YAHSCDYyjMvfksk7rqfNTdDLTp59tGaXDXoM4Qusevasp4QZoRtGmRDqvP5qAbBQ6WH4uvR7VJQUR9WKK2FocTg",
  "key15": "4EadTxU6pUU2cn2JincF1Wf9XdxnkTEhHequzubG97gsA48siRimL5PWLoGwS6bV8NnbKtNoh26YYTVtMQ5rUhiL",
  "key16": "43LQPeyDpkrZpW85hV99NGSRCrgT2tyWW5FoZ7VEomJQXkDLpHvgzJx37ouXjci8284KntZHLWkWvUpM6GSL64hx",
  "key17": "3Pj5NaYzYKSUeMUrM4aT5Uw5iUsZ69DPYCGb2q3TBNo6oLRi1NJUHtgYg9yYbg8AMX4YMoiQsMwL8dMfyehJHZe",
  "key18": "3j4YFf9qtaDXcXYoAsr2enb6Sx7e6xe8qZhFnYkpZiEA6C7S4GYqJLgwiSDynYboYEhwUqgJEPTTVb1bHXLzBM7G",
  "key19": "3FEWHb6xgDMU6z97L8mUaa3Tj744nsokewh4mS6TBZoA6ukaiwrmWumAC9NRr2Vv24UobxFn4eg3cvuaPC5ioCvT",
  "key20": "ZYXVPMeAY2ezwb47QEiD8PA2y8Tmwwn6wHY8pbSZkcPQCuwuYZCaorYc3tv1NomNusDk9LiMNDDEFgPXGvcg3Hm",
  "key21": "4RdYmBdZRpA4KbFyGBdHwxSysQhAG2FuUFeNRVn6G1tPUx2QmUErVzdK35vLeVJW6mF4BXf3doZ5XNRHaJNEefsK",
  "key22": "QJJPJ4xkN1jA4pvzqZjqvkfEPNvd5JC8rwtb6X4wKP8yKfPYeu9DYNTJmHiewjET5jeDPEVBKrn3gpnCXBmu1ng",
  "key23": "2Cb1ZfCzqeD6cquz8YuBUnoXZubzxitC7FL53JxW5cqNk823VnMJHiZdbtddrmsGtHcDPTX43MChMbqHxViNxMja",
  "key24": "2ZD41cRKCUgZhGkSxHkDDT2W1QQemVeRssABJ3Xfeh3juPKzWrvV4qUTmw7howQNa8i2TySbECfcvPGrR11b32UR",
  "key25": "4LC28rGXkqCxi6aRcuN3atC8X8pUrhTvKdeeh4PMkeGw41UBz1h3TRWrkwDR2cn5X5XP9diZzkgot3koZFYohArZ",
  "key26": "2HUBFXEE1tWQ8bmfV45SKKYpyzNearxMmn5wVtL6xw1c2GdNWZtEKw3xJPaar3QCmRWVWRPCEj5DtmcNBvMPoEX2",
  "key27": "38p28BLbcVyKAkfc49cH1MhibM7emXyodDVBeKJVGWw4n4hTJgYyc747y4LXKRgdt8DQ232veS56ekDZSxHfoenM",
  "key28": "5qGFhwWSXhiYYjauQJsDy5bQ7TovKXSTYCEUT3bpRF6GTSxLoteMJgveggRV9ZaZeyvvs4KUFWCWyUk8LazuWhrS",
  "key29": "3s2enNN9GewxvT2uiUPcRREmUonGBCCVmCdhAu1VRetn9hbZ6nHt5h4v8WjiYTBZpzcGJf4yq2f9t6QJitCZ2bUx",
  "key30": "446oRa2TbeTQvXG9zk9SzTAKFmgGB1CM7FgNMtvvtKqHLWoUWorNw9eG2HHGUsCRDGvRXn4Aa3yfRsgXEsArNZTg",
  "key31": "3nepHj2d7DtcvSSeYgyczDv8rCqMnor2Dt732C2ADwftG2mvSnkHSADRaaaxpyCZwhybNxm6MC3wbKxJncwyRGdj",
  "key32": "4mSzbARHGJ5ieN4cDJWYdhgTi9NjjjUBeXPrq3uyNXSdEToDSo6ZE4goWcRC53Z1FU1Hvx13MPd4MU2QKdanQeys"
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

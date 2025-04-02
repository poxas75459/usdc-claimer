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
    "5basRvZWUgvpxuHB7ymbxH4q32s3n8cwKgLyJ7WsoSFfzjsaZkzi9vuYgNQWVdYDQziGZ165S9PsgvrZdTDfz9F9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AFwrhZKXiGpgX6DGUuWbWQ5zdsMGQGf4RC43URMNqp9e9n3EeCdNTHvAKYu6C6JvPNnRbHhYZXwVXDq4B3qWWz4",
  "key1": "2CG5UegyHaGwBKCzgDSjaerTioFHVjXaa7uJchmYaNdAB5pPV5mUbqatAAe2GWdFMLVSyhUiqvZTLMAcJDZzVeCi",
  "key2": "3UsxWLZw12jgLnWFRDio8pJyZM8gBRoc6TJmujg2C2AaUuqjLrPPszusbSeSaQMQACefwb1svwWBXhPxtxuK3aFD",
  "key3": "2imJpGimtQrfxGeQRvhP8u8mJemjPwT3WpzjGANznocatR5f5migUeAYnHqdaTpuRBYyHSruz37RGgmf6yJEGCkD",
  "key4": "5Jd1MJDanG4EULctAosWe42DKFceoFQvDQmH5xNkESTVNw2ekqWFKTkAmXCSLjXqktZeLhfSQMuxadStkGAUXAqD",
  "key5": "2a9eSmRRqody9KQtpTGgH5MSrgjwDJmp6gipxdNA3PFbXEMAEdYHBvBxPBJj4QW686zWHEAqy25Qv9G4ocFb2ojr",
  "key6": "b2Vvp9kxCKbTfXr5pX5NRwmdy4Zk7qMdJQ7CAUvtZC3ygKFddJp8dnkEspEm4doP94Q71maRPe59tnPikmfzZ8W",
  "key7": "qdpzYpVor8z94BUxg6SToxBohK82bATwFh5tQZqVqehC1Pbc83A5b9jqsSqFyfVDC3AZ6jFugVtMGS8BvfZgScc",
  "key8": "2NARZntf7jirwXuo8oiQayXZbDJZJEK8jF9XyK4JbSGhi3U4XaahLy5V8TqahKTLZaaob2thnbfcwXv23oq8SSU5",
  "key9": "5vYrFzem5vQj6Fc5Rng596xss2NV252rtQ4eNG8WdZQce5wGSnwTuatsMXdUCYSe3n2q4ZwhnUj4Toq4cZQNqXEX",
  "key10": "3gUWksa5XHkkUzMS7ghdRJeetatrhwHrWe4MdkS6kLtCzyL9ZQTx7UcGfso3Jv9HCrsPKj7Aq3x72hCSSqTMDGFM",
  "key11": "3ZwXSNzC8TixJDUo53QLLyu57cngUs818ff1eXuJa3YFVTNiJKKD9vDD8vZt4P9tdidQjRXKt9vsMc3Yw4gxUgjQ",
  "key12": "65ERG7f9TKL1PxaKBgBkUe8rhuBs35jJo2zqgZCcvM6YP6WhZE4igLZaqU1UTBQYkGa67nq2f9uYmjmVBeDjqyhS",
  "key13": "31SLmnSH29VUqwknvQQhMsy2mQYBcFXJiYS3LLeA2MzPTsAj32Uc4VDv3DPe6eiLPPp7vEuuf7RjiTpRBoMnPPnH",
  "key14": "65ff8jJ4cPjQqbRKtPkWgP8iu8bW1soBVTeB61iemGD4VR1SMiEDay88QCBJ1oyTWwwVozjuchJGBEnsjdmnz5Rq",
  "key15": "37XQtH9KH7dkqrCXkuTxj4S8GMocPKiUJLSkuL2pD8a9TkjHhwh5D5D7tZzj2tgTyMNMZ3dcM7cEBqYyt6frsRvi",
  "key16": "65uer7QmvLnqJ7xjtL5Fi94NammkRpyqtGBDKVj5AzuMWSbLuuCVDS2fsbUes655KNGQ2XQGC7bWSWFtcjSzzCyV",
  "key17": "2mdTzREg6oqZRbuPAKbr9mRKAjEiNS7yUxRWwhNpcw5GEWFuDPLfw9UzJE6TpU16onxqGFejGFQmqeNJBQJssuWb",
  "key18": "WY2qnyX6BywDPZQKe4ebYFSVxmr6Zmtj2cE5Po3XkAZ6Zxofhvj5mzZW8iEte6eWiE5mDEsLc4EwTVfs5F7om55",
  "key19": "25pNjmcVppJzWSZzd5g36mvMsdux6GK5UTbTdALDdaTsGRfEkPArMkFzEkknkVLwpeiPkdVDNkd6bMBAav65oBXg",
  "key20": "4bLba1pV45QPgqMHbVYnKpR8AsboCAwPcseKd7wHF8qGRPcsSpm1HDjTYdHjZgu5aWuAAXonAgGFsBm4UgoWxhmn",
  "key21": "4s7qe6U3Wjz5wPcuRM9QVyeVkSrLEXqasTjRTnqrgWdZTpx7tUu9hMzDpDciojcWXugRheDvkQvrw9ArRH2b3RQ",
  "key22": "5dmhqNZyH71gCwqWUBixT5XAWQCAq5rLLhvBCqQek92D9k59Z8CZ4Ws92e6VKD47j8ppjDLaRU8cyCSHfKzTzatq",
  "key23": "ipYEAPHnzoKQF8sL7mdfDefqtCsEjnrWB52V6ZmaTJNnEuX5dvg2RUW5G2UuniqeAkmhzVubQBfeVz7vX9PX8Jy",
  "key24": "Dxb1jXCWjxX47sTik47X6jmUPq4ue5Ge6Lc2hdmvtUeQ68GuZ9CAb8ZT8vLb5KKXiDA4DzKSFU3isZmgZZDQFPi",
  "key25": "5qx9VQ1M8idwPY7afa5qEDFBnDT999udnFUqr683KQmCA8dncTjMWDxeZmWgFEKC9Cj5C2o3Xho5aCRoUaZSbYGx",
  "key26": "2BNf3Ru2PCnfg8HPW5in9J3AdEMBaCp7tvC9qsbGZu5nHYBHKGBL9QueS8keag69cEGwoqGQiaxjagtxMRnjLfMM",
  "key27": "29pd1oKHupbJD7dbFusu3es5yNkgvqnqG2cCqjVRJD5PvUU3jQAPJpp5k2gqwPecuM2SBvQfA8puDTP2Kmu32aUj",
  "key28": "zN4RsWb4jwgatkxDHSkckoE5arCzYtdF4vd5q8g9HxqzkdVqYQ75AHWXH9HPATw5ydWKpieYUA3jnrTcqbEmrmw",
  "key29": "5hunUTQRZszKjPyaF7xaqwse5eFGJBkf8Bk2dVty7csXZaRZNtwGKktf46tc2eWVE4htcyt3vQuMXnGatMkL6v3E",
  "key30": "EizZN8JRCtZyZjYNYUUZnW8YLHM9GiNehzvMdrdDPNvzYn5zTM8SJGg7LbfgGvgriA5KVMuPZDz9qnD2e8ppN85",
  "key31": "Dmc29H8kQBFipkJARLL5P3s4GSfV2b35rsMZ7zk3MPrinwFvJZN3kNFtngbvGQ4grBnDc1eBMGignLtPg9Vhn5Q",
  "key32": "3FLy4UWqnXr3TXhmxH3TLPkYxUPJxD9My2S5ReabGaRWQnr5YSkVg2DfwgJcw6kP5yFaF2g2ZA3uMHd3JmHG2sWo",
  "key33": "5iHZfdkUinUX3ooibET2c2MHAXFseCJnN9Qk9tXh7nMTx8iGMNqYYK18vwmT72PKSrB2ZuByuwJzSDkZAyDmtSD5",
  "key34": "2cGhA9ED4ieGG3DmLnda21Cv1myviP5ddxXNh7kJLKUHqyeuNbAvyZjy2JjBhiQ958u7dfxdj9t3oTLZ3shke1T8",
  "key35": "5cvXhAZ8YSS4c4uLbaeR5B8HN8k2AUB2EW6kJrFVNZvjq2P6aRP1Bq36wmQQW84HF5me5EyJY2oQeT1UtrW3Ff5Q",
  "key36": "djtnvuuAEArFneG7xkoRDZsmJD8tELDXfPu82Aikgn1oLhdM2zrRtwTQQTc9ocoquysiFsvrKDFWaW8FEpGcJmg",
  "key37": "26iFFmheLmmpLjhW7GooQWQn4YcB4znyZ1TX6BpoRevSijCR7L1dZFzUwH2nKVtq4XnwWVxpoTD5Jr617YuKTC2F",
  "key38": "2pPd2pq2UcLXMsfuKmNLbFyUicohe6DLguhNm2fqEh2BV7gTiRbi2r37pTF54aZgZvdXaJYjtzAwN9QwnB6HkgFR",
  "key39": "bvNVFt7hfdbEcJcxXr3vSAmwiSapofJjXvZSEYQmXPfRX6icQLng3nRib7pAK9osDEei5mFezmS4WRUwvh6f6kx",
  "key40": "2VapWQBZoMQmpL2qcgpJGcywYrvbA8EL7oyf9XAQnQkW5GREfcFdK86RpDA6HLgjrzYrsz67egHjwDeRx1djxPEU",
  "key41": "UX43sk2iEvAnShZTR4mdDZNXGgAtTCLggq44M7zC6wFF1bQC7g87V2nJqWKu21PUHPHMEkQMh175cGxzdmDSepQ",
  "key42": "TCs2ApYKCjyRykph54Lb7i4NwQWzMVe6YknxEPET3F7UuzFo6cJJ7Dp52otHF8kvwn9pDgtNhtND7QXuayo4WJc",
  "key43": "3CHkKgCzZahXB6QBfAdf2nfX92dw6M2im9nA3YSf1JYSQEXJ1deVFpFKZKjmVz9eHvjoEqecW9YwLyr5Duq13Qwy",
  "key44": "5JbDn5N62erRWTQvYhfDvgD954SGvvVj1XwJKozqRq2y6bZ1itFRZMrK3FbAX9Ej9rG6knEFagYKVLbLn3gDwHga",
  "key45": "2f75oy4qGit9aqJoDYLBdqCSihGzMad56UJA5TAQNrTQpT4RiQmS7WfbUFcXGEHRY1tWxvvFbcDH5FK4iEEj4af3",
  "key46": "5Z2a2nf8dKU48xzF6GE7ofeM8dqW6e2h7nq4qZUpVqojrMThWdC26ntbRqtZbiUke2TVusNoSpAqqwGPrLs1h8TS",
  "key47": "4rStDfBBXicZSEi7vUCQmjQymtJW99J7JWz3SnbcMTiQk5nxJwkauyWPVWx2MmuP6gXLa9gBZdjzS3KktQvnvpXc"
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

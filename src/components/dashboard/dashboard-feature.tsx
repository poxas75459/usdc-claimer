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
    "6696rA9chDVya29mKdTEK3otLnuMuVnmhua2RrHqwM1HqtNZFMck5Mx71EhQtzuzhtpL4XLmHLzovLeSruixg6p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZA4GbQuWXZgJB4vbJyySttPg3oZfovFQG6C5cvDCk7RQDvRaYk3giyA9MtBDRwZ8AE7kV8VkP9s1c6ZvRa6x2Y",
  "key1": "va1jWvYZRjDUN6aSnuwDbeDdbtdpXX1e6bRCVuGB91ib7BYRGwP9e2z99CbTE9HBpkUmao7bzLwR4K6jRzKPuep",
  "key2": "5K6NqeH4sWCzcsbuEJYp8sByn4Tay646pUuTns7CaVSYNzMFkf7WQYvab5NT4m1dAevmAdY9kyPV3GjAiEFNyNu3",
  "key3": "5hr2CeF2xeHNTfwQqTobYNgoRYQSSrM7pT92G3hPG52zdeJmuvQqVm2Gt1VoUcCN5RoPrcWAaGSWVUhPcD868PjS",
  "key4": "aDpULWouczbfJtYKqq23wANtHFFR8PC26MEY2FBFEiRsqPsZ1sk5NL2sJABxnU33wxJG83r6pixeSvWnABaCYSc",
  "key5": "2ybA3bHt7fUKDsUiZ13oFWG3WiAeo7TdCwLrLDE6vWR1gFvYFMcjBKi1uXdspuTd83z3Lz6K7m4eUiHjQjzhLg7y",
  "key6": "2zstC7xyCB8PY2aKy3bu4pdKPYoVq1MBNBPVUDxhcqKiKUaX3HJoJ72RtLNY9MupAREM45iaWLF5SZrHhFSZjQWu",
  "key7": "2JgcWPheBre86fRyczgk6boPpHECMZvDJiAZ8NWuxGd1cw2pWAF3hzuf4Rt5Bx3hY9RU3nVpfQsPcj789k6KcmQh",
  "key8": "pzLxDbYwjpCBa7LhNGF1a6c2YXJm2mvUVXNS8fr82asHJ4JNBMM8oLM3vv2rXjB8b5WsSkd95KTV4p7Zc6mFdoK",
  "key9": "5kftJ3qStwVnr9qV2Vh2V2Lmy1w6e6cAS8x8tNr9rgiNx7gMqPzpKiMgdKNUWiN9zQtEfnLTyXAxC5F2tLV92h4N",
  "key10": "5JJS7aVNipRCQwyxB71LaBzEGhAKZG5sakFnfRGekwt2ChbEhZKB9oamqntPofNLsKAQz9jhQoCP11FqdbCPBe4v",
  "key11": "31dAXr1VoHjNP9hZzbxuo6o5q835pVk27uC1TsmjmyHBW8nmNLs4op1GGAWqrZtQHvJmzBbK43pzCzehVQf3nBYA",
  "key12": "2wkgcFpVBJmZvvAZzPoGW7u85owNX71K7dJTAn62Cvk8kh3PYaQ8iq18ZJhMAisyqiPCucwMDmNqc4vGefFpV5ys",
  "key13": "41hLdWe8wYkyMiFJRuj4icfeEKYt4gQqbqgJzwJUyRmaxg6Pbx22Xu74L24gMsqTHKP6JsPWvUknMNsA3yoLCrkP",
  "key14": "YwQpHTB9bCwe3j7TyccXJuVf6iFy97bFJzFRT9Ft3jHwcqDuTfJ85K4wTSmob1wHABnaYpH7kud9W1S64fbLeod",
  "key15": "3Uj7J4o2w52cpUeQzx6M6KWTsNyJwswkuzMULAgp2hUbo6WBVP8qMDMbJcD3FzHUrinKxEmBQMLmoEd71NgRfve2",
  "key16": "4t9cPLrcAKDs2uoQdQuoKTjkYQ53t8Du7is4BPbC8uzf18HQFSMESLdTxUfGBnCyFqvv2fNGU5pt3J4BNq7DcLwe",
  "key17": "5kCy566czumjsP1mdftL1YQTcYGK7FVNXcx4fuKELdwSGvvofPoMe1PhEGHumHY3cB5U9zyuJsyh36HzFFN55frK",
  "key18": "49H7Y2AoMkzE9vQQmgs6oHqnwgrbN4VwBBY766192PQ3s4pkESR4TtnmYBcdr8jyq9VGNMDLobt6YhRq2j1fPQQ9",
  "key19": "3Hxn51tTDe3HrYmsRhw6rvRMbPvTm3iNu57eBXLwxN99SrEJk3amBXM6Dyi148rparG6suoCqPF7A9T9sMturs5d",
  "key20": "2vbNYuQbJvFc8yaaFdgu3hEJXDxaNkLW4x96NqQvppQ7T6wwXTgDZeSJiYJJwm7LMrSQBgnZXQSDyNyRPYXBkx6q",
  "key21": "5N3GYUKtUvxsHVpHdNN2zPLwUKPj5zHbAHUs5vu9jZmdWbYmt78BWb5fZsjRPWsimZ1qCG9SdeHYBxpiTT9qJK9y",
  "key22": "2q4D3kVDEW5kWWTLfBXkwP5okuoodfBzKEGss32u76yK4KBqx7GNh7E3h2cH4xJUDngQPnoFGKxJPvWqviH9XWWE",
  "key23": "FmbmnHMefrqomeB2ym6gV2FUUeo9agZrTUve3k3mWF5LquVpkqrwKP7tWrzo13Uiavz1ABtj1H17y6qTxZnvPux",
  "key24": "vxHaXoftp6xRQrN3od2UZBB9wPxTKEfrZ2tuyqPPihQhZ1jEHXCADEKp9v5MN7W4aYQrGH86TU7DxekaLtYV4MF",
  "key25": "3NJi7xhLKaE3B6FQAwy1tmxrugKwkjXbu6AmHZvHEphcBwunQn5bX2otNMouE3uq9P6WotDuAYBZCnRpYv4aueDY",
  "key26": "3roe791Cirj1JadaKYkrzfekMpF95DJ5mvjZP1Hscm6nCE8rPPwCKXMP6FSH9zLHCMfuQqZjt1PMX2N5cyCaA5YM",
  "key27": "3cTw2tZwWbvHULSmQbUHHqcotpKFEzpWcXVsdnXTPWZrgBq4bjdQv7B6vcTHnWJBXuupjNKAvud7JR3LPvTkbG4j",
  "key28": "4whekyBC63mzPBwg1nx9kCLU163xFCW55qDz2KJecZ3PPGZ5UEc5MmcD8E8QXjE7RuLLZ6czyTHqPBxmbfkYFtxr",
  "key29": "4bNmz47xhv6vitMRaDP28CCX7nXMTB93pGmSTj2hJmQnZWgMC47q67CsyUWH23n3rMZrUmF7t2ghV7h86x1h1E3j",
  "key30": "2KhDWEYKvkKVHHTJDxogf8pnXdy6eKxjEnovnZYUoFWdGEBDPeeNoQZXHiN492DNJYhmdhrgSra5xJNA5jUN1CFj",
  "key31": "298pBx3N2beULFtAswj1jbDdjNT3gqu7de7PerwigLWAz2Ufuu2iyuVhQfTF8en6ZcF5pzzw5aFw2vc4mHjFY5jN",
  "key32": "5Sx5D1RwxypA3ctdwoTzcet1zt5RjCgGyYPjF9qaf75M6mJ1nEsx2nBar7cR2AYGQ5w2v4vyF2CdpcJTmJsgrHvq",
  "key33": "4XaNeZvJpyoGqckrfCghCpd8HQtRBRBL32gcGpVb389k3RvMFpVaRjQkXgQQ8Wovton9L7fC4TpKtCKuNgG1gMgN",
  "key34": "3QTqx4ds2rBgLH7qSotkRRU2EK95FXpvJv7a4iW8FG2tiLYwbFUzYgXxwbPvdyYYoY7vfozvprquT1PkdTgGQ6gu",
  "key35": "514rm8UxrGFCvJuUiZBPAvAo86hLuReJC2BK6DAqAUFaPnKCqMCfSh3ZNZLpmPEXxuEBHP2ATrhjxqdF9T7Dyyoh",
  "key36": "2dYttYpvMzbeRcZKkYuyPRFM7zSLT3VZRwXr2VKbqNtfvav5cpZATuzYGmeSHPLHg3fSzQ8SHsycpoaA7nQrLaa8",
  "key37": "3gFRUq8EqLTPpf86Ji5GCT51MPddM3Jg6wd84j5dPCjR9viVoNbXR6Q5QJJpgBwq9CaKDYEfghHN9w6oiNCJG8BZ",
  "key38": "4xxq3UjofpFKbo2MMMJAP8SansCtyxLyvkfU1GMxRBGtg8oDdkVHCKk9fB2fbqRNXYRRBAcrxkSJNE9kNVxW3dbU",
  "key39": "iv5dJy3Lk8ruRLXKx7vxskyHNtWCEFJs5UVoZ1DGz9HPLoBZb4gyFGx9WUZrj3fL7hp5nYeSUB7mbv2h34X1TdG",
  "key40": "5NC9A4x1AkpGYkupzy4cyBahGYzB722Q1YzdmUGkX4qTyXg341gPYYRiWAiho5vdQmY3KkqKFdnuaKToDYLYC7g",
  "key41": "4GXXz3AE1suV8Zz7ZaxRJ25EN6GxAuedegkbZw7nZj5V4CmJB9nprDbx1S7ajbUPbhiQ3Y9w3Yym6j4ExY1tFjPt",
  "key42": "5SpQJYCDbcPrtz8hLjFHcQcjeZZZkAsyhcST7sLzd4FRUtws46VgKKKbW1sz4UqthfnhJf7Lfr2WkJKba1JHa884",
  "key43": "uVCHKLNttjRJe8PkQgd6mbjpq5PAL4kuxSxTvD68x76se8WJ5Zh11P2UTwnTPNiNxA1GtsJnAC46z2t3b9LfX8p",
  "key44": "2tQpAA6cPUrPDfnSLiBtonnWYyiJtPAGj45akNHiBLaR3geyfM9YtmiDjdNMCYnV9ME9e1PKRDLcG7chjby2ogsR",
  "key45": "5i9MKcdpwkhfZRXotGb22jD44j2NFvKQ3fGdiSesr9aHPTUJmMtmPVrUAg54tH77NxdRAju4BZJaWQtDHM1CRB8o",
  "key46": "535AmCvHcyHYztPZtLUAvgmAaj3SZKU9m9Xy9jttL5cb4mJz7Z6RrhKQkw6P61GUbrPeNomt48Gs8Lo6h4aCmzTN",
  "key47": "3NE5pMwLH69s3ijS3jBLq6EU4eV4H9zT25dUtcB1mwL8ZkTNeA2BVH5HD3hAfKkUuXkiWcZne85yWPSLiiU3vms",
  "key48": "5XrNdqmCeTrZHTuaeREeSvKfVScCC4gX9F6R54cSf9KnmrCTDfakS3mw7gdLjJyeStX6Z917A6eymd7umvCFqrTa",
  "key49": "4KVqvPndV1eAXkgEmXwrco2yzg7c7zr8AxGQGpW2V3g3BQTvHvaRFCJtwaEfyRSYcVc69ie6JZ3NyjrMHvRjVvFN"
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

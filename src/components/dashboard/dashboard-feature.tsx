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
    "54ws1RYTdJdMuoK99EfwhTtKtVo13MKrPLSyrLWjeV1nzAXNBG6iZHtnVomEeJJTEoWuSj1sG88dFB4kBqjxtK8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4uFpogy5vm527W1955XkdrnnHr1PNfrmYrMbFgdoBrLWYoJrqF7yo43wa8xmPSTop44aE5TbRUsP2VxQSKWFwQ",
  "key1": "3Af6X1cBbSUX3MuMGkuJjrM2LoGJDA9uGJ3zcBcS8HUVMWzXgWNPxRC1cZAFRHBpiWhrfjQL8xaHYxBwLj13bh5j",
  "key2": "39Ze2EDm1J4TdEGUKj68mAmsJ2VEAyYATZNcC7p3TMH3XMKXqaGvqFUtL4MDApf1X3eTNnPtun1CCAyG8TddGX8V",
  "key3": "53WumQYLsc9k1JF75mWKjoGV3Yw28vnEqZc7smFgpCCFi4JK7KVpY6q8t9UfBqAEPPn1TUvdbZ3PZbEGWbYrLyXx",
  "key4": "5xKeDmAyynvwmzALabVLsr3NsyrNdYeJ33MKD5aJTWKroS8GJr5iGQx7WPo6XV4d1RGQUo32LiBrkaFPBpEHuWt4",
  "key5": "4khnAMLwPhfM5XocPcYzafqzn3dfvMrucvLEsdrRAWJaZ6AEx6ooWdiLJbQNnyv3k7GKqLkZZnynVmnnnbSXcT5N",
  "key6": "2Z4psKVAuGGgC5yB4DLVLWLJu55BNHoPaamsMSKfzsxNBCvaWaJvtiXMCCRK1mSovgxLZ6Zum6MFckph6SHR7Nfz",
  "key7": "5Bzt2yrhPUc387DhZVcPG8wFNuJ7BebghyRNQnxT3JyPbrRRFa5pXvsT98uVu2NPcYJDPczy8JKLmpsJK9kJLhuR",
  "key8": "uS4EZE1SXNXMXck8rLTaSMR9fK8v58U9ZbyBaM2zH8qBkiDuahHZLpDrn7ECoM6qXuudn1xfix34mkZAxKRvQrB",
  "key9": "4hjP24USq1Lshjf6RGdAbcoQffRT6ozy5gse9AjwmkgpMb81qeKgiLgjkLvWTT6NjQVmw1x6bbvxmRtn1vNgLwij",
  "key10": "4C2UdvAhJ6A9hqiYVxzLkQavHFWbo8D7pfsMPAhWpy2A3kwJqVCtZQxELsUVXysW7NUNgm7DGXG9NJUqfgqh5eJ4",
  "key11": "2iUtKnF3BPfSnw14wZUcnAQnSV7Mf7cMDviNgeVnJPjpbJHKE5e4rXXxhYhDaNqCHE22LooyYQ5aKKukbnyDiTS6",
  "key12": "2TGq69G6E3azZKGicHDu8q5tVrP1c48nC3HhK7DYCtZybY7rvP6k1taC7rF63o8TAVgZiaUUmqhbnVgTRCKXwvCM",
  "key13": "3apRJ9qkhbakxfbnXGn21QrUJe6PAFo6UXgQbJRLBqFHjVyUeY1icCgEnUxrCwjWrZrWinUCdFAVUwvr6zHEtbie",
  "key14": "54YTctkd6hhdqtKrUDnNQw8eHftV7CX28kfmA1Y966NDNcN63VMKhJcVg3ivdemyP5L1MzG1T4XFfRu1bm9N9CkH",
  "key15": "4A32V2yFGYuzKZ9orzfNahY4fBobrC4r7B4YWjxUr3P7mDH1vUzUjsTBoQ5EGfB9Lq9Hdhuvswq66Kc88bL34t4g",
  "key16": "SYAxRNWQy7MAeptE4Fqd8j2TmixKQ3CAtksfKpyfonyDJQu5aq23yZnkDNvoxkHncPXWLRQeA3vHXphQswV3RPr",
  "key17": "27FVmNA4rqWwfG9CVGuY9t9CDzh1L7xv2j8QuE4ZxwSj6z1URt1FY3EVseyWcEUT1Nvt3Jv4hJZKhsJtpFqRP8Kq",
  "key18": "5jvpmZbUvZXTaoHXpcLy6twD35Jc9B8Tmf1iGGGQ8kB4yM2Tvev2mNRr4h5KacfNHqg2EmH7zHYLNRPasyVCCYAk",
  "key19": "2Zoka2CD9xxXSqvTGBnESWCdrtvb5Fd41LBRmquEi7yXbLjx4q7TKZaT9GkA8MLSrsnNKJJZv3yWzf596ZtxXgEz",
  "key20": "3zotMm3jJG7boTWhZpzzgzGNaahfEzeaCTTYZr3338rtEWitc5WcC7jtvQZSTYsZVtDaMcwPEqd95mVB847Ziwdp",
  "key21": "JS2grm44BZth32CXXLpQrvdtmuJB3KGr8ZiP4ZuFBc4B6SNXXtykUcHJuFLKY2dqrJtJrHDo3S79UWbCHahQ4WZ",
  "key22": "2fCyqzWW1JHuwmiypQNW9MkeqRdeYs6wcXPe2M3u8HHr7CdrnPXMja6urgABbSYVUsmoFvbVwwY972JCBxum4MWg",
  "key23": "33gvr3mG8ovGAvGM6ib6VoWD4VTvi8nhzpqRCdSYXgBVhSFC6NZQD3o8jvkj5m2yQ1XejV295V4MUd2L2sMR6eJU",
  "key24": "4PUwqg4iEjEy4kHtDtwDeMQVxrYRsgFJUx4zGhdtvd8sxR46qUAahq28iyJS7CG299nGkMFa659DZJTZw4Kzr2uh",
  "key25": "3sGLR98jAZBvtgwK2Pv5duY44bKUVrmD92Q52GsLyUTDt7MkV7iQvfNZUuG8kSo7MTseQ2rvyCtxcCesjLXQ2xu9",
  "key26": "3mDC8wkcwvxtTGN6GxphKzVuGXu5TG7yvdfYgYYJ7QwXfUjjM1V4bw5YnGXub9KojUgeAUbQCkSzwkVdLS1YvBc3",
  "key27": "5H1uMYfckivXQENS7w6fmSSyZUMJHMfS8CftCQH7xLKvTu6UqJxobL9SPYHdFPjHujtqd9FLuwaq4UGTCeac3sks",
  "key28": "3mFsPJDX9gbp3dqTVAHUuvCxfuo4yQNknJmSwoQsh4NNpcD3LKcmCs6dB7z6TC2zCzzRuYUR4irsh4xuTU8dm7kj",
  "key29": "27JD49qMC6dVYKrGS2Ga5A4EdcpqXNgXV1PgggXik72jLKbYRGB6N1azvksp2ViK4QdSEDDi2u44CQScebuEfTYL",
  "key30": "cdokesDQomCFwNsG39BezBn1D7mxoMUWtGq7w2KpB3oFNRnvDX9GhFeKmbvy3xLLEFhcddWu4wh6vMeqdjm8JD3",
  "key31": "5QJEcvRfU68sq84j1c1n9LhBfPHgTSCPvc3DrKQyk3fDGNh6eptWuDhYvTcDSbprim14fPCdXDFvikg8wjWXxnDW",
  "key32": "2pKFT6migMFrrBFRun9fomiKAtiMVh9Gst9EEkd9CgAtZCV5JJ9MN2zm5n4JiSA9MpRWUGWQirqpoKeoL8nZaU7s",
  "key33": "39HbZwhCzopk2yoDkFiZqy5uwWZf2QS51WBKeSpbLDMWiRi69rv1BbM1fQcMzCW9du8VBuiNPJZRwVGxxdf9hEK1",
  "key34": "2Ccpkw6Ksobpi1se17MMKjMWVEn9EbHnVXrPx9tAq9ASmyHTVhmDxY46PcbzPkDiJSDA8Mb7w1jXLfkSFf8LFbz",
  "key35": "2TZp3R8aq8R75rhWLRx4UCfUxMcyXPesEAAEcFELyR38gLruxq8WBc3f2SScscLQtGDTBnkpt4UuU1ERGRPMyAJK",
  "key36": "5tEh42KEoaRSSkD67GAJuf9kYHGfEi9T32Wqv6USK7a28KouNsMuLepBJHHcrscSKVybepNUtgq3naqqMXZCErhb",
  "key37": "4pGGdDTRJkLbUXocMcZ5keFZwrRw5R9YacEik5dPFUGSNPDU3KhS2gcKQiw6Ldoi1y5FDNaDjW1FXsMKcfJi8Jwb",
  "key38": "2GXnqoP5HkkqyDeLovCrdmVeCnWbLYj6aMpkJ67ykwEk9aN8mQiHJ4utmQBcocHHRWqzdPdNB33X6Z9RPzzVA8TX",
  "key39": "25YkFQ12tDzXJ5tADgpSUGoUUyDQVmusxfC3dYxFTSBgESgK6jh7rpov2qWxuF4zhxuxTZE4hCsEG7B8zwuFUfEV",
  "key40": "44Bw2oorryg6t1tGrmfNzc2YFm26bwfiAwk7kFiX4ig9sKfva4YLMNjVMN9vKwps49vz1hyeLSS2oyKZQvA1rtGG",
  "key41": "4c1AwgSY2nJbVmZaPpcEPotn16VCoymTZwZJygJKkktkVU8h9vbZkE4rD9sPVmrPQQKGJ7WbZekSeX8YDzAumH6i",
  "key42": "42Nu2N9bdviKrdVj4u15voq1qqK7NaGm4ximKnHBDUcd7FNgZjFW37Z5jvExtvAydgDiopA9a6kn42nhFtbAUTGz",
  "key43": "5JwDK3B4mpt1JUEBDbpK7fEbm1FgvjiXVtcSTx2RKpuYKPSXLBTnXPKDZJfUBaxGnFE3oWpTsTQ7UZTwNL9DL8uQ",
  "key44": "673Pw74SGGguFEvqCN4GBw3L8Q8kUzT59yUZFbg6kzyAJtmEJvcnRUbrF9CjhV9po2gHsN7aZGTazzcELLAnjK4w",
  "key45": "5VBx7Wewrfh9fmzkJ3W7srX62zUsNEJHi1uCpg1gWZ3bAMLZDfwChM3fvUYea2Vdj1ftf4drYxcDCyNyzbSmJVh7"
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

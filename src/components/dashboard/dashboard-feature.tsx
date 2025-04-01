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
    "ZwqcAGBmqYqjHSzrZuLebU4jAcrda5mK7Kxg8F7kgiATJC1Gj2AHJinaMhGbiaxwWmKiqYoogs8A8pgm7REyof8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oRDgX7896bLseoAaccG2oLB2uFVmRTrtvtGixZo24cdFCNkVbp113h2Sv1KKXT2HhkosgGVYtvSwwg2bw94zdJv",
  "key1": "XRHQhJWbZ7MQirDbXJndtcdKfKB68KD3Puzb1Fa7goSe7TwwL9QheJy9wCYNYLoVw8hDstpYNW4RYGDV2yBBAdQ",
  "key2": "3WZtDPR1zoTBBDPEHUUnctVZSEGZnbr19ZvKe3mrviRbvjrth2h5NhkRqKQY9HTEwsGGNBVKBwyZGDLoMep4QNeS",
  "key3": "NZaU4dsLYYzzChLKWTFaMAm3qsqCvRwezAxjCukZuW5QNsLTBVJRK6run4fj3iM4EmkW3T31YbZCBkxqaLrJdsA",
  "key4": "5T1jfY7BEPxoaiGAEaZSiXgh95MMTx1awL13kqYMsAo8tt1RRkBzxM8beugec1ux8ojAmbR9P63GnkyN6BkM7bF2",
  "key5": "31cFCxx7nYD7WykJVfBe6W4y41uMiRQRiGaWdDxBstVLkx4yDbKsGwMkQgnNZkUryE71BQnStTBGmaYHMYLvGbzB",
  "key6": "54RoZJsiUSjwFwaiaLtZXBPXsa6HKfPQJY1riqARhYiQ3wpwGAb7D8iJ3ugsysA3VBRpNGJwqY9ss8dS2GxmkJHt",
  "key7": "VFtTzDUu4ZYyrncAeoQt7J1smLvdAFxaSrSqxqxaGvnojpgdKH7ruEiDmqojAg26wDScFswG7uFdJviQWoVqNNi",
  "key8": "TvhbMQ8vZSkQTscTUNjQueNUdDepyYbXAt47ZGfBVqtKLLfg8wHiCe4D2VHaAGaA2yWXLEVfyvyzkePFUokLPEM",
  "key9": "5J9BG5YgDYm4QyRrFHWbq5LXL6drVmTYD6S8MfKGX2U5YjCcYBEwnV6ZeXjc3gHEthynb1ruzvrDETVH8y8g3bcv",
  "key10": "4wE5yA1E3GNPtgZfn8qbpEL6p2vkbMFDNyoYDXwpp8V9pUwGpBZC5CMw9d6A2iuHenGzGc9XdMHxhhyKBntYUg2X",
  "key11": "4gTQT8nshN8g6PpTCh2PVgJitvA9xCPARM36wQmQiEdWKcTkij6Y9JF5JhcaP9Z8Epg4TAiTJxVBVw725TSRXxYf",
  "key12": "qfjR482HyEKrgECE8CgR6ZQYydzChZoJmNC3DNUgb7oNcfqP4ACDGDGc2vJrEDAcKXn42vcaZiCGiDGKaEZNZNE",
  "key13": "xdbvoRuiZPuEvSBtTjbjd91HiFxr7w8UyzQnwqJn11FvaFpb7BX3xzizbER4qE1qTzHXGJz9TUNmmA1oj1ukA6Q",
  "key14": "56aCQ3ofX3GhKEc2RH6cptPWcbsmFa4gh887Uu4UdsUBZfebi6sQseFf37qy316QA3vvM8oo3yYqgpoQbPp3jnu7",
  "key15": "2wLg1nFrcwps4CEEgXWpc6A6WYqQRz46PeXEmhqYxHXc8ZmsY9eKQTtqwouTb5RPKMdmCCEtUBMmGKLdLU6Rn56r",
  "key16": "35aJgSHPjykvmthHqn4Mcv28boPH4CbEMGqH3EDU2KJdLr3gZvNWPrQsRDmA2jdSLYURFCUrqNx7w26LH2goyw7Z",
  "key17": "2EStetptLJ7ch6vt7bKC7kyMpg7Cn9oMmyAugBcQDvyMW5NMQxKWZGSRporFkD6s6SR2m4u8DDX9Dw8xYp618jmv",
  "key18": "3BaDV7FZAuc8ciHQz9G85huQsTzszhyp9G3XGuseuqUCtrFKGBGG5wruzowXHApsbDussSvH73Dd3fRQMMT29o1V",
  "key19": "4haArt6RBeAKyDwtCHnicvEKWy88dSLKdMpenytmJcrmFZphwHikY3Su1PiAKzyQ2jvj5mc516Q9XfuDvFK8NJxN",
  "key20": "5MMGsVnhZcdVDcZD44ogUbxt6m7i8h8TZLKCHeW3jvfSTrBZxCrtfQVNKJE3Eo6xrz8QAfk4nRLKeoh4V4dXBRgL",
  "key21": "4hQ17MS76BwKZbaWx8h6yUf7wkBff5k2S3AsghuVqtc6rC8N5q6LzuLZgis35fAWyRS7FYRAS95LpvriF6u7aFgc",
  "key22": "2ZKAVMDxLGF8UHYhFBJPvzFavzLuiWAK9SfreRcJnkHCvtY2QekUjA38Pdp21LSNiQiLcM6KrnNaz84UnrFaUynF",
  "key23": "3qQ9dKRdNB6UVjgGNknfN6AMzjhU4mbsS3MFgkmienZdNbuEUZxpFN5SkHnHpLnngxKp3UrYmRab4ZzH788uU2iA",
  "key24": "5VK6aZckxZznrc8GSxDGayBorB78Nz3Ha7bj1WgfHgHsFoS5fvrCEtYjN8UMVPZ1yGU5cRo5ZFcBmffejAiNZYWX",
  "key25": "5USqbgSn6PStAYopd98fxM3pmrHjAwXp3wQNiP3ssSpMkvUsL8tX2145ZJyaiXHamXg5PbN2FZJEMDj83nzQjCMS",
  "key26": "5oEqFg4QacS3Pchs12ZMkEuH9jJX7y1sjTFc2Rgeb4F4kZaf1tizqB3tAtWCU9WSF4crKH4DwuWkQoeyBzbB7RT6",
  "key27": "qDZNj7L5cQwCHYmdQ5jdA8AbNcewDLQVEXAtJmGRicCPECkDPv4RYQfgi5AudgZKKyX7K1obNGMrsdwm8mL9rQM",
  "key28": "2B3KJPNr8fRAfumTTmWPyKxPMVBXK3zZBVRchhRVpaLpaEttrecmrMjUWng4PDoLb2Wzmp38FDPQURXaREoghtsg",
  "key29": "55XF1VtAWm2m9A9wDCarWph6bzSi4xptHGP1iBygXphwRcHqEZhTNev4SJzYXowPQnhw69VSEr5R2pSqdcT2ZPfR",
  "key30": "2GnsuHoSTiz8fJF2vPmi5MbhLWkae6CVqpJai7CXozAP43cjf25qn6D84PuTDrhekuNknLrwtCCSoX7roeNa7wRH",
  "key31": "56ofw19yt4Np26upqD32NHNuaq8GNCpLGb78H4jjB6pGeJi1zVv871E2bUFcHddh1Noq5Dq5JHrY4YXoyVHqQoMi",
  "key32": "3SUtWob3w2BL2HKSDHuygDZbPvG816FjjAC8cpxALsPx1Bbxenyi3bxobFuPRnaWESo1KCB2HVFbu6fUKoC5svjS",
  "key33": "5MS3SepnpPVukhTSmdNdMGHbyp3hVCHHojUzSmT3Ykc7uyPcy3ovzQyc3jR6mVFJdAShMMB9HnmuL2VYrpeSkQT6",
  "key34": "4rNf3j1kZCj1zQ9jL6U3yC5YmWKhsW5U4pP416ReMCJVN4UHEpt2MxPfzCA6HDvv5jLbUfKDodjCyesxDb9Jo1dn",
  "key35": "5pUts9k21t54BWv6VDVTfxHqBCp7SkqKE5qiHtZ5LTS9BrkYURAqZEkuYEqkjCD1xEYAwPJ3EfE2kssELypdSdH3",
  "key36": "3DicBjwHzF9UMPvPKqqdeo6JUCWfxMJnoaUiEDDJbmDM9Qdp9qZkbswDZwjMRs7Q6Eo15hT4qhgJHWH2dPybfLdB"
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

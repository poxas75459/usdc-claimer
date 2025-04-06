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
    "V81B8DRu3jjD3YTD3sN5pksogKbo8JS4T9pDj8n3MXbYepBUAPAbsxsG5MpKbyFcB5RXw6ANUjEUpV5P5YhSJar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWx4J5iTNmJh3uCB4Yx7nZW59WNVjAwPVJjKpptmgynYyTNPEun2nxwMDo8rAWjTieBj1ijn2nmNDEQiChKmqQC",
  "key1": "4QBXLZyCFHnjemVZHYkyLz3Wx3w6JzQckfbBazCDfXsVfYv9D9i97wkdtqUSkt6s4j89FBA4c1pQuzQuUotJ6Qz4",
  "key2": "DjxYvzYZxf6mMw7HSnHhLdjvV93PiR5x1fTFCBLGzQB7EhZwZTLs27qwHpzdy83GBE9cedJgvjs5Z2tCazy5HnE",
  "key3": "RskQMYQHDQfuR1kvwAj62Mk9MEppCu9P4oENdjWdvuab9k6CVQvtPvPfVr9gnSQiDq9jVM94UwyoDasvPdkskCy",
  "key4": "3PFBuZHmsVjUnDuXKxtAmmHvNnRppkLL6CMnAwkcckVGdvtwcicbcwpwxmi9vEVrWW69jyr67nxPL7Br78umfvxf",
  "key5": "2ceQFKNm9x9H94rwo4f1iU6dqXe4WmvhesSWDt1P7Snv3B6pk4XztNCAve3NzYJC8TpfZ8i5AA5dzE8uXzjKP7Cw",
  "key6": "2bZgWT15pEeqgffGyn2y1rxsM5smo9HpMfqu7cxJTgfjJc6fnuosVro7kCs4oNThWDfApsKXySF8vBUqpzXGK8KK",
  "key7": "654LG99SLJSnE4LSokz6n184cvowUAHDBiiA6UFsdnnMzrQz4GCyCEmX31y6yJA4s1ajvdhjfXCXV7qgcEq4NUdT",
  "key8": "2xEvLdLRrF6tvG8NqMa7DNsF9F39yGuWFmfLJg5zc37PERpWTrFzmK8meTkr5UcCxW1dXLj4gjKWhbnxMhP3kLaA",
  "key9": "2adv3SA25MtdU9A7LnieNwsVttLdsWudVnuBDv8EhgV2qwVwwWS6a4qC62xRDH3HmB5Yh8NZAqeqEBq8VKtq5kXM",
  "key10": "3HYtnZkxERk5BS84NmK99nBF4xPisBxHwD5cvogBSWcKJ1WokrVA24Td8uRC12xjtt5mxNwyCu4mkVxw2ZjLzL1C",
  "key11": "2aTmJkCraaZsNgcdVfPZvK7nfTC5yjTnyyuedNYm76RsQW5ci3DGuh9xc2f3RSuVudvjZoaNKtm9qHMCBh48FmEj",
  "key12": "2LbjfyGtn2qVEoi5LxgTHNiub1azRRmboSHue3zb4m9QnoutHpJ6vUTu5Lm45Bc32PJN3GkrEGZuVe5Ek9GDWKE6",
  "key13": "4xGVqBCibhz1PaS8xzTAtbfy6NGZedEukPvm9Nf5sTpVKSVFgbAFbU35qzRnX2e4QAS4u3wCQMhcqd8vbbqY3mEz",
  "key14": "438UYGPxen9afYy9NT6csLwf43AWbqg9er5GF4sAZ1BpFybPnro52GNT7zZsFDmbJMU8pjiVD7WTbDfPt6f46V95",
  "key15": "2WbPRVxjpBEE7BbLtSA3QjaEqf2bNW3qKgfTg9Z7oA3BwrCpRbNK2X3KoRRSSofkGqJeAMF5UX6pJfdPkp9HNCSB",
  "key16": "2LLRzYgRoR3hevub3sm5F7dzp53ZrzZdTsQXaczHpaJXZTQciq18JdN2NbXShKQVk285v5U5w8Q8KXnXR8sQwUai",
  "key17": "2K2m218VoK4Dv3cV2gbXmHFB2jahmk4141poXWRZHNbpknCv6evprcWjdYHPDXce14aRLUEG9LaAUFyRMcTjE9XM",
  "key18": "4e45yASM3cbae2TmDnRdtZd2augAeysaJphMDM8traFBRzutc4R3fu6TAa9bpw6RZ8Es982MngZcc3QHYpRB3Z9B",
  "key19": "3LHZVNeHjbrY55Uh8iEkQ4FC2JUY2m7stsiiaqq6MPSyC2GTQx1qmLj63d1gpUJBZRaNo1RobaNtK7qsq8LidPS1",
  "key20": "2jmaQbC8MoPapyrS5ujk6ihPoLbUgWzSykYcVN2eNYj55hzU8jUPN4nM9j12dqn27hMbmYaaj59mzB6ygMQ6GEjQ",
  "key21": "2DHuyyYe1U7fDv5Xw32CUidsf5yhnD58kmxN11eMaeh6j4AnrRb7LdC7pgXT7WDzdeNhJRWAFwNrRdgQV8NDtRhF",
  "key22": "3JN6ZeNsxiw2dR3Zuv9q2oJXJ5zqdT9ndAoYUxcKyEDS7nmpKWKmN6eHXuX7ykgjwrUM9ffCuBGiAV4Fgzza6YaN",
  "key23": "5trZYSWZQLvZwhqYv1KjFwJptX8XLfMR17NQep2sRHX4J5cckbLcaiMeA3dBQdRTNgQu2dfwNZC6hrv2BDjd4VWm",
  "key24": "2rm1im4vWsKv165rzmESgE6SXxPYNyk3Uu6mCDfFhxb8bUqrDgR6N4hLC7DPm4HE1DTWzLku4XQ7cKiacQbdyMCL",
  "key25": "bJ7eQ1qycw2Q8RwrL84HjYjdQdjEjat3tf97WY7GkboQsyzzS3d6nUtqVecNnMv137vKW5swgYaBQfViLtGcFxo",
  "key26": "FLtwS7PNcKUDX5X3cAX9riMBC7QN41GwFoWPGJCPAC2UoAmSuP58QGKUP4a4t1H4C7t3PshjojTLWFowk3idr1H",
  "key27": "4fbad6ihRKv3PnMVYvwbRGDBxkWEXGtfoniXcmbP7kYMcBujUQD2mi8DYeeAaPWEPpaixVsMz91bXkUW8yZqnNzr",
  "key28": "b3tTpz4V8L4pghFYkXCVDmEnoyvnW9m4sbpmqc6E6gE4ndGWcXgS6GKkGFTWR1JPbvJHagLP3afn4Nz5rEvAHmW",
  "key29": "5Y5X2HVMED5VJ4FHDdipUeZPxTM3m138v2Va6deCfsw2MhMUv2t7Q7f4MrMQe29XMfiaCggy9hE7H6M91ZWZCi6s",
  "key30": "2KZ3q9Z83pajXoe7pm1D2exFQuKaRdrjjyNBFdtbwkAERowjRJMao14XXgBfrkdDTVvo7xdFWjbfFp7TFMxr4TDn",
  "key31": "3Yy5VnmQenUjNMwKmHwsQ65iSzNATei6iNTKdkYXQHoLo2TCVMz8XZdz5ikSkytqmvxrTMqdTkZMPGrxncusZaRA",
  "key32": "4vfFS1z1C2AQS1iEB5xtRPFf3xqjUG3YeSziZBHJ1GcWXdtcmCa6VsAYwini9ScEgpQhp6oxabyumyT9NtGtg9ot",
  "key33": "3LHEeLkor3bLF5SJo12p8C95nRLi7osLcJgy3CT1xonyztsyMc5jhwWMcjvsvzbom5UWnjiTLb33NNKfnXHtZ5U5",
  "key34": "3oKsyvLz2j1WNM1rwASZruNJd3SSRHCQb75fNUbgJHkzRyjCdUeDm4DppTt6ETfY2MTLLDXU9DJBAcpcs3YYhz93",
  "key35": "3RqkYKWkzoZNDt1259afsCzwM6fuYzCMN1zi6qZ7vF3c4NwCVNrWTMxPmXtvCt2Xc58JcC8Dh1qLkBppA7RM2Kjk",
  "key36": "2t2WGd8RzWvd2EccouaJWwuvjWUJ9WKeabdbLhHCj1qek2gFGXoqD72fXxatodHyQRCtPoXENqv81RAnHHYwgunw",
  "key37": "psBQzVb2qmvinah39Qq8LyAiZ76VZnkWgEGw2emsCn7KikmmLjo8igUoCMQgWpncwSpLJ6ci3GzYsrYSLgnztcQ",
  "key38": "3tu9apTZdkM7eKNz4eDwnhaUb89BG4wMReaEVo7PZ718KzbmZ5BsCixQ8M2vdYMN4wUJyUEtVbQUqrSfcDuEHPB4",
  "key39": "2VHLT24feDAPbweoqqdKC1gcbdXtn5oK1MvoCu4m5ngkqLBmBJiVjg3LsKRek5UNgmivrgfTu79z1Jren92FHL8v",
  "key40": "3ZqfS1s7NWb3vbkapDSt1ihimPVtYqu2mZWcRcuJ7fSfDsWJUYT7VoMsQLKXwpLT9xtKMN12Qrx5e5LjsVMvwz7B",
  "key41": "YMT8Huk6zTcQLDPrPFgEvGG7BLSpryX28ZRJ4hXNu5CywVa23XtzExV8SXKATMLBXiPtZ1W5JEJ7xHuouCQT73V",
  "key42": "2mYHDSKARZziTEEhRpTchjds7zBxb1uGUdEPVMGYf49J5AGXYqDeo6aEBKvUE9VYLwQZfxLNy1u7gowF7CozoPgs",
  "key43": "4PdkJez1dEqpTjPGQM5juNoH8uymuibsdG65AGF5nCTrDdm3BeBouVVYK4eARZmh8meoS9UVs82oPBwicbPbxbpf",
  "key44": "2WWb4c5zQaqrXGAELagnKxD2XSfyomZY23i6oHEhMwA49ppuYadHAN2fmqPh434EFwYpAPhPMfExQN9ys5rQ4Jw",
  "key45": "5qgFJmhxsE3B2qpiZmWmsdKeCFXB4v7KTeSnkgo6E1QPoga3Grjaf7XAMeWPcWEnEoKhaeSgoTFxEscXSo1M4Zjt",
  "key46": "XU18VLLf3azWx4jKpo2Dr5SCPCXL3NLkBEgja1VGmBVPWKonTLfJHcFJrticfXTNBaN5K3mSnixdqZymC3fKmJg",
  "key47": "5Ugsaa4rvD9gxF1qJDJTKahfpP6XV3KfH8r8xBZKQ17xm3QhwwyCLhTRZL9QyfaFaLkdAYoReKU3KUh3KhZrxpvQ",
  "key48": "4Yrsz4168nAEvy4Bs5LnXCKwDHh2H5jWFwgNCAPM2FcQ5rWfUB2R19FjKnTfn9MJk4CRAus8afFWA8BvLzUYdy3F",
  "key49": "34XBfcycN4T1Q5ySfie3cr2tKvFLRRXBCycNVVnTBQz1ySH64KZe5PQ4uhCTsDqTsHn68u5diVzgb17uEvvhPMb2"
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

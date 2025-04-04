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
    "PYqZXCjrnnp8bfTYhCYp7rhVzEAYHcjDDtDsQ6GTKmuxDYbftVNAsYrBozGgrsYor4Cpmkik6qd4MT4prDvHxMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haRftcBwG4KGtNd8T2Q6EcAnFKq36gqScrXdrMXwP1MyJ9SLFGW5bHhcesP2FfxstGtEgoFmc2ZKB9daZddsmvR",
  "key1": "jKTP7i32SausRVvH1JSaWDL4doazKmBr3YQBSakkGN9uo8mDurJLzw9DTNv2e3kNQCEMyJwzB3te42kgGwiujq9",
  "key2": "2ehEiEEjbs5q7KtEq8WD59DTznYb4UjSDvcgFwFspCgSJkHZAZ6h2qgYkaxjZVYAA1woP533X79haBmNhMGyg7GW",
  "key3": "2GwQDjehSWUUmnrV1HGYURGWkDjTNE51N1isJFh3PjBGKDJ6XHtxZ6EXkHmaJJTQx8r8fC9K7z9TZvTPZDaNE5kx",
  "key4": "nh3FtwQi9SZwPdXTcrDbz3ixTXE2B2zS5JMvCN8XZzEYQtnWjKqeoy9jjmAoJdxBLNELbxHapiNxrxMzAyekCb5",
  "key5": "3PYJ8ABA96egmi3wutz3E2s4SN34nMGXNgMhVAGmBSzs8VGZemjPQ6GYR756wgo2z11EhTBdULS7q2r3UPJfFRiz",
  "key6": "32VBwpUY12LnoAsi2o6nEWWUkEUs4KB1GrpjS6R1PKrQrYKpTiN26SvZEL52QHaoFAu31eRvJ5ouNuS981KPSKD3",
  "key7": "3mo7mnynPZjZDtA5Y4oNG63VZbavu7NoR1qSrX3k7rgXBvKDAgHegRq2z1W3iZoUeWNwgFWXDnhRsTxwy3t7ASNM",
  "key8": "4KE58hgFfMMGqSLQKcqCmeYJ29VKDAxXuf3TEFcCpvpxM1P9APgsCUG7QALY34SsSLJYH1Tgq4F6MtAGcWWMc88j",
  "key9": "48hd6HpyoqEdk4jsxfbGWwtZjunfcUJE71uKybgnp4N9NyS3YhYZVtjPy4q3EKHofw5KEuuuGgoBac4YCsLL3Mr4",
  "key10": "19Z9mUJDr2EJNkKpwL5WisyreAiEWJWFtTVPoNHr7MmBoBtP3rVpJGzxvVygsRu1oMKWzzHd3cMygYjS7SMNEPc",
  "key11": "2oAK6K5gPVtmKz1gf5vX5tPNQFf9ZRwgPgAg4vzUc7WPNGmhe7Aa2U2ApAQpwoGsfGc8muMASuNCzdsTYGFwQz9K",
  "key12": "2rUP7w5EEo94dPBqhUziBt9otNvr7j7qAnRYNNeec7CgnZoepewTurCnf1zMWGGHes2bpz2yznU2kXeG9mWvuqtz",
  "key13": "26hnseTaBv46Lswu3fYd9SKVJ2YBARAUjF4kZXV5oBVq9JZQcbsifvAXbKmxw771YDSpP79ZTbGZY6eT5XPxEBaQ",
  "key14": "iS1gKXJRcsieRKRsNpBzNaTJjbHNn7naguKJLqoSmyYvjUH36Wn3Ngjb6hDCZQED58LATmVWgqDCqAFDijAtqoV",
  "key15": "3PXXTjCrdZnNDDsSByC5P5QtpesEjkff5nA7HyE2fR5pBXmaSsr6KN42w2tUjhQRKvTokCTbPQmHZKhqDqJLXjVN",
  "key16": "3B3PbQ3Eq9Qc11oenxpqGkjJSurGYEaFdi3PxW6U5jiG46m346NnQRPqHmMbWgfs1FDhjKjyihNEcofZHpXTd3B8",
  "key17": "28uFLGv2bb1StghZNhu4aFJws7vzMR7ioQqg3RBALmkAGjLTy3AcgSHf9KuckPojiCZjYj3CiaQRP9XTBDd8qCLj",
  "key18": "4yAH5xAu7NT24C4bgZYJDu33qkiTN9CQfcY7gmRu7N4dwsZnRaPsXw8jtybL7wbUZVNrtz61q8ko1mfyX6LrFjPc",
  "key19": "3LbWaTyWJ1WH6T8jA3NMZbWrSBippe2ekF9jgwhRmUJSkDhK4uTviYG57tXiQoXwygQWAGpjdnnu1hUFwd2LUTHi",
  "key20": "4etqgsE12Dkyc3oeaQkt6BBCj7xcw2agqyC3ngjbpwMpxsELVhR516fRedGeNeu7wxFAh7CyRZcCv6tfrN6Jxnjc",
  "key21": "4AJdwqG85onSKwfh9NNq9dZTB3tt39p3GmRBEfKVLwM3cuAjGA68Fmu8DS417Eo5yRX8MwiqqrHkKFCd8uMXp75R",
  "key22": "5njFh9jeF8KGjkKyxMT99DyFti1oHggB55ZcpZKoL77LU7N364KgsoizEJCZNNzseWbAQvE9V93CsX9UU3KvqhHm",
  "key23": "38dzCYhnUaromFSms6xUXfGSSHF7NHhRgG3kcDyb7x7npz5TFEpVAHMDb5WjSU9uTEk4azBGdEs7n3VVJTVBwnnF",
  "key24": "4Ldg2PeUCuCN9aPzXHgxZuz43SoQBya816x7Hpuajkv2VbRmv6s6w8LHckktnQucn6hGVsUFFtcFbqDSTrcQV2zK",
  "key25": "2uWoDN9WWZe2YneEBUriARa3YHYpWZQmYDNjzPZptBVk7hiPcZaFWPsKMZpk6G1uFfWDzxgpgQsQ4z6rBSdBwHkT",
  "key26": "4emeCAyn8TSp6zzSz8d9RwUab4XCkYSi1fkUVqdexJPZ99TinyNXebytyYFAkDmr6FuxNZ9751Mr4Dv4wcnwL8th",
  "key27": "23BznL9okEiNfc37DL2AieSmHK8LMAbuq4s9D8zmngKoPjGcZrJrx2iMghHZXgurBuzRb7vgCYPBasRbnt1X8kR5",
  "key28": "5Lu1sx6AAjaGBPkfUqgUQWaYuUYTmxaynPZvv1XZb8WZANLMcuSF56JLHMzoNbz1VTYR7wsqihqUMzZgJTuRbdpW",
  "key29": "4dngLx6PCpg6DRv9jD1y4eZYU3KvQv9qbRYGSpbAHJKjet6DxEzzpfMmtYiuGSgh6oMNMjSVm7GU2r6PhkheAiKB",
  "key30": "284NHRZQdsvoZgC79maJBudHnUnvePLZHyfP1sVCdPdaeVpK4PSJHZyLkzjzsJkxf7VDCGjemBC2rejrq8Z488pz",
  "key31": "3g4y2QV4AguvDxGf51aLoywQDFMRUTezharPnS2uXg2NHhhUzrhi12614sHx9qJNZU4nQoi7XoitZfSY2G5u4Eck",
  "key32": "5ZaeYjbXfjUierWad8RcVCstYHxZ4qsMMfSBBuDUViNoAwBXgFkrvidWDN4PqiLux4GoF7Couc1Y25Fe54YZBFUz",
  "key33": "59MyzdbCCojUF29Tb6xygquTzRNaJ6LxZR8njzkdx212hC2VzHW1JjHuAzhW7H9ZD8rp5ksWhNLR472wtPU4Hn3e",
  "key34": "2fvKaMq5WgAAnmZKMEEScSH6kDtiTnQXpECJ27x4wdHaXBZzzTS58rrKQwWfADKqJGbf8RXgbnmcTfjP9xSvkNNk",
  "key35": "4WAaZAZ3HZUkKh8HTFHV7zmjxEf7VtFcBjo65JfvDTVG9F9gwEDvCtZ71p7ewxpF47azaKcU3jiPbx4FyPhg5y5m",
  "key36": "2inCzP6NEuUn8zNmrZPCeN6drvz4rrMC4MT1M99rb5oLowDeet6VW78CoxxbgbVoPS4BCPtG4sF2hmgy5r4ZzrP3",
  "key37": "5FEBK3M137FGnJZENCGgprAwE17AYW6A6tuPCCvTsEH7CLMFJYPRjYgDKQkgDGrLbBMZBamfwy23wDEQtRoC7Bwr",
  "key38": "4BzaSWXa7PMc67uWjntteMiiFUvEnw9xnx5HjHAvA4P8CgezzvpySYsJ5mbfQ8w7rSVaDaCE2G6uUAWRGmLUzdrD",
  "key39": "3dA3hkm7ccFB5NjPQa296ZGzUy6SQxvSPnibXgRkqGGTDwKKxCrMTw27UZUw2C78n4evZQCEpGbGpYrVeAiBbxRr",
  "key40": "4s8Mc1PwX57RSPagv5Zj583AkpbUk64S7xUVJZrf7CCAHT4fVceNKxSxUHaKgbhv5Cv7HNUEHj5kD3iE8Dsh7vcP",
  "key41": "2DyDtm93SAm3jLo8eCnNJRTBVoTWRhwTNyBhEw2ypHKE8rJsWUCCYseaxzXsFPfaTydnoEjuFbZucMiEUj2fAh33",
  "key42": "4q33KhVK1FFQx9sCGTpiUM1vHWWQD7q7RFYzPMpZY1E2TZ8Yc7dSRtvadVs7NnJuLKcPVbZWJa1vvYnsgDwAEX7S",
  "key43": "3bTgvHPUN1kHdpxJEZ3mBY8n4S69r4ZD7RSFpQZkiwNN6Zy9qcghdQgLRvKS2MTypf75kG74gMZcNRmdSHDx1t2N",
  "key44": "UgEEzeyGd23rhm52BQ5Xrk46N41qM2dARAFdrvV7imADALP4WQsSroyfWjGkRCPyQhPopo2kgcMe78MR3FNhxYh",
  "key45": "3s8rhK82gptgVrMPb1BBLESnt7Eq1SP2J85eEm3FcmEgqdU5ch28TwhPPhnbSUBcPoqB76ypFaguH4mqCYH8bgvF",
  "key46": "3STEJr2aKyD4kFueCyrinQGzP2tZPyxNRGfvjuiT29apEvnW6W17jfsRAgnu5VMj2cLfrxqAdp9nuNyGYzpQiJbQ",
  "key47": "4ob7o33FciEDQ6x3481ij9sc2LC3t55gF6a6RexPbswSFavHKvhF2hCvFVv87oEv7eMLULqGSNNmWzhQ1LvtucDZ",
  "key48": "EXjd7TUHA7Q1pptEmX9xGb36f7jzwhqhDVDTL5pPDuSAw7ZMhkLCYHuG2x9n4VSNYjuLKfxgbXNY8SdxqQP7Fbb"
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

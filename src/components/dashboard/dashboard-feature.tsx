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
    "34D5xcnjqh5JARE9cGGiy86WgqAF83z4UtoZKoQhNVAbUZ2HSbspJ38n2ULbVwURrpqpnAVQtj24D8aMt2FsPwyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7NpE9z193aEo8fbzUC6KAVkxy1xNgzABjeoR5SPjXqfV82vyEmf9hN4vPqCxgXTd7VsDt5xiNwV6K3CoSmfJbE",
  "key1": "zcE9b3vLEC2YasGdcXaX3BQ2pmgLhZDWcb7yaKiiRMjQFL652sAjhrv63itSsModhmN4fxohYPWcTjUfytY7mkA",
  "key2": "AC1uHadzHeCkZhy839ey43irEr4caGrhQdquuhmzoBkFzFKivwyazY6qNGEKY3fAwE57xZjXM3ntTYrUqV6fcLz",
  "key3": "4W2TuNo6KJoLcDSTWW8phpvkuMxwhR2Pi8GLWySJnkkhgwMZA9DSx5cCDjNm6iVJoFGAWkbSRwyNJbh8P2rmrwze",
  "key4": "5MnHKVmSHWZeAgp6PLK6PoQXK3yjYYo3m2fdVFdquwiCwQnhYjifKqc8BdcgM2Q5S9mJoaZpEUKnS2rR5Mqqe1Th",
  "key5": "4zFvug4KzM5D1csFHzyMAQfDgQwxbEV84uRae6qwpVNrAQ89rP1sEC6xoGgB3KiF54v1LZfhSPVgXBHPPdKSQH41",
  "key6": "3u6WvRtMmbJUrcC9UYvtqqzBppgBYceQLRoNM7bc3XUpQrny29xEyvG39kUz1dY1N7NDydHvvrPquC6tLdH38A1G",
  "key7": "Lj597aE766etVMiQKstL9VKBJHkVmgCmLXrx6ppKnK1h1ZEDwbU5uvJzD81CoMQxLhfX7FvYuVycftSAPP3Lkep",
  "key8": "3kCk2ksvcDeod7DRqmk9YQTb9GjkvYCPtWPTYEK9FJktwFKRcm8GUQBPrXJnoawtk1muuzMGstieqnxmNoB8FTqp",
  "key9": "2nskFm3xYZSac3sXmPVTNZiB5wL2wX2ZKkvqdRetN5rjdebJJg5iBpdjXc4qz9hbo8VzoX9fiUNKQH5Vi2YemYkr",
  "key10": "3SB8R2xN75BoPPzhMH9SdLX3V3GUrWJN5v3Dw4R5DUBnxtiiUQREGNpNoxD1qT23YzXo6sB1YQ98D8Ag6W9ybTsV",
  "key11": "5xeFq3UL8nZHYwyXP56WpogMMD7UnF7Re3ZeaFvVQwSmx6xjnbM5BRVCZRASp82iYtTqBW6ZC6i58y6UDhZxzhSw",
  "key12": "5owjbhohfcGutvS1ZWPY4x6Ew9y4NSv9FDfCBe3n1T8EXSEPutfbGTRVnefnjjamy9meL9oFCBKCVFG7MXKhE5QN",
  "key13": "kJMzZYQxYjKyN8AWdLzkBhWuJH4tmXYrLVjLLarMg9DsGF29M6iLQMKPh1z1W8dTNhFq5bUachojj1hYoCLzANr",
  "key14": "54wefyLcj6datVxG7EhFFLDyKEzbhpuTPmy62DWd1CiVSZxMbUVoCXDSBCMPtmrFbdQavfvxAshKkFz1tnVhdhiU",
  "key15": "3L4kxwLdbkMBHFJjd8rcD3hGfaS2BnKTi7kiPCroawMPu1SrHJXdnbMwFSr7YtMs8AbsYGbvSDj26vXht34w9Uqw",
  "key16": "5biV5MbobxH1oF7YVCPcd5Qa6y2pbG4Jxx9P2mEZUwV4MSno6TadBm7oZY49HtrBjnv5wriuD4bFZUYXQkvTqGhv",
  "key17": "2W2JS1gko9die9aCZyeZ9eZPmtgcdjJdFiCbJgCxDvCoUkr4piVS5RgwZFZfoWhsTqQ1zUKHxhpiXJhzKkxEWexw",
  "key18": "5t3ic47te2eq7BTARS6nPAh3BRWAYkHWAYhiojBvK1BGWBDyaUjYdvb8BW9PH2fd5vs8VF6vawinXpww4RqYeMh5",
  "key19": "MYcz9e3PZy6mroCTGxZmyeL7M3oB8uL7h8pJEhMKp8hqm4o1wJdKd6AYcnGm8F8GZfzHPtH98YiTbPAsvrVs91q",
  "key20": "3tWxG8KzveEUXtc2ubwtdMBarEow3UiXCHcCoc9EdG6ASDNixF47Cq8hgAErPfMyDFDjrnwhfha2pjYnoMNeeAMM",
  "key21": "59HQ8Ssoz14DrGbRn91FGrotbkozLTDCzJkPuiTAqNDZu79AXWkY6xQNYAn7nMCyzVtAt4kUCWpp1K7Mf2cfWDD2",
  "key22": "3aRrgqFvRR5KeQeKkX9LPVFCQazrvpfhac5SfyZhpVULYRUA4rjskEBRDD5MZ9trubx79BjSGWxixfwbHnVcpUro",
  "key23": "3RhybGNzNKqVoVzjy1HsvLGCxbxUcGvPvFiPse2og7V96Xn156iYS2es9ARwPs8MWrqxwPpXHhpdDJ9c1Lya3MNX",
  "key24": "2hfmXvpA2WUSqZtZXv6AWy1ELowfA4sjeqvvPahmF71X6qPwiMwovDcS6pkrgAuJPbJhKYDwoaE6LNSVBk9ghPZT",
  "key25": "5RGWEKquLoC5DB8fse6F44Pyv4k8u9wBikShkmyF4jauLjsE96rmwTno8SGT9e9Yk8bc7pmEmj9mPBMwngnZrS2o",
  "key26": "62Ss5WvGMGv7WvCiem6NEb2rNwcPtAWEWQkv6WHmZRdV5c2B2Wp7XCzt85DP5rvgo2ndsXgUAdj3cKyEHS9CGSVq",
  "key27": "3L3oqwioEF5eNFS3VDmASbCFrRs26kVNnNgDJTk1mQAUL3vQbVMWtzwWaS41uYaJFBGjR4GfS23QDadKgwakUMBq",
  "key28": "2qWLDXvN3n7Zf8J5zXyaGnf7Vd3nKy1WrW36TzrZaUdmhW9GujoWaF7xwWEDffSjjyuDtRYVyQeXsYQH95HMP9YU",
  "key29": "5j6TTKkFh6st4f1qKrtoEJujBkiR2nvN5FLTQbZEJtSFM179hUvXTQKQczUQGfSfyGGkedZJ3Qf6THfoqzNq62dg",
  "key30": "2qzA7wc4unsvmptenDxHuoaEDgC8SUa7NJpB1erSSUhtZ21t1Z6tG37UmdSx8H6yL1RJK6p4KtYQ8ToFJWZ6GSHH",
  "key31": "38WTTE2CzmCztpBpMeb6gjRCYoDqHm8RrBzU9hXEhUpJ5agUREBFpVZcsmvvRnVCat6idmttjfwnpzFdrpipKpq9",
  "key32": "5QERra9CaESUVX2gTVJtNVpcdfVVmgPmpdHo7npQ4NzYGrUHNmJuGoMDa78P81hs9M99gNbLD1wKpJc5NANAdL2P",
  "key33": "3ABoPJUXE9LJwJoQqGVBpy1no811qaZYULY6FJHCpbeNKNU3J1oiJKcbGpcashCaoPf5nuDUcTsSTepU31fSn573",
  "key34": "2vmrUiPjF3VH184APonYF67MW9FtYhe15jKxWhzCQQ4iPHkxYtPYguMR21ZGFH9WD79fXAVHT8jt36xtazzufPrG",
  "key35": "617sS5Ry8PPnRwYjfzoxY8VkRQnMBnDoSNh3cqXrjeYeSrXggi8c3D7t5m12BexmycRzF8yaPWe44tiqa2ku8Nub",
  "key36": "rTWvUSxufLptT8VqdBgZU19jN3LvvcWiM5xNdjgSKJdRo51zYPzFvja3VDfkESgiSJtqTt2osgQR7BvUDTFsKMy",
  "key37": "55h9GjABbCunHrFGMaViEct2g1k88sojE5Di735d7PuCtd5JevbWjrkULEiBZqBg1WiuaVspHkwbdx1tJqvc3ron",
  "key38": "5Krrg4vi1VSXpi6GhvxCuWDzk7dSNMgbtw8sk1fxBtJoQJ1tSJDeCFCdf9xgktGzNGNA1AFNBsMEoY9WzPYEWmGm",
  "key39": "62MQfBM5xq7i6JfX3aabNKNPT3RmYVzZaGNUDvYZVztQDqK9hf4nXx2fMT8Sc3Tq5N5Hyc8qQ94uJMTgeT4HmQkD",
  "key40": "fK9wyuBtAVagSuMg7N5Rd8BYGPmRfNXTHUXQote1N6nTfiUPNSbW583pzWAi7wguQzhdtYkWdp8HPYpbZ2VeTZa",
  "key41": "2eA2ent3d1ixrxP2BhjkQTUdNzG6YbxV5n4Af7BW5PSZZVaD4fnt5rKZRr4geyERBUqCdfd2EnKTcbRn4ihV8VYL",
  "key42": "5XiXz4c4oQtasvEJXvhs63tvF9hpXALFhERaLacxGApkx2Toqn65ZVgRZVdvh2Uh7Sy17r2zXb6gjBHq1J8nz1Bd",
  "key43": "3vgEP92De6CtV42gaHQoFeBVZFhGdaQAwgKfSNfuNUaeALjhQYwQSFrxTvJusw63vSp1ULY3tgXhkUgzZqVfs8hT",
  "key44": "rZ5oP73emrm397aHxoTs2rHxigSJvKwCj6YFrg9SisiXfeyoedCzkSRdZ7LVQbzxhJPiZbsTuFd2WeCjXyCPQi3"
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

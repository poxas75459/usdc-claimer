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
    "34NQUCtFrSWY9meQvPFXCVE6dXtNZ6KSZtTVNuibQ34asfCbD1LDXLFJNFBhD7nB8AeQzyskhG7bHzCMDU57bHp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x71YLXd8UeXbqa7nfYBYs5rGKr6sVUoHgVgsVLNCQokYx5N7YLR6prwmRhmFy5iagUdDpAkL6fN9jBapeVBoTnd",
  "key1": "21wn4syhWF3jvUN1nrhrY2b6doKyfHZQUHsH9Fi2RrRf51smxZNyTAVUqBxCDxGGyz7Bk2XFBoGxwiJydGAc9LtU",
  "key2": "64td1kaf25KGSHPDHREigeGkwA67knpRsZkos5hzULCN8wWPoH66jcZbnFNwURL8NeaBjRKbpDJMRDP9qSAMLZeV",
  "key3": "KbPnyqXMTa2iEo9XyeiWRHwFWQNwQExekHbRB7GGnEdheJA7jMd1pWBSaYuAvfHtKjSeWbsGva3uY2micPWXizn",
  "key4": "45mYRzDXrFw6oXx9CRuD6TmNw991JyNo7EmUxZkkQ5jYXQJiDLYZqBCvRrBN4QnAsg1kp8atacyXivsYWokYrJtu",
  "key5": "GFS6VvtwZerfZbfTEdi6EYMdLBLYBRL7VYZK5yzaexN3jErBbTwW79kNsUTmXYRJfBETCsWwg93u9udukdGWXiB",
  "key6": "2AczWgFXrAYsqhCARGfW9VPniLyqyes81SsAvQn88RTEUMetDuH6LH8Q5Sf59s4PgjhooXraenVsN3FkhpXxLfUe",
  "key7": "4EP49qHmiZ1MK1AyDE2MJtQTWAUHxN5dP2ncECw4qwPhNVV1EUwXUDse4ezUH3nxk6TADgRMHGktFG3TUsKh167T",
  "key8": "5bax9HQJE9AExLTNETJWFvat1qKHaSfgj5ThKxF2vNmJzZPZwdUmpLNaanRhbUma44GZHQMMe3BfLTLehCHR4gCA",
  "key9": "pjTbjdUH9atUSAY2rHoqjDJwFZ9SshPEjNnkGJx4vSJ8zgcTHBYrQeDnHpbgSjDJzpAuvsh3QQtiRnt52K7oEUT",
  "key10": "2PghKvHRPbKodkPX2ZZVqybbvcPmFWcMCje4RWeTmWPDnhoj9T2XtNUhAfTJrAhWUfhAyq3yfSdLPsEstmPZeFpm",
  "key11": "4xGk5okshVwREb4ZPi5HFDspNGHmGWeBaLWWA51hb5h7ekAoSorqzffTBi456N8k2mzZTYTtzRqXxT16rknPAGrK",
  "key12": "2eNsqh6ggqm6nFK2i5nAztTTZuprca7cA8f1EyT4WNuxKhmBpR8odjKwRwqcfm4X2RX1g2EcNnoQhDujCqc5ghgc",
  "key13": "3gicLBMPXLVesCA5bBwqyxvimhkCS8ctRQKucBubP1SAS5mePZTSad3nWw1VtyKudfFgXu9jYt7GBrXY4j9NupAe",
  "key14": "3PaqepvNSHdPicQWYSPNbitDub1RWva4a5V5XmeDLzdh4yEVzXJjzUCbiPYirB7pAu179DPUTdk7vmEVv54sFCod",
  "key15": "5kKo3C2yxU4LgZiGud9p3oL53AW8AUGpKvP3D4QBpeESo7cLSGkeHprX9g3CMx8f12bN5AJ1xWAYvm1gG4a28G9e",
  "key16": "3f7tm6XcvBzT1VUKmfK3H76zv4AUYb4X8PQHo82jj9jKmnzGvYQ6UejFCWcvWXxmNWv1LHANXKuXK2GKnCTiki6C",
  "key17": "3jSx5TckiGNhgAMH8192YvXNGLP2rimGy1Fz9BpaGJEjkwyGgcb6zjgwQ2wEJT6T2DaTExVsQLv2nBqwcAtQY7iP",
  "key18": "2SV4v52JRy3fKtbbCw1CrdQoWqPNRmjBupJCGJ99xFf8Q31XKEPCD5ikyH8u96Dck6qxMFfWu9jDGJuTo1Y1pKzp",
  "key19": "382b69sxcSjnR66KJz99n6UVea4ofBfyF1C95b6pqktLR2cYPbbRUBEXfVYxj7QfRM7NbQgkEWVwQxe5ak5B9xXW",
  "key20": "2D6FhLDGxCQzBpN9qBmqD6sWWZKrhzRvLuLT9rXbm7oxMrV6Es3oeq2HK2C1hcPsEM69EGrZfew8reoAvtzCZaDJ",
  "key21": "2jTgMHqjvLzr7u3KbbVYYwhLaN4iUQ38bw7PWtNctr9MFFdcbDsi71iQPsgZgFWpdxqGopfDDNfyVFWGQcLs6MJY",
  "key22": "3ev7aGRcbXLp7E8oFwwwTMqX5noRA6GNXfCJURK4dJLNnvmy2e1UgqAyLMfYt3nSC1qELR4b3FrSy4HVXBrzPCWf",
  "key23": "2Vjq5VSFgZh5mHS7z97g6r6ik3KqnP5KVmCpFqbGUmsw3MALRncHjgJ4nT5TcXbMMgHZTnBT49ebUwnSovqJ79GA",
  "key24": "5VMSKmMg79o1ngqXWYf2A1iDoV1ovDEkwxsKywAdb2MYX2zu2UrHCtv5sdBzJ2YHpDeMjT8RPTaM3Q1wTPx1pgbF",
  "key25": "4F32zDAyqCRATJ3avUdoDLQT6WguuQ5oXJSPHC8cjy2JnJ2hMb2radxZ2471SpwVvbxpag4Eqi1yncgwnuiezaYt",
  "key26": "4DL2M6apJxwDzV8WBwBovPfxKuyyJAy1AML2rHTc6p6QvzZ8neU6N3NAKXJy43mVXHK6qF5tb3kNJiJpGbmTMZqX",
  "key27": "3Ugob49anJTo7QaBTvkcJXiLwDKHHrb5iS6twDe3u6tJiGCdM4vkvnEG2czpirQMSfQM7wm5vPrYPDJqRsZciTAw",
  "key28": "4v4cDxUTfgbpeegDjXVoc8Exkm9d5VeYky7b7kSDzNVRZGgsdPbJK79KsCRC2Ba8GzQX1GGJEfMfFpfSQn89tA2R",
  "key29": "42LLKyFJx5PJUs7aDuUudvhfwx47Vf99bSTEyc4Aaid9K7dwbSoBwH3Fh12KuggwLTfStfRPRtBEhFU6Rfv3L6br",
  "key30": "i649qhxZpRR8qSdxLoWB61i3xNYVXvsjmfkaXgEAUhNmqwWxwc4WfuZ9uA9n3zWhm5em1XqvsHD8uCtUHjNV32p",
  "key31": "5zzGQW5ovxVJmZ1gGJh8Aame5i6XrQVwGdh1uvMjnrWyXKRhQWs5fdnT8ZnXXcnYNxtXYjbjfyizXC6rtEnbkEyx",
  "key32": "3woVeWosqEdzmW9gXijmk69wyiRoZUzMUJkZyN6Dkh6oYpdEvYoLwJqYozKPUDWEDqByLDBS5NoBXFnHqMVGo2z",
  "key33": "4Fs9ZAs7hKSbyuW8LvGGKEfDTrmHcHEXo7m2TuoCAexPhVqye7KmzQEEVFTyPF3JxDJVCGYoWAaJVSiXmWiLQi39",
  "key34": "5AbxmQJS6Ds33HeshGZSKU9WrgrkpZ37JZYQECxohavhXG4uwXcyprjGsKwsEhVAAy5FH2xhf91xaJz75zatZDmz",
  "key35": "2g2ebfQBt8exzi3CpSaY81hq2g2mcdLbWUR4rwk6Cf28sZddwcm1vao5ZkQ3J6gfss3mRZ9gpvg5M1K6Apbh3d7X",
  "key36": "2AiiBaRngCAa7Av2RPT25zxm2PbJ32hz84wm8gRm7zbs9PCoUqnRiGbQFAMrKUSG7KbP5MsjqMwnohkyf5PrnQ7e",
  "key37": "4niWqZN5teAJDY3ssYYViSKYYrsCpfeioyyHxivcXxo41iUW9q7YinKmwBfHpfNVdqxPfX66XM6VaUVEAzqSHS1j",
  "key38": "evBqnMw9JYDKfHPP5cP1gzh4Hf793nS9RPQ2tJna9PbAhBGtqgcnST869ecGnGMMx46rY6UVF4TZHQiQAQQLBw5",
  "key39": "ijX3V5a6JUkhQryiZWDVZX7D6zhEcKbB4UEb8nkijzDjKvEdA2E1GBmuod142MivREA6MBnnYtXpUPSyWW9c3Bc",
  "key40": "2EBdietyC6QVxDiTa7YS5Xac3rWsbZF2hXQ7DoiHzJY4Fh7MUjL95F7sTfL61n5jJ28X1i3qfb9MzB2zqQug4owg",
  "key41": "5zW3LW2c1TZYS8gJuB7kB3GGSXeVhcghAnHpJPdxZ79JakUnRmwaYDbM5KR7CRjSZxsfsiFT2UCJNmjxSUXUdbcu",
  "key42": "4VpY5Aea7NVyBkUb3JtoPqmqax4vCfQF4yUDinvsBE3HXoezJ46ejJn5f7MMMawqsFz3K8FDkgur4HZxfYkzduJA",
  "key43": "57vj8gPRugyCuvPuzNVzqCj8F3PdX9A5NNVsvsfm8aJpSc3LtDMZ3btuNAp4ffMnzDK4BG7BWchrKejQcxqs96es"
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

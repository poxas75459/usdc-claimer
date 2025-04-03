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
    "3LSN2CpqMUFXJTTuAuRKuEUmy8rYUvFmwXzetqJdLQn9FUgLfkQ1KMBsckhVpoahemFdzgZMxyG5uEYzoK3YtSok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kviGxadEs4u8aRGHfpxrNDGGeN3fjMD3erVrW5HQwc7WGTJZFyLkjeDydsxRSxuFUvnesoqEF5VQaBbXPSsg9UQ",
  "key1": "ajUXya3dnjBpVFoFiU3M3DXyvX7xbTtsc4gxeAiD2NniBVBJ1KzeVnj88GB778CdRyTfswi5kt6V4chGqxHbUm1",
  "key2": "3Tn3XT9xbVbNC8VJfjNVSxht1oJE4ZctmTyGXEvD288TgH5zhHWHnc5YMb37RuCj7dvPJTnNCmVJXJfPBnQaFBNd",
  "key3": "4biDPzJ2HEJPuHqjhiymbDzXjexRCUYe1JPAbNqNfSK5bhfEgtGfAXNNNnhhNW54PBp98JUZjkvJeyH48SsYzrXB",
  "key4": "5R3KG7HqxFsD8GJXCURn7tzdRzKjMTBjQP1rCrSRqmNETZED3Md7KkUWkMSxNMrSHSe3DLK9aMwv7TYxkoo2otSU",
  "key5": "3zCMzcW76Q5KsEoo78WZ6dBFUEvJJqE1U9KdRfgWZf48XKyF1s7Pw7CHMZjiZnnPkgVvbCbyiMDDYsfnLCZzbu3",
  "key6": "PpTVZjWc8B3KEyT76rRiFRipxkMAfkdt7TdcibdixUsJEEE861gQneK9dNAS2WigrpTYGvpzLuDda3kA6fdozxq",
  "key7": "3cWns5KNyKccraqUZPkCxgkQWA6Hs2BCC98pfcpqx8PXWCTVkDrmYafXZ74F7hnxJt54tQoH7z47n8NGy5uuWb5K",
  "key8": "3B83xABNGuzkvrkZ3FbpQ81nT837vKVbWYg8G1igzBz2rbWdm55TjFXLwQNmBZmCzYBdjo2JgaTU3Uoa8qBJ57FY",
  "key9": "5MwCTgzNUhS1WmjgDgeAaaQ4YaiwsuNFPH91BeZR8u8ttvjVSq9vpiZM621vAwNJZWmE8jYgGT1P288fZApae3wZ",
  "key10": "39c3sSR8uBMeynQxJDsVBhFnn5CaFPWs1zyLrYt5YdggYfr2q9JxyEaY49SESnhHjfjJ5KtBELtaGZEGpPzxi7Vd",
  "key11": "x6zy5aDh2FVdGiQq2gNSPB4JVFyqaG4vcrvpQBzj4yqdYPuzfLpyCTWWMZDQKszzLt857UvPbGMu7Wnd5VeLEFm",
  "key12": "kRq4Y1MuGgYDz3EKai1EgbsDDgjLXwQhbidtpPECMbhuQJQy3B24JK71mdFc1JVQAp3TzHqAwKRp3osfgPdRU4c",
  "key13": "2a4aGANei4JqDhFwszYaxUz72PgEwwxsKZMwjmTctNfCJ1DgsCLWSLw2TedQCqdVJKRhU6kCv37KVQoQc9KzkbND",
  "key14": "2aawkUfcHzrJA1PCNnakQVtQ44HSWraobuKumkC2iaKdTpWR4eiL7CjdxSJqSjGVSgrR92xsKJGNLgUEEZwEdkt2",
  "key15": "2TUM5N19NeEwXQ1JZ6Hocb6tQXpgrjg4UJY1p3vhnVV6UycLEFCccCL62zEsAq9ttWxciJH7D7zxi37kJJ2hzGm1",
  "key16": "3JnPpseFup745shfViqTp3WbZ85i3oXa2GGFTC6sEv1d1FYGsYcaohe7ZCaGSG6sFf25m7wM64dThcL8sXDJ5F17",
  "key17": "2GZyJoE6eMwpRmFjHUTDEk6woZ6br4zM1ZtW1KGJQjNsXA6t1FMxit7NUHQUPtCdZMUY1DcKQW7SVPheVMVCWAMY",
  "key18": "317pmrwkxkArjNSn1rXDnwBXmsvx7dd4Z4rJBDxiMu96fa1WQtKv91yZGva3enHFBvWdxqyqgnY1GBb9dsxBXMdn",
  "key19": "3ic3z9teBQcTwHsatnoJGFreG4A9pBttSy57EcstRcq8Zwvgycf9sXcCzowMtcAaVSi7LToDEXqhmRWnibd5uURL",
  "key20": "2poS3qFcqiqnKx5ssTsBy6HoqUCDA1cpdEr3ybcy6T4AYYxkZ3fsVzVcBeii5woA8yycDNskxhKsT6XdPQDTiTS2",
  "key21": "3Aq6zPzQB2gzS8kMwDoowjUtwbnjDsvnPhvDbG9aCRrjbVdzgQXi7Dvq8vLqddrztHrUkEfeuSZ7eQ9gLkvxBwto",
  "key22": "dAPvCwfkb5NprayAWj9UToa7fXJQBnAESkxczAwHk7Qc1Kkc7dnbnG4Lv5e4zvjyYJAwsDVFKMzNm3rUTYzovdo",
  "key23": "2h7vqVHwGWGzqFCEUMY89VN5CcpyLByjw4cuc5Php5aPFBXhZfmoHYAi3bejASpPCtbiEc76YtcUdeP4ndM6VDor",
  "key24": "3YR2YewbNXvKEJkKDAPsBGg2sxKNfqsUfG2QXqEANqif3qLaVyrTpDMBQCM6K1zKidMJFVqZfqnqZfQXDjEwjoAb",
  "key25": "5t9ygsTtYuzzHhfaR3LVGLGBxn8Hy8QGSSjvHAhRGVsQfpnQpsJfSQcMy7rGqmQWgpN7iXcQcsBU2kawGwABdLuX",
  "key26": "cMYegSTWtVaivQ92yXqZxJNvKpVpoKXLzfJ43tN7GPJZgGC567yG3q4etoXnkxAD7HTTnXJxdgCPKuPWGeyTgaF",
  "key27": "3kZ42DnV2diwHhrpj9Vt4Z9yA3dpYrBQfZGadoYj7iMck6j6RoZ2zCjx1RidoQZyjHpt5qaFhYMi71HFT4w9HN9S",
  "key28": "3KLUx7vMSrWMamb4xFMygEAuuN2yZmqpG7PRJhzG2Rp1FWqNP7mRza7dtaAMtS4XZabmEju6cGVKBaz6qschpdj7",
  "key29": "58digszubbgmrgPiXuFXLEcAHiF9rhRWcdEpR6UqXr9KbFLS6Vsv5zV5EatnDLBoBYvoa19yYkMM7hHKDQXGzRty",
  "key30": "3aFQcQhiD3AAUaUPePzqDaAqF6omUXxMc5f1LKACz1RsGdPWz2xSc1jKd6FJT79juZF64Q1zzd3Lvs7Ur6mLpzXE",
  "key31": "3JxC47R12bwdy5YU36SF7a1crAr36Ljv6Ui2ArY2Mz2GrDoJjeExDj2geNvmuB8YJnyYrPJMgAfyUA4BqmnqZudq",
  "key32": "5CXa6fcpX219GhoEJpj6sUdfxVaQB9gqcw6xQSZMX5uanp8w9hcDGUBJPgtvWHUnJs1Sp2kUXLpKozXNTSQiwist",
  "key33": "2iqeUcUAgsst3BKaakd1coi8EpADsKAvo8dp5isYzzefRgnyrVUVKALcuCVj4oEk7uf6LN9ayibpjCq4Fp2wLrxj",
  "key34": "4cSa1u19jwVLazfqa7yi4nCbqiPRdR4Ei7EsVcjQT6HRhWuAS4fwAGt8Td5SQZ4EzBeg9WWpvghKQYZ3QqFe9Hw5",
  "key35": "2Z1S1jeA4gLSd564QyHQxVp9fPVLtv4YA8ZaJVoojLPg9Emrsuuz2XHMTvgDZE5FU78yH7rrHZSSNs3dk41idnsY",
  "key36": "39bo82t88zKmXn52ufiRvypLujYFauzsK8qKgVkYn4MaL2GbPJZPCxtvKufvdZCPTyVV12SZSc5fqX9oQBBr7EEA",
  "key37": "5m7GG9WJsAvUQEG5xq1m51wYXictukoZv6uZQ3cvbwmbTC7eH1AqWwFeHQevbN1JnvDDrqnQPmbhN1ZbSvCzWuye",
  "key38": "Z6X3qZXN4RSPjWd6sPiLzEriSAn43RUD8pFq1s7aYFVsB3pt7RVhVa2hMrfZ3S62RdMDFi6azeBXUPSgxpq3nwo",
  "key39": "eDR9wyWMdMsEcDYrixPWQfRagK8JJ3vvgVHbPFSzGvPho4BxjyZwbMktQvB3r4BS5MppSnMmcgY4dczkbtdQT62",
  "key40": "4UetBCQMj1hJEojBgLpbwHGKU78avvCooi4bGPGyt7riGhQHgpLrSiLo8qwZJzasGfdvqYxEY6HZgTmyt9JK7K54",
  "key41": "5DLm5oFJBrkUnLsK43HQ8k5wPBauqq8YSAAwsrzHeE599YDNVhwcYoew1zYFrx4Rhq11dBGkPg7n5VesgS6vY5Hh",
  "key42": "4Y1S2mcQYjRkUaxSnVYy97kdj1a35pxaGpT5AXgESwZ8ewgnXqqrbyeHGMjJCUczu5pNcAPELDf7nDpt4sNwKoT2",
  "key43": "JQpvLeX8Z2NS7X8pUViCQ8Dk8GYhXSk1Tw3qYC6kcFWq2A9yXNWBeFmHoCiKNczbGDgVrUta5BYd7oj6zVQ7ogX",
  "key44": "2ywGhM1vEa98fXzL3sEt4o5YETrPbLPqNtaNWZ2cy1VcB5mkiqahU1APb66YSjHZzV3b1oePins8kDs47tGWtDsx",
  "key45": "4hHoK6fTb9rT4jeNQGVjXcGerhyFbSvCpVTZgjyiZoDA5VNYcscrysnyUhgXzXoz2BAc2xEh5cPmvALxVagbKkSE"
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

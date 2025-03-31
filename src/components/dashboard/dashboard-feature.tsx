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
    "uhFyCsVhCUVPSgmx9nTbvQYYXYv2uFyFTFpe7D62WojeNKYFU1n7vWRrZ9rJG79eop9zo1cZgjSua9dpN2Zjchv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AGBKwszvinZciKiTrc5WaHipsGEWbPFhUHymUZRoQyGxjCTdX1YYPd2MEvfMapM8igQG8oFccgmg19mmBiYGU8Y",
  "key1": "4Eu4cMqCt4nQuTEpuGmhvWJAdHV9Fv2u7X7Vku9t88FxJByUkrtdz7Gk7XpfTUrSySKkbNietCmTdTYC3XjWQTiL",
  "key2": "53xeS9FeBt9PaVa7wPGt3nunojMcF94R8NWLn6XKQcxnbCH9T1Kmj6THy9GCkmiio1pcuSFFA22sLKv9jb6agFdV",
  "key3": "38ExFV7FRdbf7bV94a8Cie9y9Gf3bvhyQzjyaaj2VfPQHBHb3S1RN6HEnq2zRFmoy1RtdrpKqfqk3AtxqrpiWB5x",
  "key4": "251NKg4MJGdfms6XcdX2hkx3VzdcR5rLyPs7pxngbUYHatYQR9LLpFfUS4FGhK4KKQjojTky8JafKdprjiJm6kcA",
  "key5": "nh6dm7LUfbLerVbbG7stwryjYi8kH2KYbTQr1yVz3nnpDKgQ53xynWwD8gStwvrxzLnrPJ4FZUX3bfKm2Usiiwj",
  "key6": "2fjPQCwvXTtKiTeXVsn1fJsy9tvuNXVd628HvNhZjoWPV4A9EbLnKNzf3twsSB4ccxG6tnuy5CZjdhnWp8sjDdo2",
  "key7": "B18KG7wyosBxZN79Erwjrq6QxYjbQNq2iwnqPzAq6fgAcMHVN6nTqR1oeUieKqDp3Mr3MZNb1qtodHs4zbQjWJG",
  "key8": "2DCMfZ5AtBg2qwTX2uU3HRBoV8bBGSLRcdKWpJw45ZksFDaTE752tFejVi3w2KubNAgafWMTDKWFyFpG2Mbcc9nq",
  "key9": "4mEPV876mBrCgveaFkRm7jciMFeVcGt8d67hVpFCBjB1MhqhJfypmBgKayq4m9kpFcjV7YvgDXyF7ch3ZTXUNV4F",
  "key10": "3WqXqPoBFi8fTfUK9oMWEzdaqyaNJJppmrzL9VEHTAVSJHxkVro9xtYH9AV2My7JZAaRxR1iu7C22RiTZWQxxVzW",
  "key11": "4bNDKwbmxogHyiJXUcUB5iYLTKY9viyr1uDKwn7yNYRxRG3venHe2uDoDF34joFF5EWJLjbmNGEgV4Xr8NTV5qB1",
  "key12": "2rw1UWSCNdL5f8wsvdE4VoZGQBfj7SVdfq9S1v6Y3iz6nP1Q5dxKA2f2Wpi2oxqC5brqrUupWvLWhna6656XS5jw",
  "key13": "2eaHs9wmndVDQYiCr2hDoX2q7pCS6PQMv4tmXyQsvZ12jp6ewg3JKgE8Y7wzJwq5anoESNk55siRkJGUJ7H6qhDe",
  "key14": "3A7E8hiuZ4roD1FFFyNBV5Qj6RZ4EGgngHGP7d3qT9KTMjrkbg77QeE1pCxUp1zqR839SXSVhoGDaRiVx6XEAMxt",
  "key15": "3hy3tuqiEN1Q4LxPdKRFz3R9cBcdcvexbU2picXcG1e4fKicEyWBkRpcTvKtaZiMocFRvDYM9VHsnReBWweDNVKE",
  "key16": "228eFYGfdLtfrRVypJQ3J8onr71Tyt9KZ7jwwGoejt82oCVoKnhKCWpzJefgwaUdbLYRm378JyR2WqhgXzxXiuQD",
  "key17": "2veVqBynFC1Kd775cnzT95ETZVeVzdM5SbM2wv7EBjDALRfs8T9cn1UbqBQoHiUx4iJoovJ4F3KNEePCUAcfK31V",
  "key18": "4TsaNPyyPyfKooJGxSwHc6amU3dqbfL8LA3GsD1FPtcru2NEragmPjGdGV6dBsGFq5zjpwyVpQNi7cK1bseRQ7Dm",
  "key19": "2TSt2i8jAvXqKeoqu7EzsDZntUw9uaWu1D8AhNV6hNj1tDBLJHYRxRqtyD5Pp8e9Hmmkzn3agY6GXHYZLvq11Dzw",
  "key20": "3UZY33dKgj8FmuiVZ9uxcjtMZsXhhjh9SYeXQHi29N9KNVVZP6pN92SLyyeVHuscNd6djzQqiDUzpcuuBp8Q5BJv",
  "key21": "5qhHDrds7ZqN9ciDJNsmnV4tT2mtqLmAjdneVCtvWXtzvquEtHrSZiGjmvn3NfvgJYs9HCz29FwefKVobLFYo7ee",
  "key22": "32BJ2yjT9r6ssjK6KUAEyZUBfFzrBseTanfWN9CK9ps1eqJ8vtpbTNHD5zS93LZD5LcLsTNxDf7DgVsakJ1vFMvr",
  "key23": "4JfWbo14YKCEjZBknhgTf3ngueDJhg4jmSXekXoxQgdo5WzZ6anwDQiB7da4gFKNMtNen9ir9CNZAGoMmv95Rx2s",
  "key24": "ySkg4ccdYFhy8ezCi8jx6MSrWY8s96WEDhAt1Cqcd4g4fACwPxRXabi8svmcjhaLWrXpV7ex65CJaQLCer2nEpH",
  "key25": "4sydXf9CPR94SaTJ6HCSiNjL1B3qyEDgCRskHhjZhvJoGEgRhyk8a646hWsjpyqh9Qb3pumSMwRiqxsoU2pcHk13",
  "key26": "24ParzcqGfQ5xj16eR73NmvbHffe1qz5BGNHKrHZHKQw9Pb2xzWkdgPMyvpAfJX6TeugnKi5frfnQ5uBuKaXx5tj",
  "key27": "4TrUDatGwqBNDb9rCdzfrpPDU8ygA3QovPzruydVn4AF7EATgiU3zjs6DjnH2S3tMjrjwekx1H8sFvytSwUWWE1Y",
  "key28": "2SpL1ySBNvPYjMZYmW827MwyvTp2u7TNDv9372rwesG3S5GoGLCpxBViiXzL9WxqVw17jN2wn24foEE5z56ZTjXs",
  "key29": "5vRw8Ux4V8f58cMWzGicRfCmecvgAfiFxBY4Ryw5jjqNdTShpbiEqbSzXVvBLNwZYAfaayCJWU9Y9xv3TCX6hyx7",
  "key30": "AQnAN5KSwwyKznvkxajc2UgKo8NCBDPixvUgNN4oVGun8YrXXciDcBSCK4J8jpWybMFBHkFCcS38utyxoVsJ57i",
  "key31": "5EZ98iVdPvLNvXSK79eznkRrJyxVbPc7oG7HLcwcMKZdBmVJghtBWWEPVV9eQ6Tyr2NQw286HGdtPBhKLYouY63t",
  "key32": "56LbjD8KYPcSkGpPehApdgYkh2n12wmB14ZAyKdSRn9R8uXqXnGJU1BqDZwjyrqkpcHaSBwtkefdRW9wHrPJ47Zg",
  "key33": "3wuELKNLiP7QzCUNgDkCQV91efdrCC4zizKvEjXHqfUS4AeF9mtgEwHspxNc9G9wyLUuSaTVrpSNoeKGoMDnikVc",
  "key34": "jqDizEs6bSdUMcfpcf17iguSjcSs4wtcWKSwZhcG7XqDknq4eGucb7HMHJyNh8wn9Y7wKzVYg29xBjQP3QKd2yV",
  "key35": "5P1Fmy1CUKembWE5Q9vaH9vgsgkB9X6R9ZWv5ZawUvwVDPQ3VmgmbjZxKSjUSwWDH6wNtNHLsXFFRfx4Qt1FsWVE",
  "key36": "1236qEKjhnSGQFjo1HQLZBYihqWR4nQ7YkosEHj4h42hfbm1gnzH7ASL3MJSqEmAS6DRQCR27WAy4t83u4PSXMF2",
  "key37": "2iX4ZsuwoiE79fN5U422z8FdrUoRuymomHoUBy1ybmha7W7tf7h69Cxvxso8hXWXtGeB4k6ztXPTWMTJjcfVnhuQ",
  "key38": "2Fqtfkh1FYSXAh7fcrV5d1uSFxGckWKJBmm4RSTVdNP9c6yzbFSQz1YabVRGfDCPJGtv3CbWRx4eciMnUvHS51Fc",
  "key39": "63okhXYtY3PNdytt5pmt9hu6fv8Uu6XmWvVP22F2fA7nCayDXVWfHRkmuYjhekKZ6R9aLvFSGq7kNc3m5PEccgV7",
  "key40": "66tctPnAimxv8xNjhv71u1KW71Qz4GR9wJNCumhhiqfQzFVbQULJA983YxjpubpKEExUC5tMMbB6h32pgZR7FF8C",
  "key41": "5ZdmZkDzCUntsaeBb9vfcdrSU2kQ5sXVJuECoTXjwqatg1ob39rmeQKDfXyreYmK2nFs4HaKVxqRgBYYG8ZTGujv",
  "key42": "4fXSGFcfgjpoKLyYBhZBRvmhmprwtuTDFufFFCn2J2gGsyFd9H2QGbPZqwtbrGC4PqZfveU3KAG4AY4EPJ28esy3",
  "key43": "z4mSJwp8AMsK9a3szbwzAjrPnf4CJoTAj5yW1M7tqPB3FFr3qQdPzKJr3RWxw4ybtDpZdgEfn2NKwLrwTaUb7KX",
  "key44": "ZKZ8vsH92BCvCcfwkGaoXCbNcd6369fxxAjgBCSrzLYHumpqjF2HQasXjSLbxhdk9oxDUtz7RcU1yigGAsVXpiD",
  "key45": "4VobcddrpLw9ueQcpq3cz1oC1eaK3wdDEaWoavwUXkUsdiWsCynx3GXU1ivQiDtQ7cNzqvt378SFJ5N75XPd8kYk"
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

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
    "X5ShRwBFxJjEcrH6Dub8NzFbuKSzHiDxPjTJtqjkRzhRFLS6ErKPpJ6av1NpNhuBjTG35SdsQ3GQw4FwEoxQG6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2193B2N9VBFXexrQ46NsrcHnFyZb4k7N4tknJKRwy4ax5r2ws9VgMTY88TPBe4PVCKqwhdZAoaoDscvDr4Ai9urD",
  "key1": "2wfDyfYMXSzpkZziSJ5Sk3tfVHULi3e7zkeib7fQAgi5bP1mwoQ3S5yg5pVznQko2F1EpVT8oR8qW91vjiS2wtDX",
  "key2": "2ZTh9QitrvkHRvkU7NZFsRAsxcE5FD1fPCKbQe1YrzWAxwLrDb9PcgcDBbW15675avpXigqsoTuaQXKVk9a9KDcQ",
  "key3": "4TLNMV6dqQw3ovPJZiU5g4JH9LQhWsG3xhPyruceiDafZ8Nh1f6BGpWPvqKPJwgCYDHGDobiKU6Ad1dTYmp9XmKP",
  "key4": "61oEH9MWKfsXJgeqwbT8xvnETZRn31YRgzYQf252MLTXh8mxmAnc4GDsj6t2EZZGa3jQkH2LfU6sou41ra243uia",
  "key5": "5fbFKcSUB9CHdVTzWJ5BiHDPEChr5MQtSeCr1rDCpAwMJVCKj3hzjxDp8DXNNE7PGdjnb41x5WukoTUQsv11rz8i",
  "key6": "5RH7vzaq7L5mUd3MEoJ89mALpUnA63XDmh575bRKB77r79sUAQSA5HvHMMP262kg8R78qVRxJ7EifK43NFBBqBrz",
  "key7": "1oKeAPE1w9BuXS8wMfamLQjAF1aN8AXRYy66nBzwZLiZ4bs6sEW6eQ2xMRNAma18CVd6b8KhxjbTCfHA5UB23TZ",
  "key8": "3KUNaohVyF9HqU6cL6uyPxLgAqJRgViBsWkL6V2RCs2pGZ5fuhd9t5EvJR6HeAz9q8bxzrZqGGgPoFSmcFmJKgZ6",
  "key9": "3xFdDyB6FHugPEJ7CK9xesL4kN8E1jxuDsqSgsmQuX2M63P3EebRYa15K8xozoD5ioWeXs9VrQ9UR5uCGygKBX99",
  "key10": "Jofcs1SkBKhmhTK6eo1VoJV35RLJsYiMSaGS98jgVZS3znLZ2dRvsGveLJg9dKE2rzdszMBYjhmFgmJhpcH7Hdz",
  "key11": "GMAY2QURn8wKErnccfxUcEYrx5Px1KQHoAaG6QZoJCxqWQh9BQf9Zc2NSTnSUNwGcVCneFDxfBKcoWmvZGJVBgt",
  "key12": "LpcfSKFNbeSm18j6zEBDCDto9yfEFDHz1SFh9snG6NbvjNXoTzgtXLn9sJFu1yrCvSguuSeyZg6tYoovXFadmLP",
  "key13": "2RgEpVD8dbHQBo6PCm2x6oLZf4M2fbpejToWGTK3RqEhr8pfrLeGetfmL9VrjKay1BbyfRvEHRo6EZrejushnVyJ",
  "key14": "WGYTLBWmz4X7Sw7UFZT5yTJZt1etvimDPfLZLA9SXR3HDaAJkWx2r3hXkP5eb7ZVQrtYkh92vF637WVgheEFwkv",
  "key15": "5YX3bBhb3gNvhy3JgLiHLEz6erYBPQx7Bvwi79cAB5RtfMauxbH8dxBdgXQyzPiHQSJUNLiDmQLBdV9FQ1BU67dJ",
  "key16": "wCZS3bJCcvxuEnP9FzQjL4oBhnpxBupshiE6YWXodN5QsPLboECfHcHDhNCmijJDaTGJaDNeXy94bMYfwB94XpF",
  "key17": "3pUji8eMbRoeyutZdGvmzEKjM12zokEuG3YoJQkbiJwNKwY3y4fmQXRxg2EECsBsR54y6CbC8ApVQmnetPzZLT5K",
  "key18": "2HLAHqWK8ZMiQxg6a92o73TTvKApYKdGi2RpDt5HoY9t4iVyVs14hEsDiPkbqfHQAWy6Wu19HPC4KHvMrxwu3byj",
  "key19": "4KVK5APsMN6DiGqAgTxsZwjn1emqfjLXW8eqLF96ntfFd9C2ZMUKXffEYhF5eUgAPLNCTy6PF3RpBJ77kDKKLvGh",
  "key20": "2g1iUPcjYkjGQL4zguR2iK2WZbfgQGfCWgiGWFADit2VEtoiuvHYXVRDtxU5fHrLRpBy3gTAA77yQcAQJEBiMsvU",
  "key21": "5w7CRUDQsRve1twwUo1TWu6eDmJLnnp4o8SRDErajhnLCGzWQrriQJKx8zrDuGvFjy5Ro2ieo95Q5gLHMofyqLrG",
  "key22": "Lah1dxyXVNKK873TiG6e3PbzkTZ5ECuEag8RAvA2RG5H3egXnuPufcANymreZFiN4L9QrZM78dk5Kxvyo6YSmRd",
  "key23": "3mC9Dh8T7ZRGAkqj4WtJ7frBZfX9gA6yiGjeqSHPVjUqaiCpeaH1X4f9gKvVM4Eeybw326zVpc6qrkdNR8cYZpcq",
  "key24": "65s7eDGssp5mivsQbqrLQekYenJvv1V76XnGrhjEeQErqTTLbVT2JL9TA9NshaaLDvJLHNKazdFFNZSDUa7ijGdj",
  "key25": "3JWucsJnftnC4BKsTen7inqMLnYb5v4eScdGa81Pgdy9pypBDyCxjMqMmP84sEDuzkFQ2t9N4K884XpVXrn7D7b2",
  "key26": "3pGBLA7hYoi694Qe6Pw4YA2cTknvWZT878TAoPZeDwAqGvcXAk4NJeibfm42EGmuYSLWpoFjvg8qGDPCG1vJgHEe",
  "key27": "4eAoqMA9BViE6kjGMWnBpMXQ3MLdjmKsChsZrVRmHj1vJqqy7JfUGbUdCcWrsiX2iMyDJUFABwhjxp4Q7V1NsDNe",
  "key28": "53G8a8BVhoye1aRguaC45DAYLsS7dEYtZYw6n9fjozMD7DmdU33TPRzujRX5A9QFCUcY4VvdsX68rkQ2CpUJB8eJ",
  "key29": "5A7mAB3VnErUrk9VXXiQwfJXUk9gnyGsCYM9bcruMAmL85b13gXjVDy1EzzjNtqMF66SXjPY5z8ttQpeYDWKZL3b",
  "key30": "2kPRrvon5BLz2bbNQQcQopWvgmF8zw9LUM18cyv6VXQ191A5Pkt14zouSwPaiPs9j21nknmqZGsJRWpw3TEfh3X4",
  "key31": "4GduftAxmKTzfYxyTZFe8FyERK9x1DzHV7HNJwpdr1JJT22KfvSBVUD6pizuqmWn4TKR4uLsR1CXf8D8R8wwwA75",
  "key32": "3daHmm2YPvgmcwY7dXsUwVCxB8J6NWTpDziYkRNwAxpEHUUFzGwVxwXDWMaWG6ZKSPunoLgeYKNdiU5Dxgv2PAp5",
  "key33": "2ScVGzHj6b7B1kPsJFjF7fddbxZPuLWJ8YWcCm3bWQrfbAuBjTMEw7DnUZ81oRmgYXKJLf7z8QUSnWVnDCjkLizq",
  "key34": "23tRUK1prQbvRcYb5QN9njcqhgegeUeNJafdrLcNwDeVYaL46NTtkBgzcnHQWZN8pBGpYHsrnLjsFkHGq1DwZhVi",
  "key35": "2rjsQ98WPJEH7kZhTnqss9GSw23ZqR4z4vtYPzWLXv5zv7DpcxzU2rPE7aUZkvmyn9abwFqtDhWEzu4iDg9sMt4Q",
  "key36": "4Fi822aNAMS3YWf9LTQ8CbKLg8DnhckcRYf4kLJfYfyCuYGZLTsNeVBaD8fhRS8gKiuViGqtYDSa5XY8Q4Y6X2z5",
  "key37": "Qp52vj2h34Pe4K8RLyF2oA1VpJXtgK2S3ZJ8b6XoShADDGjm95ykWPyGmbQt73cNa73gxKEgLUSkCm4KC3unvED",
  "key38": "5TvQgRrzuW3H1cppA1H2DQecuAViR1jwYUFychGHGeQntSQvMcmVE8bymnwGsQSMeHfv2YjC5d8duv8SbPQcMoGk",
  "key39": "2AUhh6GEunya6efbfBMPvbASfSi6UHnok4yVqy68P8nyQoqn3V81HJsHSX2YsbdKgwySyiQCPE2KBgg6dMMXQhis",
  "key40": "2HdWAcjoMhfgYNdk4FQWQbgqszh6qJ5DSJEHviV2ifDy35WTUYvCmjSF2FEsk5cnNKVn6nXJkfn22fg16h2tcQAP",
  "key41": "5xed7bVsC7VCSbYNQ7fL1cchE1EuJdSL8EZAMERQgyZcU1Dc83GS7QVuzyjBUvP6y7hMhRknXGeuwMKc7Z3noxvw",
  "key42": "3tvXeYpDeweJaZSUur6dLszdjF44ktEKay5BVMUk6UYxaY79s3pp7ohe69GAq8KGh6iXdVi9EYHGpSn14zcFEttn",
  "key43": "AyQD1Vcs4JHeowzuUxNb4vjJWFLhnjFkS38bLcPxYwxuy8uJu6kRz8bqC3v6YjX6uVGh6TmjVXpT9HE35RkcEnn",
  "key44": "gBtfztUr4C8tmZFGAz6Y9XKX4BvSVGBBRQ8YqorAKNMUPGRDPqdQCD1jvmWuTEhoUinwo9wXrCfTpQ4ivzQFmgu",
  "key45": "54YS3gX12FcH2YedFKuf6t5SEKoHFtDYvhosCUiE6u9JR15wnQfVJ8j3nFaZTGjrzdLYb9TsYDFfFyr3KvxuZDdj",
  "key46": "67grU62AXRoU1qRN1bg6rMCihWucMAdAaEM2LRXEfMsATqqtbMfHwb75JpBj4ZAksng5AsLva82WPfUrBCdhQBRi",
  "key47": "3hCRDkHfssEvka5LxGrH5p5ALxWgi61HUeY8VzhFWrUutobSuhhqTG6jMwexEpX3FEgeq9nEh9j6sfVBc2rxH4VA",
  "key48": "3g152jZ4hTjwURZgjud8GGr8WVhi6ziRhhgG5iQy2U1UzBCSyF6wschV7MeJTKtHoQj8mzdJFoXr9rx8StYTJDEH",
  "key49": "sbQjN1i6QBEGGh5xfuVED6KEjpgvZdMxpqqwgdWjJekdqrGM9scvU3hJkJfneUxwjqEqzNURdaWJQYhpBAWZDMp"
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

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
    "3iaKRR24UCtinx1MLmkaCYa6tBry3BGqoEBGYvtxxBdYR2re1n2nZCAAxUAh2PqwD691eDcUdTApQqe5MQZztEJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyfXDQqHSnnEZDkLFTEn4PdvuJrQesHh9Ute3hkj1xJxbVvhdocFA8PSbmvm2mSBTuTwJeDcLQVrBE7r83RvfKM",
  "key1": "MZwUZkZ9rkVbYj4Y5xzyiqhq5XAeLCLpZRmW8mqcYjrpt6nejsEnDZh1khPsKZeuPFAdNcBLzHavsF5xwpJnRhK",
  "key2": "3tvbEU4v51x5GGUyVCcgLx6QugvCj6riC9Lh8Ly7TxoFGXfJqYXbLdUKHp4zFrkimSVCD5FJCbbbEzuD2K1rHrKx",
  "key3": "5Q694ancceQPKgdAxtDpENBj4NYuZbrAo7Sj32V9E5MiKFXPMDm6ZpnLXyzBGR1cUNq1R9RUEdcTALp9S8xvWY5x",
  "key4": "nNjsm39ZEkC5UwAds7ucMmyTLxLNqYfH6XDG5NLiW1WEAQvdXDnN2ATahi85SDsGNqSyUoWay7jvGUYHpwViPMm",
  "key5": "WxsBme5uy3gdiHPe6xbrUxL7GZeYgJPwPZyN79BAF3ZVm1gx5DPdQd4nKT9z8VfnW7gJs6SfEyWnwwmSAdgZhqX",
  "key6": "2VYjjtNF7rxtbvZenWinDo34fGfRT4hQmidRGt6wSzKv7EL2SoLtPQZTs9fKoPY1c8XJPrhtpevF19otiK1b2q8T",
  "key7": "5ShjjoYduzHHWe9kSAz326zonBvj8gRsPPwdpg9xTLMuxezcUzmfckgGL5YXMuUvZu1dbQpx5QG8XdPxDgpDpkdX",
  "key8": "2kALhTVYVf27TygzzuWm6j1ZRSTr7Ybc52SQpRnM4yJE4Nfngc1CBuLcAKnYyn253GUF2uqWWiHxnciyA2TXUit8",
  "key9": "5r69cpEAvxhEQUcHnN6nR84DtFTKKPWgLpMUKTS1QXNXeRcbcM8QDzDLyhTgiKZcsGY9QYjGXGGUUK2CLPkb8E3w",
  "key10": "1C4YyHSdcqBbcgiR4aEtXFN5Eyizs5f9Rtxp2TbtQ8C4ohacupdRZG2x5nNEsZscqb52zbcrHBgLwCpzzeH8v4g",
  "key11": "XNyjTYTEUZ1PuhRfKq989YTLaX1HHgLa2JyLVdDPKssH7bs64hE6YxnceTrYE5xjQQnadqoUPZsVb1L8JMuV6pt",
  "key12": "2JWZeUBdzXg2sJER1fRCBdYeJoUdZRMbTAm9xdVsYHzXcmzjX2E7JZH3pVYdUa71q1LRedveTSWBcDuHR8C8mcmV",
  "key13": "4BNRRRtetVzCeQmcJ6J7k1DTuUSm6rCFFZCQkWA1uyUWZKkJYnKVAj2vQ342Zhc6REYt6hd6Avru3JHRhSMDvUL",
  "key14": "5wWEAEKwWf4VFoApJhnJGSki4Qiz3DLj6z7M9Cf4VEwHCM5aRzAZ5n8sBmS9Rprt55mMa3RHxr4F1swF1cwdrqMN",
  "key15": "5R8RgzP5MwRG9xrXBxgw417RmCzwe8Pdys9J8UrNuqKqjXvnMiwxUx4DTjXXNzxt8D3Ncpuj5wUHZj1UTsx1CAGU",
  "key16": "4dfF12BJdhKCsZtzZxPdoHpgXPgRyK18nzGYhY3sssSZdCg4WiUe5WDTURZCwwBeHm9YdMDSEm2xtafSa3qV7Nn9",
  "key17": "4c28oAaKXCafY45onBXjUL8fKp7RDmBoy3T6KCSd8nbi2vVpSemHn27QLmuobg2e66813Dyg429RMWYPV7Z7Cd4L",
  "key18": "3BLFKaLXA3uFHPM6z2nSGCK88krQ3YHycppkuvNN7DogjzoP68eNv6PQEuJmGaaw8c1pggEGwWc3tmohh73pEKsg",
  "key19": "5bpZ6BqHq28xDmHngtXZHUaPvpRNgU4sjgdcx6zkWdooXYFhUmm4yRvYx6FK3kaBX6RsAoKcuhiaTjFgBC4eh3tx",
  "key20": "ZbBFBEojbepf2NXsrqxARoGxVWz58JthegaGGexobG8BfCoKs96rgV2oV3uZ2kTzJBrWaqyJ7K1oR4t4kVwmxrf",
  "key21": "4D2v6ma9nPx1KTv1czD74nAHGRPJtNm1TeeN5a7Z1QKM4exYk5b3219Fr65bZP4LDyG3ULexFvxQmKLFjxoUUiFH",
  "key22": "3i4qjKiWVNiuciqN22tTtxRmSAExauJenXq5CyBk1fEk4RyEVwQ24VYre5DMqrHeMKFvQganpw9XUb9RJXzDxNi2",
  "key23": "H2Qu9Q1LSj4D55Py19PEX9DQ77BoDBS8MFdUZt6Vvy5Wckntmf4gj6UnE65jpcchSEd1DX4mHrCKRfcv72m1H98",
  "key24": "511jUrfrenmZeuEMwyrmwRymTimehcptZNc5co9sswGfsWRGgCAt9NFPzKX2TLGtMwE3LcSsUENMnMP2ncaN6GVt",
  "key25": "C6jW44zjs6KPgUWjKTmUHJP9uvzCWsTYoZ1qGhjLivVuwFm6ViL8ztJfghNAwcJ6VefRayLvppaQKU6Ao3mBrqw",
  "key26": "3HxXS5iNqPRvzkpdZ6jLQUQZxZp57ReZQkdjbFSc8rkmsL9QnGpZpFwLgW47pEZxhJWyNQJxwaiYYqW3eyFZVAQb",
  "key27": "4ApqVVfCxLR9JfrpwWpFd2szAVEr3gbh5GbvV4Vj2dWkUbPy7j8q3vW9ZwN3Xw6Lfz54tqGiTZRHSLhtXUmexj7s",
  "key28": "3bRrUzWVsZdMiebgDdLxUD8faT6jBW1hcQmwjPVUThATKrLPXkAoZgiPwPumY713d8Ys7MzCiiaWYVzfV74K2FuF",
  "key29": "3DW1oS3WxYndG3hQtt5JaPSRCVHT7ZhTYKEmVwKsfxMPJZ8yakBWbCNktETfcVTX6gZNAGUkFDuD1bdxRkN9JU34",
  "key30": "5eTGhcFs7qriZT5n9notw92qEYzjuT9sa1gN2v8HUYekSvBXMmejdznFS9ykaKUnENgv9P69CiRi3p4oSj3L88VQ",
  "key31": "BqV9VSoahXubspoCGVktXzFfz57Y3K4XVt32A5tDK3VunSoosoxcyVBJvGAPzKotBy28oJsgnA5bQtpUd2CjGWh",
  "key32": "2WLrJUBf3M8TGKAAPmjj8pHct9YGdiUSD3gK3CxdxXHyD8SGa67FJK9aX57gzKWNohyr5To5dwzcnyQMmd86m2Cj",
  "key33": "i1vczJGwrGp1spW1fM6wwZRd4LKaW1NGXKNgxsxm8c11wUYoZ2GrbY3bCKBviMfGEZQEAZa5NCbv44pKm7Limh6",
  "key34": "dxYvWDFDu5ofYohicQfzNkTg9ACLtPB11ynfdJramAbCRpvghnWpQUVsPgfdRnLFCUtq3TaWbphcjuqhpB5JK8j",
  "key35": "4mK3XLMADRAwQVTCwU1sxM411dhJcucya2Vi88jDfd9KTyZ11ysiGmGV8ADoQC2NrzCJfAbQaeeeAcAosKRtCrDC",
  "key36": "26TowKLFGq6kvrysXtimvAGQHW9LhTgjZGZTtb9i5kLP81WNesmPxpHw2b7MogmKcYDsSAm93Hxu5HcxfKWQierq",
  "key37": "6331aePxEtQYJraDAZh3TP9NThZ2sWNwwmFdFGK7Y9UJ56fZxA9SHuyFaLsKt4oYF7dmHWbWbK9W2vKqCisZowYf",
  "key38": "5JRFDiwmQs1vm1KqijJbhAmMT5R3x7gFDjHMk5sSZcj6amXEsXKTk7yMQbGoCUE4D3TFEp1Hm7NKeosH9yeYiwkL",
  "key39": "5Rzyu7FVF3j4D27ZTpCxFa5Kz55Z5CVL2QGh9i3R8Byv2P55BZCnQ4Fs2aaHUuYjWgDA5CcbFgZ6UerwG4TQaTEf",
  "key40": "2vTk43PJmXPmHSiwQqSHzKxnwyUBoZpKNkBNsSghYmMDJH52ki6f6FhfSc1d3Z9usE4mSnEMoEfyQpFeNnwMs8wK",
  "key41": "64ETt4gMpiwL1TNVZpJiSQdvf7Tjfqh92qFgJ1qexn8U3ae35dAY8G4auWspTHfynk9LSznzsCCyZyei4G953niY",
  "key42": "3yxVh5zs3h9HJDZSSXAombUZXZd8PRWpiDczZnEFrG1B4e26aBxEdwChf7t7ZaHXTTZQ3icYMPRaJjDs3Ztc3RyF",
  "key43": "4m93tUxCuxqnNwuBbxg9SpZn86mS2uHQFqfznMqGVvPSURYSKjGzSt1vkD19Ao9Yp4Kth4TW7gMixvFZMmbnzqV1",
  "key44": "3HcfdGts5sJsV1hUeFqJVQ932TCzhp13ydSnxyw5w33LMUyD3pzAt4a4XGufft4ba2TgNZWsoXWatWAehV6hNezi",
  "key45": "3P9KUomQVNLGPHeGi4YeMgjtXfwxfTq15rvs53AFrtgKsuEnGTNBwBnzjZ9EXSUs1Mak6CRFvNPqtQnxtP8tYk28",
  "key46": "ij6wcPeeoFks4UTdMa8XHZZcUqLcZJYuEJGma425Bn3mVX6pxvn3FyUggNKdwJ8iMU2pXMnERdLUhZmmDcTjX5z",
  "key47": "wGgeom84RpyRrMRLwBoj8fzvHSoHsDGRCrmZvggjs7dV19qpAKmuZskQibcCpLYRbPuaHx4HuL8hwtpMwY2daQT",
  "key48": "591u5Xm3tSEUp54gKgUE3QsQGRGBKhNQTgm2wg9cQUm18rSFBbyjXC8LaaJHoHiEMbaAedYguXPFaB1BPhgLsE6k",
  "key49": "2eXSH93DR2wQvxEMutPcdwGUrR1Ez8TjJMb3q5LHB2X5C1vD3t5pNHLTZEf5Gqm9p2hYJxfv9AGiXEXaF4XCFzay"
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

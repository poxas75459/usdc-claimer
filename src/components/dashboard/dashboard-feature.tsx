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
    "37m3HLpY96qPpQ3ZKqYi5Z7iMTzcWeJgnoe81pf6zYv2NLiSeYD8DB38KGR1eTLBbFLTUtan8rHMDmiSE1UqXxtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVZ7Uzg3rQCBi1YRWTuuu81MdHNvEykzZBB46EUfSXeNDmd7bSTMXonsVkUckJFQSLPo8p1Ep3eLpbxQdzeDx3j",
  "key1": "5EfSRMcCwdA6wEsz6BcDuDpPXg8Ua3LZvvMAnQh8RWYCE1aZ8bNU9mGH7tKLb8gcK249tqEKX4x8mGkbWnNzCyWt",
  "key2": "4s8BsPZb8cyDitDU18SxhoeCp9Wo5vrk7HYRr2JjavTR6BZQQDd3A5jig3A5mJoKsF6XjcixLdt1piX2zVrbDQ4c",
  "key3": "4m7sLo1vQQx1SQCsCNJkjYsw3BUjQEWdorPwYyaEUFViYnmZkPZMSVuSBvGebXp9JFWzjkBqjwmeFNS6aUFGaVX8",
  "key4": "5hQwoW23EnWj7rfADo6Vha4GamtQkGaxi5wx2Wij87oCUULPfZjttKce3zNQmPbpi9PicurC95UDAn4cNQmu5tzr",
  "key5": "j6t8TvFXCiq6Uy9S5ez7LoLGBJyepvU8QK9DxLC3TSQt6oUhnDhGYposkVHr2oNhHjFPsw3ms6Kgv2gtDv1LFLJ",
  "key6": "4Y8YyQfr8eGnQA9cKod7KoyNMkNFsmnLWjGpDnfrYHthNmpkccS5gVZEWhwTfCTgdBeK5iTpiKUGBiGBXCS4nczh",
  "key7": "4nVR8hJeCyRKMHMpJYTwWG8y1ZPornoeSFt6i7aWi8Fjdc1SYAJf3adWevqcQXaWN5YUb3bzrnZ3LeTkS4KYKWX1",
  "key8": "3CPvzmuxj8r3dM19eV9otaoJiVvX7F6itC3sX4X3Fz6REMiVzkECcedpNN65ovQMowXFjRX5cUXoQReELMME4eoG",
  "key9": "2WL8wfYrWNWHgR7gRk8eCNJnFyqrynLUU8WHGpsmaRgFE9EhpYu2phddTkuJC122kWYzkLF3V4CB9h6bfmJRhzNP",
  "key10": "2fuZ3HJ7CBTfiE7MXhiaGoCrJokJ3dHUv1CJYwy5AUyP8m1uXpXG6YuH9vsa618mwRUr7kccdRk6UTNKK3QbPpAs",
  "key11": "k6ApM3eaTbuXTQGhT8jR8NMHNYPSARP8tWaNLtZ6LAHQW9cC4E6zuzypUiSEpNCPWTWNLET1uh6XwTum81uvu6P",
  "key12": "49Yx1DAhkFUup3dh8RYF8GNcpoSTEL8wGFjqv3DKpkq6E8HCDEr1pumimfo53T6A7YVRCFyYbWWBUKHaqDbh4KWv",
  "key13": "4wYN2B6i2Y6cWNH1bj3AhgFKQn9zXRrK6NveLKm6VPB9ypyQPdkXBdFwTXxwmzH9xqk7XVmfpCsodBZgMzpnBpzj",
  "key14": "3bYmhU7QP4gjznpsTxADzKHbiLBaefnnfvbqt26hPw8CpKKFiGobtwsB5MELy9iy2HhJZuG9V3KEvKPieiCJvTFB",
  "key15": "2ppF6rdaZktQ1kMJsE4716GYRJLN3dv3qKzVYg4kBeQQwFVNcJHpWgLe6MHWRnkQeAEVTprhh1k5xMoicUfdZDro",
  "key16": "6U5o6LekKGfGfucKJnQSwp2h6ttuSCMksvckASMT4exMaVjyEgs8eFnehnJh9v9NkLWSN6aSYtiwbi15g6BsqTf",
  "key17": "4w6K9fadJCNn49dRBh2wU2RWtFkWXgoC6nEQ9MnLuB4PRpMwN4hv8V2NkfMPydhAoJAFz2YrtqG6jAGZxiDX3iFM",
  "key18": "3Jvc2MeoVF7TW1mNErcqtXVG6AbPaApgecHQPYBPLGfnrthX1z1gaSEQSG34Q9JqWbvC9y6DBUZ7K8C8Cy7Hy8jt",
  "key19": "2ZXcoTTDYLmHpgpJzHKynv28JwN9DdfaiYdTDjVxfosGMiwipui32Htn75waYVLK3b1YSL9eukwN5BTnWBy9CQ6a",
  "key20": "57qnJDUFKswwUrGpZNDBijw5kFvrS2SKbWQo7n3hfjnWyTfmRjsZpCmfuW2bBgCozwfY3gwUw5zKPaunug7KiQHe",
  "key21": "dpFGLtoBma78s2SRpxbjCwvuYT3FvuZvi6ig9DQ7GKtSpjr2a3KP8FdakH64LkibE9346n4kAjdoppeuaWVE7Ak",
  "key22": "4taxngVMBANB8aPcLdZXDFwaAKqnXvwRU4rAUJn8RsvP19737Y9HwhmDijCrhsAN5q1FeMMZW9s1BSmQrqWTBaes",
  "key23": "LZZp53NMXRmLqf3GE861KyVmEsV1RFm1HzMpNWWMMxupzbADPePe5UNMM3xBDB8cPepUpB5nakxwmMGJH9v2ynN",
  "key24": "5VjJhMbhcdHpWXZRuL1N82gAkVaZhoFbeXKZaH4SFw3EmZEQ1pc6wAT1pCnTRn27jhkosxLDGgdxGZM77gqTXGBG",
  "key25": "4HfW7aE4Kp4LaPybhe6SHzwFdUEN86qzhzb281vxB7oaxvruv7hAPffQq7oC2E7SzWm6eHH4GvmgRy3m7H3YVT7y",
  "key26": "3s2Khhr6F3BMbrGP3t8iaTqzKHDAu3sT1CRsVfZZawYfnoymAg5JUmJCMXeeaDWy8rGxKGpyWC5mwLj4oCX1CNB5",
  "key27": "4Zb8nkv1o3txymQSSmExMctUoMoGay8mZccUXniLKCg8a3eDKoXn58Fm3u4uvkKjJNvZCqP5xWEZhjEwbTS8REX6",
  "key28": "4PQTBpSbDYUAft5e6eW4pPtiFrnfRDCMfeZjTux9kYtFU2C2asV2urf9vsYKTLXnyuEGogJKQPBD4JSgGvKp2wxq",
  "key29": "3YYdtQjAYZeFnYHo1EBGjXn3kYbVJ635spgy4YtANL9EG71h1AGgCMb6yC4vMezcDTR7LN6FTUqnGjBM8wwMNDLi",
  "key30": "3egDU4pTS2is4c1XguuYGvAv7VWEdMdVgLzmb7ECW7UiU6mJEQqubtTpGFYp4D7DioAjyV84NpqyjoCxUjcy6bET",
  "key31": "cye26TtRznMi3UC1wXTXXGkzdWDjJgvnXqZtiRW6St7hgt8WS5r5xoYGL3aTNW2H2yk2Zp4AvSEBJ565Sx2NnKW",
  "key32": "3iT8AeAj5rVNZrvBJtqaHHQS64aRPZCSUgpmY9MHe7v6kUrmwQQKDSzPyprrdeX5nfeCDSmsPTKmZy71P6kayM78",
  "key33": "3AsShpmRBNWHFn2Km8pfEu6Sst7FydXiWtpmwNJiBphezpZxmZoJCdJjSzEKYjGw7C4C5qGzfLYuoTJpmybrmQA1",
  "key34": "2PAeKWTWc4dm1p46ZpugYWQYEYxQfEsurSoPg9WCRdMpa8CEaaUQVJvQiEdx3X7poiRoQTYQJiFZ8djALqcafK24",
  "key35": "4aWk9R7w8uYtgPRfnqmTtEt5s2n4owPdJRLV2EdLoUUnEPdtfT7tQqXwXq2SYms7UTbboKz1eQohatTEs3AmAJfY",
  "key36": "1SZAnJUamM18yrfytcZMKBNEj2hcTGbCmJnEmvezuwBmfDNJsztXL4WYUeSWRsN3cCSsLHib2ka1tFBacKn5bUv"
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

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
    "2oTzHHTv7Zedj4RWBRzHZddBjXy9qMNa1xe2bksvtV1cHg9UvUtbZ7yRupYyiGKXQFfJESuh9AkU2Jcmy7t2T1ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K2Qy7nVtFzcBNj6ekZMF3GjJTneQdA9qKEubHKMhewj3MhF3cGBMRW9PPxm9wLgJYayRL7ojHs2ZWSS9zbQWhB8",
  "key1": "2fEYYhujqsSzGKYBesFevPQRBKxZF4ACgfzmuBRSfjp9pWSxTAySzok1ywJUDuZ2wvSWNDiMSeiCw2sE56uRuwWZ",
  "key2": "3wBDXGkkazNwi9FH8mV867K7UuT4bhTGKKtR5aWVVSHmL8iNE77TCJAsAZ6xPejk9VxUaMr35iBH55ysKDAxU6H4",
  "key3": "4xKS4ureznjYMi7xY93K14Ggy8GkHiyoChch3ZbWGxjoAc8KN6Kk45VwWFs88h97RjuJRgSU7aaRwcmVMfqrZePV",
  "key4": "PkVTh8Q2TtfLeDFSUdXt3CGf5Z2Ub1AKKz88Kb7hXu52giPPt2p9ZCjfvjc8rzzf2ow3tHtEjr4w9BVXWL2439i",
  "key5": "2zU7Ep36wcnSzCLhs6E8umyoVhWycBa378niTkXnaSXJeittGnbianHq7rD66iLcLriP6PQ2kxro82HvzSGigruT",
  "key6": "4pHwoog5FTa1SENjvTk9mbN2NNkP5ozDS21mGmd9PSq8YTBiV49wz8H7wasmwKiBMwPS9KxEayGsACsoTCNoJtT4",
  "key7": "4iUhmgR4Awa3oFdVBuNUMxH2N8j3yhSqTeUz1Xav1LQXpvLyMWXqjeXft5kGMFe7h45MKYNrAUK748DjvVRpqdmN",
  "key8": "31ZVpabCmWirfeH69GmvgD38Qb2JddHatyCD7DyWzhyTNtFkvMkrTrA1GfbQj833HM6BENs1HqhWhwdDwC7Cosju",
  "key9": "2XsDRHnQtjC1tsWy1yqXiLb6tbkBWoMhiCsXApYV17qzAcXgBgikCw2B4NtJiQucxgSRPoQEAtc38uGe7ZH1QPQG",
  "key10": "2TFTPBcwNab6WfHoAa4sadKcEfccg4Vsz1w49mS6Aa9FZKKkk4RpjKFHCfRzGeNXiKgxNcFN1YGNctdE6gChBz4q",
  "key11": "3MyUPNfn6mEtYXRd275HT4jXWB3Lty1aWTrmAkzZat79WLZbLztum8x3sSe7PBYmwh4WvdrgZfaueKHAX455qaon",
  "key12": "2cxiBVRj4DbEDGwkEmtxtpHSH32jXhwFUKtiiHHRy4Mprdy8NXFLAe59oZsYkGbvqk9vJ6ogifYSA4zj71zC31Mj",
  "key13": "6LyFmwZj3Hy76EtNH1JHrP4uWqGbTas3nQqbuywypKkdwJbMHDZPYikEmiEnPcS4sfrss622KtHfecJCx7Za8Kz",
  "key14": "T857k27S1U8T2GLvQA9ESd2DdqFkyKUgfg2XHyXsvZzWNCnUr1kMEyFnGzjCyX9fYoZZmG1g7Jc4UMFVu8tecAK",
  "key15": "2H8FHPvJKimBAoAQNTV3frfvJNLTkNyEkVgfbDmUw6GFfVBVHxudAJCcgWFx8bN9Q9YCykGR2kHoNyQ5cqnT6JgK",
  "key16": "bv9SNg32Hew8mKSnFc2K472WJkNrQcd7nPDpCNhK2fMYJSAigcZJCPxZByHrBdZ7Tzs1nSyLoNFRwS8NgbyAMed",
  "key17": "tbARHoC7JjwjoACgH18npB3y2kpGV9QvCdw1XwfC7aWZqmfzozuiiXmAexo3t91npwr81Jge8XnUVD3yTDHJj8f",
  "key18": "542pQ3zDXkGePPjDnqTCMrpNq9Ug1NzjsgfyMtvxAMvhpa7xtAwYdKEDAbgSbL7fQqZfcAfu3T8MpRiXjK5Jqm7a",
  "key19": "5EeeS2Voo8B4Xs7v5qbqKbtC4BrT9hTbFv6JyzzFaQrYys44RgCxrvteHoJdsCfsfSGegP3QRavZvNA7bEoVEMuV",
  "key20": "3KmjDCNzG5xbttRmrG7KFNAtRz3ZPh9ZhLonEh9EmJMpNGkhLimeFRrNpPXqLkEhkANxuxjeymJW7GHH14oHyxTL",
  "key21": "aVHzUvwkagqSepeYpo9XcU27gtuzvG4byBtpZpdKkjDbb2FoLs4tjzsy1fJ3ZkGVCodzhY2h1GYCszezEYrSUDZ",
  "key22": "5TwQt2b3u9Vi3Xpf2c2VfTPruKkySEAZtrHhDcHuevD9XjL5sPmu8BwxxDQfVHGYq76pdGjcnDDDwzw2RfjGNZke",
  "key23": "24nqkxV7Bm712wibN7QkTf5mQbtq8c7eWTtmpLkKq6jBkvj8RgrgUo55NT2r1i7yFQj5xckKgUbMRX9PC5jGzYD6",
  "key24": "5tXC4dPx3pJdiLjtpBAvgTe3yQzYt79t5r3zLeC1YFHCm65vQJ9sjb7hTwJeuM6oaqCpZPGVKr9yaHxEaFMc86uD",
  "key25": "rbvNWqBxUSF31aqQHNvsLZpghcwMDLVBhe6GqUFc6YhQdqve51APZVfznLhPmexAfkkzRiX2CPAyaKjrUJtvDZ4",
  "key26": "4W7eisnagqQoCahKpbUGa5j3YRf4PCKn33ZQgv1AXrPzA5LNfa3ZpXpwa7UYoQtNTgn6bSCLp2PQgKA4ibCLxZwN",
  "key27": "3zbfEHxXT2YKqKt3GbHpFV6fikveA3FfDbcN4X71grnUuBziAKaPAEy2oFh5UtaL4kwpaFm6bt5Agy1FzhGaNWoz",
  "key28": "Euabw7HmB2myDzEtViHwwqVjWfC6xfB4YxqXNvbLLcKTcbQmWtefjPReXiXYz8uSeZy4Rgh7kq7TcxHVHBwXD6Y",
  "key29": "5L8DFMCjMw1qmPtZ2xpsRjs2Vs8LFrmHg86KmXNhifRR3wAc7Bx8Gi6TxvUn1qq4sbYeX1JxB5knAYaANPL5UMt",
  "key30": "4s5M1p6HYDmR4MZgvcS1ZVYGmgcgndDHLda1TKBPChSGfwnY7Xv3b7JArMh1CWBekbomjxanYSLKSAmVkftt6SjZ",
  "key31": "3cNoHh6UrJB6vX5ycrT2hKiaR9Jgwb2KEfuEoiq2ZVJxewypKzKfKXSeucBYFD4kzDTD1eTBsaacffCzLeGAUwtq",
  "key32": "3bNysQEH1Dd31yaTNNUrLK5kikHP532n78cSvR7kvqfPkJ4wDdUfNBgRh8SW6hmX4Mb9Rgf6UJLby7NucZSmbFyj",
  "key33": "3VxXAvtcFbD6gvX6NYtXXpDdJWSqf7EdbdXjkZnYunnL4i35Cg5LiwV8aUEqRK76FMTjtriSi8sNprDAD3qt26aF",
  "key34": "tDP9ScioHyEpKqEFBt4a3ujWFnmPELXv7HsBrBESmrTmSPM66ThBf2G6kJcCn6PsDNE757TzY2Sp9RqoKfj3zch",
  "key35": "2A7YTbzaUgiv71wwwEuNNXL8jxivGyUajbJ1KE4nQeNAyANn49xjzv5roywx3YdZLAXa6V3JHkpqhvtNjVXhJ66E",
  "key36": "4sw2UowZnszebvCtFTnrd6rWXnMncJHYoxf6AMjZvt5gZNkARpmXgDA1NorP4gxzJdYKUCJKkHuNt7CTb4vT6MPN",
  "key37": "3fa2UMJWtfMVmcwe1jPh6R8sRzHpavLoHoCErc6mmNorEVrtUSgY7qQHJp5MzsKuUGM3RjE75AVRE6LQXNL53ia6",
  "key38": "2HNH5svENuVk4afsPm1tuWRhrVduLLFi5HtqrEbHbddJXsx6gfKFn8zfE4YGoA8Gxc7B6tyaYnc2MqZrDgycyNWy",
  "key39": "39nGQCyZ4GiCxcn1vsRu7DH13rKQXiZxYEtP9sB3NHpWAnMWSgzRAriw1RcMVrxJH8QkxGxPKcN6UBPKGmk96Y4R",
  "key40": "2aon8GUkmoWpo4eF9yNXQQ5NCgwa6iULTXkk2uLmfxsFYZbcddL3m9LLX1PHQJZmEbvjjPA7CWtMheizG7U91nPZ",
  "key41": "2XBPdHrhpRSqL5N2NKtNyd5uixk8AqrYYJUSvJbSxA3sxJndCaJvv8hP4a54m1nLGj2aWbRMWcMWvP3nM1WWdxeG",
  "key42": "3pevj9LsbK5scKbpBq927tz88A7h6upTrHua4FMYyZUtfWabAUnmFhfFqPs9Nzur9rgHWRCe4oMZAXNTE796fxtf",
  "key43": "5X6GAAHCi3JwzDk4ikMMYcgS3yQmi83FRqkFDu5y5kEsooTpmN976mcm6eYzzQGFgaPyP46N9zYaMj3iq4gECaGN",
  "key44": "2zG892SJbhqUvZAX3vTvGeX9VYrfEtPEVKUrX7KZ5gGTT4BEk1oJdwPWvF9VwQ7Y4QpUZRSrLyEHe65U9H6BpHE5",
  "key45": "3CecbkUs5bGD5kTP3DVxEkDj1mva2KspAfHWyBcFcCokamUT8yivRMBxPn9R96bFo9sZtZmbddZ5PVoyvwALDTM7",
  "key46": "2W19Ha3dq6DrnqN6fLNmxT6qNJUHMSDZK445MV2jJKVYN8LPSNEr1559EnrdbaS9xwodQ3LN2egFdJEQ5aGuxjW2",
  "key47": "5qBmyJqVcreg4vPG6usEsXX69ntYc7MA8FVt9Eez5sx3RNskEVBazM3qN5byNK6XQi5RuWoxhVrMTNgpUpR9byab",
  "key48": "5HEJgxbphJfyNBzXGFRKSXN7inuCKV6rcLxou6MavmGP8NaSv9AHkmb5ssQryV76bW2CpMqguamWVAV12QbN6jyK",
  "key49": "4sMzhPcmNtxvDVbqPYP1uHyEzzBWFuXsp9tMnuNoLnB98a8sxbgYs7ouUvnfsPyQyNRxRa4NFjVXXRBhx2UirBzG"
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

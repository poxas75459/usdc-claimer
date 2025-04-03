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
    "3jcxtoNxftmATHJBiYmBiJUzQuVG7bGdqSnUFK31X4iZvCX3DkcKrh3tQF7AmUkbT3CbcfZRB4aEjqa11VrNPRTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coaoskKXPiNeMASWzKKgbJVP3wAWqqtbzccQFy9jU7DMs7frjZW3vb8ik89PaVjbSiFabsGQuKs3ZPxMywpsyjo",
  "key1": "5eyb8RA729LZVDtLaDTcp81JYue7c1oW1wHTPtHrdkxDmFasR4jgQ5fTFHYMhSUW1CvHCWHG32o6AsPBjTqiJPQr",
  "key2": "3o1RXqhwC4jonExxd5e5ebaaSkdooCiByGsAfuMcZJkf9xhsFJ3AsMxE512fAQxJxYUHSfbFp27vj7k2sbgHFUYA",
  "key3": "4NYLCLy8zk4pC47oz2D8PrHAbeJAUJYopstWjCaWVjz3FTQ4o6qgQCnYmTeqTZNbDhWYcsZSehPeGqroBqbCqq5G",
  "key4": "3DNAzP2nJLk87J5HjBK57mt3oX2GbjLvur8nT86WC3a7ZK3Ua14BiMsV3ndwfbeaMbKSdPArd7nVXB7cmV4rLdMs",
  "key5": "5vMHjJQJtkKkKqZPef15Nhbgsz4cd3kXhSFzXLUvHLLNZh6Tr4Fct3rkUQKsAgwesjrerWmKAhKn8yKqt2hY2t2o",
  "key6": "3x6Tnq9GKPUsjcxvMh6zgEEibaHVivMF2A1aSNwoDWqMwpp2TQD2xM3s8RptrywywdXasAjVVN7SKEf6eb56ZEwq",
  "key7": "2pGzELAPKawLrmriJGMfZLPCSueDfL5NUndcYJcAtKGKyVwHdwShuDj5687uB24o2Cmo81KwgYFkiRuAAxLwMrgG",
  "key8": "65Atc4hrFQ4nNj4Rdq89oS8CRuDP5rd8oG5Sc8XBGRwkz1h3jZSVwnXsQFcPXNjMHXsAHz29DHczSu5FGj2dxPAr",
  "key9": "2grr96FyB8pGqWDKWPcpnMpr2deDEo8whHDxjNixm5HbkJ9cctS79MfiaVMhZB27YpXnJWn3ZY86Zny5JrVZFKA8",
  "key10": "2k6hCecVvdAvgD5phwDuEkbPBZvVhUNmonkbBh2TQCKdefSmULcG2qqJU4gLh1ZteHfgV6KtQb2gEFqKdtwtS8aX",
  "key11": "3sUFPAiRciMkCQthmKniFiyJRbXgXPJ6oNtWanfenmgCm2ZYZJs9B65wdZJMfxmKRjPXBagmZnbPBA5ZirGXs8En",
  "key12": "3T1wFZqNB5E9PaLrkf3oMKvqoC9BfxZKTEvYkySgrwL8MophLNzkD8CV36ENFiGvS3hrMvp67VoDdykLa9D6L78M",
  "key13": "3q19jsgPMupcy68YGSTrZSRo8tdBsZgoQhXmtt59yyR3D3nM4fmt3teYgTCSFGb9k9ndGAfap75arffRpYbccPN9",
  "key14": "36zHDPhFereEeEELgsArLEzL5CYiLxB9qxUoG29V34bcC3LuR4VzopN6tJGGJ3FTGqnxervtK4e5sCyBBtwyr12w",
  "key15": "5jq5dVgPVjKDZCoCNaf3jcFbf2CaifN19CLri6du99ca1fsFvYQBQ2bv2zZZqx5c5bbWX1moVzJuSoumg9LQqw5F",
  "key16": "VcsQhWob8GeNfdSrGLKx6ygNedTpi7v1jptwUowRob9ErSnYprrZ9wXWbBA3wWaBvnF8PcHYLh7LdzREQaMUYsG",
  "key17": "5i7PDqpBZvpqqjAxj9xiaPRMpAp3tCLTbgpJkruUQnWzEJ3favWT9wqWiAZaijNJPNGWJ5ZfjcRem4uUVnbKE9yy",
  "key18": "5XJ5JTHd4sBs9v74eEoNhTCwfrkV51w168TMKSpCYLKnw2KtGkH3mctiY16oceLnqXjMy7k7DS7HyUcoQfUfU4Sv",
  "key19": "4ZJh3B3k2bBj88SNHnNgFh2eMqR8yfH12aaMEziqk6oMMvchUtUTnjDNwNTdyL56RDP7X2xkYvkeSCTP22PD11ha",
  "key20": "3Vd8hUhHq86AVBJsQhXj9HmQmQcNfLpAqhojxN7YknCzT9CH8C7XHh1JSeUuh4pP3qkPhAy6SsHqRTCDp5bw5YTM",
  "key21": "46FcGggQbTWG1vHERudqaB5uqrGdxQaTNjyYg23UWVkP2bDHzjp6rZwXvGEo2WeNqp5RFQeKTHQXt3WdY371dVYc",
  "key22": "2QvhnaNfokwyVYn3mXVmN2cvooFUzRdKmSK1XtVsmfZhb8qvmWr5oJuR2nrWQ7USaHPTvXwC8RAEyBHgPqid2rMs",
  "key23": "49ef1YTmSmtfFqkFYsEXKGbfaqxqWk3ahyjrSWmmqmdY54uTXR6qsbudStuUNKfFqhTeHuuzNxRG1p3eBoyg4iUc",
  "key24": "3U39BtG8rr7Gmj7867vsGVfVvEbfGFNBNrf6zWV8JhFs2G2PzDJZXJ4h6gyTgPk3jXmBxWAyWArWa5YMPbHqN46r",
  "key25": "3QQFhuwQhA9ohoacFAAWLpwemCNr5Lb9FSVzL7eZs2gpTpTskX711eiSRUD9XbtwqktPBuxC7EwjbHJr9iQb79U5",
  "key26": "FiidR4YZfYhDpCNoq98cAk7JUFEvBTWFzma225C1V5oRmEX1v5pbS3Yuc9xCbZGUwm9U9KWwpbXSDwSfXQ6e2oM",
  "key27": "4STGqTALM5D6ByDWm1RnhM5HRbtcxWyUELMCZEqvGJxioSED2ou7ZyCXuWZw8quvbbpdG3bGEvbmrVeGVKfemk2q",
  "key28": "26n7HXZB6kzKdkM1vtt6UXa3qUhnR8G1SCLQZ3jguBD5uvadoLCKRffbxixx7kGHZ197CXxF8xrosLXh5sczU3H4",
  "key29": "3BSdyi5A5SUjN8Z6rbMKGMgTVDr1r29joSVV7ghPFy8gmCSVQ6UHpxoHcJwW4x2tqMBDJQzHVthyLfgC8pxHnj9g",
  "key30": "3rkiv6RNi4BfHwbULVeX6MspQGBKFxq9Yc13Vvpo2ufTSJjYsLoRTSkXYeyayvUNR6fwk9GEGJTk8QsVBCDtwf7x",
  "key31": "5pwkqXdQq1vpXwqXiq4mMEP1GYE2rsNa6RES3u2Eyo2Ymmt3J4t2vPDm9j7VXNsxbVGj13MaRncWr9HUHfy7jdVi",
  "key32": "ifYSuPeuDpt2evgEZcNnv1kG1G7n5wvw1enZQB7JhtUZeWACQKbKMYpKXCgZnt9ifYVfDMqv2tdMinEt4fAEZ4M",
  "key33": "29eiYTE2SE1R77dnr94AeiiStrebfQRx73kJ658xtv8FFPwuxQvKHRR69Wb2RpE42PirzqFfbzRKngrLZayPr3nr",
  "key34": "aiQGB5nvpihedhRwU17bRo9ASAYCCi7fmXAaxkREb8NxuqobjC5X47q3MFwveY9NynBWwofDb9EQ2BmS21NVVAQ",
  "key35": "3qmmT7KE2WqJpMHK4k7kMwTb74eDRETmycXvrieDpyEsn3xjBK7J3hr2oZCHFcNujrUBVFYximnxyiAdz8Ft88GT",
  "key36": "KgcsVYRfW2gmkgTqqyEJC9aYg7T1FXbkeuRozc3yg2WqNj5vzSP6ZferxKLjwgrJ56zuh7ApNZVfZSN1V9gJaGD",
  "key37": "4Wra37bviwBuRVnxBwAd1Gupir8CoTbQCVogrhawVX4vPsianfsNh2HGFshXsFr8L7mHgajt93J5jnGzUc75FTUq",
  "key38": "2hhDm6wnfJNVPjVmcuBQbALNXZimbwdMGa5iuGXyD48MpuXWNWr4Ei9tnvZ2e6SniajvmFHQA4sEGDJn8EJCXTEo",
  "key39": "2iW9URMmY3LDQcGsBpXRZ5QWiCJ29eXJvptYLv8pcaf2UgHURuCrdaENtPYTSJh8sHwy53rbLqfZAdkWBmCr6Tfd",
  "key40": "617AzBXP6Q3mAhmuAArWfF55DRidGC7BHD5DC4rRYvyTPqwJXHV72WBGTSLBeKQhYUMJbueBDHQiB3PBhhBtCLY3",
  "key41": "BiHz65xB1VRzkHQi4sWrgebRSKiV13XnNM75v1iXBY7EwhSfwhrGEwwaWuqhXKFYWvu1wVP3CWzAszjnmEidyNZ",
  "key42": "5prmwXhrtvwfuH9S4vk7w2UANLnPs7kbTkWSZSfKUjXAXMkf96UgXEA14bL4CRgKqcym9QmVVcYE4JDtGSD5MfYJ"
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

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
    "4krzhSJhyTw75wuipeUpVT372YEEBU7Ab5u4UTJianaGU1aKLJUNvwyEzr3cyp5st7aA2KddUcTW9MSHa2Nh7t51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ds5uvK8a1tt2EfrKkQ9ETexS34ubAUdinGWmhedVAzAaucwpHGZvEeiXT1nAC4NekGfY11s7AnQYKkAyv52kFWP",
  "key1": "3bx5p1qc6NcE6KdyofqW72SVNn3GuL2yHybeADgijq8tLm8fNSAiQJjuVPJBMYzeNQs8C9jikhaxxVFfXACXyqnc",
  "key2": "53LSFFYXojnxAdw4B7FYGUCfEJvtH4xn4s9hBURCF7KYtHPo8ZHiRzT9iW2q6PgHpFf8G28C8pSBQeaYbNpf2UME",
  "key3": "5WhPAya1ow9PxC4ECNbkHssVMySQKGAxJrTACJ4kJ81XKvxHEzf46wv7Ubuh3cnQnHAEUommypoGFCpEGKZ2bcZ3",
  "key4": "4ipG3DZgtdQj1QByZxKfdPFThzRuYyH6V6tjfmSBqZ7Y8mvwNSLKnSGxTpSvEGhpW67KFVa8DqN83YsVECHyZ2CB",
  "key5": "2BMKrjSX7c6pxx82D1N2WvGzkYg8jjjiUhbxirdpWDVtYZKvexRg6nZTMt8qjdAEHBbnZ5gZCCkAnh6fipUSAoRa",
  "key6": "WAwyRyHhhna97FiNpritfLBnjpUvUZGJfyE16huydUdTiPpfWbvQpf2LoJhrYKHKrPJgiyYRCvgP39hQ7D1nmmF",
  "key7": "5QYihq9HyQ2GzYfd3LBcJgz8z2BKz9BD5Vn1MEHQAnDNxVmkrJt4mvqgUyxHQANooT2XL5pZYxjwPJdcXt1uZHGs",
  "key8": "9Ts5fCH2b7pWAQSKy2mWPJ4TmsQjtfceyULhHbefRCzW8wCtHHXnTZngsnUAJprojMhiC8bQu62AUpkwUMqQtTZ",
  "key9": "q37YSd8i7DEh6E8idNfcajR1y5XLVfMuJrMf3qXLwMmVu5aLn9jJE9rqRFdVDg9vkJnCejZUitEHNaYx1TxDQfV",
  "key10": "56J4sb8pEm4j7cE9sf16QYwt7fKFi5JtaH2ycmeAzAWLPigMBhdDWWm31LRoXiYnnQMH4effRsQnbCSXDa1DAeRf",
  "key11": "k2btkKaihMdsCXKqruYnyk6ikALfBs5EguGpEhqohYXmChFVVPRTV6XspiD58LCjHygaTEQNDPmZadwi7o4Sd9g",
  "key12": "43nfg6tCMUEMLa93odfpnwiWmhCModzk1dHMhXAN8PMZo9r2czkwdaFUwJFPT2nyKanQXLZgWRDj2rMYhsfCb9kr",
  "key13": "2i2ARqkfLyHrB1yQFukdzzHyYqnMRnpjsuFFsMDM5skJkaYop6Dfyv2mjRQwgb4b9faHJJ4MpgED1iNkdfeFRCRW",
  "key14": "ziH61ejzJ1imaRVTknFpn3VfQC5WviHeZ3i47CQX7Lan3nLEHNQZL5xpBmwveU5QAW7UAW6PjQ2ncxHfLLpmn9v",
  "key15": "trsihKPA1XYW7vag7Tc7kPNgvpgLR94YzYJvfk5auGN76Jn25ZUa7NomRWtuqcPZF8ZGoxg2svsn4ve9fRweEbT",
  "key16": "36Xd89hv6NWBfnTb9z1WWsLM2dGkoVG9BbKLUf6uVYcs7HBimWC3U81NaPNgzTyvSXeCzJoX6Bf4uFrAHNGAqW2G",
  "key17": "7FTVq4NTRyoQvpErtZiNKtnvtaGRStzn4kGH5viZCWeszwSMpx67j12jPBTrvogBZfjJniRUFQvbFjgK81esob8",
  "key18": "4z71dub2qkU9iBKv4PkgyVRuAzCrcpEmzqnkm8NV76y34sTdGsrDQ4Wc11UJSm7itQZmBsxgGHe2TddVPnZB1dnQ",
  "key19": "4KT1cZqp3ghs62kHTx9H4hHH49A85SVisjUyCh3pZQmqYMYmun8cfSx4ympKCBGebU2KHpDbuz1JECC3b2t8N7aA",
  "key20": "4Za2UnKiFwqyvJhwjE9A71KrNJJtKHoZH1QU9KBPfz2xJk2525kQ9TEeLdgZ1thdp1h6xzNTo9A6JC9oRWvUGFtS",
  "key21": "392bb1kgXELpYngkAbPWUSmVUQiWzeBhgghYGfaeUGcx7AXaknvNZ3czHjxs5gzQRmo2r7hNSxPx6uJjpmW67jAv",
  "key22": "2G3feQmXNiLeBwfztaSUvEMDkuNjcuA8wRC4zzFRFLHdrZoxYPUJymXwwVEnC4xPornvGEQmsU6iPeZqHuviWCWS",
  "key23": "6upKso7yVNHBHaADwQcsNxDxTAQYjDB2vfybtySpt1W39RoxBN1kJuK9gSu8xGHpPq9VemnhcobF3iEQBXWS73n",
  "key24": "52jUDgFqgGoUR6PG83NTUL1Xok1pYuGj7qxZvini4cLbwMJm4gjAXf7fHREMFTFYEPnn6os8aMRjNGnmmXXcgaXd",
  "key25": "BodCsFkmQMZKLzkSUxEWA43DCKAmAcWp7Wp8aNsRpShk55Teh57FuD24xH8KEbKYDvhDekMXasGciEuGuPbnbMV",
  "key26": "24Jy1SqbWoNZM9T5wMhqsHEpvQLUSAqv4vfqGSXg77d7cnNRzcwVaxUZCJ8WfsQ3oVTaUmgvvHwEXytoUgB9QfyA",
  "key27": "4rZyGMibt1WyAUGA24QiF7qwBLZaTKNvq8taBDwz8gsBqyQW9c8LqD7zmpyYADCuACtareQDZbPKFqPjzGTzUd2J",
  "key28": "4xxY4sbnBFU3K4KdMKHNVutdg8uvFogmbBQGrgAEYWQPFtMEWKELXK2TMzrusLpkfe9pU4KmPQU4mceUGYxT327q",
  "key29": "5gSRnsrC6T1x5DjAYYzWcTcqauyFF8PCA7qqsR2zmr6zK93nxdYA9JD7NPQH4j7BZvpueUdyjPt4miSrN79imnNy",
  "key30": "3p3oJGpAYepr2DG34iiw3udxzFazAkfi9M1HToGqFsxjXCGfwVF67gs1XMaDDWEJ7ntTxCLT5vV4o5TuPrRhWAfU",
  "key31": "2nxhqdAWJeBSJGMmLK55B8K2B5jcBjbyWCawhXhPqpL3RpfugLupTKVx3Qx8QWyHTBDn8xjVDPwW8mu4xmd3X8Pu",
  "key32": "581jAqnUeejUyYfyKiGYHZ7U3h8NnNVzP7E2d2gebADkWdHLJcuD33PJUyV4mxhrRmnSyxctKrdgJHuVm92UnFmY",
  "key33": "JUumuBxVLk9CjvcN23PLuXktRrYipK9ewtMVCeE9fhsCizvhk2MfjHcEW4hY799QX7ovBopnqPT4FxaY8zQgCtd",
  "key34": "5DQuvrKpHejxxLajEUg4Tk7Akg22pUctMbx5H7Fsfrd9oTqUmSBz5FBz37Jhw4MujsoLFR4eLs6U6BYvGgQiWDzL",
  "key35": "4xzBLw4HrUQGUyGVr1axUSvUNNkkNnzCdgCn4aa6BUxzgCBCfi6gyKB77SVdBHkvqKJBFc2JRuXPTcvGiHHC8yRT",
  "key36": "4moNmG85xeLTEBkcxbPnwN4CAQDd4sP8BgQ1MurpGpiiDQLnn4WLDfQmJzmXFP1243ffQcWU8SJJ3yyeaRxYgH7G",
  "key37": "HsCFEeJ1ms2R4ijMdvMNpt5TvGc2jr59aoWg7FcLBhUj5m3HmBLo1dfa7xNgTUAaXPfEZV65x43ceyXVmJCmXvC",
  "key38": "45H9DbgLFZfbMvUBTwKy1Mvt2jeTtBs8LL36Chg96J4VVgdCC8DC7sLAny57T2AwhQvqcyqBBwer3WvaKYPoKA9W",
  "key39": "23RFhiU9Wi8Udg9cN4TBcdWNpWoib94onb5FU5CM2SvDP6FqNq7ne63fmJeMn2sGpw3dmHEjKVcPJCKQ9mpz4nG9"
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

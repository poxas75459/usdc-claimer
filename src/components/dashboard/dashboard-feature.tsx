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
    "3BYLJqwoZABtqpY1TJP4B9oAPmfcVFfSDm1uZkenXKK3qiyTxtZKEuzyPnjAsHG3wLhMPni4s1AxpjH3tE84mwU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zFJB5hAVJf2gQMQy98CyEaq83M9C6pnYCNBozkaK1y5se8o8oMJm71kg8Exg3pgAqyPUJmURiR2Nec3TiELPR13",
  "key1": "5FSSX1e99uYaNi1ECWnuEmgkeinM6DfBSMyrYkZ8ynsNzzbH4aSpbUzoF6L17Gua9x6ztCkx9NsVrRQmuDPNUbhw",
  "key2": "i85f7r5LF4rXCeoCMf1t6dVTLcoGbLtDmMdikRoUCzQiNThEgcYydRV1hstn5F5YeoasP1nSefrB4QMmcoHfu9M",
  "key3": "3ZrHcwbgMYJFCRn4qJXQqEBsJZUJWPCQ5gabRP8JvNdKa3a8CUFymJ2B21BXKC6fehhJ2dX69niqwjtZwu8tzu32",
  "key4": "8sMgmd2dy7pBr3jWkKbaQxLYAXcDvgp4aP1kpFFuoc9rXsCVx93CMqorPU336DydBAjse99TFbki6TviakmX1Xt",
  "key5": "2tyeCKLjpbqgSHUwBcNhSHJdsQkeTiuvQvGhfvLTERVxEDHVLmUk54pxpi6EHsAHgFWudekX1qAZmz39Kd7zbsdZ",
  "key6": "5E9ePrSrdZMjAkpXNxZ27xgnjoqt7EsUnoDVwxTEqz2FyVK4RnLk1sLoMzjN7R5jndZ8gC7D1MTxH6jRMHWvMcsy",
  "key7": "H9qX4Lzcdxb7EwLGA1LBRknqEuUKWvT7Mwhn8PQXHbBV6Z5TMYKTDw4rzBNa3FhjnfTKmHSMaGTVGvysnLMeYiE",
  "key8": "5BFZtK5RbHJ5bR618gmXhi1ZNfnpMyxt1nrh828ukCcGDVc34AfbrSEWmbsZheGk2hW4SDXpezFzT4AihjdBgU18",
  "key9": "3RFQcYvmDZ3YRTNxnz7qF5RRR21WX5W4yCMRsQeW4V4YizrF9wJzdfX8qbN7ksx3c6kYVFKvVB8LowuwEwikqxEo",
  "key10": "4fWyu3QWXPUN49jppMZLNogbngwGMHXxcMb5jNQ6TSNPJb9bhH3FZ4j397z5GvUE5nZ46F6wc1G2rfvAcCfWqt8S",
  "key11": "D5ANUkFwkvgHo6dEEP1beVCiMvfVvRPzWizBuUhqevYeZsuw1Ez6oZt67ZSNiCLzzipZny9u1h8ioWNXpmX5wYt",
  "key12": "3u8k788y5TQva27Aursj9CQTzFoqtVgGh7om57GivtkY6STWp1E6QuDeP3MjZnZBVoZoFkW6nXciTfgqZENN1Vnq",
  "key13": "jH8FY7TcLFedeYwipSduYRyc8seoj1QUm8GkxGw7VNBc66XuX7AVr3DDKHZRYDofjETLNCcWb13UcZxLte9wGe5",
  "key14": "3wysxzCibKkSUBHBNDQ32UNoNRDxpA9Ej8LEeQsBvikixRUxmtC1dYUHke3zctq9icjn7Q7PKWfp88SLzPKepC2G",
  "key15": "2gVddU99ynGgDVLQXbHn2fPL657muTgEd2JEHhJhjCL5mbiKpvPjA9KyM2HSe8g98fMf3Yh1v527AZCVviVVEduH",
  "key16": "5xqZqPVbbj95GwobN4MRdwboAGkuKFLEyWGsXAk5obMFvhjF463iyYqSM3tCb8isnAC4FZ5jFbRHssz1iFbceFrc",
  "key17": "5YEu8JNT2T7CFFf6gpjHtxYHMTgx9uEBAgvis3W1u1DoYzwgvVbr3BeZJEqCHDwomDvdk7pA33eYtArtMvMFVMVC",
  "key18": "3mgeCj69ud9BRfi85mFFgoTKQNSvgoJGjCM5JTz28iCcvTwy1fcLXmzRgLC41LwGfC5mKJkWVMgn59111WmbQm5z",
  "key19": "5EA9hNacBgBNqGEhLZYm2cPqkdSQ1XYDvSzH639dbbYuGiQmPHpMmviCsP3Dhs48y9NeCZMT73oMWPnxgYb2Gnh5",
  "key20": "42XGY3nk3vA1PGNekymzvbt18kdUn7ussgB3t6Z413YrwEjo6r6h77HWKrs3SBEG6Qd3rm2R2R1DnaSXxvzmLwNE",
  "key21": "21bWxfqQHGxgvsAYQChNpjMQ33NSBbtAyvXfj7mLsvAaXfY2uvkGf9JfoCCZWfcXtY1VpQLPzgcZNMaQ7Mafd72Z",
  "key22": "2Lxhwo8oFzShKHC5PnahVA1AedMsfdP8GUARPMuzTfJACEzHiJobwBGJXSJsCHRchES6D6kLujvTgNGSVwCg7Wg3",
  "key23": "4Gya5N2s3ZTyoJYLm1JgkKe92m58GWzkQLqsJqxG41DPvEXPSTpw2YQ4WjuaPigQ6AyKuaf3HrtriaJqUS1LQMbm",
  "key24": "5Vuo5ow9BVwWcwecnqEhMFnz9PUvbdNqjKcSfij23Gw2PXMtAAJEX35bpjAuHjArtjP9difAnWF8wyBVXMLWY6zq",
  "key25": "5KBrDenrN1uVc9L3CmZF9NXQsDGp3N8YNtTnNjqPmvU6yz713pLRLpZ24qExhjsYq95YaBgMmLSGKJbFccvkRHWF",
  "key26": "T2D5UZxBKh4sB1LXPiDd4yHGStRCoMo6TenZSaziHKzocJqwCaYybwF2pUQHG6SdDVjyinfJt8xuHKyguez9CG7",
  "key27": "43HjvHRhSH5RthYkDody18K14gRanY7FJ2M3pgeW8dtZV5ikFikqS9X1iLu7BdsUBPRmTNDEdwVTuwF85QNhRmsH",
  "key28": "TRJiWj816HBv3k4RsWjHHWMWCzG7En46mThppae8TDY2Q17WUhAE61V35MwXpqqnhG6J2xNdpQXeDDw5ky6Qz6a",
  "key29": "4ng67Y83Ln6j2nUe3czehAZYFubWkYnq3ZJi1ExpsUu3U11MvAbqcNy5STvwwTzkGaMS1hEqeGWZYkvqadV7hi5d",
  "key30": "5TWXALBreRjNm9Vt4v6sGSSXh1GD8qrsyjqmsttkgCBaew1wx6eck1oKQ6HVbK1F8h25MX4uChjFFeEVssfXw9Jx",
  "key31": "x2zRpx7JrZvcyWkh8QwwxeMX7TYsxs4M8oL4wrkaF3Mtjs1b4sEEeXKndsW83huCh5PWfQYbauqPgcoLHJBt51J",
  "key32": "YQorm9MgkLKGFywPofijgocr5eXkyoRJfr9hLxiaVhpjDu4Psci1gVtqj6AjLtm5aYcpymy3u1NKviD5nJFm7dv",
  "key33": "3K3jFSzUShcbnQ2zaMG9CeepJonfmJHWH6AwFXBwFSxMRPLzHLv92bRE3zRvN2J5rtnPAMmeBRMAYPnXd5oXdBMJ",
  "key34": "5HUdwJ2THAezYP49vMR5SvLGAss6q9G1MCNQLL2QJ8tHX71AwBZ7omEotAAj1aZJAixURM4xhoN7jFLpRWPADTC7",
  "key35": "2DC23ZFrf6j53ZkrxnWKh6NszURUc8WMTHSbpu16toeSMdhp7R6RaZxk5q5zyoEvrFaER51zoAQfyimejzzwwiEF",
  "key36": "F4LgPDV8qUeFT7VDJthEjz5Q8ZP9MSfT77qKKdVCAxKCoEj2J18e6UdTCbjyN1Xx2qDHKu2x3VKk2t1YFj7eNN3",
  "key37": "3AHk4bac5MRCvskQ9oDwBdt5of6sCNgRbryV1BRB9f7HXnuvuPRbyTXQx2WbfnKyPvY5hyYhLCpKLnwqMSMYdopp",
  "key38": "3bKAqqEfTC22fB5GVhtC42tFY2RxJmayNZH7FVCQ9MgbmuKRrHfWgdDcgTucctLUXvX1m3T6GdKyNaPVm4UbRt2z",
  "key39": "3EyrTbDYeE28wx3eVPhbNxKvdPAn9XRAWayZhbTbLFk1xn8oBj9usPLpDaUrfo29EV46EdQipZhqunorhRGAq6Bw",
  "key40": "Akkm8KvQb5eRhxyCgjqPaihookpehXW7VzLzfoJgEaub9uT2hBB4ukVKLxdryE4k4NXzhVpJefeP8gCecVPs2KW"
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

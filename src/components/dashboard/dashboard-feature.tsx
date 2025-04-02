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
    "5aBQvLvdEuhAAomuWHVJmD25PXQesj18Lz1JCKivo6ejTaMSXAbApaAA2fQ6XCyy6HLpPV73sUHqLpGB8KqeVo1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KCkB43VURQY6JRPKgCgeAqxBivbBF3iQmAFzR53LPkDvd8LeVVdtaRRsdQHsF3z2Mjqfm9NZhk321z6tMp5nadp",
  "key1": "fEdmpM6cDbAPceebv3fMMGdUS9KtxifsqUHPDhXsFQ4xn22TUTN7EY9tzraxau8H4E3HXi9zAiDyMGnd14Lws6h",
  "key2": "4yXRBUd69112VvBZDrB5pZswUyTtkZcqzeGxn786i4dEMEFegPGGp5sZY4JzEKmoTV98LqiZMz7vSpzamwSCGomS",
  "key3": "34Zo4LTmcT3mNVHrnwCqjAQdruFXQDEQJDjNW8S6XfoRQZb5baqr7ozbpXGgqNYTdqLvyaKB8MwGNHguqurfyfxv",
  "key4": "2KfxomG3unQBNZU8GbLZosYHpaPZiUvD3zbQyLgtgpQiHVYrwD1jNRXoThiqE1miMYT2anvVR7h5bA1TyjD6CUCB",
  "key5": "4b4QJgSzNsA9ha4s6Fp8cNuYzDbpHV17pxwc7cQdUCxA8a2LvQRaKQtQnGNDNbArqrmw81jSyoU5WFHAdHkV2tir",
  "key6": "4XRgzvA2hf7tRhULXgrarehkBiLB61NMH8nmNPjLsQGK4w6ytQaUWRbjJvMifoGqStTCfP8FgqabUbYHy8kUhpxW",
  "key7": "3VeDW1hDicsNWdV1ozBf4vq9QYPkkVXLgJpWeuvYWrq9z5YaqjnDdPoyaAmcMNYZZRJ9ouKAr662jk2kcjgxBXEf",
  "key8": "4ZF92pQJUbwTxKMiWVj2CCVrFuoBpFeMouAeeEnqJj21cqwmXGS5Mrt7aNWNvsjL5Yry3sEzCvVGZmCrDPJkuQjH",
  "key9": "qsZnHUiGuGrXY7EGqQsBg3cKdXx62dMBMhcj2fLwF7GjhHyaanVvxafz56UUT82u3AyPXnSa6iEa2MbNgLtp9J8",
  "key10": "32WAohnvh92jkvDd925r7bGwUo2rRUL2R9RrttsCsnz7fzvYyu8c98Q4BbAD9hjbRocBByJMzLfnZVrMoGDCWj6J",
  "key11": "2bPBT1ypmFifZH3Q32G7jfURDqMfwVY1nwU1cqk44PiFRaE8HHGBN3Accni2JmxbQA2rhV74HgrncEfD1TPpUp8T",
  "key12": "fiinYVjxuXw4GVwJxkLVD21KSLjvWHWckUBy3Vv1pdtZDQZv4mrZLSi9dWmSa7UtonaXd49YaxPEgUazwCMxFRM",
  "key13": "zk4dGUEjjFAEwK43hPYQdkhkGaxty6SCpfCvRd2v7oUs9EQ5Zr7W7GpcR5p6jZ2UGdYDQx66EkPz5GyY8PtJvtq",
  "key14": "32Aqdcwhkja8ExeGbY4n39c4zcBFmTtBDVXsNVvH6gdFmmmgANMvSX2qXfmxpAzFm1rcYchqvvXRRetb5uR3GBu5",
  "key15": "4GM9ckgKRQsZGWvMjTttEjdaCjGSufkqmqZRuCMyyZJw6Ftce7nA2t3GyPA3fw3SzE68HRjg8axAixCYPX4ATxXX",
  "key16": "3GjsUvVoUGmJFRuEf6HtHHfkzheywLr64EWW2bKj1zriF4bwvXUPVzPkP1KtAkkxZe17EukV6Mg3HM5KAgs2sGm2",
  "key17": "2jfZVXz5NcwNbL7YYqY7EdiT37W4pvpm75bvAAhexaVsnBe4RnQUNBGsU4BFFjuJ6ywY1iCwJXumLZxtwgnreqKz",
  "key18": "5YHzyahpGE9oUt9vj1pm4GRVs1b8NQCAG3A2Qr8JcZYt2hEZVA4dc1T1EesTstfeo3dPDF2UHSBv6mb1NTbaimAA",
  "key19": "5GzW4f3PeaQyWGJ7QsNhybWkk3K2GuHc6aLb6d7RpcXbBRRM3LJd25UTqtBqVZyamS2dqqrJTDNUcbPWU3EtccHo",
  "key20": "3FzQjVQBEWsSvdSUoYHi5uWa5o9NLo5YWaYebqhsHM2eF96vRgQXEbvU1XxBM9itWmSAkYQFSKwYPsoCohCR5H6X",
  "key21": "2C1uAd1V8nLRBiHGW5ZZMGnz8AufJVY6aqtQwu6oNYo8eZAsgXs9kY7E9Lhxeqxgr12YXpg5Qn82hCziKRznkMyj",
  "key22": "5yWHYJihDd2YjG9UJzrZhkmQBdvm72EtG6Fje76qUANaDgit6tNhNmaXAJSWYVMz1nTRV1TEF9zrR5ZcFJ6aomjR",
  "key23": "4Ppfo6rb4YN6EBAvcRz2Bm2S6fuhrvWeuNnPSc1vHYJSKPXdYP9LCLXfeLFKk5MQkgwVSsgrvcCnnQA2VtyfyxCK",
  "key24": "3oXRkcUNQyy2qkSNLoNGgh9sYk3dL9xNSqyP6kMAH3JyWKxB3tYntPvVvgkqq6reK2C2udRQXhaqP4bLMeeRDgei",
  "key25": "cjxsKQLq3ogMdgYZViuyMPUeqYTDD8KYPCGKrRCZHsDbFpoGzCeEHBcVmYyZaioQsR2EU6qd8q34KPsubUAEnSJ",
  "key26": "3pez1CXQEcji1qPu5xgv81V57YUdjgaUVjXVcbKdDUE5qJ6yqvLKWDxPkqohyTJPSJbpJyLicUHggZ4KMrcEXwHd",
  "key27": "4oYwQE1WvD15xNJf8cKj3prkU4fsGi9NVG18qYDLwVTcJU3R1RtCXqTPxyEqF17wLFP9jnNAnEZzSnXScwaLF5D3",
  "key28": "3caypJJcdqY9U7QeYLkbiEHG33frEFEbmpjVKUHchxpuRze9cTueHh45ZFkmCVvi459uofWAHYKdhpkkRp6a2GSP",
  "key29": "2aGDKkQG6oXtcPnd4KGDp7F5gUMzhyEWptWwjQHEk3xo2TtYLvUpoamJ7Qy2Pun6pziTYyyo1twUvnUcGA92T2WE",
  "key30": "hSD5cwdZ1CngbSYX3DcxKJ22wqyDFRp8MkXGMhTEY3rAbFzUL7L2RPduyMygMdSiDNpG4cbgCn2KfvwmM5SEMg8",
  "key31": "2319YtFLvMqCw2awFk97KS33to5ko6Q4cp9ffrKyi5JBhgGiWh3ZHyZbAXnFaWFcbFuKPv3n76725kZhvLrdAwYg",
  "key32": "46D1kVaeKAupEvLkPgMdEpMa7K7P8y8d5XiGsTaK3oZHoeRxR1MQjexPXLUAh6bie5vF4hFKehW5J5ANpBterP9P",
  "key33": "R9fsEL7FKtPzJg2FxB4fJ8o9nRiNfmiigPu1YmLfpSmrmCGSsdT6PPoQiTsJSYSZfARREZagEeTatUQGWT9xzU7",
  "key34": "knZoDGSp8j6itmUipHnZsKxDtioRqmfAFrFoMniJmVERzUFoSfXAy5GqeFap7w3z1yxwfAVaC1M7YgMQ6SbzbE9",
  "key35": "3R7VMy5uJUTG5Td4b6RuYneia8fk8Wq5kyN9KanEXaudGoKvYi1XxpSuBpQwZRL9Y2tMNzAWrLCR2JmPjeE3HVJz",
  "key36": "5DyiWTkSvB5aXraXoZwxcoG62qrws1g2irQAVqRqZsA4xhAabCcQJwRfsyzrgB5Rajmvp6NxVu4jPMEgzFYByoyf",
  "key37": "5xB8HrFNsvAbs1L1TUZqaDm9twgRgHLgAJAJ3DcJauGJ86eUEgtjSbJxJvQeEgmoqS7ZktZKWxGyyUkLW5rUpawW",
  "key38": "3T61UJuDjSK8E3a3w4cVnsZi4Kaw7yM2VaArR3YcX92bFttn39uwK1FwttzQqsPGJkHrGU1JtvYmp43Non9u5TCm",
  "key39": "5EFLcVpko8Wx1wJLTrjmRL3o8zQJUQV1XbZTMte3aiHEWHrJm7KJ16sPfsFzAoAg2PFvtyQWBu1LrnSG9iZeHNN4",
  "key40": "2Yr7cMunHF6vCSEQL4G6m8dNxaXQUqxVj8FTtq36zxcxztTeRASvfbLPNFYEGih7xdMzSBVEKApvsGBYNTHspZPS",
  "key41": "2281Uc4hbeAJUszk6dgEDYwmu6gUrDBWqVsfLRAzLSUcbYFrD6K5JpSDSU656V5m4uwhy1CvCLVwTRy2KMQ8GUEm",
  "key42": "4yQ8W3Yf6YEucLMffhXPSrVUZizbbCy3U8r8MQovWZ2cYDUEmzVPnsJRXevw8opCFq2T18jeTautRu7BNje8bAvq",
  "key43": "u4yF2d8UVgTfsRzBwM3Njf3XUhBkcVkdHGVwMLTeHWiVbJxgBuNTgpnzwrZX46MMmy6zb1cT7SFbjpvuU933RY1",
  "key44": "3jnJncawHehTiYNTTXa1JyUGooBJGwHouEDMu9qcrU8UGiMi55RzzuCSpkppNyaLHNYtCafpJQFpLkw6Q6WSBnru",
  "key45": "4v9AV8ZLadATNw4Ery71J6zFhRJKEwZD9LBfw8MYZeNa1NDB82p5DdRKPT9aHZ6cLUDw2HMeGqQWwpnnmQA74ngs",
  "key46": "427GWJ9g1ctvCP5G2hAKr7oWwdR1GS2UeZUq9Gw1CFDR54M2DnQtrbzCV2j3qxz4oyJYyi1dtg6H2Dv8ybGWQFFH",
  "key47": "3J8cK1mwmVnDxxm9XHmgnqbq4PRsU5FrAjrzf1NX64Bkiauko8rggGwbCTVVEnSeY62p5wxV6S4THQfkzxgWD9wP",
  "key48": "54zVqbMxHkRZgqnudUyB4kH4u6cPK1LLjSVzLeS6pX2CYg5TuDcj8aqshJr2KgtyKifgzcycxW6mbrcpETGkkBDv"
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

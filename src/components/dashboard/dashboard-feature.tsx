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
    "3FEfmurvUS6km7v4piZbq7mnks6TcZ3jq6HH6VPXAwRvdzm2vj4LoWtrk3m5P3sE6u8qi142EfR7yryic6wEZD5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QiNFtmgBkeSTkoHSgVuWbeGM33uHasZv7C4PGKrxdn1bX4TsgExboEHH6ndNsigJbHKbnybgbb3WUDriXCzJDuQ",
  "key1": "3BTp1BfNAKmwYdULsrsjyXPnitYhCu8uPhtCTrrneyMb8XdGg2bXcNhsMa7up4kaDAQLGEcPtXSN3BwTt6ZzhXot",
  "key2": "2vVduLttrtq8uH9MA7n77yGHaFDok2SaxqSomqm6HwZZauA213bsDdSNSbcNCHKi1r17K7JiXcbQSgu2eqtfbaeM",
  "key3": "4BTJBkx9jwGg9nuGg9UbEPuu5Uj32Hnnf8oZruf56Ag7tMBKUh83KUaHN9FR44F59yCUTLdGAu4fmwhsyCffV7T6",
  "key4": "5Niqp6pnitcKCwmYfdX5XK47bsH9YP6u9ZRYPqEcQm6DqmWXrJtSb5fWitdQJehhnw7KNaQG3VYqQZcR2KbdD4nF",
  "key5": "2Auspq4rANwMTPpPpbKCyiPKbeVQeuLnwjTbfq3fwjHzuFY2zR6hA1Fs6E5z1BXAe1jR7Wzn8Dam8L7tvB5m4XFD",
  "key6": "5SHPwWNKfNNMzHv8wgK7RSNXRgzGZN1wKFSVWiLnKjDosyDPoHfNUnE5fjsQKv9QQN2mVsM7iWhauGCtKgtXph4j",
  "key7": "5569qJh9cEhLcRyJsA1Km4QyWhRbkaYMdMDKbf9p2BtRugMiqDpSthAyNNG4p4bst3KMkPXHDKkHrSrY3dX1Qmm",
  "key8": "3DwbaTcXGb9uP9kFa5364sk9n4k5S87PXNZMFTKgQrwvRvKsoeL52NnsdMDJMVmS4PBG72cwufFQE62L3DqVt9AQ",
  "key9": "38jcNEQimLo4xqDv8mUR2hQByzqmCJhoxpfHpamyhsSHKXrkirz1RTKhSvm5ohcj67FYVENBvzvgJi4vmnv5JMvk",
  "key10": "5hapVeYebGzgJM1zbotdTpEzZsHsif5vZatB6Wq3jrbGdNK4R9wLGTMiFDZjRWd5QtDstHqPDzMpKRYqeNGtcbYu",
  "key11": "Shpj22Q6vJvgog1xZJ8omYfjkRdbg3Uz5AiTQt2cDEuNbD8xnyCRH1pKJKdt59Ze8sUidUJhBRRpZ1vWtSEdr26",
  "key12": "tGFhxyAYzPDrwC3xBsRWp87nvPrpe1SFhfmPMAMcx5qfbbatvwhyxpzK6MMW55itTEo5qFzdbZY6J5MwjvPNTd2",
  "key13": "3sDfEZ2MXgnQmxQ3kCseeABCHDRoxa2WpV4ZxVcSM7z444HRAZiDXVh1WoAAA4m8zwE8TFtaedDx6h9nRnDipB1G",
  "key14": "2EydE57MzdB3FNQZ3UjDBAhV1mFjUnhr6rTVEb7JoZnegzaoV69y8pxzZTVzymc3v5K2RJqD3ryF2Sbqgq5auG8F",
  "key15": "2qmWj2eYKSJYFFQWi3enZJxTdkbFNpdHranYxX3nZCvW5r5CmFLsXxudfw8UtXsKYuGMeJ3DHZaZnBFTtescfmpG",
  "key16": "5wyXGY3asWHLwx3vhVd35zbW3uXEWKDP2LVZDpaxEHe81EimBBzCR5QtH97YWPq2TvDvAyDA1PLSAZuS8coFhbS8",
  "key17": "4jREs5T1unvXGKbFo4rVjeAsGnS5i51teXkHq7uDu8orK3kFD5FBiCXUus9wB9fcv82mwvWUQjPmyLFGJzPvfYUz",
  "key18": "g3r3vEqU696tXqaE39FzYvGXbr1ESWtztPJsdbFC8oaX1d5exVvUcTE39tYssZ7Dy516XHxLhiSjfL6vcfDZ46w",
  "key19": "4x2288GLgyvh34okJnEqUzq87fGiVRFo9T9cZtxppXRuXaWMeabpcChgo6fL3Ao4XkGjnAEht3bDx9VGzzBins2S",
  "key20": "2pgyev6tYjQD7B6WmEYRYaZWtqPjBk7rS3LpCoMHiGwb2Muk63VexRGt7aSpuhMVr9h9f1ibh1vuhTUZ8xnCj58C",
  "key21": "2FiwepPRxn76QLbjvjAXkjUV4Ze59szRP8d6qBYE5NmZ9beTeMBJDENuKNWfYsvNBtZBWE91SgqqfJkmC1Sp8hDq",
  "key22": "2vowdpFDGuBwLVm8tW6t4UoGyqSwxVR131iYq9oTp4RQ3ZKH3dV1KeQiJUutUZJUF6aCDNJ5tgnYMFvgrW2xVHCZ",
  "key23": "QjopZbg5LhVDubZ7CrUW3SFCNRqoTxX6yCbMTv3VYM9zj2rd5SX5v46UNobVoLBQFX5ZEiFzqXBBWGZFenC7a5F",
  "key24": "5AHfdeE55PSUmVGqqsDGWHGhAHj5APHEQq31ZXQi7CMPQve9fqAP7kzXTzPerPTJj3j4bWB9KmGskxSPk4bnxZKH",
  "key25": "5Sc259u3Edxq9Aeu4Dvuu4SPiLzCx6mZwCBULMCetkKzgZMzSQjdfGMXAev9wsR99hhfoBpas4M1daVr5tqp8Nph",
  "key26": "GH1MHyzGZhv3KjKbdUkuNQw5gqVSFyF8PXp9Csp51Lq8EmKpiQEoZvZc1Bv2CtvSLLxPJs6D7zFXjZtEA4RRjsS",
  "key27": "5Hjp9djebVcpx3R38hAA8WnFubnf1gYTQWQadeE3h9mk5gG5hZzqY4ZXoSpgH9YmD13rye7V2KfyS7oifwLguwFf",
  "key28": "351fG8waVwbLLc5wvUUAWAZvNNaHKk5eVoBjnvuTzfjJuvMhQkzZhdZsSzTAgevoXMa4XKBzdmc4TE4qfrYjAYj1",
  "key29": "4jcmw7N1AaaatFhzxpmSD3t8Rwuq5gafrANFGAgiNbTbR23H8Z7r2m5wk28bGDpLtm9QLitzjWxBNTENH1ywqe4o",
  "key30": "5VvKRP6kuqJgPyt6qCSUyN5XYRZPJQ4XgTtfpvZoU8yPha3zewBcZ2VZmekHng1gTJuiacZrq2vbe95H4NhgPQr4",
  "key31": "2FcmjzgSEEGZxChnUmgrRQNDMkxqrnvbmrXdm6ZvHuzoALKapfmor4wmn6E8T2dbnSNa1dBwQLyQwYxmaEoa1DaY",
  "key32": "35b7bjruK6vvPoSyZc2sdhsY5fgQNZ3pXzkTN9MpXt3Z3YgC8uU2ggSaYdvqPTM6XmoXBLMcfozrtPctzrE8zof",
  "key33": "3V4mq7aic8ZvTgGs4zXzdmsKAqBPYD5gMj3zdTcrCLmWb56fmJHiisy5tvtqRn3z6JF7SkTLKwrKhHDUPHfhiMyu",
  "key34": "57AhGwkihToVRdzX9J1bV66M95rTxAHonoJYzDK5EDuduZZo9hsvMqc9sYQqo1ifM1LYuDky8DTiZEJASgQBzkLA",
  "key35": "2pmwMTWMwJESX1iAAq1XGZBH3bsTft6YjWDxkC4eREdRCSTx6oXbCt5x7msoeGuWoaf8hLBPKTfVJd8NsSJR53vd",
  "key36": "2WvcYwUbSpvEgCuoat6PoGjDGf18uYBfgJ5hBzrWNqWPGp9mWm5w6UVgQ76iVPLniDZ3GzkJZh4mE6y7hsQPE6pM",
  "key37": "4rB6Nwyvi72FmtEeABgDHDKrYUdLN191SgBy9dVtUAzARLXSVDPdRSBC3CbG2BFghQRhZa7g8xWg9SSeXuHFWXiM",
  "key38": "3zE1HbJpNFNaRtTPTUWaWmCcEwP4bhahmDs4Fxk19fbDtoZr5CoGLhX1VKqSzySt8ombjzqtvJCzSVoDJtLBb4mc",
  "key39": "2641Y9XskBGbb4ymhy5pZcpY1os8zW6rYJKSYG2a86QmHZVT7iva6BETzPhj5bHFaREBWL4v73nubZ1zxp8ERhsv",
  "key40": "8z9K91N7Gw2ddE2AZyZqMsNYVutbDn6YKMzwzP5EypDBq79WBjYSYZj9dJTrHh94EGJTnZcJ3tvXFwG3t2BBYjL",
  "key41": "4AtyVKKSZ7TeBgp8StnpbNmv1fXRpZ2mXSnV8Whrg7r96iiFuJdJLKN4k4LVpjJFzcC19dPGAtHQG3AnKU6wTzg6",
  "key42": "2ZtruQYzfU6toiSN1N1UoqXtbDvRwinjU5joGThejBxftirD3BPJTZY9mTHatfzAYXzsje377xTQUaUN56MynAsu",
  "key43": "G2GYp4pY1NteP9SwcW7AaA9oXc1GvXmw9haxQSZ56ouakZ3eYxQ2tFvhNScpGu1YbQqPSTCGXxRyqk3UYRYvTUS",
  "key44": "4QXZvB24kcagaATYkqynfa859yUq4QPitFt5SHMRFfrFnYqoLPHGPR2pKEwbw9mud3NAFnaYQUmTDVeDo1QiTvF2",
  "key45": "63CkYpfKh7Hy3wXsrTXcZaWDeHjECWWhCpeWbLgNgBNvssJUbwK71xmrL6Fkg8jHFheGeuTqknExAsXwbmPdHhbz",
  "key46": "4Eoh1Hokb7smrcrBQuDk4EU1ji7xpkvykTbbRNoE5UCq7ma3TPhHmGpuQGyeb7hYdjdhmRxRZvwCniXWFMWbnZQG",
  "key47": "2rA8p59NggSgvV6SerZoN4PqTUs3Y28N8JHVzKisQ18NBbyN5RfiVWATircKsZHVCzywYZKaLYvoffxh6JxU67Kc",
  "key48": "4KboZZUEe6SL87HXtPgsmFnuf7u27PAhYY6BxrMe7h7yHimTb2XxiC5HSfVpnmHJG91bXu8pXKnohkEi14NavK6z",
  "key49": "4y2wg6b7cLkhpFJCv2vfdAMpaXffU2qhDFEaShqEegv7fXJLquGSa2FiaC6hge1WGQkmpNEairZ6gFRvEo4XaDyq"
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

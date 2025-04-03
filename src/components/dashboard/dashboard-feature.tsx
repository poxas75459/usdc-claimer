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
    "4GzVAiyhQbyTvdVY9GsoVAyhqK6Vke1BE7415Q4izFh1kspJTzzTDdpKauJBGuiHNERz3iFyqGWHkP4DH3PmWDpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAdRcimgbevsBznchcvdBKpUCpY4EKGWGifvNRPWWUCseFf8FZLFVFFwh3NGnRsQGV1jcvnmdYUrXKQxJrwTTdH",
  "key1": "mVJsdhKLQzRHBDkJymCPU4Ju2ayBRmmdanhDTfb9kBvSC5juv9MsPFTUUNtpUpb2jkNQtKqq5mJ7N2c5De9ecgF",
  "key2": "4VUyzhbgHQT8WMyhfC1PGz4XaYt6DDgVabRU2o9JwdirCb1RCtGhesyXHoZvEj6HEjVmzZgfdKkGutp9KX23dQSj",
  "key3": "2Ro5xT7vKUeuSyno3wi3MW1AVSeoPoHeMQ5DWBqwZHmkh9coNRR6WSnFrduweutWc1SR1L8qjTDNnrV4RZSDKXUS",
  "key4": "631zgWWWHAi3afMv5w4En2FRg6G93Q95CKZdzDdkr2GHcS4Fo6WWHVaHXko7SCDdpgrr42pU84LEhaCPNMN2a8xV",
  "key5": "67Dr2HBJW2urYytzQ9iWyNs5evqBJPiZaVjq4kifZJjphj15sD8vMZXuuWCy6rPam5te7y1vF86cFKFeNtycg32k",
  "key6": "2DyNRU45XD2Mr86qJFjMBG9Xh2AATypsfXs4FDQRB9f2mMTaWU5PKM2nSQPJ62hEknd9a1dD8HwzRsKSyGjE2zA",
  "key7": "4VngHXrZp7rg5wUZKPJ5vznCS57b11fP3xgDqgh2ZPqyiCvdPVp6ncTKk2XTwEA279pCN9RrxUsUVgSjVjW3uD6L",
  "key8": "35QRmTWLSsDBUuLyhVgAkW3Xz1nyrN1JvifmgZRw8D9NmQ88Zs1pD3bP3qKQqz8CNBDQZuYZH4inanu27wFqhsBS",
  "key9": "2QeBZTxw71PMrcQBWn7mUbV9epYpXH5CN5sDpQ4JyWvngJRr6WbSD8GYRHDt3TP5sM2jZYcqcU8jpeZT9snp6nAF",
  "key10": "SgUaYeCFi7pzqh6AJb1EULa9F2XXY4Wa19b3s4eMSGX8KMmg4VeA47fwDfbz6RE3ijGwPyTX6LwL5GFXq2hykYZ",
  "key11": "38U2JEV1VYzWRNV3uXejxdhRNYSsDRXoHQZFd3K7kNTf7nBtUamTerZAKTJd4pTEF37ybqP1ufYZ8yBRayi2Z64p",
  "key12": "4AWjupyXh5Qqn1rqPF83KtdNuFFvCm5rs9gQc5rmyQW3tvi7eGjtj2pyb1wFH3Nib8u5fKeTZUHJJLGrfKs3xWRR",
  "key13": "48oovPdVLtUBpPEpxLXC2vru4nsasA6CHmdepT2cTwssDoBzpcStEo7SkDWR9zduuryzPcjtGMECEVXdy6Yo5nzz",
  "key14": "9yM3PTJPDRhzHAZzTn2PJ7958E2W3aFrZ9djJyUYbBdHdUoUG2mohR9EnLwvB4BcaN5tjLcjg8LdHeowvJJcCFa",
  "key15": "4y3qyfzYMUJAhFcy4kYE8b6p3ouDXBTxqRJ2xj1ovKuB9ALAPVABY1jgfpgrupHDZAMhnzgK3SdavkQrapcq68Ch",
  "key16": "3rjUfdxKoUq88NWcEswWQoBWaVDMBCmn3mf3VfYjvd93sbSXkEzkfbLfkwKS7BLDQfuNvuCyKivpifZqV7FW1WwN",
  "key17": "2ytYadpiwNutqRRQsiWh5ap9mMsK7iar6UM4JfWoebVFEFFACbmcUWdddopHX76aNN4PAZ1kuVSLSGhCctB9H7Sw",
  "key18": "4AnJkm1pqmDHnrFqWZih5YZiJGtQ8ReMEGoK3CEVahGznTAayfiTY5TNVNG9qufiZibe7EC3hMygofZRdubXZCeq",
  "key19": "3SQZrdL5FsJSN6ZJzAF9fCk8U7efCmgvdsB7wPauTTnb2qnULgUAXRhL7xigEyv8fwFrSWfGCZss4x2ggeTU1QR2",
  "key20": "4XvAuNVC5NCB6Sy4BnxaNaST64quBQdBw71KWQkGz7Qb7qgV5ri7zYtKk2KuEn3o9NRYyyRSSJKkx9t4zM4HAkUa",
  "key21": "txcTtADXRjYV2zm4Eq7r82pS21KNPmtzBsx4sgtWnmQioPHAynMQRtSzTCVkb1LpWesrW61gGJT5873oR7rhDjq",
  "key22": "4AYrZMhs7c84WEmY7NLYg8S987qcfMeY3LuZUvjBgc29nM9br8GPDyboxkMiHqAMvNVqQDP6zRmhmrSxFGQ3sedP",
  "key23": "3c7c5UuLHhKwT7B547Q8LRwj7MTTed4AdgHLpjYWCSJTDSDmeigjb5ZrTpU6fr7vDgEYPqQpS6nG8tkyQ7KAk42B",
  "key24": "5Bb6eK7Rxqir3963Pwq28A3Zj7Xw3XtJxmBD3KsQ9PsrgPEKoTfncUsnKTwRRips9h6AuhSKo2Psp5SH3m8VS7Lt",
  "key25": "2KDJXPGH9hvxNuGCaznaR94aB89AoNCfYWBybRmfrutvri4MPLEkN3F6fbEpUGZe3fzVoDpZDTGtoJRXLHFbA5tX",
  "key26": "38embx9kqxB4vkPKipsMTi6oZa33Eb1RfGf31zJvjpMSt4EHs5qNTDFtE7pfqVHzmWfau4DCXMAfek7NNRT4cDgo",
  "key27": "2uajMVPQAHH1rZXjyyCuRJ6cZPtzNMsLQxgveWiLAushEJKtChdY2vVhYKcqETE84FPiXPt2fRRMHXX4aR3YpVmq",
  "key28": "8WvCrcpaRALdLsQwwqjiASwk6vCPi1AH1BadXCRScxh1KjnRD4ZvXzLV3ytFuJ27GeoPYBBitFcNDnVjqLfDuzW",
  "key29": "5sKiuovjHyQ93xVMff4x6jgEhoNMUZdeLAjMkWeMEh3aysEaTToSZuaBtsj5r8aCASiCBG5DJtWm23DEk23HfLvn",
  "key30": "5tqbu2PS4F3hr5b4Gs4EcrznFL6LLbpTQ1dLCv7dRt1V5GevgzqNn7W6ecjqRc2fEiLchoapm7q47zBAZqcg1W2y",
  "key31": "2KaKYna17Z87YGR97wSuZyuTPaxBYRJaFsnmknqkFWdqYwcHwkSPD3NKGUT5An3kcHx6vdkxRep4xkqAPr8pbRva",
  "key32": "da5AdRwneYvTRr5QebgMXZnUe8CiABWei8JSN3W8SMaVGaio6rsTF2AAT3jw5N8Rt3wCgQbeP8BDkViW6jEvmyG",
  "key33": "3c4439yfTjGbqBHFvbBFC3vQj8krbCmzoWb2QuDBKSqTJZawSUNYNDgh1XaxCcW2DUCivAkcZA8LyjoqsHU71QuN",
  "key34": "2YPMBKBLXzwJaTykvNxLt8xA8hXXaTEYM7tJbz1uFYkU3CtdDuq3fQHic4gdU3BjEY1UvMJGJucUUtDxebizMdCt",
  "key35": "3hR4oX43SuZBaBqmHZu6aWJDZRXu3KUC3EWCjTLMeEVYEmbPPCuMpNiwrQczbiao3RyQ2sBTdu4kCve8CSHAFwsr",
  "key36": "2skXMBJAUwtVckXyE68CBzTVMabCtdvwEuwLBZgCYah1W4iiXGbYxH3q4rQBv7hKcoeyVHkoCa3fG9B3tkiKEAzy",
  "key37": "4iYpm2RWyZNFhi2jEVB1Nm1ixLBkDfa93eBdP1fG15pJ5d2JPSyvpqEiyewMzieiCoVNuTb1YmUgmULKUF54pyXN",
  "key38": "2MaM9HetnRAHVtZmSHqsS1Czrv6eTznGtTnkuTyYYHBd4fPYKN7M67bk8FZPFa4eEUnngaRRSgKphjpobN2k5C1h",
  "key39": "3tMZ6siKEcuB8KhU4voAwJdtvXQ7Z7osantuPLSwBfE2XppiLJbtHQgEQQA8vkvyLPAnDXjMpdQ6Mz8EE7gY9TPq",
  "key40": "fGTwdyS7PYFXo42MsATN4yiPbRCqAS9p4jffZ4tkSFUFeJGJ9SnJuLyoyRdruA8Lzw4Sx9VbR8C4RKvRB67tKZT",
  "key41": "2Pza7jwd2ousMNuQR43VSNDZp7aYXxDM2Vnx1LwCWptVbVFG39tL49Mvpu6Bug8pZFRupaHaqCdSExokZNR8GnQu",
  "key42": "52s5tki39PLeepzxFmjzyhdyPVZW4shCDHKKhoyEXttnWDpUQ5CgaMerPS8z6PF3Mo2seFyoXzUXxAu7oq3DDuCR"
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

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
    "2ivmB1warC9hZsoHBwV78th4pGhAsmCQiK6Uk3tcMzckx7aXGbxfCRiE1wMLhucUV37vwMVqQtoDyqvc9c3TPLpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZYBqYR99FYc2pqrManxAxnEnbayuaymx742Q6N8uhxdBDJiL3o4v8Euc9XysaMqdTua8RdcZvfKfwqWcRgKtpV8",
  "key1": "46DGyufwD1FXxj27B4wuKpDiZeKrQCTwbxwZJpvprNV22sWVpSi1QRv7auwzqvYYEGJb2bTaAQSD9RwwiU3rgozM",
  "key2": "5REwogsPSzyntpPVirGix7GHi7io24MDbzyRBkyHJCNxbVxT1DaoRWYn4QrfxYRTpyawtAD14wNEpbpG3421X7gb",
  "key3": "2M46MqJS2Wtri3NENpU7JhkEWvrnWM29gRuPNFwfaFnxb1nvwuqTKgZjEt6MnaRzENRehqbBkdpMDfvS3EZvnW91",
  "key4": "4zy9w1SwFxAvr9yE24FK4qfWaxLVbQ1eawknxwBWjqWbwdHQK8JnasF1a8RNaVbyStTXSomRMkaS93YRPtW3xstW",
  "key5": "zqnaznPmDG1AFMWG74vsN7SwukWSjyzgnom3qHxsSrsL1EHYFTsmz7D52Cak7H6RYZh9Sujvjqh7wDx6BKz44UN",
  "key6": "4DSVxbHbfAsbZTrUuQMxLsk3Xhjwg742nA73QyMK5ZK2yAKrQgoucB5qaKeXxuj5fLsnHBwsdbusSKwALfNvyLe2",
  "key7": "5sTEt6SPpJNs4JeGDng9Quzr4ua3B2kCYSQk7rnZ7QJ9VAvaZoaNG3dJNDQzTM8E89nkxe1jD5PHCWAnFM3vcY5L",
  "key8": "2kQNDdPRfXLLX92bv6NmgfuLQKhj92EnHQGevPZcTKL3cUxr75AG9XDZ5i7rLQLRe7BtvPrDyfZhHruEt9etzsF5",
  "key9": "Jojw1cS1KuB1rv6UbL7eSpVeQAX885r7CkEju8QtGagvb9Rs7TUWmMgCf3MxhfiyyPsf5FU66JBmJFTNTN1rx9t",
  "key10": "3tHmA2iHKpm4wjWVGjmtWFjQozaokfseUvsat89kfH2QAeZ7KL1BMFsFzJXg9CauixMYyZCeMqSoCswJdEHwiaxh",
  "key11": "5qGSDKbyJaCphU5WKEn9g9j2pq5ScpJ6VzAVYVCExQQrKFDPYNuJfnjcb85kRudV2HGwBmWTB1Nq5RtrWvML1gqX",
  "key12": "KqKD4opB1NYy9FGjmKUGhFMH8ghPfeWGEcc7hrRvJuPLQPeGYBa93jvAy4hfRkgFK38Z4wMo5QNwBaCohSNYXEv",
  "key13": "3hd7zAy9RZRarx2NDTh7XbC6ukJp23btwGcCzUFqh7fzLRuzMEbzzH8Wupkz5TsSRfvZEZDjEoE7V5bT7dr243EQ",
  "key14": "3JQtkgFL79YLX7TdTnHy3TGmCrbziv6Fh81eBtrooztfKBgWvc99TY6x3id7sp39Zmfu53DbVMSYRoSuxetpBicy",
  "key15": "37esLgTypQfAJbBo5CnKWhsQRbgWQVyJ4SyzmhU9QUdU4weRbhwaGU4Q6pYmFSFDv6s9aKPbWGD3sGUfXSC7b9dt",
  "key16": "5RwvhBvpPkj9z2robdXD7gmudJjVhPkyn4n3GmQYn7CYjLHB6JMifVECP76PR8sD7tG7GAhXz83TLSEDECMw3jLc",
  "key17": "57bGvKN2mNmiyxv9yT5WjUCYreLb48R9eC5kWWpAGVSGd8pabpyM1EBbB5varshGJgbsiuihZ26MXu9jZE7XmLYC",
  "key18": "26fEE4LmPmx1EUHb4SJHiPB58ksSg56rQVPDHgkvwRCduCLnjJeWLH2kF8eLjuPNXzm7sEGrwv5uTmjKRKBjZbvs",
  "key19": "49KnQc6ENgTXEHzpeNSSce5PpRYvm7aSfKWbdQUWDZJKWYMHCcgdXdVqPz2h6kjmS3sxcy7GGqRUKc8YfZ2FwHUH",
  "key20": "5Hrt1LQcdE5cNoCALtk7HkU9YnYcUtHWvpbvH9L2EmekZ8Woy84DmUrPCxdwgGtEdeXhx9dE3pH2H72ivw7aWWcn",
  "key21": "SAmurFhQbjxWDwxyCdrWG7hsb8Br2WYgZ6C4qQSAA1bQgqANaR6siMMuMVFh3xSF1RQCgkcBxSUEyz8DFYiKRET",
  "key22": "5R82mSFLFrzwa9zsH7neenZ2hmdjfVCHXPsZVwd2CNo4dtu8e35pnAAMkGC1Akz4aqswiqwRdeuToPDszkk9t16M",
  "key23": "NtJMBmpervv7sHYL2AmSibHGSFrcdFER9YfLyrP5bk7MY9TPEqtuU59sXU8jzeRR5GDLPmXvjLbyxJdzkCaRQws",
  "key24": "2urhMv5UyDsZkmJkCQFrWabHGzvfpkDjZVXy6q7APeF3qJ62rBkzsbNdgLxfkEDSVwMPiXPoCDiZLL1ac6NNfPp7",
  "key25": "on8roq96xgi5Kd13Che5d9jdy7i3MRKKfAPyD7cRJyugHkBeXKZ1Z772YXyAgz9Wnz7YzQtazxw6feEGiKJp3oB",
  "key26": "63RWa5Y5Cnire87c2dMB1ZLqhQA3N12Shv2pNqJaxgP4NRa8Yte8dE2pPrqyaQ75i7PLDqdjBg4NuSnMpmNLoBSs",
  "key27": "9MjXFQdQEqVyXEMxrHjif2GjKXcgCXwHMh3Zo4wMaHhUN8d1YDMxArVM9uBKmKywixGzuUfEXqJT2pV1Gh57nc5",
  "key28": "5GUnVJdoftJhzSPgCUbpYTDgCf2hxjijqnRo2qqD7ajwkvUvVKHG8HVmN22xuK6rbJ2oSGCvuibLh1re2zPcQU1L",
  "key29": "4rXaGQvPFXjqsksQZ3AUgfM1gzJCcm7EPJ4HvZ5zywU8tb9WcJsCWkdPCrMMW1EXhdEtSPHS4bQ1Y79B4TfBCqmh",
  "key30": "aY1mZSCYoJe9P9Y19FJuVgqmXFrJ6CCVqsQfH4tCFHEomtPzF9iZeN7SJVAQKqZATWmRHrdBy86fepr2okDN7tz",
  "key31": "3Np6nJp8nsgwpHKZhB9KMhGnmffpsR1HyUypE2suMj76g5XB9KJ4sJxDkbnrHgWmMhcwSFmTRo9BanMJRVKCbc4w",
  "key32": "2QPibzaKjeftm7gfhRBF3pRcUQ4MLqTmsPQd5uzMBRZ6hBZVaeDMqYmynr7SvgtW1Lo5umGpRm7rq7D4BR5rDrhV",
  "key33": "3FqiNqXdRJkg5TWmUHt9hCh7cSqorciRAzE3v37rPiD3QM3ABn6tPLemvnD49Gp65pti5YZMW4mkNFnBna3QCMkV",
  "key34": "3EsoG7HVha9UHcECaQWs3UFPVLrtb77mRw71JeXAVg6szp4ELy49SfLBUBHrdPohmsygyUexEhzck89Ki38YQgKJ",
  "key35": "4E2audhEokXEz9hb3mhQBiCMH13A3TnSAPGuPTGHr21ASaXK4eYSk36nyjAEEEWBkq6RznxgWtzmpPRdiuv8K91C",
  "key36": "2rjLp53ob9L78YTW8GfGHcsE4aWTYWFjignM8k2ihyttZvyCqvFVu85cmvyJuXerghV6dDKtvic7pQSS2yzFgeER",
  "key37": "5fn7ffms5uBBjd9sRJLrZhoPb1bYuTbDrzsc4RiKPHsxD6TLJYsXqgGEBQYq8P6p9Hsdu4swNSbw4oTJdwvhFcLS",
  "key38": "39LNkoSfX7ktaDmsDJfMSYN2iv7XwYcx1dhcdXH2tv3XxJzmQgTu5T9WivPzooYgXUyoWPjFtP6fyp1mSviTox1Q",
  "key39": "gwmPjNRrX1LAewQb3snq3gHA1Fwhmxb2maJrkX7g3j5TJGwdLZ578BrmZpMezf8VWN9A4S9deCDpunQcLAbWuD6",
  "key40": "3HvNymdzhmV7ZEjYeweoVWhU1S9P3DF9rq5ZM226Fi8hEkFi8AMahhwktDA554gFaq39tqoLskBsdsCz2EiAV65y",
  "key41": "5PQKuJxdqsBnBK3jRkDja1qKMWhPGnqVT7zKEjm9iur8RrkG5PztNNFsPNnbFg8JP7Z6eLqx5hdR1qyfaGhhwaYk",
  "key42": "5FTBwqH5gn9RGySbHoX48FxorforVSdzsSTysDEw2HvUWwoKViDvFb6zGCvWYSZhEPdHKwppAXBLPgm3ANvytA1c",
  "key43": "64xFc9FVg6rmfa7yuaUJq2TVYkNAAnFF2drArR5FtaBCZMj6PzU6zrXKwXuYp6ve8SffRKL3KgyRMm4vpPwjnabg",
  "key44": "4M4ZJKwM53LUp2PNFmgWnhqVsWPs5HpNwAwBoY5tkKgZwSbsiNbTNRaCXtTJe28DSVZnDXho1VoPJ9Rw3pFJ2rBR",
  "key45": "FQQ7uewPBhbdjvJqRKzVBmApEwdsWoNBLXV1EzV8YCCmMCHJQxqKz6oPk8Kv85hdMEqMnK7GPv2HMf9hvPCK7jb",
  "key46": "NrxaRjBmMfbJ6yZXQZ1TQ3r3cxHj3HKF6chzUGgA7Dk1APa1Yk5xZgdYYcDY3nnuMhteqJfqH6SW9fSKohMRWMu",
  "key47": "9HYN3psrERaNKRHCJZqsPPJdAYdyKWub8K6UqRJT2ze4VMhz3BhNxYAhDXHmsFGWTN6eZLbiuP6rWWfaE6nRddk"
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

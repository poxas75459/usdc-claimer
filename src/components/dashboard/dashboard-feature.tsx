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
    "66nAxPryPLyVQaBbVFWrodaNqAJY3Xgtd3TXMCn3rEHv5Z9ZCro9PDcrMDKfu7X6wnwya6EgLAam3oGANFAwc8Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "seNUF4FUjxaDkHQTgJxTArUsSB48U3zuQPo6Sisjd5TqtVAjhhzmGD9PCieGvKK8GTEoDphRBoL7jpnhHfogg9V",
  "key1": "26mLi7raAkdngBEj6Zvca3tWM3xNcTcbiNkxHxaEjU2Sj8VwEVKWvxuBbw5rdqrYRY6xrvbAMgXSWpWFiFPzR3Ta",
  "key2": "5TzowqHGgqEFx4jKaRE3We8a5YnZnK3LC9z3mmfvVoyoVcwp7JMJ6v6GjGAsgrYipt79CxtFnoRQAkXbxY4pUMji",
  "key3": "5cA6PhPF3skFiBs5xes6bbV7DYPaPdnDdEbcSemAmUAXQThHZ5LcLqKJ3hWtvS1wci8HepGTYwHt6gngZVoR28Nb",
  "key4": "5CpJ8uGoaigPdTFsK9TMLeUix8FTtqHx3VVNBMikgzfF41zWzsJMR1ZVNB3r7dZZz5cpYYRC7cR1bxuTQWxNmgZB",
  "key5": "4feAn8mcxRMSUYFwMXW7W7WkXk1ZGynrMjn9zAmJbvqmtE9oUpsdiwY9bBWuV23Sp4sPxzL4upF2PQqfDBd7Cq5V",
  "key6": "67LSGMmCMAonoYw1EjdtJVZhtuBELUVrrWUJNx9YHmm3QNmTGCMKZGPsT2DrVu4Rg3nBJwx46bUVev8MrF3Th6H6",
  "key7": "5SqedXppM3FHJNi74ZvWzTS1wrMkdq5ReDvdXUpWMiTA3qTQBBMJJiqFd8comnBRRWxhFP9oy9CQ6PGBqa74ggrP",
  "key8": "3KHBZnGQ2KAmNuEg3cpFZHMhnZeYvZeY5K7bm1CMHDxpMPPfwatVtDiNV4oRqyGGi8sGSSWxpFQRf6KiUxMXcz4q",
  "key9": "24ipkj4NyHhSXQ6dMRfpjUrjoAqzHkFHjoMnQ7pCPaLi1gAWrE341HfbdPHdXeqK8UnY6n7cqLpwQadZC6RF3Rq5",
  "key10": "2zUnekayvfdaTiVhMibt4RPnf4vyAKn3koGHw1fzrUaHVw48eawefMwqoLnyGaDcFT1LLZ4TP6qp9N2yUqyoLvs2",
  "key11": "4vnCmaaNtWhBvdaQ9f39CSAeSVqaNsy7a1MKNrvJxjuSVXzZcg14gPjraMLvSECDVbT9tKCwKm5rZHWFAgcJwFPf",
  "key12": "4wNKS9FhL8p7Nr4gHKsnZB4GGQFGGxjLZWaT7UzmpopGW3JMCt6B73yrMMayRdEfh84e62oxCcTrA3ZU1WXPuYZQ",
  "key13": "wWaciuaQfhkTMN7y4nyFYPqicKR8BhHuftyGo1WZu3pKzZCBmFoQZsne2PZ8Sy4dzR9XhhxykjPYnAq7BKBmpG2",
  "key14": "229kuQj4XeTdhL6cKw6prVXwJwN6ujY1yQfXXyv6gGWLRniy4MXuLpDDRVwYGkFzcYCWZFbN3TmpoZryWny9EPyg",
  "key15": "4T2vCN4wkM3pxqqxdFHRqKELWtU56wpDA635zDAXwb5tTvfj1RHA6bAS3xgJeg8ZMiuxY6ePSov87Vbv7Za3KAYe",
  "key16": "fLFC9PMpJcRqf7hETBsoAchfazkLcUYUbyLZejiJDCYw4Nyb1ifHTx5F55XyEYjQy27kN7Afyxf5SzUjyj62KzC",
  "key17": "3Y9vw8yyxXihBNvZnUNhr1mMnDzAdEtoeei2KFgCWuHKYp3NrybtESc7TgMuNWm6ffFmuUotnnqUhARzYDAoB1RC",
  "key18": "vJaYTGMimt5vpgJtycA3bBbewzxWYmr6iXek3CounDNnZPFxYgF4m5MDbPVLUhccMwsknLoKg6kqgZKbL55ZDn5",
  "key19": "45gjg4WSMQwNfsMxV1agvsdKHKaXaLTMuDQD6EKoDtNYbEPZaGgTvSMfw6RMQT4SWhXV1hqhC74dLewtcw9X17Hv",
  "key20": "36CgP1HvekhqjJ6cZHb539HzCj4ozCxEDNDMBFevPoB2cJ92KFiabhcNjdaJFX4VbUctAWhUKAKPzRxLBHqPB1nu",
  "key21": "2zjJBUnTR4ZAKoo86zSLGKJhkQ4ksBAbspF8yyVvVEoiAwYPwbjqwexg6mBZW1gwfEcGsddk9sywomcR4HYuvP2v",
  "key22": "4MCDkwcCE8XEcifypPLnUV62kUPGtieitqSoKMQpE3Je8jDo6xr1bQMECxChFuM3C5qtQ1Pfi7xiMg6sNgWZBoMM",
  "key23": "3ZMXz5wzsmJb9sVi5qUqUGENEknC8NoT4tWXqGvbCQid56ZqzxMHhFDSdMdXCYWQULvVBSzBVhtficaUDabPzo6y",
  "key24": "YadvnPKuTtotuWuMWEDHRodz8Zm2RfZwQNmh2rTje9kusSQuKst7FNMtXD5cfywCHpdUnU52t4MmYYXrHwdiGse",
  "key25": "4h1gV111KS6qLFFS4EBmJ7QUp6FgPtfKRRZWMM18LuCCmg6tfJRVn88twaBhiarzoSByCjnFWyUopmqLVhd71LYe",
  "key26": "5GRuqCCM7G3a7YKDx4HBJ3MzDCEJ6Ge6bkRVrirzew9tcxwyP9RJd9kUZZj7n5dV4aN13mzvHH75m4YC3HpYLbwK",
  "key27": "5APaPwLvJmwmsHZKTS8fsmQVGUDQ2itm7mGcBBNcL4Y5eZ4PVsXLC1d8HFoiMYvqq8b5jvX4oZeod378zC6tGVjV",
  "key28": "5SbamYaP6eusSR6LXeKCFQCLWeFDJrucKrGAuJZWviBUDC357cPR6dzJodpwW7Tz5TVcJPk7UcK2D4BHt393CX3E",
  "key29": "2SwRTwvmvZNCu8pyLBAKsNab2uVTmihgYTG3HmvtpTPVaRftKFhfdqAYTdwTdT8FZ1QyXCTwuo83MzAJSo7NbDdc",
  "key30": "4qHPfhsLgMGc2W11yg1wZGCzo6hRcJbf9ymDJn6s5y5tZrHqL7zXVZQCAqrgMxiXPD6c7zbk65ZMVnErBhBsXtXT",
  "key31": "5vdJjvctu8ZY9iXPN36AhkFNVPM95g6hMH37bM7PYG5cyohwykZzbH9DCpFWgb74QVqfhtq4SRHgv44JTmg3DvCF",
  "key32": "d1KzD7UDwmNN23uBCGgXKU4YvN7dvKAvpe4RVAR6YWw6BBiF4oXd46Xwqj9gPjbuh33RMSnpMEDa55jPDY7zixG",
  "key33": "2qjBVw5Xgxk6AdzqoyRm7D8qhDUrDvdL9KqHe3KTciHU5yBPjmXDjn89J9oDtWnDZWzytg5sxCA6Qsh7W66EEPZ2",
  "key34": "4h7Qw8C2h74m7ZZ7sLDjzy6JzFj8Ga7YVdhntMrBP2oq5C7YzqYexCLxkow6jfSarGTLM9gZMvjLcadMXWzLroKt",
  "key35": "5MgYxEk42unjPcTcGXuhCJ22br8vh2FKHKLdz2yMLLfDjXQoNxsaJv6KFDJij5pvZKKauU5VzasoRM8he98mNFEm",
  "key36": "41eJbM3L3jyae3oU6d3VCRWQS3ESod9rQ6BnU1h4CQx96faLq6aEtHLpFNCVdT5ZRZUkJVNEbciEgytC4v3W1GT4",
  "key37": "SfupmnBKwhBGTBaVvAgsch1YqvxJeYyxWKiicYJwaBaDE86zqfr2uyLtnFTAwTfsJsbWKgZcMxvJrTZdAEUSNXG",
  "key38": "MaEBmLCd1EE9CorNUuesgbRVSDGcss2iShaU558XG7Ls8LBAGRaAPHQbTKnXgQGdwXBjYW7cDfz724hrvqzCVLg",
  "key39": "p6kgbuqKNqA2cGSg4cvEooXppLK8CRbiqf7CTcrSmTcyM7ywYpc6imkjwd7frFjtfMbkzHcbg5yEBo1gkWnnVc6",
  "key40": "2HY292SmLsFTmUmGQ8BKXa46BSPLanPgC5Jonyi8aYHoU9iS9yxic26gnW8J3VpDkjYUmcGHDY6tkWs1WWZ9Yyqu",
  "key41": "4McSW3TQMw4sozxdzo2ShxoiA1m2puVrEwAuNmgRzNd6DVDijVTcxxfb5WZAfsK5mrFyTMGgW2brtivSULg16No1",
  "key42": "pBnKvPcP3Ho5qj6MsCU4ZDrTfkLTRnHzbUpPNFoiMsHe1NguUDMkgA6buLXC7Gu98d6TLdC6p6hvEDK1Q2T4u8g",
  "key43": "5S9ctzyYTrB2uMB3fM1oH5tnHriLZa8dkbHoibtpCuTi5E7fh9temG8Nwdg746SAd4p7GCxyRCbnfhPns6nkKytj",
  "key44": "BP3QTEbgC8wNv4H3kHUM3VdHvuTTS1JZ3JixniJYNjqFmFw2kJ2sXGq8RmEPWyXH5ok8gK6iWpiBkfppG8zWAhi",
  "key45": "3FrHEEULrdGT3GPu8zycaW2TyyAt4dQyBnkqTEsQE3uCWPNdHFLzoZzPtzw9rdVq4sirkhavVH4GF8vJv4MBjtLY",
  "key46": "317TZjExjxzu2o8emdWBhYt6G9ALJq4Lxw4wFBXnUj1nHU4x7zFA7ZsSew82FZrwXnP9saCnXuyDDJiR73XDgszp"
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

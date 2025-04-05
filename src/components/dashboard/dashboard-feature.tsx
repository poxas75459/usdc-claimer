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
    "5QC8zFythGVeH6YnLBXdC4WEz9gsfvxTbPGkwz2XMYAfzhjE9TeZuywTb7RLk5DwzKpBUoTjhed72C4yMjYp5ux9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FyZqZ3TkB8u8oM1H1F32yydsV2W1azDN7SzGLSg9tfyPKeASFPKp5M6ABA7KQgJMJZ1DZnpJzQ57dEPEbRXhBZn",
  "key1": "5TQucfBEUxpJ8mtnLvZCzdP5oq3Cbnzj7ro4ZxAnchhiWpMzoKLTrr9ZBD7wh9pFdaiRJAXjhSSHdWU7xar8X7A4",
  "key2": "5VhdRhQ8TCsXLsr6zqfVhJ5toETiS8dTaAeqA9nhiYktwNxCurF3R7JsVAicPu9KTeNdrgLVtR7c8Ganuf2eZJkK",
  "key3": "56vTuKFADJeMtKj4rsp7buG11nqy2MezwwU3yqPFpMzUkrGPjzye5XX68TdqBMDUzwyXfbSHBEzvnUB8Fx3gXuTC",
  "key4": "4VaZkF3WGzWdjTWTx4Cm27Scm5DCoSh4UU2FN5vxSvVuiWaUh5rRohXVAusC6SXK3HMLJZPK3R9J2FH2q8EZinXP",
  "key5": "TMPCYvKiGxqBKbP63U9CEfMzr4zebFa84oW9fQ6h2qShTwTAQ2wtqYsnjZpmDPheSM5GbukaBcqXWTBM6rY3gon",
  "key6": "4buZjj9PYGdy8aKb3TQmnsiqug1ii5CWp7QqZpjVEvesuDNKXySuLZ4vFbQz2yLYqFeDeA3tk99menywt9wZxztT",
  "key7": "g7eoevBrx5HSkZvJLDctPt65vV5Qa5GoMmacsvhLh2CxY9RSHrY7iB8TyGttam5f8RC1DFnZuPEQXWW1A6Ecmdx",
  "key8": "4ZNEyYrL2ZvRyA714Ty8248tEGbmwATUK98F42sWMWZkMonWse1RaRRDR7tfvk1DN2JrEm2yRUrS4R6HCsjm2Q7D",
  "key9": "3EwHzJBQSrudcYDVEjU4iDFvkA4fEschCaQ7oDRSMgcW4zvdjJgpRJKqgawY2Znc3CRCee8SM3ZZLcvHrbF88NNu",
  "key10": "h18BAYnZKHnkDgdipDDyas161mLf78989eA1YCPM8hj1WPhDWgD1UJaiCqFLQ2FSE8VTpA4duycAiVHFYe6Kccs",
  "key11": "3y2rNMiJGDaaYceynhmcoeevhGtAahSJMuLtgDxkDr9Qb3W8RVv5Vu3gJDw7dE5ah7gvZQ5inpTwx3ynYyf9yy2B",
  "key12": "5GyyYm1SeGeqLXhcEZk8bsNzyDAx4mqotqztNcC1cHTpmQ6SySYCnufZPR7f4EHL9erUT4NFYiahQj8rFhfvN1WM",
  "key13": "5hpHzsieouLbK41oGVaGq5iyEtcthmgmsEHiNhMcYjZCd29yZnxBqPNsPar8CRGeKBfoFX1nw6vwY19s651z2w5T",
  "key14": "2kbp1CkqrXQWiLAbtBiVn6Pb74HpjNiHm6K9XiRuNVaMy1b53JcnJLWi1QFp2jCZUcEZari8L5zTZtnMQfrvynAU",
  "key15": "5yfTjpTPUK3kVx96fKFbqFH1r7zviEBnUp8ZtL5KUZHtrG24bbw7apXnxorg322qVq2LRBaqBjm2iNSymZAz3wSa",
  "key16": "5VSVJvNBmxheqFip9pHZTjPU9DgNX25fJbn377XVCVXFTJHPxp9yJiyBEwzmrY2YtvrEN5ErUDKQ1Gm5LosDeJyh",
  "key17": "tMa2yjKi6MrxXEEX32m1P44NzzUaf8NQAcYcZ8Duu3RdEfrpW6yPryXqo8Ng2jNXA9zR5Lkpu2bKxk7CYJRPWsu",
  "key18": "2ohyupzY25MZABGKTcmtsq1eCdK66CrYZNmRHsPVeed1hn1DeK5RiknJ6fe5gbAkCVKUd4Rxg8ntZMv7Cvw3SS28",
  "key19": "2ZszDLPQL6UyjPzPkc4EsBPW74sf9Jy3PJf7oHJuCwUyNVcn9EtxZhTPiB95zcWRsF6XirmzfmzxBfTBVZHi9okR",
  "key20": "48LQWPoDHrQzyAxqTZ6TpBDBwY11CFrjtMwCKqCj2dwXc2QiHjFUJZHHf3JckLcPWS7qVVyARKjoJY72xqGyK5Uk",
  "key21": "4a7F39UY4cYiAP4LnWBZzjuEUcmbePNR5tjkVwPAzAAQcBQbvyJ5AKWrAxz4CrAHWo2siEZiEUwWDeCpKTZL2Tzf",
  "key22": "2GPf2aR8drQrTZwXJM4e4aXqU45dsmiCrvHEd9RDy85jg4dqjpqnA5Gq2zgMFJbp5qJd73An54bCDEBXHiJfptey",
  "key23": "fK4SAE2TdsNgt6p1mdECdKWwnzyZ6GBLGWJ84DdiveiRqjwrxDvWQVK31ZDhNPcL3J3KYFsE9kKhMWLGotiKcVN",
  "key24": "5FG7jHdn4JZV3r2cL1Q6f3ftk6YzLMyXASVv1yDs8kwiUA9S4xo9ygBKazGfVN9uZez4QzF2MP5hQmFpr5mnKG7P",
  "key25": "63js4gKZGExAkZKY1hEQkuchXLLmFFumUFEQi1CF5gz334kRVqxcdH4MnWsZAnPZ6bVPn8roEc6kasiJWey4Sgby",
  "key26": "3adEX9JcDyytUsfqXoYfENYv58TubTNAs111pqPHQ4bUg25Z1PCqZK7yJ38j1Ei9ifzEjQJSVjMn2j3oHcpj2EL4",
  "key27": "4z7bywmxi4jqsPuytaGv3CcLujGTQHWpWxvrF4TANJcn9TD9qHDo5vS9GWgnKvyWPUahtMdnD2cti4Eyhuedfm7u",
  "key28": "45wjQdERGz5QqMdvArSCQ5rNG8Q5qoPwbnecSj7m9n5rfDsZYnesWq7pmWEmh3gtJZQoK3AkbKWtzWhQyxPZHCD3",
  "key29": "4q3NE41tfgQD4oN9KQiAbcueP3LpUzYzP2fXBpVwajspWrBWbn6UwrWhj8zxFpbMRRcBMGqMqDYBFLqsZ14CjV8m",
  "key30": "66btZ2UYJEQ2TmKhQh9s63pccjkcjiwSFtssy8iPgycwEMkRF9HKH3FWCKYHv3yWjWx3RcynwbGzgahC4HgMqeYT",
  "key31": "3yLhdbkB1myAdxeuzgGYuxoEsvLtpe3ff9DGZXHN2UVBe23nckAogtgJtMw5wow9q9C2Zb612sXs3s37LqY6u3Uy",
  "key32": "2GgGusjeMQBJ8rS4HJJxn5u6dY19CmJ4rPk1nChKNys6AvVU7Ne3CC9nEjLtBHwGips62pw6o35YyhSbMdLb9wcY",
  "key33": "4irhcTYnsLkNMttHEhZpJPNPNWUGf1ZA5Yoco8Nnk4af3b3hMoRoQUWKRzfpkRo5rpFzrtWztTWamfPPstNBMUAL",
  "key34": "256GXoyq9xSomoaq3AfaRwLC28qBxg7ySupeWwTochLAN1YWiWmRc8vCiNqW5qn1eS2zo57UCSG8FxGTroNccdz9",
  "key35": "2Wf2nWqdwp5wJgL6jpihJanBHBXTLknPA1RijYLS8iWGJjQEP1VuvDq2gekmoafns5KZPfpPFkjQKn1exMuJm1pq",
  "key36": "5jNvbYhyrLXBGRGKjD8RvreVevE9eBXaiV6SibQRNdVPmN3eyDHnfcxoEaTcHQipHbwVCGix5AVUxzWnReMeaPhb",
  "key37": "4x1s4jPYo75f4PoBiVUW8eJVbxj8Hv13vSHxVYKKCVA5eLwFBgWzixJALmQbnBXnvAbSwdh9tS7vwfpzJyXWQAjb",
  "key38": "KbvyJ5PC6vGFt2KX7CYiYXejpzNHyuX6UWGtrmBkoR8TChZawAYaDTmvCupryoQ5bcwotEkK2fNBKi6H3xFNM4E",
  "key39": "4L5qXskK7aPWQCPtcMG8gjzvSVithcpy8zdhfAzWYBTgQp12GTnM2sc5pTMuckpQCDHR4KLhvwZSR2Ukfe29Fai6",
  "key40": "4KzpbpwJdAAfxVw2GSGcpAhPiYadrC345kp4TAKuvnqk8wZAixKZC8ko4pqnCNrmzpZRmMmgqXa1YmayPFXXYPHi",
  "key41": "5Bm6U54wWCPHfojfpYGvtYKfsgyGuPJqDNvnZytwhBJxkFvbmwhJgpcW6Fcoyz6QarrFxiU72P6iCkHgMXjo6kmn",
  "key42": "5uVrdiKYYqwrPGwebNBhNSFcTvBswSuEawsFygkAfKHjgf3KmdoFFU38tWeMdM7SymZC233YKgMjxPNMoCRBmPST",
  "key43": "QNEoFgyaUfDWY7oZNS2r4tW3rpWde94Bye9i9mmCP5AxbzbdbhP5XZCnBdz3GFWFHcUiMgtmKpgfQd33MtHZLJd",
  "key44": "CJKuvMYHpQtjG7hqQwi7243CipSupS5RdDYconahwi5u4C3WeL4w2n5hYheAip1oarYSVdpv1wS577Mnprd5bfB"
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

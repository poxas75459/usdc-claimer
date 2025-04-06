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
    "659dccafkGtYEFeF3xgusWHVwjQUxHnB8nBN13oGkjWPgu1SAkHJjznVq6y9nobZuGofEnBTyb3YWELgDXsFSkam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wQD4SxhGJw3G4ZpRytcDmz1mzXU5FgprePg3Gh4xXVGL8fue5Rc3oGLzJntachBEfZ3xE2KxLRxzhw2JiqeAgS",
  "key1": "47sBgRuHeFkRNjpNDmxgVW6ziPNDEtkXoupGVzvzKKtVTPx2ZpGGsnbhzYGeS4QEZ4Z151ryV3R77cnEHHaNUxiJ",
  "key2": "zz4Q89j4h6EziNUbbUhtAa97MtjPyeyuFkowkyGt1MrxhrGQ6uzbtU1TMnn2wvpawXt4chqcc4fkgUFv6y7ELRP",
  "key3": "5vPM5myzqd9sEM7Qzkvc5fmMCapAvkQ4QFmzMDzTqfXpZhB9hKWuXzBSLwqaxv64RLTYd8QQY46eoa8AeW4ArYSc",
  "key4": "5hujL2jV5zGxSdMHLC4K5UqbE8H6CvrHPa3GBZMdY4yYNbHbcxvHaLrc73NYVyVDFJAXz7DbjnXSGwAKh7yHqXpr",
  "key5": "XSvnbzJMUSPjPw4EXe24Lo2QRQJxb7C8Fpg768ChJJsceqPZZxdA6fQcCHXnCLTcJDwpiVoJiHCpce6WNST77HF",
  "key6": "6FogBagQZ4jCHdhQx2Ph5n857jsUVcy2T9tn88RxsYaLKhcUCw7Nk3tuHYrXDzet8GDch32zxp6m1QN3grMFzHp",
  "key7": "3CS4fMQmqA6Bw5cVpSYMgxySqSbVjyMSrnmybzyT9HbfibS3Kkq7NveaadgikiuTSLgVGAr8hpmEfNfg6nmMtjtj",
  "key8": "3vd5vcnF1VqZmjgKyRh29eJ3ePk5SWyz1LDgqjLGU1C9KmyCjGEijweHjVeG68Noh52bPAXgeS3rnx9d8csHG74P",
  "key9": "47jSZJ2viEf8FPLquDtJzAnoFCUJa5etK5AKgELMBMU8HwZ3ieNzy14De8842gJAaDEEhQCoobRa9h4PVV4baTxJ",
  "key10": "2tKLsYTaG5HeN7Qmrb6mURWs62sZGyNBApTUUVbb6eGKYraXDmma6Nk9wRmj53cqFe537wizSZoaKMs923a7qPQz",
  "key11": "61PyBkWsgcsRFwrZqw4TUJbNAdu4Gv8kHgq4XdSEVsj5CuhtanHACUWEzcd2Q11mM5CHEbVTasSnzcyV5a6Vp52z",
  "key12": "4zxUeJwNYbogYw1HUtrNjW7EGXpF7CYc75NXKjcCf8sscvM1kZ3BHzeepCuzoxt9vtjCJtjUemDt8pKA2VFUb2i4",
  "key13": "5xek4xtcfDV79goMWeYErsgwvayEFgRvQfbJLJNFxA2jWsLYh4PpojFqWiSPoJjqgi2PRD3fewkPs7CPRGFUKqYV",
  "key14": "xVwxjpLk7MAaLBh9wKYXDWEGDFNrt1MCoCWMPShJhTVaR6wVp6YxX1RLBMXywcK6uRwxRW1tZZ2z1AGXL6ZZGsX",
  "key15": "4Vjm3ZjQHmHC46fsGzCR9S3EdKeDTd3Q1pZST7v1BpB1HgsXTAfuKntaaWB5rUXQDpWLSxEyvszVU2o6Ym8YKXwz",
  "key16": "2qoK2J8vkj7Aeja7WDxH1VUgfN7EkiZNptBvBC8nGau3NyFJHE5UQ2tqRedATLjdV455eJMBcSJSVwE9zexDW3jB",
  "key17": "3QuvHRSXRVVvoKsrML6qGeUjHMniabmFBDs6h6ni4QuTcpyiKTxDryBL5XVAcTdkGV4r6DsRvjsGVvunsorAmEqp",
  "key18": "2YahVCsY6t2zLW4unzztdszDAspZ2fxHqw5eqrf2nQmMQdEK7DvDpNzRryMvSzmKehSWZJ4yMkg5MNBvqnALxiQb",
  "key19": "2Jpy5AYauf49dJJ11docdUmC2vt557mcckAudiv2zvyrDf9mj8AJYgbJeWvQsKfBcJX1rydWQNfVosrjQKjw6VaU",
  "key20": "2gfKHgoggjd2Su6uFPSPnJxhzU78CRsncM8hwnEuNFJD3R6WfCv2Yw9CKoVmMmWWqPJFyxDLzviEeNVaH6XUpTXY",
  "key21": "2yGEKpx2Zt5SkqaXRogRxMGHthAdDTYogwiJvAMbwPYTKTGV3DvnNXq86omyyp9hVqedhgtBuQjK87P1i7wiqjnH",
  "key22": "2J3akhfEcrRb4xTfqecKfZbFuSjpwvrzxbhgtBr4yv2195jcgLhgVVppBQ9Zu3yYqMrnvvnU3rZdxWx4hhGSfzzx",
  "key23": "5D6nPE34wD8VF6DKrRnkF9D8AEfqAWuMXcQgnSKnz9qCKXijrQx2vu34KyZkgPkTtaZyxbxH3GXpAsPTHdSEGbdE",
  "key24": "5N632EHibLApYxgoHPDJk3xEHVD5J2g1yPXzFT7m7PK8oYsn8D6j1BNqvBXeEj33MFK4BrdbhoamTbacfi7jwEtJ",
  "key25": "SaFrLRS65PQRN9q914iY7GShQLzZREam1cbM4EN5hmekUHBHj977BRvZBUQkemTXtFc3enpV5Bw42JV4io5BxYB",
  "key26": "3Mf7D6d2XULXg7U2ebFceCKt1Tqxi9ucLbAcidQ6JkmdDFcgQbrgo2VgpqV81XNcBNMq5evjiCrB4DJqc1PP9as3",
  "key27": "AAT8S4gG3zmEtAHNmZLWzQQC1B4vRyb6JcYLCMCPXCY899zjJ7uXabfULtXKUZ369LoKaxqLBCAT9Z3QD9Er2vi",
  "key28": "2uxRCNEjkHFxpSyD5SGMSyCEAqULgiTZrdW9ZGxp7FdztrFCgzbEPEvyYAhFckS6xN83Njmqximsx7RunMxMkb86",
  "key29": "4hpNbPKXaH1rkzZwAqDUYE2zXHjy8tXh2UNAizjrFKZfXzaxnX1yLLjyWQPZFFKK5UXKmrzC2jKsyut9P8avTmoV",
  "key30": "4shkSMuEF2Qdcz897hDMataTtGbsmVck773iHFoJ3CxfUnYpByzfbkTmWTzSshqoqLSgVMJKU5wKeNhvjGGB9TDB",
  "key31": "47GV5qxNNsyW7BNAVoebs9BZDG6cEnzka1oXeYQBpmWXSUYuwDmSdYhj8RZdCj11XvabJinxt2bRwJR5tLhPuaGV",
  "key32": "5cXTv1BeWoi5PsFEJgeGu2MXJvgF2UJ6Qn8VqKa54XPYYbaLPzQMADZ3DwrUodCGysAKFS6R7NnUj8ueGkR5c7Nf",
  "key33": "5UJvyTwK8kkRUWGXgTu9Xnte9SdwustTdaXRdK4gS1QWHBeL9TVvNBFXa5TfxHB4kbsQVFrFTwyM8uXpdThFQpuM",
  "key34": "5Ky5a5meSf4kwotAxRrVmu1edKVYWs5kr6p75BjtGoEkF83g65B8RP1RFMQbisiPwXfGdxtt7syManqixSTHStsY",
  "key35": "3CYPpdGer7edzm38cJdsoVK4kLH534FZpRas9theP6du7zY6kM3GmgkekD3MUHp4DC9AiQc9sSgg4t4DEL88kk9B",
  "key36": "4xupNQLMCdjaZrg1S5wrQA723JXu1NuSrh5RQrs9WtdJSKHjGFEz7AU59hKSQWapaChU5cc2WTWiDQ666QEFYP8t",
  "key37": "3Ytu2acYMMG3XNE2WzrfGqR623DSStduMvqfnWa3rEmT5e4DUbS4DEQspWweebDvBfpmPfcGuBGHmJ22er4g9Kcn"
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

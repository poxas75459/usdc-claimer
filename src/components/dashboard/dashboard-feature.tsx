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
    "55XjSnRf8s71UDWKgTUdwD4PK64VxevLmGYti1zNcmCsE76aq1krfrjnBsDWTZkzFc3NThcLxrybbvW1hqBJNww6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRtkCTwFv5ensYPoNzT4ArHj6u1tYzwnLkLX3LUQCvkr7gkrT1z3CEoEdYKHj4LaWVeGS4R8AYgvx6ZRb1N76fV",
  "key1": "ELjDyWYAS8bPhq8BowSGEmwB2jSjjP8mBARb4DDm2BpGsFsK3eeGcowBAiTTdv52hd9Vkx3vRjxpwLdBhwvxfdK",
  "key2": "2NAw5aPWJb7rdYjoCzzHYNUTGEfqF1taaivEkPBFdJdupJtkiWTDSDwk1VZeb5KAtRzoSWzTPwm6bgXj7TLQhXPz",
  "key3": "5MuAD9iFYKRSuiGQ4cB794auGMXH6V4HDFYX6XWyrnmubsW4EqewEJSA7gkVAmzFiKs4FgRZTEovyQ5cQqibrg58",
  "key4": "2cpwBMRm46iyfEpQ3YPuaPD8sDtdm1B7sCeeMFDBw4mzfNrTVBqyeYo7bpf3x6p56hmwqMoPkKT6epa7Q4G8sEPN",
  "key5": "53UxRHNNewEs1SgUQsARL62nVZLERQqJSjNYzLMdyTJoUd6fE9EcX8eZ8Rt3nWHZvDKsqqGZqf6utaMbDqtPnZnL",
  "key6": "5b9u6Dyg6Ze5TuLzm8fHYrcDoEMKC6HF5xV9UF5nSmk4EoJu3wcVHouqR6F6WVPu1C2rEMvduSvd55nnSjBB41AS",
  "key7": "4zdQudUs2ZanDic2dxLRgr6iL15VxmSLTVNGRdpg4oRc9vWNDA3NjXE3Q8e3UZEaTjB8zv9786aB2RLsqQkT5Ty",
  "key8": "5T97fPivAYR5y77D4B77RYqMXTxYWzhxfSDAoQzGHQeSyDUPQfooZUCmaf2LPgJ8fnEuEiGL7USEzn4QiKPGvGTn",
  "key9": "2KwUsjNeBT9iZQ9a7Ehgy43ab3VibuD7bPr5obL6bzECYeseFwxx9pPsoUGePyiEcKEeoy3pU1WoYhKoo9Vvxraa",
  "key10": "v2GgwcZ3NNGDMPu2WJjQ6LNzYaFocPPsYiWkTWgrqwN5GZywAWo5GGFUXGAJ8D6CRKKe46YFwLigwQyizgzDbPm",
  "key11": "4ynsnTeMhfQJQ7ns8TC6uaCC27UUhRN73tA5Hy7b74mood4TgH89gCR6Mz3UEeNdtzzG3uvm2Kve2uKYU1dqDV88",
  "key12": "uZgH19fNLexGKtNidXcB7zEiQkDvVTjnEZ8ng2TjVGYtDKyunoPbc3bk9ZgtBjwevWTThhuB3g59RvSYCNLZr8L",
  "key13": "5cAmTr33hKEzyJsjie8oBxsewDmRQKSzJpFFyiSv3Vq1QZGZLiqUjWv3PzYxgG2mk5BWH1uTtcKSJCqZQWSjfRYw",
  "key14": "3fQYcpjVQBsjz7vyQt7Kqry1BrkG8ezJD9Z3Fx9ccwd8q8fxS3Hp84XFMs545KppuRbW5hhLxz3M1pd8CrmUDYWm",
  "key15": "4jztgkAFgS4JdNLxQbXDCCMN7HJw14rHvinkD6bAA16c8AjGib9RVV9zo1domBncrPeNEfrn4QHGCbgu6yr1xRaw",
  "key16": "t1GEwkpJwndgADSPD3UF6hgDR1p64zHyhvivjcgDTwujFB7LMtKX3GX5v2sFHse6ZJ2PeSM2mgtbui5Kh1cLtU8",
  "key17": "UCuR8SKVQuN66rCKk9G2Uehg5VQXqELvAvno5vwCVhkhZKeiMtkB4dSXvY4nRM6sRU9XCzc9tjXpFVAC9iyPny7",
  "key18": "29NZdBa2pDRzSwR66NCBAq9hduN4V3BF77u4xVHzr3HRRoBuAcbtA8gWbQMoSKNrzNQLLTZV2vnsGQVqW45d2ZgS",
  "key19": "45piJrcJNam4fu6iU6acFJY3krEVrzs7r778z3GogPqdj5wrtADSJQ3ZBmaW1QU8WCmAxe4XFJv1FDfcqNmrgVo5",
  "key20": "5E77inZukHSGp43TwbtmDUecsk2xCP2u9MLmc8GKjxmazZfxkLYyoK6BjUi7yFr1xq7YZvkcYXaa6E4hy78gQDDm",
  "key21": "3J4PZidSjBJKyhZKBzA2smMBTp9XaNGAGfkQ6EYktAhqXsEVXhvBvAv1ssJjrgcCLBpJfS7qwkdd2NBJns37nujt",
  "key22": "3pHRzEsW3WyW1yvyrr15xx1tjfXs3GyMCoTZE4W8vLdp3kCbmsNv5AhuntoTbFmLLx7y4qFZXxebHJTYqQViGsFY",
  "key23": "3K9rpnH4Y2yw2ACZ6jMgtHf9ZRgQMsC19cG3tk6Fb9KydVH2k6zcWJQqzFVACz93BcEEFWtE6LzbBrmm35vosBip",
  "key24": "5JQmGdREjZ4jgkhYXJ2h2YajYsi27Vef9QjU3Gdnzwoc6h7bDffLAV7RPnu2KekFPtQeXxwc7gnEZXnHRpeJHTdr",
  "key25": "2rt1uuUHfMjpmstUzYqmQs9YjzV3Ye7f3bcixRB2JWqoYzoLHdiWnyiSKMCU4czwSgZoGL3DB6x23BPGsmtNKK99",
  "key26": "564YtMhC9e8Zc91pT1sZRcjbjuSx26uNeTqSgcMVCZZTYB87pXL3RnF3KKHc2pJzUm85nsA9possgQWWENYuk9x9",
  "key27": "WHMqcnG1ZUxdK9p3tcG1duUi3LgKKgHbw43WdQeQxYnEZRZjm9z7WcWrpxe2UqDWfmnhy3nLYC3EUzpEsiZh2Qp",
  "key28": "4r2B9sJH8ye7GxY974JLtQwyfbrP5CWUPcZ6sdZzSUWNZpoBmAHAGgtPfJVR3w2VMeu9oJhcBaWKtNKRSrYqJF7s",
  "key29": "2azK6uxMD3MDLj6JvhJceApZixAxdskgNgQah5fYKez2E4y18mKCkuRZZSXJNZm9aPeMsAb71ENvM3LyTdy8QMoH",
  "key30": "3sxuafdsfzYyLSotyGsRxAaJ9g9YswAq8vTx2KNgRuQREvReKy4P1ztuJfKyPfg5oBKEC1rbQAkaNSzS4upBSySw",
  "key31": "4WcyqbZrnSU7fBKJ59FWhVYZSbwcJaiRj4kkekZb4dN42TV7pqDzqyxvbsPop3nFvxb1xy5qcRxHNgynJkcHGT63",
  "key32": "2vsRoBCyC73H1TJjCKEMCFFTtvRDR1XBinVdCxP9JQ6PfqZ724KFkNGPFJUfe1BKfXg6CDPTPeZh4g2p12XKFdhZ",
  "key33": "5boW63mgq3NNArkPAjLLF17wrCoHNK3TSrRfVs7jXQCwGu6PK7UwCARucKucHciKAbmu3Dg9F2h3Q1Sp4f5Lv1CY",
  "key34": "5NLmg2r15Qo9snpVFYpgD2CX4VLdpwFrCcszLmow9ihhrsNjDezS6UiheBipQkxpU8QEA41DR5soebf8owmnH7vG",
  "key35": "61NZDMts6CkYizv4KuQKgHzbw7gGrAAPzhFRnyKqXqbFBFjs5ucsoyRWVXuN5NnpR1tPCdSEk9ntiCg4Jx4otyzv",
  "key36": "8h1agRxcNVi9GkvBHXRJmHRCJQL2pR5TWtkK7xhAdqfkEG6Qfk33FtF5igCY6f34Y8mvjqXDqVUB69vgPpNdBKw",
  "key37": "f3MoEMXEW12sm83oMwqZHAwoyPxRhuvmbbA2LyCxagtZwAkgDfi9uv3qgqRzUeivpB9jfzAbTmqFa8oiCsf653W",
  "key38": "5K7cqdsCKGoM8WWN8RvPBCKKJ7hpsLPK6sVKHHjChLKoGHps4XnVQMdiESHDVm2kDqkfzRo7eLRovZhE2UzT5TN9",
  "key39": "641U8dAQ9LPpk3d5JuAVAvB1TDE4Bc6sky6wGnePJqDXe98TVg27M8wYs8gqWLbxcYbsVEPTUbumUDWPJdWfkkU9",
  "key40": "62Jris16cmA4mRTcji1Xh8SmQxQYPxoiPAsbzcAgNzyBq5XgXTiiQdRR6CEUUgJswMw8sPX3wDBEgkV5sxLGLyMT",
  "key41": "3v8bKFaHi9wgbG8qnXUhAzCDUyM99mo62dmgBYGafjwyUogX4ZiejTodoMezPpE3jLyNmgq6fEEWkK9Srzn1w5x2",
  "key42": "qCbAptxdLYxC3fCN2MAYPHR2Zy7vuwpiA12rh13Az6r6KAr9tZmUdzaebRd3QqwVAS87RVQAM4kyiWk7GSCC6zm",
  "key43": "2sgJeBzz3ctmDj8BiebwYeSEH8miu6TViTAmLJkPRKfpThNvmxfsnBhnokwQ4un1xzq3JhaLFZjL7badVMycirUQ",
  "key44": "2cj78KioCLJi9tASG1zdzXiCjiGs6pxUsYm4occ39X6vymGbVpBuNHtckCrTaJmtDjCjRzfh3yQYRWBh82Pyj54m",
  "key45": "3nhyPFURfepE22BNPPNFwMT7HLrp6nM8vaCEHgqrA4KVkUKrMadBdZT6ZTBTzHYdCYvBM6DaMdFJ9kitMcDkcg4j"
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

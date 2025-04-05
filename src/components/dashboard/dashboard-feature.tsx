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
    "4cadkUQKt52SG9EKkfpvyHAVXR176WfGSPHXj7VnRAGfP8f6CWum9TE6391EHMifESLJKmwa2sggmgLX3qAENPcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244bSeZNdEcxm85wU5gd9zZSxGfey45JnNfaCqH6tjnv3MrU7aZQsgjZ4NXaSHj5oAEKq1EjiLtGEfvb2Q9WjCRc",
  "key1": "5V9DAgWMKpRRPYinis5CYVpbKCHsL8Lw79JPQG14zZXuXdZxvQAoRhzxS9vP7q6XEfkwqKQqDuVCoHEFWEURyTFN",
  "key2": "3AHiLfo9ucgQgrfeodffMKxtweSKnovu1hsZr6ESMRXBgc1wqv3d4voaG7HrdnUffVhny66afD4vZaQ1ambWd3f1",
  "key3": "4vnRuZopyTvrdXy8DX3BXPfy9zeXyfPbZXP53TnM6AcYeAWWJPLnKFMBXD3G3Xmy1HFmGsycYy2nkaz2vPwsWwjX",
  "key4": "612LRCanCwnndSFSV1wbQBTHjZLSKbcxJTxAmrFXNLzJrann7FzyRgop49Z56PEcxqSK6JreprGLWcAUZofkKgYq",
  "key5": "45c7igZbT8vXNt2wG2GWJTt4DV615BCFRHdeM1VJdjDVrUib8mnfxre9cmyn6q7Ppf7vsTB1fBDRXb9p31k1MhL9",
  "key6": "UCStp271MLg7xVQCvhoyJhqK2DTXbrX7NqUbJZeXtVXgvGzDavCGGwrT5GUz5MMFJqXGw3e5yBtLmmmAdFFbUfW",
  "key7": "3kENH5aNGY5627a6CwySSWvdYifdksmrgMkTRJPvugFfTdf7GvghwkYPkXEAt8fNPbYKHAYQ5iuqb24jZHfynxSa",
  "key8": "5uM2LR6fadzyK2rroGj5rL8hcrNZMY7dmupxnyqbzEUhMeEjFD8dV4fKT9NygE98fYG5UQMdzdNe3j7qYSgJ3UA1",
  "key9": "64BT5d7Rsg4piF9TNRxcevES5A7WkQbU4auib5sc1g2WvYnXsNfFDzGurZCv5EvZbs615QEgAiChkDRVUa8K48vb",
  "key10": "3bpjRpmBDP2KhTSwMZNU37WE4H3R6NbLVRN2dX9iU6V6rtbYQfrGhm7xTArhVL4sUeQBTa6VdkZPBLoTvLR7AGUo",
  "key11": "583A412oA9EYWsHXv5rAMTHcHPxzmHdfWRzF9ZQWjQ68v2HLh8SB2MzouRvZJ5tR2Lvx6sNfxc1DrTGmWq892uAi",
  "key12": "2FzTWpxVnxqc6JDnXkTzZC7xgaRx5FQ16MsXVFxHGS8nPcX7KU5qDt64A2JzCFH3rpmkfP2qXRs8Gf9MyEyuHuDj",
  "key13": "3Xp7xuRMhm1ZmnXHgqCmDg31Sc422Ujqub5ANZczYyWcvNt6KnotSWf4RSJC9LHKiZyYmWfvtNo1mgamZ1qu14Ho",
  "key14": "48BHHqMrPDvQ1gvd5wPm6LcfZRZV2X63sYY2iy1riXTkC3fGwYYNiw5X9Rr8SAUCh4cdGUhDcgJJH5sEgwpxekn2",
  "key15": "2qa4zbL57aeE9gYyQ7q5GGnV9BRU7FBULPeKrpeiCEuVLJWXJxWULKDjnkrJNSQbdw6VaAUx1ZFCPW4NxRwwrXET",
  "key16": "5C4uWf3ke6TwcnUzTg8bgTVdva7zprSgnr7QWWJGNSyBjRofG3ZXMHV53WPkzFqMCMKEynsddWLs4u12TWvPA9Gr",
  "key17": "5WmSreMM7VRSFsBd8JhY9LwMS9Kmoi7jDx5cjJsbbuEDdgFsbcsqRMW9PJ62b53kQ5R7atjRGrauCgiKdT6R4gup",
  "key18": "64Tb3LKuxqFn4t9ZDzfpL7QgdzbEbupFtfVAu5sppjRLaMpV5ixy4MDUS9bdNSGPtdGa25YbXEnuhGxWiGHvYzw2",
  "key19": "2dju6u8c5wuWn6vUXP5cstFc7RJKrSKrH1wUBn3b7CptKXv1KJuD6ECzfiNzw9F83faMoZqky4HsUhA93sXmhTHA",
  "key20": "4pycZC7rgvXLDEerWV3sbtM31G7dZ2pZ9A4pk7RqruJY4Md4VDd1KwKp6NQhUW9PSVsfu3dXx9SZLwgXpMiodtYL",
  "key21": "57m9dSMLrYfk1ZxrWEqQWGw4Q8SGW2MnW9HLvbnUBQBeeByHGQhiPzRxmYFLZtkbdQPneEpsM2cddppAfssQEb3e",
  "key22": "7B7vpxJLMZPbA2Yc6397ntPcfMbS3SayErYkjQnouR8Liwt4jkjivQ2uP2EAVKppDaAsNptYmG1Vj9CSDGUbvSU",
  "key23": "2KJnM1k9npZHvA6xTqZKM3jhAFRhokCLd5FZqm15cDKqxanxnZfXDhjsg6sdnsAh7tMknvrjXViGgsrQHviVA2BQ",
  "key24": "2BGNhT7LX8cpSto5QiCaRYftv2L2H9u59NPd9764ALY2pyD3T4XoFqcAHnpygfLjgSRQnMBLk5noiMQ5QwTPVUUW",
  "key25": "5swo6TBUz5LwrwJZJV4Q7GUs5F5wQWfNT43zGJZMEdmQ3jaN83BKqTkyeV6eiApRcQznzJWi9omZLCMckg3fisYa",
  "key26": "3HHTFPsWdiXpBzVUWdwsCKo17zBkQohjWzyhPmrevE8S5bh6BFYcuhBMJSi8fUFDYkFCSninKgZZQbGKfdBfbqsZ",
  "key27": "3JEtUGwbwwB872b4rfhd3LWM1nzsdKaZC6NvfE2TMmvPWUxt5MLct9WcyMKQ3JkVLnBo7dyn6f3Moo9QcHgcNfcK",
  "key28": "mzkZaJb7Xri7T2asxDLSF4r81vyzqnu8jFcmFDRhVK7XgivdNy847Ft5jykmYh1T8q289WJNh4B6abS5Td32QTz",
  "key29": "2psgfWMJxmuCMa8Qc4e7NDiFnHSvEVqKgcKhTBvNdYKHpStV2LaJpjSdVG4QS3ojNaynuJg19pUKqtedHt5VcvLh",
  "key30": "fbRkeGzoJphqxr4fNLFMKRYoYxA256ER52rEKwErfofVwbwBAEqQWmeU15uALoaxRwiBB921TveiXMxw4ZiVRv6",
  "key31": "qPCpCpDFSPhfxiGYadWUUyTFFWCmhZAg1wsMMW1FDMaUx7J6sfuRYuqNUxRU9ZEa5HpCbzm9TBCSPbeS7DWB5ts",
  "key32": "o6CwuZNjRhazDQtjoeUivmARSrc7RvGRuYcxu9EsJPRCAvhErUj6FszLRcSztKBxQh5P7aLZKrBuuLEHQ3ZcE97",
  "key33": "5hR78Z4gvCEZuSCupif6MNVR7o7eMppADdkBw29xJB4gUJtuhgXbQbMrSBMoXdvJ597XzeTfyD25yzBDeEUXJB4V",
  "key34": "4CWvMsQTjNrTzZfDRVNWKepps5kjkitFh1M8MptsGjjQpK2U73rw9ksTBEiBBDM9tqdE9uKrD5u5iZDK6zi2HtN9",
  "key35": "psVoMQV4DVvBNX3JHcoxDDDEqsPPzs8Tsw9sGowUP54h6Yw3LEsaRKBn8t3YyxivPRk615rx2rHrdgbYALY3xSp",
  "key36": "PxXjsoKa4rYkkTyzNy26ac4pMQgQ9CBgRBFcW1MsCNmN6wmx4NHqRNMzt8ef9G3mb3Rf9v9MXm2y9XPnVk5cncm",
  "key37": "5CqaVee4H5uyQsp5kqMdCuwwXbeZTXes3HZMUHqL7jg8TLdCmKpgWCgufZB9GFRVDgBGAEEbVnH1rvr2pMgUVAkQ"
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

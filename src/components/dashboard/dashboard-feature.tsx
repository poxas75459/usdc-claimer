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
    "5FHTsChaviQCSPMwzzbMSgxm1BhX5sdMtSfjGvR7osRCodautMUNdXohWVdwed1cnSREUTbc9dxWt19FudSTbdkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkoUTYYGXWGHkbg6MPQqvhoZ94B43rmdLTEP3vG9yS8D4H7HUtLXqnYnRQ4Q8xQdKqN4kqpzkk11JubCcZYKAmk",
  "key1": "tUuPrRd5GBUWWBDSdgY2xd6L7gC3RuKtiojQvk55K35KGq1APbroentfRcZ8sPLqkDygvuKvc6bRBLvEKEPoTKP",
  "key2": "5uSZwpY7UeW1KU96VmvpocRtqFGAV68QkygnUD5UsRhXsqXXWCcRwYreB4nruFnSGroGhGeGgi5LbinNQx55WCyQ",
  "key3": "34FNaCe8tmVkSficuWjSYuyMixTjSA3Xz8dN3fcCccSmTMz6WySyTc9NfJYNoSWEfGqVhXzZWRwTe4ZqLc2cMpZE",
  "key4": "4uRxLRTJmgdTfszWHDEx4HbiM9mCKfSoxb83Yh1BnCicBfpKqxMyCjC13gRBrtB6gY9ded2DZAzt4YDgwK4GFpVj",
  "key5": "4ggE2HhUZgCMCGdZ1J4BYhikjXEECLnh5xLX2WdEJY9vXnJ1ddcKz8urwxNNEVqafccFaDnqrBLHf5NQWNMNxxkP",
  "key6": "4Jdj9WxRtcDgecek7wfqHQzArcFHeenixnG7vP2pHmG5PXMNZq5AnCtq7vo52PHhcMNBG74UX6Yrxf3bvvFb6ZRY",
  "key7": "2rcvgsie1u5JUA5ZkjS9ERPxTWuxomt7tVJwWPhBebrzV1pqdnHRHMfEWUDqvYxYZLtc7EFxCdsgczwTFKJRJLwZ",
  "key8": "4LMd4QatuW1q2qkBXhWSvV5EHkGn9WSQ6cixiev4527noqHBRAML1LcT8P4Teb9c3CEGbwzDWtub1WRQgdU7CDvA",
  "key9": "3CjTbAGfgqrCYaevfmhSGtmWV1JtaaXRBdVDSPwMUiDuXCV1b1areXGxbDYL4YkYWh5foTt9TJy9e3Yi4CV8rbmQ",
  "key10": "4iCiqMLtfbBhTEFmXcTScSKzFa8kbb1y9rKLbrnvhpg1mVRJzuQajkgRkP8zp8ZqrcGEiKfH4hV1eYp3NWaKkDJm",
  "key11": "28G9Uj6TJVUcqeKyzSS9eXvbswvEB1bsVCxF57mXcUsVuV5yEo47Zvvriod3HBNC8w36AC9HwUmFsZWrSpJMpEDx",
  "key12": "5Reg2R8CW7eJ129c6pXXEd8sGx8q4Q5LWy48dcfSZXZFgZnXHPJPYKs2rhbTiYzTtTHGbgSAfM7uhvjQ1t4yyvBF",
  "key13": "9tBg2wSctYKkdf1aotxmX1kYQXoBppMF13r6jjPGTsZPG5xLLty25dUMs7YUzmRKaN3FSUqYUXeHdWimZEFQa6m",
  "key14": "2VWW8Sg3BE2bZ5UGXE99Qafgxafw47R8sqaNTP1cvyPYJSjZRimTxeQdstKrAvbJeX39yzUog4NWUDrukbVKVkYF",
  "key15": "QtkbdYSPd9vffS4GUn1XXFdkKErShseEzrB3LDh6gfoSbfwRsZFuLc5geiPyQDE3XFXvBPovc2WnZvv2ccQSY4c",
  "key16": "5T3YxXfPBJR8b9seFVEjvrvh4KFNQp61yWUt4FM6SW1daYk4krvMB5X7KX2aLw7dnnsJ31jJ19ARivycTL6c5LQE",
  "key17": "eQ1h1TH1DU1BSfFRDWrUpvcbKFMp6YBfZxQLb7skuov365dYFv49TkSyLF2PZ7pMeWdLoQY7vozNQUeabaWu6ES",
  "key18": "51w24cJuFmBsQAgGt5JbtzuFivpEZaMdbCtZ92kaQYuznRCHDbc7vrcDEBuUQxER962ruABZybrD6mXKya4fs4vP",
  "key19": "3fsUtLPuwyWNFV3zF4h6yptm58wDYZLdfY2qkRavoZAMLcYBNMdcPk5HmCRvtYGSsCgwxSMvtvePUm9DJQUUvrqt",
  "key20": "3XnGTTM7uDRYv6mSaGhNo5xpYunzBkmPXZFKHBrqAVxmf3tv9HEE5kXtJCmL4dwrFFfrF5k2VjrbnKeoFj67ZyMf",
  "key21": "3kmHk97DZDydg8eP37sWBTG8an4Xmazqs9XBHvR7gBVTn1cUnCUEE4fr6DKPTmYvqnfvqRVeGiZW9axcDseGVR26",
  "key22": "udimSXazcpW6ArtoeBPPBzc5AsfwNEfLowHz3VPjVRZ83cLNCKvfEZgvXdznbUWPfq7xEgx5SxuXJCHUyur1Ent",
  "key23": "62TSxRp7SCJxcDWEasTbFwr99eLxjosUhVrAEzGZt2EBGDEXC3izpz82oL8Zg27Pv8F5qqYWxDyXJeUXakkYiHb4",
  "key24": "58EtjrXvjmEb1QiADmGXj9yb5S2hpAX8zLuH5qJmmfV5z1iENwF7nNpCFGB11mKWsK8NPf1qM8f3JNB5YB56a39R",
  "key25": "2SZpHiHnkzP3JL1yuUJK7q2tSMw3pE472REr1NTm4Avvrf2ECp2BQkCcGJPwd4ZNU9wqDy5qtoWJ5M5n1zaKtegg",
  "key26": "54KMyjX1Vw3kg32cTr9YAyCZ6jtd6YkZBrPydR4ASd96QSVXFXHyaUnaB2hQLtaaU5VKgjcWQFc9vP7tBPQWCXFM",
  "key27": "7cznsmTiEtbUQVoczum9B2rYAcSU7ebTNRTrytjtV5qibo5mxga2JsJzMbpDQy54NTARm6ViuWdp76a7taJTRJB",
  "key28": "63c2j3qMkpS3xmny4SA6FRbHeDYsNe18wTqNft5ryhUD6ycCNzPgt4p6Pu1SUYyWM5WoKQiEXunQVWD6w1rjufFb",
  "key29": "4HaCSsxdFaKtT96ASgqzumDsGkcqDpj6XWvyTvjDxKPtuZBYJHxf56zkYwkUh5stFA3fCcWhc4e9Y9xsiEvUs7BA",
  "key30": "3qG5MGeMVzeM4TeYoWXmx4db2jVsfF6tvMS84yVwpPTcFF8x17cQVZR6jSpWxNQ1FieWnc5vZA55iwMKdguPSosu",
  "key31": "41FEijcqpTcQtEidyDMZa2qvptoq24mcMPBsP5YivELZkuWxU6YznijxpVLJtzbXeNtE8JfV6k5x7xFYiv83DVDK",
  "key32": "5wzapL6GtttCJVV8XeAsYFTE5zYijsDKBii5rjxENj5vN2wEiAqiGfghSPnBEqCXRnAVELWFHp12DEnWzPuz8wxm",
  "key33": "2avAUmMYevoLn2Sbqhc6Km8jHT8WHtFTYNDnmtfieLYUtkFugZogLdxz4Zvt9fL7AJ4hqVjttrVx1YwL7AJYinZq",
  "key34": "23Yq5pCkt3HgAE9hKQzDzmbmx9yeBo1cVVGCaujP2bgwrWezWqb3RbomBWDbxRubfJ3iYwp9nApHmXxtQw25Hurp"
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

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
    "5F343cBprEQ5mFybkQXsnqkmJbJGSYn7LFQYEJPQXSkU5VjRDjhZP1PACQHrhk7D3ywLQ9shamVc76XZz8mMEQaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3ApjVgmspjK1zbRZwJPwTF5B38zka5okAr1roPyzuD3QKBgDjEb32X29SH4SkjNpxB9q3Qyy1apEbE2DWb2BQW",
  "key1": "5qHyY4MD6JfwvSv4DwrfyX6XGwwCBF36yGBwrrWFj6A2fkJwzrg5qdzkPCJ2ax9Qu1XWTg8difjKpUMav5eDkNPp",
  "key2": "5zGqngxRMqVnX3xjweYXiCxUt4RTeM76cENsxDoa4nUNR8hiTvnRy2w2fk7DksjPYzmUZobTgVVyaYhFEUScposU",
  "key3": "22mr79ZBzSTJTzqDDuVDKUFxmd7okEfoymWqwCj4kUKgaFxXAUJFj4omAsFzKCHKnGM3bEjqTMqtAMGmHQJqMA5b",
  "key4": "2k9s1tnbDNTmncBWyw4rkAyoEhpt1ipBAW8J5qwZkHv3946yQNPVHpZQWruvyCEfcrKjhJMVp4fnpeqqDN5W9e3P",
  "key5": "3AwSMrZJhtNMuMYy9RGr5FkUXyTFDHxqongzt8KytGJJ5J6YeqMML645kwyS8MTjK7aD2MgXYmNtdsGr3gcy5ZFb",
  "key6": "3uRTQnXEqYYSCeVY2Ca6MaaQSRCUKhxsL5A8un7MBVioNmXSooEV4Z2xp8XHdvNU6c1BVsUz5prdMJgsQZemmZBp",
  "key7": "3PCNPvbmZRnKhP1DP2RtNKqCXRRYmb6YwWskd23BjzhnhsNHmW4Y6xu7SJfR1j7cbCYKrF4b2o6788C4g4QJkaw",
  "key8": "2WyennnM5axoQ3G9My9PstHFNi2AfgLvJxeLjuivubfWz1jgY9ZUZGX9ibgrv8FNs2PGLTcNTMroaN6JefP2Sac5",
  "key9": "5fGUafPiiEBV8eyWELmn5arUVdzMjpVamMm4eWdAGBqYHJSTQMp2bz9sTb4HMWFutCPxW9Fpq5En7EzSt9AEsobD",
  "key10": "3m4HXmdimGLX842HSN7YPp5epQ54owdJMMdBGGJx6eWxeXq8w2BC3JkGzan8U2cYgzfCewygsYtYcuoPLx6eZFv3",
  "key11": "4ssPpkWvsp7sPfURCrEggGG1cKnkzobPNaHTM1S61VDD4iFHinYYryqitZmhJjXprqAMvWzW4v5h3ioDZMpaw1te",
  "key12": "5P3iPi9ZtJtWgMo4nNHPgb575XZNiuRXLdsu8eaEJcZE6vej6rz5S1MwoQ31wByJeucDLyPm1RSjTATvK7ftsXky",
  "key13": "5ixXBX7mShQvXHrf3TKwBeHZvUb4egvzfMHbaR7a2NcVdQqLEugrZKScHycQKoivSFWdc3Xc1ybTREQ3htyKzjxX",
  "key14": "4ihZ2AVDSuTR3k57cH4nRTxy1mXdCrCSVjrvMi5ZgQKP7CWHmkWKSJgytc4BmFoKGpxqjZr3jjraL3Ww2jkM2KRU",
  "key15": "3uEVq6WBH8M6vsvJMjAtJGYAuogLrUmyNKFYuKTFH2MejCcqPy2pRid1igfu15AUYNEVAENafkUWW8fBLGtWq873",
  "key16": "3hNYyKq26zDf73hNzSnS4hPgCUnhKB2T2DmWfa5Ue6X3RU6DwcMm8h5tgEt5ZVS1LUh6cn1FZvECtQ66UduZrFgL",
  "key17": "5ARWc9UWj49a9HW9gPdQjXWqN2sUTTM9qDUze8jFZnRr1wBheebvLhDYLdkY5BaKBmzzviwT4G1mqTwPGjsXimm6",
  "key18": "4CBtSRfA2FotzWcvrzY6pckjDuiAvKuBoxqBgzC9RfEMemP3MUaJXuGHZxuV79DHAsjCrMerpLNGxczbJHvCihUd",
  "key19": "4yMvkrsUAVF1TrvUkChPjNxaVq5Bi4be3pHNKz661krR6xB3VUzztRCBrkp9YNPPxfPNzQgZTN5N84uhCb1PKKNa",
  "key20": "2txmpFZmoWFeBoTLmjkjUs4eoXsFDoUvs72nRZ1XLYZc8SYC7x5YUYGZHBhZa843cjxgddvce2ya7JSMtoymvCFS",
  "key21": "43fsEChSLkcLsY2p3gW6Zwy9qBJn2bFNwWbLcLanazEZBctmxyZXuSb97698w9Y9GiSi93xypRzRuzcF94oy6p5E",
  "key22": "5rFUZW1xgwfqWpP2RdrHqd2aTepNpovkf3EWvz7o3q69V9oWyZ4o1vGNT5ZFvuKXZJZVQyR6LnLqXGML28cFHprA",
  "key23": "5rWmEmWsP39XoejBE4nQ3DyaTypbJ5By254Wjn2hmweox8d8UG6WVqVjVL1RQCAP4DiRw87FdQC5VYPupL1nxhEE",
  "key24": "5xuAZu3e6yJbMqyc653ZUKWgEYaNkLK9ChnDN8TpRbkFFJ7PEBqmUdntdP8Wf1ASHEgv2ctrneDFVi9K4HgZf2L9",
  "key25": "5HvHqemMS9S2QtuPXh3bb5ota69qmphNbbKfArCL2Ke4bK8ZUVWbQNCAfZ2Vj12uGe1eFdELPyzvAKBUfCiqTFQA"
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

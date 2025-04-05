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
    "42KqpxQWJAyS3YmaDV9SwXUjDiqjXWXBqwRvpeXiNZXmc9qAW818tBXCyNqZKVQk2iAVx39cHsGY2LnP8vJiH2cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijnVHRMfAKjpnhpD12PUgSnXnCtt28ihkCUwkL6Xp941Btw8RPvjHeKg4pueUgnFxs5Ef34TwHQvewQXUrDvD12",
  "key1": "2GM4YJGwDoSrNG3UWqJu5YFK6suSC8aw1LJqYxz4MtrKWWrvQoqW1Mwfy6cc79esnP9RqJ3RJAfb2DX8Mdp5gLAN",
  "key2": "55u8YRNetbCGZsx2vJYY4nUFrgc2w8v2UjpURzokKW5HcaBzQcHD9rZ3hBU4nmeWrhSCK91aY6JH7YdnbHSrh6YZ",
  "key3": "2phjWg5Z98V1ptiriPC2ZnLYXoKAMBDZshiSRexNVoXMSjvKedjyGsKZQLKTaHQpr3tvFAxfFRxb6tGGQtobSm5P",
  "key4": "52frxyf8ekt5Pxw19EKBvwmGoYWr2qxyHvDG4uLD4uxYZ81MKZ5Fn4yu3yJHBkjTzPE9Pqv4YKPxjTjdeaHLw1m",
  "key5": "59QUFxCH3sckm9oQBDShsWL2czsaSn2Y26Af47VYGgYMSFUgmaSaFJdvt12HHgU58m9Z14Njcq1DdBjuwuYLTFFC",
  "key6": "sTzaLF99fmQETNtvbnyNE1QwPSMYQg6fDQaHoeVqmGgyKrnm67vfN3ggCXGErHa8aGfDAD7kwRtqQTQoPRydQJo",
  "key7": "5xiLB4Lvj9MfSiq6NFWajjTwR5pqwYLR6yP5b2KmekC3wQEUh3iWMGwjo7AkicYmuqThGwGVhenYih48z1dc32CT",
  "key8": "5ApYuJPfZgu9VAq1uy3cnCnCKTd56x2BmrhN7rNo1ffQ7DYsTiJsmW8gfkFG6pzTDfUEuKLpG8rHxZ6sDiHiBPbm",
  "key9": "5hHEVUBcFjh4eLmNZud392WMSUxx6dDyJtcpzwBSbeCKsZEBvX6y6pRHCfDpxtpeMJNMxom8UUiSrY2Wwdyz66fu",
  "key10": "23i886pD58Ebpc6Ay1gZ56GR173acfsywRTadrtCDVBqV7T161VdEzrfkEEfeWyLQBSuNT6jx6ehVk8dPdcjS3Yc",
  "key11": "3Kftb9nsGnwu9zuS9vL3Pz42zgMR1uajvMv3B49BCjMoqPrhVnktRaV2zdQUgjEbda1YfL5AMEmY74Ca9s9zasiZ",
  "key12": "41S3ZnvDD1nqeTDCHr8yUGiEsR7xBMeuWzgQcEkcbU1iwDSPN3WdfUaivKzpVVnZsh28WwXfseGfvgWKV7Ys8T1V",
  "key13": "4nxkx4BL3LtLQX1bvPvZj45vYF6DEGz9EAGvVbMwznQaFAYKtASJSveemvkhwt4rSfGaq1shAZBKP1YaXE7L9T6i",
  "key14": "61E1hnPb8dqUpKPJEhuH1r3KzFTtBFyU2JuXKqy3jginjg9hxD2ujHscZ5zdz4nLWZX2iebKzD8RjXjfhV5eeJZp",
  "key15": "4Dmjysn5znbpBpmTLw7LcT64yQPrbPm1qCZPha9mbytGMgHPUmxYuRy16ixp6rHxm6KqSDroVRKa9cW1BUWxa3Md",
  "key16": "5p9vHyoLE33fMskJHja7K9tzQB3jntKDt4CdaRjujgAjdtaePmpXE4SAQboHYvxM7C4ZwXMz2cc4iAsg11c48zHw",
  "key17": "2d5sTGjg9MC7BsX8LcCP4fhu4bPTY7Ty6ZYDxDTpop4u4TQfgLk92yrbRBNFHWxwtaGL3BJ5uu227tVcTEH1wCrg",
  "key18": "5hUvdbyxw9jKB4E5MFQKLz3u9oqPaNtD1cHGNg8iwQhdVVecrnwdU8BfzdXqjw8EwrnmKiRRo34NxzDfi9KQpoxo",
  "key19": "2WvRPYTDoscdqTQj1pH2GoBGvYAxvrLM7n5VeRAL6kxGFH69q9cAqzuE3Q6UQsuHToJrxfigWo8tQwJnFXm61GvC",
  "key20": "5gSrkpgZAviQkjdGA338QF1JdgvELzMcXXFr5v3jZ6TizCrgV3BzAYQfe95D78mSQnKJdRb7PsGgrFowd5rmogMo",
  "key21": "3ijfgHxjSfLoLeQBTb3hif7iMQiC9Lmn74m8UD2daKf7196ygA3PncRSNy67tDP3ojTsoMfReHnFBzWQZ2RgVN6n",
  "key22": "4QYUqD5cWFkRcCL987uJ6TmB6SJzmkiqHEn5xZWAWL68CsqXSCs1mDpKnLeCP673QJinDxNYJBv475sw3PZmVDWz",
  "key23": "4Ma3vwPz8ZrJLrvXbCK3kau7HANS57dcJvRpKaYUPy5o28jPmGcxD7BSQt4Xk371B736WxPjZGVjvFyGqqNhfquW",
  "key24": "2CbaAX76LdPgXZEHZ5yaB6Gj9E3BM6c2xrENEGrUbRcp7mNXHZnssjXiiJ9nuKhdwGwKpRCXNzMmQXYEiw9TimNV",
  "key25": "5UDq9tN59y8ysuCjEbLsX5a6vbgkrfoQWEA9rVa3ZgSeXbWo3mScPceFXErYeu1FYAkowFtgbir8FrauGse2NHTf",
  "key26": "2UGfijPtW5h5dQeW39RSTW1hQLVMwe1S7YsaA22i3yXTUjp6HLHhhyCJF3kcvJvy8uP82KWBotJVtEoWY6SxYb7o",
  "key27": "47chtxaoq8bSLdExG1jmHigX5RLUPRkuqg9F4x3NPThB1jRtG76HFdrysaxrRNCSmSp8oFSmFo6fb3a3SEMeabqi",
  "key28": "5XvJpcfsz2tB3XJziGCUnWVfPXKnq1YmApghs2K58AWxDtthjB4sHsDQK1Rz1wWzhcfM5vvVV4jseqiBd4vNcU3v",
  "key29": "4LRGHDun6yAPiTVvvDGVCGwAjT9Hz55nrb7UafrhJR3rmW4v5MjKggCr1g5L2uYL15FLieZDC3kFT31i6FadkS7Q",
  "key30": "mKcYF6t1t1f6zce6ofsUftd3f6ps3QvaAUUasmh8Swsa2RMmHNum641mGqq7bu4ngAXyadehnX7ixVuzVMLkp96",
  "key31": "2eRU7mZqHSkvNjbxBo7j4RhnaiFh9soLpyBeifeA45gyb4p3pzxfCr3DipZFVkenADagV9V3tTJqFLEvs6HyZ534",
  "key32": "48KNEbKhjRfHxY2kXVX6PWcShGcZSHfUZRJrxs2GGV8pQ2WSTm7F62S51nmVeSMrGp91Sf3py8PFCgTgtEDTUSbb",
  "key33": "dWu8CCvUYVaqGUwuK8cERwfQ2UgjQAK2Dg9binxJ9kkgNKgZ8yA5fitVo1tutJgb1sa9JKoM8hMHgL5MkPmZuHY",
  "key34": "66BnuikYU8SbkKkj2cwCvFUa7QFessrxXAXFnydrw4xFGUR77uUQuMsCoj5gNtCouf5E55yiey7sRwKz2GzJ3Aok",
  "key35": "65EZzWDLAiTudFc3JmjHNXgeRdn1fqddxkjyDyJ5x64GaLEuze2Ci69yx9Jt3TjxxxntavGLJiYdFQbZ1B6tjvhG",
  "key36": "2jGHkPXmpijp3rk4C8X5GgTsEiT4VbFxaSwz1r5s1msciswAj7MxhYPRyho1gajrtzpSfwXkAj6S7VriRCGEdWG6",
  "key37": "3rXLPSa1aM45wb1iKvCB5FLwfyHsfS1U3g7mVLaW84FPqnWvM8F27UZaBWvAp8q5cZYZSfvMzxzS1rHZYWj3uFbG",
  "key38": "4zC9ABDsk6RJR4VV23DBvS2ZxF59dNrGBvHx3VJAF9QTJPsJPJwVQ1ynYyJ97QPvrLNcxUqsSbLF2BFWGzoWPJat",
  "key39": "5MiqTA9ciGyEzRnE2YaGh91jdxppnFez6M1k19d1Z4DQErhcJGFiXFsd3wngocYaxK46EKxTshd7ifz4LMFCMNYR",
  "key40": "5pgKVV4GbnzxVFzVi6BY8qRgnrvLdGzgQvZDdp6W63CUg7aMMRrxmTPrU5rxUPjpkqB7HWsMGC6t6P29MBic9dri"
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

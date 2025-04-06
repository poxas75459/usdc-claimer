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
    "m7wk3pTX1yCYHCdEH3KRLaMutEQHKELJGzM6TfoC2zrXS5CzwFaQRJnUfxPP46AXsvjAm8p9uahWSC4towSAK6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHekesZ5KWnBvdM9FvL3TPgtg4Pjae8BvH5kM2s88YkKbDgibpxJHKDyz9bSjMNQenun25Y9s6rKC37QJiHEhTa",
  "key1": "8Mopx3zFbwVr3G8DopjCyiNbz65mNukxAh4YjXktLpm7NGBewxdi6ZUmpxW2TL5xoh3J2YNaXMGhZzCAmjDHqfY",
  "key2": "5223weWNpegSH4KX67xjraq86XrHwR6wtn3Yzu52RhKAqMxedhNmHb3Qh8sKV6iuyM9eHpBh9kWd45G3QZbHkDs",
  "key3": "2XtHEa25jVUuuZSckQHggJoPuEToKw9485hVXiKGR3LRx79ch4hXycCPPDCZPHvC6Jfks8umAzketGND1DrXFBYy",
  "key4": "3bFXLhDfRKSFnLZBBJnb5HPsGdKksGbUJkFtWd6bF7be49TarSTR1P6d7dSdMgE5Soj2s1ihWiWKvfhVnDbBCtho",
  "key5": "3qWLsRAkksyYXCoJMvET7V4KdaWZ2SzJYhLFr5QDdYQVFGMTvFbcSHCQycHaqCGf9HS5KuFMoCa2URp18dJ2Tj7p",
  "key6": "5gLMTCYzgE5Gf4P8ddcGryDfFLATpnaj1yfgYhWcKsUxvhKBx9MstCnq1cCFyXdCEycByrNss2gUqi58a7vHJ7Ex",
  "key7": "3yzVfzLgjxAsRKGMJDDt3qsFWkS8iS3r4JXwqmckfgizETZ6fcH9oEFPozKrYpSK9GE1ux4JbMy2ccMtMFhQjaqB",
  "key8": "rLRieyhzNot4j8TbTPuQp96Nm6ef2YNChGvqNYYJtXzuYfcscS57iQaGzQi4Bys9VCtCiu3aFGiwQEnscy6pofi",
  "key9": "4HLHhNYffBX6PrPfuqptYXEum7XdxsUtwMQJWAH7BtFCmfNMoAjoCnnuf9rYtovmVnDiUVqvrbrHheqtDAjG4a4E",
  "key10": "FGnACNpSDNDuoHJgNE3r5zGrcMAqt2DYVQx3ed3qVLmgpp1mrqWPnZPUJWWNkWDUFWVMUmyvTzbfXJ4ScNzByX2",
  "key11": "52dAAjAW1ErjnwVG885TX1AgtjriggKyTXwXWAtqhL9qPfHY6Aed98PAiy6K8DYrsHFu1bwhzc2FNFXxv4dZBtCY",
  "key12": "5HCCzm3coH5jaSjkGrid8fNRgrdB3eXzaPg9WjWxHRsQJcF7Pv6gaqmWcoiUtrxkEkz4SCJNwWq65AqR6nEECWZP",
  "key13": "2wtcfHDBrebLogJvwfBkYrAnguMQfSeoabFLZJXvDZi2VMd4LsJu23T7cnVwyrndKXaTsippZYheGxuznLxHTQAh",
  "key14": "482Fpn62otQnwDNEQsFDqRQydL6younKjBiyU55yoURNdP3K6eXWAVfh3WaXgq6MKyT1s1GHAiMW8bwVNFejhzth",
  "key15": "314Nf27oxAAogEPN9AuFxaDvF3caFCJD3LZsiTM64E2JgcXTgjwVbh5DbYU4QJnmrUDgQ3mBG39sgojB714rqGmr",
  "key16": "3vGUd31Nvj5HqhUN94U8EDEoRfEFu9dasa4M6WzFknCjU9YgjqmJWPrS5dbzbJ1JLAec1UukDAfwpzbHoKN5QAMT",
  "key17": "4YYWpTjjWXMsNLMyVCQRpWdoStWArUPkMUrbsMn6PjccwCF54Pj3TPtQd7Vus2BNgpvpHVBdJyzXL9z4FG18jVex",
  "key18": "F4CFBjgNpp9dDdBotor5RPgnUY7BgGe4XdVHynBqeuWVaXxG45AihwosRPxt3v5rgpT54Aon4YByAEZVWU57TvG",
  "key19": "2WxFTYhVxw9SxZEd7gqiexQDUsAbsiPstB6tL3Ubp8VEXJqb3Pr3EW55QhPYCA4yZatVCKok4pTfLSwvgNfgJDki",
  "key20": "2Cxxnfr3ty1QvjvT9KXFzu2L8qRSYDztLDQYwz5f8Fr4E1y2fvHGsi56iDqpvqShfPZusRyZqnyG2HEJP5zQNUoU",
  "key21": "2N5P5JDd5wYLLdb12QpsKiQkgnkmPsC2QaYJKWDAMPo428Qhv3gWE87xX7XcQHUu9xFEi2QtEj29PZxKD1UsAypa",
  "key22": "6GbUkki3Rhyde5AGBnGP5iDoSDMDDSUTSLc1DJb7K1hN2heLQDUdvJ6ZxSX3i395YGUFU3jPM8L26dHePqhoAb2",
  "key23": "5kmjownVzz4C76MLwKMhSJCze8K3McirfGuxDMR8wM5DRhCB2HQ6ZKxwyuqmnZ5KNdRCXRTfbu16vhg6Z54LqDKb",
  "key24": "3F18PvTGK6hKrjgpA4XLDd9RJMNtmSmGh1vaNUnTUC8AC2y6ccjiVrocddz1a3waY2Xoo2Cvu8CbrFZrv633NTgK",
  "key25": "63y52UQvyh3JSnY4sMRHKd6sYq1tDexigCPD8KFMcVsV8FLQq7XseB5RSjyRZp2htPYBY3pCDSkLakYTgWB2pRWJ",
  "key26": "AQnYZ8kyTCUjFJd4qsNHeGXgcPSYddcJuppDXUGE8DxiS9kwVqgDqfrqYMrSEeDDoB2rsoYoS5mMFd5b6ixYyof",
  "key27": "4jjxPvPZQMb1sgxpSZgYTCkEbURN4mFouKat5tBGHntoemoxwjhHs2rfWDTyVMY2wJpKQhd6MrcxkT5PZzJCfpdb",
  "key28": "58RPDnkAdofM1oejxreESAx46bf5b5azCJydkWzY5pVBiXYJWAtqSDz8F7U2YahSJa68P8GmkVbmL1U62qdHnNVZ",
  "key29": "25dm95PWkswB5nMawqHwi5gKcPJUCdnLnWbm95qZ3wEayMzEUVcmmifpTNh4E9737jQPf3ouemwZMeR2G9j41vkz",
  "key30": "29xpYT5MUP5CKvHweewsB5sjSrezWoVscdnQPmygbHi83u1Cap4d7tusUzn69yemugvE6FJ46wM6xv56X2e4hdyN",
  "key31": "5QMcVi1HG5mwEmYrBuSbMdxnsBXEXAa3Emfeg49HbHBtdfShd2XVouG3YfYt1NTMbVWyj4Gdmmsmd6Q5PbD2WkeX",
  "key32": "45cMWwtVocAqZgVeWGqqnrQeEaNDhKzmdq7zc6AcPwA44CtafMhk48azAkFNomUXsZa4oygvg44FNe4zuF9aLjrc",
  "key33": "3BUxW7qiDPg6vcWnfwrh7Hufrx878Y9GcmfYAk3kVpLkzg8834D9PP49N12n2ydKB6dbHuKrj2TbawmkAdvb8oHH",
  "key34": "4chvw8hYv7kzLHELhgRtHvkb4xW6mXoZNkvVzKgRiXuVgHn6QMqsB6RuZ9WdG1DUFEindgzgzz1buEXmiuMv4ouL",
  "key35": "4GssRh4HrrgXQ5fFkB7CArCnTgRJ8vaRpD6GJEk9LUWZBApSApJ3pj7ATdC21RZfcddNjQdciKeD71oFzmAj2uhq",
  "key36": "5xU3vr83pn1y3eS1AFYuEeM79fpzm7geVZsvPFGZ9jBvT7XqBF87FxwmVZTkpiMDsFjh6zFbTC1hPKEk8o1t6ji5"
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

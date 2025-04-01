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
    "4otDnr7vWVttJKGS9CsaduCjg2BAWZp7mjKMP9CnVpdhAeBpjEDWWyzL56DmTcgDux4j7EmV329XExWmCiFbEmyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HFDgYMpXN6qYK4LJcqNm5xabhqsrdqxQmHf3KsqEf3Vwh6xH7CQ1HywJZc6GeSd6UuAs6f7ztbc5arrdwCfWYC8",
  "key1": "5o1Dbdkuo4p96HcJzEwbwPyKjmicbkpqmpV153k5YEYEk3AzZzubjkWipYRE2xqxi9F7YurmjoqRbNpRiXYG2M85",
  "key2": "4Rrqn5UeUDRurRQWeS98gnkioNrwee9Jb5AMENEZePSaBuUAvMed9G2KHvP1GwTctMZkmbriU36czFGc8adCVnqz",
  "key3": "4XNHD4xW7ECyzheYNfKpj1bg26oXhxa7QDqauD6sM7kkdSiwPcoRE5VE2sGaqaPSRZrRR9Ht7rT7o3wCrJeTEMQe",
  "key4": "3azQ39VUHo2HAzwFrQzyc3Nus7DaFQA3VxiXRDBLmjijygQFcP5kqvvnwmxk8kyiNxMqhRnn1DFk7VidPAadpwK7",
  "key5": "2bE2PbNfYo6qCr4euXbtojGqrLZ6breusu47T1vNJALR6zsRcLueB3dUR8YX3HDYfVn5CG6BVLUV3r7HC172jDxZ",
  "key6": "3ogpyNBgodn27jMdTzAjxetVdtyz9BNPdqDL13MyZ8EKx1NGQUnrptcrb4GwkAx9mEuTtPXNSA3acYpsZER4EfZ6",
  "key7": "U1FZ3zUbPW5tHLQdg1M81jn7UsaMeHhFuKJmNZkmN7H4hMcncZFyVoBYZ894Ux76myAGrsgGd4bZMHMUAxmfmG3",
  "key8": "4UK3G1d5pYJWfo6Y4LAu5P2dMDwp4Lv5HrAQGLk5GDKExkxv3ibchj3LMeg5afGqMzBoAEhar7cdMAoqCJiAteHC",
  "key9": "5ePfjbBSaCUMppoBLsN1miizhLjaEoahT7rToMNVRb1xz8AA4hxcwA7Q9SsFPMPLRMUDKvXDGFpd2ah3JVbE3PNp",
  "key10": "4MiB7CMHMhiaL3EGRHRfg1b8wDgLqjuQc7eDum3pQPEWgF74wWnjFYN7QZWzcSCL5h1kURZHJY2q3HwQfFbmBGH",
  "key11": "Hqwc1zHQFE1CYFeZizdcyueTEUoecSnEcxP3GyP74nxFkenVE69jB5U3e7aKH1XiuCt3d9J789ZqvbdzAxkRDa7",
  "key12": "5d2aMiSx3pGUAMLRZgoSs1LW6uFb2F2rCZyF3Cn3ptkDxPuJzZgC3xJmnZZqYb9s7DNUAzXt95NV7C9DZxHxoQcU",
  "key13": "3KQp4KMeUJ7GAybMxQFE58Uu98p1ZZhmTD8FiW2ikaRq43AsdemQHs1GNNkhYcnZ15iSAUeKrGqDxFNr6QyTNuYy",
  "key14": "47kBQTDkQDvhQK9zeTyyZ2CQ9YKBeLoz5i8vJnMEEtevqeVi8HJm1xaoK3qtxMJMWf9V1F8QqrJop89yT3UxYdwb",
  "key15": "StchrKfTM14g9Nk9My7KcP4eTVTo8eCeco9Jf2kBELqBHWMdJp7iL3EVMoor71TUbc2rGeewnuXXNbEbF9D897T",
  "key16": "MR8XLf4GiqVdqSAQKQGejKqXwZjsBvURxM97MRd1ANH3E1wrch6WXGSEeHw5By88jnhL4XCMrBteJEAvffiGgLF",
  "key17": "59uqgZp8y8T47kUcb363MKZKaZPySh1UHapJaSdmRuAUS6D4ko85erXvAPVjTJG9FAjpsodZvUpSPkxfJuFKW53y",
  "key18": "65z4VGfvobTu972M5xYKzhvQdgZRRKc2Qg52vBe24oiH3YKRU1nA8MGfzXPqirFhhkXHPb3KrLUp4F43oWxnhCeH",
  "key19": "2CVPNiw1iLW5RziskA2wDWjXZFdZQ2jnXq2gAF8WdioPER5J7yNDKZaG3VFujXB7Buu4vbNoMjsen4C2c1o5BkMS",
  "key20": "4k96jhSGC96khuPem6sBr7zAoTmcpFPU9ux1Ri551QWNsdxFwAendiw8FCBTpqyNSTJgbiS7zmT9vUNCob8DLJwm",
  "key21": "2c3gmR2kHTXqVs5bXYbjQtzwJWYiK83xuK6ZqB1tytDbzFxLUfubNqWR7c8PyS2Ui2u3fakYutASUSeDktoMU4Uo",
  "key22": "4wraXdfeJTyNm7wzH7HGx85Q1Au7EF5wT6o86GkRRwUTMnBG7mSUypwjRPSjN2S9zxTiENcY7GhqByr4Ednrch2M",
  "key23": "4myG4PxPdrke9KCDqPPELLVTMXBf7WK8HzwpoFQ3x7235GVRAXD9mo7q9oyVWkBoxzEkcSaqvuJTkpNPNw9qVyoS",
  "key24": "HGfrRP14vYNMa1pqyB8RPgdtbvn8TUMFnBtvpLert92rFBbCZcAT8hMEsu6h5fxso12WfDeyjPxqL7U5mbs7n6A",
  "key25": "otMAcLFUEoGDorT3ufQAucRMCgREHaRFPsGquu5RCUxKZEAstEYC1iZT99a81ckUJodzfu7wAvkshRv6xD4zyyK",
  "key26": "2L2bT1tpS6VekjnvLx33uSA8UyVDxmVnEhVZkg4hy45fT9VRqwADmBuXtbqW8Aig1h5iUGHrkrrznWNDkooeqSew",
  "key27": "vL1R2eyG5mP1mEwNB9UkwTEiPrEQYNPanRS85SjnGttM4PM8XuPL4X492WpqFSsyfKjAPbahwYmUPMKRDo1RJbq",
  "key28": "3H4Ysr6pzPHziDpubF75itKRVMRdae1CHKxe21sQujZGoqnKemF2Kfs3Qvc2ULcDrmTcKD7jwVVQvbNAxGNS32y1",
  "key29": "66KmyhhQCkAZpSTpRi92KFZzGmpc1vKWUkCdLfx3nuvmykaKtoY72uqHqJdgM2XWPZEVYFzkTkoqrcEiDb4DX3Pz",
  "key30": "3mJrRhEZcQVqqQwhrrobEmn1j24xpXWfLs2dDcQwhGU86FbjDLnQqVBJhywbkQRQAaaQ3Nj64H5H9LywhKBek9nz",
  "key31": "4SwfrTfy1gtJX4FBeMVhKtsKDA2uSAtwnKMrxMBSsFVsCqL49FdYTzd63MtnCcXKvpqiY7qQBCBZvBYxuDNcRTme",
  "key32": "5jaTfYvZbUe71tFihu53mvP96XPVN2uV8A47sXRnj2LQzB8k1mDnCVszFL3bsrh5ajLNTKH16Lz5cF6NXg4j63mM",
  "key33": "V2hXXUw1yyPNggHwjxgmjQWeqiRbXcNWmcFDo3Zfnrc2MK3TzVKrVfqreB6yaUUF1qeAThbtjuXzHYSvQ5SUD8M",
  "key34": "2xH4qf9hifPgxYSFz3B61hYfZcdHMAWwitoXoHvWrJHwMaehLYPGntwCKuhWFk8FgtRXxUpzq2KXevsknQKm5BK3",
  "key35": "2Fe3gbHxTGu7FdW6SjJAiUUDLQCfL4F7hzoZVp8mDCGaaBqveuzQMmeZqm61Z16Ptym7ym1MPWskosYRKitYEe1g",
  "key36": "554EEBdkCZrBCqxBXim3UUN59GEmtHGP2knsd8EqQarkwbFSx9B6eG6Ev29PU5SijHBXbbTVYjrRajdqeMpMCRyD",
  "key37": "3GPVxBx4AaM6inuQxiMpgQo4D1sqkqRFFBhgh4V62j38LceT3fx6VdbvGKmb41VvzqYH6HtZw5hnh2GoqUNkqVDX",
  "key38": "3wvW4NGebNgVAhzcxWG52EwxHPWL3x2NDMZ9b1jgW7r4T1RUFudSDPSFRWrqtxpeaXugFEdKsHt1k9mkvew52hmg",
  "key39": "yeYmrQuvP2cai4Rj37kBxaRS7bfpEk2uAEKoarcaJ3S1YGCfV5XwStgvSPdz5YuauPW82jNJxVXM67J7bxpBAFK",
  "key40": "5Pca9swoyGvZKTiXCzmn5S1WYJXRNqwBDgx134S6jTW1SQNKZLT5E9UuoHvNCoB9UxzbG9qCsBG5z8Q6HU4WSFQn",
  "key41": "4syXx6D3DRemVWVE5YCZLiTmhCvFhKn1E3dDkdYdGpp8KKvHz6XCUAj9C8PncyvJ7abPKqe4N3cC4TicUxBGuUAr",
  "key42": "4hQJMhZq9B8fL6gT9g4wZxw3TAMoeU9hKVidt6fsXCK7rZMiPTLo2LcdbAHQm29AVfj63MpeqcVTTfLpXZj792sn",
  "key43": "5qwzYAxHs2f2ptw7DV6nfyKmj5ySWofkM2px55zCqvoQSYgfeodhbSBo8BeQoew5rtmCZ6S6BEzGrwqV7bhYNuJ2",
  "key44": "4E1qxTdVUFVigBUAa1n4V6qrxgZ6rr4GUFfwqJYe1aWSEoE3nezFnAyomBEHXSMbXgHfkbR14P3LCkXMrkpU9XnK",
  "key45": "2TSPx6dcFF4i7MhejwAbmKX4BP3uYphQqET5xkP3EMrzQ9X4jJix6EF7xKXoQC7P16f1T6PxmHACm4y8vahZYeqL",
  "key46": "4BcRmxz5fLi6zDba4tpktWF1qKFH57r8skznQ7uaBrKXubie9GEos4iV6r23mWKHjtLG4yigFaxn6aahDxphe6wt",
  "key47": "2EELEoUDy7SBBM2YzqeyBn7Wh9nED45TNnkZ1SuoD4NLYGSZSBCn9hh8SKF9RnURGC17RetW44b6tozrSruXhHVA",
  "key48": "y2Jda3YsyC1yxJeTUYwwt33n6x9VArdxsqgLvTEN65X1fhcEKRtoyr2iCSEwkQjbQmXAR1rGG9RNKR4o8QWPjib"
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

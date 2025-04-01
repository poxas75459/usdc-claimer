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
    "2WMFUrXK2zUuHwH9wH1iabrXzxWentUrTBGf8mvLxk19K4xr79DmppjJGkp5kuQDEf8P53hjb1i7DFLAaij6MXpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nr33BVnUfT6wqniFALQJYTw3CMxNFezDRS2UcxZw6bJacaPdghbRF5ZedmpEktwNHD5Sq1DTt6HnCR2AHbjhoFi",
  "key1": "5usgjstF7LVgQZyFCFLpPxsEWG5QqE25CXMYnVAWhih8RsGwQwpNKWBH3QQcTUfq4iwJxYSbLMcAr1Bb4QZgqexP",
  "key2": "2fy4Z9HcLxdjZXd6BJuf5FhrsmjVC8d8nVBVfD3Rov3y18jAhR7FKFBE7GHiUxLzxSx65FUrHtHkJaJaKGzDB7Te",
  "key3": "4GiRAhRbLCinyYVtYzpX9VVDUcp6wk6sBPtfQCLT1vtbvZRVAYdCGFsbqNjd24n2H68BB5tAGMQUeh6NmKSRxSKS",
  "key4": "3Tv7wvtNy7LGmVvNfwGwWTSjmC85gNzFWbatBXunvNGX4BAo5ehhdb2zdJ8KMU8obLdvXbTZAkgNb4c1VGtzVnrh",
  "key5": "3JZXGZUsdxXg5K8GBbC41qcV4e3pR5VGS8hywDCth4u9vdgJKJWCrgtE5wucXotd7bf52ggsr19LYN4wFVcHMG35",
  "key6": "BLVn5zAFu8WPDZUnswWp5rGbM9tdMQPXinW5CMwXBDNNA4zvjK8wY2w356sLBGVpVjw86nCLxgbgjiBfxXtHrPh",
  "key7": "4YaFAxFafbqkKSgxuZHuyDCK2LaceWooPyU4U2VqE696mHGf1E859ZsMzMzaBiHvZqdQo6V2Sxt5q4KjYisqFujJ",
  "key8": "2d4EN3iKBfKZpxvqLgXMzeE2TxqomCQKyTFwzhMkS5xLxHQG22BTxm5sgwqfMnTNQ1JR91mNJid2rf6RJh7YJLa5",
  "key9": "4u9N7JgnN63wXBi6yQ9oLqBq85iUJ3xX2ccAtN7S1EyNQmH5Lp4r63qMcriFj3WMrC9uZZyChuLXiCmSiigvL8iD",
  "key10": "4Y64y6SpUtp4VKLudoWdfrsNYFRjrXGBuDAQTC5j8wg4vp6J4o6upWcadswxPrvx3qHuACwEJPgxesa1JLsb3vuM",
  "key11": "5TTCB5ZnKVMU25rytPiWuMvSeD3PhhqMTgNMtUzq9U5W7tUMZ964QCwe6rccC5QxWYkjmSAFuHFdKbYX3shk9ouw",
  "key12": "62JZ6Qqjwd2yadFGxwRHetpiKthoYzFJVqN5n3thPHN96q6iZaAbCTCSFoU2ZBbyvNQUudoshf284n1JB3kM7Yi3",
  "key13": "4EsVBivm65BqrG7vFQ875V6p7npnrAZVuq9efu4qDdgtxgDa8wHiVZQuUTkU5gG7obYE8LM7TrWRejJdopgn68sw",
  "key14": "3mu7RnQKkTZDjpa1X9WvEHLLaS9MaNbukgj72B8a6oDzYmeyFLJJEL6ev9S5QdBxFTq1JvjNKYq4dEh2F2v6znH",
  "key15": "344eeWUDY24iS3AVN6ErPJCj8wGMC9Y9LfA6wq1BxQpKC8ykRcd2Hti6q1dbayRcpMT33eMzTyAFfGcV66fXPrXx",
  "key16": "4J138ZEpLkaRthcziMKwxx9L44S1rLdW9UVPpc8FE4XCWGq9ovVUWcBZ4sPLBJ9pFwYZ1EkR4M1dfjZSNwdUGX7i",
  "key17": "2CArzwG5ce9mc2ruo5VV4T9nbUVWP6692CmXz2hikPKV22pXTFSxNpPe5ySDaVDbQKbaguoPtG67KYf7eKc97aBD",
  "key18": "21L8s1UHoPg8fi1gTdDbJefRJfQ6ttBXtfEnXQkEJhCMKCvCTh8zca2dVmv8vsez5CKrm2bPPTd5pK5eXzUUHnz2",
  "key19": "3xjTE8En3262imSQDwX7ZP9WpJoUPxb6ktLQsxbcLiYDCbBLeRiz5hmzd7cpkSF295YASXoKW2MDtYbbPsL2W9sh",
  "key20": "5EsuLUtkqK1KSpuNoY5jtriE7hRiLcsU3mf7pD1rEEcQeU3ri1TvNxUF9LiEwnBYuuSV1gJwAkYhBsdCeFwtRL36",
  "key21": "5LvNwhQbCCDtXGC93TLXTuCW9hTbZMNsQHCnWmF4ZQj9RhD16uwuq9H9Q45gbGs5gjMfHcZA8Z4UcsZ8Eo1zeYet",
  "key22": "t5HPPZCbgfkvpBMobnbmqmXes46y2CJtCSHeBaLnph7tVTsx4yjPNweSmLmXjf3onYTwjTwP8tqrJiGhpybj8TE",
  "key23": "36Qt8cUKdvt5SQ7DT3yh77YLsGoAufcwExcMJmhe14QQujtKS8bL4jNTVi4kq2VNjVgFsVzDzkTz8R45g7tR27B6",
  "key24": "4zsbPLQ8vQhqDjkFS3YyGRX4sNMyWa5nT1DQA3EAs9xuhVny6HVTbsTJ1jdGuEbDXnpDjoNjDwLoFJZJn8YjMb88",
  "key25": "3c7tvFaj1YMzuEgZfmhpsvWakuFawPeTGQB9Udtat1KDJLGwkKiFeFkuKoHPwSU9QzqnBNWecw9DxWzySktGZxKu",
  "key26": "5Zd9cF4yeuQ4A5Q4j3ovn7snzJ1ZodDEQDeNqqLyYY9jwmVN3eb7oTfbNpkn5F3W754gj77f99DGn5PrgfmRuCNV",
  "key27": "6BWg3EMjZ1nxdZBYDuEXA5h9zrZj4fFwqtRMTFNaRZSUi7hnZRYR3LyYiMdpV5g35PLjRsdcuhQP9S6nqQXbMju",
  "key28": "5T3rnchwxTbLX8RjBqJi6C61yxjt5YFUByrUggHzExomWPaBUqTUohLndfqrPY2wwHfkesWJKGEkMofGLxwx4WvY",
  "key29": "4EpYCqaiLWvqtWrc9o1FstzrnrEpfGxoHorLyxLeNVPZKGaXEckQqZtB8qXb4P1dWDUKJgEuDhC9v7XXH43kBTtM",
  "key30": "2G9bJSk7nQZakwoH79X7BKNwLP41QkQTfpvhNAsv1sM83Piyv4vxPgfyn8vmFcYWKvA1asfpqDCP4mKBzprLYCPj",
  "key31": "4Xx6cNBMmFafL48TnAhL7FUpVz3mubrk2H7rCPmZXafTfBWS46UG7jsMSyfzfUC89XddBtJ4rQvxiuuPbJtqXNcz",
  "key32": "4A916agEAcrL48LZELirX8uRpd2b6R19M8zaS2V6VefyUguZn8ZWvCXVWeMAGbsUG5EyyH5AzEWr9DhPThRNQmDt",
  "key33": "2BnRaMoBcwuij9Kxq6vD5JiDtTk6P6gMf22z35avuqm29nXTabJe75xazGHi88mR4zgPrr4va2daFZtxQYci7Vti",
  "key34": "3mhjpQswTQUCHY1Q423XWh1XAXZb5AKwGSCvjsHzv2Kcv9aRD7sUC9rh4SpGemgGhDQfThEB2Lp99XeUCiZSgmRL",
  "key35": "2vuLPYTd7R34gXJnMDUbECiMpPTP84RLVtLNNcKVfdW32WKougjdw8UM5T7ZxL2zeNaxTLL7mBpv1dSsrBoAuDFM",
  "key36": "iF6ePzg2H3oPaZYWn3jbu2nW3KYARe8rWPtS4GA1NYTny6txYLqgJzRnkL4uibAGFXYr5Rt5xTxaaH86KJRjugy",
  "key37": "4SLNc368WaAqgSyzAx9cucGaLa5J8g72fdSSzys1HeEuiFNWDqEpZZdMmsN3TYQsoSooGcJD9nikVMW5cPkcAxwU",
  "key38": "2ieczimaVdLnDhrdLyNQtiwj75kP4HkbgvKdXYUv2AbouUaQieWeLrtgocyxUgvr2bXps4kpCWLP3G72BqBGeVrL",
  "key39": "61jJL3gb7Ro7pkPRtoUgg4WPnHgWfefFiGfQsegmVDmS5qbhtrrCoYWnUr3X3bLEJvA4hY4N1FiRJyawowQmxodR",
  "key40": "5NVqHW27zqJe5xqpYpro7PujMbk3ZkMg8b9djGfPDYT2SKb6EfDWqUzmrWTqJYfV4UCWuXzPUcvyjkjeFGuSNA7U"
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

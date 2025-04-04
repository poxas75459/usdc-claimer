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
    "572qaJKLFoSbb7vXg7xAMPXpRQLgRDS3opo7RWUkJR5zF2DiAqRezbbXovzsJz8fB96NXcVMqKZBHgBapwbDfYTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aW16PrhFzwYahWRPRkH17iC7bjJfGJGZi2M2dcVXsDfqmWa26Qy1AGKdnSwg4jStUPLR7XU6xGKGQKxBRGWfLaT",
  "key1": "XxVeY5yFBWiurJmoJ43DQ1i7aKX8HePRBRsdc1rQQrsAKYnojXWMNUcXW6SoDZHuAKuxRnX4zAc4oy1D1GruyMd",
  "key2": "5gZf2Nb8nWxPJqgQoaKdGefDMUpCwZqKwZDuCxRT3L2TyWpjpjK31c618WE4hNociT21epGniaUNHF5wyHSbdHWA",
  "key3": "3LkAZZJP4SL926kvSNbSdQqfU2LGvE6DMfkZyi2NCxRCBPRzLYrzz4ZobJB5dmNKC6gZWiSuiQLRWjZ3RcqLNish",
  "key4": "2WBHr4z4AjXPaqhw3JYLH4SFMiboaLBxBY3uvopDrPmgcu6GWZBntMpUMmBzBHghBDACbWbMELtTDNYa6dnCY3GZ",
  "key5": "4BPxyZ99eQvSQKqWhoJaPt857maX5Xzxf7gRbrv6KxdXXVUmvxhx3Bj8sWMx5VEsXfuWs62p6BL3UCQKQDR2vapm",
  "key6": "ZPmyLX7wzy7BbX7Ben8YbmpEdpZcZCQReGqtJPPhhb8bHH11C8UBnjVqkNmDcjAvr199VYGzbUpxF8JeNTTYhwC",
  "key7": "5FiVDMCzjN9bpsUv5v1R1NsrPSLJ6qr5PSzbkDs89wtxevcMXDSuAqAQiuRRFa8qrGsbhJaLWLMuCzYiqvFpVKWi",
  "key8": "5i7HdN2J8aBXvyeSRDa6BgZsMM7PuwbhAb3YW2aVrSH7pgie5Darb5jUne5F2EKV9LzpHGjNRpLyXuo2M7DB5g4N",
  "key9": "32gQ3chVKh27nioqNENxMHn4gr9W2ssX5iKkyNk9ZFSZkGAqsefFhD3zZpVp4jJmvFqFNS4Vb1meZaWFgM2mnEpY",
  "key10": "4A56qTMVxDnGZxYbeB953a4DXDnXFAKw7mN4N2oWfhtRZwQXM84FBbqpGnrJM1NtZ7TEFtrdRuZbr1RQvwvw4uAh",
  "key11": "2BCUpQJURV4m1ukDV5Vyqsf2SzDgWUdq34asrutewGheRVzBx4isZ3DcBKkwTESaXSgRYZU5pAZNjmeeLqcVonHF",
  "key12": "521ZrNNM2rRDzn2UsW8SeypwiZcU3g7zNEvuaQJ8aRGKvBHzhViSTCH66hVn2WC5RLnUA2fjTzKZ5hE2ezUAWCcV",
  "key13": "rNKmmWy3xb3frz4GE7SSZzoVhAoGQaZh5JKM1rpCSUaQLHtkssMhRx5UGfihd6evQeJdFFMJrqYxBrWbPo33XoE",
  "key14": "5vC5CXGxrH5CMyrLxZ3gmhNroJSyh6i2VG5LhNtW9Z4xMaDPchB3C8GktJHqudEH2Vt7bgeub75xpeopLS3jAtzP",
  "key15": "Cy6ZWbgowsCirKb4JxKkuhH1wyReTNUcNptXnmCUKsHHUM83ewUAk4fUtKyjWSYYeCEtGzyakZVQoghMJU74aQ6",
  "key16": "5UVJ3trdkWJT31xb9TMjK6Mn4XftmrXYUXAe2dpKiNQ7hLGGQ5JrR2r2jTuSwU5r9GRsWisfzL5UqpGgFJSY4Mnj",
  "key17": "4rFjtGVwTqehxRhuHzgADsCceHSe5iYo8b15Yn7peDMMiDZq2TVwMda7G2jagQjTTfQ9Hu8HXbP9pK9HmGqR1dTj",
  "key18": "3bvpFC4xRQjnauWuuABBDZLMnBSbGseU3oiHSQyYuCk7Nxbew3ATtvEbG4QAoYk6WxShUKjWgyx9E5faj23YrfWa",
  "key19": "27jKRFeYod1NwsU6miJcE9CnyWGpJxDmwBxCqUqFQHP8wNJyVuYLiCRPmrvCyHrtZjWuNVjnTTvvrbRmL7achQzF",
  "key20": "4FdnGoKSKK3kE9rGk1TpQSj6uUDGJUj2ZUm8VyFdxaZzd8u7MT33hNv5yNB4ir7a5pVURXdV6ybaERDgPbz9QtcT",
  "key21": "2pMDZhwZcRokxzUB1fBd8yXm7EiRhkQfU8JDi2D7kHfoaRreLKzoDB3patg2icjtGuKLyNtneRkwdgqisVYtmESu",
  "key22": "Mg6fWSgs8PmcFb8a1qaytuzNWHLibYpBpNBLxmfHVPV1LSe999VVqx6XHbgW4G41b5czeRPuDENyJUEaecCW2vG",
  "key23": "4EiSio83BcG23hhhhr8gX8ig4rNEDfWoWHbwC3ZraAwi1XusEpzuz7TTsR9egr9xceWTSwYHDV7WRjK1SsKPeeB",
  "key24": "33YWa89wcmDWBdswqhay1bDQhyhQTzu4Jdpp2rkyesNE994Rr2h73XPYcwQmaumqCTYqZPGE6sCphNRTDFEwfLhb",
  "key25": "4x2vp18XPNG5Ht5YfzoYv4ixcHF4fcN8fMQg6Vhvd6rV4BDtxKAG3aPkafTok3nKmMnALGgnSwdASuxb65aHZWpp",
  "key26": "4yJ4AeoUatp9Rd18vxoaeEPpBp95VV3euEYRqYC1i2sxM2QGaSQ55PoXsJiC9wiXzUaqWGxss1dCaJF6sxax6SGZ",
  "key27": "2rQJpymukbVeZ5kSM2MT3rf2a9eEy5s5Ep6kQfAA1pMSvSGgeoH6WXAQuzZ3T3mqF1N14x7r7hbtpFmcvKhJci13",
  "key28": "3GgnFbu8pLivcybJ8TNzMvhfH1EvjtKvX1vU8UG1LTkba2tKVCgABM2pRd7cgh6mcm6NgDq3xaNGQhJECPtm9x8W",
  "key29": "2iErvCATkxW1yoKUinmJRCtMi1YD6TVS5kF5puRmVZ3pwb8SsgYCvwCMg53v2gHSW2VqkFT6EF1mK7GsR6ZXDX4k",
  "key30": "3Jnu66dY8nHBP9Nr73Yknm9RxaLDsHmzgFkXVBNp56n1yPZX98NzcA3Fk5ooNSgE9yzCCfunpsm5QgAchpJ3mV2a",
  "key31": "3xrQmSgEYL7d9UCxpkffEe4VMMhntiFX3YCx5rb8cnWVqgd6MUMhm6Qu276rrF35zhRVngX2cpHeDqJHmVa33BE7",
  "key32": "2Pv1aNzxv2n41SQf8xaPAtPpfAM21DhXhnHhqPmYZFh6VG4HXt975KhXpcdNBDuzKE6AEGfdbJeaWL2TFTLpRpyE",
  "key33": "63Ba7s4UEyFjUXsyENQZc5g9eRCvWepXgUyqt27iLNam1a1WGxyh94QihCag7me9fvLNYiV8EgT8SqZWZyMPU2Rf",
  "key34": "kX4PhZexnGpdPKXPGNtq7xPKcd5q9sL96UxAraiEGuGwC1tgxYzVraYNZepQabMP1A4p4Bx3CsP4JYCEobY3Vqv",
  "key35": "ihPkw8aNzvPECQenjZcDniL49yik93DAiuR2wy7667YZPbya9rN1RNJeL2JKQmnBjBoVPnFbww9Kc2j8ADe77VB",
  "key36": "5ThesHjBGZ1tSc8mYzJuGvSvYBNTonLCtfYCufLopaaEGACJjfmX5kUhYJPU7RGxBrK5cbn8yBwPybu4PcVCzHrf",
  "key37": "5qr5qrpC9gC9YNWmKwxSarBAAHkbNxCNH38ugU4k9ZKmESeWw1Q4jmhkreNSWGNXn8kqcy7ona54HL9sksXzxR9d",
  "key38": "58i4EUMhUu5brZ93V8eCL6E6m8RzSiZs2ihnv3dbWLsvmeEbM4CSDTxCCGmT9TAY3fSWXDHeUbSBs2cGeH2uUce5",
  "key39": "4X1YahJmwtNH1iWtuXq2y4mimsev1HWg3hDkBmupxG9mh5jii6juxrtmij68Ufm7Q8KDKGN8xdV5oitV59bEgYTi",
  "key40": "QzZ1RPgt9hWexfBQVubyeBPjpy7maBq4k8ag3g6K3H2wg8fjnWEaBx4LpLw3N4x9rb3wWvQTS13VJppsmAycmfD",
  "key41": "3faVVLmyx2R4zn4XSYCjmh98kRqNyywNHKnSxehhFdoaUP3L4YMK9Z6QKhCFhPxbK24mYt4t3ZU73jo8W1Q1VtDM",
  "key42": "22jvP7hCzrVDMyvNAi9tJR3KtXvoX5nJ89KNASQqjdXqQauk9hXPA81WSkTZL94FTr7injYGWq2M1TV4E5RH23Ak",
  "key43": "2iiuViZg7mM7wTFN8SJhEXqC39yh4Q4hSn5s3G1Mh1o9yXv67H1DrGeYby82y8r9UYtXgLjVn84H3digwxbJvDy2"
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

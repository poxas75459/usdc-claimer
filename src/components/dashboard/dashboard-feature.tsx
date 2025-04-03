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
    "4g4K48AQ3pDh5Vd6Zn1fFz5YVqZotFwmuFcA3MngUdCcpgJjADqjqcsC9LqMz3dHEvoc8SmQNFFkvuVzHVkw9jHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yGHbB6qxpP9Z9Kqh4WsxXvwYr9YrBPtxyes8uBXs6iy74YdkbB2mb8v4mBdcxDDLquTyRpa2MVYgnkLFzB5D9jD",
  "key1": "3GmZP7cbZphAbjwS6Wyq6CvcfRM3cZQkpkFBddTu4NYnHonEJZWRsusiPqryAJoC4tFzhMNdU9DbjT18GcbyHTFG",
  "key2": "3SZYuMsCcJPT3U1QkTr477o7hoSLBv4CFgehySLiB97yHqvegvPUH7FEHojmEHqJE54o39D1z2dg8EqJ1HZxRftc",
  "key3": "4gYZcvQrejGTtvMRkn8A4PNzAhtAPtdy9CUtzzAkv5Kjpmm9fhKg4URUJsCc4cSMXmMpVYQktNw2udTtz3cZ4gdU",
  "key4": "srJ6VEStCg6NdWHPYbT5ijKkGwf6Yy6fVuAzRGRn2MwMFm4CRQkZor5fxFRqe5HyeDK5xnkkP9frgjUF8Vtth9n",
  "key5": "66QYa45KhCY7ryJM8knhyJWQuGPBuU1U6mJtLQwvkyi1PKMouN3zmtzpPkz3fGgf2qvfz59LdfRJhFwm44zBkGj3",
  "key6": "cczVqebfLUcN5EUpi3PZq71ULGqfrLZyeXDkYKMqCKuXtDsrjDy2Hv3FjEuGPzZszKZzC3kJo9eGRjBkwns28Kd",
  "key7": "4utjvvKTAYW31AHd1rmYPRAhnqyTv3e5GkX4D7sXkorBK67A97aftLC4ayBztQMS4cCN6QKruZczhAtR7wk1EewW",
  "key8": "1yXKVHUZ5GqKcM9XSQ7WYhdwUCxjW1JxHD4y83WibAyTGXNwjB6sc9PcCkXXbx9C7EjSVEJrEWEpyZMzsq6jnzj",
  "key9": "61kPw1nGF38YhpovfDR1Hrxv2HyyefpctzBtYGTguH51Wz4iAJeoer9TLGAE5ymdn7NG5ncy99aBAhzHRhFwL63X",
  "key10": "a3STxbDukSgqZ2UVTo4F5ubv5DVnL9DSWJsHDKtmdcDnZ3Fvs71oXxEsUwj1pwNNui9ipFnPN7mZ5sAjNsziz5Z",
  "key11": "zApjMF1x5bfyC3bnT4N8os9U3gKLNftyKxc21Tuff4Ut9pqEez8vZLTNTn15jjnrfSJCVcefZxDFvLRSoXB3xkV",
  "key12": "3cgXD34RBsy7834YYCd8A91LMA2HDwabYSTW1YvxNzQXfvHCj38xPvioa2GGKJHe2jjwd7rz4TzNQGKudM3gtpou",
  "key13": "3Fs9k1RiPcRiQxEdnRTbgE37mqeGjuPJRLc1t9cL65aD7MVcwqMNKwgxjbTc8vazGP4mz8NPmHmCLjhcRt6zXhdw",
  "key14": "WJZffbJWqT46RZHnbsRWufycL4DXaTis5EXtPH2GKDfxjhU3D2KpwvpQ3HTArfoxHndoUfabBMguZkYBjb14cnQ",
  "key15": "2arRWhgs7RNs8KyWSfv6vhHiTWkAqgazc2rexr7AC2Css3HesHd1R5CdaSG77GA33rf7UqwyWbxdDHUC4K6KiBGt",
  "key16": "4kDC96J1iUFjYL4gHjBuNfDLYaepfh53EPk9gs8nUB7fFPJsuiLzTyUuLMXCLVK5LJzxtfoAxRiH3sX6pbtFdaKU",
  "key17": "5VdFJzbvrCcddfaGQiWkuyTxhHJCtWeZPQPDVq1PpkmPGtirDzPiRWqWQAinacgdLm2xNBWqMu41L6BZjkNG9BqW",
  "key18": "2y4rxpBW6BZJx3et24gtLx2s7D97Amir3uEK2AzdhevsuJxRXb3u24z4xCMxiuz35eGyAwkEqjTpP3pLYbX5ewAh",
  "key19": "bXPWacscTPdo6skKVqEygt2Ug6AyGTu2ZyBzBeCScgDwBUFCyJaMY3fr9ZnFRGXRfkughHbYXugnNtwXyezbBFL",
  "key20": "53bCb5MWojEWwyYyeEsFPWUXdXqqv2y4AGi5t9K8nUJAWt4cDjCaFo94hz51HSobPUCkWgR43pDBioh2NjKkKWh2",
  "key21": "4WeAZ4oFkvgsSD5BgqrCca49wtmMSJw2dbmBTTZSRsH8C2ckUXcE8D8yKNKCVFqzacLFg228niWF4hncXZTARXD6",
  "key22": "3jyxCvaPqmprENVaDZ42mvybWmjqMKt1Qb9x3S4JqULhehyePo77Y9cAMcRU1VXuV2fTBZkCkwNkx1rPLeuQLeH4",
  "key23": "31NmfnAKtPLk3712xbmixgeqbknWgvt9fE8MKz5pgetkChZsxsBBuKNgGLzXLBTTUqDh8hAfYihHjQtXmWwNwNvT",
  "key24": "5ZMnQc45Wf9nSMMgGHN8sC6z3aziHgiAD3usnKHjFb77S4J8PSh8FdKn7rBtmQxAQZq8DV81dD82edqMkN54vdup",
  "key25": "2QK12Fx4jBNeckqckzY3Zu5iBuXiHE8KBx9R4J6Q71ttXDuBNeoNsznU8DTBuNBneox27of2MFgDYjpzYpJtWt2b",
  "key26": "3c7gpvzgdxdiahWScphwo6TGsFJdwHECbxHqTMRyY66MjdA1wQdPYcTUcf5kcGLGZ2do1d4gWzCdQikHx6E1c34L",
  "key27": "2L8LtAKsp9UJG4Hz1B6sDaBViGB2qLA5R6Wg3gPVnhrPfkMVa6irgU8C4iGYzhNFmMDtTZ1MUgauPR6Q1mzpbhQn",
  "key28": "5mrGM4heoZyJYc5SwoUrJzQoKMAX4z4SCfzQ26AGsoe7eKEQ5pAQymqBrtz3s2cT7L2JFhibwSTxDtY8fgw6bYKu",
  "key29": "4LPsHEfv8tzqj44HJcbHjsUvjxnE87fBJWiREeB9ovYpkPdjdF2KL5ftWcEWBX1woJGbHgdPCkbCaBgXJpt62fvy",
  "key30": "5ygYmCtSJeameLD4z73DpTS5iSJu3WBCTyUUPbiQmrmBsrH3P89ngQ1q95qPwjtdBVBZAuGEXE3gy4rzxg1Ax3Vs",
  "key31": "3VugTAa7oHqjTujhju3hngSg8xBtd7ittz6TgEyQYFa42mwoDWezPoyMuDvitD5gS9hLBR8iT5UbfGBcMaTJHLz7",
  "key32": "4QUpqKxGaqRcb2jsRU6gHLkDsuWEunP4YFP93zFyDDWejwXEn8siAAvwW3xHpTfPA79M9f5tLtu7P4ajWo8gugPS",
  "key33": "52GjSbKAsiq14dQj2CZTMpT3o5dzf6rUeGc3N9GAnBm9NHJF8AqigcvJnkekyBcAgggF689cQ7vRuURRhR6i7g63",
  "key34": "4qnQU2G9DeCNGzjRAsmRtX17Jgz8EiWtCr5WCaD2xfhBEJ1U6TZGfuhssgya3vXfDT5FZYDJXcM9wM1BHpBViFGm",
  "key35": "3a9Hm2X2VMN66jcMpkUYuu9kQMJ7MJAJsAp196pGEMN4jwysPKUDy5opgo5yF3gGAMBEF46XvSuRirhm2azBqyx1",
  "key36": "2jezaSD89H6umbzKhsUEpW6GzP98HfJzBctyEqhifbeczSZiBrNikxK2A38GAfWvCf33RF6gN4W3VyhPTdG9xWDu",
  "key37": "6554t9KoHyCaT51JRpDat2LJXsN63C4zgwM1VvAp5hZT5bBqbB8FbynjYqqigzkPe76Fact5YBe5JZsMMqvy3TEG",
  "key38": "34uw9AV9HDZEiycmcLnKq7xWsJPcQvr759JZ2GMtSgSy3eHG3VVwzic8JD3zdPC2TnwogMqBPVMVzdys3uBjfy2t",
  "key39": "4bfeKvz9j5VSTscQNkNrD5rWxshyRNZPZWwekCapDzUvZpPRxVZ3YuQ5Hit1GXBjh314LYYyETwSnouxoeegnuQE",
  "key40": "4cd7hNeDPKe5BV2XxMs1ju2knXKJsVBQbPbyxhPHoRRRmD2pk6CpQLYbo7Jk7M9QuePS3VeczT87kf5mmAFoKkPK",
  "key41": "5W3yrWTHeZmSPGwiZx95Uii1ZjsM9A4k8ogaXZra72hjxFypg2PvYfmC5E9XGCmcRd6zXe5fef9oQHN97xn2fM3v",
  "key42": "5x7aWjEkyKpJxVGzpSGMTCCjN5PzGz6gReXrtcDX8pJwBvyrc94QiSWywAC4idyVMKWV4qR6j97Dw5Tdwo53vdEP",
  "key43": "3NTJgmF3NLDt7nUxLV4TKdXGoTTDrbWjYWxAYJu28AZVNCPQxdC7SXRSAkQGNzaMq3wS4R51ApKDmveo6Zn6FDP7",
  "key44": "bWnKpot7hsDML3x5YRCjjLjMyJBeir4H58Mn1ggdaMhtCQAfvhpDdUfAXqXbRDsJyzRxvDu5MnBxigfSRZJR2HW",
  "key45": "61SSe8XsXedwENs6hnxFu6awAcvqW9AbKCn9Nnaz1LoayCrn6bSPquqkowEk97RhejDDcEGjfqxrwjsn5gXdWbR3",
  "key46": "4ZG2Mrji8pkXymU5ArUSho6gEQgSBxtm8XCmGZUdDeAxicpwFtjNbyUUVKfsKsnvtMtveGzWCNM7eHdbnZtqh8gE",
  "key47": "44EnYhmSZMJoP4TBHr54jLU6hrTw3SHm1T3fjXmQ1Lhf6kcGyPQ2q8vqqT7fTCT8Qt6T3jgZhZkEongidwHfGqPJ",
  "key48": "46q1Teg4kqVHTPA3YvDpSj4VFRhEq6YMMKhJnkkfL9L7Lhs7UZHKkrrMbjeCaQK6gq4SpJ1Tj98NmbCBsEcypt5J"
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

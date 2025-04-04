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
    "3YMZJJpxr4QfEQW2mVMia4k43sD4ez14JVkAFCDK8Eiw1wv6Bo1etTod4HCsB6hqsKMsVbmvpPdDPpkj3X8aacj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LjoBY4XhsXH4dkGFe4XNpjuNPe2dbPDAkN996MueY8iurSPPwFeLSD9rmvvYBdEEqsZCjBPpoFqRgiERqgMxAF",
  "key1": "2Jy8LKtnXHUjqHQi2g6PwUm2uHhxskxiscmNoAMnhn3wTtfK5frjkRTr5qnxwdESbR5b6SkZySwztUucyggZfBvo",
  "key2": "2fHPYzNBM11wWf2XLGDHChNmaid8RTaA8fjB5B9oBJvWPppJ83hwkcPyc5mw5AegdkxmSs1byXNJwgaNkgi3D1ye",
  "key3": "4sisBYX8fTyr1ENPu5WfjkrrDM8so6WuAU4Jd6mVY7Jd2N3G2LtR5fAxXv7iuRSa3UTPUf9yT3gprbG1C3LKzL33",
  "key4": "2oWJkk1PW3LE7twhS1NbqnWuYYWRvrGnrKz7NY4x7nGv2EAcy9VMUN43aJhE5vy6hoAVcFUZ26cXbwfU2ngr5qKM",
  "key5": "WaVZD2RxB7tVMUxsYK2Uxz4XR7kytkP1Hf1CQdoSrYzyPcH6xZkAfitPNTL6b4yHbDeDpozj6t46KHqoAiHwG1y",
  "key6": "5za6nYybohzEm5Df3AB9hMgmhN7Hib6vfvtMPTdFWCKqX8keVS1oFYAv9cXEHvZcaXoV6XAfowSUQ77HxDGCuBPb",
  "key7": "2Sc8EESk2HPs9ECoBMgmUECiHW3V6Lfmi9iQr8K6t6cV8YxjEbiSMUCht4y1uzf4uqFZb867sNEhoHGbx9MRdQXx",
  "key8": "48Ma1mVmqS4T1pXamszrctQ3zyJJP93KVdpiBMPP2LeeRdd5gWfAbhNXdqm3H6VvhGW2wgc9tQv9QC1D6r8KKaEw",
  "key9": "22KXwrRUVdC31uPBQu4vwUcLmETYnAPKtKE4VU9x4gfN4Xd77AiMi1FpFyrAXvcn5yeLJsrLvnc3LeyhFwY74BgD",
  "key10": "3638KPUq4YQhMNA2kefLJ6RJiH6py6nFidxmQ5UoUgZvKKCNjhgBG83RmK8Sz1rfAwJR4WrpkgKR6eKwrrSbUDgB",
  "key11": "3CUKUm6XZNjN7MDvPTR5Xw5NNUm6ugmwboxMxgM6k3BJYKHAQFhYDcBngzZf8LbTkzpYGEhV1knLNUJSHkvS8VkF",
  "key12": "52ahtiY4CG8viat3Lmmf3XRYc2ByvrprgVb6LFephNAANK1aQfoXFmbsG6U8WAJMd5SBn8d5E6zeBrjP8D2ik39o",
  "key13": "3y5Qv8EnTnhTZeCam3Mq6EiiV7Ki6MQ2X1Rwa3d9qj4Xu1XhSLqkdR95apitvNxLrp3YQALmH3sgRXRJWTgaidkE",
  "key14": "4WpKsb3dNZ5tnbY4bCqZbfmypoB9a343JSpvBgRujqC3LFpAN9kK3MT4kch1ELZkPMZ1zM7KKM2Q2j5y1A4RyHiB",
  "key15": "5nCEQyZ58S3XEr6kKmtrNgc7qs44LPoVX8wDpgFyQzjjLsr6ybg54JBFmsmWAqKKjr9Q9GWrDWoMWrXiFXwvwvX2",
  "key16": "3ip6hF7SuaB27iG8RfuwQXwrmR2duF4FQYTiRGiUejrKYaZ8ZbaT94VhMjZNa8kSzxxNokBTyxi2ezWgEsndWafy",
  "key17": "5ihU9EMrN53L6bSHjkmuTW6DGx6AEhtXALgh9on4xzpUNCP8xoYtpi7rmRaAUdc3SjZXHGnhhdxuC9jfwtjA3kx9",
  "key18": "iLuTydUQpw4YmsQtQJBPobqV7TFtmipqs64fnTssmfbUnuu24zd1WYRWg9s81v9eV9ziB7pdt9PSAZwgfp7pE5d",
  "key19": "5a6gJxuy7yLoBgBsBq4dVZpte1dGezc3XBzthNcUJRjS3Q4MnmQdcfv94qFRJ9o9Hq3AiSnWZvfgJQqLC1mzhrvh",
  "key20": "3Dtc8WdCxsWqjM6yvbdzYeV98Xhm7L33EpSkqsL9a82JQoBr5aBM7MAABr48TPnv1Xq94xXo4X8muUPBKQStkCbA",
  "key21": "2vhKiMJ6h2groaSMzrpy4mfmwMBUBGyEfMobnQysbhzBXX2tK7t57fcQcHcaoMBES9PcrsEazkXtw9qr9wBirCnV",
  "key22": "hjmVrLZqP424hS4YcinbYbQWMZQTnoNDxRM7BvMpYGNFvTBPrg3W8417vi5191cBa5RjGWhH8NtNX8cCabk72vU",
  "key23": "4guLfVoRtV1uiTfndg68GU7zS3hPwewyE9ukW1HXevWxq6cEKSeJzCodcgmDV3chQPUZoAMQPY38KKb4P8ekS446",
  "key24": "253sfZ2TNpwcBcpqfQmmgogupwPQagQykRfko9V7vhWjLG8DPccA4rwTwi94MttaHNKg8FveCCxKWJj6d8U1Ufmb",
  "key25": "4yEP41eBA9NDedT9cncbJhHnCbySnGzsvyCeqSbBtmjruenhXzdkCfsXLfBBE2JhmkFTa6YBYdeyynhtdEjnrvA8",
  "key26": "wMbLtcz7CRFrqvb2biqwQTWbcMdm2dEWXNTfN5NkZVwfdeuec1LNHTzoUMy7Nt3j23uXALr711bRb2FaE93jM8g",
  "key27": "3MHsxJbBQT6qDVv9qhdesAiUNDPDubMQqc37JkNxKyaXFK5YqQzUJZHfH9QLq4DYP8R5Qu5aZrGDrtou4dCjvLNs",
  "key28": "35VQ5FcrtWAsAeLh3sPqwo6pRB77yZrg52GcrfxWdyu9Hs7FEzb3hx4zs8LGfXZBYetgL25paP2RDXXr7ZTWUoM",
  "key29": "4FbPKu8yKP3DicvKvzSAMLRqzVjdSJe535APqB3cT84xznQ6cy7gZFPNvFJ3F2NpBKhwDHgiBVJtiUK86JmJxYMQ",
  "key30": "2XqMguJNVjfPoQD19wuDEP8XTw2mtr1kDWTY6WfvzLNRGibbzbiCZWMvNYb1VC86mJtEd3L5b4terKSp9vbUJtix",
  "key31": "4BSnEqb6MSMTp6BHGJ6jRzgqTpeLPjx9eYajR4mbg8TLgif6pp4i7uBphW5UEmiUqgexVAgi2L5ZBrQuY9Dcuccw",
  "key32": "3beLP151UQrVqXJx9D96AMwcTkaqmRNHmoyfPA7qN5pDa5Bj5yrJREAsPAXsrvB2vXXhbe6Ufrz9aTsqHAK1w7LH",
  "key33": "3jDxXk3mehhUMo5Ao7mHHzQsbgXE4tvd6VURiK9D5du7qzr6GKrcZ481yw2ESMXv99sUYx9Jk97y9eCJ5ERdA7eg",
  "key34": "5odCZybMXxzkpSGcgT6SJJVZQkTHLvzxdknaEhd5ZPq24wq9JRqmUYdqRdqFWFs5J6aBVEHgteKspX5Jpp647FpB",
  "key35": "2DLWq9QmXxvMGSrw9xHBWvkgQ4LyUHdgrnGbNXaRotGdc863D89e5yzHPc67sZ2Swfa1K255TDeT9yhz646iEMcK",
  "key36": "4YYKDaCe4crD7Nd8DyJdtZ8FwfNna19A7zuXSuHgvYNxjwAnxNkcjWApKk2R3HZ63mh1tKmHFRENz5FUZPFaSUY7",
  "key37": "86Enc7jhPL8JdrHYVSZijt5dDTP9qhJepUD8F6EygzeLnQCUvCi4qq2bc3h1dxQ9WCWsczZF9DQxYnE4m5ky52N",
  "key38": "5zkc6uZjMQbBpyacv589qUvd7V1MoRS4XfBxYu4dAmyXFw3WJZPekaieWnoPuak9mhoWN2ut84mMtdAvw1riuFmZ",
  "key39": "jgdfcLjB7ichXx33th3dUPdAbNosXLejUpipHpDXihxTqQew2L2FNGjn4Q7fgEYjtxx2LdHUT2hp3sEnpW8rxoV",
  "key40": "vEshe1ovokxHmVqXmQUinwfAUsiebSuQnaQxaJURvUo3Lvm1QivzaMgR2B3AjNEN7obouJ62KDM1EALA5oujkYd",
  "key41": "4Aaky5tj8T5zsH89R1rEu7VyXP6xstvVsc9retDAXty8ALMpjtpGXs9jq1Ftcbd7RvsWxceQRTsQorJmBxm6tkTP",
  "key42": "2T5kqDqDoyTca7YmD6GjsAWbF4ZrogJxSbXePJqSUHWLNWDA2Pf2DApvoq229DBHcqhary5Guu3VvhdwgCazZdFX",
  "key43": "2Zb3sscCTZ4Xq3kSoDmaFMBZYQkeFGpz8d9Zh9sUGoxAhNE4rVGZeuE6WSmRCtL7nbnkXYABu3yQw4FihibocQH",
  "key44": "1M4qn6PzhMuCpig6Y9RyYEj262wWdrc2Qa4ukvPnBaCRpMqjzhVhtGUdGVbCsGL2Nybv53Jx24uMnkoBtYBJ4dP",
  "key45": "3wAScER7csocYSZm4xaoUiQqb6H4xdzdTj9Mv8u9qb9pcjFNW8Y1fnJ8BSM8dtCjTmK3tAEbpjRFM7XxkRPNu6du",
  "key46": "5rkNLPGmWxcNTsgAUAYY6p8JNRzCdpkxtvMtVRWQtD46voAEAYX3MAMu1auhyYzWvxHTETMKmpmUjuVVQYVujkHN",
  "key47": "2MNQkjPQrb5DPRQLu7zhtkJWfs6r1z6pNsfiU69D7Zeg1cHfJir5ZCZW9CXt5b7vU6fBUiEiC3hjUbanKws45zTJ",
  "key48": "4TNtjo1Tj2xfnsbTJakkaQwDSUfZ6bXggFKqrgcjP854QpmepJUMHU7GoCGyPqbuAcPAUKF7QpiBWvBd1U7X59GP",
  "key49": "oD1TmUL1UTqkUZxRmU7YYd2ii5MXAbJDsasQptKXmiqeF8LRQMeeupkAt6sz2dfgJw7rU7wwLJDRLpc2z2zW9fY"
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

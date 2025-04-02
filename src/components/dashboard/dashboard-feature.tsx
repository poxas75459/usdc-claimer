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
    "2BkFABqTyqA6oM2PtBAGP4P9jUGC8buzzhSCGKqa8hYMN3hBfxbE1qDVGUyFSEDiMus6AdnQv5TAM6y4gSc5cdkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAbdwRDLQUcRVoq4gzQfnBEamvtYKGNJXMZFUueUX93Bpj9kULfRrmZYVZzRkKRabWBv9ruS7G4e7WfSEx2DRQA",
  "key1": "47Cx6UeojkAYJEq3cE9h4NQoyExZ3hKX5JFaXBLf8MDz1LNoPixyiGQZ6JKwA9LQWcKGgRJNLxFyMYKFw968sCd",
  "key2": "4gNss668XfDuPsMB7ThhGHpKS991yRZ2wGUq7zofAmx8C6D2b1jTULFsJhaSkyuX9DTWb11R6DLVJwWWfp7R7ThW",
  "key3": "4K4u3Eo9bmucZX8atxmawbyxTW4Zuzje4FhRAf45xf9DHmSPMioUMKgJ6BeG4urk2Q4uib4R1kz9xoHyHrsH8ZnU",
  "key4": "5zXM62iNP4pFyD5NrgWUo4vb9Fpqu4Zm7bp9yWkKB62HdpyYvvSuo4ipZgzNhUXE8hxjyaLXA6cAjxnaSG1LMdgr",
  "key5": "5WwfezioYzZWQsG7YNcWkDQwHcQCfoynSHvwPSdPdaWYtubugGJkYXcgQUivsrN3fg4a3epfL4pKLzBcqHRgQNKg",
  "key6": "5nDUc6dUfDxJfPNCTiz79eMzd347tKHrCsXmXEUnGSm3T9CrTV6skhZfqZMpTdgm1Gzz6ETmCKMEr5PZekqDBm7F",
  "key7": "3BpLWuJnEcPzpM5xLBRCFdP4PJgLYKYKCu5Ww4zvMK6iZz7qnYYfNCAtmWi4UjhE6dW5UmpXK8NsPNmepFS4a62w",
  "key8": "434JefuChpN2szgau9PHG6GsJQwYgpxuLpcawxvjYiTvD6N3qhbt9AQvLZLhLsxirwLVdk1gn9ZTapwQbCUxMJbA",
  "key9": "5XCKoXQfWQqFsDqKA854wkcpdkp7cWWPZJTe8GmwuRyC6UTYJfEMs8bSVv4BZBKm6diXvnS8dxMdvNhobo3SnkUF",
  "key10": "45BXYaCZ3htf8yPKJoSeukbdxyqgaDJJbfafuwE5p8TmxSJiY2vEmQkRBvhy6Pp1pt5e5Bv5pKNhP2CeXD24rSTq",
  "key11": "3AyXcVPRuk1bRRs8mK6HopeyeLt41xQxxFyrK2c7Q8fHKEgh9jYYuPkSyM6kCn7DsAxBSVTXPArXT3sm1dt7sdks",
  "key12": "48Z1EhhQ5PYjisbs9PjQWT1tgXBUMtfeqthh6L9TzYz81rmnv9VxTCxC4ZnqC7KH6PDJFjMZ4P1mFwm3AmGruVwB",
  "key13": "2Qwm6rwTsceKkfBCRpXn2bLUUuJKFFWauNZ2danShqUyij8S1WMhwjwjLLVSUq5hDbk4WgfR6UWYGmz5c1GdDDJ7",
  "key14": "3kmP2pUToWESN96wHMLDx1q88mhq36g8Bstr7j7yjFPwJ4tqEMcUBCybm5GEJ8AUHLiEzx9rrWFdWozCESzvJgCC",
  "key15": "21R8B4AadJc8UZ213FX3LEFNijxpArU5WRf5NF8EmaF1CBxJQ5mmMCaAmScEiAyZ8WwPS66R7gkrNdtsvY261Fyv",
  "key16": "oPrFLJ5Z3JyT4auA8aZ4G5xJUyGxgfnExDP8Q2cVQtmLCBfXujFnFD7sbGCXc7tVWMF43XF4BZmYNhsyruXuevg",
  "key17": "65QLf8UMvVVK5JVwwTg1TJP9BgzbfeGj1Edhn5kq44f33hYAXvmfzX1jkJigbm6mp2VYMULJ1MJdPQ3MrTJ5aLZd",
  "key18": "62Ht2mQr8pzMDdMcYh8bwUS66EYmYdRBFLKjHcZcbp7h1KqDvsCFZK8a49bRcfmuqPLdH3gxvtqTDEx2wsnT1AUa",
  "key19": "3v9bSHDvDddzUVPNL63yzKfKcP33gvAv3rDg3DaxRdRPCsdNaXXeegZu9A6MPCXi7e5DAUodxRcF5AtDCwGepB5Z",
  "key20": "4snT3njuKFzEc61rDhBhwmzkBfyLiFkWp4yNUDGcWenwgPZvNE8WPQBiL2RxLuprNc8i2nE7TaJBXZCy62BtGNK2",
  "key21": "5rAQyZe84aDD1YrWz1WFuXn2eJeMDNpnTivUVap6BKDtFJrmu4eKHjvQ7J522MQY6gADvhArG7UGbYMVNKGu7emX",
  "key22": "2kh1WTEKh4aM6Mw5D6cMeqPHW7hf2W9K7qj3eJJEcy9fdGv6BUUqpcx3Mrf2NR5X4igdpCSppftVMZxFmUGUsWeJ",
  "key23": "5WCDwgjYvRitGCTXyqmVqrWjis6in7YPnM9rQouZyifPdBYbwooKT8rBfkNGacQ9mNoPC2yMNQjeau5Z3gFfhBJu",
  "key24": "2X6Brn5EU9RbAq2dgZD5hLfVDVWojSfNSvaLb16PyQ8NqmyAHaQndrfShxajeN6dfUFfrQjQDpVd1EHXLQXyqU45",
  "key25": "5UBxTsZznNPCuyBwDyUWVZxtkvKU9vcFWCwDQby2QyW68a1Mf7gndDam5QVBj8TndrKYc6bnS3KZpFJBpHUXkP2p",
  "key26": "4jfstMRkuqk9Aw8rBaked9rPyMduPw1izfEJ1juF3sZ72VKFvkthgyBsCZ7zDhEUqhv5W9uTankwwFs52s9AyUtn",
  "key27": "fDgceCpkQP3DUGgrL679tWk8MVkvuu1FvxNrhJfwZwrhBf8EmXhi4GSCT23Mtd9HEzasRmjVwvsNd8ZeK7M3Roe",
  "key28": "3hH2HbaDxQydFBBTDMHNSMRx7bzbwca6MEFFW4NzctJd66aYdYFRcr8Y1fcG3viiUhbsGVCi2PRBCrYuPVxPkhPY",
  "key29": "56Ju9qQ4oMpB9bNwB6fSwnXz8dRaTtxp2cK3APpBrUSoukA1apv52GbonzNDzthuSbzEHnRPqfCbbgk1iwt3S6kJ",
  "key30": "3b5rtStnDw177SQTAKjH9kgNmJNnGihHc27sgyoiSGFhub48sKajdhMcMYvqjTfbS242kY9BxJsXQ96njwtEJhS5",
  "key31": "4LK4pPcp7igaJEY3CfRk2uyxCMYty9zyJkUXu1n7aX2eJijv2hK3fw3wKswV5C5UrEtz8rVskd8siKJCFv3oSz3d",
  "key32": "2KQyoqBqYfUEtGWXs8Coj4xFmyyRakN6L2815oo1WTRh7qyv62Q4UwfdJUBcCLpaneALziBUDp8oDUrdCugYWYd2",
  "key33": "Jjy5Gda6rzDMbetBxThUsrgzefv6decVPnVJLEgLS9fG1aLQivHJyckhK8HsTuXnAYRVxUUa9LBZafWBcVTLgD1",
  "key34": "4u6iTvkacASoHxVWdGAaJc1kpMevt9JE7C73wyNDZjhoECFDYLv66oMLZL3NbcTseAUvebKV2xXY4MLmyUkfw5H6",
  "key35": "5KyLC4QPZ31PHamJuwbsvxQrF4LZKpNaSoT3iWGiJMa6uHusu14U7oGpdUx7JkN33yx78qDaqpXLnPZBExx1JvAi",
  "key36": "DJUr2yXYi8LbTcUyM5jfTQNqLDo4z9yxKUsAHz1RKBqueqMqY2bqShTtdQUuANxfAnxJC4JJ96pdNx5nvoVTmky",
  "key37": "4HFrhVAsdSjNWQoN5LcK9fJP6QVesDCDfVzxW5h5yyEKK9MBWH7w6MPimUR67FvEJY3oomuUaumoMnNoUH1EH82E",
  "key38": "2NBBQTPreXSABVhLcy9znkw19e237w1Wde3h8pv9CDE45cToy7oCfp9iFiVT99fnYdfKzm2oNh4ut5bhZg6RT63i",
  "key39": "4dAePZ3YvwgyrxUhU3fYLYFYBztZnxEEcidVtvJp617A6GN1V2mZLAT7vBFkQnofZL8BgLGXtRX36acjtELmHNmp",
  "key40": "2nmN9Zq9fzDY3np55mSUj7XHJhMJtrkfxzrnLonMXCKFm4qbmW5y2SQAt6uWUiE94Ee3Gi81qTZqWkBZKKYCCxVx",
  "key41": "4qVZ6qaFEpm8vmyaMdJJVyMFhRyrCZ2KKVUSnc4MADBSJRXYQ3RYYzJtNant1bCKATPZLBcDKHRcerdDmpjLjsNU",
  "key42": "5X7TysnYuQwRoc6Es21wDeAH8ZTxJWvYG9UA43i2wpqnyEvMfpaZpQNWbWrZVdnNEnwqjmvdfuRgPD1xDsSLWkDh",
  "key43": "3SBwBthwBHF5xevvpEzMwKzmrNgfSLfbCj1k9CwzHEycpUCSAhaVZFnfmmXMJSHAxwko66TVcDffMQib75h5LcmS",
  "key44": "3DgrTPjPiz4Xz6kQ12JHNmrbUyJEVc9gMPNNVNAksBLe78ctEby8xzqtRfveiiSJGkSqwdPQdGjCmipc83vB4UQ3",
  "key45": "3ei8osBbdKToCzPbztFsWgxzEuJiF5qivFaaL2piYTfpafzd6yN5BJ9D8F9pEHe3tCE17nAAgEc7pitz23ESrfSG",
  "key46": "Lj4oRL2Z4j2gVYhBt6x32WARMgNRgsBzoVhm6ByrJEWeM2ovucx7TsBodcoXoUMny1mpVoVhwBKH7ZrSTURQGUk",
  "key47": "2GAQZLtaj9SqBybaKQxb1zA2pRvNmn4CX4NXthPvvmiWWQqwPPACUhWTaCtGLaD2GkUzUVpqTPxzTGBEydifenxr",
  "key48": "5o9pCRppZsExBc89VgVX7p26jKAKCViH2Xey34GUccnUeuX8aSUeX4Nij9HwDGrit7GcK7EfhVnqNjYbJinX64Tc",
  "key49": "4zivYs7GFddrWFNSdjaX8fW1puDKtMfjGEPAufve8R4jyqtdVhVLGrUqb4g8jUtju9DKyKwexb66FMKBofnjcW4E"
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

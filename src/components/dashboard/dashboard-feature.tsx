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
    "twm5vYWwVpMqiY9SMeP5zzhDZqyy7q5EBFB9Y3QJFPudMkQjcPc7MzcBbSDzCK6skpDjFNZKRfN7988V37reFuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vyqLdTU9e51YEZduETFN1AbDCqoPjm6DPX8SNkpsegM7TRwLPk54tgCgu6U1rbHRmwToKPB7YPkVDrLLFFvQTnc",
  "key1": "5ydUNiyWzDL5ytgwQfemEKo8uYYTi7XfRwfySZqgvWHsXb89CPwojdNb6SS71wesjaE7qYAnAxR1MPoULKJjZjtG",
  "key2": "4ntLgVMGki74jTnvx5MrH36PqRAMYyjiiUoor4Qi7dWFpiMsDdurKKiGJQVKNYSrfsKvEr3Yu7mv2rPaXtqZCVdR",
  "key3": "15XPrW58JcnW1cpvdbSCDoMh6ScMTsW4XagkFEBAMUBJR3X4X5BxK71smj5s4ArVotE7hQphXBujBGwRU6ZyHDk",
  "key4": "4TPethtbb46PJ2RH7YP5W2KzU5nqzcVkFoy1F1jC9hUnLRKn3fHwuAtuZxzGjCQyDBMdPLPhgfFmD6eU5Xr6vr27",
  "key5": "2B9h4sWX1dpdDerxuxD5Vcs8Rahh2bUKUNbF9RReastT3DLbpfjcSMj1tFXVwuAFaPbANNbt1V3DLE1bPLySsavB",
  "key6": "mqk2cVMkiYJ2sSJTAn5GsTzuZ9QFFDjSWfwEzH1K8UZY2EauzwitS36vN6JfXQSgErBoLT9A75u9Fy6CPNyBt71",
  "key7": "4dK9GWFXvhBf2YTWV6VhmNesBK4nXu5vwa2MovfetrnvaiVaDPy9x8sfBPyQam5PqPHrFevLwEuUSB3hXAPtzmht",
  "key8": "3jgKzk7XsSBF5MT5Q9wFcc1dpe28mjcEJSwfbJw9318UpHRCKWwidoivdLKXkRHzkg2vMt3SHCPCyN4PryeC9geV",
  "key9": "5QTFC1M6NTWG1nWTpthNfFTYccRFTyFQE6QVA7cFyUAk8f61PfWkXjvrNFgWcfQ31ErtsCCjcXjcBHTc2HZ2BHci",
  "key10": "7Ag6dQocezamXkz5pmditX1VhY1HgEWn8BxH7QVWeVjf4xmMYECdUdNExXn3mQbXPscpRdnu72fz3MYcxF8UNL9",
  "key11": "3TcQRtbpA5sTXzTkvjYb4nqoNS6psZzqV1dfX3EFb24xUh62Q7gVZAWrHhMYhJzBwjVsefSWnfSmGTKA4264E2Zo",
  "key12": "4Skz2JM2sxKHxAMmC6v3MBd8SKnbw35xaQJThK22cn25sn44mpKCBgEPYZ3UbWqRWU7SEroDNA5WehCPfU9Eppbs",
  "key13": "2XF6WUEKZrybwPXVQdrfFnj74WTrDQYcyyBC3uEvha8nqR6v8vtfwsUZ1mdK8wWLt8HpUEwhSxqJLMnagoqo7wf",
  "key14": "pmpB69DQNCx59TAGKXYV6ZjaJhjyiMC1ztTMpSAsGojtTqUHizvoVsWmhtNoLDPM4REaGm4xWm1AC6FC7t9R7Ya",
  "key15": "2cFAWfKp5LtjFT6N7jG6miwt1ytTG1hDBDU52zR3eGsonohQCGbRy7pGDjX7Piq7cG1Mch6rqop5ds5ExJ5MfnEE",
  "key16": "BwC7UmsdscnmNK2z3HYTvES8Y84dsmdimpnAMbRyukg4xRj1S3PtETT8otirEn4fWymeqakvXeQ2qBcfPYYe1xR",
  "key17": "361PFAbvvcEYYpAW9EKNGjiLxBreYv4GSEoCAvz6LmRmqhb71cm8wcxyyyReE2F9LQdxqwx6AGTRRdU9mwTCiQrF",
  "key18": "55FWzGBFHMhB1yRiw2GuRVHgFdXpM4iQ8J7EVUsfMWpHsT45H42fY8wzL1s1cD4AxQVwTPfrhh6q2JKwim8ed8MK",
  "key19": "5ZiBQhmS8niNmmQuTxyTTMuzhMFFPmJKYhPpR1Hn32xGyNBtQauXtoLyZupRoQamk4hkULPysA6Dp1wcbKYPGgL8",
  "key20": "3x3vAW3uoRK2ZrM8gzQkpfegox8wf2oY2iKcnuU5Xj73dBkbNzikA73FRtukkioQP38DeCCL8CMCWdFr5rkCUCf5",
  "key21": "66Y2g8EcJU6DTNJ1qsSNnoNmA4ae7htrJgo9M7pB8jE6UUWpp1wBVSGyFBCiA7DD63ekswcjpYdMxthMi4acqKQR",
  "key22": "4Xh6FWU3Bzc8GWTCvBA9y7PGJhpJ46syjiUUGMw7kQPdLKF6938LtcDmoPrNC6RkBUJwRkZTyxtvm5fCtvyhASkc",
  "key23": "g7k5zzSEraN2hX3A7kAcASMFLf7hbQZz2bYrPaJjau96P1BRfnShywZ3NQJaSFnagBomXBFwYN2Xkhs3H64xSjk",
  "key24": "5JM9H8yAAo2z1BvxoPFPs8AunVdUUJPXvngJtbJYz7cocYygEH2mSnf9SStdkEsRWXnUcsLJvt5SuWWugzwtuQhU",
  "key25": "3r6tGG231H2XvU3uBQTjYB9sackYmec5g5xqdN7VDUgRqg9FtLKgsTVECxAGqo6VrC4jHFx1HH6zwpoKHghTtr7D",
  "key26": "Zr6dq6hmGQx6iGSkuAkaMFoVQ6cDSnxGDRmhADfQMKoquMysaYXGtadujTmHyEF4QZqUgRmTtHWnJ4g25n982wS",
  "key27": "g7Yq5k9QKTSWDW5Bxv812PWAw7VezdcSxbEwceQ34enpmjkWiidLPrf4GFGhgKSKDngnDZwT8rP3oSoeuMEJkV8",
  "key28": "4W43GcjhjmekMrAA8uwiL1WedwV8vvCS8QEiGoUqjqU64paVtELrULxmucQAEmfXxYsWNHZZRYRh3fyRiCoczXHh",
  "key29": "4U8sdvT1WxVWNZwkysJcqATbtB3WqC4kHf8HH1z4ZisSiqVfrrXqtwBwjDFoMwwozhMwp77cjCibvgT34PjrB7SC",
  "key30": "472PT9qsACJ2FVniJetgtev7HkPmhP2tK8xiNmUZn5Ky64Xa1CW7ZHUbWB4tQs4NtvSTrg6cZ9Jkzfp5AtRKMuTZ",
  "key31": "5upSQMwUjjv6WXS4ruihV1e84SuMbpDcKukuUdcNxqMXheaHFrbt4diDRpq6pmja5e8RxE8g5ox7PGSksLaCxZu9",
  "key32": "3KAcvZx4uKuuEnaag2yFcTCX2iNNgo5hd1N2avLSv14HkkrseqGnpScrbbQftjf4Z6StnWFHqofXizcwDY11a316",
  "key33": "2xthik6yPLn9HuTNa2QfrQgv9zfMGHdaaVAZBo7GVQSeN3dXEAgtBjeHvhcMDb7q6YpANoG3PSRZNKdAp66PzUhD",
  "key34": "496G4XBzuS5HdV4e8gjHmUBwvom3eUhTzFTnBmnvpi2CXuGfQmmjfFgqzRqQ6BfkPr2PHVCG6NJ7Z3tqf5H7mhLi",
  "key35": "5unw8RttpDs8qvyiStEA1GTiZ9yhRQZ6rSsMoisH52rGd9iSbRo6UQCmyqiJjxEvCDekDMoyXZMvbvhbUV76PUyN",
  "key36": "66xE5SrB2xVQjAtQFyghm3TQKRsezdtJCQb2TeQyWrarkKuW7Y491W6kqF59hDCHzvtJLCnmMicFuD3uaqx6U8kN",
  "key37": "3LrQHN2RtfDp7reRzuc3QiYPTgJxRxEAEERGrViXxq8D1kU8A6wia2PwDLfRWUP8XS74kT9Y37Rmr9do3as2ywzJ",
  "key38": "2WBmP8VzHBxg7KW3AX1hkvGDoHTXQ8AZFLMBMoGiM2ezTqKzGFpbg3ZjjPG3ykshkvf7dcX6DGpLfRZ1E4oM7oYR",
  "key39": "5jGss7ByQvoSi1JfxPHyYpPkaoSvAJLRUHs5mp8fxhPtj5WUwTPjN2sMLq9MvkDWX61sHK9QCxh1wYcW9wg6u49w",
  "key40": "5K5vtYEsuW6syXWn5EBwXPH7TAaQvxnfts421iiyUvS3xCuKCJ8MQbshWyzYkidMLqtAJknQH4pHxjKterDQ9Kvz",
  "key41": "5MW4BPF37sjkjtTjKhya63sXpcq6tsYEssf4FoohEwQ3qnbxmBDzQf7wKk3uCHxBjXtpQExEzXGd15YrUJeKzn3a",
  "key42": "21ZJewUBtyxX72HaDVY5tx8tCceL5bxNm3PtmwNfCWq72TS8y8XEXwRP1APe9uMZwonx2CQaxYTvWaLw2Z945D5n",
  "key43": "5XXe3oRcTrjKdXdhtR3HnDaNsR7YGYWoovKeY8J7EAG6GE9Dptkt1aBLZwPMVuUJvZPgdjW1PyafJanNsP83gnXF"
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

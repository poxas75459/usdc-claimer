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
    "124RvFrS4QeMH6cPu7eyWVr5RuZZpbGGEZm7fb6QtvYaJK1k4HDmgASy8scyq4sohaBhLHpxdbdNkoZBUvjrgG4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DffpG1mL2xT8XEyfzP8bEcLGrc31ESt1jJ8fr1hEebCVmcqSXcMjSTV6NFwBYQU2swJCKpiyNtJ9kKaPYG4uMgr",
  "key1": "5BfgBeqehYDk2cub5xdL178FESx5bhbSbVr9tWqPWeXki1R2iW8Y2zeBXrT49xvoFZkR2uN2Ybo8mw7XTUrPi229",
  "key2": "Ai55UBJnAFkYNKDxkYUVdcVF8gBNRHi88R96prRwHF9DX57b1iq6t6nppqRYWp22oA99JfxJNx7vJcZiD431wBv",
  "key3": "37kr6PYaEaDX6KdY4EdJaWWZ9pk7cm5Nn4tTqGMDPdc2jg7aWFfB8jCbBvN312rj8iujYFdFjoWAjRR8pnFAK6KY",
  "key4": "2Ag9CT4VUXjZypgC7aGun8sKE3Arcz5DesXHRwWD1ntxCk1qkKQLG2XTShuLAzHKJdDdijkVdFubjgP5HFQz75K7",
  "key5": "4JF8MrSeQba6yDXonoz68bjYmiv2dd9c8nErFwjroJyULQD5bP2cf6v9mKRgwsFf79aUMBEUVRBS8YEk4394R7Gp",
  "key6": "2LJ7j9P1LTjbobwMb5grU9yuHFqkUsatDr21DirSsd9HucX9pHRLAcvowkCv3AzPZNFMCy76QBkQgRhySoGUx35t",
  "key7": "5zpJLPNbhtC8ZxDQLyPbzae1d1zkr1WpT9iVRzGz3vbVq8zcai2uj5gjycgHjoZowGvDgeYR9rbEaRZTQmicHfb5",
  "key8": "3M14JVoYHbgucewY73YM4mvYjQ2KYXvi5uPwUkXgdJMzV1QxLBQhjyqazXAaJTt6x62LfUPu3ya47hCnXdzUpJdR",
  "key9": "2zS5Q8WxqtLPqh6HNgdrDJ4LJwmSHHCprMhejM67Acnd5YigJuc13LPY3tcox5PYQvPZD48tMJ9e59fErbBrroWX",
  "key10": "3ouT8RurKWxsmb3HXiECyh8WpUXDw6c5KJZtA5nRfARRJyV5sw1FCyTEQ2zCTd9xhd2WTEcwwTb93AQmrWGZ4SzK",
  "key11": "cZyLV4mUyiZDnz5VvXQGVCvwGgrzgqG1oMHDJgYEARYgicrEijapDuAXZTBoFYBqDARPasfY8ixJ5RDYvUQ8FXL",
  "key12": "4rMhQZ3Y75yJY6ZQco2hhVVLnLwXknSr8vTsMzRD8aZSHnfHixe98Eqnug4e1xwRn15AsJagfnj23qoTDc5Q22Lp",
  "key13": "59StJzNqvhGLXQtuHyuFAS5VxyahBscitAwPycP2MoSKkWHvXvKb2z2YP6PwoipGUK9dULWm6Lyc5CeEe1MA5VWm",
  "key14": "3yFFypNbJWYwetY2nZJGwSmJESHSN33jQcFf6yuDM484Mbp24exR9UgboBEGpHgdG2vdArJU5qyyANh1MATYFrEG",
  "key15": "yk8vLSFxhEZx1NBJjceSdyXUTLJiX8xpiDdwp8o4Nd6x5UHjN8gPmExb63L1XU1xTWqpPpSSeJAcsXSgfyAPvgL",
  "key16": "4vUUmbiL3h44a7d52T28gkwg2gQzoJvvDV4rzddoy8UtqMUY78EHbz596pa9v5NccqZQ5riyPY147asZiSrA81yc",
  "key17": "3Rv6xpzPnxxY98jwJjuSazR1Qpi2D9vAHTxKdsqawWAtkvsReuN1FdfZ6cSHDDUSb2Rkn53JK2JeCSiPeLRh6YG6",
  "key18": "4o6D7HgHMVY9Wbxhez9H9gi5UXu1MvAG1TLAsmht25YzDNo7vTyhbq82j47LUQt8ds85x6oHcCKj1mADM56H5vtj",
  "key19": "4nHTchEJL468mCtTv3K8aMEbWk6CzW9fuwRfrvJC9znnDqc2zQiFGMxHjwuQEiS9XiqyjLgd9MZVicdiaJNZpJeU",
  "key20": "634FSsvatdXVU2M62AsBXcV78XXLJCMmuS4gtvGii11aoZHNtFBug8URKmPbQvhNzDfbSLLdYZ3iV2MDSHbhDPzG",
  "key21": "2CJJLdcGdo2ZyiRykzmgnMP274NLBH8j4eNEV2kSGeQdJuAkwTfbxe3xSNMmWto2urzbftAF2sfxMFaDqk4aXJTq",
  "key22": "hxRNB8vQMhWBX5vAsCnxFu2L4MoFyXif3n3fUkmonAAPfAfLTNnLnLXXeS4giigh3jfELnNbycjMSaYx2MgBAZu",
  "key23": "4ddDXdqJLZfWoTPVr8YmxTMpQRntVRZq1TFg3dJFBSFr6n5EF6wuCtVTapvNB6k9aU1dNrYyPYpPDPBEWjkefmhT",
  "key24": "XqHgMeQBYSFWBFwv2HdTTSUxiYrLvqABATgEwdfo8FtZsuYr2Q3puHFYc52i71zk4eg1JoXE9NtmHgDcGan3GJo",
  "key25": "3Se9Jasw33t6KwNQQU7W3YGVv5uNQ8QdJVgQimXFZ77nXbxunFxh1PMMuR6pqMnazY8CxBSfEbYYeVuMDfpMnKX1",
  "key26": "2s2meAyeAcL8UmxSSCvziHRAJNQmxwDSgnyX72bbg4AWnTTPPcxJBGRvidU5xiXdTjV6wxY1nvmFoCWY8i4sazaM",
  "key27": "zGb1o3h8sFE9zxXEE4QA3g4YBoTC3nWwBGAh2LdVr8WkYRiqujisGGrfjbpwZ4fsvuakEBXhTc3LJbJfkHa5rwn",
  "key28": "3niRG4AYTHz9vZvxV4LvPQsA29hyCua2mtAwao8i7cmyPpDYcp6pF3ojq5nRJtgGyDEEToBRd8QTJQJr3fSkC4ew",
  "key29": "3Z6EGbHXZxMzrrD4cg311MX2iFF9c6CPgSoG9pcPHiRWra6FkHQWWGg6pcAkCHcq6yeHxv4xWhMkrabQd8gqqUjC",
  "key30": "EfHDHqXHY8pVbLRqxdJS6d9Jz52qMtfb9fuixRVDvgE4ib2k1L5TBZ4G4ni96LA2PuWMFPp9bHQtniog7PBpLda",
  "key31": "4HDPYwnPQZzDFvWEvGeRrH7hztoD6LGq2PusV7XNnL5mneyVfR1nEJm6GMt86KvCyB3pLbfKQx4FpzWbGaszTJCt",
  "key32": "5uxDrFDqCF5Cjw51iQ19fxwZuKgvQ7dbqNXW5S4vLbUjQLqFqtYqDY3A3CrPRZAwbuwEsDkZbTDvo2q2KdBGDUSS",
  "key33": "5qusaicVX9crhmKiggokGiTeBTd7Ex9TcTCgGx5ccuoeoUizV6NqkxfD8QuprgSPkvFK2krrKAVEGiYgzXun8P9s",
  "key34": "fh7LGjE6naZsnjQVuSf9JAjyPu2wNuNe2LSCwgmfaJmpwV9kuSVtezzio9RFxFatyzgzicgZY2LEhWtJdq719H5",
  "key35": "4WG7Y9C1Xi7uAneH8PmURz4jX42EnvX3bVKw14uteGwh4b4HwrsBkNDinnSo14CvxWcBiCx6w8vxwZ2jZYKaR6GS",
  "key36": "5aAXvi3RARpo6Fo1VsBRuQmqFKxg5dJMVCA3Dm5KPckoNUvDb8XWSobs8KCcMkrAzBAv813fTsr6BhfvrdsUZKjr",
  "key37": "35RdjkxBavtjNmH3C5RMrWfRwmu7o4igaLScaZitcRnbQvJQEGr9ENwb6difZaCBayzwGtgz7ckwoom6eS5Znhcg",
  "key38": "2cdp6h5dmoJKMo82pr3YMGr4VnUqYDFvykKVB8cjkhr1znafpyETvn8k1jf1km7EWjUpDK8WJaQ51ijwoXAiHYHX",
  "key39": "5ppx8UidiCxmfRFUMhQRSjHLzt8zEJnzxEnihaKG7qPAQCeWQv4oc7S6m8zaiCrdx1CZgUeyBwe9wN5CHfWbtrhx",
  "key40": "YpurUBsVv6Lrmk6bJGcKN3115jGqWxWUscmbSCALFHcTtszqfko79M4PTLEe6u5w53sA3kchESqhkhzD1yfUu4A",
  "key41": "XkaDVrs7c1yFdtYxo4fEkQFbSXjZbpiFdjTwCSAgbwEkvefeBcM4nKjpcqbAhu4hcpgCKd92omogf3RAmCT3soB",
  "key42": "28SZTwWnM6efL9Aj4i7ViqpStJjeUaevZRa6sPzsSWjErmAwEeDx4yhX5YeaoaFaxuhiuAxMPhkudPwBFucvbR8F",
  "key43": "4mSoVrsAmcFGdVmy9fiSS9515bUN2rXYuCYF9EL1qsE9KEcVMAzRyLA9fyMDPaRA5HXaW5DWwgsSdwKGKTAEyfhb",
  "key44": "bM8AzkJHv5TPj5SJwNjiGk7rub27Hvsp7Cf78otEeKkYtifHGH5auTCTop7FbKiPv3yK5ERhdfR4VccBQd1PFqR",
  "key45": "5cjg52hCcDtiyBTfULUwb7nYVE4Mk9GL5EhjyxcANPcoqA3upeq32v8ECWXe4enwJyMR8tAnyNH4kCt3pGrVEFS9",
  "key46": "3y5BKQKvFcqKw6d7yHJ45gvnnt3KxYkwW9i2hTjyJ4yRim8iPQFBeyR4qF9rAF5rJsM56hUatAwzPt4JWcsZAqKc"
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

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
    "RPYEJsPY1YoGquWjC85REHM1WcRgYZ6V8G13DfmZJUV2r5uC934aD8uonsnZirgmci8R3rJVVkxmkzp4trMjgVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTHqArcyFzaieTZ3j7FdxKabZ6ueLjaPUN62aTSTg8CQyizfgwM66kPTj3WMhf56AzSPMxixwVhQmsdXk8XiQyB",
  "key1": "4AgVYQbRnvYznTsFfstxVZLgNfLat3oeJ7r3JCe3BFjQGo89XtpPfTBdLgbeprSf1dMwj3qKkivxvGmPEqCoDoQM",
  "key2": "4zy16X3hFrstitSnU4iFR8QizzyP6p1QiNEyqz1RoxFUm6z1DCH4XLWcxBMtbZ8UoJHGoMqwcNfNa6cJr1oRCE8t",
  "key3": "4VjhrXSfLddJjKJGm9fYfRk68XX5rpXTYWFfV7x1BsFfc7FuEGoxtj7zzJzWuTXJ1gAyBERKLrYxWWMgw5dh2dkX",
  "key4": "8eCWV2tDnUASEQHpZuc9XACh2tyBvSFG6hyd9a5EQETVMkb2Sxe7JsE7mQj7XDbT8jyK5q8cRzNEMtXsMKSLYRV",
  "key5": "5sH5HPGAjiiGuz5ua6dXoeXTWzNnHR1TQA9Y89YNkU9buYymHZBXmVrBfT85jSLQawwksjNa8zMyEA4dMZdMJ7s7",
  "key6": "3SaJWfzaQWV2DA9THLTp7KWeGENVsXzZVf2tWkyxmGQtT7Jji2j7vZHBJLefAHMuXtUyLKZs1s5SHBBHt8MYGwRx",
  "key7": "4HTtriM8phQUYZaPq54WsoQsp4aaGkQDiUyVoHnn35HR8vRbaSSKeNoBKKcSSMiUNgov9MhrmUczKczHfHKb32pa",
  "key8": "2HzQ2EDQoG4yf51jVcMh8yzZCtr8JNGvar4dn1VqVwNDYweoAax8jcVQ2PLoR81NereFa73Vx98RkS4Jp4w8gUiK",
  "key9": "3nZxN2hhZsDCUMWzdcV8ehPS4TMz33bXBvH7X2Xj3bdfX3thFeEzipsaiJyBBM9QNJe4dTviys8qLqr3Hphs7vFF",
  "key10": "45BPpdk8WR2xu6RLh6dohEnQ4Fsv2GbwVKc258568cBHsVfQGXb9qH5TLExgzECHTh1jgVWHmADxSFgS2cLpC6rZ",
  "key11": "4U88y5SFTZ8L4XriPQxevFUkQ71ru2HjaR8NQeyRqdFP3m5SnHDw6yB1VsRT3aCLYPoj9FzVKM9W2Z5o8MeccXZt",
  "key12": "5XjCHicrxvVqqvc6ozxQvUGRBB9EqZJqCqjY8dbhfN4ezUeW9Z8UfgCaSXURiJs6ykD8MgzbWbwiAD52cYBQSS6Z",
  "key13": "3W2RVo3Rukb2ipxZ2cu136BXjv1WNVsZDmMjByj8f3CAPhKMLHdZXXZfJFmP3YAXdJAAGZEhP3ytKdMrcJc8xNm2",
  "key14": "4rrBBWjj77qgVCcL4HfR3qfePb6iRwv3wruNAxrRYQewpB72WHp8gc5xc47qg1M8x1xc4m7tNh8iMLNxSye5siwt",
  "key15": "3Z2eHVtFg6aee7fbwMtZhXb6VKXFdjCmxpoH66hPzcZ53oqiCNHeojbs5LCp4v7kskCeg7Zv5MqjWCKNEEvMdBhp",
  "key16": "3jr5ocuqG8BaoMVCkQQTxRZEUH1M38vovhVPqnmae6WzKTWKiAhzM6fjKKvBvHKk5dKbpH2rfTkqSkUS3HA5NE3Z",
  "key17": "3E288Tj9sbHickWLBAaWppxKKecc1unKL7WfKwmmobMJn6zUECtE3MsKConYfRJijabGyzQZ9qC8VEhfukbLvuE2",
  "key18": "PnNn73hd429XaGoFVFrMYsxbBJSmJeC7dyicwTxYHe2NEmpFse3EK34GXkLs9PWvbgPKxbmWpmw9H11PE8eY68w",
  "key19": "4Q5PQpGjhyTLszHsTpsLGJcr4HQMzsvXeezncfW7PH2QcwicPttkFR9QV1HoW7qhtkTEfUW9iu31VUJq1GMbMRvm",
  "key20": "3UMEu9WDNxJkgRwkewKTwvkKkZp9wYn57CLEfijnFXMxJtEi8MxJ1YfN1FrmCv3Ae22NHexfF8N2VPbKagiKWrw3",
  "key21": "5r3uM3Tbhiggd42c26zhPM5af5h3dEWNM9vJ1UY8LemFrfmASe4pAr7Ysr9mbZunrSSf5vSPSH9s48SpkPY6v1Wr",
  "key22": "5o1qdmSyafJhLfzwd9otn6Bpowm1x94s3WRmLS7A9GFfV1WBw2zUvXQ66HdhcS36tqGiAnz2bVdbHsNsmxCSCjpo",
  "key23": "3wiHYa2Fz1SiDWkeHgxSQd2u9sJ2mmsJ5uK7ouSAND6sUYtoaijdq4RXwXYWXeQXEzKNNP1AeeWUqWXTQvV8ptC1",
  "key24": "2tRTvkfvQr5N5BqPPsLd3xjiW4MbpY1HWqzA5qEyUL7oRgJ4TFVP1uCCJvBGeGo3kWJbp5fCuPZupvYPAZzbGEdT",
  "key25": "4p1JPfYLZF69f9Qv6seFV7VL3XHxXD85NGpHhQbt74AW8Kxoq5RatxyT7CfCbH6TNRYhmzumFnxjexyAGqysHHSW",
  "key26": "43px7zjRmBjaCoj4X9mx6p5rRAiurp78hDP1sBsvs5M8UPPb6mL2E7JKo3JS6ApJr5hTtFvNS681r3c8iC7wpa4g",
  "key27": "3pYUJVbLPHiGaJbWiu5dCqtMXQ1A5gThFsaoXhq1tiFmjM7j778YZktd8hcfYMqmX5xPw3XPBFAJgQiTDY4Udc6o",
  "key28": "2icSqhD3NUpCX8YFsu3iFgjyeto4G1UXtfViPZNfmuzJL5iyVzKBNwV4Dg876mtnFFyYqLwCbjtnRZzxWoxdRs2U",
  "key29": "26H2NCLmxbjV946MCNtpj1cgNt6sgWrgBHaRq5RWxTvuCP9YNJoRbRQ2zTFCApivMwk4t8e7JWsDq1tVsxgxox3b",
  "key30": "2JLLHqMA1HVmpKQ7X67SDJ9F6Z78KFiKwQvHCN39aJhfoMYXkXhVT9EfKt2Cw2Hp7oSuLYn8KJmiPzrpW2HN5ahk",
  "key31": "5kJBVaTNK4gQP8EfAgWqXZjzwrLv1tYY6zHzA78BXFs9dRKVTyXhCWUsEsigGGanNMyRwSxu4WedsCTLfSrGar83",
  "key32": "44dPminvJNGkwnWcguEXwmammggYZfidPoH2Ne1Wa2Foeg2XX7gXYjK7tQixZxDVCTDNZocWJoNmft8onURzAbSj",
  "key33": "2716SoPR67hjAoJvgStGnxtefSHGovJBoC9CXX2keU2bqYgTp4m4fhbPiZCmB5JbqyNqGtcUmxwtPAjKihLstpaD",
  "key34": "4BZfSyRurwJPuik99BQ5GGrZ4Nv1zNCPkUPF8NrNhZCHP5V1miKAEwHvsnoZJM2LFW2AUruHLXt6sUbg3PuaoZ51",
  "key35": "2ni7xP6JpWqmjUZ6jFGAypm3jDUFsuRJ3Mz57GXbHz3QfM7FKAh26EL2jbvMTm5NBHg1atmvmhRQ3DXTu5Nys4Jz",
  "key36": "4rAUFwphXr2Z4mvnQBEAWfBKpmbYfexe7kp6CgmDi1Uf6mN784owBY2w55CHNxhYaKRHHgKwWcr8zYLUdLdUWvjt",
  "key37": "5hRZfyK5iL5XUWjYHkWgXsH2egDu21JL8XHUtLJZu4PfN1cS2oTJtynFyqg9pBZmHweaLADwCjFshXL7SVPRRtEy",
  "key38": "5jmBZpDeUnaYVgNHvdmk8weqchN3Vgb56sfsmAkBt36xRFhQZ3WZsuybYkXK6YSsx3mkz72VAdYEKwRKAuohFvx2",
  "key39": "5fQdjZWUaKGZhwGpDy59BVHYLw4LxMKoQunUschfFcZZKgjqPvCjQ9f69yyyjRDNLaoZDdxJxhtXPx9RbCwJYGJK",
  "key40": "5VFHXUmKLy8MVoRntUX9mKQeUctkTUcVCu4BMzuCeKoNN1sa4NXR68HArjPgQEeyPjPqkys4EmdmZaFZwudzQsJ4",
  "key41": "5hHVLeZUQ4dXTc9aVM8vpdbKdQPMyspBv1TCUQfVLepA4VGTTGBkdp69gMM1aMrKnHVrGr7DqKbgjJnnL4w2owRr",
  "key42": "4g4mLn3yeyc9GuP93hQ6Sbo35uZXgLE9tMP6wTLcPh4kMt3Zggp7EwkvYN7vpnMb5UAJEo5K5NupCc4ffw8DTocd",
  "key43": "3GWCYHqCaN9P33aDKjZwWqhQ4NCJf6DLfm7kp3BRJbo96TmK8YdQkX7FxHVKL81WRnwv2s1vih41D6f1uYLrJ2ge",
  "key44": "5fpSCwg4uu4dx2t3cCu9caomnqAMqtaFVHrXMiCLnBH9odE95ruoczNwaYsYffX53bLUUq1yNEfQ2LucAW8RWr12",
  "key45": "5ozF6w5c8F7iC3QU8yem9WYmRZcApKfdF6RusUSAVsNRyvn8FyAg5F8xPCQwEK8G2G75gGEhMGQ2NefMCnMEGbvc",
  "key46": "46ug13Yy4WxUUnVyJaHEwPnngu7wKWrzGfo4uwsk6x8v5AoWquNjQwXVBmRmy2k1qriBp2wWSSxBi8magAThNwet",
  "key47": "X6SKp1T7FjVyZ1jHj5x82GxUmvXvyeLuAGVdP52uFWgcwZXZQjCXT3Qb6yiEzZ7SK1LbhUJDnyEA5JNv3y1pNMg"
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

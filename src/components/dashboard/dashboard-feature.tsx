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
    "33stABXxanoGVms8efW5k9ji4zTBHV4fqLKfBNCBxUP862AbuC2dakpWxGaRHNPs6xhfKkQRHFRfckEBBNPAcGbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24AsPXcCToUpeMRuLE3RisbU7k5egLhtHtMEZgckUHL15XXYCXtj4nUodZnytzR8PBmsiXF9HEUT77dX4w49vbWy",
  "key1": "5Z7LNv59kTeWWggxHCkTE6m5EBq193ZM9Vscpif8URup3pcQeTVtTebYwW5XmBMUzFSJEjDHCEAxUU72QjrFcjA3",
  "key2": "GNzRRkLpy2RangqZ9yT6NcXNHh9dLwmXVuheHQc21hgGzLXsRtddTLxSLsMwCkvXY7inFK1Y6vj7xtPJJDw76kQ",
  "key3": "2Z2eaVETiiyRmxhU5HJ4sK5tMCCkQoLao4BgFxqT1RqiHKDDveieRD8NZV1HsVc4J5p2VxAPrxkVZ5CSYo2YGbJS",
  "key4": "3ZfVvFR6Maiztv2hSmVRPGeQ1uWhHLZEJyoBf5c2qJfzkpRFScCii4K7ZEx67E1Hq6WT9o8HwZyYTBDN6Mb6UKai",
  "key5": "eij1CXWbqTzdDpkhCdXgzTN3MZaSRTY6YXEsnEThNmpzYhx1SbtbnEn83BCR3g8DgUZX4Znq8nq22XmVH4SWNx7",
  "key6": "4NaTujH11aZhiLmGpyxXeNC5y6b35meabx2jNjTLs2iwT2ft8JTmHUvGCfnwvqvy5QJGhBEK2reR17a8zm7i8Wmd",
  "key7": "5DvrBjPecg7tswiLdBG6goFm1aeXy8fP8VVKSn7RNTwTvoJAjj35BCtb2UYjXPRh2rZoGvGnVopg3QSisMoKXQRf",
  "key8": "3veLsoyAF1D3bhw2sZgXDv5JLikWXJ14wKdVXHAWRAu4DLrDPPt6i5NVLgLs583LE5gJBHjpaYe8MZANtMEjMT9P",
  "key9": "61FXE7SQic3bMoxgMbEqE6kwc7AQfNT7BZXxYzPGzLVUD4AtCUKkSUaa71KgkuoxhFPHxsDENaw666jfCGcRwuUV",
  "key10": "3wyCUdnxfu83o8fRXyLAGK1PPFPMcs8zejKLj8aafdqMoVsMb3GvPexeeNjz9YxsgjaCbWvq8VfhhinD4b4uYdwM",
  "key11": "5cp5a8JrwX1NDmhUTLwwQ1a3LnLde51mVXiXMqQVcFnNubdmbei3RyK7MczjEqQtZWuLg7qJMJoVQfGaXVPK1F93",
  "key12": "5hweK8C7oeJWHxCKFfBc4JBCSS2eyhMUtX5Vx88tioZyZ6f84hJKr52DwS5hZxwDhKwsoWnaAedJf2oGcDWckESv",
  "key13": "2s9EvXts8mmwJwythdsetHSHZK92e68feqUJAganri8wbJAeekwFVcBE51vzWw5XSKubDcNA7UGEZ9V4RDLZV41a",
  "key14": "5erYxLmdFrnGNUVNp7BAzeWBiLzxLHnzbv6ZyR2xLzAkKDNTTkFqpjbtb9jot2SgmgnnrBQRCmUVnBiTe87u67oh",
  "key15": "3SBA2M82dhhcD35C17SFaPi4mTnr8epcxCSPpCVtfZf1mM1Seap2SggWnthJsgB1qB3ZXNGSBykiR45tmfNSitMb",
  "key16": "4LB5rsa1CututQRV1DU67K8Ky3qRXbCophRdvdqSADxyF12NzNQ43gPgNMMzqN7Xz1wLXWdN3wqCG8zENqELwTMR",
  "key17": "4Z7BTgWrDzwAkiiFZXc1XNgNdsviG5mKhv1stS1VELo89YFM1Ex3BXSRTtSkMAYo5kLvdCgb1VRxWyn6z9giZpcK",
  "key18": "3AzyqEho7dBisP78GmEwVfm4o5spmYt4duDZBAm1X3UR64usdfwP8WLmQpdnxEALTvdBazWFbCNzVnayJJXV28Kb",
  "key19": "gfbnU3XoSg7a36nvVyAX1x4xUh8siQ93aWQVPkhYW5oGizMorGokyziWmFcejU7brwh5ioQYT3XGoXeeMKFcnRf",
  "key20": "2fBnqyhGwdxmNZzx2tViFz7MJBAPsBAihUdKFuSrvt9UPuHpFVJoYq2MR6vkCZKKrtgjR8j4FRLqa8krLTQEYAnN",
  "key21": "5qwpj5EncMAJYPr7E5ZfUppXYtgRJ4eXo1UTqvHMbyTaX5xCkrmWTvWSUM9h84vuRNrqALGrJJkFZdc6Cqn1D8jr",
  "key22": "r5hBTa3kwwhkzQxgMcgeiJm2P6z4U41JH5QQqEqRm9ysHvV6J7UvrKQKScA3Qaoanfg4hzUsCtCJVQ5KJ5ygPqP",
  "key23": "5jHfPGH1kFdYDEvxCKGm34uh8UB7vswriiDz5gTeAivnc9FgQnUrrGftw5BZyP5HdsbAw3Y6zTkvdhYLTGTiFHQs",
  "key24": "FDeoW3uVyiDtnqu8YFRsMAMeiGVjP2s6Rv2NigeoANHLLcCPyV8SJLVbBbJzPn7qLoKmj6JjAquMmEbZSv27Fr2",
  "key25": "5rqZcZNADBm7ftWLqc8WxmSTTd7kijWRqdwBBiNTJjMthGh1gTfFzXb5GccpimU3tYchaF5TJDfnbGwug9Y2Yaf1",
  "key26": "5WTyRarGFwXC6BKPohQbfowcvZSRKT3ZTGBuV9k5F7rqVXXPiDcVdNuEt8eW9r6dMdnabJjyX3JMMpHnV7q7eKJY",
  "key27": "636kxND46NTfff8RN9vEEt1ts42rkfGddf4krNEGt7XqyipSMdUBcFkAhDkm65wHRgb7fTTnTmBVBZNAwySyFshy",
  "key28": "2akwvPVPvn86kbR4spzb6yXsawhZ5UBKKebDb7ALzrhoEAX7JpXb4EUkGmDeVP46s6rMFevxDTFMLMVTNhTjpboP",
  "key29": "eyfdKY4gTq4gqdbobnwH6dKa2EBsPGky6rzDaCNyHMVnhjqUEzjyjrELQxCJyDR2NwiCVDP2mxgS2HCZcjUw88o",
  "key30": "4R2vcXEF8NfuWEo6Jn6NbEYQX6WDExc6AMKqdYMW5nWuj2QcFvXBaLgd97kmLj2ZuPaBkMx3EyqX6DHpvuranZco",
  "key31": "2zpq1SVuTRdVWSJumdLe1qf2fAXknPHmchLiSRnCEMKahs6pE8JJpRajE6BswH3MmkxMHe6h1wWG18r49M2qhUVy",
  "key32": "euVQJubuWdLk8L5DmjKqSNLbFFqStrXnKaeFPvufg9bdsUBk7E53Y57HnotMbXE3WNAvgFZkZNss5ncGipvRYCy",
  "key33": "5vU8W6qCuTc3unoUd4DSdJF152RVZxGpT9AYveqnzs5phHbGDdoHQ5AD5d4SAx8dyKXXNKKnuBfa7X7YT2GGwpxJ",
  "key34": "sqGvBZ87mQuLAVH2c9ZJ6HuAEWgJZ78JBb9q3SuLY8wwWyX33ALP7FyjFkHukKaR83KbMEjt3K2B55pvv8HoWTP",
  "key35": "5H3F7cYbbvn8Z6zotJuE9jmcobVQw1QhdssCTWaLPn5dDzc4wiNE1C4L1CX3YUexxfYcumZJeg5f9Gmx6gjBD6MG",
  "key36": "5kJBdSSKnmgYS96NhcdRmRz78Q8Miq7ikyHYz8GwPTNwSGEgiZwDqif44u9CtZ8AyxwGJwcrnfUk2Sq2nYWjfPZm",
  "key37": "2copqniSbfSyNUryaWhRWrjpz1AmaT72VkvmsaNuH5s3o4YHYB7DgjcAMbkk63tfVcVJ9uUtAFgFezr3EBVUQWH9",
  "key38": "46oE51xq4Tpee5bQc2ruybj94tYgTfs2uCyALFfBMrtzjm77UP5gRqZhC8ZpK2AUSiyHDcaVoJx18wprehFXAFCb"
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

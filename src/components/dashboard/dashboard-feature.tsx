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
    "4YBtegAB3tCumTQSLywhNSQ1P8wJxPd7FxAjQsknx7Vqfi6iNw6GbA2ESK7ygSPQ3Eqk93DLKwk8dEb3ovZjbufY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r5Cm7q8bvRsovaynNoMzpcG64b9pXwbyfmuDhrSYMniskFsdxvwdVBcDGHMgtuXS4ZRWq1k72b9pz8PSYaWbrBi",
  "key1": "379ccFcCUMDXiToi8hQxYHSgqWEUtNDXsWR8aTmC4hWiM92WxqTV3DBjob4ysHwoMcsesy8pPRBEkP9xnkBoSq6t",
  "key2": "4ytZgs5HoMVSGQtDSAnLALUK5jx7qR87PpXdB2kyxVcsxXp5oBJkZ2TqgWQTHLLE2e4XRaXMM9MbVQHedtBPxcDa",
  "key3": "448DLpsucXcM315HSWWuLBrXzPkvdMJXwz9r6cp4wKdwHULFYZm96SZFNNy4hYwhhusfw2TkgPJnPVQge6xWDy2h",
  "key4": "3BcsY8p9HGGpJBV633jZDt13bz2NfNT9rRxPxLgi9UcJyCCqV4GsNbTh4qJNHjhBCnwAcK4E7eq4VxahXHRgv5Pw",
  "key5": "2RZHnoHiqr3Lkax5ceCmX3KiSapAquKEgV9gsvukxYg6xMDinCnxNfnsjuoEjS5jnw7fcXuUL2z4r2pJoPzZJmt1",
  "key6": "4STDKWQ4h5RowbRNc6UvvY2d857iQpoiY1vFrrCd675y7CDsPFFQPjSu3eEF5RtAGNmB7aWeosKNwto2GbAAr6Qa",
  "key7": "3AoJhKJ7znYb5DXiSE5KPWfSbg2qWnPYSfr9jPccJSfAHBKQw28oUst6vTTVf9UYSnEdVXMsyokiVTizkd4wmkEd",
  "key8": "4ApKv1Dm7eTemPJR7GbAQvKFDZmh3SBRbYH7FSQ7BCJhzBNFngMxjHBr36BrQUhyc6w799Ywt9pNzh8SWJEyWgdW",
  "key9": "jiu4yFsdhb2VZa7tGD9yVAB5KAXTYfMULeZoSBQnNrKP2F83t6n6BCAvtEW2sj6TancE4nd8ABWijpXdKwArMS7",
  "key10": "3dS3cRVYhJvzgFSeQAXv7WvegCETn14wn2gtgjQV5jZminvqr6nqHyBmbgvZho4o5NHyr5XFPsP6fHP3MaVrdqxV",
  "key11": "36AgJTQVXYBYyrYjmjZdGvHJ2d5E57DtuZoGmv7xAjLmfEh4GGosS2AvNxBWKfBLZbaJTAN6hRfhQ7qLDdXu6fpS",
  "key12": "3E8gYr2BhcWGf4sPZf9qQ6UQZhP95zKj4gxyQdWeNQcrAGAzTuzEz4wPCzkZFiQpmu4jCQpb4hvmX6yVcvy6akd8",
  "key13": "585RHu5pyty7mLsqgzTsff99noSs7Up2JV8uZiaFwKobU5vNdzk8XKBaLwy3mWgcFjr9sUqKzHnhVwGWcn7LCwQ7",
  "key14": "3ckvvnqYhDRjiy5bt2CT5xqsobygQkfoACvTC3GoEmRKpv7Ps9iKECj829v3oa4TQVEyQVPGr2qFw4NvorTvf41G",
  "key15": "4mbZxQNzur8vj5WJ7y8df2HaYaubVMHCLwYbYNQEmsRaAarRAWRds4nxYkvow2XafQp6PtCRgPoJ8yAr499M3LyZ",
  "key16": "3VoqDFbq4EWNCUeZ1dBBrocQAPGSPGPLriyonaNCi2aYWuZrGxmyPf2h2uZR4PbjhPaNHzsQSdibi3Cf6nfZkxmc",
  "key17": "5cpSAMQoTy62Hr3JhinAZa2HSA7n8Us8E5FBgwVWGsoCxLGNywUqkiHcfph7cdAKrrUVTLpXfUyhXqLW75rRMk3v",
  "key18": "2aDKCF6PUD7SWVR9Eay6b2JLFp4caRR231A2vJ7JYFojP36rCqUZgzRB7ETbxagTNHHDoo8mfuoKQ4CYQbj8QDLN",
  "key19": "5YTqXcbcYxH3CRYdM8avFPNePWJiFZQxoGJ6s7M9or9ZF8PD1DRMrm4hXaDGq4UiNxoufXG7UdgYe6WKX5hEoaWT",
  "key20": "3ETN9LDAgVWW2gZPJ64jVw7sL3QYPPkBF5zUJibdArfoWoJt9AA24DQ9sxABwbuEyqrcaNKzqLQrK9erHF3U1Dhc",
  "key21": "5fnjYWfFVX8prZ5Q3ogNVtLLHUMpXPgUMkxQKdBXxYcdTn17NVgKp7ndFsCbY5boqvoNEmgcgEh2Vo6UKExMgYjX",
  "key22": "2Pn5enJPcTzbfuimUsEyNWZvqbNVpQ3edbnWBfJao8eEAhsFWfpT9TmLRspNh6frYXEebni92iHKpqaZ8iK2zwoG",
  "key23": "MgofL32sAHDEGbweocKghYUCPD8RtNp46ebRzU3SfXNkjEGHyx6XLVQHjuCV1iDkbYhFGvvHWfhszzfpVYQCqjR",
  "key24": "31gHWu9c94fZMybY6j33ZLWpj4nMR8mw9ZJHjnEBmrhiWuMGSGVzn9E9U9HAVMS3ZGqdiKPhP5ws5feswZZDBm1G",
  "key25": "4GdTn4G5qK7Zro1Xy7E85ZM28sYnTETozxdGDSosJbYkoErgzUXZrrBwseH754gBA8ryhtxkDQk2WxMvnNeQDUTK",
  "key26": "FfoiZyJKoAf8WuvweYfPNqxGqR3rEssqVLw2KXCUpTweD5G3yeV7xFuF7Sjx8i682bXpn29trpEm6b8qaWSRde9",
  "key27": "3zQP8FYBvvRyqdCECSsGkWZCj8CdagjxME34VPz4Fu5eBWe9Md3Zv39Wtwoti7ZAz4gy7w47ebj3uKjmWuunCxLb",
  "key28": "3SKV65KmYpQgVvs2CGDQGooujgfct79FMitiDngSyZ13jhJoD5sdXaqjSkVqf844GRZPxT8JYf72kuk55NeywbkF",
  "key29": "3xcRJZcXaqQYhVhNCptXoom2NLtg29TcZKcVeaDUhPPdxoDnhuZfdsDEJZ4jeYGPwEHariMZDEXtp4uxc3VSxhSK",
  "key30": "4f4XXTQJXRetqooUkGECiAi3LJC68BHZcZXVkn9Rtd9ocQaJBeMkc1A5itbPETTaLiHAH2ktXiRHeN1mTevWLzpX",
  "key31": "3jQXgj6KcSxmcfvzfLEQntprHkCfuyTZSsipc1kfnAKawpNZRVj1Y4SvXdXZ4fWV7kmzgT3N1MDoKQVeHJDQCfXX",
  "key32": "5iKJozKJoxveCQHBDrV2tx9u9d2cwzZjVBpaX4gFX5a5cSoPS6xzP4P65GFEjfU22fDBxn8YAacwADqmNhYcDdoq",
  "key33": "5wLzKhSzSpMbTPWcxJxaZ3qxVGda58SLZpCu7hDHYv1q6NM5abNjceAUemQazW6BBm4ApkSQYSV4HA22NTRDW7Xt",
  "key34": "Yermmx5DiY5phjdQwfG4HwGAdyZUFmsCHqgkTQ6NWxZEscHdNHXjWD8gTHA9v6Ppf9UmNhimh1XjEhPRgJtZHEP",
  "key35": "Pm8n8kFVuwWPP23VPRS61VQRTjMwKVjxgFWJEoj1ZiN6btBe8ooDUV8qsHASG8XhgbYnvNJLjvrV9M8h3vMuhqM",
  "key36": "4fkZiaJ7ZKN4YA6y17CB21hAf58ybmBuabJTLPzND1G9i8XfUZ6phpP1gB5Mpz83fymXao9pW7dMhBQCX9o3d9hz",
  "key37": "2J1WiZoSHztkasWknJYtA6wCjL4qXjVjMMQenmEFpeDkzUC8vh9WE2CyToF6s1TaGpQyA7eBDb8YyS63tkAfm57g",
  "key38": "5h51SWCmen3Ah7nVZd7kDdpcQqn47oBQinLRUPWS4Bp5ogZ71quyWoNyccsySZw5wP3T2AxoCHtM67fHrc2dUXMq"
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

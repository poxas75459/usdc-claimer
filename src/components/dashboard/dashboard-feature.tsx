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
    "348962PbzrUKutXHuVBS5GdiYPDM4jnqxs3b7mv6GjvGF5dhK61rQo6xBWQtXi3eceJhtN2A4qEVhoeQdLBNwm7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zd7ifG215NiaNAeqBrcu88wZ5J8aU9gTzx6ZosnTMH4xnWirihf8WjSuVKD4AFuZo5urENFDUX3Ma5d8aVABsEB",
  "key1": "66foDrVM5pcNxAeNxxYqmLqry4TNLeyLrHreybHKqfrdcb4WZtVddjRc14EgXvxBypcS3si4qTFMLbCBF2V7DGHY",
  "key2": "yCwsYjrufLPcY52gcDDAAWH7yDrFDwawXHrU7bD3TaEowCSUybGw36zjWnmE7xTG1RACqJEechxNcnaqUvTHc4z",
  "key3": "3EVtJYwh3CzLfXdSEihDyaixMGWATzt7ReEsGfT8aSHHZ6W9ak7BXSWipcHReK3m7admkxnCDFzhaiqFhjhqB87W",
  "key4": "2ACveFWZcNaQrqhDkKCNKQaJrvez4UMLAWo28EhYE7BUgHz7gufFuP21EiDtrmnyZsCgukMhgmy3psKaDxVSPiLC",
  "key5": "3juTRt7aem3b9demCXfXhb8E1kfdPNcjKoKCNWuQ4BGnpktwaU8Tem9eLKDkfcvZY12NtWFy9vJSs58tiXh1CHw6",
  "key6": "6znFtoqVeQk5jJYUL3yHekgSCpe4ks9FnVNDxsPJcvuPBTdQNu83Z4otuJ9W2Lyhpk3iwo6GPx2FkyRi8aeeRXW",
  "key7": "4x4hEt6TFnQgUWkjjfseWEr13iKTzMgfou3v5ksXhD1YSCaeyb9jTCDhVNjbmDLxiHm9a6qHzuJZEhVCZUCgdmaG",
  "key8": "2g49rYjTBpoPDDXfaNuENLrKPfQGreHgXZhZmutYXvu1mJHjJGWY3vd2EwBFzQRWEzppGaAh8UYtmHx4eTb2ssmJ",
  "key9": "2AkhrMFLGRJZdK6uYu7r7ew8qGsz175jFFkRi1iP9AJQLsDWxSQSD6DAVo64HNGj2q6ZXivTtyz6j3pj1GZGZqfa",
  "key10": "3V3rYACyZvVvB2sbWqiSdxWwKZkmvRcgcApcCcw4Wky5mhieoZZgok7KiNtwByD3Sk6iBgPikMzXDi8PuHkMWS5L",
  "key11": "3cUfNwc2epJDuudU93kHPTcKXaAigw1s8cLihZY4MR4xRnKskXA3EGT3pv9z45r2oGwZeNAAdER6bBKzo1N2t4zB",
  "key12": "256KUvgTGZSUF7avF2tS4DTZk6H6DgNuKQy4G3zwWXqNnGs64sYxpMFy6KvZyuNNEtyhr27fhqX6phg5V5uq5rbx",
  "key13": "2By44PJpeoYphcxWEqKcf7efp6txwy6F77PEgw1jG3frDBpynwojf8XwH5CCFukcE16C2WXzAiL269H642i16B1y",
  "key14": "64UDqgueK8GmQmZqoqeXMbrTT8zDXQwZGj96Fx2QN8rbbsj58dpxsfdgRebsPF8q9CHdD9mGAu72LZ5JwEZnAm6L",
  "key15": "3QxpZvV8YDMaLyzzBvQxxihZpx6Yc9TmqZcUgLnMgzpzfPoAVZMLzicoES85NPWPfv4UpHj1PZMmQKbp2GMdcvuE",
  "key16": "3TETFfg25tJ8uRb7G7mxPPhiMe561Lt6FhWx7gqrx3Bsa3UAZhnjX7YrX2othPaFsci4JfuSkud7CpJk8vxu5sWk",
  "key17": "SHJFf95RgktXuaekdoNwBo42ajiGuDsGHSN5ChYP3BzndauCewc4ebHPKz4AdczMJTa9FqKywGxzPuZMxEiXhrj",
  "key18": "4j7bc7YF6tf8JHNAzWks8shBpHpxeDuPsVezMKy9XLUf1NDMSa5LRvqDFfiTkSuZcCYK1UPmxM4PpVRrve6bKXRk",
  "key19": "5EirKExf172RAxFifSMrHtde9DpDWNFq9AbSVgmghpXXsEfAbm5e1V9mJmHth8VLLFD22LpTjNXTj8pWxjXwd3rv",
  "key20": "5GkPdSA8jxDAXq8ir3bL9mWeL8Chvnv4vF8WRxXixoGU2qZNfhy5EXD8Wi1nhzi9JhGp4RpVrKjP1iRKauiiNA9F",
  "key21": "2yXz7dvzvkwn4jv39x5XnHSjhy194T9VZJvF8SYv7G2VT4iVmJJnDHwHq5gHzgcCGqiGVAanvL5ccUDkSqt8jQAc",
  "key22": "42RgxiVFV6MUXRRpyES8b7PdsMdJShE9GCR5789VzXaea7VYnsBfGGhnn4MvVpK1bMvYBWCm9bEvpYsSqk8jPawQ",
  "key23": "5XFcf7c54VUHpo1N7FPZbUyQGjyPwRMxggVFybNEwJGGPhr2hV3w2gowgwEjj3aoBfiuZ1zJwFTT8K7SrNGNqXZ6",
  "key24": "3kXUMgSQN6r6n5LTMtVYcYN5UCqMb2TqP1qVyaf1z4wyFoQNwwf1sNXiWZBzpj2u7QL2E7krr3Sv57DYAMT58PFq",
  "key25": "5AWGYTYbQJwTX1JBAwJnT4jSQRDbf6o8H6fQLVDjn5RhSjkWrb6h9zLuhJMzrX5ZVhy9pvov5jfcPcdwHiNh4g3x",
  "key26": "iSx1mZpeVz2KkrgjGxiRmtdYrCDBM1JhgCSx3GebVq9Y2XPdVrfbH2NuGVPQzrHbXizRVQG8s1iJSKpvxpjSrrX",
  "key27": "35Q5GZXtUyo57DtFLwb43jGYApEQTou9e9e2QTXBh3nKntmX2H2qjC8VFTqUZEzSsopQ98E56cKZcKERyHpFibhZ",
  "key28": "2kSxzxWWDGUMm1PtktYPaeYNTj4NSUMGgcktbWa6YaK7WjaYEp2BYpdRf4py5HoKS35qiLQVJoxQpkLNEf6rYhMs",
  "key29": "2C3NJzjjzFVJWfe3BXf64KMmMKiBVEtC4nvv73empyiaUYY2jXDU3YgAYQ3Xqj3BqHiwpZbBEPpECA7nF8rz5ikP",
  "key30": "yFdcXjpAosLWZEyR2WorX8w3wqt1ks8BuFeUEy47aiG5q6hibzDi9CseheDoQcH133LeFxnDeFJ9EDkxBvGYH8e",
  "key31": "2MRMtsPgh4p1DHysK7XqTTzexL1i4VBekoP2zn64SmCVuio11DG2MBkX76UYXGobuU61xNgKctkzfNsS3orfCskv",
  "key32": "TqQ36TNRMDc3HboNpAfcwGRzNNj95h325fvwCeEB7Soxd1g7VXqGmbjuZJ8d8GVF4VruzBiwE5U2xhq71Zs1RL5",
  "key33": "2ZMXJAr9LVPhFsbLNdqaJJLG7YvFSNrHCTM2eYww17RJoY1o5Azy2DUBA1vzYWUYD4wT27DvSQcJFhURoMuD2ArP",
  "key34": "5KCn67tdvBXFJ5d22Cs9b91gNWuyLe4bay6LN9bjKrHR5UpWmU7jPtQyRF2EMJcu1v1RqWzvsZVG7m8yqRZRMtUp",
  "key35": "2tDkEQ3zouUDH5WhwhUa6bvBqE2M1mj4nTWEXBzQy2zYJfKE6z2NbnpLVFFuNDBQvEo7RjztxjiRbMUmG8X1znRo",
  "key36": "3JCnbc4xpg5TcRCD7n84NgmVQc1UK6tCpm9PsqcpTWcbqR7MxHK8gfaZJ4KF9NXuFYpjuZJws2bdgVXRhrgyjR5S"
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

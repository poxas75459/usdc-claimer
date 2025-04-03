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
    "3eHttczZRcWCCAcKuep2hufowJCpj3ocyxaa2gziEgcwfSCSKMus4Y1R6xBea6TimTjjqCixPdT3bgmLtiwuotmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBVdLAnDfJaDHzvFVZ9bKSzsDDagfYSvswUo5en7WiAwmX37vZ6MUnBLoBbwxX2vtZWWrDtCeE1P5Aed57Zmpbx",
  "key1": "3mZrK8v64nF9BBfMAtbH3UffMCtp5AKcEwtHT63rYT6Vn1gnEyGToGjWS4EgW7Ukh7TTRE3yePb4R47aL92Tq1Gb",
  "key2": "5MKD4QBiVZ6EgRrrn4xsuciNxhPGqZNoCskisMQhEyvNTDLzHXMMWQGo8F9BsC3Thmb7MSaYeKo5CZP7zEQBD5DY",
  "key3": "2eEMGVFXGaNegkeqEqhXJZmwBZsrmK1eVnMGi9vm38Qmwhjk87uquqsg1un2q2d9xevQcCj5iPEc2kU2FJKAjFB8",
  "key4": "ZGryMQTUwe7S5q76AvPEcA8E1nASd666WZHcHFMffnF2DZ6s5qmBD29XT9xi8puDYc5HtwZDbRWEmy45awwsooA",
  "key5": "3Uc7FushzJ4A2RUUv42dwfyvwxTiCUDQo3r9hpUp5WPPFpHwevXWAorgN1th4zdZhwEuSQ5zbBkTAejA6kje4xZh",
  "key6": "bHgLbLqmPp27Z2cVrpPHByr929nxtYV638tyTVHENmDZjeBFJxzpwAhaiJu6fgkNiz8HbNtXuU93udAP1kpx4Kc",
  "key7": "HW6mP861taCibR9pFnG7dHPJATG1WjwQX9w5oVJnyy1ytksqCov6JPx1QP4TAbYVLevB9peWJWejAUbVDK7oKQR",
  "key8": "59NiuoFtPRVW5ibif63TMZ2xwEtTmVGqtnG4vjpPDNiicr8tAi7TEkiqY7DZpZwcGS9B37fEkkM4tFBWLn5Y6ci1",
  "key9": "2PEmn759zmcj9R5DcmHpkvUUtTqcnAx7u15JsSr52ENimCzNDh2dDB1PxiiNtZEyzDeMWX5dFzBAGxTS5LescMV7",
  "key10": "5ikWak3jayPnrh3U9Wc8M3FH56TrLxELNC3CBrw3w2rgp9sHvNjHLhiQnmm2T5kURkdGkuvueMxJkLgRwZs3FHxv",
  "key11": "4FSDmrFm93qHhWRJyE7Y1rPhYQbWRZWj9PQNJuSyFmP9WR5fWyBKxgrwDK6EyqQP5fQ69RbMwtcAvk62QUZ1hhPn",
  "key12": "2DVcks74VehFzezQnh5ouGiyfABC8CukmBC8CaAJFvcgfoe8V8iETTk6jud3BFgS1gfSoHX3eHzFp47dpRfsE87X",
  "key13": "4XTTSp2p52foxkp9xcdf83DNkJTimBH91wYd8beBS3ydXWCuJJsisrM1xSi9Gz2ngmGrV8NditLtZLuMfd5W6DN7",
  "key14": "5xknq9xRYh6SMKGJWspLXzURBHtM2tGDWRBcfX24FBEteq9M3MJsH822nkgcEU4dU9J3ZPRbuNrfXLVLqriAUvMN",
  "key15": "3zp88rbeervXJxc7V16M725HF6dUXwAr5Dv8zHiVL3L7qXf7VUTWsoumvgxMtwRGPGyixRtpsPbHJWpccvsKX4iM",
  "key16": "CSWucxuJ7xwavFFvmfawrkwjRhqCjMhJgdzU9w4aAc35geMJYu4WaZFtvs7hezA8L7iQFKePxbecWbqDqVxyZwQ",
  "key17": "5EREPm7JdcCejUmk89cLuJzSgGaVgxGZwBcoSmnHj2N8qkpw719W3NqDfpoTAzfbaSCx7vNvfJHoXieRdwKr5ohs",
  "key18": "4ipdrTVv7jrHyWeGJn4Btp5P4eMQAWPDVpGg7WnG9pE4oGCUwyFjqubCXXKfgooUdC8gUzGUjWK1EJxHg1DxkbzB",
  "key19": "29qRbU6wHA3VWuHC5RaJ4HBzy2gnPDDgPx7w2VBEN6ytbX7EdtvnjAXYFSLBk51JRCwctYi5dKUUhGubgP296heb",
  "key20": "YcoojpGG8RsqHT5fg8xUeffMxnDvvvgLhfY5fDUeyYHNeqX7ofZ8BkNpraHW7JU4TEn3kyykNqiCdPe4AHVez22",
  "key21": "492FiNQQpZ9NEMZkuukLkg2gdqHbLMKtFygNzeRDPHsu6qB3iGi5fXf99THsJvH84N2mAKhVF94Jxfp519VDo8fj",
  "key22": "65mUyyLP46pZoXJW5ZNUJePaxQD5XbLyLYcL5JELpXGqTXP3BaMeGUVdpz8mUzuoxcUR9RvQc7XvGNZB2m353MyL",
  "key23": "3iAn7q42NJAgDdoFmc5SMBbTWktZRQcPNgeRHeUFmMnjR95hauPK5YPrunX54P2xnhod5rbJGKV5TvjXfnqbkeqy",
  "key24": "5t2c61gSKUMDPGPuPtoNgSTmwJTNZhQBDDaKSEe2r3zGUpCW8kQf3ci2cmwXwtEsh6f4Wp6T6Kpjxkpu5FeHjZCh",
  "key25": "5cqadbNtUFB9KNaAorv2TqZypb2G4BW69Hf8Kfj7xqgqbfpA3bZMEjKLP46fNWv4HcP12TkGPPVkvR9VUw8wqr7B",
  "key26": "xVm5zByW3P96WaS8KbPRUxaYBABc6QtNSKQiV7JcWGCY1yBLGpa5xWqJwedPi7Q8SdMu2Dis9wXwvb5Ae7S9fQV",
  "key27": "33aHtjmhyQMNAwjZ7NfY55fB21yCdH4KHCqk4q7G4hbVz4tnbPkJLRUJJ1VE73YSeQWwZH9VTC6hNNspMqUWnvCZ",
  "key28": "2dgJ51ysbps42bjTUJwdTK61QXkeDtZmNU9dZHw95SrNDgZdfo4WAaBA4P19kK58QryHPeQRnkxqexYoLFRNNW1F",
  "key29": "359Z8evaPNZA9rYUHzGqJKi5XV1qvsAfAmHKt3bBWhtiBj6QNYqjLhnDgikzsjLydyniuLByDVcrKi9ehrwJ3uqA",
  "key30": "4GcRbpTi8Wb3azn8eFojw4QmeXpUqmBFvGJXU8jgtuFEMM5sV6tiCcydvqf7jX1RAhf8sjm1r5MVAAwrS54e9gvM",
  "key31": "4NfJjoHPq3M9p2u2dsMxL4Z9emq2tU7fm7BBVhL6EsWBfvETc7DVytWUttFU9CXLiQiyAykLiRwW9oCqGFh3JKLK",
  "key32": "2531YCPCnicpmYznGCJo3gbdUgS8ivcNBGSoDM49dZbPNXt1ofDD5B9oSN5ACHRHqyJbfETWz8vNurq2twdUkKn7",
  "key33": "CVi1NWhgEnwArEwFkTA6faRm2hXPThKVPfTpVwkGarXrk8f2CJ79snyH3zwiR8bofdoPiVjuaYxUBVZvT6XNZYk",
  "key34": "2zdRLLBWHescdhpw9fhnYUWuizfZRAiyGW7dCwwP5cwHzvXtnt6SZCLh7F1gA5ehhHuh3HwuswnDwckjtn334hbe",
  "key35": "2eA48wKjwD3ncq9jVLALBj5h2bZAGEYVfdPDq6zuqAGR21GJ3UHvJb83fnfZDaUyLtM6jZGWmQru5gXVuY7SkS4L",
  "key36": "5bPx51rK4HKaa4cErCmaM6Q12aD4tAkyLMs1rCtxM7oLNzrt2GYFi8s6xR5DCLHAKfnghA5Pvsi6AEktu3KfzT99",
  "key37": "4feDB9DnMXBP6tAEZ2nEm1D84rXQ7wEmXm3CoXxzkKZRvtWM2Y4yo7q97Zd6njKtq8nWwJHnPk6iFdmLyjX1sCEE",
  "key38": "5UyFwAfJ1bgmKfnSFw7ek4iP3Yp2W7v4eKo261MvV93aX1VJKXRRfU3cKFq5L5NGgk3BJi7Xd6ZAVfD25HdMLoyY",
  "key39": "2z8fsKuc1ZkAHscESmLBSPJooVf7Y2skH2MXBK3eppBGgNcgkdRHBgNYb46d5bz8eP7iKXAHSvyNyLESDCc5wfzF",
  "key40": "47dKgdMcQFtRb7mWKrrkZvBzPV8ZpD4KqxrsX3G3xprMWnZDhejw78gWrp7SxTzZBT2AUW6NNKpAwT286FUPxFZj",
  "key41": "2AV8g8Lg6N1ThMsb1BSb6nLv6prFp11V9p5a2j2AXaHyw7aXvDoAcroxTpDiHQySAHiawwoNSR8GsMK6SPNt87mb",
  "key42": "2PxSHqrAFHjqeCbaKtCVpSySdCWKiV36du1vJLb7SoYr5Dk5w1a1SDAXpkgK4a3xX2aqfzbQpsXVZQdMvHisXeTo",
  "key43": "3Boj9FweU3QygcU8EmF96kusQ23zBHUBGmgz7bT5XqsajBHJFCkTpDqCwkDSXUV4fZDpusbdmEffYQBUCZQVPGGq",
  "key44": "qWLzqarZ2PuUJ6eoRAKhN8zAMhkHqjW4Rk6bxPpfswRGpE21GRx8tTWwVEPGUhNX2rF7UiJ3nr5jPPCZSirFwdv",
  "key45": "2mkj1JEnCttH5LGq3jtrTVMgMd5rdLusmriLAXLHtEbwnCrQg8V9ARq8fYKP7sf3cajwXryLmV5x2hGezS4eHt6A",
  "key46": "3qKgtMVR5bxz2tvLEhv1U6HGMPcpRv72NWq9SHzQFveR5RsFALnPymrxb4wyeVunKJedzNr8cFfwBW2dgULY8ees",
  "key47": "3oYpM3tDb4nV8ZmF8jNcfvgcrYifFbvUjehB5MRR26mMTmdkNbehJxea7zEPu7QXjYDnzkWuZNnedPoWfQaWUDPE",
  "key48": "g1f7PPUfoGsoVFdbQ1kW9PQ1pFPJvXAGGF3wYDm2Zd3MLXMsfX2bGLe3RAbEbHoqAC2umXFDYrBWEJWvbupSe26",
  "key49": "2hvjysQtuwLkYhmXtTFbmxz4FLS1AYDNztSUpaAx29TjY7F8ck2GrgkMrUYEPyZTHBxsNP7X3ndF9E1u3Bc2rN3E"
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

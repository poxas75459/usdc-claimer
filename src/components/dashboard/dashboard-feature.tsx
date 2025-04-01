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
    "55pfqEUZ2UqT4732KjQRKosaGvVfQEHGmSFsfYnvPSwyFuimWEzaWTVFvVZxjHYMmGq6HGgf1wGSJyVYyWBcZvFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qR59GY3Fx3DkXC1BujYmeaUARaizDhFmDrkKUhcFUQgjxLxmDwuou847izxZGcgbUBWT5Xt1LXwniNAHVgwUX3Z",
  "key1": "58Q7uFDB2WPAspUtHSnn4VtjkDWEnxKGwKEPxuLWrZb8WNHcea5jT2cSA3FtF8VREksbB2U3TgKFrGiJA77fsHTY",
  "key2": "2kv32cEYn5FRofB5A22zCiJH3o9Q8kNmeKADADbLLAFMKspAGCY89HCvD92hp8itcDUuodCGRse8EMfKu4MPBjVB",
  "key3": "4JFgCrWfUheFBJhyTcy3TtTbXu77vPQy2nVV8C8HpdB1SJUAGW4xJ57Qm3VcMCjrFKZ1pBacxzxfViMnty8rRt9D",
  "key4": "4TpPBdHhBPV2yN7ZcLdQwuC2HZAeQ5gQKunnCXj7osiCpyC4PK6BhAt7WauLWH47Bd2MiwusbXufsb3NknR6oP3Y",
  "key5": "3zAWvbUDAZwmKCEVTqNsYkMMtuqp1FC892RTxT91eSajUxWzTqqRa5hgfjKUugpufUyPupnjkdCZfv7PiWHLp8uB",
  "key6": "2aqhypLSpzhsAWB5gyHXGg4C7VuYhzrqpEnios3daHYoKpRnFvueXciw2u2b91mdS97trgmSScHVLhkTeVTAAYYC",
  "key7": "XoCQ5m2FTXyxFhP4mqsZd2G4JqraJDxgMVRnUVuGABsQtAfm42V8JV6z6K8hkHrVgVhDEweNXp925Gvgd3JUyrB",
  "key8": "3tHjuvbN5b85jkLJMnhrdc2S9sV5BUAwP8e363HLF5TRzXY11edirG5rZPtsANVinZEHhxHxKZsSsbLGGwrfiuZ5",
  "key9": "5g3SVjKzCVXr8zCDJwkssxUiDoCZvA2dGFHragjaqbnwuS2kSfvYzXeaad7LuoonD9pDUeyPE5XeF4ZVbD7DE6ys",
  "key10": "3fh6fbvXozHLFaBNZVGdGzfAtn5Ru7TwUfMffUG6GXh7C5dycXuHxxy9CY5f6KRa7GNKx8qvtecdpaxerS9BTnLd",
  "key11": "5EFdJ8HzpeKTKnsDJu7BVwrYnHsDu5kBf2QWA2mcVrDRwDpwHViH7RTqxvmfzAMcQysJijoqyqTqSktZWm8iko8D",
  "key12": "3MvNbZiK2jPaCPpemKqFTeH7xLBeGtxvZ2QrNpKCkYvx34YrsY9zzmBBTSAwYEzUsfZX8aST8tudEbBup14uFYCx",
  "key13": "5JZb6XDezCjm3C2EKQ1G1xhU9EVeHwu37HK1DT3HpaW1AwCVqRh7psNJXnR92U4o7m9FTFtk1VsHVobgp76ER9cF",
  "key14": "2WodFGjVRAA8TNm3EoktYeHwBmAyJ7jpmLH9rqzYn6SLLSzijuBZtBiCqnGPTZ8HgPVVLha4Pp3f9gNMKx5io5fR",
  "key15": "5YoUnn1EGuMk4oG7znecdYKNuaJio1C19d4snmBdKccDJ5mHVNT4vLZjurTPH1YyJSF3J1NoYEjGusGij3A6cyo5",
  "key16": "4P94fwCmv4Yg8NaYvJLqmeRTDJnnRHq3iFzKzb9coqyChciVcXQ4RcXSNhQs1jqebr5aftbasDjiXmC3YHXuMcLU",
  "key17": "2qHvaa7tJzGB9A1ygdaj7PqXQ3dvhX2tfoWZRjbGjD7ugNwUp9pHkk4cgRfxNrXMDSZnPh3tVu7uTDQR2Fw6EYj5",
  "key18": "2nGmEcSbaVe5Rg738DpsieV8FgvgGyP56FGzbQ11WaBTTYmZMTiv4AvfkzeRmpbRctB3g7CrE5w6Yd5guVR9zCV9",
  "key19": "3Dtxhm1KacX6iGjDZnDEavmDHG99RPK53pXgzw4gfRfroy5upf3yv3e6PWxzj3kSgcUiZPMnSLascciYRE1eeeA7",
  "key20": "4XG84rmJzEraVaVXiRDiehPLZaK2LhmQGJQfSxZ1gy3K2foJGV2jjWEY8hTwJskiyiM34WGSE1K67ne5r9ywxvx6",
  "key21": "3sqCz7tN9BRJaTkPsxRjBPhxp3zuieWxXhjjtn1SgTnHK9rsWFGxXHN1CCCdTKbXG96x1kGZ9XjgWHLW6RekXDM6",
  "key22": "18X66qu5DU9JqJNc9LHivEcNEUa6eZMSZrnuDerKH33ZM21yyQR4Q5eEMrNkXKkuEx6c1yx1XhMkRJSRXvnjhnJ",
  "key23": "2Ytcqpgjip3jbE4Gw1f6X9qmbfFsyNn7Z2GeEJCBkfVB3tXC2AWsLJnMAxDx2BYSJXzuwhXg3MS4GhVoTcUEtxwC",
  "key24": "4uZttwfMyroRRnwzabuoo5iXD5dmyJEqXFqiGYRhWNi3RtSKviep8j8gba61u5koSLZdZqUvBzTkCFKPM613YyZe",
  "key25": "3KGUSVw1eYmJ4tPwoAXSk23LQN1RGm6pSjfCzGcHMADPxogNNJBRCTMcVE2j4paUqvbGNcBT1G3B9L46QnNrziS9",
  "key26": "2G2nCiYzneHKmL8qVo7tdwt42toXBtCGqe2WosVX2id51xCjTPBxbnPFobMSKUNFxvMUtE1gHJhkuLhnWW5x5uRt",
  "key27": "44z2VkWeDZgpubJBJ4HXrfDcMtMXXyhjNfNw8iKvBNnfJReZg34T8vJthEmDyciAvokpWWbDxjTVYTg3oDJxmbiJ",
  "key28": "3WWGLTu48JUKM9dvoeY9K2VXXY7CTVTApEi4GYNRam62gRXBYQrVo3X3HSiS8A9YFcUVZbxqSS4pvGqYnU4Rdtox",
  "key29": "48b8pNdmMkFWY6YmUk7sV2iYHk7rd1KaxRexysy91T38xJTF7cLaGpnYJR7m7otE47LYs3BGiS4da4wXBMhqogDB",
  "key30": "2F77hNwvkENBVZw5ZLQZg5L5v6nBCCfhCTNP1wiDeNv3LtxMqBsbaduwmmDzQzjM45cFXcJZUSzndBujUegkWPKj",
  "key31": "5uAfqUavJ1CfJ51STeRwsGBNLTbgjVNhHQ9ezjygqZmD2ey8gu17xC6xePrVLNP6YMsAqrfivZCT8mvxETrjQKJm",
  "key32": "2YagYMyLPe67BNfuGnPmkFZiF5qgNBHUwDz1DJm4mvfV5GygbtffFbjgmDbcq1YdkY9yBpS5EJbiyytaFUfr92Bb",
  "key33": "CS6fMyp66ECiMv5SLCvpTzbkDk4BMSVeKdjoBvb5KURDNvESoqVeHAqE9tHMyQL2VFQ2GtiAndXvJSSDGD326k8",
  "key34": "Fxhg62p8fhYUwPqerHFbemSBHHUQswDow1nFiVg96jNkfGqWDVTmqgi4MTQD4PJwdyHxiUaRAJjj7ogD2BUznuZ",
  "key35": "avAQ9ZwjbtqizWfUpS8wkGvVz2yLWEXkwHeYypVWqNM1cn4ncq8PFi67WmihbQj68Bj3v7rU6e1SV75xjUHms5D",
  "key36": "3YByKkua9YHWEHS4sPEQR9bwPjFkDLrNBYGAD9dP1rQgeZjVdtbLqPPd2edw1UpxoEa8qNZh59qDyscvq3XHgbmK",
  "key37": "39L8FfcSH3fjgG6aFLwLsCQD5JPnDoACcMVW8yUkf5cKMeHouhdpqkeSZvVHYoDmSxDLvJk3Lc6qtH1F9PbrVq8r",
  "key38": "4axiCmMDVAVQ4dfg9qnreGpqi92pTBB4csAzmjVJsZLWYaRDMTtjHSWdrB1FmxQL7rzHnbD8KQWkL3qXVRx2huC5",
  "key39": "4mHkXzFMJyNaVVewZ7bmjYtTjvB6RpwYhwPvdGb2tsvjeRxbkMoXP2MWvzzR6kWJguo1ZAWJ5fdgTABQaM4vvYnq",
  "key40": "3AKGnE44U9kk7SDct2WcsTTxgEj6J1LL6ypPm7AQiKazwjq3toryaqBiduqGGknBAYbb2DZxezt3diTgdFDdkk9z",
  "key41": "kvbiYgEn9msRTt7D3mXzNvv4dMzPkQM7djGXsB2VLfRExdTW1m3bcENLNkAr7nBHNVqygT2jwX3w5hWzm7dn5wv",
  "key42": "3xxDDLtBWRuCyFBUhiWv2FYa3MXQYskfSV6Cc1ANLegA3HgCFq93UYFGx1YsYVFZ1AcNxSiKGCRfFfUPY6gdjw5m",
  "key43": "2eqhKrVVPEJifbkqhLfsdmR5gTmM5xmEvZde4y2zCKJsXLTwU7GKsuJTpifTE6mUuNi47dD9RqQqE9a7zqDdAaZU",
  "key44": "3cfFa7FNrchKh4fYozvMEro2chjxecR6SMG2FKCsEzQRRMYmHtALa1KPs9sTA1zPR35WjDYjNd98Rbrzuaye7upP"
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

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
    "2Ko223cEPw6tbsDbxBZsi7gCcnrxFJqtSr3YuACQ5PKKZAN2aAwMe3n87pJR5VM6EP5j6qNX4dhUZbjhFH81Mjmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fExoYHnQSM7MdH7mbWE9dn7F9XV5dzvkL6ZCTrmgsVBDBhTVXTvVK7nFLfuE1zFDTjmJKdLdUp32WV18eQo8mbt",
  "key1": "2VKDaStMHAduYvpAT8PNvNs945HA2Vo16CY71ShzH37n9Qiu4TQpk2cQLN1CGtsmjaPhCuDjgoedCiYtwWpusSfj",
  "key2": "31ecvGYugKBk9PBqhTGe6CbU9HCa9cNMyRww7YTAgTegywNbFwGEPor74YSgQDM9WM7xdz9SDA5ErgqxGDpzJhBc",
  "key3": "P7Se1Hg8euGD1qJ9AeciCN3hF7uR8NvD6dJRi9DQJtqXRHqvxQs5GKuYujPJC3PrhZWzUSyvSN2TC7vRfe8qEYj",
  "key4": "3GXDrrC6Z2cmBCvdF59HWvdexFsrTjBeWdQYWJK4NtqLpGEQkooQy2dx9vWsbDcV9mK6LHweHhpr36jhGcnswJFk",
  "key5": "Y4Bc6DepyTmtdPr6TDZAhvYnV7izKARFBrBzeCDu4EFeesLnhZca2fvf8giYcLhPUJP1BzDjSwZxbHMVc9bAYJ3",
  "key6": "2G6cCSjwSY8iHUTAGELKsqrfL9tvmAoRFdnR5MS8nCFK6jz2X8gxtV8iodoBKrLctmRtZB5REhyfsFAaBor25yGp",
  "key7": "4BN41JmWEC3wfMcSF9RchqdSABJB2w1ac9pgDCG7aStZnZuoHyRrHQ7AHRAMRZP8Zy4cS1L8Pxj3kx1jnW7cSzAP",
  "key8": "ZJpNFaw71oVhvF2WjCcjGcP9BbvZbbQEhrRTduxGAZUdb2cLgTfek3gubDZFdpXLVrGVpFiTghmMw3rFJcDR6F4",
  "key9": "5q8hdMbbvCNZYomGSAncJZZB5o6g8daBVRUajLNguQvYAXaZfzZFazrS4jPTyUzF1fW8vuwp18uCdeEteScyMjAj",
  "key10": "4TswzzK9KiGLvetJSkfCt7m9izY66kjrRzbRnEsza5ML4Au5dsEFp49iZ2E2bFUhmLYNGCd9ZR54cMn7yuYNqyMv",
  "key11": "35diQFgHNcBbBp9cAD1ue5tACPRWynAHGpxEq5PRGwscrMwskGKjTxHemtSmyc9Q95A2ycKdQsNeX2Enm7C6QWJs",
  "key12": "5aW4dAjbZMdTdLb8daFgCrrvMAWbdXf7d86MhffMC2fzPF33tg1N41mVqNxGogDKyCkTPENqrj4JGVwn4eCsiy6N",
  "key13": "5G8jL6drSUyzF6srw58y6SVuCDrwWZT8iyeMQsx5H2iKsdGSCdJVMTsswbJMWQeubb9atJCdAo8YEv2o4SDz535Z",
  "key14": "5fq71r6uvz2DKKyLfLcxtC7QZbSxMZVmRUneii2RnYUTqUj66Jx2mK75uQybH2Vw8GvJzQzpM8NkEgmgnYPG9dGb",
  "key15": "3YcmYNQ9GMCVHPRYqAtk42VS8851X8KyLH8sgc5Es1v2vF29kCcbmK4zeLBHJqm6wnBAtXX4nCxAmh8xmoLKDbAT",
  "key16": "5Rsv87KivTQZcxA44AJkptTTg6p8EFFk1d6KNrzAhLeyPtH7o2FWrtJLKsbNiv9ac2keCdndGxUb94yWcYEDtD6A",
  "key17": "46VVGXGKJVibVYonaEKajesL3WRyJWv92KecoG1NBSV66TRfaUmx28mTVZc6YfMr3zWzkvmwueKJnt8k5c2AaNaX",
  "key18": "Ubgf8xp4WWghNHMW6g9BDPptLAvpQmNoDEkdhDm7156Ki5ZWP423brxLU9ynQxDeHJp3HJ4xFUEMAEc5Ga4eR32",
  "key19": "EBgpo7hacmGZfdVGZrzKRjf8zeYRiaD4ETspcoWLxjAX2CQSJohZtWyrYG22CC3fv9fEtW37yyQp9e5d16inmmJ",
  "key20": "4yz3Vjz3P9SXbSRxgMDFPi9VHGsWYkAFPhCBimWiJrX4KrBAd4exttLSKjKycbv6CUREnevtuHvwH6pxh8L4daLK",
  "key21": "2fjmXFte9Mf31Ltjcd3QnQg1Ni3N4xmopFna9oRqWCt2onn3aEv59tn9wvEEQxjZnbCQcSppU6pt7x1TxXVctrjX",
  "key22": "66wV5eFRtF7G2xR9qLf6pDGowqb8K5hnGoisoifWeVDeqz52PWWhiQJufHcXaKqxSeGhifGbVjUVsLW14hc9xaqB",
  "key23": "5sByR89gWXzk5QDcgzpDxgrSSwFDSR1MPWse22UxuDvQikKMHaTXtcRdMS3MmM8CJnewFgVyc2dFQuSg2xzvvW7f",
  "key24": "2bd68BCAPMkL5iuM4NAHscY8jFKm8suWNmbLa13Jik2Dh91ec8kvaNy5wCVLfKCesCHtb4uLpsn5dzwfmK3q24rn",
  "key25": "3Sf9dot2Y781zFVJGCeGmxB6Dn5wWEuQWStcg8cmGzrnDzpk1savjHxdo7ft7HyEpXk7zmwPWb6RnWkLRgF8syQA",
  "key26": "5fyvhgwoRv4ULMEezrcviD9FfqaVRgxZY5szieETX7HZhqaux3WbUiTr4fzbAv4nkpGVi1R252hH6DRPREFLsjbP",
  "key27": "2jp11Wn9iVQyvrNcCPAwfRfoMzNwajfqAmb8aXLSQugoPaKX2n9QpJG7qrbpedXEwTRBxSUTdU3f4GVTjbv1SERH",
  "key28": "2ud7QAkHx8MvxdxMvjiteNJrpPeS3hM5WtSgbEnzcCcVELJo1Xt1zg1z7SNP9R5xJiZgbFmrK2HpizHnBGVM8cso",
  "key29": "5PZ1L8ARZYF39ie6ZKW1ubZ9rfpSJLFM9yMjCceR7QxD4LoGNh3itgT3sQ38dg1EKRH5ETMyEG3i2gdNBNjoQKvo",
  "key30": "3nPWmoEM4TQkDeqGaNJWddReQiFS1vy6pZUYRzkdN8WHnUMhRbaaQB2vewAHM4JjkyzDwjaeDz3fu9m6nNyUMJmm",
  "key31": "4ozf3J7pjfXcJQxk7hN4BdDrKop1e2LVKwcQNAhxePbCpd1yJi3A2L25T4M7njqnSg41rGSsdfkz8zj85mHFRBNN",
  "key32": "434DC3fjcDHkSdQxN4UyPWrjsha5y3sh6QXuymbaybWHQBaizmno4ChhPbQjYfw2c3yxaS7PNf8vPLF1CSYqysHA",
  "key33": "22QZuYATsavpWzxC3KXoDXMyVdbbDUH8RV2ba6SWsJBcML2cZbiYqrfa7pQUAfJ72wZ1orTPXJiv8hPQCxuhKML6",
  "key34": "42JBy7Keu2ArBYDe2XR7AQBoP4RkW1CkFdpxkkxi1hw2GcnjMmWWX7AiFvLqkniQ7aQwnEoLPcaHxVL9iXweRu6D"
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

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
    "5kxW1Z4piN2bnfp6NoRicaN8z6soxPgJzhe6K6nf8ycfThERa3U2Pmcerrcpdg5fHvPMiwd17bM4WC66n4LqAxDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnuiPy7NP1m9z6dQAPEGJ6Wuz8yYLCrgaQx6gKkHs5GehxUUZzGphgeDZCTmP8bxUMBsHh2V2DLJGb1y2uCYFfE",
  "key1": "3M4tfzxKmphjjoMeWa82VCbkh7CaH199UjRQLpj2anxbieSEscJw1FYmYLTNQGfy4Nu1dp5ZiHbiTSzrmtBpF3WX",
  "key2": "hVsoTXNoAusPT7LL3cpud8GirmADcx5ssazNRe2PgsCptFcndauRT7hMhsN15fcaJN1kLwiWyJ29VdBW6fBRxy6",
  "key3": "4dRNRPFZdcvGZQZccgF8tuVcgEBaZZSvUr5EZiiAqtS4R6SKwhqNnuDEdFcqJGVPPTBJCcGBfacsYxv89F77nF7Q",
  "key4": "KedL6dpjHuvWjXH15M5ELmwoD7RYTiajRUupCnHUkUgSBSVGSaHAUMkGubvtJ1ogWR6ysbbPSSLJQPR64fMYSBi",
  "key5": "2d7ZR7NUNpUTP3P7B5zU3xysB2iFsSy2J6WbHuT59qQd6wfzafiSNx4fE464eH9wgHR35gC1KG5Vgce3fFvaZvZV",
  "key6": "22PKs4L998hekCb2bnGj1wiSzNUWWiqN5Q5J7B4tRVGP9E782UjQyqraT8rFftFTFBJiZk2ygKkDruozxthyNT8n",
  "key7": "2fXrkUXKHgL1DQ1HDjUyrC2AyT7YTrPorKfWb49mJi4s945ZSc2Hhc2fCDEksGXiXMXNiJ93NRs6PL1j4MAcgsr5",
  "key8": "4ofJa7wvEguoytAYzXwUxB4kqbudV84pnpGZxoXrYo1Erud5pivmuk45DEpdZuic2HyRoxeeVsMMMfks5wySc9Pf",
  "key9": "3YjbY1vxPson4g7h2E5aLAZg6EniEPBDnSocLg3A6Aje6LPUVbQAmaGWTpLvyKYuPRQUH7KCqnkPkZVkpyNLBh9G",
  "key10": "oy1So9GJSo8cjeZmccNV9v9nTMxSprieV2m8YSd4abfW7XHZcSUaarvsUDXucR6jLXDMsWGfZCpSoUeWADSStpm",
  "key11": "5ShU7PQW5dkMuDf9a1p4quU1yBuYZ1uEWSPKPsHRk9cVTaketMJEVVkushhH3CfWLubDeh2WFTw882SczZbwqPAQ",
  "key12": "H3wCJTFjoHNbVBLMjh5LKGFyjx6jW6BD4mWLgJuZS69rp8EkfLTH1A2GXDawjJwYDFvUqjAFSf4siug4urS24oz",
  "key13": "mH6kadNRK9M39f7zXwdHx9f7KE6YxEfer1Wcn9mBr2HZcYug1fvYfzLRGaotxkz8fqR5qrpNgow89cV1PLokjoq",
  "key14": "2P46j7JJAqjqsMZVrT72pAES4ApNXhbMoAN8NAf6urVmBDzCjtn5FiNdxDxBPvbWSjhGkaMa7d4h9LU5fZjodBp7",
  "key15": "2ZX4xehXxUryTBjX7pvGgjh66LLYDx1smNRfsy8bSWmLYPZ1fnJcS788uiH2kGfjbE1pDDKPMTeM9K5CgCKGzZXf",
  "key16": "39ZdKCCgEu4aBeojmfEJAQoqMh81AxCpJu9iqP39TQtAVaghf8omPM1rhKMpvKEkwc5Dm4qpTLnG93iFhS3yJvUs",
  "key17": "4k7ZE4g1tvoUNGwdVRJZz76ajGQBMWGfLAqKwXKkBTSSH8n3eo9ncJe9Cn53vkwv1Wj5P8S5GN88MhDNt3rXRiBM",
  "key18": "3WSguW88isyMmx1XN1Su748Av5gx8RxXiG4aJNCidptf6TfWz3ui4X4CNhNQCfhgR9QN76YSnWkHyT9nN2usRv57",
  "key19": "3nBJaqyCgyz49XHYHtK3UpfSSL7PED8jFGgWsSt8d7uitXKoHzxFuKRhkpKxU7uwYbuXG85JaphFiLn6QqvuAccn",
  "key20": "52cTRS5xsHo3Ht85A5tH5dmFozUgjgHr95dUSSNU9tW2s57A2DP491sapsmc5pGetgNh7xM7DrM67EsMhfRCChJm",
  "key21": "5PACvPTHD11iTcQNRAxDqfKn4E6spDEHKr8xRxsp2LhoED5GUyEh9ZB5kiXYprgdgGYSE9vynqyops3necG5x6V3",
  "key22": "4JbiJreHbyFxpPpJhANFBfS8aYDKDzSCjyDjo9v3Au77BFxkNYSzurVM8HRSQKrkrmPsNDR3zcSBzd6E275vaadX",
  "key23": "3iFPz4JDh1ZGQdYqNhoxQaJmpTqaJrW77fzMM9GCtgQMWGB3YvoA5o3tLcpLPRuNyg34SrrAh8cA5TzXQzMCq4TY",
  "key24": "EyEG7mNZJhHpfGYJN3QVbQpCeuh1SZH7QQQAoNYCQCP15Ey94o6Sue6icAJqeUh8cDybS5YtRDzTJZNes3qvDLH",
  "key25": "4mCZzcg4wmcGJANNpQJ7xpLSGsCuD9PFSG5MG5TcQmimxC29Xa94JucTqJtSGuPRNHGWRuQh9e5m3CAnttEqL5Xt",
  "key26": "3k7ofcnUFqh7Tt6BdaANoiKdvcRTWeQnaQbAVJa9vEZq9wZiJPRvDD9yqepCCwsPnmK9uufdvbqAQxHv5KaM1Qed",
  "key27": "64TA4sTQ1GBYbjmNqjxhXR7Bt6BWL33BfBkoDhYNZJAaj91QVT1asaukSehguyj7aGZH6YjPP7gNpaYy1pzYfY1B",
  "key28": "25CSgJY9ix4GqxsVQRsUdYmtvbXCJ9mFtUW5iTbeKQHqAUHaYrhvWUEahuwGJgxLhFsJxs9QpFawj5w9k3eM8Z44",
  "key29": "HaweKXcGC9hKem2GQK4jEpFTK8dLm6HSL7daHPnUAbMC9EA3UZByQMsoTqZmMPyr2NYRzL3kmajhGWnEF65h5Wm",
  "key30": "3F6PpEkBSE79zokFYJJwUuBwFkMmdY2vhDV1FESDwSzoy9TZwJhDiLWphSZab2ZMgswvU9hCQ2ed9Csoi8ePEYLG",
  "key31": "47mjrDVU81oue8UJDfpP2NBT6wfm4sgVnLLS1nF9zXKVRYhSuH9ovVRwXm3Kx86KZPsMek2Ri6Nds6dVXwLFhse9",
  "key32": "2moE638UxoDzgBGpiu2baHo9UvYpA3hpy3NfxY7g4gXXA9SGvHrqVDT5QtrEgPeQbvJhwzP9o5mAHS2K6n7ywTs6",
  "key33": "3bJmaU5yEvVg2ezxtekFezZZzbuACqpTYcAkA3EUSUDX7tZQKhQmUXgFxbdMNnbwsSdb4WQZ2ZfzQ14EdQwrvM9s",
  "key34": "nWPzFLgts3FciZ9fgY3T4ATKv6TzrdG3drqctKZbnmBXgJ87juFjHvfGi2pfdt3DSDZhrPopjQ8tuFrhmacpBNF",
  "key35": "2aypK1CAL7QnyXYripZcQHPD93exo2iNZ4FvPrPH5DNqmTNxA4yRWFiUMRv2bbxGdcNNx4EbJ8wy46VMEkRXrSCk"
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

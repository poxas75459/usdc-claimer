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
    "5RoinVUa9iQb7p3qoEfHboCHjjmZS7QJ2RMfum883yyZZSgvdQaT8ugKL7vGKeSnVWiqTS6xB9rqMXCTGhGjo4wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EoAxUveXwg9nc7298wp2QkfnSKTwbGjm7jHXs6WyDhZrm6NSjEasCvzmSqDqDRmqjYsu3twZA7VQN3q4ZRqDqee",
  "key1": "5JWUJ78or2dNVuhTmT7y1cfUKg96GvM1LtSnTgGV3QRa7LAYksJnND9KrqX3UfnDrYW6WqALFcjGhtJjmvExJ57z",
  "key2": "3YyatzNPZY1UC86tahYm1vnFkNAZDjzGXAFTiz1QztepRRkfoWjTFdci7zJLjvMJuL542upQdBRkTvNmvi8p62gv",
  "key3": "2wh29dGg5JVLveqrG2EEjDKDwrxMiWb6ubF8TPh6xuXrghaWSsgh8otc2tY8zcnWpj517avmZJY4UVQ2No8FFcdc",
  "key4": "nd7yZ4B62zo7zAUed2HoAWsyZybDSWoUqe9RoaUe2XLJmRzjFKUQuSqXPHr7oe233wwC8yDdjqhjrgoyZ4zFLSv",
  "key5": "2GyvrFhKR2T4zv3KS6ANLAM2NkAtp5ugWXKWoHXAVHaugjYECPGvLSMfkJL7hH1khUSMAdvj5M5kTdG8FUbJDvYd",
  "key6": "3EruujkrzQjrfLdnn5ozXQ66vtV9ztSKmkN3XtEcLWyKoVAbee9CfdX5iRLBFFmyhWH8MjCsnMdYnFRf8caPLwpe",
  "key7": "c6tuKE47sw9yP4YVjFNEBtxvRVTw9tQBZ9Pr1BVHnvQRXJFsD16u6ipzzTfaRPqnFHf9jH2vvot8t3XvSAwcnQJ",
  "key8": "3LCSz2qAMaWoV8XFT3svbEgEt4YPM9Pn6iKfPXWyBnJV3PoPboecVRCTHyisNHodzjnKK8gKCPDmphNUHDHbbMyr",
  "key9": "3iFXDPcKyMsaMA795efZaGsrGLBvCvFUKuYSzBeAeCyCcFXsX2idE6LcgdQGhCMobEkN4nXxsBge44KbvFEYCGSd",
  "key10": "4MMbbW9N7PRsyDrieP8UVZcdGD4vaAFf84h7HYmEAG3ZKTdum5vkGzHZKxdE8f4AmfCXZwJtCYemYCK3PvkCJfvK",
  "key11": "2vHjSddLzXx9TPe8fo8xfPumLFju4bd3JksHvKHK6pEmwLy8RJBFX3Rb4q6ELCYWSPi9nFiZsUC2QMyfb6M5qEVP",
  "key12": "L5Lth8uJNamA5LWa9NtastBR88gRp2Q9e23hykujJBRMu88cE1RnJ8HhQRMs73QVE3ZQHXUqCRDRTbnrLes3824",
  "key13": "2t8k3mp1pC8Z7BM1bwLRejNmkNjZVxPRYt2E4iWFFjjkHyo5ZrNxV9TSvXKGRZMiL3fYRyRRnkfq7DrcQRmRajT9",
  "key14": "5Toau55Cw3Gg6JYJHkWfL8oEvYXESzfoDJtF7PqeYrGAqoSVwCYxHiFqUQdfdZEkgdnNvfbJ8DjmZjTZdg4qaRW5",
  "key15": "QtihgL2JiDpBfAhJi6XaopZ663WTC76mWzcX99HAtZ3kr8CSrEcuuWQcyzE9gkrTPxrkyfVr2oiwUCKYjmvFmAs",
  "key16": "3rhKxoan3Gy57X8yoLHALg2n1gd5Qvqrz1mXB1Kvp4chJ2sxHav8NXCuyEbA2KMcwaQ6eUp2XqaWBj1Gyjg53AMr",
  "key17": "5PC5jhfhQLd9LFedzceVbDd6DGGBoBYaZgSBh8eNp2d9uy8z4hyopXFoQkiaeecHKmCHk49ZLDXc885mUMVcsnZf",
  "key18": "4mfGwfVEEfpgZN561F2kxJrn7SvbEDfN25shewkAdV4ZXkpPJfX7cUQEbeGx7BcaHW1SJM67H51RGojyjfRYPL2v",
  "key19": "38cwBc63gTbefchVnKfpUqmBGwnJJZzktg9A3UN8KAjNMvdDwstcU5KqpcVkfJz5xAabpVzQKNQbwXHBYnf4yCbR",
  "key20": "2yrWRaxhcdrxzQzTpABgD7dNRhyRdDtygoJi4uYQriqx7FTKj5TSqFLqSfZHQZzWahHkF8VG1yrmS8pAk8BckkJ1",
  "key21": "4dRCyiDdqhY7hFiuPmfzYYHp96QZGyGpnq7DRKruABDfQHbABkRf66bXnYW2KECsfp7weusB35aoJoELeEJ12Zt9",
  "key22": "2GnU7ZBFsJQG2764UWzohfoUiGLkTMDrFACDdA3PLhKX9pL2vJ4vLtrUDhR9mQTMuaDUNYxUTtB484LGRDSQtjT5",
  "key23": "41kAoYhVPfRhgAyEScdTXnNCyCwZEEZprf8UvpTsGf8wgT4YaPKWMBbwQEKNk7UzpqwqdyzNHuvJVcNyxws4BKUs",
  "key24": "46QN3oDT2a4zQGfCT2zqnU4qi9SEPkCms7jy8M7qfJY2gE3WwiALrAkp4PkoYpLZ6PcgjNLoxWv7ztG9KeXb6WkS",
  "key25": "2Uqq6Nqiz2trPK1NgA9V1CHbGLutWcaDwzuy463AUop3zREHL56N3efTrzqaUApgP7kLnvaEL81f4R3bW8Njejg1",
  "key26": "2MeRhvUCkrP9Mh8cUbhpLUvzg9Bi4hp1E2sZw9Bt47J4zssQzJfdX2R4sZNikweNDfQcw9ciEeRVTjNZ4KrVvFKc",
  "key27": "4wud6LRZW6Bn5evWejdq374W6tZV2t53HjBeEE1cituG8T2SZNE2zwpYSJgoVsDeR25WT14F5jvpBfdZhT242FxU",
  "key28": "knL1b3a4sJHvzn63fFhgXCwE9hwDd9mSo578HAthPgoUTFn2J2dVPDEQw9ob619gj9HPZvL4dPnwsutTzxGwiiR",
  "key29": "3bhEfTgbP5sUT5cYQtQ77umKu58dbHvuFhp3KxGe3ENUhCLbk5bFaiUxTkK4dB81JiYcgLcMnmBjphv44JCBSbLT",
  "key30": "5yXyoHEmEsjZ7g1ivR1KK8GQaCUFptdEPQW4YcA8mB758bMzmKZCBmmtMzUAsVZhgqaUMXo1CB3qM3TBYF7usvKE",
  "key31": "4MeyxnGDdp7rkKaEs94Ph7HZYgicmatm1c7YFBeyjMcUEUXdEK5buwY2eK3PgYosZC6B7iwKM2THq3Pb97iQ1BWf",
  "key32": "38zi42wfHiCYVJ9rs9tU52Ex5EJmqsvYYgEGLBbiY2HsezNrnMiBnPAkfX4rT1jJA8ieEATUgE8UrMkXMW5zunpa",
  "key33": "3nqcWmF3MGrmFwC5jMbBuCt4MJbHtqHsW3jofRm6fM4ZgK1BLty27vzYKLJtJonWRHknC2xaaSoR4eZxfwFsCzuD",
  "key34": "2uK6zFjtpK9YfExjbY1yW8grRXxvW8Hs6pyjPgsuLUCPNJMyrowrbXm6LunPn9xDknBazAD1Gf3qdyMfftRMaTu7",
  "key35": "4eXkCz8jDxZJyATy4obnmYwvSp32SNwF4HVNZr5BUFGrJTREDZSkUdrtNgBZCMoKCuFzvQTwKxhCvbzcFp6CRDgx",
  "key36": "YEatTs61h6wSLgyX9fK525ag6izaRQ8vXBNCob83VrXytPAdhjopVZUPmwQ4TANNUFycbzXbGdBLfBfk1Lbg8Co",
  "key37": "RsJKCLvbfijxhb3X6E6ieC7DvWTJcUM5tVC5TBTm9g5rege7fcq4KSF23aGDzXtKzzTMLaRL9xiDyjYhirWLXtX",
  "key38": "44MydffTNGrM9LumMSmmJYtJxj9PU8Dgg9U8aX2gaoYVLHNVmrgzZt6EwnLdoHcg9xGU9W5kGodTmCfaxqyjRueR",
  "key39": "5u8ubsQB3gzLRUFYJ2nMQEGs1C8g95XxtLcYuFpsmZ9kYJGFywRNHLKipzfg6rHkCBaVqpKPpr86g9PXTj4b6dhD",
  "key40": "4UNHrhGFaaTbBmW6DYNeN6NrqeVp53adbNipemd274PXmRXtYv3YP4dFpS6K4HbEWfijRXLa6JahoVA1nmvq4Kwr",
  "key41": "FzRmWrLdNFGZFvfXNtLKUKPf4tkX6s1uFmaDnucPTURd5JZe4emiyDGmikJWijzpFYFxyw8orGXJ2ZeaDLm1Kn1",
  "key42": "3LjtFoDrRWASaPfrzHAT2JHKGMgGatrwYRBMeMAcXnmKYYsEcAAPKGKtCS6kHKPqfaVn1UKepfJqKCAPQT6FLr8x",
  "key43": "2mPMfqDrM2KRbniZGp6tKYUgXfmXowp3KLxhBSJLUi27wehP1xxBeBDdk213tP3NEMSbcHMjdzRW1scaYoYGv7bN",
  "key44": "kwGD1EcK6Phs5ToNBG9zt6a8edqvreujsNTi3uftp8RdypKY1mPhFLHfkvE1NiAcDWgaNJSRssXaSRgdJd6Dyt1"
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

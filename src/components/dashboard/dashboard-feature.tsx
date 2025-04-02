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
    "2VQBeW1F5imqxw9Zh8AEkNZry3k2Qp7TR3W6GRQvFdcF9akhEsrGbiqtcx2fSvasc7jFJ2poWwVgkpM5hsrMALJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FdqkPCRx6h6BrhGWCSp8qCa955mfSfFBjP64DiV7F6d9huPvA8y5hqgndHwX53ndj7biZ6hsvUhvD8jt77Pcjtf",
  "key1": "TMQenaRZCFogGC1DvhrHGsGKvX2Xa15u47WnKoqZ6ajrKsoz6bVnLYChtqT3bhS4HqaX8ig3JUevTns5tTBVyov",
  "key2": "7jJbjQprj2R1agYYQQY9dGrmT96Ae9TKJBq87JoznbtBWCLmAa7ziDa1PNH4RKEBzXiTEJgDCr6CUU1K5Ub39ze",
  "key3": "5Lf1qUqTs5DDJ7uhjxB5x6YYfC5iRfsHVFnU3TGHWt7CFLtGVQAweNR4DRTwmGUYXmVo7xW3g9YyhRkuNu29jRXN",
  "key4": "2mheaur3oYsCBvE3yzcMSoLAUcLuXrJ68Cydp2DLARc5gjizReoxcZUG3XwvGmN55bf8yHy5cmR3hsXTxuFcVJdw",
  "key5": "581jAc2vg2shorrpA5ufuYQA5UkSSmzpGtXHeBBx9uohD8Myex1CFYr6NRz9AQCugZUwGKDpEyFFcZ2jNu16AVDy",
  "key6": "5wRyV5PTEZWrR9i4n7Me1zYjFqjBMcQ2DYEeNQsoeM28Qn8FfLcMYX95o9S6y36CWQKV9ULXdHuz27De55mWy1uh",
  "key7": "HgDtBJHgpopsJ8o9aecKdENEKDuEEccop5CWBURUTmzGLzYf3vJTB6FvnQzfz8R9BE7ewtWk5GS8QA5NCBzxkjU",
  "key8": "NVF4JGLhnAkSbHohUBrR8Yjw27VJvFCfvvvDYHMtANWKnRUCGbu6NvnGajSRacf2hMpd4KjYhsWGVcY1gbhPkvq",
  "key9": "4ej2PwKSQ3mbpZPdW582metfK8qsF3tzc94JbnRVqXuEzUv9T62JXRW5PGDF68qaYLhFUimZTfnkLLW23krMNArt",
  "key10": "3RRsYgYFWMJndVcmUtexG9kvHQ1ZhjxTptQEKz9mSuYNiCTDFKQFarASmzuZPjaa614jR5ZDLdHkUiLsrQQ2G93r",
  "key11": "47Gs87bdNi9oyWtcqnY2EQNZjdzba3oYpbpwENvd5YgRRL65guFbPkViJB9b3ehic2kQbbgCUdouVEvxpe5WLp9k",
  "key12": "2HfQC6N4qWTrBvs9fmrCvy94FS6USAa17h1i5aFG3hd8QJ6gfaoTJfTrDjBXh5ppfTPVw9sgnQuRcY72cjdpZ7Pp",
  "key13": "2qyknGM53TouiEJoerP4Gc3GXrfC9wyVbgb6hmti9oPwikK17uH8KGFtuU4Ag1ZfA4CX3GKhUMUriZh9c8mKrctk",
  "key14": "zxHXB9ipTiACWNfhyVNAX5YgtFT36k89Boz5t8WgffkQJ3z7xGDQXXjyjdACEv4C6xPkMg5o4xHK9EswFtSieVe",
  "key15": "4dVVQmoCpYScvUuHzFjNPti4XbRcNtXdZkN5VxWGFvF4XNDmEbAkZ4oSiYZBdSWDArMvcD2tCqjNGbdzfCYop6u9",
  "key16": "5nsTNCLAZKr1gLozWcJEE2TBaXZJgXRxdxtSPvTde78Qi4yX1f2rreCqHLnfoo5eetbZbiZtn9TMKqtH3Zr4uKqK",
  "key17": "NauAN1edS4GZQPqSCeKxHT3CPNwJK7FUzxGH46VGi5DKPwQkbp8FUyDKZowxnDwgMWuC5YJx2xJ4Gu3kkxETcFi",
  "key18": "2ghq53vcJGM7hpDW8urmVv7bPm2Y6nTRQtvXRPyj14YW2Wz84EGUv77ApELAtfLq9QjjVk9QDTz72GnXxcQJP8Ft",
  "key19": "2EHLXN3rZPRduSjXUWQvXoLmkU4SpugqLFwbsTbrX63kbDvUJADQrut8cz9o4qwTBmVqrKpYTejJciLfK5m5Vfr1",
  "key20": "3ySckG6zLtAw9WXf3YrSHYDK9wFgZEivGnzUDFpZsLpn4NvtE4sHYsHu7QY2g9PnDS6EYt2J3WVy9QBjnfQhnuKD",
  "key21": "noNW4q74toKxYUF7AbrNjzWuHqUNwUUGr5prvZgz35t6iZjoCPMn3MEmREyGVczd1eQid9j1znHszpqknLdKh9n",
  "key22": "2TEmzQyKrGFhH8JB8T3cqW7iwYaC8wk3PYdLc9vUN65o3WN2crR2B5xnbPEqeBP2bE9VDyyKzfKbwKxoFSZvMk52",
  "key23": "3sYpzC8PGhT5jpwNmywSHCx6wk4F6AhYCgEs6TFxUyicabXpRtUw9yj1KwwF9mKkDEStabWpFR3dX8xke2Mbq26P",
  "key24": "45uGNCauxukn9edACLiacrKVxAXUQKpqN5WSdaU9XTTawwEPFWk9YF5Nmtdec21sLz5EsoN2cdRTi5UKfG1FMNPW",
  "key25": "JXut6TyoHRVCUTvcMFzhEac76n71UaTKLdWtXVDCrFJNybfK76KsTmmacaUqzD95D36LJjRdd882gyUhbQZQ2sd",
  "key26": "55EETvnwEiFxAmMF1oTeC6vaRbk6DnmqqDo343f555jJXSCMzzJJBj5K6A7x3VZaqHV1shug9QJwhEkNKUT6ioTv",
  "key27": "5o7peEdxnEL5xgMJvkYGa2LZxCzvDNoWoKBxeVMrwAkktCMPhpiwy247HWiUHt9xz5S5rgiEjqLg5zSwJwezZhtU",
  "key28": "4zkjFZ3qWPD9cib5gzpniQgVJFmMHrM1S3tDFyU7owuxCAB9ppFgTKLAomMtd87pkPAfx8C7ktBd6zYxvtf7vGGn",
  "key29": "2cMmneBMiodfzj1Qf1FZoV3LpqZ15dxdkb2WCS6pfRaTBg9BUnob2kLm3iUDGLGTRpZ7X2o92yZtsjKzqVArNHMv",
  "key30": "4Fs92kTCGQTJuGT87qXASS9ZVQNyfqUufmEAJGGcbb3nCkVaGRyjFybibNjfE7B48hoZqyx5JWVbxDB8NKbseGzR",
  "key31": "2MpgMP9TukNKNnbcYsqAVjB6Xe3uQkdVVZ5sPBmNxWGyuqFPxe7bgtDtCJ6DoDdgjXfaeVpGLU2Q6QuEpFpNsjwD",
  "key32": "4Sfja9hxRfdEUxMPi1rn3su7w9S7Fx76zJ2mkPAYuhToLsBen3PF44DBtvUMh1h6HWjdvfMoXdBPHe8wLzMDt83K",
  "key33": "suTYv68mFkd1z2DxEcEVkyx2nBYNtbFb1ZJHArEVZpgaEu4Hxe3n189JvU2GfAoGd2M5fz3Weu63J23QnSGHprf",
  "key34": "wDUe6Z2ks2JpBPXbTdoS33rEMkZNJAbonUE1B41GnsQ5KtwGPzUkaMnBJo4aoCdiXhmwqBxXsw1VgiadMmYKaV8"
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

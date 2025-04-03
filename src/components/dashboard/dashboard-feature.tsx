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
    "rNL3ubKFQUrLp38QAJJQXQers8ykWFKvTxJiowaKt36q59LECaokbpB3uCrj8ggGHEgbpfwASxuQzsPkhYAPBmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7JcMwnZN7S1wpZ8JyntzVpzaZZzUFcQxT7Pr86GA1FCDs8E7ihZDmxyT9Hj12Xryu5Mhigx32aps947hvuC7EW2",
  "key1": "2nsCz8rwc6Pfyg723tGcKSYybHZpgx7WVHAar97NScBA2GCEBrKj6NEyqTGELXtZjiLPKEPwU9QfBtqLaX3PCzYr",
  "key2": "5xrGVdCsezdRmaQim1stnkv6eh5vpagjoyNKqVQhWx7hm2Wi5khr7AUud7PB5HNYHnbi66aTeX8CAtmx4PFnvPAt",
  "key3": "jrM4BsQTCKS4brF8B21zVifSVP2LS4tihYwB1fpH2GXDLrrWjz4wCXgUiUkyijKF3W17SPfF9aNrAdpBEF3ErD1",
  "key4": "247foUNaesRRjahd6Anhm5T3PDZPvbizidZ1Lnz2ZR2aHD6ws63By7QvXd3mQem68t6XsxswGDnqg1JJaGV8btva",
  "key5": "mJHU7BUfjxeK36TcyES211ysxjKyde5AZQ5wWaTK4cz5QocKNc9gCH1GA4WwpsfhyT5finY2aTbG8WWt95kUSDk",
  "key6": "3ZUiN7uPVkPu717Kbv918Fjz7TY8bFVyvCDEoVr9J6YHtTc52ynVmAffZzt4aXE5L1vidhZ1aiUacgauy71ayUSR",
  "key7": "J1A5gpjz3BF6WcQRsWZMXDvuovfmrXihrdjQK4BqUbsMWYREJ2NNJguSJg8jrkzVVvrmT77vPqnmSkPPGMLNwXF",
  "key8": "4PQqXjNskGP8vJYLp6zDuDVEaRaFoMe8PBV7uhhH9MGCztw79bUzb42xKhgR9NqYyvLqqQeb1Gds48Dw2mEu3cr9",
  "key9": "5iyAqn3v1pg3k2si94BxpuKP7D1juXnWrszAHYczFmf67TL9Qb4KQ2k1hwZF6nLtfCrXrurmd58v5EYg9Tbe4M8W",
  "key10": "3r2DcsHRbGdHmkgdheMq7RwCkyYx7PAFKM7ycku8bJVwmX78k7tFh4aGuqMcYEjSmbPACEq6GW59hyCVUvJxkbzP",
  "key11": "5NHD9syCXKhnLij2R8AWBguPCZjgay6NX2ybyLhB8e3peQtH79ko1SQ9zT3k3Jf8d42ddq1PkR6SzBsDrSfNymde",
  "key12": "jngTsQ6En5GcngLgLS3LjpKXi8Zafd9ojKcMYm6VKFiHLwnSCgupwCKBHvttrADLmrJLLMQDyyCZdzvgbafpPLj",
  "key13": "3yefq6SzRydaj16zTrKisr6T3zxWbi2fKSgMMwXNm9pTp6NB5mJHhPdvWwtJMGQPt1Fb928dtdzyoXy258Woae8g",
  "key14": "q167HExZjkXu6qRBE7kjyGJwqLb7t42CFdcNNyMdHFp52K39FxBVstZwJW8fpbAAuspNz9fzWKwGZ38WRfQC62u",
  "key15": "33K14iEViAZJMpEcbuUGqwXJXjw4HuURzKmDHso4yqqwVLsbxZ9pzB3ZjUNAsha9KtXmsMJ2YkjEKU1Wx4sPpiS1",
  "key16": "4Kd1Vtvg5Pwyxv8p1YTPMLB8UnPuJwZbk6wGxqYiJy4kHXkfKQrh3Q5wgyFyXU1kvmMUKy37NtZCWtZXkSUmaR76",
  "key17": "2jLzhceT5vynQ8pbL4KRPn7ALTvJigeuVvdSFuWW3qULkXNNLqAUPCjWXcHD3ncERkCJLzPmJioxfDN5RE4M27fs",
  "key18": "25TEmdKnAYY3MhmBsNtNqMuueWvLwZiXk9XaCKd942h5do3fuZ5aLNT7UVEnP6ecjMPDD27HwPHRcsn1EmujJq78",
  "key19": "2MfKJnmRF7VQNvLZTdpJBEijLWKXeSyWBqKr1DaLnJSDUnMbieXfKfXsvBsJuYZekU2CXPyt21Hb7p4LmnoNuYm",
  "key20": "u4kxXLhghD5hySXwY3sVh2iRxuBNqEpKZMkPEEiX9iRUENFoPMGEPNSgNUW1CUNus5V8foxaT8JGSyVQo7eyYyH",
  "key21": "3PPV5odzBDESe2nMTpfwncQZk3cLpvisFaNrXwv6NZZgiqwVRAPGkaWeudkUdh6koqvXzrf5V1wvmoemMVyfewpp",
  "key22": "3yeKdhPXPWGz5WFzKyZEjG1uUdHcart74sBTuZvPWPe84cMUPVDUKeUJKA45wnNCUY5sVon1S4K9bum8Je5cbgrn",
  "key23": "5JhL83XFzcX4NTALjmTgR3CvmkHDPimZZb4s27GpqCi4rLjPgcesBcGm5XkX37gon4TyQbvNid8bXPxqLCHyoR7z",
  "key24": "462uh8uGKBR5t77Rs77pLzuodMFYDn7quArZwXdBjCV2c9KWvVarbdRozJgpDgF37CzKVGJbdCZKYfsSG31MGFg9"
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

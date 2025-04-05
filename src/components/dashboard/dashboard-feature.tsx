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
    "33Euppdj8sCMDiPWum2Lcddg4JiuiT946A3oFwtvurCUqibpUHKMvSrqmQW2wb7mpDkeRTy7R5qGa63WiJNehXo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7wzSB5rsAhvXyNTo318dErRsrtTsnGje3n4NEvGVvEBe82aqwzYihePc2m6GSvKt5r4FarAifh2Q1xtH9nWDyw",
  "key1": "51VLHSuSTNjcPpYkYzJNvDJyaAmpLNiCR6Q71UYGEUFCCteZDSvApcbSiVyRrELPZRXKEMbpNNZf5XfcJ5CDPaBJ",
  "key2": "61y21JypG3UfPmARoMJpcP52WnndzF4zyFsfK2zp4Tbet23c3fqL5eLriK1fj11HMeZG9CTNraZVrcJ79nDRGWrQ",
  "key3": "hEnBE7mfiLohP7gyEeM77po1taurivrcoMsoX4Cvc4dtDWADstyiQm1e7R7KxHQ6ntiAj3EX6pPxUfhyXUzt5JD",
  "key4": "2hzZmhinpq5ByZrQzpfUyVAM3z14U4wvE8374JqVxM3JSnPJFEYJrJwJsPR6Tv7UYZSEGFj9Za919fM48kFJNAtk",
  "key5": "666rLFtQGMhCVuN9Z3y4cG1HrhJY3FcRYRHUX4MPVCBEh4sBF7kGp24EoeckEBKP41wor3nNypXrS1CRmHBgLsDG",
  "key6": "5sM414DyrApLNKizVo7AHteNVRdrrUo9pbob6Vw5hfTRFAJW1XsSxk8gp7wQhdGkWyXNt1ZsxconGzswocVS31cs",
  "key7": "VE4sQkJvX5wz5DhdQZU32HprojPJUdiqyFgF2w5H7mVi8qSMQg18DiWkrksF97XvZZekEA9W9j7z4kk98eJ6B7d",
  "key8": "48xb6iNq7jgpAxkKxvQdD3TrDoHmS1Z7hB6XAT2djmvVqjewecNNBE8LAia8tnZi7Q41h8W1hUCbXwqbCDsXFw2",
  "key9": "3hLYSpVSPjpYzp6S6DdiA7FDn4gi54L8hxZk7FniW1ADvCad8HhpQghmk5DW44L8um8FX1RfxMqAMntaZgXCuHX2",
  "key10": "4a59hFL3nCz87SjxyNMKmuZjnYfT54AmEg6XKLodBV57uVc39Jg1cN9p3SDev5qoTjerPg4zPcJaGkN3tNiMaKu3",
  "key11": "2uevAGYjTi9wFFTPbyHFeGdQMf9K6rcjj6ov5ka9oZ11XQTSFQXqZvh5x9J1pHJphXyQMNC5n9c61ac98wFZRHnE",
  "key12": "5k6HQPGTJhZPn4RmQae8sZsKoveAZ9Sfyt2kcvoZScSK2188HXiVRfGSkmFXxrWojdF3ms4edknkUHZcmJnzTCku",
  "key13": "nHKjnrHsWbaG936MK6pZKWFbbKEYe9bvUu25FjSyBp9Ae9xAPZteFBid8AgYhA7ZiBdVf12N9vhoyVkYpQskKiG",
  "key14": "4BS4ZvQ98okEsFgLkrHdDD73dEpzWM1ySMZj4pLMC5YSgBgp1Ny9N31AhzZq4MTdyiibpethuWCzoNLgSMTtA62G",
  "key15": "61bcsFBBiReqiKgp2DxhVMYVyF1jc9PjrsaX57ijt4TeGgB6Uxi447adtbuQS5U2ga1FZD4MJicHAeAWBnzH4mj2",
  "key16": "3MMCZaJonXLjvSV9NJzzt7nS3PwhtfinjBVcnEcbwfQ3Y9rycR6L8GNiQp3vLAVWh6BtomuUXijnUm3QUg9pMcRd",
  "key17": "DFQEE5mzY81dK5of82L1fPMG4DCFkM5z8QbdUZHFeiG5b8W6EvmRvQYiNq7mNsQvFX91Zk6Y5jE7i8DgZ8AAxRX",
  "key18": "2ptyXTXogCZUiyQi8o7aDv8Zma2Ufde3ZLxbTMGm1Y1uaWvGJYHv1imULh3DrrGBxFndL9tufKPCfHkQyieRMPbE",
  "key19": "5D2DtJ2BJxPv5dXT17qxh7xb7naEeBSYn9YTxjWpB7cVLoEcojrH28r7TfA2EnjtpVGyPArg1JVd1pHGrGCNiNBp",
  "key20": "5ULovw8utktTrc4Sn2ZDdWLsfnfHCoXLGx1v7DTirJwNvrZGGGNjfBzXfRj864Ns7dVvrBxfBpXtgXf653gL2vJq",
  "key21": "67BKaK2C2nMMfkGDWQxJMULxtW2ATckfQuhJYAV1iYLqsKP7y3TNwuwG98fndJ3cJCZoFMg1KopZnCW5XQjPFmq1",
  "key22": "2jUe4WAbY8ot7QtjEZbZAyrsnZ4p7xxBcFCFJpLxoktQ9NscwBjdwWq67a5sjWo9jUkT4YA3W8P2yjVhWwyCsTDS",
  "key23": "3MvBdX48PsVHjy1FrWY8Tggd4SWrFHbZJbtkmb99BXQk94BAKhaViREoZxCcXJn3mdExJZkKdAPxt1AoGqueCz65",
  "key24": "63RXRdxibxAhR91V7wgUpYUBob4Hcp2QgcXuJ5gwiE2MBmxiMMvB9TyyGWPkFSfcN1c1ZMJ4mKH6L7QZC8pCkJEm",
  "key25": "oKx5NrxRmsQtmzpWXZ46GJUWWgnE6PPDRpvJTsFHsBmieqipzbhjfgtZLN7A6qxUuKjFmk6jEtLWKBix2qAuuCq",
  "key26": "4PZbTuaainqCP64PQepx9SPx6rwuqgjk13qBx9kD1dw66r27q8GxGVxUKkuNo7diMaK9aiNkWn9RvtjCCTVsX6A3",
  "key27": "4ScoqKERxisKfhSVT2nSSrCzFhGVKT79pp2UvNRi4ESnqZ9LTzr8X4EkQBUDmy8mEAWAQVhvdDizm1i3omgqXPii",
  "key28": "3WzNB7FXva3HrXhz2apGFJWh91rk9F6NT2CQQXAccAiFmaFvYqsenkMsuCGf4VYPM6E76xL11NPrpzMmw9iDsmP2",
  "key29": "3mJWdXYzHgnSz3rDVeEjfRyaTBPnpQegQWBe3rxhBPsnpnfLQEyEKidR6L9UdZkSykH5qPNpuTUjUaT7v1ydHHKA",
  "key30": "2ciDbLqXPyBnuH7cNcfC5u75VPPHZnhP3Hn2J39AhLGnGNqqeWaBmkQ51443RW9aZYht8dC9v6MzCgi3rPuk6YJL",
  "key31": "52LiQ2BSYFY5CioNG9wXRhBMm4qLw9G35WZty8gpW1FQZ2kDaJ2CH4Bkwd1vtAUXLzQr8Yj8yVc4yBiM36kebvcV",
  "key32": "22vPpm3uMWGoTtmBd4gjEmaatzfg9QUjuBDnNpXiUa7xwkZzRe7Hy3fRxZZ1g8dsf5ocdxifafwzChPren5Faukw",
  "key33": "3wmn5y6LecSrTpDLzoF2KSvBVkcHp7J5pYw4qya2y89A5whue9JpdssRQ5FNbLRhXqmGPpAAuKiiMXYheDZf7Ct1",
  "key34": "2V8gLJBXDvfpqmK1Q6BDMKGgUwXy32TxJzwbcVBj2XcV4zziizXnmA34xtyJrUMXs6cHiopQVa6ibX5CMhCgGcwd",
  "key35": "3oeRVCp47s5kVE8fmH7H1HMdU6ZLYizntCj22RmmRk9LCXUP2DbxSQXiWVxofoeBaTgSuJYLV3fkBhqVzsjyDnoD"
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

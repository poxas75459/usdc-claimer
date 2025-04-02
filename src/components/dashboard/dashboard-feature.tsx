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
    "3737j7EYzYAUVLxT3r5fUbtwsnUy56LN4mABnZQJabToLYoX2gQDhrh7mftviDviyCM6ZhKdVrNwsX3YTYJb7M13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKXHWKqiaJBHaa8evjDxwjAUeFb7uSPveC4NViWsWhntGe4e4uNxEJMa2Ksp8LE4GYijAQGRv9Eb9AECG663Mf4",
  "key1": "5s26AJJUZckvUcySZWL5w88upJuNHqUpXLCo3MRzo61VvZuvfXYfPDZiEuQqH7MpDJGF1j7ujG3Gvt7fRMB9LT6t",
  "key2": "3xpYHaaKTxeETCEbJCms2ewTvrwmGm4EiisbGqCj6bx6hXd6RmKnKi1waQJUe1XVjYYeuu1CWuoQsX6Qsabcw73S",
  "key3": "2Hv3pamTL6LvHMPg1ezrDVrqXuJmbm22wSHCnwcc2gEJvVqvs2QVbfxg21r2hUJJjuNaKBn8TbBoCQ9CnEr616do",
  "key4": "5Q3BNk6SSd2Ftq5Qrz7jryt4kAwMmKSrKN3cyrxXaBnRcT2JWczB2FnD17H5yGLDKueT1TLv2QiVoLLSQzQcxHBu",
  "key5": "5f6VmHiUpm4PXaMUFc5Qt2Z8MHSGJ7XQcRCfuRPPLcyyqh7iyDUZciFRQ2Fb1oAKsHnvVnS79WsbCvXh6G2sJ8fh",
  "key6": "39feuBifMzQ7XXKLXXhsfdJ17A4mL9KoWqHVafatwMoanF3T1atSow7YmvuJXRgnKz8Gvyv8bYtXwC4Lyf3vW96w",
  "key7": "EnNibKY1KK4KN5zWr1UJQLBzaQutdwu1FTzEGBjgB2GvDdrF6PcCWco9kJ1yssR9XzxN1Ypi5Rnhov8qvhPQVFK",
  "key8": "5KJAgQVbsTqf5iVfpRQxxUz8kkmFFYDD21zuy2VVmeZDeLKHXLNNba3paHpt9qv6XFwaSXUuJahiRf9khxtim2da",
  "key9": "5nKXjbgiyG4Z1kkwP1G6CkYezvv9KZ9GDE3A11rSVUZ2XDyrAUH7aUCPiRZrWgGcd9S3NDZFpLfGJDsGqCf2B25S",
  "key10": "5Krtn88LoHJGJ5i7uPL5yJSyFYD1yGEtf9QoLSvtWmJsZ2A2Yq1BhrCL72ryDqWB8pbByW7Nfjv9KAqnEKj3npWc",
  "key11": "2LQUSc74gFX5hj9VAwGRXVpXsrvxEP2AD2vx7Y63Ww73TskvwCWrQuSvzABGep1gJQCzW32sCzuvPNdyndNHoDJy",
  "key12": "TWHtZY18zigYqzvBwdkQCkp8pHdwjgmXJFh7Jpm4Rw4dqXDnW5Avy8aykJ74krwrMbXF5Zq7xbAdrRDMP8jAkbV",
  "key13": "2SCQaZLfxsA4LAEhSUMhdgqqD1MXikq7BjME8HqR23Cj6WroXXWLU9BWmNRxgmhhrHx7hCX67xss3eLqQbkndv7U",
  "key14": "31yiov2kpYBf3oJK7WGiqbS6wTw1cERJxaVWQxD9yGiNQhKqJFj7cR3cRxhKKwaqyRoDohavBwc1EaKSokd8kcPa",
  "key15": "4234rCHe2t6DP3X7d2a5SFB7Dk4reWmhBfWi76vf9LQTCxbxHqzUbRQ6RZKMYL9JuuV1KUgXMfqWE3m9ZEoLbDZn",
  "key16": "4wyQ6cvgpVhRSKEGFnwsc3t63fdeoMCzT949gVrj6b6onYfFcPp6PK7HkPQyE24enF2Bx13gtAKSggQnMRBURzvV",
  "key17": "4xvse2RNbfagpVZFqAhuNLYLFmAL7fkdakYz5KZzwEzcg9ED3P1UjifbwDFUMqFy4k7Pk6yr4dc94S3eoGYaVEeE",
  "key18": "35W4gTJBZZL21fK3HSv8cCmdRfwLUBzzECdUWcRtL5M7LAsrJp4UoAcGpXeHwMYAPVyVm1WnMoBWZp4iR5pcm82Y",
  "key19": "5TDCzvFFfo3f8Vtp2BRP8NdxkYsRZgCCdXfzkXZznqbXTRPbpgDcEbUBFuPowMCzKF614PMAPvtQMzLQJfJ2ksQ",
  "key20": "i29JkWA8ZfPv8kBToHhbtyP3jmgmKbpn4RJyjSP97w22RYR7frMpkz7hXhHtyufYcJmbwAeTuGQeXvFLRPi4X4a",
  "key21": "21vj4aC7MnDWsxHfrDpuqtjUzgUjadf5AigKp6WgG7ZYAY4BVY6Vwq6RZct81dTyPGjgki2kCdzf53L2rSyxtEcV",
  "key22": "c8wmwPjJ7JYj8aJKPSDSd32w8pMQy7NiayihD7edMEfHHp53wpeTv9Tc1piwX3yuKVTxqerNH9k2rTL9WHYZMCi",
  "key23": "4dj1hN2C4ZyqszZH4iHyUbZPJBkCcFM6fDcGkuyqrYboJwMwgfA4NEdQKywMT4TqHVYeifHsWK4WPWeVBxxcXEVP",
  "key24": "ry1vA9UXUu6BXhRNz8KG74Yw7FHDmTaCDZrKRhGmGCTuKhTyDSmpehfQPvMG8GJzurRyF47UQUXMBXbU6SfiHx2",
  "key25": "4RY7jDpTiZDM4FzJDu3nRzxqrAwJEdBXEwr6rBoxyT1BKoY38tcVzBZeg96E3wWnaDZBoNdPzaGbfwrGjpMAu58C",
  "key26": "3p9wY67JLJkka2mnpFGHb6V1t8wSstfsEqutrQ16yhHR8dUHkUoYQ2iRkDYT4H6Aqv7pmQAuSmqbhUNFQPxWk9Mi",
  "key27": "3oByv5PfRb5LRjbPrjqivb1tAshVv9VdRBZcJjavCwVB7uW88GeQUs3EUEYiSS7tTVkiJcNYuSioAKVzW8ubWi8Y",
  "key28": "5hhoK8Qrrv1KJ3pTzkTEA33U5oyRfoAFptueHTNTioDAvCLssFbAkPqpGnA5eW4v5tt3JouLUb2HYwoWsLABT5vT",
  "key29": "3m6ib37knEcgRXe8Qpsh2nvLYda8AyRuR8eoucfnbp8ee6qZDbsBQ7h6SWvKGjvqZFfDph6q2ytuBdRs5jiG82np",
  "key30": "5YyoTS8iCgMKDUWKSr8ZH5uwvJc8uvUPnseZSTiUi4awFyWxXRP1gowGgkkZeAWKgkGUNEAbdkYGf8de4XPLEdyb",
  "key31": "3fHAGw4j1vsvwYLj8ZnJWoadRtPaxkVcZ8eWYhSkKdhConT1eMf5w77jf1drwN9ye5ze67uNcpJbwzmkptHRFEB3",
  "key32": "vPh4LnEH14bXgma5Xjm4upCbdcF7vp9KDmPC9sQS1bT4jtazja6EgnVEEPPPvxzGFDHZQFCPE2XMuPQgLgXPkzH",
  "key33": "3ZhvdyApKMp58iWySz63p6gTf65aBZ56Ehr2jGyKFS5ofi9SjoNuFLidhsTMniV6ShzBjfUuuzoq8g1mjADhgsaZ",
  "key34": "62bUtxByXJyA4LcQHmtuzGA3GV795mAEN8SqUxUWqcZnrgaEpfn94DwgLKsUtmWrTJn9csAyoFjGBGA8LDvg2py4",
  "key35": "t4qRTMWyU9MkWjZf3t83y6QAttopBySZ82oJpsgjD7Wz8sxAq2DbMQCDmTYaJaGWeNnC1TeKukQMwBAvVuFXyvc",
  "key36": "4vYEXNj29gLx7c8iSsNnWVGH5U1WhYbadVhpFfYUZyNYJMJKPfcLww9rWD84EatyMvR9LB6sdKFaBeVaVpAbKR6a",
  "key37": "bdb57BMHx9NFq2oKH5Zsj6kuXgd5jtNU2ZhnYhZcdt8gtM5QAdGUkfQiJjzuH56ZcKKsoe1TkhUAGAAEb7Trb5X",
  "key38": "U6o4GCPMJQcsnEBfqyy4UcDhfaPDxvoA3MtA9Eug1mqHweNWHrTCcm7YnmPdqprG8yRduevNxYRs8uKVmkVtvbk"
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

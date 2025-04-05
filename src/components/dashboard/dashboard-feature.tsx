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
    "5BJq6QtqedXBQaiKm2juumhxpDwMoLovJfTeKqGv8xMYAzfeWfDoK21dLugLSqpUxXSHwasHyjtm9BcpuCX2H3Pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34oo4foecCnn5Tyk2DbWBeijXtCA2ybJq7hp2syLo6WYm5Ac1SrB8yd4bctDNLdmVbcGALHnPgKosJCqGyRaB9W7",
  "key1": "5dDCpHetUsawRd33d73Hf9XZxDsh1Jiq1gMABbXX9JVjr5ZRDHCMHt1fny2SGbQnbfrjxcfPpwfDsh1putS9aVHW",
  "key2": "3mW5RwaVsbhWksePRX64rDHJChi1mQchPapo6wtfPvAQAzoC8MwtJxCUuY6YpJDbBXDAS1vmFGAexGBEP59tQvZh",
  "key3": "twmDRCrGfP3RHhPMKkZTrhSFmwRDv3KXjizJMotnxRgATRxpsjMbsb1dCH6PfFgqzvaQFJKMUozY4ZgYesePLTo",
  "key4": "2TZas8SYM4vXhHnP1nV3Gtdjvkpg7nVJX2jkHJtk7YDPMm5yYpaBM5ApvKgn6kUX7mYS6QPzH9b8fA6VSsYZ4FSf",
  "key5": "53qcWVUFu6jFtouP7VkKqoeqkeEAeEUs3DCB7ERNPsDProyvf8fYvbK8VXKuTrVzjMMyS5Zt5Hx6HB8unQkqFwUh",
  "key6": "4R8A1jB5z5qxJTBLD3bUDkVqYZFAnFUWdtVuxKD6QzFCpq4zVoMwPxPHurvWrAeqhkVUWBqcvRYdLWSZCdXXRffh",
  "key7": "2NcoAHSK1uLerhVFk5j7MUwZmAi5TiMCvRX1X1XjNXqXmxiEvzVrpQiHDszFB6AhYFbW88v95aFtU65Dd87YQEvy",
  "key8": "nGcebuYaJyyQMd3ZL5EYxQtYsma2MYJr29AkfDsYoKSZF3McMdvLyigtvDcTr48xRU88RTkTTurmXeSiJygWfor",
  "key9": "5JMacMp478hHePWmURCALEpcHQ2bLCXCtmXqZYyTzGRo1VbDoT3iS3zvE4tpG5Umy7iFuRda9uhDUnwYorToBD4R",
  "key10": "4a773PYvJ7Dgfft7pRkT9pD2pb5SNKoSA2EzsH2z4VweVj1JoZjunWwhA5crC3mkRE1qgFc3GvLcgmHwp2zNVzyS",
  "key11": "7L1nBXyJZxNtGJWcds862qRpPmL86Y4PZNSFiFURzPWTvHuT8pCgsPEJqSD9sSCAZumT7hij6zBWUQbddBYgjeC",
  "key12": "4ZuEfTTjCfFQ6Dt2bqiVQfof6tVdk7aX5QL5Sm2bXZiaUWNA6VCaiTijt19rfdH1NRQsgeuFbBrfHnXAip1wxPqW",
  "key13": "3GVLYcHu7N9ikP49H1qLxr9QkQh7gga9sN9eThwHWfzNZmTHNXsU2JxDBvzjsxTJXv9QPRhHJ1kTGTaaSemNnH7k",
  "key14": "2VZTDvwydzFnX1NP41Le9MeoD8pxH9NppC3JS4VkLeacaTgKNPYJPn9rBFZ9wK78vRUvUt5MTj8b1PHrC8YRrdZh",
  "key15": "4AnBH9XDDjeoY6LvnZStY8SxkPNCVxgxsxHhiDq1S1xUte1YGiceDHEQcGW7mSD9WojuiGCrVyd5pZKPKyaG3rwa",
  "key16": "4a7XEyk4s9hoTjoSTPFdnF6DEcn3cLn86PXxnegXRgDinid5hNVEz3JWtBiMKJbzuQwbdfq9AqLgtkixyaCc1E5v",
  "key17": "3mW6CXjStxbmgvGM8G3cUuzoKcdTZGgoWxtqrWvgwvLNT7GjQpmPP5TZbzEfo6Vdxm7u6uiUzotPsjED6wMpZHmk",
  "key18": "22E2WvhwdGT5W5LnWf6W2Hb8Q6HXpjLbpeW8yyx5JAAu9vSr2HnvxLfCTZzPS2Upr4r5n2KSrK9S31ausZ8rYg1E",
  "key19": "wQoHdz6TsHYcnmFX7AdcCGwheaVXXJbtex1zScpgSgPqn9pZYgkgF7pZt5zWYw4CTrt8GWCxBJDYvZsKYizCGVh",
  "key20": "KUZfNTqmx2v2DZtLn8z1YVE4F3inebFzUNsaW4dvqssq15aKJwPTgZuqWHGGRoqNdKMYGKPZZUwGkK2j1PwTjEV",
  "key21": "3D7WdKrGop4o7JWzNYFnxdDdnGMAgBJ9mV5qYh3rUEm79tNBsdW4d5o3P4su1RoYt8AUnMVSKVHPQhhj7jKSDuq3",
  "key22": "4nK8A8yHi5KsvYbKUV7VCfrgwxekay3W6gNZaPJphC5gXyb6bFZJRwpW9wU3w4Hpj1M1rvNSgf21e43JG21QDvLv",
  "key23": "4dA835Xdr2bjgie2N3846rsB1FBhD3uR3stjiYMHiDycqteP9VnpY3aQq8rm8LsoaaX4fmJAj3AwLg77VY45eV8p",
  "key24": "5D2k79HYLWMuEdRssr87T9dDjqrBLkt69kNNJvD8jBvMypRhAC82bdP8f9GczDuUta9i6omBsCCG1RaAK9f3EXZp",
  "key25": "5yJtzAZ71CU2qsFW6Bh8qToPQF6M9Lb9CaEr9sX2os2Xzg3UyKCzhTsz3ZvQA3H95Sz22igrHeT6SqR1ZMzQSh8q",
  "key26": "48QhYECbAT1e8NZftrrXC5woPWEzVgC3R8L8Gp9VdrQppDwSKjjs98ZRCrTyQecQP7CiynhKjQSEs7g5FsEtgGs7",
  "key27": "8VT92zfAC64BKhSiNCgKKBxKbCRMprAyeahcrffMyNNphrzishtE7hypUAy3n6G5Q6CEaDeG2qEJaJT6V1bTGWh",
  "key28": "3hcyCanSXE6fg4Jh1fL6pWP2rrqUkcqhTGDSzKajF86q4JzH4mm11FYBLPRU2UR4jn8RCLy6XxLbGTxR3o3RyARN",
  "key29": "2PAKucVyxpZgTstxuUkUfwfDEcN6AJsfndYm1H1BaU1P2bMNervo8vqnyCECBS4Jj6NUkGXwdo3QP7Pyfr4r2MSK",
  "key30": "4ZhKvHTsDsYfhQjcQFPumKDLdmzWY7vWw1cDHRCrucs3LGMGpsM5hZTieFCLzsp6GaQeuobs8erZwV8Xg1gV8yHQ",
  "key31": "EGyzYyRpuZTKSZXUuhNod6Z2feVtV4QNeDLVUCgnxEJFBnhb6G7TBiaDjM4paY5SZcUvPPv5j48EJj88oREzGBc",
  "key32": "569n8A52gSxt21Q5pafJU6ZTgCjVotYykhv35ySPvRpBpLiG61n4tjfQkvYPa6WwvHQD25TzP9aaiYg6jSsgvKsp",
  "key33": "8uiFCBhUzxY6sccuvSXj19WiaJynnxWxz3zx9SniGED7tvVDy8gxX2VnJ7dhJ2M3WninSnLB1CyJ1qK2ukmgUL2",
  "key34": "YzKwMH9hZxcbQoCSYrbLbGYDjWGDe9G8HwRes7PdS1sAVg1rKf4H9NLMU8fEYv1DzNEzsGoMFjm4SGTkWQgNzyj",
  "key35": "3EihfV2MTQys6L3vZPCB2gKb1twHDriZ4RuHeo5QPSNXU634HU6P7BtprsxYPWLZPJSGiKn4HqJaXRZF5qqDu9L5"
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

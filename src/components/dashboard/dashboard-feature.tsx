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
    "3JFPUbBas8Cd1bnDZipkUrEy3pybVSHcbJnrc2wtiAky846bdAm88imZyZVeLtLPDWspi6uikaz8XnLa2nxU1PY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bF3hdACXUu8pPaiek5VcqDjokGvgWGFbCmDapwY5ApuKmDV6zaWVdjoZritNKprte8HKLANgK5GiYJNPoSDtwCQ",
  "key1": "4cfL1YySE9PPsypnm9sgcroW2tJwXeiMH94kWWM8ox52qvWzgm1SzZYg1cf5rPopMCbN1cUU5UzdirhhVB69dSzo",
  "key2": "4dCwxm63CpNRNak2jQk94YML4cFHsxspsJ2immMDYwWHxYupvT4LJghrhvqkq1odxHh6kVduK6jre4QZYbivXC1N",
  "key3": "2HBTv8wSUXdvh8iNyjghVtqid9GRbMuP9cMPyVjszHLG28QgBiVjFAjAzot3D67MNKqfcfHZxR9ga7KbyEyeybjL",
  "key4": "37rr1yhzRULGEuJEk4t2Dk1bES8LXuzKtShw3rn4ZH7f6gUVMtoFs2eFtNFZppZ2EqMRt2Kq5nmmbcHNzSvQd4Mc",
  "key5": "5wFzWjU6SmbbeN8H4M7KmJ6T8jEiYn8fkJzxQXL8Xb25o7qRK4YW28NHxWKY3AqNuY21iKPnDgUez4SfB3oXRL6a",
  "key6": "2XnLAxpM6GexN9k7viPzXKSUBzvx5kDQbjSLPn3jSrJYguqSteJykpUVyG5mDYEjxPzqweLkx8Vo6xRhGYKFLEFw",
  "key7": "2oyijMgJwrHjPhvrESRgj8x2pTkL8fT3b4pULhtYCdAZfP7pLiJjuo9XHEqy29FSm1hpijRLmCWj7MNSi68h4mB3",
  "key8": "4SJLJef9bM5N8F2do3MNUV1ZFw2Z44RbrSTdeUUphPPp7mf9mZZuQkMy3AipoBcys1XvkKURay4zMEqAbGB7tNTS",
  "key9": "2kN6WcsZDLx98krbuUkK8TpZaSRFmNqYMZ4fu2wvZ66S6yfqbcB3VQzgcXd1rPrbCihxJNzQqExBCDuo1PYm9J8H",
  "key10": "4rg4ZkSnfg56TF6DMiKJj3jgxkbRZtxh4HUuuyyAHyyYUe1b8dGmVkZHVD59Gv9NvRD6KhoX3v41hPuqJn6hpyPF",
  "key11": "4mzJdnGvTnAqvMDF84ME3UEHdxUd6Yf5EkkkG1oFrkdiUKVVpqbLEwdcq7tS2Xk7ktjUS4931Zr2ubzY2oRbpfwb",
  "key12": "4GJpj1D3FARbTRZrPQ4DHZsetRsJuSAopDjCWUvibeuypBKYHbQshcXAmibUPWNyrGkqG9A9YVPp4Mbvw36DE4wa",
  "key13": "2rCGHYNuiqeifFeFZUaqpSybyEkWCK4up9vLkfu752NBvxa4TdhHriFktbhx2FjZJAieLaEzAjmYQg3dNY1SG9u9",
  "key14": "2C3ebTJZdTGFfiyXFq2o1nwt91EFAfsBXQ4FSCHaqubEHLLCEmNiDvkvQLkP1KLvuEJGy2uRW9QhxMV4E9wNGZDR",
  "key15": "5t3RcQ5EqMWGsdXSWFqX2tnHdzjdWjT2NknNz5p4pSzXP7rL6eAMrw2Fmc3BPhEkUnhj7MUJ3p6RLPFjUz3zwqY9",
  "key16": "5MQY5tCtG8JgGwUi9fzN62kTv6ynuNwDdGcR3cWF39qmxHQfpQos2WKyKQEdGatZYBmsWGj7gpauVPWN7WNTk4Nb",
  "key17": "47mXukmqGhh1FRVdmihAA9m4Vx837sAy8hatFnaJMUuABcdbEo34R5bXWSkkHJykcuqQJht5WgA7PwkkF1c8xbqX",
  "key18": "55jsKt6RLP8LqfEoDcqUte7q9QyZYFQZ5g6eB7RD7rqgaZ7n5NZ8AY2iNnKyNb3U2Gw3Ku4qR2WuZBrmkEgVTG3R",
  "key19": "jxgquvKKsDs9FAdL6BfUp6zWZ2SBkNY1zcBcokiCmonVFETHeQj4Z9ZkzwpzXz22Ck57X2UxV4eKXXi7hAcBDBx",
  "key20": "3aHYALiQMe4iW2n47rvQ4BTSaQAVr3tLxYLWTwJ4sbe8Uqe1RxubUuh9yqeYBLA6hCrfXKgZBMGVcLwFsFVepm5d",
  "key21": "2AU51ir2v8aGmD9k1uKF69VPTwwP33yAygfkWB799rXxSm8QLTPe8K1ZeBcHxGGuzxFwpDRV3VfnYZHg2MKyEC3s",
  "key22": "45T5fQH7N2jFgrjahQPa6XJiLsWT8QucELgNpHVfu6fkuzBx8x8Z8QyotM2s1EkSHFAynznptfaJ3KM5csLcjLkn",
  "key23": "4FrP33ATgs7fipSDKSwZ5VSVxbvyAByDSuSaEML53vEM383rzD6Xqbziv9ZKTEGqbsq98pLtWSG77sfwEveTkfqz",
  "key24": "3XEXkL6PK6CRnUy6iHKmMpMxyLS9NCVi7oJQ7f5WLAvoRtvYk5Dxayy5cPU8q8dYUHAWDJgGdRxgRcrBQn6nx1xT",
  "key25": "4LqZbJQMwtCUnNwcCWjoHUpjYe7AnV5GUvsikLYYUrgLeVKZtmEnsPT8Faqv6cRV3wP1Nm86SQAEyJYKBJGUkaVj",
  "key26": "vBTuPa5typhu19BLLLXPfE4koEitLMZXAh7LaYDHP4XSWXjA41P1YMkvjayqjAqsN3gRgJnbN3mLndq1k19cRja",
  "key27": "5FcRovnYk5TfrAeLUyPLb8c57R3bKY7C64jTF5a2rsKYT3TLbGwAMBbZSE3ZpnFYYx4rYy9dAnmimthL3Xt8MLEM",
  "key28": "oTwKFVuWUqV7boXgec2iUiLdv2kc9JtACpa6kyd2iBemFiCqkMG7i3NoCt8zXqXyVeCbio4KHae8dPoDfcPc6th",
  "key29": "2k9sK9PQg1i7XpQFfN22ee1ksJZUz48Tf3Y46yah3RfDruTGpwYFKdGYN3R3qY438nD5UB8EFN58yV3rV4ZR1Qp1",
  "key30": "2VFs3KkvecnUpncEyx1DgJATR3ZKFpNzQxoj7Bedj4Sn7jUXX13AcANRKerSgkXisx4wqPrdDgqABseooFPsfrMQ",
  "key31": "3Zx5xGArgwTXGiR9UZfjwRuk2XubeHGtajenhA4dyJMADLwUsM2b28anfTRFeA4ewwp9Y1aDxtqnqggGsKUv9o8M",
  "key32": "3vv1Q5xCmy6bUjc9cAtnfSkwFgFhca7ppmpjmMsqBPsbN71ZQkAy5AgG68LrA3UnVGQztfTYE5HZf6QLPHVsdjAb",
  "key33": "5YbptufwRdRXz7ryCdJPkgN4ApNTgmUgN4Nz31pPLkmbEe7DTqUJ3XArCa6WFKRaGToVYkJYdBrKhGuX1SMGqH8f",
  "key34": "2s1Gbx9caWoCqDgNhXk4KoBv2ypM4QBwDSaVRaApY67uxp43gjzLNsHUXwHcW2dc1jY2gNpYCjPpY8iQXnSYqXWz",
  "key35": "55XiwW8jgopEm9Z2HFfAF2gY6dNTd6yZrFQg5AmPw3xbKimhVFT2xyMS7ff2Hw4z4bbjDErVVtPG6iB8FmDVU2DR",
  "key36": "2wAFKzCWw8bxV4nqNZ6xYuWJo1yTnM8LsgMnjyz7Z7Wu1x8U9SGcTRWkoKn4crTfbESU9QPwVVJewMYuUpTJvXL9",
  "key37": "42Cfa7bZUGDg8tzevrqsk9fpNm3NTafHsg9dWrb8e4kbbrF6EttHtNfaPFQVL3brqLem5oJ9yVmzdcWjuFvFdbWQ",
  "key38": "2d4KVRXjdMy7H1xW93EgyguH4bzvtUYvPQWXUCjyhB2PeXuF7EJAj1fKFvKJ6z2BgTZRhkiAS4UkM2AvQDA9BYFz",
  "key39": "44oD7TT4E6rDPNUxHaLqB2iWbqqWYuH2PhTVraCLHb69Z2E6MVGaqLgQEyoKDH6N5KJTZpPdiTBWog2hSLcYuFf1",
  "key40": "2MXDp7AETKNnwWC5NLRE8SqAbCFhCTRWcV4s1impeG5r5dbmpj5kRkpCsHa2AwKg2inGEAEJLPt9aUPa4PS1r1qG",
  "key41": "4drH1JzPMWnASZaDYNYYBTJhGhgR8dN7QSvxXFbzhwRHkADXPmsQWjTdz2WRq4VrqUrVPojXSK8Hn3Z7a8a7Hc5J",
  "key42": "5XxC3UBrkfTA3RgAVxPDUE1f2g4BCZ2gri2TUzv2ZDxyDHaAeUirp7sgL2a9PGeHL3Zn6P7t9VGBiBNNESFcvrDE"
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

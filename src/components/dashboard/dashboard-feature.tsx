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
    "54Bpu8cqCrZhuJhZ5JNYHizAsmBtF5iX4zpKmbghhaz7uPj7HuZoDwUciSzU9588LvrfcuiEFUiB6Xiaiq9MLLXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dHHnP7zsvQxTee5bFJ2RGQ6YHCk2kpM9Xkc239BcC3KmzFAevj6c6etJQAJwk7xnteUWGXQSAVEbRrgiZDaGTug",
  "key1": "4F8q3pqJHpEtNmGLJAvv4cGRCJhe4P5iWK2NGbe2KhpkvBwhjbwTGGfSUDNab2wt3KtA5L3ULjiVHxBExdfBk9sF",
  "key2": "4vBpSoJVTaxSdYrfkZhPBF6FEg6AbpTC6NqBZApoLsNb4fUPShYkSBGXKChvmxp4Pq6mrDiaybVNbpNHBdBjxNZe",
  "key3": "67914pSXtmvpij1Km8mZxHRhMdskuuMQgq7fNKdMseVpv2EUqL8XrSWSbZxpxyVVEh78spV1NVPhPnwthpZZv9Kd",
  "key4": "HQPmiEVik2vNwdz895aXA4wBDxRPmVeW9FZoRacyk2qXaaNzLdrE2A2uUFBJgCV4oMris1NqjR14be2ykCfDcvG",
  "key5": "49TGi928rhfvLMUMXJP9QK9ioYGjbHN2hUESH1F3c4nhJ3rU5hy7p9Uciz6uGEuRS5Mqj9U6V5sLf5RtabL8rxSr",
  "key6": "3ibWditqNGNLmgtXVRrPuNDV1aDgQZ6QLS9xZeXz3Ls3JuRZx3wd3aQEjfK3NDci6YAHnd6T8r7LM8hGwhbxPXFf",
  "key7": "4qQ7KX8EmMA6MoJsGqEb497i5njd52dgT8iCCpkHpLfQNQsxscepTk3Z7LhAvCmQ7tcz8CdKXpPZFfSrmqmLfVmC",
  "key8": "48UQammhktifjL8fHBZLViaLN85ciMwyPgjxEdw46JyexsyP9nW5DzQrFHwK1pdk94DZmjFhLLmbr4ZBL4ormRsD",
  "key9": "2RujBVjGm1xUuWZqvtnLcxTU6NSiTRS8pGmUchcVsHEsyeN2BM4WkFuoLwNJGhVLVWP8MRMHW3k9CKZNBCXnm5QY",
  "key10": "5qxQjdBfDR82VsRqrmKyVsCK9RPgXnNCVdSNBhBf4ZpGdb68m2h4s78soSbSewkPikn3fr2TiZqYpZxUGVU2tZ1e",
  "key11": "58KZJrBdc9xUNBWvNWiJ4NNWZiBzio4SkJFNKo6aDQuQDxZU3PW9dj44RF9x11oBxWMDPLVqnYVkKKtU318J6kyX",
  "key12": "4HMBUYzP97BmVGZLWcqECQH2keRWdebdCEgEE8T3Z1TwGUQib4MW4wQ7ktPYNTPFCYrGQc8xTCQ7TdHUNuTVnp4t",
  "key13": "2k78YLdmJJcxagRfn5QAn72KZgXFu7qxAu6pyjHgyDEh2FDfvbL54uCdjsw7utEc9WF9sa6UnLaSUaasLv5dHPfj",
  "key14": "ETQYur16MgD2HpDHe4r7WVLvaFjthNW7b3vYPaooiHZmRS4nQ2wJPmiFnKNwHvFkoQNHPcfTubEJJn2AtUVXVqL",
  "key15": "VC7852F5YsgRunamkESpJ9sSAhEkQEvyHbeXmasGwG5f2iWotP5MXt6g5AP5fN6EgExTp9ukVsTLeB8aj36GjNE",
  "key16": "4czAcJ8H6pPu7SdZxMVs6i5J8YqnTMuss9GFYCbtzno1fJocQ9kZ4UFm3PptgjamhhemRRA5mEoZeKF8e6h48X2S",
  "key17": "4zKMNWwbamBidTrSkWow8hbTBihM8rYvqP32QR7edEcxr22z8uFdjGKQLGx5o7K1p7pGQUGAHR3NYL4mawoomu2V",
  "key18": "nsShKh4ZQzWrnvDzrFjda6J5rmwaZBq2TzVfS8BSFbMVJPFoKqW7hLRGBBExQnrxWvJQcvkjSJvJmTjFN11TVUH",
  "key19": "4f8mGnztMJgEnMr9xDnKAMzjtJ2T2wRznXtrgEttgtKhZWekcW1pSkXmxtuXVJKP9SJCaduktAkT61JGAXFspY4D",
  "key20": "TcjuEP3nTy1mbmnQbmv1DGemy7q1xM81QatocfX36FRT6QLBEFYj1CxjNUVwzPjR2PLxizvLaJhJ4QKKfh7qV9p",
  "key21": "3zRcbVf8RnarNjWAu2LPbVbdXg9UUhb6KGWyBXYRSYTPKkBSM5Tz9oqzAZtraNDqLQ1tDH742KkDUVkSKwLNx9UC",
  "key22": "4ZTwHndyNZ1fUFVnTCqbugrSoFaki5tTy5QdoFAoUksgSqMDy1ZX9Uf6wWLqr66dAPtUwP84uGrTLJUGGJoFfa1h",
  "key23": "55Q2EVV9KdSTBG7Agx4zMNfFjYDnS3MbjEdx82xuhdChz7s5jr8BZGoZ284TGxSqPHAZ6LCrfTpBPkjcmx1h2Qst",
  "key24": "5DoGvMV1H9nU4kDymcqwAwhgJBg6yu6NsLXRgcCm2fkwCtXKhEWdm929XfypWcixCa3oEt14aP53za1Z3PZuaqyE",
  "key25": "5tgtLrYi9rv2cHN7y9AUXBLPt5U2JE5v2Z5uvGbAQ2BR7u4bgffFDRRijBj6NyTkNNpEYGMwNyFFFGMz2AvBABCt",
  "key26": "3snTrXjDeMxsUjcJuoEEf47vWEx21UgYQJhGGqiuR9GbZbJtARZDAwDsBc5eLmLbWJBUcnhZ4roBJJB9QUzoPWqb",
  "key27": "v3s3122SAsJ8q7juAk9ok78CcKYTaV6D8zUc9G8AXz5jPwkxuBpKnZEtisonDpuPiPCS4AQyv2r15u1BmnVoZty",
  "key28": "2ZyTkfmJzMbQ4LDsQ67T9PdCxdsnLiavhrQWp9vMEoUF2wxujQF2MexFHLjDAPXZHSts8kS7LCSEUMPbUEKV8YSg",
  "key29": "zDmtwp1R5BK9HjZeYdw24dvy8i9kHsHLnq4BBoVbYzdjiSxpDXAf8RbkbuDaH5qb6AZv5ETCVJnbEJXhSrzMpyc"
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

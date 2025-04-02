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
    "wrMb1suudGDoEtc9T7zfQAau5Erz4AeUw7QSe3J5hujMyEQriTVv4ixmPSHpVMNb2c1uFeagvtCno7dRqTBRSFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMBsQYHT1hx66HMwcFV8Wo3VMPsBvUmocpFQHDmTcavYd5xieiryJzvQJmCJb7x3kiN6SdgeJ29TE76Df8FhUHk",
  "key1": "3GRyH25HXpVk3Bk2K8KcNx1b84JjbUEQEyoyLc1EqofzP7vpykXrkAkxnnAxkLbysMMatRyoS7SVdnhNydmpGnQB",
  "key2": "3yCWdAAsJrwABemenDsEHV5W6Bs7o6C3XYCMPsmECTYGRk78P2vUwsqwmC4bgeX75ewJvY4KmkJUVmtn2JyUooYG",
  "key3": "H8FNSzhwzdkrwPCCWSAnGVKD4w6Pz3o7H8iW7prsmKeqmCayEt34J3UeuU2Ac8oCqsVwh5RBUz47jRoy944T3qJ",
  "key4": "JWcyKavtNgXegZxK4tiXZkVWrYDxQtn6tjAdyakmPBkVoxjAEQYov84Y3cXoyCm2LrdSBP37mTeukwTSwcNBWzw",
  "key5": "5T83LDxA1Kgfh6e83o9mvFrQQXSPQMEvBxvR5vbV6uLdHUnY5JA4Uf1ByUorq6FnpjFU3HXDoMLqvu3sY4syfEvt",
  "key6": "62hc2zdZXQc4qNVrdPXDC2S9a5YjRwkoeWKpRBzSVNXwxYfaCSRC73U4uiQ1jewSUUAzFRypZj5sH8BrsVbhg7D4",
  "key7": "rAXJSCa8ZBbkHANVzKzSVzYxFn5rLe2kFZSrqg7eFSmwQexLmtkJMAj4oL3ksjyac9R5KCydjC8vvCK1HSRxPNM",
  "key8": "4STGhMaKvex3BqymgQ2CLVVWtUowoeM9yxWrzXMbKzDcAY6qqBeXvMFmb1cBRNtMabeCTJinitL2sUHf9dyuAwAH",
  "key9": "5y3RDR5Jmq5vonJdJ1ojb3mLfUVSgc29628NJqRPEQaXiT3ZV5iGGPJ3pGNpJSDz2hdwcpZR4X4hwFi8rrVY5ony",
  "key10": "2fPdNP3FxLTM4fZXkAiBGdj5iFkP9byRpGtQHcE8JCcZWx5thgv3ZQoRuSFdeFbdMryJ4Eqdiv4woBZ2r9X3HDxU",
  "key11": "3i9hanThcgRrZvbzFEK7SuwK67qq3n26oSn6qrnmQo6YwcqAfFcfBnm7dbuot7QT7ETG1kLA6TfyGEm55xe3dCww",
  "key12": "itwW5mFUmb6H4rHfpHcHAZZ7mj6tKAa21Q2twBN3Fsf2TcWjmTgvtuj6upGENT6h4fDcPcLhgbqCjfaopYQZ8w3",
  "key13": "3UnqrAsFengs1EkcwPWGNC8uzCUA29PWLd9cg8Expqpn5fHnfhkg7dm8vauCJE1Zpv7KPTSBczdp2mfdzDf1VtZv",
  "key14": "4WnF58PLE8sQRPnKYZ88YuFoHPuJiULZecaq48ASDmR8PCCzkvN6F3bdV3QfwizRBcFP8qbNyCFRFoarZiLx9QTX",
  "key15": "2FeNoqyfVAnToLRX7JcUTL1SC3Zqh6cy4eQjTBepB6qdz3wpZzrajarEUV9D7pEHwzNGYqvT6gE6s68vdwywhNwj",
  "key16": "58qhonWb8BQnJLoQUXbGaiud41utJbAM6s14Fsw17n88SWKDJjYTcH436aLN6UCY2WvDnTzB8KWavAyCBCzU1VeE",
  "key17": "2YjGoqPqaRQUeqUw1Hazpa9g9GZcdk8QCgyBAJfFPxYjAajXnbfqmfXdsQNgu1ANfUr3GYCf39H8kfMAA2ryUdn1",
  "key18": "nVzAGRbeYowib3pF4kkH3NVJPEfgHxrV7ZbvYayTh1jh8raMoKKJrJsiALUkqid2FdKt1HcbfC11qDCvYuZZiYL",
  "key19": "21nCb52FyULMWxUMWTW1RZC5JPqAwcewtC8mdNhiL1nRDeUPvxGo1HT1ZLuFP9dro5bTAQAVG4dQCwhUxv644cgg",
  "key20": "3a8yeZsXHa1MRqh7UCiPUUxHkyqjKeVjpPFF1pFJZs2vT4uY4Ktair4VZCVC76BrSgKah8h8oKYpQgjUb5A7GruY",
  "key21": "3SxqUTxX7Cu27sUjyDjusGkSYQbQdt59PRJbUEtk8tPYegW5K1P5BLkbp1x5fPQHSSTwTpzVX3B5cR7trWqs42HB",
  "key22": "63DrS1bNfiRs95wEG4JwLpUMdVup3oDnyPgxs5hJVQnZ727ePYqYQAzMGmXK6xitKrQD726G476P5GtVz6bCkPmp",
  "key23": "QQCJU1tpVf6XLP7aVqMDXg1Hv3AhgDWAmAtfuHmakP8EDUqpgjMTBoYh2yEcqVq6dSeBVkUQ7h84SUrrkimJrNf",
  "key24": "38cNboDzJyjTfJ5cV8itRVwu7GxGvMjpfJcnJPcWDF5riLYm1osqiDJz5Yx8h6fzk46afiL9xiYhuBAZNHdfUbPQ",
  "key25": "UP834sYnNny4Tdp8YiqS3MWq9uyX6y15vCKHDe3hTUhG2st8m1kteHry4Xc6xQzi5TyR4aizApuWAxp6Doe7zaQ",
  "key26": "2WAmqWTzwR1XcJN1pKuGP2qjbjhbHs5rCJJSmLSjeD8nVVnKm7f8XqXnnKkwe8KwnNdH2yvgnWWFbFo7nAgCRYLF",
  "key27": "5KYes932hd6QUYrZUxMN99LhGY2ARvBgFH1mWMAiWbfnS6HRLLtzZKnw4H6AnYNg6p3j4MjBoAmnyRFaLWacaiXM"
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

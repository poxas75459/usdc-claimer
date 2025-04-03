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
    "3hDauc24s8inU2s6931oyvuU65REVNTTANaJ4Fop5HY7vstShdM4EtbRJvVqn975REAuSdTcwo7AYDJYso3A1uSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mU8Q3PDyraNT3YGMvbEj59uaqgy1px5J3trHAydJT3qPWxEQR3J9sUmsvEbmWfCmcRYhMg6dU2mHNH1y44nsNUs",
  "key1": "3jeq2hJtnv7y9zzkatzTySdcmAHJBwxC5LfZDCVcvgj3cAakTaUMx1cU17kFkRg22MqWmfqNoRB5vjJi7o3RsSq4",
  "key2": "ox8M3AUyLZcdbrinC89NXZ52WSh2tEgaB8WbZWSmGRzvjBQqaam5YMTUbAiNsJEfNjyudnpGRLA6tCmyewcoD7K",
  "key3": "3ZJNvT9ydkZNJQjwqw6MQpmrZiCiMpoPHdtzCfdSwSAfdjQ6hnT2xDhtiTP67k94SpGdjZ4PrRdGrJXKkqK4uB7M",
  "key4": "42amE8MdCXURmQ9JK6T9iy1Pqf31ySp21nuDLhUaReUWhaSy3hF7WHV9UuFrCBgeqpLsU8Hqx5wp2ttrUcu4MJGQ",
  "key5": "29LYg1EZVNN6m2FrT6L2DG81nt5jGXv54rAAFTf1QyPUzNWekjJBPFEjSYEkLgf8TRqbRQmjf4eiEoJXMx5hmDrH",
  "key6": "3VpamqEt2XQa41c9Ye1qhbGjf7B8pewqBaQg1ruCS1qYM7bqSi4MypscWoMtzfPhL7KE9i7evCfacP3Yb4e8WyJv",
  "key7": "7YMugB6Fckdaqmha8bgrw4EyimrFGpJHEKk3MwKiRZDWkCcsYVwdyS4bHShm7tcVru77XYG5siVNfsEw1jT3YhC",
  "key8": "2mCk56cmDqEtxfMn1v47krPa5xgpBos2bU2uZFQBwY5Bz5uaAExP5Wd6FadCZfmgfUvoMaxrxVEovBhgK7SykDm8",
  "key9": "479JHaFnWwKygSAS3H3L9DY6nrZFwCaW6dqdCpFcyKGikTyzfxdPQQBaejtACrtwYEbbLseKPUPFJvk859HioQWj",
  "key10": "5yz13uShi1ZZtPdHQmmpxZhaxoSdfAPEKaLaD5WNCKU73BAvaZ2JX4o28ihoBFPtPMpbwc62Gr5DL33qybozYXEs",
  "key11": "5eZRjZxsbNch4bEHPcqUNUCCKxLXzhitZWHH4GuT1zediPaVFVSWCk7RqFXgkf6T3PFGMprFa6W3VZQJCdxvv5v",
  "key12": "2dMSNSteq5ygWn9pABDpDt5Fr4zfPJU6ecEhhJcGh9rUmYxH4U7nZ98Y2rkpxkUxFoKaSzFxUGg3WigkwfxxhKxe",
  "key13": "FvLYJKes8x1o9aAXYFZJZMPU9PidrRXxMjHRF5WgxvUNEdS98Kw51c7MwUETNfWwPEXVaeNGVq78yCYdmdhvahS",
  "key14": "34NvDAEQUVXHRARMGmvJWdpTi4vRyRc5ooouhYPfwUTC4Txkyib7KNMCpu3SiFPuGa1YTVSWrZHVsiyhHkPKSG2M",
  "key15": "4TDXgH7moLPgJj42jcXQ718oUTmYsWozKPJ44i31od7AwPXJpJNiGfqbAGV95M3DGLE559tn8ZtFWxRVhCoQa3FN",
  "key16": "2PB3o13H6S7PMgT9t2uoAxAkxoL8dd9sPnMzrnuyBAbfCSZCriGHAQUuoxjJeN991xbWWEgvqrZ5rYo7XgS9cX2q",
  "key17": "33m5cfS9Ru8Kp8rUmuCsBRUci3cNVk5y5StZjyt38fk8rmoeXed8DKVFQECKDvS3SWxmMzcL2UJnw5PKeUrCyWLy",
  "key18": "53d694hyA2o7kMJZ8KbhPdkNcnWd8PKWNGiq5Cjbiw65M5w9gPRe9q3XxuBzujJzaPM8X6NsDYQN8HEZJeU7Z4Vz",
  "key19": "5cVix7EqaFYSkHzjSZhVEJGbqHQkWyfzRmN6L1GtD9fu657P8azMpFXVsyMDmRtQkXooUA2HBG6TYSAJsg1aemTi",
  "key20": "5p2Za3NPwjH1ELnppi64yTc1gj2YqJgXRpDWod3s34F7KB4fnrkbSHLB2dS1Ro8Wmw2x9Q3oVVYLn2PV6JQarTr2",
  "key21": "ZsUXh5QY4nYZZ9rFUCvZR7eCfgg2Jj1R4piW69VoXYpW4WX4YMF5vVN7UQKFWY3ABtnbkL9TxDxrY84Whu3SYTW",
  "key22": "3ziyh8rEKk44859NbeFsaXNpEmzMfqWrucB2WHtACrFhzrLNSenLH5akWiETLHkjkzAbGGe591qSihRun12zZumS",
  "key23": "UFioSncnZd5UPkoiLq41k4NZaH666vTkQ9vHhuqwf6d8mpZ6yvsBWJhgNa4HQEMTPBfMnhRikXVGgQPMd81Nb8J",
  "key24": "4wVPEeZjVnNSBYze1Xx1SLGx2C8tCXv7JFgZUAoHk9Bifpyy69KJABjkMkSMQjwvjUZ2Sc9Tawh4jfCZArH52sF3",
  "key25": "4dHHxXXJyt6SDJHQy162Ht1FCGxCTN3xS4m3vYWjRjZKTHXgjZsBnsm7fgCwCs1jj4ih5tTSSUmKMJuFMjQquaWj",
  "key26": "5mrEMpFMdUBwQ9sE4nngHNGm6fbQFUibrmiaWQywGn6sceatbWpzT8r65SnTQVSG4Je18rgmAGci5tEq5xxwDRBC",
  "key27": "535UBKdoj1ASnB7HGiX6DjtzwpgncdkyaqDGnCQvJdJ9xQ4nX6uNHcdhDfwfjoSXKBtpTer3Lk1URLV9UsytHvAq",
  "key28": "4eGJFoAYNxxHoErrBg7VuBMzSuK4G5Q2BuwBuRVt7k5BVuD3p7yYHVQmkf1fvxXyaEYmpktrvKVyGaL3WRDXuq43",
  "key29": "39rRyX5B6Kv8SHkcHQ7d5c8t9hutv2vE1z8eBSv4NMGqF3iTbghCYQZuCVXvXwJwtW6WLmqsBzcTEBh16WNU81Qn",
  "key30": "4yXW9YN2aw2jvd3tjRaQJYKymbiShckW1xVAivfU768ccjjJ44yVZWb3aH7BGh2GY2x35f4QrWxEYR5qR5kxPriq",
  "key31": "4jhJzbwwZsXCaFEdLoQCH2yjs1VbqsnVizTRTvozyia7ax7ysJDm9HufbjvUQiUuNj7XAuAemeZHNqKh1P2T851C",
  "key32": "K6hwvuLJVfzvccC2i5QFifvEko1SgDrARtZFP1jfrc8kjyJa33QKreNd2uNfG3gUfBrnfu4BiosWhctZ89JzW4X",
  "key33": "35kWFKJRmcMCv8qv5umud7sHcbLKAakRTChsgifjMCvVNnbQTfmngdp85EwokNa1FZcnHBZFNJkzXzbBg6vVxnNR",
  "key34": "5n6UUt4Jxek2J2VTsV16DQCoDmzJQvYKisA2ZuwBmZJwkrYsuNDQkLkRcVyyQu1oBaeT4KGJEaqecikUVnGzn4oP",
  "key35": "gr7uz1tLDGFe1ifwtdAQ5XuASL2ELbyVq7v7rvcnYQ52D41NJPqjFTsqcBXq1PWuBLYe2snUA2JKG6pZiVBpevG",
  "key36": "5oak2sZe4eSpmGbVyAy7pPAWkkMomJeZUgRbm5EruPF5qSTS16m5ejdbLbKnZSWfKNuKzbcuk1GSF7Vx7xaWeus1",
  "key37": "5TZFBSahSDzH8sF516Njdf55EbRiB7Vm8kk4GcJqWjFhE748Xu4Sn2ynmavap9ehbMzA3k7eixBWYgMsoTE6zKhm",
  "key38": "3z5sV5nFB87TPhuM8P23ToAXyrdmBkGsGPe6XnKoyhw9Z6pNrbfJrPSpUHqHojpa4ww1AuQB6a75dMTGpLgFDFm2",
  "key39": "2kkqtEQ93nfHUpCAFF4EiUVYkw9MZyVxZjVDmVqvKtnG5cfftvF2myMmwYgCCcAGvLBd8WT4CWu61xA3iyoKSVTL",
  "key40": "3EFWPcRAP9NF1qYgZBqxgBJPVxogrXePUvNZPwHkptihtXDLEYJJr2gP3DnpQu67WULRn8SvMD6LqpHYBDt5X8NS",
  "key41": "35nWeRv1DcW3psGuAygA1dQKQJmECUqB8zzz7jTEg2MDUUMVLASAqPy89NBBjqmnnjMzKVXgBNaBqGU1izmYHbB5",
  "key42": "2j6cggCWRssRFGWdWkaTQXruPKXsC7WfzVXyBhYxLxSZ1PPKstWkEdvk6mKCm2WucnAu8VgBsvLKbSptMDRzgC86",
  "key43": "5peRqtjaZN16HCQL4uKvdz6scjuexureTYhwUmmm34iMPJ2zkUE9TWzSAy8J337Bq7SjFiDWgg2FJcrHvBY4StgF",
  "key44": "3N54gm1YmcVCmc7PTHXHcy5twV6Cbr1KiEuKzoMdDHuEFd7waJVP7F9eupgKzU7gYZ2Ghezkavum1ejcXimWbZ2w"
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

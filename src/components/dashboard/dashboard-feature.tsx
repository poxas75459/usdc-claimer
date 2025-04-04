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
    "3S1wGESeF6xohFraWLGuoHZgHmTrcgPXaifViWVkTdCbKUWhqv7E5mrMraojNK7jxwGxcKbtJK4ymZQusjRayp9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58dLHEvYrWaGkAEXQzcQQT5tfuMJbh8NKEvQtzuJSBctc3ZZm2Ca64PRhetNQ51XEhaMQeHVe9BM3SE7re2Axowy",
  "key1": "32Z9n95HWAJqZXfM8oq5eB4x54v4MuyuTQZQxcLfip1d4S4AAmgmA9fc4ehGDYEcR7goq7fRUdqKfNzk9Xa2497c",
  "key2": "gyEbon7e1sfB9zewdQWEBCYyw3nDMvkteThnP2zcgBEvFXu5DW9s411HuU44yVwp11ckjpr3V985g9HwQfLLnSh",
  "key3": "5yWHBKsz8UiN7rdFqjAaRDA1NEv4ym5YtLABiM84vt89ohjwRMsWEZzBhMhdkpo9VucMMdjGJDUyFbiGHQJa7Amw",
  "key4": "5N1EhyaFBdmRtVfAharPvKPxNShuMxB7iLiiZvQmMGqB6nEjjNBTbeTD4vRF4mH7uKNZnUkFjUvNMXTMDmrdSjJU",
  "key5": "2qgbqJAZ1ob3QnDWmbksf1Z2oZPDtHGDZBWYMVrQNModHjaEkHSGPH4iEaSgtaPZG8S2LFKGbjXAcmXmS11JCvWs",
  "key6": "2mGznYuFDnrS1isPYrDbfGaiTLJmqVS8hRbLhiv1dwTCgaZNJLS5Y7zLv44vBNJkPrrSMik5qnqLJxWFmCVjQXQu",
  "key7": "5XzYsChd8PE2uF5gYN8hNVRsANkjwZznWCZtepcW8nNyFY63rvBK5aoBr4t4QEGftoXiNVdj8XgsSJHhPMFHFnbF",
  "key8": "4hmNfBY3CvMRze5hHKmX3Dyo7gzW2dp6xBjAiJoqVpMb7MV8r4N3Aij93PhKiR7LPX7QLVBA4PYBuMBGyr4t4GBZ",
  "key9": "28SVBPDxzth5sF1KhtRYjcXnVDKxT4bRQ9bVU6K8GSf65cZKVSN6iTiUBBJK4iZiUhquNCrLqRW3DEJH11p5NQti",
  "key10": "8Y9H1yVHSYquBoWLUyMSRYJuXeKkwTEj2eXFxczLKiVgMMNbyzgc3Z1wbCa3yDtxsGFYZwxSM9vK4XZts8VYRVV",
  "key11": "2QFGusXjBQgjY8ryRy1mEbaQHP3wM2yYk78GHeDn8JQ4jQCN9BpN6xKymMzhyx7s47kigFGSNNTc3vnN3BTD2tbP",
  "key12": "4mqiezA8mFKjioWKicuWm7ybQm6ULgn9TPdACkDPAv7D4RFVbjpkuCnyiS9B3zHExKmJu9ojXefPBWdW2MPDGPMH",
  "key13": "41HKB5kFzLJ9qF7VocXDyfFatZM759tuiJmsrjAzYAUKMrHz7niCJgm5F2ehYSqEm89Gtmkeb6XRd5XDbF2JyNwo",
  "key14": "3RwJY7HPbo9K3fzNj1oVUjd1iAftvNmCcCiNnvmd9dFqTsLSeNEeTjeVf3tF4M5k9pqqC8vbYXW3tLABCiVQr3QH",
  "key15": "3MszCzDH3NLzVyVsituWCouy7Hv6s2uKphV4EeUZvWDDdn3uazH4463ZzZuYDVFWrXRMtFdQ4SrrsU9Ydy1v3hWu",
  "key16": "4iEGHbra2Kx9SQHxzDGZhyfPi8fwJiCubjzxMXLfJnU6RmGu68M3RhYgMGcK7ywBb4JHo4xeBjHbc2RmcEjYznx5",
  "key17": "3v2T4ReZNJwffr91H3shkaGcL98bc2QNDPet8ZFTweYYLhupNcDvWKGGsNW7Vpmourj8mp1BUoRxMkrP86LHQvG9",
  "key18": "3XjpCoruo2TpfqVighJHQPk5Bq8pDi1o8abJviyRkmuoRUC6Bkn4scfFhzKd2Xj8F34TXuBJx5qZmSxEmpuq7npa",
  "key19": "2ySp9Z7MwojxU7Zfq2u6MRJSPLN4PxUxzPo8pRw9xKBc3fTfV4nsguw9cpvfRSPoDF2eCUVJnavAX7HSkmTG3auE",
  "key20": "jaXq3Lu21LFKeXu8nrrp7ijwHbaBVaDtmrQdDfVLTbcEP97URvaiXJLMW6x3TdXJCXASVAirhqK39ywen1ypWsp",
  "key21": "gfPmcsMTnwp54wzuwbZMvSTYzcC7oHL3xaJiwHXA9VR3SwQsfgJfTLoCDE9vmrt8EToFC22a5JFyZ3qs3Wp1Wtz",
  "key22": "4FFioLUGzcLapYAvhnzR5qq2RYTBrhFgRWmG7FbeEwvfjs91TSmYVJ9k8eSHU25iYMibHvmGicZ85HMLpFYkhERp",
  "key23": "NJcAEKGBzAEmk4eLdMzmx7NkR45JVcvZL1fNmH6mnCA3uCYjLv5rvPgrEaqT2syE1VaSanHsas91vz1mYDXxcmd",
  "key24": "5LDWwFJjDjH7Ur2B6H3vJ7AzVq8xmgoPQAQNayhmJVZEBNYdWw5jvNfgoJUp2bYKScXe9TJbrG17KsD3asZLjq9x",
  "key25": "Esuv1CJZiaMV3UxVYUisSMAqdFQcdDERhXWnhV5FZBmGvHEN9oMmvQG5z9vp1QJ8QDcVBfrKqVCUgKTSZZHJCfL",
  "key26": "2eQdYVbAveraChENMimabLncvDUqDd2ZNFRw1mYKbDDuSNout1k1QsAY4L3tm3sgUmn8E2jiEKreV72981ZYfQTF",
  "key27": "4GmDv3D5dLA1i4ssuEvj4j2RqQhaDDhoJ3dzsTVmuefA2VmGkN8fCEm5JRQJZD5RSB6NZ4Y1KcKP5z3eM911wQSt",
  "key28": "2vREJuBwzCypHTbSsxxaj6y3FBCmBoSxX5UmHajQSyvNmPBHEVf7JFmUjFiH4MsHyRRgUakUyU3k25fe7iLpmphB"
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

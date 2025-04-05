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
    "3gPtsNjWTnHs7TZJTYbUsZfdw5DctmGTaWGtJ1rw7inZUiVvhF6vWAoKsikuTLtH7TLrw9Z1xDu6ChqCZLnLwrDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUgNbdb5Spj73NmAXzMgJnq8BJ2jMQGiM6s4ksKVxgCLcsSUjgbPhWGKyegr5S64yy31ENTbBmuBUCmPtV5AYSU",
  "key1": "51yd18FDvKozrutL4tzqdqzyqQ2kedMxQ9r4d1FeHJ9rZdHLCBHPyFWrb4CHNrVFE7FPVs8GLfVwhvewFEDcvKdy",
  "key2": "3QbVXvjT4k1BqyMcWdjRJXDXhE4fMDNhxcejXiv2njuMr1TaZ26q7eoRTDxVnq89fnbb4oLcL7uNvxoyfxwp2HZv",
  "key3": "49NPJJMtjLCyNCjq56qva55QcvWZLjFKA8NeEDNLz64Ltm67iMNQFr74GuwSGVg4v9vKwtL71e3v1RivT9jxTytq",
  "key4": "2W2gkCFMvHThxwV35JUY316GWFK2KDyNRtmgAXX5JgLUeKQ7uXcSQbveVMyf2Ko1CpZsugfhN3RJ89pURAyEGsQ5",
  "key5": "w91NbcvRWw9Kkw2Z9KKdSipss8cyYHpKKHFGhZFiCu7GtMQPYjXKRmTzNwW2CHo3Be2pSGA2Dif4QcoLAWwE4FV",
  "key6": "Ds6TKYjJsRFPALg2V97CjDdkHvU8WcFuBjX7bpodxHVCJ9gPDey53HHuAX12ViAbr9WsK4h7Q1bouxug6hmVe4c",
  "key7": "4UHqXepD1pFChpCiwkkosdKvJT9RVm6dpKj5ZBjG1gBPzyiBKWj76Htq5ULgQ7yNE8kjBmf3zDYzebhSJDJFPdAV",
  "key8": "2NiAAHTUsAD7Lz73KDCc4rkdTp9Y9J8n3Qw8iqxhfjyXrAqH835bUPuiWXA9NLrW7GW751d6QXn8CCtEMqgvHMVN",
  "key9": "2oMv26cAcJYNR2ngpDk8NZSBQ6sSZz4RF3TbWmoKxsWkRm175zueXnkxBttQ26YpeXVmpi4DDYa2BF7FFVRNLYYT",
  "key10": "5gi5S2XXmfPuXL6gwh2Pv9f5r21nx65wCWbZKCn1P6E9yFfi4qYx66Nk2egdYKenJxuTPWBPSwdH7R19pXRsyyPJ",
  "key11": "2dkTf1KjyaDBRwsFhDQ9ThEDYTzgJCnWzUm9VQviVQBnCov4RQt2aof1RyEjYTRPPhxp5DecNxwVRFCxDpwPfY7C",
  "key12": "2PMkw5aWMv6R3sHwFo1Key45bzzzuwnBuK8gnwbki8Yh2xfhEjAR88LtqWv6w5rXWTHvypNSoGgQcK9MCMiz59F3",
  "key13": "3tfNhwh8jrwUm7QcACToRLXRpXnRrqVsooi16ytuZRQDX2zhdmr3i21xd2V6BwZJ42ZN5bnUrw49HGZWx56VTi53",
  "key14": "4gwxZaj3RzxRGpMb9X5gS687pJq6zVSiHYqakvqdt6U2ekpmu8yDRbJE639eATA6xwGXYWeCBpg7SXf3EnBAak2",
  "key15": "3ogFCafjVa5wDa3hrGA1zyTBC2PEc4kGUFZSaywJBcFweoAM6hN6eBhEnjmDkZ4pzoFb5DB5GqKpoAvrDACvEh6n",
  "key16": "51A8wSvfVkzAc8k5vfLAcaRtH7whySfcPCRGMuedwJZBmaFyvuQXnupJoqxrRKAMrRGfrSrhd9vduiRsQdV7Qfwh",
  "key17": "5WKQAxUG4hgEx3LR4f5EuLPP8baLX5UQ6q6y7zPC7NXnjmcaaWbLUoBh8RiWFTMro4XecaKYGHfZ9c56f7AdJWxs",
  "key18": "4bR1GbL8DzGnirgadiNZRhtxebHzR4Usk9rEADg6WFewp4FH5gLKFrTKcM1yF1EA2ARaBVWjKuq5Q9w36sQFMWW8",
  "key19": "ikeri6SVbCyuwub8rVTXh91fi5iCyrjWBaSmPeDMRk3qd1G886cLzdZCNHEHPvN67bH4wzMr8K4rcVpfUqjUvgE",
  "key20": "QL8bYySKEWdYqAvAno6b6ecYxZNKUFcjhPAfU3zAGyncWofrbGcTsaceMvhp4YQVLnsZFQzGMh5jFwGTo9EFCYT",
  "key21": "vyud2kV1qH3cHAWCihcVtg2sXuEBPzfddJxUAYDt6mArnztf1L5Xes4wGfCd3t8Hum1oY9jCcv3i9yiad5iZrqD",
  "key22": "2CSCSjB3FqDFYcw67arVmq9iDJJTeJJwzQzguGbBCVrwQqC9RVdJWFPhdzACFvH2FvQ66HsNBLiCKzJpWZ8kCdSY",
  "key23": "21ZjuyFznU3v2ttABDJjYNaAnM7rKF8bFxnbEjecwa5LwunkW6hfsHWXyx1cPRqJsbaj99QaFvwTJhFpfZ7bKjYB",
  "key24": "3hjRKv1nawTV2chCm1pZDSqnFmsUpE2h1mph9qCAWkaYKgCi3B3dNieYVM7sLRRYJamVZyqG9MQhN2hRWb7fT2Fr",
  "key25": "9gBKNA9PszpmXGx2SioBiaK5NETm9eHwdMsWQjqpiPAUmD6JGjNRZvmzQh9hHxjZj7HSg3WeXJMer3mQc71nGkP",
  "key26": "4EJDA7XQgUT2GZCvKu5g5nowxmXS9wvFPDYxxaucCLV9ECHw767VB7RSPDHWNF1bEXjWFj4JMV1nXGYPLbduShXh",
  "key27": "5JKB7zYWjWvwZ6HJ8Z5uNUqhaB3ZWHLPU2JmVAnY4nY5euFFG4Fj3Fjhiw5LKyqmD9EQMKzN13gb2w7oX2AB4kRx"
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

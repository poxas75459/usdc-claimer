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
    "K83X8L14CYAH8f3yxqd1zc2PnhZ9TYmFLcEE9ATzU1P2TDgAa4zpdNAW6FqGchEKoQSBkjDKk6JS5bkhmH7McnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkrZobMqvQuvy1xNcTvgP4gCtanH5gUeBYYVaTMrqKcn8mZupkbUfkTP11SR4nrKWSXPEByjqmdvYQTC2RJ89dB",
  "key1": "43sqS5NgUwRV4dKASKt3Vv9rB97BpRbb8ZWEGSCkusQ2SRpyJqhXNqAfUVXvj8QQ2ocdKT5zBWS9yywQhVyLFs75",
  "key2": "9mVAfCeARTeJQCazjywpnaaXWwfqPCQs7ze3hCTAhfsJQKpaT95zcnDeuVWaYsjMDqYLUW5kAvswVte69JMEM4U",
  "key3": "4c4PCbeUmvk49dapLLiVQhDV7iYzdWp2XSW27vEvAnEVX2h38zv86AWjLmgLdm16p2yoHgiJptWDvxLrdvXy8C1R",
  "key4": "5Sv73P1Tr7nfBxYcqRTYnaAyemcsPxy8U9T2ZHKCS1rCbry9pFdJXTc8vNedV9V1LBRm8v6nx6cgeK1keSfZiSGP",
  "key5": "3Y7JyaLDbzYtrkkZ2Q8zU5EavAe49XMCJurb8nMQi6btzHmJono5nzwn3EhG9cKJ4KfS2uBv4udvfAqiKk1uMwrp",
  "key6": "38T7zSactpAQJXp4HMMNSKr976ZvcNbqPsANAkX4mRv1EWpPM4MZgJRjswzqiR83pcfq5vWSr87ENuhqVFnoCiJK",
  "key7": "3TEjRzRpaTAhXTNtvx2PfGi29dWpPNmSQQosw42CugQjsN5aZvb3ohpYGmpV5uaKuKMcQJPmt6yE3axFoDunDRLi",
  "key8": "4He72SGDMTEFDaA7yEJ759sTW6GsKvnZsRh1qNdGDN2uBSPXqF5Azr9mmfoJU6zG1ooG1JvbdKsioFpA1QBe6Uk1",
  "key9": "5ZvULJV1L7vVoGE4dAVpRkvkmhL5H5N1HnPPHYjtGJ8PjweYKausTZxMqbbcRpsr4o4wCDmdUB3Dp2REW9N9kBfy",
  "key10": "2FSrsdCtifZ8giwG8NLty1UksWX4JJzeqmzSMqpTj1rBsaYLdf93ypCXTiAaNJUsAh5LhyAqDHgV15H5jrF4Tx1X",
  "key11": "4AUvdYWP7RCxFH5qusau593151xtC5v94VPNeNsEXqnaMhADcDn6PRWQKkTtLZyW2jPhcuiqqTu9ukxrFfagLyZS",
  "key12": "2rX3t8WSfbLMxa2N4Zr7254XXGxrafgiEQjzaJC9xMYU6WbbtqcnaREFYNPCDaqpt7L9rRR6tPKXH8UJeYUx13Nc",
  "key13": "456sDvscEVgRPL3K3wHkotwdX8SLAJZ1ieatDB4ho8PeHJSWWnngwCpX4NQdTCPzVk8YpyYJXajPz8hMc2xry8uD",
  "key14": "3moTyZaBQVFrxbDt17KERpoMRQN3Q28zcqkzEPceTXVvq5W8jbDQECkwvLZXR1cVJijXu9QbdqdM79WA1UfnPAgd",
  "key15": "5yx5563xGccq8Ycy2DHxBWXjaWKcJF8G2u6ifstAQU7VwqGYguXRVQwEaF2NCSzHdA33SkBKmrd7SCC7EU6xyzkd",
  "key16": "5o8PdS83o2eUTXtnz3g3qD13YG6oDnLttnR7raLztj7Jnhy9gEK2DwLNCz2MEDR9sNyDP1Gvn1Jp4nCvQBGa62iV",
  "key17": "5cLGFaqFZvrzFrbsLU7S1jHdSXUQV6WNmNHKQGaP9jFWpFbF1FEbTqHk34EDantWq2mDJLbw8tnFn2RmJZgAQATX",
  "key18": "2eTaXgK4eCePymNuxM9dttCyywogMZ5HonjGme4joUiosCG4BZ5RTMBdtVywzWkZ6fRr5F7KdZhZJLJC5qT3p3Uv",
  "key19": "3pr8HQc8raXbJx3VJHxTRctMZcxWrPxtaNMNLKTL9phiturHAMHZG4wo6kF5wU72Ap2PUn18pnvmBk8F1Wxd8qfK",
  "key20": "4mVqf5TTBmduqdkwz2LTxmjw8hq7ADixHZv1WR6kWB1Sz5hXQHhoHdWWdzh9JDGaztDq1AhdVk4ANhivHSXGF7As",
  "key21": "4dTCJt3iiZRKckqB1UyyebjFbtNdx5H53geK5auKUdeNVrE896djAF8PerUimXwYLZo5f9DpYHVvyj87UgUxyaR7",
  "key22": "4P5tK8PeAxY7aMnq6TR1YXTdg4sdh76zgnKcKZYjWG16StiTpwKRiYYXwftwA5aAVw75YV4xbzjAUgszwYHHS8fe",
  "key23": "2rR96nQBgVZW9psoaBLrrS6bXmC9RSkUwsQJucBCRqsuxmeVm54yUZrUPAUqPxqTjWgGhPnGV6pkQNuhRqVuoCgj",
  "key24": "55QDCZFq96WaGYcSWUGyEnh7FEb7933bYcDPp8X1bDc27N4GmGAETYdYwkCo3eUEFuyPcT3zfkdvdjgSnbiGumnD",
  "key25": "26L1zUa2vA1UjF6zuSwP22G92uxoriUPGUxJ7NpAxLQfbNcqQx4BdPHp1YaWpX2iS1xZ9SCSXXTR882GUeipbhTT",
  "key26": "48EXc1XohTANzHephR2thoRJba5ghuvRH9yLHvKNSzmvBRY137WhWk4gLdkrhdzdsVbb1pN5Cs3AbUxEdM2zVq5n",
  "key27": "3gwQq8WopETtT3eT2aQkbGAvd66YnZbnPY6wEfc5fMMbcG6EBRq5Y2d5nPPBbyUSwb6KTbJKqvQcMrAcPi1pHb89",
  "key28": "p6Q9rAKh43pikCK3eUW7sXH1ASXZTyszYE5BmdENXNkxNoLHB2oFbTa6XC1dWusm1ggE8pepp68dCcGFVMzAwp4",
  "key29": "23rvmb2Z9k7c5JNFrGQhNXJEFsdVmTB5dpgquG8VoB3HJaKEF2mdnYVCYpiV5LHmGJssAPWGnEvxzxFvT6N3aBrR",
  "key30": "5rYhg9RPHksS6t4SbhTsEnt1WhcjekQx4uDfS1Ff68RqjDuUUCfCjepsB1deGnWcs5RdpMpT3hcro979iwJyZTaq",
  "key31": "4qXSvRRRUziM1psY6Qv12ghSTKg7E3TbT9qiAmpNR449Gjo5K7NCmobxeof5qWhCh3D6UWws52L9fCURYsaWS7KW",
  "key32": "26brbYSZ6LmDZjmqd3kbdJLGMT3oWA8BdjM5djQeKDZjtLJEgcq128NfiZdqvzNUZMZKLpf679k1UMA2tdf2EcdK",
  "key33": "pe7pQVSypamT2vzYdrPyDwAbRC4EbYwfJGrWuo6scWz4odSEhFEKPuMa4yipAtYuuafNJ7uEAx9oMQ3185TZEPn",
  "key34": "VugKp2dZSVQe1XF55uioeSd8TX6CpqpDWSQpyorDZKrzrNbu2T9HwfoiPLxz2WzXfsEbsxn4XvwMokxXdMKMfuq",
  "key35": "2buGDZ8qnDKUvUaGLspHBeE1ksTFAKEovUUpWsRSNzWXuq8o9i5eZtt6T1Uf3GsXr89H1dVaXJ14FMGB8xwNpVh8",
  "key36": "35d32mwBADQq9PSy64fHAr1z64ctWGoTx6YLM6zHVWnHPVRreTCGKmSmcJwHWaRvwQohGDwVFdbAcKLrNnhpwb7v",
  "key37": "2CNb5U3aea7dVdY8VeSkjDZevc39miUFF2ZtcdWH5zufb6RmwDPjYGMMEnMP2Kzq85AHcF7ZG9XQK7YisbULsPP2",
  "key38": "3vHMoiX31sLSaf7jMkQZBBPXCBrUY87QZMTjMjZ3fwUZDnZsysn6m3FvMQLhmQbe4qxJ1nprGHknscGWeA1gLGhE",
  "key39": "2eYMMC2Q1otGnJ6jTNMKrung5t7WiRc98bcoN9GcVpqo69dhPb2AXBw9zkZLNi58QMaiX3P6Bq1uhLaQRYGXw4N3",
  "key40": "aQZT8BKEkE1obn2ViZacq95BSZoY528YPkXpgKQd9NJWqX6NwJkfafeQCb1AJL6gjEGoHkdySpBABC1bcXnSUeF",
  "key41": "3kQmrupZFd4z2NxgabFLeX5Fjr5ijM468xk2dgTz3HUB9JJfmm2siAD1NjUVNUXKLYiFB1zTFeCJhoSuqpYox9m9",
  "key42": "5TfMWTmYUPvZxcbes8LJYyrnqRMhmCb6TRxG8zJWX4C7hCmHT8XargcC5FVZQAy3Yhih81ER6Nd6XbhbzWavBGz4"
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

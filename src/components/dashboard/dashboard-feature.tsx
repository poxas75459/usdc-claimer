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
    "4kFnPaL9atvMvGip9ZSrmE7wmjMdrxGz9szyQ6CmzYaFzWAj24i3HwaZBn73ZfNTJdvsQKtPcYqoMkuuya7VrTDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sfGw62xifAbHknyRWymv1e7qVoSmM1GcxePuDRWwsyjTbiMNszR96GspozS2jWo131yNhfqniY5FVsgxpCSbv4o",
  "key1": "65Xst92KnVM59yGBZZ1N3xyrbcYDMApXH5DvVfar7rmrUtdpoGWFsJcjkVE25GTcHYeZfTKaM1vZZzqT7pV8MtV5",
  "key2": "5kstEgKpPNyypNCUcvW7myqjpfmkcCscx1xTcNejMs5eiiDwqKKz5GgSN5CvCxsX7pFyZ6grYzBH5LC4Ua4HGZt7",
  "key3": "3fhsVyjS8rCZ7mxFyssMugBbVajMgtsSB8cWeWqjitgeyh6TfHcgBN1pd6c7Ej5kNnu5ma73Lf4LqMptSKKsri5K",
  "key4": "2xVCVbECSBPHS8EnRcNAENRSLuQKmW8x4ms3KvuD5JenYi4imAoRU18aScxYitDofMNKjSvLEig4gofYtebPLs3n",
  "key5": "5VPrXqaXxSLv9KG7VFxewUruXaGNqaY25v3KhFYu7i6QoDhjV7vX7KCzq64CB5bFc3e54y8jFXdbYkKbiM4VmReL",
  "key6": "2EQ4neFdFVTBGvk16YpF8a8EPUS464T7AHLhx95kRHEmZo673ftgKs4R69PBezPJQbYDVuhSnvZi1o2x8odvkksD",
  "key7": "eoBzDW4thPeJgL3HKXbgvFowZHGk7eU1687aipXB3RrJw7ZhZc5RpzqdDxMzzXWNKFqzgoTn4H3M8j8Ny1G4tEb",
  "key8": "51KwsJga8AeZFUWYMVX95rxo4VnHQxUbqeSheAgFiFuqysXmQKt4u2uurgbu6GsHgUcFQVDZvwx6gp4MbrcGx5U5",
  "key9": "5YhCNPxpLK56YLidDc1BYT8pCASRtJTYXrY8uNqSp4QsU8kLCpFf2iXDuygBV1Rp6j1YhdJqr7nFHdUhNrMNRZEA",
  "key10": "5KoNfqjXf8SK1D4kmgzR14HykCzax4nVU3H23a2xtQ94bNfVbniGF1SWHwfXMknYaVFCtjpqUHV8dRT1GbKwUuu6",
  "key11": "4mAcjStpXP5gJrwEx8ds2zWyvVWFHYXk3RCm4Nut5DSJ2tizRT23P8guv9RZU2MFGe1kJoFEpMNoLycjodfAAno",
  "key12": "4QtDLrbgcJ4BZg4xrcHMZHjksXewevjbdxRR9T3vWQnG43RWE5Nj6y5k7Ndm3s8tZV1VUqffeDADrcATGAnEopcc",
  "key13": "McdJquiSWgz4Gy2Mjwdth4HPNCQ9WaDdXm53wXdhzqdYKHmJDjrWU83VJ2b1vTCrJE2MQaUxSuHD2yAEgyYHv9e",
  "key14": "3Stko3uMABk15shxHefPDXypdXjdAB8M7J1auLr3YaTYZYqXp8MiHr6T4q2YLX7GA1XUvMokAosxr5rXWgZPnn7X",
  "key15": "2bC2zMh8G3BMKCAGzGGs73MfmYZUPVbpXb2J6dGxfzzcpfMenAC86D2PVc84gVkAqQqCMZU566w7NDnuZVjD6SHR",
  "key16": "4TKPWYNDNKBV1rrFxZ1UGH27ZjJXZPLGskAwcPN7DqZf3zaM4ygadCKPFdCLNuT9Pv9cN9q1HqUatE4CWzp1qZ1u",
  "key17": "2QjUZksMF3Jvt1R9XFmTGiRfWsUfncweZEGGxuA3W3UYvwmx66BD1kx33XxBabMjtnQZfyQ2rMezRDAYuFqWetw8",
  "key18": "125TLmfLAAYrm9yWSD4AR6w2VAGVeZoXzumf1fSS71snz9tTaTWeUkjvkddYyCWKsYjm4fbRrNfjdpkVeb3y8NR9",
  "key19": "4S2sHDgGAATnpzYqeEAPYG7UM2FuwWb3yeGC2w4aiYgrtpwnd7aspNewPNC7RLhQb6TjUSfhVvtoVpUD482jrtoZ",
  "key20": "3umgHqfmnkzRn882zxw7yJoApWXeFzRLPUoGCKWc8QyDqq3eoZXSa76aRy3GrFSvhtAghX9XGi2nSSjxdpn3QjWa",
  "key21": "2VsneM6vjZbrkhAYLYtPnLed1DGVbDN9mBBhqZ7gGVtp8yayqvhimcaQ41jthUXb1YADbzfTgBx5gqXQqMBBXThg",
  "key22": "3SRyyrJP6T4aXeozks4kZyHuW12gyaxRgxn4NFxVeWhzpim5HnVt14obXcctpYRQ2ihH23iAT9TFLE7vWjDwZ3xs",
  "key23": "G5oxHxRAvqn57TehcHrz3FGe3Yddu4YqtZarnCNWGJAp3qxgCRSioKW2q5MwWme6WrbifpjQbs7bcG3dCma23eU",
  "key24": "JDwBpDrPHcR5LURLXb6DbTPKB8S7yBf96bpQaJNzt1zqus8T2qPXvcgvNep5yvFGcmYsuQaS3StS2QbsRRQXMaF",
  "key25": "zUGwibvSREYX1hCUaFUVRvrj9bkXKiQwj7tKQsGDyKnUDXLJRhPjHkduVftU15UXohyjG3zUSJcfCKUJWovSG5Z",
  "key26": "5EH49Am4FYLx5hnuoMJKKNAJDHBWd2soAPBWczVeeSSxGttc5BF4Pbv3u2N1Fo3Unv2LtBivPxxmYBXBx7a5PjWq",
  "key27": "3Yhp4D2rvdoLrbTtmPiCGh1yf7TGUMuJz6Z27Md5fV6ZCBnfD7ux3DtKj2ZvJjmQgWXm71LB55px5J1Mqwvdo42N",
  "key28": "QXjuNE3it8YF4i9kEbvTCxUugZ7zqKD8njxWP5c5CZq8vtZ1vR6JFJMSprAyKcREBJXRkTYDWv4hX6Ao74yesmU",
  "key29": "2nDZFhpNxvQvLAtLhxidNgdCi35SKAJzMaGpPQ7gZtWzWLC7vH5PKBTiwGjGvk6o7EQQrfbFW92qe2j95jz8HeY2",
  "key30": "cV6RHaQupxBh1g1VMtMzdgdoSc9UjeGYP9PFJ2cTmCwLfBQdTBVxF9yGULWB4EQrucXZ6jTghv27E6gaTTs1prr",
  "key31": "2bPUCsdVeuReVYLoGe34uJeyioK63gGbgqKnvmqHfr1EhfmqmaWWC5Ms6DDwSydAszsSPCnh6vVRExW6gHK2gbAR"
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

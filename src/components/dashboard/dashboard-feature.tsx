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
    "5mK7hupy2LTXCB3X4wNNEz1V7h4t9aCM1nxrebizRLJ9v3qBLgCQrSsSojPnbBYAxBwtwi6pKtQ1a2aU5p1RMXcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPZRRvnck4iRJbbAktnkeevTDUR4SuM2Bc77iGhex9Syqdht8BE2ESA7fsipcvFfecDkvVvPXBFgsUAYNLLCSga",
  "key1": "2bJHaXoAcbej1us4me4JnNjz87AtTpn5KLZCVsvjgbukYHnCJo4XoqpiWQunscCFqHEESWdC1KtemwCcrXdSypEp",
  "key2": "FHX9DMgNUeXerR1iYc59ftMdt7mG9X1A9dFiTpng8NNfX6859jJWXHY8xVQ77xkTKmNukwEBrBudKsC4s9GmXg8",
  "key3": "5ErCVgeUyPhQimkLAC74nJvCy8RR15kt86CWvyf1nFTXRQhJkeQzV7Wb3SL67ePzS5RLEB4aGJipK1EDpVDLWtbY",
  "key4": "2geWYt7ErzUoMQsqajYhHNuFx9LTVmWUroLzw6sMAHPnC8BxuueX9ZEWQKxvbwtgJ2xhDJddsAux1EY9Noo8oApD",
  "key5": "5mvJbMj9mNZ1VnZjFUy2SUidT4s1wwdpHBfhkKcFZqPcZhXFnFsgUNw6xcDV7hYQadHWzuzuS9ZnNZxXsHNhpxip",
  "key6": "EkXc4y6H2A6MMGZikGgkms2uumJKbK1ZoZ8GpnWxCJxiTLFbLCDv68XUXYKRYjhBRdLi5FGjt8kpu9B4oBGUNUc",
  "key7": "5g44KKzibuqNFL6m2e4sbtz3EtDg9nLXgB28FzaUpVQoGQimbHYkb2kDhWrc25ECGpEVfJb9T1kNRWzNmuW6nuP4",
  "key8": "2zf7mHG1bxUY647ej6j5gANA3LFpCz1cMWVPYeqpf5BJQN8BZpzyDHnQNrKAgvWNGWbZi9n1859r16TeZpwgBiCP",
  "key9": "36Y8A73X5AkDNgbCxo8peEXwuRbjpwsQi7tutVio9fSfn7sBVZZQrJ2ZwCyuLRykyWMXwoNoTG9ypF3ThK3GAt8r",
  "key10": "22RqTfdgcJePKT1L9smsH1nQUJyNLnJ5pYk1Vg8N3Ln5J9ZehqoSJxHxPmEv8UX61KfPH4bjyoecbKziBWVspwaF",
  "key11": "534tLi1YVB4RFFrJrh9Q6purYQwKoTtUvpnvdj9wk2XwGSrZ6cBPPbBN3D7CrqDqENyN7Xmy1VCaVqoHgssuGdJ9",
  "key12": "ad4Rgc28zuvun7nyHkk6LiK3yt1uivANj1TAnKhCR4qEr3htyThdShJZzjvak8cWdfMVCife4j8xFXtTicngegA",
  "key13": "U9tGyzryTBgp15T8pvQtGJCZj4jFAvrXfmcpe9QPrxdwbhsmrhkqTb6xYByybe8n7hz3j95QQXFdk1mMUShPEJ3",
  "key14": "49z5Y1f6paP2yxNd9AF7aP55q8Lba3Uv8DmEZSSPAy5GzeQV1igQYnuaiN8hvomXPRCYW4KBqJuBjUeZ7GAvg1hA",
  "key15": "5XY4g3a71wf9fiFPfejFFzuRnTnYN2gFUp1koPJRmxVcviUge6H8RUzoboxWNZaWjaYtRZ49T1UZcBg5i96teJLJ",
  "key16": "4Bqdg4jCaZrmdyU2TrdaCUJh6Ji8dDxfKXNxJJR4M5sJi7nT8DcyWrrzfoQQciXdgqxvdzveLrK1x4mBCLKtcFQm",
  "key17": "bEYFPPPFCeork8kKzW8Lr6wz8w6VYrayeRoR6j4TeDLywucT7n4knyVE6ieZ9EYXrDP9oUjbDZsu5Ga6ANMuuqV",
  "key18": "NHe6QfhQWWQq4GWjkWyQKX6KtoMkpiCzdShU5QX53EwSqJ1YR44LXrfSeLUetPSGEx4HZrGygr8bzx4p2kTbPgD",
  "key19": "62SQsPqHi7rnmERHhGRZ5NWdqNYnBwq9eGB4DR6tQUCnQKJiqxMGmDMWjYbwtpgkyDzJ8vRFjYoWtPkYDXBiDTtm",
  "key20": "5ef2XtxM3SouS93bVUr1funefqnF1FrQdHe3NdcEXXoBxZJ2rXErsQNHazcrPxetH7ZbwZCb5eJ7CQ1wd2K3kAwe",
  "key21": "2mYpcGC14fD6ah9scFJJEpPrPVQNDWkDTVZjGZqFF2HWQH8kp5M9kTmthTtmQZfHvdj9h5mSFvJQXGYZXJFj9ZSc",
  "key22": "5D2E54Hsme9oNK2XkikBvvxpdzZUNScNwctbMJXoHxwbv9BteKgpsvAHX9rHF4RAoAMunXk4Rng5nbzk48Vj2wDn",
  "key23": "2eAhMi77XfwEAoSWYqTzQ17akzoQaPW8kwtN5f3XJpZDV4qrNtiqJyTVui8aEyDnqBZYs3CF9BDSQz5kAi9Mgnky",
  "key24": "37u7hnvP7D5vDViozaUMBTmBieXYrfctKRNXqWCLxs1vHzzDZDbw83kvw3bkcj17pAiCdZDntz3scLCSLhbMHa18",
  "key25": "4JQ5JGgzv44sBRQa6PHiHJAnGcMSHSEW4hMYKA4t9qfpjrJJjixbqSq9sNbezrftM3zTDm4AiQjY6TH8v9VtRuB",
  "key26": "3BLywm7vUK5a37vwvyKC7Js9yWKPaetFdy9CyXZ1aznc1wai6WM8iYwGPqQivZYmaLinUY5Nxx1xic2snV9JgJKS",
  "key27": "q7n8hin1DYkyBYHeD7WgoLEVWoNKZ1RZBDJMrRg9DHZ2eAn1XEoGr3xhFNB7FUq22bUBx7cuYv3831fTxHQQCMQ",
  "key28": "4HQ2TLaHcoYjhUYG9UV2KuYYVhGx6gp9JSqu2FLX78Vp4LLDuXuvRJtu2rxyGPxH8qr3mV5hidFVqpjNgzjQKV4M",
  "key29": "4QWJtkEGUVuCK2yVoUV1Ew236gxTWEvt7jkMmTdiJg295pZZsUJyUThBEGUQrTTERwt8kQEMiSd9X6TUhRWBc6r9",
  "key30": "zHrCdSBCLHhKpR747nZXkN3FhGSJ2miduLYoJKB1w6mwj7jpBJ1RBLUcypDTLUiDD5MVCJeTA7erKL393M48jfQ",
  "key31": "CU6KoaQFh6sqy7N13rajzNznpqwk8FF4Eg5VHJ3t8F3DkAKKXovADkrHzqrbCGemKwzcZoidzSm65t3bavv73nu"
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

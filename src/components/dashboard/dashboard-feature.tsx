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
    "3EybSUWdye17Bt6sWVZQdZsKQJyDNQLnrjzNrywfjiazQ8iJzgU1AiaGx776z5zFyM2UTJjLMi1eeVm1Wc6uyCyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1BPhtBqLd9RpscDnEw4SjiqXam3VWeymtoUK95N29LdPrpchGo3gX2Faa99wnRkV4zovwfhtXXp9Fq8NrVb8L8",
  "key1": "3PX1CeFH6z5Nv4QU29UgL5STGpbWArwdvsSxJscA8TGXuTNVzQShhvq6GJKEefibcvyZgh2DK2ndyggHPD8fxV3G",
  "key2": "hdEJ7Jotp1FUHxH15Fy4tN4mhpQS6ZoG7hdeuUp78Ha61Y896xaxg3DJ4ESkzVnJzENzS9GAWfHvLtYpkVmprmC",
  "key3": "64e9oqFbXVrDCVDd1o1n8xX4cTtBn473FdvrW1dGeBXmXGxBqkEfX8howWABZGqW4xWersfzfvg4ra7mF1WqBhVx",
  "key4": "4A67MJkqX8kCL4x6jutvMKc53w13q2fecjyScQsXoisLrU2t4awg35VdZwm8NjSL38iFAoPzknf8Y8FP2ui4GwXB",
  "key5": "29zRyH2EC6AwNHhcrugEWaZeeYtssaWQsD1jitXWHbVJ9jVut2mAymPJt9fyChriQG4u1y2G4cqmceSVvuTxwpa3",
  "key6": "46CoS3btcR2FYLsLpsZCtThWdKxoWB5C8LGJoe5vGaSqiUBgtNbcvUJLQZQ6GeF9s2QqJ55KW2KJRo8jm45c39vf",
  "key7": "598KzSaPjYRf5DXx67BzJcRg7nrL426eJVc4wcDmqGUWGdhPd75L9izU2otNDN5Af8XXov43MRgTGQhW7LVdahkv",
  "key8": "2BJR5RFdVTeA8s5rMkgUiAu1AJ92jV9tReAvwkcgf9n63a76xHvShpx43cnQpF1ZTuAFP1Cb5qDoM2NfF1pP3JSg",
  "key9": "rpptTjnKJ2aXXG8oJCCKPjdM8NKnwdQ7RQgFum2ZoxRfJi46giAxVkZ7KGQsM8TFXscsaKo35dCoxKKqGAnmz3v",
  "key10": "2AYUWJS4rchySeGk81QtS2C2hA5PBsumHBSpnRTMyFDWfFAdwcMG8JEyhhxWYD4MzMRJHFE1F1vBReuK6qvs9Wsa",
  "key11": "4Gbqyvc8vFPXpVVj92gvB6N6RtJhQSA6ji3Pv3JM4mK3oFvBF424crubshyJfHyuoiP2nbsCd68vWWYrj4dphkg7",
  "key12": "5bYbnofjLBiTG8HEQvkuPxohg6o464K8ygEJ5gxiZ47egFbPsspwvfGLSQ8Pb5Fa2TzhVBxs1H1fpcXXB5ENDGtx",
  "key13": "2G9e2YH5KFVUUhJ8nBeBswYLsEdunVaAuap4GLjBbJKFV8obvRgdp95w4QqLCQCTe1bb4N2HRQtw5quPZEs6n7DD",
  "key14": "5RbnJoJ3Xm13GEmnuYMVPPe3c8B4Tw7SHzxD9VrdEn7U1Bp3r1BV93mKgGeovuhMyX6ZMm3ADrTyH82qrK74Yyro",
  "key15": "RjDnfDTXZwJnhovsiPQ952SijrxqXw29gcgN9gFZXtRYmFVuJk2BRatwY6jNUauC6CEs4UQMGwWhdgsVBpds7st",
  "key16": "5to2dNyj7FNuJBxgNUXP4ose1hWN2ZhitUa1HV6UpEzY9rFSsD8UnuwpXbSi3ht9HwoZcmE6dJuw2WnzVKWqDR7X",
  "key17": "3i4HTxQiJei52c8azbnRdZLwNdRoxnr7BCzWEDy9q3MHrjQiChak5L7f4yxQREdBVn67p7iDMSX8U6hf5GBMBNaE",
  "key18": "BLHw49rJAjS6184t5XPwgFcSYJUq8AzvVLxVLrzXZbrAwjtnTQCQmz9xZaNZNSf7T1pm2NVYFGCXefGpat3pfrs",
  "key19": "5y26dv6BME4oHomCmvaot8KEwpp42b78PRwZEDSy6ByKdjHhjAnjtwXCEcA8HhkLbzixXErLB3vtRgCDV16fnAo3",
  "key20": "4szGuPXZMtp8qZbMRWWL8FzDZRZDhrYCAf7GBEC88arzp53RYHMmDzPppkTSeEo7TBTjr1HprXRodTQCiSUxo2Nk",
  "key21": "4Zpf4bfGYvjJB6RsCj43PyjaTyquzVa9GsS7a4T6cDALwLxCvYgV14xeUuVKzJ2fCL7smUP2dZHSX78wYUsuiC7M",
  "key22": "2TRDDWCRti7bw4Gb7CtAfCvf3ZH54nZgjnKfPdGQMiBjbPXfeynUawiEyq9tJEsTGo5TkJHzkYWEE8ywEJFHS8FQ",
  "key23": "2gi3w63W9KQvpjkmzQSSt5fVDAnFdfFwpKvnoMkNVPdbh41BxZjbxsKRcMXb2FWbXfs8Z5uUaJJHCkTCzApGLRz5",
  "key24": "4mmquGK8CLrgMX6r3pgGxpD18YRW8Svx4FcrbPxrZX2G1yKuiR2aXqNCEYXWccDjdHtJZtqC8KGbcfJYviSLkeRw",
  "key25": "2KHQQ88Mtb4qvxma7NyHxLZ8ZUamkXQy4SpyX3jV5LfWw3Xsibb9GxE6QHsRWR88ELq7N4coEMh3K94pzf6tZLrt",
  "key26": "5LCqJxAxwwj4xw5yQq6rakxtyp8Veybu4i4Anavv9exFUDwKMEkrZCmD9YKX4MeJVKoow1eBwegCedCRDKTqwmkn"
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

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
    "wEma3orVZE1ojbvTS2fnQJYbTn48nbT3GFKgzT9m35tH47qKRk9fDi2SEVBftRsdkkHqZ3a8itKkKPbDa7nagec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FRHdweuNhJV4oH9Zk9UTwc4QWmzSeNE7W12EyU54EK6htdrGvqEGjpWiHQJaqUSbd5nnc9XaRcidq5M4rFGUgMu",
  "key1": "hXMiGM8W5kJt3PJ4SgaUYSM8VYX3ZtrCNeUnhWzGK9ZVLxXHCCeab2ouQ9FRPe3tGaUTbrVzMtMydchBKZRwUNa",
  "key2": "2iFDwfqvhuzKaSJxaEuw1HUXGUJehTZRnNbVR3LuJixbmxv7qMgpsgz1474ojYs413zdVh3WmnTffRhLACG9TjxH",
  "key3": "4sWqa8j95rZvGBs8P1tC6K4aSPs6jqUVpVvvpTR5U3ScZLescqLmQN8gmrpJuWLXpq1bU8RYSBokho3b996HLPTG",
  "key4": "5PhA1X4joEUnzn1bmbGjjMRfH1FNXf6q5VkCCio933MTdpt96UYUgtv9ussDV4yQ83Ln1oQAaA7CTxPuRkqSxF3n",
  "key5": "2aCgSwaqVPJeziC8urYB3g8kY78sbrtfb52RXFyzhUgUrQ9N2cRLUUjYMEZ8dXvgNgzmN8rkgGsLoUw5Bk9DRMv6",
  "key6": "633yWcTvtayhGgL3MRdZi5B69bGadmJcXgYnzd4GN2ssEqqRWLJGeJLUnr4AHHePw1bfjfZxWqucXRvnjZFZZAwh",
  "key7": "4EgCFoafpGkAvJdkXTKJfUPFp7RJXk3CN8hK8u7TJwdQY824kimh9J2q9KXLTur3arqCM8Bz8rV116TEcekguaqJ",
  "key8": "63ehVGAxn6TucXewNyE8TZHHPpRdxkKfJ3yf9CMTEiXoRySLugqL89naD5V6LnuxFe3PV4Muq8LxLr2Aib9nChbp",
  "key9": "67r54zn8uC6juJSBAmWvkYBQCehbA44PWSkDd1UGLESYuFbqFijF1RKje6w93kkmR7B82YqB3gQHU55viXYRXV4Z",
  "key10": "3TghZuQEjjMn79FWi5ntNyNzPRg1K39cZHuQChYdwRYzFRgnLnhPXiMxVv4oXRNEE3C6EZrx8s6EmNet5hRBHFLs",
  "key11": "2mc9oUAtxSQLvph4TPfwHQbydKv9ypHPHQFRQp2NSVUkBertuJbtjhqGd7CtbsskwMGUf62wX8ryhoiMhbXt5Zav",
  "key12": "5X1iRBhCofKept2G5rPDGeefioJ6t91EMQUwQ9SqEreMKsxcqPhgc7QDDMH9kQtY972AE4wEUEpnPVPnjJSpCYxh",
  "key13": "ysEX4HWKNVeVWg4KGwTtFAmPeyB9hK78dVZQSqJLbSLqp2NTNC8C9vN7wgLKDacwa5ZNSfV4jpNfRduHB7rnptw",
  "key14": "VMnh1BzmFkC7KKAUZ5vj98ZCiV7oJL3gu5B1bXyj2v9sSzFUCRpgGsr3HEPAt7yZUBJciKqa6VuX6UPJB6ZYGKd",
  "key15": "38vtcBKPp9dpCsYkSRwo79D1jDu9NQKmYPR9k7ECveXRAFyMHk5Gevroys1N1CB9cQjiY49vXarJKnMC8omasyNs",
  "key16": "RxkhhHPRZiJw42nc8nHJh2RnGNL1byEovpMKFG6SFzjQYNkZtQ1y2g8nok3e73e8a1UtdVNM7PcAGcQsKxa3zLE",
  "key17": "3L4DuVzN73Kt7UBF7bcHfXFmmY9dHEsJApjzot8GnVB7NUhpUAJNvv3U9JEPS6raZTgHz7oNUGrjwRk8ymXM5Cdt",
  "key18": "3xUbjLcfVEN4pAtRas4DjuqbcT6AvhynsWZdqNPYqtHGboiD3LV6JQbxXMvMH7DZ4dL6NPzPu7Zs86EV5y4Un1K3",
  "key19": "1jaUpEb9crpRp2PC3jZSUS323sL3DxjEG5iRgJmxoP8jtk3bgCAMDWReGcXJRPddq2BxuzLdYGhZdaUsT1n8fuU",
  "key20": "3WmNA7Qjx4NH5BSz5y4s22DCrKvMq1iaspEG5jm6qGkKfnXc6TpLCRUFDi2PeHgSgQyTM79n2xhkAKas4G3XCP5Y",
  "key21": "4H3ocHroqA5EcmBcT8Jy7pWathdn5sewqJ1nUobP6aF6aJmv33qZrpBkebvHmsoxTWXCNaXsA5yb3MyhhTuBpHyJ",
  "key22": "cfj6UpFfVKLAtJgrixcLxms2o1bLmmrv5rip8twZMx9MPJZPNmBLzm8YA2sAdmcySXrtnAJX4Dxzx6b3hYjCkVk",
  "key23": "2SKrHe8c3EZjDd37r3zkAYSjue3f65ypwGC4DpSF4pjGFX1WTea2DmVyGSx2u2S23RyezGh8VxVMAwTGbmqRs8ED",
  "key24": "5hMcWo2S9ybhqkL7Ecok4hCU1PcexR6D3wvVu6TZvrQ2dJyntwD8r46dfK6NZaJ3fxtGMgDtvaBuva2dhqVxv2kr",
  "key25": "5KPnjtEHtYiLwjzhy961VPHnuUyBQa71P5ZUc9MsxTn9puY2PBCWk5EBBo5RWynR3i7gi1HaUDaf4yxmFE6UuBvw",
  "key26": "5bvyU6uUpmpQwT8Ax9qGY3zFXNN5P91pCEHoyjsFcDT8pM3K3HFSxopWADkUtALL3qDaWga9hrRxB49Rj1yWjoAs"
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

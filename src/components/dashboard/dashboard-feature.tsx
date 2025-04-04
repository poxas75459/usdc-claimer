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
    "PjTt3sthfGpn9Jn4F9RqWRZ1ughshVry5MSQ1defW5xzDGYLjDqYJTuo4z74Gqh22rX8Bzi7HtEfKR5C3mcD6Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ihg1dRQWPkotLZV8WpzQQkr95cyTht4wDxuv8gYqjyow51DkmwkBzDpDSy7YtgzePWUzXjpEF6yfiHWWoPNdAMr",
  "key1": "5Pt9yMg83EH2dhdmUB9FjpH8DmGPdYgCpitU9bJyVmzQEbhVuW56NUEqdr8snmN4M3f9SR9GVk467iro1e3jhmpx",
  "key2": "3MGwuuVykK73ftb7Nf42BUuWBi2xdMWzEUD3KVA1ZnwziTADiAfDMWwbM52RSwtaJRYSm4VqDecGtMWf6Cvn2Tx9",
  "key3": "65Wet36YUa21XE9kBWPs6XivBTDcym5QK9fDwM6UWYfe51kwuNNZ1vxbS85WQxNygJZdX81yAqTPmY18sggqtc2B",
  "key4": "3jFLgr1AB2P6vzKK6LG1maopxjctmzCSqsbVC5TXg9cebRbqVXe2Q4eMfq7sYmYAYq4B5MibnYLwVcy8i2FZUcCN",
  "key5": "5g2QbUxScwFyz69yqewEvZu6nduFU2Z3oVsykAxQh8cUinqfQB2Af6Ye7LFe4MXdcxy96FDX7hZ9SSeNjUj3Wd8A",
  "key6": "emrFttUgaUzkDVXZusqHDega4ui6Wh8AgiGG7k6QBuZPimNx8dDqb8a7Pswb9xzkf4Mh9UaMcWBsaFqwdhCYTWW",
  "key7": "52j2ijzhCXEF89niSpjeeFuSqpxCHRGGY1fGmPJB8AX8UzhtQLsdwDBG5hVtMHJPA5ndTS2JRzbtA36xQnwFW8gt",
  "key8": "2civhuwaiuCQdNKcn6XXUg3vw16bP112BhVXK8e7FqusY8XSqLVecS87tLajjBZ4fdFzriomNo7NKQ7By7zVXvY4",
  "key9": "3pALAtMJ7zLaY2AvVr6wfE5YN1mU8bJBUgMWNpfDrQ5RmCEZN9n2d7PUy2jPkz625cEgxFYaMPsCdDLLBcgbqYF",
  "key10": "5qP2PG42sy7jurWDH7F4TENJe5tudfqNxpNbuwyNEihnDnW2Q4L3K5fSNqAZ1dfHiZrzdG534nF7jAumq9nGGgFR",
  "key11": "4t8oKhN43dxJQLSgj65DKS98WoTMv6juUiQSRwckCdZkSxXuPhBRiBmn2EcP6MuNK6sBddCBopYnGRW2P8JLcDwN",
  "key12": "3GdFZLYdfeFeugZYAqcu6PHSnXdYkLvTw14MMSsuxrjqZmTrHGiVcePZjWXWjLmVr3BjJfB55YDMMHubhc2La4EU",
  "key13": "3zaC5yAqsCvN5jEbdoeBPrnfXLsosrW7utrbYm4sQDeYCGRRD8sV5Z64Vdy1Mt9PmnD2bwZuphCHmBurpPaBfjHr",
  "key14": "3CHHgYgdeCaLM8XLSJf99RxaShr4WWk7GoUHFrFF8z2Hk9pXqgrwtau1mpMe5qCYiXkZrB8CXcVLUn2y3YeXV8T1",
  "key15": "2PHxJN2MESAc1qAJLPPmAqgkKJd3yMxKbN23CpcCDVbNfDc87F8juwo5vXydnwXwGxdoLFGy5EehJnJ6F97pNb9C",
  "key16": "4SaoBwwBvZb1cPxevyMNuu6NdfK6XXLEqrWf71jVYNbomZZQS5Ck8FHCTS1oecnkpSoLA84QvmMWgmA68Jri9pmc",
  "key17": "2aEaW7v9mKxtYQXc5scoeHGTu4VuDJwopqWQSf9ZJRrHjRWLnbQhd2byJgNDQfz7HUevDQ9jYdurF4kF9vS1RXwB",
  "key18": "3Uwd8b76fTTJdoNazaSYF5s2QnBK84pcma2ctyuvky9VbMqx6HmyuS25Gb859xCBeGtvp78KMkPat1rs3yQTYo1B",
  "key19": "XbNJcPrBFrAFUC1fWsrR3tAXMGFCcU5B5q5sHue34CCCug8CGeqxiA5Q3gEkhCFC3c2LccP6HJauxbz9fb1nPoE",
  "key20": "64xvZUDKV3akFd7Wt4TFWDTQAeu3yF6DzaKAn5eRmchWKwXNouGYRaegH9Xnm5K6CTjWPPZXEYbobYmDS46c1Hx8",
  "key21": "5rKSaG2BvneSoidaY7ZFEBmVLPQ4J1GaXSo2okGeu1PAuwggp1zJocyNe8e9LVdZY2EFmfEQf39rvycwQc858X9J",
  "key22": "ii9jmNYpuW3M9Rt9yH3N1PzgMhxJLjsH7Nkb9EdBSNs8D8W6cpgkc1VBrr5GL35oZ2phhvDSC6yeneZyiWSzNt8",
  "key23": "5ZchuFGTas99hVsoHWFskNYy389jJk5b1HyR8RA8tPFMjFdn9JCXrdGbfbukpnqMHKBFiRWx5dEiZwvV9d3dMhg5",
  "key24": "4hwWvVDSaX2bdTXd2psZRFpWobznbqA8R5sMf1ZsJVGt8qTU1p4KcfRiZFr6wbaZYS79ciajrr1agfhriBnMtK1e",
  "key25": "45D2nTMpnC7A8SrWRtFQLKHgJm4dHbSeCepbJgRwYjVf2M27S9J2cLPW2ifJGtH7ufaybSM9SBRbgS7kqjEY4hnP",
  "key26": "5wvsAYrpykkgHNQMDbLNUPZX3w43FCwMPiZhKcUMEn56tPo4B7xXG5oha6DC66XJpXqJCoVkJZWRmtatKbfwWoJF",
  "key27": "3Ppr9bAUUrTbqUA4QkjHKDA1whhoqoU9Vn9ZWZNcFTWcabwuo3oMBdsa1F7r7EBu9ejcr81JLRVBg8huuvpvyhXg"
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

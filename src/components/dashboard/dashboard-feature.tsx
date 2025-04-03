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
    "3EMNdVZ45QccE98ogiJdv594gP7eaWRz9ozG4K6ba6xnGt6sMF6UTpZCVeiiULrUqwpFEpUoyaruzMK14xaksSh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qDj6VFq8kLwcN79EaFBMxMUsBeqjjhUGEFK7eE8SwZVZuKsFngrwN5PpGNiw1Ca9fbznykLiaXyopSP9Uow6rcF",
  "key1": "M8WfoFx8Zhy8M8Gka7Yq1mryr6K3aM7cBnqJPSWsW81WqWoSzt13cJ96hadbf3zhr2i9NYJ8A1VMBcpxxt4xze8",
  "key2": "MBoQ3RtcMWfFbfgetyRS8XBWNgqB2thJ3FMK1HkvkM41bCiHCA54J3iCtYYbDDEydGc9UnfKFookFTtBcfdgftJ",
  "key3": "2q7SYBtUfcL5VmRipJ3KpkBvULhYotiWTZ9mbha5booGxtAc6XC11pVZJDxQPJzhff8jMbVFHiFuRauySPka2XVp",
  "key4": "3XkVfeR6jMmEigerxxNaTMjjgAGE7uKgczZixUnfuritVLq3osHRTgFJP5TXKvCKtbaNxk2FSbXXrNNb3H6ZqKAH",
  "key5": "2V77bstMHFeDWMpmYi1PhGcijgWmb8ijZJXCNhuBosQkmDkPT1LJ2sy1mgtSX7QrLLFkmLXKLv7TFrhZwLAV7xNf",
  "key6": "BVLHCjLSY5vML2rosgY7ujjQNRxLEVyQGYr72MGXmbh1YhvRKW5QNTZnqpHQE56poz8tQt1wgoXss4nxdyYgqHP",
  "key7": "QgDAPgqxG5FKXcg8bXwEdzh3FdG8r2dY3BEXE7VhQoGmp1ALUc7aFSLqfsYrp7QQd2PWT3rJeoS54P91qqCjZiu",
  "key8": "3Xq1zRon7K1n65WdK89tqAk9Y3UKfriEu6f2RPfwxPgHpJtVs7MeBYczCBCe8cjpANUHZxpojxm7xCGnFUf4eBGA",
  "key9": "3MmBN6VvfLhE19ZCx2BesXHV6DFAg63iicZz7LE5wogvQxdWExPoNDJxDGeywPjvJARYtGZ6vHuKyQ9ac4y4Rtey",
  "key10": "j84VCZjsym3sA7uNwzh81mTTwS1D4Kfdc5r1Pp6komCWbzxCk1ajkq1o5HowdiUCzrxSGEDUah2qrQjDK6QGYZq",
  "key11": "39eQSPLqMBaa3XF84qafjFzgSkrPXcn5tJu5ooaLN8A7aBtxVMwTHfv2Jm1HqJVnvJzSZpW4tMgUmwoJhsm2StW8",
  "key12": "5yZ2JE6TUzaVJUgh3CsRvRLQQoLg9GSMVPvCrPWVYoxDkfdhfXJXmXtUxLZUKfPRzz3Nkas3Gxm6MFYHQzdodGBk",
  "key13": "LmJDP6wA4Tu2fEFM8gb4SymCAQ6kokz6U7ZpNVGJNwopKiJsbEGKzZVZLdgoqYh2SZsXFhAakxigB2S8svEvEKd",
  "key14": "5UKSjHShH1rFVvRcXbZvicxJqHHzwfVVez5uB78Z1R4x5aYQedx1MnsfJW4esYv6EYNSoGXMSBVo7MjfbiYZprAP",
  "key15": "2PizsFSsHqu5Q6HgaU8YsAp3DNZEsXybccDekXWqbSBAW6yV5VE5oT9SHq5EgtN8EgND15LNDEkCVpu3ZX4D6Cta",
  "key16": "8enCDWfCKpKcpPS79GyTk7Kyqape9chcY6vWzEaN8Zn4AsPZdgKWJiAT4JxN2h2aED2E1S3mF92SAkxMvjDyw4H",
  "key17": "BPivk1Ro2cF5Z5KUKupSk4Wg6Jemi25FoZ5rfPVR2TeYPsiXdpA2YpkxH7QU7wzjByfdkuebm6bAi9PakGf7eJE",
  "key18": "5xtVdhUURQ7oTCPb49yhPotyWF6ZxSeBH1FytfG49f7TC6bGfjE4UyKE1asf9EckxwWuosQu2kqrJZtrTKmzJ9Jy",
  "key19": "43MNF3CLZU8V3xGJXME3sQ8ePSCQubCWkEKP9yf4WzHxLKzzwzYmehQWJMATEKT5D9u8DZT1j8otrNUPhEzWu3Fd",
  "key20": "22ka1ptRSbjbkUipfn7NZtaPyEYTughpE3mnB2hpg5QrcxLeYWPYCynoKKXGBef1CBJ4B5AySVwnoEJnQ9tvsHg4",
  "key21": "WTaX3m4ueFD8z6RcABhYErYoYdTEifdD37heMKA4z6ixFwGK2sUF9m7SHQqzbsH76v9SPYPhsbgJMPjmj8jBAPj",
  "key22": "2ef8CA2xjtqeBqaB6kDo3Gn5D8KmStStBK2W5oVHAHMFcna7eM5ArG1nrgN7AZXUKamqBuLcevdgg28AdiZK4Lkp",
  "key23": "3fwkkro7DHXJc4Uw1FgvZZni4VrXQ5KiTG6jFcozF6oHKyEmvZHNu7XvbEHAmm2URyLh96bujR7nKzNWGP8i757z",
  "key24": "5BUTvSzzmXysBkjnQ92tLVLxMxSnD7ovFyGKmRNLZ7CF3dvjmzhdotppirWEBRMJJM6Vb5pFzm8K1j3X7XEzYN8i",
  "key25": "2t1Ywn2DacESEH23jBh9X6BTCv3He15NUhNFygCrSVUPjqxFyhduYDXsYz7VCWSrS2dfyez58AJZGFs93Rk9TXB1",
  "key26": "3MsdjwjgijpQ8rpgHERca2xDwYsca912mYj3sPsgNjevnfM6okUQbkxzJWPXkzYjTgka4BCKxXGyD1dPkixyPUBR",
  "key27": "66osrQN7t7S3kAsHzo5yVrdeEMnz6onKjq7DhUZyZ4hGngVxre9sPopymzzhewA5XJkbPRyZ3htTduyRgErd5HDq"
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

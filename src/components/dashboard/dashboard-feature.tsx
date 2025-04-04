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
    "621yNuKcKf8sowE3jN1ubdRRneHX4dP1NnPzbNxizf3yn1S8vGXSfBGNjao1MkjPeyYghbfELJcBSpVfJnv33MAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GDjkUcd4k1vbVKk7ZYsDaySi2Ciw6SXSz1ter4ksHELzQLBZwS47PAxGtKhfSfMhojdrr4i2DDr4J56k2XCp8gZ",
  "key1": "4h51BhFGtrWijBudXXcpDpvkRBJTXvua2PAWQgqCSHc3Rhekm2Nni2goEU1WeLWfLYVXSSZgyPGcnPJBM4MXW6jd",
  "key2": "3NSbccZZmLhuz4Z4RdKrf5TpjdCEaYBPAqextqEFMbSwVy3E5dF7oLKm6bmtASji1LD1hhYws39PQSEU56rpjwsg",
  "key3": "4tTH4NmmGEC8KfHvjJvgd3XbHfugWg8VDW6Ct3H8ZAvVxnZRZaTUgpk3T5dqn7a4iiVw8nrmjXL5begJEktemx3m",
  "key4": "3xX867uXp4QV5ZxPCHs8u7WQ3bAtQAf3e2YBpBG39rRUszhc2rf5CWzwnH5m7dBciyCGjaXQpqeNZZfSGy4uFtfN",
  "key5": "5PvzeMNi79rWRdt59kuawLwAKV3eWgndUW7iWw5SkZWjZG517tNdvjnwqung1ADLxgn7Nmv3Vn7P9eMSUY7EAFaZ",
  "key6": "2JTsTrkgkiQbauM9winbXNT4AgQgeZ8TCgYQRyk4M1RFeT7nnEXw2auY1VoQmuvFChW32p8FA9osG2TZ1ncncJR4",
  "key7": "4oXwgxFAyAFzSW5XL9T8A8EuFHQgNHDAPrCahR1KLsxjs5ybEVkgGmQfNv198eD2f8T31XkS4HUWV1fnFSuv28HN",
  "key8": "2DJ3jRxv2WDhzfKHoCVz146WeQfPgvQvDoJ9AvMmzmiAGAwhwdynjzCKCeR6hFP7EaVfETi2JvNsjpDu2aHoogkk",
  "key9": "3y3PfWpHJ7THYU8ejGmkmeMYd2DUmjrLZ4rCKAVSwePHs2oQg1j9ZFCMA9tuuJtG4v7vGrxTDgVTqGf5zeL81Jwd",
  "key10": "5KQ8wCVaLNFka2ZktDGvVZM2uQar3g4rDTvCX5kuB5WvJYDGE8ifYtVQDHvTjv7HcYnvJcTzhDbhqRwiXpnwQfYP",
  "key11": "3SZcmxTfwf6hc345DvTcPFw82vTVNHDrcaAQLmMAbCG5pgJibfHXf6PEQGtZb4SU8Gg4MqLC56fJW9ncWhR5QG1t",
  "key12": "4uUd8G7MqFD5PT4UrncdpQ41fAxnUcQokwy7AC8yLVhsNdMgK1XKegdbpk3su4tEMtUAHVi5J5SpNpFLTw7GBeye",
  "key13": "4Ae8nvz8BjA4x1BzRFCeNGPRAYVctTPQD36zSa9evGsM8Vc38twiTSZU1jkh8mkPhA9KJqfRyadsA6FMXhiuAWYN",
  "key14": "5UozhWvDf4drk5KSjbcKFdsb8RjE4JVzBf6MpoAow9aT8dLJ9iVi8wmQmGtdKGfj4NVwA3wFkRZznZPtwWJrjPA3",
  "key15": "5sEqEzqeVrvBXzJGxFBf1nGjFRXGHhDxPdiMcMmpLFvnvu7hbE8Lxif9X2STgWKriCkzy79fw9r38AFHYBitkCzp",
  "key16": "2WTZzqqEry3yZ7g6bMRCQ6PusjKNn6z1qqczNMTLpvLFPThsG7T8D1pGSjMWz8gwb3gQoK4aXuWweJLiNHdox3Kj",
  "key17": "3qCyRjixSf89UkMCNpkrVZ41T7VrjtxmFNNjqPx8jBaJW7SoSuqjq7ywcWHHKhzH7XmVKCN2qmKFov2pE1RmJbzZ",
  "key18": "miJMBk8cDZXfZUQuVxAZfJnd3YkwwRDfSbuCbhpM4L8g4nWgVdRhpiqoZZuV89jGvWipkYZ6WBDoR8mtca2hoCf",
  "key19": "2Fraic36urQXYrhDjHDCZYzHV2DUyhakG1XUTSFdQBGfhChYM5bpcNYwPq9TLxCafSHty9mpC99FAK23VwFsyBpb",
  "key20": "2Bur2gXXBp96XAtuTasAzu83sXLn6SRCceU6SYZ7KmHstTb8RcAsq2J1TnDHsGmKgbdLbHbSMibLYCiJjZN4KRqA",
  "key21": "52K4JaM5mhgQyqzidkMXRW5TDHH7ou1DeeyNBB6aEbYVv5ncpH8btTmrBevbLqxSThWaNKEVkJKdg2FiVuWFV7zb",
  "key22": "3K2rhGmhNxU6mxEUcj2Z63ykxxFnCJVxwyn6Uw8RN3obJbaysFVAR6T1sCL5xvkLNVr3bF2VmM5K1n6CUi1DgzDL",
  "key23": "4FeqvnGDQDz9HVcCoxDPPWvfJGsVCQfMeg78LbMiTxc8h21jDqfahWk9NrQUjRFCacUN3CVvnLbH2ddB9mJi7p47",
  "key24": "jBYiSRQocUbCf4pEo1cKSGtt6WBiCwY4Rg17nnPoWhz2XTg7oFHVk23i3arUVpmaG25NLsDFrxzrjRGYQAMmHng",
  "key25": "3Ap8iADxewrTtPxdrUJR5qHM6dF4Ch1EgkvxAerGLffqt5pcZ9gCymhrbnhj3dhkCaoH2LR9wU3vLaRK4iwVnaWw"
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

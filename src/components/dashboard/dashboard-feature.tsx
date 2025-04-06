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
    "Q1a4czhtkoggBrGadQUvxebaANj8EHLF6SYNxi2i4J2A9UapyaRtYS8scTohftKgJukVq9Bbk9BVe9adJhHP14g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qfJRu6bhh8N8QNSCzudQba8guXun31zHCbN6yLzGQUfWHMrvR7Bu6TmZQHRFmaJCZrHCeSdyysNFaUeU999ecCT",
  "key1": "3NnVJ3jdgDq6g7EWZ37bpxWbEzepa3mte3FNwqErtaRkfTsJPBoucrZyKBwHj1vxFs2eX1nEa2bZusZ8cRcmUoP6",
  "key2": "25mhz3puMG5w2M3pttENXRk1euA71KHricgEMisGdqmQxajEFct9f213F78aH9vLCB4mRbBpKpMpDKM8CmWQuGNx",
  "key3": "41Y8NYpRqC9hCEa5MaYM6dQKCWb3vzQtuT9Fj32EeUngVActGPB9pC93cwjXcJtMofv1eqaYfNptmwUYixLLSQC5",
  "key4": "59NxdZi74q1GJ7aiapzVySt51R8uWVxZijo5zs8ihaESDuTKDzBDaCdjuHPUcvd5oF9BVFjDjCwX3rCmrUBxgJJf",
  "key5": "3wbqfwg5dG6UF26wFqbXCHAyATLG8u5hVVio7xPDZwgdAXENSVmF88LA717KHDQJg8aNnxSELHVjceaoHWcYG4u2",
  "key6": "4XGkHZRr1WvtJcjHPFoAFzSfDSxCpHBiqGm8H8s5sDzZW1cpPG4MkqibdDGhsLkkpx7LcuozfTq26duZCwc2zYe5",
  "key7": "4HryABUcScUEiajSg4b41exV6Gh4at7v3CUTfuy9EPZSLGANyHLWmyPevKKcLyTtF5R43pvgm4sbA5hkXPzE7ZXz",
  "key8": "22YX9z6mMFFzyHdSsFSWwcn7sdsAwcnZGfjgGhVevEacrFtr4NqVot24pKomRwvvEjT775jR7JhjYkbFroReBewt",
  "key9": "38nTzdsovenK9UsjUCDVLxyHNvayM9CzBVByc2AGebzzoyR8hieGde8W8qnAHjH8BVhAyBbQmBUemrL7hja7Sga5",
  "key10": "3vnX3hJDemNo9dvJXGnCW8qjfBY55JKFhsToYVXnbzx8ARcirBD5p8CsMKgETD7fsUwa1mna1b4zHN8fjLnLhWby",
  "key11": "5Fqmoqc5GrrXS5T4zFmPWQqqW27sAEMFmPcUvRHTi7jQcEzFBFsSSaSd3Re1kp8wAsZhEnjcJbVscmpcgjeBxMnX",
  "key12": "33MtEcTaMDPsPHC6EAfD3eqFBScAttxHuuaGVDPhLmTQNbFeEfj5wfA7QfWTgdwcxiXkSXBJEiCWUn8Z3g6BXNAf",
  "key13": "3VUnVtzfKXeX4eTHkLeJDKezBi4K9s547h5kdgdm9T1q2okCyirK3Kfb4cuTngq7mEc8ATKArJZNmo961hxDKWrb",
  "key14": "4He8Bi5mZ98GpK1i3e7LVGFrBN3jnnatDv7bQR6uvWC2onB8nnC1KPhfcvFXvcM1KgHKAZmqEaAGoqHn576dKaxS",
  "key15": "2LhrgQuLtmNuWY1tf7QbAUdYpnFxyre1Gi2Kz6kJUx3GcZvU3fphs7zAhbrWTYSZ9iAqLyaLAvgaRf68tnnoRsDt",
  "key16": "3Dwoo7yfYeFRpHKkyZLRQxURZcWRWmdqnNH7bH3svtDHCvxNtWhYSH8Ad79zA34sBNVTuFZJzwGKihoTgtKuALXj",
  "key17": "2nTRcUNQzmxXYUQ7SKjxm3Nsgd6SP92KzTgu4QdqmoBjgptNSR5t4AmmPXg7buj3LAfuTTLiBXmbSzDWvr5ztf6p",
  "key18": "3KnDNyiSXmKGk1xgsAfPuje8bhvgGC8U2B9JkZTh76Qef6wyboWAoXNbKcUUvUn15VLUia3kjnATvehtXQncxWBH",
  "key19": "KVHYafCmbb1964rDB2aZskhS7USFtZPLHmSna54oXEcpLSwyqGkfYRdFgnatjEN7dcWPto6n4M9QLYFgdPfDbR9",
  "key20": "4mMYx4EUPYEtzTKbPqtsSZb114f6eL8u7WhWJA3hq2Vh6Zrim8j1g4VcFELmwEveMWCudzQnGUwvUEYqaUa1o1U7",
  "key21": "XzBC12HMmGiewq9yWGWAM6jgYgNkv6mrz2oPGf2HFA8zvuiVhELrKqcwMHqcLPycfsvFj92fa587hYvKQGTXE3u",
  "key22": "9yFFGNKEvDJY61CZszbbANoCytqzUXDYhko56cEBmWdSUntwpsL3NvF7Y3CfiUC6rVUy4GLNN2em16EkrFD2bpD",
  "key23": "Loft7M4Pbdf1L5z3wctqyPPP212dbaKe5W9rqJqaeRqn4fdJtTGZTwRnN1h3JEjDB2pxqCdWewYQSCTKDLdsV8k",
  "key24": "3qqnHw5ciHVh5qmWhwxst1tZ86R7aM4q4KtygZktJLjiC5sXsXE2rUaQ6CyXV9DDMscLMFZxNfpawPNGGyyTAaiA",
  "key25": "3AET8j1HuPwJbvtCYGtvCyJZCF24owHdyyrAmagTVaFdpimNuveMXknSVUrgnKANg4NsysR3j4VANnseW9dnnL2",
  "key26": "5QhHkNKoB7kxhe74tajZUtzo5tvYgjitTKB3ibao1CQRLsMoANrGDbury2TL5J2R3iixx77LZ2RM6ZEfHi29JSxV",
  "key27": "2AcuShfX5k5Su2MrUVr3FbRNHWNL1DLsXGH5beBX51AufR63UYMVxxtrdF8ZK3tBaZqCXMC1fcBmVn1nXi9en2iJ"
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

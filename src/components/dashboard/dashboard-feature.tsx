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
    "z7nxo6st5Wh7vsjZ7TN3PMgbMW8qc6mJGJZv6cJjJV1n6TLihgEAh2NfWGaNtF19D6gcZRXU4K7cVSgN3Vdraiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeDH2tuVLudntoVgZFN6NWKoVMduz6tYJobmEhXErzhqtaeDh2sxyMM1iDSFgjQNuSfYQiwpqfGrKhUdQiWSxah",
  "key1": "2qB689Apq5LimbwHb2wuwNg7cx2e49akgNJeAhdF87TEZMxprPafCs1ANCnVgguhwta8w6LhYwYGyoLkTVKfnVxR",
  "key2": "4Nimpamk6U3BXQgwx8FYLcWSqtBVTCUS8qdVUCyc7LU9xWGSK85NK79fPQjiout3WT31M2QR4yDhvkRSBUa5ceEL",
  "key3": "5coT6DYpqgNYtrRWAh3dgFGnkgGN5DfvDAMgzqSSgKtuAERAkyhkMQoNd6hXHvj7yCxxdWBTwbY7Zp44aKnv1Vvc",
  "key4": "1huLg4KaFEeisH1du84xfQ4zTh364AMkQZbVfGCBjaSwr24zYHtDxabrorn5iHGG4jsbYyxZBtHJkGaHM3dzPVA",
  "key5": "4vKypH7Yb9Wtp3GGicGasoDBWS7EmVKaUbQjU9fZ5pkv4Dn5xuRydRMcJUcHeXsBQnwqNWdDRLMhbm3DuEtRRDcr",
  "key6": "5wZtB7JLF4aCiZ22fcGDsjBjTmgwRgqmyZej4kJsyhbajVWEBg9xaAmGm9jsyGkfNHZ5kcXncYjVc2b4H75dgJZZ",
  "key7": "41gyTpXht93R4zr2959KDWKqd8zVJTe6EQFVNq6NSG9S4AnvzyHMQ9bUCbTLmRNvQzFtj7WXvLZ6fdpnxZbHXZZS",
  "key8": "28HdzaeFjZsaNNaCzuCaH3bjTTCxDBJndfhkC49gukoKkoy7NqgmVtmgECBuoQZGk9qManrBjfq5AqbRkJ3eNhiq",
  "key9": "297hjeqJhfuuma5cgG4k1ZW7zpoWFKXugVE7eH4sSqtxYnHw1ReH7SA3ipqKoUncsb6ywgyMv42FVEzvtAuqB4og",
  "key10": "57cqHTWJgr6vpDk8BRWUDTdrJHZTRbgqcR1EUCAJvffwtAsCS8zWdCFLoPcCyE4J2goEjkaSrSjc8JmzgGndLeAX",
  "key11": "4anzvwejKcJCXjNTcUBHEBB7fcaFLWfoy7vcTVdFQyja8e8hrVfSsnZqf6AWUeWtPX7G4MotyuJCLubMHGBbeTvg",
  "key12": "4AVeNeVV7sLAjjun8ZXL5Hdy7gk3XLZNkEfC9Y4Gi7gopnRiugse8AKqSNA28mmz7HcPY9nyejQr59zAFFeA1SrX",
  "key13": "2Wr3HnUDKwhiya7zpFXRwp4maiFVhfzRrEBLAHhzvMnMGgbkDke387VeprUoEAogd5qMESGhBpEYQVKsB4Bbh3Sa",
  "key14": "3Hbsjx5t8SH9q77Jd8ynvSrEFTS6JeNdDkA3B9L2sVSBxeANMK8wNJRaVNbmqD2xv2d5YWeTN354n9QqsoJf4nTh",
  "key15": "fXyJ1yS3cWS2C9uENVUjgpAXv28U3rURx2ii7UkowpzFwcuWvCmHJUsybshASnuyWxgNxWnABw8bDJhBVitjq3C",
  "key16": "2xHwSLaGAvi8SAQHPf7kCHF9Yix62qsnEGBpYYxAMNiQb3ARPDcBH8WEoKeWMmxC2KNaUJnA9PAkvwYsUnFgS4kD",
  "key17": "3yGeCju8hVuVw2hcvPFuKFGMuxYCsNsaLqhnNs5nVX8UchqdVv9wRmFCVq9YkNHEXvV2qieEoFXo4p3mHYBjNa2L",
  "key18": "5opYY53hKZdhB4sTdysWctop3h64jgqAVYkbP3qaA59DfHR8cTY8Vn4KxPfENMHhFnVvccGY5Dgiz4YAC9E1Jfyt",
  "key19": "5SfVLaNr23Kk6REseCuJZ9tym4xkNEmy6SYdekQoVMx3qoNNLWZMjVk2gXKcjemZRUL31fn9vyHKt12KDxA5yJ1N",
  "key20": "62q3Bv6sxGfxQQFbJMgwUR9Z9S6GrFuT4sRDCE8iwoBydCrYRYdyWHtBNWwpKbXdM5KcEoG2vmv5jBLkxPgNKL7w",
  "key21": "57pXwgVckHDvTpLVfSUTJkdbFtoLwkhs4Q9ReU3Xc76fJMEEccbSwAsUtcGUVu4sbpzp7Ko5ur54sjL6KXree6M4",
  "key22": "RvaQBDaMsY8wibYrrVrbRscQz8NRdq5p1SqVEAaFMvKWeYndCMYVejwATav69GBHfqcKStoA74XPaszFHDPhtH4",
  "key23": "9UsbbYcaC6cCs9j1tjPzx2wPc2KDFHAna3jqhF8wZUU4fscMmqYJbZN2b4MKtF4wRx5GD4XALgfGKB8bMQ88bV7",
  "key24": "4hDLARsrQMXxepKzvodU5eit7qyqQjmVzS8FbyFfvmu5dDsStUGYkAcLTk24k92wPhbsZhPjHqsPg78oukyPx5HE",
  "key25": "4rnf3Vycwpi1iuwzFmYVPFoDQSQpa7KsskSNrC547hxo7gM31jtMgh3XVW1L7w4aYGZk5uR18yQN826qgZfGu4M3",
  "key26": "2RPoDtZxqL7rpia5BsoYdZkZh3eooJn9oQbeLYhTETdWZDNpvX44Grg3DNKtWjLqXBUSi5S4NyVpHwGmwYKN7zHd"
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

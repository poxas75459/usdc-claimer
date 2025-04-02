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
    "5uxaHDi6fMm3f5LPnC7QkTRohf8Qyk6sYnpPbL7jFvdh75LTfMgTCKcKeJNrssZpAXvYKC7VXSAGCseBagH12VpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfAd9JCMctZwbtskpiifPo1nVmuBVkPeCzSc89do4ktWnY5b3BxDe6o88s6h5k6MimDYW5jfqY6RgSVhqCUThc6",
  "key1": "2okXZn8zA16twwh9r1xLY7ioGAoER8fY7yuyVGVCJaJy17PDAa3SBcb2usM25GbrNTWGg6rZYxFZZ4NxjEezQ7fp",
  "key2": "4AuQUdFjqz73p5jNkuF2koryur7UAHtvmpNSh9GTwo3cUjBadrEGPZCyHVdq1pYRMyNdqinQ9WX9bjqSaZGtzDCS",
  "key3": "4hztjUb5ZqUDHhUjLowszDL9H8gVqXSGHBKGYKseMvwS8oUsCwzunKceEuR3jSYGWzQjFdZsq5bajFgYNzNBbQrD",
  "key4": "3sr6XEfHT5Po22cvFrk9yfti6HLXfBZxfanBjtpvjTrYYRca1UYZ6Vw4jRSeyxM9G4W5e8mqQdYPVmY7XV1LL2kP",
  "key5": "4Q5mKoPF2zhZLdPa5Rcxo1Tqo86LUxwN66rECryLSATSMVg3Gjhev5GMks4b1Z9anRNCdgwwZXa4cBtGSbSwc5nm",
  "key6": "3oAu8Tu7a5CYp7gQycozcVqGpRMDQdCzxTtzaugux6inhQRUPNU175jPqrAVg5fYgq6wgHBGH3gePKJ8MxhCSmV8",
  "key7": "4kU57FN86JY3xeZXRQNwC4pradManRBZzXovTL5GaQcEG537Wrmvp1eVYSJXaGrdnLQaBwbTUDEWBecoRzic6EcC",
  "key8": "5X7Rcp1ubVyQisgDAghJwKX12DpBWZ7XS8NBx84GwXfWERb85ZHyH4qbwCReTAGNiDW3t9dgU9xo9gNNtRw6Gjwx",
  "key9": "3fGXuZLYFrDKaDYUnNwnQB6BZUb7btvcQ2seu93b6JZjMVhGFZH5tZ4H7vLWskKXfFjs7sQGZX8wqjA3VigL2Buz",
  "key10": "4zYJqNUdY91tDAgTXsJUTotofQRr69uZ6KhCh3jf5woU7Ap72vVuSRfHPJrAbAcWe4nqDzyfufAySyodK3vxfTUE",
  "key11": "3Eb1gRqQkrLtjAiy3GqdHhoxMyd785YS2CDGFrFc5TDYH5FqT7i9TLxXMNfZ7PsjLDgUSyjk662L2mvw2YXMAUza",
  "key12": "4nz8tQ23m8RMuyrKVRoTbW5ELgXR2GUUgQuG8T9L1v7dFF7mzJrnWsLUd2uedYuG8kRCiLrngqPZbTu1YLdzRWsM",
  "key13": "ZrRjriGW263RSGhmfiCVHyjmNnXvF2BjSEDEw8kRpkmVinwRMrgnGJGY6hFvdojhrLAUb5zid6PL6SzfeUhMvzv",
  "key14": "32TsCmfPZZTZbKkAmHYTvF21WZRRzyyCwdLMkhbL2UitAoMjuHU2ho93NEamNoWDpoLvk5ZsHC9hcUfbTM56qRsD",
  "key15": "4s7EKV7Rj9W6Hc16bJEfTSgXFRXrG1umMNbqXRrXZHx4GU2HGCMZjjNcKoQLEfsrhaJ5ntu2pkyzCe7qRyhvvcZH",
  "key16": "3Td39rJP3zLeQab6fZmkTMh57y3JiJxMQyjqutZFz7v3rDwnHuKbccrjKvjKrYkkxoezxT1VUYX4TNNiueraswGu",
  "key17": "D8Xm4dELHVxvb5yH2mtey1gFZNWvmk5uzDzpdnNLvMgVR6bKFNHVMrENHrnLcaXRiu4Kag1AUorHdgksS226UW2",
  "key18": "2faFfKmk7UoeyrCx2LCAfzudcS7Fm6SEUPq6qXaVhWrhEfB4HapnAhJWy4Kz75hA6vB3bbLEgUEhWx2WCt7PXfo1",
  "key19": "3a5za8bC6pP9imAeYNGQyj8iqQfbS6iAb9r5MZZi2vvQRdc7quLRjpiCRsr8Qhs8oiN56LEEVo6nFsdq8fkii4BU",
  "key20": "5xzfhztYrg1RRGEhtASApD4r7UstvePM3rBSjeGfSe1ahYdZLrmDYuBdejzWvEEYrtKxaByiHestqsfkKXyZ6BJB",
  "key21": "2kYAU1poGJYWDhDkByrdaYREJjRG8RmdKwVy8oLqZgR8n35zdLMZYUqHASMtZmy854CXXbBEUpPUNmt6gQhJLM3J",
  "key22": "4Zf4gMbmy9mtxFMyTCrT8T6yMsoT29NDpGSwrPhTCzdta9Yi943WfEuRtgGG9AV4mokszfKYoC73CTXwdGJYLNQE",
  "key23": "2DpeBAWfsWAco1qmPCeVcAkrXhB5WqoAyaXg3Zi5JJAb2jvNneTPKhTY5h7kCa2jEH5icJ8cknpsCZsBq8FAJTnt",
  "key24": "67e42p1dXVqAYGfoL6ZRE4wF14RPA628BLrx9KAcxUbuFJd8g836WV6wDMeTPxHDd2TYoAAecipGXgQ9XR9jAjKq"
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

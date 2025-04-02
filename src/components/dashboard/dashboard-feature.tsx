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
    "48Vhv5rPVDhJsBaJd2ASjuUXKAs8Sg4GM5Q1wXAcYx3HZQfrLKDcdrniEBpGhJ2jsjaM6KMHkyG6mUk1siiNBTzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buWXQUXG7a7gQP2TcLChW2hRTMWpa38JwXWvACPmAFY7qGTSvP2tRraSykEP9VrcDd6QWmiRQMuXWP8q6t4JTAT",
  "key1": "2PNNkjB9Z92dP6NAg5KHTED1euNgk3LCwCheuQsu3U3JgpNy3kjQKBqWGbqrJeMd5MgTBN5Z7BEDbxK8FfTW5ytK",
  "key2": "3YyRMCtjynjdfmrg2i9RYxLgYtEjA9bn8nQ9qeZBZm3MpNtW4vsMKU7GhEUzHweDmLv94fW6ZNmjfTD31LZBT7Vg",
  "key3": "zmCV8qCYob1CKmjCzsGt8vyQBvsWfZsSasMttfLsaqH6iempEbFEFifGnHww6i5XyKqu3gZXcamPjYeYjN7i9Xr",
  "key4": "SCSKA3LQnnKamNF2cVmceQnKdz9sYB33jB26zejDbQ28TsgjC3517zJPh7qx8EtXC546nGDmSA6NwDs4YZksiwt",
  "key5": "2D6HZzJFPx4reGrz7wYNmH5cZT1W9UoKJYA3AUStjo84fWa9pb76Rcfa2skyuQriWqBjrw7opk1tyVxW5rK3xQd1",
  "key6": "7iBDLReout53vtmfkdAbCzXEoswqYMtnLyV54gYifbkQQ1xUDiWBqE8TzpbPKo9apd5g35YzrUaH1fHe5RJ9AF2",
  "key7": "3o2kd6bx7VF6EV9sxKwF6uThQP7kvwge6gvgvayeRKAhmPd1fDeyz5W3MgB6tcUdZX2tqxm4eAC9C3C3ia2KE4fp",
  "key8": "2w2fsrVKYPKqYjimL3T73L2ZqhHf27urT6Y9XNZdsnuo4XSG23ARteGDeFVanwD8pbnbvRLhdbS8F2UWqnVFzZK1",
  "key9": "4wXFB28pNvHFAyuPCatqzRT2JPUfubpZWnQhmEEQUCzfxNy7nKGjK8HLJLA4REXE4sz9GNCanY6onX3GTNdEvp6i",
  "key10": "2kbpFiDZQUyj93QMHcMrEVkPCxYocXeNszM8BLX3kq11dby2sFzPgtAX6yGp6nT6GECw96nxgxHugbAYuQbBywsd",
  "key11": "2LBdrgATFvi8iHtjohM99FkgZeYgrzBt45eNa1nft45WaP6CFpgx8LZn4WzV2bNhNEFZDiSrCgj1AascAPZq4tF6",
  "key12": "w8LcP7dzQq4TkKgfUkUfUd7YWrCs9ckzCmfX4SYyj39cDrvYRvf2MwJ9rfo7MgdrGCvfQrMunK6jYVrfgcGKbuh",
  "key13": "Qz7Que4QuPosbtw15SJsNs4voPakznNv5QkTQ9zV3EmAVo8dcfE4b5Q9RtFJf9K2zdzL9EAS7qdTkqKaW8FfcKm",
  "key14": "2GWA8LvVx7JBwBFyKJK3GUedV1RN9byKk7ENty2Me6XDCKxii17PjBWvzdinB39ajRNEQVxvgCxSK6Map4sYRiiA",
  "key15": "TczQN5N2qi3LFGdwgtM2xv7Fr74cA1bWryhZzvjPpt9FhfKmQhFgz3RZry4HGyXx3rYDa3Xqudt4j9e9nQuSK3E",
  "key16": "vbgXtCHtaTZpa5hZTjpTMDuyWCR93DfoQecYorTaVK9eGPdGmjWN8CdYokgmntZa4SJyBmtWNtNesHxdwhmFaYn",
  "key17": "5KAtnGU8Btzn5rAiwPKHCUmAgCNDaLU1fuqtdsxbHaetUAy414BDMhPZjFJ4Yy1DLT7frUcMHoVY6RxmyutAoedK",
  "key18": "3nA9ppuzcRhmhkXL4BGF16hCGzLq2niLYsWfAWFSq6dKeSJW9xSd5F2KsHmMadqvUG2rWhuAaNqvrcmcey1qrxL6",
  "key19": "5eb5MgSFKPNF6G6BwbcDsjbi9PBURJ52Frr5GvAiQwu29ipFAErzVF4qvYYDKmRkNGdzp7NTG71MX7BjBecC6mcR",
  "key20": "5pk2jh7c6f3KWYetMRNXQ9ehEoc7i21oKzAzLa2WhHKb4s79zyXHe6MDEBfMKBugpWxGRhLHjcKCg4gbDRzdMYQU",
  "key21": "uHhpw6Efxgqa3uYk1FsgCoVBMaVjT22xkuYhEg9UJt5F5BVrJy2pNX1mx5RDit8dc42YnFBBztGHvHxpnEty78m",
  "key22": "3fQXtPvsbnQy9nq2b95PSA2wTKB5a7gzDriLXdii8GDTf7eXNnRBTiuhWV7mrtTt6u6J6qGnkPD46qsBaavevutM",
  "key23": "LEE57UoZa9Jw3XEpP2ZLerW8HU1LpQZHjpEGQytJVLgPh7xKpKam6L1tD7nF1wFUj2P2dB2atf33wX5Jyea8cvk",
  "key24": "4PdQB7Rix5zhvLZVSKCqh2Y9wMtnQYGBJjKaxP35ot1NfQnWiWdvubBVYW44HCpE5XrCEJbzUFo2VaekvXytVjNa",
  "key25": "3GsqQQDxfFk1k7iuGkspKAdBwVuRkULNHKabmsQFDJsdxGdhxWGNNs1gATvJRNAJ2QBhi6Mnf6hQtnpewaox7hCq",
  "key26": "2GFvRiNzUVufP4aKR4jDn5awmKX3eV1AQpn7QZNb9aL5V1He6UrwXpCYPmLJTAezLrhsvzz6Xki7TyU5yJ4b6j4h",
  "key27": "3k7eSpwQgQ1eqx8i1unhuc6N6dC5xzw5KJKcS7pjm5eJMDgLmmyTzsLAtCs1D26RvKZMNVwVubrzsmJSWHtgjHxC",
  "key28": "kv8wXEmtXDGaMp2JJHQYrJzzg7seqAwmg9yjLEAu6nhqBwnybkWsgEFvDik5TbEmvGoVB1vddiVxwDWobaQXyTH",
  "key29": "3GyQxU8faSD4xPUb6zdM1bpUo1gszTXY42SGZwn4jvJYr9VSQA3FS5dnM2v4SoCKqvabsmXenpMGoEfMCNfvj1SF",
  "key30": "3TUGMSWmnSxsqK2rA16UW29b38ruxJq5dGCiiU12JmsKGYRri5q3Vdj94fyCLLESazUz1SRQXLuE6marJYdXjyyn",
  "key31": "3cSB1gF6SB6PF6Nnfxmk6g9WDz1NRze7djKhcKaXJuwrooG8JZ4wbG9rKeZozsaUpSMmtVzVS8zSJmuvZfadT4XK",
  "key32": "5DioZkZ4NFjWf2dQR4b3pWcm7gg3kxFz4rG5jpGpSrypeyzJnGamhcNXzpWoEXqURK4mhCKTSmcSAnqgmzZDYnLv",
  "key33": "rkwDBVio1PpXdpFnsWZhqQc9KfJ2qRb82G3awiV2k7ciT9nnMV2sJ1bnUtf4krrDAzYPEAEcXgfTbFof1xhNigr",
  "key34": "3NqAfprFRTqm5FnavKDuxgBANXCNr9gnz5jhDefLtn8ivYXEBwAhnngCNLis7ffNHTASn8dwjgx4JSWobmYVN1Jg",
  "key35": "5QwKsaitbtmSi2zp3UwUqJUyuLSrfoPcBs6dCTSeztfp3EzwBgmuojijEzyoewQCkYGefinSB1F9fk374uyepGzw",
  "key36": "2it8SneYL38YJBACnow7qshXy78iu12su35WLi7cvCYzJrnRpCJdbeWdZNGnL3NMRyaubDL96K9mqCQeGfC1qK4U",
  "key37": "U6ZGpVCRFPpp8aGsCvQyVKpciLjg5oJtKojoaMi8eU4WzrvLYqnCpGhRdxSppSJuTiuFWevPY5EYcKeKjwJvfRh"
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

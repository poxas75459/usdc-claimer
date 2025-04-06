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
    "5JXic6Z95fTAv11CtqPn7kDi1CGdWU8wSFroP2759aeRo9qiQzewau6qYedQdpu4dWPhGiFYBnC6AoB2NBgj8YeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Gd3KUu2UcLMcX4Nhan2xzdQbGA8fJt3CxjZ51VnSxPxyHCpJps5EB4YaRtjbbosvEagkJ92hALPeRZy7X2GFxw",
  "key1": "4BjPt92UUEsRQgGp8Kjj7b1m7Q99HLno2wdojmWDP2E8Euk9wCYGqUGUb5EmmH6JbXDevyTbJwmSzf7qAGvBTNpa",
  "key2": "2MZnQwfJVJLpAB6uSe361WUEvkW78pQJmorpQ6TrBFd8Qsh46g8pue7uRC9dSr7f26uHATACmsrxrtu1CvWCd4kT",
  "key3": "2c2v6tcGSBcwvnmJa8RAUBoqwHDg4wfcb4gy8yU42BMUB6hGP8FZ6e6Xo4aEGGcrcGiEXjRfUdY23ctn4h75ftsm",
  "key4": "a4gARinAfgoihMJuJJfgUYiLz4X39r2ft2ZNMdH9T6ZuD7ZfaL8nNWf3PE75kPzdzf4nve8nRNNFEDDKSsykMY6",
  "key5": "2UTxFCiu2kcXBWzpYSEs1VPEEBRFNKmwbLpPQHNQGn8t4HwXLP8yupj5xmaaKzuMhe4Mk454ZdXsDJ3ncbDrYdiV",
  "key6": "4hrrzSzKccv6cNav5jWTWVeLPH7H9mjRZLNiEmaRyE594vtncoFBTjuCicm4ZUZ4XNS6xg55aeN7tWgoEgYLnP1M",
  "key7": "5Dxn1YAqWbBcM2Ky5UPtyvHgw6hGagYMpYWDsiQDynqbHaaGR2snys9ff2RgBvaLC3YwhDSvbGLrtc1bUsTjBx82",
  "key8": "3USAMCv6TW52RGvMpRiBEm9k9fzoUk2AwtM2nPmWDP6ZcTUfHNQL5qR5RqFC8TYWjDZtTytVfCXKrgpffDGXr5q3",
  "key9": "3zkFg8Hb18Yq9WwXQoHzF9zr3yHSNLPUax1YDKSvKf1QzfapVzt2xiqKLxwTENTSFzgwvbk9XBb1r1j294vSn46B",
  "key10": "5H2AYBtSAXKjBazvvJaCZPmzF4rouYVrdhHjPfmz9Ebnm2DjP4KasWfUB7yEovLEnS8yJ3SVo3CCaMM5c8xJdVvi",
  "key11": "Ms2v5xcMYigTyhqrYbwjUB3uGTnrBuwA1o5wDfdqZMEcxq5tvdhL54AqJ2jigoZcmNWiFceF4LpEKABUUiRvQbd",
  "key12": "4A1feVhV92hoK3nqrxk3YG5BZny9KV2suTMEDKw7zhqM5TRJN1Khg1dNfsLFKkdzV8qBNJpuSAdpx6Vwf9QbRmTV",
  "key13": "QggB5hH1taCPtemHeyMctK2pqMhQbNqLqZFqijzP5NozFW3nAAjAz3wbfH2Tkk68YUgaww8HQabMj7BcXYKyXjV",
  "key14": "rmTdNchigKvSsEsFuhJchkdQaxFntu7GBq7VtgZUjLdfSWpqiXbgfgJUu6s7m2A2FLhBk4WPSJMcVE1bADQFRue",
  "key15": "59t4zM98w1T8zF8TWzanF4Ai7EuBnV4ULR7rAbGjSyoYaqw5hBWQ1Bkgchvduw5VR7Dr3EQaKVMSi31P61yDeeR4",
  "key16": "5jG7jYXYtFaPbZzJ3mhkKyuDn153fqmfoEcCQB87x1yLXvbvMbAmXF1i1X7o9Gj8ZN9zU1e9zRWZQszyoAtKTW7M",
  "key17": "3rEb9jFUN6pQgtCK9sMV4JXJdsRWsEGX68ArZYXxGbaC2gAbXtEd46SwjP3QyhvPhHqKn1t7gdbfvirbs1svitdZ",
  "key18": "2XceEFDNoSwZSZx2nRxngh7rcqjtgtms6Kpy9V3YgF51F2Tnh7WCqmXLXJbsABEm5cMG51j99M5qbujt7mTuVwcE",
  "key19": "2YLoHPCZ1PRnC3UcDXM19g6uzYegMrUQC1hwgoHKVP7rs7VQ66JxE3RHfE9FffBeN6ShG4KjvKtqCwFHev6UQdDt",
  "key20": "4dMtuG8nQYpwfk2pft6FvapkZR41N8SG2tTtrh4PJgqeFLifDB5DGnYhrb5aW5sbC13gAxW2q3qohFNikaFZEa89",
  "key21": "3eJoemqawTL3rHxkt5vvbwUAgJpv1ZMqQoA5T42eMQWHAXJ4kKgzpnAo6HRHq1i8DwSohTCdVsDNbhojnHgPBY8L",
  "key22": "4yH1v7K2sJatFKS6zwJX3qZcY1kz7kLLANqeT2pR7feU9a2Z1KhFdWsqv3LrzSkkjhqe954voFkYASgPG4ZgbSui",
  "key23": "5Bfwxp38QG1Dxo9Jo8VHqMncTiTEobY1nGwsk1HTLvGzEzqtD96BU2rbPGnBj2fACCh7r12UbyAZhz5xD2hBYNqK",
  "key24": "1hknEmbaTrUgdSpFyJCnKA8HjEnxfq39HBeXtBzixYBRPvPJFn2EP9297HYJktDwv3CyuPeophizv3XYbkcPZa7",
  "key25": "32RiEmke8a3KQ2ZybR6i1MDpsinqjwSHhWSzPEG88MiVMfN15WFzBdzyWFZHhYQwpu2X3NXGx52cdnQJyy8Fkrnk",
  "key26": "3TXW5YJfXH4Mk7TFLHKAuY7nvWauGySiPKioSm7oKAiijNTi9zAZDZSgpaxXpP9He9nNQnSFDvTNgFBHbAXtwTQ7",
  "key27": "24aFdbRFPST3ViPqe6Bhm8SdduCD88UJcCtjrZEV6eauWdPeatczcbwLRb8w8UjVPmbdwbJEr4oZJUYdGVWtWBdZ",
  "key28": "3iZKDAP1BZeXmcEnjTm6ajPfxHd5RiqnxJDXBNW3HkHTCvuGU1twgyk1Luck3PRwfQ2fccsC3mKF4zxPhDrjxENV",
  "key29": "4sZQPWT4EvkiZTeyFAucRsY8u9RLLk6mRpgPbwdVJzKXYfaoyNZQwsL8kueCWMA3gpea3exrWJb6TJE9qgpYK4Jj",
  "key30": "2SJGJunZQdiWgqA6qZSiTw4UapGZcvia2KUn2y5fNK7eqdUbmivJZuei41A8Jud9WevAqt34xUMC932L7U5kxM7w",
  "key31": "3zUw71Bf2N8Fukw9N8V4VNnrjmMCPBYgmcNgT15nxjzVa4gf7wedeKi772b3kStJFuy6dbxGXDQbTQSWPa5QYnLG",
  "key32": "5cKyq4CMLia3RwSdiEm7n8EK5mfhTjgHCBw5AkU2ZpoqJ4FpBd5Q84iQdvVYHiKBgR5w6rhM76Desjf579L6K2r7",
  "key33": "4UZkyCGmKt9c3cngYsbftJTi4mBh7XVY6XyfAxfLnJtGb7NRA2zaksRrdEsEUHwoptPfUDqoJzNgke4ihWuAWGAS",
  "key34": "4wotwGQJkCX2VZi7FhdKZVKHgJvxhS8J9isHLzbNWok2ZA6zns57KEr4XAcpzoNagkTa1FRheKdLSLnadpS3ishH",
  "key35": "3VugXfk8EvzScarDbnndvx7aq9ZNG4mmyLsbKAgYdg3V2tGTJazV9w1NdgG9NAE6vrYVqTtQ9PqxGUpY8VF9h5US",
  "key36": "4kWrm2yuymdmdkffKcFtGg5g7PsR4H31eGUNEkLGVezigNrthpjrVfTVQe9wQTSy3t798zUbjPtGFGcime4fgdhF",
  "key37": "3mF4DjeBbksTF4P9zmNsxjtcVGv9JmFDzuyVcMFVwpygEah4Ct5V5B3CNdUHgRZFomgArcCamLa2RvLNPX9ef6rX",
  "key38": "3JdPsxLKLEZ76exhCUrbfez3UTRH5jwDZDJfiDkYGQkbzumnspBc43qBx39wtoQhRfQf8c373GEKWQaWcFpaLWir",
  "key39": "63oTyDuSwjyFLy63SvVqSBDhCJaSsmjvgxeEWHQ2fH2J1qVSy7r7Cq41CbWyQX4BBr4raZ4nMqndo9fxxbLPuxCS",
  "key40": "5omXA4cefxwEyp3uB1dY7VHDqgaGwBLqwZtWnT6qVn7zeyuB5WWzxtBD33horHkPMtrs7zY88426AXZfC7yhWWRd",
  "key41": "3oYH4b5BXJpko2AThbUpvCU8RW16jwiGWoxijQtmGJpW9k39EPDyqzko2Z2ebdaVv2mjXB1Pnzt5ymGne4zffhYX",
  "key42": "4wsxHZ7cpE7g4foRZnQVfSAJpLs123xUTWJf74rTfguq1bxaGyNijMqjW8z5c8DydcEQKjpbo9EBJkWKhuknBfhw",
  "key43": "D72Hab7ShCh8i3VUCEm82v7LmTgqHPfNY2QHyT26BYGn3CDaScLDvKv8hz1g3CNgjnP72bU8tnipjv7Mf2QzADU"
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

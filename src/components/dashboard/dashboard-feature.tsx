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
    "3y8KxUbZxtA1sH8dj1UTQY1p51XcokeUyiaXwuZyVP9WhitQfAoweSYr8RggQc1oAoz8NRZRnr9GmbxRHmi8d6pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QLoaZKrVEG1Kn92DsWJSGYbpXXAWPGg62XeCSontDanJSuoeGyvmNRusZfJ1zk2znkzjzVzosGhZSc2VveK3XvY",
  "key1": "4sueKzaQBYhKxL3g2Sij4ThxbbKpifwuAn4SDLEMAhGpyKe2byMfFiV4m14x4Qx7kWsJ41d7xTkaSegjGYyKdC7U",
  "key2": "5ghthyZwnT8K8DyvT1UNPSPKbnpVfmjX32rktoimvhf8imuJq3mCUaTzVeDssxei9cvruJYtpEWajdJxp8i7M6se",
  "key3": "2dwMoHRViNCw1dZKTqRUg41BEE8kC5cZCH3J7U1E4vfzgSzFmzLQRsvWFfBKuMnKP3taYrrokjZ4zhSSG77pSk2m",
  "key4": "5yXoTAcPvqub2ZXqDUaMorxfyZGD6av3X6NhSscbEQTYpnquhCWbwLrhWTU9FUNGswRrvq8iSJ2xDCjGhcVwZjjP",
  "key5": "5ZpNSr5YThoQ4ypFvgQabxRgEd1FUVTYUkFSbr74qtVRNBzL3SqELCKp8DEDrCeL2yi2tXmo7xrvmz9Woq5tgJp4",
  "key6": "5ngYbjd6WNDGPEPHwnFckDe4K3yi69FExeU1RenzAsovsGKt8GngLHw9L1LnVdHqVG2816sTv8Z1tkqusQAFhSk4",
  "key7": "4dtN4kTMfJv3BvMqQSsATRXgFSTeHLXh9PgQ9G2KEG9Q9Pv6ZmDCB432Pe3fPAuh1dyce7XCGJypMxh6iQEa4Sup",
  "key8": "4vaRMAZMtnc2twwqawmv9mNBQye7CJ7c596C8tibDEFue4Hacwr3j6VYALKKmRwjbfturstnqGsQa8eSD2NB1mEx",
  "key9": "3g5YSgD3purMpZoM9Fixbz11P1W2RNBM67rtdn7FyMEhUYVPbLRijcSf1oR6ddGggSKTkPRDb4kzS7J5uU5pugLb",
  "key10": "4WrAjjNhPm77Dux8MP31SckZhr8Xms1nHx3qfB96cB95eL7XaKTKS61aSuWKXwjbwkEXv3BCTCxGZm1umN8TRqBg",
  "key11": "5DYQ38gfekKaXWeUqo3RFwXyeQhgvgKxExCQW5BiuAaWZ8rDPr78vNCSqnBHC4a3FAGMYQwbAtu2q1Aq8jKZXFe3",
  "key12": "5XwME4VYg2JUTogXz4L76TX9xJnxrVESdeYPriFvEHZAmoPRknk3DQxDqob8CJLD67btZzpvNVhuPEBcEPZumWh9",
  "key13": "4R6VVjwgZxQLdyLJzX16Rwm4t4abEXvyX2WaKVD7WUdn8AD18YAZrX3N95FyMPWG8daRxs3MSNopKVhnXJmVAKMK",
  "key14": "5tNgD1kKqH4MZyLUk46FQawfYmpa5tUPzYSMX7mybomLVWFs2itPPbYXs88TgqXc6GpSWCtHrULnNsCUw2z33m4v",
  "key15": "3oUuvfAakzgMn51QxTmqEubK48iLebUFnDQz82MBC5ueWVVnazZ3o7yB1gCa1TcsWXWF1Ght1CAX6q742fFxmmc6",
  "key16": "5JJzLT3KriTpUfGETys6uNKECPWU3RVWZ6M1boJm1RcCjF3FY6rkpr6JP63ctgVbrzsZAEGDLN7vXTNoFyhqjuBD",
  "key17": "3pUh4EL2XqjBPgkKxcWfqCSwbSLL8buVDFi6xJ6uYsNhvFprfMKMRAYrUGxdsQD3vyva1GnqA3uS41PaEen1cTcx",
  "key18": "45QZFTJDmACMw7W7uHVGQKiZUtrd3iJXazuxurQfFcU9Cm1JMQfCaMpDNGfagf2Wq8pZ7azNNuvDmus9VZ9QR4J1",
  "key19": "CPKvqBQaaseoymmdsnNMHiaCysbWabVxoXMHqUdtABpwXg4bygRqafg5BtjhaquU5bHbdsykw2HuytkRw8Rvpt8",
  "key20": "5pgPrGBf3rYmChh4ZsaHx3iLNYvNZwCE3rK53kRR5yi8xY8fyHyqiaZooSjBPbFmBwVUT6YvtMLEp5upNzJHd9PB",
  "key21": "3WFEGGok1hhvmULFeneJXCCvc7thKqqUXDwQmox4DfkMjYK5G3tzsp2h1n3eP3KTD6MSxWbKwvHhLqeqRSZKHpe7",
  "key22": "3Br6qRtedH9yzSB1sh8khH7vQagVPsLaihvnU9NqU3CSmoEzTEQPCUAtRTXr6CZLDFxZZyPPUiu12YzVpgHb99V2",
  "key23": "2969MiuzRtbKMkUfA3AmCH1PUpcNNmSz98S8fCHtPeMUbFZQqKoqr6hoiCGCi1Ru6CR84HMPGNyRMcZ1e33yYcCB",
  "key24": "2LHLNzrQmh84j66qKs3s9C4SG8qq8gxqfZZQtbNQnHZkUThHNwuqgHy64ReucEk1re848DYECPqGkXRQscZrVn38",
  "key25": "24SrQhRSQo96zyrVZR7krfR6cd3cJvYwkJUPECefPQcK4pkCXDZbhJ3NyUW1cTpRxDxHiNgh6SiRh3gfQqUvexb1",
  "key26": "5PJBnDurvqXhFwYCYZVdrsxonyLBi69rZ2GAMLM98njf4KycVGvKZVSRZjMcE576ocwR3LCDyD8H9ygw8y2H7mPN",
  "key27": "34KzbFXoKV8FQx6KGSAbgLLDaAQwkNuTeGStVeCyQcrjyTNeUUX9Jvai4B5npwTfrJGdpihb1ieT9bcuqX76oRUW",
  "key28": "4WDYPwAhoAGfpUMwhfNTceAugRZGRHFjGVJKQgcp8qxXBoRhtrnMAcqx7wq4irP9rbFb1cZ5FTSxjmBraTW38jLZ",
  "key29": "4THGdEQ6vA6uGKDaRG25GDDVgTAkf7GRami9fFzCjTKWUAgwZz8jRmbGXYKHkibqKmdUGQanKbeeUbv37cBQsk3t",
  "key30": "5vAyKFh6P64AcdUtCQ9M2S5kpXjKyswo75ggqPg4kQfdEthbzSDd6XKBJVLi8TZWBGuD3fTxrTfvTiSAjqWEj39B",
  "key31": "3RuTfoW2SVKviagpSJM1fYX5uRFQYejPv8NXKGZzXjFrbdR2SFVtdmkrA5KAqFr8MeaXHb81wEvrUt6Xax9s46wU",
  "key32": "5bnxVgfgHHFdcMsfpS2KW574xphAhe6Wf8U8EkQyR2GbvH4SN2eYFJfxhpNQLZu14b8xhSoBjCKo9HTmZMuwFQ4Y",
  "key33": "46ik3NYhDiDxBHHwSySAQnhVpTEAHj2nstxUvLoyqUeA6Qh8xTtKbE3udEtCXXHSziRajiCFQTLS7YprHj1yYVWq",
  "key34": "4zEzEc37TJMYnhohqQ8GjwWowzXJMX8ctSbcx64XK6HPFsRERDNfZwkkVzf1YaseCEkghGGxXX3kKTHHD5zLp3Tb",
  "key35": "2dTnGQjCm9o5tQ25KsLCJYS9joHucQim9ScHGJWJYt3yju4YD7zDXPas4T18UWjqQG6tnT7m3Cve14r9t1U8WdkS",
  "key36": "33DdoAjWtJxZRD2SUieLec75FQSymseW3iFJsNiYWLPVjHCCH6DuUt4pMor8YirRacizdDQAe1TeBUP2F556eB1q"
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

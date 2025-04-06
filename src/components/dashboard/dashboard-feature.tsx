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
    "52CXhgT8bZD9amd3waXtDBnAVLttkGHLt9LiaaH2kjiQyn1K4ZzX2i8qzx958q4B9yFdD7qx3D1Kobs9TtzdziLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TLuPgDd8epdcZfmw9KjDdr5fa9DsJkAk1oThwSLCULSP58RgNoewE2iVxVpFqWogyEbz8PqpY2gyzr6o69uLzQX",
  "key1": "2VLFGr9oxdMWuRjThzfEcXRTAULZjSWoTPMfP86g3fdQdSkGZtKoMnmJWvN1XhnZKRnFUFAWWgVR6GCFFhcHaoDQ",
  "key2": "3u4SCZ4v7AvVkPPMuU4acgnRUXVxH31oTrpPLq4UWJ6Bbhc4WyDNLCK7s8TPZmWNLYN8AEQDDKLaCZedQXGJWzTJ",
  "key3": "4Mr2S6NRpfSiHRtyAi3eufBsVMRkb2DRVBZ4q6Vgeso8a2yLppthvR8wPTBq9GAE39GsMp6pwm5XwupWpBXCNk2z",
  "key4": "37meRfmYGzyKNcvw8WZRdxHFkyzZ9szGDLxNxXotVFqHkYgoCpN1t8domFpxvLNZirDG3nRMGZVML9G75qZP72iM",
  "key5": "5LiFQhhd7YfEDkADZ6H8ete2BG2mAmMSkZCzrK518WD7AvWSqZDcdsq1Yf7Ckb9NDZbzJCpnKbLuiA31QHHeEGDb",
  "key6": "3bGpZTCAeEMSSxLrYhojZo2MCsYA8ZGA2jDrck1dXwpRMKgxVEZNwTSG2GbTL4UqBVt6kYqKVPznMNQ8yWSvyKZ8",
  "key7": "41x9dRv1vzR969uYaynAAhhWCvdKTNtEdVg26MVzzXtRNV4Su6JntK91cnoZPSsmTqcBQiW4MyoFykFzogCD7Ket",
  "key8": "3UnWSXXGf556SgrxMwQUDscF8tAXAy8Xx8CgcSyjARuDeHoqrzhPfSxmErycssW5opfG4G5jS6GeVEprKJLFUY1n",
  "key9": "NZbPLRUpu3tZ1Zm2f9vmygc7vhRQB9QCMttuvpbrVFHbUaR2yHwdvuDf7fHWvjkLzfvJdYEzNfQnK3sxVk59ZKY",
  "key10": "4wvCDnkX8cCHbDtviKvGRrgQequ23k5PMF3nG2xMCkqDXrDvDFFzqQUDzoSXwiEKBLBtqwkBeRAqz1EgLLTC4fY8",
  "key11": "2zfBYKm1YWgrsuXV4kDdYQGm3CcPKYjMmB7dHBLxwwvPsxJK2eyfviEa6hFub3rTNzc8QjLdpmX9Av26dJjsRPmn",
  "key12": "36n49VWKWtzpGx3fBQiQRjEV9Ka9aE2tHthFDZ12DX2QDZFTwFV4Vj4CCFpYeQJBDVRJiAriLGiWiyUjxAYGxgf9",
  "key13": "5Yot1fDJqqYcxzfboXn2HAeAVRB6NJhbxgDgo86JFkUbzLcrrD8a2MPpujWVtrV2AoLK4vNwPDdTSmAVGpgzSCwk",
  "key14": "47UYWPoQosf97HPWq3A7DzwEFHVJGQq8V72UtDJhfhdJLime44Zuj1u7FjUBe27gy1jbDq43p6mQ7BxfveGyysab",
  "key15": "2NdzH7xAoJ2S1k3oCeW8bE5i5hqV1rv376pGTdwUBDxZJX7s4cUbMv9sB3fXnihhcPKDTvXmYbV2qqpmnZghTb2R",
  "key16": "3TU1YZWr4iRnZFv1KgtXeTNYebZjx36GpuUyamUrisGtSqRW8xDnEj47x6RouXZaBFRrPtDjTwBi7T3JXZd7jm9R",
  "key17": "3Gc2eJFfB3Lgw9iEMM5UXYiyMBTmrT6yBNYrg5Lrdf2yi6XN7Lundi7Pc7i7SHZx1e93xNYP7YzHrHJ5DrJ7UNn4",
  "key18": "3mp6Rz62M6j1CEoKbpQ4MxpoJ6hKbhjUYwiyfpBMdYVjK9QkoiNzdmdxsPXmXeyus7YUVXCpyPNdXsFxSRbFS3UJ",
  "key19": "5L7GpLZWYApy3auxut2o6a6b4BysTcJ2a4hemZ6e4fdAicom8GN25ouP5JBxJSytBpDkyFuhhoi1te4CrSKtQLck",
  "key20": "5naoau2nCwwNCqQxfiEgs3CuF7ujF4D6XBmm3XAiUYk22LhTQQMCtsKB9vnHFzQkxnkq8FRbfdhLP2yD5eBQeRwW",
  "key21": "3mf6PskYDeEiBvpNZGC8ipWLcXiGr9g91AqLxmWmsW3LiYTBWTVuMiD2cPewyDfw8NkQCbyxYEjCYT4kzZEEt11J",
  "key22": "489NoUjLT7Y8anRsW49bhtfZ6RG5MdRLNLxPDRLr2dgnSD5mWbKjkgwzBPPz1AEUxqbkGHTQZPLf6WDhxmkvbBpV",
  "key23": "2ftFAzXgyULF1TN7877FpkDC7f9HJTyyqYuSEevUmmwqdEAZpNuX4y1TxB3LJQV6ttwvnw5EneL1HhoZQ8ukRrBn",
  "key24": "55tUwyqqGkyVhc2Kmuc7DZz39qCUr5ojLez9JrADipQc8kovHGNJt2LTfoA98sHxgDUUSdp1NsPLPki3DGqtzqof",
  "key25": "44FjfJzmRqzHuAfBx7b5irESMLymo4W5WaGAXM4wWJ5PgwwHvTADfigRkyXEH7hvQLfJi77i5Jtx6aag9ikq7w9T",
  "key26": "5SoC5vNvME9cTe9Xa6A2xvbrtGxxQjmFtymz4JVM6jiXt7U3aETToM1VqT9SLYUX1PMhsHCirGSM9hqiiJZJhHfG",
  "key27": "5wKxNw14u2eqho7fXxfWGCKDdfj5fHw8JdtEzRZVMAvVj2weagns9q5y8MyhwrMnpUBFX8GKTX8J4Z8N5EzqepkZ",
  "key28": "3u3GBkpH77tc69B14hmJB2fYhhzFcY633G7FAEhQWefLodh2sXJNNwHRgPzayA4issGt11pWfEUEeD34DmpHjW4q",
  "key29": "5LeRNAXw8MZHQNAGviia7k9Cnh73YshqoPedCPFK4xoRx7xNdDTYAsh9bAx95DrWhSyLTkApQYaZDWRW3Zpb2tvJ",
  "key30": "4Rb4iWQ3EjRtes4FcRFAQoFVnnUtC5BjUJvtMeK3s1k3zgJwnguXsQ6wM9hEP1CNGvEBdbmAneR3X2ek9oRZdD4J",
  "key31": "2GF6a1ZetW7K4RDZoT2oFGo22Zn6kBkkMY4sLzyvJ7xv8DWZDVkFVRSwv9AVKJ9iWn1o7WhTdf6yuywJDhYmf1CN",
  "key32": "2wwLqge1sQyz1fFvGpHGVs8WK3bqDGBsCfu9bnta3GDeZQCBY9wZionDUFm5j6KyaMTFnr1inQSbjcBGWBKKuFwA",
  "key33": "4X9z4zdqdeYhZ1XmysoqgX5cDpGPd1P1o7Be9HzJxU4Df6fJBy14DXCsnob4zzneMSrZZ1rAbWJVxV4ubFuqvwky",
  "key34": "fsCYm5MpRxKnzHHQbQMLKPck1DJzx3ssbR3tk3kwaZXJzmFFToN2WorEU6wTjXJLVYjRXVr6oafJakbYp1qpdkW",
  "key35": "3j5Bnr3gjcPwYn2Bg4LiM97irhkUZ5jD3p9Nx1p388J7BYZnKa8ziUpkY4eYEq3oRx9YZurf4Q9bbiSxxKF9spmh",
  "key36": "ysP9jkPe2C2mF2woEu26C5eBmX5mMEDdC19pDc43GdchuVdaDQMPCq2xFEPc8JWjiRJuyUwt9Q2GwhWtR8ti85K",
  "key37": "22j9W7MbgotjDoomDTFodKVY4nhJYm8WMkCQ7wwFxMoyKVXYuZpUgM2unKL2DPjiLgPyB8t6D6vRzn5RXHGETiCT",
  "key38": "2j4LspSV75tzidiagm2DP4PQ7ds2J8dQaXr3LhLXVPbbwRM1Uqss3mhyCFDkRdCWoRTWVR537ZSp2mjrZKGj7wti",
  "key39": "5kEt5LH7vgYvsmGB5kgrcyx5EQDDgcQSMUKt7Qt4yH6upP8CPbfNvZbR8mAUDwPMCjKufZwogDbNVaqriHDyTx6",
  "key40": "4bzmbakUbqaJvGiackrgcrVKjSAWKU2rh1bGrKQ11gaSoAXeZ7RzUWcSsWh4Qd9DKuawyfZfrQhDg9qqZ2F6kJK3",
  "key41": "49JagDS8PiwtcnxZAvrzoQqSESztJeuH1oZvAHzRirGKx1r9rS44WEBAebEpksvVBMKPoubAnUo5Y34fiNsXwG5Z",
  "key42": "5igRKGPi4WDrjgZ42VnYHnykXv9cCmUnvqBynJV7v4QQiP9rZHH2ubQ4vAa92PT8oNHKiiTgrJfz2yL3DNQhhR4s",
  "key43": "5Gd2Dg2uqbG3bNXPAb9AjsHNAQ9hdsy7e9H1t5fpuB5rHrFPCTRzPv22T93f1oG1PdPGuUg4Lai33acekcVrJ48D",
  "key44": "2yDKbd7FxvH47YzHGCGajLZSiG2z7k9Vv3TiYyfYJ7z4LktGJKjZmpEVtxEU53WpvjaiMYMwPduXBeTA3ktrtnTT",
  "key45": "5uWJ1e4vgE5PqMAdnbuGUoyjvXus9dpYYk7JzWimExRnq5FSKZhqDcEy8rPD2MP1G7LRASKnPd8EzRBFu313axKo",
  "key46": "2vJqMm5q1SH5RtfFVn9z4DLbNvmro7cSsUWEBCKxJNQFi6UJ3LAGT8U2Q6dyY7GCPhU2HYhzNpNhdLnzvYqWxmxp",
  "key47": "2bkMhh4tSLuKq2LavVmnqjYmThfhcUCjZRVbj7hwMrrSYkd4G9oFFqwPNEWfssrRKFj3wWwDj6az8vaDHVoC1STt"
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

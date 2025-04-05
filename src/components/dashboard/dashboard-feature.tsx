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
    "iZjdHaMuJqxJEY8oWkYQYCgs7xWHs6TkRxwa3ZK4s4tsMjggrdYYTR31PdszzEEA33VmNnEQ8wNhTwmHM34UQNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdSqx5yi5yboUCu9mFTcTyCLDcXAmA7yhB9uPARvcERVTWPjmf1u5B6xAr4wkSP5hTLqHkgwnPtcTjoheeRiA1j",
  "key1": "2HewLrqhpMqdhdnitGmFYnWRof1jYfTBFLm8EFjwM7d2AiUpeu8dMDCYXh5hnFdMCmGkxdkxweafAjADVyNBYSra",
  "key2": "5KVedgycS61tVzYShR1iuoY4yDXTnMQEhr6TAFijnHAoyYMGPoeyPwmm91jEia3Mddm2gWzbwhykxrFvv2u538vF",
  "key3": "4Dmzqhb6mSZ9P5Z4nGrT7gS8AaJ2VgBYSVWb5b8NUg71hFDqi37ddyLgFsTbskowAjMDDivBFUk11UoQW4KoY2wv",
  "key4": "3Fh3B5gtuUZCM3hi3B3EWyurU7JYbP9PfXMM78nHzxZamx4r6WkgBJ5aSUXjmXM7sbJhNiaEKDfLhrrJ1p93DGZZ",
  "key5": "3FQerD1jeYfSQv1QmuzCKLNi9WNvVLTiGUqTsLMUxTeJQJxE2pKWRxuUaLhtWoECpaP22urZoqyRjXAC4cQ79jfZ",
  "key6": "wyWmSMP4BjMcuNEcPU4hTxDysSDEVco8UL2VDhJ8k8G1Dh9gTvpq2SS7avYKSMPDXTqNnznCnNKxqhXcK7Rk9e8",
  "key7": "DXGHxsnQiX2JaBznaczfV8jNSAb6v4xSKxkz9dnc8PUGVXbPkb7rFE5XDPtJqgXFwHc5i1mCTUWfgBL9k3uv757",
  "key8": "4Xx2zV2J1RyQocrpfjsKKQaszpMrVDvuS5mdGLMSAeFEJ8K6CAphrLFpoDinM9Zmt4jSR3EFVPnZw9tAKhbwhCSm",
  "key9": "awUNRR2mxpnkDJWQ3efFsso8tLiNF8ChoYBquWY7A5yuH5MVZLd9ZBSYMzdvgnUYq9fu3q1d2trPda3qcJ4Ekmh",
  "key10": "5acmWJhTCd9HpiYEeBMhfLrhfFu4NPUPKXCsGQs8gxr21gEyKfSoCeqirWqXjJWjMf7Hmv9QZ8ppFdo2734F5vPi",
  "key11": "3s92tSqiFdkiF42kmTPAnts99xFzVy5QUa5BgAtwTGhffyuwijRMUmGwtbXwGLCrbKtLaK7yRK1AjagLYUwmUZtq",
  "key12": "4cSu6MUezfi8ZbE52GSUA71ksFcWpgTL62vTwHAmoVCHJGGHhHXQmzzgWoRDuNXhTRSnNbREQzyU7Z1YUv8TK7bb",
  "key13": "2ccqi47hCf1rT1DdfrbdQuUfu2h1krPDP3H3u7kee7KBRti8vg6tXng3ufXfzmJusS5UEjQ2owgEJ1otgFs7FhMq",
  "key14": "3PXSewwBZsg6g8ogCgLRCeWBj34pcBsUBTKJ56Yy1vFr13cNnL3GMNkYrkuKTC1ZBPkD5ieyYAx92H2Xen5F6nrX",
  "key15": "67DrYwkUELftmTTQUZGqA4wJsRoUDV57caH3qPpoyCPHL9uVKUion75jwWQShuurKcR4WkTL8vs4mfj2T6x87djG",
  "key16": "2hw8Qzit6SZDyh5PBqrodQYNxitR766JjEJapQVQY37vYm4ZMNiDY4USkSBEtVqyCkfmHxczeH5aEFSVjSJSS1g9",
  "key17": "khsCgXbbLqcYF8LrcjTFxZWbWcoC5bi1HdbUh7GNB5eWenCGrVHtzZz2DSbpZbCzPQ1qGk9jSKxSXnHJUh2mLAR",
  "key18": "2KNPpmrMvg9MZYNUUcJM2JsqJxpbimGAVoTcVqf9ULqKwvSwR3vzpYmfURsdBZCP5CswZJH2mgaRfdmv2d7jRWjN",
  "key19": "2GkNKpz9ii5oJUxkiiR7Y3Bbx9xD8P4iAQrQiNv8E3ggfBQhpJBGtAwyRVkN1AMMiTyT42BftEJGhQzgdpj4dyj2",
  "key20": "2vYtQJp6NrJcLAq3HKPCKxnoxaSkDkLBYWGmzE4UiikbEpPH8LeoQC44jMXCYqhxFD5NcrHCVbQKPTVyrgBhA94r",
  "key21": "25fiuuov8owif3uQ1ZCXHUGQsjtN1HprPqJhvffmVZ31qKKtZkpfzVUVqFB6FNFxeghgHfg9y9r5KvMLcr9xLtQQ",
  "key22": "26jZ5yJNPWXpFdY4dpGjPtfwGeLpSdPgYkqkNxC4ng4yPctT9ATjVCWFcnNcBUVKisUgkk2QLxVMZbBBxDPiZPYY",
  "key23": "2y4shfyLdzSTSQX4FtPfzryiPX8ygbVAZqSHb4uakLPcHc2Yg4WuRSbp3YxT2H285ShY3W66ofVz65MVj45aUz5H",
  "key24": "4EUtxNfRUDWb9GisCsnMcKkRQxmazsACdpJA5r8AL2aZWMAocY7fSAgHKLhceQ3MBD82nRDN55y3Bs6CeSvc2qRT",
  "key25": "5Ns2319dqjfd6T2JkEo1AQMMctD86ozehqbmHJLiSRHHzQrDKq5uHQe8K7R2qNeAMaKsNMbTPBVMnhTJyZNY1jXZ",
  "key26": "3fF4qyQ1qh3yNrNTMWGEpi141yFgrdc14MoW6EXhGwzeVUwe6muGVservsQjpqHfEn54UoENn2FzMgGSg3kP5khm",
  "key27": "2t4pu8r1YTcPoHoo2tvWtpboQcytdvr1KDfJftNNQcK7E2z9FjkmjJTrEvqEvGzWCBSQMj4zXWwF6XTwXQFsM1SG",
  "key28": "5JYuXtaRZs5bDm1Ny8WEXY1w3mjnrn9x1tLQpm7ijRLePoXVaWAdQRyfH53Tcb1o1kpSCXiyfYYqSwAxFvgyT9He"
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

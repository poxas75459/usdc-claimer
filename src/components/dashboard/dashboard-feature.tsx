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
    "4ja8PVDoaMKPGKmmspGhi9zJp2PFX976DEh7k1p9YuKa6bj69jJATZp8YqpiEm3hokRHRzhjuJTbVYMV7grJN8et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C1vzdqeDq6mQsacS6wEydgy8CpmPd7SVEa4u4ybnTC8GMFptiAmrbcY1Fae4vpBNpH3338e2Ma82dHPkPNRJBBr",
  "key1": "3Tao1HUtJKnYFmJfTPhK4uCkrLYvqBHkG8sRK5Q4ztV6khqN6wZpqSPLS1B4jE8J6ewzjQiYR9E8y3gwVNee8M7D",
  "key2": "2qCreTuWszo6tqygbXkvdPDnrMPQmLiDDb1SQdtttdiaYFvXdgbsSk1RZDrbxYQPFTogadm6StvEz25CD6f61g47",
  "key3": "4R4VBZJcZTheWpvEFthLPJaFDdZEvKJ8ZxGEcjTjD6rYXDMR6hV97KhCD59ywgXPmKCXehtuUptW3Vi3JJ37WQ48",
  "key4": "5ehkmj4re3n3v6AXw6912ccKMdhvfVvKUSgjaHxh3d28xpj8XUAYz9aTsfefGvHfDaq4WhQ8eELT1r9U9s1nhUVE",
  "key5": "47RQoHxRMyx1cqZmoQS4x8hbH2ThtVfNmErLWx2xQ4yz7aPa8UTosPoRAtA5TeSrxLrZ6kg2rJHLHRA6kZA4z7JS",
  "key6": "4tY3N92VjDqG4cKb4zxFESKdSqgVDvF8kZJ8JmgtPMG8Gggv4ezC7Tjs1RKLkXh7VnHbPPJKiTeFqDSRgfD16QV7",
  "key7": "3cd7UtBb2c47jUj9K5SaHJBBwr8MEBcQMwVniy8YSVjQiGjjcaM3VkTZCtTEQWK8FiLXioRLJsyeuUhTEnPsze8a",
  "key8": "5ra3NdMSjcVjqu4nfsppvEA27xEMr9jEu2y3Ci4LoZFrdx6KUkTv3jzBadtbgffJLq55xGYh838xefgdiaPT3R6s",
  "key9": "4n9BeZMhshNX1xmFN4CLARsUCzWGP7mQ58UyQLhuXALe7UfT4ZX1BAEroSt5QWGdPSYtsGhVRX61jokjYWLWgv5n",
  "key10": "67WYT2NL5Qs51vJ5MNkARDWc4VnafojPbheRsXFDY2Nh6LtzL6KJb1QErdoyZ5u8DbrDEkdJZ9wmG1zwHD8jaPxy",
  "key11": "2nFHuVpKVnN49HXLG42wnMA1SQwHDPL2yCKV2YzuWcdwRt9T7wZ9fo6uhN2UR63EaVehpY3ENPRmNNPMPpL3GUVa",
  "key12": "5mBrqSf8h2D3WpLKJ5AvJ62HaLqt5E6Kd7ExtfmkAUUbVTz99e3mLJ75REzg2eDRvnSmcEFJewtXkfVkCATyMGD8",
  "key13": "4dcum4s2oqiet2mhuMk39tk6GfgsTZLcXRQEPvHmobhHZot6VKZ6kV8oWGASjDY74Q1GenCubs8JVWaRx7M53VWj",
  "key14": "64ycWQbgzkaa3mb17iQSQAxTK1cQBUEWAYYu7Z3Y6UevXhQU4cDGrUsgT21j61cPCug1ZPiArkCUoBXrEiWq51fS",
  "key15": "2mB8toysosQL4uS1cuEp73swNSdQRAanz8b5gyVYRb7ScBgVwxfWrDnRGNs73SnPAwZxHPBRNPmuyA4sgzEGmtB7",
  "key16": "5iPSmSC7ikKApp2TVJZBBDVRnX5735sS8SYiFr9iwh444zATyPCHAZ7yFWLzTDjJainDFnnzUBXePz8xisHp7dyH",
  "key17": "APM5XUsMqZ4wpCP4rBJvZDLE3DY2UEoS9WdZeHqRrY6CLYVz9jmXceDKbyZr2samFo7dR33L63Y5kfZSKStnfF3",
  "key18": "52YoM6Zts19c4R4WNx7qKZaQKoSEWQ56buQtB3QgvjcEbEEei4KbfRmKLQrN9XyHXX56KfsCrwSKgrwpz72MqxSa",
  "key19": "2F6R1J63cMHTndjqVciapDFpr2eG2mShf38MPEJUqxSxtFrLrMDnhJWDuDq5qUMqFGbuwF1kaoaHWwxQ12SmnvPL",
  "key20": "3yZnsGDAv4A5ZkqxBFeLcXcfH134NESa3zMfkfvjQUcMKd7Sp1MnEap1NGDjNnAYoVWnUcRpMniT8rRg3o5Zf5qc",
  "key21": "5KSjBNvg1SvWzgfCBoRe9W2ayK8rVbaj1ZW4utQtYKKoBnuBWjvcLd8zC4PuDHq1yxpNVtK6AibGbRHkAgoMkKeQ",
  "key22": "2nYjBBa5nYgNZ9n8kE3W6QjBbSHWeFfif4EKEBUL7pCrx4UjhEiYmWYiVkfTAkjvUBKSPT1Yq2utpYPwA6A3ktJS",
  "key23": "3Ltrn9uGPvpkpBNxaF1tLrMdvtechAAVc7JFFFJfgpNRaa7UKUkvT6VVuSDgPrea3R7DDiY1jSarKaGJhCTZxXat",
  "key24": "581RuSjL8RFLdo3x4gJgqSfDM1urKkgpfdjQhpETpKkZmSpwxX7No8k9bmaEcHN7nz48BVe7KtEUJu5pdVXZijZY",
  "key25": "5iz1qyCBaCJdJd2pghAEFvafxiNpatDdFY79fG4bs2gCxxSaunLNdE2GXYbYtRpViiJ14k6p2zgEUSppZmwVUdND",
  "key26": "4icBiZVsm3ynZBhvi1tHd5iNTu5vH5bgzSqpTBFAY3nwoQQ6yjYzMLC8q5K6R2FqcHKyHUa8RhvSuJNhVpegWxnW",
  "key27": "2wrYwuhp4JNRUks2EF61iW6zZBHqVx7PgscidxT3o5XUopYhXAzK5mWvpMmVxUawppC86U9GTdSU5jiYN1pZ9hXk",
  "key28": "4UtoppqiF9qJxYiriiHvSZaHsEyiWE6NncZ9R3MdZdZsQr2Dc1TfFBpHAEPY3zRQuLSvRdDzU3fof3BFqxh6aBHg",
  "key29": "3y1S7tCmJ4SE41caefWAb7G3TyevChxq79k4isviYYJC8NB3ktim1mkgPB9nUgw2vBMZk2HET3V9zHKVyo2QoqQU"
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

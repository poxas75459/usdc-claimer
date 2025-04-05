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
    "2BBXp2GBabL8pzNFvzQRe4PK99Aj2tfsKhoUroC3RzDoSW7U144grE9KRY89wQdRj5oD1ikqzAcSagP5BfK4YfVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orMA8gH6BcoSnvqbtLbu4fFtbyX8ftMdnWSMFcWsaYL2St4PKWZuADQwUzjoUgeYi3gLPo1WEgdGmEDVsX9Q93t",
  "key1": "4uJQo2rrnVFKrwcWghGrB3SSDMqDpyfeXs8ybsRk5ZUQMd6HWh285Js4aumLz2gyFkVqQZfkw6y6Jd9PYoTwGi7T",
  "key2": "ikrZs5SRwU3ZDFcmmsQL1KaS1e6GnioPmcTWwX84rnDQGghWPSofspzAioehtKF1k9eZFJ4uP4Ei13cL4spKA53",
  "key3": "3rzcmiJA9uVHtLGwiGEFvT8zYSEtvktAtg58DNt3xGNcEMTHFpYBYW3be5KjWjWysj22UHL7ikX29MeudRhySsy2",
  "key4": "4xGCZ2qZt3DMvCYp3tEY39iEaKHJABTdY1f6d8WTM5TY2T77wa7Sw7DSGVYuWFi4RmZqJ1EnxiTPepAqo5S9pcN7",
  "key5": "5RUdYXeWDWjnop8MMTfWcEpettw3SxKr5L4AzkipY42Cw2esbahLb7qHLUFzem1DAub67VCM4mH4CzKJ1HG93aJE",
  "key6": "3vx7vo7zD8wVmeViQZKys5gRiXAc3kMtrDW2NygadBJjjsyS8ouVATkeswWsUVS7NKe7risZV1kzWArYcjmj77xG",
  "key7": "2F6amoWWQCyb7MaN7gpjH2HcYnk6SdGPdytoGpUpUSEfAcLNxMcpz2DgJ6Gc51PC4PnZujLmBURHx8Wgb3Ed5yPx",
  "key8": "4WTDYjqE2zYdxnGCKgviskdYxGZHUBiXBQzNNcS8Kg9HHCnrhowmpq36PdccEQ3X52qkJZumssM3uMupw7bdgmzv",
  "key9": "36SAgWVxmQyVhm54DNM4goUdCNQPQFwdeVm7Vkntaof65FjoA9Qu3Hwjhyyhg6shAUNS2Ca8EVxArkRTRqfjRvfF",
  "key10": "4dNQmhDkmnx2f1xCmSkugnzPHsEggVw38LX1UA9KTzXqvEaXbNycYvZHqUhriLdSyrd7iu3k8GZJAcqM5fLqRbr",
  "key11": "5ANDUficmxXJB6Nz6FXGjHhu1WziBeL1sLQcVCuz7VqQaKkhUYknscbjtGchWyKMZBKbt6QMWVf2nX7e2mDK6M6j",
  "key12": "63RMeoF6Sbw7vKw6zw9GWfGK6LU8Ckcpc2sAaGvwFAVgjHMY6PLDqwuHoovYnCP2Uvhu4NvHfX7Sr5MB6naWCmy6",
  "key13": "39w1RpBGKy1UzfWksQzQmrGNsCKRC9c53GDbHvmuKfhK2GKN7QLxeq7ZottYka5TFFYZcD6W8yJFJsbENJDWr7tj",
  "key14": "496txgP6932sWxXsCyfR1hpjeMxjvHZ1qmAKecYxor64EXAzpyxvSuahwk3XuNQsQaXTxDZDMsR43FyoAvbTY2Bk",
  "key15": "64g41Rz4EgUAk6NMB5ayrF6CjKPMZK2Y4jauhZWqJrGonFLLpN5KS5rg8aJETzm5ywy6BPjmbbKoyaHjvsXxuLP4",
  "key16": "U5Ay4vr823596jsBJa1HpSSCLhrfjR7k3MGyhUysbSoSoGATs4SxvpM3QVru8EYHWk2RMYHxF73BK2RuR5SCxwe",
  "key17": "1d1ZYaU9zD3v4pwoi3A6RgZqYXU8fKyLrxNWjqo9tnTN7Tmm2eTTNT8qAoNQA4wVFaP1Npvjw5M5LNKSHunseRU",
  "key18": "61hEFepcgBCm7s7bhG75PyMZKgmhpP5FJUvyEF1omzNR8eEmrjTLLpfEEGUqqJzTb2NwTMihFV1dVv6nZF1xXD7n",
  "key19": "4t9Gaq1MgDU3HUWXqSMAmdpm2p8hAdVqJwMcWtKYnneexC2MPrdM3FwG9oYNR4euNxw3ebAdAhRRMw3zaE6gNPgK",
  "key20": "5pjw9miGUMHjmmWcmD8Ap4H3TXCrnXh9yavDsn7kyCaTG31wHb4RWpkvHjJRKc4jACMiyisbvy3jHoPmW4Pd5Yr7",
  "key21": "3B42iigxVq6zyndcNtrmFPdtTRj6n8M1rkPJa762jSFNwF5mpAKZVhxEsPhNVixy4BL21M3ARXcHhZNhoH6AaVPk",
  "key22": "5kXr5KGregvyQh8yxoKsVoHDsdruCuwRLfxvLxcfGAN1X6AGTRhPNZBPD7oQA1iJqLCp1n9ADFA7ZdFQS8GMhN3q",
  "key23": "3p5ZDtAwJt9s9MGPSZ6XufKV9H2nniGK1DeZDiuLU2TibmVFexD9NhuKRMLi8prLg5EQJeYfdMPR9dnsH6WAqzgZ",
  "key24": "ZJRS8YCxF61XcKvT2g9NqsTeARqrr9X5UiHLYmzq6hPoUXBBEopKYd2ynueKQszmE55LtqKZh5j4SMfbpaeXJ7p",
  "key25": "kYMgPptSf39b7bLAJdcSyu9ZiGxGhyDmoo6LB7wB5sAExVhMY7kM8gaz925GTrFZBwL2ChGzKcSoq3pi4suvKgq",
  "key26": "31iRszjLdiHSraK89wDfg99wzpRBJvAaDkaUD7fsLQxnzRtBXyH9RJ6yJpt9bjbcqVRVXHWKP4X9mtees9uuVTdv",
  "key27": "4PenuN8RnqKAJRNBXy2oqFuXPJbXRz3Sbwv2Yek1rWC6MvynyNMJVqAFG3vJvycjxLFS3RtpifxzND7V5GPTvCTx"
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

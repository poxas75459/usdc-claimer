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
    "4D5fiBUHVjnJGAFhCDtJjS6W5kA8EA5Nw6eaCRrhsDrUwZ9KJzhKgVUcy12K5TnA9KJWnR9S1jFcoei5ytqz3Gcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YMnQNMm45vLB4AAWG9uAR8vtkwcr8mr5reseERg9Yy3EzsuVEHoUAbjobkW1SKE3dUi7xSWRnosaKCTiGkKcv2D",
  "key1": "4bZdmf5yGGW7PB52C1P1yaVx5x6J47aKgsECtYTtHGVyG7U8FNhkw1LKFWSQWozgmnxoeUYPmYchLHyJghs3Qrot",
  "key2": "zVyyjHQ9K2RBskMjhzKTL14zeVVCaXNewSxzrsCm6u6fniDMrcutdAA1AgTZaaEVfHzSskB7jdbZpXgFsfpRUpB",
  "key3": "4YXSHpPyFKWR7yrvsAD6BtSyaeVj5YKGvCZgDvky7Fg5CtsHd7q8R2avsuLH4J66s5myN7cjqBEQe5HCjgXE3LCV",
  "key4": "2yZVhjMxVGiPVVy9rKQzZvibVTZaKNPF5uo94DhesRej9NbN8EKgwJzMVHm3WrYp96APR1kpZxbQk7GrtGxVw9Sp",
  "key5": "5oHazJgqnHviMdi7LMjVW2bP2LQ7kwLCM8ikFYC6hyZFmr5XagX7SEYQhzH1PVBoeKFJnrAybBsgYsb67ZuPo1Dh",
  "key6": "vR3qqDTJsRstrKzigoV4q7kvNEsL2XJG1dUCmXYxcT9dMgC7Nnub5eFCG85pqeHXG6JnCmmG42v1s12RhPR5qbL",
  "key7": "4SJByHViwUSmXjy26DRyFDXXHBfmkqikniJ85CJV3tASn9J4fFXkvtaLeDtQyx9gpw8ydJzXugLKqXCgFNcZ3aiF",
  "key8": "3yo44aaJCaJEhjypkLyQFXBz3zQwKYkU14hSAueC63BZQ4wLgLyUNkvjHZ6r4BdZ8wFtVX2LRPZvfGVrxjtCNyf7",
  "key9": "26qifDRA3WmY9HBepoaVGpQAUUuMNijJzjAWccDCvKxodeBpeJxdm6orpF1G6Xpp4CZUxwXweJAHrND1xf9xc3vj",
  "key10": "53vzsyzULE9eHCXZUYmpXHsgbAdL8H2uQBZZ3a2cd5gmBVy3Ue2vEXotaptXN3vgMvXXby5BvwLBErymMoJHoeha",
  "key11": "4Hqa4uhSUkD9W9bE2hti5gBR937Gew2K9A2pgYjvc5HQ1opRfuw3CVr8d8jUCouLUgZumnP95XXpnFfQLB62RhR8",
  "key12": "3US9Ut2LyMBFzihmu59Eow1FNcNiTGbG366vXxanHx9TJ4M44mHjAuSgvnvMatDQAK8ZdjGBH6GYthNXL7buT22w",
  "key13": "4e9bxxeWHyXs3Wkjjowa6nhbzQwiUiwSmgdbgEe5F4kuQ3ETsn86BzUwghpbbYppgbVuWFCs8CXgBj4FNZDRjCLS",
  "key14": "5zEcSq3c2mu8qYCSdNwPgtqgGSNrpbntQPpoowaAN81nrCJXWNvTVDhH5BvUjGZfZffZZAj6E8WCVbcpkx31DrVD",
  "key15": "3TvaanorJAHGvE66YYdvzJfZMH1X9Gca4H7NYrkj4b5kkjREn17g4MjmGLjd52oJywJiySxhSSPACFCLTyQsvJy7",
  "key16": "25VzGcMRMbh6nPiPzzGQRBqaZf3sbEuBQMPYsnni8HyNeNt9ExBDp3KcMJF8AWmxFcq4Dj6x8nWpCSb25JhwWpiR",
  "key17": "4hLURXCkdS5Xx2jLSjMiKe9KpDxYZxeTAYkBE6sqa2XmH2PYLX5EFEwoEJod116jBwsuBxVuAwXTHj61bdzpvy9W",
  "key18": "3Tr8g75bgxJbYSgVNVn4dNAeBQjGzgW9QXCLZFocTSYQ5sZ3nq4mZY8bzQ6ZVJayB1SvCu2cwew7beiWmSgXpA9y",
  "key19": "2t9HUzUfKDB5ozPLQfvEX4K6UeEHjHs5vqQrLk8VZwkkrYTe2ULKK14sTkZvBqPXvkVK5zRocM4QM5oba1ZQtvK9",
  "key20": "3dpSAv7u6N8Tvq4GDR4GF1EBU9y8vvbPfbJiSRna6EmQWo9kx8Ngs5jqmCwX1NeXURaLKcrfgMPqddSNWUbdGdH1",
  "key21": "2hs1chPiE2CKLfTFmgeFMGo2q1ugPw8MsJDp6Bdp5G9PWAkDzTzrjb2avd4JiVVxsjJeRPEnVEZKkD8fKXWPqJbZ",
  "key22": "5B7o5Vijo4hDESazd9HL8yiHFQ9gUvxSTj3yKQR2V3R5RHEu1fBtLeNyiqT7ipz8Bc5o9rY21VQRzZdYdmidh21o",
  "key23": "2yKfcPDZqNSqmgXjCr87ATyAnS8FBJ1eq4HMPpSiekR9kTbmXt5SDbW9dKyBveyYfTAFaeSGvXZJffPUCJ8ntsJa",
  "key24": "Xsn8VazUoEjSqazN2qeTG1skA7HeeFcEWwKrvxT8m3YUPbAxuEzQofrZNjVH4JZ1EA9MzxqvJeAyDtb6ntUYpmT",
  "key25": "2aneiog8wYeZhagJoPYYeiM5sZaLo1zNgdTfzv8UFi1LpB9fV4xYFTLKE17dJvcJwGSLrcxkD6AATU3czXrUWrXN",
  "key26": "5CP47nFQdVCtYEAUau8U8pXnFkbeayaCQ7ALCtCzNA3LGtJMW74Y3aCFbzBLVhPWwivRgdnfbjfGvqp1DH82Ed1W",
  "key27": "66yjQ8bGqNH6cJQZLepoB7WcpjKbPtRsUSGPMfUru1H4ohXntuFrFproviWA4kHghbjyNJjn2WLcetqy6TcYSTkL",
  "key28": "5kbiKhzaTi5hamoHihC1mufBSKmwrpKvitHwiCNTiRNdA8Wmh2qphCWsFNhdZ2SYvbKqHR76Bqc5yy41c7w5dM9a",
  "key29": "3KF6hDnBEnDHzqKhnLipPsidGT9reDWJyTxy7HcaBhyCNAgu8jCG37x2YMNw7YmphKiAqy7L9dLwV7TyNXGxQ2un",
  "key30": "67ifE4c69ZBZrePAHSA6q9vcgLJ4wQ2PyL6Mcn7KMJ5QcWA9GmCs8kqL4LNTpJN1D5U8M8mqZDYv9JY3E3VZnMDS",
  "key31": "3R61bGLrrRemFMbZ1wuGfUKE8o1ANu8pgdQZbP3bi32ETqMpgBmUbdLcJ1JQUCsC8pkZa9HvsoE3hBRZqVwoYjqf"
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

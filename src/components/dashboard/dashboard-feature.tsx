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
    "2FphUu8is5sefKx3MJfG3LfbvszJ5uABXoZC9RygydxZDtyqfSuG2n2vgpfeVgdLwAGN9H3d254gjFjFgtcjYfb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGKn1s89xhN4347gLegY5a3hn7YQWHQXhcz3y54YrdNzj3yZkxfBwbPrp2Xz9LRb6J5eBDBrMmbc8116BiWzdqU",
  "key1": "3P5v6mNitfsLhUkbFPN9YnYipFxcu3Mx9oGjCQNbxQkyep1XJT7CrGpTtmqGFHHPany2Ae8AuAXJNFYWKhZjgxC8",
  "key2": "3b868Wz2D1WGstxoGkuibpRmMEdxBh15tCvci5yZrWBF3APs4dt52Xk9WXYAxvn21ed1wJdce9RYTwereoEJo6aH",
  "key3": "4uPPYWbgZT5SHZbpHNQAXXfr6bViQRX3GfNGGGnqKL4hKDMgrt3MbUZQzAsryMa2qAzf9wexSx46aAkG3VYp5NdJ",
  "key4": "4SKRGqcNr9FB32Kq2kStaHxRjKxxJLmXUdPwRYQoKet2ewqYiF37qfYWuZhn1PnQ3ctTXd3htiKr1bTgcgBfmnwA",
  "key5": "4esWm61RAjYLAa4bms2Fy5cr2841yREoTXNGwWMDvxCf1hK6yWG5Bvbhjjwu1cYxQPuTGrk7ZS4a2oiQrxbngjSD",
  "key6": "3ZEqiZn9gdoeRVajdmy1gpeFougpZh3rU1TF1RBPytGCpwcvhLdUHpQ6tfhLonavD6Basi12K9bhvi75dvha233P",
  "key7": "4W4u6CwvLf4xMURz4GSS3Z3FMCYdWWqwmU4cgVvKdrSnp7YU7dpbJqfeJcrpoRURZKhcktQMZXkWpaHT5YGxWDv3",
  "key8": "2JyWLZBF1zZAdztJkZSVnroR9GPQqJosr2Sf6rzfRrY7D4U21JH47HVi4VBJ37KAhZ1oAyoCWsWhNemF7PQxjNz5",
  "key9": "5tmyPKfWFJsmfpeTjm4Xdups8RDGmvytYYBeeAkDn5EmDRKB2bcDMSErbMVxq5RBft8tScrbUTz2AeBZmewwgUta",
  "key10": "4MSHzNKGuTU9SbfKnbJU4B9FesPaAcW3V5YWeTKzoj26gkhX6XExNzYQcwWQU3BcQbx1rJbGHqGEnXVxXEuSV7PP",
  "key11": "43DxTNBYG5aQh2KjW95ntT8J6Xmvdbhc4p7A8vqSzutCc1dNVDYWpw46XALkss5JBdcN7wdV7U6ysDA9xFNBT5LJ",
  "key12": "3KY9XhXjBuozCTMTHLTkJ6UawmpQdBKuGMW4qmrbQ64WzMn5SH3gXTBr6SN4KNDzxBBCwTLNgmR8tVta4NRCsv5F",
  "key13": "2TVd9ReD77ZL5AM7YMjmU9r2UVYPRAS1qFcrVgnNHsrD8dDLBhWPZLPcx3SJbbHwpgCGBDPUfKBsPRkzC2YLd2WJ",
  "key14": "uDoErPFAL3vuNiKQh89xRni18UpWcAdMk3B8RbouEsGTYejXriZ2LUERiRBSYcFx59oULRP1CzpQLLWWn1SgBcg",
  "key15": "4MT1trLwrm2vsZdUyu7hCLn1GABrqCk12icrB8LZgFERUBQSZr5CLWjtCNjfNVGfR4atZJ5hAwziAVGK1323rogF",
  "key16": "2efRNRxr5AkRTpEVsG4zFireZcotM1TzSKDBuXRCSC9ZHStrNhcXEG3Pucv97PWJ6TA5aFaNXz8prn3GKAvXLgbG",
  "key17": "5daNtUzcxdWU82ctaXdqh1XCVwuw2L2aqhFf6B8CZ6Ftcn4eytJ1mHEQregArEJ9NEUNB3Jw5nWFUPZZ25WiSvRX",
  "key18": "uAPcmpb9J3i2CLGrEhr1uUaaZ1BNJL2mXguMFzs5nJdpygC1r7jn7MhtXLQiedq3Z2PjWY2yP7h4DoKxsrZu2Jg",
  "key19": "2waUKPM1GRTHPidHccYG6ieiuGPixqnbRHFdHXsChXBkj1MWsqHyDuYioYDmu3aA8RT2B8qmfjZc7GY5pJGH3ccN",
  "key20": "24W7Xt5YckApSEuYuJse7vnBMKPj1hkeZrkTFapnhbD5LkNHBd1p95aXmfbXxf5JUgawn3TThiJQJNZDfbQMNDAM",
  "key21": "m4zSmQ7e8zsef4m8KJKMDXtbJf19oFiQ8xB24GnsWmkbEUTrziBX1TD3Uxd5CgqPikNUkSmFtJJ1v6mENNLDg2k",
  "key22": "2eFncGNh24A5GENtVwJjxDz5ydzY4yS9a2sQch4uui6H4HUgDpwudyfRPHFzmkZM8GkYh3fLmtcSZrpxsUrVkWkh",
  "key23": "5dQpdYHXqR5rznptrpsyHzEsPP1YcXhQtUFypffHxkJ7o2wkPDnWR4PZVsARGutuGwNYtaHkpqHEekSUMhXRZBLX",
  "key24": "33g4TafMUc5KoHTWT7ig3DsrSqXTPP5qo823HbPwVng4dp7U7CKPUdE2PDLSKnXEZCRW6crCmivRSgRM3zFDi98P",
  "key25": "Pu4NQUsMT5BceBsyLHxvN7CrBimYNZp6CXkzYFh2xdpFG7p8EGk2Q2AA2Qd42F5xY2uMad4ggH1sQ4sG9FGBb5W",
  "key26": "2dfKowjQDyvcdz6P1V52Lkcxna6v3QbAQ4i9HqZiZFzKF76WMHyKe8tpCXEg2Kee51uckSsrrHWzmSRocwQzQjGz",
  "key27": "SGyyXFAa6YdgaMYLjdVPuPcPRR9b4dFuvAsefDzXER7rCHEm5krg1VMqUFouFKvxZscVRSkFcuUzNXfQWhPz6Sc",
  "key28": "2Gt9KeodEQm1LvVGZCSPnzxYbEqPhL9M7kvSAZ93f2kkbZjjRKsqXTvx5v56fsAK5efYiCDdFVt85WWPt8rhxJV8",
  "key29": "4THWDzvgH93joTbxad7UQ4tF5RCLS87LKFhbS7axfcaLGZdJJdK7kxzrEonccaRys347AaupYVQRvGdiobe8ZnrE",
  "key30": "4Tr1AE4AyAqLjYJuGiaK86zkiU1GRqjcqoHixyQXnj4F4Zyq3L853TRQWSSUSLxKn5GRM3NQYa3ek74njNA9DQoK",
  "key31": "42Nav3V4BxSci9fdmdzzPRZ1kVdSEEb8mK8qHGKueKn3yxtMTHyQaEGwecZenacvBMx9HgBreeWCwWu9YHQ6uaL1",
  "key32": "2rJG8WuoU4WyNfX3PjzERwefuVg6v4gCT1CFmuTwhdAFQEQCatxrsZeRUMrck4J2j9de5qBMWbfWLFAPjugvFZXU"
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

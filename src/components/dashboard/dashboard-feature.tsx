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
    "5fmQxfzWAjFigwfbqqGnYd7ptjAHXr7pfvUybfnjSRkF9cVhCRJdRW2dWjfkYEPUoYzj934na5aYNbj1htArLuma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJxjY4B7i9nBPFV55TDQvcbimbu5K4vQJsZS9k5P5wtjPMv7X8T79GtJY9KRZkutrWb9X74e8WwcQWLDZKYKQr1",
  "key1": "4ezetqpVfZuSqzQJK2uiUfYZqUwPvAd2k5ueYY3fJGvjp8tLGfdAz5ZvvMNfVY7wZ5hpfGWgYtJhLrKyq6QBuYyx",
  "key2": "4LGAembiNDsiyEqjnaR4bj3NXTziwFFi6ZN6WmzJwFadEmEYLxsbWSex27jLAPDnc3LN2rhRXcs86o6YffWv7nq3",
  "key3": "MKr6NeswdjRrdvSrvNwtxY1Nqkcx6JBRVYDMuK6uyXEViU47DPpGZqg4driYhX2Nucdyf6AYLibPFrYwD3mfmeS",
  "key4": "8RjrVvMDjvA6YoWoPT3RuZVBhdu2BKNkT72T8g34ysuFa2VWJtvCygdATBEFEximJw5GAkXWpN6ziznYuGXQnmu",
  "key5": "QmSyXKTVi4XDGRKstmu6P3FXoaAsc4VKneRAFyqPr2a5qthXrWHdXfXhRPr4TcRkj4vzpMzGdfgisNTJTJPQnJi",
  "key6": "9XaDCwKArx4TurKmsnB8yTNBQYeJW61F9qDeN6WBxoiut8rnZRUGdXXk1BZSKWeQaH4zRqvpx19AzhqKnVzJX1X",
  "key7": "47mdp3xdjDMFXPPZJnZFGjL657ndsatLXxtQootPMmchAHrKxyyf9yjhCXfAJ34FqChqAaTiFQqoHpLjUSmaJYbM",
  "key8": "3KSkx5aquCVuoeiG27gPZ194Njhf8SbVFMgXfH3YhHeWXKJqXsf5omtnWQG7Sbb8BYWwbuXZjWLodWawYVoSbTm9",
  "key9": "61hCqgq6kcUS8CC5B8TgWXVpXDkxtSpRTz1XE4hHMbcTPGk1M9CC1MVgLSXb7mkdw6FHCcUHsY9RekZibb94bdAy",
  "key10": "3y3nGciUGyCycrtqCRhyLzZmpSzeBDNTrWG1W25ryb9pvH6jyKarCFu6KkjbhfGhygw81o5t7LC4MP2z2U7xXKEQ",
  "key11": "vFoCdmME5UtDkehKGgiJ2uN3CpPd6QPJ1QCupeZ8Tik2qGnSDXZs8sRcatYE7zpcLFPV3BBTCNYM1HYACAaJk3j",
  "key12": "4gaf3xYnX53WQyP1CbE6hCeBiAy1nN5Do7e6XCMqte82Gt93co2ZAdB89tyLyhwELRvJU7QQdetQrnhfHe1R63Sz",
  "key13": "5oCmYFcKi8buR5zrfYbiBL5i3JkZoNErh35n3vhpRWHQ7jUaFhTyZtAr5VRUCCWW5dvYLrsmanwZyypuiLcsjbti",
  "key14": "3m9Lp8czmB6jLs9zJkGrXiCM9BrN8dQd944jUp2KP9VGwEaQk9NKK82uGLHfxDx93bih3n5KcWMmm1wes8AokDP4",
  "key15": "gDsju6dAyh2q5iRG9Hu6PJiSJsY2RaSCe2c7hcNY7ho4YuqfYuMUc6EDJciXoVz4bEnNkaib15RHyvfeGir3wXW",
  "key16": "4rQ9BvbZAFJCrj6yX48kF3EzZyUMFapZaW3SHVDnEZ8T5W8GHp1onYc5yjhRVW6euZrdwxLdVpuk7vqkBwHhCtD",
  "key17": "3PRKtJpbeSz5qLJKfbaFAEeD8e63VNfFJx5f4RAy4dbiQgXAmAFSpmacDbGDyM13ApKTxZ4NwmwVENH8Q1CSP77h",
  "key18": "5mocGr2dzfiAJ2U1pzs1f2gQaryTn55gjehUyFfWH6yVK3jQvqjYF7Dop74oUXFLDNy9RRLLYiHEbesWtYTqa97y",
  "key19": "2d8MxEruhroefrjLPqeURGRgk9xDbj5k4cQG2bkt9cphgAoA3sU9W4iQ9o8D7cbvpR5AFrS67QWJc1dRFwMBjJVR",
  "key20": "4KBFdN1xiGHRs9ghuhCeKgwPPfq4xtYPfWzTSCMEmBBU7rAUs32TJqiKvNuGvvCj3peBRyZXcWeJzVvEHFJTepS9",
  "key21": "5FTSP5Fs6UjNv7x2ji6pwB4zmRHHYg17ejBPBm71PCj5YWmc5SkZKSUyxzdwV9onKG5jwv6MvkmwHniJ5dMfPqcY",
  "key22": "4h9MnF2pnNmJ5b78soav2hVPp7JYYftLWye8PZAnBjhXHXeUpPwqo3rHLGEW1dXAvawhFtJF4Bs6gTEMopY3pNmm",
  "key23": "4j2M9FXh9dqC9qdJs1YAyuUpHtGaozbsCJS4crcAinfpEvsfYVTPMtrde4kpAQzt1UhiwGAbYRXsQQekYh2pJBWD",
  "key24": "43dAvqR7GvbKy7NuPKqzhWnARixdwsrY7hNrzbc4QWd1Dc5whDu5gbzPMotzX21NNJG6HZJv2Enr18sX2KFaHiXw",
  "key25": "25rcz3nXFdQd8KMgDd839dnP3zfMhfGgzyZ2BZsQnd9fkT8bBHtFe58QuuuEVsf8YEQfyeJw8KmFXYgbYe89GKfh",
  "key26": "58V7c4w3c1oMHf6M1qdcJfBcQjsNQ7nkTE4QZd6Mqh8QS6acwdDMAq5yqiXFv9x9Y8F2ES1n8PH9gf8NFcrpdiMr",
  "key27": "5jJNQDoNeN4vaY8vH8R3M1pmURwtmTSkMSTAbUefoJqaVDBpgTuVaUw936XJ2eDvvuUXxUCqG3hb78zqkm2PD5e8",
  "key28": "2ke6arYLcmES2YpvZo3NtvJECXy3efgRj4o6j7D6ufseHnNXSC1oDVbvshdhFp3w7HvuR9xwna4YbYGCvJGU4ht5",
  "key29": "4A2iFLZJReDGsh81Hm7o1gRMLNyTn4qFXXZSdarathtahhUpSxkN2DuqTEAhXCcsuJuxwynUYHnmbYkwxXVBLNGo",
  "key30": "2J3JpXZKThbXBNQPY23vnAcyJz18WCLtJZSFFvhAVcyqgYop8e6nP28TDSZkf35uPt52XkWkChrc5UNwXbLKbBr9",
  "key31": "4mbbuhn2d3nvWp4Z9XpsD3ddLe8qPkypicKpa1HzjaBniFMyfmakeZUopEpFrWaFFgZuhskTh6TniNjmowc7rLVa",
  "key32": "W8TtTz2TjvaadBVwTDC6ZZ83G4S6N42bez19Lg3jBfJHFETwHkzfCPeKNBGCyb7U6c9qb8QLjp3eKQdvnoN2ykZ"
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

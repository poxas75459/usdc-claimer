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
    "5gBYHL9fT8LArCw2Z4YgUVSwgaK11HyUpBumZntEnvYmrrKAR883TDLS9oRF2g3oHRSF6zE2RRP9TZs2YXfn45SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UzVrLxRgikyth7ZGvY1N7Zd2DMGHgFQmFf5NzCH5Xvns2HKBb8raoCALYbY359aWm6Wi7qeUyHW446bPcMANGDL",
  "key1": "39KQiNeiJEiMVaTNRDgS3Tt1keL4Z3AR7dg1sbcSQdc4ekF6exefHf3tTqQGpJMqSpvJnK47zyJLB9jpuxSrQvdz",
  "key2": "3ySEdEUvgTLStg25WJhZUAp4kvCiYb1qvJ6LMy5oexfjHPsVrm8YtEFgzR1W4PH96ja57xo17H3WLXzqU1KNGgZ3",
  "key3": "3WW11jGuMUpyfUiaH8B4yuwdnbcm4N6dmGEpcSViXBEsVP6nZXPmFRZGMh21a95Sfrt3rGsuy6mg7ug6GqmHa3WU",
  "key4": "3QsDvN2CpjBWTNiW4iZ3iy4hLqoaCDYm1qCfTXiez4RvdE9KP6HP7qwrQy269kR4ZcDYCbjm9JdukwqzpWa19PDW",
  "key5": "NkCv2UYnXCeDz3sie46D21FCJdnUmkMwrFVHyo4YChPPoqHWvtFpmEBLCQvA5cHxGkpzfNigMo6bKtSWrzjUVtF",
  "key6": "NBEFphzLj6gTXWu5Z93Dc2LG7J93P1LRgvjXazuwMTepLwjY1KHBkTfYfq11DFHDG1inA95MywpmeFDW6fGzW7Z",
  "key7": "2ye4Vr8AnSdnqCyWf7JEa6pjXBP83TqkZVrPGRdPm6M7MoucQnM1AATrsjdVjZKt17XtT8BpQUhrqjh4B11kWiG1",
  "key8": "664BwbUxrwrScGFpFXFYERRUFQXzUPpSPd6PbGZ4Fww5ApvUjLB2WX2ndyRan125FHkX33bgNXJxMxcZGUTpwDzr",
  "key9": "PGCGCF1QRFSVqYAXXk999rUNDo7Np8WnBYM5mCh8HXeDprJjKi3sXDgio4CWhMzmGhboj7oktSXjbftLp81L2uU",
  "key10": "4PQhuL8iAbaKqcGHTRgkW8ARoBmbpB5JZt5aBS2tiZ5rL6aPUhX3PhjGmSnx6ZjPpiUuNEkFFwt7cpssC8qzUyLy",
  "key11": "2ixgM42uy53tiz8tjuVpX4fZiAG1LxtX6TY8eU3HbXKWTMb1V5eZ1omFkrBEsc3Wzdf7MEWiot6SjjEzjzUqgRXa",
  "key12": "bAr4aEKK9xwvErR6xQZYFMrc2Wx8JDisWkTsESaxuFi7nw7dhueY37DniugDGXjnZtrA3gTG7X7dfztCpe7RVid",
  "key13": "u6egrZvvAGx2R2KxUPH5iN1RZJw1KahAJjMmfCnjW59e8omrch9iU6E2cH9y2VECinRBQehe2SrJck8r9CQziQB",
  "key14": "2uQHHAZJiQ5QyQU552rj9mcTKTAHzxrdK4PKZPW65fZv2moheLaD4Uv4y1SRcC2fMjpy6TV6LoUrPCsAGNyufnv3",
  "key15": "65odW5GrecsgvEFptXucTqgYbaG18o8ob4Nvr7TWkug2wSdhMFtsisnADkVDhGuKkyphHCQFgVtZwNCvYifHWKch",
  "key16": "4aPfVUAEXk1n9LBymVnrwZWwfaPyPdDYN8tGEADBLmXJkwLwV2v6tsBW3yUBvqRC14hiTEuTCDhyjvU64s5bu7cE",
  "key17": "28cjunMNhUKg2KK9nqy2NXXzMCKkRga9fn4Z5MtgM9zJ4dA1Q4RYJ4fgke177dXxPeoeneYQjVT3XcJ7uPR67wv5",
  "key18": "3hbs1kzFz35PaxHR1Ewtar84pJWFhaWDMSxjPxkqLrND1mbuH9Qv7CNG18MHMqNVsBLbEXq3NrPUKD7SpZSPg51C",
  "key19": "3xfNX6BWANGF4WZFTasSXk33GyFvRoCnkiYJGKsVdxKvTtMigon4XsudWkvVUphVk5pZ18XLUjB5Km8Sn4VJdvMS",
  "key20": "2y79Wr47njPUXpBhDz5vMn7aZQgmzviTSxjmkWDUg1HLygjV8SnT5YFBuRseYGHVRJiFXdgmFS8cpFYPiGKawZ2t",
  "key21": "4RdjSn8uttxVM7ufUUDtvbnR8XPVeAkB7YPJowTDC9nHx4dHYPAKtxVG4H5YthQnXyYSx6B8u9v9bregCB5saApq",
  "key22": "PcFYoKT8w1YFT3FsGTkpPNBotmUvgxr9s8XKHBj7Y8AusFCiNiUZ1jgs9szrqhbDzd9fdbDsGyLYVmLEKDZazy7",
  "key23": "4vaKdN61sQFs3FQiPCjyUDV6EUFNAGadgntMmWSMyDraUagGhQYHPN7DVywVBpoEevrkEbfZc7eFcifQbfjq4bCe",
  "key24": "5acpmmJM3RqrkDcdTWTD4jkUs9qvqGJr2vdwCm2Yvgn6QpzvVxX2iFnmBJLGPJJTA6xHpDLXdWnNF4Ft9YWZf4dt",
  "key25": "3xPiirmJTZRSV3vn83PUW5SJTCxrAzsTZEm6HndLnCxVNSdWR59SzvhxucLVH7nUYHtbFkXdYrn45nKXvXxzGSo2",
  "key26": "54onKDY511iLRVwXfTUHZWmkryZECxf3wZcpG1KiJuvE3NEfair8cwDhGkC4CdS5biRepHoHWWjXoYpgFkE84J4o",
  "key27": "4YrvZsYaUvK7i1wtL3rJvH5JzAMBVcB8q6FD3Lqc3kF16T1LRwA5J6dtnQNEiB7xhUBGkiPjU8KmHdJZbrEgM6dE",
  "key28": "56CDgbiVMBaBUWDC1zvpjGUJQhwTnkSHmXGPzU5azK4CVEtSsZAe67gp7yWdZ9vZZj1KbF2PnRpf9hMV44F6uMp3",
  "key29": "rqmgWoWcaqBahrLHa5wjF6tTwanZPiQbWKdWZatT6vZPMBPDW3TSAnyBcYfygZXZdvPqwdcVzFhLTGnpm6AD1py"
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

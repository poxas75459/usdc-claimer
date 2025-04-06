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
    "2bu9T6sLnnRz2mc534B4yY1SVSocZ91bb4TajWVQZhYHzE5EMiY7TUhzmkjc1mbeanjynfShCyDVBs3rgSJpWMkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rne1hYtrGZ3fzjq4JmHyfBQiUyBkPof3FX5rDdYGcHBB6shFw91M6AF67QTreGW7GNmrb7GE8gaGVaE1dbDxZgt",
  "key1": "2LZhhmpXKPg991qujXXXcCN1WxwG3QVzDiWkaKaemFYfT69WuQBM3GXBZRrMp8BpTumgkAByZKCboa9NqHozVS1P",
  "key2": "2UaXAxtJTYRTWAa3xWHFfWUC7UoqXgRcEsBdXFu5R53rGR1pQ9rw54PFbjCuSB1NRXhYFqJjBnq45dTKkaAdxkUY",
  "key3": "3CDNjjpCfC3k6ymWLFVKGebQw7JGtwTfodKQChynWbxiGYJ1qZfGdSLWuQ8WiJbJW6QGQMUVDzLHywDeLs6SHSev",
  "key4": "3mk5mrPrYyNApi4tw26gtHoyaPUXui1h1yrENnrY7VbC6qrKjKNo3xFbG7jAU2sQZKFcXCbmjz6ZJrRk8DJJb3dn",
  "key5": "3Ks89ZvunrHVVBqphg3u1WTGk5bfboKu8m29bFRV16hEksCnTtxxecBsjzrUTWXkCmdS1YqHfsBRqNu5rt88ZLPd",
  "key6": "4bfQpEz2ZoTP2zFALGjA4RVZ2QKB5MofPM9JRu3XyKLryM9Fs77seR8DsPD7kSSDCUrnf1wc1qqRGNM3TpkybZis",
  "key7": "4aKqQejswe96RLSuRPuUbjLnoXqmtF78k4NHRFefAktziiTd3c6Uy4UnCxtoo1Uzs4WNo2bYCwk8DkWnZaxgCp3i",
  "key8": "4BTXRSNnkMmf43pjS9bfgh5X14KhCWg12zEiMuRfaai5fVFUKyJ8dYqtmCQivAALNfnd2KeDrrdvPP9UHpJiF4EE",
  "key9": "4Wwy381cqpx8RinEToDaaxrbDQV7ehatu54RhBXc1K6LhzH2LrEo9YjzWxps9DywyEVTWwG6nVhBxSY98FfvXnqp",
  "key10": "5QhHb9nrzJwncsQ3yQmHdMhjwpTaxzSEPQ3RaaDUjXyfMLJdm9KYGdAbPTfAjF7sQaJLuPaE1YuUVbMXsAxPW3oS",
  "key11": "4tUNWJazNZdyW3eNZWjTRPacGKjmjRxbmt6931kWVAz4vnLaUyTGEKqFqRS2wgrXkiKiK2rYLCDNdLG3VSt3FGkh",
  "key12": "4tMsAJVXPE7kxUcymUto2Ukx1MoGqFvYbf9pZdwn6ivkz1k2iPeDjXbLu4yqaEDiX5F56Ng76jXhoHdjd4eVfSYa",
  "key13": "R19FWXdAAWSVaSwkUdv8uiKDAr2UNy6VbDFTTgtvNV4r2Mob5z1GS9LXZ4zhCAJWdjjEmfvC3xVN2UdMQ56AVg2",
  "key14": "3y635A4TMBfivYG2KSPfgm2qtS1m6Tt1n2i8roffdX7FWHSDSdHEn6p5oH4W3uzCguC9pj8xWRc9AaH1Q2vBfRKW",
  "key15": "RRNtsuYJaWuZCFwycPR8H4VZwFmkyxDtwjv1FPwLq4oCTi5fLMSu16LkFgeSZeqCUeknTF4KhksmbWHJMPGJ4oj",
  "key16": "4mrejTDK5NZJCxXEcd4oawRWFwcqETz1L9d8Baxk4kmvDYaB66eSTndbHzEaJXCJURzbnCC3Qgd7SXXNBzx3zffA",
  "key17": "AmemvH6xU781Mm3KJhnX6VSBQJxvxPqukYweuKdTTxbXJQ8MtKcQ7BXY7DFmYZEqtg7NGUD9jdGGfE2d1o2KcX1",
  "key18": "31t1wExU5fVhrHtgGDddpPXe35Ybw7DPCbwhhwZBzuSc2DN3cs56CGP5wRT37KiKJgWdv8JTvUhJEDbeUvNUeCvV",
  "key19": "kjh8skKfGPgRP288TVyVibqcvf3svCaaHtT95dEgDNmu5Hk34bwX4DQYSR7PnpvK3ZoJqn2XqcBhs1YV3Lc1nHq",
  "key20": "4hiy6zZNwmXQNxt9rrFhutjGZouzuo6i2dftAfMG4nJifbZg4uCJ2S8bSqYEzNEX3iBrnsY1xqWwegGH57FsR1LA",
  "key21": "5TPeVtMHEMGE8RSnb8NpT1yygR6FddoXQsCUVPznpvyDY2Gn6dU1RHkqoaqt3ZTURzWkMuHwDHpaBHsnqkMzR7LQ",
  "key22": "4MRxZUKipwoQiQ28L9xm3f6n6q8Rk7o24y6FoC1Ypi4vxqKGeYTfSnTuZWTGK1BJVPjHqwhFhTSveXkH596r2Tp3",
  "key23": "3GLGi4tzZjw1Lo1TyFii4B837PqeRLmktu7aSjNaBtdd1379P7q8RaB3CtaFcyTfwdtvmAoJ5QdHi7uXvLhcznwz",
  "key24": "5L92aUyHBEVjAv6DyejgM7erdbP1AVAp4ZMF8hwoqyxBaWi3LKaEPY8wabGFg5a8hDD4LCVuhmdx6fj4nLQRR9yE",
  "key25": "2UesVDdnCNTRbBL4CjKmJXZwG29oojQH4u8ZfeLWc9RKLLhbg1smZz4dGNz8vvPVQVQjqnPXn2U5nkaGWTAebCJa"
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

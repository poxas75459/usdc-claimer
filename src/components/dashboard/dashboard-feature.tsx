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
    "5EuJF2TVaCxNttSJz36qFu6btLaPrttJwcLegebkxRWLNNmbXKrzxGKeX1PgGND7HBX6R1NvyDs5YGxbroozGN1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8bkfBwBdgVLfcTTATPPL5aDske8Ux5oLrrsFboVHgoKd6xVgAJTKgNqasYA6xKWLhXksXzEVQcKvzoZnxmCwyd",
  "key1": "475ePFtHCXV46Bs8VRtyeBAwbwF4mV124KZdzSn88uMS2edYe5jDzbTateuuQNBePm8gaB43QUuNgUCewy8CvBeY",
  "key2": "aRRR5x9qkazptdbYMobYeNy54jioeW33qPyasRw2Fb5wpwUKE8ZwYDdqMQiVARVZG7HUwimn3gtVswKb1wWNsDT",
  "key3": "2VvtyxBYxbvkK4epNj6mMqK7dZNFc3MLNv292VrDFK5A7ixDC4BViLUKmh2taSR18XapK99GYsshotjB8fjh7NVu",
  "key4": "jm6Zu8x5U53vT2CjLDYEYySSNtn22FhceYAQtPgxkju9cXjNBp4AW3nhUwyAW9N7gfcD5JhkA2DNckUQvV65WcR",
  "key5": "57LFyckZw1YnPDdDRJH5USsqKP3pQgTwSKsbw1XpCqFXqEzFDo5bRMmfBBNA8ooivuswCxTmyeUQoJ3Rztc7xMzz",
  "key6": "5bcJNqxdkyt7PYQcNWFpcF9xUiigtxZZQbgKGSaGC323PD9JjDJVf9kuetG5duHvacmgXUt6ZLc4VeHskurYnGUc",
  "key7": "9T2tYFmvJb8BpZWPAve775XVW6wqEDqCCzCvF9sevwLTuUKwdLwMgUMmPHK9B7C4VLfU5ACTAD5Sszyq7uduAUL",
  "key8": "4RLbmCiw1LVgRGg54hG7Nmoas2Q4cSDacKzX2aCoUQZmjfXwrBtfC1rwPruD1qFQSNa2ePnAqrwUMQPrDay53vvZ",
  "key9": "32V5oYpU6hem7gkSbMGJunDCeNRETb4FNbbT8nhGdqS9qduh2bC1VYfJSXMwJmGAywdbiqhEA9v1inZfbB4kXMgy",
  "key10": "4kvunvaomN2VZNxNSLwKuzaJsHjpggLCrVoLhWxPrbrv3UHYYB4w2ip7mHUFDJsLufPq1SywW49biyW8JPX9BUDC",
  "key11": "3oz8phLni2Fn1tSLJzhAbM1qv9SxY2YdZpiBnrXCGV22CQBRnM1ncouaNZYAxqwuzkD8GENFMJjYU3ZJS6oYUVSw",
  "key12": "2XwufvjW3aRkeKpvUqUYSj6dTNcw7spmw9KgquFj8NZ9p5abMgftskhJoiNnBVm6TsrmfHqgPFmE6pWVwEebosLx",
  "key13": "4Hin8DX58UMRX7m9PC28UCU4PUMw9fUuv213ink2qRFKcvjtmXf5tB2WNTyoyBxWa69sr9j9515WmUEzehs1Ad67",
  "key14": "5Ekp6Y5wnJeJVnfTrq5LXneSgrqsTyUbvVaiF1TmmSxFrMCvTcTdHD3XoeSAW5wCZAS4UhhiDPqH22XQSzHuWgkd",
  "key15": "4zy8PaAMgCyXgrcddRJgimJHeLnUwptLW4YB9W9W411R9BQbQFYhbTirN4CB3hKDcQKhvdFa9BwFiFBb4pGxDWza",
  "key16": "52jVGTtnxWm8fN41Sj7riAV24Y4EUdZvmmCPERosZ1fNrbmVSErSXmcxhmYHLFXgm5Gw8cBqehv4ZBq47y4ZGoxB",
  "key17": "53eAfKXvPiyhPqNs59UErUuuCqXrf2XYbW4hwW1m3DAp59G1EnBd89SWrUw9Rgmz7zZo4HY1Qg1B1PSPPb4jc8sx",
  "key18": "2yKRXqWjv2urazejzJtYWGpykxhxb9v2yNTXmYKGdVNikDDPdXYoph7XhCync6WXgXVW2Ht3VCGYBFtMPCkHSfPh",
  "key19": "2M3JLvAAoMrWwZZNT6eVJwupNFXCUvQgFuYytCRMcHqCkgH9u3Uu3P597sU2Pk3aXK1xFh3dNSNbLY5Akj8XgpKu",
  "key20": "2kM7MEcCzR25bW9F7y8e7sivVp59YRs62wd3FddLpWRK62Gkb29KrFNsQxgnUtGLR3pqxqqpN6C2CwPyBYvQbLj",
  "key21": "4bUzqaC2EnwBwiJXvSL445YPSJr3nihqqoTHpAtZNz5bedwtzVuZhULnDhFRbzCVcdao6zNdDshXY43sCMEfAjw7",
  "key22": "5FEydv1yurkyZoNLCLZKqakhp4529gHqrQcgBuqGrvMJHUiebwXjRLFQ8LxNZtPrv69agEGeyfRAoJeCHHd3SZEa",
  "key23": "2sigPRz8C6GRmpGALGadWb9zVxpddRFdLDykykeUB4XGo8WU5UvhBBSfmq15vpRnCBwoNU1CmU9UTxr4Rmya5FeM",
  "key24": "5YD6BD8dGbYp4GGd31Ceb6rKBjs9srRQtCAq9daTTFTrJb8EEzkZtCbsFzvvAH9B22u84SiWD1yHaXq6q13UUkfx",
  "key25": "3HPBf9Zcgo5UfWj2pKBbswvvoYKNpC8uoX6y7wnXiSwbaaGHpRppWvVTU1nqbFGrT7sDMZo4bETth2bC7LtAeEQx",
  "key26": "3ckPAbumFYuiFHTT63dFLRb2YrHRN7bgFbFBf6aQsoK6BrxhYrVD4UnyKfWXx3kLGWZCCJz92BfigSCeM8kYD6kb",
  "key27": "BtSLFpBxzWd9XCwSupodzgmTarQQxN2JpX4LbqmCF4zEVwztDxwbjcCsszcSaXskWCuE174H7eZVof76oTQNHgc",
  "key28": "5cQysBooHodnSAioPJnLvk3ANPX4zSQ5BAEyi5Lf927HntMBJFSQXRU24eRQcsicen6cJKDHzVkq5ksyMdX8z5vQ",
  "key29": "3d5bFToKrSSBqsLkrwsKW33k6kDcasjUqr7tR512PN6wzWkAmCg7qQA8ZffiwowU1DpcphkQJS6QQovSp5Btf4X4",
  "key30": "4PmmE3tP1kNoSYbAgug1aopr6X8jU8snVzKJPTH4Ccvdy7BuGp1U8CW3H1qKDS2CVSPxvXLZnDebaBTsZ42X4zqc",
  "key31": "51GHr6N1YWEALUAsivWDNoXPkyfWKGD9mMCSv8FR7v8Q4LXfzQf1mnpKBRUo41KPESqfdnMKJQNDckBSe9MDVSg5"
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

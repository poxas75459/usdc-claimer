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
    "47oeSm5FEsHESirFQUA9FLwAKYq7xaPsWCYYXU5ekLnpXo8TAcRxJ8PRKYJVYw7zKok53cbL63mDx9FUotGnATD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZoCHd9LG33BSmbjq7ARs3E9wdkB1Y6xzf9NRbVPnvvixVN6vq89ccRDvDfxV9MgM5ZGGMQJzxMcwuxQyNGHE4a",
  "key1": "5uHSPPQ9ZmkEgZUMtcnLfVnjL6yNsFteA1Ruy3WiX1eFuSekFodiUNs7EEmgeFhLSxJKBjBbotHMK8NtsWCR8kid",
  "key2": "EreQCMJKmozrBtExXqGVkdhDYdFxpHXEWTXmDcwwjkRGaSf8BHVS9CY3JWLYCu7NKUER6j3dfkFzKjd8HoxySpa",
  "key3": "33uFFuYfkVZH7NQu9ahA7GxqbkPuHk15C2ESkw2s5Gp8J2TB5NhgjbUWs3aejU52WiNHRvaRWsf9bNeZc1m35wpV",
  "key4": "45Fk4zBH9KPXACngBMpsx8g8mkXZ8W23P4KiTfAFHHHJBtiAH8q2wugQgNX3V2uGZCcL9JiWXjPsX11pgWGv32cw",
  "key5": "2cjCJkw7kgKLgmuA3K51UZKDommgSM17cWhsjCpMhYwfxH49f1v3xRhy4FffoMhPEcBz9WjfEzN5HMQRwZU3BBGp",
  "key6": "3xhoW4PcvW8hJrHF8HyjaquB14YvbAxTBDEqvjrsoLhfBkHWvVL3bf8cCRkfJkFQ2WTieu598Hms6fRK6reY5Cow",
  "key7": "tDqJrDKJNWDwd8P36GxRbqQ5jwuMesdtCx431z4MyarUhmN7FPUArxCSaGH6LpRrnfTjvMuN3tWVNW5LkpuPxgC",
  "key8": "4Q7S5fSxvD7rTP5ivUbQRcfuUt69PyF1fwLKQTYbqyUi98ZcEn6eca6653q2m8T8s5rpCwRNdehE3GvwoLSwQRYg",
  "key9": "2LFdhULAmUx3K87TuF3d5EY9VAyfMuwtRSLV5zuw5C8S3u3tmtYuLFCGCiv8LBdyaKn3UJR3i3n2aNfch94jNySd",
  "key10": "ux6mLLpfw76oZHQfifscUtJWTT3P3PYpj7dfF9jJ6tghhA4bXj87KTJbMgA2ZL4Vb1ixJ6b7AEYh1n9bQNQnm4U",
  "key11": "4w5Px1rPmTAB8tK3QUyxWPAv6iF3ehrLGav7cHepCxCRjcqyB1EoRVDPmxW8sDgUw3yU5QVXkDuZz8oshiYKMmgc",
  "key12": "4CTPgpo6KXoT79fu1nK3FQZAWbrqUgJCneSyTLoPXXqbDR1LezZKxeCL7T5n4etcHBeAHiXNHr1Lxf8771nY2yjd",
  "key13": "3s7yf3qok9zsW2pbmHLN4uajVEvGz3Gh2ozuNWyHDV9yefWcL27HXFSNrKkYofE14sPRYuqHg1hB8burdEzzygu8",
  "key14": "aLYtZQxYhJXEBEFNXYei6gTbW3YuNCPpoVMg5WKSnCjqL7ueyKU9oiAm7SphSYQGxSiFHKJ5iuP8EnRXJf4VVnP",
  "key15": "2FeRTJ6WXt2uBGDFbFJpXt21N6M7FR9tdzbmqp9wwnC8e8Gmpf8iZZtHvmXYe3gmjq2QaucF1M6WwAtESjYcrTZj",
  "key16": "5u5VBN8RrxUiHhj6KsY17rxD55Bk2pNQBFaJ6855CwnxPhLf5aDP6PpwR84mTbCuQtk87dfMrgdhwPBNX2euB2ra",
  "key17": "64eiRey39tueNVc1qVdJ7yUdM8fN6R4cMTJuvSA7WUJHyVQTrCGXQHzAGQWWE6Qa5qv2FZjXeT2s6BLdfTsiuZQR",
  "key18": "eZz1X1juHcmVp5LGVhNizByxiPsYB6497Vr8x6EZuN7xKH1wNzgV17SWr2bm7G1c9QS5s6eHNnfFoZySNATvHgj",
  "key19": "vdVT69SSVXiv437n42JZZz5T8Tp2Cx4oVxPdQ75tTz3pyCHtWcEfzrE3bG4T2qbshzhyK66FyzaJGwqy1ppjEup",
  "key20": "3mgGXxDKbEQDGXy8figmYAbECevGcvgAJ8bgNWJWy52usnMwwfE4yEVL8pnQqJdKMkLnWsJHdRd5d8VZ6KTEd6fJ",
  "key21": "2KHueCuXuw3itDAgoXkaWyHhz38qSdQePDbkui5k6S9e5JPtsNEYuzuvH9uwvXSRxSiYnh1dNQsNpfXweFepUFTq",
  "key22": "5GS3NzS3Ry7NH3xzSBSFFHnxLhAieisG94HMattmbKN7MD98few4cbkckUzaKwLyYSWM9YLL4ff8grpaGuT6uCQj",
  "key23": "2uaX2cXkXE2GGsQuHbzA6YpuVFpCjKiTyNqtB9MSEPKwYrnyM9x38yXcQB8NpqhWbPdnfRTm7gnb2qNLJ5xCLhto",
  "key24": "3VY4EPxyrG7fwwwbhJy7hx49nxvTf4fdqvTGBs1qSxJGg8m8DMm3dtCiL2iuZdmoLtZ4gDqCpZFVRNNfNVdp4D9E",
  "key25": "4pPBv8vJd78o1iAjmbt2kLpGPZddLktApHBSCKbBCF83jpc1qTJNdUHxcrNGV6NTnXVeEzuUnixcZZZV7Da7tACw",
  "key26": "65iM1PsEmg7wt2FZT8rnL3GGTy24ghxhYFa1Kj12svJVrw8kVvw9S7nhYBzNAxYFMgYS3GsWNGkuXAWKMXv8jEFk"
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

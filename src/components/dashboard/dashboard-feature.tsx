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
    "soUXcG49aWgh95pAhj4A178w6gPRLNz8P8EnTXayPaF5VoDHezzZ4uAZyJYg5UDRPLKZgdLjZBoRhGkmioqAihr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTUBY6dXXDqFaeTvYLC15JsYPy5RPKF14GazyeS3YWwpg1ZWh1hNSor8Uwkx768hZgMn6SX47QrXCTHa41CsvaC",
  "key1": "62Bc3ppaCn6uvXVVsQeVd9CHVGVH6sP3RViBfJb4yUHKHb8N8Wys85QYRwX6C3W2yJCcuE9k6eY3hTvYDwNCrWkF",
  "key2": "JoGbWnYStGU1YcpGSVvst8MVh6iXvAdLVhGrREMay2uGrKMof4HaMT3tpTqUd3drfNtWf9xR3wb7RJd4MVfmdyi",
  "key3": "5JUXFsDtebNVgCbjr7MjmVsconC77BNoDtDqLVAiqZSU8YJQY1SvJKH9MD79UkfKXRQEjsbo4iHZthe1pT5hewW7",
  "key4": "52CCNE2zRuibaqeZqHmQUBcngkaKAysH55xXcP38GZFvLQg5kL7BRDBcm8J3R4Ksi15KftSJsvQyY1ZRgtF1FUqz",
  "key5": "3PMXvZYDBSzQ9JKhzktrxf6CSfnDm8Pw2PPD2txxLM4oq9pJ3rRkDRjgNPP7BJsqC9H5tMukSY996nqt2f9xhbhM",
  "key6": "66MY2HzVFBfNv6CdL2ScqDTqhdcPTrs5H4zyvvfyZNjSoYMjz1qTfggECvw4V7LWLwb3z4m2vbRQFn2Mv8JTrwEp",
  "key7": "r7pth89w9bnTSaT2UEUfHWTeQnNGam1yuiSHfo4oyHy9hsTTSNtJbmR55voN25YpSZVkoJ7HNEeSqhfo4V6hMCq",
  "key8": "29XMFagUrJ8F7GWaDJuQLqWXUFKMa8wQnWEbSnuepkTDaxYwxqbBw3qQRD7f6ysEd1Tqx3mLXBJt3yVJ1wC7BegU",
  "key9": "2mf7jHDX5H8HiPKxb3BupzRnSpxDmYgbtt35NYvpL6d5Dxe3TkoQHhTv2oUbGgURkRrqRn5bLPjsuZ6nxWAabkxq",
  "key10": "2KoX9jctX2rWu93o28HPAUx2GpWAJUSsdkrenSWze1yDmtXW8KyVxSJvhmWoog4r6UwmKobpqCyKoojHX98prXb3",
  "key11": "2QMDCkTiGb3powMHUdpzRPDdJ7gYgGt9aSH1n2Xeicq8dE1Ug1LKfz7W87ptsfbcYyGkjxgzvESoH6VjFscc9Zth",
  "key12": "2tcY4SisxDKCNXqvo8ZGfGdSwVUTscyAD5e8dNs9SYANk16KXR88xdXQN5bjiPjGH1NeLzNZQN7oaVhvNa2ApQdr",
  "key13": "3qmbNGQW2JL5er77se7GV7tbZURdrWZYgZE525iLcfrfj2KT4vKRYDmCtKm7BRssz7W29HDNXopKghU8XwrDWmMk",
  "key14": "4Dkzrf3G7ZQbeGdEcc2cVuVqG4EG4SrhKZwtsZvszaMS6cTX1pJY6vewGjECnGcpbj3ecrXBnx7afFM7xGf6hj4j",
  "key15": "4bCTxUMPeQmtGN2CZLfQFZoiMShsbB12rizduVhBZd4zQAqC4qkpYMCpNLutiyXf4YAuvwMXjjPGa1PmiM4xQJ87",
  "key16": "3k9FWyubUQHrfFzNnLvZruqMkKFPtzAjwEVdMqSUZtKp6D9GiYTKb12rzQgzkiRaPVopMz2jUEF8TS9obmWQQr4Q",
  "key17": "53R897hpXyFftoaWUHzs6KXMQhMDe8erw1sjm5fBN7JsPANxdozhfVcqVc6oQJzFUHeoYeo81we8DB1dGAgRgbSo",
  "key18": "4uUYYYDLQa2ik4ttvpHNZqDR93eWUdZWMXgWzVzC2cX3HNGt1u5WrFUk24kdvmqSEfX8FQaxExMnfsFn68tdq4gb",
  "key19": "3pwEFvxRTuMyYgjFhvnM6LrQ5bpQK16M3SCKpRsaTUGc15AwoFN3C5QEd8aMBstm4ZVpGFAER4i7DyLpQgeN7AoG",
  "key20": "24nvhxvehqarm5NkK8T3mfHiMRWL3RTRk6MqtBoWS95CkHLsEbbQeFVVTDumq8QxbHNJ4yJytkzTparTuG5NTFaW",
  "key21": "56A3nyHPZdTqx48PYBf42uBQhuQWJWfbGGcvQtffhHiyeKp1ofPnvMrqnCe6DRfXKRDXRpe39DgkEA851JfnB8iL",
  "key22": "4PUohPeWFsYt4Bw7XT4G7ZFDdTn7KEiuKVSZAdiztpzne58SEY2Wka8kRevFGRVqDN4AcUGS9yBVTuBe7ZVvkJzW",
  "key23": "SnbjdJ7tVUkSvwxGGPA4PeCdTxQrwcwpij56k4Ay9gAr2HKGFV2fC4KW38nsQzMqqG1XWmcssVokuL42L6FPS9i",
  "key24": "4gxhThavHix9CLqgnXq6roSdF9DcJo9XDtUN8A4ZnKyCzCAGpHJdBcsCUUpeNqDtFDa6MDzkcnwoFLrMxRx36Dz7",
  "key25": "28pgnyQmxW1tZycaZay6tuiumDDaPajrTsTcJhQWhEjWqJ6pBp6kX5YhVwm75Bu2aBRNXVaqM7FaDgcRpAEcqUZv",
  "key26": "664NfJsMX575hA2Hdc3S4LqJRn62Uke1CtcjjRM6YxbCSSNrF7sEWw4g1ZZ8AXAJ9zSQxzUg9S6TwuzyBWGjyi69",
  "key27": "72xcCu9PwsevpZG9gbEUhAR96VjUhzGRHCsiFZbzC1EekYXXjGQ26MPDnZ4Xn3tUqGwn8TxfUyNZjJm4SkHxcNa",
  "key28": "NBRB1bp2YvQ7C75svZoz6ngNB6WiuK4Y2RLHavsYxrnRujT8YsEHpAEfsM6w8jRy2BH1EtjjrTuScXjrWFVodJH",
  "key29": "3mYTmqSAe5YAqNdA9Wb6ptaDjCjMSdeeTQchu6oFzmhqV61kCeuz5eLn75To14yUwc8e3pxTgvL8SN9WrkXrJ5Db",
  "key30": "5A7HhcXukx5vpdeRkgxUik4kt1mKoK8rCPv8e76xVd25XL8twk9LrirsJya6euttPgrrkm7HJRZgTXWrd7qy4BC6",
  "key31": "5MCwkfL3kMCE7P9xvm2WoVjDjzi1Cg2bbq5hYfBucPVYBQjdnXAdzuiGrrjJayt23G4uaWtnaKWgqpBPGrXXFY1L",
  "key32": "49PHPcgcZihhKzoXUfvPdfdpyKBFsnrGQYRRCjPX5NMpMLnL9nKuwAv5Nosk98ttHBfQ2zRAZHTDxTYAsAKXQViR",
  "key33": "1678uy4W1qwLfUHBSUW4bSDPDncvRFyc3ain8mb4sUiZwx9j3PwUtdGDcbFU7nZDmKM5Ro39gbLwPURygVoeS6D",
  "key34": "2mqF2h6zj32jtmPmGEQgNad5hR34VegoFJcoCvSvhP84PcooHhMs985S1m1dgQUVaRKNKw1xRYTBYA9xSd4Aj2ba",
  "key35": "2EKa33xbxd21tSK95JNBinkFHcHL49NsBz3Fd7WGP9YPkHveebappVXJgfXjEczLCWqBgTkydWrQy5bnudaGvcyW",
  "key36": "4NApbDnF1gHH1NzhAsSu4QHZKotqVF8G8if3US6S24fGR4kgnUxHGHsnqmFgDHNeosKUqfWEiv3U6PNZLkwTpiKH"
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

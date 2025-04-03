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
    "2yHHyZ4wC6irQgweKjKV5s4kbHQ6fVjQVW1ygZHe5BZyvEJ2XbgRyP45WuE1tnb7JbHAdTmtQAUYgzwcCDx7yuWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rh4WZpzbkKDFrBigXCAzTcE7mT4o7qdBFdLCUsZdtrwqpfhnCdLE67kgKB3MdEBwedanL6v3Dv6vDXt5SpadTbJ",
  "key1": "3b5aKD211qRgaLy414MfbEKRW9fsBCGNCcbjP99NzWauk7oZrWSEMApbBkzFMkWPrPkmYAnhcDWdHA3iYeXMGRVk",
  "key2": "eyrKYQaY5dKq3Z68B2wwYTEsjHTghXfxhBfNtQZpDNxYSe1fS6L6g5yoMPtb7CimjRE5EKXk3Bzb4VQkGX9EzhR",
  "key3": "3hjrroDJeCZygKw1mmk7gCPiqkUDgm4KRFvNeR8GEzgKvteWcCsvqifXnqK5fjX3VJqrGWGCcsLoyKk11b1Ger1D",
  "key4": "4RbUwpE6umChBQ1Pf9N1PpoH8D9XdPCtBTwUJJP3di8wtFb9ZWPiMJzcs7GY965XZ7Q6P8p4a39oJbhBvCDWADbG",
  "key5": "599YtvdrFosGWu7nvCTzGdpFsmezeb4jMHzD1SpZqR5Zz2Tvv87Q1s95GFtBZeFvCzm2dWUP2Tr6yhz27Jbw6rzN",
  "key6": "2m1VG4WJf9P5VRhxje1nhgDR6AgwBAUpZAvu1yrUfmkqAANavnn7TcdjPpcGCWN8gPkwsAdKzqWrMjWNGqW2EeCe",
  "key7": "vwgRmhYFWzoK9auDdfpKc9nQrbSNs4ZyRabWHJb8gwhUyc9vHqudZLEB3Fq3PrxTDT4uLtP2vYBZEGxeNmT6qG1",
  "key8": "61m3yvynSbjiGE6d9zS4wsyFppHias2pMGWroTVGmxyon8wb55zsJ1Kg5PaF4zeZxRekSSpxjWXFMui6BkbrhN5F",
  "key9": "3C9HqPzGJM5S6z8YjDqYAz9cTB6LQqwe5rAHUBiFM1DJPtUk4CksFZvaV5TcW5y539w2bu5ku7h4TpqYNzFP6paK",
  "key10": "51U3hW7Te7yLanoPdcNx7gj7tQUUcQKByTYcZS3U7JVo5HtHfVUAwTaQra2yTe99p35gXYtUYnQKLXzgUeF8wRmc",
  "key11": "3hDjtSBfYgsdVzi46ARL7QGY1SswejS1f6AvhyLv5vR4jTYYpFrbPHALmevp5ixbFoAx4Z5v96y59b5z4Y7w9T9S",
  "key12": "CG5qraXHn5jGDeFdvLHGtcrobPmRsko3rz3iGHsmLqWtFrWJaHvzAU64y3Q1gQxzL1SbUxWTdEhk3LbEGhk7ZZN",
  "key13": "2MHipiKdCCjwGWBT45ZFxn4JwoEcyYmcJdaFcpriGxp7VsYChiksvk2mEvAVozNM1mfgJoRMe3KQHFxkYqTZSbQN",
  "key14": "fNvrbkDPM8XBtAP8UH6kzMuFQcFJMhMcQ7szz7B4vnKZcp3yL6a4NtZk3pKQX3HrzasLztYk5u38EQTnjmjnqsS",
  "key15": "56MXdRbg7PPomSbyuDRQXqE7kHA7WPaAWp2QxAEgLxmXr9pzpcvEdFXng4XeqfZNjN8YzxGjxC71RVLU78Aw9K54",
  "key16": "5mXmdoX4MnPphc8wceiPyXELQjQWdEznqLrmpLgfK9sT4u7xPXoJ3KfCCMQt11uiqgCYrePqnXyyamAt9Y91r6Gi",
  "key17": "fjmMx8kj8Vs52wnTPAyEqveF6eJbge6GEeWnrzLAqvAReyFMQVqg7SFryx1Vqfoo6SkbsxB6QjvnqCkMeHKsdkL",
  "key18": "MsKXNJfNRQd6tMwa2k5eNkobW98tHi87fd76JNN8ZiHsd3ESsKMXkuAzdwCyNC2xJRo4Ti53N2VXcM4aQvjMkLJ",
  "key19": "2xWuS8cFqvB7LryDCc6MFwxSJpc6d2WqTEVmLYRioJHGnSFUxtk44G1derWNzdvjGna1GxCY3WmYUPPgddTEtN6e",
  "key20": "3GbXxAmKtGNqFDS33xvjMAyo8iBR5X58HYZcS8V3XsSUodQLhMgdE8cAYsMRWe2xXfUubVDzBFrDkf3jyGAijkBN",
  "key21": "Xq9uwtgCM2jiDL3u2a7m157UzHBD55YJLdVt9wxipW3RoNZaZKVCHNxzwJniig2KyVt2vXu7rNxeFKyZqufKv7L",
  "key22": "2pFEE8Fat5X9nyjxZfVBaLGyHHikzADQv4Ti2pMCKdp1FV1kYA5omdyu4xHJFDkJ6BKgdPSybrXPraCineg5Mdkv",
  "key23": "tm6yPiwbTkjFdS95VYpgt9yDzkTgSHUhoGWQZVfNwLwq41PDhptVW2jcsFGikNKtw6GiXVhGU5wgUDnmzTc5D4n",
  "key24": "3QQd62pXFycciJcwbPTDqXNCc3cGiDEWsWkegBkmyYjCcEC6fNmvDe9bkY9RWUhXXGTKThv5B39wK2VDykY3H6X2",
  "key25": "2d4AzhNNuAa8nREvjEbPcS3CtKaoHQC3dS9eQovU2cJTQzyyF6cxQ1t9XZtvSyDZngTgizmktP9rZcVh6JQ3kQvP",
  "key26": "5t6pg7a2xvLeWKwuQfsVZj3AqPj6RmsMoxEZVUxuh6bRRqD7GaSrW2G6zoEMB86n157H2XAXduT2Twy7GHW3pgLU",
  "key27": "3VUEshxbL7mwxuYcKYeNjhopYfTPdNuyYNhDedrSvmRu3k2nAP42mfzbENWQGvaWq3hhiZ8jtkxBPjCZugiiGDKr"
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

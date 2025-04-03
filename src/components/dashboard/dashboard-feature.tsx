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
    "21eDQpedvaYBCxpptoHiBqBcdLG2PgwEMXzegewgxrJQKrtJTYohfE5r96c1NCPFzp2fbjRZRRCGswXapWez6Ggp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rpM6K9kxoRsLcBK1BD6KFEmZxPtDqvzuBCVdYmcEWPCktj6RQ8pdxh5NUBHSCapkKsSJ2cf1APMDoFJWt16HUv4",
  "key1": "31uDQ7zoWofvcnAvGvFLfcaCNhoUXfHkobTDUT7ZwconLCaZvFiTL5BXujcrGc85gKUuwE6V6RE7ZVZMCgZHMNwW",
  "key2": "4iEBBKacDgPxV5b6mjbmL4kx9TJsivoypV1MfXPAn5TcaeEw4fRVcbEa3d5KqXCuowbMeg7i6xrD8QRo6J254ZZe",
  "key3": "5mFR2UL2TuP5MveuokGKJyn4KaiLUtNPxidGWnAEPoAAA6syXuGwdZaCnfrCxVe1qKKCidNdDiU23nVubwURXMqt",
  "key4": "5NPLoiBghJfwJyKwbiKKnLzKTXZbjb8YEo5b8ZdRAfqXgHWovZkncnKmxF6yN8GT7sE7WLHMCmdrQeDH4hPg9Asw",
  "key5": "2u3ZFHcT7rFn8wRskh7WXisUo12PfNWdoi1A99NYEejUbvM91hSZvJhYf5iKtvveMoqBoWRF3sgGBezopaKZFQyH",
  "key6": "3G7smJEMnJy1mnGyZmbFkRu6JC6HPGcFjAaqdRhibo7uY57ctavHXVwX5ZjCw8jVS94CavtL85XzrHmhXEG8kKH5",
  "key7": "3fgC6ZZKwuc5LuGUhujcFMg8xaWKYD826J3UfnWbHKCvoK1dnyLjAJMR1XJhgNA2SjTya84FG2qDpKr4jAhcjKP1",
  "key8": "3zRVEhuYdnyTeLgaUHDowDEvaFiM31Np6vEQX6nvR8EByksQ8Tb66othUp2yGwF3pqg6m3nHCcGQNRCPcWeXi8yy",
  "key9": "3ggEGzdGHiGDhybu6rs627uM1Ft3TADXCaTqzfxfMSvZiFgBzSZANQh344FdBo6YwG5ccbQV8kuobJF7KXb9AaPy",
  "key10": "4rkWNbmP2xMhEsJXo4MRXNZj9K4gUpMva16uuwEvkGzUsaJk2hzSD4CW5KhYhJwYQmMZL9aUKEmevmhBfQhEeJR",
  "key11": "5NeQGr1AaDGdg2J4Cqa1jYWRoAkhqZnSJm4jeiyjSN6C71BS64Gfdhfn52X489UzoSu57fzznFTUatt9yvvgCo8A",
  "key12": "2JaJVkFeX3EfN4mXD15PEzM11mhfVaS8PmWgnJwmar8ottximsjRAcAFjTKyeZ47FVkQoZ6PVt9i9tZYjKTsopZG",
  "key13": "4vFMKnLfG93HZkTeU9RqwrHARy596kLc1AHLxkdTtEP9yTsCy1N4jU3ch4c8GMZz6ptezXi13hREJMoY8Tjkumi2",
  "key14": "44TLtasUALUi5dySbGQgPtQMxQzcGvB1iJ4fwpGjNJMwLZZL7kBSWfZZstDtR2Ghif2P6wajjhP99d9Dk5bMnmHD",
  "key15": "4HmUvt3B3JUX4zSFBr4nVLxwqaNKvLHFViFfvNFtV8VRp9xpkEVApbyZVnXnNp6zJgNdajn1jAyrYjWSNb9ne3X2",
  "key16": "5yyd3pcu4yNc1CYu6SkmY14p2YP7FjwiMi5H1hm6UbX6uAVUDUXRcMtDx9eJx5eBo9QH8xonPj9FeP9osYE1hqpC",
  "key17": "iUrUSpZymuBjysUd8dgbhpJwvWeF1uyXU6ULp2fcSKri8tteGDN9S49XNU8TmY5VJ6EebZr7m4MujgRzXkm2hrx",
  "key18": "2SpVTeUVrFuL6qjeMqTZGgejUG8My4EbGQZGMBC6a1YVyC2zqGW9gWcovGHqeYYCG12K5xCHYLx5WSaNiYzzPSh6",
  "key19": "241x76mdrfbVnihUzHX7SbUyzPAEZs3w7dk8WA2Ed2PtEqsALAPQQbHpEAFXxXNsaocCEHaZJgNdYQwUdgH8L3Nc",
  "key20": "3WfN8HkWFXU8y9NUB4kDXUWQ1wWXaDz97zAGQK91fsrc6DrWhGVJyAMF614NazjJmuSaxs28aVp52AFTryBsW8zi",
  "key21": "4hPEtSVfe1s3hchUtySkHFrTCznUjgG85jKX6jkSN537SuLbRHWyvt3Wi5ZcMuq4De1bSd4SC1Fcg9aLXpAko1q6",
  "key22": "5aFSEC1rTtXd7uzd6Mdvj84SetSj9qKmjEACNDMg26d9ETKhEBgbBTomKJtK5dsdc7J2NxA94yVWMrhpvdKsE6Vf",
  "key23": "2HnXvAHPuktGq215qyKk23TZk9mHoejaxnx9wBQt92RPQL8ieqgk79P3vwAhxSAFfseYAvjR1wkZwWr1sXHiE1eY",
  "key24": "3JM3DNnymyNqMQEDoALcd4cCAuTHMPyv1ksA1qn2bm4Pn3VuTq3mYzNvxE3WTzZGY1rgu6Zr3jdQku8rsqSRoabC",
  "key25": "31Gnqjj3HdFsVkd2XV1Dt1LGfEJsBgmHMpbt7usHa6vQXacMWGL3FcTw3MnsS4wg6hhEzfs9dqo8ar4vMHu9L7SN",
  "key26": "3KZdUjMuL9ZXXypoxi7gB7QQF7h7iVv1LkTSq6Ge9ygnspjGitatiCiULzqMBqYvbhwuQZK27CawonZQKQhP1dUN",
  "key27": "7ftRML5vxodnwxQjiu76FbMbYxMj9mBc4fVN4YDko2QrrFDfiJT5w4SzGaiRZU5ftxMpTHiznMeDPpyMJYcMSV2",
  "key28": "2YLmKe8okfWZBmMcZZ3EPQF5GxCMVPkJFry5iivvB7e491i7UtUHzQa6K5rCPREH9Nz1i19p5HUvfEfTbZdLVsYJ",
  "key29": "SVVZdzpXgWth7qkboPc89HppYSHNGGugKds9nx1LACXS4W13ta5yqdqMTDDe8BAZ5Bbu86GKqXVMWW7Kp9gmC47",
  "key30": "4gpiqMRmtsmT38ij35JuzyPZ7Gp4Fxj7Y4s1w3nxFBePmeu19xU7xg76f3qRn9wxckuZzAufBs698rPDtxMgJXcg",
  "key31": "5QSXViKfVyCdp73iSmNswrHjkKqryF4nJPFVb8XRRv3JjHA2tiaCM7BZP6gr2STvCRJwAQZmRNf19FzawrGdzDza",
  "key32": "4NBQ5eb4FZ8JPLDmmRsABh9FD1nAbDJkr6EBzfeHCQQ2uzwbKMkqQMpfSY8w9vyvYF7yrPZ6kd1R6ZgyciNAwnbH",
  "key33": "3q3eHRFp6x2UiRSx1rsXQNDzSedDRPFwfkXnXGfGRCEcBb89eh4cpo5zTceU58avWMxpR7WGsHLehtbGoRCGy1oj",
  "key34": "2vrFWpsuPeBzSeKrt2NS82G1cBsLqGzeUKp373h2hvYL9qRuroBCZ67ZH56RSEmSUu3B6TciRCayRGqMP5RQ7jP9",
  "key35": "2uoKkfowxL95jTAny3DbvqCjW9XRBGWYixwAcrriL7r9reLpdBistcTK2bGH5HNAhWPsQTy2y4FaWKtUFy8Ks3Md",
  "key36": "3iXQdufrpJioBK2qtcXo5foqDJnaZG5pZXVRogQQdNqvVqh47T4vUka8dRhtVnq6nFiVnHUt48eKSUvkShEjy8Uz",
  "key37": "5E2FaqBPnMw2D9tUvhpjmf1mqSi1bcEFzDni1UKeqHX3nJuXWPAQAJ7aQkApDnNtp3VGKWWzmCjszaQLZQkFAeak",
  "key38": "5kMrshRZXxxjuM9ge5ZAo6qF7GFgfnNFui2paMswveyVFkL1N8J9XYX9Wzt4QCdrPpSJh4JNuUt6Gb9DyTHx5Qza",
  "key39": "42rEiRDR7o3Z2sCE8xwVrYnQGJaYQnjf6F1zSGiyHC7oNSpexmNYrx8HBj8oBDLVNyEh95DkT1ymC5zBPuz4FsS6",
  "key40": "55cf31FPZAsWMLYFDUWHk9uCJyf6tG1kANijXJnPZCTZya4QUisGkrFNSA4heVPuurNcHGrMDMbRGgqjgWhabvLf",
  "key41": "2yTj9d41Li7FzCFPhsKURHz6tJ3kZasXiiNeimiPgANYFwdHHEVsmQYvNvZxGoxQyrPocZraRyZ5jbubytHKpuDT",
  "key42": "46m7Mv82XqABB6HuUZBPJPC6ifuUSeqyLpZ2uVQozGkxnXAFTaGCr1Fnxv59CdG1JwQAdutuyg64gX9DDfMZGyMn"
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

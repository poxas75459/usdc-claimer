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
    "22jT5we4tGFNY5FyTWBcCH8hiHPJw3uXZmdvZKC5ByaCeJtUBmKVZVJDqF49hvMg6it5DrzXQRY27sv9zdsrfgYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hy6vbhgLePaTpc6XV3sJZT5ak3EzNpdJQVFu9fRyPSUZw3hBrJLpsWY1HRn9pyGJpJH7mtzTnvdW3AmM9JsoFtb",
  "key1": "4xhk5QhFTAuGDdAQaPFRqBGZec6n1ogXG35xp6ppkWYz4Jb3kBgYxzLtc9sNtPmozimoybJPAYtyeCd87cgEm9U",
  "key2": "2E67HPfZz9Vx9YXEvMy9dcYPgu643GPea9biHJKnR124hCoYwR3Q2DD5SqadQ9UpKYbuadfcxVeutheZJnvpCh14",
  "key3": "JJKwqQ5DRZAfun1yXe3j4NQmShDnZop1s6LHR3iJZMFT6bDhkTNrjwp6t8KM2RxQzZKYFk3dorvkGC49neK7czj",
  "key4": "3Qfq7vMzcMH8bijTibYQSumDZdD7tRU2Xy3GcrtZRAmCbT1qxbPoZr113E2ZbqBoLJKAiscSwji8RzfUDTWXMguB",
  "key5": "2vGocwAAw2yKhVx2PYnZggYrscphfJLrCYoCkDVx7E9omZHKQtENkmHszr9gfG76efRCq4LQBENwst7y8AdTwYeh",
  "key6": "BLHRudNee6tGwz14PhbRwPNAE2wVeGpcPb5HaJtZdXRypvergdQCscppyK3qZqVQaHLbHnFU66VsrH6Seg8hrT7",
  "key7": "5YTGHox9hceimN3CMHnbmirn1sbixLYRi4bdgGDteP6N8bAMNrtLKiDi9zXjwHq6spYvvwZxvFAkvCBESXYiDiZ7",
  "key8": "4LFT6rFowirGU3e6eu6t88zVpydiMvprZ5oTjGqTMbK8VzXoxSPnrkijTKQyvKiz7oPcN6Cn6Q6EDoauAvQQ9xSE",
  "key9": "4FqxFKqWSBPqwaW15DRTAVewasTDq9zhxhMn2hrG1tWhFkvzJKPXPfeNWG7f4VDyKvMD2159mJBJj3u2eaGSszqJ",
  "key10": "2Hu2mBbx6XGqtyE8ugNpgrS4sDPtuhtRHgPrMx14PZuYvN7xgEVcJJhTc7R5qaaQX2j9xSFEpsMFEJZDQU1mtfgZ",
  "key11": "3sHSznDQ5dws4twg1YVDoUd1RNVvRC1P1GZeJcgTYnkLih6wBYmw6g5ED7Nwbo9JQp4PyKCrn9vytdnFcUrNvjkP",
  "key12": "5ShvXYaoAUZsyiN5pujV7XdxYGw6VPx1gfVGbrnDYK1MfDhijtoRqRwCJdLSbeZmsivR7ev1NFP2jy74B1d7W7Am",
  "key13": "5CVrcbkoFAUgdY1W2pGYsMJe9eeftcHh9xsabjLfUAp529fm28NcENhGMcbH1rvzdf92H3L7ebMF8fMxQht2CYBo",
  "key14": "5yBf1SqzaxPn1xkQNToiE4bPCaB9kmgWePNqvTPmBLd5yWm5TauD6zoQ8WEVgXbAnb9c7rNPNS5MdWLNdkCx8cFH",
  "key15": "3aKKnGqQ4tcTxdHqL8M5vmnGJbzhqCKgFmeVThrzodYik7D2ySJoPJKJHVEnVAgV5WFQYipqzhUAqzy12zWhpbWH",
  "key16": "31uPmfv9tPv6tkXUuWd9KZCwhaA9z44JgXCyCMoX3V9rkSh8JsRoBMpX5FisuXjmXgePaTp325VYuXULMwntvXkk",
  "key17": "2GgkPYkvHiJ555axmQNCiyaB8pbWVUk9Gp8TAqLaTKEkGASDK8uVkuzyYr44j72TJmd9nNZWDL1tn4m2x7siNrec",
  "key18": "igCmWnMdt91EdTan2TC3RfRB23bVcKEkSAWKuxGNJDnXz21B1qKdgpY2QAL9rTQCuC3xK1v5frx9YMXLmMBb65W",
  "key19": "64iMFazKBbNMUPD7T9oSP74wY6R3eC4wmendFdvRh8ZmyVLKxeUHdaG7wbzFVAyGkr2b5MJpJExHfh75fGBjAvsP",
  "key20": "2qrcZMTguT377gGHNTdFxW49VEoVryYMqeythBd5j6gu7no2pvCeVL91Z2SGrj9R4C5PZbjFjb46V5qqaTXcRwFr",
  "key21": "5fgK447K1C3jQLHDi4ix2TWE9skfMbf8ub9SgKLF4TLMeLVMvpiUX6DZukWZgbMLzCtaPP6V4EiFoy9HvKCeWKWH",
  "key22": "58FuRhAQQKWZ6Pdyv1ryD7UGMAugMXkFqVAe3NydgZ9e9TH17WRiScWN7nPRRA6HFR2nVzhT9HZTeQe6ejD7YjSe",
  "key23": "22xzyzX33e5GSrnJjzaNPuMHuUmrLCh7jPdcrTdAoCobq1DW8TvZa3DfdKB1kx6tRzHRfNH7HtTPpGn35H6f5Qvx",
  "key24": "5BrVZS8DH5vxsumZpBJNXNCRz4vXzqmnLftbshyAbRxByVX3x5QzC5Yh8AWhG31q6ve61atZcQYVgfqQHLAfwGXV",
  "key25": "3CbXCXfXGhM634GAjrPFX5syVTLDt55C5eG3FNG1sNXjL5AiHygRBTzHPsnjicFoASjyA2Rr8t2rstAmopiiM1Xf",
  "key26": "3uWZKAqX3qXDqEZcHVyhAPRfAmd5mUNdoFSLXAr66wnEZRRgyzkFFE6HywpUbS9LSVnkTm3iL25w3MKX2cyBpZg",
  "key27": "3spPgo6YqbennPrgLXjNFYG9VC8V9ikAehrMohiDoLbpeNojnGjGCm9EQUm1Hq53fz7fYoyDe5ULbJ2xtKauSKb3",
  "key28": "2vKCarXrUbdSMndsHHKjmJWwYM6Egfy6AeRCMto9hENUC42gFMMHphRAjHt5ErhNfUdYPZBi7gYkTUomx3hVbQNb",
  "key29": "2J1628hXhrrnvtGad1jMh9aMbuaevWFoasKPfpC16NyFZqrq3aBoqiPJYwecNDJ13JWzNN2FCGDPQvQJfwrLJBk3",
  "key30": "yotLXuNa4WNM7DZ1nNULyBA2pea5qURKbMRGLNRjcFb6vXV7oK7R5fkV3x66n1w59j91Ve2LqBsn58w3uKKnmbM",
  "key31": "3k7gpBXLmfEm8UGNQJ4mtUT22kzMKQBX3RE1nqmmUwTXEyTGXNm7CoZKptp1aqrps8oCeRLHfNsJTegsjMmJAUxt",
  "key32": "58fHRL5pnwP5UB731s8yHUq4YHQUfurNnnSpD6BWzePnJvkqWhQqSWDyx6UGDPzKR6Poy3W19wfCunoLjpCBMQNh",
  "key33": "5rD8poACYZRk6BZaWqKhEo96jvCf1DSLAuWBfd5zStBGKsMUyr53ktpEaAgWxpeizrgDhyiZMPgZrX7iU5oekWbj",
  "key34": "3fu6WkUejyo989NWEXijyiqxg1i5HSk1fd2WHa3F1rd7Q1HgjAorr2AkuQ6CHbE85ywEsUh56egDdgWzWWWnLoNC",
  "key35": "3ynyWGnCXtkX4UhKP1csN1VFmdF2hRBB9Kixhpavk2VpVzbv4yDWsza9pBWUz2hKqppfLMxAsCfnJFE2dHfZtkpP",
  "key36": "4ZdupS37jYJ9KLEw7tn2gRfKMJxErdwe1WFrr9MFBFXxeb9rnJmCM8jgJRJABBwTi7Q8UMn6K1BdyA35DT5yfynV",
  "key37": "3abMrX4Qpf3y1RxEUBWw5gX1Kn6nTkaXS1bmVhQbYqrrfM6H8dMbjAf8nKpXKs1U8918xmtnxnqNt73tf2UGbVMg",
  "key38": "4Q42XpgE65SwGYbnbmEFs8JMr49Qsy22P8iVP14dk9QhTNziJVC4gy26XaaDiW1Z1A2rGxY6nn6Dc5U6ZyPbMVuz",
  "key39": "41iVtD9pBk1HBUaKhrjY7vwiq4DqjSRbkRcLokkVw9LULWxGa9UDgHei68PtHe6bWZ2VLGQGa73GMVYQ6r4hueyJ",
  "key40": "3A9hPExxYBcCorZwAwCrfNaiDd3ed7cvuw2wmd9DL9HmK3C64GSuDbBJQW3DFMd1gL5FjRVNn9D8zZbbnLBAVpyW",
  "key41": "4b1VeouRCRvHfM9tv5PBEB6C1jHRkEiXdhYH9w1odsikYhzGpkY2nx1GUYW8oycqssTGSKtmMCMMKEr2DbBHWfBh",
  "key42": "55YVT4TNpx6L1iAna6ajbqoX7aoZDkCp1DQKBpLGicYzJ23wgSxHZ6svKA5kCAXq5xzBwdkWb67CxCZuoE6xKGJu"
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

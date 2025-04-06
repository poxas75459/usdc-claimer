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
    "5ta9jGUHz5XHf22jTxwrXWiUeER9oNE18CNjEpqnRuBqo2atYZLwbwSoBbAwS8NkyEQX1KWjt6fjSPv8GsQ6ZaPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2HukQ1f2L2LBXezsAd4FdGMdMyKW1nE5jEaciqQCwhBE9wJJjwQyt67yhT9XiJZGFeKPbppjuSY92MuKqWHshf",
  "key1": "4PqHXzA9naJBFLYhCu4A5VCmdw74giN8SA19K42Tt3f6cRBvp3CFXQpJ84HRgHKzNVXqkZw5uVCMZLze6cUwAbvq",
  "key2": "2PYsZ1AMDrd4nCdd2NooR7MKUceQPw67qWxfi3Kpwz3NzzmDz4M45mvQJh28wdDiygNCum13jUc6EvW2R9kG15cX",
  "key3": "RKgyPuoUw8o1MszH1DgouxRjscPGtEWPwV7sUphLp4fC1kZppFaATDzwa94ytdcjJR1DKc9QW1478z6dQBYEaNE",
  "key4": "2g42zN1RTY7vhKMjDxh2vzrDqKEKY4U6w7bmyjdiVvWcD64dy3L7kRMSBgPyGWVx25HsgSFbqpXmujEBcNj6xyQ5",
  "key5": "4i919rHbu7cKcKyWWdmjUKf71zVCKjSFW2oLfcjifr6kxirSyhLncyuh5M12QpQgmfT91Fi567MKv5ph2RLL2EfH",
  "key6": "2midCSkKENDUMZkMWjEXdT7AfiVBFaqHgn1vUR26X8zPfVad1onE8CbU9sxpfxTN4LTBrYFPRRDMbTTdH1Dc9T5j",
  "key7": "oaG85XvjrPQeJLtJq4VugZiBhTn6iRizo5gamG6LBuGGcnWAqYqoEmKb2wstdjzUF3tkJfvgVzYkZH3eq27mnv3",
  "key8": "XDnvsqqfneyRCQgf7959jeNYoPD41cLfQCPsH4SQCvQv163zRQBFKSrJqcm7Y52jdwaYcs9X1BzGk3sFxFqoHoZ",
  "key9": "374HZhpFvJHYNzU5atDTnodLDqVFJcAx3YNzgdyjrrkp93ZuLzhMZ7Mhx8km3xFi9HSZZcbpoEzE6aBHmmBrQ8rz",
  "key10": "kWUSr6L9SXihssv41QU6SfJRggVsm8U1RSQrXYe1nTP7vER1BEybxWXwHMPPtv3KjUPDheFBeHTxBCaWrSSJVip",
  "key11": "2nQcAZwomgbVgBXmvxZ53s66gHr8WTjT47zeTq747XgySyijWaJbVNG7N2p9K878HvC3jNokbaAVnvkPesPw7njF",
  "key12": "WqkNQpvFQtTCkN7za6sZzKX38bXKxHjjGUpdzePwDctPyDwucACWdQsUzQMizzmRRY5dWBHdXMYBTadkDmgKTbs",
  "key13": "4yuL4JBYNWddi5SRAzXoaTt6eVVEa4X1F8ueUPovsPFfR23gZMN2AzCenkU4NSojGGo1nuEcZHQ6dM4yJ1ZjWRQp",
  "key14": "2tSDTCu5p9hVRusn38qP4xwsTBoRYtLtGd38S9Pgc1JfajjJGQwTVkQsdAUoKL2xbR3Pu87qwTpHvj3X9a8frEcA",
  "key15": "2Bd42zqPPYcmFvnLLQeqWRACkWEUxzveFwoKTjf5ZdUrEcX9MHtLpHkr8g7zo8d5N6JRSAeNjsFAXiRkcjEGMeEB",
  "key16": "2dz1AjKqjtEvZDLrqSx5c7QtMXQ5f1RuiF8ho7G9GBANY4x6o1FtajF5dmxMudynV79Yo9aTk2gXwNGZDmQGUTiu",
  "key17": "vLGjt3KHycHF1BqgFiVrpAvYDButMpc2RKXhiwyGX8nUvZucoFZMFtdEproR6v3KfdBLNHrcFbii9G1qjJTJFB4",
  "key18": "4qSXL6eqSAgimbTc87k92911k5GE2U5gB6zRPg7C4BXwb4m6hbTK2q5ifs6YxfteAtrWC19V8G1X4KjKhZWz4tXt",
  "key19": "4JBSfKCwV1KFATrNmePD8sZQZ2JTow2gVANcGMv6VE6hVYgmWySm9ZpgNYQnncnoHbmbwKWireh8qE4Yp9me3riV",
  "key20": "2KVuyMewFRwwqTThxuAjaEbKrDpNWS8bu5UoTQAB5wzc2edkrk4VFzMPYDCM9E88NRYNU4j5KtRM49LCyBJc6QLG",
  "key21": "2tEXCXzrTF88DffzaTv6iKivEk9wyr7YNyxE6tqymfYBuBDK7tkxnd9vYEcA8HFPVrZf9THGJ9fjy7KKTgDeamKb",
  "key22": "FSqd6ppZVNp3D86fvhSMn9p2WkKVUHpD96bepjCupkRTWLuQKvVmUb4F4pFgKFqSZhy3Tui4pgRXUAVeMVk6qWR",
  "key23": "WRLLyuQdcEVGwEWiq6aRLvBAunuR5kCGPnA7VGiryPqJtNomwb3SLZ2mnB98NLqHqVY8eADS2GhK1CekuTBeog5",
  "key24": "4yJ7kVhp6Bk7ayevnrUvyBwiTipZyLvWXzMQ3HPCGEHWRSLF7SLiL4SwD1xAKDzniQR68Wi3A9hyUgzpAfhYoF3w",
  "key25": "49xHWc7b8cMYdo6eVg6aXxRKaJdcyrrCj95Mne42JMsjhH2kpTM5HRvxfxVNA81s8XGutjFD8PXUQZhUULDJ4cdt",
  "key26": "49HqNb2v4KGX6vKGQ9GYtDCxCa5oH4dmsGQ9rGE88TU7x3TKewY4fJfo8sTGPkq9H1SoHAxCn2tf35eFk3MLet8E",
  "key27": "51iyHedfHyErGdUmvzCLuLjdhE1YcuM4G9bvqiVn56HXZhXbA1nTQk9Zp9CNV9fxvkvKtq4GbBmQ7U5mhVnJaKi6",
  "key28": "5jD7CDp793Wj67d28Xp3jvkao3cFy3tnVwEstp1v8C33aYoEYWZGZW1EWLeEQJPqt7BRUKUMa8ozzwovn3UmNvhA",
  "key29": "63gqDPdWdRGz1pCNes3kzPyFJCoJ97uSPRLcMQNF7s6Sc1zX1WovKUMMuQ78APcFpQEB5zBNRP5GRK2QCTcW84DY",
  "key30": "51kC2sYmBWuYD4w5CQmxrVSgSLzmWRBtA3RegW69hpepinaYWZUM8ZXimor38YsLmoSK9bYQErMa5FLmXhuk1MFu",
  "key31": "K7uyWQbPyKtHyou4pxMywpjJCKm6mh5BCSAMwkDbCTpY5KNy9BmqY7R3hqMjnUCVSxx41tChMhpMjw323eompn3",
  "key32": "4wBVs534KNxBS5JxtcWTAz47HVi5nWoz5WDXM4n9UCyKj13D4FfGL949BKhWceed2Xq3MhPeGDUt1oRt3wR31RYu",
  "key33": "4VvBGfPjUSWZE2NDkf8hBHFBph53YZSYURkXDVV3Zm2BqJTDLAeEHL33aofTAJHt9EKLQad4sYvSNqczEhdrKSBJ",
  "key34": "2amRiB1bnW4ZqHg9ZLouKUViP6mXhazhsVD5HHaxdEmo4Pj4XtscZynf7USbrVZDsb1fVc9kMCe6u3wEcaEFb23Q",
  "key35": "2UKSfeBPujUx8VnRpWaEixtijVEudWdfdZjviHLbNi9ebedmvCa3sVqyXJJsF5ZepHT15LrUg1Zy54ExM1ftBgZh",
  "key36": "3hgN89t5eSZNL5SdyhvHiZjkP4eRFRzQ2P4GT8Mx5DFSHWyRkqWtU5bXxmZtLiNUZLX3v7eH21HmkhSHZBMZUKb",
  "key37": "4dSnZKFn4ZLT5VxZXTpKGXFqJQ7nQERcsqu7k1ksF17skKiLixRsavhYNR6qF1EuBsTK9Aw5BNaJof5fWTfr3rM",
  "key38": "2URWxV1hs7JjqfvDZqvPboyB3n51zQKPLaQWxR4Nyxry2gA1RX4bmkAMoMr5whFVFYn7fZtvk5oN2p1s4ESVxabT",
  "key39": "4h3VmRCZhrdNk49WuLpagQgs7ExYFvD37uKkYGpf5exZi59Q2yBhfzdS7Gvqi6M4YsiGMnmZNsBQaTYrDShvNC47",
  "key40": "3Rd4xzGqQdxj76P5EzfmeVqE1ToL3KWvR9SMT8zsNxx7GeEF1fwekFq2YqFqp23VeF6sXwtAco9GRdXz3ubkQP4V",
  "key41": "54B5Ukd3wPrMATEHiQrHHdoUAhGotyXXiLvuBMinCvLJhUT927V7dUYuNz1iXsRRjbEwo2W5yq3LjMXxMwXDZdTz",
  "key42": "PHWMfRL5RdUZ2jsQH6MZB2NhJRAgm3MzrHDVCbVFoEdYQWUjJ7bQyFGhmCjqE6AH3s87dP1m7RMx62BFHaazDq7",
  "key43": "5nnFTy6VDLGFyP8ze2HyM7VukEWBxSuH1DyNH6MMvXSt6FmVCGvcMZYfqa9pbQrcFjN9JnjG6DjbWRWgc4X7X8L9",
  "key44": "bEUP3RT1LpBCUBcSJ7P71NLF1DAuNSTj8mdEqdGokt6D4cte7W7BR5F19rc6g7mVJapn3VhgHYFrFkWirDr25D3",
  "key45": "D4kaseisPECKghytTSzvqouydz53U8g4AHtGbeizkQwbau9JuXB4TTGF7k2ShiXcJSaQwSTqNzDN6CpWHwF4rZs",
  "key46": "SCV3g2DzwNCm2wsPKCGrN7pGyHrbKo426VHn8rsbSNH4HTS6EF4mP4h8i5tCKPbBY3HMbEmTELvzeTdMZnEoWam",
  "key47": "P7o6uHMNq19TWSiCSS3SYPAJzZnRrAVT25awwiCkcY83AJ4JwMNaLwMoZdHiFbwba8b3kS7Ldtdtm4FLkfDL9TJ",
  "key48": "4g5P4j1uri9uAkLwDpa6Jgjo9u8PsDUfEb843FYTF98dk65SdyNozvUzHVMfeW7i4dxJpLg3xSejSthSzFX3hpso",
  "key49": "45X4wmXr45JbN6dxG7bh7PgtmQJumbDR2EHeq2q9igdVhA1AmRF7ktpxYG7EybzWhrHxZ6Va8P18TW98HknKuhzy"
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

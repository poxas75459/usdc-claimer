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
    "4uCobLn97eGs4SHB237YhxDbpoGLJGXiNboEuaVDsijTsS8tv7cztznCc22ji5iTt4nEcCkCwBPBrbQCNt5o9dLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obF2h99revf4Ez6t3cn41y6zAYU6JxUBZaxgmQpUz5UHeQkjBF9ocb35jqMsLSvQ54yY7HpRSZjGEPQUhCMiUKk",
  "key1": "3Xp6KRu8JkMY1aXUuTMzmE6gkct5rK4SC6qJjW84C43S4o549Nxqek9Z88WELF61mwTUWa34srRnJEYdEMVtJhKy",
  "key2": "4yyxpLaA4mntCgbGeLvnQfywj3nb9YAjTzsfoSsvmyFWRyZVRnvuowyAzZMVzNfcmXUqpwfmsQWhwX4YikHfrQBq",
  "key3": "huWcrZ6ufcKGzGiWrY1Pr6RGua62Wy71kHKV75Ez4zegUXu1dFM45EkgXm8yz3FAecyMF4VimYuQ7otmGLDw2Fh",
  "key4": "3Qotn2WKGRDLtoVmtaAXx6obTupmM22MCyprYkJC4BsQ6iqLQPakahHok6m8sdq3CTP1pDvjMvcFq826kHXGLPkB",
  "key5": "3VcvjCdckMcqx4UwAteYafQPbWuxqM4eirVqUfK7ey3K4mVYQzjz1ztGyeckiAT6pYWz9ek16WVETvcxxQXqGKE7",
  "key6": "5dJXXA5irwQADcV3rNG5M3t9webk54pfAjrfgRWygy7xsZATbehvHopUfgghu78msUYXWGzQN3RA8GLcLxc7mG6J",
  "key7": "C1zm7Jh7sENeGyfaive95ysAXG3QLGRMPVAFWYcJCK6crY6ysaoDqagqkuPccMBunt1mQpK9fUBDD8UgbY4kAn3",
  "key8": "456S8hyeVNVZPUMAM394LJSRZP7mec5PT8UyU7HE7w7RyQp5YaytU2SGipxmbzgD5UurJLpSg8QfokesnCi147fK",
  "key9": "66RX3B6XTHtKJU4Xv4MARbtrCvBvFBeDkV1aB2Eh2qzcThM4xw1HSmwTNpJLuXvvYi7Jo4oXfrgYKmkZ5hQ8ymj7",
  "key10": "2mQxTg7C7pk46gQZbkzLB7msmeuuerawxzHBy7Ycz1RPXoKUhTgqJYC2Pp23ZKSPNscghkTFwxXdRU5fqWoyhabV",
  "key11": "LWSLFhLPrkUijL2Zu7kWDkKPCsTr7gGBwhkJYd6RbnmU5eibpKUDPXJ7r2SuwEtyYHYQYuVV8aUhNRAQyhjAHeY",
  "key12": "LuBDbieuoB1XjuGvTvqVDBNSsfY5pf8VkWFjS9MHBsE8rrhKRkCTjUEZJkR4HpaTuVibA3Z6nPBHfUomV5KX5Rp",
  "key13": "3qtmMG52KMKD82nh7LsVrmFZewRwBrpMHhCLQpNN6YQhucfvSUvnGciY6cuWj5KhgEynDYUf18QLBdUMJFuDRpHH",
  "key14": "4TH6Uuo6MZgrQZSNA6ouc3ki7eUxCZgRr7wv4t3h7vgJQ96jyaVtKv8kfU26cauD43ysdwnVTSu1Jckh8a1PRy3t",
  "key15": "4uZjhTnyA3FKgubhHdXPFGyGKnnrMUbFt7aLiJrkEbukYqrqwMXxvQwgxZuZTgkAxSP223FgY7EZAqFDECXRQfT1",
  "key16": "2Vs1Fs4UvpmcwvncQfxY8xgNM41GydF7cKx5xqC6esuLnE7i6L3tpVsQ79TBHcH5PPvZbC3rPhcosE2UX44bcXdZ",
  "key17": "5MvdNfYViRBrfTAJfqdKU74iRCkEd7FavcHmNF14JuPKjpHNJSnhfLstAgEX7gr7L8SLTgavrav5ALau2Zaiqb2J",
  "key18": "2EfmqFubtcywr8XVCUo4eLT861tXYnwcFQvC5eP3KgeVjhP8TN6DAnDoVKu4Ms9zVNXyieMMNn9FjpiBr4oPhx9i",
  "key19": "xe83vNpJkLtGvW8QRUPdKAmLYTd9hApfKShBKbPMoqxsDqU3hwWEsJVQtuFFcf6juPQzKYg3NnaC4yjcSMA6y6W",
  "key20": "6696UEV5dmmDnb4o5fwGYNM9yNYEBD6q1Qa6hdRAwyFA5XScTDhjMSqpWseovXPV7L33SaV2dfR3BxUjf2YhmRT",
  "key21": "5nXpXCe5AFJAFfJs3mLXHpJW7QX31LRn4SkddKCJ24aXnnAbdLZS97pQSDHtgV74zyurbjxJ1wqZyi7L4QWmt51C",
  "key22": "emq8L24DqNgeC8SuZUJt5GgphoeZMr34LBaT9hTv5NRBkpSpW4owEzAoQ92gs3xfztjx2B5iczhvaCtyv1kUzUv",
  "key23": "33o1aTZbhVmWmo66TnFbA5H3KiGMFQPhK3rLJVVvnMsoiJo7q3uFCzTg78w13iBPbJat8Qc7GxMpxV7uzpZsYUGn",
  "key24": "2ADLpd9o4iAkTsNKjT3ZmQtvaMHS1gSkEVJWW3VRRJAHpgQQT2wmrvhTUQsu6y4N1u9Dw2M9iPHMEoCsN7bAgCou",
  "key25": "4u2gS4dd1DTmoP5CtPwSoRVY7TkbjbSBuaC8sNuazeEU6ALdTpt65LS9hrHkuS5hRXguaPieqCn18SGrNtLRN7bg",
  "key26": "4Qi1tmNmQhkL8VdvzTqm8oB8VQ6agYXwLJajYDwM7qDi73WJWMh2ZEwHA9C6NRNbHgqG9zauzJ6NSopkc8gJ7Ayn",
  "key27": "9SNbaGufH2P2xEo5nPuGasiBSBVXseeoRhKreFSt2UGjBD2rcwxqT3eqpGgsjT1GDCtDuzLtfUfW25wqutbxpEA",
  "key28": "4Y51zNPYhYkYkL1Q3uW98dtCKfges3C6q1w9cMgFTkD6hFP3ziEZKUUpA8bCPgzsZPgQFaRbsi9V5orMeD9Zaovg",
  "key29": "2NbhDESFEauviy6DY1n6u58BifwJ3Civj5rXQ4VZrVMtmMAHdp1Aj329V2ZCnwpLXSF6HboktV48hgnbAmyzcv77",
  "key30": "2SCiEUaBSDhbnSTTX2618FNXnnqQtYy2U76tNwGQRHG4zmkSCJRK66evgHzMvTAngCeFgFCqVSn85bGMsdXeWs86",
  "key31": "5qGjJof1G4R8nGNEj1s2Hu8EVZYGQtkbHa3or25ayKtuw2SrqU95rfoC8uLQEBPfMyDSrSNUzoPP5DFd2K8nsM6R",
  "key32": "3fUE8aT99GyUAN8CBWx3EMkyL2whhderSfxQMPofCzfGNihQXPjNkRNyqJ8MayrEocD7Bkn5RLX9UNcyVpsuNNhv",
  "key33": "3wZeuk28mzsHUezbofisDsXy5XiBnk4KtyTwzd8vpLgKZmgTkFAPUYjQ32ph4Swuv1FeQUTpuGMkAwK9MfyGmmfy",
  "key34": "3VpBCnz25vkvxop3hTURJR8nVeJon4dDqP81z34uSsUZ2qXAxwZm6jahPdX6hRWJpLcYcBvwsqfawU2YrLfVWTao",
  "key35": "5MAuSo1WiMDPkueQUcXdoTdqfoix4wGr54MzkkY7UX2c3CkkVBmtWiN46Ly6xJehgDteFYs8Wj6WSmd5rnAZSSGn",
  "key36": "3iegHDSJxpkdv6FRAJwbQ6QsZJ2HJhcBwz3pi63w3DQaKvc1Sw47VVsFTjHxthn3HAWntXNGh111sYyEBcCu2mzq",
  "key37": "iSM4ACSjtdiSWQfKJtJkj77iMzeuTakACoMz2mkjBFB4biKXnGrutMAPTddx6h8Dyhnue8uko2PD1V4gPtoNrWq",
  "key38": "Co4Te2yfujjWzdpMGCuTW7YNx31KqPqKx2vgeSKrQFyXZRYLyQpvDE8RzVsWgoerDrXcCeRCPi8Xhuqy2CyeCum",
  "key39": "5DAPwdvLxLXiqT7LwYJDiooaqJbRgrgv4D6c3Rc6wxVcfU7o9ZToBpaZNzhnFLy4yig3GZR2fQe17maAD5saV56Z"
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

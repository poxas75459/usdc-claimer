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
    "2dtpw9dqRNEoUZ3ytPdG7nceKarLQtevZCe83akmorHYwm9sTRHxrewpZptS5LbU1HHroLTdjUZhVDSSiUmh1m4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4koSSvG4tbjukvvgHGKnUMKpwTUWNz3g7fHdGhM8aiefetQakJ9Bayxvu79iZuuQVTrFARjFwXmCSusqvnnS3cLT",
  "key1": "TU3MDWtrvfiSiGWyGb6gDpqLTDfRioAUW4KhzQFwYo4XVSwmS9UgECZYcDYdCet4dUaRaxPUP6VfvgvpbaBtWb1",
  "key2": "49BBU2aGAzyxUEpkkWYu1AvCeXCe22R6JGKTRAfbNQDmLnhrRXVvRau8fVz6YQg6SCF5V7kjNEvAqPu5a3TR1fat",
  "key3": "8gA5XT37o5KqFAN5Ukui4mhkyD9FVMBJhsyhpf3yRArj8LkvAonmyefRrLnCmv7dK8jCwmb8RatWbeps6Dxt6dp",
  "key4": "2mnsX4gWwqCWj5wdzbyPFjqwRwgdpLtm6kGrXk9ckeQCPEGSmFfS5nvWgdMPnnXyyTfSez83Dk5ntmG8PqvTcnKF",
  "key5": "RdwmJMTNzcs8d2oZ3nVisbbPBMb3aPsCS5oDb1gh3so5ifywmUgZ2bphMRTyPgB5FZHscwVC6yFvJjrV6osdSgN",
  "key6": "5hke8pf1qfmvHHZtNvTzese9oSZAEZb9nibEqynT6avbmvxectFUQyxpc3kh3cfUNr49VWRkk3eSsT4GpBt77amN",
  "key7": "nA8DGNPVWJW3VvRQ3qXaTXowp6AA1nUT6dyYmTQptih7gLNu1FyeGBdhwAHYcex8bP6Woim1Eq78KnNKQGNwt8r",
  "key8": "49tKQCmiyLHnZ3ZBpgDcx31HPUDmEBvzdL1eWMbCk1cGiV4ZRkuUfKtJi5SH3AKiydThrfyPh9hPzjnxrDf6Y4zm",
  "key9": "4q2sV4TGtgsR5dQu3uqBjuevUoQGWgLMrU3XvvS5pFuwtyxnNFJgwyHTNU2d57phHUkmhBhxXqScfy8RErouiZ6W",
  "key10": "5cykKs7uuFQHWxnV5zZHRPMCGL9BuYTRNu3ZTDp1x4SAZuw7vkk9hFyRWeyJhRTU6vJDUvrjYAeHNAZjHarf3QDV",
  "key11": "5K5AMRyUHBTGqRWNGkosRuecwewu7LKJzbKhVuLNST5zR5dnRwRE1f3jReiSVf9EJERQ3zecUP2aHMEffLTPrDA3",
  "key12": "52av2K26sqhjgwu95R1RNvQRK1eW7BMvU4RZuYgpYdmEr2De1WuphnWGf9MY6J4xuW9RPoeb1MrFbqJM6MknkfKe",
  "key13": "2dJLEbWoKuKsVvkHaS3RTbrHiVTcnioLo3yzzzVJ176Zw8oh7EWxcCPEMKBcEhBUtWnfVaqAkm2tqQqWov12vEsm",
  "key14": "py4tqrQQx9jg4YxJXKXh6ZkMWXdnttsQ17417unkrHjCN5LweRtPooQ5ca7VVdLoJT1iha8SKf9SrNywvrtXeaZ",
  "key15": "2JEyuJqbEL22byEcSBnB56JQNYZsbZjvu2nNbifJCAbbFUWQizV8bqo5Y7sHZb9tEe7nAKhwc8hatXUB7kqnnwua",
  "key16": "5MQu23DLEKKC56kvWkZRQYnrjjvxhKffNKX7eX1TGnAfqzHn6ixcVyEMKxrypGgAxtKdP4vAuLPq263cxETgMSX8",
  "key17": "2CbPim2vJCeuaqBSNWfZwxP9A2xLwPCr7Fh2TwGehHP6xqMBoRxmMNdyoymjGZrp4G4FcwBxXpZx4gUD6t75cXr6",
  "key18": "2ugcGzJmvE5sssJqZ1kkfqkjT4KSPX58sjQPRCp8N1q21ifpGLFBK7dAmwygsYJvrL9EZJa2NzhvkPwcxXZtFJxQ",
  "key19": "49HNK33esoBmMvrKXSZhgJSpm5yMACEcc84fT3gszpaPQHugt6mSN7csxYjw88B3SezinS7aCcBgnX1auDPW3964",
  "key20": "rD5wWTscNsNKfdA14oHHFYEYED4LmJNoGdWAmRkPHKxXY3Kqzyfgci5thq1rwep1dhpFPREyCeHmnp6Uh37P6mB",
  "key21": "tyLaMgrnR9qUdtYphZDshSjibUivh7T6Ykj3cqcBkHu49QVtgj3ytws8syt1mquhioVHJvQVKh6A2FmisQGGdeN",
  "key22": "3y9tKvxKXiZ1APpEVR4ZYVvYTnEgZ8j2V3oCvAXAEdKaZUXmyEh5nsVnkNbC5eXCTnp86jy5Y5zoCp6z6JM5kWKm",
  "key23": "3C1vRMfUcndXmGehdVBnsg977xLAqXtThMz1yDinhgw3kWyjmqtttP8ASLf9Y22YMU4b2r4UajsRA6asEG2aF8z3",
  "key24": "rsCSD5weQhMhrXBCmZGvKsp9YemwGML3ReLTcJfgsC8FN6GNfXHoYW2JrmC8bFe6SDyEdrX5jKeKmY7bKH8uEpa",
  "key25": "5ei4NRVHn8UNyXANpXrAvLDcRbDX7stoPxjGmLZVMaqo6K6UESN4ucViUNXowDi6mpECmJyRv1fBQk8mBkdp5EBG",
  "key26": "2uGw4TXrAWn6SN3dQPtHrXA8tELyPRYdpuEJA2Q464ruf6Ewf2agDMDrSVFtEq6havsAREBnG14juzBVYMwUspyh",
  "key27": "4NjjARw4GB848WNC7JTij2Nva9AX6ebvyGzcTmmyJaEowh4Uj3V3ciug4ZXpTERuc123a6bFnfDjr9Z78Byco2JD",
  "key28": "5xMxo5d8zH2bdLtQGEEjqjLpiYxfXsEtzibbfnmKG2p6o72tqvsQbPq6htmM8YfhYGNyap6ELugjtsmv12UsXEYn",
  "key29": "5hVNYAdP3qurTKHBkGCg1AWfastKnoiryexH5LoUyoKeP85aPqj7aeBjAs9eEhT9gGC4ekAL5ZnBzsM5ANqyLGmF",
  "key30": "4a4QeDPzGCtJRjU56fyYjRRq7ueiJPpKE1HXGiwJ38mGxmHsKuo9AdmnWqjnWhNDuAhsHtS7k6HGGbQoUSd6yoRf",
  "key31": "5wP98KCT2qfZb33xj35t3hXKQGKh5joAsYHVWPfibndMLruBL5phLNkErJLmVSbye8pcCkDZ6aBu69AkAvED94T4",
  "key32": "4JuZVxGGYKpn68PBQwodw5SyqineaPCMujigk81MJgJNc87ANFXQwGckLhtb1XU6mumTxi6JwxeMRZvKuT5XDdKg",
  "key33": "DGo2WkKiA7a4C2TeKeSQa5Qd8FXMp98YPLdqt7cHSEr2UZ3xkBDyCW4SYWbkmdxJmYm4QA1q9SNru8jX3oGeUNL",
  "key34": "62s76D2z96w6jqYQeVkDqy6fmKF58pnsk5mp4JxZP7ZEnKJJR2XJkyMRG9QkmgwgvtK29vLNbjFhFvAT3aAzkxQE"
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

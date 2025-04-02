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
    "6NtfZvRoWRpponNwYsD6u6f8ey4naL28S6sWMZvm4n2eGraeGZePF3U6ySqKCxDJvipE6LMGrL4jsuA1JNiSdVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qebtyBCcPY2n9TjjV6tX3PjSM861bc8fccaLrcLGhxRseZFvBK3MByGxTeGv6ds6xPPywaBeuUxo1dsShyBdnY8",
  "key1": "5WvJAW8kevdi78MwYofQQhsVd9wjU4gBgvgxyuUgaSdUxm8ph3HDDU85oiWFKseKBZygFAcyavA5cgKicj4tQcwL",
  "key2": "39s1CbKdLCcExGj2a3G6EjQ4MuA1nhHioy8nLMXUSiSYtfYSTwcBQ7gC64PLaMFXwhqmmbet6UFmPFEyHaJYdWhq",
  "key3": "45bqvCUdEnF9MKyBU2csvMLd8a6EKUqdFCPuSSVNNoWEyjJbdydNKgiHDvu9bZbAg7pyVzjxWKxrzJmPa2J32rGW",
  "key4": "4WzmRCjzdtFtuHtvuUWhLXusngRHfHguRhPzxm9wmHJXTPE5bkXarWK5MW3c8oAtH4dbCDGC8hfCP9PoadDRC27M",
  "key5": "4gzQzRmSX2W9PmKcPAHWrKGK7yMXaJ1McbpcTDsCeBUsHLFMUHFaKeGhZyA2njyGYcYuNLxQEyBM6q2qsyyanf88",
  "key6": "8P41S2nNkjhUZHiwtQvkCK5hPjBioe1npazhvCGKbzMPVwpupa8fNjxEQdmMsVzaQ4a4UM89e7JQY6hV9jb4kEU",
  "key7": "FaEPwRvxoiAMJbvJeEL1gq8d4m3xEfZGqR3r17SYJaV7eYBfigCfw8mUZdZFW9vSuNwiwep8XLEBgduYRVbk29t",
  "key8": "2AvG3Fn4ZCRRmXToBG5abE65rwScoMvMGtKS75yehQcquLpKZApze9C4zCwopptPSVk5iPEwZANW3ydm6DWw6LKS",
  "key9": "5giCiK3ionJ9KzPvo5n6iCzLXcQLzDALPF1c3hVgUQNy3d1mbmfXwzi5rs7VdhihWznf11y3MjfTauXCBKWGABv8",
  "key10": "3qo8TtC5TFTnm5zGN6ynxhKo3nvnbeV7SthsuC3QCNiXHvPqVEJXdeq84ayW6MWFWn8emBjiZ5Gyir8sA6jKG2nW",
  "key11": "2CDWzWMgF4dugKEN174dX6B5T4Ri67bbyFUcrBHDygoyMeJq1taTaQg21mxYUGmvdEf5XjzH7FXkgP9fyoyZFcYT",
  "key12": "2YKjr9oFpwPqvt9gffoQnuhorTiXKTFbh9tjdenBJJxGYoQdTg7vkg9o3bvEVbJVV4u6ruN8ZpaHEPkXqy35iDWD",
  "key13": "5vRJQj1iFwk28v4YPcLMVe7Woy3g1EtGyWKWBut6kd1N52Cnkx2bbbhhTxdNSHD5z6rkW9Qkfgd6DghyEXgJNrVy",
  "key14": "4GJPTGBaU7W9jgTyWCxhSw5FBcud1g4kmSqbgsKvVNgJ5BYtArhoanTQtxvfWohMuT8w8NSbxypRPmVHimG7yWyH",
  "key15": "4Pn3CbbCkJxR8Xk7cRSS4Z2yMp3SYShhh2arKKsxa2Rqcpx8JLbkyUt72Rhs2AhhjAjECd6LpVxHzUho1Mzeq7N",
  "key16": "5FLm5DKX2Uoa7q1GYmSiXY3ZP292cmdgUWev1wPdQ94RmUgNjc4pJuQY2Qy5Ed2hsLxo1bTwk2GREmUKkWMEt2bP",
  "key17": "5TXykxdJtFN7DBCLXANR6F5WiwGKJ559Li3Bx3PZBYJCN4M3vxjTgatSitsdYRXJDF8VAhyyRMZxUiM5n8eMwSKm",
  "key18": "2WDhDi1eZ3zhPF5v24N3AP4ee1H1LM46TVDLatLhHwu67KYNdUn23M6yJnurLoHpzc5xHyYbikER6YZyA67845r9",
  "key19": "62eBPDiqJ4ymfLE9CXdPxJrK276szUQfi9ED4U2CdJDjytXSb9ax4jha1rpjge7tTNnu46oQMKAR3R3EnozaTxiB",
  "key20": "FESFZxHjdD51z7Jm7HJiyjTfoZqR8wB6PALYkb9oR2MRV8v8DT491QaRpAQFLh86L28UhekXPnrcLihtv1NPZdH",
  "key21": "sDJFTamm93xwWmpZXtgkc78WaNRySBXQkNNkkvFo3NaoiSTyVxJqgwNkkb2eL7LDGNWwZHhnuPDj77j1CD65k1x",
  "key22": "5BtQij7r3k7T8nw2bj3cDcSXWFaMdhXBYwAFB8kBiJhvWJrExV72j65C3SoTbEUvodi4amBQ8zbSbVNgtwU2oVJr",
  "key23": "3ki9WyVyQRdhxJDuSjBh1HXxxRTYAbSUo7HzWKjBv5U6yevWrAk1moj65ysFnGPMFDFrtJ2fzVX3odGTTJXEWymS",
  "key24": "4YiTsmsSLQjmy63TC7QyAWQnvnJ6CsKQjPXynrwrteY6vjho6b3ReTzfRrerJLyorDdja2ZzGYN1YELRrs95RqSe",
  "key25": "37gZeu5bmAZMfrEbyD6LoAGsKXMibBjxSvzkBeDCKiS7iVDqq4Cj9Yvx4xKQtYWYQvs71UY4mWkCQPZkBeeSH4Pf",
  "key26": "o8Z3EFPyCYDbaJt6jknQLAxZk8iA5WS4VXJpap7UeEFupuaQh6y1Nz3YLwotfaNsD85Pn3u86zeFvTYMXkV5LNW",
  "key27": "46wBKUzZpZeZaK1GKauK3HvjZVDmHXAiA6TMxSn5V92EezmDCJSRuMk649f63GNhT1AY6mnibf8eJZnnngYJyHSx",
  "key28": "2cc616ngUJUSCrYrUs5GTN1tzVxVZNsGeSVxxc68gYeUpZqtTXN1KLXt5mjzfDJBTEs9cLHpMMwRjNSyYcxXME2s",
  "key29": "WtZDVoAmGBvcDFfW6sQg7irqHagiDu1RWDYGDQQhXnVEF6zztaWfowAZpnApwhnetyMMJnCHKhczNJNkfbgbm36",
  "key30": "exCq1tZpCmPdoUwNqedUy89uLdyB8qHsoz4F8qDKfyHsjHAUtBNgKgdgbzuiC2iTa7Mz5XgdzGiQKQyeGyQWafv",
  "key31": "3JoYKxQk65SSnpsMoanGsWtTr1vYhwJu6ygKKYzhNkZSgUvmRQP4SDvJ7Z2W3hNMkWuDPgqW83jccrKMVVTBKFJz",
  "key32": "4WjWJWL73iyXiU2fic79JWT5zoqQqXrEHd61a3qWYV5dXiVDJUYz1Q3Qj8zVuq9SSysiWtPYE1jE2vxsTq9P4ynh",
  "key33": "5SasCtjRB4CykmAME9hnoWVBNcrZiABGUvENxkE9Mmip3gmV5RMA2UwHc33EDCfj9SZ7usbPgtukES6iYBcPNDqg",
  "key34": "4djCSZ6vrV8Vg1U39rP39Y2SFzigm3CNtMRRjZUwpxcZF7dhPFuBuENUmkQe7CV688vWVrToDBu7Ls8nLjGENpM1",
  "key35": "Py1Yjfz8LywN386WyXUaZKRHfeFTfbog2jh1tWgT4VjcsbE7KZmxi6wVeQQdEXVQjzrnTQ8j5oKzsar3nChWWdM",
  "key36": "4bLNgpnM3MAoMwiN1fYAJFi2Lhcc3iSydZ1gENMc8C4RSM7syNQNLXz5Qops3WhtRqJSG9jQqeWRjBRGCo8SwR78",
  "key37": "emGwUH7ujgRZLtPNo3cHh8VyVYtXEMxgsggUWTujAFEvKh1EL4FfscM8M7sFAXa5imPwJhzraBmvYxQ6sZHYUa1",
  "key38": "3Y7yjygHh5udwws7F93GxyQFyViHV3duBzEnjvA1JfGScFhx41oBuowm6AYCSdK4cozZGvN8At6yMpkTE3AC8yxD",
  "key39": "eXzwSGgr33kSN1ZEyfpDoYwmGg9XiRpM92uTczsAzmhd8uZLCBvxx58BaFRkpv99LvY5L1NyFnsTQyzHZmNTBz6",
  "key40": "iw72faV9tRFHe996nQqyMUQ3xn6Ky4K6m9rUkTUaJynrXzihfTfuL4ARr43oLSqrmrnBhPuFjRPSLnEKfhwKfNE",
  "key41": "4yEKar1crZ6mcHUJJnJzgcBAd2U45cAYs9MeGoSxYRzPJjqU9qexiG5oeYeVSZVRcKHaC8s7QtXjq7KFruVG55UY"
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

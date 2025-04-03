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
    "4j8DhjXBncGoJsK2ZAr8MqcAHsnyKAwG3Z1kqH8GAA35x2G51pELcpf5yH2H1vECcdaFMpYEh8r2DSmkCM5bkFs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RmLw6oumyoPxUiULzScRjh6jsbF23ip766z6jcCURRpggxBh1fPuVzZuSVPyfQboJgnwG4LVMj4wE5b8usBVu4S",
  "key1": "w37w6U1d62UQEa3fNbwUSt2hy78jgmdLEmhHnyAMTJH3m3sgkrr6PVQ7HifF3p2mY8F41ftaXZarvGSTBeFnKKd",
  "key2": "5kbQB9vHyjhchQG3mWsYZnmJPi4onsoKXEJFSNvn58Ri3mWZudaz3wnf51WEFv4kD3BACLNUsbnhsMQxCSspM4nD",
  "key3": "vB6paNdwZKury7rGjD3MvT7YMd3yW5dZgh4yt6XGbkVURrAm16E2H8EWEX17C5Ju9HYmU9TxRszrjBWnagBRwPA",
  "key4": "55tvt1KJf5zDKiFvyikQMX3Z9dRiTnoSYdUNL4QGFtNYfnyXqzhSjG45e5aSPV77sv5WPckLx8QDYEBawS6anoFS",
  "key5": "2uGYEdUWzuMtnip4YDnnqbbUJ2HBqaL2mh4NAZz5UJKiSoFUJLkonjnEXh1uPUgSSvcSHaoc28SVBUc2hYs1vYLP",
  "key6": "4pT6XYC3czmJWek8dDxBB5HXmvdJzFy8RojfYS67e2r33y425wJc3G23mtuDh4QG1gFX4AzBZ3aUkSA8h69NnWy4",
  "key7": "39fskQwHei7qDNCxoh7EAj8pxB6rhWVTMwLiprzhziQQijFwWrvCowZPkuVtKjFaCyyPADvmFMce3JoQHjMdi4Ev",
  "key8": "5zVE6iFV8tCP9KnFor4Xz5RQx11i8fQBcV15wvnkYgStR3jFr6XzSMQLjfGSSF7WuHpwKCoRpz2fi29wvKttEmzv",
  "key9": "2dLPSM1ZtU9pTwxK1RARcNETCjUoJbdbGAkAiQrmYz9BzNCYTXLByyHxNwZCvLGXw8dR8mHmZ3MapuxriLXGTJkX",
  "key10": "5Nupb7meQM8ErrcXHTZQXuE7kEPswF4iTaBDbdbDP22hidHqzCnQ2L3Z6qRpV5j3W4gv5tTfUXqGg7Z1N3hgSxS",
  "key11": "2pCKNCArTL94tEEcPzijZtMRFupBHTXqGiFiug92JkhDzCgkmHbiawWkPwJZNm9HyiAS8vVLL82RQvUdVdt6Xr7n",
  "key12": "2i2uYXxHgdBcrsx4aBhHHxJMLZfhKi1v9ULHFkZMjyirJmnubcc2xXcPSGig1zgsGVTqxYsrZR5gSA4wbHcsZZ2",
  "key13": "56iTvjASRNFQWzFCKCBdYp4DHpZDLeUrypBvfzEU72DWfqzJyQAx7FhFDUHCS1umemQt3wCUgEeN7QqFJw4Tqz8h",
  "key14": "4ZWjRNqth91oYMADjQmJQ8DMo1D1JWyGMMa3fXFisxEcKiVDFQqHqdFqYTrdp1FvVmCg3NWQ6nENyGhJ1QQEd67k",
  "key15": "2fNc4PaSRuqjroKbAV6VNH4M246m55goxmCcAGphAYDfAXM3J2bQqTSRnSbmCGz7FNtHRzS93ZNbCsY5PGom3kVy",
  "key16": "4zqjM2bqkFeBtV1ZLbup2VcgMuKpkJAPzeuo7YmmKXktgXtLsukdEgq5PZ4iVFwrVQtdNxnP1AhkQoZUVzqUjsWT",
  "key17": "4d6xRyqGhoNjcY7H7LjqYBoxvUWjtq4RDXR3QfrDdt6uszUGr8fUz95R5M1vHqKiJhawHrJttJarv3yNTuvAfwpJ",
  "key18": "28AxXAHi1KGY6yC2nqHLxjFtLU5FeuSHpiT5bNr6KzDcZv5AAeuUQJHqTWeGreHUQLYs2qr3kPV4N6ftCddC5p3M",
  "key19": "4FasiKNRrqazCGhvjy7oi1KdWbgbdcJYXbhu7cJxDdZShsb6BaRdPP7hakxx6VrPFdL9wsyVdVu9BfAz6xYTURXE",
  "key20": "4WHrgQk8KC5d1hUC9RiGUPzBucgSx6srGowxwyqx49boAQCzdEgh51bDW28J34SKLodg1SQMnKFf4AuVzrVTPnQD",
  "key21": "qsVHqKY4ypLMkG5SF8muPEvavbZaJ3yvXz9EHBWrLyt3NYUDwQg1s5LsNAWzNwuntL7TxMovxdYMsJwx1a8tkUT",
  "key22": "5jcdLgyuyaztgWE8FNhZv6hqgy3eby7Fr3yQeVu4a3xoBGRh3YZ4fxMUi35WSN6vMLdvwmZpeFGvJhf9YQWeviKF",
  "key23": "5qTPgVNTsNsnJEuSXpR3z5NXP3qRPCykYahXc2SXPnjx9Ns13dNaM4sY5Yubx6BYuVUKndgTV98QQijDBhpWWN6Y",
  "key24": "5NioHwv7hqsBQQr65wALLUB9FKuUM9SqDy2Evr4zuXFAqtjgcEjfHuJJWS1DeJ3PVXP37Q76Czdx9uQfirXTd1RK",
  "key25": "bnXL2EUgdoPSyAJEUiVg7dvoznMH9cwfZEyFSRjz5KrLBYEnUrkXzKet2WjsnGT6hBkperNkLyH3Wk6Kj6AVJbZ",
  "key26": "4JMhuA6u4259RUn8iqpoYCjEdcQyPx3MSDRH3yJTw4ucvaciTc5myE2LPuSwpVE6xUDC1kpxdZpytatnbuWpDpZY",
  "key27": "4VbTEqJ6p6ZyERp3jgJiXZ2de5brvgCMLwJJX68ARMPGv6SGSUTdvswdYs4NwJtR5Asssq1sdbXUeF5yPoTekG3s",
  "key28": "2Wca5ZGTEQ9z7C4JAjcWXtwxyN8d1eoN5pmafdPy3kFYDBzuMTbXPj2CsKgxB7EMqwPbfvoAJRegm7ua9C4J2j8D",
  "key29": "2wXthGm4G1ZSW4W9kz7Akcve5jyj1aW6LFCVnVE5JCN29fqVMrn1mVDBnXiUPjPt5jCbVadEaJoYs4HNiZ9KCoCv",
  "key30": "TgyU8Q94NTS67cw7AjhW77KmiYLsndrwCzZ498a3r871LsjfzFKb4kXTHqPLzdedcut6AqQGP4U35ogYrUfnhWH",
  "key31": "4URyktDJ5B3oq17yZ1SJaZR8KerouKxKQ5GAq2gNiKsJT7ShSyFi62Ka8SNNgzvPaAizpJXsrkjU9ft9MzapXQgQ",
  "key32": "2NFo6j9kjDNF17dM7zashY7JRFVRmKV6JwRa6C1yeL8b97g7FdwzBeLEMVVuCGAgfqhh2YHyE3UwAexwsAAn5dc3",
  "key33": "39Py9VwDLJLnQReFbnhZhDD58qS8w4bqTFzkbTHMAfR91UbPXCF2qyjnXUArCKZNoRww5Q1SJU65xa1z2jLt3yJo",
  "key34": "4eYaFhqcJuKi8Ptx1fkvqTizzLAt3sqPu8QcxC2NDT6jSpK5xvkZZtUnFwQp8ZeHKvTHTFWU9bpHqn3bZkpspTyA",
  "key35": "mPQXFF77CGmQPMLV9CQCGmBuE1hQ1gjCePriHCduKcTzrGTWH7JbSnPj35sEoZnx3LE5s7kLYBzJZ3ePVDe2g9D",
  "key36": "5qn6gzCaqcKqc6aWZVX7w4n7y36wpJ6TnWUsCVb7t3en4SjDVjeq1EAfKTJHmB6HGrJi54BNy5wTVA9PTCTJVntW",
  "key37": "2JoMKZLk8xaj17yS479hH48NE32dZ8NLeEPPAuM8ssDSgvWqbdjNJKdPonHhorj8hmxMCCA9N1wE3ezyuD7Vun33",
  "key38": "5CFzAwTmBxfiJHtR6tco2CU5usduyctS4orB68NsmhmUaTqbvcLmUtfnNcHUnMLVg76YMKcnhKxNWsEKv7DyK9jZ",
  "key39": "2SAQPxCWaRXP7gU6KYbm4ovQaDtjHdFPDsy6V68SXfotLK5Hv8wMPho9vEcVaERtifjc9Di4o8qp4diLTNWFHTC4"
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

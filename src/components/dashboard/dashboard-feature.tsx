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
    "3zH8yYMqWAXnuSKxPBfkyJfm4W8gDvrnC3Xiaswtrz6BLUK8EnBnBat3hEgf4qxxB3kABbpRrT5DtYZCtkM8yNr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cNDUPLGVa9DVmwjyiu8bgWbgZHtBzm3TBRMg8PEamy5YdYgwsZDBveejqGbbhRbsyJAWL7TVbATGYUbvMh5HZ1",
  "key1": "233LBRiuzqvCzhMjPXzoowaJzV6mDuDcj3xU5ofqmeW5MAXU2ZC9wzHFjpELwuiLi3JtDESvjbCFPbbQzsyF9dN5",
  "key2": "2vLFJMLLqu9fWjfQcnvCsBKDJN1xYyhxjwpku3xcD4za77GV3HXx45tdu78MPQ29DJ8gQRR1zugdij3ktqz2HVk4",
  "key3": "3CLfgiVUtbxmaGnKrP4nXAwuAsbgd5v4rPxFBD9Q2coodMPPL4SYPRyMTceCD7y4cjV2YafRiw15opvJk3rR1gkX",
  "key4": "4UM5YXockc7YcLqGWQkPiVpunWn5Kr2DV6uJT2rJs7xUB9pgqGauLsjiK7qw3wQ5HZgaZ8oRXxujUZu7gp2uASg7",
  "key5": "4qPD6ETS7kXfYpPbP3FtR1wCiTqq7arPoFJ9yHGHijHZcP41idyWnHRXkVrSvf5i9epUYUcpCnr65PNK7Ng2BYz1",
  "key6": "2aHPDWrox8hCWf6duf5tqC8LDJbWKvZRqsFGCBEGa1oGXrtW2yerjrepwcy3wEcyRWomjr8LxN3fJvaiVLADTd26",
  "key7": "3EsFosKfeKvwrDBgE5WETAgcin8r6hEyf4836L8R8z3PcHqZzGJ8oddRTPavYC6UwL43bt9Xws3MczQxKycyWWdW",
  "key8": "2j5T3kTCjNqPLc4snG6jE8AbAyU9tz7yy7zcZpqsGmUZyK5yXdAU6AewaX1ApbdAJ2N1Rx6N17sDLrirt9NF6gfP",
  "key9": "64F1SXFKtSpMRG4cMHGcdU1628hjocmNgFhWbzzkskuUjdgJDJDqWvPfNGSUtM3jKhkJsh1eMXwSFfciBuaeJBJt",
  "key10": "67fSddi7LLTte44HHh1zDweekQj2iWviyspStPfoDGWCBG5DNomA2wsZeAizJZEruVPbHUqzv4CNPfXrCyuvP2kj",
  "key11": "5DgqKdLyiCaaxMtC4snsHkxpF74yvZ1wsWm5DxBFox23NnnC6SWPra3KezHsNuweZpBHJendhTYMX86z3qj5JJ91",
  "key12": "4s9Fhot2Vw2M4KEjecnSkM8HVft7yyoZsvwiDoTBbTKr4ajoadE2gmv1cRQiqgfNphHU2hbgFPDvxv4A1ZFov7fW",
  "key13": "5KK9XAczTXm3yjcJHnSPGkq3xeHJ4ynSfDFcE7ihkoHHkL5SC7sCoqWSXAGYU5oEpchdU4NtiNcu3Tvr34kEdhah",
  "key14": "5Rir115R7gUi3QBE7jPhRixsjZDja9CWt1ZHiTq8VyDMAiML8dygjUwksuknVx5Nu4XhJUYUsTZBCx8CPpYB3Sx9",
  "key15": "5zk2r96ocCotRTadkELQ6M5bSMFZ8QP7uRX6bkUPPvcmzZH9MDbTtj16dXnyzSGkjmZjSWqRknMx4GkJnQBe2vq3",
  "key16": "63V4bTcrftxUcMbuBaiahVCtdobsRcB9m2NFrMHAxcS2FE8GnrDFY39gPBg8QV5Ek7yiMZo9dZqxAJoHnRvpjzAx",
  "key17": "2dFnRGyZJvGaQvMFgdeAenhLxdkQV3yhYbmYtNHG5tyjLX3Te9bTPN2N4JyGzNqHAxpXCjn73i2hmeLaKXArg4PF",
  "key18": "2FHUtPsUacoD4uk8Vwe6sHNBwgBeo1V4c8SJ1xXHQHr7meAQ7X2m53idDWTHuPg9ug8ktujyBraFRSz7MPxhjDDK",
  "key19": "4Wo4cLqepizAAfdCS98spnHUnV2Bp48WsjATrPnMVxiL3ZELbaPyXpbU3kKr9HTpVaVD8yQeYxZiXjyaLRbT9tDL",
  "key20": "2CrWhL4i5JnfK7MPH9YKiL7TD4HFBdMkJuewjQAj3J1o6Fx7NRHgK14dZeNYuPaAAEmMvyEebcciguwHFwqfbYca",
  "key21": "y34QN1r3s1oJLbcSKUrB4zW4JrMwgqDftha1bgfsBFsvRLd6pPec46hBnPAcpp9WHiTATztaQ8FHYE15ivUiV7M",
  "key22": "wvNBJspHm2bPvjwfxZw7rqTMmG9CRcEYKRAXSJ1PihJobhBBcUgn23H1daxtqgnPtJC4J1pm5ey4ebTdBa4ibBF",
  "key23": "TuZgHuMmRxrP37VUvpkxnWELp13ZoXa7issN44wQVjRXFrPtyYFC15LvrPeyeQEpiCUPZJCch2dQXt7nUVJeGWM",
  "key24": "fzNX4TymHN8Powu2x2psDBYJG5ioANDHxQip2Rb9D2zRkdomfsmhTTe26yKuYBe2eptAje7UZ1LDXsYMFFkMxKK",
  "key25": "5teKoBuj7gLRotpkL4QVj88g2fdKSz3H1um5taWkS3HWwgR8mW71U2M7in9cKYLaKcRk1d7cwvTnzsoJAHHq2dj7",
  "key26": "2bpQN7LoyyZYz9ihRARAcEEwJSkQiSC3ni8oDbCwGSYdUgPduDhHSCam45h9wMWgj1h3kbrrwWbg254KxUyC5uSr",
  "key27": "3yyAHgUPptCyK8wT7S2Z3Ehgo91mqNRSBxKQDrsqeDLh1df9b9xA1VJ5FMEzD9Mb84QwGf3UKE2TZpPTUMcvKDpi",
  "key28": "2KKDQGqE7FqsuMu6aLdkHrDqaPQkgPy4nhGm4rVi6dA2QJ87evhkcMRP6uejs4bH34jp1Cq6U9jZ7KseytDu6gPL",
  "key29": "JiqsD5DeW7Hx8mDYpZoizEEotuDGXa1jTGV9jPmQt6HJdf9Dcod5aZivbAsBx1UspkNSTLWxr7FFtHvoU5iP97Q"
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

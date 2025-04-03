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
    "3esndoKg5DnfEKaGtd5PmAE7NmW9XwAwNPupTtZGGVpQnq8oJNMSTHNXNr3mSHBoLAGAqjm43gPr89DxWMTw92jV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejHKUk4ztGtrtVb1ctr6oY4xJcdJ8ZyS9beVF1avQKRB6hBBtiuFBbnQfA1NbRPHJqYyTtzmN7kcpvZQaAhYFoG",
  "key1": "3ggm9ozhStSJjzGWemF8FJ5d3tWkWywYN21kpUtkXzUEEJK3PrxkW1UqGAxyPC6QSXajUkQamieQapbyGqmRYHvf",
  "key2": "48VBva5SyNTwBFjtG8uGLCyH47FWjffuTfwpTQwHaUbAHA9ogK9cEeBahkCLViM5JCrxNvM689ziN71pFbMnnGwm",
  "key3": "4aqCPmZts5MA7JiC8gz69CJ6YtqUyasDrn27XtBRzpEUTc756n5XZnFLN7MempApCLhRMTik7kG51pK96rdcdUsB",
  "key4": "5WVG4cbG8J7dw8oB6dknhY8GfYQFoUtUuMvv9Eibvbq5cQRXbz4jxATaZ2MEiDFEdL7syTQe36guzcLn6n8ifgck",
  "key5": "3EiwpfqqQknAbrbqP6oNmYMWyTpaVCk7AaasMqZE947tfGdAg3tGyjcw6nmxwm9GBuhyLh6Loscs7YjatReFTphT",
  "key6": "3EQYRbXchRY4BrFPetxFoi43SQFnqxGqHk2ZErvhUPvovKfggQSqD1cRHBmCJfc2FvXEsRjHHApnwzUQfGbPR7D8",
  "key7": "2DLvbajDbtsVtyjwaMhDSJz5e2r967aJZh9Uoky86ScBxkx4nJBybWGQiNd5xLk9hLwSea87gyChtFnMmS1mkCry",
  "key8": "2LejDUEJqgYwtd2qm4naBVhRkJfAorHTfQeawzXXrQ6crZ9zqBzN78Tc9M6zPNvJckiEZxkTBAyfvANRRCS8fjzP",
  "key9": "vkB5VzaNVimHfu9g8bfRXqq4YsXjzZgdSAyttkfLaLfT6ZKJexD5HW39BzAtWq9kLECKQnFuEHiaDEjAVhFFV4c",
  "key10": "4Q7ipyTWed222zFixnsHPFDKkJpnQchAHzr1H8y3MED1oGzThCBSUP5BNgsnwAU6SNEJteWtMnzEHXkJUiPf8Lzr",
  "key11": "5YEDzCzYj9N31avHfvdEXcSRKsydPMSeY2JpKLu8MDxsXAg8bWL5K7MhGgmvpgU5pwfaQxvqYJWTzMLBe5HTJ3HX",
  "key12": "9UfJkrP7KwqCuZwFFpEG2ac6MUDJz2kWCo2Nt5xPY4QzivDD1nb8KGHFPKoENvurZdLa3jfBdzMMnF7szQ69wd5",
  "key13": "48fju2QjgmY3wSUffH3SiaABTigEUKrDu6zB7uxM5Y57QJwZxebnjrVKLKwHjtdUrXSk8UuHkPrrV7D5kPDPv3u3",
  "key14": "2A54vMJzzqUabsbJBN4tEg38vqyiSxh7iQ4qTEYpXB3aSs1vBjKsCrAGFFBT4YNHDsJf4iXTXHrNRHCJ7xvvBVs8",
  "key15": "7TqoZqM43MCihcpzgYe8CgcS1NvoTs7CT1n19WStwVSemztU9VHKsXCoEsJ8LNL9pk4v3DA8FAq36hDTyyURkSo",
  "key16": "5FksiVGA4ZEzdYf67WcjedQ2S11p8js1UhDCC6ej42p8eGyJvosgHnpc1ksVR5nv39SxhCF8F5wVk8KGGeACJCTj",
  "key17": "vMg7T4ENiLq7svJhWjMWmFCLMG5z2SJyHB2xHHAxtvcnCY5jXf3gogmsXue4PEdiWPzsHPndnvhUUAXSFUgpEU1",
  "key18": "2afDK1h96Du6LMCHFJF5jgqvzGGQSmpHatq5BE2CYKgo7uw6y7RqLDm5NYCuVLjjVU7QyY3xmaJJa5cNbSm92B2F",
  "key19": "mBJmW31v76yVn2uGBhAiRnQS7yAtBX1D2jvZS8KnsMfxdePQbV1CxC8SYHDQvNqocNC7ZADXfztPc2A7Yck9y7W",
  "key20": "2SzxND3G5frqdiwpkmW1NLChvArEKcXfmDUy1RjpyMPgxnc3fjVMHA154DemUwSs8zNxHYrNEsw53rM8mrh4LeFe",
  "key21": "2fWmDWziVUUfaVYZvUrUDMUwFPi7CH91ZPLwgiWcCUeYg7VT3SZwQzXqxKupEh6CamC5fxKHTjztCszUHMrE1uw",
  "key22": "Ja4DZgwneNPG2Qkxs7xLMBXjHWvSKwXkpG2yViJ2VqdmR2ZSMSdYVxpXnQtfjaKZnfun8K9zqMc79fLMiANfEpN",
  "key23": "4ZkFisErCJrTWXDWmmiq85st2fAG9zEQ2ZGHLdHmhYY8mURCqgSoo9d2AuNX4kYj3JX2K1pj4jr5teMjte2Z33Z6",
  "key24": "4WMYn8kaX3K5igceVxei6xKdURpkqiMem8EKC7UzVeCYKWVaqcZZgdviGJvYcjDezv4XPq7LWeDmfZcYmRUQWpsF",
  "key25": "3AE99dm3YPgTZUVvg1dWpZSC5m52bJUMhRJyzAkxgwFMryaBVQYzVKYXoz1eWM3raaYZZvrzaTm63FhDjAKmHDkp",
  "key26": "4GeWTBhtHzF4r4hBVrwS4GpRngiznP4RnaYTjAC3RfAadQKnPcefJy3EDUERCii64iG29RVNYQAb2sDetfcB2eKi",
  "key27": "566XZPpw48YsZ3WzbRRci2XX3sxukd5WygQ5Zw7bCxmn6yR9oUryfJpDtCLbvAdnvtmrCLhngn7Jp58f6u8xYBnd",
  "key28": "4aTNrpLqVEnvtkzE6p589XWrAnW1G5vvr7BWsNCSpsrZmK8Ujs1kkc9L4PLdYc1iZrxqtrj7n6ediWVQPKyyWEFh",
  "key29": "4trG2bBoK5h49pZzW7SAZMcV6Zhcc9633zkZL75SCL1Qi18ZS9JhjAsWcQeWMHGxJL3nWuA8mtq5Jocwhi1WgsPi",
  "key30": "5FZ6uw6givC5VPNQQsG567ZT4Vyr6whF3HSyKVLs3HEaQiAT1y71GQ4xS4XKzZkqFThZQFSjGt9MJK8juRryndEk",
  "key31": "3rMThMXf8HLsPHAxF5BbgCsUZxUNJQyHKWQ7U3GZcuByDWnvSHKBYKHjcdMcaYR1dS4LBufXhfoav1A756ZVgK5W",
  "key32": "4YqFdqMoFTmnBNJ9X3F4NpN8bw9EfybqUh9wtnx3d3UR5p8eS4xXbH7CDQR664cEdrNkyiboQeDEVp4rEZR3kbWA",
  "key33": "5sfVW6Go5oCZzPWbABr1xn3MGXWyPV5LvvuhgrqRqKE9JR3hrGHw5fDeEeU76xWUHSfcZN1H1T4RokGYwLxZN256",
  "key34": "3FfjdJapvwKu36uj5xQuXNWAX4G6QB2bqSe2zYVzJTHWYahqzNnmVoGM7EWDrz4PSggZaCmG996bzjLtQWUVizrT"
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

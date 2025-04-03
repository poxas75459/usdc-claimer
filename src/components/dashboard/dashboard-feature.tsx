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
    "2fUf3M5j34eym5F2VuJ7mhRJFokdepi1UFmUKDZYp6XyiJ5jfG9Rbokbaao7UYpeCHqgQ5GMSsGR4Si39pG5pDug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D77RAj4kmhR4UCxVYAtJ4eEJAQR6FUGkPRegXkL5DBubnFsjcwhQU9EjXgC17jjNiohNBHgViodUQiCKmNhfQFm",
  "key1": "2wX4i2Xn5KuongnTGRsDmQfXyqpEtAtJXkcgEnGZVdGhqQxcLMh88j1vJ5MHifPRc52DVAixQaDYHfrSNsqBDBPY",
  "key2": "2kzrBSX787ac2Hsadsyg3TMxL9wUH6NDQgCLSE5Qn4n7t3wsnruvY3CupCNMso7N7iMrvazvCStk1BVQKDfSWZ4N",
  "key3": "2g6zEjSHitZvf9KDSCmvVm47rrrHmyzFRvUaGrvfyqVMEmNG6z6AwLT88hbULUJEnNoemotpueESjAvk5HwQ1vYw",
  "key4": "3JZBBqrrd2thPrVTYhRABSBCx7RcoC6imaLUqRW3eM7qMSyhdmGQWx5bX6rVupDpQHwChFbHuCYxjPKjDD4oiwPZ",
  "key5": "4NzmuKXT2aozhwo7cHNHdJ5Bkna9cJnhPmi9qguNQ3As3wWNu4N6JwQZ2SfRsdjskXkZ3jchqoxumvSRVjGmsKgF",
  "key6": "3c1TC4ufAvo3gKZzaxTiRo7MWQkXVxPCZNnA1DFFzLPEwy8iYQjzZybfUgv3JytwQJxoqUCfWbhVauebXoTVyLh6",
  "key7": "4At2GYz3avCKj922kV1xd5S5pSD53QGmhKoApNC5K1NbibJgQo6Gug2heU9gFpUQYTpMf8XQDUN6Wxee6N58pht9",
  "key8": "2zaGbu4ZTo9Sphg5RPC3PzmvTqVCkAJ2MJwUuUEcKssucKJyHacjFD9ndk3zDhGapBXvhdVHxYCJFWkz4xciNuih",
  "key9": "uygw5fno5yZq4P8K3WeZEPM4AAUHvMAxrqyHEX7wicrCM6yVYQb1HqAmM3C9JmbpY5ro9aNhcHPyD5qMJ8U3opp",
  "key10": "2x33MfpcjBMRGPo1SjBwN4BSZ1cRSuyyhvGA1iw9K1cnRnreMtrNvapPgFgBYnfzN5oqUNuVbzUdNJ9revqeS9N",
  "key11": "5HvtnBZhyU7UhgkBjdi9hSGTvTP21J8TgwPvrioc1KEgWGFxrnDfBuHH7nhPQF6ZcUpjCrCoyUhbbbUnmZaVKj8K",
  "key12": "4eoBRZB7LnAKfG6xFdjTE4MfwetZZX3FArp9yR6wd7cb1RvTVeS9e1jzp2Y9kJAzF8MtihiNupxxFQWF9X2FUg8e",
  "key13": "2KpmR8ajiFBquHYSNErT2iqAX8Z1Ck73rVaLFP5uYKc6hgy8qWMi3g9D1FgwZqKuD5fEwqsFiNN8duaA7CtjtZWC",
  "key14": "49urTiTs5v7zBSrjBYFoEYsDPfrRK46b4sE4Vs3foix9fNNXCQRwRqX2jJzkwuTfM7jFTF5c1Yt3eS4pxD9wHAXr",
  "key15": "5zhVSjVcZPLqYRUrQTejAqtqUsniDM5WV2snvpe98tUtgGowmDQ3wguDWKRE9QCHFjQATTvNYpiCURc9CbmY83xC",
  "key16": "JjEqcXCw4pkh62yB4dRycY7j9ULbdsSZUcXEVVbAkaS9JmVAsBAcH49NBswmxTzRJ7jGvdANcgCLMKSyUVot9LB",
  "key17": "3Kds8xj8BQJo4ss4vigN1ujsYdbjzSAWcVF1E6yz4ms5tji74SBMiNN6HZZvbNSxuHsgYy3wkUynEFEahrLqYAc1",
  "key18": "447KSpzeM6asTRHxhTP1if2fNWPCJo59fGAr6LSPJiHWZ2Njs6biqMcmFowv3XyZdoDBVnFe6CaQW27ZaG2qakmV",
  "key19": "2PBUV2DSPmA9i9mJG6xCyoacGZbmNkout7rQ5hVu1sy27NmoPVjgKPA6ZzU86wGZhQ2BtixD8U7tyC2YXh9hbjeN",
  "key20": "2wQnQqK3zGrypzQJuibLd5RNVf3kcdJWADsy9rV9qUyYQkvc3yPe8qdj2Pbbz3Rna95nAhwqSZ1EUXZ11jAjDAAV",
  "key21": "5E7bGYyyrFa6ayrfjzZFnrV1SuBZEoVKtZVEwdy34NXkEY6a7U7qhKt1wMuwUtPXw5Xn8vLcjbNr6FXXkSaRrNaf",
  "key22": "2bHkqtFCqF3NFyLQDxvLCB1hTzZzejWjGaYfHxLq77Mtm3kzgp5L2L8bZBLpC1qtKSmyVnuK1iDarri3CfgnHC2t",
  "key23": "5X2hAvYfUo6n6AjCSVd8xS49NmADZqP9eY2vHRjyUyfhVT34xZLBa9uv3tVhGfKmLZFXo2HKsTH157tkYz6taHsq",
  "key24": "3ir6sZYNe1dEd36S9WTVdogVNePFdbqPN4GGATuSJV7abTUfNjuKGq6PeQuUiEJ2eYT96kGgrnjusK7d28iA47tg",
  "key25": "5S7ehX5qzzSZS9nRmM2uiio97HuYMqvL9spRxnMFCDbw6g9dFbremN9rZJg9Qcr5ZX1HprdgboN2Pntb9Qh8s8ee",
  "key26": "GrkoUomptk2X18fhGJ4QXtD5rycqfhBtBG8CikyNm5WzsPbGduDhSZmBvmanMyGkDFuz36yAxvnJSytn3rHLNoP",
  "key27": "3NSUz5SnVfGKLEJ79DgHvdsnFzaeACTcmcvN4donLUEAvEk4i7rRUyajKkiADGUD6kN8nike9qXm5NFryJ923Ts",
  "key28": "5KWmNysmesTuf25cniAmaBkYrRzoe2SMoZkuoY9VbPy2ixvJLYS4AHMWdkBfZ6zTRfgYToUUvNSsRzLBd8i3Xia3",
  "key29": "3gfiHPCjk4R5Wquc6MY2chUhA82uPS4kntqEPQfj7mDRUJqbc2VAjwBkvtpJhn5UvefsaYn2VQNfdXo8Dw7JVSAt",
  "key30": "63jRrV3GZ3SoUP3sKw4aVLkon4sGKTVbMbRfKzJmpV4xH9enQUgWEYq4miEEbnpNMrRJouTwJjSAKrikXNnpoCD3",
  "key31": "3yGvpGHAXAXgW6WfD3pnx2Cs4f3DcBS54xKdcKBGavHf7wBLgHPn5terDfMcGNykcZgFQrcopUtjSaQiQi8774vt",
  "key32": "f23uJZ4EWPpqUgbyx6dGkid83jsWxvQhaEpKSNGwJQVXz1BfrE58ZxXTv98U9bvXW1bDXqKUCrzoskstwsNph9D",
  "key33": "5QEG7ywKMdLbRqN7mAFMHP7bYsHpwiquow2cb26NRUQ9nFxvUrvhsPBkDnXy81ZGk3eaGLGByKCgyPmLWsYg4FUe",
  "key34": "Yjc5pR31m1RL41zz9Avx9UGet19gLQEHf9vBCaoppdP775skAFFr6fAHZgABN84gyNh4Ysv3t97kim3dNtVSbfo",
  "key35": "3p2NJiAsMF65Q5r7vaG5jZ8x9W1FFzmiGvaWDiikw6tbZAuhS5Svtuyuw9ZnUnE64bG43FAjUmoAjkj8MachyxRM"
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

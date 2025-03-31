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
    "3UknjiKcF5b8u94hE1cpuVohkoNowy4KaJtWcaPRmSChL343hXgKDMaCugiJUKXJFgPMnJfskMZKGv89BuDzGxv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UZr7KfkpJny3GPUZ96QFvNYrE9WUuq6eZWs8CvhP7gciAfndYn4Sw5CLc6FKqWDwbqrKrqD6BFXBxGPCqaMNqo",
  "key1": "2a5C2d2KjFiygw44FEHJX3agsEodeM8PP2op2KSrwPHVdMiTo9xePiLeqUeyqBTBUAq9EXmSJrtwy2fJb1Sgpeif",
  "key2": "2ZCwNSm1fufqfmP5DErxLTj9CaxC8mmVw4gigaWz9VNczxfiiuCjwsGjaPk5kXNPTsyZ18A9pVvWFttCYKwpWKja",
  "key3": "XjLBMyqN1Vm3fERFU89Wh4DWK4e9p8Wz3VkEAf5qN5jPfZSk8CR8CEzEr2GTULjpWkfxKRdNQ2xNk9eK4qEdqz8",
  "key4": "3TDXkoaibJbgNwHNPU31yzkMrmsaR8MRkW1eZVCZyH2U7xBy82jcczG4dbbJYdF7sDG2ZwgxkhjfKi7EXJJRCnXa",
  "key5": "3TkoaN9hfzctXnYTtyWvPucQPeWHshqK3tKyQdCUMtoE5FYrzXnN9KAauU6RfFbheSig6NqZeHVBLxmdMsNvynJ7",
  "key6": "2Nm3egzr9fu5VSCBQkpKgg4ZtYa15APkRyvcqjiBZPNXEqBjLMFbRth3XwAKRNwyKpNzuBbBq1SBDVfM3z1dCGru",
  "key7": "3EhuobMXrFg18Abh9DeqLWs3XsPUwxupjzKNQpnFHJDH1xKgEvxRML4ybcNNB4Mj6rtRPYBftbEh8VLt4q8iRidr",
  "key8": "348y6XaCM6Bmmy1AuMQjYpgavAqZL6QNeNohfGfKu1xsxmpU71UP4gnHGQfdS4M2XedmioJZSTwkW22fShdMM8tZ",
  "key9": "2CLuLWhqj73KmPV8zFa39YJ5ZYftDc5dSa4E5RLr1DEh7Lu1qEAzyfm8dNSNhK9QDnjtPTbbkyyraDJoCNp6853U",
  "key10": "5FQUHdv15xW8g4kdgjyXGPmF5f4rrjuMS6vRjuWF8iFST6c6G3A9G8u1wETCNYDUngEuv45duLXc8BeJsEUyjVyo",
  "key11": "4q4WvaXpEpeoi2acUTxJtstFWATKoQBC7tKSdy817SXYCzCpvtmZJYMdhCQj3HkpbVUADboHMs3gZiEK1duVWt8P",
  "key12": "Amgom4S2JEQgbxWyqrAG6XJS6vgQXTG28g3N3BPk7ZTEnUE4YjGHfz4evzJ6tJ7ri8zyydM5V67PkBrUSchNpb3",
  "key13": "5dCd1PR9tn3JGkQPuFwDjk8zQkvwMG5cAnEBUyXR5QCQ6oxR8HuAbyjhvuGYe3m9kDzsqdyZoJg1rvFiFpjH8FTN",
  "key14": "2HWLgDPjcq5Yg3F2kw9cM9JJTHwiizSKQxUEGKGviNYzqTzqQ5hYNziE6uKYnktS8KCjTYUehjhFTgMNAePFjhNB",
  "key15": "4FjaEyWVe1Qj55gPwku75ZnPn3DVJ3hXn7ZZ4juMXZcjCg7W21iH4W5L36UtcCGJqd7Pzb6CM9iWdpUJT6KmvVrt",
  "key16": "3C6mwvHtJefpe2XHVCXb5VFnxgPmqwerXTsG8W7WCUBNQQzqR23nbY8Cc3icbXm9LsGAj55HxtLN9CooxUhvdbS5",
  "key17": "55TT8iAX5v1DjokJQsiuCGGeurcDFexvkaLMtwGdPe5iftkmGFfyYqXNB3nruVHyiBzSuKaoxSiakz9V4SdB49bH",
  "key18": "4n9HVSfGRy5PuhKWtUh9W9QTSG45ZphoUiThzDGnBREEvj41T17HWjWk2qTGTby2gXEhWhKr4MM5r2xjS4LzKqfm",
  "key19": "349DJHGqDtygZW7eut4orKfNXUMYozpbkCa56rmbbUdNJVWqLAypNrfreLzmFS7MyCJuoxrSVH84n11dXMbTMtJy",
  "key20": "3XZMquxKbjWTfKsr69PY1Xxx15hfSvXB9ZBLj8k69jX2GiNGHrBdALkQ2GgcvctmX8CrvQWhn4duoWJ8qCGCm7fr",
  "key21": "4SZo65656Hy4NN8iHKsXMbu8UUHB5eaEQm3sLMkViLEXVnPmEL5qUytuoSV1oqDYSbBVZsHb7tdVfX7oHMYuY2YX",
  "key22": "56HXX9GYLkQiCz5ftqqxfUan2HUZBvYVvvfF6o4Q9r3VVxBYHpWvuPWP1SjrnqjpJ9fSR3buQAKvbaFnikh3RUNL",
  "key23": "4GuCe7vk3RaDFhCdZchHFFMjT4Gu7KKrm2eg4avuXSZj9EaYnY6B9HdXg3MdqMpRpvFYSqf1pw1PqZLAQVsqWpZ9",
  "key24": "2zNmnVv6JRwpe5KEfUQ8ZnWZRJcVsx94qhjgok3YTQzMftVEcKX3tAdE1wTydY8hGLCBoBMk2rDZRysAz82aKNtZ",
  "key25": "4FbJPvscW3EVBiPUQX6Zy2hAJPs1QtVGyM4JKVpnw2PqYTyqD6zeviJj3YMkbD3Jx6WDkNeUewrBAQ6KeKsZKv9g",
  "key26": "4xPhn3tX2akq9KSwg7seSt9i9aCiL8sty6tGTKCzrNnQXHxuUV4RxT8KHEUd8i1w7425qieQJcPFFYfPNHsAjtQc",
  "key27": "2Ve4snGSVQ4SqKbHCm4GHtr5UAt4KYSW82cD6iZtcoBSRzEDxxLP4KQWrTBD4ZwyUUSPKJ6cWPw8vfGmrfug9opJ",
  "key28": "5AY4xomxzTgxbnm5E2jKGDWSUqF6b2Lckb73DSHY3eBTf4mvUH8aRvSF6GiLcqukiWcNZtk952xxVP8SZTc9jxPy",
  "key29": "3oaoKHmSGybW37w5FFveLSKV9itwDC3HpkgUHqqozZy7hjnwRH41BwGfFWJweD8BzY2NHNBu5DzcGVxAqksbJvTT",
  "key30": "2VwTExqKMCPmofP3UG1ALzBz9oU8psVzRExsJx1PmP3zFky7ccfsLyMm8TjM9HqCWpf2AphGwwRQ1EabXmwAEA77"
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

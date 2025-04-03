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
    "fYUyZ9L2sS1CHnC4FwpQGfS7En7sFE7DGuVhR3sJkKYbZsQwGWTnCGwb8p2hw3raq6Fb4PmkoT3qEBFcRTC73zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34tiRuX89wqHwr3HJhBTWkb1znqr9PQR7SYDLugL4NTSz6RuBohYEch5eMDSKUXML9RsW5VYoHagbE5gEbADQaXz",
  "key1": "5EDsQYmWRCriDcc28sxHs8dYNEz9ipUQPcNdk4rr1wnAS9M1EszzXBenGpdnfUeERgeFDRUx1rTMumWa8HxLLwpH",
  "key2": "3H2fn3d1XGx3Qi1cxw6MdwP6ZdyJMKJqjyGLBBjNqoVrbuvnh7KEoHeHQnsiRy72bPATz4u7kyouLoKcsJzFD3yh",
  "key3": "5tyVKG28f7EvaLddutwdPAFhNw1pKvHSdhxYybYmD7RiSB5AxtPj3adNhSFf28dR88En4FhfnSs6DKFnNxi3WRV8",
  "key4": "34F5dySa74LrQueC8Ss88u9ptuwRGHB2AGuBsbbL8R3nNX6nScbQNYVxTupsp3ssLKECeyW9pU4nSuDtiUtTQNMw",
  "key5": "3hsgabo9qkJmGdhTfTyAqBiS5PmqqX5sVDq2V8Yaw4Yze9CV3CsVGuJce24EYU5y2Q2Mq64u12Kj7XyiVu65NLgY",
  "key6": "59A3wXEKq5y7rQvxKr2eUGc6tYTBWKqdi3VLdPnYJBYXFHUK22Fj6qDfPGTib3DY4ubMQPZsjXCS844Qj4R5fqQE",
  "key7": "4x7D7LogZpTeaUKFwNGCxd7fUkP59vNKmVWzVvjbPQqLs4vYGbEJR9GQrVDoHYwauu1qnHCD4bMAyjg6KBS3sKJk",
  "key8": "bXZwqDSzxnGVM7B4XDpBvmKx2Nk9rr5ibvTPrdc9x6PVK8HKw4hpW3MzTRtAkF3j6agYAx7V7NKdE4Snr7X6Cy9",
  "key9": "4X3twUJjcWNwCGCaSoWmwvPzGd68seoVFex4A15Tdwz2Qb9mztC4cJ86qxpE3UfzaKhP78Sw1Gv2aBy59Lf7G32F",
  "key10": "3zSyLL4xQcTTEfggXkq9UEHTMUST8hYTjdDGFW1MiwUN5NhT1uET5zFvw8TDTqMbQiCDScMSi2TNeavcsMiokkuK",
  "key11": "GmT3h2GuakfKh2FCUtrUFvErDFCDKFDZutFyr9QdrP6wJvTxVdrEFMVndirCDzi1RPTwhU1qgG3ri5pk9hA89Av",
  "key12": "2QJQrWLm3X5hpo89WUrL6fJcgJmWv7Mz9ibsLgrVJWN8eXAqL7otmXy2tPnoAtLPb9atvuU6Am1WByhx4VkvLwq9",
  "key13": "5aKmRr4629bKrHwtKXB2B1FtHkVmYyRYXLiFrAZqGjzhUHgA4Z9g5Y7rSf3wXPvvptF116Vfm7DpjqHvUAVaGt1P",
  "key14": "3baDXaQsrDzvoGEbm8a2PFNtfZyeb869RtKzy4T5BRsMhF3uZ1PLEBCYPvKLt4W7cQZDEwRF6AuofEfm19wgqL69",
  "key15": "59kmR2ftXNYmdqL7UypQkjsrupej4qUhcaRdFivmKJPd2x6ypHCSRiCHpsz4kuf79FHCLMxGhMozqPV5Kr2UkyZv",
  "key16": "2FnhfPNXGorTpU8Sy13UtTYpqJd8Dnjwo6mRBBWHKgofS4sv7jRHcvgqY6WWpDyTeSF81N4u4adc9Ye2rucSxoPP",
  "key17": "8RLXoLhVNcCACgmFSa5A3pvnoMM4gASrd2uHKxhBQGrgP9QFsACDYyQLZvDy3uJhhkUgoRckSiQix4Pt5bbAhHH",
  "key18": "2yhU5VHHfBF2wXnXjC7WjCrxPAK7sEN5TvKueCVMnPxbVxQDi9G4A9sWmpy7NPfN7YRkuCKPxQhq5f7xjXvPci7d",
  "key19": "XQp9D27P78u3oqwvPpf83fEfLvUhPfuRsfWWDWsxJRU16wT91wb7EghG6YbmNiSE7ZrqqUtHKbHELYQ4mHuXscd",
  "key20": "3GC1yUEzMULtiKYEoNtaVa8juCJBP7MCS6x7XzfrmFfPCQnrDDLuyjNZCyngHfRSVobmmH9og3hav7ez43P6ynGC",
  "key21": "4JznzKpDKZ37hVhKWReQy72sAAYPzTh65kzv53sdiMssvqiqjjxRCaci97CCUbwV3TLSPPjrmTejkEUrDTCns4ds",
  "key22": "3SGvJaj9zPMot6sdGVRnPsM79FGMebjhwFBNZpCokk5nkDq9yq2wYjq4aWyhS2FYSA5MqgNwBh7XeENY2gPU5hix",
  "key23": "3S3pmYK9n5iDv3EfRfV3Se7cqpupbcjdjLR62xqxQUG8GbKPcxkYGozWUvjJLafkW7Ytjpzw1X1aVXSPhRQwAcAw",
  "key24": "2pz6jgxEV3B12Ls4zGmuA8RfHmunbg4RkogJPiZZ6ZpYmGsTJodY3F68aYa7JLrZu9srT2aaA7pwbJjFyzgt9gPi"
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

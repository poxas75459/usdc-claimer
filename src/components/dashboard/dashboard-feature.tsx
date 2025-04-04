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
    "3jciCFwEJ3cfKjSbfxvscuz2V2fb3LLRViMhcbWJosiSbVJHkn2n7B5jns7ZvJqqb7eKG9PatPMzfVH9kBqd2ufB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rkPEdzDn9b9z1q3AL5y3W4Z5FNypBkZBFhZMpDco7exqdvsNYyw2nUCdJNq6TDk8HAYFWop9bAoszeDGNTQTFxX",
  "key1": "2XiU6JqQBgdV5EfytmZeMnA7kCXDCXUtKTBtJ2AqK6fELNcew5saTSm3xP553HppPcsVxaQp3tPtswvSAf88bo3q",
  "key2": "3eKYGjB9bQ3K5XgoWwPP5t1t1BPvqo3CncpuXs1mrMHFV2VsBnJKNaAkzQfJCxbEqaNtd4evUw9p6wpTEYFkULVB",
  "key3": "3BSqq3yVrWsXsJYuCkVfhzxfga4RSoGfbX9Khgsaf98hyi94zyXp8tUiprQPpTZ4WuKPJnGunM6yqDKu2LmavAev",
  "key4": "kZuNxHqe8RwNAfxEh2VhAp7VdUWW5TfGbpiLmsnZAMyxxeWKvm23eeW9tsgLGi91J9zGz3jqtzyRBANM7tkEtXx",
  "key5": "27mXUTZyCpXPVy3pwmdRpEUaujLNdXcLcJVmq6YHEBEG529upoyne9msGn15fX6TN94X1SUVW3KGnXrRKArcxxdu",
  "key6": "2q9RR8GtkgER85EJkKzwuaDWPfv7BZDjFRFnXLhoYy4zMLUH5DYEBMZUCYN5yzsS2ZTwSjFk7EV85SfZFRFGnp7E",
  "key7": "5GSASnMCKPudLTounuCdwaawpneN5zUjEM7VH5iitSQfU96XbG58hdxtwV7f1ahorpQKhNnVBv6XfmdDJY6Fy7jT",
  "key8": "h8VyVbGmUJttS7ytCKqY8MpH7DSnZPfgrehmQmaY4SC3NfhMKFbAdH1WCKHu78HvNGXhPxq7uQWnJKxU9GaN8mn",
  "key9": "4kJukkCTtgcbi3bTju5o4aNV9Udo9nzg2ngdBNedCaQtMeF5QR9e32ZYJHQqFkLboPfiJg4A4E3WYytqxEyf8JTu",
  "key10": "4Q4Df5YkeBV6tNj4ZHpWKnsYD4m8N4DfLTobGKjnXS9MAfVdoBieR8QdV8rcqjJtQKTPurdQd8rAq65XH6ZFeq3y",
  "key11": "532Aci96csaKMyPXMJaoFhCs38E1NNd83dpGiFTWPtp731z9UDixP7Y6jNP9dvJNrQHyWGtbKKDcYSooPUyVBBp5",
  "key12": "3KfJQtRAsgdP1WWRE6ysJFPegVR24ysSwMGa6vnPrAE46roAWFjdDfQniFYfTmhYqUjKKZpxswzEgGWXLc7jxUNe",
  "key13": "23SeVhHx6Nh1FjMAygw43m8dUvRViuVHCy8QYh9maUVNQspRTEKonPQNMhPpAB8ZJAshtF1mEMreqrPkYWcUQbMs",
  "key14": "4du4hPcCZmBMJW2AUTD23e6Qy6bk2eS6Bq9o22vZiPgv1oDkkuUTHNYX3qhx3eFXULz5ePKNonvZhhnLrUS7GZYS",
  "key15": "3FmZfst1teq6V1ap7W7tmggxEtGTNmW8vrdbDrfJNTsKf4yXHpXHKMrvQHNLZ7NUPJMtC7nPU7ekTg3Akz5Z9HpQ",
  "key16": "2aFTDQLa4hRy9LxwJo2LHvXn7jkztterQE9gaDmkSgY1BLFRynvxLDVtjyfzHucTtZSC4kAeRXiyTFMH7SKkyQb4",
  "key17": "3W7qScjwSLNfyL1jNDCLKJUWoZQLpYv4R6iNQjuSbdtt6mHNPBTm2BqsNss3egYM8wesTWS3S5ZFSw5LcZ6s4dMU",
  "key18": "5aZ8uT6Zt62fgNQMed33HXxL7u7dT2cLCXX2hhvcrEEvxj81KJD1dKcYBxpE6BUt1mZ5JaBVtK9jLjNum7mzwkXa",
  "key19": "2xfyseyNnk1txQp1t4FEq1Ur82YWDcn3TpX9zvPEwQjkvqZqsuCuaWMdfHjvW71DX74jXiUDLQdz6X4AeYSXyjpe",
  "key20": "2i1RfQQo9KFgHV48RGQqtQLsenKxk6mMcTXPFsasMLxaZWRg2imijMRHpKpdhsnGysrrMotK4VuGdVqqAxMn9FFo",
  "key21": "Wmw3rew5X3gyoKap4PdaMptQSRRByoVL4EAeQM1bAGHyr1pnG4TyHn6DnZrZwSyqfZNLbiKmfW5cFVvd3BcZC9u",
  "key22": "4UTezxa6NiSC3ViVhz9JidrkUxAruLAcaWmnYbbzR931SQ1FyGTWVY7BbiD6cQvDyo1qq23G9L9qnAMVz7Ajisty",
  "key23": "3J2nPBJax7dGuhChHF9hHaz6ocWhc7BKUw5uMSCzUUX1XZiDNkcihwL4rDfWzUgYGhrggucDp8rwhiGiJJmLsxHi",
  "key24": "2npPK5S2pQ7vz5qCRrXdEAsXGXPiTTdwVLcdqnjCcUf4yNYSLUeh8LTZVED2sjkHEheVg4zVyz3XhsjquprW5YZv",
  "key25": "3VWGuzZ6vMnCG8MkTtUwHfdctJrLHNy7k3HDGrHJY9S1Y7tvbnTjzbufErS3enofKq3ZDAAEdCkmR2EF8LUADDMR",
  "key26": "gyMXT8WJ2eoF6XXqCPmtnutunjuhp7zrpPjXFuEa6mj44BrQPxCWgNLPB8hnCqX9Jqx53EMoM9Zv632pai4D9qN",
  "key27": "4E1fMY1wr19tBvfrNqAc2Nu9FCRz1qcrybe5Hqt9VmyjYG57xPLV5pbU1FvkYj6GqwLiLmTKj3pCNNdHc3NXN5XH",
  "key28": "mg9YiQdgmUSTZss6QdHKz59bG7g52udXo2xTojw1YWmSAwH6evMFLbK1yygUZsnQZMDZcYSP7YUWPaNoJZLSxdn",
  "key29": "4Qzg9tEm7Mc2UV9y71VhXPZF4G68CmKfJKjo89VXMKi7kx3LeytK8qrMDA8hRThjHJjbGyx2H96ESzfkNtNZQrvE",
  "key30": "3mSwUTYLm1yo6FuxLCr1DkWFTJRaHbxeFXJCRV5aPT9nVw8QLYKy1gqUnhj1JKHzzJze8dp3pUYipU7Bb3RnLL5h",
  "key31": "38BP4BwRpMnQXGcuBq3CANunSPzwpUUyywj75c5Qgh7oYbX6meRtDWMQGA6pVj36C91nYvBDRxp2C8JMuXQp7j9H",
  "key32": "4pSzB7WnHPZsX7XV7hJ78WN67KDoNtdGYUFhU5VX5HyzD3dSJn5b47HdD7crhvsqtsGmJUmxyWreEC4FFB35rTjx",
  "key33": "5KAF1fjTBtb3Hs1aX7kjYLCYtLeuCwxrJCA6qW6A5BQMQUFiHrzD8jt74TEoJKTFU1RUEg5XpPFAacu4sWLJBtvZ",
  "key34": "3w3yBkZkeGusWaQ3ANfV7HEY3yz3cZLr9p6U3zBLcKg5VVufcBCcEsNaReXRe5SeXMQJHxcYH675EizGuf2ohMME",
  "key35": "bgaFCJCzntGht1HcXRQyY2PU5Kj89fyY1V35sLh8o3DN8MFwKDdCZBExAx3rFbbgJaer7zVubhBkAWk9sLbHzwq",
  "key36": "5V9jNHNsH5Z5G51Wrvj2gCcaGcyeaqasVCgqKqwydZGbWzLXnPRHPPFf5e9xZ67yM4ZgyM8zzeVLbgrZqY5WiWLo"
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

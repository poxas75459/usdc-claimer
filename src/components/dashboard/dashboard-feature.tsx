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
    "5ZcpDF2XE2DTpkr6pF5eoA9HHR1h48g2bMZ7SZCTERtG7MZtnaP741PhGPkHZBFqbufpMn9LR3yoJ1uoH4rM66S8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dMnHwZ5njYA68L9gY9piV7GEJKoSuUQknHEPC9KVRLpfjmvzj9zW1AdVQRocSqVKF8gUkqsnnhYoRoiAcTdsTjD",
  "key1": "yo8kvcVA5vdmsvKWY24TUQqgTSM4tucktsHxsPTdzYFq46ffKNFuhNxRJDdUGUJ8GnmfkLhDgS4K2k5yHJxqnxL",
  "key2": "25nLesSWVZSSfN5oAVsHRNf88qBYc8z7YcoHCojQ7LnRrWxAjMHXRB1WopGAwHQsinFcwV96phXgZ8rkzW7Lkfo2",
  "key3": "3E3CwmYDdgRhFvjYatKSkuiKfL6WCYjG8kuaXFMA6U1PHX6xfu3Hg6neJXAMf3nWQgDgBh8vN1o3J242ifZYuuUn",
  "key4": "5XwtFj74n6APXSePqrAv42xLXP5V4Wk77SNbiftxS8Ypsoz1Wwnkn84Q7N3R4RBddWVzTEuQvYneDwozgB97pvtE",
  "key5": "4gyr2WcnAjSbVxWa9dbufA6ctX1DBcQNCQ7tLC1F92DmuaRDxvNf4bygEy9G6SHvc5cJzzUwbui6X3MK4hpdxw8W",
  "key6": "21YRkwTEPm7ivRGETk8hN7CaaiJWeytZhCE9kGP2VWs6hh1rrNS1jioQGfu4Mrrg4uvcgdos25diQVC6LaPxs7qf",
  "key7": "3yJ9hqpvpfY9zUar5HPm6Z4Z5kj2rm1i7WyhPhys7GCy5Y2mZh6anmCmTky7Y19zmyV8Ui2fbrKjonvhRPr9RgLH",
  "key8": "5guUN25otyamrNAYEa96AC4unEP5D5muJShKaCXViQMKSXRQdRYT1n6yUU5DVquZs7Vz9YjJC61SAGL3Pgdn4tAN",
  "key9": "5DPpdHMXzqJX24EfjuHmu2d6EmnkSu9F4xKMcN5wGLoLGReHyAwPrHZHAoaNzgLabY3MPNqvaBAhqWcCRmLG4fB5",
  "key10": "4U6czKMQ2nZ6abQod2ceS8fWVkrTZAWxRa8DnQ8ipRoLyiUWZiUuozFT7FvMCghMek3XnE8KWqYZSnL9hPLcgrKu",
  "key11": "52JcC63AZFdgoivhGii25ughL2SxtgNzpuLrEakhgv582ZNRZ9Yu6g9CuRCFmPXE7EkPw7719GEPAcqQ2wP8irou",
  "key12": "5P3ueHLj8dYCdqEYyUoG6jsLG4tXp84bBjQNXZWJUpnh5RUbUGhomHsS7Gfb8gWTF4rhaaozRUwVEUafxZ4JKRmx",
  "key13": "53FMUqvmyMJUPNSwksSdAanwJSW5UPLrafbftWudy9RxfaNHEXea4rXC7kdyYDJPC5ifpzfUGXULG3JQC7esdEDt",
  "key14": "kEy4U6r3g2bgA77jwVEVogKe2eLRw89KhUWfFyfL7s3z5ZqMxg5WsiEinj3i3jNnoau26DgDvzGCunc2VZ1WhJd",
  "key15": "rRynrcea3WiHy1vi4Hyty3zYm4aumsDEmFiRkzzsa3HJC3AjmnZGTndf4oQnjov3ELhgpeHRVYLWwtVVY7SLZ5J",
  "key16": "3HmoYJ6h9h9uDoJ8YdYmSuY2ruHJf2ZrFje6ZxT9Do7umf2iPc6RpVD1cmi24E4QA3AkRnSS2NfjkTZ7d4wap6Gz",
  "key17": "4H7RyGjVXv6MWNJVQEb6dEC9R2jZcPtz1BXGqETKBv2zJkETREKNC9r8q9o1JHaaF6jUBMPtDmrK7rircscJUzFk",
  "key18": "wL6w5vAsieQq4VSCUReKndUiwxHQnhPJRP94W2hSfqtgMAvGWzgeZJeGPzsJSQBDUHPunTBgXLVbRtBidGJxume",
  "key19": "a8tyr5dBNAFkLn6rFRNNHeEzEfuk7DvMR581T44fhx3jM64wZcy9r3ES9HPyBC1scGwaqjcHm7rHCmyoBNUAupJ",
  "key20": "4DCFKNNi6Z6HmtcAVMnJkmtCNfPnaUdQA5vfqfRcxJaDkxTDyqgiQ438c8PayH6VcaRrzqpNDjbkfyLqMMUYfS8g",
  "key21": "4MMZw95pTBParWLJT1ktfpCAYih3uA4q4Woygg4ZCmiPE9vAPjbCy7Pd9WmSTRpyaWTL8vonvUg5HzmzomgGodGq",
  "key22": "5mGR9EVDX55AsFbbNEdx1Scg3uBTPWjWPoYFnjSN65vGC9T5picBnQYCLodwBD8uZdqs2H4wFw5jzj69HFeWYPYm",
  "key23": "3jGmZ3BabAqvgKW7moabwexfSE1yMYTiAvBPbfAhYHg9aVvRE2BRSeGR5Qv4L28q6pfbbWExyZbVPLrDKYBMRiio",
  "key24": "4CczmbyzJ6xoioVf6GKDyH7gwCNkNP49QfuyhZB62FtxywTQdW6k2n1G5hCydBZ6oZo2Ms8U5vSzzDfPq7BkrZNh",
  "key25": "qnxdr5Gp4pz7nP6mY4VCiRCyzqCAcx26YtRwrwiJmv85mKzwyKobVVM91RSh1Bhnh9WJEDeo9nkPD1nqSDQyMyq",
  "key26": "7pUf8bUiBghAk7XDyLv2h9FoGRB5sijQUoHsTZXYhaXHqGEjtgmH9WHj9UMNBw2K32SqunatZwX21jJGYaGEJqL",
  "key27": "NL7yZouNfEnffRhHvCXnT6nieJst6ktbuyKSK3v41Da8Ain1fmjPcpoQxkoLzd7Yrs51vv9vMLZLciR5mkrQtxV"
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

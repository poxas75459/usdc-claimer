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
    "21xhQgndRAXjK1FWm8aL9K2i67YC11MaL55MnGHKZsxsCXPjNn8fZ5bnroDb3mwkqjX2xz7i7sSAGRt1mxDFZFbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GyX7pLDAq9dr4XTk7HAroTKhX9kiSe4mmmpZ5D8eizMipJsvYVxwu6JLtbvnKsEkqHmZGBWmYQ6z5Mnb9rbk5Vf",
  "key1": "niXCWg9YbqZudNvdUh34KuwB6t2JFVqBR4z8EVq3MfFseKJ4F4pQVu3dtDd17rv2GJHYVJFdQbkmRR7CrpL2NQ9",
  "key2": "fZsfJKtg8EKKU8DaGvQeWXNrJ9azwGfiomXJYzdY4oKjCKKfG3Mnr9iJAAciTwbrv1fmHePEezY2Dwf1yiLZaN2",
  "key3": "3ygYrgz3evckJq6j5zcRkmS8Jyw9qBy5ns7hj2dVN42dVghbUQL4KG1qZiLkXarnD9aVa5iXQ5LrWkTUkcb9ADtL",
  "key4": "4jc8GAw8ye2TWt3s6UHPiX5GanqkcSWsmVYG8QT8b3r8e9PVXo1AnfxggtMwFav69AcWyajiqy9mq9gL31ZtcDkW",
  "key5": "2Sp1rPhhAGhSFjEBgKetUq6qsiF41M1UdAKZQdu51ZiwbVTcsQeHzxw6MwUF4wLNpQngPKrLV67f1FcCa51Whwtq",
  "key6": "4gVBuuCbgXk2SX6xruCSVhMPvdro6b7cc96tZpeU9JzdhkhRzpFeJkMLvVSU7djUg7dHQRhLUiwcX4C4MqdvzZvp",
  "key7": "WjanBWmw2CGic1zsFuXJnZvc3MjSpNx7PfWpfTqwFVS2e7xbbJgaFEST44B1hTr3C1qwHrCYpYcBdDAhxRHWYAD",
  "key8": "MaBi486Swd8GdexxRgzP15rBkSXsqekm4TEtWxBiBs7T4RLnDW7pmrwuRrEHa3dc3tevQisWYckApMKS58SgyiZ",
  "key9": "2DrgiyK2qUQ7hmMDGD4nNw5UEdwNXMNraxNW14J7Y65cLPzpnenV9bUdZUQ6HBzNf8TcVEYG1TY42p5GNmUdotdr",
  "key10": "52NV2WCaWhXUPEszfUsuaQHj4twedgfvbXPHi6DDoaP3zAma8fYjcNmC9rmCPXiieXpbcb3wo1354drmzXtwzmfX",
  "key11": "61s2tWXT5yanQiGNcRCUjw73MEk6FbzApFYTCzhD6SQnMUhFZUGNuJiHGg7fRVun8W1chP1BaPv42VaLViEveisr",
  "key12": "5Et27U8rGn72RXz1NobdqwbpEhV1escUfqGa3f5r7icRD717h2XgcCGfLUxeP1rp9VLTF2WnG1UJXbVBK9jbySfk",
  "key13": "wnSA5yMF7JAJDc2JDBvmiTPCEUt6s2uL3n8eWqZdAdZ97fJVkK2vYn5WKGrkxx9SCNv6TJNZbsinakSyGJxa6BX",
  "key14": "4si2H3dWdSQkNvsfHYK4xhkTMop95PJf5LkjVNL26g4wEjzTyR1jzfmy1TUojrM7ZiRhbZ3w6y67S7TquYMf7bDy",
  "key15": "5ShTSqGxpiRrKZbZ4hU2UCM6tY744EQDV9yyn12Ujb9fPKs6JRnLMAH4e9ZbPcTh8Tu2aPVagmG7ZTgVPpihMYjH",
  "key16": "2EyNAH7VVDE4ujcKWHUyhFgTxauapzacotozQT1iMJe3YF5AGnYBJ2aKaryoAGFrzcpv4fgR9tzhjB42wHDdcDtq",
  "key17": "TK5V7cWSymUPGdLNg8xZJauJwaC5pTnL1QnUrHjWRCW16yanuMEt93hj1C1b7B2yTb2fbCh9WWLxWtc87An7rSW",
  "key18": "QP5K24tpvr2ckdm95GHD49jMnSHrEMFuYMYeHciei514ezo5djbDqXw73ULrVL4gNcNxy7N8EzqcmCvRQjaCxbX",
  "key19": "E9c5QeV7b2uDXEdkgPXR32cDDza9mL8Utq497Um4QYwV6w7JZKGHvJhGhTRXwtT5rf8gifb25ZXLHjidLWCGmVQ",
  "key20": "4fDazvFK7oKbXpdjEGRE7P5VcodTcLyib2e2AfKbavJBEUDEHtHycmZzPE1mtitPLYVgbmzKN4CfMjeCbCFqgnis",
  "key21": "4m3wLS1oMXFzddvxwDrGSrVmcmLjto2eegvBjVURtP7QZRQRG5VYBVrNLRr91gZw3t5PZKcK92ApgW7E7Q9mKWpS",
  "key22": "3nFBDab3Wq6fnS5R4D3Ln5vFBJgPZ17vfEDYw2NjVPdtxRiMCTcodDdvFoBxtMmQP9K7nHwwjuo9cWS1vFpf7Mho",
  "key23": "5aQHsfxCg7tkWAPrDYAz1qpu894T9qQo4tvzdz3UiGu1aWWSWA47aArQVMNwncmfg3edSpViZzTioiq3TUP3eUvw",
  "key24": "5qBHKXJi5Vw8zuuUme2KRVUpXibPC3gEZovZvMLBPswdTsuhyDx8DVbem5EMNRrVg7Uv1egHCq4jcwQW7WL2un7T",
  "key25": "22XDMe7mxHVoSnZWM6JvN5BEw2yN9gMtADnwMFbj67kuCtPRZFnEqojewzaAjrrpncWRUidp8PhhPZZ6gKUB6kkK",
  "key26": "655TyT5axgrtVtxxD289ZfaG38d17VrrYMobvU5g5QG3hLs6Np7u2FqtWq9CJbePzYJPVbdDtZSu5oD4g8BHnpCb"
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

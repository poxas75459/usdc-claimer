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
    "yEA92JoxLjZf7v3KfTN5D2QjcRYuVC6XBgVRShoDdS8UTTZyasyeuesVUvtqSrJfUBrgBft1jcXMaqmgZCbjTmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAeqekUPc18G8MUwRLB3xm2EbiFRiC5RvkxQmhDQHcWQLpYF7Uh35NgW7T4mE1y8aeamaTAfQY8Wqgs5cNzKoBz",
  "key1": "3CwqvYQyUQ4iWJtEf9PMq3T1DopXc9MxyMDEft4tGPPDUTxbQ8mia2rpP8LjnGQoSzbZnmgcFuPwMypG9YAYg8ba",
  "key2": "2svSji3WPRDmXnKkJPwEck5xNFVDdWSGg4mX1BabWuXBYufjZoV7nAsxxAXuQ4v3Wqp9venbiq3XRvy8s1SVKubV",
  "key3": "3z8SiUPcKwMG58KJAWuECs4HrdgMkTJDVgtiaXraPwvm8GFDcEknYuYgQJAB9a9GbshSjd5WJzvFqEoreRrBA2MT",
  "key4": "5vFfkN13RjqDWZMRVxUyD27eyWkWErFQHPZBeThr3ptVaqQXPfftLkVFrQuU77PrqGaSHEDwVeoWmaadVyGxMFfW",
  "key5": "44hLFJyXMhptyYqpth4sWik7Ruge64abJ9aWUJLRCfg3gfwq9SzZGg8Lb52btTSiHBfjX8VxT15b75AmNeojLEoD",
  "key6": "54gAz2xMX9qfqnvrZLqi6JatwMwwckC4fwGNTRJQxoNpG6GfhkFKwPqrcve4ydN4AtmWieoswEGkeF6cJQuQ1bXS",
  "key7": "2dEdrh93PL15qNRE2p8eG7HxadvxKsjSRrpvvWi6fv6PkG7PzsR614Dwc6PY8r4XnxWh74EdddonzsQqDfxMRL5L",
  "key8": "oLu6zcR5UFvgFjd1Q8WKXCPkFZKR9T25EmQWQ8rQ77sBcGAwAMat2sePYEXsFdrsCwNEP7rumwnB1ecQ7W2Xmed",
  "key9": "2h5Wan88sMdD6No3G8axRi4TJAvQ9jfGGKQUhpPBqCEzEGq9jecfLXSbYgZicMW1m6WdDdvvP87PSaVJDssKagzf",
  "key10": "4xG1okFS6D2i4rfUtKRYczRbwqgsjt8o79gcWSHPxp8RSTkz97f7ncU1aqVEngRzqyqgqYgyFGyBA6WL2Mn9uC2w",
  "key11": "5yTjqcgKHuvcMQrRkdVk4FKTtfTjWPSPJMBpnCfMepMRLJsTx3dRknjBQSAye4LwCczE69mVnU4oqSF49fJBG37G",
  "key12": "4dWwywuEQ2EbBz6see3KFKatmB88x9BRLPJ1y6Va6h4XuWNWYkmZdCaj7L3gLrugST9BqdVdj5wtSjL2XinS6QbF",
  "key13": "2yE9EyKYPKq5A7mosZTPH7QgJLQDY51cF6r8R1RvKtvDJaXxNEyCs6qhcNQxGCNFXPhL6GRiDtaRgTuiFpDUdQdP",
  "key14": "5eyaz1FT7v7MuW3XjsJGz7FgwRrcSpVXo7jRU9mt6yXXwF4QuDFCHv7jzfv8X6YPMzkyb3Bk4nU2tZBZWZ77bpFE",
  "key15": "mNrjJ9dz3oSxAFPyvcCJ1gyVbQBEZZY3665Rcw4DxoJ2fi8SF1z1VswavR9YNxVvf2jmHCAWtyQBRf9P6W6GmZg",
  "key16": "5riXVtbyZwePBUX9jup4unfqNYFBWbEVLM5bVc1TMT5Bj6k3KM8EjanTDqYs6Dx6io1JgwYbWQjXnSRWd7oZfro3",
  "key17": "4UbghSxrVpPrJ1T4nhJvM16DrDwMTaqMSwVmdnmygjaFWLGuu1PuF9Z9rhe3JLVpSirH3VBio7hQvE2ZrRfey8ng",
  "key18": "2Zs3q6M5bv26gYCJ3FnNUPFg7p3bwp2YPreceUJ4P1dmcmep9ALykWdiPrXjLRs3EMPTtzj7oXCDh9ehSEHsm556",
  "key19": "2m6GT8aFCpzGwaASMFFVcWshF1N9FejbjNAswwdeY5bTWEqyPQjj224UB8DauRWXKvGVfceaJhBcrV9xaDj2pSD3",
  "key20": "fCfhEfqZe5pUTvNmhomeqynBhx8Px8s9djB6JFhKh1pg6Khev3emXHaEpQBz4LoQwRsZt634t3KzgbfmRVvcmrR",
  "key21": "51B4xRvqnWKF7JSziVZxGo77qUMGBjGSZrHTYnSvrX138CKMsJfdcMTDEJcr8vLf17Xv6uJJPRitk2UvdYsdBE5Z",
  "key22": "54Str5MqqKsr9h6H8ni1ydkMRqqKrcm7oDzeRohth2cFDqFygr7DcyDcZ8eUUtVskbNCVdJjBsNkjpTUiZ11bkhz",
  "key23": "4NmkEbBAfHh3y2ZoYKeWF221hvwCJv3oz2VbfPamHUew1tD4ybk3oMXQSizLKE18GhMALiuvpZdMAJebCnnb9Bqz",
  "key24": "57ejNTPwq2hHDayUnYsCLwFPrzgDJpcyUKXmx34eVQHhqJt7puGfmdoXWa8WAiM3CXarir7DKtgd6mXLDcC3xKHn"
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

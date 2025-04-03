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
    "5CDMZQiCfLy9z95vzipjccfCd6KGutHbFbjET2t7bXp3f8HLbwGgPdkqkWZLAMZ6D6WnQXcGg5ePEhAKG9Nejohj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCh6VaqrTr36MAQtCt4E69ztuNzZiXt9J5bAj6RfZcqYKN5xM4umH97YLvQScUG2JxLHj9aMGvwFtZutazwsaQo",
  "key1": "3yS8maestk5kx7CJH5qZwfEagX4hTnigkJdArRk9PwmVp4dPS1ecu27Ny866F2Lu28XiBi6LLHUkcrdwyaGzejdR",
  "key2": "5vvE5SivJTuDFpgZPC1Z1JMMsJR2rJxTi59LDCoZTZMRGfaZbGUZbASWG2L6Kg5owh2KgHJ5MTTM3wGA6wqwLQob",
  "key3": "4NuCnzB31Ha9bmF5bHMPZAtrXd2yGZ9ZnVUPCuvie8GNcdcZWgKAYxsSHDC9Tt1S5PLTEh1wSkGh9dyuWmrDz12S",
  "key4": "5p3LbTyvGhk7VeZ7Pen1cmYGbQrEWGwdf7xXRfR5dN47BAyKJLWosepvFXzXuRHayQNHmJ3LGqAt7gJ94f3ratq4",
  "key5": "2bs3knAjG4N5YfUktxaAVcQ8faAuBy3nHeukJYG18b3fFAeg61g3ZcVsRN8J7dAEhBkv9bkhJwyNRGnRZQ9N19pT",
  "key6": "4rJMWwdZnLMg1FuBazCopak2aw1mTssFNVrxJT6ikhtMhwhiovJ1nSR7g4DsHpywMcDMsEMSg4guSdXcxpKjdSnw",
  "key7": "gjCpKQQPAcp1HDTLUJD6wLZB178mvVyJXq4vYV7Ahd98FEhzGKjH47b6bA7aeXh3rxHHL7bC5p5U5CqK8SeiqQW",
  "key8": "riST5dUZ4RuLxizKB2mEB1EFBKqN24upJaFjLLpQ7mYgJfswYAyL46gYkz9zvJV9Vf3hwdB7HkMtGH17rGg97P7",
  "key9": "3EGWdfH5qxbGKgqsoTa6hxh2LiBnjFDF9khEopgjz58BgEDaEKEWmUP3REVpc46BFV9uAo5XeUSaf872Pfy2rZNo",
  "key10": "2f9zgPmjorzjswRQtc12M8EAdtqbd5aQD1pj52LZ4tX7nehnRjGyAURVAoCyVENoSexy2e6Pood8q6xY8qN1hBEW",
  "key11": "63Tk3cuRCP13vNby5svFutJEAJVFtnBTSFNapjF1a6JydZNB4zT9uHxdYcw7PPtMLXLHgFEKZr1ztKoDjkH7sVHQ",
  "key12": "5Eq8TsdDvfG8DjGQKUsj53E53ye98VF8nbAL7V5mhQRrYeMGhBwLQTTcyqmmppzH8UPHHFiTLbmg6VVZymnk6Gov",
  "key13": "4NXcnnnb9k2dcwMcWbtuS8yeDLCN4eZ6AuViyfaok4DqXPkngBV9VzP36u2GWV3JMW83NCSsxkg7dDgtTF4Fti32",
  "key14": "5cocWH1tfjXjr6wLWEKGJCZgxHowbDe3LQoe9rX6G9bSZqNzGE7upCJ9wE6TqTq34BrZwtF5PhVg221zH8bgw9sf",
  "key15": "qQuRgJ6uV9oFhqnwEJNsrHHoZj268rxpTZ431UjBsENeqdnvt3swjKvpmVTvNaconSp12C69SHcaoYVVNyw5xPn",
  "key16": "5E9v9eTXj7eXrQXE5tzuznZbE287nK8rdSH7BC5yQetmdzG3hB6GbUxy9BbMhDLuSuK8LsYdEaYCQVCTbfH3jXD9",
  "key17": "38MbCHgpWNAAznJbAj8vPSyR7HLgULS49pJ9BDVoZRLFGCVX4wnnryWZRaNTfzerCCupnvAr9weFVNjvDR7hf2Rn",
  "key18": "4vGvUUjHL5iFwoJsh3npoK4sVJpFKx6vzNeQvdAfftoWLUP5A14hrBneEPEzpAX8etpdCaw8mfU9s43jXY8TGJi4",
  "key19": "2NMVKHEWyjpyUrJLfJ1BNzDumUjU7bAdjJ895nGgCSEc8oKT3KmsK9qcEFHCDwSfWwutXbm2wkcmGs78NWisPtYd",
  "key20": "VPjPXqUYygnH4kd3aygAJayZdoqNzrJXRXrCZVZG8LFzGmCNGoVKchsFpefhc3gTEGv9XAteij487q2F2oyTc5W",
  "key21": "2sm4CXt9FJXMhtDMNrVXSeti5qCGZcR7pihHmetBt9vFrXwnGyvF3ugPyaqGuf68tASjYz1waAebtidX6xecT4QJ",
  "key22": "qUdKmsGTWhXrFtNwwy54rwKj7eqKCnoL2DKr9GPwKNnJxzTsxmxs4ZZ9aSVDcHP4mgySwafAbZppDBt8CaaVLow",
  "key23": "o41GTg21KvHB1vc2J7vYwMsij87JdfDFG6LGmXfoSLn5nBXi4f8oSLU2kH33rZ5MYs4JiommpWdGELtBKdhXktw",
  "key24": "5914odNRVSzWnDdRPzfaTtDfsXVbjMhEQKm7Q647LShgLLQmi286tjCZK5bUU2PnHSHexMrRa1XYXtSTjoBjfpsC",
  "key25": "8RcEmgzfBeoPgze1fMv1kGTWYrf6ENy7NoSGEwLFv678eLJa5YBN3PSfqBtGKRJ2zFj79dzS2Y7JPYvfeJVCptm",
  "key26": "4G7MhU7CqVXdbZQhcGQ97Xaj1WT1LrwgExg8Tm8XkLJBb6q77yqpoJemWEf8mKLWpFCBNUrV73DWJ55sWFR7UsmL",
  "key27": "53T2oW3k4ajQLSLcxWFhwRgqpQo9UXhKTJJwNPL3EfhAzmyV59hvCcRBxaWPA336btbBZxxkb8DgPqiBG74keF1Z"
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

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
    "29x8S4UxujoyaeNZgxuACssEkMx7wUAJP6cPTvQdrz2CNZ8o6A38R42mTA7JgZVAUQfEp2WuWxfX4BQvWEw8TBkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjXXEYzfKTkmmas5XKWupF7kq6JzVz6rx1FF5iz4vdkDoDKar89UYi4Q89EHiqTfeAX4VbfTxUojgBS4fwgdJLq",
  "key1": "3m9iQqoFjTSKKBhGf8bBo4bSm96jMAA1mw8bzNcdYKbWWKmkRzGiAWBxg2FYdWhtPPHwuFevN1PDJvD9MSqHsg6o",
  "key2": "555T7xbtCDwN9nvCUmJhq5pbFsd8qS28AHV6gTbiN6PszyCTYLMq56hyGFZwnP5uQff17w2A2msw2Fdyv4jjPyxo",
  "key3": "3tuEZLCnJgq4S1BMZyuPMCeup14uUb259LZjutQc75bdDtU5LuwrQZSTcTF1jk7tQ91gXVMjvL6aYJKWAybDh3TK",
  "key4": "5FaCnUeJhRGDRqTYK8Ktzsx3NqwQYD6yxn6NqqSJzcG17x3M5PDsyhoAD4itgjSfFnstEB3NHYBoVYmfo7k3tPQ4",
  "key5": "vXvEajSJJnzhL6gjBnbE9BFNqAnf2shyQf7b2eco6kXmT8GaDk1jCLYb1XBohS8fieKZcA3bsqcGuELsn87XzSd",
  "key6": "bKYbTxY8jcWb3sG2eQ5WqeHXKsDFhQvRBMKvSfdzZURaFe1iZsaF78PYvXrv3ikzBbCHm27McdqP8CsoWohf2ro",
  "key7": "4zMsQ4Ap1NudMJhvK1bkc3kj3u4q9itSxhpSjCHZWnZNZoG728owFi9etpuGCiBnYcgB1HXP8P8np7CgQtsZMCHm",
  "key8": "3966KxHUtA8FdCMbWdAufjVWF25ECZxaULbu3KafdUUrW4kE28QdxgmmKcrSsc3N8KTsD5HAxR5PUvvEcmR8ae7t",
  "key9": "4U64aBQeLQXrmEwQRojz8keJ3w1m7aByp3FV6u2mSFePsSuvHBw1fGN8Ln7xNmAP7CuoGsegAeoxx6XPkyr2TB9D",
  "key10": "2UnYzoaFaKPFLRoLQwGPEaCgtVHh11FNuXW9gf1o4EbdcEaJqsXMKLkve8nCt36xMcrPxSQ1C43R4GC81iQqSRQE",
  "key11": "2pERkmk5WZ4Vsqc9HRrmFL2LfWKqo8xZfT7WZP9Zi6rnbmh5fFby7Yq7zog9LS9jmXfDoZqMPqDvnc3sKFEPzSN6",
  "key12": "qVhJgL9tHouWb1SzeGhEGU9pJMnNpb1hhUzDCBPVeHfCYPy24nYkBGKrPCuEiVciiSRtEPKKbj7SiVKm5akM6Gc",
  "key13": "5jmkUqtz5GciLw5AQNadj7mA7SArzKA98asLkDJ67zJL2ZdzU8MktekB4uK6hXZGEMBXoKmnwVR8NV9eHbTbBCwT",
  "key14": "5qV2QKZkMKjKiRb65An1Yu76EvpU4rhzSi9EuUd8TnQFjMB544TTufrxcwfiG3hnJNMDVdyy7vZGwvjggVDqjVbF",
  "key15": "WPpTdcFQ5Ne9kkkpvhBtNRYzbEYEDKZ7rK1gBGF72bY9PbQRbCL37qSjJgNbmWFgnwgAQ4rUqy7YpfueeiG6u5j",
  "key16": "ApEpTpZqUvM3Act5R7MAhjV7kJ2ALANAVLyW7aqGvCPm9sL4XXDCFmoHcobwuHofZ7x1JJ9nvT6xh3UoB79eKU9",
  "key17": "4BpLnW85jDUjEV7sWSGi11XLLZUjM89yoXyA1xQBqnvd6boM9VZRJLzCzt2N9fC96kXBpVSVDShKwuWKkrb52qZf",
  "key18": "57XAqCaBPcqU2VCoZ28z2eJMm89RXt6q68knHF2BG13vZpXH3zuvPCvFuuMNEhvWb5FeKS3K3ESDmoBK7ncXBRSu",
  "key19": "3D1zjFZhkrfZszkyi61tekUrBYuFtrpqSo273yt4aJQ5NFZgJ8wG2UhmtUMCqdsdWH82cHu2gWEuzJfGUgMUDT96",
  "key20": "CRJHATYUq8WnkBp3JUYz2aDg3QCwCDN77J4R3WC5aMwgDeDzgFqnM1zRsEpE9FHXAUzFYnZdPDpB6PwhuGRimG7",
  "key21": "5iom968QNeA1P2981tBvYRe5mASyMLyTzN5rCFzunGd3E2f2yxignja8J7MzuCFhymy4YuNraxXmYBp3VPegJJzZ",
  "key22": "f49SAwy6HFQmw7bdV4eYZLiDDNzwEAnQtG7pYwZ8rciimy3GcnndNeopExT7qJz19D99jBe2GgErWNSgH6jarVm",
  "key23": "2vAiifLug25rpii28z7onVrBogsRGdpq3PXEvdcrd41zJdyebkLvAxaB88jHbvmuSGzBPz8TNqNmsWywZLo92kNU",
  "key24": "57EcY9rdgvDVYLhDhS1CNTkCzVo6yQcJGJ2MEicriz6zSrfvP6Ck1kYDW5saL4YaGu8ZtVw97g6hPuyDpjNNwo9X",
  "key25": "3pRBAazb24hVK8qWwD65YxdoLf2xKDPD7XApKE7UEm3N2vawSFt5WJzCX5DVzhPPYLGd281GtbH3Aso5yxnN26cC",
  "key26": "2aDmmGdQbuq2Tbw93kmjvsucPC156Q3qjaH1ytbn8KDLphpJbD7ahrfY76rxjPgXT1YaHPYfJo8rJDUpDqkujmrW",
  "key27": "3GoW958xXrxWDiuXU3XCQCxoyY4bdXJGPjYSNQMuRU4JQL6QY1zfQuN1HsbEz6DvKfZGHGsUWguZsZfTFkYGHs2Z",
  "key28": "44WNcgM2CuCji5HJD7Unp4ojQ124FeyL64gPKCpXVLzTZywzr6Agvp2sjqUaFsAjqzSbaAHoRBYnQBLMDMy7o24t",
  "key29": "4KTjE8QVLs1YjGSvccRh8ZpGPPWaVx9VZUhghy7yMtA4B8FnFCwjXutnARm3q96qCPYRoyVrdQz3CdSCs766nTv7"
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

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
    "2vC5EMZBrYwq7AyxL5vme23mkiXPJTgZtDSew8JRV8UaVU1FCVwAZT4htCsEehQ8TLpwH7ejVWZnQrMziDQn4vmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "632AzbS8MkxxX61DUsFJxZKtGKbsa7A8hjwz4VjDFYBZuc25zN4D4cHdzzXneqvyGB7KqtjF99Yhyhes4qPhzxSW",
  "key1": "2vYWT2jiVzDgfSVbVrwZKfYvDLFrKZma2UiKk4QPJLVpSuZ9bxknCmsyFmDYvwZDqKT4vBPQyy9tFmLNKjNUJCrL",
  "key2": "NJYsAxhpfNtcUZpzTHz4tR7A62ZHTmdwt5DVCo1v6iow9JLVtgqfT2LJ7cfY8G3L8eBW521sDvT4H6roVFGg9cG",
  "key3": "FkXRamdrsWUVu7PBzxsZuoC3pxrpPjKeB2JPvXUZ6FcqUHspHBpYxtKchKHx8TAPd9hnmeEP6BH4ChPXsxdAipQ",
  "key4": "3asaj4aX5q5gQyvgYdwBwPzC4DP1Jb8AJarN7an6JSMVyDM1wpr3w5KsAVtS5Ma5JYNGM3RGcA4y64Uz1yHjKi7s",
  "key5": "3N6RqVbU74ruEcr11b7nWHj2L5z5L9JF9pJW85i5BuDUuTqun5tcYwxPvVfwez5RPBAJVz4FMw8NPsL8Sq3UQiZ",
  "key6": "4HULM3jgjoJRevBk1nJuPo1unP73urSZpJtXPDvszhoKV9nrETS9Pma66SSmrTRPKuHi4hW9Y2piZgKfNLbhYGZa",
  "key7": "iAgve67ec7162YN93ban8CBskMHrUM3JtzjBAP4gjaxp1nLZMUxKbRJHfYeyzdpriTpXsbVp3j1jTMhhG2vVAbe",
  "key8": "oCGprVmk13jt8hunHnEy9aVYXgEZLbTjt1bLF6YbWofwrZUHAUzYQQ7ZRgxW5B9Bhc1LfdDmrsMKcHwyvLfdGua",
  "key9": "22LD5xy5HeTta8g8himAzFQnFYRFwMFNYWFzF92XPEWRBHVRGA1LJ4gMAB4h6crpKP2FCqLUt5DHVDXvvQWXGyQA",
  "key10": "3yopc1kFVPqh8bzLa4gYeCpPfN9hu2SeNrD6TvEFrDCJZgkSHN7v79MfcVGc3vxPTXHdvodSbvKNBsRNHTvjoyL5",
  "key11": "pTYWEtNNTAkRcXLBUAgyDdBJ1gGkTBoezWjgrDBBngMQRDPYspskByr2xybEUowYvkZFh1uNKUnZbnXsLJSpTo4",
  "key12": "5TsgNPbPVhmpnXLhLjJskMSdAY1CzG5vsTVY8bxn8nPL4HnA6CoeMXwBVb2nvLFVqgJDbftrRjj2m67VMABcr3EM",
  "key13": "4HB2tH1cWE8M1FFZtRA3qqZnFJh7tzD1ME2zbjjVxc5Cg4o8L8q4PQM5GwfhWgoFQFtxEwSDs5LApmXh1GqdVLpv",
  "key14": "3WMaaDrqfVpkoM38sXyoEnu9cEYENbGGdrwhJZy7aPVME4NG4UNcy3ZmXnEsdACXsZi5y1738ak8dh4BXb1B2qfF",
  "key15": "4RfsjpMMpSNmDNbGhoJNiD6WRkRAi5AtvxPFp3s58SmrD9kZZLAv6HL4xeDNQa79txN7PPKaj4XJH7Ya4qARt8LA",
  "key16": "5vmXhwfwWtNqKHvGG17mEQS6HVhsEDzbMG4oDPeQo9YwN465GjGEDiUtkfQ93xbXbZYPoxkZj38tWvsCJgDTSVGt",
  "key17": "pTqmCn22eitsZXrLZKGQEcNXNYDn7NPyUHok27vVQqSbvUSZ998ubqAk72BCe5j8pEirYGrWFoEXYZXhE1aX6Pk",
  "key18": "KLfxPuKTt4M3p3pi4goEcrYbntkE36bZmY3z6xoYzHaGLmJrAdzoTe6Q4Y5uj8UFJdy3HxUhYhh692XazD3JF2b",
  "key19": "516uJ4vdjJrRz3wQLLtduSVp2ZpArnvNUXq9jxRfsz55taxng51tjqKfnhgQ4d9KCq9Y8ixgqKThMxhPBD4MheLz",
  "key20": "55dwikyQ4udEmxVi8qMpB3Y1MS1r1Yg2EKZvv65ddJSxWqfPHLBbUDjQoHxoAMuSzJ6criZYbcxXdPai5LticMko",
  "key21": "2m119ibMpL1as1SS9dTAGD4NQMHwr6HDvw7zhkBLHTZva9nHACrXU88HdRbgu7ZWerDAHcJLfWzZtzJzAFNnMF6G",
  "key22": "5x114e1g7ynZfcn3QpmXHCPLjuX2C5hwyPCGi46PMTMAcvpbRv3b52QfynNqgchaUW9PF9byqg12HsNJQaEsyrpS",
  "key23": "2YgMPTPpTQUBNj5WaPkoep5D6YfXAV5xYSQwJWLGcqYcBWR6Kf2PeuGdnce7no29qPb32J9p5nB13uC1etDkRzwU",
  "key24": "5VdyYjEeeLdJfAd5r1eRYAzLQ5KCyZJ1TfEfWNpgjDgMEnTeA6Pca8wMasP4sfMj5xaVXp3K5qpT6HWFJt2a9pxL",
  "key25": "52PmPbQLHbBXrHSx1HuRkJzQzVzxDfjmWwtaujV8QRjGdKQHgoEkjgCDB2nTwE4LdJwJZMufC9LFryBj5GiyufgS",
  "key26": "5WTuenZLqNotAPswMgz6wcuARv6TsJt8GXYVWX9yGx9RRzMBnxYvio78jTNQX2WQgiJ7CdKoDDmxGMrZMXEdXGsq",
  "key27": "4LRvzhw25Ea5sxxFGM6mQg7GqYDZLw3BgtaLJD4BvxjDxrDtYSyWRpwjMti1whRfoLiCEW46K6xNen8EZDw3t48Q",
  "key28": "3F37WL1v1u9Dso5A1EMP6rgaNf4NyBQBQGdFifbTGQo4AKKuHYGCAR9sGi4xSW9DcZCuMYxW3uRqQAv8cNSePPLm"
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

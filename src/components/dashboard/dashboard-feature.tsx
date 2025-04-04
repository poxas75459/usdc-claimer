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
    "4jjdDuWskPh5nqUhwKdDQjyS2Y4bzLHZUkFp7eV1e385iZE3ua3DZ7iedWEda8ufKx8mSGxUHrz2pbSjQpfq3jFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ts65m3zJG6H81593hsQiZ2GFiRkKq6otfXcaMrMcxi7fTjJsEmZPgttvSj9t7Sq8435AkLiGYZUwrvsfRFBNpjY",
  "key1": "Ctag4iM5Nz8DLzKAT9Rn9KER3awbqet1XSRAwGcdeF4UG6H3b7kZXaFArin4CFAmFqFPL3XEDRevBg1JA6gNoVj",
  "key2": "2mtJufmTNZ1M5ZHRK5tt4rgGz3Z6rDfVugSYYMev5tDR7iiuqPUp7yaijiwCi8DTBPbM9R7hmYhJgcK2anpd8xG8",
  "key3": "2xqn3c71BPkQNt6WT1PTnEFy2MaYhdxwVvscYEAHz6swFuLU4XhuwZ9bxqShLnvXmdwD24948GmuRSpatn2RYAXe",
  "key4": "27zv2hx5shzVBf4ykm8DrWfVCsBTVNPS6t1pwycsUNCA1QcbqhZvMNwyKcmkcFACJQiSafj9wVrDhFsdkARiCGF4",
  "key5": "2ToyanUqaQf5Sg7XwPmheYAFaZ7TP4qU1FgVbnfrGRZFcX6tQxyHjgKTXumHtuQa8ZrSWmMSJ3Ee8DJuMTL8ErZY",
  "key6": "2wgwoyPULBrewosyKmjoeNotrjxE1rAnC7zhkxJ7KjpsfoAiUNEMyt4kVsoHb8P36kqByBJbJs1XxJmsTyCFX1ap",
  "key7": "M6Hsr8kymrxRXWFoxZZQPYPDjRh5V8T6Ak5aKP3rfx2ox11NCMTrob1B9P3zyjXzwdBvjSi1txEbEvbahjCw7Yx",
  "key8": "2KviNmuDWMYJhRxrgRMmTjsFz6yyCvDMJvrWS98Z5biSXHM8rmtgbZmaUvAYhTw1cXjjYc9SPfmsoe8YCPhicaqr",
  "key9": "5EqHBSnFkAvsahRicgTYn7JqxFJC7THgzKa5QX45Z4G7WZA7Eg2P8D6SunfWRC8rB11qeeuWNXbBA3GJTfd8czsf",
  "key10": "3GgWZtuq13d1G1RyvgTEeLN6uJRyvWKqH4GwnecRuxFcez4yq6GUDDPiC4mNBmAazVViwQ5DJMigbBN2tQZQhiV6",
  "key11": "4zRizD9fAgBY6YpQwpx5Do3CYoH9TThtbJd8mhSDpSTwUQdWRPiHdmbMJJnVDx8j1Wi3dK4mFisQF5EttSKecjFQ",
  "key12": "5kch3yt9atxVogTaU7SGBF8vRczvDN4n223TL4TxccBy3LmD1tweBfMi2G5cFtt2ri6Esh7FPaRTN7aN6N2xo2En",
  "key13": "35iYbBywMJfL3uDz1ecodBkpcsPyPCvSw9C5MdeZANcK5A1h1YdBzN8T7YgzuH8TKQyCFHDqDXuuz7VLvv7VjwFZ",
  "key14": "3v24EBaYUNSbi7HEgFH2fdCsbG8FC2doyWyhajqubDhpktozsN8gKTb5nvJhiY1mP2wFjqPA2prbQtDgLcBcH1xk",
  "key15": "4dtHWA38d8NifBsoF6QFrsXGgrN4yKMMa3fsDhM34oSPUS3DUZH9fxV5yABmGayHWZSW699kHhsUHK6nBjYK1Age",
  "key16": "5GBycjUXnpG79mVejs8ZhEgjzm7QkVVDVMi1UJjz2TYDciWUsWCqZ2oGcNxkrytdQmUeYjmGyUuRLh5aegxqFtAA",
  "key17": "5yBEgG6yYxCSCTGHSg5bBBaAvvDzcvnieuRmiUkXQcacL1WcDX34pCpZ6YN9xLzteaWw8cuGGJZ6r1vEMZLQGfrr",
  "key18": "ZCaj8cKWHYAqhsA7WG4HRNJfS2PhweEQJyk6C572LXW9s1wLGDjbFLxgUvia5tnSaUjSCKqiqMeQ9uBo3A6KLqh",
  "key19": "KtbF5f2JpGHfpgNfF2ezPhogTTi3Hk1ME1okC5QdPLeTARky7GV5zTsRep7m1nbJRNnhEkXD3p2KahVxCxvovoS",
  "key20": "3fCUD9pTtc3rBdLavaLM5ZXmNUCPNfko62w17LL1xBbKmZFbKq1zJNTQTZuwfYs15iuoyaWHFpAU3JKGYgv3fjba",
  "key21": "3UXpstEyJL4aeLSQf1mFeWKkXAq5wWCGggwRSL5iUkXTyoPX1MSTULhfNPjhw3NMeG6WfdVKbgPSFBPiq5HiG4uV",
  "key22": "3nCR9WSZgc2Sc6LMroUbNTaMb3zLwqbSdJqd2juJ9yW7NH2RTz9H9nvdu8C3LgLeSVARUVxmHhV17g93rMxrpUp6",
  "key23": "4igrKLMMRYqs9JaDh9M6AYDxJJAywcgQwAKqkRvB4Hy782VzsjM5A8kDXG689VvhSysUhvfuugZqo95A22v9Umsy",
  "key24": "szUoT9NGJJLJzzsc7vx9qWCbXSucQ7jRapPokHDCMopLZLq3o31EqUUwvWB8rygsxbsC2d9u7mNLsBUvU9QLVMr",
  "key25": "2Hjtxphk2UM56LKSuBgFDScq1CMGX8jvnTXdk8TyNVuajkaoW4YN8T9P9y8S9c2v4APBkfoZXTvG4asuu8CbLfcV",
  "key26": "4xfkjCPEtG8eSPQBbhLpT9U1pkUafeCs3x9Fo8uQ64y4PzgDePfdB3gUzq9P4kg7Dbf5CQtMRxuEy9xX23cwr4nU",
  "key27": "4ZkkK5Du86sfzt2xTtQntcX2Y4PH9MNqpNKQcBctwA26eZxFjBa5QMcH9EkcrY4mbc1MVienj3Ep8VpFhLYznbwx",
  "key28": "58SqrowLAH1116df4rC1QFixZ3MtWrhcf5qQVczVNRNNFdQcg847ZnbJ6tVTMWvNMw96nL6DubVJqCNyx5tgVaiQ",
  "key29": "483Wh4Waj9GRM6YhAUgHmEdVXkmDGFwCTNpLBqVhHopSsoa4xVA3ZqKekU8RrtmPCjDVgTxv1anaftUX835PsZQY",
  "key30": "2NgbMg3Q1vqtHwFdCc3X1ZMncgUSx1jhe1X9Rq1CaoPnGGQ8TjF1DdcvwjzGEiyo71vtjN8cP8Cu71Unaxnrxger",
  "key31": "XAYvmR57NS1fdqutygem4TBSMDvEu9aZdrmKBxsEWBSahBjzRL6yEzn362x2sXgsmTRvJMWqr14bQ4pbhD3K7Mq",
  "key32": "3QhxrMJ8skyBDMDqgvJjYdFBMH1WUk3kuNcNrJhtbwdkmFNmhXNMUpo3HGGQgNmBWshypQdwoW2P7kyWURG7Tom2",
  "key33": "66h2wLxxyvLoeoFbAs7R36xEEzjSZydozZk8mdtXg8CJxuGVhQAmB6x6gGg31rGajXYDvEZLx6HAgcWJjWTk2WhA",
  "key34": "UReRB4KDL2JNBYvwfM6AjrxapmSxFvqFQCKAtEfwL2cBf9vKeHCzRnJuQBpsoTh8BHhXLZUEdQwUAn7VpYqQxrZ",
  "key35": "4pUHPcw6x6QQVfsEhsabqvGN9TfQmZYZ6zbrk1uEZzEzFTu2KnL5hj6gagpkrQzooFS74bc5bucKfVhCHD7QYzvZ",
  "key36": "3MGKvSQy8C2qXU3yfYZ3ncHcKXHBKAcmgF7bc3iQbmSqb2UkZe8nhLMGw8fFUedtUJrTT1NAFtGo99FLBxTfv591"
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

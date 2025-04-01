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
    "5j5FzBRgPTC93jUQyUmQCU8WorTF1f9b7sH3fjRBffok8tP1eRVGXrpMquzDn4g4ZDiQK48khR2SnGPfquc98CNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RepqAA9q4zYq2KuUP7DRPnCv4htbuJ1upWQfeCHsFRbwP2HCHwZzg2tD3xgT9eMWAavdc7HMUTLiqg1vYTPQdX4",
  "key1": "3ZE1z7xJnrDdK8iupqtPSyLuLxwGy5Qs6SDMNESqruoXQurSFFCCcSUKMNjFaUzcZ6hcHCfjXYUxK2oyxgbSTR9",
  "key2": "utu5fzKAxXPTYjCvdaxztzTdLW4EfWV1L9iMaVBeNTo8TFft593kwKTwymyXvRwhK5VpVkx5bf7J2u3HvF6LBbB",
  "key3": "256qCUGtuuSj6RDbawyu7rtLSLkyimhMRNjvqKt3bCi35TY6awQbzXUoWdyvo6MUTutaRHnJGHfqPYtBY1qgvtzZ",
  "key4": "5ZirfeuekFtGQ4K3VJkJ23QEXybhpG7zah1BndG41WY7tdiJkqzQ5PNRTw6537mcb5T6qEXkbB63aaioPHFDh5rG",
  "key5": "y9kbF7egDmaoBzcRwGdmWURT7os7nieWjxacofsfYU3R5j8VzTkN7typtjVnkWpepNCkFPbLnET9VEkBk44snVN",
  "key6": "7wbX2uAfQJXwBM86KBfKs7oxTvyqeZmzbPkK214yhYs6YKJM7XzEEjk4BCGBVY9Vkm7Wyj3SB9eQYB7ww5V3bXE",
  "key7": "2BDN6zhWzaJpTvXBehaiQHK9EYvsKiZKA23p11rYX8RSbgC6zVU54NRPKe4qo3j4JzJEL9WKhxNHAVZN3P3PihbN",
  "key8": "59mvtDNuzTYNidmi5812qgn9eLZGFx7PWwx2Asn56H7DBdpye9YPd7fYSN7Q8to8nGMW8roB7nhLCngscroQuFp",
  "key9": "43peZSCJvwLEvmLbwLQnMdvawmC9Wx7GuYaQMq9sGYXUUwBN6D1gJzxqtoDc67ZHjoxFaeAt4DLJp8ytdryZXqZo",
  "key10": "44ZMgNAe4gbL9d1GaJyxtBkFiudqD1uBvJdkkgjmrA3vPTEPu4Mja9zGCrnqHbqBa5g4PWPEWNQTSgkDPVBFmU2g",
  "key11": "4fw4VSnTfkS6q5sQUyxnxen3a7aYA5WrPta9dre9kvAYd2DekLeYeQWKBZSqSMrUVLo8vP9HcFb9BrTaL7YhvqRb",
  "key12": "5oFPJQ2JTnLYrfM6o3rFUja4t5JvPEhvRcAj7hfvsa74RJ3eEWMMwhGwnu8ETTc2q7DEtZKWt31FtHchygfQeGLh",
  "key13": "5MkYxq9UDMm8mBwe1Bpo5Jk9u3YtPtmNm5GpxsFR9ytGKGpKxPvu5KgMPh1kpcFZ178wE9DAUWYmCYku6XWNGp2g",
  "key14": "5WeZXgN9QUTmektXxBfrw3W5crHLHF2Yiwq7F4sr3uETRpNhX1xfVU9EWDM3Jq1YjVE5xVSLAnJAmyovf5jSqJD7",
  "key15": "8AqMXMJDF6FpyftnM324JBCW9budJPhKEWuFDDw5qRd6kFMxJQAKLsidEpLfZHUx3saEvf4YD75NrrQH2Aibqoq",
  "key16": "4epNnUmxNLTxQW65Xr58UCqfMyBSr8AjcamCusfuG2nUdPCTuZuEFP5EYafQhkTMF9nipLhAh9FXviUhgwNzqsds",
  "key17": "TcSUXhTrkLhUr4ZfomvgjazdZuT2wPR4UxkDqLktSdgH8MQ7MmNsiyJEBKgfJm159xW8SzoA51JMnLL5m6Xfo5K",
  "key18": "heibiFWcwturNTC2DBTenHrbhvU8xY8RNuUj59fkdYogrpTS6QJE2k9QpBoNoeXB6ha2u5rXwq7oU9Qu3gBRp7S",
  "key19": "2nNd8ptxPMk2KwVmPgyG251DsocgXjXJDnuGW4agR3u6Hn4gdDVewuvtWauWfqNt6G7XRDSfEF9tVyDhM68WYFZB",
  "key20": "4Lde5NrvmNwsMUFzA6STCpDvH6CUeHCcpuS9g1AMqTPN2mRHW3fhH3EsNUvMuWWkUs8D6NM8LAF2PB7eQWhpHgqj",
  "key21": "BUh3BvSwiKod4iN3skXKCDivmKvdrT3ijLTfpfwnpsWc8uzQXKSWxVHjQd9BBLrbBDpk1cu2pC7Me8mpJiHrVoi",
  "key22": "3E8yH9hadUiV6nFiQ1UFhrUA8DZZX3iE3tsRcajKyjJz3WcKrjecir98bzqFzMCdG2toJcjFLEaKmZLEztTXuNeb",
  "key23": "3p5ExXvjgjwBcQnztXjpK66gWFdNGtKtw3k2DMX6dtqJGtpB9JixHkjYQJEc8ppTsdaMxe8TDsUDcJE23q6WwEy7",
  "key24": "26WZ3vetUDvAaH8ryQYayfHmjVsgDwpwvDBfUj8bsrTdvPCZERZjRLaE7un7e4pNZ9uewEKaqmtxcnFyE62Mabmu",
  "key25": "41me24EbA2VWAa5CYPmuyaiQ2faprrbMNhuUFtUb2zaxmq9iKN6RCXBwwmqpzDG3sKHRPj66R9YpNQyW4HqWepPp",
  "key26": "3xwGuyk9yxLAempCCFGBWJt9Mg1BDVw8iSuwbfvh49E4NZWf4PNuTJ7rcaYyeiRzU6xzCzEbA2xHD4XST3B5EcWE"
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

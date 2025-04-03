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
    "2EPwF59npmsgAWZWESfSrotVrMMyBPBGXHXfRcK6W3xAGrrev5qsfwLjyA6UKuywzV6FfRLKQugyfcr5pxWgFZzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGNUPT16spnHX9iVjXhNvqah45VUh6RcPXEy3fkT3KKqDhMrbNBwzNskKemEp91g3Yngz4nFDj88uJ2NrGKzeD5",
  "key1": "4D3zFJqmawy3njkutZonmKZCgkTrDcxDq6mYct3uoip9crWx2YvPjGQ5vbz6MqFrU86d7euQPvS35JSCr3NGY6Ag",
  "key2": "2cBQ2kYi1f5nYE5s79YaoSxR1WazvqRAcbX4C6GB6rnGK1S16ECpzpjqrRBq5Du1eTMXdizWhWX1TqWQitk7oFT9",
  "key3": "3iUtFTMx8viwcd9Z2PNsgoT4r6K3UX3dbhZDGL9MLrCmAKejDtMLFLxK6nXNSuoifijMbJjEuPSGoVUQe3EB3x8M",
  "key4": "3dx2gdb42UhWqk47LpP6tfdwDNsychGz5H2KhfqEV1ZbNA2tJrYduQ1UN1HUN1xy8VmwdNDsveHFuaZtsfQhWgYE",
  "key5": "3xtukTy5UfFLzHSNnYxvCBo4cYtTMSobvAarvLmaLTDXdLEr2Gdg2u55f3oGqjwcnzxBmULbbh8rQDndfBr3gRw1",
  "key6": "4VgEgz7vuUZNn92gBi2Yb29ptSnn8Pbi2SJqr8nyQmpCRBNZGukAzaH3bSXB8hgNErwqM8xHiqwv3jou1ZLZT2Xn",
  "key7": "3K84yKMCRxr4tYoVwMw5km4kbs7bpR1TdmWQytPNSJU6sfwsVqSuL3HbwFdf2rcoNFM6upcuvEjBC5R644SHuNnZ",
  "key8": "3Z9E3z4xLaifkdZ3gR39sim6RdMDnf2cqSieoVQEwgFV9xgkfZxSn8ewQKnJEbhUaJUbcQqoQ8E2SZRVTvk4Y2gn",
  "key9": "3Yh6TYSi8aoKNmZYeoXozJ5PE1GmH8jiQbbRSgRyVPqjYrnBbSkkdAGNLv69S9mjFCthUi2oGB3TcPFQgTTnua2D",
  "key10": "4ot1M5bbqxWpHgVchzFmJYhyE3B5jN6syEHxuNBpgVrXb3FXUi3sQgQpM6GRi9cUbTQcCyiugioyeaQw7Em9wTnQ",
  "key11": "3oGQHi2jQfLzxzpbZ9NkFv26aNKN16KbJqWcTZeQBvq4HuFp9nVaiDfUZqm9MZnEYT9cxD5KvtFYqmNkZS3UpXAG",
  "key12": "4xD2b2qQdj7HGPjz3rfPw1FuLhmbdBCfdBj2yfcf44N6p5RbUfduXo6j9fKVLLrjMPZ1wdBSMwSqwVDeLoJ3Grhw",
  "key13": "42i7Tbm4HFx16G5vKZb7ZtMEgKvRYjev9srGQaG9wKhk7fo1bP5iSEVgNLvBm8SViboyEMDkHLw1FZ6EEvvsgrfJ",
  "key14": "4SJ33tecnDT5v3PxmBdaN7CNd7rbHdyK7nhtNYRttkMW244PEXTv9etaAnTH5Y86tHfq79zPGchAUrRZGetx6asM",
  "key15": "3g1mbP8NRntDQvHUA7q6iVF8MEvJXDmoq8XamJCaeZy7syNRvyJ6GHzJPqzDDTG3fJvH2VeeHxL2EqvLALvE5ioe",
  "key16": "3BkbTPFS8uz38KRThCxUJGwZDq5WcRaGutWmtv5SR7m3TqdN844NWWrTVXkkBTWyWMuVKgR2yzCDHZxVbk3NFVYr",
  "key17": "54hY4ib5VXaVcweSNpTFBSmumTSVGwmJhGbSG1xYLvFDNAzN5PD3MD54iEbNoDvedK35CznGUoStgY9jh99zaGr5",
  "key18": "2USpuq2NfuPo7TGuzxnQF9S1m3sy5rMqdA2SPZRtd74pzzGruedqZVUQ2VTxYt7aMA4gbnoUKJ3eviSiMc6VJKPy",
  "key19": "jAmCgMiBaFCioyBQopQe7v2Yjj7MTLqvGwu3o4XcZgfGrDsakvWHo9SHwLkgFQ9fwy6xEQHnKx4KZ6d4KqpDPBM",
  "key20": "5cJYg4DiFVf2dz4g8GdQMQEbGmVFRKFtXX4peJppG4VyCcrJbNzk5kvQvqPaUcURnBmMFU6EfnHXpymPf7Kaevtp",
  "key21": "1HjcCtiiwcRuv9BoLAsnoZhYRT9cPfL4tLnAU6vj929G7yduyuXVm1AjEnGSwGCkVDdfYJtXPCPJZA7BJuQPJrT",
  "key22": "38mzAdYB3iSa7qXqeeUT7PRknyPC3fPzVqqtrsKNQJQdf3FB1kqkCfCs6wr4qMxCzypXyZQW7aaiDUMQFnpvmxre",
  "key23": "4Td8wEqxkzr6Lbe5oCdPvtgtgjoAoUj7b33sRATMnU19LF19Bou9BD74bEDq5fbamYzQXLsAyJCL8tYAJCa9d1kr",
  "key24": "55p7dWdXWqZckPghJM9RnfP2YPado6Rn7c7GD322G1fqNJPenCdp17cG5FfGYMU4tcRhGyJzD7fXnQvPP8eW7DC2",
  "key25": "3mo6gp11g7RwZySD7Nbpv3BbtniekARvy3annq7hnuwLMhRhpUpxB7Mht3yq5sfxMz7rYwyMCb56HfJ3BYzMV3eq",
  "key26": "3is9ENm2mT1UiLHzS8ThC4e1FpTZ6bgsFD4DApqPFo1TBQjQfdi8qBAMBsmFSgXPdqvSAjZz6XeLfCm6Kbr87ntd",
  "key27": "4jv3NCtpka3xGj6hMqfKZg1jyVufBC9w8mgzAXSdN3VhjeudR3PECgJm2UavPqU498C1XEmKBNiEobx3ExHPGn1Y",
  "key28": "2GRRBoSLnDFdpuv7dnn7P7UyHWG1A3DFZTHBEvviB2Tub2JzZPa6aD6647CaSPtWb3kCxaeXc5i7XVBEeNnL7MmU",
  "key29": "669vaWbUr4CTqRXehU6KUDN8LuYHsv3AkdShLPMrUMf6t8zrYn37Fw2ZCNRGhdWV7HvQchdkRhErkNwZeu97oMte",
  "key30": "5MkWR1W1h2j8MX8z2kCmktfFjfZ511GQhdZeSN1R8ZHJvv7VkSSbcK9j55Ud3QUMEpYxYDcUVtBixF6ym3fW3Wog",
  "key31": "5VFg75Wg2RhZvVDDx6svBZ3bDucvJe6pQzDzvk2jwi3UzAH45m2xLp4gZEG7oDos9XAL9D48qc8KHuvMmq6GQdTX",
  "key32": "3okLP7hXWHC7jmLsWXauvR5A85m6ef9toXfgyBWhgmh7gDDhX9CTAJYzyxptM4nos5K3n9a5WV9om4UdxskJcEw3",
  "key33": "3VzupJ4i8g9HRqYLzBju3TpTJV86eHcjjB8etayRSMg3WieAsw1ivxLZRDMZVs58bx14HFfFk4ssFd2XTJ4kc176"
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

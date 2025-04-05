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
    "2qyz5eDKpG9jdXGpRAEXmyZgjhaHpa9wPRjvByTeJQco75iyESPT23iNEAC2qdMshErfuYDCVPxZiyZbTVdYQcWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c3bS9WdXzDeKtG5as452X42CjJvmRUk7AzRXE4TXicrP8tD5518KgHET469GLYUVxSZEDnW1ckRMTEbpHzaHCFi",
  "key1": "5ZtQtnNCQXGRuUcyy7Wo3tKJei6XARQMCR4i9jhLrNGnRk6bzTTnxU4t57aFZUHDSyWHhJVJbqGH4ZaLePTEZBQc",
  "key2": "5rmhdcHXzGPBxiuuiHvPpYWDAJ9hq8aZrFf4DJiUVpPzUxs1AZdecjXkTEPTnzB2wZRD865R8PsQuGHkgM2xHqSR",
  "key3": "5hv8Ap9LVsUUFRcz5Njy9piCvgXdBqDAAyBsycS9jNhRwdhUP2BV1doSiY3twev3hEexVJ1Upz42JjXhdgxupjJS",
  "key4": "4vEXs3n1X52iZtSBqU9txfe2CKBVp1npiJJ3PWPJuRHrs4k1ZESA2gJYAsppAQ8vhfqFx9kswpaGZFMXMq1GAV2r",
  "key5": "47CsHQcjksSfnLDyDfqQwBScZeA41av3jR5nRa6MN2YHvoyPptZntNCzxaYx7gA3jitTJAZxHfhZsveC5PTog1nS",
  "key6": "5LVfcbPBAe4Y7se4219zTMnDcnYWZ29hmQVnddeWpt7ov2YUPbAXyYE2bG15Jei6qVdL1BDXsHHDMV331hVDcsHc",
  "key7": "3XKTJJ31pzMhV1wuJLCFwrHA1fma9pbo3xnompUsPCqiaZQKVfaDZFZ8Gx7ViiGH5m9rG4BYAWcHeN3DgMAEoyuw",
  "key8": "PE2cWSunj8Kfdi4UxMsQfxUi4WSJFtANAZ7C4g2mQ7vLgMLrJhgS77e29sC67Yt4wrsXw9kcCLuVPthnJvPvvGM",
  "key9": "2wniUYCMzjsEdKdD3nwne3s4DEHLYNmpCVZwkfCeN4c6n6i33htfXicgKS8STUKkCFoz5iC5AMKnNXAkmiivTPkQ",
  "key10": "3dqRVb8ke1W2yQ4mAby9wvJfQMBSnw6znkYHpb3ycC7YemugChX69HxPr4rZuzNNJ545MF52M9vRR3g4BGqHEFju",
  "key11": "2uSjjkYZBejExRiftVniCPJ7kbhw1j6kuTjZhcquTFrH2CiFQJ94dHen8aQwdJXrXCNrufhVrsixcVt2UhEEXcPN",
  "key12": "2XPCpMTbdNFdhmSoEw7w9Ndrufn7CG7fAFd4ayZCkQH2pZa2yvUyq2oWUxChPGmDuQwiAoZ76w5cGaLSpc2KaMFN",
  "key13": "4yUGzpqsMHGoJXjHkHFhUNEb9MKUZQDCNEoApQ7Lb2Lid2SheQEXNngdTSe5V784WTLaF5RnCFJ8oKtox4Hzq4xK",
  "key14": "4AdGGQ9HwpJpqTfxNm892ueDe9yU5DgUS2iQid6r3qbkmXKj34bBwAYFRgCRAWMDyQ5ZGCtkZxcF5vJzPK4UBvWf",
  "key15": "KwPEzaoS26Rze5XT1AQURLmNp56NxMr9NWDtYbwdEsCrrbq5pgomLBvMLrJPnwBPdMH5cMdiqX7RgECz9Z8NYn3",
  "key16": "43gWEMZY832zAsdtS86YTFcRpwLgm5ZkajXyMwMZQFhKc4vYwvJYUqQJ4dqkCCstQcaphPFEiUd32itwEEWaGdmL",
  "key17": "5PrTLCek3c6XUNsMsjGuFM7nCfNT7s2oma8XSiYD8SV9GWytdw2YwoQZD4XyNYdKCztk6vX5w7X4yNVk2PMWHEZx",
  "key18": "5giQBLUTtzXdHeE17hHV8GnMyJTs1GNA8XUebdvieGM4Tq2zx72EvTLpMQb92Wa3xFKk3gTHrzQ5iRmUjT3iQmW",
  "key19": "Hqof6LBWjqSGyca1A1NPiRqn1rrbfyQ7kuT8pL3EtGsBsqajoPqEsVrvVabiKASAKKRnA36WeohTiWnSSgBa4S6",
  "key20": "5p3WghpcUpSZgTZharKs4rYUEaDjit2bEGstRpRbzgaDRPCfohx3JMXLKLzxJP1FRVDBoXuVyU2Tb8YyWD4vAx3t",
  "key21": "2TyinmymrXo3ARAPg3FQFcajqhG41SiUDQ3HJBsxvvR6mhSnaQ2ZZeuU1HqFkexwDFymBfWbDzqfEHVsS9RsCUH7",
  "key22": "4S3BuU7JfLkPumCvLqNEJ6Yc5fGFa7axa9UxAgEguKDXBpZxRRea8VddKDmEpy4yRGfzUfNSKYkhZ7z57qfokQZT",
  "key23": "3obu6beSbth9cqQiqUPryPHwyLigbAX4F9LWD9BRyZSabrfNeowaWZCfViSj3J7dTaxsJXHGa5rFUhFDKqcGSTfx",
  "key24": "QrCkPRJmys6cbBvgoJkqatFRhDPwRTBdrv6Buv5AYHgfCmBF44Guzqi8m8kAgH1GY8qXEgZTau22Fa9JZ5jo3WR",
  "key25": "2ypKgLX4MsHZFLPo2eeqJcMWZRMZBr4oJ9cTpwYdM6Lr2apjk4Fz1XwoKmGFcHNEWGNpcru2QtZCDxhSFZDdHVgD",
  "key26": "46cqQZfj7RpE9A14hLAwKb2U1ioae2TvgpqkzvPAcotiGbN6MzuJPcMWddCSxFn9JJc4YCi8E5mLr74t1WEHjvMR",
  "key27": "3cnW5ekYDrWdY7ZeBWfD13c9nfaqK8wEkvqEMDBnbrsE1MKacAoF9pYAZsUPbGdTYXRY4NiRqUHSgwUgMnxvhRRR",
  "key28": "28o2cnpzWepGPHE2t3fgn9F4xP4XVDFvfTLjan4cCJcBn6GjCDfYecQnm7Vm7NCKWbgt8d7yUsqirjQPMbvLUvQr",
  "key29": "365orty1ztZrhkN12qRkTJZCXtLrU3iJFW891hxy3GpU8YHuPS6e5HdmwFqof5RLyd8kJ9VZe411vSd6iZQ9Rm5J",
  "key30": "4EijGnDKLKviXfCJamG6dEvgNRuGgqAAMrEDscxzQMfw3GJDGVZxozmSh3umDVSDV6Bds5pNNigbG2YVTw2f3XVX",
  "key31": "2iYrmaonSARmmHDNLeibFvkFrG2QhM2EXjhTiF4Bh2i36N5MwzMdDAEjZV8BmHEqN5WLjJwqUYz6RTtmNRepX4F9",
  "key32": "5GT7irbTLv8KnSxsoKNuPjrkAeKfJvMhhDgs8LsQrhCuPtLy3ToTfshwvCgHFTRoV634VCJyHLMe53TV4mZLAcg1",
  "key33": "5SfriK4UtNoiixozKrAPdcHXg4a17HopbU2rAerBcv9nwkvcUjbZvb7ra1eSHbxuDXGdQ1R5ySgGY2GXBWV5rrrt",
  "key34": "4FE7UJZfCvt5raYkxyyoX3ppQBZ1Xg68RdH5PgnesJsz4XFaQAmuECrikAcsdm6eeuNVxPvX7fAgqihdktYcP9C6",
  "key35": "625kPJpxN7e7pAYssW7s3qamnDLk571W8FbXML9kxDmzq4n3U7qPvxCdVBLPZknLm3XfTGr2YLveJDn1mRdm3K1G",
  "key36": "4ifXnkpcZzJsf7rEm4PMVyzDEHFVpJ8NLhPE39oNZurY7teGiC1ajKurnkjKf4tDLgFkPmpjqLaGm2Mc7nQzgxkj",
  "key37": "4nz9WWPzTkcyg8NwULykUAAPy5cCn7JfposPcLFMRPFdgihfsG8qrttwx16xFPsk6eVYavtFmeGZz4kmEWy1eeSJ",
  "key38": "5VDUnV22F4yW1HU2mcLPBkBJkSQrDEZGjsHnyWbhUhYUwpPduykZYzcbNJg3uGF4SWABPBUc3zke2NxS3jFoAzpc",
  "key39": "3QZPwJULyA47omV8X6M3gMY2ATnJkTRfkDVMCtDBSQBvMpKrh5TAN7rHA1dTXCSrFuTXAMdGLA2VH6Ub1M25e5Tn"
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

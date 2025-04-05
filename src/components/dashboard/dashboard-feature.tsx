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
    "V8KfLFXyf5YWZ9y6EZNLFK9ZEnEXP6JQv8ahtPGv293vdmvbfWpR2eQoeJsjEU9yrZanshwuLzKxeAW1RjzhAwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvtZmXd28wRbpuQbpKX8GPpMSd78NrX7RxyufcV4FFum2gjphsdR6Eisg7YPwH6WjBiW9b12AFFSfswYZLn6cUQ",
  "key1": "5waMWa4Ub3f7E36z1RzrknZeTFBED78pM4J2wBCtCLSieQHhUuTBC9nfzM9YSTSNepogQS65soXVP8udmb9wUBXn",
  "key2": "3zapdkd6kYoHDH7N1XQWw64V9p8xptXdcQ2qegK5oYoRxGC86oWWq9WAdnooBmgxBD4PZnU8hEyhseH7qmEQKUAn",
  "key3": "qSj94sbpxrkX49M6v6GT9uKsPtRtAptQmL7sHFJygF3uDcMDGzWqN4A1FFMCvXQJsKqPNvR4ERpBcBxX3SZLWcB",
  "key4": "eeHedJ8xwcLEdPxkCBGRni5n9dck125xLJ87XLL5cNHDHASNCi8TWgcbMXwnf6ZWzEegSHTqNvFMcSS353wvnPM",
  "key5": "5VYF7hqoh1J9tu8EN7hAsW4nTCqGTbmKMYSxNspzrGiaenZjJCmZJGVwHHZWNvMAwVpAVzy1v6HnApS1TRnkqbK",
  "key6": "4Wz4WhYKx6Xemr12JLFYWZTBKAGQxPC8pTSmmPSgv6Uz72uUir26LuQqdRJG1JfNLiVq3zu1AAu7Cek2Ve4sySwm",
  "key7": "2YEyms4FeJdwqdKdyp9rWLkMXBJiUx7PN4y365YAgFPFwB2mXuLS8AMCjFa6BmuJZHJtKjrEA3KPMrUFNoQkNqnc",
  "key8": "4E9dJuxYUSZkCt3idEDuVkGAFg2SaD3YYyG1rEbMfWre76wbFG6JsfNziK7jEhS14iN2jmNkBpqCu49h3AUB1tck",
  "key9": "57jHgPzCFBhNMs2cE9A4MB7hJAGwtLwe193ULdHXx1NPhFCxmSuFER6wu6KPqWByCVvn9yFVZfACDnrfaXoR4Nvv",
  "key10": "4VPBxEGLuLt8yxgjEJr6ukkWUEMqj4ZECniBnnnL3ABUrgagDA7amPB9CHjrB96eRPBpXfCvSBMWbwh6ebFqnjXD",
  "key11": "2pzNCjvtQGZoAdNBBKUC5cfcVadDQVP3fFmnXB51962BsBYsAT5CueDbLca3qC3Rhef6GtpPGm8BrsJGAm4Kg8JM",
  "key12": "L1gV3ott47mcw2m2A6Pj6BYGjZsxdGLfVouN4WLnGLCvi7WT4i4zYMHU8fmQMTBm6TLmqPybvNoDPpokB3PuQ4P",
  "key13": "5SgXXRA13yRZtFKp7wDfY5Gfi4Zp5ntr5PR8aQxRXFJTsvk2DowniueN8nscsivYzg8vmGFrqtPd7yPUkaqjXbzA",
  "key14": "4388FyrN5CwJ5hjhSNBjYqkXnUBsmMYvXgRZHQYAbSWAbw1At4tiRdrxy89UKgx6NgMRTavb45U7hG3Wp3zg5CLh",
  "key15": "22mDPvAWbugxFQJuiCi5sYUVVNG2YPTAQhWhvFkEwzfA8S5jFXM93phBfSWyjQhekfdDh3yVcR87Nd9ZrqMsfVEj",
  "key16": "2hsf3N638CSb7B6EpmQLtySnSerejfND5D567z7fHymid9vXasaPvrMW8ppzUrBDFEEnDG9k5TmGJXgN4xNrsry5",
  "key17": "3F3kbC9gNyv3KFtCVNnqnrdsze2hydwHztH89uq8MNqtuoEBUKwFaoPV8RDS9D7z99cYeZqEuhCGtsJPW8Hzrca9",
  "key18": "5Y5wTsAgon8bAFrV2fRJhDrWspCBE2gdDxeDDKehoYvs8WPVTZsgSZg7K1VvGq8BAUmNiDpgXeuBamsgapc6ZEMC",
  "key19": "5xrFR3iavoeCyUnCVFPnTG4iCXu3F61YRgbEFiPTdL97AaQepdgbYvd7apKUkWZs18s2iHVx9HNK7EeQEFM6d7My",
  "key20": "a3FG6834gcu9ACNxVrywTKEAoUf5kiUkehYdFddg4SKfjfLUYqx4fxaKVDAY3bX7xEbRsjB8YYXiqgTaTnNrLWm",
  "key21": "3zoG93KCyuNAZaLVgT8KaPit63wiD7yT932zHfTM4UeQsBYQmTekgwNBFjria4hJou2FzW4pVNCZYQnFYq5e7Hnx",
  "key22": "5BdgFudz6fPs8QyM8hbsc6qdP2KPCD9kMFh6pTEbG3uuhpdrTt4SryurZ4omjNRwc6h4dn7R222U1C94dEtntUWt",
  "key23": "28jNEhBSQB8BL6biN9Cy2Dp4PvwofS8VXo6r8zArhCmgusCEbSBoarAmDaQbaXJVVkoegRYccxuKtcTgNG4xmiyt",
  "key24": "sGJdc8928zhCfVKdHgj9AZfpma5kK7JQvjK4WndoB747WP4uht5yqS4NBs9b4iiA5kifsE5U8Ajr4872sWHLcRp",
  "key25": "5oVRZWDi5zDqSF5nxYDNVmujsGA8uUpTTuSS1XcgVm2Saf1DaJmkc26AU67S8GCgFaGhbDBdr8VYdWH22NB8isuU",
  "key26": "QHiDc2whSi9mYt1JH3NJ3cE8KeeTbRWgkBUFyTEUfuD6jVNWDjohZnKayR3MMHEM3u2FLLPhwxAFaF7mfXyxw3n",
  "key27": "z5YGkzqaHWwHBiwH8VGaqdCSZi48mXQ1ME8o1LqwZw8EkcfKkC3NzeBExmM5J3Cndhx5kMgrou6Yvm7uAca9o8R",
  "key28": "vLzaZKQURKE7bFN7YCGwWYzprXEf7tN2MYBM3jBiBTud5TTPFwja5eqjDUJ7Jwev4FpXGbhzUNKZQeUrXozBDVa",
  "key29": "5sD2kV9WjkntcyKmodaKxC9dKquhtKPhs47smkRPrQF1bVZFhZi8X57FA3SE1AtUYTA3b7NJQWNz9BddgBtbnjE6",
  "key30": "4P6RQAhi838xVbvKwM1MovnbAgGvNorxWofJYjT3mK5Bh1FM4mFEqCcZ4pQhsZTiwaqW538wJTNtUCqxspvLtAp4",
  "key31": "4DxMG7opex4x2e9GeQMjRhmS6nWcnyAMp1u2afmg3rPnDXbdBQhcjaAASkXBMgMoLeKZnJviG83HWz6rbQHF8bms",
  "key32": "49f2bwg2n5gxCNRaZn7Ds6sEptGx1ZeZn7o7LNEvXVjEEyXkngmEr7Fk2GyzHDRcjGzD6X3bVoMyKdZq6hbPB6Py",
  "key33": "5acKhp5KXjFdHDJ5hunSSgYGbgzdiTBGoKyP4i8aq2UVkbNSxxTQcNogx1sy27APnSUZh3ERyuGV2dbsoBttKyQc",
  "key34": "5wjqKByNvarVgHzAW2MJfGSg3gR2SUTAveJvRDQaPFTuAfWMenQBuGS5Q6NT2G5gSspxF6Pvuqxc9NZy7FgvVAM2",
  "key35": "3o2sTLtBgHwTsWWfcuMTtZWn6D1NUmpoNnRa1eDm2TZJq3Nnb5s2TytxrV7crmYoqC4wxJeorpDjDMQapkmjTYGq"
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

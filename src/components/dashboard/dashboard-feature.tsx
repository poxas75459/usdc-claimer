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
    "4zf8UFwG6XhQTVrnus5p2yBzmERapWwFhtsvEwU6DKwGraag5rRm2zMAJinX6ioRQotG9jASYx6piLMVFSAezDmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52YuzKzZ1CGEZzwefTxYYJ9Zzmiek7XgXaW91BRMczbkuGyJTGM85S7y5YNnUgJYGZhGAohp7P9HURmCe9GJzRRZ",
  "key1": "5XCB7qLjnRSx8CMyndzjRGFFBqJDWBowh5nWFHkJLgiDPkQCYni85sUbXmnw6G6LQLcx5Lz2j9CvTGwDrfigbVsy",
  "key2": "2rSxm7ztdB1GpyRhD7UTCs4z9uD2UqycvipAqEeHCnJEoxA5Czi7CzdTSFQmBves4NDpnFyiP5QhpxkLaRhNX6gy",
  "key3": "64V9WJKiGH6tM9k4fEwL5dQVtjrZdUQzaLaeBvs1Wbjf78RZjaxysMtXWiraTaK11gULQYJP9zWJiHhAJWbFnuYf",
  "key4": "uzbudactrNX1sD1PjCR1i3Fpnhy1HemsnKcXCRqgcNRXy1pYWBfHjLVpsMRvkW1g9itDqYrLCecnfdAdsqetzkH",
  "key5": "5NBBTHt6WCACcYGviciFUuRPv4avcGEH8FRCe2sG4fhFzfDVpk7dqJ3AjHRhPQb5jJtHcPQk2STF54BjJ92nPmHi",
  "key6": "5jqbCJKZLcoX7Ytu5YMuvJwQRhaFKssTdSxXBU7phba96fz1u3wjAdPqtDT7Q1fBzXYFMbs7SQ8TXcQLUbHk122t",
  "key7": "CLymJzMrQX5c88E7LN2bdHYaW4pRmfnchAkPxoGVdEzMfVJUEdUQSoqDfLwqwzjq5xRfZHDeiTht7W4qLAUGsQS",
  "key8": "tERJpY5vzFF9NNB5mhPLX5NUatDZnUVPAdcWmmqQdvcb5pX118viUhPiByAfoKhpm3xtP89U3Pi2MUsCndoV2vo",
  "key9": "2CsnjNPy4jbi4VUVrTpaUAEQ3oZKRE5wpLBU7EQ3U7YjrDJSwmdNnhLeh8ZF5dRmgfnkH3xBxFGkNfGDuWMwoViQ",
  "key10": "4UY2JS3nAbyMnpp55LPqnnasuwuW1sywMAx2zMUuQQUS1qpX3rT41jN3x1vkRMqLFsQyCAhi3H4g5dPs7nkAZ4u3",
  "key11": "4GyB3bZXH7eVDFC2Lvxfjajq8Hkg3Ed42d455N7gGkbwxJgFLWkJzxb9HKhtSCosiAnc2vMSrFcAwo5FBCri6ygR",
  "key12": "4N7cjhK5T3j8K1oXjtM2eZEf5T5nxFhtJ7pQkbyKZ6kUkM7L7wNmoMVbL4atTtQRNkH2ntiWctNBE7GuRrKFL5T2",
  "key13": "3PZiHPfJTZZWX4TjdtWmdKiAnitchXaRhZyPLbujx3JC9AjyRjar4YXmVDBnk74hcP3JCqaSm3arwiHAPG1zwCeP",
  "key14": "2W11ZMTbuR8SyxboKmz9kt5VFW6fexirJJZauAYXHFgN8gKtiqeLk5Eo1ftPfdgj7mLDeeGNcfXeSbqw91FD38ar",
  "key15": "4JptaD5iSkdL1Lkjw8FwCNvnP8ar19n1GLc4JHiKahHHE4EZSPHJx6ybyJQ641GkgEqkLc6k45Wos2Zq7ukqJett",
  "key16": "22qVFTVHBKU8JygV1m99opdPTap2KREHHjjUV8iUq1P4bTCVGmoJNUWTG6wqfD1ZSBG9cLow2Aihcs1fWLtwWaGs",
  "key17": "36ESm9tYSBF4nwGprRobMeuv55UYt6SruBBTEiPiobh3KvQKcpK1wpWGU7xRBCE3fb9Dhi2nwb5cFRuCmtrZcKgA",
  "key18": "54irQGQPMbQWE5AqzRudMCFBDXMugN1RUP3Ny4G3HgYDEzrNeDPEBNgPy9FbR7VXgY3K6TXE1W84oKd1wuUGrZAb",
  "key19": "TBSYKVJh88ndg4NYTg8hMYhuQyEaJotiYyxQZXCrGtNQiVx8w5EeXrDjMixc89LjKDFwBXuJgMUeZCiW3yX34Lu",
  "key20": "63d67U4GWoSbBgi29BKqoaaYFH2T1dpBD2Ne3eoabXhDHJ8iVZchvFejbrYCWQzfAhXL5grN2yXmuPiQBA4z6s1v",
  "key21": "5RdXmrP59a46yc23c6CZfouUAD6eeGYSadATiCnb41JLyRU1nJfcj6aFY9Mo8MjPETqxkcuwXU6Ao5Lv29jjS9XY",
  "key22": "4Bhg9ekeDnfh2q8QMqrPZBp4kS9doEHddkC5Vo53tthhGad8tHV6ZNsyFbFJerGz53CHFNZoGQfV4jQgrRxyY4tP",
  "key23": "3EwBHE8ZQPVc7D4WZ9thnApfypGTiZcn28rMpBuw8nVdwyKgx65KVj8h284YdhnHFJp4WazKwBAnrJ3RsuAujpVc",
  "key24": "5PqXh7f9k1zCzVpH1j8nyW163ZTyL7abbaVSA8Q6q7rr4w9YduUE9SEWFRDHPG7ERwzeMnjTs1cH83kNMiURoRNn",
  "key25": "cjXheBt9zwEgFEDYcnQnMXrcm3JWAZqkGiEXUd5VyHRVTDLWnzPr2TAqgEUez3giAKkD3RvFAKEFPpPQxx6bRBC",
  "key26": "4obnajNo4GVEWFLFpuKY6YP4s5UmSMMaeWGNqhV9QqmF6jC7VY9fH8FPPjq2ucRivbuyj9bWCqjsXJGJNF4y1gBR",
  "key27": "3nV7puTAYxxSK7yHLPqn1n4TaRN1exqMaGnhua3KZ45Xno7uP8mHT5mZduuG7R5G3fLM2ueoJ6aU8WY4hnnnA9Rv",
  "key28": "ZRU68VgqKPpETz5Efx3AHZ6V5waCdGnn6L9BxPmjeqgaHMnoNPZRgF77avF9WgdUSiJQ4ssvzPMDKFj5VtGcbp1",
  "key29": "27eqtJdjo3PXZ1JnCGBKj8vvi5grFu49csgtnE8PeA3uCFtbhfkHT5upVnmoAGFKiajWNPKViMQfkVELkA8BAWqy"
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

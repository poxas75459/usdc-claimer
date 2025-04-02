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
    "51tFFrfX61hgrCSdbLhtm6a7hQtaQPX2mGcjJWDihrPgn4McRnig6Gjp24n71XWFzRgPp9HmfPnnYLDnp5hDeE7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314hQEbaoofUqpDMTAAHn8vUE4x5CiE7g51sK3prjTYSfKLqkSfhEvhn5Eped96csyKiQEFvwzpNURNLpuFWnDH2",
  "key1": "5BwEXerDnctiPVzJ95hNYR6idE4NnNUCi2pqXKBTp9Yt3nTUCXVriMdeffwVUksoUF4KmCQ4RRA8wRVJqKrfeFaG",
  "key2": "53FDBbsLDUNoXNoetALByL6K7NqBQspiKb9MVJpoj5KNqTtdZRnVPBxcmEmzRvFC2xbZM9qwWMgZnXSJgQYFACB6",
  "key3": "2HSMDfNtevhPyHc6RpANyUMcSLosBSNhdbNXB72CQ7gc97zM3bC38ucyoz1R2Z2G1uaB8Fh7tMzzyLHV8pGoYcfS",
  "key4": "xrPEFLvcTxDFnpE2NLHZFLySfN3kNsoadLsAfYTdbp6vsnMBPG6w1UVBoHU8d1PCE7KqpKhBaZHLRzHdfUjUufR",
  "key5": "5u1n8NDpZLLtycRornLTZZVGh2tjQomab2pH3fm2b1sQeA7zFVuLZ9R8Fet8m9BtskBfynsEVDyQeP9aiotkvoAL",
  "key6": "2YDUXbkDS4tCsej4UUQkCTk47TLrBNMjgv2TaNUT6WKHyzix7sdPu6UuweaXq6dwa8zgbzXSkpbv2DakFibijupC",
  "key7": "5HwFE7isKp3FSWARgHQE6dvUUzrs9bigyjt4zGHcBz9UXqRppjKrPAswvUKHvFuggJ9SKo95errjMijTj2vQwv42",
  "key8": "33Jhg3fcM9ktvboekPgoPRamrGpizpcqUD5h8CfT1dMPoMTdZcsDjY66RBBScMKjCQtdF7Npc1sroNJ5AyvNWX1L",
  "key9": "3dWFaJMuTdmKg5ZbBUcojkKHh2tKJCfoTjEQ6EtrCwtSEoMkHntETj1ajd8EitR3692biXK1pb4knqAZYDwaJr7H",
  "key10": "4immeFm9ft5EiEamrJ3ZANB1yokXMua19iYaaDjWpc4svVcb9dXMvj2r687ufpoEeJpotbYXwHw7LuZ86R6UH2RW",
  "key11": "2uCA1Mu6eU1QHcvuAmUst2WzN1FxgC3CiEaMGoY3URvfibW4KUj28P3DwikC333a6L2fqpsqUWUGn7XZhfyYqLAf",
  "key12": "22dCa1GLHHNtR7tAnciW5RxcfPrgVgtBvyZUsjJqUvT9tAAfGi2R3MgoDaPsnbkFrBVqmE1oyZvRJ8ms8DRnNBCM",
  "key13": "5EQ36QYVN9Fy2i67uPhqhP7yQeQyEtH6u8pY4qXJgdJyp4Uxo9STCPdpCqSFTGCNrbx8TqbNoxSe3qoaGdiyBrYn",
  "key14": "4j81cSSCeTKAAfhNtYmLqVjD467VwrfPceHx5KaFzU5C4BP7xFKQUmUZfn89iZPe8eTMYZJDGzfJVMVg5tJWX5Wc",
  "key15": "3EthnJ9zu2RJLFY5zB9VSZ3yTKUtC5nxGPKJ1AjDFb9zZpSKqyqDd5povSSFNvgSwuYKM5DNVjQkdDsi1Txm4J4Z",
  "key16": "4WcAHzDejMufEssTwaz6xBDf9dKMUNnLkLE5mfy1wEkCKjSqzLPQNx9B7dg3PWk4ZiyQo93ZoagjjjS5ZVdU5Vrd",
  "key17": "49Ar8mM6qVJPGRL7s6iaBDTFxEMNeubu4Ugcu3iB48cYVn3ohBHAPUehvpBUC6NBzS2xiV7FH4ygbhYna17RjFLX",
  "key18": "3XUKD8FmuDvoyp8rqMfkZ4A9Aiiyffrejt8jYZcH3bkfiz75fNzepTtNxvckGs3HgjcKQ8Q3hE8BDYJ7ncACaVX5",
  "key19": "4shrgt2BPmbWyCnkyN62TMMgTUTYagAA4HQZr9ghxwh6eJMttjCK32D6aUEwVrYhfJXKxkLtMJupwvTCa6RHhjpj",
  "key20": "4DTB8tpskuw9s72dP9ARr3rt43BimuqVvPSWbYYb6gV3VWEU7omofK8eKPw8RMvvT2bncNXMMhym5qKMJpaT1Ykh",
  "key21": "vKG52o7gRd8wcqvLjLKyuqzG9TfPbhFNb6FDDxygjwKSHbABFXD2HzZnjT4sAcBkiCMt5KEwS67tybf4zkRPHgy",
  "key22": "2D4T9kugE7BV3dKoukPwh1r6MNdgRkczTw9QwWkEjq3yH3vgaXP4YRno5jA1fHSHHQN6EcH4UuWFsijE75iCr14e",
  "key23": "3XcXg9WzohmExiQT2VSG21yANQNBPUs5i7DA873BLXGSnodUBRPYqu88CL1V35YRBV1XbtVhHN8AggSrm7NUnKeK",
  "key24": "62Ervr9W5MQeSRZkgVqT7WoxM39vi7fUmemdxCw9q6fQwiT9b7RnUJirhFxngGyarcSUa5wQnFgkWoLnjeopMaQb",
  "key25": "4zEhBqEf8Kubx7u8NMwQet5Ni8LELVD1ZXotyyfZ9MmpcDvDUSjdRVGhQLZdAGjhAzBvHqRAmv5MMzAuUgQfBrC",
  "key26": "63sQEWZxKvUAAuT2Umfk92WV19Y85jUqXvzL7K6ZXYJHyksxejo7rB7M7ZHhx53W5phHE3zLnKYPA3mRn5vqoH5P"
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

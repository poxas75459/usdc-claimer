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
    "h2KyU8fw5pcyjauW5egoHb9pnGAQV4tqPsQQTCRNxvG4aa7bRgBPzHqwXNE5DDTfDj5TVe7ZzNhDXhoVPutvano"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSiWygzruiWgu11pJWgDPu5R29bdKCPQ9XBg4x4msmXgc7BM2V71o9KECCydrcg4X53YGNqswVcAKCQzxm9jYQm",
  "key1": "3WMdREwYzcHts71rw6fQ1GEXT7sTiVaARtfPaRMhgjiH7JiZdsTrcnnSGsKZcoG2YThFG2C57CtMNjXQRUurwQag",
  "key2": "QLtTomYqqMDRRAxiM4X53ofU8ogSwd8UWKBDa14pfnfMZtjeJgxPcWSAoWpZkvjR1pB5FYvaHhLxE7NQ4be5WZG",
  "key3": "hhowMBE1WqWktcoKnH4aqSpqMCVzu3SisSuZ36E38iAhU9x7REWBLtZSF7W3THEEcKZxYkgt4KXEQiYz2tWbDJg",
  "key4": "3RYgDB5TiuS5fVqJjRjApysNF3JQWzTCy85cRUyzqy3NkT2M2y5pkrhFSu3CSSPftE2NZHu6T6UZ1ubGmM9j1DuH",
  "key5": "51ByXhvf3br7r3cJf7J1arSAMmeHj738kZULrKHCum8X2bspKXyaRUitac3Jj4jnBi2zeGNat7HLezYFmCymWfk4",
  "key6": "2xTsgZEEfBq1Z1r8qujA3vm3tqB1r6dRHG8BdoP4oo3GDxHW1MdQedugnBAzH9zUoLyZYC5ZHWv67y8v7X6VvMjN",
  "key7": "4Jw71sH6uoMLcgB5marRLm75R9z7xM34t1SeerQaKd6wvnfq5Tqrc4YbJGBVBHgHJxvH8hTrVikRA3UGcaqgFjYG",
  "key8": "2gpDL5wkABxbhVp9U1rHHzHFHgKxsXTBq83zePwR5FB3osaizgobbQTfjGpuZrunUx5mELKFPKRuppH4oic5stZR",
  "key9": "2TkkvZjCnhDoY5xfxk5ZBr9zpcrMTSTZwxQi2G682tvVYp4pBaTsFpskbBvTk1UnfkpXq3MZceCpggSuMxZTTNDw",
  "key10": "5LKUmi1MGj9AxRiDizZDRgzPNYBgR92M9JWBi3PFgTNWDu7Cg6r2qsrEVA8hL7x3tFRYQghTbffeMmjr4whs7a4n",
  "key11": "3iUW7gYHsFTnByX2tuxnjn6fSeW3HqNravDk4F97XrqwrVjxbuK9CQ6ngtBovntxVuDpP7a4UV3chRcyxDhi8Lq5",
  "key12": "PTi5cgiPUc7MUCpXVbbos1hkaXMxABmYKNzYhgjn5pLeXnrK7S4aHf9qh4CVyKCTpognG4Yu3gVsGq3UhhUJVsQ",
  "key13": "62zfCsVmTjXHoF16ubFggDRvibVSWFEZZN7TCpWDTVu6uMMFbquuY48be6ZC6eKojUqNmeqJdMcZjk8mbApTWnVE",
  "key14": "3NnfNnJ5bP8AQsYNNzKf7KiS7eGhP7F4PwjyZyJXQKYz5hAfzAjFDcdQzJ6RhGe7fBHwQFvAH8jM4xvYiHtexGxB",
  "key15": "5puXMZ3vKeqEZVBKzfjqYhr589Kx4ycNqD8z4ommcAzPNDBzSg1cCVyfwWzTdo1UEskuq3pCtVM4fvjyd8mPV5zg",
  "key16": "5BeptTY4L1yapLiPpQ5SWPvvMqaswLsGigC7Kn7akxRXUMbUT7yXaWFNS2u7Ko2hZcCWnkUwUwHHoekQNqtwrgyv",
  "key17": "4SPLxdEcRswRy6GGcLA7bEFb5HzbaFLyVoPS5WHfiUpHdbPaTFpS1mtLJSoAmbdNaR2aKqn5FrYixuYjWVkLcPiT",
  "key18": "2afqk4i41nZRuruYtEdBpKBWkKhkFMiAyGfQ1huMHGy32UAs5XuxyxPzAnXwhDVxeVaAUvYm21gkc6B1uDM7aH8D",
  "key19": "YnGGMszPuyZjs3X2Gvw81ymw3u8BqbtAVKp7aZjpcHHyQVZkJb6mGti77MvEa69XW9fZKNRxdPqxtQ9jP9toprE",
  "key20": "j3PCrKv7awP5iTrzUp8rLm8gqLdJV81GjBWtFUMNScb4NvBVBguFCfJPCfjB3aZJu8QY5yT4dGAWr1QahtYrueR",
  "key21": "4cvUKsGUuG48tSJeF7uLFe3v7HWHBKrCKzXz7U3av7vurFVw2YjpKCzxzKG9hVcPBF9QrXahtt1K5XnJNrpJ7KgN",
  "key22": "54nAC96aXCGC43QMjVoZ2BZzwVbLvttJeGi2SUZQT6MEDQ37Z5ge7CRDfAKgcDfL9ymvVmdNKxogFU6GWTFs4vun",
  "key23": "56u2fW1YrNKcC5NFvka4odvmwNgUhxLFKPumnE9WfAS22PKvyGrGrvXNkvbr2sD9vhULj86ZLhQB9RhorY9K4Nbs",
  "key24": "59NpoppVyqw9zEFrocYkRrbD48muy3ZWEmp441oDSXw5KriYX6yawGdMhMojHMRaRQJZN9vBWMtQ9EMM5c4PvGc5",
  "key25": "4yM1N76rYDipqXokqGTFLJa5XWZKFU4XMEmsn5jq3dyRiZk6vx8EdFn4uU5itGEnvN8qnzY8o4QgJu1FrasfDLpx",
  "key26": "3MaG1iKiBuGath2bXJyV8x1HcYZ99h2Mu1eJrzxPaHxuvcNJSgxLwbmt6sJbiQvT6Ad1ammoFy4HqRkhydmBiD1t",
  "key27": "5iR17D2hU6K5zfwuZFUez8YVXkrA8x4gAkn6dN3pXNgoEG7zPMgJPcuJkcNBCLvKiNye93YR16Je89j88EcKTXTd",
  "key28": "3aYgmhqedyWPrwqommC64Z4pFvr1LA9bRjG1UmXZ52fWrkmCW1eES7Y7G3YAAihsdS3aSRz5RiFssEwDATEUGWkQ",
  "key29": "5BcXjum4762o18HUrKCYvDbbtL8JzNduKeirntBm1SpamfDJDNAwCqh8XfPgNvRM9Vhj5dLprzE4YGbivmbpX4oi"
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

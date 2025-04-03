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
    "n7945uU4VWGsQDJnJtLbur18wr6dtqKyM7tcszg9wRCLyN9gUhW7B6B5ygDzzjZrQEBUjcab11ktxzeskJC3gEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhaT6UjRZ8kbG3GVVB54U4mKEJAQSVeZD3uKk3YjtiLe7HquWoQx9dzETwWRDzAy9VdgShCegqACqjxGjkwpJKK",
  "key1": "3DRetQS6JCtukVd2g8etX7WrdW6Nr7V3Eh4NZf5Z1ofe2dwQVJtZzT3R1rc5gwZ7iZax4cgQzkShWrBRzX2XUuSg",
  "key2": "4cuJVCwp81sGp8bx9Aw7kRbhycZGiUnx8nAFgN7X7opwdWNmobqyAaLqVkLwQHpQjSoCCdw2GW5Hk7FiLknmTXJK",
  "key3": "G2bYyJ3rcsVQBZe2NVhLuh9TuK2dBG7apd8sbkxCQ3ZLwTK33Kcz91ZT2hkMUBPd54qGQ5wJyqzi131zL9LYA8a",
  "key4": "3xjrDu9MUKkZhNEnLBaq63ra1jKkTXDyW6qwYhfQj9GwpYKCEGcUoL2BgbVxtv7gtne5ssd6eoB2DY8wj5wwcDqE",
  "key5": "5KTjKiZup1HkBnJb6WimawGuouvKf2kPSDvvT4hRaLnCd8RYyasBaR6KVq3w4d1TBkcpMnYqr1dQa2ZyUQEJ3Qs1",
  "key6": "TSxSxXMJdPqEXkz6dgDEQLSHJkbqGoVZResiBtDgZ9Q4s1PygTEW2ctmJTnd3b3ByWUPLZwoZeFxtgyeY7WXkqa",
  "key7": "kumgspXA1qk5cvhUJZGGsaonkeNjijhxXvf2Q1xrZc6S5gRi6pMrkeLwViHVu2yNvLEjotxL49hEtXs3UhArKFx",
  "key8": "3JUinGKvPe5jk7e6MuCoLP11KrWpvUcvcGnqPF7ZQ6ZFpRnGpahwfxvEpEjwXbM1mNYUYxbEX33QZSoF8KzZUMo5",
  "key9": "3kBtK6qwMtmtrfUpWJJdBxwZxhUeVugVYMULTBucJe8zQ3wkvQRJKRydgSZFWZKaHk5HRHWpE3j8PteoRiEpyYxL",
  "key10": "5S3XcXVcauix8qt71aGKgNtyXWn2cGuuqd63cJct1x8k4iQQKxjoUVw7DyZr9jsVnqkXwwQwGUaXDa1jqLSZgCnh",
  "key11": "Dmx1EyEhpF4jR6QPTqRbqn8p9v5X2dHupdoSsEmxo1sSD3fneSqhUaKLLc2D1BVqJ7rUbQKfVqwDqkhnEKU9Dh5",
  "key12": "4fK2jFSyCzRhNV7tM4481Q3TzHhM8zoy29ErVUPJwuQb4WnF7PBLyyKncJgGMmsgh3KzWLrNrdZTZmoivjLvtjNo",
  "key13": "2x327dd6Dp4YRaEA2NQ66w8vurzbgsTpP9EniRqkjMwXwAHCZg4dg3pyeWART7ETw3LuUbL999zm6EFXV4qJDdpk",
  "key14": "3g5d2ivmKNeitefT77JppGM5gvCp3T2w4mH2sYoSQKL6TjF6k3rSNbAfqhKqoLpqbN3pZ8HJrQHVqeUz2oLX2Kng",
  "key15": "4eB9mNgLWinuLnJ2BXGGM2aMTMeBYWFD5F16P1Rg4HrswK25hcPRLWPVPeUxhoX7ZxFQ6cyvubZpQG7iYrS16r6t",
  "key16": "62DSQBaTPz7bxYQ2CKkQEwbTA9va6XYdZ57oK22D7xdKYmBgEykyMymFXMc2H4EmyBfNNDRnjyUzAFDXMTA9TF9E",
  "key17": "58pauuoXNgZziPhpHRxwaBcKQFAsqrn4WBNhRta7rnJdkuMYxLNRCfbdY3xu8DopgrkRFCPTkazhNcBRRny5cqvw",
  "key18": "f4uQUCC7zdkaBUkvWtVRC5PuCcqNVvp8Ns89ebigLFo7DAFp3r8qVPSrV9m8V7Qgiyo6MZkyaxBgEiK56vHpq1L",
  "key19": "RYvdMuRCa24d4J2PbjdwuLHwP3hRsnRb45qUqMZ4yQ29uJQBBe3MuKbMqZH2tyU4WsScKY2ZH8HDEEcz4ekebMV",
  "key20": "4NiYi3RSaq8gNRSjnnV2Fxb4MsZsPisVfeVMftm2DqQbPB5ZMrHugSMQFbn6HDJeizkVhZq48UPUe7HML2FcrLho",
  "key21": "5rhqicxK6uWySR2AcyGUSbsA4FXPrbrVkP7YTEbf1d8PRUt21nohQXdZagTKbxsRPiCiuDsc2V5W2ukkCPRu7jkJ",
  "key22": "AswV26i9Pg843mREj3M4TPjtQk7bYnm91G4JoPFf685BJQDQczTFS7vEeqJkcUTo1sKXgDex7cwYpLZZPcVMYfQ",
  "key23": "t87hFN4GoakjMQv5sfJ7WTUyeZcivtHQSSaYcoB16jaPftLCXiy2B9KL3UHXprATmtx33ooW5oRmXBCWqFrzzFG",
  "key24": "dn1QDWe7aC1CjrWNQkosevY6Efs9dBuhmrTpLDTxK9PbrDXaHhLDM6TndymVwCDJ289nAH8A8EqvR1MKpTPXvPM",
  "key25": "39CLAZUMZKheJ1nwuXUQBM99hks5wVcitLcgGSEBmomwAQQvZWZ2JG136nDJ7eqGzFWJexb5Md9ZFE5G6pSUJxEu",
  "key26": "33T7La8CAZiYYRRdQqb16j4y1s2kDzrEMs24XZiGLzXqGCWMsfytVv54bfcs8uwr8zPRqFhfdySFTnEoxcqcT722",
  "key27": "3ik2Yp2udJFHgyyZyapvumH7poKYxbEcUjepndFx7XKFXr917qhWmzUcCKtBuFEBsjzm4do4EY48Rnb8eUeye1sE",
  "key28": "3PsBGxcw9EAbLtgF5D8J8fmsxmUMgXh4uJssrULxhj7LWZvWcGimtg7wPGeEbSoVNSL1WVJSsjx5MptFtxiwwodo",
  "key29": "KG2viqHFBy1s8pYd1hf4rt7uK43eUNmJp8DG5ga4mKWGutiZuQwryTx2kcy5VowTA2r4aq6XE5zWcsSib7aNuC9",
  "key30": "2tj7EmsbjNdVyLds69Uja1kShpDswq7d1vNEfkeMkmPzbnTNfEUAVVHXMztkEcfqg5FDZYRERadxqF5rc2X7QdpH",
  "key31": "4DBQEe5YTLusazV9XuQEi53syhM595i4qqjafExCsYeRs3vMhzHRSHj9NAhTbj18edWYhN4R1Jand49PbdtWoXsu",
  "key32": "2K5iPKjVvPekjKUeoMDceGAaSbjix2M3RNQodRkoUwMDDncKYpymV4CuWJ2iZs7GdUXQh64fFhSHR3zTAp9HQDge",
  "key33": "s8fHPnzk2HtgoaynY8tzRxTrKYRks19iL9AKEu4Au5FyeYDRYpTKizLkdy4kSuCdsonT3QK5Sbg6Vj4FT8zaKjf",
  "key34": "YHNi3H4zhFSfvcqHH9n6MeSbzyH2jLQE4AsxM8bKaQvwZ2RZP69VafqY3hBwPd2WuChHAiz5AC2C1PPwbb16Uhi",
  "key35": "5WBUq6gCHRAbVinKwXhkZmxfE4SeL5nKXa5Jx3XVv1p5EdW9HafmYctvZmgYMaksQCrBML64zSrnZjomvUavcy1S",
  "key36": "4Gg7w3ATgZpkPmoEG7Cy4XNbFFLpQ9cDba31mcqPKJdjDvGCcc5SyC9aTwPUxVPt5J37Px6ht4xKVf2UBrfR6K4",
  "key37": "2v4EnvK9eXt3AHjdf81765xYDZjuGxWeUdKp3MPBXMSnFHxzAH1YnoZnNbrAQJD96ckEYVMrG1aszDyqV6nYJVft",
  "key38": "4HDzXerxJatsuo1Expj1qa82Rwr2MoWyM4diSzinJpBA3Rq22EwiDGh61Ke5hcfuPsJptmUruoULx62qww8fUdyY",
  "key39": "3n554Mzuw6KW3hPWPUViZ3DTD8uj6qtirCJ2Ubsip9rKiMGJBwzW4Ddq9DYs6aUcsaraghMLPf4xm1pjTSwnMik1",
  "key40": "4Zbu5Ek27ba6PgwKBwuyz6CApkHT79cRgDP57oW9QeZErK6SHn2Sc5mv9h8ieSU5BcNFNagUFoZJS4BUT1q9sKaq",
  "key41": "5JaKeoBNxrsMeTdhVfVeATV3pSNV43t32PwWEhXfnfHc9UHmCfcrVz1FoDnRwbMdETTjqQfTGBcsK2Db2CcjJ6hL",
  "key42": "3qzWLRYEwUA4qXwS5ME6u1AjUWsgTMBAKrccCK81rw6tKZsYBvUXxRKEunFSDeuTsvbcdxhKEvh6gkMn2YgFscvz",
  "key43": "3TroYEJLHTYX6RPmAXBrCTeMPzTNN7WPwysnYETMMSKStS9bbecgTqcGfgAEp2MYvX3J9Q5DrMmB5Dypr2harfcJ",
  "key44": "3LEkK7sVVsxARP6Q4qK35ow6Pdzj6DQgsiCTgcmMk49dk4aLHUqssjvUqw6j1XfM6J7TW5hPG12BubuT6E8g9bNK",
  "key45": "8DstWpGrFjyFXEQmsqQ3hJqD2evZeE3pMQZuYyev9U9KjwDPThuJLYTkkAyMfqMWY8KPQzvNheXGAkevR2LSAEC",
  "key46": "2etNcSzFDMdNbDZ4YAx8yv4SmaMsoA8Ebsh4kAHWJCh6jmP7A57s2JTdoRjWBFB5r78FJDTsKeNrMRKCVmSn9fgg",
  "key47": "QYzojsobuXRA9LHPQMJ6toRt4FHabyK5YRHhvG95CXrQ8gt6ajGPuaZpomv75g6qaNctNyK982GZrvpJxWezso2",
  "key48": "4Yxk3DtD8W7NGvMPXWoccuviFb6VVrwKTGtyodARC1EpaBN36gS7gqRJt7Q5BXeYov8yi6PT4NpJCg2WF7UzaZG4",
  "key49": "5eLmNVQjAfLotUzRVSPdADAgXWwXGUntMipbxKd1VSQVNtLNGvQxTkJARjkRypDJWuKbP2sABA2c9VaYdTb6F1eG"
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

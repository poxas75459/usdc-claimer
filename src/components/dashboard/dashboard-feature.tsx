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
    "2Zdsvs7Ga3CRZeUX1oonGPydM7dssseFuN5TFnKeX7RtJZ4DsroTjgdpsQ1CvGuK1L4Wfx1ANhAbzvfScExbVYk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36egiXjaQMgFGCp9GzrojTzrsDMUxBheWpCbHUYkoGR4T8DqCRuV9rqUPf5tAGkMyh2JVqciv4sr7Z5miAi3Mqga",
  "key1": "BprpSTJR55fvFpQk4V8tEtNp6TkXsTwJq4R9WsyCdAhqXCMgHZsNX75D3Ld3HgqictsY4DM9iFFjhub3B5SVam5",
  "key2": "56KKNV6Wj2BUBnzNsHfcouNrFXp7XmCUzVfEN7ErMj827WQ4b4cEL8khK5c7irBQ6ogk5boiUC2jADPSjvnXq4bB",
  "key3": "3jhNGVH9ZARQrESmMpWtpsm9mFuanG7GPSsHfAczXE6jw6Si7anSCFYWscmTaZ2YNpceSqENX1wrdrc97AsqL4dp",
  "key4": "5FjTeSXgDMDGw4tdhCnDZ1J2buUo717pBukbDar6jNNn2a3NkNYNygGNer1GbrZ5KTcZ5EnqKcb2uAaZ1CDqCma",
  "key5": "5fiQuK8kkkzic666BEKQ2gx45EeZAdMZ8d3fs9vuN1pq9bqKLnr9QLdMahAZ9t4MhXWB21FedBfv78bvh6qcVVrk",
  "key6": "25AvybrJjvomMxRa97vE9DuFQGLUKchZWfSdyvTAEGeRPdLNtXWvUCnUHk41qzTJZ6F53yPMBY2ncBLtiJLNNZVD",
  "key7": "51EHJHRDM1uGxeGRqGhPaXu5oEPe4LXYXfDi4PeHCLrYWVJPoh18DUrscz1TNbBzrjeqo1YDhp3DRA6kLdw3ibe2",
  "key8": "36Lgx9xNcfpSTPrXRjFaktcZTJnSfUNqGy2RyCdPPNWqp3g5BHMBnRp37iP7qrK4rvN1v9GNX71YJBGqqSAuTM1X",
  "key9": "GFPotM2METsA79jUWDUojFhi5mFCaJTtjV4J7vXhVUHnfdTDoqCybVgHRRVFt6Zr3CwZY7W18sH1mDF96hLp7wn",
  "key10": "4kyQ4Pfhx13PW4FqUDoan3qizPM9GMf8cfvNhTaJCASQEDraNdkG1CQM58uKgbmUWUGbDmmXHL8RYoZcXfH2JgSs",
  "key11": "2gGYN7dRcvzWcqXmU8cnCMARjdbx2VpSajqszpiNHW92K1etazHCKeSZnDKmPUT9XQ6okzcNtQJunPHu8HTD75ZS",
  "key12": "29zzeL9UZDAf4qvL8YANyLBwMovb8ZD8LZ8evrRNWqxn3VeHioZWwKW46AorF9BCbnzixGeMTBZMXSA9jsGkGP2U",
  "key13": "5xAfj1WYamkLAAL6YhHdM8iWJcTMpfpvmHgP5VWPweGXp6MqUjyXe7js9FbbgX8nsoQqQRcpNN2vn66Z2aUJN21w",
  "key14": "85x4zgsAZxeXqg2MKZ2Kh6zjdKi7n4XyRqfAuRg21qC2sg4DiwBjagciH6n6kcHkS4Aan3UspTuuQYfmdZWYfxE",
  "key15": "wE7kbRna1n8yMNvRNLjme7D7o7gqEyxpqQk2VFnFaKrtwgT36RgwvpAvAsMS8EioeCd5k89Nxk8AzRf2kto9kvF",
  "key16": "5o6imQo1erDckiV1UMexCojpXLEQnMWRbJAShzCN8L4hPnKqw8cgjARQZqvHacqWeDH8G7osTUgP57gfQwcJDJNu",
  "key17": "5pkFnfGnPGJNWBLF9Wk44YbuxYyD4nRsqvt5Kth3JHELZ3E31njad34g7SibNgBbiCXgszhPNaUANkdjaj5AhwiZ",
  "key18": "3ZszRVqkecMhB8WTX8bDHCRDHUqwqQ6cLujQvTCaN8wdk9aim69kab8aeeAYm9HmUCNrPdEiBkUJYDmWp8xAgghy",
  "key19": "kkxbgrv21zT6WYGNteztep5S9gi2fDZVVzD5um8CvSuhh7nYfemdFLKKLkekYqnkr5TbZF7X9SiMKQeM9tGw5EY",
  "key20": "cnVZYqWWjUejVxfw8hA1ctbLVFqd9tz6UM4RDaiKoos9wVUiHiP2bXFv1WgThtDevH59PSk8G9L2WTpWN9nYWGt",
  "key21": "44o8SLhfvdBkqfqsA5dkkj5x5dvQZR6FKKq5hdhugtn8PXo31tix6Rejsm4TKNNAnbLTmyzHjvFdRrC86dAd8rX7",
  "key22": "s7yo7T6EpEP29kZkfzXmUiR3g92JxZcUjaAjRUtmSa6BS1oR8FwrS4DuewRdJRWTgjedZc1Yuz2B2dwaNXqHDX1",
  "key23": "4rJucu3jRgqM1QvTvYLwi15FFoTCuQagnbmuTxTd4Rx2y9jwFarz7TkY8Ty7AqHwDgKwAT1zzDnhxzBcNxvzDjmM",
  "key24": "45KTsw4kQuhHZN3P7YuzYuxSB4zX1xK1oy6kFvqENhAWoSzg6reHeevKWQHwgGDTUT4it2VyvVxei2khYdz7C65j",
  "key25": "3QKnBauxjTmwbRxBkhpFMrovx1x9DBHYjo7sAnvxDEzU1dk77UaV5dnGP1zHqiUmSqE25Us4R8cmVe4qJLTpzbw8",
  "key26": "4HxfMEaHMuifSj7dKtbEveykcBnGRMeuRMjvELdRWpZ2TNNbPnAS3mjTc2aeC5b1NJP7FASAaBVNHTCKMRWfSAXo",
  "key27": "5rsatbjHAJHDCWG4nWCiw5dYnb8PBywv39pcbmKcE9fWLfihNBn8XC4wSdSBrs77ipFaAstxJVLGJCYZiQ37AdWz",
  "key28": "2wLofStkoEVuwEsDBBjmJZ7uqmEhCrj9yQk84wmzQWYvUZ8Yh1YNzRhB3azaQbRtkaMadUa3awnucMM6S7BBiH9M",
  "key29": "3RAJnvvc5UySEmda5DHavaQnGSX9b63hJSxQxCoZz4ux35qKTEp1bwfBajztwzh2RbFW77UfVy7bBouitKw2Q99C",
  "key30": "4imzwpKjpLTKt1Ea3Vsk5HacwkuRcrC2BxzL3ZPG7YCCapSNCxzpkWKqd8TJwPZ7MsyE2X4gPK3vqPtB6NjsFbiM",
  "key31": "3xHu3SqXN9bbd7NRcBGHnQQghHCZBpp4Ez1Ttjpa9ifXrgHckjMZV1jEnBVySVXDTuUcY71kkcnd5CrN5rDsdVz5",
  "key32": "3DqBm7wggPG2vu2HgKKFwVmR8awGvwQDpajS4yG7wPMhgkb6gz67yifac3jySKJbJ3iMr97qS3PV4ZssaFX3y1ve",
  "key33": "FSyPxFfZxQWkZTVZBeMYpp9mkE1y5kaJY5YiMiv9Zq2k62cQ88KNqQJ9zqnvXxkRzFpPw36avh6dZP5sSK1a7jp",
  "key34": "4sgNvTfmiAe9csT687gQUxVUhKtEAMGUfXULRSNBQezZtDcXi6rng6JYumeNFzAGJCbZTNrkxyVGGNtE3w2Vm3WA",
  "key35": "4WFSw9eXq1drYjLHrpYu5Cg556ToV2h2dr4BnV1Ka6T4c8E8K2Ua3n4oeBWM4k6frfSWYAa5cXZWpnJ3vSaRTtQy",
  "key36": "2Xw6PwYa8ioSowePrASpd8QDCS1ZQGoezLiUFFrrDZ6RJPZcDb4UdViwPaSnVeoX2ZPL6Vr8p2T2AgE52zF6qQrK",
  "key37": "tGXygyKwYVe5s2Y4vgJHWmz6Tp1TX7adei9hsWdDCWGZAcwZVqugyjzA7UpKsBQZTgnGEsvLLVbSZF4vpa9CcQz",
  "key38": "aM1SKz93WcnJGDJCtjHCSszPVyPDDrYV42oLDM5p4iUUxH7iLsU77bvKHR5djdaGbdBL6moZGNPjhFWeHyTopmo",
  "key39": "5fY2fPh6mvWFkcKkXhq2L2AzwS87JA7hZpeDDRgBGvdVhfqT6pdYHuU47a4VQVgUzfeHsPaoHG2JPTVHVJpmfb4S",
  "key40": "5jQVd1nu1DZvam1jSY3iVWMKWxcmbnBztBesi8M8hRxpN9w6Uj7QmuhcFSUMT6H9kbykrdxfdsajqW8WEvRyArNh",
  "key41": "2fmtkqKYLX5fsgwg1Zv542dx8dS76WMXLu4sL3vuRs5DcgnA5fUupC6ZnsSP7D7zo6Tcvsgfh9mrPWNpH2FzDLSm"
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

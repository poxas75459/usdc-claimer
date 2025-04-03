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
    "5KpHw9nHYGEwT9t76JuvveQ7stQCbs6RXEjDUezimY53bbHryvoRiRmgYdZRthb1kT4ZR3s7XxHtuJNSEfFoFDPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3n1HkQjovZsj8tCjwLdhkcxwUpbTtpyJt2dbrtHCA1QrEzYLtDkCw54ajnveVz4PbuLXxdViUHGzoG23W2KD6y",
  "key1": "5ogmNrzR9fCcxLkJTkaQHtY9JuseYKXaw6U717qhWc1nCUZpsqg78r1FP8QPHzPHgoRZ4ALNDy3WHkEtLp92Ro7j",
  "key2": "5n9tTaaxKBLMXnqvUVJFTNV7cMJVZ8Spi1PbdguYaCuBbFgaN2e67WLawJny5x3Rw26ZnfP1AvssGLS3BsvTJAtD",
  "key3": "4VP8EJN7PgJdwzzCqFmXa5c6mTaBp95EYAwHBDBGv5tNCRpPd8ANk2fLWJMT91qLqtK3tPeu8rgtRYRQ9D7148QU",
  "key4": "2xbaPnfSk5fkwPNwChvyieapVmP6AUBd3YumoqgBfNjVYkS4sqM5staqD4HGkmk9BmqY11mr8x4eC3eS91HVErC1",
  "key5": "5wqAzetLSAyFvh6QzQFZcjWk4v3Y3UqtCvPRE7WvPaGPUUWLDV8uu4ZDT6wfYgSLmsPRQQFyHpQmkrLnnsWZfjy8",
  "key6": "2gCmAZ1MeXB3Z8kWunyMwwHBeJ6TXWNUkLfBhMpk3Zu832j9AhuQTVAYTSbBAgBZ1DRaYJqwLNBuKSBeXK4jA4J7",
  "key7": "5cgGcryynxUgZCHG6uiQNvDi23izBD4BCArLTjoQ5Cx6c4PQxZWhot9JfFsaZoD9Dn7czVd2ttKavEt3cmvx5MaH",
  "key8": "3MNvQTj1unyRR9Tr3v65pVpjzTPB31dbyUnLWYezRSGHBGSUzxCiD3uLw4Rwq9c7EAhGLDW7wDNx2ufiQGCJr35L",
  "key9": "5HtgzymAG2CFMehenehAipU9XjMTFKc9tX48ntBdnKcFBBy5fab22oGRWi61AW2ZYiJ8sZaAjkJeZDRGU2AmkdTU",
  "key10": "K9A1Rmh4D74dLnZkX9gc7pqKemxG3MjEKGJEzgtzpp6Wz8onBAu9EntGvwD83DR6W2wSLCQvjgSdnwb8anAX9JW",
  "key11": "N78FBgc5U28qGDFMqRBtkEAMFdfLvyzkfL1iAYnxpT6ZXordjmyP1D2ofYKJqjsYJt1CmjRbMMjhB6PiEpgkevM",
  "key12": "3zRVhQjDPvYznR5Nq7aFzpa9aiSer5hceoqFicz1q7JEehEAXnRFVTJK3USFRSkKYLc1WyrsEsjVh3YW41xPM5bb",
  "key13": "4ouZQh52SGQiBUy9hG9FEQfRRRbRqD2kh62kFB2e96pEzfQrAjwKZYHJb2oc6c8s6dZcSwbnEYsh5aXrtPurFatL",
  "key14": "8DUXpfKQoFyA4hZYm59iosm2CfSQq5DuUHFftP2bUnDJPnCL93YE5Msry4tx4uVnEb4hJcRJXc5DwdGXVUxyPuK",
  "key15": "2A4dJchh5CnWoFTGQjG7QidUb8gJmz9kR4XcDnw9LPSavHCSh4UGYcYhTmzcjk3TGRWehyAEYEPLvhDiXeUipB1G",
  "key16": "kikv2F57PwrK5srPAeHuJBpKYBrAQup35LyMSWXWpyJstfLUUd5amq5HFnXPCJXZeApTi3KkLHropR3G35xp6fJ",
  "key17": "2UBSYyeczxQyyo93Rntv6JciZXJJjJ8vBSkH2Uh5SiJN8GsjAeazW3vJVsAmVdpSsCTqyWufwLG2wyXCwBHUzkZs",
  "key18": "2JUfz4RNCa2652HngxHnvRARqY8BjF1SSH3LDXf9xm6WK41X3oXDvL7Y81sFAAYyjSAf5BQ5ZHckANs2df2X8Bku",
  "key19": "5aVrBnDz3PAYn6gsuhYGJYAGeDMa9Jmkv1ye7XAJWbZGUTEouGtjh8bQvrvouXKVWXquJPEWNtVHMKaqu7wj8U3Y",
  "key20": "JP9bpLUx94jD2E1zkJxhEjyrsi3WH6ukFig6a85oehBMtWMRDcMzBcsevyb8somiJyHzxsArcDFXopNNpJN8x1q",
  "key21": "2esVLucAUApL3VgG75pEYu3x51B6LA5bgJmtAerkpky1qWHktAin1AJphZFPtorbv6viFkwoZNrH6bqVwCi1xdrq",
  "key22": "3NkmW7cWWpeCnQJj7QtjSRDHPBTzL8CoKQWGgxkvq71uT4jMQ2goCyyhTjcPLv7to6D1Qhu9HjQtgasSGN2DGSa2",
  "key23": "2vh6yySooRxtwYPm2CqpTAMgTMAMWGA9nwH6PtH2ky2TvPU5wraTfVW6qo9wLyqgKC77Kau9xcS8FYARz9M94G7A",
  "key24": "DdW9foVB5m2UCunHpdztWYsND8bWXGjoye5XSyXZrtbXUFiHpc6n3pVcry2NjmZRb6xF1e36QGT3L2f21YX9cBV",
  "key25": "2Hqgukn8xRryje5DAbsPwgSWUD1KfVcaRNyRz9J7qxfcKadcvDgR1JkuXz3WhjvrTQFoZofYurbLnFnaYkvySprY",
  "key26": "d3uPbop32GNEkMGeUKSu7Lm7rS7gfGftgtWrrJSey71MmqAvovtysQreBf7hJjZaNWTFYGXXpkCUULTCXJBaFMz",
  "key27": "5ZkqYdRmJewaGpiwtbLKRoABMsU8SoF87wPzB1qAWxEcmNa1bV9XZ5s6tSzPd6stdyvfWagwehRpw65SrjmqptdT",
  "key28": "XXCs3SDqScbSJxuD3EivNejbargFNmF3aizPGQbvkBgnJzTXPXgZAipsBFKK4pfgU4Uax6yzePUWU1n3GMeCrWQ",
  "key29": "4cdcXhibuimdRkzrfeNMkEYPFnkhPhAZBdSZQfryP8kHGjxgFRksG6khJ2DRofaJDhWkUvcqdDyr3kKKgoVSTdsK",
  "key30": "5bdcZFsTzJSKrnziy8gwzA52feWR9AjrhAKzGB2NswwMewEGQPKNWMbhopPTurciRqGKVd3Cnxcy2C1F4awPBQWN",
  "key31": "3AeXKBqpuGMACvUJKh1VWrhjYQqPHZkDuj8bLAcTV9HJUa3wCzZLPtMVCXysdA5DFehAFyW9dd3dFHiLcgWsQvd2",
  "key32": "3LVbQPX2s5jcTaJPWwfSGR14Utrv3jFCmpUFVc7Jp64J1wW1kQfJyd2Q3tSoc4MBm9PwzP6LiwJUQh2pNjFNQvwM",
  "key33": "5zhVTBL1rMNePY9bKsmNSv3RVwM8g31pxF3GH4ZGb6W8an8vgW85vZXbjy8mySHs4cEzhU6WY4MUz9iGJwkkJDH3",
  "key34": "2wg6zSDkmoc1AsZCqdXFmviRsQXCQb3KSy6vsDpCaZ2CV8YMt9uyLJuhk9BYuPzSFiz4wBWXe2HAJ5rH8A2hvetN",
  "key35": "3ALBCRzcphQd5dwTTumRnBTjYda6yZhGFB37mcgenhUVzZ6akQtW3pj2UAgsdqAJbHupnyDW6dSwtjawhxFfWpF8",
  "key36": "2Heod55yxUrJG4HobWuxuHWEvCwUsMUiFDo2j2QY76pMfbDr7Hj5FYz1mT6c792poKBSfeaiP8L1oXehjtR2iVtT",
  "key37": "3LUND9yK4PJSZdhzq5NiKV3fsubtUvyD8ewj1CScp9nEfTEwsYrYwTSLvZTuP8mi5pD6niseEpyWuiGF47cjHhBL",
  "key38": "4z1RJmBPBama4mUdnjTK9XwBK2j9zL1LVFZ1tfTPi3XwqRT3N4diiXumeyQLV4Hzdxgd2LNwmtT8tNNZaqzgFgBy",
  "key39": "aboffcbKTiMphfuBDNJXoUd2HVzMcs8RDrwTTcvYBAsJsjDDqXCzSvdaXx2hiWA6LusBeJGwKGCz7cwdXbLUsp5",
  "key40": "SXBF7P4CjVshYYzGF5E5fdmrqa2PvDzCbLJa6aQDsDg8nF5ZqzPeXUdc4hWfaqfJGTK2Kkw57TacT2nR7chsptF",
  "key41": "o4adAPyVpiKp4qZsgA43jgyvvCH7XVimrQ3UA5zEpr6BbBazHd3nqixrgBG7gx2VPr24nHV5zXQCU9btLJfScst",
  "key42": "2fZYgXHPzVHuGjZABxYGhhkDwhDJc8bNzU5ardjR9JXQSwXMuut84WNXwBRdYo9PNvP7kBvrpYBPTrva4MAq7LkP",
  "key43": "3q1usGRHX6Tzx35siyPLMKF4VgdNHarCVFeEJZVyDvAzGfXGYHTVFm2Hpnc9sjmbyuQURmNSGx56rmSytZpC98Gb",
  "key44": "3s5MxFuZHBj9e5fJrta3bYRiSG2gbP6oTvz3MbuqDC8ZjNNms9gAr2ZmGWKCjRBdfMo3EtsFB8LDtX9dZuQwGh4A",
  "key45": "5mFFTuAjKR3JPFfVSr9rti3cfvD75LKrmzfthhRCJCr5zVoFvT4gpD2udVqoMHJBxzFbezLvFFXVDMsYKW96SCGd",
  "key46": "31xdQN6wWevSyXPQrj4BEtFQz3B1H5eMPreJp2JETtA1GFmaHqyawtF9p6KTNk2m3qgHNir39QJLwZsXjQc69EQh"
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

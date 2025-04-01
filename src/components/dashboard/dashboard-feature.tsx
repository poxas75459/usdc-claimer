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
    "3Mzp7tjgx28Bv5SkA2h4DJNxUTq7U9N3Za7aJeudhQGMYAaWxmtAV4b6TYfsMkmU1whjgzPZNvAhrV6Uo6JwD4cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n6vWr4s623WqrvRaPvkFaKNxJH1325WFumDj8gwfb2CzxcjyXo99oNuPTLHwjkP9zDwTBViJjkuq6heZ9g7F3hz",
  "key1": "4gxQrrwJPyt5pLgE8DYvtwDcVLy7gsipV33Q4Fu579qoNQfhaqvfLr7NxGTyZquK3uGxssPQEMGJP9KTYzMtttRE",
  "key2": "3MHTfD7oN4PhQyRwBjdXhTbG7hH4HAwcmvtwFdJrkSKKwMkKn8fJKdbAttNqWQBoEZHpQ5PSwXaF4benKqkd2ycb",
  "key3": "5KgRqswCExEaStureQVs5NfxK2Duc7i3DV9pu2Bvddtg1Z4xrgZXvSHyuQjMjtWrdMwjGsPxCMxTDyLWpse5HN9p",
  "key4": "x4bBto6yzyfsUKAi2tCise94mckA4wvxevwPe45YmPfoRp7uQb8kUgdh6Wg6jRaNwpStacdfKibXztno5yszPw5",
  "key5": "2oYXcqyAzW5FwzXHJfsrr9aS9r7N3txbRf4rRQuEcpiYUTPmNuQgMjERzKkwtHDtm5uxfWNidRwLB8PDsHcHGFVM",
  "key6": "3UYPR97j3rWzs2qJ1gCaJTRguY8dMy7AdGtxxBarV4eitfNK5wTEYe36SX68FtCvtMG8KwLQZq7LopkP4A4ya9bo",
  "key7": "N2TK7k38KfR8FMcNLmtr6YKfYcER5eUFWRXFVDeBqiJVWechhEhrjcjdrbWyaTuweKZnuQhywuDgWSqGpcBNmQL",
  "key8": "h76cU9eJ5GjtibvUR4mTwTQbDeJnp5qJsraDhbxuRETjaBoDz7Sum8Zku9q6FqpiNpK4Lest1gQJEWV86m5tkEe",
  "key9": "8XkueDVjUzaRuhHeCWbb2AchdFAWN3ryV12iJvNd96W7mWBY7znh3TtgeXUN7WrdibRdLLYdftUAUJVuUjwnFsc",
  "key10": "4EVXqC8Ey9cG4BHbLd2qz7R3vZUUdLdRTTWMaV4en6BRy3N9MCTX4D5ySjEpoNV4i42Vw7JghMDkABWmk3CaM6Y8",
  "key11": "BPuRYDnYdUzfmYquSHCxWixSRAY5PU1X9BEjZunkRf55MAiyokGgLxxTgzosE71pukYRnq4dXYbA1XCxLWNFGMD",
  "key12": "Bod9rpGq748taV69GEffyx1m3euyBvFvZumv1ZwDzKzujy2JekAZRye7cLjfiLBwoAYXkN4Z96JD3pHaRzQid9R",
  "key13": "3iHikaRgmtTV71MZqBryY7H1r7esfxYL9ziJtrzqQ5X49bZhHaPzoFPPUQNDHQS3vR9krYDC3WdV89DGmUixRzWC",
  "key14": "5VPsuVza52Tgugdkg5B1UV9qyKXdd6DdL9Sy4oWZg8BeDQ4cjZrJMTL3GA6AwCZNY5cMqQ7t4weK51eu5jxhAkkN",
  "key15": "3eyFQXCr5KiXxJQcmDgrJdRS2ZwLEmQEWbxT3vZJsE52Pxdw6aKEAMtqYogmfaWNKKEGDrUoM8xXNYLqSemK4r1i",
  "key16": "3jXiAgYzQpucrAPYY2WTHNpnryFtkuzY8JT9EdEyLrVKbGy4Giu3YiLW8TGgqPSUcksSCckSnP9zSzoxi6M6yScx",
  "key17": "2DMqkfmpgHAaGbRkEuB9sU1p6Dga29hXf52uA7FKftPaSkNNd3qCKKhq7u92zesZsRqTutgWAoeJpbunnNtvbdwQ",
  "key18": "38CGuYnkEzKaq8ScSsuB67n2JXAbCE7c2dXzBpNM5t42zRhahReYjnNtjwJapbDbNcAVYuqh7YRbMJtgkkFa87ry",
  "key19": "5m1T4ctwMih4HsYJ8Wiw7MfkvnFJ5WpwQBK92TAu2a6nq5mW18Bp95gXwPNicRR4zveZjWWrnr3cEPYHHnP9DFVe",
  "key20": "bVj1ag1ZS6uwzp21fQBVwR6Z9nVuHtDCe9MGAcRM3izWYHLjykhmmVqnDfCnJtZtSBAzD6ufG8sESbN5uZf2Y3j",
  "key21": "51dSh6MYKYMa1dK3XnwrKWPNvVqpwtRzV5P7kYs21RSaLEGUwuGNjkCG2Fhf364wcqKAvn1m41CSYj7ZxD34p6dq",
  "key22": "4JqQvFzQ14LVTTvpThfnLbhAc49ArNFotPVPMLf3voDmLr4rnyEcSgGUXBAApWUQcD7oezLPbvqL15KTD5SPtwD5",
  "key23": "4tT233JMo52j1Xu8WcbdsEKSuYL6y36KsSfWAydBJHzXVjgfEdKA4wgZujcD4ZKHAyBSt1JiCmXibeMrphtwu8t7",
  "key24": "5hBjkaAXghsSqxT6ZqnckdLyRZikxdtFWhJRzQtFNsyyFobD8R3KeTAGusMbnkkvU74e8vxChv2v6WjmNCu5Sa3w",
  "key25": "2ba9A2eLMuNWsaCNVBpCdAwvkoESpmgmQyzBrQ9SYswiGKM1YBfuFaM2CpgFNfteGYfeeLsjyRneUj8HmCquQpTT",
  "key26": "61DGvwrnS5asfBkTUNEQizVt9dH2Lt9T6ZgbqQxUDjrGr7XGaSqWjuibFpmgmH2xXzxNf3xajhyuXHzyQWtFue6i",
  "key27": "4HJeuAn3ChPCV7bdaaLanytzZLcvqiDUhh4dB3P99RkEd2pLzocSPpK4iw9M9iTx5efVqojKyyHLwuokTxSYk77j",
  "key28": "UVo5N2D7b9zJyKtzwBWHHZ1KRdegnb3MEEfRMU7DyeyjcJJ9P3ZGgdT8YKup8o7G7nNPH7U6xVgtBGNABXUwncC",
  "key29": "3QeKTUwms9n8t2QXqRBn6etVph6AcJSLhi8SYjjyYAAEJ4BntxVfktBrf6j7FwvJXSk8A9fSVLfeegF8bQNNavHF",
  "key30": "5HxidSseTSmLjQpZxSLZa3BQwWPxzwx6uPVNqxxiqnAmXWv2Uj7p1jit9Lu9mBHe36sazk2GkiCWwhxbbX3dKfeU",
  "key31": "2VpoJAhZau1ktPDoBgtqYmXkVCiRs3yGsRM7XCFim9CwAipGV6BMxvJEcjaMJ186paYxLvLxpEJ2TNdpp7eZUsqb",
  "key32": "3tvJuJSdiScPG6zc31xYoza9ArerbeKttduKJdndfxKfDutg57hXDptH19FhdDa6du8hnpow5wDcfmh3M2rcnCQi",
  "key33": "3yCiX67WZXodJaTyFkWrNAnzKHRJeyMVZ7ykDZZ1cmrntcfKcGncNqyA3LrpQfNLmKuWFx4LgbVVMd53NdNh63R9",
  "key34": "5Awp597qM1tzZ4cw2WyfNsSkmMGctEx1fYRz1mjFjJZQExCvBGsZE5aFPQsdHn6Ka45bigbGqGwnpJ4FDYgC3PNQ",
  "key35": "4v6gBpmwCWgoRZNCSUnUQgtDhpLmchwrpV2NJokTkUhPyARVRnxKxFo3GZFZCBhQGHCiTdcevCwuF5oTyEmwRJGS",
  "key36": "5QtmwnBarcmeYFYC7FfCCqxNpQPkMnfbEksm7dCYgVNKf6GN5wf2Qxd4bXWbQuKxtQGponU8FLCtGTtxvFvZ3Hgi",
  "key37": "66175W2pNbPsoA3owLieKDjDczrNxmYvTCym2qc95VXGDWVyw9PfH7n76j5qKBt8ymp1JEQApX35q1xLwnjMAunD",
  "key38": "RYsE8uvoo6H61mfdyGfqu4xVkhAVTF1mCLJi5Aq6wWm6LRDgifPZ9V51RY9rh2Uau4vVbYdBkZZVH3B4CbScEhp",
  "key39": "2xi4csdgaUyPJxyduQTCQ1RjG34Vojm57C5j6b67DwCWoA5WcHHPmmXxbYbcDobhVsXb1dXLz3z7vnEna4PNySRK",
  "key40": "2HeEqApCaE81nPBTP2hMLcDp8vHrxUGGjgJsEFbpMLqBQNHE8ProrohbfbbgtTbMEE6tKTpnCM4DsAiJ5vta5B4v"
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

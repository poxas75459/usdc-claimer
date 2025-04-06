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
    "3rBxiCJM5zhBQUCuF9NHMWiwS2snxpzwo2y6d8NLvL1PYJMMZQAnnZvuiPpsWt4w74Mr5zmjYNn6cNBZEFS3cKLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m589jPMHv2tYuEw4nLZeVecZbKxtQrs6uVAL3En2hPv76UCKw2EEQpHgiQ7L2cJzbS1ARPkuHmEVPcFuQsVJDQf",
  "key1": "2kXUpQPXJVrwvrAfejo1pikDmhCdoHvsKqR1b17Nc6KbeN8kvoCo4dr8WVG915eFJwuN2K47n5u1yDZr19GJFLX9",
  "key2": "4LYer8iU2PDjqqHXrevHaWrBGtid9xe3PztMMnuCGxvffgbZ5HTiiUf36fqGGjKkmWnwm6sr85JMx4wztdJdKt61",
  "key3": "4AoaAhzFnT5W5TfWJZpy4NEe9gDhNR5272Epa5Hg4J6kgfzLYvKxpTGGY5kxuegcQGucU95hBV8kKiEQQyN71ty9",
  "key4": "3rSDuDnTBLFTCtPLD6wtUYCLrbEPtJ4KBErsg47gBxoSnxdomLTHN2bz2gr5bbApcFjbsk27qfdH8a8gsZEVXwxB",
  "key5": "5PqZS6soyYaXhWJrZfE6RNpvrDADLPgp9S1eZs5Kx724oo9SkZnmqG9pVMfPwNL9wjMvUHt9fxTNFkJB8e63ZWLs",
  "key6": "4SyUGrU8Vxe9reukNxyQHrnuY3AzCNxcyByDRQ1fngkGTg2gK4P5mVCPERAvVwFnJ33wgXZeXzfznEx862fMN41",
  "key7": "2RF3xUx1g4szkWeijFoDULhxq1a2LmNLCCYEpFWYNBjTP4m7EdeYnLR3FCioftc8fVuYLgJUzBHFireyEHDKnWT9",
  "key8": "26JdgcpSrrAgdKPCHS6qywqX1TTheKxgWef4n8CoUbsUDnQf1JuhMb76bkyVXae1cThbUzUNtL3njPv4oYWkh72E",
  "key9": "3SFAhCsiqhv9yYJvs3u3NkSsyCenARCMYfMkSnEUHUCwUsGa3xArMZ4rAitSaAKCbCj4jg9K4dxh9vmDAMb7SRta",
  "key10": "4nqj9XKrxcst5FCGNGrJcLsu92TSkXX767Qhcrh1otaz9pqRaxovJ52xF16xxBpmdiwYbQSg5r3f6zGuv8YgvN5S",
  "key11": "2ubg7sXiVUaZLBU2Q9FWS7DRZVVnYikUc1wmoHRXCsYpZoeMguUdULvs1dbgnn7kqkG5AQ2FLkFt73sit3ddKNSJ",
  "key12": "5Vc23RVgAme1BW7N6pUTAs9ZmCCCewnWuPMydXnQbTVqAcwzbkhBVTasHiWR6rN6syuyiwMmAojhwvQnB1JSWAi1",
  "key13": "5LcDBg62pTZVKNcaXrvpbZTxdSo1jqdrNNKbGa7YDaqHYzn2J9HH5B12ZVRdy6nzUvXBnpmxNPE3uXmaZcjtB5is",
  "key14": "2mkPNufLtfHc3mZXfiUmup2UqD8ghPaRVpwycrhoHQNiJMYhZmtr8ChbWxLmbk6wejTPaBpJ6HZGXHHCLDHPBSGZ",
  "key15": "5V1xCZ5QRRpFYVSqWaALMyE41z515ZNqVLCaBwFM2cS36EBLodZQ7maawa7K7oeWeicTBSg5X6NWRpMngS8YKvpq",
  "key16": "5SBAMU9wfq69TYqjUbTh1SozsotixSqck5gJhTwhRe26CUxT1FcYc7Fq4Nh6ZKJsCTp7JFkCFARnKAofa14djePw",
  "key17": "2k9BAnzdiX4HWYDh521SFz53GhhvLnRaYMV3fgLf1nsZnKX8Me82h3MeRL2nS8YCNrR7hwHz3pnVFoXvaAbJSBim",
  "key18": "3kCFHMuJTYoVBieNEZ1uTm3eoWKeDFZCPpqMRVvCRNVRhjnRTtk73KyYAPjDdD8GQKE3Lu3Bgh4TjRtSct9MS3Ap",
  "key19": "2426dZ6eFXaJoGwD68o2GwahpBgdB16yipXiTE4aFGHEUESFamecP3hsqQqTHr3SVvqxRXgjBNwdgzQjj8ZKij2Y",
  "key20": "28d5bRPBQV1poPxDsgUfQxPpuhEZ8G91gdZ1KR4uKB51rdtA48SxELQuNQTgzQYkRQVwaAXYi9GaYt8bm1tPZhYj",
  "key21": "2DLmHyvSRxNczmvL5nQLFBZGL1n7AWtGt3qgKfJzddV4qwzjCgY6ahqXVhwjGRAGPk6WSMH12PqzR4hLiJuk1LQA",
  "key22": "4h9Z7aZenqPDbzEZRgR4zDvnBGANVDx4L9Xuj4ao6MhWk22xXo4fQXFpbPJgxfKxToHqDkMrmtdqNkBJSjwJbjmn",
  "key23": "5HMVLyN2JHoeyd2FqUBgw5ihchJJpYYPdkCLLDsbEa8XUurwPpyBFscpWHUcDEH9sFBETjCFZ4bRyzsXy2y7Yi3E",
  "key24": "3Tuu3VW3bf1nS4NmzHfrZf6i5R7zcSrurD3rewkTThCUx2uF7ntVP2ySEonWsfN5xZtcueucteFjNnLPdY1Qx96Z",
  "key25": "cQ15Vbd68J3ydbFkWgWwfQ74RMnznS4My9omHtHKCwo8NfWZLHyFDxJMTDh8nJBgV91tzhwdZXG4hWvCoBxxii9",
  "key26": "49xM4WQVva6KUBHSyMu6aACgHhXxVUDb9yXF9g1tVfJLdQT3Ht3z9DzWfQXhdHGyD2Pv5y4HZc45kDY4B4pSNVJH",
  "key27": "5C6SbRrBJk3z55wckWKMdd5BN9Wzf9HxV3LegLyqbyKMDSJEf2cKsXvTwZYLMGNEibaedU9b9ce8bA29YqLjgHJT",
  "key28": "2VtnbPEFf9marRfnKYZAAEt1nsSYxf2crhPsrxkCGF3c7eYJTc3G26XBkkHpuw2a9DVwTnBDAPdc3r3pESkdaJCe",
  "key29": "3Zbcq9czs4T2f7L1ELAQMkgW9yNGGWjo4Qnr65x6MzU7DwNVZXfM4ZykTYvNMbwknFSM195XmPyLRu1CJ4Rw686s",
  "key30": "AK8uGCjeMZUNygddom8mxY3vMDTvWJy9MUmdAbNdrihig2UPoPmhwvjeKJo7XXqVPMmQ9S6ch9uoUkvvwdzqiM7",
  "key31": "2BbgXHsvToRgyRPrYKEFELYDaxBsMq2thTbiYN6dxdFZZDvDqnhsyAGV9LUF3jv7HDFPBpEuAJVpqevCZFg1ow3X",
  "key32": "LbSTQDoXZzX74qPxfFb72GN6vfRJpRMaynor5U7hgLi9PPbBkbk5qzVij5EtH4zroukwMphoBums6r52LmdeFHP",
  "key33": "22HGicg5f5iTg6tDqf5RkGnA2zodquMrqB3u8RMbtuYFW1obeQcjyHqgYi33E1BgBimMXyuB4fhGZK8UYUHwimNS",
  "key34": "2kRJmLXS1aGVtEVBdgeCEErWUysYgaKRMz4b28QdsaMG3xWWvuW5Es8R3ZczFScLopSDmGJ5xR5j7y9hSFXavYkg",
  "key35": "2BXHKEV93W9TqquVnVzwTnVmxcvJxXXPUcErQDJBUHkMkDUwRvC7CjthSVrMpH4mgEXPC5JfSnSPWiy8kAWMvUGm",
  "key36": "5iMHYaWN5bJk9C4tyc7hLPrfRL5TtLjTNnFJtPn1gYrB1cq8594uXc6DVthKwfRB2MtAH1d2gqvZEGTerszTYKtx",
  "key37": "4QoiGg3Q5ugmJnKEHXmtLdBNwkQD58gCUAe1aCnvp3eQRBYiDYsocfNQPUJuKaSC47mdeusY5phJnkFWf7JzknzZ",
  "key38": "66en9HPoHMRcwhqvxqfx75cB1G7AGC2obxAA97TTnqKgmWe1uaRspaHsbb68G1upyEKkFS8tyUYtL3M6DD6iuy5g",
  "key39": "3gRzvKPunzKnt6aAC5dur5pb5qXPUtgb4VHpb7C6v6FjZu1QWgcsX1LLby15U8tq2bDz4DAcHNPSs3YPYLoMhaAg",
  "key40": "51nerLYQ2xbKn3KDZyH7vySjifpvrPsuqGomCCv7RW4Y2kQGRBsUvZ2H93pZPymrxbCVkVfjYauvJTwGNRdHw6vo",
  "key41": "4Cd1HCzhGBLyQvbAW7XfW5DJQnmSzPawPXRkp6p6jatHmbEeE3rx9Q89bKH83Z9kxuXyS4NSGyaig5oMfifEY6K9",
  "key42": "3hB666SdVCaC7QxiJiGMhuBVmEaY6Ldfp1uZAPPEMoDBL5eVzPEdZue7AZGcFguixXKwwSeoqundY5imQQg3kTXP",
  "key43": "ZpKKjh3d5HY24HYzkY2sTGroSsqSJQUxV7xC6gEAabukDBVbixsLm5VhiuLvH9PjxSiLMKuGT2Fe8G8romGzoPf",
  "key44": "34pbxuLDNAx6Zrd6bmMMCSqp4JJdmhobR6o4m1vMiBHHS7YU93uiJaHrjoixBXH6zoz4bvZ1KzV4gsGFrW1Wrwyg",
  "key45": "4TJFaV4kAoauFy6xY4cRDwtHeyw3UDYdiZjfwD3PgaRWqoTVCG7oMehBER7YQDK99pVC42cUw7Yq5PYLs6JUfBgJ",
  "key46": "bMQRK7WRVEP6Wu4tu3in6z8jFr4XqWksEjiRHG6tTRbtpWEmo3cNRXxEj8RedyYKVEqwMeGxk6qEkeVt9HfXJyS"
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

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
    "631LyjqVN5spb5UbLtcG6ZboAzFP8h3DeNFS1QAL9mzW6HhZt5QMSkYcL9fc52nWRVQ45LoNDpP345LcRzQmJix9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D31o7977rCo3oPXFGT8kSv3xD5W2AoJLxBKEZAb98koDFfdjcGVdXq6E6FLy5mfdkrud2zZczbH13FrkG87gjUn",
  "key1": "3k835BTNemP9VZFjUe7t4YmRABURn7RZNBETSf72rsvZEqEpfBFJofjk6m4KdZiA4NHn8ejG9rtKXgs2bUidMoRf",
  "key2": "5GQ6FStSb9Zouc4vKTQSm9bURmjEmqdxvqBeuHm3KGKaPP4rrx5DnKuS9RrDg8wGiUSsvddXdnsk8U6G2GrJZwM2",
  "key3": "2KLKBXUhPfuev7YDCqaZA7Cuz3Eucyo12gpfezsJ3M8B5ABSDPGEXf7PdDB2uGJEgEDaajGbVqx9vnDwwEJacsDq",
  "key4": "2ngtctNZcrisphx3P3VHCNrnEK31MS1zEpGBER5EX4bQUEPxkeTgzFCsBH2hdjcRdSrR4onnh8zNZttETfz36sPc",
  "key5": "3sLTsxq9KtQsV5GjkhkjQnREsoapVMiTiaxpHAihnaR3xC6ecdjYYcAdZRnpmaAuNySLbCkEdmv9YqF5eXXUCgRg",
  "key6": "5581E183odfatMv9T24Vh3P4W2gpD5zM9T6gp595Eq7rgt7jPJEBRrVW24irCPMPJDDToNm4RcWVERPYDgBc3JSh",
  "key7": "T3rHWBBvmHhydcySTdHUPEfnoUKa7EdLe4NMjiR4R1qhT5qrmQb8NNvhZNq7PjfRLEbPLFkbCRz6E3u3BbVWXTT",
  "key8": "DC8cuNNkRgsAQS6pEUtJmfA9EGXavrQUE1MNp3Ak95P26fp6xnnyAajWEET4v5F4ztbzPh3yWQqWjBFgayWbDTA",
  "key9": "43QCmosxREo21xaVJsJjg49NTeoTA4By8aNJ6oigHeXZUr6fL3Wy9X5hxYEsACoDBjBvqrRdLvgBuWsfhTNdDHqf",
  "key10": "3fdpiw4XZmiBaJaw4MDmnbgi19Ax9jVbfhBTftjur2uuWryAjDVGioNZLG8Qkt7E7ssj4L6zQvb9ADrU8d4RpG1Z",
  "key11": "4UpUEn8uKT4s7Rc3Xzo6AZzXzVJAXqtW4hwrs1NX8qU8T9hSQdK1T3tevuqvPHMYAcYffxbVSKUkpjVPwisMgMEB",
  "key12": "bQhw7yMg3RC73HE2AWX7iXZ48jixn4D22h6xe6xK6gPG8M3RgCJoDL6LiVYrdPPCXHtSpEfL9vV9KvSF8RiMpPY",
  "key13": "2KDbN6nWhRjMKKAeaWtHTDANG4a9nUviNgo3vhMYX31oZXgD5eeEiJyKNBhL3FADaHvHNxczFS9PPz2aqCdsFmXP",
  "key14": "6aCZBps4Dev5UUZrqLaxM1b1nmAxmm2nFAQk9xgKgPbc7hMwDhZQdTkfa7kHSoh8QHLz3SLf6baS9VHXfg9BSav",
  "key15": "47cw7dufuBQ3g5BQEL5Ks1s7CDZ3LJ8dL7zdpmKfzshYn2yvwLFjTkoxg17NcfaGdXBMANZphzR4iiZtiTeTShVn",
  "key16": "2bnvfgfGeX4C97hghwmgP3KyP6GdkcAeX4zz8PMLJ2hLAY6bEvBhv22en92NeVfhBaAF7KLz3acYuaxPwtvsCLSt",
  "key17": "2HXSgucmYcCGyZRPdyvhtcQ47W4ks1AyF6cP9J9qmPdhV3K2Fa791F4q7JK962kQMfAyboWsmCTWTLzKMkUhJsQ2",
  "key18": "2j8cjtQNvPuuhCApCfJQhvXRAYLTNMMBU7PrfXs1yGoHu1jsHV2omLnHvhwngPoXUvscjfvdWV2XnuLFxU2CtETC",
  "key19": "2dR5Yv6h4SM4MUYqdjZ7h9oE2LzWBCWGxBfHnagFjHcejSiu9jWPzP7G33tgD2Z1U6LhCCGo9dYF9GSrNkF65Soa",
  "key20": "45cmZnUDJkKLgUHqDYjWMg3qhBcDju4qgN1GcqRYx8bow2CxNayD6k8ffMwN73QUgAycuAuMpiqs9j48Lp4G2xaP",
  "key21": "3w7fZUBPe6gLxjs5i4VrC8zXvDJ67oDH7Ptuyc9nWVggpBrFaRs9Aarpn8Y1rCzFiXFyLPqc8Es6su93ZvCuWjxS",
  "key22": "2BGnvMfsPpE8Aj7rL4jjKFiKJvFQWMn5iLCffLdwDiUookaBS1ksxZsVZA1myzd9711GhpNpBLN3w1oeotCL5rw7",
  "key23": "4Usz29435Y9XJt3cGSzeWZknwYMR7skmJHPWjibjrUR8HtBsGv54AoVndiuWTKWLhswTWudg7tgWTJVpMboEzsc4",
  "key24": "4Vf9u1euVWkuRASya4CGCKmHbSnKvqi1S4Fn6y1RCGdobGLysVQHJBkTYdjruLqR75Q1E1CiBrMX2motHY2WsFHj",
  "key25": "2aQ79XDauwxGW4faBWehWCNSyuM5tyzZddH43CKkRjfYsRoRinsKk9tFK8eWLbDP5bpaes6TKPKE3XNGh1uV7JN2",
  "key26": "2u71buktYAaxSCfRMQqRLnwuTLZ3DYz7nheepVsQ9nKSNQDjUNJd2EkmCebGp8e9eEor4MEDKeb9zfbz6mR4xsa6",
  "key27": "3yJHaZ8jpbPzv2vNXBQSYiUVXsPreQbsCgKByaWWM647aTZ8MiBYZhPgYRWX9DYhFWkEGFbGZrJXjLFUecuE7epN",
  "key28": "4veMH9Rf8GmWVajFLLpHFxs71K8cLBTVXZzhZESJXEx6gyWSdpsJXp6wj57GtSzTpo1y7s7d1Z4U1Nq9BniP8JZa",
  "key29": "5RXVuQBeJAp8X9BYfswDiTciTdkenPzRBMNpZzeAoat3FSayWNEyeocZfx58N3ZDQyYctb3zJ6EgXYat4wdecitQ",
  "key30": "1fW4k4oVHhni8C2FwQ5b8gryHsGq2Z7y4phezqUhR8TYW7BFRwdeRbMZEo9JHKE5a5hYbCpRT9jxYRZSMxZ8vW6",
  "key31": "2P1bMEFE52aKDqWPHsKJ4qqXkxpxPcniDYeCH61RtZec7EszGoA4XJ1knbcb9VkfNLs6TwZjkJcznNJXcwkP3zUF",
  "key32": "5aCnDfSGRBmUAZkLfLLDcn1DJF7W1JTJUiarWmJFywCqRoAn78GUhFCYmctoqpzpQuNpZ6enRC6dwjwDA1cQvZpa",
  "key33": "BTqgCaWdxJ5c213nHi1dXoyNQvs5WotS2k5p9qrfed2DgSQJLsmjxjh3i4auH2w1fGezDjZ1QmxykShySSVRMUy",
  "key34": "283fXbS8knbEeVBfYRaEwPvFz14Xa7Lvn9bizhTfrR5FqMZbNUApx72sE3qCUZeSa2m95AyPL9YCtujVvcgSXkLx",
  "key35": "4N9tC3VJnGEEpXuZ29NjDCFm8bxAsm7G3uffREgEZMLTENpbZfWHRWSb8xRgiNFYyhpmhcG6DB8U4Pf2ovVUbzsX",
  "key36": "5ETPoXkRPSdgTBkd4J3sLcs7kV3k28F7bJLagDzdPMNEHzsmf2K3rChQgDWtzTcB7y7HdE1PFgWHqYDSZmNJsV67",
  "key37": "6jE6QwKfvQyi7xbkCnWzRfN9jGiRatXEmhtAKg1jBT5zvCQRpehZ4q3xTTpC6XNsejheJyx86rs9veD1MQaAdFZ",
  "key38": "PfHEYhVMXnQsxVJpp8mt9PongqB2WyN1wYQhUWPjousZkp9EhDyidc54vnWydpzWY8xyEao5BXo7kKDuELyAC6j",
  "key39": "8GNV4eVsE6AkdUgrk5hzs4C9f7ebV2azx8uat4XsYEVEshQDSze66ZeSDHePh1S5tSPWwwDtwqmCS24AJVRuSXz",
  "key40": "hKm1gRCC9YU6ZMyj83gZgtDxRKevYmJX6eRtaXgfRkXnbN234EirMFC6Yu2FNwfHhWG931WSd6bNRU9AYJawsnL"
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

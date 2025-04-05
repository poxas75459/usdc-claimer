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
    "2dtWMAXJYCmiHeyJfYxDHyipt1cPLESxc7pbJLomcYLXwUrjkMDjtsmRr1QdgwUXJz1MDTpBQHtuLMYYubVoz1jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dp6B48c6vJ9cCw9wLFKWVeAVYCjjoCMdexLkAtnAmaB1VF4dDmehvqvrFTA6bhhF3KX8vzenhzsTd4f6RW6iVDz",
  "key1": "4ASzMhF7jkcQkuRQ34Ab9PFFDwVR7TvvRZTF6EsF5xV1eictdCTDAKHn9dhe5khU7hCfM4K8rKxvMiecWkaMgkTY",
  "key2": "2QZB8YrA9fMaNLi9P9LpWzoBygZZ47kKvyeQTrpDSrDUGpR1eAuiwtiA1rCQmAXyMmu23Z9dmQqtV52Qe3ATge5D",
  "key3": "5bRuRpcgegbhEHeiszEigBh5e1pdnEVJM58BTr4V4EXG7dcrgX3CHVKbkEY7BbU2GjfDT9tiPVtucnAdYRd4vX6w",
  "key4": "5GuSv5cUaVzmxcbN5MQfrm4CAxSA7fGCjXPLFDi3R5yvGAt2T6twJLgxtUUASPP2hkwFEpA3N4mwZRM1RjpBsumw",
  "key5": "2R6JAb4dZdDeC5Eg6JTdqnoaAFQ3AKxtLFaRci4U5Zoz7DuE7LMTnzVyHUhVdtmqgxbafErAhegJeJQyxHXYt6UC",
  "key6": "3ATYMeNdALmALLJqG95Ui3kd1dcZs9qdSnjiziqyRQUbu6QFq65cViJrxzca2CoUo47GdwESWFKZvFdrNGene6kR",
  "key7": "3vb8ZvVw2QkRhxneNdzagZT71qfKxE3i9XhUqGDBwmKDyFsg6AgBjW65KRQiXa2rQSbpbekhiQbisn6SCALpwjzB",
  "key8": "4xBRBDYCnGMb7PSk5tbLW1CEvz7pLd9kZv1YrDv3K8huhNpBNwiZyhw8TnLzUyKjWEzuJ74FHT5asNapwipDCf7n",
  "key9": "3v86Jsd2vUywFEnoek5KNwuyZKeGtpPi5YCmnhvvAW98uG6Y8H4TEYMB6xwaJEJT9Z87Vh2iWk2gCkJF111fdhzM",
  "key10": "35wXuiRjXSiiTjie3K2uFskCW1Fv8n8hX2oLcnEubGYBD3rDhD3UyiAyJByFznoj8X5LomCKzFKqNhzvHYyXY7R3",
  "key11": "2x95QSXE5pdKV3o8bUww6ZPFe9YSRhjm1hvQY7NeFjdS85yS2U4x6gK5u7pFy2WVRpPUCzu35EUimbxJHmGvsHea",
  "key12": "4ueEdaG8mFnzifXS7jUFqUDkrg5ZfuDSzrssFqfLm6QfGxS1eQWMsHhHf6nSyGRPHJty5rRXrDHHXxHsdRq62tTL",
  "key13": "Hu35y81GNPxSKWU39MkbqHsWoehtcvMPqZz7ZynyT5H7E9BqrJf9TNXjz3RBTpXoomLwkQuxkB5twZpCyFG9FC6",
  "key14": "5VrTuhuQXrJ3QGqS3oLa1CvRmQdT61HXq1ioRRwfTYK8yD31CjvchMDzm7gUdGSu1zqvarguvzCXtncCXvtPSV9g",
  "key15": "3Va5CXi18Cpd6tFspNwzDXqja2ydikdJKatW7swDfuWAYhpfFDYF9994Vs2N1GrSjXJWEFett2aEg2LFFkYPkdYy",
  "key16": "2yYMC5xhvzkJHEnzmJh7ayh26pWEYB3TkoTo3Qf6YXWq59W41PK7skEjwRPjntkJUZWLZ2CCcyUcSbG6Vmb6Gh17",
  "key17": "yCW6wjvximS6gTvCk6CnRwvS3i5NyoHdi4U9vLe5p6hFwZc425o3QTtdRrbQfSkK4QDd4wygVsRsx7vk6Z3yZvQ",
  "key18": "2Mt8q8Yhg7AoK8RKc4RpiPAxanTE1H8GEGCFpbNkjBwfZdYd3ogGUuAdEvAtNroGVaF5ynhJsmmoDEUZJE9rnRec",
  "key19": "2fk4pRiTqYY4Yj1fmdEfmcbHcymLBoGRxc5PkTyr41hoxHQ5o67WtKaG48XnKJskecywz3xexMiTGAYXNKfpQVhV",
  "key20": "4GGvHgLjRg8JfNGmzttLCXuSjaCpSVdrSmkfkE9Lbc5RJYvMqsTEk3pCvbMNC8Ff1apMFv9chUQCQVkbugRhe7EM",
  "key21": "5BZecv5qe9UjaYCpVNANxdMKNzXTvZLtFWkYp5GXQduf7SMkdkP4L4u4zks16LDE5eiU7nViSNwPDm2AEYXx835C",
  "key22": "qVtDgDw6NokTGiuqP7Bm1tuxRRRWcFUAkviPcBY1PXTLogRmxZiRHkL9uu5HZejhxaJb8FyMQobVjQzb6UsMaZN",
  "key23": "LaJsT3FEDs2VVVqsrtatvgbuP1AWCf3xPXkWcpzqHHAUeDycPJtUGLV7otkfhTMJZM8pz7Lpvr3cLX62HsTtzSr",
  "key24": "5KDR1pw626cpqMKsQsV7t41EyiwLQdHEMg1GBWyB35Xu1TfJuvZumjgjWziB6tURVFAoCGyk5YDQfkcEaaTMxqEQ",
  "key25": "SFYAYPiF43QLre9M3eqL75J6XmZiEvZRC1QouMNemeAY9abRWAMLxyUHdmJ955uffEHZ9RB6ormqcB1Tkn83iVH",
  "key26": "3jAhWedwwvcUdTGkGcJSNKpB4yX76so78o8TtehCtb2ysrLKHHtDX1qsTH4ksKrUErrv2k3bCUe2vpcDVBVZsQwL",
  "key27": "4fqC2Kkc2DPqp5UzpbULsr54938FRmR5XycnoaSwA4ifYvd8QaigdW4MF1GkoauiJMhQ9iJFDhMhMQCT6dUmDbpT"
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

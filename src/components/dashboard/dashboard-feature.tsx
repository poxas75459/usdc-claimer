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
    "RdU482MYRDE9EY3c4dBH3otSTMUrhdTHxZzQSGQ9rGEoqEmwVini2V1y4GFHAcKFbSD3fUz6Yvd6HoN24NEJFP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7WnCHH4ToKkY3N41A8ymnF9n7oUPaNKHZez5yRodbJR1HuSmmCAvZDbRWnJ4jbp3kNvvhzZqF98AcnCuja7yF8",
  "key1": "32Z6pZk5jMnY6tdrqk23RtbEFcS9cpHcYJ2bLKNJbKsNGrwWwN4JA2DSVfwEhHePYybuFd6zJ2Lcc45DnHkB4j7j",
  "key2": "3L9mgKq3pM2sRq7uX5Txvp6kmaxLQKrBVqMsnV6xqXmfvwJ23rK5cJdf5cikEcx4VSco2YUnpsE4ezZ5dXZsVZF1",
  "key3": "4gJSBxmwiFnbryKybZSYjPgRwZWXgqaFRAK6HTd284NvCaDWPNSZME4f5Y2zQHtZBgzFKpQUqpYy4E8fr5YaJgtQ",
  "key4": "4jrru61HefdbJgXWd4hvDZJAKG8mtX5oNQ2bCfUHQVtcLwohFmmMMpTV4obyqCmnRg6uXEpwY5wxiNnFGTik9Sa9",
  "key5": "KsboLBhugCNvJB7pc49vkHwrpqPeRnv4zoY1ExEBeZB49QHBmxLVp3zCdtmDywMMTrh3i5CsnQ6nMnoShZwsdsd",
  "key6": "5W9wbdbFfECNNLPoR9o3aG13jZ99xxafSMap3CBfNrjNc5E431cAdk4Ne6BKPsdugAU8D7ZwUVQemesqjhkuEZ8i",
  "key7": "2KAyk4qFMWe3Ma6NLH11E4RvMkvKMZaGJXooRtFgZB4yegSNb4ULRGuoy4UTqtTVRtGDKb5mK6vYzWvAEWLEpseq",
  "key8": "51bKC8gh5PrCRuYi2kni4VyNyKGatELQk73wwjEo7MF62d7WEv7J9qhTtyd1SyXVKHbXuz4ddsdLLBjreAwhMtUH",
  "key9": "2dg9PsECSYTZmqPCDRwF8SarZCghtgBcdenvj45unkzHy55DMkJysq8BMENsdZzxD2D1PwcEohnpZVdHB2UuCRxR",
  "key10": "HebTpTpSCdwpgZR5mWqKs1mQCXwPUBAffZwWRcyi12MDsNUsywYNajiH1iFJ6NUETtuabrMag2Hz7WUL4r6LMsz",
  "key11": "2k4tyetmegC9AtaBMvrBwpDKskvviCVMMst6nN1vCAztJfJTcYxfHDALp2CDr1RqSqykkfqCk8oWpzK1nWEQrBRe",
  "key12": "3vdpqaGt7UJjZNT1sK5GANWtb2iAF2vfhYVWXiSRmgt1fr8Jahqgw4Sztj3L35wfE6qZyVuLfUDm2zu1TH5zraGC",
  "key13": "EMKwhZAHBGybsu7ijhbqnRpnmQojKn4e8UkFqDnR2o1nLF6tUqtKtbp6idQUpDbSHB8FfD4H5GEVtJSCnJ23sAE",
  "key14": "4h7JFG5eR2vGSWjdtyfXcXm3qjNsb5chNhxPJiGRQwY4ghFBWgrYaA8tbfBbPKBLd3c3LF4bt1pAezNmqWUN6jCW",
  "key15": "4SMQ8jnTv8hkz9EB7Nc5sEiwe84uA81NeFwjcYbX8THvMhEsxkDLaj4VjRDAcUSjDjb7AAAt83CUW4TFGjKk7DLt",
  "key16": "5Lsbk5eg7QngSdRVVfMuWCZCr1wqnBMe7YsFNQ3D15TcjCixMgWGr8yPc2rLYyqdkL4Tx2KvmeKXEZfucUx4NVt4",
  "key17": "5FctfPTMTEzNAtu6iUtDRqBkmFc8Q5TGNj3PghGYKUyQnyF4EX4VbuJ5VhopoDgM6qKwU3TWXuGS54LV3xRw7zC6",
  "key18": "28wWaZhqXZee5AgMFnJEG3YXsppBUQV2vHh9Q3QZUYjHrx66dJ4ZwxRVtWRxrxBSMRZL4UwhgUJS3Mraz97MkNMr",
  "key19": "45w8g9pjnVSA5zBtX8uJ8R27LFZCuNT8xm7Wza8bu722y6sLkMK1UXjrgnq32iBTyuZFHgVNhVCdoU69D6dYwgKg",
  "key20": "4rvRnBUPJ3eKs1wU6t1Mt4MgwKaETQX3NJBLXtPQRuB9MzGpZ9QCy88n2xQJNv8PxgAk63w1PqDLbWPCDt5hU4MT",
  "key21": "4XGkbWtLrjY8JM6GUzUL5nxF4tPUh5sYzV4F6HApVAB4grk5pyv1BVtZdkrcXCjJK6fL6hoimLtMgekNGAd9GPjA",
  "key22": "5Mn2jMNzzVvN9Xo7DQduoNQ92K94k87MYxRTgnAftM8NZCgQoixMBhkDspumzRU1ZKxwFTVsxeCS8YrAeB78r8SB",
  "key23": "3Aeqg9KK7qAcsYGz6MTP13PemM3WcgCZNyFbVtwqNbjacQmj7D9sLUJZaKnyitJuq66d4pdJcwwVAvfsh6WkN3dj",
  "key24": "64twpuo5KGfWyEG8orQZvmwg1QrNeMVnxjjJPu6ZJYrKe68wApAuGdxiUJpyfLenMvN3H2ZUfjJr3szRq6z1qMi4",
  "key25": "3wS49nE51oA2pmDMuFWEmnQc1SbSkcyodikjjiXJZCwDCBUrw9K7vKJXYc3i3S2F55ChUvyK1ZUMVY7sFbUyr37j",
  "key26": "Ukc5NMpHvVfBZ2efjiaAqp51CBYkihy5nUeTgKWgkHZ7XQ1hBmfuNSaB5ys9aSjHGY7Ru54VMYfzp7ofnUx4fZE",
  "key27": "5bNYr6CEVTn2ayBdHSxYBeQvPfTKJZDDyHtq9oMn5TYVnApTZsMpV2R6uZ3xaM62auMgivHBcaRqLVsdmbh8eYkJ",
  "key28": "5deDVW3ZjwHtzXoYVSbXuboAYuZzFC68E96KhqTuH2oC6AhsCY5ewzSmx2Z3CsnYbM8H8Con2JqiekwhaKpoRmoW",
  "key29": "4PCwUZULyc3h6qQVLvrFJrba9K2ru4STRu9nccVwBrk7TYfbdmjB9vio45JMxLkQCVoCFop36nmT5yyrjPBC1zfV"
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

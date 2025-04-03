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
    "5cLKXtoak1Am5NQhRVtMcZJmqofHot6Mtj9DXnExaP22GsBgLfUQyrrK4oxFuBuRDBCNFwVTwZcbJoibbpyN5LKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MiVC5YHWSsUSbNf82S9aaYAyyYYtcWebPVqQfLspu8W4x2cCf8G12pR5ThiRkv9oxT4rqYmeKViCByqLwcQNNLU",
  "key1": "2Nbyo6s5ci3XdNJAdUCLeqWBPH7U5tQ7Knez99Fjtk2iyN4BokY35cfTvjH4cUety28QNqZRRpKoJiYyayTTWaCk",
  "key2": "4MU5a2vNb3qHwJ5uYPSxbsBbAfgngNVPWFHzH4apyyUGNJTHSQnuBm3ozamesUFNQdbBVbHWNiHW47cfwWPdkZq3",
  "key3": "5RyKdnEuan7vGcrQ9qdWjdqmTb6HSyMoDw54XgCSyGnr1bEGmNNSTcuFUMhJNCi3SD5AfGST2r2Zf3PrhZYTcckU",
  "key4": "2eoHsTBxqRS4U15Ke34iNYgFeA7a2EDHW9emTQ8D1mLSuf2o3UNCwJkKRzrrXy4jByzQxT1GiDapC9PNzkGbzNZu",
  "key5": "21yL7tDy6ohyScfXH3Gkii5RrGefDWbZcFzGrYSqHFmarML1DkbABxWfQyuH81d1qf9QktUYmgW1gx3HEzsJFDWT",
  "key6": "52xeYNoCme3zkGvSj7N9nmAzkGUg5gz9pHvZpnPzohGnczuhD68E16D39Ynv6572YMVbaraTmn6CYNVg5PkvCTbU",
  "key7": "Q3rtpFQrCDfSv4gFvbAL1VRgD2AmZZXq5YhgJUaXqtFmBAFS4v17QaTDBpJ6BqLPNqKu5E6jdpjQvS3hGhxRn5z",
  "key8": "2nPNmYapGhD2D3Amcy6mrD11Yp2HbPh6JkCfo613jrcgoYERXcvN1yNnPgF3E22rjCxNfevQLXkPqj1DZDZs7gd9",
  "key9": "Lqb5XubHoWmbUmY1rjZDkT5bcCRVNTX1vY1rNrEEL41oxe67NhyquLpfZNv6YC8hh9iUnj7Atdchyz2GFgr5p36",
  "key10": "5zFvbEP6P6JmrNVyLV9DSHjBU13S8hUUzoU9Ao5hS1cBTNG5xsJD8eZHQiV31kiNPknrjunjfSxkJhTFcn1iTLu2",
  "key11": "2pWe3RyAEV4uxMhXJN5KD9PsNytZrsbVPDv85zLdvxuRzrUjmJLbLn7WCnAVKp7sVERxGxBBta4iqR6BYZHRqWrx",
  "key12": "2qsVgtNuD515DS5Vtsw9mKzzJMmYt4AEr8eGa7AxVLsJ7gJkHxuzS2ctsTTPFty8rgJwLW4e67bmzyvAZFhxheHe",
  "key13": "2iCzSqZCJfm9qnqEFBuyD1stQfVAtQLkfykDFhZEDaJRNKcqzWbhWgxcqZu2y9iHsCse8JALfTboMnTtjxHiDKrq",
  "key14": "58bejJMi3vcBLE6uuERF6Tn5U4mWTeV7AsC81cxWNGH3yj4ZZrgcbVZjPorxjHB8bf3NV6rLmZcru7Gk8yDcLuZe",
  "key15": "4eRjeQgZiRWbqy7MtxNnzzd2bWLCsAsWuS9hYQ4u38hFfZxgayfxfpUtUxszWq2umYf7pe7h6Sgw3mDS3pYL2Mmz",
  "key16": "3PtSFySoQ6tLwS9qKSZR4N8H46fXmQJDPPubjufGwpCmLmfBtwW2YAcMQYhebxrZp4NHur1J4vp9aHie75tZXkR1",
  "key17": "3CjUptDbEHfC6876SuT8rju9pWH64dt2FMzYpsaonqGEyPjLPEokwt8ioikiLbKdsuX59bpXyTXdeJfNyjMq2igU",
  "key18": "4f4SxWcHiuBXYWXxYdB4ZczLuXz7pNeP3TSDdz3CEzaV49dRZ3wH7T3Gg68xN9jbwxAFq6qk772ZSiCEdcEGjBfC",
  "key19": "5WdXZZ4L7s4wZ7pbgpkvkZMVHCDpASuzUsAkoyaiRsm4hGbPLxMZ8X163ELkUPThrtJkPngkSNBqJ3UkHz3w99xc",
  "key20": "3AjgqY8SkXw33CK9KzumrwXK7REH2RuAYTUwXszHKtzD7TLvTZieBt6zMss1LSsoex2GVBR5ZRi6XMz8yQh7xbzu",
  "key21": "4jmje9hkRSuxbmESn7nAjJjeVk3JZ4tDD6C59dpmgEVmjfCbW4ktdsSYGxp85155i1wb4wZd139vTYZuKcvjKrRy",
  "key22": "5xAipnPaDHriJL2ne2tzQHrK8W4nMpdnrkmc7kka8a5hdJcLdjAonuEL9jMEM8waPpcVLQykVPohRXxcwY5RHwtt",
  "key23": "2aBPQy4uPLY9AFdxv7UJGDWde7PV7KBGov1zNga72momzbim25QnysSL2h65RSQyp9KzfQroGNQhfgEh8i89RSKv",
  "key24": "51VFmni6VKWyjZnt2rMgacj2hLPoNJE8jaEJHyVWNPDXa1GLiCFanyRp8ZL3JmjL17RrEVESRgHWbBy9Unfwttf6",
  "key25": "3DrBio8ouPDu4cLK2BzXRXXdgUvHrELfJcgCTrwbUEhRth47TvZnzSUe8ACMXJfSvRdvoYCQKJ2xWLYAQ34z51cz",
  "key26": "4kLUbutD6GTWsr73FVqg4ZEcNFdTE7KG2GxkDv8gAfNdhCpidVvQyKYi9wLhxeYeG23QPkVTanVenD51ni7DjSjT",
  "key27": "3h42Vz9t4yB7nryYqjEWVn8znW7E7jKtKWqXRmfVAe4b7G7D9tBnf3RnqBwNdPPZz3n3bJfyU3oU3DtAUUkTHoGL",
  "key28": "3fAdXWnjTtsCBAduNGPDRSh5sUkrKU2e1izyWM83X6D6Pn8vbhupHAtW7tmJWhRf58Hf4zvct8KzFnf5pL2FqPzt",
  "key29": "5nscrtpL33aqEaN9wVFyRrSd3PmJThX6vBaXcdLz3RQooNape779gU8aYucF9A7TMsCeaSnnq6onBvJAji2vUPde",
  "key30": "2WfqShpoepc2wJUeEpnDfbgV6xyfeBPQSkoXDGGjZkyAhF9zwexMtwTs5KAe4Mns9K3y7p8E6c88KErsvuGhKKNU",
  "key31": "u4X7FZbsVmkguZK5hEnWotSxnHckaFB4wGAPQyoCq7sn6W3KhaoYFGuaXx3YxssTvWWD1kgde9uWVJLnhFe45jf",
  "key32": "d41VjaJUV7pWzv7d15QmJGJcKzrrDAfQq95YYPNd3CEZzYUfAirxmnaSBfTXVX51Rjy56vLB6LzRcyHAv6UW4q4",
  "key33": "49hx63MtDz37DjiP2N5NhwGuVUsXn11Sk4s2Nf8t7XvYJzieZGXGyyYygfpaKfAUt9qErbQSGaQdwvWE7PkAwTU",
  "key34": "qZ17iTRVMuSThqmJv4HTdgSanYBpHBfTfGHMFtcmYZ6cwTS1qRjJXFYoT2KFM9MSKCCEb73G97z19hHEswWU1bS",
  "key35": "4uMMeup1bd45DkZwNgz1bhGpCiXB9TackKRQsGamTxt7rTJPq6c4mLVa7zfLjMSmVNpQ3mdHj4dpXVcPHePCgWyE"
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

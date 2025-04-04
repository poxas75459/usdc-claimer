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
    "41uQwDL9BYcmdV4mEz4iXbZGonsZieTXcEvGgopQqcLLU9yv41obdouAJW23dfAugCEBrrJypFyAW6k7oJQBNhJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoZzEdLxEWcRjsEZuaxVbDPtJsVuU6Nwpn21jGBaXX2MmPNNNfngp9ztjUmYfLQZRzfEwkmnALDkAdGnsuf2ToY",
  "key1": "d12RzuRAnTUBPUkx6gyrqnp2U4peK1ze5mExzbZ3XRGBSHMBiGxSxdiy8HpA6r7bRY6mixX2KbeiiSHv4KQrTzv",
  "key2": "NkHrMPDizbanG7dGV1M1Xjtbgv8rHDt1RbXBH5ZDMpT7xWsaLvt38gqamADrPkTLL2dkbpNXHgWJ1JfNDA3EHYs",
  "key3": "4HyLGd8peocW7ajpsaEu9K6tZhNek1egYeDuR4NDzYL1meNz1GkD4pnuLddtbvinsSjo7UkhCMUHGqXRwtbd3ZQm",
  "key4": "5vH49iz57UzizcRngZKxajTc7tBe46kq3Pfd9TWnwErEwu3dCj5gifGqFvmndLp7L9f3tXwDiGFW8SHdZePp7KBX",
  "key5": "3RuiiaBxxMw1jRtk3cec3CQHkypVGwBrcw4emA5bfjDJtUeWEPEornhyBVjA8MTg5wAvHFdaFcvy8Ct9Q6fwej5v",
  "key6": "5T43sxiq6QidfkAb6wDrZZrP75L8oMmGAaQKzNoYSen3gFWm4A7ZgeajtkroPPdUgkNcruE57UmyB9oeA81JrdMx",
  "key7": "495Y8A638Hwsy7E5TT6eNoAgtJhxWZ7fy7HHWmni8NLFdSjiGRYHTQuCjHAxap2uctDvXX4ddqX7CRygUbK6RtUJ",
  "key8": "3HKcFe4GgGkdRuUCSZJA9Y5KUVBLma941tdTrcnNGWJvknNHpYgRGm5vZo5xeiPpmHZQxVkqojskZtgs1dZeBnhF",
  "key9": "h1sjRtetfAGZJTxbnuwsEKGxApUrjauut5Uys6KxxAiwq8qGgNTPziWuzHdVEZBy41NovgAP4SyYKgQkY1eN6zR",
  "key10": "3iRVU6mP7DrW6FvCc9jnUAu5XDVnXnA1fU9e4MUdWnV5cBsn7fmoNq3LX58VKCmh1PzbaAub2VUTZPGPSKZ31eDr",
  "key11": "5mPg9novuMv3YPQAVTBYKm3dridTdVH6qzhZo5NsF981WgnTrxcPuyzbrPScd8U4w5X3fLQpiiTYavEzFqumGhkG",
  "key12": "5M8exG5uhjoVL7ruGg93ZXvwZF3CbuuTAbDyf253VGHtpB2X2QrbuCuQdbSh9gtyJmC4VWimBazvpcG2W1E3QntW",
  "key13": "44QaYaevArNRPYc6wi9c378UuTL2tbL4Uqra5Ergj7PTDZW69CJT8t9dSJ73jrDKwxdwswS3Dt92ziVWcc8dMgTy",
  "key14": "TDgig2PQsJRJ41Ak7RMRT6kZtzbwNZFi7dguUNnthCXBcPH48G4toV9UcAmBNxdCDNzMtSEXy5ZRGJwGaEVvDxh",
  "key15": "2tM2J5udwt1NXPkN4mUoXztFqfgpftKvjrUvPtXfwKc3PEcaAjNoHeSQeayY4h6vw8mDhnGgu7LcXjWoKDAGWgFi",
  "key16": "H1s6Sxaw3qo6NUGRApydSqHYqKoMc9yU3g6YiwvqTUapog8frjSzYdmT54mFBEcpGDriqBMqipTnkVfsAcoLB7f",
  "key17": "2EikysmUSbrDndrhe4T6vsyUd7cCZ1M7EmLcFDhDpHXjJZ9iU4cRjcFgTQUYaJ79NC7RLzEfGrXyKyHyLdraHuXv",
  "key18": "U3ieTgw3hzej1hv5ta3tAscXhYP2VhtYQ1E77ojHR3nTSKSi1mhQgjgWksMo8Vzzx9g392dsCzur6zyXAa83BeR",
  "key19": "5TZYYDXki2za3S8qyz7p4f35kQ5wMNa7xVLRBFYcvvoMn9rcSAQbQoDufvEfZuHYsMHDRpUVPx8evY6B4Cxtkd8m",
  "key20": "3RLgdywC2R2aK6DtHDkhfYPDDGrkMQkK3FC1yAZjApwtwdVqKzkomZGZ3281JtwMwroMRiWD56WP6TwajUeqjA8g",
  "key21": "4cdrGbharXGfLWp1mromzdYPT12z4hStZjMVbQXq2BpLhnSYMQ218U5KxMeXCV6mb52T66SZqY7V2XuZFip1DvDj",
  "key22": "3YN3kdGrvYEu6QniKPxuUCZa9J4FJCVHem3jayhvQh9zdZfppZwBL1yLd4vRkx9NP7ZxEnfUtMoyyvERved2SzA",
  "key23": "2AmTxCpfESVjZDQ3d1evi2jh6q8pfL1PBaJCDTEwUrHYXKaMEMdRLviPWWiJz24cnWYcLHPtzZvXrQS7Pnp8XNyK",
  "key24": "2UNXNJDnEcsmf2sqbxVgzqrYDbBGBFTiMm3us25THeKXabxcqxKN68AHyGsNmat8c88WTb28Rp6hmhq5CbH6tESs",
  "key25": "3mVjw1fEmLAj5GsCTToPjPzjgjsuwK9TCZ9podujafyh29HC2SsWmHGwqqYeDcvKNiZTZiJPuexn3W1C68rVM4Zg",
  "key26": "3MsfX3YQy6EdhKzefNmM7NDQfphr3KDx4LQ4C7dKRRiX9e8gM5UJ8RTP1GeiraRw8rMC9EghWnA1wgd2jaco3HM1",
  "key27": "3Zb8uNgFXRpMk9jBcNpKLL3d8ahTnnjpVUphYbuJ4SubEAB9hZBHbqgD4DDxyvhVYMYjHNpLA4heunHkj3VebyjC",
  "key28": "5jwtkQzs7ymuyTTbthL8uX9nKVYAszFTHSJ2RokaiPADFikdxR1ee8LKVBZrHFCVb5nbFeZW6GwobktMFrGrHsMY",
  "key29": "r3KDDK1xLPmD2BMZNFuBkxRoP9k3j7rw6yTugCexAwSXhxiMrHbkNohX7FnBgyKxPd4m6uevY4GZtAFmXq9F9jb",
  "key30": "GATy69oM5U5zQd5q5NhsxwRA3y19uXkLhwrTjpDWd5UBsFqDG13dpZGWFgXgLWfXJUbLXo1zi2Vjk7VA7wUdA18",
  "key31": "3mzfNQXEwGzqNQxmJ2wrUad6Jh36A257pkhh7Cmyzrvi3UXFg2pEecQA7kSySmeskGN1XmFSJJMqYg7LHMNf9ejc",
  "key32": "RCyCeFcdVRwKy1FhdGtdDS4AFbHNcGYpvRfoeBwg1TRaSYQVVUyyapiqsiFntoXoUiMYyMxnX9yUM1nQMpJRhMn",
  "key33": "3bXmvhxizkbr3TndhFVvNejqotH2zswsgR5Neuwjw55Y8BrKZuDh3ttjjfowFcuc2TuwGScyUH8Kzvrby7k6vmxy"
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

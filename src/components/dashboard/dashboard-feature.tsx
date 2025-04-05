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
    "4THWMQLbca6wZLcEqVCLHG8ZcAVwLKJtHi4tDkyFXEiJmLqMG7kys6jLpB49VDSzJEt3L2v32DF6kVSJhkqNFr8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2joUs7RT5rowVSzCs7xLt7S7frFWc7tLsx6KEibJXEh9aD41oF8aZnbH8kQpJBipyTt4WY6thhQwUHCN9okXekBh",
  "key1": "xxYEqK7Y2fVwgYHXETio1vT2t3Uy99mBeuN1uKErPYRdnjGL7Hm2Wp6FLLwUzYKav8jjGVvVEy8KC1M5fVVT5kP",
  "key2": "4YMMkudZETjmNaYZKKarxANFMvSPvnvwppLb3iwxJpFMiTpx3KSwrmj6GikiFdGQA1MzuBkK9Xzmhs7P2VDHnzvy",
  "key3": "2tHtmTYNiWakM8BiUCKnD77fm8UToLGDAPVidBz4SqUWhkXMJs2kuyHBbyW2zzPzzGwFn3vZK5h3XVv26xzdar6T",
  "key4": "2DJmcFYpzeS6bqAxsFaXur1AGgdCT1GYdKd9VpRa2UvmtLEzdjZoedkbJZU9iGkaDKb3ATAdGdNJAANz7caByYAz",
  "key5": "5ghKufnfMYrcbndTDLpZSPY5xbgXvJEhi4dwEYeu8ZZ3bimPuMtGpXhgPf1RYr8wGd6RgfngNG6LeMoFMgbEnhGt",
  "key6": "3WLzxkGX4k6GDABbgtM6HjPh8xxA8AgKZ8xxFsnYArshAva5eBokKAf9wifFzHJBrkcHjCE9UUjGNdf9wzqLyRyy",
  "key7": "2hdUd9Rzj9Z1cZ4VaLZtZ9Zgw2A9jptRPVfSqmE3pzUygBLNu3XEQvbMnP2yQC55BzvsrEHA2NxPrtAv3nMJnEFG",
  "key8": "3K6UzyesnJDR2NMMHzJoRfh92XVy3n6xqx4syL4gSXfDg8eaXBKxwJgFCCknBWvMr5Ed1z9jYxcw6r4U7G6GdiF6",
  "key9": "3RFRyRgMWTVVmPEsji7gsiF3F296b8KPrChT3rwueqgga241EUaZSTFhSQ1y6bU9nVQTUdbXTycfbpDP9KeME2z5",
  "key10": "42DrrmaAvfrqQKoy6vvwwnAz5g85GzbvLPXBikbTEpwcxmWFbSz8ugbwa4oLj1KaV15G3VdU6XfHcdE9gpMromxo",
  "key11": "3fKYFhpDfmvhELEQDPWbx4pHdz9VNzHuJfKtyqdDiFHZasN6DXJxYZo5LJwmnLgt7ZbvWuJD9MjwzstzqCVBeMB6",
  "key12": "JEekQD3nqbmBwZReUg719ydGqreYYWLUzKUtM7KXnZYsEuVDToTJiFPiTxhiAfzohimYubAeLKFt6GpRxaKHWgh",
  "key13": "4Ut7GZYEfBp61BoahRQyN4J3BKzyFAeQ55TWfTaNWgfYZSMJdF315tBavZ1Ymsdx8qZFafhE6EYg4DVk8qP8ugzP",
  "key14": "3v51YzGeVwAzHCQBB6eyCgfnP45CVkrw6y63SGKerPYAfuxuxXmTkR4R4ABbVJpE1mdjUFgKrZesavJAsowb61Dk",
  "key15": "2GKqkJbqEFiMxqKw1ZGV6iiRtBbh1igixZr6g2Sq4QZDUe9P27pfdS8CNCQD4b8HVQiHvyGweLHmJHsqeNr36cvQ",
  "key16": "2YTqNH9jiExy1bNKnPVQQW5YH9bRgmwZtAbRzv6DJavgPptU59GtPWUQC8BdJVau32BzfdXtE4qAE3GrkXubShCp",
  "key17": "wTtnnWpQHB3swMtBiAoKbothUn9MzCZD5CcoZ61wkadW9TTXHRDTZkdKdUmxEr3Ks21HFirgqJoPKkrPei3oRDg",
  "key18": "5VJSptbdZ7QxEJdo1ypT8qrKS4Kdk6D9MZGXkqy5B3rFtKKXWy3GDm9vrkQJp31Efa28nev3wmbRkTygxZi1sLzE",
  "key19": "ziJ9ft4vDZG8NMQwyM822ZinqaDMV1wPLLucV6iaeTLE8GxDiPVE5PFJ7w23BUVNNU1X7hfVwRpNubkwZJETFYz",
  "key20": "2pDNa2YEBW58as4YdpPgpxVUbqrHARY53QNhKosPcydxigmj8ktyU3gBcef8UmUehgNHY2xSrfadwsdmaH7VHGob",
  "key21": "SttbXAa19tVp83bnnKV6WTsFbh4fdr5eMp5MXqaPG3dmkkeUVkKjWShrtw9WbJmEyBBK452ooCQy85WGDdLpqz8",
  "key22": "5fbBwAWiqAUok5ZPQoMB5rTk34tsWZSBFRV2RfPn9LECFerZhqHYYxubjuDYcNYLVn8pyQiJt8MMLpMQnNVHdwN2",
  "key23": "yjpPSFMqTgjEaPUzXanK5jdKkgyZSKDeY2CJ1nQAYBeoqu3i9hec69QiXC5yy1fxLpP3HsmpGa2W6nRxHnuJspx",
  "key24": "3wwvFo1K58qLnDknr1guvaHhpELBSmXUpGpMyNBCtnDboSqHbYmcVQ5hKy8DqgoMqn3pJ6TB9PDu8osn1J882aVb",
  "key25": "2v1uGYL8iabyYPctk8B7U9Jug7tcr5ZKtr3LMNtGfbtumNCMvZVaqxWnypy77KCTokt2FMexRVo6VizJWWrMkH3y",
  "key26": "jDAjnTvho8fqRNxM6DkimFYngs6swpqG52istbCGCihM6FitY5AEmxgtost5DLSR5gsjfgd6y3133qxnfTPgcnY",
  "key27": "2T5MtmKoeRTB9nsHJx3RaPRmEanFVdR8BkTyZmG7R4QPYRNMiBwf6ynKF7Jp42ypmYw9CeS9MBvps2Lbuhhan6do"
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

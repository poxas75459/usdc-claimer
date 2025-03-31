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
    "Fy9HSG9Rqo75ahnocm5wXhueWepxGvbAuSne64fjQmj47fJVf6AxReXU5baBV7L1N9raQGGiryEK6egDiu7Hse2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gz1nasRhPzVnj8jQK16PYRz8nvPqxDabZvU3YpE8a3kAMKKZvmSRYViJeJgjmkKkSNsdbm8EVa2A9cqYGvQjkte",
  "key1": "5c9rCSDDYJmuhrFG1ivb91didVhHZw9jD4uzAAV6U6eDYfcnXxet1oGedXTf4iVVNYRUGMmaPjp229u1nc35yjbU",
  "key2": "3RcZANKtUCpCJsb8u5cqmx4eBM4g6EBzD9GEEVGy3KQmSWf5DyAWyVGXGNcMkCw7VCMb58TfVRwd5QHFn6Zmtboe",
  "key3": "4HG34NDWaL1HUaJngZxGfUqsvSXHMtHu6Zat9PXJmHKcgw3h5hpdV1mj33rE457iPFYhbNQVrW4YCWFj9mN39VwJ",
  "key4": "5jS9nUSHz24CyznBiTqiwk6m4JeLhZvE7pMxdKabeKK1UStjxb9WRoVUDBrFVjkk7BJTmVedjmEZ9DiZMiW9ZwNf",
  "key5": "5f7Q9AbgQtQPNw83dSn2gfjkX9x4uPeKejdND9oRk4XQGqtJH1tt51W9GZ1916oFi385fC3Jk926x6Yr9Mn9ohSd",
  "key6": "YXq8e8HZvrNp8VbJeJwzU2ETgKPFd46Zs6PdN4gyHKHkdmz7j6H7cEgptwT8Xct5Z75jkYZSgCpdanQACFyJ2Vd",
  "key7": "MNkBh1gJHAxAznhJEfitsJCj5VcgY9cFCJprgmd2MLqFgRTykFigU7RF59A5j2GdbkQvETvs8EGnoiEc6r2pVqV",
  "key8": "5rhH6PH8HPLxpComAMoagoHQpp96tYaESgC1M7yEJDKPLoWv32n7Yp5eNd3nYWeDxU56LiN7d6Kz5BRJ4VhBnHgv",
  "key9": "4GFXdUNWHANsHsuVarRDSjZ5ezCkz72tv5mFVD1bQDg9qPZ74vFTwN8ef4byW4HEjwk2q94GejaEV8Q3eKonPzBe",
  "key10": "3VHTzgpwP2uYiRFHNXBagkvbWf7vTNHLrBg1kuLKA5nLo1Hwsjr8ysQ6nDqCDtd2NqrboUjjXNfCwUYaTcYxTki2",
  "key11": "ePtFKgphp8YCPN7bRAt5oUazsw6VAsEvGkq9ZdoSYPPJvXt2yTxwN6QcBdYWMAnSb5afXiaCBCJUPhCqxM5D1C9",
  "key12": "21hZ8kWeqJQVjMKnvccuqqWavuDw3bK2DPQSwuAQwH2rUQht4ZUMgFybNLuZR5QoWpPWSecfhyv4pERGSHakMWzN",
  "key13": "3YQ37S42nRx68Kj8PAjgbxko5R1hTego3eh8epVdVzcEHi7HpJjzhbrtBuEmVP2YkQwsrEw4YMLTCnqjUUdnkccS",
  "key14": "4Vb9Sji9orzLFmRhWWR5FJfcxhggqnkbMq69aJvsGNyBRxe6sRzUY6q2hHqU2VcsVUWGMDkcd67iVsjS3XdJjs7a",
  "key15": "2nV7AuxppK44dm4WPM37fPyWgP1qUYrppasQgHTfc7zpVAzUExeZJ3P7q1yAtKr4prLarEUVU1JB4F3EU1tcJYja",
  "key16": "2JV1FVreyFx1NyYWBiCVHgVfJg3ETJ2gjyjbc49ByEpMwYZ6C163WXQWKetgA7daTVZ65kEj25jcMfFESMPz4Hgk",
  "key17": "5XWCkw3B1ra87JhouzvFEvWYquUstqpaoFUarfuBKpM2EjDguyGC1XqQFyPX3wyofh3aGsFzCryYCvSCZEQo1Hi6",
  "key18": "wPkURfwavmfK3rUdeXEdabSJZ4qAW4K6vLYN41y1StE17NndJgan1E2Hrt3WVxUu7rnUBSpUYsYNq5wNchFGt9m",
  "key19": "3TwFgE9sUZUSieZGyqfnn1qcRZbnF2yPuYPgTPbEvXciCmnvsbevv83cepFpzRqbLSsnWjJFCVBAi9VGjaVJuVKJ",
  "key20": "2kvavi3pdo3wEqRde2DusAjquDxSc6Hy75kViZPav14rBsTxPX7KDAkduByw11W2bZuyE9fCAqWUUv4J7jukdagf",
  "key21": "3xWY79LRueszgMkAU28VcHzKoQWUvFFMNbmuQLbcJYuuEZcEEDA96oxNk451fdV9Bdwcqa568ce27EAgxMpQAF8u",
  "key22": "3etzTpeAyWTTxi7Af7DyPymGqg3qP3DpbLqCyYP9sHgkqdXTQ9eFyNSHz1kg4t4zP62zhAetyfYKSqpttx68i15G",
  "key23": "34xVVRjmqm3teQbhvjYa89Tm4k4TvnWjApRtRAvBaqJByuz6xm1D5t7HTBfMASjfkCm6mTstKzM4LLPnKZrPMgDt",
  "key24": "3JA9AnVaj7y7iM3wVKE1H55wPvgPuXaDDpacKqHJkrDGnJxREvr5WCx75UMNhra1RoSt76pDHRgMzUsWUPjxiDrJ",
  "key25": "3s35SCSgwAbR2JFyF6DCwtH63k67vuYLSQ5BzhiMiytCS4qaxDQFKkfSJPf9cHNFPkHC6ARuxK9wmd27x3WYKmZm",
  "key26": "4PpAWDhxfoBm5A6eyzyK4kQr4GErnRdBvoEBxkxsqhUDdQoQBYinHvr2AB5T2jUefhNUSvinxAKaN4qUpDoNgw18",
  "key27": "GYGedyTsjRAnUhX5pjvk4NppqC2BhGJt41mCF5FV8MEf6BdNsdzo52nM8qZ1RLjoAiqA8mJ9b46ijKEuoq4psN6",
  "key28": "39qYEZbwV7wAJCWEDoBnBJj1zavYEViKRvcKKBWct9kGHzxCmbqj8MtHp18quekir2KCRNA1YGB3kPCYGZus7a7u",
  "key29": "5amYh1T3CpkR1Udn9TKiZNyLcnALU4YsBoUG2AYPyJGqG8MB93xS8WszAKfY3n6uwG6mVTjcq6NDyq6cy8nB5E8u",
  "key30": "4tb5irB1Pkndi9SKyfyib1VaCiSzQotdGXhTvNxHAM3aQntFYoytDZ8WLbf4Q4rXX4Y8tX13Z7hoahmHdY66vMVp",
  "key31": "4TzvXVswTcBU4pqnFsrJRP5c1f8nRmLCdyuKmbNPF93oAsTbmcFHaGpxAsmqX8yZNMVmk79oNUm9zHvF8d4766dS",
  "key32": "2dyP7TnPvh9oAbKp2xzPbg3wBEAXj7pW6twDrGfSrSKVkvi3NQERuaGj6ywdPEDxSxGSoMysxKRsYaUNdmH1pMph",
  "key33": "4H1h7jAfoqJMjK8n8ZZEKL3EfVqBrdyPky9M6jcJXmiWqBDBDdYJR3m1QAgTq37xa8hvc5UezXNLPMGhzTXbJ1JM",
  "key34": "a7B28v6xSguMGLFuNYDUSKmnpwEjeE4baJbPq2KYA45Hune8ABm7mF7hB7KziP46ekjPU374Ai25eaLXyu7BRKo",
  "key35": "2uKLEnwuvk5UdiYT8dxVzZGb6uPwKRUoWPXyngryhF321ipeo4eAHpjSsdz8iCoVwoUoSbsGdGPL4Jdav1XY8qhA",
  "key36": "p872sAN1UzCpjCqyDGaW3pRmeeWAw9p8tCNvV2P3pwzP5dEeojRnBDY1hXDJPTutUsCNvSpgfm4K3YzZ5TZQyZM"
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

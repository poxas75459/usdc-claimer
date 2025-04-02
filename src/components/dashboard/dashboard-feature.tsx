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
    "5Lbr6YoqKrh3fYhVmnzNGWeFG3FBLc8EAYices19vtofZBGoMF4s5wvP9Qcg5rpN8ChT1TU3Jvs3uWktxkeqeKxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYPdTkEiLKF8KzL3T4vpmqkP8hz1JquMHS2VXmwmDMDoiNnkbssovB82aY465ju36ob9syTPGeiMNbcGye9gkZ9",
  "key1": "3YqpKuNCyoqBxZjJshk3EBjoMm41DYKcKfAfFs9rv9XimzDJMPMSHP2g3qpjiecZGSWuNwcJEd2trLCXsbND8cX3",
  "key2": "4UmV8F5NP6FLk42xzX614xbMeT8e5RpGkSHfUF5gGZ9bBfhEnCv9FFAbuLE2qnaUQx7cTkta4KgiS3CD7ok7Aed8",
  "key3": "1o4J6eHvj4aikajUZ4YFC8KTxtVnvrpw161dH4PAAmD6AKH8LzCxjeVAQ3W8jKqKJcG6RH1KF1FrfhM4mMp3JG3",
  "key4": "3bicj7Ugi7TMTeSYTW8LJ2BRbU9YeCZBtvSmZVVYZ9k15hP3NUaQfDusdqNTcDoys5K4AeemfnrnCQZNg1JhgYXS",
  "key5": "5jqvYXzx7h4r7kQaZiz9t59KxkaQPJYUSpERqJANDtN3gCAhvm2xN2atCPPMPDyVoD8MeDzXLbfALq8AGj4rk1fG",
  "key6": "3PJoDygLMuHQEmmqQBgnD62sK4rHJTPj8X3z9RHewqaXwsCoF9vg2huWCwq3MwCTgTLHrZjCgT3yfnpmJPDoPHPr",
  "key7": "3zyTdZvKPBkiD7HyUxBzhdigK63n2b5mZwpQLDNRDsH35g9hFk4bCMPoChHnpKssvqZSG6qwYCgWZATcrrA9keL8",
  "key8": "Lr4pGPLDFjthKaEgB8dpiH3KgketU7MKMJ5CDLU1YbdnyhodU9qNxDESA8T1quGnUb4rgEc4BwCWCEJ45mpLo9o",
  "key9": "3N6JV1s6Dgr1jVwJQHYq2s6h92DRrWMSwtQXHrz5q9zuLPy1zYU5hHHML37i29UHg5YPu3WUvyLfwR6dkxRi1xgf",
  "key10": "3ucq2M1XwcRe5qyT4MNNBb2CMtW4FSVYWFm6EULZow5XhwvuZrBgvVijtFxXTAsnk3WybjSqK57eqEJVMzMNreRg",
  "key11": "2j2YWhwzixjcvftZjJ4reChEVB4GUQY8Pr1ia8iAsvSkjNSnh1vGYjUYenEuEK3VX9B9BoNTkP44SZz6XjYT9hf8",
  "key12": "5LaZgE2XUr43zEUMwkYnF9we3otzp5tAkJg6ZgBinDi7Fj8M5bxpTntfXAsgceFAYAgbNwuUPyiozDvm2TipqrKm",
  "key13": "4WgBTUs8jCPr99f3c3KkYVqdsbNanavKtKFHihZmmGCrBdAz3rUQ6Eu6dPhixWFKgJx6EKuZVCASQCwUznLgJnN1",
  "key14": "55b6KwEjYRtiJRmMXzCSWHjWz6FZGVxiQaTmJJwKx9Jm7qogY64QS1R7LX73uiz5mAeQWhw2t8EN8oHvSAuorFDG",
  "key15": "eRkRbQ8u7e6hD1NBf5b2UfuzkCHbPvAsH3hdCG9RN2hs5KZHxCoXzpaokekPPbeKLNZZdZFy6yQ743X38pwi8TB",
  "key16": "3JL4qdZc4VW3S8xeGa9f7kfVXkseE7cd9wthcGFpueXnoJHHqbizBdpq3jN4vw1JkUmoTuN5D2BFGKhV2U3d8ipv",
  "key17": "2d5pVNa7PRogNh2L96Air4bs1zou3daWaGA5DFenRqfkQ7dHexttfYpbSugceuHovBX7Y7DGynfkaYfdP78xon3W",
  "key18": "57QhG4tQhhMQN9RuhfAcEcjAV84tvVBa5wJNP1SkbSyutUZRTzzRQxxVWDgAX5gx6fsQN4AZfQFULbKY8fe1K6x7",
  "key19": "2bkwwqJ9CmN195UqCQ7tt28kd5G6uiHTKKLLZ6kGvfY7jhyxBcg6ndVWEvRVjYppGL4aDHuAyuWB8FvKmEHJn8QU",
  "key20": "QZYWNhMZ7vcPKP7NUC9oFLtkFEDMTp7ABuwaHfkfpDvTdHG8ckFm6cVnsTiF31tqdrV1GfutfM766GrMoWP1RMC",
  "key21": "5SV7X9ioyYT3emmxfhK3KwDgjt6nBtZLgwoTXajPNPNevpHXCgfSpaj4oArBZJHuidAnEpaxKYkRdqeVZvrC6DQ5",
  "key22": "vZNyg3NyuabQj4yW9ggTnjdMPAjtT4oUoqjxrDTCrxdpj6ZfJodTzZWYA2pDuQBy1zTejTQpHmrKxde1xs3Akaf",
  "key23": "2HnTK973HYmeWXBURktCNnNiwgLYMFpMaTy9g3hyx4gZFQ9LGEeeskbP1Z13iVqpdAGp39YPJ6zM6svYJk6hWvY1",
  "key24": "2P8qF9uMdRXQP8kUQBNrvu8pXNtAU9MFAWVL9W3VYYoJdetk9zDLm7i93oQyyB3o5953qmirZ7BsVUdoULhR12hV",
  "key25": "2vFLJfM9W37Mm6oZ8m4WANU1C6x4nJK1t4pBgKWmSkLuAKPpLPiqGwGu658HUyCBoHSCfE4u81VHoiJEJpw2fv4y",
  "key26": "4yGjiv6TV91irW7tuXw6Zu5k1G6roh8wvuoT68kjccwC8QEg7ApjiFee6eQisD6MwS9FHgiw4fkHsKV2iwHpmWEE",
  "key27": "2KnNMPrdsXERXEb12QpraeaHUmdvsHAPGbyQuNQ1ygxUMmoj1FANDta1LsR4hQuMhgHutzj5VauMn1xabEfcXds6",
  "key28": "67rmwqDoqs8VqAKRorJyXNa1utMHFPFCfUxdW1psHwfhyfSw3JSBTmp22qnfvZ7WsgMm7MLmr1WqCfN6ob2v7BJ4",
  "key29": "36eanmdTgtRt4YY7yYTdoqUhu4F2DUNErtG6jQB5ZeXzWFXBdfdSnUKfZBuydD7z4163s2GHBy376YPtjcoQDLvL",
  "key30": "3rcCD9d7CtmbYHwFH5SPYSu5B12GPiY8E41sWf43L6wmF8YwoaavdfJMq5Bc4CC97Aibh9WnYaRQB7TSqQYS9kvj",
  "key31": "3Qg3UimsixCcQVY12frUDecjNAc62zd1RGs4HxsGTagAbmYoNShbLG5WutVYuzuGC4mfM5KSET6Bo2DWv3bHDDBe",
  "key32": "2fPVF6oE4AGdyDH6LU6No1u6NxVFuChV1s37XHDjgNgF48yJnmHBQhiaTLe6A4ukAYD6BDyMWkQwAtNXkZtA98ax",
  "key33": "278Zt55vf4mvJyshMsuzeMmTmQKbTq3EJHzxeFNnh6dMcq8g5bVtHYnF2phtDQiH9A7qTkVLrTBnPLiP8hXqRPzW",
  "key34": "39cqqjV7fgK63FUZ6D2uzqsVjfUrE8664BumKFGCsFm1DYfqtBYbVDNGZxpyUaMT3o7pk1QeomzYjj3ZYsxFcqHv",
  "key35": "6Yc9Gi4w2uQXTSHfc6Sc4FfpNpY7nLPGeWmXPtpLuVf7GruQAMu2CTJNxLfS7v3Loeajpo5h3dJVM91Mugg2fV4",
  "key36": "2nV2ruQujuSERkdYorE8XAZv8TkeJbrgPDTVAfxQbdtR7CCfGfVgnZBTdwjzcSgVfuxVGqsxwBq7MWPhDuVxSahb",
  "key37": "9So9nu1xzAV9a181iC9v6DQ67fwEgEiXKChqRuaGneeuLg7zG1CPFb9559SYz3Eo13M9SGuUw5Veqg1y5hEwQ2f",
  "key38": "5NxhvupqSmFtVdSzxh3yLmY7WBPbaJioAFXhwv6qfQNLzZogEYQMfjA27D9xP89wS5txdH56M2YmoPjyCz6g5hbF",
  "key39": "53u9FENYE5LgFR6nhJzgEPDWpjjfP5hzSLcmyjrhip4PCw4AtKqPHYDUSJhr6Lktg3HxAewwb5mf6GwE1Y9x6uFi"
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

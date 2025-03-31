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
    "4SKM7wkd2h7AggrzDbKdmJLLoqBk8v5uLniWRZzahYNX8JpAnJnLgPuqB7LcVbhuwf7hADM1dXHXVWmgD2En3aEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hnhVTzLEKtdiRcMaUyfVg828J5dhteJQ5QZV4fQUSy7Ae5WmzcQ5cT384HHbhBy5hgBiYBMeaY7eTKERFkXpbRi",
  "key1": "U27wMppDqbPsuAPcjtxAUNKDAFaSKXWcN7nX5hBuaoayuzFo9mcGBUEj6Z1YotfmhQy5BrdVtNL6LKDBzQNGSbF",
  "key2": "62WUi91jbAJUo9HbZyWxGJ3FUA6Eb9N1kr7cCr1c7sKt6McAh4PTAhWog6y3jHMEZTSNHpPgMAWkM7feE7MKWRub",
  "key3": "2vjSQx5SuZn1ndnGPWWLFGmL5JLMxP4seM9kNntCzZsoQGERGMq71k6WsrzMGVpMvc3YMKDcQiP67BUC2hRYzJN6",
  "key4": "2GV9X9cNCexWDdNUu9ZwiZ7R4Z5bHCenjfT17arGaBYgBrWD3UHcwqCDnDWCVbNkz4Wz9MRjk1F8HAdrhHioSEHf",
  "key5": "4NYTxaAosQpMWzhDtdHcdkrEdpzdz7Kmqfv6PBpWTVutp29Up3LpCTwbksUi6hn4XrxX41vwmEpNbF7dUeVH7naA",
  "key6": "5A5ZbuJJdRq8KLsnw52Sy5QLrMzkkPs7nGH1GcaP2ah1AGub1NqZY3Xfdc4rnkYGK3meFZuo4dA8BMi61EJWeWVA",
  "key7": "36NBa8qoGKUJxRHY9EeWRaQqKF2DngsxX5gDXAAfxoP5NqRT1oqsozX7T8vWYnd3FMuSVuiyXVNAEkZCuUDNr5gk",
  "key8": "32hSFXtCdgF63uoFaABi7fC8YJ9x42vm67K3WticcMcx3rA6hpjfukKc2z1nMXv61xrguR3iBrrHuEf8We11vdMb",
  "key9": "2My2WPEf7WppvdTiLvD6brdJrPZojqnwKADyoP152fLA2tEyoxhSGtD3JEYzUiiXEes7A8gRZMVuXjptJeC1sY8x",
  "key10": "5qfojhNsLbPr82bmtW416U5Zze3iJa9Tn35guCMAVk9qsr8xJvvMqYwTwV2EKKSXT9jox2YqWRrwndgKD8xFgH91",
  "key11": "64Umnzqzsk3uXTJSk4trXCYJWsZuyN4znXBbGtUddyibwz3QeLt4p2YqFCbf11tSVfxYjJ2uJuais3ayg8LUbnr9",
  "key12": "2jBZSSCx41DK1u3jGXmbJb9E36iDAMcAhsQiqobr7uz1xofriqd1Rd1kJKT9kN9SCUCtgVi3CkT6qcCZQkA4nTkj",
  "key13": "2tQwWedgUySjwzu7KA1vzGXmcYVE3SfS3DoFNBotT4BUJtzw8XVemxB5XmpNT6EthJRjo5kgavSgLHn3t73uoB2W",
  "key14": "2EP6VRBFCKyBW2Kt5eGCRdeEzESXLMkGXvXciaH98itSp6gbkimia1mmwnnRapj5cfY8moqMNcg1MBSYqWZLCCWX",
  "key15": "4KkiCXJizw5CMjUXeowuwstif1Ub8mQmF5k6NKowpuU7ZaubK8Fp7eo9XjKM8t1hFgWkG6NmfZVXgRxvba9acii1",
  "key16": "3xdvx8HbnqCnuiwoK72TnmNT6cjiaGa45vESVLUhhpKLKzXRAbnRM63dx737GqGGv2dacjWXAaPVYytHrj1mLWmv",
  "key17": "5LCQR7bPyrt3mmfnvJnzfLBAcQ7KfMYX835VohRAvAnX4ScPSid9H4hJPVMhkyV2o21VfQDeZq81vUTvNWEyCgYa",
  "key18": "Mwh6PuZFXGAYCsfbNVLH4txdhbYQ8wpN5MNuVZuEftueU3K3CFY44h5VAARgXmxt6MDE9LUUn3Rj1m1D1q8XGRj",
  "key19": "3BsfiqagjDMi62M8uhWC8q7Y9JnV4P5i2CmmstVG9niZFn4g76SWt2FFQfVgfymuvk4EBin8dyZr2NRrp6YpogGt",
  "key20": "2qRARqarRvGSq2LQmrJni5vv257NGGdcyGhuGTNmgun33jr6gdJMUU6fVEVhRDtHqLafFYgXVtDQd3EDAjrRhzV9",
  "key21": "4HTKUF1XkVCqXsbCokLJeRGCkXsz9LHDaYDpZBQBDWnGMUdvacTkq76DLhEaXom348tGCbbAmTtuuCtwKR7f6gTy",
  "key22": "3zoMmDvQcQDY3eVBEiX6zrWBVrGnGcHvL9PFEKEw1bhoV7vw7HaGRaZxyf65mEmHFhedxpCtfpwu8bSdAaaqh57L",
  "key23": "DqiQtmVMf68F2CuM1rfRwJYXmC4hmfGeC6AqGMoEdCSJBXbC6GVKwxQpdNdvfPB4opdEjUdQQScpAVKzX7k3wqJ",
  "key24": "5EBg1qXhae4TtjzWR7ZdUYChhUZCptthKucUyKdxuuGMkeVFErXva7QC8YBDzWvEzDjrX4s2NispMeZJafUwVdsg",
  "key25": "4NgLQDsUreu75keSoSTKWVUCXBByVUAmpSW1K6R9eHmNeW8wQQSq2D9LnUPPqs89hEGD6yofYNC9LAnaonHCQAbA",
  "key26": "3yyjnZNhhxifVYcVtboP3L7uuKfSzLe3f2ZY9GorwDoi9Excc9nTqouyaG7fZmQrW9hdffQR7B2di9qfgp7tfUPU",
  "key27": "q9a2DSB2BLZdMahfyHu6qmohsfeb5s6ie91QuFZVG9pPEAgjLiFnQsNzxaiVUCg1e2yNa5GmSQpKHsZotDqJvo7",
  "key28": "4xCZzb8mbDSNfHijV4vRPJ4GhAd53TtTTbiWbedJgmyUtj1XwMpRtXgqD1yXovm1ToHtVB4fwVa5hEczztM2AfQ2",
  "key29": "3gdGtUTiCxFYg4MNKiKz1JjpkUhJ8amHghCWDytGrc87t4sTKp9pBJw94Gb6avtgy873fo8oAeBEsq84yFqmyeNb",
  "key30": "4CRYoVtNmacS5sAT9P7Pbc2P94pg2WT87mTsieLH9uRAdV8jP5Gaj9mtcsb8dTcDQLidAZW65jr8AvJ9W4UMJmKe",
  "key31": "5drNJvaThw1H3krC6oLGWNpjfrMhCr32CmZ9c1aHHbHZJdZE27WZuMTrX7yzAm3X1iX4LHwmcVLXAZa9qzQEB8nn",
  "key32": "4gMce64f8ML7V5gCwoewKmfHYJ5QdsNaUNgoeuL8wXNxrB1NkcVtihQA8TCFih2VQDUsUtR5HqeDuAVEVvDYLqrt",
  "key33": "2kVH8gudAQSCWDh7paBvwr1UwjCrc69Deq8KQgtmxynucoW4S2y2vQLFydcMj5FSvtrRQyWvn4DcJJpUPNSpVPsE",
  "key34": "3duUzA8MhTML6yUR6Xen1UeMgK4zDyvJc8feuQuUqcDdKxevpn8WeRMVWNnSzgNrypNJwFyT7fZ7bcoqcpJZsQUd",
  "key35": "391PJ9F8vF2DY8UGCiNt15ZYqPQWD4SLCafXgo6xXLtwyZaSUR6AFWmFQriMZRKRqZCX6iVwkW8dBJgvpmTVS4LZ",
  "key36": "2F7GQX2JEJw4oRFGdftQ1F9yUvM2CH5tZH7Lje9QJAxCsY1eAvKhjor2bMYPnZVGdi52qzzgNa1Yfn7YX4xHiLLn",
  "key37": "4H2srnjqrFdYKhGBELVXKuNL5CpfWWckZ8xxKMLoR2fx6xiw53qeKdCrGAaAo4GpQwF6kpQVJCoUqcnMeP89LXzf",
  "key38": "2LRedMC3iMQZXvuJuwMZuTkbASmP8kuQWYDQWKogKmcrJc4S3LibiGuigSK1rJ8zmddVj362UryRYaoWARrmvgFB",
  "key39": "2D5UYE5VD7dwkkbLYTEMsW8d1n8gYAukwZZq5oV7As3VsBqn9EKGUEYcCqawshGAJK3yA1wGF1wtkSXc4C3uJjDN",
  "key40": "2xVHyoRWpbR9EtVy88HNdgvkJ2pRZLb7gNAiKZpcfDQL2LB2H4SXaTDCUL9cggP2mP3STfBhhD2QX8Q3YcKo7RVf",
  "key41": "3pyKgczHkJwpoEdtKDAiC8prj7MDUkopKeqzyvK6s9Pd1TVdLtHVt1KLMAmptirxpZYD5nn5kC2TCCK2yrRYVLyB",
  "key42": "47u6yNp9Qvhg8dGr9rgiZika6U5HwF2zMGPvVxMV3RG5mV4PXBV3o8LWRASU3BkxfDEdsTrAqRHge5mZDtpe8kWw",
  "key43": "3ELTPwPwP721yQs1sF2T113YXdPq6EgVhspqXa3C569BTzmBxNfb84yc4j9E38nnW86Bfu1cDYGue5mRn8me9gnK",
  "key44": "vV2zXhZbSoR2H49tzMX2pPiCNt9eWmz8hh2rX2D9USMQvLpfMNgq6Nqkgb7KPu9G4phTEhcBxH4wt6WS442uA8j",
  "key45": "L5C2nTHS5NfBKWVriJUN47zsX7ipb9mg57E1PSz3oMD8YdruA65ucH7GcAF6jQYRJUunexDWeALqrMhi6hmt3vv"
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

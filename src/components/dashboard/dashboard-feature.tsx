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
    "3d1Q5BV6CqTEQfiEMjzfZ15K2h1Qat9Q5MaYAZB6Yyhjvot8i4oQPZbofh4Qff7UVK45s8TEwiXNhRR3amyesaBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8VgMwppUNsfhe2dpZ6WbgCXNt2uz56wpZRxnGK1UaZoKUH6qpQtATp4vc7ccPtXvCRzyfUyCd2QhsrUUQigwjJT",
  "key1": "4Dved3mLzh8NUe8Xfq5YqtdCRDgr5UqftcFonZuysWnorBWSMNW5eDwGYVYbqB3TyDMSeaSTLLadLkiumABAZzwD",
  "key2": "28ANuGhme56RuDAXFdJpzxrmAFuokzUF9JyzYz2kECbPN2UtVz9gYx953cvNQfXdv7Rgthb5K5oQfdG3JFfpD7Nj",
  "key3": "3AMGiKdWLJZo5sAGdwV2wPYzCs21RYvyGenQKERWbpo1fLgBWTERirDhwgPAqvqBd9xYrN5FS626ciYovBpGyiZc",
  "key4": "3Jy8TqPZ1EFD1nFkw6UBdnyhubiciV3XzMPSPNXL3SbHCEZBtbKN6N5wBxiqgW8wSd7Xzih5JbSLq2epGijRXmuS",
  "key5": "3mG7beGk8VnFry5xV8ZM48ZbQ5H6yZzCY9wiDnNwK6zP8DQcsdSFoyPJBT24Z2sJYDDrBGNFf1bJdZEyjgz9FAYp",
  "key6": "czGjAksuJ9UNyF876G3T9UBQYxdNu3gycgsExgKnvt65p8RBHUiN2uZwZ7UCkHtij3nwDziMDn276N1mT6qc4V3",
  "key7": "5tzFSSmnF7g3MXeSUgHVFfVfriJ4FUFcJKf4hN1N1QtGFUeYqnLLRyzyhqzad1uQ9qssne6YL6HPwGc22Mj6xi5A",
  "key8": "2xahkHEtAzp6zyk3dxxa74okhPoyYfFJ67q2v1Nd8CKK64TRYaQSKHUmrnpcEXKcZNTmbiogDduM9aQSNp2zqgNs",
  "key9": "4v1b2uGMzqtAvScahZDP2wZRdi6CTQzSbbQMGbvmRu468YNdYjBZx6XUr9agFg6XTgRZYkE5qWxHorkt8qrWvTES",
  "key10": "3CUkBKvuFUyLTLB8LgWaPFSJ3JU6VMHWAb2RsDNEJ4ezEv8JZJVbZih3aSoy1xydnwx4AG1RbvrkcAXciX5KMat1",
  "key11": "5bqMYad6o69MY8qsCQDfsWrdrbvPo2kLSGbB7wPTDD5s5YaWNdC4on2L2pqsFj7y99G7zo1Ppjp2ZpzaQX6nsmSR",
  "key12": "rDQMVotAmEg23yZbcAsLHpVeCZrkrGiyWgzHG2wvBoSMjCHDCd8uPQQi6CwsNifnFE29QSc78NHM56rUGY1oCej",
  "key13": "4u3voz5LRXFEfX3snG5cLQco8sDi1SmM4v6gGukTY3MjMpcQCRdmfPApU3fEjxq8ghC2hGqhdfqnnno9Jn8Gp89K",
  "key14": "V2hbfwuTUhGMJtUs4iUQmFPXjTTAj7i3qMbP9BP97xR8jsTks6phJgH5vbiwpFjdo8zu23ECmLa4TH22nB6efYB",
  "key15": "5So5YXh7ybCgiCxCSxBMQxDsGdLXZLrUhSrUrjYyEcoiDAhRprKJeJmYP54ZfgoSSQcojkPYYybc45CK2ZjctQCa",
  "key16": "59mnAdKWHDUnShCGziJ3sBN6k6dE5UpXSqicp1qLxzPVCpHaJKiQAnchZ8o3uxJoANugPKNJcnmKVEkkJWTuzbw4",
  "key17": "2ERgCtWAwc9s31Bwmo2pL6cAWV9KVFqXagVBF1KWcADUmWeDw1nuP3QtVqExaoFT3h3oDVSawG8EXTpSTb2Nc3qJ",
  "key18": "3u4D2k6DnTVP82gRq7XNgMdYhEGtaJDospksKzEg1uYT2u5A2q9tdFLBMWixsZ1d9FVNegPSMun6ujgDCaXtZFu9",
  "key19": "65t4cEUTavRYmm2w2n5SANXfANstbdiNcu7cXmhNgYafmUuyh5ZmV9ZJfcTMPs4DD5dgyUierGR5QDRFM7jwq5fs",
  "key20": "4B9L6iEukRgBYcZWBXBiEpF3Styi55GRneKRL9wWtfCV9qnWJQkENVyE1MpAdChNBeByD3vww8hbe2N3ZqszFw46",
  "key21": "3yHDs8guvGYNLj58Hr2iCDghqg1dU3BPHyyGbpePU1UjtXgg28PwQRVhuvgPBAcKj8g5MtZfp1MMhoQmdruVMmep",
  "key22": "4BQg6hiYPJWPiqRXLJb1xukZbqvFYwS6RywPxxCRnGpQSCs5nt7xdqhbNLkmjnkudZRaTuGWVUY1LpUX758xaq9q",
  "key23": "47tkwigGEdmD12CQZaXLiwaaCnXYDXakph1unSYn5VkH6CcMSHvuAws3FCAwF3LHaY5RrcgFmFb33Avzo3ibjMEP",
  "key24": "5gt8fGe2Vn3mqmjKCai4ChfTr6pSj1LkMaQ7cEuQGcqFBf55hAUxYxYgmDuqrCjcQ6CudxLPqbK7kELjyrFwNVxp",
  "key25": "Ey7K1F8EohdKF2vduJzJn2Pyz6XCNP3DnpJ52QP69Y13GGtsv1etg7Ufb1zAVBberLCVRQqf6K8c36gS8y6Mvxp",
  "key26": "4gCZu8Tyd1AcnJJqVL8v2usB2kLyQbkgKdpM3FZ2kzuds8Drr98mjNVNcLxDKuvXkripf2i615CaME7HqRYQUvhs",
  "key27": "33xHwNhpgTi6H3xQcgdPg7VendPVE6yhxwx5Jk5CD1GGNBCAktdjd3foXcVHH7dqoxvAmSRbbwePXiT88gitaRuE",
  "key28": "2jkvYYDUX85M4eEXHbaoDf8wBLHRh3UVhN94n1V6zMRSc2hBqJvF9ftrAvTNnSEVH8bFx2BooGq3N23RufcP6HvW",
  "key29": "3oAc6shmhxE2eXbKWRMFNNu1qDP66XR2DrnvX8VvARUo3Acd8iBie578cTdwF3nUBguEWqJhEpFmRP2DdgVV8oQx",
  "key30": "MHekLZkGsH3AzdMXaa8hxbLn8PNko8qYPV8YX5n9tHbTrRc5vzMCA94RMkhXMKaqun9261ecvLeescQHGtnpdox",
  "key31": "3ajFGh9V6biWBkk4rVNsZyXytKHeLJbnwxor2bNJg4KqJUVcCK5dcWMquBpvoJ8m8TyRQpBd4V8YbELCu24csPoW",
  "key32": "2JW5ZYoWZEYVLMpix7djUMmzjWYB5QoGVR2zAnZdTFFHyUbdxcsGPadZgG2rPDf7zQAC3MPBZW8fX5gSdQSWh2yK",
  "key33": "JzjRm3b8Jkztv4vqnQjcm4gmPtQJSuWVcTNSNvwD8UyCyRYmEzvbviSeCiLpzoYhBjA3s6mqoW5FgMhoMK5GTmJ",
  "key34": "3Uye9EPW8eMfBGLCPBpGRufaF6YET6Lej9nsYTC9DgB6WEy2n5EY8xzgAzmYCMH277ymbQB4oXDz7Q8XHED88T9H",
  "key35": "2RveAqp3syaqwBxFEgRdo2e5VsohLw9erzjsKrPKXYmu8wWRdgkDxjckKW4dkyj5aiha5GrHBaVumDtaNTBAb8Zs",
  "key36": "45w3pnj93S9cbiyP3rCpwtRVCB8673ehPJsxFjXvsTS6yhARJg8q9gs2pPMhz3ntYz4x6M72Yff6YxXmerLQAPX6",
  "key37": "2LzThVrU2KNS6B3ExkL2cdJtitNs6GewortiQKjVhWzFW2jLDds9BcMZ7uuf8Hv4ZowGmjVXj9dec3XUwkJMuXDb",
  "key38": "2oYwrnKNdEhf89VFbBf8Pq9Z6ToXn5M5kWwMsmCXYsRbTNNMvhxq3jmHytfuioWGauMkgYUo8Zc9RnT7ZtitJ9SF"
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

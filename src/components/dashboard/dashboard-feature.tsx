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
    "4pYtbQ85T23q6xxiyQb81L7MrdDvM17TF1R88nYivmXRE8tC8Bo7UqedjmPFk8ETtYjvTv4sN28HDdZYqK82j1fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6XET7NnzxkaF5ncpbbce63JmLayE5aP9q7v4183Ga43uEhXDPGzn4UbPDvB7vmENjx7ncTp9gCRsXaJtgMqKF5V",
  "key1": "52c3PYsdYswQngvzwoErdrJWigfwt1UNn2ZmvYwE2VZWa58jsu4h33wg8ksHC2p6tXiTeknyx6YPitygV3Zfp21h",
  "key2": "Z8Ekx8BAYZ1XMkYC684eXEoL28c37CRw44i7RhMKeknfv3jzA6mDXJX6eBEfUGJWEPGrFJ2QjyWWSnXcyAFqafh",
  "key3": "2oyu48yvP2MkEje3oJKvvVpzBnjdedYHERrAgtq9noursxAe8Ba2XWvb7z2KJTpuTC7J1DKd8G7YfvLDhvNknZee",
  "key4": "3rswc4ky3do5w5Gh7LMbD1pCHqsqc6gz2MMLsaDMUGVZzjxPp31a1P6jHaEHeb4hdcQR25jZtotUZXxTaiti1Fxw",
  "key5": "2bFstXt5do9qfBfPhn6zwG2Nrzo9snjEaYHfKJ47aKznSpT25FyFUm2fVke3H8ecgyojE3CUE5orT7NgBPZWBGc9",
  "key6": "2P3y3qEVbULrPdCWxPk3tHZh14Reh4tvChgS97FPyavCnBXeV8pJFAfdVA9tDYxy8wFmWTp9VEsoDMJ729nUqpwN",
  "key7": "5VVV1Z7wy2aVan89Ek48782P5L1RCGUd37wuAbmoAk1v1y3mjgxzdMkncHaX8Lb4g18dyaQYFoSMTyDSTQjvCUEb",
  "key8": "4R8SP2rTwP4SbpvmFsBq6ndhdhaTPFRxM69HnmE4H5XuyA3BgdxS5ZLVzKzDi4WDg9fbxz77kCfHSvWXPYXGLCr2",
  "key9": "2uhoJTHjGd3eYrPxS9GyCQZxM6niTfGCRy9Z2gZv29rNU7dBLq8eRkLUerpiLuBX245mDkPuu4Ga5UMem54wsTvp",
  "key10": "5dZSMPu21DUxGoqRPFYRHDLPgoxmWdWbZtQppVKrVkkWJfNHwR1gsrUEf6F6iEGfeM2YSHUkzm4qNbeos83D3hvK",
  "key11": "4rdREYq4C9Vn9TtFRuPLZgm9YSQAZQmXiEkiiziDrdDmE9sUcjPTPpmet8pMC8Rj8gnSWopgkBD7cPaHx1evz1Vk",
  "key12": "4haoMgTZKH7q4XyphGC5qmRYiGJiYMEXEEXmizd6DUmkAxUq734CSS1QRmAEXe6gaKGW97ozJuDaeo32znSvKhCh",
  "key13": "2WnXJ7firVpLCJgr83y61ETyg9RG6t7Nr2AjWweLTYb1vsWQ6JCQwtdLFr9kwvHdvgJpoTLtN6EspzQYkWN5yPQM",
  "key14": "fiA6zxPUNY7VujuCTZxnebEpbMLX1n2yQf5HJQdTTbfQgjU3NDbLszFmFFeyVFeLKWMVCcF69BPQZpeEjdW6pmM",
  "key15": "2h5apjUaE5wBCrYtgWNRkUGKkAqUq47vgBrjZVV2oEV5BRyhvmz54KpgSMHKVscRR14YUkvGiVEyAKZqkbLzvqCn",
  "key16": "W6G7HftvfkKxTiG2hAbo5xtfi8nchHVmKpyTutPKRCD1PWKRkYKYTs3791zBQnos28HWfMaYLcjhm2b1WjwP2Ha",
  "key17": "9ZtqLCQLEuqMeMaJPaa8AiJuK6ESsXS2KZVgScvKkfQnGx3fQzycYiHTUraXNKteNMwjHsDGPqSE6mHQJRUnyrT",
  "key18": "2GnQaiH95yCceqrCNejNEVCcCisnd1UvY8YNtNyciMa2yr4yiXEZ5PqzEYebLy1or9sgJVEuSYYQNXma6afeKqGd",
  "key19": "34GntKjzzHs6sbC7WfvGUaZCMmb32uWNQvxRxKdfftEPkGgMe5q9cHmiaLDwYKHC13rEmYZUZGrUfZCpeZZzaPhw",
  "key20": "2PUDMQsrMRHUkET5JSswaC2k62fF3aGwqKd6JVuGvDhwBjA7zqDRHJzgZXw23BtwyXnDKmKvaHQ1kTPUt4SX8MN2",
  "key21": "2gTX9z6teMDznFeJTmrhQjtNasmsJ8nSwWqUevk838TRvKQXrHN32VSK82LSxbDo6ionhyduAj9xyQArjXsWVVYG",
  "key22": "uTeAJf9pg7HW7DQpWQspC7ELKGBBVKLXyYqRMAehEbyttdBTd7NPrBRteSdN2CfzeatFQdZfU2Kkmi4zSniHnJG",
  "key23": "21GVbJspSDZjYzVsYk258auRFLKz88cjShPi46vF22qEbJDu7nhnLFCtNPDjAQwMpAV47JvNtPbqGTmUvo2kQpoH",
  "key24": "2f5aNjd1V3G6uP7QWT9Ei4ShH6c6fhucgGxXbbzu9jc9Y4Ng5R5r5Qmy6QpxenqpqGiwbX1d6maF7Qoxp8GfcLwh",
  "key25": "43cLGXmV2CaAw2J9ssSv2tz5cSj49euJmbqMn82yFdF64pTymkmHrBFmVq6oE3ynrpAhgQKuKo9zMwuwQtPz44wn",
  "key26": "wXaN14FjGEGGmuTeH2xgLSDcvZfdairGeaoTocYKVPiae32wA8e8nLex8TEoMqqXr5VoUqVnQ3HyEZjZPCF896N",
  "key27": "45n3xURPoUGUos5kAGk9cWRxZpcZHV6WmPMY5vFs1qfP6sK55ynpbo8ayoFKtnEGAY8qiw9pFeiPNtDYuuRRDMxH",
  "key28": "4FX3Kt8z7CU8epFM4m1anyhbny5NRWyDWQuT3XpYwwBuCFjpzxp3xXVRaUtnGMhZydvSDyczkjnRVS9zjcRPcHUZ",
  "key29": "oZkxi9v1vxG71jdNxfhxJpokqm2UqbiydyAChrHsMiCeTSLwUieHy59WAfjBetbfFPka1DXmgrpa9CbSV6xBaFr",
  "key30": "2ChoXqmgjmxaLwDwoYyHSVaG6Lpy78pvEFDZiaCNzxqZsyXhdQMTBjEFHEgApXb4ubmKvrP88HaRWPiNMgBm5V4c",
  "key31": "3LqFdUk46med6CehKeffiWeYCbUGounRTWdqKFi2fNvWNznkTngHUXnLusqbhU2SVyQmjmDvtPHRhDetapeLSMJP",
  "key32": "3zDRrYG1gYNsJkMxoNCwoYyvYmZJMhGyCVSTqtgrriVgXn4iJPoHZTijFiTZXhPS5mNNviPNJaJEkjCP55NMqBti",
  "key33": "5iWfoEcfLzA7iAAUZ9YeRQ4RiJHCNs28X7CwUZFByrjUiceivcxjaGwePcoGTZMWExdWWbyJ9o2BpWHy4QLhztmR",
  "key34": "2wty79bj5cFRoTbKXZsZzJxodpfzBqz2GHUCRNiFi6ZEycnm4CBxPkKh6P6pBqVcDPhxNQpsNgBddDAYVDdgPDdg",
  "key35": "2vHy9eE3PwBwsWm2W8URztf2G9X5S4KXeY7kEYVacwnCUPsv7VmVsuFbXtRiYrMEvNTZwwu4rDQKLS1biqFGEzj6",
  "key36": "57wyaNdxGP45xk4wGD8RRpwVRB3yaAQURskoCSKX6kymniZWy5DqTeiZvVtHtjrmNGuj9RA1PNRdn4DK5k9BxZ1w",
  "key37": "2nVV7J9EYBkzzq8NxFpcKix3YAJWhtUNUUgNK3R1eygsjE36Cbcodn7hEDNrevSzmj9vPShPnCXWJPYasAmQPhPk",
  "key38": "3M619ojuytnAdAo3C2JpeHwg4XfCT4GPtdEt3zxGdVB78KG81izFAf7kqq7WRHCn3QNWcJJNvp2P7eyez3NCqnDA",
  "key39": "4uKNM19MHQV8UJt5YeJCKhdjjCrJTMbxgGC9E5BJQ2FEfXYAiuyz6KkGD72yRGccWz2sFBoCkw1ufYz3GqGoJuN6",
  "key40": "53hm4kdvumA3PtPtpMR3jDGtGXT5pL96d2jefPj3tppHubf7uWrBjPwEXsr4fRobeRBUzmLuUNheLZMFhxaKBmEw",
  "key41": "7QpNmGFhZmM3tmFSWxf6PN5Mj7rFUCRqy5bLvYU1xdtc9LLBUtnPVc6mZmat3k6WASQDMP8V87FkShQiUdbb28C",
  "key42": "5ixNQGX3ZTthcjGjeHyTMnZHJhbrEBRnqe1VBKqh4rHZTLNFr3rLUojMQUs1nBaPHnHRRXx3MtnkSWGbn4Yh66WQ",
  "key43": "3ZGeGJXeZF36GBRZd5TLy6KtyAo3K5zG7JUQKEEs2DaaxsyZmAUQSBi1qibuGdN5267XfF9TQbf7UNpX5Nt6sMFn"
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

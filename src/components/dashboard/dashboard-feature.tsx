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
    "2YkPzPJ76chUvJQmHjFBaB2Z3d1w5D4QShJgXAkGYqbLPj3rwWsEsxwhNNFWEmhmqo6ikjfe742Y5K1b6MGqLufL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yr4XpMNqX47Ya78NJ7g6vqPrDieViREw93W9gm2JikYbxJhg6arWTzhMEDLoaFstZu1gQonS5L2WQgaNFsFEjvG",
  "key1": "4YGuzvx7aidprV5PY5wFL5JHPq4NrN2emJpp1yWitor6bBVytNDhm8ciooVCbRL1eegc9apgendEimXUGcag1Lk2",
  "key2": "uH3DwDRhg2QcUyzmdjcWwKjfnE8f1cH13R7KwkffxQNZ7EcXD44qjMPhXXu6b2ZjskeNkFYEVdbD7mMPVsyiALe",
  "key3": "7ubSe64LPhEtLdoQcRuzJ3bsyy9whZgfyo1ZDrwfGp5YRJfinx2w6x9KoxAg3kTjqmNFzwhTAchycXcAJoSYoWs",
  "key4": "4sfNFsDFqaety5QqBtCbpAs5dpp8MndaY7hc1FGzvMcpMJoGcw2vi7eN7t63invT7yfyUmpQqyYh8QpVMvzn3B9v",
  "key5": "4LCaMGvjNNnW5EttUkxJsvhVb5tPok8gMf3xdTMuD9cNJfRhgbqrXehEoays6FVvi7KdTDSmfvYcJzwEyawPFZPc",
  "key6": "fffhW6NXKTFasi23MqUVJVyfzDTX92GC3QjVAhojrG43GHsR31RtXpEMoYSXE1fG8mwu9A5edraB37ZurznY7YF",
  "key7": "5ov3yDqB21Wwj5mQ4rWdjqax3bNfgtc9dY56RfTwbC47DoLNjS6H3R1GHfUnMtquq4o1boZ2TjH6vbJsNQEwFKp6",
  "key8": "2Lt3bSFgzToDXuqKGMJiXFGqbWs653rJLhQRn9Rt2rk428kaiU5HsyUe91kvEoFgvgQUXa4nQBc8yGETbLdEXXER",
  "key9": "44MebxwwutRXWpnhew9MpdLwsqQKnkqZ3AZgLfYD28KBr2hj3gfDgBBjDt6VRB3TdDB3bHYUdNt8agjJT5QUqHtf",
  "key10": "4weRD5cVy7VFqe1RYjuGmmkW5oHmRtw1rEKbVqRoaPoefSWB3ozNucJVMbvCPJLKgg66KXWuBtrRKzGuBTFStBDE",
  "key11": "2qCt5sisY9kebCVcsHAsJfJSTDtNFMS5VwdWuGCnLK998o6efXzuMSpqna7pXTYCdjH71zcALyRfRUgBtjGGMmjS",
  "key12": "N85BL97Y2PTtRquhdGD4RRnVXuyDB3NaQSZTYy5i6vnMn45LxbhPnd2Pp24CCpAa9iAmZJWb5au9DGD3rq3f716",
  "key13": "4VYodDEu5n4KPHXDs6wkypeHHycxobeLmavv1EVoxvA22RAsx9irp1ii7PVKqQcyvxPvxKoWhaAeFmF9dvqYRUN5",
  "key14": "goyk6f27XjKSLKxB8Dm6srYBghmqeFqW26M4ugKhA39943DTCt6VHTRMn89uyLwqrYtZaHkA6uzX1JWr2HeCZy6",
  "key15": "97tWs36GfsUBBVTgz1uQ5WAqHnGUCWh4hUCE6mvZemn4Nt1sX2vNjJv8HMddBeLdGvh9eE2p2AanLBgufST8ESi",
  "key16": "51u2VjNc2aFe5ZCuQKmJygSaLyaPGFtZuNJgeiNWAy695qCk7uD9xwQiQN1tNieFEyWjzk5agmF3yXfCcFZnNVDx",
  "key17": "mQHmonmTdqcbim5vH5fKLBf3pEz3P9vvUfDn4SxUwUjooLXyZY9WDFBQVedx7gAWp6pTt6qw9zDhQb6xQgugL9a",
  "key18": "5hSd4yTznMzXNKCs4GosRVK25nnAb5anYLQP95BeQasT7zpDSTLh62rgW5HX3vmYdWA4DxEyTELHXadggLzpDbid",
  "key19": "4KD2dxBVL1nwsdNttFmRYAYgtAXDHX5HnpjVvCamZsQVLcjZeFeYk5thLV1WHe1eFeyCqnVCTYUX5nLqB4suLrAF",
  "key20": "5pQSWC5yzbtRFYDig2XgmAptLFSUY8UNeeziA5t5bgM8hXdLGnWbfDewwdf3pP86n6wfj2Co7R2iJcwfo5R7tHYT",
  "key21": "3QG8EBPa4dSX7BZUrdyBqj4x6sDvC1hKUYCtmeEW8NRCJFV7sZ2giumsVL6Dou2We9S75oxkosTNLG5APtbeb3ag",
  "key22": "GYcF6oZEFC2AFymmTjMbzJr79Y4iumN4gDqCaVPU9U5ZaiucatxL9AfCMP4X1Qu5Nr9ooeQv79oTa8ci3uV6NoK",
  "key23": "2vwJzYME7oiyZ8kZWFPsG1W7pb9DYzBxj9DB3KKkYFwMMoGaQY7urBKH4XBJE5WhgAffPJiRQuBF1Z8TbY6nu8Ao",
  "key24": "4WyLpUE5rTUqXLWhmjarBeazCo9s2BLZ1v5SRQDSzfG264kmPYfesjLo3dBN1CVnXPHzm6918xS4jkW6NtF29W1r",
  "key25": "4zpPFfsJTAR7zAV2YbtvRvr4zEU5kLCAUP74b3b996V1ej1AduLrstFMLV9h1vd38SdfVux6rpboqf1DND516Nb4",
  "key26": "5VCt1X7S4fKBsDh6VS4Xbj2PRbhk9WZGrgsxcoCWFwe35gGVkbeaBkp4sUJ3j62YQLnnweRCisVNyUSqBm8z8bqN",
  "key27": "2ojNyDieCHvZFQnPP9HxvmcAhN6SyBvArEwmzAHcnhQFNonoVB85TTxCXZXTAa2uehND4EJSaamVmjs2m6cSosdi",
  "key28": "4N5HgzG5Btf4U3efBu1LvpJ94FrbbzbtcBeGKdYfjSVSKNgzU3AnU9Cci7AmToj2F8heuxd3JyNkto4Hmc8qc1Ar",
  "key29": "5chnun2A3UYq6Frd55VYLkQoRkfUDWESqrcNkZrhyFGXXqrfqrdoFsBdrvKVE6BvPTyREZ2BMdawcFfxRKESz2LR",
  "key30": "2GEh4Z9Qa1FeK7NdqLjtuAeJPf35YoPwUKVRGEuxLT63REWzpUcWQoZSp8AVPvxAUDcQdVAtDARJKdsFJJoMtJMR",
  "key31": "5CVwVisJ3ifZrhDfESYPFxyGXLDmmusqByGrQ3v56juGBBstSntUhR8VxQteSfUqUqB72SS4Hn5LNvia9etiaTQh",
  "key32": "C5xz9BjA7cxq4JvnBveiYhVTd3UaJZz4UEC3VFQyNwH3V3daUMpnPz8Es1a8WbxDnHmjyYXeyRJTgtsFF4w8jtd",
  "key33": "wQ4yACLj811jjdpfn1vPcL38uvNmm2hxTo68ShXJ753usbaBMJCpA2WQ59sDF6LHR5eED2did5NF8R36NNcb5Nc",
  "key34": "tUBJNcpsAnQ8MpAMzgBaUwnUL9Dn2tNLipQ9g2beZH3sAMXLhFcFHz7nzhaoSzEHW6SwGx6NY4R5t8WgqLEj4vK",
  "key35": "4gtkkjiFxJjtdEMP6CZic7esy91tg4RixS8rPVF8Qz4D88kD9ivHuxzi8uAE54xdGxb4fTKb6wdfAdcGhQukemSx",
  "key36": "ttAuVQiqwkRu7SuMGPZvG6Hcp9TMCN4aA8qbLmaphVbLgrPpQeKvy2GqSuLNFyoHJos3dp1RBDWaUx8yqNUtxSa",
  "key37": "3PNNkHDxd9Syuz7zsrbmmWo52ZEaD4ju3t9eyjwXSt71HHs5dd1bTZFnbixjAnGVvWuoiyLtKXtsD6wWFf7ELPiL",
  "key38": "seLTxnrdUXZrJ5P3NMe6vBjb1zWPA5WHahLa19FfBrbbJEypiM3LuXUFbxCM5B7aVaXvHY7AUuxiJyAvYBrsCNN",
  "key39": "Z3MyR9UUeUuDD8tqBBALSnmxV9kGHuRgEwWR11LWEbkdLa64VxBA4nfzeLWaEfFrp5DXMne43jeuxpLxi1FiLxa",
  "key40": "5M6e9M6pWRRpqTCEVo5ZqBkyJ7FzEurGHyjwrPyHYQCTWGpYyQuSM7XFKU2z9FEMRX7PM3AdUzxQgr9ZUvrgEc9g",
  "key41": "Emv47tbjbqkBbqUdEwsYT84u7FTx2Y2c7stptzMaHkm2NJ1s3EatZUtHMXSvEfegCZMuCM1hb7gymGNbxXSy5Qd"
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

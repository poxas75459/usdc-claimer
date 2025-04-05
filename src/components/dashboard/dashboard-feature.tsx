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
    "5gs3zf2inGZiRW22bWWGgA7PwKnd45zokRdwiHnvsM4S3G2MKtcSTjpkH1QoYkadFHMfXbJBDr3wDdovVzKPN24B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GAZtwBThXL7vNjGBFXKTpSWhniqXwQhUMnzE1ecJRsmiFXTtG42RUiGk5f4djvU3Xd9QGo1PVUTNGMSm27WDhsk",
  "key1": "4QZdxf3eq63Ry4R1nQ81tCy4iPCeJkjEhjLmfrcMFGW49SMcHv761CBTgTA23YEBUvjV9nNkiADTM7qAoZ4t2hdq",
  "key2": "3SbCLmeKrHztgLKfnK56htruAoEdoKPYF6zuo61sTcWHMUC126iYxFEBRmw5UE7QT7sroiETJfWQSVZmjUiYn2C8",
  "key3": "64uFkhcUHxvsurKEmwM9VLZvyJ4UBsiQtQFYRvt3SpzzybAqdZPQkz4pThqUpXyvNhxm4Eqv4SRP8ijSXLyhC6Qs",
  "key4": "2y9ysP2Py2br9pdg9X1dwLfoTyMPoDg8Ez8KqnV9vzUyDvdoP7Wy7eSLspDoxxoW8bVwNAAkzDSnYELCxXifuzzr",
  "key5": "KReKUj578rNYGcsCxb2YGLnr4kffZHhPgKgLUCq4tPHc6VAx4Qa6wsFpggoLM4oVsFiYgMHwFF6UyRrmkL7xnKX",
  "key6": "WeHzdv1NpMHtAU2wFPLjRh3r5gB3R1StqE6k9veyEgyKB7jqnv93G2DUVdJPstec4jYTbkkGgWG1kYfULAoMaWs",
  "key7": "4FQB4Y1yjWF8d5pFLp4Hg5356GnRZLtsQeeXCQqTpooxa9CvJsZsrnZ2WMa16vYqvCMKQ1kvHVbt4xQ8EQTH8SeG",
  "key8": "4QxDpnRzAtEjtH7q3iyxTZZwr2ZumxCLFk36UttDGkuVb4m9xPbCV4xY8yrFHH2LmLipW6kbuZxxH3jU1QNj33yK",
  "key9": "5z6bkBkN57s5M2P94bLyymTjskCZhGsWKpHqsFoTUkgSJsSaZphiiqqPFFgxnT33q61teMXPJaHnPLjacMtDCGGn",
  "key10": "3NkCu8DKnRTGqcqx3eUk3AmDgASjhj7Tp8oPNDrMM9sh27SH3T1MDSja1cJKLhVHvG2198ee6diVviX4MWfZSu8p",
  "key11": "mgU8nSctJt8CmprqKGM1KndP1dPGmuN7WG665hW9UuR2AAPU7z2rMuQtvnYFjKnVjGp2oed9GhsPZ3eftJojWT9",
  "key12": "2ptNGBqccQrW8UkZWFjN3FY94xE3bDVrqMFfET8XUQVs6XG14s9NLKQ3H8S7NRKbGvUwKid4uzXhjarL1nZ4rFJ7",
  "key13": "5f8TtVBHXp293myY6KmnYPTypxs6wVkyyAMdZuNhmqzcPr6ZKMpnQcEi7RbkqGBU2vNX8Vot85kH2sEVZb1v9iXt",
  "key14": "AdFaDuV3Muqytai2KACdAztvSvitQeTfKe5P4BFxeuQMz4BPPMqWbCQdwxt7rwRUzTczzKfsW6DPvceap2KUtKv",
  "key15": "4XGXZxB9M5b2UgURE1216n7bgEoiUM5LpqmwecSxeeckBedTfdEvGrAP2fN4JTQBwH92ndMVjmutPf6hzJhJpNVY",
  "key16": "3tRwLgLFVG3ZyZ3uyBR9Ubv4TgaAL8ydW3mMywEmX9N4X9AqPkL1uNBTZd9y5pd2DmmXFmnWoZiJyak1yDNw2siw",
  "key17": "WWX9gBX9PTs2VLsqLzqQkmDfxFGwWj8F74iuTbo9SCVxAoLE91EcRmyeZS7eJYbaZUoKTxSWrz2qSvwnxryG3GF",
  "key18": "5XUeAtGyxRdPi7VSecXBTiHzqZAZ1gCQCgkmw3aVx4X2fHDenDZMAwEqJLBBmW5xRboR17YnyjsnNuXiJK9bBwsk",
  "key19": "3X1qHksbYuDnRExrbKkehFNY8n56dZ9icnYJd1oD8NW8WFxiMmqBKr7p8UHABBHDnqevZP7jmSdHTv8c6ekX5tkM",
  "key20": "ciiRvwMmTjAqQsjZkeLrbsSKoqeK1kq1DMQZZjcaiozrQefR953FBqsa1SckPJyH1HwmQv7BGqYYGZd2RhDCkvU",
  "key21": "38bpo54FpaHn1tdFgDCkTUqrKZTuBMmDJn539TurfYjmQUHTj68Bs4sWT9Va3MYmTRp6tozCqnLXXgmZXMgYhVqx",
  "key22": "2Ep2RubwjqGeNTzbEUdwVYQop1VLrqZRKS2KdkFqTm7PkzPAoibHuCoVAC8SXwzgu18YCDadsezpEU6Smjqtgt9g",
  "key23": "2AuHcNGoX4yF3YbJGZ1RwgpjvdGbCJ1qtJbY2gL6d8QnShFFNLH6EZmHV1sKVVz6AUjkHuF5DDmvVXJJQhSL4tZu",
  "key24": "3hL4pTjVmgbJdTWKXkZQsPLSTih9u9ot9bAh4baDHXeyKGapgBJApW3EQTLAtj5pd6msHRd1ZLxTBJsiZdeFex9y",
  "key25": "48ThoyNkiuNUDvgwrrBvbejuz6BS1Jqi397ZRuAWp1GjfsrpJDCJsXBapuFtJrHcBUYbG5ZkfyXVetgqZ85a6D7k",
  "key26": "4t2qeesTxFT9sg87pjpTh8ZHZggrtti1YqkcztkaP6cTegNkZMmAzGkFy4JB8hJpbWPgWhtm5Nw4epakJFiXsEXC",
  "key27": "26JGaCUGk7dFRanqGJ1v4mKuESLKjKs9wgpTtpEb6x5rgjx6Daytb5gtFZcvoXDXUHNtwDNT11w47MVDLJfwWaPs",
  "key28": "Sdxcza9C3jS6z6NyshmgD5CCteeKtmGejeKFmzLuCpTTJ9EdAxPacHnkrNnPrmijWbsKDhso7NpjJgNhHp7MYLs",
  "key29": "8K6HjHXVFAC2rzPLfTKQriJZyqaFvrgjHnNYFTAP8kArggyvDgXzG6F5E5ZmnZ1WRWu4Z8wGJGE8np1ARYH5URr",
  "key30": "4XsT46zba5wWQef63ZJiT2nmr7AHdcvSQAhuXKr7P9woKhV3rDaacNGxSaJw2ud7x4oBieoYaiLXtCcF7n86kE5A",
  "key31": "3DN6adA4f1NYhcxmk7f14XtNBYkEcNvXXzAPN11U8KxL82yLf5tcTP8VJu1GdvyNdA7Er5WtmcZuuMgSC6LQArQd",
  "key32": "3AooYkA3BiEHhD1hRQsyTmWFzLPw861DFK4CVxaKtrwvgcPwgS5zSpfmAHUUUE9VziWELtYJv3Ls6MAXBK4DTpmh",
  "key33": "32VDDYgBzesQ2JrqbX64RV4pNJj5fyPCuTqRBuTmwG2bMWUr7mSSv8DXWhsBVdRhsRp1Q1V2tNfRjaZN4KDBz7aL",
  "key34": "RJDhQKepda15upYh8DY44C9fLaTLLZSkP6XUmSSZRGA6LRXnyoW9zM6h4hLBQwE9jzMCwCjtWet2yaASTaGzrt4",
  "key35": "ZTgupdeEQWN9ZYTs9CaJHVQc3jAzmJpBFKmaWEgKtest8oyy247yKJuwXHUyn9ztNPUPVDeYZVDuyYJNmUWJR9a",
  "key36": "1q6v8AHYkt4YvWsDRuU5FwpNY4jXD1vTME5XRdGJmiRFAEcZuZs4TjLD2Pv1ejUAFN2sEVqnPVUFLtdVLb5NfU9",
  "key37": "5URYHff2Pe1a7q2z33ZFVUWpRVBZqUdTi6H4AXFDQcuLchLUReDFpCtHR8opaPKfMGTUuMMkj27PU5Tt3BTgL8Gj",
  "key38": "484GB2NVnBFvw7wEKftvUXeQYZZMm6NecJ4XVrhYUbhuDGk3sTQW7nz3BVUhaMF43zxtqUfYqV5jh9qHcDMMZUCV",
  "key39": "2q7DQjdsHZQ4tq9uYzmAeWGJcEiHohTt3NS32CRymdybZfWnrNMZSZswwLzMbi9kuEo7mpmoAKoRGGNk9sNUzdL3",
  "key40": "5bT2piaGM4KzsbAU3AvFEMpATA86YAVPV5LTTJWzY7vtqoNTq1Fk8u81t14WBm3g9wpxnfuR7idon4pgg9EAAqep",
  "key41": "2eLKzpBQ3RJAT6jMi5rqTVDbvWkgKcqKaiaK6jJ2wfLh3iJ67Khm69s6Z99RBTQG75Vjtv4Rh9qazKAii5yLGpEZ",
  "key42": "BcNcGnj7b5oxFrmNgX4dB5xBXmkThkHoayZrnwt1yHMcar2Bbnkk8SGFoyixSsysBU5rZjBQe5yBiURkWbn1Bww",
  "key43": "ysSofahQkkA2QhSgeeCdU4W7TyhxDSrtwCG8d8vwZSoecbdTN4HTMFnBTAxfpVaCZaKBDhSznMC3owbiduEH15u",
  "key44": "2uBK8VnbnRtAsHygC1P2C2jk8F74w4kaRLQoQ1JQt3zdiLShrfDXYiDMhNmfxrowE3mRKA7iiRnpF8ApuisG61ez",
  "key45": "23zaAfYvMYfJFnbULov7G78whc9uM8zEQq9dFNkkxXQWhrMHEr278JG82zsByKRPJeH8qsWpwbVLnsEbTv6ShYj1",
  "key46": "5NgTnURKkVWzfZGaaQW5catnF1svw1xicKbHqNYFkfv4N1dPwiQVPevZXZ1K6guADJfjH9W2Ke1vVeac577X6YoQ",
  "key47": "34dvJca6oa5b4obDLH7kZjyPHH8WpW1CjeQCQKxGKbxGinogSpwNgtXGJuNW6t6simfAe9oxb2rsZpxYf31y7ChC",
  "key48": "35qp3g3VL6GsG6rg8MuE9w9AazgxFnbN2PCXu7jKF5mPp4f4CoUzGzH36sJfC1SgjqE4qFGe19fMaU1KzKVkxWvo"
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

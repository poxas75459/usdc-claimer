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
    "5Cou3DZ4kibooEXKfiEhQCH8xYtpGe5n4RyDEpiZzRJCZy1crZ1zU8ZWXNpDftqC2BtTzGZjib8zwrHa5vKkpjq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KundPqLxogK8nPZ2S8tSUtR8p5kZ3455uXJWWEKSjQAPNAQk1jsyGA1PL6k9Fcd2jL7HD848nuUjXAaVBHeGhbk",
  "key1": "5tE4QxQVvQz9TknNAbJwQKQYhJGrWkBxvsTZaMQT1NBH9evwbAXCjGo9TUsfRGJQUF4RTXsKN8vtjd6vDePsEDeV",
  "key2": "2uYsVXN9DetK5n9sKTnDvSgEppkLHWPpEQWr7kt2VkNSD8TQwm8MvrRZUjzBzCPVpvjRS1oMcKr2DrSomoDYECNK",
  "key3": "3d51T5m1hNA9oyGii5sthxq5SjQC84ZzTd72jB5JXzyVJ9AU6XUHwVEu3DMwSApMAsubonnQkZvyQt541sQSScLw",
  "key4": "45aBbDuvJJyPdrrKfG7YxxmDDR78i8Qk8vkNreHVVd16zASmGUGzUWerCxccb65V4Yi3zSrJTLj7z9GFTpN8yLbr",
  "key5": "4gZFqCmVZT9bbNNWfbvPZ9Rh52vrjNF32uwMN8demi4sV1rgKa52NfGrDbX2tJErRzfaNLhqSpET7fD9qJ9YBhkq",
  "key6": "f7eRdGRS6nP6y4mP3PepyQgY1ew9RKKe2Dv3PqXnnvEUDQGG4AfhHfRVrsfYLmDe3sWZHvM3jeYgJsLQoS4KpzQ",
  "key7": "FvZWG8Mntyxg7ZARW7nC1vH28YZVTzmZ8nv3ACmPXy1x7mr3wuxNPJTiWNE3uWub1iD2Q8omRLVQdiQFGfNwiSj",
  "key8": "PbN8uxwbFViesnHqTCtF8R2jQfhm6WmZybckv6GaGUwho169XwvAjLeJhGeHG9hD3DM2xJApKwGgBraHMdGwLeG",
  "key9": "C5yzHQVhP7RRw542zF7yqjsRxShrXRBFMsgMwPj1Vphd3saHbq2f59hsKwCi8GtJhd4e3xQm3TFABuEt8NpA9Y7",
  "key10": "55YPyem1GumN7461JZ56h6kfsoqK9j4yqP3xRAH78BX9L9Z1MrKMowcAM3sXdWP8vWATv3AwvvS67XuDRetEQ12g",
  "key11": "qWwnTaYubfui5VnBkwdWrPeo32fRtVDqkzSdmvWCP3Y894LTeXJud8aacRCzFGC7v84rE6Ws3RUh7fWQjNnDx2a",
  "key12": "55eLRPpAeCMXHaCKYxdcbcmCsyoKtpjyjb8KuZZrfmt5eJFKD6pf4RKak1c9bMoAv9PcdMofosyHyQxzHFuisLJN",
  "key13": "3vf2d5iGGwGp8o1Q1W2qBTMmzpAk8nxDEzdfZRGQrut3k4tFWo2tBgnKmLuNnSX2J3QySEVMowhA8DiWhdVqKPSr",
  "key14": "49yjMFTBfTre3cS4T8AKcyDdo9hmqdvXXCjicPVSmgfHv9SuMddfW2jjzJSYwcUugrHVE5vHs5582dX6nv6Uwrkk",
  "key15": "3WkwxWbhdCV2DdyCtucUSXZk5SAWYoMuFzfGNzn7sQ4EftYm1H7QPgq7xa69nSzJEYexf1KBwZqoSufzHSkAmoUJ",
  "key16": "26YfgqyzDeHhpJq1Do8qjkDj1pGrLPHmFQK3gVgU6GKoBt2id3o4ppDqsWwr7HQYL7H8BcRVvBAToTMHGHnsdck3",
  "key17": "4C43ALifcR8k6Q42kgFW6iRM36q626HsqzwRCXEm1dzwyaep6X9MLz7E42hfRaE89Z6g1XACyinfVffQ5xPL1kkW",
  "key18": "3aVzEqmcjBRVnVwHbhpCTW9v86VJD8qubHB2QnhanwXPorBZvCSBYoJhuFngz9Udgdob7KRB4FLPC96FniBG65k2",
  "key19": "4ccdvgghn4xHrzXTAddViX8JdRzPSFYSFyBG4BQ5zZs8BNsQiM6G1Jan4xQPQpYpUvvi4F4976W5poiHHRzEJHTH",
  "key20": "3KDojWgVQn1Rqc6PdoRLqEqXWL2KpNggxRkWjZAu9UEErsHF6xYcUA8DnrkGfwPiTieqP2EU6yAfKJk592hxvjuB",
  "key21": "2eyWaMjUCa9EiRiwP31pfTYzMeoBcpWuREAdGYTXDAryRDzJNvsPp8EckJhYczn3NmPvgUw1SXaF2SRnohRrLZai",
  "key22": "2MK5Ss1bRqBCAJzpfm357CMk9r9odjPh4UmUDC3FoTK5AGNCuSQ9ZRj2tmV6GRzWCUeLgfujdW52qRnJyTGaNde5",
  "key23": "2rM2x6csGHGB4vW3rDd4h1LXKj7jepKp4m6SvwMraqL7nhkDPLvGLk9eH3iu8hRAMb2LjhCU2WahexxqJpdUfQEQ",
  "key24": "4ivVj25S6Z5iK5bYP9Ee6Fv9wLAC53YR7A6r97LGv2uoR8gNW5GTEJNQnffVCnxKhro2s6yReZ2ivRpcEphwk3Fp",
  "key25": "4FghEt6MuFMFsZXfdhEy5X3UK9yNQfTTZQfo7m17bAAPwPtCrahtDtGWvqj1cVyA78FgjYZFF3kfJCS8bJSndEVb",
  "key26": "2Hnee4hQZW3TmaebuRAnc5K8sHY4KZrkfhwk7oTjYmtKVMzkdhs6WNNnUqRm6g6idu7NYGKZLqf7FHyeJDfMYLki",
  "key27": "2UgbtZy7pVUmWJfCsXH9SYnTRk6HCHcAvRhjrQuQuYjqTCMgCBkxNQjuw3m6Afc877bpDSgZQd9wadFztbtWRygv",
  "key28": "4sd6kyExkYtFefDJSifwffeYfqqR9XztHs55YjCigC8iCtZroL2stYoLbjj2biTbfi3QiJam2TXb9oaZJrswuUYp",
  "key29": "4AYcpMYo1H75CpbS4JpdfM3dd1CSjgUHVLywee11CbzAe9qSYMACX2tkaCv9RXAM1h5T7AhiDcg1SJt5oj4Wyw5s",
  "key30": "Fb1c1rSXSZ2jiZEAfdgjRAT5UDNroeJeb8dVY6Z1W3B2pWhA2P71MkcRiKnEABc4We271NZMdpHhukBrAtq4P2L",
  "key31": "PNStDh6dgijyke3fUhTL5DTm1Hpw2GKp4sE6MDqqp9AvrWk1Dcbk2tTuPzD7LKSCHuFR3g6SK26k5Yx8UfK3LpT",
  "key32": "22bYccbFqJHwGfES2qUDHdwvXdyj46xCpUwobt4nYViZLH11uSdYhYSK4BibrB5jPERwmPQp1R7bGN6PBDPzXxbZ",
  "key33": "2FptZxuVRZEgCHVGiJo8gwBJCfDbFUR3yUV7frKXD97hRxKX5wCQQS6vptDzPKyjD37VRpSLZEqVB4JPDyiDjDhg",
  "key34": "2b9quEWfJqQvnN4bLCHY8kU23pxBv4MVtVAsNdsD6CEWySSpxxXQSveLQs9V6aieZHS1pFwoMghDCdLfn4votUN6"
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

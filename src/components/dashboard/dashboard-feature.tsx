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
    "4hf1zyYfcizig868H5ouX175AvBQr46chyvHZ4mJfNnkT6xGBmcNFuBdnf2qwqgFjchWDaadLSFFt5KE9KRxy9jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rAduTivEYFBFUiCs1JXKtvHxoAitVpLF9hzVeFJbL3ECnkLnVr5UnuQvqoZrT2kDop9WutAsAPPi5XVP48SDYXA",
  "key1": "2yWkpV9XPZRPw3f4DxsBVTMm2iKCgzuBYThcfhc8mrVeqzW4XH3XVFqdBrKSBVVfJdTHmKYgCjirHtadZzHgV6pr",
  "key2": "4V7QXha1aSg38onWzeuFZpPXZswreCs7eqh3LQ4ggrSr2s9n3B1TjQRuavRUn592Ghn8zAMDeP8g5RaN6Eh4szkT",
  "key3": "39ZLyTntFpcTyEsqnni3dwiREzpxnmD3wA6XdmUQTGY4TPUozebL6d5f8B8HB1YVm9XfUJJ265vUGdvHFYT3Fmtm",
  "key4": "4tCauDypPREc8KAA13ZQFy6LW2zSNDvcejhchd5SJvcJL7jhuijBaCVXEPgMRhBMdK4QnszmjnqLqga8XuGkwgyP",
  "key5": "4HhkMUiAp5hbd9uryb7grxsGFqhubYbN9VsGZHbRY5rknn7oJNaiKe8yFsVotbnkza674RyUCUsMjUiJQUUiAzXM",
  "key6": "ZfCANq29HqvDcXPzrZtZfvefT7dp2q8pw3C9JyHqRVifPK2miVNQxaXvSpakqEa9b5sPKioMeiJXK9PAmfdKC5x",
  "key7": "4GdDcnkkaKfoC7D5q4QWRQ5sQMkNDQFoAhavrbRj6JhWaoKpzo6qSZQE5ZmsEN64zd7hBkGbGcCnoyiHXaR7AWvm",
  "key8": "4q996r1VgcojTQaKFJH4ynfBVePaubNKeVgxLWCcAE1LieH47M7jewRxhVkwdWWix5qfAxwXw8GLP6Fjq68X4zwW",
  "key9": "vkLTzbHYn9oFsKDoC2EXCKcHmU9phwnfYHNuX1K5z8XB1oMbiFj4dJFMipsixxLpqC1CuZ1mZm32VREd2iH1DRX",
  "key10": "2uMCfLUhk8iqD4nAsMz2bNsz5jPoEWTheUAPegQqbAZ9p5hMt1QCYZKD76T8betgwcPvpbhGQqq7Tuqhf1vvrvCa",
  "key11": "4eybP85iGnRZMvFoBRVuRNZXj3Wn9KzCn6pYaQcyeGa2U2EhCUY1eaufMcMy6MHdXFNvsP2dcXy1xbUe4vqrEMkc",
  "key12": "2Wr1dccVtJokv4V2zPiPZFduoswqfPBYPYnCV6jTYTNkGeESmm1Dp3yHhchrppZEsLgX4PhHig1F31qmeWwjowSY",
  "key13": "UBgER9iTgp6NnJWcXFgAMKrVP3DJeaBNFkam34DdpL9RFyZ2W3Du7JsdNXQWbUM6ZqsSnQEzZezR8WDe9sTGhWq",
  "key14": "35B2s69mRKnJpzjBE2BAZ7QBPA9W3pfVMZgwjzTGvZnKKxVpydNq9cqHo7PDNUHbPghfrC5XpaNtdPuiFTUfRuss",
  "key15": "3c6JJECEBq2y427LS4ytURA3FoEDimhEam5aZ5vHdR3VQHUhkdxDjPa3V4Mwaq2ZQxumz9Ym6GotcBwnUKUxHC14",
  "key16": "4zFstxWKhzE2xfhCgmom6Qs1hG3RrfGTbyB7PZqYPwZQrWBu1amTHJFNqVyi5a6trmMCpCmPzvu8yiERUjT1xZh5",
  "key17": "49hwv368Kze4GjqZrYTMdvqjp5os1a2TPsW5n8hg66cWkvBNaAwKYHTmjpCFYdyUKRmgMpQw6rgo3FHMoqCWihFh",
  "key18": "4LMAGqiGiBEDhM2U7KfbTLMNbZ2T8gXiVdDuosMR5HjvKV98KrDUVMJNATmr1ZV98g9FBkqSRb4wLhdZyGhNH134",
  "key19": "4ExM1YfrNkGjF1vdoScdhnwq5CULiGrS6k3UNp5qqBwSx1nS2dyLUSQxEzCCNH5NXMc3B3MEmmqYeBcbMHvHmNFZ",
  "key20": "5mtrEQqvgfM9E6QfRwqbSQ7jr2Ky9b3XftJ2Y1BWYHiKNviEndczbncnrVFHAtJNGwGFVLsm2wjTgF6gNkfQH5gS",
  "key21": "3MJePp8mXeaBmambdf8N2AMyo4q8VUHDUvhMR6oRmdNGWVsrM8oNM4snLFYvXQ8XWB3qqB6aYAjafRdWmTsAhCXc",
  "key22": "5iGDg96EhS9UH9GSJKAgd1WmFJi5SV7SwGzwTM2t4fwtYtjHY3gRiQSK7GTrpkNivufyJWX1mE1Rgb2Y4MRcAmZM",
  "key23": "32kEiUmGhxA8tU2BEMY4KkY3DhG63mtJHYKH91RLgSZiLq2DzUth1uto6wwNkNu9cMEmVAGqMDsou12VsdKB7gez",
  "key24": "4in1KiGbGLa5ppHit3BUP1D2Kpc8xZJkHS5o2YrovqN6jU9XvFLA7DSreGtUf3UYVcof35zoVgBRjjn2uwBoLx5J",
  "key25": "5iGXUfhHLBuNCKHCrYNU3omxwgUzQEBPCBwFPFDiQgJb1ir3oZafuJDH7pgdpYn6HopEh62XfN5e7JXWWmtGoJsF",
  "key26": "2Bn6Q4V8nSvntmusrvLsbkAxtR9YibxyEC3M7gnswcMEFmzH2UvZ6SqVZLCyPRBEfYLFkphrHR8KoUUXQS2VPbdE",
  "key27": "2LkWq1UUsF5EAutLbavWUZK519YEKgsYB7cRA6fFyNCbych5xB54C8xstymCj3TqTDG32gRxVkX3Fz1Te7EZyv9V",
  "key28": "4QHAqJNw7iNtFdiGsb2hZjQwpowR5iAfPLEg8o5QmvoWXMBebkiTB6kYT19kyVDUK8uqJ8qE5FeEk3dvCgWwDsCm",
  "key29": "4CUtSAJApfcyTdKoNNhARWFBnA7YBYW7xeJXjaiHhkju97GW4smxyC7odN3VdTEFVrvwUknwp5MidTbZBFrLTQkE",
  "key30": "2WitUUBj6pLhr2UhdTY8G1vNnEn82V8JYP6zB4BYEZe37FGPqymT44LZo1BRYAyQq1cAEN1MuvxQoAgDu1eGHZmH",
  "key31": "2eiRVZ22JKdsi9i2EHikt6vV5PEjcAVEvVAEKd8NDNdSp8VWhHGpDRBJg1pHJuD1gwfyK6c2YsHN4twPeGWaYiwG",
  "key32": "DGWHpxvKz7ndcbZrdkb12zPP7Uf6BsXaUbXPVgT5P9qZgnhg8VsCnGo3vozDftcYNrpYKYr97qeAdfdpeXZSqNZ",
  "key33": "2nYCdJMsZQEjfyXwCS7kyhBz1qmLTpBcuCcXrpMXQyAgfj7YiEqaxvWFtZvEzMdgKcTZff1S1S1ykZEhE8JnVvif",
  "key34": "5S5MZu2VCF4CpiXdE5hzLe5TBTK8a4ra7HyYAsST9sFggqVSWXdYbLX5AHjxe6Eo7eAZDNDYdUuYEJ26Z3MN45Kz",
  "key35": "3uw2Fm8LdkTGetXm53gFnn9uNUBAaU1WeqmMMEtQr1Q3TUtMq27wXtUfN98i7kD3hbckjofPHurWUTYmVBg3dkfh",
  "key36": "4UnNCmDwtvBZzLC5TMFnYV8zGxVagp1TMk8mYs2B9MZM3VVzbEFPPC7cXcsoX8zuhgYAZWZDBZcAAdzAYz9jrAtz"
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

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
    "61riNdbSimtaU6AG74WwT9DvaxsWzEon8zZNKdqG2QaR4qhxVbNiza47sZAdikDxyVvqxEJEgUA8XWx2JDrhjy9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QfQUteJkczvfDRQ6kaZ7CvqdSvwuQqbNjG3uRnFGxHVboA7YhtygNZ8VhSauzSVcYUzwpdsY17aNDbQqTGtRZby",
  "key1": "3gghuz9VvaQVB1AEB9rshqR4Nt8zv2Kwu8yK2d8CePZ39mAHgwWufDHrrLAoyu9hj3rRgkGHsUw8KgjM2WQEyJ47",
  "key2": "5ASYsf1UHuaekqzGchzHwUzg9ZxsM1hLhtUoAzpmS7Ps3woXPp2JGGpErjicxaXd3fjmMjttNLrnXbowgskLJixK",
  "key3": "2bADbAvmnPxdGcLtzgAmnaDguJzvibzVceK96aMxxax7xY4jeqFuFrfSz2Bmx6LtS1RwEBH2xoyf2tREwkTNCtQ5",
  "key4": "5uWqVz6mRac5XBckhUo7x9Cs5RBBgCXCDyyAcGubZKGPSBQq7He5wLKmsbEjTnsMKZnfJhM93yiXCMv7EWdn16Bp",
  "key5": "3dyhdqWfN8xEBwDR9wXbN2Cq9THyWM55idNYRyLi1RkUiyKGrrGkBVyBvCxkgGgxv1b98vgfYAM3Ls5b95yi6zvw",
  "key6": "3BfLToVjqAkbvuDV3VX7Z1W4oMsXG8qc1ahEn6Yk7KfAM6psWvGAdrfjo4rxANvYRwnTGqZGEBdxK895Fa9sMDMA",
  "key7": "U4UFF3GV4LDTffTsbnW7kXmaZVmXEMsxoKaxsZRExJQQW1SKeMzEoem3nTjFyRWzaia3Nin2t1mndmmkN6yCGQ8",
  "key8": "4SrcRsNn757BhJSzSD6gUew8ZmUoA8SfPZoNov51NFtJK5Z7kssnbS9sW7t3USD3r8oyjfd6gNVSBgLgs7HjMqqa",
  "key9": "2zAVJiGHkJE5uv2iYqot6i4ewXjeJkZnGTiuj4T7anWM3skgnG7WKeU88z3Gm4zPgBvWSc9qM21bjwLGrug7x7tf",
  "key10": "5SDwewoqnaA4xd4X8WwyyrEKbHsBFSSxVLnqSaZ9rBzqxkQ5njuMMrcvbtv5kjyGVW6pEsct9UoighbnGrLsr4uQ",
  "key11": "36THuW7xehDA4N6emEJSNNjsHBE6puhjQQCRnNFzZbgVK9bY4AaTAQej6SeA3V3mMdZzfZQ9Y1ZnVCivVBA3QYzm",
  "key12": "MAmUw2cWC8gpkn3fZTooHSJieofgAzF1qBAXvKWnaDVSwNtCz23Kk2p4nPiRtEspuRbkTEsRgxHm5AN55Xpfmzw",
  "key13": "5VQBVkgdcua4rsbRYwXMRKBAqEgg74b4WhMG1r3zaXxrwbsPdhx3Sbf2vp2hppnfieSFcGDonShASq5qh6pFCt1n",
  "key14": "3Zekx11A96sQ2UVs3YwRZBbYjxT7yZyRxNidm9QEF56MyfhCVpo739e6ZJ23bUXVRHdLHhjHyyzXtaMSYuic8pFy",
  "key15": "4SSioNfjsbo6NGrc7a9nXTW5HPB5cg2ZYoMH6zH6bNEGTnghjEQqtkKLx4hae4mmSpJ897bPGAhNCgNHtSpFgrzx",
  "key16": "h2YCvwUHhPWBau1UWRmhBezAjiLSSHtYFpDwcbJMgcHSoVH4dCfEQz2PNr8gnorwNaErJFfMt7m43xV1umUzAk1",
  "key17": "3LKTiLSJuiXVcKwws24QR5H2wbguTmG8tMjXQGiy5KFNYp37Bgu2x6UQJxSvTwjG9CncAHwKsrypc9ouTdbADnSY",
  "key18": "5p2JM9on4aeGL6xw6hzKF74zv9MH7PvSbZro9aqb5r5s1Jg7XnXkpX7mLej6wDDNHMBf6twknvCuACPfkCJvEhvL",
  "key19": "PUHzjQwZY7JPoUDs1hjXHedhrewqfzKNEoALYrwymfcdMV5NQkjYFeq4yHEuaCSLxKL7wpj1b2Zq2KWm2LfNN3N",
  "key20": "36uFnHsqDsxHMtzQWUAS6qVjQBqhwToo4JM2EnMhotRU9nuZEeY6N6aAUfEstM2PaEFaFS6dukodEfUpqyBKPau1",
  "key21": "4yYKMMkpnwxbBTtndhykRu7GuZcatRz6o53f2Td8u9kWJqo7Yj3jAWieNT1HJippjDxPqdozJTByi58UZAdqHmPm",
  "key22": "4W2khrQ1XdQDUzbw4E7p5Am8XAF4swhUcYdivvdstkynPoXyVbbmdLHh4esDAKLvLETAVFfv8x1M2xTnxGsoYwAp",
  "key23": "4mzEDuAQ36vx6tUYTqUsMdRyozMFsdQ7bkbyVRAcutL7x7YesFUHKk9Du9CYnUkMKyntN19JKSiiC9jX9aYf3GUq",
  "key24": "3JVRXrzRh6TDRXDh1tEFR6PxRfBCYa3M4NBpHngWPxaUNdkvngzUXUxZnaHJRCqwLzZVYY4VStvwmPGp4tRj2KPD",
  "key25": "52qJsAmd3QNaac2mvye75yy73oWcEiaj1rSNfCKeBJL495ZGAVoFyNb7zM6RNSbB9SqhzgbfKGb19GTQqoeEitxR",
  "key26": "2zemfmN2m473J2xWWaRJjBi6ewZ5EibKEKhbGTQjJnKdXqsmhocVujjyKakhAirHsZou4cRobXzPAe45DntmcQx6",
  "key27": "32G4yDSGkcRWL3yPTEjVRrLqEii76TkgUDvkgw94xPVgaqH74arrj5jYU319x8YLDNRa4xrRzHejXSUmM9tmQ3F4",
  "key28": "66k3gziWhpNuR52pFcjfReSbYjpZ4odi6oMMzDhn517xz6rx19AJHinipuS8nvDgfhm61WYmYEcJVPTtptQDcrog",
  "key29": "3LpQMVzaQ8ghaXfcPQwmE464HzpTeTTrXV3kUAduJvqHEyKyacPTQ3LTNaoCBBFXvQ7FsCU1irAWftE8j5YHkeUr",
  "key30": "5deMEXn6H2nkoGExpLPT6Zjy1Vro5E6qhbhFCQWN6xoMa2zf4FfAXy4KjDLTrbLT2kfhU1FYfZ21auvDy9Ntk2gs",
  "key31": "3SAa9FjBkAHhdr8d2WXMLnZvSXUhPeWRZ9Mucrnrj8dD5vmizooyYi7BsghULrBgkBM4PFxQ5MQd1r6GrygH6Hpr",
  "key32": "26LVfeqKgtX2yvM5Z3vQ8qK1KxFKM9ozxTJtkyjXUcaZKyCadeg5toNBuQiKRWZvvWvyCq1b53Rw9Cyu69WabSk8",
  "key33": "3Zeep3F21B582YAwYAeTuVTz4fgv36UY77sgE7RGjDQkoDeqXerRht6FVqqHDTnY1jYm1p2gtGS9NY9vvqaxVSne"
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

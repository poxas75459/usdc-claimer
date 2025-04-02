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
    "4Ygs6VuKuAEgzAUnJFKdx5PzaCRoqL9arVnN9oBfS1wQhAYHK9MzgiXbBNk5R1D3JkCopuh5AWConzj8jzo5zW1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXHXXwSt1AcU7hmL6NdbzMwK8Vtu8fivyf7UEYihDGTDPGHBcaaYqtD8o4C7NqssCpZ5NFjtaoAEPraJwEnA4aY",
  "key1": "2euGwczKhGgqfUEDPxyAQhpFGgATgVLoZE6erWztbTHC4H5kpBEehZgysir5Mt8a9McWJRVZAbjghCyAoaYyZuwV",
  "key2": "36TT15TCzAg8Tftxu7fH3QtpPKQj8uwxvqJyLsSu71T347HS25iuXRZQ1CYZMeyF2pACRYPKhet3VAbBtqFLpLEY",
  "key3": "2Zb4xpeTV8Sp1WKYSJvhcbnEt814AAzUYfCYdmEUAPpgG3K77u6ZFV2J6rbEbBTipr2ypaSMdb7kVeZtsPGLEMy3",
  "key4": "3yPMYPpjp2Rp9WbZo4qYWvj68soaJdbs3LyZWLr8hHqDGGqJUv8UqxeyNvfjw9TgPMvQxMw4qWX6noG2mrHT5Y2j",
  "key5": "4XpnUnFUeRXZJyf72A3h9LskmBqnJDgK69jDN3qGySbjnhTDUxbLRQPTe4saPQ2D8XHXpay8aDftKS86RsVcrPRW",
  "key6": "2FywkmWiaCJLWXuRMM1qpyx9rM8C3Kcvy63S8RSgACQU1xiqeW8kBAy2pzpkXqG17szWf34a9LbtDy2qzqxS2qX6",
  "key7": "5ipGPzPEWkWcaiQjQvesvE58m6NftMdwaPupXe85eaFULDFr4LpJRUY4Z3QTzTedzQa1wP1sztWW1LkY1433RNcN",
  "key8": "2bwHNGpioLLYdDCHbx3yEUJg9bW8FE9v9aX7gkYigYoHEvSKVSy4qK7ubzLmuBc5WVPz8gPW8V2os7dAdasuBrAU",
  "key9": "3uVdPFEhtKRX6BPkWymKRLK1E2JJaDV2o8gEwGEcF57mYzZVKeUe216ChwEL41WLiH9axva25PG8Yc9HKH51zh7C",
  "key10": "PEgodjDQsi91TU2jdV1EGNKHhyDng2g3euXFR5mTfJbpSY4VvRp3KqMcXu34JSKxuPtuMk1Uua4ZPF5gVma17hX",
  "key11": "vGXE7xj3M2TnDEyFhXWZS9JM5dcHZuBd9crWogZ1fSVfQa178Jqij2GRkfAg7eJRB3DrKddLpA5BcSbSNkqfkYq",
  "key12": "4ocaxue2dosnwQDzgzKSPVnhfb47cFqfW6V2CfTvd77hLW7VUB7WLeqyx61w2949TY24AKpUJq39WmtJy1CxoEuM",
  "key13": "3pVmuHD6Q8hUnpM5PzaHxnrGsofzdX4RNGE89goFBV98fXwYiNqUPyVcFtH9fCehu6syTqHCFW74Xyw8A2axJDon",
  "key14": "2uyj3niTP5Ky2GABzCYzuP1T7gg7gx2nvTJXqr5sJSvRNYZYmrBXbBEK1WqxDj9JVSMCRf9kD7v2e84vErnkVhix",
  "key15": "3NCQUn64LUSjtea6RhDX5jqHj6wqpADyNPk2K7nV918WnHT2qub4wUcKckuQQGe2qBzjvAPZaXGpJa6PnPXUsiv8",
  "key16": "KE7DdnVhYRfxxxac4WqohSyW7e5usjQMeVZxErFe9ivAzkybidpuQTqMwG47snivBhkDY1is57iYcCFkJUtDoug",
  "key17": "39vRv7C84EzJQCjaCCgVrWEj5u2ZmNvZtPRVPHpEfmkwS6RpgNRbuh9buntU8jRn32SHWLJ3XHa6YU1Gf4ULAdU3",
  "key18": "koJbjiDuoJ42HWLpwUzTjxn3X5cbX9YT2BzY47P38sfpscEDePHhZ8QfqudtvcxipyNDS623WeMifhmCwEAJJSd",
  "key19": "kq4LZMNRmB4PthbHbFJ9o48LH1b5uuPr4one2a5V5bULUpX4DS3JvtPVL6n1wapfJNoqL3amaBM34QTKEr5w9i9",
  "key20": "3cb763TcqBriN11QPPVa6ZqU76nbyEXnS8kJPTgL5R2z1vVHASyN8kvoyJzYc2yvX3DUKjSjQBRscAEefX7SiAqi",
  "key21": "2f3Her84MKfqLaLPkhMkf6m8MGL8R3WaHuoj4YscehMGBNV3xz7VkF29VN571ajqhxrmX4v9U6h6LcwmmqdCVUUr",
  "key22": "4KsJJ8dZNwNU3w2d7qEnoa1vpko8BZRiE77d6rGx4D8bGt1GTUKfMCkPooV4D9iL2j3mFgWynk8ChgLn9Ej8dAEx",
  "key23": "UDPuKYGYKMFaMjvM5BhTQ1UmfYfHdB7pDsD5ttgCcjrkj4Pwu1arsYmuviwfj46G6LwYUEU9dzaUJjhB9pXd7MY",
  "key24": "2uYBgjz5mL2noDXDzZeJTPCySwKynci5iP2jLwBvsNGZQdrGXGDkeR94PPDbnah1oNyHJp6zioWgbVbS82pCFvDz",
  "key25": "48wtAj9VRjR6eCmiFTUp1C6YJ4Jw2wWYSZfpUgwiE7pMJovvebKfWzd7qUQpQLWLBVT5K5CAe1znnBZKuWNVBxxH",
  "key26": "3qjnHmMGwqffmKB2AsDuVC5UoaM18J6ArqjkNkNiepzSU57DSDAtUy6JadRcudKyYSPp9PwpjPneCzpB5tGyVYZN",
  "key27": "3guDEhhp3CQ38mYq9tR8UajXbtjGX4Uh8aTS9Su7LB3KJAxbfdfkcxgkHRYnRbFmfXH943Dq9BmAWUdg5CQksHpL",
  "key28": "2ivmgyP2SYpCfcqX6hRWnwp1mHCJNNTxeqsjgqABYXzrooUceNnFgNEMZtXatY4BhLSaGUEaCi7iPEzjkgFfRyeU",
  "key29": "5q7A1AKEVbRJGvabPeFUf3cfRFpHJSxopPTUmiYrBD4E8YvwkmMLwra7DD2u6wPtZQCUdcF2EXnohsZyNUNj1dqx",
  "key30": "5FUA69XuZtZjbHNtq2DXwgoKvpkj9MGcSFg9Nc8Gthbbvj12a5p1gTxuwkiHf2fCYj7U78Z3eTtkZGjNcsw71unP",
  "key31": "5FTY2WYVSKkTAJb3fLRiHg6vU2nhyD7mkN4joKW5kGAhxa185nndEof2TNniocmnLCK3Wor6fTPkUppp34qrxJFs",
  "key32": "3utxWx27P5UWZvHrQYZFdc18R7Lv1orckyAi8oL668FFhtopobhmCAh8EAw8HfYEYBpNo9Wcq9SqJXKee9sNgJuv",
  "key33": "3a8SEZNxN3WeXq9nb9C4nc8YsiVU83zEFwQ4fVEvvbXEESxGKh8ZUjzpTKEbqcLUCnSEJXCdZkBHCkQmayEystiM",
  "key34": "2TqW7QuRM6nQh1EVEfCBLMVabYe88WjFbSjMamhcfEBPAgzmed8Qad4XzyQv8ViQJZ8YyfZwohVAuPjSXkqhvyrG"
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

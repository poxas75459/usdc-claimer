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
    "5BYKXBhLZzwiiJzHXWKNxzrvnUtSUszRxcZNcEYD2rrfPY5vZmcmCZhumAiCkp3MnyUN8E5bZ2Lea3WqYF8qvV9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pySiuwqUUxNGzmjcLmc4FZs3qVpgEHyGyxQvVLxpzSa6EwuwnSNioCA7zpW5c92796qqy4K6Diz8bWKgQGKu2z5",
  "key1": "5eFJxxK1VedVkfLqrzirKtz8TizsLBRiuwWBvKsCfv1c1CSAraUqrUMDGJqLeEU6Ju4em1rqP6MRwi797zGM4duC",
  "key2": "2YaEuuPJhUutr2HMCW9aW5thJ8iMx9N39dBChrwozaRKjHZADe578kKQ3f7yWp8Vr1QYi2GpBX2vFUA2PChLtmUX",
  "key3": "64kYpWNew3w7QMykgvF2BiiU7uC4cEBuBsGFTgN1YPiW6jYJAt5XjYy4dCNv8XdMTRe2b8orrvnrgz2xqQ2RJzPP",
  "key4": "3mc8HUFYJ82apXFrGXVuPdcADfkQ18FeXT2nRPr2pV1kJuPQb74Ldi4Z1QMbVnZ8cBfvKmPe8RVVS7fbWP8kg7Uy",
  "key5": "8wSj7jgZmbykv762XvwgkUoqprB6rZBa1CBgzcqASWh8NpsLTpAfvWSsUjmT981hz6Xk9E33e5Btov2DWqvV9m6",
  "key6": "Djs9yC5JauEg5ghH26vwqsdXqBLXZMdTPJPMeNW9pVrKp7rySxLFdFyDop3G7d7TsrojpCuzysNcA4GT2Q7eLFh",
  "key7": "2DBkxU5B5KgEYebyfP6VoULZNx9N9w1M5KTzDonWjms3WpSZMWy6GE85AB4i1oSxt4Jsx3frnkP4hzw2Q74jx9Uu",
  "key8": "5HYaxwCtiT7byyJ57cD9wHs9x2zfPmPRS8b8qvHhzEoRyDT7yZYHr21xcwtvt6NgB8zCVwzKWMv58AXX4Xjs1CAR",
  "key9": "4DaS5w9ZUxVLyCwQWRfkA2f55LBwAUPPnETzydS7B4ZJ3N9Mn1kpZ1ythbaZ9MnrH21SZgTggT84uqj3bGm3ApJa",
  "key10": "3Rd1uZQ5icTQ7pHPYhjbkXX2nwgGwVcmDnArzJou4NzM83yrycufZKTDQ7L5K4q4FZsc7k1xb5oScZr1GqQ6dKoJ",
  "key11": "2sNT61SbBUdmC5YzkxKVahpbShN1Nj8o6u2NikhjHD943PyaDmWFQcZEfxzHVSQkykZmyP5LhyKugzdkizxNtfMF",
  "key12": "J4RYru7x9UZBo8bMXbUsxdj3oWN2BDEvwiEY8XFQng49Dqt2tvtKTpqXdBgH2QmAxNXaAB2iMTDfqkmXrbDyqAy",
  "key13": "2WcWWhEmGoTFkkZN1K7YHrPXGEkebs5zBFAYTjT9bznGh4Nf6MmbKNXVTAcguhFSKKcAyb7FP7jF77vR1Xv3P4Ck",
  "key14": "21meMKQjes8rDVGRykUBhqRi9cQoeDtqmc5UBTP9gXyhMMco2yWiq6zAHASZrpk2qBJiJ6CDQGnFyD8vz7KNWwCK",
  "key15": "2wTWfXnaa2XygtUM3qDyTDWzQJ6FYvoyCj1tu1DdeYFLFqqgZHSN6UF1uBBw1TbJjfgzyBCXyQgAPsa6BEnic1fZ",
  "key16": "5St9pVbaMM5XLqGyykFERBQZTB7FVCAFJLJEFyXvCeQrP2UZQqtN58pzShtWCESi33e4zqPjNZhnLFC6GKyVzYXv",
  "key17": "2QA6A6mQVNCxBmndNRzkyXW8951eXE2eeU8P1sm9x9yr5XXVrS3qWDak1hVofGRsjFkwrxh2xZJaEVHJfdam5oGd",
  "key18": "5sKi9bEbsxx1M9GXCiCZppz1M1db4XyCgfMBS7jJn2SjGW7Dm7AxGhSbSWGTVeNcSSt7uMbunydUoAz1dyfgx6Kg",
  "key19": "3uq27jvXGsVqXFUhMq2qUN91myDbySMA2WKrtqU1bF1qA7QG7NxpL5VATkpybNvoa7EexoSbYdSJPSCqZLQkHbu1",
  "key20": "5QbRF3hrGMSKFaPp9qsnPCCH1zFKU82STi4vqe7ExrKBZPyTfVTjisNtkpGsAeRmXxvF9c8i7p1sDyiXfLQxXSWb",
  "key21": "5hzdTMh5d6YqvRyzxHPbL8aM1bYK4po7s1eMtoD98mdEMVuvxAtUmgJiVvrf4suYufdMLPfB9GAGxYRoUz9ygtY1",
  "key22": "2V3sEEXcgTK4fUi4FX5j5CNLnaceD5XdTyAh9LEM5NK9qz5YVd2dKdJMyVwLMJtekzJ475CqmF16TUsW5SB7ycqj",
  "key23": "55XxHfRxNfBeGtxmceqT7VPEfP6xo2mTbC8xf2GRGEqBx7FF2Aynhx2Zrnvvj8pK1Tw4WwUSa6qNmVAvYjrvGeBX",
  "key24": "3RFn4ULqgRkRFSzUbtRFZjhj6ViEC2yx2c3g8zmuQamoi8Up8jsz76iaCbpDnWE1sx5va5yRtrkKRW2jAZXv46a4",
  "key25": "2GiMC19KmVsMoqjw1ohy34jMDjh3CkKQABATzxCB6r1RCLnhuNT5aYLVWzLgC6MAPib96Z6iU6fx8R5wBa31yhPc",
  "key26": "2cTxnNRAwzJzY3oHcNqsQ1ohEeJwvnJsW5mAjJmEAsX7cBTkccms5svTKpo44YhcQQ7AUFXczLnLt6jSkn2ZptiK",
  "key27": "G7LPYzra9vTLhQ6vdG1uR1qjds9sXf1P8QswmENzSpisCbqiFgakyACEPJmhNXUXbvLkzNz7x9jyHVoBVVAzGcE",
  "key28": "25Fh2CXcVqPsyjeAK4EcqrFrd82AfZFCkL2o9JyYFbEdSr4uyy6FhG6qNtbkFN7GNCE5vbGpA7LfCDw8MjvCb3oi",
  "key29": "4uuj414JnXLCxZwbVW1JPqDAD4FNj2ByfxEqcjvoAyBSAF1b6rEwLiNzGyBifh8MKDhSvxLVdVQYzjo9b9m2HxQu",
  "key30": "RacqXUhseA43g9CNVoryMewMi2BKnGU6ngckqY3uR2wmrzYgd76PjN7Y7opMtfHMtSy4CHjK5Y6YU2W5Ph7doum",
  "key31": "2h1KjKyFeMgwLp1gtC8GXPuNhDZmP91tYCMvAonVCWrJpBFyaXLZyr1mfAKsr8eHcGYAx2CiSVY7iTxbMkgMmoGs",
  "key32": "24eboa8bzfsUnauLLnd7VxyxKtZkPRVsJdn5fnTLpNMpAFhiMez9BhvUcsyruY8pv3MpWm6rtYJmuDCDB4Shuv9b",
  "key33": "2QG7Ukboxkn7WydvxuHyfbERCHnKTHBeYxos54KrH2QLWJsoyC681inKdsgBbGzghVTFGhvjXLyyyvNbA6cpxwaP",
  "key34": "4R3VyeuwxmSdZPY67uXwk8ZyMFYMAJ8NidgmpGQ6VsFjAA258d3ToiRKmC9MXYkPVqkoc2Bvs8YjXFogZPGiA1ey",
  "key35": "4wnyXraTEA8UWJr1nyH3mkndXcwNEe2xtmcDY61ewatPSLdi6eNz1Tc9KW2owfVnKSsE84HtFnSybPqbEziTXahr",
  "key36": "4PTWHCi9TVZfHhKznSXm6oLwRwzHfUjdPXiqqBtyQY5FGiai55b7SVMW7R9xGKM7FuPsYwoVDWA7azsK9WBt7Qja",
  "key37": "3kVxr3F7E8CTQiVB9VLbih5yoyVjSnfrqSQKoKdCpkHacJHn6bv5sMbbaUuyJcshUzBxD3GznXeaYsAaxw5g3QGL",
  "key38": "625yT4y3WexQdDAej1wqLLucQqnaXJVURtsBE9FwxZ3hxX1S3S96zWnABnq4CgXK8poTY2jZKZFM2DwWDMJssbeS",
  "key39": "2koEC2bdU3HipL5HXBwYhKgrTVjZEfGLJnSWFgmDPrQSVC5eif74gND999rye3r6MDjoNQBT4nqYmaXVMeMLEE18",
  "key40": "2L6BxGJCoE2LgNFFP4Hs3ZdFvRzX8t3SzkmD23zhQzx2YabLiRRoLuSLnXYj4JUGCQzmJpP3zKaMSLcT6f7ovpgq",
  "key41": "2QZw7QrPa6BKHin9xMU8hoHiLeDsnwvapmQyujs3hZEzNCw9oeBoWyZWSCZNpMwAwDrxGxr3vjoYcwVtdELXptU3",
  "key42": "51wE5SmTuGUZQ4eXEgYoyaFkae3QE3re39N1tUHC8sxTQUmmu7N2wn2MgjLsMKCWwLuyRNTZSJFiSfvpFCp2Nk8L",
  "key43": "4qiH3cryiWnWUGtAzR4C74jSb6fRQjAhWgCfC4NdHLXPuUVmB7hBZKywxrbvf2aUMtHXfWXoJ7WK9mQigiLU7zF",
  "key44": "5fy32TMgM9m4R6Ni3oGmj4kStNd3E6bwNfFoEh5D6yv6WeFAHpZDqaeNxmWchus4akw7yrFNbR1tWVEWJrFthC32",
  "key45": "1qDXKye4QNhyDNGfgapsr5o6f2RYVkVHSYZrE1W5mETfaBHqzfRib7481EHVEjYJdFcmunWNnZy1owB6PcfE86C",
  "key46": "8iCGNHmzUHBcn9RorAD6BEdKmWCpgA8R41e2Tef9FX2xFYevtvD74m1C7U5oRrscjPpxHPQ3p9Nzsw5e5V9pg4W"
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

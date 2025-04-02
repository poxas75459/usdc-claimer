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
    "57yBfq29oBTjAc1YCs5xTr6didusgabskr5amuNRKNjmy5MNdTHUB2GPhtMytLrs6LUveiwWofTdL9ai9D8Y7Umg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YuxhJhqAxiSewuLPoQZh5DvmBTJ75cuQzJmiNBNJccbDHsUskLzNwEdKCsUdukEb9CtFhvWbhVteCAFuUsrqZCz",
  "key1": "5AVJxLu2KsEfVao6qAJGsu4t5Lsq9MGxw9vTMLXzh8E2jM9Frc5EGUxEdbDQpLw9PDy14dMBaS1fzN3dmRoY5dpy",
  "key2": "3cP29rYTfdRCGLBJQsXQ7kBpP5rprdQZbh2YSD97dbjzvHpAVnGST7EnWbtMfEvYPXhYV1Tsg7aZaH8EhXzK8TsK",
  "key3": "Ca57mQTJsSUmqi84JRW1XGaKLufG1pTjqeJJ2hw8Vee9dSteYS83WYFcbFAfP92BJkxa5UVkL2sDbgRXevKg3US",
  "key4": "5B3Amub3PZhLNrv9BshybRK382qgKi6HYBKqgnJYb6txtQjxeN2mgRAi8wMgtKzMWir13n4jyDuhL3mCChnRWtwi",
  "key5": "oVybKDzoZmcJzGVv4x5RqnBcHVJkgq1UzHpqbmav4d5V7p5VD94EKHCnWSg6Pc19cssqTWepdcFVx6uf1uvmYu2",
  "key6": "3bxVPdMUeVnLDbZ18XKTeUn12MyqwnkkDH46uyREwFNUi14Gx6FgJ9tUtFhS6QSDbNBnF7DgLKcRD814t452c5xw",
  "key7": "3auLGYk6bLvWhDdGYCp1CifbdGACV7HeckwENHjdpZZb4XfqbXwA95hapqWdd7UCARUmuadTwoz1ZQpPxp3niW8B",
  "key8": "5sjgBo8tCQLvcD8urVCkQvhJKXTq3LbF1iPxCbjAguGr1iBn1RMekhMyicGFquVTBYfYsW4wJt14UEUmpHFur8SY",
  "key9": "4pDZLJZbQSwopHwcqTNA2Fau5DpFyKrHk17iT1oLZjtyXGmkEahq1Vand1GXJNVivxufAUknyAE29VdGUdhWFDJy",
  "key10": "5XnCXk2B3R6oScdPpiqaQFos3xiMw7DazexYA2jdjQjTwAmXZ3b27EHVmFhXgNi78QDvsfE82YBP85sg6pKfNeJ5",
  "key11": "2aVU3eqCbTBDAbJsKa9iP3pLPsbiRNTrXsdR471m3c3cUu1EuK8mLu3KuxeMmoazWe7iBkzqWdKNdMiT5DfLAwaa",
  "key12": "j3R63upcMQKJxtPzMuWHagZtwqn1vEzmYMgM5xpYnh95LMdK3nfGGiTsAefmTa1eie7m5f8eSM4skYkepGn23E2",
  "key13": "2QyffE9xJouZR9EYm9xv8e8zDQjd3TZFbg6tHX9s8GbkbJTTBo1iRdPd7dSXtWQCKDd8VP2KEk2nT7svZaMsdmfA",
  "key14": "67kBGuQ7121T9F72vBgbMQTHzYkTpEjtKefT4XTTwW1ZsTTxpSDa3md68kXSNGo5EyDoTU9HnkbAnwkUuvYWvKgz",
  "key15": "26qaoNFeoi6RkJBCHLgYUUkFt5F74mFMaZSf7yfsJgYVobEKT7y9B8AmYcqweAicMb56rjrGhpDNP5reG95gDpgS",
  "key16": "rSmjbE1Wg8wzHyimFY8WqadA7ajkmboHvzwU14bAPS1FySJM9D9urXJA9XXejPxAZF8wAkx4STRszhEe9FHjavM",
  "key17": "3m8jxBE9EjZTeGFUJyunVFy9Ko7dHrzZQWLB1PxeaHznhbGQLmGHEZcbtxar2YPXYzpk6pcLBsAXjzGyP6hHAaQE",
  "key18": "3PhkdaY5UrUZtNB72xYcX3wifJFXKKmdVp5it9xuePp7giddFtvnZiYTfemfCf4iFNh5XrYk2fKpNSqX1zVGQtdp",
  "key19": "64XVugy78oWCEPfAxwAwNJNgYhgg8ZxwbEui3MmzgPPCArnjibAGeZKogsVohNdY3hxqciiJeggaTfGVeVX5MozM",
  "key20": "4J8xRfZGn5wLsKakBqkgsVUfWvZCh1ariFSGFP4VZjNcZa538ydRJRdSs9gaa8NHioTVWEyUTY5vomKJZ1nSvPjX",
  "key21": "62EinRAJ6PGus7UfD7wdbhoQfm1xMApLnVFJDMkNVqjPm8CdYKLMmptE2DvLJYfdkEvnCwgcEVcxiRrCm7znX4Bs",
  "key22": "5jhZbDJwaikUUn9huwWTnoiEWAS9Mpxb4F5Dy9Dr8o7X71CD8UF69Lzy4fBJ6qJFfqC438GvvejJAXmYw5nbFsy",
  "key23": "y23zvBnrynpdHkcTssrSuECCS8oJhPQPVA6ufEZGvixx93GAR7khcRZLQgZw25XYFwb75Z2ajsbzFLxGFUE9Up3",
  "key24": "3zKc5QZwUKW8W4Ed8VFhi1d9g4aExMd1MbBkvEb9UMxX5HH8AAqMnavWwCx5SHWsZ3JxkC11QP7SWyFJW2wXKUJU",
  "key25": "2vSNxetW3kKUksCW9nWs37VmFuTYq35wfQ9y6vy5VFkVA5TR47VWnpGMjf5EstCiKe3jSiyJtzjzbLczyAhVWCRU"
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

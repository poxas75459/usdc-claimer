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
    "4dcypnFBk6w5f8cgjYQSXpM8A1w3qBFNAdPQ8CCquErGSUwEp8hetLoTnSwc65JpaT517RzP2pd2oiUVtSyV87X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WuHvMhPwGL5bpGUjvGat5RwNsJAfXsvuNy5dnuGx4c1iQgFHhKaEY3jj76wtwDYAosuYFira4AXuCTEUi8tGRh",
  "key1": "3eqMw2EcgMJqo95sRGcFnmuvszTJBdepyVGah5Svm2HPUXEmMLZ1yb8wuS1cFrqNM2F4fX63Pf2pmQdrQP8NCpbc",
  "key2": "222DSGzS2LnUNcAChdHJQdXPXTEqBWJMqP5PWwv4sTJoxK5r4m2uCK4QvFF6ie2MPdBA77PLDs6XiHNrojdDXGjJ",
  "key3": "2AJZ1rfuuriHm7aFg5NX64HxSYtjEXuXmHch7hJEzAdmLGVPAw8hd6gm8msddJXHTA3oj2udwZHa3hXV12Hitarw",
  "key4": "VvTUMBXoFcvqgLvv8aPrd2BRYaTGeR5U6tvmZ5EGWmzboKNDMkEM58NKwzVDz7Kq5jynUVEcc8Y4GdangJX35v9",
  "key5": "3jXT1Wx6BSVazzdfHEpJ9ygHui99o7k8uLUQTD2diQdH37KmBdraGwP5cXphraTULAsTig4Nt6wNQ8iFLfDHRJbh",
  "key6": "4qtzsJBgXPo89c2it6LY9or6Vaa7bxRDZGEVq3L1WyBsViwKhCY6kfurSuLmjCua3Gy2hoFWTE8awoQy5jjpUXia",
  "key7": "4C6ZX4RVA1mDFAFRbLkkqq3DJk8LjaZAodHLRzQivPwbbGo4QwySWPpkFbK3SFshkbqeypXkhB6xBUraiC4MZoBw",
  "key8": "vZGRd16ZqZANXMFysYPDy3FjVqVAnG2J4R6kmB8w1ryzqeuqrQ3QB5ffQzhh1m5VroUemt2XVs738tX36T87pMq",
  "key9": "VruY34iUQdd47cNMheRkXU6RRG5F2eGQrxgSk3PnQ4bG4uPgBLoVPK8T8rhgBqHF7JVRekaMWaNHpz9jhcrNGz3",
  "key10": "vSq1WoE2auvEFZNF79UGxuBpN9HYwSGzgCfE8TwEVDDgxEkRvTdMTN42R3jJujQFMMEQqzf8MspjHJUBnbiM4Sb",
  "key11": "2j8mSHBrT3skYcS2mTFf8omZu9wcJAEDa2V3hSw3AZtpad1bVLh1gu1PYewaFQ1ZjjGve7bJqmSw5VvPmsy8orvX",
  "key12": "63z5gUGFJntFEhPKa1R8QZPxQFuZGqnnyX9vUs4zRorXJmLvounrBJN8TVAeJG5VvLUBm2v6EXkGkFzgKDiQnPAq",
  "key13": "5jJG5e9VVpAUEdjHnX59x6EiF6nQGc6GmmSfMgrXGjWVTeRMWcL7U5CseDU2dpYLyophQGeUkbhVWPHTV17wLBop",
  "key14": "2KfTy6Rdz3AVTvNtMuy6RG5eVKgREuvTnpd1XC1NzF5igWho7E939UoZpAC4Rk5BcvYxYEvSKqPjAEngkjcnE4m2",
  "key15": "2qnbP1ur5xPrCXtxztM8L3ZgHDFkVxnQs7rL6UZ17QMUfTMtYU4LMwdfXvo1BMJCCB8ZKR1GPtQQqGCzxpqGUFeb",
  "key16": "5yQJ6r8hFkcgjz68hN4KQnP4PFAYemGFvEV4w2obG8a2P6sSMNHB6LkEnZJv8DYhQwXLTo8sGoz6gsoNGDzjwvUi",
  "key17": "3kqpMhwrATMSQ2T3BQxy1dyPRmXSr3BgK3tQNYH7XyTYAn1cSnLrVzJNfQgJGXYmj9TsixFxjk2GiEaNprTDK6kS",
  "key18": "3MVuzLy2CKQ2AJFnajMx43fjMU91MjCEdrBkFjex9yJRHDJ686ozPikJQ47wBwxr9wexnReD35KLU2qnjiPFUsck",
  "key19": "yvFck5WxVQ5WUE5DQgkkCoLrKQwRu6id4Dgks9qT148EnwfeEvDLm7Dwej7rtkrtoBsMooxTYWb6df4KousEQ1R",
  "key20": "4UaLXp413TnoW2aQdBGRMGJwyJZy5ZaV1A6KXXQNGvfPTLwrwtomxUtqtJShCP3qnnyK8Bt7gPxNP7LZb9ioj332",
  "key21": "46GASRMW2VhDtoiiofsEQMHfjWtzFf8Rh5UonQCaTmFGU1aTYf2Xx5dgW85HJGc28n82dmjQit6xVGSdyoVutL5d",
  "key22": "2LrvZFMhPisKXSeM6rknDckdnj2EDEfHdABkfJwjvd7rm7AFY1PkZt5F8ysGkhTbJyyrwNBAtXaKwGRjwj6ZE5A3",
  "key23": "3Yh193i6ZcQqEwi4gH28ksKp94jb89J9CvJe1AQYmgkhjX8eMVGsNgv6vBXPomsChu6Tk11Btj81LSoNM96sa3j2",
  "key24": "2mNX3HZvxjR7GH4v214TjnHDwywzDHShkndmbynADXkLmr11CFQQ3mA9Grbgwj1PvGu6FXZDY2uztR6HKX385Ei7",
  "key25": "4pYmyvKvYWBEbrxbuHQCvVUKX82xgKETMcrRgyBeuhMSuj6MkwFvJwJqGqmAf1MYcFzQUbkA8VFCp3zjPG5hrFgL",
  "key26": "2tzvX2c8FNZs9iXPyh593KzqCkBivsDqiAPY3sndJbo7Xy9HgfEzkk6ochdpW6Trq8MRNkbASRibJBqJ8rLE8SdP",
  "key27": "4WKBTLSwu7mz7xJLcB2LaJDKaPBAAvMeMeohKjgqZtJrMDam1o1c8VdXSAZociVSb2M1MqZskf2WAYs3FmjiWfoE",
  "key28": "3je4faAk3fAHrMFgiCoM2SzRKAnzvbrRD97n1oFE8YkBNbeJuBD1MT1ikeBFLfJvtWcoe8Wt2Ucd9MiR8AGpDPLZ",
  "key29": "4iTajebyytk7QTzRxzxmBw6CcZeBH17ywpjzum9ztvhJqZVmzBSXBud5uEHdeXp6Yi8MCsuQA3A5o3KsyF85Sbj7",
  "key30": "2VWCCRmnpyXxPZxDXjwJQ97kYKtu1PxpNsqYEh1HvcBQwFN1xFRAyLAXSKbCNWU7MVa19h928RLeJMzrQuuSamtL"
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

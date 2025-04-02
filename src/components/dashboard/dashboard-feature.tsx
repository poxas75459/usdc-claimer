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
    "2temu1bGc6dovwgB8s8uBS7kz3PqPozkwktgknTwWesTjPjfYW6agSb83GHW5b3LMGHJMPYfki2PCYy5ri4qcfFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DoVRJhxx21CJ7qFq4Cv9FTxgshDdhnNQuYwyjRsaBKYqN5cYXeXzqn4FvMxnG9oXZtCscUGBTZxJDDDPg24jqp7",
  "key1": "2esnx4r7DBgCiEb5ZDC9UDmN38sMVtY2hc7WrHfPr7D82CEwtBPAkso2FZqgSRJhkepNAnxRKVmxpvxW8urzbiCW",
  "key2": "5kxFMHJE16nPr4E25gMkhqSG1RJC56uLx8PBH8qDzqUFQg6zs1BWxh4vC7qa6bCRcdtYaSXjT3CLBn4sHvGh2xQs",
  "key3": "5NPBoZMiKxM2xHAKpBwaa1TqoBrFBJWCu7fQsfNbnhFKpX3rWXJGDRszjMssUgeeFds3Vpy6FXd5QuqRDbkCycSP",
  "key4": "SgzU4mTgDr7XytvyAaVgYa1gKgvMyB5vMNZzMq3MeBu5YFL9KZHm6LgTweLv9wHzsLZmMMekU5gs2nAq5GSm2uR",
  "key5": "gEzpN1o1yy6RZC8JezBf46eMTUjXTynnALaseXZAnFfFoP1keX5Ggf7qo1t3MeJax3trVJvF2F7scJ2XyucwDZV",
  "key6": "36TK8urmDnEV1R4KgLsrtifyq3QiYas8XvtmevfRyYQCSaynS1QrBxp3uk6pAWjpyuCYmkQNzcUeqYge8mWkjzLt",
  "key7": "2S32TVDcZkm6t4QWEQJqp7UMmzoJuXLiYFis55SvStFJaCXFHfuc64fbCMEicDk6PiWcQBkkotiWCnWYRRQAXT42",
  "key8": "24zd2wEnhf316ttb1s8NQF8s5ByzfDNbjdFDSy2WNqoarNH95btq3g6fGcyjn5Qzd9s4GmrfVv1ZueTrzshDSZas",
  "key9": "2hcwV7q1RxHCQdpuaW7hxpsRB49NojAjn4E9aiWvABoqza9X12SRzC1sJCD4gsZfrHXYked46FresvttXZQCZMs4",
  "key10": "44phGfDasLNy3TpkXiT14kzWhvBq92h38C7nSjXE1287ea9RARVeTPPaD7STXkTpWNt6io2o6V8cp9kv9oHkoCSp",
  "key11": "3WwxzPDXQLPoAdBQEs1vLvpQgX3uvRuHLorNSnzYSGJN9jMMPnLeKeouECwGF4r3yMq5jRx4mbvAthjCwirYDRcZ",
  "key12": "w8cbrmHb8aRNEzkZokCgkqjqVmwiSomhRZfWSx25MoSmufXzDpjsVqYXnZ7Ps51hLicqGaZcBXdfSw3voGnhPsS",
  "key13": "2rX81hcPbrAarrN2uBxnZGTxZraQWPbfmHuTuNzjKYhL5UyCsPXb6nekJGnqdxMP5jJGGsdb6PAVNa9pda3wXwyg",
  "key14": "HgvS75y4w3vZBbXJRye8FuasxjdLzVyyk7aR186x4kgjApk6jX9DD7mMrzcyZZr3CBkW6rVRvyi95i3oFDEVFfp",
  "key15": "2mWFQgHLuYXdUGgg2fBGabqvwVuZmaWq1oeQhWNQegLEjK6NdGiCdFwPvamD5K89kkXN8F4Q8x3jnRHVRP7k8mS1",
  "key16": "wwoAdMMxLQ9nEpzYEvZNqBudxKqWtUVL4dqzDDrqiQKYCL59txkf9TmdKTXVyCahzJ1dzy3Zofk9R3FctUZHahh",
  "key17": "5dA56ViBS9rr2ALuussjcWowVxgnQPCEzuegq1oYUGkvCevXBgVNxmLkgFQxsCLUd5dDW6cKgWHxSq64B64U2bHt",
  "key18": "5mkzhmGW3BPQzUH4j5tkwrKYLBG6qceJAAcZKpC73a2nqJKeP36hcnhEMK6PxRwwgD3FiF6hz7eBSARvHZUG89pB",
  "key19": "5gVWdJW2F17pkd2f5iocd48oAimSSVgS4kq7fs6UH8GfxRMNA3NXcW3kJSGCtHJJ7GLkFcMR17JhYHoEcq1Dzt3h",
  "key20": "UY2EchF3G4EPebEB2A5F4rV4FiaLP33oKwmwPbaGBXgPQMUw4x1f9QpYRb36PUgKkjcdCjXbrttLd1KHdEWgb3z",
  "key21": "3VdcSyfQiW5D9SDUGkDBnDC4jsy2sezyEHKCt8MQNSzgcBgzxefCvmfctk87sjWr1bSGKC3tGmeDERfckFh22tKk",
  "key22": "56paPYBEgqUzsPZxB9h9zg32m7G24vuVwWwcAbzhqiedMD5K8Bs5LbdB5DRS9JoA1NAUkNuXD45ps8BDm3WEnsqZ",
  "key23": "5FpQRvCJUk4Q6YU7nXhx8pJurtHWPrf6SRFv33aqfskcK5TkSgTfbjJjcCDjLZYACgJgTaJjiFejdoxbJ8mn2CFN",
  "key24": "2mHWpyudUdK8BK1EbMcsGYRsYdyWtwkTT2mCcmhH484axgfSyRNmV3c8QuAfz9L7o3v5KUz8QdUG66hnpg8TaP6A",
  "key25": "3LAfPgiwjtDn81R9PmdnR5ozekwm78SHR4JE5HHyCj9CZvsgV4y6RfRhnBZH3Ugp9XP4iDzDThZfJtDWD8iqosC4",
  "key26": "3qQ6xgnMmf8Mmi1M6f6vwidKipJ4u642JL4EEqGa6g5JF1sTTZUZ9uVrrd7EqTj3mHu3BoKm5hn3YtNqothcvf3A",
  "key27": "4Snw8kXu3pPcUE9F9JnCpBiXuLtKz6UTRax3jwcgQQA2z2Sqw6CwVCiHwrs9ULQ1Af5YK8a38bc2AsdQuhD7fSLU",
  "key28": "U7jcoNeamx83Up31wQGPBzZJF3tHDvQnQLBAzsfQj9QDBRRzH7kFtdEup1uw35pr6HKm1MTHzvqypPb1d2Rp8nE",
  "key29": "4pGrXn1gC8AXu2yjF9B248SQB2LXSfaGpuGTQoe9ZouRBca49AQpZBqr28uNgqedQVp9AAF2ZdGk6E6ikZEQWnE1",
  "key30": "AYZT1XYkw1fLJo48jpWx7oZSXrbFQWdkvM5iXyP4ot8hJKGGqN5U3oZRJ15sBYGzdgfDvTaWzZHdm3x8ggofCqJ",
  "key31": "AAThnasTF3Hy9JJXKFLCNFSCyQ66mPXFJP5y75guwQCoxDkVTCmoDJBgn84ACe6e7fUCQvMsEvB7ifp7aiUCSkL",
  "key32": "454fZ9oSkMY2mv9CsX4qJX125M17QpjxgvtQN4Rr3NHRQBhzrqqbMdRahQpdCU3TJupfYcTsXNraVxojTvJvrSfT",
  "key33": "2y1FMpVwqipsndAHroWfbJVwEUrzAWWd3C4rWnfazb8JQZpzv4SNXTjMw1AXcT679bF1nSsR6vifp7tqZ81N9R4W",
  "key34": "4PZpHVusxYePBWA4NVrGEUm75ukToq6YW8VgapPrV4DxE1o5bxs1c1yqMBJ8ctRxgwBbEhGYzbSUVBz68cYqDNm5",
  "key35": "3GT81cRQHumxbLtsYLfs8Sviv4ostft3fQ79WvDvjm8u4B3b6jru1mKUFoLUNLzrEMjwMHLt4wzShXQe9Pqhy2AL",
  "key36": "AFB7tYYDGPcZk7ov4ozX6bNnJna5BL84JYqUGruuGrxpqa4WBUE4e8EspE56gEGLzP7Gm4ESZYQu49H7eEEjANo",
  "key37": "xXqD1sGkpgCQqeuy81zsMLhvX6CCdb6UkUDp4LUY2PS4NmxsyETYpzbWvyxWsqkPBxQ2ZwjZBTRDpNKb28D8YtX"
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

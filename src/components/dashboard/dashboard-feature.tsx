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
    "5j1Vhzy12QsFtBDadsapSur1eRmqX2B2HZBEvR3EUidoP7cVMgYgpb9MXstna1epZTH1beEYz7AJ5sdNNnHx8Bt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtQ5hb2qcpjp7PDgSoF3ganRVENFiShQWqPrL8d8rWPBXEUVYcjg99DjBvsF6mQQrmKfgGYYZf9rSaKp2kxrzam",
  "key1": "2B51yBzcMvD9cmSTp3mXCYSdvehgbBVStezdZr8yThx4WdR1wurvbYwz52LNM6VALsb9kL8b76XaNdaN9uqg2Bv3",
  "key2": "2EoAVNmbG8zBaqHN6gAAE49BWTADGTnCrJggzzSc5ymsgCY89jYSq8qsRdD9RHQiotxB6EtkJddFTkN18L5VjVCo",
  "key3": "3xruFEYPGNZxD8F5MFucaMi5om4Cp4NmAdVRDMZ6CbC8GNvZiubr9cJ5joaa8dBs6iZDfEn3SKFgmWxDGZCjqSax",
  "key4": "ZHj3cm72xemKQycUKp8yPFvF1SK1FAAp5btCoc7wZgxGRQpNipexUaBxJ9QnpTPhWbeeTqb8dRpjPyHsjRFSJRt",
  "key5": "5HyUjroBahxZqA31XdaSqwmJkFiEHZEDePiBEsasoA9sfE7qsqdsmaWSqRLjpnnkV1vuXpTCnexMBCWXdSiBQFDW",
  "key6": "3pHfoJrLzFrgaGbLCbkMTPVZK6r9pKnphPzLMnPBWbjd2HQpNWV3mfbQh1tXyeB3Mc3gTHcoLmNdjG4CkwDFsasT",
  "key7": "5oPQN3qLsLVwmZ18484mSPmDeyHYoja3tbDRAPqnyKHuMGUcCt8cr5KwwrEuzkthvvHVXsbUUhHkLNkVWRPyR9AL",
  "key8": "3NnvGB6zW1DkqsNJ7FHiSV1mtgAptqoNY37pGSPtRWJXv6nDdkPFUaaVRdJmzPqYiTV7xZHLa3Uj6Mp3aQQzNqZN",
  "key9": "4H8aFaye4dDNAFcQ9DgBq6m1fLnLs2maLL38txi7Ku6zxot3EJFxKhic9dHrhNYgnF3rhqBxGu6HjvuLYMEgwuQJ",
  "key10": "4bSzc14CJQ6S9aWtwF36BywY6Jo5LQUKmi2tkCZuAQNajZvsxT8PW4xm58U6UwqCpqgG1Y2eiBReWn6hMLz8226g",
  "key11": "4P2Rwj9gvMDYwCYX2LSNubUbJV8QG7eb917Fhg79c5djZ8g4ih4aB4r9B8yEtwfiBPiYuzXZvpabCHXVbmpojz3S",
  "key12": "3dFMGsHXC7QyN5xwqFvUdZXZfsJmSCt1kgPRYR5BYsbBDAiceuTuUwu8QPKgk25TZEG5a2u6JUUGbpsfnyeGEsAB",
  "key13": "3Jy442hPbBmzrD8wKFyowA1r9RC6Pwfd9bVYzxQzBf7u6hxT1PigYqjj6M2hRoYdpiuuGH1Hiz3XoYtSczHjnw1R",
  "key14": "4kHtp16yBdfw7wME8xMhpaPrZFyswXUjQ8ZtXETzC9XKnQWTDQYjWULYBBWsME9m1Zp6GBP1HutfMsR2QtLsdwza",
  "key15": "499wPNC7uu93twrbP3NKqBHs8E26vFVgjgU6m7Q6fh7tbZvFFTE2YuFN7uhvp4YGKrbqS1QUyMk1CevG8wYDyAno",
  "key16": "Cw79ueRUTGasZ5KQz1PPRxL9muXiADg5MrXA5PoArcALeDWkavTzH96sbnWVJoUmq8ZzeR5gqPqZQ72tFm3Y3tA",
  "key17": "2oyAvbz2kGRAwpny7wWWyLo7wBZZs1T9fXbPEnbnypUgANL6Z6m8zRaFmup4bkvFDYMmVWmToCawri5dh7XH3D7M",
  "key18": "V4nrxEYAKPArAv7EMTcAsdj8koCeJULw6oS2iuvyjGzinho5DGc7DmGisZaMK1ZnxQJUzTKmtRM8LqEj6dyd6e8",
  "key19": "5mc4uiLAk9KSH12JVRELeiMVkSr1T8uKgqBmrnLume4qKbSUQmyV4wxc8WELTsBxWdnA1ndwMrajyYy2AZZA5ayb",
  "key20": "39Wh7pqCkUaDTYQXLqauG5sYmjNKs257PKNhFU7SkjwpgnBZFyCQgeUdSvWuJ8nnKaVh6k1qLoERxgqSA8Boskba",
  "key21": "o2LtQFxmzzayXHEPErqNWn6ny6qXi4Y6KPbyBud4W9N59uwga98vV8MSZGSfRRUN3cjP5Bs5PwoGji7YtbpdzAP",
  "key22": "2GvpEV8jLbowUMGVZrLuMyKxWmJdGcRxtmYJ1XNrkZA9LbrzDCwuE4LRiQownEYHQrpmFz7p6NvASSUVF7NMPRK5",
  "key23": "RjmB37ug5xn7JYozskAaf8A29WttT7wh4W8GbWF2BuSmRbVKg8mxsxxCFnEM73e3McSjeu9uzywrqqF6ZefquC3",
  "key24": "3nh2BMGVsDV78SJgCDaGyn4gY7ZJ4hPwzYXFjt8idK73beWXn16EHvrd8qnDhp6AqGp2LskGJkaMT4jGnJJt5WPL",
  "key25": "2KVzprwf1yTGh3bViFMLit5eUo3LnQQEm9jcASJfT1Lr84enpgNVJ8oHG2Z5yRsCvGP1GJu7qprHB9ddtE6LrJtp",
  "key26": "34ziQoB9RQFUrgN6V2GHjEQX6DKGSaXfym84LjTXi5rZUuqzYd8ehyBcaqiyiUWZwSdQHMDimEZ3kGn3BHMhCCw7",
  "key27": "4pRk1vtMT45wfxts51WdZ5Lr6bWoEYQutKUTCcSnRdEELpXJ27yVjL2WCCC6MiintY8nvhkPkhKkKeEvmy13q75X",
  "key28": "3M154un4H4QWsAexTDfbUoAMij9DqyPQVtbAxnmT1VRTe4HtcvJMTqXDKJCz4uV58mq8XBk8ZvK7N41H3UZ1wWZY",
  "key29": "5iFvh8cwj82ksAZziQwq84WJSUrB1RFXzBuyazhAUCkbSfNRpL1sA6uNX4FEGqQbWXQxtHN3Vb2YpCcRbTqAszjB",
  "key30": "5bw5T5n77Y9Uw3qoyRwW88bo7cRtDEuQ519uXXrBEtfZjwe2NPdoGzr3ohAxeSLQs6yWV9baipMBb6xoGLUSe7Nz",
  "key31": "2aB7GyrN5vEECxQUgcbpgSL1EhoAKvViqQpf2U6nwJQfxDQibryhGnjCRxTnAWkN7QdSkPyJuFaBptzCpqHYa3NK",
  "key32": "628YiATukQmiG3B7bdD54YzbS97p42atZFSVoG5nZRmxFWAXF5QymVs6XVr7xwmF2t7RuBkEYPGjuYaQmh84erzc",
  "key33": "FFL5mThaMABucywicYchvBHPcd4GNDtcyUqr7LFmzLnCuzDNYe9w7tqMLwa7JzJdfnA6deKJzBy5ZfFZ2hJc2GW",
  "key34": "492vU754ueTNAa3fb25EpFtb3PGbndxTmpLWewuRtRpj1yjvgH8XGQii9booAdvARqZHKXJWBnMFQiEjfuHgE845",
  "key35": "2qmjHE92JmyhYXkVfx4385Sz7XeQw1wYwJ5EbyMhXQi3GpsF1CKmpddt7dZRH7ecSExRaxPUqTjMSDWiMogMD7qW",
  "key36": "dVYdwSASNktkRsjBpGiXPUz4jNF3GJsJQuZXvwo2KRAMWC5VNi3i1W7iNgrQMW5fEwZxGGw9GohkfV6PfhT6RC1",
  "key37": "4nusKfysDBnSPKKBPj88VixDa5QWZtQ8jCSP6pMh174DFRZeA7fYdFntcMiiAy5JNWN9gMXfhApw2qsUk2HVuQuG",
  "key38": "2sigZqfMvPkkLKz9aPycP13Q1gv61AQ5WoD5amVVoNRfrmrjGkqRFaVHMsRKFHH88jvyK5HStFp5Sqfgxx8cujQk",
  "key39": "5jwqPVwqhNYeUG1NFZk63ZD5ajsbQhXMKB7N8LVjDMKu5nmLYNjPYdESDssZcLm2T9jtBJhsi3pbt1RvcRQzn8dT",
  "key40": "yd651XCYbEzvTcYUziYQdhuqj1q3jDaxgH53gCD15Zf5JV97NampVdz39nDPsFTVSsue3pNu6McdCrR9rxnfRwY",
  "key41": "3g29cKgDPGccPrmAU6bSDEBJUUHB1aqND4dXPAphFunZQ18eojS5bRxaip4EAkJwqy19QGJZxJDWSenh4FA1mXk3",
  "key42": "3GpBNrrKNNxnQfiegYGWM4yePWAPcnkbpZwGzCGJDcypViX1jRuKu3x9CaKkTye2ztLje4BxNA8G9xoduJQehmp2",
  "key43": "3w1g23NRpfuFXBSsBPj1v61XuScSyUaM3ChjurBWQUhvZ3CkktpHSnUJVYCQgtqRki8WuM6jRVAKLcu9Txb2mBZp",
  "key44": "5dFT6kZoDbDwv6GeeRbDhzoimLEDFrcPKHtV4jnZZF1UN7rwq8U26LmtwU984WS6h8noCg5XBtYw57kz8QbACq7x",
  "key45": "648kL1kubJcoBPokndstJxEa96YwYE7nsoFJAxo2Y7Pnp8rE87j9yYDTQUBv7iRFVbEZs5uHCY46XtkJ2dAW7DYV"
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

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
    "ejpbDdjSVbogEg6naR8NbX6strDWxzZMfoAYmiK5n9kSc7iU2Vtrbbrcg9yWB11XCX5QbqvGTXHySzAiBC2LgAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pCfBVfpZYbkPKgfmGzwd1PWc1tjqc2RY9YtZfa2f6QS8Pe9BHmgsfMXVFZ6CDNYst2YnTMmjWR7pzwcWovXHQpd",
  "key1": "3eFQYpjB7xbQPZPiy8wZCEqEjsTzNr36w31f4jSmGY4NVrFs7qTmg6CyhvvdbzeWq2XikNYu6St5YUXjFgAvFuTy",
  "key2": "32aekgjZpPSb5uQZm4YTpvuRJQcLRDXUibsQ2bHg7b2DhWW1owRhRFq33Q5MsEFeFL142xHzbwAypuasg9xYnAxS",
  "key3": "NT4HTnGeyRBvsB8nMETzCYnv7BYHexehYbc79tJsJWD7p1gGm5pp1kxRJWbWKDpvSJVaF4kKFuFMKo6tvJp9AFV",
  "key4": "47e5TdCNFSZVitJfJ9c2kJxYU5aWmdMsWXHjGLDVXDR9SPrfDSSdeAtUVFfauQUNoMZhKKebX5eXAvNSQaQS7ZeW",
  "key5": "5fiuhU4RZaaqgk47Efcqhxmz6UoEyW9n5Yg3Ct5223nKLFv4B9CQEM523isGS1qzdxsYxCNwYcUAbgBf8fUGcDzy",
  "key6": "4oNPdpQGgJhZ8ikoPxcWL6vfXsEfVFNbAZmRqJLJckRdV832ZRst2teTg16Te9nxbzriYfUYkQ1fDo41bXWf8QJ7",
  "key7": "2U6g3vuagSHZjMCcwQtzR8GjDV1jhJGJCg2JQAfe2apmkkcwyLKotkfoGVoaYpMk6NCRqcTcrGzTEg921QxxZCRP",
  "key8": "5KMchg6XJqLJGcZ4b4CZ1YH9hz8mNQTXsiLRVVTj1ZfxCwU1NMJSjZbrwiRbUAEVd7viABQkHJBhJJqEA1o5HFVy",
  "key9": "3RntdZ5nRuiEx5nGnA6T8hKHKcBAc7TT4PTeCYwsLMtcskCgQWaKW8aKNy3hho1AU3z7UPSMY4xbswGMNjHUcT7C",
  "key10": "3sLNH9W9LiQFiXWEeYA2pKvBJsQRpnhCvATEtiJkjxupSeyuAzYhf3p1mfDMDuFAEX5VrFGJwtaw3qpj4v78HN1g",
  "key11": "2BoQfnAQmo3DL8noCjqiBrKLVmrz8LS6VZPLztGteEzhiN5xEwh9Y4NufXGarLo4SgL6Sgm9Kw3CvWLL5926GWp1",
  "key12": "3rGprbf4N3EXQA9CXzxTE4xFwRR2K74xYgSm5ckp59g7uvkbNrnUmGb6UoYsfiKoCLskZJtkoef5KHF9Gws7peYb",
  "key13": "2fnbWmfrsXLzBnKQQiaYJTYFgCtpjsNo85orpbYXpMMdiZVqvyDyBBuHyT92qZHwseGwbkhiddekR34vJfPzXRz8",
  "key14": "zbayRJ1YqNkG645bjmjMic5Jt27onoV8GKdgcB2KGK4JzX6iKTMGbUSJxnagmCr7Xq3a7pmuDPiSum5JBRV7qKf",
  "key15": "2vN6QnuqQQhTFfJcP4ipfeb6b9T552pwNqWXbpi5r8JSkktLwJaChbDqFb2cDunmF282eLFFjix4vFkfvoxqSWSa",
  "key16": "i21zPHDA1cyE4PD4fDofrRxwDY6GnTNwbJEWTMMMDUWPTwbHM1cw4yk6vEHuNLL7fYSAY6WgFC7sWcajg85Yfye",
  "key17": "5v9y8tEsqvep1TxrBnbLBJsHr8PP9mDw5sLAoNGfF4c6nRJ3sf3PwbmHAJs98SEecbuFum4o4vsRVbZtToXG5Qui",
  "key18": "2EGGfiYw7rixn2wsMrpWeZsWpnGmNJaKVbimJKoLkt2qx2FBBEN3qD7tWyvbLMpShxvgY6w225smZLbCfgzDAx4h",
  "key19": "49at5PskqgwrYngiEtLbeAp1AVLNbUS13axKQ695v73MaHwcriCtatqeP9BXpmjF2a3jQcNqKLqgL31nUVPjdHuy",
  "key20": "4TUpiTUhkY4ZQJGM5zK3EnKQks3WKV1ety2dJz27RzYDG2XD9gwe372SVKyts7pyFWxY38GhRg3W7MQL6Zz32fJN",
  "key21": "5qfxsgTcuaSBuEBY3c35cByK6d6GswzaejZ2eusa8YeFhqCKLCmFr7LE7U2X3PGvBSMNPaVvfoKHMjW6kw74t5zY",
  "key22": "2othjYPK1KXSUYw8FEiEGemXm7K1DS3ssNppA9UwN4ij7rjmG8E9g4YrBw7tAcaEbmw1BC6CJRDHGLzBicTZfLmf",
  "key23": "54FEoAo7VM1PZgyU4f2SieK8MStaw6pDES7zSmWSmishVqufwJ5UCJh23zkC3z6xsnRFtzvPxHCkvXyVuP2JkqUf",
  "key24": "PTSBxNyigUFLCXPiwn6hn7fkiZtCDnMvwnu7G8ACcLSyUWSJUw3GMzsqhXRhVJQDmwzaBxgU9HjQcx4m1BGjXq6",
  "key25": "65MmdYZaSEG7iEgXDpXHZjJQ7wFTubHYgPeUVJAdZQEjtL3h3tbM2opWXCbrfNPmMBS13MxDdU7EGbw6KFfyhQL2",
  "key26": "4JpYEUZHuV36aron38YjRiAYhAn8qY25cecr2eAkVUbu9A7bc2YTb9TEiggs9CTsVtTx2f9mS4KTwS2VKLcLiR1j"
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

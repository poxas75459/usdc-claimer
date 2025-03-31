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
    "5XKPPLA3xHPp8wdLEvVQeTVn1vwacomXm3vGjb5m1HeGsE2CxJ8XD4podrGiTPkmSPB5yRitHgCpv1955KryDosY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zRombPVKRLk9sjiunhsVruunJ8MkqVBGGGHsxnnvXjZXNHGJbkxqn5zmbt49M7XwSBc7DQiQoKpaZukNqkABzPC",
  "key1": "2pEBiDXUXSmQ9TVSC17ZJBGVizxj8J2ciSrPm82nNYGcLgVs7zUqV9QqqaZ4983QTc2L6YVTyLwCJ4CQbmR89b1k",
  "key2": "4ftE6BrMztF9h6dw5DaQFpeNtQnFq8e7YBs1r7J3QhnGqNuM8ueXQNKzt2JnXLaESWU5ZGhwecViwAKDA3aJ1nsp",
  "key3": "4ujtpxyWmsjS22ZFj8kPpEwwp6JizJ4yh3kNrdh7TiURgx4uskd24pftpJt9A9KWKWU9ahUN5Vws4ahwptrcKYVg",
  "key4": "2tpaiGBrgqiEdxHTR9HGrHkjan7vUeYBSmCFkbST1VYXABFg9uWbUd8TFA4j3LBR4UmWEu5odCMRRLiKeVtE1RCR",
  "key5": "3aZXdLwWFdEpMhk3rSf1YN2wDcSD6EhkcmCZnAwwVqB5NNJhWb8STvmMx5rgiNYsqpkPgtf3h7LuFN3GiUJE1Tiy",
  "key6": "2bQmypr3H3UwjA5aSKamzhb5hWG237ZcKgaqpybnJPxykRNSaBm5k3HbnxYsRtoBgq9iPq53kBKt25vh8DRXTSs3",
  "key7": "4qVYm3iRcTFG11UGmRtQ7PV4C6EYyj8PJryfFGKqnCNST49cXYnKpc5hw6HDAhHzJ3zpkvEPXj7ohK2BzPvgEkC3",
  "key8": "5CGLE7kKtDBAdTfLdzoAa6TuDvGpr9snevZThURDU8D6qnFSQFRgSqx5RXzpu2dDbjBS323pGP7F4ZfHd6oLntyX",
  "key9": "5Mb94JFYbyHvG4jz3j9fNWB3BrggA5sVWVxP4dUoK5N8ujZEgoeuB8BZP2f8MC75o1w1shBJJt4TbE2iTcJAUX3r",
  "key10": "2NLH8Mw74c7mqgPs7dJbGBxbCXWd6LSUMC9qZtrcVe2tCGN249Zj2pxQC9bVYYXFRiX5rpojYsx2fP99wpfzzwwf",
  "key11": "2JFhJRq5dEqRMZGm9m3ZRuhD3c23dX877HxipvyYxvZuJQensNb4ErU651qtK3cnRz9wxFiVDYjZdsjQBq3pf1qs",
  "key12": "3wZtjiFsBRjMvH8QpCXAuhzB717dG9K3nNijQUcMJ1dgCLCkALjaVcFzJZZqKGTUw7b7dAvn8NmowtbTDfMQTK1b",
  "key13": "5Ge76dj1Wsryw5NsMFDBFcoak5ehnXjhbSa3D8zZSQUntDNuCqTDWfUMVfV2dTQ2im8hr3EX8Dgvt1t79SPqUbZG",
  "key14": "4kuTXuMrxVGsmTb6gyo8UCS5idB8Vmx616RvP2djtH7MBfK2X14ZCib3fduM3e76kBuQuH9PJALXKB6YAsCciamH",
  "key15": "54qgMbJsA7BnE1VX1EBHBUTLGNgMVY63B8N49nhULexJHoyRTKiUNtbYks8a35uaXqHB5ESPUXWW2oWMxjmJ4qUU",
  "key16": "wQJwnVNXYvvNCH5ZEkpdbcibH13mMAFP5XmUyNdCFV6MFsch1qV3Uv88PsWLLPUzvqK9UhnveHC53ULSmsoBZfH",
  "key17": "5FaEPqjL4fFpGyrjkTBZNxCadt8SZxiweNjt4CkJNim41tVwMyo5epbVMdNh4mqSHRatbTfXrrzuHWUfKRSMC26C",
  "key18": "3Uxu9DZ23iwKdF7KkpiCmgyWHAFRx4atGDPHXuxeK1jp8cCWkZnB3i5hpAFCFezkiRHQaysbmEtqEXPryRtgqAy7",
  "key19": "66fND1B7FRc8GQenNWoWoCcaiJh4sgpB4DcdhSJDVkNQczqgjWyvrXgT2EodMyZin4sNVCUTWFZ8ogXHBYL4rZQi",
  "key20": "agAbZegabgKtZVtp1eXs7KgWHh1VwKFEfVRgDaZJeo9MB9CR6ZAccPJDgHYyVUHNrFVQNRa7UyiEfASFp7ddawx",
  "key21": "4VWi1VzqqzSL4cwh16b11TfsvBw847VfjbXmBAwhQ2ejuvzzcCGB4L4R5RnhVRiDNs9EcXg72Z8vLADonyaj5t9G",
  "key22": "5guXbXNRvy7VrUz7pfFjVR5Qg4nHnhBabTdeYKN63A5D2KBDYbhQysuDgKyXcCmfqsnT67UGsFqHfrdSuBg8fysa",
  "key23": "45Zmaup4dej1o8RpgkNTjniJXvqfu42DK1Lrg8q4umSFRgdXHirfKTmVjjcKK3Sfa5EidrnMHVTWRcKisL9849JS",
  "key24": "3BVWyXuo6fkxp16d7uJcVdU6EQPZSDjJ6if9TeiFQAsxmQjSQJk4rRHLEUt6TKVhZKAbYarWWvfQjqxLdeHqRkUm",
  "key25": "33q67qgnejkVotTzLWABR2sBbPEoYC5qGBMf8GX6134GRLZeJWzKfDmemgmvahTZUcPFVbHchWZPpDx5VdTURYC1",
  "key26": "453VjDw8on4KNjxnGQ4XYV6bz6EhokdDRxKy8HtFuDxyeS6QNnrHZVojXJzan7afxqKUS4UhWieSFfYPfSpXWpcn",
  "key27": "5y5BdQN6diZ1e7qc6mCFn8AfaEfcvWJMYGBnp9e1ryeSZBPkqggQNdLiphMvW96VsXKdzgJ3uCBiaXbnXzJqADtq",
  "key28": "4C66SyydcekaLh56jLr8MUEn3iG5CvAcbFLvF6STfCQ8FCdZJoFXvZh2P7yqxHqUENUK2R6WvgsAELpSD4a5Qe3v",
  "key29": "4pET4Ja85w4cnv7LdvKkP56Deh7jXNPLQJHXkZCcwVharMhDc47gQ8mipHsY8pRQScBqxhvP9CwzAM4yDgde5sFp",
  "key30": "67LvxWhsJSUS5acKp4sAPWz2P4huqAFuypn3yy2vVNiqFCCXR5wdSMLggtvgYdaENJUsFUmjL8nhyWj9bE8Wkrfy",
  "key31": "5MrC3isrVC4y5gXSFuzfJVLFJgMBdaxph9KmtUXJk9tDHbC2MWb8GE74H3wy3KWxS6u3mFnu4cuCC1wZ8zs5GvF1",
  "key32": "4GK2tcNNfAwJUBGgiujz3TymUzmN4xZYGCWHDm36mGxopdj17THZRnerCSpmV57D8yQvRjKfk1WV7eNCKk2DwmWn",
  "key33": "3qdSPkoKMvfA2ubKdg7o75ucugfNceKPJdo7Hg6839M5H2ahnsiGtTGXbwD4YPWMnU8hBajZ5K1t7yCTPeVYMrKp",
  "key34": "5DhyVcvdomTBAENpFiTZcXhgxkbCvP5rctnVrgqXi2Cs3QvT7auT51HZhzmKovbKxEPgTB82RKUYWs4TND6pzhy5",
  "key35": "4Lfqe3WfRzyq4QU2EwN5BeYbxki2p8RMeJBzBuR3xF6PT5ZL2dUqm4RoYDVcLJ2aDzVxBR7j7CZYnpYhdP2yBpud",
  "key36": "39dBsfht56dnZENTzNqvrhLtJJCtkfq8HqPjbGSiDCfofNFKEkAquwExoESQGLUqq1vzkXV5XuiUDoGC2Ex7vdX5"
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

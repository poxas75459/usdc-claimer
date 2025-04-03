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
    "2DNvXDXmCEVzStgS7nFEd7sBD5hwcDKbVFQ4pgUSHiJQa43dxSjmsqgF7paSWnDy438k7KbPDjboUdam2ymT3yqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HsoiyNip7E8BG4FSyqhXCQd96tyyC9BRzW8MYfs8KLL7RkW8Pd5TppPxXNiYzyy2dQF5wAQ8pm7LcQZxRL3cP2w",
  "key1": "5g3BRoZV6Bb4DudEEWDuYN7Ug2sGEygP529xdVjd7hmGMLDQayvVUX7YffoYyymGVYMFRcu85k6fQottt8v5waqo",
  "key2": "423rZrvsWcGhgRXgZ8JFdqx5nuDh8yDY8ufiYU7CKuMizZo1Ae2yLHC2sbrWsTFNQTfKoVR2D3SQG43WeS1Pfx2n",
  "key3": "3PSpTesRp9CiVCKkdFNTpqDWRWcmjXrveQg5mrbvtdcGf9FtkWXUPBJcABLpztd2xM3J92ESL4S6sWPTU4m2Fdoe",
  "key4": "3M217rtPsKJB7SenD5x2ZtG9EkkkUDzTPq7nspDSwR9UgR1gTnWbzLFCktAincnpvpSe3KShi4SEQKVUCGbY31F8",
  "key5": "42GzvJKm8jnzk2YHighR55W9UU8nAiWjhq4omLEXcsE2S6WURzCB8QF1gkU37ASXENuMem4R8qXGkMgkr1CGERZX",
  "key6": "5g24WPeLhnQfYaBJTtup5XuqVMt2sRf5zDGX5rs6aHs7shdkiy4sq2JG4GLmrhEhVPGbU8kaLhCi8qgs3zegQVLz",
  "key7": "4HfbGRMTQBmZQnKtG5BNHdjeLK9FND1nwFPxQGR3dbcoxBmDV2sQHdStn2j3hxYkLz7pHYabtZTCYw3rcbr6z19j",
  "key8": "3AoochpseZakkJ6ztgUzkuysHLvdyEwrA1NhVbdUSDwf1eMU4Rb6TQQRqD5oC1JQgtYSPh9NRUsatRAyecEKQrzx",
  "key9": "3N677gfgrcEnYfvUYXuRJ9j7vkvkDNoEokExZSKEWWXTdd6JJF7VgvA9gEBh2R4pJRNKJvSC1vgv2tivNgTwYvth",
  "key10": "26UpoXv7czuZBmErReQvhx5Cj53P5x9efrj53iQABmWjT2LvSjTszCXwzzhE6f4ZB6Bx3mea8hhV7z1eWemZRGvN",
  "key11": "2uHhbdw3sw1E1Cz22adhyTPAs942NoaYDby2oRZPx9MvcsWKcnPTrbrrKUTFDcWExaGwYoxutWNN6gXhTP1AzPxa",
  "key12": "4rShHA7j44CArKRdvwmMXF1grnRt9iG5xv5f9sYa2MrAXsiSqJX9T899kk79FJ2uSUt8wUmbaZg9BZDKsMCHDtXU",
  "key13": "272ai4twqP9k77qVmLJpvGfCKuMEjMALsPinz8uPMTv6k7H6E1Yre86PqciKo2SEcxTA4Az5y22JxtpRFsGSFhjE",
  "key14": "2Uh7joMiJEgtw7nxe5WrmCRzNeNzEHcvD7GZEPaHDvVXvfiv4zLG7XkvTHdBTxpdRkGUTpCc7WVrazs7Fm7dNkMJ",
  "key15": "2mS1qKVAj36MiBXYPqPmLAcVf1KqUVJaYMPiNwU1WvUiAcoLe5xLbiZCyXMSPjhtfvjiHHptz45GLAFzJrUcBqeq",
  "key16": "5fPtfTyEvwUSosSkdqGUFkSg8KR6U2gE1VXUQmnk6vEEe37gbqHrvvtZqvHzJdnHi3FGCPGZvPBt58XdP6PSN3QU",
  "key17": "3uRM7uPXVAs12X1Sm9wyQ1UQa6m39nUCHMGBDEceWCqzMQBSvACaMDqjdHbqih285teRrhWyXHmiV1wZV3Rhiotr",
  "key18": "DZAYTJDfVsg6nZRmf8Ht8uKoqzfa6AyXURQGCxvVEunVyLjvxWrMKNcvga84rdE5f7EaMcoVA65otBE36fm68iR",
  "key19": "22qDy73AW6u9vzpMDmUMvRiwnCmjYuf5bYbC1qv8CCoiovy6sRFxh7rkhZhg7PvBcxJrugQUkrfsnTZS3K3VKLFZ",
  "key20": "4df8MAf2kpQShWEWBCe9tqabU1ZojNj4FmfDhSiwBQLFkchCtL4jMZTxcoH3SVmVuBmHNvDjhWHnaF4pJWpu4SHT",
  "key21": "2KJenvNzTLsFQwDud9avU3zmx3HN3dtPY9KwQJGuUqFwUp3mKConEJiXik5zfrBceZyDUq12aGvC5EHMy7ScdH7P",
  "key22": "4sSLXNodhwxyKSCPeBWhucppHDqPvs6Giz6GhRFA1EUs72Di9otPiXEJWD79XgmDyEco2Ted92G9REbbUYchmCUP",
  "key23": "wbkc1chHnj6snniDz5G85Sx3tVUqHTJLbKYnf2nQeUCGajBf7GSNdx7DdmGPTe8QCf12kC7BLan3ViWKNhqxr2Y",
  "key24": "5aRL3VwbJkRAea722oNMRbT4sJiS7smdxHVdbrq1v57n5zD9FopX8tgMUfsHbA9Xe3b84A8vrgvCuTVtmnxnCN1n",
  "key25": "5HPYwNBnvVsbyKhUKVpgSnKg6655qETHeVR1oiCXJNNPcPhrE7TouHJxhc3JAiRjRRuCuEU92QAeH3aPhq3WyLS4",
  "key26": "3UXaERz5xZtb5jSr4aYKraCipTsPpZ2fmdFkhSvnzB1U1uLWNsBW8ZKMgdAqVadUK7yjXoXgBXXE2Xc8ZLCH7K9G",
  "key27": "7a6bqnUD9KFukqeVmHt3cDHFruiF5wxEc2ZyMoGHVdLYhoGuBpYc1UE8QGBWTnEbcG75dsVhCSwDPFaT5qohhjt",
  "key28": "L5XZTpheUqvNUyGpqVx7TndrNNgZHaMPHkLpoCT15do5mk81z5bTseuh5RXkPGS1UhsG8tU9RpWA5GgUtdQW1oJ",
  "key29": "2WzCLiZ8VVoGZQWftybASXuasB1Dpq1JPC3M1Bw8qxViw1sJofNDa5dSuRJcrhcfjTxVEpQoLHYU3YDfCWa9tYXg",
  "key30": "dvpGTDg2bo3gkWdyMyBjNLtju6TCiY7fKxEKQCWxEKrE9s6goEJNALeyjznrsv4B6rDPEuethojg41bmTNRahD8",
  "key31": "621qmXu2fEwukpaX1qZtvxzYcbMEpeo2qRW6Mf1tDctAFWKgs4FSHk1nBE9PUqngDWZLNtw9KRAnd4GzN4yv4zie",
  "key32": "3tHqbTMrurNY9djA8ZfNfVS2b7xwMfU8BafJcsLs5Y28rdkC3qzejiX3JN3G2GEDovkzWZXpz8X8ruKMqCQrTPEU",
  "key33": "4LtkXTBYkPeuxUUmm1aNq7vLDM3VXJNGBeoW4iPvR7cn5ns7gaXwYomTpUe1PrVXFeC8u9drDvrNpHxBNEAT1oJG",
  "key34": "3QrkBqnTB8s9BEgoSdSnkBdfcDdpKzdJj29kAMrkgRVWQ6E59wrUmc9U3G6E4DnDTqQQSa18Vcxu7pULxnq7aYp8",
  "key35": "4uG1PbTiEEuFLZY2CECRqC1RKxXRyK98cqY2NJBKrGMEcvw98qGuNCSB2NSKqUbm4LDshDQbGPrvPkD2tQSiZKpG",
  "key36": "3uaPhbgLxsw5reRkSGMaKhw6s2QJRJqDQVEWp9fs9coWrVPxHQdUXVCBRM5kWEuTNgxnaH8viYRqF5ATs8Lmvj1u",
  "key37": "3wVs1MgUTbicAAajs8DveVbJFK1w7X7PAiWHSDwZ1a2AnDW6cmBDpeX8x6R8dpPUQbhsoRLUwyaY2T3TnJCBYWwK",
  "key38": "5sfg1p1uRjTCPp5pFPXFb6adNJz1Bt1ceF9gFThvTXadCj4SDpBkY1jDF3nfR4PmcSgxRG93Pkey7ngAdoRhgLGA",
  "key39": "5LZhmHpThRA6Yv1b2aYxes9vs8j6UfW1BQ6fGC3Vuyn9FGWc8DVsT3t13UFZacEnLgZR4qvavikwkUFFYMRgWzQX"
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

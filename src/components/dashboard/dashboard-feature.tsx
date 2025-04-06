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
    "31kKaSVQQXBxc1xA77HdJBLPzvarDYEE2Dud7LJaQ6QhkGMHcHbXv14PZoeFfp5WrqWQ3gMAKn6aW8TRRBs9Gsp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQXZKTPFetVKVbJ63n5VZLrAAWSy58LeZuhg62MjSkGBqGaoATXjgYfud7Qa2Ze8tLeUxae1sUxnsZEDytN7ULo",
  "key1": "4FxChbrLphCyHHVsdpTHz7cyk5DdBDomWNstu1quVj7XAXaS6p66ycoc14H3ozgEdudi2xoPuN2Tgc9VfobmVqXq",
  "key2": "3upytU1xqjoUNRzuewpue5bzy8smDeVjgZcT75Qys7yhzmctVEAktMGbX6vYWeDiRQ7Nup1cUthNfGyEpNzWSiPj",
  "key3": "4fw8XYDDrYxq6xZahKxvd3UxC9LCjzbWadQqTmBq7CujdPGmXESDSBBXkbTWS4tBFXxfz31AjLoNoFKD6XJByz52",
  "key4": "2hJzNJyBC3GyJjrg78GAtipq5j4jE9XFpTV6RbJupL49Ya8zsh4vDmf6zcPZ4ZLG2PNo5Q2z8JTbFCwHooTFht4J",
  "key5": "5k9JpUuNwyTMA6Mj75XoYxpDzJazLMe3PJfeA33gBYChqfFvimJJuaLpVxK3adG1E9MWTBMD1r4DWwfNYh5MDgiT",
  "key6": "4sNCDUt8NLRXTy3pkB1ngBMVaCZSvkFuMaXPFJcCUJds6jpXWrEdz81yQuh6go1o3Te8ZK5JpTrDh3DtTQHdqwcy",
  "key7": "2dLm3xHND7aKdoYiJF3tUWG9Di6MUgcPYQ1xq5NRXYSPXVgWstgugLf9gS11MFBM1dkLrq2GGYvH7YZ1AbkJVaZm",
  "key8": "231qubSehLE8YufE6NVNhm9kwzvxDoD13pibFXHkQvWYL1rYqJHvFRN5v2QGTqwfbKBxSrSWCTjQvKJw2xKJ5MJp",
  "key9": "5FjLrtiWeVCmK7T6mTzzk9sSXrb3WrQTkXXz1UdVGefJ89sRhFmLhVrhPJAJ5pu7ZNUzzyCHQtxs2QgMr3Q2CbCv",
  "key10": "AHQuXCBPmwhNJrv2JTdMXT839geHmRNr96xMBZ4PMxKuVqeMpvChsnK1vVTcFmBkKMjw8VFDjv1yPhpJkCrzPmt",
  "key11": "4VvjentUKrGBQ9WEfNykUT6guR6VTCk97bDEGhwbsDqxL3R4hPEAoHAN3ZpucgT9DP6J6bmPcdzP3yJpsmmEnA5m",
  "key12": "5WKw6zokGPMmH26iymv18r3ctAFN9Ft99skjzRQZTQjapHNLrLdtPZsD52wjgHQbrLsqvXEF4zAJv7CaXBkFYRqw",
  "key13": "4DPbwcKyxTyw9htTm6tQ8KKLpMroyyWRTJpi54DZTdkcec2TSANmCJZAuJtHGUQfiotttH6qwACEJ16kWxMysiJP",
  "key14": "2GaZE8od8TAFYnPpHyobBLQ5i37dpsxKDp5tcpmu4zQWdL7CzXn2zCbocqTs3q2vvB5MNfG53VEeUH8ZECDANrsB",
  "key15": "2FyiuK13hrnWmd4bz3yPMYhtTheofuwNUbVWmHedgRap6KUv4HUpGVP9XpLFaLM2kjaHadt7CRb1efXvyJovS68v",
  "key16": "2MjdvQYHMcCC8Tvzin7sG782unVYSsdC22CopJbhkFzPE2b7Kcx8hM7phx8jrYmRnhDjfeJMm43HvSuPk515mnhu",
  "key17": "3XeBD6tSSrQRpeE82VhdKyrGSLGatVecxp1naS9bHSjin2tuJ6EkPzWpKu6jcsoEntDa8bXhXrK6q1AYqCPMUPLG",
  "key18": "2Q5sf6iFVzCMJQoUy9DWzKctPkga4nJoD5fweUAiExXTpZdeJbrZ4RC3WjzEbeJb62TPMycvRfWcUg4aQCY2KkM2",
  "key19": "4N9oCryNwGLpZtU8TiCWntFVRrzr3jDNBAkEVkNzy9JGVwesZuBFSUodtuZ17ni77F7KR8F5YMo22cMS86rkYoJa",
  "key20": "Toj9s4Ee9PxvVvv5Yo8Cjj1VwXqoJVgC4g1rVRDai7k2z6rA38JW3qLazbYQYA1Dk97zkijJEZJyKFH6aWZASEj",
  "key21": "2P9rk1xgCr4UUGQdM2JtN3Gnvir8dsA76TuKV2Z67QuX9kMPPaMutDnHSjbUQtZbd5hTCaPeFVzVW6p1suo9bnjZ",
  "key22": "2Q4nd2CC11PeVgUz5zqNJe18d4c2rC2Uhft4E1ns632a242aooYxwNSLB4YscYYR9UiDVXaEqiAi7pi4okX8wMTs",
  "key23": "41DfKz9QrR7pDLF2qdoUs8nn3FfazaEH87yvLouZ3wN9EQaPebzW8Pntaeh7yHr9g1S9u23vS4ZPHcWfWhCfU93h",
  "key24": "2o8Nt1o7x3RV3Hunn4V62TxH48HQ1k6YDAGMw4KbFoZh1xTmaFzXK8agXj54vKoibqHJ3dQEd87CEji5dXUfvaub",
  "key25": "2iLV26YcTUWfw747YoXeiKtCKyVSzdvAPXk5botZNs84ZVmzoc8AXU8LrresreSCvZKrEWCuVTcSZkJQFYaPMop6",
  "key26": "4TMcdL8BceFcs7JXWeEQ8RQo9btUqf9ZjXBiJqP2GBVcsRBNJhNwGKaBfvj5gsKjCBArV2vZ52M4vS9j7Y4Mv2nx",
  "key27": "2RdtZv85qR43MW5fAv1nFu8deVrPAGV6GGjntz12s5zbZBPKPqeZSKXT3bStuiAmJZWybs9Vo61FdaXTau3i3Da6",
  "key28": "2ahUoJFtrgv4b1dPmyY1Nemp6t3mCr7Xmrn4bGx8cN9vG5zN6mSKVbtLdCQgypgKQVGNbkKHmRHfMvLjvP5bRm7g",
  "key29": "5pQ71uMvq2FghrRB9zTZ2K3JxwhXhH3VWeUq2fp2pYEpVAtUgiicpkaXn3f4P7Ec3yEtTMw8a2iC2sQirATWeFSR",
  "key30": "wNwmmLqgfkppiBHZZQZKvRpvB4kjdZKSYFUbc11Dku4pbwcnHVMjjuzDNbWuAqZMyCkxgjsbhB1Mf9DdVLHefLm",
  "key31": "5Gn8S8VZ2xRdEUR5BVsxk8Yipqi9g1PUeb92SSK8q8dMbu6XntERw5g3H3KTdK6E1cHfWpQjmu39gHZ65KYokiTy",
  "key32": "LRsj8tyMFxzCS61DdhX4mPnCG6o1pfiknnbvoa4kxK4wC4xMZLCmAJYuuq3o3PyDxnzXUPEy3op9JTC21i81o53",
  "key33": "2GdaxdRU5afQRHcyotEoyuNTFyX5foUUmn9TovfjvZXrALdAVaSJgomYCJ71NTW97KY9TBv8oJPo5XZaxzcRTnDC",
  "key34": "64JLLk1J4PWh9sJHxQp9H7Yay6XanVTq9TS1cBc7kYYwuUsbxhqEacWG14f95QrXqJPvE7U4huJNbRf2SeMLPLKh",
  "key35": "tciU39ZNXWjwkVSeFcBew269HE9MTprnPjXHQddzVSiqtPiG25uY3xLtZFy137667xJMLTGo8Rf7AgtWnMuJmTS",
  "key36": "2EiHBjCpyk2PUMKBnKBv5TfkSJ9fgtK3daKgphtNAbLJfnwCXq4hJXX3foWd5Ka7V2d7n5TzvRaZntxKNccafvSW",
  "key37": "BiJwCWtVHUUgFonz62ZRCTk7WRmcebbs1NErBduUgRdvwUnYfVKE15bxNhYQbyQYpjHPFiW9u9EyNu1txkzyAma",
  "key38": "5gkXDHUY3p9mb5Kjns5yU3RYgfrebegEVzzJMPZqJX476gfUxermMXerEutXzk1dQYZP1Xr4wMi85gACJGJabkiV",
  "key39": "64wgzxHrWK5e2FmAvHNV4sv8z2V2YV1ijQG4etezJacBAUzdBbu5AFk2y9ckcjhWfXNbNFFGrVBLjDV7RwjnqoXW",
  "key40": "31KozD3hLz9Fo1BXcawDjEBFm5N9AdwPvidMwKoV4WiF5JZhPetwS6LVzvMd1FjAjhfGfYK1RUHUCnsUMRyypoZ8"
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

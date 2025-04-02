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
    "2ZJrFW4jfvVK6VLHxik6nvBvTtQ7UtkDL25oDUN8uBAtm1oSaJ1y65mkUnckQSfGSzMENxdhy6qLuAuzSAiBWKm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7rd3PRvwkSDYPp8QxisYBeyLwNRhtsaZrbSTb2pk1ie1rrY7mbnMkQJtyt5NjekbSvaMpLMC74PbuLamTtoWfY",
  "key1": "2cGxoH83EnBePYreVTWJu93BR7u7XoLh7VH5E8qsC3KUFpMLS5qRDjPNwHMBftbfPmacBWm9ZLkafPNsEzUZGXiA",
  "key2": "2qz5HUt3WGwUx78pm8TURo48XmPXL7D41kgza5hAupju3WmhmRYVhTBQfpvRmbPNVfarNuC9DAx6ATm8QrbmzWwg",
  "key3": "1TfsTErvzeyYsedUF68yBwc6W4Z5EUN7hVDdJPiLmdprkwPc2mXoM2FHYM6r1Wvjjut54fZARyMUxoyhysPHT9d",
  "key4": "gQtbDD4fKsf9xa79tsQMFbrCMy9MBxpcf217KUmDpNeYMWzXssr6hypXo3MGtszjvwmbxUjFRMwoXoMv7YBFnMm",
  "key5": "3b1rcBnYEuWmpE4ibnFUMA7dezXvBHabrrzq2xbv35TceE1TngbvteRz1M1kvx2u2pVnHyAUzdeX3H3hFodSCKLL",
  "key6": "4nJoaA5mv5wrrcnDQ2PzrcDvFpAS2GahnWdFZRq1vqSC9XiyRY8sfAEfdKhG2qUsz4vr5W1vN9F8cvrU2jmzXbsB",
  "key7": "5kTCD8QEp42bTeUXEZEJ9vNtbvPC2hvoCyJ4jE1yN99vQd6dfSk4W7VrCHjh1xhqvydHcwnrRK8QFC3WFZfUX3Jq",
  "key8": "4YfN6vHf7CDgHwrsjtJFFzeN3av9FqMABrRGv4jfoTjvtfsn1UFJQKnXCgWwiSRFRkAd9u6mKUWkHBrrxzDVnNQQ",
  "key9": "4zCZ6kLecMkFxU2KCNX3pPYMoLrpL7zyHMg4KjeGHMK2yJwL95F15ywCbAUJAhJfyALmM6B6G5xWWnDsqu1bN9MX",
  "key10": "3pJKu1wPwVYhpVd8vAM7N9vHsPwpDT1isX7MJMmSmBuJgHY1DDc8wC81qHojU1iqAc6XnedWuLqWkZV83PH8hoz7",
  "key11": "37rjd7ePa6TE8VE6hmHsUeswxFySb6p6frCpMPRNd6qxGNsK4j9kmJxRru1H8g4X6B5PVj1K1DCzDfMQknoWJ8Y7",
  "key12": "5DtTVbNgZMiCG2ywymBrpdZFSpxe8E7bewvhUxZtdamv1wZw52S39MuGRbZ13bdk3hrRU2ZHAu1nELZegNx2arh7",
  "key13": "3LekiBZaaJXU8qpcmcNkg4RernR8c6jmzZCuSSVqzZzYDSyY4Fpim7VsPMf13uqbxrZcoewfRSvqkyMeRdj4Das2",
  "key14": "4f3UEKWvMgAnRw6cN1ASFjordfLMYeGbYzfh5EiaURqFZB4nVBRv2XkwgZkp3oJUW515qUUEj6g5NoQHCdwUbWFs",
  "key15": "4mC5AsQ4hqhf5Gpd9TCdWBbXHCq13H4VQKuff4GmrqzJuH1F8SYaA9vFK26LbQaEREhJy2t8orjPTSxcuENAtraM",
  "key16": "42gSriMfu1mvRB3g3J5i75xyHWnHPcwuo36WhYchoHPDD5kR4xUdZZw75YaoYZs77pCAS9yYVezAN7oQLrLvxyjJ",
  "key17": "62C8CkCc5NSqRffmh38UvQy7hEbsUvv93LNz3P1upuMiLTw9pmStMbvypqympVmLdFJhgib9amGTFjyr3Gxn5LZQ",
  "key18": "3hRcVPfSKTFrf8SrjmZv53WeLUQQ84A4HYmHhjX1ibK2S2LNUMmm5ni4me5WgmU3AuRG2sCHtYtdriG5gcKsC9mN",
  "key19": "4237GrBuso7YQqKHx5UEev7JEzfXgJEg8ew9QbzgcziWXo8G3FaWDTG9AVWCpVxM7jLYvAYkny4b8kusrG2wk7w4",
  "key20": "4fdUHW9F5LobX9MejXoaF68F7Y8Csbdg6JX1AAQLenEaocw1G4NFd4sKuqV3m5ffj7eUTUUwLrgD5Ah7Q8ifJyV4",
  "key21": "5oW8WWFn1bidkjEBvUNMWTmm8vGMgmq9DkNz9aeeUhzCiXyLgvHVeLEL8E1Jabx7nQuqu3xcc9B26n2V6Y9BVMif",
  "key22": "5bQ4eq86qe4hr25jkmY2GLaShBQoms8qHndX3qHEwVbccSazZiETv2T8y43QvmU6w3G1Ziz4pfC4gVFeGsrMgqaj",
  "key23": "33FXakf21ntCmaGjVVuCYp29DRoDEctjYPyWgfHVbKQbtXkgfRwRtc8gibVkeFWiZrJHHoQqevAkJBHmn9DGor8S",
  "key24": "3eBwzCaBP6eRhqST4DcsZjR2W22P7ZNsFRmvQDKwRQWWbZvksP5bvzYnvSrG3EWhnEec84wSAfdzjPrZphTGkGtJ",
  "key25": "5EH62LcgAPRkkXXNNTmrnGEMmLvCjg5Cr8PmTRBhQS1foUXjvMPkUkQC7SYXxAYQogGURcqoTeGVUUV55jBpHy6",
  "key26": "4TWT2XurNsNQUEkWXoTY2v9wQKnoBHdT8DtEXUSzuUyK8Ev4w5s761T3r2wivyEAuexrfYrnFasC7q8ZqLWDU8M1",
  "key27": "4PF95jZBEU5t2dNeF7o22YQqWDTuCJVBkAP6myaSLd39Vmy92ZzF6QyZRrChnNucyeJsSTHtnfj7RiAst928GQLU",
  "key28": "3kWHrrDLnFkjd1SwnrDPQdiVKcMCP4fBgQ2JnsKPNFGrUoTPZNupcrgAYmBJEqqmPreMjbPTbhqguYGi7f9Rsh5Z",
  "key29": "3yzBXyPiHMa7i8izSamNR2iaEai4KAFvCAjKf8GFmcn2JptFzstGpVevqr3EnC4tqMVJwjJfQhFihzXmr1WXEFve",
  "key30": "3WWxNFZdNfknsWdMCZYERey2NWuy8qixo1YWGRKZdogsGvetxmggfWUbM3qyYk4zpf9vsCBYKWZcuwWpjQgiX75A",
  "key31": "5BptrMe2TZLX8LYntkuJpUi32FiAhS6Ds52p8R8ESDMQtJHQNU1utBvvxEvsSKSGfnQgYJURChkuT8j6qJSrmhv7",
  "key32": "3mj7bmi8tYeALwvnfkCBxDCMxAaecntKSoMz8fAj2Khd8m96pZtYj5aEjCnqWVnYCdDLXXkmiJjjrArsseFQ76eT",
  "key33": "3Bp7vu8xE5Ris85c2J6U7bs5LfEr8rjYBWF4oiU3shypSDNYeXrWAKvJzM8AAVZe7Zy22x66MH86GAFubweD314V",
  "key34": "45G6zVVz6SH9cjb2Bg26W3PTz32B26dc7RucbBwzhEKASCj9SB48vA9W3hs2s3eNcyH2aSUpbQcqqHrMD7sDXSjf",
  "key35": "3h4jceM9b6yrCv7qCgZn9uD5x2na3mnfKSbK6y6BFzinKQVJ3QmqcYCWs1aA9MwEwF85WQZFcunH5EDrAYr5w7tH"
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

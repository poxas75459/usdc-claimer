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
    "Pr7csvwLEyhTry83o75VdmUXk8LHdxWpVFA9bvepdSUpBGwN1K9FPHqTspMf2xMEViVUhSMm6zbq5FWHtXvpMcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8vhZ5voc2fAFnpBSFEStAFAnjZDCfqhxHga49YNxLw1T6yhuc9u7cJxLKbGniBJSXvLf6Xy9H4Zd4PH8BGnKTs",
  "key1": "4CiLAZ1SmcXjdBzc6HWw6qfdwC4g83eDpP9jD1X4ZKEJt7rVmXNXscKV6MGXsjeHzms98U3eCcWsuiJ7Xd1wQ6Vc",
  "key2": "2jv21hqiT3ZNoTSD2iddvhFEMSksL8qq9RwbD15NvtvG2UtEXMpyjeMEqZoVpVSBKWTooWznMaackyTF45LsSULG",
  "key3": "5dLU78grBTyLKBFwbXDyKwZNCcQyj5eXeZTPQeeXPNgRuZiLgYMfuE3e2XXhqy8c8Uu8zoKLqmTWijFvb2oLYmdm",
  "key4": "3s2vw5DY7w3FmJRStPZwanc1f3rkscVnDMJGhvkWBipnDTqonexREkr2dtjFdR7gPGvSQk463LjVsrBgTbvYTzo2",
  "key5": "3NUdAoWGYsXXAyLei75KjjjQf5FVQJCfHyBm429bv5vYD7SY5yzGRJS2UWSjC5qRQk5oJH5fGmTMaedjs86maM1m",
  "key6": "3Uw6RmUM9iDvfXE19e5545vGePoahTC4drWSS44dz6sTHi683TZ9xscen1DkaHBdbE9xR3qeZztJDgov2H9p8zHt",
  "key7": "4euwpvvKKadY9qJ4mBNQhXgCVa3D8bmrhnpNFWiGxxBV24pXtqs5m6zvetJRPCDEAALSDLaQfTfynddttYma7mrd",
  "key8": "3v7HtagPFkdmDNYpxxoM8dcrfmu4UDbXkLvqh5m6QkvCVHdZ8AMgnospXjjWhFsntLeyxmwUdnW3dAZhESvm5SGG",
  "key9": "3RtswVRaHWvfAFFHBd3YsKzXi55zyWeukE1ThBQ1jr3ASBu6F9bYQ39xJ85vz31czq3yG3T8iYtVDoLJR7z7ftzT",
  "key10": "J8zG3fcowsA3eFJQkgFpw1Y96kNWAThdGVB5uzvM9wxt9AbCtKZ6WWt4gQNPbyemooA1fVb8aQUbdFoXS5pVyfC",
  "key11": "5JaSzuYFQ7MbQ6S4E5o2w96hWkeSwsQNMctyFPSpM6KCRoXKuwP3u8B1Xyiej7gS6X92VEKJBd1WUZPsEXzpPqba",
  "key12": "2PZvEiXBKVjVDBSFDoGcfShWWbGZamgj3WjJHYrrCawchis2SEHkjE7EfGYoYnCz22QRLzHXuEdNEL2QeDg6CUuh",
  "key13": "YreJwx2HC6XH4L72VeFzkH25VsmJh322x3Mmfhgyx2K3XnPHhthN25Wc8VRLVkoJSYjwpuFnm6DEkewdUF8m2nK",
  "key14": "2ZixD4wdaVfMVTzgR8xJncUFcWPYzFWLEwdrfkKSnwxkLkRC2vbts9X6MYrYDZnSNpyr8MHdUfKiaAi1KJkvwSeS",
  "key15": "4JxiZHNgqm7wiBXbiWLcaSCrenM9JARpy33Pi6UpbM9v11wLM3VTfXYouk5C1fS6x8YwaU5PPaJtDYFZ9sBWHhSA",
  "key16": "2gvfCobiZFBKSEpX2r6mfqfgsthGLSKERnDavB2DmJXE6jvegqXrjggDT2VxUfEZt5AwCo5eVCqfcGw81BKPeXu2",
  "key17": "R5c8GUvwz6x3QJz38SWo5xz1vcNDLRPSdhxbeHrCn2ggPgLTR6G5w4vvmTNPtEmuqzQRv9BgUKy8YrrnNqSh2Qd",
  "key18": "553is5KtWTMbbebQuXPMiPbcUMrUj8gy2qn1dP5BHZFXArA8XUtcSySVQn8tm6v2zHj3Bh7kvfivLPfUDakv1bTy",
  "key19": "37mnZH4rKGan59qrjJ1NLr5K66oDtf9ttCBEWGPqNP1wr6iRRXmnLvRrgqBFpaYrXqjXe6wCUHRRUG2pGjaWjYhH",
  "key20": "7ABf5QMoMY91EyZAzonQ9xUFgUpkSA28pFM73BqLC7WKujUjBXE2z9dwnnVVtM4PQK4h2neprmCP6qERNinFHff",
  "key21": "Gm4qmNpXMEhnZXvhQihTdFxKfGHFgEJLQVDWsZp6RTShzNXncwHdyCCeNztDFQKB3TVBjkrrRZ5aEzYEaXrPser",
  "key22": "3bK2G52F6uhFoLqmtchfZsViQ3VvE5WPznBrtvaTeVXqLvpg8E2L3EobAGFXZZY1EbScpG3HMovYfq9TvzP9WfdM",
  "key23": "3THjssiT5WEAz8DEemL5gcv28hpJ68T1dKhZEqMKHA5r9eGwjsiCveaDKhkT8uSMq2ZYfoE3PDh4BLN3trFxXH9d",
  "key24": "neyNF6T4F6gvaw6wMbrH18ESA54RqpVC8fhUkMU9uaCWtfpL6hASx3dZEhjATCFGtN1ZaWZFrwvTHzefZZZR1Xo",
  "key25": "4PbMUJqrSmm8CBzu9KP46YqsCmEe284beKEUfqsUwcRfLgBYr3LLi55SGM7UbLMQmwQWBnTHdkCbbi6asnxeFfqP",
  "key26": "3PP9FwLMDAnMJQm1bM9T2XqgkXEpGyHmdueXiAxbhXZG2rEtL9dM5Kg1GZ43wiwwJd2Gmirg94r8KDzvNQ2uLYBA",
  "key27": "2bLxyrX9KrErqp4Pu8ZRNRiBvZNVDq2VgLondXR9v69tAzfqPebk9FtJWD2eD8WMhqeHkJH4U8ej2wZE3hJ4ipEQ",
  "key28": "5cfkHEjKrFWaCXNVi5ByV7i8U6X6QoqHCigzvS1t7w6SYyZfFxh2FT8WCJ9JhAaohrHUjdzqiEVAAQ1tgBRxtU7J",
  "key29": "35tvk3EBD5AUWyfydwVGWxTiiz8XPd6p1XDGn9XrJC9eoeK99seXF2RfWSVuvjhE6LXa58HH69ifcqb4Cdy75wgv",
  "key30": "4wJZPv8YGdaBxETE5mXkCTgxbXspyGZC3siSyeLihvhhZcz5u3HNE2cPcWQ31F4pxQaagc1ezhUWj2AWt1GydJhC",
  "key31": "3Tx7TA6cHF13EiWSx6D2CitgnWjXHhUBQt4JL3WRsJXswrv9pn1eYuNX1K17uNdzj7iKi95EJYBPN7uxB1ssBsNm",
  "key32": "536CBZBQDVD9y4aqVLQWaQpdbzmMDUR8Y9P6r5VqF9bGsDhpYLuFSmCufddaJVksXDpYQ3RCKGqWaiDvx8UAAr6M",
  "key33": "SJM1wDkhDupW3EVRLTrxYf7kVxtk58eVgbFdthiSYqjdsn2LpmRASwMVtj4zQXH9rDV5NFb1ovqfrgktLMiDmf6",
  "key34": "4QGZYxUXAipEVDaoctcMRXUUK46eqvmTpprpB5srrjzZo8JFSL2TiprnWMsFcQhJWt3rXEGFzS5eYACzTnX2yWY8",
  "key35": "nNy3oB5xezBX9Vi9vDVJf3T4bDr7bRryv2pMRLfrY2KekSmg3fQF9XjTEF3jDguXvEs4xc5aN36ygvNJNFZ7B2F"
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

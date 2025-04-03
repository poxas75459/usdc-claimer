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
    "3DvWmYbqc2vZi84qemyGtdLt6yXHooB3QTiCH7hiSYwQq6ocfDsPv2vCFnSo3CBefsRqw3SRAKb1PYmX1BRDb1fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7to13qh8EgnnvrA4rQXukUuC8opUZLjn7XivuKKFnn9hEwoxUojDp2y1B3Te4aq5pbHdS5hGuWMgiXDtoTYaxg",
  "key1": "5JVr7jYHthziZt9MRLCHkdGpVZwpWA62LQu3MJKnkF33FKs5e3UsvRHSjNaBb3hdVTJaMyARFthmMh4Pzp3wLcVY",
  "key2": "DuxaLVMmm6ijyk3cTFsurkaWvKVNNgVUHEs46DjvUu9N7b1CgKaDxfFNwfsoXNuw2icaNTqMEoiJ7jx1wppGfPt",
  "key3": "wZn5A1W7Hfrfq4osQe4JzPDs4sm36kDeFMD462VqCYu3WPDVnPqAPRhK19ESWpb6qnZQfoNe7XWfQHdXX2VpcHC",
  "key4": "4xnjd1XFgiwdPNDRmZ9NEYM9TrCc3jSr6RuovrzGPbjfa5ug7xrU5u3iXafXjbWQKVAcnzEnx4hdS6oC4qxFSXhv",
  "key5": "2W9FT7owonpFjzpeoVWzzD1cMuxsUW3NdUX8scbBqvbBqnmuMJq8EjuUcpMZ1JEiWS78GUvjqWzEtz3tv9uuwyi2",
  "key6": "2qEo6F2cW7gEmctA2726cQaBsrRdgnH7Xd7YZ1NmDcRZQRYHnvhzj2QRSc2kXoYzbiJZtuVB3ofcHiRbrs1RbD8A",
  "key7": "4geg4EZvzU388eVefVBTojGCgjnRRxSwA2s6c4XccJdyr8Ynm5TsnJu3eTndEQxa3Wev5TtLUumdFbvfiCmJykUQ",
  "key8": "57hFz34sBPH3BmTQokqJF593dnJEUNtRQ6eugU1kpmDpjvewxpVKkXUED6SX8y7gASYcgE5Babm3yShW7esV9dUt",
  "key9": "5cVU2Zw4aJ5rcCpigDXAy8jhVn7sT7sBRQvDi6j85Kxoze4nsqpsePnad96FLAhDHd385PQvhx64yhRQWd7XzRJZ",
  "key10": "4qkJnvZEfPCMSu1vKykLcbW5RuuehGJU1gJvT6McCcUFKPA1DAjXQCBSDj2tb4GbHwAHwy7k6MzjXM6AktuMGHL9",
  "key11": "3UnbSi6dEMcyd3MEnKe6k5F2zu4Gso7f6S7m72r7QyzLCQJktgszWJgjgjYbgVU6MHXKXGQHQw5PQ2dmY6868YkQ",
  "key12": "3WDs6FBRnQL364wVEKe93d4gSoVL6bZAjTyVTw2EftBjxu2oKYn2nUfxufgeLG4KsFecQMJCgkjqdNBGhRbJza82",
  "key13": "2iAne58dpX2EMSwnkRyRpujS6X57wRctNaDkpbbWjTVeZeeD3wPqJZiF8bJZ55tFubAsjKQg2G5ZR3gPV94hrbhN",
  "key14": "2DuabDrwg2aMCqxS38vAP6UocVEcRtCG2Y2KwJoVZ6r41Nb8RZ2fyarjYU9rADrC4iPDYY2oi9FftrYmiUhVYPbS",
  "key15": "5L6najvumwp2VPQztJUYN28K1jJPegtJEq5gjMj1iP2ZLf4rCJ8dQo5rS5rLB3vNd311ZkdDGSzsVZopazF7t615",
  "key16": "4j5nGazSwf9KUUci9w2PMZxqUjHVMzSsTFbTLKekMCwJH4UBXdx5gU13LBxKCS8rDpRUPR84XkAGi4R9m2NmLJJs",
  "key17": "5B958W73tDdfEYvZTGg1ChKaMYNux9uGduJdycjAJ8Srm4TSURLexwzd4RgR2TnwNn3egF324MgxMVmoihS2d3xJ",
  "key18": "4J1viWdisMyFT7RTqAxV7amq6jatwuYFxPWWPGYJbmzyd1Kkyvs9eWvR9DNNyd6s1aKe2PYmsEm81gWwdUB5F2Sr",
  "key19": "2wvWzxLYjueWy7Fbm4cDPHCwZ7ZvjmxRahJ3SS2ZyussbkHxaWwsphKkAQ3VRecssAQ9bNGdbXiuCrrGwPpy7h3Y",
  "key20": "3iuCaAAsDpYZJyVsnqKXLCFq9BVyArPjwAocvtsqGo7DyCZCeUtU5Vu9EnXf3jWtZzRj7yN9HDdYwwuKuCFLEzqo",
  "key21": "2FrJJm2GXWjJZ2ARxveCqytRpWAPE84sZGLUi9AYsQZpPaYseVhf59vkKyaeioZAVoiVqsSHcz3a5T8m7URhU5r5",
  "key22": "5yRbsLQLbJPti9Hgs96bTMys1jhojGfbzLuNtJCuPkPme7MJ1BA7qzQoDcxVJzeDLuKxDJAKX42xhGUferAA7Z8Y",
  "key23": "3PWtNcymFjo2LxWwVNNbAFpyN78G8qjbYDyAicAw818f9HLY9NZV7HXcedPMEAHW6UxnVcXK39fmYfKxNcvsn39z",
  "key24": "25tSLF622cAshmYKkWTExq4xqdnUQbVtrbjRMe7szRY7co5cWydWm9DtoE1trctZh8SP9GvQtnmCCSJWCzVoJU4e",
  "key25": "3th8SXSgXXMwP8oBwozdmFSnpKX5aJe7PhdXAWZYXCNyhfiMa8VFGoURe3Uon2BhWJSa4EWhqTqJvDRnBToJbsJA",
  "key26": "5yufzMnUt8yrthvNrZj3GDorWzkjWVcRK9sYs9c2t87ffRSurWpuZpuvY3VNEXEAEE3e4MJJUD64xJjo5fFYfgj2",
  "key27": "5QhWR3aczdZEgw3MPqZiZNzEqXqvaBvdgWL4XwpDNhTSPCHZgBCeDXhkAcm1cnABoxBAKx1Kqw9wG36xtR5RDkPX",
  "key28": "3mGGu5WzPNBnVeDCTZisBsWS4QWF7FMLbG1QbLF7DiWSGJNSaQTbS1P4Jx4KoLqS5xUCGx14bS7VXXW4WSYcWfEm",
  "key29": "5ivojSqp8LXL5efSi35Fo1tYAhp7bHmoPArDCtbkBk1DAh4Jp6pyQTbs6yVzfEEHqxK1mihNkqDiyUVpQWLmBdRT",
  "key30": "3Tc7YSg1iCxV5pazXhbYc1j7p1R69aRjFfkyULXG7R4uhu7ebQmScnrd2oHSKKkjPMevjcmXiZaZHWbWCwzfbzsc",
  "key31": "3fzPhRCCtwVd8eEzQaqkpp86a6H7NXbzrz3HYuMoFfiq42CybBzkPzc6D3TSaZbiHyxVyKLQcGrdPZisfJxq5RW4",
  "key32": "5zHrJ6LgqgCwm6sxUYQecJ4sB6X2djnM4Lh2ByufqVjCNvqdum5vWuuyTdM5aQx1EbznQ9z98KBVjqqP7dNhTE89",
  "key33": "NtQLvABRZG9AxardiJPQyuDXbSmDM9LXKibZJTozFHjNPYBzFkEjHJBhhrGFUS8X3LPD1YRXJ8eUq4pjeRE6hKG",
  "key34": "3vAXPJYCy2LRnCRTaf1qjEEYNBdkWHZsHqsoNMSFRbF4j7o4rPLD33UcUffxFYQ5wYjrrwpFJNstcoTL2umpy1ad"
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

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
    "5Pqv6QfhwJGbPbH7wusieoxhvRphSeMvUkRsQQnBaQzii4cEnVtDdXsSstx1y5koHxNzRD8gCAJt13wDhaCoCNDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6onDNiZxSZZ7K7auKSB41qbu88bQrknCFRfPQTNotKQxLQjZGaxU2cHCLXLPz8awRdK1xH8NAmu5VYUcW28iFw",
  "key1": "7jPSaiHpo1yvoSBwp2H9vGSsonpiq1JG3WVDVBBhj1LzVXqGv4ucpeEaQacEskS59ZTBtg3P5ReNRFxVg3aL6W7",
  "key2": "2VWngtcoEg59iWJ3ZeCv1f47ZaKGap4dLbtVzx7eJp1tB7Jtb3LAxeTeDciUcxEhADgmQPHmuPXgAEyidESvKh1Y",
  "key3": "5iPVLEvS6cn4WAqwCZGnyYLKyXoF6R7eRZ4zu4KWFmKL6NxTyZDbTUQ81sHmtsDQSzB165MUnPbfEhgUvbiuJ7DJ",
  "key4": "5sTEz4NEz1hKLPGRyK3EmwcopWvjYC1sN3quXRkojmn1ihoHTSxg6jnsDGkEDhq8ZozmmXTCGsZSe5hy8pZogupT",
  "key5": "2fUSDkC1piBge92hxpbhQFFSwG2UNwinEgXFeJct42EaWzr67uMjyBmqob3iBhwcWi6jumha1GMsBwQZwnytv7KT",
  "key6": "2MiATVb9ZvvZXgTaGL71QrcmtCnNbpmZmhJqtkUoKMXTVzbCjMubjsLwpwAPNJ6oh3W2j98LNcXkuWdohSBict4q",
  "key7": "4cAJa7rnVNvofTzvD5xxn1KiNExadhwMYBGBYapVT3LyJhb7bqERt1TqAasPeM3E7MC3Yq1QAtMRWnFTzLi2wh5u",
  "key8": "37cs44gctXnkd6ysVpeGk6wkYxT3e4WEe6aQhYNrLFZZk9DLCtztMHy795QXix5oZKmkERNKFswLXXpKvruRoCR6",
  "key9": "3C2vDqkBn419yC3STqA3tj2F9YAWEqDaRAK2JgGis7ha4gGtzHxTx4mHWCxqad3bz2cycJaN5DhRfZicEJSGiihi",
  "key10": "4qhLrnZDX1RmYp8F4P1wmTkLxW173y72jGfuESY1gfqoyhovxYmeERwhi85bjgt5Q29iY1dStNejttSTa3nX7Ucp",
  "key11": "wpWEgCTNNYNEanDUEku62F4Vaf52THoTSrmDnnCCuG29awpfTwrTRs9T9rjaRufzrhiwihiuytXNyrJB4KrxZBM",
  "key12": "2LFms7tm4fcAJghTchbNXBbchyX36nx4FUDsdt3fQVNQGYTEBQ8fCtHn7PU3yPej62wCFT7WN4VFqmqYPDUZrzk9",
  "key13": "2R14pKq6CDQMeYz9wpn6Eqp2XmSwSA39eHhX23V55xW4ZbKWNC39Lof3an7HF4342xohfJcScpWkhjPS2oNXxbTo",
  "key14": "X7o6ZRvaRauiJ2UyUu5gondAZaPkaem4ZV87TKz7WqUf21nuXPDx2hkeH9xL5T8oAR1jzN8fBc6bCaK3bR5MmJZ",
  "key15": "3G4Vpij2R56fmUH6jpxp1SCneiAj5wKyr2gD7KDPYc9bHJNcPmFyYdJnDBEtehPdyUVPhC471MjBL1Dq69hXPNbx",
  "key16": "6726CsKGprYy9GuTHbA9iQZ3DwwrmVxnQjemZpPdxChSopt2gXAwW5vCgmzrzLiVgzyJHGsnPB93vLZTVojc2bo8",
  "key17": "HrPHJr3Qj8P6hhPKD29sfytJoRdAw2yRNLEG9DN37e6aQ6QA8rxa9ohuJDdxzy1A5PdZudK32nuJzkiS4vmkzXq",
  "key18": "3Eb6kDbNHpY6aEgxrgpLenFuJumF2Qj2UvF5bvBNsNHuryAeJPSThD3HdPgH2WoP69xwdgJFDagnYPUDLcY84f8m",
  "key19": "5Dwrq7ft8erx1qKo2ojuiQP5muSx9voibXUNGUoHqBtNXxAxW1gkG2G69R5HgMcMFAgnqGu4JEvonVCZcC5j9CkT",
  "key20": "5LAfiPKkTVgufyzgsYmi7qbSvJ8q6Kv9yeegVxmHVxZ49Sho8HgxTMRGkCxc8v5zKfppn9ph8pPhBHVmeJDVoo8a",
  "key21": "3531Y2u7ajM2VeYfpXcGsZoyqj6A1dhYTgJzwKMaMUHJfHbAd4cCicRaNuXsXjg2St85qC2amrCqSVUPS6Aksg52",
  "key22": "3jgquacErjUktBytmtfPawUHLtAAwDCjhi8sydukzHnWvTv8BpL3p1oTfgfeAEC4QxdWEKAenNN6zrXMgPZYsxbb",
  "key23": "5qzimMyHubPUvsG9uyPednGeWXjhBxs8ZkdD3o9MMJpXRKiNv7VnXba4Dx9CoecUZ1AqBMYTzMSf75G6mkWV5vEA",
  "key24": "3eHxUuW9ojh8PvnzF525RntGtDDaPXYd5TKShh5g82cwQRy57DTJY73QRQVZyiGMSD58cqEkBp2QFj4TUZW2P7yu",
  "key25": "5WkpmbSYAn6bNM1k5HmKeectTReezev1cgrr6xWDLKCmkbeuXw9m8nuTWFcfP8Rwuyc9JBar6h5eUceE93WTTk45",
  "key26": "ASD9dxfGhFU1AkFwQNk48yTgKZwKjjGE6AoEZfPYC44Ms8NAmedBMnvmct8kb5MupMksJxhLpKiEeuZM5eew8Ba",
  "key27": "c4c9AE79osaTpPB51NQRhDcWpUfmFM5ammwpRDmzTi7iyicofHEgQe6sqxvmJVRHPpAzJmJHEmuE6XwwdSL9isE",
  "key28": "2FogyfqEcEXkrrPQuEG7QhuyZDvf8xjkhprHUoHrFosqyWHWgNtv5UepU5L4twv3R9K8eW6VsW9TZZDq24P9tvGU",
  "key29": "4dZqq2KjZFxyL88b7WDKYy9jJCXyYVcy1PvhouBNSCWF42mB6muLxAn2bMbBDYyo1p5xaREH5Mad8WP1qtSk8nzY",
  "key30": "G7PCwA5YuVSTyEUFWkcnFUwUJGhkLHGQtYm4S6Qf6xPcpQG9kgbRj9m1wJsfYspUWGeDKDrJmpNXv89yQEAmQ6h",
  "key31": "oybChLc7tN8ARuEcxoJ9pstHLFkYUaKpaiHDwT1hvGgK89KmsfQMMxMDY5ZJmRDfLPWkvdjAuXRPED3NxNX99f3",
  "key32": "2f8LvviXb7Cvs8TqW7qxhsUJcq1J3oBpzaSA4DE2Nz9Jqv82U2Y8c59xhvpTE1ydW5yN6bZuZLi5DxUwwgF4NpU6",
  "key33": "3a2ugmYhuM8LV7PvYviHFqdHDBBEBMNnj2y9yP8YXQHJbiDw3kGrfREMh5sP15cnYhn9v5GaZp3k82X5YK1ZpCB1",
  "key34": "2UvK8bz3ZTAQ7YZb1YqJSg74hmzZWeGGMcBiiu5JvReaCsF4AJ5XbsQkLVvYxfwYrdeh46oNxgcxfoKuM3nbQqqf",
  "key35": "4DcHQpmdUY3aKkkJesmm9qYTTgp9VbJQ6deLGtmzm7xXbZcq7rJq3yZfPRQ9rsiG2m743p9RN7Sr7VZwS4GZHt6L",
  "key36": "56uwqRJjqz3yXrGh7yqqaBDoFLcvybukKknx8AiVCLA6iVnPJi6WPh7K1F2ZKQP1MMHYfDHEkKyZREy8mMPtCaac",
  "key37": "3XpPM3K8zpJPMohX68NNyJSGpqLa311KwYBabGhbqnmS5MDcEfcdveB7PigJRVTAmcCwkrtFzsuezodsvsXX8Vje",
  "key38": "4cZ7FNg7FvJF2WrfFYkgpit9sAzxTkUdhavqJn1QPju24i8UENsiKUcKRrbBPrp2UrWbYWqQbFJmkGUwH3wyWk5U",
  "key39": "2iAagjUCr5iT5tUUag37gvVeS74zN8bjZvFvErKMZGDnembi9hFUw8hsYbsdnsA3d3VtjRanVPkmfxupAkE8NKBL",
  "key40": "szsyYssAzNdbfHkUWVRbZtcLTnYsjjqqiMuBZghAfTKKzKV9Dq94gJTYW4PYJBFERBVpW3Wc3jeBV6kjsgzrASL",
  "key41": "56ZLUGnDU4rVmd6RczxLzkVcaTZgkvhRusTaNpMS4e68w2wekbnd5FtTjB1pPooRChoTiQFNi1jGKEePb4Co7RFW",
  "key42": "5Fm3Nu9MDuBjRTMWd1fKKrLL2MPHt7fp4nmr2FC3rg2KnrrKc7XwE1WiCxL2tTuXWWoekxwCcCqLWHxdteqY61t",
  "key43": "35jVhEud6F5EcDGRt41osJX9K6iTmKv26aMocyCNdfM45JHamaQRaTccxno5bYL1CviKE6H37bxr9U93Wvafng7S",
  "key44": "636C1NNSUTgmcxFKkLHP8p3dbEARBPr7GTHrKHcNsFVwQU1HJgtzb16rWZfHSk4x76ogEmfarqU4JouXTTvkPnVi",
  "key45": "3nhC5Wi6UCBeorENbc9PQymPFREtuXTkUcs6q9up2HUJJbvxmKLN4fQBnx8G56JVirh6dZoJrUrrEWJ4srxiC9H1",
  "key46": "YR4hoFMSwuEjLZqAMoWgeCWRuwgjPymJp8y5XMFHUJfZbViyGssAxhkcw2evgzKZFBPDHzEKpnq5msBeER8SejQ",
  "key47": "3jiFiz11HNJFPdWmPqaWcxYjooQaVFBDepuNTpQLH1UfFLp8em1wg8pRz3jWFRWMQqekoRMTpGpnwpntScju2C3V",
  "key48": "9MfyHfHPjnCFmrB8CKe5iQAsSYmmCm3PChqs8enuZxVaSvW96uKdCCmD5gWRGxbVFPAExs6kU9ihHxUEnn4VFKo",
  "key49": "2pTFG5cDo1dQ5MwdsHmJvxHeFjJA29ak3fBVETppHvyq6AbTYBVwpRz8C72YfQQ1hQgKwBkjSHWdRHALRFKZtmRD"
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

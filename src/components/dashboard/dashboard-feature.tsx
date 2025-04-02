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
    "qP1iiGvR6MortY7Cg2KDazjfKM186vjk9RovkAp7LjGNyZuEVVq2azYDZ7wHY5UbXfb72RnrDdC3GDWiJzDT3ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Skxx5k2dXZ4KekVPhbeKrN5ZPsfNofCzuve5nfaZ2H8ZKVf2vXa8buyadnSruVqRMYoWNAjxawJNzjuwJs31KQb",
  "key1": "4J8WJHy9x2g5tY1Jb2GMNruv5NUpRfqabV4VZMkdKfzJ3bSSKznLmChVxMUCQG7R1s4ZGWZgL3WuVB32hhxeqwvy",
  "key2": "3dW9aYTcLpqsNzLfZTrTEMrWLWY2NgNchPrrwagzymUQGjD3WKNydFuAspm33xAKFinaL5X99jGoRbUbiS7YM16P",
  "key3": "BdrQCbRdp8JDJvjLNpgDa6BHKukEJSGchWHZNpB8czntmwK54Gqhuk3nDJVf3JJ2EzreuUcJcerna569nsSEJXV",
  "key4": "5esVAyRoLvD6ytT6sQF8ACtdM5WKbijGpKWzUdNKXyncaeF9jSLekZij7twuRFwPPsPzhTnmZkyMF4Tis12nVjQi",
  "key5": "rbyEmGvWKk8cxTvcjvKqcgtacxQviqUxeG7fKHcgnnExLEmfghpCq523gmJf3E9QZA8WCMqtdUnnFMdRB2zR5E6",
  "key6": "2rEYyJHkLM3SQ2VupjAzLvMsub3P7PunnLG1cBirEJB846YSE2nxXSxkaBWJ5RK6NU3aj5QiMMu2TPs7rYzeSf3u",
  "key7": "4Jyyv4zBadHXZ9EjXhWJZwdnunnGExW2iCCmhkT3hsKqvx3SV93ZKqjB9Tp3Wxq7xz4UYveFm2gGeKm2EueQTwJf",
  "key8": "55jv8WJRXky5jPxJHSZXahPW7ZCuZLWdo4sDDrBaNEpqjrD2bfhPHpfsLirjwtTY34PVqyAoFuF89KEQkqYRtcpW",
  "key9": "5jRBNF6jfHSMM49oavh3d8V29JX1mqE4FccssSJEjmTwAni3TxDUmVRZWsTziKcZbQKfbv6mKJu8B5XXei8zr8Ci",
  "key10": "x6pLEwJTv83hvK22uhZ3ovk79s2e3hE9NT3MLVMkKATBXnNuUXsnLmZmXxeQfctMNtgaQPML1t5TPsCZRRMprts",
  "key11": "3JtiXsox2ZREiZkCCkuPtdBM6aDuJHL6oDYKeMCpUrJBbCExHDK3R462HEudKRXxWUV3iAZYqpe7xAQdzKkcJ7q",
  "key12": "3q7YSSpvtYDwXVxQ6ihvyFZLf1CyEy3cBYFMYHytE7BN7tCc9AYD6UiCcL7xo8ZWto177pRf1x7LPFzwtHjWNcvM",
  "key13": "FXGDSqNcC9SfAA2YDxdiwvTL6xbNCruA6BkvTpSvYhCF37pVuJW8AdRDmmLeEKeoQKrysWDHouitppp8fSvykP2",
  "key14": "51b4ZqXbWYYN358jn64yunnTsrxzbwZBr99nmCjpSEveEnnASt5xTkuzxoweiPdy7z7B89wr6utRYK4PXjN2QsQ1",
  "key15": "7qaWYZfdz94YsPG3RZTsmUCBsv7VxvnUV11tS3aeo6x1cEb6s76MAvqwg6qkkYvwZD3ryRX1Wjb99Nsvb1c5Y6N",
  "key16": "5NMxMQdneUbJCupvqmzRV7h7rnTSJyeNR6sT9pFk7vkweQwzRWeH5xFZ5CwN3a3utUVn6f3PGLtxBEhM7srjbyTq",
  "key17": "5xvNHmdT59YNr4kSCQy8Z7oJwLzEoMxHXmxawGVXcJxB55D4D4c4zbrsBuWs3h46dmAq8xo8qNNoUNHh2DSJyrDK",
  "key18": "3qTcktwtKogjFDNQ2cSyj5B4o3WKrCBbemu8BYygzUUSk8FBf8rdjXV8A5CVUEiMLq11aSAe2NspxbJ1HDNGNZzA",
  "key19": "2w6SbQ8QKo25r2iSRXRysFgDcuBY9dCWMAFC8gerifVy7oVkVZKPLKPnYKu7GhoKC9eQhodsf73YizKUCvkW3qJ6",
  "key20": "qhQ1s3dwRQYfTMJp7TCZnknJ5rUrdMgk9nG2t8zs3LRjAAaCfYLzQGqoKKBT6xSXmtCCs8S5vo1XPiJykqrB3zf",
  "key21": "5LySYAzBGTY916UWhmint6CvTyhR72XjC5fsuxByzQFzTf69pCW7axMQixovD17WBvwahiSapzgMM8Hd5zmm5uUN",
  "key22": "VBix3VfQ1aV29dEvyANsNiPxQ375HiPDDRMNjBgd77KDBQ5H8ErDEhkCapUz3fBgifPFRjE8aJ7JhmuMZcszXWh",
  "key23": "MbhsCF3Yhjg6uWC4QvaM77mzKcxUWa5eom9Xjk6xjU7XbDn4RzmxiVgaBBRVeptBiKTXtaHQKy4FeXRZaByWLzQ",
  "key24": "3WhpcRW8cEq8i16amDGQ3d1Zbpqjvr9M4qTsT3rXezf5FLf3WRWqfQtZ2gGKwUb4s5YzR852jQ3aHxkwwRGeXfCo",
  "key25": "4Anqt229cF1NCHV8HZKWMGwhsNTA5jcHXaZcvxrqxQNTzySjy4HZNth8aeZcRrGmi3mr5EF9PVnhs1iPGxgh4bWx",
  "key26": "5iby3y8VNNnv6LDArjZEKS9NSHqoZg5WhQFvEjpjf6ZA6qQutQMCnfxpQJ3EiKFFFcnZ1CfN6pGJ2ihpha6fSKcW",
  "key27": "5ESM2hE1w9SitGmSWwq3iBYtSa6vowQreCxKAdVmkzSLfBUEhSbw57RYWbZsscG5zJsopMEzquGgjuUA6bXjB2uE",
  "key28": "2s5znv7jFbjshmNXBsCiceEDgMEhGFRKS7iEuwXYDQyhJKX3BBnAAxoBAsWTGnFNp5fRVByw1cXXcbMZcJQhX7NK",
  "key29": "3Qw2cLPxBquFEXXdihhwmh21QnvswUVxfVcsnFJVd1VzQ8HXUnVYnS323LBzQncVu2xTL7cAn263vaXUXQvjU2a6",
  "key30": "4ur7XztvcuTCQABWvgaTjiGPvavCdo2XES3hKoYsXKX6U7C6vvYuDWsJWyGmgB4ktp4rXUEnAtSm4UC8qUGaNKax",
  "key31": "4spWoGRr7vkFC7zngXm76saqLZ2yQxT8RDmxgoz4hipidC8M7rd13V6JZs9fDjw52YCXJ6NwMjMjEmKR7W87xX86",
  "key32": "4nJj97tfnwn3bEeRArfhkeuSjHGe8QB6qUhNtmpL1vuvAEVZugLHUwGzEjc24e9eFkaodmNAfZppCLker85bMtDx",
  "key33": "2cwU8NwHxFSAAnwsdwa7rFf9uYBVpWJ2rSqg3787xKpVQSvDktDpzDQf5RbiCxKQ47GrZ6qqfC5RaMYSCB6NNLyN",
  "key34": "58NGCpHc2jBs99fiSDfDmt4revUvoixAVzooFBQH7nU9XSgZqHd57AXEP4rFCqT2THri8q2voEW3GSTWqhKFTGNC",
  "key35": "2nTN963cQW37GYcxEUPJrL4qP2hqKMQWgKMZT4xy1hoQNZapc3Cznfww4eLZjfDx9hKiXsew4KetxuTeAjFonh42",
  "key36": "2uQf81bSfGThnYF5LY3G9eeenC8dX3ieXr1cazm9vqVHACxkiqomeY6TkHstFpRispcf566h9E94m1w3DW3cMoSp",
  "key37": "2i2J8DWMBvkfsyeKnsz3oPEd5paAqFKcueeDs3Mb1EKqgXSDKxUidymPevLvMPCsF5eE71YRcjmKg5UQqzC5MNrr",
  "key38": "XvNcoshAzgogJ7jpwQ18UL4v1Pf6DLk81ThzcYDqTMn82UC2oQ9PwcV5RTPmMdeoFJMXuWEGBnAWXv97iTRJXQ3",
  "key39": "4zWhARCcf62tcEiKhmr3TdsSCk7AAP7HYsPDyxD5Z24aoNaS3N3oAe48AXZoGPHMD37c5svBYkAwZx2Afuqqou8a",
  "key40": "2EFDpHZxqpFa98KjLH1aPxcwRe21zVLozDAZAA2cbyBRNo79cFiAGtzCsAs9eZu1NHjg7FqxrzMhFUKNtSYS63mV",
  "key41": "6oQAhSKVXNK6Hh8vmnh2n6W87HgRRTBhuVLqCsRoSU6kYYRBPvdvjNEMoGWZCCET4ayzjVGJ65QvspHBXHn2pGh",
  "key42": "3BJ6RW1ScdhzofUYbQmPkS39DH8Bh5yXsrYSpH4xSVqooEoZpvgFi3E7gcSUippnvxAFAZHHvZs6vUtkEDQM4H2Y",
  "key43": "4zgKtoAh86aXUkaUW66gmHBdqBgdZBDWBQaDvxpxJZDEVcLWNuayXjDPmcxMyG3q3aEjjFPLDgvnHiquQXgZe7a3",
  "key44": "PrBRh1jy83dnzDKm4z995Q8H9ENEs4n2jnD268Fe2TwBzXw8V4qPkwZbwVfETQYPAb4UH5NLTJSTwijDAReiz3j",
  "key45": "5RVRY5KDtdD4h17bGRkG9kpavFTBWtN1FKckHpJ3c8XzaxsZkLarPXaejiDfuskmthKAYQbW7YUtZedASPkSazDj",
  "key46": "5LWJVk3RTAByjNnNW5GpimddPrnqdMtp6bGC4JmuJUWK7tYwnrZW6hGnvskSrcomoNDU5ZWnKvZ5a3xn6o3tx6cH",
  "key47": "MNiBMrjEFBjrySM7WkrbX8gCFC8zYzmnmv2urtzaqsXkcK7Ns8no3UMAwiJf6uoSAqpoXfWjUGVEwKPEv7UgvWT",
  "key48": "4W6bkgfyvbV4QdVFrvmwh6hHHWBzMcLKcgLkXbDvxe1aYJdnAt1RuEV3J11zscmCDisEXYwPuRW2NF5mvRN57qha"
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

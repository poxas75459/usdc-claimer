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
    "4EWK57NiUaLhX3tzv3frqKRgyMgEGtq8azTTzGAeANW2TvNHChcinFxWXv1PwJ9FJfUMJUqtNKa2jxR8LsGVBaFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GN9v8cWMduy2nPRRnrnsTT8M2TqnxsFgbNjFSHrqgkUybYzLntBkuxZjeQLNCUM97iGWZKmpmYYA4NyXMzx6Yjb",
  "key1": "2RRoNRxszfQD4Ps1rJcf5hpS8sssmnzhkCgfTJQgnJ11Xu6uEc6vdXxQhXxux64Doo23SaJw2MVFT4zenPzcRn1f",
  "key2": "3RpJb3RLNf6xxPYxkqHvHVoz235442FwEeenh4j6AFU2noV5wWjXgtQygY3je9SZ8tDLjQkcinmQtirjHBmE7PM9",
  "key3": "3jgpQcxP5LfGWK3MHeCkbbu4zom3rSjSN5NKSAELafR2tQFY1CgFyaguaSsDtzmWDqjnV6VvPD9UDydnyNYuc4AT",
  "key4": "ssZoqmr3HoFffKPqSsYivUjJuyQ6SE6ZAnuohfpod38qUQxzwHGrj1pcKVAtoT22LRbKA8JeDxZZHASBHWBZRFk",
  "key5": "2ZHYCUdGgWuJimkHWnAfXyGgr2wmEpB4jRsmVgufcyozQqX1Rq38HRUbL4J9UNpPAErCmWdM5RvZtFs7yFdHDMmf",
  "key6": "2r1TYV6LSGkwxowYrVd3anY4mWCy3WQ7syXs6LdVC2HpEaCMDmXY6na3m3pd5xnycueVRDJGvsNoqGmXUSGy6iRx",
  "key7": "2AuTqxf15nVYRXi1snrvGQcLfEsBttJWiWwYJBr2N5NyQThdWtc8xH9KBEFLkJYtgEzvXfPJmBXgmaCyUEBiJgch",
  "key8": "5fRjbNPbQa6w51WFTPUytL1DsWoNHXt4za5z3bT9QDhEEiXm1vKNaH7mBcWBzLxVTaD3wkzJESE868PszV8VEppp",
  "key9": "yKup3cAikbTUfe2njJnY2mXvP2L7cjqUUcmNcSLaj8XjbyjXvTjo4YN1ppYQsdeysfwmFF7W5YDi8NJnCY65Zsf",
  "key10": "2Dx5FBMLUK3qaGwCwTd8iUBXgVCLYXPBj24gGsWHZm21s3bTjGnzFZsYor2oZaJdhxWYA8EifRTDNzuno2eqes93",
  "key11": "ENTwrUF3RcZGjv7itdJjcodtF8b8pDe19SBNqYgo2zLrEv8653vJZagKx8aEjFdJ2BbdJZWZ5VhzyiwVfqQuKbe",
  "key12": "4DJ6ZXw5tU4PPHgveTsHeXscLNUx34swWTJqYj84jzyZPC8XXmUjzLi1ZyxrYxwmQ4CjYxXGBDCGeXS6eGUDGv6b",
  "key13": "JcdFUMBsKjrFw5RuiseX63iYxo31Xwsh97WjRjBGypWsuhGsH3VCmUUjdqbqSyyaETmffwqK4LjM2eCX1cEcJof",
  "key14": "2sPB6zuQjuG215iVpYnvkRq7LdsiWjgwzfE1iJGSTnSaphhYBJ8sp15GsmhbuPNkZNih3C6Tk6vWQanPdidqsYoK",
  "key15": "3z5kdNuhabW45fzsa3fma9oUkCfxfRz2dJjqG466yQNHF7LZmQgbLR7YH3UM4gcgha7jcdgy4gPq7eQSyCyz5BNq",
  "key16": "3iiHbwBXAGW8PnoVihpb3TZGyFps7c28KyfCXwNq8W2YSDiiTyxVtFRusg7V2oPzYWUBooZtag7xij8HkcKW8Pi5",
  "key17": "wLAHnmCviDyBK2SgYuVndoG3rrBn7ofZ7Yr5cEZRpvKXgejuv6PV3dDd8KUqyPrBNqW5dbCGDWA3rVgySYYYzP3",
  "key18": "2qGfH39TRdTxrmdwS9sBDhwaVVCv3HjBJTSV1TnLadoYeWs8KXN1bri2y6ZgxoP6Uo7z8bz5L6cUEXWQx9ZEy9PD",
  "key19": "46qRLLoqM8DcVMH4WvTdM2JyGgHNFRhDzsc2Rwy9gmDDFWzARUGhyS1eAuiGszdS55JH9C9abmmNjYLbFnPRkpTb",
  "key20": "w1rxtDk8UQg7fLi1iRUXxZqdy2LasDF53y6ieuFhPjNrsts2SsA8njZMnVnHubNhimm6ReFuP1QNo5WTYpwhW4j",
  "key21": "4vFx1sySDoRj1UiXVFvgW28udMoZZWjuMpneuVMPKZmZQTZ2VfAa8e4x9dLNQ4axeGxAfJqyBqCy4v6vvwNjCgav",
  "key22": "5N4gL6icrKtxYjGJgz96AiCCfwGUc4dznAXfCkBsW6AX9keVRzYkfVAKETR2N8HN4NwX2sPmBKUwT6J8SmP6M4ap",
  "key23": "tNnwNtvDWciYhNc3kzK51szR74bDgHRnsEekgF43AAhgvLp9GS3ZWZQG2fcebzTnVcdy6mG2ZzgigTFFhrC4qbs",
  "key24": "4jce43P4neraNMM34hgoJ5YxFdMXpQZ1t5pgykCUTejGJDjVA2Y1CMJybDHkiJJCPwGL7yqLxqeY73bX79EfaGh7",
  "key25": "5HHJUz2745nJNPQurHK5iz3YshMjDmaL1rvMLpv2zNPh1QEbGcGxCoWVswEwWCqdnKMSxhH28aogRbNZ7H5QvUmy",
  "key26": "2mvE33sdg1bAPhQHL2RNMmE2XcP8A1TLGwbaQUtfMAJhCjg4ydPCzAHZ47Y1ccTS8GbRpPreKZiJP2J3LGtD5oR6",
  "key27": "2NSBr4pAhzwXSkSVYi92dgY47uJBBee5YJwBcVvgrmYqV8WQ69nSX8hNPs77THUZN9RYCj2VtJySiVgb4gb1mMzS",
  "key28": "2dRa1pdpgXs9vRdQcefiGGapJGAuENQyMB5RBT1Knee8vwb33Bus6CZPUiYHafxQPiPVHev17HXiiA1HPK4B1mj7",
  "key29": "5YaYBaYpYodYsmsjqe3ok5saNTatP2qaPTUgFYR6uRJMPT1g3gHq3dfJCpsmc2nisY8GNe2kRAJXGiq3Z8cBM6c5",
  "key30": "sfBRwYmAeHcTQQSyHqEN2EgASthuWHtzFVMymug2T5wMbY2oa3xjUh3ci6QNFA48fDcWpvAM6KVLLWGWVWzaAKV",
  "key31": "2bTpzHk2Xt19s2QyPKuPZLhcWkM1SL8u72iTzf2UUyW79kfvDcewLZHRVTaaHfPokbRSufftwVhKurJadGpywSBN",
  "key32": "1fxzcujW5d8mdgXsqVdGedddEQom3WDCopAmHmS6ZGYiZJY6s6hpZzFdTMCSf6UhJmNVbqsAYME8U3GM3vAjwpT",
  "key33": "3rs3kQrbYUA58NsZfZSW1icZoXxAEgnUWGNSrgQQTiD2p9NSpe9cehmPcz4HfFGBiGdNFPhv4kst1wV1n8M3Rwrg",
  "key34": "5vpqkT4RwBokpT2VdBFrjAsakp4SbGntLrjEaTWh5w2iWJE9sngcjx7RbxXMkWumtL3QiJddm7QKMUfBKKaoFuUL",
  "key35": "3YQFDrd6imEAZPKu1L1xtwR7689oQYJrmqcY6pPujfwNLQmnAzdAicJRUzFhJhXUDQwLd2z4U8GVd3WWbji34bqM",
  "key36": "HBUeN3XJ9vQqam1EyxijAhTkwuK5ymX5y9UX7DtHrtJfTBdt8bf2SAHqT2Syf8TJnaZ29YWWoggvThvpFf8s5hm",
  "key37": "w5FJiN3FXRx81KMRd6yRcDEr3bJfkUWxyHHaH2XLy6avPHxF24aq11wSnLNTptBvNvyFCtcPYWnTK5CrwriVTDk",
  "key38": "3t4YK29yAmnxBNL8PKeghHBPz2fSELrvNdSv39RarLBg4ew7JFzmwvFGjMjhPVA1p345bom5mtVY7N6pfdSi7zaK"
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

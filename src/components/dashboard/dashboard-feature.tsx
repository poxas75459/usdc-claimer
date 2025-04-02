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
    "5J9ni7aCWw1PiyxWicJwame8VrDD2btwV9yxwZcktsvu2jVPx7cKVv94uKxoCyqgNeWpZvyCB3SRSpiPCuAND6K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cprY5fZr84CGP3pr1eReH4ep6KUwLdtGcGM1mrEM7WVqKyoCrtc4HA199VXqmcsHThY5DgnMWuGHA1ej7PWdUvr",
  "key1": "c3q8TqiDMunuhdXDKRs3QWb3Fw5hJGzpEBaq2WR4GV2oeQvqHdck6nYskGXqt4BbcsSXL2WgC4VmkVPKe4jA3zW",
  "key2": "4bLxFnhDuJY6tHRdzwiAdRkERpPXfJTdQhsaGbBCpTs8xBL3GNT53Hpqir3nREUqyhJhKK5ny2a9jFWu1FeWbQpa",
  "key3": "61CAQvpzXT1yULrDYzz3hMSQSqFXvxkryMAvZvsk53iMUhM6i15ZwmmsCWqsbK4S4ktwxgBhSEi3S1oomAJQXMm5",
  "key4": "dSkfQE7LWBK5Wh6vjxdC9vf7RhtjwY9K419VsYXTSTd9DgWc6TwDJx8zVGk2ZASMXY5NxEgNLF7yx2bytRxwdJu",
  "key5": "33ghkxj8QdvjBk8hSrQAxbuS5XZ5tbSGbjK9WHXWGzf2nphFwNSayym4hU9haEnQ41gFmHrziJiF9JE9h3PsWbWC",
  "key6": "31uGu33tzq1cCAnLau66ej9CGtsnUuY41iN5QWXB86m3VTHeeT397Hoo4o1qSwDoZ9WD52HLQx4y4fB5Au1vzYGe",
  "key7": "4CARD8UKzEn9hKBosXWBcBtQonugaDkeTpU4wU9sj1cHAEZ2xtYtyj32mKTePEWqKKDKfrNsMKu3Lz6fT1Tuyqc2",
  "key8": "4rhJY55NYUTWHZptCtWoCzRD35iaz6hxY4HNKFisJMiTXxGQxxdviQkWfReDj4z2Lo8uYKaSLCQk2ockWMdTnNMn",
  "key9": "3dFXR8W1vpGVYeuoSydqT4DL3mYNGuBUdGNKf5pS3ZgC3edcRapy8P3z8n6XMiXyKZvdoNFfJMAQCxoTYJ6Lqoeh",
  "key10": "52QdG982v2suMgviGYUK5Mh5JmTFyEbqTUc1EwDnxB1PWkhdfF62da13DTv6S1epzrJRRYanRuXHRgkZhBDXK6QX",
  "key11": "kpgfFv3Jns7nnTg1e9WMW9JqKA9qYbBNMSoY2MVbNzw5cA3u7UupTVnHPmydX6Nqix6Dtag17QUgwBRmXgMsxbC",
  "key12": "2k9GRPnomPWv98hFZgey26xqVLXUYWjwufxf8CobipTDpBtWJ8yn2hhHBRwytuAAuBndHLUkkC3qDt1hxQLpjD3n",
  "key13": "5kYUc5ADYj7c59JqTXqZ19UuA9uziSds3pCen3YrouVBgC5iJhqo1VoBNa8LrrEy8fjuNzHAukpFNGZRzj9dTeQE",
  "key14": "yTRQ5xe3EFAzqwCXSCZ5LMN5HApkYDQiR6FbDgbicGfPdp58MMziqV78gdtKohcy25epcVMkEC4T2Gq6mdyqAad",
  "key15": "3VjDrjCgmX8mPCLj6b2kYQPqQrZmY4iYHJMZC5HxEVuQyXH8tbHuCR3vu2xxCKYDkecbK7oiPNUBDYxX9yTg24jb",
  "key16": "2mo43awmTFJB2gKpsJsoM6UDs63uxjpTDptrXpdvzo4VTxM7E72GPyUq2RHUPATXRttNQFaU5ajUDpSMDScm23qb",
  "key17": "1meejqb38KPy2gabmusxi9it21EQMG4NiL7NZirsZ5akG7jG2XQRedPfHfY5f5e9iU3G1d2Xc36PQ815ZsbVXcR",
  "key18": "5JUiH1Pn8355R8j6yPsoqph5qCxnLRqbAxBed3YdhEA9xZ6Z1TPy4ouHtb3s8Y9kcaoCvVjuUfoJR3L7KnHT4t32",
  "key19": "75U6QRsYgQpKXhvW7p3CrVAMVep4hmzgzkxUrQpDg2QnYo4c58ekWy4P8KwfJcQUHHPALmLc284gC64FktpMdNr",
  "key20": "szWfmpCxpSqujUQe3kP9iZxpPLmp94h6TbANyiJhwVwLLC8oaQ6WJuypHXMoAjMWqGk7WaGmUBmnDAkUw6oPd1z",
  "key21": "5vN42mDyxRyyg7Tw4N1nAU161TowVLEpxkfYVS2KJqAWLECmiwBxWbunTnCw9VjnDqDMfHtEQL5u4nkKu7dfJZC5",
  "key22": "k9YPgBSvAPertdwGuYA651KQniArMvYSJv7vG9Avh4Jp1NjDZ5BaFHjQ5TT8GW5rL94S4NasuzCtEmE2xXAC9P8",
  "key23": "NzvAWKkwjDbQQs99V598t11znoJrwSB2VG23f59aGWVVs2sSPy2Am8hpEzR6sLvVUPtJBx8YsC8U5VTRMUt1FHk",
  "key24": "5hTFpqw882RNk6EFA9cuXQFUmTTUiXf8rD9hifdqw2GcnNhnHxUqUQnKSKCyHvVijxGwHBtHg3Z3U3HQZT3jh7vo",
  "key25": "3RKWnX9VLWZ85KfjJvxSx6GCqWgPCyPoMowZfHrgMycSxrZVU6WfPJ2xhqKFMxLQHJGw13GucWrb2VrRRthrvorJ",
  "key26": "25wpD8X9Y6sqttYoQUWzh8dacM8cuUMFW15tx9iDAHuTUte4ZQ9cDSVTZVsuDNoxyBdcAocU2xd7reVQwwscohoD",
  "key27": "sg7PdTzJfVJgMq4dchEifwTy2Y8vLVeVkXtzS6MQ8vLR71km3ocQJhxzc8gV5EVfeyDZ5E6yyBz9421z3UAFQms",
  "key28": "4dLUoHVbRVh2jSMt7g17FWwagx8QaiHQDAh5o6opaU3HCbvY41iefdJoQhzHfFtrP8FdUm1gzd6Mr71tJgUJ82ga",
  "key29": "5qUV8Qjea1ioyYMCUTptH6VPvqx1UDL7E17ToR1XTU537mGVQPWf5VWoLCLGdwLVy655hEEAbGNZuWNfbySigqb7",
  "key30": "i9UCmmftypPTTSz4gqV8aQshEWN2TpgBhDfxW3tAtrL3X6aKaJrTJdXyzNszHgpdtgRBQwmbZQBPvxTVyfNhudS",
  "key31": "4QqasLL27wWPNejYKPR5oujNwxNGvrhoRLNcdLVaV9qDVShFn7NK5CrS9rhxhbTxs7YCCsqMEPQKAkfgp2FqbwWW",
  "key32": "5AJuE5yQRVw7CtrF1Shgp67o34XtWdvgaYehLX9YGdXWSeyEtb4KMrhSjzjx27fMXRCUviJJ1qtQhmVRZbjphvXj",
  "key33": "5tjuc7xYDUuA56Tqw6Ydb4Yph6QmVBbTMV91UgmcjHeZB6bG5ZVAgSrzMedUMuXeMvqL4r1mX7euU9sstEfpxmNU",
  "key34": "2B1V3TTSj4a2oLW4JR4sBo1oMHnXzfSju4zKT6ym1ncqoCmcXKatGK8wwKUfpYyGzGQNBZcptdHNgvB31SAgmxd",
  "key35": "3Pa4gzY3AfHSsiaQnF2p1yggVPNK9rvjqwixeLcQomtZNw5o42v7EBk8BeJXjyKe6Z1qcqhQq2p6RgZ6MZ9TEL2",
  "key36": "3F3KnP1xEEmit4KJbFaQ7ghwKr4DRicjh1hdyQCWoV6HgCbBRRH2P8SeskVDhhyLJ622iDEvQ4ZH1uwGVuorDSme",
  "key37": "4nPBKvEDGJG7nkqRykQZnAH6sCGTEA31vVXmm4VUDvgwpEWBQZ21uE1pnCV3HeLMHjcD5A81ZTsUXjiZ3QVWfmVm",
  "key38": "4cvZDU3TLanoQvFmVXhGyguwyJkz3K7xKdrzrqLjdZcLrtiTiTU5b1UHPeSW7EGJDSbpPsmxKf7AWMyw1PoiAsjC",
  "key39": "3UPZkvpLw24FgodRAA9YS3EYmUCG53c8vg4Rx4pbGoS5vfg9y1QQqAxhMoiUoUJpahK9a5VbM1EAvUoonMdKXoEh",
  "key40": "5PnioUX91JqhAEvT9PWcji2vYKLDcVJ47vXoF8A1j6eNFLEft2x21TSHEckVrFeupMTvPPYhUVnLnQqkBC3VmQhQ",
  "key41": "3vzZdJ9vVBuRQndjpGgrxsphPmxfTwytQ32Yk2LFzP1HXegSRdejDTEH7fNPXhe8NEitcEBrnUuQkAGCvsGsoBos",
  "key42": "2fM3tDNU3DmJ8bFnkPcum3QaGZyheVUnpRwvtVSGrXhab3RzaJhYCinXf42JLsowkDgizV5Sin41hgzC19fkKpAN",
  "key43": "5EFvp22gc1kHYv6QLQN6b39eLRiBgwo1fRHN75dqGDtBCL3GE5Y8yLACmH8ZfMnMv23ophs3D97Favno7BqqSmfz",
  "key44": "4k9MDabwSDnhoHBmSWJviaoEdC4WssZkLP2PMiXgTBHENSEZrkE4xupj7bU66CvvNWNo9n4qFcTVqvyxwphNPgGC",
  "key45": "2QbN1DXvSb8UXxxDKdk1wv5xJsJ4hpDmHaJP6i6DwZZKNmRzk9P2KemzKEexREBskpi5nfhv1W4f1oC8vFDrgPZF",
  "key46": "MzzLfxKVgUuyND6pcKitUb1hvZyZvgcBRR6cLSBPdZgvzLws7vN3CWyEUK8YdTgf9nso5aT8RtiqmPtsK65vQZC",
  "key47": "5ULZDeuzRZhUu8qMmU5Pvumkccwj1HYPNNWVidmPQ3M8r6qGnq4fe2S4xA86H8jgz3qb4RJtB7PjT9sA8iiiUoHh",
  "key48": "4vt9ebTt3hAjDJAN1pu3JpesZhiXd9AS4ugRg5KpqA7CvDnzuRTBoC1M3kiEtrMm5g4vvFLoQUXFrtPvgDJUVECN"
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

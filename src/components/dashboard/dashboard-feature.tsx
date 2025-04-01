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
    "qXRjgiVzv4wdjDkk4c5ZaLUcCpHkrvEoporiMsV53opjWSP2G7diCfAR5tMJcfUFEKXsUUktVGPHvrn14LcgF8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BML6CHpWjCmsghy8ERkN5Uhr6e897XWFz3pAgHVVHyTRoaU2igt98SjmGG9GyKoFKeHkWk1GrwGWCiPgTPiEo8G",
  "key1": "QZJaYm3WLNY9EnuMCwdjDbiJaBkniJTxPhafhJRjX9kZ86xTUFk964RZiW17Ew5JEK9hbPyHRssGLxHDpQu6eCH",
  "key2": "28veixqnThLse8GvdUa5fXGe5SMEkig1rQm56pzA6w2km6Cz8CeHQm57D3rajpcn5kCniuPa65iTPzMKJMSc54Yn",
  "key3": "QuLq5pLer72ScChUqck7LwRppbxVFTwcFHTB8F1wNEDXABZ3sSb1c2UoM5rcwYawe5rsTNDf3Ej6kQh9a9J2iWR",
  "key4": "3D3nqZVUBuRsj1K3JrNXBPvzicKYUSyv38RCucSuQyKNGVeughPQJiD5rmskQJnU4JRNVs4USaJgYTk1rG3MStv7",
  "key5": "5ZG7YL7TndwiJ6Et1g3i74bv3VMQHJQz14xF9HwUNNT6TCwCQ4uzXriQgBGhv5GB485tZKBUB6hKVJuZ3CVkkKdn",
  "key6": "r7GrzREPb1iD8eYDTrgzkmcgH9SxYM4wGzBpHamFC81yQTaWTr3N5KNgkJrwzRvRXnzbwiEY5VHeedUKTpjQBfs",
  "key7": "3JEYzKpheBNA4wevJpYGZ6F9e9CjrgFmmm2nhQ2xCG4WviRUcN5VdNMUeL2mF7rJvJwfjsdobNPkWmhBzc3Cyb7d",
  "key8": "5qzMD4CKmFkZpYaf6QQgsDzk8TyFrxwp2oYWhfjmMZ21B7XUS3E4c34BftNqnSBteqpgtKwAPKwrUjTH6tm4qxtm",
  "key9": "49Fycw53nusMbzcwX3mNHi21cHR955jbFkVdhDbAMv8uui8f6SEYjrxr3PCBzaGtBXYciaMLVnkd3yWdURuf8vkC",
  "key10": "2QCHmziZH6G4m4Qh4TpWGwyqpDFvLZZeo3G3SK5fa3fJsPKYhdrkHFdFC5rD2juY1TV1zF6JVLojcchhKMV7QCEB",
  "key11": "3XbcL9d3JU6MQuAVaXq2hrsKt5xmKCU3pR2nTvjWGLnfxknet6Vpo5Scfwp2nxFTFTRFUcSeBnaoBHrxYHcCM9kv",
  "key12": "2nCMnzDWkJBfKfVFcu1TcCYArVcQpnNFfaGUdX1RdxgFg1h4D2mbJyiPjoxjLxrvWfcZwZK5NHcNvqKD1QfYKYvC",
  "key13": "2EQgtfNevkhEiSdzKs5etGha81e9sEyMDz1u9hNKFJcUMT4LCYRro6nFKK4EHCYxj6Cq5aLMVtkGxkAKsKFH4ui8",
  "key14": "3CndZaSSKy6peq9M2Exkt7wz63YM9bU7JM5pMxRbDduAz4HTYNVzZSdpBT9TrvhcG7RakeofjzstkV78n7JwaCiB",
  "key15": "2oUrjFo2ps6A7V5qLu89kfiEraoZ3iFHvn58LZGmmSeJDabTYsKfoUusKez6fHjHCeAigWtABmYLk1KGpJwW8N7s",
  "key16": "5ebDpaZHGXfvV1P1Y7zFbtCyKFp7KxwBMKtb5tEH5Co2nWXKgUr1eHxURwrLtAwuHtwbkm4YUMyt8Ex8sjQ3GrXu",
  "key17": "5x9w6WWzAxfKgJjN8aLijK5ciWSGcCSxDd62mBoAi8E6dBKUxi1GKvKpSrgVPkype8De47DdJRtNTfxu4ia6hNxu",
  "key18": "27vMgpTUCmS6gHyjLGeYsTtNwNrw5zCBFq7erpChZNa9ZRDExtVKD8EUS7Dw5ptZWsdUcz2iJKzfBjvftLJTsXsm",
  "key19": "4iSCzuZzLpxu3B2QNwXDen2jqPKN4ojji9h4EtV1qfqwqAoGc7HfghMtyxfs8VBvFEhpHmNhGxSmeQvpCT4Auesp",
  "key20": "5YpcQRXLUKMXTGJzrd1E81jVJAtFvhGDasvwHDbn7bMKQFRpG2RCz9RwGsViuw7f1JHLgKodcA9hN5hVZJvXpQ82",
  "key21": "5WhMRF29LvhZ1VkyqtaanHZUmfDaLQWX9MskhehfGCJEVKiX2e8y3FsHzVzRmSe2tNHbjBfCinc8xdZuhUicCs44",
  "key22": "2TynUcLwCio3wbHqdutSKJCvc4ZYK44HShfGCNoEv8dFU7ovPMsiWKLwcn3Xy2L2EoDekvGrtpquV8vMh7y8aE4C",
  "key23": "2uMMNUMWk1P9J8PrbMPWrQPT9t657BdnpoZ4o4bQLMtSP9oJYeh4tcyJBwFwMsMaS2UHCexaAL285yVpURzbcgF8",
  "key24": "3v1gGept8X2XUqk74sfiXDs9UEfHP2NCH3mFS2CGLJS8bzmj8Peo8aScJW6tNrXjc9eTdiWvWYz2tVgHgr8goutQ",
  "key25": "4Ev8YsZ1TqxPNo9b35RYQTN1e7RPYT6jk11qR22kdoaVHdB5D3LTCREbSedRemhyy38rneko1TrJqJYBnSLzsUms",
  "key26": "4hLBePh7e31LKPYKCdE9Y1cqYwvMqZrNK6bCjkfFFibpruY7Vuq73tJscy41LSg4MeXEsh7byJ4AT1cJGXNqw5Qi",
  "key27": "4uzFwF2KUpLdHijjCvVncsUUuPUSgMsN64hf4KjA8veKGNm9gbqXof3x2iNHtkxhhuyAKDWCy9BzEc46uvzQsa98",
  "key28": "3B1gect5XVVeHtiunzt7pQhRqS4B7rZctMJ6QB12GZAcwxGWPwc5713qvH5fY7q8f2hYaA4zr7HiNwzPhQoHKMy6",
  "key29": "4mhskzMWdzAFjumGmc5z2Y8ggdWRDboqLjyAtMr8PQYG3T8jzgXwzZjjtSooDXB1LfkzfZEEDTq9znKX5wWyWWKZ",
  "key30": "5pPAqqV1dr3baxeVGmjkJS2rHKBwt8wiXQG2xY84EMgCGtuR6TAbQMKsYkfQ26muD15jV4r6zfee58wuFkd42YxH",
  "key31": "3sgAm9PWvn3ztoNg9CFGk4Jaw47UWQLc4LDbMAN2ctwBTar3jSF7ymKeQRBBv8gzExRJxy7x4Lg673SNt2Pgj5V3",
  "key32": "5N88X1pNo8b6BUvcdDYriHwdQ5RAukCuyCBR6wMnJbL1VoDeaEJaXUYFHurUNmRmkKJSZpXLbFdqmZrijFWqrmpY",
  "key33": "rL4MvcWdja5zzhMt8x9wXahqZLfF7JrqqwYewwfPpDDsTPQ3QTFaK3z54BqbLWkTqHpo8TSenWHTktNZNiLKMWP",
  "key34": "52xSLX1NjwWiVfUNGH3Ta4c1SeaiguhGNySwtCurnEXUe8xYAs4WELh9e3CdD3jVL2A18fJUXbgyJvtEZhfo55wC",
  "key35": "n85LJZZLAU1z3nAdL4Lxa38WDa3VvmuzWendcCSrvWPLLu8kYg72wKjCJrdtKgnQLbwAmjee7tDJbdb2YHA1pRf",
  "key36": "5nU5MTCb66ifQF3Gxi4nqjJ6HpY2Bqhm3AmjtXEkMeiZM3rm6KwtpupRhDyuDmGqtdTbVtL1cHMopxbgRJS4SDiv",
  "key37": "5NoJAZp4ygYNYhbg1s7wzGS9fTayxSbUksAHxHwm629JqpiMs5mKRQJeS8XCgERG6pmzyS9hMiz2TzKS3cR9Moby",
  "key38": "4izUAQjckQmL9PHLipmPoygdQRqTTFpKuezVDYJEKWpRdMAWAvmZmwK4GT4KFZnBUwDLLpo6WibpX1WtJLt6W9B7",
  "key39": "5w5WKhQ7s2sfiR35qcjUW2jSRKR623A9SXxzRCkDSAxYWkKsLvvd6WvbzYr41RyqnwXaeVe36JeMybkz68Wx2LYo",
  "key40": "pvr49MzEcC6KNWc6zme1f5QSnoou5bAMHgP8NruQP8ArWJq8h8v9so3BtftuKR6pNnghZyRyncT55JZokAkmMSC",
  "key41": "4ngiuFED6mUkVAbdDnaQdVEQ9km3rucT63oyQzTVTdtacGAWMDGUNxmPL2g1onRACdjjVUwwimcFW5CKDNZgLpSn",
  "key42": "nw29dfzZGcsMyMt2P7LvsAEGurwXdWkKs35rSxpxqZUT7eZs9LijPZqa5tGpXLd6Vq3Ksg6CAbyTY6jAVSBgTn8",
  "key43": "4nScEugrXNPjMYhejJnJFZ7HrTa9xfHN4SJA7oVztaaLMx1uxptYEwQQYG3kfsUxg7H3CuoUmsJRyEgdXQPeExDb",
  "key44": "QogsKvW61X4rTLE6NJptPKr5LzJ9PEecBysMb2M1fkvM35ffbwtxFkZBNy7sNfXpqQbrPPSnuQt8G6ZSuFbXojt",
  "key45": "Zdb9yE5tG1LrFKkYuHo5Q4y4kr3nhFzerZ2oef6TupJvGCWKnWq26YFaLtnnXe7WB8dFPqcxUymXecdHrsZUgrX",
  "key46": "WgKUGXXxZm6zV6ncXg2MmSy7EJjYQXrdBEGQySJmGAivg5ouTAXwn5GTCFoCc2BYxQ8ujcyEp4o3Qgt6uXdj3hC",
  "key47": "3nXMKaRArYqjmqF4iXemJFbwcuc4k6DFVnhxvPAf8UmhqaMhMbPT7d96nPpYBvUBV5UwsT2GsaefERrMFeG42sKn",
  "key48": "5mbYN2QqDfbqKXCCHTVCZ6DRvxaAorBzmXN3fto8wFYdF8RAJGqfkjQfU7sGQK8Qu941WE8YwJCbCP7Uencyg2GX"
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

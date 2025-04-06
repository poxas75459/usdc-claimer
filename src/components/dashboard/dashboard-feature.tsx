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
    "437aY74WDUcoVzRUFk4vK5UW21DzR3zmiazCcYPaMuaSXW5FxSmCUj4hXR2CQ2dN81VbiDdpxjP1fUbXYqfS5T1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cA8oUWoew5NkrquSgXAvzVxhABMiRN9hDwxUDNdBYtiZW68i3axtMTGH8e1Px34iXU8kTD6o4xQKqopw38AGcFP",
  "key1": "4Dtn72U1e64LPaW4sgsCMvoLzhcFPMcBvaNZMQtrxXKHYWSqdChpV3djFgdjwapvrgx4sSrX3e2h75pmMaEGesmv",
  "key2": "Tu5XATWs2a1fQmAeY7G2XPjdEmAKAR4NY6eT2wMrju1scMB6kUhcg9kKg8BpKNVTC55asRyTEWhZypqyJsmSmiJ",
  "key3": "239GGYwDtPcq6Y6chwN29MYH27MKM5a2ZJk2nHbqhMLqg87rwoetrs3UgXcyFkxx5UAKH2BQ6b1qpxYoLfc3v6d1",
  "key4": "5AbGhKFYcTt3Gub6Yt9st9S2yZexHdpfCXcr2CriHXpyHBmQiuv5sB1j3Pc3RQYCzEuuV9vPy7fEJCQ5FXtmi9y7",
  "key5": "5W94tkmtJMSi2FKYBK1NuvMidgoEoZGBXG6k64iYRR6m6cAHsL3QGwFda7E7hCCQVvpi872XkaQXimSGTvhjH6UZ",
  "key6": "36wZhTgtK7HRufjoLGTjAKBJaewNG3DQWRMP5zEeDTNFCxuCkpBAL7JBeYikLvgVjeytjFD9GzFzcwR9vihX6pJi",
  "key7": "5XwQDiMH2Yx18ErChubfKMCWQ4FTTKjE6STgs71JfYLawmEzup7P885TZJhuL8qKWGfipiXR294a2SXjbB5wtipn",
  "key8": "2TmNw9fGDAMt7Jf2LRrn37Qv8dBvZzHTnEA8uR7uif8fq44SFZxS6Ty7dgr47Q7ewvLYtxDt5k7R8FqRrvHvwXM5",
  "key9": "5A9A5yvm3gowLoKr69SUdp2UJ1L8FKz2EZ4ZLGJgTvCQBQD5Lb41fT16AUSggq1crPQFAM1tonyQm7LjBv8o76yw",
  "key10": "TkKEFwSxSSfp8oRKBAo2yiNxzEpir5rBMWps6RTB3ChVLAJ2fdZeFek5Uags8U7Qi4UEW2YTYKY4SRZCAFJ7sDh",
  "key11": "3Ywhw4ZFTQ85DxGk7qyv87HLNXymHQC2U7r1wCxX5wHQruRVcFi8Svwg7ET2MQ9romqrgPaGpocktnbyZq6LX73H",
  "key12": "57Uom5vX7NeFo93xUSB6NV6nv1LbjbT9jdZfwb15t29QsMb89XKuiPaMPYLJ96c3b1ryjXDobwmeJ66ck3tKEbwi",
  "key13": "5MZPk5YmYaKZGCQ856wdjm5cCub9H6QiSvd7i9h3mhLMfSiCdwiPPMAkN3Cah2dFv5zYxJNSftjJ6PdyaXNtfh49",
  "key14": "gfexZJ68ejdhcGjncdxF2qCpS4zLdcdPD5AWijg6FHN3HX6BPUe1sxQrr9KWDScWJFM2QH7UkiR9dWkkZMRNd6w",
  "key15": "269D7jiYi6n9VcP6mJ24kQtu8rec5mZ4WCsBhJAvV1SuoBaFzbnfoWNWHUZs5KXJ7WQXULa31TxT6ZzZUxpnfzrh",
  "key16": "2ASvE8i2hAUmPyF3Vs2i2HyKPBQGHi7RRwiBFCRx8hk73tJU1T44AJxyQU2BHP3jgcHBRoxYjEprpyHpgz2RtcfY",
  "key17": "5NtPgoExNbFPHvzyaZXvqdXW55ZowsGhuThxh2WHDne9CHPpVDH5JTBqEkHJGsMPz9hEeXB9n465HDAGKQojb57N",
  "key18": "5Nt8XivTzJR6iYUPhpjdnmGAVf5691HhrXKnHxsMonbrxHE23UrmfqzAkyYtPQXuNFmmzvvaicZg5KgLweW7q8rD",
  "key19": "35DZ6YbotEtDijLvAvwFyFmuoEiGcrKfUEjgQrpCjG4uBBBJEEWL7bueUrgn7bU3chkyn29LZ4zJokRfPN5KTixG",
  "key20": "2Vmx7mQ8jGwee4ftwYhh7PFPALfeiyWZmHPH294XKtPmZPYAeEfaaBUBhUDbfzVCbpfPd16YGSWTzvvx7cphBik7",
  "key21": "3JxeeC2dG4QNzbKx6rgTJq3bicaogjEZCb5KfiofYGKxUXRgjdUtPvNEUjDvhuDUXvCeYo4wrhGbQ9sGryMFuSwB",
  "key22": "5y4HMkFYC3v4DeuzvPA5TA3P9kH4au3GLvAeYsMQojrsdnENoFZiA1XXiSnKVxCP29nW7xsBv9QshjrXwjUswTFX",
  "key23": "5Av3X7iGVbugYzX9LkaKymGspNE4ck2yw9ki7gau8ru2HELgddqA7g3ijypw3JPWLmP6hFHphM7GbvzNLx41HxNu",
  "key24": "3zXJK3MyXoD8dJEWTeFNHx8NgYtnr2vb6ShrhVWDxqshRZvHpFdyaXuLUvL8CUSXquKPiPMie4iBcrg4sQJpobWS",
  "key25": "5S4h3DuBgeBsB7kR7BcyArPGgqB9bDLq8VTPGDcGP9SPD35C95UdBakaJqye5yE4hTQXR9jbAznipUPSDmyUHsmL",
  "key26": "3fP2jWxjJNmz5dFAvX7yzf5PSbx7AX6GSEku3GoPjo2cHY7MUJdCqwM62Kw1FdwSETucxaqx6x92598smkja9Ucc",
  "key27": "5kFHTRkQNSUnyfS1ST8PdPzwwFeChF24sjus3aZndKNHhEqt54mwjDDUTDyFBxGAC4CqPtq5g321KMpY1xvhamNe",
  "key28": "2gqMDpDtSUkZbxWeBJJn2oS2hLBvL4Gqofokf75DYYSmRMVdUQnUwxC5qPbvsjLDmp8s4tH41cFwU2J5yWXcUPUM",
  "key29": "287H5YX3N2XUZJSKskhKaQgNn17PC6RGnnpshuwkoTT7o6RtoBieAZBmLvny54LDzcC1kxVuBfD3fr5Yx2mZ1gN1",
  "key30": "2AEyoXwCnZUEiLKUgPQoo5dZJ8T3DLKMCm9GMpuAK11dUhTgFuPB3PF4YUdB9fNhGYs2M5Rb7bs8wVmfsJGf47sP",
  "key31": "5aLzUArPrHnc9qShp6vq5YCYfunKdbQnSUa1Xa9dkirafedVk9sVoFGxckSKVNNynsZKNTHX455wvJXh8uRU3fbq",
  "key32": "5dNJ9VcBBFzv5HU4G7G3yRkt5j5T9tgr4D8KK462mv73E5M1pm6TTmLLqHYJC3SapWaHs22FhCec1eC2R96vrRLR",
  "key33": "5daJJvGuok3nWU4PAfWJZ5rriB9jEpStEeAWhh23gocwMd9T29e1WmLoCn557TzATjsWbVqv1cP2xzhp2TTgLMbe",
  "key34": "2ibnAWDZqo8d4rqLMeEgwi5oDwqQieWVhXk8wAXgeM9raxKDRBqujrK1XyiHYwJKbN4nD2rsgzNxDbF3h8mjmnV",
  "key35": "2dQV8ZRxuMLsGVYAaytPGwkFq4eVQxcZS2iSjFPPR31m8Co3fb535QNiHSCJbgWSMMd97zKpzKY8312aRL3zttjT",
  "key36": "K6yQDwB8gok3AfMgJt81RtyESZdNe4EenvzJn2beXj7Zo9BmmDdRTJugkx9ykxu5Hmh22jvJoY9AFyqXdqae9P6",
  "key37": "3DARkfx1KNNCZ4DjHPC5q5EwEVMr4Fiqoj6Z3EgD6TDucMw5oACKshmxcYxQ9Rkt7XWLEn4ozVscPFRmvdjtw2aQ",
  "key38": "2Bx4hu7K23JekY3jvdSfjTBeACztitLCBgseNdTvh4NfiswMWHTuA8MBSyGMziVGeihw8kBAgy44VbDV8BvaJQ4v",
  "key39": "UApXfmKLua2LpynYEX7E4rWPLfuG1V9Y7DiuaKtETatRUs2Aj6sDgkaq3ide2x99VfQ8n6TxympW4dggdm7AqKY",
  "key40": "3zv1gXioDkHnVVPpPHxstWuGWNRHydny8JK87EZFFQqW2GKTF9nPATfV5i7bugmgR6dZYVsxP8MXStk9HvTynuwN",
  "key41": "Z7c9Fdoo36AYiJEFnBErnGDU6gxTPi1Wr9gAyKV7Q3DrFgNtgzbRrnMW7h8CfnUd8pxTXJYecsMffk58DZhveKg",
  "key42": "3wMcvmNLYHrDoEwHC4um38DmqjKxpLrwNimrYQoLu76cVyLrMzhXhv3om7BdPhjCLSMswdZvJRm6FCgDxeN2nguR",
  "key43": "3TyJNvZfwVTVaQjLkPLGQvm7YnBZjWGPbrnrkHsJCNcTpzKsohKDBSk1ThnJLRXUYkJE47pjpq4JRL42Hf6Ppspq",
  "key44": "3yC2npxqe5VQDKAmehqvzCJK9KPhgviShQrkZLerynC9doXzqDRx9aJEup9PjADzMDUBP7CFtXDA7nq8AtQZVMdr",
  "key45": "3ey1RgmpHNC9iR5JaBAun243C8sc2Hr6DYRoz7xZNQFaYK3v9K61fx9MkzJA8iYBdy2SkmCWaiqnHSU3BHiMiMzP",
  "key46": "2EJbTuJniBSiPebJZFyq9PJi3yApht4wMdauZfzm9JJP5DG8Ya7x2fjPsRjzaGp5N4kUzsEj3Rhq3w3QhP4oz6m4"
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

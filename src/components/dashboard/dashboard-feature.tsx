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
    "ik7Gfapbx44GW4D7Dkrpyx3KPxoFR9sCmZVtwk5fhnfCoqNKxJHgdjQHGPn5ZvYhMA4ER8nG58rnV2rnadNYC11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4opToWVbS2vrKdpW9kHWspkNgB3VP8wC5EefFZZWRRY2PXf4vtkMLkhNvwDL1AWCLycXot5wn13t1cD4ydhXyWgF",
  "key1": "5Av7MS4GpcuL7C9P1CZKQh127jMTongnrYBpHLpcsUN7WEapnaTUsJPsax7hYKUjPXVNQnawKSfWfhvvb5CPZMgJ",
  "key2": "JKcRjbvcf9nkuBVXdR4SsbF11CTHZXmPhXvF3f67ZRQBqso8vwcXgFbmNDfrQAiY9GujMtZuqdthj9cr1uk1pxF",
  "key3": "3MbheQWBuuBBXCi1rJZ68vhGpSypfYxEyhqwePgd6Ldd2dr7tmMjjECgEeNnkiAq7MNgEYT5wv1c4u4bHfvGqD2g",
  "key4": "4K5B6TYjTxBYs2Yh4HdXdj3kpCk7BGmuzCHNKnHGtxH1F2Bp2dFfUFfgigNk5WosKdWGwC2yDq2MjkruS2erRfTn",
  "key5": "313aAxsfXFoJrfjmW5i4qaNyJiZkUeFGpfzP5HpuRWFDE66eMLS5FNKMj2JfMtJz4HgRtAp3UNvJWEFokvbbTcpj",
  "key6": "4izpqPuu2y5c17VbQBZY4LF9ZavCYdDF7JBwA22NAZ8uzTbTzeMN9CfbMKDmrFUarNxQ21Mn2jgaSr8jnRfekHkX",
  "key7": "5g1LNXeFArCXrhAxaqxQUe8crxsWmEobNQ8RZuAGTPxQ6yTkSpV2HdAeX8zKfLekK1uko4apJRTz2omyehXWQEMn",
  "key8": "21YwWazGjdjYcdqWVE33iBkG669dujT8EJkcieZBQtiQyor2PKLd5tataDABVF7eKUTnTcRXMPVeuSpQdwoZRgpN",
  "key9": "4iTYbM1GTA24ccNZtpG6cnZeQ1LpRdiRGfJjemqsujmnbMM2bu5y2z9JqVf4PbBRUBkuxiNjofPU8Mr64XyY3YmF",
  "key10": "4gS7f7DgLxk5zD8oDeRUiHCwm9uJkra2TGsfpfH6h52b1HpFs6oCLy6krvEzzKqvdvmKGXib85syhkJb5zNYyJXW",
  "key11": "5mf2Gieo9RpEatoiSpAgBqgtLSu28rvUDMTjyJakeeKDMu1uhLsB2F8FPyNnD5fn9pfX1JpT9L7TwAnEaacH4Za3",
  "key12": "3dNrP7Lg9i5jwaNbYb5Ys8J8FyFKD9MX4JmJ1vaKu8hAgBW5rByNUn6vGanRMz6U3Mq4ttSBmu3koV6ct9mjRv5Z",
  "key13": "341YL9qyozAn9eDdRR1Ukyc9zTJtnAS8pXVMmG39RmkzZLRSh6pm1tgiLThX1cRcL9Y51Ff6P2mj7xU3ASe4CZZS",
  "key14": "4bnf1hWKjTq9xVitRaM83uymP8QevmYrJJxni4zqJxVMBW3ibYeBuFmzt2wbAkovir3oMXszBvE6BXZVTVtFENiw",
  "key15": "4S61YLKECKXtjKdLcEUnp3CFCg3s639AWRhFDr27FKMNZ6twwwyjKv6dsoaZoPNKpFLA3eyqyiGENhzUVkx2zveT",
  "key16": "5VnnDzS6znPEZiac28nsFPqatbzFkrNyFt1RXqfRGyEuUKL7TYWbpHTTvt2CkTkptHKKAosdr4KAU2FfNCM2Mnv8",
  "key17": "3owtvpeNhvG3edHDxUesTeH183MFmEKVEAEZUpjy1GPJiUdYPmvkXCudimHtUmKRF2ZBA5SWxw5L5kwRza5vLmoK",
  "key18": "5tVLDvkBwJmeSd6WbTsDyNuDYuJQJJD7ciT7PQ1t1cCocQyvjSjQMenE6NHETaYgsDuZZBC8nsY5iQJbTHZkQhA1",
  "key19": "3SqLey63TFJipeXjhSKFJBkry89nd5c4DUA6q3Wp1W1khdTmQ1Cx9tJ5Bg6jFKDYLot1cA5LgbK9kBNr2br2coJm",
  "key20": "31WbLCB7w9xUH1qj15tkLgXiLsKLf8dj3s79nytoBDf3GbbiEi2bi3kZFo6DEB2XjhojCJuKy9XgFfNmdAx4nWCa",
  "key21": "4yKKzeMrcJ3fJtRHqgoCSthKhrp9FDMUGWixViKXunZcgut12KULqqGrUW5myDtyiETqwEUBGjbZvjHs5q1GzhHe",
  "key22": "4q6Wc6VPygzsuW4NMCkJknXHcYaN7VC3AQUKn3B4inJmBb4zRNUAhWYQ7VApnsGT6a2ZEszerD9eQHvYQ6pJ9Lb1",
  "key23": "3MhBpPNcFBPSDC5auuZGY6BgETuzeoVRoTdouTMaw9VHej18EgaALmDR5GADpHHFT1wJCqTdBsKjaRpTPVsqRoJs",
  "key24": "2SiaJ6FGPYmao6x26D8ZQBmgZWfNdYqtzVcWHDyqfGZCmcjTXc4yXsBNWj3SZQBdpjV4epVRu5fVFBsH6PKEqSFD",
  "key25": "3arGmHNvD19VFFjKAtLLNATjjNfi2tAeEGqRdVR4JG9uYiKWAY7PVbGKBecJmbTk4u2XdZTDXyUtnoXWKzajMP5i",
  "key26": "2cKSsw2cQwvnpUDyfzoXcvrJGuVYzfzn3A3BGcRArezkaeGsH4c8BXd92DcyPwbudJvZtFZnSzarJFzx8ksLZ45P",
  "key27": "2fTz3SGdGGscEnJ3NoiRDr1kLsBwodKG4NfM7yCgtmK4BCcj8n6gMfb9Q2tm4MNJ8bSjuPc1ePyajM4LJDUNLMCS",
  "key28": "298SfNxid3xV88fwUzEKPLzdJ5WZu6TCoQKjjwYqoH1EjwDSovnLLyrjwCwrrjU8xRr1WL3Ab6FuPvcYCB8CFfT8",
  "key29": "PhXqeiVTMT9ggsxXDJ6NWDS4URwtB9gha3pdKEZtXjcCcBxZHTg5jcvD7gTJcVUULydjHb2xxQmBiBHHXTRgoB1",
  "key30": "4tAmJHxcXbcFLXqgyrJjW4sCRrTx6Jszjg7YVzJ6U5AsAFUoyX92HaWmvgs5t1Php5j2hReXJSLN7MS8aQySZQoW",
  "key31": "2oc1VGB5acK2wVJ93Jy3hJEuMUNKFDSTsjkE1Y4bAAufQapEDKxFENRDYxLKfKY8ht6qcwSpebisvEh8ExEr8Vx4",
  "key32": "GHyUQCWd5Si1GAMKgRSm8z7w53J4tySvDhKFRhJMPFFWBBzs97tkSgYtg8qtbLWhTdXBSCz9oi31mchtYa1renS",
  "key33": "ojgSbj6wDNCnmDHRzpUSHRL6UyTEZUK8aQhb7fS82nMfB72NUDmQDh8sy6SQPveB5kHojJ5DcsVF3XWGPyzJEwn",
  "key34": "2KGobfT9W6LXxteFMEMyRMy2gNYcMuuUfrNu4EXMB3Gffn3GgX8z3UmkdpvtjfPx3F5CsEmd2CjJzfw1HrAZDLDD",
  "key35": "K7kDTZPPoGEdJmDVZsR65cofq1UrupWvAn7RpqbK5W18yhRMC49sEwBdrrvYdQzhqY2As8TXSfT68uLirrgY543",
  "key36": "58MsHngXKq6z4fppaDtRpt9THhYqjrv3ger3CDRQaDfpfMKm4qCqwU1fDJZNM16X6V82DVq4kMLxR6289erJLrkG",
  "key37": "4FuPvoaaVy2JKqcVvYjHCXpkVEPJhjaBh28dkGYLYfWV47VyJhBoUoM24WKKspAWxAtQVt1tUCCYeh6XCVeHk2f6",
  "key38": "UXdjDY4X6t8sAmbbKKN4xLMagYWr9bJWCz1iEyUjKyvvorJ1khy5zqbRKBGTbbiM6vZ2vtYucUaWywdp37Hg9zD",
  "key39": "2Ry2dskbGbScrJ5eCXVFuWHGSKNgBjWUq1dKmXqvEBRrcpposybKoBvTSDiJqTNSuhn75UMvPrc62kUB3e9QKqAV",
  "key40": "2GGdgDU15dd2YY3dL8PBwaf8nwVpndKStEjbqLyMn5gC9zcfTfFEnGaAVNJzheKsVCtL5bYVQdrYXX5hMh3F7KsC",
  "key41": "42LA4xxX6AK6iKJDieFe8GipwwZrrepcZdraEVE8D9QyUYmfonHRSZhoqCXVXEkFhj9oGEidHFH7471kKf7kqKHG"
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

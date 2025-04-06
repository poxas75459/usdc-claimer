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
    "3DGDdudLxntgMpktMCoP7Z8fnita5FYjgW2pWQqbDVmtGBn3XKDECQVEmLMySybdYzbTvyqESbrZqMaph61ESmcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UXprw6oRGpZDhnJRZXRxmHcLiM7LK25TGPeomeVT8kwnstDmK6NtQeFfSSf5wGtUud1CTA1hmitY5aizan6BYL",
  "key1": "2DJRYyzJSkMXmhiHsydKmr8zZ8svvaanS6i16jkMqTx38SqctNAKDYkjTqxqDAytPUfJfPD9PSVkkFfqxWTbi5Pn",
  "key2": "25pdE28JA4Dz8af7HXsHf4eLRWrwoZZrR4bqKzHyApB4LY8F1HQVVs6ZaRy3NLJoEUuEZMm624fpJh7zibUvtuMz",
  "key3": "29cP9DjN1K58Ph2WViV5Xbv7MTvsPN7CoEGJJcFSzQHRMsvNrehZQzczMAKSnsdYTJdw3WBKtxWjTwJfbyYHa59D",
  "key4": "4LyNzXmsgAD1EPKjrWtgoJ5a9tpPDKaPz8GpdA1MrTMJvXefYKL7bTwUb7iH71kcJ8TVae8PQPAVWnchHpkYr2RT",
  "key5": "3ip2potvEMddHgrLJ13ouvgBKUuYy7vGD5QPMRmh1zffyncANwqczKzP2TUaFjyzF9b7QrhyKpHreDxtiF1VJjF1",
  "key6": "3uYP9sbEP8ckTD8T9ucZTsXXyT7Sp16LCS3wdiPu24ho7f52kk6RsiT8Bcc4aNCCot3rAvEomYYfCERkDECJhSF4",
  "key7": "31hwkSoEJE9ytQzNbMcn5jCT67hsN42WEbMpMpMaGxLZPtYhM5Bqjg7dgboTRxmeyhUMJ3aeEmFwzQKwszcMyAbR",
  "key8": "RG5x2CfYmogJbJT5teSYyFECj6cPrtVw4RRHspByYSHqTj8BFqb7PrGupnoitB1Ar7JvQbyqsWAMUB9utKgiAfK",
  "key9": "QuL8v1o8GnSbtCA6NREroVqGnZF9EqPeHkrAHWasgHDwRQ9jsHHShYrRNceduJFMgsZSE3SFt69y3TNhHF33MQs",
  "key10": "5X8Rn1my8mVeVzbi42VVPZH2Bkmic9sfQzLCcUHVwbZav3dqLuC4tTnao5EZQtMZUqymByZM7sFTK52wDAcWdUJU",
  "key11": "2N1zcNADs7MHXxXJcJ7ntCJXaQQsvQ8boohshGFy2y7NDmjkkcYieUtkkhs1GoxsWZMqqcDgAUn9dWsxqg1ycUHi",
  "key12": "HcBv9Xmx2fEJsn1q4uEE4ZZNqVM9h8RfyCBdRhBBXwMs4EdpP4Qb9qdz3yV9M2ofor8VquTJrd5UbmBCabPLCFc",
  "key13": "8dLwamKNdsxNAJL5mtwUFUkkZULwb1LFsrog5PsYbwCRESpJzYLCKh4g2cHSAf6FAFFDJwUtD6kGcp71Q2HYtrX",
  "key14": "414Dy9LtK2bLo8exDVrKDSTzG5tHWK9uygt3rX91io2E1Yz6QZ8xpkW5ZK7uzfckcfNRkPgmmcrVh6v1vPi2iFRn",
  "key15": "MiBaK6ozm6iXvYY7FtFsKUM3JY4RpjauKC5zhbBcBQNuiBBcoX1cxr4jR1brGEWhLYz9om75fXtWa5BpXtZvhBu",
  "key16": "3NspuH2KenoCpM2bXC23YqZtGtQWNba1Nfrd5tZKQrJt62krKt53RTDENR8p7XmJnUDLFDAay8ZLnN6gyDqKNijE",
  "key17": "bi8nXCDqPqphT3z8wpf6kC9kAUepyT73egaL8tGnGVUD3cN3uypptZ9u9zck6y8sMfdWGoC7dzYDmwa9cUsJJmL",
  "key18": "2WhRpsyXGU25zjw9QgbGzixbP81dYhAtqv4BRedfmKbHpXnNCAN8vyf9wcxjoym3dTz5fbgsTZ7JGAwLULq2UzcT",
  "key19": "4T2Xwmi8B62UxpMn9K1Z48EYyGi7dBpHAt3bEBXhR5Gtcbzccb6inFG8S1s3qTUn1NzRcqqK4WkR92PFr6VfH8Kd",
  "key20": "3g1sy38XofNQzrYx2M3rL8ADddkqFNBWPizhNRCpb8gUr3Cs3Bcgydj3YyZnhu6nCJi6ropCWWDQfyjNmBPu7xGc",
  "key21": "4JU6Ntpo6j91VZv74TZMSKXXXKDpedfxyvrUDsjNnHBEBhbFReVhY7Sdzc6Kzt9E2K1aC3JajGyTLnJfgMAnntLn",
  "key22": "NFjRU6qh9DrMjbzJN3KUg5V1PdfHpABqvUiM1WJr2qd8Lh5ZTKjoSfCiQHLPBZ32TVfDQWkUwcBmN6R6sMwhuFs",
  "key23": "3LWKVFjWwtbQV2wsMd1P2DMQEppgCLMTaiMsGXCUKj5yPPKdHKwbTVkP9Lp6w4xbgpSefC2EhnjavsAKBQsDTfhC",
  "key24": "5kCNtNxxF6hjtJQ3eiFExHW3HDf2trjJfb2pWyxMFZtYi6b2KkDJ9AB53A7jh1zGoTj9TKMojPmhLwZ1d6bQ5RkA",
  "key25": "3E33KLFv12ND6KJgADf1hDZir4jkz6mX23qm4bJgJcDHsW1tLKk82uwS7W85BsoCZhyJNAXFhgRxcBErXg5WaDKR",
  "key26": "4bg4GBkXVkQk11VwcDy4KvYFkA2B795NdYyaRxsa4bUvdSVPk5m8dcmd6tUsGY3cGWLmmmV7KMez7iZon9fisv6S",
  "key27": "2tL3FUaTnnpJNDsVHDei7iAR83puf4vkfzoHbH2erT76UXa2a559NamzRc3X1vQmHwSGQcyc8yVnmrvvZrf1vo4H",
  "key28": "42XEwyHknUNUKumTqhiyt1cgB3Z1zG72kqX9eSEs58RY6Hm6sspRRD9TwBiKEgiTbLgpSUqrJHmFrkAgCSjTmKxM"
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

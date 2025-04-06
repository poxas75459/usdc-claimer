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
    "5riTRmhF8kFz311Tq6WTM5HN5qDwGzpe7AMPqYuW3GgUX134rheYqNxVhMbGTnoWB3Rn5eXmNQJhePgFeEEta2Zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eskYmZrwLtPsm2rVSAdoos5sYZ4KvctgTg7D4cqrXsgM4sDWeqsJWF3HifrULXtikRjRK2c2wUYfo2ajnzeNwyk",
  "key1": "3zz9nTNSWffxYjVGJHXA9vGhGkhEiSQHZsS4vgNmfUv6fsWfSMJJum9rsmBfjDufKnAecsH4CeVSq8VTnZw6wwMW",
  "key2": "3P4Y28LiaCgjjCfFJKB25jg2wRv1dbycZfbv3euDSfvfVm6fZzBN43w5Re8piwKADtT5NUAGJs5VfnkeDzyc5hSH",
  "key3": "eNdJiPa9HtbWfCuoR2TcbnKyZnxNoQvkqXfT4WH45gu2uBohEtD71bUdmGoDCN62Sp57ZSGFQM9exnS9cabfu9v",
  "key4": "4L7qgJzc4HstZAUTD3XrNuMuqqgcWt4kyuJH9s6VRTScFSMbLVeSm3N7RCXcF9QgP8HJhB3RRzcxpbGvFjMoc2SE",
  "key5": "63TMsah9EQKKFtV2vFW2Tz1khc2mn2JB4a4XPFN7QWriEb4TJnPaevAYG6JSu7wwG6tTMvcZ8bv3ykoajWXu4ikN",
  "key6": "uPjXmmbgpFF2JPjcHoTmFXzsh7hdBNHvC7qXY5FCy1pgRwWUbSdrZbBRfxyxkHJShyqTFscwtqUTXK83xJocCqR",
  "key7": "31h3vZD5UhNXKibGSJKJcaS8GbcM8ozhUtN6ktaU3GsokpWAJ5kPVwN7YizAU4mqNf6HJTURQepbuwcL54KMccqG",
  "key8": "5ZPWhj3NsfFZWVWsprWSHK6ng2WY919XpJ5h4kmzKvCTsEnKsdQYggzsSoEFYzDZfYZCPdhecwc9YmF7oaA4yR32",
  "key9": "3Jy3jrHaFwZ2QyHrrVjknLYD3gs7cHsF1yktepzxTz6Em8pmqSdAHU1A7jUZ83ANa9SzcR3gJwv7A7dXRaEpJxLv",
  "key10": "4LvJNTzd5RkA6PyG9XZxoQbFft8XVduBNUN8cFvkU8gupCLm8v5J5UC7kPB5kBYBFQrxPegdCxXrR5m1juu3CJah",
  "key11": "5UaxchojPvaGsVE4MoTwVk9knPzwWNcnfGGSR7DjPufYBbaHnSmE2dc3oNKdnAVtKMTspTTCbyKqS5dKmJUmq2XG",
  "key12": "47zA3i861AeWw2rFd3NATDq7BvhwJZ8mb484XH26rMoFT7Jt8Sx5daw6qm1rMj1LUvj6EWERz6XoACP72JxairvC",
  "key13": "32KDWn1EKWs2cjpLm2mmoSjBm1ehM5S8Qs6RiKs3qWnSTk63CyHeyEehG7GJEpXEDr3mdG3sdoGfAFpdhnhFwBeU",
  "key14": "2EUBdax99oKZg6G5CXzbTFETJUJsTuQAhuycMRKF2UaM5j5KRgE19EwkyNq31kVjTi6YdaqArFJ8aTLbmHAV4WP3",
  "key15": "5mgbgYN7nshT6eLrqnVkM96juNJGFidyoAJcQigoUhrd9HdtAJY27oqW82JoveD95jkMvpkjAEqYde1TjahnRYNx",
  "key16": "VDMJMn4F2qr6enXTYDZ6byL4DsGjx4f8RQP4CoYMJMcSpZBU1Gm9JTWL6Q1vc4kWDz4uw7afNfL3gycYix6h3hb",
  "key17": "3FXWW1Hse5RHBRXWFa8yGA7NiZcx86RenvmNZ6QE7mcxTVuifdpc8UjK2C5ctSqY9XwvkcrsR2vux5WhUJdiMKgu",
  "key18": "4wqzHrvq2UgB5yc4NbGojt7XBe149WikQ7WjwzPoCmRSzthKeAcx5YJC7akH2NX8S6Hnvz1wBLwqMc5HyDpmUQN5",
  "key19": "5PXmune7pmL9KhWXckKGShyxWyfWBQ5QLYkTbSC8JDbMjhw1aqahxXJVhpLp4mezoEzu8NzHBHmf1yvqS83yFGcX",
  "key20": "2FQhqqkyEgoW77Ab6TNDDqNT6xNr32NxGNSge7Qc4XyNKi7iWLbzyk4R1YdJFu3TuxdrAx8fTUXmR3pccCAyR7ra",
  "key21": "4wQKo2sxpypnPZQWN3mv3AzWAsFrX1LgKdxwL9VycDL7mLcwPcrdDRaSzNq8P2dm7pKXd66zbg545RzWGrrjBz1S",
  "key22": "j3fpvHwNfgobrp5BAgMAXfUk8yNdkt2mnGMhW7QwS63wxhuptiCrRfN8gjhYcgeqRrpbNszp96KeqhSNCkeNZbP",
  "key23": "8Av7hGvZPpbheCiMfqeKpyL4cgiWwMRGe4CFktj7xv4mQ4HvhSVE8u95CnGA1pJKyiiGf6bhUjL2RnBeXbaHxWL",
  "key24": "45ke5bQxak2dqd3QffYadptWKNqSxdZwRW2N2SJwqgsCTm2GNUGNnStwKqUtMVtCuxzpVbra54Bw8Q2uo4z5pdC7",
  "key25": "3gpL1d11fNiejKKnL2SaRdEF1scGSgQbDnEnmJmnZSKX85U9Dpq1ExhZHab1tXop7unXbwrXttXcB7BDFUhT1KSM",
  "key26": "3QpjXWjhxHCuCf6q4yxxZwmfHopZcnF7JBe9VvGMDUUncu6E9Lc1HJ8CBRwk58VfPcseuQN6SebgzS8kiKwTrQjS",
  "key27": "6zkUa39Mt9tRFdc5s9MUFqwY5DaVM2wMZPDBHTnsdaTJ94cAxhXz54xPFs4B9rEEskHmYzbpZSdoMHcL6kPvuHy",
  "key28": "5ZAia4uQVtZFWEL3BfYbk73TxWxCjJa8JAErL7exs7rJ1HHpeSJsgpj4C1VCy9w9Jp5AjEGeBhufNPKhPqzk39cc",
  "key29": "4YQSd2t1kFktmDDr4KycoMJqjvATbVUzRkoVnbSoRXxMW2M6vGTGyfDngcxDdzHA24w5sXbjoFPmiKG6mLJJNb2",
  "key30": "4fsgqmSqCakmPa3yEDdgmAF1tw9xXVDDWiSwog2YGdkZkUybX1FDaN9c1fdkom1nMYqnYZW1BmLz3cU62sqqrwMR",
  "key31": "54ytn4fERzi1K96rFiEWeuHJu6jL3d7VGMbdmJVM1zwTzyoWpkDYKZtqMqSGZNZt3wXMM8QqmDeHSdEqT9dJR2Wv",
  "key32": "XrkR63W4xoZHzhjdvm5Thnoo7syvvSh6MKW7K83zrSXKkRLSwBSDkn4WQiH18FXJer3dwV9WkWcnyM3GHSDv3Sr",
  "key33": "3oeUEZX6wpFZ2kGRfDodXNi6dXqB8PqxHpz5WEd3FZ99xbrA2rjqGbaLy8qzvpKJsDyx5QKQ64zZyQvGky6cfptZ",
  "key34": "51gmv9P4TZnEi3iQP5Kin7JjixiRWK7FDUbb96piVuzT3jJwXfsrSmuSy2NUEwm2VpFrb5GfWecr3z2w9UqADxZN",
  "key35": "pZv8R2r3KKjQxAzqJ9MZzjUJufNmG9dd6VfeRAzLL8mbEXAHXNgx5wTapsWuB64BazPAPMtMYEEjAud3MKeLoVs",
  "key36": "b83kERf1nqCiWh32sHL6DvSFDsXJnFRdGB16Dm4dmXePM6BNrPTFBXtVXmMFTc73bDetZmVQVktbLchWJdHGLMk",
  "key37": "4gyXTuHbR1JcMhNNFhm8hxjMKTjP2GgCEndFMiYykYwQRZBA1hjdxHXa8uW6epukG5J58i4Uucqk1Ftam2Eb6zXp",
  "key38": "5DwLLrKHnHupu4Vj64hxtvp2TAHMVcghsmZUrkGdauT6XE5gEodKif7rMVFcYb8Q6D52XrQpnKXVmDcYoEuWnvWM",
  "key39": "3xb8Cx85R6DqN4kFYHJPGXXKePvQuib1jGyAPG2EZSdFpfVNuJcvodAUdGjCPiydrbCe9crHqVGhb1wRqMP4PTfP",
  "key40": "2GNa3VrpoWoZr3bMTsRJurZ91YS6GYX2jNA6dTShbNVxXhq4Yc3XmLyH65Feb3Ee5X8n7kHD8MwvahqW1Ws1U7Lm",
  "key41": "22rPzkEwb7bVySvQxt8LiEGhzRnqJqbTtnJhcTKmShTQGggohS41usfeJ7yocsMooe1QXjCAuwhrnwsmdnQukssB",
  "key42": "5UWcvY3Wpdy4s1h9i4nvHN91xRTgfKJtgwQcu1rzYRGoavrhrhC1d1eq6bZeXrvGxQ7dzMpL9kajiQwuYuRyhpdy",
  "key43": "3NU9DQ7J35TaCz3PjtNUFWvhnMgCCKnPtWnigEkpqVtSYQNzkEo7TbjMuQrb98xJp1JT7XJ8cuqbtn5eS69TNte3",
  "key44": "4G8Vt7TYP4jRMU39cg7E6Skb7BaTw2pt3NrTXLp4JSGKdQAPKGCm1toCpRpnRXtD7zWnvAvNKSLt7pBwhJ7K7iyF"
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

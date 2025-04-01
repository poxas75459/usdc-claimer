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
    "4MT4N8CpRBuBmfuoyu4ZTQXfg5oxTtK6T43harAwPYag4X2uqhuTSj7dy4i5z7ARXa2SF4LrgvazVbCTWeDy336N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zoed71C5JEfRxyV5SHCoGP2KrZd76GbPeqHRrcFKEQT5VUdM6z3ZocMnuCK1wiPhN1pZu64q2rGwvPWCkwindVh",
  "key1": "4keWTwznRubUmZ5xXn1xbEECS6MYeoP4sGMAwtQ9rQ8mufNu7zqkfzdMydc5Pd7bDpWvMWZ84DqvMywCZNV5v9mX",
  "key2": "478GGJ7ZGA8QjGitMg8fQF1TzxMRHiLADmw6iQcU5oPTtqpMaHKvcGmeWpUBSWrVg7G3yhFEUjw7B5K5fqcHR8qR",
  "key3": "pUYkUrdESQFU8ozCSmEMPoxSQHiEQ2oCS35euugvYBcr53LL1vc7t6kcHdXCcbrMiQr6hJv9UAkKNQ3Zriq6maZ",
  "key4": "4x4Sn17t8qUosYNVTgfZF9dznrSeAGwf6bfdSAMJztkKgbF15FQhwyA8Dma7Ff2QKNDVw85MsFYobEY1x9GPQ2me",
  "key5": "LinN2v5qy7qbRcfVXxVZyKpzELWNLscpPS7muzWP3b7dRtYYfwnXVfAaotUEyuCg4AVN3ub1u3KPFMZp7Gp8PBU",
  "key6": "rkp2viQYi31k8pXGY2WJVjA3N4FvJXrzaXCPBPNaCn8FG9JbFYF875iB5KPjJA4Gstt6EtmEw5RjKVTbu5fF75J",
  "key7": "3Wi2GNgt398kqtJhHB4d7hcvL6xEzHsVCqiEoJyQDaGGXjqe4MfkoVhBve2aUHtVtNnT2q1NSMctw6w5wjrqYw9i",
  "key8": "2qABmj2xrqf6vdE7BnCpix5Qp91RfSuBq57W5XputWcdUEyHNYhBf7YvFbyvgys6V9Y5YssE1y3ZTuWDDB4yhMXs",
  "key9": "5FVzT1ndY8nzuWamaoMBheYogtwMqfBbNjVhbdGxxejG71rLNsA1yH7DUGckDSEyJkUPWUoQvxCAFG4t7PhXTaD8",
  "key10": "JUwkcsYstLYnoxRGqbAn7sVR6XRqGMYbRHuiy6JZzob3LtsiTX4oXmJ5GS2M9Bnyid2NcG6mWbLkGkYx9LN7cQ5",
  "key11": "36WLCHpGRHw2FT7QezrvcoriXrz4yXSzTjnXbAAf2EqxdHXiuGk3CnAFhVWTNrnVYEma7bXmvSXh4q5ZtA9zmc2i",
  "key12": "4K5ZBvv8JRFyC9wj3VKFerAUbdeqB71PhW8V4if4L9fxACpezjqWaS7ktjucaxN2urm4a95CwVaHACyZ8uG3sTxv",
  "key13": "5sQSGZeGXSmfPaVn3irSYjBJHmwFovJbsX9zbR3t8UspmM23kYL7L55LdY86PqtCxBzwuYBgiUG8JYugSU1kmMsE",
  "key14": "4LqPTtBzwjMDhBPMVfE3foNWFGU38U3kiy2j7q2qn7d3Ha7q5RH4zjhbKsomRc6RVt1nL7MK52ZBMMVkY2Js4e1S",
  "key15": "57UZhP8MfEocykndkpnuFWF5agWL5yXr2E8DcZ4d1Lgu4y9jAzbcvHR5oz4BFHbJEY6DiW1iGq3QPFRKfzE3mwWz",
  "key16": "2Ny6JDGJamhU5hAnMRDGHYrhpXrZtADcJokbFTP7wkZHsRieoaEBppi3CG7oo8kvRjHviYFu9134pfeuFB1Sv1BB",
  "key17": "a9vgqPiB3JGnr1dJYbRn8fGHfbk9zKib3KtJArjNaGRmiKy4fFmpBXGh8HRsnugxMm3DdhJntSPX1pVxXVcpvMb",
  "key18": "2WJZ2YUP4tDaJqhbhm4JoA7RAhu5fkHnd7Tu5cbjSJ3vTUotyQ1CpVKoF8FAix5PEoiMagm1RxGamgj9WSUaXZ81",
  "key19": "ME7R5J4nF21f5pwvHy2XJhEeqZMvyryztUt6DWMRBdHYEJ8HFXqiXqghruqsm3N3uA36J5oBSLYqkYkjxXLab5e",
  "key20": "4cnsonpG6p98uca6cJcnYBQW4Z53LyBYMSfj4KH7jcAxuxvoBdkvGupLSEd6XJpR7fCa8AEr4wg6PWWy6zd3CbUw",
  "key21": "5571sJ3CHDrLnGVMfXEYSM1em4PEaoBcQTeUV7pWZfoXPjfPNi3soks4Vvt5FCDLDnntjvTwYyUipQg9cJx8mvGF",
  "key22": "4CAtpM1mtwS6pcb8LyEQZZUsqU1CcdBBPEGcGeMArfDNGmYhbdTc7UK3zwP7M95yGoc7ABu1niA3GPFZtSFZUBWB",
  "key23": "2Lk5XL4YXxohYtXZjoeHjis6cVZPRd538NeBvMFsYxjYKg7jJvp2HEEyuMoFAD9U7gGDELxWHAkSmEDBFbAfP7yj",
  "key24": "4u3sqosF81ykriKLvJqcb2514L5i44ChkfeKcXdYR9C87C3MJHsZgdiud41iganJtf5ioq1mQRJiTqZwQfkHE1Rr",
  "key25": "33FUwVFDXJDvXPhNvthQhsJ2vcMYSsMZ2ais9FkMFMvebaMrVQBQSg4Q5FyHcEL2K48RyMhD6F2ecEGzwQYX5V4P",
  "key26": "5njLcXfiCgeZSsE1i6eqesnkngnmWDgiFsyqrzNjB5oS2D7FVKTeDdtC8F7972FyAUW5FwD6LMA3DUA1H23nCE5U",
  "key27": "4G2FyUgq1JkqSpa2ExRkQY2CqjCoZLfRwqZ5ns1gj9f5Pyy2eP4pQPCCkQ2S8wpbSGBmQLecNs4gmfosJU7BqYhT",
  "key28": "2fpGW29FkKPdo4TJiLU84NxZ2JtmP2t2BUFv6W96YCo9YuREeLfGvnTdx3iXUqiaquYQsbAjMGEYdEGdxnNCUdwW",
  "key29": "2Eoy4qmYAmLUw6i32ZcEqcU26HDpbXhC3QFEhVAC1ym4Ez9sTLhawSB5DDKACpCmXZu9L5ixQwKvjEMJ4GUpuS6H",
  "key30": "5K34spVCwkaLzJf33LNdrEHc1rPuZhcq6rNbC6gPmBNLfqbMmMUevyAy58aCRthz1bZF7oXLrGVA3zUYYPAmzkn3",
  "key31": "2aZuddBRYoLmqupyfek8R5GRn8eDQ9riSymiARR4GMcjaMDW3jRsfm85aAHuPgzmYWAWjcuS5a9k5Z2ngN3Yq2hj",
  "key32": "2KvjSzcA41hG81qeUBCWN8sN56qQAwM4jPPAQVB3ndrcr9vP8nRm26c3tRp2ejTwvXo7oFvpKGZ5bxUK3LdNSnW7",
  "key33": "66aJ5oa45kEnjbPVQpNYNQzYo9fam3YD3hUv4HDk6xJsyKxJLWxwEUWTdhzfpzceiE1Z5d6zZsVUTcNyXrgCtLHS",
  "key34": "21Djo9CdSQX4b17MtgExY7DBruUaNg43f2SWbCzuRw29co9V7HZzYRuFKVPTpxHEXgJU7iUPUDrhtn9rYgV3jyvc",
  "key35": "4faXfRN2ktz7PNPkKwyzjuEJFYVcM1Bdk9m54ZAhNVgyYVhRHDc4adLWfWSm2FmpXpAEsQuFrRNqMSZ93fw8NYU9",
  "key36": "4sLfETCz2jgtean9Q3zQuhTqFLtokrih1vQ6bqRcAAxUBXNkyNyCQMXoQMMFxsU3pTD6YN34gSrpxRPDqeaAR1Bb",
  "key37": "5VzHvytu6CJwRk6nFRV1pHqRVftySN17oyxUUxZPXJNWyFSsKmMp39MPe8YTn5WP9edunUkC67LuSdEc1A6gtovL",
  "key38": "4yfuUeyf4zf3egzdrqTQSsycYBytUNnHU6pTN3BA1CM653smdLVJS8hnCDLVS8oETVcUyixdeGLPnW7NSqsZSZJg"
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

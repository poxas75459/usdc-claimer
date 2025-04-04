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
    "5zTNetAHFUrvaUUk3bkozSQNLWrkcHgMurMfVaoVSAgLMM7S78a5djenR2BV2KXiFDKfs1z8ZtzCqUf5BeoZZJJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VobNo1qY4goxY91Qteuqh3c5P96npQWK4ThzTwKU8knEgEYDxNCWidAdBRw8tJPsuWuCfJ24SmMtHKUjBBBhTFh",
  "key1": "3FtoyNb7fkP7Wo7KpEfZatnm3EfuXX4Qn8rKgXGCePFWEK5pWZqUMctPURG1GHJcZJX99RqNEQT8HBfrms1Ts1o6",
  "key2": "616dzmQLjdGqGBJwL4nXNkp1xysKJs3DvHMzspKDo4sNbFDhiF4jDoxA4jMDxvrBsCAn5b9ScPnfjt5rsNNAoW15",
  "key3": "28HVsvhsVFSxgTkYoQk8PGuUXruHXy89NCmW2GkBHVk2kofYSdYecJfgzDEyG6MmRjPgqUpXzN2Copqnqpmj2PhK",
  "key4": "zxeL39LbBxKcM48WfvCREtzTRZsvr8AWjR34W5wqquand5wMGoizHq9Rj4fbfDAovLPeEYPFqH32kmzCX22ay85",
  "key5": "5EYmoeU44VAMKRdnfLtn3mZMxGSn2hrZzrvTLuzfKrirahVJhBwSkfVzJQ56N8Zz8QjGqzhssr1Tn2AwTSdJoqFn",
  "key6": "4YhR9Zfq9HEgy1KeDHn9Vca9Sx5m9YANM9dnr9KrWU1is4bWa8FAc5KYqT99PD3wohXCGWqKzXskK72Dy1HhDySV",
  "key7": "2AimHe1qDUKchxrC32DWWo6JV5Y2BQg544GnciziX6qZDV272hHDTXUAa9XQpgrPj1LLNf7pWK2xahZepVGARxTr",
  "key8": "3omsqnbvJTYUFA2rSdSxVe34A3ZQbxkHRYjxfJWXU4DX2GL6dfKTS8oJEyt85AB3dFpdTS43KgyVbamdCf2VQzbo",
  "key9": "67SmKDnUxEX3Dhqxq6pMU7ptRuZ9Cz6SBDAGzuqbx1h1nGxh95G7cHm6eUwnTVygMAtE1FPe5nUbJ1BjjShRtDL7",
  "key10": "27aVQxx39m9FNfotVy4DCFBSquwh1iUfU3XuzQAee6r5H2UhFTDaqNMsXePiCxrqtXu43i6cyJ3rS8738hVXqaxa",
  "key11": "29QFsNsk9juqEcBgtD3ma1goP4LSqCwZxaCx1gnFbPZgWPsKxtPi5UhFybVhSPSYNu9HnrStfV1vD2QNAgSiquFZ",
  "key12": "2Q7LrqqsFL9Y7bwQqgUgWfsEJNWQuecL4BfTY5UU8HdT5e57x9XV8JwmmsdjrdzPdGZBjyFbbT17f4VbxRGjWtVz",
  "key13": "57vRvgFnYfH6MkNg7HsxsJ9xVFSwaJp39aPcvGUWdHHWiNmJ4gPwLzePHZ8EY3vffpg6nrHSpb9SbTr6jcAiutEP",
  "key14": "3bLJx67EDvGf4t63M8cgnyMR5hPV7cUs5n126aMQDu6tuyFZPJosgz3AurTUAsWKgHzsvJoUBX4BfRtPaE8A2f7",
  "key15": "Z9wxcMqdoLeZXyjhjh8g95SWSq7V6D6MEuniKhGfZuwhZrwZvZvexM4BRxp58MDzTxKGw139m18tpksYRKSHVwT",
  "key16": "FPv6cvnN3qHrXbhTvfD28gsTDhiXx1kgCSQaJy6ERh67TL6bVmt1CwBkNKmXfP3c8csskigCdFEdBJEi4AuiZHQ",
  "key17": "5n7DUBcZY8ZwG7B653HenfXxqBdpVWdaGbgm6i2rPA8uiXp3AxLHwtR77FeHPLkiJHXgh8Q81ctqoLn9BQWQHttc",
  "key18": "4SHZPavnh5DWKit2qXQi9xhNPRFCxQaX77fXfeKGBc9Wdr7LEAJAFQnvKdxdZNaEG4bLv9DDYkQ6qcm2FMt7DSPk",
  "key19": "74D3w2dGbhwkdEpDyCg1B6nkzSswuTP9xnPqGNLADLA2S3o4nMgRwPqozdhEys2rmvJy9eN2n8RViBaUyQXsGnx",
  "key20": "4WWy3A14q3ynQP6CYcswC6F6ZF1AgaZeuEKeYrQArni5rL1oPnUSse9R79V2tir24Q1tijrKqRKf5Kyr2oiH6GzU",
  "key21": "qG2vdnrDU3bvHN3n8Vjq3ZjZZjZz32JfGFTqn6xLavkKgfbLKXodsicoG4NY6rrcs1KFkXSj8jLmcu3zPUqvdDL",
  "key22": "25gzXwC3o6P1iYKHUm1qWqU9qfy81JaVsBEvzJkr2hpZk8PSxKiFL8G7C51N9PAqueAMuixofDtzmswQVtUDhb3r",
  "key23": "5iVREju6xsMG46Rj6kT9amxVGqve6rjeicbn9cPnGHdQwrv3TxBAvswswDnynP2yREsmaP7xTRjidtezNaTTEFwe",
  "key24": "2cT4ACpdSwPyUwLwLNivMjfdBLb3EwTxFxr7Yq2vw9GT8maWPD1Uv8w7ZU7WZUfGAP3t1x9X9PY4TkmKNLmdYkd9",
  "key25": "45cFKwEzyvZSH5jfdHqMwTgsL2qkvzuHmmNTwe58tpQVKFR9aUcxvEJNPzJKdMGbzZBYPMSBX4qXjZqJrFTPiCe8",
  "key26": "TK1scvEdytt8mW6Wrsng53GxKaAGtTmMpgjGyaaR7BDjiq15pMj5H7ct7pcQQ17EcNC2xzdEPhLgcPNS55P8ALx",
  "key27": "3i5mdT6LGS4JiJEESoH7V6tWfs7DJ4KGvmEwE8DCGd3E9igW1YTZw85ag5o1XJ2ZpsFc3CiVR8MCDkE12LS8ZJyg",
  "key28": "4S1vGX9sVPSbKgaJ5HSPBhgGY3xKBf47fjmqAsLZM8UAxkeaXoa5oeQfPa5bPDycZwqLShBigZY6aURjxkVpN7Pv"
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

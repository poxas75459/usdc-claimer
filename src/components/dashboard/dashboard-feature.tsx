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
    "2TCTxvRoYYeYziojSPrjQBGDTSJVwycnxsoRL6Qw88EHyEAADBjpQKcYs2znWbDxF6Ueu8mNAv336BBuu7odfRLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aUfXhKBE4beJswwKezPnxHdzpTmeYBnSEvDvHegJw8EPQjvN6HywM5chg6MMTjdkPrGKJoePW6BdLug87zdDzjJ",
  "key1": "3DWocXZE2vZNeztVoD74Jtkr4gWR31GEr7v2aMnjjPz6CxqEdU8TsKDhPd5oJwj1J6P4Fw8vzk5mvMsgKyuoh9td",
  "key2": "2xqW5vJ1bVJEPk9sMqXfhbyR8Xt3eVrgoc7ctb7P4rpvrBZSP5nEMEytuuby4vPUSDkdoPM7G8SaM5kSda1PpY7h",
  "key3": "4Xbg6Vp11gyDt1R31YENpxmTssJf6TrYNHqR9hYGVYBHdR6JwRt7HqqNAMjwoC5NZLoUabxddr3jgNATLVi1Qxw1",
  "key4": "3XZnJCZdTcf17U61uVnKiM3cz2VqsgPxo7YtrbHxkzrb7oor1Qo1QZ24d4TEUqwz6ZWwSjtSTZ9UDSjXufa6NiXN",
  "key5": "3189bKNZfseV6YiERWrzAW66aCYARs7Mn6iUY954xYfpBsX8Rx4EQNssgVCw5PjpstAD1yW6QwaPpFkBBhuX5H7e",
  "key6": "4pcHiBhvVkhQnjw2WvsuPe8CxN4LTUau16kZ9TAkDw7cHaGrLW1t8h91bse2ZaXw7vPBHStWsRjmWWatwBfAUcKX",
  "key7": "5TcCJGF3j6q6FKLUqXSjfwk8kcHLXTPecbVVpoJvKexHZVSVeq9GyyXkxfYbDyztsmzyGQsDBRV7f1QzchzuLV4W",
  "key8": "47QN4qKxFqhGgiNWQUa2mxyRY277FgivgVPaDeXpvxdedqpdtZ6tarGw5CPmBHUKS9xy5sa1gUTiaigun9qU3mG7",
  "key9": "47aGhAjUBec7sFBmUviYpHiEPV1oYvciPnjv4tZc9xUnLSgLp77PFCLdKiXqe5XQvEeU4b75FpGxaCaUGMRcNauQ",
  "key10": "3dZtMKBEcR18iU1Y1nrqDDRdxwTcPD729H5FSw5iV2xmWMLvoLpEV5HAUJBCS46gMSSLux3zhXX7oDM1uNJCkVnd",
  "key11": "sqcZKuyWstpG3HQuHRvJxYWKErLrgszcbuicWrQi8JhEhwBDa2hCY8BDwUgAaeysnvV6qXPtE5TAEVs2Mx1qwch",
  "key12": "2TzBhaadXcbmnfQSfZa88Y6he4QYQwRcWMjzyjSSSAdGbmXSHyWsM6uHZUToDzo5XYqd7o6FgkMEDYb7FugZG1K3",
  "key13": "5cH7wCBTHC7FmfB5QWJ4W8EkL2XV8jTgdH3sTbcBpFSeBnE6LhzxSeYXzEtAcRd1vLLZUT7NcJmp3MG6eYPhD4m2",
  "key14": "ZNfN6aesT8TSzBuC7nmaTRRvsLQDXR2jnPP3NmB83dCSCMKZF15HdHaaV1gF9PUrkLVGyGwdettfmhWaWe8JQ6B",
  "key15": "2Ef76H2e2YBNLLeX1jc6Z3tZzXLfKadBHjFu7zWcruaq1ijZV8z38suaxKknnArjwifiF2FPcFEvt6hBBZNQPrh",
  "key16": "525tEWBHkwUdrao8A47nszKXGA4f426bYfuiGZN5Ct4CdDq4MHpU6whM3R8c7iFoAmEMnSR7nFJBUp2JsRF6dFpa",
  "key17": "4kQJ217U12mntg8DoZRjZLaUiUJRG1JiXZkAXijGs5kwxxSfYfhb76yAGhYaBqSd6ENVBnb2QMyaaJMjKqbAAaUg",
  "key18": "3zrC1d8viVvB7oekH4m75HEfVA485xqi7hPzHwm4mUXGsYgcd9LmuBv3TCybaH1nyJ18nPvL9hTwTRjti2Y9Ktzk",
  "key19": "33bQYPGfg83UasinRDL1N77Bbohh7kjQ9i7GyZmuTHbWVtdqB6sBzszFYKWTCJQ1fZgr977HNjXXjZcF5EuzfXWX",
  "key20": "4mENiugqWVkVX2VGNoVVKL7zorWwE8QrH13pU4pyYMFxL6vSb1kF9MYEgFZwSJm1UFfaDS5Xn5QJVMKvMpqn4n54",
  "key21": "4kM7W9KeT1qPUzaQuAyffTyni4R5yxF9CjeC2gBQRNNxwDpkBkwELKzTdkXUQZ36sZw8tEnP463dV8qsirgf9gTM",
  "key22": "5KHdTJjRRhPT2Ai8V8EdyCVKYRZtDZixmFARF3kUxHNnoARxmo9HpS2Bi4taUC7WK7tiq2cQcb1v923U1Fi5Jz9h",
  "key23": "6Zm4E7yQen7PefiTZQRCUAHUcDXNicgWCkuri5JSNUpo852eKbWB5ty5yrYskF6pTzWnBbEJifMYzoArbiRAuWv",
  "key24": "2sVAmpamkLmnCQkMDsPBsVwQQcjae2hWuFh6dUbWetoNa1vZkVsgqFYypdLtRqwZSQNBuRaVcLVzzgdK6GXi3uC5",
  "key25": "5XmSTTw2a63tY3WvBgxriWUupgaMqEoVDAwdniVNLVKjnFWPx8FAa3fB9A64SCQFfJvsxv5QbMyaMVPZ37x6SFuD"
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

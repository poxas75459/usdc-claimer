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
    "2NJTjwY87V12qiAKcZ4hAMmHEW3tvhxLzznWLo1Ra42tK4ADs3CSSUVVDkfXGiDC5UyaJeNgWh7SyvjmyXYM1mHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26krj5SX7i2XyjGZCpHmKXVcLZDmehqLdbcvXw3A7PqWW4ngGyBRFXziPTqiqaq296tY8x3QgrJuVUbHRqP6dtwZ",
  "key1": "5U67o5V5jzs7DYxHXrfCgKLaKi3X5NNgYzX4eG3jXv7KemCmdg7h6uefakzNVLFrFm1rah2RDBprrKGLEFkb1iY8",
  "key2": "5f8tLiFfzFuPEUYCGowBniY83QT4KKpcHBCUC5EBHfGgN4Kn9vHiLDK5GJZbua9yrQ6YBfUmHR7RsbPVVaCXy4Gg",
  "key3": "2Cw25GwRWKA3Szf2Q1vxUoXagVM9NcpcTSg4CbeX75WFGHheKuxvJpvdbc5xauNRzDacY4MvsURg4CBKZp7PjDWD",
  "key4": "2mXxW7CEEjw8roCzNKM196qytysCkUYyxfbDE1TjBERkqd78SJnD5XtLLUmGmxgk1aaYbhopoc6DzZsq9qB5Vbh1",
  "key5": "2wBnUVL357kFpxDf1e4AFZTjKd1hJ6kPPPdX66UnhxLkFQMzfWkjEVBausENERSkTuQzhcZPrugzA81Hh2FQMoXW",
  "key6": "2kKCSWkeGQPTp6oSsE9LnvP1a651FtsadtnjrMkwBRAFwYWHNuKAR5Jh7tym7TrwX8FvkJzms3w4qdpJ75FGeFmu",
  "key7": "P5gg3JEdeDs6427vh56NZFSYoLCxs7E8oFKktEmPcN3n4VaZsviUiYdfthy97rMeeMeyySpQFLyunpQMNCU7dQY",
  "key8": "36na85Cow1UPykLZc6ioVKwVnBqR42nsaipJyViYMWPoLGBwkdKmRpZncP9uwFJbA8DgX2kQpyCtzgkX1uevuqnT",
  "key9": "fnhEQKBVm8XCVbg6WmNp6deWu1e3u4pRoudY8rAdWaMBJfMBA9FKU1dD78AJJFSkCUH2yamcCg1GA2ioM99Drqm",
  "key10": "2chgP5BdkZdy5SVSWFyGsCB1Xyk6MmUGEF1rU1bWk74Yo5T1s1xECi7wSFGHoAHXZp6sFpuTC14ccfr9CopsLdy6",
  "key11": "55Wh6sSciff7B1o7g3LULCFHvWE2idKghdmuvgdZM8KFZmNf4VtBPMADTdB6HV5jk7qKDgPX3QKrZxTceXLGth9B",
  "key12": "3qn5KYtHQuM47QzJeQFKD6YXP2uPK4s4VtCEL7X1wmBNeYWtPwSfwZcZxXrE97hSLtE7n1DHTdL7ThSDULitQUto",
  "key13": "2VsznwFeDgQnqfCXE2jhitgp1HfmjjwRaCvxSBpoQyck3o3HoJE4C8nHXEy4hLYGbBBMQgYKnvsTXyL9VSwjHd2i",
  "key14": "5GJrwDMiqDKZuH3vi9j2EZYXwgnX4R3wFWCNZGhLKK5cqVT9Zc7HhhRqfBzj4uRoXqVQv8E9ntVEaGrtJWDxfrA7",
  "key15": "1kVgQq339zQhJ1msM6YcMQdj18zfzDfd9WFpC1RmRLNypxtS3rgNM1GHCSvtTXtSeiRpZrGaDoZ6pS1tqQczQaT",
  "key16": "3PzLa9zXuGio94qyoof2zzL6UVSiRovTB1KnEF9FFdmV1LJoyczn6gToQFDkaX3Z2yDaxrQ6k7ZJU67P8c9hfNp",
  "key17": "53QYxCJq35n3fZ6ADbdTPoT121XEY8YEtUDZU4inHpsMmLxKXrq9MQDd4ZwJy1a8xXNYPT3SjUfj92wPho5hJgch",
  "key18": "1kwMBvTTuAeg4n9ihUwaQx2LJqkBh6r7FyzYbE2GDfaheEVU5qp4AA6iRuXpbwDJuUL5kzKpxA7kqf2rUCZfS4G",
  "key19": "5Bfv5c7XL2iyE2FmMo1no4DuL1vN7PGWLZ1ZjmRfxo5cyZv7rUnkhUrJNKLWdg1kzwcvtDmocx8zCET5ecow9JgE",
  "key20": "mbAwMG3GSDJvQMqJREMrwswW1EF1jM8go382oRhWaV25FuEReEAWAK1V2pJQQxKPdZLrTgRRve7yGuCXAphyLFy",
  "key21": "5o22QtZ33ojgkEKTEsCEVjtdNpCFwqhgKT3eSvmRZcZHjJfQa692RsLsyyfmonZNTQBxMAHQ9K793bTwoHLC2BjH",
  "key22": "3si2BxidJ3Qdx7z4UdQiu6SCvJ2FuVTEDpXNHm1LzCwwDbV5bX2ALTBCtcEAFHKRnEhxAiiTmp32ttB23dzxwxey",
  "key23": "2h22KWZJD4Leq6vHvKX1pa1fKaQTQinwX34i1pNdkt5qxgk6E4uTdCtaKGnW35qJXs9zhLiqfeiJvyHNnDQb1mdm",
  "key24": "29C3Tsr3spNGiUijnP1jMhht42zFh2EPcZ5zXrXeTNBq5Fy9M5R3WBxkJzzisx8SgS8xAEjhGtB8pHbiJMhUDQcR",
  "key25": "4ViCz4LN7r3fTXURAqXW87AsgHaNmiVkLV5YNKgWz8z5e4Jyu6pznSBVVWRmmDoLoF2rbmT8sPP81F3oAT7YsHmp",
  "key26": "4ShToAmN6ck58MLmhAWkpTqYeeEBLbbtnSKS994gWk5jLEmqzSE4M9ppZkeZaWKvfCh4nuvi1e9idQembdwAeSNa",
  "key27": "4JGm7KAT36koPm6R9uzKG6FH6ccMDsDA4LZ2CqQuEbsZPAiEG2uvTFn7bXUHAJmhYGMCU7ZzDFW6L6wrB9rYbdGp",
  "key28": "2LsFnZZiL5qjzeR7fERdaa2CS9cSBm75wcdfLMv3djDUfULBRXEPp1KdxodKceQgLipMFUzyu4hrcF1XLYr69ADU",
  "key29": "MZ7WjHSZMciMkGrJhgicuVwC1jQxqoe52XU29aJULWm5nbpdP6296AibAKrPtRd2F68xePCHdx7W7W59vG8FNHQ",
  "key30": "4TyDM1Us5hv4uvCrwZsDLjkHfagTLVgSJdLxhwn4UcrXMLiuhvjmmuokNnL6DgTScpEwcQ1NYoB3aeWmVZApT1ou",
  "key31": "3EeoM5F4t73CTHhq13R2fGGYRqhzJYNhNqU4nc7TSJWMGXoF7NHeif1psDnG1ffm5wGCJKXNriakJChhSc7xFv2r"
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

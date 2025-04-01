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
    "gwoEvErmVJTKT4aJ7BZnPqiBiMZ5yMykdngNboxSExpsBPJsiE8nmdhpCcfWM47JEdUv6qU3ifmN37vUSrKo7Es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZmrX18FCyxPdU18w1xgCv7VdVuMD1U6B1uBYnJ5xd5UXo6apmCLVRjZ7TK37cyxfAKYoYQnUBR9s6XbSZ25D6Q",
  "key1": "2HJvBGP4nDHmBtCSqNmzhYfTcLJy8ZN7GLqMfa2qBY1z2PyGHdBNgV4bFDesYp2G6m56gJkjcGX1uusdq2brfpdG",
  "key2": "5yn7jmLLCctvchwiWLHkmVKdMXkT6V8spR2gZEn9VEHBwnVkaUUxamTPXceGJLtjWDEmvnUZ3vntpuLShFpHpRLq",
  "key3": "3dUNnqx83du6uiKZsYhFzygJyNmCp7whQkutQTRpa1WdHjovxw4i7PrRRtG7WLZR3qncq9bnxswVak2KvmGrwfg4",
  "key4": "Pdc3CGnZy1PSShKf5fqQhW5VQWcrQwUafNcSQPfSv5LZHQgq4uf1VgusfKwJvQ47LRJvzopYbvPc65XJgUZe9ec",
  "key5": "48KucSmU9BsUuWqsePu5CaAkq8bpHpzzQXEkD6KQ3wQb2WeV8baTCragDKqKcJZaPuSnGJPnaTyfJasRRCbuyHZE",
  "key6": "3qZUgNLgvL9cVfrcmS734U8k6Mcv8V3EZNAYFgxxDLjBKzGKXzTqsFw8677zsmnjZsWPmfobBcvus6A6azAyh75r",
  "key7": "5RaJzv37twzNTNjyE6mjGxhSuxGk1UPM6NYmhaN7bhSbfcmd8rPgFrs3Kz8L4Q8wj1G6Xw3HLHwQ1NoXagGTqnyq",
  "key8": "5gUgLkKYA3bLKEjtgqRAuNofbCQ1xrBWDdKMBZkiYCiEkkqAvGkXkPFX1H4TnhcQuKUNSZS6Ua7MX9SytPR5sPVa",
  "key9": "5R875tFVt8N3chD7MTDHFcCVKxFr3dvuEg2KqkuDykkwgovpWvoFVRkMp8USQTdkWTuSbgUZw6dGhduNrY21XUAo",
  "key10": "2HrtN9gEUFxWrtUyre6Dhha52vFSC31W73LqhAvfuNA31U23UXMf4jLRNijPYq9wj5LtstkmZdh13radn2abaaKj",
  "key11": "4cbrSriuM8ebYf7DNyQ5LtmXj1Z1uTrBQ2Us7AgBmuQKNLqdiHnaXbg9RqKtA5kGB4Rn4MkTQetnbGGnGhWNSTp7",
  "key12": "sztegiNsN4rB26gmfxfSzqKxoQ1CUDQBZfLpbB5RHWoK8Xt4mAM9adsJSYLPuZgibwWxfrJNXwYzcGZwzwNuFTn",
  "key13": "Z1zHb9ddkr61gnqG6sVKthzkRzJyep23YAYSDwB17TxGNzhnTooJQAku7o5B7jyVcRK6ZCGG5JVYSHjsY5yoKQA",
  "key14": "ezKhagdLXDvZ8yg9GPkxE6AsxghfeEduqZ5KBHZ4Ajmrwr2GohRV4hvVAcgnB5Zqct4YKHX6Vqx7u9c79VjQUSe",
  "key15": "FAaXbxXhvWeuKADoJ8KcUTicvohAxXSGCSrEBHyUkryVLMqKjF45VEDtxcvUqNWdwjHpYotYxnS4gqRHb8uckbW",
  "key16": "Hef196m4pq3EZ24PnNsjqiCwcJuVB2dB1MjzcxY3tS5uFt2852pvoTreDUwNgoRxX2qGn4rjGfNGbJQCvavcFBy",
  "key17": "3mkn6dUEuARjgNKvTL6NPJF3g7oaWG2uU9HdN6geeVdwb6tRpbVmoEwEENoviauqNYE1M7XUy4YDMsM9bhzi6dnR",
  "key18": "P2gUTVzyCSk3EWSiocSXCTdWnKY2tBwM5Ny68Sazc7C6KkXVvrEi1NrgKTXNJeHLhVatD6zv5cugkEY6dcwovQj",
  "key19": "uHntbQYTgsB6zqHegqmcPvEtWs939VsP8T3bHopwMsezVt2X1UJ4viRM6TKtGUoBU8gTvxkPPycTFDV1PLmnWCK",
  "key20": "Ea8ZzdTc6NGJ8yyko3rZAsvV7m1ojfjkwgTBMGw2CVSnH4qgo9YeadM6D3gkPjpQWFCtqpdEPBZLff1De5cGEqj",
  "key21": "z2UnNkR6Joup2oMRdEPzvwm4Da68XqVLNQ7pY981ZLcYy8QPHPQ16goTFSLys1AkzLuNcYpPJ52abJsrWzX8C3q",
  "key22": "5cTnpnabgCn2nGSt6pj1sUNzeAWkBtEZhstsGy86HoD9LTEYRGf6K9JhMh6Roizd2XUbrYcUyNMGAQBCK7PvGndg",
  "key23": "2Spkrasipwpn1M3nPMS7TkgKagHmAG3q73nvxUgRKNzXiNW8LiZnDmDqHGnuXpAGdGdbkEMpPCecAA95MMoErpQ4",
  "key24": "2yU4ih1UQnZ7pZXwVGjHD9sETksMxGxzcvmJQkvYwVfmTqYLk22ypzpZCCJmv5WubidbqVCQqs8nerkC23vHKy9H",
  "key25": "2uVYtePWvNyi9CAeaBrXbQ6dVHWeepDAa7Me3VJQPZsqKB91sL8H4e8suwU9eMRH2dToU6MFupnixs5oD7cJ4Fhb",
  "key26": "3sMUD2dSZZWKt6pFVjt1vQBtomwXfKBnC5NqpWBdA6zZsqLDz8m6ZgMQFgr3dvYf8XQhyNGggkbxPj516DAzoxT4",
  "key27": "CuTcbBxEHtwygZMDcZXTqZckV5u5gARtciitsWGY9xPbJNHrifEZUymD3P9b5F6Sk7habXKksdfHhUDLC3ZDpv3",
  "key28": "mijHxQSEpJfEwLzhrwqwKTpiomYQAYqc3TKDVacrTi46Qn96PQXNBtkqasLfqAsPnU24ZjvTtxz73eUme8vfYwt"
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

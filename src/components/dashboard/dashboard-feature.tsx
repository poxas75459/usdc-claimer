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
    "3cFZdEpcY6RZNAww2JSMSr6hz496BBjD7sWab5J6Kz7WWiHqVoQcxrjDpTh8EffwyPZmUKK2H7kYbikcNyLGSkoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpgpNdNykTSgybG4tQS9HJVsLDLgei4ug3FbSv5yRVwgRjk5UR7VMH9ZQ7t8LiKQSBuwiFJeAqyqNd2y21Su9Uh",
  "key1": "3roaTvcTq6zTGvw81UttmXFTCRyvk5bhtyq6RKc9EUjbzSLrhVvrKCXupeX9CKeJBuhT2jhrSu3C2E89urpFBMAw",
  "key2": "5HhwqX8hoMSng5AjUUC2KW9bMKdr5m4mWWuVLH3LVvemSxK33VHvvjBF4yRUYSM8eec9jjKz3NoJzcxnViSwhfJz",
  "key3": "5cQrgwp25EW8zLNVj5Bp8ZCQ5cn2r8vPVaH6ogQsdYcPLz2HuSu5YcQGP5QdAGGnvQcDNfDdCwiqDugqJWrCs27U",
  "key4": "4FvbLz7U2oCaMmCPoib7c3rhZxHJYTxUyzfd3dRfg9yHAgKn9hbEH7qWWmM86LuC1CjGf5YnnswJi11HBHkktryr",
  "key5": "46HyxXZedim2Qur4Bco5aiRsQm1YYaHYJioVDWZk9QrHM6PUgCEvX6guqtX97og9DUtDEXyTLVaAVEYJMiE1XiTa",
  "key6": "2D2kvHmauc5PAjy1rPKCMLAnwejm9RkYGaYsW5Ss6adAnX5xfs3BHdaCPzHhskoQasVztUi5SyS5CRpWV3HCcAii",
  "key7": "5ofxEDKjLzb2bNYe7LznGNeqb7H2BdccKaiWqiAe9AioevhUgKyhXppvcXf5vyVrgwYUmuMaBDvCR2H8WhUknjps",
  "key8": "2wUE3jKLkjMkXFJq2ctVtXE6YETLARNdr82TJ5cDfX95nAKtAGmC5GVr1dqdqv9RFgCkbVJxjTvKjU92d8WRtZsF",
  "key9": "3odzoAm5SPgBNu8nZfHfS8EQeThgdGMt7FK4kohi5CDH5wRVitpbLmuT4td355wQERiMhJfPdAeABn3E2SeD5hBs",
  "key10": "25gM2RjURhaM5CKryfiP3J54JabWcpYP4nmjBdzsd1mVt1ATqG7HVK8f3aVhbkzerz5TCwbFinh7eMHbmRy4gEgH",
  "key11": "PkW2Pi21bChgUkVcPaduSinJxJKtHQYpXB4SD4zeQmQD8vG52RP8CEETYecvqRreATDWSEfqFKiWWyUCBVvn4y7",
  "key12": "2mahrLhXtsyqnwaKC9H9YA86ugEDraBFKjSVJiZEx7b5pwWYtbnw4TmaEMZ8K8j7kkXh5KeA5giZYjgdzgqfsB4T",
  "key13": "eJfwX3f88Bhts3xw2t8tKt8415hY79RE4Uu3Zddc9BNMUj3nUZ6LvopfLC4YpcmatzEzrHZepmqGKgyPN5VevXH",
  "key14": "2KYidHN69WAhA6eJi7xMPiYxGTBQqc5GbwLGAaev6hbYpo9qePmYARWuSCMHgAAg7Xn5njq8KhdZsLiqPXRFqsF2",
  "key15": "5yTc86GZFt1BcqHAJmdnw6L8dWZHkyv4qvjK7d7W1qhF675hWoQX12uTsisp3jXAUWtZs7irxyAnw6fjeybKEekX",
  "key16": "3yNjEHcQRDfdaTbAjtFUY177nD5NVihRRPcaZg2gfgugEZoqdsi5eL1TheqFdJEpm1Cm8UDSPCKtL2a8CxdrEEGK",
  "key17": "5ddiAZxfNW3rHBnWXcVtZcBpBUhFWcv38gXGvUWRukkex2tfKmbCH2yJ4WzCJJajBTWM2frDnGRUN5qjPr6c2eTT",
  "key18": "2x9N4tx8YxqtroC5Goeo1UZe7njdjRgsssGXmziSijCpP3WRZarFGV7JPp65ddEiKjcpvWBfBokSrhP633EBxnYf",
  "key19": "zMaecHPsWpUDgERW4rrStCfsxSQ2SeS8snfGy3512r7tTYoQTRybDBxZdsGkN84CbukVxbCNG4NYmac8CBR5uEE",
  "key20": "4rmNw82qVfUvsEEn4beUhQWqVEikWLgmXqHW2aKAkXxGdt8aVd1mE433Lv5i5LmJVZZms5RhZFsg9H3Wb4phrGu9",
  "key21": "4EcRe7hAHbw336Tgm9gRYrLMwfCvvH6jQ9Ut6RJ5svK2FXt5H4stuJi6h2KgYdmZya4wioyoWrXzsgyyyHiFXqhh",
  "key22": "5sV5JdhzxBrdoyy4ogdLMKvPgqDJ8BHqmRg7ijYs572hK6C8a7sdcA6yyAEgJ63jocTjj1YezTc7JQ8rSY4mx9FJ",
  "key23": "xuFqE1wfk82jkBenUFDfyCLv8KpwXbfza5vaHMkjDUfWuxDhAXxtbJoYpF7dbUQDSXuu6KeW7GgTGmLyFBAmXNc",
  "key24": "5dsChMWffFtY9zDR816cr4UMcqgnt6scdyDk82n2umPDbBsgHrfP9WhGsm7Dwt9FexLvos9pFCCY1fSfHZCdjEFx",
  "key25": "oGs6BCfhMz6JeNWZTqJCYmiEhiSS5hvc6bre2QSDmp3wABMMTY51Ctq5QcYJHV7LVh7F2wRNURWJzKv11sHfyqB",
  "key26": "3VTj8n6vy66JAdniFA6RSx5KXtctBoeKPVPmGdnHu7vEK531SCVtFLfadhKSWTFX4S8FMxDJi3PG2xKJCWhj8KSs"
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

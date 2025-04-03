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
    "2rj1zTU9eXHJMLEWiQroMKPxr64D2amToDrruwioe9pxadEEYDZpA6F1jYYzMvWoFZHbKdqrp7twkXYmtUyyxtD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSb9CFTxTJTv5Wczn2yXBrsLYH5eSAWrBb53BzN85xEqPd8AoSwY5Ch5jVn6HqE3sWqfGcZPbswVBQBFnLJe5Bu",
  "key1": "4PkoXjiiz1GY6kQBYMncHxoU9BtU9iBR6MARZ22E5V7iS8MFUjAdkNetfDgVgmLdntMDN4yPWf7ruMH4Pez9VMbE",
  "key2": "62suihe5GjQ4cSahLZd1F7Bvc9v76NMmTxsy51J54SL2RUsUxVSyzmAriKnsmjUTZ3M1hrmT9Syj3D2LZWDS9pR4",
  "key3": "2WdrdeuE9JZqYRsZCH3vP2B4nyvK6GeVFrjQQVBT2TcEba7M6ds88wyhSJnbDaMSyHRcStfZr8MwNm3egj9fyyop",
  "key4": "4PtWdUHbeG63PYusCQAVFpPfsQs9UwSnoQwo6k4fu5XWNjLZNeZsXpzMjmgVsbHT7bZg8YG7rmC7kV7XiAKfdkEd",
  "key5": "2RacZaKB6j2Vq8cUDsne9G6jGXZMqECTCeEdxVEsXSy3DVEFb4XUmAjmt1dGVtSbLsfhw25wbPpyVwVgSUzu6WZw",
  "key6": "38UfciukVKeR5bB4RTZRinU5ad7Ta2whPVzAUr143b6GSjnqErAvpuYyyYKCwj5UA7b2rMBS4AWdaHcqjgdZTNvG",
  "key7": "65Rawdzda9VXLQUXvtZ1aQc8B9g8octdox9jnR34XnHLorc53grf8VQDy3EwBB88LGTeiqWVnVesEanw7PoxGEEX",
  "key8": "2kQ7dVC9GxL3CH6Eu66zZgq9G9DTpYieojvc4MdzguQFEVXyMFmnbyCj4zzEQMEzjD3EFa2Fwgn8bZk2vLBwHjJn",
  "key9": "2dH4wUXRphLjn24A681orgtvapyDAfW4rHJgMDrfM8AVKC4AKgByQfSjg8jqg6GkUp3S1bW3iWCYhTjcFMhhj15x",
  "key10": "63bApkUebcJeFPVW4CEe8LGa3NZb8VnVj2NgMDpPLW5a1FrqhNx51s9k6yW7iw1YvwfoHe6JXKc9tA9gB8rAjjdb",
  "key11": "5xurpmgoJq9obFG8r5cNmJPDYo2QSs2PC1D2QdKSDDKMkK2y896wuRBdg8e5F4Wfj7UoMuzv8qFQF78BBe5QctDQ",
  "key12": "5gJiLokTgJBXe4Bir3UqghGP7r2vRXP1R1WL3g5V61sfG1CzaaByi9jK7WXrA37j2aQPfMZLc87xtfMWWCUtFVrn",
  "key13": "5CuaC76PgvgBvHfZNdYSJP5rQENYfmf7E54LVPQfaicds6ceVjHdk6BnKVBfppp6KNpttWrPBrEAfoYsy4CaaVoe",
  "key14": "2ze7gNAFSPBdUtpWNYVXSQcSgWpasnLqRsxkgPgRNVWyibLCxFFefWFPcXbQX1qYen4vNninL5GXLo8JSYLAL1Ei",
  "key15": "FHNbNkENgo6Pi2CEDGhDtf4Ad3iRzhQerrNmKRn6QaLPBLvR6JWd4AWdpQSZo27NqpaDAaPnEpAx2v2KaGRreT4",
  "key16": "67oXGSrce4KU6AZpSs34SzQqzPaBBFMgJ3C4dtzSUf8jxRBYVCPdPS31Whp66ZijsMYzEpr2ByfZmtyvaP9WLSrH",
  "key17": "5y2ApDxFUKs8A9C49fUvcjc9GFn5kzn4nvwx22CNLJEbJdfk29PMiW3k1kTarRDBWbSCVTJ6M99eobFVHqFoDipP",
  "key18": "4D6EeuEvMPgHBhgNKxAaZWy7yq5ziSTjwUTHC5FkT3XX9uwfhSbm9Ca3Zf19HTZYVmdRUXVZqNAtehnTbPEnTeoe",
  "key19": "5qvoinRGcAtzGEHxf5Bob6vFidekZ9phtgZX3QTd9BWsVpqRPwjvkpxvcW83PmqHaAYBzkRktW53wCWqhRUsKVzn",
  "key20": "5PCvv42PfMdt31jRRsKZwrkYFr9adKWCSQGWRDu5kULYVUnxC9hUEFuVcYrNAHGkKxEKifQC1GbwpureDSGtqHfZ",
  "key21": "35BzkNUJaKAsed8gTD7KhdhtpymkQ4DrtnHMKKQF21ksn4RSCAV2x9zJVbQVUdhyWFUVqbhxfE779w8pQHN6Ts7u",
  "key22": "4EpkRro15RJV6o4ZqfAYpUsbXFoVfZeijGDMp8V6raFruiNJWJH2DxwVBfN7CbmWqbdp9KsWD3HnV7uvKxUmxA1t",
  "key23": "5nX33znL3wQwAveKhkMWGkAPZrQbDKVQdvcaJGS5cnUG19m2sdMwamhpG5bVjbqrJS7YNehB5FAS8WPyGj53VLvz",
  "key24": "2FGUJHTZP74sC6EoqQjrqZ4eQWcjW1Le5V1k65pZqa19mvevAQGKMXd3BvL3orfR532hGYQ1EeqazFd9xPD1GBDL",
  "key25": "2sHqXVEEkeWrTGvA6xGoNSYQ4ujD74s6H5zydUtjigbfvUG733PixHSGPM8VbDzVM5AybwHhYmzzM3sUdpmGiuqe",
  "key26": "64cV2UreMuwimG1GagG1G6jnAfESiJrMhxZ4GAPnvtpbDvCyGR5hPGxcmQtv3znh5HJRtivGqA5VafUyzYQq9vtE",
  "key27": "MikAKLfvjwV23BYatQMeXWQojQQTfqVQMCYSW2QYSUNur5DRk8RKgzLhRxoPycXC4nCYYZYBj5Bg4c5smUhAaJp",
  "key28": "4oWnDFDXYhAexBCgEjEqvfmsh6aJXCLeo4zLFKx9Q9EGoCjEtPn43c75Us2LwVwdj3RFb6JqXerCNP91a3JXfGKJ",
  "key29": "mb6kE9bedLNqGzkhDQYs15Vfmjsuk6cBJHezHEWc2xMpQZrMF2uE4PHDEieLMo5M3VX2nwaPu16oAdrouw1K36o",
  "key30": "62hc5hpEJxuqfkSVwen5HFmThMq8oTsXnmdY8RBJnVwvA1GvgYVvKXJYWNJHoJ1zS4seCjjR4kHHyHtPQH1qfLxG",
  "key31": "NHVvw1mzNiUWzy9RoJWuL9ppiAEX7hHh5yFKeVyfFvijAGkQ5hVqU2XmfjtpZEBvw3AGcyYj8PMQWPUicSfYXFr",
  "key32": "2r5zsokghcSpkDpULwfU81J5Uq4fPdR9QrJPseeLL9sgZdctNRpzYCmFY4fabfsHo7A4XF48E5kdYHqAfQ3ZVWtQ"
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

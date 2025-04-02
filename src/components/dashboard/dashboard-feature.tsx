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
    "54vGMAbh33gudAq6u8qRxNYJn5hX8Ee1w57c76dBkSv1WSzBHpy8ozZnHu3cXt9s1MShyNxrSdSa4JQoz7cg7YHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qyqbJQT5shA5ekNdFzqNxBqq79Asv2fJCVENrzt1VGypmSxBdHZzuYj3XeAStXJNUZBsKDaYsTfdd8F7tffF4JB",
  "key1": "4rqWW6xKYcAHf8fWUGxJjkg38WuqnanrUgCia15ybagJo1r5xGW7GncKxs9ZwTsVtth4DtjfrnAopSD4mNqAipot",
  "key2": "2XvkNpYX8HFE91FQWsG3Xm26bJ1v8xTPaz4nqccwaiQr4zwwgzieTdW93Z3eg41GeifotGH8gUkE9nnCQnwfUiLM",
  "key3": "3NjgwfRXv1rC7XZvRSsKUGAkopyVQkrqE5neQKjNGaY6BRpnTm97wCsjdijCwTPndWwzSu8krV7dtY5fnAuGVkgq",
  "key4": "21U1qZGciV9jF1SVHPdWEJESuMrASizFL7bGdgRScBhZH8f6gA6kBzLvGzGXyR4NkV8GE5SPpqveakENbhbrnS23",
  "key5": "22TSrKigwmNPbzzL7x26ExZ9D4PCHgSUpREku6w3VDzTBq7qY2ZwNf8jjk734EUddPh44ddE9xV3caHWDukHLSWq",
  "key6": "XAEimSLUcJygbSoFBsYKuhqh5ir23A3gMvmZoe1ZU4FVL8rHjx3hkfup3vSs8nwrD8Vtpo46RdKkFX3gUWztj7u",
  "key7": "4UPicW6KTTXcAUzRW3aaHsbAprBHjnwCHV9BQ3Ty733kFKpNeJ8ufaSLbgWypYabXaCYZZNSBmrjvcQGua7g51Ci",
  "key8": "381sJXNwdM63Myf4ZLCyqT2nqMQBcv5hMCdSPAK5wfV2CsvuECNFQcy8jZqUvR2YM2rXMH8taSe9Wg5KkDBmY1bF",
  "key9": "4Fn8Kh9vjN3n7MMt6GDzhrFGgfDzAFCgh15nzudBikEcG5W1U6tqPZuraDwN9eCwG8nLWkzGRWu5mQ1VnmyQqJFn",
  "key10": "3eMzm9kD11jxNi2pLysufZzWvoxcbJNjx5ryTbqCgqnfMuQcZ97hTzq58VBJVMi7UCqr88ruf5LCaLNUYg3SvQ8B",
  "key11": "3hYSoaMqrDPJUchubUu4dKGWz61psonhiKRy3VvVSLqnAWqwaYF3LFyoto4jAgxpwGpWp6Cfc1mSbPeFEUEvXV7m",
  "key12": "63amZfDB41yAvNoaCZVGVwQ6DuXMHsQjJ4FhvXuTRkethnNW2hzZmyNo5Yt93TEo9VR7yNoRSt1KJ5JjF5hMHB2M",
  "key13": "2FjyjvB67gUMYWHQ863oMn3VXLw5vFnRWCvetaBJwivCZinXR3a4G4ZM7haTcL3PhyaMV1eQzfapxJR5xrN1H8Fd",
  "key14": "4KNnigAPU7MLtiETG61wjMcUYK1j5tLZRJkg364BwHP2KNzUac13CHn6rgTkNAuiEadFv1EtkLTVZ1Gxsh8MG4P1",
  "key15": "5xyVeQktNaqyAPaZPX5ZXNUvyf7kazh5Cmmi6hPhrxQ5AFjcvzCJPZf8aqNmx4JSvFopMASom6dWVhzvyRBeeNn2",
  "key16": "3EFjn1dPbPKuBrumaQm2qjP8cD1KdPj6TDZg72qYAfG17DakKHARgc3oYUAANWssBvSv1xGth2naknx3DmNnQ977",
  "key17": "J1Xv7eqBzRkHMZq6QdB8vUcNnvhZCgPgMtbc2c196ybKY8oSehCLxGeSkJCpzKex5ZEu5rqWPTXJV2ziyR6jZsU",
  "key18": "uLy8fgi3gq2Cy9sGKQNp9hogBU7YBd3noFgo6JQAsHDHi1QrMRXRev4kiE9AAQm5eudQgyBbxcfoF5bZJKS6s9p",
  "key19": "3E8KWaej4ZCJQHMqrdLN5YwCtnSTc9mR7eAxtELPMPpjrCGiAsDH1ePwyReLgQquQQgSp6p7DHUjPJ8hSsrfgHS",
  "key20": "5zzDGXtkQN3UouB8GS4L12iebuy2XPDbu6wAta4eqLghCRVLL7To79MfqZ2AbBrnfV5Etmzs5uCZCsiiyRpMFHpq",
  "key21": "673Bapbrf9FNLvaTF2f1qWRJ9KkuaTpnutwHCVGKvkhPnWCPFKk3sJvAXGNANBsE1R1hQ6W1Et1Ut8ZkZjciaqwz",
  "key22": "3vCPQHx2qeuyDvkYUwEbKcV3cDXZku2ZCuiZ3XjaUTGRzAE5rbRgN76gkmQzmc2x8MKKMfbHTyEHx3m4uAKpLQjh",
  "key23": "2NS2YpVs4dPgRvtZ9zDJZx44LG5UyxFLorK5nTbiLPmqt3gvEWVcDKTZ3N9sKoHNjskadWYdX9xb6vFvkHof6ej5",
  "key24": "3CPheEQgaKJR2s38Z2HbWaCceyyv6c5WgKCC4NhcVcheosYAU6jTq7vEbkX3AYozyAQDi4hRxteWSNQFSsuyevyM",
  "key25": "9V9ZNmKQjTnS3UUYecZzNiqk7C7BKz68415pTLFEDBZnjXMD1WUqanNCNT4GseBerW33tbb5w5PrYwnJfMgtvGy",
  "key26": "3Pda7hzF6qrKsF6CJFrAUayHWrxJfzqM54eFg6G21pF8c9nEWAxCfLaDJTQVnx2mTWwhXhjf6EJTzeyxwBZbS8eo",
  "key27": "28ic2gaavkQpn5cuDQ9wTJt1zEbGpF1AQQYSgBv44gJoAu2rXRV32gfxZV2i15Uq3FhQUmob2wvwbmJVrNX23KGW",
  "key28": "4UBoPz3VdaDyXR1zJnsxA133U2zs2EhNVSFXFzxUAyuqFRpHFxusyQZ9zP185Xa2DEPzUtiZRrLdcizRdfo4vBXs",
  "key29": "27gyCbxeFd7TS6iJMQLGfXWkFac6HV1ak1GTxL7JAzBzc1fDwqZJ8P75Ecs7rFz1umXWBfV8SuAPWX4RMXT7xMSG",
  "key30": "43M6KQgz3nD2t3M3tdS6fXf1B1wB21wu88TS42pGaykzz4ELtTJKTKTywxFPjjUEYhrNNv9siMrnpX3Ysf1CXT8M",
  "key31": "4KfWmoNXbKC6o4k1VQ2nVdmfbw8vcVebn8jadgWaMcK2k5FXoj2V6mfLsuBn3ZJCEfsN68S1UF5v1jykk2H7Wzah",
  "key32": "4ysdb8wZ2MgQk27jR935ieQcUgezQuwJH85k3iZFus3VS3UqJjfFrAAMTFoa1X2wHFxPNqueCb6VDQoiLrHZjQB7",
  "key33": "4z8XcyNMfwbTHdrNsd7upStuf5KCTXKXJPHQz8TArpb1iT4DvdiwWXtYBK4eY7JGxuFaiZPy8wHmEheTyM7iFUZv",
  "key34": "KQeDbkucYgK32MaT5b3M61im1Mci5gVH7Syos4GCiHWKMvFooD1NjHyX7xQkXZA1rxqE8B4jU7z7NHbdMFL9MUe"
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

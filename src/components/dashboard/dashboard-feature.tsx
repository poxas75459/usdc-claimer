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
    "5U61HQhJ2UtpT7gpKjavsVeyNnotgxWdGmZmPrEHA1iyB5AdNz6tMemRvxVM7GjcZvcu6cp7dU1sy854DsAAimUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juyVkXxrAeUckh2bs9zcvzparW5H3Rgc5B9vtndvz7jF3Zqe6ky5jSEAySAnNM3KUVJ6teKFjn7hHaZ8qXbtL3y",
  "key1": "5c74562KizS1TH9j26NFPfeWbza6jkiQFG25mRkdV5xnPEjK5JHahCTYtgtDRgZYAv1VfLh8UEfdQhT3H7UrHSia",
  "key2": "5GxqLkTivxJVKeb8c5UyLgtDNCW5WkJDpXVwjFRkwdrdkLVgGWC18SghQS4BjmgtfewJHiA43apA1Jb46hmBjRQ9",
  "key3": "3mJ7ogakYXdzbazR2gYp37W695hJRZubFFPCgsWz3Kt7ggEt71NASCCMj16HtJ4MN5aNc6YpyUDJ5YfdCdt6GPxq",
  "key4": "36SCPnjeobpPgqk2e3VwDbjkNVSqRCXhGHUBpkADMeXagQyfqoHGP64eecwdkJdkcG2RD1y36rcwQ6MxVMZiut2W",
  "key5": "2ou35wF3dm4nJoHU1WWA1oDirJdwq9zvemhpFARDfmdhp1i8r8YrYqSqtbmVWcb8EJ8UWCNoxfU8NgsY4LBp8uin",
  "key6": "xba6Bzod6iBSR54BVWpMfEghDfKteXW1bDdDGaS8dZdARxuUDdTq3RBGp45bdhBqyJXsRwRz3HLUPa2mALgFSLa",
  "key7": "5J6TxNDe5vUJK3z6Tq5KXK1xDtAzDasprRj4FRF96h2cRqPHuDGNeQufgNJzzQvmf6Cy2dte4d7G32cBsPEf6Fqw",
  "key8": "5YWN54VDzCogDpNa4BCsQbY5FHDEGVSASfevPaq6okHhr96avYytz8UQ7cNV4A9UnMGCbLeytJNoz5untwa8oNS8",
  "key9": "4UpRsmNmdS8o4qKRd73LBmsfpqRg6gLaL3ZRy3mz7q3u4tV3rUPHMQz5R6fvRuGEVf6EbgSG1ngLxmsB7C5pNHHD",
  "key10": "2z6sXbYFfgwoUQb1xtDv7qjWuVs7aHKyRHf3KVg4jfShZXgVWpdRNsqxR7d3uZrZGViU4MSQDYA2jfUqbpeb1DaT",
  "key11": "31jYMNhfyZo6BJzEPZMYpJ7g5dEcgZEG26PdEnUczS4fHid8EBYQyPDKeWsF6ynpTSL3kayEHLeo65zKSPxAsaVo",
  "key12": "5QMjPi6d6RaErB2bjoaPwNet6T9GtCqHbx4ZWB4yL2iaWCj69f6gjPigvDa4qaMxPYnFfanroXvJDktMpYKC4XwM",
  "key13": "VB8y1GzWkS5ktc2PztSqL8dxerdkJkRtfnaLMsZkA6iaLmvYRnAXRouM8HUemcseRiKytP4x9MQTCyi4KjbYKen",
  "key14": "5c72aJKktoytuw8W7Ci7ZUMx8EYkjKvLm2kD3tB2JPyRMn9C6z1wTeUF7AgWPYj9QTjqXmiNNK1Rp894ottdQiYz",
  "key15": "2hw7kxeLpM3o3UraKzrPwHhLQuVu5fwEPRccq8o6NTAvCx1jaVWxZDyou8Hi1rNsosBJbHV3MFxTvM1DxTin2cDp",
  "key16": "2cV5SaPnmzJu3Zin2LwmwbcTCCkJNnAGdhpytvwSwv9kEgmDjbkggWm2dgRN9DTfjvx3VSHSpyLHN95Nu5Ynjnt7",
  "key17": "2yJ5Rgb86C4zF5Xtiu9jWNTguWCQXkA9kdTLVSSnBe3CzjEhJpLidNt2t4iEMpSt6dbKdcDedAJZAafqQXuQR47u",
  "key18": "2iCZMprEj2nLUQsLZwzMHZtWYTo6CxUxXb7rKcUERFnZMRMtrkAAvTqChcJVuYttMKPZ9vP488gTa9hMT9vMRRbs",
  "key19": "3mnuv2qkSC92NLwH7QXnDEcdDd7oapbTmYetJFg5XxqLW46gCS5BxLUt832Krt5VNJhypccCpP4rx77n9V6QvYm3",
  "key20": "63JekqVZNDqHqnkGu8CFjwi24Q5nE5PEtdSSnerkZCoMTQFpjjD9Vs9wNiN9P93c4d1k4V89Vc6QjCAQJxFsPZoL",
  "key21": "4zx7RNSrKmzgimXtAwevcu44ecV4uVWT4yRRB8hVUibTXwAW8eDSSDQkDuf5taG3iwVPLNLbXipX8SA6ns8oUQfj",
  "key22": "2MmY1Y28Eq5Rcv6iRoty4uYW2FQphGHPs7YQayNqEAwEpYPdtVPUnLxy6QDPijsz9PjE76eSH2frakCQPYZCcFmx",
  "key23": "BXeeoqsbbLKWu9foKUfAz2V1owsZuvqmrXuoNhMBUGNQfDFYhv7YwKWMtan7oGP8kcqZywrE8Y58qWD8PBxpQn1",
  "key24": "5R5TNDMWa989ZgicaoZ18orCtYBQsDCM8AfCMCqSG4oBHGd3du1VEnDZLJBpPozzJA61APCMSCPt2ynfJdaMPg9k",
  "key25": "3GdD3SJYdbxPj8BqAcKDLjtkniCGi8MbRYoyhhziTzMTi7X4s9V4viG97xbdEHTmtRR1mEMSTDbNrZQBpkxC2ayp",
  "key26": "5mtEsZW9fpgzXg3ccKJKbwtWPv2o9d49PeBvwQrGXx1fBuDZq6XM3BnBM6ftX15RuuSALBiiKgbTxmTxMKXjcJQ1",
  "key27": "3EQYB1Suio6VtE5GiyYmtkVL6NYhnPPJdXBdsNQhFwwVwtTD1bUWe618EtfXuJvfmoLyyTBjDNemh21sMjrqNj4Y",
  "key28": "25JyvRoJNnbfxHyHpuwbw5AncW7ZBwQEHFYFMa8YEoWUsTonXUSEZtygrhCzhTEceJMLBUtjjjErcPFQ1VKpDqfB",
  "key29": "5bLp47sk9gKrxZgiqUKmA1h2cvkprJ9rBdHWtng8yTbtEcm7JnGWjGHvGJWQo9T3QUbKQSd1TD82B2tcMvQUKhRQ",
  "key30": "Qn4bZmxXYcWUbMhpdHmVmVRz1ecVFx4G77qoeD9i7EfjQrX5kqtwYQcy2GSp8q4wCMFJBDgfQKQHjeN7L8fNQee"
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

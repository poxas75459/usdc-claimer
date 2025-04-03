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
    "q9Y2JiHCsBkCHWktAdUCNyqCeQVxEB4QdJZZRBDLUDNPKbT8shYxgTtwDKa3vPUCYErjEREFd2Ru1eTEL3W4HU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5WheQConJgy4yHY5eDREM5TexFVq1SMs1fjLWDiRMxBSVJVNLTUKYBmjpuWw37YjSGRei2t17C7A2nb8X5ehdt",
  "key1": "JaJNW5NqvZ53cLUMArX7QUBYwMrKaS9BLYQAXiF5UYVTDhLBQjm21JLFjrP3xmoZaWZ3cGBFm2cEFY35fw8PQ4g",
  "key2": "3ZfVVtypV7WgBZq8RwVUz9QDcNTYSLuZxbAUZbDhMUroDFHnVjjWWYVLj4F85Bs1c81sjzPxLRvsVVezebsy3yAF",
  "key3": "4Lwkad5NsuZsXDh6PQaUcrcTk85U1WE4TdwQnoVnGT3jRfrFPqwoUpvpL5rBjqYtcmWK7T6qVs65WuMhTiswZ1aU",
  "key4": "5RrJqrMK8VANezE3jE6NHKJvQyxXBuo4joQuj7wLrfzwD7HxBpsMNWuLhWAK3GSgdXMHbFBev9tyQzkYBMwXGCqQ",
  "key5": "4TzT4iGxRmpYPMu1citgMXojqAzP34NLPnxN6YtFW7cqzPX1EYs4YKovFkYLTjDdYRJN1Ju4MTN8dTyaX8n2gBLV",
  "key6": "28RnWKBmCqVLeajvcQnH4PjqhKmYuUovsyvDWb2aDducCtV5pLwcm2SrqHTGfNctJwHScPxk5vyh2yJLCHbZBuMe",
  "key7": "UGZte31amrp7rAdnjMNuCeW7p1Ngi6UT2parifEyu2a2ydyZQi4pXGMp5yJB3WWTkUDcxmN5viJbM8CALb1BFP7",
  "key8": "Lhy3mq265kyQfKQayQH3Fy42nhBbXWf6SxUCPwEUzSmg5h4WeaLxdCf44dmnnHT1tNkLYvtMnTn9GUxxRgPWHLt",
  "key9": "5EQKvu9m9ZDv7ytqtSVck9LVs6PPGAW96LZ5z54TDZ7SV3Lw5rdSPrkTpEde8mz4gswtRFoiSbBe8LrjjEsUVtgX",
  "key10": "2oSWL3gii8V2MavFHZQTSqbbUj46aCD2zaj6zUp3L6UyGSw2AsK7vVdX8XtXU4m2zfbpfGKmRCiGZG9QH3roWm6V",
  "key11": "4vssNTCEr9BQqmpEdQELSuQmfk4ybm75QGEKgaA5KiPzjNS9TfqNYGi7d1dMSECFLNTNrLSVBwU5TXB3QDxYBfQy",
  "key12": "5Cy89nwckWBYhERy1j6bY63wTioZDnprrwdZV8dvq2uGgDRFRGWMgNCFrqNKKRXXAquhsxMBdMPpdhhzd3KQ5ooi",
  "key13": "3MTmmu2JpSC5odUBAVkuvLoY5iFoRZSynXmtSmJrNyCMYeumneNs563VsMEKKYCaXNLnskXFSwUWitxFhaUipjKv",
  "key14": "5czyVLVTsEiQ5imEQB4gas4nPtmxaML12rD97Cz54q7GLm7hdDzhnreNp9qkVtNJ8dEpK23deViyNm3Z9cECLLYH",
  "key15": "2Np4yuenn4etcEwKxWsfhmAzdkhh3MMqEGQwjuqzNvhkTeDC1AsGHiaE7FWjv6jExvRtwKMYYPEdDT6CKbnPCjbq",
  "key16": "3o2UdxTztScncx86Ecx4p1q16a67FE8qshs61xLZjZYijDY15p4kp4L6o6Sq1E9TMxhoSaecqgKqFVCxZv8sSuwG",
  "key17": "5BX5hKuRALRKkVbFA4GuoHP2SmSLZaChX3Q6EHGzo4vCcH7GHoJqH16a1gCtP9g7c31EvYUxgP1kVNMTCEzrDyK6",
  "key18": "4XEWxWbCVAyJfuEGohT87PP1tj4zfTGECkN3d5XJtXcekxL94qC4mDgKDwDzbwzY7RGCZ9QPmvhKFqgMeWB3NdvX",
  "key19": "2Kj9CyhkgwGhffym8kcmbDe7VidjdCWW5VdeDJoQg2qegLM7Fgcj6dyFs8CEwD6WueBf6eNZGpXq5FpRf8LZYfDj",
  "key20": "33ZXKtAX3geXDpJgNGkjW6dNQYpyThuN2RtckyYbL1EaTzHCMYBhV7vLSbkSuLPuaUBm6JxRLjkGLR3GoMyR9Pgi",
  "key21": "5K6jRbWNwMNZ2WYPUtZY8zRyYzkH9Htx4aYB7eoBwHLhb2BRGoKR1BAM2S5tXNimxeJpKZKXFLRooaiNeQMrG42D",
  "key22": "4HdJ1Ao8P12wDFrxQHwcLdkEGjiqMeyoqwvGqjuVdxzwESNhE38jeUkHQa2iA9TjS22D3PpQNgax7RpDkRFJ9wHt",
  "key23": "4ZBrqjGDE85BSnUDtcXMypzU3PvsnT2zLcjUDi346pjqr3bQL78drXoCpdk7CSoLqA3TewB2nkXGXvUuGQfHUKLr",
  "key24": "EuyoANtHEe4vbh1pjhUd46t1bRmwecEVUxtbxsrDr8zyt88GWEhkgqHc2jHorJ89XCMEVesh1FZHeY9vVxJvBtv",
  "key25": "5GpC6veRQmJxbA361EpYuFvcnYDAfPr3KnyjbeAMkSY2NV8PiMqmNRAR4zPz21Lf5LXunp6VQAYoMVXYYs9w9wp3",
  "key26": "4NXdKRUYFrDBmTZd2oVy4c9YoBTgE1KNPufeY2qW6CBbM2SKiuibUictBGhSYWbiuzRuaes8tdJUEzyQFW1HybTa",
  "key27": "2fQsXjbdkmT4G3nmSLfUawKxzM5rKW7Brn8V9izVz9MrHCMqjsxxZNmssefMG8GVSKxz76RaT4TnvsdfYmdRtahu",
  "key28": "26zzN5o6EWa1rHmN1A7hE7uZxhVUpdpE2K5LiiVSkpMYLccYEYHGpJudbeSWQGVzcZr5YnEQHjBCquop5jvuZkQZ",
  "key29": "5GD7aEGcG61m3f4gBj29qESubsrMmXYRKncUYsfVv94dawkQoBZwSq9fvFYAAWY4cpSJ9LaizU9mbXRZFkU6GSHa",
  "key30": "4FmPpPZuSPssExSVcjWY4cCBDQhVQU8KVhbfMwwvY12Jc6FTbUi1MdyrMCB6p5qTMF7yWSujiiFYjms271rPdJce",
  "key31": "22gW3JeES5wUMraPr1xKEpvJT7G49oJUqf2MbD12bT67Li6SnCiswC9T5teByQKG5oeoG1eTWW8MZRcifY3Ly2uS",
  "key32": "2r1nNR4kxmzjhRR8dfKWtsynPWcUCNM6rthVMmLpdbCPfzDoKqwLPjRnCGPQDZnMow99iDa8GVWAsUMGZE33shoB",
  "key33": "25Y9Y4A8jTPEJHk1WGiRQhEysEn5eeqBkW6d2vxUNSNBSTqYQuZQk5hzjsVdi5mNU2V4Wr6tDRCR5fJE5xDwUxvw",
  "key34": "2HmpH5YkDtjbgbTiPBdP5pKW9MnUHNudCpLa84Z43TSmv929dWvm3NTnX9ZViSdx4DN7JmHkAygJy1EjN7B7EvAG",
  "key35": "4DaV5BWc4CKtg9Tp42oKqYmSZQ3TXcRypoGGhAbmvFp4NWuWfsdvYDTyCMQYdUSaHkBGFRbo1ggLZfahun48LNBH",
  "key36": "AdpU5EsKjtknkP3XbAAd42ajB5FrzLosixqcgfxp1GjcEBQHmys5VnRPJ8GRTXZytNC75pTf7Y38nMaPyTAmyo4"
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

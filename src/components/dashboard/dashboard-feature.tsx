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
    "5PV7q5TdLNMVQiGDfekJjxs7v4YiEpaBok4VXndD86RqpxjbSf3kvfXz17HjtgWu482gwuQdMi2kfdULU1gU8MZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUjsZE2wpLEbEKozcsFQWiVHctWhV4MGTdjdFgNF6joEpNCEWGrqpRg3QbBqGJTtVzQq4CesWfkv162oLxd4YCa",
  "key1": "CaDRurFYCZHYAKgnVf53wNHGJmdzabf87p3fmobbbmk9J6wadvLRSiZEs282jgba55JyUwpDoHVa3wpuTAa6d9e",
  "key2": "uZbQ4gd2BWxKd1xxdhpgaXyqd7PC8CcpiFBUzEL1XsuuREGoNwyvTb8CEpwKhjG9F8nLNUCZTNxcHyoyDxJESbP",
  "key3": "2Fyipw1ZKab3tkvb7a52TidBhLnt36EroT8NRsn5Uja8vA7ae3Jm5KMxQbiBWqfx1HPHUob8Ka4KrYNYkzF2Kf5w",
  "key4": "2a2LRYnnXZ9mGQaxp46xmjrZWNKvNx4rj2bwmFpggQFNrTuDcNCmMTYVbXixJtnCHyZkua3XT8fPRyC6591xiqf1",
  "key5": "5uEMXL1HeKrKr9ss8sZH9uPHSjSFa1iLTwPhAZXz51Z56XSvPcm5n2eHqjgF9WkauvCLvzAdVzWafVGkiCYGyL2Q",
  "key6": "4qaKjZ2AUXX8wYsgxWcNaT7cHRzF3NDW6c9QT5NWXSpSpjfuf7Ady3d3AXekFcKzFrC5LNh3THc9BmPBdABjiSZw",
  "key7": "2ghMHttTvrsZqNvSyt28whXNsqG2oVWsTCpqMBtrCpnRVcs9MowScRQjofRRkN4AHwAuMyHD842YfrbtgBx2p24T",
  "key8": "5RsQjfHNiSBe1ej8zXBW4Ay1Tq9fvUVraj7qzeeTyjCLdecTq11B17jdDYCTGToLwUURsRpmurMnayPtrfsLngVb",
  "key9": "4hhyeXRKzQxsDt1CkVaQdCvavqnGuEXhGnat22oyhMJ8TD4CAGAsZbKgTDLxBpphx5fmwrEr5SxYSADLUJJbMkEc",
  "key10": "2eXGkoLKavtFYHNPvTJ9ZikPtHKudF7T6HU5itYN6QPwefGnfxe6kiAMHjj1RFrz6tDGRg9mPPf8yhtYrYjo5GWE",
  "key11": "3K6fXvZ3syWzx57BjzKZjHjL2zQmAQPhmY4gpAzLRhqfDbi8XB1yfTxZt1qS13AoxDhFrxQeKskubxiR1poYV1Fh",
  "key12": "22YFbzmGVUjF9sSSb2Hr7kiVinacV4vrAPPxZT9wAbKcodatwRXNed9kXj65pCxU3jUMSKb1Teht6vdS4jgdNBeo",
  "key13": "3h5Zp71n75fVAt6LofppCxs82FdBctbs3w1RjBnNTkqHaidDmzNshZdBNHQmXTtmBGgEAKsY9nerrT7kA75fWNNJ",
  "key14": "4u37S4q3w4DvxFTKmpdhPZcVenDexPdStx7aRPn6vzBaJDDiJsvXCddusRXC51Fxpb36B8DgkUR9FthSYJGG4kei",
  "key15": "2fg4eccQLmWShooU3WG5xg7xrGZY3LAYFeKZXKmSNCVyrZ7VU7GrHBSsW3A6ssfs7m79TdJZS9rg2s9Hg4kwsiZL",
  "key16": "qpzWFLGgjonry9cGDEv45GR7FmbaxN6hLjEvuZ3t7CEv3NRSHiv8SpZQQBKtLGca2HdjoLMaH6rHM1c5WitcEXp",
  "key17": "5HXaoZcofhpsHyfCc2TAr3Y9mRgGLiF1Tda5qMBmRJaQgDUqfvvUqrHGie2vwGFjwo3M86Xr2ts7v9qQCFxcqdHN",
  "key18": "5xcLS6gNvT24TsCmfigEBptH1zWdsayKGmbdkMGx42bhqc4AN63ye2xcP7ssYwbBgc5vBZ7F1aPPhNYYhdnWovEs",
  "key19": "2H7qiLvnEyGYai1kQQMbpgXn44d61ekYDz1Lup4cmJyE6wvZFDYEv5Pp3DSeVGJTT7xn6YUBMfVvdjDssWqHCu9u",
  "key20": "2Yqp2ztMkg6wyLDQUBFHHuKYbV8zEDKjebUjuM8hmiiGX3c1kAttcRKQM8fdEcmDa9C2ALKnNiNvtQwERtLGpXft",
  "key21": "38adiAviGEs7uFQpjF9zPa4eZRQoQdLjBDTnvhYA49sxBqDFfPNTMLrHomrokBcyBMTcBG5cVr8zfNmXv2A56GN3",
  "key22": "LhXGkHnKUBDS2WLLLsHSTELdxWyvgkjrM8sWrYBwbttq5KUTR7cwpRX7Mss1das1VemkPpP8yXGDYUG6tuuhndN",
  "key23": "RwRvAbWLdEfwsVFJj1ExebuYmHJdD74NheqsR84Kk6n3XYCcajFm4eA3acu9trtHFEnz2S4RXSsE9RTTanx43yf",
  "key24": "pbE5PFfcTgijJM9BvN8HUPH7aoGJGypMDsJZAdHZ2bMFi2DLySNGbyRWS7iGzDJL2D1hg5vsM4gY7Pq1pfMBZE6",
  "key25": "4Muqiw1JfkZxbreYYSNbZxungFxbt2ZUPdgmMtY8UzsLgn7k5du7BeH1K1prT921T3nbASFLr7AoQ9MKcsHKKeYm",
  "key26": "3Bo4fQvj1RrBtd21UjF5XGfCK9ziGREaj3L5WnWJTbST4Tmfjz5STfJrAqmaY6XcjDv4Xmwp6EnqubX1ffgZzZZg",
  "key27": "iT413GqAhguVhm6Y3xYRNhzjNUWyR4PMJcCy39KVNXzGTwkP8ZvbHaRFZM2MTrwo7eXmUVDEez9pqkBVo4hvyCG",
  "key28": "5FLvzgmtY1F1snNWMPKDWaoRAkBQjEKLwcFNJS9vA3GvK5Kk6GhkjpQ18mKceCsHpaEjwiQjJ3H8Lpam4GhdHUHG",
  "key29": "4fsss5x1qtF7BvLY1QwyEMc65JiDTLiV8nwesS3kz2xGVozmGAXaVLsb8JnLPKSt1MpDSHGECduUUHzMpQYG8h8t",
  "key30": "56rfNM9VexBNrjw911TKMZLAMs8caFn83ixLdwsp1fype3gXgQXWg9bNvxTAiXZK6fUMEsPxfs8TQrAXbwPSepy",
  "key31": "5VjmuCAqJRD7iGXRLhYsbSf2RvhPLNKzjA5bTd5omqr2KYb5RUWPdvGFntrEKdApi1v4vyGvsT18qCTkD6YFCMDq",
  "key32": "3gWsW56RorGKcu2KMqvyRhKZUHpazaE3qGuYA3LcGFW4RDEoJRXL39kmqymaMLCi9eFM6FuueU2kcMPBZCpotxiM",
  "key33": "3xU19LLwKT2ybGxy5qy2YJB2oT7cdBrE1ce7Ck9kseuAMMcKEZ4gcKJA4UCwgouWDMZmpXRhzw8bqJypQFTjGQYU",
  "key34": "5tXV93rqYBKALgobWQFKXZe2jKUfCzK5TzvsLScisx2Qr8ch8m5oPzw4G74BjpfkLqNk4pQURxyKBwqzyvgmCJuv",
  "key35": "2dxnn8W5geNztREFfHyhXxiZYsmWKTvRzRYNDEyc13uGTNQgtWFVSM73Ltg2HQAHkmBi3yARqhV8Tppf4PxVevR2",
  "key36": "3hRHXZvjsRn6Soo3HjBNZaZiSqwJ1DLh4KmksZLBMDCK1r3DfDofyqZAuXZbUcYAuv2f3Di3gM3oHQHtyrSeZ2H9",
  "key37": "3EoojZusMsZMWb7AkpGJnjp8rvyTgThSY3prcuxdGQkzwH5ny2rzniKm9h6jLwdEGS1BLoieKbqtwqgohWfCb6YY",
  "key38": "21V3stJsZDGYYVa94tgBDhHHnuLbTRhKU4iAeyZhbp1QxCr7L3HSbYDnwecTkiUeabccachkbefQG5ymqNHNbqBr",
  "key39": "2ThiToGBUpkeADow6SBs8YDM3n6Uwkx1RHn7BqR1NyRdw7qcMcZnsPtuMgedwaBzEvHgKw2Sk7wLeZwS2VopJamx",
  "key40": "5qMMpd2ix1gTZTCQVCRFt5zZTJQ6mduRR9jPKUzTMYpKTp8SsFYUHY5FCc8C4nPhu33DM7kjvsz6RqLnTKULMWy6",
  "key41": "38z9Dvoke5RU5HS1b1c7XerL9UCWmwZVZCpVVzExcSmRg81M7AogAT1GpLBTT1hzbMZ2wYk6ToCG7YgretiGQ7wn"
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

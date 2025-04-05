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
    "5y41DywKbEH18YwTZUBbpiSsRGZhBdrQDfo7Qqdg4RsjL9Eg3ioXgq3iVbqhJzZGamXotzjUXVWLvSZvqQMfKY8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NftN8YphT3hnDZQNegGrn47z6LtNzUmCyXhJpHPdDQVoLZ4neCCaMHkXGroSxQXqmgkTZpMTCsF2b38bPYwQzDN",
  "key1": "4r3fLnXZXdRfy5wgeCbgPNtsFt3u7ADcePnaceGEJb538TXCThLX9tU9KNJossUfr3Djf9jXniXAFiyer16TZR5k",
  "key2": "2SU92cGcu142YVy9UGsFHM7fPCmcsNdvbzpBVn8URqEWFgzg2XMY7fPCPehPisVoHnU4h4fRhERce5fwGGkhQaa4",
  "key3": "2jXSc6BfUbD2fYthMns2sS1BxzAGTMEZHnVAVdJAyJet3MjZc3WCexEBxs2GfAXwmMF3QkLgJUeNn1QqukYJzzn",
  "key4": "5yJC3Z8N3DZvRL4RNZ6JDqkJHburs3szWGAqsB5e9riJRF4UJpf1JstzvzXTnBx57Ki468hFNuKDYoqsq7r7Yin9",
  "key5": "5DzCWk8Edtyb946QdN8rcKBonCfSYkt61trWQbrZifaAk9dtJpE1fHNYz3t8wknKEQycT8Ha3cMPm4o6bVwLUE9s",
  "key6": "4CZDGqS3VBAgzYHmGn4eebQERTw7HgsPwvZqdW98QqtxNPfKceaUGNAG3pApoAmMF9zamBe3WPrQkkSsovTLcszE",
  "key7": "2ybVGAhebkC6qLEBNVCyRQqmu6BHUJGn4unjQ5h2YjMWU7NZXNSH5L3C6CZTWzKcJt6q4footqn6P6D7SEt2jU8E",
  "key8": "hhNxRizzaK5eXkyNyNAUPJ71wZn2DbqyTCuqo29f2DxGPtgWfKgzbbwxnEtX18EQWuzCCDqVWHhGb8h1TGaQbQo",
  "key9": "2YXs2aKs3VwL9dPNqLSD9VkkVRCUpwMNCJYTcCDZwrwDRXvrFjYDpdr8Lh8WyHHvLT3vTnoFK4y3tFEFLCxaFjrV",
  "key10": "5ifSp1M79rmVSpSHta9dhjgM9KVhdQpEYFkDMJrSNCebBLZsepchPEDZCAcM3AexEyBVihvgeLTfvmwran9gKEyo",
  "key11": "qq54r6a35r6aKF25rwQa59FK3PJBckYnXozW4T7He9yDX8V19qyY2qbbv8tnVxi6wdBxoaiVSjvvSztjZCKELah",
  "key12": "TJuL7wM3s7EompFxraAjWquUBbUcsGvj971TBfyBrfbY59dGNyRdt13zEkvE4FrWpxup3btvHC4xQGpTiZzswji",
  "key13": "JNmcNAyHYnGwcQCimwftRTNorSx2UDf4X6wKs14jfMLzLusrj6DKZzCXW19KrbHX1GMS5NRB6pQs7YQPiQynAou",
  "key14": "3kwyZDWa8x3KB8erRm9Lj5wsQzXKRPtJzsUtWbm3CMYYbH9xCw1Jhm7qTianp6GRix8bCCH9BjJ4f4mcSovdB1Dr",
  "key15": "3m5bjuUfQd44AojcgkbCAs9BqR5rRQu8C9rQoDaGTxkir3AimoqU1J49nhkzT27vfyLvmp3FVo5Wsh5ucKPDY7nb",
  "key16": "7t9F7o36DHi4sXMK6u97PajT5T3TJLJ21F7T9QjteetsSJtj51wq4gEzkv58H45woWe1GarxAs56E8TNRrkTQDG",
  "key17": "2mF7HJEBhCBqzzwTSWKCp9r5oeArrgCEDLZwguS4MD5nCGHwrJHkZHeKL6rDat6aytAM4t3MJArSfma6Href74NB",
  "key18": "2ddFsXFnNnWzi8wEQkRLFR33UVW8cSNGSqS1KWodc8vAgecSpAV8nJGwf89rxrpEoP2iTr3rZ24rizj9KcEqSjNN",
  "key19": "MFFHbw6Ng2Bxmpg3LFD9CuDrBhCUVZFimtsUWejLSobRXsTpjZYEvpW4qTTZGdk2vqj7DQwQhEbi7BaDtDQCRoP",
  "key20": "21hLCeP5DbgLGUsS5xxe3dmkVh6xnTNsL4y1d51Eco8h617YcQdNQr2L7RMsj1sq92jUm9PaudVV3SQaUBbuusTp",
  "key21": "fDY8vp5SvyTync5pAxi2n23V2KcUqq2gvLv28HV2wJu7rYrBWbPhMaqGm6d7jf84eEtxJVAYaaKRUQkCpcS9W9h",
  "key22": "5RvLc2s27f1KxSmm882Vr2wiynDZS7LftyZVwToYNWwcLauSpAQq39v5DMPdBuMaozKA9yDn97F64eJwW1K55gGy",
  "key23": "2mN4Mvtt1FuNLE7wECxUEZtoYQ5VA5S9AJq8wm3LZ9HKT5W3kZkfsx6NfruRfaj4XxGtSvLExv77HMHWef5wfQkQ",
  "key24": "2fTkq3Z8myaiGbaLnUZTSGdLAc6YSqsfebwzMXdDgwJdusuvcxy9WmWjtf95jYfquNCFwfSsTutt6xQ6BgQ1gZu9",
  "key25": "rJzKJVBfwZtabDxEa3Ns9fK49qSESAUCFast2UaH1Qf1voSbNDMiqcmBVP4oMenXcj5rnberxc4eF9Gj2mHb1VJ",
  "key26": "5nch33UU8Epttz8MjS5f7cn814G5DLkosmb3FjkUwunCk7NFH2RKYFzP8x4kApRJVf8bXtF8JEQmsipPNzMDNbx2",
  "key27": "4v2Gyi9U9VsHyGqiMBW1uhbytTwHmdGpmhEAdrmF9eoPf2EVH2d1mdPqu92Gdj5G6hRSLSMViHaFbra5aAtYMvUC",
  "key28": "2FxecAydMJUBMcBVsprRaDPTi2T1uuGTHSNxsU5GXZqawHULtMD63bMUbRfFWDmyDeNAzfZR3yVQNsyke9uRt3CN",
  "key29": "5LfcESATLSkeUtVupKnKCYvdwa5BRsVWCAxEMbaJbYA61E1NpGcvGmjoo2tX3x7WdtZEgPC8Ddd8QL4prF8qgc2o",
  "key30": "5Y8u68La9AnLcojjLuw2jP46TM5dKMoazhfu2C7qdXjEVxaM8FpEs85813DzsdMkaRK34BsyCMM4486eAbyYETJz",
  "key31": "4oadvywu7DwGtczaSLSNLeFKqTDndwrXYHLZPvUp6YMbgNAWb8VNsovqS9WyYWphjSDsnN3scicvjjS55spU9z2F",
  "key32": "3DDqJDXGVYa7Dmg6KyJGB7k36Th8rAprvNtViCDbjb2Paat37SteYYMfVEx1hyqECakAff3vcjYfhTMvJxn8NC8v",
  "key33": "4hHg8eoqTFUH7D8QYQqTts4oS1dLebBdaxAJo6vLrSP9ueduSzF8HaRJT8KyW2gfV26jW4zH571RNHYzyjMdRNQY",
  "key34": "HdY6q2miHfbxST5p87T22TEdJmtPVZP6SxZ2W1f7Bkp7u7wK9FsR8x9yp6pmq2nMmmirtbWjpQP4atQxARcHd1H",
  "key35": "4YrYLTD7VrZeFZW2hzeW4s859YTuHjczJ4hChM75fXBFnoBp7AZvEcLDpvEuJgRQBv24rQN7Xi8tXxosHaWGje5R"
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

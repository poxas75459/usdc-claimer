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
    "2wqAXfkER15REWpcHE9Zx7hvgH4Gsrn5b3bbzEW3hXrNFYnK4hV8FK743syXSr48HB99d69Pa7MovToGEjqDx5kH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwUecHnYZfyCaZwgmR98pof5kazZSHaQYtPprWruygMdnfy7S768QVfsW21fsbzd6rLJEFku9pP8HC4vU88itXD",
  "key1": "ZqM7UE3U6b3RMYwtPUqewzCdcyMUBxdPK4cfHE7QVNSj956LJMN9592KsWVbPnfkuzkJJvnKUaJVEwCx85qKqjm",
  "key2": "4Dy6Ui3fFDpMnKvHK1eZfcAMoWcA3xSXGar7z6dDw5YTgRo39LrQVqnNnvMaN2GVoyBffi9Um7opKmC32Lc2cyyD",
  "key3": "g7ivv3FAWMzRCYpAD5bt7cEyrCj1uT4vCjRcAmSkkjCrd4P36i9FUpSUC844B6tYQqmWkeKUJK5VjwJyeDUiiaZ",
  "key4": "4i1RmcRyMVpDNZ9NkYGALD9hWPktWYdG2CfievGMLneaheMjV6pMjxoMQx2A5MTaRCerCtn7o4YrtjQETsiqzfCU",
  "key5": "PAUJGeeRxCBNn8Bwt1WWX9s2uc45LaVkLm5xRN9VVybTocXa5x37iHu1pGfhsvAhP2KMqZJ8tce1rAmbNvzF4vD",
  "key6": "5bGnL2pWvrgZhQoicqGosLDpKXXJ26Nsz8xLCbwfkFENze9v37i5HdSwqB6LSeaxgzNKXDrZ7T8XDuQwQenCWNdB",
  "key7": "4iJAFaDCqtjBo7yatYRif7Y234PTCdHLEaae72bD4HGxWb8om7SX1VkuPWBeQ11oX1PFCFoMQMBTdnYbbBxYd27j",
  "key8": "5otYaBTCn96fuDmNeRKLdpqxdjSZwy3s5wrfBVjDwyFfH7KNCb2kpFunETsjGFnpSpRDpNAYyWWP1sTizVnZtGsN",
  "key9": "5wTzrowDDvW3HnKgBfsATnmYmqdvhEUrYHE4cL6c6QTabMxEFapFvrAEQz6UYTTXj5LxgdbBimhB2tG4TeRg6TaV",
  "key10": "3sDv7zuGNX29oVYbnrhXvXdRpQwj41TNSjSavKJeW9vwuPYbiokeznsJQSv194MipYBRLuRyTUXapAKt7CfrJWAx",
  "key11": "5hxigTZS1EYpfjMdTUvz98fGAhjXuGfZsq3yYzUbdnKcX1rDL5aNssrvHdjDRfhpDNDYTxP3tP41Lb4QD2bYsRmX",
  "key12": "3YJthyWYsX47ZGVfHs1aZyWk49tjNaBofxDn3hq6SGLPzWvkHzYgmMsfxY9SXafmimFouCCzUyyDsjyppDCQTCi",
  "key13": "rEU1amRXwTq8f3LiK47uapfAGdA3KjmRwuFw8si25cEjMaSxaV1qSAUuX4Vjs8CMA3UNfxo29jUWLjrZhpdzExj",
  "key14": "54yns14FBk4SCgAXdL3E7VdZ8gfzxcUyVWYmyk2Gdavqf95xHQ7P1XZVSAzZ2sns1JbJwSfUiq8cMSuKqjeumYbE",
  "key15": "3Dh5Crptg9U7DV2wk38ES1ESEW3TX2vxnQQmuySnKAXXg9wngZkhr2Sazm1ZGQWoBmXTzfkng8xfSi77PzjRcf5Z",
  "key16": "5zqf3vRVRuXknhpwQRQUe3UqcQ3N1hGat4AWBGyaHhL2nA9h1vRgpkWGwSCRoH5EkMpyoCpnwb9sqt4nXtQXLyHf",
  "key17": "228cGFJ9ZBdsdAGpNZjTzNfBtwHwei3YQZuX8frby5pcr7DYYDHhj6fu1Z8CHieanU2wHzJ8WX6my7yuPbcRYVcn",
  "key18": "cs2sy96Lfa3ZFxpyrEsvsHt6vtTSZs8yPxUiThdSCzTEvKHY4xrLxxkdABHjQbqYiW6gBcmB7XzRkNZsNQuEnBt",
  "key19": "4gL2ZdspGHy5rZEapphPKVgj2ipN1mmq4kRpdsmTkBVv4sx9AyLn7nXQvftR5ns9b3WLZ89QSTK6JxHizE8Skw1y",
  "key20": "f5e6Lo1dJ2xYFgLdPJ2oYmzabkMcfwswqqE3Uwa6grifQkxoeZtP226pCfqzw7rv2A8MH8S7QwQLUWtssiHHZEh",
  "key21": "5Hbi6TqU9dwKJbSuUzLhmRRYKXvowRTX6isFCHbUt21wpJWAuYYX3PcQGq2jcMPMt5CXCw5sdfRtCVPhAVxu8NpK",
  "key22": "2TGnPYqGDXQ6Eb3T93LErjx9PWbz3KWvJFohVL7XdwrY3n4ePbtgfJcm5CGVwsF1J1FcVVu7WPdkbnn18peo33Ts",
  "key23": "3Z37G5f6gmHuFtg4JLKQ7Qa9QTa1zPeTaXCQBduHmk27Uzhv6cvp8MtCvvXjLrqnAC1ZCMEUDg4HUBaTQUfYXVyF",
  "key24": "3RdsPhUhRem3oJj1TtJ6X4uWkvyHXmphkWQGje2YnnaMWu1Z6T2njJY3MyaAbh7tSLcMruUpTkjKoBe3YvRq3F4K",
  "key25": "47qLCskhmjskmkcH2gzmdDnJ4yugpH9KEw7AXhUELPUZ8w5pPyLE5YmuDBCAFSxgnrNm29fbWuRFiX66vY27YFyA",
  "key26": "nEYYmBu258u3cecuDa4vjDA5ej4yFpiZCaN2qJDd9kD5N5VLmyfRVdWgsfvvcvcpPtW88LyiCLqr7EBjh14CRTe",
  "key27": "4gQAEB4xxp4CsxZoDHhUzFEeE7X1huf4Q7uPA8LnVdhTqA85Y36jhUZedoPNZ2vCV5qSd51ZTtE86aKeodyL2tiu",
  "key28": "2mJEcrG2iHGqKZqGgkftxCnya2ca8XPP4dvhEDKi3oDoN4zAEJf7ZyxPkRhUKGftmjcMqpJQ6dP7HXMS5432JfkK",
  "key29": "9RfQtpAUxr1StKKFL7UaJSPA7UPhshJcMJcXkeyxyrhAZ2Hc59qRKRVeNRnUZ16pfWawuLrHCiqkKKfGw6gQfET",
  "key30": "2AjMu2t38DDLm9f9wCAifQnkSFN88P2e3GpLcWNRjDc1etxvf1p3U45XVGCuxPB7EjVJrvBhmqJfAAjH6V1KXN3j",
  "key31": "5V6RF882PjDcSs1avZdTmFeCby7bt8nZwSxBLJaATDLxkvFGMQECMBGiyz4QGBTF7Uah3yHEBH5KcY3exADQVD7L",
  "key32": "58TWk2Ay8cTLij5H9cAyLT1k8TmKk98Rp8enXP1KTUCCwGfXn9VqqQsRTbefZjCmC5ggkDvbVkmmtVFSiA9EsikN",
  "key33": "5XaA65yPmNDqgn9Frcf8xnBBTKrg19WXaeEuqWkticCq8w1pDrVRxkZWhLNuF7CdoHy4gYR4uPq6R2cKZTpeiXdM",
  "key34": "2kzf1BnfEvL7gcdpMj6dzboWA61sHmzXUT6pAM2w2dNvxZWLQSWH1h12wp2LuqehpQrtsoyZXvLSSSbP8eTTWb8u",
  "key35": "5j7F4SHBWmSPe1uYXxevQ2dUASrev97cKpBoGsVk7L8mYM9UgedVvFKLBWWhdr6d7p9wPL9chEkzTPCkr31xfLsG",
  "key36": "61EqMFr6TAxx893ZtXQaQxCkKtX3iZBuwBysrWd4KHL5DoCevD5Kk6tiyEF2zYMi9KvkdUhqCNQ7mb3mB4h157G6",
  "key37": "3TXAdRMs9eMm8egCMxrK68hX8cU8XW15KW6ML6yKsEtXnTYRi6WxE7bsTNtHYHtZKpLR24hdKJuFT3AW51Ftg4NM",
  "key38": "5aTbAhR84VNLsC62mFg5poySLwjY6R54cJtvrv93DoQ5Wp4pVzypcvRypkFcyVXTkxv7dzmkPj3Uop2kjBZqzFaH",
  "key39": "55S9s2D5VXFEbbfLdEZPaWKeP4ptAArLLVawExzyjLoWGJxdkgJD8epMAe9FAHEPUvUJ7bQ4CpzTHZcMyDqEVfov",
  "key40": "AZDknD2yX8c1GgaJTiQoyysRUd2F3r5GZxRjFfuXnhKwoagFaYRJ4eNXNaWBV4u1xrDDzGNqQZ12nXk7dZCgZWC",
  "key41": "3FbFkUDR94Qm72LN1wN8RGGcAgy2jtX5YwPnddWSSom1nPJVfaKFLnfVdDPeionzAXTqATXCX3u7r4VZobguRMVU"
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

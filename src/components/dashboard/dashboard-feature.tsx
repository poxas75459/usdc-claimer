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
    "2ipmSfq6nf318UEYcGdzmdmzbj4bbiKe5w2V5hxUebc8F6ixDJybnME1gTnJ2Hea2voafzW3pZTf33qRs6mB1rwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56snVXuwbmkPsbZaYDUXdBbmGTQYo2NEb528PDtV98QFtDZoyhv4muRcLhpVVz4xBKfWyF7EbmgPLGFY3keyJsRh",
  "key1": "ZGpYcsUqf74hSVPjdnK7BxAW4wCB31tdvPeb3x6trRtqN6pZyzNC3EZ1M2EB1YG7iL56kE4gPwYQj6fRdUAjTko",
  "key2": "39h1z2xHrH37WwJDaMdrFGrLf7X7DLH8fFHndBhZ98Pks1jsoQyzXpkTDkifvKKaRw8nAGL21tttSqCa8u446Yis",
  "key3": "4NKam9D97874im1gxN5hvXfZaGcpLK4qGua4juuafyaaFN7TraV1fYasfeVgn5LAdaf3fJmpT6Jxo3MzUPw24M3H",
  "key4": "5TDgiXBQmWL2M2LSxzqbYb6bqCEZ6PEPrQHWj9CR8Y8AbeC3QGdGNHQBkqPqaTg8bogbKXGmXzG7KpdWiXxdHSCB",
  "key5": "5DBAXDnDdVUgNzJNEx9EqXQ8QSUEXuGKW3MRszCE2vHuWmeigiCDatf14tSxvqFU2dRupS8qm3Xasf7P1VFXeaJt",
  "key6": "4tx2Rmtwh88AGqtw1iVgPvjmz6q4kVwByMyw9UrzsGqeoMqA66yWm1Wc61M5iHi5SuFTEG9JvoKsKepbn5Wv3ADs",
  "key7": "3q3XEAWhMAskcqtJx5JVzqBHta6nGZx8sjqSDQpdLtYWdZaswiKYHeshUwdQVDPLwpiBCGBaMUgzJXxkbSNeryM4",
  "key8": "3cispi2FAa7Hywy7db4nhYjfyrvMhWrztpnUYAWNKkh4XWRk8xmgs1LkkCxFchcjJGYW9oMuf5i3UFXcY3Tks3Fn",
  "key9": "3RrKL5Sy864jDngnsaaKiQts7UFciA2CD2hRvn4YGubWzJB2tfDjGGQtTsWmWNkd26toMFqWdrn5s4y9MoGY1wVC",
  "key10": "5kARfd6o5nBoxdWmWeG2nTnUNcVPiEv4D7dJJopmbW6stPfYa4VdwokDT4FQicCDzn1GWU82WgWxRHKjtotQwVRH",
  "key11": "4HRTdqCFuDKWUZEu1c7yUqgoWKJajjvKCTwNmpuz2N5yxkgPVYLCQDUgHpCZTdkj2JnKJh2aodGWcVk5P9ANvAxM",
  "key12": "45RqHpV3bRmoxJFKxe7yktRySAnSntgKVt6WpkfyjdsCqzSVmpqNJq2WpZWVKTFPUuL1WtUNRHpM28YTNDY1imtD",
  "key13": "2bU8RUkGmXixmLwWAgj23swWRN3734bSC8uVLSz84W3T6YhrQ42ErnnWr6UZvaArB5C3qeJvzbkXpWwcnEB1E52e",
  "key14": "5EQy2vd92j7syjiRmJh9WxKwxiXpW1r3x53mdvGeUBiNbzQuYuP8yQWgr3WbrWi7oPREhQvYZD56LxwKejsdJFLB",
  "key15": "4WRzeB35CjUArsYCSQh6acDUqs37TTFi6BHygyQyJcDorxHe95SMZRdSNh8HpsAcknwBBGuuuP3kNiMmxVPNUiMz",
  "key16": "fiVWmR3Kc48oTVGnFfDKeu1Q6G8EjFuuXQq1dJWbD83BqAyddL2UdEisN6sxnHW7BKAjhQbKzrTdcsmuuN1p1h8",
  "key17": "2SLrE7ZFkmmv6DYVpxpi5xVYT6wUhJiDHLUGsWe1YCPAKbxdXVTQLqjm4qH7YG1P6dTZSJnayPgvTwDJ4gQW3VWE",
  "key18": "5WtooQhExbooxBodfk5NuSCHNT8W1CoTUgu6G8DaBkYjgGLPQAy6PCYxPrTj4XW54ER5yY1z4ecFT8cJ5wjQy7tQ",
  "key19": "4p22PnhVvnnVARZBpSjyXSdUBHG11aQmcbrHuN83okzDb52MZLDsJvmrc7BJ4UWdLQ48M6RY8Qaxhnw7fzrBwBVQ",
  "key20": "2mJVBuRqpSFuTKGfS88nwUvyQf7aqen1H9sXNTvSB4WW1J91TriMogaZQpAjDiHNNJPZ1eaVvCXyZBd6cLbFHKya",
  "key21": "3Q12iLRqM5ZHwZfzmTBXYmsZBz3YAoXn3tdNdctoNQfqdUHDaLFaw5sxcmxGgf59cUSD5tc3L3kbMs2Yp5BGuP53",
  "key22": "5H9Hxg3pwmL3WkD2cUStyjtQGFPDJMkS28EHzka1StCmjSXfCCEq7xQ8dXKqm418DAesNjvM8NFMVGp6DEis8pdM",
  "key23": "FT92yPM1nrRxrEjFWCYBFEcGuYFWsabSVm5TvVtALkcDzgetTX56o8usmpAiX8Qc3LYPYAwTCzN9rZ58HZsnmZj",
  "key24": "5zftdxkGdJCaG9ks2bKQckLCNMFXmc1XWiTis3w2mVu1uQXFyBiZvapAUefCdBNSdvx6rQcV32xPXhuQt4Nju41H",
  "key25": "58KbtKTn6c4feRharKyRBuHhnHnigxZUaf9udLhFvsxNq6cnULJMmw6QAi8HX48qqpYGaewmFsbFHurZn24X8Zcp",
  "key26": "3ELRYWUzXNvDoUfEHgf1BaSdzmWfXK2x4noL7RgfSs15Y8RmqWbTA5s3ZGNK8KQLTgDXR3KJw5nMLYxaBZbQzNYU",
  "key27": "gq99dHiFpEGj5QJQy5tdSDYsSKMpUbs4GwwxHouzWtJU2Cjm3pvEFA4ZGLy6pgwJaYoUG8z7JPSXSrcSmCVxwXG",
  "key28": "5VKyarSMU5wYR6ssRoQW6KFHLgb4Ligm2BU5eafrpa3LQjQbdAw31BswS9R3iMGtSWjR76hc7nPpdVb2MhAxsXvo",
  "key29": "4MYFkghgdtD4bHq34GnarzvZKcfCMMJJ2pgCRweyvrtVHAq1NkdGdPEMz74A31vmHkv8Z36N1ymkHPUPe8DyghiW",
  "key30": "46URjRQPgDDVgAMGfYqhUg4PCzu5DM4Bg82fL1wbo4G54JbDnqnjKfJa15FQTkmx3X5MNV7u48nTzx9ownf5M3cb",
  "key31": "3c9j7PSSzNeSwZbPCi89c4bTWFbYiAEp1XvhtaYawyC65RcATe8FHHsfMatx2zSsKiMSoS51d4UGzsqx5mPq1bqV",
  "key32": "4cWHwFkPdZaUtJAdZMr16f9kBHLGCQ6kf1UcLxzCsUF9pD32KP66K3fcjW7e5Ps5Ns3AbJEe9QCuoazDrpNwrbfN",
  "key33": "3xxd4SPzaCMe1wLtm2X2FKwKNp93WRWZ6n8HyVeTztGWYGTstujpyMfxHQhQCWfJWggubL7bPW6Dx5gaSdjHfXoh",
  "key34": "GR838bEj55x4FVLjyaZB1E3CbMVhReHqqgPUWkaFhaZ2BTZvCRrhZEcubwJHhWcPmhT4TH4eB2GThbYvEx5xCZN",
  "key35": "5ajBVjshMU2viAd4UmrWCXWa2AfuJWStGqjhQxzPGxE4xz5vcmLD5rDwchb7pcBYrn25xuZug6VRCqeXW1qaxpMb",
  "key36": "HyP3KW1MUj466SEg2VkU3owuYRL5CABVpidC7a1oZTVMczvWJRidYp5tJnqAPgdUuP6LYeixxN3ZDrxE41jXb5z",
  "key37": "5qjNoh5eWXuyD3mdrtg7x1D5i23Xv62mkk3sM9rTG8qEF5gL3SC4z1as9KNm6hpXHnXRrMTg4oC65o6i2qNSRZkX",
  "key38": "5gM78ksAWCCNcLhcgqQxSEJGAYeu1nf7ouJn3ArbtPADrPtthPm3zidXqq6jXAcn7kACNR1jemtTgkSZtkzw9PCV",
  "key39": "61NqgojeN75jkJ3CAxSbqYcuxavLWCretZWV35QxkykZHtqAgKFDkH1jZfZJLTeZF1wfm8ypCzMFjD9SjAYVsLjL",
  "key40": "yEqtmGQBMP7tdvDLFuUc7bBhyM2ZGxTcGKzifbcPu5SZYA4x346B3BQQQMecZr24wRvAqhXA9RxtYbvxR4XRF2P",
  "key41": "3WkXuessdqBi9cAQrS4dz4F17VMNWmT3XUyZRk4XazQVhazKU6Dj9VzU1bMVnX5TKooS4DDjxmDEp5Qb5qkU96jc",
  "key42": "236fjLWu7Z9xrEWx5LS3zFpDS2suAnDJFVKbJf6PBtaoa88zv8Za4EFrtCX2W9pgSpRHpjNHhSQrMFFM842mHChp",
  "key43": "46JkX6dWTk6FRnWDxKhAeCSmfW7jV5gCaLWfzscmrvBkKJo3fafR8D3ZyEmawm1fc5VRWYg6UN1jKcLhVPLC2vyR",
  "key44": "4BCKYhjr4ZxpTUDWe64KeDoU8TwLHchdfrvifpZ4tbUzZpAmEUf7dtf5vcD89kpAuoHkkxsr6qka8LPsJWPuFT6P",
  "key45": "4PJzn7KSLo9pEyL8eKAzK4F738wJcZchmv2JiMjRP41UWhYsiaB9JdZgod8jp6PDsBmwZFF2RVtyQjjCGx4m8VhX",
  "key46": "5KN9JVsvXoXaYCY8cK42cMLmJCVHgZZzt9bvHuTACzEdw31uRPQ3c4pRYZnd7kE9KneFb7F1UGH4gEbhF8TM3CM6",
  "key47": "4sGGwL8fBVicLorSmwUe2BUY9wTWpFtrHeneg8LrP5SiQ9mkUoqwh7tRRFYfkgkh5Q2ijtJgGENzrHsEGPir4BT6"
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

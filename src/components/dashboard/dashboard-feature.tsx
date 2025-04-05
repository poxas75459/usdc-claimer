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
    "2fa6YEPsFUjkmr4SJUSSta3TREQhwXT1A62VUHuTLApw2jDf4eptP5tfpX11stH8X8endAuMUurUp7n4Rusk96SA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YeESHJcVEDajBMD86bXifJ4QXvYcU4ULiTB3ERaGd5JsppGMS6KmQUfCyRjxL9bUJcHvncHahpHm8pdBrbfZsFp",
  "key1": "4edxcoFeXRWcAzrTvycRSunsxyd6P1sqMNUatL3J5zWTtZyu5652EJJzgJhdAyXJiVJiHFFdfTKMaMQkxTJBkexP",
  "key2": "j1Se2eaaWUY5YzauzZXCyTNmDqzemPtpyMqaXdF5xYi9EB8Mp9ikp9kcyjktkUaJo1H6GAv5cyC8YZLfWcbHNhJ",
  "key3": "5EmENzMp2QbxGiiwG94oB5NVF7z2uFK6FATW63cLwvxVvu4LWnpFgARzY37hQXXievHjCX1n9FppvXn5GuZqw494",
  "key4": "53541PGH1TzqE5Wx3A1LzeiHyXhnbVH3nwKa7sAAi2USTn2UtmRmw6DsFD2T9KLDmz9tfrfXYNa6tvtSPuybz7mX",
  "key5": "kK72fMM6Z1XYPMxaFEobYPQFYrJvLXk7LMjy7fiBZH3HMfANv1WqSsi6Mbe7Zetm9a9GMMhzcPgL4EHA8fTBHmw",
  "key6": "4bLonE9SqTuWJDoPiBZMCqbTx6NMnjbu1uJdmLUmpSLzTuHDc7atxvuebV9vrYtNXrvZ7pAkHsgGGBL1skM9auSv",
  "key7": "2t4vSN9pYcXYZyrR62KNufjvEYxh6YwwyR6ukPNXispYWis4dLnXUBhukBsP2mPAyx3j59myKWDxn49r8ujzQhYT",
  "key8": "2USPda3nsx4sUheMfrHUiW2fNESX3ZuHLa5pdxEbn3RqSXyzw2txb2f4Rb7qRcgUAjufTJfKYtpXKaT4FfgsWKae",
  "key9": "kHpNMfhgupkdDjexToFDFAS42KxhPF6B9G1hZNX1TTUY9Apa7Ed21GVHwP1236JNgdAAQxHg2z3qyJkG5RMv8nZ",
  "key10": "4hAd1dDcVdQBSDwcZK73miYrpP78aezC1N99yWZwKVNSs3HLDQvRpxANKXgZpr2efFG8kjqQn33EVBWCNcpKbvnA",
  "key11": "5WXmTJBx77u9MbPz35Kp7J5uVT1Jg2T9rbu668VRpSwmgqhmpDfVTeNhFFyRXV1a5UNr7o9XK3ZKzr2NGgju3Yed",
  "key12": "3Qa2nujKtqUHvHBrmM4N5yt3gFKPy9rN6gbPfHFPPZ6QtG192m5yKL88rdHtartGwzcC2KV8br3aXWZdNUZ78BRh",
  "key13": "iecPNj6d2zXHQat19ZxtCaXMpyJDy2255cMPsAC468wR2DJSeUkGKSKgbk3sxwpMhWvjqfmoQQTfX9eTJYMuS7Y",
  "key14": "23QHS6JKtHF8HpWfQZi9uD8TJ7LM8MNFLQQei6n1tDEtnbFp6Fbi5fknP3UjbN7gQx29Ljgm4YcYhrRZh1V5vmzh",
  "key15": "42GBXUqFyLBs9iSF3yXwDeN8YSgEgAcQH2ekK2pMnx6mSddrgBVjPoL94i3RWEfgMvCWPaX5AzNxcDR8c6nhcxLH",
  "key16": "3PyffSyUjKeAJ3wqvSXnf7Niqh4txfNuRuczbbKA6YSdTXmbpTzejfcQ7eS1zAJVcpaShqZGiXNbCtsjF8GTURzD",
  "key17": "27ZdkBfQAmXRG7rTsvkwopKAjtYnMfzsdjAu9hGA3d6PQp2VgWKi2N2bs5SjGrwhFk63eXq6YyGhpARmZqRkLHuQ",
  "key18": "xNgWf8AyJjw7uJQRk6E462K5TdrfS4TDaF2wpkBgBnaQvDMz5uJ34bYnjpNRZN2YvhZkJTNJG6cDXthLKpF4mWs",
  "key19": "5CVLoyvoiy2G9sw6QficTvehn3hUkStyzaXWnhWBZT3J1WeqsExG1oJk2ghy2i9cfjdrvzNLbz6N5MioB72TUAL9",
  "key20": "BA5G6pUgSY7QXp8GLaihmaJw1tLqRRTPsjC7xR5UvZeYdpCt9KPHt6dNi1Ks7RMcieZ7ZWGfm5J4B6g8XSd4Zfn",
  "key21": "3KmQCnrvVnGnKysmKVPxWWTXRWcpJ4uw61HtUqfcQvgusLqbC54ByPCq1mdMGwyM2XQ8ufg3ifmy2wkjqdwCMSGL",
  "key22": "2fzL9YZgSe25NEXBPgbrMaHu9DSQjvjGiCWGeydoixyaXJpdbUF9GgGo9xhLv44mvHWAZqLFPK2Wk1j4zFad919T",
  "key23": "5HTCf9JXsLxgdh677YYeqjeQskB8Y46BHLxtvkQAFnNKBPJLcXC3vNnJB4bcNxeCiia3QU7H5RT1oujAQSL21z6p",
  "key24": "2C3A1gxEpDT3ugAMbrxRb2FwPuejvhquCQsYd5oRKt6xtdSoWuonCbcmwr1baEDU8yCo1MYaWFV1cxdBPZGPeLyH",
  "key25": "53k9jvjvLYLXYMxM8JvDjSRSeHfBSW33vdUbM55z8Kds7nDnyhDUu7J36pSagf625582xEiesHvpvHBRxxLAqzdV",
  "key26": "dnrVNK5Z4NApQ8yKg2qjGFyquQtW2MzaGJx99eg5jCJeVmybcJBtsdGJNC4zJKd4su4bYsER3mLtgLg8Quvh5bw",
  "key27": "2VJAjm7SQkXMoodPVjBiyugDDUWDQL2B89eJAB8k2Hp38PABKTRjPaqcn8LLo9fYbSPZryHLx2ALmixTbgNmB752",
  "key28": "5JnNP1EPkMVrWN3MWhm3wEvUy61w9dRKcqiJgRwfJtwUHy8y2nqmbw3bxQNZmeJsJdn1AuV8maeKcGTu7xD157Mj",
  "key29": "4sFmRBP3Wf3zaEMGfTw474J6uXqatNhPFVGsSqvcwgKyZo2FqzpAAfKUM8PDT8Hy61UUPxfpiYtYYgeLpHqzh7Bn",
  "key30": "61N8YpeQ8c2twkt98p5iBGfuZj94ty4JXxb2YqbMqiBXfFxRir6qwUd9FJSmSZmWEU23uFVY2oj5ZYcJYgRUgA8F",
  "key31": "52GGsPEyuCo87YUJCYu1yzLYQT9ffATN2LYiGLFC87cvawn2Y77mzrjLTdML9TQHMFv3GDKGfueiBKGvRK7E2GCL",
  "key32": "2BGBHkvGftHtnCCWEAgnjLZCFPecQyJvXXiYFFoDzFJxes4kn9b72tGisfiSmpJTaLVVsfJyyWdPiZgW6CAYjj8i",
  "key33": "2BEHrFNdgEu5tM3jDiuAuHWioWQ47ywzcKRAYeVtDV83MgaAdAoZhFs2peqiEognm5bkDXiLNpvRdPpTunHxdqko",
  "key34": "5XKQshMng7RpJpjjDd7WiHHsrBRS1jeBs9ZK2UZosXxGuRVVsh1En7TPj6HrtynJ7UZRu3r7VQ7oqhZHswTStk71",
  "key35": "5Wdr1YXdrFsUkLuxLwjgLYq73r8gL5UjvYZHgCdTXi81CJLV3UWFXkDKNUKKw4jY5YrJCekKWcHdAjoR2uuvynww",
  "key36": "2b545C1wXpdcHHVWC4GjnHBXBYNevuU5ko5LKBiC3UeqamGMijmfVBJSiDjW6xjFgi7g9iYAKAmfYKP1xMEEVbhh",
  "key37": "YYezrj9C2BCmKfsXpF7ZVNuuVuZMRQbajDb2uX5LupF58j1HGNn9hcBpxVou7j7KVbRBs9uAPq1F5LnycfF9Mxy",
  "key38": "2sCNm2ofkqcSZ1Cxmwhyz8Gz3R5yQtH5da2PPvNr9jVLCUPX71gQagE3VhSgSj6Zwqfn9a2SQrdfnyRrBNJ66tBS",
  "key39": "2eCwfujCDx6ofXs5TKQbsE7fhSYF7mipeCjgeSmBAHKitsZnqYLThBzc3oJuBgTABN4gw6mHuwSYDMQh17XhpxnR",
  "key40": "5geRsgGMGpPWwe6e2CzXaZg7FUoWfyks45tPEbcqupXbiStPBi8YP64z8GVecxThihxtgbQo3NaTL6dygA1dwSjY",
  "key41": "5e7o9eCJ9ydhcVCxnw6ooFtyzo9KNGgeqWB8dqXZTBqQ96PEJbFYtHWeBe2qcMddxZHC9ACem8PfJvAVU18YU2ZJ",
  "key42": "3FEtUenDGusKY8kToLvzLTAraPxrYqqsVR6CKAu45r9DE2QFGw3nrgpWuuT5cy2d4xFz4ThbNyCffQWzSErzwfQX"
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

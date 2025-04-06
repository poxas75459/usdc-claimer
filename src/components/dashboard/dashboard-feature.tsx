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
    "65VD2W6J7YdtUhhaQWWG7YRyK8PgdhADC8oYQ9QvUnpDtCDAy7umye8Zr7biG1jT147zLxEVkwKCbdSjp57V8EG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26q4YcgsiSp6MRtai4UgoXiCZ27jr3TyKB2wZQL1yi715CxaUvC2ecngkG6bKjPhX5b4548es1kTRVUTFbWUqmJy",
  "key1": "3UUxHpmXzr6yxEf96ZQTni8HYc6DqCYafMpyyDmbeiczS9swZfS6p7p4WSWZeFssJwXv4qDQrBKvwDR5L7KgYdmX",
  "key2": "rm7F5hdKRqkhYZUDDszg684VT5qtS49dRGSrH73xzqfxAZoj9ZfJPcaz9E83oJsGcVdk8FSwk4i7hYJ5zxALmpL",
  "key3": "5s3MKqgzq9ypvZYaf4pRNjSCzhTTjhL1x6GLSUn8WqZnm4EzCHGbPZfjVRoTVVvK9FvCw1XcvT8CE4UGtKGGd1UZ",
  "key4": "3rMPYd8cFRXy8rmRLhkzv8FcqxXSK3DhHTpkTvoHRRiP5sdiALrbjm7cQAuguuDLxwcfCrMwfEXVTWWXZ1fKnv8M",
  "key5": "2K29QhvGqYyhB8LbkEx6GxdSRkGmLMxiKAJfsCAEtpc6Lfzb2VqgdKRG7xRbCU9in3aiPrcPgo9fnYnAWmJPBiAG",
  "key6": "3u4agcMfqaBdH5VRDpvMx6SKobM3rku3QmbBt3TgxSGR2j337HmVQtDshmMUmtbtzoUxyCK2vfSfnST3xuccyAir",
  "key7": "479pYp6hspSadoxGcezBaYmBZ83DimAMZ3BLWmz7TY7TxPpULrzJHY2FSwY4VwnZUeHY1z9Rf6javAHbJ91kYKC3",
  "key8": "49RTucgTo5bp3k2Jgnwd34ZuP573hbKRCNsgk2Yq5Qkk6vWe1kkjWkaZoQE44BXcLcjtukH4JxVfUaVYVks9hrYm",
  "key9": "MPFyQu2PV28X3GFKoed9esrhQXodZau4tCdMCLDquEHX5bTbnePAKx6qRokz5dHTa8Z6D6n8zLMTCZN5rxnX7ET",
  "key10": "29tjfLaSUBcbVEV59aSrvDrJeBhQWTxZ86oHEczsuxb8RT6s7CfdkCfCKfC6yPhvVRDMXUcMbhbe2EFXkPuKeKtr",
  "key11": "4U1DeSPAnRXSoipWHBtfFDUNpcreoKR6SnNhs7EAvumA3gKPwAvGKJz6hEyNa9BKRiEUTLs5G3ZfwJxhsvy9jHJz",
  "key12": "WEtwDwSQURiqiG75p3FATqUr7tF2ZK8FhvubPm84sFfY4ja3Mc8V5TWH18TsTRQ5uH92jhhER3NpcfLaqBuzLL2",
  "key13": "2knsE6KzpjhbvtgoCYYivKuGrYAmEeifqozFh4e7hiNfFF5uASJjSy9UeqAdfNugzrNJiyp7NQZoCqjBcwox6HEn",
  "key14": "3ctJ6FP7KjFHEcbJKzbosLtmHx3GzPQ5VPcpWZUupHupNxsAix8XYJR1WHuobTVNB9zSf7ZwZ3JYfwviV34HDiZe",
  "key15": "4hsme1T7xRbu22FPgGt6VRY8DQsFyVAtP2JzDt6uBpUThjuE8Y4vx9LMngmuTeCSHq5fBYMt9G527tJ25QZwDw4w",
  "key16": "YXrTZWaLLiHrMCaXfN8vbq1F57onFEyw9BntCCtb3NxBxzDv4StpDcLEEAJUFTb6h5ZAe1ZjimUbWDdqEVNi8MT",
  "key17": "5cx5G58GSN4woqmjjXpiK7thRUq38aXPh9g8BhArf1WYrn3DwRytxdrG51wLhqRM9AnkmQWbvRYuqJT7w9bWWh9T",
  "key18": "4eJRaZuqgNAskBuDPyQzZx4NVzamgbYtkN4HytQfN4mtfWtvpqE9NrsgSaYjM8xicNDWYEniLkPefDv9W3dfU5Ha",
  "key19": "2UiNyZsmQ3GWYjFnN9oRBn9sUuK8s8p7gbsGLdb147wYHivYb8i3rmstFnDryhtrKoDd3uYFZWJjbYhdZaHae9mb",
  "key20": "RuPBWTTpzrB4ns58F3eFvZM6EkppqApQuqGpTHufDn4Ukk7ZNF67w2wUYKEGwGUDaGThDKogUSQggk2tbBSH47k",
  "key21": "LrSNgqWybYQxQHS2yNCBbBiWXwc3vvHxGHYTBAEQukMCWqvPbxKtRKavAByPioV5QTk7Wzz1Up3EdAxj9jnfD8B",
  "key22": "5kDMuFFHAfnhqAL4cQpDUKgG655aQCHDZ711cNXdMaARAZjnstTZdtzcmwwzEsmWAnQKWv2SekX9e5KbAGovzWpf",
  "key23": "5RXhaFrDsnbEdLYKXRSyq5yot6w3evfREJD262dTgsxRH9VPFVv8FLasej1Pn8MQTjFintbtwbPNRQ6JbEcE4FDn",
  "key24": "3NERPZYAnm2MnAMiCUADEJahCbbZ1t6DKTULd594RWjdsKugFdyhAV3Dmk6n9LLDt9Ls1dBkaJLVm2PRBvsPbu4D",
  "key25": "4hkQLxCvAEyE2u2YyGrjwLJpznQA8g2BoboNbvpr8c4ewZEgpccBXdNuirJDAWZrQSvjZMjCNKM5JEqVkVwJ1gPH",
  "key26": "5FFw5Wxa6fVrD5bVw1uDE39QaKgGdMCE1JVg9CmLroTTqhZ41oYNxAtfeCe6fDsnk777XrRmfDyBV56L5MzQk4qj",
  "key27": "3awpM7FGZDEAxVDJqPZ2sEiYVwW48nX83QuAvPvAfrviyHQ7Rh9B3cHrMgjXGWaaXYgGjphyshGDVtG3hm6DwQf6",
  "key28": "5W28Rt7tTmjcteWmjg28Nm3YqqWVDmuCYAVa3C4k7bRmLMRHfuCjdBcLWdTGbW1GqifhYeaZzCYngFUkYFLLGsrH",
  "key29": "5KMbERKMQxXJV3XA57RfDxJCFV4GqEJHnDfMUFZx1WdX9AXfMxqAzihdwFjej4p8NMSzbvcwR3i1SfwNjRcnXbto",
  "key30": "2T5PKPcBx8pXnbf3TFAnxybWHEfARfT3s8Mr11LFDiH77r4iiZwUShnMkHe8zePZaPDvTktoWMQr4zngr4mfmyKp",
  "key31": "5csZagVEteP4tvn4LJxtoxC8MC1Vu9JE4ycivx9tvpMsfU4dgEo5yw8a4LBWrNNzLiZG1uw4Nwavidh53NApWpw2",
  "key32": "2bZmz9N6gr1NjcJaSTZHibUyLJtMcazrFMHUV9ve4R5GAJ3PgGXyQQkzc9x8wbCxN8SuApUdgiXMtwRrzQZjZj6U",
  "key33": "4mCrZPRVCfaehrmgcUDfVpPHtxHe4VGmdddUEVa6Q7CV8z4uiRMEoyCVaw63UFr2saj9gzjXrjSrXt4QGq4Atph3",
  "key34": "3BdLY13K6oRggzoyug18TFh9Kv96oGNygRewgw3XdXZGFtVHDs8VckhfaVATktpZp6ACqa1CdsSd7WjLETuDivMb",
  "key35": "4xYKRY5LEr1tbNjM5umbWPFxa36aedejVXqyPhzQmHm6UxrDGeYUDuPtuLfv3xZ9j56gEKWARoxUGuLigZtsTJkC",
  "key36": "4MgC6jFsM8CXS2YijhwJgjsiXFiYGcrDaAfWFrVcuEw9DUP9aw6Q8BEFRYoqgM9vmksYy4g8U3EtH9D4rPckFx2k",
  "key37": "4Zr3c3KdMWceyS3MUTFTxtcQQCaBXva6F9JCXNuFH2z7uSwyMLQsZtAy527LDWJDnq74RFFDoDAheS57Y5uyCKJW",
  "key38": "KFGw5vsgyC1QzrEJz5WV3QKxWSPqM6AYz1qm4CqJmFH4MSWTsVMdD5mNFxWZAqwrcDBdeeUQ3drKF1doo69CAKB",
  "key39": "4ydENMmdqK5W1tKtgKUhRSa9VX8Ymz8Dm3UmtMNYpDD4rNpzGwTGfiJNAD2H211ga9R2qEJiWc3TizKC9F1w72Qf"
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

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
    "oR1mHfgd4DoV3XYEiqoSTvpubnSoWsC9yQgF4251eCW4Hc3ZS8c2AcJKVSwimVz6iYaf35djEjANeh5cEtk7RkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UrBSb7LprWyk53TGtLAWEZXQYtgmh9Nppx6ff3PK8pBG2UDc85AWgkcdj2VMoDVcVWLBuQ5LhY1CXYyGJp4M7gt",
  "key1": "q54Vx2BujemjVJ7rsFdQqhGX2u3DgyvLWxA5VFTC8NhtFWXtZex89pzzGevSiAQVartYtsgTWMqwLFzMCsMQwTq",
  "key2": "4TF5j5Ep24E1w4xvVmdwDg4nnLYZxa7VKkYtzoq6UfKvcFwxmDeqCp7CJAws1QZs2ATZHmu1Hyj4gEUdWnwH2sU",
  "key3": "5CK1CuBVKxiRNZwwjr9beLhpRvDW7kc3RF8rp6oyKSNkpBE823xYWowg2t5ZfhQMYZqBHu6DZL5EbNcDsv5qNaVP",
  "key4": "3ifMfphN9NGubHmm9PDJKLjqeZRHUBEmCceZukmSMwRb8UKK35PdVUibEmSi2mPxaZT8dKV2aRsjXWMsisHem8he",
  "key5": "3p6NbJtC1JhQ4xu3smkXSGtRKbzhq39pSjpLTqc4c8Xc9P4FwgZHtQZW3UYtJf37XBCxAeAmA57ZFbBdY788PKbh",
  "key6": "5vj1VuwhaFyM3m8r6kH7trfSVxgi8SBAGDHPHf6HZmTZcayHLRyVdPYyMYs5oJbWBWtRUiJhAiZUX4XkDptFa212",
  "key7": "55WjB37MRWv9aJpG6P9uQmUPNxheAzJR27YE9FsXggDfCMWqpJJsndPdcJtTGstusYRfA3VpbcZySmRxesoKKFU",
  "key8": "9ExHYYHWBveDSJJdMbqM6tUMNM225hCHcTTEmQTD4sFTeh4seppb9pNn9NpbYvwEQtex6fwqTfFYKieUAp9fNfB",
  "key9": "3R1uX4mDVQAEabPTuBp8swu1hNzPYxJfNSCdip82WrodNStMd4soCCbvxFNWuG6ZZJgaYcixAfSsBgh6isGM9jQZ",
  "key10": "HMmi86TF6kta3yAD5gaSQypHHPYAfMQGbWeMmUibMZcCEyFRkx3tqDeg3MGmiXeuYvmTZKSHkWVvicchWptxQwh",
  "key11": "4mAYPgBCkc18APhaxab6yWAJxPnAkjF8Voh7oQdMxfBHXtyf3hpLr3M6YwsDUrPk9WLZCKxyde8aCKmdaALUBM5E",
  "key12": "8afw5waxrwaFexh7CPbMskkP2rYDa2CTZPrnde1oMRB1Ymc2Vch2WGzEjwts5XDdJx69rNUdhvC8cYRFw3G1rc2",
  "key13": "JsL7e5Lui1vhVU5AgPAN9XDR1H3pHFjJYErzKgnNSeHZEZa4hRXy9oZgcpVK3gHNJyoWmQnwthyKwFULnruSuK9",
  "key14": "4q7Joz2dPDELuB5UEtyZ67xxYMm8E5q6KfxA7MEALLS1MYx3pZHVNrR3d1e8fP31KQMnESXEcx1vfWS7zWEr55LR",
  "key15": "y4XZZG17w5M2VSTbmtHJxTGFtEGGCLT3SCivcRds8K5cvnRmCq9XS1ZjvADmuU6dQvDrLnHnnpQjktrsv6Xg5vm",
  "key16": "36LxmpvzDKbUGmAo4u7zf9VNioPaZ2Mxs8RxoARTfvoNiDYbWKLkfeEcRZJj2QD5K812ygMSaiVu9Q2JuL5TdQMX",
  "key17": "whM7szSkfsUTcb3h3gH4wXpcAtAadZTHaYNsi2KxKPnoo8dVzKxi5eLD8A6mXyDSYW9Zaq21TWxcHCd8nN85RWb",
  "key18": "gHpqWUX4e8TePdtebgct4aGHjYeh9KnsALDTKbtXVguY3PnyETyw9rfug9fXghjkSR2Ymmmo6UJDWWcW7oMu1EE",
  "key19": "2jZ126GJ857qvYXRzDU9U4tRdSZY2Yv5qe41GBsdfWhwBE6AuDVhvmbQ3VNjGsHTi8Eac9Rfvwnoic7rWf4Gn2kw",
  "key20": "3JjYDqZcFL8MNjitX58pB2PePm2oeA3cGZvyQ6yGcZf94yEonXWE2KUVgwfhuEtFzziFtFfoUZbHkxMv3ocQQRB6",
  "key21": "4wXP9u9Kaii3ov6S2MTpEVR1ugF5R8Pp4d4pWV8w1Ab2aR5P4y6hyZowqVfr3suECPEPysY35GWokzN4vUuvtA1q",
  "key22": "2MF6WtCuqVGBPG3egesyfRwvUrmzEMMqc9bf5dh3XYqgouxFT7M4aEnms5Be5qJnXxo4VHRGay4rjEseWXHzMYHq",
  "key23": "3aJoshyvqiJWVqnPX5qu5wBzZ99vcUH65xoUEzMocMm2Jjo4bLzHV9NBaEEQ6bncPG6dRCfvxYHAScxrUSsDTyji",
  "key24": "4tp7ojeDexoo91AjkY5TpL7CR34h3RweZb9Tj2UfTZC1aTtxfvS6uAYM1mw4819dXNY65j8mDdeUrbSxZWuA6LhY",
  "key25": "L9UEQYjdgTxHuDBxbsoeyDpPiNyxnsxuNaWhkVFJZBHyweYcpxZK4HD3WUyLKTaHVqTAmh7MjDF3vnHy6gYWcMT",
  "key26": "55c22B4QL5C4xUyrF4dESujfL5c4Njc2wDje68WKnv4pLktmFeFPVCma7WLxVTGpsLSRtVVvZavZKjDUbhDRb4m6",
  "key27": "4pbSdL28WajnGS8AqfNuyQH3JDsjzhcwuvBcvZj5AoKw3RhFKEieWFWT5XRi18tGGvEwNLoscpcHM6Y4HjLJZx7M",
  "key28": "2L17C28pKEGfKNTinU6rfY7awuZZzp71wui5hsiEbuAGZzt2Wj3q1vqVAEMsTCPcRavKAL7a4ewPrsSoX3ER2csT",
  "key29": "2jog8BmfN2VPquam7t6TjTrcqYytFQMAswcmYmcq8ixzDLCYWJVzaVMQEeZ8SRcNVdNU69HKa8EVGcnAUnKnmCbA",
  "key30": "27Bs5WFQNUxweknn4tE4NbQDEofaZbAVH8bsXRcXVvmGgsQVtuFfeXRTSzaC2mUofCDKruibRcL1wCFssVxtyNnM",
  "key31": "SjaYYfE6EEE7Nb3FtbJgd4B2NpFVbubwLfELwUZswpbL35k2Ht4cRRf46GG3swEa69VRsp4rrZRHJ1nTPyMfAF2",
  "key32": "4infEaHrsYHPRwyebmAk4EkRccd7X3WkzzeBAuUepjkBTvcWxMgBWqdUVVhUGbZZUJN6kT1KtAr9HhTR27bW7Ppu",
  "key33": "4j3322NFu4tFnvMUEJg5GUSs6VFM95U6aEtVknDS4AKzxqGJHQ66af3BYoiyivRVzeW1YMvxim1yMABStz7Wws6C",
  "key34": "3TN2y4eArMmY3HFiPYqj1ugLodJPnWaQ6qbQv2xQ1XTM6GWtfcnoJDCqshGg42MxtCU7tvAWK3drA6FVZ1gNoYE",
  "key35": "3YREXdEJhf7p9tXstEgE6qUrz4qZyU4CpkPV1MM5GYLNnE1zpQMnDWkvyS7FFx66b5cZS9E5eLBTjSwDuVb78xi2",
  "key36": "536ZFSdwxEZFqwutf5qiBkpsYcNLzed2LMCeB7BUvwQ5ANHo19ZPh2nFqsNmHBTFpVoQ8kDRJw44LQhKEWCe8Pd2",
  "key37": "658MrKnSsPfmmcJoi3NxWP2rK815nXMuKrGqo32DceZPrkbEqbQPSPnnV1XS5eb76EEic7ZfjG1vBgh5U6VGxPjc",
  "key38": "3qDbx7gxFEVe1kWJe5c1WcVW49dKmJVZyMATUFhu6eL4WGGGxqCNFNBTvsBpHeZtM35b2qJdft5cQrWwU52G78oY",
  "key39": "tt9TYCjG9okGEojjPo2ftDfFjB2fPDzCDxAUGzvkRs8iQ7NFMpajQj1EY5mbGsDLY8nXZ3m3ibiY4tbkF272yoJ",
  "key40": "4Ap7x5vkscx7pdEBJh2Va5N1ThVJx9xihV4HUtGFZRtqNBsbFJHLjVUXYs5xUwmdp9ifp1cftFjyhxAq65ZFAKFf",
  "key41": "2y4KHq5qvKntJkJPmstaW1BenzJ8DQgruWpfche4MLKie4N5EYHiSEFzWmn67jH1McAd93TuLeygwPjg6ZtnQhQz",
  "key42": "56SdVi64GHsgBszwyZxSUBJS18izoa91gjXU2bpHJehMGqRmrkSUA5QeuExkanHCYoT4Ak1ATV6PtjnSkuLc5ZY1",
  "key43": "YQm17UoDqbbm4R1wo6oyc4KDwSY56FoPtsdSsb5tvnG3iXG91kb6Dt16Jkx7ZBaSjnXpgxJazwCF4bTkmf6WznG",
  "key44": "4CwNSAVUNd4FjnxPpJfZBtR6TodNzmg2rdsA2GT3H3E3YBN3eYo2ciN62UBg43iu2J32Ey7edhF4GEC7qKpBUanA",
  "key45": "41tZCTgFBxn47FMgXx8KZpChNVB4pbmBKCCU1418SWjnPsUUWSy5FMYBVwgo7jLvwdTKwKX2yM6F9onkMbqsvE8u",
  "key46": "52S5JCS7kZucRUW4ZqtVrtCjGuhoMQHhtnje2KAZu4EDrSmYHJBG8KKenEfh4pVN1NnVsgejxE5HS8Ga96wdC2L1",
  "key47": "3Y5P4pWTeFPFKQMjxdkuyRstxedKmQ4WcE1X1vouuMqMepXoaz1vwdX5vVHoM2weQ61zYgVkJK2GvNPmUG2is5RQ",
  "key48": "2ojpdHE9XRmPrHCh8ynWNPx8T8pFbHiqw8bAMm7Kir5o5U7Ujy3nTcLUHWLyZSHinC24HqtiPZVAfEykwqac8XMP",
  "key49": "5nNAqeuMPpsHoAAyQd71VvpuKLBrFzroQBnxWxEQfgxLdimDhKKMzFrLwhuLuSwMkv8m9QcZYkh79fxBjY5cyx92"
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

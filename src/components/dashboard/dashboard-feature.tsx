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
    "BPRX95osHRmU6X7hZDwfgfUNcd6p3rWt28SjcCKV4Dm6iHwPARQuPuyTiGGC1zcs2d8Ad2PEG4eShzzEtcjFRDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ETNLEwW3jizMcb54C8ThLes24kdkJzBcK4N9FLtWJTVHoeCyBgVVNxzsh9pkRVmN88E2EhNpwBVvneDQ3PWd3K",
  "key1": "4jQw7AyHpA1D8iJWpYroVYTzpYgo8yJzrPBdq4rKS1sS8JmDVDNJBfJj3G9uHd8rfF7nXurMoUSbePMELDcYirCV",
  "key2": "5uUmjrbtUUGsrQyoZfBkDRGirtVQ2RehCjekwEnt9uuwE1DxDWFW5cRY8QJZT5kNhXCBSKqNKeY6bpnEjpFTwFM",
  "key3": "4RAsiFfgYDqFU4hBp3m8ShkH2DtmmbT46xshzjZS4qizVN8VNStz4qeYREVyoWXdsHLmQbQVjirZYZ1nSXNBEhmS",
  "key4": "2ZpLZ78kK6agZ7mguWmTnkxtgCfHegQJNkRFNqBknWkv4pbr6RQ3obrCRmG1QJAsK9FX4hfbMFBcnNCeGXSVn9uS",
  "key5": "4L6oVfpmXBtVbuN7o2ZHTX3yCRvDX7ZxNXW8Z1wAVBCYAt7LxvLihjWdPSg41DjXgNvk2H3dk2GxMg6f189pUZfW",
  "key6": "5aVbzuwNaGGSxQJsNwYHJ4by4yyLVo7VZBzwpEFQcUTrDFhXtmPWJHLVbYFWDbuuz59djSbvJCsB4o6r6dKEdDTm",
  "key7": "5ZSyankes9SoQSZRUN3LCvgyUeqm6SxpEoH7HAojz2fS1EhyUUoKWsuGYHNAL2hiW3nfeimwyGwSVToLuzV1M6kx",
  "key8": "5rZQUDbzT1fgPQ4pR8efrBU37kzRNoT2cCUczspPHS5QWfQQVsweD823Eifympeftvrub1PRkuYj3wSz2AmAkjyo",
  "key9": "2ApGbofeHdK4SkPQX8p7a454y7zTXFF1n6ffVh3u9GXBRfzmaSstWFw8PnGxrNRsC2eXVBEJwbbMnTDMGnhrVW9n",
  "key10": "58YG1dHiwErBkx3s9dU9hCwCEsgmprvpvnTZYDb2YNt8oQahg91Puv8GW6p2h29nWmQjwEEftNLGfknhK381FDVk",
  "key11": "29o5vXxDLkzLyXLySN8vwUc5fKNBA8MjtfLeH1zziEuaLHfQ99MzqNhiGer2JFq8Y3orT4GDprZb29SzkQSeGaD1",
  "key12": "k8GDy4kzin64BVSH2mBFyNDZUNSpK8GbjGVcjQaLLgef89FTiYDBkzobYxkQLwNGJtwjmSmXZ6Mjec35reN35pu",
  "key13": "ztd5NH1jJ7smmjJCRSdroEPtgZr6kwYgqPLdWPLrJxxZKdnLgrUbrQytUSuidrSpgWVE5DBeBmrN765uxfth4rW",
  "key14": "3YVwnyBzecrstVKXfKjSwQTP3DNst5CiyafXENxz32G2w1zE9idFYtZ9R4fGp3CgsZB8G4yuc7vDBVukRyiemTGS",
  "key15": "2RnjTweiWQMTYdEH1CSmj3LKR8X1RJy4fMCkuqA2P5FQVrgeiwTAyFMuuzc7gMnBKXFG7i5HR6TrKrcWYSFq2mK",
  "key16": "57wx9vr4sds1dv6Tzxmzyssi2L3wXjtcvauzYcEqCib796kBgKSyao86npkh4yi5ueEBFQj6SMr92DWRbMBaa47e",
  "key17": "3GDiCmPke8tcGj3UHLiCZgJXWbZ9KQGrWEcTv3srBX9sNyx6WUYcrPf51pV4FLXYACcGU8GW87M7KNQWEynuH9JK",
  "key18": "5YarmVFfjc2At3GYynAbdxFwc83nv1V12WYygxTq5ZRFvQDEhkKY5PU4B65pgXC1CNdZBh8exjf6RX7RZbnbASFg",
  "key19": "4TajfiNEDLtpEgbFLo9gVEcwCBV3z2eGQYRoex931qjqZXp8vz9MNTX7HrBA75nqUTr2JiEir2T6yXGuKwm4wsJQ",
  "key20": "2HXtTpUMWjNLkC2eKsjHVj6FQy8h3LnWJhAdzJLfDwmGptXzUemiNtTignYwoxhX9uDDCtk8rjE7jBkXJag3gcfF",
  "key21": "NgxsSNhbmwSAE4RxeYeZsj3dSe8woJyYLEM8vyXSTHn5393jSJNy2ANQVvhVrdeAyCmmx4u3rAJFNPoaiLRcWCY",
  "key22": "2ETwDe4CqYyKapuXKAW8gWY5bu1xkB7bFxEB2AoQe9tm5sfAgvF2noiRb4NeHyUUG85V5P5fXe7ZXManG2UWWW7J",
  "key23": "kHXDdXNcnRXH2TaYjzy9WADDDi9YYCWMiWs17NNAnvBzEEdiqhqWkHoXULkcKh7E1LjXBHLnYQjSB7Jaykm6G6m",
  "key24": "2RWLcTLYbHyKRwRcb6nbfXQnGRQ6YnD29vchfSoQGHG3t5FpTDZYcQrPGgHnt3HpMohRJ6t8LPYP1ib6CuDvGM7D",
  "key25": "5K4wwXWfeykM3rGpocXrfEecmvndWMJCbbujsqv8x61p3T4x62NN61mZ2bouRWso9bMJmhJUdmBDsMdujDegzKzv",
  "key26": "3R9t5RgYSNJ47qggsqiPzQjkcMRkB82EzbcWrH7h6SrEgzdX6PPuUYi76bS6jHdJfCm1nwRcXe2VK2uBmyAw1WGc",
  "key27": "5S7STS5Nda2onAaSUFhUTsXPAtVqCaJyrJZUqGXGKAZtsT2rBqr9skF4EWtcyvjigSgEnccJbvJUY68QbgdcoqA7",
  "key28": "3H8dxmLAzi5uDDNfasD3BXDpwjRJ1TPUuqZQv5Y2kXiA7ZFcVQi2pLdTJaMcL2VZEFG4z9vPX5rbksaKBwMSBAvJ",
  "key29": "63GRkNbcPS3BoPdvg7KMy2EHugMorSu1BdtJBqK6sMD4s4Gje32V3a9dt9WodJZA1vkT569jLmya5AtwC7RKAQt9",
  "key30": "2xM5aoh1S5tV13GRY9XcTfaqUZsYDXEdaJF4q9hUnikhx6bTadY8JxYTJcb7eu1Mikyaxbie3RzppjH16LWRUo6L"
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

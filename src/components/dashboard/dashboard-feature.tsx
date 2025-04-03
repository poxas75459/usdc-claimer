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
    "2moGLUVESaGc2gGjHFT21vaevCTZQnPdeo4gJA2Hb6i5u4DB1ouQdrYSRLegM1rfLtjduPbsE9oKtV3xoBrCufp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GH2uCHPvyU9EAekZT3JUoif9ZdXHbyS7BJnyStLAmyJ9UsmhUwraqoSRX4nSQEfgYbFu4MmgYFwGk5RDMmQXQn9",
  "key1": "3y4cfAuj56SxgKbnFdbHfoWdgraSBEiAYJSrfncuj4vugRXyi8fq23oPDk9U9kDdZDpxaFEtmnuXHQsKpuqDnvfA",
  "key2": "31AfeSzL8pjYshL5uxYhcDTjZTMXHPKuyPJEyuX3SkDk8TTgMo52Nzf2FmDWLp9LeRRxngEEVftsfUZH9F1icGX2",
  "key3": "5psDFvhSHo4EWqsTJUhrEJtgijr2DaTXLq7GfyboVqAyqwiXcYGRMurZb2MY5yJtFHxzBmTLrCqAsYznRTTHFoxJ",
  "key4": "5VAXs1HqSWHxapVGbiLzELMvJ9Xc5y9BtoHqsPABR9SKNEpc2EBpRzajBY1yjkTWFrm7s4S12VmbpS2yK3XyW9UM",
  "key5": "5PTNTE9BUg3wjhK6DnLTJXhnNjdPEGrFsCDjChUqZ3FVRgEVxKAXVeGxXA2A2FCM1Y6gD75wdsB6Y3f41JygErZr",
  "key6": "3KHsSUx526HcYUkzuo9p93hZKiJAqqWHhHrtMUehQhqGqwvC6yLVdQnEj3qDbfv9gCihvPZrxz8JkbtbnoVExKPw",
  "key7": "2gfLuNwCA6yEJhR7ypFkH6wpKnKRLFDStA811XVgaQaL8A1wyCuykJ3iNE1GYQjPdgZnZhheMrPgpnk2p746G6AY",
  "key8": "4A7iSkHRFa1yE6dZ3NvLHkVJvAKsYzPCMw6Q2GhCwJyRFa7jtUMGrBvwmPuCwyWAXYEUpXqf4jEQjvDzF7zaq2UW",
  "key9": "2j9APNP2n7Xa6f45wQRhr8sfjoQQGNVqbR5HNxNtBPPnL9L5GBP4Jbgtn6QrwRViBmKwNo9uRYor8fEHQSPKLqH9",
  "key10": "XnYUZjVgaZAQgjqvJFzffrx2VRiApjj3tDfh8rW9HQem1GA7oSECQXw5j3WHVCXsuUWrb2gzURUSJ6kMsvfCsGz",
  "key11": "2kePwSCJaLTxGqpCA7zX4U89htynnBNAvjgeeBNAaybnC7iqYCm1L3wYv93ETRfXydkAbFraMDn2jafcyXhLns6t",
  "key12": "eNiXuKUZsmxVTSvdB9yMb4ESiMR2oKdgxfagdtAVxEyb3ASe2Rhgun4i9uWUaCNiG43gDPFJSbSsKJgSm7hLNFY",
  "key13": "31nXwsuBx96WZj8b6CvvvrCRLZubC39UR3hBHFR1Fyc7uG1oNjhujRJ8XotnWPt78gkGRb6MrV3q4Mw33G9NJ7Nv",
  "key14": "3mZuhPTSBxDVe9GzfAkbYAoLSsYRbZQqX4iHTy9XNHVwni8c1FK6oxcmcbcVa4Ar6HThRvMDdiJzTy2vkbftJqPz",
  "key15": "KCRaW3LT8VYdRP7FWChXytSswQUvwmm98PPJDTUtgXm9kBKJduqAkm2bnu66NjFe6knD5t8b87PtkpiRNa3Cp8Q",
  "key16": "5FZJTN1JpQ4tqzUnuTCqmBb2g3ZChhuchs3wKUTA3mqmr9yE9GTf38e1c5Nh9iXConvZoyoNh7zuQ2LBsjM959uf",
  "key17": "2hqEzd7jpz8UbUuQypgVuTTZxyMuHFZVE5Cj6YwW51rinjW4VpNgNrfFXsuhDnEe2s1re5M1skpk11Ta6ju2kGuo",
  "key18": "5HWtkZYmGUxT9tKSQkWK5YwRPxQs3qCXGsx6C4pRjPVHWJK4bbMWMyPjd6qW5BMeeZPik5PzCDABfHdkmAVneJCz",
  "key19": "5QfZTbrnNzSZ6NhEAnEfatY4n6QArbAYWf44mYVymkkErJzqbJLPS4E16y9bEYzCNAs9zaYKSZMiPs7NDJ7LJAfG",
  "key20": "4taYNitPz5jaxypGxYjZfM6sASs94jNHwXjTfHjbTrAaLvzMgqfjKZcjtzyoahWvQD3gQmgiUkdjS5Y9Wh5xjVQq",
  "key21": "66YB3t7QvVXdzbpTENon697q1u6pBTj4oRf55VjuwJeYmLmtVVAuPrDPw8acdYPqgZHuhEQiqzfez2siqJ4fENP8",
  "key22": "1245BY1jR7JsrLv3Wv1TFjuEcVBrhL3BaYKGyNGqYFYj62FcFATrLBUWC6oxbZaVXfrrJoJoZVNpSX2Ko7UpPfbg",
  "key23": "4B55tjABArqyiafSn8XNLqLd1ujyyyFaRRGWiSKYoFh3vnY4xCciLLsqvNnae8xhxCtQNBjLGsyCkidgVxLjqX7V",
  "key24": "57XK8e9cU1hNAnCBjgWkpCyV6WN4BTtjNtwMuMm1hwoDWadvyxPRdUuAM1S933ok1uugtzgD4wVto1fokhCVacp9",
  "key25": "aWij4vfWF8V8BF2ddCePo6u4zxzwHL62m5bnTAu2483UtbQSViet1SnbENMUCoMghNe4DSk9WCY4k6xMuQnePxe",
  "key26": "3GxCVtNx9dtXzS2sfTfvKHA9VL5acMEakgcn65fuR2EF4MCb9jYCRpTgNugUks4gcT1eQhwJeeqVgb4CKedQUFQ4",
  "key27": "5Ft1J88u8fSNuVWCbXFyjEgRXGCDLJQxRnDerGuBwSd4RKMBvB278yVx2nbfEhGEvES7B3PTenL1c4LCU5FwmTfB",
  "key28": "4HZ9utf8vmiPZ9xFvZjXYGUonff6UuoYkVYzihaG3mbAJKJj8T7gXXy5FnWxQfiTNFnt6M2mqv8Wszhg56Tu6joR",
  "key29": "5SHYCfngr2EV7ZaPsfjh5kzHAkJVLw9FvEGZPhabdLyqG7KSwgPouFH4LZCm7hiLe3A2BC5FwVgThuScjfdvndR3",
  "key30": "21nFnUwCsPqgDbxhtMuJaYkeJtA5G7Q4uEenP33wVjLqfjqSTvQuZujDAtfq21xr44McTkfRZwkJed7sYgpYoZeB",
  "key31": "21eKQtw56RLaM3pXDmehwgDtMYeYEuvdVAjxmjt2MsDTdzjwEwW668jLHoGUacygEUEiWGj84UBqU2iC9gyhSe8y",
  "key32": "49FdmqWBe5xABtSdavyZkPemftNv1AF45GmqMfBJhD84yXMTSazvLSSMp8gKcoRgL7Ub5aSZmmaVQ1QTAuNdCWde",
  "key33": "7S6bMPeh56oKCx5sndPDkZJNZazPMFrBwA8YniRT2f8L17YjqEyiLrzGRB83SMPLKsu9nrM8xXLB7CTCs6V7kLQ",
  "key34": "5HMKnSfNfr2epEWjXXyR7EuTRcbdEXKArP8LWi4sCqBrhyR2eW5HZwj2M8DECyehd263xQG23SYrdhY6onjx6ep8",
  "key35": "3khtYzPGYnGbPpXCRKz3twW5pKSoUqozciLwPa9mbCtERW6RxoZebwmrv5yvKok1y13f7CxBxJ7GuYAViVKVrHYg",
  "key36": "48AspmwRx9iFegFmRPAoY5EcDvZicsV5mNWGY9dt9cUDLYRPK45wXgwGt1zzrf1P7VrMcai2X4PztCpJG9mjBKBm"
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

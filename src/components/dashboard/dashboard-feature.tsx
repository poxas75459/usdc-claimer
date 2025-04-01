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
    "3YcGXXwGDCn88iUYxLo2u9E17t2rEJ6iZAskEKsaqN4b417ErHbRu2mqzUZ2kUFjHTXUQZM6FNjdLqNQBeRXhZNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZiX8aMS3gEcsnQRrjpQ4Mj6V2qWLKJZBVbQD3adS87Q166AvjtWkZjUNcyqnpGNaZR98k6SvpSkTfRTWVQZdks",
  "key1": "iKn5HrRHAQKXRSHTWrShC7M1pHicuSS5KmbFjJTWoUcuUZxbxbdP61tGGduU4MHAG9awL5Ahti28wX2Fkxc3o2i",
  "key2": "3yBt5SPxFpZ6RADEMgKQvrDwKbrpCqYYEgzQor8QBLcTbsNFu54GqeqMXvkjh7NXNgCFozDu81F472iamUirR1GU",
  "key3": "ScnhaQ14vtJEGnWBsRg3Mtp9ndZSaXwpXyhbg3LXjUiGTZTyXeJjYfKnzrAydgdx6ZN88FCvmXE4WbXjkD9nkpp",
  "key4": "3R6SsaKWE7rCa9aLwTjSTUKtFjxyPtwvRom5fBBiNBJ44ZSXPSMokCRPpHRcDAfze2E9P7Z7cPuWLRKXmtFXging",
  "key5": "3seHdZ349rnzsHS1hWbTsJUgRrGRButC1fhcGMbeLLMGBp4porBd1iZPBxTL7iMGfFTv5rLegz5QNam3rHhgfaXi",
  "key6": "5seeym22HQoRAcQiEncK9d3BV9fkc622ayqRptuR985bdpBstbsSdfKTseoChE6f21anwCnArGG6XK146k9fu8vh",
  "key7": "4k8SK1NMeLHyH4T3RpZLh4BYTNhTMF3uWxPQVpVictrcsgYCUoZrzjooCHxX8vZfforWxQHbd7UNGiEW3KpTDhgz",
  "key8": "4bVgTDh8kdrB5GnswQJ6Nc89iPKsVfXDk12L2p3xdB2wf5cDwoWeQKekSRiKc2boRZxDvf9wcBvi1pd2MKWw9Jfj",
  "key9": "5x4AzZoUXugWtU14HyyzPb3hwwyFBVrqFa2PPBtG3SESPp11HpHDyhhQZNAzJu2S8C7gmB545sfzi9fgNBtaZDTp",
  "key10": "95VvtV92RgkHSFYb2r6i9r2e5wQSGif4FwBf55kCg3gfLcjghkuMBn8Txm7xVWzNtvZSYFzHMjibKSUSc5T2Qvk",
  "key11": "3o5cwyWtatGxCAyDCP84YigyfZBWLkGAB65V5JHU8SegCvvn1A4G1hGnduLeosHQvdVuEbB39iyd6FEADaUKcyqw",
  "key12": "3ZrXSWvWUhnuV8ER9MMPb6Gyb651XmoHKnUHNGzVdNvHmaYZHN5E3S4Qnc8VbKn8BkAzcG3sRrSn9mU8n853jNuc",
  "key13": "5qTvEhjbwE9j3iRemMaZgK6MqhTgVNxLTsg1xqnEsbXPev58R9r9k9pnJgpjNeKvoeSoUUT1M1poeSCnZ3wP7xjT",
  "key14": "55KdHAiYFCZU6BP34ZxYRFqhyK5Z8b2cA7V9uUMLJXnNZdiCpj7x3kKGEcXyYpsmyo362dqKREG7isyeW6fbkFzM",
  "key15": "yj2zG3TvMeXFVarJ9H2dMHze2vcRT2CTvi87cc56BEmwaEUVdFBearuEvwQHX7uijv3KbniNMhVnWZkDmqBsrn4",
  "key16": "2zd6SeYEqbJ9nSYXgqPYkC4VQanAcpjJWhQKpfhXhtBcTxgP49NrKtmZEUUWX8CgJSjVNdR9XW1SEx3m2XW4EMRq",
  "key17": "57o3wUJgdaNA9sxf5iVi7daec8UAd1axaKyMRVLSzZdjk96BVHHHRsjnccAM3XpMVUK9UFNSHMfRLe3YxPkcCF9R",
  "key18": "4RpgXmmvYNjF2i92BqBqnEYpAcbtXPUVtvYcedT7ALeXNMAuAUKGAxUAJnoZE18dnNMgwotnAxmF3KDyBRYecvCe",
  "key19": "2HyVAaFdU7SNZPP3c5KJCzeZbdpqYNpSz15NidVYfyAaxyEzaP2mZW7NxY4ZHAY25GMHoPaq7kugakWzZRoenUq3",
  "key20": "jyeP42xr2usCSCh3ELbd52AWv9ruDhipMcxKa7pmLPnZKgmsk7eyEmBDRXTTzPepTvryuiJQsfdbo1khxQeiPuX",
  "key21": "4nNZqAxBgTi2N1nfeT5k4Vjc5cicd9LAZETimyz3Us2BMrKeMC1q3rtnyTPc5cujFHBKgqwDf78fCHsF5MgGfrUy",
  "key22": "rT93gBCnGJBQjs1SLLAcuXGtxXc2n3MRZYwCnNnZm67fdzraH2kzN4BkfDchssduPRscrHZBcLxTT6Qr9LGunyW",
  "key23": "3HUDXHxcabQmB7WzdSP3RfnSsWga4aRudDhhxjhh6pgWVvoUdCU6ocMjsw3kj77vVeU9amiBYHhxSTbN7aoTc1iK",
  "key24": "4D2qecJ27oGAmizYwqAphbakUBQqJfvN1fn94WCMQLbMsrVDp7S579M3SFCgHVFRjbDSF5r3sMR3GnXAU34YKgEm"
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

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
    "3EBrht2m5R8f1BpR1vKpN8bAdwCzp8nykvpAqTor85RAmWhZZNNQ8ACFe2F7RUTxyjMzi964D6ygUXstM8rZekUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5jEXmr23XRMAwD8TKtsR7ynZPhw61TyKU93DhF1BCfmB1WEUWu6i3AfM3YzyvMqkLnxS5pcpjJsZdPnVEdVSD6",
  "key1": "4rufewypnBQRMXfbxysPCPEf7EURcXhHSVLduiDwxkUcFn2JefiaFaJ38HApUJeR8w5N6viNUh6mZCKrUxH8SwZj",
  "key2": "4r4aPZ78DXj9VXVDTXVDYX8wwihoHatbqKQEE3kWiFC86yusDBk9jMHvVZKZiESPpi3N6u9S3KqNND9knGRcGWok",
  "key3": "4d3SPLJtnWcLC2QXAczBPXR26MX13kuGT6HF1ACkMUsXav67YxsECuA4N2JkZprcb1Yk68ZGV3Hazu7wuhVDb6Pd",
  "key4": "4mGSW8yXkgnmU9dK827Rn7RyQ6b9oKhnJaYoTrJUkbLCCzm4GNuBaEYw3fZTysYYjbLj1KwFt6fpSpnu9XU7ikzF",
  "key5": "GF2z4K8VHtbssKcr8acsgADywCHXUnUHjHQKuDyLTvWgYkmQjFpGoEn72G4ubt2Rx9AQVCNtb8xaS6Cy91hzAj3",
  "key6": "2etW21iUYFQWNesw3kXrXv966PhQspzPdVu6byUr1rxD4SvhrteG3Pq269Sxmnj9AXqWFyUv5pMxJyZiB7H1yJm1",
  "key7": "5XFZmkUAWS9g5g3jmsNPpSXtgXeP9NyhzJzQTbfwBHR9zyZAioCVrnSkmP5w3bGDgcgRs7ZAL9aebdtMp4R8fH8o",
  "key8": "5Zp8wn7Xm5zSi4Cha6gTT98vWr2zYgVj2JtRfWjruAVzZaMDzgQRYxLETCPpk8mQC9Gfp8FXc1sPQADFE2EGmYCw",
  "key9": "2h9brXrswfJW75eyecACc5KMGqymA1TtE7oH1xY8Svd58Ly4FiP2TA75kgsn9grZQ16iF4TUmnC4w6Raz6B22sGt",
  "key10": "2Dpcw2TwSrQfZsTMGJTQfEUCNYACHDWNKuVtoTQ2bHq5uS9XSFavKKNTgX8b8taYKJ4UVa828HPktksBxMjcyf2B",
  "key11": "5VaX877oWGXR7xEwEowaxLGhhTAZQBaaXFdAnNS3BwDCbyeYTkhSEiBKcqMUeFJms4dByREJTW7LLhasor4QJzN8",
  "key12": "4Mg1aCkKWH1tex4jDixz4o1CWMt1kTutmCCsSYmsSsoN1mWz41iwKRzGNJHJdJFyDr8jvqJCkKFHEeREefUyPhrx",
  "key13": "64f6sr98CjsKvxu8skCXHhZcqoKeciXx1y7J9G2JWPYvtXf3xBz9rMiFxgSahJVsqq6hGrCDpvFK6touR7hLVBxP",
  "key14": "24gj7MrCbD5m2ja3fJuawwFTQfWj2xTrGD412tM6t9ckmkcdH4ZMyQKB1rcMmSmx4TFB3heM4tVQ219dXS9LYEhQ",
  "key15": "NfHf4uRFB5b9pAuBizHTdX7r4szG3ZDwqzxx7BhZ1NTNRb2BaYKodtYAC5Daz3QoWTQt3TDskUBjy95BLzredoD",
  "key16": "ybo2pnS6dmXLXmd1EH9sFQDow3qzg229A5NyK9JTJEjPEKwmLvB569HDB2VBAERUgq4Yn4gE3K4LJNcCDwPNekh",
  "key17": "3QXTz4Xg4ENJm8wpDi5645TwvUcA5d1kSoddXTRJPJCzUyoV8TnRCv5yH94ezXjm9cLpGjQ5cRfkdbnPRc7K1n4g",
  "key18": "5rP34X6b82Pme72paeZspPF5aX3KmjK1w7f8A7Z4R6Xek55kYmQpko4uvTfqi98fnwQFpVEeJxTKprZBkxFEyJHr",
  "key19": "2mwSzm12Doj8QRDSiMArhY3p6ao1mdrGbCUHTK8pB5FUwvLwU8ogQskeWqdoszPMqtubpnT3kzcRf7JNSYUxsHJS",
  "key20": "5rqS65v5vtTzuNZYLUoq3qnJmFUTnebRE4qL6ReZydCXTDmSrz8bejN8LniYrmEtCyUnR3u8bcACJH8aCnJ1GxSU",
  "key21": "2BEBz9RkLbyjFdrn4x4UqSbiPYPdVHJyHagbdjwoXiR9qvBS17dDT7PnZQw4Q9hiCRBVNXKQz9C9s3QFxW8YPyAR",
  "key22": "3G8Y3974v9Ur8Q57wwT3uSMcEs56qT8a3aXzotuLhx5GFTeDVedDbrNjn7BwLEv1pTiksQtJc2MsWSo37CruXjkj",
  "key23": "535Rqezvi7rVsWNAqaf5MnXdARN2q6TpMaYJrZKFZS67bpn8eQ2XB329R9hSRAA34vjiBseqmQrcZJf2pPMZKN2T",
  "key24": "417gn41fDxqpWQebRm1N2Nz6opRffmyJy4B3Ews6bApezR2CWY2obTgzMRSFBq6rRxhcDPZrypUh8XuXfX21rumv",
  "key25": "67iqvEf7A9JbibtsCDWvi6rF3c37uLtyayyvkvZv3DLW7wFvMF6NpfmQE9rDb6EvhbWTCTNkdk4exSVJywSQhtwD"
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

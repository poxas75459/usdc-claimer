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
    "29ddzbjBJvBPpNuWJtJKhMxqz7D8P5KzQu3SMgmFqudksoqmpwkuABX8GSQMokKuxE1F17vyMbijUvZt6AnW8nmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nkfeZnLfw6FkXMQwEtyisppY9MeG6NZE5o4Z7kV3ByqHktHySFAS6aLMrfE5RykGZtK7Hd58w3iYd4pubDGz3dZ",
  "key1": "2PcKKJKcWySHmWPSMvG4kJd2PpDbbaDZFNS4UfrUPvusBSMtgbD7NPsEvtxvQwynJa2Cc8URpQ6gNNfBc1CEtc46",
  "key2": "4t9XEFNtWrMDoTFHB9CTqxYh7s8zf97q9GCvfP82wxqHntmXMT6hzaDZjbasDuMcqSDWkwjCEnuHVaBinumEaBBm",
  "key3": "5eiHEEG3r7VT6ehN86oAxA7AwvLCkFznmABM4p3jECSenHYSvvJNYAHhHMEUbaQ8ehfjuBVsaFmMuLskYYsdX1zH",
  "key4": "T7mA4R4x4bXa9zpeptXEhGJpKWtDSCEYn6LUqshwVn6kUQSrM7zyLSREFtfVetyWVFJvZP8vNzVDtUoDbQy6HiW",
  "key5": "5iTTfti7fdvKtBkzm7VB5B4Ve3rU7imnDbrdfUFiXT32S4nRK1j3qqrW2MMkw6RyQss1fhVphAtpyTENAs19n3y9",
  "key6": "5VBgmxkFvuR9afH23BTHTrCGWNasBpuCTievuhvQapKAdMBWjpokHeoi1U42vf6ev1zqJdDSv7hcWuhxqhZtrGx7",
  "key7": "3Lz9bZLJys4c4zSKhFWEWY8JfXiEC9GFgYUW3UYHvFt9LXPzQp2HJ2QvTGT8PCmRUM5A6TR9pAtg8s3iSJeSpkLi",
  "key8": "43XAbqjaKr3rk4ffFz9VyVvQoKu5RsNT6ee1HsXfuxs4cTJNEnFY3wytRrEywmn9JNE5xdLzwhyGieZiWcb1MB7y",
  "key9": "2TWD6fL5MAQukhhmPTEZ3K7h7Brsp7tqXdmUhY74tY8FNXetKvTWuBHKvx3iZh8MTV1Yue71TXPRUGVqibtuaCp2",
  "key10": "55E4T6rDfyUsBRV96NE3nZGxADyCDLwr5ewqsxM93gJDzUP9WjydA3UsaTixo1EXamu2QruMccV1VskNaLVECTi3",
  "key11": "jKJYvGkuPhT7ba5rXATWbnVyDPiB8VsCxmuYDh4joJi5WSSoNAq7fKd6ZtyBE29vP3LJBj5vnsTpGVhmeUTsxnX",
  "key12": "4NRTD1nsGcyi3c5pcUccTBFc59R2A57cXWtNRri9Lh6H18YuwNKwvjGS7cDDLgcR25JWt5qcLbYcQ8HsVXqsezAE",
  "key13": "4FoqeuvazvjeswQ433P5mt9EPY34CEKDWr5BRE9i8NtKyWFnnTR3rw7uFkWaAyJGdWpJ3MqECYiTJoQDeuZWhGnW",
  "key14": "2LRsQy2n8s7ZXEG7MNwftJmKSbUQiQqR6SR3NsyvFGXMhZnbLezyXXuHQBr1tWKyJewn95d6v5iLfedmTm73TjqH",
  "key15": "3Q2PVrPb8NJNTCZY2exL2qYENXGDiuHaynoJUP4jKqE4vRcpbdbdENp2BfevezweKhy3c2iTTq9Y7fWqKdaMp6N8",
  "key16": "3wFm5meGkLpBZr2idJDMTDsz5jUX2EnPHhAEn1enNET4UPAk6NFqH6BKoZQSAWWt4PChDphd7mJ29eHAfRX1PnJF",
  "key17": "4tpYatCtfDWXcaJVBaVA2DY4xpfoQWyzroqexYJqWDDyB737HRzXUsSjFbQsgzd2K6wRqzsRGj2eUXJckJD1ZCyj",
  "key18": "2Wz6MM77fDE9d9Tp4F2Exthkzn53NhAvrEfSiA7CFqDMnSVmPLj5WknURujz64jQeMNuzkcBmkZ4LMS45xjYpGGD",
  "key19": "pe7N9agZxmyr2UsAAGB4nCmVTR4pXiTp5yDVY9LxVx5SB5XvSXEeMAa7hY1YvaoRc8VpcgCs9zYejFA8MLedy5J",
  "key20": "4zdX9hucHwgPVdrLy9m2Rwnbt6yBXyh1e1M6zmMmNUbRzstrh88dL7617LEMcX2enosA6RXR4nW2AzgaoM8dQHyk",
  "key21": "2f8TsUnnRpjQTiQ9TWqEuH8udcMtBy5LxCNVer1NVvADsLxEfQmNadZgJfHk6jJXPxp2i843TK4dHoyX6hBgQCdd",
  "key22": "4yGHfxYLDT6Uz9t9KN8BGCtZAttRVBoLQCownd3cjwF1n1jcB92Sshz5mWmT3m32tkQ1wDSoHsibhuyMUDd7cX61",
  "key23": "5ffo3Fi96D4yf8WgW1c229gbyPg5dyQ99acTX4mCygPzaDCEQxCznXouHDwnSMXz35fVVqRy4pGyt91fNPPuTRWZ",
  "key24": "44P9P1omsWnN1V8XgYHEQvUyn9jrWGV9UbD5Wux2Cb4Cok9GkETMwFaSTbeh2eiKA5z4FURvWuLzsdBXtbzhCk6c",
  "key25": "4tDrpV8DMqX1KXMnAUqqLV4eZcrphngqhFJyivS8BiXMVKHM7G6Dp8aKJGCVdNGYme7dUDg74dPyiNKGFf2VB8LF"
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

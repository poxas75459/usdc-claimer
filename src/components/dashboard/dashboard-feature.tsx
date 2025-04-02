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
    "5ig22v1MDdc7T2DAfU1PGgkVPuFCgLZgfgd3P7vxQTskRWMPrkeU6AYJhCdgMn6DvEorQxDJazijjxHqTe7BZtgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551v2RmP1frAdiX97MT6L4vVSYGsKyui2HsTB1jV9NwkMRRYPTC9r6XaY3htJXowB15tZ1QRLm1YmqUDBH6g6hnf",
  "key1": "2rios3BxnhHif4UN1fsXeeY2LyqdRHmP3hyy9D6Dc4D3BQCzbBxkMk7P7fnvtgJZSb5ZbgzUWG6vDRFz5QUJdEPN",
  "key2": "59TPBHxuvaLZq15BGYYdgbM42qJnxdXvAJtRbPP93RufkhoE2tujarimNKtP194HRS9TL1PB91ZKi4GqQ6et6UM3",
  "key3": "T5KAqDV75koBXN1ADXqZNT89v3uL3emfCDCqm3qzEerpUf7tkeKXotCk7haPENsPzpuE95ibaCpebZAyEUpacpy",
  "key4": "4zVLwH5GGJU26ZgNSkTjnvj3g1dAsKXuTigF7Yr1PRRoHnvfSpvGfUJAY3USUMm9cLFyuZc1KvsJjhdVnErAAkeL",
  "key5": "yq2n3eD4hNJx9tfaNwWigyw8jWhCBC8nnLpHtCQQMpe3E8xAyYmff5CgmD61vJocckECGjWj35UdcFbzg3YTvZu",
  "key6": "2vES44asCY65Md66WkmesbC8LSvnxxoKTgvrBQLWHxuzFPdkh9pwYGYHZwNDUWE65oomsP5SgjaRCzR4YMk4kQEQ",
  "key7": "3m48vnu9PUKwVtQ3Bhs68vZDPFXsRAtmQeTQxitR6gYZqo1tsoCEUwQHuqeF9KUCMQAy2Ljcq34vxkBs5dSDgmVt",
  "key8": "4KsHRTs8QjApzRMxHH6yQ7gy26ZB1QKNDRRx5kpW5R6VwnnbTAXHpJNB1tAE4yBYWC79Pkmkn9qfAjdouTMpacvb",
  "key9": "4qLQok3wSGQLjJ9zYJ9BybuqaYPbxKJ3gFg8RVJcjhrNvwNJ3DD6a9N8yAdKBDS7gCedW7PXiHrmRs1hMQf4DCxN",
  "key10": "2dTY4qPXxt7Vg6iKMLDgXTT8M9NsfbuoCYG5nuwrcHjrJEohscsPxHwMjTkfWhUeknazdHZAKtVHFuAGYy9n46SJ",
  "key11": "2y3FFdqWL9s9RofC5i9LonXDYrm4AMrHH8U4NNwiyGucGPR2svvRPo37WkAtT9uJVM7w37hEk3FZT29Wit64JQVJ",
  "key12": "2zCJdp2ad2rBHef7wgSFz245DfQtF4eXJFQZrek4Yxm4fXbsgjGbCKq3sBhSgFJpXrUbw2sKEArcoCC7Es5zwih8",
  "key13": "ZxQ2qbSuo3iRAd8LedfGy9A2gdtqBEqBTzbBxGMPN4746oYJsYXrgjo8i4UKkJvMRKWmBVn95WcikkFT85tTXD1",
  "key14": "2nDpRBH1oFxWPeSAQRhe9q9KYX36eCMfKjHujnLtJPSbGnQVXxZB8ubyZzQ71AGnM3x9aVDatpePcZDGLiGz78Sd",
  "key15": "W71sGLddwVz57nCGozCLn3VDiDVTBukjjN2xYQmVEqCEs89vCxYhcFcq1GDLfoKW6QRRvzZxSeZP2PgyiCZLXFa",
  "key16": "4cUeXz77bRWiYrbb8SZtHqJ4DfKyZoBAugLAHw3sVCm75GGHV3vDW1LstixFJqwqFRNXD3adogW8Q3RGdjMKxPcd",
  "key17": "4xZPVMtYG5Ux12yKZDT79P3b8qDzTYhxFsnUmXYCq3WJbVmc7cNJBESUfmS2uZLRSPqeMUbaE39Zb6mN8DxQx697",
  "key18": "3Bjk6J48EVX52QCHh6hTiaisU9Vdy3YXNC2PcmFWvurm9gVftm2Q6m6iKrGND3ZrHUE4mN1H8sRsWQhjV2UbZh4N",
  "key19": "8kQpDX4jC1n7PZrj5RpjpEq2GrAhkisLc9gQb7EAJLpWSEno9rZqE3oiwWceisiX3v8MkF5pSxn5jRU1yi1aYNd",
  "key20": "nqj3cNa9oT1FCTMrZYhp98p2645zQNAJyyR1kSXezNxLHgPVcNqMUDa175afeGQGeLCPNzPPL7XTkHdPDB5DX2Q",
  "key21": "3SW5LbuwooXZvGzmYoAWWaXjvkTP1cpmx7xYq8RTQEa2bn55r2Kw42dv5nLQNZW51bDLx6QL15FXpohG5Xc5DnHu",
  "key22": "384XT5zbhyeRwo2QECTPf9ET6X9dbXbxHE4gqpMVfazrFKRZxPUG8N8kBH5G3Hne2csHcefckJoU8NmsQJkCDfxE",
  "key23": "26iVJ9ssTSTxgQcazeyn9zpdcJjpsqqM1ckRw17dGRBJkW94qcnjA3YjLGm48ceb7Eu6JGDtq4hBoH8j1gwqbQK3",
  "key24": "BgJAxrSs7cf6CQzwpMC5hEF3QWcTt9VQDG9Rj6hTQSMLGfkJ4tm1h8vUS4AfSYn5LX5Jp2LnutGZZzWruAKZJJc",
  "key25": "3ek83HnmF2j6rBomQHKp5yPPfnWe4X3mNQjWEzbWiFRferbjacC2C9YwM4EQmkx5MLYWb6oz8tAg7XPRHK3AAKFZ",
  "key26": "5RaSo6cjukRSom7UU42eVvwe5qAsvAq5pekcg2wAQ33KPjuDxbtj7peBc6KaaCYxYnJFANK298jk7HjoDkEs8cQT",
  "key27": "62W9sHAM1N753G5zei8Sgk3ZzkBfy6qLTrTbJdhhWVAquAwmPMjojkXydpoGecoHTg1W5M62dxATcWoFQgqviyJA",
  "key28": "y9WoS5uTayyBq1nArd3M4eegeE4b8JGPCCH5LNkfrA64oNgPHmsaG3gK5Pr1njas1Fy9tfB6KCWLB4Va15JqML8",
  "key29": "577rZiPpo3qpZ4ZFMYSDkCPEJ2GwoJsCdHvQnEWuhHxDWFdopq918bSoy8wn4gW8R9GNZTsnYCtNMhAieR1NEMD5",
  "key30": "2dZJxQcwNgvFYgGq1Y2XVjp9psXPYTWytyEfpF9kbQVdDSiytMFgdt6LjxzMyziuS82Q7ACdtteXo3XSRUixvaZh",
  "key31": "5S7A213e41VRnHqhvaHUU7qPEgoHPjhR7zx8fZS6YV3BZurPMkkYk4zLod7E3Y9uyvz4CxMXybLDeVGcJ3f33qwU",
  "key32": "wnmmHDmxzgYhuHS3dtttx69gFqwbkv5gf5EbdmuUENHuE9dJNQywKSvr1ZDcZmmdFpkMo4gbNS41M1RyzaNEzrS",
  "key33": "4kFWWt94oCZa2c8VShBMf73qgqcDK3cZYC9nAP5jd5AqAp27rbzm1tSDA2hYsBcGCaCZrnqXjfCQxYur85C9GtMp"
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

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
    "5Mi6ceWHYDdK1kaUwnLbGdNoBMPpZHbD8YjvyiZSKGpaos5zhZPybQxkD4XPoZ9JTDKx8CGZ4piGDJiaak6d428E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PJYuWaPWNwjFz2tY7o9vh9mFJpRK9ig96dAoMJs9gnMLSk4VQg9gDxQVswr83D2TiZz4tVKhd4XS4VrNk5D1ik",
  "key1": "3VJAnYR8sKpLRf4g3bxUs5yWdwy7PhHNQfD7xaBxW5J6xLrW6bfzoCUVwGZGhggWaSqhbcDATNpMWaURfNmHbjuy",
  "key2": "56Vycz89MMtCJ5nkT81tZNhBwxd4NZuJ8XCqyR3d2VSjmXKDp28b2yGboZW2RnTjxGHGvvd3j9E7bv13muWSYH3e",
  "key3": "3o1ymk9FTTvAK24Dm5LaRafJ7dYyjVwhEiTD6w7bDVCKXZea75TEmemn1pxUorTzaF5qamqfhF6modauUyvaKrXz",
  "key4": "49J7VEmissbScUs4XW6b4ZgKEr1TYZzJPyVKLbRDBQA32976j38BW1wV4kFdxqXBcYrdgK48DtxRbjQ6Br71fhQu",
  "key5": "5SLaPVicShWTWQkFxSKBiPcdVVd9HWGbdph7qXiakTekoWRaY6xa4zqNkXTwKXfHCPr9eA7FMGrhkMGUrs5m9ymJ",
  "key6": "1cWEt32EMR6uhQRWkN7BkfVzSMsGJyTZDE3dfMv7ew5gRWn78LpinCKZjsfmRbsv4pXoiCfSqQ2XTtzJ6sYXK9x",
  "key7": "3N4C7ariXLuamByBCTrPE2KMkk2T2seRKADvqYUUD6QKwwAa8sgiSoEGAeaKsgi6Qwy1T2Lbd7CSxM8ddWx6Pa1j",
  "key8": "5VsDkemRwFEcjeAaKDAUGhzyAbSJpVEw59mhurQQVRKdZmaW8KEsaFHR49Nhn7h4gi1NXgjBakqg7WpRHUDf2Gxh",
  "key9": "47iCJrBAoUmEp7Rp8ok1fh8TprnSaqrD9CVWAaf2Jma2Phrevb2TLNsdHL8U1pYwzfSc8qHFryfvavrdd38bGMAn",
  "key10": "2bdfLC7m8E3ARfqYY6gxFixJ7L37W9wYUX4Jdd1GXGiLxhaK2YmjJ8oNe5aeGj4NUWr7A5Htfw8wHKLx8SxUT3HN",
  "key11": "56Tu3dfmeZSDXssRph515EHZoKgXTvxPTvnj2hkbbcoJYTR3Gzwp4um7R7JhoqxnoAW7A1CXR41b11Eg4b7LqNd8",
  "key12": "38zhqsrtzFuMesvZPFuatbPKwY52X7jANk6dr7JddEcN8LkLJPCssEjCHC8WbiGVgdKYSfFHNbmhBsSGwgSxSzwo",
  "key13": "3GLK5pUSFLS2tTnYsANZY4GSZsqLavd4twmrWiFxiq6k9wcxgjmYjNts3cHAu2JAwvfJtmQL9hz55eJiWJiyvgU3",
  "key14": "2rcC9zzPZJneMig6KFmqm2XNTbEMqxyDzTmNmgpQEGJDG1zQGrcK1fG8xECF7Z6CTCKGnHrJNFQrB8UiB4xphY7G",
  "key15": "5Ju2jAmLaR5Xzdp7DeVemBePZLKxHDBySzyJrcA1uPA8Pi7RxBAbMKwCYKyXMsTrWXcwAsHEgAcfcDXGZZ2E3DGm",
  "key16": "5NFAXDm6MK5GyJ4iMpX1rB9E1yrK9DSQrxfru35Zqmg2KVrSDV6hGf8MevYkNUATDy6Mmr4PbdYuMbJb2D6cYaz9",
  "key17": "2r3oSNpwQ1Vdzd8n1M4Kc394SvSU3ijCYh8a2F6DFryxYVVjURrPn6WxxW7Vk9UC3x9ZjuENg1K1CK6jZfVPGgTG",
  "key18": "3UDf3A8H1ShsKAcDMZ3GADjewETJRFRkgwHg4UKprwkDtDABCECRk1UmEwSGxksoKtsiReUmxVBsggzkuStE4yRv",
  "key19": "4pmnWZZgQJtKaoL7bUqcCoVR6TXzbPCvbfvGXHQiP67aP3SQNkYYhrQcYCsppHhMPMEKVHsvCaTjzhQxihRTCu8M",
  "key20": "651YR8rwQDRkwFoyMRRk1VpzbB7rPw96Td2kENoq7XKxZbkqSXECPeSzH8GNsXDRLeYEPHynRpoa5DYZnLmQFM4c",
  "key21": "25VaR3mJ2WHCvV9zbtWPpusabT3g9avER53ye5pGMvvHmCH8fBvCDM8knwk3KA5Gkft8mzyP9LVyCMqkkFwHHPtu",
  "key22": "3duHG84ukS5bWJiFQGcg5vy6r4M23DuXy5PgntqeT8Yjv3fXGEW8XfVtrADdaCoz65Buje8SsrQsQJWQ9TaLSHuu",
  "key23": "dn9FeVqgL3CN63CsAhdH9BFJMfCdrRwaLSMjqsYZW2vWNVNQrzxS8NiDNeTcnYKa1xdpDY2EVxJbw77ryS2ZNN3",
  "key24": "54xy6qYiwwc6CUcb4UJfc2xDsifT8ijPoKXLjHqy6zZfnpRsESg1CVWb6xeW1uH7WMBKaUeTMNHPasnAQYxqDF8d"
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

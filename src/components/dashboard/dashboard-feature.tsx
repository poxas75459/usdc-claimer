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
    "4KR4LtBjrzZ6JHdxpKyKBLw9n6LCRV9JLLaUWgiopxmuqDSnHHRKzyN7qWgxRNHqwLH9WF1MuSAkRtSbYhGUhhGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LtViqh5xKFXF2jA3QZUECSH3dQMsEAUTz2WVvL2ny4ZUJJPAq4p1BgxkvNzdrP6hBXvJpNUH74X96imndafdxtf",
  "key1": "3icVGs2auPDRWFqDoqFHbcPSq5sPhDUhztKyN4dddt1nT79UBFhsbfVSwjFy67EKGgEfsaAsxehFrJfjv61oypAt",
  "key2": "4PLMrsHPAPRbiieG77WUMRkQu6wNyUNJwkan7rujjdktfbkHWki1FsJqY3WziYoDxg2KEUvV6HN125NAMoAhfHAG",
  "key3": "5yxGShX5Dhm7CumPfDsFyDqbGp4mevNVJ9iuxMndnmfawR9kYupWHdEZSogtyTW464jTkP35W8LfxCh5yNeRpPRJ",
  "key4": "59J5ipYbuVn9F7oLfi4C3j7nvGwoVUH6XUDTcCUeSZBDLZoYQxsGMXeU2vPeoDDCPrNxMYsaHYZ4oKycJhzMA3dZ",
  "key5": "35WMSoKh3rTUvQupbrVkJu2HmA83thKmFpj28GKFYDkoCFoRKFhSAwbaYNjuDhiRb2Dxp8uht6DtEXox48JR6csA",
  "key6": "2Keu68oYv1NNbkk3u6mfrGUXadVgSzFkPXNxSAk1JrZH2Ks1dMtmf7BHpYhy8yoCcYHx2z8dS3makdFhNgp8XEY",
  "key7": "5vF7kA1kb7wadHsKwzhpBoHmPrvgXEoyap4XodXF1y9zWh9tVuLPe9LqVPmrrAHP5rjXWeEHoTxSwDcfEDSwKyxR",
  "key8": "5JT3UhozfbQHQwfVhzirFfDY7Et6f8eKwCdjsGfHpvkoDpDXsGh9Zwd8pojvaBLZTsuAhnmDCMFRm4y5ftDS6gff",
  "key9": "5vK4wuL8N6Z1F3UVHWxC8GAivMJFECjV7zWD9DMubRLKMxUz8rnN8U7kcM6hyGCBUFw7b3AcyqUr218LABuAFnYf",
  "key10": "5w12MVvV4vUUASbAandEdbkBRSr5atWrVQyh7EtyMYB8eJ7RQrjL9nrxWXZaeZ6YijDqQBxmrzEAC25ZU9kqfjxv",
  "key11": "3oCQvSkucHn2Aunveo9YkDMucKA8tVMhBZ76PiN2DCyrwv56xY6PsdcgU7YFbQSjGERTFx7xNKgkrpASgUSu8aVW",
  "key12": "3GfaMicHFN9vJzUSqTixyUZABieLcy3VGw9dQ16mkJ3P2q1wcPjWSSL5TCY2LwpZhjoTDF6y7D72TYn1PL2RPRuc",
  "key13": "2NfcdnYwn4gAY1QJY7vYUcRqVEqDVBERwXnJ4NgD3Fr4WcgizWa6PBQM1SKvuEkiussSPW42PfxMpkJhBMkV79Xu",
  "key14": "xs7pTLTD9r7cfRU6WbYUykLoqh19vjjUxBhp7ZRisSuXCQ48y4hsHx48saSmJWcHRKugSBmn894JKqnW7o1SubG",
  "key15": "2dtcDVkp5aMVadsrxuZ44zEZXt4PcTf7fDUCs76RCoRkNyiPvsTR9iveePUYagLegwSTSLPaJ7XpAgzE1FTFL6TN",
  "key16": "4EvAa9Mmh3Cz4EBXvWadkYpXr6QY6oKyCquRo4XU8ykyHHxSfQkFuA6Ezdk3bxcB5kPQCXfCL7Atqev7GGxBFPkk",
  "key17": "5HPxEHpAHaeDXMYNGCWeD1Pk2ZRV49oSFvUkYf7vEWREXB1dA7ti7oB1QAPLMBvghjnGBhgC5p3ULSBPxg7EKmRa",
  "key18": "4wgQhVpehGWZm18faTy75RHJA1WRoxZ5pwjSqNG1j1Ejmj7PWwB9WbCDo2eNtKmeHNjBpoaTUpe6AfK4vxFTWvNH",
  "key19": "5Kj6LYpUz96C9PVvpcSLUYkRZHXAgqgZvpHpdqGbvTiPJVwVhC8gK9ZvU94PPQE8omXxH3d54dtnfYZsHBAYSA5w",
  "key20": "2VSnxCEGA3cCyNSkc2gr6PMkeeMBBFmoqeNkKYn9cUpuAjT9UbZ7AmqV6V9pdWeZX2jyqSKKPrnAkMUNPEi8xKwR",
  "key21": "3yrXDuozfa9G6AhxAXJxdV6Uxx3rFjdjRy53ZxzGaMbCfqSTGsfwZ3NbRDGxBa1WDbFvpqGjfz1DEmErWQVpfGmP",
  "key22": "5PKweXWBRgGoJaKe1AETNHWvDqAkLhR7NRvrvQJQehvSKkM51vpLHtiG4RYz61X9dRTsdMwRf6XriJmR9gx7Pr2Z",
  "key23": "3wftdM1JKbjigXHuDyBVsRNgrKF4NdbGaXc2LWzKgWVfJU561SxHDbRF1L3V4PTtGXDQjZQT48CYSUZf9phs8pPC",
  "key24": "2TEPRDEzqUhJ9nNcK3QjthksNt7QN7fJ1LJbwwtU3TenXmh7keMEU5cqxfARpmbn2gQ66zwPR8ZLmuSoc2bnXkie",
  "key25": "4f4XyHwTLUMZCtRmN5bz1UYLTiuZAoFc5zz1C1t1Re1sKdFPuVwtjYhRxomcuvK1Ap22fCNdTuL9Xrzzj72nhq4E",
  "key26": "5UMxXkQCC4bxbkCFz1uajQHrXFZ7FGV9eRbFgYHCgJkvUfCLqBd5iFyy3yqr5WJNMyTiDRwydewnUth9Ycv7zmRv",
  "key27": "54j1g4APD8BazVJKX46ntgG92UHkobGpgSRFwSrfhbfrCrWQSxi56mfwzqXa3tmAL9Pt3Rq1TE4HWfu32qLLBaGP",
  "key28": "4faQxUgipsD7dD42v6EpKWrnzYRCihan6Mjunz1JyWp3cb6h3JFB4n6So5G2PrjVKZ4LiZrCCrgvrJeU9vu5z9xU",
  "key29": "5QYrYCbqQkjYS7P3fpswqUZwWpqxKjw11Rv5SAmhiSWAxWCozeBr8ccP8CAHFmk29gzWuWikAJt6xyvdyyWw3UzL",
  "key30": "3f41kd2KJvvZVwAw5pww1wvU23KpygWrLYDVxcfQPTKQxizE7XkXcncQrQ4H7zf7Xonss6akLdSnPSJ2P6Zb2Wud",
  "key31": "4DKZD2kpStTuXe92dDnsKrg5fX2E6xaA41v9NYgc7mfMwr3iYGkcK75ekF7hy4Vwe6XCgCAxUjH99SNQm38cCmpf",
  "key32": "5abVFpmMeF4LuCCvMXxnS23rHCwBjYvbVCfhBBmEgEpprMcq8VkFqq2ctNk1oDhZNHLdxcYhCBWqix2KRCwEA8Vv"
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

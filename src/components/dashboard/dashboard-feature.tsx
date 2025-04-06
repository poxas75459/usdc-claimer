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
    "23PhXD9hdZf6BJLGRccCjPnNNdRrhDtpVG8AtSGfCVsrGa9uncE9X3Hm3aCNabbNfjp3fQXGCxsvS8xGr9ehgWiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Ng8pBWPRy9QFQKJPCnDDbVDtMPTAPZVfkn1gaZt4c5Pjd689sCg79NVLtcENypQfqW1NvvJs6wq44iAfqYo5cx",
  "key1": "4r9E8hXJM7g933Z4xEBdsiLQdicvF4iA8weZddD4w1Fr82qYGPvis8wnqEb4xJ2fcjeg1hZ1DYnaqWUWTcMpxjhk",
  "key2": "3nChn7LyGbS8WxVpKr1qWtJjgQRGkdmnrz8hYin8KapAqfqYsaDsdU7n2wisgb497NkWTSirtFnwWBo1sQ6TcaLr",
  "key3": "NAeNKmzLRVnw9AcQ96WuueENpTktNFsJV93pvHDYJznxXScqm8LApexPGzibsLbpRAdHvYSa78hk96LWupVGwAR",
  "key4": "hHHMvcmV3PahteBSqmhojY8Q2bmTJRsuTZShrzqbEsXLeBSq5fUR7p8YWswF3jtjMJk9a9pV5uVVBPqQqh12N7G",
  "key5": "CiPcJ2Qsrg2yMTRCTxrvbYYe7GjcoEuXtkTeUHupkHswRRJnZoLzkRpNiaft17osP6UHmsXZ37pyepFgjWZH2W3",
  "key6": "5YnU7mDJMn75YCzNgpSYLt6AA1Xr8gCYuSWzXKsHKyBGcuZ8KjQp8ifVjnwd4sqd3CmumhH8gNokLHPhhsLcr65m",
  "key7": "oKJcnNkYWs4d7eDTTHC1CHC4EVEL46CGqYTvEheRFzYj4FYnNEUssC5kVfB5wXQmBKmMV5vuo36EKXcyT1XyNto",
  "key8": "2CDbDGKdBb5sHeiASgJRDVTzcP7QNbD8BkpApyqnrPVRgWWrTZyZKo6L5wPc19c6upZ5bPndWwKovAwsMo5boxTE",
  "key9": "3oDare5mzYwZ8o2f6mi9CKej6RViw7L2jENszssqVriu5AX6dVkkpB2kWVZouCZAxpde6vRPFoKVfADjjs9zyeiu",
  "key10": "2R4TD2jY8Eox7tQqZFWRmun5i9NkH7iohLVfEskgTzNFSrGN43zdxPz3pSYJw9n33L86b3dEULAJjyCApBGcMHa6",
  "key11": "a4vuWrhGy1vWFGARojnGDcSY3uKezzcYm2ekps5m9eVue9t4joKDWePTZVVQe1KjiBxynU8r4G9r8LMdQqE7hhn",
  "key12": "4cpMxPC2VtuHHNwDsrsPEDjq29Su87oYMjLnsyx4LwnwckMMCa7a2XTzRdXEP9s3yYuXxnJARRG8FyZzW1X5CKLV",
  "key13": "5FSXEuXUc8UT8SwLPW4SDd9A89shx6ZxSNsGzmGNDpYoGiLnvpKQPXwgXq6YJTQAXWZYu85BoSaKDPXM2vruBGBo",
  "key14": "2ysCbf1SkJb4AbfuepnMuUhXuv5UPGrCxnLdZig35KQjA4FV8C1y2iR15Z5AHzC8WtxcGfrM49wuUnMZy4knyBGY",
  "key15": "41edf95WXqMEiX99QEWHdvZKXtiUXCtGoX783GymCYFqNgzXuibcJVLVLAvDdMv8hMyPhP5S4YmRS7fx6raJ5ZZ1",
  "key16": "3gmgoYqrcMRMrQns2cFmn4roCgmxHX6By8c5xB4S1e7oXFYdGKfhjq5p71XFKTjv2rLg7hroQ4tKuM2xbavzJFkC",
  "key17": "3CRtCLcKsguocZS6UFcNRpx2Fp6LAtM2XwtYCd4VF4zMoXuRrQ3QN3NkmZoiHjChcYTR4W8jvCoSvkqwA9eRGkQE",
  "key18": "5Vs7q83PJuEWvxXmANXqyjbxYAaRxmjv4amzfMdpS83g7PMP2d7Uv1PmCVqArNWMvEyUumeBvW9kFQ3PxVuZk7NW",
  "key19": "5y4A77hjGgm12CjZoimgsGeQmvjMumRYeb3RU4YMY9CvwBEvz7oVVMVTS6YTMhNeC82ACNcTFVe7MMtpK718eNbH",
  "key20": "5sxjxDxKaYZyDB1zyXerkuXDkFEoh3Cx3uW2PX97WvmJ3TZr9FCQsCSgAiu7VTHAR4QtVjuR46Dtx22w7axCon1Z",
  "key21": "3Qiy8uvnCruUHWQ5GZDGGTZPrCHs7NEpAiCNfoBNYUe9LPVEJuaksZ9m3DzbxX32PcF9qphEwN3BNb6foCEN7eSE",
  "key22": "afoBt9PBZFdDdrhziw4AFqU6Wnt8auqjmzA6NMgcuHh6WmsXbjSeR5SzwVKwD3ov31uK7UTWuojTcLu1x6gq3t2",
  "key23": "4e8xgpGsnFbJLcQYC5dovDHJmRxDVo8kmrk8GKMxpJe7fTZjFKRNfhVbeW6N4eF4JZUtSWDniqHpKjb1CCHqsXRX",
  "key24": "5dFCcZqE3vvERWeGRSdsYNkqChqs3ct3JqYw9UZa26gYZybi1JKfQD3bvgMpoyyb29DSR54sPJ19p5pqBunAtDNr",
  "key25": "421JF5Q7mnp4nfAHc8axmbbvGA64DMgw5TTwSW5EkU7nzoncuX8cpbkp9qww2sgEYXENxRfYkYek7L3ZcwpbzRe",
  "key26": "amZq1XdWDbSXXx5UzWvcZRsrCmF5mZQBT2ECDv8NpwXj1Y7f1ZZ8T8yJqWz2xa33EGy62qi8SFBRH8fe4vP46ob",
  "key27": "4FGqoxRHnyE2xMCEKemXDCxJvTCZJ8ZrQzS47gNk3C8AFGuDDt5DcE8G1LHCxiFvpGUu8AhLLfswu7XWrmRWwXme",
  "key28": "2t6BxUb9i1HxWysaWv9uF94cS69k8m2pXhmx2zYDopmdbn7fozk6gDzbKjCABdJyASzKUDA6uC612kwJqaiCiBXo",
  "key29": "3aBZdkLAuj9ZnjGUKFR7XACF8K2NqV26FRbtUkVBLWVu8XB9Fs7cmCqTcuVGdrw3frJyJF4MPfzBKeFgK8Dr1S9Z",
  "key30": "3njc7mYp4ZvPJjKHtWyqKAEFpexko1111rkefmRaes5h96SDAN237bQT9esEHZV1BDjKYRzHdwB5DKsNo1mUYLRY",
  "key31": "5fVRZC2AUm4GBFWVWioi1L3sdnA8vLwo5mMfQxNi3kXSf3oebHG8ot5sb3S2GsQmvkHX4n3VEJvGaG2jycTrGzhy",
  "key32": "DgCNdvLTGP1FbseKW5b8gPkKh8ZAG7NPxwT6ZMzYY7gSaQf5J1eqZYNuJ9bDXgwuyb28zbyiFWpoV59g7w9mNxw",
  "key33": "4JSvzDhGBjknHBMcbr5eywJt1zQyrU2N2b9ekFciJA63Nt5tu4AZx8bun17hEGcJWnJw2TzY7fkgjhYDBeNbZENy",
  "key34": "42i8eoWEWEcoLrH2XyDQL4vMca6n8yXLrttDWYuU3D7zogebfCxeR8dKnPoDkXHYDGa8tG9Q5QHGRuSaHTpAThRD",
  "key35": "4DU8r3McPQEBRhwwCkbBjDa1fF9XcbyBmhaKzEjMKtn17qY8Yq2gjim8NMPdUQq4gkaYgLLB3XBdP6Nyzve8SeiE",
  "key36": "3e1TWMH6E4Ps1jN3LXt7sg7cSPcpEUxzVoBHwUReCbxpp3F8nceihqTdvMHHXb3rpK28KoZRLsAnf2upuKJGmHQ9"
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

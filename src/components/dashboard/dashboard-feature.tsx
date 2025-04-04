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
    "5kXSqibu3wR5K3sJuTHhfwGooMRdRVeUwCJEcJtoDfwMfL3ri58kbhs8fX9FbfbHJutJDTwyXc29UYKWXkSUnxkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HpwVo3WonFey3Cp7AYYQ3v9V4G7fCcCCM1DTfo1u7o1yurKHXSCYRc9BU2TRRe4khx2bsDXF5tb4cixGkTSCHzk",
  "key1": "3zLajXecBdL7gWE4oXhMNQuxKrPTop9ZyG5NmnnybZ4tpjG27tE1G3FFBTZbv9s3bcEMD2F4NGyabF5bsTsCDBp2",
  "key2": "VvEmGr7nQpc613rbeQAAbcVHiSXyxEnMzjf8wwhQgksWp1J2MmMbG2ZzsuMvv2m5CqRGbpmrANZ3JCtdbyNohpL",
  "key3": "23R2NKcFH7ei6zud9hzvSJtaScGMTs7C2pFmL7xSMmgWSJicrohMjTEG3Etzgh8yjURnj7C9BEGAj9enxTpyvjFr",
  "key4": "4SX8tqZfA6fZXLk4KdiV5s3BSxD9e51MP28WcE1p69bACJucV5sqA8UMaLGDbPdnxwMZQD8Usyz72fZvguEmbkdr",
  "key5": "EhvJT8EwqMFt5DxYZzeKeHtNZvuxd4ura6GrR42hoASJbHZPt6GJ5zDps6AytieAUmGc9sam567GnL8zLLCELHs",
  "key6": "47GzW7pFH767L8EpCbSCDJ3HTbZcEaRMqAaKpupu4urBGnADPjnwwCxFLiUtj6g6nXjvxRcGNWpDbw34C4kz3wLg",
  "key7": "2iNm4xUBaA86itsDxtRREobSKnmcEm5MuugwCosCsyizFENaDcxYgLMgANqJFArqS4UtfD8tcqz4vPNxz7sDaqB4",
  "key8": "5ZUrNJSHkgSriAqoziXVaYSjaBHPyiSn6PwfFfJRTW8bAtHZ71vpKhNrQNjrwUnPDBgAxggDLj2pfkXrG949nQe7",
  "key9": "3j7XkLWAn2vxFt3u4YmA1G1mD9WA4hbRm8fXSBRVZNPFQ1U25hWjUPK4BEnvWvq8AzvtKE6xrcT67r4FktfFnem",
  "key10": "T8CjmeVmjBsLsQjrYgwKsyvHxndh6BnqcD3Fsgowp7Nmffmu6AGgwDQRScts9zGVh8ky4EJfxMQThHdPKr3wdd3",
  "key11": "2C9H3TPashxd8hAAjj81eQDAan6neyw44b6BwKaNciqx4b5x69KEdwGfDjDUER5rfPRvhAF6sqfLmfxNUDVwBwzH",
  "key12": "swDKTeQHMFAjihQrQ5kwDMEWw3oaPHdUbgmBMauLR2cxPnhbNdm5tFTCY9GMkHVskfVMX1oBCfAPG3BeLWcBtUf",
  "key13": "Tit8oaj5zpC8sT3qnHGTD79Y5mqmS2Abq5WrY9hdHYBLSEF6fbXLMBF6uC6BKWkgz3CycEnUngJqQF5BwqbTQdh",
  "key14": "w4ufMxXQC96HhRT8XFuYvYfLtQWZ47XNx1qjopi4C3q7Gx1gARfXqUV9f5covN6CxjJiN4YUcnMRSb2LYbF2pm3",
  "key15": "uAPPa5YxUBbdNVWuJZ26kADgoqmDpfXrVKjF1zFRjWGF3UDRoR2J4a49sasxsTwHZWHNx8fWNTJjQCHPHs5xmXi",
  "key16": "5wiC8QEUcQqKPedco2ZoJ5q57uSph3FpHxiaZsgmWfNZPsEf9PeZB76WFAEwYdiY9tGW8fStE9bSKYZVW81yDogz",
  "key17": "vscjQ9NEFhMhM823nXVasAWdFwMhPyFRTkGkpYedd3fi2yKe5GeHBW1YQCKwVtZYi1UBBJmBKF9a6DMiEFn3Z86",
  "key18": "4w1DU7vRNkauEZZRa7qLAzkentutZpCdpEG2tZzA1GmbW4ehqKaCkkEemaUWKeqd9jDRT2T6MQ9YFJmCSpKADFMe",
  "key19": "2i4VPk4H9tiFmmTa2EyUMkz1c1zJJp6dzfy1pvop6K9whAbKjJMNkNE7FRct6MGnBQzVLeEjxp5y2JJBHEG4m4r2",
  "key20": "3pd9kcAQBJ4qdSYy9vKTPVHvXx4hxixmoq2kepHWmQcSDTtM6XJCKWknjd6nersgmz4aeA9Zr5HPtc71tRhVYXXU",
  "key21": "3GtzfZvJXBKbNbVkrgAWhAoTp36G3urmWNJVhREduaw6WhTwBLYd8t1Dx1u4qFfzgDRb765CRE2qUgViaAZtPNjE",
  "key22": "3NY4gDU79D1ZxhCBtckeSTAxhDwTF6mrX8deRtmKUmNToawBQScqMy66g8CjvtceYxDFGFmYECPFrBiPTAvCn8D7",
  "key23": "2d4ZX8EbxM6eZoHhXqBseduMzz6Uq6LzGAbVWMg3EryrGQxdKA4v86A8ykfTB2XbRVdzEmAiY8s89hyjimGBHGBz",
  "key24": "3NypkGeG3GXFmhxmPXq5PxtwG32euUNyUJjqewcUTpZ9JPfJ71bFAqg5tEbG7rqezEEdsRncLYsvp8Tk4d3wohJx",
  "key25": "MGN2y4hB4UfeNVpsBXxhRNcQSr8NdoZq4iahMczgKBob434kbbqoVYk1NRjdDHwGBCbpCE7EFtRAQF6UAiFEFyw",
  "key26": "2xKsJc8vh9n4tSJuBiHC7mdYN5PBgKod8tx9EHitTSBTQdeUjCYytNdf9JnZryC3isZ3ZzWXQKz57UdcdgmyZNC1",
  "key27": "39PKutBb1kaDhKcVUt4xXjNxDgoBqVE7Pc46o2nTzucjmRZUcvKDwQtAmNzvrQt3hWyyDYnsSuFCA2QimtV7st9W",
  "key28": "4BBnPLuhWy9G2dSb8vj8qteXfzRRRVijLpCNtffTk8C21GHdPS4fyU1ZfsZD94JLx9ux9MGSpgoqEHQ2trzuFUww",
  "key29": "4DJUERNNhuLxm8DcJSE6Qr2EFhsjHfWozPGSHi211LaTQL9UmZ5wrMd4VELzoHg2VmXqkMRn6Eo3D6HSnXzQ3AuJ",
  "key30": "4zRzd5kWeFgLSzAWJjsXxCVAcirC3Uzz3pXLSUkuhQRdz3XSvdXo3Kr7xc9DPtytqsCZKM7RwhL76dLmpUDSM4cR",
  "key31": "4XvuDbsafyy69E5moh985TCigeYgnTE9y68miva8vZMDRZefoLF3mocNpuRMLUh34PDgPXXg18RWC5yaKPLicnYU",
  "key32": "62oaoauyB2FrDyvH1Ay8fBSqdV4ddf1XYkrwfXCg5Yj28XhG2ydoxc5iZuDKgSVkFz6X8r2TQsm6LmEqARg8ufwh",
  "key33": "5WyGCZrM8jBArp3PRtNkbMAtGgj2GobRc2UtWSgNorXZaS1WoYwv3p6QXL1KEVSpA5PjnSP1EHnSyUvjq5Ri5FXr",
  "key34": "Z12YTmY2besjgZCR4xEeSiQvjDn3E7xWYYS9p8bRAxTFcKiNtFMjCSn4sWtxC7d56VnPhcsAfwZy6W4nLwLByfH",
  "key35": "59PJLVySN5nYufXzFs8dN1QyUgTTxjbT1VZ5x2FR7mdNcpQu8QXqUp87i5cK8gk71yPpmVrwVRgqYeGZZHtKBzKo",
  "key36": "39217zwysvB9B22AVhisyi8K8QGCSH2otS3dKSvomox6Tgx1uPV4jLsEWuwetP8VBuceuLRH2aQtz9YZcdrhJG2n",
  "key37": "ZmuJ3bYymDSC4p5Q7KHBWZtVCrCzdrWMVRXv5JaJht6oC5zpeNiLtnAC2h13GpMFBehPajJzRGWpVTZEKwdNJud",
  "key38": "KuBkjbXas4PCLWbxaK9yWuxw6u32LCv4auCxkUeje3BRpsg5EusefC7g39PULYribRGy1BDckGxBZSfxyHb8kQK"
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

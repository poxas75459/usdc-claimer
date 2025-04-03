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
    "CgPoADgxkNmfPFD4nfDUDiNFHrLkUDtihR998ohbk4hXtvV369G66jVDDzN4xcHQ7vLCGY1rmcpcu1ajPR6HFX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sBLhFHeWHdSfucVFS3CJE7D7u3sic2BXdSHTUv6yuEin28rrdAxaCe5ktg8moaN8iQYsvaBUkFKcSus48GDHyWd",
  "key1": "4JK9NAivSrzYD81zVYDdFcEU4eVuBnUW7eApd2HTXcJD69YV5pdUNuokJEwcVHE5jKGv48LtGHbWZ8f4frWnBA3Y",
  "key2": "4iktF8ZtcamY5128F4Ghb53WRNjDBnAJ6Yoor7F2pMmYNWrhs937N6uDWCEquE8MPXbaBbiaS71N4AgzU2ZZCsti",
  "key3": "2uoJzZcvDWVzBL3RK95EFgMaPeHK57XALy34MPoULJAXxJLrb72GtjuKygmKSEVMLfyhEhE3SbFSueBGApGC1mz9",
  "key4": "4rvW4RrGTTm9Xv9NNWVJRuzFQ1cB74ShnM48SALfUk8pRAeDv1zbEPgCubehtRjF8gtKPZr4mULPp5dfADTZmDAt",
  "key5": "3bJTJsxqHuiktQEGja1jSb8eY2Ljc6boVEVwUJGxGiU5tVNoyGha436P1437StZSPnXyVMzHWCbz7ENCSobY8D2d",
  "key6": "b7Q8AK4QZ5WVThP2rnmdDm5BoWY7AkTTWq6GX2f4bKEaCZQyJDT4JPZtwzTK3rAAggdUhCJzd4WeFL9kt9JE9fw",
  "key7": "MQrqrXvmnvSbLC9mhJmw2oHqEgNaR3xz1bNeTCVJTphQFxuAzk1gCfcgbkWNxbHi1kx1XETT3em8Yebyqu4VERA",
  "key8": "4YtsiysnC9Ju8zNgVEBvGwyKi73cU4Ttv7Pb3WadX4G9vkiFovTenG94X8U8aeAKrRmqSZ9sCY3podc3dTmhV8ca",
  "key9": "SowBynGEzskuXUk8RZzoSXifddbgfsVcZsVViV1cvKc92mbUQZXpfyARTw448TjADoPqZZfjdfTxU8yZ2vHtMpQ",
  "key10": "4neM31XL1FrBG71g8r7EJjD1nSrb8kmTpcZnn4u7svKPJ12ok1APgpp2MVjVvKtNRqEz7NdgemtJfBYoUDcaet13",
  "key11": "5E8KV3pF9aJiZNmrfbHzwJFakjWFtCTp5qgMPdHyUBurADBVP7ryRx8HzVb5a9mUsTvkeY1iYeg8jmHLoSK5danb",
  "key12": "4wqa9JXuAPer73a8Z1mAvZkJw2ecVqSu73jBF4cUUT9GGPFGUDKL42kV2x3kVPvv6mNHtnS7Lh6jrALNzYbxhrci",
  "key13": "3V7LzhGp8bn4zSBFNt6ufjPoA2DeqHaC7npFky1dMVCe6CDHncCWjc4FHziin8D8abAxfoKnxkFtMLtYVRQzHkSn",
  "key14": "2NZFNw6RXcgM2cXovTpXGqgkGjNnfPpKP2dpXVtnJfnqbdt69BW9z4hD5hCSLJLVr142DwuEPSaT8YCmAJEoCAFC",
  "key15": "5GHVxEr8vvKKFxQyte8UkmiTWDrFaBajfFBsbPtBSMAupW5shMU3Ey8cjqdk4ucEZyyXY5JPVcddDhD6tS11ocmx",
  "key16": "5SJ1mf9icSUNcwggkZnfbzJkYhpdmggtesn8skkc5SKzaCq9m7eXtxkeohuzKSZQ9FjFPCb3svmjNQ5CEWvaE55k",
  "key17": "Sa5Kp6sba6pu463sG2LGFH3mEzWViSoAdqD2maK7BvD9vaoVSKzk9oMS2QZ7w7hY53Dtmb27ZQfcWDUiXyhM9Mm",
  "key18": "4U8JHgbk8DF5udtso8qTRFt9CHq4ARZWS7SHLmvQRwzY6udu1ftQD4PkQQq137UkQD2BZN8vpFYo9jm7pLam3vcr",
  "key19": "4sL9Q5o9Tv7EG13tVsig5wsAop4EvjSr3CKsddwz8WwMUJ8VSTgkE5zJzpXcaXnpd5mWRkEM95ubyg4YajfXGPEh",
  "key20": "5GuQQG2adpeHBbZeG8rSz8WzeBHoPE61yKpsAm3ztPJLingVTtny6FsnrseDHy9g5sKXte36nDny5aH2TH27FGDr",
  "key21": "2r6CAYfqBRayAsuQRZjQQDFfn1ebZTAmqyWif86s1vNqhWJGKA2cnDLiZ3fH3MTKVzuBh3xChwAfzLbV4pJ8cVFg",
  "key22": "2UUf8GqGj9JCyYM8kLDY3dtxedRmTpLeHZi7a1iZgUgdu3iy5LK1bFxVyKrwwX3ydexhArYhBgAU42mhjaumHSj7",
  "key23": "4bpXLcMDMFok2LrY3QmAbBTg6Nxu5ZhceAuxtwv15n4afSXyDe6uscTNWa8S5muxkbnx9XCREfmNtmWjPADVFCYk",
  "key24": "2kMKnzhvh4GwcnPXTms93bfqP8d9yAt28x8jTtioPaCKKqcj5ptStcuaLJu5HVm1nuxzk9BJxegkvEz2t1i1ogvT",
  "key25": "5pYzB3Lt5kHWpMyiMBVfSxAwnJeuDAxFBQGaHNhnHGnK9bmr6Ee3oLRKVAQVTcAk74zFmucyqTj2moJo7aimxmsX",
  "key26": "594ySH9hHWNv7BJsL7xzaHZerGMkRtaotUFoBn8EkN6NTyod7Nbg9pnDgGd5Ldfaez69xG8RqUnExSGiqQ3Bd1QU",
  "key27": "3xihDwx9xHx1XezE7LZ6ysbUAo9nReLFxpyTigF9GbiwvcaBMDGiQmLtg2U5eVm1RoXwwWcWz4H58J6eEjkgkg1S",
  "key28": "3sezSyWZJcpAjRcU4spEjMHZiieycKeaSMs2t13q92qRdDY2CMh1MXXFamKGB3DXyEFxCxNjVsm1RQ9ZMCuFoYzt",
  "key29": "3Xw2dNtQ7dvtw8z7bHvdpS4cdLVSi7pN1u3Qv5QTX4KtpZ5FCHky7Q9Q5HDSE55dB2NDQTN6rPs7HJ19wTip3pgK",
  "key30": "2rFx29Aw98KRwz616sFQAtz6uFoVx83bDUX9iwNfJuM9HhPWF5M9ftVgsstzMfq1HZGCs43aErwyvAzg22TUeeMT",
  "key31": "4cV2kNrVCT3UWiqGYvdhRrxJVymraKcdCf8gSFwMHe5BS8NCKziQCAAovBSbv5VJMRmrPWfMazKtp5gzcxjPHebp",
  "key32": "T9rDzx346jaTmBEgc3qLRMndnbprbXs2FLfB5MiJYbwTEh2cKkUBUN3txR17cJFfghmGUAWuQPSSv1Wy6U68A5k",
  "key33": "LUAL2pRDc2Tkx3vD9JPvYQTzFSi6cy4ofnNPxRUgsE5WmZoThDkthaxD53iseKeKJWTm9vsyMibE5cWnHLjSK9v",
  "key34": "29R5NXmKjFGqwkJH7cJ8hPLTa41pHBPJEVmyLmYeE75Hg41wEUfmV2xA82hjmuS6gBCeWNe2kEUzu7zPMZvXhF63",
  "key35": "hSEwxJ6GWuZwoPY5cwfnA6ZVnLUjmAGjSsmEkQzC2RpCn5wvhLBYydEyQqqk9qFqXXk4QbU1RviCL19adH28cNm",
  "key36": "55yTP2Mzs4Lkb8trtbVwWVQX9Mcc85GGCRWSXraoyv4p6NzqAJUd7inNyqq9ew6Lt1ogFsUtNxExCKaLAQdvqCW5",
  "key37": "gVEg8DvXRKXfwtBiBvk225rQRmmAfMVm5X3icmDLHUacKcWkxdKvt4ddMAqJn5QVdv6aaTYnm7ra4um7SmhJcfe",
  "key38": "5b68fDX7MVY8WCFWJdHdn9rVxK1s72CsSoRJ8ofXPa5serGdPqoZn537uUV7EDi3n2uaZWg6jDrDgkVEjBdtY7qi",
  "key39": "3BuJQYmwnzs28qsqXUd1TY1n9jo8pC3Yvpzeop29iGMcw4VaPqyU8yDeM5NPryT4yy8WpFyoRqpLonNeCLbQw4EE",
  "key40": "4tWbZ9zun8Z748paaBKSsamHxhhSRCKGiiid2tYyNSTx8cCZZpWS2S3vYXFzprZJrV9veHomXaziHiTQ1DrYiVV9"
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

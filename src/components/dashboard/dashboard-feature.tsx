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
    "4WNnkDUZdxELJm1JYUUNYP7zxF95dFFcd9u5TTi7oUJ5CKr1sR5PzCDywUf1zJjKjLdEeGDDCafPDb69EmLWhESU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DToTHq1HKX2JN7yrzNfSfysKPh3finVzE5LAc6chBegm5m6BQ7zdv2ZnGm6V1pcVA9YDJsiowNtSzsapaUVNP2q",
  "key1": "Xn5c2ZybZwtrNZnAzhNtVH82v19k1npgqeRLGicarB5AzVq84mtfN845249nZv87YKxTYmKHWa5J9goXkDLdk4W",
  "key2": "MdvMTA1DYHXBeYi7c7LaMfVgqz9ytLFLN6mMdraGjM5JLutPgFLN3JSSLWhTGcpE2gc4HSgE5DqxrX7ucFd7iM6",
  "key3": "3oQR86wmmZRiE5VKPUyJEGDGpudofeaTgJjehvAP7aZCrHoteNs35yTN6NFvmeCfTeQfv8K79bABERdQxF6Jowu8",
  "key4": "341aKaC16amzXry2EpXK7xiMTNFCVbdm6ApuetiMsLtcsPDfXByK3kXcA3VaB3Z9zS36LHZW5MwEYnMrVcb5gED5",
  "key5": "2S1uPTwzynsHcp6S4YFxfEQUEKnLyrLr8daTyp57WCMPke1DQYDvxmW1QAQwxKhia5hs7wpa26imkRTnXsUu1CSp",
  "key6": "5JobUXhSG22MEhF3ZqWtXNDTNk9pu6ec9s1zqRZGqKJBHXUR4LuEX4oBJQZhrYTv4FJnxoiMRyBD4WMwFg81rdXZ",
  "key7": "4vaNxqxBHBBdy4FrXsdNVc7VCsgm2LCUWNSgGWYz2SUzLRkySfNbHC4Y2sN9benUyFQhds23Ys4v4h52M4TnudVZ",
  "key8": "4DxgjrUD7sukzoC5ZCjLpeMiyBZbyY7ek4SWaGnQgpmHbXFzB2m1uMJ5LKia3M8MZcqDhedfYok6FxcxXFQT2KUP",
  "key9": "4xDVpoKEa5s1QSMmonhsvvoysfGHYn8ALUZ93p43hvxgCbnGHLeitDRKP19xX6AgzHgQbJBfUn9drMF84uZPoP5F",
  "key10": "5T3BYAyZ3DKqsEfRnJ76P1B875Hx5qmzCqAo2hHqcAhzMjLh7MLBNHwchRV5WLze4jmsfZTjrNEcfKeVfjPCJAsj",
  "key11": "2BCy4QcQVbf1kpjQt6Beg7KddbVswR8LFZD4Td9KomFMXgSLGmkWsBZ3QdFBLwh4ZfhVHPp7Nseu2r3Qn7wj9hBm",
  "key12": "3k9pq54fGX4UnZD7jH1btfe6R4ixPKejrurLgV4esDPLd8HPypSzxgDJ22qKYFbqAqA8y8ya41XDzu7GztD2sSUW",
  "key13": "4QpDQ1dYmg1PDPPFgTcpXcqLBdV8vYFfMyKppQ4PE11boMTEWLvg2TWCU1DNwTEwhU7Yp15pgErbZdiBsKPVp7QB",
  "key14": "5iKr4ZzaP9EzEu7UiY8XeNM6PMACsJ8nSQrYCDaxLz577Eiig6sysy4KV9GGcH5JwjVXs3J24PdXRMoK7vj3Aw2Q",
  "key15": "5uyveNH5nfadPXQRv16Erc3MMeZynmFUXTakF4L2vAzHCTeqyWEUwT5whJAG5BK716KeToRXL9fPNchi1tJZA44M",
  "key16": "3SQYGXy8hPoq847opfBgyMhhhxsRqBkBVER9NbmskRfftvv3Xc3brU9a3mVQMTB5P7uKnCGi7xU99RLHES4fUVsL",
  "key17": "jKRNvh4YmiTbKaZBNTqUuYXT8adVUmczMTVCLGA6FL4DjyEp3tevg43K9nH8RE9C6bxCM6Q6mCr8urCeEJNHQgb",
  "key18": "mz2JLy3mrrSXiNi93FrGUh7rj2eFV4rNzN2Qb4MmMaz4ov26gFQZEo2mgQ4oZLnAiBZRDpvZXDJaAvLkfrhag31",
  "key19": "4djrNBKXJMDnRNm1PaFM5YBdvpi8kszEgJ8SBTpRDvmhcHBNcArjyQd3rf8rzWyUrbuy7RFxNTg17CwFm6VJpRwP",
  "key20": "28MmXA2A8bQmyJgn9nha2c8es5q3PRw146YuvpzzK4G4MJqWxvnow13zxaTyytSDDUh5jVUiqFoPZtsRCmLFuZmC",
  "key21": "2QJxUeM5gvoWuVxmWVUdPH5DomA7sEb9tphSusi3M9VNUjZZV82w1nV5cdJfrEK8hFrfREPq2tTumGSFYgHSzvxg",
  "key22": "4nCvEpfaRk9gMRutnNDFFmuTvjmeN1H77QeCgwT2ktkH9JUCZzYLMtcmexeSue2NGU81ASCvgALJZf21gzXcRzxH",
  "key23": "27hR1uMEHgtwBb6obouv5a4FCfUmCfAcG845y9j3aXWUJFPbMnLMLcvjPtM68egYBpNojdkVt2sXExVy5pizFdmF",
  "key24": "2ZPLw5nTogov96P9oHZ7DoMrCKoervSBHyNMSJsSHjmYsuFeJZ6Puprt5tbscHS85MMGaL4TogkGwfbBktcc8t7H",
  "key25": "Bf8UStXN6d7Ve9nLr5ZMjUHbMfz1yG8mAhvfKfvW4R24ZCxt5FCD1XvQMyGG7YQGxrmLqnAaaWk1m1WrsAfQnrA",
  "key26": "EPq5ByYnaW62Nsu2aQd4Gsa1N7co1Q2Z2L1SoCrcjcn6QZXrBtdKPBBjTPehx1ZdAZEZrMnvvmEjpk6haDVQpuL",
  "key27": "2xTvdE4nooo4DKbxm5ybsiH6jLU2FA9tk5q9Y1rq9BT12YXZxHpjixeWQgez48ZnVS57L8CToTotHfpxAXd1hWa5",
  "key28": "5NVSGr17YJPAnS6pmYVxFzX3ZGmGuZm8WyNwhEn1hcNQeD4RqkXAi85doyo8djLWE6XNtqNP8NhexuJmXxqT7okY",
  "key29": "54d5qGPU4313JvicaMq9w3mMA8eWkppAABdXv2qmWUgSf5tnQZJQd36iQNrMkppo96wJ6L17DNyk9onQXP5YHhfZ",
  "key30": "3wugsR3pDpDJSYpHs7yyYc6ecLXacyg3ch4sPtmadVvKGQsmaetAgSK7ksvRdCgXAS3MDmfrT8hZ2bM8JoxLnZ46",
  "key31": "jd5uCQjEPgghF5ngrDwejE9GaMiY4yqgu3252pkhB9mVQ7beyYi6QLUGAKMw541AXvZiJXkUdsxSK6ksXHjUDnh",
  "key32": "27BYuXiZEaJZd15tATQq91UowbDaE5fwZAerwrQXH66DSeBv4waQ7CES8AX6TbKfJZJ8TshK2vBSJDWxLYZfzayT",
  "key33": "5tgN8Sn1b5LLDBgtMtgcPrWhjN74ky6rhpZC4Mi3cZps5AxvunY22ivFdoh6sy5UCQ1nXT2jzvDiZEhf3hE3mhu4",
  "key34": "24Tf7A66FaGGN6nWGdPDLyLX1qo1okkA1CEHuCc6beNVAH3dwA3MEnN8TtLN8q6izCp2QmUt98XShe8PaUUfVXMW",
  "key35": "3k4wfJZTM72X3Li9uQoVyzChBdAZvYMJGzxor3fW5gJ4NsBzRc4X5SiR9kR2Q66DbQ7cJSSncRFK3spwV1AwjuEA",
  "key36": "Ps4EHCX3j3Fd9yuwCWQNKChG7f8YYtp9Ec23bo3rp55VDQ22TKhU4CUkZm5bLZjgYaDzydqNXn3gi2J5AqUKDJE",
  "key37": "5ZtrAX783NSCKReZ4Kz29NBLFK42ZozEmPziBekASbP9TCAMijULy2dwX1a3D1r7c8W5dCZH24AKBEt38AywaLaW",
  "key38": "3PuGWQ6sYyeydRb1kMRuqMuaoRBFn8GcUnRtFgtjg74MnP3xf1kk7EBfvNQ4GWbmVeRhQxkG3yz1qJokKKtaWMFA",
  "key39": "yTxARfBbbkfjMtoBBBVVgV43KWkGgoyixnq9zQTNSYjjKsmGrEEnwgqvVjiuAmyMxSdY9uTXaQtBKjyTcLvskd1",
  "key40": "3XQmeUfJEzqs6Mji6dQrV2LnFjj9jJfff5bSTtwFUbrCcvjM1FwaghiWUH41djRktPtnZSfAGLAfw7VMccGRsPgt",
  "key41": "3Lok49tzvuoiMJ1ySy8KFdDk7RchjjPh3CsCitCv4z2F3Fr4UoGp8cH6nCXBVTwCTQ8y3mifE2tW8rKSLMx3CZGr",
  "key42": "A9AyVFQo563F7rdUa2L1Tb8tLpt3cpwSTxsUV3Hhk7K3QaSNzbjLdUNJqBHfANhJsE43Lcgr1QgMaSYLCuBUAXg",
  "key43": "3H1QZfrXG4Loa7xsARRmBEocamZHpWXkinHgLmKCr3rau7UZUcH2o13xDbxWRpDhDDAdFbQG4sQqkujfDnzcXZtk",
  "key44": "42V1EZY42bgQKogrRVPqGFKBcvEhKSTWpMSMG93RU4C4WyRWhsFqiEpGkubP8zEpWFboqJi2PtsyaSQRr6vWRaXG",
  "key45": "FskqNE4tU64qs91QPUHi6TxGBSNgozRvhcLySh4NxgaDgDL6RYqqeh6Yqu5MoBB4XzwJWxR6X3M6rM5nA5xwBL5",
  "key46": "2wKjg98qKS2sEZejRbX6TfBwBF21xRjiK6tBhfdRpinSEQpk9iqRaKJWCgC6p7pj3uBiXqwtu5vUDhRekxHSW4M7",
  "key47": "2qeK3zhuHis4z6fafGKW6Tui3jUhQj2vK1GubYLrLXRcSxrAh2WQCmtiknS2b8qG8yWS1yU3bPG229qarSgxwFCc"
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

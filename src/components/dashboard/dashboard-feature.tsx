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
    "5y1CvuQMNu7hmqZtEMF37Wq68yptKdf9WH8WdbzmEAYvTFEp3oehxhpbq2fKeVi72fBqkmVPtRH2Kz1FxpcNwq2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VeSsnU1GS9eyjn5rM2hZmE6xwaaJoGbrujw7JBmnoQiVnCmNToUfjFr18Gbzh1f2C7zNd395DKFTCUDsxYJkLFN",
  "key1": "2xP1tmouXb5EyXhyWqo3n5g2KxKF2DWpyExXddNzfSoNFRgpEXgCpyUgHg9j3M6QVAG9yQ3sBRNcW4EQtMAHKaDc",
  "key2": "4WtAme1CUjGxC41K1j44GS4U1aVdN5RZX9WDHdtWtRWdznFcfdk4mSK3drWMFbzEJn36SVFgRBzGwrCySVC8W69z",
  "key3": "4Re8tjZfVLqZqRNpai1DYygHumH6YGfATBS4ZHebuYJw1ygZ7Npm5HtU2cwwYfptcvGvjAjvwkuBgHSrfxEbQtHv",
  "key4": "4YXd52fuao2fFAMmgBHvxLKTZqwGBUWksujNfJPL1Yf9PJsVo18Bn2BQ6hqdh8F9fTxh81R8DMo8daujW2FvVYqx",
  "key5": "5FepSomtCqxsFZvksFKwQSgz5ngd13TJf7SgEqP9QRAj8F11CZrM9whonnNSPY54xVDsF8T6yDQqfTqXoLZD6VCS",
  "key6": "hJ7Gmh6EKFqVj44SivTJW4tWbMMFNT3RxGgrdiTm55QJTB9rF2yJwi6nwtfWDMTojQajg3pw7E9xnqTjqYq44X4",
  "key7": "XvnFvxUamZTak8hB3MW9Z7rwTor6SDFejhbnfwh36kUREnpcc3QGycccDnimM91oMvb2CM5zsdJtbHdr9aTBewd",
  "key8": "4xBTMyPtFSWg4V5b8YSEdmq7qMsNSiocmgfboX6v9pLeURToRyZ63fRoAUHgpvi5Eh9LSEYqE2B4XGk51kWiokA6",
  "key9": "4H7vRgSCL1wMKQEG3eGhSmYxeYZiVKKqPhxV5ABiA4zGzznTzkCUN3ZGxwNAMms5J8jFa6rujWAX4WEvPZLpvxTA",
  "key10": "2pVd3zpnWBygfUdYsfD6BkUn1ZhioWyhaGYKhaB2vfvxrpiKSZgQtDRDvzfVzvE57VdhArLuKdiXQFntt9QhzvsE",
  "key11": "5BA6jxMb3RoVS6Xess6gdfQFMPEdpQLxGnWe4gNgdEKQP9UWA1w25tTYaG6FAzmAS9kVFvrBvetjB8RUb7gzjDX6",
  "key12": "e3zVWkK8DhHsEbT26dTkEWPGbMPWWqhGS6ULWXyX9khB4Y94zTBa7AYXQrYEfPp6ykPjZrTMo2YujZS5CkSxjod",
  "key13": "5ZUiaNHNdNuuXRrUYDzkTES2FXUgB8XhPYFT6G8cn2CwsSgexNyqtMWuzyg2vkDXXBhyKz853iQbuziuBVSdtgSq",
  "key14": "3taXNg4V652HSpEGFSkScoMgNZLR7BVFysLMtACewbfUfJeR65S1c7LeGhrxeE8vVmnyrT7K9yo8bkQU6rUcSqYB",
  "key15": "5FEFRf4Eq8GKp54Fj5cVvFyQgmqjQWyoEG5dS6KWJVKRdCFA7Nc4Sy6XeEz1kYmFrcrLgcTjhhFUBdt3moVATum5",
  "key16": "651hfkbZiiWL98kp7MdbsyHV8zc8pAPxsKdw1nQUjm5sE2P7wMs5KjRd28VTNw6WJhh4NejAa976YRW4YhnTzurv",
  "key17": "4uoSF3hTKYUMST71pVmFS7tohtGB8cqGRuM12S9ZU5wRhbYEP3xem64kNUdGQ4cY1CUGRh8eLgEjoi9KgQvNaxL7",
  "key18": "3Ld3RfjiHqkqaQ1xBFPZxPFEqYjxcXrGrD8wTPLuedTTYDEcSZWHwT8hH1ysgE4D2ga6fHTx96YmnMd8UbGDHXwd",
  "key19": "51fYfgjf4MGBSqLPV3e5TzUVoTqTCT3YarHfGtSPQU6NgxqHUKReh524xsXJVvEnQ7cvwkt5J2ZBbNGtPbZ3VZ2y",
  "key20": "23iPun3bAL6EPWimKJXmrR9qH7Lberr2JhM8vacnpvAnTfPBBLFSxTYUTSaB952RuFudMpnzTiVZUupdZ8cHyKAy",
  "key21": "2fvHEMHvoQbyEfxuqSKykJu6TNc2E8goG9DpqwX6aC6x8kHZjtZKViVDpFqQD28FochuDWSiPwWq1cKqRvkLXSAP",
  "key22": "4a9vdYhfzENQhFEXkhBPHkokUzLicqG5XR1wDzMhSDZNhWAHn9wVcfUBRZsDyRgRbL3DiHGuJ1GjEYu47UMAmH8F",
  "key23": "2hWZGBpLmoVMFfHsPeNzZsSbq4NqdPE64QiJY6KyZ3ohGCyyNRrC7neeARp6QbFqjb2roSfMa1cejMusEmexxYH1",
  "key24": "47YfL2oF2fjs1o1Rvtpfb59DPpy7YA1kBKeZX4S784Hud8WcLBpS32U7tVej61sJFcP2cteqxut5MnqugVQsQ6AV",
  "key25": "2Gc3WC2m1ZBemBsb59kWLu4NPDQg732XkL3bAWQs4u7qqom44CD8bUCd4a3Hk5hJRfBc42EZrB4onXGCrneGSueM",
  "key26": "2cyNo3yGX6nezK993SgUje7hUbxpjo5egB9adSygwEuCQ8TChXRQQjtTf3CSkEdEN9faCTy4ZxyShyz8BbEMZj5Q",
  "key27": "4HqzDa8oUSimPYmEtu4guze2DU1FX9BWZngRUrYg2Bm4TRxj4PXGjyQAHEmDJLULZVXwsDxkGeriGk6TYFgaCBDY",
  "key28": "4EPu11ULLWdUj4U5Zkx8mNc3zvXcrz5YHJuyQr4hStQjWYLmy7yJbHd71PQco4miKzRBHH38M4hccXavM1p5Lz5b",
  "key29": "3mFKj7B7EnhNiG56FEBYx9eV9kPL2gVccxD5kSoVddviV2gCCQouinbPoupLkmHkWsNCevpbCu9bgTPPsaYNQe19",
  "key30": "3pPo5xv9cTP8gcTkuT7fy95qzPZXqT5Q7yJ4SVTUkhRXF81f4qqCQgknozxEhymV6LqhWqjXZfS9eP8FqsFUacSi",
  "key31": "5oP1L3jqunSDL7ruHaCDQ5MBZdSFPYSLfUQvHGEqKHE9LrD4PL2X46irAVKZYWyXvTo1XWDKcoVYWbG3JJ7rVRNc",
  "key32": "55r7HdhWkWTh9bctvNQtMJUckYUFZcBzVSbmjBagAgj2FxG9yDsVFm4AE5ndopoRMxM8g9qRUwPh2UwSUifYrJXj",
  "key33": "2PZyQZepY7sRcbZMb7RMm7KBuxT8EgWciMrAcFzncrffWTsdhn3Km9czC2RnXZvy1N8Dyex1FDRvwQNzrxGkWTpG",
  "key34": "4dADqEisX74JKPqyAnp2J1UHaYusbgxufd9NqEsruD34jUbm4bUS32AJvWXaV8SAk9Ud35h3DKbV5cNSzxS9Vi9o",
  "key35": "55ewVQPGhyV2FPRghp6KT3s4ZXCD6AHu6v1mbzgpPShX1krZgUSTfcpcNVSsE4eojwSutfjxVgd2q96xQq9WSEiT",
  "key36": "B4wfjDgfhEj3HhLvCaA4oeTFT1Mexiczd3FSqx3YskPSichXHmzCmkKkcYfvz1X8PrY7Fx3x7WG1YsWQaaLD4fh",
  "key37": "62jmg8jQLHABPUNPApQPH62wozSAoPLmoTgXHyHkRcJb8MdkqmhgqY6SFkcSCqQLiqGhNz8M4Gx6izCAzz5ktuHa",
  "key38": "2jyiFHnVfsav9MVSCYr6NbrhDy9afwEaEYRgfXKjy8CShMds6vACP6M14LFr258xVXLEgTC6DKacHt4d31PoCcaX",
  "key39": "67WoDB5kSB1HaJxQdjz6TXn4YpZGA37SqAN4gYFqg5xkSZNFa2WB7p5DBy4ditbVmyVAr6eZVWaFCvyqvi4HpwYS",
  "key40": "3N3Wf57smDNy4t4Xkmem4TbZZX12mmGRXCEYAxRPKn5HSyNf7R1AKvaN66HHG7SUrGXZxqAhmFHhuJQqinz12Z4g"
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

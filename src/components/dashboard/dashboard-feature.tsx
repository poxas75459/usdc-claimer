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
    "8UYnLXSsFiCpUTSxW1SfGcZUNby5pFjjDSMyQrJ9UqKcL8mNAnGGP2nQ4CSzP73wy3vPhKJ67knkVgpMsn1iWCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bFYSd5Tp7BSCetEMA17ehBi62MYe6HVZtkkzsqqiUzHqcnuSdEyurrxdYHYYKWoW4UnTTMFzVU2fEup3Y1avtuQ",
  "key1": "4K6R5t2DNsvRqb2RbwFKT1SbfDYVmAh3xJUN4YNChfAB7S7fbSMwAuMrDViB3J7n3XpG6HDBAPdkQ69krE4PCmwc",
  "key2": "rXL31T57JoVRv2fHGrT8CQPWyEm5XD9E462YYVMLRZk87LBjwjRdJnKiCZZ79Upa75M6jGdypUaTXdcczEwLBcM",
  "key3": "38ykvUsQ3uiWUxw3xTyQzv5TCatcUxDH54zJWXnfAcLiB5PqwhUVDHsoULqfpJobEzVDPHesFYxzcXzrqFaVvDja",
  "key4": "3ZuHVzJ4SVi4aSru6gbwBzSi7DQ6czt3GDzqjARjPLSGVnDT4RaTP8W2U7ykeSBnAmtw3p7HMn34Pvr5ime5Sz3v",
  "key5": "4zHC68QNKeZPUPcdQYyKFYsFvsx1ULtxvRNfumCrFMqUSgyF5Bwok4R69tkfev5YjqmWQsUA8a6RGFXrF8L1fvYf",
  "key6": "4rH59A21s4ofmjtiFmpD7V2DapYc4A2sKtfC2v5NTdArbzf52HssTF4VTUvu52fW3YbeqxtjkjrEBWAFLb7YYnBu",
  "key7": "3SKxsj7cg9UtxfXo4X9fTHNCZZpp4ckqe9U5pXWk1amrowhGubxjhw8i4SWnoJpu4CWbfahVfp9xfSSJfoeyHQbs",
  "key8": "4xeew4ervc3U9P29XfQTvPRfkTW11dJPB8YPUghGoK2ChHC8yY3edLJPkn1CAccB7rQzf16ZFucVcQtj7Ek3ttQL",
  "key9": "3A48Sfzw4jwuPzoTzwxjDVMp2tsQRJXLoMnXZBmJwHpCrrKHWS727BbYyjTim9hhenvLDhnHk7YTaVmEUvneMVFi",
  "key10": "26doArczhPhnwAN5FVt3UaFVW2vZ5SuodCEopMBMVCjzzcy37Xve4iuyPoz78MvXJynDtdceDx6RT88KEdMMJKnA",
  "key11": "5MMnqzFysj7PjLTbKrjs1BDm6vRbK5GhWHZmFCGqc1gnZLv2MznfHPMu4fvZbAnrH9LwV6wye1APJQQHvxBK5mR8",
  "key12": "4J1DiU7LW9Mo5pgzbTmTi2q7Tog32UgWUabd1cfPRPw2EVqDN284Bbf5DW2Nz5hTxFkwQXUSnD8mLzQfNrHRzciu",
  "key13": "4ovZYCppKvHWT4Wfd3Yd6ybgi9qaWxmBZ7PJVvDDs4tR1zUb65G7UkuRNAq2Hnsu4aEnazKiXdh3MGYa53i2giyu",
  "key14": "tcuwSbezBG3G2amstj1EGdWHskcrzJXUkxUBXJsyJAHTeoCQBcEBcEj6iS58fEjkaD3atPTVonZt2AxXSxoUcBr",
  "key15": "51feZMPrfLit9xKRgkvfwmorQTg8HzaXdbxB1W2mPzM4ToJfKBqsCBdskeAzmLnVzSqSp6zi2U3uxkVKQm9zhGMh",
  "key16": "3gFGZHuiN7sbTsxiZormUvbvhRWcc7mi8oYJErzuAX8Jjoy1E2Kt6FFWBUstWU3kJ1sS1VJ9XsUfxvnQiUvVFDGW",
  "key17": "2iF8tXVWFyuyYQDg1cp4Nw4G2uZUGXAPDYbQiDFZpUmjn4Bsd9bZHkJwRPhjzXJbNTwK6ttLi5QauQdC1VDVCwii",
  "key18": "5iWUTZvQHp9mZLv42WRF7BBitDVnWUD4aPnPQb2ByxwphQqSQiFLULFm7FeSPV7t6svrzH8c8sWcMWjRQjFRaFYb",
  "key19": "5oF2UKYAXdFYHcg4uNNLu1JZgbp4mwuKzkRAKifCQc8f6FBm3oM6FN98fRgiCPBjQhAPG95qMTQYgpwZQG9xd5ZS",
  "key20": "2m1zWF6QaTYjum8z7maT2UEsoxYCLaHhnNAwPtbaMkoW6SCJ3FVNkiw44zzensonH7JepZ8isd9VAzJQT2FBenNU",
  "key21": "QLXGjRoG8EyFCS61PRwAyX3AN6KApAnmKnbF9WjNStg3MLNAU5RfzZVyoFrj7jxKwPhod3SitD7X99HU7ZDLpKq",
  "key22": "3RgbMfLyfDqw1yz85a51Lv9qEgD3kWuZiAKipTwfcWaX9aDSJeCU1FNz54NcqtV9WthuuKfjBdqeEfnCsJP9RMvp",
  "key23": "2GnZ4rUJCvV8MsgDXwovAZgPyn5MuPaPusUvarAkmi69dsY7enKCtLUCcLaBZvoJ4yb4ZZpCKYZqygK5odi4MKUc",
  "key24": "3mGMViZiHk7XjZQhfZ5TzV2W97noyPJQ8fSUEQt83pqc2rJD6GUQeJXoxLMuS85wSocAhuav2RZTDwSA2WBaT1G2",
  "key25": "3z5QM2bPBmzXPjprn5XeeXreCEcL91biaoFHDpJNCrRdHYLEbKUNFZ9ivvSYKPj2BZUd8HjPzpzHL5Cz1dc3ZHri",
  "key26": "3tE8u9tgyBinRoUgW6xsbbg1KQUHqwxDXLNyHD154mYh7diZCy5uLkhBXuUimkyH8j5GNWT7M32VjFLt23YmdKWk",
  "key27": "3PzN2iMPdh7vbA8CieqkDqA2BgbP4tmU3jEsTeUPV1RWYh2yXMVtArVMnveE9veoooRxCgJBXuS8AE6LQpeykKFK",
  "key28": "2Jg7wUdLprC5YzEyQ7QV6EJySbpuRTFJqBdf8VVt4XYVwcF1muzfa8duxUbPJZ6TwsNdsG6QoHXZYVF4zrXPVy5X",
  "key29": "5APpNsbEYmDQ3VTLYkAhnNbDViHkDvkHQseiQay9QC8yBRzeAASqdssJ2UXComHdCoAP6i2P8RreMopRo8MbesJx",
  "key30": "4dSama7rKqsekPMWYzzsi6jT9DPztaLQQEzo6zdAgVReMkSF6m1KST9SNRHvY5ydijNTpBUZLc5hTvtv83VuFgUH"
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

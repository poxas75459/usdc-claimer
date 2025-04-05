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
    "3yp7cFdNwDSc1bnjt48SqKqa6pq98LxHRfcVgaGERyRttX48oRdvXi5YiUBnw7zDaXF1T9LbswiEu91aAr1TWUSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGio7Enshbgyrx2XJjWwUTAcYuuEUSDpQAjME9F3BEwVMDfNYxbx9Di9hHPvKjaA9PPYSrwz5kDqDZAbuDAwng2",
  "key1": "4QKhdKoApCrXGSEc4Yi9PLj4KodDx44NsEYNWWdeiWzW3UXjThw8DJYrkjzJGx79GdG3sh5wWauKTB32tcVRK8Z8",
  "key2": "H5ndNASwiG25VDmENK8D3ojtoCJjy2z7gfZuLEmewrQ4FFeh2wborXV731TLQBk34UYa1TUZ2254NCo4C5ZQ2Qi",
  "key3": "wzVQr325q6Cf9Hd1gAPm2gXKmELgkpTXTZfYqaehJFo55LvKngCHnvoEyR3ARr3diCepLheS2sUgAoJXRB4jHBm",
  "key4": "3WGqekbKinUt76sgyh8eCTkw271fQkCbfganEiEYfrDy96kSsTq3huic7mDVQqinZBnxPmTUCDkpDd511aYBFqCC",
  "key5": "5ihvMGKWKfgtp3vnohqjzkUbcYXszKAYP7WtSySaCnVMn2T5uwVSTZE4v9j8pVYtfebYitnU1YQ1Kuy5863Wnr2x",
  "key6": "2d2N83pE1aitrJyLiXZ8uF8D1jAWu3JcWyDjrbeH2tbJT61p9VVmDuV1y6oEXkAXUcK86EX7DDSgPAUjk9218B3t",
  "key7": "5R7CbrM5RdzvZ94LkUtkU1EdqU5Y8mBJN9fkwBULmmAkgFmDhHmJ8hQ5CtnpiWcRG43uAWVbJQK9CJXukfHuFmwf",
  "key8": "2EpAfxsAPzvHRRDui4SzKUq51w8oHQ8mV8TJZTYG29edCpzPD4becpvxzkGumihg9oE2UJDphBgu4iFJThFWPnxg",
  "key9": "5WKPdRA5LT6mkq6Lv9cCbtAK4iB9QFEoFnfjMjF4VWZMpf4duDrjbiHvAMVVDj7mN5nmVdCyqTPfmjQ4fxXk2M9F",
  "key10": "4jJvaQHb8zUjdyt7TWCUGR1sHJd7QU7DZ6ktVvjKWLu3xkR8bXf2a3jWrq2Eg48zcr4SNHiKoYofJ7ZXPAxnMdUc",
  "key11": "43C5sfQXU8w3wVvr6KGVYvobfAJif1Me9yE79iefHELo59k98VCZpKUqzJ7GRFsVh8M1iR3TTXD11kJTMWzbQ1Fh",
  "key12": "3h4JBgDSdFmk5v5ocppBB4c4QX5SvCTdsYoqNNsRBf2eR7mZCG8YrWsS8CKPmi4b54BETvivgdvAuevnrxcZJERN",
  "key13": "2nSTZpe7YdVoGWKPnc5QTvpPwUFitZbGEggYMnFCUcQXgUAUoPogp7xfhWtGF2PB2w7Wh1ZynnZSDZbeyZcvy4zc",
  "key14": "5DZxL23nBcC5CURCPXarWFTrATqgbimjK7i2bLJ97SHXDfXoT1PPKzyU4ZL4FwLCsvRXBmJH72wi7CLTEoFRN6nb",
  "key15": "5caWuWCPT9J5NTfwzSx4EZtL533CVq43DxjW8d9ebNburYq25m2NdFWDAzdNQvJ3m5DAhguL8mTNy6vDsvtszw7M",
  "key16": "5hRSy2AAVGReLdKG9fzaA4Kr43jadap9dGyuANNnZVKoCHqNcTur5MQjfi8zxRAB5RyyMkGf6zL4S7e2KjvE2dsY",
  "key17": "WgnaCrpw3tqX6kXnrSFodhkLFfww6nbUTefyWHs4ogeHtnz9Rj4i9QkkMQibLCyptKAb3xMEaQeamakvWv7ghbt",
  "key18": "2n22EaTjQDD6zMS7Dxa7HU9stscG2xHgbP9F8ZHDK9BLuFVHieHmF21pZbzv2tKHfSNiveZfrqEX93yrk4K9Qi5P",
  "key19": "iZ1XAdL59ba8MURv8QRMd4gNePokYB645xhacZGMAujjFUbS4aJAR2SVtA6k3qTX8SAhzPutCErGfwMn1aiuLhk",
  "key20": "2fk4DKWWskJ9KY8vWDkGiWcx2Ykr97FgPdEZ96RMj27yrYYikAQ3rhgv2pwU8SCzSYY9CZUxnDymYzppkii9ie6c",
  "key21": "4Gu942cbFsD7ANhhpHLdzBTiVQ8RyUn7QEo3vXYZpYw9AVkPTeySudXDCdNEiYph1navLA2t2tkmSmwNnQEJA9ns",
  "key22": "3bjNGg4H35MXvTNUiKpGmjAyjrYZw6FLhzd5zyGtCkCvAHgAA9RwBdnwTQZNQPu8GgPUgc3wYUjfMrmKYw9Um6WW",
  "key23": "4jv8kPLDjCLfp1mQJJnxp9d6QRCu6tnxMLMkRxiUm9CtD1YTSRmgRt8JurCQFCPf5YoB4DsYNUeebL1kY5PPrdkg",
  "key24": "5jKrNkpLiDQmYWjn7LuhymtkgRUWNNwd2xTZnG99woRwRKR1twEdEubGwmvdUnim3ra9j2gdziKc3f79ajmKjKCn",
  "key25": "z5xWsjt6H1dQWjoARcvwFSc5SvatvGHTjFFjFLFZ44ahLRiRxRvqh4gxyLMmhzidxvpbWxu7w3tutcsvutzLsYB",
  "key26": "VmUp5VtL1DgfQYR5twfcQrrUi1RpjFYXR8bHhGgz2HmiAPR6251JJ1ZfXAN48Abq7tsg8YXWASeYR2Y63CPtdMi",
  "key27": "2uatTbvF1rvvhNcNeQv7kE3SFFpY21Mssh1rCvUirzTMGRniMg3dCaojwHDBf8vWaxJnxQgQJNxNkCqWDVn5MvVr",
  "key28": "3aadL7AzNeLL8xWd5eRWpKVMC5C6rSe2RTb1aoNe2VsHWXbJLuAfgjnbfC8ddTijAGiGi4VP4DS59mr79x5LHxZz",
  "key29": "2s5mvJEud2TjfPhbv7qjxkfxRfbLQDgS5tfWTMZivkas9oVfj3V5bKpSDCvBWXcuygc8a95LA2gbcsomEjx1XaUm",
  "key30": "5Jds7wWe3Fw6gYrEjebchJXvcAaXXmUzuTxWBaxZ5uydYKKcgA4VfeVQNeyggyxXK9u7E2YFUp2Lia8MuTYA4tTZ",
  "key31": "5P6QuGyBhxSeADfcadSfH3JZdXx33xNJT9fjZHtJbjtXFGXwmtCVSBvMaAHYznhjjtpDxrWcVWEssYUVbSj6o6NR",
  "key32": "hjuCUmh7Bo42Kd3kfeMMfoHBBTUth7pJxsjGg75M3S7Wz2pGGqeD7WcruraaxFnbVsA7Z4LkioGVAFGE7rqzK8W",
  "key33": "4m136jk99agQH8tmLAJf3MSanwx1U1SD8nDNrmS87bVAUbwpfG2yHfFDgMtn7eZVVAztjk988Vy74tP2jJ12PtRb",
  "key34": "3EFeD5Y8wXaS6vMzPCgnRsjewbA6nDE35HYSWDTRqCnNGWB6uwb6KmT9BTttbYwTx6Jq3Pwqt19QGPdmn5cP76Hj",
  "key35": "Zub9kfgvNhvT7ypNiBdsCVvScBKu8mntYQpQPmLdFZUUxKDuJzjVsKoRbLbW3hXNBZ3aPfkArpMiKkdDyx4V8vq",
  "key36": "2zHRXP5KdocCx9Ue2bdP7822f8tzMfRaffuBUB3BimWGwg6cPpMsgciSShRHsjC1REXpsqimuqWZ4jbktV38nk7W",
  "key37": "49gbBiBPNYFEmoCUndyrBMnv4mTyer93LXLdqwBU5G479PzpyBE7ayHxwRnM7CULr8gifReAh3heh4HLUWUK1wXK",
  "key38": "29ZZ1u7vJWGZZ6hXCvMStAQ2oroBsdvYfcavLB4smQx3D1t5czXsCPepxpoCTDmbpqeiJs196HJ9rhhB49xF1AhU"
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

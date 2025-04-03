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
    "5yojWJRm86TCmAErVdyWzwjxe2EritMvxPa28wpbXkS2MscAvHhWgdfHuAcA9a3HyAbSBRRoDP1FDj2WxG3ta5W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRHoFNfqLeUpkMfj5HuMf3ohAmBZT5FNeYqq2P8fQUAdNNjyVMYwae54QBGBxtFy5kfuUXgkjh1wZSuN3z6eQ2k",
  "key1": "4SegXcu7Z8wdpxEk6jSsDn7CEu8HPsgNGBWshxFHTzeJ7YsEkqCFmJqhCgQxpLizoNxEpkjfPwkAZuF1cn6Xbq13",
  "key2": "3MbmPUpDapqcPA7mn2YjosFPSSRWDcjdf9njCphdsFyMA5Ks8EZpTxSXwZ1cPki1Tae7rMc5eSE988NmU7SXU31C",
  "key3": "5Vky6SCsg8YhCmRMGP2dRAVaGTGWJSa6zWgjhnZ1egZBr1ySgBAEiT2Pexm7u3c8ZixNgfaE8Sjyuje34TwU6E1w",
  "key4": "2MpivgGJgGuRAafyfm21cJ8XgkjciAotPSC2UyeZiuURAVVcpB2iGWTFve8tkJM3ixNoMeLA6tvCi81wDFc5cWS8",
  "key5": "2oY3ek3DHKXrGsi8YUw4VAeVtG8WGTwmpT8aKePfQyk6gSEDpNVM8EZ59sLidaiExMbdXe8nbXfEojBfeVAsUtxB",
  "key6": "3hjaJgEbtpJvKetbCbMn46QDH63iXSdiFRPR7jrix96EeQGdnUAzQ8rkxTccje3oix4Md9sWzmqxkxcVyBbDRQA1",
  "key7": "4anJmNQzE5C9siSBHiXsWUAi1NUyKZrHHj3vgucXhSBPz72SmxasLJAKyGSyij4KPcNGbntGbJyU3vHWhUPx2SAM",
  "key8": "3AXGmHickfCwqMr2VPg9kFkcWQKYhmRGuezkhWannMdNvsWnopkB95odWqQ78z4XHqe8ZWf6muCdMU5CNbPMLxfT",
  "key9": "29DRyVUSMSWEu5F71RymuEmMHoaBsz8YjVzne6cNJ91Y39QYJpvTehgwaDn98Sdr681YtzxWyad6cmyP4gQfihtt",
  "key10": "5i7r8oZM1MCeCQyKP9daR35hebkVDovKvcCYHoEVrYJER8Fq43EPRq2e1ntikPL74PqJ4ALJdH7fRZUNHTKt5LZL",
  "key11": "2chCzEtVNJcnvTxyFFF3ASYKdvQELmP5B3n3PgT2SGvp1LWJFFeFycktwVMsgPsm8pGUckgXoRRqYc8NJdZomaB7",
  "key12": "4Ni3fp1KBLxQHcU8fZ2Dt66DN8T9MNNZH5fLXafHvGRTwnXYakDgnbbqMpbEqanacbH3xGoG5D6E4AkSyXuXZvv3",
  "key13": "Z2T8sU8tpNFMDZN5wAUH89Ak4KjbjiJyzP8JgHPg9mV4GhbRx473NUTh62pt6hQ4oQYgFaVMTt8RHFenhzS4CDR",
  "key14": "2H2kvdXNHUevy8asuTFttddcYTW898Lgr5ikzviyuY5ya82wWGWxxnwgXKPmS6VE3cqEhACusome8o8a3hkyHxsq",
  "key15": "3PjHtHy51AiE95Wmre6o3zuTn7ta31eQuKQduVoc6LUmfk9cHz9SH8m7cGedwfsEaKkGzc2UpteFbLMFMEEC2Z52",
  "key16": "5Xhq1YHU2L91Acv1bA7EXKnm5ZtPP7Hj8BwsLh2skS1amVu2Gq5NVKdVQZuQpspfagboZeH9YLrtE9f9CaHv4rMN",
  "key17": "5Mv6m29WrLaxz6NjMBszkVDVa8YPBrgj5iWkuBkckhSkAv3rbvqcUEYFhtcNsMcXiJkKjZmiNQ2WD4xcet73N5Ma",
  "key18": "28KYUhUJ9jN5cxJVUfFqnCbweexceJ1faZhUcerqLB7TPGo13Ptv35uWB3XiYfzZoMXzfh4mJuZDkMwfQpbF8fgT",
  "key19": "4GhsxMV6sptfgeXo2kuieGaszBWm2osviswpCt2WjWLbeMYdwqSTf45LztTQrbTZsdYpFf15SM5uzVGHE5HuUMDL",
  "key20": "3YjZDgQrh8nQV76c8GTk6Db14yZMqqyussn4pVD6kY3H7SCJas4ANeP1vJp7tkPXxMmd5ey9YCFAfBmYx2GPjMg4",
  "key21": "K2A7jJqcYr9by1cjaXmvzP2WB5XiwKhjTLAdynfYbvDGEfNULBHvA9SntfqkjnB4w6YsxDSB567wCQnHpCr2sn3",
  "key22": "3h1pKDY1q8W6SgQQqu5tPTbEF6y7rHn41UgVWuZdr1RAqz7ZvTuXo3zGAjTgps1r99ubGezjim81VvJYHk36uCP5",
  "key23": "4NuqLYq1a7Kk1sSCLH77HUcWKRnZ4m9yRBg6hiA7dY7ALPXdMGBXMNzyu1XKQxrdSFzwV7gqtJ9kSgkdDUw7rFGU",
  "key24": "59M5d7PWecZ33qRvRqmr35aPnDS6KYDUJtzZeV4kx5XUzxr4VFYw8infQAWxdKkgGHaYvW6ijowacMn9ePLXHpUG",
  "key25": "3LDt2XpD2126twb39978RNhjpy2uFkj9H6JEwXn3ec8mjKf3oYxVS69NeatsNrVkExF9tU3uiDCwcutbbcAUWZEp",
  "key26": "HTn2hxbMjN1KXgdPbCtFTJzQpnVJsJ9Y5zLvTqyNe7by8SPUbhKubz5w3sZp57hVTvEJARhVnRRQUYMWJ3tLZRc",
  "key27": "5QpBxx6cs9GjNPyVZiD9np7Niys4h6t7HZPmALEkZr3MBD5PgDZcuLrh94upGC8qe9sU3HcSaGXVWMyVfDtciFyD"
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

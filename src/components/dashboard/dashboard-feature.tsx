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
    "3bKJYtCVnGyHWw57q98C3ku5PuBrumpHStPJV3fZ3cLkUedFhtw2vdDrPJ1CaSXKJuYieVFiPcF1RZUJWY35rVF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FkMuztj3UibyxuNUodqDYSdaZXxG55fRkGe7EVi4cfWH9bmxwojaC8vxkSePVGtvsXa33vdy3HTEyu3qJDXE1E",
  "key1": "4kWM8RAjeUXmxLNNpkaFn6u2tCW655DA6Y3edctWN8pkxvwWqmZEgcNwySHxKcLxf4aGWkcM6a46e8GWSZ3aqU2T",
  "key2": "5neziHVw21feTnW6Hz2EiA3v4gVov9qZNTCwrCZSPAVSKs6nBU6JjxZonUzv4H3zCHvhcBdr1d73n5b5kpmD64wk",
  "key3": "5N5SgjQre9nhPWhXbfvtjVhSWczuLjiqpK23LBQUVLvEhFrAVSuzKm3QNfnPypZis7mHXx9fisL8MCoHiiX6qu9n",
  "key4": "2idzZMCuRxMWijo5ZQ8PPq36FsQaSeiDoC6uVK73yq4hrPyozVKp5G8rhqcrbWHtpzVAfmFyRw7JqvW8Eq8ezpyk",
  "key5": "4N4NmkLjev4a1d1NBvZmV4aWpYy8GPmWfteeyqvcdFGj7kCWSQA6k6HgkyQEq8oZm7Fc9pkiWXYC3CtEa1ndm4Be",
  "key6": "2cePm3CCqBhkRDL7xU67juM8vdrvVUR9w9LNew3SFqhLUEXAahDo38v7TRVvo2j44ZdecMaE18XFyuJcj166Rrm4",
  "key7": "8Edk9sCrgGLb8b62visk1x325fAPMm3x6e46bL52JSYE7VbE2Aff17v767ZDKhhVU7JX4Jkye6NG7MKaNwBTeTm",
  "key8": "5xmKWtu8nfsvANBs8MbPvAxU8JzeTZnigKPuLUe3U8FSS4FzvpF4LonzmicsAugXNrdZyvbStPbyAX7otMjt9uEe",
  "key9": "4USqo3ptHpFWsHT7pBoaBayenbMunHVw3ANc2Doydp3fD8HDDeDPvo7jCZbDUMiQCtq1TLdSmFofS34PEw5tM2Pn",
  "key10": "31q5gNyekmNjK7YW1BmWTqzQBCXAFeqomQTjTk2RL4H4ieJLFXvYg18jZZSfuqQBouWga5ohunQ6YD4tho2rjXVM",
  "key11": "5ZKBrWD3LtqGphZd34hKJaw1hgMWaKbrGesmMRbqANJ6R19WxjTsNLRT6NKPeQLv7bd8bGmdH1fREgPybaNRHLCS",
  "key12": "m8Diui9DgE6k8tSdeUsjmQyj6Hs1SmhKQnkmkBUsugzUYv8ZPAqtkGswhxc94HTVZ34q3BTYkq5QisCTVFg5dbD",
  "key13": "2BGFptNchBHPqxf7C5GzheBrDgFJgM2xD19rXTVytxrVjmfs2hrm8avWVKrCVg2yk3TwAbHqVJxUjtmzA2eUVJLf",
  "key14": "5eKS7WSjkG58445hQj1bnabsb1Hn62inxFZ1a7mehgUVJD1hQe19uJkuycEg4Yirshn7UfiDMJQuRE4D6qhT922P",
  "key15": "4BG96LtDVGHntdVWbXXBzuSRTd79LdSnnNp7W8g1jjAAohHsPGU8F1aNMjngFMRkSzScrZtYL9srqqVwPq7E8acA",
  "key16": "3u2vTPx1yjQtYaGuypasSiDrQrBCCqWX1jM8UoXz6ZNFyGC9tia74CLmG2ZYcHT83Ry89p6BwZc1eTTR8x3oLcgV",
  "key17": "2ssGkzcntDnpfrHrgXvHczQx2QMpzgw7vDJe8QaWPa1UBPGChg6yLbJ2wiZS32zCiVbdufzsvGBDKbtFrdE3jZ8h",
  "key18": "4aLK3QYKb8tdqVKrafJNqReaafpKomCJMBKE6pfMGYkNQmLfNxUGYuiEze5ZFDtX9VG3YwkxbTR6mDXC6aEfk1ao",
  "key19": "4ScuM236vg7zLpdgKuRCDExGxQabAB7751Prr1GttuG92tR9J8d2d1CDyj9beupKT6gKmELMwTTLhsvigs9k9Gkd",
  "key20": "2qnZ5nGT8nsL3Lf8z7oHAgidajHAaxGW1amUVjoHMw1axm3VHtfmP3YFBK58mvMdqVZZmcLCovkHspPb2JVkHb63",
  "key21": "5SAZY4FuVnrqUjgn8jusxCzKXQwWd9TRbZjHXKsdTSgiimFi2mvz9ktxki9iccAwiEb1dKFD5NKW7ZtF8SEjFpNU",
  "key22": "5MHASBk3bWj1dhmoYdGew8wg3FTNgeBG9rsnS67TrN1rn7EaoSUSeAzN9UkhPZYtDSacoDVx5ezppKLSUrouHb4A",
  "key23": "5UuR39jrEU7wcDfsTkQUpEgFnUYWRQQ3gcZmamSkhrZSgd8yjDKAWdBieZFmMnSNmCLAJvHiduPXjuLz6q5J8FCW",
  "key24": "43kHMwqX4hm3J8kPDHUM1SGrnurgaFnmcGLFPyXwJNh2MC9KgeoLdw4dkQJMz4bqrqfqQLfiCLfs9wffS6adJsRC",
  "key25": "59rtZrTJJKcxSr32X3BHoL5ZCdMoc8MV5crZ5YNjngw3fLUuWrNouJ8zrQRRMakS1stfsVhPFa2stzUkHcj8gPAc",
  "key26": "2sLU2xnJ7c627LeoiTqCTekygfrBUAvjn1DdZ2j5hMy68jbXsQK1NiqiCc8nMVncYFKvWK1cBBG4QoFSPT6zaq1e",
  "key27": "2r1mCXwV3wE7izD1zwSsmydWXpTh3qNRc67WaZnPiNzqzgZxdznKPuvZL2WKzCWaW45QqErRLaabMHqGKwBwRYm6",
  "key28": "4sVSQ97RbzodpXtNGfxfEvMJyv9XS4FoHCTH7uJkwB433SvM97dzAK5sCzBFCJkTBgf66YoaqFUknoiQz6EaYH2K",
  "key29": "47kzB8vwgHFhiba3WahSzeuCqgpFtP9ZKxJTLJ7WrVVArGaEtDYvmicyDu4DB9LfjFEkaoGFgnuHmi7hJzvu4oSF",
  "key30": "3Az66GP8fwMDAASq8VmkzA7ASr9UoBEeHWiGT3aewsmfpgF5qwd8LKm6RPVSJsxrpZGA1dRLn7qkHbMqU3FXvrcT",
  "key31": "5cfZ8R5ksSEu6MwduZDzx7C8fsz8xLUvW4mVuwBkqCXwypzKyx8Te1Y4A3MrvwdpwgeRaFrzH45cxgTjQQLGF3aa",
  "key32": "BaCuQbQfWFb6ZovCkE3VUmMJPm5cPay8KWAxofwuiHKbcmyqmD9VfuKnwzXvH75JC5n8rBxKzXcgCwk92h3GART",
  "key33": "427VouyQkhsNNDMuEuww54WGt9BvebobQnvkpHpMA6rNRMgACnvWXa2ZqmA2rqf6UzarNAYUCfyp7Z6LQKFP593j",
  "key34": "3zacVxXQWivyRAepkgEhzRJhajM3HdZdxsgjcRFvKDhtzWycsGhQ8h5okaY33Gjw5xro9yVxfRekrKshP7WnZ85d"
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

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
    "3mph3dvFNbDogMgVo6Dea1A6tsHyGMJ5HhmJnMUbyWwUDTCimD3ajBUZMP9QxNN9gWLEbiRrZ1r3umpHiX3ozeYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLDpDnnCiYqhYYBYotBYouCqVZy6RnVjVJacVUnK95DA7qVzZgWQ1kRsAPbhcfm8FyZpmrdL8KTf7px2WPSKCjK",
  "key1": "4K1KNUZ78pqJJK9nVj54jGkxk3fzynktAoGA4qGwP5w1de5Tz4wBBMSD9sf4vdvhSPPsJjuAg95SFAhNv4dCaow5",
  "key2": "5rgWd9XFwHD68JPW11XkJ1uJrpCqmQzGUC7PM8b5mkJjG9SiRguumD7yhS62gsnGWsHRkZNsztynbEZv9QgLBQAa",
  "key3": "2RTNnrc2ZneiWvBSCxLxp2kUL4Ai9E3SPiqdDP7JHFSsajM6iD6d1Q8pzJnCeymgsSBVU7V91WxkQuMD9CF4se6o",
  "key4": "2YFwpfWZj3AqnjzqzhJCtXzMLRsutZHsArWEj5ZyeNkQ4mjPxjMqEawPv1mfDiciXKW7KN7SvNGmuS1ZPYHF9o13",
  "key5": "4mnnLx1HgjiQcPSoFcPvnFTroLHSy5dQvZNsaBoiskTN1bn6a4g93XvTn1rprNhUzbvvkNAeUNZLm4CRSfqXwcVy",
  "key6": "3hC44MpEARfFHmwNrcJ2M9Ua2fyGa8BoErbrQ88DsXHUDdeR3kqqFDS4PrET48sqJao6Cumvo7W6EBDCisspZV4D",
  "key7": "61t6D7nwkD54LTvtQxAeBtB7kypEGohJoyNxvh2Pq6jNVpuPZKDED6psvXUVBiawTuhynwgBisc4pdArQqPysM15",
  "key8": "4cufNSMWihEx45tyR39gyjbiKjaaoxKQCQo5J5zb2yt3qz7nigSB8VCf4JDDJzcsL8H5Y2bJSuo7TCu3z9QUxMJH",
  "key9": "qUstBcEmr8kjRGGfytmjaSd7bXd3ux75mX17SsVKWoxE4rGWaiQ6jWaU9Ht44q7xABWyqGMhmmt6hZdVTt4aqd4",
  "key10": "4zUvxwZt2tzwgyozxMjo35aw2RjbtvKG5VgtmtZu3ykDGJy2LZssBXsfAoMQcQCwaPoh4cC73fHau4fJg6firPeF",
  "key11": "5FJeVwc2aG28Z2M2hXzt1eXLK4Hb3tYE2GpRGiJ4iXGXbpEiDwk9A8t4hY4ooEhhApZfhqsj18RpvGuPJ2VjuLsd",
  "key12": "4NnxEa4tfJHoc3d7CVSjmEbpLDXqDvrqDKfnANeADjkbeoYWP6GtUVvXpjoagmddiYjeRwj4rAwQiRho4j4xCcxs",
  "key13": "4dJD6KgG7HgqwVFZCQN3Q6SBNxVY4AYp6vx6DfXbzUgmtqkQwAPga2PcBCEVojfVdz5diNr9J5a2LKSHVqMHGVxp",
  "key14": "2goQEHLgsGWUcQ3USjGWk3aHkyZMjYjFs4YBA8TdveitqFsd97XbEk9nsgt8mXbvq9ujSGHTq1i9QwYoe8SDhcYh",
  "key15": "3g6HHoiRT3JFbHb5U924vXXz7V3Y7NaUtJmnhHhVyCoeH2XLsH5aNqE9NWvSyfveiBiMmwn7wZ1NkT98WAwyLAa4",
  "key16": "3h5qazZrA7LdAHQJQ2EcCLKZpu1XoMutzqQY7TPrJGy8kejpDvrExsUsX1B8pNXNGMXP4H2Na5vEjDqUZJ3xTJbr",
  "key17": "VWGr3TMvZ9dAFc6tn4QHfpdECnGzbJtXmdpoR8HXHKEP2jHz7igCnfCUvXe57UNRv3uNq31huhSgo28v8qbSca1",
  "key18": "4QbcgC2kLgbM2nK69rmwTQwwUvd7o12rK6FJMXGdYQ6A8fboM41gLKV8Qid1wyj4z7eo8qcycEo7vuGA4hS298c4",
  "key19": "4jNuwVrTqZKN8Kp6sT3WzuTjBWYdK4zaenUtsbGKTAEmTJZaG8U1B8KRc6msW13mJo5NRKD1p3vhDY9NLqcQnH4P",
  "key20": "2xchCZ4weJ7wMyijGK6UdtYtbtUpy3a9i6u6XeUC6oxwC3xjb93eM826kptbH6BKfTb5pVe2zb3rFKNoxQCXgnE3",
  "key21": "2Z63B1Jv7cS8TwziBLC2xFZmVJwhxo7LtJkkAboWxbq8GFWPYxVWTYrzHJdJc7NkYqpW5CpRKFETpftPNTLbZvJ4",
  "key22": "5YGhNSugFfs6PUxGV3XcSRTt67MfSKjRDWWK35Aw3ihsfGwVkH4T8MtQw5XqoRXCypqtrmBuwFavcT6SbfXTDmMd",
  "key23": "42StuWEjxdWU4T9nAdhjpsuKL1cwGnhJXDVtJTBkYMHYFBZCnz2koJgfNh1hoMgMp4s6yLG9B6PUfhG81fPaPDkZ",
  "key24": "4ZHq2YcXSxQnhVrhLDRuM7JsXcuUoSD6ke3vaMHLhGPAa8czkVGeLvAV19kdJDdbV2uiQyQACPTRRd8HX16XmBsX",
  "key25": "3x3WakwVqa53wmVKjt4xGWRYD4sxZ1YKoaqy6tDhkSS21EvmTgeaLdTHRLPi7HKYWTF5M6T6mmBdXr8ccvGPMUms",
  "key26": "2wo5DWU49iJAn8cdcm1QTFkGkCaGcACzhRcneR5pgSnaUiJeiT3mM45kpohztrB8LPzHbA37s2s376LM7Zpk9wHK",
  "key27": "ELHj7Cst6uaVcoodz6Uzhzuxy7xAzK6XFhWLqyMTnym5rejPv7nn5xDpXKV6WorW88F2k1WKmu9F7GeXJzma2Ts",
  "key28": "2StYZ7nwhwfpmntYTwnEPJ9SM75eSHAfsKrH5jxxp64MT7F4mVHEinaA7eDKDXvruTtrMCzNpeRM9Mm2HH2mcDWr",
  "key29": "3cJSFSot7cepzQsd7Rp8Xucwu7jQb5S5Xrq7iZrFXyb8rRUYLooscb9uTtKqHXHxC95cUBmMBxpB2AnSihEoogSN",
  "key30": "4iCp4RmwVqj1biNSE3oB7kRWTuLbppPpH7oUHJ7a7BWjBkrB6Xtu7z93KNcYxXcry6DpZLwoquRryYw7XEDh1JKF",
  "key31": "Zr1mdXMakA7wtGna6Z193PQwesAAR9Ajec6aKtCxrR3HGfA53J7xfDZutb7hw2tk8TimqhPzmcUAnLvSzH3vMzh",
  "key32": "2sX43jM9oRVSBcDb12Nyw7Wzn2B8Ee8Piq4ou72Z7yN7SkFVGHd6FoHUC4bKvFH4S5B3u6EfcWyucbx5FajRDqHN",
  "key33": "4z6FTcmTmvjdqUGPkeiPkgmU73eLzR22Ked2ka7j6DUZ3qrCWxgGfjc3xJsy6gy4nDmsApbWQWHeQLyJXTQ3AG7e",
  "key34": "p7UAsRsYD2E4hNVq55ZKAHtb33v6rjFMdn6TZnXhqdEFcgD5w5L9NSMc4JNBPKihsGzMu6FbxEUPoD2Fn3J9MWZ",
  "key35": "4Bk4shawpVGzuS4jucBqE7BkXN6NzN23SjLAKyqCuCRfRJjcZkV4MKewmwgf9HNZbaewFYqqyuR4hxukgEnPvK6f",
  "key36": "3Suk4PcsAJVbnAjwAzXZ6YqWecDkf71iHE4M6Z1Gi5Bs8T59pViWVgZUuyFzmMynMwdU7M4d9kYBSmsyvsdn1CpY",
  "key37": "32dCERtjeJkvTj8z781fmgjbZuEHQiLo1EpFh9V8jWkq6JjqhU13cRUjxaUEBFauhiEPMMpB7ozv1UpWRYaSuvBp",
  "key38": "3D3iVDqZwgVReLeCo3hD1k2dAANVUSG6iN5Cxs4GwCNBfB81pZRHWZy9VDTvFDa5jxya1dfEVRJYoRZ2HXQSxLYZ",
  "key39": "2Ss7VP8j3isNGnW9CxyiEhhSKHCwKhFEfbV531NKTzJHapCMPM19r6L3f9FA4wE3tyrkqkii8eWew5SH45PvuzCM",
  "key40": "4b2XG84HnBfdkD2wF7fDMGypgEceuXCYWG5jHRHqs8idzzgS4yRxyV3GbFJY1fLxtuf6Kid6uxnDtYEeiBDypUAh",
  "key41": "3cFprDaVaiTv22gwe4FnwWLhg1SBqPFz5E6NjqsSbMvf4NvuJfDdBtTbk34Se6MXBC3oxiNDDpurX8u5K8HRwUzZ",
  "key42": "wng2FHruQ9guUkVWWK5TgwkUbx1xrtB7QdZeyHEm29NKcSfTxofHiN59GokocD9e5cbcxgUgjANcLYHnh2gQYUd",
  "key43": "3sLMiQ33zPL61WuLmGAqSZtPnwN5BHcafvJw4kvKpGTo8CNuqW75cXEn6goEztjz2UA2Dpc4vDHAaadYF2CCGV3U",
  "key44": "2TaMVryQbk2Sj8YRdSvmnQF6HZMMvUMnnzZzKG1VeBwTAnPdkd4UtMnUYPCw9CYw2BjtFPeyaN7arSjyTimELYiG",
  "key45": "2w2syyiC178Hvc2A9X2U6xdkTA7AfSfN8QWUAfdxZUqbLjknVdPuBBmwuyePLsKo8yDR71C7WfskHb539Yz6jQW4"
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

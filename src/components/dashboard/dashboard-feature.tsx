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
    "4pwXbKcrVjzJ14vTdj3zjL4xGdEhgch1JpTrz8gkDU4ifHMvFhzfY9oa8BdwC7nQvbSSMpHyXzkGQA1MqCwoCjsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U384pZEBeWQAAt9B3BjpLa9aX1LzzX3SrS3KHuLDiZLCv4tkcAktF8vWN2YGoYbq1nJ1kLPdWhJeFgxQuFTG1NJ",
  "key1": "383epGfbnKUnCDRuWkeLZRp6zUX7LDX2yPrwbKNWX1LXNGLbogBpV3pfMT4F5N3EU5q6oQqavyAvwL7wCtuBrRj8",
  "key2": "3BJn5HXMPgM826zGsp327DGCR3MFm7a7YANqqcBWfe2nB3UWKbjWuA15mL3CAjdzAP5nJGqHfz5cchYpwKX8C7cb",
  "key3": "3T4M64iaiJ66MUx5eiGPMAhgn7PuSZkFQcpj2GV77bTHuSywYwmpwKGxXuiF8poaBQCnng2iCLb3kD59iN5JXgCX",
  "key4": "4WSs9aZ38izmZyZejrK1Z9gsjwcXXkP2FL72w1w6Kp63mhRowv945CKMa45DbcBEpz1gHE6UyYQtEndYZr1dt2hc",
  "key5": "4jXdcw3qtg2Mc5rQn7PzAVMeKVe5DK3ic22R8TeCgLuRehwr6aW4A8vz2KP6i3RMrzAg7h9W4q4eshw1PzaQYyRa",
  "key6": "4Pf8cvAAS7Bxs4hHthS2rfAXAGaXpvGg4iHxC33WUkqWNEenLuiM9sJ4sd1A9XoHX8MEBEDtKBnHk5yvyeTNsmXP",
  "key7": "4ss1GcJTFUnq5XZ7Ntg51h8o16X8AQhtgVaTxc4f42BKuSPfMbimJrgVVHhXYkouc7GBTpmSCPed8cpCTMDGHtQf",
  "key8": "ujw8VwKyZPM2ELTQjTh1Ke1kaY6xGAYTGXXy8Vu3jqKMYjeCWaBLjYQMro1tJUxxLLyoB6R4aHRdqivgeVR9vTB",
  "key9": "24afjJGAaGjWQpN4QZwQrt3ERoC716YYm4mXVp4vpHPSURcM5dJxZNWGLVJtfCeJPdw9756ucsK9cMWGvECrazxV",
  "key10": "5uJ5Tk2mgdMy1e8bPcFYpisfASPqo7KHE1WooqpLd9wBDjfWQotPo68kb5qs49rXrRPoBknthNBiBNbAq7xZPKRR",
  "key11": "495EEjZxhEEPEsziKzi8E1sRPj3gKqdDWwvhnj585kmDYrRHQx8JUc9XRDBA3DhNGHLS7UB2twEuQuD3LtnnCsrD",
  "key12": "3aShTd5YtbgUVMs2Dc53fhmP6Q2zK4QvQc88uHSPDTiEZaapaWVC8ETiPhJ9X9GUeNu8uRQS5q8XbXXo5zMc2N3w",
  "key13": "3g9qxARcNnnnR4hWPzTD8nmez82kzvp2S72CfB17CmzBHr8HdU6rLDFi8wNBx4ks3DBMVkRzKsifdhQM5PstWpee",
  "key14": "4gqeB7rFMKtfedDtS8R7oKoeEtTy9NGvxUCJXGkadTuyssSwNB4ewRWmNvhMKNsUGhzX98htuaeaq5LPdFtZkZRt",
  "key15": "2dvoeiyN3PMgkaX7BjUaDTmZHfJZnB8FHNkxAKen5rvCr1mAmt5QVkiiu93wxUPR25gZKGHjU1zycYZhANbcDe4J",
  "key16": "4GHWV23gRqnDgUq9j1yzqy6Z6AUh8rzLA1ZnpvGBCjvxsmMrdyH1ZtSkejtuxSgv5QAuFG9bxxBUczDWhYbxUyLW",
  "key17": "41ZCGo24hyidJEvjwLjxB5LFUvtjSARcMNfLXhx1cSAvEyPoPLR39meNpDqrMHnq8X7zFwqZHsjHFSChHoKAATEp",
  "key18": "65J6RjhPZitGN6HJXHVUH9sp5vF8kr72cnUosqcRm5ezEKA9Utxffo7YnaruwHEy46dhzp5ob92m9EWpM3wGE4gc",
  "key19": "5qFpF1odtePWmNZkRSkvnonSe9RUGHo1gSjewGjG5xruM3AsdqqyTMfDXjEZmQ4gm8utZoitnK5GfT21VnBmRQUi",
  "key20": "3gYy57RCvWkejT6ZVh1VdcT1Sp6QrGbmT2trTGoE8bX8tuYVsySfbjXkhMFrsSkL8ateBZwxKPE7VMdDaCzsRaWg",
  "key21": "25sqGtErmoKZNozdez7Xmq9V7vGKfWMF1wmrPmbXHgXHwoEjMvryrC4vAMpHU2vWAL53paNEhBaXVsyrWJa664YJ",
  "key22": "2wbqdWFQKBkU1U3mf9EtkS9edS7r2U18wZBu6MbMXFymRJnGcCmH43oZCBh4vJguYsfSgP7CzAm8zWtWkLq5fgSC",
  "key23": "62iuAVGkGCv6vtRofrDVN5XDVuzwQ156uHBD63W8hD2fNwdpy6CangNnCsYj1ExXaxoSGPvMkAsVLyPvJXboScWb",
  "key24": "2pjrGEukky1KDTGmKmDD5TYXyErzEg1NRGga74mUWau9UFJbi8kNjX4wWAt9pQoc6pzmZvx4bGwACjaeEckwtEdo",
  "key25": "4CFN2HbzxZJG1xuv7Y7JLgwW4Amo5ncvC2TU858rzdoXyGTq6eFS3XopmXZvjW6GokAwRkNJSCCy2TFNQrEKGoXU",
  "key26": "3Bt9XU9N98nvtLDxQ22pEUZv3rNXasxxbj4gTEQFFJeyxf5ct4M75jk6LkxQjxG1fLdv6hPFp9X4bk9BemcSKkm7",
  "key27": "5AmQZp433o9zkCd2HsWdpHDHQ3wrRf5Ri8rMxAJ32YKvjMpJptP2D15vfjWUDXEXxasTjfXrALRtr7vSH5y9tJPA",
  "key28": "5RRezKgiCwjimURDrFe2U31RKt3R4mjQEf88JZqLSPHE8whEVVsSWQ1sDGdD7qGbVojEwtundejCvCdFSah5hGYB",
  "key29": "2yb6yxxs3XLTc9gM22hHr45FrxpqSBAn55DrgFRatAnTG7eZSM38H2VMNMSGYZuEjm9WXjfJEvdDY1TLQJTWKdKC",
  "key30": "4nNnv1W3Rfu1E1b3J3HbHUSi6Tf1qG9wD4mvrj7Y4ocTYssgUkawPAKCkz3Pmc7L6gnZKMewr5uggPtvNFmL4Ydt",
  "key31": "2XYxg5e1ZxcNtyoyWMM57vD7TxJAk87N73kvyfkfV2YFX13m8piq7Js5DfGAmEGBN89TzUmsR5DCou4kDLNakgGn",
  "key32": "3D2QqFKoGBu2P6M5kkfacjoftc6CtfkSrWqH5fcssmcYoTcs4oDrbPxwwvqvQKJawHPPdHtMUz21ZJbtcLGo8HyM",
  "key33": "DJyKFRUTNGusTZr7EPPr6jTwciEhRRjYM58eZDDCmMzkWvu67MkjMwRHQPWFZZVMDPoEXwbNYYfBkji2vX5hf2a",
  "key34": "YWjH5zwDauxWskbJ48Vwq6qCe6x4iAwJ9goAE3QQ7q1JSEWdtWCKEpwMXymVQJyXMqqKpQFVYW4hZNJfG3eaV2g",
  "key35": "4xzCHZSWeKwajwExQTZeHZiUciTHkKyg8fKdgBWcp6GjyzT9C7w7G1gDA4ZQZw812Xd8QzgUWq3WMqn7Pfg6pboW",
  "key36": "3yHVxtPNs72YLcwBj5CRVGxP6AdUmHfjUrSXVRf1GaGhicoRTfjZ3hYcSVc9Zs62gwo3oQdNam6RSkQSwFn2NqyX",
  "key37": "5TDhuxTxyMKFXwCF2adTfDNUe63oh3jXXbbtmrN2DGUTaK557C6zTcPM9NHwDbDCcT4cL1pPS27qrRzMrrw5vF3Y",
  "key38": "4X1DvMd9F4JN9VY9WgN6n9kVXss9jstYuYN8MYKqi5xekSmgk4FXxhMcn3cxN2aJv7454KVbhY3XEMx8h5LuFpeQ",
  "key39": "aTy3U4QhCHFss9MAokavVEBCKi3brBoyWNi9i4TEtuVctGcvGyXAHG8Jc7PLGmNWd9rr3PCNDV1YLfFXs1jrMei",
  "key40": "3sw918yYEcLUggfpjNVmc7XcXfo4YpbqJNCrXSYfwbgaV2c7rqUtj6gDn4nn9dVq1JCHpJ72ExuUCCTERga5Z5UZ",
  "key41": "3n3puerNQk5Qa3p8BLYEjKaCsL4avuPsqAv3J2d36C4vVpKkpfjDe5VYkQZqWRGQbeocJ68HErKi5eWyDyouYSEk",
  "key42": "5t1DFTCHtwDpTY7aXupvdNUnrbFmGHSPN3HaUWF83t2p9sreDFGtRkC9BEJFzofNgMsWGs33Y7rCBBsY3USx1tze"
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

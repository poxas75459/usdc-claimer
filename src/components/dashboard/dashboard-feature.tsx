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
    "2zHrXs9nkesQa5bwcKmZAzPg8ikKzVUVtD2ywKFQfVjX5qZh5ntWH6quaS9K1wDYXRr8g5z5MoFH3jG3dvvZQreA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vV5a1iwGCQzRdW84FUNRECanCpZ6TEyPhbrXkmPKZGeAbydoWNDV69y1otfEpK1wefhkxrApmBV1XjqR9uJBvpr",
  "key1": "4czmyQbsueSAgnTrT9SgijWRTiBAF4XfXnom8zrJK5qpemzvmYtkBQ4oHue6xY3TBPTcyUpNrXT9KpHdz4ruY2eY",
  "key2": "L754DVgUMotLhcLqC2pfQnugQ92sCLtVsKVym5YYQP1nwgi7LsaAGBDRCFm56vf7rqknwfjwHWr91xd7qSKXGmf",
  "key3": "3jEMEPrdpH8CBBGBVJv1cZvqsv83ureqLHata1XS28LuDHDEmNscYmn9kVCJ3BvWTJ83K4Aecpzy6AsWgMet7QcD",
  "key4": "22Vc59CdvqoNFZAXBuBG6U5SEeZtxo5hMjCcPcMsq4A7x5tA5gi1s8DjoiWcgFd6LvkRtYkaH5vEjBdF7J8YK7a8",
  "key5": "4Gu2sF7qTbFFoRpr4VAKPVu7d7UBJ7tig6kJ3heAALNynNr1jJyGQu8EpF5sXKxdE1DW87GSLuEnhzXuE8NBa6Ta",
  "key6": "4yjzS6k2ZLNbWncLfvP4rA5sNcjpXRaJSe8UG7W3b8sJoQuKaL12ydjwWGFWx9cVdcaa6Jbi5TKuwTDgP74mJSVN",
  "key7": "6NkdKGTnBJJxLXJUsbtdRVDTamYdtds1aWtQ3zn6hXDegq33SPfRs96sNu3EfkkZyHrquER1SedCVJR2g6pzLJj",
  "key8": "4FYfNQZycypSj6huRpyGuVQxtQbjPVPw5dnvcm6XkdtreYH9PMRKrdD6oovQ4veG2VtVL6PTbeHd82yga74ijeek",
  "key9": "jN3rayp8kKyixhd11QkT1LoeUsKtUjo9d4YAfrvXuTd4KS4awBSEHxtELvmgbm2pek67RpVwXFFhZhCMqGJRsft",
  "key10": "3xVUJr6vxF7tU1NqBh4Zr9zAEncqmuFKu51gnUGEipwFfGoroDumBGVpVL5wvdm7UCWaeunLNh851De4YQ7UEhj4",
  "key11": "4CuZHCch7gynL2bBYLgEBxxFQCGZFZcHHP7LGMEC14GHZGkrfinADvvseqNP9Cfj7ytXB5UZXjBwiCB4feC9HuWr",
  "key12": "2RfGFWUD6FBdY7Wbzn2zFA2mMDhDjS32TFvBrwTSGg3GigjGjapmwJJcA9foVrAd3Acd4Cof2Mp9D1DBYv86GPoH",
  "key13": "4jHYvvRV2muQvdXNezq7cLuwZwaQ872X4viPicTnK1mKA863jjHSNr2BPFRNZnw2GrJEtuWw4BKtHyxy6fNjAJDP",
  "key14": "3dCMYkAeck6HvSAhh61sRCYm8mEA9dWPqA6hjazmDXYufehGGNNV3Dr6vot2TAWy1HbNsEozFLXFAKSa6wJHkgMT",
  "key15": "4DLL5qF3u1ACFTzeqmirNHyrDkEfWfmpFSPGaXXhT4WqvdTFtfJiTjyDUhqS4qkZbQav2b7z2zjDWniBF3oxeaWx",
  "key16": "tkx1p5BJLtdKfwTXNHtgmHK8N3yCWcsGyKLfSRrvJfxuF776EanKuxLFDetYYk4gPejBXRHhMrEdHVsQbnwCn2u",
  "key17": "2q1BcvWL4n8PvGuqgVQBQncjsG8e1pVzeyvqNyMhuCiW2Q7YoTvjw976QmzTUjGHQUYAqbgBFxVwRRZRR65aAite",
  "key18": "4PLH2fFv3nqzgjaitTk4SJQNhDM3JUjDmZbGV2nRgoRjjhJmWrRnxTTiSkURx5BXLETTWsDB3TRRH9wKbjLiyWNL",
  "key19": "3wT4HkxhM34f27KTJWGnbzTRuSMmB9osStj79q7ticzPmJ3s5mKJkbmkxaeCWp4ZAXx1xkZYgeKe4WCSwQ91uD92",
  "key20": "BCNp4kHAEoz32oGEoomNz7KYF5khi7C8FHrKDYKoo83VXfKqNRHxkbsAUCgeHdTevxYf3NUv6KKQUbaDJ8AVVRq",
  "key21": "4r7txDEpVLN6RNq3pfqMXJFVWK1intw5StvSZSQ96fPBtrYAeGcVVoAYRdufXwT4Tg3w55Q8y84dafpxYWRsJPss",
  "key22": "2xxTsBk7qkXuyny34VjTpssFwc5Av7sFGeYJMeyPGtCXA4ofQkwTCUkngVV53c2SrLwtyVjW1y6yMDAd7wdKr1rL",
  "key23": "28YHqCyfCMiuYQ3QBT42udjMbUTYVmExB1engrVyx7q7rdcQTzeZjB17Jk6GPWWMnqoUpfgEmqJt7a9VmJoU1LQf",
  "key24": "2GysSFagM8buhh8rMfayVtRgeZNdNZ8hNkCjfMsYcwBgsonzkskpGvrRWqBkgAvkKFuhAsXPXab9i7QtxgK5kRDH",
  "key25": "3cmSYiLGQEgvi2yp2NyosFGk6CZf7pGLzSsEyEzAVDXV6UiBrp9qGyUdJXEVa8XK5AZNpYLaftwsxtNPktRswXqh",
  "key26": "3oYvBmGmHeoAcrxEerSRhLvmTVy79d3mcbb5aDGEALamQ3CSXt7pnXbhMGZxegowCRermmMWy4ebTAJrd12dfQm3",
  "key27": "2FrzcJ5G7qgDYJNNdCPLxgEsnnTaFJvJNodgxT8avzjb6JZ2ozJsGE7fpekBkkdtrfRQExxYKdMRb3dVrEZNmFbt",
  "key28": "goMBZjyu24BKP2vndqiRxhbuKj3Nm7AeYQdUg9JNoZSSSKVwHqYnmsQB489byYUQmEft4auy77jH3nXdc4DhnAD",
  "key29": "qx6trDF77FZniuA3Px2pf7BNUs37jTpXMeiotb5BxwSWpbPZdyb7QL1KCJzDXW9uJc7zXAtdMSvYCASac9NaKGh",
  "key30": "57H5vuBqqouP2TBu4tNvzMmdS4qS1vyDpjB9UzBqBMazweu9ANZ9Tib5p8NCZisHwQ3h8pK42nz5Z3Q4dRchC2pf",
  "key31": "3mjhtHaiNAHF8HC21mTFKHQZWeTQj4ihCX9bS5nXyKzJTvmrdekPxxr5CLjug28GsF6bRkMzpAemC7gpqXpdVtY1",
  "key32": "ciVcisRZ1TeqeVKdcUQdk2P6RxBSMijUVDBTez9X3zkhJrr6y32nN7DrwBczkpv5Ywh6GbjqrFsAj2F1rBcjeCP",
  "key33": "3edKgED214W3SPvL9kne4T8rtTRRX3hP3CK2HMWABomvnj6dt5fcNtPaaKmzSsthG99XGkeZ63pXbZNdcKZ3cJGt",
  "key34": "4mgz1Ft5KpKU446nPueGkjYdoJUQbe975cd4Cub8iATWFUzvg7v3pUotwKZr5LFirZVQryPq1KwCKrzQNE8Vd3jM",
  "key35": "3sjuZFwvDthAYFbrEqMAUhKhxHXqbEtZ5ZNfzChH79F7xrFXMzE3Bgtk1KAZ2DRp3CmdeTyw9uaFZQaATvxYWFWu",
  "key36": "5fAd8pouPYF9mAVcVWRqg3GH7qopAMaw1ujMPs6Lj2Q2eU5Gmkumc8PVntUiaqw27jBRdLDxih9JAH91m5KD4AcK",
  "key37": "xDC9SbviRFLDjciX1EwLEwnLuqcdUxxNkqJP1DEQG1aYsNsHHMdJEJapAe8o4c73iHDMjxgG8Fcu1vcDVgsptc9",
  "key38": "DQgcbwN72Q7uc56nyrifPofX3yTsT1QhpHD1f5MHGzjyqY6J6jEXsnEhGQ8tGpWYViVYeBWUGg4kFWBgJ3RgG2o",
  "key39": "m14ftKryYSwt4LBd1Tjy6fzrQ6NLG81UmprgWnMUwZHdwaodv9FLcbkTTqjkeE61UFJE5VFMsUdVpGjjxVZ1UdC",
  "key40": "2a5UAGPr9k1S8evP4F77rBgsxdDVSgfaGwyQdh2c94m5DNjavqmqmQefhHC5Nvk59P53vVgRwaZDZKLTsSy7J1YQ",
  "key41": "4aLni6BP4Df2adSQstQ2ff9iSbBHjLzR5kroSS84trvevVkEZnk7SGPjk8BdkPW5CHKUDSaab9SgxQwTEmetz3BV",
  "key42": "3rNSS1uD5UFu2Ewf3tPrYpscRdJXsVVJdAsiL4R6FEbUppsgfeFjaHJJNBejdYdej4EVRVXGVcX6vVJFt76LrQTq",
  "key43": "iH6S5yEPDFWvmtPc5nw7mWd9LLG9ZkoCdc5tKdr8Veu4Zvcm3LMEigkBEsBEo7SNzchYfmLuE1sFYg6mVQrcgZq",
  "key44": "dMMHPGpbkwHceKfSAw5LT59omdg9NU6GAEAengd9H5ixxhudC9xXef4vP2bHthgT5cy4ixnwgz5NJcA9CfPMXcY",
  "key45": "5Wi8tT53VxCftwpGFH9HEFh2GSZELHDecMMdPw9dByJbdX5zfiwDTN59j4vbe79hPKfsgaYcSEwVwBvehVxa3pCY"
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

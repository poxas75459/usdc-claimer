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
    "5c9S9iXFXjSvzNuQdQqj2NqJUCHbcFxViR2nFrkJrwsu7YHFvygp4DR46ezLjKwz9k2LJFK3MyhGiRjHpTyo7o4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wD8aXrnD6rPpigAKNK9EXPLDdSbeZhKc8wPuEL6U7aKbStR3KrTXa9cXUzghoo7jswF1M4QwUDSqXQWB9HrRVX6",
  "key1": "5j3PKxwpo5C99pPLzV8fPwfGpQduzMbaureRv1FQUPZmKpBbdtHSiRvpDipkL5yLcZRQixpg6k7Njyont3oHX4V9",
  "key2": "2U3L9bfeJiSbz3pMvgeT1TdDToYncjYnfhQe4xghKksCar7XAYWgGDbNjXcme4f7Yo1xvQg9afLFo9toesBjuCjp",
  "key3": "2E1m2iDeNzcFvPpQQj42Y2XC35G5ykzcrZLSy88RZr2hSfUN3vAzvzWVpFgTKNXD8TcJuFXeMMcvxzhUBccdKreq",
  "key4": "4xjraZASifDN8GY9UGjxcWkZGA9fyjmbcYNdcscVBRKhwca6wHYFiwwyXXf8wkHAUm1EuhVegKTUdQ6D5pt8Tfjn",
  "key5": "5SxBCm5e6ndjvYA8RdULdWLJ39q8zUq7JvBP3VPTJ1zpK9KsfH5Gf1SsA4xQYQwHeXiuGvGhS2TNQuTUC1kDk8rK",
  "key6": "5bxkBmyDSuJSxFC3QyYdKTJ8kuJD4wK9Udxnv5xsTxUds1yphF1KqLKGJPfC37jpVENGskZYBuf4GJxk3oktMPoD",
  "key7": "5V82QeT5Ukqc1DdwqtWYnqJMbmaGV9PmNfdNRymDVQGVaFjR9Ft4v7a8wZmSVpY7EFK6Gq41aqYG5LgaHtPEkxnv",
  "key8": "4Atv89vQ37TebNTyQnfpA9Mg5fjX6WMxQ4Bi4Gtq6uRPy765fnsbk7Vt2pr5YvpmHThgpeCHi1aE1KXadnxQPz94",
  "key9": "3Zhb7CZudEK51tkAojrg2wscfr3L3bsDDseA4weXhiznV7fHRPcyq1S3tGCJfdHkn9WYP7R4yiPQLcFGQZf46rCH",
  "key10": "Lag2aKHAAifkFGd2ark6qmKUXoVGSc2QiZgrWJ93xCrVx3ND7PNKJcrrjki3fbN95hw1iTukQNQL9VHKRuwRtAA",
  "key11": "pqi4BimExxkZTqn7enbmJgXBrsFD6eHCyh7CBxns8JfKViD9KppW6AEXTpN7rD6xnLBcHnF9soqfnZVucJtvXde",
  "key12": "3QMMX1LeEAFFJqhT4caDdYU5VT89DBLXmVz8ihot8L1cM4eMMipfevZHqkn3XSvutxxyKK2d3dfQFfrAqV9q9gLq",
  "key13": "3C9C5DoJf1z3VHWD1VSMacsfZN83FfkEaGahfD3U6WvMmQegCzCkzYZkn9nWkzNAKAYVLrQrNRctAsobYXt3iEZZ",
  "key14": "2oTL2P1DXvkWZhTsUgpspFziaWCERc5Jnhsx5ykAyv5RXd1EM2UrMZZoDMaJcVpg5RFwQcwCHjhrac4Tvy9cBTXF",
  "key15": "4LWnzmfXg2bZTfjNpWFDLy7HSPEMQfSsJJonyd9afwgWTVaCsMtB2gwoLxSsotgSz8VRusdpA4YHA6D4xSMidD3k",
  "key16": "3fKQMyhp216ab9Mz66FdJnp8PovgLjz8QPx2LcRbJbNA3rWsn2g96dxoWBcF9m8NKBMrEAfZPSSQX5niE6651oJY",
  "key17": "5QQQ5m1eXKuUCJZS7de5fHYQSbCC9vjFZhbyUbh3TyiLWwfyHFxDS8tZcrZdDU2dphjyGvZniVoXcLCLNrV1jE1f",
  "key18": "5qpPmNrTFNbiH46yGKLNf1HjzMMSVRBmwf2wQDHW7MTJEXSQzs7QHsvpbdsKgMWyBfQLRTz3Fcvih5Wd1ZXwvNGN",
  "key19": "3c7v8GkJ7opn4NokffQqX2g9dTjJHuUnUVfMfiC3CWLtiGfb1y6o4sAohwPU1sEQ5TjHT57UsANNaZRMjNtuZRt",
  "key20": "JuHP2hA3BTdEJQRDcJH5qH21A3Vfw7A28Jd2TdS9hFrKtUyNEvj5JAui8U3Pj1RQTBsUKHVX3zfVMzBrknQPvjx",
  "key21": "21CxPuo2YZUYPAzzemFT54KhY4N98yZLxh5DgRNgLhunfqX8Uu3rRUPccWm4izXP852uWdV17Qk2v943GQonNsmW",
  "key22": "3tyu1xLeyUKyyWTr5SG25zEznaC88ztLHrMQE3a44z5Y77MYYT69RFy692J1Tuhoa6YR3cKBJnGnZXRf9MuStFtZ",
  "key23": "2i8E5cgAs9PrwRKgqMqun5T8dYi2TQh8UFP6iffd44qdjjsH3a3AH1sPX7bNcp1EnGqDSTpEahk9mBd787qxLStB",
  "key24": "3ZtuJZGt841AhkEF7vCD1VPY5XqY8CvspLGzqfjz6Nc8Uhg6WmSSCjC3LF1zJ3XECu5uXhkisk1VCzdwNjHiSMY2",
  "key25": "3oqX8bHwX2hbrDztgbgzrSamyrEe1irT2zREnzP2QVf7vwVSC7zHKZofND6SsnTjyCg6Yv4H9u1Ghfw6UZGsBv87",
  "key26": "3x5qy6bi5KPcFybADStrqYefWNSD7Hvbzqnt4VySHK4JZHTUhN8bNrNZK2kB2tyyr1LGHbQjf5PcTuzatbtb1GPx",
  "key27": "4yc8srGdC7dPZZ7sC8XdbnssL3vgLoEttmroSBE3RZf8KzhvuTfW2vqToqHUuuG1BkJVBZunFQBe6anE8dYb4ayY",
  "key28": "oN2XetGppyKw8rHRoeLL8Hy7XrkqQ6iBA9XMDsnLMRNFzWAEA7uFjL2XUS1hpyf7PCQGcJSfvinZ4CXtRQkSJVZ"
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

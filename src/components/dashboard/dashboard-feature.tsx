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
    "5K6r16REvtYr74qBDLaFLoanXbTCqkuuTamQXRzCEwq4pojCqg7yi1dANoUng632MT8RmhARFGMdqXfR78ACgzS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Poyb4AtbTTiT51nJU6HAHUkHaZg62kxZFn15bqSfAgAVmKDM6uFaVHaCCgh7CfcKMiCkPSh1DP81RwAaL8LTh3",
  "key1": "4bgaGYJCpjgsug9Tp6myPxHMkHyRVZN5qSe5Fxd1XHLRxqJ74RMyQ89pwhRkVEiQRHNYazCjq8wRmxacRac5mHdw",
  "key2": "4VZvbYZpASVPTnj5j4Z9igGzUtwyFS48jc1rabSsBDKfYfMeJCH2gjHQAnkh6EWuMHzzBnSdHTGTnZ3KFYqoq9yY",
  "key3": "2bn6WsxAvKh9AkiSz5RPmpQ3kdpwLf9seDty4pARjVwi6kfD7xkpPKUXEXE3s1gcmnUYULACjbQXwCHT5tuyRHht",
  "key4": "5izeKaaEqAieeMKeWJidBgrkwQKixvJJBBx6CuZQ5rRS8eV1YQRBNJkehSBXcJLgn7gbjLHgAFjuAduUZVSbi3gG",
  "key5": "6b54LoYD5mvu9EDHvvRRe1PwC7pLBDcHaNqFKUPuHBi7ZVq3jTHWbDFTs96P6ysPwCrk4KzS5yQNGGvfoptCioP",
  "key6": "4U6eqxtKCbM2WAkFdRQ23u6Mnw6S8oMSZwSztoktQsbuRYd9qEGWFca4QjU2T3oESYQu6LyCgCqgJsxAUKquWNVy",
  "key7": "3F24AruJEkC16i8q6NsaqvucanAXP9FK2zJZqgb9SqjD4BTU55Ud1Mbqa6B4iDM2E885QGddSN69AQveCm2oFbgW",
  "key8": "qbq9YBy3ghWDDph3cXowXcnZAJM9VnaRLq2SS7gNRbu66fhyLEHp3aAVGDb6i8jAKas78raDF2fnc5zcdNzY9AK",
  "key9": "5cKiGKuj7AqwLvBBiuEj4NCFSkKb6T7p7MNo15n5zmGNueNEhoWHdHeCfqkEGWDkzYHL2NfwrdfRDuUzNubwBGcH",
  "key10": "3vmoyboHeroiMDpstqa9Cv8x248fVrntQxmGoL9jc8dpcS5REPtZsxkiJh3fpoNNSd8ZStZ2wiQScjUoWAe3PkLg",
  "key11": "cg4ybGsHZwDkwEJ3Zic5iMEZZ325SU7oYfN7rnhb7kpHkgvcKvcGfcJp3XyAuJLLoNhZ7bJr3rZX2GuUx4i3kcV",
  "key12": "uXx9QLBp1bq2XwWq1SEbVWmMxGhnVU2oTrCj9CbGWUCrtKumG6h8jM9AdgHNadKJ5SBjde7JEL6hifVaUYgcjax",
  "key13": "2aEKmNjm5Uqgc8DJzPtPGbj4Y26cHwib4R9qxi8Hmp77Q2UqMNvGSuKRw1xftWRY8cuci6k74UXKeJmsdM6ubypD",
  "key14": "25Lzkjwy3Q72j7mRw46n48h6vXn5QpFhhm8nwAuHHEBKbxoKbCYkFQC7yiPEkp2gZuuh6aN8Ycw8ujxJjFM66GR1",
  "key15": "3Nt6hQvyPHYzJSpgNdaw5m1KmRWZ5YgHvZrThfNTnjn2rQx84hMmP11xhbkxPuPsp7vMJckgd1RWrDFrLotv1PRT",
  "key16": "4Bcr8mu7ak8hzDic5X6qSUbeAmhCgG1DXWGKcxSv9T2kSLdPeEmrahaka2MoaFK2y4pH6ST6Lue3xbuJCm9Pwozs",
  "key17": "2u2F6Y5R6Ksxi1bdbsddKME4f2QMtxX3QcVsQ9DhLr9dhmizxnc1S6scncq3LQYSSs5hf5F4TpvcCr8RmJYVwQ9c",
  "key18": "58qmeY6bvE7sbGpHVk5tjpNDd6Qkj7c5GD6DHjKwRpiw9KubZ2PLcdD4cFUk74DZNj123YDFNypJSfEE28Ja5W6d",
  "key19": "5F2Sj7Ft6KXmTbCa7Qmt39vCEkX1hpGdc47JKxE2DFF2zeNQcTroqSQjGKjqmminakhPncwykaG7DAk1Zs7AEAdq",
  "key20": "66eWGCMrMiUtbMcKN5nubSsTthM6FjhHymnw9EhgWYs6dqs2AN2kfsr9eJGp54BNEABk4RreEGvtNJmwSWc5o8D2",
  "key21": "NazECTenxQRYkHztSSyLdsJxuVjT1nGwamVsHSGh6PJL4Waa14fkn3rytgCDY7AUvYqiH7WPKi6QkjhafeJdGZ5",
  "key22": "32CVLF9gTCHVPohtdfTKzgMCZGYR3hvQ16A6wvkRsCbEavxZs2k2CBvf5LPHVK5itqZJjx1BBy4b51dPs5VAaPev",
  "key23": "282w9LCJWi3ED1hLmD365dhAk1vhEQs2BVG2H18UNnzgHBT7XZwdpPNsHEffFEkCwiJiU55eFXg3trAvYHrw4K9h",
  "key24": "4tqVaKXFeYXzP4NEqooDJtLJJSkWJCDSUatx668KC9ExnuxDRCqGyV1oM1iw2SUYEHKbLdaNfwXAZxK1md3ELBnx",
  "key25": "5mdJuoQNbmTfbDZa7GAgjPMJhc4BMZ1dyyq6KTarq5KvgvsK5JCUc5cLSCii9ZyFQZzLEPFabVgqdjykyiFiARe8",
  "key26": "5wE6mX2MUN9oGK8JHw3RdhuQUnhh2M8B5SpmG27uQfJ3XpGH9T3C6dZCvQZuzx3vZmD2qq9Qco9FSpqXhGiTGEmt",
  "key27": "cDuCtvrttuTjuubBa7968svYsgJdHdXSeGNaYirP3CPS3ruor34ukbipUSaPPVjZ2rD7BqHgf9e72kf9ybLUgRa",
  "key28": "51ejrxTF54bUDpEfvAXcvsDJ7AyhNQGuSv7M7Ptd6WdV6Mwnj8DyYSeeuUn9PEFZQEZRyYZm75xu3sxri2sGViqb",
  "key29": "5kC6xHWXBm4sEAgET2GCzqWHLk7Cu3MuhLFyoJUjXPri8JxVzx3sE13isTv9iZiWyVBZd1d6rkNfV9VBtvXkD6WE",
  "key30": "3Rm8nQ1KxFopqtwUTgvR45bzzUuzacpqW272YidNrKbHTM9jrCmm4eTm8gcU6iyRS4XasVrVubP9hdopvpuZF2Lj",
  "key31": "2GhAocsSVLiRfvyaKv2M4RxXyBTcmTTrCR3wzUGQJ5pfDpsjabHQJLhv5qRmfMmx3BUjz6veSBfoTE3DUumg7Uqq",
  "key32": "JD6mfXJ594Xx3Pg8A9xRuWuJ3gvuoR3sMdGy4u55LbRT3M4eRqrgmvkD61Kh38QFWZXEUMxALcteqy3fmMo14AS",
  "key33": "4HXBeuqpKttxR7EAFuX93j1ffFTxwWg2QgqEc8j2cGyJyjX7NNA8YEtV3d6DbmJHErH2nm7bRDBMhzUnCzw8kzfo",
  "key34": "4pKUvUdixqPxGASNiEt8XZiYWJt2KoxyeTkcKzidNz6tabU5FFaVUuHKGze3EATHfPM2BS47MP7A2vKhRpNnp7JW",
  "key35": "2Q3xo3aUyLJMDyMmBLWMPToacpQzVYsBq7z3cuViVSSwSf7MurUwL3JwKaCCADUbjYXxfPRhpvHhaqY7Xdgfa6Eh",
  "key36": "1SaHceGijuxUBDGVHYsEveJGcEGwdxvfppsActU9yq3SByGqK8vGxWyzvP7wZ4Nbecqgy4X9ANvPk4nDw92akGu",
  "key37": "23YDsXXyKRDePZacwftCpfxosBVDXkbGi8iVWMEFSpxqDfNU7iVyQChNGyV3uPDoGziH3BLbsmEVpUNrFNUbZu64",
  "key38": "2HyC4UxSwwYzNRUmVq3vRDMeANMQfQAuhihyMhq4TNTYumHMZcunFHAfyHuGPUwU4mRi8dWBhi584uj76FPR9nKG",
  "key39": "44xJ5nPSFNeorPmVPreRoHtbj4rC6CohKWrF55c8UbMEdUpg6dGBx2ayWWEVSaHMUvUYCfK8ZPVHccJpZMykae8p",
  "key40": "5X67nP233ECsngTaSLQrUJu7M5tNX5T69tP9xvFMi8QJ8XC3L3Uzaqqt2MNJPxxXmCKcBxSz5UXmc93YHVNV2DhN",
  "key41": "1h3xS3CZXg8HBFpm2wjFoR6fKi9xYoPZGmRLqhSgrP2M7hht8RS19BoCU5NbfYBLkBDsgjwsgKSyDGL2TL8tRbr",
  "key42": "3NFAjo8KnVDCgQUHja8HjeNVVsnR14g96PA6PDAJgwbtiSaR8LcEfJDLSosCQvtS2oFuEAhexfxEeypKsJzfkEHW",
  "key43": "4JtuWT5Bro5VxK8PXNwKrV6x4HbsmLPXzMynQ9vZGCUgpyNoA8PGFLaTBM9Nuu3Rs9PJeonmYGcNHuNk1ykvQtxK"
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

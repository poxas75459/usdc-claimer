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
    "2bHx3VSe6okYWMMNkCqMcntS5S5beHDRPAMEARWW5w3FExAfJ47i2B3pMsdCC6WngYwT72XDy3t8jVEk6GCbspr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484TXpCeduSPy45rqFMVqoWWb58i4CBmcv2LC6uAxAsHj1R2gyqMzrD8cc3DDQoyw1obhZWYPjNSXSBZVf3waKZy",
  "key1": "2TABDdr9qB4qSzDEZJxN1ZyGmKv7EAAwrVaHtD7hHuec7FQFMoCZKd9qq8xHxF6wqriWrguqdyEcGHt7ze1irEjK",
  "key2": "HK1aEiimDoV6fiCK3jtVYETTPS9fVLvcqMQgiM65nZU9hGrST9d4Bv3mScB66fQK9fyX2Lw9k4h8ppHuposdn1W",
  "key3": "2vHwFDBgJENJwMCNM67WdgRuXjamTzagLdyGCToGjHS16kikNeaze12d2PdDvNP6PoYsbpQzVLxkHfo7uRbSXPHX",
  "key4": "cREdP99FxJUgzDDhjaTXwZRadcN1XxCQ25depBUVcmbZ3G91kU8VKttGVDe71x7aD4eq5NovdMvN47FosKx4U7Y",
  "key5": "5MPyd22q1sooE4ieuJTdw6WMLyPg8fPd2uuNCDhMcEyfMU6kNW8WaBaw3SzpcN3WRrxkLjBDsUa2pPQx86rv4cp1",
  "key6": "5ci1FSAEoNKVerpK8MLWPbi2Gneqxn2pJTMgZMDNr6TMDCdQwtbazbL9L6U9bmt9mbtnV4LDbPMMuyrTFVUgW48k",
  "key7": "4JyESHYADEQK3MpUJFEcw7DfXi5a6EUsmqUu7u76bba6ems7Zhbki2BqokZdR6EH7nTqRsogiAF4BstU5G1VUaqo",
  "key8": "XSLJqVZQZ8awRQY6XDjMkAxymgd6eKzsHaJhLmy1TaHoJGmFmoGfFiJT5RpPU8HFVnRMbAx2wkdbi5hkPY9y7gj",
  "key9": "cPyF7w56JmDTzUKYm63y5RXnq4DYHBfuEmAKw2qwwNad9b45GASqxwjM8SLtELrajsgJYiDAN8fSNNKbVSYnJwp",
  "key10": "nTtktjjVNsubZujPS4kmVc2Lx5XZzfZyARcsWRhzp8VgV86fCWjkXkieWRdHcseLyrTVy4qwmg4HHHLxoTjXMFU",
  "key11": "4aEguzfEMvNbaJGzTm7KQeFRBrURQeiERHF89xM85Tpq427MpWNRsuo29KVkt8z5Pj41Q2pFFHYgyEnoYbGbAsvM",
  "key12": "2QediFdFLDYe6xcr28E6kE7zSBBy13bDhKqBEVeSrxiEVB2pMNcHJESzx3ziFtEU4LkR7hCUSfdx6h1Nxjg2DLgR",
  "key13": "3y4LBxipLAZx5Xp6LS9mzrq54Rkh8HBiGtmvYDijYjP56nA1m6oHjCWDcMk9icfBKETogZwR8zYGUEBNBAdMi6XS",
  "key14": "ko1z4V76BztZDVsJnxwPAZp8Ux3PMJwkSpULLBXEStZSHbJmoF2HGJ4sWFvTyrgFPdqhBsGq8FT6cjWkmzJYoiY",
  "key15": "4CmevkFX4e3ipMW9fxnWxXFqAAVw18YNPRaj4WcwoSjQTz7xGd4dCEmzRMXUp79U518ykoAQDmqTegNfe2E7MG2N",
  "key16": "4su9SS32FKBca8Dsfyn7B8Ca7xHDavD13tgRCGL48pcvBNaawE6uzQvw6BnvefGtC5v4a8sEeSK6VwJ7oU6QF7NF",
  "key17": "4Us4bMasq971zuPHwZLybcN1pLFH2bwcbktcnk53JDkmZ8thyk6sKNJTn4NBrbBc4ECEXwaB4zbwyXHfVaL1Jfnt",
  "key18": "5tjJC46eawTTdYUbSHB4nRdiA5aanKq4v6JbCYQ5WZLiVpL22noruxDrTBhBgmJD3hXr3wck54ZUfiV1jebwQqCH",
  "key19": "4MRA2opAS9otfZ3wMQG9HYj6BXBzb38z5MXHH6yGTBkzvLRjLBA3tn6ffb9AybdaexG938xQPYv4sBCU3vdju3A1",
  "key20": "21NVvT6YttjU1gYE1rw7tpoSGbyJWf6fddhcS6PSCdgTU3zB9RShP9os9ZZ3LapDVEtjYRN1TyheiHwpy3JRc5Pt",
  "key21": "2qGi6ouwEAfynpFbYY3fWWVhx8fSVtDBtNNqyKS5fiNL8FLcKbNc6QK9ysNehZVn3KAbXh2hXXsNuC5x1mgjMdM8",
  "key22": "5dVKfPyZWzVrR6oHgdakXWh4jcdjGHF7HvaUm5anGFdgW1TirHMAGkLp35kdLcTqpboHpw9pNE3p12TNqTFG4mvb",
  "key23": "4dVWs9JWQS8ZuqG35NVkbhJrhy2tpgmwjBBTQZUgh7c3gagxWMQoF3PkfbeRC2JCKe1ifpTMPj2c6pUww6ut3saM",
  "key24": "pL7UouZ47pTTVbeYMQKsEVg2UjFrR3cJy7TkFkEZxB72qzDjQt4XtrCbgQkJgEqsDfS2cWZzGjk4qGbcRKQcnFu",
  "key25": "2CXpYVB6bswZbon6CJ5weFbgLui4eNxsRoDZRTXJgKJV9qKigKRAq14phnPb4AcPt2LhgJynEC8ueFRkxTrP35Mj",
  "key26": "2drmjocjAyvh7DgUJq9YRn6hJFx9s4FG5hL9kykdDXjxvxT5u4JBiSjZhTzuhBej23zy1hUJo2TBbFQgjaW2vybU",
  "key27": "5LakkEJFFeDJ7bpzPiM1h1wW2UqbpBfKzZatC83unx6CP9vacv2ZC5MXkbv82cBLJGrpAyma4ujuxFcGprpwo77p",
  "key28": "5EnASiehZUCX8MX8HdXJmLJTxSQknsoezv79d7pvXS6UpUAcvZ32QbF9gzNo9nLYKoM6RGdahQGA3zBmQGH19HYR",
  "key29": "5jtxAbhGNazCy9uTToFJGaQm4FCuqNh2uVghu9uKrxnNDu3kXPW82jH8QtyYkZyDq4G26YaUTXVJKeVgVftYR43L",
  "key30": "5V5sUHRSk3ccqgPy37479nq8oXbmVb2LzEsrW4RWwrE6gaihvNcuwtjWeGwa1xp1jj7izfBs7Th4L5KLYF8CFwBY",
  "key31": "1QQmMLbbBEtENZXpk4TL2row91vzvmBMtuzJvRdF4vnmhDRE3GtH2y3wFrF4keb6HMgipU35ooQxTTL3RYATNNq",
  "key32": "29cN3QoBXsoWCn5ULUewsRGBTMN8Eofmcm8E6nj2Sxj4raYskPeG3m6b4TngLiKYSQhtrHbxJihdJf33Piemx4eL",
  "key33": "4wJCEVFrP3dUuBKey8xY6M7dNzEH8TuuPA1VnVQqZw1HTabTmNnna6NrYz1m4rCcvK6mhaTDKpyqfnhXHsBqqQP4",
  "key34": "5o23ug9PLTNvVs95zbaa2Uh2tXcnBAjUHZTYUNZJWdLU8cHZXC2Ss9vgsqAANvVd3wr7KLeLhQR2BpSjrNhgbwid",
  "key35": "3L6sYzjLCkh3vaeEkqNKJhrfrKMQRxukjEKPPf7rf2mKvXAKhEwZJDxeL3DPDjLNdKmSrmwG6kEPR7DSPwnsUs6C",
  "key36": "K612nXpcRG7FwXwhoBHxaem3VR5ZMzYyPRpuRCRoZnRJJ2T5utiRkT3eCXPowPgZH77GMcD4oVTRdpRGqLPr9or",
  "key37": "94Rxsy3c4RXgH2Cukv9P3TyX1FzPgFfMBiz7bmCkQtgD9s27mdCEiLa1c3Ato89n33XugS4XFoodWN3Fs2z2mB8",
  "key38": "3DMDsFfYhLHqgrni82A98SkEnWeLBrsLZKA9yHR4EUE3ACR8zXbScngWB2fqKV9snNLwQo42BHnQV1CzEx9J5Woq",
  "key39": "4EM3PUGcdaYmvdm7iiskDnWhDNGwozjcz8Kwhj36V2UpuqkUU5mt1PUgGuKvor1gMJBRwe7Lbm6cNyYfmxVZgs9o",
  "key40": "3dfLLjgroCWUYyTfnvXzMdfm1DurH32xvufcYeo668eS1ghJ8wujgYjGe2R5iErLEediuXqrDcvgHJfGyJBj6eGc",
  "key41": "rWFW1Ze6SQ9D8FVgpv47LDRhbgtaExftLDkKvEyGnTGKrkNpH6wuvs6gajh32taeYYCDrJEMTw1RCr7yR8HHw7v",
  "key42": "5qhkkLvCfzjqehLnnJKr2yqAJeKZhjuL5qTAQESSAbjj6ScJHXmdcCKzUqd4BMba8GE1DEFkuW3TJdCe1H2hGR88"
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

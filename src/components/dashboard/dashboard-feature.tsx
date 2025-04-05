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
    "2kpg6mXNjiojXfQQBpL1G9UMTRrzEbETZU1Qn1kfBwoPGqJtPnuEeDGKjnCZVYGa6J5XBJgd1AgAkyzCYtME1um3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WD494WCjUjcM2dx9p7LFJRMJ49ssMJRaxoedd9gtA9b9arucsSjpAGVWZbHnrSeJz1oArbKbxXBWMZVLknX7PHy",
  "key1": "5SAVXDiH2k89jKoY2DWKpzuBp3a6pqZjp17NpjbMsN8Lc1QysT6kT4nBszj9cBH1wkKKfCg1ejZ1HCTqXMopYrie",
  "key2": "2zE59PM4fHCm73dUAaBMtCKCrgLs8UVV36pH5fba6xNo6VkE5bTajoHDokUR88hjhmsxfu2ZNPJX3VGAvwiY3wDM",
  "key3": "4Ju7htnstUpAL4iBUCDHBx7hqcn71tWgzdx7rmj3r4359WvkhP8sjrfwJijFS5dEudfnN8grPpE4ZzAPx3EQKQKU",
  "key4": "3CLVxa8YyqbvHXo1KpV2uASw3yR3CqKpsh68QyVqhnPMLuowHLqgJFPzU7EszDoZrDoXUBCUhrAihw6PmTu9xKes",
  "key5": "4qVQUAshzPzejxEsigSeyZTR27cmZXBu35QCPdCWKpJYQFdVwGxTXaxF7WqP1MhjN6FFMzMeWLY7Eg5SfuiWY2YD",
  "key6": "54EJj9LSUmdF6U7qGjs77KfgvesPJMxkrGpGebL29pAhCDLvXDsjBZa9NoGNtrhDS6tGCo2ExamhFQmtdfXSoiaB",
  "key7": "3pndF53cuPpB4kXcmKwFSpkaD2JtNmsdEGipKxafo7Gs2a3xzHz28f6KcjhL8d4dJKmUwmEK1omVYpbUrq9EV4mH",
  "key8": "39L7e6z8jJx47A7mfGp3XaQnGKc5U3n4UVpsa8LJRyGUpeANFoDDSZiZ1nhaomHvuqKda97duA1LLujnc7m3rK6m",
  "key9": "2ca2vGTtzva2AAcXyhVw65Q4FAvCvJqZYLwxUSNGufNXepoDKh9DxrWi7V9P9BsnU84gSkb59utTQadjHE9AzLMq",
  "key10": "2sF5qXXeG5hQqoi9M7S3h4feuQQw252pzax1GjD5oHhtdH54LS2GsRKxr8crdF7tNLJ6WvwvvTNA6rVF7SVcvmEy",
  "key11": "3b1pihdLbwwHLjviTqA8hxt51aDWc1eYAy4AN1LHMZqpCbqp7sQo4EnfvdLbiEjXLnbL3UBKaybxoyfKMUE8cRan",
  "key12": "5s1kG6CQVUGvzHDnFsBdAx6dkT9DHG6kx5PSqtp5P7t8AtAwKebhowqe5uFmJhc3ADeqmtoWt9Z7Yf4Qh4LZSwKG",
  "key13": "5YeEgSiCMcPmdpnHGLdzMZUjmRZWFL17LcgNqbDNoNxxZrarki8iPs9amFy8FJXBYKDxwE1N4yNQ9DBsiPxDQpV6",
  "key14": "Sg6NCNM9JrmMfkW91s8YgAp8poc1PxfmG27FZuG5wwcjF6GPFcpXMSrHnRoFEkLTGsr4vKHMXUvLDWCVbvt2XgN",
  "key15": "2Pe5xQy6WtNdwiHWpT7Ggj5ic3oQQt12kxZtWKXWxdMzq7tiBwvYonBP5zYVMoTLz3sTirzdfroTAjYZTvZptZ51",
  "key16": "3uNDqogmXRMyDXxWMiTdmhdkhuahbkrP9359jpbmSbkd6sWWXgZNBms9JHAMc3Lzv96AzdqEFFHgm7Zrqaa3ZZaK",
  "key17": "3md9qPrZ9MZdCD7SHJyN1H3hGTLFv8RtPWUKEwwC82UwXB2WksSTiEpkcAEZdE5AFFvDGvJJvx8thUv9rnfnayHt",
  "key18": "2k9yVj7tUsVunZEKJwKF3CVokpAS9J83R1VB5GjCgEfMiXCUgG4ajhdu1jReuyKetJ4EDafW4MeDL5M5oPvkFSAE",
  "key19": "3n5zSXzJRwiMJV4GDpAuwAPQvDq97obpZNzBEzmwcEbSqDSGt4cTtQR4mvMr9A7FNkgswAuwbAWqNocuaPxkpJVq",
  "key20": "2sVV3Keb9xpQxkCJ8XvDbBuma5TetFGvxmpjjGQ7imggMoFaUn84HfBB29wV6JrWVdLiSkQCJRkCAx51RyDvqFy7",
  "key21": "2aJZvttzPRQ7sybMpsZUuLnmHRwjdQPa3rS7YqQ1e9tmhVeKjsYwSMU6NcjHseXEvMXc7FAfstPWctsYoLd3oJ9T",
  "key22": "3LKdYqS5YBbVr6bCfgmgvZVpBZNw5xrSb6M5QokFUoMEbBZYfZn6ea3UtgQV8NFtsQ97EQuUkBoYfiVqXLV9yrvM",
  "key23": "4RhdPss17F4wkp6ZZJpSqPnRYoLpTenpPsEgrg38HRnkTqHYviwfef8ZFJg2LBsdJ4Pf9EybseWopp16Q3N5MfxZ",
  "key24": "ynEXqs9A7JL2Eiy6yDygPK6xsZrax2FWtC2fpC2Qje4xKkDyDKySFdhzYNED5Qn7Jf47Doi2783DAyZr1vp4a24",
  "key25": "7mJfvCvWbrMmWXqZTFnFynkBsNcuSGPvweiRhpE4KepAdsiDKiKDnTKFn3PsbkKVvRaUG74HhN164PHctq7D9NX",
  "key26": "5C3eou93g7VpKhRdeHCsq5mnv9JoWLjPHej9MymD8Mzzy9xjKdimNYcfvgD1sZY4B2aBp68Lxp9r94xmX4iiZE7Y",
  "key27": "2m56m3hA2RmuDvqcM5vtRoX9ggimWHAqhMMSJhBqnzis1fpqQQ8Bb5efg2nhMeb9hEusbwNTgXNqt1pmGeAqTA44",
  "key28": "Y3Q4An8TFWjYefV9iXCqzg4Mx7pKqefnf2sibZwauBfzt9kjKjkDf5m66JJ9cWMwSdkbjcjc5c431cYfsvXyMd7",
  "key29": "5RQSGqtsT6FaWq7PY9y2pvuX3Cqggk3KX35Nrix7iePq22Bz3Dgie9GKYzARB3spfziaeQoTep9tzEBHvztG5N3T",
  "key30": "4YvxH7Cegck2t7Z2vktceqBtpHRZf6YAEat8WArxauEyNefRfWwRXVwuiPqgomQQKeKbc159sSoHABCZ5gph6ZJn",
  "key31": "3ZkABQ8ScV3RLamBdrs3W9je8rkh2LsQgYQA5CkPxmwTqUtFxTmTE6TGfayiSaqGhZhhCa98ennAMQf7oB912ZeJ",
  "key32": "4L4LhqoEMQCqtwRVa7kgpeS7ihxga8in1EE8BajBYAkpSZXVjZcuUPgc1e9SvrBmWZU5jzBPjPRaFcoYqu6ZWvaz",
  "key33": "2jba8nxHEQJo4wF8HJhd5vTyCMz4iVvgNJhP3tpFLUiwN3WexDUgqt5WicT635RCzps17uH8Gx9bvG7xMPXsvYXT",
  "key34": "3zpo4FU37uYBu4rqsPaUxB8wpz5K8DmCW9DBmj2HB9wcdELco6rsAGZtc649RJxxtpdd1DmmJ7Qf4wsoieUzJQQe",
  "key35": "yxi1Bkv7iiGdaqGxifv3JZcw1XoC8pUuFTxxnxi7qBG9j8SGrwi4D3ykiU7vpz6WTWVimahiU5ifQEd5ExvB92w",
  "key36": "3j2F49M5hCSY7xQaoeXiM3QLSt5u9x5vhbUrs1d9fmFXWK6aV9jUZoNx2BuR9xCiwA9zoaLxTyKwBm7WrP7hRCZ1",
  "key37": "4RanwLCJXnM5gGVXu647pxoSXYJ2ZcL5XLfQbtNHodG5KPgLTcE3Hwk139duL3Y52rqjq65NzcEN1ZihcYkqG6oq",
  "key38": "2BzhhrTHLbxnT8GjEv7VwSwaj4UR5zDTAf1XCLDMBfDmmbkfoC8jnvRQFz3xPLU1FJxGydx9D5bpF77c1GAo2WCt",
  "key39": "3GX3ZS8eJB9jUeobdvV5U329cphpYx9q97FCRXAS4yf2jTabEtYbSxXyQ6SAPsL8R6NGba843BfntVprCr1L5hLY",
  "key40": "3EtQJptNXvQqwj234DJZiAzky1bCpqk69EyabZKRA16j6BJQQjR9xR76MgQCWmFZfmHE8Z8F5WtyXmnCUXB2DGPW",
  "key41": "HBu12Lq9erd14eysSojCBjg7mqjRhtuRvaQ7XFk2kxFycT7NQSFfmzNjDr2znMygLCc4QWNAqH11JdDP2sqojiR",
  "key42": "5buG51Se6WwXuw5QJbbyGcRyz72y4w57u3XmKSNhLJ8gb4EFx1d2a2Y4K1L5pkCHpN9MPcdM2WB56FfXxSfcvPTJ",
  "key43": "4htFS2Nt2Tc2TMrC5H4Z2m2DtSXwnpAAf5MBxBqeExXZ2NqiSzUC8xkoq53mTxfwVNrhgsGwnPy5MFCh2qYY1AwD",
  "key44": "4tG7SemtqDfBGv84nmSUQ8UkKSPjeLJFXy9hMvtJAtSgTZg6PWq6udd9j2r7Y5zi8Fy3SZFESnobaYMwmREJB32H",
  "key45": "4xCzniDsuKzmqMFVgSPfmT6eYTRKFBE9p2RDuSTQK6iSsZodEhX8kg4oa1qZUD3LYseV4j1bKU2qgbL5TZTHYKED",
  "key46": "33cwPpLjq26EURbqKXaUUXNBCPNxAAdcRfGHyV1yKVRP6WKNEnHDgCe6YQPbscY6ZrpxaF7NgbfcCg9DpWbHt1p9",
  "key47": "g6gfWhxRpqx6FrVWS9yK4tjhKjqxbuwsriMYnZ93gKpVEuqgPKZ5feoyYvPJ3GtvyaCBRMfPgm5LR1Asf27AqJb",
  "key48": "3CnbUDgrYYHP3LRczG2JciG4KtdVBTerg3nUdfhyjehgCKudHfsNX4SJU1mEJrVe41LNhFrV16MCHdjx2LVxmGm"
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

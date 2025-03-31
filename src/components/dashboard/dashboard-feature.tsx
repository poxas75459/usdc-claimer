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
    "5RT52tFMgSWCydssorKcBGTs5KGqZfJ3pKQyPJ7Hp8ooLQoCTZokKSHa2FGNPyvEHHdYZYXWEDg8sz61DHkBqUTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BntfD5xELCL9E2CUiN6uEhpxr7cKVgXnf8C25LqGp8LJG1EgLej77yNpjfoc5ytVufAyoeQvTQaDVBcnsbHKqyo",
  "key1": "2R6FofuVogJU6dPiQhyUYVCw4ag8WwGAdQLACD4CPRZVZta2FFfAQ8Zvw4cXr1142wfh4GZ19VcdPF53x9bUw5YN",
  "key2": "4AvTFN9UVVQs7zkXGuGTshrrbnSh1dDt8diQxH8kHusV91hjmbfYyppBugmUyARDQRJij4UiENGAov2d6DWTiBXr",
  "key3": "4YpBVepy2LPgVuJ49WnyQom4zmKNPQMY54NaLw8vvQmiBdTw57JDxYe7oStPgRYnVq72JXE8EXiWfR2dEpoUE6Hh",
  "key4": "2MaG2DHzUZUKXJ71G3o6TCxaysEzfjf114ALRfeni7iFvTE3Xb6JFHP8xr6ELsmQJiBjftEQXTWqB9GiU1S2T2gK",
  "key5": "CqW631tJEGYEn4MXtVC9VXREfWBQXXoHra7aaJRTZMZKTud2moLnFRHhyGqwumJMugZimuZoFAEkqThMVuUr3Qc",
  "key6": "31W9Zvhhaq1ZVbbCP2D74nrvBteE359gY9wC2MzNy9tb6Ax8cE9tJpUff7QTMXNT1qwbNng5TqF1CLCk4TYRvChY",
  "key7": "xdWsNERbCUEhbqkLB5cA3D253d9V3eXBnJ88ZrmQbZC5hG1oPpbfwHYGVfr6F38Awnou7VzHN6cqtpcArMDjU36",
  "key8": "58qJAka3AVhnQQmNTZrVhHreqQ2iuTF21v45eWRDPve3PjHt4pXquv9w6YdS8eBNcdoHhMBzGcrK7cSpVyk8vRt2",
  "key9": "64njmRTHPLPVpHkeRKbZ3nao5wpmVMtFhiMTP8Ca6sLZWjAYHo4Ao2WGx93Ei3jKaFebDztPKL15ZHheJvUgSvJy",
  "key10": "4VNBj4i9tWz7L6HzKuob5MsnM7Nr52N92VuvFZxsVFKxcsj5Ck35DmUSBMRQXWPWpW8P3L4daLrK6n8urB1d2vsW",
  "key11": "38crNYnBVQDM97P1UncMyYs7uQUNFbcVuyB5ttnrugR7J7b7TdZoVD7kRVevyu6tHe7kdZkfDP83G1t4v7xc9ZJY",
  "key12": "4xdaoqcURkoYDUZJGDXQCE3KyMptfWcurNZ3k3ZmXcrDEsd3HSG1yEKdeiJNQAPfbJh17ZTQQqJH4n91B5WLviYD",
  "key13": "5nGnTAn5waFmCrZ8WaVzZVCcrSCxGh7rHGtpHZBiRy1gE9Z9rGL1NFdX3E6PFwPtANEUGviLrG31iYeoC2s8cmzz",
  "key14": "2U1qbbmrX9bJXcd8G9T62jxfbiaMRiNbMZbjoZgE7VFTua4HmbZoJAbYsxRLt7jnv48wKE6H4GXUFeptLhrqrQqt",
  "key15": "5Hjo7nCz2pZ5qSryXWYtuGfdSn8xHzf5iLSRwwYJpwHB3vQP75kFLzf789BL5JLQGJyTgn3ArmMoV2paBr1SzxQN",
  "key16": "67AaSmUTydbvmHhtAh9meTx9L7Cd9LaiuRXqckwunjFeTNcAfXjssRYd4KJNJaFMPbSjqpWjJTnMuGbWE7Zdp1MD",
  "key17": "53ej69wsR26Tj3PiKBbYoVy9WEQrGPUA5L4zB4FUrPbofXNRBJ9pzmgwhcuiDyoeN8FuWej2VG6nzdnpaUerYt5y",
  "key18": "5JuH3cPo74G8VimMWXU2cyQSAPaaD3fqEM9JGa8MdJUmF5xf2ZUm1zFQ4a4Rvzt2wUfxTPhvxFQNSkD6XipK8iXv",
  "key19": "gPMRvrKpWEgWJs3VGKZ8YTxb3A44Wbb7Tj4cHeeRyLAExSjpyUr6GjKN5fktso8HdZYMfAXBagWmKaJEZN4Xa5A",
  "key20": "4Cpih4TQzY1j8mAgncYtDSJHyG3cxUAAzdU1iysKXq2Dg4hkTByd4GVayxuBVvbTpmFACYuJgyjDb4ExRDqrbrKS",
  "key21": "3jCBLtNbDnje3Wh1XAU69duXLd99JseviftH3UTJvf23cj76UKUbre8QDisojBkp1npyhXandixb43HECyR8aAUA",
  "key22": "2FrdKjN24LvYdaf77aQ3Vfjhz6vxtoC96JYgJvjBVW9XT8yQAtzXNiNESLBFyse93ytFmQ7nBUk5ZULwRNaDT9TL",
  "key23": "4jxAyWuqCBDWRKm5D7UjsTmrBAmk6bTGvZY5uNL7fKMVf49TZgv1gECq1jTBNC9UQJxj6SJS7RXsv9JRVDkmsyYr",
  "key24": "3awHQRgoLcdHSea3JAdcuXGtC4oqS3gNPxoeDykxQcxUruAVNJcPXwdDYbCW4FGC99N2A3dYccrWKLhhCDehJPQs",
  "key25": "3cRmfdd1eB6SJpwGFBcZ9FyFM8bWi6jhAFPmj3iRheZu4YaYRxWeLxKxKxZ75bgD9vXFr3NNtHtLKxeZFo1GvWih",
  "key26": "5c7CHR1BR7aFR4vUH4BW3ztndZF7T4V4RkCcKYKpdhDk3MTzk38rQE6fvoETJFHVUyRjDZLZxoQkQjzBuRFWbkqr",
  "key27": "25XGo3zs2juvTWsNMwT9pFSkGYasG1rSWFWPP1SZt1bdetTCXynKV9kLPHx2o6EfPHLDA55NhQiC9DwQGTwoUfpd",
  "key28": "4zkZv29y8hFHKYtUaG1WYNA2bEYebM2CQdyuWfaBjGQL6L7j8toKxwv3ee4bdsz8ZL24NLtoi27PUfwsQNh8VjPL",
  "key29": "5Ng69sNiAk2Gz6qWf7RgJKNWfbm5V2zWaTpLDz7vH3oUGbTstbxP5JKGD67zCGJRBZj17xLXJQ1992H1aVJTUopR",
  "key30": "njXF2zMeBNXGW9ZFjyArZLzbsuEGjq3cBkE16EdbsY6pHds7ftEEHRAD4WiAWzH7k7TxSDq3qni2p4epyeUwCg4",
  "key31": "4RdZr1h1qC8HpJ55d8h87U1j2yJJfKDDXdwYWs5TDe46jTdbuYqXdm7vNwTk9xskTCtZdksc4CaYGxS6dkQKN6nB",
  "key32": "3hyi13rViJhRcHr52eYxThG4vHxt4TKNr7msmCNaA7PzVo4FpQFbbgm4f2NcEFeAbacoidN2PCL6MyZAMRDFLMq7",
  "key33": "4hhZjjUT7NmMi3trv9kQFYqYSfv6hUsFHeCPKNT5N4X4QqakBiWY8ZebZUGUoQvo3mwgVmu7LeMnzpJMWnnEs5jz",
  "key34": "5oXH7DRUCMYsXiX9JmPzNLzSZpjVaRBAufZTXCaZvW7YVoJaeTCYSQhouf7EXSkPHsMeu8D93bE2ZDKQJpjHvB6Y",
  "key35": "3ZDPH7Bm5kxS5f7fc1GMgqFxxrjyRuxiqRxuZeprJhpnsGLtQmf4HBM9UvxZycUdjTgTzRESUYwJaZcurNM4JyDm",
  "key36": "3XfjHojPZvB8S6WVKyNURdkfQRxsdx37CBoDhnpJXgdffcgrA7NMxXkxsXbampdKGSh2pvRzw6EbBJRB1EhCh8ps",
  "key37": "YSbaGV9KvN7g3FxKnty7586ZNyLjKyR57mw7chLiHxzrLovQy7YeF442dwSttCqZv3Htj7EZMkyREpfKu5TPtLD",
  "key38": "3454b6UG8PDWxrcxJroDaAed3hcGH3FE8J5CYbZJNU7wgHwGoiKTLeXS4BsBef6k58YG6ydMRcYtwPWB55amCcPf",
  "key39": "2KSod1MiRvqaouZ34kfgQTVdbAtMungRgA8yZVZQBan6ZwVgD4R2rKh3yG3Fz52bEXoawZHQ3BVWtMRPZoTeikAp",
  "key40": "34TmCtaufEYB8PBR1GMT8hpjPBwfovewVZeFUu7dy7N7ft6b449QJsYD9kkiA7EWZfNng3aTbNjzfuJGEyiHZoJB"
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

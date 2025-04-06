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
    "4ZEQCVVEvRjnXPsWeo1eF99kfcJLtg4okF5vby5oxJDeYmAjpzWWWSN9847s63fFJN7N8oVFTQmNV9rfMCVekFJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2drvAkh4x7dTdJMUo2LAqi2BTMMYjRVVLFvceY8BXUuBZt5jjYuSknMBp9oLhxzZKVaD7yJQXiRjN6QH942fXCct",
  "key1": "39M3fUL5HNgdFFja4yuz7HtPx64hdTrTFp9TVHJFABxX8U4eo2V9k4DeJqgD5sFdNemKsiMrfNbepekKtGv7Wzei",
  "key2": "4E1nJz3qRuaw21S6Y1Z3gp39yWmM6abfyEkTZLVSxkCLvcQ31PaQ8YHo6LEHjFCaUa3SiqjiaHMPZw1iouZgSvFR",
  "key3": "3PV2jjeUWHueycZ7ed1nBYaYtkuETjZBfxVx68F61y5YZtNJL8hwK1rEzKstKYQnk2fFkg48h1LJ4PF6BSCCrv5U",
  "key4": "5dqL483zpqsYpXGYonGntnqgXz6oSUhWhP7GSgjfda3u3i6m1BoZP2bkWaVgDy51uL8gtpJWq32jH1dwQuYHbmUr",
  "key5": "25MwryATwcQLHuMyyWkHw5Y4mnARHVtYJGjCJt8xeb1nSS5EcnP5bqTxNzCgQvpbMwnp7MTZGrtghAX4XijEKcCd",
  "key6": "4g4uhpot2j8WMHaQHu9BmcAeqkYa2fVrX3kirpxhrmN5CmmLG9kEG4LzjTqvpAVFaT9HYu7c4EBiYUCWp6oBeHPZ",
  "key7": "33xpeo3DAZiYZhRCE7Jt2KtwP81BQicf1wom3PXyjtpRPHjcVSM1QFXEwYM5j3cdMbXAa3oqrUarfMkEDFz4BC1u",
  "key8": "2o2hthk7T9xBdQEG5oYkuRL6FsMR1YahRmDRPEQd9rUWmF7ZQymAVabBtAUQxQg8LbBgHiMP4Soj9b1z4AMnW4Jh",
  "key9": "3VHQorswRZbdyC3Dck95xbAok4C58dyiAgL9woV5KJ6E6jrobgjtDjgj67iuVXRNft9dGaPH1LMX3stZMrnSbWE9",
  "key10": "5qKbanwibi5psq4GaKupeySTRH1APvxuaebHTrUt8sKD4yv5jqiYgh2rsJnwasyAKGa32MxSPdStAhv5SGiQus2v",
  "key11": "2jQQXY4BR2G5KJV2SStFeechDestNSBNTWftJPeC88VRfSCB7GaeH6ogmSnB4wgL34Nrv8S2vE7GwixhQcrs6Nay",
  "key12": "4ixu9Df4C9KdnKCV2FyBCHAVxi7NN3fnnTdH9Z3TFa4ehKdDD7xLAFNYNUeyV3fgo6JUrPt8mok5KhGhGkyw2Cz8",
  "key13": "5aXuxi7FXu85q5KyV5CnjwSK58pLHtgdqHQP2cgXCqeruxvfgbqj95M3w1tKG7mgfQvtWWHUQwmdkCC7LtCQKBB3",
  "key14": "4GrpQg8gtFrZxEXafRj5yFYz1RjbJNPUqwK9JcbTyomDTQSKkAsLxYe396PEwoXEVArQNG21AMBew1DjtgA1DcR2",
  "key15": "5YWM5Eky1fgTLEuxtfYt9vVRgPfDV9GMaak1ir9nQPuJii9PrRza7qjGh6BnX6mi4Qqb97FXWSRvTgpzkhxyTtyq",
  "key16": "513PgcPh1fUArqvhyjm96GuxQg9ZeX89CqyzTVL71FG5vg5iRH2pgxysSpoDq2NxGnqpDW6VE2QJgJE39A7D3FZ5",
  "key17": "2UYZZmiipw9K1uzBRCQGCKxjx121hG2MDyYs1ztqxokRhmz1DRXtf5XY4gLcPUj9Qtq8wpyK64HmfQgneDgSKRgj",
  "key18": "72rTP1iUXUXCe7PcgBmxMGh3Q5gkGq4tsaVvQmX26ZyEr3gqB4bZFeNQNWBjKyr1iHH2xVMYB72Cm9wDFdPB9UM",
  "key19": "3v2TFSi8GRGSHpc7ygo9gZgtnDWxznhJDDpLnrVXqw1LoS2vb4SScYGpVahygqiRWnK1vNuLuvrU3QGNhTtwZP56",
  "key20": "3rUfY17nEzBKJeH939orF89QWzyXgvJ2bMLmsLbeawQF9To58vtosmU6avinDLZSPvtZyMAcSw7AdvVbewipoqoy",
  "key21": "3zihTJxwSUedn82gB7BfDBwCoXjR6FWvFWftw9TUvXto1htW3roAEV5A9VKmPsTFeJwCk5DV5eWze3SPYcLokMiA",
  "key22": "28r7B3c6jCGsXLZUYHZmYiRpD7NEourJUk5FfGyyV8wsXrTKmtuV7aBVTnr6yhsXKnUKW6NxRRZKHF3ftu3qo3nY",
  "key23": "4zPN1WtpVUwsK4GTKao338RY8o63dwG5MqQQmKdjqfindnE5aEn6WAAwwMNXJEXuZHcWvDbM4CVGD33X1dSEXijQ",
  "key24": "4TgbCd2CWJPSuGWY6v2Z8fyhQhotYVT6orpdskK5RFmrcPuDBsk2qzPyZoL7yu9bMsLgyR5Cx9xNtJ4ecU3qb7CE",
  "key25": "4zuEzUCn54rkJ6JCoUxQMXwv25fQpeBQ5T4jcM2WgEkC3GHhj3XEV4cZWHxnWeGKmNvUVmjSpQamuVBHcRiKeSzX",
  "key26": "2D8f2Vq8JJmQ8Asz7YyKWKu7DtxkyTNmK5JpW848vw7oWgFEn3HiQX1VBH2NTM9a8fqX2GLrveM5uKhMGfY4Wwtt",
  "key27": "Si58irKyKi9rgt22HyP1GgfgrNL1HXNiJgWUaYpUu6LireXHFusgaeLYZTnD9FYUVFsuqQJpaLYBAQHDgMiBSYs",
  "key28": "5LWb8kraSndppUcHQkkBWTzknBWZeuab32ArV73va8hMBVBAfWjkBAV8hfkeYGTf1beRuxnrbrTss9mKmBQF5bje",
  "key29": "45pDLf124bb1aF9n9CaPauBKkKzN3eLpWRxoDohKZdtpoqtLB1m1RWoK2P5GG8Kw7RtB7KHbqeT3PivDqBu597eX",
  "key30": "5jHUkD3XcXkfQerMPDqFb6rS84cr2YNCnDAmEN89E8pEo3e8NVgKAntNgNmEQcVegDBSPBGEEiB6XS6ns35A2mdA",
  "key31": "2DguSqEQQEuoSd5GSciA31oMzkE8nKheAMzJca2zuv6mWXCsE8wBhHSKwetgXJm3FvNK81eH5h8DS8ogiJPEWH11",
  "key32": "4KzvcFR2jwGAg7XXj7zg6jduQyoVypK7Md18LeVneosDD7QoBvSkkcFJ3vMK6Y9nkMaaaKiob1mwYkshqUgytoez",
  "key33": "2rUvtAQTLgQQgrrLG85uqn6YEKUJ46pAhH5h6AH2K85Rt9w7oDgMuEccfpNi5hACinJc4TxoMJ8nzsCP5j8k38aJ",
  "key34": "5c6QJqDEeoGuCmQZXeP6RkEw771w77FKZ1V2jHpqnfrHgmrtJoRrFTRPkzAsMvsiKohMEgZW486BDDBTHxUUnJ8B",
  "key35": "3ssytYfKyx43mn2QZGQqgt55Qru5qknpW2zcjpKdcuRRVG9eBjsaVXmAwKaciBGm1yqfgkCcjDy22uY7NPwy18LB",
  "key36": "429pbeff1wt2Fj94FxL566mA8c9CXLJ6cTkdrqhokRvaWsRaMmqVXMovCmvXtQk7mRAiKSFiNpuPajvTWyRuD4pT",
  "key37": "o83Vm34GHFSga3H9gYLsYrtsmKmixvyE9JUEHty6wBWdvMPREzo95Yp42TazX8Y87KDLQmnn3kAEUtqYJuGbD7Y",
  "key38": "5Xhq1FjEYjaSh6Fj5VPuv6SBNMRE6XprDwF45QK24HrJ2M1NHC6EVGDE2awxG9iYvAR3NUtK9Fm1S5eYeexNygyo",
  "key39": "4h3Dha8kQNYJxSVTDMjvuFrzUsLDY6bcyvA51D16BvAYYFmJRCT1oU8MQnVCyGY4WYqapHP6n222k5gUyNzMouXW",
  "key40": "pJTDxA4UaCwr1tMzguKXKnLZYENgFgSEaGLnUhyKHm8Vybnn9RDH4jQriyrKsU7CzyiyCJbmVUaDufpGQz9CKRv",
  "key41": "2QkrRQGfvwP9QnZ9Ehm66oWXkNTv1Z4ZH3WQ23MZ3otLyEJVFUVVxWteQsMmjkL1oM6r7xU5TyUb9uXeExnfJ65z",
  "key42": "ZKoWw1YGXw1Nm7T2mkjob4LTvXJRX9gPEcaVyGxmYeeHhvCBSnNHJJzvFkVX29WvLwSDZ11ZipNLoKQwLBbyF1k"
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

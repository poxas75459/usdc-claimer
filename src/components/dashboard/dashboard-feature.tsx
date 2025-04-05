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
    "6FTwEwRWcjqhBtrydMeW2YsJiVvsaCV6iEfa5gWwuMLLWHwh2GMyCbkts9Ua44Sqaz4m6wqEv22e8kgzKkALWUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfmXmoF8hyAE7QxhahjXsSZKtwi6coZCFowoaGo7e7VayucHjRVKiYHHre39Uu5piFrT6YdLTvtQc8zzD6DpmaG",
  "key1": "4vSGuWCFHqWioi6Q81NXQoqDb4qMECXop79XYpfVDNoxMLJmFsRuyECR59VSrecvnf8NyogUbn1QKAPjSEtAAbHa",
  "key2": "5vPp5hjpsqqwMvbah4wzuKqVwXxXV5xtUmRJRd6JLHE5zZqX9TFk9ApKPK8kG85yi6dHYutmYUAXabwakiD8V5Rx",
  "key3": "2ivvJ72WQKamjDZzqEyaNmanN5Ve45XVbbPDdkhoKusgjw1n6ZDuqihjieDW9SHAy2Hp5cD8TTB82WxDepzwndn",
  "key4": "4mJqxWpiKeQaSnxcjQu3QW16oRjZYQGqqQRTQdxodZVPz2mMaiGuc7WqVmpemmrjamXr6SkGZvkgcg4NkrAjQ8CB",
  "key5": "4d2p9gmvpqjkkneWwKrRUewZcCuarDcrTFPnQes95zg6bggfurRuBGj6wjWAZ9TgMBEMEiW6BK5onrHRR4uVE4BS",
  "key6": "2kCaMACKKSwYuNG2nst6uDjzcC2ama7apASByH5tZZUUtuLjrpdh8pU8T7JJZN6KEVBdt4aE27wrr7XAkiF2vPH",
  "key7": "5ZHYsmYPvWtkFUdKJ4RA9dcBYCrTy4gdPyvjwFxYdNX8GH3dvHuWNUhebVwgAitSLAqdSNqckoWCRavXs7SzvDW1",
  "key8": "NHEiYVYWocxXKQtE9C5ivM2aMkZ624FMgsXYPrfvaKZTys2EPErd4yB8Bu7BsGF1c9UWhKRW1ww7fHAyG49PAbq",
  "key9": "xLHEKjBBUAmFHxe1sbw8PpAZ98UnWyw5Q7agPc7FT655ANEyBa9R4s13Bo6mgQWkC4TGHcQhKpP9VQzMUVWaJLw",
  "key10": "5RNqdgD4vfVVtskubMiC1rhnZEUko8Rr1faynAhY2wbnnEM3ruhgVfS8AeEfNvUJdvPE1mHKZvWpQBb7wR3PrPcL",
  "key11": "2NeUQxmERBXcQ2cGsJLR7kgL8yWGePz4NMYKuR9UkNMZbYkhYhJ7DR92d1Prp7rVNCU5RZ7sBH1FyaypR9VZGY8h",
  "key12": "3LEmpPXpngRA8FmZ18oX8pr4mkr7UQZeAbWZBR6hNinspFvc9fye9yVTuc8w2CaKBVP8TjDyi4D6d7zLgqki8NCV",
  "key13": "5TGQBRjTyUe3kdTyBjsXjdm5MwwZBbt7e5Bp9hQgjQNhrFv9JchYX68o6dQWPAgnbFJaEe9ioUsT5PjNK3nECwZ6",
  "key14": "33ZGchJ93YpPxGRLoUJMev97rReLH7ck9AHgyqrBh7HAytBtm5KcYqEa92xDYo8foGGPdva3K6bmer8uEA3MAjHW",
  "key15": "28ftpn8RWXiATM4BBPHVtT6zB8rkCNvjDgb4WdG6mJ3AJPfbZu67fP3h7RWjNcXhMTcTEvUBcubfebcGueeVpBpE",
  "key16": "3svRycPBfy71jKUASdvZKiS48Yr9ytyLJx82Z7HLzsmMaoJ6NEVTc2pBefQcwRfy9Z2AuGv79fNxnehRDq1posEk",
  "key17": "4TU7Y9riKm4q29ssX8v4bCeMvTG8N7Jf7bP12cN5pQhuafsoVqJFyDcarak4k8NQZHXn9rPwNvd5JprTjK5FdU4n",
  "key18": "62uGxUYWmf2MNAkD4LhyMoVo3Bg7P86zScPw2EFkWREtZbtYyLtKtrgUcA5T5pZ6HTNbwZdMQGcJiZiawXHnE3XJ",
  "key19": "3f8TFAFJB4ZWo1Q3ojctL4uHyKyKsC8mu2qvaNdXoELXsERhTQCmQKMuvFtUoZpWKPANwakyBiTe12HZXD9hVN3w",
  "key20": "4DFEuxQtu4xDTvTqF9tcvbsunrS74eJsaTzESHevU5nqq29DC89MZehPXLDKTdcNCYbkynBVKZM6tepty6vvy2St",
  "key21": "4CMpnA2ZUr3PCc6MMwAszDx4Pc6WrjA77FKu4VXQpJS8RAjm11dbgz2Pj1VaZBa8xMJPmn8iZFLBg8jxTHMTtxed",
  "key22": "3Ka8fhYSFbwSuSZsedg4reJ54DE1AUMZ8KG5E36VW7c63AUWewk8xJ2FNamEttq7LQWPsteygjHgLyX6zDzBSRQF",
  "key23": "4PUj8EcpCULrdWBg1JD4WsvdPUSNTgUzXJ4zsEPm7QrmKAphn4Qzz2pHCwhjjsw3yqQRwRi5ERgCJHTdJNBbFHWB",
  "key24": "L6VhXUtPw6YdNdv5egZvz3MUpsFeCStkSXnXcWequXi3g7MtwDhedRZpPHj3qSZqQMyCdukHHxqk4hYUAEuWdUh",
  "key25": "3qDWhuN1yBySwN9no3og7E3j1hsbRBJ1N6RE5muMhdgtmkSH38ByVcqoFCkE4ktMJRYmCNcTkqb2MicqgdqBkNPi",
  "key26": "4EBDecsnXmXfkYQ9Q6TtkqwjPSzbo2BARPE59EspxqqaRyfsLBHMTb6Vud1dvHt6Moz5crrs3397vptrfmqbz37H",
  "key27": "3rToVtWgitDhugSghqo2eEe3oQ6wNbDZetHGKau2BTzeJnmn2sknhPFZuKUg2MV6Anvp7kBQd7HZRvg7ys8WWW3G",
  "key28": "5CuNg7rCjfM8bCqbvRcSaVNfCL7dcUdj7yLgvPGq8WcRoJf5Jvn71WNJuGkhfm744R43d7hMhMVzqsHuifXgras4",
  "key29": "3QA4M4MEdpCaFcDRAXrQCRXu5tFXbzC8s7c32XdSQoRSvcr5de5MFsMfdTEFoj2WMxuiXtsLdmeoHNN1gAgraKCh",
  "key30": "5rqpyWf2mtDXc1Se5MkzhixxFqwwbUaECABh7MWR6wSyzuuMNuDapY6qBWSv3fpGRm1WiGjA1d5wt5wtLePBKD1R",
  "key31": "3b6M2ZsabaeFGTTCyjs8mwfgbhpKzvg2cFArsvdAdDpVYoGYetzXxU9UCHpYwa7UsbuDku7NtjGPT6eh2mhAKtBG",
  "key32": "j2rWGuNe7uUw9Gez7c7Pqmg95DzP6MsjCXrkjtSsjbVqmENSaYo36s2oK1w1gY68ELv1iALXXs6KuJAo1cbvFaz",
  "key33": "5CHZriNtZPoYPs9pjbFmkfPRZRJJeYUEyDtvYQfuYtCzA1PtnhbkDb72HqTYatADYhgPLXsaqhGxtYSJCQhFVVzA",
  "key34": "2mVCBSCJapKDYxMrogcBdaQpR2u1Dwx72N4ZvP72N12N96co2hLyPeHVVZPLmYvt2PqFBYw7Ew3DMeGbdEakn91T",
  "key35": "4K4t63sE2YZRc8RhqTa8XWRJUTGtrJxU1L8bNe3FtmXVdSqr5uUEEjioaMTiiwLb5PMUpucx6oQFEmMpZrZEA16o",
  "key36": "5hV1EJfYre9zTnvR4TFMGVhVaMvhtnec2hNDjmGZx6QVze1YupzWXXH3SwXPG2pC5TjeeUufozWsyzSPyc9BJwyM",
  "key37": "4EBVtBqaciVbuURZaVWmeZXrr1YxRx94UsoJrNd7hMtm1WsMkXVb4SZoyzcuMTDAxdE8zCZQP3JqrmmkCs8jv2Py",
  "key38": "2NHpSmXaBffnDaZGCJEjTXMaCZxtRrffaVNmocDbrzt1ZivTouDuU63r24Xvp596dwE9Nh5xQrsJGLkAZjqoE4tM",
  "key39": "2xFFuR53ymmyVcztEGXezbd3Lk3rg8WQKyFYxjwUYUTEFpsA1JQaphmTtnZfwb8kyt8ncT22kvAu2vGyhV3npjL2"
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

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
    "3itKGFXtAPjR57YBVw356DTAa7hqhLHupW3ZBQjdqsk49529V6wkXrm6zaF1ip8YAaG9herauFmQMH5C2etioAdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54doBJvRk1NF2YCNjyPp8so95rXsuMSDQsJvWaxuerU5sTgxQtvPSKMuJs3NWcTZ8Jvt9g4exUVS94tyArtytSmy",
  "key1": "5qjrZP6FtSxgWRbSv67JjAUYoVHGqSQVBUBG5A11h4ANkoRFnYkHxumaPkszU2rchLokDHiJv5uV2n9eQ3EhqLu7",
  "key2": "2J2LEWnEcQ7LibEHQfMAp5N2dMqQ1CX7j3Ric6gGtKevWQCe4G6EtaJHNAr1SbbAJcBgYdLHaehwksChAKfTKFc9",
  "key3": "2GgHN572VyMk4pwJX9ddU9ZWh1BHjPZcFLL4BohF58jB8mpKtHxF3qPxKk87SpDS76a7ZXaxaZix27Ro2bE5CVhh",
  "key4": "tnyqfPE4G3iGV2Nkk3KixFdn4TWaZ2a9PJGitcCqESPL2xNXigjjinH5Jsh1uW2Ar2h4BTxEQz3DL2LMMcpRXUn",
  "key5": "4fZkp8NusRdUsJS3YwBYUKaLHDvMnZtjcjtokwLkFe2uZhxAYNMmNwtVnmAbx1SpD6YWSdsSa4VkX93yztePEimB",
  "key6": "5dm2pTRSSHT6GVnyXn7owJw4kPkU83pWGBpnp1yGd34Tt1MiQkWVHgcchtnqPjy2EDVzTAHCsZX4EVSR6cUhSH2c",
  "key7": "31xFpq3X2j7kSTsBPZDxhdwn7ng1ntKzzcYu63G3WLixAMTHgkPXR1AcBe6DDtq6DYoSypkxch8kTvRhVi86jgh1",
  "key8": "54tSxTX7uWdDYfpsKx5paGCVNuSHQzMBdGSQUxtMosMdod4pePYnVz5uVJFaPwadUQngXR3r5GJUzP6gx6f6WdfM",
  "key9": "3ownRcEKRQDXXWTiWFUjPsPPTSug6tyxifnRBP5L8xFnaNLKCwecFUuBnZVQABeodh6ftgre8B3tW2h2TTde1tsQ",
  "key10": "2sC5HitY8EMoFJqxgthfuyTihAhY1huui7kAHX9pDCg8e1SUDYtW6QwTwZPjVzQP4gna6EG9W4epiQhAMTD3T6x2",
  "key11": "4P1qf2L6xJYJaXjmDpJb3Vr4UZHdSsi8RCcyTPfdhXtaJHjELHRoGSNXh136iGroM1bW4TPfwJmqjtCJSxaD5hgt",
  "key12": "3QFtGHM2ibgEXcMT7hUd75J1UNs2Nrysz34LE3rmnFk6amoG4PsxrRwthszH4hrzPG6wa8CcGX7K9CfNJxo818Tf",
  "key13": "23daKfTDuWijF4woSBkQh3SVYWaXVayE6Gqp3qR8bBhdapUbwcAgh57KMu5bDgAHWcnwSy3kVp8YBPERjNurFsc4",
  "key14": "52Rvrykx2dRr6KfgmRarHCEQvHqvomNHrkmk9igfYuAoHA59uUhkYxrdpFiTuww8ioh1jnbUJguZM5h37GxpRZBk",
  "key15": "2PZQsJ8gDQeJekjt3w2fsqm5bZHdpuUg6mwCM83KqTDK3upBwP9EuvEnb8d8FUMaJaPA8emVXGu6UEuhCimtrQZL",
  "key16": "4jWnQ3nPBmLXW2gSjfFcPux6HFxP7URn3z5q6cUP2HKDJYRWUA1MSfWmYpWiUPyxU4EXvv1FbHrVZYPG9SERT8bL",
  "key17": "3hxqtaZfiznrGaApUs3WWsqCEBySVadd2UskThvYV2K7g3NrSopph7Yha9ahPkyTANdztYefqh1xzyKiqeZLwYc3",
  "key18": "4BbB8gtMU5gxtCZjUenoevQXdprfGyeQ47vHhxJDFqZA8bCBVJkCaBUm65vRvMnsJJA5zzBLg2dF5arqAQMvKFtj",
  "key19": "3oekZSx3Qwg7EuVDypArBZz9eUFoqXQ5rYf1T6amYzf8y7GHveC3uPgGnuRzCX1MCTpDL8VqzVPWoUqi8y3iSTzq",
  "key20": "oCUPpHxWto77qQbowChFgVF2dYi5UPKZGXZeqZzvGMk8xuYAdv1hJnVEsrtfBfJjFtwhTXaP4H82MPb3NLBfvDy",
  "key21": "62vELYtyoz2zN3bu5XvUx15N3M5pZPVz4mEeV1QLzw9NfDPsS9AuTAse42KCXJhGNmtZk3pitbDm4PPQREan272K",
  "key22": "5sqzFdeJr91hZrUNLdbae9K6CtreqfAQBkdQiuVHjsgZz4DkD5P1URgPdNezFAFrWYe5pGY9MyRnevpDMvYQc67K",
  "key23": "4QUtL5nopZwiWv3nLeinp6kLsnHF6fidQxezhwmESDAR169xKmEEsLi6ydwrmJVmRbtMH4sLPBZRt7m8jmqGA9wF",
  "key24": "4qeEfPRoFAL6MWG2bGEMdJrJf7EsLLzik16CXDjs7cgAd6JuZGMESR7h7VVJ7HmxTg4iUMsffET1t2Z1ndM8uL6f",
  "key25": "2FswiaMfJndhLSBcpzRDc2CYj3gFmNDonAkFTEwUbHhMHjRaKSNaL2wju8wjUE7Kr1fm88rT6B4ews2u1XnM5djQ",
  "key26": "2K8PpSk2xspebFeXHHRcQETnvSZTNLmRgHukpPbmuzmbivDs71Ww1ZZxwRzKUFW8cZ6RUmtnaRwz7Fh9vnk7rw5A",
  "key27": "2ykCDNBzqdZ9v6dqtrMu84YgY7LzHEWgFXb1oBKNmLCDrjMZ1pPbxsozgHWdJ6T4Hn25vUmbxhfyStknfDC5CnTS",
  "key28": "3wFpVs8wNCHUnpke6W8X6RexGumPh7ViN56E4MW4bWjvv3gTeeVEYVn6EvuXcpe6EvsCNSYkJtMJJQeqRqfuFWQV",
  "key29": "2hiaiBGeesmw9reFTqdsuoKWrHRCAk1wrkPj19UZYjKsCTyW5HzCV2L5dCLw9fwpSe7NDJjgaLeagKhrvRQERCo8",
  "key30": "3uKtaSSRWmzM6NcioTD1sG4XHeAo9qpks9iREmqv5HbgtQ1iYRqWt3gm2kcd39TeZXTZBcWekRCKde8gyzR2DF7",
  "key31": "5xX3Z2WEYXzdePVaBkanxbS1wqPXj4K975TC9mye8shbSg3ioXoyYWjRch5BEBtTbs6z9bt8Tx8e1A1j8bAwzimn",
  "key32": "pQnVDQU4fLYriRhn4MCxyDbXrPCHoWd4QeBtBq88qjPTYTEp4bbhgaAub5MWDy4cTv56WajWjXgjV577EDTfgB8",
  "key33": "3H1mk3JaHZk2q5r225dEsmkBCoq39U3RrMjJyHHJn7ExUiWNGUGPbuCSuowRwcMNn7qERz28fV8wup2aJtMuRLUi",
  "key34": "3RebBsZyEjwgswfHB2TTjbvnQi7TCogKDqFEM9Cu3CVYgeRDJ563faK36uFsJ8MkgySxUvTwZreA59n3yfeDdMhL",
  "key35": "R7YuLAoyYPLSsttLCWHxDPLAUzAxq6GD8jJC8KHvdZCTAsPPM5a1m7NKHwcNZcKp1aE1EJiUGkcfr5f3FSDDFim",
  "key36": "1UQXvvvUEkiH8QgdW4MGzuwoUR5mS6HWCFDNSkeNPjZ7KdrEk8svuCZQn7WDhyLdU3Q4cZkzijCXxq9FMXPcTrh",
  "key37": "2JaoAAth7KUjoyWFc1KkWjb5HTyWzSKE3NHoabsCcXGcbpdx5aqX4zZej7G9Fc14wCn9p8fj2afbsHw3gmMEq7x2",
  "key38": "eNBSbzSRzVJ5ndqQTVDTSikZKK7tWxcBChMt9oJgMJZEQgwZWgwium1waSUzeZLWXwp2zwRGocdg8k3JCm9sDHp",
  "key39": "4Ff7duPHqSqT9gsqAJ3qfLX2vb8ghHn71GZ1K4jfRukGpKAwwPVGdvvkpurGEpV8zS9wFcsDZGyfrLU3HGeme4wZ",
  "key40": "5tUdTLfDr7tQkbSZ9STRDZGJvmTpkshR9UgFmkgjdMB68UjnEgDu6fRRdXQ3iwgc6YT2UV2cQoaV5ZR6xLd6jEUC"
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

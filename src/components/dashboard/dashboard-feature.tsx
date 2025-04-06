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
    "4ftHdFQzuvtskStwSYSsxGcEMYtkeAC6WqiMsjLSAwTpdopKqL36EowvGuiLugH1MUPGNaNLU8hS4uKhE7uXjdvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBe75ddFKL7MU8HGwmW97Trh5YQn5N5a4Xujf5U4VUiktFUPASsGUtK82hkJyycZNmDnhWczwAAAWmWYj3WrS54",
  "key1": "47BKGDCtm7ucMMiaACgmoBhTy4b1xziSZqissMhwvskXzucsEFYsaVdhzAaiYMGYcoKeyccbJYxM89mbTnewPNzm",
  "key2": "Pfv33XjamNHsxmUX25ktrkR4joeCcGvjrhtj2CNT2J6wd4Erzbf3GSJoxV19aZ1pE6x8brXyDbfWv7LXM2ydNaa",
  "key3": "49ELb34bTXJjVJW5Axj1zX3PqQmkeeZJpuEkj8jkLFvS5fbML7tpsapZxMFTGGk8yHeQGfNe3dLvYrRaQJaSLJRR",
  "key4": "56GSgrJTiMfEEhnrVWs99NucRh5iqaPV7q8n2BHfP7SL7YXt3QX1D6Qdce8WUtDBNWXxcPcgZX5ofDbnGnW6f5Wn",
  "key5": "22wbWj97Xjco7q7XTW7gxVzPTgxoeAEYsskCqDznaSwejvHRKQSrBgM45hXJ4YVSZZHNDrVUn5Bc1Un9M4TZiGj2",
  "key6": "3P5zvQaztmxYEsW6cgonmqR4A6wgt1sWxHEh5wAgw8PFR7RxBeC2wzJxv5Aqtae7pEGkYoVCY6Gi3kLfbj2c6C1Z",
  "key7": "zg1eS6Fvpn9JkX9TQADhHsBT7xshTjyEgrdDuSDSUjYt3Tq2qGGUyJnv4KWcmkpiVXsDZ85xSx3qToFgixE73w1",
  "key8": "29jtrJSSQnAu6BVhWzAcYsvw2h3xQg24NDuhx97CSNgvXn3trjJGpPrKkKTJw4qv6EcgzWKapCttpozdicAxG3zG",
  "key9": "46LhGgJgrLEHE4q9nFYBZUtw72Tu61jBYRdejaeLD7mz2P2jJPPp2c8AUQnWdE6s19QCi9FJCqFsDcDULUvDBJMY",
  "key10": "63to6DQWXB1eiCNsJjbFrFJqxr7Mczfi168YqARiQzVNSFX29tvK9A4t1e7Cg7MUgg2ykMkuJiFbXNWpDshLRUuY",
  "key11": "22R8AnycK65CCQbmzVobzQigZEUqCYTMMDvocpy9fxRAdzxS8DyJWKg9ciSv4vZyKy8qWMrszAJ3N5yPvpZDrVCA",
  "key12": "PYChVQZb2vw4C5DC8EAP1bcGQ9kfdixdaWqeD47DXpeqsits7nx9XXTyxw3rZmUWUf1cWZ6a9QSC8Tky6BVJyBX",
  "key13": "4FY786PdHUyMBoMUkvtWbSk92GVmTar2a1jpd5sFnpqmYqKn54rFHQ2EJVzF1Fs64HCrsNFKqUEB4vJuPtuob5HR",
  "key14": "4czQaX1dKNqgdXweBVkZG9qoB7zD3iXZaJrM4SBQYny1mNEsWWm5yQFPGsYVwBTBKWffW1VCXW2nPen5bypsMZVH",
  "key15": "2Vgg1FVYYzMH4dn42CEHm7AZVwbtNTgT4G91QYCUYdvHdJqz1kAMFYQewbfbqMDczkVwCBnmAMFAMYe8dFcTeRRe",
  "key16": "Lvzb89UgydxYJvheA75zFTkmJ82iCoFSStjmDuzRQABJNJDtxbYtudW4BGWzHrvC3Heki3vrvt1wVU4bfjPSrNK",
  "key17": "U25iBbXtPaBxhqCDXgdXcbc1pAK2sih6sURZ74c1hAtLyu969AHHPBbJaD7XUYEiVArfGctimVBUFb1F6oprLqA",
  "key18": "3jM9ihA9jkNdwX9wNeTQ9jsSoQQiEwshcrsPoMjb5rgHCPM3eJVHbAAuGjeb1tCvYb8nsDyr7QZfYAqhUeWnapQ6",
  "key19": "L1J2fnmnjgKiBa72DbNdaGMarm65xtMVAhVHf6i26Yr9W3qrRvCysaDuDunLPejEQKjKsJ4Nt51CmRc3gvYZB5P",
  "key20": "3T6c9C3EKNSF2EdcqxR5ugBF2NNaWCCDU4d6wqVciz2NMHXEnh61fpEqiJAnkczB9NLaw8PosG7Nsyh4c5e8CJgp",
  "key21": "5xcaLUjNQHRvbvAo6P9xjR2FkHsoYaEzWV6QDnoLwEJekmU1UMsrTFszAZQqNfVN5UyuJUHgv8JJoXqUzoJxHSUJ",
  "key22": "42tJg2d4wgvwnq7CjTaxtchvqTPAnVJSkGeswDvfahwPaPyTr7i6MHTyZyWAsXhB7zRsFnxuD6UgyHHnYu1XcKno",
  "key23": "1eXFzqDhpnscAhhWgXJExSMqXPUsWQ4cArZVe9qr2ixWAXRKVv4x9LG7yRgNQBmynCGp4qh5R2rHQPA6CHnzKUV",
  "key24": "D7VDhTKLtCazJ15hTq4k4u52E7toQkFW5y917rD8usD3E4Mb5TRSSZ4hJLUQ43a1imQfvbrKVyNAbU9xJVpTBjK",
  "key25": "2aNfWnXhYvqLUnKSRvYpEJPjT9yb7wgaYCLtZNUjFfY7b2GLLwo21rAr4LpRRUPMy5FbQ7NansSZNH93J9KhC23x",
  "key26": "Yn6Y5Kc4tmyEpjansWD2b3xmaiY6zpjTYL5avDnfu6NTivfxV4MeMXKephBqdSTWH6Zaz5kBtzXCaXmosiFnAKx",
  "key27": "3vyLhCjUPtbPbXALDEyqARqG7RhS8Uqtib4E5XYPGKwQgTjBuxQDWQmKuyH5KYbJwYHJtMfSQx2ucoy5ThEAwpaV",
  "key28": "3AH7vKGJZi95rNgrLu4MxGS3QfEKpjGcQsiQKAVDbeo8jpUACA8JbBcBwWcWc1R2HneqwnDNN9qccVYnExRFz7C4",
  "key29": "283hY41GaMnkykQYuSUQ3Tcit4VacEUF1JGAaNpTg55BUqdUaH6MwzvvwB6PyJrKJE3JtWTwZoF61Bc7vaddSZPS",
  "key30": "2h2yqyskmea6oJGBn98DoswZtRS6D7JV56Y1Avi4zsC7fRPJ3Fd9p2KFRBnfZzY6LYn25mEQVytiy2VDqjVrSWQs",
  "key31": "5gJZJBPh1dkW1s5Ye8z3RxFA4WPsZ6ZUU2298X5AMbv4PM67Se3CDgd3kT7EcR2MQb8zbXWmHHruyk2N17JrzhtU",
  "key32": "3eCA8Yp6ZKbP9k5ZDRC8GACBc3w3NSenfMx5NFoRg3mZugrhz3fZqz8rqp654UvnWp45pa9Hwui1PGPvLFDUoR1D",
  "key33": "32tFCmUBMinM6JQCHNQBoM2XBtZ4Yqi8iWaBuaSQdmJi62kzjcWLDdu1iZQRAD7pJAyrAe5wiE6t9jZyN2VNC1WH",
  "key34": "4jSsBeBBc1v2nqKbw1uYyBuuQyoBzNvxJ4hMaUF7ezC96FbQzk5WHMkAFQiV9TcoATVHaMnhiNWDgdZVQpqognkQ"
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

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
    "5UBxmk4Pi983bJdABtZNo5V2jdpxugb5m7oh3sQaitCqXVdbc1Hthw9PNaXSPF3muRbmCUJLZzmDFkuEJduay19d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xnWPM5iNs24ttG5VpikqL3svyipSBNGNiDWAR2kwKAkgXBx4S1p49RicWigxtoF7pkzP7AXikCDs9LJWLq9TjPU",
  "key1": "38WTxHMo6uwghqWNgg1Bcjf99aHoPEdH75ytzsdpE72g7NvWcp9MrXisUgPoS35nkwHabzzHcrhjQRgyTNnGvzdr",
  "key2": "3dLhgRDJNCG3xV15SEbHLKMmbaBTeV7QMNdgGuqaHeDm6ibSBuFP1DAKDRDmXKi8C2TwCiWGQkzmpSRKq3Ci8b3",
  "key3": "4vTcrwg6LF5iZ7UGp5n2LB8wuDz5pbPoYYQzmhGjNQY16Mu6nfYm5253P6qnumYmteaKtdKzp9AEP8n1j1P7a97w",
  "key4": "4EwSyW8XkycdmZvDvmurL62tpAib9td31qVuq8cSxCzwS9TDbfQnQ6ujYGLxft7kctm2v9JSEYhzTj9aTbEswmu6",
  "key5": "4BXW6k1yJ4HCRYqf3dZY724QKckxq3yHebttGaDvCq5aKzZjHfCiiQyoJ8Y3UZzrzLXkPEU3Vx88H1q9TgZJr8mF",
  "key6": "5Fd6QZDBM5YgSHBzCG759VDQpez1Qt6QZCdq7Zt6XYr8nX4pPYFSupfrj6snmH6rAjsSMKeMetQNWanevm953kF4",
  "key7": "4HqbwQC58Azbh1p4zZiDpmFneBM4QxnkWHwjPeTznPhH4uePht3LY8YJwXMLVqL9oeb3CyoyaD3QekWSkCL2NgD6",
  "key8": "4gdG9opx8eoSowDaWVcnbKKF88dcjnT97EvRxZG45k59rYDzaWw4LeWpRghZXM7ezti2ZnMVtUoTSF4e96rAah9M",
  "key9": "4gHYGTG2zkrHnruJVfZL5c5iqUq8zRzSSELxWPMc93rUJtGc1Pr5wJjq8GqSpMvFwsLXamkLzjPXzQt2cbnZ8Sgy",
  "key10": "288z6PUFTsUaApfCHkbtvP3Qdn4HhsBmVmYJnwBqZQbMtaLAopo2xTfKxJgAbjydjqk5RoFV8Qb7E4gkf4u3vuFd",
  "key11": "2TQySx9aHmYC6g74EvH25ecdxuPi3zsMdTxnBxzLhbZ6msonYWFKE9r3bTvHSPrievVHc141Q5dNeAgFWoZQwRCK",
  "key12": "5ipjbVn3n9QMzh5LRRcuh6wYQ4tE43xMaHBkRjfHLroVQWYKXth6Dh7YXstmLAcMSeS2Kq2U29NUVvhUX62oH12w",
  "key13": "2Eu3m3Pb8znCd1d8dEXq8PS2tyLRM5bad8hFLeeZvcUguFc5F74fM8TSKn3K7XKAFjRLowkFHX7B6pibbKaJHeh2",
  "key14": "3yuohTUoLb1mhc4t8yZrPjAyrKCXtVY7Dhwr7MM46yY5X1XqAJwhxY9hTHvUkvDpkdvpiBj6VjGWVpKJWsuRamj5",
  "key15": "3z2VaFpdCQg3feSkD4BaAk2qtQjMCfsU9MrUVMDYj5SuQqMotEhkWc1oihZCdRyjW15mhcKn67Ui5dSQUWbnjh7Z",
  "key16": "3PjMbLuWnb92orgBNkUQsozmuZEncX4woSYm6PLeiegrfZJ3pPqgRvcfixnyjBkUoXnEcmr55UPGg4SkNELCS7Wj",
  "key17": "xpu2r5phoEGceTDtefq27uym9WpTYAic5du8h5WjroJR43M5K2cBH6DuS7g4JHfkNcss5ivucJmEinjVcMhJa8D",
  "key18": "5A7Xyn37cq3Z46kSA4jo72YWhEUeKdk5tDbBmYk4nspGXt6rvFWG5mUwRGBGMYRw2nc3P7tMnSSf8eACNPw4FwgT",
  "key19": "21v2XDNW3cLRx18vb5aNV7VrQZKziRHU6VsMg3V1D4VqZdBbw9ncNKGJa6AEtqDQBAZytoVbDHBsQGChmjS8QFzm",
  "key20": "29LTwfhFrj5FhogP2qEuKD9R2q3Ad6dWmHEZ9fmDyftFnxhJ16uuyJ6y4FpHk8SB7ombAsxF5s7eDsHAc4kYrszx",
  "key21": "4pcSiNTj2SAgDKFbZtc9ysWqJbfSbTiFaJDddM7bvCbFXKynQafgvU2TJNyK5ZwdXfexamkSZsKGL8cXyE8Z6an4",
  "key22": "2SxoHhVmc4pDjQzriYRfwtJGFWNhCBYqxL44exr53Q5qF5NHAZJBw4pcGo5cFa8JjsMokYZV6coy93h3TAH7Wkb6",
  "key23": "2ZEhGifwb3WX9MRYz8KjyvbrHAsUKMwHdNxdmitkqyUKntXbquL6yWQoeEXwwpMZFKgcbCWTdeQmbe4STZadSiEU",
  "key24": "frx86N4a3H6NZXwTNyHECaiAJWjFXXN6P33VN7Jk8BwqX2sXfzHY4hGjQUPDU4Q1APSmTsBr8vK9A7WnL4yVv5F",
  "key25": "Mtre5UZ5RBssi7yNrQEDus9EzouT99PrC6nqPHu18Fwi2M6ML8gouiFyBsBc5GkQEaqd6vEmNRkwhTt7JV3ZXpD",
  "key26": "2HRbB7te8QjJUYXfCzSkSL2QpWmYKjvQ681BYj967ZuBxNchfZXQPUh3gg21RWBxXbpMAw7dBUTgT8joy1iwdVcH",
  "key27": "78Y6itbmqiQXB8zcv6dCmsEt4w4gSRiLcSwCa3G7D9UiUnMQwausVMcukBd6BGx923dND6ELqGnDquUu9Ddvbr4",
  "key28": "5YazQzzxSgPy2uJDnXpvxCXNmXLr9XMqfyHpJ8k6LfnrWN4NoqGC8ZSocywjn6DaRvryASFi86QcV81nbnWD3bqY",
  "key29": "55uAAWgpqEZokVXaSff4oTNFApu3LJAJ44C69DZ2TV5grSzDHfa3mfXXex3xfgKuHXg8uJHetkmWiPk1H4KHnYJN",
  "key30": "3HB8YWJvN6DRHSbPFmpJs6389aeQ2Pc9NsafZRDUWmnsqXFbrWgHJZkMDWot8Q5Puot1woWyKM8AHJvLMfxeum6w",
  "key31": "3T3vN9UjnBuGy7ukhXUSX5JE5Vh2yHk3ifK8n1i7CPBwvjtxTjNV5N9x4fqphwtYC7BnDzKZjjNaZd5Pe4SKHQNF",
  "key32": "547Te16zkmVKkdfiMYjpEgF8X2A8ziRSKWxScz8EymeXATKoUKAxuegsHYb4otohBK3CmwmFMTiPGxhR8cBdJ661",
  "key33": "4w52DvcDjvy2CyGpCDR3fzVwzJAEaGitYAxUFWTk6HnTt8572iVbJCx7wLwqtZ6oGwQui2u5VUn6zqmfQ36eb4my",
  "key34": "md2GvuJMHqw8m8KjN6e1EeknXfnAyVK5ZDBtgNPVGCYCsRZ7NfeScYGQ9WvHewDogThqhs5PJ4Cf88oGrrN624g",
  "key35": "4vG2QMNGGm4qE6S9o8rHrRAcWgx53apCdsXBgzX558snQsUcmdfHxPEXGPG1d5CtBs4NSE6pidXkPcZ5qSpE3QJb",
  "key36": "45n71k83HTgZVbjKy1nGnaVA7Kzpjrua3wX3QDk1AiehVW7sEdKq9QgFVoZXjijeGHrWBoTeUUizwp64q4gsSQaX",
  "key37": "2KbyUN7JBP8XgooKMvq2jJif3mEtRecr5Hbv2HxuP4qynKjAommqZw8n1ZCy8AvyHbvcY2ys7EWcuXPKv2PxjjXF",
  "key38": "5mP6DqcBbSs1rp52mFBfTeRgPXzNoi1XJHBJGoWqFs2MwBUy8hvXza5KgnGSfKRE8gXudx9KWJaBzvTb44Ek9coN",
  "key39": "5V55rnwtFUVz8CXLcE7Y8rbhfHomXDtCCnPyb8zfXFv7r21XZdHZaEpWnuvNQtw9tBF2ty2pkNnpQd7DCeTp1nmm",
  "key40": "2bXq8gfECLMhmXFXSYdFjQDzV7DNWY24CFbuQqypbK8EpkhAG24iNdggQ8BrCvXPJtnZCpqhvo1ewBGMBQHp7UQ6",
  "key41": "4JiFbXuCUB7au2anxjbCkKsDv7JxYwY9bx9KoBzicbLQV6qudrkK4pvwjSSutVTSDeNMXZsVLkAxCk5hfThcRPju",
  "key42": "3JVC5KjvX6Ak4Hk8R9BWgvaB9tA3TgE18LnZp7iScMqYApPvGD8q9rUYh3cv7N1PLK9S7UyZaCxKjNYtpiZMsaRn",
  "key43": "BdnwKmg44kBf9eoj1bZU1RR5fQHsnMtSgRo8mHarFHU3MsjAYNqTmQMsAHPixRDiwLpmnisheYL48FeDQqYvZSv",
  "key44": "4HL8jQpFesjA7fV4EdVhqAJDDtXEkJcRdyCuVNqvYB5YqkLSh8kzd9uUoaNrg94xy7wJqjDPSpVRRH6VPS38yzz7",
  "key45": "2XDeKkLy2TNCy2vthMsVmmFrZ5aXry1bczLrC8bZgUpUpSoZv12PmUcKmj1YnfrdULPEoSuECobEBrXshHgR8MEW",
  "key46": "2qa6v7VnDBnqMzkJVBKphWp8bDTDcme3dvdvpsKRXXUrhRePfrH1UVGnxZWTVBf7tsfwqYV42zoMM3BuYA4As5Ph",
  "key47": "3rxenPRLRrSGM5zY5Lw59dMAtArbFftvXwZHw6Rv5WicSyqdERq45D2wvpu7JcRwn4RxJsH3Wu62itydveG8qFg4"
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

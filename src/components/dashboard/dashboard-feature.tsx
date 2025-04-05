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
    "5uDJeVu5BrrEx6Uq3uL1k48HPLi6Mo516LfxdppFVsUNFavWCiH5HgtdKfKsvaB3SvErfz9xpBYzBRVGdsuAWLMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3SRvZaTBaSYdymLJ4vdrXDXKFZAFq5VwMRTC9ZvwNX2Re4SqtcvSu6BSmysht7eyHi5wq9D6k51sDEEQMU9dSW",
  "key1": "2TgXBo7SfKEkebWtp6E2Wag3k2hefb52SmnXdZF3j1A34a4FqpKVy2cQPTMaVxfUd4fm5vALE2GcPmPg2tRxe1fs",
  "key2": "2Z3yXQLpCBH8Vee4JyQsJJtfnNqzDwgpZ2y9qodyzz7obPE2nNpTxUSJk1vweeQD8i9UVwrESzFdJtLf9nyxxbGc",
  "key3": "2P5ZxnkZ76eGChvX5wa2AoYF1XVj4dzcS74msDi8hahoEA1P33o7zkV8dRazX1gowsqG6cmZt1f5HTjwoSiobDGx",
  "key4": "45VWxQX16GWzBoeCoWe27F2arm5H2qpCgoA6qx4SYixve1tddjbtetpRvtxicFnydeQDAYufV6JAWacgvkHw7T1Z",
  "key5": "kRLvW5YVpghc5TiqRaYSxttDRYkjwuZqi4Bc6BHETq44NcCRLgaKKUx5UCgDFpx82sdCuuRPALdPUnMjqNb5UnP",
  "key6": "JcNraMT7ehXQMJ288zxtyj5rMYFbPd7vdVK3SSwiZg1hQHMPqEbwUQhpfaxCHxsTFh8yqdyErJEc2D8fS7ZRQmG",
  "key7": "2LfLwrcmbLWT4RwGx2TwU1VchJdz2LTi63DWG35pf9ruu4BWogMbngGXNLx3zAEaB5wsjHaWb3cE2X9EnUq4pwPu",
  "key8": "B4zH2GDb1gB1XUUGG9755zvt8ZQPVjYjcTz4h34ctyr1Wwaphkau9mdFsmy2saF4vQiD9H7vvCqCRU1L2jEFqto",
  "key9": "4FCttcsHSXDyS7vFWVLLxmLE2ouiq3FanqeJtC7bQVFtdv5uB5hF2C1wHSwWcNp7zj2GnPhcCvtxsvEgdXMiU1Bn",
  "key10": "5EmZL2sqmvtFLMMZr4rnpb5ox73hJxCqEKK22HL3acmJDWpJ7s44uf2aFEyeij2ZtuZEbj8xpx66uuB3ko8rakHU",
  "key11": "cQgoNrTiDnC4ordSrXLgeBpxvUaiWKzHWCVdBgca1UN1ZLmxmuCSDY7zjtRCRcGjNDKshMqEHfzmfSrBkXCRjvV",
  "key12": "3WmaHSCRo1dRCRuhAbkZYriDvReBRqHMu6QGLkE6xBTWdeEDehMmhzvFno73DA99onivfWoiLesHe4oKm9CNGZqk",
  "key13": "2D4iig7gy2auatdHbE7fkadJ3WFbMJ442Z4zp1BzNHwsZzmv67Pv5gPd9fe9oKN5G6DyeEiDamERQk5V1azS6J1n",
  "key14": "5oC4HABZ55tLpsYirLyeJa8Js9JUm1uLvNEGa4WMjwVLfYgFQ2XrFtVJmmNMbFRHq6Ns1GPoDMuyN2R252tsfFRT",
  "key15": "GgPNqbvXToReNLnvyRYKpPWaqZvyMA2q3d5EbEMpD7wkE2yz9AM9ehNFvTm9uyAW8ExUKS4EA6kx8hLjNZU2uUB",
  "key16": "jVhfH6DxHBWJgXJ9tUGKB7GnTMkazz6bDW7qwHyYuqg27nEV9wtowpS7sxL9hBrD1ofeTFN69fWxAoSm5j3UQNi",
  "key17": "5Ma1qfYsk73kVQ1JBks9xor6kYQ6xY36e4DpiA3JQhiMdUKNEkFPr1XZ1kFkZBvDFqVCwotRNsA7SvZEMeUX8YBE",
  "key18": "3qKAB8wjHKJwBJSW1yTZEM65EvnnxTfwZsgpk2iHFiZ8PbZz6mNDNxG8E3WMsfgJPdQHCdczxvzsY4RYpRsXdEpj",
  "key19": "3jUaYm9zLxzr7MJFkeoaJr5FZCCG4akedy5CdxpWokZMDWZWGu2DRBCRSCyGScGQbgF5z9MXUf7ZhjXSu7viBCeT",
  "key20": "5GBjK1jyrnacLS6AF4CuZ2dMk4oBNPxH8hBVaiy8aMERdHgso2kWBVcHUxuRm6xbXaUMxfTqDEQEv82wQN2aTgcC",
  "key21": "qv9FiJJeswsdbKwj65VbCaCxoUzt5tj31FoXXYRPuvYkcn4R5qur6oWxSnhcSuAz6WE46p88JXvqHhX2z19K4pF",
  "key22": "4LRjTiEDtLVqUeL3qUQsceUEyNus59Xx7a3qpaL1ouhJ1U2vBfq5kmaphuhCpfbzeLhqF2SMJCHZV3sdKMHF5NC4",
  "key23": "5WJDppQk4xjTKNf4vbQGgJZD6TMF528u3czheRoB7amLgLnHFjJaseigmputyJdQR3S6DPCWDSwcADdJXhxWwe3p",
  "key24": "3XmA21VWznU78ZTWM61h27wR9q9tXUY3ZbUowMjkxp471ibqdDeSjdKw2S1h565UhAQcsxcXQ6v6JR2RkXgtAEZw",
  "key25": "28VDhB7n4JC4NiMB6DQgs5biffiRt6jjd5kxRdbxrBtQkDqmBcM4yJTRyTrQTmEB7NiZkkBvLdrbmcUWN1zW1qTz",
  "key26": "5p9MdvygRe2wzaY3s4uCc128aeYe1tzUsFxvwe7oktDTob7yg5FgvsbeYS7ZRYBc9mUcyPKcYU6vYePNbbLUuxQP",
  "key27": "2Y2pMmAnFnmnDazgZFqpLVMk8XoHFwX8wdBb1PmY5j6EXtU91oHs8JpzBVUJJtU8X1A5LTA2kUH5avdKjHRCtFci",
  "key28": "2jFB4saB1Ne3soYCjxxTXFvks7jGx9Afwrgif1gfEBzcSRY5GPrRR7GQku9iL2tmNDyvRBbTDNJW68gyzchEW4wc",
  "key29": "4bE7WRJxE6E2RxaAa1HcA33fu5QZvEv2oytHi71Rm2f7DVod5HbZHNZH4FH2C4bwcCZN45L5N1BkymSsxkcSd3fd",
  "key30": "5znv3fPfmjGmSDCyxESduntQRYVYm8Fs8CxswoShk2EPXGmkMrSheFvzdGWNnuipdpDttzP2HpGzxUpFJTmPQ2cv",
  "key31": "3DmxtDhknw1MP5eYikVakTCA9uQXWdKBTW5aEaFyAGhT21YZNhBSjE1rrTgyezYhiYkzhJoGNorKp96nyR2mxU8b",
  "key32": "2K4Ja89U9oHFyB3m2KgazBdJgd8dQhSfnsYsrD6tqsghrPRKT6XcFyQQ5R62PHoeTjrrRpwJLPbduU7rrYynep2K",
  "key33": "54c3MXRF8wixpnjXNHq1XC8gqySiKgT4ThjBRzTYTMQMwuRUvTJQaCaRYGGVPN6QduVE9vqUMpoSws4i7X6UycrA"
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

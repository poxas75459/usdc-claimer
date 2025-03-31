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
    "4tswvsqouXaNLk4FauSq1HxjyG4XRzHqip65YA3prbY6bMY1tFcLnZETXPYCQQsNwYDN49hGWoaQodfjRpSvzbpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2RWT8SWcUtw6h9SVRUMgaUVchWjjoqvY1k8nwtyAz4ChhGi9BFtxxtmvdn3vwvp93rNEe5iRaJkCU6jswtBdwJ",
  "key1": "2WYBqSrGxcY7DzrxknaLodg9XhR2CaPYqGq3u3u1sinaLxQfUvTRvy8SHBMHCx6vk4qi6hbmrVibNdENRibNwtaK",
  "key2": "3647UBtbc39Zv1vas7YUXVLJyHQCrGD2CCskDYWocX3sdSm9RfXH7extGgCoXJzU9WtkJJ6SVaEqDfuHhrHdFY9Y",
  "key3": "22mn3R21M46dn4aS4UZemAVfCfuKU4hKtoJ2ArNLfuWXzhZR4m5piMuAa7jLwAU4cvioEZKZ7tx4KLgtBJAtkMCa",
  "key4": "5mf8LXxcrcVgFkhpdBNc6wt2nAUmm2SSWBcsSW43hLvb6LFqtf83MosYWV4agrrMjBGiGPPK4prMh9ipZT4uJr5k",
  "key5": "3NcBQL3uL3vdQDTcW6mkbs1LRUq3tBzyavzDwwyzYxEwXX2YfRHn2TrhHrEzUkFqxrKVHYc5TWh4cnMEucmrjjfh",
  "key6": "2QJFZXokPU2Z6RLonpoE3aA2xU8s8tiMKfkUxEUgGh97gbhcLZyUb3mBEY4WM1rgKMUKofjo5Mvs73So1GoH8gHH",
  "key7": "2FZnAwgNSATWFaB2gLEa39ir5wu5HED7nGTehheFFLQyNiM59zDRKykQA74jT3XShr1F4rJmihnDQjD9a6fqPMnc",
  "key8": "4EHFnWB3CwRS3QFFzvDpoB9WAaHu2y6UoC1FnpA1RMixfKEaZ8MTRgJfZpwLWEcULfJobnKVFQTe9Vpa1i6JBXsY",
  "key9": "5Tun6KeNA1L1CsTSdcx2LzGhkze8vh5SDG9dAEqtnvXyyFLQz2cwqQyk97Lkh6PTYiYAATPP2yGEHBrF94J6BoKt",
  "key10": "37L9RN3Xrb7LgFhxi2hP2nJusbwPpzvNS7T94Qx1URiHSQv81vDTa5rYFDKtihd6gZ9VbmmDhCw3TBAVAf7pRUcn",
  "key11": "5TAemJCDDrn4T6mrMe5yq7T6sC7HaUXzNLMrxYuysddVdNoZqojg4FtqJHoifbvA4Pa7kEoBu15BA2siqrnSQXBT",
  "key12": "3BKDNiZVXGBeMjfzZg6Sf5LEYFEGZXJKzhDqJFCjspSgPMfGgkJmqqSGU8GpAU8TxxNbErCQvmkP8mnfJBiejd9g",
  "key13": "3JiCR7kq4HvEitQRZW7BsbAMTi1LrFc4NCk3orooTqkJFyzbFDai1gM6ANp97mXX7xgujybVCHCT6m2T2wVSTD7W",
  "key14": "3AyvZBN8VmnbFrpCaHFS5apkyT88H6QM1755yUh4MrFQUWr41TnP9tb5c7Q2TDjkAL6HhQiYPq29wLETPtgws1w2",
  "key15": "58UQxMoHGFYJXDXrrdKWynBqLLnFj87ywNTvH3ZaW1HKMYjUJF4VJp2ZL4nYHio8Kaf45EmstdFgDX8q1WTYTaMz",
  "key16": "3iQSjGWNdXoAh3UFiTt7WSa42cZihLD8xvmx8JCTVUkrpDycfQU8tdtZDADh4J4aauctvm6YF33DQtsNL9Lvf3b8",
  "key17": "4YrUMVujwK6b8zkopr1gEzfMbVuWCSumioXwKNWXsjsWKZu4p5eHuwxkevZGJUDxZYaKCmh4LuU2QA1YUQpzQeRZ",
  "key18": "5Wi75Jau2dLpn6UjT3HgPRk432x3CUVuaoKd7KkfT8JLzAPgCpRyDDefP79LUadsFHB92tLeVwNRfjctQGmTjUtB",
  "key19": "2622WiihDy8E7GpLVdpnWQDUUsFX97JtBeRUNRUoowbs34WdUiMh2WQiFno32GqkthRU1h565YYQZq5nigi78vv9",
  "key20": "4QsLBHS4UVpxG6xWa7fwn8zqswq5LQn6j16qMToYrSJYoUNXdf3FbieFHutbK1Roxg1AR6R5y8F3jreVxerLukem",
  "key21": "PqbDBCeezipKCMVUMAqh4s7vdAWX8kwKmXn5aofmrfVW87A4sdQrQGW7iPZihxLxTVQ9bdH5u345zRQXRZKjMU3",
  "key22": "2pQwWeuqEJuGQ15aSMW8MsBs4QkJ3fgfmhQsj8DvWVwUaPtoKzQhrvtMaK78SSQgdRaWySz6YFSdKNvvVLrzYqBV",
  "key23": "59UmYx447yn44aAdVf25xQBxwDbntHsKKBVDkPX1bvZtRpNw9AtuEiQjZNSWmwQDGnvpitfiDPUtw5Kha3auKcVP",
  "key24": "4MtiCBV7wGoiyiaTeGwrrev5y89KhuuzyQcyG8srE8J8Ni21Bms7zSV36KGjwm53PNniLzzK5xgUafQNdvw9aDsd",
  "key25": "VgQXteZTEWHyjLJfnePrKaxHatXGj4VofHe19JsqxLnAV8sYWWPQNBhGooskqB8GKUUWyBMwayi4gDW4r14KQt5",
  "key26": "4WtDhWN4Rg3kbn4fDzVjQbxCc4pS4CiUcCss8gYYTcsZ7tTWL2pVKwZgYMTTm9aK3Y5H3zsJw8oeQDExjh4NzNf7",
  "key27": "3rh33rz9reskiGUVweqcp5ogub9KZqyS8cYJ7mf2TdrfPhR8ihYUddR3tc5zqd1Uj5o7U23WUMPjiXM92N12GJmA",
  "key28": "3SxMVuXW4PULGUYAqSofXf2D3kKubPByZD4dyMgaecCehePUfJryNZfLnsc8U96Z4pCDQpSS1PPJXq4TBK7VfrTd",
  "key29": "DuLoL8t53xsZET2AnZpwJR3NbMGNLRtQTwxKWUMHEDo6PKJPVnHkm4r7KPzPnWvvQuTcLhRWteqLEA425AebsXi",
  "key30": "3ditWhCEj45yR42VQsZLFGRAfjy3zJPCC89phAXQxrVd7mgVtBh7acNcnJic1Xg2wYHKSYL4WNZgeTiAVrBBNSxd",
  "key31": "4cz2cuQnQyp4dADzUCSmGC1jVSe4c5J1KjbPARxu8bQk9KCSNRJUMYYWUvxDqyVKZGJrRWxcsxZbuNanigue7xX6",
  "key32": "5Qadznpd9hL2TXZhZrdvwPajLfJhFXTJoNoc7KJY5PkHB13gwgFgqP2JfHjbMVYWNCb64ikAv6eukS6DsadtivZp"
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

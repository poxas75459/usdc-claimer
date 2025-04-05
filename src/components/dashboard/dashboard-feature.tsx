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
    "iU4vYokL8zj357ENeGTFkNPwzoBgjHE9bsFHvbf1Cidke8oLwwH6gd7fQkXr1ZUtQzJz7ew2o76nmsTGGmYWKUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6Tiz9ucn31BDU8gEzbCaJaCypAJMYif9CF3bqTr6J6jERo75Q6JF28s1Pf5jy1yqFEwsWwrs5J7s7EBzmgv9Zz",
  "key1": "wv5LY7ujNVYQBg8SaD2eCpLg6kFcmPzwTsEXhtyGdNQUGwEe8bfJ4VfXy9QbzRtYdKVRm8f1tpWahud3b8jVWqi",
  "key2": "61Rm7WWmRtoBhRDTNQcU5VVcFE4s1RLuVLuee6kvPo4pvQGMb3rKCMjAFaZ3Gy784sfoWGCGkLwui21GvsXYBk4c",
  "key3": "58ZyGV7YyFrZR8XT29UMtEWmxenNAh8jxJH9KqP3yRnyVPFKtNdBuSLe5o64iMSyPgm4HXsCKiJHSYkhTUvNqpPV",
  "key4": "3ZRo4HSM3xtoeLsU7VzHujkYtsNNMefKq36Pc79HGHvuUcK2pxhGhCfVsgzDHbqCSZ2bY1rJutUQSFpKH7qeE2Yu",
  "key5": "VwcPP9ft2MEs3HUXTnZZs8xs1u2qbVwRe1eqVhFLhZiynh7XhTnYXm5aKUT2Ju7Bi8aPZr69swEHJr8QkJdEyyN",
  "key6": "3g83ySJwx8jviPy8s1kBjEg82U5uLyLLkMqWiMDyui9FXYNUbwgonJjUznDMfNkqB3fDfgkjNeuDXzUgJ1zWK3t9",
  "key7": "3RTefXjkU4fyuVkvSbwtGbEdSFpvGB6pcWta8rnSGXQgTFNWjpXCQGTvfmo6RGeQmuNTqyKb2Uito1Ckzuz5k3vD",
  "key8": "dk1cjCaEw1PgaNMcoYio377E3W43CrKqKUuSDyGBnAyYfWVtZejdTVs8pPK3jiaNt1eukErHZ58zKRkw66wNxJq",
  "key9": "3d9vVvPkNZXHEs3p4SWeJmPkEyWV4m3rVpViQvv88cFMHeeJXvYrsHGqFQWJiXk6KZUzDkbLG6NcWgsqSxeu3XSq",
  "key10": "3bhkzjSSu3mE4BQn9VyHdMT6F7pmqNxtuEBWTwSgjfc277obPUVbRspLxK4bquAnvkipokmghg9KDuG4sqYarcJm",
  "key11": "2SQr5RSHotJT3Gbfa57gjEwfKrePp9XgpCabVV1G2wieUvj3ppiYh8Krc7GChVcF9QRejJbsTqRBLeN6FtWiZmgo",
  "key12": "UZGxoMwqVoz1XGQNZAiMTY38nbmAQu1agTWbtgExZn1njAxot2dAzXP9ksxTFbTUzBmxKVpVEpMfveTJSn3pKDo",
  "key13": "351gq66be123Tcr9WUSPh91zA3mR6Z8e8tmMy6pPPAyyWipnMbhyhvrM7CYfgU8D3g3mQobeZzD5xKEKiTWYF7Da",
  "key14": "4fp6HwztReJmYLg4GmUQX3jwbBWMxXJTf5e31a5rtCGD76mHq4Ac9fpcpYLGAxiADCu6BGhcBi7FmGKTCo4rg218",
  "key15": "4HSP3w9MzTYMRgkM6fNB3k3PP96jWyTwcpdRANxaVxm784iWrNk493oHjsxfJ3aUwHPccAbbNwBMaDWdqFcDMY3h",
  "key16": "4Hctas27XqnQBFjLVb4CYPLTWQ3S8sYvsGKpsCfyE1AwxQYYM3NYQ9ocPeGQUFH5mSxT9e7Xcsakam27u6bmAoKM",
  "key17": "4HRc8UHQHBaCLQPBUhwvK9XuyCML2X9wFtwj8v6nXvtTzz18YjgfdZsEapXStwsd2wFY9L8Jamq2Dsd6KESyjVkA",
  "key18": "52sassraHm8WrLoLkQ4UKGLDkikhahcs9bTgiqZCyNEobnmVmirdDR8gNU4rw2QNsdY9MTvJzLyrdrkLFHfACRHE",
  "key19": "4tgqh4hFi6VSN7aiHFHb96EA2AVQ31uXV5WBx2MEZBbewQRRByKwKArucANQ91iFeLrTbVZQj6ymVvUqDrVy4ntu",
  "key20": "CgHurGPYkCaZykhTdaXU5VZo9hJrvDujXNhpjBA5wnkUMawKEJoUHnDnENpUD1txqC7hHwqNEN3x2LkGf1mhy6v",
  "key21": "3DPhmBznRJwF8iq9VF4W6fB3qzQNT6dDLvpPp3niansqyDwbYAcwqRphyWncF5JnUSA4MAg5qEUq7FbhfwXJxBX4",
  "key22": "27WnCSu3tWm5zuU5eBv21CYV5bWT2JwStLARz59tmK4wVHikRKY81TLfY3koQAgk2F4HCHjnBu5h3U8pZBUFgFZC",
  "key23": "4cRY9AT2bDRiRe3CT8fSMqZoehi8CeDJJr3dU5eckNMfxZ66aZ3NhtHaSzgZZabtBsBuHMsK5VdNruQSwRLs7DiA",
  "key24": "2bnFNdHttYxC7aR5GryNtNqEaXaQQyznxncodzjYc7qT9Qpgc8NeyZC432AvgutBrD8jaTy7Dh6YhavVKdLLvH9a",
  "key25": "4Etii7BLU2jVZScf5ihUGsGgGva3ewiDaNFRuvY6rwyQvj3iuHjxpuitoBMPTcb1GR72BS4NScH3rSeQT2NZPicg",
  "key26": "47zK8ajRMrWCv2A4BcG6wpvLkUFGDpqEnsNMddVqLX9rerubRG3vT3Crmeois7bpMexiU54PLCX3NaKBRJqxoeym",
  "key27": "2SCwh2ND6QddLdZmeyUmpkUsDtcRhJH3FiyLWZw1EcuwZkKDCzRW1WxWfSXva7Qb8fLwDDkt9Mfn2u4ZynyLj5RX",
  "key28": "2sdMkmX2gqSdH1U2cg91GV3cgc6G75LSBhCoHF9gd3zzUvi76uEWX7bGbbDbRPujixDEj9wZ4yzzsVrRaTT1mnSp",
  "key29": "3grZtY63pktztAtYrqpynDNKJ9h4eBwJ367UFNeTjrfcKQHuiEvM3yBQwJA7LkfmxMgBFKSv8tauPeSNvJoe62eP",
  "key30": "51SyZDNgNvj8nV4CUiVZj4Z33KgZhx6EZSbArMMREsLCDNzzoFwGpqbpM45r3EqMh5f194QDPNz7DsBUWx1e6fqD",
  "key31": "2iKRTExe8mtYrtxD6YGD55bcy6ReMrBdSQpZggE9TnkqAZPV2aUn7iyaVzYoiraFrJfah24Qo1V4ZmrxyRNgA64U",
  "key32": "4GR8HRG6ZRJekAzQdzibRBBQ2gzLDPYVbyBeT5UAMdb44Es3AGx4k43fZ8w15YkH912VAxEzjK1mwbHDGa3B9uMC",
  "key33": "UowkgFNfhVfXRX6dNfDykGSoSFKS14L8XzC4XYiy8mxEJtDsURNFHmqh7RrPGtxxr1Yf6graywGnJpnniU6XtB2",
  "key34": "65jrCkH3cfvP27RcWyopAyebg3J7i8R6vZ9WKcQ2qRbe3t5GkopkbgcS86rFxwHGiTra4ktALjC2XXe7Bh2A6JAC"
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

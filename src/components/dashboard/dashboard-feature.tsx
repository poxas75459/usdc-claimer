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
    "nE5a5uWqNcHu1fFtPQvevpesyg4Ei7751CGsccD5SowmT1KimwEUfy2TbGsqAGaJqVcFDm4gCFmRTY2xuN2UVjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xja2MTXbWJrHtxw55GVjNrCP8oL9X6g2hYDjZoRgZoqHfMM5utVcQPZBs2aaVe9gY7JRWPBbMUxB159dT57MsUf",
  "key1": "Tvwx5PoS2MNEjHyU7USbDQwu7jkerHFi9itdjDaaMJeRZVjK1kURaoQM9fQfafMqXM3NoZehZWs6uR4cCHJmaeU",
  "key2": "YE4AV4CfpMKP4RVgR38LATfqzBRcJASTkrBtArvwcDMpTrXpbQFyzHWLMtRzBTQH3XNUKM86jbCnV89MJivxKZa",
  "key3": "4UZLieshn2wW96GaT6vWtStiDHiGtaU3WfvLpyf1WHJUY4XBjaJ1xK8tRgeRNx2b9ZG6sbd1aXDPtSqa8oYbXopw",
  "key4": "3bVmQ3PfE8MKq4BQFUqs98JzQ6ssCekdxgb16aWU9tWE9BC4MukkjaMf5MYW3WBR4zn3ASYYSn99smpmBAGeB7QS",
  "key5": "2iTEgwX5q2rJtf3BFzic3SM2AYiNLMmgCy8q6rVNe8TXeWUvE5T9XLgeAje5D8T8SAWRm7sGoBrFLGRgZU1msJwP",
  "key6": "3hDfdk7T87Ta1CqmkmmHgkjf8TCQUn2vs9DRHKr4aWqY9SmWmmudMLruYcv5ZT2WT6ftuRYfD28CZxDEGrbhjA2r",
  "key7": "9zhobRcWHJTgNg3PDexfec17z13VWwkFq5cbd3oA3TFxLi4zcZu3oLyzW9EUV8SjLont3RML5h5jjLbRcWz9826",
  "key8": "En82uBncWGP6u7rF2y4Mg7fB9hPN4AtBSivxhfveXbbPC4LPAMM4BkbqKAmZDzMLQndCReFHr3qFJ1Cyp8WFbXh",
  "key9": "5GY5gU4NKVWcLPLVteyGZouh1WN5nrbxG8UCANXJQRfD3WwymytCFFeCDZEg1aRUB8syPYP4Ea4Dehwi26yhtMs8",
  "key10": "4vJZWAGVp9B9ToZmaczsN2He57HjU6yomHeYcwXpHo7NasRzvUb9SM2uuq9mPVjGYZvWQqdJXRcfS9n87LUpKthe",
  "key11": "5sBEmCHCFByhv77Y2dHeT6JxUmFAfsXfDQ4AfRssxwVXWX7n5wFpK3fZbPThQ9hGracoLZAsM9XuByaCZ5iEHc9h",
  "key12": "63f836Kth4MGfEejj54VJTpr6ZBH29aXGcqHuQPodanvwrKLSZARhhssEGUzQgSpNzDme9iZ4Sm7X8DpHW2Mgii1",
  "key13": "2Eju2EJf5mNPvfCGuM5nkPMYtMndDZNKrRWpJpXGdvK39hUiR4637eZodfgFB2CfvjKag9qTSdmPs7XahMNthkT4",
  "key14": "5gctAQwHDHaygmBx54ECFbDb5nJFgE4gSS2sqMWVmv4ckz8sTzhkwwLi8w3YmiLgJQeHv1N16LAdqmeAYDomZuQu",
  "key15": "3dN6JvFqTp8yTGgUHLWs3dCcrQXoBSBCDkKxJFBdbBTeTZFzwbgGd9uUaAiRApfcnuZkcKCw4n7xMmaZ2VTPYKGq",
  "key16": "4ba6K4h2qe1n3m7c8voe84XtJzoB1EeNpYRSLhrfpNzgffUGGtLQAPLUEmVWGMVnJB6LHT6spZk2xHEfza2m5hGZ",
  "key17": "Ca3hzLrn7kDUb2e9DmQYJDdEphNNRFiJfWqfTzAkRsSqw3Bp2Lk8SS35Hyj3waMgnCeLrgyWsRzy7piHJpc5gid",
  "key18": "3HiLcjFmrzRVNwiGtJnGPU4jeC7nTTACU7YwVuUnwcQ85DmaxwVDWQNa27brkXc2VehQhfYMfqw2f42h73A4GohH",
  "key19": "5AMgxiJ3rnmdY1vGjw344BvSS4FQyb1b9yjDtWZsxynBNEN96pP3BYYud5XRVkdRk9bFAuCC44yjB1ZmtYvxwfgv",
  "key20": "Hwwt4VZbpnLywUKRpa4pLi64zU9UCj4LGyuQ2SpoPyCn6cDSQ9ri53xyjpjDBVCv6zgTTaWme74eshapgLPS5hH",
  "key21": "3veYdfzUu3zRoJ959C5CvFVmStEbdZPrqbH6t8T5b1tbMFKHYk55vWx5fL3KaMRGRpx6d4d6QDk66Z5XWwSUSWkD",
  "key22": "wewXVFPwQtwiC5gzxNQZjbfqzwU8zD53A4cqdqijoGyRduRn8E3Hu2nAsCgSGr7Emii72xwF7XHR4JvTYxD9Syu",
  "key23": "2e8UeqiCU8uG34DnY8yaaqPNP1eDjiQSkKbQNyNtD1u4oNNUZsHCm9DRdUHqQLadYK6Nx1LhUdqrc7YzqW3os4e6",
  "key24": "48tr6zofs82Wdp12RCComM1vhiRDGfcAVk6efVMoh7rRSkgnRTLCJ5EDmRQdNABYCjjZ49JPtLMozKVpNR31eibN",
  "key25": "5SFKRzBkCtJQj5a4UR991vbP6zxUTT5iYjipkgvyB6QhWYsjZcKzoKH8Xq4kB55K3XB4Dmo2dqN9wvMTmohmgLvy",
  "key26": "3sXD99Pz663VArbNPQuucs32BKw7uK3uQxEwXwgfSdfamV1KZb4psge35hbSXsodFYhpnnE5Y52Fuj3my5agmprk",
  "key27": "2xPg1R1tdPseUJmkJtsRBjTec7UeDCZnVwYBunnj1mU88JFdQiQD8Mc1CW3fmvxhvnqLynPb3uxJNFKELXTV7HiB",
  "key28": "4fgrzrobL8CU3NRVLB9fHCBaW99eMNvmxc2caiXsvDjqsTqojgaCUX75sNMiqGEcs1ixnQ6nEvweFDKkpHFjBafs",
  "key29": "Kx18qno7exH2idAfkYxLmGhmjgjCT72cRv6EprToSMeypQ7qgXjdQSt79J7jSVwiKUecFnrVb2hQzY4wmmdiZLv",
  "key30": "2Fij9uZovosQ4DeFGxYL1qsNRgehv9J3KDKbAL4Gn7uHoWdyLJpXug7XrhtebYyckBCbTWQqrSHmC6wcSyCVoMBr",
  "key31": "2wiWcYAaNXKAqfTnhGUiqn6stfnuj22DZz3sgUyUnAAgvD4CHEU6tTFYb323eSx5ZtXfKFzZs7cavUjJhxiQM9BB",
  "key32": "3yGgXje6pyedTVtKRPKXrCbuQZNWYpRevopdYV9e7hjz1poHzma7dG2JSwSTHnqi4G4riHwg58GA5r7vu7MQJSik"
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

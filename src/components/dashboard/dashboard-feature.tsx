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
    "4dvHEfxdgN8cKQFwSJbAjjHnuP9Da3fnkptEaw6qyhGPZ28F8xcfsbwC9YaRirrRLyfprvrF3Xdb3FJaLXC3vDmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zugeaB8G3yawXtj6d5gbqRwe3yaVk6YGUETrqk53tMhgdZkdvERtpFsxwWff2YFvV2FmoLvJEM2wPxdwzAHkgQm",
  "key1": "petgx5ExYRQSkEia9LEPYGR7XSA3E28k4QzFe2c5BuQfsmMVDQ4fqoDyiZEZJB9PLiSXaKdwgQnnVwoEMkn277G",
  "key2": "2ksTZi23shgJqTehJkk54FV9aqzuTVoHqCCAFjXCqhVUNUVDzuLFtbcLE8bDYuQUv2Gsc5aEAW4uNKxE1nLFtyVf",
  "key3": "2vrygEw7ZyP3rcN32Rwcn5jmEUbQsQiURQ56cva3iGjBryzZWFXD1fYp1fcoYMvaYMcY9nSudQ3w2nRWJmPXAPdy",
  "key4": "23j7gzpChZbQMtynwaKE845mJGo6UXYh22csZWpAyeRYR59HMXZRXALD2vWaibjScFmRquWfyUuU8o6F53ruhDvx",
  "key5": "2aQ3FywSyZNSt7sJGNHzNCZxscVgc7LmGxf9Rnes2d5Bu2SFrwnWsBvSoXzZLY5pebSUdbdw4EMnkzz5xh2r813f",
  "key6": "2iW8Y7DA8E7t5dnn5qqxAAJXvSALM2S8F7XL8Sfj24j89LHawzAnyRCdCi7AyDJAyECXi1UNw1JMrbMDXY9Fbso1",
  "key7": "3TiTVQbLoooTs627g5QYBVBEZNw37J7JHPWLT7xjCCAMBfWLnAX6ZWPhdAEAovFCWa35FgefCfHXZTnPKw2WnYKs",
  "key8": "3Sq8dU9CkrSpxr3rJZfZjMoRw8z9w744osAKAMWzufAWsnqN2kgErRibavdc3Zb5jFiNuNJ4Dz7Gtq37R2RD3up",
  "key9": "3DCY8jFN1ojsPd4SmVrzvAdEwzuEQZFXA5GWjRhonokD4aAh46LhihtSAEQrwJd7oTTXVSnzKNn3XQxTVKEqYtGd",
  "key10": "3Nt9jLmCqoEKdfJChnPtXTg3okJyfcMkBgYd5UncMvsnfSVgaE1xWvMCrcWKoTHwMuDYCHvfirv2748z3HqHJFp",
  "key11": "5Q6m16wAN3WL5WYzgwa5geppFYjqbXrkEErTqyszvcCy98YiBSWhZDDeLLLMSgTJjPAeHAwgkUXd18yvLZpnSzqU",
  "key12": "4WjWKWtvfgkhcsQ4foujDBQQJTzXUXBR9bdayf9zmMxxPttmMTDhJmE7k59YqnsPAfbWwEzMJsuYs36YGvXKpZhZ",
  "key13": "5maZjRxe4yjmEBqRBb6DYXEeS7ApcPPV2uCtVW2rUGqq1ZD1uz5hPph6xq5pZchbXTTdSKSj57yVHWWoLNZbggdd",
  "key14": "2ZcxTPT6rMZLqXYKzs647utULeHHieY9dqoAShRMqa5QAfcBx3kptSkVU341aYCvjGUXpaVa4pfHdHCpbNbCbyhL",
  "key15": "4DK2eHyKD9kaW9X7RbuNSkphg6arYAcSdjaazdaThZRhXaXwMRACiAjhtfWpBjd4n7r91xriuFTpWJrsdeyR3A1w",
  "key16": "5Az4dUrGD12e7LjeryNEuYozpTirAQXkRDvU4WRFV8iBKc8sMMduzZG3VXuhyjEDRCvy7HHfbRndMmkSYsjVcDJy",
  "key17": "2QJdGjaVn3dBtypuQVr2pyN96ypdT4YEtD5sc2fUSsWSvik4yaWGm6ocbv4ssmvanqxEoJ7MWD5hzG3Nw2EzU7MX",
  "key18": "4H9jMGqaQ1NokFCMCfgDeyYUxxZ3qjrkELzFKJachtAuxWKsT4Rq68gZZjRiGNMbvfN6URTpF2mo4SHkDopt32kd",
  "key19": "4tAvRP3LWMnAK88fUdh5n8iBUHhsCmkEbivBf1WV45ZoSAGfJF4RZpJrPbiLSVRWUe1egDbx2xRu1VXAtzDdkv4a",
  "key20": "2E5a7AudpAey611QGCyLVwJ4nvZ5Hmj74JfpEeVqf57xZ6syZnpkACx1rSzcuooZWgDM3a7pKLLPGczviGkPnez3",
  "key21": "WmadnZuwoDJQ8Vqoycgyno2VA17XjgQWWbDXpHCQEHC7guTC8WgjEwgFQVDyUabtwHDkds14dNjhV2PrQs5GiwP",
  "key22": "9dpes5qWXG6sbMf2LF78ugvCPNYXEc1ATds94Y2Dhfyj4wDNymp6EvXH1EZA28NKExkw75WAfr6QXYrxYhsrHDb",
  "key23": "3B6o1W1N7VnX3BZDwmhnhrvvAn4AeAFxnGVwzmtZh137nsC8Z91iDrJRdcEqYXjGk76xKkcERWpY1KAgbBCcHTdX",
  "key24": "493dp3oyPXsLhgL9phM1A5mEG3qmr1uZp8DCwhu7Dg4ie7aPUwj9tofuMkSALzmHFniaDu87hq5oVAuGYRFYozhr",
  "key25": "4CnK53HWSRA7wXRs2em47MTBnEQAsLXE1M9jmpqPWtpkUxpSZNrh1wHsGj4qVJmdQQCZ7yat1Me6dtqx5Br1YdS5",
  "key26": "5KwS8cpsdu4cXEbGtS9BqSLsRDN3NXTSvUYu2SJpUiJzDV6LLFbust5T11dPbLt3KSy6mqxWT1nozmAMY7GJRqR6",
  "key27": "5kML4jSrVpavyNVkafu4U4tEQZyfCmbXTirbCwa5cE2S9mnJvsCxBXqCtVGzEqW2n1Bdyg4b8833r1ckCg8CLkUx",
  "key28": "5svCMpP1kZWfsyQoJ4qLuBezKnmHuRCxys2iqTxFCxmSVd7tqcTgeqZbyG6ybALY8qNFeWikiFNWnfZDaJMtiU6Y"
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

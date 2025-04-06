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
    "2HzaHk8FPkd2LCNNr1ZidqhhC3PRENBG2p2hKLh3fsk5NzVhGQbCGMU9rJJAB7emoGA4snmxxnn6YtJJimdx6icT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BiEnphiyaMBf3jfQPdeSzGz3L2xUbZ9eUPGeabQBFCFHkat4rVLHBDiPAah2BpYPfP5m4G7aR82KZqK7y3BqqMM",
  "key1": "2o5yAm8DKMmbYnEtQPMpgZXxhVcGzY27wMQB8x6BWMeCNLv63mCVnAm8R4uchJePcXgMiVqj2SdrB1od2VripDiu",
  "key2": "3QYYeVpWSN59g96yMwv7y18oXDr1H4tLwvX4o9J965CU7iCE5cNBwNAKH65PtzQB5GbunhYXg87dExESZB7RP3D",
  "key3": "4gL13yTGyWvr9azS7dDkXAdwxJbjQMv2z5n5QaN9xPqfJYzZoT6sWkuY3kcPTtX8WKyvzao2CnNz4dFr6ex9TVCx",
  "key4": "3exVCvcKURK8DAriqKAsdfqWyPBZRERN8hs3a3VTVK5ReBM3txwc3KFjfioMwAh3RMfGajXwAdSsv68WVY28ghJX",
  "key5": "4cvwqUX871NuvBbgiUhaUiLzZbjYx4V3YftSUtBPzafp3HUpj1gAMLAxvbJMnDWV8MWnpL1G8xFecskTBLf7biRi",
  "key6": "4mNptmFPD9o5pohQMaPorxGeBxmHz7pRq2i4Dug57PL8TiQf3wgT4mUDDixgVQ4FQZJnrHhAnMrMiU2qsiwoi7kb",
  "key7": "2w4gyAdFj1iBqJ8i3pu42J6EKQ5s2wWN3qC1pxJeCgN8twtEPjpCWkXYM54uPuVJ9SHtM4P8ocFbTVkdPsxP5nXT",
  "key8": "3VvzBquzqtAkfeby4wbajpaSdwULwPJdpnQZbdxGTXi7HPeB8SCnsVFsv2FCabbF7gf79wzKUJwJjM3um5TPFb3u",
  "key9": "EKc6gkFErgz3qHDqsSLbqUau582Xoi11oR4ksXpSBdJrNmPLRM1DAShf8fksMd84LNbpSsaZW7PyiLjA1ESa4Qp",
  "key10": "58HHBGw5qBECRfJqvUheTUiTYXHQSgky3S8gm2mz9bwCGYNHc6wT4WX9dRM8GP9TprpY8DBcewmDDXqMea2SjVq9",
  "key11": "4UeH3NRxJ6Q8Nd4vHSx3NDNfgvFD4vnCW4ATL5aCQ7zXuQJSzwL6dVWapMHNcmnL7LwnxqNvB1mdySamW9dAJN6D",
  "key12": "5MjbKi4NPdTC6DUpfVavxycikKcsgwhULn96bswodvxbjQC5cnThu7rrZg2yZi7SJiWnwrpv3cjHATEygKagKbuE",
  "key13": "2N84wa9MYZvvaUASrBT5kcMAnLg5Lt8uS69xhjCdzSNFeTHU2ke3ytbdyfMAzFKp2FYgjwbwmeZKR8Wfsjkaukv6",
  "key14": "5e1dG8u525yGHc7Vpq5tr7fbsw88s4UZkpyMQWvqxx8LfyvoFEULmG5YzCDw3ibDg8cAs7h3E2AXyDYWE1i3srzh",
  "key15": "5JEfWFtaZq8eBV4D5bvMY26P9DmquCNNGUZyuv9CWQB61v7MAH4hc9Ba3suAPu1aw2jmc7i9Er1c7DhGqbs2ZvSs",
  "key16": "bQUMsg7uBJ1MsHbpQZBhpnjxJrsX4zsb9RE7RX1qtUXHuLkPD2ocQRETkVnirvK2TgiWigAimHcCoKJjD3DNByH",
  "key17": "xsiSwBkDi8CsiyvrsLfibGhSzrhEpLh1Lo4uiKcXWKZ1GXnSuotHUpuVZ6oDkn77hC3nbWq9JoJCtD9m7tq5CHn",
  "key18": "24VkbiCYv6ap2BYzM1bKRHogVFYgYkHSyJ8pb4jCp5zTzJTDsp9ucykuZUijhrnCM59EWN3BCTLHAViVKzQitpLe",
  "key19": "3zpR9UybjapKDpR3XFCarT4ffzw1Ycth93k56xmg2JPs3cYLSgt1tWTtrAG3EqSkpLgSvNhWdseVQMKNLGZHq4Fq",
  "key20": "BVttUWqFkAzXduqHhvdScQJjvwDfnzkVfoMMcmvqGTQwnKaYkQ1F92wG1dNgZXksboTEq9NmzPKMpQQYaG1zKox",
  "key21": "CZWHtseg3HCgRdRwZ9MkYUBjHToim6zx5bZTdC8sJq425ziYP4PSffoXLGW8k1dofm9RUSfdSwuhBmPR6nrTvo3",
  "key22": "2zzajDdPkPLJrnrnHAJCJSKGPVyLxmxTGN2Ta1R94XXXfynWboNTCWkkUsQchM9wFL8yknTt47KAju8GKXaWk1Jg",
  "key23": "5adoyxy6sv8viqD3Sd9apw8p5ue72nEDhuhYqcTVJbxGtequMcmrN63uEMhdmjXBR25LdmVD1PPx46f8yJQ3zUCR",
  "key24": "cHvzkmqjRHidhpUQ63jNw9k4njZsdCRiEZX29D1aWxRJKFGNsTxnkQH5NsbYpppFKc8o61kqJxDtchUV8LcSiop",
  "key25": "4oFgmy6tvuk4L8GstkJVKX9yRbCuDGr8UWnh5Y8dTcjzcTiAhTiYEKTdxedx3HHGFsoiw8fMyQrc5h6RBeVFdpLT",
  "key26": "2J4wae8fQpr92LsxRHiG58kQUjuRUHqom1LWNRnnAbH7JUVpoxWvStTriYZ3tSnZj5wkvghuMXHCFaowXwFx45TA"
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

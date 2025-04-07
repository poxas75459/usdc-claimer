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
    "27dZAGhDDgNK8N49CdeyztUpY2AoEKXh4bB5y51d2pG6ne3LszUy5qUa2cF2euPmB7vX8JVrnSDbNspjapABh8gX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uLDvWXm29D77yc9T5CZi3GKu5HEsvVXFUf8LkrU9BwagFfA3cm437fQvgHw41v3QHsE3tCUn249jHrRwtGv59w3",
  "key1": "5cU54E9vwijSH1zNLvmXQntHxUsEyKbq81tuR3TvEop2HrfJ8wsm9gBPpTkLeKfby8Gwoe1KDkxP42rVYdj8EZvm",
  "key2": "4bATJQs5z9pXMD3GXu6N6nNb1oVnwEMnHh1U8h39hDfwQxxZ7sUnb4331ncuVAuAy3KPAyWQB5M6Z2sjgrikTSDX",
  "key3": "5SupxPNvj8yqfcK9bhe1v6x8NYizWFRbyw5ScbWqbJGh7yHDeBwGeVWLPtwxsc94y2AaBCMRBqY7L2XGRuAzTAP2",
  "key4": "3y6sk77boSHugB3WgnHNfZzPCpSD9uiMKu3MSvL2eSwJhdu1F5U9r9tJ1CdKfPEdGWT2LXMnrdYU3Ppa5uudxn5w",
  "key5": "2NNgu4eTMQvPD3HqV6tA4docKiV82i2QUGfNPLGzg6GXCXkZGwyszeNmRKjvL5qHMfkjynvh56i8cG7chNTcK9bZ",
  "key6": "5HcZixvBAJZ7Jp4tBSg1jdpohv5FU8QpMpukPCaSwfx8JqcbtJV4Ce7csT7KM8LbcMhVvF8osmHLEficQyN6QMHj",
  "key7": "7b81qnBX3qNhwWB66KNq7ADP16aFhmtF4bhwjLywCkPN8ekNUjekEv7dvss2UNhWvThTn9idkmHTvzrEXh9kACy",
  "key8": "z6TD76cjppkUSpd7SPcPuw1L8ffhwhdbYcRYyfaZ1VosJWFb352Gapm5tCxRQVwaURFgMKRJPSrHPywABKyiSkF",
  "key9": "2rHzT8WEPSiWKMdLpFenTF6gfnwTt6t7UnyHsHN2vBjt9uBSgCYfwpC5yBHjSw4eiNvAWrAmuafaWccUrPpUrH8V",
  "key10": "3NDFG82KjAf7Mea6ua867GWVz1gMdKB93EgEJFXH4q4YujjGE2uXNZhcDWvAd5KF7D9X7r2pCoL5zX97bCXgYJoZ",
  "key11": "4KdJPRX2Krc4HxxNZ4yu4YYaAQhsvSk1TfDg5uBgRikSTt3m8m2hMyadxmqJ7H3GgHcifpRug4cw6RK4CCxDxnM8",
  "key12": "5SbBGKUGzUVvnP56q2eh5Ms8fanmmaKqswWLSP2TnuVJotfjmQRB1arGV1eYYb1NVvFYv8uRS6P5w4CZKme2KAzC",
  "key13": "3EHZHabCfoTveXDPC8Qc58suKWF2Pm1GKv9zK2UYvjXyLefAp1uZ43DF9EGzr1RZrs4jvVoM7MVXGFVHKk6SRU8J",
  "key14": "5njvnQwC9ufur9YXS6ygjk6xNKGQkAVk6JASPSyjCpuhdfS9kU7sFYhJe7AgkAKJ85wzTcGVbWnjjvaziw91wkf7",
  "key15": "54atRnV7emtABhXSx5PkFK6iT9pXfCCFKhztCSDKg2pFYCcSzswjpUVGRDvRzTdh55No9zebBYyntTNPMhrQETmw",
  "key16": "MSgMBMexJ5qBLrfo76oaS5p2QnNpMpjjjqUdpTbBcLDewPZHPL8mKGRh4Q2Gk97exndxFmceb6msH9K4nLWGpbn",
  "key17": "VrKGFmqQ6zWKpXhJa3QzoGo3ams23Jhs1dfFWorhczi28pCkFRhwtvYUfeE9TyBNWLkcBR1iRnpK2HZmhGpNSq5",
  "key18": "4y9s933gKWbFxqK4riUCQD2JkWSsYB4qTrLDXYePCaogXuHthXZ4B8XbnmNn5B1FVFZ6inzdZrhfM7YKdJDFo8yW",
  "key19": "2LWw9FZrM63dD2ZqhZs4UBhxai1oPVXPkkoJBE5ruvkhqbib67sNgY2QChjzSAEaiMvm6tCFzNUkFbPERurqcvmv",
  "key20": "5qapQ178fwwS55dKTqUtgvJxhCnnoywTK9DGt3eAhMzftJRstr2Ma1QhGatkj8cL112uMgeeugJbhbi3ReMCnRpM",
  "key21": "LpE4xR313gNdBRAFYWUbehFFMJSGSNU5ue5arNgiL8cu9yYrj5qwmx2WVvzwrnEqUQxMHdNeKTwMDhbqNwLqsXR",
  "key22": "XDoxd7G2SNDitEbe8mucci1cira5HQSSZkc5zM6ZGMm8G7na2fpCRRJH2hCgukywdegtwNqgKf7sLRG7f8YvMep",
  "key23": "5wzdbqdwSY5q52DVMSKext7mTpRvq4EpmUih9R7iCYYJdyXtNJotYtCsJpXp3kAQhgG5hDmkStYC6C5MmVPsVJam",
  "key24": "3MKcG8t6PpptmoRKBp4VPV6k272GE57QZwLajczof8bZgn2DcMFuokNc7QkvJnqnw5JTePRzR7tEyrJ39RzveJ3w",
  "key25": "7MCe5JJTLsq5scfcYFg2eqmHwJjRY7tBjcd93943LVishkA4Kx7NV5zndAdugQ8aEoFmyieCC5pQYU2EAsqQ6BT",
  "key26": "3xvK1zwUkccjLRruRNLdXRYUgDV9eszP9urphwaSrFmFLPmCZDmuS95U8ymjHV6BCAx3uCHKnDHK28HcdKC5CHvw",
  "key27": "4t6BAx9KQKKZwgGkLoxG6f93RX179Lu5DuXTTrQb5K6xwQNPyBtDHHF5mWLReJ3UFcSijmNrpwndrftxJ4qxeneY",
  "key28": "5bnYmSNq92bw8B8hcWe38mDF25Qa1pJZA4TQo9gzMAPNwT9xBSXWBgWBm64uVNPXcGuKQkXxAHRmTxFKjSQ1ZhBH",
  "key29": "3hpZcgBzv9yq13zW5RN1WhcTzLn9dtmP7XKzCSKhaxX7XHvoLA3DZYeHkHYtqGRi8VpbnD343pRJ9bPGwHq7FifN",
  "key30": "2Df41kyN6Sf95yJgGPPoeGUrPvjGfDriFSivELb4mfF93tmX8jNkmBjZmSFthWCqRNijVtPg8HyC9EEc1G3vwqKj"
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

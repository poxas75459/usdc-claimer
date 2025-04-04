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
    "4B4N4GgFyfgdmweWCsiASJfBefABc3TjJAxyNV5S31vNB9gQPcZysdYE45T4HABh3qyS99ezyFH8gmT5bKdKM8ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qdb7XVk8FEaMg3P66MRy7hZ7Tg1gbRvV3GBQKfwnpT6mG2ACyaijQcFj2NHPwMkoz4SftZbX1zYZ91r2PbxoS2p",
  "key1": "3xvNKg43g5QGkPzDhERA6SuhHUKrDWP3KkQfBA86nJf8SH5z3V4qcJfo56LbdDdjkJW4538sJiXNE7jaxv2kqy4x",
  "key2": "jc5D5KqUgQsScCKNP7PyU8rP6fCxmPoiS9QjNyFZodTMjV78NexuEhVRwMmnrdNuSoxVAR4TLE6NCThApqMSYNj",
  "key3": "2HCKjefJYgBcpdwftAE13gtuSDMMHNsVEF7UJb9RNw8fhEseaB8B6Bm42CS4uq3EzsBqcGQNUNsiJtM8kGbttyuo",
  "key4": "4uwxm9fx3XNyjAjzMjyP8BNHEDMiG7dsKmEZ9t3APqFu914m33Q6bLBmWszFXTDqrYfUcWz5v2UYzq55EcB3BWJE",
  "key5": "5xeAMvfoz2ySZMkduJs5deqq3rGtgXRGHeRuZx5CjkU6yTo1nVjQNgV7ceiEdc3kynZme2iDLG2HQKTLVYFXQREU",
  "key6": "3TEe9xWztkNs6d3UXYMHSpsSqZB7Hr5zGDuLEYdd3MFtw7UGZZFS1NN23wuSszmf1NLcodhkp4cEZDYaPc49TJC9",
  "key7": "JvhZYcjtZD7TP448pgAjDtnmKLr8Bm2FPLFYZn1X2TiFkd7xfeCPpnzqw6t9u99vroo9tHXE5UmxdWnrJtn9YZz",
  "key8": "4vTHYqoDLB1e1BAQMSfhTK8jVQo3cn2xPhzYorunWQed3pQChJ1y3nnqeRvfh8UD2uRoZ5eyKAVbnL367G7rMHah",
  "key9": "HpawJij46U247PhKEpPgy5dTgasBZBmNTFarZkHdWhK5m4B6A5w5N2P5e5nknzM2fNzrskygYwsUkvSwBGNhk2b",
  "key10": "4rLUui7311CvNLvWYw3a7BGvsbP1kbDezjKaU2R5dVRuxjCd3CHJMnxr4q5cPvBJFvyoofYGku8v4dPE2fkYKAey",
  "key11": "6rE6f25pV85AnDrPWMkUt57UkFfnPiQxiFaNez4FsKXAD3sUexosekKNUNYLNgrfRSUkoG5sJ55GzNVpyR7YCSy",
  "key12": "5iA36SpmbLWvQiVZ5z37Nu5bFt7MBDxJSpkq8Jf65mHiarvur3pk9358ZqyWNdvXEwRBFRqJfcNTgNzcfKRF1wxv",
  "key13": "4UhE3FRVhBXHgsSduEYYMfaj6uQsmXNXeRuv1MBRFC5ifd5vNcE6jZS2wmVYG3YReDao8o1Euwzch3oXJU5aM9DQ",
  "key14": "5mDmiTLUir7vC7xyH6y7bqTpJN6WWnXfdbuBSStzeDD5PuRbvfWtPmP7sjc6S3Ri5UHcBqbqV8unYTYB6YPhtykc",
  "key15": "4massBZNNA3do2LWeVVQLqKFkAgaSgnY7eCSDFdwYAyVVAGYRnzZnKwLsRPDNRmpKBz2BuZnM2GAKkvYcpguhLG1",
  "key16": "3gArvxc3LQqV8d5S5vZaei15RXcbFfbaDhPf1u5LLx7wPHYHgfHdmDyr5kksDbnmT7PZbd2wQou7sfVSMgnJQs92",
  "key17": "21LbYeGkZbG6EPNuRevxGAEuebPfKdTAmjoqSX1ZwNEdcr911eas529gdb6e4rr8JC1V9G1Cx9oMfZex5xDa5dqJ",
  "key18": "2snFKFdrDQL19f6RCAdizRsbaB1ns2H9woJfCRzdvPq7aFhREzNyBM7su1RpKowridaepfmNn5WvPN2RNrePFdwB",
  "key19": "4mjmJM1X4Y33F9A27XVWgGf78EsCVGcht2v6wDhPxaiVzAgQxXw9EMGpwd7RnW8jqGz1ayuipf8T6yBxCyZ4yvjd",
  "key20": "FDeY9QW9L396xUyaNTN2TJQCa9Y29XAhHE69ocQgvnfoWZgRLQhbogGaBnkBufN88mGWG8emmZuWjdHhjZUTCHQ",
  "key21": "2jCvX5mW1Ka4M18jMeTJTXGyNvRyYtEGjgg5kFRxpaS5c9aaDjhU6J4rY84KAgQcwwqkZxupsTrjFNhLVqBR4RTh",
  "key22": "37SuiHDtm8HFsa8NGVGXF9HZJSYA2rnuYoBRm3n9FPQJJYxyug9nbkw2rMe2cvrf5avuCP4Cq1j56SkEjQHTN7Ck",
  "key23": "5LS1WruBC5se6vCLNkxx6QjYFZSvZZyQaMvznLtapLcemnXJyx9qoBQ8QuPpCwYMuV5HPW4bcfX9n1iLRS6giZjF",
  "key24": "2XQvAaeeUsd63mC8Gw8Jcf13wgqJwZ7cS5ZqEEDqxEqb5PdzkJHW13a9tLXgREA2Xkn3AkAERK92xTj4CdD9ufQi",
  "key25": "455uukzmorPFLFBQaSCiWz5523oZJzhgPUUNyDTC5fqrdb2Vmd97Qyxg3DUALA4KfCzc29btEMZrrHPNDdjd2VxH",
  "key26": "2fivsEJpCJXZjdjEzJRX8Rn7cGW4FVu3Hb3uQzUAhu5xWriHH6kWEC4XfRYYCdyqaCKScXETEu4dZ2hprHR1wgqy",
  "key27": "3yRShRn9DfdmwU65ievKF3pygZrGi2GgaToSfJAZFc3L9tqHWfgnMHPnWxemxA2MNspnMUVzoUBAJKBJjKSXgvQm",
  "key28": "5sAZzdhUfJdhX3CSKUU6qu1QSYs7XqhtDPyiRhe1VRTMZC6EaVMtuhzbJYAu1MRUscF61yaaPrz1yosvAZchQigj",
  "key29": "4HffvHjy7bFB8WFWEkoeLjdCximwQF2cSNHCQTz6qPSYoq2bWR4sPBNkrZaDDJkZoVqDL4YCKWQk323KrCjEYvCR",
  "key30": "2xtHt4aM3RWcaPdRZWHgDMcLpaxoDTDJssMsubr4pWcRtrBX8CTAZQycJBZtas4c8s9WkjpXVRBJFhEqnqz9NHFf",
  "key31": "2EueC3D17jfPHC4DcQs2AgjsutrQ768eoPxVFiqXCiyshvw4R7MscLF39MEG4T8oZfhD7MZ5a3XvEJZc8SgJ77pp"
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

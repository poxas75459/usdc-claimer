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
    "5SSLnEtrBiCuByR6anaKcdFk6bXPGPTTYnJW21C9bCuvcCmcvJsGBiaDkfaH3r87KG9kyDrNi6dky9QyvUBHEavT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LepqG4WTxrPwHbMyZPBTx941uHga6yRdwBVuqn4Zsh9rtqceoEGoMyvpewPMf2oQx2zBRAoTJy2HT1UToiVDqW",
  "key1": "2XikMiJqngZmauMjgsnPt2j454FKyxUnWPStofucEWgpU6eV1wRD3BY2uRmMnYBHcxGSNB9curauEjQC25JJa39J",
  "key2": "3zLrbJvQuoLzGSVfpv2yEL214jmka7qr2Au8V5JzxxkpGxz5VMncsVvDPcxAhJur24UQEFWVihZbchtGUqdcfcpv",
  "key3": "5aawZAfQsF6JUhEEqudUFSEnhus4fCWWGFNNdSjUQrYH4pw52Hnb2AzdGbFU9WrGknBVRMRNmwQAXNKJASfuP9td",
  "key4": "j7nV7MtZ3ZCZw6sT93jF3JDvFLSKpCqcjgyDvPnd7ywBpNoffShkxX6rBwtY6fwJPiPr7r3gRsY9oL2xM6rLAdm",
  "key5": "22j7z9UmtVUfqnvQoXY6a6fa8m158T7TDM2kbZkCSBwfzUVgsEo5tPdherL5oKEePBJaVPhXDSVWKHBFURBdU327",
  "key6": "5nKNDNpZUC7JcCWTUvJb9adCrQchv4D115okBoovnakqBXR15kAx5m6VmjoshGNz8hG89oPVcAgEV5GxivCiyPJ8",
  "key7": "3VbTLhUeb1ZL4kMpn8TuLynah5iwZRvogeRxnKZKR3AsVJJP57c6cswvCHsWJyQcqaaSsa3i8hqjZrUMG337hrY9",
  "key8": "xTWNjKFsY8J3rnZQ5WUYcSegZ7nxf2Y1J7hTPRYp8SnJcBNKZdVqdeYp3eqomwGEk7g63oBgsnnrzB9cd9dzwek",
  "key9": "5p186TPoXjoucTYEV3C3tsAwLk6XoLM7tW4AkcbSZFB8f2wMHfD372dyH92KskKs6xyAQNe2DXttjtcyhe92m8Gh",
  "key10": "4n97t86gf6wzKVPBA7GRY4Edynn3dsn1NNX68bbBJz7nuGh2X8wy4bFqDW1JottEDvg8SXZQWQi8DL8uVWxCDcAr",
  "key11": "vZqJJ5AQLseYp43qUviZ79DX9UHTcZpj1eku1FDCzywLC6aHhxv47HHsmfrzkL5Hg8pbnkzuq1Ngk2R78y3Y6f2",
  "key12": "62fM8xoPM3yvVbSkf9aF6skcqixvpbfB3tCGjpxGQGXTPpLaVE7bXBWkx6ySFizMx27NHH91aA69uTjf4tc1ZXfS",
  "key13": "4sFGRKFAmEnJUEP3CYxbHZs2ZTXE4fQCrym23Q92pP33wEpEJgfFE5pkVuNzL8pryXRiizHkAm8sNzjrKfKuNH6E",
  "key14": "4kzYtzf1NFvkFJ9YKs5vdEKAFNNYrYDjRfR1FdySpqHBeHU2vF7zyiwMRGEhK6Hbzcnce18LVYRudU6tiUB5qsHj",
  "key15": "2uiE9axrXigfsL485dhN9qMSC1mKzuUnmvMpZtdrxmQjvAsVRzttEkbE7xqfjHiW13odHiwNUmxDUiHXjRmjrk8y",
  "key16": "2EQBvLdeqjymV4AsWaVhfsJiywuvYA2p1uo271xe5yCMnvEjJUsxJnNKBi3pQg4hATFGTKkXYNzurqHZd9qfGkZw",
  "key17": "2rtA4bfq8FhufCDcWZ8VaBJdxWmgWd89ubLnkisSRSGbWi12NvgeNAbyqzBNMkA5fVHhxfws3Xyk7PKSQTh2tqGw",
  "key18": "5wm78hEKNy8y9JSqNnxYdKnCPA33ZT5C8CyBHr2AnMA6PXudjkQZHrE7EJ8QMjs2dpYN281h7aBK3cW6q5LgN2G7",
  "key19": "556cTjqfVs2YiAj2sGDaCHmJsX9qG8Ph4NRvhrgeQZZZAUEb39cTqitLs45cZhuLq8q1PEWmcQWiubtewaix34A9",
  "key20": "4S9YDREUDTBAPyf5J74DU4orBbHw2secVRC8JAXbcr2yM6tE5XouDKYpVZy9Fv79N5wSPrv2mv9CBD69fqQvF2cW",
  "key21": "2UWh8Edeuq8bc8SXuXnnRX48j2A8Ryjth5tWNfjbrKDJwDhXddWYH3vhqVtJMneP83q8mKxpVek9ff5hXGo1Ppws",
  "key22": "5DqFuCViUrc4RhYz7Bhtqho6eNKDhBBxdGAxy1sjU2P21dcqU19voej1PJ3Pev3mirRT5PujJqjVB2X6rfFRJPQQ",
  "key23": "3eWQPSybpe65pNQkGP7RjjKRv4ixTbiNrYs5HmRFwx2sc85sgC13VpoUVtXytqzZUcfE9Mf3ERNJ33ntYgdrYUYY",
  "key24": "MAhrQnQYUd6HySpVKP4FJgxXFYUVzVhz8mBy5F4TxMc2niBwK4MU2X2mfvBEyuxicnJjdJxUyQB8hzfDSG1Hmwd",
  "key25": "3xZoS78fTiYyVYrn31fMDQYpAmv5xir5TNGLwaod5SqgvcqgopJPL34Px4v5RSed61uAqRLMNLx1NgLwbtt76urr",
  "key26": "4jbFsowkSxHKwEoZSQYRSGyFwt1zs8fyNpf7zU4c3PxvchjSHfrHZ5zJr39jhWNCCWTaUUcwL8uFMzt4D4iZNxEg",
  "key27": "5nYxRToKNEf7unLGqFdb7UxifwxFwPep1qtViniLL4gsxX6rmJWLhM23vx4AhJ1QyvUn34KLpyVHDK2rGMjff3Sc",
  "key28": "mJPXtiseYPvWstRkA7Ur1d65dabY6mj6ZpvypLkiAvEF7CSNBLVvyZbgM7ii7oYozunstUKQ59UFFZsHJPZdKsh",
  "key29": "4MRyStUUzP4a5gA3XVPYaCZpNGBnzBv8Tyf9oXoCXKurnkGA7okJBgQAYMytyaK7cuih2ZMuyAmecGdCJNE5J6qN",
  "key30": "5T6iRJpkZKqmwdGsGGXXDbRbQkYTSxyfb8JSqpLG4TSDfvRPHBpAjQ3hZJNSFc7XkN7RnaE8exdXwiXaZYfV3fzQ",
  "key31": "5zYZm7XQju29diRsL6CDEk5skXdXQhb2B4gRFqzcR6i9UJxnBcgwxueufLqCkAArdfYps4oLwdfMhP4AMDhN3jLp",
  "key32": "26tv7yPu6oGmdvRSNxobPbjDTY5347v7Cy2pv4SWofXVmqvqMWBxDG29yjHbh9PEpZT2TRHUkgt7GEf1AGbtKdkx",
  "key33": "4Z6mUyYBX4zPE7Kf3rQhvQ2Gqarcwbk5SD41VefNefZAjTqM86TjaZdaHNXJVEnZjKxnWL3C5ncH3uEVaPrLT2WZ",
  "key34": "52JxvSQwtWQ5fThMca1KnMbRQWFHfGgbH29tkEBjj9e9St1zNzUGFKPhBLAd1Q2fMGc2dhJCwHwdeTj6ML8T5eXJ",
  "key35": "64RmYTnX3EmCBvYGz7JHS5Br9ArTrjXj8X1DSG38zVe3n8htjy2vTVgYJVpYEuTpAsSaqXCwssKwxTgz6pPMaMvQ",
  "key36": "CXTadL5um3yVUtqTRUABoXCBpKEQPMzrosqjD5qPbnfViGwXwEgdD8FkyRT2FD7UCKsMURg8jYAmicBmUh2d3zj",
  "key37": "4t8bRabjFagMzVjKAFvny21ieWw41is6L5W3P1ZyQnF1e3JXYF2D7eqVknbxoujYvxAdNYxivZ4brQer1smqoR4K",
  "key38": "5oNKJ4wsy1AYSmcAYYN7UfJWcMjRe5mMjCmVS3uKPdigd9LRTqWLJZDM4XCHP7jcqrDp9fSKsjKjrbZVF14HU2sJ"
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

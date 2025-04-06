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
    "4p7ALwzK6Qg5BBcGBrLJMHUubnGYtYMmDN7NWqHya3E71CD7E4YNYFdEJpPcyHzEAaFjQo5ubio9jFq4G43hC9ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1VdpEYw5L9W18fh5MJN9pQuVDcQaRjYT7pE5YGaXUmtEK5hNYbzWSAnDxaeVjb7B78fqcF1MQZ2AB1Ga2f7JV8",
  "key1": "gaB5A6sz9JcLcKKipyHGo6pVzRLWUssSDhsESoSMD26q7Fi8RsVLw4z8kQMoz4sdkoRJQ5EKELWB9CfGB9qxSEc",
  "key2": "2At6vNANwcp6qZQz6Bdz4Mje37duRq4oQAi8eoYib7TwbuJ8QtCocppuhz19iJ1CdxbdXLBWoDcUTteo5d8G3svC",
  "key3": "5BZcS5fMdMvTT24XSgnTyotZs9U9QFiEBiA1vRwr3LZfViv7cqKWNmCK96ZDWMbDUPaq7xtZqv7aHs9239h5y7MV",
  "key4": "5qfwMNmygTV1rmtZZmhFjkPj3RakHXSkSBAutcLjeKHe4RbeKgBwMcr5cjkvpETfvidVNDxPwQpBdvGhwhmMdvJX",
  "key5": "DELMNyjHoY48wLGBSbbd6KRah8nTP2RPobg5S6844vbmCUmPXctPh2YQxt5gjyzSTHU9dfenhFWXUZ2Y6Uydyms",
  "key6": "5mCunifNyTEEkkUPPdReDSpq6cYZ3g7LMgCgCLMnuMmFBKrh45swjb1iDXEEko5J8gUSLkED8euEobvjMCi8ZVvY",
  "key7": "4zbV7kdYKNEe9AzxYYGG2oFsyaSyCZu12s3TaR5saAUxbLh8FZcq9fu94okNt5Yjt3tyNeEc7XkWFNadfQi1GvR6",
  "key8": "2DPKwe7wwPqnfv7vYHxZUH5uvvxfRa28q7PhkiXtyTbeYttCTrd8BviboeS6KCSM7D2vmfWseYsq3RoCESPP2165",
  "key9": "64nhNN7P1fNx7swxaCD65dZnEg9tUxynnTkbu3duREfSbJXCcq5f976Pon9iANG2n9Dor8JcjiqMYpr6DGPBRnPs",
  "key10": "4dYsYUSjSzNayx5ZiibdA8EHVtpBVmyFuWx7zBrGAZq7YB5FVSTBSJFofyuF923DjGoKXcrSysSqKh3hbfma3jSy",
  "key11": "2Db4uNaZKhYGXniLK2ZgD23RdPDTPezKH3Kzd3uXh8kkbyDELeVVhrq4Ziuej7XqQJZbEzMtrnQnRi6XD34N2BJ1",
  "key12": "3CZeZX35Sjap5io1tC3nydo4shWA7hFGHmaMJnWCZaSV2ep7zFBEtvNbP8myuCpEL9GkJVyCX3nrMrfuDsQj9Rfz",
  "key13": "66akHRQhJy7RxW7Acm5Z9sXZ2Az7RMFTUGDLwoknqQwMdeV1dhqojSLAfo7dRjgo5ojcsG3BN3igNT6oNEMrQvvZ",
  "key14": "4XCAhEUR5fm8jVCRHFBeiiAymUz3ws8zc4W3PVS3YWzmktn6NffWvoGrFtTckQeNQWHH3qWWzwURZ8WVKmcnpqiW",
  "key15": "7CqdCGBpPn85GToisidUGCwqEtCph74WTpkUJJ5EfGHPJJtKa3ZbQgr7SMQLv4xVw7BPKSJ2NqSa1BRLdfBvx7n",
  "key16": "xkYmWBVMnGMmGpjrLW2G7VwzweKbwxV4C2FbmyRGq47jhuAiD34DXkppoVUeG7vqQ1JdkvKT3pFacD4KWfRDiJj",
  "key17": "3BjrthN9AgFPg22HjuEQgj71JZBMcQh9PAdPwB7THtSFu6ESF5aXJVynKyziretVMBKfjUUgVWNzD3z5GA3TPxsu",
  "key18": "3RmBihpVtkXkyTmkaiWke339kymk1366UsvmhapqRuTs1QDA8Zq9icAkr79Pyt2K5tP1MAYKLSGeNwFnXArxNKW4",
  "key19": "47UKVSZfxdba6c7XPGJXuJ7Trwrv6AbpD2wULVsAwWN65vcn3tJMb68Luv4PuYeACknjXTDyxJr2ytEBhw4Mo29b",
  "key20": "3PDTBScTTv57VcFGzuRzH6KJLEKrati1v47poF3GNjGsUsLRmjTN1WzaMhGBsCGePaFf7N5hYhKNKdJgS6ayiPpD",
  "key21": "3MHFiMd8YiP7SMY7uTR4WjgEgNGhSgHD4dE72H4dZdyGhrQs565cc39XRqPSMQQVnbhtEQoSz1iDV2u6jWLpRF4s",
  "key22": "3HQmq3KpENtDGJfNrPywFZ1H4S4V1HpJU8aaQk1MR1BottRoeotWEgBZvSU3c2cfG1iMYmdTLj23mKeKc6LrtULL",
  "key23": "3twoDVvJsbctNCmgiDt7efywmDBU2aW42VekTLRuYKBmfg2evhq39fKt1FmZ91BLP8qDU2mj5e2N2YEzLdNiCxbC",
  "key24": "i8HB1G6J3Q1ZjyVEaC6vxUCwUG33Xor48z7mKkQQMavucKXBWPuvKrTDStzmxhNuZiUezRFmzMPSNFYtUhRgLwA",
  "key25": "noYj2bPQPq5KnhkqrtGKPN8ifW9b44xEbJaZf5TVsDr9fhFYtLUeU2x7sQDNhyZsNx3VeYnFDDM3t4qUuMZEH69",
  "key26": "33ieGsGxaQBLkxT4B3vmDtX89YzTCBzEPwqNpxkVjVTE8M4oJhEq3GcTeGBXKXJLb8uT7hL9DsuVxHsMcDv4F2eE",
  "key27": "2XB4VHameBQTnFCed9faxZj7cpVYmzVZsYQ7SwHEhNJ91ma6zCJFQ5ZCKNnKaZtt5Ph9U27qiPiYNhmGTmQxXBgu",
  "key28": "3roMxJQsCnYK7KizWZpMYZyX18AhXKtLzQiU1XLfe24K7zDTZNFYWh5tq2UqmSvA27o2DACG6wHfTwCS4h5WTbvb",
  "key29": "5GbcGMVvo9LXHqwc8bUN9YK7LyQ9Tuxvs1f3Zkv7y4BUycbkU39i8SRRbog9hcTbJ6HUbY2RyLkcRsVEwgXCSicQ",
  "key30": "34uRxZ94mf9gPYH2xKQENE5kNSTmpVDYfuqRMtMJrhEd73H1eFM8YtZAGb4s2xsjQ4zAK89iq4XSkh6p4ix7kR3",
  "key31": "3UKfzb5wmedaFRXAs1phFuwGWVA2nX5e3ciwaY31iGQnZ1tCq53A9TTNVr2by8f5kwVNEcXyg8aNXWb5pAy9yPgD",
  "key32": "5H369L67vi6aMrq1NQoSciKqCkdMDgzQjEPGZj4VdyTxsvfiDL6nrqKz7jdx9NPjubGzbf1RUYVri5wE8Wwy92Qr",
  "key33": "38TFP1rCVrZF6usWBPJU6TKzKp9omtjWPBWTNhNT1ta6aAFViSS1RiFxcgrtk47cXuUEUWUd7X53nHboyYA5tp2Z",
  "key34": "5Msriat3QodUt4hHCC4ooLYZjoSyGTMqp4fHjx8mhBiyX3357EkLk8qeDuntxDkHNEsJAKUV5ckDbfwEdv9jbzyg",
  "key35": "43L7qsen7k7MPfneUxGUQ1NvCEi5jXzAy8gYTRk8FKQsWXPNwh2CYCdmSJsHdGW4ftUN5zRCjFAG4gAVUohg5qjG",
  "key36": "5KnU53jpcV6F4XLoJaPyWFMCuUQQEKHqMWT3D9wYo4jbNNCtSWpBb7wbDogJJ5VXKswu8YfDAX5Enc74uF3CRzdK",
  "key37": "53erfc7d7GMVNRL78eDzx8FxyCnZuScRykxeFGLFBpQLqRAACyQjuhX7pkHGKWeqBtjR7foh6i98Jxo8zF5qZi2s",
  "key38": "tE1VZtMwkSMk4jK3ri3jzX37yA1b3XrwThbByBcvAjgEDabJe3oG587T5GNsrfbSFLAspJ96Ji3aJ17UBfhSind"
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

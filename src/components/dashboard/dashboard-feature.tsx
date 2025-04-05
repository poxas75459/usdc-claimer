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
    "5zHcgrANdcJEzxznpfG5oRf2vSXkhaX9pEDz1gRhHJdm8dDB5V3d7Py6sEbnvLPgt6MtSsKJyEn68Y2ueXjEnjV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnGnZYYpBvJbMKBM93N6ErEi922oajW8zeGELb1A2Dx5mUAhzwhfp3i5vZ4B73ZanqeypGuveWmGs1Np3i1UL4K",
  "key1": "38xuAHMvSrsda25T9sgAipVNF63JwzvwCUf2augY9jkpki4PRTxpTgiMUcipbc29sfh4uDSPdXcuK3GFjVLo7qMH",
  "key2": "2SF9GQMR6vURDV74FD7wRgU7rYoftUw3iTNnzxqTQCnpTffoc1wpUnp6H9H2CerMoyNq7zWfu3Y1f2EHXyEmLwKX",
  "key3": "5smaMp6k9DjS7q719jHRY9XXQ1uHzp6GxbDQ65q5u2AHotEhHPMP21WTiVLEygKVTAHjJ1ViWRqBNMTGfSzwmCG1",
  "key4": "5FHNoNtJbBSDgWpX8UW24FrV5QCcYmgNtLuno6k7mqpjkZcwz5VszPtsmpriy911g1Cc1BF9bySJrSQHtxbeCLEw",
  "key5": "3L2GbE9chDiNBbwnY4McKCfv3DroSm6sMMiumzEy7tDkgsiaZBADkjev4mSo4ESybdy5XBnt92vk9yuV313Di7v1",
  "key6": "3Ymz2pRBv4v2yAoXjCkD97VABroHqoCgc7o7g7auqJgUXePmWLWp3mmD2kbtfsEcmDEhcPvPZnRbR8qvB3wTXw7K",
  "key7": "4nBmF66ic3398oyHakMmUWnn19ALXBoUvkoCB4nPx2ohxtXocAHFBjMwUb7Hwwxh6jVbAaLG2W93fhMx1KnGT58P",
  "key8": "KgaFXom8EdoCqyQ31tuf9SAzfbFHAZxpVE8sBEBKPdrdV9yReWzmra9Tj5nvjMkkCQPVRarrjzNy3BGiFLHgAbP",
  "key9": "87avCXpAD34XwRHVSzr15wta1PgPtivvk9pvNPpwVSX4QppiF8xerZCTRbaAFMutz7QvpUQrAeb84rmr66CGSEo",
  "key10": "5UsXpbMQ3vSaaht4bKBhmr4H7z9X1X6o8cbSspp54TSt5uZsh55dHdhATVm4tN3TdpukhMzxdnaDiB5r8ELdJpdF",
  "key11": "WtcNeCntMp9asZ1Dq4GiTootWktRzvKVivnUtfTBSoAXBpQVVrdihA4rqwF7CxiydkhSBevqC77T6QU6as5KUAe",
  "key12": "4STxFaDwgtnSpZyBqoCVmxWqZuo1HipGTiyq8Vh4ZoaprfgYuojCexMhmg3oAnwtvcJ821VQ2GCNDBVTR3aZeZg4",
  "key13": "4EcSy3jnuZE56CQwiYhRaxSC3FG9c5RyHL617zBgAvfU3FfdJnoVeepAwCiyb8L3q6m3EWAoXhQVRKGtq7UqxYRZ",
  "key14": "2AtXZoqGTziz8UTL5BQCEzV1KYXLTDkv6N3SVL2mg7DKPWEuLKPmg9wjN5DMnL7cistc3X4YpYkEkLLeujHBq8yB",
  "key15": "5KAxJito4eMi9855ePeFAZ8Mz8t1xe1HCvtRUpjKNsgkjMQKxr7286XzTv6JaEvyiPFpSmKpZMFoSR3D2vyTu6jj",
  "key16": "33yRSUoGQjEEyJaV1tx1AHZxzbGVebgf5fhDemRqf8tCGkinu8hjmomYfsZWm97JAoG83CXXkz3YwNBVWdrL4gxY",
  "key17": "3k3YcV2cLEdiRbn2af2ndDWMWDG4cekMT78fFF511qFCKMfAT4Wfynz7AUjN3XREg3usCXPFkD2EvcQSc6qZcQNF",
  "key18": "2YSGGYuZ4dSsg2iYxvjLH2CDYPDjrbjaYBFwqQ6mitTcLcvq4BaBuRK11imEC1vxihUD2snL3tikhw7rN6VCnyiV",
  "key19": "y5g7nm3YhEae7pNHvHDqdD4Pv5Y6rKfePvsQsERv4gadQMmVjqKL5Ev9Lz9o8kF6HLPo5kRcp13oDsjPMoAgMVE",
  "key20": "AkyJXjBBUuS5jVTtpREn24k5YiPyWTtMjzAbkN4tB7MZMK7C59eFDTKpepk6ZdghFaWG9zqgsfgWwE9GWfnFWqA",
  "key21": "3XdPk6ZVXMjmZQv3vd4A88cu8Zd4S9YDjJDwWsFtgiB7pn4a4vCgk9KTQCBcWV1kEkMDZELSNUwKfNMAdgM8o3eD",
  "key22": "4hYMEPstTEFuTGWeafuA9LjThd7auQKPAJWS8rTCSx39FFU87jXyE51EgcLawjeTHYdCUCqJ1VTfc5dkSGu4bx74",
  "key23": "3uQt18VHpw1uAbeguD8TSwMGBMi9qApmczCdcFmVAa61JnKEJQ6EKCuokSV5fNkukP93goarTzG5yuNaNC1SKLhZ",
  "key24": "39QT7eCs9111kjC6KGvFt3zJAc5CYa1xKwYprb6uw2fwNrzcES9DoUpGbGcqZRSp7SUwpfE1g5y3xTx6PqcqhfAT",
  "key25": "4G1gsiDe6wgxfBgqCnLysCW26atQYCRoZK4veT3K6d66uysoPKvfuZ2fAN7afsCVGvRn2yR3piCZyevpFYVwZuoc",
  "key26": "5s6KHtzCX3544hshHJewCjU3cn6YxUxjRxm4psQ3CNiXd8LaZfLoJdCPaKUH7hmxxSVidNzKTCfTiSUD7xkjBNku",
  "key27": "xud3xxtyLzSPqkfWaMpfcqytgxAm4pNE3urueewB4zRR3dRGgHjMMEWXwjmWzz8ZRSfzHh1dPPpwp6ZFxB4Z1bY",
  "key28": "2qJ9YnPe7fgsY1ovx6bDyEXxvHkZgNBFGNLw7G5W5xRaaSHDVyuwyQgJAGDMBQbutRv3PoukQWi4hNcZ96hAb7Ls",
  "key29": "61ELuLoBC95kupWmiZmHkykCcCTr83HxEKKn9RxZDLNYMQoEShwcBKdbVHmF5yTTPXQvQ7GA7BPtQLEPhWsF2HdR",
  "key30": "4NgvTALrB9hWyV6JeobAp2KPzV5y5wsLB1GsdcB9pghu9RH92g7XDFNSFPJK7vLAUpxbxmmnSfKaZ7VBDjMWC8c2",
  "key31": "4JuRUQi9oNABHVLcjytq5WX6H1dCvfANypANVhtn6PAZwfsKHigZ6BZcwWrBb87kXUqgrwZy7xvAFyKFTaKABBys",
  "key32": "3GuDCh9gimWYsWMwAWnzYHwhFX1TpuzKidEVnWRDB21sLQnd4MWq2msqt9ciaf4QeZgk9rGCAxeFXGXGix5KTcBy",
  "key33": "3d6b5tFv5Ty9rKR1NwGN45G9icjdRC3qrbXb64m48SjKQZMBsmYxbuAAeruKPD5ukEgKdv2Zo9tYmzdEtjtFhFx2",
  "key34": "2x4V3ieQ5jcJZpXjLxD6vjAWH42zLTopDpG78xb6if63hVmQuYhHvunFaLeMHHLHkqVfK3AiNyjzHCmGZSuBw1xB",
  "key35": "27HnyAdqx8ZJQkEjvu4DufZCNPVFeiruAxD3wqyjdguTJpEMdVy2iAQR4tZRrDCqBFZtbvCJPEa4Cw3FznJdSZZz",
  "key36": "2WDVM33ZgKxVekZFwQ7zbXdrwthzyJYZ8Ma83yiDRTgscvzANUYJbZG2T5Y77NHj5SCdEDnrueTBNA92cG6YeZ9N",
  "key37": "55FgNkNL9FLAJe3S9MvD4XEnYFecoh7jtibSVwrTZ1LFzE4EsBn796ztLvu1nM8z1vBtEPhQf5fdGMmecMvT8AgG",
  "key38": "ZA8CRkJLktto7LGHSVo7hEhJuAa8NiwjWe3yNuwf7PhTad7FHJTmvhpwrk8m9dPz8bmd43rDvoYYmb2TSKy4n3T",
  "key39": "krJk9skxAoQAT1yYBLqtaGLi1zUPanbMPnVEmq2c652T9g5w3JDXab2bUu8DSXFHwbLzXjeGH6WqQPdtbCUj6A3",
  "key40": "25873VgBAQWnt2rtH78JPfomze3c7ZzqmoVePf7VqFnZVsUez3X1kc64GtWoBJBKQgvyCBcZC11wKFbC2D7wfR9m",
  "key41": "KeWs5teKDB7QYHfhwddKLEWWfXMtuWW1D5X2G4xNjxYLXozuh128dVrJdzwp6TWKQQh75PT5tvQJtZDghzK4NRu",
  "key42": "4Us1DRM51jWfsxVvA1DSLSNz2N3bqmcfVeA1fS7VbvJgkU1BAdb9hqcE3qGsdSvbtwFFU6GjnzyGfSsXyQ4uNLRG",
  "key43": "31kBQcuuurZQUQFXPvQQVzuces8CNT8PkTEJBKWHTDaticDbd5VmCRcXzVqnsW71sbA8dvNEYsFjS6snCQ4CFVG3"
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

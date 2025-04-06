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
    "kM8JNWjUTHRHLrfXPdGegFdgRehxpEmf5snqQ7xwatN8dEfbA9Prk43P18Pai8HEtvRyYQjswW3hEHg7BoGJwnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EhseQMnGGC5qhrGTcvYFqKy4wjx56THoyQL9DbCSdihuMwN3cKWREAjDzrXfb8YPskkqu1vvhT8C8JnY4q9StBe",
  "key1": "5WSsKz8dxGaeHbnDLXKz7qwLgsKKPdw9kE6WhDjKmm7DDEZdSRkzWg646Tv232BhTF5Ajpc4M9f6BybDWE5TrGiF",
  "key2": "2h9tUXbk9psrcYWk1AyuJfEctxc4MspuVsnEkuxHtFNM7DDUxYVXA2d2NbmL6eEeRmLWL528hrabRTiSiV5StzAg",
  "key3": "4tPLBQSMwSgYjs1ZaNFw6jgE5JdJkvkNNknkmKT99nsjHyXc4v322HKtRLHThUXZ8LvS7rfRbXnMJGeE9e5w7BnH",
  "key4": "3fycvQZM7vyDfHRbn7BfMGF4fKf98zYoF4uF4YEHLTVQ9bpgrHJLjgiG4CyW3jSc8KgdbQoXX7gV929eoGQNn2Ru",
  "key5": "3GVHxWg2P9zB2CfEtRAqEyH3FRVbJU4GR4TzUSNwAKGeb4HeBqW83FLBf1ghAGTgiNdoHFgFNgg9rtR1tb21Eh9T",
  "key6": "44asVDuWgMXrKwEqioSQTU9aNsA211g9WpcL67mL3AuGAGNt7UCH4RgsdDceB4iSrVtNoxDxtEUnmyzWw6tfZ79G",
  "key7": "5N7951cprjjfTV6oYNuDziAyjC7Lwct5dRDw2Mr4rdmwniNiB1KVzwovieZBbBYCN99bZmKpyKCPBjyned5wyf7g",
  "key8": "nMeHzDoGn33SD6Jyf7nUPcvHDArUUbVcs7viKBUTYo1BFhwuxWcynARkQg5U5v54mpPGfYb6St4oJAmqeKG39BF",
  "key9": "xTNyJNt5dt65S6Yv8TtP49Fqg9GNuii9iarTYmLRcXzPKfTZiTBj7HFwyTFNqxLTCmcM2VMf5i1tjcY1gofxkRg",
  "key10": "37PXd6nrgdf2hcsfEe1TFR22Qv69HMCgHs9bBeQnDwgyQsGvL8Urrc4cNTwaYM3dX4pbVdW68CV9ZYK1yybqJm4b",
  "key11": "V8C8eQ6GLK8uKgFgmSeVhwxereUepS5h159ce7mRC8j3ZLY1pqYWZ72UjVAf1eLXPCQAfxkmeYhdKMpn6jZd2nj",
  "key12": "ZcDhdjXN1CrUzo4BGvCxi2B2RJbVnUrgagG1MtoMxU57iv7XNFiUQB98AJNS6ddPwnbfpX5BAiL2iKTKhkHS7HZ",
  "key13": "59yTYnDwX2P5Htqmk4vdAhrTyiAmSEc2YtdkGdrDNvzVPUmohdnVWiuAHErKoopgVmNham69HrMAJYE79NF4WkwU",
  "key14": "49oyqV9yt3FRM5zRt2nU1CE7G7HoxukU9G6zB9L31N5SpC9ezNx8wquUqZurUKagABXoqAAPrFrvNHBd9zekqdWj",
  "key15": "4Acgu3BniD8b1yEnu7rcb4EySW5UQkLp9doaGreJScSa1WCjyPw4UrE4EPWfggLCCZZXf5BmSXCWC8Dj2RY3ECGH",
  "key16": "5iqWH9LZXAUHfny2bi77TuxUjTGExy3J3aSqqSWqg4cbbMPgnZvMchUkCB6ZXmRMvdB63kr5zUKcjyBQoGkCgsm1",
  "key17": "3sFNTTe4uSrChnsbd2FP93Ugoz2BL3o4FG4QCFmVnui27yKAZWecmpRrsF5vbJFecUkYGk3A2biyWgtfeerPebFx",
  "key18": "4vPLBsGNwm2bkv7rP3LrcmHLeibwDvbp5J16f7t8fWk7sZra9rrWJN7GBfPDrF4fTGQfh4FuPeG3Ykbd8nRm7WAw",
  "key19": "PRBLqnf7jsU61ysyPGZkDCaiHLKs3NxqXxEL2DrYqL3KQE67GRXB2x72Mo2SUm3AUGUG35Nt8evewaS4UpM3CBi",
  "key20": "586Dn967XxvEJikr5qteFCNKKdCqmUDUN97ckfYnXF8qaKE41dMyFoydN1JHBVZ81XB3NsaHw8RDeVkJfmFLJrxj",
  "key21": "2KW7ESuXC1kXjnpKvNQC8gcdAFAXX7cCPHT5dkBMWwL5ZfXKcqK48RYmtGbScY3ihsWckx1ZWGnnYrj2j1wux9os",
  "key22": "4ndawFkLgKLGPi2PKTF7kNKv4HkeH4QgjDQ4CxMAfWQHNXEHzJAfAATExZwgLbR9LymjzqVnJGyQSxBGotcEscTh",
  "key23": "ywT4AA9pGSN3hYNif6JNZzTjHhkwsHuPZufRnos1afSUDNpDoYhpoVixkWdMLoGtN95XeWt5ojygWDDJFeeSUEB",
  "key24": "51TMVBsZC55sDZjiNuQzWtnBiJ8eRq2jjt7vYUuutE1EbJq1789DMVFBUEeJTc6RCd6ajr4RRoHU5L4CfpT2dwCB",
  "key25": "2fD7DrnToQoCBJGntPNvNL8BzEAY2SUFsnvxmqVuPtxwkKPfbqwXi9eQXEajHehKTietTJ82njb8UthcZR2VVvCS",
  "key26": "5shAGgL8zAj7juNB3gY124CETkjsGQMNu9s6vNvh5VNL2YnM3NwTezsnuKgHKrr7kgXa3GgzAXRm2YoF5h66W7LA",
  "key27": "65E7sYgxc9vAmaY95jmK9qcwKd9H3UmALiF6KTRuU3MXNFfX4g5JMZE5UH58bXULzycC2kef31BeCSpo6hq6PcvM",
  "key28": "23y9rD1EMpH9fRuEYrrV9xzmTAoNM6nrV2SjLHkdas1aiV6egspUokhAi6ZHionN7E62y9Xypf3JZVQJh1a54ZKa",
  "key29": "5zURrWbbyzMJTc6oaN5KpMJT4S9Jg7y42fPqnTLd2eCtChjuDF1EgfEgYqnGLYi18Yi2aM2KzAXT1p64gnbDDbHs",
  "key30": "CANUXvL5pKXTSsBSND2iVBc2PSWy5nKrjUCidaaq99VPL2uN2MT5vQQPsruXiEiLsZ7Xhr6TMXLk5pvEaia9hvo",
  "key31": "3kuGigvDQL4ZUXp8DWzCLqmK2T78j89HUtjiFkTScY2zEMwz29wUzkS3HT9KTuaN2cqDQ3j5UyZQuTwYoARFvkEH",
  "key32": "2Dq1WAii7Q57wv85oQrgxDobTSyJ7HV4n5HF13NNnZyc5ratu9PMM6B4VK6E7LLJv8Ve5i81fokSgkuTrbyReJRV",
  "key33": "3SsEturZt15i81cX2hh9PvqSVxSWeDqSrwC5NYtse3jQ4D2KBQVXoJe7nNqs9ZBBRUNrowmoetb5kTCtC9WBkHFq",
  "key34": "5yRr63VEVtsXYLADgiVvWRFMhYFb9tp98Uy87UpVxpiVjAosKwMc9R5M2DCVyeHaAMFhy76xRriW3Q74HGQFg9PY",
  "key35": "2q1hPhNEFygaMadWp5emQhoc5hNAY79bQh6fae5iLFkXe4hAkNRkZD4FXmFFWBMdBvMfN7CdRqkdtcdLZeHo5AqL",
  "key36": "5AXo84hoBR8PKzWWhZDg9abrRBp1ktbtuf7aJqHCnWrq5Mk1MhjCq7nebF7eh6tkUE7APJK13kbq7rkAcNrqjfs1",
  "key37": "5LUaAncU5TwtmrmiWZUyA7oMQWgJw82frrxDEhT9VnStqT4gVRzUFV3Zysxp9h16oL7gtykNDPSVxSGw2xGF2Y4Y",
  "key38": "2ku6dLHK8HCt2fs36hTccjvjib386pQzaJGCCrZ5kkgS3VjkZRDctrG7Ax1U2Y3E9HbgfD8KJQFgSqTdA49esT9w"
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

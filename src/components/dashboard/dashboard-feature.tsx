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
    "pih8HJAWGuxzNfc9zGb4uxfnPkakWv18xNiFaDyxdAkdJk9p24SY2Jcsc5H4caCNiJm7rRgmsGN86GoVHPC9kux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poXw2hep8jQ8vmRCxChjxJeDnJMgVikDHNL7esrfN8vdYu4YabVHfjw8RzHKXnQSqgC1vBy2cfia4Ftxzsrm3Yp",
  "key1": "36u6ZfJEuKaknF39gughJQSZPp7Zs4j2psxBc7yXAFT9tnapKWTroEQZEyNdkixKQogDS7w1pFfA3cbDBrxocZmv",
  "key2": "35t91gS8LzhhwQbS63TwuPkoAmY9RQG8xE65AgJRttM5WeQv7TwfLh1DgnPbXAWetGSsE7dzf8G5XgBiPu9Usbd4",
  "key3": "jpdiJJ7i28n6tuRiJ7CCQ7L9YhR59YXR2YBYBGLZRsTq4bvzxYDtSAR2JJFJhQN15KkWkXNLJrf7dkgiQEHmRXf",
  "key4": "5CfL1uAQhtzXNWmnw1ZzU7eXcq5JQz4fDPdvUzSxg2JiKdG4ev1hr4UN4UGBGj3ewce7iXYsYXPvbRs45Bvf7JdT",
  "key5": "5Htx4PfyXhyTSynBcHWuXVNgiQWvcLwA1H9J6wN4ccTtD8SjNgiLGPLDQ7KEDFemU714ss8wjNy26PJ68GsLCa96",
  "key6": "4pmQJ7E37sSLNrT4wmvb78d5PGgL81w9bxVKiQ47SERopdQZtDN4JGJJgJuuCXE41EvoZpHgvtS2RqpLdBLm74W4",
  "key7": "3XEqqWftr47k2hVs2wwWTvkSdzUKL6dPY31S7grREAJLiJ2MxKFC1azPXPpMyvAvUi8ukThb3zajL9eam6cTh62N",
  "key8": "5jURMBRiRW77tKqoaJPecz1iJdzj4SYd76HuUjmEJ7dd6oDk8JqTyjXfkJBtP21P285xTMBPv65KnPHpcVfMXaXz",
  "key9": "MY3k6crHPiTLGD681kYuXFcyquMcG2kbfd8AnMYZ9qfw3CbU83hDNVGGEYEd7ivaGQYd8x1m73CA3mYSkpCjnrT",
  "key10": "4wQeLYFvhoiVdJz3o7RNf34NajLih9re7EYB6hJuBbed4dJA6MENP5HeovHRZRMWA2zmHBTfAC1xh42H5JA3eCSG",
  "key11": "3AAVsNQEAxC9BaDTZM4f9TibdLDZTJ2n2JdT2aefdbANug4XE2JBkUzRNB3UbdxJVvaNeqJUMMaWJjyHcG1JKfrZ",
  "key12": "4hScH2nLgT9q1hLuon1wN38RzdcRChcp8cMdHDcGjksBxGJTLZUaq7CnLYB2cQBY2YfxJ1YUVRgxoAWXcA4PmCmG",
  "key13": "4TeqgtSLHMPzs5qy3z7qXeVWscekGpdhvGwhGVgDSFeYzKvpnKdxuioGbya3b9LCZsfn2K2YhZfiWeiMpFcuNa7T",
  "key14": "3raAB9H3GXAfPQs5o4fvTvBtiubRFnTqY4TqrdCXTsA4qarurwG6ZA5RqFTvEMr8KNsAxBkWtJxBWSdc3L1WhGPg",
  "key15": "2kM3jHXhXzijyCQ6mTY9Juirb6xZH5sL1cNjtma48Ao8RwB7pEpChfm67wkgspiJ1ssoDAiiQ1seSP56eABnsU86",
  "key16": "28p8jue1nXawZNAikZPxciKs4TXcTrzrDDUC9nUKbs6v9qfiL2N1UUsGfW9cYg14PA2vw2sBtR9HH4aWSRDVARn9",
  "key17": "4inHYc8fNLZFvLiQQwcVs5HoTgSjJ5j2uH6SJSJLoSQy7vUwuCUVdGWmkCp3MyoY9ueteKekaHG3HgnRFDeNg7zV",
  "key18": "3Gf27fQUaD8Vr85bvNdincrPHFcrjwQWpqvijYrdEYqmMQvAm68ZKSYUaLv15BrB1UeQommMpYfWLZcsRFrZfLh3",
  "key19": "231CWjFFd7hQkFKkQHXeAfsmw2KgJ3zMFyMwC1N3KqJD845kSmhSXEnz8k15BftESnhFfg2w8LycmdgkVGy9Jf9M",
  "key20": "3JmFur55mMMSiqSMMqJe4RJTUrw64C59EJ6GPZFrc1ceH3B3dLkHt7fYthEjZxojpP93tyjkbqmC5B8W4VmyC5vW",
  "key21": "4Pc9wgXf5xgQj78cvbpDLruuwwairGi3iDbaQiRXAxkNQKE6iMHGwcj7xTDWj2H4m9BtLY9whm87NfREmbyDEd27",
  "key22": "2ZaZXrmiNqa8uJFTmmGuNQyME2qnFfVa5VrKsUrdjDhsvcb4JSU4okjr9pxLzuTDAvhqYFaNxGLqXVFhiFcXVPd9",
  "key23": "6eLVBZknQtD7JxDAoCgouNa94W1Dq2RbtEVZsJEouxu6V8NP2n6ACm4BpPLLA3s9A7d8KH2XN9VeMsP3Yjf6sJ6",
  "key24": "3cdpiYaff3exD6NZf5VjpamfsnpKFhBH2hYComJMfVpdF5WTV3dQ2S3uNvdVGPcetCpffLcKWqEoTx38rJZmBv4f",
  "key25": "MUbEu2AaTJ6fg4Ptz44XnLnk8z6Ho7CjZPJaFC57itGmkFzT276SuSsfUqYWF5y7vyCGmvj2pRdPexacL2eVXc3",
  "key26": "41QN2r1EU8rzB3PNZ24UES9w8KchAsbdF6ftyu43QS6TgaR8B6PY3Sf1ZaiNnWuQJYmWycWQK2vxjo31Jka4uNtt",
  "key27": "5VrZy7UepmbCjAo8dMLJMPwjGXM8MDniaVCjBq4T85xtKik58wcxqGmuywkhrgApiHknk9ELuDU8aazK1svGd9mp"
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

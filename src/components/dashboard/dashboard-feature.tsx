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
    "3e6hy1LM3i2gfB8MLqM4BBztdAP1gXwLCxQJkvFUEcsa7x5BQSg9XExMQeke4PC9QkThrsN31HcgBTopqhgcufM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fmaD5UGAbgCXfRRnZ3amcUCsrpTB1JBdR8hk5vgtM6AWy9ZeGiS8VgUCdP6QhBpjJ6QqwJDyvANYGhLkv8o8Bag",
  "key1": "2F3UNQ4shfrMu1UmHU8rhY2Zeb23rwRcj3E2pS36ihteJYav9RUoLffNtHXUsvTsicUfwRcGdw8gtQ2yLQCPrgLG",
  "key2": "4v7GYEYobBVmgSrGzQAiVsCywSsQCW4qbGrzsRqXFvieGyxQEptAM6vmJ9pznMygEDzncUMhj5UaJ8LJsPJAS1mN",
  "key3": "3DXTA3E3MZP92V1zVTuKuYeKvFApBPbcGHbsHhdcFQ6246e7MLqUbY2bdhKMq9sFJVvqxXf4YsHiBK2bokNMuLnu",
  "key4": "4kPCR9DEazV5Lyr7TXhdyjGdyC5mzwz6PUZgFV3SaZdwtqxGmC76pZkVnoNt5LQSa5HeKRkZhWL5KGAoJLffxfxg",
  "key5": "4bWbdQAdxBReNEL4UsN8EoZLGYCmVYYvs8zQvZfFzgmPufXMk2RFiVfPc9JdeXmPUbvgyB8H5mzq2pDDM1dtfVQA",
  "key6": "5W6FqoFmUr4YQiV8RiDHRWZtL7c9d8gq5JR5jkb485V1M4e2CLD97ECwfXB2w5FmsD9bjyAQUkWR48PhrjPi3JxF",
  "key7": "35vjMdK8Eayqri9bXAs3rnbJQMndi5nbPJA6aCgJjrgJNbvcL4MxV6cuiN2F5xKZW2saJwXA2jQPNSyswg4MTHCm",
  "key8": "2NVtrdztYX8BKYXZFbCGJWTwfYvnoo7uJasaEXQ1bRGLUhiq6pj4iwfqyEqBErV61iLme2nCTuY44vFJGiQnVYak",
  "key9": "3Q5ky8q2J85xe7M7U6KcPaoKmHPyB2JM7ecK2f78mBuft4oZnNfWpBcm17jw4c4XJrq3s6KmgujgUGaMh5a8UHXc",
  "key10": "pRVvD8KjmoFHJa9RZStULosfwuLV3AuJ5snQpBegsUxGmDEvswkr774RvyvXZJ21Gvxbf4YeRgobkbLqbBbCBvz",
  "key11": "5HKnn4XrrnSuVaodsCPEED1uu74jDMoeMrUo5HFKrsHsoggs7qLsw2J2zfjFznvo2XqoJ9DFNhpkSHUj3RWkdsER",
  "key12": "4yYqKnGRWbypECrY2tqN26oaj9C1RmYWLSrXpaW7HtBdnokHw9N9WipmNH9mPrr85meHDMb2w7Voq3DMiymGDpWk",
  "key13": "2U1wzQeemSmhSDr5FHyJ6663Jm2t3EzwboiXM3cZbi69sWk7mdJzFkLjFMdD7voxHzxUsnhEGx2EakUTQTYinss6",
  "key14": "2wVdpjsr1q2UqBipnAzLq7NgrYyAm7SQzozyKuDsmA7DSfoThxM4956Nmr9dfKsZSCZ75ifxknNPVyLjQhZB4AX6",
  "key15": "VEFNVcz56XTNKso5aBsTF3qp9JVSRBn5GB8HBbQ4D6uGuuVBbLJvVvaHukpf6KUmWLYc8pkgb2EyoXeVdn6BNV5",
  "key16": "tz7XqSb498WrjWGrrVVBU5NQRV3YcaAX3KXrkWSZmAJ2hG6FFW8sE6oe8iNAvn5Qt5PwuGP8CTFqx2Rei5SD8X3",
  "key17": "2v7BPAwfswnMXM43ZGeHhnqMJjhihwD2xZT31VDY5i1PvWHcupGoUbAUw7boCL3qH64xZFRUfjB8U5hki6Dze8De",
  "key18": "5efmntAoreLTre6du27HKfDHBYXhRUfE1JJB1EXChmXKrNp1AhYizCG56B9vnidLJ3dgsTAMpMFxFQoLbNxni4Db",
  "key19": "4YPQw1q2o7i3UxdRfV6FrkNzwtgkmmEAXLV9aXytZZtaMxS4CcAy4Pr2oShJ8DkBB4bpypFtoF2amz9RkxXSzRPt",
  "key20": "kbtskr1CAFhaZSXD6QDjnhfFpZvK6nC6hfNshEmz9K1RdyrMQfzXRfSxtEyvDsJL7mRh2ZGC3BBSsSjgQXSxRzK",
  "key21": "2Q8dsK5ho8P4fPLgJ2tGzvJZzuTSuyG84D1KNZGsMQVCEPAKZpBdXeZz783u9P6s6ydvuMycgKQc9WxrW88yTGvH",
  "key22": "4yfWfHpATix9QQ1o23DkGEaEZae7zasuVBc5gjqd7mMjHwGwLgeianMG7GtS94ec2h7sYY6WZeGD21mdwvtAshvk",
  "key23": "hixdwZ6a2Dvd3FU3adyhWwTv6pwT1LKb81rsA7xrpz7rEZGr9A8BoNZXESYqXyqE5VhDDgxXT39jDGV9Wwxxneu",
  "key24": "4TqRHkjew5g4khZKKNGsE7Ns3Kxwe1M8cRsL95P5nHA2bMneqWNN1NFBCesanfFxN2Z3qDjvdJXZezMVryMeGDNH"
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

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
    "3HJ2UB4ygeAPVt3vsS5DBUi3Xdc4rFeH8R9mAKSBPsUTSp8WduEaT6R4qAbnapXpfBD1DroPoa1kobmDmg3Vx3oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kfe9RsXpxRjJwyVz6wKiQwRVVyRcQ5MmskpZvxD6zcayVZVEStEuq5fhrTVXYtd1TmQdcWr52J15e72fzffWouB",
  "key1": "2ULQgBSz6tNA8YdWuE1ceXpNdrXCWkADLqXcDDmXrMfgZCxR7w8PW9dqp13BojkFqyS9Bb72UAyYYHcMpeuRHyoK",
  "key2": "5d1NFSekFXsE8hYE9fSMub56aT2sFLE9g8raVaYXvS8c7zfoRVA7WpSzAZYFu3YHmoReVjQFLqZfeRkTkYqfF7xZ",
  "key3": "3cdTK9QQts3DYEiEZxezNPxTSr1twh7faFuR4oDDJC5x8KTevmmGTT96R9LY3mWKhg6omRdyJByjhew2pbr33YVn",
  "key4": "31xy27ijifr9KnE64BSX8hEfvy2irhhta7dAiMDMkRUHHUfGua9MPWxRnYF5krLues146bspSHEHspEguEpkGpYH",
  "key5": "543EXJi2vMMviWbkejFdQQ4YxefKxSQAAn925CQBDW6gHwV52d4n7Gui4UaoAktUPA2Pi1efYZGsnTT3vTToM8wX",
  "key6": "3BZj1uedZ3WJSEsxT1i5XxdZE3TV4u7EtXnVFv3Lz6jzLNBdDdsBEiN1yBD6RuyrFnfvfVd83CJDsjnNqMzhYrqh",
  "key7": "kfYgTHRqn9tRFLu7mAawdRSu2k4HeNVWLZ2F9jSszFpYX6d6HQ6jnG6UCAR2rwmuSrp7HkxmKqdQRZ9RfaE7ewf",
  "key8": "qR9GyNWUYSjh6AtnjdLtCWgzo8w21TwqnBGW8wtkkn66cwCD7j3CmfZMtnKBXtQEmwdKZYes73sNXM8fzaBjQVG",
  "key9": "6zEt6Myfd2xfQCLrg9omrrpfxsLZYaS59MqiW42t6B4JN6bZGXyvUEuzoT47ywGMqpn7nt5JrFfZSgDf9ybfuB2",
  "key10": "5avUx5BZx7U9rmoeoUqmuw8Re4Vc4ViP4SX8mtRkEv3eczCxpAroJDsFpT2BrmXAhtNsYCD3ssEvtE8sMyaWv1hq",
  "key11": "5JAFYm4zUGxjtBxKDxvs8vUdg4Nd1aFyW2GDv3AwHRkrXxTLmw9ZMk9xGJVnowR9JMU6ERTzDc3vj1mpk9FVZaDi",
  "key12": "4ttG9eoa1FXSAHZWPJFTTz8TMQSNfuehHWJDmk1MvfrGvrgvwTmpE57ZQxEi4ScztKeYHRpEttbodcnodD7zaJYs",
  "key13": "4pRpdryHkNMBRUHidHaRF3VavdGMG9vP88vTAc1sAZfgYCf5mnX8Jg4qqjvwWMNnyaCqSHxAQzxjK8dp9uKydmn7",
  "key14": "3L2wMRYWSseBm8vtUCkPptcbdzt7gHaxXvnigZdp8myb7ch53szN6ugxrRkXVJcbrdwTvMTTtLx6NJN6UqajMbnP",
  "key15": "2dNrmXQFgyyxEnknP2vD1xXgk6cqnCbpiJRWVCuK64rWxLweXeHy8HeH9oMRjDgBLSVzGXE2sjRjPNGLVD98VvRa",
  "key16": "VLYp4KFB3nj7TAJHsP5Cc8XDz2JckLd1d5Eosu57qPJmL4yNu4t8ygyFm55P37pc2b9D7NsWMg3fbwkrdbxPzVv",
  "key17": "3J6rS946Xscibvm5Ard7KaFzDzkpoRaRyq4rByJHnRUUAV6xnWXz5sCYULvyfFVQVUU67vhhrjCJm221Ft7foWwP",
  "key18": "bjQaAfdPf9Q28VgiwYnCtHQTyPy9BMfe9wWvv2h5xNTowyAkNVx9xvHp7ygSXyXBckKwptfd8hzXC4WcsVCD96M",
  "key19": "5Xas64dovH9MXopSEXTyeqLWc1CYaf2HjRgjub7v6VCeoayEJNGD6FJ8P8nkCYySJ4VbPPFDt67NJkszZPp3TTL5",
  "key20": "5byox7bcoFZXMGAYikB7yD22gBnnhXetwFJtj2esTdNr51LaWbAr8hzSZ7vvePecsyL2TiSW5wx7FsFLJKXYnq2Y",
  "key21": "2S64cvUXm5YKDX84zd8vtJ8EotsHyNzEbZMzmdRkNvvcU6qBNJfNHMGDL88t9s7cjZVBNAhKGdUTirteEU8c43AM",
  "key22": "2NLUdd1DRYeSyQencEipCGbQQJqmfzoehjKSkUfrkvheVy9dX7mpkqca96N24RxPasYVt4QqmoZdAK39Z4vJMjQU",
  "key23": "2L9p1uCfkVbt8BcHquEuZHGidJKrLx47UTh2t7owhNVTCUexxZFcGTjYQrbpVBo2Pg6MQj49Wd3x8ABbTfpTiH9",
  "key24": "316RQTiR1j5jduuR3H2W8xoNCgNPY9UsPSAYQsNK7ZtS4Y3H2L5KVfZKrap5t5NHCB8N24mVuHHEKJdRdE6G6u4w",
  "key25": "2v1K1gxUmBubJg1VgwEtekJVsvAmA7VikR6GAA3jF3qmYYiqec5PHvNvtYDoWWufdR1wdRxQxsduUrae6ap7YX5X"
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

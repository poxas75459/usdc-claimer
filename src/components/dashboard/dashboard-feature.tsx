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
    "2MjwjSZ9NLDAvtuUg5dtNjh3PBcenGeZmWXi6dM6uMPiHhDiMiu9YLqVhneDW1YP5LSSTKfFEnskMQ4u3aRqx6S1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35LVFwes1DmUrPnarkSjsgH7negmnNT3CKX1amGTksa5KfgARGVJ11Prh6cHmDx5Gc9z5ep5Vb9zgF7ZyJPLFLng",
  "key1": "WZsoyBv9WL8NvFoJ6t9GFNW5MF8jrE8CyH9wuJvszJ9w99ZqNLaDiPihmWwPYbKpVa2dgGLZWnuFLTgH8mM9nsg",
  "key2": "Hby7BzP616tvcKjsGgrw2U4viU2jPu3LEujuvG6ogGuxrH5phimoW81yeZ7u6cGpoH8frK4ALs98D8vPra8jJf2",
  "key3": "3Sz9aSfiNrWWz4ZV5qeVPLNUT4vMw35g74uR8fzD2ZzqQJVSkpih8KdungM7TpC1qdUB6ZNqdLRB4X6hfRUw9yre",
  "key4": "4ZgBVjruaNCuw78u92NxRobN8W46nzxncmHYdJmntpN3AWshcZEqox7TsQ5ppQC1YF1VBDtoxLug9qZojQj3runz",
  "key5": "5iHKkobw4jhZYFhyiXE2GUkZVzyFp5ThXgaVo7qNW2cQbK6gjKFSpW9xX3Yii1wtC7GSC9BpYRFSmsn8SvhgumTf",
  "key6": "4qoggf8TzouSa7CCEk95qgFeZu9dWL8XNWGJAYq4mWXHNMedWzgbgFCfHUYN5UZsVMiGtLUo81w2eZSu9i5V5No",
  "key7": "51Hxq48KKM1h4wFqFGNBALnHNKcUrprQpXAzhAfM5n9GGgyTA2t8UXvquf2abkH4SD44TDDaTYKXvSZYwPYWnjoM",
  "key8": "3BAjVYAvUBdEKxzqzvz6zzhHcxEAebV1et58pBzhD5Y3mBECwwBkn9bWB8pVzWGwu29wi7bZNN6Ka6kLaoer6Bps",
  "key9": "2pSKTdWX2bHAizaxfh91pzfFT4fH2M6pw6Trqcq4ew1odDoyECb8q7ULCX6FqoDQK4gay7GMe7CJSN9Puup7c5nC",
  "key10": "3mBoUKdMhy5Hoc3BRX8U9J5WX8iktzJcceN3uQq4avk9vowhEtgqP1Y2hExCLdFLt9SrMnF2rMtEDKwn37hpwGam",
  "key11": "3yHR7LjTpkJpu5i9Dro5YjqtnugHRhoy31qJnp5NsGX7XC9CQ1HbkppDWyXvQhmwLr1pUqeXhKUGMUWwuDCzYzUa",
  "key12": "2wKs1EFXJ69vTvELm6fpBYxXhcWgh7LvrkszVDhtuUkYCoChLi27wxoGxnzFMXuKhMbiAuyytWpuRJPJoCbgyx8i",
  "key13": "59g1qccgHVgfB1crEQR94j25QGnysjVpAVeBaTXoVo8PaQjfpHsRLy2jsHbkeh5bwnAr9uox19kpgC79bZYas5P2",
  "key14": "57CUGJgZt2EMskRXoJf3UhHSKALQcY4jwS6o3jLkX5iF7XY1HFhg66NbzQs9UqV1pyPizGemt5rNMvTXAte7KHsa",
  "key15": "54g71ajjTrQNUHjrzFgdwhGtah5ZyAupApj2KbRLkQDcQ4gfftKU2F8tFocuBQQenKZVU2ersGtvSuCocypW5TF4",
  "key16": "3Z7V8sAaTeaX1VahLniyx8KGggSmq8uPxGUc6xpXaN3zxqFXCh7HdtLeSA5pbigrUkpiio4uwhSeDjUyTqjYMSsh",
  "key17": "rqY9dD2AtNY5j1Qyo7TKmzrGxY65PVsaAS9dAyHZrHb6etnwDobkK35zfyFiggkBcCti4LXsLbuS1bpnjssaxAV",
  "key18": "4DMDsEFQQ98G1JERj3uDLhkGnzygA543kJ5a4Eo6pMf75PtmrU4GBxRS5ejXtZFrDAE2KjnZP2dHd61eeLLiRNNq",
  "key19": "5CyX6zyDTWrUNruaBdYjoUY81eQ1HR5hau3oCkU4P9Y154tcyvGMMvUkNCiKtcE5y5ZxBkmXXTRxoCqWuyjhECUn",
  "key20": "3kJxBBNjFf6MoSAKgUFhuvmYX9gHUHTKVmdHMMMgPWJKLVdcYnu41YCnxpkM62MpFxeE45uqn2mybN2dx5gAz5z4",
  "key21": "4ku6MVvjLi7bw5TMTzGNgqCf3uFRB4Xp8sPmMzjS4P74AzkD1v8d8oK4yevBxokmpmG4t8hc9AcVBHyDURvKbC48",
  "key22": "JM6YQYBqxVZxvPELfij6eRxnAnBkE1fCc9BGkemMFHS5HvGEEVJpDniEjBJmgo5ahdCiV1jbf8uy9bVX4bXydkG",
  "key23": "4XrsKr6fJ9KKVjmjzj9kgAnGqA8AH76jk3ff7bp8S64knwkpDYThNeyuCWLsaBjqbL6yLKFF6LMvh5umZSeQSMJs",
  "key24": "DSnqutedUnN5Rtc7q5tHvTTetfRnxT3MA8PrzB7iQ9uibw43xzq5vLr6XNCji7mU2i8k7jvpMBAnF8Xcp9PXSbH",
  "key25": "4mVZozEyd1rZbNsWqitZLZvfui12b6m8tnb5zS9FShrKsspGyzDQvxpNQjyUJyJLu2pmiNRLkJVXn5ewKFXFYPtu",
  "key26": "2MtCnM6fAy5c1qpcFc1F5Uz2bSh3VYpPyhe3R2nZwc2ZA3zJQri9NatvfowrqMqHvEF2JuRsg9Y3DnbjysSqbbpV",
  "key27": "2AZY8sYsvy9o7Bo66LuKJM2FrBMCb6p9JEhDdu2bUHw6Rd7DSGEMrbark85FrpxfbFZd2p91dKWFP2yEmXVqGez2",
  "key28": "F3G5dFgg3woLXmLsgpwuE53Js1dA1Ue7TahroDGzsGF4hELWwsQrPfx3rv1DrKNWs7eFyjN15AesALCtyVyGSjk",
  "key29": "DWMLsUnKo7Z3pSmHAfzFnc5Uu3EsJTQB5iX2CnQGgZaA85BxtSHzo4ZKLtNVFPSMJLLsvs25GDAms5msKmq6zr8",
  "key30": "5kP3pn4qyGaLq7SeazXupZg4iaw2P5AwzBJc3wL1BRtiGk1kjxoWiH5Xj7Dzx4VpK9FnstSrw1QarUwqY19Yfavq",
  "key31": "2dsNszDSkU7NBTS57cj5B8Z6seLhYXeakAMkA8JFrLKkSKeSGMvVLHqXmGKnvSCMnircotLXERc6TBF4tpzD5KR5"
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

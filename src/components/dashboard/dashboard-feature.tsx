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
    "5MC9nDmroc1XMHmNA8EFjbXu3faekKGn4Aimgt8obJDjF1c1pFepeDiSu8v1N4VxHLicXStNJxnVavmdAHyinhhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJywnD7wPYtSxbVJgHb21tBekDfpcKSb2KsesdK7EGqzxFM3BT4crFsEqEA5XRT7n8NYQ4thJr86SnBJ7kATayM",
  "key1": "3RYEsPrKveyEuUuorGUGDYMv1AvXc4GsUgFPDcmRBwhBtDPVXyKxcXKdRkwkeFvxi46jRDXcJj489kneRQrVJDqV",
  "key2": "5WCpLVVJoQXSPf9YnJfZDFGsg8GfEVKdk7R8xz3DGbFhmx1hzFPSjSi1wvXBv6qwAHQoN8ShgRzoD3LHCLv4oAQ1",
  "key3": "UEVKzWCJod1sdpNik1sGoWK5K58uDndvVXvqT1yogWNkUsvavpJeSe9868YHkwkUuqWuRSdMTKLgdtikp9kRNqK",
  "key4": "4uxVoWCDsojWxwcUb5eWrtJripmgjSeMJkfBayv3Kny2AqkVYZQmYpS7NXtKsNdwqGYmKzfwKkGi4TYF8AKvff5H",
  "key5": "P71MRrc4f9srdyvmwRQL6YuRXpnRYTgrwXfLcAmHnokYP2ji1rFGuj8SbecnF6kaCDc3jkHTJ3DoFcBQbmZGryB",
  "key6": "4CvJdC5kVHRSRMSYZeGeBN6PNVmj4kWiYXMfSsqEysFyiaUP6XSTY7h1ABTnWvyfziA8FbeKuPK8MkzkLPPVKTC8",
  "key7": "5UdngSoNGknY1qN5yupmHsNfkXzms4KkNbn5kvr1TyUxe7NxW2uPyKSckNazY9Sn6hJ12e3Kjr11psamR9CBK47s",
  "key8": "2EauJaZjAwSWnKGyX4G17HBUgUKJNRnnmiwtcuLvQQpqNksxkCBpJ9LiQCBirJjDBNrWeyDYSw8gVk1yWTkfNeaz",
  "key9": "2QGFZDAwdbhmFX4N2TGXBrrE1KdADHVEGGMStaFRB1NCBGaRtnEgYruAsoz86gUxNkS9nTW6jTd6aLJFAVxeqyX",
  "key10": "3RqcrpXrrjyDAifAZwB4qVV3JKMpwijrM5HDpCkJXH1mtu4PyJ5mvbMhVaJ6j7SMBK8P3Qrmn1vkkCsSdoWDadRh",
  "key11": "2VbCPWLGMAcLp47QuuALCqsJNpbDekkoJxVEozvnKtS339Dt2a9nTvXH8XxW9DoxXzVrGHpnUvs983DAwMk2bsTu",
  "key12": "3vAh5htCtYN9cAAaMKdvNG2K7whLT55z81PgHVcdxDPB6AUXXQGHduUH5uCn9NCD3EYHnDVJeaL4e8aQxaVqmQfX",
  "key13": "ps4cE7BW1XP87exakVQsq2GAKrhK8fwBqeRDftYa45vi8xZ9Mm67EiJPsrcE9s1gofetxuF3YP4goj7GGBN6S5k",
  "key14": "5j4efoX2fGASEfWDuvi8Jx4yh7AnCqJhKywnD73xVCKeAx2zVpw6drEAejZtDadyVKJSE2pedz6k3pQL58dX6cdK",
  "key15": "3wMpQBxMfjp4vHar9hSR5Uj3qQt9R1iqDie7bk4BvzVsz1s6CZwnhTGoKhD5vBSUCJFQUzf2DFFaRVBrWU6re6V8",
  "key16": "42TKutLqC46fMHtf8qqWBVRGD8f7gthyBEBbLrs6adg9GJhzH9QFcTsbfpzmHGC5kTvAhenLkRCb5Gi4qdzvu6YP",
  "key17": "6xLjs4KMqxpG6gSTnyo3R4RSXDaRuMbQrswgHFRoDbKd82Kebk7A2fZMcPbQzL6R7myaRg9LWN5TxU4mwuoAFpJ",
  "key18": "4MBHkNF5K7BceyZhtLgUq9Ys4Lte58vPcHbfY1aR915egtmGkTCZRxuDYRhDXfAoBwTR3HYy7UynVon4wdfvo9xD",
  "key19": "XVZJyxjYPRZoNGAxqFxaM9uXtD6SjqrBXCFe6v943jtbZ1E7XEThYBDLLTim2MWDg2cbbmojd9pN4otMEPbGQE7",
  "key20": "MBaf8di6WpVtQH1tNYcm6vGMqK8zU5Nr8QF79zH5hXtLZmV9bo1TQWjgyae3pn5GiZNtS5yga2EcbMhpgieCt69",
  "key21": "4d1wVf8o2SY47PD6TbpoXfh9fn2yjjSqzRVSQfGRbEejQQFbnnEuDS232JbiC9X16JqKMaZU2T4DS4hDTGeEnSSy",
  "key22": "tGzkcsfzg8yvof7oHaFcR5XG9kBnmMtLpEo7anbQzDcqSEYiGFFs7D8dsGdk6PTq4cwDRyUc4gjue1rGhBjLPXj",
  "key23": "39irvFKv5v7waJBqocFwRC1HNtT6QSSVmryX6EqATcNxdYBoQwrJwvZRWcVM5BKKed1wpoiVcMDu2zTsV8s74SJK",
  "key24": "5SuRvvsgVeGnLoVFiktGZ2yWVk8EFsYmsqm8RNeukuvCePMGsbrhWk4utZMKCLw5LpenPcXfJHp1Ba1YpxPorJV",
  "key25": "2rXNwkwhghG3VqkvMzWaxDsA5JQqo6cRifoH6oSnAsq61nWZFtMfFL54GCuV3uQft9aeDjesrVrB8SWRPvpPF4ko",
  "key26": "5mGv66XD6PHJvFpgaXQ2sTFMiZHucLZSSxpdkZ5qaavyqAR3aMNXXVaGz3JVfCHrhJdx5RvAj2c7zYhB9QQp2M4i",
  "key27": "2HDGezmbHTPgaf4FxV4YQrJiFaSZierdmPRMrY6LH1f67t12PWxNnRx3tw6cJvVVXGUESaNqJLBbxHtJGMc6Rjnw",
  "key28": "22iX97BgrEYJoZ14s6XejYn178L9RG8XcA7j1BV1WNpQEPkF2sgChDzqUdnfhcUXdac12AZrqvYEgZZRPaUpVnEC"
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

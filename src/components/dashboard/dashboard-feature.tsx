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
    "539auyvvTksUELqak1WfRUxDVNij4y5C3bLDFsE7mmDc2LoZQg8wnzemVk4XY3ioecKHHNkE17zeTMaZTMxn56gU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461Fdpnj9fKfbofhzSyR6KxiLEFaa18ZtJS1p66b34eQp8e42LREo3W6hv4DSfe4KHpSA1dkMeemaEet9cQJbwmT",
  "key1": "ydqtJ8Nu2Mngokip2V4DYHhbu1vpeHQNR7drB546j62mcfcgcxP8Mx7rccPejk7a6ym24Wi2VTVj6WmV44Emjq3",
  "key2": "5FtKAN4q1WPu8xXgPUkjP5bu8UJPUbGHahAeMtqRk6jMbHk55Uu8yBWamBnwd662N81Cd7oEVJKDz1zKXYmNqU4x",
  "key3": "4GW1RN7v3bzxhzmedmgozcXC5MUoa2FQ7gL7jNMCE7j8ywzMKu3RaMmxuvDgshCcpFwNuvXDzENsdbm6Sho3jFDz",
  "key4": "2dDA7LA8zKDywRC4pcS8oc3mnigpjvb7P5ELqptkDff7cz1A3YkvAeou6PhKHdizNnL5fkKi56sauc1BjWXwRbMN",
  "key5": "cYyNfZ3V2NVNGzfG1pJAtYtCiSt68xCa7cf8gGaxv7tff9W5itzseg1EMAzBUPKr3jwKb9RQVxrWo2WHLhPeajt",
  "key6": "3DkVkHf6mYgJxHRFohCSq2L2ynAUoeyktAnfia9knjUDMExG3dKbHyNtCN9b8rPaaM9zFU8wPnNoMmvJgXyzdZ3j",
  "key7": "5DFdUimPJJRXbC5nFpM1XJ5hyM9Aoqq8MR5cKrgRK71N4FttPG8wUX1rzeL64vwkm29Ka4Jkwz4iJppZDdscAHud",
  "key8": "TYkD7yeAS8658t6seonFrhg1gwNuNEmUNDoH1NtBp1YxF3aweqbKdRescchVe8PMBiMyQxuaSuP3PXgQUsobkoh",
  "key9": "3ycVoFgN6TRLXBtM3LFD7PV7yp54F4f58dYSrUvHSHxE1jdtvYoNuLDMyEGYAfGmCwCpKjGsdSpibBUS4FdgjaVZ",
  "key10": "4FLQQoFfSAVdYJpb5eDM1yhZB2NB8ZCBmQS9NyLuUgsJhFkZf4JRkLekx7UH5gynvHpwy4PEJKBi5whX7V2Nz54J",
  "key11": "3ETu2nhrnNaVKZ6nfUCeMcaegDoGZv3QbbK1EyGAhuXMtsPMnQpV9h42uXQKh6HewNoDGurGdK1SyqTJWbJkWisg",
  "key12": "4zqca4HcU4GJUL9NhbsSok3bGWfdk8E4myVFgFiKauyf8CPAcz9yQ9Rt1UpsRkxucWkEmAwKvfSwaK8BFCv7LAo5",
  "key13": "bUFZ3iedMRb7LeNdjmDaVUJ1B8eBuCvoqwnyU9H3HsKooT51beeyCkkyYBZ9MFQWuiu9h6ksxsh3zTnMvUA6uVw",
  "key14": "qhanByQ9c8UqBPxc2W8R9SkFXQqcWhx3P6z51BjBXTnqCUhjinN1KGMtLpQdmz7eSDjnzYCEVNMzq6mxDQAe4NE",
  "key15": "2sVeHcEKox2miEkdrtoekTanPUC2c9kyb9SQ2rd273QbEAS1oVUJ1fWvw44LgZnCZjtbdY8t9siR1ZcP6tzAL5Vc",
  "key16": "4CAbB5N1BX2SNWBYqLPQhYGXhmpcgPm5QX4gmXMXQQ5VcAZMPkWdAne46bgBWytE7YMHusSHk471LwntYeCErzpE",
  "key17": "4DoAcqSrUguaT9Be1AU9amymSrHJ6kFyF2tKSZooeB9c1dXu7u9q1vj6hCG5Gz1GKL28vm3eJhCXtrsbSxoW5LFc",
  "key18": "2UQ4t7c6Py9RY3YxzuWnQ7hqn7DKgFPxBbXrcTCkug589PYUZAi3cK9Xq4vnGG9ksYg9MxS9Z5ytZNJdBEu5TQis",
  "key19": "2i5bmTUdEGdrWy28ThsnMFh9XZjKeeF2GM2s6jvrcMxykHTaaMkv8jhkETHSmwhwYJbJcv9B5FRusqzqywAppPHe",
  "key20": "3HMEAk7n8vtT3ZQP23igJWLRiKfwhgdcg2Gz6tbyqKQkrbs47qw5GshGxhtWitfrBUdasyaVYYXmehX4ELSu1yAa",
  "key21": "4Ko3xzbEJcUBjMx5fMtvRcWvURoqTbZqHBqMrQkU1ZKUbqLAt58Z95JTJ4oVdoVpW4Javfyi8ss5H3oAnUj9GNGP",
  "key22": "3otB7ShZKUM8SgwbxLfaSswRRWfWhBtBPGrrcfwMbmL77DYLwEq1bjpv1Prb7VRmF5WWTbHvHf3jJyhUKDUkZmhv",
  "key23": "4bAPzd37nJesnU6jNkEcqZDcgRFkjniZBsG1SHGPTqsX8FhPhpLBz8fFEtWqCVGhmyBSLPppVoUgFLxDnwskFG71",
  "key24": "2jYm4eXW4sDjiwcLVb8zBfF9CRXn9HqkPbdXZL9EtLZ16WJF9ny9eY3Wf9XCXoD7chW1TgdsiXThjchZkRXLPid7",
  "key25": "2FpBTX3K2DwH1mb61ffw9pPokYpU9gt8AZHcviLAzjKVCTbFWwJow7cHskx56nG5jtGabJr751YKafZgKjCt2z1a",
  "key26": "5LWBXhkBniT5BTgVTcfy1662v4txdSR7Yjcecfr6BNvLk3Znu4oBw6DDxuD3Co3Qzu7aBSNPGkkB3EhYHsdcfdzC",
  "key27": "26qGtXu1vvsGMh1AxKHkZDvLYvLm39Hu7S9AnjH5DaResH86oKNe8NdExsTqDvR1nWAkbEbnHZ69dUgnP4HiKBAX",
  "key28": "UXzDvFpp2PrB5Bxfwvdf249onKbE1BCTFebjXqckhhvvQiXWmuTEkXpa8cyR4M7LDZ7rACvxMmcUShiBCpQHNJk",
  "key29": "5LQLx75YEDTapJmGkAVtmjjDHMCFqKVvSJfxKgMLNSdPQFHRtKsT5qvF6fXaaQ6GDcksq2fPimr2sWTKZybxsCUs",
  "key30": "gFDKfsmaAdU1eSRxHgpbUFsxuNeuUbe9AC9nHbQQruQT2eNcu5WMYynhvMTichnjRBNetxu4gNJnRsFAs9kY5f9"
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

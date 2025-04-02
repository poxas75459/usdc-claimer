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
    "n1cwmPjgH4i8nprkQxa43z8a4N7MZ3bikLvVAEm7hso1GSXNVEp8o217mjJZXRrX4hEHLNBroR7uazHAvhCXo9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPPvu8QQFjDPid16Etp4dVfAfHFTZv3mv1nvUGhU8jW3nCCAnd61nyF8sZu7kqS8ntZCTTvcjsRCEcB7iJFrsjK",
  "key1": "2EeXjWTnq4WL6zUh1dwxRxeH6tyiw4mKqC8c56hcmwaNSVV3d8DHMDPYwojKyeJENdC7hkrwdkg9cNqEVG7ExFaW",
  "key2": "4z6gTk9YwKTsPMQbhQya4KoJuEk5vupukP5ZWFRzFuF1sCi9UmpsDm7Dp4iJW3UZeF5CVzrVAUWQHgsmHSrqXBNH",
  "key3": "4YdY2ZSDtsnqD2UcQwCdWHPvEnqdvh6oFhzXjMDsk2o69B5aCM9VExUiyD5uCGrD5KNxonMbDg4mi4rHi9oZPa2x",
  "key4": "4Fa4qHyVtCQwdLLvqrW15ZGzj1n9F9XK3WknZj2y9jfE9UgiFc8wkFspnCN8cfM6hKAnn1oNHJScReoexCdMNj6j",
  "key5": "4qQbhRohtofHKQtp3zUat2sG385sTuAe24sjXaXqAoiYfE9sfzG1Z6a7Fa5xiqc2CYsLMCxo4vZECP3ukmsSymw7",
  "key6": "5Qq5HPF5JK4BhEEQwPuXGFR8uvgVymV7WzSD91UubHsMT6FL8MWzt2vRbhQP3Vvuv5k2kP3kkre2e9ar3sN1t52x",
  "key7": "5J7ENudYYxhqnsiiJ4ucL2fJUTshLaomyy9ZvZpmXqGtCWAyfr2W8ZQdFZ5J5dUN3D7B4Gd938SFrQtvzKc9KN8J",
  "key8": "2ej9rFgddadrphe3UqJEHCtQYy3VWawegyhfxqn6ANf67dKAFPwM4dkcSj4zRRecnaqkjfn1jTPC5skAeWLamdc",
  "key9": "2EPXyvNddv1oQgpktrz8Cys7YcBa8iSHUK2tW6RjD58t8JYiXzRpARdsXTtKxwvg4FDpfXw4Y5PtBiQLYdyC2J35",
  "key10": "cdRakgSMxmHn6AUh3voamAN8ZguC6RQC9R7zz2A3RAVy1Re495CMzsGNN7aY28aoUaczPhpFz974uHi8DMcyc6B",
  "key11": "S7RbXVW19vcGXcgUXhBuPTzM5Tcn1W4FJVKnnR8fajENwYwFUSqkEMDxdVgtqodbcX5MVGeHCYQA9bbTbFgcxwM",
  "key12": "ageR6yxwd4zSuZLjfTnv4ttsjEJ3aYM41yHN2KRKxhPJFphisEyM3cFgqnoZExmbgWLeCMbxmvZ5RSvZivMfLif",
  "key13": "4LL1K7vvreti9v9fvBkfRCR38YtjLTCT43fZMpZV2LgNd5SRYwkAvhY47tinh84dLnpMaufTJG5ru3mH3uZxWUnG",
  "key14": "2a3N9TVwRnAhGUVdRcDfF1JgHfzVyVnPSuM7W8bAaFssNyKYb9nuVqbw9kHWzkfV6qnBtB9W68T39zJ91cvJJ95y",
  "key15": "4yFBe71EToX8cyXeo2C8zHFM69mfUU5xzccB5WZ8y9DKfZFYtixdqDJJ5MGQVD2Gvvqgw63v9YueiZysxEn7v4Gq",
  "key16": "2C8atoPkDd1bC8PjGAjqmF3tWpybySdKVBZqpG2ZPb7BcdHSf5weduQyxwBDzXwAeQBSysW15daKfsRoQ9BASBxK",
  "key17": "3aBamdNGCjxQjCGo8vcac1Scay4wLUJCS8fK1S7EK1B3mYpcED98B8n99uD2m1rXCbjdTxgxFjkWMWDxniCdRbs6",
  "key18": "63yYWTcDCQCs7Xsdg87zEHKSBiFw8FsPuuwBa4dnVDUZuHbnpF3qiZw3NBKeAqdanvVAcY7EzT63w3tBu2FuBGsb",
  "key19": "3gFp4J4Eg6X6QeaGYCvv77nficoyM3qyYQdMYRfq5EbqVKMoN5aVzgyabaSwCnBe8Y2yqWWTVHBHv9khrTKQGUcP",
  "key20": "wAWYuaLsmfNTXGak9UCXeg6LQ51WiRRAsdowd7PArA37EayyPqmZ7oN3wghKEy89ssyMt4YNuAejm4rb8hrGMdr",
  "key21": "5p5MrKWtnBPuS6HUGPzFYRYwXjqUpi4acP5KjueywnTALU54MzXcTp3Hvahxx6QeWsQDQsxcD7s82HFa4tSpTrqu",
  "key22": "5uySy3bF1GLPLmDKndLUgyjdhkivNkRJ7QhiChWb3wZ5F69hC2tyEdCpC32EmqYP5B28cJJgNdr3XAqdc37SYSxe",
  "key23": "54mHsptZH5ingCB1jQtRTDc8xuPsfs3TU6btXgQdWd8Nz3bQdXva6XPjXoKa3z8sWfAknfATykWSSfznfDcAHmxM",
  "key24": "4Fvp1MNJRda1wmHynTZkxi9Ho3NN117Pyy72AdnG7B3EQbq6JW9rXB89vYA7xseAX1o26LQmnGBFMXjbEb8xv53R",
  "key25": "t7M2ABM44QSYkreCTQ4k27ZhvNQvbU23zw6dN43wsXxcYfmfbJiyP7faDBwyZxG8xYvZ3zKstBsgwH68cTnaRZC",
  "key26": "41mPhNgGTH3sF4RDHoA5AhuqeDU9mdksjppWTdztZ1YfkLf8AbAbQrLdkLqGL2Rqw2BFAViZ9CTxuNYmhdmo2mLm",
  "key27": "28eFWe8eoCV11C1y8czcuq7deuAoWjLDrUE7xpNijAq8f3Xjax52Gggg8VPP9VCEsCKwhbpoYxY2YSH2nNhB8x5v",
  "key28": "DLs1swqVHqShNKMpojWDZHM48c7Y1ajisbLgmKoz6Qp3NAzmMVgYSvWcnwUUzad7T4qDHZbrkFTQTDavLBzxk7g",
  "key29": "R3FPWY3ZpoYmpSNTZxu87gU9J4sX2WMRQvxyYR5ckZ6i2ie48AR35BJ9tEC6XhEz2AaveADZBwqkaUnoEuevJbj",
  "key30": "5a5XKSYtPFvK1AxMMmuM5bFo6Gd61EauquRfci8uTCHXLusSVsTWcsSrZF9hLiREgGKvSGYNqtKUH9zoHbbHADRP",
  "key31": "2VAwbAyU4fZiW4usfo5u9vt7sH5CKbJJt7uT9CA3NVsnzCDYssTPEsvFQds35KEHgiEEaokZhs6pMXchq8ZtsrKH",
  "key32": "471YQ8zbbp8RhQkYGXgExH48LZuME3bfJCWusxdPVtqpbJYSmZwu5ovDLVexBKhezLgBXtBvLw3qpRoHs3PeXb6w"
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

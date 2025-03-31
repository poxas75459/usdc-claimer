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
    "2hsvAP6fj5P7hHBK2uvm7eoqYFhWK9Eo7susyNRC97qU1WP6GApHj8kCT1z8uJY6fB413pQ33mKmZYvBhQCCezXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbwKzqskvQLg2cMqbiWRitncT5JSdcnMUvws8diTgB2SDZeSDqrEG7qVEdmS7stqMsu6Bt7njcKVDbjWajAGnkC",
  "key1": "5zYUgJDDk45AkQUtiBerwQXKBvQKDHZhrAM89QhPuCFpr9Pougv3ewNEAMxVvhCooezGzMk4oqWTAK4MT9nxqBrQ",
  "key2": "4Wk2p5BTjkkgLRG2kewPMNcbyViMvugXGCF4HcaKRpNwTHczvSCZdyz6evd5Cq4fB4ABYKnQyFtQSCHnmd44XDxF",
  "key3": "4wfrp9FqiFVESG1BwhagTh2KiXuWjjSLSf7KHDeziWn8BQ963NXZUMxpFxwJzfkGU19RG1RiDJbFv4aJKxRT8oYH",
  "key4": "49CPKaXK2mhaifrDTovp8pLuPZRxorkMFjwzuiuz8tVTBJDt3iMwaepMn1FevgsCwJXGryghueqwXTDaUs1swhq2",
  "key5": "41A7VYteErNgi8F2rHoiEtwHxmvRxR4r1xi9KKaouJVpHQvZHsR2Effx6rmzkMxXyvvj7P8z1SLEFfQ7HQ2tc6TQ",
  "key6": "3dvg4gHWAPUMEKKovNj1pMJyLwrnUyxRiKhvG8FbL5hcqALSN1EhfKWARkGUK45BYaW5t6AvJZQfN2EAqrvYNLm2",
  "key7": "5hrHfokcgPN656aTKr2i5avYsoc1HaGASpN7GEhfPFzstKdS2Fhcsyu8sG4619Y5QUkNLHjYZTFdGRXM7efSYj8y",
  "key8": "3cddCxe1cNXPfuCTTusv186EA23pK9Tp5WKMQYsf1YivHRdz9A9B1V8yGA1yXb6CfxgLJmi62YUgTLeTDwf319L7",
  "key9": "5vRKJFPHeFY5xWyaJVkTLx13eYFzjCyL8bgt9n4KpJGvuhEm9v3diXvDTcBRrQUgmD7SZFWLioC8FP1hnm5qRVxC",
  "key10": "4tNqaqgQLQroBbvW1zLKLHQZnMvbFjTb1wWZEW3Kokg1ZRwkRgRJcNq2H9YM6Tg7YBQZiksPB4XkUmFnBdBemvhM",
  "key11": "5iJNFdPPtdYtVfEguRkQSowYH9X9XXpgbKtypje2UhhESgiZS2s1p6CBT3Ebae3PTafYeXfxtnxs8PfASuzEdfF6",
  "key12": "2iQcev6h5i3iRFP7jntZ4WXPhTjfL57pKie2TTAAZi92yEPwdj8Z4vGTxoe7tWRXaqdG2Zxcf5hy4TkQSYrMJdo7",
  "key13": "x7PH8Q7nvV7QqrLnGuGvyJ9dcV1gUpAWXwhLmER15x4Yp2gGgM7B1BVyRqEdM4NCQPhEobEC8DvPWb9ThGaViu4",
  "key14": "4GjvJGDtKubLWXDembbp5VL3i7sbbttU2ay2zHvZfDgjPhy2Wxt4uUsEyGWbPUZJNyvRkupMwSLzw7yjZ8enJovP",
  "key15": "22Jkp1tYcBXcNaYfBkEYTSwwzCrxDN5MdgfFtHDtF18LwaMqX8WjfDYnbQfKr9oy9P4PqzpfcuhVRWwYzEhGGYHd",
  "key16": "3E29DFz9GReaZniryGQhCQtAUmvotFp7vjgEqm6NB6AJKSWd1k4TwLg5SAYrpMRCPBj1n9qEw4y8iRzr8NCkQv9q",
  "key17": "weVUghQdEa73uZtFf1tNixfakN2Yy1cs7n73mBhcJUy5DMmqUdbVMWCbZQyPFaf8BqLtzjdBuwwCAbjRCi8iFBX",
  "key18": "18LCpb2RQD98MmgSDYmKMyEmo9162HyNg27nBpXvfa7HvEa5fyA2qiqXm4VKEn1hryUt12jF4CEXkbxNsTsNttW",
  "key19": "4QZouHLnSvV46ABE3S7Cg5hFaW8PoUa8sDv8mKZ7oSfmN4E7whh1VgcuWbgzJvLQuQxLGsF6Xsd7gUNZKqgGXJ19",
  "key20": "2cc2qzFrGz3StWMZjNHVc12TWXNpyFrG2zKYYJajMAnEbPAkZktAvDEFL15jJGSPgdS9HUfvdBNvfGoS1vEyhjVK",
  "key21": "1JuWpXntjiKY8Ma5mV1gMhHBmQWF5CvMBodPkhi8kLn4En8iYWbcMnuohmKWsCEJYfCE7DNfDaGi2WvDZJjv6mv",
  "key22": "56rLCpned5zYB3kuB933p8Vd7QKT8HWSUsHBoqZdXE4esrmg1tiVmSJkaz2uCg5CbCJRVFW32MHGRd4bPg9DdojC",
  "key23": "48M2DSh19nJyd8L8CvsGdX6ubd4JLnnXefZYtHLCYL7hAzPZCcETUfgfkTx5MxcY4vCHpHHwCGywxzrpQafFt95Q",
  "key24": "3R7M1QkcRVGdsib4YiAG9QJScKk4w9g7pwBKJYvQyqGGEw3BqAhL8mkryvhjazEJ476nbt6mjpJDWHoy1k9Nff5Z",
  "key25": "DpW9xNCPxGCHyox4pGzKUwwGiAkAWSo7e3fg5HpUoaxw8ufNQv6tUfwbv2LMvtgjjkLQsYqW5JJ7PVtwivwXTM8",
  "key26": "2GdnVp4SUKFjaB4NMXuQbiqphF6xCn4nfaeixDLP4EuSAvvKZRYKFDBRKUaqFeZymfAkBCByNaGxxY2nMCw5YZGM",
  "key27": "UhQa6nafC6MeNoFLA7ToD5edsQBGfJvd7eoR1n2kE1UEcZFVvGTZ5vK9pDEQWbr7fpRA6jdw75RDwCG59i2Tneu",
  "key28": "5uLamybxom36JFmZVqQ5ENH2bWmZk9nhz3dKV8Fq2wJh1cEX6DamFDs4xgYfNvk9o45Top6cLwhs4AA8F2NvQrYu",
  "key29": "3ys75Yv7hRM4zeYDqKZFrr4rz9vWGitM3Vz5ss9rFvZvDb7ffnbfoVyxrs6Lc8AFNzDPWo8gRWVy1v9SWUzNLfnW",
  "key30": "V9ALRh1VCKuu1MW9wahmaLcosyrkbwjfZiPjYtxdjudmvjvxPHHT474bUJ6NNCnEQvtWaJPmTBc5YdZ6VjYmY4w"
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

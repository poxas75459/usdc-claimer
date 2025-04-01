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
    "5vCMsjvDXZ8QBARVmVkWohWvYzEsfCztqTow5DY8vZwmRnxavor7VRSeipC7Fby9vzEGZWioQz5BMuChv43HetkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSc3Lhb6fv8Jx16Q4EdT78U9qBQ8dcAAP7JPoASetMafHXQynGAn5qhGcjJESuSKqS8wBocvJVmAgzVsGt5dRky",
  "key1": "4GVxJ4LVMQFoAyvg6V1CvvFDoMb7eHTo727cMqABX5i9S7WUxzFjMn661YhrU9ZqZapHrWswCErQMc1YBKxuePxB",
  "key2": "5tVprEfKLyMnSsorcH474DrBuyuLwjVMsuFY8Dvi6kT2g7GPBMLEh55qPNpH7RjzL5hpHMDmejUfX4jS7oD6zEfi",
  "key3": "2dzocGWPiCLvK5oPD5nN6R8iLvKfAv5Tw1sYTyeeQpk6qekeqfMrgUapBoVPUqnBgkw4ZYNwBr235Rg6VJcxEVC7",
  "key4": "NsHtJUcAeRZoGRxiu8a6hoTWgp6pCfumPbHAYQ4A5V6vvcsqWfSAK8yqTjaJgA2jHotcX7v5Nxgd9aq9LeV6vZT",
  "key5": "5aEmMKrLM4ErcHT6mat2qporKcWwbY1eMee1WwB2fo5djiS73LtWsqRCxsoQpmWr3NMyUmx4dEuqtwS185FDdhvb",
  "key6": "mZynALZhtrfGy7K35y1Q74YEq1zJGZzuUc7u2TsVeqmsTte9JVShoij28PeqDmUVNjsCE3n3QHWF97edevcHA19",
  "key7": "D3oRGy4wUdg4d3FCFH8yaK2md5EPJeaL2YWX4GdERwZJsT6SFmeg1ctjacBi25g8T7raEqoAtP3MxRphWxiS6zJ",
  "key8": "vmqrTpD7aygKX9zTo6YfBkDJH31feouMPbvcjXH27YUVCMPKqQkuYoZwpwYQnBGDKymDGBj2VLgSUn16WatX12N",
  "key9": "2QzH5xuKaQTeLApZhpBofGkwhLY6TdPWnK5VRphVwqXZwFPvbvxAWJsidFt8f1C7e4qG1j5VzA555qcfK9KcYuek",
  "key10": "5kBTBYkgHUY5CcRPfnAyLewK1F8zdpRZG3QE6vuA3VyDvSiTjfEuns3BUSeMrmvw29ZBD83wYsL46qPJPkTwnXhJ",
  "key11": "5nVWxZmiVpTg2T9eFJC3E7SD4VjSV5QJpmoY7ffZow3ebwqcHzzqPpJcDPKk7kTVLWbgzeAs8oGhzAEHUbYsarpr",
  "key12": "5eNf69MYMtzFQvbqYBpjq4JX9hYKe7DJccqybXpNrFtxqNA3eSCQygfJNyHENQ9z6zxXQJYNVKZEaBPwThtH9yjX",
  "key13": "2Quq9cpZtKHwxYGD7hpRQ1kY3jAZC2U4PGKhC5H4ojmoGfYfxG7qMQBmo8J3jZeuxPrHpbqVf6ZfuKYqQj4puvpF",
  "key14": "5Gxzmue5Mmhb6ExnddEkQqM6SWt7LWvn74j4LX6MiGQV4dBcfkwq9jVmtBxov7ohK2XtJZC3X8rP85nztVTLCiGh",
  "key15": "4wYBdZdGvmtMvApxWjsxbDMoqSSi8hrGGMS8CAuT7VqDYH8ePP6M9969vxDUb6D6MGyKzZJGa1Jr9XS4KGVMqLEz",
  "key16": "6sFt1jEhxPoSSyfy8HizzRMNK9ewxEsbSU9QMu5o7TPnz1EX1BB1vBDucui8CbsdUKw5mjWyPdDxYzUvuUSe3fp",
  "key17": "5P5bFTsRzYFrrHRXxjgA8aF8aRBXDmupdwaM936r84qMYHoXqrzJuCozjAK1nue3jPejGsFpWA5ZZ2jhxir1erZ6",
  "key18": "pQq6nz3mBWenDH4Zvxso6t8kcjDT66KXnbiRi7BmqyDey82Udz4YGyhPVsbTuLzXV22xbpq5G5RAu6wF7gdBVD7",
  "key19": "5VF5a636MrtkxHDg3cgWaoGv3haogLvV77et1gZwZ1uCeSdDYSUeg2yStxivJv5JoTaAVn1PMiW5StnAMs43PbNC",
  "key20": "7eNptVg7ZhNupJQd7CSfFAjF4gAzgDUhQFXpuhYzVREyy9TdkTLQbnPtgPvvyiueozcwwyWvaLdNNr1khxcNkak",
  "key21": "48T3yi8uRX9ApS2J9m1teHh9XW6br8p6N1k8SrW2mQL3jCS6QutydsvK6LntxNrjwMmvKT41WVHWQ7eMxCUz5DXD",
  "key22": "2LUTKrDqPYoJwpSUFNZSY41TArqhJdL2vyQMNfVf3pswN4ojqbvm3d8xN1XmGv5nqJF3xC8Z4V17evLwJ3g3F8CE",
  "key23": "6ecDE8jesR5JwxKtq4DUcZoygUL9ZxfRmKNdEZVatNnxUH1FGekKFBuobLKDWdcPQMYgGzxgZdKbYqJfamgiyBq",
  "key24": "5Bhqmexjn1HR9UBRAK85vcLc9J6q8UB6VVLBBABELeH1WFZBuSXP86pG2kyamzazGQ9Es32eREjA813GDmtjC3Lv",
  "key25": "3RnjTmaV5Wcnu54SqMdR7ZFHVj6WGm9Pk3ikrhbT8VNyKPhgdPFx2qNmA85ogRPiNDbp9MWrEqNjwr1D6RzHwkpK",
  "key26": "2ukycrPxX5s7NdnvusCjHtbAaB9CA5S4fcwQTMkrW3aPxeg4bpT3ip7eHEerzr6BdNt7ZeFnKuK7uMADwFc3BHjB",
  "key27": "43qgQKyrPazrWQHVoBYC6gtymwSVFM9eR5z2jVetZyi4fjoQSon26KruSNoPAknnYLkLBPyi1n5gMRv5zg8qgySZ",
  "key28": "5Lddh38nnReLmewcSYPGyd4eKsubxACM1eLpuZWrVwXN7VmPoVP6sAeyKCAYx2U27STHRw52B36YY3addzunkiET",
  "key29": "443ar1DTTdmMMqz6kjtQzwABvEgZUConzWseTXzwKJRd2ReQBQCsdQwAPSHL7ZTPqHQVUGZ2AZG9Gxn4ALEzRpyy",
  "key30": "2y5szNRpb3GxPr8LnfzW3ajSvLVfhKqUmjS9oJKYeK6RzpWXxEhYyX3K7on83zehsDC4cS5PU2A5JujuUp58xPq2",
  "key31": "i7Git4BJXcACrxFPQiWg4bd9ZST1D9yDxi97XQfRJEYzv7L6BS9Mon1nafRSWEvTLJiTjxSk9mUBUqZxa8Fc3rJ",
  "key32": "4KV5gafweESUwp2AzSZv89RMmYt1Q3FtBcUVCC6e4GszxHJr32rma7GT2Kd4t11EfmrX5eWuYHYKHRfCfgCQGD89",
  "key33": "4BeQw7m2kmf82EN61L611CutiCF7yZuiEgaf75oQxJJXgxCCX68wmruvUkm75q5owpfdPQ64qtn9P8FGBsv9KHLd",
  "key34": "2X1s8W9w4kg6G1xTuQ37u4tL6n2RZAs1vZTCrfE9PFYjHnSS5gzgrkNLe6TCKoojiCn4iwGd1nDzDpgULy7soryi",
  "key35": "24HxGcfLKHWY5vTiV2SCNx9wPYuijLPqC2SvrdfceDPCRfeFRFdyiYVP7zJd999i343QAmy2RZexycyspdJbLYKZ",
  "key36": "3mupi5k5nd77f81eWcLtEjHEFwvw2rYHFUrDJxkW4guqvfHeFTNJTG8qBG7LUVP84ASAs6ThWs7Rr79xKBpao7nB",
  "key37": "XoksUvpVewh9wFxbD11hjBZTpuCYurh7u6Wi87BzrXhaDigABtPsd6ymDZftYGHSFVynQoEFBS22ByhURUGNN1X",
  "key38": "3ucnfA6Fs7FKsvkLNihF6UiVXZQnbKZXwAwc36x3DAk5TYYAfccaHYSciBos3ECK6BKkw856m8nmPEziyJR7Ci6X",
  "key39": "5fyDqWqre7hWn11ayyt5tLnUg6EmV7F62mD6hNWGX3y3wak2MX1ccPTGdPDg7DKkfveQtwpLhBM42QufDjv4k82B",
  "key40": "3UrsUJjKxJqot8R7nZ5EMvZqURqUhWWWhmspfRjFqRGPzUgEPM8cNpByjRPv9e71z8LK5A888R1hcQKP3m4fRmcx",
  "key41": "29xrzsGmB2Ehpa5kfrtj4VSdyR9rri4nia4PkmcnrTZhX4B7CaKV45KcJfyvb3xaFseXWquFhhFe1VgRZtPdhA3s",
  "key42": "2VAb2Gpuj3HKvtaxnKn3ZpMECFkHfmtHghbm9PcjQgmjkK2w8uAuZZ6iyf7rFA75n59vmBaNxwutRRjmhJLkw6Au",
  "key43": "5hxY6WatY3fiim33EWavbqT5LkScgaF6b4SBHHcqE1PQueHdo2G51KGWP6kkvnbvL1XyiG4HX9vuMr1fKQST3joH"
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

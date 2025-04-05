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
    "4zupTBZtXVo6DWxgpmz6zt94B4Fwn4qNyDMmjekLMutv3tv2qnWL5SZPh8Fvsk2piNwbab8ao8ekzZE4WZZ2qsiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUH7XxqsLxLm3NhdJCgaCzpPnk8VongrakJMY8MrN9uhjNrHM8QpzmytcjVYb7v6KGynsTJ1Jjh5spqzVD71E1B",
  "key1": "4HYHKizEHwth3Nav63VCiw9smSdUauRfcTZZEhp4g4mWAYahVvpsMbSVbZLu7J1kkF2ooXxDU9uvxd9z93Gsydf3",
  "key2": "cwsZccHsKPVePYCyumWKSJFTDac3K1Rh62HMLb9tx1Xg9hxXX2tXvZYb8uiJso5FB67ZVEjAvyrUs9zVA6QVGp5",
  "key3": "5sNVcYF81G33zARQbd6FivKy4gCbpky8w5bC2oZ4rhVQKAtj5m8vpBoj7qZrfwnWE1oAufCP6WXakdKiUcZLbkRR",
  "key4": "DteE8c1mW1xQjZkJZFhocpvoYuAwY8QTZx6E7prrE48RVeCSEB9QKe8vhA1NfcuhqDDTMVbpLhAwbDVWhXQmTo4",
  "key5": "SnZY12fRsQ7mcQysqEs8jdStSXQL2L82Qn9F9BUgDHhEkTPJKpDBYSu9BVLZVM47U3hVmNe88WZh23UnUNoXqVg",
  "key6": "4FdnP4ia7yPR82jANNpRs9qN1JG6RjwBwPRGHrKRbKECBUqEiNuAZPUbVwSeqqdRs8NpKisWBbMquWBnm4FuAzqf",
  "key7": "vZcQbJdkbGV7opSJHxJoHJAYe2urdobp8qx8Ukm65ny1NaWHVpUoWUhbh2gb6aQrPSCmiKz6ux5gPVYqA2CAQeB",
  "key8": "352aSmPEJuh23xSLFD4RptFHXABLVhpDM6cVaQr6ADcLjzfXTooXNeHBKogwzW2aphrbHAjcaBFAzap9PFJESPCQ",
  "key9": "2z2s4gTfdbrRwHp2y7fmixqvL2S97rpAdBfE9fPBNWuNb3YPcaTxtorZj2s22imPjgugXYvL7JRKVCZfxUty6Fc1",
  "key10": "YqU3RTytgpYGNy3g3MPtdgwUR5rDqMp98kfoGpHEedht7RWGLCChKgKfTPuWKLS2YKmjdDZH7smPaYUSarjsePq",
  "key11": "4wLmHx1gRskDgaRzDx6B19nEQt7PnRBRW2CBMyNzYnT2vMuAZn2diJoTbiftuGxcHbMUThNgFG14EyEByU6P2CCo",
  "key12": "3AW47QcpYSJWxS6HqvBZFGUAWFiyRzL3R8JzShmZ7L3xEX3LnMpBkH2ECXJLeX13WR7SoTSdxXrJFvXPjiUcwuXY",
  "key13": "3YqyR6wGZXJkUD41knPuWqamNqCEi92Gh69YwpYUEmA22bp71UBdX2qkFBeKtsCpHLE4RbXSQqwEMdkjQq45QtuG",
  "key14": "QLtM3VUEAbRfakk5AWMwC27JgNU4ffmq5449ewZtae6EmWwgWTzAvJFBQdCyTDkPu9f7bN1Vm66KHb2Yn1UzmAf",
  "key15": "4oooNomPAM7x9XYqtbK7fAEUFpcrxTJYrnjLrvdfLSvAtLhie6ViLLcnfGyYWdMnEtWnFBBJUug3h5xHzM7j96ub",
  "key16": "2EtFJMzZY68MgXDe6H7zSfpmkN1MfDzFhx5o4ajRHH6UPd39FW7XVFi6eZ9AdeMCXQbRSLpMwaGJgwrcmEyHp7ZZ",
  "key17": "5a8916dPKqMFjtwbT8GGcPcMFUC6qXqZ9cNGwQ8WJrHw2msfEzEVPpCFPAa1pyDGAWvqNcb3Wkuc8hhZFFXX8ngU",
  "key18": "4ofgKZWc4mPknHW7ytD3kJS4wwvBJQ2Vy2uf5xLbFnKGB9TEoVe8mQKPbgiVuka3JfjdEDQHCgbPjetALNhRiwLC",
  "key19": "4e5CU2n79EEftGk3zAedsJ53tuUSFhN3MzSPXERLmNYKc4xD8z5X8rPCuEwvgDUdGbCzC4xzBcaE4HmrSBWzK16K",
  "key20": "3BstLLs5HbgQhqiF78cHWVzEzHdbeLG5kh2B9JoyMqmARHPLi8ZJrLmjKEZJ9C9cebN9KNRnLQL9Wdnz2kvTbau7",
  "key21": "2nPpqb7Zmis8XA9pYz5azQh8GFT9XqEVbFDPbC6dCtYmipPctH5tU8znCWkcRYiiNRo6WVSucVGe3Kcjk2LzBPYb",
  "key22": "5LSec1gkRL822X1HWJZaH4HtVgFsynrJKzwKVkCYpWQHGa7Qs5DXWQfqbcRXr7rxfcASGLVUYSEkPUmRtAnWR1hP",
  "key23": "4kndc1Teo95v9qms3ZeiXJG41PVfGbBTSx2ij7HDpmM91QQ42ZdFABKvMMsdkzcEEKGdc2f9QbBMjcPm8UjfYPqR",
  "key24": "4SXEuvktR1rV6ZG9Q4Ny6r8jPGT3e93YkNnsQfV6YLGgseEzJaL383g3612mgUpb9wb91KDLYoxkZMfkB2ELESA2",
  "key25": "2c4o2S6GT2DabEhVJuRg4zw15JFwzwCaZ94C5sc2g94aSPweEMFaNUMRkF3tgXJgE5ibfhGW3dizgvtmHiB23hrq",
  "key26": "4Nyv2YBa5PGtoyrTvyJENQD3dSdc9EFcLLmStHxZMjSY3cyt8fMR47t8SXR6VFQRS5Jg9EGoY9qSJKmaupbXS2qR",
  "key27": "2yNVbqgR6KcNMT7dmnkke6hQ9eEUuKHrmvFeCor3Dbw9z242nV2i6PAASKmfDeQg4FQ6YpJRkGyZ17aPzf2LUaxD",
  "key28": "HwKMeAzCctFu6Mrz5G5eZKEhqL8Bp1Xjj9me7GvSZHUy11z1EeuciPBw8aQniCsV4CjRsZSLLKBjEWXQsmQE5Vx",
  "key29": "4MKRWujQcPWPpuo87VxhDuFxDXpbynVftUfsn9QLYuRf35axsPudn6ZiWihyeF6cRSr81WYbN6nkD39qVSEQhwdR",
  "key30": "72hY63ZceAyW8kd6X1THnmjCrMnz9oe7ahyshaLdvTCfRmAQzeRuyQGciPdxpjxDCottcewPdTLUnJNqKcyENy6",
  "key31": "3pZaD7CGHRdNwXC5QHpDRXPQG4kvmosdkLHjnit4MNpcWS2wPePqyrpoa2p2BGXs1wLipBKyEu1XHdWwFETUFCcm",
  "key32": "2TWvU9HXdW6ZQqdKx1if8rwJYTRatShHbbxRguY9Ym5qmX9yR28b2pgGgZjqi7CoEmzXG1bu5GZVCyqtvyECrUfe",
  "key33": "V3FSjrbN2h5n19DaJvB6P9xSEtcwvjQaiBibHrTmEEqYUuREzbXicDvQyyrMpEMH4b5M7C37d745qUUFXPHT3ci",
  "key34": "EkefP3C2jXsz2MR7mR2zi4FpmWr5zH8NZTmn54akL6xbKxqhjYB1SZV6CPUAjpghTKKY3oRy1PDxA1EyMhuVU4y",
  "key35": "Jm9bkojVGocdHRNrv4KCJUUM2WuvzmJCBU8ekiHPZEjdsQdha4R17jyCHABJxFEWvm9UuWgYxKWEc2CdWFzAoFK"
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

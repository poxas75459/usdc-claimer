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
    "3ukC6Hy1BCCBYXkDby4gZdSxMbupqPVNk1m6hU1XPmueZ7CAMWAukecBmS7gFq1KV4rHyYWd1z7NYvjPnPrZrjDM"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3T4gLtsTaqEzDrncj75GjiYAZfC1y7MG54RwJqACyBh12RSDGp4PQk27qyy2JuXTRLpsamJpAYWivhxsGTZd5fXu",
  "decoyKey1": "3m1LWS7WG2jHNQTW4iHGa3wTJ1VSxbnjZ1N8gnDTUaD9d9KvXMMsfowozqdTfUsCyuZQM7nuP54RiJfjhoQHniMQ",
  "decoyKey2": "2mfSxu3MJWp2FF9tXuvq6UdENKLCx48j6Nh6FtLbgWBHhQHnpb5iYmtQLVqTLZ4mAyYcHzS2DmRBvCrcW83R4cnX",
  "decoyKey3": "t3U2LkrhEZkvCEiZfcGjVYNWd6F8tnPQDwJ2W4dCypP7vv4k3o99fVEVnwxXtjgX2kKw1nxHJTjKFd1JJpZ4HCw",
  "decoyKey4": "2wXeYVhLpcL9pb1sN2x5KEpotjRFvKuvcngtK3jJdhEchurxHZ8osWqoAQ348CnvSR11U27TZQJuUXfYJdrW7Gn8",
  "decoyKey5": "24LXhL7mSmyDkcFooh6gpAe8XT5wF23tC4nWQHp2RTpA7YDDoqiEtQ38LopP1zGuaySi6hSjhLUbdUfZfpjM2V5o",
  "decoyKey6": "3PEKJfhcga9eJyJFhLA4ujd8VVAF68xHLe4G2vjKjkP9ryvHtSPSfVLFRakUbQSUkXmqzRB3yjtsAXcviUA5dxS4",
  "decoyKey7": "3KnKdbhB1xiAGzRmNCfD7AfhNwubVdeAzLSPAaoH1BJCUcJpMYUXdJQ8Evfd2R1oyaaMNuMDaeSHgnvnVDx1aJg9",
  "decoyKey8": "3y9AMMpqGH7tEmjATRM8PGSEEFibjtzYWXPGYbzWXDnh46DdWfN824grw3Xx21GrznjBZHynNM2NmhTPkhx9Wz9V",
  "decoyKey9": "2kLpnWEgktPZcTn8GWybvwuJbFqH7WFPgDPEUBz731e5F1h47s7Y4PyWheYvhsuCxn6KgW56WkgRsRDqpRufsNyH",
  "decoyKey10": "5x23ouuK6mR5MMRbRToEMt5Rj6dPkSBjzBxUxbGwurjEZgtENxcqDfnqtV6pQzCY5JkFsRRvy4xjbMbvKFzFNZRn",
  "decoyKey11": "3d8Kd3Srj8zsthSgWDdnyPL2C8VLCuCuC3QnCzncUy1i49qWU2AFAdVA1b12qXuGP7qiUb5qCYT4YqRVoumsdMiq",
  "decoyKey12": "2vtw55SYhEbD5MoY3MUkDUvBvHxMCs5fsLBfhbeuzcAVdtJXvFtiwcLgFxcVs6WdNTuWhoUsLuA4R5UGoxaEo9ue",
  "decoyKey13": "4G7wUdJynJ15wQJpX8ooVUQgYKM7ZKaLRW1N34D3ATLkZGsg7MeU4euf58D99rSkKofWDCXuPQQ9nYgHiwfjVVUo",
  "decoyKey14": "fLVZ7nFZEh4t6trsLGZoEooXoFbakCZcCCVc9bz5hjbSxqcGyD7Sm517DUx5ffJ3YybY1ETd4sJtsPXbuXGnSy6",
  "decoyKey15": "g9YqrMNEGiHeMw1xuJX2jeqvpVwHB8atqVWooq9QbAh7Ci1jWru2DVMD28ARcRyHiB7LVfBiMs9t8LqNFSvqgc8",
  "decoyKey16": "5uVR8PQM9hS5V5T4vyorRQTXGVjTkUwLQCvvHLRTpGHnyhetRVhTM7R6aswuA1pWY443SQrV1f2Yq8NuBDQrVCEG",
  "decoyKey17": "4ueHey8P7bZpydxpg8GUARZ6A3eFGhfTW3Wd3JECXmShYcCHwzjGWXrT2gmtzuSh6bMwZY1XUXuAgbitovrsqj7F",
  "decoyKey18": "2YQF4UsRJS3nZwnGiQLC7nYws7CdgXCYSkvVu5RbDercmDoPR2iLHctKNtAhqtWnmaPBJoHkCm2W75xZ82jD1xha",
  "decoyKey19": "5Scsz3hpkixyc29SYfcdR5sC6aZ5PRaBkroPEcPwB7uSBjZdQonKK8sEGY6vR2v1wyD1Emio4Sc2nPMiiJoP9X2V",
  "decoyKey20": "fonq2A65fztcFTmexN2XxVoQvaDxnBwf2cyz4TrhfGN5BnaKTh4tEaCyRFEeE26w1oTYZpCGjii3NZRmYiBAcin",
  "decoyKey21": "2VMuYDtPqfwtRZrxZy9zAvJbhPRKvem2hv7L4Pekevk7exeYd7wnRtSbVsTznSB4cyWzkReJ96GVoZ6VQUKXts2t",
  "decoyKey22": "3LoNda5kXeF1CDJZjs95LVXimGPLdBDymRjzrnKNBGbfBnanzwF5actwz64sggV1biT3kNtx7jXmRuky3not27cM",
  "decoyKey23": "5WyEAdTEU1iBmXDciEXKAgqCH9t4Qidzyt3nWcFqYZZHaZBFV57MoTqgv12WvQcvt5f1DaDJQpQwkiZweK15ZMuA",
  "decoyKey24": "3b7YDPzmfYniT57UTmtdHv15roqdV8dTxuxLF28FmK8cLUG33BDoDu3D9oMYz3SwQnK9Zf85nK9M1ESENbYFxvw9",
  "decoyKey25": "35ECBNaskmdCThL7hLR5HfVoQ77objYcWXgrJ8MQ3Vm5mByxqZnk2r3AjrdATLwacRtQgxUL7KEwf22CeC3oufp1",
  "decoyKey26": "5971YAqbEHWRWsoeWgxAAQkLt2pcYhKnmWbd2H4fZfL8sHijAcYeoYikC7AGbHSLAM7N5dAC2xQHy1Yom986eDwC",
  "decoyKey27": "MidgR8gnxQ1QsEXmqVzqyTd3sEyKw3j8q1iPAAYrwDWiNpWs67mpWn7TyWBU6P3VA8kWkGVmq1LQNuukKH55P7q",
  "decoyKey28": "2VbEMtKC7ziLYEbdXyT5hMr466CFdStME8hbMSJwXqTJrANTvXsKxc7Ns8zjar67ZyY93RZvqYqUgfq5rWLm1TJu",
  "decoyKey29": "4q38unyNFgPJh6WmJ7uznsq1zswCNRrqb24T3tZhqBpcKL2Jj8ZrJTEi7TmLEkiB939xuHPGYsF9mB7dNUVyqJQ4",
  "decoyKey30": "391fb6MULeM8ymg4iGUnnCSiHs1LJpXJS44hsMhmXJX9BfdvpqS7htctiAkdME9ZdD9Q3pPzvq87MMxKRvKQgHbV",
  "decoyKey31": "5cHy84RF4zksV5ACzS1KrN4oYg28ygEnT8dLa1E4hRTiyrBtDi8tRaFppPFBdCeG3sRuFmokXaHUXkiaGYoaZWu4",
  "decoyKey32": "4wBSPLpDV3o2Nkp8XKpV2P8fWjxuCsVMteZkAW5q2Hts5trhA8cA6oW61suCyKfMWgfaEbCaFdWiXUH3q61tzwgf",
  "decoyKey33": "58wjs8G6uQWjv5tUEUbBd7FJHEcSx2AgdxRMfAXWi3Fqe3BMwNM9cpg9vD8REf35EzG9ED9hwJnD941mMEAqppt8",
  "decoyKey34": "2HwxmMUWi3yxBowBAYNvek48TUzMmNvbSZDk96JXXZCvX9zfjYGF5u6tRRmuYQbtBwQdvswwa13EtewaaHKRkgwu",
  "decoyKey35": "khjyNbgAoQHqoq682rWqmfFWb7ZkXJw6CMXAhbYWXNyoSEmPqxcRQbMk3u6Zaiv1vhmXedRu51s3gGk4UAhzfqt",
  "decoyKey36": "4zJF6tdYY3SycXL7bJDM9qFmd5nfQWhK4G1ZrLUJobFzdMpkEZLwpDJyNTL8QJdMFUyUuhyAB7dGGrNjpvzfNBHD",
  "decoyKey37": "2AA6B5Jh4hYsZJAnT39GFHHi7WukBgYAMTP4eB6Hm4fM9JaTvcXsoGSPaT5dpLSqeBu6QF3amhfjvLFnBPBQNZsH",
  "decoyKey38": "3x3dJRyE3WnMikYohWj4f7dMUsPYur6Pm9aVQPvH2zvpYApYF9tWyoErjvh2sNvEe43UWixuuN9RNDpkqJ1hNnbR",
  "decoyKey39": "5jV4qjMUW1CuKqznaCxx3W27qoXJ3WZbi7344HxFtsVkzkoCfTrJWehbqYhxXN2h9sK8425KHvRYQyhM27WRkwv1",
  "decoyKey40": "4Sp4cFmEJdYd4YcKoeDERXTpb92MEkEMTQgLg86GKLwAh74YPQE3AV5wZn81HHC9xKWdcMKzDXiGanzXRGkh646r",
  "decoyKey41": "333sAC7X8QbeiZWKQnRr3GXNxasaXSseAtu8pJTaMKZD7a9MRzSeP6wwexTsxGUv32HJ3QDcrDnfuqoKDBgpeZQD",
  "decoyKey42": "iDf8HDfi1YgG7Mnak7D5sKPje4w112Aa9GJyHzg8vRnGQpk4To9o7L71dQnyw7VUGa85YcUorQgEy48yC8eCqz8",
  "decoyKey43": "3ZLDunYr5ZSMU6TjUsJH4QdcF3aT1Hu3kGUtXpw1aDJirZVQEZoGdgaavN5CG9gae52ZQYosW99zooHAGyAxYgp6",
  "decoyKey44": "5eVUzBJ2VUmhthqvGMNpyVSBMmaLS7qYZLoLFrAe7cgyEKHkAgkHJdBg3eT56NJhv9cQYL8T5eX4QM48zGgZ2BTZ",
  "decoyKey45": "2FMzpDGwNNeMSzTnkErjDDyaMAR8acjRFDwuszZzhMEtFtw4ekq3Mbqb9yYt8Moa2zzciM7Zo8PoWivMXjcj4cWE"
};
// DECOY_KEYS_END
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
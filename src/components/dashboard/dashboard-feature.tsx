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
    "5QXbxuSedMU2N4t3FBrBtmmokH7EuTBKu7cGnHPiWKRbjhgaVA1D33EV6XgjeNL1wke7qMgoGYhp7HeNkqvffjJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2BSACFdcDGC8sQ2YSLb92snyupdbVFnFPXBbmuHVejnSJvaupdBQzhY67xAFmxdc6YgGa79WPjEWLhnCJncFvT",
  "key1": "34Gheff4yspZPYtsrJ8H75yPqc9HJoWaBSnFrS4qYL8GEGKAhzSpotizAvWourHghWMExmQgJ214tiMaktfuF1L1",
  "key2": "3Lnm5VVbZrhBpzSKkRjbDDhMZwgVKPqEZDHNDj5ZvAibJhZrZ1k6enEBTftHmRb7ZkoFaRg1xtkkRgNLmxFLCwMD",
  "key3": "3xwxYp9vqhcPL1SHDfqUy2YAjynCg4SFynzagTzjQidi1zNxYyh7FerZ3NodgDNgCQXsLRdNW6ePzhhQniteQX8P",
  "key4": "4uQbnBJHyJR8KgqH8MHKhLGM1ng4EQJ3VqKFTChAf6FD7pcijUVYJ58AMxWwSenGj2zNULuRbzuxnFxXAz8SiJ9D",
  "key5": "2ZzwyxTK75ffk6AvdkiSPpcJdFc1nEjTSWzZ8bdJ7X3p81sstVpsWgBz87Gh7bjE1r75HKrwJ5BaBGUWLDP21NQR",
  "key6": "3h8Sipkk72pgHxsphqxMwFjGyje9t89w1x3s1fVFTGvKYpU663GonBN52kJVN4VyMWnPt2cjkHtTkpGbnTB67Kfm",
  "key7": "5QXgozdVPHVrMiaDfSxL8suQK7tqRZBjcpZuKnqTdxyG5dpM5NzT46GfS4SGpz6RNwzMU1P9inEM2t4R31TqLMJG",
  "key8": "4HCNUPBpL2FsBcMTQGobgvyCSceAjUFwAnDyWXUCHr4d4KMVvFQL74jGNRboptjAnxhWwACZVLMx9LmJ6m8wN29Q",
  "key9": "5LVgvN2iJ99aRSemoAV32qHZPMDb8Hb6tx5EvuhTVkr4ZWgbFwFKC668RZMdMik7gT2fz84uy4Xeq8zrmh6JhESB",
  "key10": "4umQgEn4E4RhWiH5yajpVDoyXMsxu4xhL9uWrX2E9HEzFc33P2MVZw3n3bGULmGEwXp8NbDuWXmxcktZvs6bpoAV",
  "key11": "2DbGZanqJPStNe85Qp9MCXBdNfPUWRnk5eEsNSmCQfz7MApj11BVZf3DDzvnMMAoHcn4RJ8XN1af6m9wV7GJLoiT",
  "key12": "2bd2U4bZ7yjGoRUW2vJYEDBpKHQkaQhr2XuT622ZVUZR5zVParaknBecgXREwWEu7F1tH2WNtpxK5ttnUMjS4SsT",
  "key13": "64Az19rX212JvjpBafG2FkkARkHtAR7BTBghpwqeM1ungKA6WxQkpJYXeKx9BrNxvhQg17MfDJRfLcVr2NWiaAvA",
  "key14": "3ukfZTw6ceTCV97eze8tGfSAM4sQQdq1Z87iUd4ucCuwoyLNabCUrk2skCun77XEP1THQVvqmCpJZA6igeRsTYjM",
  "key15": "3eCz4iNMuUrfo5DGCYbdNP8k9bBC49K96Zoz1BE3otDjfVj1xxtWxVmDDPrcXWcdiiTaXTYM4nT1vMZzLFJkqErA",
  "key16": "DkjhQfADcECdL6rtZbMQj2i11oh9Y5m1aKtJFxdPyrWoftSefzskAe4V6Xhzh8BEKemsAbpvo2JDJ4yJXDh1i1J",
  "key17": "7nbiN6YuvxdHsEoCbZmxHSR3cK5kzpQuS997CK8sHT8qL9RMLeDuYFexm45rWVjkRvdLs1KJNMmcdBjZ3LtqLVz",
  "key18": "oHof41rUZeqfKy4SHyfnFQ2vGenCaaurQXHwRJyVwjV5poYCdLqQfPSbv4kK2dQj7CjZhDmGBsMvSWE9BxgDtgW",
  "key19": "212CNX6Yk1bPm4hRVKrsVa2EA5cVgBrnUueQa9eBkvHtxaDAyn2DzJSZBY3A4vWnvvpKHEC3WkEJPvBv9w4DnFJF",
  "key20": "wjJzqrpWTm8rvY8rQrYUYBFkUYJYPZ4vVLmgUHCkqUVT87gnoiw1MrWjcpEsgPVDcNXb48JVhPT6YLuguh1YE8r",
  "key21": "gtVkCqBwGJVwikU9ssqFtzavFZTWKY63WfwmMvBvHYBZfJfJRetaj8ttFHLxnYXm11sEyHgC39hLmjuVJAYUnzn",
  "key22": "2b7We6iNf49rbsctyQpUUkzsdZ7EyqUTy5z7xmQuZ9XceuEKTQYcLPkKH8rvE2HezxjJbJpZKYjdpFKdmeZKrTpJ",
  "key23": "2DnE1Szd4hW1SKGJYJkUGDrSSW3xYwsWRtKEcYqgJJA8UqQFbjnjtzkSprH4NQY7wbvWpkQ5cPE4rzqHUtvCECxP",
  "key24": "MexY7Sc717meV3DKpyp7bK6QAJbJpsjWu7qBCfgL5Egbmw3Nf8uDbKnAc5PAEkz5ciQYpbxUeaU7vwgXiNqHnKE",
  "key25": "5R4Ym4eaWNmXkH1QbytXX5mJA7N2HHH6VzYRNEXN94HWG3TwGsynfMzuYPRdf5WCwr27ViqVcP1NKGeW1zW4U45v",
  "key26": "35LBQFQofi1hugoG4VrM6S4mnFQe4E2JMaxtbFD2EjDuUCrWL21h5jtdTXawXw3Kmmh22ts2qQyN8xHAXh4FoyW8",
  "key27": "vv5Ddq6UFqfvwZiuWfYKzj4sqv8Xd5G3Yaj3tAWZyUXDu3HPmFxxusnAUA6uwoKydzjBiRMEje6nPxZydRupvZS",
  "key28": "ZbLJ6WzpwcjLDoxNfMS17ooH12PgsGd9K9nANz1Mr5D8tpM5dvAQcRu7uJqJworwvuUzPgAEcUNzBtpREGRnZU9",
  "key29": "3eCpSuMHgyLZ92VvwS7f8j6NwfK6TyiUUBqfHBdeAo3oVuy9sx2toatQ14QoetXbHZwYVW63oT5Z757sL3pmaBeA",
  "key30": "5v7sc7Fq2616f8uYQ1eLUuTRTVa4P6EpiQhYK4W29aetropXzJ5VKmDu9JnmpQSpwsqK6FuYx2sBfYnHF7Vc9Esv",
  "key31": "52kYyDe2fcH3N4LeCm64KmZ7tKpraV1jq4ShvrURNcu8W2xN2R8BsxKcqoBMb1YeNwJNKy7PzMT1P2tmPhvTvRrM",
  "key32": "64tvDvSddw9cW1CmizwDRFxqrqJjDkE3GCEJvPQvX3WrontaYiY7nuj3wBbE8Pw687AL3S5NvtpwsyuZHA3LQgr3",
  "key33": "534x7bdUTUQqQ7rJuxUgP9du912rE4oSY2onEGyQNQMJQV5jgPrps7AAsQFrtCHx56mQcdxr7tnZFrfSHDLtTuqo"
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

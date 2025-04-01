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
    "d7PwAk8441mWZgKsHrvAERZSJLv54URBhRvgridu1tdNF7XGduxzjypEGR2AqnfXK8bJyZ6CkkzgnfZP6JbJXd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55JH5Z832vHBXnWztvXge2GrpQnBx8rwgR6pDvGmXLsb2GJnanokFToGdSVKYHAEzUBMDs9cvzX8KuACyZ1hQ7vD",
  "key1": "VZse6vEN2K8zgYEFz5gLk5F8LqyQnHDAqABwi6GQi6jrQ3H9VAuGELS8C3dWjBUMvE9P2sDNQP87J5oDTzKVboc",
  "key2": "59we9hNVHwR5wDDG8cnuY5Gtk36Md48A8B9zHhXiyzc7Wb3fSG5yHj5TWZGbSGGYkaW21swrJfNwADNkCR56b4vg",
  "key3": "4qHyw6pgvzUgi8waMiNPM7cLHH4N3ZLzrwFvdwUnZnjSiJuQuAqQJs9kbEh4NXcLZ1X21b9rS1zNCtrcHVQJsHgU",
  "key4": "3kQxfahqcVKYAP8t4gdHd8J1vwgAYJ9JFSDkd7ohDf6q34Wt6jTj5YKLChkMmjLGy5ecEbjfknRuCsNxPWeBDjH5",
  "key5": "37bCr7Qvbv6WTrRk9Bpt2D1ucsA1LLH9R4QgqjKFdDkyX4S7z1LRUiuQekWZ8UG8i3ywLQMSWViy9tXbUJPzg4bF",
  "key6": "1c8HevJVm7xJCFR5Wn5NAX5Epw6dPrN96qXGZH7Djp47GFFFiXEz4kvbCqFneVxX3PJTJqUgoLg8qT4rP6BCQyg",
  "key7": "2ugScGMfaiznBnHTbtBb3e3MewDGSeN1Nuuk32tNwcu6n627SRM8mcFvcHWS4xMxykuqW9fWgYKJiwWvHvCHHfbZ",
  "key8": "35ubYXp8BQSjPC8HnVcJJVXb9DjgrtQV7gEmYusKSc47a3qdF1t76TDt1n9VpYRojNZFUw2eyh5WXfs3bKjRBePV",
  "key9": "3GGfx5o2KjYkaUD3ovjfLeGpmSWARREYtv7uLE29f8h6cscbUrWZuMokJWDCNqpKWdxQqAx3SL7nLne2tAHnFLjD",
  "key10": "3baT7W1EfiZ1N9MgLJ2sRmLrhSghTBX5KyDW2GP2WsRZiyF93vT1E8KTP3kGaG8sZGD8EwH6snqws5G9Vd5hHHg5",
  "key11": "3jCbjpt914KH46mzGA8yfSkmeFcmtLvdyP7M75hqFHyJMJvYrWg6eLD34Wny4qyFfC44zQriyGQ8E4JXfYKt6M3V",
  "key12": "37noq8Rm2p5ouhSMAbQSafCNDiGyutWUanzRdJb8XeSfGmzNfVc1freC8CWRW9WP3v1j3DMnsNiHaktnbMJnULS2",
  "key13": "33H4Bqktkrg7fTuDRL5fut4DMsT8xqLUzoDUJWi9Z868SZcJv4bL5NzzpPjf4q4YUCuNotAeJxy61xWgdraGj9j2",
  "key14": "5F5CA5z8HXdiygNpxdJ2qm3feEJg9GQmqKtj6cZVsbCPPC3DHemKhDZuDR22pawn8bPtaKFndfTkWzPi7bNqxsaH",
  "key15": "4izuSCxHPnf6qAF5wix6C3ND3rr2VVKdPvppJATqVQPjHXgu4rr9TkxYsgqNnjP6WFWCUwnBiSLfVvJjEo1d9wjJ",
  "key16": "d272HybPJUfSnCbktyeEE6uZNYAxGPhJdR7BB8RqY1xCvVznXKm1gREuQCUXi5Q3PhvrwTR4C3tAiD6NUiQXf5j",
  "key17": "5Rn62yQNWm1gYjZ2GMohsdm2D7H7ibaQeNygBFHHtMBSibKuFmUfUCFwtGbwXhqwmx3cimERscrHPhXEKRZ7xVde",
  "key18": "5oVH2zWpqryf39TnjjgLMGscyvffT56qchPf8QksHVVrhA58vHwkuopCxTURjDvuprSjhLskUCYuKAL55ZWw8MBd",
  "key19": "SB2vR5a1wscLBF1iVSPUHg5JUgJsZwKdKCTXTt5T91gtenjzuynrQKDxqS87PS8SmVoQDfxWReDYFDjC9MDcgbF",
  "key20": "59L5HkdUH8aRbhypZNYg8pjcXfuRruRE1hHdStfMnjmdRF6MGdGv73gnhnZmKpJDUeGDxwWGqcHDGQPd8h4Md3ya",
  "key21": "2mJsMskigSFvjm6URsoX3Tf19nnJ7pjAwCug9PbxzjKfEyDTFJkqSTYxX9x1BLF8AethBavnGMvquTJBjZKugjoS",
  "key22": "2qnJjnVNw16ZqTf5qMjBsnuvJjvqe3LYsjjbp7HQkwAQvf1s8XyC2CYUiovdeDfr3odDgXtubFqP8uxmTsNmkh97",
  "key23": "2TaKStAViPn6sYQfXZE1sv3JARvJFZX1x1sAsa2epdMxbGdEMrDL53fpvpvAAyrwWxc9sVZ6QokUVVG6yzJ7QEYt",
  "key24": "36yFdAij9wvv6g167YwY1reytKPZhUSHmCAuGKfAqDkamK97QS8uhYWWNPrFz35qruHHLrsSLoK2m76tszWYQMZA",
  "key25": "5CHWoddtrCbtyaQX3Aciegkmv3USjFHATnmLSRpQUieaywq7azVmQQhco9TFHHNorKoB4aGjNFANKdvSdD93C7DN",
  "key26": "39Hvk2kqxMG2tGdfafpqshtejEZPCVdg2BQWWzbYTtLgvWd54NyzGfy6nN424215yh8aoj61Z43MpAqSMqqgukCJ",
  "key27": "hG18spkUFN3zhD5FFhUufbNBk4iQAXiUccn7157KX3PMyfbXAxQgDE1KvdFk8VBHgzFnt5GAaDVDEiEpSg532uK",
  "key28": "5HbtYwpp7xbRW4qicfZ5quWyraX7PVZ6e5DNoLy2McBPK4o1UZSKoSrYNG6rGd2AQPhFHddG7m72aaYMb9uU6fBM",
  "key29": "3M7beqtmAaWFzpJLnXvaQ6nSsFWWeMBRATFKPQLdwbq41QmGjdLDbcLvD7ExqbwcMYRqipsSe7frNmAfV8s4Lu71",
  "key30": "2EKP8Jtt3NcCsPoFGdS36rrgn5hm2dV2Nvde9uByrJpZo2AW3PhyuxhHasRKamwnCNpMpDyeuGdxWuueENatz8Dc",
  "key31": "42GpsYjMWcyrEpqBtDyAaoTtDc3QPXUHtLfcVYtgpXEZvm9WFoGCc8zye9e7MWT1PFQen4zcKCVi2w2wbsWFS8pu",
  "key32": "4ndd6wtH1tE6e5tvCQZodgAJBJDaGt7opiYnyC416pyt7yQXwoZvFDCBz6TEyH7eyNA5qDwyNV4pEQtpPeYMNtad",
  "key33": "3YfRmS8e34ngkUngmUE53SxVWB27cJNBoZ2Mdcefh9whyKrNCpz72tF9CDETXmcnHn9nRzUvLRGQZKFEaygf3s5C"
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

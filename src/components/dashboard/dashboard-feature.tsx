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
    "54wu6KJccM5VFwFGi9pt5yeLgemfnEkDgPHmqRdcyYMUgsAfvEstzJgeTdBRm2igzT2j3iLr1ZQjLAx36EWnboUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMJeDX2xgEWQGKBvaY4JDH38xKZVrMH9Vs1q5M4zHUJpYs4UkZwpYQ6JU1NJKKAYrbW9MDr51e3Kx29m7Eh3628",
  "key1": "2ye8TJ46arYsnKPtTF7MftBDitNVdm11RDPTFnSdf6gK2BKQKbLfzvMiTmQ5SX49aSFedS97KYLZUXBHnVkoR3jC",
  "key2": "32ZVtUPW4JWUndzCFamfcMwf4HKVfVsdfUkBorL15tekzEKqJZLYptzjNHJ5T469iLjLoJJHVK198RxPn4nXd2Lk",
  "key3": "5NFmEJh2MZGoDG4gYZSDwQCbru7wS6TuKLGyGmLwz1bEaeaeqc2iD1K8JXQnGHhbTTB1ExH8pLDdHs1soED8YSDn",
  "key4": "5vrwEurvkRUpvLQnsxemTVfLiUDDk6g2WN4z1kxezJTVKa1FvCARL4t3XQVGZp9FvfWm1QqAEdnbLY7CTMecmEJC",
  "key5": "3Jo1hYdfT7gTxPH6x1p4rTfgQJBMP11jNwopfiMi1WHq64uGnyoRqAgmeHLBrRumMutKSyVxXDDJkfsziTaDpZ6T",
  "key6": "kFXL2cbyfRhA4NSu1SCyRtnYnCt8ViDLMWrsaijKkAUQuRQm7ZBYReFdE9Ggp1Nm4rVV78p5FeQim46jBaKVV9b",
  "key7": "5KnnCz1ozKp3x5arsKZaJMnT7d3Awk91keq4fLMvQD6rst5Gkn6o9WBjs34eXiW16vz2cjTCi3483E3FKG4uDyiR",
  "key8": "4iLxryDnEkvnCjJAXnWADbCKSCtwqMKRCVGGPCCX5KRTLwKP73LWrTSdstmrDhx5HfTomnvSuXcjv5DBkhxxzcs4",
  "key9": "JJLQxyQUZHgXWt4dX8eEqBPzaJTi2s2r4CqJXqS1yQjX3m1JPSquHfeyoCv1MnKBrQX5L8o8RDice8E9RLcrfdd",
  "key10": "2gJJAyQEQA8Pbq73uwDdeUYaKHJK5LqzdaM5BBv5rCE9nXPRiGvPPcyYeUHPUWn8zS8QHK3Gq78quJhWnhMyY2Wr",
  "key11": "3iYeNs9ZGzTUWraYBCYzJvzXpmrcLhqBtf7nuacpZ2tv4w9xJaFftH8dykpTPs1ecgxDasjJpukeMahHfrXpKMjK",
  "key12": "3VQqLQz4PpY2PS4xFCYDvyVPkf9c5pMd9w6oyDGyWr6vawgVUM2HqQm9W8PZwyQFQumUmEQbxx59kP6kruUNPTii",
  "key13": "4b6gkquLQa7NR8CZDh9ELCkeDfczH8mj6xteXP348yS8CGD4sfGXnrecxsKPwsb2CHj9bHATy2sYDGh5UGvHTHD9",
  "key14": "45WBrn4ui1jCEED581Pt7kx3MrixM17uZiLsqVLUS5g6vr7LWVSYPsmkJ6qjgVCMRQDEiJCzHyVsdjrK4mphaZqe",
  "key15": "3bhbwSGK1J2Z3dV7DExAUavokHnWpX5L6GvzEj5sHkAvsSw9uqvz6wYsodwuuABz4SJfCfFJr1tfKfT4GFmKD4jc",
  "key16": "2H4Hf9KiVKiLpDX1TRoAz8rhfKZgpq8xGtQG2EBo1vzNRavDAXJrynaRvVvubLo15X57Q6oZw2bEpz1HmoK3Hxuk",
  "key17": "2EPAA6WEYxaxppKU7Cm6SU6oaxT7dJquTAdH7yx2nZTNNuDUdm8APajWK51dZR4rQPpL2Ecvyr1ZQiZVjtkHxMiR",
  "key18": "4cgDLtfq6J6feoCA6NQFwFhxMbPBeDcJGAz8ZTbLytjZ4sNJdcnf9459mM7VZqHVNPcxaoJVh3hxZEBBRXH9bjqp",
  "key19": "5f3e4NEFTVctceg8mekQUQDSdBNeGM5qKhc79F6zX3UqH32hv8wLtzBzLU4HBhFoigQ93yvoBmopwNErAFWPeAYE",
  "key20": "4N8t8toJVSDELnLMWHB1Kw1eTvoADKSJAvzJwwLFDrCBPCNQDcqeY1VvVZBjsrvg6JUcPfCJjXp2oXfQwBpwzSpX",
  "key21": "NvV3Gb2tztwcpNK1WYZLcntpwNcykFf4gVCm73oYZqPSQNFAte2P9jeFUWoTCFdrGnK29n4kzaaeyH6hdtKk9y8",
  "key22": "C7FU25qiqHbG8TZCsAvFpTRBdxK16CCyGKZQV7V4WaXqucW4iM133czd776VuZdwd2Eo1BLe11JZk8hWrDgiMSp",
  "key23": "J8gRJayo1MahxHDxFHWaUriJqMF6fcCbQ9y5iivx79MDhEpkNoNDBqexjGoyh4ZBufkqGPGXBb4ZNcgGSa6JMy9",
  "key24": "3QcYDMPXpQJZCPs96fCbPi8buix7f7tbztTXCVCc3hAjxbKwsC6ned6xaoHNA3T7S98upywgmkL3vV6DEJBSppbf"
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

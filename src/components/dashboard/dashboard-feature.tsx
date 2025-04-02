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
    "LCN6cM3MkMgriXXAwx1ah74QxvKyXAkVFtaSmNT93kK95s8HNtGARg6EmmLDRyTqijGRCoYwz2bQY95VtieJy5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VM5YGH5GaYxmkCwz8FwQh51SuqhKwGSMGZwCytGkHtE1XBh8WrkAX6VVUTe1ox9Jp48x5P2xfogjcr3NeKAQT4g",
  "key1": "phvuMUAvXYUTpDatxufqKBVia6phGw8wV8epMURcT4Egvzb11THWuoaL9qnUkYcTyrPNqYzaAjLnoH3YTk6fyAX",
  "key2": "244NvUe5saQTnzbzebbMnXc8X2mwyDUDHbHZoZLuQ9nupLyETTGfcR3jfyuEtMzLufFteSMq59RRW2s2x1G4TnBz",
  "key3": "3aqoJiHGWNBu3gLhHx2brtKxAbUJoU2TvFLEj3XTPpNc9LoG7iX1h27jYWPjERC43fCmDa3tM42jC8g7vZRaEXDs",
  "key4": "2UbD8TZuYjhnzEEMW4scFJqmMEUJNdFVVf3DNvadY8GztvhkL2C4HKbAvzFKAqLwyR2UpVkcE7UuDAX6Ap3oodPF",
  "key5": "57bdsmfGjMniSn4Uew2n6dGmgWEz9ZK4rnyLhQKtbLbmH1Fx3hCv4x3jY874G4Cs1oacRyXC7tdxpmeyqNr4eHxL",
  "key6": "556xC5LGFQaiz9rpiXiX9P6t8wB569nbi4Rmusy1vqceGt8X7zH9kAauUXX349n2Bd1SNbMNyQ8VsGPhLDGSby71",
  "key7": "2KhqxhoMBcDKDjEyf8JVZktmN7VWwLTp2ng9hWbcVVNmGXcBYS6B8Dq6WcAjErFQZxW8vS7GH8LucTg1PYCG381k",
  "key8": "5tjmcuHNecGPK8QrkW3ZVRZFjrsjHSvfgrCYqJsxHzZCyL4x1zaYW83Ey66dZ3W2mYAUurQXne9jW9RrFjNY6LSw",
  "key9": "3DjQ51jK6DdmmAUFXwtwEiu5C9C6TykVkLbWVEwiGwbefu12ch6KYbaK66GG4GbkhXQuiaRrhdkJiKoCFPvJKgqY",
  "key10": "3bwCBb4mvz5gta8EhBp8Fvbi2KRerqmRnZ1X8dKtph7dRsEMsLpGtzERqBdkB1hAVMRLATzR3VQH6PMTcP8pEMjJ",
  "key11": "5FKSvXUB9PAxXi1oeai4HTuGdPbootH9dbmv7DDopJGV6ggv2ETosQ8RVoabLE3i8M3jKFvT9gvuBuUWRHJGyw62",
  "key12": "45bUSk6QpxBXWvuHWCfsd1vC3brb4tz93dM7ubxecrn5YVk1FsUukR35Apvgx6vWWYoHCStxLq7SU5SzxS6jF8tg",
  "key13": "4WQ7xtLA4rP8smoVPN3pLhbrPWJkGj7N9pE8V4d7nqAWDrB2FSi8X5zzCTK4CtZCadMPWMZ64sHoK9ZuA8kgvoaz",
  "key14": "AYVzhDTAPpkhLmbg9kYSW9WDa2xSySdwysxugy5my6ufaKfZb3Ff1q8fMffDq3qVGfkt86bRwcXgP5z2fYtD8wq",
  "key15": "aKFiUNHNnWrsWq5KogZysxBEESmiR3tmhGnq24uN5Rj6t1XxVqoW1q6foGVEfxc3vsZH5ReUVLPi19nBztuuQPR",
  "key16": "3MkK6UjsfytZ7vTGu9XgBfi85NDtX5oznk1qEo7hWBaEuDr8i85Qp8ju9A7b9w7LsSjRBgYF6KFhudVWckVyHNTW",
  "key17": "4tQ8gGn9ENeurS5nshJRJGB3nuYZrFVu3uREHyEsi7BaqRD6em1oAc5HGpMuDD4mguHtr4SWQvpfF3TVWKGGYTGQ",
  "key18": "3ZTYcXd2r8s7TvLEEJkZ5LM5eUxv8r2mSG2JP3BobgfeAQSyJN3XEo7QqGuX4UrXp4Ucjg1Bb3snsWdjRkdVSSKc",
  "key19": "3y2mZksLcSrXS9pM7sFe7eMwxxi6PDN6EvpYA5umeP4v95b9HeMcpNHQ2Dici2NLuieV5foTFcp2q3ZDFmwBNr8Y",
  "key20": "3KyVS5VRKCfw6RJzFbD1e5TBpYf98mQD21fX3v9x8EhwFLMSfXHAAQVPscyaRiFDSBsTqW4yDq6FiWZqdcVFZLqA",
  "key21": "4P6UKnnJRViDR9zsr84KUofUupt2V9BrjCoN3966LXSfhtJg9dT5rvTueWEhnpuVQcqsNsCck1Mf19fnq8ogENUD",
  "key22": "4X2Y9ZrYcxmQV6xbVRnNMhdbXisw34yisenFqXA1tGetGECvC3ZpE8zaJZN6Qm6W7hk6e6cgBSymGYD1fUtXggW9",
  "key23": "3EcFBzABeEdFh7GJcx2nPPo4xyejdZ4HD7Ut2uX7gGzfSWQoGb2RsMmhpV4TbCJpZs3iJmyz9HCygTZPnuwNsM3n",
  "key24": "48YqsrQqfsk3GhxqivLeWGjWwx9TQsroxe2LSqAQnfCEvCUYR4C4BudRGgdwj528nsMZeHjC3QPC3xxNobQUiV3s",
  "key25": "2LizXdkGaaffaf2jH6aBiQMC8yTUMhMXqkbbiLSgBfpsVJyNBqren1iwvntj1hFe4ZnFVs37mGMYCH1YzgvaTtNH",
  "key26": "vHWSXDVdZRvPuFFL62rMGyz3fw4XxeXDvfJu6vPa91EpXdxo9Yo3uexoJ5iLUk8gKGE6SDgb3coTwSJSJj78Rdh",
  "key27": "2VBtSVcBsmiSjZLrycBF4MPybtMKWfnuJzeiRBpUSeMQZbV5etM6SUjyytqcT2pFoxhMvYQFMY2fNown1QHModzE",
  "key28": "5aH8g1NiPZZ1vHF3xxNbkT2W5wQ5zzRkaGnTs3FMayM5Q4bfu1hQqHxd2qZ2WXKRiiqMwccJcgLnLpPor57pBS9g",
  "key29": "og9cGfRMzxUtCbKMearniQoGB7YJmxqjbCL11QtHSgqw1SVAiJ6jDpYGyz6Z4Xyb3ErH7wBFLSLBzLihAvJPFZC",
  "key30": "2yuSqyb2au4YMaZKWBWJUURe8CbUz5qAXjZCY2bx8bYXriUrNtiAbnetuhy1regbanRZiWUVLKW2ktqcsAx1Akva",
  "key31": "2zDDoV6dJiqkbJGjhZME65KGWV2EcE74veWRvgHyvpnsnjPa58SBebgzgNDfGieAR9uWsiuRW6Ya9atvFcCwr1iu",
  "key32": "4NDiytMfanMu3Hb5eM5UgwdJrmmPpuyssQ6EmAn2VcveUEfGApsaTuqpHejGyBUjn9x3hNf25Yecn2EXn1jiin3B",
  "key33": "3yNMrYV44CHCThbkqEwAotpEUsM1os2euyXZZdLynaqvkC14dzH6X9oHj9fxaMwWfFggeBtJromy3H98bvuD86LQ",
  "key34": "3pVi144BPPZekKjdnzXdWjm7euYFwhBUoP6wPjo73M9bnBhyqdgYurVEnikRHn7ozCLUMUp6Y22YRZBr5CEmHxp3",
  "key35": "ewjZLHZ2ePMKBQf8JPiSLHB1qZNvjLeFMV9VkXEwEgAbiW8wE8S1VBVjgkx4zNHGGv3uSbufLqcQyQoQnB18Ldu",
  "key36": "3gBHzJnJskMt4LznYkDkaKSyAjE2gXxaouTKPHW7WzdSAdeyYQes1Z5imBzsdR9mF5S3NUF8VjaXFEsr7hGzNbPr",
  "key37": "5fcb2MV943H1jDLByER4kD8ESD3fbf9JnmNg6gvAcnaHM4fKrEEW2WWGv2fWCHQ1NjtSimVLbGVcGi9m14rsF4iB",
  "key38": "RkRS8fWY6qYfs5NpFcVayPHdrFavS5vpMGP8HD5cPCqv2d87cBpMApPRpYCmeZHqXcjTVHW2ePczXShYrXpAvrk",
  "key39": "4wgMFDmT1okZ8u7RWXqdwpeLrUHBCNkNhWDgZJEMHPDEe7EimFWUAT5Xg5mDetEKGxGebAPXbHVoFRrrWWo9QJ8m",
  "key40": "3tyH11yphGgkegwufWaZUucbET2GDjf4P7xfdtJQXMYPkDZZQGAKtUMgokVvs9zP4vw6o9f66s4KShZZTuuGEoMU",
  "key41": "2K6Qthu7c2pLUXPkXrMjNar5y823fKqyZv1VnRTZTd9VeXmJT6t3CpP9NpsYmVxhHaDHtLqpXmZeCtYHsmBS8rDR",
  "key42": "8EktT3M3YwEsfGdRYQjUvFxYq4PgZ7HrKzmwsAG1Yn47VPGupaZXZhFxpsXJ4VnBTtUkzK2JPgZtqsQu5odSbwR",
  "key43": "2JPXxMWLdKTdG2Dvhoj3VvSuvbVXZGRgSMyMjF2JkVWLVAPvtEpA1yutKGwmjk4qGEHiS8yNs7JPfwVaae9WQFMk",
  "key44": "5vR1jMGLnCkBkSDB3PTH9z5aG9SB8g47zWHBQLV6mjG49mVC6NjXRrM7BRixx9caSqC23Z5A4ohtJXsTpx9a8wjw"
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

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
    "4Z1ffg1cFbhgfTzFf4hdkWz5dYD1tHTyUp81FGjoApLFbvit8wnrmoqUnHtMC7GhmNFaTchRDamg8jHyH4QWiCTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLeUWeYVgpEXR2ExYYyftzfw9HRXNM85G7APSB2RLJBhsm6Y6KzoeDav7s3FgtLe2jwh3FbCvC4qtLNmBeAqXbx",
  "key1": "3ZNFQCPEKvipFc4UjKs6NxguKFnCiTeBhndFAT5EB2SvvHUSzrjEgQur31uLWwNpoVd1aaWrWM2AD8z2ZMof2uJP",
  "key2": "2P35k8oBHKuLgUvc4gxXUD2MQ6EmSDDTPksr73cMZvvQf476mrqg6qjtHU3B5ULNBUvvh6owQdDspLgrypqxo1Nx",
  "key3": "3c2MFejHaAgVgAtoKNXGHjeuVsvWQg1MzELWpdS4CUCYuV2jX86fEFkB5SpKSJtWsN6Qc25cBBFjT4R9D9ipRGoM",
  "key4": "3VCwXFqNBuFSYAARc2E87mKZZPDTu79MkV7WFPxgrWEXsqyq96bGgYEvPAALwV2s7a6UUSnJNZqAxfc1TkgH8DYw",
  "key5": "4yvkMk1y8FgebjoriEqdJzzjra7Qo7qhfnMc7dEyT93XumUkX5RrhYHQJmGNFRiU1bWaPeRQYDiQfEV1PQ6ih9hi",
  "key6": "3VSgttHC4wvoHCKvHvqndntc58XPcmzM3QND1byh7UDYCbQ5exraj1osaE9cGp91fZkqRxpkiSUGzJiwYTuTBh4e",
  "key7": "3XdarNKCNZosajWMGmRiv8HsQ5Kdj3Zt3QXJzyvPaq6zLu1q5G6X8Be5RkyDVHnh7resJZ77yTe2knSAzn6bdJhS",
  "key8": "Agm2L2Y462yquXEV9G9huT7GijfMuDFCu38kUEh7mrpPwSXofjcU4JhhM1Y8pmUbmxWretfVE4qJbzNwXrRMC4y",
  "key9": "3rnEo9VQaCgYpe2wMbcivks6fJBieN7AskAwtDm8NtEXe7VEfxD53RugVXsaxuqCj4E9vyyd3nBKfxz1kN9t4ary",
  "key10": "2xDrSnRrhBrv8Bbc4H6tp2BnhFdfDpPpyhdUt6fxXsxiTED56mHjTgeZ9azn4cVM9hbgdj89h4QSxzE28c6a3ryo",
  "key11": "4jM1rXfB2L33WibkFLnKDuTN9KauTDB2aatv4TBWTMXHZq2YZoP2Td5gSq6oGvLh87EiqHy9jJx6TaZoTUKWm9jF",
  "key12": "4Y53q5nEgeAaXHR537jnNLKD1AXuKUUvbyQfo1SE64wfxBBT1ynshLgZtJVmjybbJE7LwCjCsoeL3C8DxnaHDF2",
  "key13": "4hFAkJkW5gUSRBaB14RZG7LXDGXWr82ffiaAxbf6cfSsLJsoCA8GsYt928ySs4C1wR4jLg8GSbWAdKiBv4HJ1w6V",
  "key14": "2EAnTvLBdqYvernrxRr8umyDbssJWqdkfEVxCFwsu3S4iuL7WShDt88LX74ekLm7o85TSdQwkkjcBQqyvpsgqUeZ",
  "key15": "2KSunuccy1rnbwnkDsPKP87qEMLgpdG6UqSYYR1thrzQhi4Ve1oo4sL59LbVU2oBLa8vj3PznScEc2YkdN8Aktvf",
  "key16": "CKwj8agrLFt4tZTxSGK5YWt3tya6yFRdmpQJbaD7cwCc4E5LAug69nf2xokxQjeovbebSwnALH7Kh67qV6j1z4k",
  "key17": "3BhqnpFSuj27nmbdFMH8fMKRX1Lie2X1PABMTkaaZ3LB8wVkPpHSNPchspj8pvs4x76xtdnPqMfo9r1fkF4M5uwt",
  "key18": "deJnyVfJEEtBDMkEdwuqJrDCwNijE24dqwLjom93GERkXj6fGU2VENWPQY9rS4rqs3AVhnpUidcoT2CLmK2rosy",
  "key19": "5Lp1VK57q4Y8CMv7FKk1fnAqUiDAn3HX6kuprCCBjTcLMkYx4i7eWpvXoVqyvMG3hvEvTs7s2ypeoMQVEc5TM8VS",
  "key20": "2pD8pjZ8xLHzoJuDj6NDpbJjxnE3wx7MyFN8Js5PAw7nmCHE6brbYiE91KjAjeK6hqtG2v9wkdt6g5DQgkycDBtJ",
  "key21": "4QgvDJYGKGUvB9uW9LvoFgYUwUHtjHmBfbywHqTvVpjnuzYGhj3LutLZT4aZxYtCf3BZRJqHLkGSUQdu9zX1BgX9",
  "key22": "2tS6ZnqtfawAPaqQczi4CPdVxJgAYzRDEeJvsJoWx8WUridysAeQqCLAeHUp3GW7DwF9bowRcPnoQn9MCjtjfbJ5",
  "key23": "5cFrc1HZ1VPCMh5CZMGjxZSoDYBk9NutnB2jSX8nsU3tpb7dMCDL6qZmxMtsALGSJ6YK94XASnvJy2JSjP8fTJ1i",
  "key24": "2dSB4tdgYv2mknTDtDBgtbBwvrWXTFoZ6RMXNxpfMDY46CKqtRzQH94QYQRTGQeGB5LTZdkHpYDk8cxxGhaMneiV",
  "key25": "4DKLNMmXieqpvde45G1VryRc4dJZz4fpfFKDU9DuYd4uaXwXrq6rjFBF4ZhMGphCcfPVU6a9Zt6xQZbBgPVLosDB",
  "key26": "5hTw8oMdcQ1BJ9VD8tbRs5yvzFPTYJ8jtotaW26NBzAiTxE5L5Lkbq5T4yX2LtGm5wDrAuxdtfgt9Zv8jttEoo6y",
  "key27": "66TtLzoVELE9FguWvApadQ9FMihyeqANJtDnEWPxg9Eq4o2iTR4oA9tpZpJwnUbWXhYAM3LgVAMZZNXuHdNL3kEU",
  "key28": "SBq3PBbF9oSqH5SviZ67pDrxQKiWbLTwsK5fkKfoFrowSpKdUfRbibeuEQ7YgTsxXd7XEoRtpFPTfzDofgKWcZe",
  "key29": "2Y3SQqAJM62GvTpcpPKUcLgY8fN4cCUAXZBRg5HgXX21uihHLD31VpQhtmBoXikXdYNKWcCTurGW3dHWWqsUG8xY",
  "key30": "3WpKnv9gAcGeXaHExLKxTm3sbpixrfZQqgeQySW7ePZokDc2TMNLCz8MMj6A5SXukPxoFW7uVd8TWtUNrJBSUDg9"
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

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
    "HoRzsmeeXpsfEbSje3cgiTGpNgDbEpGWyUExW9xWmjwjrYNZHkPyUsEYLND9fjQNE2V39qL3xGRAaeThvgPWEH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tog7HcpVvogyDmYeQhg2JzJ7yxQpuwf8TAHGznTN6pHGdbJJNWHixN17392s4Lzta4wKTvmMuF6CmYXPX7ujpex",
  "key1": "4Tq3NY5dstkfYGpKDQ4rswY4SHFA8ZRDQmodT8hYDp372bshbzas5RhBgKzrJ3NWMduabdxAvG5rFKfKsysJ5iMd",
  "key2": "2884kfukRJb5cJctbyPUqMsA8n6TkYAFmP4aWyWiigJTXUzBjJ4iUtdL2j1VGtPNXWJFKEMDezzmrZUBhdWxhsoW",
  "key3": "9Wpb3ctezo5eHmiQRmMDHpzaVzcedXthUCq8To9qtVAeWbCVNWbJh46K1DZRSMkkzC3ZXWG27iGejbgvsMsAUwy",
  "key4": "36ucmpdhffr7oehVa2tNBD9H1u3vqz2V1iBtQ2678kQMYC5D4wr376sRFV1JBCFjsDCPLATJnL44YGF7X3k58Asj",
  "key5": "nuQUNmKviFrpz2HQtNeUjn667ct5dNvCnDRAtBkNrdgR3TBbyWH5VjVBzxURxVBSZrjw9Xw4RLBXtTmaC21pffg",
  "key6": "2wtaUGzwU8P7VqoJz3baVQqnTtF6Uvb1NkrpFK8cwFqcNuWUtwdxFKZDzuEuyRB63TjYXHoKfBjCkLJSdK4R21x7",
  "key7": "4jn4yRv69aRk1rQBczxpfQdAbwPFMgCLNng6Fg6Jom7mrTy2PpMMkzddzGLQiSukmd3PTqA9BWVyryHFk1Cs42mD",
  "key8": "5nEwc1rioeh4HvjfR43Z1PBQ13G3ZajkoULTMr9a3GYjWBr2gMXZLv3feJD2HgxuEJy7HAjH56t9HmQ4wJRvzoTY",
  "key9": "4B24QeWB5RZ2Dgv1R9kYWsV22GGS38HUgFVNFzCB7nWwqw4WnPRfqde2UWxwfk3i7iZfKaEPwGQ2PdgmuvSQE1o6",
  "key10": "5vpP5zrqxUCcCqd8J5Vm2jPf7RS19KprZ9NNWdoaH2FxZCQNnv4dDprwHuEMeMUonG6jEGwbmmrhN7WR4JfeVMmH",
  "key11": "5n7qnMFU2XrJ5eZn9HSx6Lj8nkganPLkF67rBoXtSNieyAoV161YYSCvoHGSarQ1DvhtVQZ8FFyTX3vdcJpGTTYn",
  "key12": "ThyWxeR81655k5tighHTq5RCJhPxpYqqXLA2zpK8Q9X32iVXgquncbA9wjwi42EGMETzY16Mtdud7dDT7CK4yxd",
  "key13": "4poqjcQp8rzpyaGMTCVSFYfHZ7LhzGdxqGrwfSWFw9ELcnyomsWeXJx9wMLBAju426b1rH9Abkc1LiLBRX58e2EE",
  "key14": "4vLZNmEEbxkqhgbbp3hH2UdkXczfmiKtUzY6KtQPwEPgmVkTjT8eSQheQXYf9LVGqx3FwhTXsuzcNjiyXjWjsAh9",
  "key15": "4BCpLBNS8ejSdxfJr4xJ6Y5aEtL9RkzXY8XfWhorwMkm678KpqfmMbpMQ4uuWKwGBz8gVpd1NfnSFjpidLcCW1NN",
  "key16": "5sq8RGSMTcvRhb5BSVHBLYUga7VJq8WWoCKGCGTp2Cf5saZPmKecfkU69KrmK8cqsazfTC4FceymKvjPMzUomxF4",
  "key17": "ALVwM1hAw9yaRXqqnZv5C19R5rHZMNh3kP8LfQBUzFhJkQa1AcZ4e7nnf3cY26Giucbp7VyRzYELMSuBdge1uaa",
  "key18": "FFjn2xpAATqEF42qxenqJkCCTaxwDrNEw2siaaVgecKgsoPTu7ds3Fn9MYpb6n1T9DQunhYPPGtWiTBCa1MaHRY",
  "key19": "2TdG3dngv2SLvKA35tVh74GmaUqz9jq7AxGbxKa7CLyHqyqoWShiPwo8jXXnAuxjRpnPBVQxDGendWX5fRgK8oSN",
  "key20": "3nnhPUecC6UtQXfb4vAxDjVzhM7EfXfw9F2LWisQpGKdvDiPc7rX8ccrMXmqcKE46YZmpq2WZkTQbRDjSrX2kjq",
  "key21": "5Je4EMqSVpxS1CeH2XSgnsp9E5ufXqjsy9qLFXSWDVM3Qvbbg2uTPNKxnxD3EyHnST5ytyHLFbDtpC8rZopcewwF",
  "key22": "5iKzYkdzhtJ49GHUYHkT7hosMuiFr6CT1bKDcJwbSMu5eLAuKuJJwgXk27U3zfLHEN7oJ3mnon2BaRHXkqc4zd2x",
  "key23": "3QVgHGniuKkWUYCQASJHPkoNTsuF76kyjs1vyZupLcr4pjCCgvY4PhpMr6BbGJEhns4biwfS2VV2ctSAYon6sEVW",
  "key24": "2eiQpUraaTDdoWCgvERKTmuBnVxwUWp7E1GRob1nEGt73F9293SWdUEYfU7bSNsbUNcqEV6Hgin3aDbdwZJyBWFL",
  "key25": "4CCWfHANRUCUoA2sCkSMgRib243DeuShhBWJXiDkTkShGijHR3SypMeNPHUkiAGZeAWWyYQUf2ZCPJ6QNPoZipx8",
  "key26": "4Mk3bKyRZR5TkPu4Na8KeRwxTx7wR6U6bPQNcvmmxYvjMdoZ3brv1XKrkoHgjmWVVqj6fNJWkNvcY46wuTHs8BuA",
  "key27": "2P6EE6FFWKi9g2d1b8g4WU3ME9Hmrh4cM73G8TYwqHVsp6mJ4UTzzVEU3JDmsWqWyt5XEJbazKQDs4oHrcCE7nZf",
  "key28": "2gVKyGCjnqnn1GyRrrbx4cHozKEpLbsHtBNfBsrWPy4Q64vi8QpRoYeAJUuo4bK6LLGgN2wXYAc1YZcHtQUXNMBJ",
  "key29": "4ZnhKN3DwFeaYbSk1ddYMN7D8G4saUr8QHp8YYga4BdkL51TKrax6Y2yZrQ3ECbiewchf4oN4YayWQYC5rQZB6uf",
  "key30": "5vJrUvJzFvED7UiSYUmvbiCD4YdNaTiHA7gpV2LzpbqqhhPp6vQjopCA9zRjTDDiZgvjM6t9xYj9D4La4MXk6XYe",
  "key31": "3XUH7aMq7hHU6f1YSHgnJ5DfRN3RTQoE5ncx68JN9Q5pjhRtY9r1uzTadwLhyo2GvNc7DQjwMWpHRezYpZak7WqD",
  "key32": "3i5JZdreRLgapXpBkX1qVRudhVSRLA3HoygnXbTem3nYLPFBAP8zD5hfSYUs6qhrQrcK3VdL1tuqUERaJVL2TYGF",
  "key33": "GMrxbrkuHToEEgPf9YLUM2e7BoDDKXeGVsLrwtJVgbUtZiWuDvUod8LnH8SdLAB5M1ntvDg4QxASEmNEHmB6GDF",
  "key34": "4xjNvM5TpipZXDBhVUB1wBDQQuN1E6zLpL59R2p8q18gmXyvaAppV4DZNkbnK86qJnNxQU18jptq1ePErRL2Jj49",
  "key35": "4ndTWaAvX53YgUZ8w1cpRdQfXH6zcKyJQ3NpodNhYuRH8e5TjpftVvr34YuYgB8g5Nax5G58eC8zv3a8RQtYv9Qq",
  "key36": "ffcukc9MLXatZRSsPSsoWqEzrZijPoumYmocNg2M9wXB4KLDtEEW7sZMxcNp8SuwNjoyRMQUKpHQFhdHZ2kQADZ",
  "key37": "2XzmW3dDrJ3kdcguRd2ZeAa4J5Sb84MJDfF2BukdadtGTZQvKxDtZck5oe6Hsa4tQrF1WCkNhNpyijXySME8ojmC",
  "key38": "2MWj7tNeqWzNT6BkqRsk9ZMZj8yTZQ9pHqWSJ4bPSn1ySWdVgLPfvpKrpWgsEd1xZH5CiH16LvjiEyPGcae2wPwq",
  "key39": "3qmS9wGefA4PbYkVePbfEyfTd6i5rTCv7ZyUdvHPmYqSnZq3iMEEHmcij3mGZJsaMb2S2dPJTVQdYkVrSihM3Rvc",
  "key40": "5C3AgAUM2PpC25uxCGUu9exrxeAXVX88MNKQoMSfUQPJRiXa9DuXCE3GGXdZsKrrXGq58HDgKp7pUdPXweQTSkVr",
  "key41": "4t25dWgonEmmJymC2ZZ5eAkgiJpFpzL9EEuimnvzuCkSx2DB6HbrWQtH5v4DB95U6WugUU9F3YDzCrH71VMJ4eHq",
  "key42": "5Yc4H1sGA15xTRchsbE6n3KHMnKGwGPvhhifCRzpAZfBnKfFJ2NnqD7Fd4UZhztjLKBUfZgG6L7mtkjvGUVe53yF"
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

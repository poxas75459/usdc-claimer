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
    "Y5RtopizgR4Me52x5u64bgmGDhDCawAPK2fb46jVKR4jou7WDpqL4tRrgRGizUw4BfogDBXaK5ZPWWfEwYTWhKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566CouRrZzavPPmA7wQJj3akfmsnf2aBH2DSZTpqciy3FahmhAxqpxZvetyQLryX31nziK7LbLUxCEhZ5ej3GGLU",
  "key1": "5BHCvPk1gjeHKyeQaJr38gmP9y59kuDUPMz5WexGT9dFhpVVeHczihzbgPY2wzN8cmALEznMLXt5u7b5SsKNiuXZ",
  "key2": "5HFpCtGdJSAYtyczE66NApuSz2gAjsFVz4FyUfuqDrTWiX27Mq1Q6xPxMqJXYUH7YLP7hyHh2e1cBYHKmvqtov1H",
  "key3": "5d9v9WAFx8FjVUbcoHutQZ3Sk1cAMPVaooEtEAhwLTEnnbuaSS6DJ7uvTcQ5LnbWtMofASuoGrhjejwGj2uZ1a2G",
  "key4": "35nGkVJaQx9C2iRnWWY45TdHXr3ahsygerfmaUPVzDzG4Pu1fKT27NQcc4kemKin2cRHZ4tAvbY6Ga5uVUdVMU8R",
  "key5": "5KbMkkgo5fFps2q8nFWegikwo2iZJsKX9i2CSUu3tvph7cDoVweW5HK6ZUrJaUsZLu9kWFjDxK9eTLdujuW9bdCv",
  "key6": "36opdiADB59Vo9rcGKSPu4TWeHiZ6Q1aUC7yrzMURqceLZsRLnar8qQQ6bzVohL7DGB2DPsA3jfhfBxX3RzbN48H",
  "key7": "4TAU8BXTnsbhL9nZELFStv5qCmAW87Mrc88zxnKdNHYDy776uan6CCtsrKRhdAhTN8prkpvhDS3yK24MXMtwFbxb",
  "key8": "2EW8nBABUdtgAFLHMnVTqsZmPaCG8tuK5F3MP3Y1KVE8uechpE2A8DAPXxjuSmMa1XMGnyH4eEtkijqpiK1dpuYD",
  "key9": "3QqLPsFc8da1uT2hmhWdWNjpuE7WYFFxKeTGpk1r7MEH47KKvzuCQsLGYfzPYc7HaULAo7mUU7ajdcEUbkYFsKbs",
  "key10": "3ciN6b1F3WyjoXuTMqNaBaLFLMk5ucbTUMW34WWsAt6fGHMo82eWHnp9TxnUzT9K5chqdDeoLv4Nxw3Z4u6P3gqM",
  "key11": "2YEk8sZkp2AfbrstqKccmKwp3tgpg356ivyAPwPgR1b9PVNX1upycvFfHHi1LP8dELTLpWXaHhpmdtJxrrEBjVeR",
  "key12": "5SG53LuVFMS4ePBfhuj27rZmJ3CPV62ZyPysfdj5iMzYZCq9Zyg9ZeaP3nGSjKuuomWY4nRsaj3hDymto3jgacGm",
  "key13": "Z6TpKYQVTkJXpCStXz9P1en1DFkddt13154j9S1GCiXgckjnchT8DNgLHMEih4JNCcY7e7HSHTwZxCN2reFdqzg",
  "key14": "4JLM53ThtLiHNaHSv9t7rpQLMx6ZAxsHwHSaoBsDvtQxQxYmdaueXfcwDddF3YNkrxSKJ6s58JHNxFQG9Xis5rFC",
  "key15": "2BxvQRedpH8cDg9gvwY8gqAjApHeoGrQKk7u2g54NoRxYXcjfjSVTapgv3Hy492E7QAMEXPTBfAtyt87CfqHQ5PG",
  "key16": "3V5mQxp7iw8LzhCgm8tPc6FoLC5sNii9Ekf5XbeN4TGyk7vxGHCGv2kqEEM5Nf5t265VC4UHBz7VEJqdfErZLdWj",
  "key17": "3aS4Qo72T6pgFcDy2KPZqj7htyYFNQ2N3p8zFZZaPUcxTDrXewHjDMufYfXX295fEXeFU4XsHXtenMhZaHXACZec",
  "key18": "4h6WFY9Av4UDqvQ4bQK7ne1WGSnhi2TNody43BH2P8Ms5ExV1YokggzZqEL5wyU4LnUPa4vrL4Hmv38159XHkv8i",
  "key19": "uG5JM9prd8ttWZt4vq22iFw5fr7HuksRf97tBgY7jeKFnsbHFR6fmNd8niMJssCgW8LynBaA2jiKmkhc3p4561i",
  "key20": "2jAXU5NiVpn8BGM14V6c2U3ABfVtzsr6W4foQ5uQvd4o39N4Qa6uUvgtX34bhVVwfyGzdcUtSUhVgLfkRHdf1v8A",
  "key21": "4F2qaasFHNiUdyxCpwzf4cN79Eyj3cCy3cxXMviuJSth2ejDmx9T5eQqfgBQjWkDRkeHyrQ694srrmVMWwuCSTL9",
  "key22": "2qQQjcZAVkiQBHjiXm18JFTYXRDZyG6AeQLM39g9AnRi5EMEAAthvtU2WYB4d7QZCBAQkGuCNe6e2aQqG9aqqRRZ",
  "key23": "3jfnoE3zucuUtgP8jknm9pnfAgujWjGnwgfcZ8cefkfaDUE96pSMUcsRTfycfgkcwMLH7PFF2Wg6WJQjG7CHdYxq",
  "key24": "2C4nGHJS5yGGTjYTLpS37ohoZL7Fmz6tJCY1Z3Mir3u6TtmYesQPvmjGfLd684hnxK6JW4uGtKeanw7F6WVgkw6g",
  "key25": "3qNMg8AoU5XdYeHPFM6tHcfUB1TpmE1pwDNmS3Vva5RRJ9d8wVkmZfhDXVRgsrZkhz7hcF2yRbk8LVdgaxGtNRSC",
  "key26": "3rbexKuCMa9s2hNMfTC2Zev3qeXxpBHrdJbgu6SL2LJGW56tEpc9fqxJYfxfkQGm1q69hEwrDjz2Dxzxu58LwCvq",
  "key27": "4kB9snom6nPRYyhK6BRLdLgNrBaTh76ZbwuHcZQzbfHEg7U61b6XuUb6ppMqXGqNPdWtdysCTFEyokw1jnG5hn8Y",
  "key28": "37qo6yJSJDwf3mXGnAbPDQ3A4uQSrwinVxq9BtAiYTo9PzrVKGmsdAMkLJP1sMX7x7SvaugHTgMEZERrsLu9tZWF",
  "key29": "zoNf7uevdBfcuhxYmZLxqcYtyCwZWYsA678UtCjuQLkzpD44uaqxTyFKHbT2ewXUdJ67uDSainG89Qmzn9HRqi2",
  "key30": "3Zai4qk8unqqiRCsYNPNrspw7hDMQRzZUsoHn5xgMK1G7A5NomQFBWFvVYBb8pzN58wiuPha18er8jnMsDd64UzC",
  "key31": "2xgLnsy7vRiYvSKbqx1A2L89WTuVSD1fGS8BuLNy7thWydYGRQp9kF2fDgG2cuoQxYHN7EEjrncvRUavWjeLh4Qs",
  "key32": "5PqPzyVnDW9HwrJxKuBYWCbgVqoknwrRoynkYXP6kAyyB1VfrbfhNgMmnAEPrv4A4hsCNigazirNryEHSLPHGxEM",
  "key33": "5fuvdbpmwcfcVru1kzJYjow8wGshLc1s1jugMvunwKDCPu9b1LEgTS7EUpp6Mmk6zMrMo3D7XkgFEqXQPpEzjRLL",
  "key34": "25zgibbs4pZ6rUzFfYqbMGz8ZLDpZ1oWnNmvxbLstymtE1b9wmJFQnJZQSQard3ZrubvFVUKYuyr7k9hkFKNvnSz",
  "key35": "4vKzXsXi4J46sZLZLMKmJjmHoPJR3dmiSyd1UPi3yQ3FDmR24zgexs6pFD4im2gmT3NeSBBGZe3MB5E4sYeR4V3h",
  "key36": "5cupxMAWBZ1Jz8WZEEnM5yp5Lsf87dCtKsFrBNqXeyvBkwxnWt6wwoEAnWtAUYq6BYV6JqrH5KwEWxMuoDjvT9N4",
  "key37": "UKUsyvBc3JCpceFr4hAwn8DxRuDQqccT32Vm9oEgnTzSAibaNKvFg76hG6326mG1FqNxXfDw4CkQLx46uWq14tS",
  "key38": "3svEw2UENKStKrCLSoT4vkn8aN7SPXmBndUcPBhM1uNgQidWvAhMxaJq42aDrjiCCBrauDJqfS6jAzJURjXbHqoV",
  "key39": "2k4MVm8BwHoe8i3891npHZQ3DkTH393PidER1fzaA19RpFZrLpKAUGGbHZpWRHRekPVEeBgU6F1ZMNey8gzUQEYj",
  "key40": "26kasWi4PTgkNmbG8cQFk1gqWagsB9YtZQLqBXDbkyF4CQpEiWQkbLFUVMGUqaBokNjzXCWDkyqPdJHbUQqMuZQp",
  "key41": "3njpo3gupajmE3Yv7TbJDV88BkPgXbv2KKBtmXjeKHPRZ84bkvtR6x1qawFS2DZsSSdZT2Qd8zCvUxfEfjGoT4vt",
  "key42": "4p8yBcVxEq1WkE2ff4AimjpXwnP9qPVxe3UXZ4H5yvKG8JG8Xs3gW7PrvtxvhH2i1mfERwEdrNnsyKBFstCNyq6A",
  "key43": "4if68d4xvVFrKVNAxHCifUakFFXWhZidsTQxojj4e8ZxouMSNGRTN1sEkinUXPUkpPCRVkvo5uR2fsK6o6gwzV4A"
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

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
    "4PfkTvBHRr9KSitBr3Wj2CjDyJf9UFKM1SYe8E7eYpTK1ANZLh63ikFXRP1xa4U4hW5ABrfSD4w63v1yhL3Ch5hZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iyKCR6VeJFA2zoCCqoRpcYZyaRRUzfginXZ54KuTJ6aTd7QypMnpBumQQ5eaXGAPKAMBCHuewAUG2PBf6fX6ThV",
  "key1": "kiwr54eCgis1sAXWPbSwRZgYiZ8JRUKgJ5qnpxunH7hZhczk7s6CnayFJri5jSC2D9BAs8uKtGAvVkMpGTGt5E4",
  "key2": "42ugGU4M4P4PCuhq4Bs1UxV9NVRnaLVNMa2tAM4XzmmS7Xd2WbivbB4L6qvhHq32GYYjzfY9kdhKDupzwLbrNPvy",
  "key3": "4J1TQrpMt72NY61hL1hdezzZ6FcEurKQhQEvYAP3sM7FRPkkCS96nBwSWj7qixQSY8tYhBizu4iSSX5gLNrahFxN",
  "key4": "26wAewKeZ2q4ybqcDADjuWj96Tg7ETLEY56Y1oNtd3spAJb6S36xQtctjNTXLsz4HnoKS8RYe254BTRH4LUYZVna",
  "key5": "3uGCFCroT1Bp36yKpcPfGjs96o269trxWHjwapQRABJvHMW9qeL9A9aLB9bzsLnWJ8VGmodZCLE7CSpnaJeL6rQa",
  "key6": "vaHUKtZxNnUzSZczAgE9LKwF1qifjXNDP5hMdDzfeqq7CDu3sTTKsDXqV1pmJXpGabSUaaFc3cjnzi4MFUEn1io",
  "key7": "4XDewonzCqz17TMtjMR2YWBjgWBdEFCKrQJy1SGnnE8qgFaqoEdM6vt9HnMjLM3iQvJfPEkoKc2scwhDqw2ujuuY",
  "key8": "5YMRBfoM8HxrH73dwXA1snuf32mz5mi7TVFfR9tLG3ghyYfRvv8nDNxRv8x9BDwvtGB1nd46mY8u8tkGTJhvoX3b",
  "key9": "2tUrLWVqcpfLUwDRCXyN4vLVMhapB8q2ERMESeMJFQuBa4nPuMVK5TFJn6J9oVJBGgcmZmzrrPPTKdVf9LqZsWpw",
  "key10": "2df5wUE3JyyPk7GSXRgPQyjm9tQZrKtvKrurQLpdnNMJdEot9wRC74VYb43ExgyZ34iZYwDuMSJssYK5pauu5aCZ",
  "key11": "4KLJeGxWizNCU9KqWXb5rVquoyTqDPwmaVBsakpfRfkEMMAWNx9cRtNreLQoTzTUS3J9dEqUKvyCBPQBtbbgzSeV",
  "key12": "jCvvMWhPVPDAz8bM1JL8XTtS8QdfUVsoaf2eZwezV3wqXjAQERXEyApQuZwvCr5LyJA88CXRq2NQQ4MyUidptGi",
  "key13": "4p74jgFkyqWX8XcXt6kJ6FWqs3ayEYKCSJ6M4ALDTZ2kCPtSQ5bZaCZeCHceemxfym7V5FhDeJeVjSEuXyEsUaob",
  "key14": "214cXa3SGCov3kSaBWumApynK2whCsShiwdrWgrCKBuheeetD5WEqh7YRMvh5cP2KfUTyG6T7p1yTLyS5ecHMFsR",
  "key15": "3Hka4696QU4GCCELHvRAMCyexpeRh5jKZrdDwCrXMzzwc6tJoftBm1zwZV3SyqTEtyvDtvFDJyzMyn4hkmvHyRXL",
  "key16": "wBDQxEn7R71nwWPKBdyz6781ASh47XrhWuHJza6LjhhuNv7hvNUUcJCvpdk6JyTkC39Q46AmkQ2HdPErpwoLRti",
  "key17": "4Rfz6BuZEJUCQ1RPCjz5LidLdgd8j1dvK3x1qui5qcYLEWcDwnsEYTSnQf3hL3CCFQKLisDfHB755hEQDmXwBc8p",
  "key18": "AbCywjbaam4B5HZo6JW1JFnwTazCona4HDPQvHZkfYzgQR2PJ258bVD75iwBjA2KActFueDwAJZg3BAEFWdULHn",
  "key19": "27fK29VQqJQYyzx7gtbBnasdZSaYbYihDgynChK9fqzEpHNjvyubSNbu8tqPjUSpkmZTH4yfv3eoz9kaKtazxWEk",
  "key20": "5pvqu9zyX1rMW4p6LVxgQdodpbWR6ttd6QWX2DzH5NLGCwdsmjCSc9jJtYRtiSk6Y2rBqgP46FjZvfSDqHzt43Dy",
  "key21": "4eNQynMoamYD2V4q6UbQyhg8zFXpFYyqztTB9scmbJonkoJYwS2sBsBESmjjWTtgwGWAE9D7cDTjXHg7jmTEEUjp",
  "key22": "5DGtRPX43V6tgajS9v1ML9WgHddMQZUF2XuUhK1mqfBx2Jbdr6WbpeQgC8ApaQFhQGbjYJm36rBWQLc6QTp8dssX",
  "key23": "37iFwyZDvPwDAiXFyVAWaoX9LQ3vtnaxdk3ygmnfmyM3KfzM6V3Z8f1nitsEvqcUAv9SdaFYaFiyUcnSQjo7oJdz",
  "key24": "3tfGHBfmqyxMSA6tPX6QUpLxAZbEerubhQiXWvgnudaTXht3xqi3a7WiPEJwNsbkoUgYkL9JYGanjrDLQJLasaD7",
  "key25": "3WX9aDrmGygFfHd5D5XJ6yjnPMbtihqSeujaoknMLN1oa9og2FHF4w4HBgyrCBoGeABejknz8nnaEiZaUzpk3kZQ",
  "key26": "3BpdqaQ7ZtaGxQciEbZ9nN3GQAuj7CQSfSyTHyFVTJ39TMnihS68koFWZKteexfDPyygfWNQ363E8oUMRXvS2iWF",
  "key27": "2sSXRVj9zTXJ51PuGto3Fs6ff67WaHamdUnrYemRPU5sFZhV1hHMwumHNVj2SRMQhLe7ZWyRHWy5ZwNBze1pu5Wf",
  "key28": "5xXGmqiw1SrD9QYzHVhDL2BtdoHUtm5pZwT3M4MXDU3ZAMbJW6kWPwUvau5dSJ93VcmVB3HqQJFgs9uVuV3yrdCs"
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

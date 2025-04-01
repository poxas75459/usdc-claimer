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
    "46SzUXiL92djyJTxowUbC8hmX7prJLn3XpcCBVCzkeot8caH6skZMDCYkC6m5QnFijftLEgkZ7VqbLWLHYrh2Re9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEyQMVM7U4nNqMo2uSmutruGosaLsnvqXM5cZUnvuZqsHjk8DFWaWkz4x3HGS5aenFj2xoFiN4FEUa1FymWXXRU",
  "key1": "97b8dNkemxnxWpNktdcGaCyZgvVgwRFX1V8CC2AieM6iwtRESNRZSFtAaVFNrCds6ELC6CF9smV1hJQTtN9viyT",
  "key2": "2mdAv7UUiBc1kwDH582T1GDn8YJMkqhLFpJ5GAuCDzbE4DTbfUMLxi1omptd2f6NvRKdmo1TbD7ckUYzvrKURQRs",
  "key3": "PiTmfAubZdsBF9MrLNN9ahX7DXaVRXAnuzpXFzbqNUek6XwLL8Mk9mmpbDwkX1LrPMApeWk32vGnKkj1KP4eqo1",
  "key4": "eWdCm2Dw7nkbQsoZA3fXLpYWQPM4M1CZWpwhjSstqwphD39s2Mxh8ZZYvLJz53AKaqeTUcz5Fx8hed2T8S97x6T",
  "key5": "42qz1TkoGukvEQA2sH7gXFTgc2SngeBJY1M8xSMPLckiMDijtkDH9nbZSsRaNKHYasLZitnGDF5iUBkV69GiygRt",
  "key6": "2rgDqozqcJwyA5riKLdsy5rsUpmzfibtVAfddSdH1KY7dSnJvFgoBoCwEyf9parLH4qQkVb5ewqRwUmJenEbHSMf",
  "key7": "aBDVeFzfuHv8aHf2HCLBF92dAkMzKv2uKoLCKJoKrYqduAsTuqnJZHvLqTBybpFxyousRMH1YR7MfBTH4QAs17H",
  "key8": "4i1puu5oRZNrYtsn16JD1SQMnmAzP7mwPAMC7B1vNZgoBRo89stV4a3LUkhHvQZcQkMSxXemixGXSXy4GS9zJxXq",
  "key9": "2B3Ws2qLZ7NA3upw3izBjBXExvh31yMgVQY2d4whKxJWj2w3WgKd7o3pvNgRXpYp8a6L6pchJJUUrnErb7BPftXf",
  "key10": "4YYMfwxR1pdLpvmhMHUydi6xgXe9ykyw9NDxyJ5UD69UanYzz8ET3LdycXgMxYfZfF7muUqsrnPuoeQoo8A2S5bn",
  "key11": "4njoLdntR87zX5qc6g8YNXk7mWpwBaVyMauEr3gFdmNFjSgwZ7hmrVhrtU7ELA4zi4nDfvvkjrNy2hhtpFr9WeH5",
  "key12": "5e61auxHyxvuhBWXQYZxyPm1dDD24YH2sCZYprRV3XGJyBqauAGHagCHEjdqBsZdFyn9vPB5eUFbkFkPzffDaeQE",
  "key13": "3mQJzZuEcku8k5jufzDpnK9LChDhLLrKdcnJXf2iCvoWheUgbGnwTvJWgNE9ZTBkQqc5VYywefycQZJ4VP9iCkuP",
  "key14": "rK6jjU9WrsqSNafCzE3XF9Ka7E7mocniN5sQYJGbxUUMCLRDNX1kjjKGpzSNsz93BR7468d4LWeovEkapMdrC9G",
  "key15": "58UBhzuS7mnqJEhtRH7oqJHnDGiKXj9HWKyKBw1kQhhNKnbv2GwzQcXabUDYAyW7V3xya5Csc71xK19h7st7TXCJ",
  "key16": "VE5U2uUAscpsRyfLznBo6gZhqmt3gKtGrb2PY2xYdAawRa6LXcnnsRFbkANJf7aarHSVUnxZu6KuTKnGDWsCAEt",
  "key17": "59snCBwEh7Dr52oaUDvNwq199jjdvGsgHSsx3Aqnbtt1Km6ZwNAMTrC2TUar4fKTaXFogLENuiBvSVaJMbYCU3Ue",
  "key18": "mwhTEeQCXARAMV8WKJqbrAi1ikKF3yTjZhRS7Ec6pGiqVq89KYf31a2LqzBGmq2ttybJtbj7hJtSWk5iy9vD6Us",
  "key19": "3HkpV1VSxU9SbSkq7CurPyy7Z9d5669UT5744vySwaxPBvsvwgsXH8dGkNayViAVcwQxGYmzuhsRjki4KCwsee4B",
  "key20": "56MWxvf5BgrBqdL8XYChoSt82CfzGZZnybUfJBVnMucaGki7U68xvrZXfMcv7JAJGd3mEC9UMZmZWSSFbcqmQZn1",
  "key21": "23K4L8PromYqDSrM7n3k4JKafAkD7DWCPFEXemXZL44bpBjwUATUxvm4oeVrRWdx3atZihq7MqurYNfk8QcDhtBa",
  "key22": "7gW2FdxgpxYH2i4MFHiaCPTvqKq3mYpZiRXAtFg3wfbWd1FQemGpUMsD4p7MK82WnXv3oKy87xJgt43q9NvEcX9",
  "key23": "5rPse56h33G7jHNEhkDBeSp9khmiGt3amREvqJMFwYYzrsyhEnuWEHsLcrtjVm79St7UQSRcb7Vv4Xm5KHDNpcaw",
  "key24": "4PyxoAa4zReHczSjD6TEnc9C7NT17yMimrBd2hQ8PDshCrfe3JsJruxgidFuU82U38PkWn9as62DTEXJfkXk8b3p"
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

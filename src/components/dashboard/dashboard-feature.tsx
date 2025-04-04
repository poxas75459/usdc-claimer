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
    "2YxjcGkxDsoV24C42j45rv8LkRxM53JedwNb3smruTPMV1SR2cuH37P8dgu6xZnXASBXRRyV666dQidokwDdkPb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cN5A5PcrgxAEcNCYaYPYQEokwVZFAMwoNNh9svcQr2P4Yv8rnsZdN8ojDrpvq5CC1ZqWxgbfg1DCLMzC4p5rdAV",
  "key1": "2g2bZT3cUCFgT6auzmv6DckVsfAm6Wty12taVfj75RahTbxCzQb45MLL3ytwhjUGEcCS2EhKfWz8dbSwms1VeJbC",
  "key2": "55Zf53CYH9C9x2Xboou1MqnHu2QT6dwfCwmR2dCmBZEcYQf2VCbPRNAbkJUZwZBuRcCevitbSApp3VxJVM1J7jtG",
  "key3": "2biwxzz9tiB1ZjnHNfLSeA8GpZ6p1C9fVFUifR7doxHdTK6NAPCiQBoXb7CQUHLAqWewTH795XTWZTE9HXEWGzKC",
  "key4": "bms42G5M4kvjRb59jwA16Zr3ib1wCFpvcb8W3RAGcWjWApcPqKjz8R7UE8nuqoffxTXn1ads2DrXB2ocPUgv7co",
  "key5": "4Kzfs7CCS7E7kvaVvmX9h5P9dBjzy1SKxRdTfB5Ahv4dB167RFhSycbvXAD6otQj9Dp7XTSHPfsxzKVY2C28bwf6",
  "key6": "5eEaYJc2ntc9aPRsnLxuid54A7iATk13wEMn3Ah3VcGcvHFfw1YSDHGbpvPnFTEAmH52kqVde7YNN8n2xBKpwNVo",
  "key7": "ihyfoPqdURGrZXaYh1s4do6tH65KrCTdKUtVYAEuL97SeEEb54T6x6s3JXYkSNssyVTeWkues5KBakFjFmuWn6i",
  "key8": "3qMDskfEgTktaxykhQwRoGkPdN2BLT7iZ3yP1o5h9imfrqx7F6svFRVgxgt8qnQ3wWwgd6VHBrkcwrBtNewqcymX",
  "key9": "Wj1itRoiZec4HH9qMH1Nawj8F61EkHgtNqkLQC5N3wMLrhrAZYEjh59wQtRKWkTCsNLq35k4HFJkb1NPEupT7at",
  "key10": "2UU1vHscNWh2BdgGmCiGb1aay4eLbVF7J6RG5a6Btkg1D58avWW1YnRhDAJohoXwbhYu7TtvyYbEXUMfwKrU5PWn",
  "key11": "QAMjXocvr9EueejoRDpWAe4UpkVXrK1NH57jaJ7WE75y7A1V9HxDc1ggtyuN29xEtruYc1NmSytCjA13gYjgnDQ",
  "key12": "5duQaAkF9QfPZZydTB8Ecg2Z6SFGB3UPneN9JfR5GQsJ2mqQNqgsEVzXMebVCYN3uwwZ2fL2FqtbXv3n2zeLa2CG",
  "key13": "zb7EHtL8adcjqVK3vWsSKr9zqDhfodNFP3DHQXbc6ApjwDaLrBArpikDg9fT6QKaydtdL5MTqK5v6ybreTtWgnL",
  "key14": "31QtmDRBjT1oxAVj2FEuuMwSQfPCFkBm2UA7G7DEdNhkP5edb4M6xAd29gtb6c3Ngv4S9cT759162bXyr9wAkQ6g",
  "key15": "5Wf7hQ2moifxq5Tb2j7zGBL1hpHkYPMs5YoygbPm1objhACdqRFBqA1Lauow82P5rW76fedWAsjemcP8pQ1qVCtt",
  "key16": "3o2HAqsaCsN1N9RqJrPHKvMhpn4Sye8JpXcygCerYU1YMdtuSYMNvMSEpeSwG1SAMGPKAYP4zaHjDKJujH8ty5Fq",
  "key17": "5vg2agi31bP1JgAjSq8pQzWdGX5Gca3Ffqw7EnS6T1H5ryacfuWhiNLo34EHJJgkdgMPJfzuZS9ZsTQRcaXjEqU6",
  "key18": "3Q4d2apQrHdADgz7PVkgNaZpCKPLFBgursFAVQeqjdQqNxGkRgDg5F34MiEnq5jUTJYn9q3jwMk6zUu3xXCuhCrS",
  "key19": "3gRLgDa3PvoZbTAf7mFKDxMzxvWzqb2qR23Jg1LJbk1UnNCSS2Std5HCiSoJyr54fydLxWnUZKS67Mar3XvNKbbm",
  "key20": "ZTkAZ4znF7UMPzFV3ZKUKx14xHs6CvgpKY4zn487V8EoPuVzjh7XtWAVDb1YJu1CxdPUsWkZPCbUtfxcJV4ANrz",
  "key21": "CJ6JHF7BVAEhQXVDDYCREoMG1kBxduPmJmMDpBF43hR6QnNetXU7ABzachkRFHVjr6TdQ9Zbrd3ftv1cNTQqUy8",
  "key22": "5Em5ikttpmVXSSgnr2p2imTgYyvC957YR6kyNqUpxXevLUJoGrhmwMiQkTcisbEDt8WdPJXP3JBHMor11X2bjBXo",
  "key23": "nGcKfHMXJ2Lg2htWnHaTDAzxaBz2Key8hFGzryghsAUr4HieQtfoktWdUijEo6QM2e7nCYiXipvrJpwp8jJARZL",
  "key24": "2ooKBQTQiK9xCF4iJ7VchzoxbvkQjMGmg9TGmqRkJFGgfoYzQrjxoyJRXo5o74VDpXbj42MZgLQa9XTTPV1x7DPw",
  "key25": "3Z8g7JvuBUPDGZdkm3pYkMzJXEpvg7WRn4hLQCLR8t2Xyohfi13JiM9dWmqaK1xJfETT2D3cNW8awbCM9KHSsr4H",
  "key26": "332jwz2YgzmeqfNoTJLXr7vkYHBWSvspBSG4ZZHieLwi8uicqZrJfjiHt1JJRBpHq9e6pj83a8nmMoArDZvm7oNu"
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

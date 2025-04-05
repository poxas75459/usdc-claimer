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
    "4wZZTK6NyxQaHTBjfvG6TEvGQBfvq6qCrbtkma7qJ5ScLcpBonY4L8okTjYwfRxZLPWsK9cimTVCGRC5wgiLdKg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mM6ZGnM2c6g6t4W4GiXBRbaEA1h1AHnymP6mT5onphqqFmqE6TDk3HkZBjrwJkzSNyD1MAp8yu4mDaXALPj9UjZ",
  "key1": "3NBabpKSCqNdU8teNpbmq5p9nEoqKEg7bKBD5hTfVcrzmxt8VSYDwHaJQKxfBYe79rGDjVXMKSWHtcb4iFFrvfxF",
  "key2": "3FyKv9fQB3poM2pKvUKqvLvjV8ZsknGNT9KeSQ5aXNZjJ8d5YQrZ6kLKNcPXwoigqsCDmmJkyK5LAVbf2WikRJei",
  "key3": "3upz176mhgbyd8EyijezTJoPT6CQzmVQpEQB2ATr1FpF2L2ygX4Uc18KuCVYEe12Pf9XEsagPL1RXXW12QBEPYRK",
  "key4": "7YihXtvRJCtykPD8j4cJ4JtZiAHzFxQg6PqToSFpseDwtAaYwryneNuo1VVkfjUpyUUjVzwSZ3DTX65E1VkB5nh",
  "key5": "5tGRMGWi2qftTxKzv6o66Tr5QwgGnovKWMHPmt4j8SLH821Q1k2AQjxUgvfqYh9KHcxtZJwswesTwxbf1f8Fp1Uo",
  "key6": "5PzB1roSBxXpPL8ZCwWSL3gLcx236bC15vfYWtggHJuAZCvimaZof9Y1qkkLs1TCW2ni5JWXyB3CyLZ2VvrCy8A7",
  "key7": "2zZeybL2kguBgREfMK8MqFsyV67z56RsLDiu2RESeBsDcJDLNaCPdCTdVXYL1nUBF4Qbb8fw5MEk2Dj3c6aJRRad",
  "key8": "3jpu1kKypbDev2dioqZiTgJkMh2qinVPytDjqLpvX2B6hk9CX4VERfacDhkQK6nSAppwbxTXgLgvozprroLtQrGR",
  "key9": "25qFJQTsfKwp2ZbgP5fpKiDXB5SoUf7v8oqJKe2Da2Se1HPH7FcpmsF2ypJQ6gH3uvdC8i3sPhxWsssYzF1mEj4L",
  "key10": "3yf8dqwwTpqaf6QbbjNfexi8tmwc71qPESpPDtQuWeE9aYixcNRnYGWAG1hSvdXoByJpR9LzKbCzgnRoe96StnzU",
  "key11": "3323oFUGRVsMcWnojHREnGJ12sH556v29oHfzXtMF68yBPcyjHPywvzpjwMYeL8ackUjMVffqEc9kb8876fZAzEt",
  "key12": "P1FdiRqM3BJ9CiPm8dJx2wJrWNocntW4SZut3nwXca1ibZXsh4DBEJUkq5c5GHXXFjpTVzCRMpMYFFrh62EYPzA",
  "key13": "2weCD5FpWZGEEXQJWfTh8Z7wxgmhZAKtshszd2hGb9VPHJ6tC11q6tQpdjSiXUfz9PZqArKUwQAvVKr6zrSq1aFm",
  "key14": "3sf34cqeoQACyxVSe4J9iPgLHRdfEeg5CaFHZJ6YCehe6o9rdQSPFbc81PdW97UwuqcvdwM2R2C7zMDcGaHBoZsf",
  "key15": "4wbfp7sYu7fjwBL9PmJtJGiUnevZQkg2mY3hFDUaLHZw4HzarhgmtQcaPyUJSzPThDX7m8caoacBUynXxxttPTBJ",
  "key16": "5ZB2gzWi2868URJKvGe8DXYh6H79x78uJVsyowpgyFramF3r3RkEdaJA8t6RaF2iAyadBpihNZwN74YLRk5aREdc",
  "key17": "DJABtYgeVWaaA3WKcT9WxD8fjQwTgbxm4TMS1XMc79WvRSYeF9hf24wt5weqiVU8fwCMzjoh5xJFYXe6pFbm8Hm",
  "key18": "4hMaiffzmtatCfvC6ntFNjZzSgUovwL2CJWLnmjZSfKiGpPiS5ErDfTcGy5E2ZW1vmsY4euoSRVKVCqJBKLAaBH",
  "key19": "4TsH4WptrVrwAGWTmuokCerBykNpMqabdHHYjZQU9YFNXAovakWxz83RH9DhRCZto4H6GbEExsWzihfQo5wmUeAm",
  "key20": "5Yv5pN1hC72unxEUAKboMRJf2nawzux3nAvdKTMbo1yfuRPa8oTneb8ffsmKaxZy8wxiCUuRXnyjpveEP3ooiEjQ",
  "key21": "2ER567YXrtBMCjA6SQk3GBNscagJikokj688Pca5s6KaxTNeZYaoLhwA75XGGS2bFU7EvMfkBviZDiYQSWCEEUtd",
  "key22": "21NgkatxhhuzZEGWLyqEhNXBNfBnNqRMvybggdV9tEPSDrqELww2QbpfArtoHDofJ6CpYvJaVmejFX2RhWA1uAbC",
  "key23": "45JrfkuFs6FmqDZCSNo42NSwzVgMNTi17FBUaP3ubjkSSf4dRTz5EvcKp196v9MrV6XZNSKmCDsXF3qUxd5adHtB",
  "key24": "4AW4D6UUMv6PUXX4r8YzhouqF9xHvPQu7v41M4Aay1g7GPuBcAwo83422r54MR1JMSj45zLWstPcRfFU1WE54Skb",
  "key25": "26CYRDHUV7ZkLfTtRHbzxmb8rsQAyXSyG8dE5QCj5G5289EHxfuskjgTRpcksSQoXTFKVCWNcvvWjaZdXgMNBeQQ",
  "key26": "NQBcvWM4sMxk5C3Z7vmb5yU73FkdPAZJ8XbrpHpFWnH5eZXamqu6FwUjJcoCB8wA2zscCcAjTuPESyErL27AQi6"
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

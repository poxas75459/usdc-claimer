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
    "kD39t1w8uopKQvomGNhGJiUCH2t3uKnMh2Z7xHWfcNdGdwNEpi9fXJaRCN7gbzmsKifZa42PH4KLruk1Xyv7gmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJUGMqW1JMMHJuw8c2mDkj8GSSC5WJ2EHXGRvRK5ZQAPN26GkqSWw84ESYkKk8KzrqvgtgbX6UKedHXpEJP9XhC",
  "key1": "2z21xz4vzVdGGTTFtMTQ8aFhAY79fdLxhhkku7MnyTMNWhsRvFGHMvhtFtJm5XYhChNaYY2dPerDKc3wHKPPCCBu",
  "key2": "aZV5XH3n6Jjr2sYyZdTMrxGsSw9Ef6RuoN3gGQbsJst6QJZgEdyzRAQNauXNdSdSJXkVQKX5L9qDrJLbcuxQkJn",
  "key3": "hJrX3dcn4sGkdnTjqn1RbMSoWzkExPtNpQeQZk2SaXXVyqvMdeqwr5sDxrehKUWa5JUusYEfX52H8bBFWdEs7Nq",
  "key4": "2i3pmRqBrt3Tz2khTdxRSrbSyxNHVSWG8f3t6fGGBiKojbhqEb1iTBpjGvjqpKUQk4Nh1rinzGEs3xHFV2qrvoxG",
  "key5": "2eYtGQ1QKviyt2cFAfvXpXPUCkGHvEukMbksdwFhweDJpURqtYrTx9yiJqHsHHxWVhQxG6oFTFwFyXwHu3Ha9ERD",
  "key6": "2oTJiethT24ik9TCPyBgpruPwSSbdEZeTKViH4RTDp1FtRcc9MfzQdN3youfJHA3GKkx9Dn2Dr7cjRvdn7iamcpD",
  "key7": "a8peUQJqBoXFJ924sh9Xy8CYiKBSXjtdaw4HVY6JGYnmQtbdAyudcpRer5SS3WEqBEoCyd9zQV4QHS4Tg2KsXKN",
  "key8": "MPdj9wUJrW4SEZ1goYWZPy37K9u1DEbjXWv3WfRkNcUJmzbaKBM179XPei64to59L8vWpRRifu6Qx65eKtJ4mvF",
  "key9": "1eYB6ZnMWz3ruSoMJ9u94fazxu3QY7mVYEqfuXoxFStU7Xcxt6qDwRRKzZnedNaXkyDSjUeb3nwRMx1P69k75Gw",
  "key10": "3vBHjsFmE5D972Kyrq2XsBfxyjU81XM1c5YU7pCqcYygMoqRkvzzGqUFn5VcCBpgj1KQW46w3vzS7kn2tnr46twE",
  "key11": "5pYDwqheh6J5z2S3CEztADCv6bkb2qXEAJN83SusAUThhESnHCcgmv12pYHMdH2VxKnddnx1NkNC73S4d1Cdxcm2",
  "key12": "2k2neWtyJVgPD3sHfsZWCaS4w8Knnn8hFsUYwAbj8pKcUqgwuh8A6zU4URqM1WjHd6jARox8XURn1PioWbFJsz1Y",
  "key13": "3eYt9p47eMa3V962DvhQCL8CqxJ1JaKoEQhrtJLetZ35f8MfW2ZqAuNUZXyMv8ci7CVbXDamr99RFhEsqZTFVhhP",
  "key14": "LKs14CkzYYr9P6bDjMYJcU6w8ViVWJoac1B6MyeNTMgGjuEnebTRgKqcwyyMCfFHngJLnXW41enNrSzUtuZrjJf",
  "key15": "hmcAPfnjkYqs1pqcLJrPftQwhmy2VLYpRAEhztiN5uFsGadr3Jc4epDV2N7wqxjgrcQtMHYqeTW7vNa78hTkAgH",
  "key16": "3X6mwjmD2Kyn9zfwhN7L4FuL5GcMGBLNQ3yrwtVugT3jn8YtrqS2ma6G8ZFqBw53oTMK4r4t3LeKXGDknAdTuNvi",
  "key17": "5QzMn8sMwpBF7wtUDzzDbfCE5oBXuf3wNQdCpzudgYGyzRZ1AuGPWSZYVW9zCD2tgJrY4GjEmCazQEbPgMtz1oom",
  "key18": "5pNvTxvg86TX3q99VQizFpYM1MtrSUwehExwU8yauH9ANGz1bvux9JGSkzYemMPnEyKu7JE3LggQYun91VBtWmm4",
  "key19": "4E2b9GeGTFw1MZ6STDB85iYUGDaYKNMqFhXLvVakMp5fi2z2oBRHTU5bhyuoG5Es4MHycHPGyA4mUGehFsd8zuc6",
  "key20": "4C8KkDJSgxHbuEtrWyH6eofhjHctaynjtG9aaZg168D3AXvpFTEpmYKq4CLX3JNz7yyVpqVgZcoAoqSGh47WpRQx",
  "key21": "4pSXujdDcLzzcwQLt93bEKWaRApTYLGQKxcQHQVdG3cxVy8iDgg7UFgpJyifaSQgVevVSx4EELm99pLZtzXzAVJ7",
  "key22": "5tKQ5PJmmbkv5KaPueArUiNSuKf4XMF1dijkobMbXzXqWhNWe8XBnKEwt5nB1SvdqBp4N3cxXycXJ8SrSNZaWUYR",
  "key23": "JzLFxuZxPGwWgzv5m2woZXoDr9AdGqKJfV1AdZFnRgWeEAbhXjaeCzGmBXD4RziRf9ZF6v8HKQ3By4fjcwuo175",
  "key24": "2tkdJUSU6bsoaDG2vpjyQt5AmUCQFSLuaV3kZC4buxKti4sdE39eK3HESMALUZCtC8APdzzEjmeZ7fQ74zCxEgDS",
  "key25": "3AkNcuSoMUPd5FTPpa3bg2EZCvu6FqtSorUdtwbkX2N6YxzKrPhaZ4arHfagnXobxhEyV4L1i5oXHraubeGro12s"
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

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
    "iAax8w38VbLeMbe3E56ouoDxZJnPf81kQJrhHLhpGwWxEME7RMyz2YHzPhXM9LzosnkDngUiw7SFzvoq29CueF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58CKz4YBxSMn3kGk9wUpNojwCgoyUEu7gXKZ6UfguJe2RZeNJkzkqPQyic9n8dbFphu2z7aYc724F7dSGdgNYzqg",
  "key1": "5A48bXQHbHBbYrwC7esEFm2u3uSqdQT4HnRxNJ8WhEGAsMP9iu2VQdJzrCEHEXraif448y3rLZe9WzRG8RRC2AWG",
  "key2": "5jeAgmpt5EcSaW6aHgyawSvtHYyc7vrrLHcSWbjFn7W1RPCPYGYR6trWT2kmWpQZgG7P9MQe1jjHceUYra2G986u",
  "key3": "3weGCazMR751aQNdZFxoB8LryxeTw7xSmTg49BiXVWS8Ebzk1vwTfuhDzEqckLsaPwszmFtrACWDgvAzKsh5R26b",
  "key4": "F7fr6ntuXMCpBt6Yg27L1FXC6fGGgoSYoE3bzM7rCA5xp5QQRYcNEZ3DVnPnCKoApr82QXNEYfZ7zUE13BVgtpf",
  "key5": "5xEVouhLxDZRVnufZ8v6qezFN3tt8y3ZzhbpLfxxhRqSWBC5VnT194iBAnAqh8ZAJkzaXMSpQCmsAiYb7mKXWkPz",
  "key6": "372NUpYnfuKCaGyMFRoEg6K9E4ijJhDdWffcVDmzhhLryxBWteJNzm2kksmYeFHSGMLGayxu24mNt322wM6tJ2GA",
  "key7": "5RcW1o7iTLTSzvXweg2jDGjLH9kFPFX1YaQo4XtZdKe2iLRGY3h8nSA7cuVCG1Ch9yHEfQA7mRuqgLUwNWFivSMa",
  "key8": "3P5dQrV3EzeQyfTJ9x89HSUgE9GrvotAnaC1Qu4E1Cc9qjowZToWmzAE2iqCjmTBRyoehXGz1AVtAGB9yu48CsRa",
  "key9": "2Gzi8e6GzoBmxz1iMskKYdUr9qAJwFwPsz1kpTJVkAHrpwdjkE7VR7LoVxcqZYQQ1RbQERs2pyES172qMymDyWfw",
  "key10": "Uc4V3mYTMWSZ5C1QzUZPSqXfcuSxNswWrhqUrZpdoSqGsSfaM5SyJdLFqAshYkMEJdP2GR5AzjMwQ1Pf4tqkBa8",
  "key11": "epkqddwtxVA7BJAaVuwqS2aKXSFB3nKX6114a6pVMh5kQqVFt4719oGbhrmMsEBpcey4FwGALVgF99GbP6d2DkT",
  "key12": "4UQKEi12FGuS5diydjutsLtPdBsjfiTV9HidsLpeJzfXEyqjewKE7WbwYWTkuwGZHkVt3Jrhm31cVEpoBoYUr3Mo",
  "key13": "3fxBVSgTtc6J1BVKGLVSvuM2DBLYHDEnUYgxsf8M1gFta3Cjair3R33MLad1ggTvJBEQLWrxK81esUmDsKKzzHDN",
  "key14": "5wworz2wUNs8LhyVrEf4ydnHAdqceHjTC8CPjL1VfbtdFECkBREXW8EcxpvEL861e4ptByMbZYdsXJFM9ob1bJYf",
  "key15": "3uKkQxJDYERJrJd1kabVZFDJPJ6hzQnA3wJFVAWabQUNdqMpZ9Vm53s3gUyqpzKjNfczZPBHT61Mqkbfs9rVN4MR",
  "key16": "2acRN43koAu3Sp786Mm87KGnrY4dnrJ536eiJH4dbWNwiTSiLKqJ38TfXeE86CTcHj2WNcx7WWa2XeWcdtYY6MBN",
  "key17": "3DKx1Wriq8SEv8ezAHjyvX65NxSKuiUSYncqVqc1rzpyKTtNs9HwuS8yhQMGQcsFeE7WWja5NSCzCowBHq5m7HDq",
  "key18": "49Hr7LHQCZCoMKh3Zemq8PXka5VxDXWHsFm3YCXMYqQPBRZpwsS6htThcAvyTgXcRweu9F6N2youWUdsMytbQy1r",
  "key19": "28Vew4nde3JDD7w3tP52wba9fdSiY8JB3SbgH5zt71sBNpcVB1vheqZg2KhG8A3d3SaUobEnFtNw3CUr7eGbnCRN",
  "key20": "5ydMQRssvZtEs2TKXxJcdp3mjEEj6oa8a6RDvPknAc8tRgP3EpcZ61xrJXi395KE8iemC1KyvwpW356AgMdTTfD",
  "key21": "2CoksuWqjfJV8jWU1hoe5KmdDYGF1uyJsAnWArZLRQVnnvkRXZXhCeX2GtV6QMyFuysPELAb5ENcwSdCFsoX5W1c",
  "key22": "zh8FvskRyHkpb6z8VQCrfFpJuFN6b7AaSWAeg2ouHLxXR4YpSS6ZN8eziThTA5LZuWUDv9uBmV94xNh4oxK2rzZ",
  "key23": "2PLXjoBpx8SAhzkiWDBQ7e6kexnzZTcjYUWrDYY8rUuWz5YPkjHuQvSV1EkvsomC4ksQvZmv75Pyx6LC1KgYHmUN",
  "key24": "56gZjjSwXYiLvsTnnpM3yVPehkUTyW1QSsTqUwPmeSXB2uo2n9eQsmMa7YMT5mVuDnNqSnsUmTFHFnk2GSZUrvcS",
  "key25": "3ex3FkYEqU5ZnoiNcogQJ45fsaF9FjjR3LzEKC7Xey25iibpDnGuKzYpCvNQP8Vz1acoAuxfeFFq4MjF3T8R7d5k",
  "key26": "5z8xmohDqCfNpNQHYz2QwmMMDpYYgn6KyY5kLZGhPL2wodWcoVNnxhDg8KhVxxx4nCcU1HvtN3bHG2qSQauuP9Vk",
  "key27": "3K4Nt5ybpuGwwiFEJVfyKHBfXCYKRKoDboNrbMrEX2XnevBu41qxgtMbV2nbEtMZst2ZiCHuCSFak1fWkdruccKM",
  "key28": "2hZMP3C2BXFYjuFpHsR7iEAXjkg6gLWrct4pHR91MmuR9kB38MtD6YzM7MShZV9T5XvCmaqcemSLpuqzckGFm5YZ",
  "key29": "5sXMVoi7HbJBFC56KwS9fCjcrpkdxsB7EZdfHnp9fkCQuZLitK8ojfeVvVQGkfiEZvzTN81Pc1oJf9RW4NTxbJCz",
  "key30": "5B4EUswTBb5itDxdjhN8Vddvgrr2dyj28KcAQtbCPnL8w71bAFBV74bKeJbrWb9oxcHVYWD8o2X36gmqz57njQe7",
  "key31": "527y4fP5gAVRqYmDUAU6KB1YYJkrSav58dBkyGeq4dYaQVFpb4ixEQHd15i9y5Vuj1a9qDHT8Pk65Vypauw9geTK",
  "key32": "RkdLxaTNmbEMTGRbc65UsqFvpVGTbZ18o9HC2j5GyqcL85MckkSf1PUksbyoSX33QMa5FLA26xe8P4ETwYdZ4vp",
  "key33": "2JMYmFnzqWQ4LR5qMdfR8BdB4owdCRr3gMW8FJNLy4WHnyYixAF3hhdMNoeH3eHoKtamPfiDmRMPpu7jLDH9Eoqj",
  "key34": "4DB4QLoNtHzjjtCFibKXynG8YvwPKsSoRPws2TKvFFExnLvAbohfQsQLSCGv7nZnYjnNrs4QDx2pvrhGYavqqovj",
  "key35": "38z1cEHq1cEBcS8y2uFp49c83FFwTtbnChhoHZDwHqA7XfdjxrtwKWfxJ6LfFWxkv6oqDa2N2nh4V51N3s6JNnFc",
  "key36": "3Sb9pLrqK1HedxXE2xWYfHPEGWGAJnutCJ3p2aLfrEK92HmS5DzJx9irKj6WDdZ2wUsyRX6S5we5xn3bzS5pqmYN",
  "key37": "16Bwzp8ftWNtcmEy2cXkb6uu3QS6Bh53ScPhnDhsYrojEQACVHPoYigF9RDtPa6RS4LAYvA2QCZ14HNUckSyPE5",
  "key38": "3ymx2ufUqtaGgMJy2jA91vXYHoHkdd9fWxc47atASCPXH1waUDqbLeZQfeHzFTqTZVcdS9sDAwxsjpQjyh4ZnbbH",
  "key39": "41TxrJ8y19igERQw1xS79BGoka4TNEjAth8oQ7m2A5eoufEYuy9v5RVGWyrjJy2C9rpaqXjfQciaKp87JghxyLd1",
  "key40": "3KwnJ33gV2fDL2zSCnRLQW5onS3hXRAHFHEFQVUDTVBr9DnzT3k5aujKbwNx4WXsYPQze6p9C6HdoFqzLV2QYzen",
  "key41": "4VXizBYX2sHPDYdgpcZZg1otb26DLiHAAnaSySoCdwCkjBL986tXYEX8bsQD1ygnjbPm5u1jyymZXWaaL7yKdtsB"
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

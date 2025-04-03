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
    "5B7RAYS615oMvJgaqk7J1RQjjAS2djDnVpw8vX3XvhLCrn4VkNcXpThdeMe8YRqCqyj2FY7axm5iJby2Bj5QHNUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQXjEChscDxQbG6fduFXgqDrc9oGfW8KDzDcjnMi89weG792i75rabQbJJgu2cJvKp5zTEeUPMHH3NGz1uuM1b1",
  "key1": "3KRf1aA9gZzDzZ8dPqu9258iGTD1gYjWdsbB8Y4b2VjxT4SsWDVP2Eg8nKTj3gEJNuuM5yofWtaW9tqhRBcsQpHi",
  "key2": "4RT1NudBz6TCwwLtbqExrTqcj78iyA3PqkzSLAYxvW22GqSxrXK3ngqq4J3hna3LNXzT91XKYSa8ZnRugHRYjcLQ",
  "key3": "2v7pGXLBTLtMcWpVHZVwPYCA4ZL5wthHoFHPaQGjY2Pu6v4vBK8mv8wzWjfK1poautZ3poEFGfkGq8HvbtHxHqq6",
  "key4": "5tzY7Q7A58g9nhWzuThgr5SLRtW5aD4j67NDaH6N7XrakfnazGhJWbn38X24oSV6XnZGwHZ6jMSqo1KtJFJQ2A3N",
  "key5": "PDmpEBG2MuhWuCnQou9oJBkwVFSBsZEyLv2EFGbUH1p5TKNg6LYvbyyjbUhFZwh9VrGa8JngCoLcveUaHLsxweH",
  "key6": "3Eq1ET2LA9ALHw5QybLvKu5Gg3EfDcs8MfuWVu4Dj5ictxo2NSn4dettDeQA2ZiGP21SHetqv3TP9wGa2q6TVVQi",
  "key7": "4jBpt8pbBSKecSPyye5JPB2rzCD6BBEbTSmFe96hyxY4XtJ2ozEjmX4WfLgDiAigMurfUbqxPQWX6hQqXnpQuuwi",
  "key8": "65Q3fe3YrxPrSVh24N6TrqTs2s8jK8DCcJo2jXcNkik588rukuzmUsdK9EtVmX8njaPmECptMmHUNSDoHAknZnUK",
  "key9": "2ZqZKvAWxnHiE32xi3zN31nJrydAoHGXibGh9QHiXEiof2Wfwdee4c979yA8u6Mjd9vHBbb4CQsWbTakukiYzp6K",
  "key10": "4NRHtB93itUEHiXLNqhLP7rRWvmxFfHAEuSq9yzQfpyedaEYg6faVyv3Y6RGyXQDy7Bbea7WouGWRCtRFrATRAZ5",
  "key11": "5kqDDLGp37DV1Mw1y8CtB9efPreYrCdq4PinaXJWpM5HGzQmobr9Rg7VFPSjKz9rW3uuwA8HVsKNSb9H2kGdPXTe",
  "key12": "3yAF3FNXxqSZTyV1tiRWXFSFbLVmjGzMH9ppRi1LcSu1KmpBN8PTKQavcNCeWyG3yiy2SZ993Eq6MbVoP4NVKeUR",
  "key13": "3NhtDkfbDv1D3r9i9NRiXsxthp14NfE2hKZ9WWG6bhYnpseN7Df5Dkxp9YizZTA7S4BUdCtW8mtDm82w23FZKFrK",
  "key14": "3oFHKz8vu3CQDFyFs1H8dGJNNnLUkTCGJB8yBiJqX6hxUUKccg8dQWENMq4Vdoe46b3trzq6szFKfqAwy9Lr2Gwy",
  "key15": "4tWhC11gBNAvAYuNgLZBKcz278Fj8QVoNGUH9RNV4M7rAMycQFvzYB3KpK7VoRWSTPe9CnfxkNES6S4c2BpSHg7s",
  "key16": "3TbwrfHzRYFUdPLDjWckbE9c3XuYAfpZpCPfmron7PxNkztvWir6V8ZESy2KwAYs9Timepxd2xMp8ubqWGmnCP4u",
  "key17": "3Nii8cJ5GdzbMaLNdGkuBwhF6E2kun9Ae7QmSY7ii2qXQoGXvBuaD7fb8btHpGmAvW97SQzRPDK3dB4iay9zjseS",
  "key18": "yBL33WkKzPbSqikfdk5z6PDXLoXD9hjd1PLoaR17996eJ7UYnjA98ULnPWJ1NY5j1pXeazSMPTUGr1UenovRm2a",
  "key19": "2ShwBzNtXTzWUh5nKLQjdsnaZxUR4TU3cpcdCsYD3poU44x7tZnwe3NAhVjENAC7tUbk6WhugHfpfodiuSPi2gbu",
  "key20": "2MMPyH4Wvwq7uunhzs3AsNitasVgqJJUaHSrvUCfDssiWreeDnjoqWgkK4t1AuYCyUmQzMZffX2ZRUmbnUjg9W8K",
  "key21": "4PQwJ6Jkgz5N7E2JEVyMMzRiut2Fh9BLRwWi9uTPVEqrFrdg7BWouYDmCnUbjK5amc96T2VaEkmjUwkKZ6s9rFZW",
  "key22": "5xJiZE52WsSPpc57baraoeDQPA48Lxkf2qywHrY9L5qLS61LibwP6nTBdaY3iTqntpRTw41RFHqE2E4NFeTew3k",
  "key23": "3PYnAu9qnBNpe281K7LRNsoZc9TEd1EPhuzJZwCFPLTYCscpEUoFs6nmgxMMs1pyk7CZ5r5Ab6xkBhVbgVgPXYvt",
  "key24": "4o6uFHdZ9eBTJcn3VuqLtMoZu8nYWH8tv4JgUW4whRvbB5USc7rRNenZHRdc49LJPyzmxvybJUVPLMWViX9Wj1ep",
  "key25": "3n3fL4j4RpDnN4gGg1CGLB9iwPVxVsBCbg91LfnSVYSigkrSoqRpqujT9toeSVcAet1JUCmrE8Te9G8sjX8o9dWi",
  "key26": "67DSL6WaoZyJnJ4nAWsTCvghKDsqUx33rFMbmgetorLH3xmUBTKFwY66TdW1wnXerNEWfMD6ToH4fExwKBZ5TtLr",
  "key27": "2KTJgpam2p7Vfv4hJJWTvPsvYsACws8K8DhsNwt9RxaGeJKeSMiGe8iaDLo1P9BPoAbNBftgMDUju8Qqg8N2h2mq",
  "key28": "2C1fwK8rCQVkVwDgoprtS14sFvQL4FTa3PF2EujARvJSKCR34HXVFgxJCMkg5oAtT863pvGq1PSGvJodkW6EkSqC",
  "key29": "5g2uBbBrq2ALPAYCaFCVcuTztaWCSBgn8pz1vXGVGxXauosifrKbo1ZESNURu6PLyX5UBZLZtrNwG18t4AwybHZX"
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

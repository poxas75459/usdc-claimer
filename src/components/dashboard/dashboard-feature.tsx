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
    "3ESAEEGbc7GVkijy71pyP7Z1UaKqKnd3bzaERWGyCwEJcTitxmy1u5igwemZZK91j3vcLtfrXKYiduUNrFj2iv8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DURMtJMF2Z4zJWMqxjKs1UW9rzGUCEcWVWhRnnXoYMf58Z1UMFvHx6R21xJpu5tvGeUVQBbg9ToYJJC3hqnW62s",
  "key1": "5wCHY4hMgQdrA8ef4k9A5dskU9rdP4EnRhBSQbDMqycZtPHNJMQ9y3HiaC2kmP8F35ut7K6RZE99j6qMja9pFH8N",
  "key2": "3JLNYzo4rY4qWXJDapdbLvAHeG37sMhkXyzSdnjRZGE8YXfHLpfeTnvE621WQGvTNHAjdaBhbst7p1YN6JpHRQau",
  "key3": "YHJCc8upY4cCfQnE9b51hXUoizjEvrnBLT57v9PH9gNCFimBiZSASp3WMQG2Wb9tFSiiAr8dgFssatcgAxqfxby",
  "key4": "27zzXHDKAzcLZ5igkXTKDsCZrWEtHbgSYTHXg89KxQsHufJrQJw1EqYTZx4mZkwB2UEvL23qMjX9gwqoaG9QcSsz",
  "key5": "51K69LaDGeTx7A7Xip63F2Ris4ja6KDe8HieQm69MRpheT7RBjbbYb3FX8nLwn8e6vrTG2yVatRMdsGcB6Ko3X71",
  "key6": "2LN9qT12oJ29vyU26kUiRag3jNWQYJXMCqngfuxmQnnosGGHYJGArdVe3nFspFAfyvD5aZmuio2Fn5UK4DrVWmmA",
  "key7": "DAJPCbvdcnnNGB4bZGX9ae4oYWmPaahJB9tNgA5UAhpQkzdZwuYcSTPx9HRYTMPe1eqhRwhXuvzPYT9BbQd4NNv",
  "key8": "2hinQci8aXoAJfMGFsMDEfvnu8H8a24hvUbUCS2nTWgjRcVSGPaiMYxnGJ9J39Gs6WTAWFycaSoqCAQ59LdhuiMW",
  "key9": "4Gg8hEckrKZc5g3nimtry8Liq4zLekYXPVVCu9wNnGk9qcQezFngNjTS2LLjws7KKfkkgXmthmkDxrHZmYqnQmMF",
  "key10": "5FRwZaxpiBYHhLkZWTJcemD1NjVRJydaDrBXz7vjTxwEuHZZskBQdeqRYsuYBPDMzCMDwaYLyhNNZAaUuwE6m42L",
  "key11": "2Ho9PFoJqjK55WprGE2bk5wLrndXqU2sapvEWsujmNyWRF7S3xi35jn2ZjLLTm8Y5JkMrPsYLV7chHHT3jPMzK9g",
  "key12": "4uGRRamUkJNvQq46XnZahrgGp7rKWXc62bRN2jJCjqMZn822reGWdMUay1qstKwwfWXSV54GsZTC4ejSyeyVhfEw",
  "key13": "49uRVhDTxHj98pdz8AnZg6gBAhqFaFzNjzug113tKZdYYPxMQbtSmifRBoNqHp4c2M1T4WkEc4DTyYTJLYPFExYb",
  "key14": "3vDoHXWn7rSUN1jSMbM6YKkjppmuvdEhWFthj5qSrWBoPW9xvHdzBUDHHfNy4kDnq9xAogKCjR5TLDmSmUjNUhL9",
  "key15": "3ZuBxFnm1qEoYymLyL74YdGUyGtmpZ23JWXzVdPsQHjoUyKWvAWi9m21i8GsNvcyVKLPMe5HdKbw2noPNQrvYNG5",
  "key16": "3NXYZBJQTRvD35VMbxV1P1BphTennduMLUdwFDQDvacKvgUD94QgAmuyZqg47sYSB478ps87fmg9uevdEixK9SYm",
  "key17": "4KEZgiuqwjJRjyBsmhQLvzvFkN6pf9v6CDLKkigWTKVV6mktUfhyURHbU7j12STCYBa1crvz69M3yoxexajdudLP",
  "key18": "5TyD6VJtCkV1PoqrWaX4PojwyV52Hs4VVq4jFjVMGSmyLNZHiKovNjqsCYbHtE38ujT198xKCdVue1ZhvgEg8VDf",
  "key19": "3uCwgZqmHyr7bP9kNHYJUHrJ1eiUVQXM4Y6kXZrKKyDH2maDgq5zh9BVDrpf4qz68rsR3hMTZveHKCyvwFSZ42Zn",
  "key20": "5TBK9gCxdXWqBxfma9R3QaZbviha5PoTrid4vxmDhraykwW7jMahNd8WjmgGwWtR9VeUwpQcMKyMzm2SoNEYF5BN",
  "key21": "2pHhp5fCMisGySocjg3HHxeAUv2e7esrZZTT2zK4EHuuJv46sxSe5Ep7c1HG98WxiGZdLXhv9G9xRTNZSxVv7Ncd",
  "key22": "3YC6Yu5VcobaneUGXPwCpVG6LioAMbGVxxS5nn6ZWzNYtiocVvB5xgaZjdNJsMxC4dks5BoXfMDmsMzepx78JtKN",
  "key23": "2US3Qhu1TdqJqkTxTb8U1kbhvUGcczimnuf6kQvbT51V9DH548cuoavuoBrSuXNrQ4sSpkkgUAz5h5F27w2KC9ma",
  "key24": "4GfiXEfnihiS3Qx5gEpzSi9rY5HiUsRfdceQQWB4KFj4ZvW6eKFJpaoRgri4tBMzApLhvkNGa8mRgquQgkdZaLvZ",
  "key25": "4jYQiEXs3gBpBR3B47ywDr8LhrHH2RxrjE5E4u9WRSvKBhTuscKoj7EjkNsuxGnKAnnB92tnScus7W5nFN1yGUGF",
  "key26": "6rGk2HE4VGWNvNeUq9pfs93BQuQSrkMjXJ2GBgc1pfkKwTwfivHJm1WdG5PHtsuPJyiB1cnx7VfMVmJpZfLspmz"
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

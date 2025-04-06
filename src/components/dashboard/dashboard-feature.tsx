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
    "59v2JjieYuzUpufKLibUpmmtZkdanwEmG9JpC8XQpk4GmHJPcWCPxExW3ibNFeNwF8wkYMLeH8Q4ms3v1pupn3PJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tSuHwDXVcLkNNzogC25L9oGgfWCXDUqJ6KE5ggqc6FdAF65js1mmzzs4AUBNQivyjgJqJ3n1rLxhaibEops6Gmm",
  "key1": "42xHPfqEYwTb5LvDdAtxV1iUZejDpeYkQgB7ZWazuw8USq3hnXs3oSkWqCJhzpznhMLshdwvChhqF1zBBPsVrHfY",
  "key2": "JT4PSCoG8kWNnYr66rEvLNJMrP48Yntin4YrCpem7PqsdxceDHyQGYwGfb2y7BQEUcwK7X5u97vnNnBjodtugeY",
  "key3": "2oDwwbiRXFPHY6iHKSkuodPdEvFEg4o5AKxLznfFtG2SJREmS4pUiizARwkumZRYKaJUwpvPZqUsgint3N6MUXq9",
  "key4": "k2siPzBvUpnEghMdXrmkpsKS3rPQ69zMYjDoE6PBzssv9Ywbjp2qEFKdJs3m7eRAyZe9zGpW6KPykSQY6Nwt9wV",
  "key5": "22PhwRS8q2ieL2GhCiDyLwbbqaDvjMkLHnngx2ouzqfadPTEJBPzSHGVbhD52HE5aU2HtgiYEfvuZjxiTDvzpoAv",
  "key6": "3VfqSe5HJpbn534wCUv1gVtzykFsYQyjFuSNPKYfwdsuCKarCmcP8qyEdbimt1X59oQS6oagX89rNLtVHkzeQuUn",
  "key7": "3hRq2hhrrv5Rbuuafm3Rokk1YhBJF6ozvhUmuADqakUPaXaPCLbfWshQrfG3TkMC2odb43YFAmMz96RU6WAoYp1q",
  "key8": "3pYuw7wSifRyYjszgMKpBJdE99BMcmUgoifzMhBFk5L6o2vh3rsvBwiFoDA3VjdF162AtBpE1kTPStkYvpgXXR9X",
  "key9": "3zUeeiUSmEU2QFDAArhryqysvVxo2YmGZ1D9KfJKJ1YkfhWxgdNVagZRVMMHeqJTHCfwtbH6q3cxn3Yn9MjwWAGu",
  "key10": "4HCMM9MLUHv8xXdZfxJrVLUR57XrXNPz4yaW4VitVeRp86TVeDN3QCe6aaRnXZQJ5FjZkr3Zsb4FfNN3nyZtsDsj",
  "key11": "c1CAiUMDWrBvxGiufapQdw7Z155SY9WEV4TKyZMvzDiepDSqEbYv7LBtHYfDbv4Z8WTh4HfhHJUTaVsiLtyFPTn",
  "key12": "4dHTDQokUfR1mojj4d7L4nZ3P6yo4az6hvoCKi6S7u7JShYXuJUXoEmMzykSnpv57ouEGUv7NpgJBeAECE3worCd",
  "key13": "2gs3KdcjNQuhkx3kGaUFemHMjfBkgiznGVKRYAhPqbkWpGbvYorRAmcGYwL9zxGseAEgdLQqfWzNmCtNdZBiuZV",
  "key14": "4gwrrDWHoJprNumh3umSrQPKAiqgYa2qa2VfeQWvR1oUvAWhCHY8d1p9RzZ1f4NBRXUDMBcu6MH93taskT4jh58n",
  "key15": "5umD9u6dyD583KAegH8FT2tXoSkc51kn68Wu1DpioZeCfYsnhvy8KfMwUpdRpiDa6pKCnEBPjTkAjPiVFDvZywJ6",
  "key16": "5fBD4tULSFKwCvxMxrzq6uNUDQq2Mk245NSpRY6iMKV1b6P7tnt23zARimX8zUKecosatf5WM4ARWpbcPwgKXCyG",
  "key17": "3qwgNmw5sVYJfDY3H4hHbYx7Tr6vHFgbh6Vh6MUMxqSkf9QUwhZAqWyD9c4wqt7KvbpNPgWXjEKWeLQCRjBUZre6",
  "key18": "4R515ehJkFdWX5LSHDFftyu453BWKa1F4RxwDQ7UfEbFRctRU8zf4Sx1TU1DAd7PnzuVuBHvMk7hfEgmrtNoaeDV",
  "key19": "63sqjVMSKMcXYQcFiChU4jHFSTnb47Mu5j3JuJatSie2Hk2gT5ctokjuF39cqsvZKZzz9JsAbYhLkgvQqtRdF3qr",
  "key20": "xe3Z3i7FrjXuGQxY1aeMhNTo5wz1CpY3QQDj5kuzw9KH7794X8AMoZJ9rpTaf4uRJSgpgjw1nDAkENc4vKVWzQx",
  "key21": "2yUsk4hd1ZpXQ2kRrhuWsaCheTe7cq2dZa9shwihxXdb6wLcbNs8EkJH4DBBC2kDusy4mr11DdwfVHaP3ZMYsKc7",
  "key22": "2ihbQKhB6UX5msVTPxVPi8qPi4Fie5pJAokbihBMKVugG7XrAZJSF8DpW4ujVbbwg26QnNmN2Z8fSj71RHWETQEU",
  "key23": "4cJD3M9quUkY7jTX4Yc9c4tZ5xZBdMSj4kwoKFdHT7XeL4csNy48CfUoLhAPoJtkRjmCHMRqckdjr7V25grU3Y3m",
  "key24": "3ZSTdb5UUdd52i5Wqt6Tyv8WDaYPZUPd2Z6JC2UgcsFmqMjs856ZR3UUnVVnvJqjpumvSH6C7fZEpDEW5uj3frDU",
  "key25": "62EcTyAxb5V3xhNFXD7o5za5kXQ7nWSA28cfKVQdPbPp5A5s1YMz8KNtwCkdzQ7XN2yKqGTNq2PJeLzKUZtipLu4",
  "key26": "cmNgEmL8k5zWvG49PyGMD9WZiDGeNQa2KrZ6teDLGs6JNfwXGsnvUMfFFakGKFgC9uifmuXWCmtV2jVBzpQhnFa",
  "key27": "3M3rMeqa6pjcC1LFesFdf9e27adLnJ6HsqdSMmHvP8dWeGiJfm7BaRmMDvxSKuTr2qdnoZyDcRkbcFeEsZSCXy16"
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

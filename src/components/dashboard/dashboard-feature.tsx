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
    "2qKoPjRZfiMEC3fPmELr3p4dhJtY7Lu5qqTgLKhDptqB9Sbjw8oRN8NAfwDxJxNew3yYDAD25ewnVCgTctmxfLFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252sHcFreixWnZ19UBpokjogeqsWmsfTWb68xMrLyvkbD3sRVv7WnnsBgQkUiUAvwE9PwiLmFb2cddmRaCTdBAcw",
  "key1": "2JaQXQppJW9c8LLFQXD44Kx59d71Vw52SktrPK7Ec9JJDKhqJV2ibs6JM7yYwrzK217Ng7Azz6Zuc1chhWNVWVbW",
  "key2": "3uxtQwMNWJ785Qg2zXLsCHc8KUGs8XEje9NnLEK9zCuvDqnyL7RaMern61LC7YUVCKL1JGK2wt1EctQtT4ApLx3x",
  "key3": "3YucsWVWydEetqgigb1EyzJiMaXtuWwLArqXxx1rfpxtsvu7u3oAZxCGrQ3Lq5f3D9aKNccQ1Wz1geDgd56QGCoy",
  "key4": "5h1QvknUotJL3Hy6VvtfXz5kanfnbermaa19cetEEowspdbu6rLKd8r6iZxEkkTcrNufRmN1G73ki4Z8EqZhVJBv",
  "key5": "2dbTMQF79i5NfJMceeVxyqpZ6hKQQt23Dtg1V3pBQg7Yp44BLRGk3d5KnAEESsYJkzmmVaPn8YShwP4EP3rSkfti",
  "key6": "4yksaDCs7oa2YqmxgQD5RH5qjRcQ81Cx1GGSPL2Cw93xXfKruis9afFa1uQUmmzGVRDg3Da13yetBXQica4ub3AV",
  "key7": "2YCP8NDAJ1yepMdU6bBp3ZZDxLNsJc4xcswhGBKUyfMm4KszdB3xBWaw2NDG8JhrgLgbzBRqLfxUqXDv2eRpKfYk",
  "key8": "48ND5QB3d9fASy3McYVyUDKBD5b1bVSD6D8ExdwRNxWRoyiJsEKWEVjs8L6DgHKgbu821uzFG1qZVbELQ6Zxu6ku",
  "key9": "4CuEjvaKACio9B6NQZ8KRaPNutGRbd92yf4r1EZKPFsYRvohTqhWfTJmB74FUQubzzpypgHckAvgfmxSHPfraKDf",
  "key10": "349WbgzPdL3Ft6qu2oZzvi7DTkutYMqpqiBf3LMfhfpiQgWXpCDTZ19efeFN12x7YjLVKnKfRjLbHK6zFkQZqwre",
  "key11": "5mKm5PKgNxQEL2BN7FkpMXWpxnsBUt5WtFdraELHozvjwnrSGaTJkGuXbVoVxttEJwUkBp4WzcKM692csvuaaMgC",
  "key12": "4JHiiREUJn8hjJZGTRZc7k1GUzAr54LAn1bAoGASNvShhwBG1bYqUW86ZJCZ9VYYJLFpnKnpLdEKMzzrj9pdmWHZ",
  "key13": "42P3SHrMZEjMxQQKvxAeSaXA3nPJnn8XpXWBKygB26DhDPjDonfQq5SwP38e1ErKXXBVkk2cZutSPj79dgcKoNH9",
  "key14": "3Jfr4LveYYHTfGCTLboi33rJARxeqkpHra1FigaLqKnp7RZ3bH38igwogYKmYtMEUvXhLpafczQqUfsKUDZRvHnT",
  "key15": "2jZro4taBJnTHQfE55ZdwkyhKcHBXAYwDnzT5Qu4U9uHvxfLv7QupDQvF9HauiHUaTkQtdFrBFX2DymrSYcZGdFZ",
  "key16": "4jA7AeG4JcxXXQUMspjhwipx7q4g5bJpvLTkwxNcwas2Q3NUH5uhVm9gAUhTuqnXLZDDytS6dRfeksHpMHuLazA6",
  "key17": "2hCVHtoKzNoiEcbH9GnNKMGUASYYm7E2kfLu5pneihcxyyP3e5hw8k3h2w7jAk9rz6aur2FbLApxVKGyaEgxwv5Z",
  "key18": "5k75LvZoTF9CZ8ej9r4ciXLmcNVrxTUc8BKuvhDZ7TmjEiopft3bjp7XZZKnKb3tc7pLK2qaqNqZqj5ysWSJKC37",
  "key19": "2GPqeY4xenSyAsgPySHEXheLBfgd28Q4VumAhGe5cEsrZv1JLXbNUnTmthaThbJz3uedBmZZb9MPHVrbRYPj46Af",
  "key20": "fJQmTEMBEcMScF962EK7KgKeaEgptza6hDPjode52n5oA99v8xq5VUfcb8vjrkzQPMuvAh2qBXQcGx5dQubsNfF",
  "key21": "5HYgjufpvtva4WT9h4KYsQ8aswA2LCGQHQjsZs8Q1MKxByq2HQUm7pTiGdjMikbHEweT36iBJG4TSb8wkGVXZmEU",
  "key22": "2tfGBYQnvtcruwWPKckHzXm1WVHXko8qaYeRMy17u8bA24LB8TMf2JDNoNsgMWia3VrXRcqNC9Z7Ziyecs1NAXG",
  "key23": "4ZrMYpNNRXWxRMVSDwCo3v2xoniaXWnisoMwCrodiFfLdzgyMP8aktRhiFfQW259h8kMuRkYjLFM22S29Nkk6b42",
  "key24": "4x3TsJWAp2mvwrU22HhneCNpBygr3esMUi58H1BfbV6moi46KXm8DtTiETrFigY3xkw7ziD7ysrnfV2C9znnNaB5",
  "key25": "5oQ9bqo79udpCMFJtcigZn1zG6euVq8Lzdry4YWrDk9qyuujUbcMVYXPFYJZdfugRvUZoZGZdQArf578N22yEthX",
  "key26": "yfXyoa4z6457iVkhaXSHkphhMJHNqWYc6jimFy261KZ7bqCasaHawWSGEx9B3vMUfowvBCG8p46QJw2JwzzwXgu",
  "key27": "57AzobBY7QoH2td7wftrEEHk4giYHzr5vPoQGr7DxiThZWxbL5au5EpvXYTXF5YFGjgWnXr1jP8954gMvCjQaxSe",
  "key28": "qFvtKW4eudFEQDKjWEtcMFX5NZVoLXEomcFuzrkLjVAV8v4cjP2C5MXSVsa3YiDGwuFGHbeGbS7Yc8fQBv4KJRw",
  "key29": "3g4J8f3G8RQz5TZS4V3g2SXKZhMHsyB1SFoLgduXoEGxYpNr9iDgfuxxJtqADkTkQhd9gar4EJeuQxiDsowk17wS",
  "key30": "3NnNN8ernUGaW848ppKdj2g4jfkMy11nL8cvi35hg5dkz6F2pFkjNBV1iwYfyvzNnJHDgAxBXLSrWTmJUL9bVNFE",
  "key31": "khX6bQ41fut9954Ei9THKbeR4RmBC7LeUZU6ZkkjYZ8Pp1Xb8trCRhUNvwcJqgerEzEKG833QfQRFa3K6Uu9NsF",
  "key32": "m2Xcu1bYcB6tkpvmAWPFTFRgKiDZuKTpfipBXorsZW89VLcjemDSjr54S9RGLo4sdVPKvASZvRvyWj5ki7Hqg3i",
  "key33": "5eRkzxj8A1H4prr4YKgFanahm7fiBRKEaZrsKSsYDkVeQqYqUbpTPT4jYuVrzA5NJZCiCNnJmvZvXYB6UoLGrMVH",
  "key34": "45ZqBBHByBv1E3PRbXvTjts9rNA8MbsQ3t8EKytR796k5V7juX7sSMhjbXxRGZHVwW5kXkXsjTnNV7ZPKaDtXhcT",
  "key35": "3gGDTkE3eUv6sHLFpCoi5XvbeRZc2SjrRY728jRYSkGTxaQjdk6DUn4EYS2myRUUdmDVwynmKjSr6PEbqTgqMxPg",
  "key36": "2wStrH8UWHCJnMa3jTEEjEkTHnpEe3K7ACxk3FKFfrtVHfButciEg7RjknUPh9WK6eei9arDhtSZa5PdS916byuN",
  "key37": "4PUPGWxVcU3aTjmHsoxn63vzWRTSWyX4za9sjX7K6k8ev9nnCd3US7tejwcVv7Q3nbjUKiPP2xY5xb7yhKA65ysR"
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

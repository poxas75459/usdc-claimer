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
    "5B6Qu98uW4h9pHczdE1u8cRJ4Na5zmh84RbJWjjiTemKRLCCMRrCaPS9gSxi7Do6mQd3YQb42uAvfNB7PhHYx4vF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pK55n8DACEmSRKjQehdAvpdQd8svPSFVLEJRyLyvrDdXHZ3k1vzScnN7RXV1nE3oMxxowgApz7VAEt7NiQWghcZ",
  "key1": "49CGc77Uh8PdgNLRR7oGRY6FRSUkB1wMAnjZrFucbDURCvW8TzfZhXZSxXTAAvPC7mXxCRNZ4EwtYTxWL9ZQ4bTB",
  "key2": "2QyhzxozrGKZzCwfHjFhBCs23q7i7J6zXYokk7NrJZYJd1XBmVVU3ukBXQHHXKu9gGcc2RMVbBdB3LHCwuPVLSLv",
  "key3": "2kWAKDUHG2vp8zTx4nVWMMX3atVooocuRinqhMmaMgB7ew6UynqoxqAEu2FuZ76yN7susAmSZBxFyaR3jAHzebxC",
  "key4": "2YFYkXSpYK2YnEwicjzWiRvDYwYSedbLiwFj46fiGuQ9Ugo3uHzSGkRZEheA22UCQrwzUTBfDtBHzN1MgFw5kB7e",
  "key5": "3a8SFAhK6VpJamfMn8vr3HGW5KdkEhbCVakiv9pJLodCQyJQuuzZqJPz8Z2wRytV1xc4UdzSP8qmsFEkUFYCQXuU",
  "key6": "4kCdhDgCabJ3qtSxCCV9fK8r6CFV5Ko9MVaafH6YVhhseSdE7ogYKjK8DD4ozRDur1QgpPGbBFbc1j5E6RfxK4HR",
  "key7": "434ZphSHYcmkGzvXCNqYp54DViFWhMYRW1RWogw5oLS9uXgr5CtjnwZuU2Vau5FefpAJY4PouEEmdoLaj4p9Nnmj",
  "key8": "3owSMcFdxbQ9a5h4EF2GnYEKjTiR27tVY3ChrYVFFvjcBcyMfrfAxsFEWhpsewWZxsxbKNpn3jmqTfHFAo1YeUXN",
  "key9": "2UjXMD7etUebAwAb2PubEFzDqAKzvMg6D4y3CeA1MXkKaAAeuStmYgeYjaY6t7yZMvVYij3grZdSPLAoR9SFKVVF",
  "key10": "5DVhacruB6hXpJ7vF8XobGSfhuWnrHbRr8vjrRiZeQxLV9jF3Xg65RC1X4j2BXitHsgtYenKtg9qvgia45kWzUhc",
  "key11": "2Mm29k7fa9W4JkAMCSAXHPgeJ9WDknptSF2fpYv4TjYXBjciUAAgYCi4JyMNbVAM1YNSHosKjQ86DSk8pdwWUdwG",
  "key12": "EZJDaj2wQkHaY1QRZYWG9pKZguK9J1aqUGMeY6AUQzkFwpoVkk1swJ3jUFCJSZk53XLmVE17nnUfUy1Ni67CLtJ",
  "key13": "31HEFHsKc6t2pMBJ34VaEH8tCuSQYLJLpKkGqZF2F8B1wHU4MCVg9gZQsSTu43aMwCpipJz4SwaM5f4tieBsrhyr",
  "key14": "ELJpAFuweUu4rfuXSR3n4MSdcS7rQ6EDAiTcn9hUa4VL2nnmKzCyyPoKdtTy88EM8C781QfENUhv4cCurYEJ5gy",
  "key15": "4PTkYnYxWE43JPDL6PcyLv5FYnWQqpVbzgHceCeQwRKpwGQbLWtiMtUnNyGZh6jhfwTF2m8WRWuxHtStpQKhhe1q",
  "key16": "3v6263M8R99QMoLDc7oKsAdL5NMKXLFQud7JmJYSR8ndq6DM1oopedmB2TR3CWMfVs6ptJv3Td8khjao4TT2xiDG",
  "key17": "2qTxV6AcU17URFXB6hSbbtYM3W3tN5aEcmXxwmFgs1ZkBvvBqqw78MQNLRRypRx4EYPmxjbN9LG2xsDcxsTYCD82",
  "key18": "2CvBMDLtiHKVJ9KLt6YTqXyTucWmnNQKo5MZBMkAfEqwJ8ocgvwE3sUAqY9gMofmw56jR1HXFtSSEViwjuFMfYhm",
  "key19": "4ARMZu8wTuLktvPTWwieFVbUbUuUZsWmsTXmdrpaReLDiLhcmPJC2jz6T7R1UJUsFnqLNFUgC8wppVgTLPhfTCLF",
  "key20": "66yAAYjCF92jieL2yE7P1WP9jPgLsns6ao6NSbvbWTE41yVnyx2BngrpvsVFrpZwYU2w5YzoS4xs2pusZybbhvQ5",
  "key21": "5LgJDPQqNKpMgNfRx6Hboy7A6i7YBWHMvevGZgimBRPFFyhTRQew6ist2Gdf82xVARwEW6FZHj1pMvYid6wKbacY",
  "key22": "35HdjnPHyH5yvwZY5NHsvSBot4Xo56rKyt47jrfep1xPivecKRqQ4GjvqytjrnqSQd5kJiuKQ7Ni3hQjcHATjrCy",
  "key23": "3YTgKmJoWkRezHefHp27JzCUfjWZpASSLW9SaPF46C4YCNh7XdJ2cUzD6cVbGuMU7D6TvcsTDCY4HY9ftc3UFp8a",
  "key24": "m6wRYAFTiX5HYkQhzpLTNdmshe7obW5cigSG94M5GdZwG2yzmAU4Z4reN3okUPkz12hDvtfMgEny6DJSxVAFiaQ",
  "key25": "3XMrgjztBggyQ2JDfE7fYtQLVpr8vJqd4yqvym7TTZfEiPhEPC3iiiKM4p3HyqUzy8Lf96o1TgczdYbUuPT5twtU",
  "key26": "4GHDgxBGJzJCXY4dQfU9azdxLpCh7a423mG2F4r69c1wyy35ZcdhLRji4dPudh7JCk61AbwrsjDH6A95QriHKrpq",
  "key27": "4VPoGJ464EE29cY5vJDY2RWVyuRZhc7zvtwHyzAU8PqWsiZ7AcwLz1vZwDxDnBNWuziMwqfymGfPTkskWb6VRGny",
  "key28": "2RNs7StXithqRN6UTYe3458dj9yD51p4md1AchTvby1iHsono6RTQHtYYzcDdJkNvFeWRMyDLWY52Q9V24Vpq9im",
  "key29": "5LMmNEugRZE8kmtmRPWc5nGfJ9wGHsMgEZpqPazUpDaiPZwAjUqqiUx78CdCgRuG1sw2bFZHNY5fa8MeQ9AzkoZL",
  "key30": "eNuWuXHDey8ZfuaGmqpGf6fs6k4nsAddEgaCDEZP4BxKV9Z33ozTUjzJ8BUX34HJWCqsC1M6K54PgzBgNE7BqHF",
  "key31": "2F3nSyYega2bHqDTSFyDn9cP6vaCxZrLnWFpMwMKfK9uSGSuzTgAFFSkmuC7yooHF6AA5fhSJrAgKgFB4BwaP8W8",
  "key32": "rA4EFFBQovALuLdQGrsErS6A3SLSpvhNi7f6CApVgKNQvWp5mgS8qTAr6tDd7fmc18zy8bSZ6NhqrA47DxQshaW",
  "key33": "5VG7Nqyc1BS46gPwWuLcaEWE6cw6XNZJpNHNLGEJXGmJezGvXvFJMbokchmieRCXtHiSW8iLg2UA68Ea8K74RcGu",
  "key34": "3TH5XkKoRusP9ntY8aMPwP9rqR2AVgdyBtet9HXD6BK6v6B583RbXHMVjs3gzjKLjuRcJhBnqCTRrH3pwyhDnAnp",
  "key35": "3rTJBSecpiwTpq3MNjVUqGZgP9R87J5wAa2qbDN4XiaYjq7znTXkVumGoMEj88NQtDsxQJz4WYLcsP3hJs1AAq4N"
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

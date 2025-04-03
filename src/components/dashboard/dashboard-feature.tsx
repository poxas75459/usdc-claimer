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
    "W8iXtJL8BaTNo8YkzDnZHgnc6hTa9PEbvt1gs2LauApxEJkgnyCTFxGziMjPfowoiAGPMSiko5aE5ud4SvBtT4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PQQi9iac4g8p7C7WkiUQ9dN7Lfx5zVwK2cae87RDGB3wjgTLiB7Bdm4yjGyR7sNHJdohsoHA3FRFXERVDYLFdsG",
  "key1": "4nx8BGAgpNkT9mxkfC8DRFAk1Rx7kfWrgXnKmeLjwSkqwrLHJHW4tT9A2WMZyphBG2ihp2f9Tu7Tz6CMZtZeGaRn",
  "key2": "M1NU5AiG5wGPGSgsecWmhySBAKmvrYij3gXy27dSgTa7MXCfqnwReJTMs2EQpxJgbESmRxaG9FVZCRs5Br37kyd",
  "key3": "28yAiR1WcvVVqq5AUrnk9RFAaeRuxVVTnc387N6zJeCrXk3pD23sUPQqwppGHpptp843qqCYdpc23aZZL56ijYq7",
  "key4": "52uaBJZsRPbd1PV6nKTqNmaKawmbYksqXVfEFYbrMy72GQKtjRRsw1sXZnhXTCsiK6BAVuzVJFcD4xC52G6TufsS",
  "key5": "xkgGzKoqqRx6LzpSrkL5FtzuTCMrC5YrLReaQ1wkZTuUnWXcXBLba9aGgYBcm2wzHowSY1G9LuhJFovzD3rqco6",
  "key6": "3sUUxNHBR9NcDM2oqfNGYP5ycFWKXfNY4rYPyXgHKZ95CMfmAB2nafUmfWbgG9sHGXtZwcyiABbVP1LuRVUYXKvr",
  "key7": "5ehwe8xpMgrQwus3yxbNSyRYVsyeLBJV9FKWdA8NHoah4FJzrCqYCmhETHEjoPT6jjRBxaxLFA19AtJWn1farK9U",
  "key8": "4A47f8jPL16mLxwCRBwF18cC4yiB59sSdMvMpqtwk12BKLwkUNnbiACMchNYutvJVHq3wcWBFHMRk8moaFhWmcpr",
  "key9": "41LZ1eLGgppDLkK6uEgLQBVti7Wy8GTgLZ5pYntU4a5y3MUpEPAfR6ZXhr88hvfXpZrwFBXiwcARvWyD13byHyC7",
  "key10": "4tN6QqhcPhZpHECJT3R4RQUvp3b4fkND4EhQZwx7nXo7iAgGuNvnZju4C9Lo32tZpwVDNuuwPyvqBdhxFcWZg653",
  "key11": "242zRP8bsnZFdfNXsSLrFqhCdwc4FSbfjE78f2ADywUEmTdyfBVjjoeHjiyVJwYoYRyd8JxCwLHVzB6ep8isHqPh",
  "key12": "3fNdsAUGDiYdqKwBmbFUWuvTGkpxiNpz42MMkSAohprmnJdBWtTqqopTf1mLmdnKgHxK2fVrgYBresLtWJ8H5tYK",
  "key13": "2kcNp2GQ3sr82R526SbdnLhsEg2tS9Kn4S9SQn528ooatGPbkX8NbRazoJY3tdhxxihUpgUMiS9SmXCeSgjThJkg",
  "key14": "54XGMreCDhunfWX5buE5tYV141XWxkZDgA1LCybEgWqfx67FNZf8YB7Vkrs5LTUhrYSxodY7QiRqZTTLB11V3wMM",
  "key15": "4j1TLt7WvZhi467eiFcGULvfRfCX3qq4WfCX4DNYLTqbSCeeM8FtnvqQ1tiJHWRoB1VYJ74JeeUBA6ARLkgfgdDL",
  "key16": "5ygA39TQtR8YMy6tLkKWDQMB3m75i9yNCjqfJvmAqeUjUWX67Xs6poewwAPMq9VzQRZTV86xmfEygsbsTvXweCMj",
  "key17": "2KYC7E2BEwiVyNs81U3rfu564iP5Amdk33y4W6RfxWFP5znmpmDNroRqji5U57ZjiJ47nCtb1z1VS3Ab3jLF6b3Q",
  "key18": "2KYGE8sy9tiMmQYWw7wUhibc7ADw5vZLxiAzJ2sYWuYcZeciaDDUYXhUqYDAe2gbLLhqRRAEBWgvfbYY3UTbShCo",
  "key19": "2eJkK42mA6tjjydEKyQ86dZeGjGVzEUXm8TRX5R4oZUpouEwsaKurFQ5VUGyooS9QxdcBW2BasKkB1WcAHCmKKNn",
  "key20": "3Wu6NmNC3vQbNAuhAriW3xkF2jRCSZoM33zxSbg3Fx17PBeqmteeVwabJdcpjbzECGxVtcKWJpcjgSFG5Uaiua4r",
  "key21": "RG1AKjxoUtVhuRMxHxQ6mMoYEBSSAUewFt9rMqbSxRoyPjL4t6rpPCByS6BccdQu7ThTaiQvy7mm2aJZ5BwnETB",
  "key22": "jRb4siDA73Z7MqPTEhQBss1twVHfofNE69WWS6wFfDDpvnc1TBSsiUD6H1Aw4te1Cb8mxGHk5gzSctg33zdvpXB",
  "key23": "3wgEdSigk4ZQFHEo2Dve4j7m16Ji2TryMX5BWbfHJLnMzoNph57PxBpArEiXTjEjPmodyoDi2AZnQ7xwaXsxqxyr",
  "key24": "5oJujSter9rGTjCD5LCugrnLSnmbE2kD5cgMfTwxaMuYRoWHkSTXggsrYR7C3hn8ZBU7im2VK94VZ7vNu95FDJKT",
  "key25": "24Mx5BJ1weow35EBJRNZKb3TGDJugncTW3ZmJGhb9xweSxviWAiLc4E8dKcxyJvuH8FuZKvFUaYLKUKcFY9wzZpt",
  "key26": "5qxD3EY3pph7DS7BdX4XWJn4eVpxC21GjaJDWUhj5Yr7SnxdaanRaCPeBcKuQ6CwJHoYiavwida6ZccqvZ2t5JPZ",
  "key27": "3bc3X4wkYdWCgk8PzWVzFRsuBK66xUrpQXV3RXHhR3GUXjEpL3vDj2XLLrd2xfi9FZqc2NtKJnQdztiLdme7EmTL",
  "key28": "2DvkpVL7GNQAbHLEaAyLYA84tp5B5wBeKVwXXF9h8fykiFsp12gHBzFJqtBqKNYJX5xKdznAcJyZQSjWqakdW4sJ",
  "key29": "5cU15PN156z4e8xYxTsq8QW6sCGEktuKJ5eU4348Zm2hdkB3FDPCHQPJWHpGNNe213Sicq73ZyNRkorMneMWc2Pb",
  "key30": "4HqQUSKyrSNxoAvwy7rN2UgzRWThhnFSjSfrWr8Xii3D5Gtht99bE5kMBJKa6VsVuxMzkzT1TAU4mV42STxYEbyb",
  "key31": "469nnFcJ1qQ14Do1HqSDQ7Yy5LStAcuXHeEcigZdaJ1gg7MNJyvL4vnuBKW2f3otWekgodur6znrxSeCZSavWs4U",
  "key32": "28y4tpkau2WLZbDpBe9nECwcejx1mtWJDxmAdNK86hDgVrAeJA1kM2xapicvUK1dUdXXL8mVDKehHtJryDbmFuDQ",
  "key33": "2AZp96sSZXb9k4xkhn8gjfaGWykQsks7qUBTriUZwa93sQ7EMEjvBbazuViGc7dkHMqFYCTYquCGTetiXCejnbQy",
  "key34": "qRWuxJNRqtkz6eRPRc549kdoYAgSvrS23VvquU1zaE8fJax9gXvTX9UdXha4az5UZ5U9reT6C688zEpWi5AH5Gu"
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

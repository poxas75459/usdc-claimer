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
    "2xDH7NFZmUbjDn8i6VvgirECkLnq3oeK9fwovp7RdCSvg6ppWiVFujpSZUHASTUp7xYDjwySkREXWK7wtFLF6ReL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vZvbymbUVrU57F3oNRXPhJfufdwJic2GYp1SPPevoJMHEPykcxiev3ayXqAyz1nLEurDQUTWp8BkaPFNrC1RdY",
  "key1": "psGnhxo6iVwUbRFwxr8rk1hESRw8wWyuv4E3nKGj8aUX15j63zv9kY6tWrREaQzCvxi4WUp29ZHJupPhco7dDYp",
  "key2": "2Dn6FcCu8NzpZEDajQbeK9Vb97QadPkxFQ9DrNHZRt8Pp51eBm2RXTGGKJbx3Ak9qxMV7TpqXwzYJrvowBS5NUoS",
  "key3": "34fbjaExJvJwXdEYY4WT2iDSapkAwUWTFnjMjFMxzy6YDBbC6BNTcP5mAhW28WW64uad84UbCiE7FzNCpNhT9jTW",
  "key4": "2ehDgtgkmrYxzvoGAE2qMJF59R46UhavEaXigHMXDic42qi4GHomnaCcKWisEWzqFL2KjBRrQkB4t9XbXfgES8Ke",
  "key5": "h3u5cndW9yqNVYtJYcKdoLQ9TR2jnBGUoeWZaMXKpy77aLqxRsDBviPcQnLGTeRwgHYpbrKfNJ3G1XybsN7H1Zx",
  "key6": "4DuQ95zML4WtpcDFQZPzKKxefb2bR8UYxmYgHn25Moo6gV4NRJaocXmy4J9SDTK8cUBZxpQoirBjqNE1uPmWrFD2",
  "key7": "vxW1i5takuc7wv3btou5VZmgCVRhpGbh6xsTsK15k23MxqKakGdd6PQPYhuerQ2qajqjBSiqf5C9V2HDyGxjDcG",
  "key8": "NRKBS51yVdJ8ZMnd3JynedT3GhCNgt1rjh3eceCdNMWYFCuuCsZdTS1y9UVXoH8KgcjMfaqsZ3w8m2chuL1ZzSj",
  "key9": "3hq1YXgzssWzL5y9Hnbx9WoqoaimxNCQGchQqsayUFso3X7bDKDaFU993A6eX3vKabazZtC72msqACoNitDyYBwR",
  "key10": "4c73MZBCCAYx7JcdbP1mgZAW9x6MzcgRT3i8CFQ1eN3NkS3A9tpMJW5zfRkwyxRvcARpyM1CStbyJsw23aiecJ98",
  "key11": "65mya5fyLA8JvqUSC89DDDw63oWjo6E7vUkg9ie91DQLvdWqquP4CFHysYZQJLadBzH1fdX5JVVDFgZ1AMbotfCv",
  "key12": "hQjn9BcyN1By8kgK517oqUnDMxF9bzBBR9etSxZZJsrM4jVisyS2ksThWujqRVhANYQzUR4RBbt3Jg4YqTs2TnM",
  "key13": "3foLcFAxdpWz7S8H1KTBaBoTxHhHfDPHofpNMPDyiwFfyEVvQjrNYoiHYzpCukrpvSoXjLBaXY16sXtt8zoNUyc9",
  "key14": "2zBjne1Te1dwpJXWqTmJ9p5kbc2usdTDqX1BTVs9MYmYEGxPpgLw8KH7sMXLqhCdp2R5yi6tULFYC2b3iwziHioo",
  "key15": "5EtxCUtgNnmmERpyoz9A4Ki2Q82kQhZ3aUUERvxqK4VY6xYVzDft128JoohyGxF6bEDS1LSg5W3ejqFqrJeuYifH",
  "key16": "2cDsUfP8sgHkHZ5B3WLCuuY6TBaQqZRhoCvzDv25pkhVDWacCWVwo8jnJec5ristAHufxtZEePNt1eC6A2YLBK4o",
  "key17": "46mBrqM6ub1iH43nhTZYVezGm3kLwGiy3vvybBmjNxSpjv7czUXKX3rsiWFGrtR9sb7ihFiNdq4WkpZUHHd2Lz5J",
  "key18": "5mA9h3Y1rwQUCqfYDinwfewKKGcSsrZEsc6gHsEkwtFTs3RopPLAsFN5aQ3JZCuMx5UR4ynyJN3fDmfwWzuC27Si",
  "key19": "5BTYy7mXVcTsRjpWUpPwWbpSM6X9tpNQ7QdHvDi2jMQdbScws2yasTRUaCW7rG4Zn6PL6g6Wpfpc1XKEvE3p1cC2",
  "key20": "5n3LhwDpF7x72SjEmkrhXsm97yp2ijBi6dvkhruejSK48s97BaXE986NRtDnCBMZN4kpvGPLWUhKuURyPg7ofgYf",
  "key21": "43gy3pJmMhuZB2uypCiuP2aip6GyH4yc9dwQRvrbnR54QjiFgqev8ZPrVXyABGbpmTJgTrsTXohJNJEDUopKi54b",
  "key22": "393EQZfMK1orb2PCGYWwBsQKzTUJMJynn1fp5egsQfhUNEmB6BqGCdVPYruDHsg2Y73FGUZewnRP5uf5fvbmxMoo",
  "key23": "5ZfpSkjpV9d8ZqmmNfRPkZwwjfbRWEJEzgNceqSxbz21N2EP6FMk4Fto5wUeoy1LnmhHJM3LnFtdCCLrvZojDzzS",
  "key24": "3etq9FgrtaBDdKZ4gbKn4Cymnwi39JpBTk4h6Ya15zKk3B4x88L6oZK7SpESd7YbGaA8rk9WMEJksEdyJJtxRFf9",
  "key25": "5ByyQncBX6JoeUHdVBC2BUXSLjnewbuhDTgFehQAbeUpJwxbR5Trgq4NHEDDLVwn9GW8ZV9u1jndnM7UQzAcs2yt",
  "key26": "3AKWHMAR3SXPFFKruCDx9ooCRiH8xVZFuB8kDfKYGcEsSpHvMPpF5AcEx9Sfh6nqhcvAnoGG319W5d7JXnZh15gg",
  "key27": "3KyS2ddsnSZckQsz2rnRi7XeSK64QAFoWaFEYCGYPita7LJtZHJD3DqAMkwDwkRSRvo8PmH8nJFwgYfQ9uoZPvQP",
  "key28": "4FW5GffHELg8p7A4WbjQGmk1UcBiW6n6Uz11YXcuBMra6BcoTpTo2hThMuK74uwuse2FJ1egZqogATbDmsvP8imw",
  "key29": "51LCSu6YS38pZwQQrnUCXLFZDRqLUL8DRJBCGYjKjWrhsmvGtftXwX6Ww7RwrKT6Zb4PV7b1Mcy49CR9b4qmyTLT",
  "key30": "2qZLMTTyvoqe8g6WjpKKgAsKRxVfPKnBbch7WsQboU8PQ5DNnhZXjsQDNyuN7nANq8CCueS4vxrbpYZb48RD4CuR",
  "key31": "4USdFhuuqEr4kNSMNbvVafGodoiDZ1Y3Zpu5zbS5DuQgBsXi3gLUHUsEG889T984f7re6TSWj9qhVxtV6Ev3AAd3",
  "key32": "2YgmG4kEpCVfj3s4WWrrfJVA6uk3uUMTKWKagMb7j39rrD4bMRsomVxNpwtNWiy2r8F9dKoopAfjP46ggRpUndRQ",
  "key33": "5NxF9two9vuu3hwwEJ76Bn6xTaBkUQTNarfpxvGyW29udwwQBdjKN4r69apBNsF8TmRUmFxGUB3jxVAMvW34gTz6"
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

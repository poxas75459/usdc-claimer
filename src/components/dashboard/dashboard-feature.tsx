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
    "58CM7cBnnSUU9WtCCqT7zkcD9aYDFk4WBcaGemRjQSHNkSGftuzjB5NeHkSgm7C4cTnUWHbUWDEb6AWBVmNKLk6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fq6Zm3JPojspTPg1UKL1jffE7YHDrRo5gThjiUuHBjNDaZ9z8oPyMQQmK1sP4HCd15sWzDdwneLgY88tqNPZhbZ",
  "key1": "3yaNnwF49yxvTfTDWutSnpv6buLEZAsPx7LJYqZqtLAFsxCPKJVLf4o2GYudnjF3iupRhDys99gEPonCzcGsyQ3Z",
  "key2": "5xbT5hPv4fM2BiGm83Fwebsgj4Kb5mbbaKoXLHtyw5kr8DW6CizZ6npZM8dCUYWwYTfPUFgHbQDbWjxW2kWU83ey",
  "key3": "5aZSXD6oPBJoZ24UNtZyRBDFSbzL1ZoThofkkT32cEik2nkhZSTqVevrevLpSpK5u2ENCHGmtfPezQDXcQyMjfij",
  "key4": "3596x8VVz99GANapd5qEA5KzGzk6fdq76ECd69tfCzvzzmDVfrgi95tHZVg9eK937XuSfPFcrugm5A2GQZ6pUCyi",
  "key5": "2SAQdJ4KcQUZPnS4vQkEJ5jT8dcTzA4TkjKpsX43KJtxwoUdMK1JjTQJa8QXFmrG4admQ8VB7LEhFRXb5vvG1UwJ",
  "key6": "BxXcQm1hBezZJ14rF48AAR9YJLiqvrpRA5dXWHar8TzSDacTrt3SpvZhy4ygQpc4wYLmaRn8vJDj4rKwzeR2DFS",
  "key7": "2SoPosDioBefNCJY9fmrNw5wXy3CapbyVV5w7AAMQ63DshVyjECmYH9u4QYfRm3JnfzhRmNeAAnZTgpAEFu6r1Uo",
  "key8": "2y8pP87ibToi81eMAANZVx2b2yFv8RpyH8Fe81AjssHbDU2onkh3VHyf5mMnRezy2ysuoJyVoxsxdACWUy8hKEsX",
  "key9": "2rRseUe4vpbM5UhBhj7MdNtjka7Q6B48gtcfvQ1PqhCfcaeA48Td3ss86N7RUUWeR5WXxA7bE33wpXVGtniE6jrN",
  "key10": "5j9UugCHQE18UcfBDiG5xaznXkfSbcFupSJZN8YtTb4aFygbibgESi2Z1jh9VPm5EgKCwsYQFtGNyUu2oLQCJJgi",
  "key11": "2DLxnWK1UeYRDXLrAEEYv4Uhb7MjCajg4BdGyq4VTeRuK9pvsDv8hV3EiscS5mi1tnJCXs3BWe7bXMLBXpeUw2up",
  "key12": "dqixDPaKP7MnEfEx7YgVwWgdPoZAGDqeWWAyNyQDvYXTktBPywHT1JiXPU2DguJHEi4nbLMUp47PZMqHDMfc69H",
  "key13": "3KoUTx442fP5Tco3xt61iTraVzWsSpVhhKse3aPKrJh4qqTBtSgRA1VqruK6kGBkcKC8rGr8ayVK8caCUMj5tomz",
  "key14": "62ad3m1YnX1XGgbJWG82f8nzxVJggcyyP4mP1wR7mzXhbopxFkGD45QDCqcX2eNnKKa77xsu72k6jZ4nVJ5GNUkk",
  "key15": "5PoSrTTYe8NtuY15m345ugLQui5RN5TQQhEyq7j9qLFTrMjCuhTkx23HpYWszxihcuY9PkxNFbADvUp17LM8fBqt",
  "key16": "2VNUGcbzkH5sGjBcBzFsy82QCcCCT6mSepLPd7g1EdVjUrimmMLpkkZbAgcZa6npdddeKsfe4XRhziusmHoof9qS",
  "key17": "61N4Z6CfchnS9ge91NyavtdiLvpimBQG4BbUKfS9fmKYzkniBEc76FxR9cLAqYwicLpnkMeJgXUnqNc5aLRTurhT",
  "key18": "JtiB2umGA1VfYhiuv49GhkGEukKi5uqsuMHQxUTjJpsDeWaBLKVKSGZh2zK99SePcsTabED9YV1XU2p2BSVaggQ",
  "key19": "4XmqGQknUs1p2GW9yZkPw5acLr3zQKaES8WLE1CzWEUgCQhRrQV1qetf918wH8KzYE6ENGqvDExX742Q9AbDJvp6",
  "key20": "4t7GawaoLCX1FfwQ6moQbuSc1AFaRjNMbsqdNJDRmavuu9ArMPKuMQeFWSDxRG6tESyCXMi3xh8oWowuomZG7k9R",
  "key21": "3Jss2F7q9X4vAmf2UJtAFj4y5W94TJ17PHkFMsNrhj1eeT8mCvXWZqaxPTfnueuakvMSj3yjRgCS6JE33ATiNTM5",
  "key22": "22xbT4WXExnqkZ2gxxDNNru2Efi5fn2kvKdKAzKneMnYcVxfWzK3Lkwr7FN37xd3XHjGZwLACBvo3pKvQh2KWB1Y",
  "key23": "5FyiALi5z7JEW1pTuMos3UQCVdFBquxn5b5QsK41rMhrGxGpvEygQQsXhHcYnD5YRXkwtjs72ZwKmaWuVR4SBmtE",
  "key24": "3PQi4DhGJ6mEB7SpGKnMpAqF1XNA5GZf2RxG4yV6JhT5bnCoFWNhzvercFZHxVXVNAjj8PN7dYE7rfu6MR6zuVxj",
  "key25": "3LKTmHQJge929JPvYz5j8PUUTH3csahRHv21JCJUSegB4bTx6if45ZvMpt7MjovzSPXjoH8kP8M76bNeq8r5HSa8",
  "key26": "5C9wqrPWpJTntppBXtrX2ERWVpbdJ2VgRVZHqQzcD1eYop2QzuFe9FfWspMP4J9f5fcBRZQsgS8pyCYA3oTnLDWv",
  "key27": "3S3XsNWAKobRDKqVNPPZYa6mt1C1WudSm5RfeyR6BCr7RC5VLkjzoCsCdJ4AsTEjUTdFjYqEEQyPMf9HAYzV92S4",
  "key28": "3uZRPGkemBDAxEN4W8frNmMfdPvAUNBqDit8pP4Y2ajmUaQ1MNyhC8fDVNQwZ3B5tCF98dK2wKQuyMbcVneeQQnY",
  "key29": "4nY45yM3kC55Y4s5EmHQMbicoExyQnqnDTNgz1erxq9tpXNvpSkCwcUUhre7Ekk5e9pnx15cm6tFeZr84kmFVpsS",
  "key30": "VK1SC9DMqF2b25Bye2B9JpTcpgNxcyr888yCi6Pc9QWkLkvYNTtmhaDDfew2H2N2RWUXrvqupjRxSLBWngE9CoF",
  "key31": "2K9jFFsafWKAUXAUERP6NuRy5XEM3WZSVDgX9L3iGvNUkrtx8Xo4SCX7WmqAady2buCcR2dd2sM29gc7PSgqL92N",
  "key32": "33ovEZRk8ndJ3vqeAmdLZA7zizG68ByvVtZN9cGqKo8vdq6yBzJ6ZVqUqLr7jKasFLhr18TQPzzFpwAthYHaqDd8"
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

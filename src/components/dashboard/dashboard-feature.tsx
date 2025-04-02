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
    "4QkkoJuQSkdBKG9YGTEWoqk66JYLyAnr2KwbPkxF8xGDG5STm6qbUV6gn2gX3GSPZt6GZXXzRMUK8EDeiTAKMe4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sNCj3y7ZLjG1huvEWVBzKPFD7SqhFksfgjEBqCpfzbK3ZZNHYtc7NX9jCaEQ64RqrAkvV2qSxBoQXrtFKb1sYN4",
  "key1": "b1vrXWUg2DgA14WHUSWTCNYM4KkmkCta4tPMgnF76PWrA79tboL2scoSMPBGSu4uRJFMetPSs6RF2MGCNdMMj81",
  "key2": "39MYgXP95V47rDvEpfPVWMEhM46SjLnH67gLHNLMf5G4Z6atkFXyjndcdKbn3dPztdKgPC1iBRi94HPrbw2nb8dU",
  "key3": "3VCBgV4HM39eu8w6B24VAsGa8Md2jjmpYZ2PAs5vJiEfk4mK8rC2SZg7iqYn4ntfm7pztZ6JfYAfc1Bea5QzwXpt",
  "key4": "TWpXyokABSxy281MsqKVaUXKzXgBbViNicbza8dK23oQ3hw6RPk14RgXhxaVUgnmGV42cmFpz6koDhyL4pA1XSU",
  "key5": "5u9jVSWQEmxq5iRZy4EEbbZgtXKiA95Shpzf6Y5NERFLqhnwonS8czSTGvUTy1QsB7o3ifTtmBvdWFsJjGKohi2P",
  "key6": "51pgHiF6DKqdRxStdXZg4rJC66kdKdbocsz7CCdu93QNRGJzPNG6wbowb3GQmNqSDwHEuKfqvaFGEP3t1Z2xTJoh",
  "key7": "yv8acNZz5dezmqbbNo6QgP7uYNEZui6HyM8qqfgNg1AzquiK5VYYPNPb1TtUzUkW4miHFY47baBYJqwCBcwETe7",
  "key8": "2FXbaF84Hun3K6ngygvtCPxUchcfpGcJtPZenqDsfbTrW8UzfdcijWEwHaEbFHWUbnuMQptNX6jpycUGETtHa2hQ",
  "key9": "48bzN7CWMjGd8UipxeUppvhSFZBiJh87pGKJr7LTVZbn7VCTvNcJ6JxuTexLKPwjYuQdczmt9Jqpb3L8kFjVQQiw",
  "key10": "5jcSYsScXxFN5VGVSayLyZD2xbQ12soQUvhZ1FSMNkaLG6VjMwcbgVxWZsMMwwbY4Hx3ZL2cVw9LSeFbK7K3h3A3",
  "key11": "3SSS2G33kEkw7s6n27CcDQd9MyHnvThxHUVikGhYtL66uWEwX8auBS3KNMjbWRcm5Nc2Q2U9fTLRToVmphzAPJod",
  "key12": "4XChtYndfnzyM2aRd4RAkZR5cvRRjjPzTz1dvHFhrYPiNKaE2KGNzeHgTK3D149jaPG7uckLbN7ZJhpnaKusoj1Y",
  "key13": "5dsdtnxyvJE3wRVBcPKxjGxpW3kGPh2MXRNcZhZkML27DeWjEfsQnBcHVLENYgAGwq4fr3rZR7H65oi7472ZsSCZ",
  "key14": "4kwxp7TDwYU3jeihE3FJ6LNFeCefttTsqKBapKqMa47KZpTMQ5QyCb28gD43aSaRoj3wXBd6aocEVu9UstRdJ9t7",
  "key15": "6xbg7SW4X388RnujGVHKT1h7X8wV42NQMkYykcNqBhuGuuXCCtuhcCtGRxFW2nzfTmfNBaHss9GiGsw5Wk5E6Vb",
  "key16": "5Fkk5RXz1wFtMkkDdn6UcQSS8oXRQYA9Rt37T5xB6UoYo8Ehc2EefwvLTHjFgx1Y1QHGNoKg9u6cA1JWz2hmfpuy",
  "key17": "5NEHRgfbMPFeuiBEQ2Lm19EhEjAnaMdd5UUB87TAqd47NA6DRbYj4xCZLoZinKvhCmb2cFLKyGvwHhBHmmYZ8eyX",
  "key18": "4PeWyBY1VgNQRj37DiEtcktKWtw3mvmYdALj6ZuSjwvu7TFQh2Ao5sPFKx6H29aCFrhYwK3mKbg9NBXwiLzh9G2R",
  "key19": "3KksQKWwA6UU7QB1pDrhdqutfhHB5AwSSgkM38jRT7V37wQRq3QwuVayndizU5yBndRWmVBL8mRyTjRaXkbSHmNK",
  "key20": "5SpVe2CZBFh3g83JxLDyayr6BaAGdmmQ1PEo3qm77EP7zy5GosargN7d1CJph84hdJJw2NJsDBUQUeouYh4HooPF",
  "key21": "5sQPKAAy3eQjddprynZg1Efz9GzAjD2E3yUpKcR2CZ92RET3voXgfCctPL7RMQj2fcaMuXbrwGeTfJQNNjqcMkW3",
  "key22": "2vbFfP9sDBoR9vyPAb25WEcR7KZRuGzNx4Uzw3vXUf7EXgtAEHoYhoSYQ8rJ4qXJSCwxYC6z85RqMmhFgX5Ho1aZ",
  "key23": "2TwCfh1C7VahuXW6X4LHThQJMog7moSNkhoguBLxhNK4s7TBa3XAg5cARRALeKc5BrnVTe3MbBNSq8Rcne6jgzas",
  "key24": "3kXG8UY2otddYRKqSRJgzF7W3U5ccbc3p8LE4auqq6T7KVSLDK2BuWH9ygGmNHxmDCR7bHnH5mEnBLwvX3ndfmCb",
  "key25": "4ERQMNF5VJQ6qtig4oSApNnxeiF9WvkJWAa3M58daeYfNSEW1D7M39zdU14gFgt5gG94nx1CwDiHvxY1rnmbfGm9",
  "key26": "2Hn3vvXedTSKgFgb3kE4XrRsXUZSav2ZvrnT5h9va3f7vVNWSEC6AZwzNUnNm16VNnSbggFKPTEtuq6DkkvwQ2ux"
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

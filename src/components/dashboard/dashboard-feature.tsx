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
    "5WDJDDM5t3akqzjxNw3ZRd1xQCjJMmvgz1yLwAh6zNJM8TR2qLUHDPuSDrZBEjp2kedmG5TohmUQmMKv2VDpuSUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foVumtm95s5M5GR3kr3FL8YBThpKn6Hi53UgotWnGRZbmaLV6xfTQfbuQhwafNMkq5iwNgyAgBAkvj4v2mexpdp",
  "key1": "zNm9nJx3LQkNuf3kf1JdAx6A5EHf7ntNqAhYpqGso5YQ6Pc81LhZvFWnpZqgDAcnffQdtcZkdf1vebcytDqoWdm",
  "key2": "abs4935vXPycC7v6M6nWDmUYTWB9RmvymxkQeQEFMqbgTynquRCUS6gWa25ye1SeEpopXxUX2wF7FaGGM4wDwda",
  "key3": "5cqp2JmVxDHuqRf34w9yzKhNaXiWuMtbb5iB5ssKs8gEQwrxxzixExdbKyD1oN4LE5WTpCX6yPjRvPpQcFHhkk3m",
  "key4": "5NaUQykkDKHXzFS34JemdaU7w2fLzYF2BtxA5C2gjmYRNsvWQJsfB3WfFCfZh71P6aHoz2kbjyesx28wmdwFJAuw",
  "key5": "44XTVAjbrKKZbJHgyqgA9b96SqddGG11PJeRTJvLxeyDVXppvT3vo4GNgbEd6ZswaaRqXSSQPPypGdPPHHG7JoEt",
  "key6": "3iPu11FHmnniTiPEKw6xbskqXbQQHgbvYUz2tEUwg3UiE2F7ekyVL5YEpkJ9cpNvc6hts2eaTmcvtrZGLuLG9rLA",
  "key7": "5JgQEHJUypLMtUiBje33ZBfJuvjBS724caTFzrqj41HzdMZiTQXmLiCnZQ4vZ3LCrSgih3CGMm5Sdwyja26bzd5j",
  "key8": "5zAKVSFxqbPaWgfcYKem4G7Gsrst5uEYjqbNcAU4HxAN98fCUozbUoPARwgWCXTbymZY1cKkuvaw2S35kMQsZh4D",
  "key9": "MdWkYCg7iPXndyeuX569JwEAoe3P3QqaskpKViMtCXxeiPqK5vmBkLTMoEiJGAWPqoKMEH1SMiEtjUrmbTQ3m49",
  "key10": "39qQPVPF4LR5Cp9cFLhAUkGu26qNgKDs9bGA8zm7b28tf8P1SBfdArC5mbrJhevyPcSH8Xk5w5CuqfbFkEFmaSxJ",
  "key11": "4zBBUpEh1yxRtsQePAYpAsZ83kd7UGgmUPex3BFjknmu3k6jaqhfBZRohBkavLLcdoFoek97N24A52JPfMwwaesi",
  "key12": "2SpDSLTQvKsU91VU99uckMActbHAYSB1oqpwXyQ9mWL95JhhwoCpahDUdk1tgZqsqmbB3FH5J21fYqeeYfa7diXH",
  "key13": "3aHbwLvCgsgyFUQnv3CqhtUp4dYaqd4wPNeAV8ecX8wiKQg5H9X9xeLQcnRwRQz2guegud2gJimoY4Wj1h8HBbDR",
  "key14": "2QroqgJnVaAhaXqFsKnRy423qR7xYbMbq3pcHvg2KQfWYQPyEz7TNGHHR8SWkJ3ibGKzPb7w8i9MLb21zpBbmgWJ",
  "key15": "3TRVCdQtzmQnFDGyaDZERL93yqWfLiGvEncfMnjZt6MzbDc8VouFXKjF9Sm7qnSFa3aoKgBvP773ZX2MqpfPyapH",
  "key16": "4gutfRtNeehfoAeGYE8BoFSttvhA73LsUkJeC4Ce3fspAh8PG2vnK4rE9Qq3tLeSWz9vgYCkRFWHBCpL6izX9voX",
  "key17": "122LnHo7yKmxkFtfMjgsjr8Q2YYx9N1zD6B7Du5eR4SQHyaCb7NDGGPXBn46W2JNMUjxzyLufJaPaXfBFgfjsj87",
  "key18": "2Ep9WS8brTcQGMQqXcV9d6ZiLDJQ3K1xBZMVboJ4cUgedvZjjZdSowN4oVvzkFto8KLnj5XZE5MMgPVwt2UnpCsf",
  "key19": "5ig3aBFVPgDgvhwvDgmVq8p8k3evgPK3GtPaEKtEqXhd42aHLmsAEjahXnKxSPU9BDxTPecWHcmzmfH2GwQupdtM",
  "key20": "3aHsimWXbN5ixAhTifAKgCJY62wzp7MaqSeNW8XanGr7bBRsJZjs96gn8FRFGzHuD3CT9zJzR7nM1qT1GkSa7AM5",
  "key21": "3YfShpwP8ZXCvcyytF6uR6eDbLsT3X57k9F6KL8cvkWzufKfJK4fR8SzPR2P2jGK7B2E4LQ26VD4SKW9DYiZSBXv",
  "key22": "3ts7fdZJLxqs2my4jnMVF6RCbJ97ikhoXMUo5pQ3J8izHRra2rDnGSXKRA1B5rgF2QRYKJcLQMC5VWxPWYjF3szN",
  "key23": "4wk97pzyevB6C1egAjYSBHon3USWAWkSSmNeggs61RnowTG2Z4cg8BLJLde3HqgDyE5WoeBcntXxwED9k7edBqA9",
  "key24": "4MeNKeC5KCVdcstDKu6KZX8VGxVJLFHpMvjAxwhjf1S1jovcadkNGK5nDHphqMBtWyNdE8Hm82WE1DKJs3Fv9V9r",
  "key25": "5GUTTZ46who3JjJ44A5E8Uqy6pT67RKKMFAosdEXhoCjmpyFTP4FhQbLSZs97deE9muS5QiT2qgBwsVtFe1vjFVH",
  "key26": "5Ut6faRPcQqnjoNmneLw7adVQNV5JAcXj2URHKi9H7eWTSnLF99fmm38LfKyYFX1g4yYkVdaKj6p9s4wwbc5FTCq",
  "key27": "66hcRvzJ5KyRzfPSDwbfFYQhGdXAgL6qvF8apdRypCiwWFX9fa1ekuvCxnTjmSEFDdrCWxzrdBEpc51U2w3kooVZ",
  "key28": "4hQc63pDgUiXueEwjhcv3gQKNRe15FRdpD5dzdWmt6wr5yjoS4SGVtFSDWqoiTWNCahVN1AUdffSgUHKjXfGHGLU"
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

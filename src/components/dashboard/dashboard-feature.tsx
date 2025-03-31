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
    "Ed9yketYCp7AKCEZ2YgbZ54Gq2PWL1ezfEGUpUmXcq8qPWVGcUeVhXJeULtqbzWBYLjCEYBfjZR1qhR3YNkZE2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxQjdkHGn5F4iYFrZHZEUzxeGujoKHhFBCFz5LyyMXhbbrF1x9bu3bxEMCqrrq2e2Dpu1obaMQH9tmxRvWRL7Kn",
  "key1": "63cz8Mr4C6VpoiRfNiF2C1HTLrCrWAvF7BPGZDcMwLTUkFsgAEuqUmfSWPb8N2sGT1abM5iW1erj2CWBNqdsxB9y",
  "key2": "66XEFoGsKjpbMisLfLSwXe6owi1idstQ7RDmR33LEBTzW7ZZwSqS2o5G3LiJXzyWyXMVk6RBzovRbq7LCkjvguuA",
  "key3": "5Dw3aU1kcN5ixtvaNs4U6qN3ssCYk5WwJyP2iGPnMxJek7QX5KBmw4QkzBv7tEJwmWSpssQvit6G7DuLyFrs1kPa",
  "key4": "cVs17gFqLSChn4rFNWxk9ZVpzUiK6Jj7H41DhYxMuFGtdGnDzqRx9AziEBGUZiGWX68FYRcvjBRthUYutEsmeGa",
  "key5": "nQN6izCrDHhEGVMvvbQedmMiwCsw29ADsmEEw9YEBCF1giNM9g2iwmuZvL7KUoVoonyfmgDQvLtg36ewGo87mbo",
  "key6": "4NscYmitUiiB3YuYf7CLniB6KCyS9ompLuSha14eydMoH18Z8j6EkBS9jy83nozfzBJjb7d8PCsAA5betGkgYDqc",
  "key7": "2VgcbXXvRdwYgWVLRC6MVTH87pKWH5tp7TqNESVYdwxadzRGtv88wy5S3Pce52WjptwU7mmLax7XHQuS5XP8gYkz",
  "key8": "4vsoAusR3ktAbAmmSYiYoaYwdnq9CYBtfDNt4XGV3ETmru18mDpUC4Vi1gVqZ1ihA57aVhvdp2NSkKmJTWxwb5zF",
  "key9": "3SKT6GPAepgKKyZgaRVgE9596MUDF22KXZmMjkvti13KuTVmpHdNZvVysJiGxEfmpT7ScQu68DizBdc79UkVcDX1",
  "key10": "49KsmToshfeTEnXG9SmHCoU54VeU6bzCbNDn3SPRe1vj3ahm6A3QPtq7x8ebvzUJB9KKTooDFGTDeojZJYZ3RMQz",
  "key11": "3bdQDdgquLAqw6zBCQxMtgf5PXByoJtxYcQgnTfCghX8ab3s8Nq2qUMaRXvUnYj1pk7tdrHaZKeiopp89LUjsvux",
  "key12": "cRhw38jogVftUTVMi1bo9RAk1SHx6ekXuNRmytGwyFqgt6zFrUShVRWVZaqfaDMwkRfrDYP2avKYN7uGU9UC67q",
  "key13": "3VyUQQN8TRhN9yHZ8C4UQL2XPKtkNRUgx5kUpWxbDMJ93DppK3CQBD9gEQr7Edvzw2DFhVs6EADk3WkmAo5TZ8BC",
  "key14": "21DNvcJGWwbCte4xGNASNmw5pg5CMJJRhyULcupTUxiJBnMv6E9GFGbXfNQCLos6bqmvEmgt1Fnk3zRyrpeaXSh9",
  "key15": "3zNDWeHxQ6jbxasC7dgJf93tGVqoWePi4CpKsimLtUaEhXJ8pzizVDTMnDU17yHXSXowndMpS6Rze5zDf6v7iat6",
  "key16": "28jZc6zVSpRxzYvDWCxbBuHJW2sxSuSeAYPkw2Jvr4h5N5iTbWnWBxAb7JSQwPpxH2qLaBiBR53oPWEfGB6FUubo",
  "key17": "3D9AynWAurhdYZ8DNgMBgkefq8XL1BYR6UHJSKkx8n5nuzWWMFroUHQSTqhpzzw81fwtCpcLLyf89bWWhC2dWiG4",
  "key18": "2eUPhTkizrjm7krAXAJqpzAnUBbtqnkmCexQRaS8gJcMqVS4fQN3q5pQBT1VtVHBF9JkzNCFwTDrLf2AQ2nFZutD",
  "key19": "3ucFhwcmMpEaJLVphuWFgDc1GM3VUwCGexqKmZK7DY9Q8H5wAfjV4Z1CCTNaYSWwx8WpHtEzzZQ8Ew32kXNESqmF",
  "key20": "59fTwPVNXzFGmK5DKhEXyCM5bxerG5nc4A93MFRFZK7fqqGJAPf2izePzeuneykHWWJYNVnetP7RntvVNJb4aM3j",
  "key21": "5L75N9yyMX1ze2y156aDtPCWLX2XzAcaJjPPkE9m3y43nmQc4PBh7g9VWzPmY9S9p6dLsfMHAkUB4JzuFDG8nfPx",
  "key22": "5WQqsoH3DKyStTWF1Xrqio2vqfkSzij7vUM9hfH8QKbJZkeAXHhzkqsV5M8gk1tKCT2efCDJbNhgePVhD89SN6mq",
  "key23": "2SSXDqUaTg6oea3pfBc1yq5ZrXXbmFVJpHyv9otvhmQJ2pK8yeuUJzRszw7DdpaYiXxxq4wVEoNgzkkz8e6PaWiB",
  "key24": "3sjR55bchq2wJJ12T7nM4dzhAJBz1jhbRvVMu6yMW14YsPrxYWpVQZtvT8GJuG1LHffmcQtfspcGDV743RFkP6Nh",
  "key25": "5yhgrfV8ockCJQYQC6nvrgtALnfrzvqG3te7EyX5FfWTCFaBv1Q3hs87a5PzAQzQxsjkfniENeU4Nb3dvkSruuam",
  "key26": "5LaHswR3qAeuBX4t181yJcUidtZoHskgeuYQB1ChnqwbKN1ZX4buTmgAFkVS6QUb119c17YLeTD8Bv8eVVqe7JaD",
  "key27": "3QNh1EmtHehksk5Bmmqx3ZEENviEPf3RgpYqpDPjPF8B7THVCgHHCWN2ZJAwK9K1tpoiSWarW7WFYrpQFw8hpMVb",
  "key28": "3ogB5gWVgCCGtY62tZFrED8YsAXcVvVuoygWqsUUHiBMQFGf5ovViZnKKc2Gs9bUFx9VioMbZUyV685psX4S9ix5",
  "key29": "51WQNXPDEq4zQi5ZsdhPTYC25E2jaAUTvvhDCiJgnHEppAeT4tLJgHfWfZCTzTqkG78y3ViM8VnV9orFiCWaWei6",
  "key30": "46vZy1Y5fudJ8pgqSSVw6qct4KV6iK99uPr6FxHiXgGnxBbavoy1Ys7tt3L7zfM2RYRcJ8GHVgnZNQ8T3S9DACND",
  "key31": "2RKLQf6xf6mbQEWXvXj535GkEP4sKJriYZ84GV3YT6Gftd2yNVnynmRdW84Pw1ynF8Lc8DvnWSCMTtsvEkmBTw7K",
  "key32": "3kZJv6vhEibfuWMp98sR5wDt1fRhQ1ffs8j1yUEZWgsGTAfedy5N59ymsTFGpZLUUz7SRV2qa7nAvrEf68ECbYT2",
  "key33": "47nrJ5HiqaBBjtZ2rzbvZFsRc9Zq1KhxiuyGzNMkD7nUwoaqyPxrV4f2EfjkT7qks2Uk59KSJqSUdJTxMXd9jMU8",
  "key34": "4DfgJCj5yrEhuitz8XRLYQ1pqzNgVKX2QcXSx8f9y4Yjx1ZhBhPeEm788cHUfVxBv8imvsXn1mWd4r8WpfrfxoqF",
  "key35": "4pjLCUr245h3baP2jvXz9KazWh5UXaoSLa2MeeRYnCk4qaFTvZKPggWMzzrq6r862aCQWqDxAxW4uhmULiaqyKG3",
  "key36": "pc4Mdx5L61YppSDnmKWb27iAGmkjnNRHsMrBHfC6rMoxLFFj3URC6ZJAxUTd1Ufqns4jdNwN9Q7anWgeCmSF938",
  "key37": "3gjByBuXTGxy6ToiNVLwuBXQs9TLaFununumAe5K3suny2kEa2FhTtJHqmD9N1QoFW8YuehsHad1mfvAc5sJipsf",
  "key38": "63x6udTcXbghxXYdjYzd5WFPMd4rL4UJjAmLajd2BVcDcdkxCF23XdUbydHqF8EAWxNoMZJGh8cV3Q2bYsTzH8YT",
  "key39": "5z3tKwSgQ3uwb472bTt2kaR6ViE12TWun5MJtXBCY2eZMQatiTU9Lx3hqVsUiux4uJPKbBzE1Tub1mowoJkk8ocQ",
  "key40": "48LQdMpKYnVNxbxmyXyKHwEpa1zyG5VxRw88HUTj7m358frkWhSQX5YAgikb8HesqAHX6EeAQgTRjP1HwnPMw5WR",
  "key41": "2gt4Uo5yqxpNeiSumubHjSWLkHPtx9Z8njnHPaJenNdRt3DE8iD3v6ekhhjDUdr6a4ixwkRkffuKYWeXU3WEQHmg",
  "key42": "3mbdumfToPLBkxBMPoMyBcj5MAkyBwj2wSg9nvn8S5RETbvwBQbqGTd5EwTuipDhzCJkbtYgg4q2CSnenFMT4jsj",
  "key43": "4DHxcn3kQmQjB2DjmJ4qh7QHH3atzPUbzuy7BUizmrakpEpq3S8FCk2cb2jVvATKxPGbrQsEN3sTEJDUYh9rknmH",
  "key44": "5EsAMjepyNTSLzeqGR6VBeQXXDKQRz5ip2fZR8LW9zHuqyAcJSDxxrbqhP2vaxTjZGZR5VEj2fHSYmgiWMQD5s1N"
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

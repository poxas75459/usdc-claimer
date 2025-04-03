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
    "5Mb8ZDKni6Edgh4sVJbNy6q1tZsfk61kqg9HZdXbzBTJqJcGd6jNriTQAqD7svY3M8njHbe9nzwYBG2gp8yM9LAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWowsANwhT2CTi3pJfUujfdWtknvpovggP6ZTfqq9JDR1heRp3nKr1hK4NufRBgQ2fPin6EqtqbcvRhs95LyRMF",
  "key1": "57x5f9f1pdziFVbTixqLTAu7dD8QR5fezxPMAQe81w6ExNe2XKj3vGF7r6W5i2b46fk52wuGDun5oKRB6BM4SaPG",
  "key2": "28o5NhHXQYCCisnmsj1u3fYfGuQqLgQFFUf36kJ6EoXdL49qwgf7Ry2zD3FzrZiGqMxswhYU6np22tqSH3HQyy6w",
  "key3": "4gjM59kWupqLvQHWbyaECr3DvcRfeMhWMiRJYRnBLqaP7SR7zSths6ozevoyjTeGyFi7sn1QCuHz8fgAQc4RsRcY",
  "key4": "gNNfAvy7ptgGXfkmhKQaqzzVCtCHdMEsivCPYQBFM4g76YaQqY52F1uG6R31ki6NrCinCojh4c3QeSyQQUq272P",
  "key5": "23KM2JqLAAvLzX1Q8i8nVf1PrUTAtdq7Yj5ZpMbzSxfxxteHaZwHtorwSbKtjM2hBTLaHEpvP71C2B3YUTbLZaT6",
  "key6": "5a3DrCpLUw4X6fTof4ZcgV3A1by6FNBnHGVNJkMw7iyJGJoCqaCiHZFfisVnZctZ6U5jTLX7S6aanyNXdjRyzr7X",
  "key7": "4x4pvuxLWNYHMH6zynURqtLNPMqFpWuy7QWqpdejuBPtRZfrQjLKpsaXSiiAFyZdno8MMFbb4ShryK8vTfHXnQfQ",
  "key8": "4SbPBfoFed993XRAchNQkXzt88DA3HPbN1BUu95QjEhVYvVtj1inf2SbvPwpNuCv6zFB7Srkun8v4imeXMsYmJqd",
  "key9": "2z25a24ymr7ewXWdpv7v8WesLinupmDNfD5GDDLDVQrcZh4NqK6rKidgApDm1bEemk8i5hkJejS5knwdtW41o4We",
  "key10": "5NBAoQRpFUyv1PAwPrXde8XqVqtTcwfPzgrq9zU9cVkwkDWiMVTGEJnAi5XPr95MHGUseF7jh1pXEkt2kcTuT96M",
  "key11": "2bzZ7dGRt7UTcY5LiP8WHA3gxAoz783pin9mwoecqh8m5RmguYCsTtSuWVqGJsWJ6g4vGsJaFg2ZfnLykg62obM6",
  "key12": "2CWk619dHkL5Td729kxqtiXEzFtAsUq4qGFfN6AVMmGJ1K8k3mioL1N3pcSxTY2aogU2Zo3e8Mmg136WzKFTQqko",
  "key13": "5bZokTREBECYwYBnHX8AYyWFwijQjtBhx2RoDwGQZ1xJaXqPRTvFBgKZZ7LdQMFoDCbMHJKd46dW4PCHJRdR568Z",
  "key14": "BQyJT1Jk69zPtqac5Ub91S3wWVM1yRAiyXAg2dzddnjRubPoXckhagLPXzNFJ6Nf3WZmBKYmfHoYtrQ4vk9ToZh",
  "key15": "pnsSJ3kHqzkYC3zpMuY32V9saP4bdAFdt8zm27Q5scmTGSN6opG4mKgVYaetypUYZuBB1F9XUwJV1Ae2miVruSt",
  "key16": "5cmACDxMVpwDoSgMUMZHZhwfLxHMcSf4QQjLQmgSaorAmf5eKpMwYW9BcwetbkDT4TVanu4wKcbgoyq9zu1dUEmr",
  "key17": "3Yqu35j6Mi9XZe9ZKrGiyBrZjFkLp6dB8PrZKNxmmFob7KjVWQxZChaagnBQHsvfkiz5Cbr3sUCLjrfAzE6uFpWk",
  "key18": "2ewrCm6jEUzx9Fm9186hsHt4qs3Q4rbEQpToKdUshA8zGAkaRSj2VebiwqFtsZ8cyVJnQj86X6kb1c2iTki2hUyp",
  "key19": "5cjejmGt5RCczHKRs6NHzqXjRMBJxLChYVd9kq4RCzJfopoVPQXH6s14j1YBcdWmBerX97EhomDoHN1kvRmGXkQU",
  "key20": "2doN7oE5PExgsHjPwMA8zfXDGpR9DuzWZj2CA3kwX9XmvqLnERMYPU7uzma43bcdjwfyFurrD4RbJdbERVeEpT7r",
  "key21": "4XohYbzZfdRZX2i4pBo1X8AveFvBKspyqVjZ36sSGFs3nW9Hy2EvSRZmyzLoavqEEAts8xWeAbdjLPjQYqL4ZKA7",
  "key22": "2vgNqZwKtZ24TfAP2rJ4Vhna1XnARa3CVNBaSpv4g6vp7HLdVXWqApSqtdTbvbYuBzdqA3e1AkWFFCLxhmHdWpw4",
  "key23": "3PizRyJeeHVMPVpDVv4qR1DxRWn7M8uwcELo9uaxoi66kdS3WJZDNXcpPbJHdWC8BQDh5VALiUCa22GiHswGEKqF",
  "key24": "5sQuJBwn7sneusnWCVs74biCcfyRyurnSXosQpgqfSB84B69Zs4opbqpMQP6DiJpmsdyDGbViHmDQEWeKZBFV6Hj",
  "key25": "2v9F8GBELE6qq6hM8MVs4YqF5Gc9MeThXa1Jdqyp2gyro6SCgRWLG5yyuq1L8tRZk4kg7JZjYXkzXdU1tAPbrDHF",
  "key26": "25ohhxwp1tCtsH7AN3DyuoM1DRxKy9DXPmFCmNvRVqSbTAe9exnTn2wh7Zf5zpA4Tj427wK8bFmwhGThMXf2d2d4",
  "key27": "2Cgou1DjNExTQFakN8WJdonzuNKQPzJs6k4dzpdNHr1JShxqqzEQGmEK9aJZWQ7kkBB1rCX1aT1krXf7v1AdgSVZ",
  "key28": "4EhR7PBudZ9UW7GABBvWyNJLb8mdkuRGMj5fC1q1nrjN4rTQLk9Ys6gXW1yDaH1HH7d6unRjgyUp6gUcEHFykCeE",
  "key29": "5T2ToLSycZTwvSyNcbMYtLYXrxxzSpzvLd656U8yJpewQcWdBbiQ9jgrxb6AiRP4MRu9eTSbEJVJi7Q3WD23i1aJ",
  "key30": "4iWi4YSpfxWXLuY3vx9Z7dpfa2dbjREPxSVcm5CwEj4TargG9VU4ArFPo3EhqJr88zKXmN7JHmj5BHnZCY4xENGW",
  "key31": "5KXQuGmCHRa9Tmhd8RuksJYQK4jUw4E44FeBRAzHhKaFD9U1iH8SGY2dLdR8oEmLETLRQ98dL1HQK1tuTZxefjQh",
  "key32": "494ZWv13Gc9Bi3xiMnWxCh6TujjKcjCEisC4b7JSHyhh3cExRRw3DmAw1nQaLjasghdTcLcLCLtqNWxqGnxMkoUr",
  "key33": "5iPFi7VAD43BhTXWNiiohtXCo5S4u5SGw2sThTjV87Y5mwhGdTBEPWos4v7abHy9ECqJfYvxbp7SKtjsSoMsZcNW",
  "key34": "3hUhs4RsATisJ3x78kkuCio7ppJ5KfDEg5ZHyehCpcLtfYxZstYMYZ8ZfC8AC8YUKprnp5htxKNgK7WRsARaGvS3"
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

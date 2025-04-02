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
    "2yw7QUF71oWZ3wYWVFq67aETciQE1Ex2cpT8Cb4orNfKDEiw59zJCwJ5mZecPfBiWjwJQwatP21d3Y2dLx98xfCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2jUsbjFVf3WVbDyeXLzTh8qexSu8PZVFNRAVDeD82KcccS7KMuEsBZBz79Jk8EBVr4mSvLdjcF4YzWAoWbnCwV",
  "key1": "4Cy13bXPmXDsUdF4FhmWdLiNrLuSyAXGbC6w1gmkuh5M6gmHJ29s8fosN7jPYiVW5oTiHnHZegKvpPM5L8hPcfSD",
  "key2": "4eeTGveVwWypBGHvFnADEfjGMXafCAZihwTWgX8wgFTRWLJCEj2kpuoFBHHrUstpmsdjYCukQCJca1CLeknyzUvR",
  "key3": "34fvExCNWWLDThLuiZnKcXWM5Nkm4pUDCncfBBjMXbWZ1ajf5EsjVd64EtwhpCV6toHFyyvERFPchZPi8zyhs7LN",
  "key4": "2Jga9VxA71fd43AS7RTzH3Dbe69HYDzH2B6NGUjGiVT2uUYFryVWSqQXrfz3CwtAK1Juhx5qgpUujBVvCPuWbEE3",
  "key5": "2JnE3ahZZAP9ExY3yNZGPE7Ug1yyPZ11FgwvoJ2ne8MWXdgDJi769MBquQCgvzbpa6sYoZGLMbdgizamyBoYBp6H",
  "key6": "4Hhx89J9GfDHtMJXUGxNUmrAeMZffXoTQGxJ9ZFMfDW2g11qZfzPVWtdy8xRvAEgECS6pbCvD3zN5sBVUHmSHdPe",
  "key7": "3c7r9J7fQ4dV8CxZL3zKY6py79cpyPTYzcTscFkSfDer5WUm8ZLkDatNfbVjx1uHgcQwEjeAvNWbPEGpSGyBRzEK",
  "key8": "q3CQJd4L16HbiXXZazbYD15RNR4ALVvj5EuZg62fcysw3Myas8usyE8UtR3okimbW5gbuThioDXSVZGzGn7dG3T",
  "key9": "3uNdEK7Y9Nnm3m1Sui2kwmeJQVS29BVM6845qEC7DwBmKbjnf7BNQYKqkM3j5HbVYdfsuR84QdqVEU7iDFrqz3EV",
  "key10": "2wQXfDMRNfgokzBtWMfdnrLTUiT9PRaejMqqH2qhAzcsTSWtqbcRp37TinRGRNwAjUMpxhUPVcJA9hNsauruMgcS",
  "key11": "65ghtHtXg1wfDFg8TqGUtk4bwWFC7xDPaczw5NtmUA5qVYPrScrfXph6dyfDT1ANdJAFP7sSB9tepLsNRUAWo2h9",
  "key12": "3Frn97aD4yvYyfc8p5tYMoM8xtfvp3Zf87QK4FLYzEJV8wgz4ahtFTUDN1GN9CjxwkZ8qbASaDKbkg781njXwUyg",
  "key13": "S6f7CCqTW5p3gZ9vnSSsRv9xqXsPrkqQeuDU4mzR5kBbJrRQEz5Y4wDvn9kfrmgYPPn5aRmQWYsSMtMUhaSrq27",
  "key14": "5YJHsmAkKd7HYagUTSotQSi8rN8rVW2HZQc2Rpn2mH4pE1UnnqLTfV6yRFyfPdEGHAhks3SN7ASYzD9j6xmBDbDC",
  "key15": "5vPX5wcwbF6NNT9zQm7VbQh1LNmaX6jcwjoJbmPJfZKbD41n4qGyousKH3pWuQ5nFktEoYmgP9vHVs7o9mWVk9e",
  "key16": "5wL3fWM7nYa9FUhQ6QvViA6sUifD87Z7keJjVU5h4z5SUeogmeYceA9Uq9Cphjd7fSwuxsU6tjjQXvqrk5q36rka",
  "key17": "ADNGrUjmxuNDkGJ29S2bHBnQyrvRkiVKAPKqkXja5yTLqDw6PkEaR78eWRcqMVsfgE3VUsq9EqwQTCbXhup7dNr",
  "key18": "5DmM8mMwgzR3yx3xTByQJQRprGP9JRCffADwWjcErjsaBhMbNVaiuUm3ozQamGV6KhsuNheyKsDNMZEQ5G35GKT3",
  "key19": "4snSSWyg2ZiWw7QAauu7PZUHXmYKu2xLgwvCjHueQtCakU1zvukeWwH2gk1ttN9ziNheBnJkQPeQhCc1FSce6bsy",
  "key20": "4VvxacvAzSEYrVzNmjUrCsC2nrELKyGsGqBFbzPrsE3KS8QeiyAzgLr7ovkBR6jTo4ZqHnWiqy46kk9mNkc4GvEu",
  "key21": "3TCFoyhjmA3doxigMbVDa1YZrFbuBfcFPnuxo2s6vsBnNjNUxPASj3B9t3FNdpA6DKTCii27nBifrfbTo5tDgFcK",
  "key22": "4MGCF3rX174d54eny6H4qHwV4PzUs3sgtjgSLo3RbABjkF64YmJzL5aPHDqi5K5tkcTCEus8KbEYTgSXgQgksfzv",
  "key23": "MSeEKhs4WNWx1cVwCezvZpk31ngZ7tGuA4FAWdZGk8xZbDtCZqXHVmv3CncPTs7T9asKrKuzEyBmbeWfAvzgASU",
  "key24": "vqBMUuXcjRqZUHbbMp2nRiuJzpAJxbAjM9T52Z4K8TNySbrvHc9oSkTCcEm2mc1afDGerbox25CKYfgoDFxKrs6",
  "key25": "2gAQKAC1aav6bxTh7V13iGCqAfS6CwUowpQQX6C6gkSQ6uYoHYTtjtmjshh9hk7mcAhd81pEWhMG41svQ3fFMayi",
  "key26": "456wLmVDbPa1Mi6TNjvqhrWrQt6HYW9zWodpQprk1P4Ku1Y5xPjcHNevK8YRuUi28NGvRaERsgTWwPuDzX9sqPSb",
  "key27": "2equB6HdANMRz3Gg2v2RmKHBDMpkASjdqD1PceRoKYJHdEYMFLh9hfqnHPNxLvkGywNpHnkU3ehtHdg5k1XKPsyk",
  "key28": "sHW5pnzgyTXH7RXueA5tgRw1kjCrMwDcJR1uFba9mt2BpDjffUBPRkdLS6SiEZLyqmu17Ja1Z38mWZUUHsNkRu1",
  "key29": "3M3pzNbY92yfn24a5bfKdi9edU6w21364hV26sZXyY3HMSQPLuEWk2aXsArUKbNgrrDApCHE7y7pcdVYcGU3F9k1",
  "key30": "56j4si9AntZqfGRWPMAY5DWeU8KVTu18HR4saDcKtCBi5oHx8tGPSmPGBeQ3NNJd7CYsDPCBfvLWCWTq2WdX7gpe",
  "key31": "5Aak6jRCcsuLDD4nQyWvdCFYzACG6CdrZ82sk4VgRNLToqmwyvB5F8oE8mcQJ8QKgJ1TYowBdZCCJ19e9xWZ4wnD",
  "key32": "3r69gMya8zeBaMCzPyGJQmYQkPAcqYjkCxrk1sVApv9oFpbgxLcBggWRA4cVNQVvRbP6D37HPVe84qWNwq1X4Y8r",
  "key33": "5wBXoJ7213L8RdRLk3SuoP12SWLrFcJVnLLe5vkfCqLayd9hAUnkhjUtATp5NYNabk5RGvukv8VAbRHZ7j2xp5zU",
  "key34": "5oDazo42DPmzQNHPYoeH2Yp7iorT8FNmLmt6gpKYkDiq4fu5WAS4FoWwCXbX4trxbu8brDXAaSoonqGdvEQugfwn",
  "key35": "5MCVgtgeyhcCFiySLFhtAzFW5zZTQco8Lv3PAtJCXgAuQnqXP5VyyVUsRqLAztDBdLota3if3jbfHt2d7PuUm8UL",
  "key36": "4KVMZ6cHTp5hzLG98ygVzPQhaHvqG7ggQnPcCFTCUeM6jHWANMRur1sXSTgngAjVPFS3xePntgwbiKEJVvUqCh12",
  "key37": "4WqLB8Ejk6Uv8C6JAr4ntXJTx3g5gBvjR3Hb7ZtY1X3ygFR4tx1UM3WwsjFQCFLr5SsTPAmAyC4yS8Y4NWsxbNEW",
  "key38": "3ZDnFgTL7XHQzBw6cFBzaqavqaNYb1HKBiA8VXwzvRyowv6ES5B3M11t5V5jJ6F3qYkXEf251c92FDfCGiunxFad",
  "key39": "32vqy8d4HRCX5v3y3CDyj167cZRAQNxbtYncyfwNxw48AHgXNDJUikjS8pNWVdgRjnSAxADVpgyaKC9WWV1vPJ5W",
  "key40": "4B5q9nStTNobBi1QpdemSdCLQsMBEJQKjYJa9bD2Byxxnj64y2f3b21ZBDPW4x7gPzieTc7YAKiD8z1PBMek4cku",
  "key41": "6547tx7MnzkoaVbQiYE5RD2PjDA3sTn7LeocT2VeZsjjNHbLCLhdptjBB9kYveQYC8CsLYmjDrKLq3PGx6VX2Rh4",
  "key42": "4vXAuhCxHDjdGFxsysMK9dnSkdmbt5HjRAhzYDfQTtE6yS5Hjnmab1aSCFM2cgyD1TqQGWB9o5vwqH87oEZBqMYf",
  "key43": "2yGN5QLk4QUABUHAg6BJYdLQKFF7TzfrqP7bQGXnxiFHTiVCQruHtkPFW7BEpfCvbE6iLpezxuf5pLFNkVLPtifr",
  "key44": "256mnpFr4VosXRUsDsVgztQ62C3h34UzbG19vo9F4nZL7aUXdTjrSYTbqWFLubZq8mTvPEiEK8kxL7L3TnLbSEqn",
  "key45": "3AX9tjsFCDxUUDutS2SuDt3C42kXcU8hhgkciuKr6tDxyKyWU1TZgsw1ebpYFYtC9N9SDrA1CNKW3ey9hghsovhn"
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

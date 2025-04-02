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
    "2iM5kSFpVNrYSWykqapzxwoVE3nGQZxb8eVoWZCVs8ZjmjuvzDwmf8spLMtcCuLWWs9uQJnyqE58Lfg2oRwV9TEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfwU6ab71FNd67APwsKM7fHG7hoEGoGYp1P9qrrX54cgWs84Ye1CXHzKPyPEMzeHEHxLG3daRavGswQEhSi4e1t",
  "key1": "5b5ioesM91LSkg7Gq6N9urRtamF4fJKetkVgNKs49zpPbAeLwr2MqmhYZmttoyeegcAYVs27zMnV2hBDsrUqEhmB",
  "key2": "4x9KRzabQxbaecozZCLR1BjJuohwrFqxFCPrQg2UeZgPsui7GNyitxo2594Aztmk5Mvyth7famVKajnJYRTpwRj1",
  "key3": "3dhg4W1tEigcu4T1Z4oyPcqLrK5PGfMv8suKJBEFKw8EUcx3ExFMkNogu2LAVourgvJaF8hCwmhkhso7Xs1RQ1t9",
  "key4": "61EyT6FsGxJU5oP937ymSSLafW1gZMmwQrtFD4b3CW4YEYkkDctBfjZdoZv6PWj7Bckq952mAc9hZftp8WiRJLnQ",
  "key5": "67jNifpe4pftDjDpRZuAM7LhdZ7KmXPhfY7p5HaJVctQ8YW96qm2gDDSYS4sszsNxP41AUMEUoxK1WfUKsdRhNn3",
  "key6": "64wu2Exk7k5vi7LFGAsuxYNCY1eeUkx4HxG7K6qZ6hXjDUNFGXnhwKetrqrkmS4cFy2i1zeR2Y5YVCzjXbvbEsrV",
  "key7": "48FR1LWPBcbXrc6sgEsfbkDcVQGprJE3VbeqDa4dmxTNaXbgYtr7DLYMAqxSYdS1JsTsDhQoiu1xkYdt2fwv3Caa",
  "key8": "4NN781y5NFNoVfR7AtVS1K6G66AXTNZcuJfvSHCLhVJH3pDrhgq8fdA6oq2BKPN2U5V4JshFxfzH5DpPP7gjzdqa",
  "key9": "3jM7jxHN1e4BLaqR3B3QKSxyvUkcW2ZRmFVLNaAjCr2xSG74uMsf9x9U68pYpQpFrGBbseZHQLWrNYvuwrb4iiJb",
  "key10": "nXwfXcWbRGqaDJNfNd4iWy2ZmRmrJGD5Nq9e977dmcyTEAtjDsaDhwVwMAtkeSpvxJL8D35nDARN8qc66rER5xC",
  "key11": "4ZT5V3MMwh4vpbjDFTWKUJAkNV3RryJyUftfzugNMZQaBzbJt1FuSFdDc5BJF5eGzimzM4iPCG4qxXw9erLok6PZ",
  "key12": "4Qc5SVbfC6S6GjE8keTymDfZ9aCxgtU49PfZbFwpckiEJG7TE7KwRXfEsUqvQe8UuRh3oic69W5ctmLVZD4QZL9r",
  "key13": "5D6Czuq29xPMDoVbsry341632iY81JnTpTC5ZcBKNfengeRbH8vbeHfJrjXzsUZZ8hpgYqNtBoehv5cCcASUXKZf",
  "key14": "3cXQXDdnahekaBgEvXdTzBok3HfQc4EUrmcfeR89Gha5dnGB1UYb5nBRS5BLP4tpa2ZVBLun2NiG7eu7CjCYsH5U",
  "key15": "42XrZUsppJ4AzmgKvpbU9YNMcUBtBuV2LPbNK9KUp5hDAGqNu24ahkDJXXPg2PENZPzCmKsQa2vvb192Xr636kio",
  "key16": "3dZW7kwhuFEdDiNWggYF4D2nbRsG4R93aSSYmHRrt3wxtquNeh38oCzgb8pRepFaL2Fk6mJNgGnNqyCXkwhMo4AF",
  "key17": "45y2yPmTmczenGSDq4Vuy9xpEoR1uP88zqHfogRestHfPRknYwr3dPZGDeCji8rAC86cw18rX3AuwHuf7nWkGnKX",
  "key18": "274PowFPZ5nnwkVd9e9x92StWzptqf1jKfuQZ18izTHUkCQdssEAE3tyDyGeEMSSVYDakbkGar6dWoniWXUx8WJe",
  "key19": "4BvNjqqxLDszRGZHRzr6uSxaooLMmJ4FiK6ZhtcfCuRWrguDnWpTgCb5WTwLBdXSXvbQ98H7Y98m5Xafp8NDnG94",
  "key20": "3DafJ8hxJ83hPrvGjsSCtgMt7LMbyrr23G9FBZ7amrguFajwskzcXgbwSqd2BREJYzBzkGLdAZJej31gQbBwN5Hu",
  "key21": "2hT7m22q31KofdXgBpdGSQwRCj9gALDq5q3HMMcTWAjayUrYHkbpHukWrvMaSpSLMcVVv2VXfTE7koBxWcgBryi2",
  "key22": "5Sx9XF8XZjHPfCZaqZnev1vsjqURs6G8Sbhp1VNuGLUn9H4kMvQTea9jDeg77PrLYgGiJcnKdBVqdHKNs9yDdp6d",
  "key23": "TSkC6qr29KedfQ9wSVxVbdAZozUjYAu86xLe5CreGTGJbCVjs32xo9Ev1hSXLz8bbWSXgNo29m5gUkjrpzvGJAa",
  "key24": "4xuen5u9EAukcWGjyQ5c14gX6KowwmWeGiwQxkjwJnHoPbDyiGxGkKSoFZebeF4wb9J9KmSuRpx8uHWyWRfwnKEJ",
  "key25": "xZmUqxR8Gxjd6qCxfpMtzAkfMAphUU4dx471n2AgQLTiRCiLPAnQSvftNmo3Bj7nqLmLZnRhHQiiWsKTXYuwtFF",
  "key26": "3kJXC4WRJ8ipVD3jp65z8XxEbEceyUhew3CskbyJTze75TzrEySNCxK8QMztSq7CAWu6SM4aXkzqisJspVaQsvCx",
  "key27": "4CbzkZYogzVULhx1b2JHaMa35HtRttcXziVLZKfaodYCH6RgLB6jUSE1PDQVBd4sQZ55EYwXbJBdM5z6r6Q8e4Q",
  "key28": "3VigXoABZxmZVC7ib7yE5AYgkd361Rw6tVLrmNrD3EQEJPY8yvGkLfw1oRdLWzX1CCZ1YcZPcd3NYEomTyCYmQAB",
  "key29": "2yNMSjJfGTdqsLeiqMq2PTWrriCaDf19b68qQtBJdUmWJbjG167Mi81XVjo7pJ62FCBk7LtMaoTy6huufWhQeWyq",
  "key30": "4KrFTaZFi5nWEUJatd4KuGBsWmLgsAbmvteCrBSpxsrr3GNFkWdj7SnRaSkdFaoMt4WWji37byLCdhipXNAZWFAg",
  "key31": "4acFP2Mx8QibQXKQGv2o354r3uL1W6sPgzaQfqsKRXTC7uocmAM9qQ7MdHsV2fcKW5dTLPSqkZ1vuh1hgR3D8x9v",
  "key32": "4VBhaEmjvHWnUjnwVZyag3Q3HsoyC214idQgTPchbH6arfZPNNVh5d6fHmGqt7P81BK5mzTV3Nkwjcn1Qbojy3y6",
  "key33": "4pFL3MYUyEuFYJ47CX1gan9JmmubxKpijXQueHjx9uV7CMvkAUo4CXMzS3RnB8LgcKe2nbpwp6kFtSZ5gkn5pEzM",
  "key34": "3WCaRqLJiNq8Nj5cLUwtiWJChT3pPN6gXQD7Z83QPQ7KD2drqcfvS2sxNKMxdEHBnPJbJjUxmcRNkdney93M1us7",
  "key35": "5yFhCzNYsE5SfgyqbtHx8sETGm5P6prDQhwUtvJsPFnCG4fx3P9xvMT2Zi1T2Evrzmmw3GekrLakDcgPcUdemdnY",
  "key36": "4ELfFo3uxFNE4nJvnfC2nQU7RZn53xbg78TfkGTPRZGQtvzWAhbjPTTDG5m4XwxRdX3ycGnVuCSADRTD7XVgXuZq",
  "key37": "cAas9sucAtuhK7FrYuyxtVLHiCoqTM9fRxY8g5hat5vCB7viZ9GW2NGQhmjrPyX3PVqQuyFEi4iSn1Zdf5TaLkp",
  "key38": "38HoLM5Vq2UkAZspXeMEsCPgCR1jxi4ph9wFGS2YQq41GHZH1Kp5uAJCfK6VjAzAGJBcAzCAyCPnPzj2EDwT7wrT"
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

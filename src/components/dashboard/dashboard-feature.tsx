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
    "6xrtJ39PgjdsMV98226PdGr3Qpr6QL9k4PdLLyEex9f1xCsxWqPJnzAK6dyjaQtxyxN1f8MaqgCyp63p6hoAEWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DjCY8nMtYYiBpeVsRsJspNqrsf63D4FkEEupF9gRQ7G9YmAF7wENx3wNuzX9g7YNTPn4kAf8YhTHmHGv5BS8Ppa",
  "key1": "3KHeH9tB5c6h6yEynWwmSZbxehyLLpiUDvRThye2i6vkprfsKSa44jFYpb7cVXQ59Uxj66QZHKZgrChqKHfXYXeA",
  "key2": "3GEFdHTZSmaUcsgWEJULRpPTvWtrPeNMFadhZtNfFaKjfFpwwAyS3cPPB4e9iia5Z4HZcC6UMN9orvzNBML8BGnn",
  "key3": "2nr6E5wsUwwG8rVZCLKqMQj32zPzpjLrGSyPs2CZNqnYqeVuMzYz4EVoxZpfE8TMrLXJrJuCrJUCbWr2PooHHFYv",
  "key4": "3nPUanDh5SSByfqyhBsuAovqLz3PYYsYRpC5kPexkjcNZ66Nbxvx7wwgEUVhCwsvyotW1Zi5oiRLc6iNttc3tSAS",
  "key5": "3ekdNQGvmzBQJm8eBrPVP9T3nh9daMRm6QSqBHJLqQbN4HNcg2qXxjxu2doAM1i8mifVTLCDq17ep9RJHTv8PkHQ",
  "key6": "57rVrSknQSL4aquDSu5CZhBPgBh4jirsHQ9BgDeNmgWv7VGxHCcWf5SuYbLSyFQSfLWNKkxcQYvZjd9GAqJKe3jx",
  "key7": "3E5u9dsherqqMN5TuW7TkHhBmvN1sn43e5kxSiLujtEDFDhpQQXBE4EbQfxQeC2hFGqnqmJ2RUZbPH2R35TaCjZs",
  "key8": "nHFhjmFfkMtgrn35CLUM4vsqHvbKNYw5W7Vsotv2m5zG4sCDVoCn1VQyv7Cs7gtPxedoh6FR6QCgb8GrStb9Zpj",
  "key9": "4mkzPXMUJfuwvAJVAWgQpfyQZ5Y3k58sAteZwHyNzARMtgja7QWhJQpMqLuCWTaaRj1BwHwHTQEMQhitG2WNL9cs",
  "key10": "3NoE6ZdENEnraBHBUYvEdk8Y7MLD6ThQAvjNFkFjD8CNd7Z81wiG9NyArZn6t9VH8wea8ShSGiyHedN6Vb1CFeaM",
  "key11": "22NacYgodqJkFJe1hHWBLmWRUwfvjS9Ggbmgay1AdNuF9YafiuVJkb3tBd4uvMYqf3TdyMh1WHq1QoWFVEmvLKJt",
  "key12": "2S9uZXYChqwTBZoK8vze2jTAyj25NUrQZgnYB8pCotNn8N5f3xCFzNmxXSyHaqVfEyEF7EcgjiQn7zMpYd2Vao5S",
  "key13": "4C9J5TsjpPZYtbM37tyqePboQf5fm88t1F32gogszmRmxtGmmbyVP9FywFgYHrVcVjaWG6KFCxUv8Dt9oxtKzY56",
  "key14": "5yxMRExkWNF5LrTHEbKid3dreBAUqw3Qw1en7jHbq5ezKq8u1nU1bGJMh6NVq7Kkd9VC7ZcBeZ321X3Buq2KD1G1",
  "key15": "2dhpNZparhFVkwrKQx7bjwWCXdBhnR9ThLommh3skF2V48oxuvPQRHjhHGn4XL4bAJygrZugAnG9yWWQDwRZ28Lt",
  "key16": "4Dqyr7FfPXaq9Hu6m47JXmASktTnsow3p5E39Fm8VYKrivgMBafAY6YG78RD6SKah4QuEAAe9FyBprBTzskCMNtt",
  "key17": "4gJWPJgUtSLJsu6xSqbJNkMxitFjZmCjjMH93Q2J3CC2ZqiZonTxmTouVj4kM4Ep5jHhMwWQtyVcK3NSM4zyqRaB",
  "key18": "bDujrRmBTUc48YpzgapV864bf3c9iw5en245jiSpsyWVuTLZoJsh2ZRPibwgDmJfAHamYJNJGiM1EAjZ5a4GrjJ",
  "key19": "naCoWHLqScvfawnnVWQDVJC3RyxPNBonzoVu3eqFr4AF3XQD2xJNW8M99jdN6oe6FhYuRMuhMRgyUukPyYpdo16",
  "key20": "2YfPjqisTsLBS2RmAAMjMG6hF77nJ7BXPfU3NWLxUggKi18xev3vzw294fmuGSFtQWe4Cfn1b4HfJRwV6E5GZkrm",
  "key21": "zZMu3j686N7dHxz3bWkaJED5UZ2ErvvZGKDdasH1vEUi7c3MR8pZ1WFrPRs5KZyqbo2ZFJ7kKtZYrCmoyyYoM29",
  "key22": "4deq4NpoM164N7Gwme6B4TDFneBWjpfMVYuyhXuWfTwDRbHPTGJrREFYdBYwoGBMjN7pNzduC9SbmoVwwRNB5j2R",
  "key23": "LMXKs1BxJDabm5M2bxVUZ2LigMqupcTJDNWTj8KsxC1aTfCg8FvDCuGkxUuoWmv6kQrzJPSNhWBXDJoB1c8VzzX",
  "key24": "4zWi1265JoHZMGxi1W9XfxrXd5ozENkBcVKtJx99EZhrXYuF7dQAqLDG7hNTHk5vj6kib3TmdkFCuKWnpKnJExtC",
  "key25": "5sz8jfbSV6YvMW7zyuWPQZdE5m1DvJWq5Bhyu9Qa37EaKjNLLTXk7tG7LtgXihSGA5Y1UhLdDLVh9XmVWkPmGqHs",
  "key26": "2LVpmh7V18Zy4yYNJWhSnqdsLSgRpGUrgzYkesmqzVrqQAVHTQQJKM8aphhMrdhC7wWELs9LmNtkzyYBoR9g3BWk",
  "key27": "583XMd2i73PZxoCtboutbWbaNSEuEy845ZnbGLuqoq5FE54m7wVv6fnu45Ke4ncWvgwfkJfLbrEUjLDxEKiLZfu9",
  "key28": "eiN285qZCWpuui7nKhErZBbRGQ4ZQ67ssr4uTK7WSMoZZgBUyyVkGV2uf6HfN3S3gQWKjPeRW7DsWHBvczEg5QP",
  "key29": "3hp2p1GAmdvRwKDHxLm3sAAexkLrpatGgXRwXk5aBPRhPxEsGLXhwG9STeWEsDTFa1FCxAbuAWTn3GjX4dNTgLMy",
  "key30": "63cE2kwUxZMYj396pS8AVh5WeSadxUKCD74mfjyxWR8JkLbT3jaWb4MvzCmrWnN19ye4oMPx7ys8dWUXajVoAz7x",
  "key31": "5PQ6mY6u3HfcR3Qnc3v1b8WQV2k6L69Zyd3wYenP8MVPmMCEo1VZyfheR358YGR6m5NKHuiBuxiMxkHq88ubQYii",
  "key32": "4qhSQczRXHQyi4GikZvqW5KhLMrM5j2PsomEmSw7YETdhhnn92U1bmHdM8eQxqVWk3rMrFLYeUrB5GtNjHPxYUQq",
  "key33": "4MMvCtmehaLHznnqGBnHs88dHqAzcKq81ufi4CdkdvKgNYpEztwjKCBnrXnh2vqGSFgCtduxsUswoNLZKh8FrRqs",
  "key34": "3QK8pHK86tdgf2X43q15G852QrwMGsWsQ4uYt4C2HFVfBBiGTtERa9nVoqYgq35g5ywK4X9C5GH3iHgKxA4dYk1R",
  "key35": "2c7EFq5FDj7SH8hpxt1FfbYpQhpW8j4nM98w4jRUr4RFaoLmeKU6pQh7KSYvdc9o2b3UezN1yu3TiHNvAtGz5Jej",
  "key36": "5BZdxAeatCCxAGLtWWsv5XD76RNnNVRVKXaVPnvymyRSK5ZAXAJjdvJrb5GSKjsBNXGfwbYp7jupyscJJ1VrrApP",
  "key37": "5ZYFR671jgzFL8SvRjR22aC9c4bFURxtXr7xafgFCDrQc3P5YZKzVm6y5GAbGP3BJur4ifZPLRpFi4omxe2oRxao",
  "key38": "2voZ5W8KiEkdfCf3tJQ3381UN6JvmrCqVzm5e1SwLNzeMLWJg15dzHPmc8eBr77YCKtUXqxrRPczFMdicapZdoXo",
  "key39": "LdSVZQRCzmsvdBqubEca39QtzJq67nEjFofoLwgAhqJY34oDFpiDZg6sUNCZ1KoWEbJULc54CrnJGxrB1X8gd2B",
  "key40": "rfnatUXmt2RBRBt8pd4Vn8RTMaphnfbeoMxo1LSiRxTUkYjm87V89ijMyQLDyMHtS241otkMPtbiRRhtC8KKZjU"
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

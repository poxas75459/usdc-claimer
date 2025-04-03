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
    "2R5s6CQQ1DkuXm29Siqf3dpx88rddiZVYebg28xaeJJPMb8Sb5RTeSgc5WhTEpdQv1wS6k4aNiUFc5UMBwrvPnXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrqC5413fVXGZjBxU8h6wXswkzMsRB7vFmm7fpHb2FZUD14Cv5HmRuyZWXoEzJRS7SXLDSQDdXJqqbJfchdAThe",
  "key1": "xwKypWrbd8BeRFQTcryGW8FL6kURZU5qT3mrbfyz7xPwZUZsCJKKq4Dn1bbKSKtWBKT86fr9xER2tGM39RvNLGH",
  "key2": "5xPDAvHERypmHu1MU3xN48VJiqrNkzdSRd92j3uuyJ11NkEXAPon5HoJ6bmxubuPhLcdJDdDcNTo5GqgrTKozTL8",
  "key3": "3zZBdZ3HaLxK1ayzFeDyEYFT2FZg729ccxB5hGWPWjo8ze8Bk2iGegBrM7gnJByGHJN3w1SbDpR6aWM3Rt2KsHRE",
  "key4": "KXLzStj8DkzpGfHvTJZrbGoQNA3ZMmUoSq6VZsjy9UoswdeMDp5Z4t7AFQ2NVXYBBp4ND7DAwYc9cPRRDmjhoVU",
  "key5": "2XGfp33hLGKac7Bo8ra4yuDNTnErTKBxfhm1QhZxUbqAS9ZpMsGZYsWvHfmpxtKSZx3ArkvVJ3izcwthYH7PaXMX",
  "key6": "3BsUQF5i7E8LkDab8d5VpWW5djGvWBCAXrbkmfgwU4y6xCBipBVmE5TBxZYJbQg3PB45XThbRYV7V8D6rtZUTJpZ",
  "key7": "3h1hRcyeZ4g4fbMa4AAwreJB2h5maLTkX9BtQBNLn9Q68h1gEB2RQ8KbU82ARGCYJ39UCnj6XvLSiqovGfo6yKgZ",
  "key8": "3V6E2vqK7HuZgqoStwWpCDSpt68udxyubdErNekiWJ9fLNnKYF54QWk2vUoJMFJEvVuQSHZc9Y3m39v5r5tDDmpp",
  "key9": "5pbP1uFfLNmhu9Z5yWmx6evX4wRFVaKGR1PgxwpgrGwL81hqcqffaM3KLxPQXbbv1TVhBAJ9oAqXjc6mhybNgfaf",
  "key10": "57d4oq91zZW8rXS75An2S9R9WXtKC29C2ybdoKxa3urAPh3n2BXEnztcUM1aQrHDDdBT8QpS6QGTZd6bGBMeGygJ",
  "key11": "UcCA1V8Xt1ZtvF9EBXDE37breTE6HrPrh4HPqpPe3WjdKC6E272VK9RWx9Hjy3iqb3NpiL42uXDSzTFEFpabBeL",
  "key12": "4o4RzRnFGQR1PJkFD1vnK2icpBW2K4E5BfcHhXpMhMkpP4ETGuZtxRE1cgvgSTaj4Byd7Qjh9bpKkMk79XsXwkDs",
  "key13": "3S9Jb25cRqv4X8SZLMMAdZoxgSus7YqEPGq6tUiCS5a85Uqd36wH2Gpotmkwdq1R4oYEv8KkKDLYqVsSkRa4eaMR",
  "key14": "5oXyyrc4NaD1ujCa1nWX2bjP9X8gJEnbF96yt9GnPWJYWUFaEXVcRT8Nf5JzSC5RmHcHoExxaHjgPe6ep8eUSTgK",
  "key15": "35Zzi2a8rutGS3Xp2suZ1ctBAUTBYSLuHAR5EFL8mZNkyP8gKj3wkiTgnGFTZ6q6QNJyKTQKVt43HgxhdCAeFTAg",
  "key16": "FbBWKD6Trf3GmNFdJiDsSt6WTt3oQhuUScMhFVVkpKnxj1cak9gN9M8pjzqN6zL3emDVeuyxCpCnEEJgG78arrP",
  "key17": "2xdhov5Lph3ttxEx5Q5qxvmSDeLMyeyTAqYUdPznc8Gk4TzdUtTU9dXC2ekbaxFPi5omJdzaPZELp5feqoEFG9o4",
  "key18": "2UgqBizS5WhCRqf6WpFTLjPCS528pj33Yf2uzQ7XWRtnhd3YhqK3TcZ5nJf8gdF57gx8pSeFqWQ9woRjFscskqHb",
  "key19": "xc4DXcSHoEYLe4WGqJfYakbmU7uSvmDfFtTwEM7jsH58AF9Fh3EMobMn9wPcCn3uBF2eoMW1mwTj9jY4FRtCvRM",
  "key20": "3hUa6ZSLoQFbhb5zYdrt9KYjz8b7UkA22WMrVA3EtKSmMYHRu3azm6vyppt25Yg8wp8qyLFtkQLcBxiKVzqZS38h",
  "key21": "3sd7L6b4xBz19H3U8FoAk2iM2mwd7W42J4uCHTDrhp5v7hTitJc2pkWLSWRRL8GPUcjhkW1y5KyZCTuYAaVgMSR",
  "key22": "4JxHaWRNDCFwKHLj4VAVb4vHJcCE6UUF4323s8wEeGRBbdJbUDDApXMYf5kGBnwHUsorX6L2vsR8YufdjiSjc61u",
  "key23": "4YJU7eYpNiYa8Zovem6BixHQAPS31x4YpNm626Cj1cPZjbgs5bTNajnaQxS7sYvivAKNHhMbxo3zdcmQ4vPBroXF",
  "key24": "384xt6ecpvn2SCosGP16Q7CocgQfQeouCKiX1xH6seE9Ap22RpXJq7ZbRoVvXUdzEh84aDeGVnZQaD2woqMoE9cj",
  "key25": "3e5UD9Ff3EMqfjioAJYycNxZR7ZsKXhgAxGeLDqHLR63uNHtSLnK5NgWkz7vegFnBvHZ9RKGBEJES3a1DHnqMgD4",
  "key26": "M7gTDfKXbhTT6eH9oXCDLTu86CjmQ4G1j91HPMXqDtCzh6HciCfLKLWkev8ji4MBFt2HmPz4Gu4n4XBjeNjKoDa",
  "key27": "3f7pZcLDwMJ8GSbtPeeStRuHUxDMefHh8FqFh4bb6kURCnPBramy2LaeCvxioDNAY7zToeiSGfec8yeWbb7DAARJ",
  "key28": "3TEQyoM6zbVXE49161u8Zxsad37aPRMzZUtLfc8QuRCZbAGAdqLc3QamFqC1VSWM8UYPXTnG4X61gVi56s11jFhT",
  "key29": "35UZN6gubouwr3uMJv5fscZmP3PrHEzqsgKQtftiD5e8LvwEqswaHNVnG2du83SKn5qWr4EUr1bizSz9bzXiZZa6",
  "key30": "312g8FHSLWW9FjhcKDQKgXNUrPSQEjgZNqhGP7QF1YFRMVxxH7dvZWZCcH4CNwZwZSh6c2KVXBC4rZSNoyPzCerr",
  "key31": "aUbyPt81ukPEhPiV7LPJH4cftsWnLd1MRwpoJ2N7VT49ZB2MxyXMUky8sH7dUcFgTpfRBsgamQY46murZRvtjJk",
  "key32": "D3HAQHMQRgaA2jYwRvAogTQBqVYFGDDwCbgezKPzR5PeXFbta85p4dbDYJaE41ppsoHSU5FEdLMvnGFchFmj7Gz",
  "key33": "59b1nXHh5FcUbF3asBL23QRW6fmFwrw6ahkJh7HP4p3XGTSyg9htFhgsuxo2ZrtkuMny53VW3sC9E3nnotwSPyJ6",
  "key34": "2C9UYjLFs7uHBTotQ3hNiDYgQzPzk4SSDYZmZJzT5pPFGEWCs51ajwtdJBxTQnyy9cHEGfCdSKmFD5Z3G6KPrX2g",
  "key35": "5WSMWoqaKkfYDXWm1u3MFjB5cYkqfEP6NvTyHZZR1vZeYi1WHT6NHgojAmrqzjpJf1ZmjCREZdbCj4y4AhwGbQGS",
  "key36": "5asKSiFctc6QauJu4oHykMPEXocJDEL2DJTqDvA3LQd1UFU1PFSbbgbR9S3ivzYgNxdwQLLXNR4cVTW2Bqzr4F4s",
  "key37": "2jgYFvmffkjX12N2Vvy7bte4uvw5zLt1V142j6Bb1rqto8wvFxErGa1PDvMv6GEBkTbPVHmc6AHrDuwQc7ZikPdd",
  "key38": "mgfHkC55oDBBDRXBHUmcqLNvrLt8Ns6yYj1Uk4G3quDQRAyaUWanSMFDSadV7KY9P5gMbVUsMYyo7CfUW9EnEVQ",
  "key39": "3sHJML6zHjiJEY2Nqv9CW5HjdV7WW8vYNyrhPAfhE3CJrnTx1JzAMAvtfKpois3WnFi1RcjHPMR9SZ9wZdp1ZoQE"
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

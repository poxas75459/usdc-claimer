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
    "2Kga8W7uFM7ej9zW65e8FcuA3qZNFWHHDMRDtCswtoLyASQbwg7LfAqdLx6iJZbAcmWh44U43saqB58735kR8Uf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzwkCsqQQeS4LUyLdJLD92zekCgxLPZR3riCmioNXh4vWw7aXtkTfo4jXEqWf8cw58DWw5N4aen2huHdBBu2r8D",
  "key1": "fusLXbsLX6ZVqch1o1WFm3nYdUrbozDoWNxbdKtbHspxiLf8N376KfdwtCJCqieL1qEmzNDWZhMa8TB1NfpiMcU",
  "key2": "3NRgspGMzrVJH2AQNutrzVHGSYbqxdJd5KEC524hL994URzokzp5sRMQ5KYo75XhYPT1xF5CaPqaaKGNxJ9uj91N",
  "key3": "2817dG78GWQtsTaXXZ3r5pnzPkJcp4GRmKqT6eGbDVYYKN29TqS5RkyV7ejVGwLJppbYpTPQgQJrTF42NrtA2mhR",
  "key4": "4F9xK3KVeNZmUNhH1XENSc4A6JUHSuQAFXVXiNUD2oN9Dznvqw4GvttH8xrGhhStkk7kv5TZxTuBcVYNfvoAjtYh",
  "key5": "FouQ52iFwsFJb11LHdcW7gW6LfhdEZuuvKPHtS3FrEmvN3LdCeLjmHAuRSkRhmaozmvcQBRsPCjLi5ckNE6SoLs",
  "key6": "1j6nJ4VtdTHMicVyakYzzKR6UEGMR8GgtzomK8pBsnZfSb5Rykq8eQFN3Z86SZV6n6Xv1gvU7Pf8Cx6Ba7Z5XfB",
  "key7": "3t97pjMyJpoJmVLADDqZXEToCN9eEK5XncQNVUYJw4VM8nudAgPnW3tYfGHUtufaENzGYa31YJjxH13DWCv47jEj",
  "key8": "53NE1AmGJdgj8hQQtVaFkT65VYcWQ44wjS9u5wW9S12M3GD6EnJoMGZUbit1QcGHbeEJdGkMY4xTWR8fixrSJRrK",
  "key9": "2rQDbjWBpqzW2sHFBgngzCsyb42AReqb7NPD3NMzsgtHZPBQkRHwUUSZKxkhbFxLbL2vB6VrtaffNQPaQk6CXioF",
  "key10": "24N3Cumi6s2GjvZ1w9KEHubA6J59JBG6uKir4TQg7aD3rB3eGQsfHuwYVhe5iGFSa1vrsNMCP1FSbko3xkTNrHmx",
  "key11": "4bEVDXgAgDsz7675vNdcsz8nLV3Ad8eK45JZdXfKbw6GhsZFQDVfo6fCkU189mBBy4CUyZj99zkZtJeKHRhcQENT",
  "key12": "3EbB5oRhbR9cxxxMfvFDYHQZP2VuZbcrzr3LcXbSzRGciZe88H45fkCe6wwLdKXKrHaq1okVTEzoi9pz9PrWXCza",
  "key13": "4AdU1t7LZWdZiqi3Y5j5DVpUPx4ATARHEhn3MXRUAZ1nCpLsLmCjPJLupsq88eDGRjMnJSJBhZ1JzuRpHNyPCqNn",
  "key14": "4fnpKPp1FgMvRpNN9i4emZgkkP2pcWotDv7pnitb7GJ8dwfYpBxLJgR8Vji6AKXHGVjLLprtKH39ys6qQxHAfgi1",
  "key15": "64HuxdqxNpQ5QsnpU7PaX7scFTDXF4C1FPdLqg8vJjqU5Y9c2DmmyjvoPhbJ4CEaYAWbcbdPymYyD1Kxugm8ikE6",
  "key16": "5EPkPV4wSNpF7b4BvcnPfyti3cRXL4qHeE7k3dTuNxihodZorp9QBDigwtMW9251FNBKV7x3uCKnz8bQ12PJ5MCh",
  "key17": "2oXZkDJC1rXBWv8p191WTwXCzGh1pXkh7qr3knTa7uCdkSN7p42zkEY4MnJrJL6CaTC6wH634Z2WfHAWextEPaDU",
  "key18": "2fWUimWbawb4SSinCwSA1DgkDTqw6aa4QPzCFPLQhC6QQBy23y2iDcuWf9Wawiyaz4EJuktYucJQTzaLEErGNTJs",
  "key19": "4ZptkBkwD2mNyK4dswNnjPUARtRaWtTLaSmP6oKWYw7soPB9eyA5wih7SWKTDKgHaPVoyKE6DSycq42hiayZJueF",
  "key20": "66fj9nbNvWxbjVPsw6jvgM2ZJaAQQ5W7PyeTgCcuCVbjykRsY1LpBDzFTQtLWFUjk4AFyuui3bHZqJdq7yJnDPcG",
  "key21": "3vT3dF8FyrFGpVSSoNHarbGS1D2cftQff1s25pKbgVDTmzPk2BGdRRkjywoFucHhmjzKGgsRW8XzbvhwmDcb8DCU",
  "key22": "3p1sXGzr9Cwkan7vLf5HejBAgBwCtUeXngiZ6TmSSmmWNQ3DWassxLunZa884TQtbqQQSc5ZahpegD7LvXQK2vUr",
  "key23": "2s74sXmdR5kVUu9fMF6u4LhvNPP9JeJxeyMFH2rcktpkaqUapojjks7YRtfbG791N4dpPZXUePQEmWSqAQKvkV1z",
  "key24": "3ZKb9h8eyBVMHk246c9etK5cXbeQc26B5ofHNnf7DNZqkMDUtjtctpS2UPCWW6HPvKeYsbvJ8X8mLXR3y2sEWoMm",
  "key25": "v3tDkrMkubbmbn37Ddv5tETxgq1sjHAGTWDSWixh3x466mjiqubfmTTaeAxAwLLy2zD32jsGZ2K6h17RJJ82rUV",
  "key26": "3ionN4CmKGAhwSbqRMSf2JfB8TqUKR5LjnCey46CoyGeM4hT9wq7PLCbGezTcFSxNd9VaCHRuXqq7xfXjnXMDsu3",
  "key27": "rpsrnVCScYYM4LxfENNkj4xCEmiS3poGofSBXQZwva2tJVyqHKdCHVsXavppEfg9zCKf6GnpwmJRUncYRNR6Q7U",
  "key28": "5Zj6QoitrYenU5mwKUJvSCpzx5xxvvN5qPLNh4quaiDAXNr9v7f5zFjEhRPyp14Y2Uy3LxbbhUx6KtCCmyBDVwJJ",
  "key29": "3mbvNhANxGFKEKqi61f9WuiiVPkTFgKDQbaESJxxUTiiPuNCsNiAcM9tRLApYVnT485BP7rRYLoTfNPtLx3Uw2FU",
  "key30": "5ECs7rDTzA3sv7KmuhRLaHZM442qMDszZsJvrB5thjnBukmG34QvPq7u2RURhUtqCYuQan5VNPo4cyqAmPU6wgp1",
  "key31": "3p2AU2uSAzWgxPqMkJbBbaiEw8T5TUtpbWb9NnpXPQdbMUEUs6XBfipdL9E661YyaY8YGNxNKNwJbFTD4HmtXD8R",
  "key32": "4yBgD7pybKjW65knDuVNqz47tNwnFZpe7sq8P4sYmeHzD2MhXNAEZTtkCr3ze3eHCy7rwSjRbUmhBHPKrztQKwwY",
  "key33": "51FnuzUicfJLn6TFaMGARxdPhVr6Eh1YVdWWDfG4FEmqvwqj2YiXMnCx4FKNuwh8SpipjSkuZ4eQvQLYpHPv2JZ8",
  "key34": "3xH1qBWseL2EZAVmEtzzNJCWiWJC7NEWoJVE9rACG9facRGUMdwLRcvuW3RXrTuf4ijoNGnK7RbxBRaFfJCDEL7q",
  "key35": "4uGRFv5ST5MtSCdGom8numNPBH5rhmz4yEDdkQTaBAYiSLcuWFoMj5Jju1KnouT9qFev7FCJbZj4XQHVWbf1PecT",
  "key36": "3UCE5vAVtpm2LzP9u1BzCFyuZi71eEe1jxAcdFLi7AowPzUER2DwNYSbseZNFyb81YYRNKEkLbNiw4nwVUWy28Vt",
  "key37": "2nBMHEZcZaaVcSU7w6JHGnkRPP1DVyCqb4vPG3FWDREN7t1nZqA7gCDXcj2yyHMaecXYfeJwUNjyJGF6o2Tux3gN",
  "key38": "4de7845EcfQPsebuYsvtf9F63fHP9QacXLoHGbADUSKzgXKhBkpqkCoktggCgXKnyEZogWmbRJwNZ9iHtRmAe4ph",
  "key39": "221MbLE4GT7C5wwAz1ZvVKfx3KCeQZemjR59uWk6TWYBm8iUNuizaAES3ygJRYVjFsCuiPSgSXREhGi2aA91VrPP",
  "key40": "w9uHciFSrT1VWVohG9sUMnZKRhM1ysh5Dj2KhumCpfzeGimVMDNidE8aJ85HEBAmeTmmfAKCwK4V6JW4p8czvjn",
  "key41": "5pJWi64d5Ndix63Vc1WeQtZzdaLppP2eyZXY127Wjv4SKHV6KqZwjreL29FbE4PuVpA8kzEuqZb4EbhyxTqBVJPX",
  "key42": "3izCK942m4Rm5NSVLMfoXqRYM8yZod1W1jFsxspuYJDgdhRijbmXEXhpCQ77icfNb6c8658cU8ksLMXmSHKLTV97"
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

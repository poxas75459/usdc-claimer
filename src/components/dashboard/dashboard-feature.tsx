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
    "3YfLwGX78Lw5okK5monzY6ZuvCiGDaXFDh2RfCaWnDbWQXtAMzeaoyZDehWwbiTLjbboj8qYEJC1RdEAugwHr2cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XwtftTM78eYz7uKp4m87tQomSXzTVMBcKqJzMDPV531vEffhj1LDW5LvbBZXzixjdT4srbV1eB53DJUev9K6Hvg",
  "key1": "5VBSkr6gArWk1SJjkr6q359wSN5eN2BoMev2iM2gQyP8zseBtvX7yryxXhMyrQ6oTRH4D5i5wCmvX6UUXBuG97s6",
  "key2": "3h53bFPtWZzeo69gx4c8oLDVSkbxGEtj1Y1dRKQ1L5qVgKqs3LkT1fLMNTJbpJ56MQchpqEhN3TgDm6YWJLMA6Zw",
  "key3": "E7EBLuo9wss5w2bsWCQejzNxi3YieX8RPNswQHze5LspzQXGnvdMiGA2bBtFEuskWVPQkEUSYCW2YLZ4P6rgQft",
  "key4": "3AyryYryRJbJ1fipHV2Wkd7DCMYAWyy9T1f6743ZRXrVDiYPy3x4R4aHE5JfzAGAXX1NTtg8qXq9N6oPaqg946Cu",
  "key5": "4PJUmhoiP7FrHBaQvcoGpm9pFCdf27gduZgciQCYipTaQ98GAJR3eWE6cnm3E526B1KsqwCvVdeD69S2V7v8N9KL",
  "key6": "59RbXZU8nX7eYEF13gvgYqKBg9W7RgL8vsM5j3eKVpx4r6Nzxr6qDsMEGRe2N4bjwQDEYsXuTuRh7s1YV3XSqqUA",
  "key7": "2EPQ2k9Uqawg7shVmVN6BnYxfSGo7rMPMdF2crvR6U9Zn3UThZxFy9XgGnbjuo3PXsvuxrMZobp7cTtJW3q8PCra",
  "key8": "uc55QFUqp8Pjs2QJAYXan7dTYSnt6roJjUm1cyNzzuGnGtN9Jn91U7g779zmWLBXWKp4N6BHb9ZuRzLRKeC2dox",
  "key9": "4dbnZyrMXj4JgaWaXVaRYNSNxjSYAigg2bjLcRwKd32YLakR8LTeoetnzWvVVLsK9efQyY4NEU9GJQVcmfz7fEtw",
  "key10": "5rKyAdSETGWmAfPLeJS6HtZNHEM96LW7ucCzWCXnPTnLk2kioLiS9TGfuVYMJWwMu8j7iubAB4xN5wYASktfafDA",
  "key11": "5pzfseNqWmfZRwKFM1spUVsFFnwDy3nfLZno9bjh2w4sKVPNgyNmxb3cZVgbAhwGKjEPFdZQpzUvE7YrUG7BQpF8",
  "key12": "2PKrZS4Rk2J5wvUQcKp9nbJVBVAb14doLUWLZmqyUHQXhQbYSrdbsbYYf3qinpRLmbYxUvAwgS88MyZf5mrSAHvV",
  "key13": "3BrnK98dGwy8A7Uxz85JS7tAQUZbPH7Hue468HXbtFyM6FmaWsmFJKbY2Nraxe9kSt2ZUZZXWgs97L2kGqiCmPxp",
  "key14": "55tfH55aejmTJ962DYTLuebsz2GfhzZdRNsBmRbWbLWRV5FHn1AcRFEyroQvvHgFAhEZpgjmwwJDYZSSoXUa2BxN",
  "key15": "7Meb4HG969WeghHwLA8C7PqA9LEtreN3aXY6yB8tmcbBMCrt9p4ExrNGrn8Wi2BAhc6T6nV2jf1R8WXC6CThrgu",
  "key16": "3ffh75vos2c1fBdrgpnfS29tPtcsnP8iRgapDecgn6CH6xAQGKBksTmfmJcPSuBZxGfebybsY71KTYxrM3ZXqeaX",
  "key17": "4akknyAEDuN5ufrbfMMCaKw4mVKkfCHVyHqAzLmo4SVTkzTKqLYiaJEBiSM4o7EiRDffPfz7ZVj1bfnKbqmbrHXD",
  "key18": "3daYfnxsHi1qnAYSGtv7vEC3aFfqfqVWzhBxmMU1DsJSWfNATDEE9hz6fob7ZqZdDemrW2bhyufKF6QupNuCSmRB",
  "key19": "65SxbQUZESMt7pewbsQHRgGFQ3LHVqAcjNmEZKE4ng23ngzaLmNRc5yptZcyGTnDm5qMsL491CzW1AK7qhehWyXY",
  "key20": "39vzF1NsFcnY8DgMmf8UZu1PKqkaEDhb3G5UAMcUoiGDSVYM1FgDxCHBaoBNBkqSK2hinvJ6ZDFxQ1VRtt5rhxa7",
  "key21": "51857ywHLXkRevL1pM8v7LP5B7yRGnbQPFgAzmS8PWxKghzBGFmeMkKXv9GhoF9C7Gj8c1Vzuw1EJBFqXWNXj7Qu",
  "key22": "3Fmx4g431XKjnzn13UaCqeUHKQ8V6596DGdytaXuofMi2HqcYmSHoN7kjANVGhDdGf9E2o11t9QkzRGRwY2R67qD",
  "key23": "2Wg4MtPbR9uCGUnciXP7wrpA1VK27Xusc3HJDnP1w7k8SXyJEFPdmCExnAcQnTxDn1Y9yG8QH6yZh7d3EuKsRuiW",
  "key24": "4UBgzzXxcfQioNAp2xq2Apo7MvreSREXaKp9YGbMk567SPLWur9CXTS7YLdeGwvGQKQ9XSxjdD1UHdoZ6YvZMD1L",
  "key25": "4d1iqW66pJcu4mtm7Eihio5zf7U6MzeQBGzsWjLztJJGZmBXYTXjUzQ4Fo9KSLBQao7vNooiUxuSdKkbhGp8s721",
  "key26": "z9odTWyRF4ym57JKhPLrt2jr4apcacXsmMh7ix7AyvrWpEZshsZ4ub9pqTo8pfYYZQe9N4cxSRKWMnmmiiSsjAV",
  "key27": "4QL8fNnHKanspxbrqMCww9tXHdzM24283F3JZuY2yX78nJqK2KPNRPHAdVXETx1fUoSsE7CJcQHmWpfXQsxcpruq",
  "key28": "1re8Uuv3MPWRVLDVLLmm28uTffX7vS453rXWaFRfXfn5EM8UDEdh8NbhqGbZbivhzXHzJVZJ4Vup4wqzRSBRkJF",
  "key29": "3CXDSme2aPMcYjFXvuVHbP9ZGDAwUkMrmq2PrqfdpJKBxVq662phskVEJnv8gxoN86QxuHqZa8vo5A9684EZzSZT",
  "key30": "P9E3ndEsaYikeDHVbLLdZKD1EEKUqQ7NekThv9CqMyLkqZgiN8KVjAc2XPK2uexqLyU2Dtx76bhzq2uALznpTyb",
  "key31": "5Ftsa1uyxrjQt6BSpkkRFTRktPJENJxqpJKGjKUS7qrtwQpjes9fnjK6RxmqikR8sf48mVsuqZLNkwT3hXRJdhWU",
  "key32": "3U2ZcJQMbNaXpSxopbxtmVSYv1mqxdcrK7kBFhX4KH74v8u6gRntFv5yJEkdt99bv6amrocJa6x7qX1iKXFzcmeH",
  "key33": "4YBFN1mM6KG1deHvX7sFED1nAiVHa8BN51xG2pdMpbNxzmwPQCaBBzeL3cao8gZGQ5S45FPBidGDoBh57CDsfTai",
  "key34": "4zVN58ELqEnzkZKda3PaxdKPc8fB1YyD1VhRhKGLAsu6HpisQrcvwnXi8y1bzbYQnDMNqXUtBWfzqTSE1Kx8rpiY",
  "key35": "2YhsyGKErx2FBVwX2usYSQc7o5oWvN6hjs8jJR6fenQ4XAekdeakAGGWhoJznr66LYHd6eiqi6eTj8szjLy7tXBy",
  "key36": "2mqS9sGtEdU6WM6sM3A5YGnbbmDnL7Lgw2ZSp4Zwx49ZxVgUq6LoMEMWpn67CAgJE2dVSGMbzh3FjTU2YDYsfSBp",
  "key37": "62398hTxiMA2RqBUmCMWYdQamjmhjZQc3tnTyzCCB4bzbxQk9p382DJBJenPNh6sd9jfQNtA4ot4WrsKVBGTWynM"
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

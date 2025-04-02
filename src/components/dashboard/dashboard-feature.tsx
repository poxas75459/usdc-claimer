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
    "3kS1fmzFQHhAxeyMcFWxNDVFmafMUZJo4RDncKzp1CTyvwLgKudHBKweqpfHrRzyw1xmDa2y4yrJe2NrQKzBCq3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kVKaWwyBbE2eNwC37ihzcTzdKPx4k942MtGe2f9xRjGdg4GSySVkUFYZ2x5XtHWpvb6jyxgcBkwrQS2NyEj1NmH",
  "key1": "26Z2NbwjSPFrgBdjDehia22NRG8DUZEncGVFj2NH3yfcZUDhPGhr2fzbB8srS5e3hG5kvUNNwSY51nK6qRX7ygcj",
  "key2": "3Do1cG4tCgxKdRUZen9KBmbFRGXSBoqD3PLEZwqk3niZ7X9PAHChirtU6SxRjZranHwTKp1TzKiDVqkWyGfZBdTD",
  "key3": "YXh48jwZF456Lhny9rECJce96k1YUvAQtuxEbnV5nDPK6PZx2HGcbv7AxCBhYL9x8XLGHcmR7HNDr9W3A82D3AQ",
  "key4": "4jXryKip9iJtCQWbvpcrmPKZh2PBPmvjyVsDK2u9MqQiqYmerHzLyyTcnTH7XCqZRWm3cnxCC5cE14NpVt8G3Utg",
  "key5": "4bGirUTXvjMizbGqPfnZk9nHavP5Mcp8Hv5FMdRtwzqcoYBiC6gFELNGfTaDs3GnLQfne8zjcBFk5KvKCafttJjY",
  "key6": "3DRBB7uiHMnbX36yKnfAhj48i2ePjQP66aDR4Bt5TtJsCBeaCNrPTvQRY94aqj5WbjJXpfB2TvkEBV2ggE8KRdbo",
  "key7": "3us2c9Crw2Y6EBhSbW979onXEkMukp837Y8YFhU7D14xWJ52PPAHNY7qmgaFam7B7WeBHqz8kWdE8JSNpkc26XrX",
  "key8": "4ugFo4xJfQNuouELTTETXyMH7MD17Sv8PuzbHi4MX5Fq8VG5RPA6UN8hCq1QqzEF9MkWETVVnmSvSfaUkPDURBHc",
  "key9": "5RczYZTmanmBoW6Fi5KfYenNNmCzdM4wt5yNqC32ekj4QFKtwUUxoTFcD5opHfD3Lann1jDX6P1VGmBZFXnHSRg7",
  "key10": "5GHJHi3pb5VrcQgbT6JFcQz557hTiBErZx5CHZSkiR8q9XWiZJVdQXatF3v2ESoriERpdT7WbUXdE3tBbubFRF1w",
  "key11": "4BsAbFFqxV4ZXXvFxjf9Uh7SLBe1b9TrBD8jJ4q5YRsLZnEiwbQvvZZPsmvBcWG6wtYk7yXTugWeZgoeKg7o7yR2",
  "key12": "bxSG3WGt3W9N8gREG9j4RrS56LniFXcCW3fzFYHMB9joShzhSiVENrpY3HK3H3ARyQYMdDs43rh8sthhuGESAZa",
  "key13": "2e2N8jwi6gJrdpdAC6tyV8g2k2KWncY6f6x2wSaatozHoiRqRDs1ZJ63rmN5sfzTN1YQEvDUoR8LCoQvoR7NvJam",
  "key14": "5Zi3hi6Wym4MGEr2YogjQiFN8CAyRSAp2szMaKvban4x4b2vNSexx3ta2iQPpPvLp17k6oDacd6xYaf7EhCnNPyu",
  "key15": "5xMF7jJ897t5aRMXz1fZv3tBhfYFxv5aihVkxTQu5msWvZFT8sqRdn7RGHkJ7Ko5XtdxwZqeULLmg4JCfAPoxxqX",
  "key16": "5RH9qR4iugaTxaqzeUC49WUDJHSNdLeL7LVxw1EAWtMgNyZYbMedutWzx9sZEiB2de9Lct1rESZA33gaU3JdTbtm",
  "key17": "4N2Yqjrx3QCTsVYGmxZ86SQkHNsrzjo8XRHXkibK1b7Nx6eAbmA8QZHfp41TZffxw8iT4xA9Qwf5NiUN21bSas6e",
  "key18": "5gJdugMZugBgRkCbZ6W2xCmvUcvYWWHhfQJJEnNkokydVY7m2WoZKEPCBBzah5bKsLCmXoHucT49VQPnZrzRFNYh",
  "key19": "GRs9BBkSAK4B931Mp9tnBFRCQM1Cd7U4Mk9mhym68Jrh2gCxQrUYpvNt8BFGWXaydBzC1BgnKV94mMb19RNKqCv",
  "key20": "4cwaPRKw1jPbL2UASyGvLszKERzdBkXF41QknmsPXGc7nBQo2Qq4KEvpsvA4QNVw4QFwaS8337yqxy9dM3iqd6ub",
  "key21": "53T1vx7ZvKurw7c61t5jPXKfgik1GH5bXrT7UFnxzGDVHxZkuQnxSZ3BeNSBjdYiTggGo9ZGRV5Bc9epfmCUBk42",
  "key22": "3zuMM4irADShnM6jDT2z81mCCn4RUfuu8DmskGv63SRDiwzugNSHUHkm96P8HYoVnRBL5gV1VZfXJDZne4Y8RF2F",
  "key23": "5XgnZPAhcEJTqwipsdmrCsygPo1apXqwW9569X9XxCRTRBP4eBFHQRkdWH3gimSD4B2jQY3bjmwHrVikYoQ1nNsq",
  "key24": "4yxNFTG8KBnoVhjrCgQYp1MqJyDRRVgNfpsLU67pmRVQKuMKHuE8CwDZUQiD5XDHUpfxATrFETZqcTEAQ6VSMgbf"
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

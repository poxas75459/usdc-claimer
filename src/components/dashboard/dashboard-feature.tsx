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
    "2dLgHmXdeHNXy8khcxFipBu7sY2PX6qP2rBXbMnhPmrnTcmLAUGEfPvP65Zf1r59Bp2REFjZxbqcT8317BZejyFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BovNfP8UpeERnAuFyUz8MWCjY6VuZoCnyhpxyCmwLfWGJm5Tbm6niqjZkcCq5bujS5QHTxhVut5HTjedquehPpT",
  "key1": "4H3QfzfjFncdmHayH7RuEgQ5uvrnkDsztruhF1DQAXrSjy5J1X2pp2ywhp7mSajUSEXVt7mC88kUhypk9zzJuaoZ",
  "key2": "2F7Ntmc5MoXFZp3qivdK6SCiFnHPvNEonTPZZwPX7pNQWggtpdtbatBfVuVyYNoRVihv2ipAnjmD8jSDJpr3RwHN",
  "key3": "3N5GxVXBMKcyBEUgrhydkq26DSJVASAQFrFbtA5GLZe5FaWxsbMwuVTkg5UfhRn49jqkz8uTye3pvNU8MhX3A8xm",
  "key4": "4Y2U5qLetwJ2XwdRbTXKts42i5ywfLzPeH1mRUqnkUevRoMb2SHaDpHw4FGypESJffEF8KpjQ8XNZtzcQAXwWquB",
  "key5": "5LmcQVsD1uURj3MPQb1psr79HAkWGu2JxpCrSGgTva9EtQAiShYd9FUYdWdCd42cHMSjP82ko9ZEVjXW7mdyCBxd",
  "key6": "3XSVUb6qjUN8S9mPujT75zq8kxKtyms34fKfPbop4ZXgGoFmBtGXXvLAdruWTVoujQvsCwPmKqyhbyWPzQP56cSc",
  "key7": "2Pzo9Y2qq7WvdFuUHtRRbNm9kJWkVikcMpKViv5FoTE6BjgoVTC2z52feZhuEqDeanNkq841CEqPVcpC9KX7WUFq",
  "key8": "2J5pi27EyQBbkLoypPYmzLjqKCoJ5mnTY9TQgdnk7eU8Zibt6UEfncb2fiwRrPE8F1PEMEzfJvrGSr9H3jufD9Lb",
  "key9": "8RJbxCvX69Z6yyZ81ieGQBmdXKy7E2u4YLohv6cz2CFfkXb2uXNnoNMCeNYtaQEd8ruhk1BKXvNzAXufWnNqBK4",
  "key10": "4u6LGsjuaQsNxAnM3BFZNu4JBjeoLuBTuC4QBG4EXhxv43Cps6FtogrRUKvPq16aFgFMPAgFwpxvaHtrk17MmU3r",
  "key11": "3M56GJ4GdttAt7xZzktTpRbexapAUYFVfAxEda9j8BM6G9gg4HRioUQ5YgnRqxFG5v1PkDFXTVzBLo2RaH3qpVAT",
  "key12": "239wdGDPngA3dNXjEXVeJQZrq9BGKSFujdud3AsAmSizPqz7UMp1HxsrLkGLjtSkk3TPCGhrGAzNoTxhK1AtmBAo",
  "key13": "2sLJ2PaLzng8rgqS4nCsPguWTdfKNCoVNNTairR5xKo5fDTKFkxT8xUnAzQQUoi6vZ5P8QRizrAvshYV68tCPy1p",
  "key14": "13a6srdXzTagqj22aQUC31fwp9oZphkHHxhS5oCu64cS6i9Ex8NwUNocX9mgnUjjK24NRXZrdVFVoqMVVBTAULL",
  "key15": "5YofPs7PJLThPxcdbr7fA4u5CAL3jpg6AtWpXNH4ZFH4gxpDdeUUEQ1yz6WAH94u4BoaeZUGc6yLzXmofoxWmu24",
  "key16": "YeCMsjVEoFNW4nvq8qVkg2A1JjbnMdkCqMHY6B2YnN2RgNeTfSfEFteJsoWmcHyNm8w2wvhjFYGeMLw4PhK8qSX",
  "key17": "3VCCVDvuSFD53R48wUbgsgKmtbdVF5WHSu1NqjyVzTVyvQF2yYERfYwCsBQeuyohnjuvtgwoar6NBcmc4sS7H9zS",
  "key18": "ySUSJtDBFkEXYwf1b4pqnwMxVxpdVsiqbwE4f8bBR5cTBbymvdpw97pzZnyP3GirHpHzVakehUyZFAD324VUDzo",
  "key19": "35kAGDLcgfq7NP8g9u2R7wpSoP5vSuxY7HCpKKWtKPmCknsn5a9EtvtvphnYzT4CdFrqLduAstd8JyajAijVGULg",
  "key20": "4KVdiKWDZg3o7dfLX2WAoFxxNEf7mN6m78GshD69ESkx7hFs33FzHKtnpumAThhQzWViipct7bM6Fyo132en3aqa",
  "key21": "41hLBxXnMP9tjJmvdzJwUNdbLDBFtpQd36wZKGFEDMP5736UTnFxdviPc2iuLDL1174NmGRkJEJ8ZbFsCGNu65kf",
  "key22": "29LoZGFG7y3pdLw2GzrFxQpL1yLY8MPj5smCRPkmH6GJTScnNpYB6tzNWjWUQQRfGXbJ8dWJoLp9oTVVEqkRB7gs",
  "key23": "726c3hYpJf42uN6fZkVzJbjAUrnkmKdyzT1MFdqZvLPgq7PpJHTnDNfkxv2eXpLshz1bsbZMAvJpYU9yooCib8i",
  "key24": "2tbSLpUH2ctpLD3kg4LSb8NpLKQDyESyqppWgX4Sr5t94eXnmaXSn62nVCLeHtr9PLj8fMA2eKvtf8tMT5YxPU5N",
  "key25": "3MUQ9Wu6HTnD6GW82fCe4UmZD3KTh6zZ6gzPVF3GyXukBVwZMcGw85AcpSUySg2XZTAdmZVPhHm6NNSwWxa2JEnb",
  "key26": "XP1rm9wJ7NL3Ubr6VYQsubNW9fHDoM8Sz4DjNFwDxpi2wyqJ8cgC3hwtUCvVNAEgGoso2Jks5x8q23vzCsaWFWm",
  "key27": "aMQHfkYMLaVPEFVXWSp38W1sCe2131zK7Q28pMHzEKb9sinqPGdmFsan3KjJdNh4bSsQGkRw9wV4v53r7WSLuAk",
  "key28": "3W6Aw246xZobEk5G3P8udubPGpMq3BaRr87CzfYgVumS4EUmgijSf9cNa1BpTmjk6nKKY7F9GpvuEgH6icN8979f",
  "key29": "5RNVQTXkMdXfPwBiA8BrW1XBDAtzM8f49T855NfKkreBGVxGhajiChwbMWFCFqSJUxeabhqEpSdeG9fBYNm9E8gS",
  "key30": "3GJaqikTcKsPjbeWsxafPTRGNjEF47DT6vL5y1DNGQ5orzRfFHG66Smd41BtDphQnX8XfQpRSMk3atsKFqSo8L6Z",
  "key31": "cuzrC8CZEFjHco17CbYr7FM5SiFvkMtP6mtVV5CuU32rdTD521rNggAkGubns7MwoEbmxuNW982xjh4fA382Fdy",
  "key32": "3ZQJr9fiBjojP4NwNjBnULBX94PRfyksq1wMJhy5GH69uv7ynrFz2emYt8DiWu6wv4RtdarnKSYRNrkvYNw5RzWU",
  "key33": "5DvXWvqw7ZPeCcbM2yCTh4HaMvqQbWNSwcYwRNgLjdr6eQpqr89cXniMWmP6rrsjjMsBh71dLvJKXjgizgs6fpzV",
  "key34": "42UBs7wmWfMWAwFKkfzF86qfFxJZTTHiuAnKHQxo8jLaEwekMu5ie24aDmB5SDZKftgGgTpLnX36WWSdRdDPR4SA",
  "key35": "4Ar2LpzJR46VUAj9aemCs21owEc9ittZoaa5m7sY4fQ1gv6ZJ4QNip5wS5dG1C348x6u9hfPx8GMyXCrrZLEYwgK",
  "key36": "3QubE2jx6YFBrwa4VGmChWUPkcKMMAt63SPJ5xZmtRHfXBDAj3nWhbJm3Gfvz31Dd66jTLHSoNAGBfPm3XX8WfLS",
  "key37": "3U4FDjkZKGerZu6qB3svb8AbfqzQ5h1T92L5rcTk4AvcRJPNf12RSq5i9ji3DjoT43AHP6kvp8x32woNDJCAKQc5",
  "key38": "ohRWPtM1a3xV2ehf5ssvTNagQD83qHkzBxCWTPjBEHLCc8xro5Fzjn2B9Te7FhYwFp22myMRTEx9KeMBHyf2rif"
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

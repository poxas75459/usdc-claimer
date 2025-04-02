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
    "2Nc9L94qwoHff4wNbwgQSvpWYZgoxiGg43tDXzeBi4s566V9SKUExakjNR5YUXxrR3eJhEr2nd4ZbyJajuGySfTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JV4qFS414ESQokze2Rxun5mPgc7my7wzSX9ZzoN8EtSRG4D34HbxNeaGNCSCCqmMyK51AojWkTtoqp37uVia7K7",
  "key1": "5R39kb6NtwSBbKEdgpgpUgo9CCeYBJuVqToLtJMZewjwGANRGu3oWP5X6dwXCq9LbQgHKWk6dkpi5WPvtoYJax2K",
  "key2": "3AmVzRpP4SRkdcCP5HwkyFTfHib5mKr8hSvuSwgW3D1oY9167xpsYV3sj8QZYDn2LX4pzXWLVmxYbUWtokDCdwkP",
  "key3": "5w3KC18BsRijx4QcCiX1JWcLtTjw4Z56uStMKoZzCexxdcfpTE6SPf32A1m3PbwTL8hVBuq3CVwwibUSMMK1m4GE",
  "key4": "4AqSSuAqjhhjwfmbxFnJdubdeXVVA4NS8xxYm3spn7z8vjLYFZp5yGV9xdBML3gXKSJLpGJHKfkY7jUuaCB47gJe",
  "key5": "4a4F6gXNnMP8Ys8DpyPLzKPtYZzYJM9uLkCvsgRC6tCY1KQVuV19zXPDX316C8uXxYcjeiNKhbNrzbVsxkTUXTvQ",
  "key6": "5GsDTt9zjxRiCjpqiBGNw99uoHNJ12WJcWdQiUAq8iqgWwhgjtCT4XDWg8qncM3mWV698QrpR1jdA59pcdkSHePf",
  "key7": "3Y8VA8Wm9d9nKnrGXc61uXrScLah9M4HU7WthNhysdgJ8uzQr5XdyKdqTDJS46VdKZki1gJXunijWoMfSFcwThgj",
  "key8": "52fak5fowT9VQpEfoLASHGGScB2w6kWBRxkJyDaqZ83tHwSwg2RcMre6NpgWc7W9RfCoYmyigo9iTcVUnhDwnb3o",
  "key9": "2qCBGthjp8YsQCYHLLeJ6QQQQ14BUvRFRPeXGF7X3WKsRZwey942pdzwcqHJRRo2TvNMmxjfStDGsmWJSLv9TRDT",
  "key10": "7SgULDG9WTL4x6FXaNKgGy5KawwQGmibPFMH2V3hgUet5cfcsqEkCsNG2YH2DXWbZUh329Ma3jySQkiph6J8aXa",
  "key11": "3aBpZYCUN7qr7Dwkc1oXKxFMxsgt5vyJPbJm2j3cu21VTqrSg6xh3jyLoHempmMQEqYYwT1FygEhR1Mdah4fkgwy",
  "key12": "2QAxx3VSRA3bDUTb8iLbhbe9dwgAJWg39Ga8LA3eneCarytqo17RtHy7u8cWEHuhHZF1CJXZF3G1NvnpstFr9TkG",
  "key13": "489Sm7DDjyWfj6WEg7Gs8tVeaXbGrdjq5WywGNxp3YekaptpimrPZ7K3NvjkRYpndydmTVjdEvh138SgB1pLt4e7",
  "key14": "f7zuWCr8dYBUjKmntwWfXXQLTsnMY6spTfJkTHy6HFwJtGCsVPbe4VwcYMM9mJpiekCJ9K4BuggiojHqt519kvb",
  "key15": "2ACFBiJHT5tR4btg8d3dvrwe9gXzWQ5TR8maLA1yMTavXhVvqZfRxHTqXZvCBf5MNfPjLfdBtDYgAB8HbDu5vYvz",
  "key16": "qCNQMsnZfVFZ3CSJNc4LPaKwMLRSc7uASbeTGsbDGBRgraSyz8uzovLKCBA71Qev7PxmyA9MG2hs8NRb5tR8bG1",
  "key17": "47ZBhQ5XYR82aqiV3rqQc9sZPfxJHxkeJWHZfR6JN4QyLfb9aBvLA3wRehpkrWewAjJgnxqPdfqt17UHfZbSBX3J",
  "key18": "5WWmtSxfeSk6AVo2WMF1NUXj5qZ1ypbs3FHwLSXwRPgk8yKhfTdMoRLERjx4A9oDFyqkfvnAzs7Kd22oxiZ2sEPw",
  "key19": "2g27RnZwzFiUNHFa3ZTDbxnKipFR2P4WAXuJsYBKamB9vVQXkvwJbMvMhUdeVku2WFXQCXTzqHgqXWcoiVe92ekk",
  "key20": "29qpG9hs98NKPMahx6S4ehKPnbVrWwDrDQLA5nQDbUi3563AcoLhGeQa2L1ApXVrDBJGbQWb7fyd8CQ6cQuTJeHj",
  "key21": "yicJrTKQq9cC2ggre2Nt4QsZ7E8Qo7YwdSCD9g44NHS7rYzBWvua1z4MxJA9FbetQz4nmevSpLzGLMocWRNQwKU",
  "key22": "4td6m3wcXiA8p6mqGVxCHMZsD1DAWKWvCNWLBFmFyLag1qwahFaVALEcKnaiRDQFSSV3iYqv7VS5MPBWj4dcZDZu",
  "key23": "3MTd8uzs1rdBg8FfGcvtX1QzpQZX2HGvLLA43NtciWBbcpHcv8kT88DPjwP1gYoh2iHBaAZLqUuzKZVdid6Gx2hp",
  "key24": "Tgzy42wSXJHXUaAxhpw77T3DpwWcpXTPNeaXurm9xi8tRTXsw97fpF9G6CxkT9QtJ2L6wVewZZfpuafB9sehQJa",
  "key25": "4NMvn8mhBWVzHb9HrTWoerUaDH1d9kELArRysboA3rSRV9Y3p44DnFpGTERSKkeFSCBnQv9x2ifiiq2WvJt2pVWU",
  "key26": "3wnCCu9DMoAvANkzEYjmv9aEbGmm85NvDADj81dFc2aXk7Uc6uKFHapyEri2rLXBqNYnjZzgUj45eJnW691Vro6X",
  "key27": "amMPzyLkb78zSWzrRu8hhXEWoJaUr2uLkN2peWTp8e59Xp13dBQTrig77qniS1xhoEh6aJbdyPiSPdASBMBnCUa",
  "key28": "2BYmC2s4kLpjkSLBnrB5DMoZ3cuMB7nJBWsauhdSRNtnbdCk54RQ22i1g7y1xbiVB5Dvpeyt6rpiXjCih5pgu3ad",
  "key29": "2vs64zYqkoqnKQxGHzS182JjFGm1JC8ZtXD1YouyHnGQzLQ4jnLkSkQRbwoJ6gJq1LUDQb4iohtWQ7D6kdk4Excg"
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

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
    "28Xc1aFpujXG6k6XTmJJhY84vktW1h1ajJrfhY4gSZDja7vD3S9wTHABhcuHBHJSo4GzdUiBQMxLW5N1yxCNBv47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tkH5FpMKKphRCc9qPtE3sAn5JvwB5u2Df9knhjuLKB7NAV7NxwkMmRFGQJBLFtHWJXZmGEpNuJxzKHBjCRiyaxE",
  "key1": "5TVWj9XAwedRJeS4PDSrPrGrJyxXeKCb5bAoHh2RTGjYYTgYpNAHhNLxoKo3uPV5gDuLZ59u53v25zgBjcPETYMc",
  "key2": "2sxmGiXhTHhbmoypoNUfZe2kUGHY2BqJVH4Ph28vM2HdSswwSiqiPEsfnrvyaz4SdhqpdEz3nWL9bMoafZ8yaMMQ",
  "key3": "65PnqU9wUcu6WB1uUrUyCMaNiPjpSoEGNP9dGPwYcrEsKKNa8HP5vAawyAbu1i6aXWgbyt61UjPUDnSiznvjRfJe",
  "key4": "4wkP32z7N782piypYfoaGBMfcEUXVmLujvUhkHELt7KDsTht22m9NmbZazunExKCj93ZiRfFkSmsaZ8BziYJ6FbS",
  "key5": "Nb6cJPcuFHvAowbsvzW3Q5PdfdgtHfm27EE5fnQznBKx3s1W37VizyrmMEzdjoqk2fYfgcRLtTF4zS648khfTKE",
  "key6": "5ZrMn6zvobLFPcvdhJVk2tkZUq7Vsqeem3cGmRWDhUEjHLUkJEQyP82ZcLYvoqffRqxeReme63BBePdwwEzEbq6q",
  "key7": "4AoqVhksVPZKhYdBxgQ2uFRyB76bUWxejzqtWbUqnuJq4RJmv492yuqWT4BchS2pEqSrdyiNE1Mhk4oiwcB8DnCt",
  "key8": "5xEK4tjWSiiKkWbzmJ3Tp3KoZGzseT2xP3zUfs8U15xXsWZ6ihkST2pYkvyJZrTxjDQrfd5JL3gc2AnHTecWujvG",
  "key9": "3VdgNV4EjKwCrLNKAhnPxgBR4D4vV8vXjfs2B3MhJQeVG2Yx7pYgGAPZ5ZbzX72tRAK4HtweAdgkYzfzsaGWmpEh",
  "key10": "5msfH1fKx5dMREtmV6hkJe9dByfPrtPAjQwPGn23RaCGzJVUjGRXBKpEGghwsm2XCgQCsH5YETRXEqufRhAVYWuP",
  "key11": "M6h9wiWemBruGczix75NcvikdYQiBbqWVAF3czjPP7yWgfWjhcRYEzEMQic6EZqrsHheUshDzDdMLz8ZdTn9geb",
  "key12": "S3ZPnCjqkvk2Zuw6fj47S3nGwEKcwziM38QEspc8cxybhnaR4DGLDevaVxCjRA2QJoxZHRYfgXANiaSpaXKPW5Y",
  "key13": "5swmyENjGL96TiZurniHUWVauBS8BkDKr6QtcK6erzamXXkV9gxG6ocYi6jueZrMvgP2g2PWjedLf1nAs5WgU8e9",
  "key14": "2Fri1bNvpPLXbqeuN7uphoe9h9eEFfM2Y8iriRGJ9Ni6VYCmFJtZ3FQ4E31as1LL8S3GWwgKa8tsntj365LDDF1e",
  "key15": "4xXbFM8c8WiSVY2FBcDNHPZd2Nc3D6C2a96cu6Us8DDBwxzZy9zJEhYhHoZ5TwbnUEo69xtacYEZy5vgfqa9ANSs",
  "key16": "442YbHqW4vvHW6xkfYmp7UD51vhY1sfHA2YuRNj7MTxokkyopUkrs1JQWmXrxQ4xUjLPN7nMpQpUiekWKpAGCSLS",
  "key17": "4Wh98hoF6hZbKzREjaEhtGPN5MzcHY81kUA8LC6ob3JxbrKTnro4U7mHT8Quqg3o6ZkRg4anufjoFdW2ji1B4GcD",
  "key18": "iV55uLrtxJ5gfjsrrfd1qJ1McAw1CxYnxXsSRXMBUh31etFDcrrZRZrDijLoDsWHFKgtAnv4uPRnruzCKEddGdA",
  "key19": "48urpeS6bunZRfThXAKxC3kLVuoQnDHhdnmkEE3HgdDhLTc9n2e6f5KLVj6dvK94gDd5bXT6rf6nQgTFQGxzgkCf",
  "key20": "W3YnLfjemQC6KknVnb9sfEPGR9mYByo92diZBuimNP5yr8vPKgFzsGao72LriGtP5QZbPGtraYMTMcAhVYf2M5S",
  "key21": "3qtELr6f4avJoLwYtVcZSYn1XhxFexppAT6LDsGi4XcerjCNj8UyTfmD5X8rNChwbyYZXTpyWvqcP8m94USqXYJR",
  "key22": "2Fmb2YS77iAHjt2tDEz6zuuFHUdbuzXAv9aoQ1VDpuQ7BFYda7Cd52EQpDfYTyXdErUactwfqfJLxjXpY23R1BXk",
  "key23": "cXTSQowC5PKJLqCWqptJmZ2YcZwakeUSjynR8QWv9FysSvFbHCbHDVYea5uFt238XmTNBiR8RhtVLSWPbBb7dR8",
  "key24": "5DRehtJ4bfwLKWUsohFJSDJSKK3tjExqD9DYmrzbnfdwa5KyDiWh9XjygBByUsuQMqNgVF6CxW3tv7jPWy2ehTVM"
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

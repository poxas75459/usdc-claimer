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
    "3iDtBCHSKuhCsomqftvESjKMtc5EbQNwgptHuxh3TPHu2TGdZcSszWnnaQ7Su8X3Ho5qbgxJMWM3UT7H75BizYWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LM9iU1vKPkvoZKx6WFEnBLombnv4at1QaFnk8STUQyBKxLmrDS4wStZ7QBshfdSiNZXFB1k9LovNdxpFRLoF4sf",
  "key1": "rA6EBcbwXc6MoQtiwBaX24efeHoufZNLenvx5J8zw1231W9X9xpeKEPvFDWo5gq5oABBNs2d2NkpbCPhKqwBX8b",
  "key2": "NW7WK8KWnbq4V8JJtwCoTpC632ooHzipdMnPJMznRNV41LRXtPtvK79vcjiLJcFRFACxJAKMFV9Am73jbgWKUYQ",
  "key3": "46c2Zbqo2rkZoSnYCjdn5mgm6ZrWNa1tMFfC8nEPgQpUWZSBQF3y2S1bmL4nJUGgZ75RyGSAJodov82LJF3MWuhB",
  "key4": "2ksiZk1gsEd72sQh2roPKgS5wj7za5jnEzr7JF4D3Hy7d1goprWJnx3AZqC84eCYCkdu8N7vp32Dg21jiaCcxg4K",
  "key5": "2WuxbrQqoJEboPigjPAUZiheJht75MF5XqS7Tc435Y1WDJidNmiNqDSQ2CQo45ue9U76AGSjvoBgedpytdiY3MZ9",
  "key6": "3kRCUTsxn2wuvTAwjWxKDfbXtjM9H3J22PPgJ22rGkY1pkwHKqyygF843TTju6LJofvLGCHb1DU8utGbEjz92xur",
  "key7": "4W1Uk44nFKaE3AaH8mzZsuamMjUiNFq6ZXQ6cqN6iBYXtBgyriiLQfbUZRpNxcbA4M3XGH1HCSKjhfRXSknxzaM8",
  "key8": "4ZR3pFqP3CGE5JYH2gmkE39y9K6y94FEUZs5BGG8jdYCzy1aFgAZUzBKbETd4X5y7ZF2ciFm7nQEdAeovsuZsAX3",
  "key9": "4teGFfbeojFnf2aPvRkCCX2TJYJcLgik4CcYCtz7qjKeX3ZD5qxgBH2VAdMs7gB1unnL941mryQZkmBYBjkgA59o",
  "key10": "2nf7JY2fgFQQBQqcThdsBP8BrDQ7ppiEmjD1dmAwUWvSHWXKDpXXs1Gyyu2U3JeAoG7Nko6uLcXXx6mY4XjyYejy",
  "key11": "4hDuQqLckKJLMhePnzgBs3QYC1ssY9SSYr9QwpvXZD5GrbPDb1YQo8cp4XcoapdL8yRMjFMar3D4ft736VbKhjCr",
  "key12": "29JPaeyjLyEjNJTpbniHfAAT6htqvF4GMK7R1vxGfxkrMw9T4oTYfXptue6puv2cm6YkZb2gAdy3mUAc2atE6nLa",
  "key13": "3Hd8fDvLaBSujxo4t7cTuo8HuEPxb2fY115mSPnwW6E9iDDvTa8Aa7xXD7zhmhnGBvfV7BmWWKk1WJb7tGsJr5KZ",
  "key14": "2KDoUVU3pZii4iPBD7oC4NLGJjGgU1FcN9USUZ6ShZxpz2NctkKnRLK7oF8E4XB18ecgTd7wMUtZWKJeQcmKbjU9",
  "key15": "3E5WFSDgyRQowUvcZQHYRsrEDPwnBere1hZ8REFxvk2BXrAM8BMKnFCs3AGnp5ZYrD4f9MzpgpbMDGbLi84S5gZv",
  "key16": "47m7pXafX57NLYQuEXDtB8dhTHvxdzSNhw9CZC51JDKPkV1p8CHqnhQPu9FMhazgFf5ndo9zJ1KDWj5Af9F5cJxS",
  "key17": "v3YbBPxZWqqFGJdTVusW4KKMdxrPbktzSmBxBx5vxRZwc986yk8nRKYhRZXYxBh7B1aQMyC5sdmidFQ234Cq5Fj",
  "key18": "1Esq1AYqfFYhWJGotxeANzTqzyy89u55MeVHhUdohaZhZEMw7ifAfJU8oEdxdSqDtjjYfXajWt19cEKg22kYFxd",
  "key19": "3Gmmw8zRuzgnn8gFoqiLJMCmH3GgLkveBRaHjkp2WawswUctCGvFNbhd2K7Y3u6dYULaVLeJdcUjX16zJppc7EMw",
  "key20": "3BbssaaqxMuz2NbobQRiLkh5AyHXadDZ8QgFNQ1CxvKCWGjRcwpzxqy3FfA2rWvzN2kyZW9P6ah72stRKQ3PVX3z",
  "key21": "4ey3RCV5djkRq14mQNQAN2PndpChef21tDRfDAShtrQFrnpe18Kd4aM6GBTWNgrHgkeWUoK1BPgUGzTRRE9tiHBM",
  "key22": "XzPCJDCBnc3DBVarUmusLWfC1hQa1FpCC4U55ufWW2JnxRvqke1AG5vkVHCY4vM7F6FpdV4XGmdQTerFfB5FTfv",
  "key23": "4dyXVWBZwhbyNTMmM8GL2ScnAMZoKTJD7hmdAGHFEYyfezDFo6PPLB6uh1oozgmPcpXCvD6dYGmwRxeDa1S3Z7QT",
  "key24": "KrJRDEWEiFbMSjkSnELx97kUvi6Z66gPL4p8KrQBzs4Vp4twh9GPJXnwGDmLosZHhtDQNcSySzyM6iaummJr8Yh",
  "key25": "2g2UmcrC6UBW9ywtf6ELRonjinCr5Dof3yPHhcgpyWMB8QaGkAom5W2pE77KDhXipLhHEmTCqKTMvKPLGUkJq18u",
  "key26": "59gvzZ3pSPnpnpw7sKQqSNdQHCvFNMvyro1hgtfT2sTxvJNC5oSr1ziVVS8gAttjk4fSLUxN1hmgrMS9d2uWJ5m4",
  "key27": "SjLVkRjiFSw4ogxZfxQ6eJTTKBFUESiZcRzUzfZ96onQU6SB6yUkNGxmJ2jibbK6M9fKEu1Zh5dzzFjgrBGxAnP",
  "key28": "4DgLpUB8JXjQEBx9jw4msCdj7fZLFJcYxDkPF5QB2iQ9WZ1AyBbrAyUCUcbK1JRXTNg9DRF3RoLQQpV3SByfZ7ty",
  "key29": "4BoHdbZsUwNQrmvUWypKEwm7hyQShcbbBUj87P3P1g3fHqW39r54hcj57xSbMzTcjXsEDFsMLSSaKNZB4JcNnoWw",
  "key30": "3n2VwqpRNwwLmSNwzJxi756heBxXWFeLQuzk9Xei7cofP4buRqoj43iVL5SVBt1a6QyJsu847NPBWmiyrn14bDMB",
  "key31": "5prkZzuKQAbRZj7FWvNgXLYdVYF62FdACGrnLKtB4LVzwE6TN9P39xzkGGv6edJmoFVBvSTTAAzwGWY86MBC5JHG",
  "key32": "4GHo2mTsuHegY9fzMrpLA5ynXctuHw8JjG8iVp9yf8Fr5fbjF1FeShPDZNEmmyU9hABhGBJ2JkSo6fTvooYTLVZz",
  "key33": "gqHQEsZW88NRwvydfj5ztjhNyEugpRR6MHNpRzhpuvV7o1pwzCU9iWwhMdVfG3QKH6gAC1jP9parVMaRFHYNB6i"
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

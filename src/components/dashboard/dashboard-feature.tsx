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
    "DLhMKhrgfW7bRsgY6QmmVRfrEn2jhsQKQc9WddrzjTthrF9rc1W7qSBtLoTHgUUcAee88FzMALcBLUPoeKJhJmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baB8FCJPLVGTY7XqDRBKPXnC99zZY3aR7JrAMbG5axuYb9XGuy4yasz6qqnvw6jqvskb5nH58RivNsaqZeYEbXr",
  "key1": "2EN9z9WPgCHMQyn3rZY845Fd6Uy3X3SEShKR3x5qSvPZV82XcbjhniqTwKpWt3iRY3xRN6RpYXqfbgfAvE1UMeDk",
  "key2": "44VDcvcw2fnTSrRbYWi8RMVY4uctyfVzQtx6VrWbFt8gXPozDHTD6GDxbK1y1EquB12Mc6KNUkNX136GDTme4BKm",
  "key3": "4b9mHhFNWA3eK88eErtWuHDignjjgZYkUJwoHUfmFHXTpnKB2b3jZJ8b7cjuNxj2mEmFq2tvPUzdVguvUXijGQ3K",
  "key4": "5ASJfffkYnZmmmoXrnT6eCoRzRpAKT54zW7yUPnVV1UWHpLLsavUwLFLYdumX4tHdnxfsbX4bcmgBMEpyQCrZ1Dk",
  "key5": "3NjHqzBvMATBs3GWPVHbzDABJSTbNanUAHrd3bJRXtgvN8LjjyqGF4czjQvLyynAQ9c9Yq9U4oqfmdeNc1jhNJZG",
  "key6": "KrMLGYUYFkTLa3WdLWoimPe6pd71xDQZxDttrjYfFMhqBtwBPBgHv5L5g4cjc2LzsSMLziouRPrVgFqaW7tdgqB",
  "key7": "5HKNhmbRenHDKSeFwKqzkAK9Z2jdLCQ3DyKtFxoYRSc5NJq3QiCr6GJ3DNmkK3yDH75urbSAcWrsf1z3qkzh5vaL",
  "key8": "WFQjNhKda5G5B329cgSaA1w6sTzj7kipjhPVEQcRWeSCAGFLM3tmjLBhwq8mYA5fjZTvm5MbJ9Ravz3yfQC4JTH",
  "key9": "LyyY6vMaHdFWyVuU4ecNhap6Nf2t5MpTULwLrzBERDbb4QkvG8ye9DwsV5JnZZ5ubYn4BjWCoc8NpUKV448ychy",
  "key10": "F7TqpRBNKBaQebXamFZHoxrm6A3BNFobAEfjn88dSf7HYmBgQSqxcyovznDdro7RRyadhh9mnM4rCq9upuMz8TS",
  "key11": "6w3wcUJhT3WmPGDz9gyv9FroCA7egyw8KUz69BpUVUB79RvADHwd3ZFDPsYL6N53AFNSBvu8PXCUzHXmpL1HQgF",
  "key12": "2ghiqphnazhTpBwmjLzhnnYWK7orkvCzxyNn9fPTHGj7vsTRhh4EGvrjvDSHgiYYL7npAiqCSFP46eyWnnGbMDAn",
  "key13": "T6EuJVK8M1o6zp7mSRe4pB2m9T7oeGDWJYECu7Cj1WZ5XcczJEt9sSN2vm6ZMiv3sdQBuqKNEQ5KtckEJds5MNb",
  "key14": "564qUUYJjGeipuVoP4WynMA3iDdsnqiAe9LUm7uHEDcbUmc762heLuUQ1HuEypSsr6JwzDAiUBBdQ9vw7nAgMo4u",
  "key15": "4DfijGXjvF6cgeQ1FzuYnZWv4JQeGFQqGqs5pK3jXF2TrxUeNQsUQcszvTUoYkpFRCgBrz2QD23b1fjHULvnrvki",
  "key16": "3AMRLZ2aLDxBrb71DWapkUiKexx8edxTDVer4mQnhqWDmgzDFTUZRW5DGhePDZQwQ4pBZzo3kw6b8aEPpKK3r46N",
  "key17": "2evP8zuxzBqUN1sy3FS5EvFjtgkcnF1xArL4BnPUq33EvaaK9C1bfPMpEaf9T2BLR96ULWDWF8ocbkETdMcCM2hK",
  "key18": "3QUUe521xLumUkvZ4voiNWg5BDsWyGYnqxqytbLDLUafGZXhUXeDwLeCeYt571WvAbVYqo5X9U6t4tZSjNtqwDaF",
  "key19": "5gYxa4WZTvgnEEfYZb8Y8UGPYtNgJSSRtjyTEDnxzNV9uEAwGtk5WbNjMo6MkKjokYTMGutKm9jJdFnPoghrpRva",
  "key20": "4m9on1vSpDcGCsEEuEGWVouR8GjvphWXyQR4aiwt9MEcmE5JDzzn2qBcffDoEoQpHXrv15i3hJAj5NjJnggE5LQ",
  "key21": "4nDRAd6ZbZgGfmGNX9GB8Vc6R52goxMWH2Txbqy3UHkayoYGYTdp9Wh8cu7Y9F6jss8owqUDj7yo8pgTYDnr2aZa",
  "key22": "3p44f1EhaHAcH6kRPbC29wFEnQJA7T37FbY8oxCuTHWaYwhAMJ7LNgvbzFi1Tw6vH9RouADTPhz12KpKX6B6A4mV",
  "key23": "4akU17sN335rBVeo5MS6PK3KMJqdKuhU61d9y2yP3bNSUtCEMzeawQWU3BPHGfwNeWDTDdkGu26sWjDwwRSqvUSH",
  "key24": "55LhWFdxowhEqc2EmH1o5HTdCV5sJCL6ugWtdhaCkzKsfgwaC5e2FVLpUa8oD7E8Rh6vPVGbwrvmVuvCYgo46cky",
  "key25": "4Gdw2cy6Z1NbWq2qHeG2U7X3Sovp1ybekCgf7U7bUm17Qiw8C5CrFKN6ofxHhK2Do7rqKGvmSdLvYiguJm9Eqfx7",
  "key26": "4sLim5Hd4qzdQBAoDGfQC7v3nRhJvbMyV1yPxSyVxBwzqkQ1zEhBRnP3QmZSHRh5iHmsrTRUc6s2MRTvhRYPkCY1",
  "key27": "k26Npg4yb6D9PgwoeqdsuV7qWHNc9byFb5RZCtcdcWK19puKxqCEi7JZsLe1yr8z7ipSBiv73D7KG5zpaaSdLju",
  "key28": "33ik2TEcivCsKi2EJAe5AwDna9YXLcPGgHi3fbXcVA1Qajr4dCKGUVqPvpszBwQttkhx82ktcatYR7SiPxB4Ltcf",
  "key29": "3Hnye5Vti4m1Qa3nncjanuWhK7wpxvMfqt5sB3HC8z5RqTyY79zRhca4hLUDe2iyzpXCyNi3neSG2dAZTY7xSiM3",
  "key30": "4wHa7z34MJzRKvsJPFvMooxoYKvWvSLRjoAJqyLNDYYXdCfL7CRN5xs7coSrYwpxX1vXRCzHHprLub3tMnjJKu9Q",
  "key31": "4FcKccxqL7Jbf6hKczMHhuKScNSL17Zd3RkvyYsw3dH9kjhJ8UCudwo5tQcyjZbdsjzDkXuCQeqJgzoBQMH4PTqM",
  "key32": "3g7p18HqG7WoB7wFWjuJzD4JjXT73iiNtiNAxe9gkLjpRgJyZUD5jF1LSupohd6VJaCzeSrJH81xz4nGwzPbihoH",
  "key33": "2UZn9rqZs2TMbnEqq3Z6YRe73XgxV9qheiohtRnwrfa6Nwpcm8jRti7aWYam9iYvgx3igyeNeLUGDEj7o8GcTNwc",
  "key34": "5ZyYM9wp8Hy1VFPnfkdVwZY8pd9vdt461Gjb2jvBmf6khiHucHhChYU36YoGDzQEER6Dym2tYQmbrMR8tcEqpFsi"
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

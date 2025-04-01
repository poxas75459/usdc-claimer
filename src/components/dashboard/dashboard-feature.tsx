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
    "3E1Grz6parUm7ksxdJmhbPZX2EKbNc2wUg2N3hdYnx3fMNzx5Ltyjh8NQEMTbNnmW4VMCRyVUtSi2n46JniWAqeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6jMbhoQNiA6vFaDci2s8bu8Kfm4di9taJiE8qQJiS9hAEir34HPhqowXbpPrHBKvnDU9j9nDinn9gxUo2dbeyz5",
  "key1": "3h7ffxf167wnsm3BEQjM4Av1tzAvvEZSWbNr5wDZqfdeYoATPrGMWNvvAGqK124BHaxdARZAu6mxDqFCdirH14g",
  "key2": "PjgBdaYy7SMjRXuNxJURK1WKX99TQE7UxrbYd6UkXZZwbbKwPZFiSZdbRGkb8LB19sQAyzi9dBS8Yy512nQvKdN",
  "key3": "2HLup8SNSnmVZ24QoTZXSs7gBh953SjJHEiQSCRFz1knLjmUtk52ne65Sx7jtAiTGc5UJFj3cFVEiT8Dn2MDsRRf",
  "key4": "haaMiuTxD8xVPrDwbzetoEmZa18xtoPuvBvJSuCJyEUU4a8nf99AkHUz78jivD9shQ6Z2G3niWofg3guxAqCW8y",
  "key5": "5nqpAshtYgXVNWV9XDyDevywACuaHyR4MmH415WmLu9ENb9MnVfpnRi49Qaf6iu64se7qFX4cXU9Tn8ZZEVvgLs9",
  "key6": "3HmL275oUVj79RR1z9WNpxn7rjs1JUYcBagx5CueWyVUxLPEu8MtxP1HSfL9hrYBKxyCjYBnj39PCDooiBJWw2Ek",
  "key7": "2ALz9LwDSnnHD4BZWShJUjqe1MLEoizLSsWiJPo6fXq4VLfyRW6TB4tvZV5GK1c4E9sEu9TaBuCXWyJiLkDQtYhv",
  "key8": "66EL2zBqfF4n5wXDRri4YZyH1CrUfexF1hvkbV5hV4PjHLes5DpHbh9DPSkoZ7Ztkfbd9piXQNRWUoNWBrtNYLXz",
  "key9": "5KZMcz5Z2e25Ko8hBVxqbn4D6zjoYXrPBmWpQfdZEhAjaiHuVTsgS52RR9UjmHSAAUreUWcjo5QLQs2c8eZojfCh",
  "key10": "i4MB293Tr9DupP5RLUxqBnGdjGeatY9t3HRtjk8VVqpfhCjNsu2rBiSpJpJJf5qkD8nuB5AUEM3nfnGrGtaBrdn",
  "key11": "3PvA8mWVkxtVU5UfonV9P5Ju5JmTd9Fijddzdix8dTa5s6kWJwwcJSEtJhPG4FpVpwnX9UxFCERLEomNHPJdsd1z",
  "key12": "2KQEvM9ZCgGHYnt1Xm3PnY73mjMxJysGhPCuYHTsQA7mB7HfTu1rNwQmh5zXF1LGh5YrRU5FqjXgUwBMDoebA6Da",
  "key13": "2TAG2gm9aTGPiZPSVWzeUCBkLyH751ZYuFV9XKPTujMxS14PLvHw2uWj8LbvVp2UzoaKSCXbZPUzyBNYrpRcVtGC",
  "key14": "3a8nGrJgGW8PwHzy22i39VrChvG4QrKRBryLvQAkZTL8qkNqC6XeaaW8ENWsvz3DGvu9ZAzvS45rjM6ApEy9x5Y8",
  "key15": "3sPNkc3kWj9fNG3MHr8g7q5gu4HLXRBkzes2QuvoGQV2mw4o1KpMdLtbkqDcWxSzXki75THEwk9ZuX4bCqi1GfRa",
  "key16": "5H2p1adc4W5ZRC5gUdo2nRHFCmhgCiavHJe28RL7oQgB8NKJfiArpiU2vtchbwWjzBMSBFBj2GKpGUwJz7N1PHGV",
  "key17": "3FpFedL1NmFMBp31q33GMAjsjGjarg6RPEHEGxvRuSUnxgJRj6gXXDfnC2eu4ztuiTWDzSMjNKNE3Z9vH1Jj3ixQ",
  "key18": "66j6Mg8oxAZfVRsbeNxXvvSq3xDysSdKerUKuKxt5PNybt383vMJbJDnvhUhcEySKfDgJX156R1KeFNoYk6e4Uqg",
  "key19": "JafSVF8YYuTXaLuv9dsybUfGQKvvZRMKsZaA8v41rg3gBVUgpYxuiYfugTWAs3yacuJAroewfRmyDo1hypBFFZh",
  "key20": "5KXuzh4Qgn7JT2CR6kG6B2hErmUS1JtCg2S9tYxbP1uawDC4wpYrwU2Xo1bcKU5PjBuuvxQCuwuJwQdT6kiZq5z",
  "key21": "Gw6vZByaQuVW9Lpknj5d8p9wSEDGPHNi5Yk3sBdpm5Fi3ZFQBEz1kcYxwQ4uHLDVNt9yGdkKavBtQsHEKmxXjbW",
  "key22": "QugupwrFCDPTppwkrFMPHrvf35Nv3Wv8H8mgapSM7QfHZVe6Juuz4F2XSABVAfXV3n82tHBYC1BteFdEwH2Y1Pi",
  "key23": "2iWBmJtjbAacEhpmtBP6ZRFCDn46gfehXphHFEJDR7V4Ejc3oQEHNPdjQUoUuYLPSFYEoHM3jXeKE1eMXjwT2z9p",
  "key24": "5PcZkZXQyxMkNFuRpT8WAbFAk6c7FoU71uqbQb4aojivgb8sMs5ZWYienNWNpneDGsRWrBuxHCDfS1BeSMr6TioG",
  "key25": "5DciTdZouPqUoVvTzgpU34vDCBTanrDCm7sNESM5gPGzYaZWoUybHRt9zUdBzQn2onS5JGCpK1EcWqXsdQpfdRY3",
  "key26": "4GodppNSesCr5WXACbmdYQHADbEQH6xtnfKHEyXcTVVD2U1eLAGvbgAZNFJsHPQxodM4vPnrfX6qUhx2Hr47eXBQ",
  "key27": "8HwKaikRGDJqg8ZHzrXnEtsKES8DNNWUqpGHBq5asHsAfUgw7M9YVpsk5QwVYGcwVy8h5yqB6prfwX5uS4cU4DD",
  "key28": "5pu27AENKDhrMiFEAtUQWgQLaSegbdzGSynSheoh3Y1CkyrVdngaH9TFgknTRZXE3nL2bHFXRHtgRL8sMGwKsoGe",
  "key29": "5wzejxfYF2d4RbPKQHrEi7sj6JFCRbA447QPT24GnksZJRFwKo8ngWVABZVGS3G2S3afYCMoVPy6qB2ByaktQ8jL",
  "key30": "4zwjYpzQGPzQS9TDTeSQHKfutA3W8PrahcoBA8tyehbbsz2uJ2NMWzUGMaLV4LULQFmLSQpFcHCHUfakycEMdSho"
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

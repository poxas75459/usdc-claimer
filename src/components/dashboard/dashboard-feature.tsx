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
    "3zTM2uyE92GMkJUoZo7EptY7TEuoTJZCsbaeZHYiUwLurFgNVrPfQmtci4JP6wJgSX2crKk5u3X9snuhivofvz5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537PeAKw3YoLqJHs2GQuL3f6MaDG3bnzL8eP7icxCa7zPayFrNajux8msgNPAFTGBR8pKz9vMHvNgsopkrq2WiUn",
  "key1": "GdbwK2bvyzKUhm3QhjKuqADDQXdu1X6YJT7PeESXtq3Sk9zzfvkSBNE6n6S7A6EbpfwD8FTS6kJMEZMporGURCn",
  "key2": "5bLtNZLmVHzncZfyzeaiodPMqYSS1FzEP5aPgr5mqerqoubnCGUUQhf4i278T6UWf9hs7ywyfduJh3f6zBod8zrC",
  "key3": "5Uok21aNMsiEf2XdGad3quzkzNTosPJb6KNW13PYBjB8v2LmJLB5jTFJAKZBfuyn6abkr9b7Tfw8ZykPHZ8zm2s2",
  "key4": "uCR2jhPGU749Ekd68kobJ2VWuVDAxcjkcRjwyuRf7k5fMMxAtMXzV4EWiwCcy3vCeXciUJEgo9Lu77YKqnEsWgb",
  "key5": "24LxtGKZa8cTjRLDmoGX4oKjh9T7aggs6kVD7ehpNkeVbQuzfqho9jS5FW9zRaL8axt14mNjp4KH1wQM3T7sBSXx",
  "key6": "2wasS8jsd5fup5hydsmcC2BfRYmy3W23fF3tz9qYT8frv5nwGjaf7iVEM4mcPqarazVHaDBvnhTDfLdm9vNXrtXo",
  "key7": "KiC4GankM9qZK6xrXdVUimT23VNLdKmrb8fdLe99EMX6tBbjuHSqqx55LCXZSuZjwwe4BKDY53eRQDZHjaCgDsP",
  "key8": "24513zS4KY3kLRSvRkm6K1H8XBRW4XDGsJvsAZ6ELp2DJrw63tZoMym1s5yiJvuBWbg3YzoKQ3BVg8yNnkTqyk3n",
  "key9": "5URCYTapafm23dWr5sKEXVZerj53DuMBg9iqq6pQGC839mGbuss5uSBNWmtca7PWJLdV7G2L2YMBRthMA1fpUsNA",
  "key10": "3MLVdAS1UzxfkryFBNj16gPR1YaPaDrHre6jjUtq7tnMAYWXdf7JBkbe1fAYYVywwwMC1gWMcBUs5PHByrf4GW1X",
  "key11": "2GpTXZcBKwXJ3Pc1sEW83pBGFUaSKmcKoCAp9mr4EmFBDNGYYJJNUzywj2u3EvEFT3qTXXKz2gVak9v6DApCq9kq",
  "key12": "Rsj6BNvXUE9g57cR1S5agfhPDdtoTzWpmUJiZa3JCzVSwAQmip4HHBq12F8zgY9xxDgcbX3zMhP8CWMEve8CHX5",
  "key13": "3Z8NSsHZKPEg3u3WC5wYATm7WKdi9hWFFJ7GXL3umEU5ZosH3PLvWK7jhyXhvZGz2kVzNZ93fgWbtKcsqDGAA5EL",
  "key14": "4fCkPGAYAH9tD4B5gZ3XmRxF7RUWzbu3CzSf4X3ArB4h6GMNZVbpGR8mJMCFqkKKfGUwDwenskdZwABbf6ww7Fgd",
  "key15": "3xJ8q8oscqRnYg9AnaBJ6k2CeeqeRgGChbKDNAoDkDFkRese7GLZq5X9mtoazqxFwUiE11sW3HuJk4u5SFqWVw81",
  "key16": "BeFFWQAbcycqGrk7x4ZdW5xb5Zuy4bCaMAh9t12T3HqeCd7kUKTqTieRBwvSwsofcPAa82pPy2u9D89AdFiUCG3",
  "key17": "289gQUrD2NNGvQ49GiHJK5fNLUfRPojXcVemVABFX1GxWHDrSXYiRTMGNHRbp98cNGRwdLCx9WyJkrLuPJqxSksu",
  "key18": "2CyJz2KYBioW8HebV2DSCUMUE456SAJNp19BrYzLpXVAC4WJbgbA6rExuRX26SfSR7afCXwwntn3mNrVfUbiREDh",
  "key19": "WpDXSkoDthn5mZjSph5M7viweoM2MTYVrXhH8xLHR9oKxtu75nR4ReGR4BqsYZ9e2KZsjcxynQW6Rxjn8DUwJFu",
  "key20": "3MwaFm7h6Wn81TAwPWsR7YGiiEAML9RDFqraC83o9pqre8NGooJgJqRvRNcKqYJDDZ3M5fa9xEJ3Y3VUad5T44ZQ",
  "key21": "5DCHcWyptVMT7sAFhwW5L3SV6MruNwXUwecvpydXhAesAKPANbgA8ABbbhCZsUU6rASAbeT6zXqJ2GeyhdUWBsjr",
  "key22": "51ydj945Xnu6fTckLRtbFrkHGwCDWgWndgDFak7aZfvKVQ6uckgpFNgXJZSLegz4XuT4VHPzpTpfK3DoTnWXJdpn",
  "key23": "2Ro4WnJwwavZfYsVkVXG82Z1415RsSYXq1t5prussV5DYzr2Fpv9ycaYAR9QdF7ugUL5VBZZP7i2GKdwx1VTfxqf",
  "key24": "5CNH4799kx3r4xnKWPiSStVJNnWtAi9PiLB4KABazrrvZEdTfLqfoKLgBtJZ5MgXxAqGnfczNaFMTpNPqBAsvVyn"
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

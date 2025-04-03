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
    "4M87Ks4DDkjR55WkwgTDcX3JFB8MptHA9NLegUQLYokEhiLGqZQm4acgnQ7Gc7GPPKRiGmCeZqXjGxVSE2nTo2se"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewX9FjkpeVfvcnL3acn87pZT1AvBgEiBPH5NpL6Pv6z76LbDYyq615WNLezgxMptP3HbVojLnjwvwQQasdwpTkL",
  "key1": "3ebFLW6wrfoyGz3URSrbudJnoJ2eD4dzfaNS2LEhfKrvfSRwruPqei2S5GqnPdKDGWUGe8CEZbQeR6oCUSByfWs5",
  "key2": "2X2cxEMnSaXkowf5YUroHBwwgYamYDixaoaocUB93P19g3dnB3KP1WUXLRh3qgDkuKVs1hFWL9C2EesQFrhQqP1z",
  "key3": "KyDnKuo5ddftEs1YeueGWx4hmVsRQronvkjSeucrjuo5xKD6jAbcpoZgvPMxa9xAwyk7a8c35TQyBGHGUub2Ykf",
  "key4": "57tFJmhgeRmiWURAd1SWkU7p3U6gts2TWyzZtPRL83AaTbFtqe2jRBZ3J6jUsaicYU1NLAKw3TApdxkvSKVYnL3Y",
  "key5": "5AECoGsZDA7WhpUeZBYAGcQRuZFJi36iRnYBvAGBxohdP26RPNTm3ZXbEPvk6k9QhoVynHRCLAQnEr9UkJiKcV9p",
  "key6": "3x7jD8ub1zdMzkkPgxBaKLf57LbeWBfgKyhi8aZQaxrYFA7LzDgKjBxgTgwv3GsL1NJLqw6qo6nHZQuHDT8QBp3s",
  "key7": "4hua7iUx9798qPFhQYrZTiJCiQaWJJAh19sHGN94Nv5u5hrjYYsTPxBj3K9GgWth5jS2mVxnGGS5qJbY7Dt4V8ZY",
  "key8": "3cQmQqJtE9RXdBSBeTZ434aUo2ugfmynqAdsBLXkEHK9GKKrjV9QkuHWwEgmSKSKCEeWbPo44Hkg7kcdTBVyKFCp",
  "key9": "3TAUkhBgnGdvuP3NGQBufNMbU7RWoWbGbxCV4xTCJ9tLbLnwgiGw6bGvBfmLzf2iubDYq8FrNqXNgZGUA4AbgifG",
  "key10": "27fsKyQnZhb36ExQ7GuxniWByhf6UCA9AJ9sjBVKeEQZpTG1LRoXMURqZJ5VSwW4KvQWfafTw3xJJSMeVJ1cPBkq",
  "key11": "5L8oPt6RpesUSKGfF9JWL2KoQxZZ3C8E7kMaJS5NxDs1Z6TCnph4sA8oiRKGnfCQ8QmnuLXtxZCcaWsz5mcQCQ4o",
  "key12": "zjmVk9mnLf1jLPHS2YcJ92zfPxhsv92dtvZ3SdwFDv1RJMDJ49D9ceLDCXwjPF1GTJ5m79fg9y3GQi51S1iXVEL",
  "key13": "4RzQmd1jNaghLcGapgHAMeEFkMVMzdTgPZqfnjTF8NyHRB7ahK2SxXfxKVqZ5KAjPRrTQngWzhbPNCSLeqhU8wUj",
  "key14": "Urcvw6n6ZrdLTeU4SpnmF1urRzE1zuox8FnPgV2cD58GtHKt8XtMEMxkgJXYLmrh2mphGJz9yzAYazyNvoQgADH",
  "key15": "5zzj7dtWJSSAC7DckyoQvohS9emCMS3mQpy5KMy4kZXrRCLrP8bBk25rXTzTcek2SQ9Bti3QGh52yVV8BNNowosL",
  "key16": "446NeHwo62rnsagucW1ZvJFG83UKW4GFmcZnG8F6uyt6enHYP1FRXzHLwmLw1yn1PGeGnSg1ByunvoFKgb2HyCoA",
  "key17": "3xdsSgKFPJNYhcem2LtMpYk9owPMfDSoo2eGKbxtGofghmbECfU5as5hUrTFx4h365FcY2uyuRZHkrH43NvVrSmA",
  "key18": "2SkVz4hTKzSHmLEUZXWVoTuJ6v4152HAMMNU5vnnmBrCuBLGajzKvHoGofu46oMuaoD2S2DRfNTEifwGPqJE2qNc",
  "key19": "4SeYSJVwix226mDH8Rx11V4nRpSXHeHwZjTukJ1xVKqf8KLj1cXswaUksdnN8vqoqKG47mxfa6BncahQzXScUiNn",
  "key20": "4uY1w59LEkMaqqjFdLQKZQ2Ke5x5YLAmkCEXn4PN6to2VyuJENkQFUV8akL43zpPsWhXYySBA9s22WYCPDGL1htT",
  "key21": "5CQ46gPzDWaGmhWqVnqWsh4g3mmFXRKCCFpfaYbSjgYx2GaFn1ZYzcp6C8MwMMfx9qratLoC7v1S3FkbfS995bYV",
  "key22": "5Ku2obGgZW3SDwuZrUnHsPvifygHGvYLHJexCsBz2gcEsQYg8yeCj8XRhFXhw1RrTkznGJ8ksWjhQu2Mc2aW6cEc",
  "key23": "4eSaJHh7K9SbrjT4r3U8PouFVKAXsp5uYW4RfvRD5zX9fFhfoui92aEiRXeFNQPX38TZWScbi92nEMH4N4RCZjqU",
  "key24": "2so7YYdjzogdc54R6mDVKx1ovBcxa9Nkdf2TnqCB4pLZV4gkAfqDikW9o9hRvqA6YoY6oLL9oKngrkoZPMhTh6WQ",
  "key25": "3kcogEfq9hnE2eV515iqxVNLRBM2kRWNa5vdYQqY9bMQHL6PmWrFhpA5ifGU5sjKK9Q7GkWWNYuzkRZnGhpXyy4h",
  "key26": "CDF8bKNjQNQjaNtPnikq78zFiqaeEkopRwzpjhj8vLXGuKmsQCUMkvU4o2uTQwBWqBkvqyenYE1o6oNMLSN4UZD",
  "key27": "4GkXk3c49Bu4didwTMX1MtnjmygGDKfAJ88wybCoJrKpYt5DeGAUQFgCWdry26y1JmWuYPdNAR8q9gAn3AEvh2yq",
  "key28": "2cNCYeLE8AnVHYTS4JuEi5XEfX2LNnhTCYGpqsJFoPxaz8NKwfuXj1K4yAPqqjjGfzRnF1ES2wC5tMXPfehuV5mv"
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

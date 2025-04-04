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
    "JAUjyv19aGGPhTf3PwuoYULJ1w8HSs8LT9Nb9k6MkuRGZWdw4HA98idxqaRVpp7csBYXz1cHMt1qmp9jLNLcTE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYCLGnqrVUyCVf1kD2jRkk8ZahBtzMorrdQ16HajV3Di8mdDSXpdS13aPsUYUk83QRhUvJFJ2Z5WQYE7VKDKVnu",
  "key1": "4LbrvdNFGyHwcjeN4jGFt9R9vaZTq32r3NdgFPZ32iU2kJE3No2hcGJfnCaAPDx8ou26xGc3V9ffW11NzsqcP2Cx",
  "key2": "59QwfQ9AhJbK7es23Fy311kz9NCi2pe6fQML31NhKknEUx4RAUQWGAA4hCCHJyXf8SZ2px3USLFnxrzAxLMB45W",
  "key3": "2izyVbtdHSSvetoeLEihvGnEgAJGo4b1519TjvzezacW34jn3GY9i44PsiaoXFD4W4YKLgXJyAhcKGmJPxnejSej",
  "key4": "B524UC7wP5HSG32J6SEXXDb5drJbK2ezhaRNs35wH9TztLURMch7jdAXN9wTt8nztYeAjmxdm1mD6wiuLLVUp6t",
  "key5": "4KMmo3U72yFXMijckxgffi1foYBoSR7ZnQDiCnEaP75NTKfUxF5LuB8F3o96YWeKFuiKmsNSc76wcdkuXLRuk17y",
  "key6": "3iqbv79giBuBnrPQ6RYh4HsTvE4rtTEi9nzD4SdXP9eUhFLiWmsZJsgBtaPkMhCmfDkfQm2sbrcRrvz7Lt7R5RYG",
  "key7": "572erSK37uCHmWZQvETDccuHUQWPinEXqTJRmLuaRVxF41YH7pSXVRuu85bNMTS4zvBytP8rvVuGSt1kgrFbPt14",
  "key8": "66WtjoY1Sdr8jVnTfRroozEVg6dkHg2gtkdF3AHYcxAxuRD61gMndX9QB8uUkZ4StrwSV6foPt7JPCHujD7GAtgN",
  "key9": "5SyMPm6cLGZHx1N69nWJtM8JMYT8UH9B58M1pkfRrpZqu2rD5iJrjN93Jatx462yiRL5r6aEjmEiVFKU9qzKzeor",
  "key10": "3dAQd57hQeW3ECsD8i3k4yQ2xdqwZnMtdQ4kPvfYPcTTpBWUpSDHGtYWXRjboB3vNFSNTvdPQsGFnEpJJFQceC5r",
  "key11": "5HgNng7XtcofuVr4vGKSt3v6LDih8kjKbBM6YDroz3sHyE7MSik65Wu2AAJWacHjYNHNdomnHDUf6V19Tqw7PPi1",
  "key12": "bVD1okj3A7svbukNDfn9pVWbaR4CtEjoevpUYJqTvv6fQJJhTWNkPyDHCUwSNbegmmP2YozNuHAL29mN2ePbvbu",
  "key13": "kApMwT8Rfv5fvdq8x93aanQ9gJRsMvDecBjtFvWgztNHRUaNBrkD77tCt9X7Nf2yFU8mVWjvWVVLqhLr4XvN3P6",
  "key14": "FHRz7RMgauseSRwWnmjHhuLfyBGhUkcnfGxCSWpY8SbBMzYRBsLwkFbQg48Ct6LkJPgc8MrQJjKEBicwg6Bf5wM",
  "key15": "owZePKxWzpvooChYaxsNkvbX6nCwao2BY5RG1KwCiMpNpLtgSorB8WwKPcPZnJK78hc2E4w7Kt66rkJCFu28ZUa",
  "key16": "2BCeVFu4hkKL5YaEkbeJ11LZoRAoyuowcKEVnuKyu1vZRCtMhbEKrRQzL5fTmSoPNTYSkp2XF6iuhWy7rtHcZREf",
  "key17": "3C7R7RpyLBT8wEDhxYf5RrkYUBCo9keRDaTw78Adx9o1edQHG6ffkzB8d62zWn36ru78sH1TJsFvv7KD8dA1ggRN",
  "key18": "5qsERroS7SBKUhJHcq3mPRuAsKCc6VaSJZB45LWXfCchyWMMZxLLP18aSkkkWfD5EifQmYsbnyFC9f7H8WoRwHys",
  "key19": "5yCZwXbHKAGFfBdMnp6J5b7SoVfhmr4SJwnkah7bg1NXxYDrexVdFGWeAzSRo6AANsYNLnRvSrravG8nFmdQ3pyj",
  "key20": "4VbAgRq3AzQvGQLd2diu5kr3Bxp9ShKTNhtn47BtKYynTEtE4x9RZLoAxNmXGsV71Qb3dwr5Rx7hiphssJFgZviw",
  "key21": "4Xp6UZvBxjgAWi5jLNVdhjBcANe25AYuBbPv2Hd9LUsmYVEJFJo7VpLYaBx4awzSLkiDdFRLoa3uBj9YG2fwpkxg",
  "key22": "3XomWVi8M2hyKN54woHkMhCP5BHVApP3hy4sdUdY9Md3gHPPEMvR9UYnHRV3h66wvbfNGqZosNWHVV2LmZYMb6Xf",
  "key23": "36EPEZXRAZLNJDXRALCDKzqJDVKQwefJSpd2ofB7zXWTdMKh2ZdY3fG7saFXtrohaXg9a76TiWXP3J6FrEV2TCbz",
  "key24": "46KBpH7fn42viwb45jrrGFC54ytFyhLeAReisa7GBQ8cfieSVHRUFT8xd8vVHsJaerQvcbiSBzsXpxkKXEMyV9Hu",
  "key25": "3nNfa4WWdsSJxXmbFtfrN3JdgGyco1bx9dT9ZoBxAhAVEMrCCjswwAotk3erAFKy827J4wPPdL8XA3qnAPF1nupk",
  "key26": "3zW2gexkZ9MwvmzwLKzmQvBMp5oESbLUciA4BW18RaR3isxZCw7GwArFfMR16RQnk5L1qnVbQpUfuytUorcuDxMx",
  "key27": "b2csQqVVSwcFx8WehA1ZUKAvMLnVupHp9oe3ZQ53qFFdJvR1rJ8pqBwqz3fXDBKz2nXbReTWXx1djwMzA1SjTwJ",
  "key28": "4BRimy4V8NYtQfvwtYZYZwndBLpA1VgTfnFB6Xeb6X3BQxPs6knQ56FfagZx9LoZ9EmXC771kfazCzSCWgaS1cfU",
  "key29": "6424uePLtzTqm9JQNgtic7eZ4yZKPHXF8bUxeZkbYgke6YXtr7PrTjBAhDWqfqkbZUnnT15FKNr7T3PapswJK5Xy"
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

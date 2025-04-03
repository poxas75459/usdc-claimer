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
    "25QTaCC9KYwY7jVAkhFDK2BfPLXuj72Se93Z7mErpkYByFg2m6JC7fN5wWPRtzZ5FUQv5oATL4SnxxaLfboAxzX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbx4uKRSjGMH2XWCSzN7ktXFEmsrJvVVfb5tfuxYdPr14D8KbYEQfJa8gTW3LechA9geVfhvyhyKrd9JigRTD5x",
  "key1": "46uYNNp4JsdXDy5vYSGbHNaxKPwSWKxoc48qHuLCbtE241zmpcqLyrDRHvYrX8846YdohGMDqSbnEEL5eUt7uw8r",
  "key2": "5KLZMfSNhwX24ezgLbcBzWVE8rZrFs7HyAhUS8EcrCmETZRjXpbowzsxsK21vJNKzN6UvEwwMUQHY9B326ofAhAU",
  "key3": "ZZorWAiC7cT6EBpiLHwY3TMSraptM73KdTEqdxLEYfMDuHvKBDShD1fT4AFbSCr48VbTjjH2yHzRZKB7en9TUBL",
  "key4": "2VNyyQ6eiwAYDhvUmAgKH8puHwHHs4nv3SbMbJG77SFFKPGFakqbkoZMDmdg3MHda5yg5PuvjDe3VWpYNjGSZWrG",
  "key5": "3jcrgjwU8ZqM5dJZEaomE7TrVEqmxmFVhjamL1jMfLyhy81ZBiyYr1xSpwZTnyXJkexnCRy9cEh5uY3c2MimkcCc",
  "key6": "36ArAgADU7W7yaLhVeMBqU4oEMuFytr9XYsKjgXUpSa6F1JQdkkWWWtofZq8rjuNYK8Kon6ZW6PSvQs8RVv2zjoE",
  "key7": "4NpVT5CXnt9AN67TjmRw1DCs8fS6hcVvZWM7bcULYQYKniBWfWTjg3XxFxthKECpoyagKx6ZKBoyNJjhp6KFnE5C",
  "key8": "2dwtwKxqGdqBA8qYjGSmQkiSst6kdL7xqcRJKR9gK9Kk5bKKUkMSKwK2Wkeb5zT3vWhqJBBmaKeU1874CeS6NpeH",
  "key9": "2ZXsBqbmhkvy1j5DAXUgpjaeFEjgrCgbha3u5TEzwrJXj6ddBxddv9161G51N9KAhsChwJ2DBziaeoAAY3C7RvNg",
  "key10": "5VBmHVbMCPD1ufVqPX6GJRqr2Jg5z8GvgJK2CJmkZaGxmybQzoD9k7Sskqh9nuJzyd87ZKhXBnZ4vFHSkUeP9u1g",
  "key11": "a9kAd7Wrvqb6zKnQ28mYvgZ5HyLtZfoUFG6h5WLkLtwwRgnrk4VNT4X2Lufjkc6VTSkFdEkmzCZP3BXk2hgnuQU",
  "key12": "4s1DZuKgogQRN1nEiBDfZTEM4mFAqrEoMKZf18NGgdXMNsMKARbMZQUXZYbWkMyKFvZz6c9Fc8XpzWdH3C6MA7pu",
  "key13": "2u7YQP9fZV56ct9KEM6MDGSpbCvjW5TAy4jBQqqQcLUrP9UYd5TyVa7DYCnM9ooq8joxySAFdQnLgTsz55KM2vuY",
  "key14": "3SpF4poVn3hfbtFU41jtHxQ97KXaC4CsHpStDAXZ81MJjNPNyE16DZsqoJJ22yWXTpSo8ULmEzmCMr14UbdiR4hC",
  "key15": "34s331YSdmuEZZA9CsUS7uMZSJyKk9V6RPar2p9o4NSawCs98znEFnZqKwuWYXhbEK2mvKrYmxtj1REq5N5XfKLs",
  "key16": "6b3S8JXXzZHoxxhM2W2z4sCqEo12mkkP9CwyztRi4TgD7YZ5X4TUHz4aBjuEgdNbRNwHE79YTYp7BTcZXPj5swY",
  "key17": "cp5Leg6xp8AECAY1wEivcdU43XsGWad6V3D1D91X2WMENqiGeGjjF4dawCtSxRjFJBA3DCw6GPG6zZjyUDmFHzo",
  "key18": "3t9tZwH2R3ykoj3RXLTX8G4LQs386iYbgi2ZKRPdDK3r7AwDFANmSBx1gRKQfC4rz8AksgtwFFQxJEE84V5CaFFg",
  "key19": "2maxMHhex2Ypy53F4xxWLR65g7d58a6BMV44ECdDDhpgP3bik9WDVzxisBcXCxx1d5bzAzEwdijXeSXY5FGaVMiK",
  "key20": "2s598kJxrg95DtcSVGZtvAf5otdhoGe2VsKW4875ZuEQR7SmT2rcuAEZssjw96HZXjF6pjeB6bmmLt1KDCBwuGud",
  "key21": "5k3Y9yibKGiJv47ejvauv3yqZG3hnFbVEon4jxasfsaByoThpp5wPbCFxgxHk7LcxHQuSRRKagfUU9U8YFKSF4Bb",
  "key22": "3MZBiMJGS8j9hT9Ce7RuFyFBgNXBRhuZw6typbmHvvZokZeYdgb4xrXAUgdBhk4fBw1MzrrgxK25R8hNWb1vx6kj",
  "key23": "2LpC3Ef8QzFqiLzJn27Vkx2cH9dTxvLFPiAQeJgetVei6oXpdqR7okia8vYVBJqaRjBZFFVF6nfmX9YaT8GLsg2Y",
  "key24": "3tL1quZsxFECtkZJh2b8u5acspC4noaDdt5K4uzxRSqJbk5ryUBoYnUbFgAfbhTQqoFE3UCm33x3QsD4cPXCoLBV",
  "key25": "2sieWDy8WTdAyBxsbViUhm7NLybFTDAEhV5dMjLA8pjv6jsTFrutFbe1gewon6bKy49VA4GPUvrCmfSkXjVkz5W7",
  "key26": "rDfifmhURKEFCUCBDTsDXMSbgu1zPcXmzFpUP3Cw6MNjWU5WYPURCcUZorZaKaXcrrk3j9JiYU2QBoWTtkHNKZs",
  "key27": "7fBtHc19fALYtXrt7ors9bdfipec5TBjAMkCeRNsAEX9mEzbpFFDAGpWdb3MVZ59egMRwTThJrjBxYPyXkiSP6u",
  "key28": "4dGaTjhoF13esYGKeCETC9Lb2fo5UJ58dgbDRj4wRkz9fxikwhrjMungeTbGs7K7NXKEemMqZykUiwhgW58JVUKc",
  "key29": "53gmGRznxB5CufFeQgbm9zdb68ReDnspmGcMSe3eJWWVEhCzDg1pWvTeUhKqeWsrC67jW7XgDmzCD32QWJyTu785",
  "key30": "2wUQGyNjJUQCE4sJXxVg3Bk6S5dfEcXY1MFyLMdZAEXgHw4K9dkxQq2wP7wYnowQvUx3krhcwfUAga2dSRxromAe",
  "key31": "3Btt6Jddxakdz5B2CdQgk1Y8UJ8mkYVbn3NmYcvtyuRRGVQuAg4DHkZPU5A4raXLCoo4ajvvf59up645VAr5cge5",
  "key32": "21sGKCLJCHRbiLbtWghQeTTTAswHsBMZsQt3tK9WoaycrMat4Hz6oebaoYLXKTELRqka1Epi4AbfMDFmvDqkL3qh",
  "key33": "33NgEQkobCxYmYr6ghxwCtNs4Ji9dxjkPSapJP9PXQyn4NxnEpzutsbUttedEkXW24QJrxKsWvfAB2yZpvugKaGy",
  "key34": "3bZLT5ffFoh9NcKo55tb69cqYbJWqKque4cDkNpbwFw4eVudzF8CR4SB4eUHRvtoS4Jj7Zv3ycf7u1kHzHmR39pm",
  "key35": "2VTkWdQZaLhKDN9LLzwQM1n59WQKsqrmkKsRTLpzqrJoDAdHabKBk7YddUn2y3HW4mZ1nXAri3dcYWVGiU761826",
  "key36": "CLGoGkLmQJ6j6PJHzTQi6CspuLKJ2hbWLvVG68uN9JDyvQ17CHVdiBfVFVSwqSYHap5VLnRz37ZJxLjdpR1FRdY",
  "key37": "4P8FUpeLJZSA1movGAHT1epsYuNYEcVNrPDPyyeKHpkZgjn139Up35NbhbVv1rQuBWUR2D6ehVcv4KzfrQMDjcgv"
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

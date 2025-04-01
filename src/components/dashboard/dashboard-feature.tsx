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
    "5eAdumf2vmocYV1J5yb44LJyTjsX3YckgeDeusaKvDEnmZXB1RMvpadz5BXvTreKRYyv3mjXVDZd1F9hoTpzUe7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3wkztJdXSsEsZ8U3TGheB2WDV8Fy2MABNPPHCf3YYCV5xLMdDA2ZZ7ccZjnMs3QawXp86uhjFxjsniUMspqrug",
  "key1": "3rAnRjLpgfnpaiNUAStjk9AKn4Hs7AZGV3FShX2aAJrmXhoypNqZ4zyiYTsK4ic5jY1UDjwmEkrWtSaxJWAHRxNe",
  "key2": "3F4sGfMYMUVVHDFD5Aew3Ak8qnNrZoudZXV7Qw3txiVqUmYRo9VpnW7snhT66JE3akut5C5JBY4pTbrXpi2Jcf6r",
  "key3": "imHX1xTE46YwM5uVQwWQzhqo8sUouWKWNyWeb395LxTPQCFAkrYaTt9faFHdgLB9QsQ9aMhaaF8gw2V6oRUuYmb",
  "key4": "3uxebbKxYztCxi5pg7Voj4a7paqzPm5VXbsKXQyNXwucf8JRhPYTsCc7ArPafA6E4GmoMX5Ss6sr7qt7cM6tGAbm",
  "key5": "4cWKPEBpcPdjxaYhScYfM6sGWgqT9PuDUXtokyRGUejAjTpRTzbsPG5HPm8gDHgJTybgzxr3Q6twHgazjRdLbHQ9",
  "key6": "cMNdGgb1wCWEBSBYask5nnEtYde3nyRW1sauNbLukNC1L8d1p1uu9hVnmnhNSWJHGCjvarbeRhGp2h4E4t5rHZY",
  "key7": "5f86o42RjGDSspbBxXUoxQT5D5Lf2d5FqPv4jSeqxggLDGUGWEqj62ieQFT8j1gxcq83ft6Y2mHL9quDTM3SKeNo",
  "key8": "2EPzZChENeimb6XRwQtD5uxWqCSapLUYLUh5A5oynhyeUBAczxgYkTqM32XUgB4Lf6hP5h6viR5wj2ygA3bY4qnD",
  "key9": "AmdBHoPAJymavYM2cth9QUHZ45XddcG5gQtnx78sEPEdJvgFxvcAgeentnoVjNznw7AXh1R4Zm1RLbWSyqFoWVi",
  "key10": "4m6onL2HUjgC2t4xSBwc6LpoFBsRUwqVfEvhvmfsmjQKCMCn1DtrqKptFtzomn6BABUMPxEBwDa8XxMBdosQUuvu",
  "key11": "5KUnNRrWajN8KYiwrayBukGN9zmpWtM4mKjLheJPNPmXspAPDSGi9rKi6V4zuPXLCToxzh6gKY3GQzVy5u2Z5njb",
  "key12": "5BmKxQVkG2YDpkfs2xkjeBxjChabupLMp7UyRziPNKH9ydMLrAp1xQqAP5ykU2uDK3gnErGdPAX25eKXf7MHFxwT",
  "key13": "3wPjVjrPb2jEfGVQDDbsL7zYYGYcX5XA9uhxEBizy5wxFmS5u1xubVKn1utUTr74L6yM4JjWr1aL7hKocRJ2gGoG",
  "key14": "4vWLrF3ndzyAWf2r1bN5NcarYo2vy7qqLuPvXfTkz2UqinDSKT1b11F99ZZfkqB6H3J8kiwU8ryjqTSDdkChwZqu",
  "key15": "2aTZR995NNTtZnDukWJvAvcVe3Cc1rm7JK7X4wmqNz4h2Q87FrivsZsBYzwtVjy1hoBU2j1yRNsUC5bvLn3oUyHw",
  "key16": "BYftkRi8cg4hefzAkAbKNWQSppYStbtVtQmne9Tp7nt7wbw2LCCdGQC1toBPT1Y1FQBRfWSS2q6B7846Lb3DfUq",
  "key17": "3FBXBHoUxoNLaz2MqdWr2WJ92eBYsGNobvmiigfWi1KhWrxrg9exD5S7GcrWQHNDYfsvfKV4e7RCrcQyR4oj63ou",
  "key18": "54Rigypt6X4fV3zgeTSECae4782AXxZXwCydVSyVcK5YcDUVZdhSMFYhEDjwJ2zYfhAeRPAKhNJekNvdTWdjBS1R",
  "key19": "2Ryh2QwvfiA4PcXu8zD7cY9tTW9LsjqHEVJaa8SJ5m8ncXJUwrQekUJ6LLNE8Y5MUNfLUdYvKadFGb1EMtDAdzqg",
  "key20": "3jcbMmfYdrFJffdcFCaVDpZkgMRxxrP1jZqo8bN78eqUkRwzvjP4gMYm5ZPbpGnkFDxxu7hNiqP2JAjm4npoQAxj",
  "key21": "4B563dKTZgtPS6sCYRkbjLWHLBQJz3mNsr5gzwHW8Zg18KJLKoNxd3QmisemgtkCsDLyNyc4gjCTFDexfDj7ZzFb",
  "key22": "4wFu3PAHjJSQNPJnBAAjijqeQGkZK4FD9XHTEGV7a2EoccPK4mqmK8WgMn6N6gerYzaxXHB9xmnR7STHVyroSMfu",
  "key23": "3w8Bv2UTkUdubPLvZo2yjoHgDibkPdKcrdTEkSHVyNAEvcAMABXidD81NJES422qRqPB8VPLkKnmbzuBmEYkpdZ",
  "key24": "22xBJNBGV73cDbj6Z2acVgQVTNzAh6s4rTGnUYtbo6MowVE7JAqrVNsDFF42G4wLygJH8eedCWKkEFxHybpPt2nG",
  "key25": "tJcvndQWFMD3f5cD4HNDfUxjvAssasiWL9qDxFPgxjmvrrcsrbmz9FsBW1sTFMsftDHCWaEk98ii5sLmDRGdn7e",
  "key26": "67j4LNMyWXrtBQ4dXaa6zxG8MbgTtnKiANxtMzymXytptoMMS4Q2iBqLocbC4j6RoX6T56sBF5o1b19cyh9miufo",
  "key27": "HeSZNjrMmkDbD3TnNrgH6xQFnNkw17tDWEZ5niUGhD1pTEWpqDGKvSKFevCUewmNGW2teNsiXZxDjXaekAKAeEQ",
  "key28": "4uSeQ97JYsXsZMBekg1kg9kdvAUAXR9YWPbqnqyh6kLF73ydmn1gfNDmjs294ZBfGQvkXpbp8F4oUECYqsnfFgvn",
  "key29": "4uH7zRy2fk4qxDRMH8GHpK5EbWoXhcRcLrZRbRr2j7VCWQLqD8gGdgVM5X9VpTQSrE9xFeLnibDSMMAMzT66MCCZ",
  "key30": "65cnaEZXRYkGGBD1aVCQ8iQxN1Pq1EAN19C755F3xBuEAuYoxKpfxYMoJ24SbwpGV5wmp7NpM4QggZ5qe6uALHnf",
  "key31": "55bxghMHdXYgVWZzi7eEDsxfjyza6xnoFcWTcfEwpmDcWvHifqGWAgNPovet34jZoupybqFYSLNqwghZNNnMrYgn",
  "key32": "rH621hgr3akM4eoc6nuy8SuAReLTafknX5WrGssjSuUozTkgr7gn784RXGoPdaL1rzsWqpu5hiiViz1jiRUEngZ",
  "key33": "2EkSV564SeUQRKCxsMKwmLN7QJWecVMRrRyB6yVQ2hfhixVKVproNNKKJuq7BeWYsTP2Z3pbRyVNRyX3n7rktZYe",
  "key34": "5xke6nTM1D3ophzFXADfXG9eBELSojjjZ69QLBzFgUR5a2z11sGToL1fMK2mFBAxevKXJBsEWuBG7YX6qnu7pFR2",
  "key35": "5DiPFFBiULQbkF4t2g2rfvi7ZZAkLcvx6QFcqN7KAxxekfF59jA3JoVPNm9qprbmCE4ZLrhPPbrNhTy45uQUBCgc",
  "key36": "3Ud661ern39nPFYb1tDGnQk5eyCs8B8TJgiXJwZFkwkDG3E9THjw8rVQdaWU7kdD45AxViQ1bExsSZmdVERHSxSG",
  "key37": "4NFkWQAxG1m2h2ccTnZn8kWS1FauuucHm3NgtPkrCLW9CXEFszCCMk8cyi1h8aVzzQs5TVzGjZnU2eQZiytM58yP",
  "key38": "5ZZnK38G4cFDsuaLVGrYdxgHYYL6wJoLVuMJAeCmwwpWsFNuzPCvPF6itvCqqxLx7TXRcxibviSJKM2yCtFh4G8L",
  "key39": "5HWLGLsSqHoBhiex2QRJuLQrQfA33Mg35GbVkvCqcQXtAxztnm4BKrRntsVD1AWPEW4GE9nMnVm9ADazWDCojiFP",
  "key40": "2qGmyQjZNzQybxwNv6BmtwQNNcd4sdbucM7V8j4rLMTmZ7BkoQLfBkd6EKihTviMFJZRvWarUmNjK5RkNtVyZciB",
  "key41": "2EMW45diisLEX8Wqf75pNG22UWhGF2AVxhSaUjPdifiXP8FowiZYFJV7gXYVgTfNqvsfyLaTtpsSj4f5uZSvz4cV",
  "key42": "5vG96WmLWHsgLcE8Rq4GG55VUTWkTihRZJqWUg7u8uhRCtNjXbe7Tw9G7VbToys24pjjnFJWB2tH49FYqd5d9RcS",
  "key43": "58U6dQXcRytaGNWiYPb6s1Cz4JUkSSi9zwUVDoeUnsCwRUgSSY6Aex8X6Hqb3KeFMJNaKGodbDri6kWqkKNZbnFH"
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

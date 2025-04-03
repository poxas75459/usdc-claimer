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
    "3h9L1SQ7SK9PEAwyi6Vore3ux5Rqkd6RR3aeXHCL9frb6zER9rxUVJzqscEKDTEm7ehMCZDspdccg2J8P8VbxnpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cH7scLMYwXw3YjahWS4B6ip4xipireAyc7kLPfeqXmntXi7yyqoTraMnEK47vyNS1oCnfbtnej7dGXszge3CXJF",
  "key1": "2jeoksYm5FtkikMYU5pkm3GNQCBgqYm2fohSEr89aHSKtQVGc7Lau2PuRfcqVZuQz9E7piKPc4JVwhDE2aUjghZ8",
  "key2": "eZVmpWa3SJrNAzgU7eWrP3ftykNykJLmFoACecMrzuy2aAvzUMdXsWkWCn4gVLqLzekQvPbQ5B1fUPKe63qi9tS",
  "key3": "51C1VuEH9FDQ77u66pmzbCQnyHhdvovyQzouMdFWZKZoc84kLcBnYWC9i6bTMqTD6YzSvS5HwsvZv51MT2uyqeHM",
  "key4": "LE7iUs2uJwTnnGHFs7pcatu2PERCHhLVPpX1Gwn9uBmc8R9zSrJMwPX2NBiG7YFDMoFMnjB1droMvdwbWrckfP7",
  "key5": "2KyY4ERYr27LiBKYZqLHYZXcUPFvDi6o8k6goXdzBaUbMuNgRgzQ5iXPAJyFkqEpUJD8LHaM5CgiuQqoFN93Kigx",
  "key6": "5MGLPsXQcLkzpZaokqWWC9RZ5xB7DKQuN8fe6P4AcynaTioyJJDaXjwjJAJoXhV5GuVQPJu4sZr6ZHcHskTDowff",
  "key7": "3migHdEoBycuxyH5TYTWT1Neu1ruRWZwZ3AnBGwNF4hYtpLMEknaMAfyB3jboyn6qg4C4qa8psTJTxRfXsyRseSz",
  "key8": "4kM7vViNDEti8ZjWVX5S7FehnYpLHn1P8npzWaVU9eWgNFfKTMJjRKCvPkqwPeYFMU4eXGDGcZn9LY53icfdW7TK",
  "key9": "2mmZQEZp5UnRLu7mWFhYV2PgGP8FzpHs9tp3L1i6mV2ACTuA7iw1NBruCzcd6gZd4NAPzfa2ZUtvVFG9tAzQLSod",
  "key10": "GVKcgHDdqXHKSKMzBbPWpkTbDkSQLnbn1HPAF3Fy3mqMAfwFcUd8WeeHnRTgpXGyjTDdFWyFLYk9Ms3waKUbqt8",
  "key11": "39mk6HMo37WzLCuMggPPXk9i8mCdRNaR4pcLkzHNdAzyxY8B8qiz9LG5wk6qugwUebuUubWtb1CrZRvzgzCh4VRi",
  "key12": "3NAYyvmAnF9YfhKj7pCbaibRyEEPiMBsaNCFoREzspEJVjeakFXygR2MBPsHcweUQcNABp1Pog8saSKPjBHFEqdw",
  "key13": "5KeEVjhmpx7xoCh4QksrxGCZuc6wDq1EhM5L7tLjsta2pTW7fJNkWM28ssbHB2gq8vHjjtkXg5hBy7STeaAx91w6",
  "key14": "2RmxXGjLQZVGLt2ifHP667pwS3Pn92Y9y3jGCvysfbPH2JZws6QvHfn41TEcc1JARq9TMBwGWikzsVxk415DFXs3",
  "key15": "4P12kE3erm8i6tifXXhEceN6mhPjb27u14jPYqhECnJLzawNoGV5TB5yNY6cvbfyBUZu9Gz7Kjg15n4NSvgm7xP2",
  "key16": "3ZREhVnVMWhoZ2mdeMtowXoQ1WK7wWTDWGF9wWM8KEGAXHFuKTvaxc4voRyFu1VoJppdKGiVAFFgWaG5CuuPE6Go",
  "key17": "57QtVsh8SyTzpsNFdaUGKFXJEzcUAEeTQUhS5hhQaKAXSHAWwFKf41yiN7AjB5r6cqsHaTXYvHLDJkxcw6zP73kY",
  "key18": "4YWJrAxm2o5HDGgi7zE19tpe67zMKmHwrvn5C28D1AZhY6JRGzrdbGrfZRP6v7hvKywh8c21aiGnXapW1U9yrkev",
  "key19": "2AZaY1gZfpD3vfWjuihvEsERS8dUUGcQtfmz6aBQwxACu3MASzXTHiL5wwRDoyp5zPEFNU9xSXtqs28ngyC9AA3w",
  "key20": "zvJ1Kvew2K6qqBDuHf4yqvF9YngKarRqj5EQR5EmDsdHQvKhq9CnATzwVK2n7BnU8kJscZPPYovvJ6FPjCdwfR3",
  "key21": "5BoBGUFU3uBtvt3PUZTQWnJvZQ9gz5GxSBU2kvLahqQV6paRuoFniKRuk8KCxcgWRK23GYTXsMZQwQrzsaJWkEbM",
  "key22": "z5ft1umgtgde8Fb7BAuSqnwipuPjHjHe7xDutqoudrKoMSWu4LkLFdjaw2qfUFZA6Gg7rbeSUsALJLjvffTUwvV",
  "key23": "SR4WHXgJdBemKWcBai6iar9M59X4AcNQFGBS9FmfASbspyZ5joAcu8ne4F2uSnFBxJfrMHXsCWwGiu6snqyypuq",
  "key24": "5aQVpPDvy9gCgupn28wAzg4VXoEj4w8ALZsJhs6uea8SvtEKQ1T13ZSNxZFieg5C9imyDUk1oK7vobT5kjZDE7t3",
  "key25": "5vteP6jkNJASdxTtnKC5DJfGG7ZZk5M71qhHcqhp2AXXRg5Q6UgPdsSRFcEqSmvdyq62AqZQ4QQ9yfLpnLRJiaNL",
  "key26": "4tZMqkAuD2Wr9PxbKvs1ev17GbTK5wndLRm7XRx6hdCq1cCgrzvPcRpZ95zKEvFgLBDramzkJJh84LGBu49PztxS",
  "key27": "4eKnd1tK4n1SUaavJHbuEoyd7bz8g2SJYx5Eiq4zfmvwdzVWZpSY2MH4WPPB1m2Sn5S9E6JSsKWFoyPJaCwtQM1S",
  "key28": "4M4tQ7HRPY7AKSVpxYVkhVgoJnE1EVHmph4tcbJGykzPSv9cpmjQNULHkC6Np2PTwNv2kXH7jYfFWPeSzcj9W79F",
  "key29": "4CnrBWgLnjs4zqHjBWYbwJ1PL1ofzHRWYpxWaqyg4k3g4Ku47jQzPmxRzoqXMjQDryVXbypHyaefUt7KbiqL4HoP",
  "key30": "3PrNHeB8odDkneWmuKX3t5Vdxqtz3PAEU1CV1HXic7gsohHxvzVnGsNh5cQbmu4aiDgptihSxm1aqJ7iznS7PNN9",
  "key31": "5Us7gTQJgf2SZzmEAGRbu1upr7VMB1zrxSD3FjGxtthUqQWacmBw5NnPnVw9inTpG5QyfJnmuvYdJSVktjvUoAV9",
  "key32": "6csGHdyhv11V8WFZym3m2qF16ETY3FyDYcjje56c8nd4QztdzLoE3QLWkgftzkhfATqAsRxg2zV14aMHnnUXF1v",
  "key33": "4ZcNA54Bcua9qzEZjJmfEN9BW2n8i7iXuop1Pb7ZU9pswqf4caRiZB7szLLEqMwctVjmmPFiNdGnS2EEa6NdKop3",
  "key34": "4AtzyAuDxuzb13SiAoBzfv4Ker71EB1vS5H2fmMTxPJdxfp1CmkfKTYwFPVm6bEVsWz4sv29G3aUy5y2ovq4cekt",
  "key35": "3cFGYW8TSzHsKVahC4DC1gXHb7nNx9ucKznf1HWmXpnWzf5U7U2x3pyWbt4mUm4DgpX2DBA5DMtdgSoecsw41ZEi",
  "key36": "3UtGE88b7TxDMskVjJKpjM4aaGmwdmbsaAbXBeY5pk7JHg1R82JvhhyMssaV7N2LwnUMLX8dS3GNXYD2nXFADjCm",
  "key37": "3XQodhdFkPVAYscSzR7eDQFR8rVyJRgkDuhpCHp5L3uc7Goe9PXFfTg28wyZk2WmuPdX1ktYUqCTrBpNPFtp88ta",
  "key38": "3aaF18K16oqK4BQNEjCbva3t9Gjnigm8Xt5NJtFXW3AKvow2qeK1gWRzBB2i8eAAeoz7S2BLSiBG4YujPRv6wHUh",
  "key39": "9MnMtokkBmcmPAeDUTwwF1U6TdtrkQunqL1YgPk9TugkUrMADR4YztGALbRWownSghftxfW6kv26YeL7w1TBfJe",
  "key40": "5hV1JaQrX1dDogn9PJEtcuJeiK5886MCZgHaMvHqnZvxXJbx9dBLDwn31enGfVGWaA1ZrYx2UFZp7RNGZjPkHJQC",
  "key41": "bNCoyjEj94zSRGzEEVG9MHZNHa2P7pRCpFnYu5wxAP7JADMGMS9bZ3yFSQa6VrvjTGgNEQfpcdQBgHpYx9WsghN",
  "key42": "3eR5tW8dqqQwGKh51Vy7P1uUEwkRK4j2oEuhCLV5TyP5DegKuNAHuJKB2tnaZsbbFXvkMMP1pCZxGgcXpaUyi4sw",
  "key43": "K6HXpuYG7CAYVmb7f9eErBHZ8tX1yevuXKS5jAx43t1Zb4yBZNhPr6XDuh1J9tm64XmrNXuMFyFfdhW6TwwCwQm"
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

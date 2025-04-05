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
    "3cqhmk5hErsZPHdfRwEeXTvhcBcodS6gxxwsxdvuQngUZzbU4Qxwbakx7zveAfhf83qQy6dkhckUy6aHssd7P8VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aLi9rMTRBqQpBxV6MuCMge4v3Ayf8YZ9FUeZTKxfL5mQz2qPkceLoAB6dcmCtnnbHasDjRAyiMBjyVuNC8xu1By",
  "key1": "3MPp3i9czAFfqjs3SYcxHXbX3KQJC87eRon6hvfF7KhoPbgsnfk83TbNyQWeBJ2NKoSkVZy6grX8vNDvkozTDjTb",
  "key2": "4XJDFvtNUPA8btrG15Mjo5CHzRRggWZNHJUaBrQo7hX1LkiVYCQM5mTxeVbFb2Z3ovDobk7A2pY2vPgF4fD896Uc",
  "key3": "34ZK2HDMHGr73u54GrtjunJoZ6mk9duQ2tUtNeLhttyE2yFPpHoYXi96eidcnBtXTG3eiBVqf5nGFXvGAiCo1WAc",
  "key4": "2xicMYeHZzK9swQG8cMKCjgJ2ojRfeHQJ98LLa75sjwDwZ5wtLmXH9jbqWWHVX66N1aSy9RuEUb6tb5xe9y5GX5u",
  "key5": "4SCw9nq6rsBiWWtFrdkRtdpBwAbiWd4XrMRr2VDxjPmVReKD9cnq4RRt5r65KYaPfFYziSeAajYDg7cGv4FZ4aD5",
  "key6": "gapQTJyBxVkyLwAERLkQVZjkSd3GDRomzzKfV62tbQZXNRgd8aGjxkm4BJHhKuV7aPhZTXzrmy8DB4PAiMRjqB4",
  "key7": "3GewHMCAHLCzsW2XSRxuRUG4JhQGKALC6iHLaUFKq2xmzpYjc6U11UWKfyf5JZwY6aSCUGAKyjSm1cv68q3hmxB8",
  "key8": "2Lz62i5a9cBASf2vsgMTHFnsoEkoXeKqfWyniXJpEWmwiEyP1hTU6YiHR8CAVK5WaBXodFG3B7oDmnquwH7QtojE",
  "key9": "4wHtpsaU7KJNuS5Y9XgBkca3CBf3EVy9sNNWr5qor4v3FMAXsZMF993gHA7kimct68grKzGsojzEtZiFY4KEodVY",
  "key10": "2DdK6coJcqdXH7HXxVto9ko5yy8kzGAmdbjXtgszGnxdUDmbphHHmfLdexQKZ33J1DaxVz9Jj5Wbmvi1x9eFAJ78",
  "key11": "5jD8bTMb6thWHC4Sx7VspX6hvG3LymUvBM23umJuadycJSsRt2o3SYzqVCbTyf4obuTFEnV4ze5BAAbP8Eiy9Kch",
  "key12": "4bXRY8e2bZsLemP5aBsnkZHDVEetdp7Mz42EmwoCEo34XLjPAXfrhN5aCms4HdCXFVRW3CavqgydztfdQSVvoCE2",
  "key13": "3o1MYgWeHhaZXmLr9TeBWYkjkATKqMiD9ovRx5nRJcK77kZzdYd6KB9FbXGCSthN6t3kY9b1FTJtF1is7QoSv9Rh",
  "key14": "5hDWs2EHLe7CnByXyT9iPLvKYrb397kUTjQnat1w6v1hqZjXpKr1wWDskvcYaobeDg1SRpQ75YyMANwyDwTngZ9J",
  "key15": "29eoUKoz47yeo5hEvJj8wwcbxPYumk47WVftQZordM89mCK2YeA5TWfjVkPbHsFzDTpxUs7g8gkDk3Y7ZX9nnrfz",
  "key16": "Rh64c3binSjmEH2YNV4GdwnWGmF6v1BRPriCW2i5uLZeMxqC5MVjG8fPFNrc4HJiQC2NdNSd4Kcm7hPFH1UGuiX",
  "key17": "QHi7ko1qKEmhEqtzBx37srWyJvKC8DD249Xg3bvVKdozt3XpmZbJ2PuzyzbtrS1pHkAswHtMMVU3RDKP6vKBiDN",
  "key18": "4NNyPuyjX9SF6m5y8U1kxeLDnMmA6LRPqVzi4gojRqewgkMbq8fyyRABZLRHv2b2DDVz64RP6gfJytAnoLugtmtx",
  "key19": "3Ru7kKZZVi7yHbPstUT3Pc2orb3FBMKDEC1yFXx4SsMTP4ziYK6onpRJfagnozVQX9zeyrXQrzvm7dHsexSLVoUn",
  "key20": "2q95H8pecRXDZEokdLuL8GoV8GK7bjSvcXLZLP2o5358Yw33vydCQPR7TpcEZxgatTtSxNJTqMYV5pGUVNNUGu7r",
  "key21": "4NTS3jeLsKyNTnY8jq3DSa2XFiBX9PdmUmmSAHdq6RTpUqg5zFC1nHsQjjSKNsW4VrQ28vs3626xgToHBxWqc85F",
  "key22": "5yqckQZE3svgJyNxvaiDSGGCEC3TgovEhdJwCPPRufdNXEVzXceJurdnitLYwcQfwwPgvsEtZU3rc3dpL8GjWpdR",
  "key23": "fowGAub8oHj6SUBu1QMkz42Fd4KbLzDYL6py7BemVGRdk9vzet9xq57LZahPHinFvMhBy5X6evUgrpgGKqdH9YP",
  "key24": "42pR3Z14ysnGGNn5WTXCsaaXwoL8NvpQUvBB178xt65EosKYqjgKUPsXwyK4Umh6zmYNbP6AYFwgdvUBxqdshSqU",
  "key25": "1AfBZtcVSgLGaVYUMm2yxFaTKAHdh72xnmK98GRjRShNb89WawHHyy62UAn3yM5LJhZDrrFPJm5XL2beGhtnyYd",
  "key26": "2fFMrZAV6iM1DwkzwCJGAUqmncAfAdNApUzuztJUad3zrueQt7ffJTcnSZWhW24neC8hPpLiVp7itGUZfUiafeCK",
  "key27": "nJX7xyTAtid1cpgPdK5NL43oSqhcaFKM2enFzQrnb6KLt6dWraWozW6fHiSyve1EH7WuzbuWdB9kU98SswJBQxm",
  "key28": "2SKX4hBMprsR9Ge6aENCyjfKDei5ccrWusH72HtenV7gxQJJRxdzyhEhxANY5Sniv7qC9uceXwGHJMBjHi3gHs3F",
  "key29": "5NhJ498pxuKY6Sqyy7N1yTMxZAVe8Kbh3R4dxsaK2LxWdB78vkAD1qWCGRRnNwSsFMmByeJG2pag68sSzAvAR5FA",
  "key30": "2UrgQMGTyu7Vq2NJUttnA38GCZ94GqEYYkgENnHLqdRWfrZ3cgrpDfN9Sg5n6xSmKLH1Uh6XBVB41eR6evQS1jye",
  "key31": "GYFVpon5XPUVyqYmN5zbcbEDdqNXcdqgpLouaqtWvjH7FV252E2XtT793YdrJcUBfr4pjMqLDBXTTxLNFNfkb9k",
  "key32": "3JcLX3cC33N5MS1GendVyxNq7wafUUNSa6A4LhsVHgxHqqhLP371WhtE3YupTuChNZ1kXVzUj1cBReUCEqTMgYyM",
  "key33": "TiVpNiSRFpQn3j6rEH3wh9LEaaKmLKqMZuJa9bxwLfB4zU2S47eTwWD6NKHL7pSjcZx4z8zTrRLN7taTNee5rDD",
  "key34": "45dS6HtpYNUDWuUv7bXfPjYQopmZFLcKsCSmbdN9VebQeaSycqUKdBWKdANNCYt8vtGBXUoWnyuPorZDCZexi65S",
  "key35": "QAQjgQA3AyfL6142BQTiaoCwTm6UQ7ha9oapxAA45UzfcZLBRn2k4Qn94QyHcZYsfms4NQ5a1gRKUVaCxRcLUU1",
  "key36": "46remVrLWuEUXcC6Ua8cR86DhUNsLRASgojn7VroAnLZwnVHp6y18Mgs3RXvuVH6cHCxzaT4NEMjZVxSBrTAifcS"
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

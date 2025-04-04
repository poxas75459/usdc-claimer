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
    "61zUsb65dbtTam98cnpYRAku8Hbz8pvDCN4fDYbcPZXydbnoxgwkfx6fPokgb2W9CpefTy28JnPzr1RYd1jGNZzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1XytZqwtCg7PjjGRb7AJqAryPgA68KLjB3egFeyEBxxkWKUCW7uRczbcd4mN2MMj7iYgXuoCuVZ6h9kQ1rbgcfQ",
  "key1": "a3QhRhKDEQZ2pSePsC9rYshwckkUyYbTGHut7imracntYfMEdN6p2GHnYtUJJJrrZTsV9PGuFwTAZZsVPBWYTKD",
  "key2": "3adRsnHs9JysxG9M65Ypz6ouzGwiT5jZYTmDYsTGK6yCAxXvMP4x8QpqBpwpRVpjnvfLyW1vuaSJVw7w8HSZSqoH",
  "key3": "4j86a7ncRTNvZUfW9EQ16n65a2Bu7sgVTL2MffxVsB9dkwFUnxPaT1BvQ78pS8eMZr3jKVX6bPxdYD2HSs6Q66PB",
  "key4": "3cdnCHNJwUQak5mkbLiGTaEQMNVMcMGz5YRh1WcV2dEuUszet9kRs8ecUHQ73r2qNrtZSrocXftrW3VtiDNruHak",
  "key5": "2eNr7Poa8NYYPxHxpXYheGMgfZHXVrkUT8fuwhaLz4VVn5X5WKKQwUZv1ETD6wgoPjtWqLGYXPbrAAZ1TsPorPZS",
  "key6": "5t1yRxecpGnHAS2x97U2cgD7tz5XVAChBcEAMa3dnHd5MS1jz4neTpxfKtYHrGkoBd1oC4xXwtphFXJRnFEehtTJ",
  "key7": "5WF3VGEcGBR2cR26QRMSkXJCb9jvPndUPYjLkSwH8t8WnrCqVnMWYDD9ZeC6vmTzUvd2uorsGGZXGCKyAMPpkwtp",
  "key8": "Ve8FMFb8yMysAHusHRG6CvMEfvv9gfN692yLDHzzqX4TK8KQbX6gSkM6iRFeW9x35CPgwoq6o5kK3QXZ6vGV2az",
  "key9": "3xjZMnZo6Y7WHxwtJ149NhjqWdCMALZQfeRLsTvxDjHTbkbfyeMYedgtDPGySrw1sjfiR33i3AW5uPi56eF2xepT",
  "key10": "2XGrEK6ukPEokYxsBkC2CMWeXMGxJ81sLDoG5u1KsWixFX1FUNQPorfV5yTMuHqUiwFwbgVL1DumwfwkmwTKyKWi",
  "key11": "5Vj1DHKqjCUZBM5z1mQM5su516CVouBCePtbCR72Wpuiu4zEJigvQStTW6VWRX8PMzaZ5846Ki2Apdd6cutHv7yu",
  "key12": "3Q2gPoEx23jjnHg1dKiJBeNgEEWF2HUBRPy5j1J8tkjvtz7q8yjEwDtxyMv1L8bcf1i8YubBbiRfyYEfyrwTQ8xg",
  "key13": "4SJKZeJN4z5547MTnxT1gBTFrGwbsn5HU8A3eQruSFLyuKX4YLsJFJA2Q96wx7tg33WcciGBBsv5s1yMEZ279aiU",
  "key14": "4R98UVAAQLxr7XCpdp7XsAFiJCabtqYyJKsntkzXg35dX4k4nzV5neJxWv1MUNzUtZQAzs3rcFC2XLBmMzXWyVnL",
  "key15": "2RB6Ug2nLV2smdYzFuVNhWUPH2HvzheKVEjrxwTy3tx9vDpzfZGQx5ZN8gfTW1MEegG6hVYXCuvnacHTevvnUmKo",
  "key16": "T8JRT4wzWNdgNKXvrz27WzaCdkyzMuNcPiJAR7kRitjcW7ubbx5TUPLdgoiSHWQqE17q7LgvMtcH9rqVX5VFiRu",
  "key17": "4yAvrM7Dz6wtCbhJRrB7vHaMGptFa1iSXogy1LLBppi5DwNWczNfoVwW4RYJghD2ntRfB9dEgTt8mUpKNivYJ22S",
  "key18": "2rTFDfHxqCtj9NdVGEaaDJ2a8YBQreqCTi7hk1DpTBH6owcqkRyzkBoLpG637feuJSj7e4zpxAnXwnLNMeJFFUid",
  "key19": "2L9Yec5ebkpN475WDFjwPsExQfa4DkfUeya8t582a4SQnomdWV6JiupwgAA2JmDDcvH6Ph3e7vExGirKRE417BAG",
  "key20": "pWc6NpyNVz72BYyw5ZYAB9GLYvGfGwnoFtgtcfF2kPbnDdKP9WtJXjcRmSwhNwHFKUU3JVUHsB3kYr41gbiTYie",
  "key21": "4s5R9AA8Ab1TfR18esv8G7MLSUDQ9XCG5ryW7SnBe2G9EdYGLGLNZfT5niKhWSFQbKqUrE3wDEuGbE3fsHPzUsvD",
  "key22": "5KMsoNb6ZPBVwk8VtbShvedJc4gZdcSBNMnU4b81sRgZN6EYr2aHVD5enkzRhpnfHTMTxmJcD8ChCg2ycbDrjW8t",
  "key23": "3mqcrGeQxo5dj9eWiEQYZuV7BJERsjMLDesVwsfJBYuZTii18r7ofm6eK8CNDrh6iFhYyRnLygUpnrxhHstXMgVY",
  "key24": "4jwmd5kqHW842gDvjj1yoMkCtsKdwzywD917SXCfUNfxRw2bniNB9E3Y2exdtBCMpaQEGY5v4TALRGBbpvoTv5iG",
  "key25": "2smhTZ45W1QAjXwv7yugBPJf1KgHVMeV39jdZnEmsrojUPEjjSyGa53GDXBnxnJGreE4zoJFfoN8Mh2qbw6ed4Jj",
  "key26": "3VMyZmzYgjbXeAtq5r4Hd4wrLNtPrTnkbt2uQABkDSGSqUtUHM5mUkEFCX4c3C8F5r54WiKyquuiuJDLKy4Da1d8",
  "key27": "CMPohKc1oSdDFuUETmPKqrQU4LHyqmDS676NvfQxYkKQK3oeVokvprSAHbXZuHBivtdVPbCv7y4iqscdN8Vxmhu",
  "key28": "2RkHbb9StiQ8MtvNNCxGnHfbP8GtKNHPfoob48BRA4BWn2UQnqJDq7UUBb84ejeQ8ftfvqDDkBn77EVrNqgFsaUV",
  "key29": "4pwMnPbTx93JsDuAJcW9LegUG7XikUouZS9xvE7YPiK62ZxxNWZsDFvyBLm6biCST6DUV2yc3EKDoidSY5BYApWF",
  "key30": "4SXYNFG3tXeaHnDUwZTzjfJ7VrARuszsupVAS67fHgoyFLcRFt9NFh9V2U5zPbXGqUCkyiBLLjsYqRNu3ew8kqD6",
  "key31": "29ASd8GqQe4TAmWjDbAAhUKbRruNCp2HHgDUfr59xzBZGAtzKCsbefDeoPLm8Q81ghYnJnrbrPK3vWdUmiF91kDQ",
  "key32": "5NmFv4VgZVv3FaVti2fW89uGsk2JpKhmUhBxWeqCYjc3g2bNtRFbQfQrwFeXn7pYhdGA5RzMZJQBLVkFypMcyT1u",
  "key33": "UXmPEbWzMnYcSAvEG7UT29pkcQ7rRoTnRG5hTXQiqTJ2XQdkyvJxuHGPL52F5YR1EKkJk218XLbn6aL55cHtFe4"
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

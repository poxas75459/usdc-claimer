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
    "2XkUDiBbophsbqiEaJopKQKqcTy5gz8NcvhmJ6pWXaeiRyzWjQjXWM28uwYLyUZrGJ8Aua2DSAPgZv6kr4JzFNW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284T5iAAvvWVjPXRyrbuSa7hZzAQKRFGoCLjdeuSDxVDFSqgepjPoYyNZmapBgZ5ppBWuiAquGLStES8NS7yoh3z",
  "key1": "3LsFd47sf4JmoWSsiyPe4uYSXQk5tSFp7cAN4ja6zjZMdiY1xptwKLNRgSeuywAtMcaZnQsEGHEcTJrDPaVo485p",
  "key2": "2ATo8pWr1SCxhdJBX6AbQVaSETqnzeRtJGkJJX8h5DPwP5JgsEXtrj7UVJvZ4ba5B2X1StE7k69Di55LjY6Yaywj",
  "key3": "4jhNSCzucMtKjEKiHesrvnpGhMwZSfbvFqDUmbNi6xjQaCEQh2cV7yeTu1DMHMnMUgwsbuYVEqAHXM81r33BHQA2",
  "key4": "vncKbRHv7Di7ZYtZc3x5jvMBMFerF2KAuNdSYydK6txEozK7x5N9GXS6Qit9Wx88VyXgMf22CMg6b34DfkP85Tn",
  "key5": "yg5KXs13DUtzkwNuCmUUsbyUGLQV9Xze4nF8SfR7NfMNpZEmLcFKZW6oGDgWDD977HQpJtEcJRAZuAft9RxpaaH",
  "key6": "3n7cncx5B5EFBLHpWhS7UH4gY12gFWHUyCLntQDZQMZXxTGSe8qtmVYHiPW4J6aBtmCMnfXjLy1HcSHtuxwJBu3C",
  "key7": "2f5xeNAeMQvogFuPpLj5iKGNU1LsLGjV5WQ2vEJC88hjt3bVY1w9pkMk9nT7samcEUg4GW2yBVqtXHh2qro2NTEH",
  "key8": "3zePnPC6jkaN8LBRZdmENrxEQw4wDUhZCERSrXFi5SS867KcM7Jmu13CSUJetRu8S1ZnWbB2oc3dtDCFDk5q7MvM",
  "key9": "2oxCtQiZkmYvgKXsbeQ14BrtqWXsone85ZAfwnc2FECm5uJ1pGDVMgGBmdFH3vY7t3sZJFb9RJe67aW48vajjsbV",
  "key10": "2mfRC67qCZ99wjdqhtDPfc7dyR1wqo2SMMXJ4WxRQtGj858cmRKC6o49fC1edB2Ft4HsgaHoxaqH2d4PaSgNBH3v",
  "key11": "5SWyhoVNYDY85i9teMm5kMsU3B9sgTE88X55fLPjPHTo1ZCjphAE2DT6uA3rzeAgDLjCMx6JvVyzXc6TCnQBhPUw",
  "key12": "5UpUkzgy9FrXDwc9kbc2gTBrDCs3Bm2XfWgJMqT3JVeV9DrNyGsZYvFTkX1tjA7MRSDURjdntjApaSopNYUU69EY",
  "key13": "2PXu3caWKfcE5y25dzsvDMx6MrG6eQhn8qnMHq4JzgcRgMpCVSchfWMyRvGfyBFSJHmVRAqv6Z9qAddGJcGqDvQC",
  "key14": "2rEpNLybfLUdFV7bQEDtgxpNvakFcYCjgQFMRLnduyisK1WjzbKMMYB9cTHYbSpQ3N6duAKMETrigjcZQPvc2wnr",
  "key15": "YJ6xq3GNkEb3V7m1dKwgjioPzrTXM57reKt5845cxFY9Ynt4pxfQPnHSRucDtPXbD71ooeaSTkpCtTFrb1VhaM8",
  "key16": "392Mni5g4PqK6BvkHQgFi8VtZmX7CZrhKvEBSoYJfRp25JbkscUDruz75VpR9dUtmgT6dm84oF9b8VD8to7ULg8D",
  "key17": "4e8kDDRbBNbwZhjXBmF8zwYK11hBkF4VAyLCuKgGGRwZpcoBw8sju1CkZpY1rwNZvuNDdP2wxjPxPNvoCNpsBXPD",
  "key18": "5mpr9MnqmoAzcxFFynuUGWe3t13U1a6Tipg2QoL9Pugw4jsMu3c6fS8q4c2NafUG9y9bop8jbGe7XvRpscxDFJvX",
  "key19": "5BxKFe79C9nb26tQvp2iTQszTpQr1uNMyhZfvdE5xmPU4oPB4Gp5fFU8fydx6zfix9h8WVyQZwRfZvBkd2ymgRD",
  "key20": "UJTnG2G3UhoQcSU35HvUWA6kHqjZcPE69YtJ2q94bLarZNsz33uTaoWbHLjt5qS1J9UQhzUyyC3hiSobJ2AQqAE",
  "key21": "4iTmEyHStDq4qCFNgokyaSe1uhG7vLyKFWprZFGyRtQMZ1r2HykuAcQrAsjUHRFZUG7uJDiBtvEsYw7qKrxS7cwD",
  "key22": "2nw31yDSem4VLWb8hxiH7TMcqLPitT9Yvd7kFV7F4s8TWbW9ijTwAoCswMgH1UEajz38Y75pYr4RkTQodNjhiEN3",
  "key23": "2cRARPdXyTZBuiwUfSRBZTpWpesFw2Ki7mKxTfKwfSr76yFMexZbg85owKwDM5NRmeS1HDVZCJBaS9enXShkU3AB",
  "key24": "2RmyiHqWLy4PteeoRQHEQ7KNbmHth6gK4dX3ESm7KV3f9AJMED8Vfo6C7GeSD5E5w81ostXm4LaH9sptnswQiajM",
  "key25": "cxTzYnux1eM2tsaM773TpDinorvjcWczhjWbijGS8GtpDTDz8Nc1yRr1cVKk5G8o2UzGmGG5F658DDG273pb59M",
  "key26": "4imgzoimXWKfem6tDknTYFj2uV6afH1JeDxEYPwYmxi2kEc47maBXmYtesdsCuqrDJA12V3wjpA5nygwV5CWbJJn"
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
